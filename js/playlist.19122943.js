(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playlist"],{"0678":function(t,e,a){"use strict";a("93c4")},"3fb6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playlist"},[a("div",{staticClass:"top"},[a("el-select",{staticClass:"top-select",attrs:{placeholder:"默认全部",clearable:"",size:"mini"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.options,(function(e){return a("el-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)})),1),a("div",{staticClass:"hot-tag"},[t._v("热门标签： "),a("el-radio-group",{attrs:{size:"mini"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.hotTag,(function(t,e){return a("el-radio-button",{key:e,attrs:{label:t}})})),1)],1),a("div",{staticClass:"sort"},[t._v("排序方式： "),a("el-radio-group",{attrs:{size:"mini"},model:{value:t.sortType,callback:function(e){t.sortType=e},expression:"sortType"}},[a("el-radio-button",{attrs:{label:"热门"}}),a("el-radio-button",{attrs:{label:"最新"}})],1)],1)],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"middle",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[a("play-list",{attrs:{lists:t.playlists}})],1),a("div",{staticClass:"bottom"},[a("el-pagination",{attrs:{background:"",layout:"total,prev,pager,next","page-size":40,total:t.total,"current-page":t.currentPage},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])},i=[],n=a("b85c"),l=a("5530"),o=(a("d3b7"),a("4c53"),a("b0c0"),a("d81d"),a("2f62")),r=a("cdcd"),c={name:"playlist",components:{PlayList:r["a"]},data:function(){return{options:[],category:"",hotTag:[],sortType:"热门",playlists:[],total:0,currentPage:1,loading:!1}},watch:{category:function(){this.getLists()},sortType:function(){this.getLists()}},methods:Object(l["a"])(Object(l["a"])({},Object(o["b"])(["getPlaylistCat","getPlaylistHotCat","getPlaylist"])),{},{getLists:function(){var t=this;this.playlists=[],this.loading=!0;var e={limit:40};this.category&&(e.cat=this.category),e.order="热门"===this.sortType?"hot":"new",e.offset=40*(this.currentPage-1),this.getPlaylist(e).then((function(e){t.playlists=e.playlists,t.total=e.total})).catch((function(){t.$message.error("获取歌单失败")})).finally((function(){t.loading=!1}))},handleCurrentChange:function(){this.getLists()}}),mounted:function(){var t=this;this.category=this.$route.query.tag,this.getPlaylistCat().then((function(e){var a=[];for(var s in e.categories){var i=e.categories[s];a.push({label:i,options:[]})}var l,o=Object(n["a"])(e.sub);try{for(o.s();!(l=o.n()).done;){var r,c=l.value,u=e.categories[c.category],d=Object(n["a"])(a);try{for(d.s();!(r=d.n()).done;){var g=r.value;g.label===u&&g.options.push({value:c.name,label:c.name})}}catch(p){d.e(p)}finally{d.f()}}}catch(p){o.e(p)}finally{o.f()}t.options=a})).catch((function(){t.$message.error("获取歌单分类失败")})),this.getPlaylistHotCat().then((function(e){e.tags.map((function(e){t.hotTag.push(e.name)}))})).catch((function(){t.$message.error("获取热门分类失败")})),this.getLists()}},u=c,d=(a("bb45"),a("2877")),g=Object(d["a"])(u,s,i,!1,null,"dd68b992",null);e["default"]=g.exports},"4c53":function(t,e,a){"use strict";var s=a("23e7"),i=a("857a"),n=a("af03");s({target:"String",proto:!0,forced:n("sub")},{sub:function(){return i(this,"sub","","")}})},"857a":function(t,e,a){var s=a("1d80"),i=/"/g;t.exports=function(t,e,a,n){var l=String(s(t)),o="<"+e;return""!==a&&(o+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),o+">"+l+"</"+e+">"}},"93c4":function(t,e,a){},af03:function(t,e,a){var s=a("d039");t.exports=function(t){return s((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b37d:function(t,e,a){},bb45:function(t,e,a){"use strict";a("b37d")},cdcd:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"play-list"},t._l(t.lists,(function(e){return a("div",{key:e.id,staticClass:"list-item"},[a("div",{staticClass:"item-cover",on:{click:function(a){return t.handleListDetail(e)}}},[a("el-image",{staticClass:"item-image",attrs:{src:e.picUrl||e.coverImgUrl,lazy:""}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])]),a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])]),a("div",{staticClass:"item-count"},[a("i",{staticClass:"el-icon-caret-right"}),a("span",[t._v(t._s(t.getPlayCount(e)))])])],1),a("div",{staticClass:"item-info"},[a("span",[t._v(t._s(e.name))])])])})),0)},i=[],n={name:"PlayList",props:{lists:{type:Array,default:function(){return[]}}},methods:{handleListDetail:function(t){this.$router.push({name:"playlist-detail",query:{id:t.id}})},getPlayCount:function(t){return t.playCount<1e4?t.playCount:Math.floor(t.playCount/1e4)+"万"}}},l=n,o=(a("0678"),a("2877")),r=Object(o["a"])(l,s,i,!1,null,"0d782014",null);e["a"]=r.exports},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,n=a("1dde"),l=n("map");s({target:"Array",proto:!0,forced:!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=playlist.19122943.js.map