import React from 'react'
import { Table } from 'semantic-ui-react'
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';


const color = 'green';

const TableContent = (color) => (
    <div className="rawTableDiv">
        <Table color="green" key={color}  >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Food</Table.HeaderCell>
            <Table.HeaderCell>Calories</Table.HeaderCell>
            <Table.HeaderCell>Protein</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Apples</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>0g</Table.Cell>
            <Table.Cell><ButtonEdit /></Table.Cell>
            <Table.Cell><ButtonDelete /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Orange</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
            <Table.Cell><ButtonEdit /></Table.Cell>
            <Table.Cell><ButtonDelete /></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
  </div>
)
export default TableContent
