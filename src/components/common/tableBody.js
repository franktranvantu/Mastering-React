import React from 'react';
import _ from 'lodash';

const TableBody = (props) => {
  const {data, columns} = props;

  return (
    <tbody>
    {
      data.map(item => (
        <tr key={item._id}>
          {
            columns.map(column =>
              <td key={column.path || column.key}>{_.get(item, column.path) || column.content(item)}</td>
            )
          }
        </tr>
      ))
    }
    </tbody>
  );
}

export default TableBody;