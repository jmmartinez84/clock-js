define(['app'], function() {
    describe('LinkHandDirective', function() {
        var compile, scope, directiveElem;

        beforeEach(function(){
          module('worldClock');
          
          inject(function($compile, $rootScope){
            compile = $compile;
            scope = $rootScope.$new();
          });
          
          
        });

        function getCompiledElement(attr){
          var element = angular.element('<div link-hand="'+attr+'"></div>');
          var compiledElement = compile(element)(scope);
          scope.$digest();
          return compiledElement;
        }
        it('should have an element into scope hand', function () {
            var attr="secondsHand";
            scope.clock = {"secondsHand":{"element":null}};
            directiveElem = getCompiledElement(attr);
            expect(scope.clock[attr].element).not.toBeNull();
        });
    });
});