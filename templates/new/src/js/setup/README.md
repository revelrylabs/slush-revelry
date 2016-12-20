# setup

This directory houses the most fundamental building blocks of the application.
You shouldn't be spending much of your coding time here.
If it needs any tweaking, try do it early on in your project and then leave it alone.

A few things that happen here:
* Autoloaders are defined. This Webpack-dependent plumbing allows our app's
  file-convention-based behaviors to function.
* The redux root reducer is composed from app reducers.
* Client and server rendering functions are produced.
* The redux store is initialized from view vars.
* The main application router is composed from app routers.
