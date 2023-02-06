<template>
  <header class="header container">
    <AppMenu @closeMenu="clickedLink" :class="menu? 'opened' : ''"/>
    <div class="header__wrapper">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="header__logo">
        <img src="/svg/logo-white.svg" alt="logo">
      </NuxtLink>

      <div class="header__address t-22 t-right">
        <div class="header__block" :v-show="address.Street != ''">
          <p>{{ address.Street }}</p>
          <p>{{ address.City }}, {{ address.State }} {{ address.ZipCode }}</p>
        </div>

        <div class="header__block" :v-show="contact.PhoneNumber != ''">
          <p><a :href="'mailto:' + contact.Email">{{ contact.Email }}</a></p>
          <p><a :href="'tel:' + contact.PhoneNumber.replace(/\+|\ /g,'')">{{ contact.PhoneNumber }}</a></p>
        </div>
      </div>

      <!-- hamburger menu -->
      <div class="header__menu hamburger" :class="menu? 'opened' : ''" @click="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script setup>
  const localePath = useLocalePath()
  const { findOne } = useStrapi()
  const { data: addressApi, addressPending, addressRefresh, addressError } = await useAsyncData(
    'address',
    () => findOne('address')
  )
  const address = addressApi.value.data.attributes;

  const { data: contactApi, contactPending, contactRefresh, contactError } = await useAsyncData(
    'contact',
    () => findOne('contact')
  )
  const contact = contactApi.value.data.attributes;

</script>

<script>
  export default {
    data() {
      return {
        menu: false,
      }
    },
    methods: {
      toggleMenu() {
        this.menu = !this.menu;
      },
      clickedLink(value) {
        this.menu = value
      }
    },
  }
</script>


<style lang="scss" scoped>
  .header {
    background-color: transparent;
    position: fixed;
    padding: rvh(30) rvw(40) rvh(30) rvw(46);
    top: 0;
    left: 0;
    z-index: 1;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__logo {
      height: rvh(80);

      img {
        object-fit: contain;
        height: 100%;
      }
    }

    &__address {
      font-family: $font-1;
      color: $white;
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;

      .header__block {
        padding-right: rvw(80);
      }
    }

    &__menu {
      &.hamburger {
        $iconSize: rvw(44);
        z-index: 3;
        display: inline-block;
        width: $iconSize;
        height: $iconSize;
        position: relative;
        cursor: pointer;
        transition: all ease-in-out .2s;
        -webkit-transform: translate3d(0,0,0);
        -webkit-tap-highlight-color: rgba(0,0,0,0);

        span {
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          width: calc($iconSize / 7);
          border-radius: 100vw;
          position: absolute;
          height: calc($iconSize / 7);
          background: $white;
          transition: all ease-in-out .2s;

          &:nth-child(1) {top: 0; left: 0; transform: translate(0, 0);}
          &:nth-child(2) {top: 0; left: 50%; transform: translate(-50%, 0);}
          &:nth-child(3) {top: 0; left: 100%; transform: translate(-100%, 0);}
          &:nth-child(4) {top: 50%; left: 0; transform: translate(0, -50%);}
          &:nth-child(6) {top: 50%; left: 100%; transform: translate(-100%, -50%);}
          &:nth-child(7) {top: 100%; left: 0; transform: translate(0, -100%);}
          &:nth-child(8) {top: 100%; left: 50%; transform: translate(-50%, -100%);}
          &:nth-child(9) {top: 100%; left: 100%; transform: translate(-100%, -100%);}
        }
        &.opened {
          transform: rotate(45deg);

          span:nth-child(5) {border-radius: 0vw;}
          span:nth-child(2) {border-bottom-left-radius: 0vw; border-bottom-right-radius: 0vw;}
          span:nth-child(4) {border-bottom-right-radius: 0vw; border-top-right-radius: 0vw;}
          span:nth-child(6) {border-bottom-left-radius: 0vw; border-top-left-radius: 0vw;}
          span:nth-child(8) {border-top-left-radius: 0vw; border-top-right-radius: 0vw;}
          span:nth-child(1), span:nth-child(3), span:nth-child(7), span:nth-child(9) {opacity: 0;}
          span:nth-child(4), span:nth-child(6) {width: calc($iconSize / 5 * 2 + 2px);}
          span:nth-child(2),span:nth-child(8) {height: calc($iconSize / 5 * 2 + 2px);}
        }
      }
    }
  }

</style>
