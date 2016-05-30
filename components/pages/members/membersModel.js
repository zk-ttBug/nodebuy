"use strict";

var net = require("utils/net.js");

module.exports = {
	getMemberList: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "member.getall", params, function(resp) {
			succFunc && succFunc(resp);
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	},

	verifyUser: function(params, succFunc, failFunc) {
        net.request("post", "member.audit", params, function(resp) {
            succFunc && succFunc(resp);
        }, function(resp) {
            failFunc && failFunc(resp);
        });
    },

	removeUser: function(params, succFunc, failFunc) {
        net.request("post", "member.delete", params, function(resp) {
            succFunc && succFunc(resp);
        }, function(resp) {
            failFunc && failFunc(resp);
        });
    }
}