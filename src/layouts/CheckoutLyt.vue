<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-cyan-10">
      <q-toolbar class="row justify-between items-center">
        <div class="text-bold">CheckOut </div>
        <div class="row">
          <q-btn color="white" round unelevated flat icon="sync" @click="init" />

          <div class="col row">
            <q-select class="col" dark
              dense filled label="Vista"
              v-model="viewdate"
              :options="optranges"
              @update:model-value="reloadView"/>
            <q-btn unelevated color="pink-5" icon="fas fa-calendar-day" dense v-if="viewdate.id=='C'"/>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <OrdersCheckoutComp />
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import { ref, onBeforeMount, computed, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import dayjs from 'dayjs';
  import RestockApi from 'src/api/RestockApi.js';
  import { useRestockStore } from 'stores/restock';
  import { useQuasar } from 'quasar';
  import OrdersCheckoutComp from 'src/components/OrdersCheckout.vue';
  import { $sktRestock, usrSkt } from 'boot/socket';

  const $route = useRoute();
  const $router = useRouter();
  const $restockStore = useRestockStore();
  const $q = useQuasar();

  const user_socket = usrSkt;

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

    const req = await RestockApi.index(viewdate.value.id);
    console.log(req);

    $restockStore.fillOrders(req.orders);

    viewstore.value = optstores.value[0];
    console.log("%cMainLayout listo!!","font-size:2em;color:orange;");
    $q.loading.hide();

    $sktRestock.connect();
    $sktRestock.emit("joinat", user_socket);

    $sktRestock.on("joineddashreq", sktJoinatRes);
    $sktRestock.on("creating", sktOrderCreate);
    $sktRestock.on("order_update", sktOrderUpdate);
    $sktRestock.on("order_changestate", sktOrderChangeState);
    $sktRestock.on("order_refresh", sktOrderOrderFresh);
    $sktRestock.on("orderpartition_refresh", sktOrderPartFresh);
  }

  const reloadView = (v) => $router.push(`/checkout?v=${v.id}`); // recarga el componente solo si el valor de la vista cambia

  const dispDateInit = computed(() => dateranges.value.from.format("YYYY/MM/DD")); // despliega la fecha de inicio
  const dispDateEnd = computed(() =>  dateranges.value.to.format("YYYY/MM/DD")); // despliega la fecha de fin

  watch(() => $route.query, () => { init(); }); // vigila cambios de la ruta

  const sktJoinatRes = skt => {
    console.log(
      `%c${skt.user.me.nick} de ${skt.from.alias} se ha unido a Restock (UID: ${skt.user.me.id})`,
      "background:#076F3E;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.1em;"
    );
  }

  const sktOrderCreate = async skt => {
    let order = skt.order;
    console.log(`Pedido ${order.id} iniciado`);
    let resp = await RestockApi.orderFresh(order.id);
    let data = resp.data.order;
    let oid = resp.data.oid;

    let cmd = $restockStore.addOrUpdate(oid,data);
  }

  const sktOrderUpdate = skt => { $restockStore.orderUpdate(skt); }

  const sktOrderChangeState = async skt => {
    let order = skt.order;
    console.log(`Refrescando orden ${order.id}`);
    let newstate = skt.state;
    let resp = await RestockApi.orderFresh(order.id);
    console.log(resp.data);
    let data = resp.data.order;
    let oid = resp.data.oid;

    let cmd = $restockStore.addOrUpdate(oid,data);

    if (data._status == 4){
      $q.notify({
        message:`El pedido <b>${order.id}</b> esta listo para CheckOut!!`,
        color:"positive",
        textColor:"white",
        position:"bottom",
        html:true,
        timeout:5000
      });
    }
  }

  const sktOrderOrderFresh = async skt => {
    console.log("REFRESHING BY SKT!!", skt);
    let order = skt.order;
    let resp = await RestockApi.orderFresh(order);
    console.log(resp);
    let data = resp.data.order;
    let oid = resp.data.oid;

    let cmd = $restockStore.addOrUpdate(oid,data);
  }

  const sktOrderPartFresh = async skt => {
    console.log("Partition refresh!!", skt);
    let order = skt.order;
    let resp = await RestockApi.orderFresh(order);
    console.log(resp);
    let data = resp.data.order;
    let partitions = data.partition;
    let oid = resp.data.oid;

    let cmd = $restockStore.addOrUpdate(oid,data);

    let partsDone = partitions.filter( p => p._status==4); // numero de particiones terminadas

    if(partsDone.length == partitions.length){
      $q.notify({
        message:`El pedido ${oid} ha finalizado particiones`,
        html:true,
        color:"purple-10",
        icon:"fa-solid fa-truck-ramp-box"
      });
    }else{
      $q.notify({
        message:`Particion lista para checkout en pedidido <b>${oid}</b>`,
        html:true,
        color:"pink-14",
        icon:"fa-solid fa-truck-ramp-box"
      });
    }
  }

  init();
  document.title="CheckOut";

</script>


<style>
  .sm{ border:1px dotted black; }
</style>
