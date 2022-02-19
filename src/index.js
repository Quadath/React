import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
// import App from './App';
import reportWebVitals from './reportWebVitals';


const Header = () => {
 return  <h2>Hello</h2>
}
const Field = () => {
  return  <input type="text" placeholder='Type here' className="first" htmlFor="name"></input>
}
const Btn = () => {
  // const text = "Log in"
  // const res = () => {
  //   return 'Log in, please'
  // }
  const logged = true;
  
  const p = <p>Log in</p>
  return  <button>{logged ? null : p}</button>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

=======
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> 4f04444fb457e2359f802a2ccfe8c5a7d95d30cc
reportWebVitals();
