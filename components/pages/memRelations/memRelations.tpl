<div v-if="recommend" class="row">
    <div class="input-field col s4">
        <input id="memberNo" type="text" v-model="memberNo">
        <label for="memberNo">身份证号/手机号</label>
    </div>
    <div class="col s2 game-search-btn">
        <a class="waves-effect waves-light btn blue lighten-1" v-on:click="search();" style="margin-top: 21px;">查询</a>
    </div>
</div>
<section class="members-page">
	<div class="row">
	    <select id="childrenAmount" class="col s4">
	        <option v-for="item in children" value="{{item.value}}">{{item.content}}</option>
	    </select>
	</div>
    <div class="card-panel" style="margin-top: 20px">
        <a v-if="idNos.length > 1" class="waves-effect waves-light btn blue lighten-1" v-on:click="goBack();" style="margin-bottom: 8px;">返回</a>
        <div id="jsGrid-basic"></div>
    </div>
</section>
