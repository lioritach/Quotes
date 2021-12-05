import React from "react";
import "./Navbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/userSlice";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    window.location.replace("/");
    localStorage.removeItem("user");
  };

  console.log(user.data);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/" className="link">
          <p>MISHPATIMYAFIM</p>
        </Link>
        <a
          href="https://www.facebook.com/MishpatimYafim"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="navbar__icon" />
        </a>
        <a
          href="https://www.instagram.com/mishpatimyafim/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="navbar__icon" />
        </a>
      </div>
      <div className="navbar__center">
        <ul className="navbar__list">
          <li className="navbar__listItem">
            <Link to="/" className="link">
              בית
            </Link>
          </li>
          <li className="navbar__listItem">
            <Link to="/categories" className="link">
              קטגוריות
            </Link>
          </li>
          <li className="navbar__listItem">
            <Link to="/contact-us" className="link">
              צרו קשר
            </Link>
          </li>
          <li className="navbar__listItem">
            {user ? (
              <Link to="/writepost" className="link">
                צרו פוסט חדש
              </Link>
            ) : null}
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        {user ? (
          <>
            {user.data.profileImage ? (
              <img
                className="profileImage"
                src={user.data.profileImage}
                alt="profile"
              />
            ) : (
              <AccountCircleIcon />
            )}

            <span className="hello">שלום, {user.data.username}</span>
            <span className="navbar__listItem logout" onClick={logOut}>
              התנתק/י
            </span>
            <Link to="/profile" className="link">
              <span className="settingsIcon">
                <SettingsIcon />
              </span>
            </Link>
          </>
        ) : (
          <Link to="/login" className="link">
            התחבר
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
