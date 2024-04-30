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

    <q-card-section class="row justify-between">
      <div class="text-center">
        <div class="text-overline text-grey-7">Fecha</div>
        <div class="text-h6">{{ dayjs(head.updated_at).format("YYYY-MM-DD") }}</div>
      </div>
      <div v-if="head.notes" class="text-center">
        <div class="text-overline text-grey-7 col">Notas</div>
        <div class="text-h6">{{ head.notes }}</div>
      </div>
      <div class="flex item-center ">
        <q-btn color="positive" icon="start" dense label="Iniciar Surtido" @click="selsupply"
          v-if="cstate && cstate.id == 2" flat rounded />
        <q-btn color="indigo-10" icon="print" dense v-if="cstate && cstate.id > 2">
          <q-menu class="bg-grey-1 text-indigo-10" style="min-width:250px;">
            <PrinterSelect @selected="printForSupply" />
          </q-menu>
        </q-btn>
      </div>
    </q-card-section>



    <q-separator />



    <template v-if="loading">
      <q-card-section class="text-center">
        <q-spinner-dots size="50px" color="purple" />
      </q-card-section>
    </template>


    <template v-else>
      <q-separator />

      <q-tabs v-model="tab" class="text-pink-5" dense no-caps>
        <q-tab name="log" label="Log" />
        <q-tab name="basket" label="Productos" />
        <q-tab name="supliers" label="Surtidores" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="log">
          <q-list>
            <q-item v-for="l in log" :key="l.id">
              <q-item-section avatar> {{ l.id }} </q-item-section>
              <q-item-section>{{ l.name }}</q-item-section>
              <q-item-section>{{ l.pivot.details.responsable }}</q-item-section>
              <q-item-section>de {{ dayjs(l.pivot.created_at).format("h:mm a") }} a {{
                dayjs(l.pivot.updated_at).format("h:mm a") }}</q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>

        <q-tab-panel name="basket">
          <template v-if="basket.length">
            <q-table row-key="id" flat :rows="basket" :columns="table.columns" :pagination="table.pagination"
              :filter="table.filter" :visible-columns="viewcols">
              <template v-slot:top>
                <div class="full-width row items-center">
                  <div class="col text-dark">
                    <span class="text-h6"> <q-btn color="pink-5" icon="sync" @click="init" round dense flat />
                      Productos: {{ basket.length }}</span>, <span class="text-bold">Piezas: {{ totalpieces }}</span>
                  </div>
                  <q-input dense v-model="table.filter" placeholder="Buscar" input-class="text-uppercase"
                    color="pink-5">
                    <template v-slot:append><q-icon name="search" /></template>
                  </q-input>

                  <q-btn color="secondary" icon="fas fa-eye" no-caps>
                    <q-menu style="min-width: 200px">
                      <q-list>
                        <q-item tag="label" v-ripple v-for="(col, idx) in table.columns" :key="idx">
                          <q-item-section>
                            <q-item-label>{{ col.label }}</q-item-label>
                            <q-item-label caption>{{ col.coldesc }}</q-item-label>
                          </q-item-section>
                          <q-item-section side top>
                            <q-toggle color="pink-5" v-model="viewcols" :val="col.name" />
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

        <q-tab-panel name="supliers">
          <q-table :rows="partition" row-key="id" dense flat bordered grid hide-header  >
            <template v-slot:item="props">
              <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
                <q-card flat bordered>
                  <q-card-section class="text-center">
                    Surtidor
                    <br>
                    <strong>{{ props.row._suplier }}</strong>
                    <br>
                    <div class="text-overline text-grey-7"> <q-badge color="primary" text-color="white"
                        :label="props.row.status.name" /></div>
                  </q-card-section>
                  <q-separator />

                  <q-card-section class="flex justify-between">
                    <div>Salida</div>
                    <div>Entrada</div>
                    <div>Herramientas</div>

                  </q-card-section>
                  <q-separator />
                  <q-card-section class="flex justify-between">
                    <div>{{ props.row.invoice }}</div>
                    <div>{{ props.row.invoice_received }}</div>
                    <div class="row">
                      <div class="col" v-if="props.row._status == 6"> <q-btn color="pink" label="Emitir Factura"
                          class="q-px-xl q-py-xs" size="10px" padding="5px 2px" icon-right="start" flat
                          @click="genvoice(props.row)" /> </div>
                      <div class="col" v-if="props.row._status >= 7"> <q-btn color="pink" icon="qr_code"
                          @click="genQRKey(props.row.entry_key)" flat /></div>
                      <div class="col" v-if="props.row._status >= 7"> <q-btn color="pink" icon="list"
                          @click="pdf(props.row.invoice, props.row.entry_key)" flat /></div>
                    </div>

                  </q-card-section>
                </q-card>
              </div>
            </template>


          </q-table>

        </q-tab-panel>

      </q-tab-panels>
    </template>
  </q-card>

  <q-dialog v-model="wndQRCode.state">
    <q-card>
      <q-card-section class="text-h6 text-center">
        {{ head.id }} - {{ head.from.alias }}
      </q-card-section>
      <q-separator />
      <q-card-section class="text-center">
        <canvas id="qrcode"></canvas>
        <div class="text--2">{{ wndQRCode.key }}</div>
      </q-card-section>
      <q-separator />
      <q-card-section align="center">
        <q-btn color="indigo-10" icon="print">
          <q-menu>
            <PrinterSelect @selected="printKey" />
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
      <q-card-section>
        <div>
          <div class="text-center text-h6">Surtidor</div>
          <div class="text-center text-bold text-subtitle2 text-overline ">{{ selSupply._suplier }}</div>
        </div>
      </q-card-section>
      <q-card-section v-if="selSupply">
        <q-select v-model="chof.val" :options="chof.opts" label="Chofer" filled option-label="complete_name" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" v-close-popup no-caps />
        <q-btn flat label="Continuar" color="primary" @click="tryGenInvoice" no-caps :disable="chof.val == null" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="viewSupply.state" persistent>
    <q-card style="width: 400px;">
      <q-card-section class="row items-center">
        <q-select v-model="supply.val" :options="supply.filter" label="SELECCIONA SURTIDOR" option-label="complete_name"
          filled multiple counter max-values="5" hint="Maximo 5 colaboradores" style="width: 100%" @filter="filterFn"
          input-debounce="0" use-input use-chips />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Continuar" color="primary" @click="startSupply" :disable="supply.val.length == 0" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script setup>
import { ref, computed, onBeforeMount, nextTick } from 'vue';
import RestockApi from 'src/api/RestockApi.js';
import AssitApi from 'src/api/AssistApi.js';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useQuasar } from 'quasar';
import QRCode from 'qrcode';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import PrinterSelect from 'src/components/PrinterSelect.vue';

const $q = useQuasar();
const $route = useRoute();

const $props = defineProps({
  head: { type: Object, default: {} }
});

const supply = ref({
  opts: [],
  val: [],
  filter: []
})
const chof = ref({
  opts: null,
  val: null
})

const selSupply = ref(null)


const $emit = defineEmits(['loaded', 'loading']);

const head = ref($props.head);
const loading = ref(true);
const log = ref([]);
const tab = ref("supliers");
const cstate = ref(null);
const basket = ref([]);
const startingStep = ref(false);
const wndGenInvoice = ref({ state: false });
const wndQRCode = ref({ state: false, key: null });
const partition = ref(null);
const viewSupply = ref({
  state: false
});
const invoice = ref(null);
const viewcols = ref([]);
const table = ref({
  columns: [
    { name: 'id', label: 'ID', field: 'id', align: "left", coldesc: "Identificador del producto (MySQL)" },
    { name: 'code', label: 'Codigo', field: 'code', align: "left", coldesc: "Codigo principal del producto" },
    { name: 'assocs', label: 'Asociados', field: row => row.variants.length ? row.variants.map(p => p.barcode).join(', ') : null, align: "left", coldesc: "Codigos relacionados al codigo principal" },
    { name: 'bcode', label: 'Codigo de Barras', field: 'barcode', align: "center", coldesc: "Codigo de barras principal" },
    { name: 'locs', label: 'Ubicacion', field: row => row.locations.length ? row.locations.map(l => l.path).join(", ") : '--', align: "left", coldesc: "Ubicaciones en almacen general" },
    { name: 'stocks', label: 'Stock (pzs)', field: row => row.stocks.reduce((am, s) => am + (s.pivot.stock), 0), sortable: true, classes: row => row.stocks.reduce((am, s) => am + (s.pivot.stock), 0) <= 0 ? 'text-red text-bold' : 'text-bold text-primary', align: 'center', coldesc: "Stock total en almacenes GENERALES (CEDIS+PAN)" },
    { name: 'ipack', label: 'PxC', field: row => typeof row.pivot.ipack == "number" ? row.pivot.ipack : row.pieces, align: "center", coldesc: "Unidades x Embalaje" },
    { name: 'request', label: 'Solicitud', field: row => row.pivot.amount, align: "center", coldesc: "Embalaje solicitado" },
    { name: 'uspply', label: 'Unidad', field: row => row.units.id == 3 ? 'Cajas' : 'Piezas', align: 'left', coldesc: "Unidad de embalaje del producto" },
    { name: 'delivery', label: 'Salida (conteo)', field: row => row.pivot.toDelivered, align: 'center', coldesc: "Embalaje surtido", sortable: true },
    {
      name: 'reqinpzs',
      label: 'Piezas',
      field: row => row.pivot._supply_by == 3 ?
        ((typeof row.pivot.ipack == "number" ? row.pivot.ipack : row.pieces) * (typeof row.pivot.ipack == "number" ? row.pivot.toDelivered : row.pivot.amount)) :
        (typeof row.pivot.ipack == "number" ? row.pivot.toDelivered : row.pivot.amount),
      align: 'center',
      coldesc: "Unidades totales en embalaje"
    },
    { name: 'checkout', label: 'Checkout', 'field': row => row.pivot.checkout ? 'OK' : '---', align: "center", classes: row => row.pivot.checkout ? 'text-positive text-bold' : 'text-red', sortable: true, coldesc: "Revision del Administrador" },
    { name: 'received', label: 'Entrada (conteo)', field: row => row.pivot.toReceived, align: "center", coldesc: "Embalaje recibido" },
    { name: 'descr', label: 'Descripcion', field: 'description', align: "left" },
    { name: 'section', label: 'Seccion', field: 'section', align: "left" },
    { name: 'family', label: 'Familia', field: 'family', align: "left" },
    { name: 'category', label: 'Categoria', field: 'category', align: "left" },
  ],
  filter: '',
  pagination: {
    sortBy: 'locs',
    descending: false,
    rowsPerPage: 20
  }
});

const totalpieces = computed(() => basket.value.reduce((am, p) => (am + (p.pivot._supply_by == 3 ? (p.pivot.amount * p.pieces) : p.pivot.amount)), 0));
const showBtnNextState = computed(() => cstate.value && (cstate.value.id == 2 || cstate.value.id == 6));
const logstate = computed(() => log.value.find(l => l.id == cstate.value.id).pivot);
const enableInvoice = computed(() => partition.value.map(e => e._status).includes(6))


const init = async () => {
  $emit("loading"); // blockea la venta modal del padre que contiene eeste componente
  loading.value = true;
  let response = await RestockApi.order(head.value.id);
  console.log(response.data);
  basket.value = response.data.products;
  log.value = response.data.log.map(l => { l.pivot.details = JSON.parse(l.pivot.details); return l; });
  partition.value = response.data.partition
  cstate.value = response.data.status;
  // wndQRCode.value.key = response.data.entry_key;
  invoice.value = response.data.invoice;
  if (cstate.value.id == 2) {
    let supp = await AssitApi.getSupply();
    console.log(supp);
    supply.value.opts = supp
  }
  loading.value = false;
  $emit("loaded"); // desblockea la venta modal del padre que contiene eeste componente
}

const selsupply = () => {
  viewSupply.value.state = true;
}

const startSupply = async () => {
  $emit("loading"); // blockea la venta modal del padre que contiene eeste componente
  startingStep.value = true;

  let newState = 3;
  let data = { id: head.value.id, state: newState };
  const response = await RestockApi.nextState(data);

  if (response.status == 200) {
    startingStep.value = false;
    $q.notify({ message: `Surtido iniciado para el pedido  ${head.value.id}`, icon: "done", position: "center", color: "teal" });
    let dat = {
      supplyer: supply.value.val,
      pedido: head.value.id,
      status: newState
    }
    let savesupply = await AssitApi.SaveSupply(dat);
    console.log(savesupply)
    if (savesupply.status == 200) {
      init();
      viewSupply.value.state = false;
    } else {
      alert(`Error ${savesupply.status}: ${savesupply.data} 2`);
    }

  } else { alert(`Error ${response.status}: ${response.data} 1`); }

  $emit("loaded"); // desblockea la venta modal del padre que contiene eeste componente
}

const tryGenInvoice = async () => {
  $q.loading.show({ message: "Generando, espera..." });
  wndGenInvoice.value.state = false;
  console.log(selSupply.value._suplier_id);
  const response = await RestockApi.genInvoice(head.value.id, selSupply.value._suplier_id);
  // console.log(response);

  if (response.status == 200) {
    if (response.data.invoice) {
      $q.notify({
        message: `Se genero la salida <b class="text-h6">${response.data.invoice.folio}</b>`,
        html: true, position: "center", icon: "done", timeout: 5000, color: "positive"
      });
      console.log(response.data)
      wndQRCode.value.key = response.data.requisition.entry_key;
      console.log(wndQRCode.value.key)
      pdf(response.data.invoice.folio,wndQRCode.value.key)
      let dat = {
        chofi: chof.value.val,
        supplyer: selSupply.value._suplier_id,
        pedido: head.value.id,
        status: 7
      }
      let savesupply = await AssitApi.SaveChofi(dat);

      if (savesupply.status == 200) {
        let data = { id: head.value.id, state: 7, suply: selSupply.value._suplier_id }
        console.log(data);
        let resp = await AssitApi.nextState(data)
        console.log(resp)
        if (resp.status == 200) {
          init();
          let id = resp.data.id
          let inx = partition.value.findIndex(e => e.id == id)
          partition.value[inx]._status = resp.data._status
          partition.value[inx].invoice = resp.data.invoice
        }

        $q.notify({
          message: `Pedido en ruta`,
          position: "center", icon: "done", timeout: 5000, color: "positive"
        });
      } else { alert(`Error ${savesupply.status}: ${savesupply.data}`); }

    }
  } else { alert(`Error ${response.status}: ${response.data}`); }

  $q.loading.hide();
}

const genQRKey = async (data) => {
  let url = `http://192.168.10.189:2200/#/checkin/${head.value.id}?key=${data}`;
  // let url = `http://192.168.10.112:9000/#/checkin/${head.value.id}?key=${data}`;

  wndQRCode.value.state = true;
  nextTick(() => QRCode.toCanvas(document.getElementById('qrcode'), url));
}

const printKey = async (data) => {
  $q.loading.show({ message: "..." });
  console.log(data);
  const response = await RestockApi.printKey({ ip: data.ip, port: data._port, order: head.value.id });
  if (response.status == 200) {
    let resp = response.data;
    $q.loading.hide();
    $q.notify({ message: "Impresion correcta", icon: "done", color: "positive", position: "top" });
  } else { console.error(response); alert(`Error ${response.status}: ${response.data}`); }
}

const printForSupply = async data => {
  $q.loading.show({ message: "..." });
  console.log(data);
  const response = await RestockApi.printForSupply({ ip: data.ip, port: data._port, order: head.value.id });
  console.log(response);
  if (response.status == 200) {
    let resp = response.data;
    if (resp) {
      $q.notify({ message: "Impresion correcta", icon: "done", color: "positive", position: "top" });
    } else {
      $q.notify({ message: `Sin conexion a <b>${data.name} <small>(${data.ip})</small></b>`, icon: "fas fa-bug", color: "negative", position: "center", html: true, timeout: 4000 });
    }
    $q.loading.hide();
  } else { console.error(response); alert(`Error ${response.status}: ${response.data}`); }
}

const genvoice = async (row) => {
  selSupply.value = row
  wndGenInvoice.value.state = true
  let ch = await AssitApi.getChof();
  console.log(ch);
  chof.value.opts = ch.data
}

const filterFn = (val, update, abort) => {
  update(() => {
    if (val === '') {
      supply.value.filter = supply.value.opts
    } else {
      const needle = val.toLowerCase()
      supply.value.filter = supply.value.opts.filter(v => v.complete_name.toLowerCase().indexOf(needle) > -1)
    }

  })
}


const pdf = async (data, qrvalue) => {
  // console.log(data.folio);
  let sal = {
    salida: data
  }
  const currentDate = new Date();
  console.log(sal);
  console.log(qrvalue)
  let dat = await AssitApi.getSalida(sal);
  console.log(dat);
  if (dat.status == 200) {
    const qrData = `http://192.168.10.189:2200/#/checkin/${head.value.id}?key=${qrvalue}`;
    // const qrData = `http://192.168.10.112:9000/#/checkin/${head.value.id}?key=${qrvalue}`;

    const qrOptions = {
      margin: 1,
      width: 1,
      height: 1
    }
    const canvas = document.createElement('canvas');
    await QRCode.toCanvas(canvas, qrData, qrOptions);
    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF();
    let chunks = [];
    const arreglo = dat.data.productos.map(producto => Object.values(producto));
    const paginas = Math.ceil(arreglo.length / 20);
    for (var i = 0; i < arreglo.length; i += 20) {

      // console.log(arreglo[i])

      chunks.push(arreglo.slice(i, i + 20));
    }
    console.log(chunks);
    for (let i = 0; i < 2; i++) {
      let copias = 'ORIGINAL'
      if (i > 0) {
        copias = 'COPIA'
        doc.addPage();
      }
      chunks.forEach(function (chunk, index) {
        if (index > 0) {
          doc.addPage();
        }

        let sumaBullfa = 0;
        let totcan = 0;
        for (let i = 0; i < chunk.length; i++) {
          chunk[i][1] = chunk[i][1] == 0 ? 1 : parseFloat(chunk[i][1]);
          chunk[i][2] = parseFloat(chunk[i][2]);
          chunk[i][3] = parseFloat(chunk[i][3]);
          sumaBullfa += parseFloat(chunk[i][1]); // Sumar al total la propiedad 'BULLFA' convertida a número
          totcan += parseFloat(chunk[i][3]);
        }


        for (let i = 0; i < chunk.length; i++) {
          // Sumar al total la propiedad 'BULLFA' convertida a número
        }

        doc.setFontSize(25)
        doc.setFont('helvetica', 'bold')
        doc.text("GRUPO VIZCARRA", 105, 10, "center");
        doc.setFontSize(8)
        doc.text('NUMERO PEDIDO:', 10, 10, 'left')
        doc.text(dat.data.salida.FOLIO, 10, 15, 'left');
        doc.setFontSize(12)
        doc.text(copias, 185, 10, 'left');
        doc.text(dat.data.salida.CLIENTE, 10, 25, 'left')
        doc.text('LLUVIA LIGTH SA DE CV', 120, 25, 'left')
        doc.setFontSize(8)
        doc.text('CALLE AN PABLO 10 LOC G 10', 120, 30, 'left')
        doc.text('06090', 120, 35, 'left')
        doc.text('DELEG, CUAUHTEMOC CDMX       CENTRO', 120, 40, 'left')
        doc.text('LLI1210184G8', 120, 45, 'left')
        doc.text('HORA DE IMP:', 10, 50, 'left')
        doc.rect(45, 46, 15, 5);
        doc.text(dayjs(currentDate).format("HH:mm:ss"), 47, 50)
        doc.text('HR SALIDA M:', 61, 50, 'left')
        doc.rect(91, 46, 15, 5);
        doc.text('LLEGADA A SUCURSAL:', 10, 60, 'left')
        doc.rect(45, 56, 15, 5);
        doc.text('SALIDA SUCURSAL:', 61, 60, 'left')
        doc.rect(91, 56, 15, 5);
        doc.rect(120, 51, 80, 5);
        doc.text('DOCUMENTO', 121, 55, 'left')
        doc.text('FACTURA', 121, 60, 'left')
        doc.text('NUMERO', 143, 55, 'left')
        doc.text(dat.data.salida.FACTURA, 143, 60, 'left')
        doc.text('PAGINA', 165, 55, 'left')
        doc.text(`${index + 1} de ${paginas}`, 165, 60, 'left')
        doc.text('FECHA', 185, 55, 'left')
        const fecha = dayjs(dat.data.salida.FECHA).format("YYYY-MM-DD")
        doc.text(fecha, 185, 60, 'left')
        autoTable(doc, {
          startX: 10,
          startY: 65,
          theme: 'plain',
          styles: { cellPadding: 1, fontSize: 8, halign: 'center' },
          head: [['CREADOR DOC', 'ALMACEN', 'AGENTE', 'FORMA DE PAGO']],
          body: [
            ['APP', dat.data.salida.AMACEN, dat.data.salida.AGENTE, dat.data.salida.FPAGO],
          ],
        })

        autoTable(doc, {
          startX: 10,
          startY: 80,
          theme: 'striped',
          styles: { cellPadding: .6, fontSize: 8, halign: 'center' },
          head: [['ARTICULO', 'CAJAS', 'U.X CAJA', 'CANTIDAD', 'DESCRIPCION']],
          body: chunk,
          columnStyles: {
            0: { fontStyle: 'bold', halign: 'left' },
            1: { fontStyle: 'bold', halign: 'center' },
            4: { halign: 'left' },
          },

        })

        doc.setFontSize(11)
        doc.text('TOTAL CAJAS:', 10, 200, 'left')
        doc.text(sumaBullfa.toString(), 40, 200, 'left')
        doc.text('TOTAL UNIDDADES:', 60, 200, 'left')
        doc.text(totcan.toString(), 100, 200, 'left')
        doc.setFontSize(8)
        doc.text('Debo(emos) y pagare(mos) incondicionalmente por este pagare a la order de GRUPO VIZCARRA, en la ciudad de Mexico,', 10, 210, 'left')
        doc.text('la cantidad de el valor recibido a mi(nuestra) entera satisfaccion', 10, 215, 'left')
        doc.text('Este pagare forma parte de una serie numerica del 1 al y 9 y todos estos estan sujetos a la condicion, de que al no pagarse cualquiera de ellos a su', 10, 220, 'left')
        doc.text('vencimiento sean exigibles todos los que le sigan en numero, ademas de los ya vencidosm desde la fecha de su vencimiento de el presente documento', 10, 225, 'left')
        doc.text('hasta el dia de su liquidacion, causaran intereses moratorios al tipo del % mensual en esta ciudad justamente con el principal', 10, 230, 'left')
        doc.setFontSize(15)
        doc.text('______________', 31, 248, 'center')
        doc.text('AUTORIZO', 20, 254, 'left')
        doc.text('______________', 85, 248, 'center')
        doc.text('CHOFER', 75, 254, 'left')
        doc.text('______________', 140, 248, 'center')
        doc.text('RECIBIO', 130, 254, 'left')
        doc.text('______________', 168, 248, 'left')
        doc.text('FECHA Y HORA', 168, 254, 'left')
        doc.setFontSize(9)
        doc.text('UNA VEZ ENTREGADA LA MERCANCIA EN LA FLETERA O DOMICILIO QUE INDIQUE EL CLIENTE ', 10, 260, 'left')
        doc.text('LLUVIA LIGHT SA DE CV NO ES RESPONSABLE POR PEDIDAS TOTALES, PARCIALES ', 10, 265, 'left')
        doc.text('O CUALQUIER TIPO DE DANO EN LA MERCANCIA DE ESTE DOCUMENTO ', 10, 270, 'left')
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(12)
        doc.text('NO SE ACEPTAN CAMBIOS NI DEVOLUCIONES', 10, 280, 'left')
        doc.setFontSize(25)
        doc.setFont('helvetica', 'bold')
        doc.text("GRUPO VIZCARRA", 105, 10, "center");
        doc.addImage(imgData, 'PNG', 95, 25, 20, 20);
      })
    }
    doc.save(dat.data.salida.FACTURA)

  } else {
    console.error('No se logro imprimir la factura');
  }
}

onBeforeMount(() => viewcols.value = table.value.columns.map(c => c.name));
init();
</script>
