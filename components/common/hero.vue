<template>
  <section class="hero">
    <div class="hero__content container">
      <p class="t-right t-120" v-html="heroText"></p>

      <div class="hero__bottom">

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroText: 'Something about us'
    }
  }
}

</script>

<style lang="scss" scoped>
  .hero {
    background: $primary;
    padding-top: rvh(206);

    &__content {
      background-color: $primary;
      padding-right: rvw(84);
      font-family: $font-1;

      p {
        color: $white;
      }
    }
  }
</style>
