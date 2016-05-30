"use strict";

var tpl = __inline("addworker.tpl");
var addworkerModel = require("./addworkerModel");
var dLoading = require("widgets/dLoading");

var addworker = Vue.extend({
    template: tpl,
    data: function() {
        return {
            username: null,
            password: null,
            phone: null,
            remark: null
        }
    },
    ready: function () {
        materialize();
        plugins();
    },
    methods: {
        add: function () {
            if (!this.username) {
                swal("添加失败", "请填写用户姓名", "error");
                return;
            }
            if (!this.password) {
                swal("添加失败", "请填写密码", "error");
                return;
            }
            if (!this.phone) {
                swal("添加失败", "请填写手机号码", "error");
                return;
            }
            if (!$("#role").val()) {
                swal("添加失败", "请选择角色", "error");
                return ;
            }

            var self = this;
            dLoading.show();
            addworkerModel.add({
                type: 1,
                username: this.username,
                password: this.password,
                phone: this.phone,
                role_id: $("#role").val(),
                remark: this.remark
            }, function() {
                $("#addWorker").form("clear");
                dLoading.hide();
                swal("成功!", "添加成功", "success");
            }, function() {
                $("#addWorker").form("clear");
                dLoading.hide();
                toastr.error('添加失败!');
            })
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
    return new addworker({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}