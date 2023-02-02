<template>
  <main class="about">
    <CommonHero v-show="data.data" :heroText="data.data[0].attributes.hero.HeroText" :heroCover="useStrapiMedia(data.data[0].attributes.hero.HeroCover.data.attributes.url)" :sideText="data.data[0].attributes.Title"/>
  </main>
</template>

<script setup>
  const url = useStrapiUrl()

  const { locale, locales } = useI18n()
  const { find } = useStrapi()
  const { data, pending, refresh, error } = await useAsyncData(
    'pages',
    () => find('pages', {
      locale: locale.value,
      populate: ['hero', 'hero.HeroCover', 'seo'],
      filters: {
        'Template' : 'shop',
      }
    })
  )

  //Seo
  const seo = data.value.data[0].attributes.seo
  useHead({
    title: seo.metaTitle,
    meta: [
      { name: 'description', content: seo.metaDescription }
    ],
  })

  useServerSeoMeta({
    ogTitle: () => seo.metaTitle,
    description: () => seo.metaDescription,
  })
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
