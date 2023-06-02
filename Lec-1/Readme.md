### Q.1 -> What is Emmet
Emmet is syntax and toolkit for web developers for efficient HTML and CSS coding.
Basically code snippets
Example -> {html-5}, {doc}, {div>div>h1}

### Q.2 -> Diff b/w library and framework
Library is collection of pre-written code (we import sometimes from CDN), which we can use selectively in our projects
Whereas Frameworks are structured set of pre-written code that we use to build applications and provide set of tools

### Q.3 -> CDN and its uses
CDN -> Content Delivery Network. Servers in multiple locations provide web content to users based on proximity. It optimizes website performace, enhance UI, reduce server load.

### Q.4 -> Why is React called React
React is called React since it only updates and render components in response to change. So basically it reacts only when we change something within a component.

### Q.5 -> Crossorigin in Script tag (Rethink this)
To Specify CORS(Cross-origin resource sharing) behaviour for exterally hosted JS files.
Allows us to control how the browser handles the response from the server hosting the JS files.

### Q.6 -> Diff b/w React and ReactDOM
React is the core library to create UI components, whereas ReactDOM enables us to render React components into the DOM and handles interaction between Virtual DOM and actual DOM.
We don't need ReactDOM when we are doing Server Side Rendering, building React Native Apps, or Using React for Testing

### Q.7 -> Diff b/w React Development CDN vs React Production CDN
Development one include warnings, debugging info, error messages and therefore is larger.
Whereas Production one is optimized for production. Removes dev tools, warning and debug info. Therefore less size, better performace, minimize unnecessary code

### Q.8 -> Async and Defer
Async and Defer are used in Script tags. In async, script is downloaded while HTML parsing continues. Once it is downloaded, it will be executed immediately without waiting for HTML parsing to finish leading to out of order script execution.
Whereas in Defer, script is downloaded while HTML parsing continues, but it waits for HTML to complete before executing the script. By which, it maintains the order.

### Q.9 Hoisting in JS  
Hoisting is a behavior in which functions and variables are declared on top of their containing scope. It doesn't move the code itself, just a conceptual way

### Q.10 Do anonymous function run at the same time they are declared ?
Most time anonymous functions are assigned to a variable or a function, it is just stored, only when we call the function or variable, it runs.