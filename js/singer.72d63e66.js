(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["singer"],{"1f23":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"singer"},[n("div",{staticClass:"filter"},[n("ul",{staticClass:"tag-list"},e._l(e.areas,(function(t){return n("li",{key:t.value,class:{active:e.area===t.value},on:{click:function(n){return e.chooseType("area",t.value)}}},[e._v(e._s(t.label)+" ")])})),0),n("ul",{staticClass:"tag-list"},e._l(e.types,(function(t){return n("li",{key:t.value,class:{active:e.type===t.value},on:{click:function(n){return e.chooseType("type",t.value)}}},[e._v(e._s(t.label)+" ")])})),0),n("ul",{staticClass:"tag-en"},e._l(e.ens,(function(t){return n("li",{key:t.value,class:{active:e.en===t.value},on:{click:function(n){return e.chooseType("en",t.value)}}},[e._v(e._s(t.label)+" ")])})),0)]),n("load-more",{on:{"scroll-state":e.getArtists}},[n("ul",{staticClass:"infinite-list"},e._l(e.artists,(function(e){return n("singer-item",{key:e.id,attrs:{item:e}})})),1)]),e.loading?n("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticClass:"loading",attrs:{"element-loading-text":"拼命加载中","element-loading-background":"rgba(0, 0, 0, 0)","element-loading-spinner":"el-icon-loading"}}):e._e(),e.noMore?n("div",{staticClass:"loaded"},[e._v(" - 已加载完 - ")]):e._e()],1)},i=[],l=n("2909"),o=n("5530"),s=(n("d3b7"),n("2f62")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"singer-item"},[n("el-image",{staticClass:"avatar",attrs:{src:e.item.picUrl||"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",lazy:"",fit:"cover"},nativeOn:{click:function(t){return e.handleSinger(t)}}}),n("span",{staticClass:"name",on:{click:e.handleSinger}},[e._v(e._s(e.item.name))])],1)},c=[],u={name:"SingerItem",props:{item:{type:Object}},methods:{handleSinger:function(){this.$router.push({name:"singer-detail",query:{id:this.item.id}})}}},d=u,m=(n("787b"),n("2877")),f=Object(m["a"])(d,r,c,!1,null,"db6adbec",null),h=f.exports,g=n("eafa"),b={name:"singer",components:{LoadMore:g["a"],SingerItem:h},data:function(){return{area:-1,areas:[{value:-1,label:"全部"},{value:7,label:"华语"},{value:96,label:"欧美"},{value:8,label:"日本"},{value:16,label:"韩国"},{value:0,label:"其他"}],type:-1,types:[{value:-1,label:"全部"},{value:1,label:"男歌手"},{value:2,label:"女歌手"},{value:3,label:"乐队组合"}],en:-1,ens:[],artists:[],count:1,loading:!1,noMore:!1,noLoading:!1}},computed:{offset:function(){return 40*(this.count-1)}},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["getArtistList"])),{},{getEns:function(){for(var e=[],t=0;t<26;t++)e.push({value:String.fromCharCode(97+t),label:String.fromCharCode(65+t)});e.unshift({value:-1,label:"热门"}),e.push({value:0,label:"#"}),this.ens=e},chooseType:function(e,t){"area"===e?this.area=t:"type"===e?this.type=t:"en"===e&&(this.en=t);while(this.noLoading);this.artists=[],this.count=1,this.noMore=!1,this.getArtists()},getArtists:function(){var e=this;if(!this.noMore&&!this.noLoading){this.loading=!0,this.noLoading=!0;var t={limit:40,offset:this.offset,type:this.type,area:this.area,initial:this.en};this.getArtistList(t).then((function(t){var n;(n=e.artists).push.apply(n,Object(l["a"])(t.artists)),e.count+=1,!0!==t.more&&(e.noMore=!0)})).catch((function(){e.$message.error("获取歌手列表失败")})).finally((function(){e.loading=!1,e.noLoading=!1}))}}}),mounted:function(){this.getEns(),this.getArtists()}},v=b,p=(n("4250"),Object(m["a"])(v,a,i,!1,null,"22c7f9c6",null));t["default"]=p.exports},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("6b75");function i(e){if(Array.isArray(e))return Object(a["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function l(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var o=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e){return i(e)||l(e)||Object(o["a"])(e)||s()}},4250:function(e,t,n){"use strict";n("8ea8")},"787b":function(e,t,n){"use strict";n("aa6f")},"8ea8":function(e,t,n){},aa6f:function(e,t,n){},eafa:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"load-more"},[e._t("default")],2)},i=[],l={name:"LoadMore",methods:{getScrollTop:function(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},getClientHeight:function(){var e=0;return e=document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight),e},getScrollHeight:function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},mounted:function(){var e=this;window.onscroll=function(){e.getScrollTop()+e.getClientHeight()>=e.getScrollHeight()&&e.$emit("scroll-state",!0)}}},o=l,s=n("2877"),r=Object(s["a"])(o,a,i,!1,null,"32646420",null);t["a"]=r.exports}}]);
//# sourceMappingURL=singer.72d63e66.js.map