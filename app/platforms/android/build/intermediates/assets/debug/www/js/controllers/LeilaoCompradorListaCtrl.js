angular.module('starter').controller('LeilaoCompradorListaCtrl', function ($scope, $state, $timeout, $stateParams, $ionicActionSheet) {
    $scope.details = {value: false};
    $scope.showDetails = function () {
        $scope.details = {value: true};
    }
    $scope.hideDetails = function () {
        $scope.details = {value: false};
    }
    $scope.show = function () {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                {text: ' <div class="btn-round bg-positive"><i class="fa fa-info" aria-hidden="true"></i></div><h4>Ver Informações de Leilão</h4>'},
                {text: '<div class="btn-round bg-positive"><i class="fa fa-filter" aria-hidden="true"></i></div> <h4>Filtrar Opcionais</h4>'}
            ],
            cancelText: '<div class="btn-round bg-positive"><span>x</span></div>',
            cancel: function () {
                return;
            },
            buttonClicked: function (index) {                
                if (index == 0) {
                    $scope.showDetails()
                    return true;
                } else if(index == 1) {
                    $state.go('app.filtar-opcionais-lance-l51');
                    return true;
                }
                else{
                    return;
                }

            }
        });
    }
})