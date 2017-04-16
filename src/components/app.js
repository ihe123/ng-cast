angular.module('video-player')

.controller('AppCtrl', function(youTube) {
  this.searchService = youTube;
  // this.currentVideo = this.videos || window.exampleVideoData[0];
  // this.videos = this.videos || window.exampleVideoData;
  this.searchResults = ({videos}) => {
    this.currentVideo = this.videos[0];
  };
  this.selectVideo = ({currentVideo}) => {};
  youTube.find('up yours', this.searchResults);
})

.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html',
    controller: 'AppCtrl'
  };
});
