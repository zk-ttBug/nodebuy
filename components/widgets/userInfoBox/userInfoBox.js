"use strict";

var userInfoBoxModel = require("./userInfoBoxModel.js");
var permitConfig = require("config/permit-config.js");

var tpl = __inline("userInfoBox.tpl");

var dLoading = require("widgets/dLoading");

var boxEl = null;

function getLocalTime(nS) {     
    var time = parseInt(nS);
    var date = new Date(time);
    var result = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    return result;      
}  

var UserInfoBox = Vue.extend({
	template: tpl,

	ready: function() {
		this.checkPermit();
		var self = this;
		$("#userInfoBoxBg").bind("click", function(evt) {
			if (evt.target.id == "userInfoBoxBg") {
				self.hide();
			}
		});
	},

	data: function() {
		return {
			removeUserCallback: null,
			hasRemovePermit: false,
			elId: "",
			userInfo: {}
		}
	},

	methods: {
		removeUser: function(idNo) {
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
            },  function(){
                self.confirmRemove(idNo);
            });
		},

		confirmRemove: function(idNo) {
			dLoading.show(this.elId);
			var self = this;
			userInfoBoxModel.removeUser({
	        	id_no: idNo
	        }, function(resp) {
	        	dLoading.hide();
	        	self.hide();
	        	toastr.success('删除成功!');
	        	self.removeUserCallback && self.removeUserCallback();
	        }, function() {
	        	dLoading.hide();
	        	toastr.error('删除失败!');
	        });
		},

		hide: function() {
			if (boxEl) {
				boxEl.$destroy(true);
				boxEl = null;
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
		    	if (permits[i] == permitConfig.removeMember) {
		    		this.hasRemovePermit = true;
		    		break ;
		    	}
		    }
		}
	}
});

module.exports = {
	show: function(elId, memberNo, removeUserCallback) {
		if (!boxEl) {
			dLoading.show(elId);
			userInfoBoxModel.getUserInfo({
	        	username: memberNo
	        }, function(resp) {
	        	dLoading.hide();
	        	boxEl = new UserInfoBox().$mount().$appendTo("#" + elId);
	        	boxEl.userInfo = resp.data;
	        	boxEl.userInfo.create_time = getLocalTime(boxEl.userInfo.create_time);
	        	boxEl.userInfo.sex = boxEl.userInfo.sex == 0? "女" : "男";
	        	boxEl.userInfo.type = boxEl.userInfo.type == 0? "普通会员" : "内部员工";
	        	boxEl.elId = elId;
	        	boxEl.removeUserCallback = removeUserCallback;
	        }, function() {
	        	dLoading.hide();
	        });
		}
	},

	hide: function() {
		if (boxEl) {
			boxEl.$destroy(true);
			boxEl = null;
		}
	}
}