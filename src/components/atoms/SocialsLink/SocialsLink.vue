<template>
    <a :href="href" target="_blank" class="social">
      <div class="social_icon">
        <font-awesome-icon :icon="iconType" class="icon"/>
      </div>
      <p class="social_name">{{text}}</p>
    </a>
</template>

<script>
export default {
  name: "SocialsLink",
  props: {
    text: String,
    href: String,
    iconType: Array,
  }
}
</script>

<style scoped>
.social {
  text-decoration: none;
}
.icon {
  color: #ffffff;
  font-size: 25px;
}

.social:hover {
  opacity: .6;
}
.social_icon {
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  margin: 0 auto;
}



.social_name {
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  border-top:1px solid #fff;
}
</style>