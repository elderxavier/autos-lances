angular.module('starter').controller('LeilaoCompradorCtrl', function($scope, $timeout, $stateParams,$ionicActionSheet) {
	$scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Ver Informações de Leilão <div class="btn-round bg-positive"><span>+</span></div>' },
       { text: 'Filtrar Opcionais <div class="btn-round bg-positive"><span>+</span></div>' }
     ],
     cancelText: '<div class="btn-round bg-positive"><span>+</span></div>',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });
 }
})