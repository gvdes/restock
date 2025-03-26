<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          RESTOCK APP
        </q-toolbar-title>
      </q-toolbar>
    </q-header>


    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <q-list bordered v-for="(route,index) in rout" :key="index" >
          <q-item clickable v-ripple :to="route.path">
            <q-item-section avatar>
              <q-icon color="primary" name="list" />
            </q-item-section>
            <q-item-section>{{ route.name }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>

      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const rout = ref(router.getRoutes().filter(e => e.name))

console.log(router.getRoutes()); // Obtiene todas las rutas definidas


// name: 'LayoutName',

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


</script>
