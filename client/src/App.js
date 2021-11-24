import "../src/App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SinglePage from "./components/SinglePage/SinglePage";
import WritePost from "./pages/write/WritePost";
import Profile from "./pages/profile/Profile";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact-Us/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/writepost">
          <WritePost />
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
    </Router>
  );
}

export default App;
