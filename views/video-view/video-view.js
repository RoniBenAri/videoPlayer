var videoModule = angular.module('videoView', []);


videoModule.controller('videoCtrl', function($scope, $sce, $state, videoData) {

    $scope.videoUrl = $sce.trustAsResourceUrl(videoData);

    var videoElement = document.getElementById("myVideo");
    videoElement.onended = function() {
        $state.go('image', { redirect : true });
    };

});