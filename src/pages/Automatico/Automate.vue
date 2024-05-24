<template>
  <q-page padding>


  <div>

    <q-table
      title="Sucursales"
      :rows="stores"
      row-key="id"
      :columns="table.cols"

      :pagination="{rowsPerPage:20}"
    >
    <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="alias" :props="props">{{ props.row.alias }}</q-td>
          <q-td key="name" :props="props">{{ props.row.name}}</q-td>
          <q-td key="actions" :props="props">
            <q-btn flat rounded icon-right="arrow_circle_right" label="Crear Pedido" color="primary" @click="notes(props.row.id)" :disable="block" />
          </q-td>
        </q-tr>
      </template>
  </q-table>

  <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Notas</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="notas" autofocus  />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Continuar" @click="createPedido"  />
        </q-card-actions>
      </q-card>
    </q-dialog>


  </div>



  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import AssitApi from 'src/api/AssistApi.js';
import RestockApi from 'src/api/RestockApi.js';
import { useQuasar } from 'quasar';
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router';


const $q = useQuasar();
const $route = useRoute();

const stores = ref([])
const block = ref(false);
const prompt = ref(false);
const notas = ref('');
const sucursal = ref(null);

let table = ref({
  cols: [
    { name: 'id', label: 'ID', align:'center' },
    { name: 'alias', label: 'ALIAS', align:'center' },
    { name: 'name', label: 'SUCURSAL', align:'left' },
    { name: 'actions', label: 'Actions', align:'left' }
  ]
});

const init = async () => {
  $q.loading.show({message:'Obteniendo Sucursales'})
  const resp = await RestockApi.suc();
  if(resp.status == 200){
    console.log(resp.data)
    stores.value = resp.data
    $q.loading.hide()
  }else{
    alert('Problemas con la obtencion de datos');
  }
}

const notes = (a) => {
  prompt.value = true
  sucursal.value = a
}

const createPedido = async (a) => {
  block.value = true
  $q.loading.show({message:"Creando Pedido"})
  let data = {
    _workpoint_from:sucursal.value,
	  _workpoint_to: 1,
	  _type: 2,
	  notes:notas.value
  }
  const resp = await RestockApi.createAutomate(data)
  if(resp.status == 200){
    console.log(resp.data)
    block.value = false
    $q.loading.hide()
    $q.notify({
      type:'positive',
      message:`Pedido ${resp.data.order.id} creado`,
      position:'center'
    })
    notas.value = ''
    sucursal.value = null
    prompt.value = false
  }else{
    alert('Nosegeneroelpedido')
  }

}




init()
</script>
