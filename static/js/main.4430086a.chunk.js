(this.webpackJsonpForm__validation=this.webpackJsonpForm__validation||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),u=(t(11),t(12),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{src:"/img/CREDITON.PNG",alt:"crediton"}),c.a.createElement("div",{className:"language-toggler"},c.a.createElement("button",{type:"button",className:"language-toggler__link language-toggler__link--active"},"\u0420\u0423"),c.a.createElement("button",{type:"button",className:"language-toggler__link"},"\u0423\u041a\u0420")))}),s=t(1),o=t(4),m=t.n(o);t(17);var i=function(){var e,a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],l=t[1],u=Object(n.useState)(""),o=Object(s.a)(u,2),i=o[0],p=o[1],g=Object(n.useState)(!0),d=Object(s.a)(g,2),_=d[0],b=d[1],E=Object(n.useState)(""),v=Object(s.a)(E,2),f=v[0],h=v[1],N=Object(n.useState)(!0),O=Object(s.a)(N,2),j=O[0],S=O[1],D=Object(n.useState)(""),w=Object(s.a)(D,2),k=w[0],y=w[1],C=Object(n.useState)(!0),A=Object(s.a)(C,2),I=A[0],F=A[1],J=Object(n.useState)(!1),T=Object(s.a)(J,2),V=T[0],x=T[1];return c.a.createElement("section",{className:"section"},c.a.createElement("h1",null,"".concat(_)),c.a.createElement("form",{className:"card__form",onSubmit:function(e){e.preventDefault(),l(!0),setTimeout((function(){!function(e){if(/[^0-9-\s]+/.test(e))return!1;for(var a=0,t=!1,n=e.replace(/\D/g,""),c=n.length-1;c>=0;c-=1){var r=n.charAt(c),l=parseInt(r,10);t&&(l*=2)>9&&(l-=9),a+=l,t=!t}return a%10===0}(i)?b(!1):b(!0),!function(e){var a=e.split("/");return!(a[0]>12||a[0]<1)&&new Date<new Date(+"20".concat(a[1]),+a[0]-1)}(f)?S(!1):S(!0),k.length<3?F(!1):F(!0),x(!0),l(!1)}),1500)}},c.a.createElement("span",{className:"card__heading"},"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"),c.a.createElement("input",{onChange:function(a){var t=a.target.value;e=t.replace(/\D/g,"").substr(0,16);for(var n="",c=0;c<e.length;c+=1)n+=c%4===0?" ".concat(e[c]):e[c];p(n)},value:i,className:_?"card__input":"card__input card__input--error",placeholder:"enter card number"}),c.a.createElement("span",null,_?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"),c.a.createElement("span",null,""===i&&V?"* \u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430":""),c.a.createElement("div",{className:"card__wrapper"},c.a.createElement("input",{onChange:function(e){for(var a=e.target.value.replace(/\D/g,"").substr(0,4),t="",n=0;n<a.length;n+=1)t+=2===n?"/".concat(a[n]):a[n];h(t)},value:f,name:"date",className:"card__input card__input--small",placeholder:"date"}),c.a.createElement("input",{type:"password",value:k,onChange:function(e){var a=e.target.value.replace(/\D/g,"").substr(0,3);y(a)},className:"card__input card__input--small"})),c.a.createElement("span",null,""===f&&V?"* \u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430":""),c.a.createElement("span",null,j?"":"enter valid date"),c.a.createElement("span",null,""===k&&V?"* \u041f\u043e\u043b\u0435 cvv \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430":""),c.a.createElement("span",null,I?"":"enter valid CVV"),c.a.createElement("span",{className:"card__info"},"\u0414\u043b\u044f \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u044b \u043c\u044b \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043c \u043f\u043b\u0430\u0442\u0435\u0436 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 1.00 UAH, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 30 \u043c\u0438\u043d\u0443\u0442"),c.a.createElement("button",{type:"submit",className:"card__button"},r?c.a.createElement(m.a,{size:30,color:"#fff"}):"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438")))},p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement("h1",{className:"heading"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b"),c.a.createElement(i,null))};l.a.render(c.a.createElement(p,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t(19)}},[[6,1,2]]]);
//# sourceMappingURL=main.4430086a.chunk.js.map