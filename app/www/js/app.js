// Ionic Starter App

angular.module('starter', ['ionic', 'starter.controllers'])

        .run(function ($ionicPlatform, $rootScope) {
            $rootScope.userlogin = true;
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StausBar) {
                    StatusBar.styleDefault();
                }

            });
        })

        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.views.maxCache(0);

            $stateProvider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
                    .state('app.home', {
                        url: '/home',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/home.html',
                                controller: 'HomeCtrl'
                            }
                        }
                    })

                    .state('app.comodidade', {
                        url: '/comodidade',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comodidade.html',
                                controller: 'ComodidadeCtrl'
                            }
                        }
                    })



                    .state('app.esquecisenha', {
                        url: '/esquecisenha',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/esquecisenha.html',
                                controller: 'EsqueciSenhaCtrl'
                            }

                        }
                    })

                    .state('app.novasenha', {
                        url: '/novasenha',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/novasenha.html',
                                controller: 'NovaSenhaCtrl'
                            }

                        }
                    })

                    .state('app.politicaprivacidade', {
                        url: '/politicaprivacidade',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/politicaprivacidade.html',
                                controller: 'PoliticaPrivacidadeCtrl'
                            }

                        }
                    })

                    .state('app.termouso', {
                        url: '/termouso',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/termouso.html',
                                controller: 'TermoUsoCtrl'
                            }

                        }
                    })
                    /*comprador section*/
                    .state('app.ultimachancecomprador', {
                        url: '/ultimachancecomprador',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/ultimachancecomprador.html',
                                controller: 'LanceCompradorCtrl'
                            }

                        }
                    })

                    .state('app.escolhercarro', {
                        url: '/escolhercarro',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/escolhercarro.html',
                                controller: 'EscolherCarroCtrl'
                            }

                        }
                    })

                    .state('app.escolhercarrodetalhes', {
                        url: '/escolhercarrodetalhes',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/escolhercarro/escolhercarrodetalhes.html',
                                controller: 'EscolherCarroCtrl'
                            }

                        }
                    })

                    .state('app.revisar-dados-ativar-leilao-l3', {
                        url: '/revisar-dados-ativar-leilao-l3',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/escolhercarro/revisar-dados-ativar-leilao-l3.html',
                                controller: 'EscolherCarroCtrl'
                            }

                        }
                    })

                    .state('app.filtar-opcionais-lance-l51', {
                        url: '/filtar-opcionais-lance-l51',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/filtar-opcionais-lance-l51.html',
                                controller: 'EscolherCarroCtrl'
                            }

                        }
                    })

                    /**/
                    .state('app.descricaolancecomprador', {
                        url: '/descricaolancecomprador',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/lance/descricaolancecomprador.html',
                                controller: 'LanceCompradorCtrl'
                            }

                        }
                    })

                    .state('app.confirmarleilao', {
                        url: '/confirmarleilao',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/leilao/confirmarleilao.html',
                                controller: 'ConfirmarLeilaoCtrl'
                            }

                        }
                    })

                    .state('app.listarleilaocomprador', {
                        url: '/listarleilaocomprador',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/leilao/leilao-comprador-interna-lista.html',
                                controller: 'LeilaoCompradorListaCtrl'
                            }

                        }
                    })
                    .state('app.detalhe-lance-recebido-l6', {
                        url: '/detalhe-lance-recebido-l6',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/leilao/detalhes/detalhe-lance-recebido-l6.html',
                                controller: 'LeilaoCompradorDetalheCtrl'
                            }

                        }
                    })
                    .state('app.lances-vencedores-l7', {
                        url: '/lances-vencedores-l7',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/leilao/detalhes/lances-vencedores-l7.html',
                                controller: 'LeilaoCompradorDetalheCtrl'
                            }

                        }
                    })
                    .state('app.confirmacao-lance-vencedor-l8', {
                        url: '/confirmacao-lance-vencedor-l8',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/leilao/detalhes/confirmacao-lance-vencedor-l8.html',
                                controller: 'LeilaoCompradorDetalheCtrl'
                            }

                        }
                    })
                    .state('app.meu-leilao-ultima-chance-l12', {
                        url: '/meu-leilao-ultima-chance-l12',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/leilao/meu-leilao-ultima-chance-l12.html',
                                controller: 'LeilaoCompradorListaCtrl'
                            }

                        }
                    })
                    .state('app.ativar-ultima-chance-l11', {
                        url: '/ativar-ultima-chance-l11',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/leilao/ativar-ultima-chance-l11.html',
                                controller: 'LeilaoCompradorListaCtrl'
                            }

                        }
                    })
                    .state('app.meusleiloes', {
                        url: '/meusleiloes',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/meusleiloes.html',
                                controller: 'LeilaoCompradorCtrl'
                            }

                        }
                    })
                    .state('app.meusleiloes.andamento', {
                        url: "/andamento",
                        views: {
                            'leilao-em-andamento': {
                                templateUrl: "templates/leilao/tab-andamento.html"
                            }
                        }
                    })
                    .state('app.meusleiloes.encerrado', {
                        url: "/encerrado",
                        views: {
                            'leilao-encerrado': {
                                templateUrl: "templates/leilao/tab-encerrado.html",
                                controller: 'LeilaoCompradorDetalheCtrl'
                            }
                        }
                    })
                    /*user comprador*/
                    .state('app.login', {
                        url: '/login',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/login.html',
                                controller: 'CadastrarCompradorCtrl'
                            }
                        }
                    })

                    .state('app.minhaconta', {
                        url: '/minhaconta',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/minhaconta.html',
                                controller: 'MinhaContaCtrl'
                            }
                        }
                    })
                    /*pagamentos*/
                    .state('app.forma-de-pagamento-l5', {
                        url: '/forma-de-pagamento-l5',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/pagamento/forma-de-pagamento-l5.html',
                                controller: 'PagamentoCtrl'
                            }
                        }
                    })
                    .state('app.forma-de-pagamento-boleto-l5-3', {
                        url: '/forma-de-pagamento-boleto-l5-3',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/pagamento/forma-de-pagamento-boleto-l5-3.html',
                                controller: 'PagamentoCtrl'
                            }
                        }
                    })
                    

                    /*Vendedores sections*/

                    //elder
                    .state('app.home-l2', {
                        url: '/home-l2',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/home-l2.html',
                                controller: 'CadastroVendedorCtrl'
                            }

                        }
                    })

                    .state('app.cadastrotipovendedor', {
                        url: '/cadastrotipovendedor',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/cadastrotipovendedor.html',
                                controller: 'CadastroVendedorCtrl'
                            }

                        }
                    })
                    .state('app.vendedor-cadastrar', {
                        url: '/vendedor-cadastrar',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/cadastrotipovendedor/cadastrar.html',
                                controller: 'CadastroVendedorCtrl'
                            }

                        }
                    })
                    .state('app.vendedor-login', {
                        url: '/vendedor-login',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/cadastrotipovendedor/login.html',
                                controller: 'CadastroVendedorCtrl'
                            }

                        }
                    })
                    .state('app.cadastrovendedorloja', {
                        url: '/cadastrovendedorloja',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/cadastrarvendedorloja.html',
                                controller: 'CadastroVendedorCtrl'
                            }

                        }
                    })
                    .state('app.vendedor-meus-leiloes-l9', {
                        url: '/vendedor-meus-leiloes-l9',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/meus-leiloes-l9.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-meus-leiloes-l9-andamento', {
                        url: '/vendedor-meus-leiloes-l9-andamento',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/tabs/tab-andamento.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-meus-leiloes-l9-andamento-meu-leilao-ativo-l91', {
                        url: '/vendedor-meus-leiloes-l9-andamento-meu-leilao-ativo-l91',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/detalhes/andamento-meu-leilao-ativo-l91.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-meus-leiloes-l9-encerrado', {
                        url: '/vendedor-meus-leiloes-l9-encerrado',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/tabs/tab-encerrado-l10.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-detalhes-leilao-encerrado-l10-2', {
                        url: '/vendedor-detalhes-leilao-encerrado-l10-2',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/detalhes/detalhes-leilao-encerrado-l10-2.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-detalhes-leilao-ganho-L10-1', {
                        url: '/vendedor-detalhes-leilao-ganho-L10-1',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/detalhes/detalhes-leilao-ganho-L10-1.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })

                    .state('app.vendedor-minha-conta-vendedor-pf-l11', {
                        url: '/vendedor-minha-conta-vendedor-pf-l11',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/minha-conta/minha-conta-vendedor-pf-l11.html',
                                controller: 'CadastroVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-minha-conta-vendedor-pj-l12', {
                        url: '/vendedor-minha-conta-vendedor-pj-l12',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/minha-conta/minha-conta-vendedor-pj-l12.html',
                                controller: 'CadastroVendedorCtrl'
                            }
                        }
                    })
                    //leiloes disponiveis
                    .state('app.leiloes-disponiveis-l6', {
                        url: '/leiloes-disponiveis-l6',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/leiloes-disponiveis-l6.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.leiloes-disponiveis-l6-seminovos', {
                        url: '/leiloes-disponiveis-l6-seminovos',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/l6-tabs/seminovos.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.leiloes-disponiveis-l6-zerokm', {
                        url: '/leiloes-disponiveis-l6-zerokm',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/l6-tabs/zerokm.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-revisar-lance-l7-2', {
                        url: '/vendedor-revisar-lance-l7-2',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/detalhes/revisar-lance-l7-2.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-detalhe-lance-ofertado-l8', {
                        url: '/vendedor-detalhe-lance-ofertado-l8',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/detalhes/detalhe-lance-ofertado-l8.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-detalhe-lance-concorrente-l8-1', {
                        url: '/vendedor-detalhe-lance-concorrente-l8-1',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/detalhes/detalhe-lance-concorrente-l8-1.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    .state('app.detalhes-leilao-disponivel-l6-1', {
                        url: '/detalhes-leilao-disponivel-l6-1',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/leilao/detalhes/detalhes-leilao-disponivel-l6-1.html',
                                controller: 'LeilaoVendedorCtrl'
                            }
                        }
                    })
                    /**/
                    .state('app.avaliar-vendedor-l101', {
                        url: '/avaliar-vendedor-l101',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/avaliar-vendedor-l101.html',
                                controller: 'AvaliarVendedorCtrl'
                            }

                        }
                    })

                    .state('app.detalhe-plano-selecionado-l42', {
                        url: '/detalhe-plano-selecionado-l42',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/detalhe-plano-selecionado-l42.html',
                                controller: 'CadastrarCompradorCtrl'
                            }

                        }
                    })
                    .state('app.avaliar-comprador-l103-2', {
                        url: '/avaliar-comprador-l103-2',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/avaliar-comprador-l103-2.html',
                                controller: 'CadastrarCompradorCtrl'
                            }

                        }
                    })
                    .state('app.definirlance-l7', {
                        url: '/definirlance-l7',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/comprador/definirlance-l7.html',
                                controller: 'EscolherCarroCtrl'
                            }

                        }
                    })
                    .state('app.planos-tradicionais-l4', {
                        url: '/planos-tradicionais-l4',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/planos/planos-tradicionais-l4.html',
                                controller: 'CadastroVendedorCtrl'
                            }
                        }
                    })
                    .state('app.planos-tradicionais-l4-tradicional', {
                        url: '/planos-tradicionais-l4-tradicional',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/planos/l4-tabs/tradicional.html',
                                controller: 'CadastroVendedorCtrl'
                            }
                        }
                    })
                    .state('app.planos-tradicionais-l4-planos-pro-l4-1', {
                        url: '/planos-tradicionais-l4-planos-pro-l4-1',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/planos/l4-tabs/planos-pro-l4-1.html',
                                controller: 'CadastroVendedorCtrl'
                            }
                        }
                    })
                    .state('app.pacotes-adicionais-l14', {
                        url: '/pacotes-adicionais-l14',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/planos/pacotes-adicionais-l14.html',
                                controller: 'CadastroVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-meus-usuarios-pj-l12-2', {
                        url: '/vendedor-meus-usuarios-pj-l12-2',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/minha-conta/meus-usuarios-pj-l12-2.html',
                                controller: 'CadastroVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-editar-usuario-pro-l12-4', {
                        url: '/vendedor-editar-usuario-pro-l12-4',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/minha-conta/editar-usuario-pro-l12-4.html',
                                controller: 'CadastroVendedorCtrl'
                            }
                        }
                    })
                    .state('app.vendedor-incluir-usuario-pro-l12-3', {
                        url: '/vendedor-incluir-usuario-pro-l12-3',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/vendedor/minha-conta/incluir-usuario-pro-l12-3.html',
                                controller: 'CadastroVendedorCtrl'
                            }
                        }
                    })
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/home');




        });


