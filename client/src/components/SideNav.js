import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroupItem, Navbar} from "react-bootstrap";
import '../styles/component_style/sideNavStyle.css'

const SideNav = observer(() => {
    const {device} = useContext(Context)
    return (

        <div
            onClick={() => device.setActiveMenu(!device.activeMenu)}
            className={device.activeMenu ? 'menu active' : 'menu'}
        >
            <div className='blur'/>
            <Navbar onClick={(e) => e.stopPropagation() } className='menu_content d-grid align-items-lg-start' style={{padding: 20}}>

                <div>
                    <div className="menu_header me-4 mb-4">
                        Choose type of your device
                    </div>

                    <div>
                        <ul className="list-group list_color">
                            {device.types.map(type =>
                                <ListGroupItem
                                    style={{cursor: "pointer"}}
                                    active={type.id === device.selectedType.id}
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </ListGroupItem>
                            )}
                        </ul>
                    </div>
                </div>
            </Navbar>
        </div>
    );
});

export default SideNav;