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
        return "python"
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

function getExampleRef() {
  // Get hash from end of URL or generate a random one.

  var ref = new Firebase('https://code-thingy.firebaseio.com');
  var hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push(); // generate unique location.
    window.location = window.location + '#' + ref.name(); // add it as a hash to the URL.
  }

  if (typeof console !== 'undefined')
    console.log('Firebase data: ', ref.toString());

  return ref;
}
