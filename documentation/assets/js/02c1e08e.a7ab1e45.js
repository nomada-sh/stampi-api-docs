"use strict";(self.webpackChunkstampi_api_doc=self.webpackChunkstampi_api_doc||[]).push([[3460],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47836:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l="[PUT] - Actualizar Emisor",o={type:"api",id:"put-actualizar-emisor",unversionedId:"put-actualizar-emisor",title:"[PUT] - Actualizar Emisor",description:"",slug:"/put-actualizar-emisor",frontMatter:{},api:{operationId:"Actualizar emisor",tags:["Emisores"],description:"Para actualizar un ***emisor (issuer)***, debe proporcionar en los encabezados ***API-ID, API-Key y CompanyID perteneciente***, al igual que los archivos ***.cer y .ker*** con su contrase\xf1a correspondiente",parameters:[{name:"API-ID",in:"header",description:"Generada por Stampi",required:!0,schema:{type:"string"}},{name:"API-Key",in:"header",description:"Generada por Stampi",required:!0,schema:{type:"string"}},{name:"CompanyID",in:"header",description:"Hace referencia al identificador de la compa\xf1\xeda a la que pertenece el usuario.",required:!0,schema:{type:"string",format:"uuid"}}],requestBody:{content:{"application/json":{schema:{properties:{certFile:{type:"string",format:"base64",description:"Archivo .cer en base 64"},keyFile:{type:"string",format:"base64",description:"Archivo .key en base 64"},password:{type:"string",description:"Contrase\xf1a del archivo .key"},tradeName:{type:"string",description:"Nombre comercial"},businessName:{type:"string",description:"Raz\xf3n social"},taxId:{type:"string",description:"RFC (Registro Federal de Contribuyentes)"},taxRegimeId:{type:"string",format:"uuid",description:"Se refiere al tipo de r\xe9gimen en el cual esta registrado el cliente. Para este campo es necesario que vea nuestro cat\xe1logo de r\xe9gimen fiscales para extraer el id que este campo requiere"},address:{type:"string",description:"Se refiere al direcci\xf3n que tiene registrada en el sat el cliente (fisica o moral)"},postalCode:{type:"string",description:"C\xf3digo postal"},lastFolio:{type:"string",description:"Se refiere al \xfaltimo folio de factura timbrada, en caso de que no tenga facturas asociadas a este RFC dejar en 0",enum:[0]},lastFolioPago:{type:"string",description:"Pago del \xfaltimo folio utilizado. En caso de que no tenga facturas asociadas a este RFC dejar en 0",enum:[0]},cfdiVersion:{type:"string",description:"Se refiere a la versi\xf3n del CFDI (3.3, 4.0)",enum:["3.3","4.0"]},pagoVersion:{type:"string",description:"Se refiere a al complemento de pago (Version 1.0, Version 2.0)",enum:["1.0","2.0"]},cancelacionVersion:{type:"string",description:"Se refiere a la versi\xf3n del CFDI (3.3, 4.0) cancelaci\xf3n",enum:["3.3","4.0"]}}}}}},responses:{201:{description:"Success Response",content:{"text/plain":{schema:{type:"object",description:'\n\t{\n    "status": 200,\n    "error": null,\n    "data": {\n        "id": "aab78dse-dac9-10ec-8562-5213049e4d9c",\n        "createdAt": "2022-05-23T12:49:17.438393-05:00",\n        "updatedAt": "2022-06-13T15:40:52.796059-05:00",\n        "tradeName": "WILL SMITH MENDEZ",\n        "businessName": "WILL SMITH MENDEZ",\n        "companyId": "25ecbe52-251f-11ec-a102-1e00621e1b72",\n        "taxId": "WISM620210DQ5",\n        "postalCode": "49512",\n        "keyFile": "",\n        "certFile": "",\n        "password": "12345678a",\n        "profilePicture": "",\n        "taxRegimeId": "4b010387-cf9c-43a6-bd22-a2abd8f7b852",\n        "lastFolio": "0",\n        "blockBatchWebhook": false,\n        "lastFolioPago": "0",\n        "series": null,\n        "responsible": null,\n        "cfdiVersion": "4.0",\n        "pagoVersion": "2.0",\n        "cancelacionVersion": "4.0"\n      }\n\t}'}}}}},method:"put",path:"/issuer",servers:[{url:"https://api.stampi.app"}],securitySchemes:{BearerAuth:{type:"http",scheme:"bearer"},BasicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{certFile:"string",keyFile:"string",password:"string",tradeName:"string",businessName:"string",taxId:"string",taxRegimeId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",address:"string",postalCode:"string",lastFolio:0,lastFolioPago:0,cfdiVersion:"3.3",pagoVersion:"1.0",cancelacionVersion:"3.3"},info:{version:"1.0.0",title:"Swagger Petstore",license:{name:"MIT"}},postman:{name:"[PUT] - Actualizar Emisor",description:{content:"Para actualizar un ***emisor (issuer)***, debe proporcionar en los encabezados ***API-ID, API-Key y CompanyID perteneciente***, al igual que los archivos ***.cer y .ker*** con su contrase\xf1a correspondiente",type:"text/plain"},url:{path:["issuer"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{description:{content:"(Required) Generada por Stampi",type:"text/plain"},key:"API-ID",value:"<string>"},{description:{content:"(Required) Generada por Stampi",type:"text/plain"},key:"API-Key",value:"<string>"},{description:{content:"(Required) Hace referencia al identificador de la compa\xf1\xeda a la que pertenece el usuario.",type:"text/plain"},key:"CompanyID",value:"<uuid>"},{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'{\n    "certFile": "<base64>",\n    "keyFile": "<base64>",\n    "password": "<string>",\n    "tradeName": "<string>",\n    "businessName": "<string>",\n    "taxId": "<string>",\n    "taxRegimeId": "<uuid>",\n    "address": "<string>",\n    "postalCode": "<string>",\n    "lastFolio": "<string>",\n    "lastFolioPago": "<string>",\n    "cfdiVersion": "<string>",\n    "pagoVersion": "<string>",\n    "cancelacionVersion": "<string>"\n}'}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/put-actualizar-emisor",previous:{title:"[POST] - Crear emisor",permalink:"/api/post-crear-emisor"},next:{title:"[DELETE] - Eliminar un emisor",permalink:"/api/delete-eliminar-un-emisor"}},s=[],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"put---actualizar-emisor"},"[PUT]"," - Actualizar Emisor"),(0,r.kt)("p",null,"Para actualizar un ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"emisor (issuer)")),", debe proporcionar en los encabezados ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"API-ID, API-Key y CompanyID perteneciente")),", al igual que los archivos ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},".cer y .ker"))," con su contrase\xf1a correspondiente"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Header Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"API-ID"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Generada por Stampi")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"API-Key"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Generada por Stampi")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"CompanyID"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Hace referencia al identificador de la compa\xf1\xeda a la que pertenece el usuario.")))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"certFile"),(0,r.kt)("span",{style:{opacity:"0.6"}}," base64"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Archivo .cer en base 64")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"keyFile"),(0,r.kt)("span",{style:{opacity:"0.6"}}," base64"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Archivo .key en base 64")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"password"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Contrase\xf1a del archivo .key")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"tradeName"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Nombre comercial")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"businessName"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Raz\xf3n social")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"taxId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"RFC (Registro Federal de Contribuyentes)")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"taxRegimeId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Se refiere al tipo de r\xe9gimen en el cual esta registrado el cliente. Para este campo es necesario que vea nuestro cat\xe1logo de r\xe9gimen fiscales para extraer el id que este campo requiere")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"address"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Se refiere al direcci\xf3n que tiene registrada en el sat el cliente (fisica o moral)")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"postalCode"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"C\xf3digo postal")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lastFolio"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Se refiere al \xfaltimo folio de factura timbrada, en caso de que no tenga facturas asociadas a este RFC dejar en 0")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lastFolioPago"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Pago del \xfaltimo folio utilizado. En caso de que no tenga facturas asociadas a este RFC dejar en 0")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"cfdiVersion"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"3.3"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4.0"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Se refiere a la versi\xf3n del CFDI (3.3, 4.0)")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"pagoVersion"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"1.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Se refiere a al complemento de pago (Version 1.0, Version 2.0)")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"cancelacionVersion"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"3.3"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4.0"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Se refiere a la versi\xf3n del CFDI (3.3, 4.0) cancelaci\xf3n")))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"201")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Success Response"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n"status": 200,\n"error": null,\n"data": {\n    "id": "aab78dse-dac9-10ec-8562-5213049e4d9c",\n    "createdAt": "2022-05-23T12:49:17.438393-05:00",\n    "updatedAt": "2022-06-13T15:40:52.796059-05:00",\n    "tradeName": "WILL SMITH MENDEZ",\n    "businessName": "WILL SMITH MENDEZ",\n    "companyId": "25ecbe52-251f-11ec-a102-1e00621e1b72",\n    "taxId": "WISM620210DQ5",\n    "postalCode": "49512",\n    "keyFile": "",\n    "certFile": "",\n    "password": "12345678a",\n    "profilePicture": "",\n    "taxRegimeId": "4b010387-cf9c-43a6-bd22-a2abd8f7b852",\n    "lastFolio": "0",\n    "blockBatchWebhook": false,\n    "lastFolioPago": "0",\n    "series": null,\n    "responsible": null,\n    "cfdiVersion": "4.0",\n    "pagoVersion": "2.0",\n    "cancelacionVersion": "4.0"\n  }\n}\n')))))))))))))}d.isMDXComponent=!0}}]);