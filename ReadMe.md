# [ANSI Colors chrome extension](https://chrome.google.com/webstore/detail/hpkomngllcnigoocaolicfknnhibnmfi/)

[![Greenkeeper badge](https://badges.greenkeeper.io/GabLeRoux/ansi-colors-chrome-extension.svg)](https://greenkeeper.io/)

Chrome extension that converts ANSI characters to colors on the fly / on button click for the lazy ones. Does what [ansi-html-stream][ansi-html-stream] does but within browser.

*Work in progress* (pressing on button currently strip ansi characters for now) :P

## Motivation

I once used to run [salt](https://saltstack.com/) commands with [jenkins](https://jenkins.io/), which outputs colored data by default, but it gets unreadable in a webpage! There's a [jenkins plugin for this](https://wiki.jenkins-ci.org/display/JENKINS/AnsiColor+Plugin), but I tought **why not a plugin for chrome itself?** Here it is :)

Here's a related blog post I wrote about ansi characters and colors:
[Keep saltstack colored output](https://gableroux.com/tips/2016/02/18/keep-saltstack-colored-output/)

## Todo

- [ ] Figure out how to pass data to [ansi-html-stream][ansi-html-stream] (using a stream? maybe I should find a different solution) See #1 help needed!
- [ ] Add support for colors instead of stripping colors
- [ ] Create an icon
- [x] Provide ansi stripping capability [strip-ansi][strip-ansi] :tada:
- [x] Publish

## Usage

Right now, hitting extension button can convert from this:
```
Summary
-------------[0m
[0;32mSucceeded: 24[0m ([0;32mchanged=3[0m)
[0;36mFailed:     0[0m
[0;36m-------------
Total states run:     24[0m
```
to this
```
Summary
-------------
Succeeded: 24 (changed=3)
Failed: 0
-------------
Total states run: 24
```

## Installation

### From the chrome webstore

[ANSI Colors chrome extension](https://chrome.google.com/webstore/detail/hpkomngllcnigoocaolicfknnhibnmfi/)

### Manually from releases page

1. Download latest zip file in [the releases tab](https://github.com/GabLeRoux/ansi-colors-chrome-extension/releases).
2. Unzip the the file
3. Open [chrome://extensions](chrome://extensions)
4. Drag n drop the folder of the plugin

Have fun! :v:

## Contributing

* Pull requests are welcome! Please contribute :rocket:
* This plugin uses [browserify][browserify] in a chrome extension and it works!
* The plugin was created using [generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension)

## Development and requirements

1. Clone the repository
2. Build or watch (see commands section)
3. Open [chrome://extensions](chrome://extensions)
4. Check the Developer mode checkbox
![chrome-extensions](https://cloud.githubusercontent.com/assets/1264761/23734467/40ac4e3a-044d-11e7-8ef6-d5f3a043767a.png)
5. Hit `Load unpacked extension...` button
6. Select the `dist` folder (which contains the `manifest.json` file)

### Commands

```bash
# install gulp and dependencies
npm i -g gulp && npm i

# Transform updated source written by ES2015 (default option)
gulp babel

# or Using watch to update source continuously
gulp watch

# Make a production version extension
gulp build

# compress and prepare for the chrome web store (after gulp build)
gulp package
```

More details at [generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension)

## Problems? Questions?
See [issues](https://github.com/GabLeRoux/ansi-colors-chrome-extension/issues/)

## License

MIT © [Gabriel Le Breton](https://gableroux.com/)

[strip-ansi]: https://github.com/chalk/strip-ansi
[ansi-html-stream]: https://github.com/hughsk/ansi-html-stream
[browserify]: http://browserify.org/
