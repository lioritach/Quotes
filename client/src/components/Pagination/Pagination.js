import React, { useState } from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, handleClick }) => {
  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //   console.log(i);
  //   pageNumbers.push(i);
  // }

  // const pageClicked = (number) => {
  //   paginate(number);
  // };

  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    // <div className="page">
    //   <ul className="pagination">
    //     {pageNumbers.map((number) => (
    //       <li key={number} className="page-item">
    //         <div className="btns">
    //           <button className="page-link" onClick={() => pageClicked(number)}>
    //             {number}
    //           </button>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="pagination">
      {pages.map((num) => (
        <button
          className="page-link"
          key={num}
          onClick={() => handleClick(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
