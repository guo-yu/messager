require('angularjs')

var $ = require('dom'),
    router = require('angular-ui-router'),
    store = require('angular-store'),
    template = require('./template');

var messager = function(trigger, apis) {
    if (!window.angular) return false
    if (!trigger) return false
    if (!$(trigger).length) return false
    if (apis) this.apis = apis
    this.deps = [router]
    this.trigger = $(trigger)
    this.init()
}

// ctrlers here
messager.prototype.ctrlers = function(app) {
    if (!app) return false;
    app.controller('contacts', function($scope, Store) {
        console.log(Store);
        $scope.contacts = [{
            name: '小花',
            avatar: 'http://pic.qiushibaike.com/system/avtnew/909/9099065/thumb/20131004173901.jpg'
        },{
            name: '小花',
            avatar: 'http://pic.qiushibaike.com/system/avtnew/909/9099065/thumb/20131004173901.jpg'
        },{
            name: '小花',
            avatar: 'http://pic.qiushibaike.com/system/avtnew/909/9099065/thumb/20131004173901.jpg'
        },{
            name: '小花',
            avatar: 'http://pic.qiushibaike.com/system/avtnew/909/9099065/thumb/20131004173901.jpg'
        },{
            name: '小花',
            avatar: 'http://pic.qiushibaike.com/system/avtnew/909/9099065/thumb/20131004173901.jpg'
        },{
            name: '小花',
            avatar: 'http://pic.qiushibaike.com/system/avtnew/909/9099065/thumb/20131004173901.jpg'
        }]
    })
}

messager.prototype.store = function() {
    if (!this.apis) return false
    this.deps.push('store')
    store.config(this.apis)
}

messager.prototype.init = function() {
    if (this.apis) this.store()
    this.trigger.html(template)
    this.ctrlers(window.angular.module('messager', this.deps))
}

module.exports = messager
