var babylon = require('babylon')
var traverse = require('babel-traverse').default
var generate = require('babel-generator').default

const code = `
  function square(n) {
    return n * n
  }
`

const ast = babylon.parse(code)

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x'
    }
  }
})

const lastCode = generate(ast).code

console.log(lastCode)