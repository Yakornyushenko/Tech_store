import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../index";

const DeviceModal = () => {
    const {device} = useContext(Context);
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState([]);

    const addProperty = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const deleteProperty = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <div>
            <Button className="btn btn-primary"
                    style={{width: 120, height: 60}}
                    onClick={() => setOpen(!open)}>
                Add device
            </Button>

            <Modal show={open} className="modal fade">
                <div>
                    <div className="modal-content" style={{border: "none"}}>
                        <div className="modal-header" style={{border: "none"}}>
                            <h5 className="modal-title">Add device</h5>
                            <Button variant={'outline-secondary'} onClick={() => setOpen(!open)}>
                                <span>&times;</span>
                            </Button>
                        </div>
                        <Form className="modal-body">
                            <Dropdown className='mt-2 mb-2'>
                                <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {device.types.map(type =>
                                        <Dropdown.Item key={type.id}>
                                            {type.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className='mt-2 mb-2'>
                                <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {device.brands.map(brands =>
                                        <Dropdown.Item key={brands.id}>
                                            {brands.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form.Control
                                className='mt-3'
                                placeholder='enter device name'
                            />
                            <Form.Control
                                className='mt-3'
                                placeholder='enter price of the device'
                                type='number'
                            />
                            <Form.Control
                                className='mt-3'
                                type='file'
                            />
                            <Button
                                className='mt-4'
                                variant='outline-dark'
                                onClick={addProperty}
                            >
                                Add new property
                            </Button>
                            {info.map(i =>
                                <Row key={i.number} className='mt-4'>
                                    <Col md={4}>
                                        <Form.Control
                                            placeholder='property name'
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control
                                            placeholder='description'
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Button
                                        variant='outline-danger'
                                        onClick={() => deleteProperty(i.number)}
                                        >
                                            Delete property
                                        </Button>
                                    </Col>
                                </Row>
                            )}
                        </Form>
                        <div className="modal-footer" style={{border: "none"}}>
                            <Button onClick={() => setOpen(!open)} className="btn btn-secondary">
                                Close
                            </Button>
                            <Button className="btn btn-primary">Save</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DeviceModal;