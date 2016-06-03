angular
	.module('avengersApp').controller('mainCtrl',function($scope, dataService){
	
		$scope.avengersArr = dataService.getData();
});
