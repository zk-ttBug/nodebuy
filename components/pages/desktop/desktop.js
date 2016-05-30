'use strict';

var tpl = __inline('desktop.tpl');
var groupTree = require("widgets/groupTree");
var countUp = require("utils/countUp").countUp;
var levelConf = require("config/l-config");
var desktopModel = require("./desktopModel");

var desktop = Vue.extend({
    template: tpl,
    data: function() {
        var userinfo = {};
        var userStr = localStorage.getItem('userinfo');
        if(userStr){
            userinfo = JSON.parse(userStr);
        }
        userinfo.level = levelConf[userinfo.level];
        return {
            userinfo: userinfo,
            position: "",
            gameNo: 0
        }
    },
    
    ready: function () {
        console.log(this.userinfo.type);
        if (this.userinfo.type == 0) {
            var options = {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            };

            //desktopModel.getCount({
            //    recommend: this.userinfo.id
            //}, function(resp) {
            //    var floors = resp.data;
            //    var amount;
            //    if (floors && floors[0]) {
            //        amount = floors[0].amount;
            //    }
            //    var count = new countUp("recommendNum", 0, amount, 0, 2, options);
            //    count.start();
            //}, function(resp) {
            //    console.log("get recommend num fail");
            //    var count = new countUp("recommendNum", 0, 0, 0, 2, options);
            //    count.start();
            //});

            var count = new countUp("usermoney", 0, this.userinfo.bonus, 2, 2, options);
            count.start();

            this.position = "第一阶段|第二局";

            this.$broadcast("getGroupsData", 1);
        }
    },
    
    components: {
        "c-gourp-tree": groupTree
    },

    methods : {
        onCheckRec:function(){
            setTimeout(function(){
                location.href = '#!/dash/membership/memRelations';
            }, 500)
        },

        onCheckCash:function(){
            setTimeout(function(){
                location.href = '#!/dash/cashman';
            }, 500)
        },

        onCheckGame:function(){
            setTimeout(function(){
                location.href = '#!/dash/scratch/game';
            }, 500)
        }
    }
});

var init = function () {
    return new desktop({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}