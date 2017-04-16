angular.module('video-player')


.directive('videoPlayer', function() {

  return {

    scope: {
      video: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html',
    controller: function () {},
    // TODO
  };
});

// .controller('Ctrl', ['$scope', '$sce', function ($scope, $sce) {
// 	$scope.youtuve = $sce.trustAsHtml('<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/{{ctrl.video.id.videoId}}" allowFullScreen></iframe>')
// }])


