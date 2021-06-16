var intervalID = null;

var body = $("body");

var divSaisie = body.find("> #saisie");
var divHighlighted = body.find("> #highlighted");
divHighlighted.hide();

var prism = function() {
   /* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-dark&languages=clike+lua */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,e={},M={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof W?new W(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function t(e,r){var a,n;switch(r=r||{},M.util.type(e)){case"Object":if(n=M.util.objId(e),r[n])return r[n];for(var i in a={},r[n]=a,e)e.hasOwnProperty(i)&&(a[i]=t(e[i],r));return a;case"Array":return n=M.util.objId(e),r[n]?r[n]:(a=[],r[n]=a,e.forEach(function(e,n){a[n]=t(e,r)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==n)return t[r]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function(e,n){var t=M.util.clone(M.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(t,e,n,r){var a=(r=r||M.languages)[t],i={};for(var l in a)if(a.hasOwnProperty(l)){if(l==e)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);n.hasOwnProperty(l)||(i[l]=a[l])}var s=r[t];return r[t]=i,M.languages.DFS(M.languages,function(e,n){n===s&&e!=t&&(this[e]=i)}),i},DFS:function e(n,t,r,a){a=a||{};var i=M.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],r||l);var o=n[l],s=M.util.type(o);"Object"!==s||a[i(o)]?"Array"!==s||a[i(o)]||(a[i(o)]=!0,e(o,t,l,a)):(a[i(o)]=!0,e(o,t,null,a))}}},plugins:{},highlightAll:function(e,n){M.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};M.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),M.hooks.run("before-all-elements-highlight",r);for(var a,i=0;a=r.elements[i++];)M.highlightElement(a,!0===n,r.callback)},highlightElement:function(e,n,t){var r=M.util.getLanguage(e),a=M.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var i=e.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var l={element:e,language:r,grammar:a,code:e.textContent};function o(e){l.highlightedCode=e,M.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,M.hooks.run("after-highlight",l),M.hooks.run("complete",l),t&&t.call(l.element)}if(M.hooks.run("before-sanity-check",l),(i=l.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!l.code)return M.hooks.run("complete",l),void(t&&t.call(l.element));if(M.hooks.run("before-highlight",l),l.grammar)if(n&&u.Worker){var s=new Worker(M.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(M.highlight(l.code,l.grammar,l.language));else o(M.util.encode(l.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};return M.hooks.run("before-tokenize",r),r.tokens=M.tokenize(r.code,r.grammar),M.hooks.run("after-tokenize",r),W.stringify(M.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new i;return I(a,a.head,e),function e(n,t,r,a,i,l){for(var o in r)if(r.hasOwnProperty(o)&&r[o]){var s=r[o];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(l&&l.cause==o+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}for(var v=c.pattern||c,m=a.next,y=i;m!==t.tail&&!(l&&y>=l.reach);y+=m.value.length,m=m.next){var b=m.value;if(t.length>n.length)return;if(!(b instanceof W)){var k,x=1;if(h){if(!(k=z(v,y,n,f)))break;var w=k.index,A=k.index+k[0].length,P=y;for(P+=m.value.length;P<=w;)m=m.next,P+=m.value.length;if(P-=m.value.length,y=P,m.value instanceof W)continue;for(var E=m;E!==t.tail&&(P<A||"string"==typeof E.value);E=E.next)x++,P+=E.value.length;x--,b=n.slice(y,P),k.index-=y}else if(!(k=z(v,0,b,f)))continue;var w=k.index,S=k[0],O=b.slice(0,w),L=b.slice(w+S.length),N=y+b.length;l&&N>l.reach&&(l.reach=N);var j=m.prev;O&&(j=I(t,j,O),y+=O.length),q(t,j,x);var C=new W(o,g?M.tokenize(S,g):S,d,S);if(m=I(t,j,C),L&&I(t,m,L),1<x){var _={cause:o+","+u,reach:N};e(n,t,r,m.prev,y,_),l&&_.reach>l.reach&&(l.reach=_.reach)}}}}}}(e,a,n,a.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=M.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=M.hooks.all[e];if(t&&t.length)for(var r,a=0;r=t[a++];)r(n)}},Token:W};function W(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function z(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function I(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function q(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;(n.next=r).prev=n,e.length-=a}if(u.Prism=M,W.stringify=function n(e,t){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach(function(e){r+=n(e,t)}),r}var a={type:e.type,content:n(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(a.classes,i):a.classes.push(i)),M.hooks.run("wrap",a);var l="";for(var o in a.attributes)l+=" "+o+'="'+(a.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+l+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(M.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),t=n.language,r=n.code,a=n.immediateClose;u.postMessage(M.highlight(r,M.languages[t],t)),a&&u.close()},!1)),M;var t=M.util.currentScript();function r(){M.manual||M.highlightAll()}if(t&&(M.filename=t.src,t.hasAttribute("data-manual")&&(M.manual=!0)),!M.manual){var a=document.readyState;"loading"===a||"interactive"===a&&t&&t.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return M}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/};
};

var preHighlight = function() {
   prism();

   var divCode = divHighlighted.find("> #code");

   divCode.find("code, pre").css("color", "white");
   divCode.find("code, pre").css("background", "none");
   divCode.find("code, pre").css("text-shadow", "0 -.1em .2em black");
   divCode.find("code, pre").css("font-family", "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace");
   divCode.find("code, pre").css("font-size", "1em");
   divCode.find("code, pre").css("text-align", "left");
   divCode.find("code, pre").css("white-space", "pre");
   divCode.find("code, pre").css("word-spacing", "normal");
   divCode.find("code, pre").css("word-break", "normal");
   divCode.find("code, pre").css("word-wrap", "normal");
   divCode.find("code, pre").css("line-height", "1.5");

   divCode.find("code, pre").css("-moz-tab-size", "4");
   divCode.find("code, pre").css("-o-tab-size", "4");
   divCode.find("code, pre").css("tab-size", "4");
   
   divCode.find("code, pre").css("-webkit-hyphens", "none");
   divCode.find("code, pre").css("-moz-hyphens", "none");
   divCode.find("code, pre").css("-ms-hyphens", "none");
   divCode.find("code, pre").css("hyphens", "none");
   
   divCode.find("code, pre").css("text-shadow", "none");

   divCode.find(":not(pre) > code, pre").css("background", "hsl(30, 20%, 25%)");

   divCode.find("pre").css("padding", "1em");
   divCode.find("pre").css("margin", ".5em 0");
   divCode.find("pre").css("overflow", "auto");
   divCode.find("pre").css("border", ".3em solid hsl(30, 20%, 40%)");
   divCode.find("pre").css("border-radius", ".5em");
   divCode.find("pre").css("box-shadow", "1px 1px .5em black inset");
   
   divCode.find(":not(pre) > code").css("padding", ".15em .2em .05em");
   divCode.find(":not(pre) > code").css("border-radius", ".3em");
   divCode.find(":not(pre) > code").css("border", ".13em solid hsl(30, 20%, 40%)");
   divCode.find(":not(pre) > code").css("box-shadow", "1px 1px .3em -.1em black inset");
   divCode.find(":not(pre) > code").css("white-space", "normal");
};

var highlight = function() {
   var divCode = divHighlighted.find("> #code");

   divCode.find(".token.comment, .token.prolog, .token.doctype, .token.cdata").css("color", "hsl(30, 20%, 50%)");
   divCode.find(".token.punctuation").css("opacity", ".7");
   divCode.find(".token.namespace").css("opacity", ".7");
   divCode.find(".token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol").css("color", "hsl(350, 40%, 70%)");
   divCode.find(".token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted").css("color", "hsl(75, 70%, 60%)");
   divCode.find(".token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable").css("color", "hsl(40, 90%, 60%)");
   divCode.find(".token.atrule, .token.attr-value, .token.keyword").css("color", "hsl(350, 40%, 70%)");
   divCode.find(".token.regex, .token.important").css("color", "#e90");
   divCode.find(".token.important, .token.bold").css("font-weight", "bold");
   divCode.find(".token.italic").css("font-style", "italic");
   divCode.find(".token.entity").css("cursor", "help");
   divCode.find(".token.deleted").css("color", "red");
};

var postHighlight = function() {
   var divCode = divHighlighted.find("> #code");
   divCode.find("pre, code, span").removeClass();
}

var update = function() {
   if (divHighlighted.find("span").length > 0) {
      highlight();
      postHighlight();
      clearInterval(intervalID);
   }
};

function strClipboard(txt) {
   var t = document.createElement('TEXTAREA');
       t.textContent = txt;
   document.body.appendChild(t);
   t.select();
   document.execCommand('copy');
   t.parentNode.removeChild(t);
   alert("Le code a été copié dans le presse-papier");
 }

var copy = function() {
   var divCode = divHighlighted.find("> #code");
   var txt = divCode.html()
   strClipboard(txt);
};

var textarea = divSaisie.find("> textarea");
textarea.on("change", function() {
   var txt = textarea.val();
   textarea.val(txt.replace(/(\t)/gm,"  "));
});

divSaisie.find("> button").on("click", function() {
   var txt = textarea.val();
   var html = "<button type=\"btn\" style=\"font-size:12px; border:none;\" onclick=\"copy()\">"
   html += "<img src=\"assets/copy_paste_icon.png\" /><b>Copier le code</b></button>";
   html += "<div id=\"code\"><pre class=\"language-lua\"><code class=\"language-lua\">" + txt + "</code></pre></div>";
   
   divSaisie.hide();
   divHighlighted.show();

   divHighlighted.html(html);
   preHighlight();
   intervalID = setInterval(update, 20);
});
