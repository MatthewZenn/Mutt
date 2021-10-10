<template>
  <div class='scrolling-component' ref='scrollComponent'>
    <div v-for='post in this.posts' :key="post.dimg" >
      <Card :post="post"/>
    </div>
    <div v-observe-visibility="handleInfinityScroll"/>
    <div class="loader">
      <div class="spin"></div>
      <div class="bounce"></div>
    </div>
  </div>
</template>

<script>
import getPosts from '../api/get-posts'
import Card from "@/components/Card"

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
      this.loadMorePosts();
    }
  },
  data() {
    return {
      posts: [],
    }
  }
}
</script>

<style scoped>
 @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(90deg);
    }
    35% {
      transform: rotate(90deg);
    }
    45% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    85% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    10% {
      -webkit-transform: rotate(0deg);
    }
    20% {
      -webkit-transform: rotate(90deg);
    }
    35% {
      -webkit-transform: rotate(90deg);
    }
    45% {
      -webkit-transform: rotate(180deg);
    }
    60% {
      -webkit-transform: rotate(180deg);
    }
    75% {
      -webkit-transform: rotate(270deg);
    }
    85% {
      -webkit-transform: rotate(270deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0% {
      transform: scaleX(1);
    }
    10% {
      transform: scaleX(1);
    }
    20% {
      transform: scaleX(0.8);
    }
    35% {
      transform: scaleX(0.8);
    }
    45% {
      transform: scaleX(1);
    }
    60% {
      transform: scaleX(1);
    }
    75% {
      transform: scaleX(0.8);
    }
    85% {
      transform: scaleX(0.8);
    }
    100% {
      transform: scaleX(1);
    }
  }

  @-webkit-keyframes bounce {
    0% {
      -webkit-transform: scaleX(1);
    }
    10% {
      -webkit-transform: scaleX(1);
    }
    20% {
      -webkit-transform: scaleX(0.8);
    }
    35% {
      -webkit-transform: scaleX(0.8);
    }
    45% {
      -webkit-transform: scaleX(1);
    }
    60% {
      -webkit-transform: scaleX(1);
    }
    75% {
      -webkit-transform: scaleX(0.8);
    }
    85% {
      -webkit-transform: scaleX(0.8);
    }
    100% {
      -webkit-transform: scaleX(1);
    }
  }
  
  .loader {
    box-sizing: content-box;
    height: 40px;
    margin: 0 auto;
    position: relative;
    width: 70px;
    margin-top: 170px;
    margin-bottom: 30px;
  }
    .loader:before {
      border: 3px solid #7FB2C2;
      box-sizing: content-box;
      content: '';
      height: 0;
      left: 50%;
      position: absolute;
      top: 50%;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      width: 0;
    }

    .spin {
      -webkit-animation: spin 2.25s linear infinite;
      animation: spin 2.25s linear infinite;
      height: 14px;
      left: 28px;
      position: absolute;
      top: 13px;
      width: 14px;
    }
      .spin:before {
        border: 5px solid #7FB2C2;
        box-sizing: content-box;
        content: '';
        height: 14px;
        left: 50%;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(-50%, -50%) rotate(45deg);
        transform: translate(-50%, -50%) rotate(45deg);
        width: 14px;
      }

    .bounce {
      -webkit-animation: bounce 2.25s linear infinite;
      animation: bounce 2.25s linear infinite;
      height: 100%;
      margin: 0 auto;
      position: relative;
      width: 100%;
    }
      .bounce:after,
      .bounce:before {
        box-sizing: content-box;
        content: '';
        height: 10px;
        position: absolute;
        top: 13px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        width: 10px;
      }

      .bounce:before {
        border-bottom: 5px solid #7FB2C2;
        border-left: 5px solid #7FB2C2;
        left: 0;
      }

      .bounce:after {
        border-right: 5px solid #7FB2C2;
        border-top: 5px solid #7FB2C2;
        right: 0;
      }
</style>