<template>
  <div class="menu">
    <div class="menu__wrapper">
      <div class="menu__items">
        <NuxtLink @click="removeOpen()" to="/" class="t-80 menu__item">Home</NuxtLink>
        <NuxtLink @click="removeOpen()" class="t-80 menu__item">Projects</NuxtLink>
        <NuxtLink @click="removeOpen()" to="/about" class="t-80 menu__item">About</NuxtLink>
        <NuxtLink @click="removeOpen()" class="t-80 menu__item">Posts</NuxtLink>
        <NuxtLink @click="removeOpen()" class="t-80 menu__item">Shop</NuxtLink>
        <NuxtLink @click="removeOpen()" class="t-80 menu__item">Contacts</NuxtLink>
      </div>
      <img class="menu__logo" src="/svg/logo-white-icon.svg" alt="logo">
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return {

    }
  },
  methods: {
    removeOpen(){
      this.$emit('closeMenu', false)
    },
    logoAnim() {
      let menuItems = document.querySelectorAll('.menu__item');
      menuItems.forEach(item => {
        item.addEventListener('mousemove',(e) => {
          let screenWidth = window.innerWidth / 2;
          let screenHeight = window.innerHeight / 2;

          let xPos = (e.clientX - screenWidth) / 5
          let yPos = (e.clientY - screenHeight) / 5

          gsap.to('.menu__logo', {x: xPos, y: yPos})
        })
        item.addEventListener('mouseleave', () => {
          gsap.to('.menu__logo', {x: 0, y: 0})
        })
      });
    }
  },
  async mounted() {
    this.logoAnim()
  }
}

</script>

<style lang="scss" scoped>
  .menu {
    height: 100vh;
    width: 100vw;
    padding: rvh(40) rvw(86);
    background-color: $black;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity .2s;
    pointer-events: none;

    &.opened {
      opacity: 1;
      pointer-events: auto;
    }

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      color: $white;
      font-family: $font-1;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: rvw(200);
      }
    }

    &__items {
      position: relative;
      width: 70vw;
      height: 80vh;

      a {
        position: absolute;
        width: max-content;
        cursor: pointer;

        &:nth-child(1) {
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &:nth-child(2) {
          top: 20%;
          left: 100%;
          transform: translate(-50%, -50%);
        }
        &:nth-child(3) {
          top: 80%;
          left: 100%;
          transform: translate(-50%, -50%);
        }
        &:nth-child(4) {
          top: 100%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &:nth-child(5) {
          top: 80%;
          left: 0;
          transform: translate(-50%, -50%);
        }
        &:nth-child(6) {
          top: 20%;
          left: 0;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
</style>
