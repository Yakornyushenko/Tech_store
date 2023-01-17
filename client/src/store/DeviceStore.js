import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Smartphones'},
            {id:2, name: 'Washers'},
            {id:3, name: 'Cats'},
            {id:4, name: 'Dogs'},
            {id:5, name: 'Birds'}
        ];
        this._brands = [
            {id: 1, name: 'Bosh'},
            {id: 2, name: 'BApple'},
            {id: 3, name: 'Upple'},
            {id: 4, name: 'Dupple'},
            {id: 5, name: 'Foopple'},
            {id: 6, name: 'Capple'}
        ];
        this._devices = [
            {id: 1, name: 'Bosh super star', price: '25000', rating: 4},
            {id: 2, name: 'sweet big Apple', price: '10060', rating: 2},
            {id: 3, name: 'sweet big Apple', price: '10400', rating: 3},
            {id: 4, name: 'sweet big Apple', price: '10300', rating: 1},
            {id: 5, name: 'Apple', price: '10080', rating: 5},
            {id: 6, name: 'Apple', price: '10080', rating: 5},
            {id: 7, name: 'Apple', price: '10080', rating: 5},
            {id: 8, name: 'Apple', price: '10080', rating: 5},
            {id: 9, name: 'Apple', price: '10080', rating: 5},
            {id: 10, name: 'Apple', price: '10080', rating: 5},
            {id: 11, name: 'Apple', price: '10080', rating: 5}
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