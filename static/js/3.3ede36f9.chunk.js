(this["webpackJsonpswapi-project"]=this["webpackJsonpswapi-project"]||[]).push([[3],{67:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return b}));var n=c(4),s=c(6),i=c(2),r=c(0),l=c(13),a=c(1);function j(e){var t=e.findFilm,c=Object(r.useState)(null),s=Object(n.a)(c,2),j=s[0],b=s[1],f=Object(i.g)().id,d=Object(l.b)(),u=Object(n.a)(d,2),O=u[0],o=u[1];Object(r.useEffect)((function(){b(t(f))}),[t,f]);var h=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:j&&j.title}),Object(a.jsx)("p",{children:j&&j.release_date})]});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Film Details"}),h,Object(a.jsx)("p",{children:Object(a.jsxs)("button",{onClick:function(e){O.id!==parseInt(f)||"films"!==O.type?o("films",parseInt(f),j):o("",0,{})},children:["Set ",Object(a.jsx)("span",{className:"material-icons small-font",children:"favorite"})]})})]})}c(67);function b(e){var t=Object(l.b)(),c=Object(n.a)(t,1)[0],b=e.list,f=e.setSearchState;return Object(r.useEffect)((function(){}),[b]),Object(r.useEffect)((function(){f(!1)})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"results",children:[Object(a.jsx)("h2",{children:"Film List"}),0===b.length&&Object(a.jsx)("p",{children:"No films..."}),b.map((function(e,t){return Object(a.jsx)("p",{children:Object(a.jsxs)(s.c,{className:function(e){return e.isActive?"activeLink":""},to:"/films/".concat(t+1),children:[e.title,"\xa0","films"===c.type&&t+1===parseInt(c.id)&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("span",{className:"material-icons small-font",children:"favorite"})})]})},e.title)}))]}),Object(a.jsx)("div",{className:"details",children:Object(a.jsx)(i.c,{children:Object(a.jsx)(i.a,{path:":id",element:Object(a.jsx)(j,{findFilm:function(e){var t=b.find((function(t,c){return parseInt(e)===c+1}));return t||null}})})})})]})}}}]);
//# sourceMappingURL=3.3ede36f9.chunk.js.map