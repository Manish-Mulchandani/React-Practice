import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

{/*const head1 = React.createElement("h1",{},"Heading1")
const head2 = React.createElement("h2",{},"Heading2")
const head3 = React.createElement("h3",{},"Heading3")

const div = React.createElement(
  "div",{class: "title"},[head1,head2,head3]
)*/}

const Heading2 = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Heading1 {props.children}</h1>
    </div>
  )
}

const Heading = () => {
  return (
    <div className='title'>
      <h1>Heading1</h1>
      <h2>Heading2</h2>
      <h3>Heading3</h3>
      {head1}
      <Heading2/>
      <Heading2>Hello</Heading2>
    </div>
  )
}
const head1 = <h1>Heading1</h1>
const head2 = <h2>Heading2</h2>
const head3 = <h3>Heading3</h3>
const div = <div className='title'>
  {head1}
  {head2}
  {head3}
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Heading/>,
  {/*<React.StrictMode>
    <App />
</React.StrictMode>*/}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
