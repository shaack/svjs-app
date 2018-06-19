/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class Module {
    constructor(element = null, props = {}) {
        this.element = element
        this.props = props
        this.state = {}
        this.components = {}
    }
}