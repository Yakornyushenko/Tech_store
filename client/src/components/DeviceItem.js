import React from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import unselectedStar from '../styles/images/unselected_star.png';
import {Link, useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import basket from '../styles/images/basket.png';
import {addToBasket} from "../http/deviceApi";

const DeviceItem = ({device}) => {
    const history = useHistory()
    const addToCard = () => {
        const formData = new FormData()
        formData.append('deviceId', device.id)
        addToBasket(formData).then()
    }
    return (
        <Col md={3} className='mb-3 d-flex justify-content-center'>
            <Card
                style={{width: 150}} border={"light"}>
                <Image
                    alt='phone image' style={{cursor: "pointer"}}
                    width={150}
                    height={150}
                    src={process.env.REACT_APP_BASE_URL + device.img}
                    onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
                />
                <div className='text-black-70 d-flex justify-content-between align-items-center mt-2'>
                    <div>Device rating</div>
                    <div style={{cursor: "pointer"}} className='d-flex'>
                        <div style={{color: "gold"}} className='me-2'>{device.rating}</div>
                        <Image alt='rate' width={24} height={24} src={unselectedStar}/>
                    </div>
                </div>
                <Button
                    style={{marginTop: 10, marginBottom: 10, fontSize: 18}}
                    variant={"outline-secondary"}
                    onClick={addToCard}
                >
                    <Image alt='add to basket' width={20} height={20} src={basket}/>
                </Button>
                <div>
                    <div className='d-flex'>
                        <p style={{marginRight: 10}}>Buy now</p>
                        <Link to={DEVICE_ROUTE + '/' + device.id} className='linkSecondary text-decoration-none'>
                            {device.name}
                        </Link>
                    </div>

                    <p className='fw-semibold'>for {device.price} $</p>
                </div>

            </Card>
        </Col>
    );
};

export default DeviceItem;