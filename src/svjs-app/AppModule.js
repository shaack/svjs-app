/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class AppModule {

    constructor(container = null, props = {}) {
        /* @var App */
        this.app = null
        /* @var Element */
        this.container = container
        this.props = props
        this.state = {}
        this.components = []
    }

    addComponent(component) {
        component.module = this
        this.components.push(component)
    }

}