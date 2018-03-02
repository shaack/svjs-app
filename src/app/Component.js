/**
 * Author: shaack
 * Date: 02.03.2018
 */
 export class Component {
    constructor(module, element = null, config = {}) {
        this.module = module;
        this.config = config;
        this.element = element;
        this.app = module.app;
        this.model = module.model;
        this.elements = {};
    }
 }