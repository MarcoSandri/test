<template>
  <section class="hero">
    <div class="hero__content container">
      <p class="t-right t-120" v-html="heroText"></p>

      <div class="hero__bottom">
        <img :src="heroCover" alt="">

        <CommonBadge />
      </div>
    </div>
    <div class="hero__marquee t-80">
      <div class="hero__marquee-wrapper">
        <p>{{ sideText }} <img src="/svg/logo-white-icon.svg" alt=""></p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return {

    }
  },
  props: {
    heroText: String,
    heroCover: String,
    sideText: String
  },
  methods: {
    marqueeAnim(){
      let marquee = document.querySelector('.hero__marquee p');
      let marqueeContainer = document.querySelector('.hero__marquee')
      let marqueeWrapper = document.querySelector('.hero__marquee-wrapper')

      setTimeout(() => {

        while(marqueeContainer.clientHeight > marqueeWrapper.clientHeight) {
          let clone = marquee.cloneNode(true);
          marqueeWrapper.appendChild(clone)
        }
        let clone = marquee.cloneNode(true);
        marqueeWrapper.appendChild(clone)
        gsap.to(marqueeWrapper, {y: -marquee.clientHeight, duration: 4, ease:'none', repeat: -1});
      }, 100);
    }
  },
  async mounted() {
    this.marqueeAnim()
  }
}

</script>

<style lang="scss" scoped>
  .hero {
    background: $primary;
    display: flex;

    &__content {
      padding-top: rvh(206);
      background-color: $primary;
      padding-right: rvw(84);
      font-family: $font-1;

      p {
        color: $white;
      }
    }

    &__bottom {
      padding-top: rvh(40);
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: rvw(600);
        padding-left: rvw(40);
      }
    }

    &__marquee {
      writing-mode: vertical-lr;
      transform: scaleX(-1) scaleY(-1);
      overflow: hidden;
      display: flex;
      align-items: center;
      font-family: $font-1;
      flex-grow: 1;
      color: $white;
      background-color: $black;
      max-height: rvh(1300);

      p {
        min-height: fit-content;
        img {
          width: rvw(80);
          padding: rvh(20) 0;
        }
      }
    }

    &__marquee-wrapper {
      display: flex;
    }
  }
</style>
