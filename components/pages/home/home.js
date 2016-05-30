'use strict';

/**
 * 运营后台首页
 *
 * @class home
 * @constructor
 */

var tpl = __inline('home.tpl');
var port = require('util/port');

var home = Vue.extend({
    template: tpl,
    data: function () {
        return {
            data: {
                crumbdata: {},
                list: []
            }
        }
    },
    ready: function () {

    },
    method: function () {

    }
});

var init = function () {
    return new home({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}