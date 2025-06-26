<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const postId = route.params.id;

const { data: post } = await useFetch(
  `https://xs666826.xsrv.jp/wp-json/wp/v2/posts/${postId}`
);
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title v-html="post?.title.rendered" />
      <v-card-text>
        <div v-html="post?.content.rendered" />
      </v-card-text>
    </v-card>
  </v-container>
</template>
