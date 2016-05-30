'use strict';

/**
 *   navi config
 */
module.exports = {
    default: 'dash/home', //配置默认显示页面
    defaultClass: 'fadeOutLeft animated',//默认样式
    user: {
        name: "游客",
        img: "http://7xawfk.com1.z0.glb.clouddn.com/profile_small.jpg",
        role: "admin"
    },
    menus: [
        {
            id: "home",
            name: "运营首页",
            isChild: "false",
            icon: "mdi-action-home",
            isAct: "",
            isNew: "false",
            url: "#!/dash/home",
            children: []
        },
        {
            id: "pro",
            name: "项目管理",
            isChild: "true",
            icon: "mdi-action-work",
            isAct: "",
            isNew: "false",
            children: [
                {
                    id: "addpro",
                    name: "添加项目",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/pro/addpro"
                },{
                    id: "prolist",
                    name: "项目列表",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/pro/prolist"
                }
            ]
        }
        //{
        //    id: "pas",
        //    name: "产品与服务",
        //    isChild: "true",
        //    icon: "mdi-action-wallet-travel",
        //    isAct: "",
        //    isNew: "false",
        //    children: [
        //        {
        //            id: "computers",
        //            name: "云服务器管理",
        //            isChild: "false",
        //            icon: "mdi-social-poll",
        //            isAct: "",
        //            isNew: "false",
        //            url: "#!/dash/pas/computers"
        //        },{
        //            id: "balancing",
        //            name: "服务负载管理",
        //            isChild: "false",
        //            icon: "mdi-image-flash-off",
        //            isAct: "",
        //            isNew: "false",
        //            url: "#!/dash/pas/balancing"
        //        }
        //    ]
        //}
    ]
};