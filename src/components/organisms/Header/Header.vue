<template>
  <header class="header">
    <div class="header_container">
      <Logo class="logo"/>
      <nav class="nav_list">
        <a v-for="url in urls" :href="'#'+ url.id" class="anchor">{{url.name}}</a>
      </nav>
    </div>
  </header>
</template>

<script>

import Logo from "@/components/molecules/Logo/Logo";

export default {
  name: "Header",
  components: {Logo},
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

  @media screen and (max-width: 1024px) {
    .logo {
      width: 150px;
      display: flex;
    }
  }
  @media screen and (max-width: 768px) {
    .header_container {
      flex-direction: column;
      align-items: center;
    }
    .logo {
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
  }
  @media screen and (max-width: 568px) {
    .nav_list {
      width: 100%;
    }
    .logo {
      width: 120px;
    }
    .anchor {
      font-size: 12px;
    }
  }

</style>