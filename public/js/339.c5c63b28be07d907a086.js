(self.webpackChunkcheck_my_car=self.webpackChunkcheck_my_car||[]).push([[339],{5339:(e,t,a)=>{a.r(t),a.d(t,{default:()=>tt});var n=a(7363),r=a.n(n),c=a(6715);const o="homePage___PHQLI";var s=a(8216);const l="bottomContainer___c0uAc",i="topContainer___WUuuK",_="search___adg5t",m="titleSection___GlZ4a",u="inputHelperWrap___MvSxL",p="inputContainer___kVrZR",d="searchInput___vlQuW",E="error___mtwvf",h="errorMessage___yREC9",v="clearButton___Kcx8O",f="searchButton___R1UDu",g="lastSearchesWrap___K0sEn",N="label____x6i6",y="lastSearches___tmyUm",C="lastSearch___YsXcZ";var L=a(7903),S=a(3920),b=a(4406);const T=function(e){return[/^[А-Яа-я]{1}$/i.test(e),/^[А-Яа-я]{2}$/i.test(e),/^[А-Яа-я]{2}[0-9]{1}$/i.test(e),/^[А-Яа-я]{2}[0-9]{2}$/i.test(e),/^[А-Яа-я]{2}[0-9]{3}$/i.test(e),/^[А-Яа-я]{2}[0-9]{4}$/i.test(e),/^[А-Яа-я]{2}[0-9]{4}[А-Яа-я]{1}$/i.test(e),/^[А-Яа-я]{2}[0-9]{4}[А-Яа-я]{2}$/i.test(e),/^[A-Za-z]{1}$/i.test(e),/^[A-Za-z]{2}$/i.test(e),/^[A-Za-z]{2}[0-9]{1}$/i.test(e),/^[A-Za-z]{2}[0-9]{2}$/i.test(e),/^[A-Za-z]{2}[0-9]{3}$/i.test(e),/^[A-Za-z]{2}[0-9]{4}$/i.test(e),/^[A-Za-z]{2}[0-9]{4}[A-Za-z]{1}$/i.test(e),/^[A-Za-z]{2}[0-9]{4}[A-Za-z]{2}$/i.test(e)].some((function(e){return e}))};const x=function(e){return e&&/^[А-Я|A-Z]{2}[0-9]{4}[А-Я|A-Z]{2}$/i.test(e)};const w=function(e){return e&&/[^А-Яа-яA-Za-z0-9]/gi.test(e)};const A=function(e){return e&&/^[0-9]/i.test(e)};var I=a(6764),O=a(3329);const Z=function(){return{SECTION_TITLE:O.Z.t("pages.home.search_section.title"),SECTION_TEXT:O.Z.t("pages.home.search_section.text"),FETCH_BTN_LABEL:O.Z.t("pages.home.search_section.button"),FETCH_BTN_LABEL_SHORT:O.Z.t("pages.home.search_section.button_short"),BAD_PATTERN_ERROR:O.Z.t("pages.home.search_section.bad_pattern_error"),INPUT_PLACEHOLDER:O.Z.t("pages.home.search_section.input_placeholder"),INPUT_PLACEHOLDER_SHORT:O.Z.t("pages.home.search_section.input_placeholder_short"),CYRILLIC_ALPHABET:O.Z.t("pages.home.search_section.cyrillic_alphabet"),NOT_EMPTY_ERROR:O.Z.t("pages.home.search_section.not_empty_error"),NOT_SPECIAL_SYMBOLS:O.Z.t("pages.home.search_section.not_special_symbols")}};var k=a(461);const F=function(e){return e.browser?e.browser.is.tablet:e.is.tablet};var B={"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"/","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"/","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"/","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"/","б":"b","ю":"yu"},D={};const P=function(e,t){var a=t?B:(Object.keys(B).forEach((function(e){D[B[e]]=e})),D);return e.split("").map((function(e){return a[e]||e})).join("")};var R=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,c=a.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=c.next()).done;)o.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=c.return)&&a.call(c)}finally{if(r)throw r.error}}return o},M=function(e,t,a){if(a||2===arguments.length)for(var n,r=0,c=t.length;r<c;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},H=(0,n.memo)((function(e){var t=e.runLoadData,a=e.isSearchInProgress,c=e.isMobileLayout,o=e.carNumberReceived,s=e.searchCarNumber,L=Z(),O=L.SECTION_TITLE,k=L.SECTION_TEXT,F=L.FETCH_BTN_LABEL,B=L.FETCH_BTN_LABEL_SHORT,D=L.BAD_PATTERN_ERROR,H=L.INPUT_PLACEHOLDER,W=L.INPUT_PLACEHOLDER_SHORT,Y=L.CYRILLIC_ALPHABET,z=L.NOT_EMPTY_ERROR,$=L.NOT_SPECIAL_SYMBOLS,U=(0,n.useRef)(null),V=R((0,n.useState)(""),2),j=V[0],K=V[1],Q=R((0,n.useState)(!1),2),G=Q[0],J=Q[1],X=R((0,n.useState)(!1),2),q=X[0],ee=X[1],te=R((0,n.useState)(!1),2),ae=te[0],ne=te[1];(0,n.useEffect)((function(){var e=function(e){var t=e.target,a=e.keyCode;if(t||a){var n=!["INPUT","BUTTON"].includes(t.tagName),r=a===b.P7.esc;(n||r)&&(J(!1),ee(!1))}};return document.addEventListener("click",e),document.addEventListener("keydown",e),null==U||U.current.focus(),function(){document.removeEventListener("click",e),document.removeEventListener("keydown",e)}}),[]);var re,ce,oe,se,le=function(e){var t=e.target.value;t.length>8?K(t.substr(0,t.length-1)):(K(t.toUpperCase()),ne(!1),ee(!1),J(!1),w(t)?(ne(!0),J(!0),K(j)):A(t)?(J(!0),t.length>1&&K(j.substr(0,j.length))):T(t)||(J(!0),t.length>1&&K(j.substr(0,j.length))))},ie=function(){K(""),J(!1)},_e=function(e){var n="string"==typeof e?e:j;n!==o||o!==s||n!==s?x(n)?n&&!a&&(J(!1),t(P(n)),(0,I.Z)({id:"results",duration:1e3}),function(e){var t,a=window.localStorage.getItem("last_searches");(null===(t=null==a?void 0:a.split(","))||void 0===t?void 0:t.some((function(t){return t===e})))||window.localStorage.setItem("last_searches","".concat(a||"",",").concat(e))}(P(n))):J(!G):(0,I.Z)({id:"results",duration:1e3})};return r().createElement("div",{className:_},r().createElement("div",{className:i},r().createElement("div",{className:m},r().createElement("h1",null,O),r().createElement("h2",null,k)),r().createElement("div",{className:u},r().createElement("div",{className:p},(se=j?ae?$:(q&&console.log(Y,"error!"),G?D:null):z,r().createElement(r().Fragment,null,r().createElement("input",{ref:U,name:"find-car",type:"text",autoComplete:"true",onChange:function(e){return le(e)},onKeyDown:function(e){return function(e){(0,b.ZP)({event:e,keysConfig:[{type:b.P7.esc,onEvent:ie},{type:b.P7.enter,onEvent:_e}]})}(e)},value:j,placeholder:c?W:H,className:"".concat(d," ").concat(G?E:""),disabled:a}),G&&r().createElement("span",{className:h},se))),!j||a?null:r().createElement("button",{type:"button","aria-label":"Clear Search",className:v,onClick:function(){return ie()}},r().createElement("span",null,"x"))),r().createElement("button",{onClick:function(){return _e()},onBlur:function(){return J(!1)},type:"button",className:f,disabled:a||G},a?r().createElement(S.Z,{type:"flat",color:"white"}):c?B:F))),r().createElement("div",{className:l},(re=window.localStorage.getItem("last_searches"),ce=(null==re?void 0:re.split(","))||["ВС0240ММ","АТ8759ЕТ","АТ8760ЕТ"],oe=M([],R(new Set(ce)),!1).map((function(e){return e?r().createElement("button",{key:e,type:"button",className:C,onClick:function(){return _e(e)}},e):null})),r().createElement("div",{className:g},r().createElement("span",{className:N},re?"Your Last Searches":"Popular Searches",":"),r().createElement("div",{className:y},oe)))))}));H.displayName="Search";var W={runLoadData:L.I_};const Y=(0,s.$j)((function(e){var t,a,n=e.app,r=e.home,c=e.browser;return{language:n.locale,isMobileLayout:!((0,k.Z)(c)||F(c)),isSearchInProgress:r.statuses.isSearchInProgress,searchCarNumber:r.searchCarNumber,carNumberReceived:null===(a=null===(t=r.carData)||void 0===t?void 0:t.mainData)||void 0===a?void 0:a.number}}),W)(H),z="progressiveImage___N9NLk",$="progressiveImagePreloader___NKjhu progressiveImage___N9NLk flexCenter___CxYQl";var U=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,c=a.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=c.next()).done;)o.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=c.return)&&a.call(c)}finally{if(r)throw r.error}}return o};const V=(0,n.memo)((function(e){var t=e.image,a=e.preloader,c=t.path,o=void 0===c?"":c,s=t.alt,l=t.customClass,i=a||{},_=i.color,m=void 0===_?"green":_,u=i.type,p=void 0===u?"circle":u,d=U((0,n.useState)(""),2),E=d[0],h=d[1],v=(0,n.useCallback)((function(){return h("loaded")}),[]),f=r().createElement("img",{alt:s,src:o,className:"".concat(z," ").concat(l),onLoad:v,style:E?{}:{display:"none"}}),g=r().createElement("div",{className:l},r().createElement(S.Z,{color:m,type:p}));return!E&&g?r().createElement("div",{className:$},f,g):f})),j={appWrapper:"appWrapper___UF6Xl",container:"container___PO7L1",resultsContent:"resultsContent___DnmRe",extra:"extra___nQmNk",appHeader:"appHeader___i3Lpe extra___nQmNk",body:"body___Q6AWQ",bodyImg:"bodyImg___CY2tN",appFooter:"appFooter___OrRJo extra___nQmNk",results:"results___AtW38",isSearchInProgress:"isSearchInProgress___tIJVo",isMock:"isMock___dN0PC",mainContent:"mainContent___SEK96",main:"main___ji1xc",imageWrap:"imageWrap___Odc4_",image:"image___eDZba",data:"data___uh5Yv",title:"title___fbvGO",cell:"cell___I8ojF",text:"text___xfLd2",infoBlock:"infoBlock___HQLaB",items:"items___xcorV",icon:"icon___WnmaN",manufacture:"manufacture___l_xFB",manufacturedDate:"manufacturedDate___m3cNV",lastOperation:"lastOperation___MsnVM",lastOperationType:"lastOperationType___zaYhm",gasType:"gasType___B6PWm",color:"color___m_Fsu",price:"price___FYOP1",mockWrap:"mockWrap___gqStO",anim_container:"anim_container___fSnq3",activeSearch:"activeSearch___fe1Ma",data___uh5Yv:"data___uh5Yv___BYO6G"};const K=(0,n.memo)((function(e){return e.isMock?r().createElement("div",{className:j.mockWrap}):null}));const Q=function(){return{SECTION_TITLE:O.Z.t("pages.home.results_section.title"),IMAGE_ALT:O.Z.t("pages.home.results_section.image_alt"),OWNER_LABEL:O.Z.t("pages.home.results_section.main_data.owner"),VIN_LABEL:O.Z.t("pages.home.results_section.main_data.vin"),BLACKLISTED_LABEL:O.Z.t("pages.home.results_section.main_data.blacklisted"),INFO_LABEL:O.Z.t("pages.home.results_section.main_data.info"),COLLECTED_DATA_TITLE:O.Z.t("pages.home.results_section.collected_data.title"),COLLECTED_DATA_LABELS_ARRAY:[O.Z.t("pages.home.results_section.collected_data.manufacture"),O.Z.t("pages.home.results_section.collected_data.manufactured_date"),O.Z.t("pages.home.results_section.collected_data.color"),O.Z.t("pages.home.results_section.collected_data.gasType"),O.Z.t("pages.home.results_section.collected_data.price"),O.Z.t("pages.home.results_section.collected_data.last_operation"),O.Z.t("pages.home.results_section.collected_data.last_operation_type")]}},G="description___rCvsI",J="bottomSection___aFBpy",X="topSection___WEm8i",q="headLine___zcqYV",ee="iconLogo___RFJ6I",te="title___x_LHa",ae="number___kc96s",ne="sign___FuHJk",re="text___f3TJ4",ce="roadNumber___qfelf",oe="infoList___muItV",se="info___Z6TxM";const le=function(e){var t=e.mainData,a=Q(),n=a.OWNER_LABEL,c=a.VIN_LABEL,o=a.BLACKLISTED_LABEL,s=a.INFO_LABEL;if(!t)return null;return r().createElement("div",{className:G},r().createElement("div",{className:X},r().createElement("div",{className:q},r().createElement("i",{className:"".concat(ee," car-").concat(t.brand.toLocaleLowerCase())}),r().createElement("span",{className:te},"".concat(t.brand," ").concat(t.model))),r().createElement("div",{className:ae},r().createElement("div",{className:ne},r().createElement("span",{className:re},"UA")),r().createElement("div",{className:ce},r().createElement("span",{className:re},t.number)))),r().createElement("div",{className:J},r().createElement("div",{className:oe},r().createElement("div",{className:se},r().createElement("span",{className:te},n,": "),r().createElement("span",{className:re},"unknown")),r().createElement("div",{className:se},r().createElement("span",{className:te},c,": "),r().createElement("span",{className:re},t.vinCode)),r().createElement("div",{className:se},r().createElement("span",{className:te},o,": "),r().createElement("span",{className:re},"unknown")),r().createElement("div",{className:se},r().createElement("span",{className:te},s,": "),r().createElement("span",{className:re},t.info)))))};var ie=a(3366),_e=a(7462),me=a(7326),ue=a(4578),pe=a(220);function de(e,t){var a=Object.create(null);return e&&n.Children.map(e,(function(e){return e})).forEach((function(e){a[e.key]=function(e){return t&&(0,n.isValidElement)(e)?t(e):e}(e)})),a}function Ee(e,t,a){return null!=a[t]?a[t]:e.props[t]}function he(e,t,a){var r=de(e.children),c=function(e,t){function a(a){return a in t?t[a]:e[a]}e=e||{},t=t||{};var n,r=Object.create(null),c=[];for(var o in e)o in t?c.length&&(r[o]=c,c=[]):c.push(o);var s={};for(var l in t){if(r[l])for(n=0;n<r[l].length;n++){var i=r[l][n];s[r[l][n]]=a(i)}s[l]=a(l)}for(n=0;n<c.length;n++)s[c[n]]=a(c[n]);return s}(t,r);return Object.keys(c).forEach((function(o){var s=c[o];if((0,n.isValidElement)(s)){var l=o in t,i=o in r,_=t[o],m=(0,n.isValidElement)(_)&&!_.props.in;!i||l&&!m?i||!l||m?i&&l&&(0,n.isValidElement)(_)&&(c[o]=(0,n.cloneElement)(s,{onExited:a.bind(null,s),in:_.props.in,exit:Ee(s,"exit",e),enter:Ee(s,"enter",e)})):c[o]=(0,n.cloneElement)(s,{in:!1}):c[o]=(0,n.cloneElement)(s,{onExited:a.bind(null,s),in:!0,exit:Ee(s,"exit",e),enter:Ee(s,"enter",e)})}})),c}var ve=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},fe=function(e){function t(t,a){var n,r=(n=e.call(this,t,a)||this).handleExited.bind((0,me.Z)(n));return n.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},n}(0,ue.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var a,r,c=t.children,o=t.handleExited;return{children:t.firstRender?(a=e,r=o,de(a.children,(function(e){return(0,n.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:Ee(e,"appear",a),enter:Ee(e,"enter",a),exit:Ee(e,"exit",a)})}))):he(e,c,o),firstRender:!1}},a.handleExited=function(e,t){var a=de(this.props.children);e.key in a||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var a=(0,_e.Z)({},t.children);return delete a[e.key],{children:a}})))},a.render=function(){var e=this.props,t=e.component,a=e.childFactory,n=(0,ie.Z)(e,["component","childFactory"]),c=this.state.contextValue,o=ve(this.state.children).map(a);return delete n.appear,delete n.enter,delete n.exit,null===t?r().createElement(pe.Z.Provider,{value:c},o):r().createElement(pe.Z.Provider,{value:c},r().createElement(t,n,o))},t}(r().Component);fe.propTypes={},fe.defaultProps={component:"div",childFactory:function(e){return e}};const ge=fe;var Ne=a(8983);const ye=function(e){return e.browser?e.browser.is.mobile:e.is.mobile},Ce="preloaderWrap___ndNYy",Le="head___MTfFe",Se="bottom___QSI6P",be="searchError___ST_wK",Te="errorImg___EF2rO",xe="animationsWrap___pnMrK",we="car___AQJU6",Ae="progressWrap___c57bn",Ie="bar___B3D6B",Oe="carWarp___yHLyK",Ze="clouds___yyJ2K",ke="cloud___WtRkJ",Fe="front___wou_F",Be="distant___zZIlA",De="smaller___P6WGT",Pe="small___wpXpb",Re="big___nyBLM",Me="massive___mzGOK",He="slow___klTw9",We="slower___tYlhk",Ye="slowest___k2Tpr",ze="superSlow___Pzet2";const $e=function(){return r().createElement("div",{className:Ze},r().createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"762px",height:"331px",viewBox:"0 0 762 331",enableBackground:"new 0 0 762 331",className:"".concat(ke," ").concat(Re," ").concat(Fe," ").concat(Ye)},r().createElement("path",{fill:"#FFFFFF",d:"M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106\n        c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529\n        C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5\n        S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"})),r().createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"762px",height:"331px",viewBox:"0 0 762 331",enableBackground:"new 0 0 762 331",className:"".concat(ke," ").concat(Be," ").concat(De)},r().createElement("path",{fill:"#FFFFFF",d:"M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106\n        c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529\n        C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5\n        S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"})),r().createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"762px",height:"331px",viewBox:"0 0 762 331",enableBackground:"new 0 0 762 331",className:"".concat(ke," ").concat(Pe," ").concat(He)},r().createElement("path",{fill:"#FFFFFF",d:"M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106\n        c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529\n        C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5\n        S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"})),r().createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"762px",height:"331px",viewBox:"0 0 762 331",enableBackground:"new 0 0 762 331",className:"".concat(ke," ").concat(Be," ").concat(ze," ").concat(Me)},r().createElement("path",{fill:"#FFFFFF",d:"M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106\n        c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529\n        C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5\n        S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"})),r().createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"762px",height:"331px",viewBox:"0 0 762 331",enableBackground:"new 0 0 762 331",className:"".concat(ke," ").concat(We)},r().createElement("path",{fill:"#FFFFFF",d:"M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106\n        c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529\n        C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5\n        S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"})))};const Ue=(0,s.$j)((function(e){var t=e.browser,a=e.app;return{isMobileLayout:ye(t),locale:a.locale}}),null)((function(e){var t=e.isError,a=e.isMobileLayout,n=O.Z.t("pages.home.results_section.active_search.info_short"),c=O.Z.t("pages.home.results_section.active_search.info");return t?r().createElement("div",{className:Ce},r().createElement("div",{className:Le},r().createElement("h3",null,O.Z.t("pages.home.results_section.error.title")),r().createElement("p",null,O.Z.t("pages.home.results_section.error.text"))),r().createElement("div",{className:be},r().createElement("img",{className:Te,alt:"search_error",src:"/assets/search_error.png"}))):r().createElement("div",{className:Ce},r().createElement("div",{className:Le},r().createElement("h3",null,a?O.Z.t("pages.home.results_section.active_search.title_short"):O.Z.t("pages.home.results_section.active_search.title")),r().createElement("p",null,O.Z.t("pages.home.results_section.active_search.text"))),r().createElement("div",{className:xe},r().createElement($e,null),r().createElement("div",{className:Oe},r().createElement("img",{src:"/assets/car_pure.png",alt:"car_image",className:we}))),r().createElement("div",{className:Ae},r().createElement("div",{className:Ie})),r().createElement("div",{className:Se},r().createElement("p",null,a?n:c)))}));const Ve=function(e){var t=e.isActiveSearch,a=e.isSearchInProgress,n=e.isSearchError,c=e.children,o=e.vinCode;return r().createElement(ge,{className:"anim_container ".concat(t?"activeSearch":""),component:"div"},r().createElement(Ne.Z,{classNames:o?"car_animation":"preloader_animation",key:n?2:a?1:o,timeout:{enter:1e3,exit:500},unmountOnExit:!0},t||n?r().createElement(Ue,{isError:n}):c))};const je=function(e){var t=e.icon,a=e.title,n=e.data,c=n;return"price"===t&&(c=function(e){var t=e.value,a=void 0===t?null:t,n=e.currency,r=void 0===n?"":n,c=e.rounder,o=void 0===c?0:c;if(isNaN(a))return"undefined";var s=a.toFixed(o).toString().replace(/,/g,"");return"".concat(r," ").concat(s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))}({value:Number(n),currency:"USD"})),r().createElement("div",{key:t,className:j.cell},r().createElement("i",{className:"".concat(j.icon," ").concat(j[t])}),r().createElement("div",{className:j.infoBlock},r().createElement("span",{className:j.title},a),r().createElement("span",{className:j.text},c)))};const Ke=function(e){var t=e.collectedData,a=Q().COLLECTED_DATA_LABELS_ARRAY;if(!t)return null;return r().createElement("div",{className:j.items},t.map((function(e,t){return r().createElement(je,{key:e.data,icon:e.icon,title:a[t],data:e.data})})))};var Qe={image:"/assets/exemple.webp",mainData:{brand:"Porsche",model:"911",color:"purple",vinCode:"unknown",number:"AT8760ET",manufacturedDate:"2009",info:"Легковий Седан Базовий"},collectedData:[{icon:"manufacture",title:"Manufacture",data:"BMW"},{icon:"manufacturedDate",title:"Manufactured Date",data:"05.02.2009"},{icon:"color",title:"Color",data:"White"},{icon:"gasType",title:"Fuel Type",data:"Gas"},{icon:"price",title:"Market Price",data:"$20,000"},{icon:"lastOperation",title:"Last Operation",data:"21.21.2020"},{icon:"lastOperationType",title:"Operation Type",data:"ТСЦ 2641 [#12276]: Перереєстрація на нового власника за дог. купiвлi-продажу (сг) [#308]"}]},Ge=(0,n.memo)((function(e){var t=e.carImage,a=e.carMainData,n=e.carCollectedData,c=e.isSearchInProgress,o=e.isSearchError,s=Q(),l=s.SECTION_TITLE,i=s.IMAGE_ALT,_=s.COLLECTED_DATA_TITLE,m=!(a&&n),u=c||o,p=t||Qe.image,d=a||Qe.mainData,E=n||Qe.collectedData;return r().createElement("div",{id:"results",className:"".concat(j.results," ").concat(u&&j.isSearchInProgress||""," ").concat(!u&&m&&j.isMock||"")},r().createElement(Ve,{vinCode:d.vinCode,isActiveSearch:u,isSearchInProgress:c,isSearchError:o},r().createElement("div",{className:j.mainContent},r().createElement("div",{className:j.resultsContent},r().createElement("h3",null,l),r().createElement("div",{className:j.main},r().createElement("div",{className:j.imageWrap},r().createElement(V,{image:{path:p,alt:i,customClass:j.image}})),r().createElement(le,{mainData:d})),r().createElement("div",{className:j.data},r().createElement("h4",{className:j.title},_),r().createElement(Ke,{collectedData:E}))),r().createElement(K,{isMock:m}))))}));Ge.displayName="Results";const Je=(0,s.$j)((function(e){var t=e.app,a=e.home;return{language:t.locale,carImage:a.carData.image,carMainData:a.carData.mainData,carCollectedData:a.carData.collectedData,isSearchInProgress:a.statuses.isSearchInProgress,isSearchError:a.statuses.isSearchError}}),null)(Ge);var Xe,qe=(Xe=function(e,t){return Xe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])},Xe(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function a(){this.constructor=e}Xe(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),et=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return qe(t,e),t.prototype.componentDidMount=function(){window.prerenderReady=!0},t.prototype.render=function(){return r().createElement("div",{className:o},r().createElement(Y,null),r().createElement(Je,null))},t}(r().Component);const tt=(0,c.EN)(et)}}]);
//# sourceMappingURL=339.c5c63b28be07d907a086.js.map