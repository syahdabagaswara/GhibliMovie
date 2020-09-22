<template>
  <v-container fluid >
    <v-card v-if="items">
      <v-card-title class="f--24 font-weight-bold" v-text="items.name"/>
      <v-card-text class="py-0">
        <v-row>
          <v-col cols="6" class="py-0">
            <p class="mb-0 font-weight-bold">Climate: <span class="font-weight-regular">{{items.climate}}</span></p>
            <p class="mb-0 font-weight-bold">Terrain : <span class="font-weight-regular">{{items.terrain}}</span></p>
            <p class="mb-0 font-weight-bold">Surface Water : <span class="font-weight-regular">{{items.surface_water}}</span></p>
            <div v-if="people">
              <p class="mb-0" v-if="people.length > 0 ">
                <span class="font-weight-bold">People:</span>
                <template v-for="(item,index) in people">
                  <span
                  v-if="getNamePeopleById(item.split('/')[4]) !== '' "
                  :key="index" v-text="' '+(getNamePeopleById(item.split('/')[4])+',')"
                  class="cursor-pointer people-item"
                  @click="$router.push({name: 'People-detail', params: {slug : getNamePeopleById(item.split('/')[4])}})"
                  />
                </template>
              </p>
              <p v-else class="mb-0">
                <span class="font-weight-bold">People:</span>
                N/A
              </p>
            </div>
          </v-col>
          <v-col cols="6" class="py-0">
            <p class="mb-0 font-weight-bold f--18 black--text ">Movie :</p>
              <div>
                <v-row>
                  <v-col class="pt-0" cols="3" v-for="(item,index) in items.films" :key="index">
                    <p class="mb-0 cursor-pointer people-item"
                     @click="$router.push({name: 'Detail', params: {slug : getFilm(item).title}})"
                     >{{getFilm(item).title}}</p>
                    <v-img :src="getFilm(item).local.image" contain width="200"/>
                  </v-col>
                </v-row>
              </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      people: []
    }
  },
  computed: {
    ...mapGetters('StoreLocation', ['getLocationByName']),
    ...mapGetters('StorePeople', ['getNamePeopleById']),
    ...mapGetters('StoreFilm', ['getFilmById']),
    ...mapGetters('StoreSpecies', ['getNameSpeciesById']),
    items () {
      return this.getLocationByName(this.$route.params.slug)
    }
  },
  methods: {
    getFilm (val) {
      this.people = this.getFilmById(val.split('/')[4]).people
      return this.getFilmById(val.split('/')[4])
    }
  }
}
</script>
