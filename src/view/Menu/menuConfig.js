const menuList = [
    {
        title: '首页',
        key: '/home',
    },
    {
        title: '超市',
        key: '/market'
    },
    {
        title: '分析',
        key: '/singleAnalysis',
        children: [
            {
                title: '分析',
                key: '/singleAnalysis/single',
            },
            {
                title: '组合分析',
                key: '/singleAnalysis/group',
            },
        ]
    },
    {
        title: '组合管理',
        key: '/managent',
        children: [
            {
                title: '组合跟踪',
                key: '/managent/choiceness',
            }
        ]
    },
    {
        title: '监测',
        key: '/monitor'
    },

];
export default menuList;
