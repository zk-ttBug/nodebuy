"use strict";

var tpl = __inline("groupBox.tpl");
var groupTree = require("widgets/groupTree");

var boxEl = null;

var GroupBox = Vue.extend({
	template: tpl,

	ready: function() {

	},

	components: {
        "c-gourp-tree": groupTree
    },

	data: function() {
		return {
			
		}
	}
});

module.exports = {
	show: function(groupNo) {
		if (!boxEl) {
			boxEl = new GroupBox().$mount().$appendTo("#page-main");
			$('#groupBox').openModal({
				complete: function() {
					if (boxEl) {
						boxEl.$destroy(true);
						boxEl = null;
					}
				}
			});
			boxEl.$broadcast("getGroupsData", groupNo);
		}
	}
}