mtmIntern.controller('AccordionCtrl', function($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Sample Question One',
      content: 'Answer to sample question.'
    },
    {
      title: 'Sample Question Two',
      content: 'Answer to sample question.'
    },
    {
      title: 'Sample Question Three',
      content: 'Answer to sample question.'
    },
    {
      title: 'Sample Question Four',
      content: 'Answer to sample question.'
    },
    {
      title: 'Sample Question Five',
      content: 'Answer to sample question.'
    }
  ];

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

});
