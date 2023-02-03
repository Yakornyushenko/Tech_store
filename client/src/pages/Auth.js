import React, {useContext, useEffect, useState} from 'react';
import '../styles/component_style/registrationButton.css'
import {Link, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, TERMS_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {login, registration} from "../http/userAuth";
import {Form} from "react-bootstrap";

const Auth = observer(() => {
    // VALIDATION
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [userName, setUserName] = useState('')

    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [userNameDirty, setUserNameDirty] = useState(false)

    const [emailError, setEmailError] = useState('email cannot be empty')
    const [passwordError, setPasswordError] = useState('password cannot be empty')
    const [userNameError, setUserNameError] = useState('name cannot be empty')

    const [emailHidden, setEmailHidden] = useState(true)
    const [passwordHidden, setPasswordHidden] = useState(true)
    const [userNameHidden, setUserNameHidden] = useState(true)

    const [validForm, setValidForm] = useState(false)

    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isRegistration = location.pathname === REGISTRATION_ROUTE

    useEffect(() => {
        if (emailError || passwordError || userNameError || !user.terms) {
            setValidForm(false)
        } else {
            setValidForm(true)
        }
    }, [emailError, passwordError, userNameError, user.terms])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'password':
                return setPasswordDirty(true)
            case 'email':
                return setEmailDirty(true)
            case 'userName':
                return setUserNameDirty(true)
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = String(e.target.value).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (!re) {
            setEmailError('invalid email')
        } else {
            setEmailHidden(false)
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        const re = String(e.target.value).toLowerCase().match(/^[a-zA-Z\-]+$/)
        setPassword(e.target.value)
        if (!re) {
            setPasswordError('invalid password')
        } else {
            setPasswordHidden(false)
            setPasswordError('')
        }
    }
    const userNameHandler = (e) => {
        setUserName(e.target.value)
        const re = String(e.target.value).match(/^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/)
        if (!re) {
            setUserNameError('impossible name')
        } else {
            setUserNameHidden(false)
            setUserNameError('')
        }
    }

    // authentication and registration
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
                                            <input
                                                placeholder='Enter your name'
                                                onBlur={e => blurHandler(e)}
                                                name="userName"
                                                type="text"
                                                className="form-control"
                                                value={userName}
                                                onChange={e => userNameHandler(e)}
                                            />
                                            {(userNameDirty && userNameError) ?
                                                <label style={{color: "red"}} className="form-label">
                                                    {userNameError}
                                                </label>
                                                : <label hidden={userNameHidden} style={{color: "forestgreen"}}
                                                         className="form-label">
                                                    you are very original!
                                                </label>
                                            }
                                        </div>

                                        <div className="form-outline mb-3">
                                            <input
                                                placeholder="Enter your email"
                                                onBlur={e => blurHandler(e)}
                                                name="email"
                                                type="text"
                                                className="form-control"
                                                value={email}
                                                onChange={e => emailHandler(e)}
                                            />
                                            {(emailDirty && emailError) ?
                                                <label style={{color: "red"}} className="form-label">
                                                    {emailError}
                                                </label> : <label hidden={emailHidden} style={{color: "forestgreen"}}
                                                                  className="form-label">
                                                    correct mail
                                                </label>
                                            }

                                        </div>

                                        <div className="form-outline mb-3">
                                            <Form.Control
                                                onBlur={e => blurHandler(e)}
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder='Enter your password'
                                                value={password}
                                                onChange={e => passwordHandler(e)}
                                            />
                                            {(passwordDirty && passwordError) ?
                                                <label style={{color: "red"}} className="form-label">
                                                    {passwordError}
                                                </label> : <label hidden={passwordHidden} style={{color: "forestgreen"}}
                                                                  className="form-label">
                                                    correct password, thank you!
                                                </label>
                                            }
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-3">
                                            <Form.Control
                                                checked={user.terms}
                                                onChange={() => user.setTerms(!user.terms)}
                                                className="form-check-input me-2" type="checkbox" value=''
                                            />
                                            <label className="form-check-label">
                                                I agree all statements in
                                                <Link
                                                    to={TERMS_ROUTE}>
                                                    <u className="text-body"
                                                    >
                                                        Terms of service
                                                    </u>
                                                </Link>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button
                                                onClick={signInAndLogIn}
                                                disabled={!validForm}
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