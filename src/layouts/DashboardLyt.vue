<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="transparent text-dark">
      <q-toolbar class="row justify-between items-center">
        <div class="text-bold">Dashboard </div>
        <div class="row">
          <q-btn color="pink-5" round unelevated flat icon="sync" @click="init" />

          <div class="col row">
            <q-select class="col"
              dense filled label="Vista"
              v-model="viewdate"
              :options="optranges"
              @update:model-value="reloadView"
            />
            <q-btn unelevated color="pink-5" icon="fas fa-calendar-day" dense v-if="viewdate.id=='C'" />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <AdminDashboardComp @reload="init"/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import { ref, computed, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import dayjs from 'dayjs';
  import RestockApi from 'src/api/RestockApi.js';
  import { useRestockStore } from 'stores/restock';
  import { useQuasar } from 'quasar';
  import AdminDashboardComp from 'src/components/AdminDashboard.vue';

  const $route = useRoute();
  const $router = useRouter();
  const $restockStore = useRestockStore();
  const $q = useQuasar();

  const optstores = ref([
    { 'id':0, 'alias':'Todas'},
    { 'id':1, 'alias':'CEDIS', '_state':1},
    { 'id':2, 'alias':'SP1', '_state':1},
  ]);

  const optranges = ref([
    { id:"day", label:"Hoy" },
    { id:"week", label:"Semana" },
    { id:"month", label:"Mes" },
    { id:'C', label:'otra ...', disable:true},
  ]);

  const dashboards = ["p2","P2","p3","P3","bol","BOL","sap","SAP"];

  const viewstore = ref(null);
  const viewdate = ref(null);

  const dateranges = ref({
    from:dayjs( Date.now() ).startOf('day'),
    to:dayjs( Date.now() ).startOf('day')
  });

  const init = async () => {
    $q.loading.show({ message:"Cargado vista..." });
    console.log("%cIniciando MainLayout...","font-size:2em;color:orange;");

    let v = $route.query.v ?? "day"; // define el valor de la vista
    let r = optranges.value.findIndex( o => o.id==v ); // busca que sea un valor valido (day||week||month)
    let idx = (r>=0) ? r:0; // obtiene el indice correspondiente al valor hayado, de lo contrario devuelve 0 (day)

    viewdate.value = optranges.value[idx]; // setea el valor del select de la vista
    dateranges.value.from = dayjs(Date.now()).startOf(viewdate.value.id); // setea el valor de inicio de la vista

    let dash = $route.query.d ? (dashboards.includes($route.query.d) ? $route.query.d : "all") : "all";
    console.log(dash);

    const req = await RestockApi.index(viewdate.value.id,dash);
    console.log(req);

    $restockStore.fillOrders(req.orders);
    $restockStore.fillResume(req.resume);
    $restockStore.fillPrinters(req.printers);

    viewstore.value = optstores.value[0];
    console.log("%cMainLayout listo!!","font-size:2em;color:orange;");
    $q.loading.hide();
  }

  const reloadView = (v) => {
    let dash = $route.query.d ? (dashboards.includes($route.query.d) ? $route.query.d : "all") : "all";
    $router.push(`/dashboard?v=${v.id}&d=${dash}`);
  } // recarga el componente solo si el valor de la vista cambia

  const dispDateInit = computed(() => dateranges.value.from.format("YYYY/MM/DD")); // despliega la fecha de inicio
  const dispDateEnd = computed(() =>  dateranges.value.to.format("YYYY/MM/DD")); // despliega la fecha de fin

  watch(() => $route.query, () => { init(); }); // vigila cambios de la ruta

  init();
  document.title="Dashboard";
</script>


<style>
  .sm{ border:1px dotted black; }
</style>
