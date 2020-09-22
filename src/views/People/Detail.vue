<template>
  <v-container fluid >
    <v-card v-if="items">
      <v-card-title class="f--24 font-weight-bold" v-text="items.name"/>
      <v-card-text class="py-0">
        <v-row>
          <v-col cols="6" class="py-0">
            <p class="mb-0 font-weight-bold">Gender : <span class="font-weight-regular">{{items.gender}}</span></p>
            <p class="mb-0 font-weight-bold">Age : <span class="font-weight-regular">{{items.age}}</span></p>
            <p class="mb-0 font-weight-bold">Eye Color : <span class="font-weight-regular">{{items.eye_color}}</span></p>
            <p class="mb-0 font-weight-bold">Hair Color : <span class="font-weight-regular">{{items.hair_color}}</span></p>
            <div v-if="location">
              <p class="mb-0" v-if="location.length > 1 ">
                <span class="font-weight-bold">Location:</span>
                <template v-for="(item,index) in location">
                  <span
                  v-if="getNameLocationById(item.split('/')[4]) !== '' "
                  :key="index" v-text="' '+(getNameLocationById(item.split('/')[4])+',')"
                  class="cursor-pointer people-item"
                  @click="$router.push({name: 'Location-detail', params: {slug : getNameLocationById(item.split('/')[4])}})"
                  />
                </template>
              </p>
              <p v-else class="mb-0">
                <span class="font-weight-bold">Location:</span>
                N/A
              </p>
            </div>
            <p class="mb-0 font-weight-bold">Species :
              <span
              v-if="getNameSpeciesById(items.species.split('/')[4]) !== '' "
              v-text="' '+(getNameSpeciesById(items.species.split('/')[4]))"
              class="cursor-pointer people-item font-weight-regular"
              @click="$router.push({name: 'Species-detail', params: {slug : getNameSpeciesById(items.species.split('/')[4])}})"
              />
            </p>
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
      location: []
    }
  },
  computed: {
    ...mapGetters('StorePeople', ['getPeopleById']),
    ...mapGetters('StoreFilm', ['getFilmById']),
    ...mapGetters('StoreLocation', ['getNameLocationById']),
    ...mapGetters('StoreSpecies', ['getNameSpeciesById']),
    items () {
      return this.getPeopleById(this.$route.params.slug)
    }
  },
  methods: {
    getFilm (val) {
      this.location = this.getFilmById(val.split('/')[4]).locations
      return this.getFilmById(val.split('/')[4])
    }
  }
}
</script>
