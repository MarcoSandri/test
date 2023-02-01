<template>
  <main class="about">
    <CommonHero v-show="data.data" :heroText="data.data[0].attributes.hero.HeroText" :heroCover="pageEndpoint + data.data[0].attributes.hero.HeroCover.data.attributes.url" :sideText="data.data[0].attributes.Title"/>
  </main>
</template>

<script setup>

  const pageEndpoint = useRuntimeConfig().public.cmsUrl;
  const currentLanguage = useRuntimeConfig().public.currentLang;

  const route = useRoute();

  const { find } = useStrapi()
  const { data, pending, refresh, error } = await useAsyncData(
    'pages',
    () => find('pages', {
      locale: currentLanguage,
      populate: ['hero', 'hero.HeroCover'],
      filters: {
        'Template' : 'about',
      }
    })
  )
    console.log(route.name)
    console.log(route.fullPath)
    console.log(route.hash)
    console.log(route.matched)
    console.log(route.meta)
    console.log(route.path)
    console.log(route.redirectedFrom)
</script>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
</style>
