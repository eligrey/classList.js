# In-browser unit tests for ClassList.js pollyfill

Testing libraries used:
- [Mocha](http://visionmedia.github.io/mocha/) (BDD interface)
- [Chai](http://chaijs.com/) (should method)

Dependencies are managed with [NPM](https://www.npmjs.org/).

*These tests are intended for running in the old or crap browsers (IE8+).*

To setup testing environment:

1. Check out repository to folder accessible from web-server
2. Run `npm install` from `tests/` folder
3. Load `tests/index.html` in browser

> This is really in-browser unit tests, to get them working with [Node](https://github.com/joyent/node) you have to look at [Zombie.js](https://github.com/assaf/zombie) etc.
