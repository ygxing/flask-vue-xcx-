webpackJsonp([8],{HXpX:function(t,e){},POLg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("//Fk"),s=i.n(a),r=i("fZjL"),n=i.n(r),l={props:["picurl","itemsku","title"],data:function(){return{}},computed:{sku:function(){if(!this.itemsku)return"";var t=void 0;try{t=JSON.parse(this.itemsku)}catch(e){t={}}var e="";return n()(t).forEach(function(i){e+="/ "+t[i]+" "}),e=e.slice(1)}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-cell-wrapper"},[e("Row",[e("Col",{attrs:{span:8}},[e("img",{staticClass:"item-cell-img",attrs:{src:this.picurl}})]),this._v(" "),e("Col",{attrs:{span:16}},[e("div",{staticClass:"item-cell-title item-cell-text"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"item-cell-sku item-cell-text"},[this._v("\n\t      \t"+this._s(this.sku||"暂无规格")+"\n\t  \t  ")])])],1)],1)},staticRenderFns:[]};var d=i("VU/8")(l,o,!1,function(t){i("HXpX")},null,null).exports,c={data:function(){return{showDelivery:!1,logisticsnum:"",deliveryLoading:!1,orderid:this.$route.query.orderid,orderData:{},orderinfo:[{field:"orderid",label:"订单编号"},{field:"createtime",label:"下单时间"},{field:"updatetime",label:"更新时间"}],payTypeObj:{1:"微信",2:"积分",3:"钱包"},addressInfo:[{field:"phone",label:"联系电话"},{field:"memlevel",label:"会员等级"}],appointInfo:[{field:"mobile",label:"联系电话"},{field:"memlevel",label:"会员等级"}],statusMap:{0:"未支付",1:"待发货",2:"已发货",3:"待评价",5:"已取消",4:"已完成"},tableData:[],addressData:{},itemcolumns:[{title:"商品",key:"title",minWidth:400,render:function(t,e){return t(d,{props:{picurl:e.row.itempic,itemsku:e.row.itemsku,title:e.row.title}})}},{title:"单价(元)",key:"price",width:100,align:"center"},{title:"数量",key:"num",width:100,align:"center"},{title:"小计(元)",key:"count",align:"center",width:150,render:function(t,e){return t("span",+e.row.price*+e.row.num)}}]}},computed:{toPay:function(){return 0==this.orderData.status||5==this.orderData.status?0:1}},components:{"item-cell":d},mounted:function(){this.$sitemap.prvname="订单管理",this.$sitemap.currname="订单详情",this.getOrderDetail(this.orderid)},methods:{backHome:function(){this.$router.go(-1)},getOrderDetail:function(t){var e=this;this.$http.post(this.$api.order_detail,{orderid:t}).then(function(t){var i=t.data.data;"1"==t.data.result&&i&&(e.orderData=i||{},e.addressData=i||{},e.tableData=i||[])}).catch(function(t){})},handleModalChange:function(t){t||(this.logisticsnum="")},handleDelivery:function(){this.showDelivery=!0},handleConfirmDeliv:function(){var t,e=this;(t=this.logisticsnum.trim())?(this.deliveryLoading=!0,this.addLogistic(this.orderid,t).then(function(){e.deliveryLoading=!1,e.showDelivery=!1}).catch(function(t){e.$Message.error(t),e.deliveryLoading=!1})):this.$Message.error("请输入物流单号！")},addLogistic:function(t,e){var i=this;return this.$http.post(this.$api.logistic_add,{orderid:t,logisticsnum:e}).then(function(e){if("1"!=e.data.result)return s.a.reject("添加物流单号失败！");i.$Message.success("添加物流单号成功！"),i.getOrderDetail(t)})},lookMemberDetail:function(){var t=this.orderData.memid;t&&this.$router.push({path:"/member/detail",query:{id:t}})}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"10px"}},[i("Button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:t.backHome}},[t._v("返回上一级")]),t._v(" "),i("div",{staticClass:"order-sec-wrapper"},[i("div",{staticClass:"sec-header",staticStyle:{position:"relative"}},[i("span",[t._v("发货信息")]),t._v(" "),i("Button",{staticStyle:{position:"absolute",right:"0",top:"0",height:"100%",width:"100px"},attrs:{type:"primary"},on:{click:t.lookMemberDetail}},[t._v("查看会员信息")])],1),t._v(" "),Object.keys(t.addressData).length?i("div",{staticClass:"sec-main"},[i("div",{staticClass:"order-mem-avatar"},[i("Avatar",{staticStyle:{"background-color":"#3bc0c3"},attrs:{icon:"person"}}),t._v(" "),i("span",{staticClass:"mem-name"},[t._v(t._s("收货人姓名：")+t._s(t.addressData?t.addressData.realname:""))])],1),t._v(" "),i("div",{staticClass:"order-info-detail"},[i("span",[t._v("订单状态:")]),i("span",[t._v(t._s(t.statusMap[t.orderData.paystatus]))])]),t._v(" "),i("div",{staticClass:"order-info-detail"},[i("span",[t._v("联系电话:")]),i("span",[t._v(t._s(t.addressData?t.addressData.telephone:""))])]),t._v(" "),i("div",{staticClass:"order-info-detail"},[i("span",[t._v("收货地址:")]),i("span",[t._v(t._s(t.addressData?t.addressData.province+" - "+t.addressData.city+" - "+t.addressData.district+" - "+t.addressData.address:""))])])]):i("div",{staticClass:"sec-main"},[t._v("\n      未填写收货信息\n    ")])]),t._v(" "),i("div",{staticClass:"order-sec-wrapper"},[i("div",{staticClass:"sec-header"},[t._v("处理订单")]),t._v(" "),i("div",{staticClass:"sec-main"},[i("Button",{staticStyle:{width:"100px"},attrs:{type:"primary",disabled:1!=t.orderData.paystatus},on:{click:t.handleDelivery}},[t._v("发货\n      ")])],1)]),t._v(" "),i("Modal",{on:{"on-visible-change":t.handleModalChange},model:{value:t.showDelivery,callback:function(e){t.showDelivery=e},expression:"showDelivery"}},[i("div",{staticStyle:{color:"#3bc0c3"},attrs:{slot:"header"},slot:"header"},[i("Icon",{attrs:{type:"information-circled"}}),t._v(" "),i("span",[t._v("确认发货")])],1),t._v(" "),i("div",[i("span",[t._v("请输入物流单号：")]),t._v(" "),i("Input",{staticStyle:{width:"300px"},model:{value:t.logisticsnum,callback:function(e){t.logisticsnum=e},expression:"logisticsnum"}})],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"primary",loading:t.deliveryLoading},on:{click:t.handleConfirmDeliv}},[t._v("确认发货")]),t._v(" "),i("Button",{attrs:{type:"ghost"},on:{click:function(e){t.showDelivery=!1}}},[t._v("取消")])],1)])],1)},staticRenderFns:[]};var v=i("VU/8")(c,u,!1,function(t){i("glSE")},"data-v-74909cb6",null);e.default=v.exports},glSE:function(t,e){}});
//# sourceMappingURL=8.d8dab14571f9b42063d6.js.map