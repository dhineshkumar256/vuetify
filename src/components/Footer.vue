<template>
  <v-footer
  :inset="false"
  :padless="true"
  >
    <v-spacer></v-spacer>
    <div>AMI &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
  export default {
    name: 'FooterLate',
  }
</script>
