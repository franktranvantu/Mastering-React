import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/navbar";
import "./App.css";
import Products from "./components/products";
import Posts from "./components/posts";
import Dashboard from "./components/admin/dashboard";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
