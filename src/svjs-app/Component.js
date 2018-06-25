/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class Component {

    constructor(props = {}) {
        /* @var AppModule */
        this.module = null
        /* @var Component */
        this.parent = null
        this.props = props
        this.components = []
    }

    addComponent(component) {
        component.parent = this
        component.module = this.module
        this.components.push(component)
        return component
    }

}