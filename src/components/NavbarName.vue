<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-item v-for="(link, i) in links" :key="i" :to="link.url">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-app-bar-title>
        <router-link to="/" tag="span" class="pointer">
          Online Store
        </router-link>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.url"
          color="primary"
        >
          <v-icon left>{{ link.icon }}</v-icon>

          {{ link.title }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      links: [
        { title: 'Login', icon: 'mdi-account-box', url: '/login' },
        { title: 'Register', icon: 'mdi-face-woman', url: '/register' },
        { title: 'Cart', icon: 'mdi-cart', url: '/checkout' },
        { title: 'New Product', icon: 'mdi-plus', url: '/new' },
        {
          title: 'My Products',
          icon: 'mdi-format-list-bulleted',
          url: '/list',
        },
      ],
    };
  },
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
