(()=>{var e={};e.id=822,e.ids=[822],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},961:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(260),o=r(8203),n=r(5155),i=r.n(n),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["programs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,6793,23)),"/Users/tiquilamcneill/Desktop/Projects/RedtailsUI/src/app/programs/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/tiquilamcneill/Desktop/Projects/RedtailsUI/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/tiquilamcneill/Desktop/Projects/RedtailsUI/src/app/programs/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/programs/page",pathname:"/programs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7970:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},6122:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},452:(e,t,r)=>{Promise.resolve().then(r.bind(r,6694)),Promise.resolve().then(r.bind(r,1661)),Promise.resolve().then(r.bind(r,9737))},3188:(e,t,r)=>{Promise.resolve().then(r.bind(r,3950)),Promise.resolve().then(r.bind(r,8329)),Promise.resolve().then(r.bind(r,7733))},6487:()=>{},8335:()=>{},8329:(e,t,r)=>{"use strict";r.d(t,{D:()=>a,ThemeProvider:()=>i});var s=r(5512),o=r(8009);let n=(0,o.createContext)(void 0);function i({children:e}){let[t,r]=(0,o.useState)("light");return(0,s.jsx)(n.Provider,{value:{theme:t,toggleTheme:()=>{let e="light"===t?"dark":"light";r(e),document.documentElement.classList.toggle("dark"),localStorage.setItem("theme",e)}},children:e})}function a(){let e=(0,o.useContext)(n);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},3950:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(5512),o=r(6008),n=r(7733),i=r(4098),a=r(8329);function l(){let{theme:e,toggleTheme:t}=(0,a.D)();return(0,s.jsxs)("button",{onClick:t,className:"relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none bg-gray-200 dark:bg-gray-700",role:"switch","aria-checked":"dark"===e,children:[(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"}),(0,s.jsx)("div",{className:`${"dark"===e?"translate-x-6":"translate-x-1"} inline-block w-4 h-4 transform rounded-full transition-transform bg-white`,children:"dark"===e?(0,s.jsx)(i.V6H,{className:"h-4 w-4 text-gray-700"}):(0,s.jsx)(i.wQq,{className:"h-4 w-4 text-yellow-500"})})]})}function d(){let{cartItems:e}=(0,n._)();return(0,s.jsx)("nav",{className:"bg-white shadow-md p-4 dark:bg-gray-800",children:(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,s.jsx)(o.default,{href:"/",className:"text-2xl font-bold text-foreground",children:"Red Tails Outdoors"}),(0,s.jsxs)("div",{className:"space-x-6 flex items-center",children:[(0,s.jsx)(l,{}),(0,s.jsx)(o.default,{href:"/",className:"text-foreground hover:text-gray-600 transition-colors",children:"Home"}),(0,s.jsx)(o.default,{href:"/about",className:"text-foreground hover:text-gray-600 transition-colors",children:"About Us"}),(0,s.jsx)(o.default,{href:"/book",className:"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors",children:"Make a Reservation"}),(0,s.jsxs)(o.default,{href:"/cart",className:"relative text-foreground hover:text-gray-600 transition-colors",children:[(0,s.jsx)(i.AsH,{className:"text-xl"}),e.length>0&&(0,s.jsx)("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",children:e.length})]})]})]})})}},7733:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>i,_:()=>a});var s=r(5512),o=r(8009);let n=(0,o.createContext)(void 0);function i({children:e}){let[t,r]=(0,o.useState)([]);return(0,s.jsx)(n.Provider,{value:{cartItems:t,addItem:e=>{r([...t,e])},updateItem:(e,s)=>{r(t.map(t=>t.id===e?s:t))},removeItem:e=>{r(t.filter(t=>t.id!==e))}},children:e})}function a(){let e=(0,o.useContext)(n);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},1661:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>o});var s=r(6760);let o=(0,s.registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/tiquilamcneill/Desktop/Projects/RedtailsUI/src/app/components/ThemeProvider.tsx","ThemeProvider");(0,s.registerClientReference)(function(){throw Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/tiquilamcneill/Desktop/Projects/RedtailsUI/src/app/components/ThemeProvider.tsx","useTheme")},6694:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/tiquilamcneill/Desktop/Projects/RedtailsUI/src/app/components/navigation/Navigation.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/tiquilamcneill/Desktop/Projects/RedtailsUI/src/app/components/navigation/Navigation.tsx","default")},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>u});var s=r(2740),o=r(2067),n=r.n(o),i=r(4738),a=r.n(i);r(1135);var l=r(6694),d=r(9737),c=r(1661);let u={title:"Redtails",description:"Book your outdoor adventure"};function m({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().variable} ${a().variable} antialiased`,children:(0,s.jsx)(c.ThemeProvider,{children:(0,s.jsxs)(d.CartProvider,{children:[(0,s.jsx)(l.default,{}),e]})})})})}},6793:()=>{},9737:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>o});var s=r(6760);let o=(0,s.registerClientReference)(function(){throw Error("Attempted to call CartProvider() from the server but CartProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/tiquilamcneill/Desktop/Projects/RedtailsUI/src/context/CartContext.tsx","CartProvider");(0,s.registerClientReference)(function(){throw Error("Attempted to call useCart() from the server but useCart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/tiquilamcneill/Desktop/Projects/RedtailsUI/src/context/CartContext.tsx","useCart")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(8077);let o=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[989,657,77],()=>r(961));module.exports=s})();