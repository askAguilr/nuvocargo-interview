import React from "react";
import styles from "./index.module.scss";
import Tabber from "./components/Tabber";
import Input, {InputIcon} from "../../ui/Input";
import Button from "../../ui/Button";
import ShipmentsTable from "./components/ShipmentsTable";
import makeData from './makeData'
import {ShipmentRow} from "./types";
import {openNewShipmentModal, closeNewShipmentModal} from "./slice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import NewShipmentModal from "./new-shipment-modal";

const ShipmentList = () => {
    // TODO: simulate data fetching from local storage and implement corresponding reducers
    const data: ShipmentRow[] = React.useMemo(() => makeData(25), [])
    const dispatch = useDispatch();

    // TODO: move modal visibility and related events logic inside the modal component itself
    const isNewShipmentModalOpen = useSelector((state: RootState) => state.shipmentList.isNewShipmentModalOpen);

    return (
        <>
            <div className={styles.row}>
                <NewShipmentModal
                    visible={isNewShipmentModalOpen} loading={false}
                    onOk={() => dispatch(closeNewShipmentModal())}
                    onCancel={() => dispatch(closeNewShipmentModal())}
                />
                <Tabber/>
                <div className={styles.actionsForm}>
                    <Input className={styles.searchInput} value="" icon={InputIcon.search} placeholder="Search"/>
                    <Button onClick={() => dispatch(openNewShipmentModal())} primary> New delivery</Button>
                </div>
            </div>
            <ShipmentsTable data={data}/>
        </>

    )
        ;
};

export default ShipmentList;