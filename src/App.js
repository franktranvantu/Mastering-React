import React, { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from "./components/navbar";
import "./App.css";
import Products from "./components/products";
import ProductDetails from "./components/productDetails";
import Posts from "./components/posts";
import Dashboard from "./components/admin/dashboard";
import NotFound from "./components/notFound";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
