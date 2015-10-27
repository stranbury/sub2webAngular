(function(){
  'use strict';
  function appHeaderComponent(){
    return {
      restrict:'EA',
      replace: true,
      templateUrl:'src/app/components/appHeader/appHeader.template.html',
      scope:{},
      controllerAs:'vm',
      bindToController:true,
      controller: function($log){
        var vm = this ;
        $log.debug('Header loaded');
      },
      link: function(scope, elm , attrs){

      }
    };
  }
  angular.module('appHeaderComponent', [])
    .directive('appHeader', appHeaderComponent);
})();
