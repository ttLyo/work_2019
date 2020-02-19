// const ExportJsonExcel = require('../src/js-export-excel')
const base_url = 'http://211.159.186.47:8003/'
// const base_url = 'http://localhost:8080/hd-api/'
const ExportJsonExcel = require("js-export-excel")
import store from "./store"
function _fetch(url,type,data1){//增删改查
    var init = {
        method:type,
        headers:{
            "token":store.getters.token,
            "content-type":"application/json"},
        body:JSON.stringify(data1)
    }
    if(type=='get'){
        delete init.body
    }
    console.log("URL:",url)
    console.log("INIT:",init)
    console.log("DATA:",data1)
    return fetch(base_url + url,init).then(res=>res.json())
}

function get_time(e){//返回yyyy-mm-dd hh:minmin:ss 默认返回当前时间  加时间戳参数返回时间戳时间
    var now = new Date();
    if(e){
        now.setTime(e)
        console.log(e)
        console.log(now)
    }
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();          //

    var clock = year + "-";

    if(month < 10)clock += "0";

    clock += month + "-";

    if(day < 10)clock += "0";
    
    clock += day + " ";

    if(hh < 10)clock += "0";
    
    clock += hh + ":";

    if (mm < 10) clock += '0'; 

    clock += mm + ":"; 

    if (ss < 10) clock += '0'; 
    clock += ss; 

    return(clock);
}
function cc(head,table,start=1,end=1){//注册表格拉伸 start end 未跳过开头/结尾几位！！！！！注意页面中多个表格用table_c里的cc函数
    var d = false
    var oldx
    var oldw 
    var old
    var last
    var line = document.createElement("div")
    var line_out = true
    var style
    for (let j = start; j < head.length-end; j++) {
        // table.rows[0].cells[j].childNodes[0].draggable = false
        table.rows[0].cells[j].onmousedown = function () {
            d=true
            oldx = event.x
            old = j
            oldw = head[j].width
            last = head[j].width
            style="width:1px;height:500px;z-index:2000;background-color:black;position:absolute;\
                    left:"+event.pageX+"px;top:"+(event.pageY+20)+"px;"
            line.style = style
        }
        table.rows[0].cells[j].onmousemove = function () { 
            if (event.offsetX > this.offsetWidth - 50) 
                this.style.cursor = 'col-resize'; 
            else 
                this.style.cursor = 'default'; 
        }
    }
    document.body.onmousemove = function () { 
        if(d){
            // head[old].width=(event.x-oldx) +oldw
            if(event.x-oldx>5||event.x-oldx<-5){
                document.body.appendChild(line)
                line_out = false
            }
            last = (event.x-oldx) +oldw
            style="width:1px;height:500px;z-index:2000;background-color:black;position:absolute;\
                    left:"+event.pageX+"px;top:"+(event.pageY+20)+"px;"
            line.style = style
        }
    }
    document.body.onmouseup = function () {
        d=false
        if(!line_out){
            head[old].width = last
            var length1 = document.body.childNodes.length
            document.body.removeChild( line)
            line_out = true
        }  
    }
    // for(let i of document.getElementsByClassName("ivu-table-body")){
    //     i.onmouseup = function () {
    //         d=false
    //         console.log(head[old])
    //         if(head[old])
    //             head[old].width = last
    //         var length1 = document.body.childNodes.length
    //         document.body.removeChild( document.body.childNodes[length1-1])
    //     }
    // }
}
function excel(JSONData, FileName,title,start,end){//生成excel表格
    console.log(JSONData)
    var option = {};
    var data = JSONData//.slice(start,JSONData.length-end)
    var f = []
    var h = []
    var c = []
    for(let i of title.slice(start,title.length-end)){
        f.push(i.key)
        h.push(i.title)
        c.push(i.width/13)
    }
    option.fileName = FileName
    option.datas = [{
            sheetData: data,
            sheetName: 'sheet',
            sheetFilter: f,
            sheetHeader: h,
            columnWidths: c
        }
    ];
    var toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel();
}
function request(url,init,that) {
    
    // return fetch(base_url+url, init)
    //     .then(result => result.json())
    //     .then(result => {
    //         if (result.code == 0) {
    //             return result.data;
    //         } else if (result.code == 500) {
    //             // TODO:
    //             alert(result.msg)
                
    //         } else{
    //             return result
    //         }
    //     })
    //     .then(result => {
    //         // 如果返回的是数组
    //         if (result instanceof Array) {
    //             result.forEach(element => {
    //                 preOperate(element);
    //             });
    //             return result;
    //         } else {
    //             // 如果返回是一个对象
    //             if (result.data == undefined) {
    //                 return preOperate(result);
    //             }
    //             // 如果返回的是分页
    //             else {
    //                 result.data.forEach(element => {
    //                     preOperate(element);
    //                 });
    //                 return result;
    //             }
    //         }

    //     });
}

export {base_url,request,_fetch,get_time,cc,excel};