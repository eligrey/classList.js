# classList.js

[![Test Status](https://saucelabs.com/buildstatus/classlist-polyfill)][sauce]

[sauce]: https://saucelabs.com/u/classlist-polyfill

Cross-browser JavaScript shim that fully implements `element.classList`.

Refer to [the MDN page on `element.classList`][MDN] for more information.

[MDN]: https://developer.mozilla.org/en/DOM/element.classList


## Development

### Getting started

```
npm install
```

### Run the tests using a local web driver

```
npm test
```

### Run the tests using cloud browsers

Requires a [Sauce Labs][] username and access key.

```
echo '{"user": "<username>", "key": "<access key>" }' > user.json
npm test:ci
```

[Sauce Labs]: https://saucelabs.com/

### Run the tests using custom configuration

The tests use [webdriver.io][].

Create a `wdio.conf.js`:

```
wdio config
# or extend an existing config
cp test/wdio.sample.js wdio.conf.js
```

Run the tests:
```
wdio
```

[webdriver.io]: http://webdriver.io/
