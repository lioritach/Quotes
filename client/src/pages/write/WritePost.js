import React, { useState } from "react";
import "./WritePost.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";
import Select from "react-select";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const user = useSelector(selectUser);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const sendData = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.data.username || user.data.givenName,
      title,
      description,
      photo: null,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      console.log("data write", data);
      newPost.photo = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        newPost
      );
      window.location.replace("/post/" + response.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  const MyComponent = () => <Select options={options} />;

  return (
    <div className="write">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="write"
          className="write-image"
        />
      )}

      <form className="form_write" onSubmit={sendData}>
        <div className="form_write_sections">
          <label htmlFor="fileinput">
            <AddCircleOutlineIcon className="write_icon" />
          </label>
          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            className="form_write_input"
            placeholder="כותרת"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form_write_sections">
          <textarea
            className="form_write_input writeText"
            placeholder="התחילו לכתוב כאן ..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <button className="form_write_submit" type="submit">
          שלחו
        </button>
      </form>
    </div>
  );
};

export default WritePost;
