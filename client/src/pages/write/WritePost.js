import React from "react";
import "./WritePost.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const WritePost = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="write"
        className="write-image"
      />
      <form className="form_write">
        <div className="form_write_sections">
          <label htmlFor="fileinput">
            <AddCircleOutlineIcon className="write_icon" />
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            className="form_write_input"
            placeholder="כותרת"
            autoFocus={true}
          />
        </div>

        <div className="form_write_sections">
          <textarea
            className="form_write_input writeText"
            placeholder="התחילו לכתוב כאן ..."
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
