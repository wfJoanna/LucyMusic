(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AlbumDetail"],{"031d":function(t,e,i){},"29b1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"album-detail"},[i("div",{staticClass:"detail-top"},[i("div",{staticClass:"top-cover"},[i("el-image",{staticClass:"cover-image",attrs:{src:t.coverUrl}})],1),i("div",{staticClass:"top-info"},[i("div",{staticClass:"first-line"},[t._v(t._s(t.title))]),i("div",{staticClass:"second-line"},[t._v("歌手："+t._s(t.singer))]),i("div",{staticClass:"second-line"},[t._v("时间："+t._s(t.time))])])]),i("div",{staticClass:"detail-bottom"},[i("song-list",{attrs:{"song-list":t.songs,loading:t.loading}})],1)])},s=[],a=i("5530"),l=(i("d3b7"),i("b0c0"),i("d81d"),i("a15b"),i("2f62")),o=i("ca00"),c=i("6fcc"),r={name:"AlbumDetail",components:{SongList:c["a"]},data:function(){return{albumId:"",songs:[],loading:!1,coverUrl:"",title:"",singer:"",time:""}},methods:Object(a["a"])(Object(a["a"])({},Object(l["b"])(["getAlbum","getSongDetails"])),{},{getAlbumDetails:function(){var t=this;this.loading=!0,this.getAlbum(this.albumId).then((function(e){var i=e.album;t.coverUrl=i.picUrl,t.title=i.name,t.singer=i.artist.name,t.time=Object(o["d"])(i.publishTime);var n=[];e.songs.map((function(t){n.push(t.id)}));var s=n.join(",");t.getSongDetails(s).then((function(e){var i=[];e.songs.map((function(t){i.push(Object(o["a"])(t))})),t.songs=i}))})).catch((function(){t.$message.error("获取专辑详情失败")})).finally((function(){t.loading=!1}))}}),mounted:function(){this.albumId=this.$route.query.id,this.getAlbumDetails()}},u=r,d=(i("5901"),i("2877")),m=Object(d["a"])(u,n,s,!1,null,"203cea27",null);e["default"]=m.exports},5901:function(t,e,i){"use strict";i("031d")},"6fcc":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"song-list",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},t._l(t.songList,(function(e,n){return i("div",{key:n,staticClass:"song-item",on:{mouseenter:function(e){return t.handleEnter(n)},mouseleave:t.handleLeave}},[i("div",{staticClass:"item-index"},[t._v(t._s(n+1))]),i("div",{staticClass:"item-cover"},[i("el-image",{staticClass:"item-image",attrs:{src:e.image,lazy:""}}),t.showBtn===n?i("div",{staticClass:"item-btn"},[i("i",{staticClass:"el-icon-video-play btn-icon",on:{click:function(e){return t.handlePlay(n)}}})]):t._e()],1),i("div",{staticClass:"item-name"},[t._v(t._s(e.name))]),i("div",{staticClass:"item-singer"},[t._v(t._s(e.singer))]),i("div",{staticClass:"item-album",on:{click:function(i){return t.handleAlbumDetail(e)}}},[t._v(t._s(e.album))]),i("div",{staticClass:"item-duration"},[t._v(t._s(t.toGetMS(e.duration)))])])})),0)},s=[],a=i("5530"),l=i("ca00"),o=i("2f62"),c={name:"SongList",props:{songList:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{showBtn:-1}},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["selectPlay"])),{},{handlePlay:function(t){this.selectPlay({list:this.songList,index:t})},handleEnter:function(t){this.showBtn=t},handleLeave:function(){this.showBtn=-1},toGetMS:function(t){return Object(l["b"])(t)},handleAlbumDetail:function(t){this.$router.push({name:"album-detail",query:{id:t.albumId}})}})},r=c,u=(i("cc47"),i("2877")),d=Object(u["a"])(r,n,s,!1,null,"7ac9cb47",null);e["a"]=d.exports},be6e:function(t,e,i){},cc47:function(t,e,i){"use strict";i("be6e")},d81d:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").map,a=i("1dde"),l=a("map");n({target:"Array",proto:!0,forced:!l},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=AlbumDetail.8f4f571f.js.map