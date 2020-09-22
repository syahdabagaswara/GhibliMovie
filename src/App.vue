<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title class="w--120 cursor-pointer"  @click="$router.push({name:'Home'})">
        <v-img :src="require('@/assets/Studio_Ghibli_wordmark.svg')"/>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn depressed class="transparent" @click="$router.push({name:'Home'})">
          Film
        </v-btn>
        <v-btn depressed class="transparent" @click="$router.push({name:'People'})">
          People
        </v-btn>
        <v-btn depressed class="transparent" @click="$router.push({name:'Location'})">
          Locations
        </v-btn>
        <v-btn depressed class="transparent" @click="$router.push({name:'Species'})">
          Species
        </v-btn>
        <v-btn depressed class="transparent" @click="$router.push({name:'Vehicles'})">
          Vehicles
        </v-btn>
      </v-toolbar-items>
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
  async created () {
    await this.$store.dispatch('StoreFilm/list')
    await this.$store.dispatch('StorePeople/list')
    await this.$store.dispatch('StoreLocation/list')
    await this.$store.dispatch('StoreSpecies/list')
    await this.$store.dispatch('StoreVehicles/list')
  }
}
</script>
