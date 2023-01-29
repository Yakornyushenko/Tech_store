import React, {useEffect, useState} from 'react';
import phone from "../styles/images/smartphone.png";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import delivery from '../styles/images/delivery.png';
import checkMark from '../styles/images/checkMark.png';
import payment from '../styles/images/payment.png';
import returnAndExchange from '../styles/images/returnAndExchange.png';
import unselectedStar from '../styles/images/unselected_star.png';
import deviceDesc from '../styles/images/device_desc.png';
import SideNav from "../components/SideNav";
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "../http/deviceCreate";

const Device = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevices(id).then(res => setDevice(res))
    }, [])

    return (
        <Container className='mt-3'>
            <SideNav/>
            <Row>
                <Col md={4}>
                    <h2 className='p-3'>{device.name}</h2>
                    <Image alt='device image' width={300} height={300} src={process.env.REACT_APP_BASE_URL + device.img}/>
                </Col>
                <Col md={5}>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-4 d-flex align-items-center'>Device rating: {device.rating}
                            <Image style={{marginLeft: 8, cursor: "pointer"}} alt='rating' height={20} width={20}
                                   src={unselectedStar}/>
                        </p>
                        <p className='fs-3'>Price: {device.price} $</p>
                    </div>
                    <div>
                        {device.info}
                    </div>
                    <Button style={{maxWidth: 200, marginTop: 20, fontSize:18}} variant={"outline-primary"}>Add to Shopping Cart</Button>
                </Col>
                <Col md={3}>
                    <Card
                        className='d-flex align-items-center'
                        style={{border: '5px solid lightgray'}}
                    >
                        <Container className='mt-2'>
                            <p style={{fontSize: 22}}>
                                <Image className='me-2' alt='delivery' height={30} width={30} src={delivery}/>
                                Delivery in Poland
                            </p>
                            <p>
                                <Image className='me-2' alt='mark' height={15} width={15} src={checkMark}/>
                                modern postal system
                            </p>
                            <p>
                                <Image className='me-2' alt='mark' height={15} width={15} src={checkMark}/>
                                delivery throughout the country
                            </p>
                            <p>
                                <Image className='me-2' alt='mark' height={15} width={15} src={checkMark}/>
                                delivery without contact by a courier
                            </p>
                            <p>
                                <Image className='me-2' alt='mark' height={15} width={15} src={checkMark}/>
                                pickup
                            </p>

                            <p style={{fontSize: 22}}>
                                <Image className='me-2' alt='Payment' height={23} width={23} src={payment}/>
                                Payment
                            </p>
                            <p>
                                <Image className='me-2' alt='mark' height={15} width={15} src={checkMark}/>
                                in cash
                            </p>
                            <p>
                                <Image className='me-2' alt='mark' height={15} width={15} src={checkMark}/>
                                card
                            </p>
                            <p>
                                <Image className='me-2' alt='mark' height={15} width={15} src={checkMark}/>
                                to the current account
                            </p>

                            <p style={{fontSize: 22, marginRight: 10}}>
                                <Image className='me-2' alt='Return and exchange' height={23} width={23}
                                       src={returnAndExchange}/>
                                Return and exchange
                            </p>
                            <p>
                                <Image className='me-2' alt='mark' height={15} width={15} src={checkMark}/>
                                Within 30 days of receiving the order
                            </p>
                        </Container>

                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3 w-75'>
                <p className='fs-3'>
                    Device description
                    <Image className='m-2' alt='device description' height={28} width={28} src={deviceDesc}/>
                </p>
                {device.info.map((info, index) =>
                    <Row
                        key={info.id}
                        style={{
                            fontSize: 18,
                            padding: 10,
                            color: index % 2 === 0 ? 'azure' : '',
                            background: index % 2 === 0 ? '#0d6efd' : 'lightgray'
                        }}>
                        {info.title} : {info.desc}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default Device;