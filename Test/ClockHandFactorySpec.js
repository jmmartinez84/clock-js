define(['app'], function() {
    describe('ClockHand Factory', function() {
        // Initialization of the AngularJS application before each test case
        beforeEach(module('worldClock'));

        var clockHand;

        beforeEach(inject(function(clockHandFactory){
            clockHand=clockHandFactory;
        }));
       
        it('should be a function', function() {
            expect(angular.isFunction(clockHand)).toBeTruthy();
        });
        it('should be instantiable', function(){
            var myClockHand = new clockHand();
            expect(myClockHand).toEqual(jasmine.any(Object));
            expect(myClockHand.$$type).toEqual(6);
        });
        it('should have default values', function(){
            var myClockHand = new clockHand();
            expect(myClockHand.$$type).toEqual(6);
            expect(myClockHand.$$value).toEqual(0);
            expect(myClockHand.$$offset).toEqual(0);
            expect(myClockHand.$$element).toBeNull();
        });
        it('should be instantiable with type parameter', function(){
            var myClockHand = new clockHand(30);
            expect(myClockHand.$$type).toEqual(30);
        });
        it('should ignore a type parameter different from 6/30', function(){
            var myClockHand = new clockHand(40);
            expect(myClockHand.$$type).toEqual(6);
        });
        describe('Properties', function() {
            var myClockHand;
            beforeEach(function() {
                myClockHand = new clockHand();
            });
            it('should have a "value" property', function() {
                expect(myClockHand.value).toBeDefined();                
            });
            it('should be possible to get "value" property', function(){
                expect(myClockHand.value).toEqual(myClockHand.$$value);
            });
            it('should set a positive numeric  "value" property', function() {
                myClockHand.value = 50;
                expect(myClockHand.value).toEqual(50);
            });
            it('should not set a negative "value" property', function() {
                myClockHand.value = -10;
                expect(myClockHand.value).not.toEqual(-10);
            });
            it('should not set a string "value" property', function() {
                myClockHand.value = "Hello World";
                expect(myClockHand.value).not.toEqual("Hello World");
            });
            it('should set a value greather than 60 (6 type) will return a first round value', function() {
                myClockHand.value =120;
                expect(myClockHand.value).toEqual(0);
            });
            it('should set a value greather than 12 (30 type) will return a first round value', function() {
                myClockHand = new clockHand(30);
                myClockHand.value =20;
                expect(myClockHand.value).toEqual(8);
            });
            it('should have a "offset" property', function() {
                expect(myClockHand.offset).toBeDefined();                
            });
            it('should be possible to get "offset" property', function(){
                expect(myClockHand.offset).toEqual(myClockHand.$$offset);
            });
            it('should set a positive numeric  "offset" property', function() {
                myClockHand.offset = 50;
                expect(myClockHand.offset).toEqual(50);
            });
            it('should set a negative "offset" property', function() {
                myClockHand.offset = -10;
                expect(myClockHand.offset).toEqual(-10);
            });
            it('should not set a string "offset" property', function() {
                myClockHand.offset = "Hello World";
                expect(myClockHand.offset).not.toEqual("Hello World");
            });
            it('should set a offset greather than 60 (6 type) will return a first round offset', function() {
                myClockHand.offset =120;
                expect(myClockHand.offset).toEqual(0);
            });
            it('should set a offset greather than 12 (30 type) will return a first round offset', function() {
                myClockHand = new clockHand(30);
                myClockHand.offset =20;
                expect(myClockHand.offset).toEqual(8);
            });
            it('should set a offset lower than -60 (6 type) will return a first round offset', function() {
                myClockHand.offset =-121;
                expect(myClockHand.offset).toEqual(-1);
            });
            it('should set a offset lower than -12 (30 type) will return a first round offset', function() {
                myClockHand = new clockHand(30);
                myClockHand.offset =-20;
                expect(myClockHand.offset).toEqual(-8);
            });
            it('should have a "type" property', function() {
                expect(myClockHand.type).toBeDefined();                
            });
            it('should be possible to get "type" property', function(){
                expect(myClockHand.type).toEqual(myClockHand.$$type);
            });
            it('should be possible to set "type" property with 30 value', function(){
                myClockHand.type = 30;
                expect(myClockHand.type).toEqual(30);
            });
            it('should be possible to set "type" property with 6 value', function(){
                myClockHand.type = 6;
                expect(myClockHand.type).toEqual(6);
            });
            it('should be possible to set "type" property with 40 value', function(){
                myClockHand.type = 40;
                expect(myClockHand.type).not.toEqual(40);
            });
            it('should have a "element" property', function() {
                expect(myClockHand.element).toBeDefined();                
            });
            it('should be possible to get "element" property', function(){
                expect(myClockHand.element).toEqual(myClockHand.$$element);
            });
            it('should be possible to set a HTMLDiv element as a "element" property', function(){
                var newDiv = document.createElement('div');
                myClockHand.element = newDiv;
                expect(myClockHand.element).toEqual(newDiv);
            });
            it('should not be possible to set a HTMLSpan element as a "element" property', function(){
                var newSpan = document.createElement('span');
                myClockHand.element = newSpan;
                expect(myClockHand.element).not.toEqual(newSpan);
            });
        });
    });
});