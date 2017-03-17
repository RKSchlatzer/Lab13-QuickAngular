var app = angular.module("redditApp", []);

app.controller("mainCtrl", function($scope) {

    $scope.mainContent = [{
            image: "Images/snoo.png",
            title: "Title 1 - Lorem Title Lorem Title",
            description: "I'm a picture of a pretty animal. Blah blah blah. Upvote me."
        },

        {
            image: "Images/snoo.png",
            title: "Title 2 - Lorem Title Lorem Title",
            description: "I'm another image of something. Blah blah blah. Upvote me."
        },

        {
            image: "Images/snoo.png",
            title: "Title 3 - Lorem Title Lorem Title",
            description: "Probably a puppy doing something silly. Blah blah blah. Upvote me."
        },
        {
            image: "Images/snoo.png",
            title: "Title 4 - Lorem Title Lorem Title",
            description: "Cat falling off something. Blah blah blah. Upvote me."
        },
        {
            image: "Images/snoo.png",
            title: "Title 5 - Lorem Title Lorem Title",
            description: "A crazy-weird iguana type lizard. Not a regular pet-type-lizard. Blah blah blah. Upvote me."
        },
        {
            image: "Images/snoo.png",
            title: "Title 6 - Lorem Title Lorem Title",
            description: "Here is a kid doing something really cool. Blah blah blah. Upvote me."
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

app.directive("sideNav", function() {

    return {
        restrict: "E",
        templateUrl: "side-nav.html",
        replace: false
    };

});
