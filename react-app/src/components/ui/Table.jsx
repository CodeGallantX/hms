import React from 'react';

const Table = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="overflow-x-auto">
      <table className={`table ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
};

const TableHeader = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <thead className={`table-header ${className}`} {...props}>
      {children}
    </thead>
  );
};

const TableHeaderCell = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <th className={`table-header-cell ${className}`} {...props}>
      {children}
    </th>
  );
};

const TableBody = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
};

const TableRow = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <tr className={`table-row ${className}`} {...props}>
      {children}
    </tr>
  );
};

const TableCell = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <td className={`table-cell ${className}`} {...props}>
      {children}
    </td>
  );
};

Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table; 