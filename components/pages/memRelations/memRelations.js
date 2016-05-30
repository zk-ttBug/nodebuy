'use strict';

var tpl = __inline('memRelations.tpl');
var thead = require('config/t-config');
var api = require('config/a-config');
var memRelationsModel = require("./memRelationsModel");
var permitConfig = require("config/permit-config.js");
var dLoading = require("widgets/dLoading");
        
var memRelations = Vue.extend({
    data: function() {
        return {
            idNos: [],
            memberNo: null,
            userId: null,
            floor: null,
            children: [],
            recommend: false,
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

            checkTpl: function(value, item) {
                var html = "";
                html = "<a href='javascript:void(0);' idNo='" + item.id + "' style='color: #2196f3;' class='check'>"+ value +" 推荐的人</a>";
                return html;
            }
        }

        $("#jsGrid-basic").jsGrid({
            autoload: false,
            controller: {
                loadData: function(filter) {
                    var deferred = $.Deferred();
                    memRelationsModel.getChildren({
                        recommend: filter.recommend,
                        floor: filter.floor
                    }, function(resp) {
                        deferred.resolve({
                            data: resp.data
                            // itemsCount: resp.data.pages.total
                        });
                    }, function() {
                        console.log("get member list error");
                    });
                    return deferred.promise();
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
            paging: false,
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
            fields: [
                {name: "username", title: "用户名", itemTemplate: tpls.checkTpl, width: 100, align: "center"},
                {name: "phone", type: "text", title: "会员编号", width: 100, align: "center"},
                {name: "weixin", type: "text", title: "微信", width: 100, align: "center"},
                {name: "floorusercount", type: "text", title: "推荐人数", width: 100, align: "center"}
            ]
        });

        var self = this;
        $("#jsGrid-basic").bind("click", ".verify", function(event) {
            var targetDom = $(event.target);
            if (targetDom.hasClass("check")) {
                var idNo = targetDom.attr("idNo");
                self.idNos.push(idNo);
                self.getChildren(idNo, 1);
            }
        });

        var userInfo = localStorage.getItem("userinfo");
        try {
            userInfo = JSON.parse(userInfo);
        } catch (e) {
            console.log("parse json error");
            return ;
        }
        this.getCount(userInfo.id);
    },

    methods: {
        setSearchInfo: function(userId, floor) {
            this.floor = floor;
            this.userId = userId;
            this.idNos = [];
            this.idNos.push(this.userId);
        },

        goBack: function() {
            if (this.idNos.length > 1) {
                this.idNos.pop();
                var idNo = this.idNos[this.idNos.length - 1];
                if (idNo == this.userId) {
                    this.getChildren(this.userId, this.floor);
                } else {
                    this.getChildren(idNo, 1);
                }
            } else {
                toastr.error('已到根部');
            }
        },

        search: function() {
            var self = this;
            memRelationsModel.getMemberId({
                username: this.memberNo
            }, function(resp) {
                toastr.error('不存在该用户');
            }, function(resp) {
                self.getCount(resp.data.id);
            })
        },

        getCount: function(idNo) {
            var self = this;
            memRelationsModel.getCount({
                recommend: idNo
            }, function(resp) {
                self.children = [];

                var floors = resp.data;
                for (var i = 0, len = floors.length; i < len; ++i) {
                    var floor = floors[i];
                    self.children.push({
                        content: "第" + floor.floor + "代" + "   " + "人数："  + floor.amount,
                        value: floor.floor
                    })
                }

                $("#childrenAmount").unbind("change");
                $("#childrenAmount").bind("change", function() {
                    self.setSearchInfo(idNo, $("#childrenAmount").val());
                    self.getChildren(idNo, $("#childrenAmount").val());
                });

                Vue.nextTick(function() {
                    materialize();
                    plugins();
                    self.setSearchInfo(idNo, 1);
                    self.getChildren(idNo, 1);
                });
            }, function(resp) {
                dLoading.hide();
            });
        },

        getChildren: function(idNo, floor) {
            $("#jsGrid-basic").jsGrid("loadData", {
                recommend: idNo,
                floor: floor
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
                if (permits[i] == permitConfig.recommend) {
                    this.recommend = true;
                }
            }
        }
    }
});

var init = function () {
    return new memRelations({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}