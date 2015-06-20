var mtmIntern = angular.module('mtmIntern', ['ui.router']);

mtmIntern.config(function($stateProvider) {
  $stateProvider.state('welcome', {
    url: '',
    templateUrl: 'partials/welcome.html'
  });

  $stateProvider.state('getting-started', {
    url: '/getting-started',
    templateUrl: 'partials/getting-started.html'
  });

  $stateProvider.state('setting-up-your-dev-environment', {
    url: '/setting-up-your-dev-environment',
    templateUrl: 'partials/setting-up-your-dev-environment.html'
  });

  $stateProvider.state('qa-basics', {
    url: '/qa-basics',
    templateUrl: 'partials/qa-basics.html'
  });

  $stateProvider.state('FAQ', {
    url: '/FAQ',
    templateUrl: 'partials/FAQ.html'
  });

});
