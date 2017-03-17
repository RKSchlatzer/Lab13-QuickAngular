var app = angular.module("redditApp", []);

app.controller("mainCtrl", function($scope) {

    $scope.mainContent = [{
            title: "Title 1 - Lorem Title Lorem Title",
            description: "I'm a picture of a pretty animal. Blah blah blah. Upvote me."
        },

        {
            title: "Title 2 - Lorem Title Lorem Title",
            description: "I'm another image of something. Blah blah blah. Upvote me."
        },

        {
            title: "Title 3 - Lorem Title Lorem Title",
            description: "Probably a puppy doing something silly. Blah blah blah. Upvote me."
        },

    ];

});

app.directive("bodyContent", function() {

    return {
        restrict: "E",
        templateUrl: "body-content.html",
        replace: true
    };

});

app.directive("titleBar", function() {

    return {
        restrict: "E",
        templateUrl: "title-bar.html",
        replace: true
    };

});

app.directive("sideNav", function(){

      return {
          restrict: "E",
          templateUrl: "side-nav.html",
          replace: false
      };

});
