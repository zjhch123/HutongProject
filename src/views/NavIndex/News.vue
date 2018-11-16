<template>
  <div class="p-news">
    <div class="m-swiper">
      <swiper v-if="swiperLoaded" :options="swiperOptions" ref="swiper">
        <swiper-slide v-for="item in swiperNews" :key="item.id">
          <a :href="item.link" class="u-slide">
            <img :src="item.swiperImage" class="img" />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="m-list">
      <Article v-for="item in news" :key="item.id" :article="item"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Article from '@/components/Article'
import utils from '../../lib/utils'
import { getNews, getSwiperNews } from '../../api'
export default {
  name: 'News',
  data() {
    return {
      page: 1,
      totalPage: 1,
      news: [],
      swiperLoaded: false,
      swiperNews: [],
      swiperOptions: {
        autoplay: {
          delay: 8000,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      scrollFunc: null
    }
  },
  computed: {
      swiper() {
        return this.$refs.swiper.swiper
      }
  },
  mounted() {
    this.launch()
    this.scrollFunc = utils.debounce(this.onScroll, 200).bind(this)
    document.addEventListener('scroll', this.scrollFunc)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollFunc)
  },
  methods: {
    launch() {
      this.getNews()
      this.getSwiperNews()
    },
    async getNews(page = 1) {
      const {
        code,
        content
      } = await getNews(page)
      if (code !== 200) {
        // TODO error
      }
      this.page = content.page
      this.totalPage = content.totalPage
      this.news = [
        ...this.news,
        ...content.list,
      ]
    },
    async getSwiperNews() {
      const {
        code,
        content
      } = await getSwiperNews()
      if (code !== 200) {
        // TODO error
      }
      this.swiperNews = content
      this.swiperLoaded = true //swiper加载完毕，标志位设为true。如果不这么做，loop会失效
    },
    onScroll() {
      if (window.scrollY > document.documentElement.clientHeight * 0.7 && this.page < this.totalPage) {
        this.getNews(this.page + 1)
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Article,
  }
}
</script>
<style lang="scss">
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: .14rem;
  }
  .swiper-pagination {
    pointer-events: none;
  }
  .swiper-pagination-bullet {
    width: .1rem;
    height: .1rem;
    background: transparent;
    border: 1px solid white;
    border-radius: 50%;
    opacity: .5;
    margin: 0 .08rem !important;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: white;
  }
</style>
<style lang="scss" scoped>
.m-swiper {
  display: block;
  height: 4.2rem;
  font-size: 0;
  .u-slide {
    width: 7.5rem;
    height: 4.2rem;
    display: block;
    position: relative;
    overflow: hidden;
    .img {
      display: block;
      width: 7.5rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
