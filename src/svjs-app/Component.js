/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

import {AppModule} from "./AppModule.js"

export class Component {

    constructor(module = null, container = null, props = {}) {
        if(!module || !module instanceof AppModule) throw "module needed"
        this.module = module
        this.container = container
        this.props = props
        this.module.components.push(this)
    }

}