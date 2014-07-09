fs = require 'fs'

exports = module.exports

loaded = {}
load = (path)->
  fs.readdirSync(path).forEach (file) ->
    newPath = path + "/" + file
    stat = fs.statSync(newPath)
    if stat.isFile()
      if /(.*)\.(js$|coffee$)/.test file
        loaded[file.substr(0, file.lastIndexOf('.'))] = require newPath
    else load newPath  if stat.isDirectory()

exports.requireFolder = (path)->
  loaded = {}
  load path
  loaded
