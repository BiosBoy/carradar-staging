(self.webpackChunkcheck_my_car=self.webpackChunkcheck_my_car||[]).push([[129],{7112:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7363),r=t.n(n);const s={button:"button___MLezn",filled:"filled___l65P6",S:"S___iH1pW",M:"M___texFT",L:"L___XDhRo",preloader:"preloader___mpJg0",preloader1:"preloader1___wYTxn",preloader2:"preloader2___k55xM",preloader3:"preloader3___P258E"};const l=function(e){var a=e.onClick,t=e.label,n=e.isActive,l=e.isLoading,o=e.disabled,c=e.size,i=r().createElement("span",{className:s.preloader},r().createElement("span",null),r().createElement("span",null),r().createElement("span",null));return r().createElement("button",{type:"button",disabled:o,className:"".concat(s.button," ").concat(n?s.filled:""," ").concat(c?s[c]:""),onClick:a,"aria-label":t},l?i:t)}},7876:(e,a,t)=>{t.r(a),t.d(a,{default:()=>y});var n=t(7363),r=t.n(n),s=t(5982),l=t(6715),o=t(8216),c=t(1384),i=t(7112),m=t(6279),u=t(5224),d=t(3329);const _=function(){return{SECTION_TITLE:d.Z.t("pages.registration.title"),FORM:{EMAIL:d.Z.t("pages.registration.form.email"),EMAIL_TIP:d.Z.t("pages.registration.form.email_tip"),PASSWORD:d.Z.t("pages.registration.form.password"),CONFIRM_PASSWORD:d.Z.t("pages.registration.form.confirm_password"),NAME:d.Z.t("pages.registration.form.name"),SUBMIT:d.Z.t("pages.registration.form.submit"),PASSWORD_TIP:d.Z.t("pages.registration.form.password_tip"),PASSWORDS_MATCH:d.Z.t("pages.registration.form.passwords_match")}}};var p=t(1786);const g=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};var f=t(3586);const E="registrationWrap___zcd3M",v="headline___JA8gW",N="contentWrap___a5GOO",S="input___vgf7q",b="text___F2aua",h="floatLabel___ZI91t",w="error___DAvNj",A="socialWrap___tgtNm",C="label___krrpG";var I=(0,n.memo)((function(){var e=(0,n.useRef)(null),a=_(),t=a.SECTION_TITLE,l=a.FORM,d=(0,o.I0)(),I=(0,o.v9)((function(e){return e.registration})),y=I.username,M=I.email,R=I.password,P=I.passwordConfirmation,Z=I.isRegistrationFetch,k=I.error,O=(0,o.v9)((function(e){return e.app})),T=O.isLogged,D=O.locale;(0,n.useEffect)((function(){window.prerenderReady=!0,e.current.focus()}),[]),(0,n.useEffect)((function(){T&&d((0,s.VF)("".concat((0,p.Z)(D),"profile")))}),[T]);var L=function(e){var a=e.target,t=a.id,n=a.value;d((0,u.Py)({id:t,value:n}))},W=function(){d((0,u.vN)())},F=function(e){"Enter"===e.code&&W()},x=y&&M&&R&&P,z=R&&R.length<8,B=P&&R!==P,K=M&&!g(M);return r().createElement("div",{className:E},r().createElement("h1",{className:v},t),r().createElement("div",{className:N},r().createElement("label",{htmlFor:"username",className:"".concat(b," ").concat(h)},l.NAME),r().createElement("input",{id:"username",name:"username",type:"text",ref:e,className:S,value:y,onChange:L,onKeyDown:F,disabled:Z})),r().createElement("div",{className:N},r().createElement("label",{htmlFor:"email",className:"".concat(b," ").concat(h)},l.EMAIL),r().createElement("input",{id:"email",name:"email",type:"text",className:S,value:M,onChange:L,onKeyDown:F,disabled:Z}),K&&r().createElement("span",{className:w},l.EMAIL_TIP)),r().createElement("div",{className:N},r().createElement("label",{htmlFor:"password",className:"".concat(b," ").concat(h)},l.PASSWORD),r().createElement("input",{id:"password",name:"password",type:"password",className:S,value:R,onChange:L,onKeyDown:F,disabled:Z}),z&&r().createElement("span",{className:w},l.PASSWORD_TIP)),r().createElement("div",{className:N},r().createElement("label",{htmlFor:"passwordConfirmation",className:"".concat(b," ").concat(h)},l.CONFIRM_PASSWORD),r().createElement("input",{id:"passwordConfirmation",className:S,name:"passwordConfirmation",type:"password",value:P,onChange:L,onKeyDown:F,disabled:Z}),B&&r().createElement("span",{className:w},l.PASSWORDS_MATCH)),r().createElement(i.Z,{onClick:W,disabled:!x,isLoading:Z,isActive:!!x&&!z&&!B,label:l.SUBMIT}),k&&r().createElement("span",{className:w},k),r().createElement("div",{className:A},r().createElement("span",{className:C},"Use Social Links to Register:"),r().createElement(c.GApiProvider,{clientConfig:f.C},r().createElement(m.Z,{callback:function(e){console.log(e,"userData"),d((0,u.zz)(e))}}))))}));const y=(0,l.EN)(I)},6279:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7363),r=t.n(n),s=t(1384);const l="loginWrap___t9k2o";var o=function(e,a){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,r,s=t.call(e),l=[];try{for(;(void 0===a||a-- >0)&&!(n=s.next()).done;)l.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(t=s.return)&&t.call(s)}finally{if(r)throw r.error}}return l};const c=(0,n.memo)((function(e){var a=e.callback,t=o((0,n.useState)(null),2),c=t[0],i=t[1];return r().createElement("div",{className:l},r().createElement(s.SignInButton,{options:{width:200,height:50,theme:"light",onsuccess:function(e){var t,n,r;c||a((n=(t=e).getBasicProfile(),r={id:n.getId(),username:n.getName().includes(" ")?n.getName().split(" ")[0]:n.getName(),usersurname:n.getName().includes(" ")?n.getName().split(" ")[1]:"",email:n.getEmail(),imagesrc:n.getImageUrl(),token:t.getAuthResponse(!0)},i(r),r))},onfailure:function(e){return console.log(e,"error")}}}))}))}}]);
//# sourceMappingURL=registration.c5c63b28be07d907a086.js.map