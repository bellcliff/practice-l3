(function() {
    'use strict';
    angular.module('app', ['ui.bootstrap', 'ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise(function() {
                console.log('change to interview');
                return '/interview';
            });
            $stateProvider
                .state('interview', {
                    url: '/interview',
                    templateUrl: '/interview/main.html',
                    controller: 'InterviewCtrl'
                });
        })
        .run(function($state) {
            console.log('run', $state);
            $state.go('interview');
        });
})();
