angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick: '<'
    },
    // TODO
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html',
    controller: function () {}
  };
});
