(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3],{1179:function(t,e,r){"use strict";r.r(e);r(106),r(640);var n={props:["anchors"],data:function(){return{url:""}},beforeMount:function(){this.url=window.location.href.split("#")[0]}},o=r(82),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-anchor"},[r("a-anchor",{attrs:{targetOffset:80,offsetTop:85}},t._l(t.anchors,(function(title,e){return r("a-anchor-link",{key:e,attrs:{href:t.url+"#"+e,title:title}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},1180:function(t,e,r){"use strict";r.r(e);var n={inheritAttrs:!0,props:["code","lang"],data:function(){return{}},methods:{onCopy:function(t){this.$message.success({content:"Copied!"})}}},o=r(82),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"highlight-section"},[r("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code.trim(),expression:"code.trim()",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-copy",attrs:{type:"primary",icon:"copy",size:"small"}},[t._v("Copy")]),t._v(" "),r("highlight-code",{staticStyle:{"max-height":"500px"},attrs:{lang:t.lang?t.lang:"html"}},[t._v("\n\t\t"+t._s(t.code)+"\n\t")])],1)}),[],!1,null,null,null);e.default=component.exports},1199:function(t,e,r){t.exports=r.p+"img/info-card-1.9dbf753.jpg"},1222:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"Card | Muse Dashboard Ant Design Vue @ Creative Tim",meta:[{hid:"description",name:"description",content:"Simple rectangular container."}]}},data:function(){return{anchors:{"When-To-Use":"When To Use","Widget-Card":"Widget Card","Information-Card":"Information Card","Project-Card":"Project Card","Widget-Card-2":"Widget Card 2","Credit-Card":"Credit Card"},widgetCode:'\n<template>\n\t<a-card :bordered="false" class="widget-1">\n\t\t<a-statistic\n\t\t\ttitle="Today’s Sales"\n\t\t\t:value="53000"\n\t\t\t:precision="0"\n\t\t\tclass="text-success"\n\t\t>\n\t\t\t<template #prefix>$</template>\n\t\t\t<template #suffix>+30%</template>\n\t\t</a-statistic>\n\t\t<div class="icon">\n\t\t\t<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n\t\t\t\t<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n\t\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n\t\t\t</svg>\n\t\t</div>\n\t</a-card>\n</template>',informationCode:'\n<template>\n\t\x3c!-- Information Card 1 --\x3e\n\t<a-card :bordered="false" class="card-info mb-24">\n\t\t<a-row type="flex">\n\t\t\t<a-col class="col-content" :span="24" :xl="12">\n\t\t\t\t<div class="card-content">\n\t\t\t\t\t<h6>Built by developers</h6>\n\t\t\t\t\t<h5>Muse Dashboard for Ant Design</h5>\n\t\t\t\t\t<p>From colors, cards, typography to complex elements, you will find the full documentation.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="card-footer">\n\t\t\t\t\t<a href="#" size="small">\n\t\t\t\t\t\t<span>Read More</span>\n\t\t\t\t\t\t<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#111827"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</a-col>\n\t\t\t<a-col class="col-img" :span="24" :xl="12">\n\t\t\t\t<div class="card-img-bg">\n\t\t\t\t\t<img src="~@/assets/info-card-1.jpg" alt="">\n\t\t\t\t</div>\n\t\t\t</a-col>\n\t\t</a-row>\n\t</a-card>\n\t\x3c!-- / Information Card 1 --\x3e\n\n\t\x3c!-- Information Card 2 --\x3e\n\t<a-card :bordered="false" class="card-info-2 mb-24 h-full">\n\t\t<div class="col-content h-full" style="background-image: url(\'/images/info-card-2.jpg\')">\n\t\t\t<div class="card-content">\n\t\t\t\t<h5>Work with the best </h5>\n\t\t\t\t<p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>\n\t\t\t</div>\n\t\t\t<div class="card-footer">\n\t\t\t\t<a href="#" size="small">\n\t\t\t\t\t<span>Read More</span>\n\t\t\t\t\t<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#111827"/>\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</a-card>\n\t\x3c!-- / Information Card 2 --\x3e\n</template>',projectCode:'\n<template>\n\t<a-row type="flex" :gutter="[24,24]" align="stretch">\n\n\t\t\x3c!-- Project Column --\x3e\n\t\t<a-col :span="24" :md="12">\n\n\t\t\t\x3c!-- Project Card --\x3e\n\t\t\t<a-card class="card-project">\n\t\t\t\t<img\n\t\t\t\tslot="cover"\n\t\t\t\talt="example"\n\t\t\t\tsrc="/images/home-decor-3.jpeg"\n\t\t\t\t/>\n\t\t\t\t<div class="card-tag">Project #1</div>\n\t\t\t\t<h5>Modern</h5>\n\t\t\t\t<p>\n\t\t\t\t\tAs Uber works through a huge amount of internal management turmoil.\n\t\t\t\t</p>\n\t\t\t\t<a-row type="flex" :gutter="6" class="card-footer" align="middle">\n\t\t\t\t\t<a-col :span="12">\n\t\t\t\t\t\t<a-button size="small">VIEW PROJECT</a-button>\n\t\t\t\t\t</a-col>\n\t\t\t\t\t<a-col :span="12" class="text-right">\n\t\t\t\t\t\t<a-space :size="-12" class="avatar-chips">\n\t\t\t\t\t\t\t<a-avatar  size="small" src="/images/face-1.jpg" />\n\t\t\t\t\t\t\t<a-avatar  size="small" src="/images/face-4.jpg" />\n\t\t\t\t\t\t\t<a-avatar  size="small" src="/images/face-2.jpg" />\n\t\t\t\t\t\t\t<a-avatar  size="small" src="/images/face-3.jpg" />\n\t\t\t\t\t\t</a-space>\n\t\t\t\t\t</a-col>\n\t\t\t\t</a-row>\n\t\t\t</a-card>\n\t\t\t\x3c!-- / Project Card --\x3e\n\n\t\t</a-col>\n\t\t\x3c!-- / Project Column --\x3e\n\n\t\t\x3c!-- Project Column --\x3e\n\t\t<a-col :span="24" :md="12">\n\n\t\t\t\x3c!-- Project Card --\x3e\n\t\t\t<a-card class="card-project">\n\t\t\t\t<img\n\t\t\t\tslot="cover"\n\t\t\t\talt="example"\n\t\t\t\tsrc="/images/home-decor-2.jpeg"\n\t\t\t\t/>\n\t\t\t\t<div class="card-tag">Project #2</div>\n\t\t\t\t<h5>Scandinavian</h5>\n\t\t\t\t<p>\n\t\t\t\t\tMusic is something that every person has his or her own specific opinion about.\n\t\t\t\t</p>\n\t\t\t\t<a-row type="flex" :gutter="6" class="card-footer" align="middle">\n\t\t\t\t\t<a-col :span="12">\n\t\t\t\t\t\t<a-button size="small">VIEW PROJECT</a-button>\n\t\t\t\t\t</a-col>\n\t\t\t\t\t<a-col :span="12" class="text-right">\n\t\t\t\t\t\t<a-space :size="-12" class="avatar-chips">\n\t\t\t\t\t\t\t<a-avatar  size="small" src="/images/face-1.jpg" />\n\t\t\t\t\t\t\t<a-avatar  size="small" src="/images/face-4.jpg" />\n\t\t\t\t\t\t\t<a-avatar  size="small" src="/images/face-2.jpg" />\n\t\t\t\t\t\t\t<a-avatar  size="small" src="/images/face-3.jpg" />\n\t\t\t\t\t\t</a-space>\n\t\t\t\t\t</a-col>\n\t\t\t\t</a-row>\n\t\t\t</a-card>\n\t\t\t\x3c!-- Project Card --\x3e\n\n\t\t</a-col>\n\t\t\x3c!-- / Project Column --\x3e\n\n\t</a-row>\n</template>',widget2Code:'\n<template>\n\t<a-row :gutter="24">\n\t\t<a-col :span="12" :lg="8" :xl="6" class="mb-24">\n\n\t\t\t\x3c!-- Salary Card --\x3e\n\t\t\t<a-card :bordered="false" class="widget-2 h-full">\n\t\t\t\t<a-statistic :value="2000" prefix="+$">\n\t\t\t\t\t<template #title>\n\t\t\t\t\t\t<div class="icon">\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">\n\t\t\t\t\t\t\t\t<g id="bank" transform="translate(0.75 0.75)">\n\t\t\t\t\t\t\t\t\t<path id="Shape" transform="translate(0.707 9.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>\n\t\t\t\t\t\t\t\t\t<path id="Path" d="M10.25,0,20.5,9.19H0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>\n\t\t\t\t\t\t\t\t\t<path id="Path-2" data-name="Path" d="M0,.707H20.5" transform="translate(0 19.793)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>Salary</h6>\n\t\t\t\t\t\t<p>Belong Interactive</p>\n\t\t\t\t\t</template>\n\t\t\t\t</a-statistic>\n\t\t\t</a-card>\n\t\t\t\x3c!-- / Salary Card --\x3e\n\n\t\t</a-col>\n\t\t<a-col :span="12" :lg="8" :xl="6" class="mb-24">\n\n\t\t\t\x3c!-- Paypal Card --\x3e\n\t\t\t<a-card :bordered="false" class="widget-2 h-full">\n\t\t\t\t<a-statistic :value="49000" prefix="+$">\n\t\t\t\t\t<template #title>\n\t\t\t\t\t\t<div class="icon">\n\t\t\t\t\t\t\t<img src="/images/logos/paypal-logo-2.png" alt="">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>Paypal</h6>\n\t\t\t\t\t\t<p>Freelance Payment</p>\n\t\t\t\t\t</template>\n\t\t\t\t</a-statistic>\n\t\t\t</a-card>\n\t\t\t\x3c!-- Paypal Card --\x3e\n\n\t\t</a-col>\n\t</a-row>\n</template>',creditCode:'\n<template>\n\t\x3c!-- Master Card --\x3e\n\t<a-card class="card-credit header-solid h-full">\n\t\t<template #title>\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 22.5 20.625">\n\t\t\t\t<g id="wifi" transform="translate(0.75 0.75)">\n\t\t\t\t\t<circle id="Oval" cx="1.5" cy="1.5" r="1.5" transform="translate(9 16.875)" fill="#fff"/>\n\t\t\t\t\t<path id="Path" d="M0,1.36a6.377,6.377,0,0,1,7.5,0" transform="translate(6.75 11.86)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>\n\t\t\t\t\t<path id="Path-2" data-name="Path" d="M14.138,2.216A12.381,12.381,0,0,0,0,2.216" transform="translate(3.431 6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>\n\t\t\t\t\t<path id="Path-3" data-name="Path" d="M0,3.294a18.384,18.384,0,0,1,21,0" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t</template>\n\t\t<h5 class="card-number">4562 1122 4594 7852</h5>\n\t\t\n\t\t<div class="card-footer">\n\t\t\t<div class="mr-30">\n\t\t\t\t<p>Card Holder</p>\n\t\t\t\t<h6>Jack Peterson</h6>\n\t\t\t</div>\n\t\t\t<div class="mr-30">\n\t\t\t\t<p>Expires</p>\n\t\t\t\t<h6>11/22</h6>\n\t\t\t</div>\n\t\t\t<div class="card-footer-col col-logo ml-auto">\n\t\t\t\t<img src="/images/logos/mastercard-logo.png">\n\t\t\t</div>\n\t\t</div>\n\t</a-card>\n\t\x3c!-- / Master Card --\x3e\n</template>'}},methods:{}},o=r(82),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-row"},[n("div",{staticClass:"page-content"},[t._m(0),t._v(" "),n("a-divider"),t._v(" "),t._m(1),t._v(" "),n("h2",[t._v("Examples")]),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Widget-Card"}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Widget Card")]),t._v(" "),n("div",{staticClass:"showcase pb-0"},[n("a-row",{attrs:{gutter:24}},[n("a-col",{staticClass:"mb-24",attrs:{span:24,lg:12}},[n("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[n("a-statistic",{staticClass:"text-success",attrs:{title:"Today’s Sales",value:53e3,precision:0},scopedSlots:t._u([{key:"prefix",fn:function(){return[t._v("$")]},proxy:!0},{key:"suffix",fn:function(){return[t._v("+30%")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"icon"},[n("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z",fill:"#111827"}}),t._v(" "),n("path",{attrs:{d:"M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z",fill:"#111827"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z",fill:"#111827"}})])])],1)],1),t._v(" "),n("a-col",{staticClass:"mb-24",attrs:{span:24,lg:12}},[n("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[n("a-statistic",{staticClass:"text-success",attrs:{title:"Today’s Users",value:3200,precision:0},scopedSlots:t._u([{key:"suffix",fn:function(){return[t._v("+20%")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"icon"},[n("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z",fill:"#111827"}}),t._v(" "),n("path",{attrs:{d:"M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z",fill:"#111827"}}),t._v(" "),n("path",{attrs:{d:"M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z",fill:"#111827"}}),t._v(" "),n("path",{attrs:{d:"M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z",fill:"#111827"}})])])],1)],1)],1)],1),t._v(" "),n("muse-snippet",{attrs:{code:t.widgetCode}})],1),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Information-Card"}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Information Card")]),t._v(" "),n("div",{staticClass:"showcase pb-0"},[n("a-card",{staticClass:"card-info mb-24",attrs:{bordered:!1}},[n("a-row",{attrs:{type:"flex"}},[n("a-col",{staticClass:"col-content",attrs:{span:24,xl:12}},[n("div",{staticClass:"card-content"},[n("h6",[t._v("Built by developers")]),t._v(" "),n("h5",[t._v("Muse Dashboard for Ant Design")]),t._v(" "),n("p",[t._v("From colors, cards, typography to complex elements, you will find the full documentation.")])]),t._v(" "),n("div",{staticClass:"card-footer"},[n("a",{attrs:{href:"#",size:"small"}},[n("span",[t._v("Read More")]),t._v(" "),n("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z",fill:"#111827"}})])])])]),t._v(" "),n("a-col",{staticClass:"col-img",attrs:{span:24,xl:12}},[n("div",{staticClass:"card-img-bg"},[n("img",{attrs:{src:r(1199),alt:""}})])])],1)],1),t._v(" "),n("a-card",{staticClass:"card-info-2 mb-24 h-full",attrs:{bordered:!1}},[n("div",{staticClass:"col-content h-full",staticStyle:{"background-image":"url('/images/info-card-2.jpg')"}},[n("div",{staticClass:"card-content"},[n("h5",[t._v("Work with the best ")]),t._v(" "),n("p",[t._v("Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.")])]),t._v(" "),n("div",{staticClass:"card-footer"},[n("a",{attrs:{href:"#",size:"small"}},[n("span",[t._v("Read More")]),t._v(" "),n("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z",fill:"#111827"}})])])])])])],1),t._v(" "),n("muse-snippet",{attrs:{code:t.informationCode}})],1),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Project-Card"}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Project Card")]),t._v(" "),n("div",{staticClass:"showcase"},[n("a-row",{attrs:{type:"flex",gutter:[24,24],align:"stretch"}},[n("a-col",{attrs:{span:24,md:12}},[n("a-card",{staticClass:"card-project"},[n("img",{attrs:{slot:"cover",alt:"example",src:"/images/home-decor-3.jpeg"},slot:"cover"}),t._v(" "),n("div",{staticClass:"card-tag"},[t._v("Project #1")]),t._v(" "),n("h5",[t._v("Modern")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t\t\t\t\t\tAs Uber works through a huge amount of internal management turmoil.\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("a-row",{staticClass:"card-footer",attrs:{type:"flex",gutter:6,align:"middle"}},[n("a-col",{attrs:{span:12}},[n("a-button",{attrs:{size:"small"}},[t._v("VIEW PROJECT")])],1),t._v(" "),n("a-col",{staticClass:"text-right",attrs:{span:12}},[n("a-space",{staticClass:"avatar-chips",attrs:{size:-12}},[n("a-avatar",{attrs:{size:"small",src:"/images/face-1.jpg"}}),t._v(" "),n("a-avatar",{attrs:{size:"small",src:"/images/face-4.jpg"}}),t._v(" "),n("a-avatar",{attrs:{size:"small",src:"/images/face-2.jpg"}}),t._v(" "),n("a-avatar",{attrs:{size:"small",src:"/images/face-3.jpg"}})],1)],1)],1)],1)],1),t._v(" "),n("a-col",{attrs:{span:24,md:12}},[n("a-card",{staticClass:"card-project"},[n("img",{attrs:{slot:"cover",alt:"example",src:"/images/home-decor-2.jpeg"},slot:"cover"}),t._v(" "),n("div",{staticClass:"card-tag"},[t._v("Project #2")]),t._v(" "),n("h5",[t._v("Scandinavian")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t\t\t\t\t\tMusic is something that every person has his or her own specific opinion about.\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("a-row",{staticClass:"card-footer",attrs:{type:"flex",gutter:6,align:"middle"}},[n("a-col",{attrs:{span:12}},[n("a-button",{attrs:{size:"small"}},[t._v("VIEW PROJECT")])],1),t._v(" "),n("a-col",{staticClass:"text-right",attrs:{span:12}},[n("a-space",{staticClass:"avatar-chips",attrs:{size:-12}},[n("a-avatar",{attrs:{size:"small",src:"/images/face-1.jpg"}}),t._v(" "),n("a-avatar",{attrs:{size:"small",src:"/images/face-4.jpg"}}),t._v(" "),n("a-avatar",{attrs:{size:"small",src:"/images/face-2.jpg"}}),t._v(" "),n("a-avatar",{attrs:{size:"small",src:"/images/face-3.jpg"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("muse-snippet",{attrs:{code:t.projectCode}})],1),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Widget-Card-2"}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Widget Card 2")]),t._v(" "),n("div",{staticClass:"showcase pb-0"},[n("a-row",{attrs:{gutter:24}},[n("a-col",{staticClass:"mb-24",attrs:{span:12,lg:8,xl:6}},[n("a-card",{staticClass:"widget-2 h-full",attrs:{bordered:!1}},[n("a-statistic",{attrs:{value:2e3,prefix:"+$"},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22"}},[n("g",{attrs:{id:"bank",transform:"translate(0.75 0.75)"}},[n("path",{attrs:{id:"Shape",transform:"translate(0.707 9.543)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-width":"1.5"}}),t._v(" "),n("path",{attrs:{id:"Path",d:"M10.25,0,20.5,9.19H0Z",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-width":"1.5"}}),t._v(" "),n("path",{attrs:{id:"Path-2","data-name":"Path",d:"M0,.707H20.5",transform:"translate(0 19.793)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-width":"1.5"}})])])]),t._v(" "),n("h6",[t._v("Salary")]),t._v(" "),n("p",[t._v("Belong Interactive")])]},proxy:!0}])})],1)],1),t._v(" "),n("a-col",{staticClass:"mb-24",attrs:{span:12,lg:8,xl:6}},[n("a-card",{staticClass:"widget-2 h-full",attrs:{bordered:!1}},[n("a-statistic",{attrs:{value:49e3,prefix:"+$"},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"icon"},[n("img",{attrs:{src:"/images/logos/paypal-logo-2.png",alt:""}})]),t._v(" "),n("h6",[t._v("Paypal")]),t._v(" "),n("p",[t._v("Freelance Payment")])]},proxy:!0}])})],1)],1)],1)],1),t._v(" "),n("muse-snippet",{attrs:{code:t.widget2Code}})],1),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Credit-Card"}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Credit Card")]),t._v(" "),n("div",{staticClass:"showcase"},[n("a-row",[n("a-col",{attrs:{span:24,lg:12}},[n("a-card",{staticClass:"card-credit header-solid h-full",scopedSlots:t._u([{key:"title",fn:function(){return[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 22.5 20.625"}},[n("g",{attrs:{id:"wifi",transform:"translate(0.75 0.75)"}},[n("circle",{attrs:{id:"Oval",cx:"1.5",cy:"1.5",r:"1.5",transform:"translate(9 16.875)",fill:"#fff"}}),t._v(" "),n("path",{attrs:{id:"Path",d:"M0,1.36a6.377,6.377,0,0,1,7.5,0",transform:"translate(6.75 11.86)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-width":"1.5"}}),t._v(" "),n("path",{attrs:{id:"Path-2","data-name":"Path",d:"M14.138,2.216A12.381,12.381,0,0,0,0,2.216",transform:"translate(3.431 6)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-width":"1.5"}}),t._v(" "),n("path",{attrs:{id:"Path-3","data-name":"Path",d:"M0,3.294a18.384,18.384,0,0,1,21,0",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-width":"1.5"}})])])]},proxy:!0}])},[t._v(" "),n("h5",{staticClass:"card-number"},[t._v("4562 1122 4594 7852")]),t._v(" "),n("div",{staticClass:"card-footer"},[n("div",{staticClass:"mr-30"},[n("p",[t._v("Card Holder")]),t._v(" "),n("h6",[t._v("Jack Peterson")])]),t._v(" "),n("div",{staticClass:"mr-30"},[n("p",[t._v("Expires")]),t._v(" "),n("h6",[t._v("11/22")])]),t._v(" "),n("div",{staticClass:"card-footer-col col-logo ml-auto"},[n("img",{attrs:{src:"/images/logos/mastercard-logo.png"}})])])])],1)],1)],1),t._v(" "),n("muse-snippet",{attrs:{code:t.creditCode}})],1),t._v(" "),t._m(2)],1),t._v(" "),n("muse-anchor",{attrs:{anchors:t.anchors}})],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mb-24"},[r("h1",[t._v("Card")]),t._v(" "),r("p",{staticClass:"text-dark"},[t._v("\n\t\t\t\t\t\tSimple rectangular container.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mb-24",attrs:{id:"When-To-Use"}},[r("h2",[t._v("When To Use")]),t._v(" "),r("p",[t._v("\n\t\t\t\t\t\tA card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-right font-semibold mb-24"},[t._v("\n\t\t\t\t\tLooking for more Ant Design Vue Card? Please check the\n\t\t\t\t\t"),r("a",{attrs:{target:"_blank",href:"https://antdv.com/components/card/"}},[t._v("official docs")]),t._v(".\n\t\t\t\t")])}],!1,null,"18ea9bac",null);e.default=component.exports;installComponents(component,{MuseSnippet:r(1180).default,MuseAnchor:r(1179).default})}}]);