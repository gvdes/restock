<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <q-page>
        <OrderCheckinComp :order="order" v-if="cstate" @reload="init"/>

        <q-dialog v-model="wndStartCheck.state" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="warning" color="orange-14" text-color="white" />
              <span class="q-mx-sm text-h6">Iniciar CheckIn #{{$route.params.oid}}</span>
            </q-card-section>
            <q-card-section>
              <q-select v-model="check.val" :options="check.opts" label="Revisa ?" option-label="complete_name" filled />
            </q-card-section>
            <q-card-actions vertical align="center">
              <q-btn flat label="Si" color="primary" @click="startCheckin" :disable="check.val == null"/>
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="wnReceiv.state" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="warning" color="orange-14" text-color="white" />
              <span class="q-mx-sm text-h6">Recepcionas el pedido #{{$route.params.oid}}? </span>
            </q-card-section>
            <q-card-actions vertical align="center">
              <q-btn flat label="Si" color="primary" @click="changeStatus"/>
            </q-card-actions>
          </q-card>
        </q-dialog>


      </q-page>
      <!-- <router-view /> -->
    </q-page-container>

  </q-layout>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useQuasar } from 'quasar';
  import { useRoute, useRouter } from 'vue-router';
  import RestockApi from 'src/api/RestockApi.js';
  import OrderCheckinComp from 'src/components/OrderCheckin.vue';
  import AssistApi from 'src/api/AssistApi';

  const $q = useQuasar();
  const $route = useRoute();
  const $router = useRouter();

  const key = ref("");
  const folio = ref("");

  const wndStartCheck = ref({ state:false });
  const wnReceiv = ref({ state:false });
  const order = ref(null);
  const requisition = ref(null);
  const check = ref({
    val:null,
    opts:null
  })

  const cstate = computed(() => order.value ? order.value.status : null);

  const init = async () => {
    order.value=null;
    $q.loading.show({ message:"Espera..." });

    let oid = $route.params.oid;
    let key = $route.query.key;

    let data = { oid, key };

    // console.log(data);

    const response = await RestockApi.checkin(data);
    console.log(response.data);
    if(response.status==200){
      let resp = response.data;

      order.value = resp.order;
      requisition.value = resp.order.requisition
      order.value._status==8 ? wndStartCheck.value.state=true : null;
      order.value._status==7 ? wnReceiv.value.state=true : null;
      $q.loading.hide();
      let dat =  order.value.requisition.from._client;
      console.log(dat);
      let save = await AssistApi.getCheck(dat)
      console.log(save);
      if(save.status == 200){
        check.value.opts = save.data
      }else{
        alert(`Error ${save.status}: ${save.data}`);
      }
    }else{ alert(`Error ${response.status}: ${response.data}`); }
  }

  const startCheckin = async () => {
    $q.loading.show({ message:"Inicando, espera..." });
    wndStartCheck.value.state=false;

    $q.loading.show({ message:"Espera..." });

    // let oid = $route.params.oid;
    // let key = $route.query.key;
    // let data = { oid, key };
    // const response = await RestockApi.checkinInit(data);
    // console.log(response);

    let data = {id:$route.params.oid ,state:9, suply:order.value._suplier_id};
    const response = await AssistApi.nextState(data);
    console.log(data);
    if(response.status==200){
      let dat =  {
        verified:check.value.val.id,
        supplyer:order.value._suplier_id,
        pedido:order.value.requisition.id,
        status:9
      }
      console.log(dat)
      if (response.data.partitionsEnd > requisition.value._status) {
      let nes = { id: $route.params.oid, state: response.data.partitionsEnd };
      const nxt = await RestockApi.nextState(nes);
      console.log(nxt);
    }
      let savesupply = await AssistApi.SaveCheck(dat);
      if(savesupply.status == 200){
        init();
        $q.notify({
          message:`Revision de Recibo`,
          position:"center", icon:"done", timeout:5000, color:"positive"
        });
      }else{ alert(`Error ${savesupply.status}: ${savesupply.data}`); }
      }else{ alert(`Error ${response.status} ${response.data}`); }
  }

  const changeStatus = async() => {
    $q.loading.show({ message: "Cambiando Estado..." });

    let data = {id:$route.params.oid ,state:8, suply:order.value._suplier_id};
    const response = await AssistApi.nextState(data);
    console.log(response);
    if (response.data.partitionsEnd > requisition.value._status) {
      let nes = { id: $route.params.oid, state: response.data.partitionsEnd };
      const nxt = await RestockApi.nextState(nes);
      console.log(nxt);
    }
    if(response.status==200){
      wnReceiv.value.state = false
      let ms  = {id:order.value.invoice, suply:order.value._driver, store:order.value.requisition.from.name};
    const envmes  = await AssistApi.sendMessage(ms);
    console.log(envmes);

 }

    $q.loading.hide();
  }

  init();
</script>
