angular.module("demo")
    .directive("branch", function () {
        return {
            templateUrl: "demo/branch/branch.html",
            scope: {
                answers: "=",
                survey: "="
            },
            controller: function ($scope) {
                let memoize = {};
                $scope.manager = {
                    isCategoryAlive: function(node){
                        if (typeof memoize[node.id] !== 'undefined')
                        {
                            console.log("I remember you!", node.id, memoize[node.id]);
                            return memoize[node.id];
                        }
                        for (let key in node.questions) {
                            if(this.isQuestionAlive(node.questions[key])) return true;
                        }
                        let result = false;
                        for (let key in node.children) {
                            if (this.isCategoryAlive(node.children[key])) result = true;
                        }
                        memoize[node.id] = result;
                        return result;
                    },
                    isQuestionAlive: function(node){
                        return node.id in $scope.answers;
                    }
                };
                $scope.removeAns = function(ans){
                    delete $scope.answers[ans];
                    memoize = {};
                };
                $scope.addAns = function(ans_id){
                    let node = {
                        id: ans_id
                    };
                    $scope.answers[node.id] = node;
                    memoize = {};
                };
            },
            controllerAs: "$ctrl"
        }
    });