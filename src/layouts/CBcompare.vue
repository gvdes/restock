<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <q-header elevated>
      <div class="text-center text-h6" >Revision Bodigo de Barras</div>
    </q-header>


    <q-page-container>

    </q-page-container>

    <q-footer reveal elevated bordered class="bg-white">
      <div class="row">
        <ProductAutocomplete :checkState="false" @input="add"  @agregar="agregar" class="col" />
        <!-- <q-separator spaced inset vertical dark v-if="products.length > 0" /> -->
        <!-- <q-btn color="primary" icon="send" @click="nextStep" flat v-if="products.length > 0" /> -->
      </div>

    </q-footer>

  </q-layout>
</template>

<script setup >
import { ref } from 'vue'
import axios from 'axios';//para dirigirme bro
import ProductAutocomplete from 'src/components/ProductsAutocomplete.vue';// encabezado aoiida
import dbproduct from 'src/API/Product'
import { useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';

const $router = useRouter();


// import { assist } from "src/boot/axios";



const add = (opt) => {
  console.log(opt)
}

const agregar = (ops) => {
  $router.push(`/barcode/${ops.id}`);
}

</script>
