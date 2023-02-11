<template>
    <Button class="button" @click="toggleMenu">
      <font-awesome-icon icon="bars" class="bars" />
    </Button>

    <ul class="menu" v-show="menuVisible">
      <li @click="toggleMenu" class="link" v-for="url in urls" key="url.id">
        <a  :href="'#'+ url.id" class="anchor">{{url.name}}</a>
      </li>
    </ul>
</template>

<script>
import Button from "@/components/atoms/Button/Button";

export default {
  name: "MobileMenu",
  components: {Button},

  data() {
    return {
      urls: [
        {name: 'About Us', id: 'about'},
        {name: 'About Gadget', id: 'gadget'},
        {name: 'Media', id: 'media'},
        {name: 'Contact Us', id: 'contact'},
      ],
      menuVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    }
  }

}
</script>

<style scoped>

.menu {
  margin-top: 20px;
}

.link {
  margin-bottom: 12px;
}
.anchor {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding: 5px 0;
  text-decoration: none;
}
.anchor:hover {
  opacity: .7;
}
.button {
  padding: 5px;
  display: block;
  background: transparent;
  border: none;
  outline: none;
}
.bars {
  color: #ffffff;
  font-size: 25px;
}
</style>