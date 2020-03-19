<template>
  <v-app>
    <v-content>
      <!-- <Login-Form/> -->
      <router-view />
    </v-content>
    <footer-late></footer-late>
  </v-app>
</template>

<script>
//import LoginForm from './components/LoginForm';

import FooterLate from './components/Footer'

export default {
  name: 'App',
  components: {
      FooterLate
  },
  // components: {
  //   LoginForm,
  // },

  data: () => ({
    //
  }),
};
</script>
