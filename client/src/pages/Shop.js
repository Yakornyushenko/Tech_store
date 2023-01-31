import React, {useContext, useEffect} from 'react';
import {Container, Row} from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import SideNav from "../components/SideNav";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(res => device.setTypes(res));
        fetchBrands().then(res => device.setBrands(res));
    },[])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit || 6).then(res => {
            device.setDevices(res.rows);
            device.setTotalCount(res.count);
        })
    }, [device.page, device.selectedType, device.selectedBrand])
    console.log('device', device)
    return (
        <Container>
            <Row className='mt-2'>
                <SideNav/>
                <BrandBar/>
                <DeviceList/>
                <Pages/>
            </Row>
        </Container>
    );
});

export default Shop;