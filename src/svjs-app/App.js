/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

let app = null

export class App {

    constructor(config = {}) {
        this.config = config
        this.state = {}
        this.modules = []
        this.components = []
    }

    static create(config) {
        app = new this(config)
        return app
    }

    static get() {
        return app
    }

    addModule(module) {
        this.modules.push(module)
    }

}