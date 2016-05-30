'use strict';

/**
 * 登录模块
 *
 * @class login
 * @constructor
 */

var tpl = __inline('login.tpl');

var login = Vue.extend({
    template: tpl,
    ready: function () {

    },
    methods:{
        onLogin:function(){
            setTimeout(function () {
                location.href = "/#!/dash/home";
            }, 200);
        }
    }
});

var init = function () {
    return new login({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}