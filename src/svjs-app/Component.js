import {App} from "./App"

/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class Component {

    constructor(module = null, container = null, props = {}) {
        if(!module || !module instanceof AppModule) throw "module needed"
        this.module = module
        this.container = container
        this.props = props
        this.module.components.push(this)
    }

}