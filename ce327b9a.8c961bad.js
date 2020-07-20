(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(190)),i={title:"Devtools"},c={id:"enhancers/devtools",isDocsHomePage:!1,title:"Devtools",description:"Akita provides integration with the Redux dev-tools chrome extension.",source:"@site/docs/enhancers/devtools.mdx",permalink:"/akita/docs/enhancers/devtools",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/enhancers/devtools.mdx",sidebar:"docs",previous:{title:"Server Side Pagination",permalink:"/akita/docs/plugins/pagination"},next:{title:"Persist State",permalink:"/akita/docs/enhancers/persist-state"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]},{value:"Custom Actions",id:"custom-actions",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Akita provides integration with the Redux dev-tools chrome extension. "),Object(r.b)("img",{src:"../../img/devtools.gif",class:"gif"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"Install the Redux extension from the supported App stores ( ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"}),"Chrome"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"}),"Firefox")," )."),Object(r.b)("p",null,"Install the devtools package:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i @datorama/akita-ngdevtools\n")),Object(r.b)("p",null,"And add the ",Object(r.b)("inlineCode",{parentName:"p"},"AkitaNgDevtools")," module:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';\n\n@NgModule({\n  imports: [environment.production ? [] : AkitaNgDevtools.forRoot(options?)]\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n")),Object(r.b)("p",null,"If you're not using Angular, you can call the ",Object(r.b)("inlineCode",{parentName:"p"},"akitaDevtools")," function directly:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { akitaDevtools } from '@datorama/akita';\n\nakitaDevtools(options?);\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"The plugin supports the following options passed as the second function parameter:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"maxAge"),": Maximum amount of actions to be stored in the history tree."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"actionsBlacklist"),": Disallow the passed actions."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"actionsWhitelist"),": Allow only the passed actions."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"storesWhitelist"),": Display only the passed stores."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"logTrace"),": Whether to output a console.trace() for each action in the console."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"shallow")," - Whether to perform a deep compare before showing an action.\nsortAlphabetically"),Object(r.b)("h2",{id:"custom-actions"},"Custom Actions"),Object(r.b)("p",null,"By default, Akita will do its best to describe the actions that occurred, but you can always define your own actions for debugging purposes. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { action } from '@datorama/akita';\n\n@action('Update filter')\nupdateFilter(filter: VISIBILITY_FILTER) {\n  todosStore.update({ filter });\n}\n")),Object(r.b)("p",null,"Or as a function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { logAction } from '@datorama/akita';\n\nupdateFilter(filter: VISIBILITY_FILTER) {\n  logAction('Update filter');\n  todosStore.update({ filter });\n}\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Custom actions will only be dispatched upon a store update."))))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);