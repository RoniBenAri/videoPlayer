var app = angular.module('myApp', ['ui.router', 'services', 'views']);

app.controller('mainCtrl', ['$scope', '$state', 'myService', function($scope, $state, myService) {
    myService.getAllUrls()
        .then(function(allUrls) {
            $state.go('video');
        });
}]);


app.config(function($stateProvider) {

    $stateProvider
        .state('video', {
            url: '/video',
            templateUrl: 'views/video-view/video-view.html',
            controller: 'videoCtrl',
            resolve: {
                videoData: function(myService) {
                    return myService.getVideoUrl();
                }
            }
        })
        .state('image', {
            url: '/image',
            templateUrl: 'views/image-view/img-view.html',
            controller: 'imgCtrl',
            resolve: {
                imageData: function(myService) {
                    return myService.getImageUrl();
                }
            }
        });
});
