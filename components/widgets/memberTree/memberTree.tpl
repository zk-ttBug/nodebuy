<div id="memberTree" style="position: relative;">
	<div class="canvas-wide dynamic-demo jtk-surface memberTree-box" id="canvas">
		<div v-for="node in members" class="window tooltipped" id="{{node.id}}" data-position="top" data-delay="0" data-tooltip="{{node.content}}">
			<div v-if="node.row < 4" class="man-icon"></div>
			<div v-if="node.row > 3" class="little-man-icon"></div>
	    </div>
	</div>
</div>
