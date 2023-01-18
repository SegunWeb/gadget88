<template>
  <div class="article">
    <div>
      <div class="logo">
        <Image :pic_alt="img.pic_alt" :pic_src="img.pic_url"/>
      </div>
        <p class="title">
          {{content.title}}
        </p>
        <p class="description">
          {{content.description}}
        </p>
    </div>
    <div>
      <LinkBtn :href="content.link" class="link">
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

  data() {
    return {
      img: {
        pic_alt: 'logo',
        pic_url: Demo
      },
      content: {
        link: 'https://www.harpersbazaar.rs/public/moda/modna-fotografija/anastasiia-bondarchuk-party-time-digital-cover',
        title: 'Anastasiia Bondarchuk: Party time',
        description: 'Jednu od decembarskih digitalnih naslovnica krasi devojka čija manekenksa karijera joj je omogućila da radi sa najvećim svetskim brendovima ali ju je plasirala i na bioskopsko platno. Upoznajte večičanstvenu Anastasiiu.',
      }

    }
  }
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