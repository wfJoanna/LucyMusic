(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["song"],{"02ad":function(t,e,n){"use strict";n("6549")},"3ec8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song"},[n("div",{staticClass:"song-title"},[t._v("新歌速递")]),n("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activePane,callback:function(e){t.activePane=e},expression:"activePane"}},[n("el-tab-pane",{attrs:{label:"全部",name:"0"}}),n("el-tab-pane",{attrs:{label:"华语",name:"7"}}),n("el-tab-pane",{attrs:{label:"欧美",name:"96"}}),n("el-tab-pane",{attrs:{label:"韩国",name:"16"}}),n("el-tab-pane",{attrs:{label:"日本",name:"8"}})],1),n("song-list",{attrs:{"song-list":t.chooseList,loading:t.loading}})],1)},i=[],s=n("5530"),o=(n("d3b7"),n("d81d"),n("a15b"),n("2f62")),l=n("ca00"),c=n("6fcc"),r={name:"song",components:{SongList:c["a"]},data:function(){return{activePane:0,chooseList:[],loading:!1}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["getTopNew","getSongDetails"])),{},{getTopSongs:function(){var t=this;this.chooseList=[],this.loading=!0,this.getTopNew(this.activePane).then((function(e){var n=[];e.data.map((function(t){n.push(t.id)}));var a=n.join(",");t.getSongDetails(a).then((function(e){var n=[];e.songs.map((function(t){n.push(Object(l["a"])(t))})),t.chooseList=n}))})).catch((function(){t.$message.error("新歌速递失败")})).finally((function(){t.loading=!1}))},handleTabClick:function(){this.getTopSongs()}}),mounted:function(){this.getTopSongs()}},u=r,d=(n("02ad"),n("2877")),g=Object(d["a"])(u,a,i,!1,null,"13e300a6",null);e["default"]=g.exports},6549:function(t,e,n){},"6fcc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"song-list",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},t._l(t.songList,(function(e,a){return n("div",{key:a,staticClass:"song-item",on:{mouseenter:function(e){return t.handleEnter(a)},mouseleave:t.handleLeave}},[n("div",{staticClass:"item-index"},[t._v(t._s(a+1))]),n("div",{staticClass:"item-cover"},[n("el-image",{staticClass:"item-image",attrs:{src:e.image,lazy:""}}),t.showBtn===a?n("div",{staticClass:"item-btn"},[n("i",{staticClass:"el-icon-video-play btn-icon",on:{click:function(e){return t.handlePlay(a)}}})]):t._e()],1),n("div",{staticClass:"item-name"},[t._v(t._s(e.name))]),n("div",{staticClass:"item-singer"},[t._v(t._s(e.singer))]),n("div",{staticClass:"item-album",on:{click:function(n){return t.handleAlbumDetail(e)}}},[t._v(t._s(e.album))]),n("div",{staticClass:"item-duration"},[t._v(t._s(t.toGetMS(e.duration)))])])})),0)},i=[],s=n("5530"),o=n("ca00"),l=n("2f62"),c={name:"SongList",props:{songList:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{showBtn:-1}},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["selectPlay"])),{},{handlePlay:function(t){this.selectPlay({list:this.songList,index:t})},handleEnter:function(t){this.showBtn=t},handleLeave:function(){this.showBtn=-1},toGetMS:function(t){return Object(o["b"])(t)},handleAlbumDetail:function(t){this.$router.push({name:"album-detail",query:{id:t.albumId}})}})},r=c,u=(n("cc47"),n("2877")),d=Object(u["a"])(r,a,i,!1,null,"7ac9cb47",null);e["a"]=d.exports},be6e:function(t,e,n){},cc47:function(t,e,n){"use strict";n("be6e")},d81d:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").map,s=n("1dde"),o=s("map");a({target:"Array",proto:!0,forced:!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=song.540277d4.js.map