var tape = require('tape')
var russellView = require('./index.js')

tape('html templates', function (t) {
  t.plan(2)
  var world = 'world'
  t.equal('<h1>Hello world!</h1>', russellView`<h1>Hello ${world}!</h1>`, 'merges strings and values properly')
  t.equal('<ul><li>1</li><li>2</li><li>3</li></ul>', russellView`<ul>${[1,2,3].map(function (i) {
    return russellView`<li>${i}</li>`
  })}</ul>`, 'converts arrays to valid html')
})
