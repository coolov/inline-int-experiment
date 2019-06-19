(function() {
  let ogApi = window.registerComponent;

  window.registerComponent = function(id, fn) {
    if (typeof id === "object") {
      return ogApi(id);
    }
    if (typeof fn === "string") {
    }
  };
})();
