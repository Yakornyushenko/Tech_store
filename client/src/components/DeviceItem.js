import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import unselectedStar from '../styles/images/unselected_star.png'
import {Link, useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()

    return (
        <Col md={3}
             className='mb-3 d-flex justify-content-center'
             onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card
                style={{width: 150}} border={"light"}>
                <Image alt='phone image' style={{cursor: "pointer"}} width={150} height={150} src={device.img}/>
                <div className='text-black-70 d-flex justify-content-between align-items-center mt-2'>
                    <div>Samsung</div>
                    <div style={{cursor: "pointer"}} className='d-flex'>
                        <div style={{color: "gold"}} className='me-2'>{device.rating}</div>
                        <Image alt='rate' width={24} height={24} src={unselectedStar}/>
                    </div>
                </div>
                <Link to={DEVICE_ROUTE + '/' + device.id}
                      className='linkSecondary text-decoration-none'>{device.name}</Link>
            </Card>
        </Col>
    );
};

export default DeviceItem;