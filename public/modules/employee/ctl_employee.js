angular.module("emp").controller('loginCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    console.log($scope.firstName);
});