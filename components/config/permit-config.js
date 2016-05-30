'use strict'

var permitConfig = {
    workerCreate: "user:create",
    passModify: "password:modify",
    memberCreate: "record:member",
    removeMember: "delete:member",
    verifyMember: "member:audit",
    gameDelay: "game:delay",
    recommend: "member:recommend",
   	profitView: "profit:view",
   	setting: "setting:profile"
}

module.exports = permitConfig;