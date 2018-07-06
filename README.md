# Demo of the issue with context testing

- https://github.com/facebook/react/issues/13150
- https://github.com/airbnb/enzyme/issues/1693

```
yarn
yarn test

  console.error node_modules/fbjs/lib/warning.js:33
    Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.
```

## Explanation

Issue happens when you use `react-test-renderer` and `Enzyme` in the same test file.

## Solution

Use [`enzyme-to-json`](https://github.com/adriantoine/enzyme-to-json) instead of `react-test-renderer`.

See example of migration in this repository: branch `enzyme-to-json`.
