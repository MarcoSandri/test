<template>
  <div class="language-selector t-uppercase t-bold t-22">
    <div class="language-selector__current" @click="open = !open"> {{ currentLang }} </div>
    <ul class="language-selector__list" v-if="open">
      <li class="language-selector__item" v-for="(language, index) in languages" :key="index" @click="changeLang">{{ language.code }}</li>
    </ul>
  </div>
</template>

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
    methods: {
      changeLang() {
        this.currentLang = event.target.innerHTML;
        useRuntimeConfig().public.currentLang = event.target.innerHTML;
        this.open = !this.open
      }
    }
  }
</script>

<style scoped>
  .language-selector {

  }
</style>
