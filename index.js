var b=e=>{throw TypeError(e)};var B=(e,t,n)=>t.has(e)||b("Cannot "+n);var h=(e,t,n)=>(B(e,t,"read from private field"),n?n.call(e):t.get(e)),L=(e,t,n)=>t.has(e)?b("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{a as N}from"./assets/vendor-CNNbG8jS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const M=["Graham","Howell","Bauch","Lebsack","Dietrich","Schulist","Weissnat","Runolfsdottir","Reichert","DuBuque"],v=["Yahoo","Microsoft","Google","Tesla","Adobe","Foxtrot","Comfy","Feacebook","Rozetca","Adidas"],T=["Ukraine","United States","Israel","France","Germany","Türkiye","Spain","Greece","Denmark","Norway"],y=["Active","Inactive"],A=["(205)","(302)","(252)","(629)","(406)","(208)","(704)","(050)","(067)","(099)"],p=["0","1","2","3","4","5","6","7","8","9"],l=e=>{const t=Math.floor(Math.random()*v.length),n=Math.floor(Math.random()*y.length);return e===y?e[n]:e[t]},k=()=>{let e=l(M),t=l(v),n=`${l(A)} 555-${l(p)}${l(p)}${l(p)}${l(p)}`,r=l(T),o=`@${t.toLowerCase()}.com`,s=l(y);return{id:Date.now(),lastName:e,company:t,phoneNumder:n,email:o,country:r,status:s}};var m;class H{constructor(){L(this,m,8);this.KEY="42263617-81d7156b9f7b88cd7b1016c2a",this.URL="https://pixabay.com",this.resources="/api/"}async getCustomName(t){const n={key:this.KEY,safesearch:!0,per_page:h(this,m),page:t},r=`${this.URL}${this.resources}`;try{return(await N.get(r,{params:n})).data}catch(o){throw new Error(o.response.status)}}get pageSize(){return h(this,m)}}m=new WeakMap;function I(e,t){return e.map(r=>{let{id:o,user:s}=r;const{lastName:c,company:a,phoneNumder:i,email:x,country:w,status:q}=t();return s.length>10&&(s="Bob"),`
          <li class='customer__item'>
          <span class='customer__info--name'> ${s[0].toUpperCase()}${s.slice(1)} ${c}</span>
            <span class='customer__info--company'> ${a}</span>
            <span class='customer__info--phoneNumder'> ${i}</span>
            <span class='customer__info--email'> ${s.toLowerCase()}${x}</span>
            <span class='customer__info--country'> ${w}</span>
            <span class='customer__info--status'> ${q}</span>
          </li>
      `}).join("")}function O(e){return`<p clas='pagination__text' >Showing data ${e*8-7} to ${e*8} of  504 entries</p>`}async function U(e,t){let n=[];console.log("page",e);const r=document.createElement("button");r.textContent="<",r.classList.add("prev__btn"),n.push(r);const o=document.createElement("button");o.textContent=">",o.classList.add("next__btn");let s=document.createElement("button");t-5===e?s.textContent=t-1:s.textContent="...",s.classList.add("page__btn");const c=document.createElement("button");if(c.textContent=t,c.classList.add("page__btn"),e===t)for(let a=t-5;a<=t;a++){const i=document.createElement("button");i.textContent=a,i.classList.add("page__btn"),n.push(i)}else{console.log(e,"+++");for(let a=e;a<=e+3;a++){const i=document.createElement("button");i.textContent=a,i.classList.add("page__btn"),n.push(i)}}return n.push(s,c,o),n}const g=new H;document.querySelector("body");document.querySelector(".sidebar__list");const R=document.querySelectorAll(".sidebar__btn"),S=document.querySelectorAll(".content"),C=document.querySelector(".custom__info"),f=document.querySelector(".sidebar");//!!!!!!!!!!!!!!!!!
document.querySelector(".cont__view");const $=document.querySelector(".header");document.getElementById("customers");const D=document.querySelector(".pagination__text"),E=document.querySelector(".page__buttons");document.querySelector(".prev__btn");document.querySelector(".next__btn");let u=1,d;R.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-content");S.forEach(n=>n.classList.remove("active")),window.innerWidth<=767&&f.classList.add("display__none"),document.getElementById(t).classList.add("active"),$.classList.remove("display__none"),t==="customers"&&_(u)})});S.forEach(e=>{const t=document.createElement("button");f.classList.remove("display__none"),f.classList.add("sidebar"),t.textContent="Back",t.classList.add("back__button"),e.prepend(t),t.addEventListener("click",()=>{e.classList.remove("active"),f.classList.remove("display__none"),$.classList.add("display__none")})});async function _(e){C.innerHTML="";try{e>d&&(e=1);const t=await g.getCustomName(e);d=Math.ceil(t.totalHits/g.pageSize);const n=I(t.hits,k);C.insertAdjacentHTML("beforeend",n);const r=O(e);D.innerHTML=r,F()}catch(t){console.log(t)}finally{e+=1}}async function F(){E.innerHTML="",(await U(u,d)).forEach(t=>{t.addEventListener("click",()=>{let n=t.textContent;if(n===">")u<d-5&&(u++,_(u));else if(n==="<")u>1&&(u--,_(u));else if(n!=="..."){n===d&&(u=n),_(n);//!!!!!!!!!!!!!!!!!
}}),E.appendChild(t)})}
//# sourceMappingURL=index.js.map
