(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0315":function(t,e,n){},"0935":function(t,e,n){},"45b2":function(t,e,n){},"71ee":function(t,e,n){"use strict";n("0935")},"77b8":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("banner"),n("personalized-list"),n("personalized-song")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personalized-list"},[n("div",{staticClass:"list-title"},[n("span",{on:{click:t.handleOpenList}},[t._v("推荐歌单"),n("i",{staticClass:"el-icon-arrow-right"})])]),n("div",{staticClass:"list-content"},t._l(t.lists,(function(e){return n("div",{key:e.id,staticClass:"list-item"},[n("div",{staticClass:"item-cover"},[n("el-image",{key:e.picUrl,staticClass:"item-image",attrs:{src:e.picUrl,lazy:""}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),n("span",{staticClass:"dot"},[t._v("...")])]),n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-picture-outline"})])]),n("div",{staticClass:"item-count"},[n("i",{staticClass:"el-icon-caret-right"}),n("span",[t._v(t._s(t.getPlayCount(e)))])])],1),n("div",{staticClass:"item-info"},[n("span",[t._v(t._s(e.name))])])])})),0)])},o=[],l=n("5530"),c=n("2f62"),r={name:"PersonalizedList",data:function(){return{lists:[]}},methods:Object(l["a"])(Object(l["a"])({},Object(c["b"])(["getPersonalized"])),{},{getPersonalizedList:function(){var t=this;this.getPersonalized(24).then((function(e){t.lists=e.result})).catch((function(){return t.$message.error("获取推荐歌单出错")}))},getPlayCount:function(t){return t.playCount<1e4?t.playCount:Math.floor(t.playCount/1e4)+"万"},handleOpenList:function(){this.$router.push({name:"playlist"})}}),mounted:function(){this.getPersonalizedList()}},u=r,d=(n("71ee"),n("2877")),g=Object(d["a"])(u,i,o,!1,null,"5a65dea1",null),h=g.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personalized-song"},[n("div",{staticClass:"song-title"},[n("span",{on:{click:t.handleOpenSong}},[t._v("最新音乐"),n("i",{staticClass:"el-icon-arrow-right"})])]),n("div",{staticClass:"song-content"},t._l(t.songList,(function(e,s){return n("div",{key:e.id,staticClass:"song-item",on:{mouseenter:function(e){return t.handleEnter(s)},mouseleave:t.handleLeave}},[n("div",{staticClass:"song-index"},[t.focusItem===s&&!t.playing||t.focusItem===s&&t.currentSong.id!==e.id?n("i",{staticClass:"el-icon-video-play play-icon",on:{click:function(e){return t.handlePlay(s)}}}):t.focusItem===s&&t.playing?n("i",{staticClass:"el-icon-video-pause play-icon",on:{click:t.handlePause}}):n("span",[t._v(t._s(s+1))])]),n("div",{staticClass:"song-cover"},[n("el-image",{key:e.image,attrs:{src:e.image,lazy:""}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),n("span",{staticClass:"dot"},[t._v("...")])]),n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-picture-outline"})])])],1),n("div",{staticClass:"song-info"},[n("div",{staticClass:"song-name"},[t._v(t._s(e.name))]),n("div",{staticClass:"song-singer"},[t._v(t._s(e.singer))])])])})),0)])},m=[],p=(n("d81d"),n("a15b"),n("ca00")),v={name:"PersonalizedSong",data:function(){return{songList:[],focusItem:-1}},computed:Object(l["a"])(Object(l["a"])({},Object(c["e"])(["playing"])),Object(c["c"])(["currentSong"])),methods:Object(l["a"])(Object(l["a"])({},Object(c["b"])(["selectPlay","pausePlay","getNewSongs","getSongDetails"])),{},{handleOpenSong:function(){this.$router.push({name:"song"})},getPersonalizedSong:function(){var t=this;this.getNewSongs(12).then((function(e){var n=[];e.result.map((function(t){n.push(t.id)}));var s=n.join(",");t.getSongDetails(s).then((function(e){var n=[];e.songs.map((function(t){n.push(Object(p["a"])(t))})),t.songList=n}))})).catch((function(e){t.$message.error("获取最新音乐出错")}))},handleEnter:function(t){this.focusItem=t},handleLeave:function(){this.focusItem=-1},handlePlay:function(t){this.selectPlay({list:this.songList,index:t})},handlePause:function(){this.pausePlay()}}),mounted:function(){this.getPersonalizedSong()}},b=v,C=(n("9b46"),Object(d["a"])(b,f,m,!1,null,"97c5b350",null)),y=C.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[t.bannersInit?n("el-carousel",{attrs:{interval:4e3,type:"card"}},t._l(t.banners,(function(t){return n("el-carousel-item",{key:t.imageUrl},[n("img",{attrs:{src:t.imageUrl,alt:t.typeTitle}})])})),1):t._e()],1)},O=[],P={name:"Banner",data:function(){return{banners:[]}},computed:{bannersInit:function(){return this.banners.length}},methods:Object(l["a"])(Object(l["a"])({},Object(c["b"])(["getBanners"])),{},{getBanner:function(){var t=this;this.getBanners().then((function(e){t.banners=e.banners})).catch((function(){return t.$message.error("获取轮播图出错")}))}}),mounted:function(){this.getBanner()}},j=P,z=(n("78d9"),Object(d["a"])(j,_,O,!1,null,"0b827f1c",null)),L=z.exports,S={name:"home",components:{Banner:L,PersonalizedSong:y,PersonalizedList:h}},k=S,w=Object(d["a"])(k,s,a,!1,null,"636387d5",null);e["default"]=w.exports},"78d9":function(t,e,n){"use strict";n("0315")},"9b46":function(t,e,n){"use strict";n("45b2")},d81d:function(t,e,n){"use strict";var s=n("23e7"),a=n("b727").map,i=n("1dde"),o=i("map");s({target:"Array",proto:!0,forced:!o},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=home.20ee6a09.js.map