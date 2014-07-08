debug = require 'debug'

class Logger
  main: null
  name: null
  subs: {}
  constructor: (name)->
    @name = name
    @main = debug name

  getLog: ->
    @main

  getSubLog: (subname)->
    @subs[subname] = debug @name+':'+subname

exports = module.exports = Logger