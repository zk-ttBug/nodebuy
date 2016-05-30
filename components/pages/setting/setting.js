"use strict";

var tpl = __inline("setting.tpl");
var settingModel = require("./settingModel");
var dLoading = require("widgets/dLoading");

var setting = Vue.extend({
    template: tpl,
    data: function() {
        return {
            cls:'active',
            result:{
                max_layer_per_game: null,
                max_person_per_node: null,
                time_limit_per_game: null,
                max_gamecnt_per_hour:null,
                time_limit_session:null,
                level_1_earn:null,
                level_2_earn:null,
                level_3_earn:null,
                level_4_earn:null,
                capital_amount:null,
                level_1:null,
                level_2:null,
                level_3:null,
                level_4:null,
                level_5:null,
                level_6:null,
                level_5_earn:null,
                level_6_earn:null
            }
        }
    },
    ready: function () {
        var _me = this;
        settingModel.get({}, function(data) {
            _me.result = data.data;
            console.log(data);
            Vue.nextTick(function(){
                materialize();
            })

        }, function() {
            //toastr.error('');
            Vue.nextTick(function(){
                materialize();
            })
        })
    },
    methods: {
        save: function () {
            if (this.result.max_layer_per_game < 1 || this.result.max_layer_per_game>3 ) {
                swal("设置失败", "层数必须在 1 到 3 之间", "error");
                return;
            }

            if (this.result.max_layer_per_game < 1 || this.result.max_layer_per_game>3) {
                swal("设置失败", "节点数必须在 1 到 3 之间", "error");
                return;
            }

            if (this.result.time_limit_per_game < 1 || this.result.time_limit_per_game > 73) {
                swal("设置失败", "每局的最大时限（小时）在 1 到 72 之间", "error");
                return;
            }

            if (this.result.max_gamecnt_per_hour < 1 || this.result.max_gamecnt_per_hour > 7) {
                swal("设置失败", "每小时最大开局数量在 1 到 6 之间", "error");
                return;
            }

            if (this.result.time_limit_session < 1 || this.result.time_limit_session > 61) {
                swal("设置失败", "会话过期时间（分钟）在1 到 60之间", "error");
                return;
            }

            if(!this.result.level_1_earn){
                swal("设置失败", "请填写每1级盈利", "error");
                return;
            }

            if(!this.result.level_2_earn){
                swal("设置失败", "请填写每2级盈利", "error");
                return;
            }

            if(!this.result.level_3_earn){
                swal("设置失败", "请填写每3级盈利", "error");
                return;
            }

            if(!this.result.level_4_earn){
                swal("设置失败", "请填写每4级盈利", "error");
                return;
            }

            if(!this.result.capital_amount){
                swal("设置失败", "请填写交纳的本金", "error");
                return;
            }

            if(!this.result.level_1){
                swal("设置失败", "请填写级别1的显示名称", "error");
                return;
            }

            if(!this.result.level_2){
                swal("设置失败", "请填写级别2的显示名称", "error");
                return;
            }

            if(!this.result.level_3){
                swal("设置失败", "请填写级别3的显示名称", "error");
                return;
            }

            if(!this.result.level_4){
                swal("设置失败", "请填写级别4的显示名称", "error");
                return;
            }

            if(!this.result.level_5){
                swal("设置失败", "请填写级别5的显示名称", "error");
                return;
            }

            if(!this.result.level_6){
                swal("设置失败", "请填写级别6的显示名称", "error");
                return;
            }

            if(!this.result.level_5_earn){
                swal("设置失败", "请填写第5级盈利", "error");
                return;
            }

            if(!this.result.level_6_earn){
                swal("设置失败", "请填写第6级盈利", "error");
                return;
            }

            var options = this.result;

            var self = this;
            dLoading.show();
            settingModel.add(options, function() {
                dLoading.hide();
                swal("成功", "设置成功", "success");
            }, function() {
                $("#setting").form("clear");
                dLoading.hide();
                toastr.error('设置失败!');
            })
        }
    }
});

/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method init
 * @return {Object} Returns index page component
 */
var init = function () {
    return new setting({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}