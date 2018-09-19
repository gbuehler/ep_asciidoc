Last login: Tue Sep 18 14:57:23 on ttys000
greg:~ greg$ vi .bashrc
greg:~ greg$ source ~/.bashrc 
greg:~ greg$ sshnote
greg@note.opengeospatial.org's password: 
Welcome to Ubuntu 16.04.5 LTS (GNU/Linux 4.4.0-135-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Wed Sep 19 12:33:03 EDT 2018

  System load:    0.0               Processes:           119
  Usage of /home: 12.4% of 4.46GB   Users logged in:     1
  Memory usage:   39%               IP address for eth0: 66.244.86.84
  Swap usage:     2%

  Graph this data and manage this system at:
    https://landscape.canonical.com/

2 packages can be updated.
2 updates are security updates.

New release '18.04.1 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

Last login: Wed Sep 19 09:03:35 2018 from 66.244.86.125
greg@note:~$ sudo su - etherpad
[sudo] password for greg: 
Sorry, try again.
[sudo] password for greg: 
etherpad@note:~$ cd etherpad-lite/
etherpad@note:~/etherpad-lite$ ls
APIKEY.txt  CHANGELOG.md     credentials.json  favicon.ico  Makefile      package-lock.json  SESSIONKEY.txt  settings.json.bak       src        tests
bin         CONTRIBUTING.md  doc               LICENSE      node_modules  README.md          settings.json   settings.json.template  start.bat  var
etherpad@note:~/etherpad-lite$ cd node_modules/
etherpad@note:~/etherpad-lite/node_modules$ ls
after               better-assert      component-inherit  ep_asciidoc       formidable   ms                socket.io-client  xmlhttprequest-ssl
arraybuffer.slice   blob               debug              ep_comments_page  has-binary2  object-component  socket.io-parser  yeast
async-limiter       callsite           engine.io-client   ep_etherpad-lite  has-cors     parseqs           to-array
backo2              component-bind     engine.io-parser   ep_headings       indexof      parseuri          ultron
base64-arraybuffer  component-emitter  ep_adminpads       ep_markdown       isarray      safe-buffer       ws
etherpad@note:~/etherpad-lite/node_modules$ ep_asciidoc/
-su: ep_asciidoc/: Is a directory
etherpad@note:~/etherpad-lite/node_modules$ ls
after               better-assert      component-inherit  ep_asciidoc       formidable   ms                socket.io-client  xmlhttprequest-ssl
arraybuffer.slice   blob               debug              ep_comments_page  has-binary2  object-component  socket.io-parser  yeast
async-limiter       callsite           engine.io-client   ep_etherpad-lite  has-cors     parseqs           to-array
backo2              component-bind     engine.io-parser   ep_headings       indexof      parseuri          ultron
base64-arraybuffer  component-emitter  ep_adminpads       ep_markdown       isarray      safe-buffer       ws
etherpad@note:~/etherpad-lite/node_modules$ cd ep_asciidoc/
etherpad@note:~/etherpad-lite/node_modules/ep_asciidoc$ ls
CONTRIBUTING.md  ep.json  exportAsciidoc.js  export.js  express.js  index.js  LICENSE  package.json  README.md  static  templates
etherpad@note:~/etherpad-lite/node_modules/ep_asciidoc$ vi package.json 














































etherpad@note:~/etherpad-lite/node_modules/ep_asciidoc$ vi index.js 
etherpad@note:~/etherpad-lite/node_modules/ep_asciidoc$ vi express.js 
etherpad@note:~/etherpad-lite/node_modules/ep_asciidoc$ vi export.js

var eejs = require('ep_etherpad-lite/node/eejs/');
var Changeset = require("ep_etherpad-lite/static/js/Changeset");

function getInlineStyle(header) {
  switch (header) {
  case "h1":
    return "font-size: 2.0em;line-height: 120%;";
    break;
  case "h2":
    return "font-size: 1.5em;line-height: 120%;";
    break;
  case "h3":
    return "font-size: 1.17em;line-height: 120%;";
    break;
  case "h4":
    return "line-height: 120%;";
    break;
  case "h5":
    return "font-size: 0.83em;line-height: 120%;";
    break;
  case "h6":
    return "font-size: 0.75em;line-height: 120%;";
    break;
  case "code":
    return "font-family: monospace";
  }

  return "";
}
// line, apool,attribLine,text
exports.getLineHTMLForExport = function (hook, context) {
//  var header = _analyzeLine(context.attribLine, context.apool);
//  if (header) {
//    var inlineStyle = getInlineStyle(header);
//    return "<" + header + " style=\"" + inlineStyle + "\">" + context.text.substring(1) + "</" + header + ">";
//  }
}

function _analyzeLine(alineAttrs, apool) {
  var header = null;
  if (alineAttrs) {
    var opIter = Changeset.opIterator(alineAttrs);
    if (opIter.hasNext()) {
      var op = opIter.next();
      header = Changeset.opAttributeValue(op, 'heading', apool);
    }
  }
  return header;
}
