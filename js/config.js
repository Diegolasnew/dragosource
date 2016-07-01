/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/home");


    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        ///////////////INICIO/////////////////
        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.home', {
            url: "/home",
            templateUrl: "views/pages/home.html",
             data: { pageTitle: 'Inicio' },
             resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/slick/slick.css','css/plugins/slick/slick-theme.css','js/plugins/slick/slick.min.js']
                        },
                        {
                            name: 'slick',
                            files: ['js/plugins/slick/angular-slick.min.js']
                        }
                    ]);
                }
            }
        })

        ////////////////PROjECTO EDICION//////////////
        .state('project', {
            abstract: true,
            url: "/project",
            templateUrl: "views/common/content.html",
        })
        .state('project.info', {
            url: "/info",
            templateUrl: "views/pages/project/info.html",
            data: { pageTitle: 'Información del Projecto' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/dropzone/basic.css','css/plugins/dropzone/dropzone.css','js/plugins/dropzone/dropzone.js']
                        }
                    ]);
                }
            }
        })
        .state('project.editor', {
            url: "/editor",
            templateUrl: "views/pages/project/editor.html",
            data: { pageTitle: 'Editor' }
        })
        //////////CORREGIR/////////
        .state('fix', {
            abstract: true,
            url: "/fix",
            templateUrl: "views/common/content.html",
        })
        .state('fix.editor', {
            url: "/editor",
            templateUrl: "views/pages/fix/editor.html",
            data: { pageTitle: 'Editor' }
        })

        /////////MANGA/////////////
        .state('manga', {
            abstract: true,
            url: "/manga",
            templateUrl: "views/common/content.html",
        })
        .state('manga.info', {
            url: "/read",
            templateUrl: "views/pages/manga/leer.html",
            data: { pageTitle: 'Leer Manga', class: 'read_manga' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/dropzone/basic.css','css/plugins/dropzone/dropzone.css','js/plugins/dropzone/dropzone.js']
                        }
                    ]);
                }
            }
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
