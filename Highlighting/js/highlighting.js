var intervalID = null;

var body = $("body");

var divSaisie = body.find("> #saisie");
var divHighlighted = body.find("> #highlighted");
divHighlighted.hide();

var prism = function () {
   /* PrismJS 1.23.0
   https://prismjs.com/download.html#themes=prism-dark&languages=lua */

   'use strict';
   /** @type {(Window|{})} */
   var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
   var Prism = function (global) {
      /**
       * @param {string} type
       * @param {string} text
       * @param {string} alias
       * @param {string} data
       * @return {undefined}
       */
      function Token(type, text, alias, data) {
         /** @type {string} */
         this.type = type;
         /** @type {string} */
         this.content = text;
         /** @type {string} */
         this.alias = alias;
         /** @type {number} */
         this.length = 0 | (data || "").length;
      }
      /**
       * @param {!RegExp} options
       * @param {number} index
       * @param {string} response
       * @param {number} url
       * @return {?}
       */
      function fn(options, index, response, url) {
         /** @type {number} */
         options.lastIndex = index;
         var data = options.exec(response);
         if (data && url && data[1]) {
            var index = data[1].length;
            data.index += index;
            data[0] = data[0].slice(index);
         }
         return data;
      }
      /**
       * @return {undefined}
       */
      function updateVertexData() {
         var context = {
            value: null,
            prev: null,
            next: null
         };
         var node = {
            value: null,
            prev: context,
            next: null
         };
         context.next = node;
         this.head = context;
         this.tail = node;
         /** @type {number} */
         this.length = 0;
      }
      /**
       * @param {!Object} instance
       * @param {!Object} context
       * @param {string} str
       * @return {?}
       */
      function f(instance, context, str) {
         var next = context.next;
         var node = {
            value: str,
            prev: context,
            next: next
         };
         return context.next = node, next.prev = node, instance.length++, node;
      }
      /**
       * @param {!Object} e
       * @param {!Object} value
       * @param {number} length
       * @return {undefined}
       */
      function add(e, value, length) {
         var node = value.next;
         /** @type {number} */
         var i = 0;
         for (; i < length && node !== e.tail; i++) {
            node = node.next;
         }
         /** @type {!Object} */
         (value.next = node).prev = value;
         e.length -= i;
      }
      /**
       * @return {undefined}
       */
      function init() {
         if (!_.manual) {
            _.highlightAll();
         }
      }
      /** @type {!RegExp} */
      var regex = /\blang(?:uage)?-([\w-]+)\b/i;
      /** @type {number} */
      var nextid = 0;
      var msg = {};
      var _ = {
         manual: global.Prism && global.Prism.manual,
         disableWorkerMessageHandler: global.Prism && global.Prism.disableWorkerMessageHandler,
         util: {
            encode: function match(tokens) {
               return tokens instanceof Token ? new Token(tokens.type, match(tokens.content), tokens.alias) : Array.isArray(tokens) ? tokens.map(match) : tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            },
            type: function (obj) {
               return Object.prototype.toString.call(obj).slice(8, -1);
            },
            objId: function (obj) {
               return obj.__id || Object.defineProperty(obj, "__id", {
                  value: ++nextid
               }), obj.__id;
            },
            clone: function walk(object, args) {
               var obj;
               var method;
               switch (args = args || {}, _.util.type(object)) {
                  case "Object":
                     if (method = _.util.objId(object), args[method]) {
                        return args[method];
                     }
                     var i;
                     for (i in obj = {}, args[method] = obj, object) {
                        if (object.hasOwnProperty(i)) {
                           obj[i] = walk(object[i], args);
                        }
                     }
                     return obj;
                  case "Array":
                     return method = _.util.objId(object), args[method] ? args[method] : (obj = [], args[method] = obj, object.forEach(function (key, name) {
                        obj[name] = walk(key, args);
                     }), obj);
                  default:
                     return object;
               }
            },
            getLanguage: function (e) {
               for (; e && !regex.test(e.className);) {
                  e = e.parentElement;
               }
               return e ? (e.className.match(regex) || [, "none"])[1].toLowerCase() : "none";
            },
            currentScript: function () {
               if ("undefined" == typeof document) {
                  return null;
               }
               if ("currentScript" in document) {
                  return document.currentScript;
               }
               try {
                  throw new Error;
               } catch (error) {
                  var _src_temp = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(error.stack) || [])[1];
                  if (_src_temp) {
                     /** @type {!NodeList<Element>} */
                     var nodes = document.getElementsByTagName("script");
                     var j;
                     for (j in nodes) {
                        if (nodes[j].src == _src_temp) {
                           return nodes[j];
                        }
                     }
                  }
                  return null;
               }
            },
            isActive: function (parent, key, section) {
               /** @type {string} */
               var widget = "no-" + key;
               for (; parent;) {
                  var el = parent.classList;
                  if (el.contains(key)) {
                     return true;
                  }
                  if (el.contains(widget)) {
                     return false;
                  }
                  parent = parent.parentElement;
               }
               return !!section;
            }
         },
         languages: {
            plain: msg,
            plaintext: msg,
            text: msg,
            txt: msg,
            extend: function (id, a) {
               var obj = _.util.clone(_.languages[id]);
               var prop;
               for (prop in a) {
                  obj[prop] = a[prop];
               }
               return obj;
            },
            insertBefore: function (name, text, config, root) {
               var ret = (root = root || _.languages)[name];
               var obj = {};
               var k;
               for (k in ret) {
                  if (ret.hasOwnProperty(k)) {
                     if (k == text) {
                        var prop;
                        for (prop in config) {
                           if (config.hasOwnProperty(prop)) {
                              obj[prop] = config[prop];
                           }
                        }
                     }
                     if (!config.hasOwnProperty(k)) {
                        obj[k] = ret[k];
                     }
                  }
               }
               var list = root[name];
               return root[name] = obj, _.languages.DFS(_.languages, function (prefix, prev_suggestions_kind) {
                  if (prev_suggestions_kind === list && prefix != name) {
                     this[prefix] = obj;
                  }
               }), obj;
            },
            DFS: function fn(obj, callback, type, index) {
               index = index || {};
               /** @type {function(!Object): ?} */
               var parseInt = _.util.objId;
               var i;
               for (i in obj) {
                  if (obj.hasOwnProperty(i)) {
                     callback.call(obj, i, obj[i], type || i);
                     var val = obj[i];
                     var ks = _.util.type(val);
                     if ("Object" !== ks || index[parseInt(val)]) {
                        if (!("Array" !== ks || index[parseInt(val)])) {
                           /** @type {boolean} */
                           index[parseInt(val)] = true;
                           fn(val, callback, i, index);
                        }
                     } else {
                        /** @type {boolean} */
                        index[parseInt(val)] = true;
                        fn(val, callback, null, index);
                     }
                  }
               }
            }
         },
         plugins: {},
         highlightAll: function (callback, options) {
            _.highlightAllUnder(document, callback, options);
         },
         highlightAllUnder: function (s, prefix, name) {
            var options = {
               callback: name,
               container: s,
               selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run("before-highlightall", options);
            /** @type {!Array<?>} */
            options.elements = Array.prototype.slice.apply(options.container.querySelectorAll(options.selector));
            _.hooks.run("before-all-elements-highlight", options);
            var output;
            /** @type {number} */
            var i = 0;
            for (; output = options.elements[i++];) {
               _.highlightElement(output, true === prefix, options.callback);
            }
         },
         highlightElement: function (e, message, callback) {
            /**
             * @param {string} hostName
             * @return {undefined}
             */
            function get(hostName) {
               /** @type {string} */
               env.highlightedCode = hostName;
               _.hooks.run("before-insert", env);
               env.element.innerHTML = env.highlightedCode;
               _.hooks.run("after-highlight", env);
               _.hooks.run("complete", env);
               if (callback) {
                  callback.call(env.element);
               }
            }
            var name = _.util.getLanguage(e);
            var options = _.languages[name];
            e.className = e.className.replace(regex, "").replace(/\s+/g, " ") + " language-" + name;
            var el = e.parentElement;
            if (el && "pre" === el.nodeName.toLowerCase()) {
               /** @type {string} */
               el.className = el.className.replace(regex, "").replace(/\s+/g, " ") + " language-" + name;
            }
            var env = {
               element: e,
               language: name,
               grammar: options,
               code: e.textContent
            };
            if (_.hooks.run("before-sanity-check", env), (el = env.element.parentElement) && "pre" === el.nodeName.toLowerCase() && !el.hasAttribute("tabindex") && el.setAttribute("tabindex", "0"), !env.code) {
               return _.hooks.run("complete", env), void (callback && callback.call(env.element));
            }
            if (_.hooks.run("before-highlight", env), env.grammar) {
               if (message && global.Worker) {
                  /** @type {!Worker} */
                  var layoutWorker = new Worker(_.filename);
                  /**
                   * @param {!Object} event
                   * @return {undefined}
                   */
                  layoutWorker.onmessage = function (event) {
                     get(event.data);
                  };
                  layoutWorker.postMessage(JSON.stringify({
                     language: env.language,
                     code: env.code,
                     immediateClose: true
                  }));
               } else {
                  get(_.highlight(env.code, env.grammar, env.language));
               }
            } else {
               get(_.util.encode(env.code));
            }
         },
         highlight: function (y, g, name) {
            var options = {
               code: y,
               grammar: g,
               language: name
            };
            return _.hooks.run("before-tokenize", options), options.tokens = _.tokenize(options.code, options.grammar), _.hooks.run("after-tokenize", options), Token.stringify(_.util.encode(options.tokens), options.language);
         },
         tokenize: function (text, grammar) {
            var rest = grammar.rest;
            if (rest) {
               var token;
               for (token in rest) {
                  grammar[token] = rest[token];
               }
               delete grammar.rest;
            }
            var self = new updateVertexData;
            return f(self, self.head, text), function update(data, e, obj, path, position, result) {
               var prop;
               for (prop in obj) {
                  if (obj.hasOwnProperty(prop) && obj[prop]) {
                     var list = obj[prop];
                     list = Array.isArray(list) ? list : [list];
                     /** @type {number} */
                     var i = 0;
                     for (; i < list.length; ++i) {
                        if (result && result.cause == prop + "," + i) {
                           return;
                        }
                        var pattern = list[i];
                        var inside = pattern.inside;
                        /** @type {boolean} */
                        var hash = !!pattern.lookbehind;
                        /** @type {boolean} */
                        var h = !!pattern.greedy;
                        var alias = pattern.alias;
                        if (h && !pattern.pattern.global) {
                           var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
                           /** @type {!RegExp} */
                           pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
                        }
                        var header = pattern.pattern || pattern;
                        var node = path.next;
                        /** @type {number} */
                        var pos = position;
                        for (; node !== e.tail && !(result && pos >= result.reach); pos = pos + node.value.length, node = node.next) {
                           var str = node.value;
                           if (e.length > data.length) {
                              return;
                           }
                           if (!(str instanceof Token)) {
                              var buffer;
                              /** @type {number} */
                              var property = 1;
                              if (h) {
                                 if (!(buffer = fn(header, pos, data, hash))) {
                                    break;
                                 }
                                 var offset = buffer.index;
                                 var inputsSize = buffer.index + buffer[0].length;
                                 var i = pos;
                                 i = i + node.value.length;
                                 for (; i <= offset;) {
                                    node = node.next;
                                    i = i + node.value.length;
                                 }
                                 if (i = i - node.value.length, pos = i, node.value instanceof Token) {
                                    continue;
                                 }
                                 var target = node;
                                 for (; target !== e.tail && (i < inputsSize || "string" == typeof target.value); target = target.next) {
                                    property++;
                                    i = i + target.value.length;
                                 }
                                 property--;
                                 str = data.slice(pos, i);
                                 buffer.index -= pos;
                              } else {
                                 if (!(buffer = fn(header, 0, str, hash))) {
                                    continue;
                                 }
                              }
                              offset = buffer.index;
                              var match = buffer[0];
                              var text = str.slice(0, offset);
                              var value = str.slice(offset + match.length);
                              var j = pos + str.length;
                              if (result && j > result.reach) {
                                 result.reach = j;
                              }
                              var p = node.prev;
                              if (text) {
                                 p = f(e, p, text);
                                 pos = pos + text.length;
                              }
                              add(e, p, property);
                              var wrapped = new Token(prop, inside ? _.tokenize(match, inside) : match, alias, match);
                              if (node = f(e, p, wrapped), value && f(e, node, value), 1 < property) {
                                 var next = {
                                    cause: prop + "," + i,
                                    reach: j
                                 };
                                 update(data, e, obj, node.prev, pos, next);
                                 if (result && next.reach > result.reach) {
                                    result.reach = next.reach;
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            }(text, self, grammar, self.head, 0), function (self) {
               /** @type {!Array} */
               var _results = [];
               var node = self.head.next;
               for (; node !== self.tail;) {
                  _results.push(node.value);
                  node = node.next;
               }
               return _results;
            }(self);
         },
         hooks: {
            all: {},
            add: function (event, elem) {
               var cache = _.hooks.all;
               cache[event] = cache[event] || [];
               cache[event].push(elem);
            },
            run: function (name, from) {
               var res = _.hooks.all[name];
               if (res && res.length) {
                  var f;
                  /** @type {number} */
                  var ri = 0;
                  for (; f = res[ri++];) {
                     f(from);
                  }
               }
            }
         },
         Token: Token
      };
      if (global.Prism = _, Token.stringify = function update(item, key) {
         if ("string" == typeof item) {
            return item;
         }
         if (Array.isArray(item)) {
            /** @type {string} */
            var url = "";
            return item.forEach(function (args) {
               url = url + update(args, key);
            }), url;
         }
         var env = {
            type: item.type,
            content: update(item.content, key),
            tag: "span",
            classes: ["token", item.type],
            attributes: {},
            language: key
         };
         var a = item.alias;
         if (a) {
            if (Array.isArray(a)) {
               Array.prototype.push.apply(env.classes, a);
            } else {
               env.classes.push(a);
            }
         }
         _.hooks.run("wrap", env);
         /** @type {string} */
         var pix_color = "";
         var name;
         for (name in env.attributes) {
            /** @type {string} */
            pix_color = pix_color + (" " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"');
         }
         return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + pix_color + ">" + env.content + "</" + env.tag + ">";
      }, !global.document) {
         return global.addEventListener && (_.disableWorkerMessageHandler || global.addEventListener("message", function (textFile) {
            /** @type {*} */
            var message = JSON.parse(textFile.data);
            var lang = message.language;
            var value = message.code;
            var immediateClose = message.immediateClose;
            global.postMessage(_.highlight(value, _.languages[lang], lang));
            if (immediateClose) {
               global.close();
            }
         }, false)), _;
      }
      var script = _.util.currentScript();
      if (script && (_.filename = script.src, script.hasAttribute("data-manual") && (_.manual = true)), !_.manual) {
         /** @type {string} */
         var state = document.readyState;
         if ("loading" === state || "interactive" === state && script && script.defer) {
            document.addEventListener("DOMContentLoaded", init);
         } else {
            if (window.requestAnimationFrame) {
               window.requestAnimationFrame(init);
            } else {
               window.setTimeout(init, 16);
            }
         }
      }
      return _;
   }(_self);
   "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
   Prism.languages.lua = {
      comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
      string: {
         pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
         greedy: true
      },
      number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
      keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
      function: /(?!\d)\w+(?=\s*(?:[({]))/,
      operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, {
         pattern: /(^|[^.])\.\.(?!\.)/,
         lookbehind: true
      }],
      punctuation: /[\[\](){},;]|\.+|:+/
   };
};

var preHighlight = function () {
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

   divCode.find("code").css("padding", "0");
};

var highlight = function () {
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

var postHighlight = function () {
   var divCode = divHighlighted.find("> #code");
   divCode.find("pre, code, span").removeClass();
}

var update = function () {
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

var copy = function () {
   var divCode = divHighlighted.find("> #code");
   var txt = divCode.html();
   strClipboard(txt.replace(/ class=""/g, ""));
};

var textarea = divSaisie.find("> textarea");
textarea.on("change", function () {
   var txt = textarea.val();
   textarea.val(txt.replace(/(\t)/gm, "  "));
});

divSaisie.find("> button").on("click", function () {
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
