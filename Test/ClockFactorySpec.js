define(['app'], function() {
    describe('Clock Factory', function() {
        // Initialization of the AngularJS application before each test case
        beforeEach(module('worldClock'));

        var clock;
        beforeEach(function() {
            module(function($provide){
              $provide.factory('clockHandFactory', [function(){
                var fakeClockHand = function(){
                    this.value = 0;
                    this.offset = 0;
                    this.type = 0;
                    this.element = null;
                };
                return fakeClockHand;
              }]);
            });
        });
        beforeEach(inject(function(clockFactory){
            clock=clockFactory;
        }));
       
        it('should be a function', function() {
            expect(angular.isFunction(clock)).toBeTruthy();
        });
        it('should be instantiable', function(){
            var myClock = new clock();
            expect(myClock).toEqual(jasmine.any(Object));
        });
        it('should have default values', function(){
            var myClock = new clock();
            expect(myClock.$$secondsHand).toEqual(jasmine.any(Object));
            expect(myClock.$$minutesHand).toEqual(jasmine.any(Object));
            expect(myClock.$$hoursHand).toEqual(jasmine.any(Object));
            expect(myClock.$$animation).toEqual(true);
        });
        describe('Properties', function() {
            var myClock;
            beforeEach(function() {
                myClock = new clock();
            });
            it('should have a property called "secondsHand"',function(){
                expect(myClock.secondsHand).toBeDefined();
            });
            it('should not to be able to set "secondsHand" property', function() {
                expect(function(){ 
                    myClock.secondsHand = "MyNewHand";
                }).toThrowError("Unable to set 'secondsHand' property.");
                expect(myClock.secondsHand).not.toEqual("MyNewHand");
            });
            it('should have a property called "minutesHand"',function(){
                expect(myClock.minutesHand).toBeDefined();
                expect(myClock.minutesHand).toEqual(jasmine.any(Object));
            });
            it('should not to be able to set "minutesHand" property', function() {
                expect(function(){ 
                    myClock.minutesHand = "MyNewHand";
                }).toThrowError("Unable to set 'minutesHand' property.");
                expect(myClock.minutesHand).not.toEqual("MyNewHand");
            });
            it('should have a property called "hoursHand"',function(){
                expect(myClock.hoursHand).toBeDefined();
                expect(myClock.hoursHand).toEqual(jasmine.any(Object));
            });
            it('should not to be able to set "hoursHand" property', function() {
                expect(function(){ 
                    myClock.hoursHand = "MyNewHand";
                }).toThrowError("Unable to set 'hoursHand' property.");
                expect(myClock.hoursHand).not.toEqual("MyNewHand");
            });
            it('should have a property called "animation"',function(){
                expect(myClock.animation).toBeDefined();
            });
            it('should be able to set a new animation bolean value', function() {
                myClock.animation = false;
                expect(myClock.animation).toBeFalsy();
            });
            it('should not be able to set another kind of animation value', function() {
                myClock.animation = "NoBoolean";
                expect(myClock.animation).not.toEqual("NoBoolean");
            });
        });
        
    });
});