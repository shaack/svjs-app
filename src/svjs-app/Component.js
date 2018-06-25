/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class Component {

    constructor(module = null, container = null, props = {}) {
        this.module = module
        this.container = container
        this.props = props
        this.components = []
        this.module.components.push(this)
    }

}