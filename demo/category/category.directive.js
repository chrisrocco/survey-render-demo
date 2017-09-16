angular.module("demo")
.directive("category", function(){
    return {
        require: "^branch",
        scope: {
            node: "=",
            manager: "="
        },
        templateUrl: "demo/category/category.html",
        controller: function ($scope) {
            console.log($scope.manager)
        }
    }
});