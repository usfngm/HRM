angular
    .module("admin")
    .controller('adminCtrl', function ($scope, service_jquery) {
        $scope.firstName = "Admin Bruh";
        $scope.lastName = "Doe";
        console.log($scope.firstName);
        $scope.onLoad = () => {
            service_jquery.adminHome();
        }
    });