/**
 * Author: shaack
 * Date: 02.03.2018
 */

let app = null;

export class App {
    constructor(config) {
        this.config = config;
        this.model = {};
        this.components = {};
    }
    static create(config) {
        app = new this(config);
    }
    static get() {
        return app;
    }
}