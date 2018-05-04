export default (() => {
  window.gconfig = {};
  +(function (global) {
    // 本地开发打开的路径以及端口
    global.linkUrl = 'http://192.168.0.121:1111';
    if (process.env.NODE_ENV === 'production') { // 生产环境用不同的接口地址
      global.linkUrl = 'http://192.168.0.121:3000';
    }
    // 系统一二级菜单
    global.nav = [
      {
        id: 600110230,
        name: '功能列表',
        icon: 'book',
        url: '',
        children: [
          {
            id: 600110232, name: '表格', url: 'table', icon: 'user',
          },
          {
            id: 600110233, name: '图表', url: 'echarts', icon: 'area-chart',
          }
        ],
      },
      {
        id: 600110240,
        name: '查询中心',
        icon: 'book',
        url: '',
        children: [
          {
            id: 600110241, name: '人员查询', url: 'staff', icon: 'user',
          },
          {
            id: 600110242, name: '工程查询', url: 'eng', icon: 'area-chart',
          }
        ],
      }
    ];
  }(window.gconfig));
})();

export const prefix = global.gconfig.linkUrl;
export const suffix = '.json';
export const timeout = 6000;
