mtmIntern.factory('StepsFactory', function StepsFactory() {
  var factory = {};
  factory.steps = [
    { name: "Step One", complete: false },
    { name: "Step Three", complete: false },
    { name: "Step Three", complete: false },
    { name: "Step Four", complete: false },
    { name: "Step Five", complete: false },
  ];

  return factory;
});
