import React, { useEffect, useState } from "react";
import "./Categories.css";
import Love from "../../images/couple.png";
import smart from "../../images/smart.png";
import motivation from "../../images/motivation.png";
import faith from "../../images/faith.png";
import didyouknow from "../../images/didyouknow.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Createcards = (props) => {
  return (
    <div className="card">
      <Link to={`/?category=${props.title}`} className="link">
        <span className="card-title">{props.title}</span>
      </Link>
    </div>
  );
};

const Categories = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="root">
      <section class="curved"></section>
      <h1 className="categories-title">קטגוריות</h1>

      <div className="container">
        {cats && cats.map((category) => <Createcards title={category.name} />)}
      </div>
    </div>
  );
};

export default Categories;
