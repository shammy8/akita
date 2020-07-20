(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(190)),c={title:"Local Component State"},s={id:"angular/local-state",isDocsHomePage:!1,title:"Local Component State",description:"We can manage a local component state using Akita and Angular. When we provide a store in the component's providers, it enables us to get a new store instance for each component we create.",source:"@site/docs/angular/local-state.mdx",permalink:"/akita/docs/angular/local-state",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/angular/local-state.mdx",sidebar:"docs",previous:{title:"Architecture",permalink:"/akita/docs/angular/architecture"},next:{title:"Ng Entity Service",permalink:"/akita/docs/angular/entity-service"}},u=[{value:"Counter State Provider",id:"counter-state-provider",children:[]},{value:"Dynamic Stores",id:"dynamic-stores",children:[]}],i={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We can manage a local component state using Akita and Angular. When we provide a ",Object(a.b)("inlineCode",{parentName:"p"},"store")," in the component's ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://netbasal.com/angular-services-do-not-have-to-be-singletons-ffa879e62082"}),"providers"),", it enables us to get a new store instance for each component we create."),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'{7} title="counter.state.ts"',"{7}":!0,title:'"counter.state.ts"'}),"import { guid, Store, StoreConfig } from '@datorama/akita';\n\ntype State = { counter: number };\n\nclass CounterStore extends Store<State> {\n  constructor() { \n    super({ counter: 0 }, { name: `Counter-${guid()}` }) \n  }\n}\n\n@Injectable()\nclass CounterQuery extends Query<State> {\n  constructor(protected store: CounterStore) { super(store); }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'{7} title="counter.component.ts"',"{7}":!0,title:'"counter.component.ts"'}),"@Component({\n  selector: 'counter',\n  template: `\n    {{ counter$ | async }}\n    <button (click)=\"increment()\">Increment</button>\n  `,\n  providers: [CounterStore, CounterQuery]\n})\nexport class CounterComponent {\n  counter$ = this.query.select('counter');\n  @Output() update = this.counter$.pipe(skip(1));\n\n  constructor(\n    private store: CounterStore,\n    private query: CounterQuery\n  ) { }\n\n  increment() {\n    this.store.update(({ counter }) => ({ counter: counter + 1 }));\n  }\n}\n")),Object(a.b)("h2",{id:"counter-state-provider"},"Counter State Provider"),Object(a.b)("p",null,"You can also take a different approach and create a counter state provider:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="counter.state"',title:'"counter.state"'}),"type State = { counter: number };\n\nclass CounterState {\n  store: Store<State>;\n  query: Query<State>;\n}\n\nfunction counterStateFactory(element: ElementRef<Element>) {\n  const name = element.nativeElement.getAttribute('name');\n  const store = new Store<State>({ counter: 0 }, { name });\n  const query = new Query<State>(store);\n\n  return {\n    store,\n    query\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'{7} title="counter.component.ts"',"{7}":!0,title:'"counter.component.ts"'}),"@Component({\n  selector: 'counter',\n  template: `\n    {{ counter$ | async }}\n    <button (click)=\"increment()\">Increment</button>\n  `,\n  providers: [CounterState]\n})\nexport class CounterComponent {\n  counter$ = this.state.query.select('counter');\n  @Output() update = this.counter$.pipe(skip(1));\n\n  constructor(\n    private state: CounterState\n  ) { }\n\n  increment() {\n    this.state.store.update(({ counter }) => ({ counter: counter + 1 }));\n  }\n}\n")),Object(a.b)("p",null,"Open the Redux devtools, and you'll see the magic. You can play with the code ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://ng-run.com/edit/tgmNS28x8z5UpWcyh7GN?open=app%2Fcounter%2Fcounter.component.ts"}),"here"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'}),'<counter (update)="onUpdate($event)" name="one"></counter>\n<counter (update)="onUpdate($event)" name="two"></counter>\n<counter (update)="onUpdate($event)" name="three"></counter>\n')),Object(a.b)("h2",{id:"dynamic-stores"},"Dynamic Stores"),Object(a.b)("p",null,"You can also manage a collection of stores in a service. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:"counters.service.ts","counters.service.ts":!0}),"@Injectable({ providedIn: 'root })\nexport class CountersService {\n  private stores = new Map();\n\n  createState(name: string) {\n    const store = new Store({ counter: 0 }, { name });\n    const query = new Query(store);\n\n    const state = { store, query };\n    this.stores.set(name, state);\n\n    return state\n  } \n\n  getState(name: string) {\n    return this.stores.get(name);\n  } \n}\n")))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},l=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,d=l["".concat(c,".").concat(b)]||l[b]||m[b]||a;return n?o.a.createElement(d,s({ref:t},i,{components:n})):o.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);