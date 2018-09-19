var exportAsciidoc = require('./exportAsciidoc');

exports.expressCreateServer = function (hook_name, args, cb) {
  args.app.get('/p/:pad/:rev?/export/asciidoc', function(req, res, next) {
    var padID = req.params.pad;
    var revision = req.params.rev ? req.params.rev : null;

    exportAsciidoc.getPadAsciidocDocument(padID, revision, function(err, result) {
      res.contentType('plain/text');
      res.send(result);
    });
  });
};
