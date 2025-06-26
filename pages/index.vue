<script setup lang="ts">
const posts = await usePosts();
</script>

<template>
  <v-container>
    <v-img
      src="/6b25b2a9-f2c4-49d1-88d8-24c5e8c31c441.jpg"
      height="300px"
      cover
      class="mb-6"
    ></v-img>

    <v-row>
      <!-- サイドバー -->
      <v-col cols="12" md="3">
        <SidebarMenu />
      </v-col>

      <!-- 投稿一覧 -->
      <v-col cols="12" md="9">
        <v-row justify="center">
          <v-col cols="8" md="6" v-for="post in posts" :key="post.id">
            <v-card>
              <v-img :src="post.contensImage" height="200px" cover />

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
      </v-col>
    </v-row>
  </v-container>
</template>
