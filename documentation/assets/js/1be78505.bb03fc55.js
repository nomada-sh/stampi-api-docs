"use strict";(self.webpackChunkstampi_api_doc=self.webpackChunkstampi_api_doc||[]).push([[9514],{61651:(e,n,t)=>{t.r(n),t.d(n,{default:()=>H});var a=t(67294),r=t(86010),o=t(1944),i=t(35281),d=t(43320),c=t(52802),l=t(74477),s=t(1116),m=t(80215),u=t(67748),b=t(16550),p=t(68612),E=t(95999),h=t(6023);const C="expandButton_m80_",f="expandButtonIcon_BlDH";function g(e){let{toggleSidebar:n}=e;return a.createElement("div",{className:C,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n},a.createElement(h.Z,{className:f}))}const v="docSidebarContainer_b6E3",_="docSidebarContainerHidden_b3ry";function I(e){let{children:n}=e;const t=(0,s.V)();return a.createElement(a.Fragment,{key:(null==t?void 0:t.name)??"noSidebar"},n)}function S(e){let{sidebar:n,hiddenSidebarContainer:t,setHiddenSidebarContainer:o}=e;const{pathname:d}=(0,b.TH)(),[c,l]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&l(!1),o((e=>!e))}),[o,c]);return a.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,v,t&&_),onTransitionEnd:e=>{e.currentTarget.classList.contains(v)&&t&&l(!0)}},a.createElement(I,null,a.createElement(p.Z,{sidebar:n,path:d,onCollapse:s,isHidden:c})),c&&a.createElement(g,{toggleSidebar:s}))}const x={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function k(e){let{hiddenSidebarContainer:n,children:t}=e;const o=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(x.docMainContainer,(n||!o)&&x.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",x.docItemWrapper,n&&x.docItemWrapperEnhanced)},t))}const N="docPage__5DB",M="docsWrapper_BCFX";function Z(e){let{children:n}=e;const t=(0,s.V)(),[r,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:M},a.createElement(u.Z,null),a.createElement("div",{className:N},t&&a.createElement(S,{sidebar:t.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),a.createElement(k,{hiddenSidebarContainer:r},n)))}var w=t(4972),B=t(90197);function T(e){const{versionMetadata:n}=e;return a.createElement(a.Fragment,null,a.createElement(B.Z,{version:n.version,tag:(0,d.os)(n.pluginId,n.version)}),a.createElement(o.d,null,n.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function H(e){const{versionMetadata:n}=e,t=(0,c.hI)(e);if(!t)return a.createElement(w.default,null);const{docElement:d,sidebarName:m,sidebarItems:u}=t;return a.createElement(a.Fragment,null,a.createElement(T,e),a.createElement(o.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(l.q,{version:n},a.createElement(s.b,{name:m,items:u},a.createElement(Z,null,d)))))}},74477:(e,n,t)=>{t.d(n,{E:()=>d,q:()=>i});var a=t(67294),r=t(902);const o=a.createContext(null);function i(e){let{children:n,version:t}=e;return a.createElement(o.Provider,{value:t},n)}function d(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);