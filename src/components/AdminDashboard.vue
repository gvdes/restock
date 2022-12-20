<template>
  <q-page padding class="bg-grey-2">

    <div v-if="orderserrors.length" class="bg-negative text-white q-pa-md q-mb-md">
      <div class="text-warning text-bold">Los siguientes folios tienen errores que no permiten ser listados en la tabla.</div>
      <div class="text-h6">{{orderserrors.map( o => o.id ).join('id')}}</div>
      <div class="text--2">Errores comunes: Sin log, Sin fecha, Estatus desconocido</div>
    </div>

    <div class="row q-mb-md items-start justify-around">
      <q-btn stack no-caps class="q-py-md" v-for="stat in stats" :key="stat.key" @click="report(stat.key)" :color="stat.total==0?'teal-10':'pink-13'" :disabled="stat.total==0">
        <div class="text-left">
          <div class="text-h5">{{ stat.total }}</div>
          <div class="text--2">{{ stat.name }}</div>
        </div>
      </q-btn>
    </div>

    <q-table flat bordered row-key="id"
      :rows="ordersok"
      :columns="table.columns"
      :filter="table.filter"
      :pagination="table.pagination"
      @row-click="setOrderViewer"
    >
      <template v-slot:top>
        <div class="full-width row items-center">
          <div class="col text-h6 text-dark">Pedidos: {{ordersSize}}</div>
          <q-input dense v-model="table.filter" input-class="text-uppercase" placeholder="Buscar" color="pink-5">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </template>
    </q-table>

    <q-dialog full-width
      v-model="orderViewer.state"
      :persistent="orderViewer.block"
      :no-esc-dismiss="orderViewer.block"
      :no-backdrop-dismiss="orderViewer.block"
    >
      <OrderViewer :head="orderViewer.head" @loaded="orderViewer.block=false" @loading="orderViewer.block=true"/>
    </q-dialog>

    <q-dialog v-model="wndReport.state">
      <TableReport :rows="wndReport.data" :name="wndReport.name" :type="wndReport.type" @cardResumeActived="reloadDashboard"/>
    </q-dialog>
  </q-page>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import dayjs from 'dayjs';
  import { useQuasar} from 'quasar';
  import RestockApi from 'src/api/RestockApi.js';
  import { useRestockStore } from 'stores/restock';
  import OrderViewer from 'src/components/OrderViewer.vue';
  import TableReport from 'src/components/TableReport.vue'

  const $route = useRoute();
  const $router = useRouter();
  const $restockStore = useRestockStore();
  const $q = useQuasar();
  const colorCellState = [
    'text-grey-5 text-bold',
    'text-bold text-h6 text-red',
    'text-indigo',
    '4',
    '5',
    'text-bold text-pink-7',
    'text-orange-8',
    '8',
    'text-primary',
    'text-positive'
  ];

  const $emit = defineEmits(["reloadDashboard"]);
  const table = ref({
    columns:[
      { name:'id', label:'Folio', field:'id', align:"center", sortable:true },
      {
        name:'state',
        label:'Estado',
        field: row => (row.log.length==1 ? row.log[0].name : row.log[row.log.length-1].name),
        align:"left",
        sortable: true,
        sort: (a, b, rowA, rowB) => parseInt(rowA._status) - parseInt(rowB._status),
        classes: row => colorCellState[(row._status-1)],
      },
      { name:'laststate', label:'Ultima actividad', field: row => dayjs(row.log.find(l => l.id==row.status.id).pivot.updated_at).format('YYYY-MM-DD hh:mm A'), align:"left" },
      { name:'from', label:'Sucursal', field: row => row.from.name.toUpperCase(), align:"left", sortable: true },
      { name:'to', label:'Destino', field: row => row.to.name.toUpperCase(), align:"left", sortable: true },
      { name:'notes', label:'Notas', field: row => row.notes, align:"left", classes: row => row.notes ? 'text-orange text-bold':'' },
      { name:'tmodels', label:'Modelos', field: row => row.products_count, align:"center", sortable:true },
      { name:'invoice', label:'Salida', field: row => row.invoice??null, align:"center", classes:"text-bold"  },
      { name:'entry', label:'Entrada', field: row => row.invoice_received??null, align:"center", classes:"text-bold" },
    ],
    filter:'',
    pagination:{
      sortBy: 'desc',
      descending:false,
      rowsPerPage:20
    }
  });
  const wndReport = ref({ state:false, title:"", data:null, name:null, type:null });

  const orderViewer = ref({
    state:false,
    head:null,
    block:true
  });

  const ordersSize = computed(() => $restockStore.ordersSize);
  const ordersok = computed(() => $restockStore.ordersok);
  const orderserrors = computed(() => $restockStore.orderserrors);
  const stats = computed(() => $restockStore.resume);

  const setOrderViewer = async (evt, row, idx) => {
    orderViewer.value.head=row;
    orderViewer.value.state=true;
  }

  const report = async (key) => {
    $q.loading.show({ message:"cargando..."+key });
    const response = await RestockApi.report(key);
    console.log(response.data);
    wndReport.value.data = response.data.rows;
    wndReport.value.name = response.data.name;
    wndReport.value.type = key;
    wndReport.value.state = true;
    $q.loading.hide();
  }

  const reloadDashboard = () => {
    wndReport.value.state=false;
    wndReport.state=false;
    $emit("reload");
  }

</script>
