angular.module('admin').config(function ($stateProvider, $qProvider) {
    
    $qProvider.errorOnUnhandledRejections(false);
    
    var home = {
        name: 'adminHome',
        url: '/home',
        templateUrl: 'modules/admin/view_home.html',
    }

    var addEmp = {
        name: 'adminAddEmp',
        url: '/newemployee',
        templateUrl: 'modules/admin/view_add_employee.html'
    }

    $stateProvider.state(home);
    $stateProvider.state(addEmp);

});