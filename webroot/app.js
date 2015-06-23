var mtmIntern = angular.module('mtmIntern', ['ui.router', 'ui.bootstrap']);

mtmIntern.config(function($stateProvider) {
  $stateProvider.state('welcome', {
    url: '',
    templateUrl: 'partials/welcome.html'
  });

  $stateProvider.state('getting-started', {
    url: '/getting-started',
    templateUrl: 'partials/getting-started.html'
  });

  $stateProvider.state('setting-up', {
    url: '/setting-up',
    templateUrl: 'partials/setting-up.html'
  });

  $stateProvider.state('qa-basics', {
    url: '/qa-basics',
    templateUrl: 'partials/qa-basics.html'
  });

  $stateProvider.state('FAQ', {
    url: '/FAQ',
    templateUrl: 'partials/FAQ.html'
  });

  //begin modal views
  //adapted from blog post: http://www.sitepoint.com/creating-stateful-modals-angularjs-angular-ui-router/

  //base view - must be nested inside each section
  $stateProvider.state("qa-basics.modal", {
    views:{
      "qa-basics.modal": {
        templateUrl: "partials/qamodal.html"
      }
    },
    //escape on esc keypress or upon click of modal backdrop
    onEnter: ["$state", function($state) {
      $(document).on("keyup", function(e) {
        if(e.keyCode == 27) {
          $(document).off("keyup");
          $state.go("qa-basics");
        }
      });

      $(document).on("click", ".Modal-backdrop, .Modal-holder", function() {
        $state.go("qa-basics");
      });

      $(document).on("click", ".Modal-box, .Modal-box *", function(e) {
        e.stopPropagation();
      });
    }],
    abstract: true //can't be directly transitioned to
  });




  //Each step state

  // $stateProvider.state("qa-basics.modal.one", {
  //   views:{
  //     "qa-basics.modal": {
  //       templateUrl: "partials/qa-basics.one.html"
  //     }
  //   }
  // });
  //
  // $stateProvider.state("qa-basics.modal.two", {
  //   views:{
  //     "qa-basics.modal": {
  //       templateUrl: "partials/qa-basics.two.html"
  //     }
  //   }
  // });
  //
  // $stateProvider.state("qa-basics.modal.three", {
  //   views:{
  //     "qa-basics.modal": {
  //       templateUrl: "partials/qa-basics.three.html"
  //     }
  //   }
  // });
  //
  // $stateProvider.state("qa-basics.modal.four", {
  //   views:{
  //     "qa-basics.modal": {
  //       templateUrl: "partials/qa-basics.four.html"
  //     }
  //   }
  // });
  //
  // $stateProvider.state("qa-basics.modal.five", {
  //   views:{
  //     "qa-basics.modal": {
  //       templateUrl: "partials/qa-basics.five.html"
  //     }
  //   }
  // });




/*
*********************************
SETTING UP STATES
*********************************
*/


  $stateProvider.state("setting-up.modal", {
    views:{
      "setting-up.modal": {
        templateUrl: "partials/settingmodal.html"
      }
    },
    //escape on esc keypress or upon click of modal backdrop
    onEnter: ["$state", function($state) {
      $(document).on("keyup", function(e) {
        if(e.keyCode == 27) {
          $(document).off("keyup");
          $state.go("setting-up");
        }
      });

      $(document).on("click", ".Modal-backdrop, .Modal-holder", function() {
        $state.go("setting-up");
      });

      $(document).on("click", ".Modal-box, .Modal-box *", function(e) {
        e.stopPropagation();
      });
    }],
    abstract: true //can't be directly transitioned to
  });

  // Each step state

  $stateProvider.state("setting-up.modal.one", {
    views:{
      "setting-up.modal": {
        templateUrl: "partials/setting-up.one.html"
      }
    }
  });

  $stateProvider.state("setting-up.modal.two", {
    views:{
      "setting-up.modal": {
        templateUrl: "partials/setting-up.two.html"
      }
    }
  });

  $stateProvider.state("setting-up.modal.three", {
    views:{
      "setting-up.modal": {
        templateUrl: "partials/setting-up.three.html"
      }
    }
  });

  $stateProvider.state("setting-up.modal.four", {
    views:{
      "setting-up.modal": {
        templateUrl: "partials/setting-up.four.html"
      }
    }
  });

  $stateProvider.state("setting-up.modal.five", {
    views:{
      "setting-up.modal": {
        templateUrl: "partials/setting-up.five.html"
      }
    }
  });


});

// var GenModal = function($state, $url){
//   $views = {};
//   $views["'" + $state + '.modal' + "'"] = {templateUrl: $url};
//   return $views;
// }

// console.log(GenModal('qa-basics', 'partials/qa-basics.one.html'));

// $stateProvider.state('setting-up.modal.one', GenModal('setting-up', 'partials/setting-up.one.html'));
// $stateProvider.state('setting-up.modal.two', GenModal('setting-up', 'partials/setting-up.two.html'));
// $stateProvider.state('setting-up.modal.three', GenModal('setting-up', 'partials/setting-up.three.html'));
// $stateProvider.state('setting-up.modal.four', GenModal('setting-up', 'partials/setting-up.four.html'));
// $stateProvider.state('setting-up.modal.five', GenModal('setting-up', 'partials/setting-up.five.html'));
