import React from "react";
import {Button, Input, Modal, Select} from "antd";
const { Option } = Select;

interface NewShipmentModalProps{
    visible: boolean;
    loading: boolean;
    onOk: ()=>void;
    onCancel: ()=>void;
}

const NewShipmentModal = ({visible,loading,onCancel,onOk}:NewShipmentModalProps)=>{
    return(
        <Modal
            visible={visible}
            title="Title"
            onOk={onOk}
            onCancel={onCancel}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={onOk}>
                    Create new delivery
                </Button>,
            ]}
        >
            <form>
                <Input id="orderId" placeholder="Order ID"/>
                <Input id="technician" placeholder="Technician"/>
                <Select defaultValue="" placeholder="Platform">
                    <Option value="">None</Option>
                </Select>
            </form>
        </Modal>
    );
}

export default NewShipmentModal;