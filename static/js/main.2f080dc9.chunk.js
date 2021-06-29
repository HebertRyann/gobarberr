(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{118:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(72),i=t.n(o),c=t(14),l=t(2),u=t(3);function s(){var n=Object(l.a)(["\n* {\n  margin: 0px;\n  padding: 0px;\n  outline: 0px;\n  box-sizing: border-box;\n}\nbody {\n  background: #312E38 ;\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n}\nbody, input, button {\n  font-family: 'Roboto slab', serif;\n  font-size: 16px;\n}\n\nh1, h2, h3, h4 ,h4 ,h6, strong {\n  font-weight: 500;\n}\n\nbutton {\n  cursor: pointer;\n}\n"]);return s=function(){return n},n}var d=Object(u.a)(s()),p=t(13),m=t.n(p),f=t(24),b=t(20),g=t(15),h=t(76),v=t.n(h).a.create({baseURL:"http://localhost:3333"}),x=t(51),E=t(5);function O(){var n=Object(l.a)(["\n    align-items: center;\n\n    svg {\n      margin-top: 0px;\n    }\n\n    height: 70px;\n  "]);return O=function(){return n},n}function j(){var n=Object(l.a)(["\n  width: 360px;\n  position: relative;\n  display: flex;\n  padding: 16px 30px 16px 16px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 8px rgba(0,0,0,0.2);\n\n  & + div {\n    margin-top: 10px\n  }\n  ","\n  > svg {\n    margin: 4px 12px 0 0;\n\n  }\n\n  div {\n    flex: 1;\n\n    p {\n      margin-top: 4px;\n      font-size: 14px;\n      opacity: 0.8;\n      line-height: 20px;\n    }\n  }\n\n  button {\n    position: absolute;\n    right: 16px;\n    top: 18px;\n    opacity: 0.6;\n    border: 0;\n    background: transparent;\n    color: inherit;\n  }\n\n  ","\n"]);return j=function(){return n},n}function y(){var n=Object(l.a)(["\n    background: #fddede;\n    color: #c53030;\n  "]);return y=function(){return n},n}function w(){var n=Object(l.a)(["\n    background: #e6fffa;\n    color: #2e656a;\n  "]);return w=function(){return n},n}function k(){var n=Object(l.a)(["\n    background: #ebf8ff;\n    color: #3172b7;\n  "]);return k=function(){return n},n}var D={info:Object(u.b)(k()),success:Object(u.b)(w()),error:Object(u.b)(y())},S=Object(u.c)(x.a.div)(j(),(function(n){return D[n.type||"info"]}),(function(n){return!n.hasDescription&&Object(u.b)(O())})),C={info:a.a.createElement(E.f,{size:24}),error:a.a.createElement(E.a,{size:24}),success:a.a.createElement(E.d,{size:24})},F=function(n){var e=n.message,t=n.style,o=T().removeToast;return Object(r.useEffect)((function(){var n=setTimeout((function(){o(e.id)}),3e3);return function(){clearTimeout(n)}}),[e.id,o]),a.a.createElement(S,{type:e.type,hasDescription:Number(!!e.description),style:t},C[e.type||"info"],a.a.createElement("div",null,a.a.createElement("strong",null,e.title),e.description&&a.a.createElement("p",null,e.description)),a.a.createElement("button",{type:"button",onClick:function(){return o(e.id)}},a.a.createElement(E.l,{size:18})))};function z(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 30px;\n  overflow: hidden;\n"]);return z=function(){return n},n}var P=u.c.div(z()),M=function(n){var e=n.messages,t=Object(x.b)(e,(function(n){return n.id}),{from:{right:"-120%"},enter:{right:"0%"},leave:{right:"-120%"}});return a.a.createElement(P,null,t.map((function(n){var e=n.key,t=n.item,r=n.props;return a.a.createElement(F,{key:e,message:t,style:r})})))},_=t(48),N=Object(r.createContext)({}),A=function(n){var e=n.children,t=Object(r.useCallback)((function(n){var e=n.title,t=n.type,r=n.description,a={id:Object(_.v4)(),title:e,type:t,description:r};u((function(n){return[].concat(Object(f.a)(n),[a])}))}),[]),o=Object(r.useCallback)((function(n){u((function(e){return e.filter((function(e){return e.id!==n}))}))}),[]),i=Object(r.useState)([]),c=Object(g.a)(i,2),l=c[0],u=c[1];return a.a.createElement(N.Provider,{value:{addToast:t,removeToast:o}},e,a.a.createElement(M,{messages:l}))};function T(){var n=Object(r.useContext)(N);if(!n)throw new Error("useToast must be used whitin a ToastProvider");return n}var R=Object(r.createContext)({}),q=function(n){var e=n.children,t=(T().addToast,Object(r.useState)([])),o=Object(g.a)(t,2),i=o[0],c=o[1],l=Object(r.useState)((function(){var n=localStorage.getItem("@GoBarber:token"),e=localStorage.getItem("@GoBarber:user");return n&&e?(v.defaults.headers.authorization="Bearer ".concat(n),{token:n,user:JSON.parse(e)}):{}})),u=Object(g.a)(l,2),s=u[0],d=u[1],p=Object(r.useCallback)((function(n){var e=n.email,t=(n.password,i.find((function(n){return n.email===e})));if(console.log(t,i,e),!t)throw new Error("Erro ao tentar login");localStorage.setItem("@GoBarber:user",JSON.stringify(t)),d({user:t})}),[]),h=Object(r.useCallback)(function(){var n=Object(b.a)(m.a.mark((function n(e){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c([].concat(Object(f.a)(i),[e])),console.log(e,i),n.abrupt("return",i);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[i]),x=Object(r.useCallback)((function(){localStorage.removeItem("@GoBarber:user"),d({})}),[]),E=Object(r.useCallback)((function(n){localStorage.setItem("@GoBarber:user",JSON.stringify(n)),d({user:n})}),[d]);return a.a.createElement(R.Provider,{value:{user:s.user,SignIn:p,SignOut:x,updateUser:E,SignUp:h}},e)};function B(){var n=Object(r.useContext)(R);if(!n)throw new Error("useAuth must be used whitin an AuthProvider");return n}var X=function(n){var e=n.children;return a.a.createElement(q,null,a.a.createElement(A,null,e))},I=t(9),J=t(25),G=t(6);function H(n){var e={};return n.inner.forEach((function(n){e[n.path]=n.message})),e}var V=t(26),U=t.n(V),L=t(12),Y=t(37),Q=t.n(Y);function W(){var n=Object(l.a)(["\n  flex: 1;\n  background: url(",") no-repeat center;\n  background-size: cover;\n"]);return W=function(){return n},n}function K(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  animation: "," 1s;\nform {\n    margin: 80px 0px;\n    text-align: center;\n    width: 340px\n  }\n  h1{ \n    margin-bottom: 24px;\n  }\n\n  a {\n    display: block;\n    color: #F4EDE8;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  > a {\n    display: flex;\n    align-items: center;\n    color: #ff9000;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 16px;\n    }\n  }\n"]);return K=function(){return n},n}function Z(){var n=Object(l.a)(["\n  from{\n    opacity: 0;\n    transform: translateX(-50px);\n  }to{\n    opacity: 1;\n    transform: translateX(0);\n  } \n"]);return Z=function(){return n},n}function $(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  width: 100%;\n  max-width: 700px;\n  align-items: center;\n  \n"]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: stretch;\n"]);return nn=function(){return n},n}var en=u.c.div(nn()),tn=u.c.div($()),rn=Object(u.d)(Z()),an=u.c.div(K(),rn,Object(L.a)(.2,"#F4EDE8"),Object(L.a)(.2,"#ff9000")),on=u.c.div(W(),Q.a),cn=t(38);function ln(){var n=Object(l.a)(["\n  position: relative;\n\n  span {\n    width: 150px;\n    background: #ff9000;\n    padding: 8px;\n    border-radius: 4px;\n    font-size: 14px;\n    font-weight: 500;\n    opacity: 0;\n    transition: opacity 0.4s;\n    visibility: hidden;\n\n    position: absolute;\n    bottom: calc(100% + 12px);\n    left: 50%;\n    transform: translateX(-50%);\n    color: #312301;\n\n    &::before {\n      content: '';\n      border-style: solid;\n      border-color: #ff9000 transparent; \n      border-width:6px 6px 0 6px;\n      top: 100%;\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n\n    }\n  }\n    &:hover span {\n      opacity: 1;\n      visibility: visible;\n    }\n"]);return ln=function(){return n},n}var un=u.c.div(ln()),sn=function(n){var e=n.title,t=n.children,r=n.className;return a.a.createElement(un,{className:r},t,a.a.createElement("span",null,e))};function dn(){var n=Object(l.a)(["\n  height: 20px;\n  margin-left: 8px;\n\n  svg {\n    margin: 0;\n  }\n  span {\n    background: #c53030;\n    color: #fff;\n\n    &::before {\n      border-color: #c53030 transparent;\n    }\n  }\n"]);return dn=function(){return n},n}function pn(){var n=Object(l.a)(["\n    color: #ff9000;\n    "]);return pn=function(){return n},n}function mn(){var n=Object(l.a)(["\n    border-color: #ff9000;\n    color: #ff9000;\n    "]);return mn=function(){return n},n}function fn(){var n=Object(l.a)(["\n    border-color: #c53030;\n    "]);return fn=function(){return n},n}function bn(){var n=Object(l.a)(["\n    background: #232129;\n    border-radius: 10px;\n    border: 2px solid #232129;\n    padding: 16px;\n    width: 100%;\n    color: rgba(244, 237, 232, 0.6);\n\n    display: flex;\n    align-items: center;\n\n\n    & + div {\n      margin-top: 8px;\n    }\n    ","\n\n    ","\n\n    ","\n\n  input {\n    appearance: none;\n    flex: 1;\n    background: transparent;\n    border: 0;\n    color: #F4EDE8;\n\n\n    &::placeholder {\n      color: #666360;\n    }\n  }\n    svg {\n      margin-right: 16px;\n    }\n"]);return bn=function(){return n},n}var gn=u.c.div(bn(),(function(n){return n.isErrored&&Object(u.b)(fn())}),(function(n){return n.isFocused&&Object(u.b)(mn())}),(function(n){return n.isFilled&&Object(u.b)(pn())})),hn=Object(u.c)(sn)(dn()),vn=t(42),xn=function(n){var e=n.name,t=n.constainerStyle,o=n.icon,i=Object(cn.a)(n,["name","constainerStyle","icon"]),c=Object(r.useRef)(null),l=Object(vn.c)(e),u=l.fieldName,s=l.error,d=l.defaultValue,p=l.registerField,m=Object(r.useState)(!1),f=Object(g.a)(m,2),b=f[0],h=f[1],v=Object(r.useState)(!1),x=Object(g.a)(v,2),O=x[0],j=x[1],y=Object(r.useCallback)((function(){var n;h(!1),j(!!(null===(n=c.current)||void 0===n?void 0:n.value))}),[]),w=Object(r.useCallback)((function(){h(!0)}),[]);return Object(r.useEffect)((function(){p({name:u,ref:c.current,path:"value"})}),[p,u]),a.a.createElement(gn,{isErrored:!!s,isFocused:b,isFilled:O,style:t},o&&a.a.createElement(o,{size:20}),a.a.createElement("input",Object.assign({onFocus:w,onBlur:y,defaultValue:d,ref:c},i)),s&&a.a.createElement(hn,{title:s},a.a.createElement(E.a,{size:20,color:"#c53030"})))};function En(){var n=Object(l.a)(["\n    background: #ff9000;\n    height: 56px;\n    border-radius: 10px;\n    border: 0;\n    padding: 0 16px;\n    width: 100%;\n    color: #312E38;\n    font-weight: 500;\n    margin-top: 24px;\n    transition: background-color 0.2s; \n\n    &:hover {\n      background: ",";\n    }\n"]);return En=function(){return n},n}var On=u.c.button(En(),Object(L.a)(.2,"#ff9000")),jn=function(n){var e=n.children,t=n.loading,r=Object(cn.a)(n,["children","loading"]);return a.a.createElement(On,Object.assign({type:"button"},r),t?"Carregando":e)},yn=function(){var n=Object(r.useRef)(null),e=B(),t=e.SignIn,o=(e.user,T().addToast),i=Object(I.g)(),l=Object(r.useCallback)(function(){var e=Object(b.a)(m.a.mark((function e(r){var a,c,l,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,null===(a=n.current)||void 0===a||a.setErrors({}),c=G.b().shape({email:G.d().required("email obrigatorio").email("digite um email valido"),password:G.d().required("senha obrigatoria")}),e.next=5,c.validate(r,{abortEarly:!1});case 5:t({email:r.email,password:r.password}),i.push("/dashboard"),e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(0),!(e.t0 instanceof G.a)){e.next=15;break}return u=H(e.t0),null===(l=n.current)||void 0===l||l.setErrors(u),e.abrupt("return");case 15:o({title:"Erro na Autentica\xe7ao",type:"error",description:"Ocorreu um Erro ao fazer login"});case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),[t,o,i]);return a.a.createElement(en,null,a.a.createElement(tn,null,a.a.createElement(an,null,a.a.createElement("img",{src:U.a}),a.a.createElement(J.a,{ref:n,onSubmit:l},a.a.createElement("h1",null,"Fa\xe7a seu Logon"),a.a.createElement(xn,{name:"email",icon:E.i,placeholder:"E-mail"}),a.a.createElement(xn,{name:"password",icon:E.g,type:"password",placeholder:"Senha"}),a.a.createElement(jn,{type:"submit"},"Entrar"),a.a.createElement(c.b,{to:"/forgot-password"},"Esqueci Minha Senha")),a.a.createElement(c.b,{to:"/signup"},a.a.createElement(E.h,null),"Criar Conta"))),a.a.createElement(on,null))},wn=t(80),kn=t.n(wn);function Dn(){var n=Object(l.a)(["\n  flex: 1;\n  background: url(",") no-repeat center;\n  background-size: cover;\n"]);return Dn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  animation: "," 1s;\n  form {\n    margin: 80px 0px;\n    text-align: center;\n    width: 340px\n  }\n  h1{ \n    margin-bottom: 24px;\n  }\n\n  a {\n    display: block;\n    color: #F4EDE8;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  > a {\n    display: flex;\n    align-items: center;\n    color: #ff9000;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 16px;\n    }\n  }\n"]);return Sn=function(){return n},n}function Cn(){var n=Object(l.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(50px);\n  }to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n"]);return Cn=function(){return n},n}function Fn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  width: 100%;\n  max-width: 700px;\n  align-items: center;\n"]);return Fn=function(){return n},n}function zn(){var n=Object(l.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: stretch;\n"]);return zn=function(){return n},n}var Pn=u.c.div(zn()),Mn=u.c.div(Fn()),_n=Object(u.d)(Cn()),Nn=u.c.div(Sn(),_n,Object(L.a)(.2,"#F4EDE8"),Object(L.a)(.2,"#ff9000")),An=u.c.div(Dn(),kn.a),Tn=function(){var n=Object(r.useRef)(null),e=T().addToast,t=Object(I.g)(),o=B().SignUp,i=Object(r.useCallback)(function(){var t=Object(b.a)(m.a.mark((function t(r){var a,i,c,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,null===(a=n.current)||void 0===a||a.setErrors({}),i=G.b().shape({name:G.d().required("Nome obrigat\xf3rio"),email:G.d().required("email obrigatorio").email("digite um email valido"),password:G.d().min(6,"no minimo 6 caracteres")}),t.next=5,i.validate(r,{abortEarly:!1});case 5:return t.next=7,o({id:Object(_.v4)(),email:r.email,name:r.name,avatar_url:""});case 7:e({type:"success",title:"Cadastro Realizado",description:"Voce Ja pode fazer seu logon no GoBarber"}),t.next=17;break;case 10:if(t.prev=10,t.t0=t.catch(0),!(t.t0 instanceof G.a)){t.next=16;break}return l=H(t.t0),null===(c=n.current)||void 0===c||c.setErrors(l),t.abrupt("return");case 16:e({title:"Erro no Cadastro",type:"error",description:"Erro ao Fazer o Cadastro Tente Novamente"});case 17:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}(),[e,t]);return a.a.createElement(Pn,null,a.a.createElement(An,null),a.a.createElement(Mn,null,a.a.createElement(Nn,null,a.a.createElement("img",{src:U.a}),a.a.createElement(J.a,{ref:n,onSubmit:i},a.a.createElement("h1",null,"Fa\xe7a seu Cadastro"),a.a.createElement(xn,{name:"name",icon:E.k,placeholder:"Nome"}),a.a.createElement(xn,{name:"email",icon:E.i,placeholder:"E-mail"}),a.a.createElement(xn,{name:"password",icon:E.g,type:"password",placeholder:"Senha"}),a.a.createElement(jn,{type:"submit"},"Cadastrar")),a.a.createElement(c.b,{to:"/"},a.a.createElement(E.b,null),"Voltar para Home"))))},Rn=t(43);function qn(){var n=Object(l.a)(["\n  width: 380px;\n  .DayPicker {\n  background: #28262e;\n  border-radius: 10px;\n}\n\n.DayPicker-wrapper {\n  padding-bottom: 0;\n}\n\n.DayPicker,\n.DayPicker-Month {\n  width: 100%;\n}\n\n.DayPicker-Month {\n  border-collapse: separate;\n  border-spacing: 8px;\n  margin: 16px;\n}\n\n.DayPicker-Day {\n  width: 40px;\n  height: 40px;\n}\n\n.DayPicker-Day--available:not(.DayPicker-Day--outside) {\n  background: #3e3b47;\n  border-radius: 10px;\n  color: #fff;\n}\n\n.DayPicker:not(.DayPicker--interactionDisabled)\n  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {\n  background: ",";\n}\n\n.DayPicker-Day--today {\n  font-weight: normal;\n}\n\n.DayPicker-Day--disabled {\n  color: #666360 !important;\n  background: transparent !important;\n}\n\n.DayPicker-Day--selected {\n  background: #ff9000 !important;\n  border-radius: 10px;\n  color: #232129 !important;\n}\n"]);return qn=function(){return n},n}function Bn(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n\n  & + div {\n    margin-top: 16px;\n  }\n\n  span {\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    color: #f4ede8;\n    width: 90px;\n\n    svg {\n      color: #ff9000;\n      margin-right: 8px;\n    }\n  }\n\n  div {\n    flex: 1;\n    background: #3e3b47;\n    display: flex;\n    align-items: center;\n    padding: 16px 24px;\n    border-radius: 10px;\n    margin-left: 24px;\n    img {\n      width: 56px;\n      height: 56px;\n      border-radius: 50%;\n    }\n\n    strong {\n      margin-left: 24px;\n      color: #fff;\n      font-size: 20px;\n    }\n  }\n\n"]);return Bn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n  margin-top: 48px;\n  > strong {\n    color: #999591;\n    font-size: 20px;\n    line-height: 26px;\n    border-bottom: 1px solid #3e3b47;\n    display: block;\n    padding-bottom: 16px;\n    margin-bottom: 16px;\n  }\n  > p {\n    color: #999591;\n  }\n"]);return Xn=function(){return n},n}function In(){var n=Object(l.a)(["\n  margin-top: 64px;\n  > strong {\n    color: #999591;\n    font-size: 20px;\n    font-weight: 400;\n  }\n  div {\n    background: #3e3b47;\n    display: flex;\n    align-items: center;\n    padding: 16px 24px;\n    border-radius: 10px;\n    margin-top: 24px;\n    position: relative;\n\n    &::before{\n      content: '';\n      position: absolute;\n      height: 80%;\n      width: 1px;\n      left: 0;\n      top: 10%;\n      background: #ff9000;\n    }\n\n    img {\n      width: 80px;\n      height: 80px;\n      border-radius: 50%;\n    }\n\n    strong {\n      margin-left: 24px;\n      color: #fff;\n    }\n    \n    span {\n      margin-left: auto;\n      display: flex;\n      align-items: center;\n      color: #999591;\n\n      svg {\n        color: #ff9000;\n        margin-right: 8px;\n      }\n    }\n  }\n"]);return In=function(){return n},n}function Jn(){var n=Object(l.a)(["\n  flex: 1;\n  margin-right: 120px;\n\n  h1 {\n    font-size: 36px;\n  }\n\n  p {\n    margin-top: 8px;\n    color: #ff9000;\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n  }\n\n  span {\n    display: flex;\n    align-items: center;\n  }\n  \n  span + span::before {\n    content: '';\n    width: 1px;\n    height: 12px;\n    background: #ff9000;\n    margin: 0 8px;\n  }\n"]);return Jn=function(){return n},n}function Gn(){var n=Object(l.a)(["\n  max-width: 1120px;\n  margin: 64px auto;\n  display: flex;\n"]);return Gn=function(){return n},n}function Hn(){var n=Object(l.a)(["\n\n  display: flex;\n  align-items: center;\n  margin-left: 80px;\n\n  img {\n    width: 56px;\n    height: 56px;\n    border-radius: 50%;\n    \n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    margin-left:  16px;\n    line-height: 24px;\n\n    span {\n      color: #f4ede8;\n    }\n\n    strong {\n      color: #ff9000;\n    }\n    a {\n      text-decoration: none;\n      transition: 0.5s;\n      &:hover{\n        transform: scale(1.11);\n      }\n    }\n  }\n"]);return Hn=function(){return n},n}function Vn(){var n=Object(l.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n\n  > img {\n    height: 80px;\n  }\n\n  button {\n    margin-left: auto;\n    background: transparent;\n    border: 0;\n\n    svg {\n      color: #999591;\n      width: 20px;\n      height: 20px;\n      transition: 0.5s;\n      &:hover{\n        color: #ff9000;\n        transform: scale(1.15);\n      }\n    }\n  }\n"]);return Vn=function(){return n},n}function Un(){var n=Object(l.a)(["\n  padding: 32px 0;\n  background: #28262e;\n"]);return Un=function(){return n},n}function Ln(){var n=Object(l.a)([""]);return Ln=function(){return n},n}var Yn=u.c.div(Ln()),Qn=u.c.header(Un()),Wn=u.c.div(Vn()),Kn=u.c.div(Hn()),Zn=u.c.main(Gn()),$n=u.c.div(Jn()),ne=u.c.div(In()),ee=u.c.section(Xn()),te=u.c.div(Bn()),re=u.c.aside(qn(),Object(L.a)(.2,"#3e3b47")),ae=t(81),oe=t.n(ae),ie=(t(117),t(122)),ce=t(120),le=t(121),ue=t(123),se=t(57),de=function(){var n=B(),e=n.SignOut,t=n.user,o=Object(r.useState)(new Date),i=Object(g.a)(o,2),l=i[0],u=i[1],s=Object(r.useState)(new Date),d=Object(g.a)(s,2),p=d[0],m=d[1],b=Object(r.useState)([]),h=Object(g.a)(b,2),x=h[0],O=h[1],j=Object(r.useState)([]),y=Object(g.a)(j,2),w=y[0],k=y[1],D=Object(r.useCallback)((function(n,e){e.available,e.disabled||u(n)}),[]),S=Object(r.useCallback)((function(n){m(n)}),[]);Object(r.useEffect)((function(){v.get("/providers/".concat(t.id,"/month-availability"),{params:{year:p.getFullYear(),month:p.getMonth()+1}}).then((function(n){O(n.data)}))}),[p,t.id]),Object(r.useEffect)((function(){v.get("appointments/me",{params:{year:l.getFullYear(),month:l.getMonth()+1,day:l.getDate()}}).then((function(n){var e=n.data.map((function(n){return Object(Rn.a)(Object(Rn.a)({},n),{},{hourFormatted:Object(ie.a)(Object(ce.a)(n.date),"HH:mm")})}));k(e)}))}),[l]);var C=Object(r.useMemo)((function(){return x.filter((function(n){return!1===n.availability})).map((function(n){var e=p.getFullYear(),t=p.getMonth();return new Date(e,t,n.day)}))}),[p,x]),F=Object(r.useMemo)((function(){return Object(ie.a)(l,"'Dia' dd 'de' MMMM",{locale:se.a})}),[l]),z=Object(r.useMemo)((function(){return Object(ie.a)(l,"cccc",{locale:se.a})}),[l]),P=Object(r.useMemo)((function(){return w.filter((function(n){return Object(ce.a)(n.date).getHours()<12}))}),[w]),M=Object(r.useMemo)((function(){return w.filter((function(n){return Object(ce.a)(n.date).getHours()>=12}))}),[w]),_=Object(r.useMemo)((function(){return w.find((function(n){Object(le.a)(Object(ce.a)(n.date),new Date)}))}),[w]);return a.a.createElement(Yn,null,a.a.createElement(Qn,null,a.a.createElement(Wn,null,a.a.createElement("img",{src:U.a,alt:"GoBarber"}),a.a.createElement(Kn,null,a.a.createElement("img",{src:t.avatar_url,alt:t.name}),a.a.createElement("div",null,a.a.createElement("span",null,"Bem Vindo"),a.a.createElement(c.b,{to:"/profile"},a.a.createElement("strong",null,t.name)))),a.a.createElement("button",{type:"button",onClick:e},a.a.createElement(E.j,null)))),a.a.createElement(Zn,null,a.a.createElement($n,null,a.a.createElement("h1",null,"Horarios Agendados"),a.a.createElement("p",null,Object(ue.a)(l)&&a.a.createElement("span",null,"Hoje"),a.a.createElement("span",null,F),a.a.createElement("span",null,"".concat(z,"-feira"))),Object(ue.a)(l)&&_&&a.a.createElement(ne,null,a.a.createElement("strong",null,"Agendamento a Seguir"),a.a.createElement("div",null,a.a.createElement("img",{src:_.user.avatar_url,alt:_.user.name}),a.a.createElement("strong",null,_.user.name),a.a.createElement("span",null," ",a.a.createElement(E.e,null)," ",_.hourFormatted," "))),a.a.createElement(ee,null,a.a.createElement("strong",null,"Manha"),0===P.length&&a.a.createElement("p",null,"Nenhum agendamento neste Periodo"),P.map((function(n){return a.a.createElement(te,{key:n.id},a.a.createElement("span",null,a.a.createElement(E.e,null),n.hourFormatted),a.a.createElement("div",null,a.a.createElement("img",{src:n.user.avatar_url,alt:n.user.name}),a.a.createElement("strong",null,n.user.name)))}))),a.a.createElement(ee,null,a.a.createElement("strong",null,"Tarde"),0===P.length&&a.a.createElement("p",null,"Nenhum agendamento neste Periodo"),M.map((function(n){return a.a.createElement(te,{key:n.id},a.a.createElement("span",null,a.a.createElement(E.e,null),n.hourFormatted),a.a.createElement("div",null,a.a.createElement("img",{src:n.user.avatar_url,alt:n.user.name}),a.a.createElement("strong",null,n.user.name)))})))),a.a.createElement(re,null,a.a.createElement(oe.a,{weekdaysShort:["D","S","T","Q","Q","S","S"],fromMonth:new Date,disabledDays:[{daysOfWeek:[0,6]}].concat(Object(f.a)(C)),selectedDays:l,modifiers:{available:{daysOfWeek:[1,2,3,4,5]}},onDayClick:D,onMonthChange:S,months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]}))))},pe=function(n){var e=n.isPrivate,t=void 0!==e&&e,r=n.component,o=Object(cn.a)(n,["isPrivate","component"]),i=B().user;return a.a.createElement(I.b,Object.assign({},o,{render:function(){return t===!!i?a.a.createElement(r,null):a.a.createElement(I.a,{to:{pathname:t?"/":"/dashboard"}})}}))};function me(){var n=Object(l.a)(["\n  flex: 1;\n  background: url(",") no-repeat center;\n  background-size: cover;\n"]);return me=function(){return n},n}function fe(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  animation: "," 1s;\nform {\n    margin: 80px 0px;\n    text-align: center;\n    width: 340px\n  }\n  h1{ \n    margin-bottom: 24px;\n  }\n\n  a {\n    display: block;\n    color: #F4EDE8;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  > a {\n    display: flex;\n    align-items: center;\n    color: #ff9000;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 16px;\n    }\n  }\n"]);return fe=function(){return n},n}function be(){var n=Object(l.a)(["\n  from{\n    opacity: 0;\n    transform: translateX(-50px);\n  }to{\n    opacity: 1;\n    transform: translateX(0);\n  } \n"]);return be=function(){return n},n}function ge(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  width: 100%;\n  max-width: 700px;\n  align-items: center;\n  \n"]);return ge=function(){return n},n}function he(){var n=Object(l.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: stretch;\n"]);return he=function(){return n},n}var ve=u.c.div(he()),xe=u.c.div(ge()),Ee=Object(u.d)(be()),Oe=u.c.div(fe(),Ee,Object(L.a)(.2,"#F4EDE8"),Object(L.a)(.2,"#ff9000")),je=u.c.div(me(),Q.a),ye=function(){var n=Object(r.useRef)(null),e=(B().user,Object(r.useState)(!1)),t=Object(g.a)(e,2),o=t[0],i=t[1],l=T().addToast,u=Object(I.g)(),s=Object(r.useCallback)(function(){var e=Object(b.a)(m.a.mark((function e(t){var r,a,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),null===(r=n.current)||void 0===r||r.setErrors({}),a=G.b().shape({email:G.d().required("email obrigatorio").email("digite um email valido")}),e.next=6,a.validate(t,{abortEarly:!1});case 6:l({type:"success",title:"E-mail de Recupera\xe7ao enviado",description:"Enviamos um email de recupera\xe7ao da sua senha para o email: ".concat(t.email)}),e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(0),!(e.t0 instanceof G.a)){e.next=15;break}return c=H(e.t0),null===(o=n.current)||void 0===o||o.setErrors(c),e.abrupt("return");case 15:l({type:"error",title:"Erro na Recupera\xe7ao da senha",description:"Ocorreu um Erro ao tentar Recuperar a sua senha tente novamente"});case 16:return e.prev=16,i(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,9,16,19]])})));return function(n){return e.apply(this,arguments)}}(),[l,u]);return a.a.createElement(ve,null,a.a.createElement(xe,null,a.a.createElement(Oe,null,a.a.createElement("img",{src:U.a}),a.a.createElement(J.a,{ref:n,onSubmit:s},a.a.createElement("h1",null,"Recuperar Senha"),a.a.createElement(xn,{name:"email",icon:E.i,placeholder:"E-mail"}),a.a.createElement(jn,{loading:o,type:"submit"},"Recuperar")),a.a.createElement(c.b,{to:"/"},a.a.createElement(E.h,null),"Voltar ao Login"))),a.a.createElement(je,null))};function we(){var n=Object(l.a)(["\n  flex: 1;\n  background: url(",") no-repeat center;\n  background-size: cover;\n"]);return we=function(){return n},n}function ke(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  animation: "," 1s;\nform {\n    margin: 80px 0px;\n    text-align: center;\n    width: 340px\n  }\n  h1{ \n    margin-bottom: 24px;\n  }\n\n  a {\n    display: block;\n    color: #F4EDE8;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  > a {\n    display: flex;\n    align-items: center;\n    color: #ff9000;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 16px;\n    }\n  }\n"]);return ke=function(){return n},n}function De(){var n=Object(l.a)(["\n  from{\n    opacity: 0;\n    transform: translateX(-50px);\n  }to{\n    opacity: 1;\n    transform: translateX(0);\n  } \n"]);return De=function(){return n},n}function Se(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  width: 100%;\n  max-width: 700px;\n  align-items: center;\n  \n"]);return Se=function(){return n},n}function Ce(){var n=Object(l.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: stretch;\n"]);return Ce=function(){return n},n}var Fe=u.c.div(Ce()),ze=u.c.div(Se()),Pe=Object(u.d)(De()),Me=u.c.div(ke(),Pe,Object(L.a)(.2,"#F4EDE8"),Object(L.a)(.2,"#ff9000")),_e=u.c.div(we(),Q.a),Ne=function(){var n=Object(r.useRef)(null),e=B(),t=(e.SignIn,e.user,T().addToast),o=Object(I.g)(),i=Object(I.h)(),c=Object(r.useCallback)(function(){var e=Object(b.a)(m.a.mark((function e(r){var a,c,l,u,s,d,p;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,null===(a=n.current)||void 0===a||a.setErrors({}),c=G.b().shape({password:G.d().required("senha obrigatoria"),password_confirmation:G.d().oneOf([G.c("password"),void 0],"As senhas informadas s\xe3o Diferentes")}),e.next=5,c.validate(r,{abortEarly:!1});case 5:if(l=r.password,u=r.password_confirmation,s=i.search.replace("?token=","")){e.next=9;break}throw new Error;case 9:return e.next=11,v.post("/password/reset",{password:l,password_confirmation:u,token:s});case 11:o.push("/"),e.next=21;break;case 14:if(e.prev=14,e.t0=e.catch(0),!(e.t0 instanceof G.a)){e.next=20;break}return p=H(e.t0),null===(d=n.current)||void 0===d||d.setErrors(p),e.abrupt("return");case 20:t({title:"Erro ao Resetar sua Senha",type:"error",description:"Ocorreu um Erro ao Resetar sua Senha tente novamente"});case 21:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),[t,o,i.search]);return a.a.createElement(Fe,null,a.a.createElement(ze,null,a.a.createElement(Me,null,a.a.createElement("img",{src:U.a}),a.a.createElement(J.a,{ref:n,onSubmit:c},a.a.createElement("h1",null,"Fa\xe7a seu Logon"),a.a.createElement(xn,{name:"password",icon:E.g,type:"password",placeholder:"Nova Senha"}),a.a.createElement(xn,{name:"password_confirmation",icon:E.i,type:"password",placeholder:"Confirma\xe7ao da Senha"}),a.a.createElement(jn,{type:"submit"},"Alterar Senha")))),a.a.createElement(_e,null))};function Ae(){var n=Object(l.a)(["\n  margin-bottom: 32px;\n  position: relative;\n  align-self: center;\n  img{\n    width: 186px;\n    height: 186px;\n    border-radius: 50%;\n  }\n  label {\n    position: absolute;\n    width: 48px;\n    height: 48px;\n    background: #ff9000;\n    border-radius: 50%;\n    right: 0;\n    bottom: 0;\n    border: 0;\n    transition: 0.2s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    input {\n      display: none;\n    }\n    &:hover{\n      background: ",";\n    }\n  }\n"]);return Ae=function(){return n},n}function Te(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  width: 100%;\n  margin: -175px auto 0 ;\n  align-items: center;\n  form {\n    margin: 80px 0px;\n    text-align: center;\n    width: 340px;\n    display: flex;\n    flex-direction: column;\n  }\n  h1{ \n    margin-bottom: 24px;\n    text-align: left;\n    font-size: 16px;\n  }\n\n  a {\n    display: block;\n    color: #F4EDE8;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n    transition: 0.5s;\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  > a {\n    display: flex;\n    align-items: center;\n    color: #ff9000;\n    text-decoration: none;\n    transition: color 0.2s;\n    margin-top: 24px;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 16px;\n    }\n  }\n"]);return Te=function(){return n},n}function Re(){var n=Object(l.a)(["\n\n  > header {\n    height: 144px;\n    background: #28262e;\n    display: flex;\n    align-items: center;\n    div {\n      width: 100%;\n      max-width: 1120px;\n      margin: 0 auto;\n\n      svg {\n        color: #999591;\n      }\n    }\n  }\n"]);return Re=function(){return n},n}var qe=u.c.div(Re()),Be=u.c.div(Te(),Object(L.a)(.2,"#F4EDE8"),Object(L.a)(.2,"#ff9000")),Xe=u.c.div(Ae(),Object(L.a)(.2,"#ff9000")),Ie=function(){var n=Object(r.useRef)(null),e=T().addToast,t=Object(I.g)(),o=B(),i=o.user,l=o.updateUser,u=Object(r.useCallback)(function(){var r=Object(b.a)(m.a.mark((function r(a){var o,i,c,u,s,d,p,f,b,g,h;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,null===(o=n.current)||void 0===o||o.setErrors({}),i=G.b().shape({name:G.d().required("Nome obrigat\xf3rio"),email:G.d().required("email obrigatorio").email("digite um email valido"),old_password:G.d(),password:G.d().when("old_password",{is:function(n){return!!n.length},then:G.d().required("Campo Obrigatorio"),otherwise:G.d()}),password_confirmation:G.d().when("old_password",{is:function(n){return!!n.length},then:G.d().required("Campo Obrigatorio"),otherwise:G.d()}).oneOf([G.c("password"),void 0],"As senhas informadas s\xe3o Diferentes")}),r.next=5,i.validate(a,{abortEarly:!1});case 5:return c=a.email,u=a.name,s=a.password,d=a.old_password,p=a.password_confirmation,f=Object(Rn.a)({name:u,email:c},d?{old_password:d,password:s,password_confirmation:p}:{}),r.next=9,v.put("/profile",f);case 9:b=r.sent,l(b.data),t.push("/dashboard"),e({type:"success",title:"Perfil Atualizado",description:"Suas Altera\xe7oes foram atualizadas com Sucesso"}),r.next=22;break;case 15:if(r.prev=15,r.t0=r.catch(0),!(r.t0 instanceof G.a)){r.next=21;break}return h=H(r.t0),null===(g=n.current)||void 0===g||g.setErrors(h),r.abrupt("return");case 21:e({title:"Erro na Atualiza\xe7ao",type:"error",description:"Erro ao Fazer a Atualiza\xe7ao do seu Perfil Tente Novamente"});case 22:case"end":return r.stop()}}),r,null,[[0,15]])})));return function(n){return r.apply(this,arguments)}}(),[e,t]),s=Object(r.useCallback)((function(n){if(n.target.files){var t=new FormData;t.append("avatar",n.target.files[0]),v.patch("users/avatar",t).then((function(n){l(n.data),e({type:"success",title:"Avatar Atualizado"})}))}}),[e,l]);return a.a.createElement(qe,null,a.a.createElement("header",null,a.a.createElement("div",null,a.a.createElement(c.b,{to:"/dashboard"},a.a.createElement(E.b,{size:24})))),a.a.createElement(Be,null,a.a.createElement(J.a,{ref:n,onSubmit:u,initialData:{name:i.name,email:i.email}},a.a.createElement(Xe,null,a.a.createElement("img",{src:i.avatar_url,alt:i.name}),a.a.createElement("label",{htmlFor:"avatar"},a.a.createElement(E.c,{size:20}),a.a.createElement("input",{type:"file",id:"avatar",onChange:s}))),a.a.createElement("h1",null,"Meu Perfil"),a.a.createElement(xn,{name:"name",icon:E.k,placeholder:"Nome"}),a.a.createElement(xn,{name:"email",icon:E.i,placeholder:"E-mail"}),a.a.createElement(xn,{name:"old_password",icon:E.g,type:"password",placeholder:"Senha Atual",constainerStyle:{marginTop:24}}),a.a.createElement(xn,{name:"password",icon:E.g,type:"password",placeholder:"Nova Senha"}),a.a.createElement(xn,{name:"password_confirmation",icon:E.g,type:"password",placeholder:"Confirma Nova Senha"}),a.a.createElement(jn,{type:"submit"},"Confirma Altera\xe7oes"))))},Je=function(){return a.a.createElement(I.d,null,a.a.createElement(pe,{path:"/",exact:!0,component:yn}),a.a.createElement(pe,{path:"/signup",exact:!0,component:Tn}),a.a.createElement(pe,{path:"/forgot-password",component:ye}),a.a.createElement(pe,{path:"/reset-password",component:Ne}),a.a.createElement(pe,{path:"/profile",component:Ie,isPrivate:!0}),a.a.createElement(pe,{path:"/dashboard",component:de,isPrivate:!0}))},Ge=function(){return a.a.createElement(c.a,null,a.a.createElement(X,null,a.a.createElement(Je,null)),a.a.createElement(d,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ge,null)),document.getElementById("root"))},26:function(n,e,t){n.exports=t.p+"static/media/logo.cb3c3e0d.svg"},37:function(n,e,t){n.exports=t.p+"static/media/sign-in-background.6eac314f.png"},80:function(n,e,t){n.exports=t.p+"static/media/sign-up-background.c4d8f988.png"},82:function(n,e,t){n.exports=t(118)}},[[82,1,2]]]);
//# sourceMappingURL=main.2f080dc9.chunk.js.map