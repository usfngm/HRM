angular.module("hrmAPP").controller('rootCtrl', function ($scope, $rootScope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $rootScope.hideNavBar = false;
    $scope.hideNavBar = false;
    console.log($scope.firstName);
});