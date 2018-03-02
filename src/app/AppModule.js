/**
 * Author: shaack
 * Date: 02.03.2018
 */
import {App} from "./App.js";

export class AppModule {
    constructor(element = null, config = {}) {
        this.app = App.get();
        this.element = element;
        this.config = config;
        this.model = {};
        this.components = {};
    }

 }