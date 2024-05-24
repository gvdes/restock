import { boot } from 'quasar/wrappers'
import { io } from "socket.io-client";


// const URLSocket = 'http://localhost:4141';
const URLSocket = 'http://192.168.10.189:4444';
// const URLSocket = 'http://192.168.10.238:4141';

const $sktRestock = io(`${URLSocket}/resurtidos`,{autoConnect:false});
const usrSkt = {
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

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async  ({app }) => {
//     app.config.globalProperties.$socket = URLSocket
//   console.log(app.config.globalProperties)
// })

export { $sktRestock, usrSkt }
