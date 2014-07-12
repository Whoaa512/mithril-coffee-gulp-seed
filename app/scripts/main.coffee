m = require 'mithril'
_ = require 'lodash'

# Component Classes
MyComponent = require './components/MyComponent'

_myComponent = new MyComponent

# Main namespace
app = {}

# Controller
class app.controller
  constructor: ->

  myComponent: new _myComponent.controller

# View
app.view = (ctrl) ->
  m '.container', _myComponent.view(ctrl.myComponent)


$ document
  .ready ->
    m.module $('#my-content')[0], app
