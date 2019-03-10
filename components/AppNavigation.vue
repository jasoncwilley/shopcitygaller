<template>
  <div class="navarea">
  <link href="https://fonts.googleapis.com/css?family=Fugaz+One" rel="stylesheet">

    <nav>
      <div class="capsule">
        <nuxt-link exact to="/">
          <img src='logo.png' width="50" height="50">
            <title id="shopicon">
              Shop City Gallery
            </title>
           </svg>
        </nuxt-link>
        <ul>
          <nuxt-link to="/women"><li>Photos</li></nuxt-link>
          <nuxt-link to="/men"><li>Paintings</li></nuxt-link>
          <nuxt-link to="/sale"><li>Sale</li></nuxt-link>
        </ul>
        <nuxt-link to="/cart">
          <div class="cartitem">
            <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
              <title id="cart">
                Shopping Cart
              </title>
              <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
            </svg>
          </div>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    }
  }
};
</script>

<style scoped>
.navarea {
  overflow: hidden;
}

.capsule {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
max-width: 800px;
text-align: center;
  height: 60px;
  background: white;
  margin-left: 20px;
  margin-right: 20px;
}

ul {
  padding-left: 0;
  display: flex;
  list-style: none outside none;
  justify-content: center;
  align-items: center;
}

li {
  padding: 0 50px;
  font-family: 'Fugaz One', cursive;
  font-size: 20px;
  color: purple;
  position: relative;

}

a,
a:visited,
a:active {
  text-decoration: none;
  color: black;
}

.cartitem {
  position: relative;
  float: right;
}

.cartcount {
  font-family: 'Barlow', sans-serif;
  position: absolute;
  background: #ff2211;
  color: white;
  text-align: center;
  padding-top: 4px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  margin: -5px 0 0 20px;
  border-radius: 1000px;
  font-weight: 700;
}
img {
padding-top: 10px;
padding-left: 10px
}
</style>
