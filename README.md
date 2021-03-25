# LucyMusic
一个用网易云音乐API的音乐网站



## TODO：

2. 个性推荐-轮播图没法点击
5. 进度条优化（拖动、按钮、hover的时候显示对应时间）（或许可以用el-slider）、音量点击图标直接静音、按钮都没有title用户可能会不知道按钮含义
6. 音乐详情-没有全部评论，没有点击效果，没有发评论
5. 歌单详情-没有推荐歌单
6. 对于要付费的音乐还没设置（当前情况是放不动音乐，顺着url会发现403，其他一切正常）
7. 搜索-热搜、历史搜索、其他种类
7. 歌手
8. 用户版块-个人主页
9. 适应移动端
10. ……



## 效果演示：[demo](https://wfjoanna.github.io/LucyMusic/)



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

一个基于网易云音乐API的音乐网站

Lucy之名取自《Steel Ball Run》里的勇敢女性Lucy Steel

网易云音乐API：<https://github.com/Binaryify/NeteaseCloudMusicApi>

参考：<https://gitee.com/lxhcool/desktop-nicemusic>

功能有：

1. 登录（手机号格式错误、手机号或密码错误、手机号未注册、密码错误超过限制、登录成功）
2. 用户版块（退出登录）
3. 个性推荐（轮播图、推荐歌单、最新音乐）
4. 音乐播放卡片（上一首、下一首、播放暂停、进度条、进度条跳动、音量调节、播放模式切换、顺序播放列表查看）
5. 音乐详情（信息、歌词、热门评论、相似歌曲）
6. 歌单详情（信息、tag点击、歌曲）
7. 歌单（分类、排序、歌单、分页）
8. 搜索（搜索歌曲、歌单）



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
    - 部署到github pages后背景图片不显示。就明明加载出来了，结果瞬间消失，然后控制台还报错404（顺带一提，serve是个好东西，可以本地预览dist打包后的效果，本地要看的时候就可以直接一个命令解决，不用慢吞吞地等待npm run serve之后还要把api npm start，因为生产环境是直接访问部署在vercel的服务器。命令为`serve -s dist`，本地预览就是非常迅速）