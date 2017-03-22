angular.module('starter').controller('EscolherCarroCtrl', function ($scope, $rootScope, $http, $ionicModal, $state, $ionicScrollDelegate) {
    //global functions 

    $scope.activeItens = function () {
        $(document).on('change', '.custom_modal input[type=checkbox], .custom_modal input[type=radio]', function (evt) {
            $(this).closest('li').toggleClass('active');
            if ($(this).closest('.custom_modal').find('li.active').length > 0) {
                $($(this).closest('.custom_modal').find('.button.confirm').removeClass('hidden'));
            } else {
                $($(this).closest('.custom_modal').find('.button.confirm').addClass('hidden'));
            }
        });
        $(document).on('click', '.check', function (evt) {
            var radiobt = $(this).closest('li').find('input[type=radio]');
            $(this).closest('ul').find('input[type=radio]').attr('checked', false);
            $(this).closest('ul').find('li').removeClass('active');
            $(this).closest('ul').find('.check').removeClass('active');
            $(this).closest('li').addClass('active');
            $(this).closest('li').find('.check').addClass('active');
            $(radiobt).attr('checked', true);

            if ($(this).closest('.custom_modal').find('li.active').length > 0) {
                $($(this).closest('.custom_modal').find('.button.confirm').removeClass('hidden'));
            } else {
                $($(this).closest('.custom_modal').find('.button.confirm').addClass('hidden'));
            }
        });
    };
    $scope.closeChips = function () {
        $(document).on('click', '.chip .close', function (event) {
            $(this).closest('.chip').addClass('hidden');
            $(this).closest('.chip').find('span').html('');
            var target = $(this).closest('.chip').attr('target');
            target = "." + target;
            $(target).find('input').attr('checked', false);
            $(target).find('.active').each(function () {
                $(this).removeClass('active');
            })
            event.preventDefault();
            return false;
        });
    };

    $scope.spinnerItens = function () {
        $scope.myswipe = true;
        $scope.years = [];
        var countyear = 2000;

        for (var i = 0; i < 20; i++) {
            $scope.years.push(countyear);
            countyear++;
        }
        $(document).on('click', '.spinner-top', function (event) {
            var te = $(this).closest('.spinner');
            var tavtive = 0;
            $(te).find('.spinner-content div.year').each(function (index, value) {
                if ($(this).hasClass('active')) {
                    tavtive = index;
                }
            });            
            var mov = 0;
            if (typeof $(te).find('.spinner-content div.year.active').css('top') == 'undefined' || tavtive == ($(te).find('.spinner-content div.year').length - 1)) {
                mov = 0;
            } else {
                mov = parseFloat($(te).find('.spinner-content div.year.active').css('top').split("px")[0]) - 13.5;
                $(te).find('.spinner-content div').animate({
                    top: mov + "px"
                }, {
                    duration: 500
                });
                setTimeout(function () {
                    $(te).find('.spinner-content div.year').removeClass('active');
                    $(te).find('.spinner-content div.year:eq(' + (tavtive + 1) + ')').addClass('active');
                }, 601);
            }
            event.preventDefault();
        });

        $(document).on('click', '.spinner-bottom', function (event) {
            var te = $(this).closest('.spinner');
            var tavtive = 0;
            $(te).find('.spinner-content div.year').each(function (index, value) {
                if ($(this).hasClass('active')) {
                    tavtive = index;
                }
            });            
            var mov = 0;            
            if (typeof $(te).find('.spinner-content div.year.active').css('top') == 'undefined' || tavtive == 0) {
                mov = 0;
            } else {
                mov = parseFloat($(te).find('.spinner-content div.year.active').css('top').split("px")[0]) + 13.5;
                $(te).find('.spinner-content div').animate({
                    top: mov + "px"
                }, {
                    duration: 500
                });
                setTimeout(function () {
                    $(te).find('.spinner-content div.year').removeClass('active');
                    $(te).find('.spinner-content div.year:eq(' + (tavtive - 1) + ')').addClass('active');
                }, 601);
            }
            event.preventDefault();
        });



    };
    $(document).on('click touch', '.spinner .spinner-content div.year', function (event) {          
        $(this).closest('.spinner-content').find('div.year').removeClass('active');
        $(this).addClass('active');        
    });



    $scope.clearItens = function (event) {
        element = $(event.path[0]);
        $(element).closest('.custom_modal ').find('.confirm').addClass('hidden')
        clears = $(element).closest('.custom_modal ').find('.content-itens input').attr('checked', false);
        clears = $(element).closest('.custom_modal ').find('.content-itens .active').removeClass('active');
    };
    //init 
    $scope.spinnerItens();
    $scope.activeItens();
    $scope.closeChips();

    //modal marca
    $rootScope.campos = {};
    $ionicModal.fromTemplateUrl('templates/modais/escolher_marca.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_marca = modal;
    });
    $scope.openModalMarca = function () {
        $scope.modal_marca.show();
        $('.modal-marca .button.confirm').addClass('hidden');
        $http({
            method: 'GET',
            url: 'http://fipeapi.appspot.com/api/1/carros/marcas.json'
        }).then(function successCallback(response) {
            $scope.marcas = response.data;

        }, function errorCallback(response) {
        });
    };
    $scope.closeModalMarca = function () {
        $scope.modal_marca.hide();
    };

    $scope.confirmarModalMarca = function () {
        $scope.modal_marca.hide();
        var v = $('.modal-marca .check.active').closest('.row').find('label').last().html();
        $('.item-marca .chip').removeClass('hidden');
        $('.item-marca .chip span').html(v);
    };


    //modal modelo
    $ionicModal.fromTemplateUrl('templates/modais/escolher_modelo.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_modelo = modal;
    });
    $scope.openModalModelo = function () {
        $rootScope.campos.marca_selecionada = $('.modal-marca .check.active').closest('.row').find('input[type=radio]').val();
        $('.modal-modelo .button.confirm').addClass('hidden');
        $scope.modal_modelo.show();
        $http({
            method: 'GET',
            url: 'http://fipeapi.appspot.com/api/1/carros/veiculos/' + $rootScope.campos.marca_selecionada + '.json'
        }).then(function successCallback(response) {
            $scope.modelos = response.data;
        }, function errorCallback(response) {
        });
    };
    $scope.closeModalModelo = function () {
        $scope.modal_modelo.hide();
    };
    $scope.confirmarModalModelo = function () {
        $scope.modal_modelo.hide();
        var v = $('.modal-modelo .check.active').closest('.row').find('label').last().html();
        $('.item-modelo .chip').removeClass('hidden');
        $('.item-modelo .chip span').html(v);
    };
    // // Cleanup the modal when we're done with it!
    // $scope.$on('$destroy', function() {
    //   $scope.modal.remove();
    // });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // // Execute action on remove modal
    // $scope.$on('modal.removed', function() {
    //   // Execute action
    // });


    //modal Ano
    $ionicModal.fromTemplateUrl('templates/modais/escolher_ano.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_ano = modal;
    });

    $scope.openModalAno = function () {
        $scope.modal_ano.show();
    };

    $scope.confirmarModalAno = function () {
        var left = parseInt( $('.content-left .spinner-content .year.active').html() );
        var rigth = parseInt( $('.content-rigth .spinner-content .year.active').html() );
        if(left > rigth){
            alert('Por favor, escolha um período valido'); 
            return;
        }
        $scope.modal_ano.hide();
        var v = "De " + $('.ano-modal .content-left .active').html() + "  até  " + $('.ano-modal .content-rigth .active').html();
        $('.item-ano .chip').removeClass('hidden');
        $('.item-ano .chip span').html(v);
        console.log(v);
    };

    //modal versaoitem-versao
    $ionicModal.fromTemplateUrl('templates/modais/escolher_versao.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_versao = modal;
    });

    $scope.openModalVersao = function () {
        $scope.modal_versao.show();
    };
    $scope.confirmarModalVersao = function () {
        $scope.modal_versao.hide();
        $('.item-versao .chip').remove();
        $('.item-versao .ion-android-arrow-forward').remove();

        var chips = "";
        $('.versao-modal input:checked').each(function (key, value) {
            var v = $(this).closest('li').find('label').last().html();
            chips = chips + '<div class="chip right" target="versao-modal"> <span>' + v + '</span><i class="close">+</i></div>';
        });
        $('.item-versao').append(chips);
        $('.item-versao').append('<i class="icon ion-android-arrow-forward"></i>');

    };

    //modal km
    $ionicModal.fromTemplateUrl('templates/modais/escolher_km.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_km = modal;
    });

    $scope.openModalKm = function () {
        $scope.modal_km.show();
    };

    $scope.confirmarModalKm = function () {
        $scope.modal_km.hide();
        var v = $('.km-modal input:checked').closest('li').find('label').last().html();
        $('.item-km .chip').removeClass('hidden');
        $('.item-km .chip span').html(v);
        console.log(v);
    };
    //modal cambio
    $ionicModal.fromTemplateUrl('templates/modais/escolher_cambio.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_cambio = modal;
    });

    $scope.openModalCambio = function () {
        $scope.modal_cambio.show();
    };

    $scope.confirmarModalCambio = function () {
        $scope.modal_cambio.hide();
        var v = $('.cambio-modal input:checked').closest('li').find('label').last().html();
        $('.item-cambio .chip').removeClass('hidden');
        $('.item-cambio .chip span').html(v);
        console.log(v);
    };

    //modal cor
    $ionicModal.fromTemplateUrl('templates/modais/escolher_cor.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_cor = modal;
    });

    $scope.openModalCor = function () {
        $scope.modal_cor.show();
    };
    $scope.confirmarModalCor = function () {
        $scope.modal_cor.hide();
        var v = $('.cor-modal input:checked').closest('li').find('label').last().html();
        $('.item-cor .chip').removeClass('hidden');
        $('.item-cor .chip span').html(v);
        console.log(v);
    };

    //modal opcionais
    $ionicModal.fromTemplateUrl('templates/modais/escolher_opcionais.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_opcionais = modal;
    });

    $scope.openModalOpcionais = function () {
        $scope.modal_opcionais.show();
    };

    $scope.confirmarModalOpcionais = function () {
        $scope.modal_opcionais.hide();
        $('.item-opcionais .chip').remove();
        $('.item-opcionais .ion-android-arrow-forward').remove();
        var chips = "";
        $('.opcionais-modal input:checked').each(function (key, value) {
            var v = $(this).closest('li').find('label').last().html();
            chips = chips + '<div class="chip right" target="versao-modal"> <span>' + v + '</span><i class="close">+</i></div>';
        });
        $('.item-opcionais').append(chips);
        $('.item-opcionais').append('<i class="icon ion-android-arrow-forward"></i>');
    };

    //modal estado
    $ionicModal.fromTemplateUrl('templates/modais/escolher_estado.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_estado = modal;
    });

    $scope.openModalEstado = function () {
        $scope.modal_estado.show();
    };

    $scope.confirmarModalEstado = function () {
        $scope.modal_estado.hide();
        var v = $('.estado-modal li.active label').html();
        $('.item-estado .chip').removeClass('hidden');
        $('.item-estado .chip span').html(v);
    };
    //modal cidade
    $ionicModal.fromTemplateUrl('templates/modais/escolher_cidade.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_cidade = modal;
    });

    $scope.openModalCidade = function () {
        $scope.modal_cidade.show();
    };

    $scope.confirmarModalCidade = function () {
        $scope.modal_cidade.hide();
        $('.item-cidade .chip').remove();
        $('.item-cidade .ion-android-arrow-forward').remove();
        var chips = "";
        $('.cidade-modal input:checked').each(function (key, value) {
            var v = $(this).closest('li').find('label').last().html();
            chips = chips + '<div class="chip right" target="versao-modal"> <span>' + v + '</span><i class="close">+</i></div>';
        });
        $('.item-cidade').append(chips);
        $('.item-cidade').append('<i class="icon ion-android-arrow-forward"></i>');
    };

    $scope.escolheCarroDetahesNext = function () {
        if (!$rootScope.userlogin) {
            $state.go('app.login');
            return;
        }
        $state.go('app.revisar-dados-ativar-leilao-l3');
    }

})

