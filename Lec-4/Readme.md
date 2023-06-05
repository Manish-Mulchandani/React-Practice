### JSX
Javascript XML is a syntax extension for JS that allows us to write HTML like code withing JS code. It has HTML-Like Syntax and we can put JS expressions within that inside {}. We can also build components using this and transcribed by Babel.
Example -> 
const name = 'John'
const element = <h1> Hello {name} </h1>

### Superpowers of JSX
Component Composition -> Component within components
Optimized Rendering -> Virtual DOM
And rest is written in above question.

### {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
{TitleComponent} treats this as a Regular JS expression
{<TitleComponent/>} Treats this as a component without any children or props
{<TitleComponent>...</TitleComponent>} This is a component in which we can pass children and props between the Tags.
