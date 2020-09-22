<template>
  <v-container fluid >
    <v-card v-if="items">
      <v-card-title class="f--24 font-weight-bold" v-text="items.name"/>
      <v-card-text class="py-0">
        <v-row>
          <v-col cols="6" class="py-0">
            <p class="mb-0 font-weight-bold ">Pilot:
              <span
              class="font-weight-regular cursor-pointer people-item"
                  @click="$router.push({name: 'People-detail', params: {slug : getNamePeopleById(items.pilot.split('/')[4])}})"
              >
                {{getNamePeopleById(items.pilot.split('/')[4])}}
              </span>
            </p>
            <p class="mb-0 font-weight-bold">Length: <span class="font-weight-regular">{{items.length}}</span></p>
            <p class="mb-0 font-weight-bold">Vehicle Class : <span class="font-weight-regular">{{items.vehicle_class}}</span></p>
            <p class="mb-0 font-weight-bold">Description : <span class="font-weight-regular">{{items.description}}</span></p>
          </v-col>
          <v-col cols="6" class="py-0">
            <p class="mb-0 font-weight-bold f--18 black--text ">Movie :</p>
              <div>
                <v-row>
                  <v-col class="pt-0" cols="3" >
                    <p class="mb-0 cursor-pointer people-item"
                     @click="$router.push({name: 'Detail', params: {slug : getFilm(items.films).title}})"
                     >{{getFilm(items.films).title}}</p>
                    <v-img :src="getFilm(items.films).local.image" contain width="200"/>
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
    ...mapGetters('StoreVehicles', ['getVehiclesByName']),
    ...mapGetters('StorePeople', ['getNamePeopleById']),
    ...mapGetters('StoreFilm', ['getFilmById']),
    ...mapGetters('StoreSpecies', ['getNameSpeciesById']),
    items () {
      return this.getVehiclesByName(this.$route.params.slug)
    }
  },
  methods: {
    getFilm (val) {
      return this.getFilmById(val.split('/')[4])
    }
  }
}
</script>
