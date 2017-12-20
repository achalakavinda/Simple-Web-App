var app = angular.module('reservationApp', [], function() {});

app.controller('reservationController', function($scope,$http) {
        console.log(sessionStorage);

        if(sessionStorage.length>0){
                if(sessionStorage.userToken===''){
                        console.log(sessionStorage.userToken+'token');
                    window.location.replace("/login");
                }
        }else{
            window.location.replace("/login");
        }

    $scope.out = function () {
        sessionStorage.userToken='';
        sessionStorage.name='';
        sessionStorage.number='';
        sessionStorage.id='';
        window.location.replace("/login");
    };

        $scope.reservation=[];

        $scope.id=sessionStorage.id;
        $scope.name=sessionStorage.name;
        $scope.number="";
        $scope.email="";

        $scope.tables=[];

        $http.get('http://www.localhost:3000/api/table').then(function (res) {
            $scope.tables=res.data.table;
        });

        $scope.book=function () {
           $http.post('http://www.localhost:3000/api/reservation',{
               user: $scope.name,
               email:$scope.email,
               number:$scope.number,
               table:$scope.table,
               guests:$scope.reservation.guest,
               dateTime:$scope.reservation.datetime
           }).then(function (respond) {
               console.log(respond.data);
               //send message to the customer

               $http.post('http://www.localhost:3000/sms/send',{
                   type:'reservation',
                   number:$scope.number,
                   table:$scope.reservation.room,
                   date:$scope.reservation.datetime,
                   guests:$scope.reservation.guest
               }).then(function (respond) {
                   alert('verification sms send your number');
                   console.log(respond);
               },function (err) {
                   console.log(err);
                   alert('cannot send message now so error has occur, but this order add to database');
               });

               //send email
               $http.post('/api/mail/dummy',{}).then(function (respond) {
                   alert('Verified Email Send Sucessfully');
                   console.log(respond);
               },function (err) {
                   if (err) throw  err;
                   alert('verification email cannot send');
                   console.log(err);
               });

               window.location.replace("/reservation");


           },function (err) {
               if (err) throw err;
               alert('error occur while posting')
           });
        };
});