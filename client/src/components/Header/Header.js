import React from "react";
import Carousel from "react-elastic-carousel";
import "./Header.css";

const Header = () => {
  const breakPoints = [
    { width: 200, items: 1 },
    { width: 550, items: 2 },
    { width: 768, items: 3 },
    { width: 1200, items: 4 },
  ];

  return (
    <>
      <div className="header">
        <Carousel breakPoints={breakPoints} itemsToShow={3}>
          <div className="item">
            <img
              className="img"
              src="https://jooinn.com/images/scenic-view-of-sea-against-sky-at-sunset-4.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img
              className="img"
              src="https://jooinn.com/images/scenic-view-of-sea-against-sky-at-sunset-4.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img
              className="img"
              src="https://jooinn.com/images/scenic-view-of-sea-against-sky-at-sunset-4.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img
              className="img"
              src="https://jooinn.com/images/scenic-view-of-sea-against-sky-at-sunset-4.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Header;
