var firepad;
var editor;
var session;

window.onload = function() {
  var self = this; 
  //// Initialize Firebase.
  var firepadRef = getExampleRef();

  if (!self.app) {
    // Init default variables when running in the browser.
    self.app = {
      defaultTheme : function () {
        return "textmate"
      },
      defaultMode  : function () {
        return "javascript"
      }
    }
  };

  // var ref = new Firebase('<YOUR FIREBASE URL>');

  //// Create ACE
      editor = ace.edit("firepad-container");
  editor.setTheme("ace/theme/" + self.app.defaultTheme());
  editor.setShowPrintMargin(false);

      session = editor.getSession();
  session.setUseWrapMode(true);
  session.setUseWorker(false);
  session.setMode("ace/mode/" + self.app.defaultMode());
  
  //// Create Firepad.
      firepad = Firepad.fromACE(firepadRef, editor);
  
  //// Initialize contents.
  firepad.on('ready', function() {

  });

};






