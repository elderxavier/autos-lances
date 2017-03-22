angular.module('starter').controller('LeilaoCompradorDetalheCtrl', function ($scope, $timeout, $stateParams, $ionicActionSheet) {
    $scope.show = function () {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                {text: 'Ver Informações de Leilão <div class="btn-round bg-positive"><span>+</span></div>'},
                {text: 'Filtrar Opcionais <div class="btn-round bg-positive"><span>+</span></div>'}
            ],
            cancelText: '<div class="btn-round bg-positive"><span>+</span></div>',
            cancel: function () {
                // add cancel code..
            },
            buttonClicked: function (index) {
                return true;
            }
        });
    }

$scope.slideIndex = 1;
    //$scope.slideIndex = [];
    //$scope.slideIndex[0] = false;
    //$scope.slideIndex[1] = false;
    
    $scope.plusSlides = function (n) {
        $scope.showSlides($scope.slideIndex += n);
    };

    $scope.currentSlide = function (n) {
        $(".dot").removeClass('active');
        $scope.slideIndex = n;
        $scope.showSlides($scope.slideIndex);
    };

    $scope.showSlides = function (n) {
        $(".slideshow").css('display', 'none');
        $(".dot").removeClass('active');
        var i;
        var slides = $(".slideshow");

        var dots = $(".dot");
        if (n > slides.length) {
            $scope.slideIndex = 1
        }
        if (n < 1) {
            $scope.slideIndex = slides.length
        }
        $(slides[$scope.slideIndex - 1]).css('display', 'block');
        $(dots[$scope.slideIndex - 1]).addClass('active');
    };
    $scope.showSlides($scope.slideIndex);

    $scope.autoSlide = function () {
        $scope.slideIndex = $scope.slideIndex + 1;
        $scope.showSlides($scope.slideIndex);
        setTimeout(function () {
            $scope.autoSlide();
        }, 5000);
    };

    setTimeout(function () {
        //$scope.autoSlide();
    }, 5000);

    $(document).on('click', '#detalhe-lance-recebido-l6 .content-top .card.last button', function(){
        $('#detalhe-lance-recebido-l6 .content-top .card.last button').removeClass('active');
        $(this).addClass('active');
    });

//tab-tab-encerrado
    $scope.viewDetailsCloseds = false;
    
    $scope.showDetailsCloseds = function(){}



})