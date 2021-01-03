<template>
  <div class="grid">
    <div></div>
    <div>
      <h1>Activities</h1>

      <h2 style="padding: 3% 0;">E-Sport Teams</h2>
      <section class="activitiesSection">
        <h3>League of Legends</h3>

        <p style="padding:20px 0;">Learn to play as a team on pc or consoll</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reprehenderit unde illum ipsam nobis! Perspiciatis fuga similique
          illo, a magnam consectetur blanditiis quo rerum, cumque praesentium
          ipsum ea distinctio dolor. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro reprehenderit unde illum ipsam nobis!
          Perspiciatis fuga similique illo, a magnam consectetur blanditiis quo
          rerum, cumque praesentium ipsum ea distinctio dolor.
        </p>
        <p>
          <span style="font-weight: bold;">Price: </span> 5000 <br /><br />
          <span style="font-weight: bold;">Where: </span> Sweden, Stockholm
        </p>
        <button @click="goToRegister()">Order</button>
      </section>

      <section class="activitiesSection">
        <h2>Fortnite Camp</h2>
        <img src="../assets/Fortnite.jpg" alt="" />
        <p style="padding:20px 0;">Learn to play as a team on pc or consoll</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reprehenderit unde illum ipsam nobis! Perspiciatis fuga similique
          illo, a magnam consectetur blanditiis quo rerum, cumque praesentium
          ipsum ea distinctio dolor. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro reprehenderit unde illum ipsam nobis!
          Perspiciatis fuga similique illo, a magnam consectetur blanditiis quo
          rerum, cumque praesentium ipsum ea distinctio dolor.
        </p>
        <p>
          <span style="font-weight: bold;">Price: </span> 5000 <br /><br />
          <span style="font-weight: bold;">Where: </span> Sweden, Stockholm
        </p>
        <button @click="goToRegister()">Order</button>
      </section>

      <section class="activitiesSection">
        <h3>PROGRAMMING</h3>
        <p style="padding:20px 0;">
          Learn to programme games or something else.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reprehenderit unde illum ipsam nobis! Perspiciatis fuga similique
          illo, a magnam consectetur blanditiis quo rerum, cumque praesentium
          ipsum ea distinctio dolor. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro reprehenderit unde illum ipsam nobis!
          Perspiciatis fuga similique illo, a magnam consectetur blanditiis quo
          rerum, cumque praesentium ipsum ea distinctio dolor.
        </p>
        <p>
          <span style="font-weight: bold;">Price: </span> 5000 <br /><br />
          <span style="font-weight: bold;">Where: </span> Sweden, Stockholm
        </p>
        <button @click="goToRegister()">Order</button>
      </section>

      <section class="activitiesSection">
        <h3>RASPBERRY PI</h3>
        <p style="padding:20px 0;">
          Learn to programme games or something else.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reprehenderit unde illum ipsam nobis! Perspiciatis fuga similique
          illo, a magnam consectetur blanditiis quo rerum, cumque praesentium
          ipsum ea distinctio dolor. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro reprehenderit unde illum ipsam nobis!
          Perspiciatis fuga similique illo, a magnam consectetur blanditiis quo
          rerum, cumque praesentium ipsum ea distinctio dolor.
        </p>
        <p>
          <span style="font-weight: bold;">Price: </span> 5000 <br /><br />
          <span style="font-weight: bold;">Where: </span> Sweden, Stockholm
        </p>
        <button @click="goToRegister()">Order</button>
      </section>
    </div>
    <div></div>
  </div>
</template>
<script>

export default {

  methods: {
    async goToRegister() {
      this.$router.push("Register");
    }
  }
};
</script>
<style>
@import "../assets/css/grid.css";

.activitiesSection {
  margin: 3% 0;
}

.activitiesSection > button {
  margin: 5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.activitiesSection > img {
  width: 100%;
  margin: 3% 0;
}
</style>
