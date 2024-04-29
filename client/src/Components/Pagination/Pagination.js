import React from "react";
import { PageItem } from "..";
import usePagination from "../../hooks/usePagination";

const Pagination = ({ totalCount }) => {
  console.log(totalCount);
  const pagination = usePagination(totalCount, 1);
  return (
    <div className="flex items-center">
      {pagination?.map((el) => (
        <PageItem key={el}>{el}</PageItem>
      ))}
    </div>
  );
};

export default Pagination;