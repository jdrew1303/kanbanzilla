'use strict';

angular.module('kanbanzillaApp')
  .controller('MainCtrl', ['$scope', 'Bugzilla',
  function ($scope, Bugzilla) {
    $scope.products = {};

    Bugzilla.getConfig()
       .success(function (data) {
          $scope.products = data.product;
        });

    // Bugzilla.getConfig().success(function (data) {
    //   for(var product in data.product) {
    //     $scope.products.push(product);
    //   }
    // });

    // Bugzilla.getProducts()
    //   .success(function(data) {
    //     $scope.products = data;
    //   });
  }]);
