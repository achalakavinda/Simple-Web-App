/**
 * Created by AchalaKavinda on 12/16/2017.
 */
'use strict';

var app = angular.module('clientLogin', [], function() {});

app.controller('loginController',function ($scope) {

    $scope.lUser={};
    $scope.rUser={};

    //login function
    $scope.login=function(){
        alert('login');
    };

    $scope.register=function(){
        alert('register');
    };

});