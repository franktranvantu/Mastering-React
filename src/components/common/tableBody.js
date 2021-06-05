import React, {Component} from 'react';
import _ from 'lodash';

class TableBody extends Component {
  renderKey = ({path, key}) => {
    if (path) {
      return path;
    }
    return key;
  }

  renderCell = (item, column) => {
    if (column.path) {
      return _.get(item, column.path);
    }
    return column.content(item);
  }

  render() {
  const {data, columns} = this.props;

  return (
    <tbody>
    {
      data.map(item => (
        <tr key={item._id}>
          {
            columns.map(column =>
              <td key={this.renderKey(column)}>{this.renderCell(item, column)}</td>
            )
          }
        </tr>
      ))
    }
    </tbody>
  );
}
}

export default TableBody;