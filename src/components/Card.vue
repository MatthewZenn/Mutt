<template>
  <div class="posts">
    <img class="dog" :src="post.dimg">
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    post: Object
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