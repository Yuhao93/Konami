Konami.js
=========

Konami.js is a simple little tool that makes it easy to embed easter eggs and surprises into your web site.

Usage
-----

To use the konami code, include the script and set it up in javascript:

```js
Konami.set(function() {
  // Execute code here after konami code sequence has been input.
  console.log('Konami code detected!');
});

// These options are by default, if you are ok with these, just use Konami.listen();
Konami.listen({
  keyDelay: 500,
  sequence: ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter']
});
```

Then, whenever the user inputs the specified sequence (by default the konami code), your callback function
is called. You can use any arbitrary length sequence. All letters and numbers, direction keys, shift, control ('ctrl'), and enter are supported.
