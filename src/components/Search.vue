<template>
  <v-autocomplete

    hide-details
    flat
    solo
    light
    placeholder="Search"
    class=" br--8"
    :items="item"
    item-text="title"
    item-value="title"
    :search-input.sync="getList"
    v-model="search"
    @click="defaultList()"
  >
    <template v-slot:append>
      <v-icon class="grey--text">
        mdi-magnify
      </v-icon>
    </template>
    <template v-slot:item="data">
      <template >
        <v-list-item-avatar tile>
          <img :src="data.item.local.image">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.title"></v-list-item-title>
          <v-list-item-subtitle v-html="data.item.release_date"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      item: [],
      getList: null,
      search: ''
    }
  },
  computed: {
    ...mapState('StoreFilm', ['film_state'])
  },
  watch: {
    getList () {
      this.item = this.film_state.list
    },
    search (val) {
      this.$store.dispatch('StoreFilm/list', val).then(() => {
        this.$router.push({ name: 'Detail', params: { slug: val } })
      })
    }
  },
  methods: {
    defaultList () {
      this.item = this.film_state.list
    }
  }
}
</script>
