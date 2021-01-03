<template>
  <nav class="nav__bar">
  <h2 class="logo"> TECH CAMP</h2>
    <img
      class="menuIcon"
      src="../assets/menu.png"
      alt="Menu"
      v-on:click="available = !available"
    />

    <div v-bind:class="compClasses">
      <div class="container">
        <ul>
          <li>
            <router-link class="link" to="/">
              <span>HOME</span>
            </router-link>
          </li>
          <li>
          <router-link class="NavLink" to="/OurActivitys">OUR ACTIVITY</router-link>

          </li>
        <li>
          <router-link class="NavLink" to="/Register">REGISTER</router-link>
        </li>


        </ul>
      </div>
    </div>

  </nav>
</template>
<script>
export default {
  data () {
    return {
      available: false
    }
  },

  computed: {
    compClasses: function () {
      return {
        available: this.available
      }
    }
  },

  methods: {
    backToMain () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
@import "../assets/navbar.css";
</style>
