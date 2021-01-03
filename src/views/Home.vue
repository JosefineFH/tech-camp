<template>
  <div>
    <section class="bloggContent">
      <div></div>
      <div>
        <h1>Welcome To Gamer Camp's</h1>
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <p class="posts">
          We teach them a growth mindset. That failure is an opportunity to
          grow. That we can learn to do anything we want, different challenges
          help them to grow, that effort and attitude determine their abilities,
          end that feedback is constructive end the best thing is to try out new
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore veritatis voluptate voluptas sunt accusantium, autem
              eius assumenda fugit perspiciatis? Laudantium dicta incidunt quia
              tempora nostrum? Sunt quas laboriosam ad quaerat similique error
              quidem, adipisci sit fugiat, eius, dolores eveniet nihil minus
              commodi dicta animi explicabo ipsum. Nesciunt iusto autem libero
              accusamus tempora eveniet vel velit? Molestias maiores iusto
              dolore sapiente non animi odit debitis quisquam laborum esse, ea
              id ut quis molestiae beatae sint accusantium sed nostrum. A
              officiis eius pariatur accusantium. Iure vitae et nulla,
              voluptatum dolores vel beatae quasi! Vero, dolorem culpa dolorum
              quis reprehenderit nulla aperiam. Debitis.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              commodi excepturi magni unde pariatur alias nemo officia sed
              consequuntur itaque ipsam reprehenderit maxime corrupti. Nulla a
              necessitatibus eligendi, inventore tempore vero, id aperiam eum
              corrupti voluptate maiores, voluptatem neque asperiores molestiae!
              Ipsa voluptatum doloribus nisi quam tempore optio molestiae illo!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              placeat id nulla eveniet doloremque aliquam soluta, laboriosam qui
              officia repellendus nam aliquid asperiores vel alias, odit, optio
              excepturi? Alias, explicabo.
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

.posts > p {
  margin-left: 0;
}

.posts {
  margin: 5% 0;
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
