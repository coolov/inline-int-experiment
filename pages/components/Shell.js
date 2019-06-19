import Head from "next/head";
import { Component } from "react";
import Router from "next/router";

function handleRouteChange() {
  window.log("routeChange", "app");
  window.cleanupAllComponents();
}

class Shell extends Component {
  componentDidMount() {
    Router.events.on("routeChangeStart", handleRouteChange);
  }

  componentWillUnmount() {
    Router.events.off("routeChangeStart", handleRouteChange);
  }

  render() {
    const { props } = this;
    return (
      <div>
        <style jsx global>{`
          body {
            overflow-y: scroll;
          }
        `}</style>
        <style jsx>
          {`
            main {
              font-size: 0.7em;
              font-family: Monaco;
              max-width: 38rem;
              padding: 2rem;
              margin: auto;
            }
          `}
        </style>
        <Head>
          <title>Inline Interactive Sandbox</title>
          <script src="/static/component-debugger.js" />
          <script src="/static/component-runtime.js" />
        </Head>
        <main>{props.children}</main>
      </div>
    );
  }
}

export default Shell;
