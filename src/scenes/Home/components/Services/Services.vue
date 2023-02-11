<template>
  <div class="box g_wrapper">
    <HeroTitle class="g_title">Service</HeroTitle>

    <div class="content">
        <ServiceBox
            v-for="product in products"
            :key="product.id"
        >
          {{product.txt}}
        </ServiceBox>

    </div>
  </div>
</template>

<script>
import ServiceBox from "@/components/molecules/ServiceBox/ServiceBox";
import HeroTitle from "@/components/molecules/HeroTitle/HeroTitle";
export default {
  name: "Services",
  components: {HeroTitle, ServiceBox},

  data() {
    return {
      products: [
        {id: 1, txt: 'Product 1'},
        {id: 2, txt: 'Product 2'},
        {id: 3, txt: 'Product 3'},
      ]
    }
  }
}
</script>

<style scoped>

.box {
  background-color: #f1f1f1;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
.content > div {
  width: 32%;
}

@media screen and (max-width: 1024px) {
  .content {
    flex-wrap: wrap;
  }
  .content > div {
    width: 80%;
    margin: 0 auto 20px auto;
  }
}
@media screen and (max-width: 540px) {
  .content > div {
    width: 100%;
  }
}

</style>