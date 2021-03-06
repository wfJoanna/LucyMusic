# LucyMusic
一个用网易云音乐API的音乐网站



## TODO：

1. 进度条优化（拖动、按钮、hover的时候显示对应时间）（或许可以用el-slider）、音量点击图标直接静音、按钮都没有title用户可能会不知道按钮含义
3. 歌手的超链
4. 用户搜索
5. **音乐详情的喜欢、收藏、评论点赞、发表评论、回复评论**
6. 歌曲mv图标，mv详情，mv排行榜，mv搜索
8. **音乐云盘**
9. 多种登录方式
10. 适应移动端
11. 相关歌单推荐
12. 安卓开发、桌面应用开发、小程序开发
13. ……



## 效果演示：[demo](https://lucy-music.vercel.app/)

没有适应移动端，暂时懒得弄了，只适应pc端网页浏览



## 涉及技术：

- html
- css
- js
- vue（vue 2.x 以及 @vue/cli 4.x 以及 vuex 3.x 以及 vue-router 3.x）
- element-ui 2.15.1
- axios 0.21.1
- qs 6.9.6
- vercel部署网易云音乐api
- iconfont也有用到一丁点



## 描述：

一个基于网易云音乐API的音乐网站，个人练手项目

Lucy之名取自《Steel Ball Run》里的勇敢女性Lucy Steel

网易云音乐API：<https://github.com/Binaryify/NeteaseCloudMusicApi>

参考：<https://gitee.com/lxhcool/desktop-nicemusic>

功能有：

1. 登录（手机号格式错误、手机号或密码错误、手机号未注册、密码错误超过限制、登录成功）
2. 用户版块（用户主页、退出登录）
3. 个性推荐（轮播图、推荐歌单、最新音乐）
4. 音乐播放卡片（上一首、下一首、播放暂停、进度条、进度条跳动、音量调节、播放模式切换、顺序播放列表查看）
5. 音乐详情（信息、歌词、热门评论、最新评论、相似歌曲）
6. 歌单详情（信息、tag点击、歌曲）
7. 歌单（分类、排序、歌单、分页）
8. 搜索（搜索歌曲、歌单、歌手、专辑）
9. 歌手（分类、歌手、无限滚动）
10. 歌手详情（信息、热门歌曲、专辑、歌手简介）
11. 专辑详情（信息、歌曲）



## 升级日志：

- 1.0.1
  - 时间：2021.4.6
  - 改动：
    - 恢复音乐url为固定的url+id这种形式。做这样的“放弃治疗”改动，是因为我实在是搞不定这个bug了，具体来讲就是：我的前端项目和后端api的域名不同，然后登录接口返回的cookie没法自动保存，所以我就手动保存，然后我以为只要保存了cookie，发送请求时应该就会自动带上了，本地测试的时候一切正常，但是部署到线上后，edge发生了严重的错误，就是登录和没登录效果一样（即最新音乐只返回4首，请求任何音乐的url都返回null，但是莫名其妙的最新音乐那4首歌却可以请求到url，subcount接口返回301），我感觉应该是没带上cookie吧，然后chrome却基本正常，登录后就完全正常，非常正常，但是不登录的时候就跟edge一样，这是不对的，就算不登录也应该能获取到所有免费音乐的url吧。总之呢，我放弃请求音乐url了，放弃区分音乐种类了，直接用“ https://music.163.com/song/media/outer/url?id=id.mp3”就可以了，凡是404的就统统表示为不能播放
    - 登录后直接返回到之前的页面，而不是到首页
    - 改了一点点歌词版块长度，使正在唱的歌词居中
- 1.0.2
  - 时间：2021.4.7
  - 改动：
    - 301登录由replace改为push
    - 换成了手传cookie的方式
- 1.0.3
  - 时间：2021.4.12
  - 改动：
    - 我放弃github pages了，太慢了，太不稳定了，我选择换成vercel。同时，解决了之前报错“Uncaught SyntaxError: Unexpected token '<'”（明明请求的js文件，返回的确实html代码，我看了的，本地build生成的文件是对的），解决方法就是将vue.config.js里的publicPath生产环境部分设成'./'，原先这里是'/LucyMusic/'，是因为github pages不是根目录而是跟了个仓库名，所以要这么弄，但现在我放弃github pages了，所以就没必要这么弄了，这样一来，"serve -s dist"又可以用了。同时，调用assets下的图片也不用require了



## 开发日志：

- 2021.3.4-2021.3.5
  - 完成：写了登录页面，抠图很有成就感，登录页面很好看
- 2021.3.8
  - 完成：完成登录功能，部署api相关到vercel
  - 遇到困难：
    - 刚看axios那一堆代码的时候，我是很懵的，因为我完全不懂接口、后端啥的。但是经过不到一个小时的摸索和实验，我竟然豁然开朗了，实验了之后我甚至对代码进行了改进，改成了我想要的效果
    - 刚看到网易云音乐api文档里那一小段vercel部署的时候我是崩溃的，完全不懂，我不知道怎么把api项目部署到网上，毕竟我是直接用的人家的，人家也没提供在线接口。但是就顺着那一小段文字做下来，我竟然领悟了，瞬间就搞懂了一切。我太感谢vercel了，太良心了，vercel永远的神！
- 2021.3.9
  - 完成：基本页面的header和footer，以及未登录和已登录状态切换
- 2021.3.10
  - 完成：“个性推荐”的轮播图、推荐歌单，还没贴超链接
  - 遇到困难：
    - 图片的容器div的高度总是要比图片img多4px，设了无数次都没办法解决。结果发现只要给图片设置vertical-align:top就正常了，说是什么由于基线的问题导致的
- 2021.3.12
  - 完成：“个性推荐”的推荐歌单显示播放数量
- 2021.3.15
  - 完成：“个性推荐”的最新音乐版块的基本样式
  - 遇到困难：
    - 我按照之前的步骤，npm run build之后，把dist文件夹里的放到gh-pages分支，但是github pages上始终没有任何内容。原来是我忘记设置vue.config.js了
- 2021.3.16
  - 完成：最新音乐版块的播放歌曲部分和部分音乐播放卡片
  - 遇到困难：
    - 监听到currentSong改变后直接play，这时audio的src属性可能还未挂载完毕，所以没能play成功。应用this.$nextTick()
- 2021.3.17
  - 完成：音乐播放卡片完成
- 2021.3.18
  - 完成：歌曲详情的上半部分，除了歌词
  - 遇到困难：
    - 为了实现CD旋转动画的播放和暂停，需要访问dom的classList，进行remove和add，结果就是没法实现效果，而且还报错说是remove和add方法没有定义。好家伙，一打印才知道，el-image元素没有classList这个属性
- 2021.3.19
  - 完成：歌词部分的基本样式，就差滚动了
- 2021.3.22
  - 完成：歌词滚动，相似歌曲
  - 遇到困难：
    - 一个很蠢的错，就是平时用v-on，绑定的处理函数只用写函数名，不用写括号和参数，然后在定义此函数时可以增添一个参数event。然后我就傻了，我潜意识直接认为如果我在定义函数时写的参数是index，我就可以把这个item的index传过来，但实际上不是这样的，我以为传过来的index其实是event。要解决呢，就是v-on绑定时就写上括号和参数
    - 给一个el-icon监听click，结果就是没反应，也没报错。结果才发现需要弄成@click.native="……"。给vue组件监听事件的时候必须加上native，表示监听的对象是该组件的根元素（后来我想起来elementui的icon元素其实是用i，不需要用el-icon，用了i也就不用native了）
- 2021.3.23
  - 完成：热门评论，修改播放列表popover的高度和滑块，最新音乐
- 2021.3.24
  - 完成：歌单详情，排行榜，歌单，搜索都搞定了
  - 遇到困难：
    - 怎么实现歌单简介到了第三行自动变成省略号呢？我居然现在才发现有个叫-webkit-box的东西
    - 一定要记住！mapAction的method是异步执行的！像设置loading这种，要把它放在finally里面修改，放在method后面的话瞬间就改成false了，约等于没有loading效果
    - 像分页这种，切换然后请求的时候，要先把现有的数组清空，配合v-loading，这样切页的效果才明显
- 2021.3.25
  - 完成：添加背景图片
  - 遇到困难：
    - 部署到github pages后背景图片不显示。就明明加载出来了，结果瞬间消失，然后控制台还报错404，一看他请求了两张图，一张图路径是错的直接是‘https://wfJoanna.github.io/img/...’，另一张路径就对了。最后呢是给它require了才正常显示了，但是我还是不懂为什么layout这张背景图就必须require才能正常显示，而login那张背景图就不用，不都是放在assets文件夹下吗？迷惑 → 破案了，因为login有专门的模块，而layout没有，只要是有专门模块的都可以加在出assets里的图片来，不过为什么会这样我还是不知道 → 我靠，给layout弄了模块但是效果跟以前一样不行，但是在song放背景图片就可以，为啥呀，敲你吗
    - 总结一下，遇到请求图片请求github pages根目录而非项目目录时，特别是脑瘫地这两个都请求了而只显示错误的结果时，有两种解决方法：1，图片要在有单独模块的页面中使用，没有children的那种；2，在data中用require单独定义一个变量导入图片，就使用这个变量来定义图片路径
    - 最终我选择require。哎，为了这个背景图片浪费了我一整天时间，结果到最后还是不明白为啥
    - **以上全部推翻！**login页面那个应该是因为一直以来错误的那张还没加载出来就被我跳转了吧，反正现在login也要require才行了。总之是张图片就要require就对了
- 2021.3.30
  - 完成：歌手，歌手详情，专辑详情
  - 遇到困难：
    - 一个字段，给它设置成tag的样子，怎么让它水平居中、垂直居中呢？水平居中可以靠设置了width时的text-align、或者没设置width时的padding来实现，但是垂直居中，就算用了padding，也会发现字段本身顶部有一个高度无法消除，无法达到垂直居中。解决办法是设置line-height，随便什么值都可以实现垂直居中
- 2021.3.31
  - 完成：专辑超链，搜索添加歌手、专辑 ，音乐详情的全部热门评论和全部评论，搜索显示全部结果（除非结果过多），用户超链
  - 遇到困难：
    - 神奇，当搜索结果单曲翻到500多首左右的时候，后端就不返回了，当专辑反倒三百多左右的时候，后端就会忽视limit而返回五百多个专辑数据。好像网易云音乐本身也不会显示全部搜索结果，索性我就直接设置最大显示为12页
- 2021.4.1
  - 完成：个人主页的用户卡片
  - 遇到困难：
    - 退出登录后请求那些需要登录的接口居然还有效。原因是接口被缓存了。解决办法是给需要登录的接口的请求url后面加一个时间戳参数使url不同。像个性推荐那些也应该使用时间戳
    - 原来登录的时候是发了cookie并且浏览器自动设置了，退出登录的时候cookie就没了，以及cookie有保质期。但是线上的时候，因为前端和后端不在同一个域名下，所以浏览器没有自动保存cookie，所以要手动设置
    - 给图片设置flex-shrink:0就可以防止窗口过小的时候图片被压缩
- 2021.4.2
  - 完成：用户主页剩余部分，试听及付费及下架音乐处理
  - 遇到困难：
    - 像id这种，本来是字符串类型，但是它有那个接口缓存，缓存的时候好像是保存为数字类型，所以会导致下一次===判断的时候判断为不相等。所以应该用==。哎，早知道我就全部用==好了
    - 修改了歌词滚动逻辑。原本歌词是一个对象，每句歌词的属性名是时间（秒），当v-for的index小于currentTime时，就显示为紫色，缺点为所有唱过的歌词都为紫色，而没办法实现只有当下在唱的一句歌词为紫色。现在是，歌词是一个数组，每句歌词是一个对象，包含time和content，然后监听currentTime，currentTime变动时就遍历歌词数组找出time最大的小于currentTime的那一句歌词，这句歌词就是我们正在唱的歌词，设置index，当v-for的index等于我们设置的index时变为紫色
