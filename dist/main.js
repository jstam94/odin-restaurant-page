(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"5d21d9a90a4a749b76c5.jpg";function n(){const e=document.createElement("div.container"),n=document.createElement("h2");n.textContent="Generic Cafe",e.appendChild(n);const r=document.createElement("div"),o=new Image(320,480);o.src=t;const c=document.createElement("small");return c.innerHTML='Photo by <a href="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/shallow-focus-photography-of-coffee-late-in-mug-on-table-zUNs99PGDg0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',r.appendChild(o),r.appendChild(c),e.appendChild(r),e}const r=document.querySelector("#content");r.appendChild(n()),document.querySelector("button#home").addEventListener("click",(()=>{r.innerHTML="",r.appendChild(n())})),document.querySelector("button#menu").addEventListener("click",(()=>{r.innerHTML="",r.appendChild(function(){let e=document.createElement("div.menu");const t=document.createElement("h2");return t.textContent="Menu",e.appendChild(t),e}())})),document.querySelector("button#about").addEventListener("click",(()=>{r.innerHTML="",r.appendChild(function(){let e=document.createElement("div.menu");const t=document.createElement("h2");return t.textContent="About",e.appendChild(t),e}())}))})();