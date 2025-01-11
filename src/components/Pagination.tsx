import React from "react";
import { PaginationProps } from "../types.ts";
import '../styles/Pagination.css';

const Pagination: React.FC<PaginationProps> = ({ isFlatEdges, currentPage, maxPage, onPrevious, onNext }) => {
  return (
    <div id="pageNumRow" className={isFlatEdges ? "flat-edges" : "round-edges"}>
      <button onClick={onPrevious} disabled={currentPage === 1}>👈</button>
      <label> {currentPage}/{maxPage} </label>
      <button onClick={onNext} disabled={currentPage === maxPage}>👉</button>
    </div>
  );
};

export default Pagination;