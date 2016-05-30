"use strict";

var net = require("utils/net.js");

module.exports = {
    getCashList: function(params, succFunc, failFunc) {
        net.request("post", "profit.listall", params, function(resp) {
            succFunc && succFunc(resp);
        }, function(resp) {
            failFunc && failFunc(resp);
        });
    }
}