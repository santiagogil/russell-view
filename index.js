// Inspired on es6-template-tags
module.exports = function russellView (literals, ...substs) {
  return literals.raw.reduce(function reducelit (acc, lit, i) {
    var subst = substs[i - 1]
    if (Array.isArray(subst)) {
      subst = subst.join('')
    }
    return acc + subst + lit
  })
}
