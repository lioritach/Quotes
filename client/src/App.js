import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/features/userSlice";
import "../src/App.css";

const Home = lazy(() => import("./components/Home/Home"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const SinglePage = lazy(() => import("./components/SinglePage/SinglePage"));
const WritePost = lazy(() => import("./pages/write/WritePost"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const Login = lazy(() => import("./components/Auth/Login"));
const Register = lazy(() => import("./components/Auth/Register"));
const Categories = lazy(() => import("./components/Categories/Categories"));
const Contact = lazy(() => import("./components/Contact-Us/Contact"));

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <Suspense fallback={<div>Loading ...</div>}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/profile">
            {user ? <Profile /> : <Home />}
          </Route>
          <Route exact path="/writepost">
            {user ? <WritePost /> : <Home />}
          </Route>
          <Route exact path="/post/:postId">
            <SinglePage />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
