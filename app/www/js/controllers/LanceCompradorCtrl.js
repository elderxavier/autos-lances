angular.module('starter').controller('LanceCompradorCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
  $scope.$parent.clearFabs();
  $timeout(function() {
    $scope.$parent.hideHeader();
  }, 0);
  ionicMaterialInk.displayEffect();
})

