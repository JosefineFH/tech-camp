<template>
  <div class="grid">
    <div></div>
    <div>
      <section>
        <div id="main">
          <router-link class="goingBack" to="register">Back</router-link>

          <h2>Edit your information</h2>
          <table>
            <tr>
              <td>
                <p>The childe that you are chosing the activity for:</p>
              </td>
              <td>
                <p>
                  <strong>{{ person.ChildeFullName }}</strong>
                </p>
              </td>
            </tr>
          </table>

          <h3>Choose an activite</h3>
          <table class="activity">
          <h3>E-Sport Teams</h3>
          <tr>
            <td>
              <p>League of Legends:</p>
              <label class="switch">
                <input
                  type="checkbox"
                  value="League of Legends"
                  v-model="person.activities"
                />
                <span class="slider round"></span>
              </label>
            </td>
            <td>
              <p>Fortnite Camp</p>
              <label class="switch">
                <input
                  type="checkbox"
                  name="activites"
                  value="Fortnite"
                  v-model="person.activities"
                />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
          
          <h3>Programmers Teams</h3>

          <tr>
            <td>
              <p>Programming</p>
              <label class="switch">
                <input
                  type="checkbox"
                  name="activites"
                  value="Programming"
                  v-model="person.activities"
                />
                <span class="slider round"></span>
              </label>
            </td>
            <td>
              <p>Raspberry Pi Team</p>
              <label class="switch">
                <input
                  type="checkbox"
                  name="activites"
                  value="RaspberryPi"
                  v-model="person.activities"
                />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
        </table>

          <div v-if="errors.length">
            <h3>Please select an activity</h3>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </div>
        </div>
        <button id="saveButton" @click="save()">SAVE</button>
        <button class="goToActivity" v-show="isEditing" @click="goToActivity()">
          SE YOUR ORDER
        </button>
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
      errors: [],
      isEditing: false,
      person: {
        FullName: this.personInfo.FullName,
        Email: this.personInfo.Email,
        Address: this.personInfo.Address,
        ZipCode: this.personInfo.ZipCode,
        City: this.personInfo.City,
        Country: this.personInfo.Country,
        ChildeFullName: this.personInfo.ChildeFullName,
        ChildeEmail: this.personInfo.ChildeEmail,
        Gender: this.personInfo.Gender,
        Age: this.personInfo.Age,
        Message: this.personInfo.Message,
        activities: [],
      },
    };
  },
  created: function() {
    this.person.FullName = this.personInfo.FullName;
  },

  methods: {
    save() {
      this.$emit("save", this.person);
      console.log(this.person);

      if (this.person.activities.length == 0) {
        this.errors.push("Select an activity");
      } else {
        this.isEditing = true;
      }
    },
    goToActivity() {
      this.$router.push("Order");
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
