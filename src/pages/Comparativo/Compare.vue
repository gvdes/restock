<template>
  <q-page padding>
    <q-table
      title="SALIDAS VS ENTRADAS"
      :rows="invoices"
      :columns="table.columns"
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

const table = ref({
  columns:[
    {name: 'invoice',label:'Factura',field: row => row.invoices[0]?.FACTURA},
    {name: 'entrie',label:'Entrada',field: row => row.entries[0]?.FACTURA},
    {name: 'workpoint',label:'Sucursal',field: row => row.store_name},
    {name: 'reference',label:'Referencia',field: row => row.invoices[0]?.REFFAC},
    {name: 'warehouse',label:'Almacen',field: row => row.invoices[0]?.ALMFAC},
    {name: 'hour',label:'Hora',field: row => row.invoices[0]?.HORFAC},
    {name: 'totales', label: 'Total', field: row => row.invoices[0]?.TOTFAC == row.entries[0]?.TOTFRE ? 'IGUAL' : 'DIFERENTE'},
    {name: 'articulos', label: 'Articulos', field: row => row.invoices[0]?.ARTICULOS == row.entries[0]?.ARTICULOS ? 'IGUAL' : 'DIFERENTE'},
    {name: 'cantidad', label: 'Cantidades', field: row => row.invoices[0]?.CANTIDAD == row.entries[0]?.CANTIDAD ? 'IGUAL' : 'DIFERENTE'},

  ]
})

const invoices = ref([])



const init = async () => {
  $q.loading.show({message:'Obteniendo Facturas'})
  const resp = await AssitApi.getInvoices()
  if(resp.status == 200){

  console.log(resp.data);
  invoices.value = resp.data

  $q.loading.hide()
  }

}
init()
</script>
