if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const b=e=>a(e,i),r={module:{uri:i},exports:d,require:b};s[i]=Promise.all(f.map((e=>r[e]||b(e)))).then((e=>(c(...e),d)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"restock"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_commonjsHelpers.88e99c8f.js",revision:"a6469467c44b15c9cd4b998680788b26"},{url:"assets/AssistApi.d49e53f7.js",revision:"67460da503969cd42e5f156df3d5e63d"},{url:"assets/Automate.5bcdf4e8.js",revision:"4eba587e529539bfdb46409f2674f86a"},{url:"assets/axios.10c2b4ae.js",revision:"e28e2f91da8cdff5a11a9612bca9c55f"},{url:"assets/CBcompare.7959aaf5.css",revision:"6ed467aeda2a7f15aea94ae9b79915e4"},{url:"assets/CBcompare.e31751e5.js",revision:"43aa4a58b718ac9f3cb1abcb0ae52613"},{url:"assets/checkCB.528fa292.js",revision:"c476f395a1e632998f7ac249a623727a"},{url:"assets/CheckInLyt.43f87f23.js",revision:"5e5d55a9a47e3c4c922d680f422344f9"},{url:"assets/Checkout.bf0b2f02.js",revision:"429b6e5b5926025a40daacc36f487a6a"},{url:"assets/CheckoutLyt.83d205e6.js",revision:"8382110c100e78017a403fe53bfa2d64"},{url:"assets/ClosePopup.cec40f43.js",revision:"804d8c0a4429bd5eb8ef8d5b1a31a57a"},{url:"assets/Compare.1005db71.js",revision:"eb86f917a322de0e52f54e43319482c8"},{url:"assets/DashboardLyt.4671f47a.js",revision:"ebd0bfcc94df1a9308d77aa710e17781"},{url:"assets/dayjs.min.25545ff6.js",revision:"5584e1adedf6efee7cab7f47cb2af34e"},{url:"assets/Entries.100ca5dd.js",revision:"752b8f5d3bdd54773755123dd6e47066"},{url:"assets/exceljs.min.9e24d01d.js",revision:"cb40677d4a9c917aae9326d190259989"},{url:"assets/fa-brands-400.3fe890d0.woff2",revision:"f4bdd85a576812f553ec3cfea8b1a2b5"},{url:"assets/fa-brands-400.c7ae37d3.ttf",revision:"9d2bbde416583cfa5cb30c995b41f732"},{url:"assets/fa-regular-400.fdc1f753.ttf",revision:"f417567703b4fcfbf750952bd2db8a44"},{url:"assets/fa-regular-400.fe69d948.woff2",revision:"83e2813a8fe0229d916c5b63fa9eab5e"},{url:"assets/fa-solid-900.6d53c706.ttf",revision:"dd5e5b90ca8ee986b13b04310f9aef9d"},{url:"assets/fa-solid-900.d27bc752.woff2",revision:"3e50e269ee627bb2279f91d18c085167"},{url:"assets/fa-v4compatibility.4d73f280.ttf",revision:"d4a14b7a210bc8b5c2fe661a18e7e8db"},{url:"assets/fa-v4compatibility.7d1c2ce5.woff2",revision:"1f9db9971c2d69b78e7425a012a5e486"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/format.54b33283.js",revision:"df39bd5c1a528fe998e1d1c82b55a00e"},{url:"assets/html2canvas.esm.0eae2bf4.js",revision:"57e52999e4fe32560f4d4f7cb3c65b94"},{url:"assets/index.b5b9f916.css",revision:"fe08268d2a6b2ba3e115b4d693469d13"},{url:"assets/index.es.0a9b1743.js",revision:"ee557b75ace35d64df5527809e2e58bd"},{url:"assets/index.f1a056e5.js",revision:"f07f6c5d0c8da20d83659f4856a5de63"},{url:"assets/jspdf.plugin.autotable.b45f6d28.js",revision:"f937bbef27ed9f4453ea15d5abde2c23"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/Launcher.aaf4ca66.js",revision:"e3e915768ff91790721b4be3439ff4f7"},{url:"assets/pdfCreate.4cccbe91.js",revision:"d773326a026c80c3632373c465ec94e6"},{url:"assets/purify.es.a8a3dac7.js",revision:"2b48ee3baef4200d614102fe047d0a12"},{url:"assets/QCard.b31734c2.js",revision:"83ab113af4d6e4e4212879326aa3c8ee"},{url:"assets/QCardActions.476ac732.js",revision:"7465cc2594dbd7f18f4a0009847b1c2d"},{url:"assets/qdate.5951bbe4.js",revision:"378cfb911ee706699b932d3161d06ba1"},{url:"assets/QDate.9bd143ea.js",revision:"feda21316b01ddbf860118d109f8efe7"},{url:"assets/QFooter.6e534cad.js",revision:"30895308046649645c68a55ee26f0276"},{url:"assets/QForm.111414eb.js",revision:"4cdbc8da63be30fb1cbbc9f0ffb9d41f"},{url:"assets/QHeader.93391b02.js",revision:"ac58c1280cf7dc14617c93ee62bd45df"},{url:"assets/QInput.591c2f26.js",revision:"bc70b923d9af9764a2b387e37cd9ee8e"},{url:"assets/QItem.769cd19a.js",revision:"7758aaff121d85a0c841d11a62df0451"},{url:"assets/QLayout.f84d934c.js",revision:"e283bbded35404e1b61af73ca0faaac8"},{url:"assets/QList.0aaf675b.js",revision:"7fdaad9e574078dec9fcb2d49b16606c"},{url:"assets/QPage.b3bde542.js",revision:"69487f2c35bf1d17e0f15aa4f04ef8fb"},{url:"assets/QSeparator.2e492904.js",revision:"f15b26a860563a077bf21a6212414977"},{url:"assets/QSpace.8a2a7c48.js",revision:"22d11de28826a3a2a21c0d3c01d3b0d7"},{url:"assets/QTable.e4c927d8.js",revision:"d0541975964f0bbb2a31ee2c8ccafd62"},{url:"assets/QTabs.21c3fc27.js",revision:"92bbd5a5335576f68e434516616cd581"},{url:"assets/QTd.f577640a.js",revision:"8e85a86b23ebf3b30bcf1992efb3f5c2"},{url:"assets/QToggle.86e9baae.js",revision:"7dc36c17af02b8060a373c19f1721495"},{url:"assets/QToolbar.c50c1d58.js",revision:"b56a64691d3f74672aba0d727a6ea0d8"},{url:"assets/QToolbarTitle.cce3bfbf.js",revision:"2a2cc2c2c4eb0ff8ff7d1f6b04d872d0"},{url:"assets/Report.18b38b89.js",revision:"1726dd0b84be50ac04120a8ad99d4a3d"},{url:"assets/Restock.ab4ba8a2.js",revision:"132e944044c5f89a613ed66b36c3bf58"},{url:"assets/RestockApi.b0d544bf.js",revision:"5e1c991c5c801e74d67102efc2d93fd4"},{url:"assets/rtl.950de787.js",revision:"d09a56bd3a37f4f68f7f6a00cea256f5"},{url:"assets/socket.1aa8b866.js",revision:"f1d1de1756709929f89bc9b7419535e2"},{url:"assets/Stocks.0eb9458a.js",revision:"5d33339b633ccbcb027c9cb5c2760fc8"},{url:"assets/Supply.26d3c1d8.js",revision:"884a0694cefbb170627cade5522640d6"},{url:"assets/SupplyLyt.22817376.css",revision:"8827b0fd31f770944c04526ea230f3c1"},{url:"assets/SupplyLyt.ddf17888.js",revision:"bfb1eb9b62d9856239d12206be154673"},{url:"assets/Texcoco.9c484595.js",revision:"f0458655b8a5da190d66712ce19e2d74"},{url:"assets/touch.70a9dd44.js",revision:"f9cd7355694b15b01548ffe718cdba2b"},{url:"assets/uid.42677368.js",revision:"01add560b365ffb4147667d832fc2267"},{url:"assets/use-key-composition.9a99c1a1.js",revision:"e95eb120ec8644cbaaa3d0d84ee4d409"},{url:"assets/use-quasar.10cb1f43.js",revision:"d515e30e424ef963892afe8afc9437b2"},{url:"assets/use-timeout.e24fe1b6.js",revision:"65e32a4d1d7b5b7516eb4da316f836c5"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"8479fdc6475035ea0462f05044f77afa"},{url:"manifest.json",revision:"1721887347ff8d6e5bc9e1b802b4be72"},{url:"sounds/correct.mp3",revision:"350990be9ded35c69f5f9f576f5bbd11"},{url:"sounds/incorrect.mp3",revision:"77a9503903f810f698159ed6ae83fe69"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
