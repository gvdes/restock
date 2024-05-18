<template>
  <q-page padding>
    <q-table flat row-key="id"
      :rows="ordersdb"
      :columns="table.columns"
      :filter="table.filter"
      :pagination="table.pagination"
      @row-click="open"
    >
      <template v-slot:top>
        <div class="full-width row items-center">
          <div class="col text-h6 text-dark">Pedidos: {{ordersdb.length}}</div>
          <q-input dense v-model="table.filter" input-class="text-uppercase" placeholder="Buscar" color="pink-5">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </template>
    </q-table>
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
  const colorCellState = ['text-grey-5 text-bold','text-bold text-h6 text-red','text-indigo', '4', '5','6','text-bold text-orange','8','text-primary','text-positive'];

  const table = ref({
    columns:[
      { name:'id', label:'Folio', field:'id', align:"center" },
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
      { name:'models', label:'Modelos', field:'products_count', align:"center" },
      { name:'notes', label:'Notas', field: row => row.notes, align:"left" },
      { name:'invoice', label:'Salida', field: row => row.invoice??'--', align:"center" },
    ],
    filter:'',
    pagination:{
      sortBy: 'desc',
      descending:false,
      rowsPerPage:20
    }
  });

  const open = (q,row,c) => $router.push(`/checkout/${row.id}`);

  // const ordersSize = computed(() => $restockStore.ordersSize);
  const ordersdb = computed(() => $restockStore.ordersdb.filter(o => o._status > 2));

  const setOrderViewer = async (evt, row, idx) => {
    orderViewer.value.head=row;
    orderViewer.value.state=true;
  }
</script>
