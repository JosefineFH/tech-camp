<template>
  <div class="grid">
    <div></div>
    <div>
      <h1 style="text-align: start; margin-top:30px;">
        Your order is sendt to us. You will resive a order... end we will
        contact you in 2 workdays
      </h1>
      <h3 style="text-align: start; margin-top:30px;">
        We will send Information to you and some question to your child so we
        can be best preperde to ther arivale
      </h3>
      <button @click="goHome()">Home</button>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
h1,
h3 {
  margin-top: 30px;
  text-align: start;
}

button {
  margin: 5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
