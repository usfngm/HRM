angular.module("hrmAPP").controller('rootCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    console.log($scope.firstName);
});