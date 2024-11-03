<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-cyan-10">
      <q-toolbar class="row justify-between items-center">
        <div class="text-bold">CheckOut </div>
        <div class="row">
          <q-btn color="white" round unelevated flat icon="sync" @click="init" />

          <div class="col row">
            <q-select v-model="dashvalue" :options="dashboards" filled dense />
            <q-separator spaced inset vertical dark />
            <!-- <q-select class="col"
              dense filled label="Vista"
              v-model="viewdate"
              :options="optranges"
              @update:model-value="reloadView"
            /> -->
            <q-btn color="primary" icon="event" @click="stateDate = !stateDate" flat round />

            <!-- <q-btn unelevated color="pink-5" icon="fa-calendar-day" dense v-if="viewdate.id=='C'" /> -->
          </div>
        </div>
      </q-toolbar>
    </q-header>

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

    <q-page-container>
      <OrdersCheckoutComp :dash="dashvalue" />
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
  { 'id': 0, 'alias': 'Todas' },
  { 'id': 1, 'alias': 'CEDIS', '_state': 1 },
  { 'id': 2, 'alias': 'SP1', '_state': 1 },
]);

const optranges = ref({
  val: null
});

const stateDate = ref(false)



const dashboards = [
  { 'id': 0, 'label': 'TODAS' },
  { 'id': 1, 'label': 'CEDIS SN PABLO', '_state': 1 },
  { 'id': 2, 'label': 'CEDIS TEXCOCO', '_state': 1 },
  { 'id': 16, 'label': 'CEDIS BRASIL', '_state': 1 },
  { 'id': 24, 'label': 'CEDIS BOLIVIA', '_state': 1 },
];

const dashvalue = ref({ 'id': 1, 'label': 'CEDIS SN PABLO', '_state': 1 })
const viewstore = ref(null);
const viewdate = ref(null);
const dateranges = ref({
  from: dayjs(Date.now()).startOf('day'),
  to: dayjs(Date.now()).startOf('day')
});

const init = async () => {
  $q.loading.show({ message: "Cargado vista..." });
  console.log("%cIniciando MainLayout...", "font-size:2em;color:orange;");

  // let v = $route.query.v ?? "day"; // define el valor de la vista
  // console.log(v)
  // let r = optranges.value.findIndex( o => o.id==v ); // busca que sea un valor valido (day||week||month)
  // let idx = (r>=0) ? r:0; // obtiene el indice correspondiente al valor hayado, de lo contrario devuelve 0 (day)

  // viewdate.value = optranges.value[idx]; // setea el valor del select de la vista
  // dateranges.value.from = dayjs(Date.now()).startOf(viewdate.value.id); // setea el valor de inicio de la vista
  optranges.value.val = dayjs(new Date()).format("YYYY/MM/DD")


  const req = await RestockApi.index({ date: optranges.value.val });
  console.log(req);

  $restockStore.fillOrders(req.orders);
  $restockStore.fillResume(req.resume);
  $restockStore.fillPrinters(req.printers);

  viewstore.value = optstores.value[0];
  console.log("%cMainLayout listo!!", "font-size:2em;color:orange;");
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

// const reloadView = (v) => $router.push(`/checkout?v=${v.id}`); // recarga el componente solo si el valor de la vista cambia

const reloadView = (v) => {
  let dash = $route.query.d ? (dashboards.includes($route.query.d) ? $route.query.d : "all") : "all";
  $router.push(`/checkout?v=${v.id}&d=${dash}`);
} // recarga el componente solo si el valor de la vista cambia


const dispDateInit = computed(() => dateranges.value.from.format("YYYY/MM/DD")); // despliega la fecha de inicio
const dispDateEnd = computed(() => dateranges.value.to.format("YYYY/MM/DD")); // despliega la fecha de fin

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

  let cmd = $restockStore.addOrUpdate(oid, data);
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

  let cmd = $restockStore.addOrUpdate(oid, data);

  if (data._status == 4) {
    $q.notify({
      message: `El pedido <b>${order.id}</b> esta listo para CheckOut!!`,
      color: "positive",
      textColor: "white",
      position: "bottom",
      html: true,
      timeout: 5000
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

  let cmd = $restockStore.addOrUpdate(oid, data);
}

const sktOrderPartFresh = async skt => {
  console.log("Partition refresh!!", skt);
  let order = skt.order;
  let resp = await RestockApi.orderFresh(order);
  console.log(resp);
  let data = resp.data.order;
  let partitions = data.partition;
  let oid = resp.data.oid;

  let cmd = $restockStore.addOrUpdate(oid, data);

  let partsDone = partitions.filter(p => p._status == 4); // numero de particiones terminadas

  if (partsDone.length == partitions.length) {
    $q.notify({
      message: `El pedido ${oid} ha finalizado particiones`,
      html: true,
      color: "purple-10",
      icon: "fa-solid fa-truck-ramp-box"
    });
  } else {
    $q.notify({
      message: `Particion lista para checkout en pedidido <b>${oid}</b>`,
      html: true,
      color: "pink-14",
      icon: "fa-solid fa-truck-ramp-box"
    });
  }
}
const buscas = async () => {
  stateDate.value = false

  $q.loading.show({ message: 'Obteniendo Datos' })
  const req = await RestockApi.index({ date: optranges.value.val });
  console.log(req);

  $restockStore.fillOrders(req.orders);
  $restockStore.fillResume(req.resume);
  $restockStore.fillPrinters(req.printers);

  viewstore.value = optstores.value[0];
  console.log("%cMainLayout listo!!", "font-size:2em;color:orange;");
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

init();
document.title = "CheckOut";

</script>


<style>
.sm {
  border: 1px dotted black;
}
</style>
