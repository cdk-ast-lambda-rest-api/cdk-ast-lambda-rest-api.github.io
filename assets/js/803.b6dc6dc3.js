"use strict";(self.webpackChunkcalra_docs=self.webpackChunkcalra_docs||[]).push([[803],{2803:(n,t,e)=>{e.r(t),e.d(t,{count:()=>l,create:()=>o,createDocumentsStore:()=>h,get:()=>r,getAll:()=>u,getMultiple:()=>s,load:()=>i,remove:()=>d,save:()=>f,store:()=>a});var c=e(7348);async function o(n,t){return{sharedInternalDocumentStore:t,docs:{},count:0}}async function r(n,t){const e=(0,c.Kj)(n.sharedInternalDocumentStore,t);return n.docs[e]}async function s(n,t){const e=t.length,o=Array.from({length:e});for(let r=0;r<e;r++){const e=(0,c.Kj)(n.sharedInternalDocumentStore,t[r]);o[r]=n.docs[e]}return o}async function u(n){return n.docs}async function a(n,t,e){const o=(0,c.Kj)(n.sharedInternalDocumentStore,t);return void 0===n.docs[o]&&(n.docs[o]=e,n.count++,!0)}async function d(n,t){const e=(0,c.Kj)(n.sharedInternalDocumentStore,t);return void 0!==n.docs[e]&&(delete n.docs[e],n.count--,!0)}async function l(n){return n.count}async function i(n,t){const e=t;return{docs:e.docs,count:e.count,sharedInternalDocumentStore:n}}async function f(n){return{docs:n.docs,count:n.count}}async function h(){return{create:o,get:r,getMultiple:s,getAll:u,store:a,remove:d,count:l,load:i,save:f}}}}]);