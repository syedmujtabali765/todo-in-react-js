(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),c=n.n(s),o=n(3),i=n.n(o),d=(n(14),n(6)),l=n(4),u=n(5),r=n(8),j=n(7),h=(n(15),function(t){Object(r.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).add=function(){if(""!==t.state.value){var e=t.state,n=e.todos,a={todo_value:e.value,edit:!1};t.setState({todos:[].concat(Object(d.a)(n),[a]),value:""})}},t.dAll=function(){var e=t.state.todos;e=[],t.setState({todos:e})},t.delli=function(e){t.state.todos.splice(e,1),t.setState({todos:t.state.todos})},t.editTODO=function(e){var n=t.state.todos;n[e].edit=!0,t.setState({todos:n})},t.handleChange=function(e,n){var a=t.state.todos;a[n].todo_value=e.target.value,t.setState({todos:a})},t.update=function(e){var n=t.state.todos;n[e].edit=!1,t.setState({todos:n})},t.state={value:"",todos:[]},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("h1",{className:"heading",children:"TODO APPICATION"}),Object(a.jsx)("input",{placeholder:"Enter Your Todo",className:"input_field",type:"text",onChange:function(e){t.setState({value:e.target.value})},value:this.state.value}),Object(a.jsxs)("button",{className:"btn",onClick:function(){return t.add()},children:[" ",Object(a.jsx)("i",{class:"fa fa-plus-circle","aria-hidden":"true",children:" "})]}),Object(a.jsxs)("button",{className:"btn",onClick:function(){return t.dAll()},children:[" ",Object(a.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"})," "]}),Object(a.jsx)("ul",{children:this.state.todos.map((function(e,n){return Object(a.jsxs)("li",{children:[e.edit?Object(a.jsx)("input",{className:"liIput",value:e.todo_value,type:"text",onChange:function(e){t.handleChange(e,n)}}):e.todo_value,e.edit?Object(a.jsxs)("button",{className:"btn",onClick:function(){return t.update(n)},children:[" ",Object(a.jsx)("i",{class:"fa fa-check-circle","aria-hidden":"true"})," "]}):Object(a.jsxs)("button",{className:"btn",onClick:function(){return t.editTODO(n)},children:[" ",Object(a.jsx)("i",{class:"fa fa-pencil","aria-hidden":"true"})," "]}),Object(a.jsxs)("button",{className:"btn",onClick:function(){return t.delli(n)},children:[" ",Object(a.jsx)("i",{class:"fa fa-minus-circle","aria-hidden":"true"})," "]})]},n)}))})]})}}]),n}(s.Component)),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),s(t),c(t),o(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.9ab3f419.chunk.js.map