import{e as u,m as p,f as _,_ as r,o as c,c as a,a as n,t as f,b as $,r as h}from"./index-Kw-GxR1N.js";const s=u("counter",{state:()=>({count:0}),actions:{increment(){this.count+=1}}}),H={name:"HelloWorld",data(){return{}},methods:{...p(s,["increment"])},computed:{..._(s,["count"])}};function b(e,o,l,i,d,m){return c(),a("div",null,[n("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=(...t)=>e.increment&&e.increment(...t))},"count is "+f(e.count),1)])}const S=r(H,[["render",b]]),W={components:{HelloWorld:S}},k={class:"home"},v=n("h1",null,"Hello, This is Home Page.",-1),y=n("hr",null,null,-1);function B(e,o,l,i,d,m){const t=h("HelloWorld");return c(),a("div",k,[v,y,$(t)])}const g=r(W,[["render",B]]);export{g as default};
