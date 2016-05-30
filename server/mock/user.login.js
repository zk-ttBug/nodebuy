module.exports = {
    id: new Date().getTime(),
    state: 0,
    msg: "登录成功",
    data: {
        sid: "bafcdasdfid",
        "id_no": 9,
        timeout: 1800,
        wid: 123512,
        username: "李四",
        phone: "13570599876",
        balance: 23.35,
        bonus: 0.0,
        level: 1,
        type: 0,
        access_module: [
            "user:create",
            "record:member",
            "delete:member",
            // "game:delay",
            "member:audit",
            "member:recommend",
            "profit:view",
            "setting:profile"
        ]
    }
}
