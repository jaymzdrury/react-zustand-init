## Zustand Set Up

<img src="https://images.unsplash.com/photo-1551792714-9a8b35338793?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Zustand" width="350" />

### Setup

`npm i zustand`

***

### Add-ons

_middleware_

`devtools` logs state in redux devtools on browser

`persist` can set data to localStorage

```JavaScript
    import {devtools, persist} from 'zustand/middleware'
```

_setState_

can also use setState instead of getState (store.tsx)

```JavaScript
    .then(data => useData.setState((state) => ({
        ...state,
        name: data.name
    })))
```
