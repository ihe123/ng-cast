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
      this.currentVideo = {};
      this.videos = [];
      //console.log(this)
    }
  };
});
