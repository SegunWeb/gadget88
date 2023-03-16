<template>
  <div id="media" class="g_wrapper">
    <HeroTitle class="g_title">Media</HeroTitle>

    <div class="items">
      <ArticleBox :title="el.title" :description="el.desc" :logo="el.logo" :link="el.link" v-for="el in articleData"/>
    
    </div>
  </div>
</template>

<script>
import ArticleBox from "@/components/molecules/ArticleBox/ArticleBox";
import HeroTitle from "@/components/molecules/HeroTitle/HeroTitle";

export default {
  name: "Articles",
  components: {ArticleBox, HeroTitle},

  data() {
    return {
      articleData: [
        {
          title: 'Gadget 88. Innovative Product of 2023', 
          desc: 'Do you know what vibrations are? Vibrations are the energy with which we interact with the world.', 
          logo: 'https://super-news.info/wp-content/uploads/2021/02/super-newslogo-1.png', 
          link: 'https://fostylen.com/en/technologies/gadget-88-game-changer-2023/'
        },
        {
          title: 'Gadget 88. Innovative Product of 2023', 
          desc: 'Do you know what vibrations are? Vibrations are the energy with which we interact with the world.', 
          logo: 'https://super-news.info/wp-content/uploads/2021/02/super-newslogo-1.png', 
          link: 'https://super-news.info/blog/gadget-88-innovative-product-of-2023/'
        },
        {
          title: 'Businessman from Ukraine invents unique Gadget 88', 
          desc: 'At the beginning of 2023, hype began on the network around a new device that determines the compatibility between people by reading their vibrations.', 
          logo: 'https://www.nstec.com/wp-content/uploads/2021/10/cropped-logo.png', 
          link: 'https://www.nstec.com/businessman-from-ukraine-invents-unique-gadget-88/'
        },
        {
          title: 'Gadget 88 Will Help You Create Your Perfect Surroundings and Happy Life', 
          desc: 'At the beginning of 2023, new information appeared on the Internet — about a certain device that determines the compatibility between partners by reading human vibrations.', 
          logo: 'https://wpcontent.techpout.com/techpout/wp-content/uploads/2020/07/03110325/Logo.png', 
          link: 'https://www.techpout.com/gadget-88-will-help-you-create-your-perfect-surroundings-and-happy-life/'
        },
        {
          title: 'Gadget 88 Graces the Cover of the New Year’s Issue of Harper’s Bazaar', 
          desc: 'Determining compatibility with Gadget 88 The fact is that Gadget 88 helps to determine the compatibility between people by reading their vibrations. ', 
          logo: 'https://www.digieffects.com/wp-content/uploads/2020/08/igi-Effects-e1597184678611.png', 
          link: 'https://www.digieffects.com/gadget-88-graces-the-cover-of-the-new-years-issue-of-harpers-bazaar/'
        },
        {
          title: 'Gadget 88 — Innovative Product of Ukrainian Businessman Sargis Sargsyan', 
          desc: 'The New Year’s issue of Harper’s Bazar launched the Gadget 88 fame. In the hands of the Ukrainian model Anastasiia Bondarchuk, dressed in luxury brands and jewelry from BVLGARI...', 
          logo: 'https://www.systranbox.com/wp-content/uploads/2021/03/Screenshot_49-removebg-preview.png', 
          link: 'https://www.systranbox.com/gadget-88-innovative-product-of-ukrainian-businessman-sargis-sargsyan/'
        },
      ]
    }
  }
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