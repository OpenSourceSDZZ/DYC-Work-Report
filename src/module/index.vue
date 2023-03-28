<template>
    <!--编写日：2023-03-28-->
    <div style="position: absolute;right: 0px;top: 0px;font-size: 8px;color: rgb(255 255 255 / 40%);z-index: 999;overflow: hidden;word-wrap: normal;">Power by Wesley</div>
    <div class="bg2"></div>
    <div class="bg">
        <div
            style="padding-top: 180px;font-size: 30px;font-family: disc;text-align: center;position: absolute;margin: 0px auto;width: 430px;letter-spacing: 3px;color: #c20025">
            第{{ week }}周工作安排</div>
        <div id="nodata"
            style="padding-top: 175px;padding-left: 42px;width: 350px;height: 334px;position: absolute;display: flex;justify-content: center;flex-direction: column;align-items: center;"
            v-if="nodata">
            <div>
                <svg t="1678095346424" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="2286" width="80" height="80">
                    <path
                        d="M759.39456 737.5936c-15.488 0-30.94656-2.0672-45.94944-6.14016a23.05536 23.05536 0 0 0-24.02432 7.79904c-46.1568 57.4336-114.81728 90.3744-188.3648 90.3744-72.1536 0-139.97184-31.88736-186.07104-87.47648a23.0464 23.0464 0 0 0-17.7536-8.34048c-1.25568 0-2.52928 0.09728-3.80416 0.31104-9.72288 1.62944-19.50464 2.45376-29.056 2.45376-96.35456 0-174.7392-78.33088-174.7392-174.62016 0-91.97056 71.88224-168.49792 163.65568-174.22848a23.04512 23.04512 0 0 0 20.75648-16.74496C303.22688 267.48672 398.8096 195.20512 506.47424 195.20512c107.94624 0 203.58784 72.5184 232.59776 176.35328 2.75456 9.88416 11.72352 16.75008 21.98912 16.84864 95.43296 0.88704 173.06752 79.2064 173.06752 174.57408 0 96.27776-78.38336 174.61376-174.7328 174.61376m19.09504-394.44992C738.92736 228.10496 629.39648 149.12384 506.47424 149.12384c-122.8992 0-232.56832 79.0784-272.07552 194.19776C126.14144 358.02112 43.52128 451.12064 43.52128 561.95456 43.52 683.65184 142.592 782.65472 264.3712 782.65472c7.80928 0 15.712-0.43264 23.62624-1.28512 54.54976 60.11136 131.4688 94.33728 213.056 94.33728 82.68416 0 160.16384-34.94016 214.81728-96.3648a220.99072 220.99072 0 0 0 43.52256 4.33152c121.77536 0 220.8448-99.00288 220.8448-220.69376 0-114.82624-89.04064-210.09024-201.74848-219.83616"
                        fill="#2c2c2c" p-id="2287"></path>
                    <path
                        d="M511.8848 660.08832c-14.624 0-26.48064 11.84768-26.48064 26.46144 0 14.61248 11.85664 26.45504 26.47936 26.45504 14.624 0 26.47936-11.84256 26.47936-26.45504 0-14.61376-11.85536-26.46144-26.47936-26.46144M511.8848 340.76672c-39.5584 0-75.81952 19.95776-97.01376 53.3952-11.60832 18.32192-17.7408 39.5136-17.7408 61.28 0 12.7232 10.3232 23.04 23.05536 23.04 12.73216 0 23.05536-10.3168 23.05536-23.04 0-13.02912 3.66592-25.69472 10.58816-36.6272 12.68736-20.02176 34.38848-31.968 58.0544-31.968 37.84576 0 68.64256 30.77504 68.64256 68.5952 0 37.82656-30.7968 68.5952-68.64256 68.5952-12.73216 0-23.05536 10.3168-23.05536 23.04v67.19744c0 12.7232 10.3232 23.04 23.05536 23.04 12.73344 0 23.05664-10.3168 23.05664-23.04v-46.4832c52.26112-10.69696 91.69792-57.00736 91.69792-112.34944 0-63.22688-51.47776-114.6752-114.75456-114.6752"
                        fill="#2c2c2c" p-id="2288"></path>
                </svg>
            </div>
            <div style="font-size: 20px;letter-spacing: 1px;">{{ b }}</div>
        </div>
        <div style="padding-top: 236px;padding-left: 42px;width: 350px;height: 334px;position: absolute;" v-else>
            <table style="width: 100%;min-width: 100%;max-width: 100%;border: none;text-align: center;">
                <!--表头-->
                <tr style="line-height: 15px;border-top: none;">
                    <th first-th>事项</th>
                    <th>时间</th>
                    <th>地点</th>
                    <th>负责人<br />主讲人</th>
                    <th>参加人员</th>
                </tr>
                <!--模板
                    <tr>
                    <td first-td>{{thing}}</td> 
                    <td>{{time}}</td>
                    <td>{{location}}</td>
                    <td>{{responsible}}</td>
                    <td>{{person}}</td>
                </tr>
                结束模板-->
                <tr v-for="item in data" v-bind:key="item">
                    <td first-td v-html="item.fldFMSXPmnUoX"></td>
                    <td tag-time v-html="item.fldg5QBuzLmVc"></td>
                    <td tag-location v-html="item.fldSogpWQyxCf"></td>
                    <td tag-resperson v-html="item.fld8NqVEjBGxI"></td>
                    <td tag-person v-html="item.fldGtDwVDWrPa"></td>
                </tr>
            </table>
        </div>
        <div style="position: absolute;bottom: 0px;height: 21px;overflow: hidden;word-wrap: normal;">{{ s }}</div>
        <div style="position: absolute;right: 0px;bottom: 19px;font-size: 8px;color: rgb(255 255 255 / 40%);">Now time：{{ nowtime }}</div>
        <div style="position: absolute;right: 0px;bottom: 9px;font-size: 8px;color: rgb(255 255 255 / 40%);">{{ times }}</div>
        <div style="position: absolute;right: 0px;bottom: -1px;font-size: 8px;color: rgb(255 255 255 / 40%);">{{ nexttimes }}</div>
        
    </div>
</template>

<script>

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substring(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substring(("" + o[k]).length));
    return format;
}

export default {
    name: 'InDex',
    data() {
        return {
            week: '__',
            data: [],
            s: '',
            times: '',
            nodata: false,
            b:'',
            nowtime:'',
            nexttimes:'',
        }
    },
    mounted() {
        this.$data.data = []
        console.log(Math.floor(Math.random().toString().replace(".", "")))
        this.send()
        setInterval(() => {
            this.send()
        }, 30000);
        setInterval(()=>{
            this.$data.nowtime = new Date().format('yyyy-MM-dd hh:mm:ss')
        })
    },
    methods: {
        send() {
            const xhr = new XMLHttpRequest()
            xhr.open('get', '/getData', true)
            xhr.timeout = 3000;
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xhr.da
            xhr.withCredentials = false;
            xhr.onload = () => {
                if (xhr.status == 200) {
                    this.$data.s = ''
                    var df = JSON.parse(xhr.response)
                    console.log('下次数据更新时间：' + df.next_update)
                    if (df.cache == 0) {
                        //cc限制
                        console.error('请求过于频繁')
                        setTimeout(() => {
                            location.reload()
                        }, 2000);
                    }
                    else {
                        this.$data.nexttimes = 'Next Update Time：' + df.next_update
                        var aaa = []
                        for (let index = 0; index < df.data.length; index++) {
                            const element = df.data[index];
                            if (element.fldFMSXPmnUoX == '暂无数据') {
                                this.$data.nodata = true
                                this.$data.week = df.data[0].fldTQ6uFBaeMo
                                this.$data.b = df.data[0].fldg5QBuzLmVc
                                this.$data.times = 'Last Update Time：' + new Date().format('yyyy-MM-dd hh:mm:ss')
                                break
                            }
                            else {
                                element.fldFMSXPmnUoX = element.fldFMSXPmnUoX.replace(new RegExp("/", "gm"), "<br/>")
                                element.fldg5QBuzLmVc = element.fldg5QBuzLmVc.replace(new RegExp("/", "gm"), "<br/>")
                                element.fld8NqVEjBGxI = element.fld8NqVEjBGxI.replace(new RegExp("/", "gm"), "<br/>")
                                element.fldSogpWQyxCf = element.fldSogpWQyxCf.replace(new RegExp("/", "gm"), "<br/>")
                                element.fldGtDwVDWrPa = element.fldGtDwVDWrPa.replace(new RegExp("/", "gm"), "<br/>")
                                aaa.push(element)
                            }
                            //结束
                            if (index == df.data.length - 1) {
                                this.$data.week = df.data[0].fldTQ6uFBaeMo
                                if (this.$data.data != aaa) {
                                    this.$data.data = aaa
                                }
                                this.$data.times = 'Last Update Time：' + new Date().format('yyyy-MM-dd hh:mm:ss')
                            }
                        }
                    }
                }
                else {
                    console.error('请求出现了一个错误!')
                    this.$data.s = '请求出错(' + xhr.status + ')[' + xhr.responseText + ']'
                }
            }
            xhr.onerror = (e) => {
                console.error('请求出现了一个错误!', e)
                var err = ''
                if (xhr.status == 0) {
                    err = 'Request TimeOut'
                }
                else {
                    err = xhr.responseText
                }
                this.$data.s = '请求出错(' + xhr.status + ')[' + err + ']'
            }
            xhr.send()
        }
    },

}
</script>

<style>
html,
body {
    overflow: hidden;
    margin: 0px !important;
    user-select: none;
    background: #610009;
}

.bg {
    background-image: url(@/assets/img/bg.png);
    background-repeat: no-repeat;
    height: 726px;
    width: 430px;
    background-size: contain;
    position: absolute;
}

.bg2 {
    background-image: url(@/assets/img/bg_.png);
    background-repeat: no-repeat;
    height: 726px;
    width: 430px;
    background-size: contain;
    position: absolute;
    z-index: 1;
}

table {
    border-collapse: collapse;
}



tr {
    border-top: var(--ran-table-tr-top-and-bottom-size) #990023 solid;
    border-bottom: var(--ran-table-tr-top-and-bottom-size) #990023 solid;

}

th {
    border-left: var(--ran-table-tr-top-and-bottom-size) #990023 solid;
    font-size: 11px;
    padding: 5px 0px 2px 0px;
    line-height: 13px;
    font-family: 'alibaba';
}

td {
    border-left: var(--ran-table-tr-top-and-bottom-size) #990023 solid;
    line-height: 13px;
    padding: 2px 0px 1px 0px;
    font-size: 11px;
    font-family: 'alibaba';
}

td[first-td],
th[first-th] {
    border-left: none;
    width: 94px;
    font-family: 'disc';
    font-weight: 300;
    color: #b0022f;
}

th[first-th] {
    font-size: 18px;
}

td[first-td] {
    font-size: 12px;
}

td[tag-time] {
    width: 30px;
    min-width: 30px;
    max-width: 30px !important;
}

td[tag-location] {
    width: 55px;
    min-width: 55px;
    max-width: 55px !important;
}

td[tag-resperson] {
    min-width: 40px;
    width: 40px;
    max-width: 40px !important;
}

td[tag-person] {
    min-width: 47px;
    width: 47px;
    max-width: 47px !important;
}

@font-face {
    font-family: 'disc';
    src: url(@/assets/fonts/disc.ttf);
}

@font-face {
    font-family: 'title';
    src: url(@/assets/fonts/title.ttf);
}

@font-face {
    font-family: 'alibaba';
    src: url(@/assets/fonts/alibaba.ttf);
}

:root {
    --ran-table-tr-top-and-bottom-size: 2.5px;
}
</style>