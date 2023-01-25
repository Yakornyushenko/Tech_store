import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._terms = false
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(boolean) {
        this._isAuth = boolean
    }

    setUser(user) {
        this._user = user
    }

    setTerms(boolean) {
        this._terms = boolean
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get terms() {
        return this._terms
    }
}