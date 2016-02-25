'use strict'

eventsApp.directive('saveOnEnter', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attributes, controller) {
      element.on('keydown', function(event) {
        if (event.keyCode === 13)
        {
           var button = element.find('#save');
           //alert('element: ' + element[0].name + ', keycode: ' + event.keyCode + ', button: ' + button.name);
           button.click();
        }
      });
    }
  }
});
