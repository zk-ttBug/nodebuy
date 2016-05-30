"use strict";

var net = require("utils/net.js");

module.exports = {
	getMemberList: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "user.getuserlist", params, function(resp) {
			succFunc && succFunc(resp);
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	},

	verifyUser: function(params, succFunc, failFunc) {
        net.request("post", "user.audit", params, function(resp) {
            succFunc && succFunc(resp);
        }, function(resp) {
            failFunc && failFunc(resp);
        });
    },

	removeUser: function(params, succFunc, failFunc) {
        net.request("post", "user.delete", params, function(resp) {
            succFunc && succFunc(resp);
        }, function(resp) {
            failFunc && failFunc(resp);
        });
    }
}