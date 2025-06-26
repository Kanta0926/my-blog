<script setup lang="ts">
import { ref } from "vue";
import SidebarMenu from "@/components/SidebarMenu.vue";

const clipped = ref(false);
const drawer = ref(false);
const fixed = ref(false);
const title = "My Blog";

const items = [
  { icon: "mdi-home", title: "Welcome", to: "/" },
  { icon: "mdi-post", title: "Blog", to: "/blog" },
];
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      location="right"
      fixed
      app
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :clipped-left="clipped" fixed>
      <v-spacer />
      <v-toolbar-title class="text-center">{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>
