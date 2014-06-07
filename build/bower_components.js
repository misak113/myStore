/*! myStore-client, version: 1.1.4, 2014-06-07 */
!function(e, undefined) {
    function j(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function A(e) {
        var t = D[e] = {};
        return x.each(e.match(w) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function F() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = x.expando + Math.random();
    }
    function P(e, t, n) {
        var r;
        if (n === undefined && 1 === e.nodeType) if (r = "data-" + t.replace(O, "-$1").toLowerCase(), 
        n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n;
            } catch (i) {}
            L.set(e, t, n);
        } else n = undefined;
        return n;
    }
    function U() {
        return !0;
    }
    function Y() {
        return !1;
    }
    function V() {
        try {
            return o.activeElement;
        } catch (e) {}
    }
    function Z(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function et(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return x.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (G.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e);
        }
        return x.grep(e, function(e) {
            return g.call(t, e) >= 0 !== n;
        });
    }
    function pt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function ft(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function ht(e) {
        var t = ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function dt(e, t) {
        for (var n = e.length, r = 0; n > r; r++) q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"));
    }
    function gt(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l) for (n = 0, r = l[i].length; r > n; n++) x.event.add(t, i, l[i][n]);
            }
            L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u));
        }
    }
    function mt(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && x.nodeName(e, t) ? x.merge([ e ], n) : n;
    }
    function yt(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
    function At(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Dt.length; i--; ) if (t = Dt[i] + n, 
        t in e) return t;
        return r;
    }
    function Lt(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
    }
    function qt(t) {
        return e.getComputedStyle(t, null);
    }
    function Ht(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), 
        n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = q.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r), 
        (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e;
    }
    function Ot(e, t, n) {
        var r = Tt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function Ft(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += x.css(e, n + jt[o], !0, i)), 
        r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i), 
        "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i)));
        return s;
    }
    function Pt(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = qt(e), s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i)) return i;
            r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px";
    }
    function Rt(e) {
        var t = o, n = Nt[e];
        return n || (n = Mt(e, t), "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
        t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
        t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n;
    }
    function Mt(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r;
    }
    function _t(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) {
            n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) _t(e + "[" + i + "]", t[i], n, r);
    }
    function un(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(w) || [];
            if (x.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function ln(e, t, n, r) {
        function s(a) {
            var u;
            return i[a] = !0, x.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), 
                s(l), !1);
            }), u;
        }
        var i = {}, o = e === on;
        return s(t.dataTypes[0]) || !i["*"] && s("*");
    }
    function cn(e, t) {
        var n, r, i = x.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && x.extend(!0, e, r), e;
    }
    function pn(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
        r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break;
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                s || (s = i);
            }
            o = o || s;
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined;
    }
    function fn(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break;
            }
            if (s !== !0) if (s && e["throws"]) t = s(t); else try {
                t = s(t);
            } catch (p) {
                return {
                    state: "parsererror",
                    error: s ? p : "No conversion from " + u + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function En() {
        return setTimeout(function() {
            xn = undefined;
        }), xn = x.now();
    }
    function Sn(e, t, n) {
        for (var r, i = (Nn[t] || []).concat(Nn["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function jn(e, t, n) {
        var r, i, o = 0, s = kn.length, a = x.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for (var t = xn || En(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
            return a.notifyWith(e, [ l, o, n ]), 1 > o && u ? n : (a.resolveWith(e, [ l ]), 
            !1);
        }, l = a.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: xn || En(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? a.resolveWith(e, [ l, t ]) : a.rejectWith(e, [ l, t ]), this;
            }
        }), c = l.props;
        for (Dn(c, l.opts.specialEasing); s > o; o++) if (r = kn[o].call(l, e, c, l.opts)) return r;
        return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function Dn(e, t) {
        var n, r, i, o, s;
        for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], 
        o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) {
            o = s.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function An(e, t, n) {
        var r, i, o, s, a, u, l = this, c = {}, p = e.style, f = e.nodeType && Lt(e), h = q.get(e, "fxshow");
        n.queue || (a = x._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, 
        a.empty.fire = function() {
            a.unqueued || u();
        }), a.unqueued++, l.always(function() {
            l.always(function() {
                a.unqueued--, x.queue(e, "fx").length || a.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")), 
        n.overflow && (p.overflow = "hidden", l.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));
        for (r in t) if (i = t[r], wn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                if ("show" !== i || !h || h[r] === undefined) continue;
                f = !0;
            }
            c[r] = h && h[r] || x.style(e, r);
        }
        if (!x.isEmptyObject(c)) {
            h ? "hidden" in h && (f = h.hidden) : h = q.access(e, "fxshow", {}), o && (h.hidden = !f), 
            f ? x(e).show() : l.done(function() {
                x(e).hide();
            }), l.done(function() {
                var t;
                q.remove(e, "fxshow");
                for (t in c) x.style(e, t, c[t]);
            });
            for (r in c) s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, 
            s.start = "width" === r || "height" === r ? 1 : 0));
        }
    }
    function Ln(e, t, n, r, i) {
        return new Ln.prototype.init(e, t, n, r, i);
    }
    function qn(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = jt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function Hn(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var t, n, r = typeof undefined, i = e.location, o = e.document, s = o.documentElement, a = e.jQuery, u = e.$, l = {}, c = [], p = "2.0.3", f = c.concat, h = c.push, d = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, x = function(e, n) {
        return new x.fn.init(e, n, t);
    }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^-ms-/, N = /-([\da-z])/gi, E = function(e, t) {
        return t.toUpperCase();
    }, S = function() {
        o.removeEventListener("DOMContentLoaded", S, !1), e.removeEventListener("load", S, !1), 
        x.ready();
    };
    x.fn = x.prototype = {
        jquery: p,
        constructor: x,
        init: function(e, t, n) {
            var r, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : T.exec(e), 
                !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), 
                    C.test(r[1]) && x.isPlainObject(t)) for (r in t) x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                }
                return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), 
                this.context = o, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, 
            this.context = e.context), x.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return x.each(this, e, t);
        },
        ready: function(e) {
            return x.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == typeof s || x.isFunction(s) || (s = {}), 
        u === a && (s = this, --a); u > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], 
        r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, 
        o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
        return s;
    }, x.extend({
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0);
        },
        ready: function(e) {
            (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [ x ]), 
            x.fn.trigger && x(o).trigger("ready").off("ready")));
        },
        isFunction: function(e) {
            return "function" === x.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            if ("object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (t) {
                return !1;
            }
            return !0;
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = x.buildFragment([ e ], t, i), i && x(i).remove(), 
            x.merge([], r.childNodes));
        },
        parseJSON: JSON.parse,
        parseXML: function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser(), t = n.parseFromString(e, "text/xml");
            } catch (r) {
                t = undefined;
            }
            return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e), 
            t;
        },
        noop: function() {},
        globalEval: function(e) {
            var t, n = eval;
            e = x.trim(e), e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), 
            t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e));
        },
        camelCase: function(e) {
            return e.replace(k, "ms-").replace(N, E);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, s = j(e);
            if (n) {
                if (s) for (;o > i && (r = t.apply(e[i], n), r !== !1); i++) ; else for (i in e) if (r = t.apply(e[i], n), 
                r === !1) break;
            } else if (s) for (;o > i && (r = t.call(e[i], i, e[i]), r !== !1); i++) ; else for (i in e) if (r = t.call(e[i], i, e[i]), 
            r === !1) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : v.call(e);
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [ e ] : e) : h.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : g.call(t, e, n);
        },
        merge: function(e, t) {
            var n = t.length, r = e.length, i = 0;
            if ("number" == typeof n) for (;n > i; i++) e[r++] = t[i]; else for (;t[i] !== undefined; ) e[r++] = t[i++];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, s = e.length;
            for (n = !!n; s > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, s = j(e), a = [];
            if (s) for (;o > i; i++) r = t(e[i], i, n), null != r && (a[a.length] = r); else for (i in e) r = t(e[i], i, n), 
            null != r && (a[a.length] = r);
            return f.apply([], a);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), 
            i = function() {
                return e.apply(t || this, r.concat(d.call(arguments)));
            }, i.guid = e.guid = e.guid || x.guid++, i) : undefined;
        },
        access: function(e, t, n, r, i, o, s) {
            var a = 0, u = e.length, l = null == n;
            if ("object" === x.type(n)) {
                i = !0;
                for (a in n) x.access(e, t, a, n[a], !0, o, s);
            } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), 
            t = null) : (l = t, t = function(e, t, n) {
                return l.call(x(e), n);
            })), t)) for (;u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        now: Date.now,
        swap: function(e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i;
        }
    }), x.ready.promise = function(t) {
        return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), 
        e.addEventListener("load", S, !1))), n.promise(t);
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
    }), t = x(o), function(e, undefined) {
        function ot(e, t, r, i) {
            var o, s, a, u, l, f, g, m, x, w;
            if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || "string" != typeof e) return r;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (h && !i) {
                if (o = K.exec(e)) if (a = o[1]) {
                    if (9 === u) {
                        if (s = t.getElementById(a), !s || !s.parentNode) return r;
                        if (s.id === a) return r.push(s), r;
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a) return r.push(s), 
                    r;
                } else {
                    if (o[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                    if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(a)), 
                    r;
                }
                if (n.qsa && (!d || !d.test(e))) {
                    if (m = g = v, x = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        for (f = gt(e), (g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m), 
                        m = "[id='" + m + "'] ", l = f.length; l--; ) f[l] = m + mt(f[l]);
                        x = U.test(e) && t.parentNode || t, w = f.join(",");
                    }
                    if (w) try {
                        return O.apply(r, x.querySelectorAll(w)), r;
                    } catch (T) {} finally {
                        g || t.removeAttribute("id");
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, r, i);
        }
        function st() {
            function t(n, r) {
                return e.push(n += " ") > i.cacheLength && delete t[e.shift()], t[n] = r;
            }
            var e = [];
            return t;
        }
        function at(e) {
            return e[v] = !0, e;
        }
        function ut(e) {
            var t = p.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function lt(e, t) {
            for (var n = e.split("|"), r = e.length; r--; ) i.attrHandle[n[r]] = t;
        }
        function ct(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function ht(e) {
            return at(function(t) {
                return t = +t, at(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; ) n[i = o[s]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function dt() {}
        function gt(e, t) {
            var n, r, o, s, a, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], l = i.preFilter; a; ) {
                (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), 
                n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), a = a.slice(n.length));
                for (s in i.filter) !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), 
                o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? ot.error(e) : k(e, u).slice(0);
        }
        function mt(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function yt(e, t, n) {
            var i = t.dir, o = n && "parentNode" === i, s = T++;
            return t.first ? function(t, n, r) {
                for (;t = t[i]; ) if (1 === t.nodeType || o) return e(t, n, r);
            } : function(t, n, a) {
                var u, l, c, p = w + " " + s;
                if (a) {
                    for (;t = t[i]; ) if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
                } else for (;t = t[i]; ) if (1 === t.nodeType || o) if (c = t[v] || (t[v] = {}), 
                (l = c[i]) && l[0] === p) {
                    if ((u = l[1]) === !0 || u === r) return u === !0;
                } else if (l = c[i] = [ p ], l[1] = e(t, n, a) || r, l[1] === !0) return !0;
            };
        }
        function vt(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function xt(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++) (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), 
            l && t.push(a));
            return s;
        }
        function bt(e, t, n, r, i, o) {
            return r && !r[v] && (r = bt(r)), i && !i[v] && (i = bt(i, o)), at(function(o, s, a, u) {
                var l, c, p, f = [], h = [], d = s.length, g = o || Ct(t || "*", a.nodeType ? [ a ] : a, []), m = !e || !o && t ? g : xt(g, f, e, a, u), y = n ? i || (o ? e : d || r) ? [] : s : m;
                if (n && n(m, y, a, u), r) for (l = xt(y, h), r(l, [], a, u), c = l.length; c--; ) (p = l[c]) && (y[h[c]] = !(m[h[c]] = p));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = y.length; c--; ) (p = y[c]) && l.push(m[c] = p);
                            i(null, y = [], l, u);
                        }
                        for (c = y.length; c--; ) (p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p));
                    }
                } else y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y);
            });
        }
        function wt(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = yt(function(e) {
                return e === t;
            }, a, !0), p = yt(function(e) {
                return P.call(t, e) > -1;
            }, a, !0), f = [ function(e, n, r) {
                return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
            } ]; o > l; l++) if (n = i.relative[e[l].type]) f = [ yt(vt(f), n) ]; else {
                if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
                    for (r = ++l; o > r && !i.relative[e[r].type]; r++) ;
                    return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({
                        value: " " === e[l - 2].type ? "*" : ""
                    })).replace(z, "$1"), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e));
                }
                f.push(n);
            }
            return vt(f);
        }
        function Tt(e, t) {
            var n = 0, o = t.length > 0, s = e.length > 0, a = function(a, l, c, f, h) {
                var d, g, m, y = [], v = 0, x = "0", b = a && [], T = null != h, C = u, k = a || s && i.find.TAG("*", h && l.parentNode || l), N = w += null == C ? 1 : Math.random() || .1;
                for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
                    if (s && d) {
                        for (g = 0; m = e[g++]; ) if (m(d, l, c)) {
                            f.push(d);
                            break;
                        }
                        T && (w = N, r = ++n);
                    }
                    o && ((d = !m && d) && v--, a && b.push(d));
                }
                if (v += x, o && x !== v) {
                    for (g = 0; m = t[g++]; ) m(b, y, l, c);
                    if (a) {
                        if (v > 0) for (;x--; ) b[x] || y[x] || (y[x] = q.call(f));
                        y = xt(y);
                    }
                    O.apply(f, y), T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f);
                }
                return T && (w = N, u = C), b;
            };
            return o ? at(a) : a;
        }
        function Ct(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) ot(e, t[r], n);
            return n;
        }
        function kt(e, t, r, o) {
            var s, u, l, c, p, f = gt(e);
            if (!o && 1 === f.length) {
                if (u = f[0] = f[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
                    if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return r;
                    e = e.slice(u.shift().value.length);
                }
                for (s = J.needsContext.test(e) ? 0 : u.length; s-- && (l = u[s], !i.relative[c = l.type]); ) if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
                    if (u.splice(s, 1), e = o.length && mt(u), !e) return O.apply(r, o), r;
                    break;
                }
            }
            return a(e, f)(o, t, !h, r, U.test(e)), r;
        }
        var t, n, r, i, o, s, a, u, l, c, p, f, h, d, g, m, y, v = "sizzle" + -new Date(), b = e.document, w = 0, T = 0, C = st(), k = st(), N = st(), E = !1, S = function(e, t) {
            return e === t ? (E = !0, 0) : 0;
        }, j = typeof undefined, D = 1 << 31, A = {}.hasOwnProperty, L = [], q = L.pop, H = L.push, O = L.push, F = L.slice, P = L.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1;
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", $ = W.replace("w", "w#"), B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]", I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = RegExp("^" + M + "*," + M + "*"), X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = RegExp(M + "*[+~]"), Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"), V = RegExp(I), G = RegExp("^" + $ + "$"), J = {
            ID: RegExp("^#(" + W + ")"),
            CLASS: RegExp("^\\.(" + W + ")"),
            TAG: RegExp("^(" + W.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + B),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: RegExp("^(?:" + R + ")$", "i"),
            needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /^(?:input|select|textarea|button)$/i, et = /^h\d$/i, tt = /'|\\/g, nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), rt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
        };
        try {
            O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType;
        } catch (it) {
            O = {
                apply: L.length ? function(e, t) {
                    H.apply(e, F.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        s = ot.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, n = ot.support = {}, c = ot.setDocument = function(e) {
            var t = e ? e.ownerDocument || e : b, r = t.defaultView;
            return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, 
            h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function() {
                c();
            }), n.attributes = ut(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), n.getElementsByTagName = ut(function(e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
            }), n.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 
                2 === e.getElementsByClassName("i").length;
            }), n.getById = ut(function(e) {
                return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length;
            }), n.getById ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete i.find.ID, i.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined;
            }, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"), 
                e.querySelectorAll(":checked").length || d.push(":checked");
            }), ut(function(e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"), 
                e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                d.push(",.*:");
            })), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function(e) {
                n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", I);
            }), d = d.length && RegExp(d.join("|")), g = g.length && RegExp(g.join("|")), y = Q.test(f.contains) || f.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, S = f.compareDocumentPosition ? function(e, r) {
                if (e === r) return E = !0, 0;
                var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
                return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, n) {
                var r, i = 0, o = e.parentNode, s = n.parentNode, a = [ e ], u = [ n ];
                if (e === n) return E = !0, 0;
                if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
                if (o === s) return ct(e, n);
                for (r = e; r = r.parentNode; ) a.unshift(r);
                for (r = n; r = r.parentNode; ) u.unshift(r);
                for (;a[i] === u[i]; ) i++;
                return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0;
            }, t) : p;
        }, ot.matches = function(e, t) {
            return ot(e, null, null, t);
        }, ot.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (i) {}
            return ot(t, p, null, [ e ]).length > 0;
        }, ot.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && c(e), y(e, t);
        }, ot.attr = function(e, t) {
            (e.ownerDocument || e) !== p && c(e);
            var r = i.attrHandle[t.toLowerCase()], o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
            return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o;
        }, ot.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, ot.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
                for (;t = e[o++]; ) t === e[o] && (i = r.push(o));
                for (;i--; ) e.splice(r[i], 1);
            }
            return e;
        }, o = ot.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r]; r++) n += o(t);
            return n;
        }, i = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: J,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || "").replace(nt, rt), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = C[e + " "];
                    return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ot.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, p, f, h, d, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, y = a && t.nodeName.toLowerCase(), x = !u && !a;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (p = t; p = p[g]; ) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    d = g = "only" === e && !d && "nextSibling";
                                }
                                return !0;
                            }
                            if (d = [ s ? m.firstChild : m.lastChild ], s && x) {
                                for (c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], 
                                p = h && m.childNodes[h]; p = ++h && p && p[g] || (f = h = 0) || d.pop(); ) if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [ w, h, f ];
                                    break;
                                }
                            } else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w) f = l[1]; else for (;(p = ++h && p && p[g] || (f = h = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (x && ((p[v] || (p[v] = {}))[e] = [ w, f ]), 
                            p !== t)); ) ;
                            return f -= i, f === r || 0 === f % r && f / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return r[v] ? r(t) : r.length > 1 ? (n = [ e, e, "", t ], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                        for (var i, o = r(e, t), s = o.length; s--; ) i = P.call(e, o[s]), e[i] = !(n[i] = o[s]);
                    }) : function(e) {
                        return r(e, 0, n);
                    }) : r;
                }
            },
            pseudos: {
                not: at(function(e) {
                    var t = [], n = [], r = a(e.replace(z, "$1"));
                    return r[v] ? at(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has: at(function(e) {
                    return function(t) {
                        return ot(e, t).length > 0;
                    };
                }),
                contains: at(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
                    };
                }),
                lang: at(function(e) {
                    return G.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(), 
                    function(t) {
                        var n;
                        do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === f;
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !i.pseudos.empty(e);
                },
                header: function(e) {
                    return et.test(e.nodeName);
                },
                input: function(e) {
                    return Z.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: ht(function() {
                    return [ 0 ];
                }),
                last: ht(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: ht(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: ht(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: ht(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: ht(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: ht(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r; ) e.push(r);
                    return e;
                })
            }
        }, i.pseudos.nth = i.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = pt(t);
        for (t in {
            submit: !0,
            reset: !0
        }) i.pseudos[t] = ft(t);
        dt.prototype = i.filters = i.pseudos, i.setFilters = new dt(), a = ot.compile = function(e, t) {
            var n, r = [], i = [], o = N[e + " "];
            if (!o) {
                for (t || (t = gt(e)), n = t.length; n--; ) o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
                o = N(e, Tt(i, r));
            }
            return o;
        }, n.sortStable = v.split("").sort(S).join("") === v, n.detectDuplicates = E, c(), 
        n.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"));
        }), ut(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || lt("type|href|height|width", function(e, t, n) {
            return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ut(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || lt("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue;
        }), ut(function(e) {
            return null == e.getAttribute("disabled");
        }) || lt(R, function(e, t, n) {
            var r;
            return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null;
        }), x.find = ot, x.expr = ot.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ot.uniqueSort, 
        x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains;
    }(e);
    var D = {};
    x.Callbacks = function(e) {
        e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);
        var t, n, r, i, o, s, a = [], u = !e.once && [], l = function(p) {
            for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++) if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break;
            }
            r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable());
        }, c = {
            add: function() {
                if (a) {
                    var n = a.length;
                    !function s(t) {
                        x.each(t, function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n);
                        });
                    }(arguments), r ? o = a.length : t && (i = n, l(t));
                }
                return this;
            },
            remove: function() {
                return a && x.each(arguments, function(e, t) {
                    for (var n; (n = x.inArray(t, a, n)) > -1; ) a.splice(n, 1), r && (o >= n && o--, 
                    s >= n && s--);
                }), this;
            },
            has: function(e) {
                return e ? x.inArray(e, a) > -1 : !(!a || !a.length);
            },
            empty: function() {
                return a = [], o = 0, this;
            },
            disable: function() {
                return a = u = t = undefined, this;
            },
            disabled: function() {
                return !a;
            },
            lock: function() {
                return u = undefined, t || c.disable(), this;
            },
            locked: function() {
                return !u;
            },
            fireWith: function(e, t) {
                return !a || n && !u || (t = t || [], t = [ e, t.slice ? t.slice() : t ], r ? u.push(t) : l(t)), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!n;
            }
        };
        return c;
    }, x.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", x.Callbacks("once memory"), "resolved" ], [ "reject", "fail", x.Callbacks("once memory"), "rejected" ], [ "notify", "progress", x.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t, function(t, o) {
                            var s = o[0], a = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = s.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var a, u, l, t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), s = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
                };
            };
            if (r > 1) for (a = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
            return i || o.resolveWith(l, n), o.promise();
        }
    }), x.support = function(t) {
        var n = o.createElement("input"), r = o.createDocumentFragment(), i = o.createElement("div"), s = o.createElement("select"), a = s.appendChild(o.createElement("option"));
        return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, 
        t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, 
        t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, 
        n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, 
        n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", 
        t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function() {
            var n, r, s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", a = o.getElementsByTagName("body")[0];
            a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
            x.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === i.offsetWidth;
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, 
            t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, 
            r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            a.removeChild(n));
        }), t) : t;
    }({});
    var L, q, H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g;
    F.uid = 1, F.accepts = function(e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
    }, F.prototype = {
        key: function(e) {
            if (!F.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = F.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t);
                } catch (r) {
                    t[this.expando] = n, x.extend(e, t);
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t) o[t] = n; else if (x.isEmptyObject(o)) x.extend(this.cache[i], t); else for (r in t) o[r] = t[r];
            return o;
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return t === undefined ? n : n[t];
        },
        access: function(e, t, n) {
            var r;
            return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t), 
            r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t);
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (t === undefined) this.cache[o] = {}; else {
                x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [ t, i ] : (r = i, 
                r = r in s ? [ r ] : r.match(w) || [])), n = r.length;
                for (;n--; ) delete s[r[n]];
            }
        },
        hasData: function(e) {
            return !x.isEmptyObject(this.cache[e[this.expando]] || {});
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]];
        }
    }, L = new F(), q = new F(), x.extend({
        acceptData: F.accepts,
        hasData: function(e) {
            return L.hasData(e) || q.hasData(e);
        },
        data: function(e, t, n) {
            return L.access(e, t, n);
        },
        removeData: function(e, t) {
            L.remove(e, t);
        },
        _data: function(e, t, n) {
            return q.access(e, t, n);
        },
        _removeData: function(e, t) {
            q.remove(e, t);
        }
    }), x.fn.extend({
        data: function(e, t) {
            var n, r, i = this[0], o = 0, s = null;
            if (e === undefined) {
                if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
                    for (n = i.attributes; n.length > o; o++) r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)), 
                    P(i, r, s[r]));
                    q.set(i, "hasDataAttrs", !0);
                }
                return s;
            }
            return "object" == typeof e ? this.each(function() {
                L.set(this, e);
            }) : x.access(this, function(t) {
                var n, r = x.camelCase(e);
                if (i && t === undefined) {
                    if (n = L.get(i, e), n !== undefined) return n;
                    if (n = L.get(i, r), n !== undefined) return n;
                    if (n = P(i, r, undefined), n !== undefined) return n;
                } else this.each(function() {
                    var n = L.get(this, r);
                    L.set(this, r, t), -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                L.remove(this, e);
            });
        }
    }), x.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), 
            r || []) : undefined;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), s = function() {
                x.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return q.get(e, n) || q.access(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    q.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--; ) n = q.get(o[s], e + "queueHooks"), 
            n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t);
        }
    });
    var R, M, W = /[\t\r\n\f]/g, $ = /\r/g, B = /^(?:input|select|textarea|button)$/i;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e];
            });
        },
        addClass: function(e) {
            var t, n, r, i, o, s = 0, a = this.length, u = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(w) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
                for (o = 0; i = t[o++]; ) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = x.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(w) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
                for (o = 0; i = t[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
                n.className = e ? x.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(x.isFunction(e) ? function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t);
            } : function() {
                if ("string" === n) for (var t, i = 0, o = x(this), s = e.match(w) || []; t = s[i++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else (n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = x.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function(e) {
                    return null == e ? "" : e + "";
                })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i));
            })) : i ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, 
            "string" == typeof n ? n.replace($, "") : null == n ? "" : n)) : void 0;
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++) if (n = r[u], 
                    !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), o) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = x.makeArray(t), s = i.length; s--; ) r = i[s], 
                    (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        },
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), 
            i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), 
            null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), 
            n) : (x.removeAttr(e, t), undefined)) : void 0;
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(w);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), 
            e.removeAttribute(n);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, 
            i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1;
                }
            }
        }
    }), M = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = x.expr.attrHandle[t] || x.find.attr;
        x.expr.attrHandle[t] = function(e, t, r) {
            var i = x.expr.attrHandle[t], o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
            return x.expr.attrHandle[t] = i, o;
        };
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        }
    }), x.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        x.propFix[this.toLowerCase()] = this;
    }), x.each([ "radio", "checkbox" ], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined;
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var I = /^key/, z = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, X = /^([^.]*)(?:\.(.+)|)$/;
    x.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, a, u, l, c, p, f, h, d, g, m, y = q.get(e);
            if (y) {
                for (n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), 
                (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function(e) {
                    return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments);
                }, a.elem = e), t = (t || "").match(w) || [ "" ], c = t.length; c--; ) u = X.exec(t[c]) || [], 
                d = m = u[1], g = (u[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, 
                d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), 
                f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), 
                x.event.global[d] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, p, f, h, d, g, m = q.hasData(e) && q.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(w) || [ "" ], l = t.length; l--; ) if (a = X.exec(t[l]) || [], 
                h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
                    for (p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], 
                    a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--; ) c = f[o], 
                    !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), 
                    c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
                    s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), 
                    delete u[h]);
                } else for (h in u) x.event.remove(e, h + t[l], n, r, !0);
                x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"));
            }
        },
        trigger: function(t, n, r, i) {
            var s, a, u, l, c, p, f, h = [ r || o ], d = y.call(t, "type") ? t.type : t, g = y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), 
            d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == typeof t && t), 
            t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = undefined, t.target || (t.target = r), n = null == n ? [ t ] : x.makeArray(n, [ t ]), 
            f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !x.isWindow(r)) {
                    for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
                    u = a;
                    u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e);
                }
                for (s = 0; (a = h[s++]) && !t.isPropagationStopped(); ) t.type = s > 1 ? l : f.bindType || d, 
                p = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), p && p.apply(a, n), 
                p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], 
                u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, 
                u && (r[c] = u)), t.result;
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var t, n, r, i, o, s = [], a = d.call(arguments), u = (q.get(this, "events") || {})[e.type] || [], l = x.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = x.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = i.elem, 
                n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, 
                e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), 
                r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type)) for (;u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
                for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [ u ]).length), 
                r[i] && r.push(o);
                r.length && s.push({
                    elem: u,
                    handlers: r
                });
            }
            return t.length > a && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, 
                r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), 
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), 
                e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), 
                e;
            }
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type, s = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), 
            r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length; t--; ) n = r[t], 
            e[n] = s[n];
            return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            a.filter ? a.filter(e, s) : e;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== V() && this.focus ? (this.focus(), !1) : undefined;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === V() && this.blur ? (this.blur(), !1) : undefined;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), 
                    !1) : undefined;
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    }, x.Event = function(e, t) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, 
        t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, 
        undefined) : new x.Event(e, t);
    }, x.Event.prototype = {
        isDefaultPrevented: Y,
        isPropagationStopped: Y,
        isImmediatePropagationStopped: Y,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = U, this.stopPropagation();
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0);
        };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && o.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 === --n && o.removeEventListener(e, r, !0);
            }
        };
    }), x.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = undefined);
                for (s in e) this.on(s, t, n, e[s], i);
                return this;
            }
            if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, 
            n = undefined) : (r = n, n = t, t = undefined)), r === !1) r = Y; else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return x().off(e), o.apply(this, arguments);
            }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, r, n, t);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), 
            this.each(function() {
                x.event.remove(this, e, n, t);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? x.event.trigger(e, t, n, !0) : undefined;
        }
    });
    var G = /^.[^:#\[\.,]*$/, J = /^(?:parents|prev(?:Until|All))/, Q = x.expr.match.needsContext, K = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0;
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        has: function(e) {
            var t = x(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (x.contains(this, t[e])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(et(this, e || [], !0));
        },
        filter: function(e) {
            return this.pushStack(et(this, e || [], !1));
        },
        is: function(e) {
            return !!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length;
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                n = o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [ e ] : e), r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return x.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n);
        },
        next: function(e) {
            return Z(e, "nextSibling");
        },
        prev: function(e) {
            return Z(e, "previousSibling");
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return x.sibling(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || x.merge([], e.childNodes);
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), 
            this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i);
        };
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [ r ] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType;
            }));
        },
        dir: function(e, t, n) {
            for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                if (i && x(e).is(n)) break;
                r.push(e);
            }
            return r;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, nt = /<([\w:]+)/, rt = /<|&#?\w+;/, it = /<(?:script|style|link)/i, ot = /^(?:checkbox|radio)$/i, st = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^$|\/(?:java|ecma)script/i, ut = /^true\/(.*)/, lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, 
    ct.th = ct.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pt(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pt(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, r = e ? x.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(mt(n)), 
            n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(mt(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t);
            });
        },
        html: function(e) {
            return x.access(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(tt, "<$1></$2>");
                    try {
                        for (;r > n; n++) t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (i) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [ e.nextSibling, e.parentNode ];
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
            }, !0), t ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t, n) {
            e = f.apply([], e);
            var r, i, o, s, a, u, l = 0, c = this.length, p = this, h = c - 1, d = e[0], g = x.isFunction(d);
            if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
            });
            if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 
            1 === r.childNodes.length && (r = i), i)) {
                for (o = x.map(mt(r, "script"), ft), s = o.length; c > l; l++) a = r, l !== h && (a = x.clone(a, !0, !0), 
                s && x.merge(o, mt(a, "script"))), t.call(this[l], a, l);
                if (s) for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++) a = o[l], 
                at.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, "")));
            }
            return this;
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            for (var n, r = [], i = x(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), 
            x(i[s])[t](n), h.apply(r, n.get());
            return this.pushStack(r);
        };
    }), x.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = x.contains(e.ownerDocument, e);
            if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (s = mt(a), 
            o = mt(e), r = 0, i = o.length; i > r; r++) yt(o[r], s[r]);
            if (t) if (n) for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++) gt(o[r], s[r]); else gt(e, a);
            return s = mt(a, "script"), s.length > 0 && dt(s, !u && mt(e, "script")), a;
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = 0, p = e.length, f = t.createDocumentFragment(), h = []; p > c; c++) if (i = e[c], 
            i || 0 === i) if ("object" === x.type(i)) x.merge(h, i.nodeType ? [ i ] : i); else if (rt.test(i)) {
                for (o = o || f.appendChild(t.createElement("div")), s = (nt.exec(i) || [ "", "" ])[1].toLowerCase(), 
                a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2], 
                l = a[0]; l--; ) o = o.lastChild;
                x.merge(h, o.childNodes), o = f.firstChild, o.textContent = "";
            } else h.push(t.createTextNode(i));
            for (f.textContent = "", c = 0; i = h[c++]; ) if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), 
            o = mt(f.appendChild(i), "script"), u && dt(o), n)) for (l = 0; i = o[l++]; ) at.test(i.type || "") && n.push(i);
            return f;
        },
        cleanData: function(e) {
            for (var t, n, r, i, o, s, a = x.event.special, u = 0; (n = e[u]) !== undefined; u++) {
                if (F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o]))) {
                    if (r = Object.keys(t.events || {}), r.length) for (s = 0; (i = r[s]) !== undefined; s++) a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                    q.cache[o] && delete q.cache[o];
                }
                delete L.cache[n[L.expando]];
            }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            var t;
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapAll(e.call(this, t));
            }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), 
            t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this);
        },
        wrapInner: function(e) {
            return this.each(x.isFunction(e) ? function(t) {
                x(this).wrapInner(e.call(this, t));
            } : function() {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var vt, xt, bt = /^(none|table(?!-c[ea]).+)/, wt = /^margin/, Tt = RegExp("^(" + b + ")(.*)$", "i"), Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"), kt = RegExp("^([+-])=(" + b + ")", "i"), Nt = {
        BODY: "block"
    }, Et = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, St = {
        letterSpacing: 0,
        fontWeight: 400
    }, jt = [ "Top", "Right", "Bottom", "Left" ], Dt = [ "Webkit", "O", "Moz", "ms" ];
    x.fn.extend({
        css: function(e, t) {
            return x.access(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (x.isArray(t)) {
                    for (r = qt(e), i = t.length; i > s; s++) o[t[s]] = x.css(e, t[s], !1, r);
                    return o;
                }
                return n !== undefined ? x.style(e, t, n) : x.css(e, t);
            }, e, t, arguments.length > 1);
        },
        show: function() {
            return Ht(this, !0);
        },
        hide: function() {
            return Ht(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Lt(this) ? x(this).show() : x(this).hide();
            });
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = vt(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = x.camelCase(t), u = e.style;
                return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], 
                n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, 
                "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), 
                o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), 
                x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined);
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = x.camelCase(t);
            return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], 
            s && "get" in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), 
            "normal" === i && t in St && (i = St[t]), "" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i;
        }
    }), vt = function(e, t, n) {
        var r, i, o, s = n || qt(e), a = s ? s.getPropertyValue(t) || s[t] : undefined, u = e.style;
        return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), 
        Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, 
        a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a;
    }, x.each([ "height", "width" ], function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function() {
                    return Pt(e, t, r);
                }) : Pt(e, t, r) : undefined;
            },
            set: function(e, n, r) {
                var i = r && qt(e);
                return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, t) {
                return t ? x.swap(e, {
                    display: "inline-block"
                }, vt, [ e, "marginRight" ]) : undefined;
            }
        }), !x.support.pixelPosition && x.fn.position && x.each([ "top", "left" ], function(e, t) {
            x.cssHooks[t] = {
                get: function(e, n) {
                    return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined;
                }
            };
        });
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e);
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, wt.test(e) || (x.cssHooks[e + t].set = Ot);
    });
    var Wt = /%20/g, $t = /\[\]$/, Bt = /\r?\n/g, It = /^(?:submit|button|image|reset|file)$/i, zt = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e));
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Bt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Bt, "\r\n")
                };
            }).get();
        }
    }), x.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) _t(n, e[n], t, i);
        return r.join("&").replace(Wt, "+");
    }, x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var Xt, Ut, Yt = x.now(), Vt = /\?/, Gt = /#.*$/, Jt = /([?&])_=[^&]*/, Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nn = x.fn.load, rn = {}, on = {}, sn = "*/".concat("*");
    try {
        Ut = i.href;
    } catch (an) {
        Ut = o.createElement("a"), Ut.href = "", Ut = Ut.href;
    }
    Xt = tn.exec(Ut.toLowerCase()) || [], x.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, 
        t = undefined) : t && "object" == typeof t && (i = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e);
        }).complete(n && function(e, t) {
            s.each(n, o || [ e.responseText, t, e ]);
        }), this;
    }, x.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ut,
            type: "GET",
            isLocal: Kt.test(Xt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e);
        },
        ajaxPrefilter: un(rn),
        ajaxTransport: un(on),
        ajax: function(e, t) {
            function k(e, t, o, a) {
                var l, m, y, b, w, C = t;
                2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, 
                l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), 
                l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), 
                w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, 
                m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), 
                T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [ m, C, T ]) : h.rejectWith(p, [ T, C, y ]), 
                T.statusCode(g), g = undefined, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [ T, c, l ? m : y ]), 
                d.fireWith(p, [ T, C ]), u && (f.trigger("ajaxComplete", [ T, c ]), --x.active || x.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t), p = c.context || c, f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event, h = x.Deferred(), d = x.Callbacks("once memory"), g = c.statusCode || {}, m = {}, y = {}, v = 0, b = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === v) {
                        if (!o) for (o = {}; t = Qt.exec(i); ) o[t[1].toLowerCase()] = t[2];
                        t = o[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? i : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return v || (e = y[n] = y[n] || e, m[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return v || (c.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > v) for (t in e) g[t] = [ g[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || b;
                    return n && n.abort(t), k(0, t), this;
                }
            };
            if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"), 
            c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [ "" ], 
            null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), 
            c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), 
            ln(rn, c, t, T), 2 === v) return T;
            u = c.global, u && 0 === x.active++ && x.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), 
            c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data, 
            delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)), 
            c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), 
            x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), 
            T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) T.setRequestHeader(l, c.headers[l]);
            if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v)) return T.abort();
            b = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) T[l](c[l]);
            if (n = ln(on, c, t, T)) {
                T.readyState = 1, u && f.trigger("ajaxSend", [ T, c ]), c.async && c.timeout > 0 && (s = setTimeout(function() {
                    T.abort("timeout");
                }, c.timeout));
                try {
                    v = 1, n.send(m, k);
                } catch (C) {
                    if (!(2 > v)) throw C;
                    k(-1, C);
                }
            } else k(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return x.get(e, undefined, t, "script");
        }
    }), x.each([ "get", "post" ], function(e, t) {
        x[t] = function(e, n, r, i) {
            return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            });
        };
    }), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e;
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = x("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
                    }), o.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var hn = [], dn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = hn.pop() || x.expando + "_" + Yt++;
            return this[e] = !0, e;
        }
    }), x.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
        t.converters["script json"] = function() {
            return s || x.error(i + " was not called"), s[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments;
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), 
            s = o = undefined;
        }), "script") : undefined;
    }), x.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };
    var gn = x.ajaxSettings.xhr(), mn = {
        0: 200,
        1223: 204
    }, yn = 0, vn = {};
    e.ActiveXObject && x(e).on("unload", function() {
        for (var e in vn) vn[e]();
        vn = undefined;
    }), x.support.cors = !!gn && "withCredentials" in gn, x.support.ajax = gn = !!gn, 
    x.ajaxTransport(function(e) {
        var t;
        return x.support.cors || gn && !e.crossDomain ? {
            send: function(n, r) {
                var i, o, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) s[i] = e.xhrFields[i];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) s.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete vn[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : undefined, s.getAllResponseHeaders()));
                    };
                }, s.onload = t(), s.onerror = t("error"), t = vn[o = yn++] = t("abort"), s.send(e.hasContent && e.data || null);
            },
            abort: function() {
                t && t();
            }
        } : undefined;
    });
    var xn, bn, wn = /^(?:toggle|show|hide)$/, Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"), Cn = /queueHooks$/, kn = [ An ], Nn = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Tn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e)), a = 1, u = 20;
            if (s && s[3] !== o) {
                o = o || s[3], i = i || [], s = +r || 1;
                do a = a || ".5", s /= a, x.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u);
            }
            return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), 
            n;
        } ]
    };
    x.Animation = x.extend(jn, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? kn.unshift(e) : kn.push(e);
        }
    }), x.Tween = Ln, Ln.prototype = {
        constructor: Ln,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = Ln.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ln.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = Ln.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this;
        }
    }, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, x.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i);
        };
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Lt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e), o = x.speed(t, n, r), s = function() {
                var t = jn(this, x.extend({}, e), o);
                (i || q.get(this, "finish")) && t.stop(!0);
            };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, i = null != e && e + "queueHooks", o = x.timers, s = q.get(this);
                if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && Cn.test(i) && r(s[i]);
                for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                t = !1, o.splice(i, 1));
                (t || !n) && x.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = q.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, s = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), x.each({
        slideDown: qn("show"),
        slideUp: qn("hide"),
        slideToggle: qn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
        }, r;
    }, x.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function() {
        var e, t = x.timers, n = 0;
        for (xn = x.now(); t.length > n; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || x.fx.stop(), xn = undefined;
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start();
    }, x.fx.interval = 13, x.fx.start = function() {
        bn || (bn = setInterval(x.fx.tick, x.fx.interval));
    }, x.fx.stop = function() {
        clearInterval(bn), bn = null;
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem;
        }).length;
    }), x.fn.offset = function(e) {
        if (arguments.length) return e === undefined ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t);
        });
        var t, n, i = this[0], o = {
            top: 0,
            left: 0
        }, s = i && i.ownerDocument;
        return s ? (t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), 
        n = Hn(s), {
            top: o.top + n.pageYOffset - t.clientTop,
            left: o.left + n.pageXOffset - t.clientLeft
        }) : o) : void 0;
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = x.css(e, "position"), p = x(e), f = {};
            "static" === c && (e.style.position = "relative"), a = p.offset(), o = x.css(e, "top"), 
            u = x.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, 
            l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), 
            x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), 
            null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : p.css(f);
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), 
                r.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - x.css(n, "marginTop", !0),
                    left: t.left - r.left - x.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || s; e && !x.nodeName(e, "html") && "static" === x.css(e, "position"); ) e = e.offsetParent;
                return e || s;
            });
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        x.fn[t] = function(i) {
            return x.access(this, function(t, i, o) {
                var s = Hn(t);
                return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, 
                undefined);
            }, t, i, arguments.length, null);
        };
    }), x.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            x.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
                return x.access(this, function(t, n, r) {
                    var i;
                    return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s);
                }, t, o ? r : undefined, o, null);
            };
        });
    }), x.fn.size = function() {
        return this.length;
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function() {
        return x;
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = x);
}(window), !function(e) {
    "use strict";
    e(function() {
        e.support.transition = function() {
            var e = function() {
                var n, e = document.createElement("bootstrap"), t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (n in t) if (void 0 !== e.style[n]) return t[n];
            }();
            return e && {
                end: e
            };
        }();
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]', n = function(n) {
        e(n).on("click", t, this.close);
    };
    n.prototype.close = function(t) {
        function s() {
            i.trigger("closed").remove();
        }
        var i, n = e(this), r = n.attr("data-target");
        r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = e(r), t && t.preventDefault(), 
        i.length || (i = n.hasClass("alert") ? n : n.parent()), i.trigger(t = e.Event("close")), 
        t.isDefaultPrevented() || (i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, s) : s());
    };
    var r = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each(function() {
            var r = e(this), i = r.data("alert");
            i || r.data("alert", i = new n(this)), "string" == typeof t && i[t].call(r);
        });
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this;
    }, e(document).on("click.alert.data-api", t, n.prototype.close);
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n);
    };
    t.prototype.setState = function(e) {
        var t = "disabled", n = this.$element, r = n.data(), i = n.is("input") ? "val" : "html";
        e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), 
        setTimeout(function() {
            "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t);
        }, 0);
    }, t.prototype.toggle = function() {
        var e = this.$element.closest('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active"), this.$element.toggleClass("active");
    };
    var n = e.fn.button;
    e.fn.button = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("button"), s = "object" == typeof n && n;
            i || r.data("button", i = new t(this, s)), "toggle" == n ? i.toggle() : n && i.setState(n);
        });
    }, e.fn.button.defaults = {
        loadingText: "loading..."
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
        return e.fn.button = n, this;
    }, e(document).on("click.button.data-api", "[data-toggle^=button]", function(t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle");
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = n, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this));
    };
    t.prototype = {
        cycle: function(t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), 
            this;
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), 
            this.$items.index(this.$active);
        },
        to: function(t) {
            var n = this.getActiveIndex(), r = this;
            if (!(t > this.$items.length - 1 || 0 > t)) return this.sliding ? this.$element.one("slid", function() {
                r.to(t);
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]));
        },
        pause: function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), 
            this.cycle(!0)), clearInterval(this.interval), this.interval = null, this;
        },
        next: function() {
            return this.sliding ? void 0 : this.slide("next");
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide("prev");
        },
        slide: function(t, n) {
            var f, r = this.$element.find(".item.active"), i = n || r[t](), s = this.interval, o = "next" == t ? "left" : "right", u = "next" == t ? "first" : "last", a = this;
            if (this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u](), 
            f = e.Event("slide", {
                relatedTarget: i[0],
                direction: o
            }), !i.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
                this.$element.one("slid", function() {
                    var t = e(a.$indicators.children()[a.getActiveIndex()]);
                    t && t.addClass("active");
                })), e.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(f), f.isDefaultPrevented()) return;
                    i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.one(e.support.transition.end, function() {
                        i.removeClass([ t, o ].join(" ")).addClass("active"), r.removeClass([ "active", o ].join(" ")), 
                        a.sliding = !1, setTimeout(function() {
                            a.$element.trigger("slid");
                        }, 0);
                    });
                } else {
                    if (this.$element.trigger(f), f.isDefaultPrevented()) return;
                    r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid");
                }
                return s && this.cycle(), this;
            }
        }
    };
    var n = e.fn.carousel;
    e.fn.carousel = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("carousel"), s = e.extend({}, e.fn.carousel.defaults, "object" == typeof n && n), o = "string" == typeof n ? n : s.slide;
            i || r.data("carousel", i = new t(this, s)), "number" == typeof n ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle();
        });
    }, e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = n, this;
    }, e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var r, o, n = e(this), i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")), s = e.extend({}, i.data(), n.data());
        i.carousel(s), (o = n.attr("data-slide-to")) && i.data("carousel").pause().to(o).cycle(), 
        t.preventDefault();
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), 
        this.options.toggle && this.toggle();
    };
    t.prototype = {
        constructor: t,
        dimension: function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height";
        },
        show: function() {
            var t, n, r, i;
            if (!this.transitioning && !this.$element.hasClass("in")) {
                if (t = this.dimension(), n = e.camelCase([ "scroll", t ].join("-")), r = this.$parent && this.$parent.find("> .accordion-group > .in"), 
                r && r.length) {
                    if (i = r.data("collapse"), i && i.transitioning) return;
                    r.collapse("hide"), i || r.data("collapse", null);
                }
                this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n]);
            }
        },
        hide: function() {
            var t;
            !this.transitioning && this.$element.hasClass("in") && (t = this.dimension(), this.reset(this.$element[t]()), 
            this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0));
        },
        reset: function(e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null !== e ? "addClass" : "removeClass"]("collapse"), 
            this;
        },
        transition: function(t, n, r) {
            var i = this, s = function() {
                "show" == n.type && i.reset(), i.transitioning = 0, i.$element.trigger(r);
            };
            this.$element.trigger(n), n.isDefaultPrevented() || (this.transitioning = 1, this.$element[t]("in"), 
            e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s());
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]();
        }
    };
    var n = e.fn.collapse;
    e.fn.collapse = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("collapse"), s = e.extend({}, e.fn.collapse.defaults, r.data(), "object" == typeof n && n);
            i || r.data("collapse", i = new t(this, s)), "string" == typeof n && i[n]();
        });
    }, e.fn.collapse.defaults = {
        toggle: !0
    }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = n, this;
    }, e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
        var r, n = e(this), i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""), s = e(i).data("collapse") ? "toggle" : n.data();
        n[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(i).collapse(s);
    });
}(window.jQuery), !function(e) {
    "use strict";
    function r() {
        e(".dropdown-backdrop").remove(), e(t).each(function() {
            i(e(this)).removeClass("open");
        });
    }
    function i(t) {
        var r, n = t.attr("data-target");
        return n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), 
        r = n && e(n), r && r.length || (r = t.parent()), r;
    }
    var t = "[data-toggle=dropdown]", n = function(t) {
        var n = e(t).on("click.dropdown.data-api", this.toggle);
        e("html").on("click.dropdown.data-api", function() {
            n.parent().removeClass("open");
        });
    };
    n.prototype = {
        constructor: n,
        toggle: function() {
            var s, o, n = e(this);
            if (!n.is(".disabled, :disabled")) return s = i(n), o = s.hasClass("open"), r(), 
            o || ("ontouchstart" in document.documentElement && e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click", r), 
            s.toggleClass("open")), n.focus(), !1;
        },
        keydown: function(n) {
            var r, s, u, a, f;
            if (/(38|40|27)/.test(n.keyCode) && (r = e(this), n.preventDefault(), n.stopPropagation(), 
            !r.is(".disabled, :disabled"))) {
                if (u = i(r), a = u.hasClass("open"), !a || a && 27 == n.keyCode) return 27 == n.which && u.find(t).focus(), 
                r.click();
                s = e("[role=menu] li:not(.divider):visible a", u), s.length && (f = s.index(s.filter(":focus")), 
                38 == n.keyCode && f > 0 && f--, 40 == n.keyCode && f < s.length - 1 && f++, ~f || (f = 0), 
                s.eq(f).focus());
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var r = e(this), i = r.data("dropdown");
            i || r.data("dropdown", i = new n(this)), "string" == typeof t && i[t].call(r);
        });
    }, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this;
    }, e(document).on("click.dropdown.data-api", r).on("click.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown);
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), 
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
    };
    t.prototype = {
        constructor: t,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]();
        },
        show: function() {
            var t = this, n = e.Event("show");
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, 
            this.escape(), this.backdrop(function() {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), 
                n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), 
                t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
                    t.$element.focus().trigger("shown");
                }) : t.$element.focus().trigger("shown");
            }));
        },
        hide: function(t) {
            t && t.preventDefault();
            t = e.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, 
            this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), 
            e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal());
        },
        enforceFocus: function() {
            var t = this;
            e(document).on("focusin.modal", function(e) {
                t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus();
            });
        },
        escape: function() {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                27 == t.which && e.hide();
            }) : this.isShown || this.$element.off("keyup.dismiss.modal");
        },
        hideWithTransition: function() {
            var t = this, n = setTimeout(function() {
                t.$element.off(e.support.transition.end), t.hideModal();
            }, 500);
            this.$element.one(e.support.transition.end, function() {
                clearTimeout(n), t.hideModal();
            });
        },
        hideModal: function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.removeBackdrop(), e.$element.trigger("hidden");
            });
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
        },
        backdrop: function(t) {
            var r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && r;
                if (this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), 
                this.$backdrop.click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), 
                i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                i ? this.$backdrop.one(e.support.transition.end, t) : t();
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t();
        }
    };
    var n = e.fn.modal;
    e.fn.modal = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("modal"), s = e.extend({}, e.fn.modal.defaults, r.data(), "object" == typeof n && n);
            i || r.data("modal", i = new t(this, s)), "string" == typeof n ? i[n]() : s.show && i.show();
        });
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = n, this;
    }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
        var n = e(this), r = n.attr("href"), i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), s = i.data("modal") ? "toggle" : e.extend({
            remote: !/#/.test(r) && r
        }, i.data(), n.data());
        t.preventDefault(), i.modal(s).one("hide", function() {
            n.focus();
        });
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("tooltip", e, t);
    };
    t.prototype = {
        constructor: t,
        init: function(t, n, r) {
            var i, s, o, u, a;
            for (this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, 
            o = this.options.trigger.split(" "), a = o.length; a--; ) u = o[a], "click" == u ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != u && (i = "hover" == u ? "mouseenter" : "focus", 
            s = "hover" == u ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this)), 
            this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle();
        },
        getOptions: function(t) {
            return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t;
        },
        enter: function(t) {
            var i, n = e.fn[this.type].defaults, r = {};
            return this._options && e.each(this._options, function(e, t) {
                n[e] != t && (r[e] = t);
            }, this), i = e(t.currentTarget)[this.type](r).data(this.type), i.options.delay && i.options.delay.show ? (clearTimeout(this.timeout), 
            i.hoverState = "in", this.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show();
            }, i.options.delay.show), void 0) : i.show();
        },
        leave: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", 
            void (this.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide();
            }, n.options.delay.hide))) : n.hide();
        },
        show: function() {
            var t, n, r, i, s, o, u = e.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                switch (t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), 
                s = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, 
                t.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), 
                n = this.getPosition(), r = t[0].offsetWidth, i = t[0].offsetHeight, s) {
                  case "bottom":
                    o = {
                        top: n.top + n.height,
                        left: n.left + n.width / 2 - r / 2
                    };
                    break;

                  case "top":
                    o = {
                        top: n.top - i,
                        left: n.left + n.width / 2 - r / 2
                    };
                    break;

                  case "left":
                    o = {
                        top: n.top + n.height / 2 - i / 2,
                        left: n.left - r
                    };
                    break;

                  case "right":
                    o = {
                        top: n.top + n.height / 2 - i / 2,
                        left: n.left + n.width
                    };
                }
                this.applyPlacement(o, s), this.$element.trigger("shown");
            }
        },
        applyPlacement: function(e, t) {
            var s, o, u, a, n = this.tip(), r = n[0].offsetWidth, i = n[0].offsetHeight;
            n.offset(e).addClass(t).addClass("in"), s = n[0].offsetWidth, o = n[0].offsetHeight, 
            "top" == t && o != i && (e.top = e.top + i - o, a = !0), "bottom" == t || "top" == t ? (u = 0, 
            e.left < 0 && (u = -2 * e.left, e.left = 0, n.offset(e), s = n[0].offsetWidth, o = n[0].offsetHeight), 
            this.replaceArrow(u - r + s, s, "left")) : this.replaceArrow(o - i, o, "top"), a && n.offset(e);
        },
        replaceArrow: function(e, t, n) {
            this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "");
        },
        setContent: function() {
            var e = this.tip(), t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right");
        },
        hide: function() {
            function i() {
                var t = setTimeout(function() {
                    n.off(e.support.transition.end).detach();
                }, 500);
                n.one(e.support.transition.end, function() {
                    clearTimeout(t), n.detach();
                });
            }
            var n = this.tip(), r = e.Event("hide");
            return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (n.removeClass("in"), 
            e.support.transition && this.$tip.hasClass("fade") ? i() : n.detach(), this.$element.trigger("hidden"), 
            this);
        },
        fixTitle: function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "");
        },
        hasContent: function() {
            return this.getTitle();
        },
        getPosition: function() {
            var t = this.$element[0];
            return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset());
        },
        getTitle: function() {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title);
        },
        tip: function() {
            return this.$tip = this.$tip || e(this.options.template);
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
        },
        enable: function() {
            this.enabled = !0;
        },
        disable: function() {
            this.enabled = !1;
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled;
        },
        toggle: function(t) {
            var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
            n.tip().hasClass("in") ? n.hide() : n.show();
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("tooltip"), s = "object" == typeof n && n;
            i || r.data("tooltip", i = new t(this, s)), "string" == typeof n && i[n]();
        });
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this;
    };
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t);
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function() {
            var e = this.tip(), t = this.getTitle(), n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), 
            e.removeClass("fade top bottom left right in");
        },
        hasContent: function() {
            return this.getTitle() || this.getContent();
        },
        getContent: function() {
            var e, t = this.$element, n = this.options;
            return e = ("function" == typeof n.content ? n.content.call(t[0]) : n.content) || t.attr("data-content");
        },
        tip: function() {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip;
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    });
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("popover"), s = "object" == typeof n && n;
            i || r.data("popover", i = new t(this, s)), "string" == typeof n && i[n]();
        });
    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this;
    };
}(window.jQuery), !function(e) {
    "use strict";
    function t(t, n) {
        var s, r = e.proxy(this.process, this), i = e(e(t).is("body") ? window : t);
        this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on("scroll.scroll-spy.data-api", r), 
        this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
        this.$body = e("body"), this.refresh(), this.process();
    }
    t.prototype = {
        constructor: t,
        refresh: function() {
            var n, t = this;
            this.offsets = e([]), this.targets = e([]), n = this.$body.find(this.selector).map(function() {
                var n = e(this), r = n.data("target") || n.attr("href"), i = /^#\w/.test(r) && e(r);
                return i && i.length && [ [ i.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r ] ] || null;
            }).sort(function(e, t) {
                return e[0] - t[0];
            }).each(function() {
                t.offsets.push(this[0]), t.targets.push(this[1]);
            });
        },
        process: function() {
            var o, e = this.$scrollElement.scrollTop() + this.options.offset, t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, n = t - this.$scrollElement.height(), r = this.offsets, i = this.targets, s = this.activeTarget;
            if (e >= n) return s != (o = i.last()[0]) && this.activate(o);
            for (o = r.length; o--; ) s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o]);
        },
        activate: function(t) {
            var n, r;
            this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), 
            r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', 
            n = e(r).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), 
            n.trigger("activate");
        }
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("scrollspy"), s = "object" == typeof n && n;
            i || r.data("scrollspy", i = new t(this, s)), "string" == typeof n && i[n]();
        });
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
        offset: 10
    }, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = n, this;
    }, e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data());
        });
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t);
    };
    t.prototype = {
        constructor: t,
        show: function() {
            var i, s, o, t = this.element, n = t.closest("ul:not(.dropdown-menu)"), r = t.attr("data-target");
            r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), t.parent("li").hasClass("active") || (i = n.find(".active:last a")[0], 
            o = e.Event("show", {
                relatedTarget: i
            }), t.trigger(o), o.isDefaultPrevented() || (s = e(r), this.activate(t.parent("li"), n), 
            this.activate(s, s.parent(), function() {
                t.trigger({
                    type: "shown",
                    relatedTarget: i
                });
            })));
        },
        activate: function(t, n, r) {
            function o() {
                i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
                t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), 
                t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r();
            }
            var i = n.find("> .active"), s = r && e.support.transition && i.hasClass("fade");
            s ? i.one(e.support.transition.end, o) : o(), i.removeClass("in");
        }
    };
    var n = e.fn.tab;
    e.fn.tab = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("tab");
            i || r.data("tab", i = new t(this)), "string" == typeof n && i[n]();
        });
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
        return e.fn.tab = n, this;
    }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(), e(this).tab("show");
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, 
        this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, 
        this.updater = this.options.updater || this.updater, this.source = this.options.source, 
        this.$menu = e(this.options.menu), this.shown = !1, this.listen();
    };
    t.prototype = {
        constructor: t,
        select: function() {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(), this.hide();
        },
        updater: function(e) {
            return e;
        },
        show: function() {
            var t = e.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: t.top + t.height,
                left: t.left
            }).show(), this.shown = !0, this;
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this;
        },
        lookup: function() {
            var n;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, 
            n ? this.process(n) : this);
        },
        process: function(t) {
            var n = this;
            return t = e.grep(t, function(e) {
                return n.matcher(e);
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this;
        },
        matcher: function(e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase());
        },
        sorter: function(e) {
            for (var i, t = [], n = [], r = []; i = e.shift(); ) i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
            return t.concat(n, r);
        },
        highlighter: function(e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                return "<strong>" + t + "</strong>";
            });
        },
        render: function(t) {
            var n = this;
            return t = e(t).map(function(t, r) {
                return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), 
                t[0];
            }), t.first().addClass("active"), this.$menu.html(t), this;
        },
        next: function() {
            var n = this.$menu.find(".active").removeClass("active"), r = n.next();
            r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active");
        },
        prev: function() {
            var t = this.$menu.find(".active").removeClass("active"), n = t.prev();
            n.length || (n = this.$menu.find("li").last()), n.addClass("active");
        },
        listen: function() {
            this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), 
            this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)), 
            this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this));
        },
        eventSupported: function(e) {
            var t = e in this.$element;
            return t || (this.$element.setAttribute(e, "return;"), t = "function" == typeof this.$element[e]), 
            t;
        },
        move: function(e) {
            if (this.shown) {
                switch (e.keyCode) {
                  case 9:
                  case 13:
                  case 27:
                    e.preventDefault();
                    break;

                  case 38:
                    e.preventDefault(), this.prev();
                    break;

                  case 40:
                    e.preventDefault(), this.next();
                }
                e.stopPropagation();
            }
        },
        keydown: function(t) {
            this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [ 40, 38, 9, 13, 27 ]), this.move(t);
        },
        keypress: function(e) {
            this.suppressKeyPressRepeat || this.move(e);
        },
        keyup: function(e) {
            switch (e.keyCode) {
              case 40:
              case 38:
              case 16:
              case 17:
              case 18:
                break;

              case 9:
              case 13:
                if (!this.shown) return;
                this.select();
                break;

              case 27:
                if (!this.shown) return;
                this.hide();
                break;

              default:
                this.lookup();
            }
            e.stopPropagation(), e.preventDefault();
        },
        focus: function() {
            this.focused = !0;
        },
        blur: function() {
            this.focused = !1, !this.mousedover && this.shown && this.hide();
        },
        click: function(e) {
            e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus();
        },
        mouseenter: function(t) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active");
        },
        mouseleave: function() {
            this.mousedover = !1, !this.focused && this.shown && this.hide();
        }
    };
    var n = e.fn.typeahead;
    e.fn.typeahead = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("typeahead"), s = "object" == typeof n && n;
            i || r.data("typeahead", i = new t(this, s)), "string" == typeof n && i[n]();
        });
    }, e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function() {
        return e.fn.typeahead = n, this;
    }, e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
        var n = e(this);
        n.data("typeahead") || n.typeahead(n.data());
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function() {
            setTimeout(e.proxy(this.checkPosition, this), 1);
        }, this)), this.$element = e(t), this.checkPosition();
    };
    t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var a, t = e(document).height(), n = this.$window.scrollTop(), r = this.$element.offset(), i = this.options.offset, s = i.bottom, o = i.top, u = "affix affix-top affix-bottom";
            "object" != typeof i && (s = o = i), "function" == typeof o && (o = i.top()), "function" == typeof s && (s = i.bottom()), 
            a = null != this.unpin && n + this.unpin <= r.top ? !1 : null != s && r.top + this.$element.height() >= t - s ? "bottom" : null != o && o >= n ? "top" : !1, 
            this.affixed !== a && (this.affixed = a, this.unpin = "bottom" == a ? r.top - n : null, 
            this.$element.removeClass(u).addClass("affix" + (a ? "-" + a : "")));
        }
    };
    var n = e.fn.affix;
    e.fn.affix = function(n) {
        return this.each(function() {
            var r = e(this), i = r.data("affix"), s = "object" == typeof n && n;
            i || r.data("affix", i = new t(this, s)), "string" == typeof n && i[n]();
        });
    }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {
        offset: 0
    }, e.fn.affix.noConflict = function() {
        return e.fn.affix = n, this;
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this), n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), 
            n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n);
        });
    });
}(window.jQuery), function($) {
    var pullDown = function() {
        var self = this, enabled = !0;
        this.container, this.pullDown;
        var lastMoveEvent = null, nowMoveEvent = null, moving = !1, TOUCHSTART = "touchstart mousedown", TOUCHMOVE = "touchmove mousemove", TOUCHEND = "touchend mouseup";
        this.start = function(options) {
            return "undefined" == typeof options && (options = {}), "undefined" == typeof options.pullDown && (options.pullDown = $(".pull-down")), 
            "undefined" == typeof options.container && (options.container = $("body")), self.container = options.container, 
            self.pullDown = options.pullDown, stopListen(options.pullDown), listen(options.pullDown), 
            {
                start: self.start,
                enable: function() {
                    self.enable(options.pullDown);
                },
                disable: function() {
                    self.disable(options.pullDown);
                },
                loading: function(status) {
                    self.loading(status, options.pullDown);
                },
                element: options.pullDown,
                container: options.container
            };
        }, this.enable = function(pullDown) {
            pullDown.removeClass("disabled"), enabled = !0, this.start();
        }, this.disable = function(pullDown) {
            pullDown.addClass("disabled"), enabled = !1, this.start();
        }, this.loading = function(status, pullDown) {
            status === !0 ? (pullDown.addClass("working"), stopListen(pullDown), statusUpdate(pullDown)) : stopWorking($.Event("pullDownStopWorking"), pullDown);
        };
        var listen = function(pullDown) {
            return enabled === !1 ? unprepare() : (prepare(), pullDown.addClass("turn-on"), 
            hidePullDown(pullDown), pullDown.find(".stop").off("click"), void statusUpdate(pullDown));
        }, stopListen = function(pullDown) {
            pullDown.removeClass("turn-on"), hidePullDownAbove(pullDown), self.container.off(TOUCHMOVE), 
            self.container.off(TOUCHEND), pullDown.find(".stop").off("click").on("click", function(ev) {
                ev.preventDefault(), moving = !1, stopWorking(ev, pullDown);
            }), pullDown.find(".work").off("click").on("click", function(ev) {
                ev.preventDefault(), eventTriggerPullDown(pullDown), pullDown.addClass("working"), 
                stopListen(pullDown);
            });
        }, movingDuration = function(ev) {
            ev.preventDefault(), lastMoveEvent = nowMoveEvent, nowMoveEvent = ev, moving !== !1 && scrollAction(ev, self.pullDown);
        }, movingStart = function() {
            lastMoveEvent = null, moving = !0, self.container.off(TOUCHMOVE, movingDuration).on(TOUCHMOVE, movingDuration);
        }, movingEnd = function() {
            lastMoveEvent = null, nowMoveEvent = null, moving = !1, self.container.off(TOUCHMOVE), 
            scrolledAction(self.pullDown);
        }, prepare = function() {
            self.container.off(TOUCHSTART, movingStart).on(TOUCHSTART, movingStart), self.container.off(TOUCHEND, movingEnd).on(TOUCHEND, movingEnd);
        }, unprepare = function() {
            self.container.off(TOUCHMOVE, movingDuration), self.container.off(TOUCHSTART, movingStart), 
            self.container.off(TOUCHEND, movingEnd);
        }, scrollAction = function(ev, pullDown) {
            var scrollTop = getScrollUp(), deltaY = getDeltaY(ev), marginTop = getMarginTop(pullDown);
            0 == scrollTop && marginTop + deltaY > -getHeightPullDown(pullDown) && ("undefined" != typeof document.selection && document.selection.empty(), 
            "undefined" != typeof window.getSelection() && window.getSelection().removeAllRanges(), 
            ev.preventDefault(), pullDown.css("margin-top", marginTop + deltaY + "px"), scrollToTop(), 
            statusUpdate(pullDown));
        }, scrolledAction = function(pullDown) {
            pullDown.hasClass("pulled") ? (eventTriggerPullDown(pullDown), pullDown.addClass("working"), 
            stopListen(pullDown)) : pullDown.hasClass("down") && hidePullDown(pullDown), statusUpdate(pullDown);
        }, statusUpdate = function(pullDown) {
            var pullDownMarginTop = getMarginTop(pullDown);
            pullDownMarginTop > 200 ? pullDown.addClass("pulled") : pullDown.removeClass("pulled");
            var height = getHeightPullDown(pullDown);
            pullDownMarginTop > -height ? pullDown.addClass("down") : pullDown.removeClass("down");
        }, scrollToTop = function() {
            $("html, body").scrollTop(0);
        }, getMarginTop = function(pullDown) {
            return pullDown.outerHeight(!0) - pullDown.innerHeight();
        }, hidePullDown = function(pullDown) {
            var height = getHeightPullDown(pullDown);
            $(pullDown).animate({
                marginTop: -height - 1
            }, 500);
        }, hidePullDownAbove = function(pullDown) {
            getHeightPullDown(pullDown);
            $(pullDown).animate({
                marginTop: 0
            }, 500);
        }, getHeightPullDown = function(pullDown) {
            return pullDown.height();
        }, getScrollUp = function() {
            return $(window).scrollTop();
        }, stopWorking = function(ev, pullDown) {
            eventTriggerStopWorking(ev, pullDown), pullDown.removeClass("working"), listen(pullDown);
        }, eventTriggerStopWorking = function(ev, pullDown) {
            pullDown.trigger("pullDownStopWorking", ev);
        }, eventTriggerPullDown = function(pullDown) {
            var ev = $.Event("pullDown");
            ev.pullDownElement = pullDown, self.container.trigger("pullDown", ev);
        }, getDeltaY = function(ev) {
            if (null === lastMoveEvent) return 0;
            var touch = ev, lastTouch = lastMoveEvent;
            if ("touchmove" === ev.type) try {
                touch = ev.originalEvent.targetTouches[0], lastTouch = lastMoveEvent.originalEvent.targetTouches[0];
            } catch (e) {
                return console.log("Not supported multitouches"), 0;
            }
            var deltaY = touch.clientY - lastTouch.clientY;
            return deltaY > 100 ? 0 : deltaY;
        };
    };
    $.pullDown = new pullDown();
}(jQuery), function(window, document, undefined) {
    "use strict";
    function noConflict() {
        var a = window.angular;
        return window.angular = _angular, a;
    }
    function isArrayLike(obj) {
        return obj && "number" == typeof obj.length ? "function" != typeof obj.hasOwnProperty && "function" != typeof obj.constructor ? !0 : obj instanceof JQLite || jQuery && obj instanceof jQuery || "[object Object]" !== toString.call(obj) || "function" == typeof obj.callee : !1;
    }
    function forEach(obj, iterator, context) {
        var key;
        if (obj) if (isFunction(obj)) for (key in obj) "prototype" != key && "length" != key && "name" != key && obj.hasOwnProperty(key) && iterator.call(context, obj[key], key); else if (obj.forEach && obj.forEach !== forEach) obj.forEach(iterator, context); else if (isArrayLike(obj)) for (key = 0; key < obj.length; key++) iterator.call(context, obj[key], key); else for (key in obj) obj.hasOwnProperty(key) && iterator.call(context, obj[key], key);
        return obj;
    }
    function sortedKeys(obj) {
        var keys = [];
        for (var key in obj) obj.hasOwnProperty(key) && keys.push(key);
        return keys.sort();
    }
    function forEachSorted(obj, iterator, context) {
        for (var keys = sortedKeys(obj), i = 0; i < keys.length; i++) iterator.call(context, obj[keys[i]], keys[i]);
        return keys;
    }
    function reverseParams(iteratorFn) {
        return function(value, key) {
            iteratorFn(key, value);
        };
    }
    function nextUid() {
        for (var digit, index = uid.length; index; ) {
            if (index--, digit = uid[index].charCodeAt(0), 57 == digit) return uid[index] = "A", 
            uid.join("");
            if (90 != digit) return uid[index] = String.fromCharCode(digit + 1), uid.join("");
            uid[index] = "0";
        }
        return uid.unshift("0"), uid.join("");
    }
    function setHashKey(obj, h) {
        h ? obj.$$hashKey = h : delete obj.$$hashKey;
    }
    function extend(dst) {
        var h = dst.$$hashKey;
        return forEach(arguments, function(obj) {
            obj !== dst && forEach(obj, function(value, key) {
                dst[key] = value;
            });
        }), setHashKey(dst, h), dst;
    }
    function int(str) {
        return parseInt(str, 10);
    }
    function inherit(parent, extra) {
        return extend(new (extend(function() {}, {
            prototype: parent
        }))(), extra);
    }
    function noop() {}
    function identity($) {
        return $;
    }
    function valueFn(value) {
        return function() {
            return value;
        };
    }
    function isUndefined(value) {
        return "undefined" == typeof value;
    }
    function isDefined(value) {
        return "undefined" != typeof value;
    }
    function isObject(value) {
        return null != value && "object" == typeof value;
    }
    function isString(value) {
        return "string" == typeof value;
    }
    function isNumber(value) {
        return "number" == typeof value;
    }
    function isDate(value) {
        return "[object Date]" == toString.apply(value);
    }
    function isArray(value) {
        return "[object Array]" == toString.apply(value);
    }
    function isFunction(value) {
        return "function" == typeof value;
    }
    function isWindow(obj) {
        return obj && obj.document && obj.location && obj.alert && obj.setInterval;
    }
    function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
    }
    function isFile(obj) {
        return "[object File]" === toString.apply(obj);
    }
    function trim(value) {
        return isString(value) ? value.replace(/^\s*/, "").replace(/\s*$/, "") : value;
    }
    function isElement(node) {
        return node && (node.nodeName || node.bind && node.find);
    }
    function map(obj, iterator, context) {
        var results = [];
        return forEach(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        }), results;
    }
    function includes(array, obj) {
        return -1 != indexOf(array, obj);
    }
    function indexOf(array, obj) {
        if (array.indexOf) return array.indexOf(obj);
        for (var i = 0; i < array.length; i++) if (obj === array[i]) return i;
        return -1;
    }
    function arrayRemove(array, value) {
        var index = indexOf(array, value);
        return index >= 0 && array.splice(index, 1), value;
    }
    function copy(source, destination) {
        if (isWindow(source) || isScope(source)) throw Error("Can't copy Window or Scope");
        if (destination) {
            if (source === destination) throw Error("Can't copy equivalent objects or arrays");
            if (isArray(source)) {
                destination.length = 0;
                for (var i = 0; i < source.length; i++) destination.push(copy(source[i]));
            } else {
                var h = destination.$$hashKey;
                forEach(destination, function(value, key) {
                    delete destination[key];
                });
                for (var key in source) destination[key] = copy(source[key]);
                setHashKey(destination, h);
            }
        } else destination = source, source && (isArray(source) ? destination = copy(source, []) : isDate(source) ? destination = new Date(source.getTime()) : isObject(source) && (destination = copy(source, {})));
        return destination;
    }
    function shallowCopy(src, dst) {
        dst = dst || {};
        for (var key in src) src.hasOwnProperty(key) && "$$" !== key.substr(0, 2) && (dst[key] = src[key]);
        return dst;
    }
    function equals(o1, o2) {
        if (o1 === o2) return !0;
        if (null === o1 || null === o2) return !1;
        if (o1 !== o1 && o2 !== o2) return !0;
        var length, key, keySet, t1 = typeof o1, t2 = typeof o2;
        if (t1 == t2 && "object" == t1) {
            if (!isArray(o1)) {
                if (isDate(o1)) return isDate(o2) && o1.getTime() == o2.getTime();
                if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2)) return !1;
                keySet = {};
                for (key in o1) if ("$" !== key.charAt(0) && !isFunction(o1[key])) {
                    if (!equals(o1[key], o2[key])) return !1;
                    keySet[key] = !0;
                }
                for (key in o2) if (!keySet[key] && "$" !== key.charAt(0) && o2[key] !== undefined && !isFunction(o2[key])) return !1;
                return !0;
            }
            if ((length = o1.length) == o2.length) {
                for (key = 0; length > key; key++) if (!equals(o1[key], o2[key])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function concat(array1, array2, index) {
        return array1.concat(slice.call(array2, index));
    }
    function sliceArgs(args, startIndex) {
        return slice.call(args, startIndex || 0);
    }
    function bind(self, fn) {
        var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
        return !isFunction(fn) || fn instanceof RegExp ? fn : curryArgs.length ? function() {
            return arguments.length ? fn.apply(self, curryArgs.concat(slice.call(arguments, 0))) : fn.apply(self, curryArgs);
        } : function() {
            return arguments.length ? fn.apply(self, arguments) : fn.call(self);
        };
    }
    function toJsonReplacer(key, value) {
        var val = value;
        return /^\$+/.test(key) ? val = undefined : isWindow(value) ? val = "$WINDOW" : value && document === value ? val = "$DOCUMENT" : isScope(value) && (val = "$SCOPE"), 
        val;
    }
    function toJson(obj, pretty) {
        return JSON.stringify(obj, toJsonReplacer, pretty ? "  " : null);
    }
    function fromJson(json) {
        return isString(json) ? JSON.parse(json) : json;
    }
    function toBoolean(value) {
        if (value && 0 !== value.length) {
            var v = lowercase("" + value);
            value = !("f" == v || "0" == v || "false" == v || "no" == v || "n" == v || "[]" == v);
        } else value = !1;
        return value;
    }
    function startingTag(element) {
        element = jqLite(element).clone();
        try {
            element.html("");
        } catch (e) {}
        var TEXT_NODE = 3, elemHtml = jqLite("<div>").append(element).html();
        try {
            return element[0].nodeType === TEXT_NODE ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(match, nodeName) {
                return "<" + lowercase(nodeName);
            });
        } catch (e) {
            return lowercase(elemHtml);
        }
    }
    function parseKeyValue(keyValue) {
        var key_value, key, obj = {};
        return forEach((keyValue || "").split("&"), function(keyValue) {
            keyValue && (key_value = keyValue.split("="), key = decodeURIComponent(key_value[0]), 
            obj[key] = isDefined(key_value[1]) ? decodeURIComponent(key_value[1]) : !0);
        }), obj;
    }
    function toKeyValue(obj) {
        var parts = [];
        return forEach(obj, function(value, key) {
            parts.push(encodeUriQuery(key, !0) + (value === !0 ? "" : "=" + encodeUriQuery(value, !0)));
        }), parts.length ? parts.join("&") : "";
    }
    function encodeUriSegment(val) {
        return encodeUriQuery(val, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, pctEncodeSpaces ? "%20" : "+");
    }
    function angularInit(element, bootstrap) {
        function append(element) {
            element && elements.push(element);
        }
        var appElement, module, elements = [ element ], names = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        forEach(names, function(name) {
            names[name] = !0, append(document.getElementById(name)), name = name.replace(":", "\\:"), 
            element.querySelectorAll && (forEach(element.querySelectorAll("." + name), append), 
            forEach(element.querySelectorAll("." + name + "\\:"), append), forEach(element.querySelectorAll("[" + name + "]"), append));
        }), forEach(elements, function(element) {
            if (!appElement) {
                var className = " " + element.className + " ", match = NG_APP_CLASS_REGEXP.exec(className);
                match ? (appElement = element, module = (match[2] || "").replace(/\s+/g, ",")) : forEach(element.attributes, function(attr) {
                    !appElement && names[attr.name] && (appElement = element, module = attr.value);
                });
            }
        }), appElement && bootstrap(appElement, module ? [ module ] : []);
    }
    function bootstrap(element, modules) {
        var resumeBootstrapInternal = function() {
            element = jqLite(element), modules = modules || [], modules.unshift([ "$provide", function($provide) {
                $provide.value("$rootElement", element);
            } ]), modules.unshift("ng");
            var injector = createInjector(modules);
            return injector.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animator", function(scope, element, compile, injector, animator) {
                scope.$apply(function() {
                    element.data("$injector", injector), compile(element)(scope);
                }), animator.enabled(!0);
            } ]), injector;
        }, NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
        return window && !NG_DEFER_BOOTSTRAP.test(window.name) ? resumeBootstrapInternal() : (window.name = window.name.replace(NG_DEFER_BOOTSTRAP, ""), 
        void (angular.resumeBootstrap = function(extraModules) {
            forEach(extraModules, function(module) {
                modules.push(module);
            }), resumeBootstrapInternal();
        }));
    }
    function snake_case(name, separator) {
        return separator = separator || "_", name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
            return (pos ? separator : "") + letter.toLowerCase();
        });
    }
    function bindJQuery() {
        jQuery = window.jQuery, jQuery ? (jqLite = jQuery, extend(jQuery.fn, {
            scope: JQLitePrototype.scope,
            controller: JQLitePrototype.controller,
            injector: JQLitePrototype.injector,
            inheritedData: JQLitePrototype.inheritedData
        }), JQLitePatchJQueryRemove("remove", !0), JQLitePatchJQueryRemove("empty"), JQLitePatchJQueryRemove("html")) : jqLite = JQLite, 
        angular.element = jqLite;
    }
    function assertArg(arg, name, reason) {
        if (!arg) throw new Error("Argument '" + (name || "?") + "' is " + (reason || "required"));
        return arg;
    }
    function assertArgFn(arg, name, acceptArrayAnnotation) {
        return acceptArrayAnnotation && isArray(arg) && (arg = arg[arg.length - 1]), assertArg(isFunction(arg), name, "not a function, got " + (arg && "object" == typeof arg ? arg.constructor.name || "Object" : typeof arg)), 
        arg;
    }
    function setupModuleLoader(window) {
        function ensure(obj, name, factory) {
            return obj[name] || (obj[name] = factory());
        }
        return ensure(ensure(window, "angular", Object), "module", function() {
            var modules = {};
            return function(name, requires, configFn) {
                return requires && modules.hasOwnProperty(name) && (modules[name] = null), ensure(modules, name, function() {
                    function invokeLater(provider, method, insertMethod) {
                        return function() {
                            return invokeQueue[insertMethod || "push"]([ provider, method, arguments ]), moduleInstance;
                        };
                    }
                    if (!requires) throw Error("No module: " + name);
                    var invokeQueue = [], runBlocks = [], config = invokeLater("$injector", "invoke"), moduleInstance = {
                        _invokeQueue: invokeQueue,
                        _runBlocks: runBlocks,
                        requires: requires,
                        name: name,
                        provider: invokeLater("$provide", "provider"),
                        factory: invokeLater("$provide", "factory"),
                        service: invokeLater("$provide", "service"),
                        value: invokeLater("$provide", "value"),
                        constant: invokeLater("$provide", "constant", "unshift"),
                        animation: invokeLater("$animationProvider", "register"),
                        filter: invokeLater("$filterProvider", "register"),
                        controller: invokeLater("$controllerProvider", "register"),
                        directive: invokeLater("$compileProvider", "directive"),
                        config: config,
                        run: function(block) {
                            return runBlocks.push(block), this;
                        }
                    };
                    return configFn && config(configFn), moduleInstance;
                });
            };
        });
    }
    function publishExternalAPI(angular) {
        extend(angular, {
            bootstrap: bootstrap,
            copy: copy,
            extend: extend,
            equals: equals,
            element: jqLite,
            forEach: forEach,
            injector: createInjector,
            noop: noop,
            bind: bind,
            toJson: toJson,
            fromJson: fromJson,
            identity: identity,
            isUndefined: isUndefined,
            isDefined: isDefined,
            isString: isString,
            isFunction: isFunction,
            isObject: isObject,
            isNumber: isNumber,
            isElement: isElement,
            isArray: isArray,
            version: version,
            isDate: isDate,
            lowercase: lowercase,
            uppercase: uppercase,
            callbacks: {
                counter: 0
            },
            noConflict: noConflict
        }), angularModule = setupModuleLoader(window);
        try {
            angularModule("ngLocale");
        } catch (e) {
            angularModule("ngLocale", []).provider("$locale", $LocaleProvider);
        }
        angularModule("ng", [ "ngLocale" ], [ "$provide", function($provide) {
            $provide.provider("$compile", $CompileProvider).directive({
                a: htmlAnchorDirective,
                input: inputDirective,
                textarea: inputDirective,
                form: formDirective,
                script: scriptDirective,
                select: selectDirective,
                style: styleDirective,
                option: optionDirective,
                ngBind: ngBindDirective,
                ngBindHtmlUnsafe: ngBindHtmlUnsafeDirective,
                ngBindTemplate: ngBindTemplateDirective,
                ngClass: ngClassDirective,
                ngClassEven: ngClassEvenDirective,
                ngClassOdd: ngClassOddDirective,
                ngCsp: ngCspDirective,
                ngCloak: ngCloakDirective,
                ngController: ngControllerDirective,
                ngForm: ngFormDirective,
                ngHide: ngHideDirective,
                ngIf: ngIfDirective,
                ngInclude: ngIncludeDirective,
                ngInit: ngInitDirective,
                ngNonBindable: ngNonBindableDirective,
                ngPluralize: ngPluralizeDirective,
                ngRepeat: ngRepeatDirective,
                ngShow: ngShowDirective,
                ngSubmit: ngSubmitDirective,
                ngStyle: ngStyleDirective,
                ngSwitch: ngSwitchDirective,
                ngSwitchWhen: ngSwitchWhenDirective,
                ngSwitchDefault: ngSwitchDefaultDirective,
                ngOptions: ngOptionsDirective,
                ngView: ngViewDirective,
                ngTransclude: ngTranscludeDirective,
                ngModel: ngModelDirective,
                ngList: ngListDirective,
                ngChange: ngChangeDirective,
                required: requiredDirective,
                ngRequired: requiredDirective,
                ngValue: ngValueDirective
            }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives), $provide.provider({
                $anchorScroll: $AnchorScrollProvider,
                $animation: $AnimationProvider,
                $animator: $AnimatorProvider,
                $browser: $BrowserProvider,
                $cacheFactory: $CacheFactoryProvider,
                $controller: $ControllerProvider,
                $document: $DocumentProvider,
                $exceptionHandler: $ExceptionHandlerProvider,
                $filter: $FilterProvider,
                $interpolate: $InterpolateProvider,
                $http: $HttpProvider,
                $httpBackend: $HttpBackendProvider,
                $location: $LocationProvider,
                $log: $LogProvider,
                $parse: $ParseProvider,
                $route: $RouteProvider,
                $routeParams: $RouteParamsProvider,
                $rootScope: $RootScopeProvider,
                $q: $QProvider,
                $sniffer: $SnifferProvider,
                $templateCache: $TemplateCacheProvider,
                $timeout: $TimeoutProvider,
                $window: $WindowProvider
            });
        } ]);
    }
    function jqNextId() {
        return ++jqId;
    }
    function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, "Moz$1");
    }
    function JQLitePatchJQueryRemove(name, dispatchThis) {
        function removePatch() {
            for (var set, setIndex, setLength, element, childIndex, childLength, children, list = [ this ], fireEvent = dispatchThis; list.length; ) for (set = list.shift(), 
            setIndex = 0, setLength = set.length; setLength > setIndex; setIndex++) for (element = jqLite(set[setIndex]), 
            fireEvent ? element.triggerHandler("$destroy") : fireEvent = !fireEvent, childIndex = 0, 
            childLength = (children = element.children()).length; childLength > childIndex; childIndex++) list.push(jQuery(children[childIndex]));
            return originalJqFn.apply(this, arguments);
        }
        var originalJqFn = jQuery.fn[name];
        originalJqFn = originalJqFn.$original || originalJqFn, removePatch.$original = originalJqFn, 
        jQuery.fn[name] = removePatch;
    }
    function JQLite(element) {
        if (element instanceof JQLite) return element;
        if (!(this instanceof JQLite)) {
            if (isString(element) && "<" != element.charAt(0)) throw Error("selectors not implemented");
            return new JQLite(element);
        }
        if (isString(element)) {
            var div = document.createElement("div");
            div.innerHTML = "<div>&#160;</div>" + element, div.removeChild(div.firstChild), 
            JQLiteAddNodes(this, div.childNodes), this.remove();
        } else JQLiteAddNodes(this, element);
    }
    function JQLiteClone(element) {
        return element.cloneNode(!0);
    }
    function JQLiteDealoc(element) {
        JQLiteRemoveData(element);
        for (var i = 0, children = element.childNodes || []; i < children.length; i++) JQLiteDealoc(children[i]);
    }
    function JQLiteUnbind(element, type, fn) {
        var events = JQLiteExpandoStore(element, "events"), handle = JQLiteExpandoStore(element, "handle");
        handle && (isUndefined(type) ? forEach(events, function(eventHandler, type) {
            removeEventListenerFn(element, type, eventHandler), delete events[type];
        }) : isUndefined(fn) ? (removeEventListenerFn(element, type, events[type]), delete events[type]) : arrayRemove(events[type], fn));
    }
    function JQLiteRemoveData(element) {
        var expandoId = element[jqName], expandoStore = jqCache[expandoId];
        expandoStore && (expandoStore.handle && (expandoStore.events.$destroy && expandoStore.handle({}, "$destroy"), 
        JQLiteUnbind(element)), delete jqCache[expandoId], element[jqName] = undefined);
    }
    function JQLiteExpandoStore(element, key, value) {
        var expandoId = element[jqName], expandoStore = jqCache[expandoId || -1];
        return isDefined(value) ? (expandoStore || (element[jqName] = expandoId = jqNextId(), 
        expandoStore = jqCache[expandoId] = {}), void (expandoStore[key] = value)) : expandoStore && expandoStore[key];
    }
    function JQLiteData(element, key, value) {
        var data = JQLiteExpandoStore(element, "data"), isSetter = isDefined(value), keyDefined = !isSetter && isDefined(key), isSimpleGetter = keyDefined && !isObject(key);
        if (data || isSimpleGetter || JQLiteExpandoStore(element, "data", data = {}), isSetter) data[key] = value; else {
            if (!keyDefined) return data;
            if (isSimpleGetter) return data && data[key];
            extend(data, key);
        }
    }
    function JQLiteHasClass(element, selector) {
        return (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") > -1;
    }
    function JQLiteRemoveClass(element, cssClasses) {
        cssClasses && forEach(cssClasses.split(" "), function(cssClass) {
            element.className = trim((" " + element.className + " ").replace(/[\n\t]/g, " ").replace(" " + trim(cssClass) + " ", " "));
        });
    }
    function JQLiteAddClass(element, cssClasses) {
        cssClasses && forEach(cssClasses.split(" "), function(cssClass) {
            JQLiteHasClass(element, cssClass) || (element.className = trim(element.className + " " + trim(cssClass)));
        });
    }
    function JQLiteAddNodes(root, elements) {
        if (elements) {
            elements = elements.nodeName || !isDefined(elements.length) || isWindow(elements) ? [ elements ] : elements;
            for (var i = 0; i < elements.length; i++) root.push(elements[i]);
        }
    }
    function JQLiteController(element, name) {
        return JQLiteInheritedData(element, "$" + (name || "ngController") + "Controller");
    }
    function JQLiteInheritedData(element, name, value) {
        for (element = jqLite(element), 9 == element[0].nodeType && (element = element.find("html")); element.length; ) {
            if (value = element.data(name)) return value;
            element = element.parent();
        }
    }
    function getBooleanAttrName(element, name) {
        var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
        return booleanAttr && BOOLEAN_ELEMENTS[element.nodeName] && booleanAttr;
    }
    function createEventHandler(element, events) {
        var eventHandler = function(event, type) {
            if (event.preventDefault || (event.preventDefault = function() {
                event.returnValue = !1;
            }), event.stopPropagation || (event.stopPropagation = function() {
                event.cancelBubble = !0;
            }), event.target || (event.target = event.srcElement || document), isUndefined(event.defaultPrevented)) {
                var prevent = event.preventDefault;
                event.preventDefault = function() {
                    event.defaultPrevented = !0, prevent.call(event);
                }, event.defaultPrevented = !1;
            }
            event.isDefaultPrevented = function() {
                return event.defaultPrevented || 0 == event.returnValue;
            }, forEach(events[type || event.type], function(fn) {
                fn.call(element, event);
            }), 8 >= msie ? (event.preventDefault = null, event.stopPropagation = null, event.isDefaultPrevented = null) : (delete event.preventDefault, 
            delete event.stopPropagation, delete event.isDefaultPrevented);
        };
        return eventHandler.elem = element, eventHandler;
    }
    function hashKey(obj) {
        var key, objType = typeof obj;
        return "object" == objType && null !== obj ? "function" == typeof (key = obj.$$hashKey) ? key = obj.$$hashKey() : key === undefined && (key = obj.$$hashKey = nextUid()) : key = obj, 
        objType + ":" + key;
    }
    function HashMap(array) {
        forEach(array, this.put, this);
    }
    function annotate(fn) {
        var $inject, fnText, argDecl, last;
        return "function" == typeof fn ? ($inject = fn.$inject) || ($inject = [], fnText = fn.toString().replace(STRIP_COMMENTS, ""), 
        argDecl = fnText.match(FN_ARGS), forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
            arg.replace(FN_ARG, function(all, underscore, name) {
                $inject.push(name);
            });
        }), fn.$inject = $inject) : isArray(fn) ? (last = fn.length - 1, assertArgFn(fn[last], "fn"), 
        $inject = fn.slice(0, last)) : assertArgFn(fn, "fn", !0), $inject;
    }
    function createInjector(modulesToLoad) {
        function supportObject(delegate) {
            return function(key, value) {
                return isObject(key) ? void forEach(key, reverseParams(delegate)) : delegate(key, value);
            };
        }
        function provider(name, provider_) {
            if ((isFunction(provider_) || isArray(provider_)) && (provider_ = providerInjector.instantiate(provider_)), 
            !provider_.$get) throw Error("Provider " + name + " must define $get factory method.");
            return providerCache[name + providerSuffix] = provider_;
        }
        function factory(name, factoryFn) {
            return provider(name, {
                $get: factoryFn
            });
        }
        function service(name, constructor) {
            return factory(name, [ "$injector", function($injector) {
                return $injector.instantiate(constructor);
            } ]);
        }
        function value(name, value) {
            return factory(name, valueFn(value));
        }
        function constant(name, value) {
            providerCache[name] = value, instanceCache[name] = value;
        }
        function decorator(serviceName, decorFn) {
            var origProvider = providerInjector.get(serviceName + providerSuffix), orig$get = origProvider.$get;
            origProvider.$get = function() {
                var origInstance = instanceInjector.invoke(orig$get, origProvider);
                return instanceInjector.invoke(decorFn, null, {
                    $delegate: origInstance
                });
            };
        }
        function loadModules(modulesToLoad) {
            var runBlocks = [];
            return forEach(modulesToLoad, function(module) {
                if (!loadedModules.get(module)) if (loadedModules.put(module, !0), isString(module)) {
                    var moduleFn = angularModule(module);
                    runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);
                    try {
                        for (var invokeQueue = moduleFn._invokeQueue, i = 0, ii = invokeQueue.length; ii > i; i++) {
                            var invokeArgs = invokeQueue[i], provider = providerInjector.get(invokeArgs[0]);
                            provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
                        }
                    } catch (e) {
                        throw e.message && (e.message += " from " + module), e;
                    }
                } else if (isFunction(module)) try {
                    runBlocks.push(providerInjector.invoke(module));
                } catch (e) {
                    throw e.message && (e.message += " from " + module), e;
                } else if (isArray(module)) try {
                    runBlocks.push(providerInjector.invoke(module));
                } catch (e) {
                    throw e.message && (e.message += " from " + String(module[module.length - 1])), 
                    e;
                } else assertArgFn(module, "module");
            }), runBlocks;
        }
        function createInternalInjector(cache, factory) {
            function getService(serviceName) {
                if ("string" != typeof serviceName) throw Error("Service name expected");
                if (cache.hasOwnProperty(serviceName)) {
                    if (cache[serviceName] === INSTANTIATING) throw Error("Circular dependency: " + path.join(" <- "));
                    return cache[serviceName];
                }
                try {
                    return path.unshift(serviceName), cache[serviceName] = INSTANTIATING, cache[serviceName] = factory(serviceName);
                } finally {
                    path.shift();
                }
            }
            function invoke(fn, self, locals) {
                var length, i, key, args = [], $inject = annotate(fn);
                for (i = 0, length = $inject.length; length > i; i++) key = $inject[i], args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key));
                switch (fn.$inject || (fn = fn[length]), self ? -1 : args.length) {
                  case 0:
                    return fn();

                  case 1:
                    return fn(args[0]);

                  case 2:
                    return fn(args[0], args[1]);

                  case 3:
                    return fn(args[0], args[1], args[2]);

                  case 4:
                    return fn(args[0], args[1], args[2], args[3]);

                  case 5:
                    return fn(args[0], args[1], args[2], args[3], args[4]);

                  case 6:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5]);

                  case 7:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);

                  case 8:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);

                  case 9:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);

                  case 10:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);

                  default:
                    return fn.apply(self, args);
                }
            }
            function instantiate(Type, locals) {
                var instance, returnedValue, Constructor = function() {};
                return Constructor.prototype = (isArray(Type) ? Type[Type.length - 1] : Type).prototype, 
                instance = new Constructor(), returnedValue = invoke(Type, instance, locals), isObject(returnedValue) ? returnedValue : instance;
            }
            return {
                invoke: invoke,
                instantiate: instantiate,
                get: getService,
                annotate: annotate,
                has: function(name) {
                    return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
                }
            };
        }
        var INSTANTIATING = {}, providerSuffix = "Provider", path = [], loadedModules = new HashMap(), providerCache = {
            $provide: {
                provider: supportObject(provider),
                factory: supportObject(factory),
                service: supportObject(service),
                value: supportObject(value),
                constant: supportObject(constant),
                decorator: decorator
            }
        }, providerInjector = providerCache.$injector = createInternalInjector(providerCache, function() {
            throw Error("Unknown provider: " + path.join(" <- "));
        }), instanceCache = {}, instanceInjector = instanceCache.$injector = createInternalInjector(instanceCache, function(servicename) {
            var provider = providerInjector.get(servicename + providerSuffix);
            return instanceInjector.invoke(provider.$get, provider);
        });
        return forEach(loadModules(modulesToLoad), function(fn) {
            instanceInjector.invoke(fn || noop);
        }), instanceInjector;
    }
    function $AnchorScrollProvider() {
        var autoScrollingEnabled = !0;
        this.disableAutoScrolling = function() {
            autoScrollingEnabled = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function($window, $location, $rootScope) {
            function getFirstAnchor(list) {
                var result = null;
                return forEach(list, function(element) {
                    result || "a" !== lowercase(element.nodeName) || (result = element);
                }), result;
            }
            function scroll() {
                var elm, hash = $location.hash();
                hash ? (elm = document.getElementById(hash)) ? elm.scrollIntoView() : (elm = getFirstAnchor(document.getElementsByName(hash))) ? elm.scrollIntoView() : "top" === hash && $window.scrollTo(0, 0) : $window.scrollTo(0, 0);
            }
            var document = $window.document;
            return autoScrollingEnabled && $rootScope.$watch(function() {
                return $location.hash();
            }, function() {
                $rootScope.$evalAsync(scroll);
            }), scroll;
        } ];
    }
    function $AnimationProvider($provide) {
        var suffix = "Animation";
        this.register = function(name, factory) {
            $provide.factory(camelCase(name) + suffix, factory);
        }, this.$get = [ "$injector", function($injector) {
            return function(name) {
                if (name) {
                    var animationName = camelCase(name) + suffix;
                    if ($injector.has(animationName)) return $injector.get(animationName);
                }
            };
        } ];
    }
    function Browser(window, document, $log, $sniffer) {
        function completeOutstandingRequest(fn) {
            try {
                fn.apply(null, sliceArgs(arguments, 1));
            } finally {
                if (outstandingRequestCount--, 0 === outstandingRequestCount) for (;outstandingRequestCallbacks.length; ) try {
                    outstandingRequestCallbacks.pop()();
                } catch (e) {
                    $log.error(e);
                }
            }
        }
        function startPoller(interval, setTimeout) {
            !function check() {
                forEach(pollFns, function(pollFn) {
                    pollFn();
                }), pollTimeout = setTimeout(check, interval);
            }();
        }
        function fireUrlChange() {
            lastBrowserUrl != self.url() && (lastBrowserUrl = self.url(), forEach(urlChangeListeners, function(listener) {
                listener(self.url());
            }));
        }
        var self = this, rawDocument = document[0], location = window.location, history = window.history, setTimeout = window.setTimeout, clearTimeout = window.clearTimeout, pendingDeferIds = {};
        self.isMock = !1;
        var outstandingRequestCount = 0, outstandingRequestCallbacks = [];
        self.$$completeOutstandingRequest = completeOutstandingRequest, self.$$incOutstandingRequestCount = function() {
            outstandingRequestCount++;
        }, self.notifyWhenNoOutstandingRequests = function(callback) {
            forEach(pollFns, function(pollFn) {
                pollFn();
            }), 0 === outstandingRequestCount ? callback() : outstandingRequestCallbacks.push(callback);
        };
        var pollTimeout, pollFns = [];
        self.addPollFn = function(fn) {
            return isUndefined(pollTimeout) && startPoller(100, setTimeout), pollFns.push(fn), 
            fn;
        };
        var lastBrowserUrl = location.href, baseElement = document.find("base");
        self.url = function(url, replace) {
            if (url) {
                if (lastBrowserUrl == url) return;
                return lastBrowserUrl = url, $sniffer.history ? replace ? history.replaceState(null, "", url) : (history.pushState(null, "", url), 
                baseElement.attr("href", baseElement.attr("href"))) : replace ? location.replace(url) : location.href = url, 
                self;
            }
            return location.href.replace(/%27/g, "'");
        };
        var urlChangeListeners = [], urlChangeInit = !1;
        self.onUrlChange = function(callback) {
            return urlChangeInit || ($sniffer.history && jqLite(window).bind("popstate", fireUrlChange), 
            $sniffer.hashchange ? jqLite(window).bind("hashchange", fireUrlChange) : self.addPollFn(fireUrlChange), 
            urlChangeInit = !0), urlChangeListeners.push(callback), callback;
        }, self.baseHref = function() {
            var href = baseElement.attr("href");
            return href ? href.replace(/^https?\:\/\/[^\/]*/, "") : "";
        };
        var lastCookies = {}, lastCookieString = "", cookiePath = self.baseHref();
        self.cookies = function(name, value) {
            var cookieLength, cookieArray, cookie, i, index;
            if (!name) {
                if (rawDocument.cookie !== lastCookieString) for (lastCookieString = rawDocument.cookie, 
                cookieArray = lastCookieString.split("; "), lastCookies = {}, i = 0; i < cookieArray.length; i++) if (cookie = cookieArray[i], 
                index = cookie.indexOf("="), index > 0) {
                    var name = unescape(cookie.substring(0, index));
                    lastCookies[name] === undefined && (lastCookies[name] = unescape(cookie.substring(index + 1)));
                }
                return lastCookies;
            }
            value === undefined ? rawDocument.cookie = escape(name) + "=;path=" + cookiePath + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : isString(value) && (cookieLength = (rawDocument.cookie = escape(name) + "=" + escape(value) + ";path=" + cookiePath).length + 1, 
            cookieLength > 4096 && $log.warn("Cookie '" + name + "' possibly not set or overflowed because it was too large (" + cookieLength + " > 4096 bytes)!"));
        }, self.defer = function(fn, delay) {
            var timeoutId;
            return outstandingRequestCount++, timeoutId = setTimeout(function() {
                delete pendingDeferIds[timeoutId], completeOutstandingRequest(fn);
            }, delay || 0), pendingDeferIds[timeoutId] = !0, timeoutId;
        }, self.defer.cancel = function(deferId) {
            return pendingDeferIds[deferId] ? (delete pendingDeferIds[deferId], clearTimeout(deferId), 
            completeOutstandingRequest(noop), !0) : !1;
        };
    }
    function $BrowserProvider() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function($window, $log, $sniffer, $document) {
            return new Browser($window, $document, $log, $sniffer);
        } ];
    }
    function $CacheFactoryProvider() {
        this.$get = function() {
            function cacheFactory(cacheId, options) {
                function refresh(entry) {
                    entry != freshEnd && (staleEnd ? staleEnd == entry && (staleEnd = entry.n) : staleEnd = entry, 
                    link(entry.n, entry.p), link(entry, freshEnd), freshEnd = entry, freshEnd.n = null);
                }
                function link(nextEntry, prevEntry) {
                    nextEntry != prevEntry && (nextEntry && (nextEntry.p = prevEntry), prevEntry && (prevEntry.n = nextEntry));
                }
                if (cacheId in caches) throw Error("cacheId " + cacheId + " taken");
                var size = 0, stats = extend({}, options, {
                    id: cacheId
                }), data = {}, capacity = options && options.capacity || Number.MAX_VALUE, lruHash = {}, freshEnd = null, staleEnd = null;
                return caches[cacheId] = {
                    put: function(key, value) {
                        var lruEntry = lruHash[key] || (lruHash[key] = {
                            key: key
                        });
                        return refresh(lruEntry), isUndefined(value) ? void 0 : (key in data || size++, 
                        data[key] = value, size > capacity && this.remove(staleEnd.key), value);
                    },
                    get: function(key) {
                        var lruEntry = lruHash[key];
                        if (lruEntry) return refresh(lruEntry), data[key];
                    },
                    remove: function(key) {
                        var lruEntry = lruHash[key];
                        lruEntry && (lruEntry == freshEnd && (freshEnd = lruEntry.p), lruEntry == staleEnd && (staleEnd = lruEntry.n), 
                        link(lruEntry.n, lruEntry.p), delete lruHash[key], delete data[key], size--);
                    },
                    removeAll: function() {
                        data = {}, size = 0, lruHash = {}, freshEnd = staleEnd = null;
                    },
                    destroy: function() {
                        data = null, stats = null, lruHash = null, delete caches[cacheId];
                    },
                    info: function() {
                        return extend({}, stats, {
                            size: size
                        });
                    }
                };
            }
            var caches = {};
            return cacheFactory.info = function() {
                var info = {};
                return forEach(caches, function(cache, cacheId) {
                    info[cacheId] = cache.info();
                }), info;
            }, cacheFactory.get = function(cacheId) {
                return caches[cacheId];
            }, cacheFactory;
        };
    }
    function $TemplateCacheProvider() {
        this.$get = [ "$cacheFactory", function($cacheFactory) {
            return $cacheFactory("templates");
        } ];
    }
    function $CompileProvider($provide) {
        var hasDirectives = {}, Suffix = "Directive", COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, CLASS_DIRECTIVE_REGEXP = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, MULTI_ROOT_TEMPLATE_ERROR = "Template must have exactly one root element. was: ", urlSanitizationWhitelist = /^\s*(https?|ftp|mailto|file):/;
        this.directive = function registerDirective(name, directiveFactory) {
            return isString(name) ? (assertArg(directiveFactory, "directive"), hasDirectives.hasOwnProperty(name) || (hasDirectives[name] = [], 
            $provide.factory(name + Suffix, [ "$injector", "$exceptionHandler", function($injector, $exceptionHandler) {
                var directives = [];
                return forEach(hasDirectives[name], function(directiveFactory) {
                    try {
                        var directive = $injector.invoke(directiveFactory);
                        isFunction(directive) ? directive = {
                            compile: valueFn(directive)
                        } : !directive.compile && directive.link && (directive.compile = valueFn(directive.link)), 
                        directive.priority = directive.priority || 0, directive.name = directive.name || name, 
                        directive.require = directive.require || directive.controller && directive.name, 
                        directive.restrict = directive.restrict || "A", directives.push(directive);
                    } catch (e) {
                        $exceptionHandler(e);
                    }
                }), directives;
            } ])), hasDirectives[name].push(directiveFactory)) : forEach(name, reverseParams(registerDirective)), 
            this;
        }, this.urlSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? (urlSanitizationWhitelist = regexp, this) : urlSanitizationWhitelist;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", function($injector, $interpolate, $exceptionHandler, $http, $templateCache, $parse, $controller, $rootScope, $document) {
            function compile($compileNodes, transcludeFn, maxPriority) {
                $compileNodes instanceof jqLite || ($compileNodes = jqLite($compileNodes)), forEach($compileNodes, function(node, index) {
                    3 == node.nodeType && node.nodeValue.match(/\S+/) && ($compileNodes[index] = jqLite(node).wrap("<span></span>").parent()[0]);
                });
                var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority);
                return function(scope, cloneConnectFn) {
                    assertArg(scope, "scope");
                    for (var $linkNode = cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes, i = 0, ii = $linkNode.length; ii > i; i++) {
                        var node = $linkNode[i];
                        (1 == node.nodeType || 9 == node.nodeType) && $linkNode.eq(i).data("$scope", scope);
                    }
                    return safeAddClass($linkNode, "ng-scope"), cloneConnectFn && cloneConnectFn($linkNode, scope), 
                    compositeLinkFn && compositeLinkFn(scope, $linkNode, $linkNode), $linkNode;
                };
            }
            function safeAddClass($element, className) {
                try {
                    $element.addClass(className);
                } catch (e) {}
            }
            function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority) {
                function compositeLinkFn(scope, nodeList, $rootElement, boundTranscludeFn) {
                    var nodeLinkFn, childLinkFn, node, childScope, childTranscludeFn, i, ii, n, stableNodeList = [];
                    for (i = 0, ii = nodeList.length; ii > i; i++) stableNodeList.push(nodeList[i]);
                    for (i = 0, n = 0, ii = linkFns.length; ii > i; n++) node = stableNodeList[n], nodeLinkFn = linkFns[i++], 
                    childLinkFn = linkFns[i++], nodeLinkFn ? (nodeLinkFn.scope ? (childScope = scope.$new(isObject(nodeLinkFn.scope)), 
                    jqLite(node).data("$scope", childScope)) : childScope = scope, childTranscludeFn = nodeLinkFn.transclude, 
                    childTranscludeFn || !boundTranscludeFn && transcludeFn ? nodeLinkFn(childLinkFn, childScope, node, $rootElement, function(transcludeFn) {
                        return function(cloneFn) {
                            var transcludeScope = scope.$new();
                            return transcludeScope.$$transcluded = !0, transcludeFn(transcludeScope, cloneFn).bind("$destroy", bind(transcludeScope, transcludeScope.$destroy));
                        };
                    }(childTranscludeFn || transcludeFn)) : nodeLinkFn(childLinkFn, childScope, node, undefined, boundTranscludeFn)) : childLinkFn && childLinkFn(scope, node.childNodes, undefined, boundTranscludeFn);
                }
                for (var nodeLinkFn, childLinkFn, directives, attrs, linkFnFound, linkFns = [], i = 0; i < nodeList.length; i++) attrs = new Attributes(), 
                directives = collectDirectives(nodeList[i], [], attrs, maxPriority), nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement) : null, 
                childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !nodeList[i].childNodes || !nodeList[i].childNodes.length ? null : compileNodes(nodeList[i].childNodes, nodeLinkFn ? nodeLinkFn.transclude : transcludeFn), 
                linkFns.push(nodeLinkFn), linkFns.push(childLinkFn), linkFnFound = linkFnFound || nodeLinkFn || childLinkFn;
                return linkFnFound ? compositeLinkFn : null;
            }
            function collectDirectives(node, directives, attrs, maxPriority) {
                var match, className, nodeType = node.nodeType, attrsMap = attrs.$attr;
                switch (nodeType) {
                  case 1:
                    addDirective(directives, directiveNormalize(nodeName_(node).toLowerCase()), "E", maxPriority);
                    for (var attr, name, nName, ngAttrName, value, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; jj > j; j++) attr = nAttrs[j], 
                    attr.specified && (name = attr.name, ngAttrName = directiveNormalize(name), NG_ATTR_BINDING.test(ngAttrName) && (name = ngAttrName.substr(6).toLowerCase()), 
                    nName = directiveNormalize(name.toLowerCase()), attrsMap[nName] = name, attrs[nName] = value = trim(msie && "href" == name ? decodeURIComponent(node.getAttribute(name, 2)) : attr.value), 
                    getBooleanAttrName(node, nName) && (attrs[nName] = !0), addAttrInterpolateDirective(node, directives, value, nName), 
                    addDirective(directives, nName, "A", maxPriority));
                    if (className = node.className, isString(className) && "" !== className) for (;match = CLASS_DIRECTIVE_REGEXP.exec(className); ) nName = directiveNormalize(match[2]), 
                    addDirective(directives, nName, "C", maxPriority) && (attrs[nName] = trim(match[3])), 
                    className = className.substr(match.index + match[0].length);
                    break;

                  case 3:
                    addTextInterpolateDirective(directives, node.nodeValue);
                    break;

                  case 8:
                    try {
                        match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue), match && (nName = directiveNormalize(match[1]), 
                        addDirective(directives, nName, "M", maxPriority) && (attrs[nName] = trim(match[2])));
                    } catch (e) {}
                }
                return directives.sort(byPriority), directives;
            }
            function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection) {
                function addLinkFns(pre, post) {
                    pre && (pre.require = directive.require, preLinkFns.push(pre)), post && (post.require = directive.require, 
                    postLinkFns.push(post));
                }
                function getControllers(require, $element) {
                    var value, retrievalMethod = "data", optional = !1;
                    if (isString(require)) {
                        for (;"^" == (value = require.charAt(0)) || "?" == value; ) require = require.substr(1), 
                        "^" == value && (retrievalMethod = "inheritedData"), optional = optional || "?" == value;
                        if (value = $element[retrievalMethod]("$" + require + "Controller"), !value && !optional) throw Error("No controller: " + require);
                        return value;
                    }
                    return isArray(require) && (value = [], forEach(require, function(require) {
                        value.push(getControllers(require, $element));
                    })), value;
                }
                function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
                    var attrs, $element, i, ii, linkFn, controller;
                    if (attrs = compileNode === linkNode ? templateAttrs : shallowCopy(templateAttrs, new Attributes(jqLite(linkNode), templateAttrs.$attr)), 
                    $element = attrs.$$element, newIsolateScopeDirective) {
                        var LOCAL_REGEXP = /^\s*([@=&])(\??)\s*(\w*)\s*$/, parentScope = scope.$parent || scope;
                        forEach(newIsolateScopeDirective.scope, function(definiton, scopeName) {
                            var lastValue, parentGet, parentSet, match = definiton.match(LOCAL_REGEXP) || [], attrName = match[3] || scopeName, optional = "?" == match[2], mode = match[1];
                            switch (scope.$$isolateBindings[scopeName] = mode + attrName, mode) {
                              case "@":
                                attrs.$observe(attrName, function(value) {
                                    scope[scopeName] = value;
                                }), attrs.$$observers[attrName].$$scope = parentScope, attrs[attrName] && (scope[scopeName] = $interpolate(attrs[attrName])(parentScope));
                                break;

                              case "=":
                                if (optional && !attrs[attrName]) return;
                                parentGet = $parse(attrs[attrName]), parentSet = parentGet.assign || function() {
                                    throw lastValue = scope[scopeName] = parentGet(parentScope), Error(NON_ASSIGNABLE_MODEL_EXPRESSION + attrs[attrName] + " (directive: " + newIsolateScopeDirective.name + ")");
                                }, lastValue = scope[scopeName] = parentGet(parentScope), scope.$watch(function() {
                                    var parentValue = parentGet(parentScope);
                                    return parentValue !== scope[scopeName] && (parentValue !== lastValue ? lastValue = scope[scopeName] = parentValue : parentSet(parentScope, parentValue = lastValue = scope[scopeName])), 
                                    parentValue;
                                });
                                break;

                              case "&":
                                parentGet = $parse(attrs[attrName]), scope[scopeName] = function(locals) {
                                    return parentGet(parentScope, locals);
                                };
                                break;

                              default:
                                throw Error("Invalid isolate scope definition for directive " + newIsolateScopeDirective.name + ": " + definiton);
                            }
                        });
                    }
                    for (controllerDirectives && forEach(controllerDirectives, function(directive) {
                        var locals = {
                            $scope: scope,
                            $element: $element,
                            $attrs: attrs,
                            $transclude: boundTranscludeFn
                        };
                        controller = directive.controller, "@" == controller && (controller = attrs[directive.name]), 
                        $element.data("$" + directive.name + "Controller", $controller(controller, locals));
                    }), i = 0, ii = preLinkFns.length; ii > i; i++) try {
                        linkFn = preLinkFns[i], linkFn(scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element));
                    } catch (e) {
                        $exceptionHandler(e, startingTag($element));
                    }
                    for (childLinkFn && childLinkFn(scope, linkNode.childNodes, undefined, boundTranscludeFn), 
                    i = 0, ii = postLinkFns.length; ii > i; i++) try {
                        linkFn = postLinkFns[i], linkFn(scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element));
                    } catch (e) {
                        $exceptionHandler(e, startingTag($element));
                    }
                }
                for (var directive, directiveName, $template, transcludeDirective, controllerDirectives, linkFn, directiveValue, terminalPriority = -Number.MAX_VALUE, preLinkFns = [], postLinkFns = [], newScopeDirective = null, newIsolateScopeDirective = null, templateDirective = null, $compileNode = templateAttrs.$$element = jqLite(compileNode), childTranscludeFn = transcludeFn, i = 0, ii = directives.length; ii > i && (directive = directives[i], 
                $template = undefined, !(terminalPriority > directive.priority)); i++) {
                    if ((directiveValue = directive.scope) && (assertNoDuplicate("isolated scope", newIsolateScopeDirective, directive, $compileNode), 
                    isObject(directiveValue) && (safeAddClass($compileNode, "ng-isolate-scope"), newIsolateScopeDirective = directive), 
                    safeAddClass($compileNode, "ng-scope"), newScopeDirective = newScopeDirective || directive), 
                    directiveName = directive.name, (directiveValue = directive.controller) && (controllerDirectives = controllerDirectives || {}, 
                    assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode), 
                    controllerDirectives[directiveName] = directive), (directiveValue = directive.transclude) && (assertNoDuplicate("transclusion", transcludeDirective, directive, $compileNode), 
                    transcludeDirective = directive, terminalPriority = directive.priority, "element" == directiveValue ? ($template = jqLite(compileNode), 
                    $compileNode = templateAttrs.$$element = jqLite(document.createComment(" " + directiveName + ": " + templateAttrs[directiveName] + " ")), 
                    compileNode = $compileNode[0], replaceWith(jqCollection, jqLite($template[0]), compileNode), 
                    childTranscludeFn = compile($template, transcludeFn, terminalPriority)) : ($template = jqLite(JQLiteClone(compileNode)).contents(), 
                    $compileNode.html(""), childTranscludeFn = compile($template, transcludeFn))), directive.template) if (assertNoDuplicate("template", templateDirective, directive, $compileNode), 
                    templateDirective = directive, directiveValue = isFunction(directive.template) ? directive.template($compileNode, templateAttrs) : directive.template, 
                    directiveValue = denormalizeTemplate(directiveValue), directive.replace) {
                        if ($template = jqLite("<div>" + trim(directiveValue) + "</div>").contents(), compileNode = $template[0], 
                        1 != $template.length || 1 !== compileNode.nodeType) throw new Error(MULTI_ROOT_TEMPLATE_ERROR + directiveValue);
                        replaceWith(jqCollection, $compileNode, compileNode);
                        var newTemplateAttrs = {
                            $attr: {}
                        };
                        directives = directives.concat(collectDirectives(compileNode, directives.splice(i + 1, directives.length - (i + 1)), newTemplateAttrs)), 
                        mergeTemplateAttributes(templateAttrs, newTemplateAttrs), ii = directives.length;
                    } else $compileNode.html(directiveValue);
                    if (directive.templateUrl) assertNoDuplicate("template", templateDirective, directive, $compileNode), 
                    templateDirective = directive, nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), nodeLinkFn, $compileNode, templateAttrs, jqCollection, directive.replace, childTranscludeFn), 
                    ii = directives.length; else if (directive.compile) try {
                        linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn), isFunction(linkFn) ? addLinkFns(null, linkFn) : linkFn && addLinkFns(linkFn.pre, linkFn.post);
                    } catch (e) {
                        $exceptionHandler(e, startingTag($compileNode));
                    }
                    directive.terminal && (nodeLinkFn.terminal = !0, terminalPriority = Math.max(terminalPriority, directive.priority));
                }
                return nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope, nodeLinkFn.transclude = transcludeDirective && childTranscludeFn, 
                nodeLinkFn;
            }
            function addDirective(tDirectives, name, location, maxPriority) {
                var match = !1;
                if (hasDirectives.hasOwnProperty(name)) for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; ii > i; i++) try {
                    directive = directives[i], (maxPriority === undefined || maxPriority > directive.priority) && -1 != directive.restrict.indexOf(location) && (tDirectives.push(directive), 
                    match = !0);
                } catch (e) {
                    $exceptionHandler(e);
                }
                return match;
            }
            function mergeTemplateAttributes(dst, src) {
                var srcAttr = src.$attr, dstAttr = dst.$attr, $element = dst.$$element;
                forEach(dst, function(value, key) {
                    "$" != key.charAt(0) && (src[key] && (value += ("style" === key ? ";" : " ") + src[key]), 
                    dst.$set(key, value, !0, srcAttr[key]));
                }), forEach(src, function(value, key) {
                    "class" == key ? (safeAddClass($element, value), dst["class"] = (dst["class"] ? dst["class"] + " " : "") + value) : "style" == key ? $element.attr("style", $element.attr("style") + ";" + value) : "$" == key.charAt(0) || dst.hasOwnProperty(key) || (dst[key] = value, 
                    dstAttr[key] = srcAttr[key]);
                });
            }
            function compileTemplateUrl(directives, beforeTemplateNodeLinkFn, $compileNode, tAttrs, $rootElement, replace, childTranscludeFn) {
                var afterTemplateNodeLinkFn, afterTemplateChildLinkFn, linkQueue = [], beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = extend({}, origAsyncDirective, {
                    controller: null,
                    templateUrl: null,
                    transclude: null,
                    scope: null
                }), templateUrl = isFunction(origAsyncDirective.templateUrl) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl;
                return $compileNode.html(""), $http.get(templateUrl, {
                    cache: $templateCache
                }).success(function(content) {
                    var compileNode, tempTemplateAttrs, $template;
                    if (content = denormalizeTemplate(content), replace) {
                        if ($template = jqLite("<div>" + trim(content) + "</div>").contents(), compileNode = $template[0], 
                        1 != $template.length || 1 !== compileNode.nodeType) throw new Error(MULTI_ROOT_TEMPLATE_ERROR + content);
                        tempTemplateAttrs = {
                            $attr: {}
                        }, replaceWith($rootElement, $compileNode, compileNode), collectDirectives(compileNode, directives, tempTemplateAttrs), 
                        mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
                    } else compileNode = beforeTemplateCompileNode, $compileNode.html(content);
                    for (directives.unshift(derivedSyncDirective), afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn), 
                    afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn); linkQueue.length; ) {
                        var scope = linkQueue.shift(), beforeTemplateLinkNode = linkQueue.shift(), linkRootElement = linkQueue.shift(), controller = linkQueue.shift(), linkNode = compileNode;
                        beforeTemplateLinkNode !== beforeTemplateCompileNode && (linkNode = JQLiteClone(compileNode), 
                        replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode)), afterTemplateNodeLinkFn(function() {
                            beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, controller);
                        }, scope, linkNode, $rootElement, controller);
                    }
                    linkQueue = null;
                }).error(function(response, code, headers, config) {
                    throw Error("Failed to load template: " + config.url);
                }), function(ignoreChildLinkFn, scope, node, rootElement, controller) {
                    linkQueue ? (linkQueue.push(scope), linkQueue.push(node), linkQueue.push(rootElement), 
                    linkQueue.push(controller)) : afterTemplateNodeLinkFn(function() {
                        beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, controller);
                    }, scope, node, rootElement, controller);
                };
            }
            function byPriority(a, b) {
                return b.priority - a.priority;
            }
            function assertNoDuplicate(what, previousDirective, directive, element) {
                if (previousDirective) throw Error("Multiple directives [" + previousDirective.name + ", " + directive.name + "] asking for " + what + " on: " + startingTag(element));
            }
            function addTextInterpolateDirective(directives, text) {
                var interpolateFn = $interpolate(text, !0);
                interpolateFn && directives.push({
                    priority: 0,
                    compile: valueFn(function(scope, node) {
                        var parent = node.parent(), bindings = parent.data("$binding") || [];
                        bindings.push(interpolateFn), safeAddClass(parent.data("$binding", bindings), "ng-binding"), 
                        scope.$watch(interpolateFn, function(value) {
                            node[0].nodeValue = value;
                        });
                    })
                });
            }
            function addAttrInterpolateDirective(node, directives, value, name) {
                var interpolateFn = $interpolate(value, !0);
                interpolateFn && directives.push({
                    priority: 100,
                    compile: valueFn(function(scope, element, attr) {
                        var $$observers = attr.$$observers || (attr.$$observers = {});
                        interpolateFn = $interpolate(attr[name], !0), interpolateFn && (attr[name] = interpolateFn(scope), 
                        ($$observers[name] || ($$observers[name] = [])).$$inter = !0, (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function(value) {
                            attr.$set(name, value);
                        }));
                    })
                });
            }
            function replaceWith($rootElement, $element, newNode) {
                var i, ii, oldNode = $element[0], parent = oldNode.parentNode;
                if ($rootElement) for (i = 0, ii = $rootElement.length; ii > i; i++) if ($rootElement[i] == oldNode) {
                    $rootElement[i] = newNode;
                    break;
                }
                parent && parent.replaceChild(newNode, oldNode), newNode[jqLite.expando] = oldNode[jqLite.expando], 
                $element[0] = newNode;
            }
            var Attributes = function(element, attr) {
                this.$$element = element, this.$attr = attr || {};
            };
            Attributes.prototype = {
                $normalize: directiveNormalize,
                $set: function(key, value, writeAttr, attrName) {
                    var normalizedVal, booleanKey = getBooleanAttrName(this.$$element[0], key), $$observers = this.$$observers;
                    booleanKey && (this.$$element.prop(key, value), attrName = booleanKey), this[key] = value, 
                    attrName ? this.$attr[key] = attrName : (attrName = this.$attr[key], attrName || (this.$attr[key] = attrName = snake_case(key, "-"))), 
                    "A" === nodeName_(this.$$element[0]) && "href" === key && (urlSanitizationNode.setAttribute("href", value), 
                    normalizedVal = urlSanitizationNode.href, normalizedVal.match(urlSanitizationWhitelist) || (this[key] = value = "unsafe:" + normalizedVal)), 
                    writeAttr !== !1 && (null === value || value === undefined ? this.$$element.removeAttr(attrName) : this.$$element.attr(attrName, value)), 
                    $$observers && forEach($$observers[key], function(fn) {
                        try {
                            fn(value);
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                    });
                },
                $observe: function(key, fn) {
                    var attrs = this, $$observers = attrs.$$observers || (attrs.$$observers = {}), listeners = $$observers[key] || ($$observers[key] = []);
                    return listeners.push(fn), $rootScope.$evalAsync(function() {
                        listeners.$$inter || fn(attrs[key]);
                    }), fn;
                }
            };
            var urlSanitizationNode = $document[0].createElement("a"), startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), denormalizeTemplate = "{{" == startSymbol || "}}" == endSymbol ? identity : function(template) {
                return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
            }, NG_ATTR_BINDING = /^ngAttr[A-Z]/;
            return compile;
        } ];
    }
    function directiveNormalize(name) {
        return camelCase(name.replace(PREFIX_REGEXP, ""));
    }
    function $ControllerProvider() {
        var controllers = {}, CNTRL_REG = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(name, constructor) {
            isObject(name) ? extend(controllers, name) : controllers[name] = constructor;
        }, this.$get = [ "$injector", "$window", function($injector, $window) {
            return function(expression, locals) {
                var instance, match, constructor, identifier;
                if (isString(expression) && (match = expression.match(CNTRL_REG), constructor = match[1], 
                identifier = match[3], expression = controllers.hasOwnProperty(constructor) ? controllers[constructor] : getter(locals.$scope, constructor, !0) || getter($window, constructor, !0), 
                assertArgFn(expression, constructor, !0)), instance = $injector.instantiate(expression, locals), 
                identifier) {
                    if ("object" != typeof locals.$scope) throw new Error('Can not export controller as "' + identifier + '". No scope object provided!');
                    locals.$scope[identifier] = instance;
                }
                return instance;
            };
        } ];
    }
    function $DocumentProvider() {
        this.$get = [ "$window", function(window) {
            return jqLite(window.document);
        } ];
    }
    function $ExceptionHandlerProvider() {
        this.$get = [ "$log", function($log) {
            return function() {
                $log.error.apply($log, arguments);
            };
        } ];
    }
    function $InterpolateProvider() {
        var startSymbol = "{{", endSymbol = "}}";
        this.startSymbol = function(value) {
            return value ? (startSymbol = value, this) : startSymbol;
        }, this.endSymbol = function(value) {
            return value ? (endSymbol = value, this) : endSymbol;
        }, this.$get = [ "$parse", "$exceptionHandler", function($parse, $exceptionHandler) {
            function $interpolate(text, mustHaveExpression) {
                for (var startIndex, endIndex, fn, exp, index = 0, parts = [], length = text.length, hasInterpolation = !1, concat = []; length > index; ) -1 != (startIndex = text.indexOf(startSymbol, index)) && -1 != (endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) ? (index != startIndex && parts.push(text.substring(index, startIndex)), 
                parts.push(fn = $parse(exp = text.substring(startIndex + startSymbolLength, endIndex))), 
                fn.exp = exp, index = endIndex + endSymbolLength, hasInterpolation = !0) : (index != length && parts.push(text.substring(index)), 
                index = length);
                return (length = parts.length) || (parts.push(""), length = 1), !mustHaveExpression || hasInterpolation ? (concat.length = length, 
                fn = function(context) {
                    try {
                        for (var part, i = 0, ii = length; ii > i; i++) "function" == typeof (part = parts[i]) && (part = part(context), 
                        null == part || part == undefined ? part = "" : "string" != typeof part && (part = toJson(part))), 
                        concat[i] = part;
                        return concat.join("");
                    } catch (err) {
                        var newErr = new Error("Error while interpolating: " + text + "\n" + err.toString());
                        $exceptionHandler(newErr);
                    }
                }, fn.exp = text, fn.parts = parts, fn) : void 0;
            }
            var startSymbolLength = startSymbol.length, endSymbolLength = endSymbol.length;
            return $interpolate.startSymbol = function() {
                return startSymbol;
            }, $interpolate.endSymbol = function() {
                return endSymbol;
            }, $interpolate;
        } ];
    }
    function encodePath(path) {
        for (var segments = path.split("/"), i = segments.length; i--; ) segments[i] = encodeUriSegment(segments[i]);
        return segments.join("/");
    }
    function matchUrl(url, obj) {
        var match = SERVER_MATCH.exec(url);
        obj.$$protocol = match[1], obj.$$host = match[3], obj.$$port = int(match[5]) || DEFAULT_PORTS[match[1]] || null;
    }
    function matchAppUrl(url, obj) {
        var match = PATH_MATCH.exec(url);
        obj.$$path = decodeURIComponent(match[1]), obj.$$search = parseKeyValue(match[3]), 
        obj.$$hash = decodeURIComponent(match[5] || ""), obj.$$path && "/" != obj.$$path.charAt(0) && (obj.$$path = "/" + obj.$$path);
    }
    function beginsWith(begin, whole, otherwise) {
        return 0 == whole.indexOf(begin) ? whole.substr(begin.length) : otherwise;
    }
    function stripHash(url) {
        var index = url.indexOf("#");
        return -1 == index ? url : url.substr(0, index);
    }
    function stripFile(url) {
        return url.substr(0, stripHash(url).lastIndexOf("/") + 1);
    }
    function serverBase(url) {
        return url.substring(0, url.indexOf("/", url.indexOf("//") + 2));
    }
    function LocationHtml5Url(appBase, basePrefix) {
        basePrefix = basePrefix || "";
        var appBaseNoFile = stripFile(appBase);
        this.$$parse = function(url) {
            var parsed = {};
            matchUrl(url, parsed);
            var pathUrl = beginsWith(appBaseNoFile, url);
            if (!isString(pathUrl)) throw Error('Invalid url "' + url + '", missing path prefix "' + appBaseNoFile + '".');
            matchAppUrl(pathUrl, parsed), extend(this, parsed), this.$$path || (this.$$path = "/"), 
            this.$$compose();
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBaseNoFile + this.$$url.substr(1);
        }, this.$$rewrite = function(url) {
            var appUrl, prevAppUrl;
            return (appUrl = beginsWith(appBase, url)) !== undefined ? (prevAppUrl = appUrl, 
            (appUrl = beginsWith(basePrefix, appUrl)) !== undefined ? appBaseNoFile + (beginsWith("/", appUrl) || appUrl) : appBase + prevAppUrl) : (appUrl = beginsWith(appBaseNoFile, url)) !== undefined ? appBaseNoFile + appUrl : appBaseNoFile == url + "/" ? appBaseNoFile : void 0;
        };
    }
    function LocationHashbangUrl(appBase, hashPrefix) {
        var appBaseNoFile = stripFile(appBase);
        this.$$parse = function(url) {
            matchUrl(url, this);
            var withoutBaseUrl = beginsWith(appBase, url) || beginsWith(appBaseNoFile, url);
            if (!isString(withoutBaseUrl)) throw new Error('Invalid url "' + url + '", does not start with "' + appBase + '".');
            var withoutHashUrl = "#" == withoutBaseUrl.charAt(0) ? beginsWith(hashPrefix, withoutBaseUrl) : withoutBaseUrl;
            if (!isString(withoutHashUrl)) throw new Error('Invalid url "' + url + '", missing hash prefix "' + hashPrefix + '".');
            matchAppUrl(withoutHashUrl, this), this.$$compose();
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : "");
        }, this.$$rewrite = function(url) {
            return stripHash(appBase) == stripHash(url) ? url : void 0;
        };
    }
    function LocationHashbangInHtml5Url(appBase, hashPrefix) {
        LocationHashbangUrl.apply(this, arguments);
        var appBaseNoFile = stripFile(appBase);
        this.$$rewrite = function(url) {
            var appUrl;
            return appBase == stripHash(url) ? url : (appUrl = beginsWith(appBaseNoFile, url)) ? appBase + hashPrefix + appUrl : appBaseNoFile === url + "/" ? appBaseNoFile : void 0;
        };
    }
    function locationGetter(property) {
        return function() {
            return this[property];
        };
    }
    function locationGetterSetter(property, preprocess) {
        return function(value) {
            return isUndefined(value) ? this[property] : (this[property] = preprocess(value), 
            this.$$compose(), this);
        };
    }
    function $LocationProvider() {
        var hashPrefix = "", html5Mode = !1;
        this.hashPrefix = function(prefix) {
            return isDefined(prefix) ? (hashPrefix = prefix, this) : hashPrefix;
        }, this.html5Mode = function(mode) {
            return isDefined(mode) ? (html5Mode = mode, this) : html5Mode;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function($rootScope, $browser, $sniffer, $rootElement) {
            function afterLocationChange(oldUrl) {
                $rootScope.$broadcast("$locationChangeSuccess", $location.absUrl(), oldUrl);
            }
            var $location, LocationMode, appBase, baseHref = $browser.baseHref(), initialUrl = $browser.url();
            html5Mode ? (appBase = baseHref ? serverBase(initialUrl) + baseHref : initialUrl, 
            LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url) : (appBase = stripHash(initialUrl), 
            LocationMode = LocationHashbangUrl), $location = new LocationMode(appBase, "#" + hashPrefix), 
            $location.$$parse($location.$$rewrite(initialUrl)), $rootElement.bind("click", function(event) {
                if (!event.ctrlKey && !event.metaKey && 2 != event.which) {
                    for (var elm = jqLite(event.target); "a" !== lowercase(elm[0].nodeName); ) if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0]) return;
                    var absHref = elm.prop("href"), rewrittenUrl = $location.$$rewrite(absHref);
                    absHref && !elm.attr("target") && rewrittenUrl && !event.isDefaultPrevented() && (event.preventDefault(), 
                    rewrittenUrl != $browser.url() && ($location.$$parse(rewrittenUrl), $rootScope.$apply(), 
                    window.angular["ff-684208-preventDefault"] = !0));
                }
            }), $location.absUrl() != initialUrl && $browser.url($location.absUrl(), !0), $browser.onUrlChange(function(newUrl) {
                if ($location.absUrl() != newUrl) {
                    if ($rootScope.$broadcast("$locationChangeStart", newUrl, $location.absUrl()).defaultPrevented) return void $browser.url($location.absUrl());
                    $rootScope.$evalAsync(function() {
                        var oldUrl = $location.absUrl();
                        $location.$$parse(newUrl), afterLocationChange(oldUrl);
                    }), $rootScope.$$phase || $rootScope.$digest();
                }
            });
            var changeCounter = 0;
            return $rootScope.$watch(function() {
                var oldUrl = $browser.url(), currentReplace = $location.$$replace;
                return changeCounter && oldUrl == $location.absUrl() || (changeCounter++, $rootScope.$evalAsync(function() {
                    $rootScope.$broadcast("$locationChangeStart", $location.absUrl(), oldUrl).defaultPrevented ? $location.$$parse(oldUrl) : ($browser.url($location.absUrl(), currentReplace), 
                    afterLocationChange(oldUrl));
                })), $location.$$replace = !1, changeCounter;
            }), $location;
        } ];
    }
    function $LogProvider() {
        var debug = !0, self = this;
        this.debugEnabled = function(flag) {
            return isDefined(flag) ? (debug = flag, this) : debug;
        }, this.$get = [ "$window", function($window) {
            function formatError(arg) {
                return arg instanceof Error && (arg.stack ? arg = arg.message && -1 === arg.stack.indexOf(arg.message) ? "Error: " + arg.message + "\n" + arg.stack : arg.stack : arg.sourceURL && (arg = arg.message + "\n" + arg.sourceURL + ":" + arg.line)), 
                arg;
            }
            function consoleLog(type) {
                var console = $window.console || {}, logFn = console[type] || console.log || noop;
                return logFn.apply ? function() {
                    var args = [];
                    return forEach(arguments, function(arg) {
                        args.push(formatError(arg));
                    }), logFn.apply(console, args);
                } : function(arg1, arg2) {
                    logFn(arg1, arg2);
                };
            }
            return {
                log: consoleLog("log"),
                warn: consoleLog("warn"),
                info: consoleLog("info"),
                error: consoleLog("error"),
                debug: function() {
                    var fn = consoleLog("debug");
                    return function() {
                        debug && fn.apply(self, arguments);
                    };
                }()
            };
        } ];
    }
    function lex(text, csp) {
        function is(chars) {
            return -1 != chars.indexOf(ch);
        }
        function was(chars) {
            return -1 != chars.indexOf(lastCh);
        }
        function peek(i) {
            var num = i || 1;
            return index + num < text.length ? text.charAt(index + num) : !1;
        }
        function isNumber(ch) {
            return ch >= "0" && "9" >= ch;
        }
        function isWhitespace(ch) {
            return " " == ch || "\r" == ch || "	" == ch || "\n" == ch || "" == ch || " " == ch;
        }
        function isIdent(ch) {
            return ch >= "a" && "z" >= ch || ch >= "A" && "Z" >= ch || "_" == ch || "$" == ch;
        }
        function isExpOperator(ch) {
            return "-" == ch || "+" == ch || isNumber(ch);
        }
        function throwError(error, start, end) {
            throw end = end || index, Error("Lexer Error: " + error + " at column" + (isDefined(start) ? "s " + start + "-" + index + " [" + text.substring(start, end) + "]" : " " + end) + " in expression [" + text + "].");
        }
        function readNumber() {
            for (var number = "", start = index; index < text.length; ) {
                var ch = lowercase(text.charAt(index));
                if ("." == ch || isNumber(ch)) number += ch; else {
                    var peekCh = peek();
                    if ("e" == ch && isExpOperator(peekCh)) number += ch; else if (isExpOperator(ch) && peekCh && isNumber(peekCh) && "e" == number.charAt(number.length - 1)) number += ch; else {
                        if (!isExpOperator(ch) || peekCh && isNumber(peekCh) || "e" != number.charAt(number.length - 1)) break;
                        throwError("Invalid exponent");
                    }
                }
                index++;
            }
            number = 1 * number, tokens.push({
                index: start,
                text: number,
                json: !0,
                fn: function() {
                    return number;
                }
            });
        }
        function readIdent() {
            for (var lastDot, peekIndex, methodName, ch, ident = "", start = index; index < text.length && (ch = text.charAt(index), 
            "." == ch || isIdent(ch) || isNumber(ch)); ) "." == ch && (lastDot = index), ident += ch, 
            index++;
            if (lastDot) for (peekIndex = index; peekIndex < text.length; ) {
                if (ch = text.charAt(peekIndex), "(" == ch) {
                    methodName = ident.substr(lastDot - start + 1), ident = ident.substr(0, lastDot - start), 
                    index = peekIndex;
                    break;
                }
                if (!isWhitespace(ch)) break;
                peekIndex++;
            }
            var token = {
                index: start,
                text: ident
            };
            if (OPERATORS.hasOwnProperty(ident)) token.fn = token.json = OPERATORS[ident]; else {
                var getter = getterFn(ident, csp);
                token.fn = extend(function(self, locals) {
                    return getter(self, locals);
                }, {
                    assign: function(self, value) {
                        return setter(self, ident, value);
                    }
                });
            }
            tokens.push(token), methodName && (tokens.push({
                index: lastDot,
                text: ".",
                json: !1
            }), tokens.push({
                index: lastDot + 1,
                text: methodName,
                json: !1
            }));
        }
        function readString(quote) {
            var start = index;
            index++;
            for (var string = "", rawString = quote, escape = !1; index < text.length; ) {
                var ch = text.charAt(index);
                if (rawString += ch, escape) {
                    if ("u" == ch) {
                        var hex = text.substring(index + 1, index + 5);
                        hex.match(/[\da-f]{4}/i) || throwError("Invalid unicode escape [\\u" + hex + "]"), 
                        index += 4, string += String.fromCharCode(parseInt(hex, 16));
                    } else {
                        var rep = ESCAPE[ch];
                        string += rep ? rep : ch;
                    }
                    escape = !1;
                } else if ("\\" == ch) escape = !0; else {
                    if (ch == quote) return index++, void tokens.push({
                        index: start,
                        text: rawString,
                        string: string,
                        json: !0,
                        fn: function() {
                            return string;
                        }
                    });
                    string += ch;
                }
                index++;
            }
            throwError("Unterminated quote", start);
        }
        for (var token, ch, tokens = [], index = 0, json = [], lastCh = ":"; index < text.length; ) {
            if (ch = text.charAt(index), is("\"'")) readString(ch); else if (isNumber(ch) || is(".") && isNumber(peek())) readNumber(); else if (isIdent(ch)) readIdent(), 
            was("{,") && "{" == json[0] && (token = tokens[tokens.length - 1]) && (token.json = -1 == token.text.indexOf(".")); else if (is("(){}[].,;:?")) tokens.push({
                index: index,
                text: ch,
                json: was(":[,") && is("{[") || is("}]:,")
            }), is("{[") && json.unshift(ch), is("}]") && json.shift(), index++; else {
                if (isWhitespace(ch)) {
                    index++;
                    continue;
                }
                var ch2 = ch + peek(), ch3 = ch2 + peek(2), fn = OPERATORS[ch], fn2 = OPERATORS[ch2], fn3 = OPERATORS[ch3];
                fn3 ? (tokens.push({
                    index: index,
                    text: ch3,
                    fn: fn3
                }), index += 3) : fn2 ? (tokens.push({
                    index: index,
                    text: ch2,
                    fn: fn2
                }), index += 2) : fn ? (tokens.push({
                    index: index,
                    text: ch,
                    fn: fn,
                    json: was("[,:") && is("+-")
                }), index += 1) : throwError("Unexpected next character ", index, index + 1);
            }
            lastCh = ch;
        }
        return tokens;
    }
    function parser(text, json, $filter, csp) {
        function throwError(msg, token) {
            throw Error("Syntax Error: Token '" + token.text + "' " + msg + " at column " + (token.index + 1) + " of the expression [" + text + "] starting at [" + text.substring(token.index) + "].");
        }
        function peekToken() {
            if (0 === tokens.length) throw Error("Unexpected end of expression: " + text);
            return tokens[0];
        }
        function peek(e1, e2, e3, e4) {
            if (tokens.length > 0) {
                var token = tokens[0], t = token.text;
                if (t == e1 || t == e2 || t == e3 || t == e4 || !e1 && !e2 && !e3 && !e4) return token;
            }
            return !1;
        }
        function expect(e1, e2, e3, e4) {
            var token = peek(e1, e2, e3, e4);
            return token ? (json && !token.json && throwError("is not valid json", token), tokens.shift(), 
            token) : !1;
        }
        function consume(e1) {
            expect(e1) || throwError("is unexpected, expecting [" + e1 + "]", peek());
        }
        function unaryFn(fn, right) {
            return extend(function(self, locals) {
                return fn(self, locals, right);
            }, {
                constant: right.constant
            });
        }
        function ternaryFn(left, middle, right) {
            return extend(function(self, locals) {
                return left(self, locals) ? middle(self, locals) : right(self, locals);
            }, {
                constant: left.constant && middle.constant && right.constant
            });
        }
        function binaryFn(left, fn, right) {
            return extend(function(self, locals) {
                return fn(self, locals, left, right);
            }, {
                constant: left.constant && right.constant
            });
        }
        function statements() {
            for (var statements = []; ;) if (tokens.length > 0 && !peek("}", ")", ";", "]") && statements.push(filterChain()), 
            !expect(";")) return 1 == statements.length ? statements[0] : function(self, locals) {
                for (var value, i = 0; i < statements.length; i++) {
                    var statement = statements[i];
                    statement && (value = statement(self, locals));
                }
                return value;
            };
        }
        function _filterChain() {
            for (var token, left = expression(); ;) {
                if (!(token = expect("|"))) return left;
                left = binaryFn(left, token.fn, filter());
            }
        }
        function filter() {
            for (var token = expect(), fn = $filter(token.text), argsFn = []; ;) {
                if (!(token = expect(":"))) {
                    var fnInvoke = function(self, locals, input) {
                        for (var args = [ input ], i = 0; i < argsFn.length; i++) args.push(argsFn[i](self, locals));
                        return fn.apply(self, args);
                    };
                    return function() {
                        return fnInvoke;
                    };
                }
                argsFn.push(expression());
            }
        }
        function expression() {
            return assignment();
        }
        function _assignment() {
            var right, token, left = ternary();
            return (token = expect("=")) ? (left.assign || throwError("implies assignment but [" + text.substring(0, token.index) + "] can not be assigned to", token), 
            right = ternary(), function(scope, locals) {
                return left.assign(scope, right(scope, locals), locals);
            }) : left;
        }
        function ternary() {
            var middle, token, left = logicalOR();
            return (token = expect("?")) ? (middle = ternary(), (token = expect(":")) ? ternaryFn(left, middle, ternary()) : void throwError("expected :", token)) : left;
        }
        function logicalOR() {
            for (var token, left = logicalAND(); ;) {
                if (!(token = expect("||"))) return left;
                left = binaryFn(left, token.fn, logicalAND());
            }
        }
        function logicalAND() {
            var token, left = equality();
            return (token = expect("&&")) && (left = binaryFn(left, token.fn, logicalAND())), 
            left;
        }
        function equality() {
            var token, left = relational();
            return (token = expect("==", "!=", "===", "!==")) && (left = binaryFn(left, token.fn, equality())), 
            left;
        }
        function relational() {
            var token, left = additive();
            return (token = expect("<", ">", "<=", ">=")) && (left = binaryFn(left, token.fn, relational())), 
            left;
        }
        function additive() {
            for (var token, left = multiplicative(); token = expect("+", "-"); ) left = binaryFn(left, token.fn, multiplicative());
            return left;
        }
        function multiplicative() {
            for (var token, left = unary(); token = expect("*", "/", "%"); ) left = binaryFn(left, token.fn, unary());
            return left;
        }
        function unary() {
            var token;
            return expect("+") ? primary() : (token = expect("-")) ? binaryFn(ZERO, token.fn, unary()) : (token = expect("!")) ? unaryFn(token.fn, unary()) : primary();
        }
        function primary() {
            var primary;
            if (expect("(")) primary = filterChain(), consume(")"); else if (expect("[")) primary = arrayDeclaration(); else if (expect("{")) primary = object(); else {
                var token = expect();
                primary = token.fn, primary || throwError("not a primary expression", token), token.json && (primary.constant = primary.literal = !0);
            }
            for (var next, context; next = expect("(", "[", "."); ) "(" === next.text ? (primary = functionCall(primary, context), 
            context = null) : "[" === next.text ? (context = primary, primary = objectIndex(primary)) : "." === next.text ? (context = primary, 
            primary = fieldAccess(primary)) : throwError("IMPOSSIBLE");
            return primary;
        }
        function _fieldAccess(object) {
            var field = expect().text, getter = getterFn(field, csp);
            return extend(function(scope, locals, self) {
                return getter(self || object(scope, locals), locals);
            }, {
                assign: function(scope, value, locals) {
                    return setter(object(scope, locals), field, value);
                }
            });
        }
        function _objectIndex(obj) {
            var indexFn = expression();
            return consume("]"), extend(function(self, locals) {
                var v, p, o = obj(self, locals), i = indexFn(self, locals);
                return o ? (v = o[i], v && v.then && (p = v, "$$v" in v || (p.$$v = undefined, p.then(function(val) {
                    p.$$v = val;
                })), v = v.$$v), v) : undefined;
            }, {
                assign: function(self, value, locals) {
                    return obj(self, locals)[indexFn(self, locals)] = value;
                }
            });
        }
        function _functionCall(fn, contextGetter) {
            var argsFn = [];
            if (")" != peekToken().text) do argsFn.push(expression()); while (expect(","));
            return consume(")"), function(scope, locals) {
                for (var args = [], context = contextGetter ? contextGetter(scope, locals) : scope, i = 0; i < argsFn.length; i++) args.push(argsFn[i](scope, locals));
                var fnPtr = fn(scope, locals, context) || noop;
                return fnPtr.apply ? fnPtr.apply(context, args) : fnPtr(args[0], args[1], args[2], args[3], args[4]);
            };
        }
        function arrayDeclaration() {
            var elementFns = [], allConstant = !0;
            if ("]" != peekToken().text) do {
                var elementFn = expression();
                elementFns.push(elementFn), elementFn.constant || (allConstant = !1);
            } while (expect(","));
            return consume("]"), extend(function(self, locals) {
                for (var array = [], i = 0; i < elementFns.length; i++) array.push(elementFns[i](self, locals));
                return array;
            }, {
                literal: !0,
                constant: allConstant
            });
        }
        function object() {
            var keyValues = [], allConstant = !0;
            if ("}" != peekToken().text) do {
                var token = expect(), key = token.string || token.text;
                consume(":");
                var value = expression();
                keyValues.push({
                    key: key,
                    value: value
                }), value.constant || (allConstant = !1);
            } while (expect(","));
            return consume("}"), extend(function(self, locals) {
                for (var object = {}, i = 0; i < keyValues.length; i++) {
                    var keyValue = keyValues[i];
                    object[keyValue.key] = keyValue.value(self, locals);
                }
                return object;
            }, {
                literal: !0,
                constant: allConstant
            });
        }
        var value, ZERO = valueFn(0), tokens = lex(text, csp), assignment = _assignment, functionCall = _functionCall, fieldAccess = _fieldAccess, objectIndex = _objectIndex, filterChain = _filterChain;
        return json ? (assignment = logicalOR, functionCall = fieldAccess = objectIndex = filterChain = function() {
            throwError("is not valid json", {
                text: text,
                index: 0
            });
        }, value = primary()) : value = statements(), 0 !== tokens.length && throwError("is an unexpected token", tokens[0]), 
        value.literal = !!value.literal, value.constant = !!value.constant, value;
    }
    function setter(obj, path, setValue) {
        for (var element = path.split("."), i = 0; element.length > 1; i++) {
            var key = element.shift(), propertyObj = obj[key];
            propertyObj || (propertyObj = {}, obj[key] = propertyObj), obj = propertyObj;
        }
        return obj[element.shift()] = setValue, setValue;
    }
    function getter(obj, path, bindFnToScope) {
        if (!path) return obj;
        for (var key, keys = path.split("."), lastInstance = obj, len = keys.length, i = 0; len > i; i++) key = keys[i], 
        obj && (obj = (lastInstance = obj)[key]);
        return !bindFnToScope && isFunction(obj) ? bind(lastInstance, obj) : obj;
    }
    function cspSafeGetterFn(key0, key1, key2, key3, key4) {
        return function(scope, locals) {
            var promise, pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope;
            return null === pathVal || pathVal === undefined ? pathVal : (pathVal = pathVal[key0], 
            pathVal && pathVal.then && ("$$v" in pathVal || (promise = pathVal, promise.$$v = undefined, 
            promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key1 && null !== pathVal && pathVal !== undefined ? (pathVal = pathVal[key1], 
            pathVal && pathVal.then && ("$$v" in pathVal || (promise = pathVal, promise.$$v = undefined, 
            promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key2 && null !== pathVal && pathVal !== undefined ? (pathVal = pathVal[key2], 
            pathVal && pathVal.then && ("$$v" in pathVal || (promise = pathVal, promise.$$v = undefined, 
            promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key3 && null !== pathVal && pathVal !== undefined ? (pathVal = pathVal[key3], 
            pathVal && pathVal.then && ("$$v" in pathVal || (promise = pathVal, promise.$$v = undefined, 
            promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key4 && null !== pathVal && pathVal !== undefined ? (pathVal = pathVal[key4], 
            pathVal && pathVal.then && ("$$v" in pathVal || (promise = pathVal, promise.$$v = undefined, 
            promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), pathVal) : pathVal) : pathVal) : pathVal) : pathVal);
        };
    }
    function getterFn(path, csp) {
        if (getterFnCache.hasOwnProperty(path)) return getterFnCache[path];
        var fn, pathKeys = path.split("."), pathKeysLength = pathKeys.length;
        if (csp) fn = 6 > pathKeysLength ? cspSafeGetterFn(pathKeys[0], pathKeys[1], pathKeys[2], pathKeys[3], pathKeys[4]) : function(scope, locals) {
            var val, i = 0;
            do val = cspSafeGetterFn(pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++])(scope, locals), 
            locals = undefined, scope = val; while (pathKeysLength > i);
            return val;
        }; else {
            var code = "var l, fn, p;\n";
            forEach(pathKeys, function(key, index) {
                code += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (index ? "s" : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n';
            }), code += "return s;", fn = Function("s", "k", code), fn.toString = function() {
                return code;
            };
        }
        return getterFnCache[path] = fn;
    }
    function $ParseProvider() {
        var cache = {};
        this.$get = [ "$filter", "$sniffer", function($filter, $sniffer) {
            return function(exp) {
                switch (typeof exp) {
                  case "string":
                    return cache.hasOwnProperty(exp) ? cache[exp] : cache[exp] = parser(exp, !1, $filter, $sniffer.csp);

                  case "function":
                    return exp;

                  default:
                    return noop;
                }
            };
        } ];
    }
    function $QProvider() {
        this.$get = [ "$rootScope", "$exceptionHandler", function($rootScope, $exceptionHandler) {
            return qFactory(function(callback) {
                $rootScope.$evalAsync(callback);
            }, $exceptionHandler);
        } ];
    }
    function qFactory(nextTick, exceptionHandler) {
        function defaultCallback(value) {
            return value;
        }
        function defaultErrback(reason) {
            return reject(reason);
        }
        function all(promises) {
            var deferred = defer(), counter = 0, results = isArray(promises) ? [] : {};
            return forEach(promises, function(promise, key) {
                counter++, ref(promise).then(function(value) {
                    results.hasOwnProperty(key) || (results[key] = value, --counter || deferred.resolve(results));
                }, function(reason) {
                    results.hasOwnProperty(key) || deferred.reject(reason);
                });
            }), 0 === counter && deferred.resolve(results), deferred.promise;
        }
        var defer = function() {
            var value, deferred, pending = [];
            return deferred = {
                resolve: function(val) {
                    if (pending) {
                        var callbacks = pending;
                        pending = undefined, value = ref(val), callbacks.length && nextTick(function() {
                            for (var callback, i = 0, ii = callbacks.length; ii > i; i++) callback = callbacks[i], 
                            value.then(callback[0], callback[1]);
                        });
                    }
                },
                reject: function(reason) {
                    deferred.resolve(reject(reason));
                },
                promise: {
                    then: function(callback, errback) {
                        var result = defer(), wrappedCallback = function(value) {
                            try {
                                result.resolve((callback || defaultCallback)(value));
                            } catch (e) {
                                exceptionHandler(e), result.reject(e);
                            }
                        }, wrappedErrback = function(reason) {
                            try {
                                result.resolve((errback || defaultErrback)(reason));
                            } catch (e) {
                                exceptionHandler(e), result.reject(e);
                            }
                        };
                        return pending ? pending.push([ wrappedCallback, wrappedErrback ]) : value.then(wrappedCallback, wrappedErrback), 
                        result.promise;
                    },
                    always: function(callback) {
                        function makePromise(value, resolved) {
                            var result = defer();
                            return resolved ? result.resolve(value) : result.reject(value), result.promise;
                        }
                        function handleCallback(value, isResolved) {
                            var callbackOutput = null;
                            try {
                                callbackOutput = (callback || defaultCallback)();
                            } catch (e) {
                                return makePromise(e, !1);
                            }
                            return callbackOutput && callbackOutput.then ? callbackOutput.then(function() {
                                return makePromise(value, isResolved);
                            }, function(error) {
                                return makePromise(error, !1);
                            }) : makePromise(value, isResolved);
                        }
                        return this.then(function(value) {
                            return handleCallback(value, !0);
                        }, function(error) {
                            return handleCallback(error, !1);
                        });
                    }
                }
            };
        }, ref = function(value) {
            return value && value.then ? value : {
                then: function(callback) {
                    var result = defer();
                    return nextTick(function() {
                        result.resolve(callback(value));
                    }), result.promise;
                }
            };
        }, reject = function(reason) {
            return {
                then: function(callback, errback) {
                    var result = defer();
                    return nextTick(function() {
                        result.resolve((errback || defaultErrback)(reason));
                    }), result.promise;
                }
            };
        }, when = function(value, callback, errback) {
            var done, result = defer(), wrappedCallback = function(value) {
                try {
                    return (callback || defaultCallback)(value);
                } catch (e) {
                    return exceptionHandler(e), reject(e);
                }
            }, wrappedErrback = function(reason) {
                try {
                    return (errback || defaultErrback)(reason);
                } catch (e) {
                    return exceptionHandler(e), reject(e);
                }
            };
            return nextTick(function() {
                ref(value).then(function(value) {
                    done || (done = !0, result.resolve(ref(value).then(wrappedCallback, wrappedErrback)));
                }, function(reason) {
                    done || (done = !0, result.resolve(wrappedErrback(reason)));
                });
            }), result.promise;
        };
        return {
            defer: defer,
            reject: reject,
            when: when,
            all: all
        };
    }
    function $RouteProvider() {
        var routes = {};
        this.when = function(path, route) {
            if (routes[path] = extend({
                reloadOnSearch: !0,
                caseInsensitiveMatch: !1
            }, route), path) {
                var redirectPath = "/" == path[path.length - 1] ? path.substr(0, path.length - 1) : path + "/";
                routes[redirectPath] = {
                    redirectTo: path
                };
            }
            return this;
        }, this.otherwise = function(params) {
            return this.when(null, params), this;
        }, this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache) {
            function switchRouteMatcher(on, when, whenProperties) {
                when = "^" + when.replace(/[-\/\\^$:*+?.()|[\]{}]/g, "\\$&") + "$";
                for (var paramMatch, regex = "", params = [], dst = {}, re = /\\([:*])(\w+)/g, lastMatchedIndex = 0; null !== (paramMatch = re.exec(when)); ) {
                    switch (regex += when.slice(lastMatchedIndex, paramMatch.index), paramMatch[1]) {
                      case ":":
                        regex += "([^\\/]*)";
                        break;

                      case "*":
                        regex += "(.*)";
                    }
                    params.push(paramMatch[2]), lastMatchedIndex = re.lastIndex;
                }
                regex += when.substr(lastMatchedIndex);
                var match = on.match(new RegExp(regex, whenProperties.caseInsensitiveMatch ? "i" : ""));
                return match && forEach(params, function(name, index) {
                    dst[name] = match[index + 1];
                }), match ? dst : null;
            }
            function updateRoute() {
                var next = parseRoute(), last = $route.current;
                next && last && next.$$route === last.$$route && equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload ? (last.params = next.params, 
                copy(last.params, $routeParams), $rootScope.$broadcast("$routeUpdate", last)) : (next || last) && (forceReload = !1, 
                $rootScope.$broadcast("$routeChangeStart", next, last), $route.current = next, next && next.redirectTo && (isString(next.redirectTo) ? $location.path(interpolate(next.redirectTo, next.params)).search(next.params).replace() : $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search())).replace()), 
                $q.when(next).then(function() {
                    if (next) {
                        var template, locals = extend({}, next.resolve);
                        return forEach(locals, function(value, key) {
                            locals[key] = isString(value) ? $injector.get(value) : $injector.invoke(value);
                        }), isDefined(template = next.template) ? isFunction(template) && (template = template(next.params)) : isDefined(template = next.templateUrl) && (isFunction(template) && (template = template(next.params)), 
                        isDefined(template) && (next.loadedTemplateUrl = template, template = $http.get(template, {
                            cache: $templateCache
                        }).then(function(response) {
                            return response.data;
                        }))), isDefined(template) && (locals.$template = template), $q.all(locals);
                    }
                }).then(function(locals) {
                    next == $route.current && (next && (next.locals = locals, copy(next.params, $routeParams)), 
                    $rootScope.$broadcast("$routeChangeSuccess", next, last));
                }, function(error) {
                    next == $route.current && $rootScope.$broadcast("$routeChangeError", next, last, error);
                }));
            }
            function parseRoute() {
                var params, match;
                return forEach(routes, function(route, path) {
                    !match && (params = switchRouteMatcher($location.path(), path, route)) && (match = inherit(route, {
                        params: extend({}, $location.search(), params),
                        pathParams: params
                    }), match.$$route = route);
                }), match || routes[null] && inherit(routes[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function interpolate(string, params) {
                var result = [];
                return forEach((string || "").split(":"), function(segment, i) {
                    if (0 == i) result.push(segment); else {
                        var segmentMatch = segment.match(/(\w+)(.*)/), key = segmentMatch[1];
                        result.push(params[key]), result.push(segmentMatch[2] || ""), delete params[key];
                    }
                }), result.join("");
            }
            var forceReload = !1, $route = {
                routes: routes,
                reload: function() {
                    forceReload = !0, $rootScope.$evalAsync(updateRoute);
                }
            };
            return $rootScope.$on("$locationChangeSuccess", updateRoute), $route;
        } ];
    }
    function $RouteParamsProvider() {
        this.$get = valueFn({});
    }
    function $RootScopeProvider() {
        var TTL = 10;
        this.digestTtl = function(value) {
            return arguments.length && (TTL = value), TTL;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", function($injector, $exceptionHandler, $parse) {
            function Scope() {
                this.$id = nextUid(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], 
                this.$$listeners = {}, this.$$isolateBindings = {};
            }
            function beginPhase(phase) {
                if ($rootScope.$$phase) throw Error($rootScope.$$phase + " already in progress");
                $rootScope.$$phase = phase;
            }
            function clearPhase() {
                $rootScope.$$phase = null;
            }
            function compileToFn(exp, name) {
                var fn = $parse(exp);
                return assertArgFn(fn, name), fn;
            }
            function initWatchVal() {}
            Scope.prototype = {
                $new: function(isolate) {
                    var Child, child;
                    if (isFunction(isolate)) throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                    return isolate ? (child = new Scope(), child.$root = this.$root) : (Child = function() {}, 
                    Child.prototype = this, child = new Child(), child.$id = nextUid()), child["this"] = child, 
                    child.$$listeners = {}, child.$parent = this, child.$$watchers = child.$$nextSibling = child.$$childHead = child.$$childTail = null, 
                    child.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = child, 
                    this.$$childTail = child) : this.$$childHead = this.$$childTail = child, child;
                },
                $watch: function(watchExp, listener, objectEquality) {
                    var scope = this, get = compileToFn(watchExp, "watch"), array = scope.$$watchers, watcher = {
                        fn: listener,
                        last: initWatchVal,
                        get: get,
                        exp: watchExp,
                        eq: !!objectEquality
                    };
                    if (!isFunction(listener)) {
                        var listenFn = compileToFn(listener || noop, "listener");
                        watcher.fn = function(newVal, oldVal, scope) {
                            listenFn(scope);
                        };
                    }
                    if ("string" == typeof watchExp && get.constant) {
                        var originalFn = watcher.fn;
                        watcher.fn = function(newVal, oldVal, scope) {
                            originalFn.call(this, newVal, oldVal, scope), arrayRemove(array, watcher);
                        };
                    }
                    return array || (array = scope.$$watchers = []), array.unshift(watcher), function() {
                        arrayRemove(array, watcher);
                    };
                },
                $watchCollection: function(obj, listener) {
                    function $watchCollectionWatch() {
                        newValue = objGetter(self);
                        var newLength, key;
                        if (isObject(newValue)) if (isArrayLike(newValue)) {
                            oldValue !== internalArray && (oldValue = internalArray, oldLength = oldValue.length = 0, 
                            changeDetected++), newLength = newValue.length, oldLength !== newLength && (changeDetected++, 
                            oldValue.length = oldLength = newLength);
                            for (var i = 0; newLength > i; i++) oldValue[i] !== newValue[i] && (changeDetected++, 
                            oldValue[i] = newValue[i]);
                        } else {
                            oldValue !== internalObject && (oldValue = internalObject = {}, oldLength = 0, changeDetected++), 
                            newLength = 0;
                            for (key in newValue) newValue.hasOwnProperty(key) && (newLength++, oldValue.hasOwnProperty(key) ? oldValue[key] !== newValue[key] && (changeDetected++, 
                            oldValue[key] = newValue[key]) : (oldLength++, oldValue[key] = newValue[key], changeDetected++));
                            if (oldLength > newLength) {
                                changeDetected++;
                                for (key in oldValue) oldValue.hasOwnProperty(key) && !newValue.hasOwnProperty(key) && (oldLength--, 
                                delete oldValue[key]);
                            }
                        } else oldValue !== newValue && (oldValue = newValue, changeDetected++);
                        return changeDetected;
                    }
                    function $watchCollectionAction() {
                        listener(newValue, oldValue, self);
                    }
                    var oldValue, newValue, self = this, changeDetected = 0, objGetter = $parse(obj), internalArray = [], internalObject = {}, oldLength = 0;
                    return this.$watch($watchCollectionWatch, $watchCollectionAction);
                },
                $digest: function() {
                    var watch, value, last, watchers, length, dirty, next, current, logIdx, logMsg, asyncQueue = this.$$asyncQueue, ttl = TTL, target = this, watchLog = [];
                    beginPhase("$digest");
                    do {
                        for (dirty = !1, current = target; asyncQueue.length; ) try {
                            current.$eval(asyncQueue.shift());
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                        do {
                            if (watchers = current.$$watchers) for (length = watchers.length; length--; ) try {
                                watch = watchers[length], (value = watch.get(current)) === (last = watch.last) || (watch.eq ? equals(value, last) : "number" == typeof value && "number" == typeof last && isNaN(value) && isNaN(last)) || (dirty = !0, 
                                watch.last = watch.eq ? copy(value) : value, watch.fn(value, last === initWatchVal ? value : last, current), 
                                5 > ttl && (logIdx = 4 - ttl, watchLog[logIdx] || (watchLog[logIdx] = []), logMsg = isFunction(watch.exp) ? "fn: " + (watch.exp.name || watch.exp.toString()) : watch.exp, 
                                logMsg += "; newVal: " + toJson(value) + "; oldVal: " + toJson(last), watchLog[logIdx].push(logMsg)));
                            } catch (e) {
                                $exceptionHandler(e);
                            }
                            if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) for (;current !== target && !(next = current.$$nextSibling); ) current = current.$parent;
                        } while (current = next);
                        if (dirty && !ttl--) throw clearPhase(), Error(TTL + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + toJson(watchLog));
                    } while (dirty || asyncQueue.length);
                    clearPhase();
                },
                $destroy: function() {
                    if ($rootScope != this && !this.$$destroyed) {
                        var parent = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, parent.$$childHead == this && (parent.$$childHead = this.$$nextSibling), 
                        parent.$$childTail == this && (parent.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), 
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    }
                },
                $eval: function(expr, locals) {
                    return $parse(expr)(this, locals);
                },
                $evalAsync: function(expr) {
                    this.$$asyncQueue.push(expr);
                },
                $apply: function(expr) {
                    try {
                        return beginPhase("$apply"), this.$eval(expr);
                    } catch (e) {
                        $exceptionHandler(e);
                    } finally {
                        clearPhase();
                        try {
                            $rootScope.$digest();
                        } catch (e) {
                            throw $exceptionHandler(e), e;
                        }
                    }
                },
                $on: function(name, listener) {
                    var namedListeners = this.$$listeners[name];
                    return namedListeners || (this.$$listeners[name] = namedListeners = []), namedListeners.push(listener), 
                    function() {
                        namedListeners[indexOf(namedListeners, listener)] = null;
                    };
                },
                $emit: function(name) {
                    var namedListeners, i, length, empty = [], scope = this, stopPropagation = !1, event = {
                        name: name,
                        targetScope: scope,
                        stopPropagation: function() {
                            stopPropagation = !0;
                        },
                        preventDefault: function() {
                            event.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, listenerArgs = concat([ event ], arguments, 1);
                    do {
                        for (namedListeners = scope.$$listeners[name] || empty, event.currentScope = scope, 
                        i = 0, length = namedListeners.length; length > i; i++) if (namedListeners[i]) try {
                            if (namedListeners[i].apply(null, listenerArgs), stopPropagation) return event;
                        } catch (e) {
                            $exceptionHandler(e);
                        } else namedListeners.splice(i, 1), i--, length--;
                        scope = scope.$parent;
                    } while (scope);
                    return event;
                },
                $broadcast: function(name) {
                    var listeners, i, length, target = this, current = target, next = target, event = {
                        name: name,
                        targetScope: target,
                        preventDefault: function() {
                            event.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, listenerArgs = concat([ event ], arguments, 1);
                    do {
                        for (current = next, event.currentScope = current, listeners = current.$$listeners[name] || [], 
                        i = 0, length = listeners.length; length > i; i++) if (listeners[i]) try {
                            listeners[i].apply(null, listenerArgs);
                        } catch (e) {
                            $exceptionHandler(e);
                        } else listeners.splice(i, 1), i--, length--;
                        if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) for (;current !== target && !(next = current.$$nextSibling); ) current = current.$parent;
                    } while (current = next);
                    return event;
                }
            };
            var $rootScope = new Scope();
            return $rootScope;
        } ];
    }
    function $SnifferProvider() {
        this.$get = [ "$window", "$document", function($window, $document) {
            var vendorPrefix, match, eventSupport = {}, android = int((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]), document = $document[0] || {}, vendorRegex = /^(Moz|webkit|O|ms)(?=[A-Z])/, bodyStyle = document.body && document.body.style, transitions = !1, animations = !1;
            if (bodyStyle) {
                for (var prop in bodyStyle) if (match = vendorRegex.exec(prop)) {
                    vendorPrefix = match[0], vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
                    break;
                }
                transitions = !!("transition" in bodyStyle || vendorPrefix + "Transition" in bodyStyle), 
                animations = !!("animation" in bodyStyle || vendorPrefix + "Animation" in bodyStyle);
            }
            return {
                history: !(!$window.history || !$window.history.pushState || 4 > android),
                hashchange: "onhashchange" in $window && (!document.documentMode || document.documentMode > 7),
                hasEvent: function(event) {
                    if ("input" == event && 9 == msie) return !1;
                    if (isUndefined(eventSupport[event])) {
                        var divElm = document.createElement("div");
                        eventSupport[event] = "on" + event in divElm;
                    }
                    return eventSupport[event];
                },
                csp: document.securityPolicy ? document.securityPolicy.isActive : !1,
                vendorPrefix: vendorPrefix,
                transitions: transitions,
                animations: animations
            };
        } ];
    }
    function $WindowProvider() {
        this.$get = valueFn(window);
    }
    function parseHeaders(headers) {
        var key, val, i, parsed = {};
        return headers ? (forEach(headers.split("\n"), function(line) {
            i = line.indexOf(":"), key = lowercase(trim(line.substr(0, i))), val = trim(line.substr(i + 1)), 
            key && (parsed[key] ? parsed[key] += ", " + val : parsed[key] = val);
        }), parsed) : parsed;
    }
    function isSameDomain(requestUrl, locationUrl) {
        var match = IS_SAME_DOMAIN_URL_MATCH.exec(requestUrl);
        if (null == match) return !0;
        var domain1 = {
            protocol: match[2],
            host: match[4],
            port: int(match[6]) || DEFAULT_PORTS[match[2]] || null,
            relativeProtocol: match[2] === undefined || "" === match[2]
        };
        match = SERVER_MATCH.exec(locationUrl);
        var domain2 = {
            protocol: match[1],
            host: match[3],
            port: int(match[5]) || DEFAULT_PORTS[match[1]] || null
        };
        return (domain1.protocol == domain2.protocol || domain1.relativeProtocol) && domain1.host == domain2.host && (domain1.port == domain2.port || domain1.relativeProtocol && domain2.port == DEFAULT_PORTS[domain2.protocol]);
    }
    function headersGetter(headers) {
        var headersObj = isObject(headers) ? headers : undefined;
        return function(name) {
            return headersObj || (headersObj = parseHeaders(headers)), name ? headersObj[lowercase(name)] || null : headersObj;
        };
    }
    function transformData(data, headers, fns) {
        return isFunction(fns) ? fns(data, headers) : (forEach(fns, function(fn) {
            data = fn(data, headers);
        }), data);
    }
    function isSuccess(status) {
        return status >= 200 && 300 > status;
    }
    function $HttpProvider() {
        var JSON_START = /^\s*(\[|\{[^\{])/, JSON_END = /[\}\]]\s*$/, PROTECTION_PREFIX = /^\)\]\}',?\n/, CONTENT_TYPE_APPLICATION_JSON = {
            "Content-Type": "application/json;charset=utf-8"
        }, defaults = this.defaults = {
            transformResponse: [ function(data) {
                return isString(data) && (data = data.replace(PROTECTION_PREFIX, ""), JSON_START.test(data) && JSON_END.test(data) && (data = fromJson(data, !0))), 
                data;
            } ],
            transformRequest: [ function(d) {
                return isObject(d) && !isFile(d) ? toJson(d) : d;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: CONTENT_TYPE_APPLICATION_JSON,
                put: CONTENT_TYPE_APPLICATION_JSON,
                patch: CONTENT_TYPE_APPLICATION_JSON
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, interceptorFactories = this.interceptors = [], responseInterceptorFactories = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function($httpBackend, $browser, $cacheFactory, $rootScope, $q, $injector) {
            function $http(requestConfig) {
                function transformResponse(response) {
                    var resp = extend({}, response, {
                        data: transformData(response.data, response.headers, config.transformResponse)
                    });
                    return isSuccess(response.status) ? resp : $q.reject(resp);
                }
                var config = {
                    transformRequest: defaults.transformRequest,
                    transformResponse: defaults.transformResponse
                }, headers = {};
                extend(config, requestConfig), config.headers = headers, config.method = uppercase(config.method), 
                extend(headers, defaults.headers.common, defaults.headers[lowercase(config.method)], requestConfig.headers);
                var xsrfValue = isSameDomain(config.url, $browser.url()) ? $browser.cookies()[config.xsrfCookieName || defaults.xsrfCookieName] : undefined;
                xsrfValue && (headers[config.xsrfHeaderName || defaults.xsrfHeaderName] = xsrfValue);
                var serverRequest = function(config) {
                    var reqData = transformData(config.data, headersGetter(headers), config.transformRequest);
                    return isUndefined(config.data) && delete headers["Content-Type"], isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials) && (config.withCredentials = defaults.withCredentials), 
                    sendReq(config, reqData, headers).then(transformResponse, transformResponse);
                }, chain = [ serverRequest, undefined ], promise = $q.when(config);
                for (forEach(reversedInterceptors, function(interceptor) {
                    (interceptor.request || interceptor.requestError) && chain.unshift(interceptor.request, interceptor.requestError), 
                    (interceptor.response || interceptor.responseError) && chain.push(interceptor.response, interceptor.responseError);
                }); chain.length; ) {
                    var thenFn = chain.shift(), rejectFn = chain.shift();
                    promise = promise.then(thenFn, rejectFn);
                }
                return promise.success = function(fn) {
                    return promise.then(function(response) {
                        fn(response.data, response.status, response.headers, config);
                    }), promise;
                }, promise.error = function(fn) {
                    return promise.then(null, function(response) {
                        fn(response.data, response.status, response.headers, config);
                    }), promise;
                }, promise;
            }
            function createShortMethods() {
                forEach(arguments, function(name) {
                    $http[name] = function(url, config) {
                        return $http(extend(config || {}, {
                            method: name,
                            url: url
                        }));
                    };
                });
            }
            function createShortMethodsWithData() {
                forEach(arguments, function(name) {
                    $http[name] = function(url, data, config) {
                        return $http(extend(config || {}, {
                            method: name,
                            url: url,
                            data: data
                        }));
                    };
                });
            }
            function sendReq(config, reqData, reqHeaders) {
                function done(status, response, headersString) {
                    cache && (isSuccess(status) ? cache.put(url, [ status, response, parseHeaders(headersString) ]) : cache.remove(url)), 
                    resolvePromise(response, status, headersString), $rootScope.$$phase || $rootScope.$apply();
                }
                function resolvePromise(response, status, headers) {
                    status = Math.max(status, 0), (isSuccess(status) ? deferred.resolve : deferred.reject)({
                        data: response,
                        status: status,
                        headers: headersGetter(headers),
                        config: config
                    });
                }
                function removePendingReq() {
                    var idx = indexOf($http.pendingRequests, config);
                    -1 !== idx && $http.pendingRequests.splice(idx, 1);
                }
                var cache, cachedResp, deferred = $q.defer(), promise = deferred.promise, url = buildUrl(config.url, config.params);
                if ($http.pendingRequests.push(config), promise.then(removePendingReq, removePendingReq), 
                (config.cache || defaults.cache) && config.cache !== !1 && "GET" == config.method && (cache = isObject(config.cache) ? config.cache : isObject(defaults.cache) ? defaults.cache : defaultCache), 
                cache) if (cachedResp = cache.get(url)) {
                    if (cachedResp.then) return cachedResp.then(removePendingReq, removePendingReq), 
                    cachedResp;
                    isArray(cachedResp) ? resolvePromise(cachedResp[1], cachedResp[0], copy(cachedResp[2])) : resolvePromise(cachedResp, 200, {});
                } else cache.put(url, promise);
                return cachedResp || $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials, config.responseType), 
                promise;
            }
            function buildUrl(url, params) {
                if (!params) return url;
                var parts = [];
                return forEachSorted(params, function(value, key) {
                    null != value && value != undefined && (isArray(value) || (value = [ value ]), forEach(value, function(v) {
                        isObject(v) && (v = toJson(v)), parts.push(encodeUriQuery(key) + "=" + encodeUriQuery(v));
                    }));
                }), url + (-1 == url.indexOf("?") ? "?" : "&") + parts.join("&");
            }
            var defaultCache = $cacheFactory("$http"), reversedInterceptors = [];
            return forEach(interceptorFactories, function(interceptorFactory) {
                reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
            }), forEach(responseInterceptorFactories, function(interceptorFactory, index) {
                var responseFn = isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory);
                reversedInterceptors.splice(index, 0, {
                    response: function(response) {
                        return responseFn($q.when(response));
                    },
                    responseError: function(response) {
                        return responseFn($q.reject(response));
                    }
                });
            }), $http.pendingRequests = [], createShortMethods("get", "delete", "head", "jsonp"), 
            createShortMethodsWithData("post", "put"), $http.defaults = defaults, $http;
        } ];
    }
    function $HttpBackendProvider() {
        this.$get = [ "$browser", "$window", "$document", function($browser, $window, $document) {
            return createHttpBackend($browser, XHR, $browser.defer, $window.angular.callbacks, $document[0], $window.location.protocol.replace(":", ""));
        } ];
    }
    function createHttpBackend($browser, XHR, $browserDefer, callbacks, rawDocument, locationProtocol) {
        function jsonpReq(url, done) {
            var script = rawDocument.createElement("script"), doneWrapper = function() {
                rawDocument.body.removeChild(script), done && done();
            };
            return script.type = "text/javascript", script.src = url, msie ? script.onreadystatechange = function() {
                /loaded|complete/.test(script.readyState) && doneWrapper();
            } : script.onload = script.onerror = doneWrapper, rawDocument.body.appendChild(script), 
            doneWrapper;
        }
        return function(method, url, post, callback, headers, timeout, withCredentials, responseType) {
            function timeoutRequest() {
                status = -1, jsonpDone && jsonpDone(), xhr && xhr.abort();
            }
            function completeRequest(callback, status, response, headersString) {
                var protocol = (url.match(SERVER_MATCH) || [ "", locationProtocol ])[1];
                timeoutId && $browserDefer.cancel(timeoutId), jsonpDone = xhr = null, status = "file" == protocol ? response ? 200 : 404 : status, 
                status = 1223 == status ? 204 : status, callback(status, response, headersString), 
                $browser.$$completeOutstandingRequest(noop);
            }
            var status;
            if ($browser.$$incOutstandingRequestCount(), url = url || $browser.url(), "jsonp" == lowercase(method)) {
                var callbackId = "_" + (callbacks.counter++).toString(36);
                callbacks[callbackId] = function(data) {
                    callbacks[callbackId].data = data;
                };
                var jsonpDone = jsonpReq(url.replace("JSON_CALLBACK", "angular.callbacks." + callbackId), function() {
                    callbacks[callbackId].data ? completeRequest(callback, 200, callbacks[callbackId].data) : completeRequest(callback, status || -2), 
                    delete callbacks[callbackId];
                });
            } else {
                var xhr = new XHR();
                xhr.open(method, url, !0), forEach(headers, function(value, key) {
                    value && xhr.setRequestHeader(key, value);
                }), xhr.onreadystatechange = function() {
                    if (4 == xhr.readyState) {
                        var responseHeaders = xhr.getAllResponseHeaders(), simpleHeaders = [ "Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma" ];
                        responseHeaders || (responseHeaders = "", forEach(simpleHeaders, function(header) {
                            var value = xhr.getResponseHeader(header);
                            value && (responseHeaders += header + ": " + value + "\n");
                        })), completeRequest(callback, status || xhr.status, xhr.responseType ? xhr.response : xhr.responseText, responseHeaders);
                    }
                }, withCredentials && (xhr.withCredentials = !0), responseType && (xhr.responseType = responseType), 
                xhr.send(post || "");
            }
            if (timeout > 0) var timeoutId = $browserDefer(timeoutRequest, timeout); else timeout && timeout.then && timeout.then(timeoutRequest);
        };
    }
    function $LocaleProvider() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(num) {
                    return 1 === num ? "one" : "other";
                }
            };
        };
    }
    function $TimeoutProvider() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function($rootScope, $browser, $q, $exceptionHandler) {
            function timeout(fn, delay, invokeApply) {
                var timeoutId, cleanup, deferred = $q.defer(), promise = deferred.promise, skipApply = isDefined(invokeApply) && !invokeApply;
                return timeoutId = $browser.defer(function() {
                    try {
                        deferred.resolve(fn());
                    } catch (e) {
                        deferred.reject(e), $exceptionHandler(e);
                    }
                    skipApply || $rootScope.$apply();
                }, delay), cleanup = function() {
                    delete deferreds[promise.$$timeoutId];
                }, promise.$$timeoutId = timeoutId, deferreds[timeoutId] = deferred, promise.then(cleanup, cleanup), 
                promise;
            }
            var deferreds = {};
            return timeout.cancel = function(promise) {
                return promise && promise.$$timeoutId in deferreds ? (deferreds[promise.$$timeoutId].reject("canceled"), 
                $browser.defer.cancel(promise.$$timeoutId)) : !1;
            }, timeout;
        } ];
    }
    function $FilterProvider($provide) {
        function register(name, factory) {
            return $provide.factory(name + suffix, factory);
        }
        var suffix = "Filter";
        this.register = register, this.$get = [ "$injector", function($injector) {
            return function(name) {
                return $injector.get(name + suffix);
            };
        } ], register("currency", currencyFilter), register("date", dateFilter), register("filter", filterFilter), 
        register("json", jsonFilter), register("limitTo", limitToFilter), register("lowercase", lowercaseFilter), 
        register("number", numberFilter), register("orderBy", orderByFilter), register("uppercase", uppercaseFilter);
    }
    function filterFilter() {
        return function(array, expression, comperator) {
            if (!isArray(array)) return array;
            var predicates = [];
            switch (predicates.check = function(value) {
                for (var j = 0; j < predicates.length; j++) if (!predicates[j](value)) return !1;
                return !0;
            }, typeof comperator) {
              case "function":
                break;

              case "boolean":
                if (1 == comperator) {
                    comperator = function(obj, text) {
                        return angular.equals(obj, text);
                    };
                    break;
                }

              default:
                comperator = function(obj, text) {
                    return text = ("" + text).toLowerCase(), ("" + obj).toLowerCase().indexOf(text) > -1;
                };
            }
            var search = function(obj, text) {
                if ("string" == typeof text && "!" === text.charAt(0)) return !search(obj, text.substr(1));
                switch (typeof obj) {
                  case "boolean":
                  case "number":
                  case "string":
                    return comperator(obj, text);

                  case "object":
                    switch (typeof text) {
                      case "object":
                        return comperator(obj, text);

                      default:
                        for (var objKey in obj) if ("$" !== objKey.charAt(0) && search(obj[objKey], text)) return !0;
                    }
                    return !1;

                  case "array":
                    for (var i = 0; i < obj.length; i++) if (search(obj[i], text)) return !0;
                    return !1;

                  default:
                    return !1;
                }
            };
            switch (typeof expression) {
              case "boolean":
              case "number":
              case "string":
                expression = {
                    $: expression
                };

              case "object":
                for (var key in expression) "$" == key ? !function() {
                    if (expression[key]) {
                        var path = key;
                        predicates.push(function(value) {
                            return search(value, expression[path]);
                        });
                    }
                }() : !function() {
                    if (expression[key]) {
                        var path = key;
                        predicates.push(function(value) {
                            return search(getter(value, path), expression[path]);
                        });
                    }
                }();
                break;

              case "function":
                predicates.push(expression);
                break;

              default:
                return array;
            }
            for (var filtered = [], j = 0; j < array.length; j++) {
                var value = array[j];
                predicates.check(value) && filtered.push(value);
            }
            return filtered;
        };
    }
    function currencyFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(amount, currencySymbol) {
            return isUndefined(currencySymbol) && (currencySymbol = formats.CURRENCY_SYM), formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, 2).replace(/\u00A4/g, currencySymbol);
        };
    }
    function numberFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(number, fractionSize) {
            return formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
        };
    }
    function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
        if (isNaN(number) || !isFinite(number)) return "";
        var isNegative = 0 > number;
        number = Math.abs(number);
        var numStr = number + "", formatedText = "", parts = [], hasExponent = !1;
        if (-1 !== numStr.indexOf("e")) {
            var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
            match && "-" == match[2] && match[3] > fractionSize + 1 ? numStr = "0" : (formatedText = numStr, 
            hasExponent = !0);
        }
        if (!hasExponent) {
            var fractionLen = (numStr.split(DECIMAL_SEP)[1] || "").length;
            isUndefined(fractionSize) && (fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac));
            var pow = Math.pow(10, fractionSize);
            number = Math.round(number * pow) / pow;
            var fraction = ("" + number).split(DECIMAL_SEP), whole = fraction[0];
            fraction = fraction[1] || "";
            var pos = 0, lgroup = pattern.lgSize, group = pattern.gSize;
            if (whole.length >= lgroup + group) {
                pos = whole.length - lgroup;
                for (var i = 0; pos > i; i++) (pos - i) % group === 0 && 0 !== i && (formatedText += groupSep), 
                formatedText += whole.charAt(i);
            }
            for (i = pos; i < whole.length; i++) (whole.length - i) % lgroup === 0 && 0 !== i && (formatedText += groupSep), 
            formatedText += whole.charAt(i);
            for (;fraction.length < fractionSize; ) fraction += "0";
            fractionSize && "0" !== fractionSize && (formatedText += decimalSep + fraction.substr(0, fractionSize));
        }
        return parts.push(isNegative ? pattern.negPre : pattern.posPre), parts.push(formatedText), 
        parts.push(isNegative ? pattern.negSuf : pattern.posSuf), parts.join("");
    }
    function padNumber(num, digits, trim) {
        var neg = "";
        for (0 > num && (neg = "-", num = -num), num = "" + num; num.length < digits; ) num = "0" + num;
        return trim && (num = num.substr(num.length - digits)), neg + num;
    }
    function dateGetter(name, size, offset, trim) {
        return offset = offset || 0, function(date) {
            var value = date["get" + name]();
            return (offset > 0 || value > -offset) && (value += offset), 0 === value && -12 == offset && (value = 12), 
            padNumber(value, size, trim);
        };
    }
    function dateStrGetter(name, shortForm) {
        return function(date, formats) {
            var value = date["get" + name](), get = uppercase(shortForm ? "SHORT" + name : name);
            return formats[get][value];
        };
    }
    function timeZoneGetter(date) {
        var zone = -1 * date.getTimezoneOffset(), paddedZone = zone >= 0 ? "+" : "";
        return paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
    }
    function ampmGetter(date, formats) {
        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
    }
    function dateFilter($locale) {
        function jsonStringToDate(string) {
            var match;
            if (match = string.match(R_ISO8601_STR)) {
                var date = new Date(0), tzHour = 0, tzMin = 0, dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear, timeSetter = match[8] ? date.setUTCHours : date.setHours;
                match[9] && (tzHour = int(match[9] + match[10]), tzMin = int(match[9] + match[11])), 
                dateSetter.call(date, int(match[1]), int(match[2]) - 1, int(match[3]));
                var h = int(match[4] || 0) - tzHour, m = int(match[5] || 0) - tzMin, s = int(match[6] || 0), ms = Math.round(1e3 * parseFloat("0." + (match[7] || 0)));
                return timeSetter.call(date, h, m, s, ms), date;
            }
            return string;
        }
        var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(date, format) {
            var fn, match, text = "", parts = [];
            if (format = format || "mediumDate", format = $locale.DATETIME_FORMATS[format] || format, 
            isString(date) && (date = NUMBER_STRING.test(date) ? int(date) : jsonStringToDate(date)), 
            isNumber(date) && (date = new Date(date)), !isDate(date)) return date;
            for (;format; ) match = DATE_FORMATS_SPLIT.exec(format), match ? (parts = concat(parts, match, 1), 
            format = parts.pop()) : (parts.push(format), format = null);
            return forEach(parts, function(value) {
                fn = DATE_FORMATS[value], text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), text;
        };
    }
    function jsonFilter() {
        return function(object) {
            return toJson(object, !0);
        };
    }
    function limitToFilter() {
        return function(input, limit) {
            if (!isArray(input) && !isString(input)) return input;
            if (limit = int(limit), isString(input)) return limit ? limit >= 0 ? input.slice(0, limit) : input.slice(limit, input.length) : "";
            var i, n, out = [];
            for (limit > input.length ? limit = input.length : limit < -input.length && (limit = -input.length), 
            limit > 0 ? (i = 0, n = limit) : (i = input.length + limit, n = input.length); n > i; i++) out.push(input[i]);
            return out;
        };
    }
    function orderByFilter($parse) {
        return function(array, sortPredicate, reverseOrder) {
            function comparator(o1, o2) {
                for (var i = 0; i < sortPredicate.length; i++) {
                    var comp = sortPredicate[i](o1, o2);
                    if (0 !== comp) return comp;
                }
                return 0;
            }
            function reverseComparator(comp, descending) {
                return toBoolean(descending) ? function(a, b) {
                    return comp(b, a);
                } : comp;
            }
            function compare(v1, v2) {
                var t1 = typeof v1, t2 = typeof v2;
                return t1 == t2 ? ("string" == t1 && (v1 = v1.toLowerCase()), "string" == t1 && (v2 = v2.toLowerCase()), 
                v1 === v2 ? 0 : v2 > v1 ? -1 : 1) : t2 > t1 ? -1 : 1;
            }
            if (!isArray(array)) return array;
            if (!sortPredicate) return array;
            sortPredicate = isArray(sortPredicate) ? sortPredicate : [ sortPredicate ], sortPredicate = map(sortPredicate, function(predicate) {
                var descending = !1, get = predicate || identity;
                return isString(predicate) && (("+" == predicate.charAt(0) || "-" == predicate.charAt(0)) && (descending = "-" == predicate.charAt(0), 
                predicate = predicate.substring(1)), get = $parse(predicate)), reverseComparator(function(a, b) {
                    return compare(get(a), get(b));
                }, descending);
            });
            for (var arrayCopy = [], i = 0; i < array.length; i++) arrayCopy.push(array[i]);
            return arrayCopy.sort(reverseComparator(comparator, reverseOrder));
        };
    }
    function ngDirective(directive) {
        return isFunction(directive) && (directive = {
            link: directive
        }), directive.restrict = directive.restrict || "AC", valueFn(directive);
    }
    function FormController(element, attrs) {
        function toggleValidCss(isValid, validationErrorKey) {
            validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "", 
            element.removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        var form = this, parentForm = element.parent().controller("form") || nullFormCtrl, invalidCount = 0, errors = form.$error = {}, controls = [];
        form.$name = attrs.name, form.$dirty = !1, form.$pristine = !0, form.$valid = !0, 
        form.$invalid = !1, parentForm.$addControl(form), element.addClass(PRISTINE_CLASS), 
        toggleValidCss(!0), form.$addControl = function(control) {
            controls.push(control), control.$name && !form.hasOwnProperty(control.$name) && (form[control.$name] = control);
        }, form.$removeControl = function(control) {
            control.$name && form[control.$name] === control && delete form[control.$name], 
            forEach(errors, function(queue, validationToken) {
                form.$setValidity(validationToken, !0, control);
            }), arrayRemove(controls, control);
        }, form.$setValidity = function(validationToken, isValid, control) {
            var queue = errors[validationToken];
            if (isValid) queue && (arrayRemove(queue, control), queue.length || (invalidCount--, 
            invalidCount || (toggleValidCss(isValid), form.$valid = !0, form.$invalid = !1), 
            errors[validationToken] = !1, toggleValidCss(!0, validationToken), parentForm.$setValidity(validationToken, !0, form))); else {
                if (invalidCount || toggleValidCss(isValid), queue) {
                    if (includes(queue, control)) return;
                } else errors[validationToken] = queue = [], invalidCount++, toggleValidCss(!1, validationToken), 
                parentForm.$setValidity(validationToken, !1, form);
                queue.push(control), form.$valid = !1, form.$invalid = !0;
            }
        }, form.$setDirty = function() {
            element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS), form.$dirty = !0, form.$pristine = !1, 
            parentForm.$setDirty();
        }, form.$setPristine = function() {
            element.removeClass(DIRTY_CLASS).addClass(PRISTINE_CLASS), form.$dirty = !1, form.$pristine = !0, 
            forEach(controls, function(control) {
                control.$setPristine();
            });
        };
    }
    function isEmpty(value) {
        return isUndefined(value) || "" === value || null === value || value !== value;
    }
    function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        var listener = function() {
            var value = element.val();
            toBoolean(attr.ngTrim || "T") && (value = trim(value)), ctrl.$viewValue !== value && scope.$apply(function() {
                ctrl.$setViewValue(value);
            });
        };
        if ($sniffer.hasEvent("input")) element.bind("input", listener); else {
            var timeout, deferListener = function() {
                timeout || (timeout = $browser.defer(function() {
                    listener(), timeout = null;
                }));
            };
            element.bind("keydown", function(event) {
                var key = event.keyCode;
                91 === key || key > 15 && 19 > key || key >= 37 && 40 >= key || deferListener();
            }), element.bind("change", listener), $sniffer.hasEvent("paste") && element.bind("paste cut", deferListener);
        }
        ctrl.$render = function() {
            element.val(isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue);
        };
        var patternValidator, match, pattern = attr.ngPattern, validate = function(regexp, value) {
            return isEmpty(value) || regexp.test(value) ? (ctrl.$setValidity("pattern", !0), 
            value) : (ctrl.$setValidity("pattern", !1), undefined);
        };
        if (pattern && (match = pattern.match(/^\/(.*)\/([gim]*)$/), match ? (pattern = new RegExp(match[1], match[2]), 
        patternValidator = function(value) {
            return validate(pattern, value);
        }) : patternValidator = function(value) {
            var patternObj = scope.$eval(pattern);
            if (!patternObj || !patternObj.test) throw new Error("Expected " + pattern + " to be a RegExp but was " + patternObj);
            return validate(patternObj, value);
        }, ctrl.$formatters.push(patternValidator), ctrl.$parsers.push(patternValidator)), 
        attr.ngMinlength) {
            var minlength = int(attr.ngMinlength), minLengthValidator = function(value) {
                return !isEmpty(value) && value.length < minlength ? (ctrl.$setValidity("minlength", !1), 
                undefined) : (ctrl.$setValidity("minlength", !0), value);
            };
            ctrl.$parsers.push(minLengthValidator), ctrl.$formatters.push(minLengthValidator);
        }
        if (attr.ngMaxlength) {
            var maxlength = int(attr.ngMaxlength), maxLengthValidator = function(value) {
                return !isEmpty(value) && value.length > maxlength ? (ctrl.$setValidity("maxlength", !1), 
                undefined) : (ctrl.$setValidity("maxlength", !0), value);
            };
            ctrl.$parsers.push(maxLengthValidator), ctrl.$formatters.push(maxLengthValidator);
        }
    }
    function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        if (textInputType(scope, element, attr, ctrl, $sniffer, $browser), ctrl.$parsers.push(function(value) {
            var empty = isEmpty(value);
            return empty || NUMBER_REGEXP.test(value) ? (ctrl.$setValidity("number", !0), "" === value ? null : empty ? value : parseFloat(value)) : (ctrl.$setValidity("number", !1), 
            undefined);
        }), ctrl.$formatters.push(function(value) {
            return isEmpty(value) ? "" : "" + value;
        }), attr.min) {
            var min = parseFloat(attr.min), minValidator = function(value) {
                return !isEmpty(value) && min > value ? (ctrl.$setValidity("min", !1), undefined) : (ctrl.$setValidity("min", !0), 
                value);
            };
            ctrl.$parsers.push(minValidator), ctrl.$formatters.push(minValidator);
        }
        if (attr.max) {
            var max = parseFloat(attr.max), maxValidator = function(value) {
                return !isEmpty(value) && value > max ? (ctrl.$setValidity("max", !1), undefined) : (ctrl.$setValidity("max", !0), 
                value);
            };
            ctrl.$parsers.push(maxValidator), ctrl.$formatters.push(maxValidator);
        }
        ctrl.$formatters.push(function(value) {
            return isEmpty(value) || isNumber(value) ? (ctrl.$setValidity("number", !0), value) : (ctrl.$setValidity("number", !1), 
            undefined);
        });
    }
    function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        textInputType(scope, element, attr, ctrl, $sniffer, $browser);
        var urlValidator = function(value) {
            return isEmpty(value) || URL_REGEXP.test(value) ? (ctrl.$setValidity("url", !0), 
            value) : (ctrl.$setValidity("url", !1), undefined);
        };
        ctrl.$formatters.push(urlValidator), ctrl.$parsers.push(urlValidator);
    }
    function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        textInputType(scope, element, attr, ctrl, $sniffer, $browser);
        var emailValidator = function(value) {
            return isEmpty(value) || EMAIL_REGEXP.test(value) ? (ctrl.$setValidity("email", !0), 
            value) : (ctrl.$setValidity("email", !1), undefined);
        };
        ctrl.$formatters.push(emailValidator), ctrl.$parsers.push(emailValidator);
    }
    function radioInputType(scope, element, attr, ctrl) {
        isUndefined(attr.name) && element.attr("name", nextUid()), element.bind("click", function() {
            element[0].checked && scope.$apply(function() {
                ctrl.$setViewValue(attr.value);
            });
        }), ctrl.$render = function() {
            var value = attr.value;
            element[0].checked = value == ctrl.$viewValue;
        }, attr.$observe("value", ctrl.$render);
    }
    function checkboxInputType(scope, element, attr, ctrl) {
        var trueValue = attr.ngTrueValue, falseValue = attr.ngFalseValue;
        isString(trueValue) || (trueValue = !0), isString(falseValue) || (falseValue = !1), 
        element.bind("click", function() {
            scope.$apply(function() {
                ctrl.$setViewValue(element[0].checked);
            });
        }), ctrl.$render = function() {
            element[0].checked = ctrl.$viewValue;
        }, ctrl.$formatters.push(function(value) {
            return value === trueValue;
        }), ctrl.$parsers.push(function(value) {
            return value ? trueValue : falseValue;
        });
    }
    function classDirective(name, selector) {
        return name = "ngClass" + name, ngDirective(function(scope, element, attr) {
            function ngClassWatchAction(newVal) {
                (selector === !0 || scope.$index % 2 === selector) && (oldVal && !equals(newVal, oldVal) && removeClass(oldVal), 
                addClass(newVal)), oldVal = copy(newVal);
            }
            function removeClass(classVal) {
                isObject(classVal) && !isArray(classVal) && (classVal = map(classVal, function(v, k) {
                    return v ? k : void 0;
                })), element.removeClass(isArray(classVal) ? classVal.join(" ") : classVal);
            }
            function addClass(classVal) {
                isObject(classVal) && !isArray(classVal) && (classVal = map(classVal, function(v, k) {
                    return v ? k : void 0;
                })), classVal && element.addClass(isArray(classVal) ? classVal.join(" ") : classVal);
            }
            var oldVal = undefined;
            scope.$watch(attr[name], ngClassWatchAction, !0), attr.$observe("class", function() {
                var ngClass = scope.$eval(attr[name]);
                ngClassWatchAction(ngClass, ngClass);
            }), "ngClass" !== name && scope.$watch("$index", function($index, old$index) {
                var mod = 1 & $index;
                mod !== old$index & 1 && (mod === selector ? addClass(scope.$eval(attr[name])) : removeClass(scope.$eval(attr[name])));
            });
        });
    }
    var lowercase = function(string) {
        return isString(string) ? string.toLowerCase() : string;
    }, uppercase = function(string) {
        return isString(string) ? string.toUpperCase() : string;
    }, manualLowercase = function(s) {
        return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
            return String.fromCharCode(32 | ch.charCodeAt(0));
        }) : s;
    }, manualUppercase = function(s) {
        return isString(s) ? s.replace(/[a-z]/g, function(ch) {
            return String.fromCharCode(-33 & ch.charCodeAt(0));
        }) : s;
    };
    "i" !== "I".toLowerCase() && (lowercase = manualLowercase, uppercase = manualUppercase);
    var jqLite, jQuery, angularModule, nodeName_, msie = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]), slice = [].slice, push = [].push, toString = Object.prototype.toString, _angular = window.angular, angular = window.angular || (window.angular = {}), uid = [ "0", "0", "0" ];
    noop.$inject = [], identity.$inject = [], nodeName_ = 9 > msie ? function(element) {
        return element = element.nodeName ? element : element[0], element.scopeName && "HTML" != element.scopeName ? uppercase(element.scopeName + ":" + element.nodeName) : element.nodeName;
    } : function(element) {
        return element.nodeName ? element.nodeName : element[0].nodeName;
    };
    var SNAKE_CASE_REGEXP = /[A-Z]/g, version = {
        full: "1.1.5",
        major: 1,
        minor: 1,
        dot: 5,
        codeName: "triangle-squarification"
    }, jqCache = JQLite.cache = {}, jqName = JQLite.expando = "ng-" + new Date().getTime(), jqId = 1, addEventListenerFn = window.document.addEventListener ? function(element, type, fn) {
        element.addEventListener(type, fn, !1);
    } : function(element, type, fn) {
        element.attachEvent("on" + type, fn);
    }, removeEventListenerFn = window.document.removeEventListener ? function(element, type, fn) {
        element.removeEventListener(type, fn, !1);
    } : function(element, type, fn) {
        element.detachEvent("on" + type, fn);
    }, SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g, MOZ_HACK_REGEXP = /^moz([A-Z])/, JQLitePrototype = JQLite.prototype = {
        ready: function(fn) {
            function trigger() {
                fired || (fired = !0, fn());
            }
            var fired = !1;
            "complete" === document.readyState ? setTimeout(trigger) : (this.bind("DOMContentLoaded", trigger), 
            JQLite(window).bind("load", trigger));
        },
        toString: function() {
            var value = [];
            return forEach(this, function(e) {
                value.push("" + e);
            }), "[" + value.join(", ") + "]";
        },
        eq: function(index) {
            return jqLite(index >= 0 ? this[index] : this[this.length + index]);
        },
        length: 0,
        push: push,
        sort: [].sort,
        splice: [].splice
    }, BOOLEAN_ATTR = {};
    forEach("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(value) {
        BOOLEAN_ATTR[lowercase(value)] = value;
    });
    var BOOLEAN_ELEMENTS = {};
    forEach("input,select,option,textarea,button,form,details".split(","), function(value) {
        BOOLEAN_ELEMENTS[uppercase(value)] = !0;
    }), forEach({
        data: JQLiteData,
        inheritedData: JQLiteInheritedData,
        scope: function(element) {
            return JQLiteInheritedData(element, "$scope");
        },
        controller: JQLiteController,
        injector: function(element) {
            return JQLiteInheritedData(element, "$injector");
        },
        removeAttr: function(element, name) {
            element.removeAttribute(name);
        },
        hasClass: JQLiteHasClass,
        css: function(element, name, value) {
            if (name = camelCase(name), !isDefined(value)) {
                var val;
                return 8 >= msie && (val = element.currentStyle && element.currentStyle[name], "" === val && (val = "auto")), 
                val = val || element.style[name], 8 >= msie && (val = "" === val ? undefined : val), 
                val;
            }
            element.style[name] = value;
        },
        attr: function(element, name, value) {
            var lowercasedName = lowercase(name);
            if (BOOLEAN_ATTR[lowercasedName]) {
                if (!isDefined(value)) return element[name] || (element.attributes.getNamedItem(name) || noop).specified ? lowercasedName : undefined;
                value ? (element[name] = !0, element.setAttribute(name, lowercasedName)) : (element[name] = !1, 
                element.removeAttribute(lowercasedName));
            } else if (isDefined(value)) element.setAttribute(name, value); else if (element.getAttribute) {
                var ret = element.getAttribute(name, 2);
                return null === ret ? undefined : ret;
            }
        },
        prop: function(element, name, value) {
            return isDefined(value) ? void (element[name] = value) : element[name];
        },
        text: extend(9 > msie ? function(element, value) {
            if (1 == element.nodeType) {
                if (isUndefined(value)) return element.innerText;
                element.innerText = value;
            } else {
                if (isUndefined(value)) return element.nodeValue;
                element.nodeValue = value;
            }
        } : function(element, value) {
            return isUndefined(value) ? element.textContent : void (element.textContent = value);
        }, {
            $dv: ""
        }),
        val: function(element, value) {
            return isUndefined(value) ? element.value : void (element.value = value);
        },
        html: function(element, value) {
            if (isUndefined(value)) return element.innerHTML;
            for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) JQLiteDealoc(childNodes[i]);
            element.innerHTML = value;
        }
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
            var i, key;
            if ((2 == fn.length && fn !== JQLiteHasClass && fn !== JQLiteController ? arg1 : arg2) !== undefined) {
                for (i = 0; i < this.length; i++) fn(this[i], arg1, arg2);
                return this;
            }
            if (isObject(arg1)) {
                for (i = 0; i < this.length; i++) if (fn === JQLiteData) fn(this[i], arg1); else for (key in arg1) fn(this[i], key, arg1[key]);
                return this;
            }
            return this.length ? fn(this[0], arg1, arg2) : fn.$dv;
        };
    }), forEach({
        removeData: JQLiteRemoveData,
        dealoc: JQLiteDealoc,
        bind: function bindFn(element, type, fn) {
            var events = JQLiteExpandoStore(element, "events"), handle = JQLiteExpandoStore(element, "handle");
            events || JQLiteExpandoStore(element, "events", events = {}), handle || JQLiteExpandoStore(element, "handle", handle = createEventHandler(element, events)), 
            forEach(type.split(" "), function(type) {
                var eventFns = events[type];
                if (!eventFns) {
                    if ("mouseenter" == type || "mouseleave" == type) {
                        var contains = document.body.contains || document.body.compareDocumentPosition ? function(a, b) {
                            var adown = 9 === a.nodeType ? a.documentElement : a, bup = b && b.parentNode;
                            return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
                        } : function(a, b) {
                            if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                            return !1;
                        };
                        events[type] = [];
                        var eventmap = {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        };
                        bindFn(element, eventmap[type], function(event) {
                            var target = this, related = event.relatedTarget;
                            (!related || related !== target && !contains(target, related)) && handle(event, type);
                        });
                    } else addEventListenerFn(element, type, handle), events[type] = [];
                    eventFns = events[type];
                }
                eventFns.push(fn);
            });
        },
        unbind: JQLiteUnbind,
        replaceWith: function(element, replaceNode) {
            var index, parent = element.parentNode;
            JQLiteDealoc(element), forEach(new JQLite(replaceNode), function(node) {
                index ? parent.insertBefore(node, index.nextSibling) : parent.replaceChild(node, element), 
                index = node;
            });
        },
        children: function(element) {
            var children = [];
            return forEach(element.childNodes, function(element) {
                1 === element.nodeType && children.push(element);
            }), children;
        },
        contents: function(element) {
            return element.childNodes || [];
        },
        append: function(element, node) {
            forEach(new JQLite(node), function(child) {
                (1 === element.nodeType || 11 === element.nodeType) && element.appendChild(child);
            });
        },
        prepend: function(element, node) {
            if (1 === element.nodeType) {
                var index = element.firstChild;
                forEach(new JQLite(node), function(child) {
                    index ? element.insertBefore(child, index) : (element.appendChild(child), index = child);
                });
            }
        },
        wrap: function(element, wrapNode) {
            wrapNode = jqLite(wrapNode)[0];
            var parent = element.parentNode;
            parent && parent.replaceChild(wrapNode, element), wrapNode.appendChild(element);
        },
        remove: function(element) {
            JQLiteDealoc(element);
            var parent = element.parentNode;
            parent && parent.removeChild(element);
        },
        after: function(element, newElement) {
            var index = element, parent = element.parentNode;
            forEach(new JQLite(newElement), function(node) {
                parent.insertBefore(node, index.nextSibling), index = node;
            });
        },
        addClass: JQLiteAddClass,
        removeClass: JQLiteRemoveClass,
        toggleClass: function(element, selector, condition) {
            isUndefined(condition) && (condition = !JQLiteHasClass(element, selector)), (condition ? JQLiteAddClass : JQLiteRemoveClass)(element, selector);
        },
        parent: function(element) {
            var parent = element.parentNode;
            return parent && 11 !== parent.nodeType ? parent : null;
        },
        next: function(element) {
            if (element.nextElementSibling) return element.nextElementSibling;
            for (var elm = element.nextSibling; null != elm && 1 !== elm.nodeType; ) elm = elm.nextSibling;
            return elm;
        },
        find: function(element, selector) {
            return element.getElementsByTagName(selector);
        },
        clone: JQLiteClone,
        triggerHandler: function(element, eventName) {
            var eventFns = (JQLiteExpandoStore(element, "events") || {})[eventName];
            forEach(eventFns, function(fn) {
                fn.call(element, {
                    preventDefault: noop
                });
            });
        }
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
            for (var value, i = 0; i < this.length; i++) value == undefined ? (value = fn(this[i], arg1, arg2), 
            value !== undefined && (value = jqLite(value))) : JQLiteAddNodes(value, fn(this[i], arg1, arg2));
            return value == undefined ? this : value;
        };
    }), HashMap.prototype = {
        put: function(key, value) {
            this[hashKey(key)] = value;
        },
        get: function(key) {
            return this[hashKey(key)];
        },
        remove: function(key) {
            var value = this[key = hashKey(key)];
            return delete this[key], value;
        }
    };
    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, FN_ARG_SPLIT = /,/, FN_ARG = /^\s*(_?)(\S+?)\1\s*$/, STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    $AnimationProvider.$inject = [ "$provide" ];
    var $AnimatorProvider = function() {
        var NG_ANIMATE_CONTROLLER = "$ngAnimateController", rootAnimateController = {
            running: !0
        };
        this.$get = [ "$animation", "$window", "$sniffer", "$rootElement", "$rootScope", function($animation, $window, $sniffer, $rootElement) {
            $rootElement.data(NG_ANIMATE_CONTROLLER, rootAnimateController);
            var AnimatorService = function(scope, attrs) {
                function animateActionFactory(type, beforeFn, afterFn) {
                    return function(element, parent, after) {
                        function parseMaxTime(str) {
                            var total = 0, values = isString(str) ? str.split(/\s*,\s*/) : [];
                            return forEach(values, function(value) {
                                total = Math.max(parseFloat(value) || 0, total);
                            }), total;
                        }
                        function beginAnimation() {
                            if (element.addClass(activeClassName), polyfillStart) polyfillStart(element, done, memento); else if (isFunction($window.getComputedStyle)) {
                                var w3cAnimationProp = "animation", w3cTransitionProp = "transition", vendorAnimationProp = $sniffer.vendorPrefix + "Animation", vendorTransitionProp = $sniffer.vendorPrefix + "Transition", durationKey = "Duration", delayKey = "Delay", animationIterationCountKey = "IterationCount", duration = 0, ELEMENT_NODE = 1;
                                forEach(element, function(element) {
                                    if (element.nodeType == ELEMENT_NODE) {
                                        var w3cProp = w3cTransitionProp, vendorProp = vendorTransitionProp, iterations = 1, elementStyles = $window.getComputedStyle(element) || {};
                                        (parseFloat(elementStyles[w3cAnimationProp + durationKey]) > 0 || parseFloat(elementStyles[vendorAnimationProp + durationKey]) > 0) && (w3cProp = w3cAnimationProp, 
                                        vendorProp = vendorAnimationProp, iterations = Math.max(parseInt(elementStyles[w3cProp + animationIterationCountKey]) || 0, parseInt(elementStyles[vendorProp + animationIterationCountKey]) || 0, iterations));
                                        var parsedDelay = Math.max(parseMaxTime(elementStyles[w3cProp + delayKey]), parseMaxTime(elementStyles[vendorProp + delayKey])), parsedDuration = Math.max(parseMaxTime(elementStyles[w3cProp + durationKey]), parseMaxTime(elementStyles[vendorProp + durationKey]));
                                        duration = Math.max(parsedDelay + iterations * parsedDuration, duration);
                                    }
                                }), $window.setTimeout(done, 1e3 * duration);
                            } else done();
                        }
                        function done() {
                            done.run || (done.run = !0, afterFn(element, parent, after), element.removeClass(className), 
                            element.removeClass(activeClassName), element.removeData(NG_ANIMATE_CONTROLLER));
                        }
                        var ngAnimateValue = scope.$eval(attrs.ngAnimate), className = ngAnimateValue ? isObject(ngAnimateValue) ? ngAnimateValue[type] : ngAnimateValue + "-" + type : "", animationPolyfill = $animation(className), polyfillSetup = animationPolyfill && animationPolyfill.setup, polyfillStart = animationPolyfill && animationPolyfill.start, polyfillCancel = animationPolyfill && animationPolyfill.cancel;
                        if (className) {
                            var activeClassName = className + "-active";
                            if (parent || (parent = after ? after.parent() : element.parent()), !$sniffer.transitions && !polyfillSetup && !polyfillStart || (parent.inheritedData(NG_ANIMATE_CONTROLLER) || noop).running) return beforeFn(element, parent, after), 
                            void afterFn(element, parent, after);
                            var animationData = element.data(NG_ANIMATE_CONTROLLER) || {};
                            if (animationData.running && ((polyfillCancel || noop)(element), animationData.done()), 
                            element.data(NG_ANIMATE_CONTROLLER, {
                                running: !0,
                                done: done
                            }), element.addClass(className), beforeFn(element, parent, after), 0 == element.length) return done();
                            var memento = (polyfillSetup || noop)(element);
                            $window.setTimeout(beginAnimation, 1);
                        } else beforeFn(element, parent, after), afterFn(element, parent, after);
                    };
                }
                function show(element) {
                    element.css("display", "");
                }
                function hide(element) {
                    element.css("display", "none");
                }
                function insert(element, parent, after) {
                    after ? after.after(element) : parent.append(element);
                }
                function remove(element) {
                    element.remove();
                }
                function move(element, parent, after) {
                    insert(element, parent, after);
                }
                var animator = {};
                return animator.enter = animateActionFactory("enter", insert, noop), animator.leave = animateActionFactory("leave", noop, remove), 
                animator.move = animateActionFactory("move", move, noop), animator.show = animateActionFactory("show", show, noop), 
                animator.hide = animateActionFactory("hide", noop, hide), animator.animate = function(event, element) {
                    animateActionFactory(event, noop, noop)(element);
                }, animator;
            };
            return AnimatorService.enabled = function(value) {
                return arguments.length && (rootAnimateController.running = !value), !rootAnimateController.running;
            }, AnimatorService;
        } ];
    }, NON_ASSIGNABLE_MODEL_EXPRESSION = "Non-assignable model expression: ";
    $CompileProvider.$inject = [ "$provide" ];
    var PREFIX_REGEXP = /^(x[\:\-_]|data[\:\-_])/i, SERVER_MATCH = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/, PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, DEFAULT_PORTS = {
        http: 80,
        https: 443,
        ftp: 21
    };
    LocationHashbangInHtml5Url.prototype = LocationHashbangUrl.prototype = LocationHtml5Url.prototype = {
        $$replace: !1,
        absUrl: locationGetter("$$absUrl"),
        url: function(url, replace) {
            if (isUndefined(url)) return this.$$url;
            var match = PATH_MATCH.exec(url);
            return match[1] && this.path(decodeURIComponent(match[1])), (match[2] || match[1]) && this.search(match[3] || ""), 
            this.hash(match[5] || "", replace), this;
        },
        protocol: locationGetter("$$protocol"),
        host: locationGetter("$$host"),
        port: locationGetter("$$port"),
        path: locationGetterSetter("$$path", function(path) {
            return "/" == path.charAt(0) ? path : "/" + path;
        }),
        search: function(search, paramValue) {
            return isUndefined(search) ? this.$$search : (isDefined(paramValue) ? null === paramValue ? delete this.$$search[search] : this.$$search[search] = paramValue : this.$$search = isString(search) ? parseKeyValue(search) : search, 
            this.$$compose(), this);
        },
        hash: locationGetterSetter("$$hash", identity),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    var OPERATORS = {
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: noop,
        "+": function(self, locals, a, b) {
            return a = a(self, locals), b = b(self, locals), isDefined(a) ? isDefined(b) ? a + b : a : isDefined(b) ? b : undefined;
        },
        "-": function(self, locals, a, b) {
            return a = a(self, locals), b = b(self, locals), (isDefined(a) ? a : 0) - (isDefined(b) ? b : 0);
        },
        "*": function(self, locals, a, b) {
            return a(self, locals) * b(self, locals);
        },
        "/": function(self, locals, a, b) {
            return a(self, locals) / b(self, locals);
        },
        "%": function(self, locals, a, b) {
            return a(self, locals) % b(self, locals);
        },
        "^": function(self, locals, a, b) {
            return a(self, locals) ^ b(self, locals);
        },
        "=": noop,
        "===": function(self, locals, a, b) {
            return a(self, locals) === b(self, locals);
        },
        "!==": function(self, locals, a, b) {
            return a(self, locals) !== b(self, locals);
        },
        "==": function(self, locals, a, b) {
            return a(self, locals) == b(self, locals);
        },
        "!=": function(self, locals, a, b) {
            return a(self, locals) != b(self, locals);
        },
        "<": function(self, locals, a, b) {
            return a(self, locals) < b(self, locals);
        },
        ">": function(self, locals, a, b) {
            return a(self, locals) > b(self, locals);
        },
        "<=": function(self, locals, a, b) {
            return a(self, locals) <= b(self, locals);
        },
        ">=": function(self, locals, a, b) {
            return a(self, locals) >= b(self, locals);
        },
        "&&": function(self, locals, a, b) {
            return a(self, locals) && b(self, locals);
        },
        "||": function(self, locals, a, b) {
            return a(self, locals) || b(self, locals);
        },
        "&": function(self, locals, a, b) {
            return a(self, locals) & b(self, locals);
        },
        "|": function(self, locals, a, b) {
            return b(self, locals)(self, locals, a(self, locals));
        },
        "!": function(self, locals, a) {
            return !a(self, locals);
        }
    }, ESCAPE = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, getterFnCache = {}, IS_SAME_DOMAIN_URL_MATCH = /^(([^:]+):)?\/\/(\w+:{0,1}\w*@)?([\w\.-]*)?(:([0-9]+))?(.*)$/, XHR = window.XMLHttpRequest || function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e1) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e2) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e3) {}
        throw new Error("This browser does not support XMLHttpRequest.");
    };
    $FilterProvider.$inject = [ "$provide" ], currencyFilter.$inject = [ "$locale" ], 
    numberFilter.$inject = [ "$locale" ];
    var DECIMAL_SEP = ".", DATE_FORMATS = {
        yyyy: dateGetter("FullYear", 4),
        yy: dateGetter("FullYear", 2, 0, !0),
        y: dateGetter("FullYear", 1),
        MMMM: dateStrGetter("Month"),
        MMM: dateStrGetter("Month", !0),
        MM: dateGetter("Month", 2, 1),
        M: dateGetter("Month", 1, 1),
        dd: dateGetter("Date", 2),
        d: dateGetter("Date", 1),
        HH: dateGetter("Hours", 2),
        H: dateGetter("Hours", 1),
        hh: dateGetter("Hours", 2, -12),
        h: dateGetter("Hours", 1, -12),
        mm: dateGetter("Minutes", 2),
        m: dateGetter("Minutes", 1),
        ss: dateGetter("Seconds", 2),
        s: dateGetter("Seconds", 1),
        sss: dateGetter("Milliseconds", 3),
        EEEE: dateStrGetter("Day"),
        EEE: dateStrGetter("Day", !0),
        a: ampmGetter,
        Z: timeZoneGetter
    }, DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, NUMBER_STRING = /^\d+$/;
    dateFilter.$inject = [ "$locale" ];
    var lowercaseFilter = valueFn(lowercase), uppercaseFilter = valueFn(uppercase);
    orderByFilter.$inject = [ "$parse" ];
    var htmlAnchorDirective = valueFn({
        restrict: "E",
        compile: function(element, attr) {
            return 8 >= msie && (attr.href || attr.name || attr.$set("href", ""), element.append(document.createComment("IE fix"))), 
            function(scope, element) {
                element.bind("click", function(event) {
                    element.attr("href") || event.preventDefault();
                });
            };
        }
    }), ngAttributeAliasDirectives = {};
    forEach(BOOLEAN_ATTR, function(propName, attrName) {
        var normalized = directiveNormalize("ng-" + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
            return {
                priority: 100,
                compile: function() {
                    return function(scope, element, attr) {
                        scope.$watch(attr[normalized], function(value) {
                            attr.$set(attrName, !!value);
                        });
                    };
                }
            };
        };
    }), forEach([ "src", "srcset", "href" ], function(attrName) {
        var normalized = directiveNormalize("ng-" + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
            return {
                priority: 99,
                link: function(scope, element, attr) {
                    attr.$observe(normalized, function(value) {
                        value && (attr.$set(attrName, value), msie && element.prop(attrName, attr[attrName]));
                    });
                }
            };
        };
    });
    var nullFormCtrl = {
        $addControl: noop,
        $removeControl: noop,
        $setValidity: noop,
        $setDirty: noop,
        $setPristine: noop
    };
    FormController.$inject = [ "$element", "$attrs", "$scope" ];
    var formDirectiveFactory = function(isNgForm) {
        return [ "$timeout", function($timeout) {
            var formDirective = {
                name: "form",
                restrict: "E",
                controller: FormController,
                compile: function() {
                    return {
                        pre: function(scope, formElement, attr, controller) {
                            if (!attr.action) {
                                var preventDefaultListener = function(event) {
                                    event.preventDefault ? event.preventDefault() : event.returnValue = !1;
                                };
                                addEventListenerFn(formElement[0], "submit", preventDefaultListener), formElement.bind("$destroy", function() {
                                    $timeout(function() {
                                        removeEventListenerFn(formElement[0], "submit", preventDefaultListener);
                                    }, 0, !1);
                                });
                            }
                            var parentFormCtrl = formElement.parent().controller("form"), alias = attr.name || attr.ngForm;
                            alias && (scope[alias] = controller), parentFormCtrl && formElement.bind("$destroy", function() {
                                parentFormCtrl.$removeControl(controller), alias && (scope[alias] = undefined), 
                                extend(controller, nullFormCtrl);
                            });
                        }
                    };
                }
            };
            return isNgForm ? extend(copy(formDirective), {
                restrict: "EAC"
            }) : formDirective;
        } ];
    }, formDirective = formDirectiveFactory(), ngFormDirective = formDirectiveFactory(!0), URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, inputType = {
        text: textInputType,
        number: numberInputType,
        url: urlInputType,
        email: emailInputType,
        radio: radioInputType,
        checkbox: checkboxInputType,
        hidden: noop,
        button: noop,
        submit: noop,
        reset: noop
    }, inputDirective = [ "$browser", "$sniffer", function($browser, $sniffer) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(scope, element, attr, ctrl) {
                ctrl && (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrl, $sniffer, $browser);
            }
        };
    } ], VALID_CLASS = "ng-valid", INVALID_CLASS = "ng-invalid", PRISTINE_CLASS = "ng-pristine", DIRTY_CLASS = "ng-dirty", NgModelController = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function($scope, $exceptionHandler, $attr, $element, $parse) {
        function toggleValidCss(isValid, validationErrorKey) {
            validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "", 
            $element.removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], 
        this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, 
        this.$valid = !0, this.$invalid = !1, this.$name = $attr.name;
        var ngModelGet = $parse($attr.ngModel), ngModelSet = ngModelGet.assign;
        if (!ngModelSet) throw Error(NON_ASSIGNABLE_MODEL_EXPRESSION + $attr.ngModel + " (" + startingTag($element) + ")");
        this.$render = noop;
        var parentForm = $element.inheritedData("$formController") || nullFormCtrl, invalidCount = 0, $error = this.$error = {};
        $element.addClass(PRISTINE_CLASS), toggleValidCss(!0), this.$setValidity = function(validationErrorKey, isValid) {
            $error[validationErrorKey] !== !isValid && (isValid ? ($error[validationErrorKey] && invalidCount--, 
            invalidCount || (toggleValidCss(!0), this.$valid = !0, this.$invalid = !1)) : (toggleValidCss(!1), 
            this.$invalid = !0, this.$valid = !1, invalidCount++), $error[validationErrorKey] = !isValid, 
            toggleValidCss(isValid, validationErrorKey), parentForm.$setValidity(validationErrorKey, isValid, this));
        }, this.$setPristine = function() {
            this.$dirty = !1, this.$pristine = !0, $element.removeClass(DIRTY_CLASS).addClass(PRISTINE_CLASS);
        }, this.$setViewValue = function(value) {
            this.$viewValue = value, this.$pristine && (this.$dirty = !0, this.$pristine = !1, 
            $element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS), parentForm.$setDirty()), 
            forEach(this.$parsers, function(fn) {
                value = fn(value);
            }), this.$modelValue !== value && (this.$modelValue = value, ngModelSet($scope, value), 
            forEach(this.$viewChangeListeners, function(listener) {
                try {
                    listener();
                } catch (e) {
                    $exceptionHandler(e);
                }
            }));
        };
        var ctrl = this;
        $scope.$watch(function() {
            var value = ngModelGet($scope);
            if (ctrl.$modelValue !== value) {
                var formatters = ctrl.$formatters, idx = formatters.length;
                for (ctrl.$modelValue = value; idx--; ) value = formatters[idx](value);
                ctrl.$viewValue !== value && (ctrl.$viewValue = value, ctrl.$render());
            }
        });
    } ], ngModelDirective = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: NgModelController,
            link: function(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0], formCtrl = ctrls[1] || nullFormCtrl;
                formCtrl.$addControl(modelCtrl), element.bind("$destroy", function() {
                    formCtrl.$removeControl(modelCtrl);
                });
            }
        };
    }, ngChangeDirective = valueFn({
        require: "ngModel",
        link: function(scope, element, attr, ctrl) {
            ctrl.$viewChangeListeners.push(function() {
                scope.$eval(attr.ngChange);
            });
        }
    }), requiredDirective = function() {
        return {
            require: "?ngModel",
            link: function(scope, elm, attr, ctrl) {
                if (ctrl) {
                    attr.required = !0;
                    var validator = function(value) {
                        return attr.required && (isEmpty(value) || value === !1) ? void ctrl.$setValidity("required", !1) : (ctrl.$setValidity("required", !0), 
                        value);
                    };
                    ctrl.$formatters.push(validator), ctrl.$parsers.unshift(validator), attr.$observe("required", function() {
                        validator(ctrl.$viewValue);
                    });
                }
            }
        };
    }, ngListDirective = function() {
        return {
            require: "ngModel",
            link: function(scope, element, attr, ctrl) {
                var match = /\/(.*)\//.exec(attr.ngList), separator = match && new RegExp(match[1]) || attr.ngList || ",", parse = function(viewValue) {
                    var list = [];
                    return viewValue && forEach(viewValue.split(separator), function(value) {
                        value && list.push(trim(value));
                    }), list;
                };
                ctrl.$parsers.push(parse), ctrl.$formatters.push(function(value) {
                    return isArray(value) ? value.join(", ") : undefined;
                });
            }
        };
    }, CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/, ngValueDirective = function() {
        return {
            priority: 100,
            compile: function(tpl, tplAttr) {
                return CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue) ? function(scope, elm, attr) {
                    attr.$set("value", scope.$eval(attr.ngValue));
                } : function(scope, elm, attr) {
                    scope.$watch(attr.ngValue, function(value) {
                        attr.$set("value", value, !1);
                    });
                };
            }
        };
    }, ngBindDirective = ngDirective(function(scope, element, attr) {
        element.addClass("ng-binding").data("$binding", attr.ngBind), scope.$watch(attr.ngBind, function(value) {
            element.text(value == undefined ? "" : value);
        });
    }), ngBindTemplateDirective = [ "$interpolate", function($interpolate) {
        return function(scope, element, attr) {
            var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
            element.addClass("ng-binding").data("$binding", interpolateFn), attr.$observe("ngBindTemplate", function(value) {
                element.text(value);
            });
        };
    } ], ngBindHtmlUnsafeDirective = [ function() {
        return function(scope, element, attr) {
            element.addClass("ng-binding").data("$binding", attr.ngBindHtmlUnsafe), scope.$watch(attr.ngBindHtmlUnsafe, function(value) {
                element.html(value || "");
            });
        };
    } ], ngClassDirective = classDirective("", !0), ngClassOddDirective = classDirective("Odd", 0), ngClassEvenDirective = classDirective("Even", 1), ngCloakDirective = ngDirective({
        compile: function(element, attr) {
            attr.$set("ngCloak", undefined), element.removeClass("ng-cloak");
        }
    }), ngControllerDirective = [ function() {
        return {
            scope: !0,
            controller: "@"
        };
    } ], ngCspDirective = [ "$sniffer", function($sniffer) {
        return {
            priority: 1e3,
            compile: function() {
                $sniffer.csp = !0;
            }
        };
    } ], ngEventDirectives = {};
    forEach("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress".split(" "), function(name) {
        var directiveName = directiveNormalize("ng-" + name);
        ngEventDirectives[directiveName] = [ "$parse", function($parse) {
            return function(scope, element, attr) {
                var fn = $parse(attr[directiveName]);
                element.bind(lowercase(name), function(event) {
                    scope.$apply(function() {
                        fn(scope, {
                            $event: event
                        });
                    });
                });
            };
        } ];
    });
    var ngSubmitDirective = ngDirective(function(scope, element, attrs) {
        element.bind("submit", function() {
            scope.$apply(attrs.ngSubmit);
        });
    }), ngIfDirective = [ "$animator", function($animator) {
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            restrict: "A",
            compile: function(element, attr, transclude) {
                return function($scope, $element, $attr) {
                    var childElement, childScope, animate = $animator($scope, $attr);
                    $scope.$watch($attr.ngIf, function(value) {
                        childElement && (animate.leave(childElement), childElement = undefined), childScope && (childScope.$destroy(), 
                        childScope = undefined), toBoolean(value) && (childScope = $scope.$new(), transclude(childScope, function(clone) {
                            childElement = clone, animate.enter(clone, $element.parent(), $element);
                        }));
                    });
                };
            }
        };
    } ], ngIncludeDirective = [ "$http", "$templateCache", "$anchorScroll", "$compile", "$animator", function($http, $templateCache, $anchorScroll, $compile, $animator) {
        return {
            restrict: "ECA",
            terminal: !0,
            compile: function(element, attr) {
                var srcExp = attr.ngInclude || attr.src, onloadExp = attr.onload || "", autoScrollExp = attr.autoscroll;
                return function(scope, element, attr) {
                    var childScope, animate = $animator(scope, attr), changeCounter = 0, clearContent = function() {
                        childScope && (childScope.$destroy(), childScope = null), animate.leave(element.contents(), element);
                    };
                    scope.$watch(srcExp, function(src) {
                        var thisChangeId = ++changeCounter;
                        src ? ($http.get(src, {
                            cache: $templateCache
                        }).success(function(response) {
                            if (thisChangeId === changeCounter) {
                                childScope && childScope.$destroy(), childScope = scope.$new(), animate.leave(element.contents(), element);
                                var contents = jqLite("<div/>").html(response).contents();
                                animate.enter(contents, element), $compile(contents)(childScope), !isDefined(autoScrollExp) || autoScrollExp && !scope.$eval(autoScrollExp) || $anchorScroll(), 
                                childScope.$emit("$includeContentLoaded"), scope.$eval(onloadExp);
                            }
                        }).error(function() {
                            thisChangeId === changeCounter && clearContent();
                        }), scope.$emit("$includeContentRequested")) : clearContent();
                    });
                };
            }
        };
    } ], ngInitDirective = ngDirective({
        compile: function() {
            return {
                pre: function(scope, element, attrs) {
                    scope.$eval(attrs.ngInit);
                }
            };
        }
    }), ngNonBindableDirective = ngDirective({
        terminal: !0,
        priority: 1e3
    }), ngPluralizeDirective = [ "$locale", "$interpolate", function($locale, $interpolate) {
        var BRACE = /{}/g;
        return {
            restrict: "EA",
            link: function(scope, element, attr) {
                var numberExp = attr.count, whenExp = element.attr(attr.$attr.when), offset = attr.offset || 0, whens = scope.$eval(whenExp), whensExpFns = {}, startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol();
                forEach(whens, function(expression, key) {
                    whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + "-" + offset + endSymbol));
                }), scope.$watch(function() {
                    var value = parseFloat(scope.$eval(numberExp));
                    return isNaN(value) ? "" : (value in whens || (value = $locale.pluralCat(value - offset)), 
                    whensExpFns[value](scope, element, !0));
                }, function(newVal) {
                    element.text(newVal);
                });
            }
        };
    } ], ngRepeatDirective = [ "$parse", "$animator", function($parse, $animator) {
        var NG_REMOVED = "$$NG_REMOVED";
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            compile: function(element, attr, linker) {
                return function($scope, $element, $attr) {
                    var trackByExp, trackByExpGetter, trackByIdFn, lhs, rhs, valueIdentifier, keyIdentifier, animate = $animator($scope, $attr), expression = $attr.ngRepeat, match = expression.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/), hashFnLocals = {
                        $id: hashKey
                    };
                    if (!match) throw Error("Expected ngRepeat in form of '_item_ in _collection_[ track by _id_]' but got '" + expression + "'.");
                    if (lhs = match[1], rhs = match[2], trackByExp = match[4], trackByExp ? (trackByExpGetter = $parse(trackByExp), 
                    trackByIdFn = function(key, value, index) {
                        return keyIdentifier && (hashFnLocals[keyIdentifier] = key), hashFnLocals[valueIdentifier] = value, 
                        hashFnLocals.$index = index, trackByExpGetter($scope, hashFnLocals);
                    }) : trackByIdFn = function(key, value) {
                        return hashKey(value);
                    }, match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !match) throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + lhs + "'.");
                    valueIdentifier = match[3] || match[1], keyIdentifier = match[2];
                    var lastBlockMap = {};
                    $scope.$watchCollection(rhs, function(collection) {
                        var index, length, nextCursor, arrayLength, childScope, key, value, trackById, collectionKeys, block, cursor = $element, nextBlockMap = {}, nextBlockOrder = [];
                        if (isArrayLike(collection)) collectionKeys = collection; else {
                            collectionKeys = [];
                            for (key in collection) collection.hasOwnProperty(key) && "$" != key.charAt(0) && collectionKeys.push(key);
                            collectionKeys.sort();
                        }
                        for (arrayLength = collectionKeys.length, length = nextBlockOrder.length = collectionKeys.length, 
                        index = 0; length > index; index++) if (key = collection === collectionKeys ? index : collectionKeys[index], 
                        value = collection[key], trackById = trackByIdFn(key, value, index), lastBlockMap.hasOwnProperty(trackById)) block = lastBlockMap[trackById], 
                        delete lastBlockMap[trackById], nextBlockMap[trackById] = block, nextBlockOrder[index] = block; else {
                            if (nextBlockMap.hasOwnProperty(trackById)) throw forEach(nextBlockOrder, function(block) {
                                block && block.element && (lastBlockMap[block.id] = block);
                            }), new Error("Duplicates in a repeater are not allowed. Repeater: " + expression + " key: " + trackById);
                            nextBlockOrder[index] = {
                                id: trackById
                            }, nextBlockMap[trackById] = !1;
                        }
                        for (key in lastBlockMap) lastBlockMap.hasOwnProperty(key) && (block = lastBlockMap[key], 
                        animate.leave(block.element), block.element[0][NG_REMOVED] = !0, block.scope.$destroy());
                        for (index = 0, length = collectionKeys.length; length > index; index++) {
                            if (key = collection === collectionKeys ? index : collectionKeys[index], value = collection[key], 
                            block = nextBlockOrder[index], block.element) {
                                childScope = block.scope, nextCursor = cursor[0];
                                do nextCursor = nextCursor.nextSibling; while (nextCursor && nextCursor[NG_REMOVED]);
                                block.element[0] == nextCursor ? cursor = block.element : (animate.move(block.element, null, cursor), 
                                cursor = block.element);
                            } else childScope = $scope.$new();
                            childScope[valueIdentifier] = value, keyIdentifier && (childScope[keyIdentifier] = key), 
                            childScope.$index = index, childScope.$first = 0 === index, childScope.$last = index === arrayLength - 1, 
                            childScope.$middle = !(childScope.$first || childScope.$last), block.element || linker(childScope, function(clone) {
                                animate.enter(clone, null, cursor), cursor = clone, block.scope = childScope, block.element = clone, 
                                nextBlockMap[block.id] = block;
                            });
                        }
                        lastBlockMap = nextBlockMap;
                    });
                };
            }
        };
    } ], ngShowDirective = [ "$animator", function($animator) {
        return function(scope, element, attr) {
            var animate = $animator(scope, attr);
            scope.$watch(attr.ngShow, function(value) {
                animate[toBoolean(value) ? "show" : "hide"](element);
            });
        };
    } ], ngHideDirective = [ "$animator", function($animator) {
        return function(scope, element, attr) {
            var animate = $animator(scope, attr);
            scope.$watch(attr.ngHide, function(value) {
                animate[toBoolean(value) ? "hide" : "show"](element);
            });
        };
    } ], ngStyleDirective = ngDirective(function(scope, element, attr) {
        scope.$watch(attr.ngStyle, function(newStyles, oldStyles) {
            oldStyles && newStyles !== oldStyles && forEach(oldStyles, function(val, style) {
                element.css(style, "");
            }), newStyles && element.css(newStyles);
        }, !0);
    }), ngSwitchDirective = [ "$animator", function($animator) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(scope, element, attr, ngSwitchController) {
                var selectedTranscludes, selectedElements, animate = $animator(scope, attr), watchExpr = attr.ngSwitch || attr.on, selectedScopes = [];
                scope.$watch(watchExpr, function(value) {
                    for (var i = 0, ii = selectedScopes.length; ii > i; i++) selectedScopes[i].$destroy(), 
                    animate.leave(selectedElements[i]);
                    selectedElements = [], selectedScopes = [], (selectedTranscludes = ngSwitchController.cases["!" + value] || ngSwitchController.cases["?"]) && (scope.$eval(attr.change), 
                    forEach(selectedTranscludes, function(selectedTransclude) {
                        var selectedScope = scope.$new();
                        selectedScopes.push(selectedScope), selectedTransclude.transclude(selectedScope, function(caseElement) {
                            var anchor = selectedTransclude.element;
                            selectedElements.push(caseElement), animate.enter(caseElement, anchor.parent(), anchor);
                        });
                    }));
                });
            }
        };
    } ], ngSwitchWhenDirective = ngDirective({
        transclude: "element",
        priority: 500,
        require: "^ngSwitch",
        compile: function(element, attrs, transclude) {
            return function(scope, element, attr, ctrl) {
                ctrl.cases["!" + attrs.ngSwitchWhen] = ctrl.cases["!" + attrs.ngSwitchWhen] || [], 
                ctrl.cases["!" + attrs.ngSwitchWhen].push({
                    transclude: transclude,
                    element: element
                });
            };
        }
    }), ngSwitchDefaultDirective = ngDirective({
        transclude: "element",
        priority: 500,
        require: "^ngSwitch",
        compile: function(element, attrs, transclude) {
            return function(scope, element, attr, ctrl) {
                ctrl.cases["?"] = ctrl.cases["?"] || [], ctrl.cases["?"].push({
                    transclude: transclude,
                    element: element
                });
            };
        }
    }), ngTranscludeDirective = ngDirective({
        controller: [ "$transclude", "$element", function($transclude, $element) {
            $transclude(function(clone) {
                $element.append(clone);
            });
        } ]
    }), ngViewDirective = [ "$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", "$animator", function($http, $templateCache, $route, $anchorScroll, $compile, $controller, $animator) {
        return {
            restrict: "ECA",
            terminal: !0,
            link: function(scope, element, attr) {
                function destroyLastScope() {
                    lastScope && (lastScope.$destroy(), lastScope = null);
                }
                function clearContent() {
                    animate.leave(element.contents(), element), destroyLastScope();
                }
                function update() {
                    var locals = $route.current && $route.current.locals, template = locals && locals.$template;
                    if (template) {
                        clearContent();
                        var enterElements = jqLite("<div></div>").html(template).contents();
                        animate.enter(enterElements, element);
                        var controller, link = $compile(enterElements), current = $route.current;
                        lastScope = current.scope = scope.$new(), current.controller && (locals.$scope = lastScope, 
                        controller = $controller(current.controller, locals), current.controllerAs && (lastScope[current.controllerAs] = controller), 
                        element.children().data("$ngControllerController", controller)), link(lastScope), 
                        lastScope.$emit("$viewContentLoaded"), lastScope.$eval(onloadExp), $anchorScroll();
                    } else clearContent();
                }
                var lastScope, onloadExp = attr.onload || "", animate = $animator(scope, attr);
                scope.$on("$routeChangeSuccess", update), update();
            }
        };
    } ], scriptDirective = [ "$templateCache", function($templateCache) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(element, attr) {
                if ("text/ng-template" == attr.type) {
                    var templateUrl = attr.id, text = element[0].text;
                    $templateCache.put(templateUrl, text);
                }
            }
        };
    } ], ngOptionsDirective = valueFn({
        terminal: !0
    }), selectDirective = [ "$compile", "$parse", function($compile, $parse) {
        var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/, nullModelCtrl = {
            $setViewValue: noop
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function($element, $scope, $attrs) {
                var nullOption, unknownOption, self = this, optionsMap = {}, ngModelCtrl = nullModelCtrl;
                self.databound = $attrs.ngModel, self.init = function(ngModelCtrl_, nullOption_, unknownOption_) {
                    ngModelCtrl = ngModelCtrl_, nullOption = nullOption_, unknownOption = unknownOption_;
                }, self.addOption = function(value) {
                    optionsMap[value] = !0, ngModelCtrl.$viewValue == value && ($element.val(value), 
                    unknownOption.parent() && unknownOption.remove());
                }, self.removeOption = function(value) {
                    this.hasOption(value) && (delete optionsMap[value], ngModelCtrl.$viewValue == value && this.renderUnknownOption(value));
                }, self.renderUnknownOption = function(val) {
                    var unknownVal = "? " + hashKey(val) + " ?";
                    unknownOption.val(unknownVal), $element.prepend(unknownOption), $element.val(unknownVal), 
                    unknownOption.prop("selected", !0);
                }, self.hasOption = function(value) {
                    return optionsMap.hasOwnProperty(value);
                }, $scope.$on("$destroy", function() {
                    self.renderUnknownOption = noop;
                });
            } ],
            link: function(scope, element, attr, ctrls) {
                function Single(scope, selectElement, ngModelCtrl, selectCtrl) {
                    ngModelCtrl.$render = function() {
                        var viewValue = ngModelCtrl.$viewValue;
                        selectCtrl.hasOption(viewValue) ? (unknownOption.parent() && unknownOption.remove(), 
                        selectElement.val(viewValue), "" === viewValue && emptyOption.prop("selected", !0)) : isUndefined(viewValue) && emptyOption ? selectElement.val("") : selectCtrl.renderUnknownOption(viewValue);
                    }, selectElement.bind("change", function() {
                        scope.$apply(function() {
                            unknownOption.parent() && unknownOption.remove(), ngModelCtrl.$setViewValue(selectElement.val());
                        });
                    });
                }
                function Multiple(scope, selectElement, ctrl) {
                    var lastView;
                    ctrl.$render = function() {
                        var items = new HashMap(ctrl.$viewValue);
                        forEach(selectElement.find("option"), function(option) {
                            option.selected = isDefined(items.get(option.value));
                        });
                    }, scope.$watch(function() {
                        equals(lastView, ctrl.$viewValue) || (lastView = copy(ctrl.$viewValue), ctrl.$render());
                    }), selectElement.bind("change", function() {
                        scope.$apply(function() {
                            var array = [];
                            forEach(selectElement.find("option"), function(option) {
                                option.selected && array.push(option.value);
                            }), ctrl.$setViewValue(array);
                        });
                    });
                }
                function Options(scope, selectElement, ctrl) {
                    function render() {
                        var optionGroupName, optionGroup, option, existingParent, existingOptions, existingOption, groupLength, length, groupIndex, index, selected, lastElement, element, label, optionGroups = {
                            "": []
                        }, optionGroupNames = [ "" ], modelValue = ctrl.$modelValue, values = valuesFn(scope) || [], keys = keyName ? sortedKeys(values) : values, locals = {}, selectedSet = !1;
                        if (multiple) if (trackFn && isArray(modelValue)) {
                            selectedSet = new HashMap([]);
                            for (var trackIndex = 0; trackIndex < modelValue.length; trackIndex++) locals[valueName] = modelValue[trackIndex], 
                            selectedSet.put(trackFn(scope, locals), modelValue[trackIndex]);
                        } else selectedSet = new HashMap(modelValue);
                        for (index = 0; length = keys.length, length > index; index++) {
                            if (locals[valueName] = values[keyName ? locals[keyName] = keys[index] : index], 
                            optionGroupName = groupByFn(scope, locals) || "", (optionGroup = optionGroups[optionGroupName]) || (optionGroup = optionGroups[optionGroupName] = [], 
                            optionGroupNames.push(optionGroupName)), multiple) selected = selectedSet.remove(trackFn ? trackFn(scope, locals) : valueFn(scope, locals)) != undefined; else {
                                if (trackFn) {
                                    var modelCast = {};
                                    modelCast[valueName] = modelValue, selected = trackFn(scope, modelCast) === trackFn(scope, locals);
                                } else selected = modelValue === valueFn(scope, locals);
                                selectedSet = selectedSet || selected;
                            }
                            label = displayFn(scope, locals), label = label === undefined ? "" : label, optionGroup.push({
                                id: trackFn ? trackFn(scope, locals) : keyName ? keys[index] : index,
                                label: label,
                                selected: selected
                            });
                        }
                        for (multiple || (nullOption || null === modelValue ? optionGroups[""].unshift({
                            id: "",
                            label: "",
                            selected: !selectedSet
                        }) : selectedSet || optionGroups[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), groupIndex = 0, groupLength = optionGroupNames.length; groupLength > groupIndex; groupIndex++) {
                            for (optionGroupName = optionGroupNames[groupIndex], optionGroup = optionGroups[optionGroupName], 
                            optionGroupsCache.length <= groupIndex ? (existingParent = {
                                element: optGroupTemplate.clone().attr("label", optionGroupName),
                                label: optionGroup.label
                            }, existingOptions = [ existingParent ], optionGroupsCache.push(existingOptions), 
                            selectElement.append(existingParent.element)) : (existingOptions = optionGroupsCache[groupIndex], 
                            existingParent = existingOptions[0], existingParent.label != optionGroupName && existingParent.element.attr("label", existingParent.label = optionGroupName)), 
                            lastElement = null, index = 0, length = optionGroup.length; length > index; index++) option = optionGroup[index], 
                            (existingOption = existingOptions[index + 1]) ? (lastElement = existingOption.element, 
                            existingOption.label !== option.label && lastElement.text(existingOption.label = option.label), 
                            existingOption.id !== option.id && lastElement.val(existingOption.id = option.id), 
                            lastElement[0].selected !== option.selected && lastElement.prop("selected", existingOption.selected = option.selected)) : ("" === option.id && nullOption ? element = nullOption : (element = optionTemplate.clone()).val(option.id).attr("selected", option.selected).text(option.label), 
                            existingOptions.push(existingOption = {
                                element: element,
                                label: option.label,
                                id: option.id,
                                selected: option.selected
                            }), lastElement ? lastElement.after(element) : existingParent.element.append(element), 
                            lastElement = element);
                            for (index++; existingOptions.length > index; ) existingOptions.pop().element.remove();
                        }
                        for (;optionGroupsCache.length > groupIndex; ) optionGroupsCache.pop()[0].element.remove();
                    }
                    var match;
                    if (!(match = optionsExp.match(NG_OPTIONS_REGEXP))) throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_ (track by _expr_)?' but got '" + optionsExp + "'.");
                    var displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], groupByFn = $parse(match[3] || ""), valueFn = $parse(match[2] ? match[1] : valueName), valuesFn = $parse(match[7]), track = match[8], trackFn = track ? $parse(match[8]) : null, optionGroupsCache = [ [ {
                        element: selectElement,
                        label: ""
                    } ] ];
                    nullOption && ($compile(nullOption)(scope), nullOption.removeClass("ng-scope"), 
                    nullOption.remove()), selectElement.html(""), selectElement.bind("change", function() {
                        scope.$apply(function() {
                            var optionGroup, key, value, optionElement, index, groupIndex, length, groupLength, collection = valuesFn(scope) || [], locals = {};
                            if (multiple) {
                                for (value = [], groupIndex = 0, groupLength = optionGroupsCache.length; groupLength > groupIndex; groupIndex++) for (optionGroup = optionGroupsCache[groupIndex], 
                                index = 1, length = optionGroup.length; length > index; index++) if ((optionElement = optionGroup[index].element)[0].selected) {
                                    if (key = optionElement.val(), keyName && (locals[keyName] = key), trackFn) for (var trackIndex = 0; trackIndex < collection.length && (locals[valueName] = collection[trackIndex], 
                                    trackFn(scope, locals) != key); trackIndex++) ; else locals[valueName] = collection[key];
                                    value.push(valueFn(scope, locals));
                                }
                            } else if (key = selectElement.val(), "?" == key) value = undefined; else if ("" == key) value = null; else if (trackFn) {
                                for (var trackIndex = 0; trackIndex < collection.length; trackIndex++) if (locals[valueName] = collection[trackIndex], 
                                trackFn(scope, locals) == key) {
                                    value = valueFn(scope, locals);
                                    break;
                                }
                            } else locals[valueName] = collection[key], keyName && (locals[keyName] = key), 
                            value = valueFn(scope, locals);
                            ctrl.$setViewValue(value);
                        });
                    }), ctrl.$render = render, scope.$watch(render);
                }
                if (ctrls[1]) {
                    for (var emptyOption, selectCtrl = ctrls[0], ngModelCtrl = ctrls[1], multiple = attr.multiple, optionsExp = attr.ngOptions, nullOption = !1, optionTemplate = jqLite(document.createElement("option")), optGroupTemplate = jqLite(document.createElement("optgroup")), unknownOption = optionTemplate.clone(), i = 0, children = element.children(), ii = children.length; ii > i; i++) if ("" == children[i].value) {
                        emptyOption = nullOption = children.eq(i);
                        break;
                    }
                    if (selectCtrl.init(ngModelCtrl, nullOption, unknownOption), multiple && (attr.required || attr.ngRequired)) {
                        var requiredValidator = function(value) {
                            return ngModelCtrl.$setValidity("required", !attr.required || value && value.length), 
                            value;
                        };
                        ngModelCtrl.$parsers.push(requiredValidator), ngModelCtrl.$formatters.unshift(requiredValidator), 
                        attr.$observe("required", function() {
                            requiredValidator(ngModelCtrl.$viewValue);
                        });
                    }
                    optionsExp ? Options(scope, element, ngModelCtrl) : multiple ? Multiple(scope, element, ngModelCtrl) : Single(scope, element, ngModelCtrl, selectCtrl);
                }
            }
        };
    } ], optionDirective = [ "$interpolate", function($interpolate) {
        var nullSelectCtrl = {
            addOption: noop,
            removeOption: noop
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(element, attr) {
                if (isUndefined(attr.value)) {
                    var interpolateFn = $interpolate(element.text(), !0);
                    interpolateFn || attr.$set("value", element.text());
                }
                return function(scope, element, attr) {
                    var selectCtrlName = "$selectController", parent = element.parent(), selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
                    selectCtrl && selectCtrl.databound ? element.prop("selected", !1) : selectCtrl = nullSelectCtrl, 
                    interpolateFn ? scope.$watch(interpolateFn, function(newVal, oldVal) {
                        attr.$set("value", newVal), newVal !== oldVal && selectCtrl.removeOption(oldVal), 
                        selectCtrl.addOption(newVal);
                    }) : selectCtrl.addOption(attr.value), element.bind("$destroy", function() {
                        selectCtrl.removeOption(attr.value);
                    });
                };
            }
        };
    } ], styleDirective = valueFn({
        restrict: "E",
        terminal: !0
    });
    bindJQuery(), publishExternalAPI(angular), jqLite(document).ready(function() {
        angularInit(document, bootstrap);
    });
}(window, document), angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>'), 
!function(t) {
    function e(t, e) {
        return function(n) {
            return u(t.call(this, n), e);
        };
    }
    function n(t, e) {
        return function(n) {
            return this.lang().ordinal(t.call(this, n), e);
        };
    }
    function s() {}
    function i(t) {
        a(this, t);
    }
    function r(t) {
        var e = t.years || t.year || t.y || 0, n = t.months || t.month || t.M || 0, s = t.weeks || t.week || t.w || 0, i = t.days || t.day || t.d || 0, r = t.hours || t.hour || t.h || 0, a = t.minutes || t.minute || t.m || 0, o = t.seconds || t.second || t.s || 0, u = t.milliseconds || t.millisecond || t.ms || 0;
        this._input = t, this._milliseconds = u + 1e3 * o + 6e4 * a + 36e5 * r, this._days = i + 7 * s, 
        this._months = n + 12 * e, this._data = {}, this._bubble();
    }
    function a(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
    }
    function o(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t);
    }
    function u(t, e) {
        for (var n = t + ""; n.length < e; ) n = "0" + n;
        return n;
    }
    function h(t, e, n, s) {
        var i, r, a = e._milliseconds, o = e._days, u = e._months;
        a && t._d.setTime(+t._d + a * n), (o || u) && (i = t.minute(), r = t.hour()), o && t.date(t.date() + o * n), 
        u && t.month(t.month() + u * n), a && !s && H.updateOffset(t), (o || u) && (t.minute(i), 
        t.hour(r));
    }
    function d(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }
    function c(t, e) {
        var n, s = Math.min(t.length, e.length), i = Math.abs(t.length - e.length), r = 0;
        for (n = 0; s > n; n++) ~~t[n] !== ~~e[n] && r++;
        return r + i;
    }
    function f(t) {
        return t ? ie[t] || t.toLowerCase().replace(/(.)s$/, "$1") : t;
    }
    function l(t, e) {
        return e.abbr = t, x[t] || (x[t] = new s()), x[t].set(e), x[t];
    }
    function _(t) {
        if (!t) return H.fn._lang;
        if (!x[t] && A) try {
            require("./lang/" + t);
        } catch (e) {
            return H.fn._lang;
        }
        return x[t];
    }
    function m(t) {
        return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
    }
    function y(t) {
        var e, n, s = t.match(E);
        for (e = 0, n = s.length; n > e; e++) s[e] = ue[s[e]] ? ue[s[e]] : m(s[e]);
        return function(i) {
            var r = "";
            for (e = 0; n > e; e++) r += s[e] instanceof Function ? s[e].call(i, t) : s[e];
            return r;
        };
    }
    function M(t, e) {
        function n(e) {
            return t.lang().longDateFormat(e) || e;
        }
        for (var s = 5; s-- && N.test(e); ) e = e.replace(N, n);
        return re[e] || (re[e] = y(e)), re[e](t);
    }
    function g(t, e) {
        switch (t) {
          case "DDDD":
            return V;

          case "YYYY":
            return X;

          case "YYYYY":
            return $;

          case "S":
          case "SS":
          case "SSS":
          case "DDD":
            return I;

          case "MMM":
          case "MMMM":
          case "dd":
          case "ddd":
          case "dddd":
            return R;

          case "a":
          case "A":
            return _(e._l)._meridiemParse;

          case "X":
            return B;

          case "Z":
          case "ZZ":
            return j;

          case "T":
            return q;

          case "MM":
          case "DD":
          case "YY":
          case "HH":
          case "hh":
          case "mm":
          case "ss":
          case "M":
          case "D":
          case "d":
          case "H":
          case "h":
          case "m":
          case "s":
            return J;

          default:
            return new RegExp(t.replace("\\", ""));
        }
    }
    function p(t) {
        var e = (j.exec(t) || [])[0], n = (e + "").match(ee) || [ "-", 0, 0 ], s = +(60 * n[1]) + ~~n[2];
        return "+" === n[0] ? -s : s;
    }
    function D(t, e, n) {
        var s, i = n._a;
        switch (t) {
          case "M":
          case "MM":
            i[1] = null == e ? 0 : ~~e - 1;
            break;

          case "MMM":
          case "MMMM":
            s = _(n._l).monthsParse(e), null != s ? i[1] = s : n._isValid = !1;
            break;

          case "D":
          case "DD":
          case "DDD":
          case "DDDD":
            null != e && (i[2] = ~~e);
            break;

          case "YY":
            i[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
            break;

          case "YYYY":
          case "YYYYY":
            i[0] = ~~e;
            break;

          case "a":
          case "A":
            n._isPm = _(n._l).isPM(e);
            break;

          case "H":
          case "HH":
          case "h":
          case "hh":
            i[3] = ~~e;
            break;

          case "m":
          case "mm":
            i[4] = ~~e;
            break;

          case "s":
          case "ss":
            i[5] = ~~e;
            break;

          case "S":
          case "SS":
          case "SSS":
            i[6] = ~~(1e3 * ("0." + e));
            break;

          case "X":
            n._d = new Date(1e3 * parseFloat(e));
            break;

          case "Z":
          case "ZZ":
            n._useUTC = !0, n._tzm = p(e);
        }
        null == e && (n._isValid = !1);
    }
    function Y(t) {
        var e, n, s = [];
        if (!t._d) {
            for (e = 0; 7 > e; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            s[3] += ~~((t._tzm || 0) / 60), s[4] += ~~((t._tzm || 0) % 60), n = new Date(0), 
            t._useUTC ? (n.setUTCFullYear(s[0], s[1], s[2]), n.setUTCHours(s[3], s[4], s[5], s[6])) : (n.setFullYear(s[0], s[1], s[2]), 
            n.setHours(s[3], s[4], s[5], s[6])), t._d = n;
        }
    }
    function w(t) {
        var e, n, s = t._f.match(E), i = t._i;
        for (t._a = [], e = 0; e < s.length; e++) n = (g(s[e], t).exec(i) || [])[0], n && (i = i.slice(i.indexOf(n) + n.length)), 
        ue[s[e]] && D(s[e], n, t);
        i && (t._il = i), t._isPm && t._a[3] < 12 && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), 
        Y(t);
    }
    function k(t) {
        var e, n, s, r, o, u = 99;
        for (r = 0; r < t._f.length; r++) e = a({}, t), e._f = t._f[r], w(e), n = new i(e), 
        o = c(e._a, n.toArray()), n._il && (o += n._il.length), u > o && (u = o, s = n);
        a(t, s);
    }
    function v(t) {
        var e, n = t._i, s = K.exec(n);
        if (s) {
            for (t._f = "YYYY-MM-DD" + (s[2] || " "), e = 0; 4 > e; e++) if (te[e][1].exec(n)) {
                t._f += te[e][0];
                break;
            }
            j.exec(n) && (t._f += " Z"), w(t);
        } else t._d = new Date(n);
    }
    function T(e) {
        var n = e._i, s = G.exec(n);
        n === t ? e._d = new Date() : s ? e._d = new Date(+s[1]) : "string" == typeof n ? v(e) : d(n) ? (e._a = n.slice(0), 
        Y(e)) : e._d = new Date(n instanceof Date ? +n : n);
    }
    function b(t, e, n, s, i) {
        return i.relativeTime(e || 1, !!n, t, s);
    }
    function S(t, e, n) {
        var s = W(Math.abs(t) / 1e3), i = W(s / 60), r = W(i / 60), a = W(r / 24), o = W(a / 365), u = 45 > s && [ "s", s ] || 1 === i && [ "m" ] || 45 > i && [ "mm", i ] || 1 === r && [ "h" ] || 22 > r && [ "hh", r ] || 1 === a && [ "d" ] || 25 >= a && [ "dd", a ] || 45 >= a && [ "M" ] || 345 > a && [ "MM", W(a / 30) ] || 1 === o && [ "y" ] || [ "yy", o ];
        return u[2] = e, u[3] = t > 0, u[4] = n, b.apply({}, u);
    }
    function F(t, e, n) {
        var s, i = n - e, r = n - t.day();
        return r > i && (r -= 7), i - 7 > r && (r += 7), s = H(t).add("d", r), {
            week: Math.ceil(s.dayOfYear() / 7),
            year: s.year()
        };
    }
    function O(t) {
        var e = t._i, n = t._f;
        return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = _().preparse(e)), 
        H.isMoment(e) ? (t = a({}, e), t._d = new Date(+e._d)) : n ? d(n) ? k(t) : w(t) : T(t), 
        new i(t));
    }
    function z(t, e) {
        H.fn[t] = H.fn[t + "s"] = function(t) {
            var n = this._isUTC ? "UTC" : "";
            return null != t ? (this._d["set" + n + e](t), H.updateOffset(this), this) : this._d["get" + n + e]();
        };
    }
    function C(t) {
        H.duration.fn[t] = function() {
            return this._data[t];
        };
    }
    function L(t, e) {
        H.duration.fn["as" + t] = function() {
            return +this / e;
        };
    }
    for (var H, P, U = "2.1.0", W = Math.round, x = {}, A = "undefined" != typeof module && module.exports, G = /^\/?Date\((\-?\d+)/i, Z = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, E = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, N = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, J = /\d\d?/, I = /\d{1,3}/, V = /\d{3}/, X = /\d{1,4}/, $ = /[+\-]?\d{1,6}/, R = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, j = /Z|[\+\-]\d\d:?\d\d/i, q = /T/i, B = /[\+\-]?\d+(\.\d{1,3})?/, K = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, Q = "YYYY-MM-DDTHH:mm:ssZ", te = [ [ "HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ], ee = /([\+\-]|\d\d)/gi, ne = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), se = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, ie = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        w: "week",
        M: "month",
        y: "year"
    }, re = {}, ae = "DDD w W M D d".split(" "), oe = "M D H h m s w W".split(" "), ue = {
        M: function() {
            return this.month() + 1;
        },
        MMM: function(t) {
            return this.lang().monthsShort(this, t);
        },
        MMMM: function(t) {
            return this.lang().months(this, t);
        },
        D: function() {
            return this.date();
        },
        DDD: function() {
            return this.dayOfYear();
        },
        d: function() {
            return this.day();
        },
        dd: function(t) {
            return this.lang().weekdaysMin(this, t);
        },
        ddd: function(t) {
            return this.lang().weekdaysShort(this, t);
        },
        dddd: function(t) {
            return this.lang().weekdays(this, t);
        },
        w: function() {
            return this.week();
        },
        W: function() {
            return this.isoWeek();
        },
        YY: function() {
            return u(this.year() % 100, 2);
        },
        YYYY: function() {
            return u(this.year(), 4);
        },
        YYYYY: function() {
            return u(this.year(), 5);
        },
        gg: function() {
            return u(this.weekYear() % 100, 2);
        },
        gggg: function() {
            return this.weekYear();
        },
        ggggg: function() {
            return u(this.weekYear(), 5);
        },
        GG: function() {
            return u(this.isoWeekYear() % 100, 2);
        },
        GGGG: function() {
            return this.isoWeekYear();
        },
        GGGGG: function() {
            return u(this.isoWeekYear(), 5);
        },
        e: function() {
            return this.weekday();
        },
        E: function() {
            return this.isoWeekday();
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0);
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1);
        },
        H: function() {
            return this.hours();
        },
        h: function() {
            return this.hours() % 12 || 12;
        },
        m: function() {
            return this.minutes();
        },
        s: function() {
            return this.seconds();
        },
        S: function() {
            return ~~(this.milliseconds() / 100);
        },
        SS: function() {
            return u(~~(this.milliseconds() / 10), 2);
        },
        SSS: function() {
            return u(this.milliseconds(), 3);
        },
        Z: function() {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + u(~~(t / 60), 2) + ":" + u(~~t % 60, 2);
        },
        ZZ: function() {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + u(~~(10 * t / 6), 4);
        },
        z: function() {
            return this.zoneAbbr();
        },
        zz: function() {
            return this.zoneName();
        },
        X: function() {
            return this.unix();
        }
    }; ae.length; ) P = ae.pop(), ue[P + "o"] = n(ue[P], P);
    for (;oe.length; ) P = oe.pop(), ue[P + P] = e(ue[P], 2);
    for (ue.DDDD = e(ue.DDD, 3), s.prototype = {
        set: function(t) {
            var e, n;
            for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e;
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(t) {
            return this._months[t.month()];
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(t) {
            return this._monthsShort[t.month()];
        },
        monthsParse: function(t) {
            var e, n, s;
            for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++) if (this._monthsParse[e] || (n = H([ 2e3, e ]), 
            s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(s.replace(".", ""), "i")), 
            this._monthsParse[e].test(t)) return e;
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(t) {
            return this._weekdays[t.day()];
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(t) {
            return this._weekdaysShort[t.day()];
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(t) {
            return this._weekdaysMin[t.day()];
        },
        weekdaysParse: function(t) {
            var e, n, s;
            for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++) if (this._weekdaysParse[e] || (n = H([ 2e3, 1 ]).day(e), 
            s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), 
            this._weekdaysParse[e] = new RegExp(s.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e;
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(t) {
            var e = this._longDateFormat[t];
            return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1);
            }), this._longDateFormat[t] = e), e;
        },
        isPM: function(t) {
            return "p" === (t + "").toLowerCase()[0];
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(t, e) {
            var n = this._calendar[t];
            return "function" == typeof n ? n.apply(e) : n;
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(t, e, n, s) {
            var i = this._relativeTime[n];
            return "function" == typeof i ? i(t, e, n, s) : i.replace(/%d/i, t);
        },
        pastFuture: function(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return "function" == typeof n ? n(e) : n.replace(/%s/i, e);
        },
        ordinal: function(t) {
            return this._ordinal.replace("%d", t);
        },
        _ordinal: "%d",
        preparse: function(t) {
            return t;
        },
        postformat: function(t) {
            return t;
        },
        week: function(t) {
            return F(t, this._week.dow, this._week.doy).week;
        },
        _week: {
            dow: 0,
            doy: 6
        }
    }, H = function(t, e, n) {
        return O({
            _i: t,
            _f: e,
            _l: n,
            _isUTC: !1
        });
    }, H.utc = function(t, e, n) {
        return O({
            _useUTC: !0,
            _isUTC: !0,
            _l: n,
            _i: t,
            _f: e
        });
    }, H.unix = function(t) {
        return H(1e3 * t);
    }, H.duration = function(t, e) {
        var n, s, i = H.isDuration(t), a = "number" == typeof t, o = i ? t._input : a ? {} : t, u = Z.exec(t);
        return a ? e ? o[e] = t : o.milliseconds = t : u && (n = "-" === u[1] ? -1 : 1, 
        o = {
            y: 0,
            d: ~~u[2] * n,
            h: ~~u[3] * n,
            m: ~~u[4] * n,
            s: ~~u[5] * n,
            ms: ~~u[6] * n
        }), s = new r(o), i && t.hasOwnProperty("_lang") && (s._lang = t._lang), s;
    }, H.version = U, H.defaultFormat = Q, H.updateOffset = function() {}, H.lang = function(t, e) {
        return t ? (e ? l(t, e) : x[t] || _(t), void (H.duration.fn._lang = H.fn._lang = _(t))) : H.fn._lang._abbr;
    }, H.langData = function(t) {
        return t && t._lang && t._lang._abbr && (t = t._lang._abbr), _(t);
    }, H.isMoment = function(t) {
        return t instanceof i;
    }, H.isDuration = function(t) {
        return t instanceof r;
    }, H.fn = i.prototype = {
        clone: function() {
            return H(this);
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0);
        },
        unix: function() {
            return Math.floor(+this / 1e3);
        },
        toString: function() {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d;
        },
        toISOString: function() {
            return M(H(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
        },
        toArray: function() {
            var t = this;
            return [ t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds() ];
        },
        isValid: function() {
            return null == this._isValid && (this._isValid = this._a ? !c(this._a, (this._isUTC ? H.utc(this._a) : H(this._a)).toArray()) : !isNaN(this._d.getTime())), 
            !!this._isValid;
        },
        utc: function() {
            return this.zone(0);
        },
        local: function() {
            return this.zone(0), this._isUTC = !1, this;
        },
        format: function(t) {
            var e = M(this, t || H.defaultFormat);
            return this.lang().postformat(e);
        },
        add: function(t, e) {
            var n;
            return n = "string" == typeof t ? H.duration(+e, t) : H.duration(t, e), h(this, n, 1), 
            this;
        },
        subtract: function(t, e) {
            var n;
            return n = "string" == typeof t ? H.duration(+e, t) : H.duration(t, e), h(this, n, -1), 
            this;
        },
        diff: function(t, e, n) {
            var s, i, r = this._isUTC ? H(t).zone(this._offset || 0) : H(t).local(), a = 6e4 * (this.zone() - r.zone());
            return e = f(e), "year" === e || "month" === e ? (s = 432e5 * (this.daysInMonth() + r.daysInMonth()), 
            i = 12 * (this.year() - r.year()) + (this.month() - r.month()), i += (this - H(this).startOf("month") - (r - H(r).startOf("month"))) / s, 
            i -= 6e4 * (this.zone() - H(this).startOf("month").zone() - (r.zone() - H(r).startOf("month").zone())) / s, 
            "year" === e && (i /= 12)) : (s = this - r, i = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? (s - a) / 864e5 : "week" === e ? (s - a) / 6048e5 : s), 
            n ? i : o(i);
        },
        from: function(t, e) {
            return H.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e);
        },
        fromNow: function(t) {
            return this.from(H(), t);
        },
        calendar: function() {
            var t = this.diff(H().startOf("day"), "days", !0), e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(e, this));
        },
        isLeapYear: function() {
            var t = this.year();
            return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400;
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone();
        },
        day: function(t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? "string" == typeof t && (t = this.lang().weekdaysParse(t), "number" != typeof t) ? this : this.add({
                d: t - e
            }) : e;
        },
        month: function(t) {
            var e, n = this._isUTC ? "UTC" : "";
            return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (e = this.date(), 
            this.date(1), this._d["set" + n + "Month"](t), this.date(Math.min(e, this.daysInMonth())), 
            H.updateOffset(this), this) : this._d["get" + n + "Month"]();
        },
        startOf: function(t) {
            switch (t = f(t)) {
              case "year":
                this.month(0);

              case "month":
                this.date(1);

              case "week":
              case "day":
                this.hours(0);

              case "hour":
                this.minutes(0);

              case "minute":
                this.seconds(0);

              case "second":
                this.milliseconds(0);
            }
            return "week" === t && this.weekday(0), this;
        },
        endOf: function(t) {
            return this.startOf(t).add(t, 1).subtract("ms", 1);
        },
        isAfter: function(t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +H(t).startOf(e);
        },
        isBefore: function(t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +H(t).startOf(e);
        },
        isSame: function(t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) === +H(t).startOf(e);
        },
        min: function(t) {
            return t = H.apply(null, arguments), this > t ? this : t;
        },
        max: function(t) {
            return t = H.apply(null, arguments), t > this ? this : t;
        },
        zone: function(t) {
            var e = this._offset || 0;
            return null == t ? this._isUTC ? e : this._d.getTimezoneOffset() : ("string" == typeof t && (t = p(t)), 
            Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC = !0, e !== t && h(this, H.duration(e - t, "m"), 1, !0), 
            this);
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : "";
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },
        daysInMonth: function() {
            return H.utc([ this.year(), this.month() + 1, 0 ]).date();
        },
        dayOfYear: function(t) {
            var e = W((H(this).startOf("day") - H(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add("d", t - e);
        },
        weekYear: function(t) {
            var e = F(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == t ? e : this.add("y", t - e);
        },
        isoWeekYear: function(t) {
            var e = F(this, 1, 4).year;
            return null == t ? e : this.add("y", t - e);
        },
        week: function(t) {
            var e = this.lang().week(this);
            return null == t ? e : this.add("d", 7 * (t - e));
        },
        isoWeek: function(t) {
            var e = F(this, 1, 4).week;
            return null == t ? e : this.add("d", 7 * (t - e));
        },
        weekday: function(t) {
            var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return null == t ? e : this.add("d", t - e);
        },
        isoWeekday: function(t) {
            return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
        },
        lang: function(e) {
            return e === t ? this._lang : (this._lang = _(e), this);
        }
    }, P = 0; P < ne.length; P++) z(ne[P].toLowerCase().replace(/s$/, ""), ne[P]);
    z("year", "FullYear"), H.fn.days = H.fn.day, H.fn.months = H.fn.month, H.fn.weeks = H.fn.week, 
    H.fn.isoWeeks = H.fn.isoWeek, H.fn.toJSON = H.fn.toISOString, H.duration.fn = r.prototype = {
        _bubble: function() {
            var t, e, n, s, i = this._milliseconds, r = this._days, a = this._months, u = this._data;
            u.milliseconds = i % 1e3, t = o(i / 1e3), u.seconds = t % 60, e = o(t / 60), u.minutes = e % 60, 
            n = o(e / 60), u.hours = n % 24, r += o(n / 24), u.days = r % 30, a += o(r / 30), 
            u.months = a % 12, s = o(a / 12), u.years = s;
        },
        weeks: function() {
            return o(this.days() / 7);
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12);
        },
        humanize: function(t) {
            var e = +this, n = S(e, !t, this.lang());
            return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n);
        },
        add: function(t, e) {
            var n = H.duration(t, e);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, 
            this._bubble(), this;
        },
        subtract: function(t, e) {
            var n = H.duration(t, e);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, 
            this._bubble(), this;
        },
        get: function(t) {
            return t = f(t), this[t.toLowerCase() + "s"]();
        },
        as: function(t) {
            return t = f(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]();
        },
        lang: H.fn.lang
    };
    for (P in se) se.hasOwnProperty(P) && (L(P, se[P]), C(P.toLowerCase()));
    L("Weeks", 6048e5), H.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years();
    }, H.lang("en", {
        ordinal: function(t) {
            var e = t % 10, n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n;
        }
    }), A && (module.exports = H), "undefined" == typeof ender && (this.moment = H), 
    "function" == typeof define && define.amd && define("moment", [], function() {
        return H;
    });
}.call(this), function() {
    var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, h = e.reduce, v = e.reduceRight, g = e.filter, d = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, w = Object.keys, _ = i.bind, j = function(n) {
        return n instanceof j ? n : this instanceof j ? void (this._wrapped = n) : new j(n);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), 
    exports._ = j) : n._ = j, j.VERSION = "1.5.2";
    var A = j.each = j.forEach = function(n, t, e) {
        if (null != n) if (s && n.forEach === s) n.forEach(t, e); else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return;
        } else for (var a = j.keys(n), u = 0, i = a.length; i > u; u++) if (t.call(e, n[a[u]], a[u], n) === r) return;
    };
    j.map = j.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e.push(t.call(r, n, u, i));
        }), e);
    };
    var E = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = j.bind(t, e)), 
        u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0);
        }), !u) throw new TypeError(E);
        return r;
    }, j.reduceRight = j.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = j.bind(t, e)), 
        u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = j.keys(n);
            i = a.length;
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0);
        }), !u) throw new TypeError(E);
        return r;
    }, j.find = j.detect = function(n, t, r) {
        var e;
        return O(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0;
        }), e;
    }, j.filter = j.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && e.push(n);
        }), e);
    }, j.reject = function(n, t, r) {
        return j.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u);
        }, r);
    }, j.every = j.all = function(n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r;
        }), !!u);
    };
    var O = j.some = j.any = function(n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0;
        }), !!u);
    };
    j.contains = j.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? -1 != n.indexOf(t) : O(n, function(n) {
            return n === t;
        });
    }, j.invoke = function(n, t) {
        var r = o.call(arguments, 2), e = j.isFunction(t);
        return j.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r);
        });
    }, j.pluck = function(n, t) {
        return j.map(n, function(n) {
            return n[t];
        });
    }, j.where = function(n, t, r) {
        return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function(n) {
            for (var r in t) if (t[r] !== n[r]) return !1;
            return !0;
        });
    }, j.findWhere = function(n, t) {
        return j.where(n, t, !0);
    }, j.max = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
        if (!t && j.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a > e.computed && (e = {
                value: n,
                computed: a
            });
        }), e.value;
    }, j.min = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
        if (!t && j.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {
                value: n,
                computed: a
            });
        }), e.value;
    }, j.shuffle = function(n) {
        var t, r = 0, e = [];
        return A(n, function(n) {
            t = j.random(r++), e[r - 1] = e[t], e[t] = n;
        }), e;
    }, j.sample = function(n, t, r) {
        return arguments.length < 2 || r ? n[j.random(n.length - 1)] : j.shuffle(n).slice(0, Math.max(0, t));
    };
    var k = function(n) {
        return j.isFunction(n) ? n : function(t) {
            return t[n];
        };
    };
    j.sortBy = function(n, t, r) {
        var e = k(t);
        return j.pluck(j.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            };
        }).sort(function(n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r) return 1;
                if (e > r || void 0 === e) return -1;
            }
            return n.index - t.index;
        }), "value");
    };
    var F = function(n) {
        return function(t, r, e) {
            var u = {}, i = null == r ? j.identity : k(r);
            return A(t, function(r, a) {
                var o = i.call(e, r, a, t);
                n(u, o, r);
            }), u;
        };
    };
    j.groupBy = F(function(n, t, r) {
        (j.has(n, t) ? n[t] : n[t] = []).push(r);
    }), j.indexBy = F(function(n, t, r) {
        n[t] = r;
    }), j.countBy = F(function(n, t) {
        j.has(n, t) ? n[t]++ : n[t] = 1;
    }), j.sortedIndex = function(n, t, r, e) {
        r = null == r ? j.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i; ) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o;
        }
        return i;
    }, j.toArray = function(n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : [];
    }, j.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length;
    }, j.first = j.head = j.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t);
    }, j.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t));
    }, j.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0));
    }, j.rest = j.tail = j.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t);
    }, j.compact = function(n) {
        return j.filter(n, j.identity);
    };
    var M = function(n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n);
        }), r);
    };
    j.flatten = function(n, t) {
        return M(n, t, []);
    }, j.without = function(n) {
        return j.difference(n, o.call(arguments, 1));
    }, j.uniq = j.unique = function(n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? j.map(n, r, e) : n, i = [], a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]));
        }), i;
    }, j.union = function() {
        return j.uniq(j.flatten(arguments, !0));
    }, j.intersection = function(n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function(n) {
            return j.every(t, function(t) {
                return j.indexOf(t, n) >= 0;
            });
        });
    }, j.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function(n) {
            return !j.contains(t, n);
        });
    }, j.zip = function() {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r);
        return t;
    }, j.object = function(n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r;
    }, j.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0, u = n.length;
        if (r) {
            if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r;
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (;u > e; e++) if (n[e] === t) return e;
        return -1;
    }, j.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--; ) if (n[u] === t) return u;
        return -1;
    }, j.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u; ) i[u++] = n, 
        n += r;
        return i;
    };
    var R = function() {};
    j.bind = function(n, t) {
        var r, e;
        if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n)) throw new TypeError();
        return r = o.call(arguments, 2), e = function() {
            if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R();
            R.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u;
        };
    }, j.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)));
        };
    }, j.bindAll = function(n) {
        var t = o.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return A(t, function(t) {
            n[t] = j.bind(n[t], n);
        }), n;
    }, j.memoize = function(n, t) {
        var r = {};
        return t || (t = j.identity), function() {
            var e = t.apply(this, arguments);
            return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments);
        };
    }, j.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r);
        }, t);
    }, j.defer = function(n) {
        return j.delay.apply(j, [ n, 1 ].concat(o.call(arguments, 1)));
    }, j.throttle = function(n, t, r) {
        var e, u, i, a = null, o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading === !1 ? 0 : new Date(), a = null, i = n.apply(e, u);
        };
        return function() {
            var l = new Date();
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), 
            i;
        };
    }, j.debounce = function(n, t, r) {
        var e, u, i, a, o;
        return function() {
            i = this, u = arguments, a = new Date();
            var c = function() {
                var l = new Date() - a;
                t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u)));
            }, l = r && !e;
            return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o;
        };
    }, j.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t);
        };
    }, j.wrap = function(n, t) {
        return function() {
            var r = [ n ];
            return a.apply(r, arguments), t.apply(this, r);
        };
    }, j.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [ n[r].apply(this, t) ];
            return t[0];
        };
    }, j.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0;
        };
    }, j.keys = w || function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) j.has(n, r) && t.push(r);
        return t;
    }, j.values = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e;
    }, j.pairs = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [ t[u], n[t[u]] ];
        return e;
    }, j.invert = function(n) {
        for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t;
    }, j.functions = j.methods = function(n) {
        var t = [];
        for (var r in n) j.isFunction(n[r]) && t.push(r);
        return t.sort();
    }, j.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t) for (var r in t) n[r] = t[r];
        }), n;
    }, j.pick = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r]);
        }), t;
    }, j.omit = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for (var u in n) j.contains(r, u) || (t[u] = n[u]);
        return t;
    }, j.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t) for (var r in t) void 0 === n[r] && (n[r] = t[r]);
        }), n;
    }, j.clone = function(n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n;
    }, j.tap = function(n, t) {
        return t(n), n;
    };
    var S = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return !1;
        switch (u) {
          case "[object String]":
            return n == String(t);

          case "[object Number]":
            return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;

          case "[object Date]":
          case "[object Boolean]":
            return +n == +t;

          case "[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase;
        }
        if ("object" != typeof n || "object" != typeof t) return !1;
        for (var i = r.length; i--; ) if (r[i] == n) return e[i] == t;
        var a = n.constructor, o = t.constructor;
        if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o)) return !1;
        r.push(n), e.push(t);
        var c = 0, f = !0;
        if ("[object Array]" == u) {
            if (c = n.length, f = c == t.length) for (;c-- && (f = S(n[c], t[c], r, e)); ) ;
        } else {
            for (var s in n) if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break;
            if (f) {
                for (s in t) if (j.has(t, s) && !c--) break;
                f = !c;
            }
        }
        return r.pop(), e.pop(), f;
    };
    j.isEqual = function(n, t) {
        return S(n, t, [], []);
    }, j.isEmpty = function(n) {
        if (null == n) return !0;
        if (j.isArray(n) || j.isString(n)) return 0 === n.length;
        for (var t in n) if (j.has(n, t)) return !1;
        return !0;
    }, j.isElement = function(n) {
        return !(!n || 1 !== n.nodeType);
    }, j.isArray = x || function(n) {
        return "[object Array]" == l.call(n);
    }, j.isObject = function(n) {
        return n === Object(n);
    }, A([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(n) {
        j["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]";
        };
    }), j.isArguments(arguments) || (j.isArguments = function(n) {
        return !(!n || !j.has(n, "callee"));
    }), "function" != typeof /./ && (j.isFunction = function(n) {
        return "function" == typeof n;
    }), j.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n));
    }, j.isNaN = function(n) {
        return j.isNumber(n) && n != +n;
    }, j.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n);
    }, j.isNull = function(n) {
        return null === n;
    }, j.isUndefined = function(n) {
        return void 0 === n;
    }, j.has = function(n, t) {
        return f.call(n, t);
    }, j.noConflict = function() {
        return n._ = t, this;
    }, j.identity = function(n) {
        return n;
    }, j.times = function(n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e;
    }, j.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
    };
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    I.unescape = j.invert(I.escape);
    var T = {
        escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")
    };
    j.each([ "escape", "unescape" ], function(n) {
        j[n] = function(t) {
            return null == t ? "" : ("" + t).replace(T[n], function(t) {
                return I[n][t];
            });
        };
    }), j.result = function(n, t) {
        if (null == n) return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r;
    }, j.mixin = function(n) {
        A(j.functions(n), function(t) {
            var r = j[t] = n[t];
            j.prototype[t] = function() {
                var n = [ this._wrapped ];
                return a.apply(n, arguments), z.call(this, r.apply(j, n));
            };
        });
    };
    var N = 0;
    j.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t;
    }, j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/, B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function(n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([ (r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source ].join("|") + "|$", "g"), i = 0, a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function(n) {
                return "\\" + B[n];
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), 
            u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t;
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a);
        } catch (o) {
            throw o.source = a, o;
        }
        if (t) return e(t, j);
        var c = function(n) {
            return e.call(this, n, j);
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c;
    }, j.chain = function(n) {
        return j(n).chain();
    };
    var z = function(n) {
        return this._chain ? j(n).chain() : n;
    };
    j.mixin(j), A([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], 
            z.call(this, r);
        };
    }), A([ "concat", "join", "slice" ], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments));
        };
    }), j.extend(j.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this), !function(e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "undefined" != typeof window ? window.io = e() : "undefined" != typeof global ? global.io = e() : "undefined" != typeof self && (self.io = e());
}(function() {
    var define;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = "function" == typeof require && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    throw new Error("Cannot find module '" + o + "'");
                }
                var f = n[o] = {
                    exports: {}
                };
                t[o][0].call(f.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                }, f, f.exports, e, t, n, r);
            }
            return n[o].exports;
        }
        for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
        return s;
    }({
        1: [ function(require, module) {
            module.exports = require("./lib/");
        }, {
            "./lib/": 2
        } ],
        2: [ function(require, module, exports) {
            function lookup(uri, opts) {
                "object" == typeof uri && (opts = uri, uri = void 0), opts = opts || {};
                var io, parsed = url(uri), source = parsed.source, id = parsed.id;
                return opts.forceNew || !1 === opts.multiplex ? (debug("ignoring socket cache for %s", source), 
                io = Manager(source, opts)) : (cache[id] || (debug("new io instance for %s", source), 
                cache[id] = Manager(source, opts)), io = cache[id]), io.socket(parsed.path);
            }
            var url = require("./url"), parser = require("socket.io-parser"), Manager = require("./manager"), debug = require("debug")("socket.io-client");
            module.exports = exports = lookup;
            var cache = exports.managers = {};
            exports.protocol = parser.protocol, exports.connect = lookup, exports.Manager = require("./manager"), 
            exports.Socket = require("./socket");
        }, {
            "./manager": 3,
            "./socket": 5,
            "./url": 6,
            debug: 8,
            "socket.io-parser": 39
        } ],
        3: [ function(require, module) {
            function Manager(uri, opts) {
                return this instanceof Manager ? ("object" == typeof uri && (opts = uri, uri = void 0), 
                opts = opts || {}, opts.path = opts.path || "/socket.io", this.nsps = {}, this.subs = [], 
                this.opts = opts, this.reconnection(opts.reconnection !== !1), this.reconnectionAttempts(opts.reconnectionAttempts || 1/0), 
                this.reconnectionDelay(opts.reconnectionDelay || 1e3), this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3), 
                this.timeout(null == opts.timeout ? 2e4 : opts.timeout), this.readyState = "closed", 
                this.uri = uri, this.connected = 0, this.attempts = 0, this.encoding = !1, this.packetBuffer = [], 
                this.encoder = new parser.Encoder(), this.decoder = new parser.Decoder(), void this.open()) : new Manager(uri, opts);
            }
            var eio = (require("./url"), require("engine.io-client")), Socket = require("./socket"), Emitter = require("emitter"), parser = require("socket.io-parser"), on = require("./on"), bind = require("bind"), debug = (require("object-component"), 
            require("debug")("socket.io-client:manager"));
            module.exports = Manager, Emitter(Manager.prototype), Manager.prototype.reconnection = function(v) {
                return arguments.length ? (this._reconnection = !!v, this) : this._reconnection;
            }, Manager.prototype.reconnectionAttempts = function(v) {
                return arguments.length ? (this._reconnectionAttempts = v, this) : this._reconnectionAttempts;
            }, Manager.prototype.reconnectionDelay = function(v) {
                return arguments.length ? (this._reconnectionDelay = v, this) : this._reconnectionDelay;
            }, Manager.prototype.reconnectionDelayMax = function(v) {
                return arguments.length ? (this._reconnectionDelayMax = v, this) : this._reconnectionDelayMax;
            }, Manager.prototype.timeout = function(v) {
                return arguments.length ? (this._timeout = v, this) : this._timeout;
            }, Manager.prototype.maybeReconnectOnOpen = function() {
                this.openReconnect || this.reconnecting || !this._reconnection || (this.openReconnect = !0, 
                this.reconnect());
            }, Manager.prototype.open = Manager.prototype.connect = function(fn) {
                if (debug("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                debug("opening %s", this.uri), this.engine = eio(this.uri, this.opts);
                var socket = this.engine, self = this;
                this.readyState = "opening";
                var openSub = on(socket, "open", function() {
                    self.onopen(), fn && fn();
                }), errorSub = on(socket, "error", function(data) {
                    if (debug("connect_error"), self.cleanup(), self.readyState = "closed", self.emit("connect_error", data), 
                    fn) {
                        var err = new Error("Connection error");
                        err.data = data, fn(err);
                    }
                    self.maybeReconnectOnOpen();
                });
                if (!1 !== this._timeout) {
                    var timeout = this._timeout;
                    debug("connect attempt will timeout after %d", timeout);
                    var timer = setTimeout(function() {
                        debug("connect attempt timed out after %d", timeout), openSub.destroy(), socket.close(), 
                        socket.emit("error", "timeout"), self.emit("connect_timeout", timeout);
                    }, timeout);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(timer);
                        }
                    });
                }
                return this.subs.push(openSub), this.subs.push(errorSub), this;
            }, Manager.prototype.onopen = function() {
                debug("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                var socket = this.engine;
                this.subs.push(on(socket, "data", bind(this, "ondata"))), this.subs.push(on(this.decoder, "decoded", bind(this, "ondecoded"))), 
                this.subs.push(on(socket, "error", bind(this, "onerror"))), this.subs.push(on(socket, "close", bind(this, "onclose")));
            }, Manager.prototype.ondata = function(data) {
                this.decoder.add(data);
            }, Manager.prototype.ondecoded = function(packet) {
                this.emit("packet", packet);
            }, Manager.prototype.onerror = function(err) {
                debug("error", err), this.emit("error", err);
            }, Manager.prototype.socket = function(nsp) {
                var socket = this.nsps[nsp];
                if (!socket) {
                    socket = new Socket(this, nsp), this.nsps[nsp] = socket;
                    var self = this;
                    socket.on("connect", function() {
                        self.connected++;
                    });
                }
                return socket;
            }, Manager.prototype.destroy = function() {
                --this.connected || this.close();
            }, Manager.prototype.packet = function(packet) {
                debug("writing packet %j", packet);
                var self = this;
                self.encoding ? self.packetBuffer.push(packet) : (self.encoding = !0, this.encoder.encode(packet, function(encodedPackets) {
                    for (var i = 0; i < encodedPackets.length; i++) self.engine.write(encodedPackets[i]);
                    self.encoding = !1, self.processPacketQueue();
                }));
            }, Manager.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var pack = this.packetBuffer.shift();
                    this.packet(pack);
                }
            }, Manager.prototype.cleanup = function() {
                for (var sub; sub = this.subs.shift(); ) sub.destroy();
                this.packetBuffer = [], this.encoding = !1, this.decoder.destroy();
            }, Manager.prototype.close = Manager.prototype.disconnect = function() {
                this.skipReconnect = !0, this.engine.close();
            }, Manager.prototype.onclose = function(reason) {
                debug("close"), this.cleanup(), this.readyState = "closed", this.emit("close", reason), 
                this._reconnection && !this.skipReconnect && this.reconnect();
            }, Manager.prototype.reconnect = function() {
                if (this.reconnecting) return this;
                var self = this;
                if (this.attempts++, this.attempts > this._reconnectionAttempts) debug("reconnect failed"), 
                this.emit("reconnect_failed"), this.reconnecting = !1; else {
                    var delay = this.attempts * this.reconnectionDelay();
                    delay = Math.min(delay, this.reconnectionDelayMax()), debug("will wait %dms before reconnect attempt", delay), 
                    this.reconnecting = !0;
                    var timer = setTimeout(function() {
                        debug("attempting reconnect"), self.emit("reconnect_attempt"), self.open(function(err) {
                            err ? (debug("reconnect attempt error"), self.reconnecting = !1, self.reconnect(), 
                            self.emit("reconnect_error", err.data)) : (debug("reconnect success"), self.onreconnect());
                        });
                    }, delay);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(timer);
                        }
                    });
                }
            }, Manager.prototype.onreconnect = function() {
                var attempt = this.attempts;
                this.attempts = 0, this.reconnecting = !1, this.emit("reconnect", attempt);
            };
        }, {
            "./on": 4,
            "./socket": 5,
            "./url": 6,
            bind: 7,
            debug: 8,
            emitter: 9,
            "engine.io-client": 10,
            "object-component": 36,
            "socket.io-parser": 39
        } ],
        4: [ function(require, module) {
            function on(obj, ev, fn) {
                return obj.on(ev, fn), {
                    destroy: function() {
                        obj.removeListener(ev, fn);
                    }
                };
            }
            module.exports = on;
        }, {} ],
        5: [ function(require, module, exports) {
            function Socket(io, nsp) {
                this.io = io, this.nsp = nsp, this.json = this, this.ids = 0, this.acks = {}, this.open(), 
                this.buffer = [], this.connected = !1, this.disconnected = !0;
            }
            {
                var parser = require("socket.io-parser"), Emitter = require("emitter"), toArray = require("to-array"), on = require("./on"), bind = require("bind"), debug = require("debug")("socket.io-client:socket"), hasBin = require("has-binary-data");
                require("indexof");
            }
            module.exports = exports = Socket;
            var events = {
                connect: 1,
                disconnect: 1,
                error: 1
            }, emit = Emitter.prototype.emit;
            Emitter(Socket.prototype), Socket.prototype.open = Socket.prototype.connect = function() {
                if (this.connected) return this;
                var io = this.io;
                return io.open(), this.subs = [ on(io, "open", bind(this, "onopen")), on(io, "error", bind(this, "onerror")), on(io, "packet", bind(this, "onpacket")), on(io, "close", bind(this, "onclose")) ], 
                "open" == this.io.readyState && this.onopen(), this;
            }, Socket.prototype.send = function() {
                var args = toArray(arguments);
                return args.unshift("message"), this.emit.apply(this, args), this;
            }, Socket.prototype.emit = function(ev) {
                if (events.hasOwnProperty(ev)) return emit.apply(this, arguments), this;
                var args = toArray(arguments), parserType = parser.EVENT;
                hasBin(args) && (parserType = parser.BINARY_EVENT);
                var packet = {
                    type: parserType,
                    data: args
                };
                return "function" == typeof args[args.length - 1] && (debug("emitting packet with ack id %d", this.ids), 
                this.acks[this.ids] = args.pop(), packet.id = this.ids++), this.packet(packet), 
                this;
            }, Socket.prototype.packet = function(packet) {
                packet.nsp = this.nsp, this.io.packet(packet);
            }, Socket.prototype.onerror = function(data) {
                this.emit("error", data);
            }, Socket.prototype.onopen = function() {
                debug("transport is open - connecting"), "/" != this.nsp && this.packet({
                    type: parser.CONNECT
                });
            }, Socket.prototype.onclose = function(reason) {
                debug("close (%s)", reason), this.connected = !1, this.disconnected = !0, this.emit("disconnect", reason);
            }, Socket.prototype.onpacket = function(packet) {
                if (packet.nsp == this.nsp) switch (packet.type) {
                  case parser.CONNECT:
                    this.onconnect();
                    break;

                  case parser.EVENT:
                    this.onevent(packet);
                    break;

                  case parser.BINARY_EVENT:
                    this.onevent(packet);
                    break;

                  case parser.ACK:
                    this.onack(packet);
                    break;

                  case parser.BINARY_ACK:
                    this.onack(packet);
                    break;

                  case parser.DISCONNECT:
                    this.ondisconnect();
                    break;

                  case parser.ERROR:
                    this.emit("error", packet.data);
                }
            }, Socket.prototype.onevent = function(packet) {
                var args = packet.data || [];
                debug("emitting event %j", args), null != packet.id && (debug("attaching ack callback to event"), 
                args.push(this.ack(packet.id))), this.connected ? emit.apply(this, args) : this.buffer.push(args);
            }, Socket.prototype.ack = function(id) {
                var self = this, sent = !1;
                return function() {
                    if (!sent) {
                        sent = !0;
                        var args = toArray(arguments);
                        debug("sending ack %j", args);
                        var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
                        self.packet({
                            type: type,
                            id: id,
                            data: args
                        });
                    }
                };
            }, Socket.prototype.onack = function(packet) {
                debug("calling ack %s with %j", packet.id, packet.data);
                var fn = this.acks[packet.id];
                fn.apply(this, packet.data), delete this.acks[packet.id];
            }, Socket.prototype.onconnect = function() {
                this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
            }, Socket.prototype.emitBuffered = function() {
                for (var i = 0; i < this.buffer.length; i++) emit.apply(this, this.buffer[i]);
                this.buffer = [];
            }, Socket.prototype.ondisconnect = function() {
                debug("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
            }, Socket.prototype.destroy = function() {
                for (var i = 0; i < this.subs.length; i++) this.subs[i].destroy();
                this.io.destroy(this);
            }, Socket.prototype.close = Socket.prototype.disconnect = function() {
                return this.connected ? (debug("performing disconnect (%s)", this.nsp), this.packet({
                    type: parser.DISCONNECT
                }), this.destroy(), this.onclose("io client disconnect"), this) : this;
            };
        }, {
            "./on": 4,
            bind: 7,
            debug: 8,
            emitter: 9,
            "has-binary-data": 31,
            indexof: 35,
            "socket.io-parser": 39,
            "to-array": 42
        } ],
        6: [ function(require, module) {
            function url(uri, loc) {
                var obj = uri, loc = loc || global.location;
                return null == uri && (uri = loc.protocol + "//" + loc.hostname), "string" == typeof uri && ("/" == uri.charAt(0) && "undefined" != typeof loc && (uri = loc.hostname + uri), 
                /^(https?|wss?):\/\//.test(uri) || (debug("protocol-less url %s", uri), uri = "undefined" != typeof loc ? loc.protocol + "//" + uri : "https://" + uri), 
                debug("parse %s", uri), obj = parseuri(uri)), (/(http|ws)/.test(obj.protocol) && 80 == obj.port || /(http|ws)s/.test(obj.protocol) && 443 == obj.port) && delete obj.port, 
                obj.path = obj.path || "/", obj.id = obj.protocol + obj.host + (obj.port ? ":" + obj.port : ""), 
                obj.href = obj.protocol + "://" + obj.host + (obj.port ? ":" + obj.port : ""), obj;
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, parseuri = require("parseuri"), debug = require("debug")("socket.io-client:url");
            module.exports = url;
        }, {
            debug: 8,
            parseuri: 37
        } ],
        7: [ function(require, module) {
            var slice = [].slice;
            module.exports = function(obj, fn) {
                if ("string" == typeof fn && (fn = obj[fn]), "function" != typeof fn) throw new Error("bind() requires a function");
                var args = [].slice.call(arguments, 2);
                return function() {
                    return fn.apply(obj, args.concat(slice.call(arguments)));
                };
            };
        }, {} ],
        8: [ function(require, module) {
            function debug(name) {
                return debug.enabled(name) ? function(fmt) {
                    fmt = coerce(fmt);
                    var curr = new Date(), ms = curr - (debug[name] || curr);
                    debug[name] = curr, fmt = name + " " + fmt + " +" + debug.humanize(ms), window.console && console.log && Function.prototype.apply.call(console.log, console, arguments);
                } : function() {};
            }
            function coerce(val) {
                return val instanceof Error ? val.stack || val.message : val;
            }
            module.exports = debug, debug.names = [], debug.skips = [], debug.enable = function(name) {
                try {
                    localStorage.debug = name;
                } catch (e) {}
                for (var split = (name || "").split(/[\s,]+/), len = split.length, i = 0; len > i; i++) name = split[i].replace("*", ".*?"), 
                "-" === name[0] ? debug.skips.push(new RegExp("^" + name.substr(1) + "$")) : debug.names.push(new RegExp("^" + name + "$"));
            }, debug.disable = function() {
                debug.enable("");
            }, debug.humanize = function(ms) {
                var sec = 1e3, min = 6e4, hour = 60 * min;
                return ms >= hour ? (ms / hour).toFixed(1) + "h" : ms >= min ? (ms / min).toFixed(1) + "m" : ms >= sec ? (ms / sec | 0) + "s" : ms + "ms";
            }, debug.enabled = function(name) {
                for (var i = 0, len = debug.skips.length; len > i; i++) if (debug.skips[i].test(name)) return !1;
                for (var i = 0, len = debug.names.length; len > i; i++) if (debug.names[i].test(name)) return !0;
                return !1;
            };
            try {
                window.localStorage && debug.enable(localStorage.debug);
            } catch (e) {}
        }, {} ],
        9: [ function(require, module) {
            function Emitter(obj) {
                return obj ? mixin(obj) : void 0;
            }
            function mixin(obj) {
                for (var key in Emitter.prototype) obj[key] = Emitter.prototype[key];
                return obj;
            }
            var index = require("indexof");
            module.exports = Emitter, Emitter.prototype.on = function(event, fn) {
                return this._callbacks = this._callbacks || {}, (this._callbacks[event] = this._callbacks[event] || []).push(fn), 
                this;
            }, Emitter.prototype.once = function(event, fn) {
                function on() {
                    self.off(event, on), fn.apply(this, arguments);
                }
                var self = this;
                return this._callbacks = this._callbacks || {}, fn._off = on, this.on(event, on), 
                this;
            }, Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = function(event, fn) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
                this;
                var callbacks = this._callbacks[event];
                if (!callbacks) return this;
                if (1 == arguments.length) return delete this._callbacks[event], this;
                var i = index(callbacks, fn._off || fn);
                return ~i && callbacks.splice(i, 1), this;
            }, Emitter.prototype.emit = function(event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1), callbacks = this._callbacks[event];
                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; len > i; ++i) callbacks[i].apply(this, args);
                }
                return this;
            }, Emitter.prototype.listeners = function(event) {
                return this._callbacks = this._callbacks || {}, this._callbacks[event] || [];
            }, Emitter.prototype.hasListeners = function(event) {
                return !!this.listeners(event).length;
            };
        }, {
            indexof: 35
        } ],
        10: [ function(require, module) {
            module.exports = require("./lib/");
        }, {
            "./lib/": 11
        } ],
        11: [ function(require, module) {
            module.exports = require("./socket"), module.exports.parser = require("engine.io-parser");
        }, {
            "./socket": 12,
            "engine.io-parser": 20
        } ],
        12: [ function(require, module) {
            function Socket(uri, opts) {
                if (!(this instanceof Socket)) return new Socket(uri, opts);
                if (opts = opts || {}, uri && "object" == typeof uri && (opts = uri, uri = null), 
                uri && (uri = parseuri(uri), opts.host = uri.host, opts.secure = "https" == uri.protocol || "wss" == uri.protocol, 
                opts.port = uri.port, uri.query && (opts.query = uri.query)), this.secure = null != opts.secure ? opts.secure : global.location && "https:" == location.protocol, 
                opts.host) {
                    var pieces = opts.host.split(":");
                    opts.hostname = pieces.shift(), pieces.length && (opts.port = pieces.pop());
                }
                this.agent = opts.agent || !1, this.hostname = opts.hostname || (global.location ? location.hostname : "localhost"), 
                this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80), 
                this.query = opts.query || {}, "string" == typeof this.query && (this.query = parseqs.decode(this.query)), 
                this.upgrade = !1 !== opts.upgrade, this.path = (opts.path || "/engine.io").replace(/\/$/, "") + "/", 
                this.forceJSONP = !!opts.forceJSONP, this.forceBase64 = !!opts.forceBase64, this.timestampParam = opts.timestampParam || "t", 
                this.timestampRequests = opts.timestampRequests, this.transports = opts.transports || [ "polling", "websocket" ], 
                this.readyState = "", this.writeBuffer = [], this.callbackBuffer = [], this.policyPort = opts.policyPort || 843, 
                this.rememberUpgrade = opts.rememberUpgrade || !1, this.open(), this.binaryType = null, 
                this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
            }
            function clone(obj) {
                var o = {};
                for (var i in obj) obj.hasOwnProperty(i) && (o[i] = obj[i]);
                return o;
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, transports = require("./transports"), Emitter = require("emitter"), debug = require("debug")("engine.io-client:socket"), index = require("indexof"), parser = require("engine.io-parser"), parseuri = require("parseuri"), parsejson = require("parsejson"), parseqs = require("parseqs");
            module.exports = Socket, Socket.priorWebsocketSuccess = !1, Emitter(Socket.prototype), 
            Socket.protocol = parser.protocol, Socket.Socket = Socket, Socket.Transport = require("./transport"), 
            Socket.transports = require("./transports"), Socket.parser = require("engine.io-parser"), 
            Socket.prototype.createTransport = function(name) {
                debug('creating transport "%s"', name);
                var query = clone(this.query);
                query.EIO = parser.protocol, query.transport = name, this.id && (query.sid = this.id);
                var transport = new transports[name]({
                    agent: this.agent,
                    hostname: this.hostname,
                    port: this.port,
                    secure: this.secure,
                    path: this.path,
                    query: query,
                    forceJSONP: this.forceJSONP,
                    forceBase64: this.forceBase64,
                    timestampRequests: this.timestampRequests,
                    timestampParam: this.timestampParam,
                    policyPort: this.policyPort,
                    socket: this
                });
                return transport;
            }, Socket.prototype.open = function() {
                var transport;
                transport = this.rememberUpgrade && Socket.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket") ? "websocket" : this.transports[0], 
                this.readyState = "opening";
                var transport = this.createTransport(transport);
                transport.open(), this.setTransport(transport);
            }, Socket.prototype.setTransport = function(transport) {
                debug("setting transport %s", transport.name);
                var self = this;
                this.transport && (debug("clearing existing transport %s", this.transport.name), 
                this.transport.removeAllListeners()), this.transport = transport, transport.on("drain", function() {
                    self.onDrain();
                }).on("packet", function(packet) {
                    self.onPacket(packet);
                }).on("error", function(e) {
                    self.onError(e);
                }).on("close", function() {
                    self.onClose("transport close");
                });
            }, Socket.prototype.probe = function(name) {
                function onTransportOpen() {
                    if (self.onlyBinaryUpgrades) {
                        var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
                        failed = failed || upgradeLosesBinary;
                    }
                    failed || (debug('probe transport "%s" opened', name), transport.send([ {
                        type: "ping",
                        data: "probe"
                    } ]), transport.once("packet", function(msg) {
                        if (!failed) if ("pong" == msg.type && "probe" == msg.data) debug('probe transport "%s" pong', name), 
                        self.upgrading = !0, self.emit("upgrading", transport), Socket.priorWebsocketSuccess = "websocket" == transport.name, 
                        debug('pausing current transport "%s"', self.transport.name), self.transport.pause(function() {
                            failed || "closed" != self.readyState && "closing" != self.readyState && (debug("changing transport and sending upgrade packet"), 
                            cleanup(), self.setTransport(transport), transport.send([ {
                                type: "upgrade"
                            } ]), self.emit("upgrade", transport), transport = null, self.upgrading = !1, self.flush());
                        }); else {
                            debug('probe transport "%s" failed', name);
                            var err = new Error("probe error");
                            err.transport = transport.name, self.emit("upgradeError", err);
                        }
                    }));
                }
                function freezeTransport() {
                    failed || (failed = !0, cleanup(), transport.close(), transport = null);
                }
                function onerror(err) {
                    var error = new Error("probe error: " + err);
                    error.transport = transport.name, freezeTransport(), debug('probe transport "%s" failed because of error: %s', name, err), 
                    self.emit("upgradeError", error);
                }
                function onTransportClose() {
                    onerror("transport closed");
                }
                function onclose() {
                    onerror("socket closed");
                }
                function onupgrade(to) {
                    transport && to.name != transport.name && (debug('"%s" works - aborting "%s"', to.name, transport.name), 
                    freezeTransport());
                }
                function cleanup() {
                    transport.removeListener("open", onTransportOpen), transport.removeListener("error", onerror), 
                    transport.removeListener("close", onTransportClose), self.removeListener("close", onclose), 
                    self.removeListener("upgrading", onupgrade);
                }
                debug('probing transport "%s"', name);
                var transport = this.createTransport(name, {
                    probe: 1
                }), failed = !1, self = this;
                Socket.priorWebsocketSuccess = !1, transport.once("open", onTransportOpen), transport.once("error", onerror), 
                transport.once("close", onTransportClose), this.once("close", onclose), this.once("upgrading", onupgrade), 
                transport.open();
            }, Socket.prototype.onOpen = function() {
                if (debug("socket open"), this.readyState = "open", Socket.priorWebsocketSuccess = "websocket" == this.transport.name, 
                this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                    debug("starting upgrade probes");
                    for (var i = 0, l = this.upgrades.length; l > i; i++) this.probe(this.upgrades[i]);
                }
            }, Socket.prototype.onPacket = function(packet) {
                if ("opening" == this.readyState || "open" == this.readyState) switch (debug('socket receive: type "%s", data "%s"', packet.type, packet.data), 
                this.emit("packet", packet), this.emit("heartbeat"), packet.type) {
                  case "open":
                    this.onHandshake(parsejson(packet.data));
                    break;

                  case "pong":
                    this.setPing();
                    break;

                  case "error":
                    var err = new Error("server error");
                    err.code = packet.data, this.emit("error", err);
                    break;

                  case "message":
                    this.emit("data", packet.data), this.emit("message", packet.data);
                } else debug('packet received with socket readyState "%s"', this.readyState);
            }, Socket.prototype.onHandshake = function(data) {
                this.emit("handshake", data), this.id = data.sid, this.transport.query.sid = data.sid, 
                this.upgrades = this.filterUpgrades(data.upgrades), this.pingInterval = data.pingInterval, 
                this.pingTimeout = data.pingTimeout, this.onOpen(), "closed" != this.readyState && (this.setPing(), 
                this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
            }, Socket.prototype.onHeartbeat = function(timeout) {
                clearTimeout(this.pingTimeoutTimer);
                var self = this;
                self.pingTimeoutTimer = setTimeout(function() {
                    "closed" != self.readyState && self.onClose("ping timeout");
                }, timeout || self.pingInterval + self.pingTimeout);
            }, Socket.prototype.setPing = function() {
                var self = this;
                clearTimeout(self.pingIntervalTimer), self.pingIntervalTimer = setTimeout(function() {
                    debug("writing ping packet - expecting pong within %sms", self.pingTimeout), self.ping(), 
                    self.onHeartbeat(self.pingTimeout);
                }, self.pingInterval);
            }, Socket.prototype.ping = function() {
                this.sendPacket("ping");
            }, Socket.prototype.onDrain = function() {
                for (var i = 0; i < this.prevBufferLen; i++) this.callbackBuffer[i] && this.callbackBuffer[i]();
                this.writeBuffer.splice(0, this.prevBufferLen), this.callbackBuffer.splice(0, this.prevBufferLen), 
                this.prevBufferLen = 0, 0 == this.writeBuffer.length ? this.emit("drain") : this.flush();
            }, Socket.prototype.flush = function() {
                "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (debug("flushing %d packets in socket", this.writeBuffer.length), 
                this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, 
                this.emit("flush"));
            }, Socket.prototype.write = Socket.prototype.send = function(msg, fn) {
                return this.sendPacket("message", msg, fn), this;
            }, Socket.prototype.sendPacket = function(type, data, fn) {
                var packet = {
                    type: type,
                    data: data
                };
                this.emit("packetCreate", packet), this.writeBuffer.push(packet), this.callbackBuffer.push(fn), 
                this.flush();
            }, Socket.prototype.close = function() {
                return ("opening" == this.readyState || "open" == this.readyState) && (this.onClose("forced close"), 
                debug("socket closing - telling transport to close"), this.transport.close()), this;
            }, Socket.prototype.onError = function(err) {
                debug("socket error %j", err), Socket.priorWebsocketSuccess = !1, this.emit("error", err), 
                this.onClose("transport error", err);
            }, Socket.prototype.onClose = function(reason, desc) {
                if ("opening" == this.readyState || "open" == this.readyState) {
                    debug('socket close with reason: "%s"', reason);
                    var self = this;
                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), setTimeout(function() {
                        self.writeBuffer = [], self.callbackBuffer = [], self.prevBufferLen = 0;
                    }, 0), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), 
                    this.readyState = "closed", this.id = null, this.emit("close", reason, desc);
                }
            }, Socket.prototype.filterUpgrades = function(upgrades) {
                for (var filteredUpgrades = [], i = 0, j = upgrades.length; j > i; i++) ~index(this.transports, upgrades[i]) && filteredUpgrades.push(upgrades[i]);
                return filteredUpgrades;
            };
        }, {
            "./transport": 13,
            "./transports": 14,
            debug: 8,
            emitter: 9,
            "engine.io-parser": 20,
            indexof: 35,
            parsejson: 28,
            parseqs: 29,
            parseuri: 37
        } ],
        13: [ function(require, module) {
            function Transport(opts) {
                this.path = opts.path, this.hostname = opts.hostname, this.port = opts.port, this.secure = opts.secure, 
                this.query = opts.query, this.timestampParam = opts.timestampParam, this.timestampRequests = opts.timestampRequests, 
                this.readyState = "", this.agent = opts.agent || !1, this.socket = opts.socket;
            }
            var parser = require("engine.io-parser"), Emitter = require("emitter");
            module.exports = Transport, Emitter(Transport.prototype), Transport.timestamps = 0, 
            Transport.prototype.onError = function(msg, desc) {
                var err = new Error(msg);
                return err.type = "TransportError", err.description = desc, this.emit("error", err), 
                this;
            }, Transport.prototype.open = function() {
                return ("closed" == this.readyState || "" == this.readyState) && (this.readyState = "opening", 
                this.doOpen()), this;
            }, Transport.prototype.close = function() {
                return ("opening" == this.readyState || "open" == this.readyState) && (this.doClose(), 
                this.onClose()), this;
            }, Transport.prototype.send = function(packets) {
                if ("open" != this.readyState) throw new Error("Transport not open");
                this.write(packets);
            }, Transport.prototype.onOpen = function() {
                this.readyState = "open", this.writable = !0, this.emit("open");
            }, Transport.prototype.onData = function(data) {
                this.onPacket(parser.decodePacket(data, this.socket.binaryType));
            }, Transport.prototype.onPacket = function(packet) {
                this.emit("packet", packet);
            }, Transport.prototype.onClose = function() {
                this.readyState = "closed", this.emit("close");
            };
        }, {
            emitter: 9,
            "engine.io-parser": 20
        } ],
        14: [ function(require, module, exports) {
            function polling(opts) {
                var xhr, xd = !1;
                if (global.location) {
                    var isSSL = "https:" == location.protocol, port = location.port;
                    port || (port = isSSL ? 443 : 80), xd = opts.hostname != location.hostname || port != opts.port;
                }
                return opts.xdomain = xd, xhr = new XMLHttpRequest(opts), "open" in xhr && !opts.forceJSONP ? new XHR(opts) : new JSONP(opts);
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, XMLHttpRequest = require("xmlhttprequest"), XHR = require("./polling-xhr"), JSONP = require("./polling-jsonp"), websocket = require("./websocket");
            exports.polling = polling, exports.websocket = websocket;
        }, {
            "./polling-jsonp": 15,
            "./polling-xhr": 16,
            "./websocket": 18,
            xmlhttprequest: 19
        } ],
        15: [ function(require, module) {
            function empty() {}
            function JSONPPolling(opts) {
                Polling.call(this, opts), this.query = this.query || {}, callbacks || (global.___eio || (global.___eio = []), 
                callbacks = global.___eio), this.index = callbacks.length;
                var self = this;
                callbacks.push(function(msg) {
                    self.onData(msg);
                }), this.query.j = this.index, global.document && global.addEventListener && global.addEventListener("beforeunload", function() {
                    self.script && (self.script.onerror = empty);
                });
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, Polling = require("./polling"), inherit = require("inherits");
            module.exports = JSONPPolling;
            var callbacks, rNewline = /\n/g, rEscapedNewline = /\\n/g;
            inherit(JSONPPolling, Polling), JSONPPolling.prototype.supportsBinary = !1, JSONPPolling.prototype.doClose = function() {
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), 
                this.form && (this.form.parentNode.removeChild(this.form), this.form = null), Polling.prototype.doClose.call(this);
            }, JSONPPolling.prototype.doPoll = function() {
                var self = this, script = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), 
                script.async = !0, script.src = this.uri(), script.onerror = function(e) {
                    self.onError("jsonp poll error", e);
                };
                var insertAt = document.getElementsByTagName("script")[0];
                insertAt.parentNode.insertBefore(script, insertAt), this.script = script;
                var isUAgecko = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                isUAgecko && setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe), document.body.removeChild(iframe);
                }, 100);
            }, JSONPPolling.prototype.doWrite = function(data, fn) {
                function complete() {
                    initIframe(), fn();
                }
                function initIframe() {
                    if (self.iframe) try {
                        self.form.removeChild(self.iframe);
                    } catch (e) {
                        self.onError("jsonp polling iframe removal error", e);
                    }
                    try {
                        var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
                        iframe = document.createElement(html);
                    } catch (e) {
                        iframe = document.createElement("iframe"), iframe.name = self.iframeId, iframe.src = "javascript:0";
                    }
                    iframe.id = self.iframeId, self.form.appendChild(iframe), self.iframe = iframe;
                }
                var self = this;
                if (!this.form) {
                    var iframe, form = document.createElement("form"), area = document.createElement("textarea"), id = this.iframeId = "eio_iframe_" + this.index;
                    form.className = "socketio", form.style.position = "absolute", form.style.top = "-1000px", 
                    form.style.left = "-1000px", form.target = id, form.method = "POST", form.setAttribute("accept-charset", "utf-8"), 
                    area.name = "d", form.appendChild(area), document.body.appendChild(form), this.form = form, 
                    this.area = area;
                }
                this.form.action = this.uri(), initIframe(), data = data.replace(rEscapedNewline, "\\\n"), 
                this.area.value = data.replace(rNewline, "\\n");
                try {
                    this.form.submit();
                } catch (e) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                    "complete" == self.iframe.readyState && complete();
                } : this.iframe.onload = complete;
            };
        }, {
            "./polling": 17,
            inherits: 27
        } ],
        16: [ function(require, module) {
            function empty() {}
            function XHR(opts) {
                if (Polling.call(this, opts), global.location) {
                    var isSSL = "https:" == location.protocol, port = location.port;
                    port || (port = isSSL ? 443 : 80), this.xd = opts.hostname != global.location.hostname || port != opts.port;
                }
            }
            function Request(opts) {
                this.method = opts.method || "GET", this.uri = opts.uri, this.xd = !!opts.xd, this.async = !1 !== opts.async, 
                this.data = void 0 != opts.data ? opts.data : null, this.agent = opts.agent, this.create(opts.isBinary, opts.supportsBinary);
            }
            function unloadHandler() {
                for (var i in Request.requests) Request.requests.hasOwnProperty(i) && Request.requests[i].abort();
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, XMLHttpRequest = require("xmlhttprequest"), Polling = require("./polling"), Emitter = require("emitter"), debug = require("debug")("engine.io-client:polling-xhr"), inherit = require("inherits");
            module.exports = XHR, module.exports.Request = Request, inherit(XHR, Polling), XHR.prototype.supportsBinary = !0, 
            XHR.prototype.request = function(opts) {
                return opts = opts || {}, opts.uri = this.uri(), opts.xd = this.xd, opts.agent = this.agent || !1, 
                opts.supportsBinary = this.supportsBinary, new Request(opts);
            }, XHR.prototype.doWrite = function(data, fn) {
                var isBinary = "string" != typeof data && void 0 !== data, req = this.request({
                    method: "POST",
                    data: data,
                    isBinary: isBinary
                }), self = this;
                req.on("success", fn), req.on("error", function(err) {
                    self.onError("xhr post error", err);
                }), this.sendXhr = req;
            }, XHR.prototype.doPoll = function() {
                debug("xhr poll");
                var req = this.request(), self = this;
                req.on("data", function(data) {
                    self.onData(data);
                }), req.on("error", function(err) {
                    self.onError("xhr poll error", err);
                }), this.pollXhr = req;
            }, Emitter(Request.prototype), Request.prototype.create = function(isBinary, supportsBinary) {
                var xhr = this.xhr = new XMLHttpRequest({
                    agent: this.agent,
                    xdomain: this.xd
                }), self = this;
                try {
                    if (debug("xhr open %s: %s", this.method, this.uri), xhr.open(this.method, this.uri, this.async), 
                    supportsBinary && (xhr.responseType = "arraybuffer"), "POST" == this.method) try {
                        isBinary ? xhr.setRequestHeader("Content-type", "application/octet-stream") : xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                    } catch (e) {}
                    "withCredentials" in xhr && (xhr.withCredentials = !0), xhr.onreadystatechange = function() {
                        var data;
                        try {
                            if (4 != xhr.readyState) return;
                            if (200 == xhr.status || 1223 == xhr.status) {
                                var contentType = xhr.getResponseHeader("Content-Type");
                                data = "application/octet-stream" === contentType ? xhr.response : supportsBinary ? "ok" : xhr.responseText;
                            } else setTimeout(function() {
                                self.onError(xhr.status);
                            }, 0);
                        } catch (e) {
                            self.onError(e);
                        }
                        null != data && self.onData(data);
                    }, debug("xhr data %s", this.data), xhr.send(this.data);
                } catch (e) {
                    return void setTimeout(function() {
                        self.onError(e);
                    }, 0);
                }
                global.document && (this.index = Request.requestsCount++, Request.requests[this.index] = this);
            }, Request.prototype.onSuccess = function() {
                this.emit("success"), this.cleanup();
            }, Request.prototype.onData = function(data) {
                this.emit("data", data), this.onSuccess();
            }, Request.prototype.onError = function(err) {
                this.emit("error", err), this.cleanup();
            }, Request.prototype.cleanup = function() {
                if ("undefined" != typeof this.xhr && null !== this.xhr) {
                    this.xhr.onreadystatechange = empty;
                    try {
                        this.xhr.abort();
                    } catch (e) {}
                    global.document && delete Request.requests[this.index], this.xhr = null;
                }
            }, Request.prototype.abort = function() {
                this.cleanup();
            }, global.document && (Request.requestsCount = 0, Request.requests = {}, global.attachEvent ? global.attachEvent("onunload", unloadHandler) : global.addEventListener && global.addEventListener("beforeunload", unloadHandler));
        }, {
            "./polling": 17,
            debug: 8,
            emitter: 9,
            inherits: 27,
            xmlhttprequest: 19
        } ],
        17: [ function(require, module) {
            function Polling(opts) {
                var forceBase64 = opts && opts.forceBase64;
                (!hasXHR2 || forceBase64) && (this.supportsBinary = !1), Transport.call(this, opts);
            }
            var Transport = require("../transport"), parseqs = require("parseqs"), parser = require("engine.io-parser"), debug = require("debug")("engine.io-client:polling"), inherit = require("inherits");
            module.exports = Polling;
            var hasXHR2 = function() {
                var XMLHttpRequest = require("xmlhttprequest"), xhr = new XMLHttpRequest({
                    agent: this.agent,
                    xdomain: !1
                });
                return null != xhr.responseType;
            }();
            inherit(Polling, Transport), Polling.prototype.name = "polling", Polling.prototype.doOpen = function() {
                this.poll();
            }, Polling.prototype.pause = function(onPause) {
                function pause() {
                    debug("paused"), self.readyState = "paused", onPause();
                }
                var self = this;
                if (this.readyState = "pausing", this.polling || !this.writable) {
                    var total = 0;
                    this.polling && (debug("we are currently polling - waiting to pause"), total++, 
                    this.once("pollComplete", function() {
                        debug("pre-pause polling complete"), --total || pause();
                    })), this.writable || (debug("we are currently writing - waiting to pause"), total++, 
                    this.once("drain", function() {
                        debug("pre-pause writing complete"), --total || pause();
                    }));
                } else pause();
            }, Polling.prototype.poll = function() {
                debug("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
            }, Polling.prototype.onData = function(data) {
                var self = this;
                debug("polling got data %s", data);
                var callback = function(packet) {
                    return "opening" == self.readyState && self.onOpen(), "close" == packet.type ? (self.onClose(), 
                    !1) : void self.onPacket(packet);
                };
                parser.decodePayload(data, this.socket.binaryType, callback), "closed" != this.readyState && (this.polling = !1, 
                this.emit("pollComplete"), "open" == this.readyState ? this.poll() : debug('ignoring poll - transport state "%s"', this.readyState));
            }, Polling.prototype.doClose = function() {
                function close() {
                    debug("writing close packet"), self.write([ {
                        type: "close"
                    } ]);
                }
                var self = this;
                "open" == this.readyState ? (debug("transport open - closing"), close()) : (debug("transport not open - deferring close"), 
                this.once("open", close));
            }, Polling.prototype.write = function(packets) {
                var self = this;
                this.writable = !1;
                var callbackfn = function() {
                    self.writable = !0, self.emit("drain");
                }, self = this;
                parser.encodePayload(packets, this.supportsBinary, function(data) {
                    self.doWrite(data, callbackfn);
                });
            }, Polling.prototype.uri = function() {
                var query = this.query || {}, schema = this.secure ? "https" : "http", port = "";
                return !1 !== this.timestampRequests && (query[this.timestampParam] = +new Date() + "-" + Transport.timestamps++), 
                this.supportsBinary || query.sid || (query.b64 = 1), query = parseqs.encode(query), 
                this.port && ("https" == schema && 443 != this.port || "http" == schema && 80 != this.port) && (port = ":" + this.port), 
                query.length && (query = "?" + query), schema + "://" + this.hostname + port + this.path + query;
            };
        }, {
            "../transport": 13,
            debug: 8,
            "engine.io-parser": 20,
            inherits: 27,
            parseqs: 29,
            xmlhttprequest: 19
        } ],
        18: [ function(require, module) {
            function WS(opts) {
                var forceBase64 = opts && opts.forceBase64;
                forceBase64 && (this.supportsBinary = !1), Transport.call(this, opts);
            }
            var Transport = require("../transport"), parser = require("engine.io-parser"), parseqs = require("parseqs"), debug = require("debug")("engine.io-client:websocket"), inherit = require("inherits"), WebSocket = require("ws");
            module.exports = WS, inherit(WS, Transport), WS.prototype.name = "websocket", WS.prototype.supportsBinary = !0, 
            WS.prototype.doOpen = function() {
                if (this.check()) {
                    var uri = this.uri(), protocols = void 0, opts = {
                        agent: this.agent
                    };
                    this.ws = new WebSocket(uri, protocols, opts), void 0 === this.ws.binaryType && (this.supportsBinary = !1), 
                    this.ws.binaryType = "arraybuffer", this.addEventListeners();
                }
            }, WS.prototype.addEventListeners = function() {
                var self = this;
                this.ws.onopen = function() {
                    self.onOpen();
                }, this.ws.onclose = function() {
                    self.onClose();
                }, this.ws.onmessage = function(ev) {
                    self.onData(ev.data);
                }, this.ws.onerror = function(e) {
                    self.onError("websocket error", e);
                };
            }, "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (WS.prototype.onData = function(data) {
                var self = this;
                setTimeout(function() {
                    Transport.prototype.onData.call(self, data);
                }, 0);
            }), WS.prototype.write = function(packets) {
                function ondrain() {
                    self.writable = !0, self.emit("drain");
                }
                var self = this;
                this.writable = !1;
                for (var i = 0, l = packets.length; l > i; i++) parser.encodePacket(packets[i], this.supportsBinary, function(data) {
                    try {
                        self.ws.send(data);
                    } catch (e) {
                        debug("websocket closed before onclose event");
                    }
                });
                setTimeout(ondrain, 0);
            }, WS.prototype.onClose = function() {
                Transport.prototype.onClose.call(this);
            }, WS.prototype.doClose = function() {
                "undefined" != typeof this.ws && this.ws.close();
            }, WS.prototype.uri = function() {
                var query = this.query || {}, schema = this.secure ? "wss" : "ws", port = "";
                return this.port && ("wss" == schema && 443 != this.port || "ws" == schema && 80 != this.port) && (port = ":" + this.port), 
                this.timestampRequests && (query[this.timestampParam] = +new Date()), this.supportsBinary || (query.b64 = 1), 
                query = parseqs.encode(query), query.length && (query = "?" + query), schema + "://" + this.hostname + port + this.path + query;
            }, WS.prototype.check = function() {
                return !(!WebSocket || "__initialize" in WebSocket && this.name === WS.prototype.name);
            };
        }, {
            "../transport": 13,
            debug: 8,
            "engine.io-parser": 20,
            inherits: 27,
            parseqs: 29,
            ws: 30
        } ],
        19: [ function(require, module) {
            var hasCORS = require("has-cors");
            module.exports = function(opts) {
                var xdomain = opts.xdomain;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!xdomain || hasCORS)) return new XMLHttpRequest();
                } catch (e) {}
                if (!xdomain) try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            };
        }, {
            "has-cors": 33
        } ],
        20: [ function(require, module, exports) {
            function encodeArrayBuffer(packet, supportsBinary, callback) {
                if (!supportsBinary) return exports.encodeBase64Packet(packet, callback);
                var data = packet.data, contentArray = new Uint8Array(data), resultBuffer = new Uint8Array(1 + data.byteLength);
                resultBuffer[0] = packets[packet.type];
                for (var i = 0; i < contentArray.length; i++) resultBuffer[i + 1] = contentArray[i];
                return callback(resultBuffer.buffer);
            }
            function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
                if (!supportsBinary) return exports.encodeBase64Packet(packet, callback);
                var fr = new FileReader();
                return fr.onload = function() {
                    packet.data = fr.result, exports.encodePacket(packet, supportsBinary, callback);
                }, fr.readAsArrayBuffer(packet.data);
            }
            function encodeBlob(packet, supportsBinary, callback) {
                if (!supportsBinary) return exports.encodeBase64Packet(packet, callback);
                if (isAndroid) return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
                var length = new Uint8Array(1);
                length[0] = packets[packet.type];
                var blob = new Blob([ length.buffer, packet.data ]);
                return callback(blob);
            }
            function map(ary, each, done) {
                for (var result = new Array(ary.length), next = after(ary.length, done), eachWithIndex = function(i, el, cb) {
                    each(el, function(error, msg) {
                        result[i] = msg, cb(error, result);
                    });
                }, i = 0; i < ary.length; i++) eachWithIndex(i, ary[i], next);
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, keys = require("./keys"), sliceBuffer = require("arraybuffer.slice"), base64encoder = require("base64-arraybuffer"), after = require("after"), utf8 = require("utf8"), isAndroid = navigator.userAgent.match(/Android/i);
            exports.protocol = 2;
            var packets = exports.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            }, packetslist = keys(packets), err = {
                type: "error",
                data: "parser error"
            }, Blob = require("blob");
            exports.encodePacket = function(packet, supportsBinary, callback) {
                "function" == typeof supportsBinary && (callback = supportsBinary, supportsBinary = !1);
                var data = void 0 === packet.data ? void 0 : packet.data.buffer || packet.data;
                if (global.ArrayBuffer && data instanceof ArrayBuffer) return encodeArrayBuffer(packet, supportsBinary, callback);
                if (Blob && data instanceof global.Blob) return encodeBlob(packet, supportsBinary, callback);
                var encoded = packets[packet.type];
                return void 0 !== packet.data && (encoded += utf8.encode(String(packet.data))), 
                callback("" + encoded);
            }, exports.encodeBase64Packet = function(packet, callback) {
                var message = "b" + exports.packets[packet.type];
                if (Blob && packet.data instanceof Blob) {
                    var fr = new FileReader();
                    return fr.onload = function() {
                        var b64 = fr.result.split(",")[1];
                        callback(message + b64);
                    }, fr.readAsDataURL(packet.data);
                }
                var b64data;
                try {
                    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
                } catch (e) {
                    for (var typed = new Uint8Array(packet.data), basic = new Array(typed.length), i = 0; i < typed.length; i++) basic[i] = typed[i];
                    b64data = String.fromCharCode.apply(null, basic);
                }
                return message += global.btoa(b64data), callback(message);
            }, exports.decodePacket = function(data, binaryType) {
                if ("string" == typeof data || void 0 === data) {
                    if ("b" == data.charAt(0)) return exports.decodeBase64Packet(data.substr(1), binaryType);
                    data = utf8.decode(data);
                    var type = data.charAt(0);
                    return Number(type) == type && packetslist[type] ? data.length > 1 ? {
                        type: packetslist[type],
                        data: data.substring(1)
                    } : {
                        type: packetslist[type]
                    } : err;
                }
                var asArray = new Uint8Array(data), type = asArray[0], rest = sliceBuffer(data, 1);
                return Blob && "blob" === binaryType && (rest = new Blob([ rest ])), {
                    type: packetslist[type],
                    data: rest
                };
            }, exports.decodeBase64Packet = function(msg, binaryType) {
                var type = packetslist[msg.charAt(0)];
                if (!global.ArrayBuffer) return {
                    type: type,
                    data: {
                        base64: !0,
                        data: msg.substr(1)
                    }
                };
                var data = base64encoder.decode(msg.substr(1));
                return "blob" === binaryType && Blob && (data = new Blob([ data ])), {
                    type: type,
                    data: data
                };
            }, exports.encodePayload = function(packets, supportsBinary, callback) {
                function setLengthHeader(message) {
                    return message.length + ":" + message;
                }
                function encodeOne(packet, doneCallback) {
                    exports.encodePacket(packet, supportsBinary, function(message) {
                        doneCallback(null, setLengthHeader(message));
                    });
                }
                return "function" == typeof supportsBinary && (callback = supportsBinary, supportsBinary = null), 
                supportsBinary ? Blob && !isAndroid ? exports.encodePayloadAsBlob(packets, callback) : exports.encodePayloadAsArrayBuffer(packets, callback) : packets.length ? void map(packets, encodeOne, function(err, results) {
                    return callback(results.join(""));
                }) : callback("0:");
            }, exports.decodePayload = function(data, binaryType, callback) {
                if ("string" != typeof data) return exports.decodePayloadAsBinary(data, binaryType, callback);
                "function" == typeof binaryType && (callback = binaryType, binaryType = null);
                var packet;
                if ("" == data) return callback(err, 0, 1);
                for (var n, msg, length = "", i = 0, l = data.length; l > i; i++) {
                    var chr = data.charAt(i);
                    if (":" != chr) length += chr; else {
                        if ("" == length || length != (n = Number(length))) return callback(err, 0, 1);
                        if (msg = data.substr(i + 1, n), length != msg.length) return callback(err, 0, 1);
                        if (msg.length) {
                            if (packet = exports.decodePacket(msg, binaryType), err.type == packet.type && err.data == packet.data) return callback(err, 0, 1);
                            var ret = callback(packet, i + n, l);
                            if (!1 === ret) return;
                        }
                        i += n, length = "";
                    }
                }
                return "" != length ? callback(err, 0, 1) : void 0;
            }, exports.encodePayloadAsArrayBuffer = function(packets, callback) {
                function encodeOne(packet, doneCallback) {
                    exports.encodePacket(packet, !0, function(data) {
                        return doneCallback(null, data);
                    });
                }
                return packets.length ? void map(packets, encodeOne, function(err, encodedPackets) {
                    var totalLength = encodedPackets.reduce(function(acc, p) {
                        var len;
                        return len = "string" == typeof p ? p.length : p.byteLength, acc + len.toString().length + len + 2;
                    }, 0), resultArray = new Uint8Array(totalLength), bufferIndex = 0;
                    return encodedPackets.forEach(function(p) {
                        var isString = "string" == typeof p, ab = p;
                        if (isString) {
                            for (var view = new Uint8Array(p.length), i = 0; i < p.length; i++) view[i] = p.charCodeAt(i);
                            ab = view.buffer;
                        }
                        resultArray[bufferIndex++] = isString ? 0 : 1;
                        for (var lenStr = ab.byteLength.toString(), i = 0; i < lenStr.length; i++) resultArray[bufferIndex++] = parseInt(lenStr[i]);
                        resultArray[bufferIndex++] = 255;
                        for (var view = new Uint8Array(ab), i = 0; i < view.length; i++) resultArray[bufferIndex++] = view[i];
                    }), callback(resultArray.buffer);
                }) : callback(new ArrayBuffer(0));
            }, exports.encodePayloadAsBlob = function(packets, callback) {
                function encodeOne(packet, doneCallback) {
                    exports.encodePacket(packet, !0, function(encoded) {
                        var binaryIdentifier = new Uint8Array(1);
                        if (binaryIdentifier[0] = 1, "string" == typeof encoded) {
                            for (var view = new Uint8Array(encoded.length), i = 0; i < encoded.length; i++) view[i] = encoded.charCodeAt(i);
                            encoded = view.buffer, binaryIdentifier[0] = 0;
                        }
                        for (var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size, lenStr = len.toString(), lengthAry = new Uint8Array(lenStr.length + 1), i = 0; i < lenStr.length; i++) lengthAry[i] = parseInt(lenStr[i]);
                        if (lengthAry[lenStr.length] = 255, Blob) {
                            var blob = new Blob([ binaryIdentifier.buffer, lengthAry.buffer, encoded ]);
                            doneCallback(null, blob);
                        }
                    });
                }
                map(packets, encodeOne, function(err, results) {
                    return callback(new Blob(results));
                });
            }, exports.decodePayloadAsBinary = function(data, binaryType, callback) {
                "function" == typeof binaryType && (callback = binaryType, binaryType = null);
                for (var bufferTail = data, buffers = []; bufferTail.byteLength > 0; ) {
                    for (var tailArray = new Uint8Array(bufferTail), isString = 0 === tailArray[0], msgLength = "", i = 1; 255 != tailArray[i]; i++) msgLength += tailArray[i];
                    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length), msgLength = parseInt(msgLength);
                    var msg = sliceBuffer(bufferTail, 0, msgLength);
                    if (isString) try {
                        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
                    } catch (e) {
                        var typed = new Uint8Array(msg);
                        msg = "";
                        for (var i = 0; i < typed.length; i++) msg += String.fromCharCode(typed[i]);
                    }
                    buffers.push(msg), bufferTail = sliceBuffer(bufferTail, msgLength);
                }
                var total = buffers.length;
                buffers.forEach(function(buffer, i) {
                    callback(exports.decodePacket(buffer, binaryType), i, total);
                });
            };
        }, {
            "./keys": 21,
            after: 22,
            "arraybuffer.slice": 23,
            "base64-arraybuffer": 24,
            blob: 25,
            utf8: 26
        } ],
        21: [ function(require, module) {
            module.exports = Object.keys || function(obj) {
                var arr = [], has = Object.prototype.hasOwnProperty;
                for (var i in obj) has.call(obj, i) && arr.push(i);
                return arr;
            };
        }, {} ],
        22: [ function(require, module) {
            function after(count, callback, err_cb) {
                function proxy(err, result) {
                    if (proxy.count <= 0) throw new Error("after called too many times");
                    --proxy.count, err ? (bail = !0, callback(err), callback = err_cb) : 0 !== proxy.count || bail || callback(null, result);
                }
                var bail = !1;
                return err_cb = err_cb || noop, proxy.count = count, 0 === count ? callback() : proxy;
            }
            function noop() {}
            module.exports = after;
        }, {} ],
        23: [ function(require, module) {
            module.exports = function(arraybuffer, start, end) {
                var bytes = arraybuffer.byteLength;
                if (start = start || 0, end = end || bytes, arraybuffer.slice) return arraybuffer.slice(start, end);
                if (0 > start && (start += bytes), 0 > end && (end += bytes), end > bytes && (end = bytes), 
                start >= bytes || start >= end || 0 === bytes) return new ArrayBuffer(0);
                for (var abv = new Uint8Array(arraybuffer), result = new Uint8Array(end - start), i = start, ii = 0; end > i; i++, 
                ii++) result[ii] = abv[i];
                return result.buffer;
            };
        }, {} ],
        24: [ function(require, module, exports) {
            !function(chars) {
                "use strict";
                exports.encode = function(arraybuffer) {
                    var i, bytes = new Uint8Array(arraybuffer), len = bytes.length, base64 = "";
                    for (i = 0; len > i; i += 3) base64 += chars[bytes[i] >> 2], base64 += chars[(3 & bytes[i]) << 4 | bytes[i + 1] >> 4], 
                    base64 += chars[(15 & bytes[i + 1]) << 2 | bytes[i + 2] >> 6], base64 += chars[63 & bytes[i + 2]];
                    return len % 3 === 2 ? base64 = base64.substring(0, base64.length - 1) + "=" : len % 3 === 1 && (base64 = base64.substring(0, base64.length - 2) + "=="), 
                    base64;
                }, exports.decode = function(base64) {
                    var i, encoded1, encoded2, encoded3, encoded4, bufferLength = .75 * base64.length, len = base64.length, p = 0;
                    "=" === base64[base64.length - 1] && (bufferLength--, "=" === base64[base64.length - 2] && bufferLength--);
                    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
                    for (i = 0; len > i; i += 4) encoded1 = chars.indexOf(base64[i]), encoded2 = chars.indexOf(base64[i + 1]), 
                    encoded3 = chars.indexOf(base64[i + 2]), encoded4 = chars.indexOf(base64[i + 3]), 
                    bytes[p++] = encoded1 << 2 | encoded2 >> 4, bytes[p++] = (15 & encoded2) << 4 | encoded3 >> 2, 
                    bytes[p++] = (3 & encoded3) << 6 | 63 & encoded4;
                    return arraybuffer;
                };
            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
        }, {} ],
        25: [ function(require, module) {
            function BlobBuilderConstructor(ary, options) {
                options = options || {};
                for (var bb = new BlobBuilder(), i = 0; i < ary.length; i++) bb.append(ary[i]);
                return options.type ? bb.getBlob(options.type) : bb.getBlob();
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder, blobSupported = function() {
                try {
                    var b = new Blob([ "hi" ]);
                    return 2 == b.size;
                } catch (e) {
                    return !1;
                }
            }(), blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
            module.exports = function() {
                return blobSupported ? global.Blob : blobBuilderSupported ? BlobBuilderConstructor : void 0;
            }();
        }, {} ],
        26: [ function(require, module, exports) {
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
            !function(root) {
                function ucs2decode(string) {
                    for (var value, extra, output = [], counter = 0, length = string.length; length > counter; ) value = string.charCodeAt(counter++), 
                    value >= 55296 && 56319 >= value && length > counter ? (extra = string.charCodeAt(counter++), 
                    56320 == (64512 & extra) ? output.push(((1023 & value) << 10) + (1023 & extra) + 65536) : (output.push(value), 
                    counter--)) : output.push(value);
                    return output;
                }
                function ucs2encode(array) {
                    for (var value, length = array.length, index = -1, output = ""; ++index < length; ) value = array[index], 
                    value > 65535 && (value -= 65536, output += stringFromCharCode(value >>> 10 & 1023 | 55296), 
                    value = 56320 | 1023 & value), output += stringFromCharCode(value);
                    return output;
                }
                function createByte(codePoint, shift) {
                    return stringFromCharCode(codePoint >> shift & 63 | 128);
                }
                function encodeCodePoint(codePoint) {
                    if (0 == (4294967168 & codePoint)) return stringFromCharCode(codePoint);
                    var symbol = "";
                    return 0 == (4294965248 & codePoint) ? symbol = stringFromCharCode(codePoint >> 6 & 31 | 192) : 0 == (4294901760 & codePoint) ? (symbol = stringFromCharCode(codePoint >> 12 & 15 | 224), 
                    symbol += createByte(codePoint, 6)) : 0 == (4292870144 & codePoint) && (symbol = stringFromCharCode(codePoint >> 18 & 7 | 240), 
                    symbol += createByte(codePoint, 12), symbol += createByte(codePoint, 6)), symbol += stringFromCharCode(63 & codePoint | 128);
                }
                function utf8encode(string) {
                    for (var codePoint, codePoints = ucs2decode(string), length = codePoints.length, index = -1, byteString = ""; ++index < length; ) codePoint = codePoints[index], 
                    byteString += encodeCodePoint(codePoint);
                    return byteString;
                }
                function readContinuationByte() {
                    if (byteIndex >= byteCount) throw Error("Invalid byte index");
                    var continuationByte = 255 & byteArray[byteIndex];
                    if (byteIndex++, 128 == (192 & continuationByte)) return 63 & continuationByte;
                    throw Error("Invalid continuation byte");
                }
                function decodeSymbol() {
                    var byte1, byte2, byte3, byte4, codePoint;
                    if (byteIndex > byteCount) throw Error("Invalid byte index");
                    if (byteIndex == byteCount) return !1;
                    if (byte1 = 255 & byteArray[byteIndex], byteIndex++, 0 == (128 & byte1)) return byte1;
                    if (192 == (224 & byte1)) {
                        var byte2 = readContinuationByte();
                        if (codePoint = (31 & byte1) << 6 | byte2, codePoint >= 128) return codePoint;
                        throw Error("Invalid continuation byte");
                    }
                    if (224 == (240 & byte1)) {
                        if (byte2 = readContinuationByte(), byte3 = readContinuationByte(), codePoint = (15 & byte1) << 12 | byte2 << 6 | byte3, 
                        codePoint >= 2048) return codePoint;
                        throw Error("Invalid continuation byte");
                    }
                    if (240 == (248 & byte1) && (byte2 = readContinuationByte(), byte3 = readContinuationByte(), 
                    byte4 = readContinuationByte(), codePoint = (15 & byte1) << 18 | byte2 << 12 | byte3 << 6 | byte4, 
                    codePoint >= 65536 && 1114111 >= codePoint)) return codePoint;
                    throw Error("Invalid UTF-8 detected");
                }
                function utf8decode(byteString) {
                    byteArray = ucs2decode(byteString), byteCount = byteArray.length, byteIndex = 0;
                    for (var tmp, codePoints = []; (tmp = decodeSymbol()) !== !1; ) codePoints.push(tmp);
                    return ucs2encode(codePoints);
                }
                var freeExports = "object" == typeof exports && exports, freeModule = "object" == typeof module && module && module.exports == freeExports && module, freeGlobal = "object" == typeof global && global;
                (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) && (root = freeGlobal);
                var byteArray, byteCount, byteIndex, stringFromCharCode = String.fromCharCode, utf8 = {
                    version: "2.0.0",
                    encode: utf8encode,
                    decode: utf8decode
                };
                if ("function" == typeof define && "object" == typeof define.amd && define.amd) define(function() {
                    return utf8;
                }); else if (freeExports && !freeExports.nodeType) if (freeModule) freeModule.exports = utf8; else {
                    var object = {}, hasOwnProperty = object.hasOwnProperty;
                    for (var key in utf8) hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
                } else root.utf8 = utf8;
            }(this);
        }, {} ],
        27: [ function(require, module) {
            module.exports = "function" == typeof Object.create ? function(ctor, superCtor) {
                ctor.super_ = superCtor, ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
            } : function(ctor, superCtor) {
                ctor.super_ = superCtor;
                var TempCtor = function() {};
                TempCtor.prototype = superCtor.prototype, ctor.prototype = new TempCtor(), ctor.prototype.constructor = ctor;
            };
        }, {} ],
        28: [ function(require, module) {
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, rvalidchars = /^[\],:{}\s]*$/, rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rtrimLeft = /^\s+/, rtrimRight = /\s+$/;
            module.exports = function(data) {
                return "string" == typeof data && data ? (data = data.replace(rtrimLeft, "").replace(rtrimRight, ""), 
                global.JSON && JSON.parse ? JSON.parse(data) : rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, "")) ? new Function("return " + data)() : void 0) : null;
            };
        }, {} ],
        29: [ function(require, module, exports) {
            exports.encode = function(obj) {
                var str = "";
                for (var i in obj) obj.hasOwnProperty(i) && (str.length && (str += "&"), str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
                return str;
            }, exports.decode = function(qs) {
                for (var qry = {}, pairs = qs.split("&"), i = 0, l = pairs.length; l > i; i++) {
                    var pair = pairs[i].split("=");
                    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                }
                return qry;
            };
        }, {} ],
        30: [ function(require, module) {
            function ws(uri, protocols) {
                var instance;
                return instance = protocols ? new WebSocket(uri, protocols) : new WebSocket(uri);
            }
            var global = function() {
                return this;
            }(), WebSocket = global.WebSocket || global.MozWebSocket;
            module.exports = WebSocket ? ws : null, WebSocket && (ws.prototype = WebSocket.prototype);
        }, {} ],
        31: [ function(require, module) {
            function hasBinary(data) {
                function recursiveCheckForBinary(obj) {
                    if (!obj) return !1;
                    if (global.Buffer && Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) return !0;
                    if (isArray(obj)) {
                        for (var i = 0; i < obj.length; i++) if (recursiveCheckForBinary(obj[i])) return !0;
                    } else if (obj && "object" == typeof obj) {
                        obj.toJSON && (obj = obj.toJSON());
                        for (var key in obj) if (recursiveCheckForBinary(obj[key])) return !0;
                    }
                    return !1;
                }
                return recursiveCheckForBinary(data);
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, isArray = require("isarray");
            module.exports = hasBinary;
        }, {
            isarray: 32
        } ],
        32: [ function(require, module) {
            module.exports = Array.isArray || function(arr) {
                return "[object Array]" == Object.prototype.toString.call(arr);
            };
        }, {} ],
        33: [ function(require, module) {
            var global = require("global");
            try {
                module.exports = "XMLHttpRequest" in global && "withCredentials" in new global.XMLHttpRequest();
            } catch (err) {
                module.exports = !1;
            }
        }, {
            global: 34
        } ],
        34: [ function(require, module) {
            module.exports = function() {
                return this;
            }();
        }, {} ],
        35: [ function(require, module) {
            var indexOf = [].indexOf;
            module.exports = function(arr, obj) {
                if (indexOf) return arr.indexOf(obj);
                for (var i = 0; i < arr.length; ++i) if (arr[i] === obj) return i;
                return -1;
            };
        }, {} ],
        36: [ function(require, module, exports) {
            var has = Object.prototype.hasOwnProperty;
            exports.keys = Object.keys || function(obj) {
                var keys = [];
                for (var key in obj) has.call(obj, key) && keys.push(key);
                return keys;
            }, exports.values = function(obj) {
                var vals = [];
                for (var key in obj) has.call(obj, key) && vals.push(obj[key]);
                return vals;
            }, exports.merge = function(a, b) {
                for (var key in b) has.call(b, key) && (a[key] = b[key]);
                return a;
            }, exports.length = function(obj) {
                return exports.keys(obj).length;
            }, exports.isEmpty = function(obj) {
                return 0 == exports.length(obj);
            };
        }, {} ],
        37: [ function(require, module) {
            var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, parts = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
            module.exports = function(str) {
                for (var m = re.exec(str || ""), uri = {}, i = 14; i--; ) uri[parts[i]] = m[i] || "";
                return uri;
            };
        }, {} ],
        38: [ function(require, module, exports) {
            function isBuf(obj) {
                return global.Buffer && Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, isArray = require("isarray");
            exports.deconstructPacket = function(packet) {
                function deconstructBinPackRecursive(data) {
                    if (!data) return data;
                    if (global.Buffer && Buffer.isBuffer(data) || global.ArrayBuffer && data instanceof ArrayBuffer) {
                        var placeholder = {
                            _placeholder: !0,
                            num: buffers.length
                        };
                        return buffers.push(data), placeholder;
                    }
                    if (isArray(data)) {
                        for (var newData = new Array(data.length), i = 0; i < data.length; i++) newData[i] = deconstructBinPackRecursive(data[i]);
                        return newData;
                    }
                    if ("object" == typeof data && !(data instanceof Date)) {
                        var newData = {};
                        for (var key in data) newData[key] = deconstructBinPackRecursive(data[key]);
                        return newData;
                    }
                    return data;
                }
                var buffers = [], packetData = packet.data, pack = packet;
                return pack.data = deconstructBinPackRecursive(packetData), pack.attachments = buffers.length, 
                {
                    packet: pack,
                    buffers: buffers
                };
            }, exports.reconstructPacket = function(packet, buffers) {
                function reconstructBinPackRecursive(data) {
                    if (data && data._placeholder) {
                        var buf = buffers[data.num];
                        return buf;
                    }
                    if (isArray(data)) {
                        for (var i = 0; i < data.length; i++) data[i] = reconstructBinPackRecursive(data[i]);
                        return data;
                    }
                    if (data && "object" == typeof data) {
                        for (var key in data) data[key] = reconstructBinPackRecursive(data[key]);
                        return data;
                    }
                    return data;
                }
                return packet.data = reconstructBinPackRecursive(packet.data), packet.attachments = void 0, 
                packet;
            }, exports.removeBlobs = function(data, callback) {
                function removeBlobsRecursive(obj, curKey, containingObject) {
                    if (!obj) return obj;
                    if (global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                        pendingBlobs++;
                        var fileReader = new FileReader();
                        fileReader.onload = function() {
                            containingObject ? containingObject[curKey] = this.result : bloblessData = this.result, 
                            --pendingBlobs || callback(bloblessData);
                        }, fileReader.readAsArrayBuffer(obj);
                    }
                    if (isArray(obj)) for (var i = 0; i < obj.length; i++) removeBlobsRecursive(obj[i], i, obj); else if (obj && "object" == typeof obj && !isBuf(obj)) for (var key in obj) removeBlobsRecursive(obj[key], key, obj);
                }
                var pendingBlobs = 0, bloblessData = data;
                removeBlobsRecursive(bloblessData), pendingBlobs || callback(bloblessData);
            };
        }, {
            isarray: 40
        } ],
        39: [ function(require, module, exports) {
            function Encoder() {}
            function encodeAsString(obj) {
                var str = "", nsp = !1;
                return str += obj.type, (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) && (str += obj.attachments, 
                str += "-"), obj.nsp && "/" != obj.nsp && (nsp = !0, str += obj.nsp), null != obj.id && (nsp && (str += ",", 
                nsp = !1), str += obj.id), null != obj.data && (nsp && (str += ","), str += json.stringify(obj.data)), 
                debug("encoded %j as %s", obj, str), str;
            }
            function encodeAsBinary(obj, callback) {
                function writeEncoding(bloblessData) {
                    var deconstruction = binary.deconstructPacket(bloblessData), pack = encodeAsString(deconstruction.packet), buffers = deconstruction.buffers;
                    buffers.unshift(pack), callback(buffers);
                }
                binary.removeBlobs(obj, writeEncoding);
            }
            function Decoder() {
                this.reconstructor = null;
            }
            function decodeString(str) {
                var p = {}, i = 0;
                if (p.type = Number(str.charAt(0)), null == exports.types[p.type]) return error();
                if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
                    for (p.attachments = ""; "-" != str.charAt(++i); ) p.attachments += str.charAt(i);
                    p.attachments = Number(p.attachments);
                }
                if ("/" == str.charAt(i + 1)) for (p.nsp = ""; ++i; ) {
                    var c = str.charAt(i);
                    if ("," == c) break;
                    if (p.nsp += c, i + 1 == str.length) break;
                } else p.nsp = "/";
                var next = str.charAt(i + 1);
                if ("" != next && Number(next) == next) {
                    for (p.id = ""; ++i; ) {
                        var c = str.charAt(i);
                        if (null == c || Number(c) != c) {
                            --i;
                            break;
                        }
                        if (p.id += str.charAt(i), i + 1 == str.length) break;
                    }
                    p.id = Number(p.id);
                }
                if (str.charAt(++i)) try {
                    p.data = json.parse(str.substr(i));
                } catch (e) {
                    return error();
                }
                return debug("decoded %s as %j", str, p), p;
            }
            function BinaryReconstructor(packet) {
                this.reconPack = packet, this.buffers = [];
            }
            function error() {
                return {
                    type: exports.ERROR,
                    data: "parser error"
                };
            }
            var global = "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, debug = require("debug")("socket.io-parser"), json = require("json3"), Emitter = (require("isarray"), 
            require("emitter")), binary = require("./binary");
            exports.protocol = 3, exports.types = [ "CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR" ], 
            exports.CONNECT = 0, exports.DISCONNECT = 1, exports.EVENT = 2, exports.ACK = 3, 
            exports.ERROR = 4, exports.BINARY_EVENT = 5, exports.BINARY_ACK = 6, exports.Encoder = Encoder, 
            Encoder.prototype.encode = function(obj, callback) {
                if (debug("encoding packet %j", obj), exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) encodeAsBinary(obj, callback); else {
                    var encoding = encodeAsString(obj);
                    callback([ encoding ]);
                }
            }, exports.Decoder = Decoder, Emitter(Decoder.prototype), Decoder.prototype.add = function(obj) {
                var packet;
                if ("string" == typeof obj) packet = decodeString(obj), exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type ? (this.reconstructor = new BinaryReconstructor(packet), 
                0 == this.reconstructor.reconPack.attachments && this.emit("decoded", packet)) : this.emit("decoded", packet); else {
                    if (!(global.Buffer && Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || obj.base64)) throw new Error("Unknown type: " + obj);
                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                    packet = this.reconstructor.takeBinaryData(obj), packet && (this.reconstructor = null, 
                    this.emit("decoded", packet));
                }
            }, Decoder.prototype.destroy = function() {
                this.reconstructor && this.reconstructor.finishedReconstruction();
            }, BinaryReconstructor.prototype.takeBinaryData = function(binData) {
                if (this.buffers.push(binData), this.buffers.length == this.reconPack.attachments) {
                    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), packet;
                }
                return null;
            }, BinaryReconstructor.prototype.finishedReconstruction = function() {
                this.reconPack = null, this.buffers = [];
            };
        }, {
            "./binary": 38,
            debug: 8,
            emitter: 9,
            isarray: 40,
            json3: 41
        } ],
        40: [ function(require, module) {
            module.exports = require(32);
        }, {} ],
        41: [ function(require, module, exports) {
            !function(window) {
                function has(name) {
                    if (has[name] !== undef) return has[name];
                    var isSupported;
                    if ("bug-string-char-index" == name) isSupported = "a" != "a"[0]; else if ("json" == name) isSupported = has("json-stringify") && has("json-parse"); else {
                        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == name) {
                            var stringify = JSON3.stringify, stringifySupported = "function" == typeof stringify && isExtended;
                            if (stringifySupported) {
                                (value = function() {
                                    return 1;
                                }).toJSON = value;
                                try {
                                    stringifySupported = "0" === stringify(0) && "0" === stringify(new Number()) && '""' == stringify(new String()) && stringify(getClass) === undef && stringify(undef) === undef && stringify() === undef && "1" === stringify(value) && "[1]" == stringify([ value ]) && "[null]" == stringify([ undef ]) && "null" == stringify(null) && "[null,null,null]" == stringify([ undef, getClass, null ]) && stringify({
                                        a: [ value, !0, !1, null, "\x00\b\n\f\r	" ]
                                    }) == serialized && "1" === stringify(null, value) && "[\n 1,\n 2\n]" == stringify([ 1, 2 ], null, 1) && '"-271821-04-20T00:00:00.000Z"' == stringify(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == stringify(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == stringify(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == stringify(new Date(-1));
                                } catch (exception) {
                                    stringifySupported = !1;
                                }
                            }
                            isSupported = stringifySupported;
                        }
                        if ("json-parse" == name) {
                            var parse = JSON3.parse;
                            if ("function" == typeof parse) try {
                                if (0 === parse("0") && !parse(!1)) {
                                    value = parse(serialized);
                                    var parseSupported = 5 == value.a.length && 1 === value.a[0];
                                    if (parseSupported) {
                                        try {
                                            parseSupported = !parse('"	"');
                                        } catch (exception) {}
                                        if (parseSupported) try {
                                            parseSupported = 1 !== parse("01");
                                        } catch (exception) {}
                                        if (parseSupported) try {
                                            parseSupported = 1 !== parse("1.");
                                        } catch (exception) {}
                                    }
                                }
                            } catch (exception) {
                                parseSupported = !1;
                            }
                            isSupported = parseSupported;
                        }
                    }
                    return has[name] = !!isSupported;
                }
                var isProperty, forEach, undef, getClass = {}.toString, isLoader = "function" == typeof define && define.amd, nativeJSON = "object" == typeof JSON && JSON, JSON3 = "object" == typeof exports && exports && !exports.nodeType && exports;
                JSON3 && nativeJSON ? (JSON3.stringify = nativeJSON.stringify, JSON3.parse = nativeJSON.parse) : JSON3 = window.JSON = nativeJSON || {};
                var isExtended = new Date(-0xc782b5b800cec);
                try {
                    isExtended = -109252 == isExtended.getUTCFullYear() && 0 === isExtended.getUTCMonth() && 1 === isExtended.getUTCDate() && 10 == isExtended.getUTCHours() && 37 == isExtended.getUTCMinutes() && 6 == isExtended.getUTCSeconds() && 708 == isExtended.getUTCMilliseconds();
                } catch (exception) {}
                if (!has("json")) {
                    var functionClass = "[object Function]", dateClass = "[object Date]", numberClass = "[object Number]", stringClass = "[object String]", arrayClass = "[object Array]", booleanClass = "[object Boolean]", charIndexBuggy = has("bug-string-char-index");
                    if (!isExtended) var floor = Math.floor, Months = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], getDay = function(year, month) {
                        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                    };
                    (isProperty = {}.hasOwnProperty) || (isProperty = function(property) {
                        var constructor, members = {};
                        return (members.__proto__ = null, members.__proto__ = {
                            toString: 1
                        }, members).toString != getClass ? isProperty = function(property) {
                            var original = this.__proto__, result = property in (this.__proto__ = null, this);
                            return this.__proto__ = original, result;
                        } : (constructor = members.constructor, isProperty = function(property) {
                            var parent = (this.constructor || constructor).prototype;
                            return property in this && !(property in parent && this[property] === parent[property]);
                        }), members = null, isProperty.call(this, property);
                    });
                    var PrimitiveTypes = {
                        "boolean": 1,
                        number: 1,
                        string: 1,
                        undefined: 1
                    }, isHostType = function(object, property) {
                        var type = typeof object[property];
                        return "object" == type ? !!object[property] : !PrimitiveTypes[type];
                    };
                    if (forEach = function(object, callback) {
                        var Properties, members, property, size = 0;
                        (Properties = function() {
                            this.valueOf = 0;
                        }).prototype.valueOf = 0, members = new Properties();
                        for (property in members) isProperty.call(members, property) && size++;
                        return Properties = members = null, size ? forEach = 2 == size ? function(object, callback) {
                            var property, members = {}, isFunction = getClass.call(object) == functionClass;
                            for (property in object) isFunction && "prototype" == property || isProperty.call(members, property) || !(members[property] = 1) || !isProperty.call(object, property) || callback(property);
                        } : function(object, callback) {
                            var property, isConstructor, isFunction = getClass.call(object) == functionClass;
                            for (property in object) isFunction && "prototype" == property || !isProperty.call(object, property) || (isConstructor = "constructor" === property) || callback(property);
                            (isConstructor || isProperty.call(object, property = "constructor")) && callback(property);
                        } : (members = [ "valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor" ], 
                        forEach = function(object, callback) {
                            var property, length, isFunction = getClass.call(object) == functionClass, hasProperty = !isFunction && "function" != typeof object.constructor && isHostType(object, "hasOwnProperty") ? object.hasOwnProperty : isProperty;
                            for (property in object) isFunction && "prototype" == property || !hasProperty.call(object, property) || callback(property);
                            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property)) ;
                        }), forEach(object, callback);
                    }, !has("json-stringify")) {
                        var Escapes = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        }, leadingZeroes = "000000", toPaddedString = function(width, value) {
                            return (leadingZeroes + (value || 0)).slice(-width);
                        }, unicodePrefix = "\\u00", quote = function(value) {
                            var symbols, result = '"', index = 0, length = value.length, isLarge = length > 10 && charIndexBuggy;
                            for (isLarge && (symbols = value.split("")); length > index; index++) {
                                var charCode = value.charCodeAt(index);
                                switch (charCode) {
                                  case 8:
                                  case 9:
                                  case 10:
                                  case 12:
                                  case 13:
                                  case 34:
                                  case 92:
                                    result += Escapes[charCode];
                                    break;

                                  default:
                                    if (32 > charCode) {
                                        result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                                        break;
                                    }
                                    result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
                                }
                            }
                            return result + '"';
                        }, serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                            var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                            try {
                                value = object[property];
                            } catch (exception) {}
                            if ("object" == typeof value && value) if (className = getClass.call(value), className != dateClass || isProperty.call(value, "toJSON")) "function" == typeof value.toJSON && (className != numberClass && className != stringClass && className != arrayClass || isProperty.call(value, "toJSON")) && (value = value.toJSON(property)); else if (value > -1 / 0 && 1 / 0 > value) {
                                if (getDay) {
                                    for (date = floor(value / 864e5), year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++) ;
                                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++) ;
                                    date = 1 + date - getDay(year, month), time = (value % 864e5 + 864e5) % 864e5, hours = floor(time / 36e5) % 24, 
                                    minutes = floor(time / 6e4) % 60, seconds = floor(time / 1e3) % 60, milliseconds = time % 1e3;
                                } else year = value.getUTCFullYear(), month = value.getUTCMonth(), date = value.getUTCDate(), 
                                hours = value.getUTCHours(), minutes = value.getUTCMinutes(), seconds = value.getUTCSeconds(), 
                                milliseconds = value.getUTCMilliseconds();
                                value = (0 >= year || year >= 1e4 ? (0 > year ? "-" : "+") + toPaddedString(6, 0 > year ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z";
                            } else value = null;
                            if (callback && (value = callback.call(object, property, value)), null === value) return "null";
                            if (className = getClass.call(value), className == booleanClass) return "" + value;
                            if (className == numberClass) return value > -1 / 0 && 1 / 0 > value ? "" + value : "null";
                            if (className == stringClass) return quote("" + value);
                            if ("object" == typeof value) {
                                for (length = stack.length; length--; ) if (stack[length] === value) throw TypeError();
                                if (stack.push(value), results = [], prefix = indentation, indentation += whitespace, 
                                className == arrayClass) {
                                    for (index = 0, length = value.length; length > index; index++) element = serialize(index, value, callback, properties, whitespace, indentation, stack), 
                                    results.push(element === undef ? "null" : element);
                                    result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
                                } else forEach(properties || value, function(property) {
                                    var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                    element !== undef && results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                                }), result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                                return stack.pop(), result;
                            }
                        };
                        JSON3.stringify = function(source, filter, width) {
                            var whitespace, callback, properties, className;
                            if ("function" == typeof filter || "object" == typeof filter && filter) if ((className = getClass.call(filter)) == functionClass) callback = filter; else if (className == arrayClass) {
                                properties = {};
                                for (var value, index = 0, length = filter.length; length > index; value = filter[index++], 
                                className = getClass.call(value), (className == stringClass || className == numberClass) && (properties[value] = 1)) ;
                            }
                            if (width) if ((className = getClass.call(width)) == numberClass) {
                                if ((width -= width % 1) > 0) for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ") ;
                            } else className == stringClass && (whitespace = width.length <= 10 ? width : width.slice(0, 10));
                            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
                        };
                    }
                    if (!has("json-parse")) {
                        var Index, Source, fromCharCode = String.fromCharCode, Unescapes = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        }, abort = function() {
                            throw Index = Source = null, SyntaxError();
                        }, lex = function() {
                            for (var value, begin, position, isSigned, charCode, source = Source, length = source.length; length > Index; ) switch (charCode = source.charCodeAt(Index)) {
                              case 9:
                              case 10:
                              case 13:
                              case 32:
                                Index++;
                                break;

                              case 123:
                              case 125:
                              case 91:
                              case 93:
                              case 58:
                              case 44:
                                return value = charIndexBuggy ? source.charAt(Index) : source[Index], Index++, value;

                              case 34:
                                for (value = "@", Index++; length > Index; ) if (charCode = source.charCodeAt(Index), 
                                32 > charCode) abort(); else if (92 == charCode) switch (charCode = source.charCodeAt(++Index)) {
                                  case 92:
                                  case 34:
                                  case 47:
                                  case 98:
                                  case 116:
                                  case 110:
                                  case 102:
                                  case 114:
                                    value += Unescapes[charCode], Index++;
                                    break;

                                  case 117:
                                    for (begin = ++Index, position = Index + 4; position > Index; Index++) charCode = source.charCodeAt(Index), 
                                    charCode >= 48 && 57 >= charCode || charCode >= 97 && 102 >= charCode || charCode >= 65 && 70 >= charCode || abort();
                                    value += fromCharCode("0x" + source.slice(begin, Index));
                                    break;

                                  default:
                                    abort();
                                } else {
                                    if (34 == charCode) break;
                                    for (charCode = source.charCodeAt(Index), begin = Index; charCode >= 32 && 92 != charCode && 34 != charCode; ) charCode = source.charCodeAt(++Index);
                                    value += source.slice(begin, Index);
                                }
                                if (34 == source.charCodeAt(Index)) return Index++, value;
                                abort();

                              default:
                                if (begin = Index, 45 == charCode && (isSigned = !0, charCode = source.charCodeAt(++Index)), 
                                charCode >= 48 && 57 >= charCode) {
                                    for (48 == charCode && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && 57 >= charCode) && abort(), 
                                    isSigned = !1; length > Index && (charCode = source.charCodeAt(Index), charCode >= 48 && 57 >= charCode); Index++) ;
                                    if (46 == source.charCodeAt(Index)) {
                                        for (position = ++Index; length > position && (charCode = source.charCodeAt(position), 
                                        charCode >= 48 && 57 >= charCode); position++) ;
                                        position == Index && abort(), Index = position;
                                    }
                                    if (charCode = source.charCodeAt(Index), 101 == charCode || 69 == charCode) {
                                        for (charCode = source.charCodeAt(++Index), (43 == charCode || 45 == charCode) && Index++, 
                                        position = Index; length > position && (charCode = source.charCodeAt(position), 
                                        charCode >= 48 && 57 >= charCode); position++) ;
                                        position == Index && abort(), Index = position;
                                    }
                                    return +source.slice(begin, Index);
                                }
                                if (isSigned && abort(), "true" == source.slice(Index, Index + 4)) return Index += 4, 
                                !0;
                                if ("false" == source.slice(Index, Index + 5)) return Index += 5, !1;
                                if ("null" == source.slice(Index, Index + 4)) return Index += 4, null;
                                abort();
                            }
                            return "$";
                        }, get = function(value) {
                            var results, hasMembers;
                            if ("$" == value && abort(), "string" == typeof value) {
                                if ("@" == (charIndexBuggy ? value.charAt(0) : value[0])) return value.slice(1);
                                if ("[" == value) {
                                    for (results = []; value = lex(), "]" != value; hasMembers || (hasMembers = !0)) hasMembers && ("," == value ? (value = lex(), 
                                    "]" == value && abort()) : abort()), "," == value && abort(), results.push(get(value));
                                    return results;
                                }
                                if ("{" == value) {
                                    for (results = {}; value = lex(), "}" != value; hasMembers || (hasMembers = !0)) hasMembers && ("," == value ? (value = lex(), 
                                    "}" == value && abort()) : abort()), ("," == value || "string" != typeof value || "@" != (charIndexBuggy ? value.charAt(0) : value[0]) || ":" != lex()) && abort(), 
                                    results[value.slice(1)] = get(lex());
                                    return results;
                                }
                                abort();
                            }
                            return value;
                        }, update = function(source, property, callback) {
                            var element = walk(source, property, callback);
                            element === undef ? delete source[property] : source[property] = element;
                        }, walk = function(source, property, callback) {
                            var length, value = source[property];
                            if ("object" == typeof value && value) if (getClass.call(value) == arrayClass) for (length = value.length; length--; ) update(value, length, callback); else forEach(value, function(property) {
                                update(value, property, callback);
                            });
                            return callback.call(source, property, value);
                        };
                        JSON3.parse = function(source, callback) {
                            var result, value;
                            return Index = 0, Source = "" + source, result = get(lex()), "$" != lex() && abort(), 
                            Index = Source = null, callback && getClass.call(callback) == functionClass ? walk((value = {}, 
                            value[""] = result, value), "", callback) : result;
                        };
                    }
                }
                isLoader && define(function() {
                    return JSON3;
                });
            }(this);
        }, {} ],
        42: [ function(require, module) {
            function toArray(list, index) {
                var array = [];
                index = index || 0;
                for (var i = index || 0; i < list.length; i++) array[i - index] = list[i];
                return array;
            }
            module.exports = toArray;
        }, {} ]
    }, {}, [ 1 ])(1);
}), function() {
    this.MooTools = {
        version: "1.4.5",
        build: "ab8ea8824dc3b24b6666867a2c4ed58ebb762cf0"
    };
    var typeOf = this.typeOf = function(item) {
        if (null == item) return "null";
        if (null != item.$family) return item.$family();
        if (item.nodeName) {
            if (1 == item.nodeType) return "element";
            if (3 == item.nodeType) return /\S/.test(item.nodeValue) ? "textnode" : "whitespace";
        } else if ("number" == typeof item.length) {
            if (item.callee) return "arguments";
            if ("item" in item) return "collection";
        }
        return typeof item;
    }, instanceOf = this.instanceOf = function(item, object) {
        if (null == item) return !1;
        for (var constructor = item.$constructor || item.constructor; constructor; ) {
            if (constructor === object) return !0;
            constructor = constructor.parent;
        }
        return item.hasOwnProperty ? item instanceof object : !1;
    }, Function = this.Function, enumerables = !0;
    for (var i in {
        toString: 1
    }) enumerables = null;
    enumerables && (enumerables = [ "hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor" ]), 
    Function.prototype.overloadSetter = function(usePlural) {
        var self = this;
        return function(a, b) {
            if (null == a) return this;
            if (usePlural || "string" != typeof a) {
                for (var k in a) self.call(this, k, a[k]);
                if (enumerables) for (var i = enumerables.length; i--; ) k = enumerables[i], a.hasOwnProperty(k) && self.call(this, k, a[k]);
            } else self.call(this, a, b);
            return this;
        };
    }, Function.prototype.overloadGetter = function(usePlural) {
        var self = this;
        return function(a) {
            var args, result;
            if ("string" != typeof a ? args = a : arguments.length > 1 ? args = arguments : usePlural && (args = [ a ]), 
            args) {
                result = {};
                for (var i = 0; i < args.length; i++) result[args[i]] = self.call(this, args[i]);
            } else result = self.call(this, a);
            return result;
        };
    }, Function.prototype.extend = function(key, value) {
        this[key] = value;
    }.overloadSetter(), Function.prototype.implement = function(key, value) {
        this.prototype[key] = value;
    }.overloadSetter();
    var slice = Array.prototype.slice;
    Function.from = function(item) {
        return "function" == typeOf(item) ? item : function() {
            return item;
        };
    }, Array.from = function(item) {
        return null == item ? [] : Type.isEnumerable(item) && "string" != typeof item ? "array" == typeOf(item) ? item : slice.call(item) : [ item ];
    }, Number.from = function(item) {
        var number = parseFloat(item);
        return isFinite(number) ? number : null;
    }, String.from = function(item) {
        return item + "";
    }, Function.implement({
        hide: function() {
            return this.$hidden = !0, this;
        },
        protect: function() {
            return this.$protected = !0, this;
        }
    });
    var Type = this.Type = function(name, object) {
        if (name) {
            var lower = name.toLowerCase(), typeCheck = function(item) {
                return typeOf(item) == lower;
            };
            Type["is" + name] = typeCheck, null != object && (object.prototype.$family = function() {
                return lower;
            }.hide(), object.type = typeCheck);
        }
        return null == object ? null : (object.extend(this), object.$constructor = Type, 
        object.prototype.$constructor = object, object);
    }, toString = Object.prototype.toString;
    Type.isEnumerable = function(item) {
        return null != item && "number" == typeof item.length && "[object Function]" != toString.call(item);
    };
    var hooks = {}, hooksOf = function(object) {
        var type = typeOf(object.prototype);
        return hooks[type] || (hooks[type] = []);
    }, implement = function(name, method) {
        if (!method || !method.$hidden) {
            for (var hooks = hooksOf(this), i = 0; i < hooks.length; i++) {
                var hook = hooks[i];
                "type" == typeOf(hook) ? implement.call(hook, name, method) : hook.call(this, name, method);
            }
            var previous = this.prototype[name];
            null != previous && previous.$protected || (this.prototype[name] = method), null == this[name] && "function" == typeOf(method) && extend.call(this, name, function(item) {
                return method.apply(item, slice.call(arguments, 1));
            });
        }
    }, extend = function(name, method) {
        if (!method || !method.$hidden) {
            var previous = this[name];
            null != previous && previous.$protected || (this[name] = method);
        }
    };
    Type.implement({
        implement: implement.overloadSetter(),
        extend: extend.overloadSetter(),
        alias: function(name, existing) {
            implement.call(this, name, this.prototype[existing]);
        }.overloadSetter(),
        mirror: function(hook) {
            return hooksOf(this).push(hook), this;
        }
    }), new Type("Type", Type);
    var force = function(name, object, methods) {
        var isType = object != Object, prototype = object.prototype;
        isType && (object = new Type(name, object));
        for (var i = 0, l = methods.length; l > i; i++) {
            var key = methods[i], generic = object[key], proto = prototype[key];
            generic && generic.protect(), isType && proto && object.implement(key, proto.protect());
        }
        if (isType) {
            var methodsEnumerable = prototype.propertyIsEnumerable(methods[0]);
            object.forEachMethod = function(fn) {
                if (!methodsEnumerable) for (var i = 0, l = methods.length; l > i; i++) fn.call(prototype, prototype[methods[i]], methods[i]);
                for (var key in prototype) fn.call(prototype, prototype[key], key);
            };
        }
        return force;
    };
    force("String", String, [ "charAt", "charCodeAt", "concat", "indexOf", "lastIndexOf", "match", "quote", "replace", "search", "slice", "split", "substr", "substring", "trim", "toLowerCase", "toUpperCase" ])("Array", Array, [ "pop", "push", "reverse", "shift", "sort", "splice", "unshift", "concat", "join", "slice", "indexOf", "lastIndexOf", "filter", "forEach", "every", "map", "some", "reduce", "reduceRight" ])("Number", Number, [ "toExponential", "toFixed", "toLocaleString", "toPrecision" ])("Function", Function, [ "apply", "call", "bind" ])("RegExp", RegExp, [ "exec", "test" ])("Object", Object, [ "create", "defineProperty", "defineProperties", "keys", "getPrototypeOf", "getOwnPropertyDescriptor", "getOwnPropertyNames", "preventExtensions", "isExtensible", "seal", "isSealed", "freeze", "isFrozen" ])("Date", Date, [ "now" ]), 
    Object.extend = extend.overloadSetter(), Date.extend("now", function() {
        return +new Date();
    }), new Type("Boolean", Boolean), Number.prototype.$family = function() {
        return isFinite(this) ? "number" : "null";
    }.hide(), Number.extend("random", function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    });
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    Object.extend("forEach", function(object, fn, bind) {
        for (var key in object) hasOwnProperty.call(object, key) && fn.call(bind, object[key], key, object);
    }), Object.each = Object.forEach, Array.implement({
        forEach: function(fn, bind) {
            for (var i = 0, l = this.length; l > i; i++) i in this && fn.call(bind, this[i], i, this);
        },
        each: function(fn, bind) {
            return Array.forEach(this, fn, bind), this;
        }
    });
    var cloneOf = function(item) {
        switch (typeOf(item)) {
          case "array":
            return item.clone();

          case "object":
            return Object.clone(item);

          default:
            return item;
        }
    };
    Array.implement("clone", function() {
        for (var i = this.length, clone = new Array(i); i--; ) clone[i] = cloneOf(this[i]);
        return clone;
    });
    var mergeOne = function(source, key, current) {
        switch (typeOf(current)) {
          case "object":
            "object" == typeOf(source[key]) ? Object.merge(source[key], current) : source[key] = Object.clone(current);
            break;

          case "array":
            source[key] = current.clone();
            break;

          default:
            source[key] = current;
        }
        return source;
    };
    Object.extend({
        merge: function(source, k, v) {
            if ("string" == typeOf(k)) return mergeOne(source, k, v);
            for (var i = 1, l = arguments.length; l > i; i++) {
                var object = arguments[i];
                for (var key in object) mergeOne(source, key, object[key]);
            }
            return source;
        },
        clone: function(object) {
            var clone = {};
            for (var key in object) clone[key] = cloneOf(object[key]);
            return clone;
        },
        append: function(original) {
            for (var i = 1, l = arguments.length; l > i; i++) {
                var extended = arguments[i] || {};
                for (var key in extended) original[key] = extended[key];
            }
            return original;
        }
    }), [ "Object", "WhiteSpace", "TextNode", "Collection", "Arguments" ].each(function(name) {
        new Type(name);
    });
    var UID = Date.now();
    String.extend("uniqueID", function() {
        return (UID++).toString(36);
    });
    var Hash = this.Hash = new Type("Hash", function(object) {
        "hash" == typeOf(object) && (object = Object.clone(object.getClean()));
        for (var key in object) this[key] = object[key];
        return this;
    });
    Hash.implement({
        forEach: function(fn, bind) {
            Object.forEach(this, fn, bind);
        },
        getClean: function() {
            var clean = {};
            for (var key in this) this.hasOwnProperty(key) && (clean[key] = this[key]);
            return clean;
        },
        getLength: function() {
            var length = 0;
            for (var key in this) this.hasOwnProperty(key) && length++;
            return length;
        }
    }), Hash.alias("each", "forEach"), Object.type = Type.isObject;
    var Native = this.Native = function(properties) {
        return new Type(properties.name, properties.initialize);
    };
    Native.type = Type.type, Native.implement = function(objects, methods) {
        for (var i = 0; i < objects.length; i++) objects[i].implement(methods);
        return Native;
    };
    var arrayType = Array.type;
    Array.type = function(item) {
        return instanceOf(item, Array) || arrayType(item);
    }, this.$A = function(item) {
        return Array.from(item).slice();
    }, this.$arguments = function(i) {
        return function() {
            return arguments[i];
        };
    }, this.$chk = function(obj) {
        return !(!obj && 0 !== obj);
    }, this.$clear = function(timer) {
        return clearTimeout(timer), clearInterval(timer), null;
    }, this.$defined = function(obj) {
        return null != obj;
    }, this.$each = function(iterable, fn, bind) {
        var type = typeOf(iterable);
        ("arguments" == type || "collection" == type || "array" == type || "elements" == type ? Array : Object).each(iterable, fn, bind);
    }, this.$empty = function() {}, this.$extend = function(original, extended) {
        return Object.append(original, extended);
    }, this.$H = function(object) {
        return new Hash(object);
    }, this.$merge = function() {
        var args = Array.slice(arguments);
        return args.unshift({}), Object.merge.apply(null, args);
    }, this.$lambda = Function.from, this.$mixin = Object.merge, this.$random = Number.random, 
    this.$splat = Array.from, this.$time = Date.now, this.$type = function(object) {
        var type = typeOf(object);
        return "elements" == type ? "array" : "null" == type ? !1 : type;
    }, this.$unlink = function(object) {
        switch (typeOf(object)) {
          case "object":
            return Object.clone(object);

          case "array":
            return Array.clone(object);

          case "hash":
            return new Hash(object);

          default:
            return object;
        }
    };
}(), function() {
    "use strict";
    function t() {}
    function r(t, n) {
        for (var e = t.length; e--; ) if (t[e].listener === n) return e;
        return -1;
    }
    function n(e) {
        return function() {
            return this[e].apply(this, arguments);
        };
    }
    var e = t.prototype, i = this, s = i.EventEmitter;
    e.getListeners = function(n) {
        var r, e, t = this._getEvents();
        if (n instanceof RegExp) {
            r = {};
            for (e in t) t.hasOwnProperty(e) && n.test(e) && (r[e] = t[e]);
        } else r = t[n] || (t[n] = []);
        return r;
    }, e.flattenListeners = function(t) {
        var e, n = [];
        for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
        return n;
    }, e.getListenersAsObject = function(n) {
        var e, t = this.getListeners(n);
        return t instanceof Array && (e = {}, e[n] = t), e || t;
    }, e.addListener = function(i, e) {
        var t, n = this.getListenersAsObject(i), s = "object" == typeof e;
        for (t in n) n.hasOwnProperty(t) && -1 === r(n[t], e) && n[t].push(s ? e : {
            listener: e,
            once: !1
        });
        return this;
    }, e.on = n("addListener"), e.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        });
    }, e.once = n("addOnceListener"), e.defineEvent = function(e) {
        return this.getListeners(e), this;
    }, e.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this;
    }, e.removeListener = function(i, s) {
        var n, e, t = this.getListenersAsObject(i);
        for (e in t) t.hasOwnProperty(e) && (n = r(t[e], s), -1 !== n && t[e].splice(n, 1));
        return this;
    }, e.off = n("removeListener"), e.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t);
    }, e.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t);
    }, e.manipulateListeners = function(r, t, i) {
        var e, n, s = r ? this.removeListener : this.addListener, o = r ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp) for (e = i.length; e--; ) s.call(this, t, i[e]); else for (e in t) t.hasOwnProperty(e) && (n = t[e]) && ("function" == typeof n ? s.call(this, e, n) : o.call(this, e, n));
        return this;
    }, e.removeEvent = function(e) {
        var t, r = typeof e, n = this._getEvents();
        if ("string" === r) delete n[e]; else if (e instanceof RegExp) for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t]; else delete this._events;
        return this;
    }, e.removeAllListeners = n("removeEvent"), e.emitEvent = function(r, o) {
        var e, i, t, s, n = this.getListenersAsObject(r);
        for (t in n) if (n.hasOwnProperty(t)) for (i = n[t].length; i--; ) e = n[t][i], 
        e.once === !0 && this.removeListener(r, e.listener), s = e.listener.apply(this, o || []), 
        s === this._getOnceReturnValue() && this.removeListener(r, e.listener);
        return this;
    }, e.trigger = n("emitEvent"), e.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t);
    }, e.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this;
    }, e._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
    }, e._getEvents = function() {
        return this._events || (this._events = {});
    }, t.noConflict = function() {
        return i.EventEmitter = s, t;
    }, "function" == typeof define && define.amd ? define(function() {
        return t;
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t;
}.call(this);

var CryptoJS = CryptoJS || function(s, p) {
    var m = {}, l = m.lib = {}, n = function() {}, r = l.Base = {
        extend: function(b) {
            n.prototype = this;
            var h = new n();
            return b && h.mixIn(b), h.hasOwnProperty("init") || (h.init = function() {
                h.$super.init.apply(this, arguments);
            }), h.init.prototype = h, h.$super = this, h;
        },
        create: function() {
            var b = this.extend();
            return b.init.apply(b, arguments), b;
        },
        init: function() {},
        mixIn: function(b) {
            for (var h in b) b.hasOwnProperty(h) && (this[h] = b[h]);
            b.hasOwnProperty("toString") && (this.toString = b.toString);
        },
        clone: function() {
            return this.init.prototype.extend(this);
        }
    }, q = l.WordArray = r.extend({
        init: function(b, h) {
            b = this.words = b || [], this.sigBytes = h != p ? h : 4 * b.length;
        },
        toString: function(b) {
            return (b || t).stringify(this);
        },
        concat: function(b) {
            var h = this.words, a = b.words, j = this.sigBytes;
            if (b = b.sigBytes, this.clamp(), j % 4) for (var g = 0; b > g; g++) h[j + g >>> 2] |= (a[g >>> 2] >>> 24 - 8 * (g % 4) & 255) << 24 - 8 * ((j + g) % 4); else if (65535 < a.length) for (g = 0; b > g; g += 4) h[j + g >>> 2] = a[g >>> 2]; else h.push.apply(h, a);
            return this.sigBytes += b, this;
        },
        clamp: function() {
            var b = this.words, h = this.sigBytes;
            b[h >>> 2] &= 4294967295 << 32 - 8 * (h % 4), b.length = s.ceil(h / 4);
        },
        clone: function() {
            var b = r.clone.call(this);
            return b.words = this.words.slice(0), b;
        },
        random: function(b) {
            for (var h = [], a = 0; b > a; a += 4) h.push(4294967296 * s.random() | 0);
            return new q.init(h, b);
        }
    }), v = m.enc = {}, t = v.Hex = {
        stringify: function(b) {
            var a = b.words;
            b = b.sigBytes;
            for (var g = [], j = 0; b > j; j++) {
                var k = a[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                g.push((k >>> 4).toString(16)), g.push((15 & k).toString(16));
            }
            return g.join("");
        },
        parse: function(b) {
            for (var a = b.length, g = [], j = 0; a > j; j += 2) g[j >>> 3] |= parseInt(b.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new q.init(g, a / 2);
        }
    }, a = v.Latin1 = {
        stringify: function(b) {
            var a = b.words;
            b = b.sigBytes;
            for (var g = [], j = 0; b > j; j++) g.push(String.fromCharCode(a[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return g.join("");
        },
        parse: function(b) {
            for (var a = b.length, g = [], j = 0; a > j; j++) g[j >>> 2] |= (255 & b.charCodeAt(j)) << 24 - 8 * (j % 4);
            return new q.init(g, a);
        }
    }, u = v.Utf8 = {
        stringify: function(b) {
            try {
                return decodeURIComponent(escape(a.stringify(b)));
            } catch (g) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function(b) {
            return a.parse(unescape(encodeURIComponent(b)));
        }
    }, g = l.BufferedBlockAlgorithm = r.extend({
        reset: function() {
            this._data = new q.init(), this._nDataBytes = 0;
        },
        _append: function(b) {
            "string" == typeof b && (b = u.parse(b)), this._data.concat(b), this._nDataBytes += b.sigBytes;
        },
        _process: function(b) {
            var a = this._data, g = a.words, j = a.sigBytes, k = this.blockSize, m = j / (4 * k), m = b ? s.ceil(m) : s.max((0 | m) - this._minBufferSize, 0);
            if (b = m * k, j = s.min(4 * b, j), b) {
                for (var l = 0; b > l; l += k) this._doProcessBlock(g, l);
                l = g.splice(0, b), a.sigBytes -= j;
            }
            return new q.init(l, j);
        },
        clone: function() {
            var b = r.clone.call(this);
            return b._data = this._data.clone(), b;
        },
        _minBufferSize: 0
    });
    l.Hasher = g.extend({
        cfg: r.extend(),
        init: function(b) {
            this.cfg = this.cfg.extend(b), this.reset();
        },
        reset: function() {
            g.reset.call(this), this._doReset();
        },
        update: function(b) {
            return this._append(b), this._process(), this;
        },
        finalize: function(b) {
            return b && this._append(b), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function(b) {
            return function(a, g) {
                return new b.init(g).finalize(a);
            };
        },
        _createHmacHelper: function(b) {
            return function(a, g) {
                return new k.HMAC.init(b, g).finalize(a);
            };
        }
    });
    var k = m.algo = {};
    return m;
}(Math);

!function(s) {
    function p(a, k, b, h, l, j, m) {
        return a = a + (k & b | ~k & h) + l + m, (a << j | a >>> 32 - j) + k;
    }
    function m(a, k, b, h, l, j, m) {
        return a = a + (k & h | b & ~h) + l + m, (a << j | a >>> 32 - j) + k;
    }
    function l(a, k, b, h, l, j, m) {
        return a = a + (k ^ b ^ h) + l + m, (a << j | a >>> 32 - j) + k;
    }
    function n(a, k, b, h, l, j, m) {
        return a = a + (b ^ (k | ~h)) + l + m, (a << j | a >>> 32 - j) + k;
    }
    for (var r = CryptoJS, q = r.lib, v = q.WordArray, t = q.Hasher, q = r.algo, a = [], u = 0; 64 > u; u++) a[u] = 4294967296 * s.abs(s.sin(u + 1)) | 0;
    q = q.MD5 = t.extend({
        _doReset: function() {
            this._hash = new v.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
        },
        _doProcessBlock: function(g, k) {
            for (var b = 0; 16 > b; b++) {
                var h = k + b, w = g[h];
                g[h] = 16711935 & (w << 8 | w >>> 24) | 4278255360 & (w << 24 | w >>> 8);
            }
            var b = this._hash.words, h = g[k + 0], w = g[k + 1], j = g[k + 2], q = g[k + 3], r = g[k + 4], s = g[k + 5], t = g[k + 6], u = g[k + 7], v = g[k + 8], x = g[k + 9], y = g[k + 10], z = g[k + 11], A = g[k + 12], B = g[k + 13], C = g[k + 14], D = g[k + 15], c = b[0], d = b[1], e = b[2], f = b[3], c = p(c, d, e, f, h, 7, a[0]), f = p(f, c, d, e, w, 12, a[1]), e = p(e, f, c, d, j, 17, a[2]), d = p(d, e, f, c, q, 22, a[3]), c = p(c, d, e, f, r, 7, a[4]), f = p(f, c, d, e, s, 12, a[5]), e = p(e, f, c, d, t, 17, a[6]), d = p(d, e, f, c, u, 22, a[7]), c = p(c, d, e, f, v, 7, a[8]), f = p(f, c, d, e, x, 12, a[9]), e = p(e, f, c, d, y, 17, a[10]), d = p(d, e, f, c, z, 22, a[11]), c = p(c, d, e, f, A, 7, a[12]), f = p(f, c, d, e, B, 12, a[13]), e = p(e, f, c, d, C, 17, a[14]), d = p(d, e, f, c, D, 22, a[15]), c = m(c, d, e, f, w, 5, a[16]), f = m(f, c, d, e, t, 9, a[17]), e = m(e, f, c, d, z, 14, a[18]), d = m(d, e, f, c, h, 20, a[19]), c = m(c, d, e, f, s, 5, a[20]), f = m(f, c, d, e, y, 9, a[21]), e = m(e, f, c, d, D, 14, a[22]), d = m(d, e, f, c, r, 20, a[23]), c = m(c, d, e, f, x, 5, a[24]), f = m(f, c, d, e, C, 9, a[25]), e = m(e, f, c, d, q, 14, a[26]), d = m(d, e, f, c, v, 20, a[27]), c = m(c, d, e, f, B, 5, a[28]), f = m(f, c, d, e, j, 9, a[29]), e = m(e, f, c, d, u, 14, a[30]), d = m(d, e, f, c, A, 20, a[31]), c = l(c, d, e, f, s, 4, a[32]), f = l(f, c, d, e, v, 11, a[33]), e = l(e, f, c, d, z, 16, a[34]), d = l(d, e, f, c, C, 23, a[35]), c = l(c, d, e, f, w, 4, a[36]), f = l(f, c, d, e, r, 11, a[37]), e = l(e, f, c, d, u, 16, a[38]), d = l(d, e, f, c, y, 23, a[39]), c = l(c, d, e, f, B, 4, a[40]), f = l(f, c, d, e, h, 11, a[41]), e = l(e, f, c, d, q, 16, a[42]), d = l(d, e, f, c, t, 23, a[43]), c = l(c, d, e, f, x, 4, a[44]), f = l(f, c, d, e, A, 11, a[45]), e = l(e, f, c, d, D, 16, a[46]), d = l(d, e, f, c, j, 23, a[47]), c = n(c, d, e, f, h, 6, a[48]), f = n(f, c, d, e, u, 10, a[49]), e = n(e, f, c, d, C, 15, a[50]), d = n(d, e, f, c, s, 21, a[51]), c = n(c, d, e, f, A, 6, a[52]), f = n(f, c, d, e, q, 10, a[53]), e = n(e, f, c, d, y, 15, a[54]), d = n(d, e, f, c, w, 21, a[55]), c = n(c, d, e, f, v, 6, a[56]), f = n(f, c, d, e, D, 10, a[57]), e = n(e, f, c, d, t, 15, a[58]), d = n(d, e, f, c, B, 21, a[59]), c = n(c, d, e, f, r, 6, a[60]), f = n(f, c, d, e, z, 10, a[61]), e = n(e, f, c, d, j, 15, a[62]), d = n(d, e, f, c, x, 21, a[63]);
            b[0] = b[0] + c | 0, b[1] = b[1] + d | 0, b[2] = b[2] + e | 0, b[3] = b[3] + f | 0;
        },
        _doFinalize: function() {
            var a = this._data, k = a.words, b = 8 * this._nDataBytes, h = 8 * a.sigBytes;
            k[h >>> 5] |= 128 << 24 - h % 32;
            var l = s.floor(b / 4294967296);
            for (k[(h + 64 >>> 9 << 4) + 15] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8), 
            k[(h + 64 >>> 9 << 4) + 14] = 16711935 & (b << 8 | b >>> 24) | 4278255360 & (b << 24 | b >>> 8), 
            a.sigBytes = 4 * (k.length + 1), this._process(), a = this._hash, k = a.words, b = 0; 4 > b; b++) h = k[b], 
            k[b] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
            return a;
        },
        clone: function() {
            var a = t.clone.call(this);
            return a._hash = this._hash.clone(), a;
        }
    }), r.MD5 = t._createHelper(q), r.HmacMD5 = t._createHmacHelper(q);
}(Math);