(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),i=n.n(c),o=n(12),u=n.n(o),s=n(2),l=n(13),d=n(10),h=n(5),b=n(6),m=n(8),j=n(7),p=n(3),g=n.n(p),f=n(0),O=function(t){var e=t.name,n=t.hendleInputChange,a=t.idInput,r=t.htmlFor;return Object(f.jsxs)("label",{htmlFor:r,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:a,value:e,onChange:n})]})},C=function(t){var e=t.number,n=t.hendleInputChange,a=t.idInput,r=t.htmlFor;return Object(f.jsxs)("label",{htmlFor:r,children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:a,value:e,onChange:n})]})},I=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.loginInputNameId=g.a.generate(),t.loginInputNamberId=g.a.generate(),t.hendleInputChange=function(e){var n=e.currentTarget,a=n.value,r=n.name;t.setState(Object(s.a)({},r,a))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.onSubmitForm(t.state)},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)(O,{name:e,hendleInputChange:this.hendleInputChange,idInput:this.loginInputNameId,htmlFor:this.loginInputNameId}),Object(f.jsx)(C,{number:n,hendleInputChange:this.hendleInputChange,idInput:this.loginInputNamberId,htmlFor:this.loginInputNamberId}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(f.jsxs)("li",{children:[Object(f.jsx)("p",{children:"".concat(a,": ").concat(r)}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},v=function(t){var e=t.id,n=t.hendleInputFilter;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Find contats by name"}),Object(f.jsx)("input",{type:"text",name:"filter",id:e,onChange:n})]})},F=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,r=t.state.contacts,c={id:g.a.generate(),name:n,number:a};r.some((function(t){return t.name===n}))?alert("".concat(n," already in the contacts.")):t.setState((function(t){return Object(d.a)(Object(d.a)({},t),{},{contacts:[c].concat(Object(l.a)(t.contacts))})}))},t.hendleInputFilter=function(e){var n=e.currentTarget,a=n.value,r=n.name;t.setState(Object(s.a)({},r,a))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getCurrentContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=new RegExp(n,"gi");return n?a.filter((function(t){return r.test(t.name)})):a},t}return Object(b.a)(n,[{key:"render",value:function(){return console.log(this.getCurrentContacts()),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(I,{onSubmitForm:this.formSubmitHandler}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(v,{id:g.a.generate(),hendleInputFilter:this.hendleInputFilter}),Object(f.jsx)(x,{contacts:this.getCurrentContacts(),onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(F,{className:u.a})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f0b1589b.chunk.js.map