*This repository is a mirror of the [component](http://component.io) module [ui-component/resizable](http://github.com/ui-component/resizable). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ui-component-resizable`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# resizable

  UI Resizable component, make any element resizable.

## Installation

    $ component install ui-component/resizable

## Example

```js
var resizable = require('resizable')(myElement);
resizable.set('handles', 'se, s, e');
resizable.build();
```

## API

### resizable(el[, opts])

  Create a new `Resizable` instance.

### resizable.set(optname, optvalue)

  Set options.

### resizable.build()

  bind events and append handles.

### resizable.destroy()

  unbind events and remove handles.
   

## License

  MIT
