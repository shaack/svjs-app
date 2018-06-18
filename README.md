# svjs-app

A minimal ES6 JavaScript frontend app framework. It´s so minimal that
it has only about 20-30 lines of code being enough to build complex
reactive SPAs together with other [sjvs](https://github.com/shaack/svjs) Modules. 

## Documentation

`App` -> `Component`

### App

To create an individual App (`MyApp`), extend `App` and add
`Components` to it.

### Component

An App has Components. A Component in most cases is related to a DOM element in the HTML. 
Examples for Components are `SearchInput` or `ChatOutput` or something like this.

A Components can have sub-Components. 