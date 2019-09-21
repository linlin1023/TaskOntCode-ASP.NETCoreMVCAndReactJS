import React from 'react'
import { Table } from 'semantic-ui-react'
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';

const color = 'green';

const TableContent = ({ items, header, deleteItem, clickHandler}) => {
    //items. type  header
    const headerCells = header.map((e) => <Table.HeaderCell key={e} >{e}</Table.HeaderCell>);
    const contentCells = items.map((item) => {
        const content = header.map(hn => {
            const indexName = hn[0].toLowerCase() + hn.slice(1);
            return <Table.Cell key={Math.random()}>{item[indexName]}</Table.Cell>;
        });
        return (
            <Table.Row key={Math.random()}>
                {content}
                <Table.Cell><ButtonEdit clickHandler={clickHandler} item={item}/></Table.Cell>
                <Table.Cell><ButtonDelete clickHandler={deleteItem} itemId={item.id}/></Table.Cell>
            </Table.Row>
        );
    });
    return (
        <div className="rawTableDiv">
            <Table color="green" key={color}  >
                <Table.Header>
                    <Table.Row>
                        {headerCells}
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {contentCells}
                </Table.Body>
            </Table>
        </div>
    );
}
export default TableContent
