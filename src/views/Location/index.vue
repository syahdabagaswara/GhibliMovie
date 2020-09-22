<template>
  <v-container fluid>
    <h2>Location List</h2>
    <v-row>
      <v-col cols="12" md="3" v-for="(item,index) in location_state.list" :key="index">
        <v-card height="100%" dark class="primary">
          <v-card-title class="f--18" v-text="item.name"/>
          <v-card-actions>
            <v-btn  block class="capitalize white--text" :to="{name: 'Location-detail' ,params:{slug:item.name}}" >Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Location-list',
  computed: {
    ...mapState('StoreLocation', ['location_state'])
  }
}
</script>
