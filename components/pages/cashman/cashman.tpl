<section class="cashman-page">

    <!--<div class="input-field col s12">-->
            <!--<select id="cashman-filter" class="initialized">-->
                <!--<option value="" disabled="" selected="">选择过滤</option>-->
                <!--<option value="1" data-filter = 'all' v-on:click="onAll">全部</option>-->
                <!--<option value="2" data-filter = 'gid' v-on:click="onGroup">根据局</option>-->
                <!--<option value="3" data-filter = 'uid' v-on:click="onUser">根据用户</option>-->
            <!--</select></div>-->
    <!--</div>-->
    <div v-if="hasprofitView" class="row" id="cash-filter">
        <div class="input-field col s4">
            <input id="memberNo" type="text" v-model="memberNo">
            <label for="memberNo">会员编号</label>
        </div>
        <div class="input-field col s4">
            <input id="gameNo" type="text" v-model="gameNo">
            <label for="gameNo">局编号</label>
        </div>
        <div class="col s2 game-search-btn">
            <div class="waves-effect waves-light btn blue lighten-1" v-on:click="onCashFilter();" style="margin-top: 21px;">查询</div>
        </div>
    </div>

    <div class="card-panel" style="margin-top: 20px">
        <div id="jsGrid-basic"></div>
    </div>
</section>