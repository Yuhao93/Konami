var Konami = Konami || {};

Konami.set = function(callback) {
  Konami.__callback = callback;
};

Konami.__keycodes = {
  'up': 38,
  'down': 40,
  'left': 37,
  'right': 39,
  'enter': 13,
  'space': 32,
  'shift': 16,
  'ctrl': 17
};
for (var i = 0; i < 26; i++) {
  Konami.__keycodes[String.fromCharCode(97 + i)] = 65 + i;
}
for (var i = 0; i < 10; i++) {
  Konami.__keycodes[(i + '')] = 48 + i;
}

Konami.listen = function(opts) {
  opts = opts || {};
  Konami.__keyDelay = opts.keyDelay || 500;
  Konami.__sequence = opts.sequence || ['up', 'up', 'down', 'down', 'left',
      'right', 'left', 'right', 'b', 'a', 'enter'];
  Konami.__state = 0;
  Konami.__prev = 0;
  document.onkeydown = Konami.__keydown;
};

Konami.__keydown = function(e) {
  var now = (new Date()).getTime();
  e = e || window.event;
  var expected = Konami.__sequence[Konami.__state];
  if (Konami.__keycodes[expected] == e.keyCode &&
      (Konami.__state == 0 || Konami.__prev + Konami.__keyDelay > now)) {
    if (++Konami.__state == Konami.__sequence.length) {
      Konami.__state = 0;
      if (Konami.__callback) {
        Konami.__callback();
      }
    }
  } else {
    Konami.__state = 0;
  }
  Konami.__prev = now;
};
