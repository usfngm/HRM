/*
    The App's Root Router
*/
angular
    .module("hrmAPP")
    .config(function ($stateProvider, $qProvider, $urlRouterProvider, $locationProvider) {

        // $qProvider.errorOnUnhandledRejections(false); Default Page is the login page
        // Default Page
        $urlRouterProvider.otherwise('/login');

        /*
            The login router view
        */
        var loginState = {
            name: 'login',
            url: '/login',
            templateUrl: 'modules/root/view_login.html'
        }

        $stateProvider.state(loginState);
        
    })
    .run(function ($rootScope, $transitions, $state, service_auth) {

        /*
            Listen for changes on navigation before
            they actually happen
        */
        $transitions
            .onBefore({}, function (transition) {
                /*
                    A Helper snippet for checking whether the user is logged in
                    or not before navigating to some pages
                */
                if (transition.to().name === 'login') { // If navigating to login
                    if (service_auth.isLoggedIn()) { // If logged in
                        $state.go('adminHome'); // Redirect to home
                        return false; // Stop current navigation
                    }
                } else { // If navigating to any other page
                    if (!service_auth.isLoggedIn()) { // If not logged in
                        $state.go('login'); // Redirect to login
                        return false; // Stop current navigation
                    }
                }
                return true;
            });

        /*
            Listening for changes on navigation when
            it is starts
        */
        $transitions.onStart({}, function (transition) {
            handleNavBarVisibility(transition.from().name, transition.to().name, $rootScope);
            return true;
        });

        /*
            Listening for URL changed successfully
        */
        $transitions.onSuccess({}, function (transition) {
            return true;
        });
    });

/*
    A Helper method for hiding the navigation bar when the
    Login page is dispayed
*/
var handleNavBarVisibility = (from, to, $rootScope) => {
    if (to === 'login') {
        $rootScope.hideNavBar = true;
    } else {
        $rootScope.hideNavBar = false;
    }
}
