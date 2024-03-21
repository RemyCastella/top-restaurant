(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),d=t.n(c),s=new URL(t(12),t.b),l=new URL(t(107),t.b),u=new URL(t(569),t.b),p=i()(o()),m=d()(s),f=d()(l),g=d()(u);p.push([e.id,`:root {\n    --red: #8B0000;\n    --transparent-red: #8b0000d1;\n    --beige: #FFE6AA;\n}\n\n@font-face {\n    font-family: 'logo';\n    src: url(${m}) format('truetype');\n}\n\n@font-face {\n    font-family: 'coolvetica';\n    src: url(${f}) format('opentype');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    height: 100vh;\n\n    background-image: url(${g});\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n\n    color: white;\n\n    font-family: 'coolvetica';\n}\n\nheader {\n    background: rgba(0, 0, 0, 0.85);\n    padding: 3rem 3rem;\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n}\n\n#logo {\n    align-self: center;\n    font-size: 5rem;\n    font-family: 'logo';\n}\n\nnav {\n    justify-self: end;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5rem;\n}\n\nbutton {\n    padding: 1rem;\n    border: none;\n    background: none;\n    font-size: 2rem;\n    cursor: pointer;\n    color: white;\n    font-family: 'coolvetica';\n}\n\nbutton.active {\n    color: var(--red);\n    border-bottom: 3px solid var(--red);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 5rem 0rem 5rem 0rem;\n}\n\n.content-box {\n    background: var(--transparent-red);\n    border-radius: 1rem;\n    width: 70%;\n    height: auto;\n    padding: 3rem;\n}\n\nimg {\n    height: 30rem;\n    width: auto;\n    border-radius: 2rem;\n}\n\n.page-title {\n    font-family: 'logo';\n    font-size: 7rem;\n    margin-bottom: 4rem;\n}\n\n\n/* home page */\n\n#home {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.home-title {\n    font-size: 2rem;\n    margin-bottom: 2rem;\n}\n\n/* home page */\n\n\n/* menu page */\n\n#menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-title {\n    font-size: 3rem;\n    align-self: center;\n}\n\n.description {\n    font-size: 1.5rem;\n}\n\n.menu-item {\n    margin-top: 3rem;\n    width: 100%;\n}\n\nimg.menu {\n    height: 20rem;\n    border-radius: 2rem;\n}\n\n/* menu page */\n\n/* contact page */\n\n#contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* contact page */`,""]);const h=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},12:(e,n,t)=>{e.exports=t.p+"105a13d1fd7f9261931e.ttf"},107:(e,n,t)=>{e.exports=t.p+"3d81d0e1fdbd5f69b232.otf"},569:(e,n,t)=>{e.exports=t.p+"8faeb6ec5ae5df7bde5e.jpeg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"e7cc9bd0bc1744dd6060.jpg",n=t.p+"9591be7b5127cd1c3d0d.jpeg",r=t.p+"9ea1da4bdde7fa5c2d8a.webp",o=t.p+"f45c356a1d60a4592196.webp";var a=[{name:"Fugu Sashimi",description:"A risky dish made from the potentially lethal pufferfish, adding a thrilling element of danger to your dining experience.",image:n},{name:"Simmered Inago",description:"A deceptively delicious dish featuring succulent grasshoppers, offering a crunchy surprise in every bite.",image:r},{name:"Smoked Salamander",description:"Traditionally consumed as a potent aphrodisiac, a smoked salamander is the perfect accompaniment to a wild evening.",image:e},{name:"Shirako",description:"A luxuriously creamy delicacy of, you guessed it... fish sperm! You will probably not regret trying this one. For the gents, no homo!",image:o}];const i=t.p+"dde37d7398869b3a80f5.png";var c=t(72),d=t.n(c),s=t(825),l=t.n(s),u=t(659),p=t.n(u),m=t(56),f=t.n(m),g=t(540),h=t.n(g),v=t(113),b=t.n(v),y=t(208),x={};function C(){var e=document.querySelectorAll("button");Array.from(e).filter((function(e){return e.classList.contains("active")}))[0].classList.remove("active")}function w(e){var n=document.querySelectorAll("button");n.forEach((function(e){return console.log(e.textContent)}));var t=Array.from(n).filter((function(n){return n.textContent===e}));t[0].classList.add("active"),console.log(t)}function E(e){e.innerHTML=""}function L(){var n=document.querySelector("#content");E(n),n.appendChild(function(){var n=document.createElement("div");n.classList.add("content-box"),n.setAttribute("id","home");var t=document.createElement("div");t.textContent="Welcome",t.classList.add("page-title"),n.appendChild(t);var r=document.createElement("img");r.src=e;var o=document.createElement("div");o.classList.add("home-title"),o.textContent="We serve the strangest Japanese eats!";var a=document.createElement("p");return a.classList.add("description"),a.textContent="Browse our Menu for Japan's strangest dishes",n.appendChild(o),n.appendChild(r),n.appendChild(a),n}()),C(),w("Home")}x.styleTagTransform=b(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=h(),d()(y.A,x),y.A&&y.A.locals&&y.A.locals,document.querySelectorAll("button").forEach((function(e){e.addEventListener("click",(function(e){return function(e){switch(e.target.textContent){case"Home":L();break;case"Menu":E(n=document.querySelector("#content")),n.appendChild(function(e){var n=document.createElement("div");n.classList.add("content-box"),n.setAttribute("id","menu");var t=document.createElement("div");return t.textContent="Menu",t.classList.add("page-title"),n.appendChild(t),e.forEach((function(e){var t=document.createElement("div");t.classList.add("menu-item");var r=document.createElement("img");r.src=e.image,r.classList.add("menu");var o=document.createElement("div");o.classList.add("menu-title"),o.textContent=e.name;var a=document.createElement("div");a.classList.add("description"),a.textContent=e.description,t.appendChild(r),t.appendChild(o),t.appendChild(a),n.appendChild(t)})),n}(a)),C(),w("Menu");break;case"Contact":!function(){var e=document.querySelector("#content");E(e),e.appendChild(function(){var e=document.createElement("div");e.classList.add("content-box"),e.setAttribute("id","contact");var n=document.createElement("div");n.textContent="Contact Us",n.classList.add("page-title");var t=document.createElement("img");t.src=i;var r=document.createElement("p");r.classList.add("description"),r.textContent="📞123 456 789";var o=document.createElement("p");return o.classList.add("description"),o.textContent="📍1 Chome-5-16 Minami 11 Jonishi, Chuo Ward, Sapporo",e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(r),e}()),C(),w("Contact")}()}var n}(e)}))})),L()})()})();