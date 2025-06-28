<script setup lang="ts">
import { ref } from "vue";
import SidebarMenu from "@/components/SidebarMenu.vue";

const clipped = ref(false);
const drawer = ref(false);
const fixed = ref(false);
const title = "My Blog";

const items = [{ icon: "mdi-home", title: "Welcome", to: "/" }];
</script>

<template>
  <v-app class="bg-grey-lighten-4">
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      asolute
      temporary
      clipped
      class="header-navgation"
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

    <v-app-bar app absolute clipped class="header-bar">
      <v-spacer />
      <v-toolbar-title class="text-center">{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = !drawer" class="header-btn" />
    </v-app-bar>

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app class="footer-bar">
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<style>
.v-app-bar.header-bar {
  background-color: #dbd4ba;
  color: #333333;
}

.v-btn.header-btn {
  border: none;
  color: #333333;
}

.v-navigation-drawer.header-navgation {
  background-color: #dbd4ba;
  color: #333333;
}

.footer-bar {
  background-color: #dbd4ba;
}
</style>
