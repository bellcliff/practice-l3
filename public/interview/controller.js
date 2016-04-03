(function() {
    'use strict';
    angular.module('app')
        .controller('InterviewCtrl', function($scope, $http, $uibModal) {
            console.log('interview controller');
            $http.get('/interview').then(function(data) {
                $scope.interviews = data.data;
            });
            $scope.showQuestions = function(interview) {
                $uibModal.open({
                    size: 'lg',
                    templateUrl: '/interview/questions.html',
                    controller: function($scope) {
                        $scope.active = 0;
                        $scope.questions = interview.questions;
                        $scope.slides = [];
                        $scope.questions.forEach((question, idx)=>$scope.slides.push({id: idx, txt: question}));
                    }
                });
            };
        });
})();

