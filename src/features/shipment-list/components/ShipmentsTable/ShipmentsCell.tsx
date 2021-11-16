import React from "react";
import {CellValue} from "react-table";
import styles from  "./ShipmentsCell.module.scss"

const ShipmentsCell = ({value, column}:CellValue) => {
    return(
        <div className={styles.cell}>
            <div className={styles.header}>
                {column.Header}
            </div>
            <div className={styles.value}>
                {value}
            </div>
        </div>

    );
}

export default ShipmentsCell;