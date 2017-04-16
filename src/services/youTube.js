angular.module('video-player')
.service('youTube', function($http, $window) {
  this.find = function(q, cb) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: q,
        type: 'video',
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    })
    .then(function({data}) {
      if (cb) {
        cb(data.items);
      }
    })
    .catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });
  };
});
