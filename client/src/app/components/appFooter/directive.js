(function(){
  'use strict';
  function appFooterComponent(){
    return {
      restrict:'EA',
      replace: true,
      templateUrl:'src/app/components/appFooter/appFooter.template.html',
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
  angular.module('appFooterComponent', [])
    .directive('appFooter', appFooterComponent);
})();
