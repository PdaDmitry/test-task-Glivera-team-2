var b=e=>{throw TypeError(e)};var M=(e,t,n)=>t.has(e)||b("Cannot "+n);var f=(e,t,n)=>(M(e,t,"read from private field"),n?n.call(e):t.get(e)),L=(e,t,n)=>t.has(e)?b("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{a as T}from"./assets/vendor-CNNbG8jS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const A=["Graham","Howell","Bauch","Lebsack","Dietrich","Schulist","Weissnat","Runolfsdottir","Reichert","DuBuque"],E=["Yahoo","Microsoft","Google","Tesla","Adobe","Foxtrot","Comfy","Feacebook","Rozetca","Adidas"],k=["Ukraine","United States","Israel","France","Germany","Türkiye","Spain","Greece","Denmark","Norway"],_=["Active","Inactive"],H=["(205)","(302)","(252)","(629)","(406)","(208)","(704)","(050)","(067)","(099)"],m=["0","1","2","3","4","5","6","7","8","9"],u=e=>{const t=Math.floor(Math.random()*E.length),n=Math.floor(Math.random()*_.length);return e===_?e[n]:e[t]},I=()=>{let e=u(A),t=u(E),n=`${u(H)} 555-${u(m)}${u(m)}${u(m)}${u(m)}`,r=u(k),s=`@${t.toLowerCase()}.com`,o=u(_);return{id:Date.now(),lastName:e,company:t,phoneNumder:n,email:s,country:r,status:o}};var d;class O{constructor(){L(this,d,8);this.KEY="42263617-81d7156b9f7b88cd7b1016c2a",this.URL="https://pixabay.com",this.resources="/api/"}async getCustomName(t){const n={key:this.KEY,safesearch:!0,per_page:f(this,d),page:t},r=`${this.URL}${this.resources}`;try{return(await T.get(r,{params:n})).data}catch(s){throw new Error(s.response.status)}}get pageSize(){return f(this,d)}}d=new WeakMap;function U(e,t){return e.map(r=>{let{id:s,user:o}=r;const{lastName:i,company:c,phoneNumder:l,email:q,country:N,status:y}=t(),B=y.toLowerCase()==="active"?"status__active":"status__inactive";return o.length>10&&(o="Bob"),`
          <li class='customer__item'>
          <span class='customer__info--name'> ${o[0].toUpperCase()}${o.slice(1)} ${i}</span>
            <span class='customer__info--company'> ${c}</span>
            <span class='customer__info--phoneNumder'> ${l}</span>
            <span class='customer__info--email'> ${o.toLowerCase()}${q}</span>
            <span class='customer__info--country'> ${N}</span>
            <span class='customer__info--status ${B}'> ${y}</span>
          </li>
      `}).join("")}function R(e){return`<p clas='text' >Showing data ${e*8-7} to ${e*8} of  504 entries</p>`}async function D(e,t){let n=[];const r=document.createElement("button");r.textContent="<",r.classList.add("prev__btn"),n.push(r);let s,o;e<=3?(s=1,o=Math.min(5,t)):e>=t-2?(s=Math.max(t-4,1),o=t):(s=e-2,o=e+2);for(let c=s;c<=o;c++){const l=document.createElement("button");l.textContent=c,l.classList.add("page__btn"),c===e&&l.classList.add("pressed__btn"),n.push(l)}if(o<t&&e<t-3){const c=document.createElement("button");c.textContent="...",c.classList.add("page__btn"),n.push(c)}if(o<t){const c=document.createElement("button");c.textContent=t,c.classList.add("page__btn"),n.push(c)}const i=document.createElement("button");return i.textContent=">",i.classList.add("next__btn"),n.push(i),n}const C=new O;document.querySelector("body");document.querySelector(".sidebar__list");const F=document.querySelectorAll(".sidebar__btn"),w=document.querySelectorAll(".content"),g=document.querySelector(".custom__info"),h=document.querySelector(".sidebar"),S=document.querySelector(".cont__view");document.querySelector(".input");document.getElementById("customers");const G=document.querySelector(".pagination__text"),v=document.querySelector(".cont__buttons");document.querySelector(".prev__btn");document.querySelector(".next__btn");let a=1,p;F.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-content");w.forEach(n=>n.classList.remove("active")),window.innerWidth<=767&&h.classList.add("display__none"),document.getElementById(t).classList.add("active"),S.classList.remove("display__none"),t==="customers"&&$(a)})});w.forEach(e=>{const t=document.createElement("button");t.textContent="Back",t.classList.add("back__button"),e.prepend(t),t.addEventListener("click",()=>{h.classList.remove("display__none"),h.classList.add("sidebar"),window.innerWidth<=767&&S.classList.add("display__none")})});async function $(e){g.innerHTML="";try{e>p&&(e=1);const t=await C.getCustomName(e);p=Math.ceil(t.totalHits/C.pageSize);const n=U(t.hits,I);g.insertAdjacentHTML("beforeend",n);const r=R(e);G.innerHTML=r,x()}catch(t){console.log(t)}finally{e+=1}}async function x(){v.innerHTML="",(await D(a,p)).forEach(t=>{Number(t.textContent)===a&&t.classList.add("pressed__btn"),t.addEventListener("click",()=>{let n=t.textContent,r=a;n===">"?a<p&&a++:n==="<"?a>1&&a--:n!=="..."&&(a=Number(n)),r!==a&&($(a),x())}),v.appendChild(t)})}
//# sourceMappingURL=index.js.map
