
angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $rootScope, $ionicHistory, $state, $ionicModal, $ionicPopover, $timeout, $ionicScrollDelegate) {
            $rootScope.backHistory = function () {
                $ionicHistory.goBack();
            }
            $rootScope.userlogin = false;
            $rootScope.userlogincontainer = true;
            $rootScope.salelogin = false;

            $ionicModal.fromTemplateUrl('templates/modais/noticifacao-boas-vindas-l1.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal_boasvindas = modal;
            });

            $scope.openModalBoasVindas = function () {
                $scope.modal_boasvindas.show();
            };
            $scope.BoasVindasLeiloes = function () {
                $scope.modal_boasvindas.hide();
                $state.go('app.leiloes-disponiveis-l6-seminovos');
            };
            $scope.BoasVindasPlanos = function () {
                $state.go('app.planos-tradicionais-l4');
                $scope.modal_boasvindas.hide();
            };
            
            $(document).on('focusin', 'input[type=text], input[type=password]', function (event) {
                var offset = 0;
                var elem = '';                
                elem = $(this).closest("ion-content");
                offset = $(this).offset().top > $(this).closest("ion-content").offset().top ? $(this).offset() : $(this).closest("ion-content").offset();
                console.log('ion-content: ', $(this).closest("ion-content").offset().top);
                console.log('ion-content heigth: ', $(this).closest("ion-content").height());
                console.log('this: ', $(this).offset().top);
                var totop = offset.top <  100 ? 100 : offset.top > ( $(elem).height() * 0.6 ) ? $(elem).height() : offset.top - 50;
                console.log(totop);
                var scl = totop;
                scl = scl + "px";
                $(elem).animate({
                    scrollTop: scl
                }, {
                    complete: function () {}
                });
                event.preventDefault();                
            });

        });
