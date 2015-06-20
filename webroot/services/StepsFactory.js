mtmIntern.factory('StepsFactory', function StepsFactory() {
  var factory = {};
  factory.steps = [
    { name: "Welcome", complete: false, link: "welcome", id: 1 },
    { name: "Getting Started", complete: false, link: "getting-started", id: 2 },
    { name: "Setting up Your Dev Environment", complete: false, link: "setting-up-your-dev-environment", id: 3 },
    { name: "Quality Assurance Basics", complete: false, link: "qa-basics", id: 4 },
    { name: "FAQ", complete: false, link: "FAQ", id: 5 },
  ];

  factory.markComplete = function($sectionID) {

  }


  return factory;
});
