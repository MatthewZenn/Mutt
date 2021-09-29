<template>
  <div id="app">
    <header class="nav">
      <img class="logo" src="Logo.svg" alt="">
    </header>
    <div class="link">
      <h2>Using <a href='https://dog.ceo/dog-api/'>https://dog.ceo/dog-api/</a></h2>
    </div>
    <Card />
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
html, body {
  background-color: #23272A;
  color: white;
}
.link {
  position: absolute;
  top: 80px;
  display: inline-flex;
  margin: auto;
  justify-content: center;
  padding: 0;
}
h2 {
  font-size: 14pt;
  font-family: Arial, Helvetica, sans-serif;
}
a {
  color: #7FB2C2;
}
.nav {
  margin: 0;
  padding: 0;
  position: absolute;
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #2C2F33;
}
.logo {
  width: 15rem;
  position: relative;
  justify-self: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
