"use strict";(self.webpackChunkmcss_docs=self.webpackChunkmcss_docs||[]).push([[166],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2385:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,title:"About the API"},s=void 0,u={unversionedId:"API/about",id:"API/about",title:"About the API",description:"This section of the documentation is a work in progress. It is not complete and may change at any time.",source:"@site/docs/API/about.md",sourceDirName:"API",slug:"/API/about",permalink:"/documentation/API/about",editUrl:"https://github.com/mcserversoft/documentation/edit/docusaurus/docs/API/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"About the API"},sidebar:"tutorialSidebar",previous:{title:"Changing the version of Java",permalink:"/documentation/advanced/java-path-update"},next:{title:"Adding Users",permalink:"/documentation/API/guides/users"}},c=[{value:"What does it do",id:"-api-about",children:[],level:2},{value:"Enabling it",id:"-api-enable",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Work In Progress")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This section of the documentation is a work in progress. It is not complete and may change at any time.",(0,a.kt)("br",null),"\nThe API is still in development. It is ",(0,a.kt)("strong",{parentName:"p"},"not")," perfect and will be improved in the future."))),(0,a.kt)("p",null,"Since version 12, MCSS supports an API that allows you to interact with your servers remotely."),(0,a.kt)("p",null,"It is currently in it's first iteration, but is a work in progress."),(0,a.kt)("p",null,"If you have any feature requests for the API, feel free to send them over on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/DEn89PB"},"Discord"),"."),(0,a.kt)("h2",{id:"-api-about"},"What does it do"),(0,a.kt)("p",null,"The API allows you to control MCSS remotely. As of right now you can : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run power actions - Start, Stop, Restart or Kill your servers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send commands - run minecraft commands in the console")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Return server information like the icon, status and description"))),(0,a.kt)("h2",{id:"-api-enable"},"Enabling it"),(0,a.kt)("p",null,"For your safety and to preserve resources, the API is disabled by default. To enable it, open the settings ",(0,a.kt)("inlineCode",{parentName:"p"},"file > options")," and scroll all the way down."),(0,a.kt)("p",null,"Tick a box labeled ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Web API"),". Below you will see a button labeled ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage Users"),". From the new window you will be able to create and delete users. Create a new user, then close the software to apply all the changes. "),(0,a.kt)("p",null,"You will need to restart to enable/disable the API."))}d.isMDXComponent=!0}}]);