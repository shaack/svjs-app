/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

let app = null;

export class App {
    constructor(config = {}) {
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