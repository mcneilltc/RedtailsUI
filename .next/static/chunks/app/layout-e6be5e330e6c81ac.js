(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{7136:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,5297,23)),Promise.resolve().then(r.bind(r,7774)),Promise.resolve().then(r.bind(r,4633)),Promise.resolve().then(r.t.bind(r,347,23)),Promise.resolve().then(r.bind(r,4915))},4633:(e,t,r)=>{"use strict";r.d(t,{D:()=>d,ThemeProvider:()=>a});var i=r(5155),o=r(2115),s=r(4826),n=r(9846);let l=(0,o.createContext)({toggleTheme:()=>{},darkMode:!1}),d=()=>(0,o.useContext)(l);function a(e){let{children:t}=e,[r,d]=(0,o.useState)(!1),a=(0,s.A)({palette:{mode:r?"dark":"light"}});return(0,i.jsx)(l.Provider,{value:{toggleTheme:()=>{d(e=>!e)},darkMode:r},children:(0,i.jsx)(n.A,{theme:a,children:t})})}},7774:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var i=r(5155),o=r(4915);r(4075);let s={src:"/_next/static/media/logo2.5c4680d8.png"};var n=r(1451),l=r(6805),d=r(1348),a=r(2282),c=r(894),h=r(4633),u=r(8384),v=r(4286);function m(){let{cartItems:e}=(0,o._)(),{toggleTheme:t,darkMode:r}=(0,h.D)();return(0,i.jsx)(n.A,{position:"static",color:"default",children:(0,i.jsxs)(l.A,{children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("img",{src:s.src,alt:"Red Tails Outdoors Logo"})}),(0,i.jsx)(d.A,{variant:"h6",style:{flexGrow:1},children:"Red Tails Outdoors"}),(0,i.jsx)(a.A,{color:"inherit",href:"/",children:"Home"}),(0,i.jsx)(a.A,{color:"inherit",href:"/about",children:"About Us"}),(0,i.jsx)(a.A,{variant:"contained",color:"primary",href:"/book",children:"Make a Reservation"}),(0,i.jsx)(c.A,{color:"inherit",onClick:t,"aria-label":r?"Switch to Light Mode":"Switch to Dark Mode",children:r?(0,i.jsx)(u.A,{}):(0,i.jsx)(v.A,{})})]})})}},4915:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>n,_:()=>l});var i=r(5155),o=r(2115);let s=(0,o.createContext)(void 0);function n(e){let{children:t}=e,[r,n]=(0,o.useState)([]);return(0,i.jsx)(s.Provider,{value:{cartItems:r,addItem:e=>{n([...r,e])},updateItem:(e,t)=>{n(r.map(r=>r.id===e?t:r))},removeItem:e=>{n(r.filter(t=>t.id!==e))}},children:t})}function l(){let e=(0,o.useContext)(s);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},4075:()=>{},347:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[433,171,56,441,517,358],()=>t(7136)),_N_E=e.O()}]);