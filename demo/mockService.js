angular.module("demo")
    .factory("mockService", function(){

        const length = 3;

        function fakeQuestion() {
            return {
                "id": rand(0, 9999999) + ""
            }
        }

        function fakeCategory(maxDepth){
            var cat = {
                "id": "Category : "+rand(0, 9999999),
                "questions": {},
                "children": {}
            };
            if(maxDepth == 0) return cat;
            for(var i = 0; i < rand(0, length); i++){
                var fakeQ = fakeQuestion();
                cat.questions[fakeQ.id] = fakeQ;
            }
            for(var j = 0; j < rand(0, length); j++){
                var fakeC = fakeCategory(maxDepth-1);
                cat.children[fakeC.id] = fakeC;
            }
            return cat;
        }

        function rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        return { fakeSurvey: fakeCategory }
    });