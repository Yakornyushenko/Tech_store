import React, {useContext, useState} from 'react';
import '../styles/component_style/registrationButton.css'
import {Link, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, TERMS_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {login, registration} from "../http/userAuth";
import {Form} from "react-bootstrap";

const Auth = observer(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isRegistration = location.pathname === REGISTRATION_ROUTE

    const signInAndLogIn = async () => {
        try {
            let visitor;
            if (!isRegistration) {
                visitor = await login(email, password);
            } else {
                visitor = await registration(email, password);
            }
            user.setUser(visitor)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <section className="mt-5">
            <div className="mask d-flex align-items-center h-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-5">
                            <div className="card" style={{borderRadius: 15}}>
                                <div className="card-body p-4">
                                    <h3 className="text-uppercase text-center mb-4">
                                        {isRegistration ? 'Create an account' : 'log in to account'}
                                    </h3>


                                    <Form>

                                        <div className="form-outline mb-3">
                                            <input type="text" id="bla"
                                                   className="form-control"/>
                                            <label className="form-label" htmlFor="bla">Your Name</label>
                                        </div>

                                        <div className="form-outline mb-3">
                                            <Form.Control type="email"
                                                          className="form-control"
                                                          value={email}
                                                          onChange={e => setEmail(e.target.value)}
                                            />
                                            <label className="form-label">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-3">
                                            <Form.Control type="password"
                                                          className="form-control"
                                                          value={password}
                                                          onChange={e => setPassword(e.target.value)}
                                            />
                                            <label className="form-label">Password</label>
                                        </div>

                                        <div className="form-outline mb-3">
                                            <input type="password"
                                                   className="form-control"/>
                                            <label className="form-label">Repeat your
                                                password</label>
                                        </div>
                                            <div className="form-check d-flex justify-content-center mb-3">
                                                <input
                                                    checked={user.terms}
                                                    onChange={() => user.setTerms(!user.terms)}
                                                    className="form-check-input me-2" type="checkbox" value=''
                                                />
                                                <label className="form-check-label">
                                                    I agree all statements in
                                                    <Link to={TERMS_ROUTE}>
                                                        <u className="text-body">Terms of service</u>
                                                    </Link>
                                                </label>
                                            </div>

                                        <div className="d-flex justify-content-center">
                                            <button
                                                onClick={signInAndLogIn}
                                                disabled={!user.terms}
                                                type="button"
                                                className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">
                                                {isRegistration ? 'register' : 'authorization'}
                                            </button>
                                        </div>

                                        <p className="text-center text-muted mt-4 mb-0">
                                            Have already an account?
                                            <Link
                                                to={isRegistration ? LOGIN_ROUTE : REGISTRATION_ROUTE}
                                                className="fw-bold text-body">
                                                <u>
                                                    {isRegistration ? 'Login here' : 'Register'}
                                                </u>
                                            </Link>
                                        </p>

                                    </Form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
});

export default Auth;