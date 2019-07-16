/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class Component {

    constructor(app, container = null, props = {}) {
        this.app = app
        this.container = container
        this.props = props
        this.state = {}
        this.components = []
    }

    addComponent(componentType, container = null, props = {}) {
        const component = new componentType(this, container, props)
        this.components.push(component)
        return component
    }

}