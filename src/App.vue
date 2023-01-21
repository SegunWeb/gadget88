<template>

  <Header/>
  <Layout>
    <Home/>
  </Layout>
  <Footer/>



</template>

<script>

import Home from "@/scenes/Home/Home";

import Layout from "@/components/templates/Layout/Layout";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";

export default {

  components: {Footer, Header, Layout, Home },

  data() {
    return {}
  },
  methods: {
  }
}
</script>



<style>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   position: relative;
 }
 .g_wrapper {
   padding: 80px 20px;
 }
 .content_wrapper {
   max-width: 1920px;
   margin: 0 auto;
 }
 .g_title {
   margin: 0 auto 40px auto;
   max-width: 400px;
   width: 100%;
   color: #000000 !important;
   display: block;
   text-align: center;
 }
 @media screen and (max-width: 1024px) {
   .g_wrapper {
     padding: 50px 20px;
   }
 }

</style>