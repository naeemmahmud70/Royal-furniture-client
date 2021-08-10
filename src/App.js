import React, { createContext, useState } from 'react';
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
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import OrderProduct from './Components/Home/OrderProduct/OrderProduct';
import ReadFullBlog from './Components/Home/ReadFullBlog/ReadFullBlog';
import SeeOrderList from './Components/Dashboard/SeeOrderList/SeeOrderList';
import ManageOrderList from './Components/Dashboard/ManageOrderList/ManageOrderList';
import DeleteProduct from './Components/Dashboard/DeleteProduct/DeleteProduct';
import DeleteBlog from './Components/Dashboard/DeleteBlog/DeleteBlog';

export const UserContext = createContext({});


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser.email, loggedInUser.name)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <PrivateRoute path="/orderProduct/:id">
            <OrderProduct></OrderProduct>
          </PrivateRoute>
          <Route path="/seeOrderList">
            <SeeOrderList></SeeOrderList>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/deleteProduct">
            <DeleteProduct></DeleteProduct>
          </Route>
          <Route path="/manageOrderList">
            <ManageOrderList></ManageOrderList>
          </Route>
          <Route path="/giveReview">
            <GiveReview></GiveReview>
          </Route>
          <Route path="/postBlog">
            <PostBlog></PostBlog>
          </Route>
          <Route path="/fullBlog/:id">
            <ReadFullBlog></ReadFullBlog>
          </Route>
          <Route path="/deleteBlog">
            <DeleteBlog></DeleteBlog>
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
    </UserContext.Provider>
  );
}

export default App;
