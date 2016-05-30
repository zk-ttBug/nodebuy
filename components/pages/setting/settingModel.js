"use strict";

var net = require("utils/net.js");

module.exports = {
	add: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "system.setting", params, function(resp) {
			succFunc && succFunc(resp);
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	},

	get: function(params, succFunc, failFunc){
		net.request("post", "system.getallsetting", params, function(resp) {
			succFunc && succFunc(resp);
		}, function(resp) {
			failFunc && failFunc(resp);
		});
	}
}