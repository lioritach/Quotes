import React, { useState } from "react";
import "./Register.css";
import registerPic from "../../images/register.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, getData } from "../../redux/features/userSlice";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          password,
          email,
        }
      );

      localStorage.setItem("user", JSON.stringify(result.data));
      localStorage.setItem("userDB-data", JSON.stringify(result.data));

      dispatch(
        login({
          data: result.data,
        })
      );

      dispatch(
        getData({
          DB_data: result.data,
        })
      );

      window.location.replace("/");
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", width: "100%", marginTop: 20 }}>
        הרשמה למערכת
      </h2>
      <div style={{ display: "flex", height: "80vh" }}>
        <div style={{ flex: 1, marginTop: 80 }}>
          <img src={registerPic} alt="registerPic" className="registerpic" />
        </div>

        <div style={{ flex: 1 }}>
          <div>
            <form className="registerForm">
              <label>שם משתמש</label>
              <input
                type="text"
                placeholder="שם משתמש"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />

              <label>מייל</label>
              <input
                type="email"
                placeholder="נא להזין מייל תקין"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <label>סיסמא</label>
              <input
                type="password"
                placeholder="נא להזין סיסמא באורך 6 תווים ומעלה"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button className="registerButton" onClick={handleRegister}>
                הרשמה
              </button>
            </form>
            <span>נרשמתם כבר?</span>
            <Link to="/login" className="link">
              <span className="register">התחברו כעת</span>
            </Link>
            <span>{error ? errorMessage : null}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
