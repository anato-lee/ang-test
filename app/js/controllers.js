'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
	$http.get('phones/phones.json')
	.success(function(data){
		$scope.phones = data;
	})
	$scope.orderProp = 'age';
});

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
	$scope.phoneId = $routeParams.phoneId;
}]);