(function(){
  'use strict';
  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.moviePopular', {
        url: '/movie',
        views: {
          '@': {
            template: "<h1>Popular movie popular </h1>"
          }
        }
      });
  }
  function MovieCtrl() {
    var vm = this;
  }

  angular.module('moviePopular', [])
    .config(config)
    .controller('MovieCtrl', MovieCtrl);
})();
