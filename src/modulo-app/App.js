/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

let app = null

export class App {

    constructor(props = {}) {
        this.props = props
        this.components = []
    }

    static create(props) {
        app = new this(props)
        return app
    }

    static get() {
        return app
    }

    addComponent(componentType, container = null, props = {}) {
        const component = new componentType(this, container, props)
        this.components.push(component)
        return component
    }

}