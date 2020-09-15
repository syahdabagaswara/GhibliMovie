<template>
  <v-container fluid>
    <h2>List Movie</h2>
    <v-row>
      <v-col cols="12" md="3" v-for="(item,index) in film_state.list" :key="index">
        <v-card height="100%">
          <v-img :src="item.local.image" height="320" class="pa-2">
            <v-avatar class="orange accent-3" size="32">
              <span class="white--text">{{item.rt_score}}</span>
            </v-avatar>
          </v-img>
          <v-card-title v-text="item.title"/>
          <v-card-subtitle v-text="item.producer+', '+item.release_date"></v-card-subtitle>
          <v-card-text  v-text="item.description.substr(0, 300) + '...'"/>
          <div class="h--60"></div>
          <v-btn absolute bottom block class="capitalize primary white--text" :to="{name: 'Detail' ,params:{slug:item.title}}" >Details</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('StoreFilm', ['film_state'])
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$store.dispatch('StoreFilm/list')
    }
  }
}
</script>
