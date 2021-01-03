<template>
  <div id="app">
    <header>
      <NavBar></NavBar>
    </header>
    <router-view :personInfo="person" @save="save" />
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    NavBar: NavBar,
    Footer: Footer,
  },
  data: function() {
    return {
      person: {
        FullName: "",
        Email: "",
        Address: "",
        ZipCode: "",
        City: "",
        Country: "",
        ChildeFullName: "",
        ChildeEmail: "",
        Gender: "",
        Age: "",
        Message: "",
        activities: ""
      },
    };
  },
  methods: {
    save: function(fromComponent) {
      this.person.FullName = fromComponent.FullName;
      this.person.Email = fromComponent.Email;
      this.person.Address = fromComponent.Address;
      this.person.ZipCode = fromComponent.ZipCode;
      this.person.Country = fromComponent.Country;
      this.person.City = fromComponent.City;
      this.person.ChildeFullName = fromComponent.ChildeFullName;
      this.person.ChildeEmail = fromComponent.ChildeEmail;
      this.person.Gender = fromComponent.Gender;
      this.person.Age = fromComponent.Age;
      this.person.Message = fromComponent.Message;
      this.person.activities = fromComponent.activities;
    },
  },
};
</script>
<style>
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
