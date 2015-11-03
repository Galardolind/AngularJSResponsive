var module = angular.module('webSite', ['ngRoute','door3.css'])
        .controller('main', function ($scope) {
            $scope.newDate = new Date();
        }).controller('listCtrl', function ($scope) {
    
    // result of REST API call
    $scope.elList = [
        {
            "img": "images/users/birds.jpg",
            "name": "John One",
            "text": "Great vacacation !",
            "nbRec": 8,
            "url": "#One",
            "buble": 1
        },
        {
            "img": "images/users/brain.jpg",
            "name": "John Two",
            "text": "Great landscape !",
            "nbRec": 1,
            "url": "#Two",
            "buble": 1
        },
        {
            "img": "images/users/cat.jpg",
            "name": "John Three",
            "text": "Meeting tomorrow...",
            "nbRec": 1,
            "url": "#Three",
            "buble": 0
        },{
            "img": "images/users/colorfull.png",
            "name": "John Smith",
            "text": "Sick today",
            "nbRec": 8,
            "url": "#Smith",
            "buble": 1
        },
        {
            "img": "images/users/cygn.jpg",
            "name": "John Doe",
            "text": "Seeking for jobs",
            "nbRec": 1,
            "url": "#Doe",
            "buble": 1
        },
        {
            "img": "images/users/eye.jpg",
            "name": "David Graham",
            "text": "On the car",
            "nbRec": 1,
            "url": "#Graham",
            "buble": 0
        },{
            "img": "images/users/community.jpg",
            "name": "David Goliath",
            "text": "Party tonight !",
            "nbRec": 28,
            "url": "#Goliath",
            "buble": 1
        },
        {
            "img": "images/users/cow.jpg",
            "name": "David Doe",
            "text": "Sad :(",
            "nbRec": 1,
            "url": "#Doe",
            "buble": 1
        },
        {
            "img": "images/users/galaxy.jpg",
            "name": "Kelly Doe",
            "text": "New hat !",
            "nbRec": 1,
            "url": "#Kelly",
            "buble": 0
        },{
            "img": "images/users/homer.jpg",
            "name": "Kelly Smith",
            "text": "New heels !",
            "nbRec": 8,
            "url": "#KellyS",
            "buble": 1
        },
        {
            "img": "images/users/colorSquare.png",
            "name": "Jenny Doe",
            "text": "Writing a book...",
            "nbRec": 1,
            "url": "#JennyD",
            "buble": 1
        },
        {
            "img": "images/users/star.jpg",
            "name": "Jenny Smith",
            "text": "At school",
            "nbRec": 1,
            "url": "#JennyS",
            "buble": 0
        }
    ];
}).directive('headr', function () {
    return {
        restrict: 'E',
        templateUrl: "html/header.html",
        css: "css/headr.css"
    };
}).directive('footr', function () {
    return {
        restrict: 'E',
        templateUrl: "html/footer.html",
        css: "css/footr.css"
    };
});

// resize actions
$(window).resize(function () {
    formatContent();
});

// format content
function formatContent() {
    var h = $(window).height() - $("headr").height() -
            $("footr").height() - $(".filter-bar").height();
    $(".content-list").height(h);
}

// on ready actions
$(document).ready(function () {
    formatContent();
});
