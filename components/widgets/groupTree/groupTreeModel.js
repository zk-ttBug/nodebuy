"use strict";

var net = require("utils/net.js");

var groupNode = require("groupNode.js");

var calPos = function(totalWidth, width, num, floor) {
	var one = Math.round(totalWidth / num);
	var arr = [];
	if (colConf[floor - 1]) {
		for (var i = 0; i < num; ++i) {
			if (i % 3 == 0) {
				var last = floor - 1;
				var middle = colConf[last][i / 3] + widthConf[last] / 2;
				var buffer = one + width / 2;
				var start = middle - buffer;
				for (var j = 0; j < 3; ++j) {
				    arr.push(start + j * one);
				}
			}
		}
	} else {
		arr.push(Math.round((one - width) / 2));
	}
	return arr;
}

var widthConf = {
	1: 200,
	2: 150,
	3: 100,
	4: 25
}

var colConf = {};
colConf[1] = calPos(1010, widthConf[1], 1, 1);
colConf[2] = calPos(1010, widthConf[2], 3, 2);
colConf[3] = calPos(1010, widthConf[3], 9, 3);
colConf[4] = calPos(1010, widthConf[4], 27, 4);

var groupTreeModel = {
	getMembers: function(params, succFunc, failFunc) {
		var self = this;
		net.request("post", "game.get", params, function(resp) {
        	var groupNodes = [];

        	var start_time = resp.data.start_time;
        	var time_limit = resp.data.time_limit;
        	var members = resp.data.members;

        	for (var i = 0, len = members.length; i < len; ++i) {
        		var pId = members[i].parent_member;
        		var flag = true;
        		for (var j = 0, jLen = members.length; j < jLen; ++j) {
        			if (members[j].id == pId) {
        				flag = false;
        			}
        		}
        		if (flag) {
        			members[i].parent_member = 0;
        			break ;
        		}
        	}

			var userInfo = localStorage.getItem("userinfo");
			try {
				userInfo = JSON.parse(userInfo);
			} catch (e) {
				console.log("parse json error");
				return ;
			}

			for (var i = 0, len = members.length; i < len; ++i) {
				var member = members[i];
				var nodeId = member.id;
				var gNode = new groupNode(nodeId);

				var row = self.getRowByNode(member, members);
				var col = self.getColByNode(member, members);

				var top = 50 + 150 * (row - 1);
				var left = colConf[row][col - 1];
				var width = widthConf[row];

				var children = [];
				for (var j = 0, jLen = members.length; j < jLen; ++j) {
	    			var oMember = members[j];
	    			if (oMember.parent_member == nodeId) {
	    				children.push(oMember.id);
	    			}
	    		}

				gNode.update({
					pid: member.parent_member,
					memberNo: member.id_no,
					row: row,
					col: col,
	                left: left,
	                top: top,
	                width: width,
	                content: member.username, 
	                children: children,
	                isSelf: member.id_no == userInfo.id_no? "man-self" : "man-other",
	                sex: member.sex == 0? "female" : "male",
	                endPoints: {
				        top: {
				            id: nodeId + "Top"
				        },
				        bottom: {
				            id: nodeId + "Bottom"
				        }
				    },
				});
				groupNodes.push(gNode);
			}

			succFunc && succFunc({
				data: {
					start_time: start_time,
					time_limit: time_limit,
					members: groupNodes
				}
			});
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	},

	getRowByNode: function(node, members) {
		var row = 1;
		var addRow = function(node) {
			var pid = node.parent_member;
			for (var i = 0, len = members.length; i < len; ++i) {
				if (pid != 0 && members[i].id == pid) {
					++row;
					addRow(members[i]);
					break ;
				}
			}
		}
		addRow(node);
		return row;
	},

	getColByNode: function(node, members) {
		var col = 1;

		var pid = node.parent_member;
		var id = node.id;
		if (pid == 0) return col;
		
		var getColOrderByParent = function(node) {
			var col = 1;

			var pid = node.parent_member;
			var id = node.id;

			if (pid == 0) return 1;

			var parent;
			for (var i = 0, len = members.length; i < len; ++i) {
				if (members[i].id == pid) {
					parent = members[i];
					break ;
				}
			}
				
			var col = 1;
			for (var i = 0, len = members.length; i < len; ++i) {
				var tId = members[i].id;
				var tPid = members[i].parent_member;
				if (tPid == pid && tId != id) ++col;
				if (tId == id) {
					col += (getColOrderByParent(parent) - 1) * 3;
					break ;
				}
			}

			return col;
		}

		var col = getColOrderByParent(node);

		return col;
	}
} 

module.exports = groupTreeModel;