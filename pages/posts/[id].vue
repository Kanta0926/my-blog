<template>
  <v-container v-if="post">
    <h1 v-html="post.title.rendered" />
    <div v-html="post.content.rendered" />
  </v-container>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: post } = await useFetch(
  `https://example.com/wp-json/wp/v2/posts/${route.params.id}`
);
</script>
