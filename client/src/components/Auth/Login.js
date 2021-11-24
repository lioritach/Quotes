import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginPic from "../../images/login.png";
import { login, selectUser } from "../../redux/features/userSlice";
import "./Login.css";

const Login = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const HandleLogin = async (e) => {
    setError(false);
    e.preventDefault();
    const result = await axios
      .post("http://localhost:5000/api/auth/login", {
        username,
        password,
      })
      .then(() => {
        dispatch(
          login({
            username: username,
            password: password,
          })
        );
        localStorage.setItem("user", user);
        console.log(user);
      })
      .catch((error) => setError(true));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", width: "100%", marginTop: 10 }}>
        התחברות למערכת
      </h2>
      <div
        style={{
          display: "flex",
          height: "85vh",
        }}
      >
        <div style={{ flex: 1 }}>
          <img src={LoginPic} alt="loginImage" className="loginpic" />
        </div>
        <div style={{ flex: 1 }}>
          <div>
            <form className="loginForm">
              <label>מייל</label>
              <input
                type="email"
                placeholder="מייל"
                onChange={(e) => setEmail(e.target.value)}
                value={username}
              />

              <label>סיסמא</label>
              <input
                type="password"
                placeholder="סיסמא"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button className="loginButton" onClick={HandleLogin}>
                התחברות
              </button>
            </form>
            <span>אין לכם משתמש?</span>
            <span className="register"> הרשמו כעת</span>
            <div>{error ? "שגיאה" : null}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
