'use strict';

var tpl = __inline('changepwd.tpl');
var net = require('utils/net.js').request;

/**
 * 修改密码模块
 *
 * @class index
 * @constructor
 */
var changepwd = Vue.extend({
    template: tpl,
    
    data: function() {
        return {
            oldpwd: null,
            newpwd: null,
            newpwdconfirm: null
        } 
    },

    ready: function () {
    
    },

    methods: {
        onSubmit: function () {
            if (!this.oldpwd) {
                swal("更改失败", "请填写旧密码", "error");
                return;
            }
            if (!this.newpwd) {
                swal("更改失败", "请填写新密码", "error");
                return;
            }
            if (!this.newpwdconfirm) {
                swal("更改失败", "请填写确认密码", "error");
                return;
            }
            if (this.newpwd != this.newpwdconfirm) {
                swal("更改失败", "新旧密码不一致", "error");
                return;
            }
            var params = {
                password: this.oldpwd,
                newpassword: this.newpwd
            }
            net('post', 'user.changepassword', params, function (data) {
                localStorage.setItem("islog", false);
                localStorage.setItem("sid", "");
                localStorage.setItem("userinfo", "");
                swal("修改成功", "请用新密码重新的登录", "success");
                localStorage.setItem('islog', false);
                var url = 'http://' + location.host + '/#!/login';
                location.href = url;
            }, function (data) {
                swal("修改失败", "用户名或者密码错误", "error");
            });
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
    return new changepwd({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}