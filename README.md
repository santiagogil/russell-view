# Ttítulo

Utilidad minima para la creacion de plantillas html mediante ES6 template literals.

## Instalación

npm install --save russell-view

## Ejemplo

``` js
var html = require('russell-view')

var world = 'world'
html`<h1>Hello ${world}!</h1>` // returns '<h1>Hello world!</h1>'

var items = [1,2,3]
html`<ul>${items.map(function (item) { return html`<li>${item}</li>` })}</ul>` // returns <ul><li>1</li><li>2</li><li>3</li></ul>

```

## Tests

`npm test`

## Contribuyendo
Este repositorio cuenta con un archivo CONTRIBUTING.md

## Código de conducta
Los colaboradores de este proyecto respetamos el codigo de conducta presente en CODE_OF_CONDUCT.md

## Licencia
MIT
