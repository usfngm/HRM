angular
    .module("hrmAPP")
    .controller('loginCtrl', function ($scope, $rootScope, $http, auth, $window, $state, service_auth) {
        $scope.login = () => {

            $scope.email = angular
                .element(document.getElementById('email'))
                .val();

            $scope.password = angular
                .element(document.getElementById('password'))
                .val();

            $scope.isWrong = false;
            $rootScope.isLoading = true;

            $http({
                    method: "POST",
                    url: "/employee/login",
                    data: {
                        email: $scope.email,
                        password: $scope.password
                    }
                }).then(function mySuccess(response) {

                $rootScope.isLoading = false;
                auth.isAuth = true;
                $window.sessionStorage.token = response.data.token;
                $state.go('adminHome');

            }, function myError(response) {

                $rootScope.isLoading = false;
                $scope.isWrong = true;

            });
        }

    });