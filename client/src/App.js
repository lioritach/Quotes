import "../src/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/features/userSlice";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SinglePage from "./components/SinglePage/SinglePage";
import WritePost from "./pages/write/WritePost";
import Profile from "./pages/profile/Profile";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact-Us/Contact";

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
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
    </Router>
  );
}

export default App;
