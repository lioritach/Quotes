import React, { useEffect, useState } from "react";
import "./Categories.css";
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
      setLoading(true);
      const res = await axios.get("/categories");
      setLoading(false);
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="root">
      <section class="curved"></section>
      <h1 className="categories-title">קטגוריות</h1>

      <div className="container">
        {loading ? (
          <p>טוען נתונים ... </p>
        ) : (
          cats && cats.map((category) => <Createcards title={category.name} />)
        )}
      </div>
    </div>
  );
};

export default Categories;
