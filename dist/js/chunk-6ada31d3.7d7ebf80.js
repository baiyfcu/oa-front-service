(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ada31d3"],{"39a5":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[e.editStatus?i("a-spin",{attrs:{spinning:e.confirmLoading}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"客户姓名",hasFeedback:""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入客户姓名!"}]}],expression:"['name', {rules: [{ required: true, message: '请输入客户姓名!' }]}]"}],attrs:{placeholder:"请输入客户姓名",readOnly:e.disableSubmit}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"性别",hasFeedback:""}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sex",{}],expression:"['sex', {}]"}],attrs:{placeholder:"请选择性别"}},[i("a-select-option",{attrs:{value:"1"}},[e._v("男性")]),i("a-select-option",{attrs:{value:"2"}},[e._v("女性")])],1)],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证号码",hasFeedback:""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["idcard",e.validatorRules.idcard],expression:"['idcard', validatorRules.idcard]"}],attrs:{placeholder:"请输入身份证号码",readOnly:e.disableSubmit}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证扫描件",hasFeedback:""}},[i("j-image-upload",{attrs:{text:"上传",isMultiple:!0},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"联系方式",hasFeedback:""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telphone",e.validatorRules.telphone],expression:"[ 'telphone', validatorRules.telphone]"}],attrs:{readOnly:e.disableSubmit}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderId",{}],expression:"[ 'orderId', {}]"}],attrs:{disabled:"disabled"}})],1)],1)],1):e._e()],1)},r=[],n=(i("3b2b"),i("0fea")),l=i("88bc"),s=i.n(l),o=i("8bbf"),d=i.n(o),c=i("9fb0"),u=i("e610"),h={name:"JeecgOrderCustomerModal",components:{JImageUpload:u["default"]},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},columns:[{title:"客户名",align:"center",dataIndex:"name"},{title:"性别",align:"center",dataIndex:"sex"},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"身份证扫描件",align:"center",dataIndex:"idcardPic"},{title:"电话",dataIndex:"telphone",align:"center"},{title:"订单号码",dataIndex:"orderId",align:"center"},{title:"创建人",dataIndex:"createBy",align:"center"},{title:"创建时间",dataIndex:"createTime",align:"center"},{title:"更新时间",dataIndex:"updateBy",align:"center"},{title:"更新人",dataIndex:"updateTime",align:"center"}],fileList:[],disableSubmit:!1,selectedRowKeys:[],orderId:"",hiding:!1,headers:{},picUrl:"",picArray:[],previewVisible:!1,previewImage:"",addStatus:!1,editStatus:!1,confirmLoading:!1,form:this.$form.createForm(this),url:{add:"/test/order/addCustomer",edit:"/test/order/editCustomer",fileUpload:window._CONFIG["domianURL"]+"/sys/common/upload",imgerver:window._CONFIG["staticDomainURL"],getOrderCustomerList:"/test/order/listOrderCustomerByMainId"},validatorRules:{telphone:{rules:[{validator:this.validateMobile}]},idcard:{rules:[{validator:this.validateIdCard}]}}}},computed:{uploadAction:function(){return this.url.fileUpload}},created:function(){var e=d.a.ls.get(c["a"]);this.headers={"X-Access-Token":e}},methods:{add:function(e){this.hiding=!0,e?(this.orderId=e,this.edit({orderId:e},"")):this.$message.warning("请选择一个客户信息")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var i=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.form.resetFields(),this.orderId=e.orderId,this.model=Object.assign({},e),e.id?(this.hiding=!1,this.addStatus=!1,this.editStatus=!0,this.$nextTick((function(){i.form.setFieldsValue(s()(i.model,"id","name","sex","idcard","telphone","orderId","createBy","createTime","updateBy","updateTime"))})),setTimeout((function(){i.fileList=e.idcardPic}),5)):(this.addStatus=!1,this.editStatus=!0),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.picUrl="",this.fileList=[]},handleOk:function(){var e=this,t=this;this.form.validateFields((function(i,a){if(!i){t.confirmLoading=!0;var r="",l="";e.model.id?(r+=e.url.edit,l="put"):(r+=e.url.add,l="post");var s=Object.assign(e.model,a);console.log(s),s.orderId=e.orderId,s.idcardPic=e.fileList,Object(n["httpAction"])(r,s,l).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateMobile:function(e,t,i){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?i():i("您的手机号码格式不正确!")},validateIdCard:function(e,t,i){!t||new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(t)?i():i("您的身份证号码格式不正确!")},handleChange:function(e){if(this.fileList=e.fileList,"uploading"!==e.file.status&&"done"===e.file.status){var t=e.file.response;t.success||this.$message.warning(t.message)}},handlePicCancel:function(){this.previewVisible=!1,this.previewImage=""},handlePicView:function(e){this.previewImage=this.url.imgerver+"/"+e,this.previewVisible=!0},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},getIdCardView:function(e){return this.url.imgerver+"/"+e}}},p=h,f=(i("4903"),i("2877")),m=Object(f["a"])(p,a,r,!1,null,"1ac5eb52",null);t["default"]=m.exports},4903:function(e,t,i){"use strict";var a=i("9bff"),r=i.n(a);r.a},"88bc":function(e,t,i){(function(t){var i=1/0,a=9007199254740991,r="[object Arguments]",n="[object Function]",l="[object GeneratorFunction]",s="[object Symbol]",o="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,c=o||d||Function("return this")();function u(e,t,i){switch(i.length){case 0:return e.call(t);case 1:return e.call(t,i[0]);case 2:return e.call(t,i[0],i[1]);case 3:return e.call(t,i[0],i[1],i[2])}return e.apply(t,i)}function h(e,t){var i=-1,a=e?e.length:0,r=Array(a);while(++i<a)r[i]=t(e[i],i,e);return r}function p(e,t){var i=-1,a=t.length,r=e.length;while(++i<a)e[r+i]=t[i];return e}var f=Object.prototype,m=f.hasOwnProperty,b=f.toString,g=c.Symbol,v=f.propertyIsEnumerable,w=g?g.isConcatSpreadable:void 0,C=Math.max;function y(e,t,i,a,r){var n=-1,l=e.length;i||(i=O),r||(r=[]);while(++n<l){var s=e[n];t>0&&i(s)?t>1?y(s,t-1,i,a,r):p(r,s):a||(r[r.length]=s)}return r}function I(e,t){return e=Object(e),x(e,t,(function(t,i){return i in e}))}function x(e,t,i){var a=-1,r=t.length,n={};while(++a<r){var l=t[a],s=e[l];i(s,l)&&(n[l]=s)}return n}function L(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var i=arguments,a=-1,r=C(i.length-t,0),n=Array(r);while(++a<r)n[a]=i[t+a];a=-1;var l=Array(t+1);while(++a<t)l[a]=i[a];return l[t]=n,u(e,this,l)}}function O(e){return U(e)||S(e)||!!(w&&e&&e[w])}function j(e){if("string"==typeof e||P(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}function S(e){return k(e)&&m.call(e,"callee")&&(!v.call(e,"callee")||b.call(e)==r)}var U=Array.isArray;function F(e){return null!=e&&$(e.length)&&!A(e)}function k(e){return M(e)&&F(e)}function A(e){var t=V(e)?b.call(e):"";return t==n||t==l}function $(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function V(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function M(e){return!!e&&"object"==typeof e}function P(e){return"symbol"==typeof e||M(e)&&b.call(e)==s}var R=L((function(e,t){return null==e?{}:I(e,h(y(t,1),j))}));e.exports=R}).call(this,i("c8ba"))},"9bff":function(e,t,i){},e610:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-upload",{attrs:{name:"file",listType:"picture-card",multiple:e.isMultiple,action:e.uploadAction,headers:e.headers,data:{biz:e.bizPath},fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,isMultiple:e.isMultiple,showUploadList:e.isMultiple},on:{change:e.handleChange,preview:e.handlePreview}},[!e.isMultiple&&e.picUrl?i("img",{staticStyle:{height:"104px","max-width":"300px"},attrs:{src:e.getAvatarView()}}):i("div",[i("a-icon",{attrs:{type:e.uploadLoading?"loading":"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1),i("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:function(t){return e.handleCancel()}}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},r=[],n=(i("7f7f"),i("28a5"),i("a481"),i("3b2b"),i("8bbf")),l=i.n(n),s=i("9fb0"),o=i("0fea"),d=function(){return"-"+parseInt(1e4*Math.random()+1,10)},c=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},u={name:"JImageUpload",data:function(){return{uploadAction:window._CONFIG["domianURL"]+"/sys/common/upload",urlView:window._CONFIG["staticDomainURL"],uploadLoading:!1,picUrl:!1,headers:{},fileList:[],previewImage:"",previewVisible:!1}},props:{text:{type:String,required:!1,default:"上传"},bizPath:{type:String,required:!1,default:"temp"},value:{type:[String,Array],required:!1},disabled:{type:Boolean,required:!1,default:!1},isMultiple:{type:Boolean,required:!1,default:!1}},watch:{value:function(e){e instanceof Array?this.initFileList(e.join(",")):this.initFileList(e)}},created:function(){var e=l.a.ls.get(s["a"]);this.headers={"X-Access-Token":e}},methods:{initFileList:function(e){if(e&&0!=e.length){this.picUrl=!0;for(var t=[],i=e.split(","),a=0;a<i.length;a++){var r=Object(o["getFileAccessHttpUrl"])(i[a],this.urlView,"http");t.push({uid:d(),name:c(i[a]),status:"done",url:r,response:{status:"history",message:i[a]}})}this.fileList=t}else this.fileList=[]},beforeUpload:function(e){var t=e.type;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1},handleChange:function(e){this.picUrl=!1;var t=e.fileList;"done"===e.file.status?e.file.response.success&&(this.picUrl=!0,t=t.map((function(e){return e.response&&(e.url=e.response.message),e}))):"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file),this.fileList=t,"done"!==e.file.status&&"removed"!==e.file.status||this.handlePathChange()},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},getAvatarView:function(){if(this.fileList.length>0){var e=this.fileList[0].url;return Object(o["getFileAccessHttpUrl"])(e,this.urlView,"http")}},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");var i=[];if(this.isMultiple)for(var a=0;a<e.length;a++)i.push(e[a].response.message);else i.push(e[e.length-1].response.message);i.length>0&&(t=i.join(",")),this.$emit("change",t)},handleDelete:function(e){console.log(e)},handleCancel:function(){this.close(),this.previewVisible=!1},close:function(){}},model:{prop:"value",event:"change"}},h=u,p=i("2877"),f=Object(p["a"])(h,a,r,!1,null,"07822c64",null);t["default"]=f.exports}}]);