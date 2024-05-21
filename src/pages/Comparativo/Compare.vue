<template>
  <q-page padding>
    <q-table
      title="Table Title"
      :rows="invoices.headers"
      row-key="FACTURA"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import AssitApi from 'src/api/AssistApi.js';
import { useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';


const $q = useQuasar();
const $route = useRoute();

const invoices = ref({
  headers:[],
  body:[]
})



const init = async () => {
  $q.loading.show({message:'Obteniendo Facturas'})
  const resp = await AssitApi.getInvoices()
  if(resp.status == 200){

  console.log(resp.data);
  // invoices.value.headers = resp.data.facturas.facturas
  // invoices.value.body = resp.data.facturas.productos

  $q.loading.hide()
  }

}
init()
</script>
