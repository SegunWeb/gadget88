<template>
  <div class="footer">
    <div class="socials">
      <SocialsLink :text="el.name" :href="el.link" :icon-type="el.icon" v-for="el in socials" key="el.id"/>
    </div>
  </div>
</template>

<script>
import SocialsLink from "@/components/atoms/SocialsLink/SocialsLink";
export default {
  name: "Footer",
  components: {SocialsLink},

  data() {
    return {
      socials: [
        {id: 1, name: 'youtube', link: 'https://youtube.com/@gadget_88', icon: ['fab', 'youtube']},
        {id: 2, name: 'instagram', link: 'https://instagram.com/gadget88_official_?igshid=YmMyMTA2M2Y=', icon: ['fab', 'instagram']},
        {id: 3, name: 'twitter', link: 'https://twitter.com/Gadget_88_?t=92EfEaa0D3QfCvEV2aK-eQ&s=35', icon: ['fab', 'twitter']},
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  background-color: rgba(0, 0, 0, 1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px 0;
  width: 100%;
  margin: 0 auto;
}
.socials {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin: 0 auto;
}

</style>