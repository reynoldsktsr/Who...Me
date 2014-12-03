// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('app', {
			url: "/app",
			abstract: true,
			templateUrl: "templates/anonMenu.html",
			controller: 'AppCtrl'
		})

		.state('app.search', {
			url: "/search",
			views: {
				'menuContent' :{
					templateUrl: "templates/search.html"
				}
			}
		})

		.state('app.browse', {
			url: "/browse",
			views: {
				'menuContent' :{
					templateUrl: "templates/browse.html"
				}
			}
		})
		.state('app.playlists', {
			url: "/playlists",
			views: {
				'menuContent' :{
					templateUrl: "templates/playlists.html",
					controller: 'PlaylistsCtrl'
				}
			}
		})

		.state('app.single', {
			url: "/playlists/:playlistId",
			views: {
				'menuContent' :{
					templateUrl: "templates/playlist.html",
					controller: 'PlaylistCtrl'
				}
			}
		})

		.state('app.home', {
			url: "/home",
			views: {
				'menuContent' :{
					templateUrl: "templates/home.html"
				}
			}
		})
		.state('app.start' ,{
			url: "/start",
			views: {
				'menuContent' :{
					templateUrl: "templates/start.html"
				}
			}
		})
		.state('app.register',{
			url: "/register",
			views: {
				'menuContent' :{
					templateUrl: "templates/register.html"
				}
			}
		})

		//BEGIN LOGGED IN

		.state('app.quizHome', {
			url: "/quizHome",
			views: {
				'menuContent' :{
					templateUrl: "templates/quizHome.html"
				}
			}
		})
		.state('app.quiz1',{
			url: "/quiz1",
			views: {
				'menuContent' :{
					templateUrl: "templates/quizlib/quiz1/quiz1_1.html"
				}
			}
		})
		.state('app.q1r1',{
			url: "/q1r1",
			views: {
				'menuContent' :{
					templateUrl:"templates/quizlib/quiz1/q1r1.html"
				}
			}
		})
		.state('app.q1r2',{
			url: "/q1r2",
			views: {
				'menuContent' :{
					templateUrl:"templates/quizlib/quiz1/q1r2.html"
				}
			}
		})
		.state('app.q1r3',{
			url: "/q1r3",
			views: {
				'menuContent' :{
					templateUrl:"templates/quizlib/quiz1/q1r3.html"
				}
			}
		})
		.state('app.q1r4',{
			url: "/q1r4",
			views: {
				'menuContent' :{
					templateUrl:"templates/quizlib/quiz1/q1r4.html"
				}
			}
		})
		;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});