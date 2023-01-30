import React, {useContext, useEffect} from 'react';
import {Container, Row} from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import SideNav from "../components/SideNav";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(res => device.setTypes(res));
        fetchDevices().then(res => device.setDevice(res.rows));
        fetchBrands().then(res => device.setBrands(res));
    },[])

    return (
        <Container>
            <Row className='mt-2'>
                <SideNav/>
                <BrandBar/>
                <DeviceList/>
            </Row>
        </Container>
    );
});

export default Shop;