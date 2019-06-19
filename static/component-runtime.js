(function() {
  const log = window.log;

  // component registry
  const components = {};

  function registerComponent(component) {
    if (!component.id) {
      throw new Error("The component needs to specify an id");
    }

    log("didRegister", component.id);

    let evtHandlers = {
      cleanup: []
    };

    let isMounted = false;

    components[component.id] = {
      shouldCleanUp: false,
      stashedDomNode: null,
      id: component.id,
      on(method, fn) {
        evtHandlers[method].push(fn);
      },
      cleanup() {
        while (evtHandlers.cleanup.length) {
          const cleanupFn = evtHandlers.cleanup.pop();
          window.log("cleanUp", component.id);
          cleanupFn();
        }
        delete components[component.id];
      }
    };

    return components[component.id];
  }

  function getComponent(id) {
    return components[id];
  }

  function cleanupAllComponents() {
    Object.keys(components).forEach(key => {
      components[key].cleanup();
    });
  }

  window.registerComponent = registerComponent;
  window.getComponent = getComponent;
  window.cleanupAllComponents = cleanupAllComponents;
})();
