/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

import {App} from "./App.js"

export class AppModule {

    constructor(app, container = null, props = {}) {
        if(!app || !app instanceof App) throw "app needed"
        this.app = app
        this.container = container
        this.props = props
        this.state = {}
        this.components = []
        this.app.modules.push(this)
    }

}