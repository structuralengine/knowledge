"use strict";(self.webpackChunkstrucutalcode=self.webpackChunkstrucutalcode||[]).push([[76],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(g,l(l({ref:t},i),{},{components:r})):a.createElement(g,l({ref:t},i))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"welcome",title:"Welcome",authors:["sasaco"],tags:["hello","docusaurus"]},l=void 0,s={permalink:"/blog/welcome",editUrl:"https://github.com/fsasaco/structuralcode/tree/main/packages/create-docusaurus/templates/shared/blog/index.md",source:"@site/blog/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2023-05-23T13:27:46.000Z",formattedDate:"May 23, 2023",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"Yosuke Sasazawa",title:"Maintainer of StructuralCode",url:"https://github.com/sasaco",imageURL:"https://github.com/sasaco.png",key:"sasaco"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["sasaco"],tags:["hello","docusaurus"]},nextItem:{title:"GitHub Actions \u3067 Git HUb Pages \u306b\u30c7\u30d7\u30ed\u30a4\u3057\u305f",permalink:"/blog/first-blog-post"}},u={authorsImageUrls:[void 0]},c=[],i={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,n.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,n.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,n.kt)("p",null,"Regular blog authors can be added to ",(0,n.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,n.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,n.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:r(1627).Z,width:"1500",height:"500"})),(0,n.kt)("p",null,"The blog supports tags as well!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,n.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}d.isMDXComponent=!0},1627:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);