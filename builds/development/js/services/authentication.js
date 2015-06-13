myApp.factory('Authentication', function($firebase,
	$firebaseAuth, $routeParams, $location){

	var ref = new Firebase();
	var auth = $firebase(ref);
});//myApp Factory