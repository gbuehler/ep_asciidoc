var path = require('path');
var eejs = require("ep_etherpad-lite/node/eejs");
var settings = require('ep_etherpad-lite/node/utils/Settings');

exports.eejsBlock_exportColumn = function(hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_asciidoc/templates/exportcolumn.html", {}, module);
  return cb();
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_asciidoc/templates/scripts.html", {}, module);
  return cb();
};

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_asciidoc/templates/styles.html", {}, module);
  return cb();
};

exports.eejsBlock_mySettings = function (hook_name, args, cb) {
  if (!settings.ep_asciidoc_default){
    checked_state = 'unchecked';
  }else{
    if(settings.ep_asciidoc_default == true){
      checked_state = 'checked';
    }
  }
  args.content = args.content + eejs.require('ep_asciidoc/templates/asciidoc_entry.ejs', {checked : checked_state});
  return cb();
}
