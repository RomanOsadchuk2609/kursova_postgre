var app = angular.module("kursova", [])

app.controller("AppCtrl", function ($http, $scope){
    $scope.request4 = [];
    $http.get('/api/request4').then(function (response){
        $scope.request4=response.data;
        console.log(response);
    });
});