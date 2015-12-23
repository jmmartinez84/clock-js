({
    baseUrl: "",
    name: "main",
    out: "main-built.js",
     paths: {
        jquery: "empty:",
        angular:"empty:",
        "mainCtrl":"WorldClock/controllers/MainController",
        "clockCtrl":"WorldClock/controllers/ClockController",
        "clockDir": "WorldClock/directives/ClockDirective",
        "secHandDir":"WorldClock/directives/SecondsHandDirective",
        "minHandDir":"WorldClock/directives/MinutesHandDirective",
        "hoursHandDir":"WorldClock/directives/HoursHandDirective",
        "clockServ":"WorldClock/services/ClockService",
        "app": "WorldClock/app"

    }
})