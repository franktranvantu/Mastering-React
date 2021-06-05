import React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

function Table(props) {
  const {columns, data, sortColumn, onSort, onLike, onDelete} = props;

  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} data={data} onLike={onLike} onDelete={onDelete} />
    </table>
  );
}

export default Table;