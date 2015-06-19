mtmIntern.controller('StepsCtrl', function StepsCtrl($scope, StepsFactory) {
  $scope.steps = StepsFactory.steps;
});
