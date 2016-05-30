'use strict';

/**
 * 控制台模块
 *
 * @class index
 * @constructor
 */

var tpl = __inline('dash.tpl');
var head = require('widgets/head');
var navi = require('widgets/navi');

var dash = Vue.extend({
    template: tpl,
    data:function(){
        return{
            result:{
                type:'big-content'
            }
        }
    },
    components:{
        "c-head":head(),
        "c-navi":navi()
    },
    ready: function () {
        var showmenu = localStorage.getItem('showMenu');
        if(showmenu === 'show'){
            this.result.type = 'small-content'
        }else{
            this.result.type = 'big-content'
        }
    },
    method: function () {
    }
});

var init = function () {
    return new dash({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}