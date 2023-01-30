import {authHost, host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await host.get('api/type')
    return data
}

export const fetchBrands = async () => {
    const {data} = await host.get('api/brand')
    return data
}

export const fetchDevices = async () => {
    const {data} = await host.get('api/device')
    return data
}

export const fetchOneDevices = async (id) => {
    const {data} = await host.get(`api/device/${id}`)
    return data
}