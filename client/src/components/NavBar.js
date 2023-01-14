import {useContext} from "react";
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

export const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar className='justify-content-between' bg='dark' variant='dark'>
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}> TYMBA SHOP</NavLink>
                {user.isAuth ?
                    <Nav>
                        <Button className='me-4' variant={'outline-light'}>Admin panel</Button>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(false)}>sign in</Button>
                    </Nav>
                    :
                    <Nav>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>log in</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})
