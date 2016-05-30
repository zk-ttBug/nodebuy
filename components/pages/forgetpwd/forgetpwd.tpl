<div>
    <div id="forget-page" class="col s12 z-depth-4 card-panel">
        <form class="login-form">
            <div class="row">
                <div class="input-field col s12 center">
                    <p class="center login-form-text">NodeBuy | Forget Password</p>
                </div>
            </div>
            <div class="row margin">
                <div class="input-field col s12">
                    <i class="mdi-social-person-outline prefix"></i>
                    <input id="username" type="text">
                    <label for="username" class="center-align">Username</label>
                </div>
            </div>
            <div class="row margin">
                <div class="input-field col s12">
                    <i class="mdi-action-lock-outline prefix"></i>
                    <input id="password" type="password">
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="row margin">
                <div class="input-field col s12">
                    <i class="mdi-action-lock-outline prefix"></i>
                    <input id="newPassword" type="password">
                    <label for="newPassword">new Password</label>
                </div>
            </div>
            <!--<div class="row">-->
            <!--<div class="input-field col s12 m12 l12  login-text">-->
            <!--<input type="checkbox" id="remember-me" />-->
            <!--<label for="remember-me">Remember me</label>-->
            <!--</div>-->
            <!--</div>-->
            <div class="row">
                <div class="input-field col s12">
                    <a href="javascript:void(0)" class="btn waves-effect waves-light col s12 blue darken-1" v-on:click="onLogin">Sumbit</a>
                </div>
            </div>
        </form>
    </div>
</div>