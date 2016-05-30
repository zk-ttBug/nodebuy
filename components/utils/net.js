'use strict';

var apiconfig = require("config/a-config.js");

var request = function(type, service, params, successFn, errorFn) {
    if (localStorage.getItem("sid")) {
        params.sid = localStorage.getItem("sid");
    }
    console.log("params is ", params);

    var dataObj = {
        id: new Date().getTime(),
        service: service,
        data: params
    }

    var objStr;
    try {
        objStr = JSON.stringify(dataObj);
    } catch (e) {
        console.log(e);
        return ;
    }
    $.ajax({
        type: type,
        url: apiconfig.host + apiconfig.path.service,
        data: {
            data: objStr
        },
        dataType: "json",
        cache: false,
        success: function(resp) {
            try {
                resp = JSON.parse(resp);
            } catch(e) {
                console.log("parse resp fail");
            }
            console.log(apiconfig.host + apiconfig.path.service, resp)
            if (resp && parseInt(resp.state) == 0) {
                if (typeof successFn === "function") {
                    successFn(resp);
                } else {
                    console.log("successFn undefine");
                }
            } else {
                console.log("fail: ", resp);
                if (false) {
                    localStorage.setItem("islog", false);
                    localStorage.setItem("sid", "");
                    localStorage.setItem("userinfo", "");
                    location.href = '#!/login';
                } else {
                    if (typeof errorFn === "function") {
                        errorFn(resp);
                    }
                }
               
            }
        },
        error: function(xhr, type) {
            if (typeof errorFn === "function") {
                errorFn();
            } else {
                console.log("errorFn undefine");
            }
        }
    });
}

module.exports = {
    request: request
}
