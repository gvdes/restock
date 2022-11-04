import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const vizapi = axios.create({
  // baseURL: 'http://192.168.12.183/vizapi/public/L'
  baseURL: 'http://192.168.10.15/vizapi/public/L'
  // baseURL: 'http://192.168.1.68:80/arceus/public/api'
});

vizapi.interceptors.response.use( response => {
  return response;
}, error => {

  if(error.response){// hay conexion al servidor pero el status de repsuesta no es 200 status de respuesta
    if(error.response.status==511){
      // vaciar localstorage y redireccionar al inicio de sesion
      alert(error.response.data);
    }
  }else{// este error salta cuando el servidro esta muerto
    console.log("%cNememes el servidor no anda jalando!","background:red;padding:5px;font-size:2em;color:white;");
    alert("Error: Sin conexion al servidor");
  }

  return Promise.reject(error);
});

// export default boot(({ app }) => {
//   // for use inside Vue files (Options API) through this.$axios and this.$api

//   app.config.globalProperties.$axios = axios
//   // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
//   //       so you won't necessarily have to import axios in each vue file

//   app.config.globalProperties.$api = vizapi
//   // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
//   //       so you can easily perform requests against your app's API
// })

export { vizapi }
