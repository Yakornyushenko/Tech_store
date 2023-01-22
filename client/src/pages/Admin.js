import React from 'react';
import DeviceModal from "../modals/DeviceModal";
import BrandModal from "../modals/BrandModal";
import TypeModal from "../modals/TypeModal";

const Admin = () => {
    //TODO  improve admin panel
    return (
        <div className='d-flex justify-content-evenly align-items-center' style={{height: 305}}>
            <DeviceModal/>
            <BrandModal/>
            <TypeModal/>
        </div>
    );
};

export default Admin;