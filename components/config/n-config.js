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
            name: "商品管理",
            isChild: "true",
            icon: "mdi-action-shopping-basket",
            isAct: "",
            isNew: "false",
            children: [
                {
                    id: "addpro",
                    name: "添加商品",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/pro/addpro"
                }, {
                    id: "prolist",
                    name: "商品列表",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/pro/prolist"
                },
                {
                    id: "supplyman",
                    name: "进货管理",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/pro/supplyman"
                },
                {
                    id: "stockman",
                    name: "库存管理",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/pro/stockman"
                }

            ]
        },
        {
            id: "prosetting",
            name: "商品设置",
            isChild: "true",
            icon: "mdi-action-shop-two",
            isAct: "",
            isNew: "false",
            children: [
                {
                    id: "classified",
                    name: "分类列表",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/prosetting/classified"
                }, {
                    id: "brandlist",
                    name: "品牌列表",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/prosetting/brandlist"
                }, {
                    id: "types",
                    name: "类型列表",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/prosetting/types"
                }, {
                    id: "standards",
                    name: "规格列表",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/prosetting/standards"
                }
            ]
        },
        {
            id: "tagsman",
            name: "标签管理",
            isChild: "true",
            icon: "fa fa-tags",
            isAct: "",
            isNew: "false",
            children: [
                {
                    id: "tags",
                    name: "标签列表",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/tagsman/tags"
                }, {
                    id: "tagsprosetting",
                    name: "标签商品设置",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/tagsman/tagsprosetting"
                }, {
                    id: "tagsbrand",
                    name: "标签品牌设置",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/tagsman/tagsbrand"
                }
            ]
        },
        {
            id: "ordersman",
            name: "订单管理",
            isChild: "true",
            icon: "mdi-editor-attach-money",
            isAct: "",
            isNew: "false",
            children: [
                {
                    id: "orders",
                    name: "订单列表",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/ordersman/orders"
                }, {
                    id: "payments",
                    name: "待结算订单",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/ordersman/payments"
                }, {
                    id: "shipments",
                    name: "待发货订单",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/ordersman/shipments"
                },
                {
                    id: "receives",
                    name: "待收货订单",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/ordersman/receives"
                }
            ]
        },
        {
            id: "recordsman",
            name: "单据管理",
            isChild: "true",
            icon: "fa fa-pencil-square-o",
            isAct: "",
            isNew: "false",
            children: [
                {
                    id: "receivenote",
                    name: "收货单",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/recordsman/receivenote"
                },
                {
                    id: "stocknote",
                    name: "进货单",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/recordsman/stocknote"
                }
            ]
        },
        {
            id: "billman",
            name: "发票管理",
            isChild: "true",
            icon: "fa fa-money",
            isAct: "",
            isNew: "false",
            children: [{
                id: "billcontent",
                name: "发票内容管理",
                isChild: "false",
                icon: "",
                isAct: "",
                isNew: "false",
                url: "#!/dash/billman/billcontent"
            }]
        },
        {
            id: "accountman",
            name: "会员管理",
            isChild: "true",
            icon: "mdi-image-timer-auto",
            isAct: "",
            isNew: "false",
            children: [{
                id: "accounts",
                name: "会员列表",
                isChild: "false",
                icon: "",
                isAct: "",
                isNew: "false",
                url: "#!/dash/accountman/accounts"
            }]
        },
        {
            id: "sellsman",
            name: "促销管理",
            isChild: "true",
            icon: "mdi-social-mood",
            isAct: "",
            isNew: "false",
            children: [{
                id: "coupons",
                name: "优惠券列表",
                isChild: "false",
                icon: "",
                isAct: "",
                isNew: "false",
                url: "#!/dash/sellsman/coupons"
            }]
        },{
            id: "advertiseman",
            name: "广告管理",
            isChild: "true",
            icon: "mdi-image-crop-original",
            isAct: "",
            isNew: "false",
            children: [
                {
                    id: "advertisepos",
                    name: "广告位设置",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/advertiseman/advertisepos"
                },{
                    id: "advertises",
                    name: "广告列表",
                    isChild: "false",
                    icon: "",
                    isAct: "",
                    isNew: "false",
                    url: "#!/dash/advertiseman/advertises"
                }
            ]
        },
    ]
};