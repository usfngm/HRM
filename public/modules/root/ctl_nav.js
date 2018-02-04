angular.module("hrmAPP").controller('navCtrl', function ($scope, $window, $state, service_auth) {
    $scope.firstName = "Navigation";
    console.log($scope.firstName);
    $scope.logout = () => {
        service_auth.logout();
    }
});