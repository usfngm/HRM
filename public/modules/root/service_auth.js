angular
    .module("hrmAPP")
    .service('service_auth', function ($rootScope, jwtHelper, $http, auth, $window, $state) {

        /*
            This service function checks if the user has a token
            and whether this token has expired yet or not
        */
        this.isLoggedIn = () => {
            var token = $window.sessionStorage.token;
            if (token)
            {
               return !jwtHelper.isTokenExpired(token);
            }
            return false;
        }

        /*
            This server function logs out the user by
            deleting his/her token and redirecting them
            to the login page
        */
        this.logout = () => {
            $window.sessionStorage.token = '';
            $state.go('login');
        }

    });