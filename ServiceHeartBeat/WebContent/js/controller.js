/*
 Author:Kishoreclasses.com 
 This file is created in AngularJs lab exercise for AngularJs Online Training Course.
*/
var heartbeatApp_controllers = angular.module('heartbeatApp.controllers', []);

var serviceStatusTableCtrl = heartbeatApp_controllers.controller(
		'serviceStatusTableCtrl', function($scope, $filter, searchListService) {
			/** ******* Configuration Start ******************* */
			// 'noOfRowsInPage' for number of rows in table.
			$scope.noOfRowsInPage = 15; // pageSize
			// "reverse" 'false' for ascending and 'true' for descending.
			$scope.isReverseEnabled = false;
			//Default Column to sort.
			$scope.defaultSortByColumn = 'ServiceId';
			// Updated time.
			$scope.lastUpdated=searchListService.locallyTime(); //updated 5 minutes back;
			$scope.Header = [ 'ServiceId', 'name', 'status1', 'status2', 'status3','status4','status5'];
			/********** Configuration End ******************* */

			/**
			 * Complete List of Items
			 */
			$scope.completeItemList = getData();// completeItemList

			/**
			 * reset value back to initial position
			 */
			$scope.reset = function() {
				$scope.processedList = $scope.completeItemList;
				$scope.newServiceId = '';
				$scope.newServiceName = '';
				$scope.newServiceStatus = '';
				$scope.searchText = '';
				$scope.currentPage = 0;// first page
				$scope.HeaderIcon = [ '', '', '', '', '',''];
			}

			/**
			 * Add new service to list.
			 */
			$scope.addNewService = function() {
				$scope.completeItemList.push({
					ServiceId : $scope.newServiceId,
					ServiceName : $scope.newServiceName,
					ServiceStatus : $scope.newServiceStatus
				});
				$scope.reset();
			}

			/**
			 * Search Provided text in list if no default search text provided
			 * return complete List.
			 */
			$scope.search = function() {
				if ($scope.searchText == '') {
					$scope.processedList = $scope.completeItemList;
				} else {
					$scope.processedList = searchListService
							.getListAfterSearch($scope.completeItemList,
									$scope.searchText);
				}
				$scope.pagination();
			}

			/**
			 * Calculate Total Number of Pages based on Search Result
			 */ 
			$scope.pagination = function() {
				$scope.listByPage = searchListService.applyPagination(
						$scope.processedList, $scope.noOfRowsInPage);
			};

			$scope.setPage = function() {
				$scope.currentPage = this.n;
			};

			$scope.firstPage = function() {
				$scope.currentPage = 0;
			};

			$scope.lastPage = function() {
				$scope.currentPage = $scope.ItemsByPage.length - 1;
			};

			/**
			 * This method responsible to return icon based on status.
			 */
			$scope.getIconByStatus = function(status) {
				if (status == 1) {
					return 'check-circle-o';
				} else if (parseInt(status) == 0) {
					return 'clock-o';
				} else if (status === -1) {
					return 'times-circle-o';
				}
			};

		    /**
			 * This Method responsible to sort table.
			 * 
			 */
			$scope.sortByColumn = function(sortBycolumn) {
				$scope.reset();
				$scope.isReverseEnabled=!$scope.isReverseEnabled;
				$scope.columnToOrder = sortBycolumn;
				// $Filter - Standard Service
				$scope.processedList = $filter('orderBy')($scope.processedList,
						$scope.columnToOrder, $scope.isReverseEnabled);
				if ($scope.isReverseEnabled)
					{
					iconName = 'glyphicon glyphicon-chevron-up';					
					}
				else
					{
					iconName = 'glyphicon glyphicon-chevron-down';					
					}
				for (var i = 0; i < $scope.Header.length; i++) {
					if (sortBycolumn === $scope.Header[i]) {
						$scope.HeaderIcon[i] = iconName;
					} else {
						$scope.HeaderIcon[i] = '';
					}
				}
				
				$scope.pagination();
			};
			// Apply Default sort based on configuration
			$scope.sortByColumn($scope.defaultSortByColumn);

		});


/**
 * Apply dependence Injection for  '$scope', '$filter', 'searchListService'.
 * '$scope', '$filter' provided by AngularJs framework.
 * 'searchListService' is custom implementation. 
 */
serviceStatusTableCtrl.$inject = [ '$scope', '$filter', 'searchListService' ];



/*Get Dummy Data for Example*/
function getData() {
	return [ {
		ServiceId : 1,
		name : 'Authentication Service',
		status1 : 1,
		status2 : 0,
		status3 : 1,
		status4 : -1,
		status5 : -1
	}, {
		ServiceId : 2,
		name : 'Financial Service',
		status1 : 1,
		status2 : 0,
		status3 : -1,
		status4 : 0,
		status5 : 0
	}, {
		ServiceId : 3,
		name : 'New Account Creation',
		status1 : 1,
		status2 : 0,
		status3 : 1,
		status4 : 0,
		status5 : -1
	}, {
		ServiceId : 4,
		name : 'E Mail Service',
		status1 : -1,
		status2 : 0,
		status3 : -1,
		status4 : 0,
		status5 : -1
	}, {
		ServiceId : 5,
		name : 'SMS Service',
		status1 : 1,
		status2 : 0,
		status3 : 1,
		status4 : 0,
		status5 : 1
	}, {
		ServiceId : 6,
		name : 'Security Service',
		status1 : 1,
		status2 : 1,
		status3 : -1,
		status4 : 1,
		status5 : -1
	}, {
		ServiceId : 7,
		name : 'Id Providing Service',
		status1 : 1,
		status2 : 0,
		status3 : 1,
		status4 : 0,
		status5 : 1
	}, {
		ServiceId : 8,
		name : 'Validate Service',
		status1 : 1,
		status2 : 0,
		status3 : -1,
		status4 : -1,
		status5 : -1
	}, {
		ServiceId : 9,
		name : 'Update Data',
		status1 : 1,
		status2 : 0,
		status3 : -1,
		status4 : 0,
		status5 : -1
	}, {
		ServiceId :10,
		name : 'Data Mudulation Service',
		status1 : 1,
		status2 : 0,
		status3 : -1,
		status4 : 0,
		status5 : -1
	}, {
		ServiceId : 11,
		name : 'HR Account Serive',
		status1 : 1,
		status2 : 0,
		status3 : -1,
		status4 : 0,
		status5 : -1
	}, {
		ServiceId : 12,
		name : 'Purge Data Service',
		status1 : 1,
		status2 : 0,
		status3 : -1,
		status4 : 0,
		status5 : -1
	} ];
}

