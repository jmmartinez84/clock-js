define(function () {
    var Clock = function () {
        // Return the directive configuration.
        return ({
            template: '<div data-ng-controller="clock" class="clock"><div class="segundero" link-seconds></div><div class="minutero" link-minutes></div><div class="horario" link-hours></div><div class="center1"><div class="center2"></div></div></div>'
        });
    };
    return [Clock]
});j