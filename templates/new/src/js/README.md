# WELCOME

# Base directory

This directory is a search path for modules.
What does this mean?
You do not have to provide relative paths when importing things from here.
You can write the following in ANY file:

```javascript
import {PORT} from 'config/server'
import MainLayout from 'components/main-layout'
import {increment} from 'app/redux/counter'
import router from 'setup/router'
```

And so on.

# App modules

```
app/
  home/
    views/
      index.js
    routes.js
  widgets/
    views/
      index.js
      show.js
      create.js
      edit.js
    components/
      form.js
      list-item.js
    routes.js
```
