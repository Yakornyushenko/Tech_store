import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Image, ListGroupItem, Navbar} from "react-bootstrap";
import '../styles/component_style/sideNavStyle.css'
import burger_menu from "../styles/images/burger_menu.png";

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
                    <div className="menu_header mb-4">
                        Choose type of your device
                        <Button
                            style={{marginLeft:15}}
                            variant='outline-primary'
                            className="btn"
                            onClick={() => device.setActiveMenu(!device.activeMenu)}
                        >
                            <Image alt='side menu' src={burger_menu} width={22} height={22}/>
                        </Button>
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