'use strict';

var tpl = __inline('cashman.tpl');
var thead = require('config/t-config');
var api = require('config/a-config');
var cashmanModel = require("./cashmanModel");
var permitConfig = require("config/permit-config.js");

function typeTpl(value, item) {
    var html = "";
    if (value == 0) {
        html = "<span style='color: green'>可审批</span>";
    } else if (value == 1) {
        html = "<span style='color: red'>冻结</span>";
    }
    return html;
}

var cashman = Vue.extend({
    data: function () {
        return {
            hasprofitView: false
        }
    },
    template: tpl,
    ready: function () {
        Vue.nextTick(function () {
            materialize();
            plugins();
        });
        this.checkPermit();
        $("#jsGrid-basic").jsGrid({
            autoload: true,
            controller: {
                loadData: function (filter) {
                    var deferred = $.Deferred();
                    console.log(parseInt($('#memberNo').val()));
                    console.log(parseInt($('#gameNo').val()));
                    cashmanModel.getCashList({
                        uid: parseInt($('#memberNo').val()) || null,
                        gid: parseInt($('#gameNo').val()) || null
                        // pageIndex: filter.pageIndex,
                        // pageSize: filter.pageSize
                    }, function (resp) {
                        deferred.resolve({
                            data: resp.data
                            // itemsCount: resp.pages.total
                        });
                    }, function () {
                        console.log("get cash list error");
                    });
                    return deferred.promise();
                },
                updateItem: function (updatingClient) {
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
            fields: [
                {name: "show_title", type: "text", title: "局名称", width: 100, align: "center"},
                {name: "uname", type: "text", title: "用户名", width: 100, align: "center"},
                {name: "amount", type: "text", title: "发生金额", width: 100, align: "center"},
                {name: "status", type: "text", itemTemplate: typeTpl, title: "状态", width: 100, align: "center"},
                {name: "remark", type: "textarea", title: "备注", width: 100, align: "center"}
            ]
        });
    },
    methods:{
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
                if (permits[i] == permitConfig.profitView) {
                    this.hasprofitView = true;
                }
            }
        },
        onCashFilter : function(){
            $("#jsGrid-basic").jsGrid("loadData");
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
    return new cashman({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}