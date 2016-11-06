/*
 Author:Kishoreclasses.com 
 This file is created in  AngularJs lab exercise for AngularJs Online Training Course.
*/
var heartbeatApp_services=angular.module('heartbeatApp.services', []);

heartbeatApp_services.service('searchListService', function() {

	this.getListAfterSearch = function(valLists, toSearch) {
		//http://underscorejs.org/#filter  to know about '_.filter
		return _.filter(valLists, function(i) {
			return searchUtil(i, toSearch);
		});
	};

	this.applyPagination = function(valLists, pageSize) {
		retVal = [];
		for (var i = 0; i < valLists.length; i++) {
			if (i % pageSize === 0) {
				retVal[Math.floor(i / pageSize)] = [ valLists[i] ];
			} else {
				retVal[Math.floor(i / pageSize)].push(valLists[i]);
			}
		}
		return retVal;
	};
	
	//Calculate current time 
	this.locallyTime = function() {
		var time =new Date(new Date()-(5*60*1000));//5mins
		time=time.toLocaleTimeString();		
		return time;
	};

});

function searchUtil(item, toSearch) {
    /* Search Text by name */
	return (item.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1) ? true : false;
}
