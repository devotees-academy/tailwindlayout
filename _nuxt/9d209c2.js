(window.webpackJsonp=window.webpackJsonp||[]).push([[44,41],{251:function(t,e,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("5456eba8",content,!0,{sourceMap:!1})},255:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},methods:{}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[t.prev?n("div",[n("NuxtLink",{staticClass:"inline-flex items-center text-sm border border-indigo-300 px-3 py-1 rounded-md text-indigo-500 hover:bg-indigo-50",attrs:{to:{name:"ui-slug",params:{slug:t.prev.slug}}}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16l-4-4m0 0l4-4m-4 4h18"}})]),t._v(" "),n("span",{staticClass:"ml-1"},[t._v(t._s(t.prev.title))])])],1):n("div"),t._v(" "),t.next?n("div",[n("NuxtLink",{staticClass:"inline-flex items-center text-sm border border-indigo-300 px-3 py-1 rounded-md text-indigo-500 hover:bg-indigo-50",attrs:{to:{name:"ui-slug",params:{slug:t.next.slug}}}},[n("span",{staticClass:"mr-1"},[t._v(t._s(t.next.title))]),t._v(" "),n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"}})])])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";n(251)},257:function(t,e,n){var r=n(71)((function(i){return i[1]}));r.push([t.i,".bg-gradient{background:linear-gradient(41deg,#01b9db 45%,#318fff)}.bg-gradient:hover{background:linear-gradient(41deg,#0face5 45%,#3f67f7)}",""]),r.locals={},t.exports=r},276:function(t,e,n){"use strict";n.r(e);var r=n(93),o=n(19),l=n(2);n(25),n(43),n(74),n(14),n(99),n(21);var c="https://layoutsfortailwind.lalokalabs.dev",title="LaLoka Layouts for Tailwind CSS",d="A collection of useful Tailwind CSS layouts and patterns",m="/og-img.png",h={layout:"Page",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,article,l,c,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("ui",r.slug).fetch();case 3:return article=e.sent,e.next=6,n("ui").only(["title","slug"]).sortBy("title","asc").surround(r.slug).fetch();case 6:return l=e.sent,c=Object(o.a)(l,2),d=c[0],m=c[1],e.abrupt("return",{article:article,prev:d,next:m});case 11:case"end":return e.stop()}}),e)})))()},computed:{meta:function(){return function(meta){return[{hid:"description",name:"description",content:meta&&meta.description||d},{hid:"og:type",property:"og:type",content:meta&&meta.type||"website"},{hid:"og:url",property:"og:url",content:meta&&meta.url||c},{hid:"og:title",property:"og:title",content:meta&&meta.title||title},{hid:"og:description",property:"og:description",content:meta&&meta.description||d},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||m},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||c},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||title},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||d},{hid:"twitter:image",name:"twitter:image",content:meta&&meta.mainImage||m},{hid:"twitter:site",name:"twitter:site",content:meta&&meta.twitterSite||"@lalokalabs"},{hid:"twitter:card",name:"twitter:card",content:meta&&meta.twitterCard||"summary_large_image"}]}({type:"article",title:this.article.title,description:this.article.description,url:"".concat("https://tailwindlayout.lalokalabs.dev","/ui/").concat(this.$route.params.slug)})}},head:function(){return{title:this.article.title,meta:[].concat(Object(r.a)(this.meta),[{property:"article:published_time",content:this.article.createdAt},{property:"article:modified_time",content:this.article.updatedAt},{property:"article:tag",content:this.article.tags?this.article.tags.toString():""},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:"LaLoka Labs"},{name:"twitter:label2",content:"Filed under"},{name:"twitter:data2",content:this.article.tags?this.article.tags.toString():""}]),link:[{hid:"canonical",rel:"canonical",href:"".concat("https://tailwindlayout.lalokalabs.dev","/ui/").concat(this.$route.params.slug)}]}}},f=(n(256),n(9)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[t._m(0),t._v(" "),n("h1",{staticClass:"page-header"},[t._v(t._s(t.article.title))]),t._v(" "),n("nuxt-content",{attrs:{document:t.article}}),t._v(" "),n("div",{staticClass:"my-6"},[n("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://otp.dev",target:"_blank"}},[n("div",{staticClass:"\n        text-white text-center\n        shadow-md\n        p-4\n        mb-8\n        rounded-md\n        bg-gradient\n        font-medium\n        hover:underline\n      "},[n("span",{staticClass:"font-bold"},[t._v("GetOTP")]),t._v(" one-time password API: Try for\n      free and see how fast you can build a complete OTP flow.\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PrevNext:n(255).default})}}]);