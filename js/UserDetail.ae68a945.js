(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UserDetail"],{"2c68":function(t,i,a){},4978:function(t,i,a){"use strict";a("9171")},"4c5b":function(t,i,a){"use strict";a("6995")},6995:function(t,i,a){},"6fcc":function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"song-list",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},t._l(t.songList,(function(i,s){return a("div",{key:s,staticClass:"song-item",on:{mouseenter:function(i){return t.handleEnter(s)},mouseleave:t.handleLeave}},[a("div",{staticClass:"item-index"},[t._v(t._s(s+1))]),a("div",{staticClass:"item-cover"},[a("el-image",{staticClass:"item-image",attrs:{src:i.image,lazy:""}}),t.showBtn===s?a("div",{staticClass:"item-btn"},[a("i",{staticClass:"el-icon-video-play btn-icon",on:{click:function(i){return t.handlePlay(s)}}})]):t._e()],1),a("div",{staticClass:"item-name"},[t._v(t._s(i.name))]),a("div",{staticClass:"item-singer"},[t._v(t._s(i.singer))]),a("div",{staticClass:"item-album",on:{click:function(a){return t.handleAlbumDetail(i)}}},[t._v(t._s(i.album))]),a("div",{staticClass:"item-duration"},[t._v(t._s(t.toGetMS(i.duration)))])])})),0)},e=[],n=a("5530"),l=a("ca00"),r=a("2f62"),c={name:"SongList",props:{songList:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{showBtn:-1}},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])(["selectPlay"])),{},{handlePlay:function(t){this.selectPlay({list:this.songList,index:t})},handleEnter:function(t){this.showBtn=t},handleLeave:function(){this.showBtn=-1},toGetMS:function(t){return Object(l["c"])(t)},handleAlbumDetail:function(t){this.$router.push({name:"album-detail",query:{id:t.albumId}})}})},o=c,d=(a("4978"),a("2877")),u=Object(d["a"])(o,s,e,!1,null,"479b67ec",null);i["a"]=u.exports},9171:function(t,i,a){},"93d7":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"user-detail"},[a("div",{staticClass:"left"},[a("user-card",{attrs:{"user-id":t.userId}}),a("div",{staticClass:"list"},[a("div",{staticClass:"title"},[t._v("创建的歌单"),a("span",{staticClass:"count"},[t._v("（"+t._s(t.myList.length)+"）")])]),a("little-playlist",{attrs:{lists:t.myList,loading:t.listLoading}})],1),a("div",{staticClass:"list"},[a("div",{staticClass:"title"},[t._v("收藏的歌单"),a("span",{staticClass:"count"},[t._v("（"+t._s(t.collectList.length)+"）")])]),a("little-playlist",{attrs:{lists:t.collectList,loading:t.listLoading}})],1)],1),a("div",{staticClass:"right"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v("听歌排行")]),a("div",{staticClass:"type"},[a("span",{staticClass:"toggle",class:{on:1===t.rankType},on:{click:function(i){return t.handleToggle(1)}}},[t._v("最近一周")]),t._v(" | "),a("span",{staticClass:"toggle",class:{on:0===t.rankType},on:{click:function(i){return t.handleToggle(0)}}},[t._v("所有时间")])])]),!0===t.authority?a("song-list",{attrs:{"song-list":t.rank,loading:t.rankLoading}}):a("div",{staticClass:"denied"},[a("svg",{staticClass:"icon",attrs:{t:"1617341335432",viewBox:"0 0 2036 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11637"}},[a("path",{attrs:{d:"M996.621625 402.532392a105.254006 85.42512 0 1 0 210.508011 0 105.254006 85.42512 0 1 0-210.508011 0Z",fill:"#FFDF80","p-id":"11638"}}),a("path",{attrs:{d:"M1482.082172 75.621666a161.697345 125.085759 36 1 0 261.631799 190.086629 161.697345 125.085759 36 1 0-261.631799-190.086629Z",fill:"#FFDF80","p-id":"11639"}}),a("path",{attrs:{d:"M1478.658868 936.437961a42.71256 36.611585 90 1 0 73.223171 0 42.71256 36.611585 90 1 0-73.223171 0Z",fill:"#57E3BF","p-id":"11640"}}),a("path",{attrs:{d:"M851.704112 297.278387m-68.645288 0a68.645289 68.645289 0 1 0 137.290577 0 68.645289 68.645289 0 1 0-137.290577 0Z",fill:"#FF6A6A","p-id":"11641"}}),a("path",{attrs:{d:"M1443.573244 501.688291m-35.085625 0a35.085625 35.085625 0 1 0 70.171249 0 35.085625 35.085625 0 1 0-70.171249 0Z",fill:"#FF6A6A","p-id":"11642"}}),a("path",{attrs:{d:"M1039.334185 732.028056a38.134678 33.559664 0 1 0 76.269356 0 38.134678 33.559664 0 1 0-76.269356 0Z",fill:"#57E3BF","p-id":"11643"}}),a("path",{attrs:{d:"M1312.268908 17.210084C1590.286342 17.210084 1815.663866 242.587608 1815.663866 520.605042S1590.286342 1024 1312.268908 1024 808.87395 798.622476 808.87395 520.605042 1034.251473 17.210084 1312.268908 17.210084z m0 8.605042C1039.001457 25.815126 817.478992 247.337591 817.478992 520.605042S1039.001457 1015.394958 1312.268908 1015.394958 1807.058824 793.872493 1807.058824 520.605042 1585.536359 25.815126 1312.268908 25.815126z",fill:"#000000","p-id":"11644"}}),a("path",{attrs:{d:"M1742.389064 252.687059c163.905972-20.646364 259.41907 2.495462 285.739026 58.778173 22.026039 47.098263-10.377681 112.083541-72.25367 157.432113-66.752179 48.919664-256.688403 148.041143-449.696627 230.529075-251.995787 107.697838-488.955697 181.216448-674.896314 200.726947-139.619675 14.651518-216.181602-4.035765-228.61302-57.977905-12.193345-52.906667 39.560246-137.342207 154.735866-254.600246a4.302521 4.302521 0 1 1 6.138263 6.032134c-113.093199 115.135462-163.748213 197.781154-152.489949 246.634846 11.02019 47.821087 83.772952 65.576157 219.331047 51.352022 184.919485-19.401501 421.139361-92.693513 672.412325-200.081568l11.54223-4.956504c188.438947-81.231597 371.657501-177.114711 436.450599-224.600202 58.956011-43.208784 89.429333-104.321793 69.543082-146.845042-24.226062-51.805221-116.291406-74.112359-276.867227-53.887641a4.302521 4.302521 0 0 1-1.075631-8.536202z",fill:"#000000","p-id":"11645"}}),a("path",{attrs:{d:"M1721.249345 139.840538c11.631148-15.747227 21.22577-30.565109 28.789602-44.450779 7.563832-13.882801 13.24316-35.031126 17.037983-63.442106 14.875249 25.316034 28.109804 42.095866 39.703664 50.342364 11.59386 8.246499 27.708235 17.126902 48.348863 26.644078-14.565468 13.750857-25.499608 27.323877-32.796684 40.724796-7.297076 13.39805-11.496336 35.75395-12.597781 67.067697-17.448157-27.455821-32.15991-45.446095-44.143866-53.967955-11.978218-8.52186-26.761681-16.163137-44.34465-22.918095z",fill:"#A0FFE7","p-id":"11646"}}),a("path",{attrs:{d:"M1788.56372 26.98828c14.878118 25.313165 28.112672 42.095866 39.706532 50.339496 11.590992 8.249367 27.708235 17.12977 48.345994 26.646947-14.565468 13.747989-25.496739 27.323877-32.793815 40.721927-7.297076 13.39805-11.496336 35.756818-12.600649 67.067697-17.445289-27.455821-32.15991-45.446095-44.140998-53.967955-11.981087-8.52186-26.761681-16.160269-44.34465-22.918095 11.631148-15.747227 21.228639-30.562241 28.792471-44.44791 7.563832-13.885669 13.240291-35.033994 17.035115-63.442107z m4.80735 23.821625l-0.134812 0.702745c-3.634196 18.013221-8.323944 32.33488-14.149558 43.033815-5.722353 10.498151-12.551888 21.48679-20.494341 32.963048l-2.472516 3.530935 1.187496 0.510566c12.56623 5.48428 23.600762 11.502073 33.100728 18.070588l1.663642 1.164549c9.141423 6.502543 19.355608 17.577232 30.80605 33.292908l1.494409 2.073815 0.043025-0.372885c2.113972-19.017143 5.857165-33.74037 11.358656-44.278678l0.490487-0.917871c6.040739-11.089031 14.336-22.189535 24.868572-33.318723l0.731428-0.768717-0.958028-0.470409c-14.780594-7.271261-26.905098-14.201188-36.399328-20.824202l-1.224784-0.860504c-8.86893-6.307496-18.259899-16.69665-28.327798-31.219092l-1.583328-2.311888zM632.470588 433.120448a27.2493 27.2493 0 1 1 0 54.4986 27.2493 27.2493 0 0 1 0-54.4986z m0 8.605042a18.644258 18.644258 0 1 0 0 37.288516 18.644258 18.644258 0 0 0 0-37.288516zM750.072829 123.338936a15.77591 15.77591 0 1 1 0 31.55182 15.77591 15.77591 0 0 1 0-31.55182z m0 8.605042a7.170868 7.170868 0 1 0 0 14.341736 7.170868 7.170868 0 0 0 0-14.341736z",fill:"#000000","p-id":"11647"}}),a("path",{attrs:{d:"M221.685961 230.790095m-24.343664 0a24.343664 24.343664 0 1 0 48.687328 0 24.343664 24.343664 0 1 0-48.687328 0Z",fill:"#57E3BF","p-id":"11648"}}),a("path",{attrs:{d:"M101.490734 296.21423m-13.69349 0a13.69349 13.69349 0 1 0 27.38698 0 13.69349 13.69349 0 1 0-27.38698 0Z",fill:"#57E3BF","p-id":"11649"}}),a("path",{attrs:{d:"M209.512695 385.97916m-24.343664 0a24.343664 24.343664 0 1 0 48.687328 0 24.343664 24.343664 0 1 0-48.687328 0Z",fill:"#57E3BF","p-id":"11650"}}),a("path",{attrs:{d:"M314.494207 320.557894m-10.650173 0a10.650174 10.650174 0 1 0 21.300347 0 10.650174 10.650174 0 1 0-21.300347 0Z",fill:"#57E3BF","p-id":"11651"}}),a("path",{attrs:{d:"M303.844034 477.267182m-51.730645 0a51.730644 51.730644 0 1 0 103.461289 0 51.730644 51.730644 0 1 0-103.461289 0Z",fill:"#57E3BF","p-id":"11652"}}),a("path",{attrs:{d:"M281.098039 157.759104c96.634622 0 174.969188 78.334566 174.969188 174.969187s-78.334566 174.969188-174.969188 174.969188-174.969188-78.334566-174.969187-174.969188 78.334566-174.969188 174.969187-174.969187z m0 8.605042c-91.88177 0-166.364146 74.482375-166.364145 166.364145s74.482375 166.364146 166.364145 166.364146 166.364146-74.482375 166.364146-166.364146-74.482375-166.364146-166.364146-166.364145z",fill:"#000000","p-id":"11653"}}),a("path",{attrs:{d:"M456.744157 279.706891l3.533804-0.490488c56.661333-7.658487 90.602487-2.027922 99.832829 16.209031 8.891877 17.568627-6.981557 42.560538-41.140706 68.992359-76.341064 59.07935-212.226151 106.16614-344.588908 109.800336l-5.9174 0.149154c-95.802801 2.240179-149.756415-6.224314-163.452773-26.91944-14.992852-22.659944 16.057008-54.183081 90.722958-96.737882a4.302521 4.302521 0 0 1 4.259496 7.474913l-4.139026 2.374992C29.050622 399.127664 1.924661 427.182969 12.184739 442.69786c11.493468 17.370711 66.046566 25.551238 161.961233 22.918095 130.567171-3.585434 264.685356-50.061266 339.557826-108.001882 31.13591-24.094118 44.995765-45.919373 38.728426-58.302028-7.059003-13.951641-39.198835-18.959776-94.474756-11.086163a4.302521 4.302521 0 0 1-1.213311-8.518991z",fill:"#060606","p-id":"11654"}}),a("path",{attrs:{d:"M296.762084 671.308011c16.751148-12.758409 31.029782-25.066487 42.841636-36.921367 11.814723-11.857748 23.399978-31.230566 34.755765-58.121322 9.91014 28.08112 20.178824 47.453938 30.80605 58.121322 10.630095 10.670252 26.061804 22.975462 46.292258 36.921367-19.461737 10.145345-34.890577 20.938936-46.28939 32.380773-11.398812 11.438969-21.670364 32.326275-30.808918 62.661916-12.184739-30.748683-23.769994-51.635989-34.755765-62.661916-10.98577-11.025927-25.264403-21.819518-42.841636-32.380773z",fill:"#A0FFE7","p-id":"11655"}}),a("path",{attrs:{d:"M398.708885 576.265322c9.91014 28.08112 20.178824 47.453938 30.806051 58.121322 10.630095 10.670252 26.061804 22.975462 46.292257 36.921367-19.461737 10.145345-34.890577 20.938936-46.289389 32.380773-11.398812 11.438969-21.670364 32.326275-30.808919 62.661916l-1.459989-3.642801c-11.651227-28.760919-22.748863-48.434913-33.295776-59.019115-10.98577-11.025927-25.264403-21.819518-42.841635-32.380773 16.751148-12.758409 31.029782-25.066487 42.841635-36.921367 11.814723-11.857748 23.399978-31.230566 34.755765-58.121322z m-0.668325 22.212482l-0.717087 1.43991c-8.823036 17.611653-17.881277 31.115832-27.272246 40.541222-9.224605 9.259025-19.880515 18.753255-31.9706 28.491294l-1.996369 1.597669 1.953344 1.290756c11.920852 7.959664 22.126431 16.082824 30.613871 24.389558l1.399754 1.385412c8.845983 8.880403 17.729255 23.038566 26.827653 42.580616l0.906397 1.970555 0.542118-1.411227c7.314286-18.942566 15.368605-33.040493 24.323585-42.351149l0.768717-0.788795c9.035294-9.066846 20.348056-17.671888 33.932549-25.840942l2.277468-1.353859-0.143417-0.103261c-14.531048-10.532571-26.185143-20.109983-34.979496-28.778129l-1.087104-1.078498c-8.633725-8.662409-16.76549-22.000224-24.567394-40.079418l-0.811743-1.901714z",fill:"#000000","p-id":"11656"}})]),a("div",{staticClass:"denied-text"},[t._v("ta可能不想让我们看到")])])],1)])},e=[],n=a("5530"),l=(a("d3b7"),a("d81d"),a("a15b"),function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.info?a("div",{staticClass:"user-card"},[a("div",{staticClass:"background",style:{backgroundImage:"url("+t.info.profile.backgroundUrl+")"}}),a("div",{staticClass:"avatar-name"},[a("el-image",{staticClass:"avatar",attrs:{fit:"cover",src:t.info.profile.avatarUrl||"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"}}),a("span",{staticClass:"name"},[t._v(t._s(t.info.profile.nickname))]),1===t.info.profile.gender?a("div",{staticClass:"gender"},[a("svg",{staticClass:"icon",attrs:{t:"1617266188811",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2093"}},[a("path",{attrs:{d:"M884.62336 71.68h-293.04832a34.816 34.816 0 0 0 0 69.632h242.432l-210.73408 211.6096A340.66944 340.66944 0 0 0 404.5312 273.60768a344.42752 344.42752 0 1 0 267.38176 128.97792l211.03104-211.88608v243.2a34.688 34.688 0 1 0 69.376 0V139.648A67.90656 67.90656 0 0 0 884.62336 71.68zM404.5312 892.928a274.82624 274.82624 0 1 1 273.7152-274.82112A274.58048 274.58048 0 0 1 404.5312 892.928z",fill:"#53D4FF","p-id":"2094"}})])]):2===t.info.profile.gender?a("div",{staticClass:"gender"},[a("svg",{staticClass:"icon",attrs:{t:"1617266270841",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2233"}},[a("path",{attrs:{d:"M614.28736 76.8a342.22592 342.22592 0 0 0-267.43296 556.92288L252.16 728.2688 136.03328 612.352a34.66752 34.66752 0 0 0-49.06496 48.98304l116.12672 115.93728-116.12672 115.92192a34.6624 34.6624 0 0 0 49.06496 48.97792l116.12672-115.93728 116.1216 115.93728a34.6624 34.6624 0 1 0 49.06496-48.97792l-116.12672-115.9424 94.2848-94.1312A342.76864 342.76864 0 1 0 614.28736 76.8z m0 615.936a273.32096 273.32096 0 1 1 273.7664-273.32096 273.85344 273.85344 0 0 1-273.7664 273.32096z",fill:"#FC8677","p-id":"2234"}})])]):t._e()],1),a("div",{staticClass:"profile"},[a("div",{staticClass:"line"},[t._v("等级："),a("span",{staticClass:"level"},[t._v("Lv"+t._s(t.info.level))])]),a("div",{staticClass:"line"},[t._v("年龄："+t._s(t.age))])]),a("div",{staticClass:"follow"},[a("div",[t._v("动态"),a("span",[t._v(t._s(t.info.profile.eventCount))])]),a("div",[t._v("关注"),a("span",[t._v(t._s(t.info.profile.follows))])]),a("div",[t._v("粉丝"),a("span",[t._v(t._s(t.info.profile.followeds))])])])]):t._e()}),r=[],c=a("2f62"),o=a("ca00"),d={name:"UserCard",data:function(){return{info:null}},computed:{age:function(){return Object(o["b"])(this.info.profile.birthday)}},methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])(["getUserInfo"])),{},{refresh:function(){var t=this;this.getUserInfo(this.userId).then((function(i){t.info=i})).catch((function(){t.$message.error("获取用户详情失败")}))}}),watch:{userId:function(){this.refresh()}},props:["userId"],mounted:function(){this.refresh()}},u=d,f=(a("f09b"),a("2877")),p=Object(f["a"])(u,l,r,!1,null,"6b7c29f2",null),h=p.exports,v=a("6fcc"),g=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"little-playlist",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},t._l(t.lists,(function(i){return a("div",{key:i.id,staticClass:"list-item"},[a("div",{staticClass:"item-cover",on:{click:function(a){return t.handleListDetail(i)}}},[a("el-image",{staticClass:"item-image",attrs:{fit:"cover",src:i.picUrl||i.coverImgUrl,lazy:""}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),a("span",{staticClass:"dot"},[t._v("...")])]),a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])]),i.playCount?a("div",{staticClass:"item-count"},[a("i",{staticClass:"el-icon-caret-right"}),a("span",[t._v(t._s(t.getPlayCount(i)))])]):t._e()],1),a("div",{staticClass:"item-info"},[a("span",[t._v(t._s(i.name))])])])})),0)},m=[],C={name:"LittlePlaylist",props:{lists:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},methods:{handleListDetail:function(t){this.$router.push({name:"playlist-detail",query:{id:t.id}})},getPlayCount:function(t){return t.playCount<1e4?t.playCount:Math.floor(t.playCount/1e4)+"万"}}},y=C,_=(a("4c5b"),Object(f["a"])(y,g,m,!1,null,"c208bd5a",null)),b=_.exports,k=(a("fcc2"),{name:"UserDetail",components:{LittlePlaylist:b,SongList:v["a"],UserCard:h},data:function(){return{userId:this.$route.query.id,myList:[],collectList:[],rank:[],authority:!0,rankType:1,rankLoading:!1,listLoading:!1}},watch:{$route:function(){this.userId=this.$route.query.id,this.refresh()}},methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])(["getUserPlaylist","getUserRecord","getSongDetails"])),{},{getPlaylist:function(){var t=this;this.myList=[],this.collectList=[],this.listLoading=!0;var i={uid:this.userId};this.getUserPlaylist(i).then((function(i){var a=i.playlist;a.map((function(i){i.userId==t.userId?t.myList.push(i):t.collectList.push(i)}))})).catch((function(){t.$message.error("获取用户歌单失败")})).finally((function(){t.listLoading=!1}))},getRank:function(){var t=this;this.rank=[],this.rankLoading=!0;var i={uid:this.userId,type:this.rankType,cookie:encodeURIComponent(this.$store.state.cookie)};this.getUserRecord(i).then((function(a){t.authority=!0;var s=[];if(1===i.type?s=a.weekData:0===i.type&&(s=a.allData),s.length>0){var e=[];s.map((function(t){e.push(t.song.id)}));var n=e.join(",");t.getSongDetails(n).then((function(i){var a=[];i.songs.map((function(t){a.push(Object(o["a"])(t))})),t.rank=a}))}})).catch((function(i){400===i.status?t.authority=!1:t.$message.error("获取用户播放记录失败")})).finally((function(){t.rankLoading=!1}))},refresh:function(){this.getPlaylist(),this.getRank()},handleToggle:function(t){this.rankType!==t&&(this.rankType=t,this.getRank())}}),mounted:function(){this.refresh()}}),w=k,L=(a("d2af"),Object(f["a"])(w,s,e,!1,null,"dbca2d24",null));i["default"]=L.exports},b904:function(t,i,a){},d2af:function(t,i,a){"use strict";a("2c68")},d81d:function(t,i,a){"use strict";var s=a("23e7"),e=a("b727").map,n=a("1dde"),l=n("map");s({target:"Array",proto:!0,forced:!l},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},f09b:function(t,i,a){"use strict";a("b904")}}]);
//# sourceMappingURL=UserDetail.ae68a945.js.map