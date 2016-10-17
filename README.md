# updatingLifestyleMethods

What is updating?

The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.

There are five updating lifecycle methods:

- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

Whenever a component instance updates, it automatically calls all five of these methods, in order.

#componentWillReceiveProps.js

When a component instance updates, componentWillReceiveProps gets called before the rendering begins.

As one might expect, componentWillReceiveProps only gets called if the component will receive props:
```js
// componentWillReceiveProps will get called here:
ReactDOM.render(
  <Example prop="myVal" />,
  document.getElementById('app')
);

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);
```
componentWillReceiveProps automatically gets passed one argument: an object called nextProps. nextProps is a preview of the upcoming props object that the component is about to receive.

#shouldComponentUpdate.js

When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins.

Look at shouldComponentUpdate.js in the code editor. shouldComponentUpdate should return either true or false.

If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update! None of the remaining lifecycle methods for that updating period will be called, including render.

The best way to use shouldComponentUpdate is to have it return false only under certain conditions. If those conditions are met, then your component will not update.

shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It's typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do.

#componentWillUpdate.js

componentWillUpdate gets called in between shouldComponentUpdate and render.

componentWillUpdate receives two arguments: nextProps and nextState. Read componentWillUpdate.js in the code editor to see it in action.

You cannot call this.setState from the body of componentWillUpdate! Which begs the question, why would you use it?

The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.

#componentDidUpdate.js

When a component instance updates, componentDidUpdate gets called after any rendered HTML has finished loading.

componentDidUpdate automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component's props and state before the current updating period began. You can compare them to the current props and state.

componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. It's similar to componentWillUpdate in that way, except that it gets called after render instead of before.

#componentWillUnmount.js

A component's unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

componentWillUnmount is the only unmounting lifecycle method!

componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.
