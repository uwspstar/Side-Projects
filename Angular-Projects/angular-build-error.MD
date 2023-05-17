# Angular build error:

## Error: bundle initial exceeded maximum budget. Budget 1.00 MB was not met by 138.70 kB with a total of 1.14 MB.
This error is related to the size of your application's bundle exceeding the budget you set for it in the angular.json file. Angular's budget checking feature is a way to ensure parts of your application don't unexpectedly increase in size.

The error message is saying that your initial bundle size exceeded the maximum budget you set for it by 138.70 kB, totaling 1.14 MB, whereas your budget limit is 1.00 MB.

Here are a couple of ways to address this issue:

Increase the budget: This is the simplest solution. You can increase the budget for your bundle in the angular.json file. However, be aware that this will allow your app's size to grow, which might be an issue if you're trying to keep it lightweight for performance reasons.

In the angular.json file, look for a section like this:

```
"budgets": [{
  "type": "initial",
  "maximumWarning": "2mb",
  "maximumError": "1mb"
}] 
```


You can increase the maximumError value to a larger size, say "2mb", and adjust the maximumWarning value as needed.

Optimize your code: If you don't want to increase the budget, you'll need to reduce the size of your bundle. Here are a few general strategies for that:

Lazy Loading: If your Angular application is not already using lazy loading for routing, consider implementing it. Lazy loading helps reduce the initial bundle size by only loading the parts of your application that are needed for the initial view.

Analyze your bundle: Tools like webpack-bundle-analyzer can help you identify which parts of your application are taking up the most space in your bundle. Once you know that, you can focus on optimizing those parts.
