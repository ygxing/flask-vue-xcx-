webpackJsonp([7],{"4U2W":function(t,e){},QHXj:function(t,e){},Xm6h:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("L/hj"),n={data:function(){var t=localStorage.getItem("mobile");localStorage.getItem("code");return{loginType:"snslogin",login:{mobile:t||"",code:""},showCount:!1,countnum:60,codeLoading:!1,loading:!1,rules:{mobile:[{required:!0,message:"请输入手机号码！",trigger:"blur"}],code:[{required:!0,message:"请输入短信验证码！"}]}}},methods:{handleSubmit:function(t){var e=this,i=this.$refs[t];i&&i.validate(function(t){t?e.handleLogin():e.$Message.error("请填写正确的登录信息!")})},handleLogin:function(){var t=this;return this.loading=!0,this.$http.post(this.$api.administrator_smslogin,this.login).then(function(e){var i=e.data;1!=i.result?t.$Message.error(i.msg):(Object(s.c)({merid:e.data.data[0].merid,token:e.data.data[0].token}),localStorage.setItem("mobile",t.login.mobile),localStorage.setItem("code",t.login.code),t.$Message.success("登录成功"),t.$router.push("/"))}).catch(function(e){t.$Message.error("登录失败!")}).then(function(e){t.loading=!1})},handleGetCode:function(){var t=this;if(this.login.mobile)return this.codeLoading=!0,this.$http.post(this.$api.sms_checkcode,{mobile:this.login.mobile}).then(function(e){"1"==e.data.result?t.getCode():t.$Message.error(e.data.msg)}).catch(function(e){t.$Message.error("获取验证码失败!",e)}).then(function(e){t.codeLoading=!1});this.$Message.error("请输入手机号码！")},getCode:function(){this.showCount=!0,this.countnum=60,this.timer()},timer:function(){this.countnum>0?(this.countnum--,setTimeout(this.timer,1e3)):this.showCount=!1},goWxlogin:function(){this.$router.push("/wxlogin")}},components:{"wx-login":i("lxV9").a}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-page"},[t._m(0),t._v(" "),i("div",{staticClass:"main-container"},[i("div",{staticClass:"login-main clear-fix"},[i("div",{staticClass:"layout"},[i("div",{staticClass:"logintabs clear-fix"},[i("div",{staticStyle:{"text-align":"center",width:"100%"},on:{click:function(e){t.loginType="snslogin"}}},[t._v("手机帐号登录")])]),t._v(" "),i("div",{staticClass:"tabcontent "},["snslogin"===t.loginType?i("div",{staticClass:"snstab"},[i("Form",{ref:"formValidate",attrs:{model:t.login,rules:t.rules}},[i("FormItem",{staticStyle:{"margin-top":"30px"},attrs:{prop:"mobile"}},[i("Input",{attrs:{placeholder:"请输入手机号码！",clearable:"",size:"large"},model:{value:t.login.mobile,callback:function(e){t.$set(t.login,"mobile","string"==typeof e?e.trim():e)},expression:"login.mobile"}})],1),t._v(" "),i("FormItem",{staticStyle:{"margin-top":"30px"},attrs:{prop:"code"}},[i("Input",{attrs:{placeholder:"请输入短信验证码！",clearable:"",size:"large"},model:{value:t.login.code,callback:function(e){t.$set(t.login,"code","string"==typeof e?e.trim():e)},expression:"login.code"}},[t.showCount?i("span",{staticClass:"count",attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.countnum)+"秒后重新获取")]):i("Button",{staticStyle:{width:"120px"},attrs:{slot:"append",type:"ghost",loading:t.codeLoading},on:{click:t.handleGetCode},slot:"append"},[t._v(t._s(t.codeLoading?"正在获取":"点击获取验证码"))])],1)],1),t._v(" "),i("Button",{staticClass:"submit-btn",attrs:{type:"primary",loading:t.loading,size:"large"},on:{click:function(e){t.handleSubmit("formValidate")}}},[t.loading?i("span",[t._v("正在登录..")]):i("span",[t._v("登录")])])],1)],1):t._e(),t._v(" "),"wxlogin"===t.loginType?i("div",{staticClass:"wxtab"},[i("wx-login")],1):t._e()])])])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-header"},[e("div",{staticClass:"header-wrapper"},[e("div",{staticClass:"header-name"},[e("span",[this._v("后台")]),e("span",{staticClass:"sep"},[this._v("|")]),e("span",[this._v("管理系统")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-footer"},[e("p",{staticStyle:{"text-align":"left"}},[this._v("© "),e("span",{staticClass:"copyfont"},[this._v("Copyright")]),this._v(" 2015-2018 后台管理系统 All Rights Reserved")])])}]};var a=i("VU/8")(n,o,!1,function(t){i("QHXj")},"data-v-21f66b16",null);e.default=a.exports},lxV9:function(t,e,i){"use strict";var s={data:function(){return{}},mounted:function(){new WxLogin({self_redirect:!1,id:"login_container",appid:"wx5c1590027955d73b",scope:"snsapi_base",redirect_uri:"http://console.meipins.com/#/login"})},methods:{handleReflesh:function(){this.$nextTick(function(){new WxLogin({self_redirect:!1,id:"login_container",appid:"wx5c1590027955d73b",scope:"snsapi_base",redirect_uri:"http://console.meipins.com/#/login"})})}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"login_container",staticClass:"wx-pic",attrs:{id:"login_container"}}),this._v(" "),e("div",{staticClass:"tips"},[e("span",[this._v("请使用微信扫描二维码登录 ")]),e("span",{staticClass:"reflesh",on:{click:this.handleReflesh}},[e("Icon",{attrs:{type:"refresh"}}),this._v("刷新")],1)])])},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("4U2W")},"data-v-b92be39e",null);e.a=o.exports}});
//# sourceMappingURL=7.6ee5c9137334413791d0.js.map