function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (var i = 0, l = iterable.length; i < l; i++) {
      var element = iterable[i];
      callback(element, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (var key in iterable) {
      var value = iterable[key];
      callback(value, key, iterable);
    }
  }
}