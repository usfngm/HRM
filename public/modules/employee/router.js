angular.module("emp").config(function ($stateProvider, $qProvider) {
    
    $qProvider.errorOnUnhandledRejections(false);
    
    var loginState = {
        name: 'login',
        url: '/login',
        template: '<h3>Login</h3>',
        controller: 'loginCtrl'
    }

    $stateProvider.state(loginState);

});