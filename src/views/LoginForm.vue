<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="4" sm="4" md="4">
            <!-- <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer />
                            </v-toolbar>
                            <v-card-text> -->
            <v-form ref="loginform" v-model="valid" :lazy-validation="true">
              <v-text-field
                label="Username"
                name="Username"
                prepend-icon="person"
                type="text"
                v-model="username"
                :rules="usernameRules"
                required
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="password"
                :rules="passwordRules"
                required
              />

              <v-btn
                color="primary"
                @click="login()"
                :absolute="false"
                :right="false"
                :disabled="!valid"
                :loading="loader"
                :large="true"
                :tile="true"
                :block="true"
              >
                Login
              </v-btn>
            </v-form>
            <!-- </v-card-text>
                            <v-card-actions>
                            </v-card-actions>
                        </v-card> -->
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
const axios = require("axios");

export default {
  name: "LoginForm",
  data: () => ({
    valid: true,
    loader: false,
    username: "",
    usernameRules: [v => !!v || "User Name is required"],
    password: "",
    passwordRules: [v => !!v || "Password is required"]
  }),
  methods: {
    login() {
      this.$refs.loginform.validate() ? this.proceed() : false;
    },
    proceed() {
      //this.$router.push({ name: 'Dashboard' })
      axios
        .get("http://10.0.125.65/vuetify/my-app/src/api/user.php")
        .then(function(response) {
          console.log(response);
        });
    },
    mounted() {
      console.log("mounted");
    }
  }
};
</script>
