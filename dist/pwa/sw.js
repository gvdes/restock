if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const b=e=>a(e,i),r={module:{uri:i},exports:d,require:b};s[i]=Promise.all(f.map((e=>r[e]||b(e)))).then((e=>(c(...e),d)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"restock"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_commonjsHelpers.88e99c8f.js",revision:"a6469467c44b15c9cd4b998680788b26"},{url:"assets/AssistApi.82b98af9.js",revision:"63cade6a412cee3024cd67e3dadc173c"},{url:"assets/Automate.91a76322.js",revision:"f1294d80596f1002ad575aaff519ad4f"},{url:"assets/axios.10c2b4ae.js",revision:"e28e2f91da8cdff5a11a9612bca9c55f"},{url:"assets/CheckInLyt.a48dafc6.js",revision:"d0610cbcecac4b3c8aa0a1e09bdabf0d"},{url:"assets/Checkout.dd06af24.js",revision:"f69dd80ccba291ebc7d8d1eb1ed6a071"},{url:"assets/CheckoutLyt.84f5ead1.js",revision:"ea2a60277e8227dd9567a204ec27929d"},{url:"assets/ClosePopup.217e5c3c.js",revision:"7ca2df3737ca38dce9dc4fd40cf6f680"},{url:"assets/Compare.db7f7b60.js",revision:"0dd4210a7d5636ea7cfb008f1fb952f1"},{url:"assets/DashboardLyt.1b9c92a2.js",revision:"74c87e9ff6a3baf2ba3d0798ccff370f"},{url:"assets/dayjs.min.25545ff6.js",revision:"5584e1adedf6efee7cab7f47cb2af34e"},{url:"assets/Entries.fe74a905.js",revision:"5a4d31391a741ad29918001b44a592d5"},{url:"assets/fa-brands-400.3fe890d0.woff2",revision:"f4bdd85a576812f553ec3cfea8b1a2b5"},{url:"assets/fa-brands-400.c7ae37d3.ttf",revision:"9d2bbde416583cfa5cb30c995b41f732"},{url:"assets/fa-regular-400.fdc1f753.ttf",revision:"f417567703b4fcfbf750952bd2db8a44"},{url:"assets/fa-regular-400.fe69d948.woff2",revision:"83e2813a8fe0229d916c5b63fa9eab5e"},{url:"assets/fa-solid-900.6d53c706.ttf",revision:"dd5e5b90ca8ee986b13b04310f9aef9d"},{url:"assets/fa-solid-900.d27bc752.woff2",revision:"3e50e269ee627bb2279f91d18c085167"},{url:"assets/fa-v4compatibility.4d73f280.ttf",revision:"d4a14b7a210bc8b5c2fe661a18e7e8db"},{url:"assets/fa-v4compatibility.7d1c2ce5.woff2",revision:"1f9db9971c2d69b78e7425a012a5e486"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/html2canvas.esm.0eae2bf4.js",revision:"57e52999e4fe32560f4d4f7cb3c65b94"},{url:"assets/index.a0f8255f.js",revision:"4e24a43b11ade62b0a91563a822bf893"},{url:"assets/index.b5b9f916.css",revision:"fe08268d2a6b2ba3e115b4d693469d13"},{url:"assets/index.es.0a9b1743.js",revision:"ee557b75ace35d64df5527809e2e58bd"},{url:"assets/jspdf.plugin.autotable.dfa5bf14.js",revision:"83c89baa24b415e2d38ad14d4760d4cd"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/pdfCreate.a3a18dee.js",revision:"76f5def7bca022837d9ba532b85ed3ce"},{url:"assets/purify.es.a8a3dac7.js",revision:"2b48ee3baef4200d614102fe047d0a12"},{url:"assets/QCardActions.c156f921.js",revision:"2bd4a7d4e93b78a90c01c59bba4b29cb"},{url:"assets/qdate.5951bbe4.js",revision:"378cfb911ee706699b932d3161d06ba1"},{url:"assets/QFooter.d5e0813d.js",revision:"daf9e735758d63717cf8f80af8430921"},{url:"assets/QForm.53b9726b.js",revision:"dc91a0fbc288d4f34b6ee14924473c35"},{url:"assets/QLayout.49d06355.js",revision:"45b91683a99808ae46de19b9e824adb8"},{url:"assets/QPage.0a6f8bb0.js",revision:"9ecad730b4cbc3c7a3f3100e67a6289e"},{url:"assets/QSpace.f095958f.js",revision:"62a8c346bf5a1cc8918862ec10964e37"},{url:"assets/QTabs.2304bbaf.js",revision:"d1e3bbd941bbe3dbbad7a4373b95181e"},{url:"assets/QTd.048bf01c.js",revision:"e09960351fcb420ae43fc97b66395ec5"},{url:"assets/QToggle.c623ae93.js",revision:"523e32d77bfee570e4f7781a88b672ec"},{url:"assets/Restock.f45c9784.js",revision:"1f394503dd2b20ffa57f2263b845547c"},{url:"assets/rtl.4e5105ec.js",revision:"b34a1c9ed8a35a4cef878deb5b73b5fc"},{url:"assets/socket.9951ace7.js",revision:"f1d1de1756709929f89bc9b7419535e2"},{url:"assets/Supply.dccbc514.js",revision:"7f82a700dd6009aa125c0618357f0f36"},{url:"assets/SupplyLyt.22817376.css",revision:"8827b0fd31f770944c04526ea230f3c1"},{url:"assets/SupplyLyt.29d3d128.js",revision:"fd5525d380c7f5c1174fb67b7d451617"},{url:"assets/Texcoco.eb15d033.js",revision:"e0a78b200ab60144e88ae0c1eb4353ea"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"eb407437a455e9cafae51e1c63155cad"},{url:"manifest.json",revision:"1721887347ff8d6e5bc9e1b802b4be72"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
