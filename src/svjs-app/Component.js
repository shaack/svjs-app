/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class Component {
    constructor(element = null, config = {}) {
        this.config = config
        this.element = element
        this.components = {}
    }
}