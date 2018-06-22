# svjs-app

A minimal ES6 JavaScript frontend app framework. It´s so minimal that
it has fewer than 100 lines of code, but being enough to build complex
reactive SPAs, together with the other [sjvs](https://github.com/shaack/svjs) Parts. 

## Documentation

### App

An App has Modules and Components. Modules have Components.

```
App -> Components
App -> Modules -> Components
```

## AppModule

Modules are parts of an App. Examples for Modules are `Chat` or `ToDo List`.
A AppModule can have a State (changeable) and Props (constant configuration).

A module is mostly associated with a container DOM element.   

A AppModule can and should have multiple Components.

### Component

A Component has no own State, it shares the State of the parent-AppModule.

A Component in most cases is related to a container DOM element and part of a AppModule. 
Examples for Components are `SearchInput` or `ChatOutput` or something like this.

A Components can have sub-Components.