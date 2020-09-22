import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'
import People from '@/views/People'
import PeopleDetail from '@/views/People/Detail'
import Location from '@/views/Location'
import LocationDetail from '@/views/Location/Detail'
import Species from '@/views/Species'
import SpeciesDetail from '@/views/Species/Detail'
import Vehicles from '@/views/Vehicles'
import VehiclesDetail from '@/views/Vehicles/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:slug',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/People',
    name: 'People',
    component: People
  },
  {
    path: '/People/:slug',
    name: 'People-detail',
    component: PeopleDetail
  },
  {
    path: '/Location',
    name: 'Location',
    component: Location
  },
  {
    path: '/Location/:slug',
    name: 'Location-detail',
    component: LocationDetail
  },
  {
    path: '/Species',
    name: 'Species',
    component: Species
  },
  {
    path: '/Species/:slug',
    name: 'Species-detail',
    component: SpeciesDetail
  },
  {
    path: '/Vehicles',
    name: 'Vehicles',
    component: Vehicles
  },
  {
    path: '/Vehicles/:slug',
    name: 'Vehicles-detail',
    component: VehiclesDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
