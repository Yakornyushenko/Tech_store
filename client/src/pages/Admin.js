import React, {useContext} from 'react';
import DeviceModal from "../modals/DeviceModal";
import BrandModal from "../modals/BrandModal";
import TypeModal from "../modals/TypeModal";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Image} from "react-bootstrap";
import unAuthFace from "../styles/images/unAuthFace.png";

const Admin = observer(() => {
    const {user} = useContext(Context)
    //TODO  improve admin panel
    return (
        <div>
            {user.isAuth ?
                <div className='d-flex justify-content-evenly align-items-center' style={{height: 305}}>
                    <DeviceModal/>
                    <BrandModal/>
                    <TypeModal/>
                </div>
                : <div className='d-flex justify-content-evenly align-items-center' style={{height: 305}}>
                    <h2>
                        You haven't administration rights
                        <Image style={{marginLeft: 10}} src={unAuthFace} height={40} width={40} />
                    </h2>
                    </div>
            }
        </div>
    );
})

export default Admin;