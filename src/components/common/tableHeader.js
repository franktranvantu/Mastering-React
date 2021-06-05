import React, {Component} from 'react';

class TableHeader extends Component {
  handleSort = (path) => {
    if (!path) {
      return;
    }
    const sortColumn = {...this.props.sortColumn};
    if (sortColumn.path === path) {
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  }

  renderSortIcon = (column) => {
    const {path, order} = this.props.sortColumn;
    if (!column.path || column.path !== path) {
      return null;
    }
    if (order === 'asc') {
      return <i className="fa fa-sort-asc"></i>
    }
    return <i className="fa fa-sort-desc"></i>
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column =>
            <th
                key={column.path || column.key}
                onClick={() => this.handleSort(column.path)}
                scope="col"
                style={{cursor: column.path ? "pointer" : ""}}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          )}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;