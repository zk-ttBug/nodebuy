'use strict';

var tpl = __inline('addmember.tpl');
toastr.options = {
    closeButton: false,
    progressBar: false,
    showMethod: 'slideDown',
    timeOut: 1000
};
var net = require('utils/net.js').request;
var dLoading = require("widgets/dLoading");

/**
 * 添加会员
 *
 * @class addmember
 * @constructor
 */
var addmember = Vue.extend({
    template: tpl,
    data:function(){
        return{
            isIdCard: false,
            isPhone: false,
            recommend: 0 
        }
    },
    ready: function () {
        $('#memberid').val('12312351234'); //初始化会员ID
        $('label[for=memberid]').attr('class','active');
    },
    methods: {
        onGo: function () {
            var params = {};
            params.username = $('#username').val();
            params.phone = $('#phonenumber').val();
            if (!params.username || params.username === '') {
                swal("添加失败", "请填写用户姓名", "error");
                return;
            }
            if (!params.phone || params.phone === '') {
                swal("添加失败", "请填写手机号", "error");
                return;
            }
            if (!this.recommend) {
                toastr.error('推荐人无效');
                return;
            }
            params.type = 0; // 0 普通会员
            params.level = 0;  // 0表示无等级
            var date = new Date();
            var datestr = date.getFullYear() + '-' + (date.getMonth()+1) +'-' + date.getDate() +' '+date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            params.create_time = datestr
            params.id_no = $('#idcard').val();
            var sexValue = $('[type="radio"]:checked + label').attr('for');
            if (sexValue == "gender_male") {
                params.sex = 1;
            } else {
                params.sex = 0;
            }
            params.birthday = $('#birthday').val();
            params.telephone = $('#telephone').val();
            params.recommend = this.recommend;
            params.id_addr = $('#id_addr').val();
            params.home_addr = $('#address').val();
            params.member_id = $('#memberid').val();
            params.weixin = $('#wechatId').val();
            params.qq = $('#qq').val();
            params.email = $('#email').val();
            params.bankcard = $('#creditcard').val();
            params.bank_branch = $('#bankdetail').val();
           // params.relationship = $('#relationship').val();
            params.remark = $('#desc').val();


            if (!params.id_addr || params.id_addr === '') {
                swal("添加失败", "请填写身份证地址", "error");
                return;
            }

            if (!params.home_addr || params.home_addr === '') {
                swal("添加失败", "请填写家庭地址", "error");
                return;
            }

            if (!params.bankcard || params.bankcard === '') {
                swal("添加失败", "请填写有效的银行卡号", "error");
                return;
            }

            if (!params.bank_branch || params.bank_branch === '') {
                swal("添加失败", "请填开卡银行", "error");
                return;
            }

            var idcartreg = /\d{17}[\d|x]|\d{15}/;
            var idresult = params.id_no.match(idcartreg);
            if(idresult === null){
                toastr.error('身份证号码失效！');
                return;
            }

            if(this.isIdCard || this.isPhone){
                toastr.error('该用户已存在！');
                return;
            }

            dLoading.show();
            net('post', 'user.create', params, function (data) {
                dLoading.hide();
                swal("成功!", "创建成功", "success");
                $("#addMemberForm").form("clear");
            }, function (data) {
                dLoading.hide();
                toastr.error('创建失败！');
            });
        },

        onIDblur:function(e){
            var _me =this;
            var val = $(e.srcElement).val().trim();
            if(val && val!==''){
                var params = {
                    username:val
                }
                net('post', 'user.check', params, function (data) {
                    _me.isIdCard = false;
                    toastr.success('改账号可使用');
                }, function (data) {
                    toastr.error('该用户已存在！');
                    _me.isIdCard = true;
                });
            }
        },

        onPhoneBlur:function(e){
            var _me =this;
            var val = $(e.srcElement).val().trim();
            if(val && val!==''){
                var params = {
                    username:val
                }
                net('post', 'user.check', params, function (data) {
                    _me.isPhone = false;
                    toastr.success('改账号可使用');
                }, function (data) {
                    toastr.error('该用户已存在！');
                    _me.isPhone = true;
                    //swal("登录失败", "用户名或者密码错误", "error");
                });
            }
        },

        onRecommendBlur: function(e) {
            var self = this;
            var val = $(e.srcElement).val().trim();
            if(val && val!=='') {
                var params = {
                    username: $('#tuijianren').val()
                }
                net('post', 'member.get', params, function(resp) {
                    self.recommend = resp.data.id;
                }, function (data) {
                    
                });
            }
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
    return new addmember({
        el: "#dash-content",
        replace: false
    })
}

module.exports = {
    init: init
}