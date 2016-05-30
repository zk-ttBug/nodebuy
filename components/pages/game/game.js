'use strict';

var tpl = __inline('game.tpl');
var groupBox = require("widgets/groupBox");
var gameModel = require("./gameModel");
var dLoading = require("widgets/dLoading");

function getLocalTime(nS) {     
    var time = parseInt(nS);
    var date = new Date(time);
    var result = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    return result;      
}  

var Game = Vue.extend({
    template: tpl,
    data:function(){
        return {
            timeoutId: null,
            statge: 1,
            tabColors: {
                "1": "darken-2",
                "2": ""
            }, 
            groups: [],
            pages: [],
            currentPageIndex: 1
        }
    },

    ready: function () {
        this.gotoPage(this.currentPageIndex);
        this.autoRefresh();
        materialize();
        plugins();

        var self = this;
        $("#gameStatus").unbind("change");
        $("#gameStatus").bind("change", function() {
            self.gotoPage(self.currentPageIndex);
        });
    },

    destroyed: function() {
        if (this.timeoutId) {
            console.log(this.timeoutId);
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    },

    methods: {
        autoRefresh: function() {
            var self = this;
            var refreshGroups = function() {
                gameModel.getGroups({
                    // pageIndex: self.currentPageIndex,
                    // pageSize: 20,
                    stage:  self.statge,
                    status: $("#gameStatus").val()? $("#gameStatus").val() : 1
                }, function(resp) {
                    var gameList = resp.data;
                    self.setGroups(gameList);
                    // var pages = resp.data.pages;
                    // self.setPageIndex(pages.current, pages.total);
                    self.timeoutId = setTimeout(function() {
                        refreshGroups();
                    }, 30000);
                }, function(resp) {
                    // console.log("get page " + pageIndex + " error");
                    self.timeoutId = setTimeout(function() {
                        refreshGroups();
                    }, 30000);
                });
            }
            refreshGroups();
        },

        gotoPage: function(pageIndex) {
            if (pageIndex == "next") {
                pageIndex = this.currentPageIndex + 1;
            } else if (pageIndex == "prev") {
                pageIndex = this.currentPageIndex - 1;
            } else if (typeof pageIndex != "number") {
                return ;
            }

            var self = this;
            dLoading.show();
            gameModel.getGroups({
                // pageIndex: pageIndex,
                // pageSize: 20,
                stage:  this.statge,
                status: $("#gameStatus").val()? $("#gameStatus").val() : 1
            }, function(resp) {
                dLoading.hide();
                var gameList = resp.data;
                self.setGroups(gameList);
                // var pages = resp.data.pages;
                // self.setPageIndex(pages.current, pages.total);
            }, function(resp) {
                dLoading.hide();
                // console.log("get page " + pageIndex + " error");
            });
        },

        showGroup: function(groupNo) {
            groupBox.show(groupNo);
        },

        setStage: function(stage) {
            this.stage = stage;
            this.tabColors = {
                1: "",
                2: ""
            }
            this.tabColors[stage] = "darken-2";
        },

        setGroups: function(gameList) {
            this.groups = [];

            var groups = [];
            for (var i = 0, len = gameList.length; i < len; ++i) {
                var group = gameList[i];

                var colorConf = {
                    "1": "green",
                    "2": "red",
                    "3": "purple",
                    "4": "grey"
                }

                var statusConf = {
                    "1": "进行中", 
                    "2": "过期局",
                    "3": "延迟局",
                    "4": "已完成"
                }

                groups.push({
                    gid: group.gid,
                    status: statusConf[group.status],
                    create_time: getLocalTime(group.create_time),
                    time_limit: group.time_limit,
                    branch_count: group.branch_count,
                    employee_no: group.employee_no,
                    layer: group.layer,
                    remark: group.remark,
                    color: colorConf[group.status]
                });
            }

            for (var i = 0, len = groups.length; i < len; ++i) {
                var index = Math.floor(i / 4);
                if (!this.groups[index]) {
                    this.groups[index] = [];
                }
                this.groups[index].push(groups[i]);
            }
        },

        setPageIndex: function(pageIndex, totalPage) {
            this.currentPageIndex = pageIndex;
            this.pages = [];
            if (totalPage <= 5) {
                for (var i = 1; i <= totalPage; ++i) {
                    this.pages.push({
                        key: i,
                        value: i
                    });
                }
            } else {
                if (pageIndex <= 3) { // 前3
                    this.pages = [
                        {key: 1, value: 1}, 
                        {key: 2, value: 2}, 
                        {key: 3, value: 3}, 
                        {key: "...", value: "..."}, 
                        {key: totalPage, value: totalPage}
                    ];
                    console.log(this.pages);0
                } else if (pageIndex >= totalPage - 2) { // 后3
                    this.pages = [
                        {key: 1,value: 1}, 
                        {key: "...",value: "..."}, 
                        {key: totalPage - 2,value: totalPage - 2}, 
                        {key: totalPage - 1,value: totalPage - 1}, 
                        {key: totalPage,value: totalPage}
                    ];
                } else { // 中间
                    this.pages = [
                        {key: 1, value: 1}, 
                        {key: 2, value: 2}, 
                        {key: 3, value: 3}, 
                        {key: "...", value: "..."}, 
                        {key: pageIndex, value: pageIndex}, 
                        {key: "...", value: "..."}, 
                        {key: totalPage - 2, value: totalPage - 2}, 
                        {key: totalPage - 1, value: totalPage - 1}, 
                        {key: totalPage, value: totalPage}
                    ];
                }

                if (pageIndex != 1) {
                    this.pages.unshift({
                        key: "prev",
                        value: "prev"
                    })
                }

                if (pageIndex != totalPage) {
                    this.pages.push({
                        key: "next",
                        value: "next"
                    })
                }

                for (var i = 0, len = this.pages.length; i < len; ++i) {
                    if (this.pages[i].key == pageIndex) {
                        this.pages[i].active = "vui-active";
                    }
                }
            }
        }
    }
});

var init = function () {
    return new Game({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}