<template>
  <div class="grid">
    <div></div>
    <div>
      <section>
        <div id="main">
          <router-link class="goingBack" to="activitys">Back</router-link>

          <h1>Your Order</h1>

          <h2>Parents Information:</h2>
          <hr />
          <p>Parent Name: {{ personInfo.FullName }}</p>
          <p>Email: {{ personInfo.Email }}</p>
          <p>Address: {{ personInfo.Address }}</p>
          <p>ZipCode: {{ personInfo.ZipCode }}</p>
          <p>City: {{ personInfo.City }}</p>
          <p>Country: {{ personInfo.Country }}</p>

          <hr />
          <h2>Your Childe Information:</h2>
          <p>FullName: {{ personInfo.ChildeFullName }}</p>
          <p>Email: {{ personInfo.ChildeEmail }}</p>
          <p>Gender: {{ personInfo.Gender }}</p>
          <p>Age: {{ personInfo.Age }}</p>
          <p>Additional Information: {{ personInfo.Message }}</p>
          <p>Activities: {{ personInfo.activities.toString() }}</p>

          <hr />
          <button @click="seYourOrder()">Send us you booking</button>
        </div>
      </section>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  name: "LoadData",
  props: ["personInfo"],
  data() {
    return {
      person: {
        FullName: this.personInfo.FullName,
        Email: this.personInfo.Email,
        Address: this.personInfo.Address,
        ZipCode: this.personInfo.ZipCode,
        City: this.personInfo.City,
        Country: this.personInfo.Country,
        ChildeFullName: this.personInfo.ChildeFullName,
        ChildeEmail: this.personInfo.ChildeEmail,
        Gender: this.personInfo.gender,
        Age: this.personInfo.Age,
        Message: this.personInfo.Message,
        activities: this.personInfo.activities,
      },
    };
  },
  methods: {
    seYourOrder() {
      this.$router.push("OrderSendt");
    },
  },
};
</script>
<style scoped>
.grid {
  margin-top: 10%;
}
h2,
h3 {
  margin-top: 8%;
}
table {
  margin-top: 5%;
}

</style>
