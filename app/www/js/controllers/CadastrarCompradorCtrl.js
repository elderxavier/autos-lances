angular.module('starter')
        .controller('CadastrarCompradorCtrl', function ($scope, $rootScope) {
            $rootScope.logout = function () {
                $rootScope.userlogin = false;                
            }
            $rootScope.login = function () {
                $rootScope.userlogin = true; 
                $rootScope.backHistory();
            }

        })

