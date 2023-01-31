<template>
  <main class="about">
    <CommonHero v-if="heroText" :heroText="heroText" :heroCover="heroCover" :sideText="title"/>
  </main>
</template>

<script>
export default {
  data() {
    return {
      heroText: null,
      heroCover: null,
      title: null,
      template: 'shop'
    }
  },
  async mounted() {
    const pageEndpoint = useRuntimeConfig().public.cmsUrl;
    const currentLanguage = useRuntimeConfig().public.currentLang;

    fetch(`${pageEndpoint}/api/pages?filters[Template][$eq]=${this.template}&populate=*&populate=hero.HeroCover&locale=${currentLanguage}`)
    .then((response) => response.json())
    .then((data) => {
      this.heroText = data.data[0].attributes.hero.HeroText;
      this.heroCover = pageEndpoint + data.data[0].attributes.hero.HeroCover.data.attributes.url;
      this.title = data.data[0].attributes.Title
    })
    .catch((error) => {});
  }
}
</script>

<style lang="scss" scoped>
</style>
