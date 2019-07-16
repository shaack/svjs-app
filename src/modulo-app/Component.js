/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class Component {

    constructor(app, props = {}) {
        this.app = app
        this.props = props
        this.state = {}
        this.components = []
    }

}