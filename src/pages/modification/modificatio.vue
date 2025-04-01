<template>


  <q-page padding>
    <div class="row justify-between items-center">
      <div class="text-bold">Modificaciones </div>
      <div class="row">
        <q-btn color="dark" round unelevated flat icon="sync" @click="init" />

        <div class="col row">
          <q-separator spaced inset vertical dark />
          <q-btn color="primary" icon="event" @click="stateDate = !stateDate" flat round />
        </div>
      </div>
    </div>

    <q-table dense v-if="stores.length > 0" title="Modificacion Sucursales" :rows="stores"
      :columns="table.columnsPrimary" :pagination="table.pagination" hide-bottom>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
          <q-th auto-width />
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <q-btn size="sm" color="primary" round dense @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <q-table :rows="props.row.to_supply" :columns="table.columnsSeconday" dense :pagination="table.pagination"
                hide-bottom>
                <template v-slot:header="partition">
                  <q-tr :props="partition">
                    <q-th v-for="col in partition.cols" :key="col.name" :props="partition">
                      {{ col.label }}
                    </q-th>
                    <q-th auto-width />
                  </q-tr>
                </template>
                <template v-slot:body="partition">
                  <q-tr :props="partition">
                    <q-td v-for="col in partition.cols" :key="col.name" :props="partition">
                      {{ col.value }}
                    </q-td>
                    <q-td auto-width>
                      <q-btn size="sm" color="accent" round dense @click="partition.expand = !partition.expand"
                        :icon="partition.expand ? 'remove' : 'add'" />
                    </q-td>
                  </q-tr>
                  <q-tr v-show="partition.expand" :props="partition">
                    <q-td colspan="100%">
                      <div class="text-left">
                        <q-list bordered dense>
                          <q-item dense>
                            <q-item-section class="text-center">ID</q-item-section>
                            <q-item-section class="text-center">SALIDA</q-item-section>
                            <q-item-section class="text-center">ENTRADA</q-item-section>
                            <q-item-section class="text-center">ALMACEN</q-item-section>
                            <q-item-section class="text-center">Productos</q-item-section>
                          </q-item>
                        </q-list>
                        <q-list bordered v-for="(partition, index) in partition.row.partition" :key="index" dense>
                          <q-item clickable v-ripple
                            @click="mosEditPartition.state = !mosEditPartition.state; mosEditPartition.val = partition">
                            <q-item-section class="text-center">{{ partition.id }}</q-item-section>
                            <q-item-section class="text-center">{{ partition.invoice }}</q-item-section>
                            <q-item-section class="text-center">{{ partition.invoice_received }}</q-item-section>
                            <q-item-section class="text-center">{{ partition._warehouse }}</q-item-section>
                            <q-item-section class="text-center">{{ partition.products.length }}</q-item-section>
                          </q-item>
                        </q-list>
                      </div>
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-td>
        </q-tr>
      </template>






    </q-table>


  </q-page>


  <q-dialog v-model="stateDate">
    <q-card class="my-card">
      <q-card-section>
        <div class="q-pa-md">
          <div class="q-pb-sm">
            <!-- Desde: {{ fechas.from }} : Hasta {{ fechas.to }} -->
            {{ optranges.val }}
          </div>
          <q-date v-model="optranges.val" range minimal />
        </div>
      </q-card-section>
      <q-card-section>
        <q-card-actions align="right">
          <q-btn flat icon="close" color="negative" @click="stateDate = !stateDate" />
          <q-btn flat icon="check" color="positive" @click="buscas" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>




  <q-dialog v-model="mosEditPartition.state" persistent>
    <q-card style="width: 900px; max-width: 80vw;">
      <q-card-section class="items-center">
        <div class="text-bold text-center text-h6">Particion - {{ mosEditPartition.val.id }}</div>

        <div>
          <q-list bordered>
            <q-item>
              <q-item-section>
                <q-item-label class="text-center" caption>Factura</q-item-label>
                <q-item-label class="text-center text-bold">{{ mosEditPartition.val.invoice }}</q-item-label>
              </q-item-section>
              <q-separator spaced inset vertical dark />
              <q-item-section>
                <q-item-label class="text-center" caption>Entrada</q-item-label>
                <q-item-label class="text-center text-bold">{{ mosEditPartition.val.invoice_received }}</q-item-label>
              </q-item-section>
              <q-separator spaced inset vertical dark />
              <q-item-section>
                <q-item-label class="text-center" caption>Almacen</q-item-label>
                <q-item-label class="text-center text-bold">{{ mosEditPartition.val._warehouse }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

      </q-card-section>
      <q-card-section>
        <!-- {{ mosEditPartition.val.products }} -->
        <q-table :rows="mosEditPartition.val.products" :columns="table.columnsProduct" :pagination="table.pagination"
          hide-bottom>
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.label }}
              </q-th>
              <q-th auto-width />
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td>
                {{ props.row.code }}
              </q-td>
              <q-td>
                {{ props.row.description }}
              </q-td>
              <q-td class="text-center">
                {{ props.row.pivot.toDelivered * mult(props.row.pivot._supply_by, props.row) }}
                <q-popup-edit v-model="props.row.pivot.toDelivered" v-slot="scope">
                  <q-input type="number" v-model="scope.value" dense autofocus @keyup.enter="scope.set()" :min="1"  />
                  <div class="text-caption"> Surtido Por {{ supply_by(props.row.pivot._supply_by) }}</div>
                  Piezas: {{ scope.value * mult(props.row.pivot._supply_by, props.row) }}
                </q-popup-edit>
              </q-td>
              <q-td class="text-center">
                {{ props.row.pivot.toReceived * mult(props.row.pivot._supply_by, props.row) }}
                <q-popup-edit v-model="props.row.pivot.toReceived" v-slot="scope">
                  <q-input type="number" v-model="scope.value" dense autofocus @keyup.enter="scope.set()" :min="1" />
                  <div class="text-caption"> Surtido Por {{ supply_by(props.row.pivot._supply_by) }}</div>
                  Piezas: {{ scope.value * mult(props.row.pivot._supply_by, props.row) }}
                </q-popup-edit>
              </q-td>
              <q-td class="text-center">
                {{ Number(props.row.pivot.toDelivered - props.row.pivot.toReceived) * mult(props.row.pivot._supply_by,
                  props.row) }}
              </q-td>

              <!-- <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
              </q-td> -->
              <q-td auto-width>
                <q-btn :color="props.row.pivot.toDelivered >= 0 && props.row.pivot.toReceived > 0 ? 'grey' : 'negative'"
                  icon="delete" @click="delProd(props.row)"
                  :disable="props.row.pivot.toDelivered >= 0 && props.row.pivot.toReceived > 0" flat />
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Guardar" color="primary" @click="modifyInvoices = !modifyInvoices" />
      </q-card-actions>
    </q-card>
  </q-dialog>


  <q-dialog v-model="modifyInvoices" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="warning" color="white" text-color="negative" />
        <span class="q-ml-sm text-bold text-h6">Se realizara las modificaciones correspondientes</span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" v-close-popup />
        <q-btn flat label="Enviar" color="primary" @click="sendSave" />
      </q-card-actions>
    </q-card>
  </q-dialog>


</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useQuasar } from 'quasar';
import RestockApi from 'src/api/RestockApi.js';


const $q = useQuasar();
const $route = useRoute();

const stores = ref([]);

const optranges = ref({
  val: null
});

const mosEditPartition = ref({
  state: false,
  val: null
})
const stateDate = ref(false)
const modifyInvoices = ref(false)

const table = ref({
  columnsPrimary: [
    { name: 'name', align: 'left', label: 'Nombre', field: r => r.name },
    { name: 'alias', align: 'left', label: 'Alias', field: r => r.alias },
    { name: 'modified', align: 'left', label: 'Diferencias', field: r => r.to_supply.length }
  ],
  columnsSeconday: [
    { name: 'id', align: 'center', label: 'Pedido', field: r => r.id },
    { name: 'notes', align: 'left', label: 'Nota', field: r => r.notes },
    { name: 'create', align: 'left', label: 'Creador', field: r => `${r.created_by.names} ${r.created_by.surname_pat} ${r.created_by.surname_mat}` },
    { name: 'update', align: 'left', label: 'Ultima Act', field: r => dayjs(r.created_at).format("YYYY/MM/DD HH:mm:ss") },
  ],
  columnsProduct: [
    { name: 'code', align: 'left', label: 'Codigo', field: r => r.code },
    { name: 'description', align: 'left', label: 'Descripcion', field: r => r.description },
    { name: 'toDelivered', align: 'center', label: 'Salida', field: r => r.pivot.toDelivered * mult(r.pivot._supply_by, r) },
    { name: 'toReceived', align: 'center', label: 'Entrada', field: r => r.pivot.toReceived * mult(r.pivot._supply_by, r) },
    { name: 'Diference', align: 'center', label: 'Diferencia', field: r => Number(r.pivot.toDelivered - r.pivot.toReceived) * mult(r.pivot._supply_by, r) },
  ],
  pagination: { rowsPerPage: 0 }
})



const buscas = async () => {
  stateDate.value = false
  $q.loading.show({ message: 'Obteniendo Datos' })
  const req = await RestockApi.getDifferences({ date: optranges.value.val });
  if (req.status != 200) {
    console.log(req)
  } else {
    console.log(req)
    stores.value = req.data
  }
  $q.loading.hide();
}


const init = async () => {
  $q.loading.show({ message: "Cargado vista..." });
  optranges.value.val = dayjs(new Date()).format("YYYY/MM/DD")
  const req = await RestockApi.getDifferences({ date: optranges.value.val });
  if (req.status != 200) {
    console.log(req)
  } else {
    console.log(req)
    stores.value = req.data
  }
  $q.loading.hide();
}

const delProd = (product) => {
  stores.value.forEach(e => {
    e.to_supply.forEach(i => {
      let found = i.partition.find(p => p.id == product.pivot._partition);
      if (found) {
        let inx = found.products.findIndex(a => a.id == product.id)
        found.products.splice(inx, 1)
      }
    });
  });
  console.log(product.pivot)
}

const sendSave = async () => {
  $q.loading.show({message:'Realizando Cambios'})
  console.log(mosEditPartition.value.val)
  const resp = await RestockApi.correction(mosEditPartition.value.val)
  if(resp.status != 200){
    console.log(resp)
  }else{
    console.log(resp.data);
    $q.notify({message: `Se realizaron las modificaciones`,
    html: true, position: "center", icon: "done", timeout: 5000, color: "positive"})
    $q.loading.hide()
    // window.location.reload();
  }

}


const mult = (surtido, product) => {
  let mul;
  switch (surtido) {
    case 1:
      mul = 1
      break;
    case 2:
      mul = 12
      break;
    case 3:
      mul = product.pieces
  }
  return mul;
}
const supply_by = (surtido) => {
  let mul;
  switch (surtido) {
    case 1:
      mul = 'Pieza'
      break;
    case 2:
      mul = 'Docena'
      break;
    case 3:
      mul = 'Caja'
  }
  return mul;
}



init();

</script>
