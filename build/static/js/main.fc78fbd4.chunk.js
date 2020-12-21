(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"phonebook_form__27Ejm",label:"phonebook_label__1Ly1f",input:"phonebook_input__3C8ro",button:"phonebook_button__36sd-",contactList:"phonebook_contactList__1Qu9P",allContacts:"phonebook_allContacts__2lVLL"}},17:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(2),o=n.n(c),r=n(10),s=n.n(r),i=(n(17),n(3)),u=n(5),l=n(6),b=n(8),h=n(7),m=n(11),j=n.n(m),d=n(1),f=n.n(d),p=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChangeName=function(e){t.setState({name:e.currentTarget.value})},t.handleChangeNumber=function(e){t.setState({number:e.currentTarget.value})},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.setState({name:"",number:""}),t.contactMatch()||t.props.onSubmit(a,c)},t.contactMatch=function(){var e=t.state,n=e.name,a=e.number,c=t.props.contacts,o=c.reduce((function(t,e){return[].concat(Object(i.a)(t),[e.name])}),[]),r=c.reduce((function(t,e){return[].concat(Object(i.a)(t),[e.number])}),[]);if(o.includes(n)||r.includes(a))return alert("".concat(n," is already in contacts")),!0},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChangeName,className:f.a.input})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChangeNumber,className:f.a.input})]}),Object(a.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})]})}}]),n}(c.Component);var O=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:f.a.contactList,children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsxs)("li",{className:f.a.allContacts,children:[Object(a.jsxs)("p",{children:[c,": ",o]}),Object(a.jsx)("button",{onClick:function(){return n(e)},children:"Delete"})]},e)}))})},v=function(t){var e=t.value,n=t.onChange;return Object(a.jsx)("form",{className:f.a.form,children:Object(a.jsxs)("label",{className:f.a.label,children:["Find contact by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n,className:f.a.input})]})})},g=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a={id:j.a.generate(),name:e,number:n};t.setState((function(t){return{contacts:[a].concat(Object(i.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.getFilteredContacts();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(p,{onSubmit:this.addContact,contacts:e}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(v,{value:n,onChange:this.changeFilter}),Object(a.jsx)(O,{contacts:c,onDeleteContact:this.deleteContact})]})})}}]),n}(c.Component);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fc78fbd4.chunk.js.map