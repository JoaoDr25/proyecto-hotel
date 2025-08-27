<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-gradient text-white">
      <q-toolbar class="q-pa-sm">
        <q-toolbar-title class="anime-title">
          HOTEL SAKURA ETERNO
        </q-toolbar-title>

        <q-tabs v-model="tab" shrink dense class="text-white tabs-anime" indicator-color="pink" active-color="pink">
          <q-route-tab v-for="link in links" :key="link.name" :icon="link.icon" :label="link.name" :to="link.to"
            exact />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <transition name="fade">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('/')
const links = [
  { name: 'Inicio', to: '/', icon: 'home' },
  { name: 'Habitaciones', to: '/habitaciones', icon: 'hotel' },
  { name: 'Deportes', to: '/deportes', icon: 'sports_kabaddi' },
  { name: 'Gastronomía', to: '/gastronomia', icon: 'restaurant' },
  { name: 'Servicios', to: '/servicios', icon: 'room_service' }
]
</script>

<style lang="scss">
.bg-gradient {
  background: linear-gradient(90deg, #d4a373, #fefae0, #ccd5ae);
  box-shadow: 0 4px 15px rgba(212, 163, 115, 0.4);
}

.anime-title {
  font-family:'Courier New', Courier, monospace;
  font-size: 2.2rem;
  padding-top: 10px;
  font-weight: bolder;
  letter-spacing: 1px;
  color: #6d4122;
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.8);
}

.tabs-anime .q-tab {
  transition: background-color 0.3s, color 0.3s;
  color: #432818;
}

.tabs-anime .q-tab--active {
  background-color: rgba(255, 239, 204, 0.6);
  border-radius: 8px;
  color: #bc6c25;
  box-shadow: 0 0 6px rgba(255, 200, 150, 0.5);
}

.q-pa-sm {
  padding: 8px 8px;
  padding-right: 130px;
  padding-left: 120px;
}

.q-page-container {
  background: linear-gradient(180deg,
      #fefae0,
      #e9edc9,
      #ccd5ae);
  min-height: 100vh;
  padding: 16px;
  margin-top: 1px;
}

.q-page-container>* {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;
  padding-top: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
