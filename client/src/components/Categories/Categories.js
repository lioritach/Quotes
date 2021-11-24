import React from "react";
import "./Categories.css";
import Love from "../../images/couple.png";
import smart from "../../images/smart.png";
import motivation from "../../images/motivation.png";
import faith from "../../images/faith.png";
import didyouknow from "../../images/didyouknow.png";

const Categories = () => {
  return (
    <div className="categories">
      <div className="circle">
        <img src={Love} alt="" width="80" height="80" />
        <span className="tags">משפטי אהבה</span>
      </div>
      <div className="circle">
        <img src={smart} alt="" width="80" height="80" />
        <span className="tags">משפטי חכמה</span>
      </div>
      <div className="circle">
        <img src={motivation} alt="" width="80" height="80" />
        <span className="tags">משפטי מוטיבציה</span>
      </div>
      <div className="circle">
        <img src={faith} alt="" width="80" height="80" />
        <span className="tags">משפטי אמונה</span>
      </div>
      <div className="circle">
        <img src={didyouknow} alt="" width="80" height="85" />
        <span className="tags">טיפים</span>
      </div>
    </div>
  );
};

export default Categories;
