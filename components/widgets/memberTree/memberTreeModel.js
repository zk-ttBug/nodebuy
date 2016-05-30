"use strict";

var net = require("utils/net.js");

var memberNode = require("memberNode.js");

var calPos = function(totalWidth, width, num) {
	var one = Math.floor(totalWidth / num);
	var start = Math.floor((one - width) / 2)
	var arr = [];
	for (var i = 0; i < num; ++i) {
	    arr.push(start + i * one);
	}
	return arr;
}

var widthConf = {
	1: 200,
	2: 150,
	3: 100,
	4: 25
}

var colConf = {
	1: calPos(1010, widthConf[1], 1),
	2: calPos(1010, widthConf[2], 3),
	3: calPos(1010, widthConf[3], 9),
	4: calPos(1010, widthConf[4], 27)
}

var groupTreeModel = {
	getMembers: function(params, succFunc, failFunc) {
		var userId = params.member_id;

		var self = this;
		net.request("post", "member.getmemberlist", params, function(resp) {
        	var memberNodes = [];
        	var members = resp.data;

        	for (var i = 0, len = members.length; i < len; ++i) {
        		if (userId == members[i].id) {
        			members[i].recommend = 0;
        		}
        	}

			for (var i = 0, len = members.length; i < len; ++i) {
				var member = members[i];
				var nodeId = member.id;
				var gNode = new memberNode(nodeId);

				var row = self.getRowByNode(member, members);
				var col = self.getColByNode(member, members);

				var top = 50 + 150 * (row - 1);
				var left = colConf[row][col - 1];
				var width = widthConf[row];

				var children = [];
				for (var j = 0, jLen = members.length; j < jLen; ++j) {
	    			var oMember = members[j];
	    			if (oMember.recommend == nodeId) {
	    				children.push(oMember.id);
	    			}
	    		}

				gNode.update({
					pid: member.recommend,
					row: row,
					col: col,
	                left: left,
	                top: top,
	                width: width,
	                content: member.username, 
	                children: children,
	                endPoints: {
				        top: {
				            id: nodeId + "Top"
				        },
				        bottom: {
				            id: nodeId + "Bottom"
				        }
				    },
				});
				memberNodes.push(gNode);
			}

			succFunc && succFunc({
				data: {
					members: memberNodes
				}
			});
        }, function(resp) {
        	failFunc && failFunc(resp);
        });
	},

	getRowByNode: function(node, members) {
		var row = 1;
		var addRow = function(node) {
			var pid = node.recommend;
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

		var pid = node.recommend;
		var id = node.id;
		if (pid == 0) return col;
		
		var getColOrderByParent = function(node) {
			var col = 1;

			var pid = node.recommend;
			var id = node.id;

			if (pid == 0) return 1;

			var parent;
			for (var i = 0, len = members.length; i < len; ++i) {
				console.log(members[i].id, pid);
				if (members[i].id == pid) {
					parent = members[i];
					break ;
				}
			}
				
			var col = 1;
			for (var i = 0, len = members.length; i < len; ++i) {
				var tId = members[i].id;
				var tPid = members[i].recommend;
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