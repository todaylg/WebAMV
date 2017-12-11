/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
var _gsScope;
//1part Jquery
! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(a, b) {
	function s(e) {
		var t = !!e && "length" in e && e.length,
			r = n.type(e);
		return "function" === r || n.isWindow(e) ? !1 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function z(e, t, r) {
		if (n.isFunction(t)) return n.grep(e, function(e, n) {
			return !!t.call(e, n, e) !== r
		});
		if (t.nodeType) return n.grep(e, function(e) {
			return e === t !== r
		});
		if ("string" == typeof t) {
			if (y.test(t)) return n.filter(t, e, r);
			t = n.filter(t, e)
		}
		return n.grep(e, function(e) {
			return h.call(t, e) > -1 !== r
		})
	}

	function F(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}

	function H(e) {
		var t = {};
		return n.each(e.match(G) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function J() {
		d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
	}

	function M() {
		this.expando = n.expando + M.uid++
	}

	function R(e, t, r) {
		var i;
		if (void 0 === r && 1 === e.nodeType)
			if (i = "data-" + t.replace(Q, "-$&").toLowerCase(), r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : P.test(r) ? n.parseJSON(r) : r
				} catch (s) {}
				O.set(e, t, r)
			} else r = void 0;
		return r
	}

	function W(e, t, r, i) {
		var s, o = 1,
			u = 20,
			a = i ? function() {
				return i.cur()
			} : function() {
				return n.css(e, t, "")
			},
			f = a(),
			l = r && r[3] || (n.cssNumber[t] ? "" : "px"),
			c = (n.cssNumber[t] || "px" !== l && +f) && T.exec(n.css(e, t));
		if (c && c[3] !== l) {
			l = l || c[3], r = r || [], c = +f || 1;
			do o = o || ".5", c /= o, n.style(e, t, c + l); while (o !== (o = a() / f) && 1 !== o && --u)
		}
		return r && (c = +c || +f || 0, s = r[1] ? c + (r[1] + 1) * r[2] : +r[2], i && (i.unit = l, i.start = c, i.end = s)), s
	}

	function _(e, t) {
		var r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && n.nodeName(e, t) ? n.merge([e], r) : r
	}

	function aa(e, t) {
		var n, r;
		for (n = 0, r = e.length; r > n; n++) N.set(e[n], "globalEval", !t || N.get(t[n], "globalEval"))
	}

	function ca(e, t, r, i, s) {
		var o, u, a, f, l, c, h, p, d, v;
		for (h = t.createDocumentFragment(), p = [], d = 0, v = e.length; v > d; d++)
			if (o = e[d], o || 0 === o)
				if ("object" === n.type(o)) n.merge(p, o.nodeType ? [o] : o);
				else if (ba.test(o)) {
			u = u || h.appendChild(t.createElement("div")), a = (Y.exec(o) || ["", ""])[1].toLowerCase(), f = $[a] || $._default, u.innerHTML = f[1] + n.htmlPrefilter(o) + f[2], c = f[0];
			while (c--) u = u.lastChild;
			n.merge(p, u.childNodes), u = h.firstChild, u.textContent = ""
		} else p.push(t.createTextNode(o));
		h.textContent = "", d = 0;
		while (o = p[d++])
			if (i && n.inArray(o, i) > -1) s && s.push(o);
			else if (l = n.contains(o.ownerDocument, o), u = _(h.appendChild(o), "script"), l && aa(u), r) {
			c = 0;
			while (o = u[c++]) Z.test(o.type || "") && r.push(o)
		}
		return h
	}

	function ga() {
		return !0
	}

	function ha() {
		return !1
	}

	function ia() {
		try {
			return d.activeElement
		} catch (e) {}
	}

	function ja(e, t, r, i, s, o) {
		var u, a;
		if ("object" == typeof t) {
			"string" != typeof r && (i = i || r, r = void 0);
			for (a in t) ja(e, a, r, i, t[a], o);
			return e
		}
		if (null == i && null == s ? (s = r, i = r = void 0) : null == s && ("string" == typeof r ? (s = i, i = void 0) : (s = i, i = r, r = void 0)), s === !1) s = ha;
		else if (!s) return e;
		return 1 === o && (u = s, s = function(e) {
			return n().off(e), u.apply(this, arguments)
		}, s.guid = u.guid || (u.guid = n.guid++)), e.each(function() {
			n.event.add(this, t, s, i, r)
		})
	}

	function pa(e, t) {
		return n.nodeName(e, "table") && n.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function qa(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function ra(e) {
		var t = na.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function sa(e, t) {
		var r, i, s, o, u, a, f, l;
		if (1 === t.nodeType) {
			if (N.hasData(e) && (o = N.access(e), u = N.set(t, o), l = o.events)) {
				delete u.handle, u.events = {};
				for (s in l)
					for (r = 0, i = l[s].length; i > r; r++) n.event.add(t, s, l[s][r])
			}
			O.hasData(e) && (a = O.access(e), f = n.extend({}, a), O.set(t, f))
		}
	}

	function ta(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && X.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function ua(e, t, r, i) {
		var s, o, u, a, c, h, p, d, v, m, g;
		t = f.apply([], t);
		p = 0, d = e.length, v = d - 1, m = t[0], g = n.isFunction(m);
		if (g || d > 1 && "string" == typeof m && !l.checkClone && ma.test(m)) return e.each(function(n) {
			var s = e.eq(n);
			g && (t[0] = m.call(this, n, s.html())), ua(s, t, r, i)
		});
		if (d && (s = ca(t, e[0].ownerDocument, !1, e, i), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || i)) {
			for (u = n.map(_(s, "script"), qa), a = u.length; d > p; p++) c = s, p !== v && (c = n.clone(c, !0, !0), a && n.merge(u, _(c, "script"))), r.call(e[p], c, p);
			if (a)
				for (h = u[u.length - 1].ownerDocument, n.map(u, ra), p = 0; a > p; p++) c = u[p], Z.test(c.type || "") && !N.access(c, "globalEval") && n.contains(h, c) && (c.src ? n._evalUrl && n._evalUrl(c.src) : n.globalEval(c.textContent.replace(oa, "")))
		}
		return e
	}

	function va(e, t, r) {
		var i, s, o;
		for (s = t ? n.filter(t, e) : e, o = 0; null != (i = s[o]); o++) r || 1 !== i.nodeType || n.cleanData(_(i)), i.parentNode && (r && n.contains(i.ownerDocument, i) && aa(_(i, "script")), i.parentNode.removeChild(i));
		return e
	}

	function ya(e, t) {
		var r = n(t.createElement(e)).appendTo(t.body),
			i = n.css(r[0], "display");
		return r.detach(), i
	}

	function za(e) {
		var t = d,
			r = xa[e];
		return r || (r = ya(e, t), "none" !== r && r || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = wa[0].contentDocument, t.write(), t.close(), r = ya(e, t), wa.detach()), xa[e] = r), r
	}

	function Fa(e, t, r) {
		var i, s, o, u, a = e.style;
		return r = r || Ca(e), u = r ? r.getPropertyValue(t) || r[t] : void 0, "" !== u && void 0 !== u || n.contains(e.ownerDocument, e) || (u = n.style(e, t)), r && !l.pixelMarginRight() && Ba.test(u) && Aa.test(t) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = u, u = r.width, a.width = i, a.minWidth = s, a.maxWidth = o), void 0 !== u ? u + "" : u
	}

	function Ga(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function Ma(e) {
		var t, n;
		if (e in La) return e;
		t = e[0].toUpperCase() + e.slice(1), n = Ka.length;
		while (n--)
			if (e = Ka[n] + t, e in La) return e
	}

	function Na(e, t, n) {
		var r = T.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Oa(e, t, r, i, s) {
		var o, u;
		for (o = r === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, u = 0; 4 > o; o += 2) "margin" === r && (u += n.css(e, r + U[o], !0, s)), i ? ("content" === r && (u -= n.css(e, "padding" + U[o], !0, s)), "margin" !== r && (u -= n.css(e, "border" + U[o] + "Width", !0, s))) : (u += n.css(e, "padding" + U[o], !0, s), "padding" !== r && (u += n.css(e, "border" + U[o] + "Width", !0, s)));
		return u
	}

	function Pa(e, t, r) {
		var i = !0,
			s = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Ca(e),
			u = "border-box" === n.css(e, "boxSizing", !1, o);
		if (d.msFullscreenElement && a.top !== a && e.getClientRects().length && (s = Math.round(100 * e.getBoundingClientRect()[t])), 0 >= s || null == s) {
			if (s = Fa(e, t, o), (0 > s || null == s) && (s = e.style[t]), Ba.test(s)) return s;
			i = u && (l.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
		}
		return s + Oa(e, t, r || (u ? "border" : "content"), i, o) + "px"
	}

	function Qa(e, t) {
		var r, i, s, o, u, a;
		for (o = [], u = 0, a = e.length; a > u; u++) i = e[u], i.style && (o[u] = N.get(i, "olddisplay"), r = i.style.display, t ? (o[u] || "none" !== r || (i.style.display = ""), "" === i.style.display && V(i) && (o[u] = N.access(i, "olddisplay", za(i.nodeName)))) : (s = V(i), "none" === r && s || N.set(i, "olddisplay", s ? r : n.css(i, "display"))));
		for (u = 0; a > u; u++) i = e[u], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[u] || "" : "none"));
		return e
	}

	function Ra(e, t, n, r, i) {
		return new Ra.prototype.init(e, t, n, r, i)
	}

	function Wa() {
		return a.setTimeout(function() {
			Sa = void 0
		}), Sa = n.now()
	}

	function Xa(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = U[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function Ya(e, t, n) {
		var r, i, s, o;
		for (i = (_a.tweeners[t] || []).concat(_a.tweeners["*"]), s = 0, o = i.length; o > s; s++)
			if (r = i[s].call(n, t, e)) return r
	}

	function Za(e, t, r) {
		var i, s, o, u, a, f, l, c, h = this,
			p = {},
			d = e.style,
			v = e.nodeType && V(e),
			m = N.get(e, "fxshow");
		r.queue || (a = n._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, f = a.empty.fire, a.empty.fire = function() {
			a.unqueued || f()
		}), a.unqueued++, h.always(function() {
			h.always(function() {
				a.unqueued--, n.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (r.overflow = [d.overflow, d.overflowX, d.overflowY], l = n.css(e, "display"), c = "none" === l ? N.get(e, "olddisplay") || za(e.nodeName) : l, "inline" === c && "none" === n.css(e, "float") && (d.display = "inline-block")), r.overflow && (d.overflow = "hidden", h.always(function() {
			d.overflow = r.overflow[0], d.overflowX = r.overflow[1], d.overflowY = r.overflow[2]
		}));
		for (i in t)
			if (s = t[i], Ua.exec(s)) {
				if (delete t[i], o = o || "toggle" === s, s === (v ? "hide" : "show")) {
					if ("show" !== s || !m || void 0 === m[i]) continue;
					v = !0
				}
				p[i] = m && m[i] || n.style(e, i)
			} else l = void 0;
		if (n.isEmptyObject(p)) "inline" === ("none" === l ? za(e.nodeName) : l) && (d.display = l);
		else {
			m ? "hidden" in m && (v = m.hidden) : m = N.access(e, "fxshow", {}), o && (m.hidden = !v), v ? n(e).show() : h.done(function() {
				n(e).hide()
			}), h.done(function() {
				var t;
				N.remove(e, "fxshow");
				for (t in p) n.style(e, t, p[t])
			});
			for (i in p) u = Ya(v ? m[i] : 0, i, h), i in m || (m[i] = u.start, v && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function $a(e, t) {
		var r, i, s, o, u;
		for (r in e)
			if (i = n.camelCase(r), s = t[i], o = e[r], n.isArray(o) && (s = o[1], o = e[r] = o[0]), r !== i && (e[i] = o, delete e[r]), u = n.cssHooks[i], u && "expand" in u) {
				o = u.expand(o), delete e[i];
				for (r in o) r in e || (e[r] = o[r], t[r] = s)
			} else t[i] = s
	}

	function _a(e, t, r) {
		var i, s, o = 0,
			u = _a.prefilters.length,
			a = n.Deferred().always(function() {
				delete f.elem
			}),
			f = function() {
				if (s) return !1;
				for (var t = Sa || Wa(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, o = 0, u = l.tweens.length; u > o; o++) l.tweens[o].run(i);
				return a.notifyWith(e, [l, i, n]), 1 > i && u ? n : (a.resolveWith(e, [l]), !1)
			},
			l = a.promise({
				elem: e,
				props: n.extend({}, t),
				opts: n.extend(!0, {
					specialEasing: {},
					easing: n.easing._default
				}, r),
				originalProperties: t,
				originalOptions: r,
				startTime: Sa || Wa(),
				duration: r.duration,
				tweens: [],
				createTween: function(t, r) {
					var i = n.Tween(e, l.opts, t, r, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (s) return this;
					for (s = !0; r > n; n++) l.tweens[n].run(1);
					return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for ($a(c, l.opts.specialEasing); u > o; o++)
			if (i = _a.prefilters[o].call(l, e, c, l.opts)) return n.isFunction(i.stop) && (n._queueHooks(l.elem, l.opts.queue).stop = n.proxy(i.stop, i)), i;
		return n.map(c, Ya, l), n.isFunction(l.opts.start) && l.opts.start.call(e, l), n.fx.timer(n.extend(f, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function fb(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function wb(e) {
		return function(t, r) {
			var i, s, o;
			"string" != typeof t && (r = t, t = "*");
			s = 0, o = t.toLowerCase().match(G) || [];
			if (n.isFunction(r))
				while (i = o[s++]) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(r)) : (e[i] = e[i] || []).push(r)
		}
	}

	function xb(e, t, r, i) {
		function u(a) {
			var f;
			return s[a] = !0, n.each(e[a] || [], function(e, n) {
				var a = n(t, r, i);
				return "string" != typeof a || o || s[a] ? o ? !(f = a) : void 0 : (t.dataTypes.unshift(a), u(a), !1)
			}), f
		}
		var s, o;
		s = {}, o = e === tb;
		return u(t.dataTypes[0]) || !s["*"] && u("*")
	}

	function yb(e, t) {
		var r, i, s = n.ajaxSettings.flatOptions || {};
		for (r in t) void 0 !== t[r] && ((s[r] ? e : i || (i = {}))[r] = t[r]);
		return i && n.extend(!0, e, i), e
	}

	function zb(e, t, n) {
		var r, i, s, o, u = e.contents,
			a = e.dataTypes;
		while ("*" === a[0]) a.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in u)
				if (u[i] && u[i].test(r)) {
					a.unshift(i);
					break
				}
		if (a[0] in n) s = a[0];
		else {
			for (i in n) {
				if (!a[0] || e.converters[i + " " + a[0]]) {
					s = i;
					break
				}
				o || (o = i)
			}
			s = s || o
		}
		return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
	}

	function Ab(e, t, n, r) {
		var i, s, o, u, a, f = {},
			l = e.dataTypes.slice();
		if (l[1])
			for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
		s = l.shift();
		while (s)
			if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
				if ("*" === s) s = a;
				else if ("*" !== a && a !== s) {
			if (o = f[a + " " + s] || f["* " + s], !o)
				for (i in f)
					if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
						o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
						break
					}
			if (o !== !0)
				if (o && e["throws"]) t = o(t);
				else try {
					t = o(t)
				} catch (c) {
					return {
						state: "parsererror",
						error: o ? c : "No conversion from " + a + " to " + s
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function Gb(e, t, r, i) {
		var s;
		if (n.isArray(t)) n.each(t, function(t, n) {
			r || Cb.test(e) ? i(e, n) : Gb(e + "[" + ("object" == typeof n && null != n ? t : "") + "]", n, r, i)
		});
		else if (r || "object" !== n.type(t)) i(e, t);
		else
			for (s in t) Gb(e + "[" + s + "]", t[s], r, i)
	}

	function Mb(e) {
		return n.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var t, u, v, w, x, y, A, B, C, D, E, G, I, K, L, N, O, P, Q, S, T, U, V, X, Y, Z, $, ba, da, ea, fa, ka, la, ma, na, oa, wa, xa, Aa, Ba, Ca, Da, Ea, Ha, Ia, Ja, Ka, La, Sa, Ta, Ua, Va, ab, bb, cb, db, eb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, Bb, Cb, Db, Eb, Fb, Hb, Ib, Jb, Kb, Lb, Nb, Ob, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
	c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "2.2.3", n = function(e, t) {
		return new n.fn.init(e, t)
	}, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(e, t) {
		return t.toUpperCase()
	};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function() {
			return e.call(this)
		},
		get: function(t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : e.call(this)
		},
		pushStack: function(e) {
			var t = n.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e) {
			return n.each(this, e)
		},
		map: function(e) {
			return this.pushStack(n.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(e.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: g,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function() {
		var e, t, r, i, s, o, u = arguments[0] || {},
			a = 1,
			f = arguments.length,
			l = !1;
		for ("boolean" == typeof u && (l = u, u = arguments[a] || {}, a++), "object" == typeof u || n.isFunction(u) || (u = {}), a === f && (u = this, a--); f > a; a++)
			if (null != (e = arguments[a]))
				for (t in e) r = u[t], i = e[t], u !== i && (l && i && (n.isPlainObject(i) || (s = n.isArray(i))) ? (s ? (s = !1, o = r && n.isArray(r) ? r : []) : o = r && n.isPlainObject(r) ? r : {}, u[t] = n.extend(l, o, i)) : void 0 !== i && (u[t] = i));
		return u
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === n.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			var t = e && e.toString();
			return !n.isArray(e) && t - parseFloat(t) + 1 >= 0
		},
		isPlainObject: function(e) {
			var t;
			if ("object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
			if (e.constructor && !k.call(e, "constructor") && !k.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
			for (t in e);
			return void 0 === t || k.call(e, t)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[j.call(e)] || "object" : typeof e
		},
		globalEval: function(a) {
			var b, c = eval;
			a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase: function(e) {
			return e.replace(p, "ms-").replace(q, r)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t) {
			var n, r = 0;
			if (s(e)) {
				for (n = e.length; n > r; r++)
					if (t.call(e[r], r, e[r]) === !1) break
			} else
				for (r in e)
					if (t.call(e[r], r, e[r]) === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(o, "")
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (s(Object(e)) ? n.merge(r, "string" == typeof e ? [e] : e) : g.call(r, e)), r
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : h.call(t, e, n)
		},
		merge: function(e, t) {
			var n, r, i;
			for (n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i, s, o, u;
			for (i = [], s = 0, o = e.length, u = !n; o > s; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
			return i
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				u = [];
			if (s(e))
				for (r = e.length; r > o; o++) i = t(e[o], o, n), null != i && u.push(i);
			else
				for (o in e) i = t(e[o], o, n), null != i && u.push(i);
			return f.apply([], u)
		},
		guid: 1,
		proxy: function(t, r) {
			var i, s, o;
			return "string" == typeof r && (i = t[r], r = t, t = i), n.isFunction(t) ? (s = e.call(arguments, 2), o = function() {
				return t.apply(r || this, s.concat(e.call(arguments)))
			}, o.guid = t.guid = t.guid || n.guid++, o) : void 0
		},
		now: Date.now,
		support: l
	}), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		i["[object " + t + "]"] = t.toLowerCase()
	});
	t = function(e) {
		function it(e, t, r, i) {
			var s, u, f, l, c, d, g, y, S = t && t.ownerDocument,
				x = t ? t.nodeType : 9;
			if (r = r || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;
			if (!i && ((t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, v)) {
				if (11 !== x && (d = Y.exec(e)))
					if (s = d[1]) {
						if (9 === x) {
							if (!(f = t.getElementById(s))) return r;
							if (f.id === s) return r.push(f), r
						} else if (S && (f = S.getElementById(s)) && b(t, f) && f.id === s) return r.push(f), r
					} else {
						if (d[2]) return D.apply(r, t.getElementsByTagName(e)), r;
						if ((s = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(r, t.getElementsByClassName(s)), r
					}
				if (n.qsa && !C[e + " "] && (!m || !m.test(e))) {
					if (1 !== x) S = t, y = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						(l = t.getAttribute("id")) ? l = l.replace(et, "\\$&"): t.setAttribute("id", l = w), g = o(e), u = g.length, c = $.test(l) ? "#" + l : "[id='" + l + "']";
						while (u--) g[u] = c + " " + vt(g[u]);
						y = g.join(","), S = Z.test(e) && pt(t.parentNode) || t
					}
					if (y) try {
						return D.apply(r, S.querySelectorAll(y)), r
					} catch (T) {} finally {
						l === w && t.removeAttribute("id")
					}
				}
			}
			return a(e.replace(U, "$1"), t, r, i)
		}

		function st() {
			function t(n, i) {
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
			}
			var e;
			e = [];
			return t
		}

		function ot(e) {
			return e[w] = !0, e
		}

		function ut(e) {
			var t = p.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function at(e, t) {
			var n = e.split("|"),
				i = n.length;
			while (i--) r.attrHandle[n[i]] = t
		}

		function ft(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || L) - (~e.sourceIndex || L);
			if (r) return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function lt(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function ct(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function ht(e) {
			return ot(function(t) {
				return t = +t, ot(function(n, r) {
					var i, s = e([], n.length, t),
						o = s.length;
					while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function pt(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function dt() {}

		function vt(e) {
			var t, n, r;
			for (t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
			return r
		}

		function mt(e, t, n) {
			var r = t.dir,
				i = n && "parentNode" === r,
				s = x++;
			return t.first ? function(t, n, s) {
				while (t = t[r])
					if (1 === t.nodeType || i) return e(t, n, s)
			} : function(t, n, o) {
				var u, a, f, l = [S, s];
				if (o) {
					while (t = t[r])
						if ((1 === t.nodeType || i) && e(t, n, o)) return !0
				} else
					while (t = t[r])
						if (1 === t.nodeType || i) {
							if (f = t[w] || (t[w] = {}), a = f[t.uniqueID] || (f[t.uniqueID] = {}), (u = a[r]) && u[0] === S && u[1] === s) return l[2] = u[2];
							if (a[r] = l, l[2] = e(t, n, o)) return !0
						}
			}
		}

		function gt(e) {
			return e.length > 1 ? function(t, n, r) {
				var i = e.length;
				while (i--)
					if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function yt(e, t, n) {
			var r, i;
			for (r = 0, i = t.length; i > r; r++) it(e, t[r], n);
			return n
		}

		function bt(e, t, n, r, i) {
			var s, o, u, a, f;
			for (o = [], u = 0, a = e.length, f = null != t; a > u; u++)(s = e[u]) && (n && !n(s, r, i) || (o.push(s), f && t.push(u)));
			return o
		}

		function wt(e, t, n, r, i, s) {
			return r && !r[w] && (r = wt(r)), i && !i[w] && (i = wt(i, s)), ot(function(s, o, u, a) {
				var f, l, c, h = [],
					p = [],
					d = o.length,
					v = s || yt(t || "*", u.nodeType ? [u] : u, []),
					m = !e || !s && t ? v : bt(v, h, e, u, a),
					g = n ? i || (s ? e : d || r) ? [] : o : m;
				if (n && n(m, g, u, a), r) {
					f = bt(g, p), r(f, [], u, a), l = f.length;
					while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
				}
				if (s) {
					if (i || e) {
						if (i) {
							f = [], l = g.length;
							while (l--)(c = g[l]) && f.push(m[l] = c);
							i(null, g = [], f, a)
						}
						l = g.length;
						while (l--)(c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
					}
				} else g = bt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : D.apply(o, g)
			})
		}

		function Et(e) {
			var t, n, i, s, o, u, a, l, c, h;
			for (s = e.length, o = r.relative[e[0].type], u = o || r.relative[" "], a = o ? 1 : 0, l = mt(function(e) {
					return e === t
				}, u, !0), c = mt(function(e) {
					return H(t, e) > -1
				}, u, !0), h = [function(e, n, r) {
					var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
					return t = null, i
				}]; s > a; a++)
				if (n = r.relative[e[a].type]) h = [mt(gt(h), n)];
				else {
					if (n = r.filter[e[a].type].apply(null, e[a].matches), n[w]) {
						for (i = ++a; s > i; i++)
							if (r.relative[e[i].type]) break;
						return wt(a > 1 && gt(h), a > 1 && vt(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(U, "$1"), n, i > a && Et(e.slice(a, i)), s > i && Et(e = e.slice(i)), s > i && vt(e))
					}
					h.push(n)
				}
			return gt(h)
		}

		function St(e, t) {
			var n = t.length > 0,
				i = e.length > 0,
				s = function(s, o, u, a, l) {
					var c, d, m, g = 0,
						y = "0",
						b = s && [],
						w = [],
						E = f,
						x = s || i && r.find.TAG("*", l),
						T = S += null == E ? 1 : Math.random() || .1,
						N = x.length;
					for (l && (f = o === p || o || l); y !== N && null != (c = x[y]); y++) {
						if (i && c) {
							d = 0, o || c.ownerDocument === p || (h(c), u = !v);
							while (m = e[d++])
								if (m(c, o || p, u)) {
									a.push(c);
									break
								}
							l && (S = T)
						}
						n && ((c = !m && c) && g--, s && b.push(c))
					}
					if (g += y, n && y !== g) {
						d = 0;
						while (m = t[d++]) m(b, w, o, u);
						if (s) {
							if (g > 0)
								while (y--) b[y] || w[y] || (w[y] = M.call(a));
							w = bt(w)
						}
						D.apply(a, w), l && !s && w.length > 0 && g + t.length > 1 && it.uniqueSort(a)
					}
					return l && (S = T, f = E), b
				};
			return n ? ot(s) : s
		}
		var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et, tt, nt, rt;
		w = "sizzle" + 1 * new Date, E = e.document, S = 0, x = 0, T = st(), N = st(), C = st(), k = function(e, t) {
			return e === t && (c = !0), 0
		}, L = 1 << 31, A = {}.hasOwnProperty, O = [], M = O.pop, _ = O.push, D = O.push, P = O.slice, H = function(e, t) {
			for (var n = 0, r = e.length; r > n; n++)
				if (e[n] === t) return n;
			return -1
		}, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", j = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", I = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + j + "*\\]", q = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", R = new RegExp(j + "+", "g"), U = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"), z = new RegExp("^" + j + "*," + j + "*"), W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"), X = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"), V = new RegExp(q), $ = new RegExp("^" + F + "$"), J = {
			ID: new RegExp("^#(" + F + ")"),
			CLASS: new RegExp("^\\.(" + F + ")"),
			TAG: new RegExp("^(" + F + "|[*])"),
			ATTR: new RegExp("^" + I),
			PSEUDO: new RegExp("^" + q),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + B + ")$", "i"),
			needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
		}, K = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, et = /'|\\/g, tt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"), nt = function(e, t, n) {
			var r = "0x" + t - 65536;
			return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
		}, rt = function() {
			h()
		};
		try {
			D.apply(O = P.call(E.childNodes), E.childNodes), O[E.childNodes.length].nodeType
		} catch (xt) {
			D = {
				apply: O.length ? function(e, t) {
					_.apply(e, P.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}
		n = it.support = {}, s = it.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, h = it.setDocument = function(e) {
			var t, i, o = e ? e.ownerDocument || e : E;
			return o !== p && 9 === o.nodeType && o.documentElement ? (p = o, d = p.documentElement, v = !s(p), (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", rt, !1) : i.attachEvent && i.attachEvent("onunload", rt)), n.attributes = ut(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), n.getElementsByTagName = ut(function(e) {
				return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
			}), n.getElementsByClassName = G.test(p.getElementsByClassName), n.getById = ut(function(e) {
				return d.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
			}), n.getById ? (r.find.ID = function(e, t) {
				var n;
				if ("undefined" != typeof t.getElementById && v) {
					n = t.getElementById(e);
					return n ? [n] : []
				}
			}, r.filter.ID = function(e) {
				var t = e.replace(tt, nt);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete r.find.ID, r.filter.ID = function(e) {
				var t = e.replace(tt, nt);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					s = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = s[i++]) 1 === n.nodeType && r.push(n);
					return r
				}
				return s
			}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
				return "undefined" != typeof t.getElementsByClassName && v ? t.getElementsByClassName(e) : void 0
			}, g = [], m = [], (n.qsa = G.test(p.querySelectorAll)) && (ut(function(e) {
				d.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
			}), ut(function(e) {
				var t = p.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
			})), (n.matchesSelector = G.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
				n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", q)
			}), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = G.test(d.compareDocumentPosition), b = t || G.test(d.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
			} : function(e, t) {
				if (t)
					while (t = t.parentNode)
						if (t === e) return !0;
				return !1
			}, k = t ? function(e, t) {
				var r;
				if (e === t) return c = !0, 0;
				r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === E && b(E, e) ? -1 : t === p || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & r ? -1 : 1)
			} : function(e, t) {
				var n, r, i, s, o, u;
				if (e === t) return c = !0, 0;
				r = 0, i = e.parentNode, s = t.parentNode, o = [e], u = [t];
				if (!i || !s) return e === p ? -1 : t === p ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
				if (i === s) return ft(e, t);
				n = e;
				while (n = n.parentNode) o.unshift(n);
				n = t;
				while (n = n.parentNode) u.unshift(n);
				while (o[r] === u[r]) r++;
				return r ? ft(o[r], u[r]) : o[r] === E ? -1 : u[r] === E ? 1 : 0
			}, p) : p
		}, it.matches = function(e, t) {
			return it(e, null, null, t)
		}, it.matchesSelector = function(e, t) {
			var r;
			if ((e.ownerDocument || e) !== p && h(e), t = t.replace(X, "='$1']"), n.matchesSelector && v && !C[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
				r = y.call(e, t);
				if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch (i) {}
			return it(t, p, null, [e]).length > 0
		}, it.contains = function(e, t) {
			return (e.ownerDocument || e) !== p && h(e), b(e, t)
		}, it.attr = function(e, t) {
			var i, s;
			(e.ownerDocument || e) !== p && h(e);
			i = r.attrHandle[t.toLowerCase()], s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
			return void 0 !== s ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
		}, it.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, it.uniqueSort = function(e) {
			var t, r = [],
				i = 0,
				s = 0;
			if (c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k), c) {
				while (t = e[s++]) t === e[s] && (i = r.push(s));
				while (i--) e.splice(r[i], 1)
			}
			return l = null, e
		}, i = it.getText = function(e) {
			var t, n = "",
				r = 0,
				s = e.nodeType;
			if (s) {
				if (1 === s || 9 === s || 11 === s) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
				} else if (3 === s || 4 === s) return e.nodeValue
			} else
				while (t = e[r++]) n += i(t);
			return n
		}, r = it.selectors = {
			cacheLength: 50,
			createPseudo: ot,
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
					return e[1] = e[1].replace(tt, nt), e[3] = (e[3] || e[4] || e[5] || "").replace(tt, nt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || it.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && it.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return J.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(tt, nt).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = T[e + " "];
					return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = it.attr(r, e);
						return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var s = "nth" !== e.slice(0, 3),
						o = "last" !== e.slice(-4),
						u = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, a) {
						var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							g = u && t.nodeName.toLowerCase(),
							y = !a && !u,
							b = !1;
						if (m) {
							if (s) {
								while (v) {
									h = t;
									while (h = h[v])
										if (u ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
									d = v = "only" === e && !d && "nextSibling"
								}
								return !0
							}
							if (d = [o ? m.firstChild : m.lastChild], o && y) {
								h = m, c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), f = l[e] || [], p = f[0] === S && f[1], b = p && f[2], h = p && m.childNodes[p];
								while (h = ++p && h && h[v] || (b = p = 0) || d.pop())
									if (1 === h.nodeType && ++b && h === t) {
										l[e] = [S, p, b];
										break
									}
							} else if (y && (h = t, c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), f = l[e] || [], p = f[0] === S && f[1], b = p), b === !1)
								while (h = ++p && h && h[v] || (b = p = 0) || d.pop())
									if ((u ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) && ++b && (y && (c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), l[e] = [S, b]), h === t)) break;
							return b -= i, b === r || b % r === 0 && b / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || it.error("unsupported pseudo: " + e);
					return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
						var r, s = i(e, t),
							o = s.length;
						while (o--) r = H(e, s[o]), e[r] = !(n[r] = s[o])
					}) : function(e) {
						return i(e, 0, n)
					}) : i
				}
			},
			pseudos: {
				not: ot(function(e) {
					var t = [],
						n = [],
						r = u(e.replace(U, "$1"));
					return r[w] ? ot(function(e, t, n, i) {
						var s, o = r(e, null, i, []),
							u = e.length;
						while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
					}) : function(e, i, s) {
						return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
					}
				}),
				has: ot(function(e) {
					return function(t) {
						return it(e, t).length > 0
					}
				}),
				contains: ot(function(e) {
					return e = e.replace(tt, nt),
						function(t) {
							return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
						}
				}),
				lang: ot(function(e) {
					return $.test(e || "") || it.error("unsupported lang: " + e), e = e.replace(tt, nt).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === d
				},
				focus: function(e) {
					return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !r.pseudos.empty(e)
				},
				header: function(e) {
					return Q.test(e.nodeName)
				},
				input: function(e) {
					return K.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: ht(function() {
					return [0]
				}),
				last: ht(function(e, t) {
					return [t - 1]
				}),
				eq: ht(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: ht(function(e, t) {
					var n;
					for (n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: ht(function(e, t) {
					var n;
					for (n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: ht(function(e, t, n) {
					var r;
					for (r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: ht(function(e, t, n) {
					var r;
					for (r = 0 > n ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, r.pseudos.nth = r.pseudos.eq;
		for (t in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) r.pseudos[t] = lt(t);
		for (t in {
				submit: !0,
				reset: !0
			}) r.pseudos[t] = ct(t);
		dt.prototype = r.filters = r.pseudos, r.setFilters = new dt, o = it.tokenize = function(e, t) {
			var n, i, s, o, u, a, f, l = N[e + " "];
			if (l) return t ? 0 : l.slice(0);
			u = e, a = [], f = r.preFilter;
			while (u) {
				n && !(i = z.exec(u)) || (i && (u = u.slice(i[0].length) || u), a.push(s = [])), n = !1, (i = W.exec(u)) && (n = i.shift(), s.push({
					value: n,
					type: i[0].replace(U, " ")
				}), u = u.slice(n.length));
				for (o in r.filter) !(i = J[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(), s.push({
					value: n,
					type: o,
					matches: i
				}), u = u.slice(n.length));
				if (!n) break
			}
			return t ? u.length : u ? it.error(e) : N(e, a).slice(0)
		};
		return u = it.compile = function(e, t) {
			var n, r = [],
				i = [],
				s = C[e + " "];
			if (!s) {
				t || (t = o(e)), n = t.length;
				while (n--) s = Et(t[n]), s[w] ? r.push(s) : i.push(s);
				s = C(e, St(i, r)), s.selector = e
			}
			return s
		}, a = it.select = function(e, t, i, s) {
			var a, f, l, c, h, p = "function" == typeof e && e,
				d = !s && o(e = p.selector || e);
			if (i = i || [], 1 === d.length) {
				if (f = d[0] = d[0].slice(0), f.length > 2 && "ID" === (l = f[0]).type && n.getById && 9 === t.nodeType && v && r.relative[f[1].type]) {
					if (t = (r.find.ID(l.matches[0].replace(tt, nt), t) || [])[0], !t) return i;
					p && (t = t.parentNode), e = e.slice(f.shift().value.length)
				}
				a = J.needsContext.test(e) ? 0 : f.length;
				while (a--) {
					if (l = f[a], r.relative[c = l.type]) break;
					if ((h = r.find[c]) && (s = h(l.matches[0].replace(tt, nt), Z.test(f[0].type) && pt(t.parentNode) || t))) {
						if (f.splice(a, 1), e = s.length && vt(f), !e) return D.apply(i, s), i;
						break
					}
				}
			}
			return (p || u(e, d))(s, t, !v, i, !t || Z.test(e) && pt(t.parentNode) || t), i
		}, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = ut(function(e) {
			return 1 & e.compareDocumentPosition(p.createElement("div"))
		}), ut(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || at("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), n.attributes && ut(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || at("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), ut(function(e) {
			return null == e.getAttribute("disabled")
		}) || at(B, function(e, t, n) {
			var r;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), it
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	u = function(e, t, r) {
		var i = [],
			s = void 0 !== r;
		while ((e = e[t]) && 9 !== e.nodeType)
			if (1 === e.nodeType) {
				if (s && n(e).is(r)) break;
				i.push(e)
			}
		return i
	}, v = function(e, t) {
		var n;
		for (n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
		return n
	}, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;
	n.filter = function(e, t, r) {
		var i = t[0];
		return r && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? n.find.matchesSelector(i, e) ? [i] : [] : n.find.matches(e, n.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, n.fn.extend({
		find: function(e) {
			var t, r = this.length,
				i = [],
				s = this;
			if ("string" != typeof e) return this.pushStack(n(e).filter(function() {
				for (t = 0; r > t; t++)
					if (n.contains(s[t], this)) return !0
			}));
			for (t = 0; r > t; t++) n.find(e, s[t], i);
			return i = this.pushStack(r > 1 ? n.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
		},
		filter: function(e) {
			return this.pushStack(z(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(z(this, e || [], !0))
		},
		is: function(e) {
			return !!z(this, "string" == typeof e && w.test(e) ? n(e) : e || [], !1).length
		}
	});
	B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(e, t, r) {
		var i, s;
		if (!e) return this;
		if (r = r || A, "string" == typeof e) {
			if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : B.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || r).find(e) : this.constructor(t).find(e);
			if (i[1]) {
				if (t = t instanceof n ? t[0] : t, n.merge(this, n.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : d, !0)), x.test(i[1]) && n.isPlainObject(t))
					for (i in t) n.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			return s = d.getElementById(i[2]), s && s.parentNode && (this.length = 1, this[0] = s), this.context = d, this.selector = e, this
		}
		return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : n.isFunction(e) ? void 0 !== r.ready ? r.ready(e) : e(n) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), n.makeArray(e, this))
	};
	C.prototype = n.fn, A = n(d);
	D = /^(?:parents|prev(?:Until|All))/, E = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	n.fn.extend({
		has: function(e) {
			var t = n(e, this),
				r = t.length;
			return this.filter(function() {
				var e;
				for (e = 0; r > e; e++)
					if (n.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var r, i, s, o, u;
			for (i = 0, s = this.length, o = [], u = w.test(e) || "string" != typeof e ? n(e, t || this.context) : 0; s > i; i++)
				for (r = this[i]; r && r !== t; r = r.parentNode)
					if (r.nodeType < 11 && (u ? u.index(r) > -1 : 1 === r.nodeType && n.find.matchesSelector(r, e))) {
						o.push(r);
						break
					}
			return this.pushStack(o.length > 1 ? n.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? h.call(n(e), this[0]) : h.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(n.uniqueSort(n.merge(this.get(), n(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});
	n.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return u(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return u(e, "parentNode", n)
		},
		next: function(e) {
			return F(e, "nextSibling")
		},
		prev: function(e) {
			return F(e, "previousSibling")
		},
		nextAll: function(e) {
			return u(e, "nextSibling")
		},
		prevAll: function(e) {
			return u(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return u(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return u(e, "previousSibling", n)
		},
		siblings: function(e) {
			return v((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return v(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || n.merge([], e.childNodes)
		}
	}, function(e, t) {
		n.fn[e] = function(r, i) {
			var s = n.map(this, t, r);
			return "Until" !== e.slice(-5) && (i = r), i && "string" == typeof i && (s = n.filter(i, s)), this.length > 1 && (E[e] || n.uniqueSort(s), D.test(e) && s.reverse()), this.pushStack(s)
		}
	});
	G = /\S+/g;
	n.Callbacks = function(e) {
		var t, r, i, s, o, u, a, f, l;
		e = "string" == typeof e ? H(e) : n.extend({}, e);
		o = [], u = [], a = -1, f = function() {
			for (s = e.once, i = t = !0; u.length; a = -1) {
				r = u.shift();
				while (++a < o.length) o[a].apply(r[0], r[1]) === !1 && e.stopOnFalse && (a = o.length, r = !1)
			}
			e.memory || (r = !1), t = !1, s && (o = r ? [] : "")
		}, l = {
			add: function() {
				return o && (r && !t && (a = o.length - 1, u.push(r)), function i(t) {
					n.each(t, function(t, r) {
						n.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== n.type(r) && i(r)
					})
				}(arguments), r && !t && f()), this
			},
			remove: function() {
				return n.each(arguments, function(e, t) {
					var r;
					while ((r = n.inArray(t, o, r)) > -1) o.splice(r, 1), a >= r && a--
				}), this
			},
			has: function(e) {
				return e ? n.inArray(e, o) > -1 : o.length > 0
			},
			empty: function() {
				return o && (o = []), this
			},
			disable: function() {
				return s = u = [], o = r = "", this
			},
			disabled: function() {
				return !o
			},
			lock: function() {
				return s = u = [], r || (o = r = ""), this
			},
			locked: function() {
				return !!s
			},
			fireWith: function(e, n) {
				return s || (n = n || [], n = [e, n.slice ? n.slice() : n], u.push(n), t || f()), this
			},
			fire: function() {
				return l.fireWith(this, arguments), this
			},
			fired: function() {
				return !!i
			}
		};
		return l
	}, n.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", n.Callbacks("once memory"), "resolved"],
					["reject", "fail", n.Callbacks("once memory"), "rejected"],
					["notify", "progress", n.Callbacks("memory")]
				],
				r = "pending",
				i = {
					state: function() {
						return r
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return n.Deferred(function(r) {
							n.each(t, function(t, o) {
								var u = n.isFunction(e[t]) && e[t];
								s[o[1]](function() {
									var e = u && u.apply(this, arguments);
									e && n.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[o[0] + "With"](this === i ? r.promise() : this, u ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? n.extend(e, i) : i
					}
				},
				s = {};
			return i.pipe = i.then, n.each(t, function(e, n) {
				var o = n[2],
					u = n[3];
				i[n[1]] = o.add, u && o.add(function() {
					r = u
				}, t[1 ^ e][2].disable, t[2][2].lock), s[n[0]] = function() {
					return s[n[0] + "With"](this === s ? i : this, arguments), this
				}, s[n[0] + "With"] = o.fireWith
			}), i.promise(s), e && e.call(s, s), s
		},
		when: function(t) {
			var r, i, s, o = 0,
				u = e.call(arguments),
				a = u.length,
				f = 1 !== a || t && n.isFunction(t.promise) ? a : 0,
				l = 1 === f ? t : n.Deferred(),
				c = function(t, n, i) {
					return function(s) {
						n[t] = this, i[t] = arguments.length > 1 ? e.call(arguments) : s, i === r ? l.notifyWith(n, i) : --f || l.resolveWith(n, i)
					}
				};
			if (a > 1)
				for (r = new Array(a), i = new Array(a), s = new Array(a); a > o; o++) u[o] && n.isFunction(u[o].promise) ? u[o].promise().progress(c(o, i, r)).done(c(o, s, u)).fail(l.reject) : --f;
			return f || l.resolveWith(s, u), l.promise()
		}
	});
	n.fn.ready = function(e) {
		return n.ready.promise().done(e), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? n.readyWait++ : n.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, e !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
		}
	});
	n.ready.promise = function(e) {
		return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(e)
	}, n.ready.promise();
	K = function(e, t, r, i, s, o, u) {
		var a = 0,
			f = e.length,
			l = null == r;
		if ("object" === n.type(r)) {
			s = !0;
			for (a in r) K(e, t, a, r[a], !0, o, u)
		} else if (void 0 !== i && (s = !0, n.isFunction(i) || (u = !0), l && (u ? (t.call(e, i), t = null) : (l = t, t = function(e, t, r) {
				return l.call(n(e), r)
			})), t))
			for (; f > a; a++) t(e[a], r, u ? i : i.call(e[a], a, t(e[a], r)));
		return s ? e : l ? t.call(e) : f ? t(e[0], r) : o
	}, L = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};
	M.uid = 1, M.prototype = {
		register: function(e, t) {
			var n = t || {};
			return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
				value: n,
				writable: !0,
				configurable: !0
			}), e[this.expando]
		},
		cache: function(e) {
			var t;
			if (!L(e)) return {};
			t = e[this.expando];
			return t || (t = {}, L(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[t] = n;
			else
				for (r in t) i[r] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
		},
		access: function(e, t, r) {
			var i;
			return void 0 === t || t && "string" == typeof t && void 0 === r ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, n.camelCase(t))) : (this.set(e, t, r), void 0 !== r ? r : t)
		},
		remove: function(e, t) {
			var r, i, s, o = e[this.expando];
			if (void 0 !== o) {
				if (void 0 === t) this.register(e);
				else {
					n.isArray(t) ? i = t.concat(t.map(n.camelCase)) : (s = n.camelCase(t), t in o ? i = [t, s] : (i = s, i = i in o ? [i] : i.match(G) || [])), r = i.length;
					while (r--) delete o[i[r]]
				}(void 0 === t || n.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !n.isEmptyObject(t)
		}
	};
	N = new M, O = new M, P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g;
	n.extend({
		hasData: function(e) {
			return O.hasData(e) || N.hasData(e)
		},
		data: function(e, t, n) {
			return O.access(e, t, n)
		},
		removeData: function(e, t) {
			O.remove(e, t)
		},
		_data: function(e, t, n) {
			return N.access(e, t, n)
		},
		_removeData: function(e, t) {
			N.remove(e, t)
		}
	}), n.fn.extend({
		data: function(e, t) {
			var r, i, s, o = this[0],
				u = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (s = O.get(o), 1 === o.nodeType && !N.get(o, "hasDataAttrs"))) {
					r = u.length;
					while (r--) u[r] && (i = u[r].name, 0 === i.indexOf("data-") && (i = n.camelCase(i.slice(5)), R(o, i, s[i])));
					N.set(o, "hasDataAttrs", !0)
				}
				return s
			}
			return "object" == typeof e ? this.each(function() {
				O.set(this, e)
			}) : K(this, function(t) {
				var r, i;
				if (o && void 0 === t) {
					if (r = O.get(o, e) || O.get(o, e.replace(Q, "-$&").toLowerCase()), void 0 !== r) return r;
					if (i = n.camelCase(e), r = O.get(o, i), void 0 !== r) return r;
					if (r = R(o, i, void 0), void 0 !== r) return r
				} else i = n.camelCase(e), this.each(function() {
					var n = O.get(this, i);
					O.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && O.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				O.remove(this, e)
			})
		}
	}), n.extend({
		queue: function(e, t, r) {
			var i;
			return e ? (t = (t || "fx") + "queue", i = N.get(e, t), r && (!i || n.isArray(r) ? i = N.access(e, t, n.makeArray(r)) : i.push(r)), i || []) : void 0
		},
		dequeue: function(e, t) {
			var r, i, s, o, u;
			t = t || "fx";
			r = n.queue(e, t), i = r.length, s = r.shift(), o = n._queueHooks(e, t), u = function() {
				n.dequeue(e, t)
			};
			"inprogress" === s && (s = r.shift(), i--), s && ("fx" === t && r.unshift("inprogress"), delete o.stop, s.call(e, u, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var r = t + "queueHooks";
			return N.get(e, r) || N.access(e, r, {
				empty: n.Callbacks("once memory").add(function() {
					N.remove(e, [t + "queue", r])
				})
			})
		}
	}), n.fn.extend({
		queue: function(e, t) {
			var r = 2;
			return "string" != typeof e && (t = e, e = "fx", r--), arguments.length < r ? n.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var r = n.queue(this, e, t);
				n._queueHooks(this, e), "fx" === e && "inprogress" !== r[0] && n.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				n.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var r, i = 1,
				s = n.Deferred(),
				o = this,
				u = this.length,
				a = function() {
					--i || s.resolveWith(o, [o])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (u--) r = N.get(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
			return a(), s.promise(t)
		}
	});
	S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), U = ["Top", "Right", "Bottom", "Left"], V = function(e, t) {
		return e = t || e, "none" === n.css(e, "display") || !n.contains(e.ownerDocument, e)
	};
	X = /^(?:checkbox|radio)$/i, Y = /<([\w:-]+)/, Z = /^$|\/(?:java|ecma)script/i, $ = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};
	$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;
	ba = /<|&#?\w+;/;
	! function() {
		var e = d.createDocumentFragment(),
			t = e.appendChild(d.createElement("div")),
			n = d.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), l.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	}();
	da = /^key/, ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fa = /^([^.]*)(?:\.(.+)|)/;
	n.event = {
		global: {},
		add: function(e, t, r, i, s) {
			var o, u, a, f, l, c, h, p, d, v, m, g = N.get(e);
			if (g) {
				r.handler && (o = r, r = o.handler, s = o.selector), r.guid || (r.guid = n.guid++), (f = g.events) || (f = g.events = {}), (u = g.handle) || (u = g.handle = function(t) {
					return "undefined" != typeof n && n.event.triggered !== t.type ? n.event.dispatch.apply(e, arguments) : void 0
				}), t = (t || "").match(G) || [""], l = t.length;
				while (l--) a = fa.exec(t[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), d && (h = n.event.special[d] || {}, d = (s ? h.delegateType : h.bindType) || d, h = n.event.special[d] || {}, c = n.extend({
					type: d,
					origType: m,
					data: i,
					handler: r,
					guid: r.guid,
					selector: s,
					needsContext: s && n.expr.match.needsContext.test(s),
					namespace: v.join(".")
				}, o), (p = f[d]) || (p = f[d] = [], p.delegateCount = 0, h.setup && h.setup.call(e, i, v, u) !== !1 || e.addEventListener && e.addEventListener(d, u)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = r.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), n.event.global[d] = !0)
			}
		},
		remove: function(e, t, r, i, s) {
			var o, u, a, f, l, c, h, p, d, v, m, g = N.hasData(e) && N.get(e);
			if (g && (f = g.events)) {
				t = (t || "").match(G) || [""], l = t.length;
				while (l--)
					if (a = fa.exec(t[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), d) {
						h = n.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, p = f[d] || [], a = a[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length;
						while (o--) c = p[o], !s && m !== c.origType || r && r.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(e, c));
						u && !p.length && (h.teardown && h.teardown.call(e, v, g.handle) !== !1 || n.removeEvent(e, d, g.handle), delete f[d])
					} else
						for (d in f) n.event.remove(e, d + t[l], r, i, !0);
				n.isEmptyObject(f) && N.remove(e, "handle events")
			}
		},
		dispatch: function(t) {
			var r, i, s, o, u, a, f, l, c;
			t = n.event.fix(t);
			a = [], f = e.call(arguments), l = (N.get(this, "events") || {})[t.type] || [], c = n.event.special[t.type] || {};
			if (f[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
				a = n.event.handlers.call(this, t, l), r = 0;
				while ((o = a[r++]) && !t.isPropagationStopped()) {
					t.currentTarget = o.elem, i = 0;
					while ((u = o.handlers[i++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(u.namespace) || (t.handleObj = u, t.data = u.data, s = ((n.event.special[u.origType] || {}).handle || u.handler).apply(o.elem, f), void 0 !== s && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(e, t) {
			var r, i, s, o, u = [],
				a = t.delegateCount,
				f = e.target;
			if (a && f.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
				for (; f !== this; f = f.parentNode || this)
					if (1 === f.nodeType && (f.disabled !== !0 || "click" !== e.type)) {
						for (i = [], r = 0; a > r; r++) o = t[r], s = o.selector + " ", void 0 === i[s] && (i[s] = o.needsContext ? n(s, this).index(f) > -1 : n.find(s, this, null, [f]).length), i[s] && i.push(o);
						i.length && u.push({
							elem: f,
							handlers: i
						})
					}
			return a < t.length && u.push({
				elem: this,
				handlers: t.slice(a)
			}), u
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, s = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || d, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		fix: function(e) {
			var t, r, i, s, o, u;
			if (e[n.expando]) return e;
			s = e.type, o = e, u = this.fixHooks[s];
			u || (this.fixHooks[s] = u = ea.test(s) ? this.mouseHooks : da.test(s) ? this.keyHooks : {}), i = u.props ? this.props.concat(u.props) : this.props, e = new n.Event(o), t = i.length;
			while (t--) r = i[t], e[r] = o[r];
			return e.target || (e.target = d), 3 === e.target.nodeType && (e.target = e.target.parentNode), u.filter ? u.filter(e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== ia() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === ia() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return n.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, n.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, n.Event = function(e, t) {
		return this instanceof n.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? ga : ha) : this.type = e, t && n.extend(this, t), this.timeStamp = e && e.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(e, t)
	}, n.Event.prototype = {
		constructor: n.Event,
		isDefaultPrevented: ha,
		isPropagationStopped: ha,
		isImmediatePropagationStopped: ha,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = ga, e && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = ga, e && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = ga, e && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		n.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var r, i = this,
					s = e.relatedTarget,
					o = e.handleObj;
				return s && (s === i || n.contains(i, s)) || (e.type = o.origType, r = o.handler.apply(this, arguments), e.type = t), r
			}
		}
	}), n.fn.extend({
		on: function(e, t, n, r) {
			return ja(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return ja(this, e, t, n, r, 1)
		},
		off: function(e, t, r) {
			var i, s;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, n(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (s in e) this.off(s, t, e[s]);
				return this
			}
			return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = ha), this.each(function() {
				n.event.remove(this, e, r, t)
			})
		}
	});
	ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, la = /<script|<style|<link/i, ma = /checked\s*(?:[^=]|=\s*.checked.)/i, na = /^true\/(.*)/, oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	n.extend({
		htmlPrefilter: function(e) {
			return e.replace(ka, "<$1></$2>")
		},
		clone: function(e, t, r) {
			var i, s, o, u, a = e.cloneNode(!0),
				f = n.contains(e.ownerDocument, e);
			if (!(l.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || n.isXMLDoc(e)))
				for (u = _(a), o = _(e), i = 0, s = o.length; s > i; i++) ta(o[i], u[i]);
			if (t)
				if (r)
					for (o = o || _(e), u = u || _(a), i = 0, s = o.length; s > i; i++) sa(o[i], u[i]);
				else sa(e, a);
			return u = _(a, "script"), u.length > 0 && aa(u, !f && _(e, "script")), a
		},
		cleanData: function(e) {
			var t, r, i, s, o;
			for (s = n.event.special, o = 0; void 0 !== (r = e[o]); o++)
				if (L(r)) {
					if (t = r[N.expando]) {
						if (t.events)
							for (i in t.events) s[i] ? n.event.remove(r, i) : n.removeEvent(r, i, t.handle);
						r[N.expando] = void 0
					}
					r[O.expando] && (r[O.expando] = void 0)
				}
		}
	}), n.fn.extend({
		domManip: ua,
		detach: function(e) {
			return va(this, e, !0)
		},
		remove: function(e) {
			return va(this, e)
		},
		text: function(e) {
			return K(this, function(e) {
				return void 0 === e ? n.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return ua(this, arguments, function(e) {
				var t;
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					t = pa(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return ua(this, arguments, function(e) {
				var t;
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					t = pa(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return ua(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return ua(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			var e, t;
			for (t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (n.cleanData(_(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return n.clone(this, e, t)
			})
		},
		html: function(e) {
			return K(this, function(e) {
				var t = this[0] || {},
					r = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !la.test(e) && !$[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = n.htmlPrefilter(e);
					try {
						for (; i > r; r++) t = this[r] || {}, 1 === t.nodeType && (n.cleanData(_(t, !1)), t.innerHTML = e);
						t = 0
					} catch (s) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return ua(this, arguments, function(t) {
				var r = this.parentNode;
				n.inArray(this, e) < 0 && (n.cleanData(_(this)), r && r.replaceChild(t, this))
			}, e)
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		n.fn[e] = function(e) {
			var r, i, s, o, u;
			for (i = [], s = n(e), o = s.length - 1, u = 0; o >= u; u++) r = u === o ? this : this.clone(!0), n(s[u])[t](r), g.apply(i, r.get());
			return this.pushStack(i)
		}
	});
	xa = {
		HTML: "block",
		BODY: "block"
	};
	Aa = /^margin/, Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ca = function(e) {
		var t = e.ownerDocument.defaultView;
		return t && t.opener || (t = a), t.getComputedStyle(e)
	}, Da = function(e, t, n, r) {
		var i, s, o = {};
		for (s in t) o[s] = e.style[s], e.style[s] = t[s];
		i = n.apply(e, r || []);
		for (s in t) e.style[s] = o[s];
		return i
	}, Ea = d.documentElement;
	! function() {
		var e, t, r, i, s = d.createElement("div"),
			o = d.createElement("div");
		if (o.style) {
			o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o);

			function u() {
				var n;
				o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Ea.appendChild(s);
				n = a.getComputedStyle(o);
				e = "1%" !== n.top, i = "2px" === n.marginLeft, t = "4px" === n.width, o.style.marginRight = "50%", r = "4px" === n.marginRight, Ea.removeChild(s)
			}
			n.extend(l, {
				pixelPosition: function() {
					return u(), e
				},
				boxSizingReliable: function() {
					return null == t && u(), t
				},
				pixelMarginRight: function() {
					return null == t && u(), r
				},
				reliableMarginLeft: function() {
					return null == t && u(), i
				},
				reliableMarginRight: function() {
					var e, t = o.appendChild(d.createElement("div"));
					return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", o.style.width = "1px", Ea.appendChild(s), e = !parseFloat(a.getComputedStyle(t).marginRight), Ea.removeChild(s), o.removeChild(t), e
				}
			})
		}
	}();
	Ha = /^(none|table(?!-c[ea]).+)/, Ia = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	}, Ja = {
		letterSpacing: "0",
		fontWeight: "400"
	}, Ka = ["Webkit", "O", "Moz", "ms"], La = d.createElement("div").style;
	n.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					var n;
					if (t) {
						n = Fa(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
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
		style: function(e, t, r, i) {
			var s, o, u, a, f;
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				a = n.camelCase(t), f = e.style;
				return t = n.cssProps[a] || (n.cssProps[a] = Ma(a) || a), u = n.cssHooks[t] || n.cssHooks[a], void 0 === r ? u && "get" in u && void 0 !== (s = u.get(e, !1, i)) ? s : f[t] : (o = typeof r, "string" === o && (s = T.exec(r)) && s[1] && (r = W(e, t, s), o = "number"), null != r && r === r && ("number" === o && (r += s && s[3] || (n.cssNumber[a] ? "" : "px")), l.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (f[t] = "inherit"), u && "set" in u && void 0 === (r = u.set(e, r, i)) || (f[t] = r)), void 0)
			}
		},
		css: function(e, t, r, i) {
			var s, o, u, a = n.camelCase(t);
			return t = n.cssProps[a] || (n.cssProps[a] = Ma(a) || a), u = n.cssHooks[t] || n.cssHooks[a], u && "get" in u && (s = u.get(e, !0, r)), void 0 === s && (s = Fa(e, t, i)), "normal" === s && t in Ja && (s = Ja[t]), "" === r || r ? (o = parseFloat(s), r === !0 || isFinite(o) ? o || 0 : s) : s
		}
	}), n.each(["height", "width"], function(e, t) {
		n.cssHooks[t] = {
			get: function(e, r, i) {
				return r ? Ha.test(n.css(e, "display")) && 0 === e.offsetWidth ? Da(e, Ia, function() {
					return Pa(e, t, i)
				}) : Pa(e, t, i) : void 0
			},
			set: function(e, r, i) {
				var s, o = i && Ca(e),
					u = i && Oa(e, t, i, "border-box" === n.css(e, "boxSizing", !1, o), o);
				return u && (s = T.exec(r)) && "px" !== (s[3] || "px") && (e.style[t] = r, r = n.css(e, t)), Na(e, r, u)
			}
		}
	}), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(e, t) {
		return t ? (parseFloat(Fa(e, "marginLeft")) || e.getBoundingClientRect().left - Da(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px" : void 0
	}), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(e, t) {
		return t ? Da(e, {
			display: "inline-block"
		}, Fa, [e, "marginRight"]) : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		n.cssHooks[e + t] = {
			expand: function(n) {
				var r, i, s;
				for (r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + U[r] + t] = s[r] || s[r - 2] || s[0];
				return i
			}
		}, Aa.test(e) || (n.cssHooks[e + t].set = Na)
	}), n.fn.extend({
		css: function(e, t) {
			return K(this, function(e, t, r) {
				var i, s, o = {},
					u = 0;
				if (n.isArray(t)) {
					for (i = Ca(e), s = t.length; s > u; u++) o[t[u]] = n.css(e, t[u], !1, i);
					return o
				}
				return void 0 !== r ? n.style(e, t, r) : n.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return Qa(this, !0)
		},
		hide: function() {
			return Qa(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				V(this) ? n(this).show() : n(this).hide()
			})
		}
	});
	n.Tween = Ra, Ra.prototype = {
		constructor: Ra,
		init: function(e, t, r, i, s, o) {
			this.elem = e, this.prop = r, this.easing = s || n.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (n.cssNumber[r] ? "" : "px")
		},
		cur: function() {
			var e = Ra.propHooks[this.prop];
			return e && e.get ? e.get(this) : Ra.propHooks._default.get(this)
		},
		run: function(e) {
			var t, r = Ra.propHooks[this.prop];
			return this.options.duration ? this.pos = t = n.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : Ra.propHooks._default.set(this), this
		}
	}, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = n.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
			},
			set: function(e) {
				n.fx.step[e.prop] ? n.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[n.cssProps[e.prop]] && !n.cssHooks[e.prop] ? e.elem[e.prop] = e.now : n.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, n.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, n.fx = Ra.prototype.init, n.fx.step = {};
	Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
	n.Animation = n.extend(_a, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return W(n.elem, e, T.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				var r, i, s;
				n.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(G);
				for (i = 0, s = e.length; s > i; i++) r = e[i], _a.tweeners[r] = _a.tweeners[r] || [], _a.tweeners[r].unshift(t)
			},
			prefilters: [Za],
			prefilter: function(e, t) {
				t ? _a.prefilters.unshift(e) : _a.prefilters.push(e)
			}
		}), n.speed = function(e, t, r) {
			var i = e && "object" == typeof e ? n.extend({}, e) : {
				complete: r || !r && t || n.isFunction(e) && e,
				duration: e,
				easing: r && t || t && !n.isFunction(t) && t
			};
			return i.duration = n.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in n.fx.speeds ? n.fx.speeds[i.duration] : n.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				n.isFunction(i.old) && i.old.call(this), i.queue && n.dequeue(this, i.queue)
			}, i
		}, n.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(V).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, r, i) {
				var s = n.isEmptyObject(e),
					o = n.speed(t, r, i),
					u = function() {
						var t = _a(this, n.extend({}, e), o);
						(s || N.get(this, "finish")) && t.stop(!0)
					};
				return u.finish = u, s || o.queue === !1 ? this.each(u) : this.queue(o.queue, u)
			},
			stop: function(e, t, r) {
				var i = function(e) {
					var t = e.stop;
					delete e.stop, t(r)
				};
				return "string" != typeof e && (r = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						s = null != e && e + "queueHooks",
						o = n.timers,
						u = N.get(this);
					if (s) u[s] && u[s].stop && i(u[s]);
					else
						for (s in u) u[s] && u[s].stop && Va.test(s) && i(u[s]);
					for (s = o.length; s--;) o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(r), t = !1, o.splice(s, 1));
					!t && r || n.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, r = N.get(this),
						i = r[e + "queue"],
						s = r[e + "queueHooks"],
						o = n.timers,
						u = i ? i.length : 0;
					for (r.finish = !0, n.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; u > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete r.finish
				})
			}
		}), n.each(["toggle", "show", "hide"], function(e, t) {
			var r = n.fn[t];
			n.fn[t] = function(e, n, i) {
				return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(Xa(t, !0), e, n, i)
			}
		}), n.each({
			slideDown: Xa("show"),
			slideUp: Xa("hide"),
			slideToggle: Xa("toggle"),
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
			n.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), n.timers = [], n.fx.tick = function() {
			var e, t = 0,
				r = n.timers;
			for (Sa = n.now(); t < r.length; t++) e = r[t], e() || r[t] !== e || r.splice(t--, 1);
			r.length || n.fx.stop(), Sa = void 0
		}, n.fx.timer = function(e) {
			n.timers.push(e), e() ? n.fx.start() : n.timers.pop()
		}, n.fx.interval = 13, n.fx.start = function() {
			Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
		}, n.fx.stop = function() {
			a.clearInterval(Ta), Ta = null
		}, n.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, n.fn.delay = function(e, t) {
			return e = n.fx ? n.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = a.setTimeout(t, e);
				n.stop = function() {
					a.clearTimeout(r)
				}
			})
		},
		function() {
			var e = d.createElement("input"),
				t = d.createElement("select"),
				n = t.appendChild(d.createElement("option"));
			e.type = "checkbox", l.checkOn = "" !== e.value, l.optSelected = n.selected, t.disabled = !0, l.optDisabled = !n.disabled, e = d.createElement("input"), e.value = "t", e.type = "radio", l.radioValue = "t" === e.value
		}();
	bb = n.expr.attrHandle;
	n.fn.extend({
		attr: function(e, t) {
			return K(this, n.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				n.removeAttr(this, e)
			})
		}
	}), n.extend({
		attr: function(e, t, r) {
			var i, s, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? n.prop(e, t, r) : (1 === o && n.isXMLDoc(e) || (t = t.toLowerCase(), s = n.attrHooks[t] || (n.expr.match.bool.test(t) ? ab : void 0)), void 0 !== r ? null === r ? void n.removeAttr(e, t) : s && "set" in s && void 0 !== (i = s.set(e, r, t)) ? i : (e
				.setAttribute(t, r + ""), r) : s && "get" in s && null !== (i = s.get(e, t)) ? i : (i = n.find.attr(e, t), null == i ? void 0 : i))
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					var r;
					if (!l.radioValue && "radio" === t && n.nodeName(e, "input")) {
						r = e.value;
						return e.setAttribute("type", t), r && (e.value = r), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var r, i, s = 0,
				o = t && t.match(G);
			if (o && 1 === e.nodeType)
				while (r = o[s++]) i = n.propFix[r] || r, n.expr.match.bool.test(r) && (e[i] = !1), e.removeAttribute(r)
		}
	}), ab = {
		set: function(e, t, r) {
			return t === !1 ? n.removeAttr(e, r) : e.setAttribute(r, r), r
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var r = bb[t] || n.find.attr;
		bb[t] = function(e, t, n) {
			var i, s;
			return n || (s = bb[t], bb[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, bb[t] = s), i
		}
	});
	cb = /^(?:input|select|textarea|button)$/i, db = /^(?:a|area)$/i;
	n.fn.extend({
		prop: function(e, t) {
			return K(this, n.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[n.propFix[e] || e]
			})
		}
	}), n.extend({
		prop: function(e, t, r) {
			var i, s, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && n.isXMLDoc(e) || (t = n.propFix[t] || t, s = n.propHooks[t]), void 0 !== r ? s && "set" in s && void 0 !== (i = s.set(e, r, t)) ? i : e[t] = r : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = n.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : cb.test(e.nodeName) || db.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), l.optSelected || (n.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		n.propFix[this.toLowerCase()] = this
	});
	eb = /[\t\r\n\f]/g;
	n.fn.extend({
		addClass: function(e) {
			var t, r, i, s, o, u, a, f = 0;
			if (n.isFunction(e)) return this.each(function(t) {
				n(this).addClass(e.call(this, t, fb(this)))
			});
			if ("string" == typeof e && e) {
				t = e.match(G) || [];
				while (r = this[f++])
					if (s = fb(r), i = 1 === r.nodeType && (" " + s + " ").replace(eb, " ")) {
						u = 0;
						while (o = t[u++]) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						a = n.trim(i), s !== a && r.setAttribute("class", a)
					}
			}
			return this
		},
		removeClass: function(e) {
			var t, r, i, s, o, u, a, f = 0;
			if (n.isFunction(e)) return this.each(function(t) {
				n(this).removeClass(e.call(this, t, fb(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof e && e) {
				t = e.match(G) || [];
				while (r = this[f++])
					if (s = fb(r), i = 1 === r.nodeType && (" " + s + " ").replace(eb, " ")) {
						u = 0;
						while (o = t[u++])
							while (i.indexOf(" " + o + " ") > -1) i = i.replace(" " + o + " ", " ");
						a = n.trim(i), s !== a && r.setAttribute("class", a)
					}
			}
			return this
		},
		toggleClass: function(e, t) {
			var r = typeof e;
			return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : n.isFunction(e) ? this.each(function(r) {
				n(this).toggleClass(e.call(this, r, fb(this), t), t)
			}) : this.each(function() {
				var t, i, s, o;
				if ("string" === r) {
					i = 0, s = n(this), o = e.match(G) || [];
					while (t = o[i++]) s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
				} else void 0 !== e && "boolean" !== r || (t = fb(this), t && N.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : N.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n = 0,
				r = " " + e + " ";
			while (t = this[n++])
				if (1 === t.nodeType && (" " + fb(t) + " ").replace(eb, " ").indexOf(r) > -1) return !0;
			return !1
		}
	});
	gb = /\r/g, hb = /[\x20\t\r\n\f]+/g;
	n.fn.extend({
		val: function(e) {
			var t, r, i, s = this[0];
			if (arguments.length) return i = n.isFunction(e), this.each(function(r) {
				var s;
				1 === this.nodeType && (s = i ? e.call(this, r, n(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : n.isArray(s) && (s = n.map(s, function(e) {
					return null == e ? "" : e + ""
				})), t = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
			});
			if (s) return t = n.valHooks[s.type] || n.valHooks[s.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(s, "value")) ? r : (r = s.value, "string" == typeof r ? r.replace(gb, "") : null == r ? "" : r)
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = n.find.attr(e, "value");
					return null != t ? t : n.trim(n.text(e)).replace(hb, " ")
				}
			},
			select: {
				get: function(e) {
					var t, r, i, s, o, u, a, f;
					for (i = e.options, s = e.selectedIndex, o = "select-one" === e.type || 0 > s, u = o ? null : [], a = o ? s + 1 : i.length, f = 0 > s ? a : o ? s : 0; a > f; f++)
						if (r = i[f], (r.selected || f === s) && (l.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !n.nodeName(r.parentNode, "optgroup"))) {
							if (t = n(r).val(), o) return t;
							u.push(t)
						}
					return u
				},
				set: function(e, t) {
					var r, i, s = e.options,
						o = n.makeArray(t),
						u = s.length;
					while (u--) i = s[u], (i.selected = n.inArray(n.valHooks.option.get(i), o) > -1) && (r = !0);
					return r || (e.selectedIndex = -1), o
				}
			}
		}
	}), n.each(["radio", "checkbox"], function() {
		n.valHooks[this] = {
			set: function(e, t) {
				return n.isArray(t) ? e.checked = n.inArray(n(e).val(), t) > -1 : void 0
			}
		}, l.checkOn || (n.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	ib = /^(?:focusinfocus|focusoutblur)$/;
	n.extend(n.event, {
		trigger: function(e, t, r, i) {
			var s, o, u, f, l, c, h, p = [r || d],
				v = k.call(e, "type") ? e.type : e,
				m = k.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = u = r = r || d, 3 !== r.nodeType && 8 !== r.nodeType && !ib.test(v + n.event.triggered) && (v.indexOf(".") > -1 && (m = v.split("."), v = m.shift(), m.sort()), l = v.indexOf(":") < 0 && "on" + v, e = e[n.expando] ? e : new n.Event(v, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : n.makeArray(t, [e]), h = n.event.special[v] || {}, i || !h.trigger || h.trigger.apply(r, t) !== !1)) {
				if (!i && !h.noBubble && !n.isWindow(r)) {
					for (f = h.delegateType || v, ib.test(f + v) || (o = o.parentNode); o; o = o.parentNode) p.push(o), u = o;
					u === (r.ownerDocument || d) && p.push(u.defaultView || u.parentWindow || a)
				}
				s = 0;
				while ((o = p[s++]) && !e.isPropagationStopped()) e.type = s > 1 ? f : h.bindType || v, c = (N.get(o, "events") || {})[e.type] && N.get(o, "handle"), c && c.apply(o, t), c = l && o[l], c && c.apply && L(o) && (e.result = c.apply(o, t), e.result === !1 && e.preventDefault());
				return e.type = v, i || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), t) !== !1 || !L(r) || l && n.isFunction(r[v]) && !n.isWindow(r) && (u = r[l], u && (r[l] = null), n.event.triggered = v, r[v](), n.event.triggered = void 0, u && (r[l] = u)), e.result
			}
		},
		simulate: function(e, t, r) {
			var i = n.extend(new n.Event, r, {
				type: e,
				isSimulated: !0
			});
			n.event.trigger(i, null, t), i.isDefaultPrevented() && r.preventDefault()
		}
	}), n.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				n.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var r = this[0];
			return r ? n.event.trigger(e, t, r, !0) : void 0
		}
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		n.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), n.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), l.focusin = "onfocusin" in a, l.focusin || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var r = function(e) {
			n.event.simulate(t, e.target, n.event.fix(e))
		};
		n.event.special[t] = {
			setup: function() {
				var n = this.ownerDocument || this,
					i = N.access(n, t);
				i || n.addEventListener(e, r, !0), N.access(n, t, (i || 0) + 1)
			},
			teardown: function() {
				var n = this.ownerDocument || this,
					i = N.access(n, t) - 1;
				i ? N.access(n, t, i) : (n.removeEventListener(e, r, !0), N.remove(n, t))
			}
		}
	});
	jb = a.location, kb = n.now(), lb = /\?/;
	n.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, n.parseXML = function(e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new a.DOMParser).parseFromString(e, "text/xml")
		} catch (r) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + e), t
	};
	mb = /#.*$/, nb = /([?&])_=[^&]*/, ob = /^(.*?):[ \t]*([^\r\n]*)$/gm, pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qb = /^(?:GET|HEAD)$/, rb = /^\/\//, sb = {}, tb = {}, ub = "*/".concat("*"), vb = d.createElement("a");
	vb.href = jb.href;
	n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: jb.href,
			type: "GET",
			isLocal: pb.test(jb.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": ub,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? yb(yb(e, n.ajaxSettings), t) : yb(n.ajaxSettings, e)
		},
		ajaxPrefilter: wb(sb),
		ajaxTransport: wb(tb),
		ajax: function(e, t) {
			function T(e, t, o, f) {
				var c, d, b, w, S, T = t;
				2 !== E && (E = 2, u && a.clearTimeout(u), r = void 0, s = f || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, o && (w = zb(h, x, o)), w = Ab(h, w, x, c), c ? (h.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (n.lastModified[i] = S), S = x.getResponseHeader("etag"), S && (n.etag[i] = S)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, d = w.data, b = w.error, c = !b)) : (b = T, !e && T || (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || T) + "", c ? m.resolveWith(p, [d, T, x]) : m.rejectWith(p, [x, T, b]), x.statusCode(y), y = void 0, l && v.trigger(c ? "ajaxSuccess" : "ajaxError", [x, h, c ? d : b]), g.fireWith(p, [x, T]), l && (v.trigger("ajaxComplete", [x, h]), --n.active || n.event.trigger("ajaxStop")))
			}
			var r, i, s, o, u, f, l, c, h, p, v, m, g, y, b, w, E, S, x;
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			h = n.ajaxSetup({}, t), p = h.context || h, v = h.context && (p.nodeType || p.jquery) ? n(p) : n.event, m = n.Deferred(), g = n.Callbacks("once memory"), y = h.statusCode || {}, b = {}, w = {}, E = 0, S = "canceled", x = {
				readyState: 0,
				getResponseHeader: function(e) {
					var t;
					if (2 === E) {
						if (!o) {
							o = {};
							while (t = ob.exec(s)) o[t[1].toLowerCase()] = t[2]
						}
						t = o[e.toLowerCase()]
					}
					return null == t ? null : t
				},
				getAllResponseHeaders: function() {
					return 2 === E ? s : null
				},
				setRequestHeader: function(e, t) {
					var n = e.toLowerCase();
					return E || (e = w[n] = w[n] || e, b[e] = t), this
				},
				overrideMimeType: function(e) {
					return E || (h.mimeType = e), this
				},
				statusCode: function(e) {
					var t;
					if (e)
						if (2 > E)
							for (t in e) y[t] = [y[t], e[t]];
						else x.always(e[x.status]);
					return this
				},
				abort: function(e) {
					var t = e || S;
					return r && r.abort(t), T(0, t), this
				}
			};
			if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, h.url = ((e || h.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = n.trim(h.dataType || "*").toLowerCase().match(G) || [""], null == h.crossDomain) {
				f = d.createElement("a");
				try {
					f.href = h.url, f.href = f.href, h.crossDomain = vb.protocol + "//" + vb.host != f.protocol + "//" + f.host
				} catch (N) {
					h.crossDomain = !0
				}
			}
			if (h.data && h.processData && "string" != typeof h.data && (h.data = n.param(h.data, h.traditional)), xb(sb, h, t, x), 2 === E) return x;
			l = n.event && h.global, l && 0 === n.active++ && n.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qb.test(h.type), i = h.url, h.hasContent || (h.data && (i = h.url += (lb.test(i) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = nb.test(i) ? i.replace(nb, "$1_=" + kb++) : i + (lb.test(i) ? "&" : "?") + "_=" + kb++)), h.ifModified && (n.lastModified[i] && x.setRequestHeader("If-Modified-Since", n.lastModified[i]), n.etag[i] && x.setRequestHeader("If-None-Match", n.etag[i])), (h.data && h.hasContent && h.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : h.accepts["*"]);
			for (c in h.headers) x.setRequestHeader(c, h.headers[c]);
			if (!h.beforeSend || h.beforeSend.call(p, x, h) !== !1 && 2 !== E) {
				S = "abort";
				for (c in {
						success: 1,
						error: 1,
						complete: 1
					}) x[c](h[c]);
				if (r = xb(tb, h, t, x)) {
					if (x.readyState = 1, l && v.trigger("ajaxSend", [x, h]), 2 === E) return x;
					h.async && h.timeout > 0 && (u = a.setTimeout(function() {
						x.abort("timeout")
					}, h.timeout));
					try {
						E = 1, r.send(b, T)
					} catch (N) {
						if (!(2 > E)) throw N;
						T(-1, N)
					}
				} else T(-1, "No Transport");
				return x
			}
			return x.abort()
		},
		getJSON: function(e, t, r) {
			return n.get(e, t, r, "json")
		},
		getScript: function(e, t) {
			return n.get(e, void 0, t, "script")
		}
	}), n.each(["get", "post"], function(e, t) {
		n[t] = function(e, r, i, s) {
			return n.isFunction(r) && (s = s || i, i = r, r = void 0), n.ajax(n.extend({
				url: e,
				type: t,
				dataType: s,
				data: r,
				success: i
			}, n.isPlainObject(e) && e))
		}
	}), n._evalUrl = function(e) {
		return n.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, n.fn.extend({
		wrapAll: function(e) {
			var t;
			return n.isFunction(e) ? this.each(function(t) {
				n(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = n(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return n.isFunction(e) ? this.each(function(t) {
				n(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = n(this),
					r = t.contents();
				r.length ? r.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = n.isFunction(e);
			return this.each(function(r) {
				n(this).wrapAll(t ? e.call(this, r) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	}), n.expr.filters.hidden = function(e) {
		return !n.expr.filters.visible(e)
	}, n.expr.filters.visible = function(e) {
		return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
	};
	Bb = /%20/g, Cb = /\[\]$/, Db = /\r?\n/g, Eb = /^(?:submit|button|image|reset|file)$/i, Fb = /^(?:input|select|textarea|keygen)/i;
	n.param = function(e, t) {
		var r, i = [],
			s = function(e, t) {
				t = n.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(e) || e.jquery && !n.isPlainObject(e)) n.each(e, function() {
			s(this.name, this.value)
		});
		else
			for (r in e) Gb(r, e[r], t, s);
		return i.join("&").replace(Bb, "+")
	}, n.fn.extend({
		serialize: function() {
			return n.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = n.prop(this, "elements");
				return e ? n.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(e) && (this.checked || !X.test(e))
			}).map(function(e, t) {
				var r = n(this).val();
				return null == r ? null : n.isArray(r) ? n.map(r, function(e) {
					return {
						name: t.name,
						value: e.replace(Db, "\r\n")
					}
				}) : {
					name: t.name,
					value: r.replace(Db, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = function() {
		try {
			return new a.XMLHttpRequest
		} catch (e) {}
	};
	Hb = {
		0: 200,
		1223: 204
	}, Ib = n.ajaxSettings.xhr();
	l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(e) {
		var t, n;
		return l.cors || Ib && !e.crossDomain ? {
			send: function(r, i) {
				var s, o = e.xhr();
				if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (s in e.xhrFields) o[s] = e.xhrFields[s];
				e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
				for (s in r) o.setRequestHeader(s, r[s]);
				t = function(e) {
					return function() {
						t && (t = n = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? i(0, "error") : i(o.status, o.statusText) : i(Hb[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
							binary: o.response
						} : {
							text: o.responseText
						}, o.getAllResponseHeaders()))
					}
				}, o.onload = t(), n = o.onerror = t("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
					4 === o.readyState && a.setTimeout(function() {
						t && n()
					})
				}, t = t("abort");
				try {
					o.send(e.hasContent && e.data || null)
				} catch (u) {
					if (t) throw u
				}
			},
			abort: function() {
				t && t()
			}
		} : void 0
	}), n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return n.globalEval(e), e
			}
		}
	}), n.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), n.ajaxTransport("script", function(e) {
		var t, r;
		if (e.crossDomain) return {
			send: function(i, s) {
				t = n("<script>").prop({
					charset: e.scriptCharset,
					src: e.url
				}).on("load error", r = function(e) {
					t.remove(), r = null, e && s("error" === e.type ? 404 : 200, e.type)
				}), d.head.appendChild(t[0])
			},
			abort: function() {
				r && r()
			}
		}
	});
	Jb = [], Kb = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Jb.pop() || n.expando + "_" + kb++;
			return this[e] = !0, e
		}
	}), n.ajaxPrefilter("json jsonp", function(e, t, r) {
		var i, s, o, u = e.jsonp !== !1 && (Kb.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(e.data) && "data");
		return u || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = n.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(Kb, "$1" + i) : e.jsonp !== !1 && (e.url += (lb.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
			return o || n.error(i + " was not called"), o[0]
		}, e.dataTypes[0] = "json", s = a[i], a[i] = function() {
			o = arguments
		}, r.always(function() {
			void 0 === s ? n(a).removeProp(i) : a[i] = s, e[i] && (e.jsonpCallback = t.jsonpCallback, Jb.push(i)), o && n.isFunction(s) && s(o[0]), o = s = void 0
		}), "script") : void 0
	}), n.parseHTML = function(e, t, r) {
		var i, s;
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (r = t, t = !1), t = t || d;
		i = x.exec(e), s = !r && [];
		return i ? [t.createElement(i[1])] : (i = ca([e], t, s), s && s.length && n(s).remove(), n.merge([], i.childNodes))
	};
	Lb = n.fn.load;
	n.fn.load = function(e, t, r) {
		var i, s, o, u, a;
		if ("string" != typeof e && Lb) return Lb.apply(this, arguments);
		u = this, a = e.indexOf(" ");
		return a > -1 && (i = n.trim(e.slice(a)), e = e.slice(0, a)), n.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), u.length > 0 && n.ajax({
			url: e,
			type: s || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, u.html(i ? n("<div>").append(n.parseHTML(e)).find(i) : e)
		}).always(r && function(e, t) {
			u.each(function() {
				r.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		n.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), n.expr.filters.animated = function(e) {
		return n.grep(n.timers, function(t) {
			return e === t.elem
		}).length
	};
	n.offset = {
		setOffset: function(e, t, r) {
			var i, s, o, u, a, f, l, c = n.css(e, "position"),
				h = n(e),
				p = {};
			"static" === c && (e.style.position = "relative"), a = h.offset(), o = n.css(e, "top"), f = n.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + f).indexOf("auto") > -1, l ? (i = h.position(), u = i.top, s = i.left) : (u = parseFloat(o) || 0, s = parseFloat(f) || 0), n.isFunction(t) && (t = t.call(e, r, n.extend({}, a))), null != t.top && (p.top = t.top - a.top + u), null != t.left && (p.left = t.left - a.left + s), "using" in t ? t.using.call(e, p) : h.css(p)
		}
	}, n.fn.extend({
		offset: function(e) {
			var t, r, i, s, o;
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				n.offset.setOffset(this, e, t)
			});
			i = this[0], s = {
				top: 0,
				left: 0
			}, o = i && i.ownerDocument;
			if (o) return t = o.documentElement, n.contains(t, i) ? (s = i.getBoundingClientRect(), r = Mb(o), {
				top: s.top + r.pageYOffset - t.clientTop,
				left: s.left + r.pageXOffset - t.clientLeft
			}) : s
		},
		position: function() {
			var e, t, r, i;
			if (this[0]) {
				r = this[0], i = {
					top: 0,
					left: 0
				};
				return "fixed" === n.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), n.nodeName(e[0], "html") || (i = e.offset()), i.top += n.css(e[0], "borderTopWidth", !0), i.left += n.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - i.top - n.css(r, "marginTop", !0),
					left: t.left - i.left - n.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent;
				while (e && "static" === n.css(e, "position")) e = e.offsetParent;
				return e || Ea
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var r = "pageYOffset" === t;
		n.fn[e] = function(n) {
			return K(this, function(e, n, i) {
				var s = Mb(e);
				return void 0 === i ? s ? s[t] : e[n] : void(s ? s.scrollTo(r ? s.pageXOffset : i, r ? i : s.pageYOffset) : e[n] = i)
			}, e, n, arguments.length)
		}
	}), n.each(["top", "left"], function(e, t) {
		n.cssHooks[t] = Ga(l.pixelPosition, function(e, r) {
			return r ? (r = Fa(e, t), Ba.test(r) ? n(e).position()[t] + "px" : r) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		n.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(r, i) {
			n.fn[i] = function(i, s) {
				var o = arguments.length && (r || "boolean" != typeof i),
					u = r || (i === !0 || s === !0 ? "margin" : "border");
				return K(this, function(t, r, i) {
					var s;
					return n.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? n.css(t, r, u) : n.style(t, r, i, u)
				}, t, o ? i : void 0, o, null)
			}
		})
	}), n.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		size: function() {
			return this.length
		}
	}), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return n
	});
	Nb = a.jQuery, Ob = a.$;
	return n.noConflict = function(e) {
		return a.$ === n && (a.$ = Ob), e && a.jQuery === n && (a.jQuery = Nb), n
	}, b || (a.jQuery = a.$ = n), n
});
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(e, t, n, r, i) {
		return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
	},
	easeInQuad: function(e, t, n, r, i) {
		return r * (t /= i) * t + n
	},
	easeOutQuad: function(e, t, n, r, i) {
		return -r * (t /= i) * (t - 2) + n
	},
	easeInOutQuad: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
	},
	easeInCubic: function(e, t, n, r, i) {
		return r * (t /= i) * t * t + n
	},
	easeOutCubic: function(e, t, n, r, i) {
		return r * ((t = t / i - 1) * t * t + 1) + n
	},
	easeInOutCubic: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
	},
	easeInQuart: function(e, t, n, r, i) {
		return r * (t /= i) * t * t * t + n
	},
	easeOutQuart: function(e, t, n, r, i) {
		return -r * ((t = t / i - 1) * t * t * t - 1) + n
	},
	easeInOutQuart: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
	},
	easeInQuint: function(e, t, n, r, i) {
		return r * (t /= i) * t * t * t * t + n
	},
	easeOutQuint: function(e, t, n, r, i) {
		return r * ((t = t / i - 1) * t * t * t * t + 1) + n
	},
	easeInOutQuint: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
	},
	easeInSine: function(e, t, n, r, i) {
		return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
	},
	easeOutSine: function(e, t, n, r, i) {
		return r * Math.sin(t / i * (Math.PI / 2)) + n
	},
	easeInOutSine: function(e, t, n, r, i) {
		return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
	},
	easeInExpo: function(e, t, n, r, i) {
		return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
	},
	easeOutExpo: function(e, t, n, r, i) {
		return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
	},
	easeInOutExpo: function(e, t, n, r, i) {
		return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
	},
	easeInCirc: function(e, t, n, r, i) {
		return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
	},
	easeOutCirc: function(e, t, n, r, i) {
		return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
	},
	easeInOutCirc: function(e, t, n, r, i) {
		return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
	},
	easeInElastic: function(e, t, n, r, i) {
		var s = 1.70158,
			o = 0,
			u = r;
		if (t == 0) return n;
		if ((t /= i) == 1) return n + r;
		o || (o = i * .3);
		if (u < Math.abs(r)) {
			u = r;
			s = o / 4
		} else s = o / (2 * Math.PI) * Math.asin(r / u);
		return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
	},
	easeOutElastic: function(e, t, n, r, i) {
		var s = 1.70158,
			o = 0,
			u = r;
		if (t == 0) return n;
		if ((t /= i) == 1) return n + r;
		o || (o = i * .3);
		if (u < Math.abs(r)) {
			u = r;
			s = o / 4
		} else s = o / (2 * Math.PI) * Math.asin(r / u);
		return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
	},
	easeInOutElastic: function(e, t, n, r, i) {
		var s = 1.70158,
			o = 0,
			u = r;
		if (t == 0) return n;
		if ((t /= i / 2) == 2) return n + r;
		o || (o = i * .3 * 1.5);
		if (u < Math.abs(r)) {
			u = r;
			s = o / 4
		} else s = o / (2 * Math.PI) * Math.asin(r / u);
		return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
	},
	easeInBack: function(e, t, n, r, i, s) {
		s == undefined && (s = 1.70158);
		return r * (t /= i) * t * ((s + 1) * t - s) + n
	},
	easeOutBack: function(e, t, n, r, i, s) {
		s == undefined && (s = 1.70158);
		return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
	},
	easeInOutBack: function(e, t, n, r, i, s) {
		s == undefined && (s = 1.70158);
		return (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
	},
	easeInBounce: function(e, t, n, r, i) {
		return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
	},
	easeOutBounce: function(e, t, n, r, i) {
		return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
	},
	easeInOutBounce: function(e, t, n, r, i) {
		return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
	}
});
! function(e) {
	function a(e) {
		var n = e.length,
			r = t.type(e);
		return "function" === r || t.isWindow(e) ? !1 : 1 === e.nodeType && n ? !0 : "array" === r || 0 === n || "number" == typeof n && n > 0 && n - 1 in e
	}
	var t, n, r, i, s, o, u;
	if (!e.jQuery) {
		t = function(e, n) {
			return new t.fn.init(e, n)
		};
		t.isWindow = function(e) {
			return null != e && e == e.window
		}, t.type = function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[s.call(e)] || "object" : typeof e
		}, t.isArray = Array.isArray || function(e) {
			return "array" === t.type(e)
		}, t.isPlainObject = function(e) {
			var n;
			if (!e || "object" !== t.type(e) || e.nodeType || t.isWindow(e)) return !1;
			try {
				if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (r) {
				return !1
			}
			for (n in e);
			return void 0 === n || i.call(e, n)
		}, t.each = function(e, t, n) {
			var r, i = 0,
				s = e.length,
				o = a(e);
			if (n) {
				if (o)
					for (; s > i && (r = t.apply(e[i], n), r !== !1); i++);
				else
					for (i in e)
						if (r = t.apply(e[i], n), r === !1) break
			} else if (o)
				for (; s > i && (r = t.call(e[i], i, e[i]), r !== !1); i++);
			else
				for (i in e)
					if (r = t.call(e[i], i, e[i]), r === !1) break;
			return e
		}, t.data = function(e, r, i) {
			var s, o;
			if (void 0 === i) {
				s = e[t.expando], o = s && n[s];
				if (void 0 === r) return o;
				if (o && r in o) return o[r]
			} else if (void 0 !== r) {
				s = e[t.expando] || (e[t.expando] = ++t.uuid);
				return n[s] = n[s] || {}, n[s][r] = i, i
			}
		}, t.removeData = function(e, r) {
			var i = e[t.expando],
				s = i && n[i];
			s && t.each(r, function(e, t) {
				delete s[t]
			})
		}, t.extend = function() {
			var e, n, r, i, s, o, u = arguments[0] || {},
				a = 1,
				f = arguments.length,
				l = !1;
			for ("boolean" == typeof u && (l = u, u = arguments[a] || {}, a++), "object" != typeof u && "function" !== t.type(u) && (u = {}), a === f && (u = this, a--); f > a; a++)
				if (null != (s = arguments[a]))
					for (i in s) e = u[i], r = s[i], u !== r && (l && r && (t.isPlainObject(r) || (n = t.isArray(r))) ? (n ? (n = !1, o = e && t.isArray(e) ? e : []) : o = e && t.isPlainObject(e) ? e : {}, u[i] = t.extend(l, o, r)) : void 0 !== r && (u[i] = r));
			return u
		}, t.queue = function(e, n, r) {
			function s(e, t) {
				var n = t || [];
				return null != e && (a(Object(e)) ? ! function(e, t) {
					var n, r, i;
					for (n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
					if (n !== n)
						for (; void 0 !== t[r];) e[i++] = t[r++];
					return e.length = i, e
				}(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
			}
			var i;
			if (e) {
				n = (n || "fx") + "queue";
				i = t.data(e, n);
				return r ? (!i || t.isArray(r) ? i = t.data(e, n, s(r)) : i.push(r), i) : i || []
			}
		}, t.dequeue = function(e, n) {
			t.each(e.nodeType ? [e] : e, function(e, r) {
				var i, s;
				n = n || "fx";
				i = t.queue(r, n), s = i.shift();
				"inprogress" === s && (s = i.shift()), s && ("fx" === n && i.unshift("inprogress"), s.call(r, function() {
					t.dequeue(r, n)
				}))
			})
		}, t.fn = t.prototype = {
			init: function(e) {
				if (e.nodeType) return this[0] = e, this;
				throw new Error("Not a DOM node.")
			},
			offset: function() {
				var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
					top: 0,
					left: 0
				};
				return {
					top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				}
			},
			position: function() {
				function e() {
					var e;
					for (e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
					return e || document
				}
				var e, n, r, i;
				n = this[0], e = e.apply(n), r = this.offset(), i = /^(?:body|html)$/i.test(e.nodeName) ? {
					top: 0,
					left: 0
				} : t(e).offset();
				return r.top -= parseFloat(n.style.marginTop) || 0, r.left -= parseFloat(n.style.marginLeft) || 0, e.style && (i.top += parseFloat(e.style.borderTopWidth) || 0, i.left += parseFloat(e.style.borderLeftWidth) || 0), {
					top: r.top - i.top,
					left: r.left - i.left
				}
			}
		};
		n = {};
		t.expando = "velocity" + (new Date).getTime(), t.uuid = 0;
		for (r = {}, i = r.hasOwnProperty, s = r.toString, o = "Boolean Number String Function Array Date RegExp Object Error".split(" "), u = 0; u < o.length; u++) r["[object " + o[u] + "]"] = o[u].toLowerCase();
		t.fn.init.prototype = t.fn, e.Velocity = {
			Utilities: t
		}
	}
}(window),
function(e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
	return function(e, t, n, r) {
		function m(e) {
			var t, n, r, i;
			for (t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
				i = e[t];
				i && r.push(i)
			}
			return r
		}

		function g(e) {
			return u.isWrapped(e) ? e = [].slice.call(e) : u.isNode(e) && (e = [e]), e
		}

		function y(e) {
			var t = i.data(e, "velocity");
			return null === t ? r : t
		}

		function b(e) {
			return function(t) {
				return Math.round(t * e) * (1 / e)
			}
		}

		function w(e, n, r, i) {
			function g(e, t) {
				return 1 - 3 * t + 3 * e
			}

			function y(e, t) {
				return 3 * t - 6 * e
			}

			function b(e) {
				return 3 * e
			}

			function w(e, t, n) {
				return ((g(t, n) * e + y(t, n)) * e + b(t)) * e
			}

			function E(e, t, n) {
				return 3 * g(t, n) * e * e + 2 * y(t, n) * e + b(t)
			}

			function S(t, n) {
				var i, o, u;
				for (i = 0; s > i; ++i) {
					o = E(n, e, r);
					if (0 === o) return n;
					u = w(n, e, r) - t;
					n -= u / o
				}
				return n
			}

			function x() {
				var t;
				for (t = 0; f > t; ++t) p[t] = w(t * l, e, r)
			}

			function T(t, n, i) {
				var s, o, f = 0;
				do o = n + (i - n) / 2, s = w(o, e, r) - t, s > 0 ? i = o : n = o; while (Math.abs(s) > u && ++f < a);
				return o
			}

			function N(t) {
				var n, i, s, u, a, c;
				for (n = 0, i = 1, s = f - 1; i != s && p[i] <= t; ++i) n += l;
				--i;
				u = (t - p[i]) / (p[i + 1] - p[i]), a = n + u * l, c = E(a, e, r);
				return c >= o ? S(t, a) : 0 == c ? a : T(t, n, n + l)
			}

			function C() {
				d = !0, (e != n || r != i) && x()
			}
			var s, o, u, a, f, l, c, h, p, d, v, m;
			s = 4, o = .001, u = 1e-7, a = 10, f = 11, l = 1 / (f - 1), c = "Float32Array" in t;
			if (4 !== arguments.length) return !1;
			for (h = 0; 4 > h; ++h)
				if ("number" != typeof arguments[h] || isNaN(arguments[h]) || !isFinite(arguments[h])) return !1;
			e = Math.min(e, 1), r = Math.min(r, 1), e = Math.max(e, 0), r = Math.max(r, 0);
			p = c ? new Float32Array(f) : new Array(f), d = !1, v = function(t) {
				return d || C(), e === n && r === i ? t : 0 === t ? 0 : 1 === t ? 1 : w(N(t), n, i)
			};
			v.getControlPoints = function() {
				return [{
					x: e,
					y: n
				}, {
					x: r,
					y: i
				}]
			};
			m = "generateBezier(" + [e, n, r, i] + ")";
			return v.toString = function() {
				return m
			}, v
		}

		function E(e, t) {
			var n = e;
			return u.isString(e) ? c.Easings[e] || (n = !1) : n = u.isArray(e) && 1 === e.length ? b.apply(null, e) : u.isArray(e) && 2 === e.length ? h.apply(null, e.concat([t])) : u.isArray(e) && 4 === e.length ? w.apply(null, e) : !1, n === !1 && (n = c.Easings[c.defaults.easing] ? c.defaults.easing : l), n
		}

		function S(e) {
			var t, n, s, o, a, f, l, h, d, g, b, w, E, T, N, C, k, L, A, O, M, _, D, P;
			if (e) {
				t = (new Date).getTime(), n = c.State.calls.length;
				n > 1e4 && (c.State.calls = m(c.State.calls));
				for (s = 0; n > s; s++)
					if (c.State.calls[s]) {
						o = c.State.calls[s], a = o[0], f = o[2], l = o[3], h = !!l, d = null;
						l || (l = c.State.calls[s][3] = t - 16);
						for (g = Math.min((t - l) / f.duration, 1), b = 0, w = a.length; w > b; b++) {
							E = a[b], T = E.element;
							if (y(T)) {
								N = !1;
								if (f.display !== r && null !== f.display && "none" !== f.display) {
									if ("flex" === f.display) {
										C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
										i.each(C, function(e, t) {
											p.setPropertyValue(T, "display", t)
										})
									}
									p.setPropertyValue(T, "display", f.display)
								}
								f.visibility !== r && "hidden" !== f.visibility && p.setPropertyValue(T, "visibility", f.visibility);
								for (k in E)
									if ("element" !== k) {
										A = E[k], O = u.isString(A.easing) ? c.Easings[A.easing] : A.easing;
										if (1 === g) L = A.endValue;
										else {
											M = A.endValue - A.startValue;
											if (L = A.startValue + M * O(g, f, M), !h && L === A.currentValue) continue
										}
										if (A.currentValue = L, "tween" === k) d = L;
										else {
											if (p.Hooks.registered[k]) {
												_ = p.Hooks.getRoot(k), D = y(T).rootPropertyValueCache[_];
												D && (A.rootPropertyValue = D)
											}
											P = p.setPropertyValue(T, k, A.currentValue + (0 === parseFloat(L) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
											p.Hooks.registered[k] && (y(T).rootPropertyValueCache[_] = p.Normalizations.registered[_] ? p.Normalizations.registered[_]("extract", null, P[1]) : P[1]), "transform" === P[0] && (N = !0)
										}
									}
								f.mobileHA && y(T).transformCache.translate3d === r && (y(T).transformCache.translate3d = "(0px, 0px, 0px)", N = !0), N && p.flushTransformCache(T)
							}
						}
						f.display !== r && "none" !== f.display && (c.State.calls[s][2].display = !1), f.visibility !== r && "hidden" !== f.visibility && (c.State.calls[s][2].visibility = !1), f.progress && f.progress.call(o[1], o[1], g, Math.max(0, l + f.duration - t), l, d), 1 === g && x(s)
					}
			}
			c.State.isTicking && v(S)
		}

		function x(e, t) {
			var n, s, o, u, a, f, l, h, d, v, m;
			if (!c.State.calls[e]) return !1;
			for (n = c.State.calls[e][0], s = c.State.calls[e][1], o = c.State.calls[e][2], u = c.State.calls[e][4], a = !1, f = 0, l = n.length; l > f; f++) {
				h = n[f].element;
				if (t || o.loop || ("none" === o.display && p.setPropertyValue(h, "display", o.display), "hidden" === o.visibility && p.setPropertyValue(h, "visibility", o.visibility)), o.loop !== !0 && (i.queue(h)[1] === r || !/\.velocityQueueEntryFlag/i.test(i.queue(h)[1])) && y(h)) {
					y(h).isAnimating = !1, y(h).rootPropertyValueCache = {};
					d = !1;
					i.each(p.Lists.transforms3D, function(e, t) {
						var n = /^scale/.test(t) ? 1 : 0,
							i = y(h).transformCache[t];
						y(h).transformCache[t] !== r && (new RegExp("^\\(" + n + "[^.]")).test(i) && (d = !0, delete y(h).transformCache[t])
					}), o.mobileHA && (d = !0, delete y(h).transformCache.translate3d), d && p.flushTransformCache(h), p.Values.removeClass(h, "velocity-animating")
				}
				if (!t && o.complete && !o.loop && f === l - 1) try {
					o.complete.call(s, s)
				} catch (g) {
					setTimeout(function() {
						throw g
					}, 1)
				}
				u && o.loop !== !0 && u(s), y(h) && o.loop === !0 && !t && (i.each(y(h).tweensContainer, function(e, t) {
					/^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
				}), c(h, "reverse", {
					loop: !0,
					delay: o.delay
				})), o.queue !== !1 && i.dequeue(h, o.queue)
			}
			c.State.calls[e] = !1;
			for (v = 0, m = c.State.calls.length; m > v; v++)
				if (c.State.calls[v] !== !1) {
					a = !0;
					break
				}
			a === !1 && (c.State.isTicking = !1, delete c.State.calls, c.State.calls = [])
		}
		var i, s, o, u, a, f, l, c, h, p, d, v;
		s = function() {
			var e, t;
			if (n.documentMode) return n.documentMode;
			for (e = 7; e > 4; e--) {
				t = n.createElement("div");
				if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
			}
			return r
		}(), o = function() {
			var e = 0;
			return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
				var n, r = (new Date).getTime();
				return n = Math.max(0, 16 - (r - e)), e = r + n, setTimeout(function() {
					t(r + n)
				}, n)
			}
		}(), u = {
			isString: function(e) {
				return "string" == typeof e
			},
			isArray: Array.isArray || function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			},
			isFunction: function(e) {
				return "[object Function]" === Object.prototype.toString.call(e)
			},
			isNode: function(e) {
				return e && e.nodeType
			},
			isNodeList: function(e) {
				return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== r && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
			},
			isWrapped: function(e) {
				return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
			},
			isSVG: function(e) {
				return t.SVGElement && e instanceof t.SVGElement
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			}
		}, a = !1;
		if (e.fn && e.fn.jquery ? (i = e, a = !0) : i = t.Velocity.Utilities, 8 >= s && !a) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
		if (7 >= s) return void(jQuery.fn.velocity = jQuery.fn.animate);
		f = 400, l = "swing", c = {
			State: {
				isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
				isAndroid: /Android/i.test(navigator.userAgent),
				isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
				isChrome: t.chrome,
				isFirefox: /Firefox/i.test(navigator.userAgent),
				prefixElement: n.createElement("div"),
				prefixMatches: {},
				scrollAnchor: null,
				scrollPropertyLeft: null,
				scrollPropertyTop: null,
				isTicking: !1,
				calls: []
			},
			CSS: {},
			Utilities: i,
			Redirects: {},
			Easings: {},
			Promise: t.Promise,
			defaults: {
				queue: "",
				duration: f,
				easing: l,
				begin: r,
				complete: r,
				progress: r,
				display: r,
				visibility: r,
				loop: !1,
				delay: !1,
				mobileHA: !0,
				_cacheValues: !0
			},
			init: function(e) {
				i.data(e, "velocity", {
					isSVG: u.isSVG(e),
					isAnimating: !1,
					computedStyle: null,
					tweensContainer: null,
					rootPropertyValueCache: {},
					transformCache: {}
				})
			},
			hook: null,
			mock: !1,
			version: {
				major: 1,
				minor: 2,
				patch: 2
			},
			debug: !1
		};
		t.pageYOffset !== r ? (c.State.scrollAnchor = t, c.State.scrollPropertyLeft = "pageXOffset", c.State.scrollPropertyTop = "pageYOffset") : (c.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, c.State.scrollPropertyLeft = "scrollLeft", c.State.scrollPropertyTop = "scrollTop");
		h = function() {
			function e(e) {
				return -e.tension * e.x - e.friction * e.v
			}

			function t(t, n, r) {
				var i = {
					x: t.x + r.dx * n,
					v: t.v + r.dv * n,
					tension: t.tension,
					friction: t.friction
				};
				return {
					dx: i.v,
					dv: e(i)
				}
			}

			function n(n, r) {
				var i = {
						dx: n.v,
						dv: e(n)
					},
					s = t(n, .5 * r, i),
					o = t(n, .5 * r, s),
					u = t(n, r, o),
					a = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + u.dx),
					f = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + u.dv);
				return n.x = n.x + a * r, n.v = n.v + f * r, n
			}
			return function r(e, t, i) {
				var s, o, u, a = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
					f = [0],
					l = 0,
					c = 1e-4,
					h = .016;
				for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, i = i || null, a.tension = e, a.friction = t, s = null !== i, s ? (l = r(e, t), o = l / i * h) : o = h;;)
					if (u = n(u || a, o), f.push(1 + u.x), l += 16, !(Math.abs(u.x) > c && Math.abs(u.v) > c)) break;
				return s ? function(e) {
					return f[e * (f.length - 1) | 0]
				} : l
			}
		}();
		c.Easings = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			spring: function(e) {
				return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
			}
		}, i.each([
			["ease", [.25, .1, .25, 1]],
			["ease-in", [.42, 0, 1, 1]],
			["ease-out", [0, 0, .58, 1]],
			["ease-in-out", [.42, 0, .58, 1]],
			["easeInSine", [.47, 0, .745, .715]],
			["easeOutSine", [.39, .575, .565, 1]],
			["easeInOutSine", [.445, .05, .55, .95]],
			["easeInQuad", [.55, .085, .68, .53]],
			["easeOutQuad", [.25, .46, .45, .94]],
			["easeInOutQuad", [.455, .03, .515, .955]],
			["easeInCubic", [.55, .055, .675, .19]],
			["easeOutCubic", [.215, .61, .355, 1]],
			["easeInOutCubic", [.645, .045, .355, 1]],
			["easeInQuart", [.895, .03, .685, .22]],
			["easeOutQuart", [.165, .84, .44, 1]],
			["easeInOutQuart", [.77, 0, .175, 1]],
			["easeInQuint", [.755, .05, .855, .06]],
			["easeOutQuint", [.23, 1, .32, 1]],
			["easeInOutQuint", [.86, 0, .07, 1]],
			["easeInExpo", [.95, .05, .795, .035]],
			["easeOutExpo", [.19, 1, .22, 1]],
			["easeInOutExpo", [1, 0, 0, 1]],
			["easeInCirc", [.6, .04, .98, .335]],
			["easeOutCirc", [.075, .82, .165, 1]],
			["easeInOutCirc", [.785, .135, .15, .86]]
		], function(e, t) {
			c.Easings[t[0]] = w.apply(null, t[1])
		});
		p = c.CSS = {
			RegEx: {
				isHex: /^#([A-f\d]{3}){1,2}$/i,
				valueUnwrap: /^[A-z]+\((.*)\)$/i,
				wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
				valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
			},
			Lists: {
				colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
				transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
				transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
			},
			Hooks: {
				templates: {
					textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
					boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
					clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
					backgroundPosition: ["X Y", "0% 0%"],
					transformOrigin: ["X Y Z", "50% 50% 0px"],
					perspectiveOrigin: ["X Y", "50% 50%"]
				},
				registered: {},
				register: function() {
					var e, t, n, r, i, o, u, a;
					for (e = 0; e < p.Lists.colors.length; e++) {
						t = "color" === p.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
						p.Hooks.templates[p.Lists.colors[e]] = ["Red Green Blue Alpha", t]
					}
					if (s)
						for (n in p.Hooks.templates) {
							r = p.Hooks.templates[n], i = r[0].split(" ");
							o = r[1].match(p.RegEx.valueSplit);
							"Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), p.Hooks.templates[n] = [i.join(" "), o.join(" ")])
						}
					for (n in p.Hooks.templates) {
						r = p.Hooks.templates[n], i = r[0].split(" ");
						for (e in i) {
							u = n + i[e], a = e;
							p.Hooks.registered[u] = [n, a]
						}
					}
				},
				getRoot: function(e) {
					var t = p.Hooks.registered[e];
					return t ? t[0] : e
				},
				cleanRootPropertyValue: function(e, t) {
					return p.RegEx.valueUnwrap.test(t) && (t = t.match(p.RegEx.valueUnwrap)[1]), p.Values.isCSSNullValue(t) && (t = p.Hooks.templates[e][1]), t
				},
				extractValue: function(e, t) {
					var n, r, i = p.Hooks.registered[e];
					if (i) {
						n = i[0], r = i[1];
						return t = p.Hooks.cleanRootPropertyValue(n, t), t.toString().match(p.RegEx.valueSplit)[r]
					}
					return t
				},
				injectValue: function(e, t, n) {
					var r, i, s, o, u = p.Hooks.registered[e];
					if (u) {
						s = u[0], o = u[1];
						return n = p.Hooks.cleanRootPropertyValue(s, n), r = n.toString().match(p.RegEx.valueSplit), r[o] = t, i = r.join(" ")
					}
					return n
				}
			},
			Normalizations: {
				registered: {
					clip: function(e, t, n) {
						var r;
						switch (e) {
							case "name":
								return "clip";
							case "extract":
								return p.RegEx.wrappedValueAlreadyExtracted.test(n) ? r = n : (r = n.toString().match(p.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : n), r;
							case "inject":
								return "rect(" + n + ")"
						}
					},
					blur: function(e, t, n) {
						var r, i;
						switch (e) {
							case "name":
								return c.State.isFirefox ? "filter" : "-webkit-filter";
							case "extract":
								r = parseFloat(n);
								if (!r && 0 !== r) {
									i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
									r = i ? i[1] : 0
								}
								return r;
							case "inject":
								return parseFloat(n) ? "blur(" + n + ")" : "none"
						}
					},
					opacity: function(e, t, n) {
						var r;
						if (8 >= s) switch (e) {
							case "name":
								return "filter";
							case "extract":
								r = n.toString().match(/alpha\(opacity=(.*)\)/i);
								return n = r ? r[1] / 100 : 1;
							case "inject":
								return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
						} else switch (e) {
							case "name":
								return "opacity";
							case "extract":
								return n;
							case "inject":
								return n
						}
					}
				},
				register: function() {
					var e;
					9 >= s || c.State.isGingerbread || (p.Lists.transformsBase = p.Lists.transformsBase.concat(p.Lists.transforms3D));
					for (e = 0; e < p.Lists.transformsBase.length; e++) ! function() {
						var t = p.Lists.transformsBase[e];
						p.Normalizations.registered[t] = function(e, n, i) {
							var s;
							switch (e) {
								case "name":
									return "transform";
								case "extract":
									return y(n) === r || y(n).transformCache[t] === r ? /^scale/i.test(t) ? 1 : 0 : y(n).transformCache[t].replace(/[()]/g, "");
								case "inject":
									s = !1;
									switch (t.substr(0, t.length - 1)) {
										case "translate":
											s = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
											break;
										case "scal":
										case "scale":
											c.State.isAndroid && y(n).transformCache[t] === r && 1 > i && (i = 1), s = !/(\d)$/i.test(i);
											break;
										case "skew":
											s = !/(deg|\d)$/i.test(i);
											break;
										case "rotate":
											s = !/(deg|\d)$/i.test(i)
									}
									return s || (y(n).transformCache[t] = "(" + i + ")"), y(n).transformCache[t]
							}
						}
					}();
					for (e = 0; e < p.Lists.colors.length; e++) ! function() {
						var t = p.Lists.colors[e];
						p.Normalizations.registered[t] = function(e, n, i) {
							var o, u, a;
							switch (e) {
								case "name":
									return t;
								case "extract":
									if (p.RegEx.wrappedValueAlreadyExtracted.test(i)) o = i;
									else {
										a = {
											black: "rgb(0, 0, 0)",
											blue: "rgb(0, 0, 255)",
											gray: "rgb(128, 128, 128)",
											green: "rgb(0, 128, 0)",
											red: "rgb(255, 0, 0)",
											white: "rgb(255, 255, 255)"
										};
										/^[A-z]+$/i.test(i) ? u = a[i] !== r ? a[i] : a.black : p.RegEx.isHex.test(i) ? u = "rgb(" + p.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (u = a.black), o = (u || i).toString().match(p.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
									}
									return 8 >= s || 3 !== o.split(" ").length || (o += " 1"), o;
								case "inject":
									return 8 >= s ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= s ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
							}
						}
					}()
				}
			},
			Names: {
				camelCase: function(e) {
					return e.replace(/-(\w)/g, function(e, t) {
						return t.toUpperCase()
					})
				},
				SVGAttribute: function(e) {
					var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
					return (s || c.State.isAndroid && !c.State.isChrome) && (t += "|transform"), (new RegExp("^(" + t + ")$", "i")).test(e)
				},
				prefixCheck: function(e) {
					var t, n, r, i;
					if (c.State.prefixMatches[e]) return [c.State.prefixMatches[e], !0];
					for (t = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = t.length; r > n; n++)
						if (i = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
								return e.toUpperCase()
							}), u.isString(c.State.prefixElement.style[i])) return c.State.prefixMatches[e] = i, [i, !0];
					return [e, !1]
				}
			},
			Values: {
				hexToRgb: function(e) {
					var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
						r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
					return e = e.replace(n, function(e, t, n, r) {
						return t + t + n + n + r + r
					}), t = r.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
				},
				isCSSNullValue: function(e) {
					return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
				},
				getUnitType: function(e) {
					return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
				},
				getDisplayType: function(e) {
					var t = e && e.tagName.toString().toLowerCase();
					return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
				},
				addClass: function(e, t) {
					e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
				},
				removeClass: function(e, t) {
					e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
				}
			},
			getPropertyValue: function(e, n, o, u) {
				function v(e, n) {
					function d() {
						a && p.setPropertyValue(e, "display", "none")
					}
					var o, a, f, l, c, h;
					o = 0;
					if (8 >= s) o = i.css(e, n);
					else {
						a = !1;
						if (/^(width|height)$/.test(n) && 0 === p.getPropertyValue(e, "display") && (a = !0, p.setPropertyValue(e, "display", p.Values.getDisplayType(e))), !u) {
							if ("height" === n && "border-box" !== p.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
								f = e.offsetHeight - (parseFloat(p.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(p.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(p.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(p.getPropertyValue(e, "paddingBottom")) || 0);
								return d(), f
							}
							if ("width" === n && "border-box" !== p.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
								l = e.offsetWidth - (parseFloat(p.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(p.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(p.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(p.getPropertyValue(e, "paddingRight")) || 0);
								return d(), l
							}
						}
						c = y(e) === r ? t.getComputedStyle(e, null) : y(e).computedStyle ? y(e).computedStyle : y(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), o = 9 === s && "filter" === n ? c.getPropertyValue(n) : c[n], ("" === o || null === o) && (o = e.style[n]), d()
					}
					if ("auto" === o && /^(top|right|bottom|left)$/i.test(n)) {
						h = v(e, "position");
						("fixed" === h || "absolute" === h && /top|left/i.test(n)) && (o = i(e).position()[n] + "px")
					}
					return o
				}
				var a, f, l, h, d;
				if (p.Hooks.registered[n]) {
					f = n, l = p.Hooks.getRoot(f);
					o === r && (o = p.getPropertyValue(e, p.Names.prefixCheck(l)[0])), p.Normalizations.registered[l] && (o = p.Normalizations.registered[l]("extract", e, o)), a = p.Hooks.extractValue(f, o)
				} else p.Normalizations.registered[n] && (h = p.Normalizations.registered[n]("name", e), "transform" !== h && (d = v(e, p.Names.prefixCheck(h)[0]), p.Values.isCSSNullValue(d) && p.Hooks.templates[n] && (d = p.Hooks.templates[n][1])), a = p.Normalizations.registered[n]("extract", e, d));
				if (!/^[\d-]/.test(a))
					if (y(e) && y(e).isSVG && p.Names.SVGAttribute(n))
						if (/^(height|width)$/i.test(n)) try {
							a = e.getBBox()[n]
						} catch (m) {
							a = 0
						} else a = e.getAttribute(n);
						else a = v(e, p.Names.prefixCheck(n)[0]);
				return p.Values.isCSSNullValue(a) && (a = 0), c.debug >= 2 && console.log("Get " + n + ": " + a), a
			},
			setPropertyValue: function(e, n, r, i, o) {
				var u, a, f = n;
				if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = r : "Left" === o.direction ? t.scrollTo(r, o.alternateValue) : t.scrollTo(o.alternateValue, r);
				else if (p.Normalizations.registered[n] && "transform" === p.Normalizations.registered[n]("name", e)) p.Normalizations.registered[n]("inject", e, r), f = "transform", r = y(e).transformCache[n];
				else {
					if (p.Hooks.registered[n]) {
						u = n, a = p.Hooks.getRoot(n);
						i = i || p.getPropertyValue(e, a), r = p.Hooks.injectValue(u, r, i), n = a
					}
					if (p.Normalizations.registered[n] && (r = p.Normalizations.registered[n]("inject", e, r), n = p.Normalizations.registered[n]("name", e)), f = p.Names.prefixCheck(n)[0], 8 >= s) try {
						e.style[f] = r
					} catch (l) {
						c.debug && console.log("Browser does not support [" + r + "] for [" + f + "]")
					} else y(e) && y(e).isSVG && p.Names.SVGAttribute(n) ? e.setAttribute(n, r) : e.style[f] = r;
					c.debug >= 2 && console.log("Set " + n + " (" + f + "): " + r)
				}
				return [f, r]
			},
			flushTransformCache: function(e) {
				function u(t) {
					return parseFloat(p.getPropertyValue(e, t))
				}
				var t, n, r, o;
				t = "";
				if ((s || c.State.isAndroid && !c.State.isChrome) && y(e).isSVG) {
					n = {
						translate: [u("translateX"), u("translateY")],
						skewX: [u("skewX")],
						skewY: [u("skewY")],
						scale: 1 !== u("scale") ? [u("scale"), u("scale")] : [u("scaleX"), u("scaleY")],
						rotate: [u("rotateZ"), 0, 0]
					};
					i.each(y(e).transformCache, function(e) {
						/^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (t += e + "(" + n[e].join(" ") + ") ", delete n[e])
					})
				} else i.each(y(e).transformCache, function(n) {
					return r = y(e).transformCache[n], "transformPerspective" === n ? (o = r, !0) : (9 === s && "rotateZ" === n && (n = "rotate"), void(t += n + r + " "))
				}), o && (t = "perspective" + o + " " + t);
				p.setPropertyValue(e, "transform", t)
			}
		};
		p.Hooks.register(), p.Normalizations.register(), c.hook = function(e, t, n) {
			var s = r;
			return e = g(e), i.each(e, function(e, i) {
				var o;
				if (y(i) === r && c.init(i), n === r) s === r && (s = c.CSS.getPropertyValue(i, t));
				else {
					o = c.CSS.setPropertyValue(i, t, n);
					"transform" === o[0] && c.CSS.flushTransformCache(i), s = o
				}
			}), s
		};
		d = function() {
			function j() {
				return e ? N.promise || null : s
			}

			function F() {
				function v() {
					function z(e, t) {
						var n = r,
							i = r,
							a = r;
						return u.isArray(e) ? (n = e[0], !u.isArray(e[1]) && /^[\d-]/.test(e[1]) || u.isFunction(e[1]) || p.RegEx.isHex.test(e[1]) ? a = e[1] : (u.isString(e[1]) && !p.RegEx.isHex.test(e[1]) || u.isArray(e[1])) && (i = t ? e[1] : E(e[1], o.duration), e[2] !== r && (a = e[2]))) : n = e, t || (i = i || o.easing), u.isFunction(n) && (n = n.call(s, b, m)), u.isFunction(a) && (a = a.call(s, b, m)), [n || 0, i, a]
					}

					function W(e, t) {
						var n, r;
						return r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
							return n = e, ""
						}), n || (n = p.Values.getUnitType(e)), [r, n]
					}

					function X() {
						var e, r, o, u = {
								myParent: s.parentNode || n.body,
								position: p.getPropertyValue(s, "position"),
								fontSize: p.getPropertyValue(s, "fontSize")
							},
							a = u.position === _.lastPosition && u.myParent === _.lastParent,
							f = u.fontSize === _.lastFontSize;
						_.lastParent = u.myParent, _.lastPosition = u.position, _.lastFontSize = u.fontSize;
						e = 100, r = {};
						if (f && a) r.emToPx = _.lastEmToPx, r.percentToPxWidth = _.lastPercentToPxWidth, r.percentToPxHeight = _.lastPercentToPxHeight;
						else {
							o = y(s).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
							c.init(o), u.myParent.appendChild(o), i.each(["overflow", "overflowX", "overflowY"], function(e, t) {
								c.CSS.setPropertyValue(o, t, "hidden")
							}), c.CSS.setPropertyValue(o, "position", u.position), c.CSS.setPropertyValue(o, "fontSize", u.fontSize), c.CSS.setPropertyValue(o, "boxSizing", "content-box"), i.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, n) {
								c.CSS.setPropertyValue(o, n, e + "%")
							}), c.CSS.setPropertyValue(o, "paddingLeft", e + "em"), r.percentToPxWidth = _.lastPercentToPxWidth = (parseFloat(p.getPropertyValue(o, "width", null, !0)) || 1) / e, r.percentToPxHeight = _.lastPercentToPxHeight = (parseFloat(p.getPropertyValue(o, "height", null, !0)) || 1) / e, r.emToPx = _.lastEmToPx = (parseFloat(p.getPropertyValue(o, "paddingLeft")) || 1) / e, u.myParent.removeChild(o)
						}
						return null === _.remToPx && (_.remToPx = parseFloat(p.getPropertyValue(n.body, "fontSize")) || 16), null === _.vwToPx && (_.vwToPx = parseFloat(t.innerWidth) / 100, _.vhToPx = parseFloat(t.innerHeight) / 100), r.remToPx = _.remToPx, r.vwToPx = _.vwToPx, r.vhToPx = _.vhToPx, c.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(r), s), r
					}
					var f, v, g, w, x, T, k, L, A, O, M, P, H, B, j, F, I, q, R, U;
					if (o.begin && 0 === b) try {
						o.begin.call(a, a)
					} catch (V) {
						setTimeout(function() {
							throw V
						}, 1)
					}
					if ("scroll" === C) {
						w = /^x$/i.test(o.axis) ? "Left" : "Top", x = parseFloat(o.offset) || 0;
						o.container ? u.isWrapped(o.container) || u.isNode(o.container) ? (o.container = o.container[0] || o.container, f = o.container["scroll" + w], g = f + i(s).position()[w.toLowerCase()] + x) : o.container = null : (f = c.State.scrollAnchor[c.State["scrollProperty" + w]], v = c.State.scrollAnchor[c.State["scrollProperty" + ("Left" === w ? "Top" : "Left")]], g = i(s).offset()[w.toLowerCase()] + x), d = {
							scroll: {
								rootPropertyValue: !1,
								startValue: f,
								currentValue: f,
								endValue: g,
								unitType: "",
								easing: o.easing,
								scrollData: {
									container: o.container,
									direction: w,
									alternateValue: v
								}
							},
							element: s
						}, c.debug && console.log("tweensContainer (scroll): ", d.scroll, s)
					} else if ("reverse" === C) {
						if (!y(s).tweensContainer) return void i.dequeue(s, o.queue);
						"none" === y(s).opts.display && (y(s).opts.display = "auto"), "hidden" === y(s).opts.visibility && (y(s).opts.visibility = "visible"), y(s).opts.loop = !1, y(s).opts.begin = null, y(s).opts.complete = null, h.easing || delete o.easing, h.duration || delete o.duration, o = i.extend({}, y(s).opts, o);
						T = i.extend(!0, {}, y(s).tweensContainer);
						for (k in T)
							if ("element" !== k) {
								L = T[k].startValue;
								T[k].startValue = T[k].currentValue = T[k].endValue, T[k].endValue = L, u.isEmptyObject(h) || (T[k].easing = o.easing), c.debug && console.log("reverse tweensContainer (" + k + "): " + JSON.stringify(T[k]), s)
							}
						d = T
					} else if ("start" === C) {
						y(s).tweensContainer && y(s).isAnimating === !0 && (T = y(s).tweensContainer), i.each(l, function(e, t) {
							var n, i, s, o, u, a, f, c, h;
							if (RegExp("^" + p.Lists.colors.join("$|^") + "$").test(e)) {
								n = z(t, !0), i = n[0], s = n[1], o = n[2];
								if (p.RegEx.isHex.test(i)) {
									for (u = ["Red", "Green", "Blue"], a = p.Values.hexToRgb(i), f = o ? p.Values.hexToRgb(o) : r, c = 0; c < u.length; c++) {
										h = [a[c]];
										s && h.push(s), f !== r && h.push(f[c]), l[e + u[c]] = h
									}
									delete l[e]
								}
							}
						});
						for (A in l) {
							O = z(l[A]), M = O[0], P = O[1], H = O[2];
							A = p.Names.camelCase(A);
							B = p.Hooks.getRoot(A), j = !1;
							if (y(s).isSVG || "tween" === B || p.Names.prefixCheck(B)[1] !== !1 || p.Normalizations.registered[B] !== r) {
								(o.display !== r && null !== o.display && "none" !== o.display || o.visibility !== r && "hidden" !== o.visibility) && /opacity|filter/.test(A) && !H && 0 !== M && (H = 0), o._cacheValues && T && T[A] ? (H === r && (H = T[A].endValue + T[A].unitType), j = y(s).rootPropertyValueCache[B]) : p.Hooks.registered[A] ? H === r ? (j = p.getPropertyValue(s, B), H = p.getPropertyValue(s, A, j)) : j = p.Hooks.templates[B][1] : H === r && (H = p.getPropertyValue(s, A));
								R = !1;
								if (F = W(A, H), H = F[0], q = F[1], F = W(A, M), M = F[0].replace(/^([+-\/*])=/, function(e, t) {
										return R = t, ""
									}), I = F[1], H = parseFloat(H) || 0, M = parseFloat(M) || 0, "%" === I && (/^(fontSize|lineHeight)$/.test(A) ? (M /= 100, I = "em") : /^scale/.test(A) ? (M /= 100, I = "") : /(Red|Green|Blue)$/i.test(A) && (M = M / 100 * 255, I = "")), /[\/*]/.test(R)) I = q;
								else if (q !== I && 0 !== H)
									if (0 === M) I = q;
									else {
										e = e || X();
										U = /margin|padding|left|right|width|text|word|letter/i.test(A) || /X$/.test(A) || "x" === A ? "x" : "y";
										switch (q) {
											case "%":
												H *= "x" === U ? e.percentToPxWidth : e.percentToPxHeight;
												break;
											case "px":
												break;
											default:
												H *= e[q + "ToPx"]
										}
										switch (I) {
											case "%":
												H *= 1 / ("x" === U ? e.percentToPxWidth : e.percentToPxHeight);
												break;
											case "px":
												break;
											default:
												H *= 1 / e[I + "ToPx"]
										}
									}
								switch (R) {
									case "+":
										M = H + M;
										break;
									case "-":
										M = H - M;
										break;
									case "*":
										M = H * M;
										break;
									case "/":
										M = H / M
								}
								d[A] = {
									rootPropertyValue: j,
									startValue: H,
									currentValue: H,
									endValue: M,
									unitType: I,
									easing: P
								}, c.debug && console.log("tweensContainer (" + A + "): " + JSON.stringify(d[A]), s)
							} else c.debug && console.log("Skipping [" + B + "] due to a lack of browser support.")
						}
						d.element = s
					}
					d.element && (p.Values.addClass(s, "velocity-animating"), D.push(d), "" === o.queue && (y(s).tweensContainer = d, y(s).opts = o), y(s).isAnimating = !0, b === m - 1 ? (c.State.calls.push([D, a, o, null, N.resolver]), c.State.isTicking === !1 && (c.State.isTicking = !0, S())) : b++)
				}
				var e, s, o, d;
				s = this, o = i.extend({}, c.defaults, h), d = {};
				switch (y(s) === r && c.init(s), parseFloat(o.delay) && o.queue !== !1 && i.queue(s, o.queue, function(e) {
					c.velocityQueueEntryFlag = !0, y(s).delayTimer = {
						setTimeout: setTimeout(e, parseFloat(o.delay)),
						next: e
					}
				}), o.duration.toString().toLowerCase()) {
					case "fast":
						o.duration = 200;
						break;
					case "normal":
						o.duration = f;
						break;
					case "slow":
						o.duration = 600;
						break;
					default:
						o.duration = parseFloat(o.duration) || 1
				}
				c.mock !== !1 && (c.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(c.mock) || 1, o.delay *= parseFloat(c.mock) || 1)), o.easing = E(o.easing, o.duration), o.begin && !u.isFunction(o.begin) && (o.begin = null), o.progress && !u.isFunction(o.progress) && (o.progress = null), o.complete && !u.isFunction(o.complete) && (o.complete = null), o.display !== r && null !== o.display && (o.display = o.display.toString().toLowerCase(), "auto" === o.display && (o.display = c.CSS.Values.getDisplayType(s))), o.visibility !== r && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()), o.mobileHA = o.mobileHA && c.State.isMobile && !c.State.isGingerbread, o.queue === !1 ? o.delay ? setTimeout(v, o.delay) : v() : i.queue(s, o.queue, function(e, t) {
					return t === !0 ? (N.promise && N.resolver(a), !0) : (c.velocityQueueEntryFlag = !0, void v(e))
				}), "" !== o.queue && "fx" !== o.queue || "inprogress" === i.queue(s)[0] || i.dequeue(s)
			}
			var e, s, o, a, l, h, v, m, b, w, T, N, C, k, L, A, O, M, _, D, P, H, B;
			v = arguments[0] && (arguments[0].p || i.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || u.isString(arguments[0].properties));
			if (u.isWrapped(this) ? (e = !1, o = 0, a = this, s = this) : (e = !0, o = 1, a = v ? arguments[0].elements || arguments[0].e : arguments[0]), a = g(a)) {
				v ? (l = arguments[0].properties || arguments[0].p, h = arguments[0].options || arguments[0].o) : (l = arguments[o], h = arguments[o + 1]);
				m = a.length, b = 0;
				if (!/^(stop|finish|finishAll)$/i.test(l) && !i.isPlainObject(h)) {
					w = o + 1;
					h = {};
					for (T = w; T < arguments.length; T++) u.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? u.isString(arguments[T]) || u.isArray(arguments[T]) ? h.easing = arguments[T] : u.isFunction(arguments[T]) && (h.complete = arguments[T]) : h.duration = arguments[T]
				}
				N = {
					promise: null,
					resolver: null,
					rejecter: null
				};
				e && c.Promise && (N.promise = new c.Promise(function(e, t) {
					N.resolver = e, N.rejecter = t
				}));
				switch (l) {
					case "scroll":
						C = "scroll";
						break;
					case "reverse":
						C = "reverse";
						break;
					case "finish":
					case "finishAll":
					case "stop":
						i.each(a, function(e, t) {
							y(t) && y(t).delayTimer && (clearTimeout(y(t).delayTimer.setTimeout), y(t).delayTimer.next && y(t).delayTimer.next(), delete y(t).delayTimer), "finishAll" !== l || h !== !0 && !u.isString(h) || (i.each(i.queue(t, u.isString(h) ? h : ""), function(e, t) {
								u.isFunction(t) && t()
							}), i.queue(t, u.isString(h) ? h : "", []))
						});
						k = [];
						return i.each(c.State.calls, function(e, t) {
							t && i.each(t[1], function(n, s) {
								var o = h === r ? "" : h;
								return o === !0 || t[2].queue === o || h === r && t[2].queue === !1 ? void i.each(a, function(n, r) {
									r === s && ((h === !0 || u.isString(h)) && (i.each(i.queue(r, u.isString(h) ? h : ""), function(e, t) {
										u.isFunction(t) && t(null, !0)
									}), i.queue(r, u.isString(h) ? h : "", [])), "stop" === l ? (y(r) && y(r).tweensContainer && o !== !1 && i.each(y(r).tweensContainer, function(e, t) {
										t.endValue = t.currentValue
									}), k.push(e)) : ("finish" === l || "finishAll" === l) && (t[2].duration = 1))
								}) : !0
							})
						}), "stop" === l && (i.each(k, function(e, t) {
							x(t, !0)
						}), N.promise && N.resolver(a)), j();
					default:
						if (!i.isPlainObject(l) || u.isEmptyObject(l)) {
							if (u.isString(l) && c.Redirects[l]) {
								L = i.extend({}, h), A = L.duration, O = L.delay || 0;
								return L.backwards === !0 && (a = i.extend(!0, [], a).reverse()), i.each(a, function(e, t) {
									parseFloat(L.stagger) ? L.delay = O + parseFloat(L.stagger) * e : u.isFunction(L.stagger) && (L.delay = O + L.stagger.call(t, e, m)), L.drag && (L.duration = parseFloat(A) || (/^(callout|transition)/.test(l) ? 1e3 : f), L.duration = Math.max(L.duration * (L.backwards ? 1 - e / m : (e + 1) / m), .75 * L.duration, 200)), c.Redirects[l].call(t, t, L || {}, e, m, a, N.promise ? N : r)
								}), j()
							}
							M = "Velocity: First argument (" + l + ") was not a property map, a known action, or a registered redirect. Aborting.";
							return N.promise ? N.rejecter(new Error(M)) : console.log(M), j()
						}
						C = "start"
				}
				_ = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				}, D = [];
				i.each(a, function(e, t) {
					u.isNode(t) && F.call(t)
				});
				L = i.extend({}, c.defaults, h);
				if (L.loop = parseInt(L.loop), P = 2 * L.loop - 1, L.loop)
					for (H = 0; P > H; H++) {
						B = {
							delay: L.delay,
							progress: L.progress
						};
						H === P - 1 && (B.display = L.display, B.visibility = L.visibility, B.complete = L.complete), d(a, "reverse", B)
					}
				return j()
			}
		};
		c = i.extend(d, c), c.animate = d;
		v = t.requestAnimationFrame || o;
		return c.State.isMobile || n.hidden === r || n.addEventListener("visibilitychange", function() {
			n.hidden ? (v = function(e) {
				return setTimeout(function() {
					e(!0)
				}, 16)
			}, S()) : v = t.requestAnimationFrame || o
		}), e.Velocity = c, e !== t && (e.fn.velocity = d, e.fn.velocity.defaults = c.defaults), i.each(["Down", "Up"], function(e, t) {
			c.Redirects["slide" + t] = function(e, n, s, o, u, a) {
				var f = i.extend({}, n),
					l = f.begin,
					h = f.complete,
					p = {
						height: "",
						marginTop: "",
						marginBottom: "",
						paddingTop: "",
						paddingBottom: ""
					},
					d = {};
				f.display === r && (f.display = "Down" === t ? "inline" === c.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), f.begin = function() {
					var n, r;
					l && l.call(u, u);
					for (n in p) {
						d[n] = e.style[n];
						r = c.CSS.getPropertyValue(e, n);
						p[n] = "Down" === t ? [r, 0] : [0, r]
					}
					d.overflow = e.style.overflow, e.style.overflow = "hidden"
				}, f.complete = function() {
					var t;
					for (t in d) e.style[t] = d[t];
					h && h.call(u, u), a && a.resolver(u)
				}, c(e, p, f)
			}
		}), i.each(["In", "Out"], function(e, t) {
			c.Redirects["fade" + t] = function(e, n, s, o, u, a) {
				var f = i.extend({}, n),
					l = {
						opacity: "In" === t ? 1 : 0
					},
					h = f.complete;
				f.complete = s !== o - 1 ? f.begin = null : function() {
					h && h.call(u, u), a && a.resolver(u)
				}, f.display === r && (f.display = "In" === t ? "auto" : "none"), c(this, l, f)
			}
		}), c
	}(window.jQuery || window.Zepto || window, window, document)
});
(function(e) {
	typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
	function r(e) {
		if (t.raw) return e;
		try {
			return decodeURIComponent(e.replace(n, " "))
		} catch (r) {}
	}

	function i(e) {
		e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		e = r(e);
		try {
			return t.json ? JSON.parse(e) : e
		} catch (n) {}
	}
	var t, n;
	n = /\+/g;
	t = e.cookie = function(n, s, o) {
		var u, a, f, l, c, h, p, d, v;
		if (s !== undefined) {
			o = e.extend({}, t.defaults, o);
			if (typeof o.expires == "number") {
				u = o.expires, a = o.expires = new Date;
				a.setDate(a.getDate() + u)
			}
			s = t.json ? JSON.stringify(s) : String(s);
			return document.cookie = [t.raw ? n : encodeURIComponent(n), "=", t.raw ? s : encodeURIComponent(s), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
		}
		f = n ? undefined : {}, l = document.cookie ? document.cookie.split("; ") : [];
		for (c = 0, h = l.length; c < h; c++) {
			p = l[c].split("="), d = r(p.shift()), v = p.join("=");
			if (n && n === d) {
				f = i(v);
				break
			}!n && (v = i(v)) !== undefined && (f[d] = v)
		}
		return f
	};
	t.defaults = {};
	e.removeCookie = function(t, n) {
		if (e.cookie(t) !== undefined) {
			e.cookie(t, "", e.extend({}, n, {
				expires: -1
			}));
			return !0
		}
		return !1
	}
});
(function(e, t, n, r) {
	var i = n("html"),
		s = n(e),
		o = n(t),
		u = n.fancybox = function() {
			u.open.apply(this, arguments)
		},
		a = navigator.userAgent.match(/msie/i),
		f = null,
		l = t.createTouch !== r,
		c = function(e) {
			return e && e.hasOwnProperty && e instanceof n
		},
		h = function(e) {
			return e && "string" === n.type(e)
		},
		p = function(e) {
			return h(e) && 0 < e.indexOf("%")
		},
		d = function(e, t) {
			var n = parseInt(e, 10) || 0;
			t && p(e) && (n *= u.getViewport()[t] / 100);
			return Math.ceil(n)
		},
		v = function(e, t) {
			return d(e, t) + "px"
		};
	n.extend(u, {
		version: "2.1.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !0,
			autoCenter: !l,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: .5,
			leftRatio: .5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3e3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {
				dataType: "html",
				headers: {
					"X-fancyBox": !0
				}
			},
			iframe: {
				scrolling: "auto",
				preload: !0
			},
			swf: {
				wmode: "transparent",
				allowfullscreen: "true",
				allowscriptaccess: "always"
			},
			keys: {
				next: {
					13: "left",
					34: "up",
					39: "left",
					40: "up"
				},
				prev: {
					8: "right",
					33: "down",
					37: "right",
					38: "down"
				},
				close: [27],
				play: [32],
				toggle: [70]
			},
			direction: {
				next: "left",
				prev: "right"
			},
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (a ? ' allowtransparency="true"' : "") + "></iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {
				overlay: !0,
				title: !0
			},
			onCancel: n.noop,
			beforeLoad: n.noop,
			afterLoad: n.noop,
			beforeShow: n.noop,
			afterShow: n.noop,
			beforeChange: n.noop,
			beforeClose: n.noop,
			afterClose: n.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: {
			timer: null,
			isActive: !1
		},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function(e, t) {
			if (e && (n.isPlainObject(t) || (t = {}), !1 !== u.close(!0))) return n.isArray(e) || (e = c(e) ? n(e).get() : [e]), n.each(e, function(i, s) {
				var o, a, f, l, p, d = {};
				"object" === n.type(s) && (s.nodeType && (s = n(s)), c(s) ? (d = {
					href: s.data("fancybox-href") || s.attr("href"),
					title: s.data("fancybox-title") || s.attr("title"),
					isDom: !0,
					element: s
				}, n.metadata && n.extend(!0, d, s.metadata())) : d = s);
				o = t.href || d.href || (h(s) ? s : null);
				a = t.title !== r ? t.title : d.title || "";
				l = (f = t.content || d.content) ? "html" : t.type || d.type;
				!l && d.isDom && (l = s.data("fancybox-type"), l || (l = (l = s.prop("class").match(/fancybox\.(\w+)/)) ? l[1] : null));
				h(o) && (l || (u.isImage(o) ? l = "image" : u.isSWF(o) ? l = "swf" : "#" === o.charAt(0) ? l = "inline" : h(s) && (l = "html", f = s)), "ajax" === l && (p = o.split(/\s+/, 2), o = p.shift(), p = p.shift()));
				f || ("inline" === l ? o ? f = n(h(o) ? o.replace(/.*(?=#[^\s]+$)/, "") : o) : d.isDom && (f = s) : "html" === l ? f = o : !l && !o && d.isDom && (l = "inline", f = s));
				n.extend(d, {
					href: o,
					type: l,
					content: f,
					title: a,
					selector: p
				});
				e[i] = d
			}), u.opts = n.extend(!0, {}, u.defaults, t), t.keys !== r && (u.opts.keys = t.keys ? n.extend({}, u.defaults.keys, t.keys) : !1), u.group = e, u._start(u.opts.index)
		},
		cancel: function() {
			var e = u.coming;
			e && !1 !== u.trigger("onCancel") && (u.hideLoading(), u.ajaxLoad && u.ajaxLoad.abort(), u.ajaxLoad = null, u.imgPreload && (u.imgPreload.onload = u.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), u.coming = null, u.current || u._afterZoomOut(e))
		},
		close: function(e) {
			u.cancel();
			!1 !== u.trigger("beforeClose") && (u.unbindEvents(), u.isActive && (!u.isOpen || !0 === e ? (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), u._afterZoomOut()) : (u.isOpen = u.isOpened = !1, u.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), u.wrap.stop(!0, !0).removeClass("fancybox-opened"), u.transitions[u.current.closeMethod]())))
		},
		play: function(e) {
			var t = function() {
					clearTimeout(u.player.timer)
				},
				n = function() {
					t();
					u.current && u.player.isActive && (u.player.timer = setTimeout(u.next, u.current.playSpeed))
				},
				r = function() {
					t();
					o.unbind(".player");
					u.player.isActive = !1;
					u.trigger("onPlayEnd")
				};
			!0 === e || !u.player.isActive && !1 !== e ? u.current && (u.current.loop || u.current.index < u.group.length - 1) && (u.player.isActive = !0, o.bind({
				"onCancel.player beforeClose.player": r,
				"onUpdate.player": n,
				"beforeLoad.player": t
			}), n(), u.trigger("onPlayStart")) : r()
		},
		next: function(e) {
			var t = u.current;
			t && (h(e) || (e = t.direction.next), u.jumpto(t.index + 1, e, "next"))
		},
		prev: function(e) {
			var t = u.current;
			t && (h(e) || (e = t.direction.prev), u.jumpto(t.index - 1, e, "prev"))
		},
		jumpto: function(e, t, n) {
			var i = u.current;
			i && (e = d(e), u.direction = t || i.direction[e >= i.index ? "next" : "prev"], u.router = n || "jumpto", i.loop && (0 > e && (e = i.group.length + e % i.group.length), e %= i.group.length), i.group[e] !== r && (u.cancel(), u._start(e)))
		},
		reposition: function(e, t) {
			var r, i = u.current,
				s = i ? i.wrap : null;
			s && (r = u._getPosition(t), e && "scroll" === e.type ? (delete r.position, s.stop(!0, !0).animate(r, 200)) : (s.css(r), i.pos = n.extend({}, i.dim, r)))
		},
		update: function(e) {
			var t = e && e.type,
				n = !t || "orientationchange" === t;
			n && (clearTimeout(f), f = null);
			u.isOpen && !f && (f = setTimeout(function() {
				var r = u.current;
				r && !u.isClosing && (u.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && r.autoResize) && u._setDimension(), "scroll" === t && r.canShrink || u.reposition(e), u.trigger("onUpdate"), f = null)
			}, n && !l ? 0 : 300))
		},
		toggle: function(e) {
			u.isOpen && (u.current.fitToView = "boolean" === n.type(e) ? e : !u.current.fitToView, l && (u.wrap.removeAttr("style").addClass("fancybox-tmp"), u.trigger("onUpdate")), u.update())
		},
		hideLoading: function() {
			o.unbind(".loading");
			n("#fancybox-loading").remove()
		},
		showLoading: function() {
			var e, t;
			u.hideLoading();
			e = n('<div id="fancybox-loading"><div></div></div>').click(u.cancel).appendTo("body");
			o.bind("keydown.loading", function(e) {
				27 === (e.which || e.keyCode) && (e.preventDefault(), u.cancel())
			});
			u.defaults.fixed || (t = u.getViewport(), e.css({
				position: "absolute",
				top: .5 * t.h + t.y,
				left: .5 * t.w + t.x
			}))
		},
		getViewport: function() {
			var t = u.current && u.current.locked || !1,
				n = {
					x: s.scrollLeft(),
					y: s.scrollTop()
				};
			t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = l && e.innerWidth ? e.innerWidth : s.width(), n.h = l && e.innerHeight ? e.innerHeight : s.height());
			return n
		},
		unbindEvents: function() {
			u.wrap && c(u.wrap) && u.wrap.unbind(".fb");
			o.unbind(".fb");
			s.unbind(".fb")
		},
		bindEvents: function() {
			var e, t = u.current;
			t && (s.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), u.update), (e = t.keys) && o.bind("keydown.fb", function(i) {
				var s = i.which || i.keyCode,
					o = i.target || i.srcElement;
				if (27 === s && u.coming) return !1;
				!i.ctrlKey && !i.altKey && !i.shiftKey && !i.metaKey && (!o || !o.type && !n(o).is("[contenteditable]")) && n.each(e, function(e, o) {
					if (1 < t.group.length && o[s] !== r) return u[e](o[s]), i.preventDefault(), !1;
					if (-1 < n.inArray(s, o)) return u[e](), i.preventDefault(), !1
				})
			}), n.fn.mousewheel && t.mouseWheel && u.wrap.bind("mousewheel.fb", function(e, r, i, s) {
				var o, a;
				for (o = n(e.target || null), a = !1; o.length && !a && !o.is(".fancybox-skin") && !o.is(".fancybox-wrap");) a = o[0] && (!o[0].style.overflow || "hidden" !== o[0].style.overflow) && (o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth || o[0].clientHeight && o[0].scrollHeight > o[0].clientHeight), o = n(o).parent();
				if (0 !== r && !a && 1 < u.group.length && !t.canShrink) {
					0 < s || 0 < i ? u.prev(0 < s ? "down" : "left") : (0 > s || 0 > i) && u.next(0 > s ? "up" : "right");
					e.preventDefault()
				}
			}))
		},
		trigger: function(e, t) {
			var r, i = t || u.coming || u.current;
			if (i) {
				n.isFunction(i[e]) && (r = i[e].apply(i, Array.prototype.slice.call(arguments, 1)));
				if (!1 === r) return !1;
				i.helpers && n.each(i.helpers, function(t, r) {
					r && u.helpers[t] && n.isFunction(u.helpers[t][e]) && u.helpers[t][e](n.extend(!0, {}, u.helpers[t].defaults, r), i)
				});
				o.trigger(e)
			}
		},
		isImage: function(e) {
			return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
		},
		isSWF: function(e) {
			return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function(e) {
			var t, r, i = {};
			e = d(e);
			t = u.group[e] || null;
			if (!t) return !1;
			i = n.extend(!0, {}, u.opts, t);
			t = i.margin;
			r = i.padding;
			"number" === n.type(t) && (i.margin = [t, t, t, t]);
			"number" === n.type(r) && (i.padding = [r, r, r, r]);
			i.modal && n.extend(!0, i, {
				closeBtn: !1,
				closeClick: !1,
				nextClick: !1,
				arrows: !1,
				mouseWheel: !1,
				keys: null,
				helpers: {
					overlay: {
						closeClick: !1
					}
				}
			});
			i.autoSize && (i.autoWidth = i.autoHeight = !0);
			"auto" === i.width && (i.autoWidth = !0);
			"auto" === i.height && (i.autoHeight = !0);
			i.group = u.group;
			i.index = e;
			u.coming = i;
			if (!1 === u.trigger("beforeLoad")) u.coming = null;
			else {
				r = i.type;
				t = i.href;
				if (!r) return u.coming = null, u.current && u.router && "jumpto" !== u.router ? (u.current.index = e, u[u.router](u.direction)) : !1;
				u.isActive = !0;
				if ("image" === r || "swf" === r) i.autoHeight = i.autoWidth = !1, i.scrolling = "visible";
				"image" === r && (i.aspectRatio = !0);
				"iframe" === r && l && (i.scrolling = "scroll");
				i.wrap = n(i.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + i.wrapCSS).appendTo(i.parent || "body");
				n.extend(i, {
					skin: n(".fancybox-skin", i.wrap),
					outer: n(".fancybox-outer", i.wrap),
					inner: n(".fancybox-inner", i.wrap)
				});
				n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
					i.skin.css("padding" + t, v(i.padding[e]))
				});
				u.trigger("onReady");
				if ("inline" === r || "html" === r) {
					if (!i.content || !i.content.length) return u._error("content")
				} else if (!t) return u._error("href");
				"image" === r ? u._loadImage() : "ajax" === r ? u._loadAjax() : "iframe" === r ? u._loadIframe() : u._afterLoad()
			}
		},
		_error: function(e) {
			n.extend(u.coming, {
				type: "html",
				autoWidth: !0,
				autoHeight: !0,
				minWidth: 0,
				minHeight: 0,
				scrolling: "no",
				hasError: e,
				content: u.coming.tpl.error
			});
			u._afterLoad()
		},
		_loadImage: function() {
			var e = u.imgPreload = new Image;
			e.onload = function() {
				this.onload = this.onerror = null;
				u.coming.width = this.width / u.opts.pixelRatio;
				u.coming.height = this.height / u.opts.pixelRatio;
				u._afterLoad()
			};
			e.onerror = function() {
				this.onload = this.onerror = null;
				u._error("image")
			};
			e.src = u.coming.href;
			!0 !== e.complete && u.showLoading()
		},
		_loadAjax: function() {
			var e = u.coming;
			u.showLoading();
			u.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
				url: e.href,
				error: function(e, t) {
					u.coming && "abort" !== t ? u._error("ajax", e) : u.hideLoading()
				},
				success: function(t, n) {
					"success" === n && (e.content = t, u._afterLoad())
				}
			}))
		},
		_loadIframe: function() {
			var e = u.coming,
				t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
			n(e.wrap).bind("onReset", function() {
				try {
					n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (e) {}
			});
			e.iframe.preload && (u.showLoading(), t.one("load", function() {
				n(this).data("ready", 1);
				l || n(this).bind("load.fb", u.update);
				n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
				u._afterLoad()
			}));
			e.content = t.appendTo(e.inner);
			e.iframe.preload || u._afterLoad()
		},
		_preloadImages: function() {
			var e, t, n = u.group,
				r = u.current,
				i = n.length,
				s = r.preload ? Math.min(r.preload, i - 1) : 0;
			for (t = 1; t <= s; t += 1) e = n[(r.index + t) % i], "image" === e.type && e.href && ((new Image).src = e.href)
		},
		_afterLoad: function() {
			var e, t, r, i, s, o = u.coming,
				a = u.current;
			u.hideLoading();
			if (o && !1 !== u.isActive)
				if (!1 === u.trigger("afterLoad", o, a)) o.wrap.stop(!0).trigger("onReset").remove(), u.coming = null;
				else {
					a && (u.trigger("beforeChange", a), a.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
					u.unbindEvents();
					e = o.content;
					t = o.type;
					r = o.scrolling;
					n.extend(u, {
						wrap: o.wrap,
						skin: o.skin,
						outer: o.outer,
						inner: o.inner,
						current: o,
						previous: a
					});
					i = o.href;
					switch (t) {
						case "inline":
						case "ajax":
						case "html":
							o.selector ? e = n("<div>").html(e).find(o.selector) : c(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), o.wrap.bind("onReset", function() {
								n(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
							}));
							break;
						case "image":
							e = o.tpl.image.replace("{href}", i);
							break;
						case "swf":
							e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + i + '"></param>', s = "", n.each(o.swf, function(t, n) {
								e += '<param name="' + t + '" value="' + n + '"></param>';
								s += " " + t + '="' + n + '"'
							}), e += '<embed src="' + i + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>"
					}(!c(e) || !e.parent().is(o.inner)) && o.inner.append(e);
					u.trigger("beforeShow");
					o.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r);
					u._setDimension();
					u.reposition();
					u.isOpen = !1;
					u.coming = null;
					u.bindEvents();
					u.isOpened ? a.prevMethod && u.transitions[a.prevMethod]() : n(".fancybox-wrap").not(o.wrap).stop(!0).trigger("onReset").remove();
					u.transitions[u.isOpened ? o.nextMethod : o.openMethod]();
					u._preloadImages()
				}
		},
		_setDimension: function() {
			var e, t, r, i, s, o, a, f, l, c, h, m, g, y, b, w, E, S, x, T, N, C, k = u.getViewport(),
				L = 0,
				A = !1,
				O = !1;
			A = u.wrap, e = u.skin, t = u.inner, r = u.current, O = r.width, i = r.height, s = r.minWidth, o = r.minHeight, a = r.maxWidth, f = r.maxHeight, l = r.scrolling, c = r.scrollOutside ? r.scrollbarWidth : 0, h = r.margin, m = d(h[1] + h[3]), g = d(h[0] + h[2]);
			A.add(e).add(t).width("auto").height("auto").removeClass("fancybox-tmp");
			h = d(e.outerWidth(!0) - e.width());
			y = d(e.outerHeight(!0) - e.height());
			b = m + h;
			w = g + y;
			E = p(O) ? (k.w - b) * d(O) / 100 : O;
			S = p(i) ? (k.h - w) * d(i) / 100 : i;
			if ("iframe" === r.type) {
				if (C = r.content, r.autoHeight && 1 === C.data("ready")) try {
					C[0].contentWindow.document.location && (t.width(E).height(9999), x = C.contents().find("body"), c && x.css("overflow-x", "hidden"), S = x.outerHeight(!0))
				} catch (M) {}
			} else if (r.autoWidth || r.autoHeight) t.addClass("fancybox-tmp"), r.autoWidth || t.width(E), r.autoHeight || t.height(S), r.autoWidth && (E = t.width()), r.autoHeight && (S = t.height()), t.removeClass("fancybox-tmp");
			O = d(E);
			i = d(S);
			N = E / S;
			s = d(p(s) ? d(s, "w") - b : s);
			a = d(p(a) ? d(a, "w") - b : a);
			o = d(p(o) ? d(o, "h") - w : o);
			f = d(p(f) ? d(f, "h") - w : f);
			x = a;
			T = f;
			r.fitToView && (a = Math.min(k.w - b, a), f = Math.min(k.h - w, f));
			b = k.w - m;
			g = k.h - g;
			r.aspectRatio ? (O > a && (O = a, i = d(O / N)), i > f && (i = f, O = d(i * N)), O < s && (O = s, i = d(O / N)), i < o && (i = o, O = d(i * N))) : (O = Math.max(s, Math.min(O, a)), r.autoHeight && "iframe" !== r.type && (t.width(O), i = t.height()), i = Math.max(o, Math.min(i, f)));
			if (r.fitToView)
				if (t.width(O).height(i), A.width(O + h), k = A.width(), m = A.height(), r.aspectRatio)
					for (;
						(k > b || m > g) && O > s && i > o && !(19 < L++);) i = Math.max(o, Math.min(f, i - 10)), O = d(i * N), O < s && (O = s, i = d(O / N)), O > a && (O = a, i = d(O / N)), t.width(O).height(i), A.width(O + h), k = A.width(), m = A.height();
				else O = Math.max(s, Math.min(O, O - (k - b))), i = Math.max(o, Math.min(i, i - (m - g)));
			c && "auto" === l && i < S && O + h + c < b && (O += c);
			t.width(O).height(i);
			A.width(O + h);
			k = A.width();
			m = A.height();
			A = (k > b || m > g) && O > s && i > o;
			O = r.aspectRatio ? O < x && i < T && O < E && i < S : (O < x || i < T) && (O < E || i < S);
			n.extend(r, {
				dim: {
					width: v(k),
					height: v(m)
				},
				origWidth: E,
				origHeight: S,
				canShrink: A,
				canExpand: O,
				wPadding: h,
				hPadding: y,
				wrapSpace: m - e.outerHeight(!0),
				skinSpace: e.height() - i
			});
			!C && r.autoHeight && i > o && i < f && !O && t.height("auto")
		},
		_getPosition: function(e) {
			var t = u.current,
				n = u.getViewport(),
				r = t.margin,
				i = u.wrap.width() + r[1] + r[3],
				s = u.wrap.height() + r[0] + r[2];
			r = {
				position: "absolute",
				top: r[0],
				left: r[3]
			};
			t.autoCenter && t.fixed && !e && s <= n.h && i <= n.w ? r.position = "fixed" : t.locked || (r.top += n.y, r.left += n.x);
			r.top = v(Math.max(r.top, r.top + (n.h - s) * t.topRatio));
			r.left = v(Math.max(r.left, r.left + (n.w - i) * t.leftRatio));
			return r
		},
		_afterZoomIn: function() {
			var e = u.current;
			e && (u.isOpen = u.isOpened = !0, u.wrap.css("overflow", "visible").addClass("fancybox-opened"), u.update(), (e.closeClick || e.nextClick && 1 < u.group.length) && u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
				!n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), u[e.closeClick ? "close" : "next"]())
			}), e.closeBtn && n(e.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(e) {
				e.preventDefault();
				u.close()
			}), e.arrows && 1 < u.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev), (e.loop || e.index < u.group.length - 1) && n(e.tpl.next).appendTo(u.outer).bind("click.fb", u.next)), u.trigger("afterShow"), !e.loop && e.index === e.group.length - 1 ? u.play(!1) : u.opts.autoPlay && !u.player.isActive && (u.opts.autoPlay = !1, u.play()))
		},
		_afterZoomOut: function(e) {
			e = e || u.current;
			n(".fancybox-wrap").trigger("onReset").remove();
			n.extend(u, {
				group: {},
				opts: {},
				router: !1,
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				isClosing: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			});
			u.trigger("afterClose", e)
		}
	});
	u.transitions = {
		getOrigPosition: function() {
			var e = u.current,
				t = e.element,
				n = e.orig,
				r = {},
				i = 50,
				s = 50,
				o = e.hPadding,
				a = e.wPadding,
				f = u.getViewport();
			!n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t));
			c(n) ? (r = n.offset(), n.is("img") && (i = n.outerWidth(), s = n.outerHeight())) : (r.top = f.y + (f.h - s) * e.topRatio, r.left = f.x + (f.w - i) * e.leftRatio);
			if ("fixed" === u.wrap.css("position") || e.locked) r.top -= f.y, r.left -= f.x;
			return r = {
				top: v(r.top - o * e.topRatio),
				left: v(r.left - a * e.leftRatio),
				width: v(i + a),
				height: v(s + o)
			}
		},
		step: function(e, t) {
			var n, r = t.prop,
				i = u.current,
				s = i.wrapSpace,
				o = i.skinSpace;
			if ("width" === r || "height" === r) n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), u.isClosing && (n = 1 - n), i = "width" === r ? i.wPadding : i.hPadding, i = e - i, u.skin[r](d("width" === r ? i : i - s * n)), u.inner[r](d("width" === r ? i : i - s * n - o * n))
		},
		zoomIn: function() {
			var e = u.current,
				t = e.pos,
				r = e.openEffect,
				i = "elastic" === r,
				s = n.extend({
					opacity: 1
				}, t);
			delete s.position;
			i ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1);
			u.wrap.css(t).animate(s, {
				duration: "none" === r ? 0 : e.openSpeed,
				easing: e.openEasing,
				step: i ? this.step : null,
				complete: u._afterZoomIn
			})
		},
		zoomOut: function() {
			var e = u.current,
				t = e.closeEffect,
				n = "elastic" === t,
				r = {
					opacity: .1
				};
			n && (r = this.getOrigPosition(), e.closeOpacity && (r.opacity = .1));
			u.wrap.animate(r, {
				duration: "none" === t ? 0 : e.closeSpeed,
				easing: e.closeEasing,
				step: n ? this.step : null,
				complete: u._afterZoomOut
			})
		},
		changeIn: function() {
			var e, t = u.current,
				n = t.nextEffect,
				r = t.pos,
				i = {
					opacity: 1
				},
				s = u.direction;
			r.opacity = .1;
			"elastic" === n && (e = "down" === s || "up" === s ? "top" : "left", "down" === s || "right" === s ? (r[e] = v(d(r[e]) - 200), i[e] = "+=200px") : (r[e] = v(d(r[e]) + 200), i[e] = "-=200px"));
			"none" === n ? u._afterZoomIn() : u.wrap.css(r).animate(i, {
				duration: t.nextSpeed,
				easing: t.nextEasing,
				complete: u._afterZoomIn
			})
		},
		changeOut: function() {
			var e = u.previous,
				t = e.prevEffect,
				r = {
					opacity: .1
				},
				i = u.direction;
			"elastic" === t && (r["down" === i || "up" === i ? "top" : "left"] = ("up" === i || "left" === i ? "-" : "+") + "=200px");
			e.wrap.animate(r, {
				duration: "none" === t ? 0 : e.prevSpeed,
				easing: e.prevEasing,
				complete: function() {
					n(this).trigger("onReset").remove()
				}
			})
		}
	};
	u.helpers.overlay = {
		defaults: {
			closeClick: !0,
			speedOut: 200,
			showEarly: !0,
			css: {},
			locked: !l,
			fixed: !0
		},
		overlay: null,
		fixed: !1,
		el: n("html"),
		create: function(e) {
			e = n.extend({}, this.defaults, e);
			this.overlay && this.close();
			this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(u.coming ? u.coming.parent : e.parent);
			this.fixed = !1;
			e.fixed && u.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		},
		open: function(e) {
			var t = this;
			e = n.extend({}, this.defaults, e);
			this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e);
			this.fixed || (s.bind("resize.overlay", n.proxy(this.update, this)), this.update());
			e.closeClick && this.overlay.bind("click.overlay", function(e) {
				if (n(e.target).hasClass("fancybox-overlay")) return u.isActive ? u.close() : t.close(), !1
			});
			this.overlay.css(e.css).show()
		},
		close: function() {
			var e, t;
			s.unbind("resize.overlay");
			this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t));
			n(".fancybox-overlay").remove().hide();
			n.extend(this, {
				overlay: null,
				fixed: !1
			})
		},
		update: function() {
			var e, n = "100%";
			this.overlay.width(n).height("100%");
			a ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (n = o.width())) : o.width() > s.width() && (n = o.width());
			this.overlay.width(n).height(o.height())
		},
		onReady: function(e, t) {
			var r = this.overlay;
			n(".fancybox-overlay").stop(!0, !0);
			r || this.create(e);
			e.locked && this.fixed && t.fixed && (r || (this.margin = o.height() > s.height() ? n("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1);
			!0 === e.showEarly && this.beforeShow.apply(this, arguments)
		},
		beforeShow: function(e, t) {
			var r, i;
			t.locked && (!1 !== this.margin && (n("*").filter(function() {
				return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), r = s.scrollTop(), i = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(r).scrollLeft(i));
			this.open(e)
		},
		onUpdate: function() {
			this.fixed || this.update()
		},
		afterClose: function(e) {
			this.overlay && !u.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
		}
	};
	u.helpers.title = {
		defaults: {
			type: "float",
			position: "bottom"
		},
		beforeShow: function(e) {
			var t = u.current,
				r = t.title,
				i = e.type;
			n.isFunction(r) && (r = r.call(t.element, t));
			if (h(r) && "" !== n.trim(r)) {
				t = n('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + r + "</div>");
				switch (i) {
					case "inside":
						i = u.skin;
						break;
					case "outside":
						i = u.wrap;
						break;
					case "over":
						i = u.inner;
						break;
					default:
						i = u.skin, t.appendTo("body"), a && t.width(t.width()), t.wrapInner('<span class="child"></span>'), u.current.margin[2] += Math.abs(d(t.css("margin-bottom")))
				}
				t["top" === e.position ? "prependTo" : "appendTo"](i)
			}
		}
	};
	n.fn.fancybox = function(e) {
		var t, r = n(this),
			i = this.selector || "",
			s = function(s) {
				var o = n(this).blur(),
					a = t,
					f, l;
				!s.ctrlKey && !s.altKey && !s.shiftKey && !s.metaKey && !o.is(".fancybox-wrap") && (f = e.groupAttr || "data-fancybox-group", l = o.attr(f), l || (f = "rel", l = o.get(0)[f]), l && "" !== l && "nofollow" !== l && (o = i.length ? n(i) : r, o = o.filter("[" + f + '="' + l + '"]'), a = o.index(this)), e.index = a, !1 !== u.open(o, e) && s.preventDefault())
			};
		e = e || {};
		t = e.index || 0;
		!i || !1 === e.live ? r.unbind("click.fb-start").bind("click.fb-start", s) : o.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s);
		this.filter("[data-fancybox-start=1]").trigger("click");
		return this
	};
	o.ready(function() {
		var t, s, o;
		n.scrollbarWidth === r && (n.scrollbarWidth = function() {
			var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
				t = e.children();
			t = t.innerWidth() - t.height(99).innerWidth();
			e.remove();
			return t
		});
		if (n.support.fixedPosition === r) {
			t = n.support;
			s = n('<div style="position:fixed;top:20px;"></div>').appendTo("body");
			o = 20 === s[0].offsetTop || 15 === s[0].offsetTop;
			s.remove();
			t.fixedPosition = o
		}
		n.extend(u.defaults, {
			scrollbarWidth: n.scrollbarWidth(),
			fixed: n.support.fixedPosition,
			parent: n("body")
		});
		t = n(e).width();
		i.addClass("fancybox-lock-test");
		s = n(e).width();
		i.removeClass("fancybox-lock-test");
		n("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
	})
})(window, document, jQuery);
(function(e) {
	"use strict";
	var t = e.fancybox,
		n = function(t, n, r) {
			r = r || "";
			e.type(r) === "object" && (r = e.param(r, !0));
			e.each(n, function(e, n) {
				t = t.replace("$" + e, n || "")
			});
			r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r);
			return t
		};
	t.helpers.media = {
		defaults: {
			youtube: {
				matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params: {
					autoplay: 1,
					autohide: 1,
					fs: 1,
					rel: 0,
					hd: 1,
					wmode: "opaque",
					enablejsapi: 1
				},
				type: "iframe",
				url: "//www.youtube.com/embed/$3"
			},
			vimeo: {
				matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params: {
					autoplay: 1,
					hd: 1,
					show_title: 1,
					show_byline: 1,
					show_portrait: 0,
					fullscreen: 1
				},
				type: "iframe",
				url: "//player.vimeo.com/video/$1"
			},
			metacafe: {
				matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params: {
					autoPlay: "yes"
				},
				type: "swf",
				url: function(t, n, r) {
					r.swf.flashVars = "playerVars=" + e.param(n, !0);
					return "//www.metacafe.com/fplayer/" + t[1] + "/.swf"
				}
			},
			dailymotion: {
				matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
				params: {
					additionalInfos: 0,
					autoStart: 1
				},
				type: "swf",
				url: "//www.dailymotion.com/swf/video/$1"
			},
			twitvid: {
				matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params: {
					autoplay: 0
				},
				type: "iframe",
				url: "//www.twitvid.com/embed.php?guid=$1"
			},
			twitpic: {
				matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type: "image",
				url: "//twitpic.com/show/full/$1/"
			},
			instagram: {
				matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type: "image",
				url: "//$1/p/$2/media/?size=l"
			},
			google_maps: {
				matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type: "iframe",
				url: function(e) {
					return "//maps.google." + e[1] + "/" + e[3] + "" + e[4] + "&output=" + (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
				}
			}
		},
		beforeLoad: function(t, r) {
			var i, s, o, u, a = r.href || "",
				f = !1;
			for (i in t)
				if (t.hasOwnProperty(i)) {
					s = t[i];
					o = a.match(s.matcher);
					if (o) {
						f = s.type;
						u = e.extend(!0, {}, s.params, r[i] || (e.isPlainObject(t[i]) ? t[i].params : null));
						a = e.type(s.url) === "function" ? s.url.call(this, o, u, r) : n(s.url, o, u);
						break
					}
				}
			if (f) {
				r.href = a;
				r.type = f;
				r.autoHeight = !1
			}
		}
	}
})(jQuery);