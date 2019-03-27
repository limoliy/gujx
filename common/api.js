//let app = getApp();
import config from './config/';
let host = '';
let XDEBUG_SURFIX = '';
if(config.appMode == 'debug') {
    XDEBUG_SURFIX = "XDEBUG_SESSION_START=16169";
}
host = config.servers[config.appMode];
let tryingLogin = false;
import wepy from 'wepy';
export default  {
    HOST: host,
    API_ROOT: host + '/api/wxapp_vo/',
    API_VERSION: '1.0.0',
    async post(options) {
        options.method = 'POST';
        let res = await this.request(options);
        return res;
    },
    async get(options) {
        options.method = 'GET';
        let res = await this.request(options);
        return res;
    },
    async delete(options) {
        options.method = 'DELETE';
        let res = await this.request(options);
        return res;
    },
    async put(options) {
        options.method = 'PUT';
        let res = await this.request(options);
        return res;
    },
    /**
     * 请求本地服务器的路径
     * @param options
     * @returns {Promise.<boolean>}
     */
    async request(options) {
        let apiRoot = this.API_ROOT;
        let token = '';
        try {
            token = wx.getStorageSync('token')
        } catch (e) {

        }
        let requireLogin =  !!(typeof options.login == 'undefined' || options.login == true);
        //判断原有路径是否存在?&字符，进行处理
        let str = '';
        if (options.url.indexOf('?')) {
            str = '?';
        } else if (options.url.indexOf('&')) {
            str = '&';
        }
        //附加debug参数
        let suffix = XDEBUG_SURFIX > '' ? str + XDEBUG_SURFIX : '';
        let res = null;
        let result;
        let url = '';
        //判断以/开头的路径和普通原始路径，来请求
        if(options.isOuterSite){
            url = options.url;
        }else{
            url = (options.url.startsWith('/') ? host : apiRoot ) + options.url + suffix;
        }
        //let debugPrefix = 'request.url=' + url;
        //let content = JSON.stringify(options);
        //若网络连接失败则重新连接三次
        let i = 0;
        let success = false;
        do{
            try {
                res = await wepy.request({
                    //拼接url地址
                    url: url,
                    // url: apiRoot + options.url,
                    data: options.data,
                    method: options.method || 'POST',
                    header: {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'XX-Token': token,
                        'XX-Device-Type': 'wxapp',
                        'XX-Api-Version': this.API_VERSION,
                        'XX-Wxapp-AppId': '',//小程序appid
                    }
                });
                success = true;
            } catch (e) {
                /*let errMsg = e.errMsg;
                if(errMsg.indexOf('request:fail') > -1){
                    errMsg = '服务器请求失败，请检查网络连接';
                }
                res = {
                    data: {
                        code: 0,
                        msg: errMsg
                    }
                };
                i++;*/
            }
        }while((i < 3) && !success);
        if (res && res.data && res.data.code != 0) {
            //let data = res.data;
            //res.then((res) => {
            //判断返回信息状态为1
            if (res.data.code == 10001 && requireLogin) {
                if (!tryingLogin) {
                    tryingLogin = true;
                    let gottenUserInfo = wepy.getStorageSync('gottenUserInfo');
                    if (gottenUserInfo) {
                        await this.sleep(1000);
                        await this.login();
                    } else {
                        await this.login();
                    }
                    result = {code: 0, msg: 'request.login.ok'};
                }
                result = res.data;
            } else {
                result = res.data;
            }
        } else {
            result = res.data || {code: 0, msg:'error result'};
        }
        return result;
    },
    async login() {
        let result = null;
        let loginRes = await wepy.login();
        if (loginRes && loginRes.code) {
            try {
                wx.setStorageSync('gottenUserInfo', '1');
                let result = await wepy.getStorage({
                    key: 'wxUserInfo'
                });
                if(result.data.iv.indexOf(' ') != -1 || result.data.iv.indexOf('+') != -1){
                    await this.saveLog('loginCodeErr',result.data.iv);
                }
                try{
                    let referrerId = await wepy.getStorage({
                        key: 'referrerId',
                    });
                    let res = await this.post({
                        url: 'public/login',
                        data: {
                            code: loginRes.code,
                            encrypted_data: result.data.encryptedData,
                            iv: encodeURIComponent(result.data.iv),
                            raw_data: result.data.rawData,
                            signature: result.data.signature,
                            recommendId: referrerId.data
                        }
                    });
                    if (res && (res.code == 1)) {
                        wx.showToast({
                            title: '授权成功!',
                            icon: 'success',
                            duration: 1000
                        });
                        try {
                            wx.setStorageSync('login', '1');
                            wx.setStorageSync('token', res.data.token);
                            wx.setStorageSync('user', res.data.user);
                            wx.setStorageSync('userId', res.data.user.id);
                            wx.setStorageSync('sessionKey', res.data.sessionKey);
                            result = {code: res.code};
                        } catch (e) {
                            await api.showModal('错误',e.message);
                        }
                    } else {
                        result = {code: res.code, msg: res.msg};
                    }
                    return result;
                }catch(e){
                    let row = await this.post({
                        url: 'public/login',
                        data: {
                            code: loginRes.code,
                            encrypted_data: result.data.encryptedData,
                            iv: encodeURIComponent(result.data.iv),
                            raw_data: result.data.rawData,
                            signature: result.data.signature,
                        }
                    });
                    if (row && (row.code == 1)) {
                        wx.showToast({
                            title: '授权成功!',
                            icon: 'success',
                            duration: 1000
                        });
                        try {
                            wx.setStorageSync('login', '1');
                            wx.setStorageSync('token', row.data.token);
                            wx.setStorageSync('is_new', row.data.is_new);
                            wx.setStorageSync('user', row.data.user);
                            wx.setStorageSync('userId', row.data.user.id);
                            wx.setStorageSync('sessionKey', row.data.sessionKey);
                            result = {code: row.code};
                        } catch (e) {
                            wx.showModal({
                                title: '错误',
                                content: e.message,
                            });
                        }
                    } else {
                        result = {code: row.code, msg: row.msg};
                    }
                    return result;
                }
            } catch (e) {}
        } else {
            tryingLogin = false;
        }
        return false;
    },
    sleep(time) {
        return new Promise((resolve, reject) => setTimeout(() => resolve, time));
    },
    uploadFile(options) {

        options.url = this.API_ROOT + options.url;

        let token = this.getToken();

        let that = this;

        let oldSuccess  = options.success;
        options.success = function (res) {
            if(res.statusCode == 200) {
                let data = JSON.parse(res.data);
                if (data.code == 0 && data.data && data.data.code && data.data.code == 10001) {
                    that.login();
                } else {
                    oldSuccess(data);
                }
            } else {
                if (options.fail && (typeof options.fail) == 'function') {
                    options.fail(res);
                } else {
                    //TODO: 未定义 fail 时怎么处理？
                }
            }

        };

        options.header = {
            'Content-Type': 'multipart/form-data',
            'XX-Token': token,
            'XX-Device-Type': 'wxapp',
            'XX-Api-Version': this.API_VERSION
        };
        wx.uploadFile(options);
    },
    asyncUpload(options) {
        return new Promise((resolve, reject) => {
            options.success = (res) => {
                resolve(res);
            };
            options.fail = (res) => {
                reject(res);
            };
            try {
                this.uploadFile(options);
            } catch (e) {
                reject(false);
            }

        })
    },
    //自定义获取经纬度
    getLocation(options){
        return new Promise((resolve, reject) => {
            options.success = (res) => {
                resolve(res);
            };
            options.fail = (res) => {
                reject(res);
            };
            try {
                wx.getLocation(options);
            } catch (e) {
                reject(false);
            }
        })
    },
    //wepy.request
    requestUrl(options){
        return new Promise((resolve, reject) => {
            options.success = (res) => {
                resolve(res);
            };
            options.fail = (res) => {
                reject(res);
            };
            try {
                wx.request(options);
            } catch (e) {
                reject(false);
            }
        })
    },
    getToken() {
        let token = '';
        try {
            token = wx.getStorageSync('token')
        } catch (e) {
            // Do something when catch error
        }

        return token;
    },
    json2Form(json) {
        var str = []
        for (var p in json) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]))
        }
        return str.join("&")
    },
    timeFormat(second, fmt) {
        let mDate = new Date();
        mDate.setTime(second * 1000);
        return mDate.Format(fmt);
    },
    getCurrentPageUrl() {
        let currentPages = getCurrentPages();
        let currentPage  = currentPages.pop();
        let page         = currentPage['__route__'];
        let pageParams   = [];

        if (currentPage.params) {
            for (let key in currentPage.params) {
                pageParams.push(key + "=" + currentPage.params[key]);
            }
        }

        if (pageParams.length > 0) {
            page = page + '?' + pageParams.join("&");
        }

        return page;
    },
    /**
     *
     * @param itemKey
     * @param newItems
     * @param formatCallback
     * @param replace
     * @param listKey
     * @returns {Array}
     */
    updatePageList(itemKey, newItems, formatCallback, replace, listKey) {
        let page = this.getCurrentPageUrl();

        return this.updatePageListByPage(page, itemKey, newItems, formatCallback, replace, listKey);
    },
    /**
     *
     * @param page
     * @param itemKey
     * @param newItems
     * @param formatCallback
     * @param replace
     * @param listKey
     * @returns {Array}
     */
    updatePageListByPage(page, itemKey, newItems, formatCallback, replace, listKey) {
        listKey = listKey ? listKey : 'list';

        if (!app.pagesData.hasOwnProperty(page)) {
            app.pagesData[page] = {};
        }

        if (!app.pagesData[page][listKey] || replace) {
            app.pagesData[page][listKey] = {};
        }

        if (newItems) {
            newItems.forEach(item => {
                let uniqueValue = '_' + item[itemKey];
                if (formatCallback && typeof formatCallback == "function") {
                    item = formatCallback(item);
                }
                app.pagesData[page][listKey][uniqueValue] = item;
            });
        }


        let list = [];

        for (let key in app.pagesData[page][listKey]) {
            list.push(app.pagesData[page][listKey][key]);
        }

        return list;
    },
    /**
     *
     * @param key
     * @param newItem
     * @param listKey
     * @returns {*|Array}
     */
    updatePageListItem(key, newItem, formatCallback, listKey) {
        let page = this.getCurrentPageUrl();

        return this.updatePageListItemByPage(page, key, newItem, formatCallback, listKey);
    },
    /**
     *
     * @param page
     * @param key
     * @param newItem
     * @param listKey
     * @returns {Array}
     */
    updatePageListItemByPage(page, key, newItem, formatCallback, listKey) {
        listKey = listKey ? listKey : 'list';

        if (!app.pagesData.hasOwnProperty(page)) {
            app.pagesData[page] = {};
        }

        if (!app.pagesData[page][listKey]) {
            app.pagesData[page][listKey] = {};
        }

        if (formatCallback && typeof formatCallback == "function") {
            newItem = formatCallback(newItem);
        }

        key = '_' + key;

        app.pagesData[page][listKey][key] = Object.assign(app.pagesData[page][listKey][key], newItem);


        let list = [];

        for (let key in app.pagesData[page][listKey]) {
            list.push(app.pagesData[page][listKey][key]);
        }

        return list;
    },
    /**
     *
     * @param key
     * @param listKey
     * @returns {*|Array}
     */
    deletePageListItem(key, listKey) {
        let page = this.getCurrentPageUrl();

        return this.deletePageListItemByPage(page, key, listKey);
    },
    /**
     *
     * @param page
     * @param key
     * @param listKey
     * @returns {Array}
     */
    deletePageListItemByPage(page, key, listKey) {
        listKey = listKey ? listKey : 'list';

        if (!app.pagesData.hasOwnProperty(page)) {
            app.pagesData[page] = {};
        }

        if (!app.pagesData[page][listKey]) {
            app.pagesData[page][listKey] = {};
        }

        key = '_' + key;

        delete app.pagesData[page][listKey][key];


        let list = [];

        for (let key in app.pagesData[page][listKey]) {
            list.push(app.pagesData[page][listKey][key]);
        }

        return list;
    },
    pageNeedUpdate(page, needUpdate) {
        app.pagesNeedUpdate[page] = needUpdate;
    },
    getUploadUrl(file) {
        if (file && file.indexOf('http') === 0) {
            return file;
        }
        return this.HOST + '/upload/' + file;
    },
    async tryGetUserId() {
        //获取用户userId
        let userId = null;
        try {
            let id = await wepy.getStorage({key: 'userId'});
            if(id && id.data){
                userId = id.data;
            }
        } catch (e) {}
        return userId;
    },
    //封装时间戳
    getDate(time){
        let newDate = new Date();
        newDate.setTime(time * 1000);
        return newDate.toISOString().slice(0,10);
    },
    //写入调试日志
    async saveLog(action,content){
        let res = await this.post({
            url: 'public/saveLog',
            data: {
                action : action,
                value: content
            }
        });
        return (res && res.code === 1);
    },
    //模态框
    showToast(title,sign,duration){
        wx.showToast({
            title: title,
            icon: sign,
            duration: duration,
            mask: true
        });
    },
    showModal(title,content){
        wx.showModal({
            title: title,
            content: content,
            showCancel:false,
        });
    },
    //正则验证
    verifyData(type,data){
        switch (type) {
            //验证手机号
            case 'mobile':
                let reg = /^[1][3-9]{1}[\d]{9}$/;
                return reg.test(data);
                break;
            //验证身份证
            case 'idCardNum':
                reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                return reg.test(data);
                break;
            //验证车牌号
            case 'plateNum':
                reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/gi;
                return reg.test(data.replace(/ /gi,""));
                break;//验证车牌号
            //验证邮箱
            case 'email':
                reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
                return reg.test(data);
                break;
        }
    },
    //上传图片
    async uploadPicFile(pathFile, action){
        let result = {msg: '网络错误0'};
        //上传验证照片
        let uploadRes = await this.asyncUpload({
            url: 'upload/uploadFile',
            filePath: pathFile,
            name: 'file',
            header: {
                'content-type': 'multipart/form-data'
            },
            formData: {
                action: action//用于判断上传图片存储的文件夹目录名称
            }
        });
        if(uploadRes.code == 1){
            result = {code:1, url: uploadRes.data.url};
        }else{
            result = {code:0, msg: uploadRes.msg};
        }
        return result;
    },
    //时间补零
    async getTimeMsg(){
        let date = new Date();
        //年
        let Y = date.getFullYear();
        //月
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        //日
        let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        //时
        let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        //分
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        //秒
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        //拼接
        let msg = Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
        try{
            let res = await this.getLocation({
                type: 'wgs84',
            });
            return msg +  ' lng:' + res.longitude + ' ,lat:' + res.latitude;
        }catch(e){
            return msg;
        }
    },
    //用户访问情况分析
    async visitCounter(type,target,more){
        if(type == 'page'){
            let pages = getCurrentPages(); //获取加载的页面
            let currentPage = pages[pages.length-1]; //
            target = currentPage.route; //当前页面url
        }
        target = target || '';
        more = more || '';
        let userId = await this.tryGetUserId();
        await this.post({
            url: '/api/universal/visit_counter/stat',
            data: {
                userId: userId,
                deviceType: 'wxapp_vo',
                type: type,
                target: target,
                more: more
            }
        });
    }
};
