<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-yellow text-dark">
      <q-toolbar class="row justify-between items-center">
        <div class="text-bold">Dashboard </div>
        <div class="row">
          <q-btn color="dark" round unelevated flat icon="sync" @click="init" />

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
  import { $sktRestock } from 'boot/socket';

  const $route = useRoute();
  const $router = useRouter();
  const $restockStore = useRestockStore();
  const $q = useQuasar();

  const user_socket = {
    profile: {
      me: {
        id: 1,
        nick: 'root',
        picture: '',
        names: 'Restock',
        surname_pat: 'Master',
        surname_mat: 'Dashboard',
        change_password: false,
        _rol: 1
      },
      workpoint: {
        id: 1,
        name: 'CEDIS San Pablo',
        alias: 'CEDISSAP',
        dominio: '192.168.10.53:1619',
        _client: 359,
        active: 1,
        _port: '1619'
      }
    },
    workpoint: {
      id: 1,
      name: 'CEDIS San Pablo',
      alias: 'CEDISSAP',
      dominio: '192.168.10.53:1619',
      _client: 359,
      active: 1,
      _port: '1619'
    },
    room: 'admin'
  }

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

    $sktRestock.connect();
    $sktRestock.emit("joinat", user_socket);

    $sktRestock.on("joineddashreq", sktJoinatRes);
    $sktRestock.on("creating", sktOrderCreate);
    $sktRestock.on("order_update", sktOrderUpdate);
    $sktRestock.on("order_changestate", sktOrderChangeState);
  }

  const reloadView = (v) => {
    let dash = $route.query.d ? (dashboards.includes($route.query.d) ? $route.query.d : "all") : "all";
    $router.push(`/dashboard?v=${v.id}&d=${dash}`);
  } // recarga el componente solo si el valor de la vista cambia

  const dispDateInit = computed(() => dateranges.value.from.format("YYYY/MM/DD")); // despliega la fecha de inicio
  const dispDateEnd = computed(() =>  dateranges.value.to.format("YYYY/MM/DD")); // despliega la fecha de fin

  const sktJoinatRes = skt => {
    console.log(
      `%c${skt.user.me.nick} de ${skt.from.alias} se ha unido a Restock (UID: ${skt.user.me.id})`,
      "background:#076F3E;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.1em;"
    );
  }

  const sktOrderCreate = async skt => {
    let order = skt.order;
    let resp = await RestockApi.orderFresh(order.id);
    let data = resp.data.order;
    let oid = resp.data.oid;

    let cmd = $restockStore.addOrUpdate(oid,data);
  }

  const sktOrderUpdate = skt => { $restockStore.orderUpdate(skt); }

  const sktOrderChangeState = async skt => {
    let order = skt.order;
    let newstate = skt.state;
    let resp = await RestockApi.orderFresh(order.id);
    let data = resp.data.order;
    let oid = resp.data.oid;

    let cmd = $restockStore.addOrUpdate(oid,data);

    if (newstate.id == 2){
      $q.notify({
        message:`El pedido <b>${order.id}</b> esta listo para iniciar surtido!!`,
        color:"positive",
        textColor:"white",
        position:"bottom",
        html:true,
        timeout:5000
      });
    }
  }

  watch(() => $route.query, () => { init(); }); // vigila cambios de la ruta

  init();
  document.title="Dashboard";
</script>


<style>
  .sm{ border:1px dotted black; }
</style>
