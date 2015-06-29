/*
Keeps track of and controlls progress bar in navbar
*/

mtmIntern.controller('ProgressCtrl', function ProgressCtrl($scope) {
  $scope.max = 100; //progress bar max value
  $scope.type = 'info'; //color of progress bar

  //Set each step status as false to begin with
  $scope.steps = [
    { welcome: false },
    { gettingStarted: false },
    { settingUp: false },
    { qaBasics: false },
    { welcome: false }
  ];

  //GETTING STARTED pagination
  $scope.gStarted = [
    { page: 1, link: 'getting-started.modal.one' },
    { page: 2, link: 'getting-started.modal.two'},
    { page: 3, link: 'getting-started.modal.three'},
    { page: 4, link: 'getting-started.modal.four'},
    { page: 5, link: 'getting-started.modal.five'}
  ];

  //SETTING UP YOUR DEV ENVIRONMENT pagination
  $scope.setting = [
    { page: 1, link: 'setting-up.modal.one' },
    { page: 2, link: 'setting-up.modal.two'},
    { page: 3, link: 'setting-up.modal.three'},
    { page: 4, link: 'setting-up.modal.four'},
    { page: 5, link: 'setting-up.modal.five'}
  ];

  //QA BASICS pagination
  $scope.qa = [
    { page: 1, link: 'qa-basics.modal.one' },
    { page: 2, link: 'qa-basics.modal.two'},
    { page: 3, link: 'qa-basics.modal.three'},
    { page: 4, link: 'qa-basics.modal.four'},
    { page: 5, link: 'qa-basics.modal.five'},
    { page: 6, link: 'qa-basics.modal.six'},
    { page: 7, link: 'qa-basics.modal.seven'},
    { page: 8, link: 'qa-basics.modal.eight'},
    { page: 9, link: 'qa-basics.modal.nine'}
  ];

  /* Calculates progress - if section is checked complete (true) then add 25 to total complete */
  $scope.progress = function() {
    var total = 0;

    if($scope.steps.welcome) {
      total += 25;
    }

    if ($scope.steps.gettingStarted) {
      total += 25;
    }

    if($scope.steps.settingUp) {
      total += 25;
    }

    if($scope.steps.qaBasics) {
      total += 25;
    }

    $scope.total = total; //Used to print out total percentage complete in view
    return total;
  }

});
