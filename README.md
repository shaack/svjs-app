# modulo-app

A minimal ES6 JavaScript frontend app framework. It´s so minimal that
it has fewer than 100 lines of code, but being enough to build complex
reactive SPAs, together with the other [modulo](https://github.com/shaack/modulo) ES6-Modules. 

## Documentation

```
App -> AppModules -> Components
```

### App

- Is **stateless**
- Is **singleton**
- Has **Props**
- Contains **AppModules**

An `App` is the coded representation of a SPA (Single Page Application). It may contain `Components`. 
An `App` is stateless and has a constant configuration (`props`).

## Component
 
- Has a **State**
- Has **Props**
- May contain Child-Components
- `Components` are parts of an `App`. Examples for Components are "Chat" or "ToDo List".
- A `Component` can have a `State` (changeable) and `Props` (constant configuration).
- A `Component` can have Child-Components.