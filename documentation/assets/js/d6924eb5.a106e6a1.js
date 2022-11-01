"use strict";(self.webpackChunkstampi_api_doc=self.webpackChunkstampi_api_doc||[]).push([[833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4520:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},l="[GET] - Cliente por id",o={type:"api",id:"get-cliente-por-id",unversionedId:"get-cliente-por-id",title:"[GET] - Cliente por id",description:"",slug:"/get-cliente-por-id",frontMatter:{},api:{operationId:"Obtener un cliente por id",tags:["Clientes"],description:"Para obtener un ***cliente (receiver)*** por su identificador, debe proporcionar el los encabezados ***API-ID, API-Key*** y  ***ID*** del cliente ",parameters:[{name:"API-ID",in:"header",description:"Generada por Stampi",required:!0,schema:{type:"string"}},{name:"API-Key",in:"header",description:"Generada por Stampi",required:!0,schema:{type:"string"}},{name:"id",in:"path",description:"Identificador del cliente.",required:!0,schema:{type:"string",format:"uuid"}}],responses:{200:{description:"Success Response",content:{"text/plain":{schema:{type:"object",description:'\n\t{\n    "status": 200,\n    "error": null,\n    "data": {\n            "id": "87442344-723f-11ec-87dd-54484049ead9c",\n            "createdAt": "2022-01-10T12:02:51.953849-06:00",\n            "updatedAt": "2022-07-19T18:31:14.119138-05:00",\n            "clientCode": "0004",\n            "tradeName": "Monster Inc.", \n            "businessName": "Monster Inc.",\n            "companyId": "25ecbe52-251f-11ec-a102-1esdf5421efb72",\n            "taxId": "ASWS010101000",\n            "postalCode": "47512",\n            "contacts": [\n              {\n                "fullName": "Will Smith",\n                "officePhone": {\n                  "short": "MX"\n                },\n                "cellPhone": {\n                  "short": "MX"\n                },\n                "email": "will.smith@gmail.com",\n                "socialNetworks": {}\n              }\n            ],\n            "useCfdiId": "630f20eb-c458-46a4-ac08-869cfc37665c",\n            "address": "Wachin, UE",\n            "taxRegimeId": "10ad5696-12f5-4758-8aef-76831170248f",\n            "outsider": false\n          }\n    \n\t}'}}}}},method:"get",path:"/receiver/one/{id}",servers:[{url:"https://api.stampi.app"}],securitySchemes:{BearerAuth:{type:"http",scheme:"bearer"},BasicAuth:{type:"http",scheme:"basic"}},info:{version:"1.0.0",title:"Swagger Petstore",license:{name:"MIT"}},postman:{name:"[GET] - Cliente por id",description:{content:"Para obtener un ***cliente (receiver)*** por su identificador, debe proporcionar el los encabezados ***API-ID, API-Key*** y  ***ID*** del cliente ",type:"text/plain"},url:{path:["receiver","one",":id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) Identificador del cliente.",type:"text/plain"},type:"any",value:"<uuid>",key:"id"}]},header:[{description:{content:"(Required) Generada por Stampi",type:"text/plain"},key:"API-ID",value:"<string>"},{description:{content:"(Required) Generada por Stampi",type:"text/plain"},key:"API-Key",value:"<string>"}],method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/get-cliente-por-id",previous:{title:"[GET] - Clientes",permalink:"/api/get-clientes"},next:{title:"[POST] - Crear cliente",permalink:"/api/post-crear-cliente"}},c=[],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get---cliente-por-id"},"[GET]"," - Cliente por id"),(0,a.kt)("p",null,"Para obtener un ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"cliente (receiver)"))," por su identificador, debe proporcionar el los encabezados ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"API-ID, API-Key"))," y  ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ID"))," del cliente "),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Identificador del cliente.")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Header Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"API-ID"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Generada por Stampi")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"API-Key"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Generada por Stampi")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Success Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"status": 200,\n"error": null,\n"data": {\n        "id": "87442344-723f-11ec-87dd-54484049ead9c",\n        "createdAt": "2022-01-10T12:02:51.953849-06:00",\n        "updatedAt": "2022-07-19T18:31:14.119138-05:00",\n        "clientCode": "0004",\n        "tradeName": "Monster Inc.", \n        "businessName": "Monster Inc.",\n        "companyId": "25ecbe52-251f-11ec-a102-1esdf5421efb72",\n        "taxId": "ASWS010101000",\n        "postalCode": "47512",\n        "contacts": [\n          {\n            "fullName": "Will Smith",\n            "officePhone": {\n              "short": "MX"\n            },\n            "cellPhone": {\n              "short": "MX"\n            },\n            "email": "will.smith@gmail.com",\n            "socialNetworks": {}\n          }\n        ],\n        "useCfdiId": "630f20eb-c458-46a4-ac08-869cfc37665c",\n        "address": "Wachin, UE",\n        "taxRegimeId": "10ad5696-12f5-4758-8aef-76831170248f",\n        "outsider": false\n      }\n\n}\n')))))))))))))}s.isMDXComponent=!0}}]);