<template>
  <div class="menu">
    <div class="menu__wrapper">
      <img src="/svg/logo-white-icon.svg" alt="logo">
    </div>
  </div>
</template>

<script>

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
      align-content: center;
      height: 100%;
      width: 100%;

      img {
        width: rvw(200)
      }
    }
  }
</style>
