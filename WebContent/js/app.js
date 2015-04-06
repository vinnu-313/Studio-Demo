'use strict';

angular.module('studio', [ 'ngRoute', 'studio.controller', 'studio.services', 'ui.scroll', 'ui.scroll.jqlite' ]).controller('AppController',
		[ '$scope', function($scope) {
			$scope.appName = "GB Studio Demo";
		} ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/fviewer', {
		templateUrl : 'partials/fviewer.html',
		controller : 'ViewerController'
	}).when('/editor', {
		templateUrl : 'partials/editor.html',
		controller : 'EditorController'
	}).when('/hierarchy', {
		templateUrl : 'partials/hierarchy.html',
		controller : 'HierarchyController'
	}).otherwise({
		redirectTo : '/fviewer'
	});
} ]);