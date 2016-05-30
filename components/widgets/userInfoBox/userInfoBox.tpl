<div id="userInfoBoxBg" class="user-info-box-bg">
	<div id="profile-card" class="card g-node-card">
	    <div class="card-image waves-effect waves-block waves-light">
	        <div class="g-node-head-img"></div>
	    </div>
	    <div class="card-content">
	        <a class="btn-floating activator btn-move-up waves-effect waves-light darken-2 right blue lighten-1" style="padding-left: 6px;">更多</a>
	        <span class="card-title activator grey-text text-darken-4">{{userInfo.username}}</span>
	        <p>会员编号：{{userInfo.id}}</p>
	        <p>用户类型：{{userInfo.type}}</p>
	        <p>用户状态：{{userInfo.state}}</p>
	    </div>
	    <div v-if="hasRemovePermit" class="row">
    		<a class="card-title waves-effect waves-light btn red col s12 l12" v-on:click="removeUser(userInfo.id_no);">移除</a>
    	</div>
	    <div class="card-reveal" style="padding: 0px;">
    		<a class="card-title waves-effect waves-light btn blue lighten-1" style="    width: 100%; margin-bottom: 20px;">返回</a>
	        <p>电话：{{userInfo.phone}}</p>
	        <p>账户余额：{{userInfo.balance}}</p>
	        <p>推广业绩余额：{{userInfo.bonus}}</p>
	        <p>用户等级：{{userInfo.level}}</p>
	        <p>创建时间：{{userInfo.create_time}}</p>
	        <p>性别：{{userInfo.sex}}</p>
	        <p>出生日期：{{userInfo.birthday}}</p>
	        <p>固定电话：{{userInfo.telephone}}</p>
	        <p>推荐人：{{userInfo.recommend}}</p>
	        <p>身份证：{{userInfo.id_no}}</p>
	        <p>身份证地址：{{userInfo.id_addr}}</p>
	        <p>家庭地址：{{userInfo.home_addr}}</p>
	        <p>微信：{{userInfo.weixin}}</p>
	        <p>qq：{{userInfo.qq}}</p>
	        <p>email：{{userInfo.email}}</p>
	        <p>微银行卡号：{{userInfo.bankcard}}</p>
	        <p>详细开户行：{{userInfo.bank_branch}}</p>
	        <p>备注：{{userInfo.remark}}</p>
	    </div>
	</div>
</div>