import { Component } from "react";

function replaceChildren(dest, src) {
  while (dest.firstChild) {
    dest.removeChild(dest.firstChild);
  }
  while (src.firstChild) {
    dest.appendChild(src.firstChild);
  }
}

// run multiple scripts in sequence
function runScripts(nodeList) {
  const queue = Array.from(nodeList); // IE compat?

  next();

  function next() {
    if (!queue.length) return;
    const script = queue.shift();
    const type = script.getAttribute("type");
    const copy = document.createElement("script");
    const isAsync =
      script.hasAttribute("async") || script.hasAttribute("defer");

    // TODO: handle 'nomodule', 'nonce', 'id' attributes
    if (type) {
      // skip unrecognized script types
      if (type !== "text/javascript" && type !== "application/javascript") {
        return next();
      }
      copy.type = script.type;
    }

    if (script.hasAttribute("src")) {
      // external script: next script is deferred until script has loaded
      // TODO: don't wait for async/deferred scripts?
      copy.src = script.src;

      if (isAsync) {
        next();
      } else {
        copy.onload = next;
      }

      document.head.appendChild(copy).parentNode.removeChild(copy); // script apparently still loads after removal
    } else {
      // inline scripts execute immediately
      copy.innerHTML = script.innerHTML;
      document.head.appendChild(copy).parentNode.removeChild(copy);
      next();
    }
  }
}

class NYTComponent extends Component {
  mountNYTComponent() {
    const { id } = this.props;

    // a NYT component can only have one script tag!
    // todo: find a cheaper way to validate this
    // if (this.el.querySelectorAll("script").length > 1) {
    //   throw new Error("The component can only have a single script element");
    // }

    // this will return the component if it's already
    // been registered, for example during server rendering
    let embed = window.getComponent(id);

    // the component has not been registered yet!
    if (!embed) {
      const scripts = this.el.querySelectorAll("script");
      runScripts(scripts);

      embed = window.getComponent(id);
    }

    if (embed) {
      if (embed.stashedDomNode) {
        // restore dom node
        //log("restoreDomNode", this.props.id);
        replaceChildren(this.el, embed.stashedDomNode);
      } else {
        //log("didMount", embed.id);
      }
    }
  }

  componentDidMount() {
    this.mountNYTComponent();
  }

  componentWillUnmount() {
    const embed = window.getComponent(this.props.id);
    console.log(embed, ":::: UNMOUNT");
    if (embed) {
      //log("stashDomNode", this.props.id);
      embed.stashedDomNode = this.el;
    }
  }

  scriptRef = el => {
    // the inline interactive only has one script tag!
    if (el) {
      this.el = el;
      this.inlineScriptRef = el.querySelector("script");
    }
  };

  render() {
    const { html, id, ...rest } = this.props;
    const registerScript = `
      <script>window.registerComponent({id: "${id}"});</script>
    `;
    return (
      <div
        {...rest}
        ref={this.scriptRef}
        dangerouslySetInnerHTML={{ __html: registerScript + html }}
      />
    );
  }
}

export function isNYTComponent(body) {
  return /<script data-nyt-component>/.test(body);
}

export default NYTComponent;
