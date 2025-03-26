<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-page-container>
      <q-page padding v-if="product.product">

        <q-card class="my-card">
          <q-card-section>
            <div class="text-center text-h5 text-bold">{{ product.product.code }}</div>
            <div class="text-center text-h6 text-bold">{{ product.product.barcode }}</div>
            <div class="text-center text-bold">{{ product.product.description }}</div>
            <div class="text-center text-grey"> Variantes {{product.variants.map(e => e.barcode).join('-')}}</div>
          </q-card-section>
          <q-card class="my-card">
            <q-form @submit="onSubmit">
              <q-card-section>
                <q-input v-model="product.modal" type="text" label="Escaner" filled autofocus />
              </q-card-section>
            </q-form>
          </q-card>
          <q-card-section>
            <div class="row">
              <div class="col">
                <q-card class="my-card">
                  <q-card-section>
                    <div class="text-center text-bold text-h6">Validos</div>
                  </q-card-section>
                  <q-card-section>
                    <q-list bordered  v-for="(prod, index) in (validProd)" :key="index">
                      <q-item>
                        <q-item-section avatar>
                          <q-icon color="primary" name="inventory" />
                        </q-item-section>
                        <q-item-section>{{ prod }}</q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>


              </div>
              <q-separator spaced inset vertical dark />
              <div class="col">
                <q-card class="my-card">
                  <q-card-section>
                    <div class="text-center text-bold text-h6">Invalidos</div>
                  </q-card-section>
                  <q-card-section>
                    <q-list bordered  v-for="(prod, index) in (invalidProd)" :key="index">
                      <q-item>
                        <q-item-section avatar>
                          <q-icon color="primary" name="inventory" />
                        </q-item-section>
                        <q-item-section>{{ prod }}</q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
            </div>

          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios';//para dirigirme bro
import dbproduct from 'src/API/CheckCB'
import { useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
const incorrecrt = new Audio('sounds/incorrect.mp3');
const correct = new Audio('sounds/correct.mp3');


const $route = useRoute();
const $router = useRouter();

const product = ref({
  product: null,
  variants: [],
  modal: null,
})

const invalidProd = ref([]);

const validProd = ref([]);


// const valid = computed(() =>  )


const init = async () => {
  const resp = await dbproduct.getProduct($route.params.id)
  if (resp.error) {
    console.log(resp)
  } else {
    console.log(resp)
    product.value.product = resp
    product.value.variants = resp.variants

  }
}

const onSubmit = () => {
  if(product.value.modal){
    let modal = product.value.modal.toUpperCase();
    const exists = product.value.product.barcode == modal || product.value.product.code == modal || product.value.product.variants.some(variant => variant.barcode == modal);
    if(exists){
      validProd.value.push(modal)
      correct.play()
    }else{
      invalidProd.value.push(modal)
      incorrecrt.play()
    }
    product.value.modal = null
  }
}

init()

</script>
