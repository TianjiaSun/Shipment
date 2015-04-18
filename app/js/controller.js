'use strict';

var store = angular.module('store',['ngRoute'])
  .controller('StoreListCtrl', function($scope, $http, $route, $routeParams, $sce, $timeout) {

  $scope.showOrders_flag = true;
  $scope.showShipped_flag = false;
  $scope.showCancelled_flag = false;

  $scope.data;
  var req = {
    method: 'POST',
    url: 'http://asa.gausian.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: $.param({user_app_id:'app_id', service_app_name:'Product', request_string: "get"})
  };

  // get product info from ASA
  $http(req).success(function(data) {
    $scope.orders = angular.fromJson(data.response);
  });

  // to avoid flashing during page loading
  $scope.init = function () {
    $("#list_container").fadeIn(1000);
  };

  // show three cagetory
  $scope.showOrders = function () {
    $scope.showOrders_flag = true;
    $scope.showShipped_flag = false;
    $scope.showCancelled_flag = false;
  };
  $scope.showShipped = function () {
    $scope.showOrders_flag = false;
    $scope.showShipped_flag = true;
    $scope.showCancelled_flag = false;
  };
  $scope.showCancelled = function () {
    $scope.showOrders_flag = false;
    $scope.showShipped_flag = false;
    $scope.showCancelled_flag = true;
  };


})