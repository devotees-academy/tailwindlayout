(window.webpackJsonp=window.webpackJsonp||[]).push([[21,2],{248:function(e,t,n){"use strict";n.r(t);var l={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},r=n(9),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("NuxtLink",{staticClass:"\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-32\n    leading-6\n    no-underline\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:e.slug}}}},[n("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[n("div",{class:e.positionClass},[e._t("default")],2)]),e._v(" "),n("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},288:function(e,t,n){"use strict";n.r(t);var l={props:{slug:{type:String,required:!0},label:{type:String,required:!0}}},r=n(9),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-card",{attrs:{slug:e.slug,label:e.label,centered:!1,custom_class:"h-full"}},[n("div",{staticClass:"h-full p-2"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"w-6 h-6 bg-indigo-100 mr-1"}),e._v(" "),n("div",{staticClass:"flex-1 h-16 bg-indigo-50"})])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseCard:n(248).default})}}]);