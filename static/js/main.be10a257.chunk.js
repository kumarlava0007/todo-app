(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(8),r=n.n(i),a=(n(15),n(7)),u=n(3),d=n(1);var s=function(t){var e=Object(o.useState)(""),n=Object(u.a)(e,2),c=n[0],i=n[1],r=Object(o.useRef)(null);return Object(o.useEffect)((function(){r.current.focus()})),Object(d.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")},children:[Object(d.jsx)("input",{type:"text",placeholder:"Add a todo",value:c,name:"text",className:"todo-input",onChange:function(t){i(t.target.value)},ref:r}),Object(d.jsx)("button",{className:"todo-button",children:"Add todo"})]})},j=n(9),l=n(10);var b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,r=Object(o.useState)({id:null,value:""}),a=Object(u.a)(r,2),b=a[0],f=a[1];return b.id?Object(d.jsx)(s,{edit:b,onSubmit:function(t){i(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(d.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(d.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(d.jsxs)("div",{children:[Object(d.jsx)(j.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(d.jsx)(l.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(t){var e=Object(o.useState)([]),n=Object(u.a)(e,2),c=n[0],i=n[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"What's the Plan for Today ?"}),Object(d.jsx)(s,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(a.a)(c));i(e)}}}),Object(d.jsx)(b,{todos:c,completeTodo:function(t){var e=c.map((function(e){return e.id==t&&(e.isComplete=!e.isComplete),e}));i(e)},removeTodo:function(t){var e=Object(a.a)(c).filter((function(e){return e.id!==t}));i(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&i((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(d.jsx)("div",{className:"todo-app",children:Object(d.jsx)(f,{})})};n(17);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.be10a257.chunk.js.map