angular.module('utils.linkGeneration', [])

.factory('linkGeneration', [function() {
  var linkGeneration = {};

  var s4 = function() {
    //this is a random hash generator
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  linkGeneration.guid = function() {
    return adjAdjAnimal(); // global function from adjective-adjective-animal bower package, returns promise
  };

  linkGeneration.fuid = function() {
    return s4() + s4() + s4() + s4();
  };

  linkGeneration.copyToClipboard = function(elem) {
      // create hidden text element, if it doesn't already exist
      var targetId = "_hiddenCopyText_";
      var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
      var origSelectionStart, origSelectionEnd;
      if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
      } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
          var target = document.createElement("textarea");
          target.style.position = "absolute";
          target.style.left = "-9999px";
          target.style.top = "0";
          target.id = targetId;
          document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
      }
      // select the content
      var currentFocus = document.activeElement;
      target.focus();
      target.setSelectionRange(0, target.value.length);

      // copy the selection
      return document.execCommand("copy");
    }

  return linkGeneration;

}]);