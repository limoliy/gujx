/**
 *
 *
 */
let res = wx.getSystemInfoSync();
let config = {
    appMode: res.platform == 'devtools' ? 'release' : 'release', //'release'-发行, 'debug'-开发调试
    servers: {
        'release': '',
        'debug': ''
    },
    checkTemplateId:'',//审核模板id
    picUrl:'',//图片地址
    version:'',//小程序版本
    BAIDU_MAP_API_GEO:'',//百度地图api
    APPID:'',//小程序appid
    APPSECRET:'',//小程序appsecret
    GET_ACCESS_TOKEN:'',//获取access_token
    WXAQRCODE:'',//获取二维码链接
}
export default config;
