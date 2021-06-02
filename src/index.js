import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Movies from "./components/movies";

ReactDOM.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>,
  document.getElementById('root')
);