(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{86:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(36);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},87:function(t,e,n){},88:function(t,e,n){t.exports={filter:"filter_filter__1iQzj"}},89:function(t,e,n){t.exports={form:"form_form__1BI77"}},93:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n(0),a=n(7),c=n(35),o=(n(87),n(37)),u=n(1);var i=Object(a.b)((function(t){return{contacts:o.a.getFilteredContacts(t)}}),(function(t){return{fetchContacts:function(){return t(c.a.fetchContacts())},onDeleteContacts:function(e){return t(c.a.deleteContacts(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(u.jsx)("ul",{className:"contacts",children:e.map((function(t){var e=t.id,r=t.name,a=t.number;return Object(u.jsxs)("li",{children:[r,":",a,Object(u.jsx)("button",{type:"button",className:"TodoList__btn",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),s=n(88),l=n.n(s),b=n(4);var f=Object(a.b)((function(t){return{value:o.a.getFilter(t)}}),(function(t){return{onHandleFilter:function(e){return t(Object(b.j)(e.target.value))}}}))((function(t){var e=t.value,n=t.onHandleFilter;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsxs)("label",{className:l.a.filter,children:["Find contacts by name",Object(u.jsx)("input",{type:"text",value:e,onChange:n})]})]})})),j=n(86),d=n(89),h=n.n(d);var m=Object(a.b)(null,(function(t){return{onSubmit:function(e,n){return t(c.a.addContacts(e,n))}}}))((function(t){var e=t.onSubmit,n=Object(r.useState)(""),a=Object(j.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),s=Object(j.a)(i,2),l=s[0],b=s[1],f=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":o(r);break;case"number":b(r);break;default:return}},d=function(){o(""),b("")};return Object(u.jsxs)("form",{className:h.a.form,onSubmit:function(t){t.preventDefault(),e(c,l),d()},children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsxs)("label",{children:["Name",Object(u.jsx)("input",{type:"text",value:c,name:"name",onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(u.jsxs)("label",{children:["Number",Object(u.jsx)("input",{type:"tel",name:"number",value:l,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(u.jsx)("button",{type:"submit",children:"Add contact"})]})}));function O(){var t=Object(a.c)();return Object(r.useEffect)((function(){return t(c.a.fetchContacts())[t]})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(f,{}),Object(u.jsx)(i,{})]})}}}]);
//# sourceMappingURL=3.f5889cae.chunk.js.map