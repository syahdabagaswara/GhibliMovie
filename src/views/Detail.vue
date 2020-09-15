<template>
  <v-container fluid>
    <v-card class="white">
      <v-card-text>
        <v-row>
          <v-col md="4">
            <v-img :src="film_state.detail.local.image" contain class="pa-2">
              </v-img>
          </v-col>
          <v-col md="8">
            <h2 class="f--36 black--text mb-6" v-text="film_state.detail.local.title"></h2>
            <p class="mb-1"><span class="font-weight-bold">Director</span>: {{film_state.detail.director}}</p>
            <p class="mb-1"><span class="font-weight-bold">Producer</span>: {{film_state.detail.producer}}</p>
            <p class="mb-1"><span class="font-weight-bold">Release Date</span>: {{film_state.detail.release_date}}</p>
            <p class="mb-6"><span class="font-weight-bold">Score</span>: {{film_state.detail.rt_score}}</p>
            <p v-text="film_state.detail.description"></p>
            <v-btn block color="primary" :href="film_state.detail.local.streaming">
              Streaming
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () {
    this.getItem()
  },
  computed: {
    ...mapState('StoreFilm', ['film_state'])
  },
  methods: {
    getItem () {
      this.$store.dispatch('StoreFilm/detail', this.$route.params.slug)
    }
  }
}
</script>
