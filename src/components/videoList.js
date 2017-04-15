angular.module('video-player')
.directive('videoList', function() {
  return {
    // TODO
    scope: {
      videos: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    //videos: window.exampleVideoData,
    templateUrl: 'src/templates/videoList.html',
    controller: function() {
      
      //this.videos = '' || window.exampleVideoData;
      this.onClick = function () {};
      console.log(this.onClick);
    }
    
  };
});
