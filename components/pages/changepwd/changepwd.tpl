<div class="card-panel" style="margin-top: 20px">
    <div class="row">
        <div class="input-field col s12">
            <input id="oldpwd" type="password" class="validate" v-model="oldpwd">
            <label for="oldpwd">旧密码</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
            <input id="newpwd" type="password" class="validate" v-model="newpwd">
            <label for="newpwd">新密码</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
            <input id="newpwdconfirm" type="password" class="validate" v-model="newpwdconfirm">
            <label for="newpwdconfirm">再次输入新密码</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
            <button v-on:click="onSubmit" class="btn waves-effect waves-light right blue darken-1">提交</button>
        </div>
    </div>
</div>