"use strict";(self.webpackChunkcalra_docs=self.webpackChunkcalra_docs||[]).push([[4583],{7251:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var r=t(4164),s=t(8774),o=t(4586),i=t(1123);const a={features:"features_t9lD",featureSvg:"featureSvg_GfXr",usage:"usage_UZY2",usageRow:"usageRow_uz_Q",usageSection:"usageSection_PFTD",docsLink:"docsLink_Ygm1"};var l=t(1656);function c(e){const n=(Array.isArray(e)?e:[e]).flatMap((e=>e.split("\n"))),t=function(e){return(""===e[0]?e[1]:e[0]).match(/^\s*/)[0].length}(n);return n.map((e=>e.slice(Math.max(0,t)))).join("\n").trim()}var u=t(6540),d=t(5556),h=t.n(d);function m(){return m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}function g(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var j=(0,u.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,s=e.size,o=void 0===s?24:s,i=g(e,["color","size"]);return u.createElement("svg",m({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),u.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.createElement("polyline",{points:"12 5 19 12 12 19"}))}));j.propTypes={color:h().string,size:h().oneOfType([h().string,h().number])},j.displayName="ArrowRight";const p=j;var x=t(4848);function b(){return(0,x.jsxs)("section",{className:a.usage,children:[(0,x.jsx)("hr",{}),(0,x.jsx)("div",{className:"container--small",children:(0,x.jsxs)("div",{className:(0,r.A)("row",a.usageRow),children:[(0,x.jsxs)("div",{className:a.usageSection,children:[(0,x.jsx)("h2",{children:"Install dependencies"}),(0,x.jsx)(l.A,{language:"bash",children:c`
                pip install calra-cdk calra-lambda
              `}),(0,x.jsx)("p",{className:a.docsLink,children:(0,x.jsxs)(s.A,{to:"/docs/getting-started/",children:["Getting Started ",(0,x.jsx)(p,{size:"1.25em"})]})})]}),(0,x.jsxs)("div",{className:a.usageSection,children:[(0,x.jsx)("h2",{children:"Define Builder instance"}),(0,x.jsx)(l.A,{language:"js",children:c`
              from calra_cdk import ResourceBuilder

              builder = ResourceBuilder()
            `}),(0,x.jsx)("p",{className:a.docsLink,children:(0,x.jsxs)(s.A,{to:"/docs/cdk/resourcebuilder/",children:["Resource Builder ",(0,x.jsx)(p,{size:"1.25em"})]})})]}),(0,x.jsxs)("div",{className:a.usageSection,children:[(0,x.jsx)("h2",{children:"Add build options"}),(0,x.jsx)(l.A,{language:"js",children:c`
              builder.set_default_timeout(Duration.Seconds(10))
              builder.add_custom_environment("DB_PORT",30001)

              builder.build()
            `}),(0,x.jsx)("p",{className:a.docsLink,children:(0,x.jsxs)(s.A,{to:"/docs/cdk/resourcebuilder/",children:["Discover options ",(0,x.jsx)(p,{size:"1.25em"})]})})]})]})})]})}const f={heroBanner:"heroBanner_qdFl",heroBannerContainer:"heroBannerContainer_Q96R",heroSubtitle:"heroSubtitle_jFu1",textContainer:"textContainer_n5O4",buttons:"buttons_AeoN",buttonGroup:"buttonGroup__2Xv",supportButton:"supportButton_VQHI"};function v(){const{siteConfig:e}=(0,o.A)();return(0,x.jsx)("header",{className:(0,r.A)("hero hero--primary",f.heroBanner),children:(0,x.jsxs)("div",{className:(0,r.A)("container",f.heroBannerContainer),children:[(0,x.jsx)("img",{src:"/img/logo.svg",className:"container-logo",alt:""}),(0,x.jsxs)("div",{className:f.textContainer,children:[(0,x.jsx)("h1",{className:"hero__title",children:e.title}),(0,x.jsx)("p",{className:f.heroSubtitle,children:e.tagline}),(0,x.jsxs)("div",{className:f.buttons,children:[(0,x.jsxs)("div",{className:f.buttonGroup,children:[(0,x.jsx)(s.A,{className:"button button--primary button--lg",children:"Getting Started"}),(0,x.jsx)(s.A,{className:"button button--secondary button--lg",children:"API Reference"})]}),(0,x.jsxs)("div",{className:f.buttonGroup,children:[(0,x.jsx)(s.A,{className:"button button--secondary button--lg",children:"todo"}),(0,x.jsx)(s.A,{className:(0,r.A)("button button--secondary button--lg",f.supportButton),children:"todo2"})]})]})]})]})})}function _(){const{siteConfig:e}=(0,o.A)();return(0,x.jsxs)(i.A,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,x.jsx)(v,{}),(0,x.jsx)("main",{children:(0,x.jsx)(b,{})})]})}}}]);