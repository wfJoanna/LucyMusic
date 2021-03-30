<template>
  <div class="singer">
    <div class="filter">
      <ul class="tag-list">
        <li v-for="item in areas" :key="item.value" :class="{active:area===item.value}"
            @click="chooseType('area', item.value)">{{ item.label }}
        </li>
      </ul>
      <ul class="tag-list">
        <li v-for="item in types" :key="item.value" :class="{active:type===item.value}"
            @click="chooseType('type', item.value)">{{ item.label }}
        </li>
      </ul>
      <ul class="tag-en">
        <li v-for="item in ens" :key="item.value" :class="{active:en===item.value}"
            @click="chooseType('en', item.value)">{{ item.label }}
        </li>
      </ul>
    </div>
    <load-more @scroll-state="getArtists">
      <ul class="infinite-list">
        <singer-item v-for="item of artists" :key="item.id" :item="item"/>
      </ul>
    </load-more>
    <div class="loading" v-if="loading" v-loading="true" element-loading-text="拼命加载中"
         element-loading-background="rgba(0, 0, 0, 0)"
         element-loading-spinner="el-icon-loading">
    </div>
    <div class="loaded" v-if="noMore">
      - 已加载完 -
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SingerItem from '../../components/SingerItem';
import LoadMore from '../../components/LoadMore';

export default {
  name: "singer",
  components: { LoadMore, SingerItem },
  data () {
    return {
      area: -1,
      areas: [
        {
          value: -1,
          label: '全部'
        },
        {
          value: 7,
          label: '华语'
        },
        {
          value: 96,
          label: '欧美'
        },
        {
          value: 8,
          label: '日本'
        },
        {
          value: 16,
          label: '韩国'
        },
        {
          value: 0,
          label: '其他'
        }
      ],
      type: -1,
      types: [
        {
          value: -1,
          label: '全部'
        },
        {
          value: 1,
          label: '男歌手'
        },
        {
          value: 2,
          label: '女歌手'
        },
        {
          value: 3,
          label: '乐队组合'
        }
      ],
      en: -1,
      ens: [],
      artists: [],
      count: 1,
      loading: false,
      noMore: false,
      noLoading: false, // 因为不设置这个的话，就可能发生count还没来得及增加就又来一次请求的情况，就会导致请求的数据相同。也算是节流了吧
    }
  },
  computed: {
    offset () {
      return (this.count - 1) * 40
    }
  },
  methods: {
    ...mapActions(['getArtistList']),
    getEns () {
      let ens = []
      for (let i = 0; i < 26; i++) {
        ens.push({
          value: String.fromCharCode(97 + i),
          label: String.fromCharCode(65 + i)
        })
      }
      ens.unshift({
        value: -1,
        label: '热门'
      })
      ens.push({
        value: 0,
        label: '#'
      })
      this.ens = ens
    },
    chooseType (type, val) {
      if (type === 'area') {
        this.area = val
      } else if (type === 'type') {
        this.type = val
      } else if (type === 'en') {
        this.en = val
      }
      while(this.noLoading){} // 一直循环直到noLoading变为false，因为要等待之前的都完了再来重新请求，不然会混乱
      this.artists = []
      this.count = 1
      this.noMore = false
      this.getArtists()
    },
    getArtists () {
      if (!this.noMore && !this.noLoading) {
        this.loading = true
        this.noLoading = true
        let params = {
          limit: 40,
          offset: this.offset,
          type: this.type,
          area: this.area,
          initial: this.en
        }
        this.getArtistList(params)
            .then(res => {
              this.artists.push(...res.artists)
              this.count += 1
              if (res.more !== true) {
                this.noMore = true
              }
            })
            .catch(() => {
              this.$message.error('获取歌手列表失败')
            })
            .finally(() => {
              this.loading = false
              this.noLoading = false
            })
      }
    }
  },
  mounted () {
    this.getEns()
    this.getArtists()
  }
}
</script>

<style lang="scss" scoped>
.singer {
  .filter {
    .tag-list {
      display: flex;
      flex-wrap: wrap;

      li {
        padding: 0 15px;
        margin-right: 14px;
        line-height: 29px;
        border-radius: 14px;
        font-size: 13px;
        cursor: pointer;
        list-style: none;

        &:hover {
          color: #7868e6;
        }

        &.active {
          color: white;
          background: #7868e6;
          font-weight: bold;
        }
      }
    }

    .tag-en {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 28px;
        height: 28px;
        line-height: 29px;
        margin-right: 14px;
        text-align: center;
        border-radius: 50%;
        font-size: 13px;
        cursor: pointer;
        list-style: none;

        &:hover {
          color: #7868e6;
        }

        &.active {
          color: white;
          background: #7868e6;
          font-weight: bold;
        }

        &:first-child {
          width: auto;
          height: auto;
          padding: 0 15px;
          margin-right: 14px;
          border-radius: 14px;
        }
      }
    }
  }

  .infinite-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
  }

  .loading {
    margin-bottom: 20px;
    height: 50px;
  }

  .loaded {
    text-align: center;
    margin: 20px 0;
    color: #7868e6;
    //height: 50px;
  }
}

ul {
  padding: 0;
}
</style>
