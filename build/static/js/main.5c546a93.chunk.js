(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(2),r=t(14),u=t.n(r),o=t(3),i=function(e){var n=e.personFilter,t=e.handleFilterChange;return Object(c.jsxs)("div",{children:["Filter people ",Object(c.jsx)("input",{value:n,onChange:t})]})},s=function(e){var n=e.person,t=e.deletePerson;return Object(c.jsxs)("p",{children:[n.name," ",n.number,Object(c.jsx)("button",{type:"submit",onClick:function(){return t(n)},children:"Delete"})]})},l=function(e){var n=e.handlenamechange,t=e.newname,a=e.newnumber,r=e.addperson,u=e.handlenumberchange;return Object(c.jsxs)("form",{children:[Object(c.jsx)("h1",{children:"Add a new person"}),Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:t,onChange:n})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:a,onChange:u})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",onClick:r,children:"add"})})]})},j=t(4),d=t.n(j),b="/api/persons",h={getAll:function(){return d.a.get(b)},create:function(e){return d.a.post(b,e)},update:function(e,n){return d.a.put("".concat(b,"/").concat(e),n)},deletePerson:function(e){return d.a.delete("".concat(b,"/").concat(e))}},f=(t(37),function(){Object(a.useEffect)((function(){h.getAll().then((function(e){r(e.data)}))}),[]);var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),j=Object(o.a)(u,2),d=j[0],b=j[1],f=Object(a.useState)(""),m=Object(o.a)(f,2),O=m[0],p=m[1],x=Object(a.useState)(""),v=Object(o.a)(x,2),g=v[0],w=v[1],C=Object(a.useState)(null),k=Object(o.a)(C,2),y=k[0],F=k[1],P=t.filter((function(e){return e.name.toLowerCase().includes(O)})),S=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"confirmation",children:n})};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(S,{message:y}),Object(c.jsx)(i,{handleFilterChange:function(e){p(e.target.value)},personFilter:O}),Object(c.jsx)(l,{handlenamechange:function(e){b(e.target.value)},newname:d,newnumber:g,addperson:function(e){e.preventDefault();var n={name:d,number:g};t.filter((function(e){return e.name.toLowerCase()===d.toLowerCase()})).length>0?(F("".concat(n.name," is already in the phonebook")),setTimeout((function(){F(null)}),2500)):h.create(n).then((function(e){r(t.concat(n))})).then(F("".concat(n.name," was added succesfully")),setTimeout((function(){F(null)}),2500))},handlenumberchange:function(e){w(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),P.map((function(e){return Object(c.jsx)(s,{person:e,deletePerson:function(){return function(e){window.confirm("Delete ".concat(e.name,"?"))&&h.deletePerson(e.id).then(F("".concat(e.name," was deleted")),setTimeout((function(){F(null)}),2500))}(e)}},e.name)}))]})});u.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.5c546a93.chunk.js.map