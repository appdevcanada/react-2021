(this["webpackJsonpswapi-project"]=this["webpackJsonpswapi-project"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(23),i=(c(34),c(3)),r=(c(35),c(4)),j=(c(36),c(37),c(0));function l(e){return Object(j.jsxs)("nav",{className:"mainnav",children:[Object(j.jsx)(r.c,{to:"/films",className:function(e){return e.isActive?"activeLink":""},children:"Films"}),Object(j.jsx)(r.c,{to:"/people",className:function(e){return e.isActive?"activeLink":""},children:"People"}),Object(j.jsx)(r.c,{to:"/planets",className:function(e){return e.isActive?"activeLink":""},children:"Planets"})]})}function o(e){return Object(j.jsxs)("header",{className:"masthead",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(r.b,{to:"/",children:e.company})}),Object(j.jsx)(l,{})]})}c(39);function b(e){var t=Object(n.createRef)(),c=Object(n.createRef)(),s=e.btnState,a=e.keyword;return Object(j.jsxs)("section",{className:"searchBar",children:[Object(j.jsxs)("form",{onSubmit:function(c){c.preventDefault(),e.saveSearch(t.current.value),t.current.value=""},children:[Object(j.jsx)("input",{ref:t,type:"text",name:"keyword",className:"searchText",placeholder:"keyword",disabled:s}),Object(j.jsx)("button",{ref:c,type:"submit",className:"searchBtn",name:"searchBtn",disabled:s,children:"Search"})]}),a&&Object(j.jsxs)("p",{className:"margin-0",children:["You searched for ",Object(j.jsx)("strong",{children:a})]})]})}var O=c(12),d=c.n(O),u=c(24);c(41);function h(e){var t=e.name,c=e.time,s=e.active,a=e.setSearchState,i=Array.isArray(t)?t.join(" and "):t;return Object(n.useEffect)((function(){a(!0)})),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{children:["Welcome ",i," to the Home page"]}),Object(j.jsxs)("p",{children:["The time is ",new Date(c).toLocaleTimeString()]}),Object(j.jsxs)("p",{children:["The component is ",s?"active":"NOT active"]}),e.children]})}function f(){return Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Just a section to insert inside Home."})})}h.defaultProps={time:Date.now()};var x=c(2),m=c(26),p=Object(n.createContext)();function v(e){var t=Object(n.useState)({type:"",id:0,data:{}}),c=Object(i.a)(t,2),s=c[0],a=c[1];return Object(j.jsx)(p.Provider,Object(m.a)({value:[s,function(e,t,c){a({type:e,id:t,data:c})}]},e))}function S(){var e=Object(n.useContext)(p);if(!e)throw new Error("No context available!");return e}function N(e){var t=e.findFilm,c=Object(n.useState)(null),s=Object(i.a)(c,2),a=s[0],r=s[1],l=Object(x.g)().id,o=S(),b=Object(i.a)(o,2),O=b[0],d=b[1];Object(n.useEffect)((function(){r(t(l))}),[t,l]);var u=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:a&&a.title}),Object(j.jsx)("p",{children:a&&a.release_date})]});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Film Details"}),u,Object(j.jsx)("p",{children:Object(j.jsxs)("button",{onClick:function(e){O.id!==parseInt(l)||"films"!==O.type?d("films",parseInt(l),a):d("",0,{})},children:["Set ",Object(j.jsx)("span",{className:"material-icons small-font",children:"favorite"})]})})]})}c(42);function g(e){return Object(j.jsx)("div",{className:"overlay",children:Object(j.jsx)("div",{className:"spinner",children:e.children})})}c(43);function y(e){var t=S(),c=Object(i.a)(t,1)[0],s=e.list,a=e.setSearchState,l=Object(n.useState)(!1),o=Object(i.a)(l,2),b=o[0],O=o[1];return Object(n.useEffect)((function(){setTimeout(O,800,!0)}),[s]),Object(n.useEffect)((function(){a(!1)})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"results",children:[Object(j.jsx)("h2",{children:"Film List"}),!b&&Object(j.jsx)(g,{children:"Loading..."}),0===s.length&&Object(j.jsx)("p",{children:"No films..."}),s.map((function(e,t){return Object(j.jsx)("p",{children:Object(j.jsxs)(r.c,{className:function(e){return e.isActive?"activeLink":""},to:"/films/".concat(t+1),children:[e.title,"\xa0","films"===c.type&&t+1===parseInt(c.id)&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:"material-icons small-font",children:"favorite"})})]})},e.title)}))]}),Object(j.jsx)("div",{className:"details",children:Object(j.jsx)(x.c,{children:Object(j.jsx)(x.a,{path:":id",element:Object(j.jsx)(N,{findFilm:function(e){var t=s.find((function(t,c){return parseInt(e)===c+1}));return t||null}})})})})]})}function k(e){var t=e.findPerson,c=Object(n.useState)(null),s=Object(i.a)(c,2),a=s[0],r=s[1],l=Object(x.g)().id,o=S(),b=Object(i.a)(o,2),O=b[0],d=b[1];return Object(n.useEffect)((function(){r(t(l))}),[t,l]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{children:["Person Details ",l]}),a&&Object(j.jsx)("p",{children:a.name}),a&&Object(j.jsx)("p",{children:a.birth_year}),Object(j.jsx)("p",{children:Object(j.jsxs)("button",{onClick:function(e){O.id!==parseInt(l)||"people"!==O.type?d("people",parseInt(l),a):d("",0,{})},children:["Set ",Object(j.jsx)("span",{className:"material-icons small-font",children:"favorite"})]})})]})}c(44);function w(e){var t=S(),c=Object(i.a)(t,1)[0],s=e.list,a=e.setSearchState,l=Object(n.useState)(!1),o=Object(i.a)(l,2),b=o[0],O=o[1];return Object(n.useEffect)((function(){setTimeout(O,800,!0)}),[s]),Object(n.useEffect)((function(){a(!1)})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"results",children:[Object(j.jsx)("h2",{children:"People List"}),!b&&Object(j.jsx)(g,{children:"Loading..."}),0===s.length&&Object(j.jsx)("p",{children:"No people..."}),s.length>0&&s.map((function(e,t){return Object(j.jsx)("p",{children:Object(j.jsxs)(r.c,{className:function(e){return e.isActive?"activeLink":""},to:"/people/".concat(t+1),children:[e.name,"\xa0","people"===c.type&&t+1===parseInt(c.id)&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:"material-icons small-font",children:"favorite"})})]})},e.name)}))]}),Object(j.jsx)("div",{className:"details",children:Object(j.jsx)(x.c,{children:Object(j.jsx)(x.a,{path:":id",element:Object(j.jsx)(k,{findPerson:function(e){var t=s.find((function(t,c){return parseInt(e)===c+1}));return t||null}})})})})]})}function F(e){var t=e.findPlanet,c=Object(n.useState)(null),s=Object(i.a)(c,2),a=s[0],r=s[1],l=Object(x.g)().id,o=S(),b=Object(i.a)(o,2),O=b[0],d=b[1];Object(n.useEffect)((function(){r(t(l))}),[t,l]);var u=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:a&&a.name}),Object(j.jsx)("p",{children:a&&a.terrain})]});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Planet Details"}),u,Object(j.jsx)("p",{children:Object(j.jsxs)("button",{onClick:function(e){O.id!==parseInt(l)||"planets"!==O.type?d("planets",parseInt(l),a):d("",0,{})},children:["Set ",Object(j.jsx)("span",{className:"material-icons small-font",children:"favorite"})]})})]})}c(45);function I(e){var t=S(),c=Object(i.a)(t,1)[0],s=e.list,a=e.setSearchState,l=Object(n.useState)(!1),o=Object(i.a)(l,2),b=o[0],O=o[1];return Object(n.useEffect)((function(){setTimeout(O,800,!0)}),[s]),Object(n.useEffect)((function(){a(!1)})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"results",children:[Object(j.jsx)("h2",{children:"Planet List"}),!b&&Object(j.jsx)(g,{children:"Loading..."}),0===s.length&&Object(j.jsx)("p",{children:"No planets..."}),s.length>0&&s.map((function(e,t){return Object(j.jsx)("p",{children:Object(j.jsxs)(r.c,{className:function(e){return e.isActive?"activeLink":""},to:"/planets/".concat(t+1),children:[e.name,"\xa0","planets"===c.type&&t+1===parseInt(c.id)&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:"material-icons small-font",children:"favorite"})})]})},e.name)}))]}),Object(j.jsx)("div",{className:"details",children:Object(j.jsx)(x.c,{children:Object(j.jsx)(x.a,{path:":id",element:Object(j.jsx)(F,{findPlanet:function(e){var t=s.find((function(t,c){return parseInt(e)===c+1}));return t||null}})})})})]})}var P=c(25),E=c.n(P);function L(e){var t=e.keyword,c=e.setSearchState,s=Object(x.e)().pathname,a=Object(n.useState)([]),r=Object(i.a)(a,2),l=r[0],o=r[1],b=Object(n.useState)([]),O=Object(i.a)(b,2),m=O[0],p=O[1],v=Object(n.useState)([]),S=Object(i.a)(v,2),N=S[0],g=S[1];return Object(n.useEffect)((function(){Object(u.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"/"!==s&&(c="https://swapi.dev/api".concat(s),""!==t.trim()&&(c+="?search=".concat(t)),E.a.get(c).then((function(e){var t=e.data;switch(s){case"/films":o(t.results);break;case"/people":p(t.results);break;case"/planets":g(t.results)}})).catch(console.error));case 1:case"end":return e.stop()}}),e)})))()}),[t,s]),Object(j.jsx)("div",{className:"mainContent",children:Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{path:"/films/*",element:Object(j.jsx)(y,{list:l,setSearchState:c})}),Object(j.jsx)(x.a,{path:"/people/*",element:Object(j.jsx)(w,{list:m,setSearchState:c})}),Object(j.jsx)(x.a,{path:"/planets/*",element:Object(j.jsx)(I,{list:N,setSearchState:c})}),Object(j.jsx)(x.a,{exact:!0,path:"/",element:Object(j.jsxs)(h,{name:["C-3PO","R2-D2"],active:!0,time:new Date-5e7,setSearchState:c,children:[Object(j.jsx)(f,{}),Object(j.jsx)(f,{})]})})]})})}function A(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(!0),O=Object(i.a)(l,2),d=O[0],u=O[1];return Object(j.jsx)(v,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(o,{company:"Star Wars API"}),Object(j.jsx)(b,{keyword:s,saveSearch:function(e){a(e)},btnState:d}),Object(j.jsx)("main",{className:"content",children:Object(j.jsx)(L,{keyword:s,setSearchState:function(e){u(e)}})})]})})})}Object(a.createRoot)(document.getElementById("root")).render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(A,{})}))}},[[68,1,2]]]);
//# sourceMappingURL=main.014802d3.chunk.js.map