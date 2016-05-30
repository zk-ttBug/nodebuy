"use strict";

var net = require("utils/net.js");

module.exports = {
	add: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "employee.create", params, function(resp) {
			succFunc && succFunc(resp);
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	} 
}