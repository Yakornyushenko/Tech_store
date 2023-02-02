import React, {useEffect} from 'react';
import {useContext} from 'react';
import {Context} from '..';
import {clearBasket, getBasket, removeFromBasket} from '../http/deviceApi';
import {Button, Card, Col, Container, Image} from 'react-bootstrap'
import {observer} from 'mobx-react-lite';
import unAuthFace from "../styles/images/unAuthFace.png";

const Basket = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        getBasket().then(res => device.setBasket(res))
        console.log('device', device)
    }, [device])
    const removeOneDevice = (deviceId) => {
        removeFromBasket(deviceId).then(res => device.setBasket(res))
    }
    const removeAllDevices = () => {
        clearBasket().then(res => device.setBasket(res))
    }
    // let prices = 0;
    // {device.basket.map(res =>
    //     prices += Number(res.device.price)
    // )}
    return (
            device.basket.length > 0 ?
                <Container className="d-flex mt-3 flex-column">
                    <Col className="d-flex p-2 mb-2 border-bottom">
                        <Col className='fw-bold' md={4}>
                            item
                        </Col>
                        <Col className='fw-bold' md={2}>
                            Price
                        </Col>
                        <Col className='fw-bold' md={2}>
                            Quantity
                        </Col>
                        <Col className='fw-bold' md={3}>
                            Total
                        </Col>
                        <Col md={2}>
                            <Button
                                style={{height: 45}}
                                variant='outline-primary'
                                className='mt-2 fw-bold'
                                onClick={removeAllDevices}
                            >
                                Remove all devices
                            </Button>
                        </Col>

                    </Col>

                    <div className="d-flex flex-column">
                        {device.basket.map(res =>
                            <Card style={{borderRight: "none", borderLeft: "none", borderTop: "none", borderRadius: 0}} className="p-2 mb-2" key={res.id}>
                                <div className='d-flex'>
                                    <Col className='d-flex' md={4}>
                                        <Image
                                            src={process.env.REACT_APP_BASE_URL + res.device.img}
                                            width={80}
                                            height={80}
                                        />
                                        <p className='fs-4' style={{marginLeft: 20}}>
                                            {res.device.name}
                                        </p>
                                    </Col>
                                    <Col className='fw-semibold' md={2}>
                                        {res.device.price}$
                                    </Col>
                                    <Col className='fw-semibold' md={2}>
                                        Quantity
                                    </Col>
                                    <Col className='d-flex justify-content-between' md={3}>
                                        <p className='fw-semibold'>{res.device.price}$</p>
                                        <Button
                                            style={{marginLeft: 50, height: 45, width: 120}}
                                            variant='outline-primary'
                                            className='mt-2'
                                            onClick={() => removeOneDevice(res.device.id)}
                                        >
                                            Remove
                                        </Button>
                                    </Col>
                                </div>
                            </Card>
                        )}
                    </div>

                </Container>
                    : <div className='d-flex justify-content-evenly align-items-center' style={{height: 305}}>
                    <h2>
                        Your basket is empty
                        <Image style={{marginLeft: 10}} src={unAuthFace} height={40} width={40} />
                    </h2>
                </div>
    );
});

export default Basket;