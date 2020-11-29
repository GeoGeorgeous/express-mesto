(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),s=n(8),o=n.n(s),r=(n(17),n(11)),u=n(2),l=Object(i.createContext)(),d=n.p+"static/media/logo.2e17206c.svg";function p(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia",src:d})})}function m(e){var t=e.card,n=e.onCardClick,i=e.onCardLike,s=e.onCardDelete,o=c.a.useContext(l),r=t.owner._id===o._id,u="card__delete-button ".concat(r?"card__delete-button_visible":"card__delete-button_hidden"),d=t.likes.some((function(e){return e._id===o._id})),p="card__like-button ".concat(d?"card__like-button_active":"");return Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("img",{className:"card__image",src:t.link,alt:t.title,onClick:function(){n(t)}}),Object(a.jsx)("button",{className:u,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){s(t)}}),Object(a.jsxs)("div",{className:"card__content",children:[Object(a.jsx)("h2",{className:"card__title",children:t.name}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:p,type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",onClick:function(){i(t)}}),Object(a.jsx)("p",{className:"card__likes",children:t.likes.length})]})]})]},t.key)}function b(e){var t=c.a.useContext(l);return Object(a.jsxs)("main",{className:"root__main",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{className:"profile__avatar-image",alt:"\u0410\u0432\u0430\u0442\u0430\u0440",src:t.avatar}),Object(a.jsx)("div",{className:"profile__avatar-edit",onClick:e.onEditAvatar})]}),Object(a.jsxs)("div",{className:"profile__profile-wrapper",children:[Object(a.jsxs)("div",{className:"profile__name-wrapper",children:[Object(a.jsx)("h1",{className:"profile__name",id:"profile__name",children:t.name}),Object(a.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile__description",id:"profile__description",children:t.about})]}),Object(a.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"cards",children:Object(a.jsx)("ul",{className:"cards__items",children:e.cards&&e.cards.map((function(t){return Object(a.jsx)(m,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})}function _(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\u0413\u0435\u043e\u0440\u0433\u0438\u0439 \u0413\u043e\u0440\u0447\u0435\u0432 \xa9 2020 Mesto Russia"})})}function j(e){var t=e.isOpen?"popup_opened":"",n=e.isLoading?"popup__save-button_inactive":"";return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(t),"data-type":"place",children:Object(a.jsxs)("form",{className:"popup__container",name:e.name,id:e.name,onSubmit:e.onSubmit,noValidate:!0,children:[Object(a.jsx)("h3",{className:"popup__title",children:e.title}),Object(a.jsxs)("fieldset",{className:"popup__form",form:e.name,children:[e.children,Object(a.jsx)("button",{className:"popup__save-button ".concat(n),type:"submit",disabled:!!e.isLoading,children:e.isLoading?e.loadingText:e.submitButtonText})]}),Object(a.jsx)("button",{className:"popup__close-button",type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})}function h(e){var t=e.card.link?"popup_opened":"",n=e.card.link?e.card.link:"#",i=e.card.name?e.card.name:"#";return Object(a.jsx)("div",{className:"popup popup_darkness_lightbox ".concat(t),"data-type":"lightbox",children:Object(a.jsxs)("figure",{className:"lightbox",children:[Object(a.jsx)("button",{className:"popup__close-button",type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(a.jsx)("img",{className:"lightbox__image",src:n,alt:i}),Object(a.jsx)("figcaption",{className:"lightbox__caption",children:i})]})})}var f=n(9),O=n(10),x=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(f.a)(this,e),this._baseUrl=n,this._headers=a}return Object(O.a)(e,[{key:"_fetchButCatch",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status)))}))}},{key:"getUser",value:function(){return this._fetchButCatch("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"setUser",value:function(e){return this._fetchButCatch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"setAvatar",value:function(e){return this._fetchButCatch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"uploadCard",value:function(e){return this._fetchButCatch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"getCards",value:function(){return this._fetchButCatch("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"deleteCard",value:function(e){return this._fetchButCatch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers})}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.removeLike(e):this.setLike(e)}},{key:"setLike",value:function(e){return this._fetchButCatch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this._headers})}},{key:"removeLike",value:function(e){return this._fetchButCatch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"25068d5b-79ef-423f-8b22-b9922c31ad6c","Content-Type":"application/json"}});function v(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,s=e.submitButtonText,o=e.loadingText,r=e.isLoading,d=c.a.useContext(l),p=c.a.useState(d.name),m=Object(u.a)(p,2),b=m[0],_=m[1],h=c.a.useState(d.about),f=Object(u.a)(h,2),O=f[0],x=f[1];return c.a.useEffect((function(){_(d.name),x(d.about)}),[d]),Object(a.jsx)(j,{name:"profle",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({name:b,about:O})},submitButtonText:s,loadingText:o,isLoading:r,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"popup__form-item-group",children:[Object(a.jsx)("input",{id:"username",className:"popup__form-item popup__form-item_input_name",type:"text",placeholder:"\u0418\u043c\u044f",value:b||"",onChange:function(e){return _(e.target.value)},name:"name",minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("span",{id:"username-error",className:"popup__form-error"})]}),Object(a.jsxs)("div",{className:"popup__form-item-group",children:[Object(a.jsx)("input",{id:"description",className:"popup__form-item popup__form-item_input_description",type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",value:O||"",onChange:function(e){return x(e.target.value)},name:"about",minLength:"2",maxLength:"200",required:!0}),Object(a.jsx)("span",{id:"description-error",className:"popup__form-error"})]})]})})}function g(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateAvatar,s=e.submitButtonText,o=e.loadingText,r=e.isLoading,u=c.a.useRef();return Object(a.jsx)(j,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i(u.current.value)},submitButtonText:s,loadingText:o,isLoading:r,children:Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"popup__form-item-group",children:[Object(a.jsx)("input",{ref:u,id:"link",className:"popup__form-item popup__form-item_input_name",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0}),Object(a.jsx)("span",{id:"link-error",className:"popup__form-error"})]})})})}var C=n(5),k=n(7);function N(e){var t=e.isOpen,n=e.onClose,i=e.submitButtonText,s=e.onAddPlace,o=e.loadingText,r=e.isLoading,l=c.a.useState(""),d=Object(u.a)(l,2),p=d[0],m=d[1],b=c.a.useState(""),_=Object(u.a)(b,2),h=_[0],f=_[1],O=c.a.useState({name:"",link:""}),x=Object(u.a)(O,2),v=x[0],g=x[1];function N(e){var t=e.target,n=t.value,a=t.name;g(Object(k.a)(Object(k.a)({},v),{},Object(C.a)({},a,n))),"name"===t.name?m(n):f(n)}return Object(a.jsx)(j,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s(v)},submitButtonText:i,loadingText:o,isLoading:r,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"popup__form-item-group",children:[Object(a.jsx)("input",{id:"name",className:"popup__form-item popup__form-item_input_name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){return N(e)},name:"name",minLength:"1",maxLength:"30",value:p||"",required:!0}),Object(a.jsx)("span",{id:"title-error",className:"popup__form-error"})]}),Object(a.jsxs)("div",{className:"popup__form-item-group",children:[Object(a.jsx)("input",{id:"link",className:"popup__form-item popup__form-item_input_description",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){return N(e)},name:"link",value:h||"",required:!0}),Object(a.jsx)("span",{id:"link-error",className:"popup__form-error"})]})]})})}var y=function(){var e=c.a.useState({}),t=Object(u.a)(e,2),n=t[0],s=t[1],o=c.a.useState(!1),d=Object(u.a)(o,2),m=d[0],f=d[1],O=c.a.useState(!1),C=Object(u.a)(O,2),k=C[0],y=C[1],L=c.a.useState(!1),T=Object(u.a)(L,2),S=T[0],U=T[1],B=c.a.useState(!1),P=Object(u.a)(B,2),E=P[0],A=(P[1],c.a.useState({})),D=Object(u.a)(A,2),w=D[0],F=D[1],q=c.a.useState(!1),J=Object(u.a)(q,2),M=J[0],R=J[1],H=c.a.useState([]),I=Object(u.a)(H,2),z=I[0],V=I[1],G=function(){f(!1),y(!1),U(!1),F({})};return Object(i.useEffect)((function(){Promise.all([x.getUser(),x.getCards()]).then((function(e){console.log("\ud83d\udc4d \u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0438\u0441\u044c \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435!");var t=Object(u.a)(e,2),n=t[0],a=t[1];s(n),V(a)})).catch((function(e){return console.error(e)}))}),[]),Object(a.jsx)(l.Provider,{value:n,children:Object(a.jsxs)("div",{className:"root",children:[Object(a.jsx)(p,{}),Object(a.jsx)(b,{cards:z,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));x.changeLikeCardStatus(e,t).then((function(t){var n=z.map((function(n){return n._id===e._id?t:n}));V(n)})).catch((function(e){return console.error(e)}))},onCardDelete:function(e){e.owner._id,n._id,x.deleteCard(e).then((function(){V(z.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.error(e)}))},onEditProfile:function(){f(!0)},onAddPlace:function(){y(!0)},onEditAvatar:function(){U(!0)},onCardClick:function(e){F(e)}}),Object(a.jsx)(_,{}),Object(a.jsx)(v,{isOpen:m,onClose:G,onUpdateUser:function(e){R(!0),x.setUser(e).then((function(e){s(e),G()})).catch((function(e){return console.error(e)})).finally((function(){R(!1)}))},submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",loadingText:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",isLoading:M}),Object(a.jsx)(g,{isOpen:S,onClose:G,onUpdateAvatar:function(e){R(!0),x.setAvatar(e).then((function(e){s(e),G()})).catch((function(e){return console.error(e)})).finally((function(){R(!1)}))},submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",loadingText:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",isLoading:M}),Object(a.jsx)(N,{isOpen:k,onClose:G,submitButtonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",loadingText:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",isLoading:M,onAddPlace:function(e){R(!0),x.uploadCard(e).then((function(e){V([e].concat(Object(r.a)(z))),G()})).catch((function(e){return console.error(e)})).finally((function(){R(!1)}))}}),Object(a.jsx)(j,{name:"confirm-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:E,onClose:G,children:Object(a.jsx)("button",{className:"popup__save-button popup__save-button_context_confirm-delete",type:"submit",children:"\u0414\u0430"})}),Object(a.jsx)(h,{card:w,onClose:G})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),L()}},[[18,1,2]]]);
//# sourceMappingURL=main.b0d7b93b.chunk.js.map