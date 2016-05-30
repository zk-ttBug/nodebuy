'use strict';

/**
 * 忘记密码
 *
 * @class forgetpwd
 * @constructor
 */

var tpl = __inline('register.tpl');

var register = Vue.extend({
    template: tpl,
    ready: function () {

    },
    methods:{

    }
});

var init = function () {
    return new register({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}