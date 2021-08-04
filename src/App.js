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
import GiveReview from './Components/Dashboard/GiveReview/GiveReview';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/Login/Login/Login';



function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route path="/giveReview">
          <GiveReview></GiveReview>
        </Route>
        <Route path="/postBlog">
          <PostBlog></PostBlog>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
