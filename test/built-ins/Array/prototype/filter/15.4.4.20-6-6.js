// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.filter
es5id: 15.4.4.20-6-6
description: >
    Array.prototype.filter returns an empty array if 'length' is 0
    (subclassed Array, length overridden with obj with valueOf)
---*/

  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();

  var o = { valueOf: function () { return 0;}};
  f.length = o;

  function cb(){}
  var a = f.filter(cb);


assert(Array.isArray(a), 'Array.isArray(a) !== true');
assert.sameValue(a.length, 0, 'a.length');
