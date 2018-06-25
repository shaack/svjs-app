# svjs-app

A minimal ES6 JavaScript frontend app framework. It´s so minimal that
it has fewer than 100 lines of code, but being enough to build complex
reactive SPAs, together with the other [sjvs](https://github.com/shaack/svjs) ES6-Modules. 

## Documentation

```
App -> AppModules -> Components
```

### App

- Is **stateless**
- Is **singleton**
- Has **Props**
- Contains **AppModules**

An `App` is the coded representation of a SPA (Single Page Application). It may contain `AppModules`. 
An `App` is stateless and has a constant configuration (`props`). 

## AppModule

- Can be associated to a **container DOM element** 
- Has a **State**
- Has **Props**
- May contains **Components**

`AppModules` are parts of an `App`. Examples for AppModules are "Chat" or "ToDo List".
An `AppModule` can have a `State` (changeable) and `Props` (constant configuration).

An `AppModule` is mostly associated with a container DOM element.   

A AppModule can and should have multiple Components.

### Component

- Can be associated to a **container DOM element**
- Uses the State of the AppModule or App
- Has **Props** 
- May contain Components

A `Component` has no own `State`, it shares the `State` of the parent-`AppModule`.

A `Component` in most cases is related to a container DOM element and part of a `AppModule`. 
Examples for `Components` are "SearchInput" or "ChatOutput" or something like this.

A `Component` can have sub-Components.