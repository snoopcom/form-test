(this["webpackJsonpform-test"]=this["webpackJsonpform-test"]||[]).push([[0],{151:function(e,a,t){e.exports=t(228)},157:function(e,a,t){},227:function(e,a,t){},228:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(35),s=t.n(l),m=(t(156),t(157),t(72)),i=t(115),c=t(74),o=t.n(c),u=t(88),p=t(24),d=t(231),E=t(232),h=t(230),N=t(41),f=N.a().shape({login:N.b().max(50,"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),password:N.b().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u0430 \u0446\u0438\u0444\u0440\u0430 \u0438 \u043e\u0434\u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),phone:N.b().matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430")}),b={login:"",password:"",phone:""},v=function(e){var a=e.formData,t=e.setForm,l=e.navigation,s=a.login,i=a.password,c=a.phone,N=Object(n.useState)(!0),v=Object(m.a)(N,2),g=v[0],w=v[1],j=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.isValid(a);case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(p.c,{initialValues:b,validationSchema:f},r.a.createElement(d.a,{onChange:j,className:"form"},r.a.createElement("h1",{className:"header"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("div",null,r.a.createElement("label",{className:"inputName",htmlFor:"login"},"\u041b\u043e\u0433\u0438\u043d"),r.a.createElement(d.a.Item,{name:"login"},r.a.createElement(E.a,{className:"input",value:s,id:"login",name:"login",onChange:t,placeholder:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439",size:"large"}))),r.a.createElement("div",null,r.a.createElement("label",{className:"inputName",htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement(d.a.Item,{name:"password"},r.a.createElement(E.a.Password,{className:"input",value:i,id:"password",name:"password",onChange:t,placeholder:"password",size:"large"}))),r.a.createElement("div",null,r.a.createElement("label",{className:"inputName",htmlFor:"phone"},"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),r.a.createElement(d.a.Item,{name:"phone"},r.a.createElement(E.a,{className:"input",value:c,id:"phone",name:"phone",onChange:t,size:"large"}),r.a.createElement("span",{className:"inputDescription"},"\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439, \u0435\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"))),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(h.a,{className:"button",size:"large",disabled:!g,onClick:function(){return l.next()}},"\u041f\u0440\u043e\u0434\u043b\u043e\u0436\u0438\u0442\u044c"))))},g=t(81),w=N.a().shape({firstName:N.b().required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),lastName:N.b().required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e"),mail:N.b().email("\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u0442\u043d\u044b\u0439 email").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443")}),j={firstName:"",lastName:"",mail:""},C=function(e){var a,t=e.formData,l=e.setForm,s=e.navigation,i=t.firstName,c=t.lastName,N=t.mail,f=Object(n.useState)(!0),b=Object(m.a)(f,2),v=b[0],C=b[1],O=function(){var e=Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.isValid(t);case 2:a=e.sent,C(!a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(p.c,{initialValues:j,validationSchema:w},r.a.createElement(d.a,{onChange:O,className:"form"},r.a.createElement("h1",{className:"header"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("div",null,r.a.createElement("label",{className:"inputName",htmlFor:"firstName"},"\u0418\u043c\u044f"),r.a.createElement(d.a.Item,{name:"firstName"},r.a.createElement(E.a,{value:i,id:"firstName",name:"firstName",onChange:l,size:"large"}))),r.a.createElement("div",null,r.a.createElement("label",{className:"inputName",htmlFor:"lastName"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),r.a.createElement(d.a.Item,{name:"lastName"},r.a.createElement(E.a,{value:c,id:"lastName",name:"lastName",onChange:l,size:"large"}))),r.a.createElement("div",null,r.a.createElement("label",{className:"inputName",htmlFor:"mail"},"E-mail"),r.a.createElement(d.a.Item,{name:"mail"},r.a.createElement(E.a,{value:N,id:"mail",name:"mail",onChange:l,size:"large"}),r.a.createElement("span",{className:"inputDescription"},"\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439, \u0435\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"))),r.a.createElement("div",null,r.a.createElement(h.a,(a={className:"formButtonsContainer"},Object(g.a)(a,"className","button"),Object(g.a)(a,"size","large"),Object(g.a)(a,"disabled",v),Object(g.a)(a,"onClick",(function(){return s.next()})),a),"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),r.a.createElement("button",{className:"buttonBack",onClick:function(){return s.previous()}},"< \u041d\u0430\u0437\u0430\u0434")))},O=function(e){var a=e.formData;return console.log(a),r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0412\u0430\u043c \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e! :)"))},z={login:"",password:"",phone:"",firstName:"",lastName:"",mail:""},F=[{id:"firstStep"},{id:"secondStep"},{id:"submit"}],S=function(){var e=Object(i.a)(z),a=Object(m.a)(e,2),t=a[0],n=a[1],l=Object(i.b)({steps:F,initialStep:0}),s=l.step,c={formData:t,setForm:n,navigation:l.navigation};switch(s.id){case"firstStep":return r.a.createElement(v,c);case"secondStep":return r.a.createElement(C,c);case"submit":return r.a.createElement(O,c)}},k=(t(227),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))});s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.2b65253c.chunk.js.map