"use strict";(self.webpackChunkcalra_docs=self.webpackChunkcalra_docs||[]).push([[249],{6535:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),s=n(4164),i=n(1123),l=n(4581),r=n(8774),o=n(1312),c=n(6347),d=n(9169);function m(e){const{pathname:t}=(0,c.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=n(4848);function h(e){let{sidebar:t}=e;const n=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,s.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,s.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,s.A)(u.sidebarItemList,"clean-list"),children:n.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=n(5600);function v(e){let{sidebar:t}=e;const n=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:n.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,g.jsx)(x.GX,{component:v,props:e})}function f(e){let{sidebar:t}=e;const n=(0,l.l)();return t?.items.length?"mobile"===n?(0,g.jsx)(p,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function j(e){const{sidebar:t,toc:n,children:a,...l}=e,r=t&&t.items.length>0;return(0,g.jsx)(i.A,{...l,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(f,{sidebar:t}),(0,g.jsx)("main",{className:(0,s.A)("col",{"col--7":r,"col--9 col--offset-1":!r}),children:a}),n&&(0,g.jsx)("div",{className:"col col--2",children:n})]})})})}},4651:(e,t,n)=>{n.d(t,{A:()=>P});n(6540);var a=n(4164),s=n(7131),i=n(4848);function l(e){let{children:t,className:n}=e;return(0,i.jsx)("article",{className:n,children:t})}var r=n(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,s.e)(),{permalink:c,title:d}=n,m=l?"h1":"h2";return(0,i.jsx)(m,{className:(0,a.A)(o.title,t),children:l?d:(0,i.jsx)(r.A,{to:c,children:d})})}var d=n(1312),m=n(5846),u=n(6266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,children:n})}function v(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:n}=(0,s.e)(),{date:l,readingTime:r}=n,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,a.A)(g.container,"margin-vert--md",t),children:[(0,i.jsx)(x,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==r&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{}),(0,i.jsx)(h,{readingTime:r})]})]});var c}function f(e){return e.href?(0,i.jsx)(r.A,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function j(e){let{author:t,className:n}=e;const{name:s,title:l,url:r,imageURL:o,email:c}=t,d=r||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,a.A)("avatar margin-bottom--sm",n),children:[o&&(0,i.jsx)(f,{href:d,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:s})}),s&&(0,i.jsxs)("div",{className:"avatar__intro",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(f,{href:d,children:(0,i.jsx)("span",{children:s})})}),l&&(0,i.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,s.e)();if(0===n.length)return null;const r=n.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",r?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.A)(!r&&"col col--6",r?b.imageOnlyAuthorCol:b.authorCol),children:(0,i.jsx)(j,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(p,{}),(0,i.jsx)(A,{})]})}var _=n(440),L=n(4993);function k(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,s.e)();return(0,i.jsx)("div",{id:l?_.blogPostContainerID:void 0,className:(0,a.A)("markdown",n),children:(0,i.jsx)(L.A,{children:t})})}var C=n(7559),I=n(4336),y=n(2053);function H(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function T(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(r.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(H,{})})}function w(){const{metadata:e,isBlogPostPage:t}=(0,s.e)(),{tags:n,title:l,editUrl:r,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=n.length>0;if(!(u||m||r))return null;if(t){const e=!!(r||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,a.A)("row","margin-top--sm",C.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(y.A,{tags:n})})}),e&&(0,i.jsx)(I.A,{className:(0,a.A)("margin-top--sm",C.G.blog.blogFooterEditMetaRow),editUrl:r,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,a.A)("col",{"col--9":m}),children:(0,i.jsx)(y.A,{tags:n})}),m&&(0,i.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":u}),children:(0,i.jsx)(T,{blogPostTitle:l,to:e.permalink})})]})}function P(e){let{children:t,className:n}=e;const r=function(){const{isBlogPostPage:e}=(0,s.e)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(l,{className:(0,a.A)(r,n),children:[(0,i.jsx)(N,{}),(0,i.jsx)(k,{children:t}),(0,i.jsx)(w,{})]})}},3858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(6540);var a=n(4164),s=n(1213),i=n(7559),l=n(7131),r=n(6535),o=n(4651),c=n(1312),d=n(9022),m=n(4848);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,l.e)(),{title:n,description:a,date:i,tags:r,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.be,{title:n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var h=n(5260),x=n(6676);function v(){const e=(0,x.J)();return(0,m.jsx)(h.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=n(7763),f=n(5496);function j(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,l.e)(),{nextItem:i,prevItem:c,frontMatter:d,unlisted:g}=a,{hide_table_of_contents:h,toc_min_heading_level:x,toc_max_heading_level:v}=d;return(0,m.jsxs)(r.A,{sidebar:t,toc:!h&&s.length>0?(0,m.jsx)(p.A,{toc:s,minHeadingLevel:x,maxHeadingLevel:v}):void 0,children:[g&&(0,m.jsx)(f.A,{}),(0,m.jsx)(o.A,{children:n}),(i||c)&&(0,m.jsx)(u,{nextItem:i,prevItem:c})]})}function b(e){const t=e.content;return(0,m.jsx)(l.i,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(v,{}),(0,m.jsx)(j,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},9022:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(8774),i=n(4848);function l(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(4848);const r="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.A,{...n,linkClassName:r,linkActiveClassName:o})})}},5195:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(6540),s=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>r(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=o(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var m=n(8774),u=n(4848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const x=(0,s.p)(),v=c??x.tableOfContents.minHeadingLevel,p=m??x.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:v,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:p}}),[r,o,v,p])),(0,u.jsx)(h,{toc:f,className:n,linkClassName:r,...g})}},6133:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4164),s=n(8774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(4848);function r(e){let{permalink:t,label:n,count:r}=e;return(0,l.jsxs)(s.A,{href:t,className:(0,a.A)(i.tag,r?i.tagWithCount:i.tagRegular),children:[n,r&&(0,l.jsx)("span",{children:r})]})}},2053:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),s=n(1312),i=n(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var r=n(4848);function o(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,a.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,r.jsx)("li",{className:l.tag,children:(0,r.jsx)(i.A,{label:t,permalink:n})},n)}))})]})}},5496:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(6445),i=n(7559),l=n(3472),r=n(4848);function o(e){let{className:t}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(s.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,r.jsx)(s.Uh,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.AE,{}),(0,r.jsx)(o,{...e})]})}}}]);