var app = angular.module("kursova", [])

app.controller("AppCtrl", function ($http, $scope) {

    $scope.pool = [];
    $http.get('/api/pool').then(function (response){
        $scope.pool=response.data;
        console.log(response);
    });
    this.del_pool= function del(id) {
        $http.get('/api/pool/del?id='+id).then(function (response){
            window.location.reload();
            window.alert('Басейн  було успішно видалено!');
        });
    };

    this.start_insert_pool = function add() {

        $http.get('/api/sport_building').then(function (response){
            var sportBuilding = response.data;
            var selector = document.getElementById("SportBuilding");
            $(selector).empty();
            for (var i = 0; i < sportBuilding.length; i++) {
                var option = document.createElement("option");
                option.text = sportBuilding[i].name;
                option.value = sportBuilding[i].id;
                selector.add(option);
            }
        });



    };

    this.insert_pool = function add() {
        var indexOfSportBuilding = document.getElementById("SportBuilding").selectedIndex;
        var sportBuildingId = document.getElementById("SportBuilding").options[indexOfSportBuilding].value;

        var width = document.getElementById("Width").value;
        var depth = document.getElementById("Depth").value;
        var length = document.getElementById("Length").value;
        var maxHeight = document.getElementById("MaxHeight").value;

        var isValid=true;

        var errorMessage='Помилка: неправильні вхідні дані!\n';
        var regex=/^[1-9][0-9]*$/;
        if(!regex.test(width)){
            errorMessage=errorMessage+'\n-невірний формат ширини;';
            isValid=false;
        }
        if(!regex.test(length)){
            errorMessage=errorMessage+'\n-невірний формат довжини;';
            isValid=false;
        }
        if(!regex.test(depth)){
            errorMessage=errorMessage+'\n-невірний формат висоти;';
            isValid=false;
        }
        if(!regex.test(maxHeight)){
            errorMessage=errorMessage+'\n-невірний формат максимальної висоти для стрибків у воду;';
            isValid=false;
        }
        if(isValid){
            $http.get('/api/pool/insert?sportBuildingId='+sportBuildingId+'&depth='
                +depth+'&width='+width+'&length='+length+'&maxHeight='+maxHeight).then(function (response){
                window.location.reload();
                window.alert('Басейн було успішно додано!');
            });
        }
        else window.alert(errorMessage);

    };
    var thisId;

    this.start_update_pool = function upd(id,sportBuildingName,depth,width,length,maxHeight) {
        thisId=id;
        var thisIndex;
        $http.get('/api/sport_building').then(function (response){
            var sportBuilding = response.data;
            var selector = document.getElementById("SportBuildingUPD");
            $(selector).empty();
            for (var i = 0; i < sportBuilding.length; i++) {
                var option = document.createElement("option");
                option.text = sportBuilding[i].name;
                option.value = sportBuilding[i].id;
                if(sportBuilding[i].name==sportBuildingName){
                    thisIndex=i;
                }
                selector.add(option);
            }
            document.getElementById("SportBuildingUPD").selectedIndex=thisIndex;
        });
        document.getElementById("DepthUPD").value=depth;
        document.getElementById("WidthUPD").value=width;
        document.getElementById("LengthUPD").value=length;
        document.getElementById("MaxHeightUPD").value=maxHeight;

    };

    this.update_pool = function upd() {
        var indexOfSportBuilding = document.getElementById("SportBuildingUPD").selectedIndex;
        var sportBuildingId = document.getElementById("SportBuildingUPD").options[indexOfSportBuilding].value;
        var depth = document.getElementById("DepthUPD").value;
        var width = document.getElementById("WidthUPD").value;
        var length = document.getElementById("LengthUPD").value;
        var maxHeight = document.getElementById("MaxHeightUPD").value;
        var isValid=true;

        var errorMessage='Помилка: неправильні вхідні дані!\n';
        var regex=/^[1-9][0-9]*$/;
        if(!regex.test(width)){
            errorMessage=errorMessage+'\n-невірний формат ширини;';
            isValid=false;
        }
        if(!regex.test(length)){
            errorMessage=errorMessage+'\n-невірний формат довжини;';
            isValid=false;
        }
        if(!regex.test(depth)){
            errorMessage=errorMessage+'\n-невірний формат висоти;';
            isValid=false;
        }
        if(!regex.test(maxHeight)){
            errorMessage=errorMessage+'\n-невірний формат максимальної висоти для стрибків у воду;';
            isValid=false;
        }
        if(isValid) {
            $http.get('/api/pool/update?id=' + thisId + '&sportBuildingId=' + sportBuildingId + '&depth='
                + depth + '&width=' + width + '&length=' + length + '&maxHeight=' + maxHeight).then(function (response) {
                window.location.reload();
            });
        }
        else window.alert(errorMessage);
    };
});