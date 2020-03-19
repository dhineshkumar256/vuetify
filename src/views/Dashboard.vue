<template>
    <v-card
      height="100%"
      class="overflow-hidden"
    >
      <v-navigation-drawer
        v-model="drawer"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        absolute
        dark
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Dasboard</v-list-item-title>
              <v-list-item-subtitle>oho!!</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout()">Logout</v-btn>
        </div>
      </template>
      </v-navigation-drawer>
    </v-card>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Dashboard',
  data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Configure', icon: 'mdi-format-list-checks' },
          { title: 'Results', icon: 'mdi-help-box' },
        ],
        //color: 'primary',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',
        ],
        right: false,
        miniVariant: false,
        expandOnHover: false,
      }
    },
    methods: {
      logout(){
        this.$router.push({ name: 'LoginForm' });
      }
    }
}
</script>
