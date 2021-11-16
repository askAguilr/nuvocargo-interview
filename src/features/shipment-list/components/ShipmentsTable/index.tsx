import React, {useMemo} from "react";
import {useTable} from "react-table";
import {ShipmentRow} from "../../types";
import ShipmentsCell from "./ShipmentsCell";
import styles from "./index.module.scss";
import {Button, Dropdown, Menu} from "antd";

interface ShipmentsTableProps {
    data: ShipmentRow[];
}

const ShipmentsTable = ({data}: ShipmentsTableProps) => {
    //TODO: fix type for columns
    const columns: any = React.useMemo(
        () => [
            {
                Header: 'Status',
                accessor: 'status',
                Cell: ShipmentsCell,
            },
            {
                Header: 'Order ID',
                accessor: 'orderId',
                Cell: ShipmentsCell,
            },
            {
                Header: 'Technician',
                accessor: 'technician',
                Cell: ShipmentsCell,
            },
            {
                Header: 'Platform',
                accessor: 'platform',
                Cell: ShipmentsCell,
            },
            {
                Header: 'Drone',
                accessor: 'drone',
                Cell: ShipmentsCell,
            },
            {
                Header: 'Technical check',
                accessor: 'technicalCheck',
                Cell: ShipmentsCell,
            }
        ],
        []
    );
    const {
        getTableProps,
        getTableBodyProps,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    const menu = useMemo(()=><Menu>
            <Menu.Item>
                <div>
                    Edit
                </div>
            </Menu.Item>
            <Menu.Item>
                <div>
                    Delete
                </div>
            </Menu.Item>
        </Menu>
    ,[]);

    return (
        <table {...getTableProps()} className={styles.base}>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                        <td className={styles.rowActions}>
                            <Button>Details</Button>
                            <Dropdown overlay={menu} placement="bottomRight" arrow>
                                <Button>Actions</Button>
                            </Dropdown>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default ShipmentsTable;