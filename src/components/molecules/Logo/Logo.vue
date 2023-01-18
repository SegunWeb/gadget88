<template>
  <div>
    <Image :src="logo" alt="logo" />
  </div>

</template>

<script>

import logo from '@/assest/logo-img.svg'
import Image from "@/components/atoms/Image/Image";

export default {
  name: "Logo",
  components: {Image},
  data() {
    return {
      logo
    }
  }
}
</script>

<style scoped>

</style>