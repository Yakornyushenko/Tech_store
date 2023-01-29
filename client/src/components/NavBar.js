import {useContext} from "react";
import {Context} from "../index";
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import burger_menu from '../styles/images/icons8-burger-91.png'
import {useHistory} from "react-router-dom";
import logo from '../styles/images/logo.png';

export const NavBar = observer(() => {
    const history = useHistory()
    const {user, device} = useContext(Context)
    const location = useLocation()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg='dark' variant='dark'>
            <Container className='d-flex justify-content-between'>

                <div>
                    <NavLink to={SHOP_ROUTE}><Image src={logo} width={164} height={64}/></NavLink>

                    {location.pathname !== LOGIN_ROUTE && location.pathname !== REGISTRATION_ROUTE && location.pathname !== ADMIN_ROUTE ?
                        <button
                            style={{marginLeft:30}}
                            className="btn"
                            onClick={() => device.setActiveMenu(!device.activeMenu)}
                        >
                            <Image alt='side menu' src={burger_menu} width={20} height={20}/>
                        </button>
                        : null
                    }
                </div>

                {!user.isAuth ?
                    <Nav>
                        <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE) }>sign in</Button>
                    </Nav>
                    :
                    <Nav>
                        <Button  className='me-4' variant={'outline-light'}
                                 onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Admin panel
                        </Button>
                        <Button variant={'outline-light'} onClick={() => logOut()}>log out</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})
