mtmIntern.controller('ProgressCtrl', function ProgressCtrl($scope) {
  $scope.max = 100;
  $scope.type = 'info';
  // $scope.value = 75;

  $scope.steps = {};

   $scope.steps.welcome = false;
   $scope.steps.gettingStarted = false;
   $scope.steps.settingUp = false;
   $scope.steps.qaBasics = false;
   $scope.steps.faq = false;


    $scope.status = function() {
      var total = 0;
        if($scope.steps.welcome) {
          total += 20;
        }
        if ($scope.steps.gettingStarted) {
          total += 20;
        }

        if($scope.steps.settingUp) {
          total +=20;
        }
        if($scope.steps.qaBasics) {
          total += 20;
        }
        if($scope.steps.faq) {
          total += 20;
        }

      $scope.total = total;
      return total;
    }

});
