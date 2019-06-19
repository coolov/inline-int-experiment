(function() {
  let log = null;

  function createDebugger() {
    let counter = 0;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
        @keyframes fadein {
          from { max-height: 0; }
          to   { max-height: 48px; }
        }
    `;

    const debuggerEl = document.createElement("div");
    debuggerEl.setAttribute(
      "style",
      `
        position: fixed; 
        right: 10px; 
        top: 10px; 
        z-index:999;
      `
    );
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        document.body.appendChild(styleEl);
        document.body.appendChild(debuggerEl);
      },
      false
    );
    const colors = {
      didRegister: "#999999",
      didMount: "#6B5B95",
      cleanUp: "#F7786B",
      scriptsReady: "#73b57f",
      stashDomNode: "red",
      restoreDomNode: "#73b57f"
    };

    return (evt, id) => {
      console.log(evt, id);
      const el = document.createElement("div");
      el.setAttribute(
        "style",
        `
          border-radius: 2px;
          max-height: 48px;
          overflow: hidden; 
          border: 3px solid rgba(255,255,255,0);
          animation: fadein 0.2s;        
          font-family: Monaco;
          font-size: 0.7em;
          padding:10px;
          margin:10px;
          width:200px;
          color:#FFF;
          background-color: ${colors[evt] || "#CCC"};
        `
      );
      el.innerHTML = `${++counter}:${evt}:<br/> <strong>${id}</strong>`;
      debuggerEl.insertAdjacentElement("afterbegin", el);
    };
  }

  if (!window.log) {
    window.log = createDebugger();
  }
})();
