myApp.factory("Data", function ($http) {

        var serviceBase = 'api/get.php';

        var obj = {};
        
        obj.get = function ($scope) {
            
            $http.get(serviceBase).success(function(response){
               $scope.names = response;
                console.log($scope);
            });


        };
        
        return obj;
        
});
