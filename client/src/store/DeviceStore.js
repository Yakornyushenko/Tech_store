import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = [];
        this._basket = [];
        this._activeMenu = true;
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 8;

        makeAutoObservable(this)
    }


    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }
    setLimit(limit) {
        this._limit = limit
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
    setDevices(devices) {
        this._devices = devices
    }
    setBasket(basket) {
        this._basket = basket
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
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
    get basket() {
        return this._basket
    }

    get selectedType() {
        this.setPage(1)
        return this._selectedType
    }
    get selectedBrand() {
        this.setPage(1)
        return this._selectedBrand
    }
}