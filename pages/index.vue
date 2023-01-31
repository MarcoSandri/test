<template>
  <main>
    <CommonHero v-if="heroText" :heroText="heroText" :heroCover="heroCover" :sideText="email"/>
  </main>
</template>

<script setup>

  useHead({
    title: 'Seo title',
    meta: [{
      name: 'description',
      content: 'Seo description'
    }]
  })

</script>

<script>
export default {
  data() {
    return {
      heroText: null,
      heroCover: null,
      email: null,
      template: 'home',
      seo: null
    }
  },
  async mounted() {
    const pageEndpoint = useRuntimeConfig().public.cmsUrl;
    const currentLanguage = useRuntimeConfig().public.currentLang;

    fetch(`${pageEndpoint}/api/pages?filters[Template][$eq]=${this.template}&populate=*&populate=hero.HeroCover&locale=${currentLanguage}`)
    .then((response) => response.json())
    .then((data) => {
      this.heroText = data.data[0].attributes.hero.HeroText;
      this.seo = data.data[0].attributes.seo;
      this.heroCover = pageEndpoint + data.data[0].attributes.hero.HeroCover.data.attributes.url;
    })
    .catch((error) => {});

    fetch(`${pageEndpoint}/api/contact`)
    .then((response) => response.json())
    .then((data) => {
      this.email = data.data.attributes.Email;

    })
    .catch((error) => { });
  }
}
</script>

<style lang="scss" scoped>
</style>
