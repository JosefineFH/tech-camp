<template>
  <div>
    <section class="bloggContent">
      <div></div>
      <div>
        <h1>Welcome To Tech Camp</h1>
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <p class="posts">
          We teach a growth mindset. That failure is an opportunity to grow.
          That we can learn to do anything we want, different challenges help
          them to grow, that effort and attitude determine their abilities, end
          that feedback is constructive end the best thing is to try out new
          things. So, they will have the chance these weeks to try other
          activities than just the one they are here for.
        </p>
        <p class="posts">
          See out activities
          <a style="cursor:pointer" @click="goToOutActivitys()">activities.</a>
          <button @click="goPage1()">Register</button>
        </p>

        <h1>WE'RE ALL GAMERS</h1>
      </div>
      <div></div>
    </section>
    <section>
      <h1
        style="background-color:var(--textColorHover); color: black; padding: 2rem;"
      >
        Blog
      </h1>
      <div class="bloggContent">
        <div></div>
        <div class="blogpost">
          <!-- Første blogg innlegg -->
          <div class="posts">
            <h2>See our campus and the city of Stockholm</h2>
            <img src="../assets/pexels-photo-1529040.jpeg" alt="" />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet, enim eu pellentesque dignissim, enim ex interdum ipsum, vel luctus felis magna sit amet lorem. Sed mi lacus, finibus sed auctor non, tincidunt non sem. Vivamus nec augue massa. Quisque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tempor dignissim justo vel convallis. Proin pharetra purus a
              mattis varius. Vivamus egestas sit amet neque id dictum. Integer
              ut eros felis. Proin fermentum pretium lectus non vestibulum.
              Etiam interdum pellentesque aliquet. Etiam eget aliquet sapien.
              Fusce et quam a tortor malesuada pulvinar. In mollis id urna at
              elementum. Maecenas eleifend in ipsum non tempor. Phasellus ut
              hendrerit ante. Vivamus congue semper massa, sed congue tortor
              interdum quis. Duis molestie urna nisi, sed vestibulum lectus
              tempor ac. Suspendisse congue nulla a rutrum faucibus. Curabitur
              in nisl elementum, tincidunt nulla in, volutpat orci. Pellentesque
              vitae finibus velit, id rhoncus sem.
            </p>
            <button @click="goPage1()">Book Now</button>
          </div>

          <!-- Andre blogg innlegg -->
          <div class="posts">
            <h2>Se the city at night</h2>
            <img src="../assets/pexels-photo-1969910.jpeg" alt="" />
            <p>
              The easiest way to get around the city is so clearly on a bike.
              Since our campus is located in the heart of stocholm it is very
              easy to get around.
              <br />
              <br />
              Maecenas commodo iaculis sapien ut pretium. Sed et erat viverra libero mollis tempor eu non tellus. Phasellus at est vitae arcu sollicitudin tincidunt. Etiam cursus nulla eu rhoncus ornare. Praesent nulla metus, varius sit amet ex at, dictum porta nisi. Donec commodo tincidunt justo, euismod tempus nisi elementum quis. Nulla nulla est, feugiat sed semper ac, ullamcorper ut nunc. Maecenas aliquam eros felis, non vestibulum tellus gravida eu. Donec in vehicula erat. Curabitur nibh ligula, tristique blandit lorem ut, mollis eleifend lacus. Sed a mauris nisl. Fusce quis mauris urna. Donec ante ligula, faucibus vitae bibendum sed, finibus sit amet eros. Maecenas eget posuere nisi. Sed sit amet maximus lectus. Nullam tristique aliquam consectetur.
            </p>
            <button @click="goPage1()">Book Now</button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    async goPage1() {
      this.$router.push("Register");
    },
    async goToOutActivitys() {
      this.$router.push("OurActivitys");
    },
  },
};
</script>
<style>
@import "../assets/css/main.css";
</style>
<style scoped>
h2 {
  text-align: center;
  color: var(--textColorHover);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 2rem;
  font-family: "XoloniumRegular";
  padding-top: 4%;
}
.info {
  padding: 10% 0;
}

.info a {
  text-decoration: underline;
}
.info a:hover {
  text-decoration: none;
}

img {
  margin-top: 5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.bloggContent {
  margin-top: 5%;
  margin-bottom: 5%;
  display: grid;
  grid-template-columns: 10% 80% 10%;
}

.posts {
  margin: 5% 0;
  line-height: 1.5;
}

.posts > button {
  margin: 5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.posts > p {
  margin: 5% 0;
}

.posts > img {
  width: 100%;
}

@media only screen and (min-width: 900px) {
  .bloggContent {
    grid-template-columns: 25% 50% 25%;
  }

  img {
    width: 100%;
  }

  .bloggContent > h1 {
    padding-top: 3%;
    font-size: 5rem;
  }
}
</style>
