var app = angular.module('services', []);

app.service('myService', function($http, $q) {
    this.allUrls;
    this.videoUrl;
    this.imageUrls;

    this.getAllUrls = function() {
        var deferred = $q.defer();

        setTimeout(function () {
            $http.get('info.json').then(function(ans) {
                this.allUrls = ans.data;
                this.videoUrl = this.allUrls.videoUrl;
                this.imageUrls = {
                    imageUrl: this.allUrls.imageUrl,
                    imageClick: this.allUrls.imageClick
                };
                deferred.resolve(this.allUrls);
            });
        }, 0);

        return deferred.promise;
    };

    this.getVideoUrl = function() {
        return videoUrl;
    };

    this.getImageUrl = function() {
        return imageUrls;
    };
});
