var $ = require('dom'),
    template = require('./template');

var messager = function(trigger) {
    if (!angular) return false;
    if (!trigger) return false
    if (!$(trigger).length) return false
    this.trigger = $(trigger)
    this.init()
}

messager.prototype.init = function() {
    console.log(123)
    this.trigger.html(template);
    this.ctrlers(angular.module('messager', ['store']));
}

messager.prototype.ctrlers = function(app) {
    if (!app) return false;
    app.controller('home', function($scope, Store) {
        $scope.name = 'fetch'
    });
}

module.exports = messager