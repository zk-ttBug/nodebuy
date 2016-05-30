<div id="groupTree" style="position: relative;">
	<div class="col s12">
	    <ul class="tabs tab-demo-active z-depth-1">
	        <li v-if="time_limit > 0 || !hasGameDelayPermit" class="tab col s3"><a class="white-text blue lighten-1 waves-effect waves-light">剩余时间：{{time_limit}} 小时</a>
	        </li>
	        <li v-if="time_limit <= 0 && hasGameDelayPermit" class="tab col s3"><a class="white-text blue lighten-1 waves-effect waves-light" v-on:click="delay();">延期当前局</a>
	        </li>
	    </ul>
	</div>
	<div class="canvas-wide dynamic-demo jtk-surface groupTree-box" id="canvas">
		<div v-for="node in members" class="window {{node.isSelf}}" id="{{node.id}}">
			<div v-if="node.row < 4" class="man-icon {{node.sex}}"><span class="man-name">{{node.content}}</span></div>
			<div v-if="node.row > 3" class="little-man-icon tooltipped {{node.sex}}" data-tooltip="{{node.content}}" data-position="top" data-delay="0"></div>
	    </div>
	</div>
</div>
