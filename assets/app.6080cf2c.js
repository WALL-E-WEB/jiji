import{u as i,I as o,a0 as p,c as u,A as c,H as l,a1 as d,a2 as f,a3 as m,a4 as A,a5 as h,a6 as g,a7 as P,a8 as v,a9 as y,aa as w,ab as C,ac as _,ad as b,ae as R}from"./chunks/framework.caa0fbaf.js";import{t as D}from"./chunks/theme.80a5d1bf.js";const E={extends:D};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=r(E),T=i({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),d(),f(),m(),s.setup&&s.setup(),()=>A(s.Layout)}});async function x(){const e=j(),a=O();a.provide(h,e);const t=g(e.route);return a.provide(P,t),a.component("Content",v),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:w}),{app:a,router:e,data:t}}function O(){return C(T)}function j(){let e=o,a;return _(t=>{let n=b(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),R(()=>import(n),[])):null},s.NotFound)}o&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{x as createApp};
