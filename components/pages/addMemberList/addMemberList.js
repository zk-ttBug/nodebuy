'use strict';

var tpl = __inline('addMemberList.tpl');
var apiconfig = require("config/a-config.js");
var dLoading = require("widgets/dLoading");

var addMemberList = Vue.extend({
    template: tpl,

    ready: function () {
        
    },

    methods: {
        uploadFile: function() {
            dLoading.show();
            console.log(apiconfig.host + apiconfig.tpath +"/member/fileupload");
            var url = apiconfig.host + apiconfig.tpath +"/member/fileupload";
            $("#addMemberListForm").ajaxSubmit({
                type: "POST",//提交类型
                dataType: "json",//返回结果格式
                url: url,//请求地址
                data: {},//请求数据
                success: function (data) {//请求成功后的函数
                    if(data.state === 0){
                        dLoading.hide();
                        //$("#addMemberListForm").form("clear");
                        swal("成功!", "导入成功", "success");
                    }else{
                        console.log(data);
                        dLoading.hide();
                        //$("#addMemberListForm").form("clear");
                        swal("失败!", data.msg, "error");
                    }
                  // console.log(data);
                },
                error: function (data) {
                    alert(data.msg);
                },//请求失败的函数
                async: true
            });
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
    return new addMemberList({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}