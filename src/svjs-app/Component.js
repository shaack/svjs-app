/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class Component {

    constructor(module, container = null, props = {}) {
        this.module = module
        this.props = props
        this.components = []
    }

    addComponent(componentType, container = null, props = {}) {
        const component = new componentType(this.module, container, props)
        this.components.push(component)
        return component
    }

}