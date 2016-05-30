<div class="col s12v" style="margin-bottom: 10px;">
    <ul class="tabs tab-demo-active z-depth-1">
        <li class="tab col s3"><a class="waves-effect waves-light active" v-on:click="setStage(1);">第一阶段</a>
        </li>
        <li class="tab col s3"><a class="waves-effect waves-light" v-on:click="setStage(2);">第二阶段</a>
        </li>
    </ul>
</div>
<div class="row">
    <select id="gameStatus" class="col s4">
        <option disabled selected>进行中</option>
        <option value="1">进行中</option>
        <option value="2">过期局</option>
        <option value="3">延迟局</option>
        <option value="4">已完成</option>
    </select>
</div>
<div class="">
    <div v-for="row in groups" class="row">
        <div v-for="group in row" class="col s12 m6 l3">
            <div class="card">
                <a href="javascript: void(0);" v-on:click="showGroup(group.gid);">
                    <div class="card-content {{group.color}} white-text">
                        <p class="card-stats-title">还剩： {{group.time_limit}} 小时</p>
                        <h4 class="card-stats-number">节点 {{group.branch_count}} 人</h4>
                        <span class="card-stats-compare">最大层数：{{group.layer}} 层</span>
                        <span class="card-stats-compare"> || </span>
                        <span class="card-stats-compare">状态：{{group.status}} </span>
                    </div>
                    <div class="{{group.color}} darken-2">
                        <a class="activator waves-effect waves-light btn {{group.color}} darken-2" style="width: 100%;">详细信息</a>
                    </div>
                </a>
                <div class="card-reveal {{group.color}} white-text" style="padding: 0px;">
                    <a class="card-title waves-effect waves-light btn {{group.color}} darken-2" style="width: 100%; margin-bottom: 20px;">返回</a>
                    <p>编号：{{group.gid}}</p>
                    <p>状态：{{group.status}}</p>
                    <p>创建时间：{{group.create_time}}</p>
                    <p>延迟操作人：{{group.employee_no}}</p>
                    <p>备注：{{group.remark}}</p>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="clearfix pagination-layout">
        <div class="clear-float">
            <div class="fr">
                <ul id="pagingPannel" class="vui-pagination">
                    <li v-for="pItem in pages" class="{{pItem.active}}"><a id="game{{pItem.key}}" href="javascript:void(0);" v-on:click="gotoPage(pItem.key);">{{pItem.value}}</a></li>
                </ul>
            </div>
        </div>
    </div> -->
</div>