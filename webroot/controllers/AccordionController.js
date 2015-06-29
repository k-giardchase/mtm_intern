/*
Controls accordion on FAQ page.
*/

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

/* Status of accordion content open or closed */
  $scope.accordionstatus = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

});
