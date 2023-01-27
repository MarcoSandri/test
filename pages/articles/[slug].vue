<template>
  <main>
    <h1 class="t-120 font-1">{{ title }}</h1>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title : null
    }
  },
  async mounted() {
    const route = useRoute()
    const pageEndpoint = useRuntimeConfig().public.cmsUrl;

    fetch(`${pageEndpoint}/api/posts?filters[slug][$eq]=${route.params.slug}&populate=*`)
    .then((response) => response.json())
    .then((data) => {
      this.title = data.data[0].attributes.Title
    })
    .catch((error) => {});
  }
}

</script>


<style lang="scss" scoped>

  main {
    background-color: $black;
    padding-top: rvh(220);

    h1 {
      color: $white;
    }
  }

</style>
