(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-513f"],{"3bfb":function(n,t,e){},"413b":function(n,t,e){"use strict";var i=e("3bfb"),r=e.n(i);r.a},bb68:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("b-row",[e("b-col",[e("h2",[n._v("Shippingman Project")])])],1),e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #000"},attrs:{id:"carousel",controls:"",indicators:"",background:"#ababab",interval:4e3},on:{"sliding-start":n.onSlideStart,"sliding-end":n.onSlideEnd},model:{value:n.slide,callback:function(t){n.slide=t},expression:"slide"}},n._l(n.shippingmanImages,function(n){return e("b-carousel-slide",{key:n.id,attrs:{text:n.description,"img-src":n.src}})})),e("b-row",{staticClass:"mt-5"},[e("b-col",[e("h4",[n._v("작업 내용")]),e("hr"),e("p",[n._v("\n        - Integration, Shipment Page Front-end 작업"),e("br")])])],1),e("b-row",{staticClass:"mt-2"},[e("b-col",[e("h4",[n._v("사용 기술")]),e("hr"),e("p",[n._v("\n        - HTML5"),e("br"),n._v("\n        - CSS3"),e("br"),n._v("\n        - Bootstrap-vue"),e("br"),n._v("\n        - Javascript"),e("br"),n._v("\n        - Vue.js(veux, mixin 사용)"),e("br")])])],1)],1)},r=[],o=e("c93e"),a=e("2f62"),s=Object(a["a"])("work"),c=s.mapState,l={name:"Shippingman",data:function(){return{slide:0,sliding:null}},created:function(){this.passTheStatus("shippingman")},mounted:function(){this.$store.dispatch("work/getShippingman")},methods:{onSlideStart:function(n){this.sliding=!0},onSlideEnd:function(n){this.sliding=!1}},computed:Object(o["a"])({},c(["shippingmanImages"]))},u=l,b=(e("413b"),e("2877")),p=Object(b["a"])(u,i,r,!1,null,"6e4c3f15",null);p.options.__file="Shippingman.vue";t["default"]=p.exports},c93e:function(n,t,e){"use strict";function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){i(n,t,e[t])})}return n}e.d(t,"a",function(){return r})}}]);
//# sourceMappingURL=chunk-513f.a6f4e665.js.map