import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import PageNotFound from './Components/Shared/PageNotFound/PageNotFound';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

import PostBlog from './Components/Dashboard/PostBlog/PostBlog';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route path="/postBlog">
          <PostBlog></PostBlog>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
