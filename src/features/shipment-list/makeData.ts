import {ShipmentRow} from "./types";

const makeData = (length: number): ShipmentRow[] => {
    let ret = [];
    for (let i = 0; i < length; i++) {
        ret.push({
            status: 'Ready',
            orderId: '006-F'+i,
            technician: 'Pedro Suarez',
            platform: 'Gamma',
            drone: 'DJI_91343',
            technicalCheck: 'Passed',
        });
    }
    return ret;
}

export default makeData;
