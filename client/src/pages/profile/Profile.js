import React from "react";
import "./Profile.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTitle">
          <span className="profileUpdateTitle">עדכון הפרופיל</span>
        </div>
        <form className="profileForm">
          <label>תמונת פרופיל</label>
          <div className="profileImage">
            <img
              src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/129514038_10207734468877710_1572784873397214480_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2Tyq3qGpl9cAX88tzfP&_nc_ht=scontent.ftlv5-1.fna&oh=9de135e1466708ae11cb52eaa14df90c&oe=6182C49B"
              alt="profilePic"
              className="profilePic"
            />
            <label htmlFor="fileInput">
              <AccountCircleIcon className="profileIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>

          <label>שם משתמש</label>
          <input type="text" placeholder="שם משתמש" />
          <label>מייל</label>
          <input type="email" placeholder="מייל" />
          <label>סיסמא</label>
          <input type="password" placeholder="סיסמא" />

          <button className="profileButton">עדכון</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Profile;
