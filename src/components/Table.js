import React, { Component, createContext } from 'react';
import { Table } from "semantic-ui-react";

const { Provider, Consumer } = createContext();

class DynamicTable extends Component {

  static Footer = ({ children }) => (
    <Consumer>
      {({ dataTitles }) => (
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan={dataTitles.length}>
              {children}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      )}
    </Consumer>
  );

  render() {
    const { dataTitles, dataBody, objNames, children } = this.props;
    return (
      <Provider value={{
        dataTitles: dataTitles
      }}>
        <Table celled striped selectable>
          <Table.Header>
            <Table.Row>
              {dataTitles.map((title, index) => (
                <Table.HeaderCell key={index} content={dataTitles[index]} />
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {dataBody.map((column, index) => (
              <Table.Row key={index}>
                {objNames.map((vl, index) => (
                  <Table.Cell key={index} content={column[objNames[index]]} />
                ))}
              </Table.Row>
            ))}
          </Table.Body>
          {children}
        </Table>
      </Provider>
    )
  }
}

export default DynamicTable;