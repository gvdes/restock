<template>
  <q-card class="full-width">
    <q-card-section class="row justify-between">
      <div>
        <div class="text-overline text-grey-7">Sucursal</div>
        <div class="text-h6">{{ head.from.alias }}</div>
      </div>
      <div class="q-px-lg text-center">
        <div class="text-overline text-grey-7">Folio</div>
        <div class="text-h6">{{ head.id }}</div>
      </div>
      <div class="text-right">
        <div class="text-overline text-grey-7">Agente</div>
        <div class="text-h6">{{ head.created_by.nick }}</div>
      </div>
    </q-card-section>

    <q-separator />

    <template v-if="loading">
      <q-card-section class="text-center">
        <q-spinner-dots size="50px" color="purple"/>
      </q-card-section>
    </template>
    <template v-else>
      <q-card-section horizontal class="row">
        <q-card-section class="col">
          <div>{{ cstate.name }}</div>
          <div class="text--1">{{ dayjs(logstate.updated_at).format("YYYY-MM-DD hh:mm A") }}</div>
          <div v-if="head.notes"><q-icon name="info" color="pink-5" size="20px"/>{{ head.notes }}</div>
        </q-card-section>

        <q-card-section v-if="cstate&&cstate.id>6">
          <div>Salida</div>
          <div class="text-bold text-indigo-10">{{ head.invoice }}</div>
        </q-card-section>

        <q-card-section v-if="cstate&&cstate.id>9">
          <div>Entrada</div>
          <div class="text-bold text-orange-10">{{ head.invoice }}</div>
        </q-card-section>

        <q-card-actions class="col" align="right" v-if="cstate&&cstate.id>1">
          <q-btn color="pink-6" icon="qr_code" dense v-if="cstate&&cstate.id>6" @click="genQRKey"/>
          <q-btn color="indigo-10" icon="print" dense v-if="cstate&&cstate.id>2">
            <q-menu class="bg-grey-1 text-indigo-10" style="min-width:250px;">
              <PrinterSelect @selected="printOrder"/>
            </q-menu>
          </q-btn>
          <q-btn color="positive" icon="start" dense label="Iniciar Surtido" @click="startSupply" v-if="cstate&&cstate.id==2" />
          <q-btn color="pink" icon="start" dense label="Emitir Salida" @click="wndGenInvoice.state=true" v-if="cstate&&cstate.id==6" />
        </q-card-actions>
      </q-card-section>

      <q-separator />

      <q-tabs
        v-model="tab"
        class="text-pink-5"
        dense no-caps
      >
        <q-tab name="log" label="Log" />
        <q-tab name="basket" label="Productos" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="log">
          <q-list>
            <q-item v-for="l in log" :key="l.id">
              <q-item-section avatar> {{l.id}} </q-item-section>
              <q-item-section>{{ l.name }}</q-item-section>
              <q-item-section>{{ l.pivot.details.responsable }}</q-item-section>
              <q-item-section>de {{ dayjs(l.pivot.created_at).format("h:mm a") }} a {{ dayjs(l.pivot.updated_at).format("h:mm a") }}</q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>

        <q-tab-panel name="basket">
          <template v-if="basket.length">
            <q-table row-key="id" flat
              :rows="basket"
              :columns="table.columns"
              :pagination="table.pagination"
              :filter="table.filter"
              :visible-columns="viewcols"
            >
              <template v-slot:top>
                <div class="full-width row items-center">
                  <div class="col text-dark">
                    <span class="text-h6"> <q-btn color="pink-5" icon="sync" @click="init" round dense flat /> Productos: {{basket.length}}</span>, <span class="text-bold">Piezas: {{totalpieces}}</span>
                  </div>
                  <q-input dense v-model="table.filter" placeholder="Buscar" input-class="text-uppercase" color="pink-5">
                    <template v-slot:append><q-icon name="search" /></template>
                  </q-input>

                  <q-btn color="secondary" icon="fas fa-eye" no-caps>
                    <q-menu style="min-width: 200px">
                      <q-list >
                        <q-item tag="label" v-ripple v-for="(col,idx) in table.columns" :key="idx">
                          <q-item-section>
                            <q-item-label>{{col.label}}</q-item-label>
                            <q-item-label caption>{{col.coldesc}}</q-item-label>
                          </q-item-section>
                          <q-item-section side top>
                            <q-toggle color="pink-5" v-model="viewcols" :val="col.name"/>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </template>
            </q-table>
          </template>
          <template v-else>
            <div class="text-center q-pa-lg text-h6 text-grey-7">Nada por aqui</div>
          </template>
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-card>

  <q-dialog v-model="wndQRCode.state">
    <q-card>
      <q-card-section class="text-h6 text-center">
        {{head.id}} - {{head.from.alias}}
      </q-card-section>
      <q-separator />
      <q-card-section class="text-center">
        <canvas id="qrcode"></canvas>
        <div class="text--2">{{wndQRCode.key}}</div>
      </q-card-section>
      <q-separator />
      <q-card-section align="center">
        <q-btn color="indigo-10" icon="print">
          <q-menu>
            <PrinterSelect @selected="printKey"/>
          </q-menu>
        </q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="wndGenInvoice.state">
    <q-card>
      <q-card-section class="row items-start">
        <q-avatar icon="warning" color="orange-14" text-color="white" />
        <div class="q-ml-md">
          <div class="text-h6">Emitir salida?</div>
          <div>La salida emitira la factura correspondiente en Factusol.</div>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" v-close-popup no-caps/>
        <q-btn flat label="Continuar" color="primary" @click="tryGenInvoice" no-caps/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
  import { ref, computed, onBeforeMount, nextTick } from 'vue';
  import RestockApi from 'src/api/RestockApi.js';
  import { useRoute, useRouter } from 'vue-router';
  import dayjs from 'dayjs';
  import { useQuasar } from 'quasar';
  import QRCode from 'qrcode';
  import PrinterSelect from 'src/components/PrinterSelect.vue';

  const $q = useQuasar();
  const $route = useRoute();

  const $props = defineProps({
    head:{type:Object, default:{}}
  });

  const $emit = defineEmits([ 'loaded', 'loading' ]);

  const head = ref($props.head);
  const loading = ref(true);
  const log = ref([]);
  const tab = ref("basket");
  const cstate = ref(null);
  const basket = ref([]);
  const startingStep = ref(false);
  const wndGenInvoice = ref({ state:false });
  const wndQRCode = ref({ state:false, key:null });
  const viewcols = ref([]);
  const table = ref({
    columns:[
      { name:'id', label:'ID', field:'id', align:"left", coldesc:"Identificador del producto (MySQL)" },
      { name:'code', label:'Codigo', field:'code', align:"left", coldesc:"Codigo principal del producto" },
      { name:'assocs', label:'Asociados', field: row => row.variants.length ? row.variants.map( p => p.barcode).join(', ') : null, align:"left", coldesc:"Codigos relacionados al codigo principal" },
      { name:'bcode', label:'Codigo de Barras', field:'barcode', align:"center", coldesc:"Codigo de barras principal" },
      { name:'locs', label:'Ubicacion', field: row => row.locations.length ? row.locations.map( l => l.path ).join(", ") :'--', align:"left", coldesc:"Ubicaciones en almacen general" },
      { name:'stocks', label:'Stock (pzs)', field: row => row.stocks.reduce((am,s) => am+(s.pivot.stock),0), sortable:true, classes:row => row.stocks.reduce((am,s) => am+(s.pivot.stock),0)<=0?'text-red text-bold':'text-bold text-primary', align:'center', coldesc:"Stock total en almacenes GENERALES (CEDIS+PAN)" },
      { name:'ipack', label:'PxC', field: row => typeof row.pivot.ipack=="number" ? row.pivot.ipack:row.pieces, align:"center", coldesc:"Unidades x Embalaje" },
      { name:'request', label:'Solicitud', field: row => row.pivot.amount, align:"center", coldesc:"Embalaje solicitado" },
      { name:'uspply', label:'Unidad', field: row => row.units.id==3? 'Cajas' :'Piezas', align:'left', coldesc:"Unidad de embalaje del producto"},
      { name:'delivery', label:'Salida (conteo)', field: row => row.pivot.toDelivered, align:'center', coldesc:"Embalaje surtido", sortable:true},
      {
        name:'reqinpzs',
        label:'Piezas',
        field: row => row.pivot._supply_by==3 ?
          ((typeof row.pivot.ipack=="number" ? row.pivot.ipack:row.pieces)*(typeof row.pivot.ipack=="number" ? row.pivot.toDelivered:row.pivot.amount)) :
          (typeof row.pivot.ipack=="number" ? row.pivot.toDelivered:row.pivot.amount),
        align:'center',
        coldesc:"Unidades totales en embalaje"
      },
      { name:'checkout', label:'Checkout', 'field':row => row.pivot.checkout ? 'OK':'---', align:"center", classes:row => row.pivot.checkout ? 'text-positive text-bold':'text-red', sortable:true, coldesc:"Revision del Administrador"},
      { name:'received', label:'Entrada (conteo)', field:row => row.pivot.toReceived, align:"center", coldesc:"Embalaje recibido" },
      { name:'descr', label:'Descripcion', field:'description', align:"left" },
      { name:'section', label:'Seccion', field:'section', align:"left" },
      { name:'family', label:'Familia', field:'family', align:"left" },
      { name:'category', label:'Categoria', field:'category', align:"left" },
    ],
    filter:'',
    pagination:{
      sortBy: 'locs',
      descending:false,
      rowsPerPage:20
    }
  });

  const totalpieces = computed(() => basket.value.reduce( (am,p) => (am + (p.pivot._supply_by==3 ? (p.pivot.amount*p.pieces): p.pivot.amount)) ,0));
  const showBtnNextState = computed(() => cstate.value && (cstate.value.id==2||cstate.value.id==6));
  const logstate = computed(() => log.value.find( l => l.id==cstate.value.id).pivot );

  const init = async () => {
    $emit("loading"); // blockea la venta modal del padre que contiene eeste componente
    loading.value = true;
    let response = await RestockApi.order(head.value.id);
    console.log(response.data);
    basket.value = response.data.products;
    log.value = response.data.log.map( l => { l.pivot.details = JSON.parse(l.pivot.details); return l; });
    cstate.value = response.data.status;
    wndQRCode.value.key = response.data.entry_key;
    loading.value = false;
    $emit("loaded"); // desblockea la venta modal del padre que contiene eeste componente
  }

  const startSupply = async () => {
    $emit("loading"); // blockea la venta modal del padre que contiene eeste componente
    startingStep.value=true;

    let newState = 3;
    let data = {id:head.value.id,state:newState};
    const response = await RestockApi.nextState(data);

    if(response.status==200){
      startingStep.value=false;
      $q.notify({ message:`Surtido iniciado para el pedido  ${head.value.id}`, icon:"done", position:"center", color:"teal" });
      init();
    }else{ alert(`Error ${response.status}: ${response.data}`); }

    $emit("loaded"); // desblockea la venta modal del padre que contiene eeste componente
  }

  const tryGenInvoice = async () => {
    $q.loading.show({ message:"Generando, espera..." });
    wndGenInvoice.value.state = false;
    const response = await RestockApi.genInvoice(head.value.id);
    console.log(response.data);

    if(response.status==200){
      if(response.data.invoice){
        init();
      }else{ alert("Error 500: Ocurrio un error inesperado :("); }
    }else{ alert(`Error ${response.status}: ${response.data}`); }

    $q.loading.hide();
  }

  const genQRKey = async () => {
    let url = `http://192.168.10.15:2200/#/checkin/${head.value.id}?key=${wndQRCode.value.key}`;
    wndQRCode.value.state=true;
    nextTick(() => QRCode.toCanvas(document.getElementById('qrcode'), url) );
  }

  const printKey = async (data) => {
    $q.loading.show({ message:"..." });
    console.log(data);
    const response = await RestockApi.printKey({ip:data.ip, port:data._port, order:head.value.id});
    if(response.status==200){
      let resp = response.data;
      $q.loading.hide();
      $q.notify({ message:"Impresion correcta", icon:"done", color:"positive", position:"top"});
    }else{ console.error(response); alert(`Error ${response.status}: ${response.data}`); }
  }

  const printOrder = async data => {
    $q.loading.show({ message:"..." });
    console.log(data);
    const response = await RestockApi.printForSupply({ip:data.ip, port:data._port, order:head.value.id});
    console.log(response);
    if(response.status==200){
      let resp = response.data;
      $q.loading.hide();
      $q.notify({ message:"Impresion correcta", icon:"done", color:"positive", position:"top"});
    }else{ console.error(response); alert(`Error ${response.status}: ${response.data}`); }
  }

  onBeforeMount(() => viewcols.value = table.value.columns.map( c => c.name ) );

  init();
</script>
