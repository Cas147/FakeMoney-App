import React from "react";
import "./pagination.css";
import { usePagination, DOTS } from "@/hooks/usePagination";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={`pagination-container ${
        className ? className : ""
      } felx justify-center items-center`}
      style={{
        display: "flex",
        listStyleType: "none",
      }}
    >
      {/* Left navigation arrow */}
      <li
        onClick={() => {
          if (currentPage > 1) onPageChange(Number(currentPage) - 1);
        }}
      >
        <FaAngleLeft className="text-gray-400 cursor-pointer" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li
              className="pagination-item dots"
              key={`dots-${index}`}
              style={{
                padding: "0 12px",
                height: "32px",
                textAlign: "center",
                margin: "auto 4px",
                color: "gray",
                display: "flex",
                boxSizing: "border-box",
                alignItems: "center",
                letterSpacing: "0.01071em",
                borderRadius: "16px",
                lineHeight: "1.43",
                fontSize: "13px",
                minWidth: "32px",
              }}
            >
              &#8230;
            </li>
          );
        }
        // Render our Page Pills
        return (
          <li
            className={`pagination-item ${
              pageNumber === currentPage ? "selected" : ""
            }`}
            onClick={() => onPageChange(Number(pageNumber))}
            key={`page-${pageNumber}`}
            style={{
              padding: "0 12px",
              height: "32px",
              textAlign: "center",
              margin: "auto 4px",
              color: pageNumber === currentPage ? "white" : "gray",
              display: "flex",
              boxSizing: "border-box",
              alignItems: "center",
              letterSpacing: "0.01071em",
              borderRadius: "16px",
              lineHeight: "1.43",
              fontSize: "13px",
              minWidth: "32px",
              cursor: "pointer",
              backgroundColor:
                pageNumber === currentPage ? "#fcbf24" : "inherit",
            }}
          >
            {pageNumber}
          </li>
        );
      })}
      {/* Right Navigation arrow */}
      <li
        onClick={() => {
          if (currentPage < Number(lastPage)) onPageChange(Number(currentPage) + 1);
        }}
      >
        <FaAngleRight className="text-gray-400 cursor-pointer" />
      </li>
    </ul>
  );
};

export default Pagination;
