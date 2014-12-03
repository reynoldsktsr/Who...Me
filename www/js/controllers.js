angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	// Form data for the login modal
	$scope.loginData = {};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$scope.closeLogin();
		}, 1000);
	};
})

.controller('PlaylistsCtrl', function($scope) {
	$scope.playlists = [
		{ title: 'Reggae', id: 1 },
		{ title: 'Chill', id: 2 },
		{ title: 'Dubstep', id: 3 },
		{ title: 'Indie', id: 4 },
		{ title: 'Rap', id: 5 },
		{ title: 'Cowbell', id: 6 }
	];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('QuizCtrl',function($scope){
	$scope.q1l1 = [
		{ text: "It functions as it's supposed to, but it's supposed to be unfair", value: "1"},
		{ text: "Completely Dysfunctional", value: "2"},
		{ text: "Flawed", value: "3"},
		{ text: "The best existing political system but imperfect", value: "4"},
		{ text: "Nearly if not perfect", value: "5"},
	];
	$scope.q1l2 = [
		{ text: "Start a petition to get a new printer! Your boss is so cheap!", value: "1"},
		{ text: "Make a quick dash to the Kinkos next door because no one in your office is quick enough to handle it", value: "2"},
		{ text: "Go around the office explaining the situation and find someone who could fix it", value: "3"},
		{ text: "Find the instruction manual and figure out how to fix it, the printing will just have to wait", value: "4"},
		{ text: "Go back to your desk and wait for someone else to figure it out, you’ll do your other work in the mean time", value: "5"},
	];
	$scope.q1l3 = [
		{ text: "Abolish capitalism", value: "1"},
		{ text: "Make everyone accountable for their own actions", value: "2"},
		{ text: "Abolish disease", value: "3"},
		{ text: "Make it so every person has a chance to make something of their lives", value: "4"},
		{ text: "The world is perfect as it is!", value: "5"},
	];
	$scope.q1l4 = [
		{ text: "They would be able to take out all the city’s power with the click of a button", value: "1"},
		{ text: "They would be able to make villains see the error of their ways after one conversation", value: "2"},
		{ text: "Could instantly provided you with any information available on this planet with the click of a button", value: "3"},
		{ text: "They would be able to provide you with endless tools/weapons at your request (even when fighting and you run out)", value: "4"},
		{ text: "They would have the power to pinpoint and jail criminals before they committed the crime", value: "5"},
	];
	$scope.q1l5 = [
		{ text: "Abolish greed", value: "1"},
		{ text: "Abolish selfishness", value: "2"},
		{ text: "Increase empathy (exponentially)", value: "3"},
		{ text: "Increase wisdom and knowledge (exponentially)", value: "4"},
		{ text: "Increase happiness (exponentially)", value: "5"},
	];

	$scope.data = {
	};
})
;

