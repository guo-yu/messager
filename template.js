module.exports = '<div class="messager" ng-app="messager">\n    <h3 class="title">Messager</h3>\n    <div ng-controller="contacts">\n        <div class="contact clearfix" ng-repeat="contact in contacts">\n            <img ng-src="{{contact.avatar}}" alt="{{contact.name}}" class="avatar-mini pull-left">\n            <div class="contact-info">\n                {{contact.name}}\n            </div>\n        </div>\n    </div>\n</div>';