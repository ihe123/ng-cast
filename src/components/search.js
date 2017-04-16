angular.module('video-player')

.controller('SearchCtrl', function() {
  this.hasClicked = () => {
    this.service.find(this.input, (video) => {
      this.result(video);
    });
  };
})

.directive('search', function() {
  return {
    // TODO
    scope: {
      service: '<',
      result: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'SearchCtrl',
    templateUrl: 'src/templates/search.html'
  };
});
