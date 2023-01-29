import {makeAutoObservable} from "mobx";
import phone from '../styles/images/smartphone.png';

export default class DeviceStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = [
            // {id: 1, name: 'Bosh super star', price: '25000', rating: 4, img: phone},
            // {id: 2, name: 'sweet big Apple', price: '10060', rating: 2, img: phone},
            // {id: 3, name: 'sweet big Apple', price: '10400', rating: 3, img: phone},
            // {id: 4, name: 'sweet big Apple', price: '10300', rating: 1, img: phone},
            // {id: 5, name: 'Apple', price: '10080', rating: 5, img: phone},
            // {id: 6, name: 'Apple', price: '10080', rating: 5, img: phone},
            // {id: 7, name: 'Apple', price: '10080', rating: 5, img: phone},
            // {id: 8, name: 'Apple', price: '10080', rating: 5, img: phone},
            // {id: 9, name: 'Apple', price: '10080', rating: 5, img: phone},
            // {id: 10, name: 'Apple', price: '10080', rating: 5, img: phone},
            // {id: 11, name: 'Apple', price: '10080', rating: 5, img: phone}
        ];
        this._activeMenu = true;
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this)
    }


    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }


    setTypes(types) {
        this._types = types
    }
    setActiveMenu(activeMenu) {
        this._activeMenu = activeMenu
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevice(devices) {
        this._brands = devices
    }

    get activeMenu() {
        return this._activeMenu
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}