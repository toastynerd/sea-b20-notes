Sea B20 Notes
===============
A simple notes program

## TODO
Create a Gruntfile.js that 
  - uses grunt-contrib-copy to copy html and css to /dist (from app)
  - use grunt-browserify to bundle instead of using watchify from the command line
  - use grunt-express to launch the express server

## Setup
```
npm -g install bowerify watchify
```

Then, clone the project and do a `npm install && bower install`

## Commands 

```
watchify app/app.js -t debowerify -o dist/bundle.js -v -d
```
