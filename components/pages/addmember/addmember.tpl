<section class="addmember-page">
    <div class="card-panel" style="margin-top: 20px">
        <!--add .right-alert to show messages right side-->
        <div class="row">
            <form id="addMemberForm" class="col s12 right-alert">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="username" type="text">
                        <label for="username">姓名（*）</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="idcard" type="text" v-on:blur = "onIDblur">
                        <label for="idcard">身份证（*）</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <label for="genter_select">性别（*）</label>
                        <p style="margin-top: 15px">
                            <input name="cgender" type="radio" id="gender_male" data-error=".errorTxt8" checked="checked">
                            <label for="gender_male">男性</label>
                        </p>
                        <p>
                            <input name="cgender" type="radio" id="gender_female" value="f">
                            <label for="gender_female">女性</label>
                        </p>
                        <div class="input-field">
                            <div class="errorTxt8"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="birthday" type="text">
                        <label for="birthday" >出生日期</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="phonenumber" type="text" v-on:blur = "onPhoneBlur">
                        <label for="phonenumber">手机号码（*）</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="telephone" type="text">
                        <label for="telephone">固定电话</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="tuijianren" type="text" v-on:blur = "onRecommendBlur">
                        <label for="tuijianren">推荐人手机或身份证（*）</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="id_addr" type="text">
                        <label for="id_addr">身份证地址（*）</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="address" type="text">
                        <label for="address">家庭住址（*）</label>
                    </div>
                </div>
                <!--<div class="row">-->
                    <!--<div class="input-field col s12">-->
                        <!--<input id="memberid" type="text" disabled >-->
                        <!--<label for="memberid">会员ID</label>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="row">
                    <div class="input-field col s12">
                        <input id="wechatId"  type="text">
                        <label for="wechatId">微信号</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="qq"  type="text">
                        <label for="qq">QQ号</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="text">
                        <label for="email">邮箱地址</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="creditcard" type="text">
                        <label for="creditcard">银行卡号（*）</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="bankdetail" type="text">
                        <label for="bankdetail">详细开户行（*）</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="desc" type="text">
                        <label for="desc">备注信息</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <div class="btn waves-effect waves-light right  blue darken-1" v-on:click="onGo">提交</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>