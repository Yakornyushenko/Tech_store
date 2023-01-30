import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../http/deviceApi";

const BrandModal = () => {
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const addBrand = () => {
        createBrand({name: inputValue}).then(() => {
                setInputValue('')
                setOpen(!open)
            }
        )
    }
    return (
        <div>
            <Button className="btn btn-primary"
                    style={{width: 120, height: 60}}
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
                        <Form className="modal-body">
                            <Form.Control
                                placeholder='enter brand'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}/>
                        </Form>
                        <div className="modal-footer" style={{border: "none"}}>
                            <Button onClick={() => setOpen(!open)} className="btn btn-secondary">
                                Close
                            </Button>
                            <Button className="btn btn-primary"
                                    onClick={addBrand}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default BrandModal;