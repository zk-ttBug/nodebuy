<section class="addmember-page">
    <div class="card-panel" style="margin-top: 20px">
        <!--add .right-alert to show messages right side-->
        <div class="row">
            <form id="addWorker" class="col s12 right-alert">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="username" type="text" v-model="username">
                        <label for="username">用户姓名</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="text" v-model="password">
                        <label for="password">密码</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="phone" type="text" v-model="phone">
                        <label for="phone">手机</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <select id="role" v-model="role">
                            <option disabled selected>角色</option>
                            <option value="">无</option>
                            <option value="1">管理员</option>
                            <option value="2">会员审核员</option>
                            <option value="3">业务经理</option>
                            <option value="4">普通会员</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="remark" class="materialize-textarea validate" length="120" v-model="remark"></textarea>
                        <label for="remark" class="">备注信息</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <div class="btn waves-effect waves-light right  blue darken-1" v-on:click="add();">提交</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>