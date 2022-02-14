import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import LoginPic from "../../images/login.png";
import { login } from "../../redux/features/userSlice";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const HandleLogin = async (e) => {
    setError(false);
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(result.data));

      dispatch(
        login({
          data: result.data,
        })
      );

      window.location.replace("/");
    } catch (err) {
      setError(err);
    }
  };

  const responseGoogle = (response) => {
    try {
      localStorage.setItem("user", JSON.stringify(response.profileObj));

      dispatch(
        login({
          data: response.profileObj,
        })
      );
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
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
                type="text"
                placeholder="שם משתמש"
                onChange={(e) => setUsername(e.target.value)}
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
            <Link to="/register" className="link">
              <span className="register"> הרשמו כעת</span>
            </Link>
            <div>{error ? "שגיאה" : null}</div>
          </div>
          <div>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_AUTH}
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  התחברו עם גוגל
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
