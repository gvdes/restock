<template>
  <q-page padding class="bg-grey-2">
    <q-table flat bordered row-key="id"
      :rows="ordersdb"
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
  </q-page>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import dayjs from 'dayjs';
  import RestockApi from 'src/api/RestockApi.js';
  import { useRestockStore } from 'stores/restock';
  import OrderViewer from 'src/components/OrderViewer.vue';

  const $route = useRoute();
  const $router = useRouter();
  const $restockStore = useRestockStore();
  const colorCellState = ['text-grey-5 text-bold','text-bold text-h6 text-red','text-indigo', '4', '5','text-bold text-pink-7','text-orange-8','8','text-primary','text-positive'];

  const table = ref({
    columns:[
      { name:'id', label:'Folio', field:'id', align:"center", sortable:true },
      {
        name:'state',
        label:'Estado',
        field: row => (row.log.length==1 ? row.log[0].name:row.log[row.log.length-1].name),
        align:"left",
        sortable: true,
        sort: (a, b, rowA, rowB) => parseInt(rowA._status) - parseInt(rowB._status),
        classes: row => colorCellState[(row._status-1)],
      },
      { name:'laststate', label:'Ultima actividad', field: row => dayjs(row.log.find(l => l.id==row.status.id).pivot.updated_at).format('YYYY-MM-DD hh:mm A'), align:"left" },
      { name:'from', label:'Sucursal', field: row => row.from.name.toUpperCase(), align:"left", sortable: true },
      { name:'notes', label:'Notas', field: row => row.notes, align:"left", classes: row => row.notes ? 'text-orange text-bold':'' },
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

  const orderViewer = ref({
    state:false,
    head:null,
    block:true
  });

  const ordersSize = computed(() => $restockStore.ordersSize);
  const ordersdb = computed(() => $restockStore.ordersdb);

  const setOrderViewer = async (evt, row, idx) => {
    orderViewer.value.head=row;
    orderViewer.value.state=true;
  }
</script>
