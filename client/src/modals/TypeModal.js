import React, {useState, useContext, useEffect} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../http/deviceCreate";

const TypeModal = () => {
    const [inputValue, setInputValue] = useState('')
    const [open, setOpen] = useState(false)

    const addType = () => {
        createType({type: inputValue}).then(data => {
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
                Add type
            </Button>

            <Modal show={open} className="modal fade">
                <div>
                    <div className="modal-content" style={{border: "none"}}>
                        <div className="modal-header" style={{border: "none"}}>
                            <h5 className="modal-title">Add type</h5>
                            <Button variant={'outline-secondary'} onClick={() => setOpen(!open)}>
                                <span>&times;</span>
                            </Button>
                        </div>
                        <Form className="modal-body">
                            <Form.Control
                                placeholder='Enter type'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </Form>
                        <div className="modal-footer" style={{border: "none"}}>
                            <Button onClick={() => setOpen(!open)} className="btn btn-secondary">
                                Close
                            </Button>
                            <Button
                                onClick={() => addType()}
                                className="btn btn-primary"
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

export default TypeModal;