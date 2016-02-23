'use strict'

eventsApp.directive('focus', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attributes, controller) {
      element.focus();
    }
  }
});
