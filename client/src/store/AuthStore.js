import React from 'react';
import {makeAutoObservable} from "mobx";

export default class AuthStore  {
    constructor() {
        this._terms = false
        makeAutoObservable(this)
    }
    setTerms(boolean) {
        this._terms = boolean
    }
    get terms() {
        return this._terms
    }
};
