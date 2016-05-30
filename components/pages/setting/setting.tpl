<section class="addmember-page">
    <div class="card-panel" style="margin-top: 20px">
        <!--add .right-alert to show messages right side-->
        <div class="row">
            <form id="setting" class="col s12 right-alert">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="max_layer_per_game" type="text" v-model="result.max_layer_per_game">
                        <label  class="{{cls}}" for="max_layer_per_game">每局的层次</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="max_person_per_node" type="text" v-model="result.max_person_per_node">
                        <label class="active" for="max_person_per_node">每个节点下的最大人数</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="time_limit_per_game" type="text" v-model="result.time_limit_per_game">
                        <label class="active" for="time_limit_per_game">每局的最大时限（小时）</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="max_gamecnt_per_hour" type="text" v-model="result.max_gamecnt_per_hour">
                        <label class="active" for="max_gamecnt_per_hour">每小时最大开局数量</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="time_limit_session" type="text" v-model="result.time_limit_session">
                        <label class="active" for="time_limit_session">会话过期时间（分钟）</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_1_earn" type="text" v-model="result.level_1_earn">
                        <label class="active" for="level_1_earn">每1级盈利</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_2_earn" type="text" v-model="result.level_2_earn">
                        <label class="active" for="level_2_earn">每2级盈利</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_3_earn" type="text" v-model="result.level_3_earn">
                        <label class="active" for="level_3_earn">每3级盈利</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_4_earn" type="text" v-model="result.level_4_earn">
                        <label class="active" for="level_4_earn">每4级盈利</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="capital_amount" type="text" v-model="result.capital_amount">
                        <label class="active" for="capital_amount">交纳的本金</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_1" type="text" v-model="result.level_1">
                        <label class="active" for="level_1">级别1的显示名称</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_2" type="text" v-model="result.level_2">
                        <label class="active" for="level_2">级别2的显示名称</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_3" type="text" v-model="result.level_3">
                        <label class="active" for="level_3">级别3的显示名称</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_4" type="text" v-model="result.level_4">
                        <label class="active" for="level_4">级别4的显示名称</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_5" type="text" v-model="result.level_5">
                        <label class="active" for="level_5">级别5的显示名称</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_6" type="text" v-model="result.level_6">
                        <label class="active" for="level_6">级别6的显示名称</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_5_earn" type="text" v-model="result.level_5_earn">
                        <label class="active" for="level_5_earn">第5级盈利</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="level_6_earn" type="text" v-model="result.level_6_earn">
                        <label class="active" for="level_6_earn">第6级盈利</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <div class="btn waves-effect waves-light right  blue darken-1" v-on:click="save();">提交</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>