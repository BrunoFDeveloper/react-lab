import React from 'react';

import { Table } from 'semantic-ui-react';

const FooterTable = (value, colSpan) => (
  <Table.Footer fullWidth>
    <Table.Row>
      <Table.HeaderCell colSpan={colSpan}>
        {value}
      </Table.HeaderCell>
    </Table.Row>
  </Table.Footer>
);

const DynamicTable = ({ dataTitles, dataBody, objNames, children }) => (
  <Table celled striped selectable>
    <Table.Header>
      <Table.Row>
        {dataTitles.map((title, index) => <Table.HeaderCell key={index} content={dataTitles[index]} />)}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {dataBody.map((column, index) => (
        <Table.Row key={index}>
          {objNames.map((vl, index) => <Table.Cell key={index} content={column[objNames[index]]} />)}
        </Table.Row>
      ))}
    </Table.Body>
    {children && FooterTable(children, dataTitles.length)}
  </Table>
);

export default DynamicTable;