webpackJsonp([40],{ayc4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){var t=this;return{showConfirm:!1,totalcount:0,loading:!1,mobileRuleText:"",addMobile:"",mobileRuleBol:!1,adminForm:{pagesize:10,pageindex:0},adminColumns:[{title:"#",width:60,align:"center",render:function(e,i){return i.index+t.adminForm.pageindex*t.adminForm.pagesize+1}},{title:"手机号",key:"mobile",align:"center"},{title:"状态",key:"isauth",align:"center",render:function(t,e){return 1==e.row.isauth?"启用中":"禁用中"}},{title:"操作",align:"center",render:function(e,i){var n="",a=localStorage.getItem("mobile");return a!=i.row.mobile&&(n=e("Button",{props:{type:"primary"},on:{click:function(){t.$Modal.confirm({title:"删除操作",content:"确定要删除该账号吗?",onOk:function(){t.delAccount({mobile:a,adminid:i.row.id,pagesize:10,pageindex:0})},onCancel:function(){}})}}},"删除")),n}}],adminData:[]}},mounted:function(){this.$sitemap.prvname="系统管理",this.$sitemap.currname="管理员列表",this.$menuactive.open=["SystemBlock"],this.$menuactive.active="AdminList",this.getAdminList()},watch:{adminForm:{handler:function(t){this.getAdminList()},deep:!0}},methods:{addAdmin:function(){this.showConfirm=!0,this.mobileRuleBol=!1,this.mobileRuleText="",this.addMobile=""},addRow:function(){var t=this;if(t.mobileRule(),!t.mobileRuleBol){t.showConfirm=!1;var e={mobile:t.addMobile,pagesize:10,pageindex:0};t.$http.post(this.$api.administrator_register,e).then(function(e){1==e.data.result?(t.$Message.success("添加管理员成功!"),t.getAdminList()):t.$Message.error(e.data.msg)})}},mobileRule:function(){/^\d+$/.test(this.addMobile)?11!=this.addMobile.length?(this.mobileRuleBol=!0,this.mobileRuleText="手机号长度不对"):this.mobileRuleBol=!1:(this.mobileRuleBol=!0,this.mobileRuleText="手机号格式不对")},indexChange:function(t){this.adminForm.pageindex=t-1},sizeChange:function(t){this.adminForm.pagesize=t},getAdminList:function(){var t=this;t.loading=!0,t.$http.post(t.$api.administrator_list,t.adminForm).then(function(e){t.$Loading.finish(),"1"==e.data.result&&e.data.data?(t.adminData=e.data.data,t.totalcount=+e.data.totalcount):t.$Message.error(e.data.msg)}).catch(function(e){t.$Message.error("服务器异常"),t.$Loading.error()}).then(function(){t.loading=!1})},delAccount:function(t){var e=this;this.$http.post(this.$api.administrator_del,t).then(function(t){""+t.data.result=="1"?(e.$Message.success("删除成功"),e.getAdminList()):e.$Message.error(t.data.msg)}).catch(function(t){e.$Message.error("服务器异常")})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"20px"}},[i("div",{staticStyle:{"margin-bottom":"20px"}},[i("Button",{attrs:{type:"primary",icon:"ios-plus-empty"},on:{click:t.addAdmin}},[t._v("\n      添加管理员\n    ")])],1),t._v(" "),i("Table",{staticClass:"main-table",attrs:{loading:t.loading,columns:t.adminColumns,data:t.adminData,border:""}}),t._v(" "),i("div",{staticStyle:{"margin-top":"15px",overflow:"hidden"}},[i("div",{staticStyle:{float:"right"}},[i("Page",{attrs:{total:t.totalcount,"page-size":t.adminForm.pagesize,"page-size-opts":[10,20,30,40],"show-elevator":"","show-sizer":"",placement:"top","show-total":""},on:{"on-change":t.indexChange,"on-page-size-change":t.sizeChange}})],1)]),t._v(" "),i("Modal",{attrs:{title:"添加管理员",width:"300"},model:{value:t.showConfirm,callback:function(e){t.showConfirm=e},expression:"showConfirm"}},[i("Input",{attrs:{placeholder:"请输入手机号！",maxlength:11},model:{value:t.addMobile,callback:function(e){t.addMobile="string"==typeof e?e.trim():e},expression:"addMobile"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileRuleBol,expression:"mobileRuleBol"}],staticStyle:{color:"#ed3f14","font-size":"12px",padding:"4px 0 0 4px"}},[t._v(t._s(t.mobileRuleText))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{size:"large"},on:{click:function(e){t.showConfirm=!1}}},[t._v("取消")]),t._v(" "),i("Button",{attrs:{type:"primary",size:"large"},on:{click:t.addRow}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]},o=i("VU/8")(n,a,!1,null,null,null);e.default=o.exports}});
//# sourceMappingURL=40.513f3507d8a00d7fe04f.js.map