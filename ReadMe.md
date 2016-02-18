# ANSI Colors chrome extension

Chrome extension that converts ANSI characters to colors on the fly / on button click for the lazy ones. Does what [ansi-html-stream][ansi-html-stream] does but within browser.

*Work in progress* (pressing on button currently strip ansi characters for now) :P

## todo

[ ] figure out how to pass data to [ansi-html-stream][ansi-html-stream] (using a stream? maybe I should find a different solution)
[x] Provide ansi stripping capability [strip-ansi][strip-ansi]
[ ] create an icon
[ ] publish

## Notes

* This is mostly an attempt to use [browserify][browserify] in a chrome extensionand at least, this part seems to work eh.
* PR welcome as usual

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

[strip-ansi]: https://github.com/chalk/strip-ansi
[ansi-html-stream]: https://github.com/hughsk/ansi-html-stream
[browserify]: http://browserify.org/