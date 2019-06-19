import NYTComponent, { isNYTComponent } from "./NYTComponent";

function InlineInteractive(props) {
  const { html, sourceId } = props;
  console.log("is supported?", isNYTComponent(html));
  return (
    <>
      <NYTComponent
        id={sourceId}
        html={html}
        style={{
          border: "1px solid #555",
          marginTop: 10,
          marginBottom: 5
        }}
      />
      <em style={{ marginBottom: 15 }}>{sourceId}</em>
    </>
  );
}

export default InlineInteractive;
