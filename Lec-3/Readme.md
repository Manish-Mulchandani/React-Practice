## Lecture 3 Answers
### NPM
NPM is Node Package Manager but not called Node Package Manager. It helps us to download node packages to our project.

### Parcel/Webpack and why we need it
Both are popular build tools (bundler) used for bundling and optimizing web assets like JS, CSS, Images, to make it more efficient in deployment. Webpack is good for large-scale projects and Parcel is good for small to mid sized projects.
They are used for HMR, File Watcher Algo, Code Cleaning, Image Optimization, Fast build, Minify Code, etc. 

##### Installation:
npm i -D parcel // -D is for devDependency
npx parcel index.html // To run in development
npx parcel build index.html // To perform build

### Parcel-Cache
Parcel cache is basically cached up data so that next devs and builds can be faster.
We don't need to get that to Git since after first build, it will automatically be created.

### NPX
NPX is a CL Tool which allows to run and execute Node packages without installing them.

### Diff b/w Dependencies and devDependencies
Dependencies are essential for application to run in the production environment. These dependencies are required and therefore installed for application's core functionality.
devDependencies are only required during the dev phase and not the production phase. These are mostly used for building, testing and linting. 

### Tree Shaking
Technique used to eliminate unused code from final bundled output. It travers the tree and determines which part are not used or refernced and remove them.

### HMR (Hot Module Replacement)
To imporve Developers Experience. It allows us to update and apply code changes to application without refreshing the entire page.

### Parcel superpowers
1. HMR
2. Asset Transformation - Transforms and optimized assets like HTML,CSS,JS, Images, fonts, etc. for fast dev and build experience
3. Fast builds - Optimized build process.
4. Code Splitting and Lazy Loading - Generates Optimized bundles. Splitting code in small chunks, so only necessary code is loaded, reducing initial load time for our application.
5. Zero Config - We don't need to config our project. Automatically detecs project's entry point and resolve dependencies on the go.

### Gitignore
This is used to files that Git should ignore. To prevent unnecessary or sensitive files to accidently commit to Git. We should add packages which can be download after the build in the gitignore file. Like node modules, dist, cache files

### Diff b/w package and package-lock
Package.json holds the metadata like name,version and its dependencies. It lists all the packages, and is manually managed by developer.
Package lock is auto generated and has detailed record. It ensures that subsequent installations of project will use the same version of the packages regarless of changes.

### ~ vs ^
Any verions is basically major.minor.patch. In ~, we can usually just update the patch i.e only approximate verions change. Whereas in ^, we can usually update the minor, i.e compatible version range.

### Why should I not modify package lock
It contains info about the dependencies and its versions. Modifying it can cause issues while in Production. So we dont modify it, it is managed by NPM

### Node Modules
The packages we install are saved on our local machine as node modules, so we can run our code without looking for packages online. We dont import Node modules to Github.

### Dist folder
The dist (distribution) folder mostly consists of final build of the project. Basically minified versions of HTML, CSS, JS and Images.

### Browserlist
Tool that specifies which browsers should be supported by our frontend app.

### Vite, Webpack, Parc3el
Vite prioritizes fast development and near-instantaneous HMR, Webpack offers extensive customization and advanced features for complex projects, and Parcel emphasizes simplicity and ease of use

### Script types
1. text/javascript -> To include JS code
2. module -> TO include ES6 modules
3. Inline
4. text/typescript -> To include TS code
