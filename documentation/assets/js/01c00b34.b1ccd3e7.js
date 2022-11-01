"use strict";(self.webpackChunkstampi_api_doc=self.webpackChunkstampi_api_doc||[]).push([[1291],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(y,s(s({ref:t},l),{},{components:a})):n.createElement(y,s({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48736:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},s="Empezando con la API de Stampi",i={type:"api",id:"empezando-con-la-api-de-stampi",unversionedId:"empezando-con-la-api-de-stampi",title:"Empezando con la API de Stampi",description:"",slug:"/empezando-con-la-api-de-stampi",frontMatter:{},api:{tags:["Bienvenido"],description:"Stampi ofrece una API para que puedas realizar acciones como crear y consultar los siguientes endpoints:\n\n 1. ***Facturas y borradores*** \n\n2. ***Emisores (Issuers)*** \n\n3. ***Receptores (Receivers)*** \n\n4. ***Conceptos (Products & Services)***\n\nAl igual cat\xe1logos para poder llenar los ***JSON*** correctamente con los datos solicitados. \n\n:::note\nEs importante que cuente con sus accessos ***(API-ID y API_Key)***.\nAntes de empezar a utilizar la API ya que todos los metodos los utilizan para poder mostrar o realizar la acci\xf3n deseada.\n Si no cuenta con sus llaves ingrese a la opci\xf3n del menu **[Empezando](/docs/intro)** para mas informaci\xf3n. \n:::",link:"s",method:"get",path:"/Bienvenido",servers:[{url:"https://api.stampi.app"}],securitySchemes:{BearerAuth:{type:"http",scheme:"bearer"},BasicAuth:{type:"http",scheme:"basic"}},info:{version:"1.0.0",title:"Swagger Petstore",license:{name:"MIT"}},postman:{name:"Empezando con la API de Stampi",description:{content:"Stampi ofrece una API para que puedas realizar acciones como crear y consultar los siguientes endpoints:\n\n 1. ***Facturas y borradores*** \n\n2. ***Emisores (Issuers)*** \n\n3. ***Receptores (Receivers)*** \n\n4. ***Conceptos (Products & Services)***\n\nAl igual cat\xe1logos para poder llenar los ***JSON*** correctamente con los datos solicitados. \n\n:::note\nEs importante que cuente con sus accessos ***(API-ID y API_Key)***.\nAntes de empezar a utilizar la API ya que todos los metodos los utilizan para poder mostrar o realizar la acci\xf3n deseada.\n Si no cuenta con sus llaves ingrese a la opci\xf3n del menu **[Empezando](/docs/intro)** para mas informaci\xf3n. \n:::",type:"text/plain"},url:{path:["Bienvenido"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/empezando-con-la-api-de-stampi",next:{title:"[GET] - Usos CFDI (SAT)",permalink:"/api/get-usos-cfdi-sat"}},p=[],c={toc:p};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"empezando-con-la-api-de-stampi"},"Empezando con la API de Stampi"),(0,r.kt)("p",null,"Stampi ofrece una API para que puedas realizar acciones como crear y consultar los siguientes endpoints:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Facturas y borradores"))," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Emisores (Issuers)"))," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Receptores (Receivers)"))," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Conceptos (Products & Services)"))))),(0,r.kt)("p",null,"Al igual cat\xe1logos para poder llenar los ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JSON"))," correctamente con los datos solicitados. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Es importante que cuente con sus accessos ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"(API-ID y API_Key)")),".\nAntes de empezar a utilizar la API ya que todos los metodos los utilizan para poder mostrar o realizar la acci\xf3n deseada.\nSi no cuenta con sus llaves ingrese a la opci\xf3n del menu ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/intro"},"Empezando"))," para mas informaci\xf3n. "))))}l.isMDXComponent=!0}}]);