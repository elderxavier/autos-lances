angular.module('starter').controller('CadastroVendedorCtrl', function ($scope, $state, $ionicModal, $ionicActionSheet, $rootScope) {
    //Global scoop   
    $scope.contentHtml = "";
    $scope.topRadios = function () {
        $(document).on('click', '.check', function (event) {
            var radiobt = $(this).closest('.col').find('input[type=radio]');
            $(this).closest('.radio-ps').find('input[type=radio]').attr('checked', false);
            $(this).closest('.radio-ps').find('.col').removeClass('active');
            $(this).closest('.radio-ps').find('.check').removeClass('active');
            $(this).closest('.col').addClass('active');
            $(this).closest('.col').find('.check').addClass('active');
            $(radiobt).attr('checked', true);
            $('.form-vendedor').removeClass('fadeInUp').addClass('hidden');
            if ($(radiobt).val() == 1) {
                $scope.isParticular();
            } else {
                $scope.isLojista();
            }
            event.preventDefault();
        });
    };
    $scope.isParticular = function () {
        $('.alter-title').html("Vendedor Particular");
        $('.form-vendedor.particular').removeClass('hidden').addClass('fadeInUp');
    };

    $scope.isLojista = function () {
        $('.alter-title').html("Vendedor Loja ou consessionária Lojista");
        $('.form-vendedor.lojista').removeClass('hidden').addClass('fadeInUp');

    };
    $scope.goTermoUso = function () {
        $state.go('app.termouso');
    };
    $scope.goPolitica = function () {
        $state.go('app.politicaprivacidade');
    };

    $scope.goCadastrar = function () {
        $state.go('app.vendedor-cadastrar');
    };

    $scope.goLogin = function () {
        $state.go('app.vendedor-login');
    };

    $scope.topRadios();

    /*conta pj*/
    $scope.showItensL11 = function () {
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                {text: ' <div class="btn-round bg-positive"><i class="icons-itens fa-planos" aria-hidden="true" ></i></div><h4>Planos</h4>'},
                {text: '<div class="btn-round bg-positive"><i class="icons-itens fa-pacotes" aria-hidden="true"></i></div> <h4>Pacotes</h4>'},
                {text: '<div class="btn-round bg-positive"><i class="icons-itens fa-leiloes" aria-hidden="true"></i></div> <h4>Saldo de Lances</h4>'}
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
    $scope.saleLogin = function () {        
        $rootScope.salelogincontainer = true;
        $rootScope.userlogincontainer = false
        $rootScope.salelogin = true;
        $state.go('app.home-l2');
    };

    $rootScope.saleLogout = function () {        
        $rootScope.salelogincontainer = false;
        $rootScope.userlogincontainer = true;
        $rootScope.salelogin = false;
        $rootScope.userlogin = false;
    };


})

