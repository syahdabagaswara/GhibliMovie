<template>
  <v-container fluid >
    <v-card v-if="items">
      <v-card-title class="f--24 font-weight-bold" v-text="items.name"/>
      <v-card-text class="py-0">
        <v-row>
          <v-col cols="6" class="py-0">
            <p class="mb-0 font-weight-bold">Classification: <span class="font-weight-regular">{{items.classification}}</span></p>
            <p class="mb-0 font-weight-bold">Eye Color : <span class="font-weight-regular">{{items.eye_colors}}</span></p>
            <p class="mb-0 font-weight-bold">Hair Color : <span class="font-weight-regular">{{items.hair_colors}}</span></p>
            <div v-if="items.people">
              <p class="mb-0" v-if="items.people.length > 0 ">
                <span class="font-weight-bold">Residents:</span>
                <template v-for="(item,index) in items.people">
                  <span
                  v-if="getNamePeopleById(item.split('/')[4]) !== '' "
                  :key="index" v-text="' '+(getNamePeopleById(item.split('/')[4])+',')"
                  class="cursor-pointer people-item"
                  @click="$router.push({name: 'People-detail', params: {slug : getNamePeopleById(item.split('/')[4])}})"
                  />
                </template>
              </p>
              <p v-else class="mb-0">
                <span class="font-weight-bold">Residents:</span>
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
  computed: {
    ...mapGetters('StoreSpecies', ['getSpeciesByName']),
    ...mapGetters('StorePeople', ['getNamePeopleById']),
    ...mapGetters('StoreFilm', ['getFilmById']),
    ...mapGetters('StoreSpecies', ['getNameSpeciesById']),
    items () {
      return this.getSpeciesByName(this.$route.params.slug)
    }
  },
  methods: {
    getFilm (val) {
      return this.getFilmById(val.split('/')[4])
    }
  }
}
</script>
