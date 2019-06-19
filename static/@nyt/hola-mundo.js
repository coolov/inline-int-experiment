/* eslint-disable import/no-amd no-undef strict */
/* 
  edit and compile this file to amd using the rollup repl:
  https://rollupjs.org/repl?version=1.12.0&shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMmV4cG9ydCUyMGZ1bmN0aW9uJTIwbW91bnQoY29udGFpbmVyRWwpJTIwJTdCJTVDbiU1Q3Rjb250YWluZXJFbC5pbm5lckhUTUwlMjAlM0QlMjAlNjAlNUNuJTVDdCU1Q3QlM0NkaXYlMjBzdHlsZSUzRCU1QyUyMnRleHQtYWxpZ24lM0FjZW50ZXIlM0IlMjBmb250LXNpemUlM0EzMHB4JTNCJTVDJTIyJTNFJTVDbiU1Q3QlNUN0JTVDdGhvbGElMjAlRjAlOUYlOEMlOEVtdW5kbyU1Q24lNUN0JTVDdCUzQyUyRmRpdiUzRSU2MCU1Q24lN0QlNUNuJTVDbmV4cG9ydCUyMGZ1bmN0aW9uJTIwdW5tb3VudCgpJTIwJTdCJTVDbiU1Q3Rjb25zb2xlLmxvZygnVU5NT1VOVCEnKSUzQiU1Q24lN0QlMjIlMkMlMjJpc0VudHJ5JTIyJTNBdHJ1ZSU3RCU1RCUyQyUyMm9wdGlvbnMlMjIlM0ElN0IlMjJmb3JtYXQlMjIlM0ElMjJhbWQlMjIlMkMlMjJuYW1lJTIyJTNBJTIybXlCdW5kbGUlMjIlMkMlMjJhbWQlMjIlM0ElN0IlMjJpZCUyMiUzQSUyMiUyMiU3RCUyQyUyMmdsb2JhbHMlMjIlM0ElN0IlN0QlN0QlMkMlMjJleGFtcGxlJTIyJTNBbnVsbCU3RA==
*/
define(["exports"], function(exports) {
  "use strict";

  function didMount(containerEl) {
    containerEl.innerHTML = `
		<div style="text-align:center; font-size:30px;">
			hola 🌎 mundo
		</div>`;
  }

  function willUnmount() {
    console.log("UNMOUNT!");
  }

  exports.didMount = didMount;
  exports.willUnmount = willUnmount;

  Object.defineProperty(exports, "__esModule", { value: true });
});
