mtmIntern.controller('ProgressCtrl', function ProgressCtrl($scope) {
  $scope.max = 100;
  $scope.type = 'info';
  // $scope.value = 75;


  $scope.steps = [
      { name: "Welcome", w_complete: false, test: 20 },
      { name: "Getting Started", gs_complete: false, test: 20 },
      { name: "Setting up Your Dev Environment", setting_complete: false, test: 20 },
      { name: "Quality Assurance Basics", qa_complete: false, test: 20 },
      { name: "FAQ", faq_complete: false, test: 20 },
    ];

    $scope.complete = function() {
      var total = 0;
        if($scope.steps[0].w_complete) {
          total += 20;
        }
        if ($scope.steps[1].gs_complete) {
          total += 20;
        }

        if($scope.steps[2].setting_complete) {
          total +=20;
        }
        if($scope.steps[3].qa_complete) {
          total += 20;
        }
        if($scope.steps[4].faq_complete) {
          total += 20;
        }
      return total;
    }

    $scope.value = $scope.complete();

});
