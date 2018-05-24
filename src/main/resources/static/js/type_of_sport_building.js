var app = angular.module("kursova", [])

app.controller("AppCtrl", function ($http, $scope) {

    $scope.type_of_sport_building = [];
    $http.get('/api/type_of_sport_building').then(function (response){
        $scope.type_of_sport_building=response.data;
        console.log(response);
    });
    this.del_type_of_sport_building= function del(id) {
        $http.get('/api/type_of_sport_building/del?id='+id).then(function (response){
            //  $http.get('http://localhost:8080/api/students').then(function (response){
            // $scope.students=response.data;
            window.alert('Вид спортивної споруди був успішно видалений!');
            window.location.reload();
        });
    };
    this.insert_type_of_sport_building = function add() {
        var name = document.getElementById("typeName").value;
        var errorMessage='Помилка: неправильні вхідні дані!\n';
        var isValid=true;
        var regex = /^[А-Яа-яІі\s]+$/;
        if(!regex.test(name)){
            errorMessage=errorMessage+'-невірний формат назви типу покриття;\n';
            isValid=false;
        }
        if(isValid) {
            $http.get('/api/type_of_sport_building/insert?name=' + name).then(function (response) {
                //  $http.get('http://localhost:8080/api/students').then(function (response){
                // $scope.students=response.data;
                window.alert('Вид спортивної споруди був успішно доданий!');
                window.location.reload();
            });
        }
        else window.alert(errorMessage);

    };
    var thisId;
    this.start_update_type_of_sport_building = function upd(id,name) {
        thisId=id;
        document.getElementById("typeNameUPD").value=name;
    };
    this.update_type_of_sport_building = function upd() {
        var name = document.getElementById("typeNameUPD").value;

        var errorMessage='Помилка: неправильні вхідні дані!\n';
        var isValid=true;
        var regex = /^[А-Яа-яІі\s]+$/;
        if(!regex.test(name)){
            errorMessage=errorMessage+'-невірний формат назви типу покриття;\n';
            isValid=false;
        }
        if(isValid) {
            $http.get('/api/type_of_sport_building/update?id=' + thisId + '&name=' + name).then(function (response) {

                window.location.reload();
            });
        }
        else window.alert(errorMessage);

    };
});