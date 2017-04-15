angular.module('video-player')


.directive('app', function() {
  return {
    // TODO
    // 
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,


    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.selectVideo = function() {};
      this.searchResults = function() {};
      this.currentVideo = this.currentVideo || window.exampleVideoData[0];
      this.videos = this.videos || window.exampleVideoData;
      //console.log(this)
    }
  };
});
