import React from "react";
import "./Navbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";

const Navbar = () => {
  const user = useSelector(selectUser);

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
          <li className="navbar__listItem">
            {user ? (
              "התנתק"
            ) : (
              <Link to="/login" className="link">
                התחבר
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        {user ? (
          <img
            className="profileImage"
            src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/129514038_10207734468877710_1572784873397214480_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=x4FW00XGmvgAX85xajI&_nc_ht=scontent.ftlv6-1.fna&oh=2c409e3cc12bd0def7e06686edf8d539&oe=61C20C9B"
            alt="profile"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
