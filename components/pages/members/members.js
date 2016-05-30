'use strict';

var tpl = __inline('members.tpl');
var thead = require('config/t-config');
var api = require('config/a-config');
var membersModel = require("./membersModel");
var permitConfig = require("config/permit-config.js");
var dLoading = require("widgets/dLoading");
        
var members = Vue.extend({
    data: function() {
        return {
            hasVerifyPermit: false,
            hasRemovePermit: false
        }
    },

    template: tpl,

    ready: function () {
        this.checkPermit();

        Vue.nextTick(function() {
            materialize();
            plugins();
        });

        var self = this;
        $("#memberStatus").bind("change", function(item) {
            self.refreshGrid();
        });

        var self = this;
        var tpls = {
            typeTpl: function(value, item) {
                var html = "";
                if (value == 0) {
                    html = "普通会员";
                } else if (value == 1) {
                    html = "内部员工";
                }
                return html;
            },

            verifyTpl: function(value, item) {
                var html = "";
                if (value == 0) {
                    html = "<a href='javascript:void(0);' idNo='" + item.id + "' style='color: #2196f3;' class='verify'>通过</a>";
                } else {
                    html = "<span style='color: green;'>已审核</span>";
                }
                return html;
            },

            sexTpl: function(value, item) {
                var html = "";
                if (value == 0) {
                    html = "<span style='color: green;'>女</span>";
                } else {
                    html = "<span style='color: green;'>男</span>";
                }
                return html;
            },

            operTpl: function(value, item) {
                var html = "";
                html = "<a href='javascript:void(0);' idNo='" + item.id_no + "' style='color: red;' class='remove'>删除</a>";
                return html;
            }
        }

        var fields = [
            {name: "id", type: "text", title: "会员编号", width: 100, align: "center"},
            {name: "username", type: "text", title: "用户名", width: 100, align: "center"},
            {name: "type", type: "text", title: "类型", itemTemplate: tpls.typeTpl, width: 100, align: "center"},
            {name: "phone", type: "text", title: "联系方式", width: 100, align: "center"},
            {name: "balance", type: "text", title: "帐户余额", width: 100, align: "center"},
            {name: "bonus", type: "text", title: "推广业绩余额", width: 150, align: "center"},
            {name: "level", type: "text", title: "用户等级", width: 100, align: "center"},
            {name: "create_time", type: "text", title: "创建时间", width: 100, align: "center"},
            {name: "id_no", type: "text", title: "身份证", width: 200, align: "center"},
            {name: "sex", type: "text", title: "性别", itemTemplate: tpls.sexTpl, width: 100, align: "center"},
            {name: "birthday", type: "text", title: "出生日期", width: 100, align: "center"},
            {name: "telephone", type: "text", title: "固定电话", width: 100, align: "center"},
            {name: "recommend", type: "text", title: "推荐人", width: 100, align: "center"},
            {name: "id_addr", type: "text", title: "身份证地址", width: 100, align: "center"},
            {name: "home_addr", type: "text", title: "家庭地址", width: 100, align: "center"},
            {name: "weixin", type: "text", title: "微信", width: 100, align: "center"},
            {name: "qq", type: "text", title: "qq号", width: 100, align: "center"},
            {name: "email", type: "text", title: "email", width: 200, align: "center"},
            {name: "bankcard", type: "text", title: "银行卡号", width: 200, align: "center"},
            {name: "bank_branch", type: "text", title: "详细开户行", width: 200, align: "center"},
            {name: "remark", type: "textarea", title: "备注", width: 100, align: "center"}
        ];
        
        if (this.hasRemovePermit) {
            fields.unshift({type: "text", title: "操作", itemTemplate: tpls.operTpl, width: 50, align: "center"});
        }

        if (this.hasVerifyPermit) {
            fields.unshift({name: "state", type: "text", title: "审核", itemTemplate: tpls.verifyTpl, width: 50, align: "center"});
        }

        $("#jsGrid-basic").jsGrid({
            autoload: true,
            controller: {
                loadData: function(filter) {
                    var deferred = $.Deferred();
                    membersModel.getMemberList({
                        status: $("#memberStatus").val()? $("#memberStatus").val() : 0
                        // pageIndex: filter.pageIndex, 
                        // pageSize: filter.pageSize
                    }, function(resp) {
                        deferred.resolve({
                            data: resp.data
                            // itemsCount: resp.data.pages.total
                        });
                    }, function() {
                        console.log("get member list error");
                    });
                    return deferred.promise();
                },
                updateItem: function(updatingClient) { 
                    console.log(updatingClient);
                }
            },
            width: "100%",
            height: "100%",
            heading: true,
            filtering: false,
            inserting: false,
            editing: false,
            selecting: false,
            sorting: false,
            paging: true,
            pageLoading: true,
            noDataContent: "无数据",
            pageIndex: 1,
            pageSize: 20,
            pageButtonCount: 15,
            pagePrevText: "上一页",
            pageNextText: "下一页",
            pageFirstText: "首页",
            pageLastText: "尾页",
            pageNavigatorNextText: "...",
            pageNavigatorPrevText: "...",
            loadMessage: "加载中，请稍后...",
            loadShading: true,
            updateOnResize: true,
            fields: fields
        });

        var self = this;
        $("#jsGrid-basic").bind("click", ".verify", function(event) {
            var targetDom = $(event.target);
            if (targetDom.hasClass("verify")) {
                var idNo = targetDom.attr("idNo");
                self.verifyMember(idNo);
            } else if (targetDom.hasClass("remove")) {
                var idNo = targetDom.attr("idNo");
                self.removeMember(idNo);
            }
        });
    },

    methods: {
        verifyMember: function(idNo) {
            var self = this;
            swal({
                title: "通过审核",
                text: "确认通过该会员审核吗?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: '确认通过',
                cancelButtonText: '取消',
                closeOnConfirm: true
            },  function(){
                self.confirmVerify(idNo);
            });
        },

        confirmVerify: function(idNo) {
            dLoading.show();
            membersModel.verifyUser({
                uid: idNo
            }, function() {
                dLoading.hide();
                $("#jsGrid-basic").jsGrid("loadData");
                swal("成功", "审核成功", "success");
            }, function() {
                dLoading.hide();
                toastr.error('审核失败!');
            });
        },

        removeMember: function(idNo) {
            var self = this;
            swal({
                title: "移除会员",
                text: "确认移除会员吗?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: '确认移除',
                cancelButtonText: '取消',
                closeOnConfirm: true
            },  function() {
                self.confirmRemove(idNo);
            });
        },

        confirmRemove: function(idNo) {
            dLoading.show();
            membersModel.removeUser({
                id_no: idNo
            }, function() {
                dLoading.hide();
                $("#jsGrid-basic").jsGrid("loadData");
                swal("成功", "删除成功", "success");
            }, function() {
                dLoading.hide();
                toastr.error('删除失败!');
            });
        },

        checkPermit: function() {
            var userInfo = localStorage.getItem("userinfo");
            try {
                userInfo = JSON.parse(userInfo);
            } catch (e) {
                console.log("parse json error");
                return ;
            }
            var permits = userInfo.access_module;
            for (var i = 0, len = permits.length; i < len; ++i) {
                if (permits[i] == permitConfig.removeMember) {
                    this.hasRemovePermit = true;
                }
                console.log(permits[i], permitConfig.verifyMember)
                if (permits[i] == permitConfig.verifyMember) {
                    this.hasVerifyPermit = true;                    
                }
            }
        },

        refreshGrid: function() {
            $("#jsGrid-basic").jsGrid("loadData", {
                status: $("#memberStatus").val()? $("#memberStatus").val() : 0
            })
        }
    }
});

var init = function () {
    return new members({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}