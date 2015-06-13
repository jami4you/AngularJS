myApp.controller('RegistrationController', 
  function($scope, $firebaseAuth, $location, Authentication) {

  var ref = new Firebase('https://attendancejamiapp.firebaseio.com/');
  var auth = $firebaseAuth(ref);
  
  $scope.login = function() {
      Authentication.login($scope.user)
      .then(function(user){
      $location.path('/meetings');
    }).catch(function(error){
      $scope.message = error.message;
    });
  }; //login

}); //RegistrationController

