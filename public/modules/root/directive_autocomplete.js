angular.module('hrmAPP').directive('formAutofillFix', function() {
    return function($scope, $element, $attrs) {
      // Fixes Chrome bug: https://groups.google.com/forum/#!topic/angular/6NlucSskQjY
      $element.prop('method', 'POST');
  
      // Fix autofill issues where Angular doesn't know about auto-filled inputs
      if($attrs.ngSubmit) {
        setTimeout(function() {
            $element.unbind('submit').submit(function(e) {
            e.preventDefault();
            $element.find('input, textarea, select').trigger('input').trigger('change').trigger('keydown');
            $scope.$apply(attrs.ngSubmit);
          });
        }, 0);
      }
    };
  });