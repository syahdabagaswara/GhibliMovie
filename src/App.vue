<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title class="w--120 cursor-pointer"  @click="$router.push({name:'Home'})">
        <v-img :src="require('@/assets/Studio_Ghibli_wordmark.svg')">

        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Search/>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Search
  },
  data: () => ({
    //
  })
}
</script>
