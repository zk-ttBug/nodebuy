"use strict";

var net = require("utils/net.js");

module.exports = {
	getGroups: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "game.listall", params, function(resp) {
			succFunc && succFunc(resp);
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	} 
}