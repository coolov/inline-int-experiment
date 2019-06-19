import { Component } from "react";
import Shell from "./components/Shell";
import fetch from "./lib/fakeScoop";
import InlineInteractive from "./components/InlineInteractive";
import Link from "next/link";

class Page extends Component {
  render() {
    console.log(this.props.interactive, "<--- MEG");
    return (
      <Shell>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <InlineInteractive {...this.props.interactive} />
      </Shell>
    );
  }
}

Page.getInitialProps = async ({ query }) => {
  const res = await fetch();
  const interactive = res.interactives.find(int => int.sourceId === query.id);
  console.log(res.interactives.length, "MJAU");
  //console.log(interactive, ",,,,,,MEG");
  return { interactive };
};

export default Page;
