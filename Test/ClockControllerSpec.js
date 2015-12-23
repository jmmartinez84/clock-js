
define(['app'], function(App, $, _) {
    describe('ClockController', function() {
        var scope, controller;

        // Initialization of the AngularJS application before each test case
        beforeEach(module('worldClock'));

        // Injection of dependencies, $http will be mocked with $httpBackend
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope;
            controller = $controller;
          
        }));

        it('should pass test', function() {

            expect(1).toEqual(1);

        });

    });
});
