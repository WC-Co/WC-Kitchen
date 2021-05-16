import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import MenuPage from './components/MenuPage'
import LocationPage from './components/LocationPage'
import ReserveForm from './components/ReserveForm'
import ReservePage from './components/ReservePage'
import EditPage from './components/EditPage'
import ReservationIndex from './components/ReservationIndex'

Vue.use(VueRouter)

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomePage
  },
  {
      name: 'about',
      path: '/about',
      component: AboutPage
  },
  {
      name: 'menu',
      path: '/menu',
      component: MenuPage
  },
  {
    name: 'location',
    path: '/location',
    component: LocationPage
  },
  {
  name: 'contact',
  path: '/contact',
  component: ContactPage
  },
  {
    name: 'reservation',
    path: '/reservation',
    component: ReservePage,
    children: [
      {
        path: 'form',
        name: 'form',
        component: ReserveForm
      },
      {
        path: 'index',
        name: 'index',
        component: ReservationIndex
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: EditPage
      }
      
    ]
  }
]

const router = new VueRouter({mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

