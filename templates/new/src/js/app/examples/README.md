# Feature directories

An app subdirectory describes a feature area.
(Think `home` or `users` or `widgets`.)
Its contents are organized by object role.
(Think `views`, `routes`, etc.)

```
home/
  components/
  state/
  views/
  routes.js
```

## routes

An `express.Router` for the server that generally renders views.

```
import {Router} from 'express'
const router = new Router()

router.get('/', (req, res) => res.render('home/index'))

export default router
```

It will be auto-loaded by `src/js/setup/autoload/routes.js` and mounted at a path that corresponds to its name.
For example, `app/widgets/routes.js` would be mounted at `/widgets`.

There is one special case. `app/home/routes.js` will be mounted at both `/home` and `/`.

## views

Contains React components where each represents a full page to render.
These are auto-loaded by `src/js/setup/autoload/views.js` and provided to the application's render functions.

## components

Contains React components that render less than a full page.
Unlike views, they are not autoloaded and not provided to the render functions.
You must import them manually in order to use them.

```
import React from 'react'
import CounterIncrementButton from 'app/home/components/CounterIncrementButton'
export default function(props) {
  return <CounterIncrementButton />
}
```

## state

Each file exports the reducer (default), constants, and action-creators used to manage a slice of redux state.

```
export const NAME = 'counter'
export const TYPE_INCREMENT = 'counter:inc'

export function increment() {
  return {type: TYPE_INCREMENT}
}

export default function(counter = 0, {type}) {
  switch(type) {
  case TYPE_INCREMENT:
    return counter + 1
  case TYPE_DECREMENT:
    return counter - 1
  default:
    return counter
  }
}
```

The slice that the reducer manages is defined by the file's name,
irrespective of the module directory in which it resides.
`foo.js` always manages `state.data.foo`. Examples:

* `app/home/state/counter.js` manages `state.data.counter`
* `app/widgets/state/pizzas.js` manages `state.data.pizzas`

Different module directories may not define state files with the same name.
(You can't have both `home/state/counter.js` and `widgets/state/counter`.)
