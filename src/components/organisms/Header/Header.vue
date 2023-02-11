<template>
  <header class="header">
    <div class="header_container content_wrapper">
      <Logo class="logo"/>

      <nav class="nav_list">
        <a v-for="url in urls" :href="'#'+ url.id" class="anchor">{{url.name}}</a>
      </nav>

      <div class="mobile_menu" >
        <MobileMenu />
      </div>

    </div>
  </header>
</template>

<script>

import Logo from "@/components/molecules/Logo/Logo";
import MobileMenu from "@/components/molecules/MobileMenu/MobileMenu";

export default {
  name: "Header",
  components: {MobileMenu, Logo},
  data() {
    return {
      urls: [
        {name: 'About Us', id: 'about'},
        {name: 'About Gadget', id: 'gadget'},
        {name: 'Media', id: 'media'},
        {name: 'Contact Us', id: 'contact'},
      ]
    }
  }
}
</script>

<style scoped>
  .header {
    background-color: rgba(0, 0, 0, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 15px 0;
    z-index: 999;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    left: 0;
    top: 0;
  }
  .header_container {
    padding: 0 25px;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
  .nav_list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .anchor {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    margin-left: 35px;
    padding: 5px 0;
    text-decoration: none;
  }
  .anchor:hover {
    opacity: .7;
  }
  .mobile_menu {
    display: none;

  }

  @media screen and (max-width: 1024px) {
    .logo {
      width: 250px;
      display: flex;
    }
  }
  @media screen and (max-width: 768px) {
    .header_container {
      align-items: flex-start;
      flex-direction: row-reverse;
    }
    .logo {
      padding-top: 7px;
      width: 200px;
    }
    .nav_list {
      margin-top: 20px;
      justify-content: space-between;
      width: 80%;
    }
    .anchor {
      margin-left: 0;
    }
    .nav_list {
      display: none;
    }
    .mobile_menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

    }

  }


</style>