import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../index";

const BrandModal = () => {
    const [open, setOpen] = useState(false)
    const {device} = useContext(Context)
    return (
        <div>
            <Button className="btn btn-primary"
                    style={{width:120, height:60}}
                    onClick={() => setOpen(!open)}>
                Add brand
            </Button>

            <Modal show={open} className="modal fade">
                <div>
                    <div className="modal-content" style={{border: "none"}}>
                        <div className="modal-header" style={{border: "none"}}>
                            <h5 className="modal-title">Add device</h5>
                            <Button variant={'outline-primary'} onClick={() => setOpen(!open)}>
                                <span>&times;</span>
                            </Button>
                        </div>
                            <Form>
                                <div className="modal-body">
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

                                </div>
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

export default BrandModal;