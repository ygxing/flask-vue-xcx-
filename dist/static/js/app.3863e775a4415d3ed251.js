webpackJsonp([56],{"+skl":function(t,e){},"1hy+":function(t,e){},"1lS0":function(t,e,i){"use strict";var n={props:{value:Number},data:function(){return{inputValue:""}},methods:{handlerBlur:function(){var t=Number(this.inputValue);this.inputValue?t!=t?this.handlerError("价格/数量必须为数字"):this.$emit("change",t):this.handlerError("价格/数量不能为空")},format:function(){},handlerError:function(t){this.$Message.error(t)},handlerFocus:function(){}},created:function(){this.inputValue=""+this.value},watch:{value:function(t){this.inputValue=""+this.value}},computed:{isError:function(){var t=Number(this.inputValue);return!this.inputValue||t!=t}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Input",{class:{"error-type":t.isError},on:{"on-blur":t.handlerBlur,"on-focus":t.handlerFocus},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1)},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(t){i("Lz0o")},null,null);e.a=o.exports},"4JQw":function(t,e){},FGPZ:function(t,e,i){"use strict";var n=i("//Fk"),a=i.n(n),o=i("aYpo"),s=(i("mtWM"),[[{header:[!1,1,2,3,4,5,6]}],["bold","italic","underline","strike"],[{align:["","center","right","justify"]}],["blockquote"],[{list:"ordered"},{list:"bullet"},{list:"check"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{color:[]},{background:[]}],["link","image"],["clean"]]),c={name:"Vue2Editor",props:["content","disabled"],data:function(){return{htmlStr:this.content,uploaderUrl:this.$api.qiniu_upload,imgDomain:"http://akivipic.meisaas.com/",id:this.mockKey(),customToolbar:s}},components:{"vue2-editor":o.VueEditor},watch:{htmlStr:function(t){this.$emit("change",t)},content:function(t){this.htmlStr=t}},methods:{handleImageAdded:function(t,e,i,n){var a=this,o=new FormData,s=t.name.split(".");if(s.length<2)return!1;s=s.pop(),this.getToken(s).then(function(s){o.append("file",t),o.append("key",s.key),o.append("token",s.token),a.$http({method:"post",data:o,headers:{"Content-Type":"multipart/form-data"},url:a.uploaderUrl}).then(function(t){var o=a.imgDomain+t.data.key;e.insertEmbed(i,"image",o),n()}).catch(function(t){})})},getToken:function(t){var e=this;return this.$http.post("/qiniu/token",{}).then(function(i){return{token:i.data.data.token,key:e.mockKey()+"."+t}}).catch(function(t){return a.a.reject(!1)})},mockKey:function(){for(var t=(""+Date.now()).slice(-8),e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_",i=e.length,n="",a=0;a<8;a++)n+=e[Math.floor(Math.random()*i)];return n+t}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("vue2-editor",{attrs:{useCustomImageHandler:"",id:t.id,editorToolbar:t.customToolbar,disabled:!!t.disabled},on:{imageAdded:t.handleImageAdded},model:{value:t.htmlStr,callback:function(e){t.htmlStr=e},expression:"htmlStr"}})],1)},staticRenderFns:[]};var l=i("VU/8")(c,r,!1,function(t){i("GMYk")},null,null);e.a=l.exports},GMYk:function(t,e){},"L/hj":function(t,e,i){"use strict";e.c=function(t){localStorage.setItem("merid",t.merid),localStorage.setItem("token",t.token)},e.a=function(){return{merid:localStorage.getItem("merid"),token:localStorage.getItem("token")}},e.b=function(){localStorage.removeItem("merid"),localStorage.removeItem("token")},e.d=function(t,e){var i=t.signescape,n={};i&&(i.forEach(function(e){n[e]=h.Base64.encode(t[e])}),t.signescape=r()(n));var o=s()({},t,{token:e}),c=a()(o).sort().reduce(function(t,e){if("sign"==e||"signescape"==e)return t;var a={};return i&&i.indexOf(e)>-1?a[e]=n[e]:a[e]=o[e],t+"&"+p.a.stringify(a,{format:"RFC1738"})},"").slice(1);return d()(c)};var n=i("fZjL"),a=i.n(n),o=i("woOf"),s=i.n(o),c=i("mvHQ"),r=i.n(c),l=i("uXeI"),d=i.n(l),u=i("mw3O"),p=i.n(u),h=i("xrTZ");i.n(h)},Lz0o:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({},a,!1,function(t){i("4JQw")},null,null).exports,s=i("mw3O"),c=i.n(s),r=i("/ocq"),l=[{path:"",redirect:"home"},{path:"home",component:function(t){i.e(29).then(function(){var e=[i("s6+2")];t.apply(null,e)}.bind(this)).catch(i.oe)},children:[{path:"/system/setting",name:"Setting",component:function(t){i.e(2).then(function(){var e=[i("jjGC")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/system/text",name:"Text",component:function(t){i.e(39).then(function(){var e=[i("6rdE")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/system/admin",name:"AdminList",component:function(t){i.e(40).then(function(){var e=[i("ayc4")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/system/company",name:"Company",component:function(t){i.e(9).then(function(){var e=[i("3DL1")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/store/apply",name:"StoreApply",component:function(t){i.e(15).then(function(){var e=[i("xpL7")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/store/list",name:"StoreList",component:function(t){i.e(27).then(function(){var e=[i("kmOg")];t.apply(null,e)}.bind(this)).catch(i.oe)},meta:{keepAlive:!0}},{path:"/store/add",name:"StoreAdd",component:function(t){i.e(41).then(function(){var e=[i("uykr")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/store/detail",name:"StoreDetail",component:function(t){i.e(30).then(function(){var e=[i("rrJD")];t.apply(null,e)}.bind(this)).catch(i.oe)},meta:{pname:["StoreList"]}},{path:"/member/list",name:"MemberList",component:function(t){Promise.all([i.e(0),i.e(18)]).then(function(){var e=[i("kbZC")];t.apply(null,e)}.bind(this)).catch(i.oe)},meta:{keepAlive:!0}},{path:"/member/detail",name:"MemberDetail",component:function(t){Promise.all([i.e(0),i.e(10)]).then(function(){var e=[i("lqTw")];t.apply(null,e)}.bind(this)).catch(i.oe)},meta:{pname:["MemberList","ApplyReimburse"]}},{path:"/proxy/list",name:"ProxyList",component:function(t){i.e(48).then(function(){var e=[i("O+gj")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/proxy/detail",name:"ProxyDetail",component:function(t){i.e(21).then(function(){var e=[i("Lhrg")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/order/list",name:"OrderList",component:function(t){Promise.all([i.e(0),i.e(36)]).then(function(){var e=[i("DdJ0")];t.apply(null,e)}.bind(this)).catch(i.oe)},meta:{keepAlive:!0}},{path:"/order/detail",name:"OrderDetail",component:function(t){i.e(8).then(function(){var e=[i("POLg")];t.apply(null,e)}.bind(this)).catch(i.oe)},meta:{pname:["OrderList"]}},{path:"/repair/list",name:"RepairList",component:function(t){i.e(47).then(function(){var e=[i("/M7r")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/repair/detail",name:"RepairDetail",component:function(t){i.e(26).then(function(){var e=[i("QN4Y")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/assets/applyreimburse",name:"ApplyReimburse",component:function(t){Promise.all([i.e(0),i.e(17)]).then(function(){var e=[i("NN+i")];t.apply(null,e)}.bind(this)).catch(i.oe)},meta:{keepAlive:!0}},{path:"/item/add",name:"ItemAdd",component:function(t){i.e(1).then(function(){var e=[i("kQFi")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/item/edit",name:"EditItem",component:function(t){i.e(5).then(function(){var e=[i("Qfd2")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/item/list",name:"ItemList",component:function(t){i.e(34).then(function(){var e=[i("2UyK")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/item/upload",name:"ItemUpload",component:function(t){i.e(19).then(function(){var e=[i("CYhV")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/swiper/list",name:"SwiperList",component:function(t){i.e(12).then(function(){var e=[i("ilbp")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/swiper/add",name:"AddSwiper",component:function(t){i.e(3).then(function(){var e=[i("atCN")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/swiper/edit",name:"EditSwiper",component:function(t){i.e(4).then(function(){var e=[i("Of+Q")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/category/add",name:"AddCategory",component:function(t){i.e(13).then(function(){var e=[i("VQa6")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/category/list",name:"CategoryList",component:function(t){i.e(33).then(function(){var e=[i("1wti")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/category/edit",name:"EditCategory",component:function(t){i.e(11).then(function(){var e=[i("TYYy")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/article/add",name:"ArticleAdd",component:function(t){i.e(53).then(function(){var e=[i("Zyj+")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/article/list",name:"ArticleList",component:function(t){i.e(14).then(function(){var e=[i("ow5t")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/article/edit",name:"ArticleEdit",component:function(t){i.e(52).then(function(){var e=[i("jEqQ")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/articletype/add",name:"ArticletypeAdd",component:function(t){i.e(51).then(function(){var e=[i("8vk9")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/articletype/list",name:"ArticletypeList",component:function(t){i.e(31).then(function(){var e=[i("mnEp")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/articletype/edit",name:"ArticletypeEdit",component:function(t){i.e(50).then(function(){var e=[i("/p1w")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/salesitem/list",name:"SalesItemList",component:function(t){i.e(45).then(function(){var e=[i("ImLz")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/salesitem/add",name:"SalesItemAdd",component:function(t){i.e(32).then(function(){var e=[i("1Yqy")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/seckilling/list",name:"SeckillingList",component:function(t){return i.e(42).then(function(){var e=[i("Awn6")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/seckilling/add",name:"SeckillingAdd",component:function(t){return i.e(20).then(function(){var e=[i("ryfP")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/seckilling/detail",name:"SeckillingDetail",component:function(t){return i.e(23).then(function(){var e=[i("tDnL")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/points/list",name:"PointsList",component:function(t){return i.e(43).then(function(){var e=[i("3Cel")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/points/add",name:"PointsAdd",component:function(t){return i.e(25).then(function(){var e=[i("//k/")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/points/detail",name:"PointsDetail",component:function(t){return i.e(35).then(function(){var e=[i("iVnR")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/coupon/list",name:"CouponList",component:function(t){return i.e(44).then(function(){var e=[i("SuEJ")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/coupon/add",name:"CouponAdd",component:function(t){return i.e(24).then(function(){var e=[i("Azpr")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/coupon/detail",name:"CouponDetail",component:function(t){return i.e(22).then(function(){var e=[i("yRLA")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/weixin/wxaconfig",name:"WxaConfig",component:function(t){i.e(38).then(function(){var e=[i("wlW4")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/weixin/wxapay",name:"WxaPayConfig",component:function(t){i.e(37).then(function(){var e=[i("PFpv")];t.apply(null,e)}.bind(this)).catch(i.oe)}}]},{path:"logs",name:"logs",component:function(t){i.e(49).then(function(){var e=[i("CI0q")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"renew",name:"renew",component:function(t){i.e(46).then(function(){var e=[i("aYn7")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"about",name:"about",component:function(t){i.e(54).then(function(){var e=[i("ezOL")];t.apply(null,e)}.bind(this)).catch(i.oe)}}],d={path:"/login",name:"login",component:function(t){i.e(7).then(function(){var e=[i("Xm6h")];t.apply(null,e)}.bind(this)).catch(i.oe)}},u={path:"/register",name:"register",component:function(t){i.e(6).then(function(){var e=[i("5zCw")];t.apply(null,e)}.bind(this)).catch(i.oe)}},p={path:"wxcallback",name:"WxCallback",component:function(t){i.e(28).then(function(){var e=[i("K/3k")];t.apply(null,e)}.bind(this)).catch(i.oe)},alias:"/weixin/callback"},h=i("L/hj"),m=i("BTaQ"),f=i.n(m),v=["/login","/error","/wxlogin","/register"];n.default.use(r.a);var g=new r.a({routes:[{path:"/",component:function(t){i.e(16).then(function(){var e=[i("wW0A")];t.apply(null,e)}.bind(this)).catch(i.oe)},children:l},d,u,p]});g.beforeEach(function(t,e,i){f.a.LoadingBar.start();var n=Object(h.a)().token;(e.meta.keepAlive=!1,e.meta.pname)&&(e.meta.pname.find(function(e){return e==t.name})&&(t.meta.keepAlive=!0));if(n||-1!=v.indexOf(t.path)){if("/home"!=t.path)return i();var a=location.search;a&&a.indexOf("auth_code")>-1?i("/weixin/callback"):i("/member/list")}else i("/login")}),g.afterEach(function(t){f.a.LoadingBar.finish()});var y=g,w=(i("+skl"),i("g6v0")),b=i.n(w),k=(i("cie1"),i("//Fk")),x=i.n(k),I=i("mtWM"),C=i.n(I),S={member_list:"/member/list",member_get:"/member/get",member_tempget:"member/tempget",member_setparentid:"/member/setparentid",article_add:"/article/add",article_edit:"/article/edit",article_del:"/article/del",article_list:"/article/list",articletype_add:"/articletype/add",articletype_edit:"/articletype/edit",articletype_del:"/articletype/del",articletype_list:"/articletype/list",articletype_detail:"/articletype/get",category_add:"/category/add",category_edit:"/category/edit",category_del:"/category/del",category_tree:"/category/parent",category_list:"/category/list",category_detail:"/category/get",item_add:"/item/add",item_edit:"/item/edit",item_detail:"/item/get",item_list:"/item/list",item_edithidden:"/item/edithidden",item_repealmodel:"item/repealmodel",item_top:"/item/edittop",order_list:"/order/list",order_detail:"/order/get",swiper_list:"/swiper/list",swiper_add:"/swiper/add",swiper_edit:"/swiper/edit",swiper_del:"/swiper/del",swiper_detail:"/swiper/get",qiniu_token:"/qiniu/token",favorite_list:"/favorite/list",itemattr_list:"/itemattr/list",itemattr_add:"/itemattr/add",itemsku_add:"/itemsku/add",itemsku_edit:"/itemsku/edit",itemsku_list:"/itemsku/list",itemsku_del:"/itemsku/del",itempicture_list:"/itempicture/list",itempicture_add:"/itempicture/add",itempicture_del:"/itempicture/del",itempicture_edit:"/itempicture/edit",itemspec_add:"/itemspec/add",itemspec_edit:"/itemspec/edit",itemspec_del:"itemspec/del",itemspec_list:"/itemspec/list",payconfig_detail:"/payconfig/get",payconfig_save:"/payconfig/save",wxa_authstate:"/wxa/authstate",wxa_save:"/wxa/save",wxa_authcode:"/wxa/callback",qiniu_upload:"https://up.qbox.me",qiniu_img:'"http://akivipic.meisaas.com',wxa_auth:"/wxa/accredit",appointment_list:"/appointment/list",appointment_cancel:"/appointment/editiscancel",appointment_complete:"/appointment/editisfinish",appointment_detail:"/appointment/get",company_edit:"/company/edit",company_detail:"/company/get",template_list:"/template/list",template_detail:"/template/get",wxareview_apply:"/wxareview/apply",wxareview_get:"wxareview/get",wxareview_qrcode:"/wxareview/qrcode",wxa_status:"/wxa/get",logistic_add:"/order/addlogisticsnum",wxareview_category:"/wxareview/getcategory",wxareview_update:"/wxareview/update",wxareview_cancel:"/wxareview/cancel",tempublic_list:"/templatemsg/listlibrary",tempublic_detail:"/templatemsg/getlibrary",tempublic_add:"/templatemsg/add",templatemsg_list:"/templatemsg/list",templatemsg_del:"/templatemsg/del",salesitem_add:"/itemgroupon/add",coupon_add:"/coupon/add",coupon_list:"/coupon/list",item_editmodel:"/item/editbymodel",membercard_add:"/cardstyle/add",membercard_list:"/cardstyle/list",membercard_detail:"/cardstyle/get",membercard_edit:"/cardstyle/edit",coupon_editisissued:"/coupon/editisissued",tag_listall:"/tag/listall",tag_add:"/tag/add",tag_edit:"/tag/edit",itemtag_add:"/itemidtagid/add",store_apply:"/applyshop/list",storeapply_del:"/applyshop/del",store_add:"/store/add",store_list:"/store/list",store_get:"/store/get",store_update:"/store/ishidden",get_configuration:"/configuration/list",update_configuration:"/configuration/update",sms_checkcode:"/sms/checkcode",administrator_register:"/administrator/register",administrator_list:"/administrator/list",administrator_smslogin:"/administrator/smslogin",administrator_del:"/administrator/del",merchant_smslogin:"/merchant/smslogin",accountflow_get:"/accountflow/get",movedeposit_list:"movedeposit/list",movedeposit_audit:"movedeposit/audit",wxa_getqrcode:"/wxa/getqrcode",applyshop_list:"/applyshop/list",applyshop_updatestate:"/applyshop/updatestate",repair_list:"/repair/list",repair_get:"/repair/get",repair_editstate:"/repair/editstate"};C.a.defaults.timeout=1e4,C.a.defaults.baseURL="http://127.0.0.1:5000/admin",C.a.interceptors.request.use(function(t){if("post"===t.method&&"http://upload.qiniu.com"!==t.url&&"https://up.qbox.me"!==t.url){var e=t.data,i=Object(h.a)();i.merid&&i.token&&(t.headers.token=i.token,e.merid=i.merid);var n=Object(h.d)(e,i.token);e.sign=n,t.data=c.a.stringify(e)}return t},function(t){return _.toast("错误的传参","fail"),x.a.reject(t)}),C.a.interceptors.response.use(function(t){return"1"!=t.data.result&&"100009"==t.data.code&&(f.a.Message.error(t.data.msg),setTimeout(function(){y.push("/login")},2e3)),t});var L=C.a,M=S,$={name:"vue-html5-editor",showModuleName:!1,icons:{text:"fa fa-pencil",color:"fa fa-paint-brush",font:"fa fa-font",align:"fa fa-align-justify",list:"fa fa-list",link:"fa fa-chain",unlink:"fa fa-chain-broken",tabulation:"fa fa-table",image:"fa fa-file-image-o",hr:"fa fa-minus",eraser:"fa fa-eraser",undo:"fa-undo fa","full-screen":"fa fa-arrows-alt",info:"fa fa-info"},image:{sizeLimit:524288,upload:{url:null,headers:{},params:{},fieldName:{}},compress:{width:1600,height:1600,quality:80},uploadHandler:function(t){var e=JSON.parse(t);if(e.ok)return e.data;alert(e.msg)}},language:"zh-cn",i18n:{"zh-cn":{align:"对齐方式",image:"图片",list:"列表",link:"链接",unlink:"去除链接",table:"表格",font:"文字","full screen":"全屏",text:"排版",eraser:"格式清除",info:"关于",color:"颜色","please enter a url":"请输入地址","create link":"创建链接",bold:"加粗",italic:"倾斜",underline:"下划线","strike through":"删除线",subscript:"上标",superscript:"下标",heading:"标题","font name":"字体","font size":"文字大小","left justify":"左对齐","center justify":"居中","right justify":"右对齐","ordered list":"有序列表","unordered list":"无序列表","fore color":"前景色","background color":"背景色","row count":"行数","column count":"列数",save:"确定",upload:"上传",progress:"进度",unknown:"未知","please wait":"请稍等",error:"错误",abort:"中断",reset:"重置"}},hiddenModules:[],visibleModules:["text","color","font","align","list","link","unlink","tabulation","image","hr","eraser","undo","full-screen"],modules:{}},A=i("FGPZ"),q={install:function(t){t.component("vue-editor",A.a)}},O=i("1lS0"),z=i("dc86"),E=i("mXpl"),D={name:"item-select",props:["value"],data:function(){return{chosedId:this.value||"",cates:[],cateid:0,keyword:"",totalcount:0,pagesize:6,pageindex:0,items:[],chosedItem:{},tempItem:"",showModal:!1,showPreview:!1}},created:function(){this.getCategoryList(),this.getItemList()},methods:{handleHidden:function(t){t||(this.tempItem="")},handleCancel:function(){this.showModal=!1},handleOk:function(){var t=this;this.tempItem.id||""?this.$Confirm("你选择了商品："+this.tempItem.title+"，请确认选择","提示").then(function(){t.chosedItem=t.tempItem,t.chosedId=t.chosedItem.id,t.showModal=!1}).catch(function(){}):this.$Confirm("未选中任何商品，确定要离开选择页面吗","提示").then(function(){t.showModal=!1}).catch(function(){})},handleShowModal:function(){this.showModal=!0},handleInput:function(){},handleSearch:function(){this.pageindex=0,this.getItemList()},handleChoseItem:function(t){this.tempItem=t},getCategoryList:function(){var t=this;this.$http.post(this.$api.category_list,{}).then(function(e){e.data.data&&(t.cates=e.data.data)}).catch(function(t){})},getItemList:function(){var t=this;return this.$http.post(this.$api.item_list,this.conditions).then(function(e){"1"==e.data.result&&(t.items=e.data.data,t.totalcount=+e.data.totalcount)}).catch(function(){})},indexChange:function(t){this.pageindex=t-1,this.getItemList()}},watch:{chosedId:function(t){t!=this.value&&(this.$emit("input",t),this.$emit("on-selected",this.chosedItem))},value:function(t){var e=this;t!=this.chosedId&&(this.chosedId=t,this.chosedItem&&this.chosedItem.id==t&&t||(this.chosedItem="",this.$http.post(this.$api.item_detail,{itemid:t}).then(function(t){"1"==t.data.result&&t.data.data?e.chosedItem=t.data.data.item:(e.$Message.error(t.data.msg),e.chosedItem="",e.chosedId="")}).catch(function(t){e.$Message.error("请求出错"),e.chosedItem="",e.chosedId=""})))}},computed:{conditions:function(){return{pageindex:this.pageindex||0,pagesize:this.pagesize,keywords:this.keyword,cateid:this.cateid,itemmodel:1,ishidden:0,itemtype:1}}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.chosedId?t._e():i("Button",{attrs:{type:"ghost"},on:{click:t.handleShowModal}},[t._v("选择商品")]),t._v(" "),t.chosedId&&t.chosedItem.title?i("div",[i("span",{staticStyle:{color:"#3bc0c3"}},[t._v(t._s(t.chosedItem.title))]),t._v(" "),i("Button",{staticStyle:{"margin-left":"20px"},attrs:{size:"small"},on:{click:t.handleShowModal}},[t._v("更换")]),t._v(" "),i("Button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small"},on:{click:function(e){t.showPreview=!0}}},[t._v("详情")])],1):t._e(),t._v(" "),i("Modal",{attrs:{width:"800"},on:{"on-visible-change":t.handleHidden},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("div",{staticClass:"item-select-main"},[i("div",{staticStyle:{"border-bottom":"1px solid silver","padding-bottom":"20px"}},[i("span",[t._v("选择分类：")]),t._v(" "),i("Select",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{placeholder:"商品分类",clearable:""},model:{value:t.cateid,callback:function(e){t.cateid=e},expression:"cateid"}},[i("Option",{attrs:{value:0}},[t._v("全部")]),t._v(" "),t._l(t.cates,function(e){return i("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.catename))])})],2),t._v(" "),i("Input",{staticStyle:{width:"150px",margin:"0 20px"},attrs:{placeholder:"搜索商品名称",clearable:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),i("Button",{on:{click:t.handleSearch}},[t._v("搜索")])],1),t._v(" "),i("div",{staticClass:"swiper-item-list"},[t._l(t.items,function(e){return i("div",{key:e.id,staticClass:"swiper-item-detail",class:{chosed:t.tempItem.id==e.id},on:{click:function(i){t.handleChoseItem(e)}}},[i("img",{staticClass:"pic",attrs:{src:e.picurl}}),t._v(" "),i("div",{staticClass:"texts"},[i("div",{staticClass:"texts-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",[t._v("价格:￥ "+t._s(e.price))]),t._v(" "),i("div",[t._v("库存："+t._s(e.num))])])])}),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),t.items.length?t._e():i("div",{staticStyle:{color:"#aaa","text-align":"center",padding:"30px"}},[t._v("暂无商品")])],2),t._v(" "),i("div",{staticClass:"swiper-item-page"},[i("Page",{attrs:{total:t.totalcount,"page-size":t.pagesize,"show-total":"",current:t.pageindex+1},on:{"on-change":t.indexChange}})],1)]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"ghost"},on:{click:t.handleCancel}},[t._v("取消")]),t._v(" "),i("Button",{attrs:{type:"primary"},on:{click:t.handleOk}},[t._v("确认")])],1)]),t._v(" "),i("Modal",{model:{value:t.showPreview,callback:function(e){t.showPreview=e},expression:"showPreview"}},[i("div",{attrs:{slot:"header"},slot:"header"},[t._v("商品详情")]),t._v(" "),i("div",[i("div",{staticClass:"swiper-item-detail"},[i("img",{staticClass:"pic",attrs:{src:t.chosedItem.picurl}}),t._v(" "),i("div",{staticClass:"texts"},[i("div",{staticClass:"texts-title"},[t._v(t._s(t.chosedItem.title))]),t._v(" "),i("div",[t._v("价格:￥ "+t._s(t.chosedItem.price))]),t._v(" "),i("div",[t._v("库存："+t._s(t.chosedItem.num))])])]),t._v(" "),i("div",{staticStyle:{clear:"both"}})])])],1)},staticRenderFns:[]};var V=i("VU/8")(D,P,!1,function(t){i("1hy+")},null,null).exports,F={props:{value:{type:Array,default:function(){return[]}}},data:function(){return{cates:[],cateid:0,keyword:"",totalcount:0,pagesize:6,pageindex:0,items:[],chosedItem:[],tempItem:[],showModal:!1}},created:function(){this.valueChange(this.value),this.getCategoryList(),this.getItemList()},methods:{valueChange:function(t){var e=this,i=this.chosedItem.map(function(t){return t.id});if(!this.isEqual(i,t)){var n=this.getDiff(t,this.chosedItem),a=n.items,o=n.missed;o.length?x.a.all(o.map(function(t){return e.getItemDetail(t)})).then(function(t){e.chosedItem=a.concat(t)}).catch(function(t){e.chosedItem=[],e.$Message.error("获取商品详情失败")}):this.chosedItem=a}},handleHidden:function(t){this.tempItem=t?this.chosedItem.map(function(t){return t}):[]},handleCancel:function(){var t=this;this.$Confirm("你的选择将不会保存确定取消吗","提示").then(function(){t.showModal=!1}).catch(function(t){})},handleOk:function(){var t=this;this.$Confirm("你选择了商品："+this.tempItemTitle+"，请确认选择","提示").then(function(){t.chosedItem=t.tempItem.map(function(t){return t}),t.showModal=!1}).catch(function(){})},handleShowModal:function(){this.showModal=!0},handleInput:function(){},handleSearch:function(){this.pageindex=0,this.getItemList()},handleChoseItem:function(t){var e=this.tempItem.findIndex(function(e){return e.id==t.id});-1==e?this.tempItem.push(t):this.tempItem.splice(e,1)},getCategoryList:function(){var t=this;this.$http.post(this.$api.category_list,{}).then(function(e){e.data.data&&(t.cates=e.data.data)}).catch(function(t){})},getItemList:function(){var t=this;return this.$http.post(this.$api.item_list,this.conditions).then(function(e){"1"==e.data.result&&(t.items=e.data.data,t.totalcount=+e.data.totalcount)}).catch(function(){})},indexChange:function(t){this.pageindex=t-1,this.getItemList()},isEqual:function(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;var i=_.cloneDeep(t),n=_.cloneDeep(e);return _.isEqual(i.sort(),n.sort())},hasChosed:function(t){return this.tempItem.findIndex(function(e){return e.id==t})>-1},getDiff:function(t,e){var i=[],n=[];return t.forEach(function(t){var a=e.find(function(e){return e.id==t});a?i.push(a):n.push(t)}),{items:i,missed:n}},getItemDetail:function(t){return this.$http.post(this.$api.item_detail,{itemid:t}).then(function(t){return"1"==t.data.result?t.data.data.item:x.a.reject(t.data.msg)})}},watch:{chosedItem:function(t){var e=t.map(function(t){return t.id});this.isEqual(e,this.value)||this.$emit("input",e)},value:function(t){this.valueChange(t)}},computed:{conditions:function(){return{pageindex:this.pageindex||0,pagesize:this.pagesize,keywords:this.keyword,cateid:this.cateid,itemmodel:1}},tempItemTitle:function(){var t=this.tempItem.reduce(function(t,e){return t+","+e.title},"");return t.length?t.slice(1):"无"},chosedTitle:function(){var t=this.chosedItem.reduce(function(t,e){return t+","+e.title},"");return t.length?t.slice(1):"无"}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select-wrapper"},[i("div",{staticStyle:{color:"#3bc0c3"}},[t._v("当前选择的商品："+t._s(t.chosedTitle))]),t._v(" "),t.chosedItem.length?i("div",[i("Button",{attrs:{size:"small"},on:{click:t.handleShowModal}},[t._v("更换")]),t._v(" "),i("Button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small"}},[t._v("详情")])],1):i("Button",{attrs:{type:"ghost"},on:{click:t.handleShowModal}},[t._v("选择商品")]),t._v(" "),i("Modal",{attrs:{width:"800"},on:{"on-visible-change":t.handleHidden},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("div",{staticClass:"item-select-main"},[i("div",{staticStyle:{"border-bottom":"1px solid silver","padding-bottom":"20px"}},[i("span",[t._v("选择分类：")]),t._v(" "),i("Select",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{placeholder:"商品分类",clearable:""},model:{value:t.cateid,callback:function(e){t.cateid=e},expression:"cateid"}},[i("Option",{attrs:{value:0}},[t._v("全部")]),t._v(" "),t._l(t.cates,function(e){return i("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.catename))])})],2),t._v(" "),i("Input",{staticStyle:{width:"150px",margin:"0 20px"},attrs:{placeholder:"搜索商品名称",clearable:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),i("Button",{on:{click:t.handleSearch}},[t._v("搜索")])],1),t._v(" "),i("div",{staticClass:"swiper-item-list"},[t._l(t.items,function(e){return i("div",{key:e.id,staticClass:"swiper-item-detail",class:{chosed:t.hasChosed(e.id)},on:{click:function(i){t.handleChoseItem(e)}}},[i("img",{staticClass:"pic",attrs:{src:e.picurl}}),t._v(" "),i("div",{staticClass:"texts"},[i("div",{staticClass:"texts-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",[t._v("价格:￥ "+t._s(e.price))]),t._v(" "),i("div",[t._v("库存："+t._s(e.num))])])])}),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),t.items.length?t._e():i("div",{staticStyle:{color:"#aaa","text-align":"center",padding:"30px"}},[t._v("暂无商品")])],2),t._v(" "),i("div",{staticClass:"swiper-item-page"},[i("Page",{attrs:{total:t.totalcount,"page-size":t.pagesize,"show-total":"",current:t.pageindex+1},on:{"on-change":t.indexChange}})],1)]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("div",{staticStyle:{"text-align":"left"}},[t._v("已选择:"+t._s(t.tempItemTitle))]),t._v(" "),i("Button",{attrs:{type:"ghost"},on:{click:t.handleCancel}},[t._v("取消")]),t._v(" "),i("Button",{attrs:{type:"primary"},on:{click:t.handleOk}},[t._v("确认")])],1)])],1)},staticRenderFns:[]};var j=i("VU/8")(F,R,!1,function(t){i("ourz")},"data-v-22e803c3",null).exports,B={install:function(t){t.prototype.$Confirm=function(t,e){var i=this;return new x.a(function(n,a){i.$Modal.confirm({title:e||"确认",content:t,onOk:function(){return n(!0)},onCancel:function(){return a(!1)}})})},t.component("number-input",O.a),t.component("single-uploader",z.a),t.component("multi-uploader",E.a),t.component("item-select",V),t.component("multi-item-select",j)}},N=i("uXeI"),T=i.n(N);n.default.config.productionTip=!1,n.default.prototype.$sha1=T.a,n.default.use(f.a),n.default.use(q);n.default.prototype.$sitemap={prvname:"",currname:""},n.default.prototype.$api=M;n.default.prototype.$menuactive={open:[],active:0},n.default.prototype.$http=L,n.default.use(b.a,$),n.default.use(B),new n.default({el:"#app",router:y,template:"<App/>",components:{App:o}})},b4tD:function(t,e){},cie1:function(t,e){},dc86:function(t,e,i){"use strict";var n=i("//Fk"),a=i.n(n),o={props:["format","image"],data:function(){var t=[];return this.image&&t.push({url:this.image}),{defaultList:t,uploadList:[],viewSrc:"",visible:!1,uploadURL:this.$api.qiniu_upload,qiniuData:{token:"",key:""},bucket:"http://akivipic.meisaas.com/"}},methods:{handleChangePic:function(t){var e=this;this.confirm("上传一张新图片替换原图片").then(function(t){e.$refs.trigger.click()}).catch(function(t){})},handleSuccess:function(t,e,i){e.url=this.bucket+t.key,i.splice(0,i.length-1),this.$emit("change",i[0])},handleFormatError:function(){},handleMaxSize:function(t){this.$Notice.warning({title:"图片大小超出限制",desc:"文件 "+t.name+" 太大, 不能超过4M."})},handleBeforeUpload:function(t,e){var i=t.name.split(".");return!(i.length<2)&&(i=i.pop(),this.getToken(i))},getToken:function(t){var e=this;return this.$http.post("/qiniu/token",{}).then(function(i){e.qiniuData.token=i.data.data.token,e.qiniuData.key=e.mockKey()+"."+t}).catch(function(t){return a.a.reject(!1)})},handleView:function(t){this.viewSrc=t,this.visible=!0},handleRemove:function(t){var e=this;this.confirm("图片将永久删除，请确认！","警告").then(function(i){var n=e.$refs.upload.fileList;e.$refs.upload.fileList.splice(n.indexOf(t),1),e.$emit("change","")}).catch(function(t){})},confirm:function(t,e){var i=this;return new a.a(function(n,a){i.$Modal.confirm({title:e||"确认",content:t,onOk:function(){return n(!0)},onCancel:function(){return a(!1)}})})},mockKey:function(){for(var t=(""+Date.now()).slice(-8),e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_",i=e.length,n="",a=0;a<8;a++)n+=e[Math.floor(Math.random()*i)];return n+t}},mounted:function(){this.uploadList=this.$refs.upload.fileList},watch:{image:function(t){t?this.uploadList.splice(0,1,{url:t,status:"finished"}):this.uploadList.splice(0)}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.uploadList,function(e){return i("div",{staticClass:"upload-list"},["finished"===e.status?[i("img",{attrs:{src:e.url}}),t._v(" "),i("div",{staticClass:"action-cover"},[i("div",{staticClass:"action-cover-icons"},[i("Icon",{attrs:{type:"ios-eye-outline",title:"查看大图"},nativeOn:{click:function(i){t.handleView(e.url)}}}),t._v(" "),i("Icon",{attrs:{type:"ios-trash-outline",title:"删除图片"},nativeOn:{click:function(i){t.handleRemove(e)}}}),t._v(" "),i("Icon",{attrs:{type:"ios-refresh-outline",title:"更换图片"},nativeOn:{click:function(i){t.handleChangePic(e)}}})],1)])]:[e.showProgress?i("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()]],2)}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.uploadList.length,expression:"!uploadList.length"}],staticClass:"show-area",on:{click:function(e){t.$refs.trigger.click()}}},[i("Icon",{attrs:{type:"plus",size:"30"}})],1),t._v(" "),i("Upload",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload",attrs:{"show-upload-list":!1,"on-success":t.handleSuccess,format:t.format?t.format:[],"max-size":4096,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,action:t.uploadURL,data:t.qiniuData,"default-file-list":t.defaultList}},[i("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"trigger",attrs:{tabindex:"-1"}})]),t._v(" "),i("Modal",{attrs:{title:"View Image"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.viewSrc?i("img",{staticStyle:{width:"100%"},attrs:{src:t.viewSrc}}):t._e()])],2)},staticRenderFns:[]};var c=i("VU/8")(o,s,!1,function(t){i("b4tD")},"data-v-5d08b10a",null);e.a=c.exports},mXpl:function(t,e,i){"use strict";var n=i("//Fk"),a=i.n(n),o={props:{images:{type:Array,default:function(){return[]}},format:{type:Array,default:function(){return[]}},max:{type:Number,default:5}},data:function(){return{changeId:"",uploadList:[],viewSrc:"",visible:!1,uploadURL:this.$api.qiniu_upload,qiniuData:{token:"",key:""},bucket:"http://akivipic.meisaas.com/"}},computed:{isMax:function(){return this.images.length>=this.max}},methods:{handleAddNewPic:function(){this.changeId="",this.$refs.trigger.click()},handleChangePic:function(t){var e=this;this.confirm("上传一张新图片替换原图片").then(function(i){e.changeId=t.id,e.$refs.trigger.click()}).catch(function(t){})},handleSuccess:function(t,e,i){e.url=this.bucket+t.key,i.splice(i.length-1,1),this.changeId?(this.$emit("on-change",{picurl:e.url,id:this.changeId}),this.changeId=""):this.$emit("on-add",e.url)},handleFormatError:function(){},handleMaxSize:function(t){this.$Notice.warning({title:"图片大小超出限制",desc:"文件 "+t.name+" 太大, 不能超过4M."})},handleBeforeUpload:function(t,e){var i=t.name.split(".");return!(i.length<2)&&(i=i.pop(),this.getToken(i))},getToken:function(t){var e=this;return this.$http.post("/qiniu/token",{}).then(function(i){e.qiniuData.token=i.data.data.token,e.qiniuData.key=e.mockKey()+"."+t}).catch(function(t){return a.a.reject(!1)})},handleView:function(t){this.viewSrc=t,this.visible=!0},handleRemove:function(t){var e=this;this.confirm("图片将永久删除，请确认！","警告").then(function(i){e.$emit("on-del",t.id)}).catch(function(t){})},confirm:function(t,e){var i=this;return new a.a(function(n,a){i.$Modal.confirm({title:e||"确认",content:t,onOk:function(){return n(!0)},onCancel:function(){return a(!1)}})})},mockKey:function(){for(var t=(""+Date.now()).slice(-8),e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_",i=e.length,n="",a=0;a<8;a++)n+=e[Math.floor(Math.random()*i)];return n+t}},mounted:function(){this.uploadList=this.$refs.upload.fileList},watch:{}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.images,function(e){return i("div",{staticClass:"upload-list"},[i("img",{attrs:{src:e.picurl}}),t._v(" "),i("div",{staticClass:"action-cover"},[i("div",{staticClass:"action-cover-icons"},[i("Icon",{attrs:{type:"ios-eye-outline",title:"查看大图"},nativeOn:{click:function(i){t.handleView(e.picurl)}}}),t._v(" "),i("Icon",{attrs:{type:"ios-trash-outline",title:"删除图片"},nativeOn:{click:function(i){t.handleRemove(e)}}}),t._v(" "),i("Icon",{attrs:{type:"ios-refresh-outline",title:"更换图片"},nativeOn:{click:function(i){t.handleChangePic(e)}}})],1)])])}),t._v(" "),t._l(t.uploadList,function(e){return i("div",{staticClass:"upload-list"},[e.showProgress?i("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()],1)}),t._v(" "),t.isMax?i("div",{staticClass:"max-hint"},[t._v("\n    不能超过"+t._s(t.max)+"张\n  ")]):i("div",{staticClass:"show-area",on:{click:t.handleAddNewPic}},[i("Icon",{attrs:{type:"plus",size:"30"}})],1),t._v(" "),i("Upload",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload",attrs:{"show-upload-list":!1,"on-success":t.handleSuccess,format:t.format,"max-size":4096,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,action:t.uploadURL,data:t.qiniuData}},[i("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"trigger",attrs:{tabindex:"-1"}})]),t._v(" "),i("Modal",{attrs:{title:"预览"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.viewSrc?i("img",{staticStyle:{width:"100%"},attrs:{src:t.viewSrc}}):t._e()])],2)},staticRenderFns:[]};var c=i("VU/8")(o,s,!1,function(t){i("tIob")},"data-v-47b24007",null);e.a=c.exports},ourz:function(t,e){},tIob:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3863e775a4415d3ed251.js.map