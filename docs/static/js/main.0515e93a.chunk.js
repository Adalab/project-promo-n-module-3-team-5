(this["webpackJsonpmi-primera-web"]=this["webpackJsonpmi-primera-web"]||[]).push([[0],[,,,,,,,,,,function(e,a,l){},,function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){"use strict";l.r(a);var t=l(2),s=l(5),c=l.n(s),i=l(1),n=l(3),r=l.p+"static/media/logo-awesome-profile-cards.a65df2b2.svg",o=(l(10),l(0));var d=function(){return Object(o.jsx)("header",{className:"header__cards--container",children:Object(o.jsx)("img",{className:"header__cards--img",src:r,alt:"logo-awesome-profile-cards"})})};l(12);var j=function(e){var a=e.handleCollapse,l=e.collapseDesign,t=e.handlePalette;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"collapsable js_collapsable_design",onClick:a,children:[Object(o.jsx)("i",{className:"far fa-object-ungroup cloningicon collapsable__iconStart"}),Object(o.jsx)("h3",{className:"collapsable__title",children:"Dise\xf1a"}),Object(o.jsx)("i",{className:"fas fa-chevron-"+("hidden"===l?"down":"up")+" collapsable__iconEnd js_iconEnd"})]}),Object(o.jsxs)("section",{className:"wholecollapsable-design  js_section ",id:"desing",children:[Object(o.jsx)("div",{className:"rectangle-2"}),Object(o.jsxs)("fieldset",{className:l+" flexboxdesign",children:[Object(o.jsx)("h4",{className:"titlecolours",children:"colores"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"colourboxesmaster js_designevent",children:Object(o.jsxs)("label",{className:"label__design",htmlFor:"palette-1",children:[Object(o.jsx)("input",{id:"palette-1",className:"design__input js_design",type:"radio",value:"1",name:"palette",onChange:t}),Object(o.jsxs)("ul",{className:"colourboxes colourone",children:[Object(o.jsx)("li",{className:"item1-item1 li",children:"Color A"}),Object(o.jsx)("li",{className:"item1-item2 li",children:"Color B"}),Object(o.jsx)("li",{className:"item1-item3 li",children:"Color C"})]})]})}),Object(o.jsxs)("label",{className:"label__design",htmlFor:"palette-2",children:[Object(o.jsx)("input",{id:"palette-2",className:"design__input js_design",type:"radio",value:"2",name:"palette",onChange:t}),Object(o.jsxs)("ul",{className:"colourboxes colourtwo",children:[Object(o.jsx)("li",{className:"item2-item1 li",children:"Color A"}),Object(o.jsx)("li",{className:"item2-item2 li",children:"Color B"}),Object(o.jsx)("li",{className:"item2-item3 li",children:"Color C"})]})]}),Object(o.jsxs)("label",{className:"label__design",htmlFor:"palette-3",children:[Object(o.jsx)("input",{id:"palette-3",className:"design__input js_design",type:"radio",value:"3",name:"palette",onChange:t}),Object(o.jsxs)("ul",{className:"colourboxes colourthree",children:[Object(o.jsx)("li",{className:"item3-item2 li",children:"Color B"}),Object(o.jsx)("li",{className:"item3-item1 li",children:"Color A"}),Object(o.jsx)("li",{className:"item3-item3 li",children:"Color C"})]})]})]})]})]})]})})},b=(l(13),function(e){return fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))});var h=function(e){var a=Object(t.useState)(""),l=Object(n.a)(a,2),s=l[0],c=l[1],i=Object(t.useState)("hidden"),r=Object(n.a)(i,2),d=r[0],j=r[1],h=Object(t.useState)(""),m=Object(n.a)(h,2),p=m[0],u=m[1],O=Object(t.useState)(""),f=Object(n.a)(O,2),N=f[0],x=f[1];return Object(o.jsx)("section",{className:function(){},id:"share",children:Object(o.jsxs)("fieldset",{className:"share",children:[Object(o.jsx)("div",{className:"share__second",children:Object(o.jsxs)("button",{className:"share__button",onClick:function(){b(e.data).then((function(a){var l,t;c(a.cardURL),a.success?(j(""),u(""),x("")):(j(""),u("hidden"),x("hidden"),""===e.data.name?c("\ud83e\udd37\u200d\u2640\ufe0f Debes rellenar tu nombre \ud83d\udc46"):""===e.data.job?c("\ud83e\udd37\u200d\u2640\ufe0f Debes rellenar tu profesi\xf3n \ud83d\udc46"):""===e.data.photo?c("\ud83e\udd37\u200d\u2640\ufe0f Debes rellenar tu foto \ud83d\udc46"):""===e.data.email?c("\ud83e\udd37\u200d\u2640\ufe0f Debes rellenar tu email \ud83d\udc46"):(t=e.data.email,/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?""===e.data.phone?c("\ud83e\udd37\u200d\u2640\ufe0f Debes rellenar tu m\xf3vil \ud83d\udc46"):(l=e.data.phone,/^([9,8,7,6]{1})+([0-9]{8})$/.test(l)?""===e.data.linkedin?c("\ud83e\udd37\u200d\u2640\ufe0f Debes rellenar tu linkedin \ud83d\udc46"):""===e.data.github&&c("\ud83e\udd37\u200d\u2640\ufe0f Debes rellenar tu github \ud83d\udc46"):c("\ud83e\udd37\u200d\u2640\ufe0f Debes rellenar correctamente tu movil, te faltan datos \ud83d\ude09 \ud83d\udc46")):c("\ud83e\udd37\u200d\u2640\ufe0f Debes rellenar correctamente tu email, falta un @ o algo \ud83d\ude09 \ud83d\udc46")))}))},children:[Object(o.jsx)("i",{className:"far fa-address-card"})," Crear tarjeta"]})}),Object(o.jsx)("div",{className:"share__topBorder",children:" "}),Object(o.jsxs)("div",{className:"share__collapsable ".concat(d),children:[Object(o.jsx)("h3",{className:"share__collapsable__title ".concat(p),children:"La tarjeta ha sido creada"}),Object(o.jsx)("a",{className:"card__http",href:s,target:"_blank",children:s}),Object(o.jsx)("button",{className:"share__collapsable__button ".concat(N),children:Object(o.jsxs)("a",{className:"share__collapsable__button--link",href:"https://twitter.com/intent/tweet?text= Mi tarjeta profesional \ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb \xa1Cont\xe1ctame! \ud83d\udc8c &hashtags=Adalabers,JavaScript,PromoNerea,team5'&url=".concat(s),target:"_blank",children:[Object(o.jsx)("i",{className:"icon3 fab fa-twitter"}),"\xa0Compartir en twitter"]})})]})]})})};l(14);var m=function(){return Object(o.jsxs)("footer",{className:"footer__container",children:[Object(o.jsx)("p",{className:"footer__paragraph",children:Object(o.jsx)("small",{children:"Awesome profile-cards \xa92021"})}),Object(o.jsx)("img",{className:"footer__logo",src:"data:image/png;base64,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",alt:"logo de adalab"})]})},p=(l(15),l(16),l(17),l.p+"static/media/previewImg.0746f9aa.jpg");var u=function(){var e=Object(t.useState)(""),a=Object(n.a)(e,2),l=a[0],s=a[1],c=Object(t.useState)("hidden"),r=Object(n.a)(c,2),b=r[0],u=r[1],O=Object(t.useState)("hidden"),f=Object(n.a)(O,2),N=f[0],x=f[1],g=Object(t.useState)(""),_=Object(n.a)(g,2),v=_[0],I=_[1],C=Object(t.useState)({palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""}),w=Object(n.a)(C,2),A=w[0],E=w[1],k=new FileReader;function q(){A.photo=k.result,E(Object(i.a)({},A))}function S(e,a){return a&&""===e.photo?p:e.photo}var B=function(e){var a=e.currentTarget.name;"name"===a?E(Object(i.a)(Object(i.a)({},A),{},{name:e.currentTarget.value})):"job"===a?E(Object(i.a)(Object(i.a)({},A),{},{job:e.currentTarget.value})):"phone"===a?E(Object(i.a)(Object(i.a)({},A),{},{phone:e.currentTarget.value})):"email"===a?E(Object(i.a)(Object(i.a)({},A),{},{email:e.currentTarget.value})):"linkedin"===a?E(Object(i.a)(Object(i.a)({},A),{},{linkedin:e.currentTarget.value})):"github"===a&&E(Object(i.a)(Object(i.a)({},A),{},{github:e.currentTarget.value}))},R=F(A.name,"Nombre Apellidos"),T=F(A.job,"Front-end Developer");function F(e,a){return""===e?a:e}return Object(o.jsxs)("div",{className:"root",children:[Object(o.jsxs)("div",{className:"page-wrapper",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("main",{className:"wholeMain",children:[Object(o.jsxs)("section",{className:"preview",children:[Object(o.jsxs)("button",{className:"preview__button js_resetButton",children:[Object(o.jsx)("i",{className:"fas fa-trash-alt"}),"reset"]}),Object(o.jsxs)("article",{className:"preview__card",children:[Object(o.jsx)("span",{className:"preview__pretty ".concat(v)}),Object(o.jsx)("h2",{className:"preview__name ".concat(v),children:R}),Object(o.jsx)("h3",{className:"preview__description",children:T}),Object(o.jsx)("div",{style:{backgroundImage:"url(".concat(S(A,!0),")")},className:"preview__image js__profile-image"}),Object(o.jsxs)("nav",{className:"preview__icons",children:[Object(o.jsx)("a",{className:"preview__icons--measures  ".concat(v),href:"+34"+A.phone,title:"phone",name:"phone",children:Object(o.jsx)("i",{className:"fas fa-mobile-alt"})}),Object(o.jsx)("a",{className:"preview__icons--measures ".concat(v),href:"mailto:".concat(A.email),title:"message",children:Object(o.jsx)("i",{className:"far fa-envelope"})}),Object(o.jsx)("a",{className:"preview__icons--measures ".concat(v),href:"https://linkedin.com/in/".concat(A.linkedin),target:"_blank",title:"linkedin",children:Object(o.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(o.jsx)("a",{className:"preview__icons--measures  ".concat(v),href:"https://github.com/".concat(A.github),target:"_blank",title:"github",children:Object(o.jsx)("i",{className:"fab fa-github-alt"})})]})]})]}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"form",children:[Object(o.jsx)(j,{collapseDesign:l,handleCollapse:function(){"hidden"===l?(s(""),u("hidden"),x("hidden")):(s("hidden"),console.log(l))},handlePalette:function(e){var a=e.target.id;"palette-1"===a?(E(Object(i.a)(Object(i.a)({},A),{},{palette:parseInt(e.target.value)})),I("defaultpalette")):"palette-2"===a?(E(Object(i.a)(Object(i.a)({},A),{},{palette:parseInt(e.target.value)})),I("redpalette")):"palette-3"===a&&(E(Object(i.a)(Object(i.a)({},A),{},{palette:parseInt(e.target.value)})),I("yellowpalette"))}}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"topBorder"}),Object(o.jsxs)("div",{className:"collapsable js_collapsable_fill ",onClick:function(){"hidden"===b?(u(""),s("hidden"),x("hidden")):(u("hidden"),console.log(l))},children:[Object(o.jsx)("i",{className:"far fa-keyboard collapsable__iconStart"}),Object(o.jsx)("h3",{className:"collapsable__title",children:"Rellena"}),Object(o.jsx)("i",{className:"fas fa-chevron-"+("hidden"===b?"down":"up")+" collapsable__iconEnd js_iconEnd"})]}),Object(o.jsxs)("section",{className:b+" fill",id:"fill",children:[Object(o.jsxs)("fieldset",{className:"fill__first",children:[Object(o.jsxs)("div",{className:"fill__first--name",children:[Object(o.jsx)("label",{htmlFor:"fullName",className:"fill__first--name-lab",children:"Nombre completo *"}),Object(o.jsx)("input",{value:A.name,className:"fill__first--name-inp js_allInputs",placeholder:"Ej: Sally Jill",id:"name",type:"text",name:"name",onChange:B})]}),Object(o.jsxs)("div",{className:"fill__first--position",children:[Object(o.jsx)("label",{htmlFor:"position",className:"fill__first--position-lab",children:"Puesto *"}),Object(o.jsx)("input",{value:A.job,className:"fill__first--position-inp js_allInputs",placeholder:"Ej: Front-end unicorn",id:"job",type:"text",name:"job",onChange:B})]})]}),Object(o.jsxs)("fieldset",{className:"fill__second",children:[Object(o.jsx)("label",{className:"fill__second-label",children:"Imagen de perfil *"}),Object(o.jsxs)("div",{className:"fill__second-buttoncheck",children:[Object(o.jsx)("label",{className:"fill__second-button",htmlFor:"photo",children:"A\xf1adir imagen"}),Object(o.jsx)("input",{type:"file",onChange:function(e){var a=e.currentTarget.files[0];k.addEventListener("load",q),k.readAsDataURL(a)},id:"photo",className:"hidden_button js__profile-upload-btn"}),Object(o.jsx)("div",{className:"fill__second-checkbox js__profile-preview",style:{backgroundImage:"url(".concat(S(A,!1),")")}})]})]}),Object(o.jsxs)("fieldset",{className:"fill__third",children:[Object(o.jsxs)("div",{className:"fill__third--mail",children:[Object(o.jsx)("label",{htmlFor:"email",className:"fill__third--mail-lab",children:"Email *"}),Object(o.jsx)("input",{className:"fill__third--mail-inp",placeholder:"Ej: sally-hill@gmail.com",id:"email",type:"email",name:"email",value:A.email,onChange:B})]}),Object(o.jsxs)("div",{className:"fill__third--tel",children:[Object(o.jsx)("label",{htmlFor:"telephone",className:"fill__third--tel-lab",children:"Tel\xe9fono"}),Object(o.jsx)("input",{className:"fill__third--tel-inp js_allInputs",placeholder:"Ej: 555-55-55-55",id:"phone",type:"tel",name:"phone",value:A.phone,onChange:B})]}),Object(o.jsxs)("div",{className:"fill__third--linked",children:[Object(o.jsx)("label",{htmlFor:"linkedinName",className:"fill__third--linked-lab",children:"Linkedin *"}),Object(o.jsx)("input",{className:"fill__third--linked-inp js_allInputs",placeholder:"Ej: linkedin.com/in/sally.hill",id:"linkedin",type:"text",name:"linkedin",value:A.linkedin,onChange:B})]}),Object(o.jsxs)("div",{className:"fill__third--git",children:[Object(o.jsx)("label",{htmlFor:"gitHubName",className:"fill__third--git-lab",children:"Github *"}),Object(o.jsx)("input",{className:"fill__third--git-inp js_allInputs",placeholder:"Ej: @sally-hill",id:"github",type:"text",name:"github",value:A.github,onChange:B})]})]})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"topBorder"}),Object(o.jsxs)("div",{className:"collapsable js_collapsable",onClick:function(){"hidden"===N?(x(""),s("hidden"),u("hidden")):(x("hidden"),console.log(l))},children:[Object(o.jsx)("i",{className:"fas fa-share-alt collapsable__iconStart"}),Object(o.jsx)("h3",{className:"collapsable__title",children:"Comparte"}),Object(o.jsx)("i",{className:"fas fa-chevron-"+("hidden"===N?"down":"up")+" collapsable__iconEnd js_iconEnd"})]})]}),Object(o.jsx)(h,{data:A,collapseShare:N})]})]})]}),Object(o.jsx)(m,{})]})};c.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.0515e93a.chunk.js.map