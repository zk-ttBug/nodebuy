"use strict";

var tpl = __inline("groupTree.tpl");
var groupTreeModel = require("groupTreeModel.js");
var permitConfig = require("config/permit-config.js");
var userInfoBox = require("widgets/userInfoBox");
var dLoading = require("widgets/dLoading");

module.exports = Vue.extend({
	template: tpl,

	data: function() {
		return {
            hasGameDelayPermit: false,
			plumbInstance: jsPlumb.getInstance({
			    DragOptions: { cursor: 'pointer', zIndex: 2000 },
			    Container: "canvas"
			}),
            start_time: "",
            time_limit: 0,
			members: [],
            groupNo: 0			
		}
	},

	ready: function() {
        this.checkPermit();
	},

	methods: {
        getGroupsData: function(groupNo) {
            if (!groupNo && !this.groupNo) return ;
            if (groupNo) this.groupNo = groupNo;
            dLoading.show();
            var self = this;
            groupTreeModel.getMembers({
                game_no: this.groupNo
            }, function(resp) {
                dLoading.hide();
                self.start_time = resp.data.start_time;
                self.time_limit = resp.data.time_limit;
                self.members = resp.data.members;
                Vue.nextTick(function() {
                    self.renderAllNodes();
                    materialize();
                });
            }, function() {
                dLoading.hide();
            });
        },

        renderAllNodes: function() {
        	for (var i = 0, len = this.members.length; i < len; ++i) {
        		var gNode = this.members[i];
        		this.renderNode(gNode);
        	}
	        this.connectNodes();
        },

        renderNode: function(gNode) {
        	var nodeId = gNode.id;

    		$("#" + nodeId).css("left", gNode.left + "px");
        	$("#" + nodeId).css("top", gNode.top + "px");
        	$("#" + nodeId).css("width", gNode.width + "px");

    		var element = $("#" + nodeId);

            var self = this;
            element.bind("click", function() {
                userInfoBox.show("groupTree", gNode.memberNo, function() {
                    self.getGroupsData();
                });
            });

            if (gNode.row > 1) {
                var topEndpoint = this.plumbInstance.addEndpoint(element, gNode.getEndpointSetting(), {anchor: "TopCenter"});
                var topId = nodeId + "Top";
                topEndpoint.setParameters({"id": topId, "type": "top"});
            }
            
            if (gNode.row < 4 && gNode.children && gNode.children.length > 0) {
                var bottomEndpoint = this.plumbInstance.addEndpoint(element, gNode.getEndpointSetting(), {anchor: "BottomCenter"});
                var bottomId = nodeId + "Bottom";
                bottomEndpoint.setParameters({"id": bottomId, "type": "bottom"});
            }

            gNode.update({
                endPoints: {
                    top: {
                        el: topEndpoint
                    },
                    bottom: {
                        el: bottomEndpoint
                    }
                }
            });
        },

        connectNodes: function() {
        	for (var i = 0, len = this.members.length; i < len; ++i) {
        		var giNode = this.members[i];
        		var srouceEndPoint = giNode.endPoints.bottom.el;
        		var targetEndPoints = [];

        		for (var j = 0, jLen = this.members.length; j < jLen; ++j) {
        			var gjNode = this.members[j];
        			if (gjNode.pid == giNode.id) {
        				targetEndPoints.push(gjNode.endPoints.top.el);
        			}
        		}

        		if (srouceEndPoint && targetEndPoints.length > 0) {
                    for (var t = 0, tLen = targetEndPoints.length; t < tLen; ++t) {
                        this.plumbInstance.connect({
                            source: srouceEndPoint,
                            target: targetEndPoints[t]
                        });
                    }
                }
        	}
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
                if (permits[i] == permitConfig.gameDelay) {
                    this.hasGameDelayPermit = true;
                    break ;
                }
            }
        }
	},

	events: {
		getGroupsData: function(groupNo) {
            this.getGroupsData(groupNo);
		}
	}
});