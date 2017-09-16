angular.module("demo", [])
    .controller("demoController", function($scope, mockService){
        let survey = mockService.fakeSurvey(5);
        $scope.surveyOne = survey;
        $scope.surveyTwo = survey;

        console.log(survey);

        function addRandomQuestions(answers, node){
            for(let qKey in node.questions){
                answers[qKey] = Math.random() > .5;
            }
            for(let cKey in node.children){
                console.log(cKey);
                addRandomQuestions(answers, node.children[cKey]);
            }
        }
        let questionSetOne = {};
        let questionSetTwo = {};
        addRandomQuestions(questionSetOne, survey);
        addRandomQuestions(questionSetTwo, survey);
        $scope.qs1 = questionSetOne;
        $scope.qs2 = questionSetTwo;
    });