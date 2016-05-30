"use strict";

var net = require("utils/net.js");

module.exports = {
	getMemberId: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "user.check", params, function(resp) {
			succFunc && succFunc(resp);
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	},

	getCount: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "member.getrecommendcount", params, function(resp) {
			succFunc && succFunc(resp);
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	},

	getChildren: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "member.getrecommendlist", params, function(resp) {
			succFunc && succFunc(resp);
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	}
}