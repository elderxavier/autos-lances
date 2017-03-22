angular.module('starter').controller('LeilaoVendedorCtrl', function ($scope, $state, $timeout, $stateParams, $ionicActionSheet,$rootScope) {
    
    $rootScope.salelogincontainer = true;
    $rootScope.salelogin = true;
    $rootScope.userlogincontainer = false

    $scope.slideItens = function () {
        $(document).on('click', '.slide button', function (event) {
            $('.meus-leiloes-l9-andamento .slide .itens').toggleClass('active');
            $('.meus-leiloes-l9-andamento .subpage').toggleClass('active');
        });
    };
    $scope.slideItens();

    $scope.showItensL9 = function () {
        console.log("showItensL51");
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                {text: ' <div class="btn-round bg-positive"><i class="icons-itens fa-planos" aria-hidden="true"></i></div><h4>Planos</h4>'},
                {text: '<div class="btn-round bg-positive"><i class="icons-itens fa-pacotes" aria-hidden="true"></i></div> <h4>Pacotes</h4>'},
                {text: '<div class="btn-round bg-positive"><i class="icons-itens fa-leiloes" aria-hidden="true"></i></div> <h4>Saldo de Leilões</h4>'}
            ],
            cancelText: '<div class="btn-round bg-positive"><span>x</span></div>',
            cancel: function () {
                return;
            },
            buttonClicked: function (index) {
                if (index == 0) {
                    $state.go('app.planos-tradicionais-l4');
                    return true;
                } else if (index == 1) {
                    $state.go('app.pacotes-adicionais-l14');
                    return true;
                } else {
                    return;
                }

            }
        });
    };

    $scope.showItensL91 = function () {
        console.log("showItensL51");
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                {text: ' <div class="btn-round bg-positive"><i class="icons-itens fa-dialog" aria-hidden="true"></i></div><h4>Dar Novo Lance</h4>'},
                {text: '<div class="btn-round bg-positive"><i class="icons-itens fa-info" aria-hidden="true"></i></div> <h4>Ver informações do Leilão</h4>'},
                {text: '<div class="btn-round bg-positive"><i class="icons-itens fa-leiloes" aria-hidden="true"></i></div> <h4>Lista dos Meus Leilões   </h4>'}
            ],
            cancelText: '<div class="btn-round bg-positive"><span>x</span></div>',
            cancel: function () {
                return;
            },
            buttonClicked: function (index) {
                if (index == 0) {
                    //$scope.showDetails()
                    return true;
                } else if (index == 1) {
                    //$state.go('app.filtar-opcionais-lance-l51');
                    return true;
                } else {
                    return;
                }

            }
        });
    };

    $scope.goEncerrados = function () {
        $state.go('app.vendedor-meus-leiloes-l9-encerrado');
    };
    $scope.goEmAndamento = function () {
        $state.go('app.vendedor-meus-leiloes-l9-encerrado');
    };





})