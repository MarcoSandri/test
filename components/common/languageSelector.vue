<template>
  <div class="language-selector t-uppercase t-bold t-22">
    <div class="language-selector__current" @click="open = !open"> {{ $i18n.locale }} </div>
    <ul class="language-selector__list" v-if="open">

      <li class="language-selector__item" v-for="locale in $i18n.locales" :key="locale" @click="this.open = !this.open">
        <NuxtLink
        class="lang-selector__item"
        :class="{'active': locale === $i18n.locale}"
        :to="switchLocalePath(locale)"
        >
          {{ locale }}
       </NuxtLink>
      </li>
    </ul>
  </div>
</template>


<script setup>



</script>

<script>
  export default {
    data() {
      return {
        languages: null,
        currentLang: null,
        open: false
      }
    },
    async mounted() {
      const pageEndpoint = useRuntimeConfig().public.cmsUrl;
      this.currentLang = useRuntimeConfig().public.currentLang;

      fetch(`${pageEndpoint}/api/i18n/locales`)
      .then((response) => response.json())
      .then((data) => {
        this.languages = data
      })
      .catch((error) => {});

    },
  }
</script>

<style scoped>
  .language-selector {

  }
</style>
