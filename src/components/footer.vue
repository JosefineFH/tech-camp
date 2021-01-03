<template>
  <div class="footer">
    <div>
      <img class="logos" src="../assets/gaming-pad.png" />
    </div>
    <div class="links">
      <router-link class="link" to="/">HOME</router-link>
      <router-link class="NavLink" to="/OurActivitys">OUR ACTIVITY</router-link>
      <router-link class="NavLink" to="/Register">REGISTER</router-link>
    </div>
    <div class="SoMe">
      <img src="https://img.icons8.com/cotton/64/000000/instagram-new.png" />
      <img src="https://img.icons8.com/cotton/64/000000/facebook.png" />
      <img src="https://img.icons8.com/cotton/64/000000/youtube.png" />
      <img src="https://img.icons8.com/cute-clipart/64/000000/twitch.png" />
    </div>
  </div>
</template>
<style scoped>
.footer {  
  background-color: var(--textColorHover);
  color: white;
  padding-top:3%;
  padding: 30px;
}
.footer > div {
  margin: 30px 0;
  justify-content: center;
}

.logos {
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;

}
.links {
  display: grid;
}
.links > a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
}
.SoMe > img {
  width: 20%;
  padding: 2%;
}
@media only screen and (min-width: 900px) {
  .footer {
    padding-top: 20px;
    background-color: var(--textColorHover);
    grid-template-columns:1fr 1fr 1fr;
    display: grid;
    color: white;
    
  }
  .SoMe > img {
    margin-top:15%;
    display:inline;
    width: 90px;
    padding: 2px;
  }
}
</style>
