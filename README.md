# inline interactive proposal poc

Example:

```
let counter, intervalId;
registerComponent({
  id: "9939392182382",
  scripts: ['http://my-awesome-cdn.com/lodash'],
  didMount: (containerEl, _) => {
    let el = containerEl.firstElementChild;
    let compiled = _.template('Hello <%= user %>!');
    el.innerHTML = compiled({ 'user': 'Tom' });
    intervalId = setInterval(() => {
      console.log(counter++);
    }, 500);
  },
  willUnmount: () => {
    clearInterval(intervalId);
  }
})
```

- `pages/lib/fakeScoop`: a list of interactives embedded into a fake scoop json response.
- `static/component-runtime.js`: the code that registers the interactive to the page.
- `pages/components/NYTComponent`: the inline interactive React integration
