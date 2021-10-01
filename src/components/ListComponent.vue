<template>
  <div class='scrolling-component' ref='scrollComponent'>
    <div v-for='post in this.posts' :key="post.dimg" >
      <Card :post="post"/>
    </div>
    <div v-observe-visibility="handleInfinityScroll"/>
  </div>
</template>

<script>
import getPosts from '../api/get-posts'
import Card from './Card'

export default {
  name: "ListComponent",
  components: {
    Card,
  },
  methods: {
    async loadMorePosts() {
      const newPosts = await getPosts(5);
      this.posts.push(...newPosts);
    },
    handleInfinityScroll(isVisible) {
      if(!isVisible) {
        return;
      }
      console.log("hello");
      this.loadMorePosts();
    }
  },
  data() {
    return {
      posts: [],
    }
  },
  beforeMount() {
  }

}
</script>

<style scoped>

</style>