"use strict";

var tpl = __inline("memberTree.tpl");
var memberTreeModel = require("memberTreeModel.js");
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
			members: []
		}
	},

	ready: function() {
        this.getRelationData();
	},

	methods: {
        getRelationData: function(memberNo) {
            dLoading.show();
            var self = this;
            var userInfo = localStorage.getItem("userinfo");
            try {
                userInfo = JSON.parse(userInfo);
            } catch (e) {
                console.log("parse json error");
                return ;
            }
            memberTreeModel.getMembers({
                member_id: memberNo? memberNo : userInfo.id,
                level: 3
            }, function(resp) {
                dLoading.hide();
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

            element.bind("click", function() {
                userInfoBox.show("memberTree");
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
        }
	},

    events: {
        getRelationData: function(memberNo) {
            this.getRelationData(memberNo);
        }
    }
});