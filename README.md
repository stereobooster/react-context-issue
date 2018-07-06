# Demo of the issue with context testing

- https://github.com/facebook/react/issues/13150
- https://github.com/airbnb/enzyme/issues/1693

```
yarn
yarn test

  console.error node_modules/fbjs/lib/warning.js:33
    Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.
```
