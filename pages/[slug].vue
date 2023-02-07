<template>
  <main class="about">
    <CommonHero v-show="data.data" :heroText="data.data.attributes.hero.HeroText" :heroCover="useStrapiMedia(data.data.attributes.hero.HeroCover.data.attributes.url)" :sideText="data.data.attributes.Title" />
  </main>
</template>

<script setup>
const media = useStrapiMedia();
const { locale, locales } = useI18n();
const route = useRoute();

console.log(route.params.slug);

const { findOne } = useStrapi4();

const { data, pending, refresh, error } = await useAsyncData("page", () =>
  findOne("pages", route.params.slug, {
    locale: locale.value,
    populate: ["hero", "hero.HeroCover", "seo"],
  })
);

console.log(data.value.data.attributes.Template);

// Definisco il layout
definePageMeta({
  layout: data.value.data.attributes.Template || "default",
});

// // Seo
// const seo = data.value.data.attributes.seo;
// useHead({
//   title: seo.metaTitle,
//   meta: [{ name: "description", content: seo.metaDescription }],
// });
</script>

<style lang="scss" scoped></style>
