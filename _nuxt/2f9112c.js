(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2],{248:function(n,t,e){"use strict";e.r(t);var r={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},l=e(9),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("NuxtLink",{staticClass:"\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-32\n    leading-6\n    no-underline\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:n.slug}}}},[e("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[e("div",{class:n.positionClass},[n._t("default")],2)]),n._v(" "),e("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[n._v("\n    "+n._s(n.label)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},283:function(n,t,e){"use strict";e.r(t);var r={props:{slug:{type:String,default:"Centering"},label:{type:String,default:"centering"}}},l=e(9),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("base-card",{attrs:{slug:n.slug,label:n.label}},[e("div",{staticClass:"flex h-6"},[e("div",{staticClass:"w-10 h-full border border-indigo-300 border-r-0 bg-indigo-50"}),n._v(" "),e("button",{staticClass:"\n        text-xs\n        py-0\n        px-1\n        border border-indigo-300\n        bg-indigo-200\n        font-medium\n      ",attrs:{type:"button"}},[n._v("\n      Go\n    ")])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseCard:e(248).default})}}]);