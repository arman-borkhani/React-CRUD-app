import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = (props) => {
  const { columns, movies, onSort, sortColumn } = props;
  return (
    <table className="table table-striped">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={movies} columns={columns} />
    </table>
  )
}

export default Table;