'use strict';

/**
 * 添加项目模块
 *
 * @class addpro
 * @constructor
 */

var tpl = __inline('addpro.tpl');
var port = require('util/port');

var addpro = Vue.extend({
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
    return new addpro({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}