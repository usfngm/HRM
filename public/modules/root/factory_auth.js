angular
    .module("hrmAPP")
    .factory('auth', function () {
        this.isAuth = false;
        return {
            isAuth: this.isAuth
        };
    });