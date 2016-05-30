'use strict';

/**
 * 项目列表
 *
 * @class prolist
 * @constructor
 */

var tpl = __inline('prolist.tpl');
var port = require('util/port');

var prolist = Vue.extend({
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
    return new prolist({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}