# Static Boilerplate

A boilerplate application for non-SPAs.

### Getting started

The project requires [Node.js](http://nodejs.org/download/) `>=0.10.26` and the [npm](https://www.npmjs.org/) of the appropriate version.
Note that some nodejs PPA repositories for Ubuntu (e.g. the [Chris Lea's PPA](http://www.ubuntuupdates.org/ppa/chris_lea_nodejs))
inlude the npm along with the actual nodejs packages.

Once Node.js and npm are installed, install [Gulp](http://gulpjs.com/) globally,
by running `npm install --global gulp`.

Lastly, clone the project, `cd` to it, and `npm install` all project dependencies.


### Running & building the project

Available Gulp tasks:

* `gulp`: Runs development server, with live reload

* `gulp runProd`: Builds project for production (**compressed** webpack chunks, no livereload)
