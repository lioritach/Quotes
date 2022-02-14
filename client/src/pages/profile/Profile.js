import React, { useEffect, useState } from "react";
import "./Profile.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  selectUser,
  userDBData,
} from "../../redux/features/userSlice";
import { Convert } from "mongo-image-converter";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [oldUsername, setOldUsername] = useState("");
  const [convertedImage, setProfileImage] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const user = useSelector(userDBData);
  const dispatch = useDispatch();

  useEffect(() => {
    const { username, password } = user.data;
    setOldUsername(username);
    setOldPassword(password);
  }, []);

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      const profileImage = await Convert(convertedImage);
      if (convertedImage) {
        try {
          await axios.put(`/users/${user.data._id}`, {
            username: username.length === 0 ? oldUsername : username,
            password: password.length === 0 ? oldPassword : password,
            userId: user.data._id,
            profileImage,
          });
          const userData = await axios.get(
            `http://localhost:5000/api/users/${user.data._id}`
          );
          dispatch(
            getData({
              data: userData.data,
            })
          );
          window.location.reload();
        } catch (err) {}
      } else {
        try {
          await axios.put(`/users/${user.data._id}`, {
            username: username.length === 0 ? oldUsername : username,
            password: password.length === 0 ? oldPassword : password,
            userId: user.data._id,
          });
          const userData = await axios.get(
            `http://localhost:5000/api/users/${user.data._id}`
          );
          dispatch(
            getData({
              data: userData.data,
            })
          );
          window.location.reload();
        } catch (err) {
          console.log("err", err);
        }
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTitle">
          <span className="profileUpdateTitle">עדכון הפרופיל</span>
        </div>
        <form className="profileForm" onSubmit={updateProfile}>
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
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
          </div>

          <label>שם משתמש</label>
          <input
            type="text"
            placeholder={oldUsername}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            defaultValue={oldUsername}
          />
          <label>סיסמא</label>
          <input
            type="password"
            placeholder="סיסמא"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            defaultValue={oldPassword}
          />

          <button className="profileButton" type="submit">
            עדכון
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Profile;
