(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c1f0ee4"],{2095:function(t,e,a){"use strict";a.r(e);a("c5f6");var i,r,s=a("f933"),n=(a("28a5"),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split("").reduce((function(t,e){var a=e.charCodeAt(0);return a>=0&&a<=128?t+1:t+2}),0)}),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,a=0;return t.split("").reduce((function(t,i){var r=i.charCodeAt(0);return a+=r>=0&&r<=128?1:2,a<=e?t+i:t}),"")},l={name:"Ellipsis",components:{Tooltip:s["a"]},props:{prefixCls:{type:String,default:"ant-pro-ellipsis"},tooltip:{type:Boolean},length:{type:Number,required:!0},lines:{type:Number,default:1},fullWidthRecognition:{type:Boolean,default:!1}},methods:{getStrDom:function(t){var e=this.$createElement;return e("span",[o(t,this.length)+"..."])},getTooltip:function(t){var e=this.$createElement;return e(s["a"],[e("template",{slot:"title"},[t]),this.getStrDom(t)])}},render:function(){var t=this.$props,e=t.tooltip,a=t.length,i=this.$slots.default.map((function(t){return t.text})).join(""),r=e&&n(i)>a?this.getTooltip(i):this.getStrDom(i);return r}},c=l,u=a("2877"),p=Object(u["a"])(c,i,r,!1,null,null,null);e["default"]=p.exports},"23fe":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:[t.prefixCls]},[t._t("subtitle",[a("div",{class:[t.prefixCls+"-subtitle"]},[t._v(t._s("string"===typeof t.subTitle?t.subTitle:t.subTitle()))])]),a("div",{staticClass:"number-info-value"},[a("span",[t._v(t._s(t.total))]),a("span",{staticClass:"sub-total"},[t._v("\n      "+t._s(t.subTotal)+"\n      "),a("icon",{attrs:{type:"caret-"+t.status}})],1)])],2)},r=[],s=(a("c5f6"),a("0c63")),n={name:"NumberInfo",props:{prefixCls:{type:String,default:"ant-pro-number-info"},total:{type:Number,required:!0},subTotal:{type:Number,required:!0},subTitle:{type:[String,Function],default:""},status:{type:String,default:"up"}},components:{Icon:s["a"]},data:function(){return{}}},o=n,l=(a("7506"),a("2877")),c=Object(l["a"])(o,i,r,!1,null,"fca2c294",null);e["default"]=c.exports},"58f7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return""!==t.tips?a("tooltip",[a("template",{slot:"title"},[t._v(t._s(t.tips))]),a("avatar",{attrs:{size:t.avatarSize,src:t.src}})],2):a("avatar",{attrs:{size:t.avatarSize,src:t.src}})},r=[],s=a("27fd"),n=a("f933"),o={name:"AvatarItem",components:{Avatar:s["a"],Tooltip:n["a"]},props:{tips:{type:String,default:"",required:!1},src:{type:String,default:""}},data:function(){return{size:this.$parent.size}},computed:{avatarSize:function(){return"mini"!==this.size&&this.size||20}},watch:{"$parent.size":function(t){this.size=t}}},l=o,c=a("2877"),u=Object(c["a"])(l,i,r,!1,null,null,null);e["default"]=u.exports},"6a2a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("\n  "+t._s(t._f("format")(t.lastTime))+"\n")])},r=[];a("6b54"),a("c5f6");function s(t){return 1*t<10?"0".concat(t):t}var n={name:"CountDown",props:{format:{type:Function,default:void 0},target:{type:[Date,Number],required:!0},onEnd:{type:Function,default:function(){}}},data:function(){return{dateTime:"0",originTargetTime:0,lastTime:0,timer:0,interval:1e3}},filters:{format:function(t){var e=36e5,a=6e4,i=Math.floor(t/e),r=Math.floor((t-i*e)/a),n=Math.floor((t-i*e-r*a)/1e3);return"".concat(s(i),":").concat(s(r),":").concat(s(n))}},created:function(){this.initTime(),this.tick()},methods:{initTime:function(){var t=0,e=0;this.originTargetTime=this.target;try{e="[object Date]"===Object.prototype.toString.call(this.target)?this.target:new Date(this.target).getTime()}catch(a){throw new Error("invalid target prop")}t=e-(new Date).getTime(),this.lastTime=t<0?0:t},tick:function(){var t=this,e=this.onEnd;this.timer=setTimeout((function(){t.lastTime<t.interval?(clearTimeout(t.timer),t.lastTime=0,"function"===typeof e&&e()):(t.lastTime-=t.interval,t.tick())}),this.interval)}},beforeUpdate:function(){this.originTargetTime!==this.target&&this.initTime()},beforeDestroy:function(){clearTimeout(this.timer)}},o=n,l=a("2877"),c=Object(l["a"])(o,i,r,!1,null,"7b39227c",null);e["default"]=c.exports},7506:function(t,e,a){"use strict";var i=a("ef37"),r=a.n(i);r.a},84962:function(t,e,a){},a40c:function(t,e,a){"use strict";a.r(e);var i=a("bd86"),r=(a("c5f6"),a("27fd")),s=a("58f7");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter((function(t){return t.tag||t.text&&""!==t.text.trim()}))}var o,l,c={AvatarItem:s["default"],name:"AvatarList",components:{Avatar:r["a"],AvatarItem:s["default"]},props:{prefixCls:{type:String,default:"ant-pro-avatar-list"},size:{type:[String,Number],default:"default"},maxLength:{type:Number,default:0},excessItemsStyle:{type:Object,default:function(){return{color:"#f56a00",backgroundColor:"#fde3cf"}}}},data:function(){return{}},methods:{getItems:function(t){var e,a=this.$createElement,s=(e={},Object(i["a"])(e,"".concat(this.prefixCls,"-item"),!0),Object(i["a"])(e,"".concat(this.size),!0),e);this.maxLength>0&&(t=t.slice(0,this.maxLength),t.push(a(r["a"],{attrs:{size:this.size},style:this.excessItemsStyle},["+".concat(this.maxLength)])));var n=t.map((function(t){return a("li",{class:s},[t])}));return n}},render:function(){var t,e=arguments[0],a=this.$props,r=a.prefixCls,s=a.size,o=(t={},Object(i["a"])(t,"".concat(r),!0),Object(i["a"])(t,"".concat(s),!0),t),l=n(this.$slots.default),c=l&&l.length?e("ul",{class:"".concat(r,"-items")},[this.getItems(l)]):null;return e("div",{class:o},[c])}},u=c,p=a("2877"),m=Object(p["a"])(u,o,l,!1,null,null,null);e["default"]=m.exports},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("br"),a("h2",[t._v("# Trend 组件 ")]),a("a-divider",[t._v(" 正常 ")]),a("a-card",[a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("工资")]),t._v("\n      5%\n    ")]),a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("工作量")]),t._v("\n      50%\n    ")]),a("trend",{attrs:{flag:"down"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("身体状态")]),t._v("\n      50%\n    ")])],1),a("a-divider",[t._v(" 颜色反转 ")]),a("a-card",{staticStyle:{"margin-bottom":"3rem"}},[a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up","reverse-color":!0}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("工资")]),t._v("\n      5%\n    ")]),a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"down","reverse-color":!0}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("工作量")]),t._v("\n      50%\n    ")])],1),a("h2",[t._v("# AvatarList 组件 ")]),a("a-divider",[t._v(" AvatarList ")]),a("a-card",{staticStyle:{"margin-bottom":"3rem"}},[a("avatar-list",{attrs:{"max-length":3}},[a("avatar-list-item",{attrs:{tips:"Jake",src:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"}}),a("avatar-list-item",{attrs:{tips:"Andy",src:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}})],1),a("a-divider",{staticStyle:{margin:"0 16px"},attrs:{type:"vertical"}}),a("avatar-list",{attrs:{size:"mini"}},[a("avatar-list-item",{attrs:{tips:"Jake",src:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"}}),a("avatar-list-item",{attrs:{tips:"Andy",src:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"}}),a("avatar-list-item",{attrs:{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}})],1)],1),a("h2",[t._v("# CountDown 组件 ")]),a("a-divider",[t._v(" CountDown ")]),a("a-card",{staticStyle:{"margin-bottom":"3rem"}},[a("count-down",{staticStyle:{"font-size":"2rem"},attrs:{target:(new Date).getTime()+3e6,"on-end":t.onEndHandle}}),a("a-divider",{staticStyle:{margin:"0 16px"},attrs:{type:"vertical"}}),a("count-down",{staticStyle:{"font-size":"2rem"},attrs:{target:(new Date).getTime()+1e4,"on-end":t.onEndHandle2}})],1),a("h2",[t._v("# Ellipsis 组件 ")]),a("a-divider",[t._v(" Ellipsis ")]),a("a-card",{staticStyle:{"margin-bottom":"3rem"}},[a("ellipsis",{attrs:{length:100,tooltip:""}},[t._v("\n      There were injuries alleged in three cases in 2015, and a\n      fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.\n    ")])],1),a("h2",[t._v("# NumberInfo 组件 ")]),a("a-divider",[t._v(" NumberInfo ")]),a("a-card",[a("number-info",{attrs:{"sub-title":function(){return"Visits this week"},total:12321,status:"up","sub-total":17.1}})],1)],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner"},[i("img",{staticStyle:{width:"64px",height:"64px"},attrs:{alt:"Vue logo",src:a("cf05")}}),i("h3",{staticStyle:{"margin-top":"1rem"}},[t._v("Welcome to Your Vue.js App")])])}],s=a("611e"),n=a("a40c"),o=(a("84962"),n["default"]),l=a("6a2a"),c=a("2095"),u=c["default"],p=a("23fe"),m=p["default"],f=o.AvatarItem,d={name:"Home",components:{NumberInfo:m,Ellipsis:u,CountDown:l["default"],Trend:s["a"],AvatarList:o,AvatarListItem:f},data:function(){return{targetTime:(new Date).getTime()+39e5}},methods:{onEndHandle:function(){this.$message.success("CountDown callback!!!")},onEndHandle2:function(){this.$notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})}}},v=d,h=(a("d060"),a("2877")),g=Object(h["a"])(v,i,r,!1,null,"79252c15",null);e["default"]=g.exports},cf05:function(t,e,a){t.exports=a.p+"img/logo.722cfbcd.png"},d060:function(t,e,a){"use strict";var i=a("de87"),r=a.n(i);r.a},de87:function(t,e,a){},ef37:function(t,e,a){}}]);