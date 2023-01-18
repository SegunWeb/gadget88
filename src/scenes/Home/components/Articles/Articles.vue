<template>
  <div id="media" class="g_wrapper">
    <HeroTitle class="g_title">Media</HeroTitle>

    <div class="items">
      <ArticleBox/>
      <ArticleBox/>
      <ArticleBox/>
      <ArticleBox/>
      <ArticleBox/>
      <ArticleBox/>
    </div>
  </div>
</template>

<script>
import ArticleBox from "@/components/molecules/ArticleBox/ArticleBox";
import HeroTitle from "@/components/molecules/HeroTitle/HeroTitle";

export default {
  name: "Articles",
  components: {ArticleBox, HeroTitle}
}
</script>

<style scoped>
  .items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  .items > div {
    margin: 0 auto 10px auto;
  }


</style>