/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class AppModule {

    constructor(app = null, container = null, props = {}) {
        this.app = app
        this.container = container
        this.props = props
        this.state = {}
        this.components = []
        this.app.modules.push(this)
    }

}