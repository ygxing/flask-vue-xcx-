webpackJsonp([35],{SlNZ:function(e,t){},iVnR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("fZjL"),i=a.n(s),r={data:function(){return{sales:{itemmodel:"3",itemid:"",price:0,ishidden:0},itemName:"",originalNum:0,rules:{price:[{validator:function(e,t,a){""!==t&&null!==t||a(new Error("请输入金额")),a()},trigger:"blur"}]}}},mounted:function(){this.$sitemap.prvname="营销活动",this.$sitemap.currname="编辑积分商品",this.getItem()},methods:{getItem:function(){var e=this,t={itemid:this.$route.query.id};e.$http.post(this.$api.item_detail,t).then(function(t){var a=t.data.data;"1"==t.data.result&&a?e.setItem(a.item):e.$Message.error(t.data.msg)}).catch(function(t){e.$Message.error("服务器异常")})},setItem:function(e){this.sales.price=e.integral,this.sales.itemid=e.id,this.originalNum=e.num,this.itemName=e.title},formatData:function(){var e={},t=this;return i()(t.sales).forEach(function(a){e[a]=t.sales[a]}),e},handleSave:function(e){var t=this,a=this;a.$refs[e].validate(function(e){e?t.$http.post(t.$api.item_editmodel,a.formatData()).then(function(e){1==e.data.result?(a.$Message.success("编辑成功"),a.$router.push("/points/list")):a.$Message.error(e.data.msg)}).catch(function(e){a.$Message.error("服务器异常")}):a.$Message.error("请核对信息")})},cancel:function(){this.$router.push("/points/list")}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"20px"}},[a("Form",{ref:"sales",attrs:{model:e.sales,rules:e.rules,"label-position":"left","label-width":120}},[a("FormItem",{attrs:{label:"活动类型"}},[a("Select",{staticClass:"formItem",attrs:{disabled:""},model:{value:e.sales.itemmodel,callback:function(t){e.$set(e.sales,"itemmodel",t)},expression:"sales.itemmodel"}},[a("Option",{attrs:{value:"3"}},[e._v("积分商品")])],1)],1),e._v(" "),a("FormItem",{attrs:{label:"活动商品"}},[a("Input",{staticClass:"formItem",attrs:{disabled:""},model:{value:e.itemName,callback:function(t){e.itemName=t},expression:"itemName"}})],1),e._v(" "),a("FormItem",{attrs:{label:"活动积分",prop:"price"}},[a("InputNumber",{staticClass:"formItem",attrs:{placeholder:"请输入活动价格",min:0},model:{value:e.sales.price,callback:function(t){e.$set(e.sales,"price",t)},expression:"sales.price"}})],1),e._v(" "),a("FormItem",{attrs:{label:"原始库存"}},[a("Input",{staticClass:"formItem",attrs:{disabled:""},model:{value:e.originalNum,callback:function(t){e.originalNum=t},expression:"originalNum"}})],1),e._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSave("sales")}}},[e._v("\n        保存编辑\n      ")]),e._v(" "),a("Button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(r,l,!1,function(e){a("SlNZ")},null,null);t.default=n.exports}});
//# sourceMappingURL=35.9f28e8886db5e3adc2fb.js.map