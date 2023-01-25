import React from 'react';
import '../styles/component_style/loader.css';

const Loader = () => {
    return (
        <div className='lds-spinner_wrap'>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;