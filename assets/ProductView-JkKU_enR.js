import{a as c}from"./axios-L6U4YIEh.js";import{_ as r,c as a,t as s,o as n}from"./index-wsoBL0be.js";var i={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"binghank",BASE_URL:"/Vite-Week6-main/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:_,VITE_APP_PATH:p}=i,u={data(){return{product:{}}},methods:{getProduct(o){c(`${_}/api/${p}/product/${o}`).then(t=>{console.log(t),this.product=t.data.product}).catch(t=>{console.log(t)})}},mounted(){const{id:o}=this.$route.params;this.getProduct(o)}};function d(o,t,l,P,e,h){return n(),a("h2",null,s(e.product.title),1)}const E=r(u,[["render",d]]);export{E as default};
