(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93ee"],{2211:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"app"},[n("AppHeader"),n("div",{attrs:{id:"app-body"}},[n("main",{staticClass:"main"},[n("router-view")],1)]),n("Footer")],1)},a=[],i=(n("cadf"),n("551c"),n("097d"),function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{attrs:{id:"app-header"}},[n("h2",{staticClass:"logo"},[n("router-link",{attrs:{to:{name:"Home"}}},[t._v("MJ PORTFOLIO")])],1),n("b-nav",{attrs:{id:"nav",pills:""}},[n("b-nav-item",{attrs:{to:"/home"},on:{click:function(o){t.selectedNav("home")}}},[n("ion-icon",{attrs:{name:"home"}}),t._v("\n      Home\n    ")],1),n("b-nav-item",{attrs:{to:"/about"},on:{click:function(o){t.selectedNav("about")}}},[n("ion-icon",{attrs:{name:"person"}}),t._v("\n      About\n    ")],1),n("b-nav-item",{attrs:{to:"/work"},on:{click:function(o){t.selectedNav("work")}}},[n("ion-icon",{attrs:{name:"filing"}}),t._v("\n      Work\n    ")],1),n("b-nav-item",{attrs:{to:"/contact"},on:{click:function(o){t.selectedNav("contact")}}},[n("ion-icon",{attrs:{name:"mail"}}),t._v("\n      Contact\n    ")],1)],1),n("span",{staticClass:"menu-toggle-btn",on:{click:t.toggleMenu}},[n("span"),n("span"),n("span")]),n("div",{attrs:{id:"mobile-nav"}},[n("ul",[n("li",{on:{click:function(o){t.selectedNav("home")}}},[n("router-link",{attrs:{to:{name:"Home"}}},[n("ion-icon",{style:{color:t.homeColor},attrs:{name:"home"}})],1)],1),n("li",{on:{click:function(o){t.selectedNav("about")}}},[n("router-link",{attrs:{to:{name:"About"}}},[n("ion-icon",{style:{color:t.aboutColor},attrs:{name:"person"}})],1)],1),n("li",{on:{click:function(o){t.selectedNav("work")}}},[n("router-link",{attrs:{to:{name:"Work"}}},[n("ion-icon",{style:{color:t.workColor},attrs:{name:"filing"}})],1)],1),n("li",{on:{click:function(o){t.selectedNav("contact")}}},[n("router-link",{attrs:{to:{name:"Contact"}}},[n("ion-icon",{style:{color:t.contactColor},attrs:{name:"mail"}})],1)],1)])])],1)}),r=[],c=n("c93e"),s=n("2f62"),l={name:"AppHeader",data:function(){return{homeColor:"",aboutColor:"",workColor:"",contactColor:"",showNav:!1}},mounted:function(){$("#mobile-nav").hide(),this.selectedNav(this.status)},methods:{toggleMenu:function(){$("#mobile-nav").animate({width:"toggle"})},selectedNav:function(t){"home"==t?(this.homeColor="#3d3d3d",this.aboutColor="#fff",this.workColor="#fff",this.contactColor="#fff"):"about"==t?(this.homeColor="#fff",this.aboutColor="#3d3d3d",this.workColor="#fff",this.contactColor="#fff"):"work"==t?(this.homeColor="#fff",this.aboutColor="#fff",this.workColor="#3d3d3d",this.contactColor="#fff"):(this.homeColor="#fff",this.aboutColor="#fff",this.workColor="#fff",this.contactColor="#3d3d3d")}},computed:Object(c["a"])({},Object(s["c"])(["status"]))},u=l,f=(n("b94e"),n("2877")),m=Object(f["a"])(u,i,r,!1,null,"3b8b5107",null);m.options.__file="AppHeader.vue";var d=m.exports,h=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"footer",style:{display:t.show}},[n("p",[t._v("© 2018. Minji Kim all rights reserved.")])])},b=[],v={name:"Footer",computed:Object(c["a"])({show:function(){if("tms"===this.status||"buyerPortal"===this.status||"fulfillment"===this.status||"shippingman"===this.status||"returnman"===this.status)return"none"}},Object(s["c"])(["status"]))},p=v,C=(n("b027"),Object(f["a"])(p,h,b,!1,null,"577fbe52",null));C.options.__file="Footer.vue";var k=C.exports,w={name:"Container",components:{AppHeader:d,Footer:k}},g=w,O=(n("3c37"),Object(f["a"])(g,e,a,!1,null,"6c496d9b",null));O.options.__file="Container.vue";o["default"]=O.exports},"3c37":function(t,o,n){"use strict";var e=n("44d1"),a=n.n(e);a.a},"44d1":function(t,o,n){},"53f6":function(t,o,n){},"951f":function(t,o,n){},b027:function(t,o,n){"use strict";var e=n("951f"),a=n.n(e);a.a},b94e:function(t,o,n){"use strict";var e=n("53f6"),a=n.n(e);a.a},c93e:function(t,o,n){"use strict";function e(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function a(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(o){e(t,o,n[o])})}return t}n.d(o,"a",function(){return a})}}]);
//# sourceMappingURL=chunk-93ee.ecdb42e8.js.map