import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";

const Sidebar = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const res = await axios.get("/posts");
      setPopular(res.data);
    };

    getPopular();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_ads">
        <span className="sidebar_ad">ADS</span>
        <img
          className="ad_img"
          src="https://cdn.freelogovectors.net/wp-content/uploads/2020/03/google-ads-logo.png"
          alt="ads"
        />
      </div>
      <div className="sidebar_item">
        <span className="sidebar_item_title">פוסטים מומלצים</span>
        <ul className="popular_list">
          {popular.map((post) => (
            <li className="popular_listItem">{post.title}</li>
          ))}
        </ul>
      </div>

      <div className="sidebar_item">
        <span className="sidebar_item_title">עקבו אחרינו</span>
        <div className="sidebar_social">
          <FacebookIcon className="navbar__icon" />
          <InstagramIcon className="navbar__icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
