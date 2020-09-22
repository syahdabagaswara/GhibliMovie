<template>
  <v-container fluid>
    <v-card class="white">
      <v-card-text v-if="item">
        <v-row>
          <v-col md="4">
            <v-img :src="item.local.image" contain class="pa-2"/>
          </v-col>
          <v-col md="8">
            <h2 class="f--36 black--text mb-6" v-text="item.title"></h2>
            <p class="mb-1"><span class="font-weight-bold">Director</span>: {{item.director}}</p>
            <p class="mb-1"><span class="font-weight-bold">Producer</span>: {{item.producer}}</p>
            <p class="mb-1"><span class="font-weight-bold">Release Date</span>: {{item.release_date}}</p>
            <p class="mb-1"><span class="font-weight-bold">Score</span>: {{item.rt_score}}</p>
            <p class="mb-1" v-if="item.people.length > 1">
              <span class="font-weight-bold">People:</span>
              <template v-for="(item,index) in item.people">
                <span
                v-if="getNamePeopleById(item.split('/')[4]) !== '' "
                :key="index"
                v-text="' '+(getNamePeopleById(item.split('/')[4])+',')"
                class="cursor-pointer people-item"
                @click="$router.push({name: 'People-detail', params: {slug : getNamePeopleById(item.split('/')[4])}})"
                />
              </template>
            </p>
            <p v-else class="mb-1">
              <span class="font-weight-bold">People:</span>
              N/A
            </p>
            <p class="mb-1" v-if="item.locations.length > 1">
              <span class="font-weight-bold">Location:</span>
              <template v-for="(item,index) in item.locations">
                <span
                v-if="getNameLocationById(item.split('/')[4]) !== '' "
                :key="index" v-text="' '+(getNameLocationById(item.split('/')[4])+',')"
                class="cursor-pointer people-item"
                @click="$router.push({name: 'Location-detail', params: {slug : getNameLocationById(item.split('/')[4])}})"
                />
              </template>
            </p>
            <p v-else class="mb-1">
              <span class="font-weight-bold">Location:</span>
              N/A
            </p>
            <p class="mb-1" v-if="item.species.length > 0">
              <span class="font-weight-bold">Species:</span>
              <template v-for="(item,index) in item.species">
                <span
                v-if="getNameSpeciesById(item.split('/')[4]) !== '' "
                :key="index" v-text="' '+(getNameSpeciesById(item.split('/')[4])+',')"
                class="cursor-pointer people-item"
                @click="$router.push({name: 'Species-detail', params: {slug : getNameSpeciesById(item.split('/')[4])}})"
                />
              </template>
            </p>
            <p v-else class="mb-1">
              <span class="font-weight-bold">Species:</span>
              N/A
            </p>
            <p class="mb-1" v-if="item.vehicles.length > 1">
              <span class="font-weight-bold">Vehicles:</span>
              <template v-for="(item,index) in item.vehicles">
                <span
                v-if="getNameVehiclesById(item.split('/')[4]) !== '' "
                :key="index" v-text="' '+(getNameVehiclesById(item.split('/')[4])+',')"
                class="cursor-pointer people-item"
                @click="$router.push({name: 'Vehicles-detail', params: {slug : getNameVehiclesById(item.split('/')[4])}})"
                />
              </template>
            </p>
            <p v-else class="mb-1">
              <span class="font-weight-bold">Vehicles:</span>
              N/A
            </p>
            <p v-text="item.description"></p>
            <v-btn block color="primary" :href="item.local.streaming">
              Streaming
            </v-btn>
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
    ...mapGetters('StoreFilm', ['getFilmBySlug']),
    ...mapGetters('StorePeople', ['getNamePeopleById']),
    ...mapGetters('StoreLocation', ['getNameLocationById']),
    ...mapGetters('StoreSpecies', ['getNameSpeciesById']),
    ...mapGetters('StoreVehicles', ['getNameVehiclesById']),
    item () {
      return this.getFilmBySlug(this.$route.params.slug)
    }
  }
}
</script>

<style lang="scss">
  .people-item{
    color: #B80F0A;
  }
  .people-item:hover{
    color: orange;
  }
</style>
