<template>
  <section class="home-hero">
    <div class="home-hero__content container">
      <p class="t-right t-134">
        Taking your brands further through visual <span class="font-2 t-uppercase">experience</span>
      </p>
    </div>
    <div class="home-hero__marquee"></div>
  </section>
</template>

<script>

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

        span {
          color: $secondary;
        }
      }
    }

    &__marquee {
      flex-grow: 1;
      background-color: $black;
    }
  }
</style>