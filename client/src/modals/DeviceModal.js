import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../index";
import {createDevice, fetchBrands, fetchTypes} from "../http/deviceApi";
import {observer} from "mobx-react-lite";

const DeviceModal = observer(() => {
    const {device} = useContext(Context);
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [price, setPrice] = useState(0)
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(res => device.setTypes(res));
        fetchBrands().then(res => device.setBrands(res));
    }, [])
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addProperty = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const deleteProperty = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeProperty = (title, description, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [title]: description} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('img', file)
        formData.append('price', `${price}`)
        formData.append('info', JSON.stringify(info))
        console.log('formData', formData)
        createDevice(formData).then(() => setOpen(false))
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
                                <Dropdown.Toggle>{device.selectedType.name || 'Choose type'}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {device.types.map(type =>
                                        <Dropdown.Item
                                            key={type.id}
                                            onClick={() => device.setSelectedType(type)}
                                        >
                                            {type.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className='mt-2 mb-2'>
                                <Dropdown.Toggle>{device.selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {device.brands.map(brands =>
                                        <Dropdown.Item
                                            key={brands.id}
                                            onClick={() =>
                                                device.setSelectedBrand(brands)}
                                        >
                                            {brands.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form.Control
                                className='mt-3'
                                placeholder='enter device name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Form.Control
                                className='mt-3'
                                placeholder='enter price of the device'
                                type='number'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <Form.Control
                                className='mt-3'
                                type='file'
                                onChange={selectFile}
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
                                            value={i.title}
                                            onChange={(e) => changeProperty('title', e.target.value, i.number )}
                                            placeholder='property name'
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control
                                            value={i.description}
                                            onChange={(e) => changeProperty('description', e.target.value, i.number )}
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
                            <Button
                                className="btn"
                                variant='outline-success'
                                onClick={addDevice}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
});

export default DeviceModal;