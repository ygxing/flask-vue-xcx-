webpackJsonp([28],{Dids:function(t,e){},"K/3k":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mw3O"),o=i.n(n),a={data:function(){return{params:{}}},mounted:function(){var t=location.search.slice(1),e=o.a.parse(t);this.postAuthCode(e.auth_code)},methods:{postAuthCode:function(t){var e=this;this.$http.post(this.$api.wxa_authcode,{authcode:t}).then(function(t){e.$Message.success("授权成功"),setTimeout(function(){location.href=location.origin+location.pathname+"#/weixin/wxaconfig"},1e3)}).catch(function(t){e.$Message.error("授权失败"),setTimeout(function(){location.href=location.origin+location.pathname+"#/weixin/wxaconfig"},1e3)})}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Spin",{attrs:{size:"large",fix:""}},[e("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"load-c",size:"18"}}),this._v(" "),e("div",[this._v("正在授权，请稍后...")])],1)],1)},staticRenderFns:[]};var c=i("VU/8")(a,s,!1,function(t){i("Dids")},null,null);e.default=c.exports}});
//# sourceMappingURL=28.598288eeee067fe2c99e.js.map