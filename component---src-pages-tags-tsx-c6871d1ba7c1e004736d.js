(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{JYtQ:function(e,t,n){},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"l/wD":function(e,t,n){},uP4m:function(e,t,n){"use strict";var a=n("KQm4"),r=n("q1tI"),l=n("Wbzz"),u=n("LvDl");n("l/wD");t.a=function(e){var t=e.posts,n=Object(r.useState)(0),i=n[0],o=n[1],c=Object(r.useState)([]),f=c[0],s=c[1],d=Object(r.useCallback)(Object(u.throttle)((function(){window.outerHeight>document.querySelector(".post-list").getBoundingClientRect().bottom&&o((function(e){return e>=t.length?e:e+10}))}),250),[]),m=Object(r.useCallback)((function(e){var t=e.map((function(e){var t=e.node,n=t.excerpt,a=t.fields,u=t.frontmatter,i=a.slug,o=u.date,c=u.title,f=u.tags,s=u.update;1===Number(s.split(",")[1])&&(s=null);var d=f.map((function(e){if("undefined"!==e)return r.createElement("div",{key:i+"-"+e,className:"tag"},r.createElement("span",null,r.createElement(l.Link,{to:"/tags#"+e},"#"+e)))}));return r.createElement("li",{key:i,className:"post"},r.createElement("article",null,r.createElement("h2",{className:"title"},r.createElement(l.Link,{to:i},c)),r.createElement("div",{className:"info"},r.createElement("div",{className:"date-wrap"},r.createElement("span",{className:"date"},o),s?r.createElement("span",{className:"update"}," ","(Updated: "+s+")"):null),f.length&&"undefined"!==f[0]?r.createElement("span",{className:"info-dot"},"·"):null,r.createElement("ul",{className:"tag-list"},d)),r.createElement("span",{className:"excerpt"},r.createElement(l.Link,{to:i},n))))}));s((function(e){return[].concat(Object(a.a)(e),Object(a.a)(t))}))}),[]);return Object(r.useEffect)((function(){m(t.slice(f.length,i))}),[i]),Object(r.useEffect)((function(){return t.sort((function(e,t){var n=e.node.frontmatter,a=t.node.frontmatter,r=new Date(n.update.includes("0001")?n.date:n.update),l=new Date(a.update.includes("0001")?a.date:a.update);return r<l?1:r>l?-1:0})),o(10),window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}),[]),r.createElement("div",{className:"post-list"},r.createElement("ul",null,f))}},xSjX:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));var a=n("q1tI"),r=n("VXBa"),l=n("H8eV"),u=(n("JYtQ"),n("uP4m"));function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c="127053785";t.default=function(e){var t=e.data.allMarkdownRemark.group,n=Object(a.useState)(0),o=n[0],c=n[1],f=Object(a.useState)("undefined"),s=f[0],d=f[1];t.sort((function(e,t){var n=e.fieldValue.toLocaleLowerCase(),a=t.fieldValue.toLocaleLowerCase();return n<a?-1:a<n?1:0}));var m=t.map((function(e){var t;return a.createElement("li",{key:e.fieldValue},a.createElement("span",{className:"tag-text",style:{fontSize:"undefined"!==e.fieldValue?(t=Math.round(50/(o/e.totalCount)).toString(),t.length<=1&&(t="0"+t),Number(t)/100+.9+"rem"):"0.9rem",opacity:e.fieldValue===s?"0.9":"0.5",fontWeight:e.fieldValue===s?"bold":"normal"},onClick:function(){d(e.fieldValue)}},a.createElement("a",{href:"#"+e.fieldValue},e.fieldValue)))}));m.sort((function(e){return"undefined"===e.key?-1:0}));return Object(a.useEffect)((function(){for(var e,n=0,a=i(t);!(e=a()).done;){var r=e.value;"undefined"!==r.fieldValue&&r.totalCount>n&&(n=r.totalCount)}c(n)}),[t]),Object(a.useEffect)((function(){location.hash&&d(location.hash.split("#")[1])}),[]),a.createElement(r.a,null,a.createElement(l.a,{title:"Tags"}),a.createElement("div",{id:"tags"},a.createElement("div",{className:"tag-list-wrap"},a.createElement("ul",null,m)),a.createElement(u.a,{posts:t.filter((function(e){return e.fieldValue===s})).length?t.filter((function(e){return e.fieldValue===s}))[0].edges:t.filter((function(e){return"undefined"===e.fieldValue})).length?t.filter((function(e){return"undefined"===e.fieldValue}))[0].edges:[]})))}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-c6871d1ba7c1e004736d.js.map