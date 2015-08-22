fortuneApp.controller('FortuneCtlr', function($scope, $http) {

	$scope.init = function() {
		$scope.phrase = $scope.loadPhrase();
	},

	$scope.phraseUrl = function() {
		return config.apiUrl + "/random_phrase";
	},

	// load a new phrase to $scope.phrase
	$scope.loadPhrase = function() {
    $scope.error_message = "";

    $http.get($scope.phraseUrl())
      .then(function(resp) {
      	console.log(resp);
        $scope.phrase = resp.data.phrase;
      }, function(err) {
        $scope.error_message = "No luck! It was not possible to retrieve a new luck phrase";
      });

	}
});

