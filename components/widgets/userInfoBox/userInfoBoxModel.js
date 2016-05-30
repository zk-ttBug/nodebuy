var net = require("utils/net.js");

var userInfoBoxModel = {
    getUserInfo: function(params, succFunc, failFunc) {
        net.request("post", "member.get", params, function(resp) {
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

module.exports = userInfoBoxModel;