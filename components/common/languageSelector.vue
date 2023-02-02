<template>
  <div class="language-selector t-uppercase t-bold t-22">
    <div class="language-selector__current" @click="open = !open"> {{ $i18n.locale }} </div>
    <ul class="language-selector__list" v-if="open">

      <li class="language-selector__item" v-for="locale in availableLocales" :key="locale" @click="this.open = !this.open">

        <NuxtLink :to="switchLocalePath(locale)" class="lang-selector__item">
          {{ locale }}
        </NuxtLink>

      </li>
    </ul>
  </div>
</template>


<script setup>
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
  })
</script>

<script>
  export default {
    data() {
      return {
        open: false
      }
    },
  }
</script>

<style scoped>
  .language-selector {

  }
</style>
