import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import styles from "./styles.module.scss"
import Header from "./features/header";
import ShipmentList from "./features/shipment-list";
import Footer from "./features/footer";
import {Provider} from "react-redux";
import {store} from "./store";
import ShipmentDetails from "./features/shipment-details";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={styles.app}>
                    <Header/>
                    <div className={styles.content}>
                        <Routes>
                            <Route path="/" element={<ShipmentList/>}/>
                            <Route path="shipments/:shipmentId" element={<ShipmentDetails/>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
