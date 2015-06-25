mtmIntern.controller('ProgressCtrl', function ProgressCtrl($scope) {
  $scope.max = 100;
  $scope.type = 'info';
  // $scope.value = 75;

  $scope.steps = {};

   $scope.steps.welcome = false;
   $scope.steps.gettingStarted = false;
   $scope.steps.settingUp = false;
   $scope.steps.qaBasics = false;

  $scope.qa = [
    { page: 1, link: 'qa-basics.modal.one' },
    { page: 2, link: 'qa-basics.modal.two'},
    { page: 3, link: 'qa-basics.modal.three'},
    { page: 4, link: 'qa-basics.modal.four'},
    { page: 5, link: 'qa-basics.modal.five'}
  ];

  $scope.setting = [
    { page: 1, link: 'setting-up.modal.one' },
    { page: 2, link: 'setting-up.modal.two'},
    { page: 3, link: 'setting-up.modal.three'},
    { page: 4, link: 'setting-up.modal.four'},
    { page: 5, link: 'setting-up.modal.five'}
  ];

  $scope.gStarted = [
    { page: 1, link: 'getting-started.modal.one' },
    { page: 2, link: 'getting-started.modal.two'},
    { page: 3, link: 'getting-started.modal.three'},
    { page: 4, link: 'getting-started.modal.four'},
    { page: 5, link: 'getting-started.modal.five'}
  ];


    $scope.status = function() {
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

      $scope.total = total;
      return total;
    }

});
