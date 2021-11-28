<template>
  <div id="posts-page">
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-end mt-2 mb-2">
          <div class="">
            <button type="button" class="button_hola">by likes</button>
            <button type="button" class="button_hola">by views</button>
          </div>
        </div>
        <div class="col-12 col-xxl-7">
          <div v-if="posts.length">
            <Post v-for="post in posts"
                  :key="'post' + post.id"
                  :post="post"
                  class="shadow"
                  @onAddLike="handleLike"
                  @onAddView="handleAddView"></Post>
          </div>
          <div v-else></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import PostModel from "~/classes/Models/PostModel";
import Post from "~/components/Post/Post.vue";

export default Vue.extend({
  components: {
    Post
  },
  data: (): { posts: PostModel[], pagination: Object } => {
    return {
      posts: [],
      pagination: {}
    }
  },
  methods: {
    handleLike(id: number): void {
      const postIndex = this.posts.findIndex(i => i.id === id);

      if (postIndex !== -1) {
        this.posts[postIndex].likesCount += 1;
      }
    },
    handleAddView(id: number): void {
      const postIndex = this.posts.findIndex(i => i.id === id);

      if (postIndex !== -1) {
        this.posts[postIndex].viewsCount += 1;
      }
    },

    async get(): Promise<void> {
      try {
        const response = await this.$api.post.getAll();

        this.posts.push(
            ...response.data.map((i) => {
              return new PostModel(i);
            })
        );
      } catch (e) {}
    }
  },
  async fetch(): Promise<void> {
    await this.get();
  }
})
</script>

<style>
.button_hola,
.button_hola::before,
.button_hola::after,
.button_hola span,
.button_hola span::before,
.button_hola span::after
{
  transition: all ease .5s;
}
 
.button_hola{
  position: relative;
  display: inline-block;
  margin: 1em;
  border: solid 1px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #fff;
}
 
.button_hola:hover
{
  box-shadow: 0 0 5em .5em rgba(50,50,150,0.5);
}
 
.button_hola span
{
  display: inline-block;
  width: 100%;
  padding: 0.6em 2em;
}
 
.button_hola:hover span
{
  background-color: #fff;
  color: #112;
}
 
.button_hola::before,
.button_hola::after,
.button_hola span::before,
.button_hola span::after
{
  content: '';
  position: absolute;
  border: 1px;
}
 
.button_hola::before,
.button_hola span::before
{
  border-style: solid none;  
}
 
.button_hola::before,
.button_hola span::after{      
  left: 0;
  top: -0.4em;
  width: 100%; 
  height: calc(100% + 0.8em);
}
 
.button_hola::after,
.button_hola span::after
{
  border-style: none solid;   
}
 
.button_hola::after,
.button_hola span::before
{
  top: 0;
  left: -0.4em;
  height: 100%;
  width: calc(100% + 0.8em); 
}
 
.button_hola:hover::after,
.button_hola:hover span::after
{
  transform: scaleY(0);
}
 
.button_hola:hover::before,
.button_hola:hover span::before
{
  transform: scaleX(0);
}
 
.button_hola:hover span::after,
.button_hola:hover span::before
{
  opacity: 0;
}

</style>