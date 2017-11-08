classList.js is a cross-browser JavaScript shim that implements `element.classList`. Refer to [the MDN page on `element.classList`][1] for more information.

This works in every browser except IE 7 or earlier.

| Method     | Supported |
| ---------- | --------- |
| `add`      | :white_check_mark: Yes |
| `remove`   | :white_check_mark: Yes |
| `item`     | :white_check_mark: Yes |
| `toggle`   | :white_check_mark: Yes |
| `contains` | :white_check_mark: Yes |
| `replace`  | :x: No [#70](https://github.com/eligrey/classList.js/issues/70) |

An older version is hosted at public CDNs, allowing you to use this already small file at nearly zero size overhead. Use one of these URLs:

  - [//cdnjs.cloudflare.com/ajax/libs/classlist/2014.01.31/classList.min.js](//cdnjs.cloudflare.com/ajax/libs/classlist/2014.01.31/classList.min.js)
  - [//cdn.jsdelivr.net/npm/classlist.js@1.1.20150312/classList.min.js](//cdn.jsdelivr.net/classlist/2014.01.31/classList.min.js)

If you would like other versions (such as the current one) hosted there, follow the instructions at 
https://github.com/jsdelivr/jsdelivr
and
https://github.com/cdnjs/cdnjs
to prepare a pull request.

![Tracking image](https://in.getclicky.com/212712ns.gif)

  [1]: https://developer.mozilla.org/en/DOM/element.classList "MDN / DOM / element.classList"
