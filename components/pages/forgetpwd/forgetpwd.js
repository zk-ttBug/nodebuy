'use strict';

/**
 * 忘记密码
 *
 * @class forgetpwd
 * @constructor
 */

var tpl = __inline('forgetpwd.tpl');

var forgetpwd = Vue.extend({
    template: tpl,
    ready: function () {

    },
    methods:{

    }
});

var init = function () {
    return new forgetpwd({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}