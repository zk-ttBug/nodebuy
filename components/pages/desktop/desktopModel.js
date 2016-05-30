"use strict";

var net = require("utils/net.js");

module.exports = {
	getCount: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "member.getrecommendcount", params, function(resp) {
			succFunc && succFunc(resp);
	    }, function(resp) {
	    	failFunc && failFunc(resp);
	    });
	}
}