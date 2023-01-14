import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Smartphone'},
            {id:2, name: 'Washer'}
        ]
        this._brands = [
            {id: 1, name: 'Bosh'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Bosh super star', price: '25000', rating: 4},
            {id: 2, name: 'sweet big Apple', price: '1000', rating: 5}
        ]
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevice(devices) {
        this._brands = devices
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}