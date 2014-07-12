model_ref = null

module.exports = class MyComponent
  # private
  _excluded = m.prop 'later'
  _secrets = m.prop 'none'

  constructor: ->
    model_ref = @
    @exposedData = m.prop ['To', 'be', 'updated', 'later']


  controller: class

    fetchNewSecrets: ->
      newData = m.request
        method: 'GET'
        url: 'data/something.json'
      _secrets(newData)


  view: (ctrl) ->
    ctrl.fetchNewSecrets()
    m '.row', [
      m '.col-md-9',
        m 'ul.nav.nav-tabs', model_ref.exposedData().map (item) ->
          if item isnt _excluded()
            m 'li',
              m 'a', item
      m '.col-md-3', _secrets()
    ]
