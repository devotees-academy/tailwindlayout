(window.webpackJsonp=window.webpackJsonp||[]).push([[19,2],{248:function(e,t,n){"use strict";n.r(t);var r={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},l=n(9),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("NuxtLink",{staticClass:"\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-32\n    leading-6\n    no-underline\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:e.slug}}}},[n("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[n("div",{class:e.positionClass},[e._t("default")],2)]),e._v(" "),n("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},287:function(e,t,n){"use strict";n.r(t);var r={props:{slug:{type:String,required:!0},label:{type:String,required:!0}}},l=n(9),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-card",{attrs:{slug:e.slug,label:e.label,centered:!1,custom_class:"h-full flex flex-col"}},[n("header",{staticClass:"p-1 text-xs bg-indigo-50 border-b border-indigo-300"},[e._v("Header")]),e._v(" "),n("main",{staticClass:"flex-1 bg-indigo-50 border-b border-indigo-300 p-1 text-xs"},[e._v("\n    Content\n  ")]),e._v(" "),n("footer",{staticClass:"p-1 text-xs bg-indigo-50"},[e._v("Footer")])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseCard:n(248).default})}}]);