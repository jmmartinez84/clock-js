define(['app'], function() {
    describe('Clock Service', function() {
        // Initialization of the AngularJS application before each test case
        beforeEach(module('worldClock'));
        var ClockService;
        beforeEach(inject(function(clockService){
            ClockService=clockService;
        }));
        it('should rotate 90 deg a fake hand', function() {
            var fakeHand = {
                "value":15,
                "type":6,
                "element":{
                    "style":{
                        "transform":"",
                        "webkitTransform":"",
                        "msTransform":"",
                        "MozTransform":""
                    }
                }
            }
            ClockService.drawElement(fakeHand);
            expect(fakeHand.element.style.transform).toEqual("rotate(90deg)");
        });
        it('should webkit rotate 90 deg a fake hand', function() {
            var fakeHand = {
                "value":15,
                "type":6,
                "element":{
                    "style":{
                        "webkitTransform":"",
                        "msTransform":"",
                        "MozTransform":""
                    }
                }
            }
            ClockService.drawElement(fakeHand);
            expect(fakeHand.element.style.webkitTransform).toEqual("rotate(90deg)");
        });
        it('should ms rotate 90 deg a fake hand', function() {
            var fakeHand = {
                "value":15,
                "type":6,
                "element":{
                    "style":{
                        "msTransform":"",
                        "MozTransform":""
                    }
                }
            }
            ClockService.drawElement(fakeHand);
            expect(fakeHand.element.style.msTransform).toEqual("rotate(90deg)");
        });
        it('should moz rotate 90 deg a fake hand', function() {
            var fakeHand = {
                "value":15,
                "type":6,
                "element":{
                    "style":{
                        "MozTransform":""
                    }
                }
            }
            ClockService.drawElement(fakeHand);
            expect(fakeHand.element.style.MozTransform).toEqual("rotate(90deg)");
        });
        it('should moz rotate 90 deg a fake hand', function() {
            var fakeHand = {
                "value":15,
                "type":6,
                "element":{
                    "style":{
                    }
                }
            }
            expect(function(){ClockService.drawElement(fakeHand)}).toThrowError("clock-js requires CSS transformation");
        });
        it('should call to drawElement three times', function() {
            var mySpy = spyOn(ClockService, 'drawElement');
            var fakeClock = {
                "secondsHand":"",
                "minutesHand":"",
                "hoursHand":""
            }
            ClockService.draw(fakeClock);
            expect(mySpy.calls.count()).toEqual(3);
        });
        it('should call update and draw function', function() {
            var updateSpy = spyOn(ClockService, 'update');
            var drawSpy = spyOn(ClockService,'draw');
            var fakeClock = {};
            ClockService.loop(fakeClock);
            expect(ClockService.update).toHaveBeenCalledWith(fakeClock);
            expect(ClockService.draw).toHaveBeenCalledWith(fakeClock);
        });
        beforeEach(function() {
            var mockDate = function(){
                this.getSeconds = function(){
                    return 30;
                };
                this.getMinutes = function(){
                    return 1;
                };
                this.getHours = function(){
                    return 1;
                };
                this.getMilliseconds = function(){
                    return 200;
                };
                this.setSeconds = function(a){

                };
                this.setMinutes = function(a){

                };
                this.setHours = function(a){

                };
            };
            spyOn(window,'Date').and.callFake(function(){
                return new mockDate();
            })
        });
        it('should should update clock values with no animation', function() {
            var fakeClock = {
                "secondsHand":{
                    "value":0,
                    "offset":0
                },
                "minutesHand":{
                    "value":0,
                    "offset":0
                },
                "hoursHand":{
                    "value":1,
                    "offset":0
                },
                "animation":false
            };
            ClockService.update(fakeClock);
            expect(fakeClock.secondsHand.value).toEqual(30);
            expect(fakeClock.minutesHand.value).toEqual(1.5);
            expect(fakeClock.hoursHand.value).toBeGreaterThan(1);
            expect(fakeClock.hoursHand.value).toBeLessThan(2);
        });
        it('should should update clock values with animation', function() {
            var fakeClock = {
                "secondsHand":{
                    "value":0,
                    "offset":0
                },
                "minutesHand":{
                    "value":0,
                    "offset":0
                },
                "hoursHand":{
                    "value":0,
                    "offset":0
                },
                "animation":true
            };
            ClockService.update(fakeClock);
            expect(fakeClock.secondsHand.value).toBeGreaterThan(30);
            expect(fakeClock.secondsHand.value).toBeLessThan(31);
            expect(fakeClock.minutesHand.value).toBeGreaterThan(1);
            expect(fakeClock.minutesHand.value).toBeLessThan(2);
            expect(fakeClock.hoursHand.value).toBeGreaterThan(1);
            expect(fakeClock.hoursHand.value).toBeLessThan(2);
        });
    });
});