import {host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await host.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('jwt', data.jwt)
    return jwt_decode(data.jwt)
}

export const login = async (email, password) => {
    const {data} = await host.post('api/user/login', {email, password})
    localStorage.setItem('jwt', data.jwt)
    return jwt_decode(data.jwt)
}

export const check = async () => {
    return await host.post('api/auth/registration')
}