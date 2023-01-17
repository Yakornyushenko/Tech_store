import React from 'react';
import {Container, Row} from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import SideNav from "../components/SideNav";

const Shop = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <SideNav/>
                <BrandBar/>
                <DeviceList/>
            </Row>
        </Container>
    );
};

export default Shop;