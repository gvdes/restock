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
        <q-card-section >
          <q-select v-model="read.cats" :options="sections.opts" label="Seccion"  filled multiple use-chips />
        </q-card-section>
        <q-card-section >
          <q-select v-model="read._workpoint_to" :options="stores" label="Destino" option-label="name" filled :option-disable="(val) => optionDisable(val)" />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-bold">Notas</div>
          <q-input dense v-model="read.notes" autofocus  />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" @click="reset"/>
          <q-btn flat label="Continuar" @click="createPedido" :disable="!valid" />
        </q-card-actions>
      </q-card>
    </q-dialog>


  </div>



  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import AssitApi from 'src/api/AssistApi.js';
import RestockApi from 'src/api/RestockApi.js';
import { useQuasar } from 'quasar';
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router';


const $q = useQuasar();
const $route = useRoute();

const stores = ref([])
const sections = ref({
  opts:["Mochila","Juguete","Papeleria","Paraguas","Accesorios","Calculadora","Peluche","Transporte","Electronicos","Navidad","Sin categoría","Hogar","Sistema","Detalles"]
})
const block = ref(false);
const prompt = ref(false);
const notas = ref('');
const sucursal = ref(null);

const table = ref({
  cols: [
    { name: 'id', label: 'ID', align:'center' },
    { name: 'alias', label: 'ALIAS', align:'center' },
    { name: 'name', label: 'SUCURSAL', align:'left' },
    { name: 'actions', label: 'Actions', align:'left' }
  ]
});

const read = ref({
    cats:[],
    _workpoint_from:null,
	  _workpoint_to: null,
	  _type: 2,
	  notes:null
})

const valid = computed(() => (read.value.cats.length > 0&& read.value._workpoint_to))

const init = async () => {
  $q.loading.show({message:'Obteniendo Sucursales'})
  const resp = await RestockApi.cedis();
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
    cats: read.value.cats.map(e => "'"+e+"'").join(),
    _workpoint_from:sucursal.value,
	  _workpoint_to:  read.value._workpoint_to.id,
	  _type: 2,
	  notes:read.value.notes
  }

  console.log(data)

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
    read.value = {
    cats:[],
    _workpoint_from:null,
	  _workpoint_to: null,
	  _type: 2,
	  notes:null}

    prompt.value = false
  }else{
    alert('Nosegeneroelpedido')
  }

}

const optionDisable = (val) => {
  if(val.id == sucursal.value){
    return true
  }
  return false
}

const reset = ()=>{
  read.value = {
    cats:[],
    _workpoint_from:null,
	  _workpoint_to: null,
	  _type: 2,
	  notes:null}
    prompt.value = false
}




init()
</script>
