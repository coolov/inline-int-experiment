import fetch from "./lib/fakeScoop";
import InlineInteractive from "./components/InlineInteractive";
import Shell from "./components/Shell";
import { Component } from "react";
import Link from "next/link";

class App extends Component {
  state = { show: 1 };

  render() {
    const interactives = this.props.interactives.slice(0, this.state.show);

    return (
      <Shell>
        <strong>Inline Interactive Playground</strong>
        {interactives.map(interactive => (
          <>
            <InlineInteractive {...interactive} key={interactive.sourceId} />
            <Link href={`/page?id=${interactive.sourceId}`}>
              <a>Open</a>
            </Link>
          </>
        ))}
        <button
          style={{ display: "block", marginTop: 10, fontFamily: "Monaco" }}
          disabled={this.state.show === 0}
          onClick={() =>
            this.setState({ show: Math.max(this.state.show - 1, 0) })
          }
        >
          Less
        </button>
        <button
          style={{ display: "block", fontFamily: "Monaco" }}
          disabled={this.state.show === this.props.interactives.length}
          onClick={() => this.setState({ show: this.state.show + 1 })}
        >
          More
        </button>
      </Shell>
    );
  }
}

App.getInitialProps = async function() {
  // in the real world, this would be an API call to samizdat/pubp/scoop
  return fetch();
};
export default App;
