(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),i=c.n(s),o=c(6),a=c.n(o),j=(c(13),c(3)),r=(c(14),c(7));var d=function(t){var e=t.input,c=t.setInput,s=t.todoList,i=t.setTodoList;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("input",{type:"text",placeholder:"Add your Todo...",className:"input-field",value:e,onChange:function(t){c(t.target.value)}}),Object(n.jsx)("button",{onClick:function(t){i([].concat(Object(r.a)(s),[{text:e,completed:!1}])),c("")},className:"input-button",children:"Add"})]})})};var l=function(t){var e=t.text,c=Object(s.useState)(!1),i=Object(j.a)(c,2),o=i[0],a=i[1];return Object(n.jsxs)("div",{className:"list-items",children:[Object(n.jsx)("li",{className:o?"done":"list-item",children:e}),Object(n.jsx)("div",{onClick:function(){a(!o)},children:o?Object(n.jsx)("div",{className:"incomplete-icon",children:Object(n.jsx)("box-icon",{size:"md",color:"#fff",name:"x"})}):Object(n.jsx)("div",{className:"complete-icon",children:Object(n.jsx)("box-icon",{size:"md",color:"#fff",name:"check"})})})]})};var u=function(t){var e=t.todoList;return Object(n.jsx)("div",{className:"list-container",children:Object(n.jsx)("ul",{children:e.map((function(t,e){return Object(n.jsx)(l,{text:t.text},e)}))})})};var b=function(){var t=Object(s.useState)(""),e=Object(j.a)(t,2),c=e[0],i=e[1],o=Object(s.useState)([]),a=Object(j.a)(o,2),r=a[0],l=a[1];return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:" Your Todos "}),Object(n.jsx)("a",{className:"github-link",href:"https://github.com/sohamtamboli/react-todo-app",children:Object(n.jsx)("box-icon",{size:"lg",color:"#fff",type:"logo",name:"github"})})]}),Object(n.jsxs)("div",{className:"list-container",children:[Object(n.jsx)(d,{input:c,setInput:i,todoList:r,setTodoList:l}),Object(n.jsx)(u,{todoList:r,setTodoList:l})]})]})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,o=e.getTTFB;c(t),n(t),s(t),i(t),o(t)}))};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.a8e0670a.chunk.js.map