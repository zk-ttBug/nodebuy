module.exports = {
	"id": 1330395827,
	"state": 0,
	"msg": "成功",
	"data": {
		"time_limit": 0,
		"start_time": "2016-12-02 15:32:12",
		"members": (function() {
			var arr = [];
			for (var i = 1; i < 2; i++) {
				arr.push({
					"id": i,
					"id_no": i,
					"parent_member": 0,
					"username": "sykk" + 0,
					"sex": Math.random() > 0.5? 0 : 1
				})
			}
			for (var i = 2; i < 5; i++) {
				arr.push({
					"id": i,
					"id_no": i,
					"parent_member": 1,
					"username": "sykk" + i,
					"sex": Math.random() > 0.5? 0 : 1
				})
			}
			for (var i = 5; i < 14; i++) {
				arr.push({
					"id": i,
					"id_no": i,
					"parent_member": 2 + Math.floor((i - 5) / 3),
					"username": "sykk" + i,
					"sex": Math.random() > 0.5? 0 : 1
				})
			}
			for (var i = 14; i < 41; i++) {
				arr.push({
					"id": i,
					"id_no": i,
					"parent_member": 5 + Math.floor((i - 14) / 3),
					"username": "sykk" + i,
					"sex": Math.random() > 0.5? 0 : 1
				})
			}
			return arr;
		})()
	}
}