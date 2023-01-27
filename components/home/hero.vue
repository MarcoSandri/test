<template>
  <section class="home-hero">
    <div class="home-hero__content container">
      <p class="t-right t-120" v-html="heroText"></p>
      <div class="home-hero__bottom">
        <img :src="heroCover" alt="">
        <CommonBadge />
      </div>
    </div>
    <div class="home-hero__marquee t-80">
      <div class="home-hero__marquee-wrapper">
        <p>{{ email }} <img src="/svg/logo-white-icon.svg" alt=""></p>
      </div>
    </div>
  </section>
</template>

<script>
  import { gsap } from "gsap";
  export default {
    data() {
      return {
        email: 'hi@fakemail.net',
        heroText: 'Taking your brands further through visual <span class="font-2 t-uppercase c-secondary">experience</span>',
        heroCover: null
      }
    },
    async mounted() {
      const pageEndpoint = useRuntimeConfig().public.cmsUrl;

      fetch(`${pageEndpoint}/api/homepage?populate=*&populate=hero.HeroCover`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.attributes);
        this.heroText = data.data.attributes.hero.HeroText;
        this.heroCover = pageEndpoint + data.data.attributes.hero.HeroCover.data.attributes.url
      })
      .catch((error) => { });

      fetch(`${pageEndpoint}/api/contact`)
      .then((response) => response.json())
      .then((data) => {
        this.email = data.data.attributes.Email;
        this.marqueeAnim();
      })
      .catch((error) => { });
    },
    methods: {
      marqueeAnim(){
        let marquee = document.querySelector('.home-hero__marquee p');
        let marqueeContainer = document.querySelector('.home-hero__marquee')
        let marqueeWrapper = document.querySelector('.home-hero__marquee-wrapper')

        setTimeout(() => {
          console.log(marquee.clientHeight)

          while(marqueeContainer.clientHeight > marqueeWrapper.clientHeight) {
            let clone = marquee.cloneNode(true);
            marqueeWrapper.appendChild(clone)
          }
          let clone = marquee.cloneNode(true);
          marqueeWrapper.appendChild(clone)
          gsap.to(marqueeWrapper, {y: -marquee.clientHeight, duration: 4, ease:'none', repeat: -1});
        }, 100);
      }
    }
  }
</script>

<style scoped lang="scss">
  .home-hero {
    display: flex;

    &__content {
      background-color: $primary;
      padding-top: rvh(206);
      padding-right: rvw(84);
      font-family: $font-1;

      p {
        color: $white;
      }
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: rvw(680);
        margin-left: rvw(60);
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
