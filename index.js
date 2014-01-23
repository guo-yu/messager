require('angularjs')

var $ = require('dom'),
    element = window.angular.element,
    router = require('angular-ui-router'),
    store = require('angular-store'),
    utils = require('./utils'),
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

var demo = {
    recents: [{
        name: '小花',
        avatar: './avatars/1.png',
        text: '你刚才说的那个网站网址是啥来的'
    }, {
        name: 'Guo Yu',
        avatar: './avatars/3.jpeg',
        text: '你刚才说的那个网站网址是啥来的 ?'
    }, {
        name: '小花',
        avatar: './avatars/2.jpeg',
        text: '你刚才说的那个网站网址是啥来的 ?'
    }, {
        name: '小花',
        avatar: './demo.jpg',
        text: '你刚才说的那个网站网址是啥来的 ?'
    }, {
        name: '小花',
        avatar: './avatars/1.png',
        text: '你好'
    }, {
        name: '小花',
        avatar: './avatars/1.png',
        text: 'hello !!'
    }, {
        name: '小花',
        avatar: './demo.jpg',
        text: '你刚才说的那个网站网址是啥来的 ?'
    }, {
        name: '小花',
        avatar: './avatars/1.png'
    }, {
        name: '小花',
        avatar: './demo.jpg',
        text: '你刚才说的那个网站网址是啥来的 ?'
    }, {
        name: '小花',
        avatar: './avatars/2.jpeg'
    }, {
        name: '小花',
        avatar: './demo.jpg'
    }, {
        name: '小花',
        avatar: './demo.jpg'
    }],
    dialogs: [{
        lastReply: new Date(),
        chats: [{
            name: '小花',
            avatar: './avatars/1.png',
            text: '你刚才说的那个网站网址是啥来的你刚才说的那个网站网址是啥来的你刚才说的那个网站网址是啥来的你刚才说的那个网站网址是啥来的你刚才说的那个网站网址是啥来的你刚才说的那个网站网址是啥来的你刚才说的那个网站网址是啥来的'
        }, {
            me: true,
            name: '我',
            avatar: './avatars/2.jpeg',
            text: '你刚才说的那个网站网址是啥来的'
        }, {
            me: true,
            name: '我',
            avatar: './avatars/2.jpeg',
            text: '你刚才说的那个网站网址是啥来的'
        }, {
            name: '小花',
            avatar: './avatars/1.png',
            text: '哦没事啦~'
        }, {
            me: true,
            name: '我',
            avatar: './avatars/2.jpeg',
            text: '那就好，白白~'
        }]
    }]
}

// ctrlers here
messager.prototype.ctrlers = function(app) {
    if (!app) return false;
    app.controller('recent', function($scope, Store) {
        $scope.target = null
        $scope.status = {}
        $scope.recents = utils.wash(demo.recents)
        $scope.dialogs = demo.dialogs
        // ui 放这里合适吗？
        $scope.openDialog = function(index, event) {
            // console.log(index);
            if ($scope.target === index) {
                $scope.status.dialog = !! !$scope.status.dialog
            } else {
                $scope.status.dialog = true
            }
            $scope.target = index
            $scope.dialog = {}
            $scope.dialog.target = $scope.recents[$scope.target]
            $scope.dialog.dialogs = $scope.dialogs[$scope.target]
            // console.log(event.target);
        }
        // reply 
        $scope.reply = function() {
            if (!$scope.replytext || $scope.replytext == '') return false;
            if (!$scope.dialog.dialogs) {
                $scope.dialog.dialogs = {}
                $scope.dialog.dialogs.lastReply = new Date()
                $scope.dialog.dialogs.chats = []
            }
            $scope.dialog.dialogs.chats.push({
                // 这里是这个用户个人的信息
                me: true,
                name: '我',
                avatar: './avatars/2.jpeg',
                text: $scope.replytext
            })
            $scope.replytext = ''
            return false
        }
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