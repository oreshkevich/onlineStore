<template>
  <v-app>
    <Navbar />
    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="5000"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn dark flat @click.native="closeError"> Close </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import Navbar from './components/NavbarName.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    Navbar,
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError');
    },
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
};
</script>

