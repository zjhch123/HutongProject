<template>
  <div class="p-news">
    <div class="m-swiper">
      <swiper :options="swiperOptions" ref="swiper">
        <swiper-slide v-for="item in swipers" :key="item.id">
          <a :href="item.link" class="u-slide">
            <img :src="item.image" class="img" />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="m-list">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Article from '@/components/Article'
export default {
  name: 'News',
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        delay: 6000,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swipers: [
        {
          id: 1,
          image: require('@/assets/demo/swiper1.png'),
          link: 'https://you.163.com'
        },
        {
          id: 2,
          image: require('@/assets/demo/swiper2.png'),
          link: 'https://blog.hduzplus.xyz'
        },
      ]
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
  .u-slide {
    width: 7.5rem;
    height: 4.2rem;
    display: block;
    .img {
      display: block;
      width: 7.5rem;
      height: 4.2rem;
    }
  }
}
.m-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 7.5rem;
  margin: auto;
}
</style>
