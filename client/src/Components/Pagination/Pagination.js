import React from "react";
import { PageItem } from "../";
import usePagination from "../../hooks/usePagination";

const Pagination = ({ totalCount }) => {
  const pagination = usePagination(66, 2);
  return (
    <div className="flex items-center">
      {pagination?.map((el) => (
        <PageItem key={el}>{el}</PageItem>
      ))}
    </div>
  );
};

export default Pagination;