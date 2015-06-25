mtmIntern.controller('ProgressCtrl', function ProgressCtrl($scope) {
  $scope.max = 100;
  $scope.type = 'info';
  // $scope.value = 75;

  $scope.steps = {};

   $scope.steps.welcome = false;
   $scope.steps.gettingStarted = false;
   $scope.steps.settingUp = false;
   $scope.steps.qaBasics = false;
  //  $scope.steps.faq = false;


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

      $scope.total = total;
      return total;
    }

});
