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
      slug: 'projects'
    }
  },
  async mounted() {
    const pageEndpoint = useRuntimeConfig().public.cmsUrl;

    fetch(`${pageEndpoint}/api/pages?filters[Slug][$eq]=${this.slug}&populate=*&populate=hero.HeroCover`)
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
