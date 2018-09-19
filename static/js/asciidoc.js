if(typeof exports == 'undefined'){
  var exports = this['mymodule'] = {};
}

exports.postAceInit = function(hook, context){
  var asciidoc = {
    enable: function() {
      $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").addClass("asciidoc"); // add css class asciidoc
      $('#underline').hide(); // no asciidoc support for these
      $('#strikethrough').hide();
    },
    disable: function() {
      $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").removeClass("asciidoc"); // add css class asciidoc
      $('#underline').removeAttr('style'); // no asciidoc support for these
      $('#strikethrough').removeAttr('style');
    }
  }

  /* init */
  if($('#options-asciidoc').is(':checked')) {
    asciidoc.enable();
  } else {
    asciidoc.disable();
  }
  /* on click */
  $('#options-asciidoc').on('click', function() {
    if($('#options-asciidoc').is(':checked')) {
      asciidoc.enable();
    } else {
      asciidoc.disable();
    }
  });
}

exports.aceEditorCSS = function(hook_name, cb){
  return ["/ep_asciidoc/static/css/asciidoc.css"];
} // inner pad CSS
