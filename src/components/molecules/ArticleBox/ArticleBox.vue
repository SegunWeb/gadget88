<template>
  <div class="article">
    <div>
      <div class="logo">
        <Image :pic_alt="title" :pic_src="logo"/>
      </div>
        <p class="title">
          {{title}}
        </p>
        <p class="description">
          {{description}}
        </p>
    </div>
    <div>
      <LinkBtn :href="link" class="link">
        More
      </LinkBtn>
    </div>


  </div>
</template>

<script>
import Image from "@/components/atoms/Image/Image";
import Demo from "@/assest/images/logo-media.png";
import LinkBtn from "@/components/atoms/LinkBtn/LinkBtn";

export default {
  name: "ArticleBox",
  components: {LinkBtn, Image},
  props: {
    title: String,
    description: String,
    logo: String,
    link: String,
  },
}
</script>

<style scoped>
.article {
  border: 1px solid #000;
  padding: 20px;
  max-width: 333px;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .4s;
}

.article:hover {
  transform: scale(1.02);
  transition: .4s;
}

.logo {
  display: block;
  width: 150px;
  margin: 0 auto;
  max-height: 56px;
  height: 100%;
}
.title {
  margin: 20px auto 10px auto;
  font-size: 16px;
  font-weight: bold;
}
.description {
  font-size: 14px;
}
.link {
  margin: 15px auto 0 auto;
}
</style>