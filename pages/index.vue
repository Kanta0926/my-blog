<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" v-for="post in posts" :key="post.id">
        <v-card>
          <v-card-title v-html="post.title.rendered" />
          <v-card-text>
            <div v-html="post.excerpt.rendered" />
          </v-card-text>
          <v-card-actions>
            <NuxtLink :to="`/posts/${post.id}`">続きを読む</NuxtLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> -->

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Welcome to My App</h1>
        <p>This is the homepage.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const posts = await usePosts();
</script>
