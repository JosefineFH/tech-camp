<template>
  <div class="grid">
    <div></div>
    <div>
      <h1>Register</h1>
      <p>Enter your information here and your child's information.</p>
      <div class="parrentInfo">
        <h2>Parents Information:</h2>

        <table>
          <tr>
            <td>
              <label>Full Name:</label>
            </td>
            <td>
              <input type="text" v-model="person.FullName" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="Email">Email:</label>
            </td>
            <td>
              <input type="text" v-model="person.Email" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Adress:</label>
            </td>
            <td>
              <input type="text" v-model="person.Address" />
            </td>
          </tr>
          <tr>
            <td>
              <label>ZipCode:</label>
            </td>
            <td>
              <input type="text" v-model="person.ZipCode" />
            </td>
          </tr>
          <tr>
            <td>
              <label>City:</label>
            </td>
            <td>
              <input type="text" v-model="person.City" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Country:</label>
            </td>
            <td>
              <input type="text" v-model="person.Country" />
            </td>
          </tr>
        </table>
      </div>
      <div class="Childesinfo">
        <h2>Your Childe Information:</h2>
        <table>
          <tr>
            <td>
              <label>FullName:</label>
            </td>
            <td>
              <input type="text" v-model="person.ChildeFullName" required />
            </td>
          </tr>

          <tr>
            <td>
              <label>Email:</label>
            </td>
            <td>
              <input type="text" v-model="person.ChildeEmail" required />
            </td>
          </tr>

          <tr>
            <td>
              <label>Gender:</label>
            </td>
            <td>
              <select v-model="person.Gender">
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label>Age:</label>
            </td>
            <td>
              <div class="age-select" style="width:200px;">
                <select v-model="person.Age">
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                </select>
              </div>
            </td>
          </tr>
        </table>

        <p>
          If ther is any other information we should know please inform us about
          diseases or allergies that we need to know:
        </p>
        <textarea
          v-model="person.Message"
          name="extraInfo"
          class="extraInfo"
        ></textarea>
      </div>
      <br />

      <div v-if="errors.length">
        <h3>Please correct the following error(s):</h3>
        <div v-for="error in errors" :key="error">
          <p>
            {{ error }}
          </p>
        </div>
      </div>
      <button @click="save()">SAVE</button>
      <button v-show="isEditing" @click="goToOrderActivity()">
        SELECT ACTIVITY
      </button>
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
        FullName: '',
        Email: '',
        Address: '',
        ZipCode: '',
        City: '',
        Country: '',
        ChildeFullName: '',
        ChildeEmail: '',
        Gender: '',
        Age: '',
        Message: '',
        activities: []

      },
    };
  },
  created: function() {
    this.person.FullName = this.personInfo.FullName;
    this.person.Email = this.personInfo.Email;
    this.person.Address = this.personInfo.Address;
    this.person.ZipCode = this.personInfo.ZipCode;
    this.person.City = this.personInfo.City;
    this.person.Country = this.personInfo.Country;
    this.person.ChildeFullName = this.personInfo.ChildeFullName;
    this.person.ChildeEmail = this.personInfo.ChildeEmail;
    this.person.Gender = this.personInfo.Gender;
    this.person.Age = this.personInfo.Age;
    this.person.Message = this.personInfo.Message;
  },
  methods: {
    save() {
      if (this.person.FullName) {
        this.$emit("save", this.person);
        this.isEditing = true;
      }

      this.errors = [];
      if (!this.person.FullName) {
        this.errors.push("- Name is required. ");
      }
      if (!this.person.Email) {
        this.errors.push("- Email is required. ");
      }
      if (!this.person.ChildeFullName) {
        this.errors.push("- Your childes full name is required. ");
      }
      if (!this.person.ChildeEmail) {
        this.errors.push("- Your childes email is required. ");
      }
      if (!this.person.Gender) {
        this.errors.push("- Your childes gender is required. ");
      }
      if (!this.person.Age) {
        this.errors.push("-Your childes age is required. ");
      }
    },
    async goToOrderActivity() {
      this.$router.push("activitys");
    },
  },
};
</script>
<style>
@import "../assets/css/grid.css";
.info {
  margin: 1% 0;
}
.parrentInfo {
  margin: 3% 0;
}
</style>
