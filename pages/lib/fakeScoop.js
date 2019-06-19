// The html bodies are copied from /static/${componentId}.html
// Don't edit this file directly!
const embeddedInteractives = [
  {
    sourceId: "stateful-counter",
    html: `
      <div id="int-stateful-counter" style="min-height:120px; padding: 10px; line-height: 120px; text-align: center; font-size: 80px;">
      </div>
      <script data-nyt-component>
      (function() {
        let counter = 0;
        let el = document.getElementById('int-stateful-counter');
        el.innerHTML = counter;
        
        intervalId = setInterval(() => {
          counter++;
          el.innerHTML = counter;
        }, 500);

        getComponent('stateful-counter').on('cleanup', () => {
          console.log('cleanup');
          clearInterval(intervalId);
        });

      })();
      </script>
    `
  },
  {
    sourceId: "mouse-position",
    html: `
      <div id="int-mouse-position" style="min-height:120px; padding: 10px; line-height: 120px; text-align: center; font-size: 80px;">
      </div>
      <script data-nyt-component>
      (function() {
        let el = document.getElementById('int-mouse-position');

        function updateMousePosition({ pageX, pageY }) {
          el.innerHTML = pageX + ',' + pageY;
        }

        document.addEventListener("mousemove", updateMousePosition);
        getComponent('mouse-position').on('cleanup', () => {
          document.removeEventListener("mousemove", updateMousePosition);
        })
      })();
      </script>
    `
  }
  // {
  //   sourceId: "d3-example",
  //   html: `
  //   <div>
  //     <div></div>
  //     <div></div>
  //   </div>
  //   <script data-nyt-component>
  //     (function() {
  //       const id = "d3-example";
  //       let timer;
  //       let svg;
  //       let d3script = document.createElement("script");
  //       let d3script.src =
  //           "https://unpkg.com/d3-jetpack@2.0.7/build/d3v4+jetpack";
  //       document.head.append(d3script);

  //       function render(el) {
  //         const [svgDots, canvasDots] = el.children;
  //         const width = (el.clientWidth - 20) / 2;
  //         const height = width;
  //         const d3 = window.d3;

  //         svg = d3
  //           .select(svgDots)
  //           .st({ display: "inline-block" })
  //           .append("svg")
  //           .at({ width, height })
  //           .appendMany(d3.range(500), "circle")
  //           .at({
  //             opacity: d => Math.random(),
  //             cx: d => Math.random() * width,
  //             cy: d => Math.random() * height,
  //             r: 10
  //           });

  //         svg
  //           .transition()
  //           .duration(d => Math.random() * 20000)
  //           .at({
  //             opacity: d => Math.random(),
  //             cx: d => Math.random() * width,
  //             cy: d => Math.random() * height
  //           });

  //         const ctx = d3
  //           .select(canvasDots)
  //           .st({ display: "inline-block" })
  //           .append("canvas")
  //           .at({ width, height })
  //           .node()
  //           .getContext("2d");

  //         timer = d3.timer(() => {
  //           ctx.strokeStyle = Math.random() < 0.5 ? "#fff" : "#000";

  //           ctx.strokeRect(
  //             Math.random() * width,
  //             Math.random() * width,
  //             Math.random() * width,
  //             Math.random() * width
  //           );
  //         });
  //       }

  //       function didMount(containerEl) {
  //         const el = containerEl.firstElementChild;
  //         if (window.d3 && window.d3.select) {
  //           render(el);
  //         } else {
  //           // wait for d3 if it's not yet loaded
  //           d3script.onload = () => render(el);
  //         }
  //       }

  //       function willUnmount() {
  //         if (timer) {
  //           timer.stop();
  //         }
  //         if (svg) {
  //           svg.interrupt();
  //         }
  //       }

  //       registerComponent({
  //         id,
  //         didMount,
  //         willUnmount
  //       });
  //     })();
  //   </script>
  //   `
  // }
];

export default async function fetch(slug) {
  const res = JSON.stringify({ interactives: embeddedInteractives });
  return JSON.parse(res);
}

//registerComponent('http://www.nytimes.com/mapmaker.js')
// registerComponent()
