myApp.controller('CheckInsController', function($scope,
	$rootScope, $firebase, $routeParams,
	$location, Authentication, FIREBASE_URL) {

	$scope.whichmeeting = $routeParams.mId;
	$scope.whichuser = $routeParams.uId;
	

	var ref = new Firebase(FIREBASE_URL + "/USERS/" +
		$scope.whichuser + "/meetings/" +
		$scope.whichmeeting + '/checkins');

	$scope.addCheckin = function() {
	  var checkinsObj = $firebase(ref);

		var myData = {
			firstname: $scope.user.firstname,
			 lastname: $scope.user.lastname,
			    email: $scope.user.email,
			     date: Firebase.ServerValue.TIMESTAMP
		};

		checkinsObj.$push(myData).then(function() {
			$location.path('/checkins/' + $scope.whichuser + '/' + 
				$scope.whichmeeting + '/checkinsList');
		}); //checkinObj
	}; //addCheckin
		
});

/*

	$scope.order="firstname";
	$scope.direction= null;
	$scope.recordId='';
	$scope.query='';

	var checkinsList = $firebase(ref).$asArray();
	 $scope.checkins = checkList;

	

	$scope.pickRandom = function() {
	  var whichRecord = Math.round(Math.random() * checkinsList.length);
	  $scope.recordId = checkinsList.$keyAt(whichRecord);
	}; //pick winner

	$scope.deleteCheckin = function(id) {
		var record = $firebase(ref);
		record.$remove(id);
	}; //delete checkin
	

*/