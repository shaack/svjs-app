/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class Module {
    constructor(element = null, config = {}) {
        this.config = config
        this.element = element
        this.state = {}
        this.components = {}
    }
}