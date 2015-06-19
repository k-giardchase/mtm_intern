var mtmIntern = angular.module('mtmIntern', ['ui.router']);

mtmIntern.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partials/home.html'
  });

  $stateProvider.state('test', {
    url: '/about',
    templateUrl: 'partials/about.html'
  });
});
