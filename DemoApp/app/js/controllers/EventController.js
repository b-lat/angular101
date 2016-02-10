"use strict";

eventsApp.controller("EventController",
function EventController($scope) {
  $scope.snippet = '<span style="color:red">hi there</span>'
  $scope.buttonDisabled = true;
  $scope.sortorder = 'name';
  $scope.getNumber = function(num) {
    return new Array(num);
  }
  $scope.event = {
    name: 'Angular Boot Camp',
    date: '1/1/2013',
    time: '10:30 am',
    location: {
      address: 'Google Headquarters',
      city: 'Mountain View',
      province: 'CA'
    },
    imageUrl: '/img/angularjs-logo.png',
    sessions: [
      {
        name: 'Directives Masterclass',
        creatorName: 'Bob Smith',
        duration: 1,
        level: 3,
        abstract: 'In this session you will learn the ins and outs of directives!',
        upVoteCount: 0
      },
      {
        name: 'Scopes for fun and profit',
        creatorName: 'John Doe',
        duration: 2,
        level: 1,
        abstract: 'This session blah blah blah',
        upVoteCount: 0
      },
      {
        name: 'Well Behaved Controllers',
        creatorName: 'Jane Doe',
        duration: 4,
        level: 2,
        abstract: 'Controllers are the beginning of everything Angular does...',
        upVoteCount: 0
      }
    ]
  }

  $scope.upVoteSession = function(session) {
    session.upVoteCount++;
  };

  $scope.downVoteSession = function(session) {
    session.upVoteCount--;
  };
}
);
