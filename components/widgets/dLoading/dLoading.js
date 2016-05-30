"use strict";

var tpl = __inline("dLoading.tpl");

var dLoadingEl = null;

var dLoading = Vue.extend({
	template: tpl,

	ready: function() {
		
	},

	methods: {
		
	}
});

module.exports = {
	show: function(id) {
		if (!dLoadingEl) {
			// var elId = "#" + id;
			var elId = "#page-main";
			dLoadingEl = new dLoading().$mount().$appendTo(elId);
		}
	},

	hide: function() {
		if (dLoadingEl) {
			dLoadingEl.$destroy(true);
			dLoadingEl = null;
		}
	}
}