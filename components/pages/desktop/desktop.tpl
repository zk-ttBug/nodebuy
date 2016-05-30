<section class="roledesc-page">
    <div v-if="userinfo.type == 0" class="card-panel" style="margin-top: 20px; padding: 0;">
        <div class="col s6 m6 l4">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="img/topbanner.jpg" style="width: 100%; height: 160px;" alt="user background">
            </div>
            <div class="card-content" style="color:#0091ea; font-size: 22px; font-weight: bolder; margin-top: 10px;">
                <div class="row">
                    <div class="col s6 m6 l4">
                        <span class="card-title activator">姓名: {{userinfo.username}}</span>
                    </div>
                    <div class="col s6 m6 l4">
                        <span>角色: {{userinfo.level}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="userinfo.type == 0" id="card-stats" class="seaction">
        <div class="row">
            <div class="col s12 m6 l4">
                <div class="card waves-effect" style="display: block;" v-on:click="onCheckRec">
                    <div class="card-content orange darken-1 white-text">
                        <p class="card-stats-title">推荐人数</p>
                        <h4 class="card-stats-number"><span id="recommendNum"></span>人</h4>
                        <p class="card-stats-compare"><span class="green-text text-lighten-5">我所推荐的人数</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col s12 m6 l4">
                <div class="card waves-effect" style="display: block;" v-on:click="onCheckCash">
                    <div class="card-content purple white-text">
                        <p class="card-stats-title">营收金额</p>
                        <h4 class="card-stats-number">￥<span id="usermoney"></span></h4>
                        <p class="card-stats-compare"><span class="purple-text text-lighten-5">在草根平台总收入</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col s12 m6 l4">
                <div class="card waves-effect" style="display: block;" v-on:click="onCheckGame">
                    <div class="card-content red lighten-1 white-text">
                        <p class="card-stats-title">所在局</p>
                        <h4 class="card-stats-number">{{position}}</h4>
                        <p class="card-stats-compare"><span class="blue-grey-text text-lighten-5">我所在局的位置</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="userinfo.type == 0" class="card-panel" style="margin-top: 20px">
        <c-gourp-tree></c-gourp-tree>
    </div>
    <div class="card-panel" style="margin-top: 20px">
        <table>
            <thead>
            <tr>
                <th data-field="id">角色</th>
                <th data-field="name">描述</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>系统管理员</td>
                <td>负责系统组局配置信息的维护及查看查询所有局关系等</td>
            </tr>
            <tr>
                <td>会员审核员</td>
                <td>负责收入会员本金，清算会员退出费用，并且核验是否通过会员，查询局资金情况</td>
            </tr>
            <tr>
                <td>会员</td>
                <td>负责自己的信息维护，登陆及录入新会员资料</td>
            </tr>
            <tr>
                <td>业务经理</td>
                <td>人工干预组局，查看他所在局的关系，查看被他推荐人的局的关系（4代[以推荐关系]内关系）</td>
            </tr>
            </tbody>
        </table>
    </div>
</section>