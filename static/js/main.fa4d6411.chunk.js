(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(3)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelect;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":e.id===(null===c||void 0===c?void 0:c.id)}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye":e!==c,"fa-eye-slash":e===c})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(s||(s={}));var b=function(e){var t=e.query,c=e.onChange,a=e.clearQuery,n=e.status,l=e.onSelect;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:l,children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:c}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:a})})]})]})},u=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.onClose,c=e.selectedTodo,s=c.id,a=c.title,n=c.completed,d=c.userId,o=Object(i.useState)(null),j=Object(l.a)(o,2),b=j[0],m=j[1];return Object(i.useEffect)((function(){(function(e){return h("/users/".concat(e))})(d).then((function(e){return m(e)}))}),[c]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),b?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:t})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[n?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(b.email),children:b.name})]})]})]}):Object(r.jsx)(u,{})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(null),d=Object(l.a)(n,2),o=d[0],O=d[1],x=Object(i.useState)(s.All),f=Object(l.a)(x,2),p=f[0],v=f[1],N=Object(i.useState)(""),y=Object(l.a)(N,2),g=y[0],C=y[1];Object(i.useEffect)((function(){h("/todos").then((function(e){return a(e)}))}),[]);var k=Object(i.useCallback)((function(e){var t=c.find((function(t){return t.id===e}));t&&O(t)}),[o,c]),S=Object(i.useCallback)((function(){O(null)}),[]),w=Object(i.useCallback)((function(e){v(e.target.value)}),[]),A=Object(i.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(g.toLowerCase());switch(p){case s.Active:return!e.completed&&t;case s.Completed:return e.completed&&t;case s.All:default:return t}}))}),[c,p,g]),T=Object(i.useCallback)((function(e){C(e.target.value)}),[]),_=Object(i.useCallback)((function(){C("")}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:g,onChange:T,clearQuery:_,status:p,onSelect:w})}),Object(r.jsx)("div",{className:"block",children:0===c.length?Object(r.jsx)(u,{}):Object(r.jsx)(j,{todos:A,selectedTodo:o,onSelect:k})})]})})}),o&&Object(r.jsx)(m,{selectedTodo:o,onClose:S})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fa4d6411.chunk.js.map