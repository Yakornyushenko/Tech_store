import {useContext} from "react";
import {Context} from "../index";
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import burger_menu from '../styles/images/icons8-burger-91.png'
import {useHistory} from "react-router-dom";

export const NavBar = observer(() => {
    const history = useHistory()
    const {user, device} = useContext(Context)
    const location = useLocation()
    return (
        <Navbar className='justify-content-between' bg='dark' variant='dark'>
            <Container>
                {location.pathname !== LOGIN_ROUTE && location.pathname !== REGISTRATION_ROUTE ?
                    <button
                    className="btn"
                    onClick={() => device.setActiveMenu(!device.activeMenu)}
                    >
                    <Image alt='side menu' src={burger_menu} width={20} height={20}/>
                    </button>
                    : null
                }

                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}> TYMBA SHOP</NavLink>
                {user.isAuth ?
                    <Nav>
                        <Button  className='me-4' variant={'outline-light'}
                        onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Admin panel
                        </Button>
                        <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE) }>sign in</Button>
                    </Nav>
                    :
                    <Nav>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>log out</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})
