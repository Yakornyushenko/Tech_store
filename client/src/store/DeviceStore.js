import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = [];
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
        this._devices = devices
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