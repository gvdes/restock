<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-tabs>
        <q-route-tab
          icon="flag"
          to="/Compare"
          replace
          label="Comparativos"
        />
        <q-route-tab
          icon="list"
          to="/Automate"
          replace
          label="Automaticos"
        />
        <q-route-tab
          icon="list"
          to="/texas"
          replace
          label="P. Texcoco"
        />
      </q-tabs>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>

    </q-footer>


    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>


</script>
