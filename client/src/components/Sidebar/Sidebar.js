import React from "react";
import "./Sidebar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Sidebar = () => {
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
          <li className="popular_listItem">150 סיבות למה אני אוהב/ת אותך!</li>
          <li className="popular_listItem">
            5 סימנים שהאקס שלך מתחרט על זה שנפרדתם
          </li>
          <li className="popular_listItem">
            אם היא עושה את 11 הדברים האלו מבלי שתבקש אפילו, אתה בהחלט זכית באישה
            לחיים
          </li>
          <li className="popular_listItem">
            5 דברים מה לא לעשות כשהאקס שולח הודעה
          </li>
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
