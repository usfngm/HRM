angular.module("emp").config(function ($stateProvider, $qProvider) {
    
    $qProvider.errorOnUnhandledRejections(false);
    
    var loginState = {
        name: 'emp',
        url: '/emp',
        template: '<h3>Emp</h3>',
        controller: 'loginCtrl'
    }

    $stateProvider.state(loginState);

});