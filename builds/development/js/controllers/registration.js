myApp.controller('RegistrationController', 
  function($scope, $firebaseAuth, $location) {

  var ref = new Firebase('https://attendancejamiapp.firebaseio.com/');
  var auth = $firebaseAuth(ref);
  
  $scope.login = function() {
    auth.$authWithPassword({
      email: $scope.user.email,
      password: $scope.user.password
    }).then(function(user){
      $location.path('/meetings');
    }).catch(function(error){
      $scope.message = error.message;
    });
  }; //login


}); //RegistrationController

/*
var ref = new Firebase('https://attendancejamiapp.firebaseio.com/?page=Auth');
  var auth = $firebaseAuth(ref);
  
 
  $scope.login = function() {
    auth.$authWithPassword({
      email: $scope.user.email,
      password: $scope.user.password
    }).then(function(user){
      $location.path('/meetings');
    }).catch(function(error){
      $scope.message = error.message;
    });
  }; //login

  $scope.register = function () {
    $location.path('/meetings');

*/