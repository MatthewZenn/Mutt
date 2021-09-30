<template>
  <div class="posts">
    <img class="dog" :src="dimg">
  </div>
</template>

<script>
import {get} from "axios";

export default {
  name: "Card",
  data() {
    return {
      dimg: null
    }
  },
  mounted() {
    get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        this.dimg = response.data.message
      })
  }
}
</script>

<style scoped>
.posts {
  position: relative;
  width: 22rem;
  height: 22rem;
  top: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #2C2F33;
  border: 8px solid #23272A;
}
.dog {
  width: 22rem;
  height: 22rem;
  position: relative;
  object-fit: contain;
}
</style>