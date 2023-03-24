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
            <q-card-actions vertical align="center">
              <q-btn flat label="Si" color="primary" @click="startCheckin"/>
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

  const $q = useQuasar();
  const $route = useRoute();
  const $router = useRouter();

  const key = ref("");
  const folio = ref("");

  const wndStartCheck = ref({ state:false });
  const order = ref(null);

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
      order.value._status==7 ? wndStartCheck.value.state=true : null;
      $q.loading.hide();
    }else{ alert(`Error ${response.status}: ${response.data}`); }
  }

  const startCheckin = async () => {
    $q.loading.show({ message:"Inicando, espera..." });
    wndStartCheck.value.state=false;

    $q.loading.show({ message:"Espera..." });

    let oid = $route.params.oid;
    let key = $route.query.key;
    let data = { oid, key };

    const response = await RestockApi.checkinInit(data);
    console.log(response);

    if(response.status==200){ init(); }else{ alert(`Error ${response.status} ${response.data}`); }
  }

  init();
</script>
