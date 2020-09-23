<template>
  <v-container fluid>
    <h2>Vehicles List</h2>
    <v-row>
      <v-col cols="12" md="3" v-for="(item,index) in vehicles_state.list" :key="index">
        <v-card height="100%" dark :class="item.gender=='Male'? 'blue': 'pink'">
          <v-card-title class="f--18" v-text="item.name"/>
          <v-card-subtitle class="white--text" v-text="item.gender"></v-card-subtitle>
          <v-card-actions>
            <v-btn  block class="capitalize white--text" :to="{name: 'Vehicles-detail' ,params:{slug:item.name}}" >Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Vehicles-list',
  computed: {
    ...mapState('StoreVehicles', ['vehicles_state'])
  }
}
</script>
