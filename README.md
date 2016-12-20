# slush-revelry

A generator for Revelry Node.js apps that use React, Redux, and more.

**WARNING:**
Currently the generated app has a bunch of dependencies on Joel's local filesystem.
This is going to get fixed, but ya know, watch out for that.

## Install

`npm install -g slush slush-revelry`

## Generators

To create a new app:

```
slush revelry:new my-app-name
cd my-app-name
```

Create a new feature module (from the project root directory):

```
slush revelry:module widgets
```

## The generated application

There are several READMEs in the generated app.
Here's an overview of what you get out of the box:

* A full page universal-rendering Express app that uses React and Redux with zero setup.
* Preset `gulp` and `webpack` configuration for unified client and server builds.
* Asset cache-busting.
* A live-reloading dev task.
* Auto-loaded per-feature views.
* Auto-loaded per-feature server routes.
* Auto-loaded per-feature state reducers.
* Routing presets to handle three cases:
  * Routes like `/widgets/14` render HTML.
  * Routes like `/jsonui/widgets/14` render the corresponding vars as JSON.
  * `POST /__RENDER__`: Send a JSON payload like `{"name": "widgets/show", "data": {"widget": {"id": 14}}}` to render HTML. (To use the server as a rendering service for another app.)  

## Contributing to the generator

Make your edits to the code, and run `npm test` to create and start a generated test app on port 8000.
Read `package.json` and `slushfile.js` to see exactly what it does.
