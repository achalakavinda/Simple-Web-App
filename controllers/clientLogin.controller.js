/**
 * Created by AchalaKavinda on 12/16/2017.
 */

'use strict';

var app = angular.module('clientLogin', [], function() {});

app.controller('loginController',function ($scope,$http) {

    if(sessionStorage.length>0){

        if(sessionStorage.userToken===''){
            console.log(sessionStorage.userToken+'token');
        }else {
            window.location.replace("/store");
        }
    }else {
        window.location.replace("/login");
    }



    $scope.lUser={};
    $scope.rUser={};
    //login function
    $scope.login = function(){
        $http.post('http://www.localhost:3000/api/customer/auth/',{
                    number:$scope.lUser.number,
                    password:$scope.lUser.password

        }).then(function (response) {
            $scope.lUser = response.data.token;
            sessionStorage.userToken=response.data.token;
            sessionStorage.name=response.data.customer.name;
            sessionStorage.number=response.data.customer.number;
            sessionStorage.id=response.data.customer.id;
            window.location.replace("/store");
        }, function (response) {
            $scope.lUser = response.statusText;
        });
    };
//registration function
    $scope.register = function(){
        $http.post('http://www.localhost:3000/api/customer/register',{
            number:$scope.rUser.number,
            password:$scope.rUser.password,
            name:$scope.rUser.name

        }).then(function (response) {
            $scope.rUser = response.data;
            window.location.replace("/login");
        }, function (response) {

        });
    };

});