import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Button, Card, Form} from "react-bootstrap";
import {BASKET_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const BrandBar = observer(() => {
    const history = useHistory()
    const {device} = useContext(Context)
    return (
        <Form className='d-flex justify-content-center mb-4'>
            {device.brands.map(brand =>
                <Card
                    style={{cursor:"pointer"}}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                    className='p-3'
                >
                    {brand.name}
                </Card>
            )}
            <Button
                style={{width: 140, margin: 10, fontSize: 18}}
                variant={"outline-primary"}
                onClick={() => history.push(BASKET_ROUTE)}
            >
                Shopping Cart
            </Button>
        </Form>
    );
});

export default BrandBar;