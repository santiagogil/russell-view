// Inspired on es6-template-tags
module.exports = function russellView (literals, subs) {
    var rest = []
    rest.push.apply(rest, arguments) && rest.shift();
  return literals.raw.reduce(function reducelit (acc, lit, i) {
        var subst = rest[i - 1]
    if (Array.isArray(subst)) {
      subst = subst.join('')
    }
    return acc + subst + lit
  })
}
