import React, {useContext} from 'react';
import '../styles/registrationButton.css'
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, TERMS_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const isRegistration = location.pathname === REGISTRATION_ROUTE

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


                                <form>

                                    <div className="form-outline mb-3">
                                        <input type="text" id="bla"
                                               className="form-control"/>
                                        <label className="form-label" htmlFor="bla">Your Name</label>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input type="email" id="blabla"
                                               className="form-control"/>
                                        <label className="form-label" htmlFor="blabla">Your Email</label>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input type="password" id="blablabla"
                                               className="form-control"/>
                                        <label className="form-label" htmlFor="blablabla">Password</label>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input type="password" id="blablablabla"
                                               className="form-control"/>
                                        <label className="form-label" htmlFor="blablablabla">Repeat your
                                            password</label>
                                    </div>
                                    {isRegistration ?
                                        <div className="form-check d-flex justify-content-center mb-3">
                                            <input
                                                checked={user.terms}
                                                onChange={() => user.setTerms(!user.terms)}
                                                className="form-check-input me-2" type="checkbox" value=''
                                                id="blablablablablablablabla"/>
                                            <label className="form-check-label" htmlFor="blablablablablablablabla">
                                                I agree all statements in
                                                <Link to={TERMS_ROUTE}>
                                                    <u className="text-body">Terms of service</u>
                                                </Link>
                                            </label>
                                        </div>
                                        : null}


                                    <div className="d-flex justify-content-center">
                                        <button
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

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
});

export default Auth;