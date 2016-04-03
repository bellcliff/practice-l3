(function() {

    angular.module('app')
        .controller('InterviewCtrl', function($scope, $http, $uibModal) {
            console.log('interview controller');
            $http.get('/interview').then(function(data) {
                $scope.interviews = data.data;
            });
            $scope.showQuestions = function(interview) {
                $uibModal.open({
                    template: `
<div ng-repeat="question in questions">
    <pre>{{question}}</pre>
</div>
<uib-pagination class="pagination-sm"
    total-items="count"
    ng-model="page"
    items-per-page="size"
    ng-change="change()">
</uib-pagination>`,
                    controller: function($scope) {
                        $scope.page = 1;
                        $scope.size = 5;
                        $scope.count = interview.questions.length;
                        $scope.change = function() {
                            $scope.questions = interview.questions.slice(
                                ($scope.page - 1) * $scope.size, $scope.page * $scope.size);
                        }
                        $scope.change();
                    }
                });
            };
        });

})();
