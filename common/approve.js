<style lang="less">
    @bg2: #01BE7A;
    @border: 1rpx solid #F0F0F0;
    .navbar3 {
        width: 100%;
        height: 100rpx;
        display: flex;
        flex-direction: row;
        font-size: 30rpx;
        background-color: #FFF;
        text-align: center;
        border-bottom: 1rpx solid #D9D9D9;
        .item3 {
            width:30%;
            height:50rpx;
            line-height:50rpx;
            border-radius:25rpx;
            color:#8C8C8C;
            border:1rpx solid #8C8C8C;
            margin-top:25rpx;
            margin-left:10%;
            margin-right:10%;
        }
        .active3 {
            background:#FF870B;
            color:white;
            border:1rpx solid white;
        }
    }
    .li {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        display: flex;
        flex-direction: row;
        font-size: 28rpx;
        border-bottom: 1rpx solid #D9D9D9;
        text-align:center;
        .t {
            margin-left: 40rpx;
        }
        .message{
            width: 400rpx;
            height: 80rpx;
            line-height:80rpx;
            overflow:hidden;
        }
        .b{
            width:150rpx;
            height:60rpx;
            line-height:60rpx;
            background-color: #e64340;
            color:#fff;
            font-size:28rpx;
            margin-top:10rpx;
        }
        .msg {
            width: 550rpx;
            height: 80rpx;
            line-height:80rpx;
            overflow:hidden;
        }
        .plate_number {
            margin: 25rpx 0 0 40rpx;
        }
        .lab{
             margin-left:50rpx;
             .radio{
                 transform:scale(0.6);
             }
             .color_text{
                 margin-left:-10rpx;
             }
         }
        .pickI{
            width:550rpx;
        }
        .city {
            margin: 25rpx 0 0 40rpx;
        }
        .vehicleNum {
            height:80rpx;
            width:550rpx;
            overflow: hidden;
        }
        .vehicleType {
            margin: 25rpx 0 0 40rpx;
        }
    }
    .btn {
        width: 90%;
        height: 80rpx;
        font-size: 40rpx;
        line-height: 80rpx;
        color: white;
        text-align: center;
        background-color: #53B4DF;
        border-radius: 10rpx;
        margin-top: 40rpx;
        margin-bottom:30rpx;
    }
    .text {
        font-size: 35rpx;
        margin: 10rpx 0 10rpx 20rpx;
    }
    .area {
        width: 94%;
        height: 400rpx;
        border: @border;
        color: #F0F0F0;
        font-size: 140rpx;
        margin-left: 20rpx;
        line-height: 400rpx;
        text-align: center;
    }
    .pic {
        width: 94%;
    }
    .a {
        height: 400rpx;
        overflow: scroll;
        margin-left: 20rpx;
        .delArea {
            display: flex;
            flex-direction: row;
            .del1 {
                width: 35rpx;
                height: 35rpx;
                margin: 20rpx 0 0 550rpx;
            }
            .text {
                font-size: 35rpx;
                color: #FC6140;
            }
        }
    }
    .big{
        width:100%;
        min-height:100rpx;
        margin-bottom:100rpx;
        .vehicleOnwerLi{
            width:90%;
            height:210rpx;
            margin-left:5%;
            margin-top:10rpx;
            border-radius:5rpx;
            background:white;
            display: flex;
            flex-direction: row;
            box-shadow:0 0 10rpx 5rpx #F0F0F0;
            .vehiclePic{
                width:33.3%;
                margin-left:30rpx;
                .picture{
                    width:100%;
                    height:150rpx;
                    border-radius:10rpx;
                    margin-top:50rpx;
                    margin-left:-15rpx;
                }
            }
            .vehicleText{
                width:66.6%;
                display: flex;
                flex-direction:column;
                margin-left:50rpx;
                font-size:27rpx;
                .title{
                    height:40rpx;
                    line-height:40rpx;
                    width:100rpx;
                    color:white;
                    background:#01BE7A;
                    margin-left:-50rpx;
                    border-top-left-radius: 5rpx;
                    text-align:center;
                    font-size:22rpx;
                }
                .num{
                    display: flex;
                    flex-direction:column;
                    height:110rpx;
                    .brand{
                        height:60rpx;
                        line-height:60rpx;
                        font-size:32rpx;
                        font-weight:bold;
                    }
                    .model{
                        height:50rpx;
                        line-height:40rpx;
                        color:#8B8EA4;
                    }
                }
                .vehicle{
                    height:90rpx;
                    line-height:90rpx;
                    display: flex;
                    flex-direction:row;
                    .name{
                        width:60%;
                        color:#01BE7A;
                        text-align:center;
                        .name_title{
                            height:40rpx;
                            line-height:40rpx;
                            width:160rpx;
                            border:1rpx solid #B2BCDA;
                            margin-top:25rpx;
                            display: flex;
                            flex-direction: row;
                            .plateNumberFirst{
                                width:40rpx;
                                background:#01BE7A;
                                color:white;
                            }
                            .plateNumberLast{
                                width:120rpx;
                            }
                        }
                    }
                    .status{
                        width:40%;
                        .auth_status{
                            color:red;
                        }
                        .auth_status2{
                            color:#01BE7A;
                        }
                    }
                }
            }
        }
    }
    .num_pic{
        position: relative;
        top:-225rpx;
        left:92%;
        width:35rpx;
        height:35rpx;
    }
    .add{
        background: #FF9400;
        width:95%;
        height:80rpx;
        line-height:80rpx;
        color:white;
        margin-left:2.5%;
        border-radius:10rpx;
        position: fixed;
        bottom:10rpx;
    }
    .choose{
        width:95%;
        margin-left:2.5%;
        height:80rpx;
        line-height:80rpx;
        font-size:30rpx;
    }
    .table {
        border: 0px solid darkgray;
        font-size:28rpx;
        margin-bottom:120rpx;
    }
    .tr {
        display: flex;
        width: 100%;
        justify-content: center;
        min-height: 80rpx;
        align-items: center;
    }
    .td {
        width:50%;
        justify-content: center;
    }
    .bg-w{
        background: snow;
    }
    .bg-g{
        background: #E6F3F9;
    }
    .th {
        width: 50%;
        justify-content: center;
        background: linear-gradient(to bottom, #1CEB9F 0%,#07C388 100%);
        color: #fff;
        display: flex;
        height: 80rpx;
        align-items: center;
    }

</style>
<template>
    <view style="display:{{list}}">
    <!--车辆信息列表-->
        <block wx:if="{{vehicleAuthData != ''}}">
            <view class="big">
                <repeat for="{{vehicleAuthData}}" key="index" index="index" item="item">
                    <view class="vehicleOnwerLi" @tap="add({{item}})" style="{{item.id == id ? animate : ''}}">
                        <!--车主信息-->
                        <view class="vehicleText">
                            <view class="title">{{index == 0 ? '常用车' : '新添加'}}</view>
                            <view class="num">
                                <view class="brand">{{item.brand_name}}</view>
                                <view class="model">{{item.model_name}}</view>
                            </view>
                            <view class="vehicle">
                                <view class="name">
                                    <view class="name_title">
                                        <view class="plateNumberFirst">{{item.plateNumberFirst}}</view>
                                        <view class="plateNumberLast">{{item.plateNumberLast}}</view>
                                    </view>
                                </view>
                                <view class="status">
                                    <text class="{{item.auth_status == 1 ? 'auth_status2' : 'auth_status'}}">{{auth_status[item.auth_status]}}</text>
                                </view>
                            </view>
                            <!--<view class="route" catchtap ="getRoute({{item.id}})">查看车辆定位
                            </view>-->
                        </view>
                        <!--车辆照片-->
                        <view class="vehiclePic">
                            <block wx:if="{{item.vehicle_photo}}">
                                <image class="picture" src="{{host}}/upload/{{item.vehicle_photo}}"></image>
                            </block>
                            <block wx:else>
                                <image class="picture" src="></image>
                            </block>
                        </view>
                    </view>
                    <image class="num_pic" src="" @tap="del({{item.id}})" style="{{item.id == id ? animate : ''}}"></image>
                </repeat>
            </view>
        </block>
        <block wx:else>
            <none :action.sync="action"/>
        </block>
        <button class="add" @tap="add(-10)">添加车辆</button>
    </view>
    <!--添加车辆信息部分开始-->
    <view class="addArea" style="display:{{add}}">
    <!--选项卡-->
    <view class="navbar3">
        <view class="item3 {{active3 == 0 ? ' active3' : ''}}">车辆信息</view>
        <view class="item3 {{active3 == 1 ? ' active3' : ''}}">拍照备案</view>
    </view>
    <form bindsubmit="formSubmit" report-submit="{{t}}">
        <view style="display:{{vehicleArea}}">
            <!--活动区域-->
            <view class="li">
                <view class="t">所在城市</view>
                <picker mode="multiSelector" bindchange="brandPickerCityChange" bindcolumnchange="brandPickerCityColumnChange" value="{{provinceCitySelIndex}}" range="{{provinceCities}}" range-key="{{'name'}}">
                    <view class="pickI">
                        {{provinceCities[0][provinceCitySelIndex[0]].name}}-{{provinceCities[1][provinceCitySelIndex[1]].name}}
                    </view>
                </picker>
            </view>
            <!--车牌号-->
            <view class="li">
                <view class="t">车牌号码</view>
                <input name="plate_number" value="{{plateNumber}}" class='message' placeholder="请输入车牌号码" bindblur="plateBlur()" bindinput="plateInputTyping" style="display:{{hide}}"/>
                <button class="b" style="display:{{hide}}" @tap="takePhoto()">拍照</button>
                <input class='msg' name="plate_number_two" value="{{plateNumber}}" style="display:{{hide2}}" bindblur="plateBlur()" bindinput="plateInputTyping"/>
            </view>
            <!--车牌颜色-->
            <view class="li">
                <view class="t">车牌颜色</view>
                <view class="section">
                    <picker bindchange="pickerColorChange" value="{{vehicleColorIndex}}" range="{{colors}}" range-key="{{'name'}}">
                        <view class="pickI">
                            {{colors[vehicleColorIndex].name}}
                        </view>
                    </picker>
                </view>
            </view>
            <!--品牌型号-->
            <view class="li">
                <view class="t">品牌型号</view>
                <view class='vehicleNum' @tap="click()">{{bM}}</view>
            </view>
            <!--使用型号-->
            <view class="li">
                <view class="t">车辆类型</view>
                <view class="section">
                    <picker bindchange="pickerTypeChange" value="{{vehicleUseTypeIndex}}" range="{{vehicleUseTypes}}">
                        <view class="pickI">
                            {{vehicleUseTypes[vehicleUseTypeIndex]}}
                        </view>
                    </picker>
                </view>
            </view>
            <!--年检月份-->
            <view class="li">
                <view class="t">年检月份</view>
                <view class="section">
                    <picker bindchange="pickerMonthChange" value="{{monthChooseIndex}}" range="{{monthTypes}}">
                        <view class="pickI">
                            {{monthTypes[monthChooseIndex]}}{{monthChooseIndex == 0 ? '' : '月'}}
                        </view>
                    </picker>
                </view>
            </view>
            <view class="choose">请选择你的活动区域(最多选择三项)</view>
            <view class="table">
                <view class="tr bg-w">
                    <view class="th" style="width:40%;border-right:1rpx solid #D9D9D9;border-top-left-radius: 10rpx">商圈</view>
                    <view class="th" style="width:60%;border-top-right-radius: 10rpx">包含区域</view>
                </view>
                <block wx:if="{{items != null}}">
                    <checkbox-group bindchange="checkboxChange" class="checkgroup" data-index="{{index}}">
                        <block wx:for="{{items}}" wx:key="index">
                            <view class="tr bg-g" wx:if="{{index % 2 == 0}}">
                                <view class="td" style="width:40%;padding-left:10rpx;">
                                    <checkbox value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disable}}"/>{{item.name}}
                                </view>
                                <view class="td" style="width:60%;padding:10rpx;">{{item.description || '无'}}</view>
                            </view>
                            <view class="tr" wx:else>
                                <view class="td" style="width:40%;padding-left:10rpx;">
                                    <checkbox value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disable}}"/>{{item.name}}
                                </view>
                                <view class="td" style="width:60%;padding:10rpx;">{{item.description || '无'}}</view>
                            </view>
                        </block>
                    </checkbox-group>
                </block>
                <block wx:else>
                    <view class="tr bg-g">
                        <view class="td" style="width:40%;">
                            暂无
                        </view>
                        <view class="td" style="width:60%;padding:10rpx;">暂无</view>
                    </view>
                </block>
            </view>
            <button class="add" formType="submit">保存，下一步</button>
        </view>
        <!--拍照备案-->
        <view style="display:{{photoArea}}">
            <!--车辆照片部分-->
            <view class="text">车辆照片</view>
            <!--选择区域-->
            <view class="area" @tap="takePhoto(vehicle)" style="display:{{vehicle}}">
                +
            </view>
            <!--照片显示区域-->
            <block wx:if="{{vehiclePhotoFile != ''}}">
                <view class="a">
                    <!--删除选择的车辆照片-->
                    <view class="delArea" @tap="del1(vehicle)">
                        <image src="" class="del1"></image>
                        <view class="text">删除</view>
                    </view>
                    <image src="{{vehiclePhotoFile}}" class="pic" mode="widthFix"></image>
                </view>
            </block>
            <!--&lt;!&ndash;行驶证部分&ndash;&gt;
            <view class="text">行驶证照片</view>
            &lt;!&ndash;选择区域&ndash;&gt;
            <view class="area" @tap="takePhoto(license)" style="display:{{license}}">
                +
            </view>
            &lt;!&ndash;照片显示区域&ndash;&gt;
            <block wx:if="{{licensePhotoFile != ''}}">
                <view class="a">
                    &lt;!&ndash;删除选择的行驶证照片&ndash;&gt;
                    <view class="delArea" @tap="del1(license)">
                        <image src="" class="del1"></image>
                        <view class="text">删除</view>
                    </view>
                    <image src="{{licensePhotoFile}}" class="pic" mode="widthFix"></image>
                </view>
            </block>-->
            <button class="add" formType="submit" disabled="{{sub}}">提交</button>
        </view>
    </form>
    <!--添加车辆信息部分结束-->
    </view>
    <view style="position: fixed;top:10000000rpx;">
    <canvas class='canvas' style="width:{{canvasWidth}}px;height:{{canvasHeight}}px;" canvas-id="watermarkCanvas"></canvas>
    </view>
</template>
<script>
    import wepy from 'wepy'
    import api from "../../common/api"
    import index from "../../store/reducers/index"
    import config from '../../common/config/'
    import ImageMask from '../../common/imagemask'
    import Base64 from '../../utils/UPNG'
    import None from '../../components/none'
    export default class Approve extends wepy.page {
        config = {
            navigationBarTitleText: '我的车辆',
        };

        components = {
            none: None,
        };

        data = {
            auth_status:['不通过','审核通过','待审核','待完善'],
            areaLength:0,//商圈区域选择项数目
            areaList:[{}],//商圈数组
            items: null,
            hide:'block',
            hide2:'none',
            checkTemplateId:'',
            t:true,
            action:'没有车辆信息哦',
            bM:'选择品牌型号',
            dis:'none',
            canvasWidth:'',
            canvasHeight:'',
            userId:'',
            host:'',
            plateColor:'',//车牌颜色
            colors:[],//车牌颜色数组
            vehicleColorIndex:0,//车票颜色
            vehicleUseTypes:[],//车辆使用类型数组
            operationType:[],//车辆使用类型
            vehicleUseTypeIndex:0,//车辆使用类型
            monthTypes:['请选择','1','2','3','4','5','6','7','8','9','10','11','12'],//月份
            monthType:0,//月份
            monthChooseIndex:0,//月份索引
            provinceCities:[
                [{id:0, parent_id:0,name: '选择省'}],//省份,
                [{id:0, name: '选择市'}], //城市
            ],//省市
            provinceCitySelIndex:[0,0],//省份城市初始
            provinceCityBuffer: {},//省份城市存储
            active3: 0,
            vehicleArea: 'block',//车辆照片选择区
            photoArea: 'none',//行驶证照片选择区
            vehicleAuth: {},//车主信息
            vehiclePhotoFile: '',
            licensePhotoFile: '',
            vehicle: 'block',//车辆参数
            license: 'block',//行驶证参数
            add:'none',//添加车辆信息
            vehicleAuthData:'',//车主注册的车辆信息
            list:'block',//车辆信息列表区
            provinceId:'',
            locationProvince:'',//获取当地属于的省份
            locationCity:'',//获取当地属于的城市
            sub:false,
            plateNumber:'',
            plateOk:false,
            vehicleId:'',
            save : false,
            id:'',
            animate:'',
            saveOk:''
        };

        events = {

        };

        methods = {
            //选择商圈
            async checkboxChange(e) {
                this.areaLength = e.detail.value.length;
                this.vehicleAuth['areaList'] = e.detail.value;
                if(this.areaLength > 3){
                    await api.showModal('注意','你最多只能选择三项');
                }
            },
            //查看路线
            async getRoute(id){
                await api.visitCounter('button','查看车辆定位','');
                wx.navigateTo({
                    url: './map?id=' + id
                })
            },
            //输入车牌号
            plateInputTyping(e){
                this.plateNumber = e.detail.value;
            },
            //验证车牌号
            async plateBlur(){
                //验证车牌号
                let reg = await api.verifyData('plateNum',this.plateNumber);
                if(reg){
                    this.plateOk = true;
                }else{
                    await api.showModal('错误','你填写的车牌号格式不正确');
                    return false;
                }
            },
            async click(){
                await api.visitCounter('button','选择车辆品牌型号','');
                wx.navigateTo({
                    url: './brand'
                })
            },
            //显示添加车辆
            async add (item) {
                await api.showToast('请稍等','loading',10000);
                if(item == '-10' || item.auth_status == 3){
                    await api.visitCounter('button','添加车辆信息','');
                    if(item.auth_status == 3) {
                        this.plateNumber = item.plate_number;
                        this.save = true;
                        this.$apply();
                    }else{
                        this.save = false;
                    }
                    this.vehicleId = item.id;
                    this.plateOk = true;
                    //加载省份城市
                    let res = await api.post({
                        url:'province_city/loadChildren',
                        data: {
                            parentId: 1
                        }
                    });
                    if(res.code == 1) {
                        //省份城市数组拼接到初始化的数组中
                        this.provinceCities[0] = this.provinceCities[0].concat(res.data);
                        this.$apply();
                    }
                    try{
                        let res = await api.getLocation({
                            type: 'wgs84',
                        });
                        let result = await api.requestUrl({
                            url: config.BAIDU_MAP_API_GEO + '&location=' + res.latitude + ',' + res.longitude + '&output=json',
                            data:{},
                            header: {
                                'Content-Type': 'application/json'
                            },
                        });
                        if(result && result.data){
                            //获取当地省份城市
                            let locationProvince =result.data.result.addressComponent.province.slice(0,-1);
                            let locationCity =result.data.result.addressComponent.city.slice(0,-1);
                            //查出对应的省份
                            let indexP = this.provinceCities[0].findIndex((item) => {
                                return item.name == locationProvince
                            });
                            //查出对应省份id
                            let indexPP = this.provinceCities[0][indexP].id;
                            result = await api.post({
                                url:'province_city/loadChildren',
                                data: {
                                    parentId: indexPP
                                }
                            });
                            //获取省份对应的城市
                            this.provinceCities[1] = this.provinceCities[1].slice(0,1).concat(result.data);
                            //查出对应的城市
                            let indexC = this.provinceCities[1].findIndex((item) => {
                                return item.name == locationCity
                            });
                            let indexCC = this.provinceCities[1][indexC].id;
                            this.vehicleAuth['provinceId'] = indexPP;
                            this.vehicleAuth['cityId'] = indexCC;
                            //查出对应城市id
                            this.provinceCitySelIndex = [indexP,indexC];
                            result = await api.post({
                                url:'vehicle_area_relation/getCityAreaList',
                                data: {
                                    cityId: this.vehicleAuth['cityId']
                                }
                            });
                            if(result.code == 1){
                                this.items = result.data;
                                this.$apply();
                            }
                            this.$apply();
                        }
                    }catch(e){}
                    wx.hideToast();
                    this.add = 'block';
                    this.list = 'none';
                    this.$apply();
                }else{
                    await api.visitCounter('button','查看车辆详情','');
                    wx.hideToast();
                    wx.navigateTo({
                        url: './vehicleDetail?id=' + item.id
                    })
                }
            },
            //删除车辆信息
            async del(id){
                await api.visitCounter('button','删除车辆信息按钮','');
                let res = await wepy.showModal({
                    title: '注意',
                    content: '确定删除该车辆信息？',
                });
                if (res.confirm == true) {
                    res = await api.post({
                        url:'vehicle/delete',
                        data:{
                            vehicleId:id
                        }
                    });
                    if(res.code == 1){
                        this.id = id;
                        this.animate = 'animation: zoomOutRight 1s';
                        this.$apply();
                        await api.showToast('删除成功','success',1000);
                        //延迟跳转
                        setTimeout(()=> {
                            this.getVehicleData();
                            this.$apply();
                        },500)
                    }else{
                        await api.showModal('注意',res.msg);
                        return false;
                    }
                }
            },
            //选择颜色
            pickerColorChange(e) {
                this.vehicleColorIndex = e.detail.value;
                this.plateColor = this.colors[this.vehicleColorIndex].name;
            },
            //选择使用类型
            pickerTypeChange(e) {
                this.vehicleUseTypeIndex = e.detail.value;
                this.operationType = parseInt(this.vehicleUseTypeIndex) + 1;
            },
            //选择年检月份
            pickerMonthChange(e) {
                this.monthChooseIndex = e.detail.value;
                this.monthType = this.monthChooseIndex;
            },
            //下拉选项选择完成省份城市触发的事件
            async brandPickerCityChange(e){
                this.provinceCitySelIndex =  e.detail.value;//[0,0]
                let index = this.provinceCitySelIndex;
                let pro = this.provinceCities;
                this.vehicleAuth['provinceId'] = pro[0][index[0]].id;
                this.vehicleAuth['cityId'] = pro[1][index[1]].id;
                let result = await api.post({
                    url:'vehicle_area_relation/getCityAreaList',
                    data: {
                        cityId: this.vehicleAuth['cityId']
                    }
                });
                if(result.code == 1){
                    this.items = result.data;
                    this.$apply();
                }else{
                    this.items = null;
                    this.$apply();
                }
            },
            //下拉选项改变省份城市事件
            async brandPickerCityColumnChange(e) {
                if (e.detail.column == 0) {//如果改变的是第一列（城市列）
                    if(e.detail.value == 0){
                        this.cityId = 0;
                        //若选择了第一个默认选项将第二列显示默认
                        this.provinceCities[1] = this.provinceCities[1].slice(0,1);
                    }else {
                        let parentId = this.provinceCities[0][e.detail.value].id;//获取改变省份的索引对应数据列的id（作为省份id去查找对应的型号）
                        if(!this.provinceCityBuffer[parentId]) {//首先在缓存数组中查找该parentId对应的省份信息是否存在
                            //加载该省份下的城市（若不存在去数据库查找）
                            let res = await api.post({
                                url:'province_city/loadChildren',
                                data: {
                                    parentId: parentId
                                }
                            });
                            if(res.code == 1) {
                                if(Array.isArray(res.data)) {//判断查询出来的数据是否为数组
                                    this.provinceCityBuffer[parentId] = res.data;//在缓存数组中以键值对的形式存储省份对应的城市数据
                                }
                            }
                        }
                        //省份城市数组  第一排是固定的选择省份，城市提示  截取初始数组中的第一排   将获取到的城市数组拼接到初始化的城市数组中（保留了提示排）
                        this.provinceCities[1] = this.provinceCities[1].slice(0,1).concat(this.provinceCityBuffer[parentId]);
                        this.provinceCitySelIndex = [e.detail.value,0];
                        this.$apply();
                    }
                }
            },
            //提交事件
            async formSubmit(e) {
                await api.visitCounter('button','添加车辆信息按钮','');
                 //将数据存入数组中
                this.vehicleAuth['plateNumber'] = e.detail.value.plate_number_two ? e.detail.value.plate_number_two : e.detail.value.plate_number;
                this.vehicleAuth['userId'] = this.userId;
                this.vehicleAuth['plateColor'] = this.plateColor;
                this.vehicleAuth['operationType'] = this.operationType;
                this.vehicleAuth['annualTestMonth'] = this.monthType;
                this.vehicleAuth['formId'] = this.saveOk ? e.detail.formId : '';
                this.vehicleAuth['templateId'] = this.checkTemplateId;
                let ok = true;
                let errMsg = '';
                if(this.vehicleAuth['provinceId'] == '选择省' || this.vehicleAuth['provinceId'] == 0){
                    errMsg = '请选择活动省份';
                    ok = false;
                } else if (this.vehicleAuth['cityId'] == '选择市' || this.vehicleAuth['cityId'] == 0) {
                    errMsg = '请选择活动城市';
                    ok = false;
                } else if (!this.plateOk || this.vehicleAuth['plateNumber'] == '') {
                    errMsg = '请填写车牌号码';
                    ok = false;
                } else if (this.vehicleAuth['annualTestMonth'] == 0) {
                    errMsg = '请选择年检月份';
                    ok = false;
                } else if (this.vehicleAuth['brandId'] == '选择品牌' || this.vehicleAuth['brandId'] == 0) {
                    errMsg = '请选择品牌';
                    ok = false;
                } else if (this.vehicleAuth['modelId'] == '选择型号' || this.vehicleAuth['modelId'] == 0) {
                    errMsg = '请选择型号';
                    ok = false;
                } else if (this.areaLength == 0) {
                    errMsg = '请选择活动区域';
                    ok = false;
                } else if (this.areaLength > 3) {
                    errMsg = '活动区域最多只能选择3项';
                    ok = false;
                }else if (this.saveOk && (this.vehicleAuth['vehiclePhotoFile'] == '' || this.vehiclePhotoFile =='')) {
                    errMsg = '请上传车辆照片';
                    ok = false;
                }
                if(!ok) {
                    await api.showModal('注意',errMsg);
                    this.sub = false;
                    this.$apply();
                    return false;
                }
                await api.showToast('loading....','loading',10000);
                this.sub = true;
                //若是将车辆信息完善
                if(this.save || this.saveOk){
                    let result = await api.post({
                        url: 'vehicle/update',
                        data: {
                            userId: this.userId,
                            vehicleId: this.vehicleId || this.saveOk,
                            provinceId: this.vehicleAuth['provinceId'],
                            cityId: this.vehicleAuth['cityId'],
                            operationType: this.vehicleAuth['operationType'],
                            plateNumber: this.vehicleAuth['plateNumber'],
                            plateColor: this.vehicleAuth['plateColor'],
                            brandId: this.vehicleAuth['brandId'],
                            modelId: this.vehicleAuth['modelId'],
                            vehiclePhotoFile: this.vehicleAuth['vehiclePhotoFile'],
                            annualTestMonth: this.vehicleAuth['annualTestMonth'],
                            formId: e.detail.formId,
                            templateId: this.checkTemplateId
                        }
                    });
                    wx.hideToast();
                    //保存信息错误
                    if (result && result.code == 1) {
                        await api.showToast('成功','success',1000);
                        //延迟跳转
                        setTimeout(() => {
                            this.getVehicleData();
                            this.add = 'none';
                            this.list = 'block';
                            this.$apply();
                        }, 1500)
                    } else {
                        await api.showModal('错误',result.msg);
                    }
                }else{
                    //将车辆信息输入数据库
                    let owner = await api.post({
                        url: 'vehicle/add',
                        data: this.vehicleAuth,
                    });
                    wx.hideToast();
                    if(owner.code == 1){
                        this.saveOk = owner.data;
                        await api.showToast('保存成功','success',1000);
                        this.active3 = 1;
                        this.vehicleArea = 'none';
                        this.photoArea = 'block';
                        this.$apply();
                    } else {
                        await api.showModal('错误',owner.msg);
                    }
                }
                this.sub = false;
                this.$apply();
            },
            //车辆，行驶证照片删除
            async del1(type) {
                //删除选择图片
                this.vehicleAuth[type + 'PhotoFile'] = '';
                this[type + 'PhotoFile'] = '';
                //显示图片
                this[type] = 'block';
                this.$apply();
            },
        };

        //调取获取照片功能，从相册获取或者拍照获取
        async takePhoto(type) {
            try {
                let res = await wepy.showActionSheet({
                    itemList: ['从相册中选择','拍照'],
                    itemColor: "#000",
                });
                let changedType = type.currentTarget.dataset.wpytakephotoA;
                this.chooseWxImage(['album','camera'][res.tapIndex], changedType);
            } catch(e) {
                return false;
            }
        }
        //处理获取到的图片信息
        async chooseWxImage(type, photoType) {
            try{
                let res = await wepy.chooseImage({
                    count: 1,
                    sizeType: ['compressed'],
                    sourceType: [type],
                });
                await api.showToast('上传中...','loading',10000);
                this.vehicleAuth[photoType + 'PhotoFile'] = res.tempFilePaths[0];
                this[photoType + 'PhotoFile'] = res.tempFilePaths[0];
                this[photoType] = 'none';
                if(photoType == ''){
                    await api.showToast('识别中...', 'loading', 10000);
                    res = await api.uploadPicFile(res.tempFilePaths[0], 'vehicle');
                    //隐写
                    res =await api.post({
                        url:'vehicle/ocrLicensePlate',
                        data: {
                            photo : res.url
                        }
                    });
                    if (res.code == 1) {
                        wx.hideToast();
                        this.plateNumber = res.data;
                        this.hide = 'none';
                        this.hide2 = 'block';
                        this.$apply();
                    } else {
                        wx.hideToast();
                        await api.showModal('注意',res.msg);
                        return false;
                    }
                }
                this.$apply();
                //隐写
                //获取图片信息
                let raw = await wepy.getImageInfo({
                    src: this.vehicleAuth[photoType + 'PhotoFile']
                });
                //缩放宽高防止传入图片数据大于画布最大传输数据量
                while (raw.width * raw.height * 4 > 785004) {
                    raw.width = raw.width * 0.999;
                    raw.height = raw.height * 0.999;
                }
                this.canvasWidth = parseInt(raw.width);
                this.canvasHeight = parseInt(raw.height);
                this.$apply();
                //创建画布环境
                let ctx = wx.createCanvasContext('watermarkCanvas');
                //绘制
                ctx.drawImage(raw.path, 0, 0, this.canvasWidth, this.canvasHeight);
                ctx.draw(true,async()=> {
                    //实例化隐写类
                    let mask = new ImageMask({
                        canvas: {id: ctx.canvasId, width: this.canvasWidth, height: this.canvasHeight},
                        debug: true,   //是否开启调试模式
                        charSize: 16,   //字符的字节位数，默认为16，即字符最大值为0xFFFF
                        mixCount: 2,    //隐写数据要混合到图片颜色值里的最低位数，值范围在1-5，默认为2，如果大于3，则图片会失真很严重
                        lengthSize: 24  //数据长度值的占用字节位数，默认为24，也即数据长度最大值为16777215
                    });
                    //调用方法获取写入信息
                    let msg = await api.getTimeMsg();
                    //隐写数据
                    //隐写数据
                    let a = await mask.hideText(ctx, msg);
                    this.$apply();
                    //清除画布
                    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                    let res2 = await wepy.canvasPutImageData({
                        canvasId: ctx.canvasId,
                        x: 0,
                        y: 0,
                        width: this.canvasWidth,
                        height: this.canvasHeight,
                        data: a.data,
                    });
                    //let res2 = await mask.hideText(ctx, msg);
                    if(res2.errMsg == 'canvasPutImageData:ok') {
                        //获取canvas画布像素信息
                        let textData = await wepy.canvasGetImageData({
                            x: 0,
                            y: 0,
                            width: this.canvasWidth,
                            height: this.canvasHeight,
                            canvasId: 'watermarkCanvas',
                        });
                        //将画布图像数据转变为base64传输给后台，
                        //目的：防止画布转为图片过程中（canvasToTempFilePath）像素被改变或者损耗导致隐写数据被破坏
                        // （原先用wx.canvasToTempFilePath就发现存在这个问题）
                        let arrayBuffer = Base64.encode([textData.data.buffer], textData.width, textData.height);
                        let imageBase = 'data:image/png;base64,' + await wepy.arrayBufferToBase64(arrayBuffer);
                        let watermarkRes = await api.post({
                            url: 'maskupload/uploadFile',
                            data: {
                                image: imageBase,
                                action: 'vehicle'
                            },
                            header: {
                                'Content-Type': 'image/jpeg',
                            },
                        });
                    }
                });
                res = await api.uploadPicFile(this[photoType + 'PhotoFile'],'vehicle');
                if (res.code == 1) {
                    wx.hideToast();
                    this.vehicleAuth[photoType + 'PhotoFile'] = res.url;
                    this.$apply();
                } else {
                    wx.hideToast();
                    await api.showModal('错误',res.msg);
                    return false;
                }
            }catch(e){
                return false;
            }
        }
        //刷新车辆列表信息
        async getVehicleData(){
            //加载添加的车辆信息
            let res = await api.post({
                url:'vehicle/index',
                data:{
                    userId:this.userId
                }
            });
            if (res.code == 1) {
                if(Array.isArray(res.data)) {
                    res.data.forEach((item) => {
                        item.plateNumberFirst = item.plate_number.slice(0,1);
                        item.plateNumberLast = item.plate_number.slice(1);
                    });
                    this.vehicleAuthData  = res.data;
                    this.$apply();
                }
            }
        }

        async onShow(){
            await api.visitCounter('page','','我的车辆页面');
            try {
                let bm = await wepy.getStorage({
                    key: 'bm'
                });
                this.vehicleAuth['brandId'] = bm.data.brandId;
                this.vehicleAuth['modelId'] = bm.data.modelId;
                this.bM = bm.data.brandName + '-' + bm.data.modelName;
                this.$apply();
            } catch (e) {}
            this.getVehicleData();
        }

        async onLoad() {
            wx.removeStorage({key: 'bm',});
            this.checkTemplateId = config.checkTemplateId;
            //获取用户id
            this.userId = await api.tryGetUserId();
            this.host = this.$parent.globalData.host;
            this.vehicleAuth['brandId'] = '选择品牌';
            this.vehicleAuth['modelId'] = '选择型号';
            this.vehicleAuth['provinceId'] = '选择省';
            this.vehicleAuth['cityId'] = '选择市';
            this.vehicleAuth['vehiclePhotoFile'] = '';
            //加载添加的车辆信息
            this.getVehicleData();
            //加载省份城市
            let res = await api.post({
                url:'province_city/loadChildren',
                data: {
                    parentId: 1
                }
            });
            if(res.code == 1) {
                //省份城市数组拼接到初始化的数组中
                this.provinceCities[0] = this.provinceCities[0].concat(res.data);
                this.$apply();
            }
            //加载车牌颜色
            res = await api.post({
                url:'vehicle/colorList',
                data: {}
            });
            if(res.code == 1) {
                if(Array.isArray(res.data)) {
                    //车辆品牌数组拼接到初始化的数组中
                    this.colors = res.data;
                    this.plateColor = this.colors[0].name;
                    this.$apply();
                }
            }
            //加载使用类型
            res = await api.post({
                url:'vehicle/vehicleType',
                data: {}
            });
            if(res.code == 1) {
                if(Array.isArray(res.data)) {
                    //车辆品牌数组拼接到初始化的数组中
                    this.vehicleUseTypes = res.data.slice(1);
                    this.operationType = 1;
                    this.$apply();
                }
            }
        }
    }
</script>
