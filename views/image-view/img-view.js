var imageModule = angular.module('imageView', []);

imageModule.controller('imgCtrl', function($scope, imageData) {
    var imageUrls = imageData;

    $scope.imageClick = imageUrls.imageClick;
    $scope.imageUrl = imageUrls.imageUrl;
});