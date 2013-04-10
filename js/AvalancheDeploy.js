/* jQuery UI - v1.9.2 - 2012-12-13
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.autocomplete.js, jquery.ui.menu.js, jquery.ui.slider.js, jquery.ui.effect.js
 * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */ (function (f, b) {
    function a(j, m) {
        var k, h, l, e = j.nodeName.toLowerCase();
        return "area" === e ? (k = j.parentNode, h = k.name, !j.href || !h || k.nodeName.toLowerCase() !== "map" ? !1 : (l = f("img[usemap=#" + h + "]")[0], !! l && c(l))) : (/input|select|textarea|button|object/.test(e) ? !j.disabled : "a" === e ? j.href || m : m) && c(j)
    }
    function c(e) {
        return f.expr.filters.visible(e) && !f(e).parents().andSelf().filter(function () {
            return f.css(this, "visibility") === "hidden"
        }).length
    }
    var g = 0,
        d = /^ui-id-\d+$/;
    f.ui = f.ui || {};
    if (f.ui.version) {
        return
    }
    f.extend(f.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), f.fn.extend({
        _focus: f.fn.focus,
        focus: function (e, h) {
            return typeof e == "number" ? this.each(function () {
                var j = this;
                setTimeout(function () {
                    f(j).focus(), h && h.call(j)
                }, e)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var e;
            return f.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? e = this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(f.css(this, "position")) && /(auto|scroll)/.test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this, "overflow-x"))
            }).eq(0) : e = this.parents().filter(function () {
                return /(auto|scroll)/.test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? f(document) : e
        },
        zIndex: function (k) {
            if (k !== b) {
                return this.css("zIndex", k)
            }
            if (this.length) {
                var j = f(this[0]),
                    e, h;
                while (j.length && j[0] !== document) {
                    e = j.css("position");
                    if (e === "absolute" || e === "relative" || e === "fixed") {
                        h = parseInt(j.css("zIndex"), 10);
                        if (!isNaN(h) && h !== 0) {
                            return h
                        }
                    }
                    j = j.parent()
                }
            }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++g)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                d.test(this.id) && f(this).removeAttr("id")
            })
        }
    }), f.extend(f.expr[":"], {
        data: f.expr.createPseudo ? f.expr.createPseudo(function (e) {
            return function (h) {
                return !!f.data(h, e)
            }
        }) : function (e, j, h) {
            return !!f.data(e, h[3])
        },
        focusable: function (e) {
            return a(e, !isNaN(f.attr(e, "tabindex")))
        },
        tabbable: function (e) {
            var j = f.attr(e, "tabindex"),
                h = isNaN(j);
            return (h || j >= 0) && a(e, !h)
        }
    }), f(function () {
        var e = document.body,
            h = e.appendChild(h = document.createElement("div"));
        h.offsetHeight, f.extend(h.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), f.support.minHeight = h.offsetHeight === 100, f.support.selectstart = "onselectstart" in h, e.removeChild(h).style.display = "none"
    }), f("<a>").outerWidth(1).jquery || f.each(["Width", "Height"], function (m, k) {
        function e(o, u, q, p) {
            return f.each(h, function () {
                u -= parseFloat(f.css(o, "padding" + this)) || 0, q && (u -= parseFloat(f.css(o, "border" + this + "Width")) || 0), p && (u -= parseFloat(f.css(o, "margin" + this)) || 0)
            }), u
        }
        var h = k === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            j = k.toLowerCase(),
            l = {
                innerWidth: f.fn.innerWidth,
                innerHeight: f.fn.innerHeight,
                outerWidth: f.fn.outerWidth,
                outerHeight: f.fn.outerHeight
            };
        f.fn["inner" + k] = function (o) {
            return o === b ? l["inner" + k].call(this) : this.each(function () {
                f(this).css(j, e(this, o) + "px")
            })
        }, f.fn["outer" + k] = function (o, p) {
            return typeof o != "number" ? l["outer" + k].call(this, o) : this.each(function () {
                f(this).css(j, e(this, o, !0, p) + "px")
            })
        }
    }), f("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (f.fn.removeData = function (e) {
        return function (h) {
            return arguments.length ? e.call(this, f.camelCase(h)) : e.call(this)
        }
    }(f.fn.removeData)),
    function () {
        var e = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        f.ui.ie = e.length ? !0 : !1, f.ui.ie6 = parseFloat(e[1], 10) === 6
    }(), f.fn.extend({
        disableSelection: function () {
            return this.bind((f.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (h) {
                h.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), f.extend(f.ui, {
        plugin: {
            add: function (h, l, k) {
                var e, j = f.ui[h].prototype;
                for (e in k) {
                    j.plugins[e] = j.plugins[e] || [], j.plugins[e].push([l, k[e]])
                }
            },
            call: function (l, j, m) {
                var k, h = l.plugins[j];
                if (!h || !l.element[0].parentNode || l.element[0].parentNode.nodeType === 11) {
                    return
                }
                for (k = 0; k < h.length; k++) {
                    l.options[h[k][0]] && h[k][1].apply(l.element, m)
                }
            }
        },
        contains: f.contains,
        hasScroll: function (h, k) {
            if (f(h).css("overflow") === "hidden") {
                return !1
            }
            var j = k && k === "left" ? "scrollLeft" : "scrollTop",
                e = !1;
            return h[j] > 0 ? !0 : (h[j] = 1, e = h[j] > 0, h[j] = 0, e)
        },
        isOverAxis: function (j, h, k) {
            return j > h && j < h + k
        },
        isOver: function (h, m, k, e, j, l) {
            return f.ui.isOverAxis(h, k, j) && f.ui.isOverAxis(m, e, l)
        }
    })
})(jQuery);
(function (d, b) {
    var f = 0,
        c = Array.prototype.slice,
        a = d.cleanData;
    d.cleanData = function (e) {
        for (var j = 0, h;
        (h = e[j]) != null; j++) {
            try {
                d(h).triggerHandler("remove")
            } catch (g) {}
        }
        a(e)
    }, d.widget = function (j, p, l) {
        var h, k, m, g, e = j.split(".")[0];
        j = j.split(".")[1], h = e + "-" + j, l || (l = p, p = d.Widget), d.expr[":"][h.toLowerCase()] = function (n) {
            return !!d.data(n, h)
        }, d[e] = d[e] || {}, k = d[e][j], m = d[e][j] = function (o, n) {
            if (!this._createWidget) {
                return new m(o, n)
            }
            arguments.length && this._createWidget(o, n)
        }, d.extend(m, k, {
            version: l.version,
            _proto: d.extend({}, l),
            _childConstructors: []
        }), g = new p, g.options = d.widget.extend({}, g.options), d.each(l, function (o, n) {
            d.isFunction(n) && (l[o] = function () {
                var s = function () {
                    return p.prototype[o].apply(this, arguments)
                }, q = function (r) {
                        return p.prototype[o].apply(this, r)
                    };
                return function () {
                    var r = this._super,
                        v = this._superApply,
                        u;
                    return this._super = s, this._superApply = q, u = n.apply(this, arguments), this._super = r, this._superApply = v, u
                }
            }())
        }), m.prototype = d.widget.extend(g, {
            widgetEventPrefix: k ? g.widgetEventPrefix : j
        }, l, {
            constructor: m,
            namespace: e,
            widgetName: j,
            widgetBaseClass: h,
            widgetFullName: h
        }), k ? (d.each(k._childConstructors, function (o, s) {
            var q = s.prototype;
            d.widget(q.namespace + "." + q.widgetName, m, s._proto)
        }), delete k._childConstructors) : p._childConstructors.push(m), d.widget.bridge(j, m)
    }, d.widget.extend = function (l) {
        var h = c.call(arguments, 1),
            j = 0,
            k = h.length,
            g, e;
        for (; j < k; j++) {
            for (g in h[j]) {
                e = h[j][g], h[j].hasOwnProperty(g) && e !== b && (d.isPlainObject(e) ? l[g] = d.isPlainObject(l[g]) ? d.widget.extend({}, l[g], e) : d.widget.extend({}, e) : l[g] = e)
            }
        }
        return l
    }, d.widget.bridge = function (h, e) {
        var g = e.prototype.widgetFullName || h;
        d.fn[h] = function (m) {
            var k = typeof m == "string",
                j = c.call(arguments, 1),
                l = this;
            return m = !k && j.length ? d.widget.extend.apply(null, [m].concat(j)) : m, k ? this.each(function () {
                var o, n = d.data(this, g);
                if (!n) {
                    return d.error("cannot call methods on " + h + " prior to initialization; attempted to call method '" + m + "'")
                }
                if (!d.isFunction(n[m]) || m.charAt(0) === "_") {
                    return d.error("no such method '" + m + "' for " + h + " widget instance")
                }
                o = n[m].apply(n, j);
                if (o !== n && o !== b) {
                    return l = o && o.jquery ? l.pushStack(o.get()) : o, !1
                }
            }) : this.each(function () {
                var n = d.data(this, g);
                n ? n.option(m || {})._init() : d.data(this, g, new e(m, this))
            }), l
        }
    }, d.Widget = function () {}, d.Widget._childConstructors = [], d.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (e, g) {
            g = d(g || this.defaultElement || this)[0], this.element = d(g), this.uuid = f++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = d.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = d(), this.hoverable = d(), this.focusable = d(), g !== this && (d.data(g, this.widgetName, this), d.data(g, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (h) {
                    h.target === g && this.destroy()
                }
            }), this.document = d(g.style ? g.ownerDocument : g.document || g), this.window = d(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: d.noop,
        _getCreateEventData: d.noop,
        _create: d.noop,
        _init: d.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(d.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: d.noop,
        widget: function () {
            return this.element
        },
        option: function (l, j) {
            var g = l,
                h, k, e;
            if (arguments.length === 0) {
                return d.widget.extend({}, this.options)
            }
            if (typeof l == "string") {
                g = {}, h = l.split("."), l = h.shift();
                if (h.length) {
                    k = g[l] = d.widget.extend({}, this.options[l]);
                    for (e = 0; e < h.length - 1; e++) {
                        k[h[e]] = k[h[e]] || {}, k = k[h[e]]
                    }
                    l = h.pop();
                    if (j === b) {
                        return k[l] === b ? null : k[l]
                    }
                    k[l] = j
                } else {
                    if (j === b) {
                        return this.options[l] === b ? null : this.options[l]
                    }
                    g[l] = j
                }
            }
            return this._setOptions(g), this
        },
        _setOptions: function (h) {
            var g;
            for (g in h) {
                this._setOption(g, h[g])
            }
            return this
        },
        _setOption: function (h, g) {
            return this.options[h] = g, h === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! g).attr("aria-disabled", g), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (g, k, j) {
            var e, h = this;
            typeof g != "boolean" && (j = k, k = g, g = !1), j ? (k = e = d(k), this.bindings = this.bindings.add(k)) : (j = k, k = this.element, e = this.widget()), d.each(j, function (q, t) {
                function p() {
                    if (!g && (h.options.disabled === !0 || d(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof t == "string" ? h[t] : t).apply(h, arguments)
                }
                typeof t != "string" && (p.guid = t.guid = t.guid || p.guid || d.guid++);
                var n = q.match(/^(\w+)\s*(.*)$/),
                    s = n[1] + h.eventNamespace,
                    m = n[2];
                m ? e.delegate(m, s, p) : k.bind(s, p)
            })
        },
        _off: function (h, g) {
            g = (g || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, h.unbind(g).undelegate(g)
        },
        _delay: function (j, g) {
            function k() {
                return (typeof j == "string" ? h[j] : j).apply(h, arguments)
            }
            var h = this;
            return setTimeout(k, g || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (g) {
                    d(g.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (g) {
                    d(g.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (g) {
                    d(g.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (g) {
                    d(g.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (g, l, j) {
            var e, h, k = this.options[g];
            j = j || {}, l = d.Event(l), l.type = (g === this.widgetEventPrefix ? g : this.widgetEventPrefix + g).toLowerCase(), l.target = this.element[0], h = l.originalEvent;
            if (h) {
                for (e in h) {
                    e in l || (l[e] = h[e])
                }
            }
            return this.element.trigger(l, j), !(d.isFunction(k) && k.apply(this.element[0], [l].concat(j)) === !1 || l.isDefaultPrevented())
        }
    }, d.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (e, g) {
        d.Widget.prototype["_" + e] = function (l, j, k) {
            typeof j == "string" && (j = {
                effect: j
            });
            var m, h = j ? j === !0 || typeof j == "number" ? g : j.effect || g : e;
            j = j || {}, typeof j == "number" && (j = {
                duration: j
            }), m = !d.isEmptyObject(j), j.complete = k, j.delay && l.delay(j.delay), m && d.effects && (d.effects.effect[h] || d.uiBackCompat !== !1 && d.effects[h]) ? l[e](j) : h !== e && l[h] ? l[h](j.duration, j.easing, k) : l.queue(function (o) {
                d(this)[e](), k && k.call(l[0]), o()
            })
        }
    }), d.uiBackCompat !== !1 && (d.Widget.prototype._getCreateOptions = function () {
        return d.metadata && d.metadata.get(this.element[0])[this.widgetName]
    })
})(jQuery);
(function (b, a) {
    var c = !1;
    b(document).mouseup(function (d) {
        c = !1
    }), b.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var d = this;
            this.element.bind("mousedown." + this.widgetName, function (f) {
                return d._mouseDown(f)
            }).bind("click." + this.widgetName, function (e) {
                if (!0 === b.data(e.target, d.widgetName + ".preventClickEvent")) {
                    return b.removeData(e.target, d.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1
                }
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (e) {
            if (c) {
                return
            }
            this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
            var g = this,
                d = e.which === 1,
                f = typeof this.options.cancel == "string" && e.target.nodeName ? b(e.target).closest(this.options.cancel).length : !1;
            if (!d || f || !this._mouseCapture(e)) {
                return !0
            }
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                g.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
                this._mouseStarted = this._mouseStart(e) !== !1;
                if (!this._mouseStarted) {
                    return e.preventDefault(), !0
                }
            }
            return !0 === b.data(e.target, this.widgetName + ".preventClickEvent") && b.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (h) {
                return g._mouseMove(h)
            }, this._mouseUpDelegate = function (h) {
                return g._mouseUp(h)
            }, b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), c = !0, !0
        },
        _mouseMove: function (d) {
            return !b.ui.ie || document.documentMode >= 9 || !! d.button ? this._mouseStarted ? (this._mouseDrag(d), d.preventDefault()) : (this._mouseDistanceMet(d) && this._mouseDelayMet(d) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, d) !== !1, this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d)), !this._mouseStarted) : this._mouseUp(d)
        },
        _mouseUp: function (d) {
            return b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, d.target === this._mouseDownEvent.target && b.data(d.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(d)), !1
        },
        _mouseDistanceMet: function (d) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function (d) {
            return this.mouseDelayMet
        },
        _mouseStart: function (d) {},
        _mouseDrag: function (d) {},
        _mouseStop: function (d) {},
        _mouseCapture: function (d) {
            return !0
        }
    })
})(jQuery);
(function (w, A) {
    function q(c, a, f) {
        return [parseInt(c[0], 10) * (k.test(c[0]) ? a / 100 : 1), parseInt(c[1], 10) * (k.test(c[1]) ? f / 100 : 1)]
    }
    function d(a, c) {
        return parseInt(w.css(a, c), 10) || 0
    }
    w.ui = w.ui || {};
    var j, b = Math.max,
        m = Math.abs,
        B = Math.round,
        g = /left|center|right/,
        z = /top|center|bottom/,
        y = /[\+\-]\d+%?/,
        v = /^\w+/,
        k = /%$/,
        x = w.fn.position;
    w.position = {
        scrollbarWidth: function () {
            if (j !== A) {
                return j
            }
            var e, a, c = w("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                f = c.children()[0];
            return w("body").append(c), e = f.offsetWidth, c.css("overflow", "scroll"), a = f.offsetWidth, e === a && (a = c[0].clientWidth), c.remove(), j = e - a
        },
        getScrollInfo: function (c) {
            var h = c.isWindow ? "" : c.element.css("overflow-x"),
                f = c.isWindow ? "" : c.element.css("overflow-y"),
                a = h === "scroll" || h === "auto" && c.width < c.element[0].scrollWidth,
                e = f === "scroll" || f === "auto" && c.height < c.element[0].scrollHeight;
            return {
                width: a ? w.position.scrollbarWidth() : 0,
                height: e ? w.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function (a) {
            var e = w(a || window),
                c = w.isWindow(e[0]);
            return {
                element: e,
                isWindow: c,
                offset: e.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop(),
                width: c ? e.width() : e.outerWidth(),
                height: c ? e.height() : e.outerHeight()
            }
        }
    }, w.fn.position = function (C) {
        if (!C || !C.of) {
            return x.apply(this, arguments)
        }
        C = w.extend({}, C);
        var a, e, o, u, c, h = w(C.of),
            r = w.position.getWithinInfo(C.within),
            p = w.position.getScrollInfo(r),
            s = h[0],
            D = (C.collision || "flip").split(" "),
            f = {};
        return s.nodeType === 9 ? (e = h.width(), o = h.height(), u = {
            top: 0,
            left: 0
        }) : w.isWindow(s) ? (e = h.width(), o = h.height(), u = {
            top: h.scrollTop(),
            left: h.scrollLeft()
        }) : s.preventDefault ? (C.at = "left top", e = o = 0, u = {
            top: s.pageY,
            left: s.pageX
        }) : (e = h.outerWidth(), o = h.outerHeight(), u = h.offset()), c = w.extend({}, u), w.each(["my", "at"], function () {
            var t = (C[this] || "").split(" "),
                E, l;
            t.length === 1 && (t = g.test(t[0]) ? t.concat(["center"]) : z.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), t[0] = g.test(t[0]) ? t[0] : "center", t[1] = z.test(t[1]) ? t[1] : "center", E = y.exec(t[0]), l = y.exec(t[1]), f[this] = [E ? E[0] : 0, l ? l[0] : 0], C[this] = [v.exec(t[0])[0], v.exec(t[1])[0]]
        }), D.length === 1 && (D[1] = D[0]), C.at[0] === "right" ? c.left += e : C.at[0] === "center" && (c.left += e / 2), C.at[1] === "bottom" ? c.top += o : C.at[1] === "center" && (c.top += o / 2), a = q(f.at, e, o), c.left += a[0], c.top += a[1], this.each(function () {
            var n, L, I = w(this),
                F = I.outerWidth(),
                H = I.outerHeight(),
                K = d(this, "marginLeft"),
                J = d(this, "marginTop"),
                E = F + K + d(this, "marginRight") + p.width,
                G = H + J + d(this, "marginBottom") + p.height,
                l = w.extend({}, c),
                t = q(f.my, I.outerWidth(), I.outerHeight());
            C.my[0] === "right" ? l.left -= F : C.my[0] === "center" && (l.left -= F / 2), C.my[1] === "bottom" ? l.top -= H : C.my[1] === "center" && (l.top -= H / 2), l.left += t[0], l.top += t[1], w.support.offsetFractions || (l.left = B(l.left), l.top = B(l.top)), n = {
                marginLeft: K,
                marginTop: J
            }, w.each(["left", "top"], function (N, M) {
                w.ui.position[D[N]] && w.ui.position[D[N]][M](l, {
                    targetWidth: e,
                    targetHeight: o,
                    elemWidth: F,
                    elemHeight: H,
                    collisionPosition: n,
                    collisionWidth: E,
                    collisionHeight: G,
                    offset: [a[0] + t[0], a[1] + t[1]],
                    my: C.my,
                    at: C.at,
                    within: r,
                    elem: I
                })
            }), w.fn.bgiframe && I.bgiframe(), C.using && (L = function (P) {
                var R = u.left - l.left,
                    O = R + e - F,
                    Q = u.top - l.top,
                    M = Q + o - H,
                    N = {
                        target: {
                            element: h,
                            left: u.left,
                            top: u.top,
                            width: e,
                            height: o
                        },
                        element: {
                            element: I,
                            left: l.left,
                            top: l.top,
                            width: F,
                            height: H
                        },
                        horizontal: O < 0 ? "left" : R > 0 ? "right" : "center",
                        vertical: M < 0 ? "top" : Q > 0 ? "bottom" : "middle"
                    };
                e < F && m(R + O) < e && (N.horizontal = "center"), o < H && m(Q + M) < o && (N.vertical = "middle"), b(m(R), m(O)) > b(m(Q), m(M)) ? N.important = "horizontal" : N.important = "vertical", C.using.call(this, P, N)
            }), I.offset(w.extend(l, {
                using: L
            }))
        })
    }, w.ui.position = {
        fit: {
            left: function (r, E) {
                var h = E.within,
                    l = h.isWindow ? h.scrollLeft : h.offset.left,
                    F = h.width,
                    c = r.left - E.collisionPosition.marginLeft,
                    D = l - c,
                    C = c + E.collisionWidth - F - l,
                    p;
                E.collisionWidth > F ? D > 0 && C <= 0 ? (p = r.left + D + E.collisionWidth - F - l, r.left += D - p) : C > 0 && D <= 0 ? r.left = l : D > C ? r.left = l + F - E.collisionWidth : r.left = l : D > 0 ? r.left += D : C > 0 ? r.left -= C : r.left = b(r.left - c, r.left)
            },
            top: function (r, E) {
                var h = E.within,
                    l = h.isWindow ? h.scrollTop : h.offset.top,
                    F = E.within.height,
                    c = r.top - E.collisionPosition.marginTop,
                    D = l - c,
                    C = c + E.collisionHeight - F - l,
                    p;
                E.collisionHeight > F ? D > 0 && C <= 0 ? (p = r.top + D + E.collisionHeight - F - l, r.top += D - p) : C > 0 && D <= 0 ? r.top = l : D > C ? r.top = l + F - E.collisionHeight : r.top = l : D > 0 ? r.top += D : C > 0 ? r.top -= C : r.top = b(r.top - c, r.top)
            }
        },
        flip: {
            left: function (J, O) {
                var F = O.within,
                    C = F.offset.left + F.scrollLeft,
                    P = F.width,
                    E = F.isWindow ? F.scrollLeft : F.offset.left,
                    N = J.left - O.collisionPosition.marginLeft,
                    M = N - E,
                    I = N + O.collisionWidth - P - E,
                    G = O.my[0] === "left" ? -O.elemWidth : O.my[0] === "right" ? O.elemWidth : 0,
                    L = O.at[0] === "left" ? O.targetWidth : O.at[0] === "right" ? -O.targetWidth : 0,
                    H = -2 * O.offset[0],
                    D, K;
                if (M < 0) {
                    D = J.left + G + L + H + O.collisionWidth - P - C;
                    if (D < 0 || D < m(M)) {
                        J.left += G + L + H
                    }
                } else {
                    if (I > 0) {
                        K = J.left - O.collisionPosition.marginLeft + G + L + H - E;
                        if (K > 0 || m(K) < I) {
                            J.left += G + L + H
                        }
                    }
                }
            },
            top: function (J, P) {
                var F = P.within,
                    C = F.offset.top + F.scrollTop,
                    Q = F.height,
                    E = F.isWindow ? F.scrollTop : F.offset.top,
                    O = J.top - P.collisionPosition.marginTop,
                    M = O - E,
                    I = O + P.collisionHeight - Q - E,
                    G = P.my[1] === "top",
                    L = G ? -P.elemHeight : P.my[1] === "bottom" ? P.elemHeight : 0,
                    H = P.at[1] === "top" ? P.targetHeight : P.at[1] === "bottom" ? -P.targetHeight : 0,
                    D = -2 * P.offset[1],
                    K, N;
                M < 0 ? (N = J.top + L + H + D + P.collisionHeight - Q - C, J.top + L + H + D > M && (N < 0 || N < m(M)) && (J.top += L + H + D)) : I > 0 && (K = J.top - P.collisionPosition.marginTop + L + H + D - E, J.top + L + H + D > I && (K > 0 || m(K) < I) && (J.top += L + H + D))
            }
        },
        flipfit: {
            left: function () {
                w.ui.position.flip.left.apply(this, arguments), w.ui.position.fit.left.apply(this, arguments)
            },
            top: function () {
                w.ui.position.flip.top.apply(this, arguments), w.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function () {
        var e, p, h, c, f, l = document.getElementsByTagName("body")[0],
            a = document.createElement("div");
        e = document.createElement(l ? "div" : "body"), h = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, l && w.extend(h, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (f in h) {
            e.style[f] = h[f]
        }
        e.appendChild(a), p = l || document.documentElement, p.insertBefore(e, p.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", c = w(a).offset().left, w.support.offsetFractions = c > 10 && c < 11, e.innerHTML = "", p.removeChild(e)
    }(), w.uiBackCompat !== !1 && function (a) {
        var c = a.fn.position;
        a.fn.position = function (h) {
            if (!h || !h.offset) {
                return c.call(this, h)
            }
            var e = h.offset.split(" "),
                f = h.at.split(" ");
            return e.length === 1 && (e[1] = e[0]), /^\d/.test(e[0]) && (e[0] = "+" + e[0]), /^\d/.test(e[1]) && (e[1] = "+" + e[1]), f.length === 1 && (/left|center|right/.test(f[0]) ? f[1] = "center" : (f[1] = f[0], f[0] = "center")), c.call(this, a.extend(h, {
                at: f[0] + e[0] + " " + f[1] + e[1],
                offset: A
            }))
        }
    }(jQuery)
})(jQuery);
(function (b, a) {
    b.widget("ui.draggable", b.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (c) {
            var d = this.options;
            return this.helper || d.disabled || b(c.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(c), this.handle ? (b(d.iframeFix === !0 ? "iframe" : d.iframeFix).each(function () {
                b('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1000
                }).css(b(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (c) {
            var d = this.options;
            return this.helper = this._createHelper(c), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), b.ui.ddmanager && (b.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, b.extend(this.offset, {
                click: {
                    left: c.pageX - this.offset.left,
                    top: c.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(c), this.originalPageX = c.pageX, this.originalPageY = c.pageY, d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt), d.containment && this._setContainment(), this._trigger("start", c) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), b.ui.ddmanager && !d.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, c), this._mouseDrag(c, !0), b.ui.ddmanager && b.ui.ddmanager.dragStart(this, c), !0)
        },
        _mouseDrag: function (c, e) {
            this.position = this._generatePosition(c), this.positionAbs = this._convertPositionTo("absolute");
            if (!e) {
                var d = this._uiHash();
                if (this._trigger("drag", c, d) === !1) {
                    return this._mouseUp({}), !1
                }
                this.position = d.position
            }
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            return b.ui.ddmanager && b.ui.ddmanager.drag(this, c), !1
        },
        _mouseStop: function (d) {
            var g = !1;
            b.ui.ddmanager && !this.options.dropBehaviour && (g = b.ui.ddmanager.drop(this, d)), this.dropped && (g = this.dropped, this.dropped = !1);
            var f = this.element[0],
                c = !1;
            while (f && (f = f.parentNode)) {
                f == document && (c = !0)
            }
            if (!c && this.options.helper === "original") {
                return !1
            }
            if (this.options.revert == "invalid" && !g || this.options.revert == "valid" && g || this.options.revert === !0 || b.isFunction(this.options.revert) && this.options.revert.call(this.element, g)) {
                var e = this;
                b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    e._trigger("stop", d) !== !1 && e._clear()
                })
            } else {
                this._trigger("stop", d) !== !1 && this._clear()
            }
            return !1
        },
        _mouseUp: function (c) {
            return b("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), b.ui.ddmanager && b.ui.ddmanager.dragStop(this, c), b.ui.mouse.prototype._mouseUp.call(this, c)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (c) {
            var d = !this.options.handle || !b(this.options.handle, this.element).length ? !0 : !1;
            return b(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == c.target && (d = !0)
            }), d
        },
        _createHelper: function (c) {
            var e = this.options,
                d = b.isFunction(e.helper) ? b(e.helper.apply(this.element[0], [c])) : e.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return d.parents("body").length || d.appendTo(e.appendTo == "parent" ? this.element[0].parentNode : e.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute"), d
        },
        _adjustOffsetFromHelper: function (c) {
            typeof c == "string" && (c = c.split(" ")), b.isArray(c) && (c = {
                left: +c[0],
                top: +c[1] || 0
            }), "left" in c && (this.offset.click.left = c.left + this.margins.left), "right" in c && (this.offset.click.left = this.helperProportions.width - c.right + this.margins.left), "top" in c && (this.offset.click.top = c.top + this.margins.top), "bottom" in c && (this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var c = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0]) && (c.left += this.scrollParent.scrollLeft(), c.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && b.ui.ie) {
                c = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var c = this.element.position();
                return {
                    top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var d = this.options;
            d.containment == "parent" && (d.containment = this.helper[0].parentNode);
            if (d.containment == "document" || d.containment == "window") {
                this.containment = [d.containment == "document" ? 0 : b(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, d.containment == "document" ? 0 : b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (d.containment == "document" ? 0 : b(window).scrollLeft()) + b(d.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (d.containment == "document" ? 0 : b(window).scrollTop()) + (b(d.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!/^(document|window|parent)$/.test(d.containment) && d.containment.constructor != Array) {
                var g = b(d.containment),
                    f = g[0];
                if (!f) {
                    return
                }
                var c = g.offset(),
                    e = b(f).css("overflow") != "hidden";
                this.containment = [(parseInt(b(f).css("borderLeftWidth"), 10) || 0) + (parseInt(b(f).css("paddingLeft"), 10) || 0), (parseInt(b(f).css("borderTopWidth"), 10) || 0) + (parseInt(b(f).css("paddingTop"), 10) || 0), (e ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(b(f).css("borderLeftWidth"), 10) || 0) - (parseInt(b(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(b(f).css("borderTopWidth"), 10) || 0) - (parseInt(b(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = g
            } else {
                d.containment.constructor == Array && (this.containment = d.containment)
            }
        },
        _convertPositionTo: function (d, h) {
            h || (h = this.position);
            var f = d == "absolute" ? 1 : -1,
                c = this.options,
                e = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                g = /(html|body)/i.test(e[0].tagName);
            return {
                top: h.top + this.offset.relative.top * f + this.offset.parent.top * f - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : e.scrollTop()) * f,
                left: h.left + this.offset.relative.left * f + this.offset.parent.left * f - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : e.scrollLeft()) * f
            }
        },
        _generatePosition: function (p) {
            var e = this.options,
                c = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(c[0].tagName),
                q = p.pageX,
                d = p.pageY;
            if (this.originalPosition) {
                var m;
                if (this.containment) {
                    if (this.relative_container) {
                        var k = this.relative_container.offset();
                        m = [this.containment[0] + k.left, this.containment[1] + k.top, this.containment[2] + k.left, this.containment[3] + k.top]
                    } else {
                        m = this.containment
                    }
                    p.pageX - this.offset.click.left < m[0] && (q = m[0] + this.offset.click.left), p.pageY - this.offset.click.top < m[1] && (d = m[1] + this.offset.click.top), p.pageX - this.offset.click.left > m[2] && (q = m[2] + this.offset.click.left), p.pageY - this.offset.click.top > m[3] && (d = m[3] + this.offset.click.top)
                }
                if (e.grid) {
                    var j = e.grid[1] ? this.originalPageY + Math.round((d - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY;
                    d = m ? j - this.offset.click.top < m[1] || j - this.offset.click.top > m[3] ? j - this.offset.click.top < m[1] ? j + e.grid[1] : j - e.grid[1] : j : j;
                    var g = e.grid[0] ? this.originalPageX + Math.round((q - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX;
                    q = m ? g - this.offset.click.left < m[0] || g - this.offset.click.left > m[2] ? g - this.offset.click.left < m[0] ? g + e.grid[0] : g - e.grid[0] : g : g
                }
            }
            return {
                top: d - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : h ? 0 : c.scrollTop()),
                left: q - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : c.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (c, e, d) {
            return d = d || this._uiHash(), b.ui.plugin.call(this, c, [e, d]), c == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), b.Widget.prototype._trigger.call(this, c, e, d)
        },
        plugins: {},
        _uiHash: function (c) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), b.ui.plugin.add("draggable", "connectToSortable", {
        start: function (d, g) {
            var f = b(this).data("draggable"),
                c = f.options,
                e = b.extend({}, g, {
                    item: f.element
                });
            f.sortables = [], b(c.connectToSortable).each(function () {
                var h = b.data(this, "sortable");
                h && !h.options.disabled && (f.sortables.push({
                    instance: h,
                    shouldRevert: h.options.revert
                }), h.refreshPositions(), h._trigger("activate", d, e))
            })
        },
        stop: function (d, f) {
            var e = b(this).data("draggable"),
                c = b.extend({}, f, {
                    item: e.element
                });
            b.each(e.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, e.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(d), this.instance.options.helper = this.instance.options._helper, e.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", d, c))
            })
        },
        drag: function (d, g) {
            var f = b(this).data("draggable"),
                c = this,
                e = function (v) {
                    var k = this.offset.click.top,
                        h = this.offset.click.left,
                        l = this.positionAbs.top,
                        w = this.positionAbs.left,
                        j = v.height,
                        q = v.width,
                        p = v.top,
                        m = v.left;
                    return b.ui.isOver(l + k, w + h, p, m, j, q)
                };
            b.each(f.sortables, function (j) {
                var k = !1,
                    h = this;
                this.instance.positionAbs = f.positionAbs, this.instance.helperProportions = f.helperProportions, this.instance.offset.click = f.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (k = !0, b.each(f.sortables, function () {
                    return this.instance.positionAbs = f.positionAbs, this.instance.helperProportions = f.helperProportions, this.instance.offset.click = f.offset.click, this != h && this.instance._intersectsWith(this.instance.containerCache) && b.ui.contains(h.instance.element[0], this.instance.element[0]) && (k = !1), k
                })), k ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = b(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return g.helper[0]
                }, d.target = this.instance.currentItem[0], this.instance._mouseCapture(d, !0), this.instance._mouseStart(d, !0, !0), this.instance.offset.click.top = f.offset.click.top, this.instance.offset.click.left = f.offset.click.left, this.instance.offset.parent.left -= f.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= f.offset.parent.top - this.instance.offset.parent.top, f._trigger("toSortable", d), f.dropped = this.instance.element, f.currentItem = f.element, this.instance.fromOutside = f), this.instance.currentItem && this.instance._mouseDrag(d)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", d, this.instance._uiHash(this.instance)), this.instance._mouseStop(d, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), f._trigger("fromSortable", d), f.dropped = !1)
            })
        }
    }), b.ui.plugin.add("draggable", "cursor", {
        start: function (d, f) {
            var e = b("body"),
                c = b(this).data("draggable").options;
            e.css("cursor") && (c._cursor = e.css("cursor")), e.css("cursor", c.cursor)
        },
        stop: function (c, e) {
            var d = b(this).data("draggable").options;
            d._cursor && b("body").css("cursor", d._cursor)
        }
    }), b.ui.plugin.add("draggable", "opacity", {
        start: function (d, f) {
            var e = b(f.helper),
                c = b(this).data("draggable").options;
            e.css("opacity") && (c._opacity = e.css("opacity")), e.css("opacity", c.opacity)
        },
        stop: function (c, e) {
            var d = b(this).data("draggable").options;
            d._opacity && b(e.helper).css("opacity", d._opacity)
        }
    }), b.ui.plugin.add("draggable", "scroll", {
        start: function (c, e) {
            var d = b(this).data("draggable");
            d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset())
        },
        drag: function (d, g) {
            var f = b(this).data("draggable"),
                c = f.options,
                e = !1;
            if (f.scrollParent[0] != document && f.scrollParent[0].tagName != "HTML") {
                if (!c.axis || c.axis != "x") {
                    f.overflowOffset.top + f.scrollParent[0].offsetHeight - d.pageY < c.scrollSensitivity ? f.scrollParent[0].scrollTop = e = f.scrollParent[0].scrollTop + c.scrollSpeed : d.pageY - f.overflowOffset.top < c.scrollSensitivity && (f.scrollParent[0].scrollTop = e = f.scrollParent[0].scrollTop - c.scrollSpeed)
                }
                if (!c.axis || c.axis != "y") {
                    f.overflowOffset.left + f.scrollParent[0].offsetWidth - d.pageX < c.scrollSensitivity ? f.scrollParent[0].scrollLeft = e = f.scrollParent[0].scrollLeft + c.scrollSpeed : d.pageX - f.overflowOffset.left < c.scrollSensitivity && (f.scrollParent[0].scrollLeft = e = f.scrollParent[0].scrollLeft - c.scrollSpeed)
                }
            } else {
                if (!c.axis || c.axis != "x") {
                    d.pageY - b(document).scrollTop() < c.scrollSensitivity ? e = b(document).scrollTop(b(document).scrollTop() - c.scrollSpeed) : b(window).height() - (d.pageY - b(document).scrollTop()) < c.scrollSensitivity && (e = b(document).scrollTop(b(document).scrollTop() + c.scrollSpeed))
                }
                if (!c.axis || c.axis != "y") {
                    d.pageX - b(document).scrollLeft() < c.scrollSensitivity ? e = b(document).scrollLeft(b(document).scrollLeft() - c.scrollSpeed) : b(window).width() - (d.pageX - b(document).scrollLeft()) < c.scrollSensitivity && (e = b(document).scrollLeft(b(document).scrollLeft() + c.scrollSpeed))
                }
            }
            e !== !1 && b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(f, d)
        }
    }), b.ui.plugin.add("draggable", "snap", {
        start: function (d, f) {
            var e = b(this).data("draggable"),
                c = e.options;
            e.snapElements = [], b(c.snap.constructor != String ? c.snap.items || ":data(draggable)" : c.snap).each(function () {
                var g = b(this),
                    h = g.offset();
                this != e.element[0] && e.snapElements.push({
                    item: this,
                    width: g.outerWidth(),
                    height: g.outerHeight(),
                    top: h.top,
                    left: h.left
                })
            })
        },
        drag: function (q, B) {
            var x = b(this).data("draggable"),
                E = x.options,
                w = E.snapTolerance,
                A = B.offset.left,
                k = A + x.helperProportions.width,
                L = B.offset.top,
                H = L + x.helperProportions.height;
            for (var D = x.snapElements.length - 1; D >= 0; D--) {
                var J = x.snapElements[D].left,
                    F = J + x.snapElements[D].width,
                    z = x.snapElements[D].top,
                    I = z + x.snapElements[D].height;
                if (!(J - w < A && A < F + w && z - w < L && L < I + w || J - w < A && A < F + w && z - w < H && H < I + w || J - w < k && k < F + w && z - w < L && L < I + w || J - w < k && k < F + w && z - w < H && H < I + w)) {
                    x.snapElements[D].snapping && x.options.snap.release && x.options.snap.release.call(x.element, q, b.extend(x._uiHash(), {
                        snapItem: x.snapElements[D].item
                    })), x.snapElements[D].snapping = !1;
                    continue
                }
                if (E.snapMode != "inner") {
                    var j = Math.abs(z - H) <= w,
                        C = Math.abs(I - L) <= w,
                        G = Math.abs(J - k) <= w,
                        e = Math.abs(F - A) <= w;
                    j && (B.position.top = x._convertPositionTo("relative", {
                        top: z - x.helperProportions.height,
                        left: 0
                    }).top - x.margins.top), C && (B.position.top = x._convertPositionTo("relative", {
                        top: I,
                        left: 0
                    }).top - x.margins.top), G && (B.position.left = x._convertPositionTo("relative", {
                        top: 0,
                        left: J - x.helperProportions.width
                    }).left - x.margins.left), e && (B.position.left = x._convertPositionTo("relative", {
                        top: 0,
                        left: F
                    }).left - x.margins.left)
                }
                var K = j || C || G || e;
                if (E.snapMode != "outer") {
                    var j = Math.abs(z - L) <= w,
                        C = Math.abs(I - H) <= w,
                        G = Math.abs(J - A) <= w,
                        e = Math.abs(F - k) <= w;
                    j && (B.position.top = x._convertPositionTo("relative", {
                        top: z,
                        left: 0
                    }).top - x.margins.top), C && (B.position.top = x._convertPositionTo("relative", {
                        top: I - x.helperProportions.height,
                        left: 0
                    }).top - x.margins.top), G && (B.position.left = x._convertPositionTo("relative", {
                        top: 0,
                        left: J
                    }).left - x.margins.left), e && (B.position.left = x._convertPositionTo("relative", {
                        top: 0,
                        left: F - x.helperProportions.width
                    }).left - x.margins.left)
                }!x.snapElements[D].snapping && (j || C || G || e || K) && x.options.snap.snap && x.options.snap.snap.call(x.element, q, b.extend(x._uiHash(), {
                    snapItem: x.snapElements[D].item
                })), x.snapElements[D].snapping = j || C || G || e || K
            }
        }
    }), b.ui.plugin.add("draggable", "stack", {
        start: function (d, g) {
            var f = b(this).data("draggable").options,
                c = b.makeArray(b(f.stack)).sort(function (h, j) {
                    return (parseInt(b(h).css("zIndex"), 10) || 0) - (parseInt(b(j).css("zIndex"), 10) || 0)
                });
            if (!c.length) {
                return
            }
            var e = parseInt(c[0].style.zIndex) || 0;
            b(c).each(function (h) {
                this.style.zIndex = e + h
            }), this[0].style.zIndex = e + c.length
        }
    }), b.ui.plugin.add("draggable", "zIndex", {
        start: function (d, f) {
            var e = b(f.helper),
                c = b(this).data("draggable").options;
            e.css("zIndex") && (c._zIndex = e.css("zIndex")), e.css("zIndex", c.zIndex)
        },
        stop: function (c, e) {
            var d = b(this).data("draggable").options;
            d._zIndex && b(e.helper).css("zIndex", d._zIndex)
        }
    })
})(jQuery);
(function (b, a) {
    b.widget("ui.droppable", {
        version: "1.9.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var c = this.options,
                d = c.accept;
            this.isover = 0, this.isout = 1, this.accept = b.isFunction(d) ? d : function (f) {
                return f.is(d)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, b.ui.ddmanager.droppables[c.scope] = b.ui.ddmanager.droppables[c.scope] || [], b.ui.ddmanager.droppables[c.scope].push(this), c.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            var c = b.ui.ddmanager.droppables[this.options.scope];
            for (var d = 0; d < c.length; d++) {
                c[d] == this && c.splice(d, 1)
            }
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (c, d) {
            c == "accept" && (this.accept = b.isFunction(d) ? d : function (f) {
                return f.is(d)
            }), b.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (c) {
            var d = b.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), d && this._trigger("activate", c, this.ui(d))
        },
        _deactivate: function (c) {
            var d = b.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), d && this._trigger("deactivate", c, this.ui(d))
        },
        _over: function (c) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] == this.element[0]) {
                return
            }
            this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", c, this.ui(d)))
        },
        _out: function (c) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] == this.element[0]) {
                return
            }
            this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", c, this.ui(d)))
        },
        _drop: function (d, f) {
            var e = f || b.ui.ddmanager.current;
            if (!e || (e.currentItem || e.element)[0] == this.element[0]) {
                return !1
            }
            var c = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var g = b.data(this, "droppable");
                if (g.options.greedy && !g.options.disabled && g.options.scope == e.options.scope && g.accept.call(g.element[0], e.currentItem || e.element) && b.ui.intersect(e, b.extend(g, {
                    offset: g.element.offset()
                }), g.options.tolerance)) {
                    return c = !0, !1
                }
            }), c ? !1 : this.accept.call(this.element[0], e.currentItem || e.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", d, this.ui(e)), this.element) : !1
        },
        ui: function (c) {
            return {
                draggable: c.currentItem || c.element,
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            }
        }
    }), b.ui.intersect = function (B, k, e) {
        if (!k.offset) {
            return !1
        }
        var q = (B.positionAbs || B.position.absolute).left,
            C = q + B.helperProportions.width,
            j = (B.positionAbs || B.position.absolute).top,
            A = j + B.helperProportions.height,
            z = k.offset.left,
            w = z + k.proportions.width,
            m = k.offset.top,
            y = m + k.proportions.height;
        switch (e) {
            case "fit":
                return z <= q && C <= w && m <= j && A <= y;
            case "intersect":
                return z < q + B.helperProportions.width / 2 && C - B.helperProportions.width / 2 < w && m < j + B.helperProportions.height / 2 && A - B.helperProportions.height / 2 < y;
            case "pointer":
                var v = (B.positionAbs || B.position.absolute).left + (B.clickOffset || B.offset.click).left,
                    g = (B.positionAbs || B.position.absolute).top + (B.clickOffset || B.offset.click).top,
                    x = b.ui.isOver(g, v, m, z, k.proportions.height, k.proportions.width);
                return x;
            case "touch":
                return (j >= m && j <= y || A >= m && A <= y || j < m && A > y) && (q >= z && q <= w || C >= z && C <= w || q < z && C > w);
            default:
                return !1
        }
    }, b.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (e, j) {
            var g = b.ui.ddmanager.droppables[e.options.scope] || [],
                d = j ? j.type : null,
                f = (e.currentItem || e.element).find(":data(droppable)").andSelf();
            b: for (var h = 0; h < g.length; h++) {
                if (g[h].options.disabled || e && !g[h].accept.call(g[h].element[0], e.currentItem || e.element)) {
                    continue
                }
                for (var c = 0; c < f.length; c++) {
                    if (f[c] == g[h].element[0]) {
                        g[h].proportions.height = 0;
                        continue b
                    }
                }
                g[h].visible = g[h].element.css("display") != "none";
                if (!g[h].visible) {
                    continue
                }
                d == "mousedown" && g[h]._activate.call(g[h], j), g[h].offset = g[h].element.offset(), g[h].proportions = {
                    width: g[h].element[0].offsetWidth,
                    height: g[h].element[0].offsetHeight
                }
            }
        },
        drop: function (c, e) {
            var d = !1;
            return b.each(b.ui.ddmanager.droppables[c.options.scope] || [], function () {
                if (!this.options) {
                    return
                }!this.options.disabled && this.visible && b.ui.intersect(c, this, this.options.tolerance) && (d = this._drop.call(this, e) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], c.currentItem || c.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, e))
            }), d
        },
        dragStart: function (c, d) {
            c.element.parentsUntil("body").bind("scroll.droppable", function () {
                c.options.refreshPositions || b.ui.ddmanager.prepareOffsets(c, d)
            })
        },
        drag: function (c, d) {
            c.options.refreshPositions && b.ui.ddmanager.prepareOffsets(c, d), b.each(b.ui.ddmanager.droppables[c.options.scope] || [], function () {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return
                }
                var h = b.ui.intersect(c, this, this.options.tolerance),
                    f = !h && this.isover == 1 ? "isout" : h && this.isover == 0 ? "isover" : null;
                if (!f) {
                    return
                }
                var g;
                if (this.options.greedy) {
                    var j = this.options.scope,
                        e = this.element.parents(":data(droppable)").filter(function () {
                            return b.data(this, "droppable").options.scope === j
                        });
                    e.length && (g = b.data(e[0], "droppable"), g.greedyChild = f == "isover" ? 1 : 0)
                }
                g && f == "isover" && (g.isover = 0, g.isout = 1, g._out.call(g, d)), this[f] = 1, this[f == "isout" ? "isover" : "isout"] = 0, this[f == "isover" ? "_over" : "_out"].call(this, d), g && f == "isout" && (g.isout = 0, g.isover = 1, g._over.call(g, d))
            })
        },
        dragStop: function (c, d) {
            c.element.parentsUntil("body").unbind("scroll.droppable"), c.options.refreshPositions || b.ui.ddmanager.prepareOffsets(c, d)
        }
    }
})(jQuery);
(function (c, a) {
    c.widget("ui.resizable", c.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1000
        },
        _create: function () {
            var g = this,
                l = this.options;
            this.element.addClass("ui-resizable"), c.extend(this, {
                _aspectRatio: !! l.aspectRatio,
                aspectRatio: l.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: l.helper || l.ghost || l.animate ? l.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = l.handles || (c(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor == String) {
                this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var j = this.handles.split(",");
                this.handles = {};
                for (var f = 0; f < j.length; f++) {
                    var h = c.trim(j[f]),
                        k = "ui-resizable-" + h,
                        e = c('<div class="ui-resizable-handle ' + k + '"></div>');
                    e.css({
                        zIndex: l.zIndex
                    }), "se" == h && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[h] = ".ui-resizable-" + h, this.element.append(e)
                }
            }
            this._renderAxis = function (o) {
                o = o || this.element;
                for (var u in this.handles) {
                    this.handles[u].constructor == String && (this.handles[u] = c(this.handles[u], this.element).show());
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var q = c(this.handles[u], this.element),
                            m = 0;
                        m = /sw|ne|nw|se|n|s/.test(u) ? q.outerHeight() : q.outerWidth();
                        var p = ["padding", /ne|nw|n/.test(u) ? "Top" : /se|sw|s/.test(u) ? "Bottom" : /^e$/.test(u) ? "Right" : "Left"].join("");
                        o.css(p, m), this._proportionallyResize()
                    }
                    if (!c(this.handles[u]).length) {
                        continue
                    }
                }
            }, this._renderAxis(this.element), this._handles = c(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!g.resizing) {
                    if (this.className) {
                        var m = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    g.axis = m && m[1] ? m[1] : "se"
                }
            }), l.autoHide && (this._handles.hide(), c(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                if (l.disabled) {
                    return
                }
                c(this).removeClass("ui-resizable-autohide"), g._handles.show()
            }).mouseleave(function () {
                if (l.disabled) {
                    return
                }
                g.resizing || (c(this).addClass("ui-resizable-autohide"), g._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var e = function (g) {
                c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                e(this.element);
                var f = this.element;
                this.originalElement.css({
                    position: f.css("position"),
                    width: f.outerWidth(),
                    height: f.outerHeight(),
                    top: f.css("top"),
                    left: f.css("left")
                }).insertAfter(f), f.remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
        },
        _mouseCapture: function (e) {
            var g = !1;
            for (var f in this.handles) {
                c(this.handles[f])[0] == e.target && (g = !0)
            }
            return !this.options.disabled && g
        },
        _mouseStart: function (h) {
            var k = this.options,
                g = this.element.position(),
                j = this.element;
            this.resizing = !0, this.documentScroll = {
                top: c(document).scrollTop(),
                left: c(document).scrollLeft()
            }, (j.is(".ui-draggable") || /absolute/.test(j.css("position"))) && j.css({
                position: "absolute",
                top: g.top,
                left: g.left
            }), this._renderProxy();
            var l = d(this.helper.css("left")),
                f = d(this.helper.css("top"));
            k.containment && (l += c(k.containment).scrollLeft() || 0, f += c(k.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: l,
                top: f
            }, this.size = this._helper ? {
                width: j.outerWidth(),
                height: j.outerHeight()
            } : {
                width: j.width(),
                height: j.height()
            }, this.originalSize = this._helper ? {
                width: j.outerWidth(),
                height: j.outerHeight()
            } : {
                width: j.width(),
                height: j.height()
            }, this.originalPosition = {
                left: l,
                top: f
            }, this.sizeDiff = {
                width: j.outerWidth() - j.width(),
                height: j.outerHeight() - j.height()
            }, this.originalMousePosition = {
                left: h.pageX,
                top: h.pageY
            }, this.aspectRatio = typeof k.aspectRatio == "number" ? k.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var e = c(".ui-resizable-" + this.axis).css("cursor");
            return c("body").css("cursor", e == "auto" ? this.axis + "-resize" : e), j.addClass("ui-resizable-resizing"), this._propagate("start", h), !0
        },
        _mouseDrag: function (q) {
            var x = this.helper,
                j = this.options,
                g = {}, m = this,
                y = this.originalMousePosition,
                h = this.axis,
                w = q.pageX - y.left || 0,
                v = q.pageY - y.top || 0,
                p = this._change[h];
            if (!p) {
                return !1
            }
            var k = p.apply(this, [q, w, v]);
            this._updateVirtualBoundaries(q.shiftKey);
            if (this._aspectRatio || q.shiftKey) {
                k = this._updateRatio(k, q)
            }
            return k = this._respectSize(k, q), this._propagate("resize", q), x.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(k), this._trigger("resize", q, this.ui()), !1
        },
        _mouseStop: function (v) {
            this.resizing = !1;
            var h = this.options,
                e = this;
            if (this._helper) {
                var k = this._proportionallyResizeElements,
                    w = k.length && /textarea/i.test(k[0].nodeName),
                    g = w && c.ui.hasScroll(k[0], "left") ? 0 : e.sizeDiff.height,
                    q = w ? 0 : e.sizeDiff.width,
                    p = {
                        width: e.helper.width() - q,
                        height: e.helper.height() - g
                    }, m = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null,
                    j = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
                h.animate || this.element.css(c.extend(p, {
                    top: j,
                    left: m
                })), e.helper.height(e.size.height), e.helper.width(e.size.width), this._helper && !h.animate && this._proportionallyResize()
            }
            return c("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", v), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (k) {
            var h = this.options,
                m, g, j, l, f;
            f = {
                minWidth: b(h.minWidth) ? h.minWidth : 0,
                maxWidth: b(h.maxWidth) ? h.maxWidth : Infinity,
                minHeight: b(h.minHeight) ? h.minHeight : 0,
                maxHeight: b(h.maxHeight) ? h.maxHeight : Infinity
            };
            if (this._aspectRatio || k) {
                m = f.minHeight * this.aspectRatio, j = f.minWidth / this.aspectRatio, g = f.maxHeight * this.aspectRatio, l = f.maxWidth / this.aspectRatio, m > f.minWidth && (f.minWidth = m), j > f.minHeight && (f.minHeight = j), g < f.maxWidth && (f.maxWidth = g), l < f.maxHeight && (f.maxHeight = l)
            }
            this._vBoundaries = f
        },
        _updateCache: function (g) {
            var f = this.options;
            this.offset = this.helper.offset(), b(g.left) && (this.position.left = g.left), b(g.top) && (this.position.top = g.top), b(g.height) && (this.size.height = g.height), b(g.width) && (this.size.width = g.width)
        },
        _updateRatio: function (j, g) {
            var l = this.options,
                f = this.position,
                h = this.size,
                k = this.axis;
            return b(j.height) ? j.width = j.height * this.aspectRatio : b(j.width) && (j.height = j.width / this.aspectRatio), k == "sw" && (j.left = f.left + (h.width - j.width), j.top = null), k == "nw" && (j.top = f.top + (h.height - j.height), j.left = f.left + (h.width - j.width)), j
        },
        _respectSize: function (x, D) {
            var k = this.helper,
                q = this._vBoundaries,
                E = this._aspectRatio || D.shiftKey,
                j = this.axis,
                C = b(x.width) && q.maxWidth && q.maxWidth < x.width,
                A = b(x.height) && q.maxHeight && q.maxHeight < x.height,
                w = b(x.width) && q.minWidth && q.minWidth > x.width,
                m = b(x.height) && q.minHeight && q.minHeight > x.height;
            w && (x.width = q.minWidth), m && (x.height = q.minHeight), C && (x.width = q.maxWidth), A && (x.height = q.maxHeight);
            var z = this.originalPosition.left + this.originalSize.width,
                r = this.position.top + this.size.height,
                g = /sw|nw|w/.test(j),
                y = /nw|ne|n/.test(j);
            w && g && (x.left = z - q.minWidth), C && g && (x.left = z - q.maxWidth), m && y && (x.top = r - q.minHeight), A && y && (x.top = r - q.maxHeight);
            var B = !x.width && !x.height;
            return B && !x.left && x.top ? x.top = null : B && !x.top && x.left && (x.left = null), x
        },
        _proportionallyResize: function () {
            var f = this.options;
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var k = this.helper || this.element;
            for (var h = 0; h < this._proportionallyResizeElements.length; h++) {
                var e = this._proportionallyResizeElements[h];
                if (!this.borderDif) {
                    var g = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")],
                        j = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")];
                    this.borderDif = c.map(g, function (o, l) {
                        var p = parseInt(o, 10) || 0,
                            m = parseInt(j[l], 10) || 0;
                        return p + m
                    })
                }
                e.css({
                    height: k.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: k.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var f = this.element,
                h = this.options;
            this.elementOffset = f.offset();
            if (this._helper) {
                this.helper = this.helper || c('<div style="overflow:hidden;"></div>');
                var g = c.ui.ie6 ? 1 : 0,
                    e = c.ui.ie6 ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + e,
                    height: this.element.outerHeight() + e,
                    position: "absolute",
                    left: this.elementOffset.left - g + "px",
                    top: this.elementOffset.top - g + "px",
                    zIndex: ++h.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },
        _change: {
            e: function (g, f, h) {
                return {
                    width: this.originalSize.width + f
                }
            },
            w: function (k, g, l) {
                var j = this.options,
                    f = this.originalSize,
                    h = this.originalPosition;
                return {
                    left: h.left + g,
                    width: f.width - g
                }
            },
            n: function (k, g, l) {
                var j = this.options,
                    f = this.originalSize,
                    h = this.originalPosition;
                return {
                    top: h.top + l,
                    height: f.height - l
                }
            },
            s: function (g, f, h) {
                return {
                    height: this.originalSize.height + h
                }
            },
            se: function (e, g, f) {
                return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, g, f]))
            },
            sw: function (e, g, f) {
                return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, g, f]))
            },
            ne: function (e, g, f) {
                return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, g, f]))
            },
            nw: function (e, g, f) {
                return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, g, f]))
            }
        },
        _propagate: function (e, f) {
            c.ui.plugin.call(this, e, [f, this.ui()]), e != "resize" && this._trigger(e, f, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), c.ui.plugin.add("resizable", "alsoResize", {
        start: function (f, j) {
            var h = c(this).data("resizable"),
                e = h.options,
                g = function (k) {
                    c(k).each(function () {
                        var l = c(this);
                        l.data("resizable-alsoresize", {
                            width: parseInt(l.width(), 10),
                            height: parseInt(l.height(), 10),
                            left: parseInt(l.css("left"), 10),
                            top: parseInt(l.css("top"), 10)
                        })
                    })
                };
            typeof e.alsoResize == "object" && !e.alsoResize.parentNode ? e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], g(e.alsoResize)) : c.each(e.alsoResize, function (k) {
                g(k)
            }) : g(e.alsoResize)
        },
        resize: function (h, m) {
            var k = c(this).data("resizable"),
                g = k.options,
                j = k.originalSize,
                l = k.originalPosition,
                f = {
                    height: k.size.height - j.height || 0,
                    width: k.size.width - j.width || 0,
                    top: k.position.top - l.top || 0,
                    left: k.position.left - l.left || 0
                }, e = function (n, o) {
                    c(n).each(function () {
                        var q = c(this),
                            p = c(this).data("resizable-alsoresize"),
                            r = {}, u = o && o.length ? o : q.parents(m.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        c.each(u, function (v, s) {
                            var w = (p[s] || 0) + (f[s] || 0);
                            w && w >= 0 && (r[s] = w || null)
                        }), q.css(r)
                    })
                };
            typeof g.alsoResize == "object" && !g.alsoResize.nodeType ? c.each(g.alsoResize, function (o, n) {
                e(o, n)
            }) : e(g.alsoResize)
        },
        stop: function (e, f) {
            c(this).removeData("resizable-alsoresize")
        }
    }), c.ui.plugin.add("resizable", "animate", {
        stop: function (w, h) {
            var e = c(this).data("resizable"),
                k = e.options,
                x = e._proportionallyResizeElements,
                g = x.length && /textarea/i.test(x[0].nodeName),
                v = g && c.ui.hasScroll(x[0], "left") ? 0 : e.sizeDiff.height,
                q = g ? 0 : e.sizeDiff.width,
                m = {
                    width: e.size.width - q,
                    height: e.size.height - v
                }, j = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null,
                p = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
            e.element.animate(c.extend(m, p && j ? {
                top: p,
                left: j
            } : {}), {
                duration: k.animateDuration,
                easing: k.animateEasing,
                step: function () {
                    var f = {
                        width: parseInt(e.element.css("width"), 10),
                        height: parseInt(e.element.css("height"), 10),
                        top: parseInt(e.element.css("top"), 10),
                        left: parseInt(e.element.css("left"), 10)
                    };
                    x && x.length && c(x[0]).css({
                        width: f.width,
                        height: f.height
                    }), e._updateCache(f), e._propagate("resize", w)
                }
            })
        }
    }), c.ui.plugin.add("resizable", "containment", {
        start: function (B, e) {
            var m = c(this).data("resizable"),
                C = m.options,
                j = m.element,
                A = C.containment,
                y = A instanceof c ? A.get(0) : /parent/.test(A) ? j.parent().get(0) : A;
            if (!y) {
                return
            }
            m.containerElement = c(y);
            if (/document/.test(A) || A == document) {
                m.containerOffset = {
                    left: 0,
                    top: 0
                }, m.containerPosition = {
                    left: 0,
                    top: 0
                }, m.parentData = {
                    element: c(document),
                    left: 0,
                    top: 0,
                    width: c(document).width(),
                    height: c(document).height() || document.body.parentNode.scrollHeight
                }
            } else {
                var q = c(y),
                    k = [];
                c(["Top", "Right", "Left", "Bottom"]).each(function (h, f) {
                    k[h] = d(q.css("padding" + f))
                }), m.containerOffset = q.offset(), m.containerPosition = q.position(), m.containerSize = {
                    height: q.innerHeight() - k[3],
                    width: q.innerWidth() - k[1]
                };
                var x = m.containerOffset,
                    n = m.containerSize.height,
                    g = m.containerSize.width,
                    w = c.ui.hasScroll(y, "left") ? y.scrollWidth : g,
                    z = c.ui.hasScroll(y) ? y.scrollHeight : n;
                m.parentData = {
                    element: y,
                    left: x.left,
                    top: x.top,
                    width: w,
                    height: z
                }
            }
        },
        resize: function (D, k) {
            var e = c(this).data("resizable"),
                q = e.options,
                E = e.containerSize,
                j = e.containerOffset,
                C = e.size,
                A = e.position,
                x = e._aspectRatio || D.shiftKey,
                m = {
                    top: 0,
                    left: 0
                }, z = e.containerElement;
            z[0] != document && /static/.test(z.css("position")) && (m = j), A.left < (e._helper ? j.left : 0) && (e.size.width = e.size.width + (e._helper ? e.position.left - j.left : e.position.left - m.left), x && (e.size.height = e.size.width / e.aspectRatio), e.position.left = q.helper ? j.left : 0), A.top < (e._helper ? j.top : 0) && (e.size.height = e.size.height + (e._helper ? e.position.top - j.top : e.position.top), x && (e.size.width = e.size.height * e.aspectRatio), e.position.top = e._helper ? j.top : 0), e.offset.left = e.parentData.left + e.position.left, e.offset.top = e.parentData.top + e.position.top;
            var w = Math.abs((e._helper ? e.offset.left - m.left : e.offset.left - m.left) + e.sizeDiff.width),
                g = Math.abs((e._helper ? e.offset.top - m.top : e.offset.top - j.top) + e.sizeDiff.height),
                y = e.containerElement.get(0) == e.element.parent().get(0),
                B = /relative|absolute/.test(e.containerElement.css("position"));
            y && B && (w -= e.parentData.left), w + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - w, x && (e.size.height = e.size.width / e.aspectRatio)), g + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - g, x && (e.size.width = e.size.height * e.aspectRatio))
        },
        stop: function (y, j) {
            var e = c(this).data("resizable"),
                m = e.options,
                z = e.position,
                g = e.containerOffset,
                x = e.containerPosition,
                w = e.containerElement,
                q = c(e.helper),
                k = q.offset(),
                v = q.outerWidth() - e.sizeDiff.width,
                p = q.outerHeight() - e.sizeDiff.height;
            e._helper && !m.animate && /relative/.test(w.css("position")) && c(this).css({
                left: k.left - x.left - g.left,
                width: v,
                height: p
            }), e._helper && !m.animate && /static/.test(w.css("position")) && c(this).css({
                left: k.left - x.left - g.left,
                width: v,
                height: p
            })
        }
    }), c.ui.plugin.add("resizable", "ghost", {
        start: function (f, j) {
            var h = c(this).data("resizable"),
                e = h.options,
                g = h.size;
            h.ghost = h.originalElement.clone(), h.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: g.height,
                width: g.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof e.ghost == "string" ? e.ghost : ""), h.ghost.appendTo(h.helper)
        },
        resize: function (f, h) {
            var g = c(this).data("resizable"),
                e = g.options;
            g.ghost && g.ghost.css({
                position: "relative",
                height: g.size.height,
                width: g.size.width
            })
        },
        stop: function (f, h) {
            var g = c(this).data("resizable"),
                e = g.options;
            g.ghost && g.helper && g.helper.get(0).removeChild(g.ghost.get(0))
        }
    }), c.ui.plugin.add("resizable", "grid", {
        resize: function (w, h) {
            var e = c(this).data("resizable"),
                k = e.options,
                x = e.size,
                g = e.originalSize,
                v = e.originalPosition,
                q = e.axis,
                m = k._aspectRatio || w.shiftKey;
            k.grid = typeof k.grid == "number" ? [k.grid, k.grid] : k.grid;
            var j = Math.round((x.width - g.width) / (k.grid[0] || 1)) * (k.grid[0] || 1),
                p = Math.round((x.height - g.height) / (k.grid[1] || 1)) * (k.grid[1] || 1);
            /^(se|s|e)$/.test(q) ? (e.size.width = g.width + j, e.size.height = g.height + p) : /^(ne)$/.test(q) ? (e.size.width = g.width + j, e.size.height = g.height + p, e.position.top = v.top - p) : /^(sw)$/.test(q) ? (e.size.width = g.width + j, e.size.height = g.height + p, e.position.left = v.left - j) : (e.size.width = g.width + j, e.size.height = g.height + p, e.position.top = v.top - p, e.position.left = v.left - j)
        }
    });
    var d = function (f) {
        return parseInt(f, 10) || 0
    }, b = function (f) {
            return !isNaN(parseInt(f, 10))
        }
})(jQuery);
(function (b, a) {
    b.widget("ui.selectable", b.ui.mouse, {
        version: "1.9.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var c = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var d;
            this.refresh = function () {
                d = b(c.options.filter, c.element[0]), d.addClass("ui-selectee"), d.each(function () {
                    var e = b(this),
                        f = e.offset();
                    b.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: f.left,
                        top: f.top,
                        right: f.left + e.outerWidth(),
                        bottom: f.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = d.addClass("ui-selectee"), this._mouseInit(), this.helper = b("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (c) {
            var e = this;
            this.opos = [c.pageX, c.pageY];
            if (this.options.disabled) {
                return
            }
            var d = this.options;
            this.selectees = b(d.filter, this.element[0]), this._trigger("start", c), b(d.appendTo).append(this.helper), this.helper.css({
                left: c.clientX,
                top: c.clientY,
                width: 0,
                height: 0
            }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var f = b.data(this, "selectable-item");
                f.startselected = !0, !c.metaKey && !c.ctrlKey && (f.$element.removeClass("ui-selected"), f.selected = !1, f.$element.addClass("ui-unselecting"), f.unselecting = !0, e._trigger("unselecting", c, {
                    unselecting: f.element
                }))
            }), b(c.target).parents().andSelf().each(function () {
                var g = b.data(this, "selectable-item");
                if (g) {
                    var f = !c.metaKey && !c.ctrlKey || !g.$element.hasClass("ui-selected");
                    return g.$element.removeClass(f ? "ui-unselecting" : "ui-selected").addClass(f ? "ui-selecting" : "ui-unselecting"), g.unselecting = !f, g.selecting = f, g.selected = f, f ? e._trigger("selecting", c, {
                        selecting: g.element
                    }) : e._trigger("unselecting", c, {
                        unselecting: g.element
                    }), !1
                }
            })
        },
        _mouseDrag: function (f) {
            var k = this;
            this.dragged = !0;
            if (this.options.disabled) {
                return
            }
            var h = this.options,
                e = this.opos[0],
                g = this.opos[1],
                j = f.pageX,
                d = f.pageY;
            if (e > j) {
                var c = j;
                j = e, e = c
            }
            if (g > d) {
                var c = d;
                d = g, g = c
            }
            return this.helper.css({
                left: e,
                top: g,
                width: j - e,
                height: d - g
            }), this.selectees.each(function () {
                var l = b.data(this, "selectable-item");
                if (!l || l.element == k.element[0]) {
                    return
                }
                var m = !1;
                h.tolerance == "touch" ? m = !(l.left > j || l.right < e || l.top > d || l.bottom < g) : h.tolerance == "fit" && (m = l.left > e && l.right < j && l.top > g && l.bottom < d), m ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, k._trigger("selecting", f, {
                    selecting: l.element
                }))) : (l.selecting && ((f.metaKey || f.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), k._trigger("unselecting", f, {
                    unselecting: l.element
                }))), l.selected && !f.metaKey && !f.ctrlKey && !l.startselected && (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, k._trigger("unselecting", f, {
                    unselecting: l.element
                })))
            }), !1
        },
        _mouseStop: function (c) {
            var e = this;
            this.dragged = !1;
            var d = this.options;
            return b(".ui-unselecting", this.element[0]).each(function () {
                var f = b.data(this, "selectable-item");
                f.$element.removeClass("ui-unselecting"), f.unselecting = !1, f.startselected = !1, e._trigger("unselected", c, {
                    unselected: f.element
                })
            }), b(".ui-selecting", this.element[0]).each(function () {
                var f = b.data(this, "selectable-item");
                f.$element.removeClass("ui-selecting").addClass("ui-selected"), f.selecting = !1, f.selected = !0, f.startselected = !0, e._trigger("selected", c, {
                    selected: f.element
                })
            }), this._trigger("stop", c), this.helper.remove(), !1
        }
    })
})(jQuery);
(function (b, a) {
    b.widget("ui.sortable", b.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000
        },
        _create: function () {
            var c = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? c.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var c = this.items.length - 1; c >= 0; c--) {
                this.items[c].item.removeData(this.widgetName + "-item")
            }
            return this
        },
        _setOption: function (c, d) {
            c === "disabled" ? (this.options[c] = d, this.widget().toggleClass("ui-sortable-disabled", !! d)) : b.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (d, h) {
            var f = this;
            if (this.reverting) {
                return !1
            }
            if (this.options.disabled || this.options.type == "static") {
                return !1
            }
            this._refreshItems(d);
            var c = null,
                e = b(d.target).parents().each(function () {
                    if (b.data(this, f.widgetName + "-item") == f) {
                        return c = b(this), !1
                    }
                });
            b.data(d.target, f.widgetName + "-item") == f && (c = b(d.target));
            if (!c) {
                return !1
            }
            if (this.options.handle && !h) {
                var g = !1;
                b(this.options.handle, c).find("*").andSelf().each(function () {
                    this == d.target && (g = !0)
                });
                if (!g) {
                    return !1
                }
            }
            return this.currentItem = c, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (d, g, f) {
            var c = this.options;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(d), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, b.extend(this.offset, {
                click: {
                    left: d.pageX - this.offset.left,
                    top: d.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(d), this.originalPageX = d.pageX, this.originalPageY = d.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), c.containment && this._setContainment(), c.cursor && (b("body").css("cursor") && (this._storedCursor = b("body").css("cursor")), b("body").css("cursor", c.cursor)), c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity)), c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", d, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!f) {
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    this.containers[e]._trigger("activate", d, this._uiHash(this))
                }
            }
            return b.ui.ddmanager && (b.ui.ddmanager.current = this), b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, d), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(d), !0
        },
        _mouseDrag: function (e) {
            this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var j = this.options,
                    g = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < j.scrollSensitivity ? this.scrollParent[0].scrollTop = g = this.scrollParent[0].scrollTop + j.scrollSpeed : e.pageY - this.overflowOffset.top < j.scrollSensitivity && (this.scrollParent[0].scrollTop = g = this.scrollParent[0].scrollTop - j.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < j.scrollSensitivity ? this.scrollParent[0].scrollLeft = g = this.scrollParent[0].scrollLeft + j.scrollSpeed : e.pageX - this.overflowOffset.left < j.scrollSensitivity && (this.scrollParent[0].scrollLeft = g = this.scrollParent[0].scrollLeft - j.scrollSpeed)) : (e.pageY - b(document).scrollTop() < j.scrollSensitivity ? g = b(document).scrollTop(b(document).scrollTop() - j.scrollSpeed) : b(window).height() - (e.pageY - b(document).scrollTop()) < j.scrollSensitivity && (g = b(document).scrollTop(b(document).scrollTop() + j.scrollSpeed)), e.pageX - b(document).scrollLeft() < j.scrollSensitivity ? g = b(document).scrollLeft(b(document).scrollLeft() - j.scrollSpeed) : b(window).width() - (e.pageX - b(document).scrollLeft()) < j.scrollSensitivity && (g = b(document).scrollLeft(b(document).scrollLeft() + j.scrollSpeed))), g !== !1 && b.ui.ddmanager && !j.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, e)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            for (var d = this.items.length - 1; d >= 0; d--) {
                var f = this.items[d],
                    h = f.item[0],
                    c = this._intersectsWithPointer(f);
                if (!c) {
                    continue
                }
                if (f.instance !== this.currentContainer) {
                    continue
                }
                if (h != this.currentItem[0] && this.placeholder[c == 1 ? "next" : "prev"]()[0] != h && !b.contains(this.placeholder[0], h) && (this.options.type == "semi-dynamic" ? !b.contains(this.element[0], h) : !0)) {
                    this.direction = c == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(f)) {
                        break
                    }
                    this._rearrange(e, f), this._trigger("change", e, this._uiHash());
                    break
                }
            }
            return this._contactContainers(e), b.ui.ddmanager && b.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (d, f) {
            if (!d) {
                return
            }
            b.ui.ddmanager && !this.options.dropBehaviour && b.ui.ddmanager.drop(this, d);
            if (this.options.revert) {
                var e = this,
                    c = this.placeholder.offset();
                this.reverting = !0, b(this.helper).animate({
                    left: c.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: c.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function () {
                    e._clear(d)
                })
            } else {
                this._clear(d, f)
            }
            return !1
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var c = this.containers.length - 1; c >= 0; c--) {
                    this.containers[c]._trigger("deactivate", null, this._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, this._uiHash(this)), this.containers[c].containerCache.over = 0)
                }
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), b.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? b(this.domPosition.prev).after(this.currentItem) : b(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (c) {
            var e = this._getItemsAsjQuery(c && c.connected),
                d = [];
            return c = c || {}, b(e).each(function () {
                var f = (b(c.item || this).attr(c.attribute || "id") || "").match(c.expression || /(.+)[-=_](.+)/);
                f && d.push((c.key || f[1] + "[]") + "=" + (c.key && c.expression ? f[1] : f[2]))
            }), !d.length && c.key && d.push(c.key + "="), d.join("&")
        },
        toArray: function (c) {
            var e = this._getItemsAsjQuery(c && c.connected),
                d = [];
            return c = c || {}, e.each(function () {
                d.push(b(c.item || this).attr(c.attribute || "id") || "")
            }), d
        },
        _intersectsWith: function (p) {
            var x = this.positionAbs.left,
                h = x + this.helperProportions.width,
                d = this.positionAbs.top,
                k = d + this.helperProportions.height,
                y = p.left,
                g = y + p.width,
                w = p.top,
                v = w + p.height,
                m = this.offset.click.top,
                j = this.offset.click.left,
                q = d + m > w && d + m < v && x + j > y && x + j < g;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > p[this.floating ? "width" : "height"] ? q : y < x + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < g && w < d + this.helperProportions.height / 2 && k - this.helperProportions.height / 2 < v
        },
        _intersectsWithPointer: function (d) {
            var h = this.options.axis === "x" || b.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, d.top, d.height),
                f = this.options.axis === "y" || b.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, d.left, d.width),
                c = h && f,
                e = this._getDragVerticalDirection(),
                g = this._getDragHorizontalDirection();
            return c ? this.floating ? g && g == "right" || e == "down" ? 2 : 1 : e && (e == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function (d) {
            var g = b.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, d.top + d.height / 2, d.height),
                f = b.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, d.left + d.width / 2, d.width),
                c = this._getDragVerticalDirection(),
                e = this._getDragHorizontalDirection();
            return this.floating && e ? e == "right" && f || e == "left" && !f : c && (c == "down" && g || c == "up" && !g)
        },
        _getDragVerticalDirection: function () {
            var c = this.positionAbs.top - this.lastPositionAbs.top;
            return c != 0 && (c > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var c = this.positionAbs.left - this.lastPositionAbs.left;
            return c != 0 && (c > 0 ? "right" : "left")
        },
        refresh: function (c) {
            return this._refreshItems(c), this.refreshPositions(), this
        },
        _connectWith: function () {
            var c = this.options;
            return c.connectWith.constructor == String ? [c.connectWith] : c.connectWith
        },
        _getItemsAsjQuery: function (f) {
            var k = [],
                h = [],
                e = this._connectWith();
            if (e && f) {
                for (var g = e.length - 1; g >= 0; g--) {
                    var j = b(e[g]);
                    for (var d = j.length - 1; d >= 0; d--) {
                        var c = b.data(j[d], this.widgetName);
                        c && c != this && !c.options.disabled && h.push([b.isFunction(c.options.items) ? c.options.items.call(c.element) : b(c.options.items, c.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), c])
                    }
                }
            }
            h.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var g = h.length - 1; g >= 0; g--) {
                h[g][0].each(function () {
                    k.push(this)
                })
            }
            return b(k)
        },
        _removeCurrentsFromItems: function () {
            var c = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items, function (d) {
                for (var f = 0; f < c.length; f++) {
                    if (c[f] == d.item[0]) {
                        return !1
                    }
                }
                return !0
            })
        },
        _refreshItems: function (x) {
            this.items = [], this.containers = [this];
            var g = this.items,
                d = [
                    [b.isFunction(this.options.items) ? this.options.items.call(this.element[0], x, {
                            item: this.currentItem
                        }) : b(this.options.items, this.element), this]
                ],
                k = this._connectWith();
            if (k && this.ready) {
                for (var y = k.length - 1; y >= 0; y--) {
                    var e = b(k[y]);
                    for (var w = e.length - 1; w >= 0; w--) {
                        var v = b.data(e[w], this.widgetName);
                        v && v != this && !v.options.disabled && (d.push([b.isFunction(v.options.items) ? v.options.items.call(v.element[0], x, {
                                item: this.currentItem
                            }) : b(v.options.items, v.element), v]), this.containers.push(v))
                    }
                }
            }
            for (var y = d.length - 1; y >= 0; y--) {
                var p = d[y][1],
                    j = d[y][0];
                for (var w = 0, q = j.length; w < q; w++) {
                    var m = b(j[w]);
                    m.data(this.widgetName + "-item", p), g.push({
                        item: m,
                        instance: p,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function (d) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var g = this.items.length - 1; g >= 0; g--) {
                var f = this.items[g];
                if (f.instance != this.currentContainer && this.currentContainer && f.item[0] != this.currentItem[0]) {
                    continue
                }
                var c = this.options.toleranceElement ? b(this.options.toleranceElement, f.item) : f.item;
                d || (f.width = c.outerWidth(), f.height = c.outerHeight());
                var e = c.offset();
                f.left = e.left, f.top = e.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (var g = this.containers.length - 1; g >= 0; g--) {
                    var e = this.containers[g].element.offset();
                    this.containers[g].containerCache.left = e.left, this.containers[g].containerCache.top = e.top, this.containers[g].containerCache.width = this.containers[g].element.outerWidth(), this.containers[g].containerCache.height = this.containers[g].element.outerHeight()
                }
            }
            return this
        },
        _createPlaceholder: function (c) {
            c = c || this;
            var e = c.options;
            if (!e.placeholder || e.placeholder.constructor == String) {
                var d = e.placeholder;
                e.placeholder = {
                    element: function () {
                        var f = b(document.createElement(c.currentItem[0].nodeName)).addClass(d || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return d || (f.style.visibility = "hidden"), f
                    },
                    update: function (g, f) {
                        if (d && !e.forcePlaceholderSize) {
                            return
                        }
                        f.height() || f.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), f.width() || f.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            c.placeholder = b(e.placeholder.element.call(c.element, c.currentItem)), c.currentItem.after(c.placeholder), e.placeholder.update(c, c.placeholder)
        },
        _contactContainers: function (x) {
            var g = null,
                d = null;
            for (var k = this.containers.length - 1; k >= 0; k--) {
                if (b.contains(this.currentItem[0], this.containers[k].element[0])) {
                    continue
                }
                if (this._intersectsWith(this.containers[k].containerCache)) {
                    if (g && b.contains(this.containers[k].element[0], g.element[0])) {
                        continue
                    }
                    g = this.containers[k], d = k
                } else {
                    this.containers[k].containerCache.over && (this.containers[k]._trigger("out", x, this._uiHash(this)), this.containers[k].containerCache.over = 0)
                }
            }
            if (!g) {
                return
            }
            if (this.containers.length === 1) {
                this.containers[d]._trigger("over", x, this._uiHash(this)), this.containers[d].containerCache.over = 1
            } else {
                var y = 10000,
                    e = null,
                    w = this.containers[d].floating ? "left" : "top",
                    v = this.containers[d].floating ? "width" : "height",
                    p = this.positionAbs[w] + this.offset.click[w];
                for (var j = this.items.length - 1; j >= 0; j--) {
                    if (!b.contains(this.containers[d].element[0], this.items[j].item[0])) {
                        continue
                    }
                    if (this.items[j].item[0] == this.currentItem[0]) {
                        continue
                    }
                    var q = this.items[j].item.offset()[w],
                        m = !1;
                    Math.abs(q - p) > Math.abs(q + this.items[j][v] - p) && (m = !0, q += this.items[j][v]), Math.abs(q - p) < y && (y = Math.abs(q - p), e = this.items[j], this.direction = m ? "up" : "down")
                }
                if (!e && !this.options.dropOnEmpty) {
                    return
                }
                this.currentContainer = this.containers[d], e ? this._rearrange(x, e, null, !0) : this._rearrange(x, null, this.containers[d].element, !0), this._trigger("change", x, this._uiHash()), this.containers[d]._trigger("change", x, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", x, this._uiHash(this)), this.containers[d].containerCache.over = 1
            }
        },
        _createHelper: function (c) {
            var e = this.options,
                d = b.isFunction(e.helper) ? b(e.helper.apply(this.element[0], [c, this.currentItem])) : e.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return d.parents("body").length || b(e.appendTo != "parent" ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (d[0].style.width == "" || e.forceHelperSize) && d.width(this.currentItem.width()), (d[0].style.height == "" || e.forceHelperSize) && d.height(this.currentItem.height()), d
        },
        _adjustOffsetFromHelper: function (c) {
            typeof c == "string" && (c = c.split(" ")), b.isArray(c) && (c = {
                left: +c[0],
                top: +c[1] || 0
            }), "left" in c && (this.offset.click.left = c.left + this.margins.left), "right" in c && (this.offset.click.left = this.helperProportions.width - c.right + this.margins.left), "top" in c && (this.offset.click.top = c.top + this.margins.top), "bottom" in c && (this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var c = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0]) && (c.left += this.scrollParent.scrollLeft(), c.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && b.ui.ie) {
                c = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var c = this.currentItem.position();
                return {
                    top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var d = this.options;
            d.containment == "parent" && (d.containment = this.helper[0].parentNode);
            if (d.containment == "document" || d.containment == "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b(d.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b(d.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!/^(document|window|parent)$/.test(d.containment)) {
                var f = b(d.containment)[0],
                    e = b(d.containment).offset(),
                    c = b(f).css("overflow") != "hidden";
                this.containment = [e.left + (parseInt(b(f).css("borderLeftWidth"), 10) || 0) + (parseInt(b(f).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(b(f).css("borderTopWidth"), 10) || 0) + (parseInt(b(f).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (c ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(b(f).css("borderLeftWidth"), 10) || 0) - (parseInt(b(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (c ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(b(f).css("borderTopWidth"), 10) || 0) - (parseInt(b(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (d, h) {
            h || (h = this.position);
            var f = d == "absolute" ? 1 : -1,
                c = this.options,
                e = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                g = /(html|body)/i.test(e[0].tagName);
            return {
                top: h.top + this.offset.relative.top * f + this.offset.parent.top * f - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : e.scrollTop()) * f,
                left: h.left + this.offset.relative.left * f + this.offset.parent.left * f - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : e.scrollLeft()) * f
            }
        },
        _generatePosition: function (f) {
            var k = this.options,
                h = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                e = /(html|body)/i.test(h[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var g = f.pageX,
                j = f.pageY;
            if (this.originalPosition) {
                this.containment && (f.pageX - this.offset.click.left < this.containment[0] && (g = this.containment[0] + this.offset.click.left), f.pageY - this.offset.click.top < this.containment[1] && (j = this.containment[1] + this.offset.click.top), f.pageX - this.offset.click.left > this.containment[2] && (g = this.containment[2] + this.offset.click.left), f.pageY - this.offset.click.top > this.containment[3] && (j = this.containment[3] + this.offset.click.top));
                if (k.grid) {
                    var d = this.originalPageY + Math.round((j - this.originalPageY) / k.grid[1]) * k.grid[1];
                    j = this.containment ? d - this.offset.click.top < this.containment[1] || d - this.offset.click.top > this.containment[3] ? d - this.offset.click.top < this.containment[1] ? d + k.grid[1] : d - k.grid[1] : d : d;
                    var c = this.originalPageX + Math.round((g - this.originalPageX) / k.grid[0]) * k.grid[0];
                    g = this.containment ? c - this.offset.click.left < this.containment[0] || c - this.offset.click.left > this.containment[2] ? c - this.offset.click.left < this.containment[0] ? c + k.grid[0] : c - k.grid[0] : c : c
                }
            }
            return {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : h.scrollTop()),
                left: g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : h.scrollLeft())
            }
        },
        _rearrange: function (g, d, h, f) {
            h ? h[0].appendChild(this.placeholder[0]) : d.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? d.item[0] : d.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var c = this.counter;
            this._delay(function () {
                c == this.counter && this.refreshPositions(!f)
            })
        },
        _clear: function (d, f) {
            this.reverting = !1;
            var e = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var c in this._storedCSS) {
                    if (this._storedCSS[c] == "auto" || this._storedCSS[c] == "static") {
                        this._storedCSS[c] = ""
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            this.fromOutside && !f && e.push(function (g) {
                this._trigger("receive", g, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !f && e.push(function (g) {
                this._trigger("update", g, this._uiHash())
            }), this !== this.currentContainer && (f || (e.push(function (g) {
                this._trigger("remove", g, this._uiHash())
            }), e.push(function (g) {
                return function (h) {
                    g._trigger("receive", h, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), e.push(function (g) {
                return function (h) {
                    g._trigger("update", h, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (var c = this.containers.length - 1; c >= 0; c--) {
                f || e.push(function (g) {
                    return function (h) {
                        g._trigger("deactivate", h, this._uiHash(this))
                    }
                }.call(this, this.containers[c])), this.containers[c].containerCache.over && (e.push(function (g) {
                    return function (h) {
                        g._trigger("out", h, this._uiHash(this))
                    }
                }.call(this, this.containers[c])), this.containers[c].containerCache.over = 0)
            }
            this._storedCursor && b("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!f) {
                    this._trigger("beforeStop", d, this._uiHash());
                    for (var c = 0; c < e.length; c++) {
                        e[c].call(this, d)
                    }
                    this._trigger("stop", d, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            f || this._trigger("beforeStop", d, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!f) {
                for (var c = 0; c < e.length; c++) {
                    e[c].call(this, d)
                }
                this._trigger("stop", d, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            b.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (c) {
            var d = c || this;
            return {
                helper: d.helper,
                placeholder: d.placeholder || b([]),
                position: d.position,
                originalPosition: d.originalPosition,
                offset: d.positionAbs,
                item: d.currentItem,
                sender: c ? c.element : null
            }
        }
    })
})(jQuery);
(function (b, a) {
    var c = 0;
    b.widget("ui.autocomplete", {
        version: "1.9.2",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function () {
            var d, f, e;
            this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (g) {
                    if (this.element.prop("readOnly")) {
                        d = !0, e = !0, f = !0;
                        return
                    }
                    d = !1, e = !1, f = !1;
                    var h = b.ui.keyCode;
                    switch (g.keyCode) {
                        case h.PAGE_UP:
                            d = !0, this._move("previousPage", g);
                            break;
                        case h.PAGE_DOWN:
                            d = !0, this._move("nextPage", g);
                            break;
                        case h.UP:
                            d = !0, this._keyEvent("previous", g);
                            break;
                        case h.DOWN:
                            d = !0, this._keyEvent("next", g);
                            break;
                        case h.ENTER:
                        case h.NUMPAD_ENTER:
                            this.menu.active && (d = !0, g.preventDefault(), this.menu.select(g));
                            break;
                        case h.TAB:
                            this.menu.active && this.menu.select(g);
                            break;
                        case h.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(g), g.preventDefault());
                            break;
                        default:
                            f = !0, this._searchTimeout(g)
                    }
                },
                keypress: function (h) {
                    if (d) {
                        d = !1, h.preventDefault();
                        return
                    }
                    if (f) {
                        return
                    }
                    var g = b.ui.keyCode;
                    switch (h.keyCode) {
                        case g.PAGE_UP:
                            this._move("previousPage", h);
                            break;
                        case g.PAGE_DOWN:
                            this._move("nextPage", h);
                            break;
                        case g.UP:
                            this._keyEvent("previous", h);
                            break;
                        case g.DOWN:
                            this._keyEvent("next", h)
                    }
                },
                input: function (g) {
                    if (e) {
                        e = !1, g.preventDefault();
                        return
                    }
                    this._searchTimeout(g)
                },
                focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function (g) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching), this.close(g), this._change(g)
                }
            }), this._initSource(), this.menu = b("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: b(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                mousedown: function (g) {
                    g.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var h = this.menu.element[0];
                    b(g.target).closest(".ui-menu-item").length || this._delay(function () {
                        var j = this;
                        this.document.one("mousedown", function (k) {
                            k.target !== j.element[0] && k.target !== h && !b.contains(h, k.target) && j.close()
                        })
                    })
                },
                menufocus: function (g, j) {
                    if (this.isNewMenu) {
                        this.isNewMenu = !1;
                        if (g.originalEvent && /^mouse/.test(g.originalEvent.type)) {
                            this.menu.blur(), this.document.one("mousemove", function () {
                                b(g.target).trigger(g.originalEvent)
                            });
                            return
                        }
                    }
                    var h = j.item.data("ui-autocomplete-item") || j.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", g, {
                        item: h
                    }) ? g.originalEvent && /^key/.test(g.originalEvent.type) && this._value(h.value) : this.liveRegion.text(h.value)
                },
                menuselect: function (j, g) {
                    var k = g.item.data("ui-autocomplete-item") || g.item.data("item.autocomplete"),
                        h = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = h, this._delay(function () {
                        this.previous = h, this.selectedItem = k
                    })), !1 !== this._trigger("select", j, {
                        item: k
                    }) && this._value(k.value), this.term = this._value(), this.close(j), this.selectedItem = k
                }
            }), this.liveRegion = b("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), b.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (f, d) {
            this._super(f, d), f === "source" && this._initSource(), f === "appendTo" && this.menu.element.appendTo(this.document.find(d || "body")[0]), f === "disabled" && d && this.xhr && this.xhr.abort()
        },
        _isMultiLine: function () {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
        },
        _initSource: function () {
            var d, f, e = this;
            b.isArray(this.options.source) ? (d = this.options.source, this.source = function (h, g) {
                g(b.ui.autocomplete.filter(d, h.term))
            }) : typeof this.options.source == "string" ? (f = this.options.source, this.source = function (h, g) {
                e.xhr && e.xhr.abort(), e.xhr = b.ajax({
                    url: f,
                    data: h,
                    dataType: "json",
                    success: function (j) {
                        g(j)
                    },
                    error: function () {
                        g([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (d) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, d))
            }, this.options.delay)
        },
        search: function (f, d) {
            f = f != null ? f : this._value(), this.term = this._value();
            if (f.length < this.options.minLength) {
                return this.close(d)
            }
            if (this._trigger("search", d) === !1) {
                return
            }
            return this._search(f)
        },
        _search: function (d) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: d
            }, this._response())
        },
        _response: function () {
            var f = this,
                d = ++c;
            return function (e) {
                d === c && f.__response(e), f.pending--, f.pending || f.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function (d) {
            d && (d = this._normalize(d)), this._trigger("response", null, {
                content: d
            }), !this.options.disabled && d && d.length && !this.cancelSearch ? (this._suggest(d), this._trigger("open")) : this._close()
        },
        close: function (d) {
            this.cancelSearch = !0, this._close(d)
        },
        _close: function (d) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", d))
        },
        _change: function (d) {
            this.previous !== this._value() && this._trigger("change", d, {
                item: this.selectedItem
            })
        },
        _normalize: function (d) {
            return d.length && d[0].label && d[0].value ? d : b.map(d, function (e) {
                return typeof e == "string" ? {
                    label: e,
                    value: e
                } : b.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function (d) {
            var e = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(e, d), this.menu.refresh(), e.show(), this._resizeMenu(), e.position(b.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var d = this.menu.element;
            d.outerWidth(Math.max(d.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (d, f) {
            var e = this;
            b.each(f, function (g, h) {
                e._renderItemData(d, h)
            })
        },
        _renderItemData: function (f, d) {
            return this._renderItem(f, d).data("ui-autocomplete-item", d)
        },
        _renderItem: function (d, e) {
            return b("<li>").append(b("<a>").text(e.label)).appendTo(d)
        },
        _move: function (f, d) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, d);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(f) || this.menu.isLastItem() && /^next/.test(f)) {
                this._value(this.term), this.menu.blur();
                return
            }
            this.menu[f](d)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (f, d) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(f, d), d.preventDefault()
            }
        }
    }), b.extend(b.ui.autocomplete, {
        escapeRegex: function (d) {
            return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function (d, f) {
            var e = new RegExp(b.ui.autocomplete.escapeRegex(f), "i");
            return b.grep(d, function (g) {
                return e.test(g.label || g.value || g)
            })
        }
    }), b.widget("ui.autocomplete", b.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (d) {
                    return d + (d > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function (f) {
            var d;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return
            }
            f && f.length ? d = this.options.messages.results(f.length) : d = this.options.messages.noResults, this.liveRegion.text(d)
        }
    })
})(jQuery);
(function (b, a) {
    var c = !1;
    b.widget("ui.menu", {
        version: "1.9.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, b.proxy(function (d) {
                this.options.disabled && d.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (d) {
                    d.preventDefault()
                },
                "click .ui-state-disabled > a": function (d) {
                    d.preventDefault()
                },
                "click .ui-menu-item:has(a)": function (d) {
                    var e = b(d.target).closest(".ui-menu-item");
                    !c && e.not(".ui-state-disabled").length && (c = !0, this.select(d), e.has(".ui-menu").length ? this.expand(d) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function (d) {
                    var e = b(d.currentTarget);
                    e.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(d, e)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (f, d) {
                    var g = this.active || this.element.children(".ui-menu-item").eq(0);
                    d || this.focus(f, g)
                },
                blur: function (d) {
                    this._delay(function () {
                        b.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(d)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (d) {
                    b(d.target).closest(".ui-menu").length || this.collapseAll(d), c = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var d = b(this);
                d.data("ui-menu-submenu-carat") && d.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (g) {
            function d(m) {
                return m.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var l, j, f, h, k, e = !0;
            switch (g.keyCode) {
                case b.ui.keyCode.PAGE_UP:
                    this.previousPage(g);
                    break;
                case b.ui.keyCode.PAGE_DOWN:
                    this.nextPage(g);
                    break;
                case b.ui.keyCode.HOME:
                    this._move("first", "first", g);
                    break;
                case b.ui.keyCode.END:
                    this._move("last", "last", g);
                    break;
                case b.ui.keyCode.UP:
                    this.previous(g);
                    break;
                case b.ui.keyCode.DOWN:
                    this.next(g);
                    break;
                case b.ui.keyCode.LEFT:
                    this.collapse(g);
                    break;
                case b.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(g);
                    break;
                case b.ui.keyCode.ENTER:
                case b.ui.keyCode.SPACE:
                    this._activate(g);
                    break;
                case b.ui.keyCode.ESCAPE:
                    this.collapse(g);
                    break;
                default:
                    e = !1, j = this.previousFilter || "", f = String.fromCharCode(g.keyCode), h = !1, clearTimeout(this.filterTimer), f === j ? h = !0 : f = j + f, k = new RegExp("^" + d(f), "i"), l = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return k.test(b(this).children("a").text())
                    }), l = h && l.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : l, l.length || (f = String.fromCharCode(g.keyCode), k = new RegExp("^" + d(f), "i"), l = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return k.test(b(this).children("a").text())
                    })), l.length ? (this.focus(g, l), l.length > 1 ? (this.previousFilter = f, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1000)) : delete this.previousFilter) : delete this.previousFilter
            }
            e && g.preventDefault()
        },
        _activate: function (d) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(d) : this.select(d))
        },
        refresh: function () {
            var d, f = this.options.icons.submenu,
                e = this.element.find(this.options.menus);
            e.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var h = b(this),
                    j = h.prev("a"),
                    g = b("<span>").addClass("ui-menu-icon ui-icon " + f).data("ui-menu-submenu-carat", !0);
                j.attr("aria-haspopup", "true").prepend(g), h.attr("aria-labelledby", j.attr("id"))
            }), d = e.add(this.element), d.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), d.children(":not(.ui-menu-item)").each(function () {
                var g = b(this);
                /[^\-â€”â€“\s]/.test(g.text()) || g.addClass("ui-widget-content ui-menu-divider")
            }), d.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !b.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        focus: function (g, d) {
            var h, f;
            this.blur(g, g && g.type === "focus"), this._scrollIntoView(d), this.active = d.first(), f = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", f.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), g && g.type === "keydown" ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), h = d.children(".ui-menu"), h.length && /^mouse/.test(g.type) && this._startOpening(h), this.activeMenu = d.parent(), this._trigger("focus", g, {
                item: d
            })
        },
        _scrollIntoView: function (f) {
            var k, h, e, g, j, d;
            this._hasScroll() && (k = parseFloat(b.css(this.activeMenu[0], "borderTopWidth")) || 0, h = parseFloat(b.css(this.activeMenu[0], "paddingTop")) || 0, e = f.offset().top - this.activeMenu.offset().top - k - h, g = this.activeMenu.scrollTop(), j = this.activeMenu.height(), d = f.height(), e < 0 ? this.activeMenu.scrollTop(g + e) : e + d > j && this.activeMenu.scrollTop(g + e - j + d))
        },
        blur: function (f, d) {
            d || clearTimeout(this.timer);
            if (!this.active) {
                return
            }
            this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", f, {
                item: this.active
            })
        },
        _startOpening: function (d) {
            clearTimeout(this.timer);
            if (d.attr("aria-hidden") !== "true") {
                return
            }
            this.timer = this._delay(function () {
                this._close(), this._open(d)
            }, this.delay)
        },
        _open: function (d) {
            var e = b.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden", "true"), d.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
        },
        collapseAll: function (d, e) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var f = e ? this.element : b(d && d.target).closest(this.element.find(".ui-menu"));
                f.length || (f = this.element), this._close(f), this.blur(d), this.activeMenu = f
            }, this.delay)
        },
        _close: function (d) {
            d || (d = this.active ? this.active.parent() : this.element), d.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (f) {
            var d = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            d && d.length && (this._close(), this.focus(f, d))
        },
        expand: function (f) {
            var d = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            d && d.length && (this._open(d.parent()), this._delay(function () {
                this.focus(f, d)
            }))
        },
        next: function (d) {
            this._move("next", "first", d)
        },
        previous: function (d) {
            this._move("prev", "last", d)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (g, d, h) {
            var f;
            this.active && (g === "first" || g === "last" ? f = this.active[g === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : f = this.active[g + "All"](".ui-menu-item").eq(0));
            if (!f || !f.length || !this.active) {
                f = this.activeMenu.children(".ui-menu-item")[d]()
            }
            this.focus(h, f)
        },
        nextPage: function (e) {
            var g, f, d;
            if (!this.active) {
                this.next(e);
                return
            }
            if (this.isLastItem()) {
                return
            }
            this._hasScroll() ? (f = this.active.offset().top, d = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return g = b(this), g.offset().top - f - d < 0
            }), this.focus(e, g)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
        },
        previousPage: function (e) {
            var g, f, d;
            if (!this.active) {
                this.next(e);
                return
            }
            if (this.isFirstItem()) {
                return
            }
            this._hasScroll() ? (f = this.active.offset().top, d = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return g = b(this), g.offset().top - f + d > 0
            }), this.focus(e, g)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (d) {
            this.active = this.active || b(d.target).closest(".ui-menu-item");
            var e = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(d, !0), this._trigger("select", d, e)
        }
    })
})(jQuery);
(function (b, a) {
    var c = 5;
    b.widget("ui.slider", b.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var f, h, e = this.options,
                g = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                j = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                d = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (e.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = b([]), e.range && (e.range === !0 && (e.values || (e.values = [this._valueMin(), this._valueMin()]), e.values.length && e.values.length !== 2 && (e.values = [e.values[0], e.values[0]])), this.range = b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (e.range === "min" || e.range === "max" ? " ui-slider-range-" + e.range : ""))), h = e.values && e.values.length || 1;
            for (f = g.length; f < h; f++) {
                d.push(j)
            }
            this.handles = g.add(b(d.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (k) {
                k.preventDefault()
            }).mouseenter(function () {
                e.disabled || b(this).addClass("ui-state-hover")
            }).mouseleave(function () {
                b(this).removeClass("ui-state-hover")
            }).focus(function () {
                e.disabled ? b(this).blur() : (b(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), b(this).addClass("ui-state-focus"))
            }).blur(function () {
                b(this).removeClass("ui-state-focus")
            }), this.handles.each(function (k) {
                b(this).data("ui-slider-handle-index", k)
            }), this._on(this.handles, {
                keydown: function (m) {
                    var p, l, n, q, k = b(m.target).data("ui-slider-handle-index");
                    switch (m.keyCode) {
                        case b.ui.keyCode.HOME:
                        case b.ui.keyCode.END:
                        case b.ui.keyCode.PAGE_UP:
                        case b.ui.keyCode.PAGE_DOWN:
                        case b.ui.keyCode.UP:
                        case b.ui.keyCode.RIGHT:
                        case b.ui.keyCode.DOWN:
                        case b.ui.keyCode.LEFT:
                            m.preventDefault();
                            if (!this._keySliding) {
                                this._keySliding = !0, b(m.target).addClass("ui-state-active"), p = this._start(m, k);
                                if (p === !1) {
                                    return
                                }
                            }
                    }
                    q = this.options.step, this.options.values && this.options.values.length ? l = n = this.values(k) : l = n = this.value();
                    switch (m.keyCode) {
                        case b.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case b.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case b.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(l + (this._valueMax() - this._valueMin()) / c);
                            break;
                        case b.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(l - (this._valueMax() - this._valueMin()) / c);
                            break;
                        case b.ui.keyCode.UP:
                        case b.ui.keyCode.RIGHT:
                            if (l === this._valueMax()) {
                                return
                            }
                            n = this._trimAlignValue(l + q);
                            break;
                        case b.ui.keyCode.DOWN:
                        case b.ui.keyCode.LEFT:
                            if (l === this._valueMin()) {
                                return
                            }
                            n = this._trimAlignValue(l - q)
                    }
                    this._slide(m, k, n)
                },
                keyup: function (k) {
                    var l = b(k.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(k, l), this._change(k, l), b(k.target).removeClass("ui-state-active"))
                }
            }), this._refreshValue(), this._animateOff = !1
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (v) {
            var g, d, j, w, e, q, p, k, h = this,
                m = this.options;
            return m.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), g = {
                x: v.pageX,
                y: v.pageY
            }, d = this._normValueFromMouse(g), j = this._valueMax() - this._valueMin() + 1, this.handles.each(function (f) {
                var l = Math.abs(d - h.values(f));
                j > l && (j = l, w = b(this), e = f)
            }), m.range === !0 && this.values(1) === m.min && (e += 1, w = b(this.handles[e])), q = this._start(v, e), q === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = e, w.addClass("ui-state-active").focus(), p = w.offset(), k = !b(v.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = k ? {
                left: 0,
                top: 0
            } : {
                left: v.pageX - p.left - w.width() / 2,
                top: v.pageY - p.top - w.height() / 2 - (parseInt(w.css("borderTopWidth"), 10) || 0) - (parseInt(w.css("borderBottomWidth"), 10) || 0) + (parseInt(w.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(v, e, d), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (f) {
            var d = {
                x: f.pageX,
                y: f.pageY
            }, g = this._normValueFromMouse(d);
            return this._slide(f, this._handleIndex, g), !1
        },
        _mouseStop: function (d) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(d, this._handleIndex), this._change(d, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (j) {
            var f, k, h, d, g;
            return this.orientation === "horizontal" ? (f = this.elementSize.width, k = j.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (f = this.elementSize.height, k = j.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), h = k / f, h > 1 && (h = 1), h < 0 && (h = 0), this.orientation === "vertical" && (h = 1 - h), d = this._valueMax() - this._valueMin(), g = this._valueMin() + h * d, this._trimAlignValue(g)
        },
        _start: function (f, d) {
            var g = {
                handle: this.handles[d],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (g.value = this.values(d), g.values = this.values()), this._trigger("start", f, g)
        },
        _slide: function (j, f, k) {
            var h, d, g;
            this.options.values && this.options.values.length ? (h = this.values(f ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (f === 0 && k > h || f === 1 && k < h) && (k = h), k !== this.values(f) && (d = this.values(), d[f] = k, g = this._trigger("slide", j, {
                handle: this.handles[f],
                value: k,
                values: d
            }), h = this.values(f ? 0 : 1), g !== !1 && this.values(f, k, !0))) : k !== this.value() && (g = this._trigger("slide", j, {
                handle: this.handles[f],
                value: k
            }), g !== !1 && this.value(k))
        },
        _stop: function (f, d) {
            var g = {
                handle: this.handles[d],
                value: this.value()
            };
            this.options.values && this.options.values.length && (g.value = this.values(d), g.values = this.values()), this._trigger("stop", f, g)
        },
        _change: function (f, d) {
            if (!this._keySliding && !this._mouseSliding) {
                var g = {
                    handle: this.handles[d],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (g.value = this.values(d), g.values = this.values()), this._trigger("change", f, g)
            }
        },
        value: function (d) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(d), this._refreshValue(), this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function (e, h) {
            var g, d, f;
            if (arguments.length > 1) {
                this.options.values[e] = this._trimAlignValue(h), this._refreshValue(), this._change(null, e);
                return
            }
            if (!arguments.length) {
                return this._values()
            }
            if (!b.isArray(arguments[0])) {
                return this.options.values && this.options.values.length ? this._values(e) : this.value()
            }
            g = this.options.values, d = arguments[0];
            for (f = 0; f < g.length; f += 1) {
                g[f] = this._trimAlignValue(d[f]), this._change(null, f)
            }
            this._refreshValue()
        },
        _setOption: function (e, g) {
            var f, d = 0;
            b.isArray(this.options.values) && (d = this.options.values.length), b.Widget.prototype._setOption.apply(this, arguments);
            switch (e) {
                case "disabled":
                    g ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0, this._refreshValue();
                    for (f = 0; f < d; f += 1) {
                        this._change(null, f)
                    }
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1
            }
        },
        _value: function () {
            var d = this.options.value;
            return d = this._trimAlignValue(d), d
        },
        _values: function (g) {
            var d, h, f;
            if (arguments.length) {
                return d = this.options.values[g], d = this._trimAlignValue(d), d
            }
            h = this.options.values.slice();
            for (f = 0; f < h.length; f += 1) {
                h[f] = this._trimAlignValue(h[f])
            }
            return h
        },
        _trimAlignValue: function (g) {
            if (g <= this._valueMin()) {
                return this._valueMin()
            }
            if (g >= this._valueMax()) {
                return this._valueMax()
            }
            var d = this.options.step > 0 ? this.options.step : 1,
                h = (g - this._valueMin()) % d,
                f = g - h;
            return Math.abs(h) * 2 >= d && (f += h > 0 ? d : -d), parseFloat(f.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var q, g, d, j, v, e = this.options.range,
                p = this.options,
                m = this,
                k = this._animateOff ? !1 : p.animate,
                h = {};
            this.options.values && this.options.values.length ? this.handles.each(function (f) {
                g = (m.values(f) - m._valueMin()) / (m._valueMax() - m._valueMin()) * 100, h[m.orientation === "horizontal" ? "left" : "bottom"] = g + "%", b(this).stop(1, 1)[k ? "animate" : "css"](h, p.animate), m.options.range === !0 && (m.orientation === "horizontal" ? (f === 0 && m.range.stop(1, 1)[k ? "animate" : "css"]({
                    left: g + "%"
                }, p.animate), f === 1 && m.range[k ? "animate" : "css"]({
                    width: g - q + "%"
                }, {
                    queue: !1,
                    duration: p.animate
                })) : (f === 0 && m.range.stop(1, 1)[k ? "animate" : "css"]({
                    bottom: g + "%"
                }, p.animate), f === 1 && m.range[k ? "animate" : "css"]({
                    height: g - q + "%"
                }, {
                    queue: !1,
                    duration: p.animate
                }))), q = g
            }) : (d = this.value(), j = this._valueMin(), v = this._valueMax(), g = v !== j ? (d - j) / (v - j) * 100 : 0, h[this.orientation === "horizontal" ? "left" : "bottom"] = g + "%", this.handle.stop(1, 1)[k ? "animate" : "css"](h, p.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[k ? "animate" : "css"]({
                width: g + "%"
            }, p.animate), e === "max" && this.orientation === "horizontal" && this.range[k ? "animate" : "css"]({
                width: 100 - g + "%"
            }, {
                queue: !1,
                duration: p.animate
            }), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[k ? "animate" : "css"]({
                height: g + "%"
            }, p.animate), e === "max" && this.orientation === "vertical" && this.range[k ? "animate" : "css"]({
                height: 100 - g + "%"
            }, {
                queue: !1,
                duration: p.animate
            }))
        }
    })
})(jQuery);
jQuery.effects || function (c, a) {
    var d = c.uiBackCompat !== !1,
        b = "ui-effects-";
    c.effects = {
        effect: {}
    },
    function (D, k) {
        function g(l, f, o) {
            var h = A[f.type] || {};
            return l == null ? o || !f.def ? null : f.def : (l = h.floor ? ~~l : parseFloat(l), isNaN(l) ? f.def : h.mod ? (l + h.mod) % h.mod : 0 > l ? 0 : h.max < l ? h.max : l)
        }
        function y(h) {
            var l = j(),
                f = l._rgba = [];
            return h = h.toLowerCase(), w(E, function (r, p) {
                var u, F = p.re.exec(h),
                    n = F && p.parse(F),
                    v = p.space || "rgba";
                if (n) {
                    return u = l[v](n), l[C[v].cache] = u[C[v].cache], f = l._rgba = u._rgba, !1
                }
            }), f.length ? (f.join() === "0,0,0,0" && D.extend(f, z.transparent), l) : z[h]
        }
        function B(h, f, l) {
            return l = (l + 1) % 1, l * 6 < 1 ? h + (f - h) * l * 6 : l * 2 < 1 ? f : l * 3 < 2 ? h + (f - h) * (2 / 3 - l) * 6 : h
        }
        var e = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
            q = /^([\-+])=\s*(\d+\.?\d*)/,
            E = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (f) {
                        return [f[1], f[2], f[3], f[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (f) {
                        return [f[1] * 2.55, f[2] * 2.55, f[3] * 2.55, f[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (f) {
                        return [parseInt(f[1], 16), parseInt(f[2], 16), parseInt(f[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (f) {
                        return [parseInt(f[1] + f[1], 16), parseInt(f[2] + f[2], 16), parseInt(f[3] + f[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (f) {
                        return [f[1], f[2] / 100, f[3] / 100, f[4]]
                    }
                }
            ],
            j = D.Color = function (l, o, h, f) {
                return new D.Color.fn.parse(l, o, h, f)
            }, C = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            }, A = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            }, x = j.support = {}, m = D("<p>")[0],
            z, w = D.each;
        m.style.cssText = "background-color:rgba(1,1,1,.5)", x.rgba = m.style.backgroundColor.indexOf("rgba") > -1, w(C, function (h, f) {
            f.cache = "_" + h, f.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), j.fn = D.extend(j.prototype, {
            parse: function (u, p, t, n) {
                if (u === k) {
                    return this._rgba = [null, null, null, null], this
                }
                if (u.jquery || u.nodeType) {
                    u = D(u).css(p), p = k
                }
                var F = this,
                    h = D.type(u),
                    o = this._rgba = [];
                p !== k && (u = [u, p, t, n], h = "array");
                if (h === "string") {
                    return this.parse(y(u) || z._default)
                }
                if (h === "array") {
                    return w(C.rgba.props, function (l, f) {
                        o[f.idx] = g(u[f.idx], f)
                    }), this
                }
                if (h === "object") {
                    return u instanceof j ? w(C, function (l, f) {
                        u[f.cache] && (F[f.cache] = u[f.cache].slice())
                    }) : w(C, function (l, r) {
                        var f = r.cache;
                        w(r.props, function (v, s) {
                            if (!F[f] && r.to) {
                                if (v === "alpha" || u[v] == null) {
                                    return
                                }
                                F[f] = r.to(F._rgba)
                            }
                            F[f][s.idx] = g(u[v], s, !0)
                        }), F[f] && c.inArray(null, F[f].slice(0, 3)) < 0 && (F[f][3] = 1, r.from && (F._rgba = r.from(F[f])))
                    }), this
                }
            },
            is: function (l) {
                var f = j(l),
                    o = !0,
                    h = this;
                return w(C, function (r, n) {
                    var p, t = f[n.cache];
                    return t && (p = h[n.cache] || n.to && n.to(h._rgba) || [], w(n.props, function (u, s) {
                        if (t[s.idx] != null) {
                            return o = t[s.idx] === p[s.idx], o
                        }
                    })), o
                }), o
            },
            _space: function () {
                var h = [],
                    f = this;
                return w(C, function (o, l) {
                    f[l.cache] && h.push(o)
                }), h.pop()
            },
            transition: function (G, p) {
                var H = j(G),
                    v = H._space(),
                    o = C[v],
                    u = this.alpha() === 0 ? j("transparent") : this,
                    F = u[o.cache] || o.to(u._rgba),
                    h = F.slice();
                return H = H[o.cache], w(o.props, function (I, t) {
                    var l = t.idx,
                        n = F[l],
                        J = H[l],
                        f = A[t.type] || {};
                    if (J === null) {
                        return
                    }
                    n === null ? h[l] = J : (f.mod && (J - n > f.mod / 2 ? n += f.mod : n - J > f.mod / 2 && (n -= f.mod)), h[l] = g((J - n) * p + n, t))
                }), this[v](h)
            },
            blend: function (l) {
                if (this._rgba[3] === 1) {
                    return this
                }
                var o = this._rgba.slice(),
                    h = o.pop(),
                    f = j(l)._rgba;
                return j(D.map(o, function (p, n) {
                    return (1 - h) * f[n] + h * p
                }))
            },
            toRgbaString: function () {
                var f = "rgba(",
                    h = D.map(this._rgba, function (n, l) {
                        return n == null ? l > 2 ? 1 : 0 : n
                    });
                return h[3] === 1 && (h.pop(), f = "rgb("), f + h.join() + ")"
            },
            toHslaString: function () {
                var f = "hsla(",
                    h = D.map(this.hsla(), function (n, l) {
                        return n == null && (n = l > 2 ? 1 : 0), l && l < 3 && (n = Math.round(n * 100) + "%"), n
                    });
                return h[3] === 1 && (h.pop(), f = "hsl("), f + h.join() + ")"
            },
            toHexString: function (h) {
                var l = this._rgba.slice(),
                    f = l.pop();
                return h && l.push(~~(f * 255)), "#" + D.map(l, function (n) {
                    return n = (n || 0).toString(16), n.length === 1 ? "0" + n : n
                }).join("")
            },
            toString: function () {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }), j.fn.parse.prototype = j.fn, C.hsla.to = function (I) {
            if (I[0] == null || I[1] == null || I[2] == null) {
                return [null, null, null, I[3]]
            }
            var M = I[0] / 255,
                v = I[1] / 255,
                h = I[2] / 255,
                G = I[3],
                N = Math.max(M, v, h),
                p = Math.min(M, v, h),
                L = N - p,
                K = N + p,
                H = K * 0.5,
                F, J;
            return p === N ? F = 0 : M === N ? F = 60 * (v - h) / L + 360 : v === N ? F = 60 * (h - M) / L + 120 : F = 60 * (M - v) / L + 240, H === 0 || H === 1 ? J = H : H <= 0.5 ? J = L / K : J = L / (2 - K), [Math.round(F) % 360, J, H, G == null ? 1 : G]
        }, C.hsla.from = function (u) {
            if (u[0] == null || u[1] == null || u[2] == null) {
                return [null, null, null, u[3]]
            }
            var h = u[0] / 360,
                F = u[1],
                p = u[2],
                f = u[3],
                l = p <= 0.5 ? p * (1 + F) : p + F - p * F,
                v = 2 * p - l;
            return [Math.round(B(v, l, h + 1 / 3) * 255), Math.round(B(v, l, h) * 255), Math.round(B(v, l, h - 1 / 3) * 255), f]
        }, w(C, function (t, o) {
            var n = o.props,
                l = o.cache,
                h = o.to,
                p = o.from;
            j.fn[t] = function (v) {
                h && !this[l] && (this[l] = h(this._rgba));
                if (v === k) {
                    return this[l].slice()
                }
                var u, s = D.type(v),
                    f = s === "array" || s === "object" ? v : arguments,
                    F = this[l].slice();
                return w(n, function (G, r) {
                    var H = f[s === "object" ? G : r.idx];
                    H == null && (H = F[r.idx]), F[r.idx] = g(H, r)
                }), p ? (u = j(p(F)), u[l] = F, u) : j(F)
            }, w(n, function (s, f) {
                if (j.fn[s]) {
                    return
                }
                j.fn[s] = function (G) {
                    var I = D.type(G),
                        F = s === "alpha" ? this._hsla ? "hsla" : "rgba" : t,
                        v = this[F](),
                        H = v[f.idx],
                        r;
                    return I === "undefined" ? H : (I === "function" && (G = G.call(this, H), I = D.type(G)), G == null && f.empty ? this : (I === "string" && (r = q.exec(G), r && (G = H + parseFloat(r[2]) * (r[1] === "+" ? 1 : -1))), v[f.idx] = G, this[F](v)))
                }
            })
        }), w(e, function (f, h) {
            D.cssHooks[h] = {
                set: function (G, F) {
                    var t, v, p = "";
                    if (D.type(F) !== "string" || (t = y(F))) {
                        F = j(t || F);
                        if (!x.rgba && F._rgba[3] !== 1) {
                            v = h === "backgroundColor" ? G.parentNode : G;
                            while ((p === "" || p === "transparent") && v && v.style) {
                                try {
                                    p = D.css(v, "backgroundColor"), v = v.parentNode
                                } catch (o) {}
                            }
                            F = F.blend(p && p !== "transparent" ? p : "_default")
                        }
                        F = F.toRgbaString()
                    }
                    try {
                        G.style[h] = F
                    } catch (n) {}
                }
            }, D.fx.step[h] = function (l) {
                l.colorInit || (l.start = j(l.elem, h), l.end = j(l.end), l.colorInit = !0), D.cssHooks[h].set(l.elem, l.start.transition(l.end, l.pos))
            }
        }), D.cssHooks.borderColor = {
            expand: function (h) {
                var f = {};
                return w(["Top", "Right", "Bottom", "Left"], function (o, l) {
                    f["border" + l + "Color"] = h
                }), f
            }
        }, z = D.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function () {
        function e() {
            var k = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                m = {}, l, j;
            if (k && k.length && k[0] && k[k[0]]) {
                j = k.length;
                while (j--) {
                    l = k[j], typeof k[l] == "string" && (m[c.camelCase(l)] = k[l])
                }
            } else {
                for (l in k) {
                    typeof k[l] == "string" && (m[l] = k[l])
                }
            }
            return m
        }
        function f(k, p) {
            var j = {}, l, m;
            for (l in p) {
                m = p[l], k[l] !== m && !g[l] && (c.fx.step[l] || !isNaN(parseFloat(m))) && (j[l] = m)
            }
            return j
        }
        var h = ["add", "remove", "toggle"],
            g = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        c.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (j, k) {
            c.fx.step[k] = function (l) {
                if (l.end !== "none" && !l.setAttr || l.pos === 1 && !l.setAttr) {
                    jQuery.style(l.elem, k, l.end), l.setAttr = !0
                }
            }
        }), c.effects.animateClass = function (l, m, n, k) {
            var j = c.speed(m, n, k);
            return this.queue(function () {
                var q = c(this),
                    t = q.attr("class") || "",
                    p, s = j.children ? q.find("*").andSelf() : q;
                s = s.map(function () {
                    var o = c(this);
                    return {
                        el: o,
                        start: e.call(this)
                    }
                }), p = function () {
                    c.each(h, function (o, r) {
                        l[r] && q[r + "Class"](l[r])
                    })
                }, p(), s = s.map(function () {
                    return this.end = e.call(this.el[0]), this.diff = f(this.start, this.end), this
                }), q.attr("class", t), s = s.map(function () {
                    var o = this,
                        v = c.Deferred(),
                        u = jQuery.extend({}, j, {
                            queue: !1,
                            complete: function () {
                                v.resolve(o)
                            }
                        });
                    return this.el.animate(this.diff, u), v.promise()
                }), c.when.apply(c, s.get()).done(function () {
                    p(), c.each(arguments, function () {
                        var o = this.el;
                        c.each(this.diff, function (r) {
                            o.css(r, "")
                        })
                    }), j.complete.call(q[0])
                })
            })
        }, c.fn.extend({
            _addClass: c.fn.addClass,
            addClass: function (k, m, l, j) {
                return m ? c.effects.animateClass.call(this, {
                    add: k
                }, m, l, j) : this._addClass(k)
            },
            _removeClass: c.fn.removeClass,
            removeClass: function (k, m, l, j) {
                return m ? c.effects.animateClass.call(this, {
                    remove: k
                }, m, l, j) : this._removeClass(k)
            },
            _toggleClass: c.fn.toggleClass,
            toggleClass: function (p, l, j, k, m) {
                return typeof l == "boolean" || l === a ? j ? c.effects.animateClass.call(this, l ? {
                    add: p
                } : {
                    remove: p
                }, j, k, m) : this._toggleClass(p, l) : c.effects.animateClass.call(this, {
                    toggle: p
                }, l, j, k)
            },
            switchClass: function (k, o, m, j, l) {
                return c.effects.animateClass.call(this, {
                    add: o,
                    remove: k
                }, m, j, l)
            }
        })
    }(),
    function () {
        function e(h, k, j, g) {
            c.isPlainObject(h) && (k = h, h = h.effect), h = {
                effect: h
            }, k == null && (k = {}), c.isFunction(k) && (g = k, j = null, k = {});
            if (typeof k == "number" || c.fx.speeds[k]) {
                g = j, j = k, k = {}
            }
            return c.isFunction(j) && (g = j, j = null), k && c.extend(h, k), j = j || k.duration, h.duration = c.fx.off ? 0 : typeof j == "number" ? j : j in c.fx.speeds ? c.fx.speeds[j] : c.fx.speeds._default, h.complete = g || k.complete, h
        }
        function f(g) {
            return !g || typeof g == "number" || c.fx.speeds[g] ? !0 : typeof g == "string" && !c.effects.effect[g] ? d && c.effects[g] ? !1 : !0 : !1
        }
        c.extend(c.effects, {
            version: "1.9.2",
            save: function (h, g) {
                for (var j = 0; j < g.length; j++) {
                    g[j] !== null && h.data(b + g[j], h[0].style[g[j]])
                }
            },
            restore: function (j, k) {
                var g, h;
                for (h = 0; h < k.length; h++) {
                    k[h] !== null && (g = j.data(b + k[h]), g === a && (g = ""), j.css(k[h], g))
                }
            },
            setMode: function (h, g) {
                return g === "toggle" && (g = h.is(":hidden") ? "show" : "hide"), g
            },
            getBaseline: function (j, g) {
                var k, h;
                switch (j[0]) {
                    case "top":
                        k = 0;
                        break;
                    case "middle":
                        k = 0.5;
                        break;
                    case "bottom":
                        k = 1;
                        break;
                    default:
                        k = j[0] / g.height
                }
                switch (j[1]) {
                    case "left":
                        h = 0;
                        break;
                    case "center":
                        h = 0.5;
                        break;
                    case "right":
                        h = 1;
                        break;
                    default:
                        h = j[1] / g.width
                }
                return {
                    x: h,
                    y: k
                }
            },
            createWrapper: function (h) {
                if (h.parent().is(".ui-effects-wrapper")) {
                    return h.parent()
                }
                var m = {
                    width: h.outerWidth(!0),
                    height: h.outerHeight(!0),
                    "float": h.css("float")
                }, k = c("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    g = {
                        width: h.width(),
                        height: h.height()
                    }, j = document.activeElement;
                try {
                    j.id
                } catch (l) {
                    j = document.body
                }
                return h.wrap(k), (h[0] === j || c.contains(h[0], j)) && c(j).focus(), k = h.parent(), h.css("position") === "static" ? (k.css({
                    position: "relative"
                }), h.css({
                    position: "relative"
                })) : (c.extend(m, {
                    position: h.css("position"),
                    zIndex: h.css("z-index")
                }), c.each(["top", "left", "bottom", "right"], function (o, n) {
                    m[n] = h.css(n), isNaN(parseInt(m[n], 10)) && (m[n] = "auto")
                }), h.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), h.css(g), k.css(m).show()
            },
            removeWrapper: function (g) {
                var h = document.activeElement;
                return g.parent().is(".ui-effects-wrapper") && (g.parent().replaceWith(g), (g[0] === h || c.contains(g[0], h)) && c(h).focus()), g
            },
            setTransition: function (h, k, j, g) {
                return g = g || {}, c.each(k, function (m, o) {
                    var l = h.cssUnit(o);
                    l[0] > 0 && (g[o] = l[0] * j + l[1])
                }), g
            }
        }), c.fn.extend({
            effect: function () {
                function g(v) {
                    function o() {
                        c.isFunction(p) && p.call(t[0]), c.isFunction(v) && v()
                    }
                    var t = c(this),
                        p = j.complete,
                        q = j.mode;
                    (t.is(":hidden") ? q === "hide" : q === "show") ? o() : m.call(t[0], j, o)
                }
                var j = e.apply(this, arguments),
                    l = j.mode,
                    k = j.queue,
                    m = c.effects.effect[j.effect],
                    h = !m && d && c.effects[j.effect];
                return c.fx.off || !m && !h ? l ? this[l](j.duration, j.complete) : this.each(function () {
                    j.complete && j.complete.call(this)
                }) : m ? k === !1 ? this.each(g) : this.queue(k || "fx", g) : h.call(this, {
                    options: j,
                    duration: j.duration,
                    callback: j.complete,
                    mode: j.mode
                })
            },
            _show: c.fn.show,
            show: function (h) {
                if (f(h)) {
                    return this._show.apply(this, arguments)
                }
                var g = e.apply(this, arguments);
                return g.mode = "show", this.effect.call(this, g)
            },
            _hide: c.fn.hide,
            hide: function (h) {
                if (f(h)) {
                    return this._hide.apply(this, arguments)
                }
                var g = e.apply(this, arguments);
                return g.mode = "hide", this.effect.call(this, g)
            },
            __toggle: c.fn.toggle,
            toggle: function (g) {
                if (f(g) || typeof g == "boolean" || c.isFunction(g)) {
                    return this.__toggle.apply(this, arguments)
                }
                var h = e.apply(this, arguments);
                return h.mode = "toggle", this.effect.call(this, h)
            },
            cssUnit: function (g) {
                var j = this.css(g),
                    h = [];
                return c.each(["em", "px", "%", "pt"], function (l, k) {
                    j.indexOf(k) > 0 && (h = [parseFloat(j), k])
                }), h
            }
        })
    }(),
    function () {
        var e = {};
        c.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (f, g) {
            e[g] = function (h) {
                return Math.pow(h, f + 2)
            }
        }), c.extend(e, {
            Sine: function (f) {
                return 1 - Math.cos(f * Math.PI / 2)
            },
            Circ: function (f) {
                return 1 - Math.sqrt(1 - f * f)
            },
            Elastic: function (f) {
                return f === 0 || f === 1 ? f : -Math.pow(2, 8 * (f - 1)) * Math.sin(((f - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function (f) {
                return f * f * (3 * f - 2)
            },
            Bounce: function (g) {
                var f, h = 4;
                while (g < ((f = Math.pow(2, --h)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - h) - 7.5625 * Math.pow((f * 3 - 2) / 22 - g, 2)
            }
        }), c.each(e, function (f, g) {
            c.easing["easeIn" + f] = g, c.easing["easeOut" + f] = function (h) {
                return 1 - g(1 - h)
            }, c.easing["easeInOut" + f] = function (h) {
                return h < 0.5 ? g(h * 2) / 2 : 1 - g(h * -2 + 2) / 2
            }
        })
    }()
}(jQuery);
/*
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2012, John Dyer (http://j.hn)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
var mejs = mejs || {};
mejs.version = "2.10.0";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
            version: [3, 0],
            types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
        }
    ],
    flash: [{
            version: [9, 0, 124],
            types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
        }
    ],
    youtube: [{
            version: null,
            types: ["video/youtube", "video/x-youtube"]
        }
    ],
    vimeo: [{
            version: null,
            types: ["video/vimeo", "video/x-vimeo"]
        }
    ]
};
mejs.Utility = {
    encodeUrl: function (b) {
        return encodeURIComponent(b)
    },
    escapeHTML: function (b) {
        return b.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function (d) {
        var c = document.createElement("div");
        c.innerHTML = '<a href="' + this.escapeHTML(d) + '">x</a>';
        return c.firstChild.href
    },
    getScriptPath: function (s) {
        for (var r = 0, q, p = "", o = "", m, n = document.getElementsByTagName("script"), k = n.length, j = s.length; r < k; r++) {
            m = n[r].src;
            for (q = 0; q < j; q++) {
                o = s[q];
                if (m.indexOf(o) > -1) {
                    p = m.substring(0, m.indexOf(o));
                    break
                }
            }
            if (p !== "") {
                break
            }
        }
        return p
    },
    secondsToTimeCode: function (j, h, o, n) {
        if (typeof o == "undefined") {
            o = false
        } else {
            if (typeof n == "undefined") {
                n = 25
            }
        }
        var m = Math.floor(j / 3600) % 24,
            k = Math.floor(j / 60) % 60,
            l = Math.floor(j % 60);
        j = Math.floor((j % 1 * n).toFixed(3));
        return (h || m > 0 ? (m < 10 ? "0" + m : m) + ":" : "") + (k < 10 ? "0" + k : k) + ":" + (l < 10 ? "0" + l : l) + (o ? ":" + (j < 10 ? "0" + j : j) : "")
    },
    timeCodeToSeconds: function (k, j, q, p) {
        if (typeof q == "undefined") {
            q = false
        } else {
            if (typeof p == "undefined") {
                p = 25
            }
        }
        k = k.split(":");
        j = parseInt(k[0], 10);
        var o = parseInt(k[1], 10),
            m = parseInt(k[2], 10),
            n = 0,
            l = 0;
        if (q) {
            n = parseInt(k[3]) / p
        }
        return l = j * 3600 + o * 60 + m + n
    },
    convertSMPTEtoSeconds: function (g) {
        if (typeof g != "string") {
            return false
        }
        g = g.replace(",", ".");
        var f = 0,
            k = g.indexOf(".") != -1 ? g.split(".")[1].length : 0,
            j = 1;
        g = g.split(":").reverse();
        for (var h = 0; h < g.length; h++) {
            j = 1;
            if (h > 0) {
                j = Math.pow(60, h)
            }
            f += Number(g[h]) * j
        }
        return Number(f.toFixed(k))
    },
    removeSwf: function (d) {
        var c = document.getElementById(d);
        if (c && c.nodeName == "OBJECT") {
            if (mejs.MediaFeatures.isIE) {
                c.style.display = "none";
                (function () {
                    c.readyState == 4 ? mejs.Utility.removeObjectInIE(d) : setTimeout(arguments.callee, 10)
                })()
            } else {
                c.parentNode.removeChild(c)
            }
        }
    },
    removeObjectInIE: function (d) {
        if (d = document.getElementById(d)) {
            for (var c in d) {
                if (typeof d[c] == "function") {
                    d[c] = null
                }
            }
            d.parentNode.removeChild(d)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function (e, d) {
        var f = this.plugins[e];
        d[1] = d[1] || 0;
        d[2] = d[2] || 0;
        return f[0] > d[0] || f[0] == d[0] && f[1] > d[1] || f[0] == d[0] && f[1] == d[1] && f[2] >= d[2] ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (g, f, k, j, h) {
        this.plugins[g] = this.detectPlugin(f, k, j, h)
    },
    detectPlugin: function (j, h, o, n) {
        var m = [0, 0, 0],
            k;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[j] == "object") {
            if ((o = this.nav.plugins[j].description) && !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[h] && !this.nav.mimeTypes[h].enabledPlugin)) {
                m = o.replace(j, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (j = 0; j < m.length; j++) {
                    m[j] = parseInt(m[j].match(/\d+/), 10)
                }
            }
        } else {
            if (typeof window.ActiveXObject != "undefined") {
                try {
                    if (k = new ActiveXObject(o)) {
                        m = n(k)
                    }
                } catch (l) {}
            }
        }
        return m
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (d) {
    var c = [];
    if (d = d.GetVariable("$version")) {
        d = d.split(" ")[1].split(",");
        c = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)]
    }
    return c
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (e) {
    var d = [0, 0, 0, 0],
        f = function (h, c, a, b) {
            for (; h.isVersionSupported(c[0] + "." + c[1] + "." + c[2] + "." + c[3]);) {
                c[a] += b
            }
            c[a] -= b
        };
    f(e, d, 0, 1);
    f(e, d, 1, 1);
    f(e, d, 2, 10000);
    f(e, d, 2, 1000);
    f(e, d, 2, 100);
    f(e, d, 2, 10);
    f(e, d, 2, 1);
    f(e, d, 3, 1);
    return d
});
mejs.MediaFeatures = {
    init: function () {
        var h = this,
            f = document,
            m = mejs.PluginDetector.nav,
            l = mejs.PluginDetector.ua.toLowerCase(),
            k, j = ["source", "track", "audio", "video"];
        h.isiPad = l.match(/ipad/i) !== null;
        h.isiPhone = l.match(/iphone/i) !== null;
        h.isiOS = h.isiPhone || h.isiPad;
        h.isAndroid = l.match(/android/i) !== null;
        h.isBustedAndroid = l.match(/android 2\.[12]/) !== null;
        h.isIE = m.appName.toLowerCase().indexOf("microsoft") != -1;
        h.isChrome = l.match(/chrome/gi) !== null;
        h.isFirefox = l.match(/firefox/gi) !== null;
        h.isWebkit = l.match(/webkit/gi) !== null;
        h.isGecko = l.match(/gecko/gi) !== null && !h.isWebkit;
        h.isOpera = l.match(/opera/gi) !== null;
        h.hasTouch = "ontouchstart" in window;
        h.svg = !! document.createElementNS && !! document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (m = 0; m < j.length; m++) {
            k = document.createElement(j[m])
        }
        h.supportsMediaTag = typeof k.canPlayType !== "undefined" || h.isBustedAndroid;
        h.hasSemiNativeFullScreen = typeof k.webkitEnterFullscreen !== "undefined";
        h.hasWebkitNativeFullScreen = typeof k.webkitRequestFullScreen !== "undefined";
        h.hasMozNativeFullScreen = typeof k.mozRequestFullScreen !== "undefined";
        h.hasTrueNativeFullScreen = h.hasWebkitNativeFullScreen || h.hasMozNativeFullScreen;
        h.nativeFullScreenEnabled = h.hasTrueNativeFullScreen;
        if (h.hasMozNativeFullScreen) {
            h.nativeFullScreenEnabled = k.mozFullScreenEnabled
        }
        if (this.isChrome) {
            h.hasSemiNativeFullScreen = false
        }
        if (h.hasTrueNativeFullScreen) {
            h.fullScreenEventName = h.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange";
            h.isFullScreen = function () {
                if (k.mozRequestFullScreen) {
                    return f.mozFullScreen
                } else {
                    if (k.webkitRequestFullScreen) {
                        return f.webkitIsFullScreen
                    }
                }
            };
            h.requestFullScreen = function (a) {
                if (h.hasWebkitNativeFullScreen) {
                    a.webkitRequestFullScreen()
                } else {
                    h.hasMozNativeFullScreen && a.mozRequestFullScreen()
                }
            };
            h.cancelFullScreen = function () {
                if (h.hasWebkitNativeFullScreen) {
                    document.webkitCancelFullScreen()
                } else {
                    h.hasMozNativeFullScreen && document.mozCancelFullScreen()
                }
            }
        }
        if (h.hasSemiNativeFullScreen && l.match(/mac os x 10_5/i)) {
            h.hasNativeFullScreen = false;
            h.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function (b) {
        this.currentTime = b
    },
    setMuted: function (b) {
        this.muted = b
    },
    setVolume: function (b) {
        this.volume = b
    },
    stop: function () {
        this.pause()
    },
    setSrc: function (e) {
        for (var d = this.getElementsByTagName("source"); d.length > 0;) {
            this.removeChild(d[0])
        }
        if (typeof e == "string") {
            this.src = e
        } else {
            var f;
            for (d = 0; d < e.length; d++) {
                f = e[d];
                if (this.canPlayType(f.type)) {
                    this.src = f.src
                }
            }
        }
    },
    setVideoSize: function (d, c) {
        this.width = d;
        this.height = c
    }
};
mejs.PluginMediaElement = function (e, d, f) {
    this.id = e;
    this.pluginType = d;
    this.src = f;
    this.events = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    tagName: "",
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function () {
        if (this.pluginApi != null) {
            this.pluginType != "youtube" && this.pluginApi.loadMedia();
            this.paused = false
        }
    },
    pause: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function (g) {
        var f, k, j, h = mejs.plugins[this.pluginType];
        for (f = 0; f < h.length; f++) {
            j = h[f];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, j.version)) {
                for (k = 0; k < j.types.length; k++) {
                    if (g == j.types[k]) {
                        return true
                    }
                }
            }
        }
        return false
    },
    positionFullscreenButton: function (e, d, f) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(e, d, f)
    },
    hideFullscreenButton: function () {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function (e) {
        if (typeof e == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e));
            this.src = mejs.Utility.absolutizeUrl(e)
        } else {
            var d, f;
            for (d = 0; d < e.length; d++) {
                f = e[d];
                if (this.canPlayType(f.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(f.src));
                    this.src = mejs.Utility.absolutizeUrl(e)
                }
            }
        }
    },
    setCurrentTime: function (b) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.seekTo(b) : this.pluginApi.setCurrentTime(b);
            this.currentTime = b
        }
    },
    setVolume: function (b) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.setVolume(b * 100) : this.pluginApi.setVolume(b);
            this.volume = b
        }
    },
    setMuted: function (b) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                b ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = b;
                this.dispatchEvent("volumechange")
            } else {
                this.pluginApi.setMuted(b)
            }
            this.muted = b
        }
    },
    setVideoSize: function (d, c) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = d + "px";
            this.pluginElement.style.height = c + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(d, c)
    },
    setFullscreen: function (b) {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(b)
    },
    enterFullScreen: function () {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
    },
    exitFullScreen: function () {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(false)
    },
    addEventListener: function (d, c) {
        this.events[d] = this.events[d] || [];
        this.events[d].push(c)
    },
    removeEventListener: function (e, d) {
        if (!e) {
            this.events = {};
            return true
        }
        var f = this.events[e];
        if (!f) {
            return true
        }
        if (!d) {
            this.events[e] = [];
            return true
        }
        for (i = 0; i < f.length; i++) {
            if (f[i] === d) {
                this.events[e].splice(i, 1);
                return true
            }
        }
        return false
    },
    dispatchEvent: function (f) {
        var e, h, g = this.events[f];
        if (g) {
            h = Array.prototype.slice.call(arguments, 1);
            for (e = 0; e < g.length; e++) {
                g[e].apply(null, h)
            }
        }
    },
    attributes: {},
    hasAttribute: function (b) {
        return b in this.attributes
    },
    removeAttribute: function (b) {
        delete this.attributes[b]
    },
    getAttribute: function (b) {
        if (this.hasAttribute(b)) {
            return this.attributes[b]
        }
        return ""
    },
    setAttribute: function (d, c) {
        this.attributes[d] = c
    },
    remove: function () {
        mejs.Utility.removeSwf(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function (e, d, f) {
        this.pluginMediaElements[e] = d;
        this.htmlMediaElements[e] = f
    },
    initPlugin: function (e) {
        var d = this.pluginMediaElements[e],
            f = this.htmlMediaElements[e];
        if (d) {
            switch (d.pluginType) {
                case "flash":
                    d.pluginElement = d.pluginApi = document.getElementById(e);
                    break;
                case "silverlight":
                    d.pluginElement = document.getElementById(d.id);
                    d.pluginApi = d.pluginElement.Content.MediaElementJS
            }
            d.pluginApi != null && d.success && d.success(d, f)
        }
    },
    fireEvent: function (g, f, k) {
        var j, h;
        g = this.pluginMediaElements[g];
        g.ended = false;
        g.paused = true;
        f = {
            type: f,
            target: g
        };
        for (j in k) {
            g[j] = k[j];
            f[j] = k[j]
        }
        h = k.bufferedTime || 0;
        f.target.buffered = f.buffered = {
            start: function () {
                return 0
            },
            end: function () {
                return h
            },
            length: 1
        };
        g.dispatchEvent(f.type, f)
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: false,
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function () {},
    error: function () {}
};
mejs.MediaElement = function (d, c) {
    return mejs.HtmlMediaElementShim.create(d, c)
};
mejs.HtmlMediaElementShim = {
    create: function (w, v) {
        var u = mejs.MediaElementDefaults,
            t = typeof w == "string" ? document.getElementById(w) : w,
            s = t.tagName.toLowerCase(),
            q = s === "audio" || s === "video",
            r = q ? t.getAttribute("src") : t.getAttribute("href");
        s = t.getAttribute("poster");
        var p = t.getAttribute("autoplay"),
            m = t.getAttribute("preload"),
            o = t.getAttribute("controls"),
            n;
        for (n in v) {
            u[n] = v[n]
        }
        r = typeof r == "undefined" || r === null || r == "" ? null : r;
        s = typeof s == "undefined" || s === null ? "" : s;
        m = typeof m == "undefined" || m === null || m === "false" ? "none" : m;
        p = !(typeof p == "undefined" || p === null || p === "false");
        o = !(typeof o == "undefined" || o === null || o === "false");
        n = this.determinePlayback(t, u, mejs.MediaFeatures.supportsMediaTag, q, r);
        n.url = n.url !== null ? mejs.Utility.absolutizeUrl(n.url) : "";
        if (n.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                t.src = n.url;
                t.addEventListener("click", function () {
                    t.play()
                }, false)
            }
            return this.updateNative(n, u, p, m)
        } else {
            if (n.method !== "") {
                return this.createPlugin(n, u, s, p, m, o)
            } else {
                this.createErrorMessage(n, u, s);
                return this
            }
        }
    },
    determinePlayback: function (w, v, u, t, s) {
        var q = [],
            r, p, m, o = {
                method: "",
                url: "",
                htmlMediaElement: w,
                isVideo: w.tagName.toLowerCase() != "audio"
            }, n;
        if (typeof v.type != "undefined" && v.type !== "") {
            if (typeof v.type == "string") {
                q.push({
                    type: v.type,
                    url: s
                })
            } else {
                for (r = 0; r < v.type.length; r++) {
                    q.push({
                        type: v.type[r],
                        url: s
                    })
                }
            }
        } else {
            if (s !== null) {
                m = this.formatType(s, w.getAttribute("type"));
                q.push({
                    type: m,
                    url: s
                })
            } else {
                for (r = 0; r < w.childNodes.length; r++) {
                    p = w.childNodes[r];
                    if (p.nodeType == 1 && p.tagName.toLowerCase() == "source") {
                        s = p.getAttribute("src");
                        m = this.formatType(s, p.getAttribute("type"));
                        p = p.getAttribute("media");
                        if (!p || !window.matchMedia || window.matchMedia && window.matchMedia(p).matches) {
                            q.push({
                                type: m,
                                url: s
                            })
                        }
                    }
                }
            }
        } if (!t && q.length > 0 && q[0].url !== null && this.getTypeFromFile(q[0].url).indexOf("audio") > -1) {
            o.isVideo = false
        }
        if (mejs.MediaFeatures.isBustedAndroid) {
            w.canPlayType = function (a) {
                return a.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
            }
        }
        if (u && (v.mode === "auto" || v.mode === "auto_plugin" || v.mode === "native")) {
            if (!t) {
                r = document.createElement(o.isVideo ? "video" : "audio");
                w.parentNode.insertBefore(r, w);
                w.style.display = "none";
                o.htmlMediaElement = w = r
            }
            for (r = 0; r < q.length; r++) {
                if (w.canPlayType(q[r].type).replace(/no/, "") !== "" || w.canPlayType(q[r].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                    o.method = "native";
                    o.url = q[r].url;
                    break
                }
            }
            if (o.method === "native") {
                if (o.url !== null) {
                    w.src = o.url
                }
                if (v.mode !== "auto_plugin") {
                    return o
                }
            }
        }
        if (v.mode === "auto" || v.mode === "auto_plugin" || v.mode === "shim") {
            for (r = 0; r < q.length; r++) {
                m = q[r].type;
                for (w = 0; w < v.plugins.length; w++) {
                    s = v.plugins[w];
                    p = mejs.plugins[s];
                    for (u = 0; u < p.length; u++) {
                        n = p[u];
                        if (n.version == null || mejs.PluginDetector.hasPluginVersion(s, n.version)) {
                            for (t = 0; t < n.types.length; t++) {
                                if (m == n.types[t]) {
                                    o.method = s;
                                    o.url = q[r].url;
                                    return o
                                }
                            }
                        }
                    }
                }
            }
        }
        if (v.mode === "auto_plugin" && o.method === "native") {
            return o
        }
        if (o.method === "" && q.length > 0) {
            o.url = q[0].url
        }
        return o
    },
    formatType: function (d, c) {
        return d && !c ? this.getTypeFromFile(d) : c && ~c.indexOf(";") ? c.substr(0, c.indexOf(";")) : c
    },
    getTypeFromFile: function (b) {
        b = b.split("?")[0];
        b = b.substring(b.lastIndexOf(".") + 1);
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b) ? "video" : "audio") + "/" + this.getTypeFromExtension(b)
    },
    getTypeFromExtension: function (b) {
        switch (b) {
            case "mp4":
            case "m4v":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return b
        }
    },
    createErrorMessage: function (h, f, m) {
        var l = h.htmlMediaElement,
            k = document.createElement("div");
        k.className = "me-cannotplay";
        try {
            k.style.width = l.width + "px";
            k.style.height = l.height + "px"
        } catch (j) {}
        k.innerHTML = m !== "" ? '<a href="' + h.url + '"><img src="' + m + '" width="100%" height="100%" /></a>' : '<a href="' + h.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>";
        l.parentNode.insertBefore(k, l);
        l.style.display = "none";
        f.error(l)
    },
    createPlugin: function (A, z, y, x, w, u) {
        y = A.htmlMediaElement;
        var v = 1,
            t = 1,
            q = "me_" + A.method + "_" + mejs.meIndex++,
            s = new mejs.PluginMediaElement(q, A.method, A.url),
            r = document.createElement("div"),
            p;
        s.tagName = y.tagName;
        for (p = 0; p < y.attributes.length; p++) {
            var o = y.attributes[p];
            o.specified == true && s.setAttribute(o.name, o.value)
        }
        for (p = y.parentNode; p !== null && p.tagName.toLowerCase() != "body";) {
            if (p.parentNode.tagName.toLowerCase() == "p") {
                p.parentNode.parentNode.insertBefore(p, p.parentNode);
                break
            }
            p = p.parentNode
        }
        if (A.isVideo) {
            v = z.videoWidth > 0 ? z.videoWidth : y.getAttribute("width") !== null ? y.getAttribute("width") : z.defaultVideoWidth;
            t = z.videoHeight > 0 ? z.videoHeight : y.getAttribute("height") !== null ? y.getAttribute("height") : z.defaultVideoHeight;
            v = mejs.Utility.encodeUrl(v);
            t = mejs.Utility.encodeUrl(t)
        } else {
            if (z.enablePluginDebug) {
                v = 320;
                t = 240
            }
        }
        s.success = z.success;
        mejs.MediaPluginBridge.registerPluginElement(q, s, y);
        r.className = "me-plugin";
        r.id = q + "_container";
        A.isVideo ? y.parentNode.insertBefore(r, y) : document.body.insertBefore(r, document.body.childNodes[0]);
        x = ["id=" + q, "isvideo=" + (A.isVideo ? "true" : "false"), "autoplay=" + (x ? "true" : "false"), "preload=" + w, "width=" + v, "startvolume=" + z.startVolume, "timerrate=" + z.timerRate, "flashstreamer=" + z.flashStreamer, "height=" + t];
        if (A.url !== null) {
            A.method == "flash" ? x.push("file=" + mejs.Utility.encodeUrl(A.url)) : x.push("file=" + A.url)
        }
        z.enablePluginDebug && x.push("debug=true");
        z.enablePluginSmoothing && x.push("smoothing=true");
        u && x.push("controls=true");
        if (z.pluginVars) {
            x = x.concat(z.pluginVars)
        }
        switch (A.method) {
            case "silverlight":
                r.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + q + '" name="' + q + '" width="' + v + '" height="' + t + '"><param name="initParams" value="' + x.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + z.pluginPath + z.silverlightName + '" /></object>';
                break;
            case "flash":
                if (mejs.MediaFeatures.isIE) {
                    A = document.createElement("div");
                    r.appendChild(A);
                    A.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + q + '" width="' + v + '" height="' + t + '"><param name="movie" value="' + z.pluginPath + z.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + x.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
                } else {
                    r.innerHTML = '<embed id="' + q + '" name="' + q + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + z.pluginPath + z.flashName + '" flashvars="' + x.join("&") + '" width="' + v + '" height="' + t + '"></embed>'
                }
                break;
            case "youtube":
                z = A.url.substr(A.url.lastIndexOf("=") + 1);
                youtubeSettings = {
                    container: r,
                    containerId: r.id,
                    pluginMediaElement: s,
                    pluginId: q,
                    videoId: z,
                    height: t,
                    width: v
                };
                mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                s.vimeoid = A.url.substr(A.url.lastIndexOf("/") + 1);
                r.innerHTML = '<iframe src="http://player.vimeo.com/video/' + s.vimeoid + '?portrait=0&byline=0&title=0" width="' + v + '" height="' + t + '" frameborder="0"></iframe>'
        }
        y.style.display = "none";
        return s
    },
    updateNative: function (f, e) {
        var h = f.htmlMediaElement,
            g;
        for (g in mejs.HtmlMediaElement) {
            h[g] = mejs.HtmlMediaElement[g]
        }
        e.success(h, h);
        return h
    }
};
mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function () {
        if (!this.isIframeStarted) {
            var d = document.createElement("script");
            d.src = "http://www.youtube.com/player_api";
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(d, c);
            this.isIframeStarted = true
        }
    },
    iframeQueue: [],
    enqueueIframe: function (b) {
        if (this.isLoaded) {
            this.createIframe(b)
        } else {
            this.loadIframeApi();
            this.iframeQueue.push(b)
        }
    },
    createIframe: function (e) {
        var d = e.pluginMediaElement,
            f = new YT.Player(e.containerId, {
                height: e.height,
                width: e.width,
                videoId: e.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function () {
                        e.pluginMediaElement.pluginApi = f;
                        mejs.MediaPluginBridge.initPlugin(e.pluginId);
                        setInterval(function () {
                            mejs.YouTubeApi.createEvent(f, d, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function (a) {
                        mejs.YouTubeApi.handleStateChange(a.data, f, d)
                    }
                }
            })
    },
    createEvent: function (f, e, h) {
        h = {
            type: h,
            target: e
        };
        if (f && f.getDuration) {
            e.currentTime = h.currentTime = f.getCurrentTime();
            e.duration = h.duration = f.getDuration();
            h.paused = e.paused;
            h.ended = e.ended;
            h.muted = f.isMuted();
            h.volume = f.getVolume() / 100;
            h.bytesTotal = f.getVideoBytesTotal();
            h.bufferedBytes = f.getVideoBytesLoaded();
            var g = h.bufferedBytes / h.bytesTotal * h.duration;
            h.target.buffered = h.buffered = {
                start: function () {
                    return 0
                },
                end: function () {
                    return g
                },
                length: 1
            }
        }
        e.dispatchEvent(h.type, h)
    },
    iFrameReady: function () {
        for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) {
            this.createIframe(this.iframeQueue.pop())
        }
    },
    flashPlayers: {},
    createFlash: function (e) {
        this.flashPlayers[e.pluginId] = e;
        var d, f = "http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            d = document.createElement("div");
            e.container.appendChild(d);
            d.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '"><param name="movie" value="' + f + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else {
            e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + f + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; "><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
        }
    },
    flashReady: function (f) {
        var e = this.flashPlayers[f],
            h = document.getElementById(f),
            g = e.pluginMediaElement;
        g.pluginApi = g.pluginElement = h;
        mejs.MediaPluginBridge.initPlugin(f);
        h.cueVideoById(e.videoId);
        f = e.containerId + "_callback";
        window[f] = function (a) {
            mejs.YouTubeApi.handleStateChange(a, h, g)
        };
        h.addEventListener("onStateChange", f);
        setInterval(function () {
            mejs.YouTubeApi.createEvent(h, g, "timeupdate")
        }, 250)
    },
    handleStateChange: function (e, d, f) {
        switch (e) {
            case -1:
                f.paused = true;
                f.ended = true;
                mejs.YouTubeApi.createEvent(d, f, "loadedmetadata");
                break;
            case 0:
                f.paused = false;
                f.ended = true;
                mejs.YouTubeApi.createEvent(d, f, "ended");
                break;
            case 1:
                f.paused = false;
                f.ended = false;
                mejs.YouTubeApi.createEvent(d, f, "play");
                mejs.YouTubeApi.createEvent(d, f, "playing");
                break;
            case 2:
                f.paused = true;
                f.ended = false;
                mejs.YouTubeApi.createEvent(d, f, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(d, f, "progress")
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}
function onYouTubePlayerReady(b) {
    mejs.YouTubeApi.flashReady(b)
}
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
(function (f, e, h) {
    var g = {
        locale: {
            strings: {}
        },
        methods: {}
    };
    g.locale.getLanguage = function () {
        return {
            language: navigator.language
        }
    };
    g.locale.INIT_LANGUAGE = g.locale.getLanguage();
    g.methods.checkPlain = function (d) {
        var b, c, a = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
        d = String(d);
        for (b in a) {
            if (a.hasOwnProperty(b)) {
                c = RegExp(b, "g");
                d = d.replace(c, a[b])
            }
        }
        return d
    };
    g.methods.formatString = function (c, a) {
        for (var b in a) {
            switch (b.charAt(0)) {
                case "@":
                    a[b] = g.methods.checkPlain(a[b]);
                    break;
                case "!":
                    break;
                default:
                    a[b] = '<em class="placeholder">' + g.methods.checkPlain(a[b]) + "</em>"
            }
            c = c.replace(b, a[b])
        }
        return c
    };
    g.methods.t = function (c, a, b) {
        if (g.locale.strings && g.locale.strings[b.context] && g.locale.strings[b.context][c]) {
            c = g.locale.strings[b.context][c]
        }
        if (a) {
            c = g.methods.formatString(c, a)
        }
        return c
    };
    g.t = function (d, b, c) {
        if (typeof d === "string" && d.length > 0) {
            var a = g.locale.getLanguage();
            c = c || {
                context: a.language
            };
            return g.methods.t(d, b, c)
        } else {
            throw {
                name: "InvalidArgumentException",
                message: "First argument is either not a string or empty."
            }
        }
    };
    h.i18n = g
})(jQuery, document, mejs);
(function (b) {
    b.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus"
    }
})(mejs.i18n.locale.strings);
/*
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2012, John Dyer (http://j.hn/)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
if (typeof jQuery != "undefined") {
    mejs.$ = jQuery
} else {
    if (typeof ender != "undefined") {
        mejs.$ = ender
    }
}(function (a) {
    mejs.MepDefaults = {
        poster: "",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function (b) {
            return b.duration * 0.05
        },
        defaultSeekForwardInterval: function (b) {
            return b.duration * 0.05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
                keys: [32, 179],
                action: function (d, c) {
                    c.paused || c.ended ? c.play() : c.pause()
                }
            }, {
                keys: [38],
                action: function (d, c) {
                    c.setVolume(Math.min(c.volume + 0.1, 1))
                }
            }, {
                keys: [40],
                action: function (d, c) {
                    c.setVolume(Math.max(c.volume - 0.1, 0))
                }
            }, {
                keys: [37, 227],
                action: function (e, d) {
                    if (!isNaN(d.duration) && d.duration > 0) {
                        if (e.isVideo) {
                            e.showControls();
                            e.startControlsTimer()
                        }
                        var f = Math.max(d.currentTime - e.options.defaultSeekBackwardInterval(d), 0);
                        d.setCurrentTime(f)
                    }
                }
            }, {
                keys: [39, 228],
                action: function (e, d) {
                    if (!isNaN(d.duration) && d.duration > 0) {
                        if (e.isVideo) {
                            e.showControls();
                            e.startControlsTimer()
                        }
                        var f = Math.min(d.currentTime + e.options.defaultSeekForwardInterval(d), d.duration);
                        d.setCurrentTime(f)
                    }
                }
            }, {
                keys: [70],
                action: function (b) {
                    if (typeof b.enterFullScreen != "undefined") {
                        b.isFullScreen ? b.exitFullScreen() : b.enterFullScreen()
                    }
                }
            }
        ]
    };
    mejs.mepIndex = 0;
    mejs.players = [];
    mejs.MediaElementPlayer = function (d, c) {
        if (!(this instanceof mejs.MediaElementPlayer)) {
            return new mejs.MediaElementPlayer(d, c)
        }
        this.$media = this.$node = a(d);
        this.node = this.media = this.$media[0];
        if (typeof this.node.player != "undefined") {
            return this.node.player
        } else {
            this.node.player = this
        } if (typeof c == "undefined") {
            c = this.$node.data("mejsoptions")
        }
        this.options = a.extend({}, mejs.MepDefaults, c);
        mejs.players.push(this);
        this.init();
        return this
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function () {
            var f = this,
                d = mejs.MediaFeatures,
                h = a.extend(true, {}, f.options, {
                    success: function (c, b) {
                        f.meReady(c, b)
                    },
                    error: function (b) {
                        f.handleError(b)
                    }
                }),
                g = f.media.tagName.toLowerCase();
            f.isDynamic = g !== "audio" && g !== "video";
            f.isVideo = f.isDynamic ? f.options.isVideo : g !== "audio" && f.options.isVideo;
            if (d.isiPad && f.options.iPadUseNativeControls || d.isiPhone && f.options.iPhoneUseNativeControls) {
                f.$media.attr("controls", "controls");
                if (d.isiPad && f.media.getAttribute("autoplay") !== null) {
                    f.media.load();
                    f.media.play()
                }
            } else {
                if (!(d.isAndroid && f.AndroidUseNativeControls)) {
                    f.$media.removeAttr("controls");
                    f.id = "mep_" + mejs.mepIndex++;
                    f.container = a('<div id="' + f.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(f.$media[0].className).insertBefore(f.$media);
                    f.container.addClass((d.isAndroid ? "mejs-android " : "") + (d.isiOS ? "mejs-ios " : "") + (d.isiPad ? "mejs-ipad " : "") + (d.isiPhone ? "mejs-iphone " : "") + (f.isVideo ? "mejs-video " : "mejs-audio "));
                    if (d.isiOS) {
                        d = f.$media.clone();
                        f.container.find(".mejs-mediaelement").append(d);
                        f.$media.remove();
                        f.$node = f.$media = d;
                        f.node = f.media = d[0]
                    } else {
                        f.container.find(".mejs-mediaelement").append(f.$media)
                    }
                    f.controls = f.container.find(".mejs-controls");
                    f.layers = f.container.find(".mejs-layers");
                    d = f.isVideo ? "video" : "audio";
                    g = d.substring(0, 1).toUpperCase() + d.substring(1);
                    f.width = f.options[d + "Width"] > 0 || f.options[d + "Width"].toString().indexOf("%") > -1 ? f.options[d + "Width"] : f.media.style.width !== "" && f.media.style.width !== null ? f.media.style.width : f.media.getAttribute("width") !== null ? f.$media.attr("width") : f.options["default" + g + "Width"];
                    f.height = f.options[d + "Height"] > 0 || f.options[d + "Height"].toString().indexOf("%") > -1 ? f.options[d + "Height"] : f.media.style.height !== "" && f.media.style.height !== null ? f.media.style.height : f.$media[0].getAttribute("height") !== null ? f.$media.attr("height") : f.options["default" + g + "Height"];
                    f.setPlayerSize(f.width, f.height);
                    h.pluginWidth = f.height;
                    h.pluginHeight = f.width
                }
            }
            mejs.MediaElement(f.$media[0], h)
        },
        showControls: function (d) {
            var c = this;
            d = typeof d == "undefined" || d;
            if (!c.controlsAreVisible) {
                if (d) {
                    c.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                        c.controlsAreVisible = true
                    });
                    c.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                        c.controlsAreVisible = true
                    })
                } else {
                    c.controls.css("visibility", "visible").css("display", "block");
                    c.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                    c.controlsAreVisible = true
                }
                c.setControlsSize()
            }
        },
        hideControls: function (d) {
            var c = this;
            d = typeof d == "undefined" || d;
            if (c.controlsAreVisible) {
                if (d) {
                    c.controls.stop(true, true).fadeOut(200, function () {
                        a(this).css("visibility", "hidden").css("display", "block");
                        c.controlsAreVisible = false
                    });
                    c.container.find(".mejs-control").stop(true, true).fadeOut(200, function () {
                        a(this).css("visibility", "hidden").css("display", "block")
                    })
                } else {
                    c.controls.css("visibility", "hidden").css("display", "block");
                    c.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                    c.controlsAreVisible = false
                }
            }
        },
        controlsTimer: null,
        startControlsTimer: function (d) {
            var c = this;
            d = typeof d != "undefined" ? d : 1500;
            c.killControlsTimer("start");
            c.controlsTimer = setTimeout(function () {
                c.hideControls();
                c.killControlsTimer("hide")
            }, d)
        },
        killControlsTimer: function () {
            if (this.controlsTimer !== null) {
                clearTimeout(this.controlsTimer);
                delete this.controlsTimer;
                this.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function () {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function () {
            this.showControls(false);
            this.controlsEnabled = true
        },
        meReady: function (h, f) {
            var o = this,
                m = mejs.MediaFeatures,
                n = f.getAttribute("autoplay");
            n = !(typeof n == "undefined" || n === null || n === "false");
            var l;
            if (!o.created) {
                o.created = true;
                o.media = h;
                o.domNode = f;
                if (!(m.isAndroid && o.options.AndroidUseNativeControls) && !(m.isiPad && o.options.iPadUseNativeControls) && !(m.isiPhone && o.options.iPhoneUseNativeControls)) {
                    o.buildposter(o, o.controls, o.layers, o.media);
                    o.buildkeyboard(o, o.controls, o.layers, o.media);
                    o.buildoverlays(o, o.controls, o.layers, o.media);
                    o.findTracks();
                    for (l in o.options.features) {
                        m = o.options.features[l];
                        if (o["build" + m]) {
                            try {
                                o["build" + m](o, o.controls, o.layers, o.media)
                            } catch (j) {}
                        }
                    }
                    o.container.trigger("controlsready");
                    o.setPlayerSize(o.width, o.height);
                    o.setControlsSize();
                    if (o.isVideo) {
                        if (mejs.MediaFeatures.hasTouch) {
                            o.$media.bind("touchstart", function () {
                                if (o.controlsAreVisible) {
                                    o.hideControls(false)
                                } else {
                                    o.controlsEnabled && o.showControls(false)
                                }
                            })
                        } else {
                            (o.media.pluginType == "native" ? o.$media : a(o.media.pluginElement)).click(function () {
                                h.paused ? h.play() : h.pause()
                            });
                            o.container.bind("mouseenter mouseover", function () {
                                if (o.controlsEnabled) {
                                    if (!o.options.alwaysShowControls) {
                                        o.killControlsTimer("enter");
                                        o.showControls();
                                        o.startControlsTimer(2500)
                                    }
                                }
                            }).bind("mousemove", function () {
                                if (o.controlsEnabled) {
                                    o.controlsAreVisible || o.showControls();
                                    o.options.alwaysShowControls || o.startControlsTimer(2500)
                                }
                            }).bind("mouseleave", function () {
                                o.controlsEnabled && !o.media.paused && !o.options.alwaysShowControls && o.startControlsTimer(1000)
                            })
                        }
                        n && !o.options.alwaysShowControls && o.hideControls();
                        o.options.enableAutosize && o.media.addEventListener("loadedmetadata", function (b) {
                            if (o.options.videoHeight <= 0 && o.domNode.getAttribute("height") === null && !isNaN(b.target.videoHeight)) {
                                o.setPlayerSize(b.target.videoWidth, b.target.videoHeight);
                                o.setControlsSize();
                                o.media.setVideoSize(b.target.videoWidth, b.target.videoHeight)
                            }
                        }, false)
                    }
                    h.addEventListener("play", function () {
                        for (var b = 0, c = mejs.players.length; b < c; b++) {
                            var d = mejs.players[b];
                            d.id != o.id && o.options.pauseOtherPlayers && !d.paused && !d.ended && d.pause();
                            d.hasFocus = false
                        }
                        o.hasFocus = true
                    }, false);
                    o.media.addEventListener("ended", function () {
                        try {
                            o.media.setCurrentTime(0)
                        } catch (b) {}
                        o.media.pause();
                        o.setProgressRail && o.setProgressRail();
                        o.setCurrentRail && o.setCurrentRail();
                        if (o.options.loop) {
                            o.media.play()
                        } else {
                            !o.options.alwaysShowControls && o.controlsEnabled && o.showControls()
                        }
                    }, false);
                    o.media.addEventListener("loadedmetadata", function () {
                        o.updateDuration && o.updateDuration();
                        o.updateCurrent && o.updateCurrent();
                        if (!o.isFullScreen) {
                            o.setPlayerSize(o.width, o.height);
                            o.setControlsSize()
                        }
                    }, false);
                    setTimeout(function () {
                        o.setPlayerSize(o.width, o.height);
                        o.setControlsSize()
                    }, 50);
                    a(window).resize(function () {
                        o.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || o.setPlayerSize(o.width, o.height);
                        o.setControlsSize()
                    });
                    o.media.pluginType == "youtube" && o.container.find(".mejs-overlay-play").hide()
                }
                if (n && h.pluginType == "native") {
                    h.load();
                    h.play()
                }
                if (o.options.success) {
                    typeof o.options.success == "string" ? window[o.options.success](o.media, o.domNode, o) : o.options.success(o.media, o.domNode, o)
                }
            }
        },
        handleError: function (b) {
            this.controls.hide();
            this.options.error && this.options.error(b)
        },
        setPlayerSize: function (g, f) {
            if (typeof g != "undefined") {
                this.width = g
            }
            if (typeof f != "undefined") {
                this.height = f
            }
            if (this.height.toString().indexOf("%") > 0 || this.$node.css("max-width") === "100%") {
                var k = this.isVideo ? this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : this.options.defaultVideoWidth : this.options.defaultAudioWidth,
                    h = this.isVideo ? this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight : this.options.defaultVideoHeight : this.options.defaultAudioHeight,
                    j = this.container.parent().width();
                k = parseInt(j * h / k, 10);
                if (this.container.parent()[0].tagName.toLowerCase() === "body") {
                    j = a(window).width();
                    k = a(window).height()
                }
                if (k != 0) {
                    this.container.width(j).height(k);
                    this.$media.width("100%").height("100%");
                    this.container.find("object, embed, iframe").width("100%").height("100%");
                    this.isVideo && this.media.setVideoSize && this.media.setVideoSize(j, k);
                    this.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                this.container.width(this.width).height(this.height);
                this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
        },
        setControlsSize: function () {
            var g = 0,
                f = 0,
                k = this.controls.find(".mejs-time-rail"),
                h = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var j = k.siblings();
            if (this.options && !this.options.autosizeProgress) {
                f = parseInt(k.css("width"))
            }
            if (f === 0 || !f) {
                j.each(function () {
                    if (a(this).css("position") != "absolute") {
                        g += a(this).outerWidth(true)
                    }
                });
                f = this.controls.width() - g - (k.outerWidth(true) - k.width())
            }
            k.width(f);
            h.width(f - (h.outerWidth(true) - h.width()));
            this.setProgressRail && this.setProgressRail();
            this.setCurrentRail && this.setCurrentRail()
        },
        buildposter: function (g, f, k, h) {
            var j = a('<div class="mejs-poster mejs-layer"></div>').appendTo(k);
            f = g.$media.attr("poster");
            if (g.options.poster !== "") {
                f = g.options.poster
            }
            f !== "" && f != null ? this.setPoster(f) : j.hide();
            h.addEventListener("play", function () {
                j.hide()
            }, false)
        },
        setPoster: function (e) {
            var d = this.container.find(".mejs-poster"),
                f = d.find("img");
            if (f.length == 0) {
                f = a('<img width="100%" height="100%" />').appendTo(d)
            }
            f.attr("src", e)
        },
        buildoverlays: function (h, f, o, m) {
            if (h.isVideo) {
                var n = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(o),
                    l = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(o),
                    j = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(o).click(function () {
                        m.paused ? m.play() : m.pause()
                    });
                m.addEventListener("play", function () {
                    j.hide();
                    n.hide();
                    f.find(".mejs-time-buffering").hide();
                    l.hide()
                }, false);
                m.addEventListener("playing", function () {
                    j.hide();
                    n.hide();
                    f.find(".mejs-time-buffering").hide();
                    l.hide()
                }, false);
                m.addEventListener("seeking", function () {
                    n.show();
                    f.find(".mejs-time-buffering").show()
                }, false);
                m.addEventListener("seeked", function () {
                    n.hide();
                    f.find(".mejs-time-buffering").hide()
                }, false);
                m.addEventListener("pause", function () {
                    mejs.MediaFeatures.isiPhone || j.show()
                }, false);
                m.addEventListener("waiting", function () {
                    n.show();
                    f.find(".mejs-time-buffering").show()
                }, false);
                m.addEventListener("loadeddata", function () {
                    n.show();
                    f.find(".mejs-time-buffering").show()
                }, false);
                m.addEventListener("canplay", function () {
                    n.hide();
                    f.find(".mejs-time-buffering").hide()
                }, false);
                m.addEventListener("error", function () {
                    n.hide();
                    f.find(".mejs-time-buffering").hide();
                    l.show();
                    l.find("mejs-overlay-error").html("Error loading this resource")
                }, false)
            }
        },
        buildkeyboard: function (f, d, h, g) {
            a(document).keydown(function (l) {
                if (f.hasFocus && f.options.enableKeyboard) {
                    for (var e = 0, b = f.options.keyActions.length; e < b; e++) {
                        for (var c = f.options.keyActions[e], j = 0, m = c.keys.length; j < m; j++) {
                            if (l.keyCode == c.keys[j]) {
                                l.preventDefault();
                                c.action(f, g, l.keyCode);
                                return false
                            }
                        }
                    }
                }
                return true
            });
            a(document).click(function (b) {
                if (a(b.target).closest(".mejs-container").length == 0) {
                    f.hasFocus = false
                }
            })
        },
        findTracks: function () {
            var d = this,
                c = d.$media.find("track");
            d.tracks = [];
            c.each(function (f, b) {
                b = a(b);
                d.tracks.push({
                    srclang: b.attr("srclang").toLowerCase(),
                    src: b.attr("src"),
                    kind: b.attr("kind"),
                    label: b.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function (b) {
            this.container[0].className = "mejs-container " + b;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize()
        },
        play: function () {
            this.media.play()
        },
        pause: function () {
            this.media.pause()
        },
        load: function () {
            this.media.load()
        },
        setMuted: function (b) {
            this.media.setMuted(b)
        },
        setCurrentTime: function (b) {
            this.media.setCurrentTime(b)
        },
        getCurrentTime: function () {
            return this.media.currentTime
        },
        setVolume: function (b) {
            this.media.setVolume(b)
        },
        getVolume: function () {
            return this.media.volume
        },
        setSrc: function (b) {
            this.media.setSrc(b)
        },
        remove: function () {
            if (this.media.pluginType === "flash") {
                this.media.remove()
            } else {
                this.media.pluginType === "native" && this.$media.prop("controls", true)
            }
            this.isDynamic || this.$node.insertBefore(this.container);
            this.container.remove()
        }
    };
    if (typeof jQuery != "undefined") {
        jQuery.fn.mediaelementplayer = function (b) {
            return this.each(function () {
                new mejs.MediaElementPlayer(this, b)
            })
        }
    }
    a(document).ready(function () {
        a(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        playpauseText: "Play/Pause"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (g, f, k, h) {
            var j = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '"></button></div>').appendTo(f).click(function (b) {
                b.preventDefault();
                h.paused ? h.play() : h.pause();
                return false
            });
            h.addEventListener("play", function () {
                j.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            h.addEventListener("playing", function () {
                j.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            h.addEventListener("pause", function () {
                j.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            h.addEventListener("paused", function () {
                j.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildstop: function (f, d, h, g) {
            a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '"></button></div>').appendTo(d).click(function () {
                g.paused || g.pause();
                if (g.currentTime > 0) {
                    g.setCurrentTime(0);
                    d.find(".mejs-time-current").width("0px");
                    d.find(".mejs-time-handle").css("left", "0px");
                    d.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    d.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    h.find(".mejs-poster").show()
                }
            })
        }
    })
})(mejs.$);
(function (a) {
    a.extend(MediaElementPlayer.prototype, {
        buildprogress: function (w, v, u, s) {
            a('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(v);
            v.find(".mejs-time-buffering").hide();
            var t = v.find(".mejs-time-total");
            u = v.find(".mejs-time-loaded");
            var r = v.find(".mejs-time-current"),
                m = v.find(".mejs-time-handle"),
                q = v.find(".mejs-time-float"),
                j = v.find(".mejs-time-float-current"),
                l = function (c) {
                    c = c.pageX;
                    var g = t.offset(),
                        e = t.outerWidth(),
                        d = 0;
                    d = 0;
                    var b = c - g.left;
                    if (c > g.left && c <= e + g.left && s.duration) {
                        d = (c - g.left) / e;
                        d = d <= 0.02 ? 0 : d * s.duration;
                        f && s.setCurrentTime(d);
                        if (!mejs.MediaFeatures.hasTouch) {
                            q.css("left", b);
                            j.html(mejs.Utility.secondsToTimeCode(d));
                            q.show()
                        }
                    }
                }, f = false;
            t.bind("mousedown", function (b) {
                if (b.which === 1) {
                    f = true;
                    l(b);
                    a(document).bind("mousemove.dur", function (c) {
                        l(c)
                    }).bind("mouseup.dur", function () {
                        f = false;
                        q.hide();
                        a(document).unbind(".dur")
                    });
                    return false
                }
            }).bind("mouseenter", function () {
                a(document).bind("mousemove.dur", function (b) {
                    l(b)
                });
                mejs.MediaFeatures.hasTouch || q.show()
            }).bind("mouseleave", function () {
                if (!f) {
                    a(document).unbind(".dur");
                    q.hide()
                }
            });
            s.addEventListener("progress", function (b) {
                w.setProgressRail(b);
                w.setCurrentRail(b)
            }, false);
            s.addEventListener("timeupdate", function (b) {
                w.setProgressRail(b);
                w.setCurrentRail(b)
            }, false);
            this.loaded = u;
            this.total = t;
            this.current = r;
            this.handle = m
        },
        setProgressRail: function (e) {
            var d = e != undefined ? e.target : this.media,
                f = null;
            if (d && d.buffered && d.buffered.length > 0 && d.buffered.end && d.duration) {
                f = d.buffered.end(0) / d.duration
            } else {
                if (d && d.bytesTotal != undefined && d.bytesTotal > 0 && d.bufferedBytes != undefined) {
                    f = d.bufferedBytes / d.bytesTotal
                } else {
                    if (e && e.lengthComputable && e.total != 0) {
                        f = e.loaded / e.total
                    }
                }
            } if (f !== null) {
                f = Math.min(1, Math.max(0, f));
                this.loaded && this.total && this.loaded.width(this.total.width() * f)
            }
        },
        setCurrentRail: function () {
            if (this.media.currentTime != undefined && this.media.duration) {
                if (this.total && this.handle) {
                    var d = this.total.width() * this.media.currentTime / this.media.duration,
                        c = d - this.handle.outerWidth(true) / 2;
                    this.current.width(d);
                    this.handle.css("left", c)
                }
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: " <span> | </span> "
    });
    a.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (f, d, h, g) {
            a('<div class="mejs-time"><span class="mejs-currenttime">' + (f.options.alwaysShowHours ? "00:" : "") + (f.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(d);
            this.currenttime = this.controls.find(".mejs-currenttime");
            g.addEventListener("timeupdate", function () {
                f.updateCurrent()
            }, false)
        },
        buildduration: function (f, d, h, g) {
            if (d.children().last().find(".mejs-currenttime").length > 0) {
                a(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (f.options.alwaysShowHours ? "00:" : "") + (f.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(d.find(".mejs-time"))
            } else {
                d.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (f.options.alwaysShowHours ? "00:" : "") + (f.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(d)
            }
            this.durationD = this.controls.find(".mejs-duration");
            g.addEventListener("timeupdate", function () {
                f.updateDuration()
            }, false)
        },
        updateCurrent: function () {
            if (this.currenttime) {
                this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
            }
        },
        updateDuration: function () {
            if (this.media.duration && this.durationD) {
                this.durationD.html(mejs.Utility.secondsToTimeCode(this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        muteText: "Mute Toggle",
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildvolume: function (B, A, z, x) {
            if (!(mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)) {
                var y = this.isVideo ? this.options.videoVolume : this.options.audioVolume,
                    w = y == "horizontal" ? a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + this.id + '" title="' + this.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(A) : a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + this.id + '" title="' + this.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(A),
                    t = this.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    v = this.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    m = this.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    r = this.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                    j = function (c, b) {
                        if (!t.is(":visible") && typeof b == "undefined") {
                            t.show();
                            j(c, true);
                            t.hide()
                        } else {
                            c = Math.max(0, c);
                            c = Math.min(c, 1);
                            c == 0 ? w.removeClass("mejs-mute").addClass("mejs-unmute") : w.removeClass("mejs-unmute").addClass("mejs-mute");
                            if (y == "vertical") {
                                var g = v.height(),
                                    e = v.position(),
                                    d = g - g * c;
                                r.css("top", e.top + d - r.height() / 2);
                                m.height(g - d);
                                m.css("top", e.top + d)
                            } else {
                                g = v.width();
                                e = v.position();
                                g = g * c;
                                r.css("left", e.left + g - r.width() / 2);
                                m.width(g)
                            }
                        }
                    }, s = function (c) {
                        var b = null,
                            d = v.offset();
                        if (y == "vertical") {
                            b = v.height();
                            parseInt(v.css("top").replace(/px/, ""), 10);
                            b = (b - (c.pageY - d.top)) / b;
                            if (d.top == 0 || d.left == 0) {
                                return
                            }
                        } else {
                            b = v.width();
                            b = (c.pageX - d.left) / b
                        }
                        b = Math.max(0, b);
                        b = Math.min(b, 1);
                        j(b);
                        b == 0 ? x.setMuted(true) : x.setMuted(false);
                        x.setVolume(b)
                    }, f = false,
                    u = false;
                w.hover(function () {
                    t.show();
                    u = true
                }, function () {
                    u = false;
                    !f && y == "vertical" && t.hide()
                });
                t.bind("mouseover", function () {
                    u = true
                }).bind("mousedown", function (b) {
                    s(b);
                    a(document).bind("mousemove.vol", function (c) {
                        s(c)
                    }).bind("mouseup.vol", function () {
                        f = false;
                        a(document).unbind(".vol");
                        !u && y == "vertical" && t.hide()
                    });
                    f = true;
                    return false
                });
                w.find("button").click(function () {
                    x.setMuted(!x.muted)
                });
                x.addEventListener("volumechange", function () {
                    if (!f) {
                        if (x.muted) {
                            j(0);
                            w.removeClass("mejs-mute").addClass("mejs-unmute")
                        } else {
                            j(x.volume);
                            w.removeClass("mejs-unmute").addClass("mejs-mute")
                        }
                    }
                }, false);
                if (this.container.is(":visible")) {
                    j(B.options.startVolume);
                    x.pluginType === "native" && x.setVolume(B.options.startVolume)
                }
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function () {
            return ""
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    });
    a.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        docStyleOverflow: null,
        isInIframe: false,
        buildfullscreen: function (A, z, y, w) {
            if (A.isVideo) {
                A.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    y = null;
                    y = mejs.MediaFeatures.hasMozNativeFullScreen ? a(document) : A.container;
                    y.bind(mejs.MediaFeatures.fullScreenEventName, function () {
                        if (mejs.MediaFeatures.isFullScreen()) {
                            A.isNativeFullScreen = true;
                            A.setControlsSize()
                        } else {
                            A.isNativeFullScreen = false;
                            A.exitFullScreen()
                        }
                    })
                }
                var x = this,
                    v = a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + x.id + '" title="' + x.options.fullscreenText + '"></button></div>').appendTo(z);
                if (x.media.pluginType === "native" || !x.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) {
                    v.click(function () {
                        mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || A.isFullScreen ? A.exitFullScreen() : A.enterFullScreen()
                    })
                } else {
                    var t = null;
                    if (function () {
                        var d = document.createElement("x"),
                            c = document.documentElement,
                            b = window.getComputedStyle;
                        if (!("pointerEvents" in d.style)) {
                            return false
                        }
                        d.style.pointerEvents = "auto";
                        d.style.pointerEvents = "x";
                        c.appendChild(d);
                        b = b && b(d, "").pointerEvents === "auto";
                        c.removeChild(d);
                        return !!b
                    }() && !mejs.MediaFeatures.isOpera) {
                        var u = false,
                            m = function () {
                                if (u) {
                                    r.hide();
                                    j.hide();
                                    s.hide();
                                    v.css("pointer-events", "");
                                    x.controls.css("pointer-events", "");
                                    u = false
                                }
                            }, r = a('<div class="mejs-fullscreen-hover" />').appendTo(x.container).mouseover(m),
                            j = a('<div class="mejs-fullscreen-hover"  />').appendTo(x.container).mouseover(m),
                            s = a('<div class="mejs-fullscreen-hover"  />').appendTo(x.container).mouseover(m),
                            f = function () {
                                var b = {
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                };
                                r.css(b);
                                j.css(b);
                                s.css(b);
                                r.width(x.container.width()).height(x.container.height() - x.controls.height());
                                b = v.offset().left - x.container.offset().left;
                                fullScreenBtnWidth = v.outerWidth(true);
                                j.width(b).height(x.controls.height()).css({
                                    top: x.container.height() - x.controls.height()
                                });
                                s.width(x.container.width() - b - fullScreenBtnWidth).height(x.controls.height()).css({
                                    top: x.container.height() - x.controls.height(),
                                    left: b + fullScreenBtnWidth
                                })
                            };
                        a(document).resize(function () {
                            f()
                        });
                        v.mouseover(function () {
                            if (!x.isFullScreen) {
                                var c = v.offset(),
                                    b = A.container.offset();
                                w.positionFullscreenButton(c.left - b.left, c.top - b.top, false);
                                v.css("pointer-events", "none");
                                x.controls.css("pointer-events", "none");
                                r.show();
                                s.show();
                                j.show();
                                f();
                                u = true
                            }
                        });
                        w.addEventListener("fullscreenchange", function () {
                            m()
                        })
                    } else {
                        v.mouseover(function () {
                            if (t !== null) {
                                clearTimeout(t);
                                delete t
                            }
                            var c = v.offset(),
                                b = A.container.offset();
                            w.positionFullscreenButton(c.left - b.left, c.top - b.top, true)
                        }).mouseout(function () {
                            if (t !== null) {
                                clearTimeout(t);
                                delete t
                            }
                            t = setTimeout(function () {
                                w.hideFullscreenButton()
                            }, 1500)
                        })
                    }
                }
                A.fullscreenBtn = v;
                a(document).bind("keydown", function (b) {
                    if ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || x.isFullScreen) && b.keyCode == 27) {
                        A.exitFullScreen()
                    }
                })
            }
        },
        enterFullScreen: function () {
            var e = this;
            if (!(e.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || e.options.usePluginFullScreen))) {
                docStyleOverflow = document.documentElement.style.overflow;
                document.documentElement.style.overflow = "hidden";
                normalHeight = e.container.height();
                normalWidth = e.container.width();
                if (e.media.pluginType === "native") {
                    if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        mejs.MediaFeatures.requestFullScreen(e.container[0]);
                        e.isInIframe && setTimeout(function f() {
                            if (e.isNativeFullScreen) {
                                a(window).width() !== screen.width ? e.exitFullScreen() : setTimeout(f, 500)
                            }
                        }, 500)
                    } else {
                        if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                            e.media.webkitEnterFullscreen();
                            return
                        }
                    }
                }
                if (e.isInIframe) {
                    var d = e.options.newWindowCallback(this);
                    if (d !== "") {
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                            setTimeout(function () {
                                if (!e.isNativeFullScreen) {
                                    e.pause();
                                    window.open(d, e.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                                }
                            }, 250)
                        } else {
                            e.pause();
                            window.open(d, e.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            return
                        }
                    }
                }
                e.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
                setTimeout(function () {
                    e.container.css({
                        width: "100%",
                        height: "100%"
                    });
                    e.setControlsSize()
                }, 500);
                if (e.pluginType === "native") {
                    e.$media.width("100%").height("100%")
                } else {
                    e.container.find("object, embed, iframe").width("100%").height("100%");
                    e.media.setVideoSize(a(window).width(), a(window).height())
                }
                e.layers.children("div").width("100%").height("100%");
                e.fullscreenBtn && e.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
                e.setControlsSize();
                e.isFullScreen = true
            }
        },
        exitFullScreen: function () {
            if (this.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) {
                this.media.setFullscreen(false)
            } else {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || this.isFullScreen)) {
                    mejs.MediaFeatures.cancelFullScreen()
                }
                document.documentElement.style.overflow = docStyleOverflow;
                this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
                if (this.pluginType === "native") {
                    this.$media.width(normalWidth).height(normalHeight)
                } else {
                    this.container.find("object embed").width(normalWidth).height(normalHeight);
                    this.media.setVideoSize(normalWidth, normalHeight)
                }
                this.layers.children("div").width(normalWidth).height(normalHeight);
                this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
                this.setControlsSize();
                this.isFullScreen = false
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: "Captions/Subtitles"
    });
    a.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function (g, f, k, h) {
            if (g.isVideo) {
                if (g.tracks.length != 0) {
                    var j;
                    g.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(k).hide();
                    g.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>').prependTo(k).hide();
                    g.captionsText = g.captions.find(".mejs-captions-text");
                    g.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + g.id + '_captions" id="' + g.id + '_captions_none" value="none" checked="checked" /><label for="' + g.id + '_captions_none">None</label></li></ul></div></div>').appendTo(f).hover(function () {
                        a(this).find(".mejs-captions-selector").css("visibility", "visible")
                    }, function () {
                        a(this).find(".mejs-captions-selector").css("visibility", "hidden")
                    }).delegate("input[type=radio]", "click", function () {
                        lang = this.value;
                        if (lang == "none") {
                            g.selectedTrack = null
                        } else {
                            for (j = 0; j < g.tracks.length; j++) {
                                if (g.tracks[j].srclang == lang) {
                                    g.selectedTrack = g.tracks[j];
                                    g.captions.attr("lang", g.selectedTrack.srclang);
                                    g.displayCaptions();
                                    break
                                }
                            }
                        }
                    });
                    g.options.alwaysShowControls ? g.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : g.container.bind("mouseenter", function () {
                        g.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                    }).bind("mouseleave", function () {
                        h.paused || g.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                    });
                    g.trackToLoad = -1;
                    g.selectedTrack = null;
                    g.isLoadingTrack = false;
                    for (j = 0; j < g.tracks.length; j++) {
                        g.tracks[j].kind == "subtitles" && g.addTrackButton(g.tracks[j].srclang, g.tracks[j].label)
                    }
                    g.loadNextTrack();
                    h.addEventListener("timeupdate", function () {
                        g.displayCaptions()
                    }, false);
                    h.addEventListener("loadedmetadata", function () {
                        g.displayChapters()
                    }, false);
                    g.container.hover(function () {
                        if (g.hasChapters) {
                            g.chapters.css("visibility", "visible");
                            g.chapters.fadeIn(200).height(g.chapters.find(".mejs-chapter").outerHeight())
                        }
                    }, function () {
                        g.hasChapters && !h.paused && g.chapters.fadeOut(200, function () {
                            a(this).css("visibility", "hidden");
                            a(this).css("display", "block")
                        })
                    });
                    g.node.getAttribute("autoplay") !== null && g.chapters.css("visibility", "hidden")
                }
            }
        },
        loadNextTrack: function () {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
                this.isLoadingTrack = true;
                this.loadTrack(this.trackToLoad)
            } else {
                this.isLoadingTrack = false
            }
        },
        loadTrack: function (e) {
            var d = this,
                f = d.tracks[e];
            a.ajax({
                url: f.src,
                dataType: "text",
                success: function (b) {
                    f.entries = typeof b == "string" && /<tt\s+xml/ig.exec(b) ? mejs.TrackFormatParser.dfxp.parse(b) : mejs.TrackFormatParser.webvvt.parse(b);
                    f.isLoaded = true;
                    d.enableTrackButton(f.srclang, f.label);
                    d.loadNextTrack();
                    f.kind == "chapters" && d.media.duration > 0 && d.drawChapters(f)
                },
                error: function () {
                    d.loadNextTrack()
                }
            })
        },
        enableTrackButton: function (d, c) {
            if (c === "") {
                c = mejs.language.codes[d] || d
            }
            this.captionsButton.find("input[value=" + d + "]").prop("disabled", false).siblings("label").html(c);
            this.options.startLanguage == d && a("#" + this.id + "_captions_" + d).click();
            this.adjustLanguageBox()
        },
        addTrackButton: function (d, c) {
            if (c === "") {
                c = mejs.language.codes[d] || d
            }
            this.captionsButton.find("ul").append(a('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + d + '" value="' + d + '" disabled="disabled" /><label for="' + this.id + "_captions_" + d + '">' + c + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + d + "]").remove()
        },
        adjustLanguageBox: function () {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        displayCaptions: function () {
            if (typeof this.tracks != "undefined") {
                var d, c = this.selectedTrack;
                if (c != null && c.isLoaded) {
                    for (d = 0; d < c.entries.times.length; d++) {
                        if (this.media.currentTime >= c.entries.times[d].start && this.media.currentTime <= c.entries.times[d].stop) {
                            this.captionsText.html(c.entries.text[d]);
                            this.captions.show().height(0);
                            return
                        }
                    }
                }
                this.captions.hide()
            }
        },
        displayChapters: function () {
            var b;
            for (b = 0; b < this.tracks.length; b++) {
                if (this.tracks[b].kind == "chapters" && this.tracks[b].isLoaded) {
                    this.drawChapters(this.tracks[b]);
                    this.hasChapters = true;
                    break
                }
            }
        },
        drawChapters: function (g) {
            var f = this,
                k, h, j = h = 0;
            f.chapters.empty();
            for (k = 0; k < g.entries.times.length; k++) {
                h = g.entries.times[k].stop - g.entries.times[k].start;
                h = Math.floor(h / f.media.duration * 100);
                if (h + j > 100 || k == g.entries.times.length - 1 && h + j < 100) {
                    h = 100 - j
                }
                f.chapters.append(a('<div class="mejs-chapter" rel="' + g.entries.times[k].start + '" style="left: ' + j.toString() + "%;width: " + h.toString() + '%;"><div class="mejs-chapter-block' + (k == g.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + g.entries.text[k] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(g.entries.times[k].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(g.entries.times[k].stop) + "</span></div></div>"));
                j += h
            }
            f.chapters.find("div.mejs-chapter").click(function () {
                f.media.setCurrentTime(parseFloat(a(this).attr("rel")));
                f.media.paused && f.media.play()
            });
            f.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function (g) {
                var f = 0;
                g = mejs.TrackFormatParser.split2(g, /\r?\n/);
                for (var k = {
                    text: [],
                    times: []
                }, h, j; f < g.length; f++) {
                    if (this.pattern_identifier.exec(g[f])) {
                        f++;
                        if ((h = this.pattern_timecode.exec(g[f])) && f < g.length) {
                            f++;
                            j = g[f];
                            for (f++; g[f] !== "" && f < g.length;) {
                                j = j + "\n" + g[f];
                                f++
                            }
                            j = a.trim(j).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                            k.text.push(j);
                            k.times.push({
                                start: mejs.Utility.convertSMPTEtoSeconds(h[1]) == 0 ? 0.2 : mejs.Utility.convertSMPTEtoSeconds(h[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(h[3]),
                                settings: h[5]
                            })
                        }
                    }
                }
                return k
            }
        },
        dfxp: {
            parse: function (h) {
                h = a(h).filter("tt");
                var f = 0;
                f = h.children("div").eq(0);
                var o = f.find("p");
                f = h.find("#" + f.attr("style"));
                var m, n;
                h = {
                    text: [],
                    times: []
                };
                if (f.length) {
                    n = f.removeAttr("id").get(0).attributes;
                    if (n.length) {
                        m = {};
                        for (f = 0; f < n.length; f++) {
                            m[n[f].name.split(":")[1]] = n[f].value
                        }
                    }
                }
                for (f = 0; f < o.length; f++) {
                    var l;
                    n = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    if (o.eq(f).attr("begin")) {
                        n.start = mejs.Utility.convertSMPTEtoSeconds(o.eq(f).attr("begin"))
                    }
                    if (!n.start && o.eq(f - 1).attr("end")) {
                        n.start = mejs.Utility.convertSMPTEtoSeconds(o.eq(f - 1).attr("end"))
                    }
                    if (o.eq(f).attr("end")) {
                        n.stop = mejs.Utility.convertSMPTEtoSeconds(o.eq(f).attr("end"))
                    }
                    if (!n.stop && o.eq(f + 1).attr("begin")) {
                        n.stop = mejs.Utility.convertSMPTEtoSeconds(o.eq(f + 1).attr("begin"))
                    }
                    if (m) {
                        l = "";
                        for (var j in m) {
                            l += j + ":" + m[j] + ";"
                        }
                    }
                    if (l) {
                        n.style = l
                    }
                    if (n.start == 0) {
                        n.start = 0.2
                    }
                    h.times.push(n);
                    n = a.trim(o.eq(f).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                    h.text.push(n);
                    if (h.times.start == 0) {
                        h.times.start = 2
                    }
                }
                return h
            }
        },
        split2: function (d, c) {
            return d.split(c)
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) {
        mejs.TrackFormatParser.split2 = function (g, f) {
            var k = [],
                h = "",
                j;
            for (j = 0; j < g.length; j++) {
                h += g.substring(j, j + 1);
                if (f.test(h)) {
                    k.push(h.replace(f, ""));
                    h = ""
                }
            }
            k.push(h);
            return k
        }
    }
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        contextMenuItems: [{
                render: function (b) {
                    if (typeof b.enterFullScreen == "undefined") {
                        return null
                    }
                    return b.isFullScreen ? "Turn off Fullscreen" : "Go Fullscreen"
                },
                click: function (b) {
                    b.isFullScreen ? b.exitFullScreen() : b.enterFullScreen()
                }
            }, {
                render: function (b) {
                    return b.media.muted ? "Unmute" : "Mute"
                },
                click: function (b) {
                    b.media.muted ? b.setMuted(false) : b.setMuted(true)
                }
            }, {
                isSeparator: true
            }, {
                render: function () {
                    return "Download Video"
                },
                click: function (b) {
                    window.location.href = b.media.currentSrc
                }
            }
        ]
    });
    a.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (b) {
            b.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide();
            b.container.bind("contextmenu", function (c) {
                if (b.isContextMenuEnabled) {
                    c.preventDefault();
                    b.renderContextMenu(c.clientX - 1, c.clientY - 1);
                    return false
                }
            });
            b.container.bind("click", function () {
                b.contextMenu.hide()
            });
            b.contextMenu.bind("mouseleave", function () {
                b.startContextMenuTimer()
            })
        },
        isContextMenuEnabled: true,
        enableContextMenu: function () {
            this.isContextMenuEnabled = true
        },
        disableContextMenu: function () {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function () {
            var b = this;
            b.killContextMenuTimer();
            b.contextMenuTimer = setTimeout(function () {
                b.hideContextMenu();
                b.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function () {
            var b = this.contextMenuTimer;
            if (b != null) {
                clearTimeout(b);
                delete b
            }
        },
        hideContextMenu: function () {
            this.contextMenu.hide()
        },
        renderContextMenu: function (j, f) {
            for (var q = this, o = "", p = q.options.contextMenuItems, n = 0, l = p.length; n < l; n++) {
                if (p[n].isSeparator) {
                    o += '<div class="mejs-contextmenu-separator"></div>'
                } else {
                    var m = p[n].render(q);
                    if (m != null) {
                        o += '<div class="mejs-contextmenu-item" data-itemindex="' + n + '" id="element-' + Math.random() * 1000000 + '">' + m + "</div>"
                    }
                }
            }
            q.contextMenu.empty().append(a(o)).css({
                top: f,
                left: j
            }).show();
            q.contextMenu.find(".mejs-contextmenu-item").each(function () {
                var c = a(this),
                    d = parseInt(c.data("itemindex"), 10),
                    b = q.options.contextMenuItems[d];
                typeof b.show != "undefined" && b.show(c, q);
                c.click(function () {
                    typeof b.click != "undefined" && b.click(q);
                    q.contextMenu.hide()
                })
            });
            setTimeout(function () {
                q.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);
/*
 * The New York Times Multimedia Desk.
 * Namespace: NYTD.NYTMM
 */
window.NYTD = window.NYTD || {};
window.NYTD.NYTMM = window.NYTD.NYTMM || {};
if (jQuery) {
    $j = jQuery.noConflict()
}
window.NYTD.NYTMM.namespace = function (d) {
    var c = d.split("."),
        b = NYTD.NYTMM,
        a;
    if (c[0] === "NYTD" && c[1] === "NYTMM") {
        c = c.slice(2)
    }
    for (a = 0; a < c.length; a += 1) {
        if (typeof b[c[a]] === "undefined") {
            b[c[a]] = {}
        }
        b = b[c[a]]
    }
    return b
};
if (typeof console == "undefined") {
    window.console = {
        log: function () {},
        warn: function () {},
        error: function () {}
    }
}
window.NYTD.NYTMM.debugLevel = 1;
(function (a) {
    a.extend({
        log: function () {
            var b;
            if (arguments.length > 0) {
                b = (arguments.length > 1) ? Array.prototype.join.call(arguments, " ") : arguments[0];
                if (NYTD.NYTMM.debugLevel == 1) {
                    if (window.console) {
                        if (console.dirxml && (typeof HTMLElement !== "undefined" && b instanceof HTMLElement)) {
                            console.dirxml(b)
                        } else {
                            if (window.console && console.log) {
                                console.log(b)
                            }
                        }
                    }
                } else {
                    if (NYTD.NYTMM.debugLevel == 2) {
                        alert(b)
                    }
                }
            }
            return b
        }
    })
})(jQuery || NYTD.jQuery);
(function () {
    NYTD.NYTMM.iOS = false;
    NYTD.NYTMM.iOSInfo = {
        userAgent: null,
        version: null,
        minor: null,
        update: null,
        device: null,
        phone: false,
        tablet: false,
        pixelRatio: 1,
        retina: false
    };
    if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
        NYTD.NYTMM.iOS = true;
        NYTD.NYTMM.iOSInfo.userAgent = navigator.userAgent;
        if (/CPU like Mac OS X/i.test(navigator.userAgent)) {
            NYTD.NYTMM.iOSInfo.version = 1
        } else {
            if (/OS [2-6]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)) {
                var c = /OS ([2-6])_(\d)(?:_(\d))? like Mac OS X/i.exec(navigator.userAgent);
                NYTD.NYTMM.iOSInfo.version = c[1];
                NYTD.NYTMM.iOSInfo.minor = c[2];
                NYTD.NYTMM.iOSInfo.update = c[3]
            }
        }
        var b = /(iPhone|iPod|iPad)/i.exec(navigator.userAgent);
        NYTD.NYTMM.iOSInfo.device = b[0];
        NYTD.NYTMM.iOSInfo.tablet = (NYTD.NYTMM.iOSInfo.device === "iPad");
        NYTD.NYTMM.iOSInfo.phone = (NYTD.NYTMM.iOSInfo.tablet) ? false : true;
        NYTD.NYTMM.iOSInfo.pixelRatio = !! window.devicePixelRatio ? window.devicePixelRatio : 1;
        NYTD.NYTMM.iOSInfo.retina = NYTD.NYTMM.iOSInfo.pixelRatio > 1;
        var a = (NYTD.NYTMM.iOSInfo.phone) ? "phone" : "tablet";
        jQuery("html").addClass("nytmm_iOS");
        jQuery("html").addClass("nytmm_iOS_" + NYTD.NYTMM.iOSInfo.version);
        jQuery("html").addClass("nytmm_iOS_" + a)
    }
})();
NYTD.NYTMM.Avalanche = NYTD.NYTMM.Avalanche || {};
/*
 *  Underscore.js 1.3.3
 * (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
 * Underscore is freely distributable under the MIT license.
 * Portions of Underscore are inspired or borrowed from Prototype,
 * Oliver Steele's Functional, and John Resig's Micro-Templating.
 * For all details and documentation:
 * http://documentcloud.github.com/underscore
 */ (function () {
    function af(b, o, n) {
        if (b === o) {
            return 0 !== b || 1 / b == 1 / o
        }
        if (null == b || null == o) {
            return b === o
        }
        b._chain && (b = b._wrapped);
        o._chain && (o = o._wrapped);
        if (b.isEqual && ar.isFunction(b.isEqual)) {
            return b.isEqual(o)
        }
        if (o.isEqual && ar.isFunction(o.isEqual)) {
            return o.isEqual(b)
        }
        var m = an.call(b);
        if (m != an.call(o)) {
            return !1
        }
        switch (m) {
            case "[object String]":
                return b == "" + o;
            case "[object Number]":
                return b != +b ? o != +o : 0 == b ? 1 / b == 1 / o : b == +o;
            case "[object Date]":
            case "[object Boolean]":
                return +b == +o;
            case "[object RegExp]":
                return b.source == o.source && b.global == o.global && b.multiline == o.multiline && b.ignoreCase == o.ignoreCase
        }
        if ("object" != typeof b || "object" != typeof o) {
            return !1
        }
        for (var l = n.length; l--;) {
            if (n[l] == b) {
                return !0
            }
        }
        n.push(b);
        var l = 0,
            k = !0;
        if ("[object Array]" == m) {
            if (l = b.length, k = l == o.length) {
                for (; l-- && (k = l in b == l in o && af(b[l], o[l], n));) {}
            }
        } else {
            if ("constructor" in b != "constructor" in o || b.constructor != o.constructor) {
                return !1
            }
            for (var j in b) {
                if (ar.has(b, j) && (l++, !(k = ar.has(o, j) && af(b[j], o[j], n)))) {
                    break
                }
            }
            if (k) {
                for (j in o) {
                    if (ar.has(o, j) && !l--) {
                        break
                    }
                }
                k = !l
            }
        }
        n.pop();
        return k
    }
    var ac = this,
        T = ac._,
        ak = {}, ao = Array.prototype,
        aj = Object.prototype,
        aq = ao.slice,
        Q = ao.unshift,
        an = aj.toString,
        g = aj.hasOwnProperty,
        R = ao.forEach,
        h = ao.map,
        ai = ao.reduce,
        ah = ao.reduceRight,
        ae = ao.filter,
        ad = ao.every,
        ab = ao.some,
        ag = ao.indexOf,
        Z = ao.lastIndexOf,
        aj = Array.isArray,
        f = Object.keys,
        aa = Function.prototype.bind,
        ar = function (b) {
            return new am(b)
        };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = ar), exports._ = ar) : ac._ = ar;
    ar.VERSION = "1.3.3";
    var ap = ar.each = ar.forEach = function (b, m, l) {
        if (b != null) {
            if (R && b.forEach === R) {
                b.forEach(m, l)
            } else {
                if (b.length === +b.length) {
                    for (var k = 0, j = b.length; k < j; k++) {
                        if (k in b && m.call(l, b[k], k, b) === ak) {
                            break
                        }
                    }
                } else {
                    for (k in b) {
                        if (ar.has(b, k) && m.call(l, b[k], k, b) === ak) {
                            break
                        }
                    }
                }
            }
        }
    };
    ar.map = ar.collect = function (k, m, j) {
        var l = [];
        if (k == null) {
            return l
        }
        if (h && k.map === h) {
            return k.map(m, j)
        }
        ap(k, function (b, o, n) {
            l[l.length] = m.call(j, b, o, n)
        });
        if (k.length === +k.length) {
            l.length = k.length
        }
        return l
    };
    ar.reduce = ar.foldl = ar.inject = function (b, m, l, k) {
        var j = arguments.length > 2;
        b == null && (b = []);
        if (ai && b.reduce === ai) {
            k && (m = ar.bind(m, k));
            return j ? b.reduce(m, l) : b.reduce(m)
        }
        ap(b, function (o, n, p) {
            if (j) {
                l = m.call(k, l, o, n, p)
            } else {
                l = o;
                j = true
            }
        });
        if (!j) {
            throw new TypeError("Reduce of empty array with no initial value")
        }
        return l
    };
    ar.reduceRight = ar.foldr = function (b, n, m, l) {
        var k = arguments.length > 2;
        b == null && (b = []);
        if (ah && b.reduceRight === ah) {
            l && (n = ar.bind(n, l));
            return k ? b.reduceRight(n, m) : b.reduceRight(n)
        }
        var j = ar.toArray(b).reverse();
        l && !k && (n = ar.bind(n, l));
        return k ? ar.reduce(j, n, m, l) : ar.reduce(j, n)
    };
    ar.find = ar.detect = function (k, m, j) {
        var l;
        X(k, function (b, o, n) {
            if (m.call(j, b, o, n)) {
                l = b;
                return true
            }
        });
        return l
    };
    ar.filter = ar.select = function (k, m, j) {
        var l = [];
        if (k == null) {
            return l
        }
        if (ae && k.filter === ae) {
            return k.filter(m, j)
        }
        ap(k, function (b, o, n) {
            m.call(j, b, o, n) && (l[l.length] = b)
        });
        return l
    };
    ar.reject = function (k, m, j) {
        var l = [];
        if (k == null) {
            return l
        }
        ap(k, function (b, o, n) {
            m.call(j, b, o, n) || (l[l.length] = b)
        });
        return l
    };
    ar.every = ar.all = function (k, m, j) {
        var l = true;
        if (k == null) {
            return l
        }
        if (ad && k.every === ad) {
            return k.every(m, j)
        }
        ap(k, function (b, o, n) {
            if (!(l = l && m.call(j, b, o, n))) {
                return ak
            }
        });
        return !!l
    };
    var X = ar.some = ar.any = function (b, l, k) {
        l || (l = ar.identity);
        var j = false;
        if (b == null) {
            return j
        }
        if (ab && b.some === ab) {
            return b.some(l, k)
        }
        ap(b, function (n, m, o) {
            if (j || (j = l.call(k, n, m, o))) {
                return ak
            }
        });
        return !!j
    };
    ar.include = ar.contains = function (k, l) {
        var j = false;
        if (k == null) {
            return j
        }
        if (ag && k.indexOf === ag) {
            return k.indexOf(l) != -1
        }
        return j = X(k, function (b) {
            return b === l
        })
    };
    ar.invoke = function (b, k) {
        var j = aq.call(arguments, 2);
        return ar.map(b, function (l) {
            return (ar.isFunction(k) ? k || l : l[k]).apply(l, j)
        })
    };
    ar.pluck = function (b, j) {
        return ar.map(b, function (k) {
            return k[j]
        })
    };
    ar.max = function (b, l, k) {
        if (!l && ar.isArray(b) && b[0] === +b[0]) {
            return Math.max.apply(Math, b)
        }
        if (!l && ar.isEmpty(b)) {
            return -Infinity
        }
        var j = {
            computed: -Infinity
        };
        ap(b, function (n, m, o) {
            m = l ? l.call(k, n, m, o) : n;
            m >= j.computed && (j = {
                value: n,
                computed: m
            })
        });
        return j.value
    };
    ar.min = function (b, l, k) {
        if (!l && ar.isArray(b) && b[0] === +b[0]) {
            return Math.min.apply(Math, b)
        }
        if (!l && ar.isEmpty(b)) {
            return Infinity
        }
        var j = {
            computed: Infinity
        };
        ap(b, function (n, m, o) {
            m = l ? l.call(k, n, m, o) : n;
            m < j.computed && (j = {
                value: n,
                computed: m
            })
        });
        return j.value
    };
    ar.shuffle = function (k) {
        var j = [],
            l;
        ap(k, function (b, m) {
            l = Math.floor(Math.random() * (m + 1));
            j[m] = j[l];
            j[l] = b
        });
        return j
    };
    ar.sortBy = function (b, l, k) {
        var j = ar.isFunction(l) ? l : function (m) {
                return m[l]
            };
        return ar.pluck(ar.map(b, function (n, m, o) {
            return {
                value: n,
                criteria: j.call(k, n, m, o)
            }
        }).sort(function (n, m) {
            var p = n.criteria,
                o = m.criteria;
            return p === void 0 ? 1 : o === void 0 ? -1 : p < o ? -1 : p > o ? 1 : 0
        }), "value")
    };
    ar.groupBy = function (b, l) {
        var k = {}, j = ar.isFunction(l) ? l : function (m) {
                return m[l]
            };
        ap(b, function (n, m) {
            var o = j(n, m);
            (k[o] || (k[o] = [])).push(n)
        });
        return k
    };
    ar.sortedIndex = function (b, n, m) {
        m || (m = ar.identity);
        for (var l = 0, k = b.length; l < k;) {
            var j = l + k >> 1;
            m(b[j]) < m(n) ? l = j + 1 : k = j
        }
        return l
    };
    ar.toArray = function (b) {
        return !b ? [] : ar.isArray(b) || ar.isArguments(b) ? aq.call(b) : b.toArray && ar.isFunction(b.toArray) ? b.toArray() : ar.values(b)
    };
    ar.size = function (b) {
        return ar.isArray(b) ? b.length : ar.keys(b).length
    };
    ar.first = ar.head = ar.take = function (k, j, l) {
        return j != null && !l ? aq.call(k, 0, j) : k[0]
    };
    ar.initial = function (k, j, l) {
        return aq.call(k, 0, k.length - (j == null || l ? 1 : j))
    };
    ar.last = function (k, j, l) {
        return j != null && !l ? aq.call(k, Math.max(k.length - j, 0)) : k[k.length - 1]
    };
    ar.rest = ar.tail = function (k, j, l) {
        return aq.call(k, j == null || l ? 1 : j)
    };
    ar.compact = function (b) {
        return ar.filter(b, function (j) {
            return !!j
        })
    };
    ar.flatten = function (b, j) {
        return ar.reduce(b, function (k, l) {
            if (ar.isArray(l)) {
                return k.concat(j ? l : ar.flatten(l))
            }
            k[k.length] = l;
            return k
        }, [])
    };
    ar.without = function (b) {
        return ar.difference(b, aq.call(arguments, 1))
    };
    ar.uniq = ar.unique = function (b, l, k) {
        var k = k ? ar.map(b, k) : b,
            j = [];
        b.length < 3 && (l = true);
        ar.reduce(k, function (o, n, m) {
            if (l ? ar.last(o) !== n || !o.length : !ar.include(o, n)) {
                o.push(n);
                j.push(b[m])
            }
            return o
        }, []);
        return j
    };
    ar.union = function () {
        return ar.uniq(ar.flatten(arguments, true))
    };
    ar.intersection = ar.intersect = function (b) {
        var j = aq.call(arguments, 1);
        return ar.filter(ar.uniq(b), function (k) {
            return ar.every(j, function (l) {
                return ar.indexOf(l, k) >= 0
            })
        })
    };
    ar.difference = function (b) {
        var j = ar.flatten(aq.call(arguments, 1), true);
        return ar.filter(b, function (k) {
            return !ar.include(j, k)
        })
    };
    ar.zip = function () {
        for (var b = aq.call(arguments), l = ar.max(ar.pluck(b, "length")), k = Array(l), j = 0; j < l; j++) {
            k[j] = ar.pluck(b, "" + j)
        }
        return k
    };
    ar.indexOf = function (b, l, k) {
        if (b == null) {
            return -1
        }
        var j;
        if (k) {
            k = ar.sortedIndex(b, l);
            return b[k] === l ? k : -1
        }
        if (ag && b.indexOf === ag) {
            return b.indexOf(l)
        }
        k = 0;
        for (j = b.length; k < j; k++) {
            if (k in b && b[k] === l) {
                return k
            }
        }
        return -1
    };
    ar.lastIndexOf = function (k, j) {
        if (k == null) {
            return -1
        }
        if (Z && k.lastIndexOf === Z) {
            return k.lastIndexOf(j)
        }
        for (var l = k.length; l--;) {
            if (l in k && k[l] === j) {
                return l
            }
        }
        return -1
    };
    ar.range = function (k, j, o) {
        if (arguments.length <= 1) {
            j = k || 0;
            k = 0
        }
        for (var o = arguments[2] || 1, n = Math.max(Math.ceil((j - k) / o), 0), m = 0, l = Array(n); m < n;) {
            l[m++] = k;
            k = k + o
        }
        return l
    };
    var V = function () {};
    ar.bind = function (b, l) {
        var k, j;
        if (b.bind === aa && aa) {
            return aa.apply(b, aq.call(arguments, 1))
        }
        if (!ar.isFunction(b)) {
            throw new TypeError
        }
        j = aq.call(arguments, 2);
        return k = function () {
            if (!(this instanceof k)) {
                return b.apply(l, j.concat(aq.call(arguments)))
            }
            V.prototype = b.prototype;
            var m = new V,
                n = b.apply(m, j.concat(aq.call(arguments)));
            return Object(n) === n ? n : m
        }
    };
    ar.bindAll = function (b) {
        var j = aq.call(arguments, 1);
        j.length == 0 && (j = ar.functions(b));
        ap(j, function (k) {
            b[k] = ar.bind(b[k], b)
        });
        return b
    };
    ar.memoize = function (b, k) {
        var j = {};
        k || (k = ar.identity);
        return function () {
            var l = k.apply(this, arguments);
            return ar.has(j, l) ? j[l] : j[l] = b.apply(this, arguments)
        }
    };
    ar.delay = function (k, j) {
        var l = aq.call(arguments, 2);
        return setTimeout(function () {
            return k.apply(null, l)
        }, j)
    };
    ar.defer = function (b) {
        return ar.delay.apply(ar, [b, 1].concat(aq.call(arguments, 1)))
    };
    ar.throttle = function (r, q) {
        var p, o, n, m, l, k, b = ar.debounce(function () {
                l = m = false
            }, q);
        return function () {
            p = this;
            o = arguments;
            n || (n = setTimeout(function () {
                n = null;
                l && r.apply(p, o);
                b()
            }, q));
            m ? l = true : k = r.apply(p, o);
            b();
            m = true;
            return k
        }
    };
    ar.debounce = function (k, j, m) {
        var l;
        return function () {
            var n = this,
                b = arguments;
            m && !l && k.apply(n, b);
            clearTimeout(l);
            l = setTimeout(function () {
                l = null;
                m || k.apply(n, b)
            }, j)
        }
    };
    ar.once = function (k) {
        var j = false,
            l;
        return function () {
            if (j) {
                return l
            }
            j = true;
            return l = k.apply(this, arguments)
        }
    };
    ar.wrap = function (k, j) {
        return function () {
            var b = [k].concat(aq.call(arguments, 0));
            return j.apply(this, b)
        }
    };
    ar.compose = function () {
        var b = arguments;
        return function () {
            for (var j = arguments, k = b.length - 1; k >= 0; k--) {
                j = [b[k].apply(this, j)]
            }
            return j[0]
        }
    };
    ar.after = function (k, j) {
        return k <= 0 ? j() : function () {
            if (--k < 1) {
                return j.apply(this, arguments)
            }
        }
    };
    ar.keys = f || function (b) {
        if (b !== Object(b)) {
            throw new TypeError("Invalid object")
        }
        var k = [],
            j;
        for (j in b) {
            ar.has(b, j) && (k[k.length] = j)
        }
        return k
    };
    ar.values = function (b) {
        return ar.map(b, ar.identity)
    };
    ar.functions = ar.methods = function (b) {
        var k = [],
            j;
        for (j in b) {
            ar.isFunction(b[j]) && k.push(j)
        }
        return k.sort()
    };
    ar.extend = function (b) {
        ap(aq.call(arguments, 1), function (j) {
            for (var k in j) {
                b[k] = j[k]
            }
        });
        return b
    };
    ar.pick = function (b) {
        var j = {};
        ap(ar.flatten(aq.call(arguments, 1)), function (k) {
            k in b && (j[k] = b[k])
        });
        return j
    };
    ar.defaults = function (b) {
        ap(aq.call(arguments, 1), function (j) {
            for (var k in j) {
                b[k] == null && (b[k] = j[k])
            }
        });
        return b
    };
    ar.clone = function (b) {
        return !ar.isObject(b) ? b : ar.isArray(b) ? b.slice() : ar.extend({}, b)
    };
    ar.tap = function (k, j) {
        j(k);
        return k
    };
    ar.isEqual = function (k, j) {
        return af(k, j, [])
    };
    ar.isEmpty = function (b) {
        if (b == null) {
            return true
        }
        if (ar.isArray(b) || ar.isString(b)) {
            return b.length === 0
        }
        for (var j in b) {
            if (ar.has(b, j)) {
                return false
            }
        }
        return true
    };
    ar.isElement = function (b) {
        return !!(b && b.nodeType == 1)
    };
    ar.isArray = aj || function (b) {
        return an.call(b) == "[object Array]"
    };
    ar.isObject = function (b) {
        return b === Object(b)
    };
    ar.isArguments = function (b) {
        return an.call(b) == "[object Arguments]"
    };
    ar.isArguments(arguments) || (ar.isArguments = function (b) {
        return !(!b || !ar.has(b, "callee"))
    });
    ar.isFunction = function (b) {
        return an.call(b) == "[object Function]"
    };
    ar.isString = function (b) {
        return an.call(b) == "[object String]"
    };
    ar.isNumber = function (b) {
        return an.call(b) == "[object Number]"
    };
    ar.isFinite = function (b) {
        return ar.isNumber(b) && isFinite(b)
    };
    ar.isNaN = function (b) {
        return b !== b
    };
    ar.isBoolean = function (b) {
        return b === true || b === false || an.call(b) == "[object Boolean]"
    };
    ar.isDate = function (b) {
        return an.call(b) == "[object Date]"
    };
    ar.isRegExp = function (b) {
        return an.call(b) == "[object RegExp]"
    };
    ar.isNull = function (b) {
        return b === null
    };
    ar.isUndefined = function (b) {
        return b === void 0
    };
    ar.has = function (k, j) {
        return g.call(k, j)
    };
    ar.noConflict = function () {
        ac._ = T;
        return this
    };
    ar.identity = function (b) {
        return b
    };
    ar.times = function (k, j, m) {
        for (var l = 0; l < k; l++) {
            j.call(m, l)
        }
    };
    ar.escape = function (b) {
        return ("" + b).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    };
    ar.result = function (b, k) {
        if (b == null) {
            return null
        }
        var j = b[k];
        return ar.isFunction(j) ? j.call(b) : j
    };
    ar.mixin = function (b) {
        ap(ar.functions(b), function (j) {
            e(j, ar[j] = b[j])
        })
    };
    var d = 0;
    ar.uniqueId = function (k) {
        var j = d++;
        return k ? k + j : j
    };
    ar.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var Y = /.^/,
        al = {
            "\\": "\\",
            "'": "'",
            r: "\r",
            n: "\n",
            t: "\t",
            u2028: "\u2028",
            u2029: "\u2029"
        }, W;
    for (W in al) {
        al[al[W]] = W
    }
    var c = /\\|'|\r|\n|\t|\u2028|\u2029/g,
        a = /\\(\\|'|r|n|t|u2028|u2029)/g,
        U = function (b) {
            return b.replace(a, function (k, j) {
                return al[j]
            })
        };
    ar.template = function (b, l, k) {
        k = ar.defaults(k || {}, ar.templateSettings);
        b = "__p+='" + b.replace(c, function (m) {
            return "\\" + al[m]
        }).replace(k.escape || Y, function (n, m) {
            return "'+\n_.escape(" + U(m) + ")+\n'"
        }).replace(k.interpolate || Y, function (n, m) {
            return "'+\n(" + U(m) + ")+\n'"
        }).replace(k.evaluate || Y, function (n, m) {
            return "';\n" + U(m) + "\n;__p+='"
        }) + "';\n";
        k.variable || (b = "with(obj||{}){\n" + b + "}\n");
        var b = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + b + "return __p;\n",
            j = new Function(k.variable || "obj", "_", b);
        if (l) {
            return j(l, ar)
        }
        l = function (m) {
            return j.call(this, m, ar)
        };
        l.source = "function(" + (k.variable || "obj") + "){\n" + b + "}";
        return l
    };
    ar.chain = function (b) {
        return ar(b).chain()
    };
    var am = function (b) {
        this._wrapped = b
    };
    ar.prototype = am.prototype;
    var S = function (b, j) {
        return j ? ar(b).chain() : b
    }, e = function (b, j) {
            am.prototype[b] = function () {
                var k = aq.call(arguments);
                Q.call(k, this._wrapped);
                return S(j.apply(ar, k), this._chain)
            }
        };
    ar.mixin(ar);
    ap("pop,push,reverse,shift,sort,splice,unshift".split(","), function (k) {
        var j = ao[k];
        am.prototype[k] = function () {
            var l = this._wrapped;
            j.apply(l, arguments);
            var b = l.length;
            (k == "shift" || k == "splice") && b === 0 && delete l[0];
            return S(l, this._chain)
        }
    });
    ap(["concat", "join", "slice"], function (k) {
        var j = ao[k];
        am.prototype[k] = function () {
            return S(j.apply(this._wrapped, arguments), this._chain)
        }
    });
    am.prototype.chain = function () {
        this._chain = true;
        return this
    };
    am.prototype.value = function () {
        return this._wrapped
    }
}).call(this);
(function (a) {
    a.FontEvents = {
        LOADING_EVENT: "NYTD.NYTMM.FontEvents:loading",
        ACTIVE_EVENT: "NYTD.NYTMM.FontEvents:active",
        INACTIVE_EVENT: "NYTD.NYTMM.FontEvents:inactive"
    }
})(NYTD.NYTMM);
window.NYTD = window.NYTD || {};
window.NYTD.NYTMM = window.NYTD.NYTMM || {};
(function (d, c, e) {
    c.TypeKit = c.TypeKit || {};
    c.TypeKit.Font = c.TypeKit.Font || {};
    c.TypeKit.status = "notready";

    function b(f) {
        return Math.pow(f, 2)
    }
    var a = c.TypeKit.Font = {
        CHELT_EXTRA_LIGHT: b(0),
        CHELT_EXTRA_LIGHT_ITALIC: b(1),
        CHELT_LIGHT: b(2),
        CHELT_LIGHT_ITALIC: b(3),
        CHELT_BOLD: b(4),
        CHELT_BOLD_ITALIC: b(5),
        CHELT_BOOK: b(6),
        CHELT_BOOK_ITALIC: b(7),
        JEANNE_MODERNO: b(8),
        FRANKLIN_LIGHT: b(9),
        FRANKLIN_LIGHT_ITALIC: b(10),
        FRANKLIN_BOLD: b(11),
        FRANKLIN_BOLD_ITALIC: b(12),
        FRANKLIN_MEDIUM: b(13),
        FRANKLIN_MEDIUM_ITALIC: b(14),
        POPLAR: b(15),
        CHELT_BOOK: b(16),
        CHELT_BOOK_HINTED: b(17),
        CHELT_MEDIUM: b(18),
        FRANKLIN_EXTRA_BOLD: b(19),
        FRANKLIN_HEADLINE: b(20)
    };
    a.CHELT_LIGHT_ALL = a.CHELT_LIGHT_ITALIC | a.CHELT_LIGHT | a.CHELT_EXTRA_LIGHT_ITALIC | a.CHELT_EXTRA_LIGHT;
    c.TypeKit.getKit = function (f) {
        if (typeof f === "string") {
            return f
        }
        switch (f) {
            case a.CHELT_BOOK:
                return "xgs8nea";
            case a.CHELT_LIGHT_ALL:
                return "kjk6vib";
            case a.FRANKLIN_LIGHT | a.FRANKLIN_LIGHT_ITALIC | a.FRANKLIN_BOLD | a.FRANKLIN_BOLD_ITALIC:
                return "qzu2eue";
            case a.CHELT_EXTRA_LIGHT | a.CHELT_EXTRA_LIGHT_ITALIC:
                return "rty5wdw";
            case a.JEANNE_MODERNO:
                return "yis8nrq";
            case a.CHELT_LIGHT | a.FRANKLIN_MEDIUM | a.FRANKLIN_MEDIUM_ITALIC:
                return "znd7tgc";
            case a.CHELT_BOLD | a.CHELT_BOLD_ITALIC | a.CHELT_BOOK | a.CHELT_BOOK_ITALIC:
                return "znd7tgc";
            case a.CHELT_LIGHT | a.FRANKLIN_BOLD | a.FRANKLIN_MEDIUM:
                return "our6nig";
            case a.POPLAR | a.FRANKLIN_LIGHT | a.FRANKLIN_BOLD | a.FRANKLIN_BOLD_ITALIC | a.FRANKLIN_LIGHT_ITALIC:
                return "uim4bap";
            case a.CHELT_BOOK_HINTED:
                return "dje8bzb";
            case a.CHELT_BOOK | a.FRANKLIN_LIGHT:
                return "vju5oot";
            case a.CHELT_LIGHT | a.CHELT_EXTRA_LIGHT | a.CHELT_BOOK | a.CHELT_MEDIUM | a.CHELT_BOLD | a.FRANKLIN_MEDIUM | a.FRANKLIN_MEDIUM_ITALIC | a.FRANKLIN_BOLD | a.FRANKLIN_EXTRA_BOLD | a.FRANKLIN_HEADLINE | a.FRANKLIN_LIGHT_ITALIC:
                return "fmf6yhw";
            default:
                throw new Error("This kit combination does not exist. Please create a new typekit and add it to AsyncTypeLoader.js!")
        }
    };
    c.AsyncTypeLoader = function (f) {
        var h = d("body");
        var g = (f) ? c.TypeKit.getKit(f) : c.TypeKit.getKit(c.TypeKit.Font.CHELT_LIGHT_ALL);
        TypekitConfig = {
            kitId: g,
            scriptTimeout: 3000,
            loading: function () {
                c.TypeKit.status = "loading";
                h.trigger(c.FontEvents.LOADING_EVENT)
            },
            active: function () {
                c.TypeKit.status = "active";
                h.trigger(c.FontEvents.ACTIVE_EVENT)
            },
            inactive: function () {
                c.TypeKit.status = "inactive";
                h.trigger(c.FontEvents.INACTIVE_EVENT)
            }
        };
        (function () {
            var m = document.getElementsByTagName("html")[0];
            m.className += " wf-loading";
            var k = setTimeout(function () {
                m.className = m.className.replace(/(\s|^)wf-loading(\s|$)/g, "");
                m.className += " wf-inactive"
            }, TypekitConfig.scriptTimeout);
            var j = document.createElement("script");
            j.src = "//typeface.nytimes.com/" + TypekitConfig.kitId + ".js";
            j.type = "text/javascript";
            j.async = "true";
            j.onload = j.onreadystatechange = function () {
                var n = this.readyState;
                if (n && n != "complete" && n != "loaded") {
                    return
                }
                clearTimeout(k);
                try {
                    Typekit.load(TypekitConfig)
                } catch (o) {}
            };
            var l = document.getElementsByTagName("script")[0];
            l.parentNode.insertBefore(j, l)
        })()
    }
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
NYTD.NYTMM.Device = NYTD.NYTMM.Device || {};
NYTD.NYTMM.DeviceEvents = NYTD.NYTMM.DeviceEvents || {};
(function (a) {
    a.DeviceEvents = {
        ORIENTATIONCHANGE_EVENT: "NYTD.NYTMM.DeviceEvents.Orientation:change",
        RESOLUTIONCHANGE_EVENT: "NYTD.NYTMM.DeviceEvents.Resolution:change"
    }
})(NYTD.NYTMM);
/*
Track device orientation. Based very heavily on:
http://davidbcalhoun.com/2010/dealing-with-device-orientation
*/
(function (d) {
    NYTD.NYTMM.Device.orientation = null;
    var b = (typeof window.orientation === "number" && typeof window.onorientationchange === "object");
    var a = d("html");
    var c = d("body");
    var f = NYTD.NYTMM.Device.updateOrientation = function () {
        var g = (NYTD.NYTMM.iOS) ? "portrait" : "landscape";
        if (b) {
            g = window.orientation;
            switch (g) {
                case 90:
                case -90:
                    g = "landscape";
                    break;
                default:
                    g = "portrait"
            }
        } else {
            g = (window.innerWidth > window.innerHeight) ? "landscape" : "portrait"
        }
        var h = (!a.hasClass("nytmm_orientation_" + g));
        a.removeClass(function (j, k) {
            return (k.match(/(nytmm_orientation_(?:landscape|portrait))/) || []).join(" ")
        });
        a.addClass("nytmm_orientation_" + g);
        NYTD.NYTMM.Device.orientation = g;
        if (NYTD.NYTMM.iOSInfo) {
            NYTD.NYTMM.iOSInfo.orientation = g
        }
        if (h) {
            c.trigger(NYTD.NYTMM.DeviceEvents.ORIENTATIONCHANGE_EVENT)
        }
    };
    var e = function () {
        f();
        if (b) {
            window.addEventListener("orientationchange", f, false)
        } else {
            setInterval(f, 5000)
        }
    };
    d(function () {
        e()
    })
})(jQuery);
(function (c) {
    var b = c("body");
    var a = [];
    NYTD.NYTMM.Device.addResolutionChangeAction = function (f) {
        if (typeof f === "function") {
            a.push(f)
        }
    };
    var e = function () {
        NYTD.NYTMM.Device.resolution = {
            width: (window.innerWidth > 0) ? window.innerWidth : screen.width,
            height: (window.innerHeight > 0) ? window.innerHeight : screen.height
        };
        NYTD.NYTMM.Device.viewport = {
            width: c(window).width(),
            height: c(window).height()
        };
        for (var f = 0; f < a.length; f++) {
            var g = a[f];
            g()
        }
        b.trigger(NYTD.NYTMM.DeviceEvents.RESOLUTIONCHANGE_EVENT)
    };
    var d = _.throttle(e, 1000);
    d();
    b.on(NYTD.NYTMM.DeviceEvents.ORIENTATIONCHANGE_EVENT, function () {
        d()
    });
    c(window).resize(_.debounce(function () {
        d()
    }, 1000))
})(jQuery);
/*

*/
(function (f, d) {
    var e = " -webkit- -moz- -o- -ms- ".split(" "),
        c = "modernizr",
        g = document.createElement(c),
        b = g.style;
    var a = function (q, s, k, r) {
        var j, p, m, n, h = document.createElement("div"),
            o = document.body,
            l = o || document.createElement("body");
        if (parseInt(k, 10)) {
            while (k--) {
                m = document.createElement("div");
                m.id = r ? r[k] : c + (k + 1);
                h.appendChild(m)
            }
        }
        j = ["&#173;", '<style id="s', c, '">', q, "</style>"].join("");
        h.id = c;
        (o ? h : l).innerHTML += j;
        l.appendChild(h);
        if (!o) {
            l.style.background = "";
            l.style.overflow = "hidden";
            n = docElement.style.overflow;
            docElement.style.overflow = "hidden";
            docElement.appendChild(l)
        }
        p = s(h, q);
        if (!o) {
            l.parentNode.removeChild(l);
            docElement.style.overflow = n
        } else {
            h.parentNode.removeChild(h)
        }
        return !!p
    }
    /*
     * Detect touch support. From Modernizr.touch | Copyright (c) Faruk Ates, Paul Irish, Alex Sexton |  Available under the BSD and MIT licenses: www.modernizr.com/license/
     */;
    d.supportsTouch = function () {
        var h;
        if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            h = true
        } else {
            a(["@media (", e.join("touch-enabled),("), c, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (j) {
                h = j.offsetTop === 9
            })
        }
        return h
    };
    d.pixelRatio = function () {
        return !!window.devicePixelRatio ? window.devicePixelRatio : 1
    };
    d.isRetina = function () {
        return this.pixelRatio() > 1
    }
})(jQuery, NYTD.NYTMM.namespace("NYTD.NYTMM.Device.features"));
(function (a) {
    a.address = (function () {
        var d = function (am) {
            var an = a.extend(a.Event(am), (function () {
                var ar = {}, aq = a.address.parameterNames();
                for (var ap = 0, ao = aq.length; ap < ao; ap++) {
                    ar[aq[ap]] = a.address.parameter(aq[ap])
                }
                return {
                    value: a.address.value(),
                    path: a.address.path(),
                    pathNames: a.address.pathNames(),
                    parameterNames: aq,
                    parameters: ar,
                    queryString: a.address.queryString()
                }
            }).call(a.address));
            a(a.address).trigger(an);
            return an
        }, l = function (am) {
                return Array.prototype.slice.call(am)
            }, k = function (ao, an, am) {
                a().bind.apply(a(a.address), Array.prototype.slice.call(arguments));
                return a.address
            }, M = function (an, am) {
                a().unbind.apply(a(a.address), Array.prototype.slice.call(arguments));
                return a.address
            }, Q = function () {
                return (af.pushState && F.state !== L)
            }, K = function () {
                return ("/" + ab.pathname.replace(new RegExp(F.state), "") + ab.search + (X() ? "#" + X() : "")).replace(S, "/")
            }, X = function () {
                var am = ab.href.indexOf("#");
                return am != -1 ? G(ab.href.substr(am + 1), ag) : ""
            }, B = function () {
                return Q() ? K() : X()
            }, b = function () {
                try {
                    return top.document !== L && top.document.title !== L ? top : window
                } catch (am) {
                    return window
                }
            }, m = function () {
                return "javascript"
            }, ak = function (am) {
                am = am.toString();
                return (F.strict && am.substr(0, 1) != "/" ? "/" : "") + am
            }, G = function (am, an) {
                if (F.crawlable && an) {
                    return (am !== "" ? "!" : "") + am
                }
                return am.replace(/^\!/, "")
            }, W = function (am, an) {
                return parseInt(am.css(an), 10)
            }, ae = function () {
                if (!u) {
                    var an = B(),
                        am = decodeURI(Z) != decodeURI(an);
                    if (am) {
                        if (h && r < 7) {
                            ab.reload()
                        } else {
                            if (h && !R && F.history) {
                                o(H, 50)
                            }
                            _old = Z;
                            Z = an;
                            ac(ag)
                        }
                    }
                }
            }, ac = function (am) {
                var ao = d(J),
                    an = d(am ? g : aj);
                o(y, 10);
                if (ao.isDefaultPrevented() || an.isDefaultPrevented()) {
                    T()
                }
            }, T = function () {
                Z = _old;
                if (Q()) {
                    af.popState({}, "", F.state.replace(/\/$/, "") + (Z === "" ? "/" : Z))
                } else {
                    u = E;
                    if (t) {
                        if (F.history) {
                            ab.hash = "#" + G(Z, E)
                        } else {
                            ab.replace("#" + G(Z, E))
                        }
                    } else {
                        if (Z != B()) {
                            if (F.history) {
                                ab.hash = "#" + G(Z, E)
                            } else {
                                ab.replace("#" + G(Z, E))
                            }
                        }
                    } if ((h && !R) && F.history) {
                        o(H, 50)
                    }
                    if (t) {
                        o(function () {
                            u = ag
                        }, 1)
                    } else {
                        u = ag
                    }
                }
            }, y = function () {
                if (F.tracker !== "null" && F.tracker !== I) {
                    var am = a.isFunction(F.tracker) ? F.tracker : U[F.tracker],
                        an = (ab.pathname + ab.search + (a.address && !Q() ? a.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
                    if (a.isFunction(am)) {
                        am(an)
                    } else {
                        if (a.isFunction(U.urchinTracker)) {
                            U.urchinTracker(an)
                        } else {
                            if (U.pageTracker !== L && a.isFunction(U.pageTracker._trackPageview)) {
                                U.pageTracker._trackPageview(an)
                            } else {
                                if (U._gaq !== L && a.isFunction(U._gaq.push)) {
                                    U._gaq.push(["_trackPageview", decodeURI(an)])
                                }
                            }
                        }
                    }
                }
            }, H = function () {
                var am = m() + ":" + ag + ";document.open();document.writeln('<html><head><title>" + ai.title.replace(/\'/g, "\\'") + "</title><script>var " + A + ' = "' + encodeURIComponent(B()).replace(/\'/g, "\\'") + (ai.domain != ab.hostname ? '";document.domain="' + ai.domain : "") + "\";<\/script></head></html>');document.close();";
                if (r < 7) {
                    e.src = am
                } else {
                    e.contentWindow.location.replace(am)
                }
            }, ah = function () {
                if (j && c != -1) {
                    var am, ao, an = j.substr(c + 1).split("&");
                    for (am = 0; am < an.length; am++) {
                        ao = an[am].split("=");
                        if (/^(autoUpdate|crawlable|history|strict|wrap)$/.test(ao[0])) {
                            F[ao[0]] = (isNaN(ao[1]) ? /^(true|yes)$/i.test(ao[1]) : (parseInt(ao[1], 10) !== 0))
                        }
                        if (/^(state|tracker)$/.test(ao[0])) {
                            F[ao[0]] = ao[1]
                        }
                    }
                    j = I
                }
                _old = Z;
                Z = B()
            }, V = function () {
                if (!aa) {
                    aa = E;
                    ah();
                    var ao = function () {
                        x.call(this);
                        s.call(this)
                    }, an = a("body").ajaxComplete(ao);
                    ao();
                    if (F.wrap) {
                        var ap = a("body > *").wrapAll('<div style="padding:' + (W(an, "marginTop") + W(an, "paddingTop")) + "px " + (W(an, "marginRight") + W(an, "paddingRight")) + "px " + (W(an, "marginBottom") + W(an, "paddingBottom")) + "px " + (W(an, "marginLeft") + W(an, "paddingLeft")) + 'px;" />').parent().wrap('<div id="' + A + '" style="height:100%;overflow:auto;position:relative;' + (t && !window.statusbar.visible ? "resize:both;" : "") + '" />');
                        a("html, body").css({
                            height: "100%",
                            margin: 0,
                            padding: 0,
                            overflow: "hidden"
                        });
                        if (t) {
                            a('<style type="text/css" />').appendTo("head").text("#" + A + "::-webkit-resizer { background-color: #fff; }")
                        }
                    }
                    if (h && !R) {
                        var am = ai.getElementsByTagName("frameset")[0];
                        e = ai.createElement((am ? "" : "i") + "frame");
                        e.src = m() + ":" + ag;
                        if (am) {
                            am.insertAdjacentElement("beforeEnd", e);
                            am[am.cols ? "cols" : "rows"] += ",0";
                            e.noResize = E;
                            e.frameBorder = e.frameSpacing = 0
                        } else {
                            e.style.display = "none";
                            e.style.width = e.style.height = 0;
                            e.tabIndex = -1;
                            ai.body.insertAdjacentElement("afterBegin", e)
                        }
                        o(function () {
                            a(e).bind("load", function () {
                                var aq = e.contentWindow;
                                _old = Z;
                                Z = aq[A] !== L ? aq[A] : "";
                                if (Z != B()) {
                                    ac(ag);
                                    ab.hash = G(Z, E)
                                }
                            });
                            if (e.contentWindow[A] === L) {
                                H()
                            }
                        }, 50)
                    }
                    o(function () {
                        d("init");
                        ac(ag)
                    }, 1);
                    if (!Q()) {
                        if ((h && r > 7) || (!h && R)) {
                            if (U.addEventListener) {
                                U.addEventListener(Y, ae, ag)
                            } else {
                                if (U.attachEvent) {
                                    U.attachEvent("on" + Y, ae)
                                }
                            }
                        } else {
                            v(ae, 50)
                        }
                    }
                    if ("state" in window.history) {
                        a(window).trigger("popstate")
                    }
                }
            }, x = function () {
                var ap, at = a("a"),
                    aq = at.size(),
                    an = 1,
                    am = -1,
                    ar = '[rel*="address:"]',
                    ao = function () {
                        if (++am != aq) {
                            ap = a(at.get(am));
                            if (ap.is(ar)) {
                                ap.address(ar)
                            }
                            o(ao, an)
                        }
                    };
                o(ao, an)
            }, q = function () {
                if (decodeURI(Z) != decodeURI(B())) {
                    _old = Z;
                    Z = B();
                    ac(ag)
                }
            }, p = function () {
                if (U.removeEventListener) {
                    U.removeEventListener(Y, ae, ag)
                } else {
                    if (U.detachEvent) {
                        U.detachEvent("on" + Y, ae)
                    }
                }
            }, s = function () {
                if (F.crawlable) {
                    var an = ab.pathname.replace(/\/$/, ""),
                        am = "_escaped_fragment_";
                    if (a("body").html().indexOf(am) != -1) {
                        a('a[href]:not([href^=http]), a[href*="' + document.domain + '"]').each(function () {
                            var ao = a(this).attr("href").replace(/^http:/, "").replace(new RegExp(an + "/?$"), "");
                            if (ao === "" || ao.indexOf(am) != -1) {
                                a(this).attr("href", "#" + encodeURI(decodeURIComponent(ao.replace(new RegExp("/(.*)\\?" + am + "=(.*)$"), "!$2"))))
                            }
                        })
                    }
                }
            }, L, I = null,
            A = "jQueryAddress",
            ad = "string",
            Y = "hashchange",
            n = "init",
            J = "change",
            g = "internalChange",
            aj = "externalChange",
            E = true,
            ag = false,
            F = {
                autoUpdate: E,
                crawlable: ag,
                history: E,
                strict: E,
                wrap: ag
            }, D = a.browser,
            r = parseFloat(D.version),
            h = !a.support.opacity,
            t = D.webkit || D.safari,
            U = b(),
            ai = U.document,
            af = U.history,
            ab = U.location,
            v = setInterval,
            o = setTimeout,
            S = /\/{2,9}/g,
            al = navigator.userAgent,
            R = "on" + Y in U,
            e, O, j = a("script:last").attr("src"),
            c = j ? j.indexOf("?") : -1,
            N = ai.title,
            u = ag,
            aa = ag,
            P = E,
            z = ag,
            C = {}, Z = B();
        _old = Z;
        if (h) {
            r = parseFloat(al.substr(al.indexOf("MSIE") + 4));
            if (ai.documentMode && ai.documentMode != r) {
                r = ai.documentMode != 8 ? 7 : 8
            }
            var w = ai.onpropertychange;
            ai.onpropertychange = function () {
                if (w) {
                    w.call(ai)
                }
                if (ai.title != N && ai.title.indexOf("#" + B()) != -1) {
                    ai.title = N
                }
            }
        }
        if (af.navigationMode) {
            af.navigationMode = "compatible"
        }
        if (document.readyState == "complete") {
            var f = setInterval(function () {
                if (a.address) {
                    V();
                    clearInterval(f)
                }
            }, 50)
        } else {
            ah();
            a(V)
        }
        a(window).bind("popstate", q).bind("unload", p);
        return {
            bind: function (an, ao, am) {
                return k.apply(this, l(arguments))
            },
            unbind: function (an, am) {
                return M.apply(this, l(arguments))
            },
            init: function (an, am) {
                return k.apply(this, [n].concat(l(arguments)))
            },
            change: function (an, am) {
                return k.apply(this, [J].concat(l(arguments)))
            },
            internalChange: function (an, am) {
                return k.apply(this, [g].concat(l(arguments)))
            },
            externalChange: function (an, am) {
                return k.apply(this, [aj].concat(l(arguments)))
            },
            baseURL: function () {
                var am = ab.href;
                if (am.indexOf("#") != -1) {
                    am = am.substr(0, am.indexOf("#"))
                }
                if (/\/$/.test(am)) {
                    am = am.substr(0, am.length - 1)
                }
                return am
            },
            autoUpdate: function (am) {
                if (am !== L) {
                    F.autoUpdate = am;
                    return this
                }
                return F.autoUpdate
            },
            crawlable: function (am) {
                if (am !== L) {
                    F.crawlable = am;
                    return this
                }
                return F.crawlable
            },
            history: function (am) {
                if (am !== L) {
                    F.history = am;
                    return this
                }
                return F.history
            },
            state: function (am) {
                if (am !== L) {
                    F.state = am;
                    var an = K();
                    if (F.state !== L) {
                        if (af.pushState) {
                            if (an.substr(0, 3) == "/#/") {
                                ab.replace(F.state.replace(/^\/$/, "") + an.substr(2))
                            }
                        } else {
                            if (an != "/" && an.replace(/^\/#/, "") != X()) {
                                o(function () {
                                    ab.replace(F.state.replace(/^\/$/, "") + "/#" + an)
                                }, 1)
                            }
                        }
                    }
                    return this
                }
                return F.state
            },
            strict: function (am) {
                if (am !== L) {
                    F.strict = am;
                    return this
                }
                return F.strict
            },
            tracker: function (am) {
                if (am !== L) {
                    F.tracker = am;
                    return this
                }
                return F.tracker
            },
            wrap: function (am) {
                if (am !== L) {
                    F.wrap = am;
                    return this
                }
                return F.wrap
            },
            update: function () {
                z = E;
                this.value(Z);
                z = ag;
                return this
            },
            title: function (am) {
                if (am !== L) {
                    o(function () {
                        N = ai.title = am;
                        if (P && e && e.contentWindow && e.contentWindow.document) {
                            e.contentWindow.document.title = am;
                            P = ag
                        }
                    }, 50);
                    return this
                }
                return ai.title
            },
            value: function (am) {
                if (am !== L) {
                    am = ak(am);
                    if (am == "/") {
                        am = ""
                    }
                    if (Z == am && !z) {
                        return
                    }
                    _old = Z;
                    Z = am;
                    if (F.autoUpdate || z) {
                        ac(E);
                        if (Q()) {
                            af[F.history ? "pushState" : "replaceState"]({}, "", F.state.replace(/\/$/, "") + (Z === "" ? "/" : Z))
                        } else {
                            u = E;
                            if (t) {
                                if (F.history) {
                                    ab.hash = "#" + G(Z, E)
                                } else {
                                    ab.replace("#" + G(Z, E))
                                }
                            } else {
                                if (Z != B()) {
                                    if (F.history) {
                                        ab.hash = "#" + G(Z, E)
                                    } else {
                                        ab.replace("#" + G(Z, E))
                                    }
                                }
                            } if ((h && !R) && F.history) {
                                o(H, 50)
                            }
                            if (t) {
                                o(function () {
                                    u = ag
                                }, 1)
                            } else {
                                u = ag
                            }
                        }
                    }
                    return this
                }
                return ak(Z)
            },
            path: function (an) {
                if (an !== L) {
                    var am = this.queryString(),
                        ao = this.hash();
                    this.value(an + (am ? "?" + am : "") + (ao ? "#" + ao : ""));
                    return this
                }
                return ak(Z).split("#")[0].split("?")[0]
            },
            pathNames: function () {
                var an = this.path(),
                    am = an.replace(S, "/").split("/");
                if (an.substr(0, 1) == "/" || an.length === 0) {
                    am.splice(0, 1)
                }
                if (an.substr(an.length - 1, 1) == "/") {
                    am.splice(am.length - 1, 1)
                }
                return am
            },
            queryString: function (an) {
                if (an !== L) {
                    var ao = this.hash();
                    this.value(this.path() + (an ? "?" + an : "") + (ao ? "#" + ao : ""));
                    return this
                }
                var am = Z.split("?");
                return am.slice(1, am.length).join("?").split("#")[0]
            },
            parameter: function (an, aw, ap) {
                var au, ar;
                if (aw !== L) {
                    var av = this.parameterNames();
                    ar = [];
                    aw = aw === L || aw === I ? "" : aw.toString();
                    for (au = 0; au < av.length; au++) {
                        var aq = av[au],
                            ax = this.parameter(aq);
                        if (typeof ax == ad) {
                            ax = [ax]
                        }
                        if (aq == an) {
                            ax = (aw === I || aw === "") ? [] : (ap ? ax.concat([aw]) : [aw])
                        }
                        for (var at = 0; at < ax.length; at++) {
                            ar.push(aq + "=" + ax[at])
                        }
                    }
                    if (a.inArray(an, av) == -1 && aw !== I && aw !== "") {
                        ar.push(an + "=" + aw)
                    }
                    this.queryString(ar.join("&"));
                    return this
                }
                aw = this.queryString();
                if (aw) {
                    var am = [];
                    ar = aw.split("&");
                    for (au = 0; au < ar.length; au++) {
                        var ao = ar[au].split("=");
                        if (ao[0] == an) {
                            am.push(ao.slice(1).join("="))
                        }
                    }
                    if (am.length !== 0) {
                        return am.length != 1 ? am : am[0]
                    }
                }
            },
            parameterNames: function () {
                var am = this.queryString(),
                    ap = [];
                if (am && am.indexOf("=") != -1) {
                    var aq = am.split("&");
                    for (var ao = 0; ao < aq.length; ao++) {
                        var an = aq[ao].split("=")[0];
                        if (a.inArray(an, ap) == -1) {
                            ap.push(an)
                        }
                    }
                }
                return ap
            },
            hash: function (an) {
                if (an !== L) {
                    this.value(Z.split("#")[0] + (an ? "#" + an : ""));
                    return this
                }
                var am = Z.split("#");
                return am.slice(1, am.length).join("#")
            }
        }
    })();
    a.fn.address = function (b) {
        var d;
        if (typeof b == "string") {
            d = b;
            b = undefined
        }
        if (!a(this).attr("address")) {
            var c = function (g) {
                if (g.shiftKey || g.ctrlKey || g.metaKey || g.which == 2) {
                    return true
                }
                if (a(this).is("a")) {
                    g.preventDefault();
                    var f = b ? b.call(this) : /address:/.test(a(this).attr("rel")) ? a(this).attr("rel").split("address:")[1].split(" ")[0] : a.address.state() !== undefined && !/^\/?$/.test(a.address.state()) ? a(this).attr("href").replace(new RegExp("^(.*" + a.address.state() + "|\\.)"), "") : a(this).attr("href").replace(/^(#\!?|\.)/, "");
                    a.address.value(f)
                }
            };
            a(d ? d : this).live("click", c).live("submit", function (h) {
                if (a(this).is("form")) {
                    h.preventDefault();
                    var g = a(this).attr("action"),
                        f = b ? b.call(this) : (g.indexOf("?") != -1 ? g.replace(/&$/, "") : g + "?") + a(this).serialize();
                    a.address.value(f)
                }
            }).attr("address", true)
        }
        return this
    }
})(jQuery);
(function (a) {
    a.fn.videoBG = function (b, d) {
        var d = {};
        if (typeof b == "object") {
            d = a.extend({}, a.fn.videoBG.defaults, b)
        } else {
            if (!b) {
                d = a.fn.videoBG.defaults
            } else {
                return a(b).videoBG(d)
            }
        }
        var c = a(this);
        if (!c.length) {
            return
        }
        if (c.css("position") == "static" || !c.css("position")) {
            c.css("position", "relative")
        }
        if (d.width == 0) {
            d.width = c.width()
        }
        if (d.height == 0) {
            d.height = c.height()
        }
        var e = a.fn.videoBG.wrapper();
        e.height(d.height).width(d.width);
        if (d.textReplacement) {
            d.scale = true;
            c.width(d.width).height(d.height).css("text-indent", "-9999px")
        } else {
            e.css("z-index", d.zIndex + 1)
        }
        e.html(c.html());
        var f = a.fn.videoBG.video(d);
        if (d.scale) {
            e.height(d.height).width(d.width);
            f.height(d.height).width(d.width);
            f.find("video").height(d.height).width(d.width)
        }
        c.html(e);
        c.append(f);
        return this
    };
    a.fn.videoBG.setFullscreen = function (j, k) {
        var e = a(window).width(),
            b = a(window).height();
        j.css("min-height", 0).css("min-width", 0);
        e = (k.minWidth !== null) ? (k.minWidth > e) ? k.minWidth : e : e;
        if (k.constrainHeight) {
            var c = Math.round(j.height() / j.width() * e);
            j.parent().width(e).height(c);
            j.width(e).height(c);
            j.parent().parent().find(".videoBG_wrapper").width(e).height(c)
        } else {
            j.parent().width(e).height(b);
            if (e / b > j.aspectRatio) {
                j.width(e).height("auto");
                var g = j.height();
                var f = (g - b) / 2;
                if (f < 0) {
                    f = 0
                }
                j.css("top", -f)
            } else {
                j.width("auto").height(b);
                var d = j.width();
                var f = (d - e) / 2;
                if (f < 0) {
                    f = 0
                }
                j.css("left", -f);
                if (f === 0) {
                    var h = setTimeout(function () {
                        a.fn.videoBG.setFullscreen(j, k)
                    }, 500)
                }
            }
            a("body > .videoBG_wrapper").width(e).height(b)
        }
        return j
    };
    a.fn.videoBG.video = function (f) {
        if (f.scrollToTop) {
            a("html, body").scrollTop(-1)
        }
        var c = a("<div/>");
        c.addClass("videoBG").css("position", f.position).css("z-index", f.zIndex).css("top", 0).css("left", 0).css("height", f.height).css("width", f.width).css("opacity", f.opacity).css("overflow", "hidden");
        var e = a("<video/>");
        e.css("position", "absolute").css("z-index", f.zIndex).attr("poster", f.poster).css("top", 0).css("left", 0).css("min-width", "100%").css("min-height", "100%");
        var b = a.fn.videoBG.supportsVideo();
        if (f.autoplay) {
            e.attr("autoplay", "autoplay")
        }
        if (f.preload) {
            e.attr("preload", f.preload)
        }
        if (f.fullscreen) {
            e.bind("canplay", function () {
                e.aspectRatio = e.width() / e.height();
                a.fn.videoBG.setFullscreen(e, f)
            });
            var j;
            a(window).resize(function () {
                clearTimeout(j);
                j = setTimeout(function () {
                    a.fn.videoBG.setFullscreen(e, f)
                }, 100)
            });
            a.fn.videoBG.setFullscreen(e, f)
        }
        var d = e[0];
        var h = f.loop;
        e.bind("ended", function () {
            if (f.loop) {
                if (h) {
                    d.play()
                }
                if (h !== true) {
                    h--
                }
            } else {
                d.pause()
            }
        });
        e.bind("canplay", function () {
            if (f.autoplay) {
                d.play()
            }
        });
        if (b) {
            if (a.fn.videoBG.supportType("mp4") && f.mp4) {
                e.attr("src", f.mp4)
            } else {
                if (a.fn.videoBG.supportType("webm") && f.webm) {
                    e.attr("src", f.webm)
                } else {
                    if (a.fn.videoBG.supportType("ogv") && f.ogv) {
                        e.attr("src", f.ogv)
                    } else {
                        b = false
                    }
                }
            }
        }
        var g = a("<img/>");
        g.attr("src", f.poster).css("position", "absolute").css("z-index", f.zIndex).css("top", 0).css("left", 0).css("min-height", "100%").css("min-width", "100%");
        if (b) {
            c.html(e);
            e.attr("controls", "controls");
            setTimeout(function () {
                e.removeAttr("controls")
            }, 0)
        } else {
            c.html(g)
        } if (f.textReplacement) {
            c.css("min-height", 1).css("min-width", 1);
            e.css("min-height", 1).css("min-width", 1);
            g.css("min-height", 1).css("min-width", 1);
            c.height(f.height).width(f.width);
            e.height(f.height).width(f.width);
            g.height(f.height).width(f.width)
        }
        if (b && f.autoplay) {
            d.play()
        }
        return c
    };
    a.fn.videoBG.supportsVideo = function () {
        return (document.createElement("video").canPlayType)
    };
    a.fn.videoBG.supportType = function (c) {
        if (!a.fn.videoBG.supportsVideo()) {
            return false
        }
        var b = document.createElement("video");
        switch (c) {
            case "webm":
                return (b.canPlayType('video/webm; codecs="vp8, vorbis"'));
                break;
            case "mp4":
                return (b.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
                break;
            case "ogv":
                return (b.canPlayType('video/ogg; codecs="theora, vorbis"'));
                break
        }
        return false
    };
    a.fn.videoBG.wrapper = function () {
        var b = a("<div/>");
        b.addClass("videoBG_wrapper").css("position", "absolute").css("top", 0).css("left", 0);
        return b
    };
    a.fn.videoBG.defaults = {
        mp4: "",
        ogv: "",
        webm: "",
        poster: "",
        autoplay: true,
        loop: true,
        scale: false,
        position: "absolute",
        opacity: 1,
        textReplacement: false,
        zIndex: 0,
        width: 0,
        height: 0,
        fullscreen: false,
        imgFallback: true,
        constrainHeight: false,
        scrollToTop: true,
        minWidth: null
    }
})(jQuery);
/*
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2011 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 2.1.0
 * Date: 1st September 2011
 */ (function (a, d) {
    a.fn.jPlayer = function (b) {
        var h = typeof b === "string",
            g = Array.prototype.slice.call(arguments, 1),
            f = this,
            b = !h && g.length ? a.extend.apply(null, [!0, b].concat(g)) : b;
        if (h && b.charAt(0) === "_") {
            return f
        }
        h ? this.each(function () {
            var j = a.data(this, "jPlayer"),
                e = j && a.isFunction(j[b]) ? j[b].apply(j, g) : j;
            if (e !== j && e !== d) {
                return f = e, !1
            }
        }) : this.each(function () {
            var e = a.data(this, "jPlayer");
            e ? e.option(b || {}) : a.data(this, "jPlayer", new a.jPlayer(b, this))
        });
        return f
    };
    a.jPlayer = function (b, f) {
        if (arguments.length) {
            this.element = a(f);
            this.options = a.extend(!0, {}, this.options, b);
            var e = this;
            this.element.bind("remove.jPlayer", function () {
                e.destroy()
            });
            this._init()
        }
    };
    a.jPlayer.emulateMethods = "load play pause";
    a.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate";
    a.jPlayer.emulateOptions = "muted volume";
    a.jPlayer.reservedEvent = "ready flashreset resize repeat error warning";
    a.jPlayer.event = {
        ready: "jPlayer_ready",
        flashreset: "jPlayer_flashreset",
        resize: "jPlayer_resize",
        repeat: "jPlayer_repeat",
        click: "jPlayer_click",
        error: "jPlayer_error",
        warning: "jPlayer_warning",
        loadstart: "jPlayer_loadstart",
        progress: "jPlayer_progress",
        suspend: "jPlayer_suspend",
        abort: "jPlayer_abort",
        emptied: "jPlayer_emptied",
        stalled: "jPlayer_stalled",
        play: "jPlayer_play",
        pause: "jPlayer_pause",
        loadedmetadata: "jPlayer_loadedmetadata",
        loadeddata: "jPlayer_loadeddata",
        waiting: "jPlayer_waiting",
        playing: "jPlayer_playing",
        canplay: "jPlayer_canplay",
        canplaythrough: "jPlayer_canplaythrough",
        seeking: "jPlayer_seeking",
        seeked: "jPlayer_seeked",
        timeupdate: "jPlayer_timeupdate",
        ended: "jPlayer_ended",
        ratechange: "jPlayer_ratechange",
        durationchange: "jPlayer_durationchange",
        volumechange: "jPlayer_volumechange"
    };
    a.jPlayer.htmlEvent = "loadstart,abort,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,ratechange".split(",");
    a.jPlayer.pause = function () {
        a.each(a.jPlayer.prototype.instances, function (f, e) {
            e.data("jPlayer").status.srcSet && e.jPlayer("pause")
        })
    };
    a.jPlayer.timeFormat = {
        showHour: !1,
        showMin: !0,
        showSec: !0,
        padHour: !1,
        padMin: !0,
        padSec: !0,
        sepHour: ":",
        sepMin: ":",
        sepSec: ""
    };
    a.jPlayer.convertTime = function (b) {
        var f = new Date(b * 1000),
            e = f.getUTCHours(),
            b = f.getUTCMinutes(),
            f = f.getUTCSeconds(),
            e = a.jPlayer.timeFormat.padHour && e < 10 ? "0" + e : e,
            b = a.jPlayer.timeFormat.padMin && b < 10 ? "0" + b : b,
            f = a.jPlayer.timeFormat.padSec && f < 10 ? "0" + f : f;
        return (a.jPlayer.timeFormat.showHour ? e + a.jPlayer.timeFormat.sepHour : "") + (a.jPlayer.timeFormat.showMin ? b + a.jPlayer.timeFormat.sepMin : "") + (a.jPlayer.timeFormat.showSec ? f + a.jPlayer.timeFormat.sepSec : "")
    };
    a.jPlayer.uaBrowser = function (g) {
        var g = g.toLowerCase(),
            f = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            j = /(msie) ([\w.]+)/,
            h = /(mozilla)(?:.*? rv:([\w.]+))?/,
            g = /(webkit)[ \/]([\w.]+)/.exec(g) || f.exec(g) || j.exec(g) || g.indexOf("compatible") < 0 && h.exec(g) || [];
        return {
            browser: g[1] || "",
            version: g[2] || "0"
        }
    };
    a.jPlayer.uaPlatform = function (g) {
        var f = g.toLowerCase(),
            j = /(android)/,
            h = /(mobile)/,
            g = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(f) || [],
            f = /(ipad|playbook)/.exec(f) || !h.exec(f) && j.exec(f) || [];
        g[1] && (g[1] = g[1].replace(/\s/g, "_"));
        return {
            platform: g[1] || "",
            tablet: f[1] || ""
        }
    };
    a.jPlayer.browser = {};
    a.jPlayer.platform = {};
    var c = a.jPlayer.uaBrowser(navigator.userAgent);
    if (c.browser) {
        a.jPlayer.browser[c.browser] = !0, a.jPlayer.browser.version = c.version
    }
    c = a.jPlayer.uaPlatform(navigator.userAgent);
    if (c.platform) {
        a.jPlayer.platform[c.platform] = !0, a.jPlayer.platform.mobile = !c.tablet, a.jPlayer.platform.tablet = !! c.tablet
    }
    a.jPlayer.prototype = {
        count: 0,
        version: {
            script: "2.1.0",
            needFlash: "2.1.0",
            flash: "unknown"
        },
        options: {
            swfPath: "js",
            solution: "html, flash",
            supplied: "mp3",
            preload: "metadata",
            volume: 0.8,
            muted: !1,
            wmode: "opaque",
            backgroundColor: "#000000",
            cssSelectorAncestor: "#jp_container_1",
            cssSelector: {
                videoPlay: ".jp-video-play",
                play: ".jp-play",
                pause: ".jp-pause",
                stop: ".jp-stop",
                seekBar: ".jp-seek-bar",
                playBar: ".jp-play-bar",
                mute: ".jp-mute",
                unmute: ".jp-unmute",
                volumeBar: ".jp-volume-bar",
                volumeBarValue: ".jp-volume-bar-value",
                volumeMax: ".jp-volume-max",
                currentTime: ".jp-current-time",
                duration: ".jp-duration",
                fullScreen: ".jp-full-screen",
                restoreScreen: ".jp-restore-screen",
                repeat: ".jp-repeat",
                repeatOff: ".jp-repeat-off",
                gui: ".jp-gui",
                noSolution: ".jp-no-solution"
            },
            fullScreen: !1,
            autohide: {
                restored: !1,
                full: !0,
                fadeIn: 200,
                fadeOut: 600,
                hold: 1000
            },
            loop: !1,
            repeat: function (b) {
                b.jPlayer.options.loop ? a(this).unbind(".jPlayerRepeat").bind(a.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function () {
                    a(this).jPlayer("play")
                }) : a(this).unbind(".jPlayerRepeat")
            },
            nativeVideoControls: {},
            noFullScreen: {
                msie: /msie [0-6]/,
                ipad: /ipad.*?os [0-4]/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android [0-3](?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                webos: /webos/
            },
            noVolume: {
                ipad: /ipad/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                webos: /webos/,
                playbook: /playbook/
            },
            verticalVolume: !1,
            idPrefix: "jp",
            noConflict: "jQuery",
            emulateHtml: !1,
            errorAlerts: !1,
            warningAlerts: !1
        },
        optionsAudio: {
            size: {
                width: "0px",
                height: "0px",
                cssClass: ""
            },
            sizeFull: {
                width: "0px",
                height: "0px",
                cssClass: ""
            }
        },
        optionsVideo: {
            size: {
                width: "480px",
                height: "270px",
                cssClass: "jp-video-270p"
            },
            sizeFull: {
                width: "100%",
                height: "100%",
                cssClass: "jp-video-full"
            }
        },
        instances: {},
        status: {
            src: "",
            media: {},
            paused: !0,
            format: {},
            formatType: "",
            waitForPlay: !0,
            waitForLoad: !0,
            srcSet: !1,
            video: !1,
            seekPercent: 0,
            currentPercentRelative: 0,
            currentPercentAbsolute: 0,
            currentTime: 0,
            duration: 0,
            readyState: 0,
            networkState: 0,
            playbackRate: 1,
            ended: 0
        },
        internal: {
            ready: !1
        },
        solution: {
            html: !0,
            flash: !0
        },
        format: {
            mp3: {
                codec: 'audio/mpeg; codecs="mp3"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4a: {
                codec: 'audio/mp4; codecs="mp4a.40.2"',
                flashCanPlay: !0,
                media: "audio"
            },
            oga: {
                codec: 'audio/ogg; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            wav: {
                codec: 'audio/wav; codecs="1"',
                flashCanPlay: !1,
                media: "audio"
            },
            webma: {
                codec: 'audio/webm; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            fla: {
                codec: "audio/x-flv",
                flashCanPlay: !0,
                media: "audio"
            },
            m4v: {
                codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !0,
                media: "video"
            },
            ogv: {
                codec: 'video/ogg; codecs="theora, vorbis"',
                flashCanPlay: !1,
                media: "video"
            },
            webmv: {
                codec: 'video/webm; codecs="vorbis, vp8"',
                flashCanPlay: !1,
                media: "video"
            },
            flv: {
                codec: "video/x-flv",
                flashCanPlay: !0,
                media: "video"
            }
        },
        _init: function () {
            var b = this;
            this.element.empty();
            this.status = a.extend({}, this.status);
            this.internal = a.extend({}, this.internal);
            this.internal.domNode = this.element.get(0);
            this.formats = [];
            this.solutions = [];
            this.require = {};
            this.htmlElement = {};
            this.html = {};
            this.html.audio = {};
            this.html.video = {};
            this.flash = {};
            this.css = {};
            this.css.cs = {};
            this.css.jq = {};
            this.ancestorJq = [];
            this.options.volume = this._limitValue(this.options.volume, 0, 1);
            a.each(this.options.supplied.toLowerCase().split(","), function (m, l) {
                var k = l.replace(/^\s+|\s+$/g, "");
                if (b.format[k]) {
                    var j = !1;
                    a.each(b.formats, function (n, e) {
                        if (k === e) {
                            return j = !0, !1
                        }
                    });
                    j || b.formats.push(k)
                }
            });
            a.each(this.options.solution.toLowerCase().split(","), function (m, l) {
                var k = l.replace(/^\s+|\s+$/g, "");
                if (b.solution[k]) {
                    var j = !1;
                    a.each(b.solutions, function (n, e) {
                        if (k === e) {
                            return j = !0, !1
                        }
                    });
                    j || b.solutions.push(k)
                }
            });
            this.internal.instance = "jp_" + this.count;
            this.instances[this.internal.instance] = this.element;
            this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
            this.internal.self = a.extend({}, {
                id: this.element.attr("id"),
                jq: this.element
            });
            this.internal.audio = a.extend({}, {
                id: this.options.idPrefix + "_audio_" + this.count,
                jq: d
            });
            this.internal.video = a.extend({}, {
                id: this.options.idPrefix + "_video_" + this.count,
                jq: d
            });
            this.internal.flash = a.extend({}, {
                id: this.options.idPrefix + "_flash_" + this.count,
                jq: d,
                swf: this.options.swfPath + (this.options.swfPath.toLowerCase().slice(-4) !== ".swf" ? (this.options.swfPath && this.options.swfPath.slice(-1) !== "/" ? "/" : "") + "Jplayer.swf" : "")
            });
            this.internal.poster = a.extend({}, {
                id: this.options.idPrefix + "_poster_" + this.count,
                jq: d
            });
            a.each(a.jPlayer.event, function (e, j) {
                b.options[e] !== d && (b.element.bind(j + ".jPlayer", b.options[e]), b.options[e] = d)
            });
            this.require.audio = !1;
            this.require.video = !1;
            a.each(this.formats, function (e, j) {
                b.require[b.format[j].media] = !0
            });
            this.options = this.require.video ? a.extend(!0, {}, this.optionsVideo, this.options) : a.extend(!0, {}, this.optionsAudio, this.options);
            this._setSize();
            this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
            this.status.noFullScreen = this._uaBlocklist(this.options.noFullScreen);
            this.status.noVolume = this._uaBlocklist(this.options.noVolume);
            this._restrictNativeVideoControls();
            this.htmlElement.poster = document.createElement("img");
            this.htmlElement.poster.id = this.internal.poster.id;
            this.htmlElement.poster.onload = function () {
                (!b.status.video || b.status.waitForPlay) && b.internal.poster.jq.show()
            };
            this.element.append(this.htmlElement.poster);
            this.internal.poster.jq = a("#" + this.internal.poster.id);
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            });
            this.internal.poster.jq.hide();
            this.internal.poster.jq.bind("click.jPlayer", function () {
                b._trigger(a.jPlayer.event.click)
            });
            this.html.audio.available = !1;
            if (this.require.audio) {
                this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !! this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)
            }
            this.html.video.available = !1;
            if (this.require.video) {
                this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !! this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)
            }
            this.flash.available = this._checkForFlash(10);
            this.html.canPlay = {};
            this.flash.canPlay = {};
            a.each(this.formats, function (e, j) {
                b.html.canPlay[j] = b.html[b.format[j].media].available && "" !== b.htmlElement[b.format[j].media].canPlayType(b.format[j].codec);
                b.flash.canPlay[j] = b.format[j].flashCanPlay && b.flash.available
            });
            this.html.desired = !1;
            this.flash.desired = !1;
            a.each(this.solutions, function (m, l) {
                if (m === 0) {
                    b[l].desired = !0
                } else {
                    var k = !1,
                        j = !1;
                    a.each(b.formats, function (e, n) {
                        b[b.solutions[0]].canPlay[n] && (b.format[n].media === "video" ? j = !0 : k = !0)
                    });
                    b[l].desired = b.require.audio && !k || b.require.video && !j
                }
            });
            this.html.support = {};
            this.flash.support = {};
            a.each(this.formats, function (e, j) {
                b.html.support[j] = b.html.canPlay[j] && b.html.desired;
                b.flash.support[j] = b.flash.canPlay[j] && b.flash.desired
            });
            this.html.used = !1;
            this.flash.used = !1;
            a.each(this.solutions, function (j, e) {
                a.each(b.formats, function (k, l) {
                    if (b[e].support[l]) {
                        return b[e].used = !0, !1
                    }
                })
            });
            this._resetActive();
            this._resetGate();
            this._cssSelectorAncestor(this.options.cssSelectorAncestor);
            !this.html.used && !this.flash.used ? (this._error({
                type: a.jPlayer.error.NO_SOLUTION,
                context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                message: a.jPlayer.errorMsg.NO_SOLUTION,
                hint: a.jPlayer.errorHint.NO_SOLUTION
            }), this.css.jq.noSolution.length && this.css.jq.noSolution.show()) : this.css.jq.noSolution.length && this.css.jq.noSolution.hide();
            if (this.flash.used) {
                var h, g = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                if (a.browser.msie && Number(a.browser.version) <= 8) {
                    g = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + g + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                    h = document.createElement('<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0"></object>');
                    for (var f = 0; f < g.length; f++) {
                        h.appendChild(document.createElement(g[f]))
                    }
                } else {
                    f = function (j, e, l) {
                        var k = document.createElement("param");
                        k.setAttribute("name", e);
                        k.setAttribute("value", l);
                        j.appendChild(k)
                    }, h = document.createElement("object"), h.setAttribute("id", this.internal.flash.id), h.setAttribute("data", this.internal.flash.swf), h.setAttribute("type", "application/x-shockwave-flash"), h.setAttribute("width", "1"), h.setAttribute("height", "1"), f(h, "flashvars", g), f(h, "allowscriptaccess", "always"), f(h, "bgcolor", this.options.backgroundColor), f(h, "wmode", this.options.wmode)
                }
                this.element.append(h);
                this.internal.flash.jq = a(h)
            }
            if (this.html.used) {
                if (this.html.audio.available) {
                    this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = a("#" + this.internal.audio.id)
                }
                if (this.html.video.available) {
                    this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = a("#" + this.internal.video.id), this.status.nativeVideoControls ? this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    }) : this.internal.video.jq.css({
                        width: "0px",
                        height: "0px"
                    }), this.internal.video.jq.bind("click.jPlayer", function () {
                        b._trigger(a.jPlayer.event.click)
                    })
                }
            }
            this.options.emulateHtml && this._emulateHtmlBridge();
            this.html.used && !this.flash.used && setTimeout(function () {
                b.internal.ready = !0;
                b.version.flash = "n/a";
                b._trigger(a.jPlayer.event.repeat);
                b._trigger(a.jPlayer.event.ready)
            }, 100);
            this._updateNativeVideoControls();
            this._updateInterface();
            this._updateButtons(!1);
            this._updateAutohide();
            this._updateVolume(this.options.volume);
            this._updateMute(this.options.muted);
            this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
            a.jPlayer.prototype.count++
        },
        destroy: function () {
            this.clearMedia();
            this._removeUiClass();
            this.css.jq.currentTime.length && this.css.jq.currentTime.text("");
            this.css.jq.duration.length && this.css.jq.duration.text("");
            a.each(this.css.jq, function (f, e) {
                e.length && e.unbind(".jPlayer")
            });
            this.internal.poster.jq.unbind(".jPlayer");
            this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer");
            this.options.emulateHtml && this._destroyHtmlBridge();
            this.element.removeData("jPlayer");
            this.element.unbind(".jPlayer");
            this.element.empty();
            delete this.instances[this.internal.instance]
        },
        enable: function () {},
        disable: function () {},
        _testCanPlayType: function (f) {
            try {
                return f.canPlayType(this.format.mp3.codec), !0
            } catch (e) {
                return !1
            }
        },
        _uaBlocklist: function (b) {
            var f = navigator.userAgent.toLowerCase(),
                e = !1;
            a.each(b, function (h, g) {
                if (g && g.test(f)) {
                    return e = !0, !1
                }
            });
            return e
        },
        _restrictNativeVideoControls: function () {
            if (this.require.audio && this.status.nativeVideoControls) {
                this.status.nativeVideoControls = !1, this.status.noFullScreen = !0
            }
        },
        _updateNativeVideoControls: function () {
            if (this.html.video.available && this.html.used) {
                this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                    width: this.status.width,
                    height: this.status.height
                })) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                }))
            }
        },
        _addHtmlEventListeners: function (b, f) {
            var e = this;
            b.preload = this.options.preload;
            b.muted = this.options.muted;
            b.volume = this.options.volume;
            b.addEventListener("progress", function () {
                f.gate && (e._getHtmlStatus(b), e._updateInterface(), e._trigger(a.jPlayer.event.progress))
            }, !1);
            b.addEventListener("timeupdate", function () {
                f.gate && (e._getHtmlStatus(b), e._updateInterface(), e._trigger(a.jPlayer.event.timeupdate))
            }, !1);
            b.addEventListener("durationchange", function () {
                if (f.gate) {
                    e.status.duration = this.duration, e._getHtmlStatus(b), e._updateInterface(), e._trigger(a.jPlayer.event.durationchange)
                }
            }, !1);
            b.addEventListener("play", function () {
                f.gate && (e._updateButtons(!0), e._html_checkWaitForPlay(), e._trigger(a.jPlayer.event.play))
            }, !1);
            b.addEventListener("playing", function () {
                f.gate && (e._updateButtons(!0), e._seeked(), e._trigger(a.jPlayer.event.playing))
            }, !1);
            b.addEventListener("pause", function () {
                f.gate && (e._updateButtons(!1), e._trigger(a.jPlayer.event.pause))
            }, !1);
            b.addEventListener("waiting", function () {
                f.gate && (e._seeking(), e._trigger(a.jPlayer.event.waiting))
            }, !1);
            b.addEventListener("seeking", function () {
                f.gate && (e._seeking(), e._trigger(a.jPlayer.event.seeking))
            }, !1);
            b.addEventListener("seeked", function () {
                f.gate && (e._seeked(), e._trigger(a.jPlayer.event.seeked))
            }, !1);
            b.addEventListener("volumechange", function () {
                if (f.gate) {
                    e.options.volume = b.volume, e.options.muted = b.muted, e._updateMute(), e._updateVolume(), e._trigger(a.jPlayer.event.volumechange)
                }
            }, !1);
            b.addEventListener("suspend", function () {
                f.gate && (e._seeked(), e._trigger(a.jPlayer.event.suspend))
            }, !1);
            b.addEventListener("ended", function () {
                if (f.gate) {
                    if (!a.jPlayer.browser.webkit) {
                        e.htmlElement.media.currentTime = 0
                    }
                    e.htmlElement.media.pause();
                    e._updateButtons(!1);
                    e._getHtmlStatus(b, !0);
                    e._updateInterface();
                    e._trigger(a.jPlayer.event.ended)
                }
            }, !1);
            b.addEventListener("error", function () {
                if (f.gate && (e._updateButtons(!1), e._seeked(), e.status.srcSet)) {
                    clearTimeout(e.internal.htmlDlyCmdId), e.status.waitForLoad = !0, e.status.waitForPlay = !0, e.status.video && !e.status.nativeVideoControls && e.internal.video.jq.css({
                        width: "0px",
                        height: "0px"
                    }), e._validString(e.status.media.poster) && !e.status.nativeVideoControls && e.internal.poster.jq.show(), e.css.jq.videoPlay.length && e.css.jq.videoPlay.show(), e._error({
                        type: a.jPlayer.error.URL,
                        context: e.status.src,
                        message: a.jPlayer.errorMsg.URL,
                        hint: a.jPlayer.errorHint.URL
                    })
                }
            }, !1);
            a.each(a.jPlayer.htmlEvent, function (j, h) {
                b.addEventListener(this, function () {
                    f.gate && e._trigger(a.jPlayer.event[h])
                }, !1)
            })
        },
        _getHtmlStatus: function (j, h) {
            var n = 0,
                m = 0,
                k = 0,
                l = 0;
            if (j.duration) {
                this.status.duration = j.duration
            }
            n = j.currentTime;
            m = this.status.duration > 0 ? 100 * n / this.status.duration : 0;
            typeof j.seekable === "object" && j.seekable.length > 0 ? (k = this.status.duration > 0 ? 100 * j.seekable.end(j.seekable.length - 1) / this.status.duration : 100, l = 100 * j.currentTime / j.seekable.end(j.seekable.length - 1)) : (k = 100, l = m);
            h && (m = l = n = 0);
            this.status.seekPercent = k;
            this.status.currentPercentRelative = l;
            this.status.currentPercentAbsolute = m;
            this.status.currentTime = n;
            this.status.readyState = j.readyState;
            this.status.networkState = j.networkState;
            this.status.playbackRate = j.playbackRate;
            this.status.ended = j.ended
        },
        _resetStatus: function () {
            this.status = a.extend({}, this.status, a.jPlayer.prototype.status)
        },
        _trigger: function (b, f, e) {
            b = a.Event(b);
            b.jPlayer = {};
            b.jPlayer.version = a.extend({}, this.version);
            b.jPlayer.options = a.extend(!0, {}, this.options);
            b.jPlayer.status = a.extend(!0, {}, this.status);
            b.jPlayer.html = a.extend(!0, {}, this.html);
            b.jPlayer.flash = a.extend(!0, {}, this.flash);
            if (f) {
                b.jPlayer.error = a.extend({}, f)
            }
            if (e) {
                b.jPlayer.warning = a.extend({}, e)
            }
            this.element.trigger(b)
        },
        jPlayerFlashEvent: function (b, h) {
            if (b === a.jPlayer.event.ready) {
                if (this.internal.ready) {
                    if (this.flash.gate) {
                        if (this.status.srcSet) {
                            var g = this.status.currentTime,
                                f = this.status.paused;
                            this.setMedia(this.status.media);
                            g > 0 && (f ? this.pause(g) : this.play(g))
                        }
                        this._trigger(a.jPlayer.event.flashreset)
                    }
                } else {
                    this.internal.ready = !0, this.internal.flash.jq.css({
                        width: "0px",
                        height: "0px"
                    }), this.version.flash = h.version, this.version.needFlash !== this.version.flash && this._error({
                        type: a.jPlayer.error.VERSION,
                        context: this.version.flash,
                        message: a.jPlayer.errorMsg.VERSION + this.version.flash,
                        hint: a.jPlayer.errorHint.VERSION
                    }), this._trigger(a.jPlayer.event.repeat), this._trigger(b)
                }
            }
            if (this.flash.gate) {
                switch (b) {
                    case a.jPlayer.event.progress:
                        this._getFlashStatus(h);
                        this._updateInterface();
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.timeupdate:
                        this._getFlashStatus(h);
                        this._updateInterface();
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.play:
                        this._seeked();
                        this._updateButtons(!0);
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.pause:
                        this._updateButtons(!1);
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.ended:
                        this._updateButtons(!1);
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.click:
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.error:
                        this.status.waitForLoad = !0;
                        this.status.waitForPlay = !0;
                        this.status.video && this.internal.flash.jq.css({
                            width: "0px",
                            height: "0px"
                        });
                        this._validString(this.status.media.poster) && this.internal.poster.jq.show();
                        this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show();
                        this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media);
                        this._updateButtons(!1);
                        this._error({
                            type: a.jPlayer.error.URL,
                            context: h.src,
                            message: a.jPlayer.errorMsg.URL,
                            hint: a.jPlayer.errorHint.URL
                        });
                        break;
                    case a.jPlayer.event.seeking:
                        this._seeking();
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.seeked:
                        this._seeked();
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.ready:
                        break;
                    default:
                        this._trigger(b)
                }
            }
            return !1
        },
        _getFlashStatus: function (b) {
            this.status.seekPercent = b.seekPercent;
            this.status.currentPercentRelative = b.currentPercentRelative;
            this.status.currentPercentAbsolute = b.currentPercentAbsolute;
            this.status.currentTime = b.currentTime;
            this.status.duration = b.duration;
            this.status.readyState = 4;
            this.status.networkState = 0;
            this.status.playbackRate = 1;
            this.status.ended = !1
        },
        _updateButtons: function (b) {
            if (b !== d) {
                this.status.paused = !b, this.css.jq.play.length && this.css.jq.pause.length && (b ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide()))
            }
            this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullScreen ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullScreen ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide()));
            this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
        },
        _updateInterface: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%");
            this.css.jq.playBar.length && this.css.jq.playBar.width(this.status.currentPercentRelative + "%");
            this.css.jq.currentTime.length && this.css.jq.currentTime.text(a.jPlayer.convertTime(this.status.currentTime));
            this.css.jq.duration.length && this.css.jq.duration.text(a.jPlayer.convertTime(this.status.duration))
        },
        _seeking: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
        },
        _seeked: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
        },
        _resetGate: function () {
            this.html.audio.gate = !1;
            this.html.video.gate = !1;
            this.flash.gate = !1
        },
        _resetActive: function () {
            this.html.active = !1;
            this.flash.active = !1
        },
        setMedia: function (b) {
            var h = this,
                g = !1,
                f = this.status.media.poster !== b.poster;
            this._resetMedia();
            this._resetGate();
            this._resetActive();
            a.each(this.formats, function (l, k) {
                var j = h.format[k].media === "video";
                a.each(h.solutions, function (m, o) {
                    if (h[o].support[k] && h._validString(b[k])) {
                        var n = o === "html";
                        j ? (n ? (h.html.video.gate = !0, h._html_setVideo(b), h.html.active = !0) : (h.flash.gate = !0, h._flash_setVideo(b), h.flash.active = !0), h.css.jq.videoPlay.length && h.css.jq.videoPlay.show(), h.status.video = !0) : (n ? (h.html.audio.gate = !0, h._html_setAudio(b), h.html.active = !0) : (h.flash.gate = !0, h._flash_setAudio(b), h.flash.active = !0), h.css.jq.videoPlay.length && h.css.jq.videoPlay.hide(), h.status.video = !1);
                        g = !0;
                        return !1
                    }
                });
                if (g) {
                    return !1
                }
            });
            if (g) {
                if ((!this.status.nativeVideoControls || !this.html.video.gate) && this._validString(b.poster)) {
                    f ? this.htmlElement.poster.src = b.poster : this.internal.poster.jq.show()
                }
                this.status.srcSet = !0;
                this.status.media = a.extend({}, b);
                this._updateButtons(!1);
                this._updateInterface()
            } else {
                this._error({
                    type: a.jPlayer.error.NO_SUPPORT,
                    context: "{supplied:'" + this.options.supplied + "'}",
                    message: a.jPlayer.errorMsg.NO_SUPPORT,
                    hint: a.jPlayer.errorHint.NO_SUPPORT
                })
            }
        },
        _resetMedia: function () {
            this._resetStatus();
            this._updateButtons(!1);
            this._updateInterface();
            this._seeked();
            this.internal.poster.jq.hide();
            clearTimeout(this.internal.htmlDlyCmdId);
            this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
        },
        clearMedia: function () {
            this._resetMedia();
            this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia();
            this._resetGate();
            this._resetActive()
        },
        load: function () {
            this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
        },
        play: function (b) {
            b = typeof b === "number" ? b : NaN;
            this.status.srcSet ? this.html.active ? this._html_play(b) : this.flash.active && this._flash_play(b) : this._urlNotSetError("play")
        },
        videoPlay: function () {
            this.play()
        },
        pause: function (b) {
            b = typeof b === "number" ? b : NaN;
            this.status.srcSet ? this.html.active ? this._html_pause(b) : this.flash.active && this._flash_pause(b) : this._urlNotSetError("pause")
        },
        pauseOthers: function () {
            var b = this;
            a.each(this.instances, function (e, f) {
                b.element !== f && f.data("jPlayer").status.srcSet && f.jPlayer("pause")
            })
        },
        stop: function () {
            this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
        },
        playHead: function (b) {
            b = this._limitValue(b, 0, 100);
            this.status.srcSet ? this.html.active ? this._html_playHead(b) : this.flash.active && this._flash_playHead(b) : this._urlNotSetError("playHead")
        },
        _muted: function (b) {
            this.options.muted = b;
            this.html.used && this._html_mute(b);
            this.flash.used && this._flash_mute(b);
            !this.html.video.gate && !this.html.audio.gate && (this._updateMute(b), this._updateVolume(this.options.volume), this._trigger(a.jPlayer.event.volumechange))
        },
        mute: function (b) {
            b = b === d ? !0 : !! b;
            this._muted(b)
        },
        unmute: function (b) {
            b = b === d ? !0 : !! b;
            this._muted(!b)
        },
        _updateMute: function (b) {
            if (b === d) {
                b = this.options.muted
            }
            this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : b ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
        },
        volume: function (b) {
            b = this._limitValue(b, 0, 1);
            this.options.volume = b;
            this.html.used && this._html_volume(b);
            this.flash.used && this._flash_volume(b);
            !this.html.video.gate && !this.html.audio.gate && (this._updateVolume(b), this._trigger(a.jPlayer.event.volumechange))
        },
        volumeBar: function (g) {
            if (this.css.jq.volumeBar.length) {
                var f = this.css.jq.volumeBar.offset(),
                    j = g.pageX - f.left,
                    h = this.css.jq.volumeBar.width(),
                    g = this.css.jq.volumeBar.height() - g.pageY + f.top,
                    f = this.css.jq.volumeBar.height();
                this.options.verticalVolume ? this.volume(g / f) : this.volume(j / h)
            }
            this.options.muted && this._muted(!1)
        },
        volumeBarValue: function (b) {
            this.volumeBar(b)
        },
        _updateVolume: function (b) {
            if (b === d) {
                b = this.options.volume
            }
            b = this.options.muted ? 0 : b;
            this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](b * 100 + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
        },
        volumeMax: function () {
            this.volume(1);
            this.options.muted && this._muted(!1)
        },
        _cssSelectorAncestor: function (b) {
            var e = this;
            this.options.cssSelectorAncestor = b;
            this._removeUiClass();
            this.ancestorJq = b ? a(b) : [];
            b && this.ancestorJq.length !== 1 && this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: b,
                message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
            });
            this._addUiClass();
            a.each(this.options.cssSelector, function (g, f) {
                e._cssSelector(g, f)
            })
        },
        _cssSelector: function (b, f) {
            var e = this;
            typeof f === "string" ? a.jPlayer.prototype.options.cssSelector[b] ? (this.css.jq[b] && this.css.jq[b].length && this.css.jq[b].unbind(".jPlayer"), this.options.cssSelector[b] = f, this.css.cs[b] = this.options.cssSelectorAncestor + " " + f, this.css.jq[b] = f ? a(this.css.cs[b]) : [], this.css.jq[b].length && this.css.jq[b].bind("click.jPlayer", function (g) {
                e[b](g);
                a(this).blur();
                return !1
            }), f && this.css.jq[b].length !== 1 && this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: this.css.cs[b],
                message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[b].length + " found for " + b + " method.",
                hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
            })) : this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_METHOD,
                context: b,
                message: a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                hint: a.jPlayer.warningHint.CSS_SELECTOR_METHOD
            }) : this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_STRING,
                context: f,
                message: a.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                hint: a.jPlayer.warningHint.CSS_SELECTOR_STRING
            })
        },
        seekBar: function (f) {
            if (this.css.jq.seekBar) {
                var e = this.css.jq.seekBar.offset(),
                    f = f.pageX - e.left,
                    e = this.css.jq.seekBar.width();
                this.playHead(100 * f / e)
            }
        },
        playBar: function (b) {
            this.seekBar(b)
        },
        repeat: function () {
            this._loop(!0)
        },
        repeatOff: function () {
            this._loop(!1)
        },
        _loop: function (b) {
            if (this.options.loop !== b) {
                this.options.loop = b, this._updateButtons(), this._trigger(a.jPlayer.event.repeat)
            }
        },
        currentTime: function () {},
        duration: function () {},
        gui: function () {},
        noSolution: function () {},
        option: function (b, m) {
            var l = b;
            if (arguments.length === 0) {
                return a.extend(!0, {}, this.options)
            }
            if (typeof b === "string") {
                var k = b.split(".");
                if (m === d) {
                    for (var l = a.extend(!0, {}, this.options), j = 0; j < k.length; j++) {
                        if (l[k[j]] !== d) {
                            l = l[k[j]]
                        } else {
                            return this._warning({
                                type: a.jPlayer.warning.OPTION_KEY,
                                context: b,
                                message: a.jPlayer.warningMsg.OPTION_KEY,
                                hint: a.jPlayer.warningHint.OPTION_KEY
                            }), d
                        }
                    }
                    return l
                }
                for (var j = l = {}, f = 0; f < k.length; f++) {
                    f < k.length - 1 ? (j[k[f]] = {}, j = j[k[f]]) : j[k[f]] = m
                }
            }
            this._setOptions(l);
            return this
        },
        _setOptions: function (b) {
            var e = this;
            a.each(b, function (g, f) {
                e._setOption(g, f)
            });
            return this
        },
        _setOption: function (b, f) {
            var e = this;
            switch (b) {
                case "volume":
                    this.volume(f);
                    break;
                case "muted":
                    this._muted(f);
                    break;
                case "cssSelectorAncestor":
                    this._cssSelectorAncestor(f);
                    break;
                case "cssSelector":
                    a.each(f, function (h, g) {
                        e._cssSelector(h, g)
                    });
                    break;
                case "fullScreen":
                    this.options[b] !== f && (this._removeUiClass(), this.options[b] = f, this._refreshSize());
                    break;
                case "size":
                    !this.options.fullScreen && this.options[b].cssClass !== f.cssClass && this._removeUiClass();
                    this.options[b] = a.extend({}, this.options[b], f);
                    this._refreshSize();
                    break;
                case "sizeFull":
                    this.options.fullScreen && this.options[b].cssClass !== f.cssClass && this._removeUiClass();
                    this.options[b] = a.extend({}, this.options[b], f);
                    this._refreshSize();
                    break;
                case "autohide":
                    this.options[b] = a.extend({}, this.options[b], f);
                    this._updateAutohide();
                    break;
                case "loop":
                    this._loop(f);
                    break;
                case "nativeVideoControls":
                    this.options[b] = a.extend({}, this.options[b], f);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this._restrictNativeVideoControls();
                    this._updateNativeVideoControls();
                    break;
                case "noFullScreen":
                    this.options[b] = a.extend({}, this.options[b], f);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this.status.noFullScreen = this._uaBlocklist(this.options.noFullScreen);
                    this._restrictNativeVideoControls();
                    this._updateButtons();
                    break;
                case "noVolume":
                    this.options[b] = a.extend({}, this.options[b], f);
                    this.status.noVolume = this._uaBlocklist(this.options.noVolume);
                    this._updateVolume();
                    this._updateMute();
                    break;
                case "emulateHtml":
                    this.options[b] !== f && ((this.options[b] = f) ? this._emulateHtmlBridge() : this._destroyHtmlBridge())
            }
            return this
        },
        _refreshSize: function () {
            this._setSize();
            this._addUiClass();
            this._updateSize();
            this._updateButtons();
            this._updateAutohide();
            this._trigger(a.jPlayer.event.resize)
        },
        _setSize: function () {
            this.options.fullScreen ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass);
            this.element.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _addUiClass: function () {
            this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
        },
        _removeUiClass: function () {
            this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
        },
        _updateSize: function () {
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            });
            !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _updateAutohide: function () {
            var f = this,
                e = function () {
                    f.css.jq.gui.fadeIn(f.options.autohide.fadeIn, function () {
                        clearTimeout(f.internal.autohideId);
                        f.internal.autohideId = setTimeout(function () {
                            f.css.jq.gui.fadeOut(f.options.autohide.fadeOut)
                        }, f.options.autohide.hold)
                    })
                };
            this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(".jPlayerAutohide"), this.css.jq.gui.unbind(".jPlayerAutohide"), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullScreen && this.options.autohide.full || !this.options.fullScreen && this.options.autohide.restored ? (this.element.bind("mousemove.jPlayer.jPlayerAutohide", e), this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide", e), this.css.jq.gui.hide()) : this.css.jq.gui.show())
        },
        fullScreen: function () {
            this._setOption("fullScreen", !0)
        },
        restoreScreen: function () {
            this._setOption("fullScreen", !1)
        },
        _html_initMedia: function () {
            this.htmlElement.media.src = this.status.src;
            this.options.preload !== "none" && this._html_load();
            this._trigger(a.jPlayer.event.timeupdate)
        },
        _html_setAudio: function (b) {
            var e = this;
            a.each(this.formats, function (f, g) {
                if (e.html.support[g] && b[g]) {
                    return e.status.src = b[g], e.status.format[g] = !0, e.status.formatType = g, !1
                }
            });
            this.htmlElement.media = this.htmlElement.audio;
            this._html_initMedia()
        },
        _html_setVideo: function (b) {
            var e = this;
            a.each(this.formats, function (f, g) {
                if (e.html.support[g] && b[g]) {
                    return e.status.src = b[g], e.status.format[g] = !0, e.status.formatType = g, !1
                }
            });
            if (this.status.nativeVideoControls) {
                this.htmlElement.video.poster = this._validString(b.poster) ? b.poster : ""
            }
            this.htmlElement.media = this.htmlElement.video;
            this._html_initMedia()
        },
        _html_resetMedia: function () {
            this.htmlElement.media && (this.htmlElement.media.id === this.internal.video.id && !this.status.nativeVideoControls && this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.htmlElement.media.pause())
        },
        _html_clearMedia: function () {
            if (this.htmlElement.media) {
                this.htmlElement.media.src = "", this.htmlElement.media.load()
            }
        },
        _html_load: function () {
            if (this.status.waitForLoad) {
                this.status.waitForLoad = !1, this.htmlElement.media.load()
            }
            clearTimeout(this.internal.htmlDlyCmdId)
        },
        _html_play: function (f) {
            var e = this;
            this._html_load();
            this.htmlElement.media.play();
            if (!isNaN(f)) {
                try {
                    this.htmlElement.media.currentTime = f
                } catch (g) {
                    this.internal.htmlDlyCmdId = setTimeout(function () {
                        e.play(f)
                    }, 100);
                    return
                }
            }
            this._html_checkWaitForPlay()
        },
        _html_pause: function (f) {
            var e = this;
            f > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId);
            this.htmlElement.media.pause();
            if (!isNaN(f)) {
                try {
                    this.htmlElement.media.currentTime = f
                } catch (g) {
                    this.internal.htmlDlyCmdId = setTimeout(function () {
                        e.pause(f)
                    }, 100);
                    return
                }
            }
            f > 0 && this._html_checkWaitForPlay()
        },
        _html_playHead: function (f) {
            var e = this;
            this._html_load();
            try {
                if (typeof this.htmlElement.media.seekable === "object" && this.htmlElement.media.seekable.length > 0) {
                    this.htmlElement.media.currentTime = f * this.htmlElement.media.seekable.end(this.htmlElement.media.seekable.length - 1) / 100
                } else {
                    if (this.htmlElement.media.duration > 0 && !isNaN(this.htmlElement.media.duration)) {
                        this.htmlElement.media.currentTime = f * this.htmlElement.media.duration / 100
                    } else {
                        throw "e"
                    }
                }
            } catch (g) {
                this.internal.htmlDlyCmdId = setTimeout(function () {
                    e.playHead(f)
                }, 100);
                return
            }
            this.status.waitForLoad || this._html_checkWaitForPlay()
        },
        _html_checkWaitForPlay: function () {
            if (this.status.waitForPlay) {
                this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                    width: this.status.width,
                    height: this.status.height
                }))
            }
        },
        _html_volume: function (b) {
            if (this.html.audio.available) {
                this.htmlElement.audio.volume = b
            }
            if (this.html.video.available) {
                this.htmlElement.video.volume = b
            }
        },
        _html_mute: function (b) {
            if (this.html.audio.available) {
                this.htmlElement.audio.muted = b
            }
            if (this.html.video.available) {
                this.htmlElement.video.muted = b
            }
        },
        _flash_setAudio: function (b) {
            var f = this;
            try {
                if (a.each(this.formats, function (g, h) {
                    if (f.flash.support[h] && b[h]) {
                        switch (h) {
                            case "m4a":
                            case "fla":
                                f._getMovie().fl_setAudio_m4a(b[h]);
                                break;
                            case "mp3":
                                f._getMovie().fl_setAudio_mp3(b[h])
                        }
                        f.status.src = b[h];
                        f.status.format[h] = !0;
                        f.status.formatType = h;
                        return !1
                    }
                }), this.options.preload === "auto") {
                    this._flash_load(), this.status.waitForLoad = !1
                }
            } catch (e) {
                this._flashError(e)
            }
        },
        _flash_setVideo: function (b) {
            var f = this;
            try {
                if (a.each(this.formats, function (g, h) {
                    if (f.flash.support[h] && b[h]) {
                        switch (h) {
                            case "m4v":
                            case "flv":
                                f._getMovie().fl_setVideo_m4v(b[h])
                        }
                        f.status.src = b[h];
                        f.status.format[h] = !0;
                        f.status.formatType = h;
                        return !1
                    }
                }), this.options.preload === "auto") {
                    this._flash_load(), this.status.waitForLoad = !1
                }
            } catch (e) {
                this._flashError(e)
            }
        },
        _flash_resetMedia: function () {
            this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            });
            this._flash_pause(NaN)
        },
        _flash_clearMedia: function () {
            try {
                this._getMovie().fl_clearMedia()
            } catch (b) {
                this._flashError(b)
            }
        },
        _flash_load: function () {
            try {
                this._getMovie().fl_load()
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad = !1
        },
        _flash_play: function (f) {
            try {
                this._getMovie().fl_play(f)
            } catch (e) {
                this._flashError(e)
            }
            this.status.waitForLoad = !1;
            this._flash_checkWaitForPlay()
        },
        _flash_pause: function (f) {
            try {
                this._getMovie().fl_pause(f)
            } catch (e) {
                this._flashError(e)
            }
            if (f > 0) {
                this.status.waitForLoad = !1, this._flash_checkWaitForPlay()
            }
        },
        _flash_playHead: function (f) {
            try {
                this._getMovie().fl_play_head(f)
            } catch (e) {
                this._flashError(e)
            }
            this.status.waitForLoad || this._flash_checkWaitForPlay()
        },
        _flash_checkWaitForPlay: function () {
            if (this.status.waitForPlay) {
                this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({
                    width: this.status.width,
                    height: this.status.height
                }))
            }
        },
        _flash_volume: function (f) {
            try {
                this._getMovie().fl_volume(f)
            } catch (e) {
                this._flashError(e)
            }
        },
        _flash_mute: function (f) {
            try {
                this._getMovie().fl_mute(f)
            } catch (e) {
                this._flashError(e)
            }
        },
        _getMovie: function () {
            return document[this.internal.flash.id]
        },
        _checkForFlash: function (g) {
            var f = !1,
                j;
            if (window.ActiveXObject) {
                try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + g), f = !0
                } catch (h) {}
            } else {
                navigator.plugins && navigator.mimeTypes.length > 0 && (j = navigator.plugins["Shockwave Flash"]) && navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1") >= g && (f = !0)
            }
            return f
        },
        _validString: function (b) {
            return b && typeof b === "string"
        },
        _limitValue: function (f, e, g) {
            return f < e ? e : f > g ? g : f
        },
        _urlNotSetError: function (b) {
            this._error({
                type: a.jPlayer.error.URL_NOT_SET,
                context: b,
                message: a.jPlayer.errorMsg.URL_NOT_SET,
                hint: a.jPlayer.errorHint.URL_NOT_SET
            })
        },
        _flashError: function (b) {
            var e;
            e = this.internal.ready ? "FLASH_DISABLED" : "FLASH";
            this._error({
                type: a.jPlayer.error[e],
                context: this.internal.flash.swf,
                message: a.jPlayer.errorMsg[e] + b.message,
                hint: a.jPlayer.errorHint[e]
            });
            this.internal.flash.jq.css({
                width: "1px",
                height: "1px"
            })
        },
        _error: function (b) {
            this._trigger(a.jPlayer.event.error, b);
            this.options.errorAlerts && this._alert("Error!" + (b.message ? "\n\n" + b.message : "") + (b.hint ? "\n\n" + b.hint : "") + "\n\nContext: " + b.context)
        },
        _warning: function (b) {
            this._trigger(a.jPlayer.event.warning, d, b);
            this.options.warningAlerts && this._alert("Warning!" + (b.message ? "\n\n" + b.message : "") + (b.hint ? "\n\n" + b.hint : "") + "\n\nContext: " + b.context)
        },
        _alert: function (b) {
            alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + b)
        },
        _emulateHtmlBridge: function () {
            var b = this;
            a.each(a.jPlayer.emulateMethods.split(/\s+/g), function (e, f) {
                b.internal.domNode[f] = function (g) {
                    b[f](g)
                }
            });
            a.each(a.jPlayer.event, function (h, g) {
                var f = !0;
                a.each(a.jPlayer.reservedEvent.split(/\s+/g), function (j, e) {
                    if (e === h) {
                        return f = !1
                    }
                });
                f && b.element.bind(g + ".jPlayer.jPlayerHtml", function () {
                    b._emulateHtmlUpdate();
                    var e = document.createEvent("Event");
                    e.initEvent(h, !1, !0);
                    b.internal.domNode.dispatchEvent(e)
                })
            })
        },
        _emulateHtmlUpdate: function () {
            var b = this;
            a.each(a.jPlayer.emulateStatus.split(/\s+/g), function (e, f) {
                b.internal.domNode[f] = b.status[f]
            });
            a.each(a.jPlayer.emulateOptions.split(/\s+/g), function (e, f) {
                b.internal.domNode[f] = b.options[f]
            })
        },
        _destroyHtmlBridge: function () {
            var b = this;
            this.element.unbind(".jPlayerHtml");
            a.each((a.jPlayer.emulateMethods + " " + a.jPlayer.emulateStatus + " " + a.jPlayer.emulateOptions).split(/\s+/g), function (e, f) {
                delete b.internal.domNode[f]
            })
        }
    };
    a.jPlayer.error = {
        FLASH: "e_flash",
        FLASH_DISABLED: "e_flash_disabled",
        NO_SOLUTION: "e_no_solution",
        NO_SUPPORT: "e_no_support",
        URL: "e_url",
        URL_NOT_SET: "e_url_not_set",
        VERSION: "e_version"
    };
    a.jPlayer.errorMsg = {
        FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
        FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
        NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
        NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
        URL: "Media URL could not be loaded.",
        URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
        VERSION: "jPlayer " + a.jPlayer.prototype.version.script + " needs Jplayer.swf version " + a.jPlayer.prototype.version.needFlash + " but found "
    };
    a.jPlayer.errorHint = {
        FLASH: "Check your swfPath option and that Jplayer.swf is there.",
        FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
        NO_SOLUTION: "Review the jPlayer options: support and supplied.",
        NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
        URL: "Check media URL is valid.",
        URL_NOT_SET: "Use setMedia() to set the media URL.",
        VERSION: "Update jPlayer files."
    };
    a.jPlayer.warning = {
        CSS_SELECTOR_COUNT: "e_css_selector_count",
        CSS_SELECTOR_METHOD: "e_css_selector_method",
        CSS_SELECTOR_STRING: "e_css_selector_string",
        OPTION_KEY: "e_option_key"
    };
    a.jPlayer.warningMsg = {
        CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
        CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
        CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
        OPTION_KEY: "The option requested in jPlayer('option') is undefined."
    };
    a.jPlayer.warningHint = {
        CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
        CSS_SELECTOR_METHOD: "Check your method name.",
        CSS_SELECTOR_STRING: "Check your css selector is a string.",
        OPTION_KEY: "Check your option name."
    }
})(jQuery);
/*
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var Mustache = (typeof module !== "undefined" && module.exports) || {};
(function (x) {
    x.name = "mustache.js";
    x.version = "0.5.0-dev";
    x.tags = ["{{", "}}"];
    x.parse = o;
    x.compile = f;
    x.render = w;
    x.clearCache = v;
    x.to_html = w;
    var u = Object.prototype.toString;
    var g = Array.isArray;
    var c = Array.prototype.forEach;
    var h = String.prototype.trim;
    var k;
    if (g) {
        k = g
    } else {
        k = function (y) {
            return u.call(y) === "[object Array]"
        }
    }
    var t;
    if (c) {
        t = function (z, A, y) {
            return c.call(z, A, y)
        }
    } else {
        t = function (B, C, A) {
            for (var z = 0, y = B.length; z < y; ++z) {
                C.call(A, B[z], z, B)
            }
        }
    }
    var l = /^\s*$/;

    function d(y) {
        return l.test(y)
    }
    var r;
    if (h) {
        r = function (y) {
            return y == null ? "" : h.call(y)
        }
    } else {
        var p, j;
        if (d("\xA0")) {
            p = /^\s+/;
            j = /\s+$/
        } else {
            p = /^[\s\xA0]+/;
            j = /[\s\xA0]+$/
        }
        r = function (y) {
            return y == null ? "" : String(y).replace(p, "").replace(j, "")
        }
    }
    var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };

    function q(y) {
        return String(y).replace(/&(?!\w+;)|[<>"']/g, function (z) {
            return e[z] || z
        })
    }
    function m(E, G, H, A) {
        A = A || "<template>";
        var I = G.split("\n"),
            y = Math.max(H - 3, 0),
            B = Math.min(I.length, H + 3),
            z = I.slice(y, B);
        var F;
        for (var C = 0, D = z.length; C < D; ++C) {
            F = C + y + 1;
            z[C] = (F === H ? " >> " : "    ") + z[C]
        }
        E.template = G;
        E.line = H;
        E.file = A;
        E.message = [A + ":" + H, z.join("\n"), "", E.message].join("\n");
        return E
    }
    function n(y, F) {
        var E = y.split(".");
        var C = E.length - 1;
        var D = E[C];
        var G, z, B = F.length,
            A, H;
        while (B) {
            H = F.slice(0);
            z = F[--B];
            A = 0;
            while (A < C) {
                z = z[E[A++]];
                if (z == null) {
                    break
                }
                H.push(z)
            }
            if (z && D in z) {
                G = z[D];
                break
            }
        }
        if (typeof G === "function") {
            G = G.call(H[H.length - 1])
        }
        return G == null ? "" : G
    }
    function a(C, B, E, y, z) {
        if (z) {
            if (B == null || B === false || (k(B) && B.length === 0)) {
                C(E())
            }
        } else {
            if (k(B)) {
                t(B, function (F) {
                    y.push(F);
                    C(E());
                    y.pop()
                })
            } else {
                if (typeof B === "object") {
                    y.push(B);
                    C(E());
                    y.pop()
                } else {
                    if (typeof B === "function") {
                        var A = y[y.length - 1];
                        var D = function (F) {
                            return w(F, A)
                        };
                        C(B.call(A, E(), D) || "")
                    } else {
                        if (B) {
                            C(E())
                        }
                    }
                }
            }
        }
    }
    function o(ab, D) {
        D = D || {};
        var M = D.tags || x.tags,
            N = M[0],
            I = M[M.length - 1];
        var z = ["var line = 1;", "\ntry {", '\nsend("'];
        var H = [],
            Z = false;
        var X = function () {
            if (!Z && !D.space) {
                while (H.length) {
                    z.splice(H.pop(), 1)
                }
            } else {
                H = []
            }
            Z = false
        };
        var B = function (ac) {
            return ac === "." ? "stack[stack.length - 1]" : 'find("' + ac + '")'
        };
        var U = [],
            R, E, O;
        var W = function (ac) {
            M = r(ac).split(/\s+/);
            E = M[0];
            O = M[M.length - 1]
        };
        var L = function (ac) {
            z.push('");', R, '\nvar partial = partials["' + r(ac) + '"];', "\nif (partial) {", "\n  send(render(partial, stack[stack.length - 1], partials));", "\n}", '\nsend("')
        };
        var y = function (ae, ac) {
            var ad = r(ae);
            if (ad === "") {
                throw m(new Error("Section name may not be empty"), ab, K, D.file)
            }
            U.push({
                name: ad,
                inverted: ac
            });
            z.push('");', R, "\nvar value = " + B(ad) + ";", "\nvar callback = (function () {", "\n  var buffer, send = function (chunk) { buffer.push(chunk); };", "\n  return function () {", "\n    buffer = [];", '\nsend("')
        };
        var G = function (ac) {
            y(ac, true)
        };
        var V = function (ad) {
            var ac = r(ad);
            var af = U.length != 0 && U[U.length - 1].name;
            if (!af || ac != af) {
                throw m(new Error('Section named "' + ac + '" was never opened'), ab, K, file)
            }
            var ae = U.pop();
            z.push('");', '\n    return buffer.join("");', "\n  };", "\n})();");
            if (ae.inverted) {
                z.push("\nsendSection(send,value,callback,stack,true);")
            } else {
                z.push("\nsendSection(send,value,callback,stack);")
            }
            z.push('\nsend("')
        };
        var Y = function (ac) {
            z.push('");', R, "\nsend(" + B(r(ac)) + ");", '\nsend("')
        };
        var A = function (ac) {
            z.push('");', R, "\nsend(escapeHTML(" + B(r(ac)) + "));", '\nsend("')
        };
        var K = 1,
            aa, F;
        for (var S = 0, T = ab.length; S < T; ++S) {
            if (ab.slice(S, S + N.length) === N) {
                S += N.length;
                aa = ab.substr(S, 1);
                R = "\nline = " + K + ";";
                E = N;
                O = I;
                switch (aa) {
                    case "!":
                        S++;
                        F = null;
                        break;
                    case "=":
                        S++;
                        I = "=" + I;
                        F = W;
                        break;
                    case ">":
                        S++;
                        F = L;
                        break;
                    case "#":
                        S++;
                        F = y;
                        break;
                    case "^":
                        S++;
                        F = G;
                        break;
                    case "/":
                        S++;
                        F = V;
                        break;
                    case "{":
                        I = "}" + I;
                    case "&":
                        S++;
                        Z = true;
                        F = Y;
                        break;
                    default:
                        Z = true;
                        F = A
                }
                var C = ab.indexOf(I, S);
                if (C === -1) {
                    throw m(new Error('Tag "' + N + '" was not closed properly'), ab, K, D.file)
                }
                var Q = ab.substring(S, C);
                if (F) {
                    F(Q)
                }
                var P = 0;
                while (~(P = Q.indexOf("\n", P))) {
                    K++;
                    P++
                }
                S = C + I.length - 1;
                N = E;
                I = O
            } else {
                aa = ab.substr(S, 1);
                switch (aa) {
                    case '"':
                    case "\\":
                        Z = true;
                        z.push("\\" + aa);
                        break;
                    case "\n":
                        H.push(z.length);
                        z.push("\\n");
                        X();
                        K++;
                        break;
                    default:
                        if (d(aa)) {
                            H.push(z.length)
                        } else {
                            Z = true
                        }
                        z.push(aa)
                }
            }
        }
        if (U.length != 0) {
            throw m(new Error('Section "' + U[U.length - 1].name + '" was not closed properly'), ab, K, D.file)
        }
        X();
        z.push('");', "\nsend(null);", "\n} catch (e) { throw {error: e, line: line}; }");
        var J = z.join("").replace(/send\(""\);\n/g, "");
        if (D.debug) {
            if (typeof console != "undefined" && console.log) {
                console.log(J)
            } else {
                if (typeof print === "function") {
                    print(J)
                }
            }
        }
        return J
    }
    function s(C, A) {
        var z = "view,partials,send,stack,find,escapeHTML,sendSection,render";
        var y = o(C, A);
        var B = new Function(z, y);
        return function (F, G, K) {
            if (typeof G === "function") {
                K = G;
                G = {}
            }
            G = G || {};
            var E = [];
            var I = K || function (L) {
                    E.push(L)
                };
            var D = [F];
            var J = function (L) {
                return n(L, D)
            };
            try {
                B(F, G, I, D, J, q, a, w)
            } catch (H) {
                throw m(H.error, C, H.line, A.file)
            }
            return E.join("")
        }
    }
    var b = {};

    function v() {
        b = {}
    }
    function f(z, y) {
        y = y || {};
        if (y.cache !== false) {
            if (!b[z]) {
                b[z] = s(z, y)
            }
            return b[z]
        }
        return s(z, y)
    }
    function w(A, y, z, B) {
        return f(A)(y, z, B)
    }
})(Mustache);
(function (j, m, s, o, k) {
    var q = s.createElement("div"),
        g = q.style,
        c = "Transform",
        z = ["O" + c, "ms" + c, "Webkit" + c, "Moz" + c],
        w = z.length,
        a, h, D = "Float32Array" in m,
        G, t, C = /Matrix([^)]*)/,
        n = /^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,
        F = "transform",
        H = "transformOrigin",
        E = "translate",
        e = "rotate",
        p = "scale",
        y = "skew",
        b = "matrix";
    while (w--) {
        if (z[w] in g) {
            j.support[F] = a = z[w];
            j.support[H] = a + "Origin";
            continue
        }
    }
    if (!a) {
        j.support.matrixFilter = h = g.filter === ""
    }
    j.cssNumber[F] = j.cssNumber[H] = true;
    if (a && a != F) {
        j.cssProps[F] = a;
        j.cssProps[H] = a + "Origin";
        if (a == "Moz" + c) {
            G = {
                get: function (J, I) {
                    return (I ? j.css(J, a).split("px").join("") : J.style[a])
                },
                set: function (I, J) {
                    I.style[a] = /matrix\([^)p]*\)/.test(J) ? J.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, b + "$1$2px,$3px") : J
                }
            }
        } else {
            if (/^1\.[0-5](?:\.|$)/.test(j.fn.jquery)) {
                G = {
                    get: function (J, I) {
                        return (I ? j.css(J, a.replace(/^ms/, "Ms")) : J.style[a])
                    }
                }
            }
        }
    } else {
        if (h) {
            G = {
                get: function (M, L, I) {
                    var K = (L && M.currentStyle ? M.currentStyle : M.style),
                        J, N;
                    if (K && C.test(K.filter)) {
                        J = RegExp.$1.split(",");
                        J = [J[0].split("=")[1], J[2].split("=")[1], J[1].split("=")[1], J[3].split("=")[1]]
                    } else {
                        J = [1, 0, 0, 1]
                    } if (!j.cssHooks[H]) {
                        J[4] = K ? parseInt(K.left, 10) || 0 : 0;
                        J[5] = K ? parseInt(K.top, 10) || 0 : 0
                    } else {
                        N = j._data(M, "transformTranslate", k);
                        J[4] = N ? N[0] : 0;
                        J[5] = N ? N[1] : 0
                    }
                    return I ? J : b + "(" + J + ")"
                },
                set: function (O, P, K) {
                    var J = O.style,
                        L, I, N, M;
                    if (!K) {
                        J.zoom = 1
                    }
                    P = v(P);
                    I = ["Matrix(M11=" + P[0], "M12=" + P[2], "M21=" + P[1], "M22=" + P[3], "SizingMethod='auto expand'"].join();
                    N = (L = O.currentStyle) && L.filter || J.filter || "";
                    J.filter = C.test(N) ? N.replace(C, I) : N + " progid:DXImageTransform.Microsoft." + I + ")";
                    if (!j.cssHooks[H]) {
                        if ((M = j.transform.centerOrigin)) {
                            J[M == "margin" ? "marginLeft" : "left"] = -(O.offsetWidth / 2) + (O.clientWidth / 2) + "px";
                            J[M == "margin" ? "marginTop" : "top"] = -(O.offsetHeight / 2) + (O.clientHeight / 2) + "px"
                        }
                        J.left = P[4] + "px";
                        J.top = P[5] + "px"
                    } else {
                        j.cssHooks[H].set(O, P)
                    }
                }
            }
        }
    } if (G) {
        j.cssHooks[F] = G
    }
    t = G && G.get || j.css;
    j.fx.step.transform = function (M) {
        var L = M.elem,
            J = M.start,
            N = M.end,
            R = M.pos,
            K = "",
            P = 100000,
            O, I, Q, S;
        if (!J || typeof J === "string") {
            if (!J) {
                J = t(L, a)
            }
            if (h) {
                L.style.zoom = 1
            }
            N = N.split("+=").join(J);
            j.extend(M, d(J, N));
            J = M.start;
            N = M.end
        }
        O = J.length;
        while (O--) {
            I = J[O];
            Q = N[O];
            S = +false;
            switch (I[0]) {
                case E:
                    S = "px";
                case p:
                    S || (S = "");
                    K = I[0] + "(" + o.round((I[1][0] + (Q[1][0] - I[1][0]) * R) * P) / P + S + "," + o.round((I[1][1] + (Q[1][1] - I[1][1]) * R) * P) / P + S + ")" + K;
                    break;
                case y + "X":
                case y + "Y":
                case e:
                    K = I[0] + "(" + o.round((I[1] + (Q[1] - I[1]) * R) * P) / P + "rad)" + K;
                    break
            }
        }
        M.origin && (K = M.origin + K);
        G && G.set ? G.set(L, K, +true) : L.style[a] = K
    };

    function v(K) {
        K = K.split(")");
        var L = j.trim,
            O = -1,
            N = K.length - 1,
            Q, I, J, M = D ? new Float32Array(6) : [],
            R = D ? new Float32Array(6) : [],
            P = D ? new Float32Array(6) : [1, 0, 0, 1, 0, 0];
        M[0] = M[3] = P[0] = P[3] = 1;
        M[1] = M[2] = M[4] = M[5] = 0;
        while (++O < N) {
            Q = K[O].split("(");
            I = L(Q[0]);
            J = Q[1];
            R[0] = R[3] = 1;
            R[1] = R[2] = R[4] = R[5] = 0;
            switch (I) {
                case E + "X":
                    R[4] = parseInt(J, 10);
                    break;
                case E + "Y":
                    R[5] = parseInt(J, 10);
                    break;
                case E:
                    J = J.split(",");
                    R[4] = parseInt(J[0], 10);
                    R[5] = parseInt(J[1] || 0, 10);
                    break;
                case e:
                    J = f(J);
                    R[0] = o.cos(J);
                    R[1] = o.sin(J);
                    R[2] = -o.sin(J);
                    R[3] = o.cos(J);
                    break;
                case p + "X":
                    R[0] = +J;
                    break;
                case p + "Y":
                    R[3] = J;
                    break;
                case p:
                    J = J.split(",");
                    R[0] = J[0];
                    R[3] = J.length > 1 ? J[1] : J[0];
                    break;
                case y + "X":
                    R[2] = o.tan(f(J));
                    break;
                case y + "Y":
                    R[1] = o.tan(f(J));
                    break;
                case b:
                    J = J.split(",");
                    R[0] = J[0];
                    R[1] = J[1];
                    R[2] = J[2];
                    R[3] = J[3];
                    R[4] = parseInt(J[4], 10);
                    R[5] = parseInt(J[5], 10);
                    break
            }
            P[0] = M[0] * R[0] + M[2] * R[1];
            P[1] = M[1] * R[0] + M[3] * R[1];
            P[2] = M[0] * R[2] + M[2] * R[3];
            P[3] = M[1] * R[2] + M[3] * R[3];
            P[4] = M[0] * R[4] + M[2] * R[5] + M[4];
            P[5] = M[1] * R[4] + M[3] * R[5] + M[5];
            M = [P[0], P[1], P[2], P[3], P[4], P[5]]
        }
        return P
    }
    function r(L) {
        var M, K, J, I = L[0],
            P = L[1],
            O = L[2],
            N = L[3];
        if (I * N - P * O) {
            M = o.sqrt(I * I + P * P);
            I /= M;
            P /= M;
            J = I * O + P * N;
            O -= I * J;
            N -= P * J;
            K = o.sqrt(O * O + N * N);
            O /= K;
            N /= K;
            J /= K;
            if (I * N < P * O) {
                I = -I;
                P = -P;
                J = -J;
                M = -M
            }
        } else {
            M = K = J = 0
        }
        return [[E, [+L[4], +L[5]]], [e, o.atan2(P, I)], [y + "X", o.atan(J)], [p, [M, K]]]
    }
    function d(P, J) {
        var M = {
            start: [],
            end: []
        }, K = -1,
            I, L, N, O;
        (P == "none" || B(P)) && (P = "");
        (J == "none" || B(J)) && (J = "");
        if (P && J && !J.indexOf("matrix") && u(P).join() == u(J.split(")")[0]).join()) {
            M.origin = P;
            P = "";
            J = J.slice(J.indexOf(")") + 1)
        }
        if (!P && !J) {
            return
        }
        if (!P || !J || x(P) == x(J)) {
            P && (P = P.split(")")) && (I = P.length);
            J && (J = J.split(")")) && (I = J.length);
            while (++K < I - 1) {
                P[K] && (L = P[K].split("("));
                J[K] && (N = J[K].split("("));
                O = j.trim((L || N)[0]);
                A(M.start, l(O, L ? L[1] : 0));
                A(M.end, l(O, N ? N[1] : 0))
            }
        } else {
            M.start = r(v(P));
            M.end = r(v(J))
        }
        return M
    }
    function l(L, M) {
        var J = +(!L.indexOf(p)),
            K, I = L.replace(/e[XY]/, "e");
        switch (L) {
            case E + "Y":
            case p + "Y":
                M = [J, M ? parseFloat(M) : J];
                break;
            case E + "X":
            case E:
            case p + "X":
                K = 1;
            case p:
                M = M ? (M = M.split(",")) && [parseFloat(M[0]), parseFloat(M.length > 1 ? M[1] : L == p ? K || M[0] : J + "")] : [J, J];
                break;
            case y + "X":
            case y + "Y":
            case e:
                M = M ? f(M) : 0;
                break;
            case b:
                return r(M ? u(M) : [1, 0, 0, 1, 0, 0]);
                break
        }
        return [[I, M]]
    }
    function B(I) {
        return n.test(I)
    }
    function x(I) {
        return I.replace(/(?:\([^)]*\))|\s/g, "")
    }
    function A(J, I, K) {
        while (K = I.shift()) {
            J.push(K)
        }
    }
    function f(I) {
        return~ I.indexOf("deg") ? parseInt(I, 10) * (o.PI * 2 / 360) : ~I.indexOf("grad") ? parseInt(I, 10) * (o.PI / 200) : parseFloat(I)
    }
    function u(I) {
        I = /([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(I);
        return [I[1], I[2], I[3], I[4], I[5], I[6]]
    }
    j.transform = {
        centerOrigin: "margin"
    }
})(jQuery, window, document, Math);
(function (d) {
    var p = d.extend,
        k = "mousedown",
        q = "mousemove",
        l = "mouseup",
        o = "touchstart",
        h = "touchmove",
        r = "touchend",
        f = "touchcancel";

    function e(x, v, w) {
        if (v.substr(0, 5) !== "touch") {
            return d(x).unbind(v, w)
        }
        var y, u;
        for (u = 0; u < t._binds.length; u++) {
            if (t._binds[u].elem === x && t._binds[u].type === v && t._binds[u].func === w) {
                if (document.addEventListener) {
                    x.removeEventListener(v, t._binds[u].fnc, false)
                } else {
                    x.detachEvent("on" + v, t._binds[u].fnc)
                }
                t._binds.splice(u--, 1)
            }
        }
    }
    function t(y, v, x, w) {
        if (v.substr(0, 5) !== "touch") {
            return d(y).bind(v, w, x)
        }
        var z, u;
        if (t[v]) {
            return t[v].bind(y, v, x, w)
        }
        z = function (A) {
            if (!A) {
                A = window.event
            }
            if (!A.stopPropagation) {
                A.stopPropagation = function () {
                    this.cancelBubble = true
                }
            }
            A.data = w;
            x.call(y, A)
        };
        if (document.addEventListener) {
            y.addEventListener(v, z, false)
        } else {
            y.attachEvent("on" + v, z)
        }
        t._binds.push({
            elem: y,
            type: v,
            func: x,
            fnc: z
        })
    }
    function g(v, u) {
        var w = {
            move: {
                x: 0,
                y: 0
            },
            offset: {
                x: 0,
                y: 0
            },
            position: {
                x: 0,
                y: 0
            },
            start: {
                x: 0,
                y: 0
            },
            affects: document.documentElement,
            stopPropagation: false,
            preventDefault: true,
            touch: true
        };
        p(w, u);
        w.element = v;
        t(v, k, s, w);
        if (w.touch) {
            t(v, o, a, w)
        }
    }
    function j(u) {
        e(u, k, k)
    }
    function s(u) {
        u.data.position.x = u.pageX;
        u.data.position.y = u.pageY;
        u.data.start.x = u.pageX;
        u.data.start.y = u.pageY;
        u.data.event = u;
        if (u.data.onstart && u.data.onstart.call(u.data.element, u.data)) {
            return
        }
        if (u.preventDefault && u.data.preventDefault) {
            u.preventDefault()
        }
        if (u.stopPropagation && u.data.stopPropagation) {
            u.stopPropagation()
        }
        t(u.data.affects, q, b, u.data);
        t(u.data.affects, l, n, u.data)
    }
    function b(u) {
        if (u.preventDefault && u.data.preventDefault) {
            u.preventDefault()
        }
        if (u.stopPropagation && u.data.preventDefault) {
            u.stopPropagation()
        }
        u.data.move.x = u.pageX - u.data.position.x;
        u.data.move.y = u.pageY - u.data.position.y;
        u.data.position.x = u.pageX;
        u.data.position.y = u.pageY;
        u.data.offset.x = u.pageX - u.data.start.x;
        u.data.offset.y = u.pageY - u.data.start.y;
        u.data.event = u;
        if (u.data.onmove) {
            u.data.onmove.call(u.data.element, u.data)
        }
    }
    function n(u) {
        if (u.preventDefault && u.data.preventDefault) {
            u.preventDefault()
        }
        if (u.stopPropagation && u.data.stopPropagation) {
            u.stopPropagation()
        }
        e(u.data.affects, q, b);
        e(u.data.affects, l, n);
        u.data.event = u;
        if (u.data.onfinish) {
            u.data.onfinish.call(u.data.element, u.data)
        }
    }
    function a(u) {
        u.data.position.x = u.touches[0].pageX;
        u.data.position.y = u.touches[0].pageY;
        u.data.start.x = u.touches[0].pageX;
        u.data.start.y = u.touches[0].pageY;
        u.data.event = u;
        if (u.data.onstart && u.data.onstart.call(u.data.element, u.data)) {
            return
        }
        if (u.preventDefault && u.data.preventDefault) {
            u.preventDefault()
        }
        if (u.stopPropagation && u.data.stopPropagation) {
            u.stopPropagation()
        }
        t(u.data.affects, h, m, u.data);
        t(u.data.affects, r, c, u.data)
    }
    function m(u) {
        if (u.preventDefault && u.data.preventDefault) {
            u.preventDefault()
        }
        if (u.stopPropagation && u.data.stopPropagation) {
            u.stopPropagation()
        }
        u.data.move.x = u.touches[0].pageX - u.data.position.x;
        u.data.move.y = u.touches[0].pageY - u.data.position.y;
        u.data.position.x = u.touches[0].pageX;
        u.data.position.y = u.touches[0].pageY;
        u.data.offset.x = u.touches[0].pageX - u.data.start.x;
        u.data.offset.y = u.touches[0].pageY - u.data.start.y;
        u.data.event = u;
        if (u.data.onmove) {
            u.data.onmove.call(u.data.elem, u.data)
        }
    }
    function c(u) {
        if (u.preventDefault && u.data.preventDefault) {
            u.preventDefault()
        }
        if (u.stopPropagation && u.data.stopPropagation) {
            u.stopPropagation()
        }
        e(u.data.affects, h, m);
        e(u.data.affects, r, c);
        u.data.event = u;
        if (u.data.onfinish) {
            u.data.onfinish.call(u.data.element, u.data)
        }
    }
    t._binds = [];
    d.fn.grab = function (v, u) {
        return this.each(function () {
            return g(this, v, u)
        })
    };
    d.fn.ungrab = function (u) {
        return this.each(function () {
            return j(this, u)
        })
    }
})(jQuery);
(function (a, d) {
    a.fn.jPlayer = function (b) {
        var h = "string" === typeof b,
            g = Array.prototype.slice.call(arguments, 1),
            f = this,
            b = !h && g.length ? a.extend.apply(null, [!0, b].concat(g)) : b;
        if (h && "_" === b.charAt(0)) {
            return f
        }
        h ? this.each(function () {
            var j = a.data(this, "jPlayer"),
                e = j && a.isFunction(j[b]) ? j[b].apply(j, g) : j;
            if (e !== j && e !== d) {
                return f = e, !1
            }
        }) : this.each(function () {
            var e = a.data(this, "jPlayer");
            e ? e.option(b || {}) : a.data(this, "jPlayer", new a.jPlayer(b, this))
        });
        return f
    };
    a.jPlayer = function (b, f) {
        if (arguments.length) {
            this.element = a(f);
            this.options = a.extend(!0, {}, this.options, b);
            var e = this;
            this.element.bind("remove.jPlayer", function () {
                e.destroy()
            });
            this._init()
        }
    };
    a.jPlayer.emulateMethods = "load play pause";
    a.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate";
    a.jPlayer.emulateOptions = "muted volume";
    a.jPlayer.reservedEvent = "ready flashreset resize repeat error warning";
    a.jPlayer.event = {
        ready: "jPlayer_ready",
        flashreset: "jPlayer_flashreset",
        resize: "jPlayer_resize",
        repeat: "jPlayer_repeat",
        click: "jPlayer_click",
        error: "jPlayer_error",
        warning: "jPlayer_warning",
        loadstart: "jPlayer_loadstart",
        progress: "jPlayer_progress",
        suspend: "jPlayer_suspend",
        abort: "jPlayer_abort",
        emptied: "jPlayer_emptied",
        stalled: "jPlayer_stalled",
        play: "jPlayer_play",
        pause: "jPlayer_pause",
        loadedmetadata: "jPlayer_loadedmetadata",
        loadeddata: "jPlayer_loadeddata",
        waiting: "jPlayer_waiting",
        playing: "jPlayer_playing",
        canplay: "jPlayer_canplay",
        canplaythrough: "jPlayer_canplaythrough",
        seeking: "jPlayer_seeking",
        seeked: "jPlayer_seeked",
        timeupdate: "jPlayer_timeupdate",
        ended: "jPlayer_ended",
        ratechange: "jPlayer_ratechange",
        durationchange: "jPlayer_durationchange",
        volumechange: "jPlayer_volumechange"
    };
    a.jPlayer.htmlEvent = "loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough ratechange".split(" ");
    a.jPlayer.pause = function () {
        a.each(a.jPlayer.prototype.instances, function (b, e) {
            e.data("jPlayer").status.srcSet && e.jPlayer("pause")
        })
    };
    a.jPlayer.timeFormat = {
        showHour: !1,
        showMin: !0,
        showSec: !0,
        padHour: !1,
        padMin: !0,
        padSec: !0,
        sepHour: ":",
        sepMin: ":",
        sepSec: ""
    };
    a.jPlayer.convertTime = function (b) {
        var f = new Date(1000 * b),
            e = f.getUTCHours(),
            b = f.getUTCMinutes(),
            f = f.getUTCSeconds(),
            e = a.jPlayer.timeFormat.padHour && 10 > e ? "0" + e : e,
            b = a.jPlayer.timeFormat.padMin && 10 > b ? "0" + b : b,
            f = a.jPlayer.timeFormat.padSec && 10 > f ? "0" + f : f;
        return (a.jPlayer.timeFormat.showHour ? e + a.jPlayer.timeFormat.sepHour : "") + (a.jPlayer.timeFormat.showMin ? b + a.jPlayer.timeFormat.sepMin : "") + (a.jPlayer.timeFormat.showSec ? f + a.jPlayer.timeFormat.sepSec : "")
    };
    a.jPlayer.uaBrowser = function (g) {
        var g = g.toLowerCase(),
            j = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            f = /(msie) ([\w.]+)/,
            h = /(mozilla)(?:.*? rv:([\w.]+))?/,
            g = /(webkit)[ \/]([\w.]+)/.exec(g) || j.exec(g) || f.exec(g) || 0 > g.indexOf("compatible") && h.exec(g) || [];
        return {
            browser: g[1] || "",
            version: g[2] || "0"
        }
    };
    a.jPlayer.uaPlatform = function (g) {
        var f = g.toLowerCase(),
            j = /(android)/,
            h = /(mobile)/,
            g = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(f) || [],
            f = /(ipad|playbook)/.exec(f) || !h.exec(f) && j.exec(f) || [];
        g[1] && (g[1] = g[1].replace(/\s/g, "_"));
        return {
            platform: g[1] || "",
            tablet: f[1] || ""
        }
    };
    a.jPlayer.browser = {};
    a.jPlayer.platform = {};
    var c = a.jPlayer.uaBrowser(navigator.userAgent);
    c.browser && (a.jPlayer.browser[c.browser] = !0, a.jPlayer.browser.version = c.version);
    c = a.jPlayer.uaPlatform(navigator.userAgent);
    c.platform && (a.jPlayer.platform[c.platform] = !0, a.jPlayer.platform.mobile = !c.tablet, a.jPlayer.platform.tablet = !! c.tablet);
    a.jPlayer.prototype = {
        count: 0,
        version: {
            script: "2.2.0",
            needFlash: "2.2.0",
            flash: "unknown"
        },
        options: {
            swfPath: "js",
            solution: "html, flash",
            supplied: "mp3",
            preload: "metadata",
            volume: 0.8,
            muted: !1,
            wmode: "opaque",
            backgroundColor: "#000000",
            cssSelectorAncestor: "#jp_container_1",
            cssSelector: {
                videoPlay: ".jp-video-play",
                play: ".jp-play",
                pause: ".jp-pause",
                stop: ".jp-stop",
                seekBar: ".jp-seek-bar",
                playBar: ".jp-play-bar",
                mute: ".jp-mute",
                unmute: ".jp-unmute",
                volumeBar: ".jp-volume-bar",
                volumeBarValue: ".jp-volume-bar-value",
                volumeMax: ".jp-volume-max",
                currentTime: ".jp-current-time",
                duration: ".jp-duration",
                fullScreen: ".jp-full-screen",
                restoreScreen: ".jp-restore-screen",
                repeat: ".jp-repeat",
                repeatOff: ".jp-repeat-off",
                gui: ".jp-gui",
                noSolution: ".jp-no-solution"
            },
            fullScreen: !1,
            autohide: {
                restored: !1,
                full: !0,
                fadeIn: 200,
                fadeOut: 600,
                hold: 1000
            },
            loop: !1,
            repeat: function (b) {
                b.jPlayer.options.loop ? a(this).unbind(".jPlayerRepeat").bind(a.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function () {
                    a(this).jPlayer("play")
                }) : a(this).unbind(".jPlayerRepeat")
            },
            nativeVideoControls: {},
            noFullScreen: {
                msie: /msie [0-6]/,
                ipad: /ipad.*?os [0-4]/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android [0-3](?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                webos: /webos/
            },
            noVolume: {
                ipad: /ipad/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                webos: /webos/,
                playbook: /playbook/
            },
            verticalVolume: !1,
            idPrefix: "jp",
            noConflict: "jQuery",
            emulateHtml: !1,
            errorAlerts: !1,
            warningAlerts: !1
        },
        optionsAudio: {
            size: {
                width: "0px",
                height: "0px",
                cssClass: ""
            },
            sizeFull: {
                width: "0px",
                height: "0px",
                cssClass: ""
            }
        },
        optionsVideo: {
            size: {
                width: "480px",
                height: "270px",
                cssClass: "jp-video-270p"
            },
            sizeFull: {
                width: "100%",
                height: "100%",
                cssClass: "jp-video-full"
            }
        },
        instances: {},
        status: {
            src: "",
            media: {},
            paused: !0,
            format: {},
            formatType: "",
            waitForPlay: !0,
            waitForLoad: !0,
            srcSet: !1,
            video: !1,
            seekPercent: 0,
            currentPercentRelative: 0,
            currentPercentAbsolute: 0,
            currentTime: 0,
            duration: 0,
            readyState: 0,
            networkState: 0,
            playbackRate: 1,
            ended: 0
        },
        internal: {
            ready: !1
        },
        solution: {
            html: !0,
            flash: !0
        },
        format: {
            mp3: {
                codec: 'audio/mpeg; codecs="mp3"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4a: {
                codec: 'audio/mp4; codecs="mp4a.40.2"',
                flashCanPlay: !0,
                media: "audio"
            },
            oga: {
                codec: 'audio/ogg; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            wav: {
                codec: 'audio/wav; codecs="1"',
                flashCanPlay: !1,
                media: "audio"
            },
            webma: {
                codec: 'audio/webm; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            fla: {
                codec: "audio/x-flv",
                flashCanPlay: !0,
                media: "audio"
            },
            rtmpa: {
                codec: 'audio/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4v: {
                codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !0,
                media: "video"
            },
            ogv: {
                codec: 'video/ogg; codecs="theora, vorbis"',
                flashCanPlay: !1,
                media: "video"
            },
            webmv: {
                codec: 'video/webm; codecs="vorbis, vp8"',
                flashCanPlay: !1,
                media: "video"
            },
            flv: {
                codec: "video/x-flv",
                flashCanPlay: !0,
                media: "video"
            },
            rtmpv: {
                codec: 'video/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "video"
            }
        },
        _init: function () {
            var b = this;
            this.element.empty();
            this.status = a.extend({}, this.status);
            this.internal = a.extend({}, this.internal);
            this.internal.domNode = this.element.get(0);
            this.formats = [];
            this.solutions = [];
            this.require = {};
            this.htmlElement = {};
            this.html = {};
            this.html.audio = {};
            this.html.video = {};
            this.flash = {};
            this.css = {};
            this.css.cs = {};
            this.css.jq = {};
            this.ancestorJq = [];
            this.options.volume = this._limitValue(this.options.volume, 0, 1);
            a.each(this.options.supplied.toLowerCase().split(","), function (m, l) {
                var k = l.replace(/^\s+|\s+$/g, "");
                if (b.format[k]) {
                    var j = false;
                    a.each(b.formats, function (n, e) {
                        if (k === e) {
                            j = true;
                            return false
                        }
                    });
                    j || b.formats.push(k)
                }
            });
            a.each(this.options.solution.toLowerCase().split(","), function (m, l) {
                var k = l.replace(/^\s+|\s+$/g, "");
                if (b.solution[k]) {
                    var j = false;
                    a.each(b.solutions, function (n, e) {
                        if (k === e) {
                            j = true;
                            return false
                        }
                    });
                    j || b.solutions.push(k)
                }
            });
            this.internal.instance = "jp_" + this.count;
            this.instances[this.internal.instance] = this.element;
            this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
            this.internal.self = a.extend({}, {
                id: this.element.attr("id"),
                jq: this.element
            });
            this.internal.audio = a.extend({}, {
                id: this.options.idPrefix + "_audio_" + this.count,
                jq: d
            });
            this.internal.video = a.extend({}, {
                id: this.options.idPrefix + "_video_" + this.count,
                jq: d
            });
            this.internal.flash = a.extend({}, {
                id: this.options.idPrefix + "_flash_" + this.count,
                jq: d,
                swf: this.options.swfPath + (this.options.swfPath.toLowerCase().slice(-4) !== ".swf" ? (this.options.swfPath && this.options.swfPath.slice(-1) !== "/" ? "/" : "") + "Jplayer.swf" : "")
            });
            this.internal.poster = a.extend({}, {
                id: this.options.idPrefix + "_poster_" + this.count,
                jq: d
            });
            a.each(a.jPlayer.event, function (e, j) {
                if (b.options[e] !== d) {
                    b.element.bind(j + ".jPlayer", b.options[e]);
                    b.options[e] = d
                }
            });
            this.require.audio = false;
            this.require.video = false;
            a.each(this.formats, function (e, j) {
                b.require[b.format[j].media] = true
            });
            this.options = this.require.video ? a.extend(true, {}, this.optionsVideo, this.options) : a.extend(true, {}, this.optionsAudio, this.options);
            this._setSize();
            this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
            this.status.noFullScreen = this._uaBlocklist(this.options.noFullScreen);
            this.status.noVolume = this._uaBlocklist(this.options.noVolume);
            this._restrictNativeVideoControls();
            this.htmlElement.poster = document.createElement("img");
            this.htmlElement.poster.id = this.internal.poster.id;
            this.htmlElement.poster.onload = function () {
                (!b.status.video || b.status.waitForPlay) && b.internal.poster.jq.show()
            };
            this.element.append(this.htmlElement.poster);
            this.internal.poster.jq = a("#" + this.internal.poster.id);
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            });
            this.internal.poster.jq.hide();
            this.internal.poster.jq.bind("click.jPlayer", function () {
                b._trigger(a.jPlayer.event.click)
            });
            this.html.audio.available = false;
            if (this.require.audio) {
                this.htmlElement.audio = document.createElement("audio");
                this.htmlElement.audio.id = this.internal.audio.id;
                this.html.audio.available = !! this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)
            }
            this.html.video.available = false;
            if (this.require.video) {
                this.htmlElement.video = document.createElement("video");
                this.htmlElement.video.id = this.internal.video.id;
                this.html.video.available = !! this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)
            }
            this.flash.available = this._checkForFlash(10);
            this.html.canPlay = {};
            this.flash.canPlay = {};
            a.each(this.formats, function (e, j) {
                b.html.canPlay[j] = b.html[b.format[j].media].available && "" !== b.htmlElement[b.format[j].media].canPlayType(b.format[j].codec);
                b.flash.canPlay[j] = b.format[j].flashCanPlay && b.flash.available
            });
            this.html.desired = false;
            this.flash.desired = false;
            a.each(this.solutions, function (m, l) {
                if (m === 0) {
                    b[l].desired = true
                } else {
                    var k = false,
                        j = false;
                    a.each(b.formats, function (e, n) {
                        b[b.solutions[0]].canPlay[n] && (b.format[n].media === "video" ? j = true : k = true)
                    });
                    b[l].desired = b.require.audio && !k || b.require.video && !j
                }
            });
            this.html.support = {};
            this.flash.support = {};
            a.each(this.formats, function (e, j) {
                b.html.support[j] = b.html.canPlay[j] && b.html.desired;
                b.flash.support[j] = b.flash.canPlay[j] && b.flash.desired
            });
            this.html.used = false;
            this.flash.used = false;
            a.each(this.solutions, function (j, e) {
                a.each(b.formats, function (k, l) {
                    if (b[e].support[l]) {
                        b[e].used = true;
                        return false
                    }
                })
            });
            this._resetActive();
            this._resetGate();
            this._cssSelectorAncestor(this.options.cssSelectorAncestor);
            if (!this.html.used && !this.flash.used) {
                this._error({
                    type: a.jPlayer.error.NO_SOLUTION,
                    context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                    message: a.jPlayer.errorMsg.NO_SOLUTION,
                    hint: a.jPlayer.errorHint.NO_SOLUTION
                });
                this.css.jq.noSolution.length && this.css.jq.noSolution.show()
            } else {
                this.css.jq.noSolution.length && this.css.jq.noSolution.hide()
            } if (this.flash.used) {
                var h, g = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                if (a.jPlayer.browser.msie && Number(a.jPlayer.browser.version) <= 8) {
                    g = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + g + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                    h = document.createElement('<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0"></object>');
                    for (var f = 0; f < g.length; f++) {
                        h.appendChild(document.createElement(g[f]))
                    }
                } else {
                    f = function (j, e, l) {
                        var k = document.createElement("param");
                        k.setAttribute("name", e);
                        k.setAttribute("value", l);
                        j.appendChild(k)
                    };
                    h = document.createElement("object");
                    h.setAttribute("id", this.internal.flash.id);
                    h.setAttribute("data", this.internal.flash.swf);
                    h.setAttribute("type", "application/x-shockwave-flash");
                    h.setAttribute("width", "1");
                    h.setAttribute("height", "1");
                    f(h, "flashvars", g);
                    f(h, "allowscriptaccess", "always");
                    f(h, "bgcolor", this.options.backgroundColor);
                    f(h, "wmode", this.options.wmode)
                }
                this.element.append(h);
                this.internal.flash.jq = a(h)
            }
            if (this.html.used) {
                if (this.html.audio.available) {
                    this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio);
                    this.element.append(this.htmlElement.audio);
                    this.internal.audio.jq = a("#" + this.internal.audio.id)
                }
                if (this.html.video.available) {
                    this._addHtmlEventListeners(this.htmlElement.video, this.html.video);
                    this.element.append(this.htmlElement.video);
                    this.internal.video.jq = a("#" + this.internal.video.id);
                    this.status.nativeVideoControls ? this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    }) : this.internal.video.jq.css({
                        width: "0px",
                        height: "0px"
                    });
                    this.internal.video.jq.bind("click.jPlayer", function () {
                        b._trigger(a.jPlayer.event.click)
                    })
                }
            }
            this.options.emulateHtml && this._emulateHtmlBridge();
            this.html.used && !this.flash.used && setTimeout(function () {
                b.internal.ready = true;
                b.version.flash = "n/a";
                b._trigger(a.jPlayer.event.repeat);
                b._trigger(a.jPlayer.event.ready)
            }, 100);
            this._updateNativeVideoControls();
            this._updateInterface();
            this._updateButtons(false);
            this._updateAutohide();
            this._updateVolume(this.options.volume);
            this._updateMute(this.options.muted);
            this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
            a.jPlayer.prototype.count++
        },
        destroy: function () {
            this.clearMedia();
            this._removeUiClass();
            this.css.jq.currentTime.length && this.css.jq.currentTime.text("");
            this.css.jq.duration.length && this.css.jq.duration.text("");
            a.each(this.css.jq, function (f, e) {
                e.length && e.unbind(".jPlayer")
            });
            this.internal.poster.jq.unbind(".jPlayer");
            this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer");
            this.options.emulateHtml && this._destroyHtmlBridge();
            this.element.removeData("jPlayer");
            this.element.unbind(".jPlayer");
            this.element.empty();
            delete this.instances[this.internal.instance]
        },
        enable: function () {},
        disable: function () {},
        _testCanPlayType: function (f) {
            try {
                f.canPlayType(this.format.mp3.codec);
                return true
            } catch (e) {
                return false
            }
        },
        _uaBlocklist: function (b) {
            var f = navigator.userAgent.toLowerCase(),
                e = false;
            a.each(b, function (h, g) {
                if (g && g.test(f)) {
                    e = true;
                    return false
                }
            });
            return e
        },
        _restrictNativeVideoControls: function () {
            if (this.require.audio && this.status.nativeVideoControls) {
                this.status.nativeVideoControls = false;
                this.status.noFullScreen = true
            }
        },
        _updateNativeVideoControls: function () {
            if (this.html.video.available && this.html.used) {
                this.htmlElement.video.controls = this.status.nativeVideoControls;
                this._updateAutohide();
                if (this.status.nativeVideoControls && this.require.video) {
                    this.internal.poster.jq.hide();
                    this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })
                } else {
                    if (this.status.waitForPlay && this.status.video) {
                        this.internal.poster.jq.show();
                        this.internal.video.jq.css({
                            width: "0px",
                            height: "0px"
                        })
                    }
                }
            }
        },
        _addHtmlEventListeners: function (b, f) {
            var e = this;
            b.preload = this.options.preload;
            b.muted = this.options.muted;
            b.volume = this.options.volume;
            b.addEventListener("progress", function () {
                if (f.gate) {
                    e._getHtmlStatus(b);
                    e._updateInterface();
                    e._trigger(a.jPlayer.event.progress)
                }
            }, false);
            b.addEventListener("timeupdate", function () {
                if (f.gate) {
                    e._getHtmlStatus(b);
                    e._updateInterface();
                    e._trigger(a.jPlayer.event.timeupdate)
                }
            }, false);
            b.addEventListener("durationchange", function () {
                if (f.gate) {
                    e._getHtmlStatus(b);
                    e._updateInterface();
                    e._trigger(a.jPlayer.event.durationchange)
                }
            }, false);
            b.addEventListener("play", function () {
                if (f.gate) {
                    e._updateButtons(true);
                    e._html_checkWaitForPlay();
                    e._trigger(a.jPlayer.event.play)
                }
            }, false);
            b.addEventListener("playing", function () {
                if (f.gate) {
                    e._updateButtons(true);
                    e._seeked();
                    e._trigger(a.jPlayer.event.playing)
                }
            }, false);
            b.addEventListener("pause", function () {
                if (f.gate) {
                    e._updateButtons(false);
                    e._trigger(a.jPlayer.event.pause)
                }
            }, false);
            b.addEventListener("waiting", function () {
                if (f.gate) {
                    e._seeking();
                    e._trigger(a.jPlayer.event.waiting)
                }
            }, false);
            b.addEventListener("seeking", function () {
                if (f.gate) {
                    e._seeking();
                    e._trigger(a.jPlayer.event.seeking)
                }
            }, false);
            b.addEventListener("seeked", function () {
                if (f.gate) {
                    e._seeked();
                    e._trigger(a.jPlayer.event.seeked)
                }
            }, false);
            b.addEventListener("volumechange", function () {
                if (f.gate) {
                    e.options.volume = b.volume;
                    e.options.muted = b.muted;
                    e._updateMute();
                    e._updateVolume();
                    e._trigger(a.jPlayer.event.volumechange)
                }
            }, false);
            b.addEventListener("suspend", function () {
                if (f.gate) {
                    e._seeked();
                    e._trigger(a.jPlayer.event.suspend)
                }
            }, false);
            b.addEventListener("ended", function () {
                if (f.gate) {
                    if (!a.jPlayer.browser.webkit) {
                        e.htmlElement.media.currentTime = 0
                    }
                    e.htmlElement.media.pause();
                    e._updateButtons(false);
                    e._getHtmlStatus(b, true);
                    e._updateInterface();
                    e._trigger(a.jPlayer.event.ended)
                }
            }, false);
            b.addEventListener("error", function () {
                if (f.gate) {
                    e._updateButtons(false);
                    e._seeked();
                    if (e.status.srcSet) {
                        clearTimeout(e.internal.htmlDlyCmdId);
                        e.status.waitForLoad = true;
                        e.status.waitForPlay = true;
                        e.status.video && !e.status.nativeVideoControls && e.internal.video.jq.css({
                            width: "0px",
                            height: "0px"
                        });
                        e._validString(e.status.media.poster) && !e.status.nativeVideoControls && e.internal.poster.jq.show();
                        e.css.jq.videoPlay.length && e.css.jq.videoPlay.show();
                        e._error({
                            type: a.jPlayer.error.URL,
                            context: e.status.src,
                            message: a.jPlayer.errorMsg.URL,
                            hint: a.jPlayer.errorHint.URL
                        })
                    }
                }
            }, false);
            a.each(a.jPlayer.htmlEvent, function (j, h) {
                b.addEventListener(this, function () {
                    f.gate && e._trigger(a.jPlayer.event[h])
                }, false)
            })
        },
        _getHtmlStatus: function (j, h) {
            var n = 0,
                m = 0,
                k = 0,
                l = 0;
            if (isFinite(j.duration)) {
                this.status.duration = j.duration
            }
            n = j.currentTime;
            m = this.status.duration > 0 ? 100 * n / this.status.duration : 0;
            if (typeof j.seekable === "object" && j.seekable.length > 0) {
                k = this.status.duration > 0 ? 100 * j.seekable.end(j.seekable.length - 1) / this.status.duration : 100;
                l = this.status.duration > 0 ? 100 * j.currentTime / j.seekable.end(j.seekable.length - 1) : 0
            } else {
                k = 100;
                l = m
            } if (h) {
                m = l = n = 0
            }
            this.status.seekPercent = k;
            this.status.currentPercentRelative = l;
            this.status.currentPercentAbsolute = m;
            this.status.currentTime = n;
            this.status.readyState = j.readyState;
            this.status.networkState = j.networkState;
            this.status.playbackRate = j.playbackRate;
            this.status.ended = j.ended
        },
        _resetStatus: function () {
            this.status = a.extend({}, this.status, a.jPlayer.prototype.status)
        },
        _trigger: function (b, f, e) {
            b = a.Event(b);
            b.jPlayer = {};
            b.jPlayer.version = a.extend({}, this.version);
            b.jPlayer.options = a.extend(true, {}, this.options);
            b.jPlayer.status = a.extend(true, {}, this.status);
            b.jPlayer.html = a.extend(true, {}, this.html);
            b.jPlayer.flash = a.extend(true, {}, this.flash);
            if (f) {
                b.jPlayer.error = a.extend({}, f)
            }
            if (e) {
                b.jPlayer.warning = a.extend({}, e)
            }
            this.element.trigger(b)
        },
        jPlayerFlashEvent: function (b, h) {
            if (b === a.jPlayer.event.ready) {
                if (this.internal.ready) {
                    if (this.flash.gate) {
                        if (this.status.srcSet) {
                            var g = this.status.currentTime,
                                f = this.status.paused;
                            this.setMedia(this.status.media);
                            g > 0 && (f ? this.pause(g) : this.play(g))
                        }
                        this._trigger(a.jPlayer.event.flashreset)
                    }
                } else {
                    this.internal.ready = true;
                    this.internal.flash.jq.css({
                        width: "0px",
                        height: "0px"
                    });
                    this.version.flash = h.version;
                    this.version.needFlash !== this.version.flash && this._error({
                        type: a.jPlayer.error.VERSION,
                        context: this.version.flash,
                        message: a.jPlayer.errorMsg.VERSION + this.version.flash,
                        hint: a.jPlayer.errorHint.VERSION
                    });
                    this._trigger(a.jPlayer.event.repeat);
                    this._trigger(b)
                }
            }
            if (this.flash.gate) {
                switch (b) {
                    case a.jPlayer.event.progress:
                        this._getFlashStatus(h);
                        this._updateInterface();
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.timeupdate:
                        this._getFlashStatus(h);
                        this._updateInterface();
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.play:
                        this._seeked();
                        this._updateButtons(true);
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.pause:
                        this._updateButtons(false);
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.ended:
                        this._updateButtons(false);
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.click:
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.error:
                        this.status.waitForLoad = true;
                        this.status.waitForPlay = true;
                        this.status.video && this.internal.flash.jq.css({
                            width: "0px",
                            height: "0px"
                        });
                        this._validString(this.status.media.poster) && this.internal.poster.jq.show();
                        this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show();
                        this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media);
                        this._updateButtons(false);
                        this._error({
                            type: a.jPlayer.error.URL,
                            context: h.src,
                            message: a.jPlayer.errorMsg.URL,
                            hint: a.jPlayer.errorHint.URL
                        });
                        break;
                    case a.jPlayer.event.seeking:
                        this._seeking();
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.seeked:
                        this._seeked();
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.ready:
                        break;
                    default:
                        this._trigger(b)
                }
            }
            return false
        },
        _getFlashStatus: function (b) {
            this.status.seekPercent = b.seekPercent;
            this.status.currentPercentRelative = b.currentPercentRelative;
            this.status.currentPercentAbsolute = b.currentPercentAbsolute;
            this.status.currentTime = b.currentTime;
            this.status.duration = b.duration;
            this.status.readyState = 4;
            this.status.networkState = 0;
            this.status.playbackRate = 1;
            this.status.ended = false
        },
        _updateButtons: function (b) {
            if (b !== d) {
                this.status.paused = !b;
                if (this.css.jq.play.length && this.css.jq.pause.length) {
                    if (b) {
                        this.css.jq.play.hide();
                        this.css.jq.pause.show()
                    } else {
                        this.css.jq.play.show();
                        this.css.jq.pause.hide()
                    }
                }
            }
            if (this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length) {
                if (this.status.noFullScreen) {
                    this.css.jq.fullScreen.hide();
                    this.css.jq.restoreScreen.hide()
                } else {
                    if (this.options.fullScreen) {
                        this.css.jq.fullScreen.hide();
                        this.css.jq.restoreScreen.show()
                    } else {
                        this.css.jq.fullScreen.show();
                        this.css.jq.restoreScreen.hide()
                    }
                }
            }
            if (this.css.jq.repeat.length && this.css.jq.repeatOff.length) {
                if (this.options.loop) {
                    this.css.jq.repeat.hide();
                    this.css.jq.repeatOff.show()
                } else {
                    this.css.jq.repeat.show();
                    this.css.jq.repeatOff.hide()
                }
            }
        },
        _updateInterface: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%");
            this.css.jq.playBar.length && this.css.jq.playBar.width(this.status.currentPercentRelative + "%");
            this.css.jq.currentTime.length && this.css.jq.currentTime.text(a.jPlayer.convertTime(this.status.currentTime));
            this.css.jq.duration.length && this.css.jq.duration.text(a.jPlayer.convertTime(this.status.duration))
        },
        _seeking: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
        },
        _seeked: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
        },
        _resetGate: function () {
            this.html.audio.gate = false;
            this.html.video.gate = false;
            this.flash.gate = false
        },
        _resetActive: function () {
            this.html.active = false;
            this.flash.active = false
        },
        setMedia: function (b) {
            var h = this,
                g = false,
                f = this.status.media.poster !== b.poster;
            this._resetMedia();
            this._resetGate();
            this._resetActive();
            a.each(this.formats, function (l, k) {
                var j = h.format[k].media === "video";
                a.each(h.solutions, function (m, o) {
                    if (h[o].support[k] && h._validString(b[k])) {
                        var n = o === "html";
                        if (j) {
                            if (n) {
                                h.html.video.gate = true;
                                h._html_setVideo(b);
                                h.html.active = true
                            } else {
                                h.flash.gate = true;
                                h._flash_setVideo(b);
                                h.flash.active = true
                            }
                            h.css.jq.videoPlay.length && h.css.jq.videoPlay.show();
                            h.status.video = true
                        } else {
                            if (n) {
                                h.html.audio.gate = true;
                                h._html_setAudio(b);
                                h.html.active = true
                            } else {
                                h.flash.gate = true;
                                h._flash_setAudio(b);
                                h.flash.active = true
                            }
                            h.css.jq.videoPlay.length && h.css.jq.videoPlay.hide();
                            h.status.video = false
                        }
                        g = true;
                        return false
                    }
                });
                if (g) {
                    return false
                }
            });
            if (g) {
                if ((!this.status.nativeVideoControls || !this.html.video.gate) && this._validString(b.poster)) {
                    f ? this.htmlElement.poster.src = b.poster : this.internal.poster.jq.show()
                }
                this.status.srcSet = true;
                this.status.media = a.extend({}, b);
                this._updateButtons(false);
                this._updateInterface()
            } else {
                this._error({
                    type: a.jPlayer.error.NO_SUPPORT,
                    context: "{supplied:'" + this.options.supplied + "'}",
                    message: a.jPlayer.errorMsg.NO_SUPPORT,
                    hint: a.jPlayer.errorHint.NO_SUPPORT
                })
            }
        },
        _resetMedia: function () {
            this._resetStatus();
            this._updateButtons(false);
            this._updateInterface();
            this._seeked();
            this.internal.poster.jq.hide();
            clearTimeout(this.internal.htmlDlyCmdId);
            this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
        },
        clearMedia: function () {
            this._resetMedia();
            this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia();
            this._resetGate();
            this._resetActive()
        },
        load: function () {
            this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
        },
        play: function (b) {
            b = typeof b === "number" ? b : NaN;
            this.status.srcSet ? this.html.active ? this._html_play(b) : this.flash.active && this._flash_play(b) : this._urlNotSetError("play")
        },
        videoPlay: function () {
            this.play()
        },
        pause: function (b) {
            b = typeof b === "number" ? b : NaN;
            this.status.srcSet ? this.html.active ? this._html_pause(b) : this.flash.active && this._flash_pause(b) : this._urlNotSetError("pause")
        },
        pauseOthers: function () {
            var b = this;
            a.each(this.instances, function (e, f) {
                b.element !== f && f.data("jPlayer").status.srcSet && f.jPlayer("pause")
            })
        },
        stop: function () {
            this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
        },
        playHead: function (b) {
            b = this._limitValue(b, 0, 100);
            this.status.srcSet ? this.html.active ? this._html_playHead(b) : this.flash.active && this._flash_playHead(b) : this._urlNotSetError("playHead")
        },
        _muted: function (b) {
            this.options.muted = b;
            this.html.used && this._html_mute(b);
            this.flash.used && this._flash_mute(b);
            if (!this.html.video.gate && !this.html.audio.gate) {
                this._updateMute(b);
                this._updateVolume(this.options.volume);
                this._trigger(a.jPlayer.event.volumechange)
            }
        },
        mute: function (b) {
            b = b === d ? true : !! b;
            this._muted(b)
        },
        unmute: function (b) {
            b = b === d ? true : !! b;
            this._muted(!b)
        },
        _updateMute: function (b) {
            if (b === d) {
                b = this.options.muted
            }
            if (this.css.jq.mute.length && this.css.jq.unmute.length) {
                if (this.status.noVolume) {
                    this.css.jq.mute.hide();
                    this.css.jq.unmute.hide()
                } else {
                    if (b) {
                        this.css.jq.mute.hide();
                        this.css.jq.unmute.show()
                    } else {
                        this.css.jq.mute.show();
                        this.css.jq.unmute.hide()
                    }
                }
            }
        },
        volume: function (b) {
            b = this._limitValue(b, 0, 1);
            this.options.volume = b;
            this.html.used && this._html_volume(b);
            this.flash.used && this._flash_volume(b);
            if (!this.html.video.gate && !this.html.audio.gate) {
                this._updateVolume(b);
                this._trigger(a.jPlayer.event.volumechange)
            }
        },
        volumeBar: function (g) {
            if (this.css.jq.volumeBar.length) {
                var f = this.css.jq.volumeBar.offset(),
                    j = g.pageX - f.left,
                    h = this.css.jq.volumeBar.width(),
                    g = this.css.jq.volumeBar.height() - g.pageY + f.top,
                    f = this.css.jq.volumeBar.height();
                this.options.verticalVolume ? this.volume(g / f) : this.volume(j / h)
            }
            this.options.muted && this._muted(false)
        },
        volumeBarValue: function (b) {
            this.volumeBar(b)
        },
        _updateVolume: function (b) {
            if (b === d) {
                b = this.options.volume
            }
            b = this.options.muted ? 0 : b;
            if (this.status.noVolume) {
                this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide();
                this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide();
                this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()
            } else {
                this.css.jq.volumeBar.length && this.css.jq.volumeBar.show();
                if (this.css.jq.volumeBarValue.length) {
                    this.css.jq.volumeBarValue.show();
                    this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](b * 100 + "%")
                }
                this.css.jq.volumeMax.length && this.css.jq.volumeMax.show()
            }
        },
        volumeMax: function () {
            this.volume(1);
            this.options.muted && this._muted(false)
        },
        _cssSelectorAncestor: function (b) {
            var e = this;
            this.options.cssSelectorAncestor = b;
            this._removeUiClass();
            this.ancestorJq = b ? a(b) : [];
            b && this.ancestorJq.length !== 1 && this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: b,
                message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
            });
            this._addUiClass();
            a.each(this.options.cssSelector, function (g, f) {
                e._cssSelector(g, f)
            })
        },
        _cssSelector: function (b, f) {
            var e = this;
            if (typeof f === "string") {
                if (a.jPlayer.prototype.options.cssSelector[b]) {
                    this.css.jq[b] && this.css.jq[b].length && this.css.jq[b].unbind(".jPlayer");
                    this.options.cssSelector[b] = f;
                    this.css.cs[b] = this.options.cssSelectorAncestor + " " + f;
                    this.css.jq[b] = f ? a(this.css.cs[b]) : [];
                    this.css.jq[b].length && this.css.jq[b].bind("click.jPlayer", function (g) {
                        e[b](g);
                        a(this).blur();
                        return false
                    });
                    f && this.css.jq[b].length !== 1 && this._warning({
                        type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
                        context: this.css.cs[b],
                        message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[b].length + " found for " + b + " method.",
                        hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
                    })
                } else {
                    this._warning({
                        type: a.jPlayer.warning.CSS_SELECTOR_METHOD,
                        context: b,
                        message: a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                        hint: a.jPlayer.warningHint.CSS_SELECTOR_METHOD
                    })
                }
            } else {
                this._warning({
                    type: a.jPlayer.warning.CSS_SELECTOR_STRING,
                    context: f,
                    message: a.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                    hint: a.jPlayer.warningHint.CSS_SELECTOR_STRING
                })
            }
        },
        seekBar: function (f) {
            if (this.css.jq.seekBar) {
                var e = this.css.jq.seekBar.offset(),
                    f = f.pageX - e.left,
                    e = this.css.jq.seekBar.width();
                this.playHead(100 * f / e)
            }
        },
        playBar: function (b) {
            this.seekBar(b)
        },
        repeat: function () {
            this._loop(true)
        },
        repeatOff: function () {
            this._loop(false)
        },
        _loop: function (b) {
            if (this.options.loop !== b) {
                this.options.loop = b;
                this._updateButtons();
                this._trigger(a.jPlayer.event.repeat)
            }
        },
        currentTime: function () {},
        duration: function () {},
        gui: function () {},
        noSolution: function () {},
        option: function (b, m) {
            var l = b;
            if (arguments.length === 0) {
                return a.extend(true, {}, this.options)
            }
            if (typeof b === "string") {
                var k = b.split(".");
                if (m === d) {
                    for (var l = a.extend(true, {}, this.options), j = 0; j < k.length; j++) {
                        if (l[k[j]] !== d) {
                            l = l[k[j]]
                        } else {
                            this._warning({
                                type: a.jPlayer.warning.OPTION_KEY,
                                context: b,
                                message: a.jPlayer.warningMsg.OPTION_KEY,
                                hint: a.jPlayer.warningHint.OPTION_KEY
                            });
                            return d
                        }
                    }
                    return l
                }
                for (var j = l = {}, f = 0; f < k.length; f++) {
                    if (f < k.length - 1) {
                        j[k[f]] = {};
                        j = j[k[f]]
                    } else {
                        j[k[f]] = m
                    }
                }
            }
            this._setOptions(l);
            return this
        },
        _setOptions: function (b) {
            var e = this;
            a.each(b, function (g, f) {
                e._setOption(g, f)
            });
            return this
        },
        _setOption: function (b, f) {
            var e = this;
            switch (b) {
                case "volume":
                    this.volume(f);
                    break;
                case "muted":
                    this._muted(f);
                    break;
                case "cssSelectorAncestor":
                    this._cssSelectorAncestor(f);
                    break;
                case "cssSelector":
                    a.each(f, function (h, g) {
                        e._cssSelector(h, g)
                    });
                    break;
                case "fullScreen":
                    if (this.options[b] !== f) {
                        this._removeUiClass();
                        this.options[b] = f;
                        this._refreshSize()
                    }
                    break;
                case "size":
                    !this.options.fullScreen && this.options[b].cssClass !== f.cssClass && this._removeUiClass();
                    this.options[b] = a.extend({}, this.options[b], f);
                    this._refreshSize();
                    break;
                case "sizeFull":
                    this.options.fullScreen && this.options[b].cssClass !== f.cssClass && this._removeUiClass();
                    this.options[b] = a.extend({}, this.options[b], f);
                    this._refreshSize();
                    break;
                case "autohide":
                    this.options[b] = a.extend({}, this.options[b], f);
                    this._updateAutohide();
                    break;
                case "loop":
                    this._loop(f);
                    break;
                case "nativeVideoControls":
                    this.options[b] = a.extend({}, this.options[b], f);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this._restrictNativeVideoControls();
                    this._updateNativeVideoControls();
                    break;
                case "noFullScreen":
                    this.options[b] = a.extend({}, this.options[b], f);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this.status.noFullScreen = this._uaBlocklist(this.options.noFullScreen);
                    this._restrictNativeVideoControls();
                    this._updateButtons();
                    break;
                case "noVolume":
                    this.options[b] = a.extend({}, this.options[b], f);
                    this.status.noVolume = this._uaBlocklist(this.options.noVolume);
                    this._updateVolume();
                    this._updateMute();
                    break;
                case "emulateHtml":
                    if (this.options[b] !== f) {
                        (this.options[b] = f) ? this._emulateHtmlBridge() : this._destroyHtmlBridge()
                    }
            }
            return this
        },
        _refreshSize: function () {
            this._setSize();
            this._addUiClass();
            this._updateSize();
            this._updateButtons();
            this._updateAutohide();
            this._trigger(a.jPlayer.event.resize)
        },
        _setSize: function () {
            if (this.options.fullScreen) {
                this.status.width = this.options.sizeFull.width;
                this.status.height = this.options.sizeFull.height;
                this.status.cssClass = this.options.sizeFull.cssClass
            } else {
                this.status.width = this.options.size.width;
                this.status.height = this.options.size.height;
                this.status.cssClass = this.options.size.cssClass
            }
            this.element.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _addUiClass: function () {
            this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
        },
        _removeUiClass: function () {
            this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
        },
        _updateSize: function () {
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            });
            !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : !this.status.waitForPlay && (this.flash.active && this.status.video) && this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _updateAutohide: function () {
            var f = this,
                e = function () {
                    f.css.jq.gui.fadeIn(f.options.autohide.fadeIn, function () {
                        clearTimeout(f.internal.autohideId);
                        f.internal.autohideId = setTimeout(function () {
                            f.css.jq.gui.fadeOut(f.options.autohide.fadeOut)
                        }, f.options.autohide.hold)
                    })
                };
            if (this.css.jq.gui.length) {
                this.css.jq.gui.stop(true, true);
                clearTimeout(this.internal.autohideId);
                this.element.unbind(".jPlayerAutohide");
                this.css.jq.gui.unbind(".jPlayerAutohide");
                if (this.status.nativeVideoControls) {
                    this.css.jq.gui.hide()
                } else {
                    if (this.options.fullScreen && this.options.autohide.full || !this.options.fullScreen && this.options.autohide.restored) {
                        this.element.bind("mousemove.jPlayer.jPlayerAutohide", e);
                        this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide", e);
                        this.css.jq.gui.hide()
                    } else {
                        this.css.jq.gui.show()
                    }
                }
            }
        },
        fullScreen: function () {
            this._setOption("fullScreen", true)
        },
        restoreScreen: function () {
            this._setOption("fullScreen", false)
        },
        _html_initMedia: function () {
            this.htmlElement.media.src = this.status.src;
            this.options.preload !== "none" && this._html_load();
            this._trigger(a.jPlayer.event.timeupdate)
        },
        _html_setAudio: function (b) {
            var e = this;
            a.each(this.formats, function (f, g) {
                if (e.html.support[g] && b[g]) {
                    e.status.src = b[g];
                    e.status.format[g] = true;
                    e.status.formatType = g;
                    return false
                }
            });
            this.htmlElement.media = this.htmlElement.audio;
            this._html_initMedia()
        },
        _html_setVideo: function (b) {
            var e = this;
            a.each(this.formats, function (f, g) {
                if (e.html.support[g] && b[g]) {
                    e.status.src = b[g];
                    e.status.format[g] = true;
                    e.status.formatType = g;
                    return false
                }
            });
            if (this.status.nativeVideoControls) {
                this.htmlElement.video.poster = this._validString(b.poster) ? b.poster : ""
            }
            this.htmlElement.media = this.htmlElement.video;
            this._html_initMedia()
        },
        _html_resetMedia: function () {
            if (this.htmlElement.media) {
                this.htmlElement.media.id === this.internal.video.id && !this.status.nativeVideoControls && this.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                });
                this.htmlElement.media.pause()
            }
        },
        _html_clearMedia: function () {
            if (this.htmlElement.media) {
                this.htmlElement.media.src = "";
                this.htmlElement.media.load()
            }
        },
        _html_load: function () {
            if (this.status.waitForLoad) {
                this.status.waitForLoad = false;
                this.htmlElement.media.load()
            }
            clearTimeout(this.internal.htmlDlyCmdId)
        },
        _html_play: function (f) {
            var e = this;
            this._html_load();
            this.htmlElement.media.play();
            if (!isNaN(f)) {
                try {
                    this.htmlElement.media.currentTime = f
                } catch (g) {
                    this.internal.htmlDlyCmdId = setTimeout(function () {
                        e.play(f)
                    }, 100);
                    return
                }
            }
            this._html_checkWaitForPlay()
        },
        _html_pause: function (f) {
            var e = this;
            f > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId);
            this.htmlElement.media.pause();
            if (!isNaN(f)) {
                try {
                    this.htmlElement.media.currentTime = f
                } catch (g) {
                    this.internal.htmlDlyCmdId = setTimeout(function () {
                        e.pause(f)
                    }, 100);
                    return
                }
            }
            f > 0 && this._html_checkWaitForPlay()
        },
        _html_playHead: function (f) {
            var e = this;
            this._html_load();
            try {
                if (typeof this.htmlElement.media.seekable === "object" && this.htmlElement.media.seekable.length > 0) {
                    this.htmlElement.media.currentTime = f * this.htmlElement.media.seekable.end(this.htmlElement.media.seekable.length - 1) / 100
                } else {
                    if (this.htmlElement.media.duration > 0 && !isNaN(this.htmlElement.media.duration)) {
                        this.htmlElement.media.currentTime = f * this.htmlElement.media.duration / 100
                    } else {
                        throw "e"
                    }
                }
            } catch (g) {
                this.internal.htmlDlyCmdId = setTimeout(function () {
                    e.playHead(f)
                }, 100);
                return
            }
            this.status.waitForLoad || this._html_checkWaitForPlay()
        },
        _html_checkWaitForPlay: function () {
            if (this.status.waitForPlay) {
                this.status.waitForPlay = false;
                this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
                if (this.status.video) {
                    this.internal.poster.jq.hide();
                    this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })
                }
            }
        },
        _html_volume: function (b) {
            if (this.html.audio.available) {
                this.htmlElement.audio.volume = b
            }
            if (this.html.video.available) {
                this.htmlElement.video.volume = b
            }
        },
        _html_mute: function (b) {
            if (this.html.audio.available) {
                this.htmlElement.audio.muted = b
            }
            if (this.html.video.available) {
                this.htmlElement.video.muted = b
            }
        },
        _flash_setAudio: function (b) {
            var f = this;
            try {
                a.each(this.formats, function (g, h) {
                    if (f.flash.support[h] && b[h]) {
                        switch (h) {
                            case "m4a":
                            case "fla":
                                f._getMovie().fl_setAudio_m4a(b[h]);
                                break;
                            case "mp3":
                                f._getMovie().fl_setAudio_mp3(b[h]);
                                break;
                            case "rtmpa":
                                f._getMovie().fl_setAudio_rtmp(b[h])
                        }
                        f.status.src = b[h];
                        f.status.format[h] = true;
                        f.status.formatType = h;
                        return false
                    }
                });
                if (this.options.preload === "auto") {
                    this._flash_load();
                    this.status.waitForLoad = false
                }
            } catch (e) {
                this._flashError(e)
            }
        },
        _flash_setVideo: function (b) {
            var f = this;
            try {
                a.each(this.formats, function (g, h) {
                    if (f.flash.support[h] && b[h]) {
                        switch (h) {
                            case "m4v":
                            case "flv":
                                f._getMovie().fl_setVideo_m4v(b[h]);
                                break;
                            case "rtmpv":
                                f._getMovie().fl_setVideo_rtmp(b[h])
                        }
                        f.status.src = b[h];
                        f.status.format[h] = true;
                        f.status.formatType = h;
                        return false
                    }
                });
                if (this.options.preload === "auto") {
                    this._flash_load();
                    this.status.waitForLoad = false
                }
            } catch (e) {
                this._flashError(e)
            }
        },
        _flash_resetMedia: function () {
            this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            });
            this._flash_pause(NaN)
        },
        _flash_clearMedia: function () {
            try {
                this._getMovie().fl_clearMedia()
            } catch (b) {
                this._flashError(b)
            }
        },
        _flash_load: function () {
            try {
                this._getMovie().fl_load()
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad = false
        },
        _flash_play: function (f) {
            try {
                this._getMovie().fl_play(f)
            } catch (e) {
                this._flashError(e)
            }
            this.status.waitForLoad = false;
            this._flash_checkWaitForPlay()
        },
        _flash_pause: function (f) {
            try {
                this._getMovie().fl_pause(f)
            } catch (e) {
                this._flashError(e)
            }
            if (f > 0) {
                this.status.waitForLoad = false;
                this._flash_checkWaitForPlay()
            }
        },
        _flash_playHead: function (f) {
            try {
                this._getMovie().fl_play_head(f)
            } catch (e) {
                this._flashError(e)
            }
            this.status.waitForLoad || this._flash_checkWaitForPlay()
        },
        _flash_checkWaitForPlay: function () {
            if (this.status.waitForPlay) {
                this.status.waitForPlay = false;
                this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
                if (this.status.video) {
                    this.internal.poster.jq.hide();
                    this.internal.flash.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })
                }
            }
        },
        _flash_volume: function (f) {
            try {
                this._getMovie().fl_volume(f)
            } catch (e) {
                this._flashError(e)
            }
        },
        _flash_mute: function (f) {
            try {
                this._getMovie().fl_mute(f)
            } catch (e) {
                this._flashError(e)
            }
        },
        _getMovie: function () {
            return document[this.internal.flash.id]
        },
        _checkForFlash: function (g) {
            var f = false,
                j;
            if (window.ActiveXObject) {
                try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + g);
                    f = true
                } catch (h) {}
            } else {
                if (navigator.plugins && navigator.mimeTypes.length > 0) {
                    (j = navigator.plugins["Shockwave Flash"]) && navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1") >= g && (f = true)
                }
            }
            return f
        },
        _validString: function (b) {
            return b && typeof b === "string"
        },
        _limitValue: function (f, e, g) {
            return f < e ? e : f > g ? g : f
        },
        _urlNotSetError: function (b) {
            this._error({
                type: a.jPlayer.error.URL_NOT_SET,
                context: b,
                message: a.jPlayer.errorMsg.URL_NOT_SET,
                hint: a.jPlayer.errorHint.URL_NOT_SET
            })
        },
        _flashError: function (b) {
            var e;
            e = this.internal.ready ? "FLASH_DISABLED" : "FLASH";
            this._error({
                type: a.jPlayer.error[e],
                context: this.internal.flash.swf,
                message: a.jPlayer.errorMsg[e] + b.message,
                hint: a.jPlayer.errorHint[e]
            });
            this.internal.flash.jq.css({
                width: "1px",
                height: "1px"
            })
        },
        _error: function (b) {
            this._trigger(a.jPlayer.event.error, b);
            this.options.errorAlerts && this._alert("Error!" + (b.message ? "\n\n" + b.message : "") + (b.hint ? "\n\n" + b.hint : "") + "\n\nContext: " + b.context)
        },
        _warning: function (b) {
            this._trigger(a.jPlayer.event.warning, d, b);
            this.options.warningAlerts && this._alert("Warning!" + (b.message ? "\n\n" + b.message : "") + (b.hint ? "\n\n" + b.hint : "") + "\n\nContext: " + b.context)
        },
        _alert: function (b) {
            alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + b)
        },
        _emulateHtmlBridge: function () {
            var b = this;
            a.each(a.jPlayer.emulateMethods.split(/\s+/g), function (e, f) {
                b.internal.domNode[f] = function (g) {
                    b[f](g)
                }
            });
            a.each(a.jPlayer.event, function (h, g) {
                var f = true;
                a.each(a.jPlayer.reservedEvent.split(/\s+/g), function (j, e) {
                    if (e === h) {
                        return f = false
                    }
                });
                f && b.element.bind(g + ".jPlayer.jPlayerHtml", function () {
                    b._emulateHtmlUpdate();
                    var e = document.createEvent("Event");
                    e.initEvent(h, false, true);
                    b.internal.domNode.dispatchEvent(e)
                })
            })
        },
        _emulateHtmlUpdate: function () {
            var b = this;
            a.each(a.jPlayer.emulateStatus.split(/\s+/g), function (e, f) {
                b.internal.domNode[f] = b.status[f]
            });
            a.each(a.jPlayer.emulateOptions.split(/\s+/g), function (e, f) {
                b.internal.domNode[f] = b.options[f]
            })
        },
        _destroyHtmlBridge: function () {
            var b = this;
            this.element.unbind(".jPlayerHtml");
            a.each((a.jPlayer.emulateMethods + " " + a.jPlayer.emulateStatus + " " + a.jPlayer.emulateOptions).split(/\s+/g), function (e, f) {
                delete b.internal.domNode[f]
            })
        }
    };
    a.jPlayer.error = {
        FLASH: "e_flash",
        FLASH_DISABLED: "e_flash_disabled",
        NO_SOLUTION: "e_no_solution",
        NO_SUPPORT: "e_no_support",
        URL: "e_url",
        URL_NOT_SET: "e_url_not_set",
        VERSION: "e_version"
    };
    a.jPlayer.errorMsg = {
        FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
        FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
        NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
        NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
        URL: "Media URL could not be loaded.",
        URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
        VERSION: "jPlayer " + a.jPlayer.prototype.version.script + " needs Jplayer.swf version " + a.jPlayer.prototype.version.needFlash + " but found "
    };
    a.jPlayer.errorHint = {
        FLASH: "Check your swfPath option and that Jplayer.swf is there.",
        FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
        NO_SOLUTION: "Review the jPlayer options: support and supplied.",
        NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
        URL: "Check media URL is valid.",
        URL_NOT_SET: "Use setMedia() to set the media URL.",
        VERSION: "Update jPlayer files."
    };
    a.jPlayer.warning = {
        CSS_SELECTOR_COUNT: "e_css_selector_count",
        CSS_SELECTOR_METHOD: "e_css_selector_method",
        CSS_SELECTOR_STRING: "e_css_selector_string",
        OPTION_KEY: "e_option_key"
    };
    a.jPlayer.warningMsg = {
        CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
        CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
        CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
        OPTION_KEY: "The option requested in jPlayer('option') is undefined."
    };
    a.jPlayer.warningHint = {
        CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
        CSS_SELECTOR_METHOD: "Check your method name.",
        CSS_SELECTOR_STRING: "Check your css selector is a string.",
        OPTION_KEY: "Check your option name."
    }
})(jQuery);
window.Modernizr = function (ap, ao, an) {
    function O() {}
    function Q(f, e) {
        var h = f.charAt(0).toUpperCase() + f.substr(1),
            g = (f + " " + Z.join(h + " ") + h).split(" ");
        return !!S(g, e)
    }
    function S(e, c) {
        for (var f in e) {
            if (af[e[f]] !== an && (!c || c(e[f], ag))) {
                return !0
            }
        }
    }
    function U(d, c) {
        return ("" + d).indexOf(c) !== -1
    }
    function W(d, c) {
        return typeof d === c
    }
    function Y(d, c) {
        return aa(ab.join(d + ";") + (c || ""))
    }
    function aa(b) {
        af.cssText = b
    }
    var am = "1.7pre",
        al = {}, ak = !0,
        aj = ao.documentElement,
        ai = ao.head || ao.getElementsByTagName("head")[0],
        ah = "modernizr",
        ag = ao.createElement(ah),
        af = ag.style,
        ae = ao.createElement("input"),
        ad = ":)",
        ac = Object.prototype.toString,
        ab = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
        Z = "Webkit Moz O ms Khtml".split(" "),
        X = {
            svg: "http://www.w3.org/2000/svg"
        }, V = {}, T = {}, R = {}, P = [],
        N, M = function (b) {
            var h = ao.createElement("style"),
                g = ao.createElement("div"),
                f;
            h.textContent = b + "{#modernizr{height:3px}}", ai.appendChild(h), g.id = "modernizr", aj.appendChild(g), f = g.offsetHeight === 3, h.parentNode.removeChild(h), g.parentNode.removeChild(g);
            return !!f
        }, K = function () {
            function c(h, g) {
                g = g || ao.createElement(b[h] || "div");
                var a = (h = "on" + h) in g;
                a || (g.setAttribute || (g = ao.createElement("div")), g.setAttribute && g.removeAttribute && (g.setAttribute(h, ""), a = W(g[h], "function"), W(g[h], an) || (g[h] = an), g.removeAttribute(h))), g = null;
                return a
            }
            var b = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return c
        }(),
        J = ({}).hasOwnProperty,
        I;
    W(J, an) || W(J.call, an) ? I = function (d, c) {
        return c in d && W(d.constructor.prototype[c], an)
    } : I = function (d, c) {
        return J.call(d, c)
    }, V.csstransforms = function () {
        return !!S(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
    };
    for (var L in V) {
        I(V, L) && (N = L.toLowerCase(), al[N] = V[L](), P.push((al[N] ? "" : "no-") + N))
    }
    al.input || O(), al.crosswindowmessaging = al.postmessage, al.historymanagement = al.history, al.addTest = function (d, c) {
        d = d.toLowerCase();
        if (!al[d]) {
            c = !! c(), aj.className += " " + (c ? "" : "no-") + d, al[d] = c;
            return al
        }
    }, aa(""), ag = ae = null, al._enableHTML5 = ak, al._version = am, aj.className = aj.className.replace(/\bno-js\b/, "") + " js " + P.join(" ");
    return al
}(this, this.document);
(function (a, b, c) {
    a.CirclePlayer = function (f, j, e) {
        var d = this,
            h = {
                supplied: "m4a, oga",
                cssSelectorAncestor: "#cp_container_1",
                cssSelector: {
                    play: ".cp-play",
                    pause: ".cp-pause"
                }
            }, g = {
                bufferHolder: ".cp-buffer-holder",
                buffer1: ".cp-buffer-1",
                buffer2: ".cp-buffer-2",
                progressHolder: ".cp-progress-holder",
                progress1: ".cp-progress-1",
                progress2: ".cp-progress-2",
                circleControl: ".cp-circle-control"
            };
        this.cssClass = {
            gt50: "cp-gt50",
            fallback: "cp-fallback"
        };
        this.spritePitch = 104;
        this.spriteRatio = 0.24;
        this.player = b(f);
        this.media = b.extend({}, j);
        this.options = b.extend(true, {}, h, e);
        this.cssTransforms = Modernizr.csstransforms;
        this.audio = {};
        this.dragging = false;
        this.eventNamespace = ".CirclePlayer";
        this.jq = {};
        b.each(g, function (k, l) {
            d.jq[k] = b(d.options.cssSelectorAncestor + " " + l)
        });
        this._initSolution();
        this._initPlayer()
    };
    a.CirclePlayer.prototype = {
        _createHtml: function () {},
        _initPlayer: function () {
            var d = this;
            this.player.jPlayer(this.options);
            this.player.bind(b.jPlayer.event.ready + this.eventNamespace, function (e) {
                if (e.jPlayer.html.used && e.jPlayer.html.audio.available) {
                    d.audio = b(this).data("jPlayer").htmlElement.audio
                }
                b(this).jPlayer("setMedia", d.media);
                d._initCircleControl()
            });
            this.player.bind(b.jPlayer.event.play + this.eventNamespace, function (e) {
                b(this).jPlayer("pauseOthers")
            });
            this.player.bind(b.jPlayer.event.timeupdate + this.eventNamespace, function (e) {
                if (!d.dragging) {
                    d._timeupdate(e.jPlayer.status.currentPercentAbsolute)
                }
            });
            this.player.bind(b.jPlayer.event.progress + this.eventNamespace, function (h) {
                var g = 0;
                if ((typeof d.audio.buffered === "object") && (d.audio.buffered.length > 0)) {
                    if (d.audio.duration > 0) {
                        var e = 0;
                        for (var f = 0; f < d.audio.buffered.length; f++) {
                            e += d.audio.buffered.end(f) - d.audio.buffered.start(f)
                        }
                        g = 100 * e / d.audio.duration
                    }
                } else {
                    g = 0
                }
                d._progress(g)
            });
            this.player.bind(b.jPlayer.event.ended + this.eventNamespace, function (e) {
                d._resetSolution()
            })
        },
        _initSolution: function () {
            if (this.cssTransforms) {
                this.jq.progressHolder.show();
                this.jq.bufferHolder.show()
            } else {
                this.jq.progressHolder.addClass(this.cssClass.gt50).show();
                this.jq.progress1.addClass(this.cssClass.fallback);
                this.jq.progress2.hide();
                this.jq.bufferHolder.hide()
            }
            this._resetSolution()
        },
        _resetSolution: function () {
            if (this.cssTransforms) {
                this.jq.progressHolder.removeClass(this.cssClass.gt50);
                this.jq.progress1.css({
                    transform: "rotate(0deg)"
                });
                this.jq.progress2.css({
                    transform: "rotate(0deg)"
                }).hide()
            } else {
                this.jq.progress1.css("background-position", "0 " + this.spritePitch + "px")
            }
        },
        _initCircleControl: function () {
            var d = this;
            this.jq.circleControl.grab({
                onstart: function () {
                    d.dragging = true
                },
                onmove: function (f) {
                    var e = d._getArcPercent(f.position.x, f.position.y);
                    d.player.jPlayer("playHead", e).jPlayer("play");
                    d._timeupdate(e)
                },
                onfinish: function (f) {
                    d.dragging = false;
                    var e = d._getArcPercent(f.position.x, f.position.y);
                    d.player.jPlayer("playHead", e).jPlayer("play")
                }
            })
        },
        _timeupdate: function (f) {
            var d = f * 3.6 + "deg";
            var e = (Math.floor((Math.round(f)) * this.spriteRatio) - 1) * -this.spritePitch;
            if (f <= 50) {
                if (this.cssTransforms) {
                    this.jq.progressHolder.removeClass(this.cssClass.gt50);
                    this.jq.progress1.css({
                        transform: "rotate(" + d + ")"
                    });
                    this.jq.progress2.hide()
                } else {
                    this.jq.progress1.css("background-position", "0 " + e + "px")
                }
            } else {
                if (f <= 100) {
                    if (this.cssTransforms) {
                        this.jq.progressHolder.addClass(this.cssClass.gt50);
                        this.jq.progress1.css({
                            transform: "rotate(180deg)"
                        });
                        this.jq.progress2.css({
                            transform: "rotate(" + d + ")"
                        });
                        this.jq.progress2.show()
                    } else {
                        this.jq.progress1.css("background-position", "0 " + e + "px")
                    }
                }
            }
        },
        _progress: function (e) {
            var d = e * 3.6 + "deg";
            if (this.cssTransforms) {
                if (e <= 50) {
                    this.jq.bufferHolder.removeClass(this.cssClass.gt50);
                    this.jq.buffer1.css({
                        transform: "rotate(" + d + ")"
                    });
                    this.jq.buffer2.hide()
                } else {
                    if (e <= 100) {
                        this.jq.bufferHolder.addClass(this.cssClass.gt50);
                        this.jq.buffer1.css({
                            transform: "rotate(180deg)"
                        });
                        this.jq.buffer2.show();
                        this.jq.buffer2.css({
                            transform: "rotate(" + d + ")"
                        })
                    }
                }
            }
        },
        _getArcPercent: function (g, f) {
            var h = this.jq.circleControl.offset(),
                d = g - h.left - this.jq.circleControl.width() / 2,
                j = f - h.top - this.jq.circleControl.height() / 2,
                e = Math.atan2(j, d);
            if (e > -1 * Math.PI && e < -0.5 * Math.PI) {
                e = 2 * Math.PI + e
            }
            return (e + Math.PI / 2) / 2 * Math.PI * 10
        },
        setMedia: function (d) {
            this.media = b.extend({}, d);
            this.player.jPlayer("setMedia", this.media)
        },
        play: function (d) {
            this.player.jPlayer("play", d)
        },
        pause: function (d) {
            this.player.jPlayer("pause", d)
        },
        destroy: function () {
            this.player.unbind(this.eventNamespace);
            this.player.jPlayer("destroy")
        }
    }
})(NYTD.NYTMM, jQuery || NYTD.jQuery);
(function (a, b, c) {
    a.CirclePlayerWrapper = function (f, d) {
        var g = this;
        this.id = (a.CirclePlayerWrapper.last_id++);
        this.playing = false;
        this.options = b.extend(true, {
            media: {
                mp3: ""
            },
            jp_options: {
                supplied: "mp3",
                swfPath: "../swf/Jplayer.swf",
                cssSelectorAncestor: "#cp_container_" + g.id,
                timeupdate: function (h) {
                    g.onUpdate(h)
                },
                play: function () {
                    g.onPlay()
                },
                ended: function () {
                    g.onEnded()
                },
                pause: function () {
                    g.onPause()
                }
            }
        }, d);
        this.$container = b(f);
        var e = Mustache.to_html(this.template, {
            id: this.id
        });
        this.$container.html(e);
        this.circleplayer = new a.CirclePlayer("#cp_jplayer_" + this.id, this.options.media, this.options.jp_options)
    };
    a.CirclePlayerWrapper.last_id = 0;
    a.CirclePlayerWrapper.prototype = {
        template: '<div class="cp-jplayer" id="cp_jplayer_{{id}}"></div><div class="cp-container" id="cp_container_{{id}}"><div class="cp-buffer-holder"><div class="cp-buffer-1"></div><div class="cp-buffer-2"></div></div><div class="cp-progress-holder"><div class="cp-progress-1"></div><div class="cp-progress-2"></div></div><div class="cp-circle-control"></div><ul class="cp-controls"><li><a class="cp-play" tabindex="1">play</a></li><li><a class="cp-pause" style="display:none;" tabindex="1">pause</a></li></ul></div>',
        playToTime: function (d) {
            this.limit = d;
            this.circleplayer.play(0);
            this.limited = true
        },
        onPlay: function (f) {
            this.playing = true;
            var d = this;
            if (NYTD.NYTMM.iOS) {
                _.delay(_.once(function () {
                    var g = d.circleplayer.player;
                    var e = g.data("jPlayer").status;
                    var h = e.currentTime;
                    if (!h) {
                        d.circleplayer.setMedia(d.options.media);
                        d.circleplayer.play()
                    }
                }), 2000)
            }
        },
        onEnded: function () {
            this.playing = false
        },
        onPause: function () {
            this.playing = false
        },
        onUpdate: function (f) {
            var d = f.jPlayer.status,
                g = d.currentTime;
            if (this.limit && this.limited && g >= this.limit) {
                this.circleplayer.pause();
                this.limited = false
            }
        },
        isPlaying: function () {
            return this.playing
        },
        pause: function () {
            this.circleplayer.pause()
        },
        reset: function () {
            this.circleplayer.pause(0)
        }
    }
})(NYTD.NYTMM, jQuery || NYTD.jQuery);
(function (a) {
    a.fn.scrollVisible = function () {
        var e = a(this);
        var f = a(window).scrollTop();
        var d = f + a(window).height();
        var b = e.offset().top;
        var c = b + e.height();
        if ((c < f) || (b > d)) {
            return 0
        }
        if ((c <= d) && (b >= f)) {
            return 2
        }
        return 1
    };
    a.fn.viewPosition = function () {
        var c = a(this);
        var d = c.offset();
        var b = d.left - a(window).scrollLeft();
        var e = d.top - a(window).scrollTop();
        return {
            top: e,
            left: b
        }
    };
    a.fn.identify = function (c) {
        var b = 0;
        c = (c) ? c : "nytmm";
        return this.each(function () {
            if (a(this).attr("id")) {
                return
            }
            do {
                b++;
                var d = c + "_" + b
            } while (a("#" + d).length > 0);
            a(this).attr("id", d)
        })
    };
    a.extendByString = function (b, d) {
        if (d) {
            try {
                d = jQuery.parseJSON(d);
                a.log("Utils.extendByString: ");
                a.log(d)
            } catch (c) {
                d = {};
                a.log('Utils.extendByString : Error parsing advanced options JSON. Must be in this format {"key":"value"}')
            }
        } else {
            d = {}
        }
        a.log(a.extend(true, b, d));
        return a.extend(true, b, d)
    };
    a.fixTouchEvent = function (f) {
        if (f && f.originalEvent && f.originalEvent.touches && f.originalEvent.touches[0]) {
            var c = f.pageX || f.originalEvent.touches[0].pageX || f.originalEvent.changedTouches[0].pageX || 0;
            var b = f.pageY || f.originalEvent.touches[0].pageY || f.originalEvent.changedTouches[0].pageY || 0;
            var d = a(f.currentTarget);
            var g = d.offset();
            f.pageX = c - g.left;
            f.pageY = b - g.top;
            return f
        }
        return f
    }
})(jQuery);
(function (a) {
    a.VideoEvents = {
        START_EVENT: "NYTD.NYTMM.VideoEvent:start",
        PLAY_EVENT: "NYTD.NYTMM.VideoEvent:play",
        PAUSE_EVENT: "NYTD.NYTMM.VideoEvent:pause",
        STOP_EVENT: "NYTD.NYTMM.VideoEvent:stop",
        END_EVENT: "NYTD.NYTMM.VideoEvent:end",
        PROGRESS_EVENT: "NYTD.NYTMM.VideoEvent:progress",
        READY_EVENT: "NYTD.NYTMM.VideoEvent:ready",
        CHANGE_EVENT: "NYTD.NYTMM.VideoEvent:change",
        ERROR_EVENT: "NYTD.NYTMM.VideoEvent:error"
    }
})(NYTD.NYTMM);
(function (a, b, c) {
    a.YMMP4P = function (d, e) {
        if (d && e) {
            this.player = null;
            this.playing = false;
            this.playerReady = false;
            this.$container = null;
            e.container = d;
            this.build(e)
        }
    };
    a.YMMP4P.prototype.build = function (f) {
        var e = this;
        this.o = b.extend(true, {}, {
            container: c,
            vid: c,
            width: c,
            height: c,
            auto_start: false,
            shareURL: window.location.href
        }, f);
        if (this.o.meta && this.o.meta.params) {
            this.o = b.extend(true, this.o, {
                vid: this.o.meta.src,
                container: this.o.meta.params.dom_container || ("#" + this.o.meta.params.dom_id),
                width: this.o.meta.params.width,
                height: this.o.meta.params.height,
                auto_start: this.o.meta.params.auto_start,
                shareURL: this.o.meta.params.shareURL
            })
        }
        this.$container = b(this.o.container).empty();
        this.$container.append(this.getEmbed(this.o));
        this.player = document.getElementById(this.o.meta.params.dom_id + "_video");
        var d = function () {
            e.playerReady = true;
            e.unMuteVolume = e.player.volume;
            e.$container.trigger(a.VideoEvents.READY_EVENT);
            e.player.addEventListener("play", function () {
                e.playing = true;
                e.$container.trigger(a.VideoEvents.PLAY_EVENT)
            });
            e.player.addEventListener("ended", function () {
                e.playing = false;
                e.$container.trigger(a.VideoEvents.END_EVENT)
            });
            e.player.addEventListener("pause", function () {
                e.playing = false;
                e.$container.trigger(a.VideoEvents.PAUSE_EVENT)
            })
        };
        if (this.player.addEventListener) {
            this.player.addEventListener("canplay", d, false)
        } else {
            if (this.player.attachEvent) {
                this.player.attachEvent("canplay", d)
            }
        }
    };
    a.YMMP4P.prototype.getEmbed = function (f) {
        var e = '<video id="{{meta.params.dom_id}}_video" class="{{meta.params.h264.theme}}" width="{{width}}" height="{{height}}" {{#auto_start}}autoplay{{/auto_start}} preload="auto" {{#meta.params.h264.controls}}controls{{/meta.params.h264.controls}} {{#meta.params.h264.loop}}loop{{/meta.params.h264.loop}} {{#meta.params.h264.poster}}poster="{{meta.params.h264.poster}}"{{/meta.params.h264.poster}}>{{#meta.src}}<source type="video/mp4" src="{{meta.src}}">{{/meta.src}}</video>';
        var d = b(Mustache.to_html(e, f)).identify("nytmm_YMMP4P");
        return d
    };
    a.YMMP4P.prototype.play = function (d) {
        seconds = (d && d.time !== null) ? d.time : 0;
        if (seconds) {
            if (this.isPlaying()) {
                this.player.currentTime = seconds
            } else {
                this.player.currentTime = seconds;
                this.player.play()
            }
        } else {
            this.player.play()
        }
    };
    a.YMMP4P.prototype.pause = function () {
        this.player.pause()
    };
    a.YMMP4P.prototype.stop = function () {
        this.player.pause();
        this.player.currentTime = 0
    };
    a.YMMP4P.prototype.position = function (d) {
        if (d === c || d === null) {
            return this.player.currentTime
        } else {
            this.player.currentTime = d
        }
    };
    a.YMMP4P.prototype.mute = function (d) {
        if (d === c || d === null) {
            return this.player.volume === 0
        } else {
            if (d) {
                this.unMuteVolume = this.volume();
                this.volume(0)
            } else {
                this.volume(this.unMuteVolume)
            }
        }
    };
    a.YMMP4P.prototype.volume = function (d) {
        if (d === c || d === null) {
            return this.player.volume
        } else {
            if (d > 1) {
                d = 1
            }
            if (d < 0) {
                d = 0
            }
            this.player.volume = d
        }
    };
    a.YMMP4P.prototype.isPlaying = function (d) {
        if (this.player) {
            return this.playing
        } else {
            return false
        }
    };
    a.YMMP4P.prototype.destroy = function () {
        b.log("destroy");
        if (this.player) {
            this.stop()
        }
    }
})(NYTD.NYTMM, jQuery);
/*
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if (typeof deconcept == "undefined") {
    var deconcept = new Object()
}
if (typeof deconcept.util == "undefined") {
    deconcept.util = new Object()
}
if (typeof deconcept.SWFObjectUtil == "undefined") {
    deconcept.SWFObjectUtil = new Object()
}
deconcept.SWFObject = function (n, b, o, e, k, l, g, f, d, m) {
    if (!document.getElementById) {
        return
    }
    this.DETECT_KEY = m ? m : "detectflash";
    this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
    this.params = new Object();
    this.variables = new Object();
    this.attributes = new Array();
    if (n) {
        this.setAttribute("swf", n)
    }
    if (b) {
        this.setAttribute("id", b)
    }
    if (o) {
        this.setAttribute("width", o)
    }
    if (e) {
        this.setAttribute("height", e)
    }
    if (k) {
        this.setAttribute("version", new deconcept.PlayerVersion(k.toString().split(".")))
    }
    this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion();
    if (!window.opera && document.all && this.installedVer.major > 7) {
        deconcept.SWFObject.doPrepUnload = true
    }
    if (l) {
        this.addParam("bgcolor", l)
    }
    var a = g ? g : "high";
    this.addParam("quality", a);
    this.setAttribute("useExpressInstall", false);
    this.setAttribute("doExpressInstall", false);
    var j = (f) ? f : window.location;
    this.setAttribute("xiRedirectUrl", j);
    this.setAttribute("redirectUrl", "");
    if (d) {
        this.setAttribute("redirectUrl", d)
    }
};
deconcept.SWFObject.prototype = {
    useExpressInstall: function (a) {
        this.xiSWFPath = !a ? "expressinstall.swf" : a;
        this.setAttribute("useExpressInstall", true)
    },
    setAttribute: function (a, b) {
        this.attributes[a] = b
    },
    getAttribute: function (a) {
        return this.attributes[a]
    },
    addParam: function (b, a) {
        this.params[b] = a
    },
    getParams: function () {
        return this.params
    },
    addVariable: function (b, a) {
        this.variables[b] = a
    },
    getVariable: function (a) {
        return this.variables[a]
    },
    getVariables: function () {
        return this.variables
    },
    getVariablePairs: function () {
        var c = new Array();
        var b;
        var a = this.getVariables();
        for (b in a) {
            c[c.length] = b + "=" + a[b]
        }
        return c
    },
    getSWFHTML: function () {
        var b = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "PlugIn");
                this.setAttribute("swf", this.xiSWFPath)
            }
            b = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute("swf") + '" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '"';
            b += ' id="' + this.getAttribute("id") + '" name="' + this.getAttribute("id") + '" ';
            var f = this.getParams();
            for (var e in f) {
                b += [e] + '="' + f[e] + '" '
            }
            var d = this.getVariablePairs().join("&");
            if (d.length > 0) {
                b += 'flashvars="' + d + '"'
            }
            b += "/>"
        } else {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "ActiveX");
                this.setAttribute("swf", this.xiSWFPath)
            }
            b = '<object id="' + this.getAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '">';
            b += '<param name="movie" value="' + this.getAttribute("swf") + '" />';
            var c = this.getParams();
            for (var e in c) {
                b += '<param name="' + e + '" value="' + c[e] + '" />'
            }
            var a = this.getVariablePairs().join("&");
            if (a.length > 0) {
                b += '<param name="flashvars" value="' + a + '" />'
            }
            b += "</object>"
        }
        return b
    },
    write: function (b) {
        if (this.getAttribute("useExpressInstall")) {
            var a = new deconcept.PlayerVersion([6, 0, 65]);
            if (this.installedVer.versionIsValid(a) && !this.installedVer.versionIsValid(this.getAttribute("version"))) {
                this.setAttribute("doExpressInstall", true);
                this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl")));
                document.title = document.title.slice(0, 47) + " - Flash Player Installation";
                this.addVariable("MMdoctitle", document.title)
            }
        }
        if (this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version"))) {
            var c = (typeof b == "string") ? document.getElementById(b) : b;
            c.innerHTML = this.getSWFHTML();
            return true
        } else {
            if (this.getAttribute("redirectUrl") != "") {
                document.location.replace(this.getAttribute("redirectUrl"))
            }
        }
        return false
    }
};
deconcept.SWFObjectUtil.getPlayerVersion = function () {
    var f = new deconcept.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && a.description) {
            f = new deconcept.PlayerVersion(a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."))
        }
    } else {
        if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) {
            var b = 1;
            var c = 3;
            while (b) {
                try {
                    c++;
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + c);
                    f = new deconcept.PlayerVersion([c, 0, 0])
                } catch (d) {
                    b = null
                }
            }
        } else {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
            } catch (d) {
                try {
                    var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    f = new deconcept.PlayerVersion([6, 0, 21]);
                    b.AllowScriptAccess = "always"
                } catch (d) {
                    if (f.major == 6) {
                        return f
                    }
                }
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (d) {}
            }
            if (b != null) {
                f = new deconcept.PlayerVersion(b.GetVariable("$version").split(" ")[1].split(","))
            }
        }
    }
    return f
};
deconcept.PlayerVersion = function (a) {
    this.major = a[0] != null ? parseInt(a[0]) : 0;
    this.minor = a[1] != null ? parseInt(a[1]) : 0;
    this.rev = a[2] != null ? parseInt(a[2]) : 0
};
deconcept.PlayerVersion.prototype.versionIsValid = function (a) {
    if (this.major < a.major) {
        return false
    }
    if (this.major > a.major) {
        return true
    }
    if (this.minor < a.minor) {
        return false
    }
    if (this.minor > a.minor) {
        return true
    }
    if (this.rev < a.rev) {
        return false
    }
    return true
};
deconcept.util = {
    getRequestParameter: function (c) {
        var d = document.location.search || document.location.hash;
        if (c == null) {
            return d
        }
        if (d) {
            var b = d.substring(1).split("&");
            for (var a = 0; a < b.length; a++) {
                if (b[a].substring(0, b[a].indexOf("=")) == c) {
                    return b[a].substring((b[a].indexOf("=") + 1))
                }
            }
        }
        return ""
    }
};
deconcept.SWFObjectUtil.cleanupSWFs = function () {
    var b = document.getElementsByTagName("OBJECT");
    for (var c = b.length - 1; c >= 0; c--) {
        b[c].style.display = "none";
        for (var a in b[c]) {
            if (typeof b[c][a] == "function") {
                b[c][a] = function () {}
            }
        }
    }
};
if (deconcept.SWFObject.doPrepUnload) {
    if (!deconcept.unloadSet) {
        deconcept.SWFObjectUtil.prepUnload = function () {
            __flash_unloadHandler = function () {};
            __flash_savedUnloadHandler = function () {};
            window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs)
        };
        window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload);
        deconcept.unloadSet = true
    }
}
if (!document.getElementById && document.all) {
    document.getElementById = function (a) {
        return document.all[a]
    }
}
if (typeof SWFObject == "undefined") {
    var getQueryParamValue = deconcept.util.getRequestParameter;
    var FlashObject = deconcept.SWFObject;
    var SWFObject = deconcept.SWFObject
}
if (!SWFObject.swfEvents && !SWFObject.swfListeners) {
    SWFObject.swfEvents = new Object();
    SWFObject.swfListeners = new Object();
    SWFObject.dispatchEventToSWF = function (b, c) {
        var a = SWFObject.swfEvents["s" + b];
        if (a == null) {
            a = []
        }
        a.push(c);
        SWFObject.swfEvents["s" + b] = a
    };
    SWFObject.cancelEventsToSWF = function (b, d) {
        var a = SWFObject.swfEvents["s" + b];
        if (a == null) {
            return
        }
        for (var c = 0; c < a.length; c++) {
            if (d == null || a[c].type == d) {
                a.splice(c, 1);
                c--
            }
        }
    };
    SWFObject.hasEventsFor = function (b) {
        var a = SWFObject.swfEvents["s" + b];
        return (a && a.length > 0)
    };
    SWFObject.getEventsFor = function (b) {
        var a = SWFObject.swfEvents["s" + b];
        if (a) {
            SWFObject.swfEvents["s" + b] = [];
            return a
        }
        return []
    };
    SWFObject.addSWFEventListener = function (b, a, c) {
        b = b.replace(/[^\w]/g, "");
        if (SWFObject.swfListeners["swf" + b] == null) {
            SWFObject.swfListeners["swf" + b] = [{
                    id: b,
                    type: a,
                    callback: c
                }
            ]
        } else {
            SWFObject.swfListeners["swf" + b].push({
                id: b,
                type: a,
                callback: c
            })
        }
    };
    SWFObject.onSWFEvent = function (d) {
        if (d.type == null || d.target == null) {
            return
        }
        var a = d.target.replace(/[^\w]/g, "");
        var c = SWFObject.swfListeners["swf" + a];
        if (c == null) {
            return
        }
        for (var b = 0; b < c.length; b++) {
            if (c[b].id == a && c[b].type == d.type) {
                c[b].callback(d)
            }
        }
    }
}(function (a, b) {
    a.ProgressMonitorEvent = a.ProgressMonitorEvent || {};
    a.ProgressMonitorEvent.IN_REGION = "NYTD.NYTMM.ProgressMonitorEvent:in";
    a.ProgressMonitorEvent.OUT_REGION = "NYTD.NYTMM.ProgressMonitorEvent:out";
    a.ProgressMonitorEvent.SKIPPED_REGION = "NYTD.NYTMM.ProgressMonitorEvent:skip";
    a.ProgressMonitor = a.ProgressMonitor || function (c) {
        c = c || {};
        this.$trigger = (c.target) ? b(c.target) : b(document);
        this._last = null;
        this._max = c.max || 0;
        this.regions(c.regions || []);
        this.continuousMode(c.continuousMode);
        this.onIn = c.onIn || function (e) {
            b.log("in", e.data)
        };
        this.onOut = c.onOut || function (e) {
            b.log("out", e.data)
        };
        this.onSkip = c.onSkip || function (e) {
            b.log("skip", e.data)
        }
    };
    a.ProgressMonitor.prototype.push = function (e, c, g) {
        var f = {
            i: undefined,
            o: undefined,
            data: undefined,
            enter: null,
            exit: null,
            skip: null
        };
        if (g !== undefined) {
            f = b.extend(f, {
                i: e,
                o: c,
                data: g
            })
        } else {
            f = b.extend(f, e)
        } if (f.o === undefined || f.o === null || isNaN(f.o)) {
            f.o = f.i
        }
        if (f.i > f.o) {
            throw new Error("ProgressMonitor: Can not create region with in > out")
        }
        if (f.data === undefined || f.data === null) {
            f.data = "region_" + this._regions.length
        }
        this._regions.push(f);
        this._regions = _.sortBy(this._regions, function (d) {
            return d.i
        });
        this._max = Math.max(this._max, f.o);
        if (this._continuousMode) {
            this.expandRegions()
        }
    };
    a.ProgressMonitor.prototype.update = function (l, d) {
        var g = this._last;
        if (l === undefined) {
            return g
        }
        if (g === l) {
            return
        }
        if (g === null || d) {
            this._last = g = l;
            return
        }
        for (var c = 0; c < this._regions.length; c++) {
            var k = this._regions[c];
            var h = k.i;
            var f = k.o;
            var e = {
                data: k.data,
                previous: g,
                position: l,
                backwards: (g > l)
            };
            if (((g < h && l > f) || (g > f && l < h)) || (h === f && l === h && g !== l)) {
                this.onSkip(e);
                if (k.skip && b.isFunction(k.skip)) {
                    k.skip(e)
                }
                this.$trigger.trigger(a.ProgressMonitorEvent.SKIPPED_REGION, e)
            } else {
                if ((h <= l && l < f) && (g < h || g >= f)) {
                    this.onIn(e);
                    if (k.enter && b.isFunction(k.enter)) {
                        k.enter(e)
                    }
                    this.$trigger.trigger(a.ProgressMonitorEvent.IN_REGION, e)
                } else {
                    if ((h <= g && g < f) && (l < h || l >= f)) {
                        this.onOut(e);
                        if (k.exit && b.isFunction(k.exit)) {
                            k.exit(e)
                        }
                        this.$trigger.trigger(a.ProgressMonitorEvent.OUT_REGION, e)
                    }
                }
            }
        }
        this._last = l
    };
    a.ProgressMonitor.prototype.index = a.ProgressMonitor.prototype.update;
    a.ProgressMonitor.prototype.getRegionsAt = function (c) {
        return (_.filter(this._regions, function (f) {
            var e = f.i;
            var d = f.o;
            return (e <= c && c <= d)
        }))
    };
    a.ProgressMonitor.prototype.clear = function () {
        this._regions = [];
        this._last = null
    };
    a.ProgressMonitor.prototype.expandRegions = function () {
        for (var c = 0; c < this._regions.length - 1; c++) {
            this._regions[c].o = this._regions[c + 1].i
        }
        if (this._regions.length > 0) {
            this._regions[this._regions.length - 1].o = this._max + 0.001
        }
    };
    a.ProgressMonitor.prototype.max = function (c) {
        if (c === undefined) {
            return this._max
        } else {
            this._max = c;
            if (this._continuousMode) {
                this.expandRegions()
            }
        }
    };
    a.ProgressMonitor.prototype.regions = function (c) {
        if (c === undefined) {
            return this._regions
        } else {
            this._regions = c;
            this._regions = _.sortBy(this._regions, function (d) {
                return d.i
            });
            if (this._continuousMode) {
                this.expandRegions()
            }
        }
    };
    a.ProgressMonitor.prototype.continuousMode = function (c) {
        if (c === undefined) {
            return this._continuousMode
        } else {
            this._continuousMode = c;
            if (this._continuousMode) {
                this.expandRegions()
            }
        }
    }
})(NYTD.NYTMM, jQuery);
(function (c, a, b, e, d) {
    if (b != "undefined" && typeof b.YMBCP == "undefined") {
        b.YMBCP = function (f, g) {};
        b.YMBCP.prototype.build = function (f) {
            if (b.YMBCP.loadedBCAssets) {
                return this.BCBuild(f)
            } else {
                if (b.YMBCP.loadingBCAssets) {
                    _.delay(_.bind(function () {
                        this.build(f)
                    }, this), 500)
                } else {
                    b.YMBCP.loadingBCAssets = true;
                    e.log("NYTD.NYTMM.YMBC: Loading BrightCove assets");
                    NYTD.Video.Factory.loadBCAssets(_.bind(function () {
                        e.log("NYTD.NYTMM.YMBC: Loaded BrightCove assets");
                        b.YMBCP.loadedBCAssets = true;
                        return this.BCBuild(f)
                    }, this))
                }
            }
        };
        b.YMBCP.prototype.BCBuild = function (g) {
            var j = g.meta;
            var k = {
                adxAdPositions: j.params.brightcove.adxAdPositions,
                adxPagename: j.params.brightcove.adxPagename,
                playerId: j.params.brightcove.playerId,
                videoId: j.src,
                playerType: j.params.brightcove.playerType,
                dynamicStreaming: "true",
                enableInitialBandwidthDetection: "true",
                connectOnLoad: "true",
                includeAPI: true
            };
            if (j.params.bc_shareURL) {
                k.shareURL = j.params.bc_shareURL
            }
            k = _.extend(g.meta.params, k);
            k.container = k.dom_id;
            k.id = j.player_id;
            k.autoStart = (k.auto_start) ? "true" : "false";
            this.video = null;
            this.kirkPlayer = null;
            this.bcPlayer = null;
            var h = this.el = e("#" + k.container);
            this.video = NYTD.Video.Factory.create(k);
            this.video.setEnableInitialBandwidthDetection(true);
            this.video.setConnectOnLoad(true);
            var f = this.video.getSubscription();
            f.subscribe(NYTD.Video.VideoEvents.TEMPLATE_READY, _.bind(function (l) {
                e.log("NYTD.NYTMM.YMBC: Template ready");
                this.kirkPlayer = l.player;
                this.bcPlayer = l.player.getVideoModule();
                this.bcPlayer.addEventListener(BCVideoEvent.VIDEO_PROGRESS, function (o) {
                    var m = o.position;
                    var n = o.duration;
                    h.trigger(b.VideoEvents.PROGRESS_EVENT, {
                        position: m,
                        duration: n
                    })
                });
                this.bcPlayer.addEventListener(BCVideoEvent.VIDEO_STOP, function (m) {
                    h.trigger(b.VideoEvents.PAUSE_EVENT)
                })
            }, this));
            f.subscribe(NYTD.Video.VideoEvents.VIDEO_COMPLETE, _.bind(function (l) {
                h.trigger(b.VideoEvents.END_EVENT)
            }, this));
            f.subscribe(NYTD.Video.VideoEvents.STREAM_START, _.bind(function (l) {}, this));
            f.subscribe(NYTD.Video.VideoEvents.VIDEO_START, _.bind(function (l) {
                h.trigger(b.VideoEvents.PLAY_EVENT)
            }, this));
            f.subscribe(NYTD.Video.VideoEvents.PLAY, _.bind(function (l) {}, this));
            f.subscribe(NYTD.Video.VideoEvents.VIDEO_LOAD, _.bind(function (l) {}, this));
            f.subscribe(NYTD.Video.VideoEvents.CONTENT_LOAD, _.bind(function (l) {
                h.trigger(b.VideoEvents.READY_EVENT)
            }, this))
        };
        b.YMBCP.prototype.play = function () {
            this.kirkPlayer.getMenuModule().closeMenuPage();
            this.bcPlayer.play()
        };
        b.YMBCP.prototype.pause = function () {
            this.bcPlayer.pause()
        };
        b.YMBCP.prototype.stop = function () {
            this.bcPlayer.stop()
        };
        b.YMBCP.prototype.position = function (f) {
            if (f === d || f === null) {
                return this.bcPlayer.getVideoPosition()
            } else {
                return this.bcPlayer.seek(f)
            }
        };
        b.YMBCP.prototype.mute = function (f) {
            if (f === d || f === null) {
                return this.bcPlayer.isMuted()
            } else {
                return this.bcPlayer.mute(f)
            }
        };
        b.YMBCP.prototype.volume = function (f) {
            if (f === d || f === null) {
                return this.bcPlayer.getVolume()
            } else {
                return this.bcPlayer.setVolume(f)
            }
        };
        b.YMBCP.prototype.isPlaying = function () {
            if (this.bcPlayer) {
                return this.bcPlayer.isPlaying()
            } else {
                return false
            }
        };
        b.YMBCP.prototype.destroy = function () {
            if (this.bcPlayer) {
                this.stop()
            }
            this.bcPlayer = null
        }
    }
})(window, document, NYTD.NYTMM, jQuery);
(function (a, b, c) {
    if (a !== "undefined" && typeof a.YMOBCP === "undefined") {
        a.YMOBCP_PLAYERS = a.YMOBCP_PLAYERS || {};
        a.YMOBCP_TRACKING = {
            play: {
                action: "Play",
                event: "play",
                load: "user",
                ti: "Play",
                z_dcsm: "0"
            },
            auto_start: {
                action: "Play",
                event: "play",
                load: "auto",
                ti: "PlayStart",
                z_dcsm: "0"
            },
            stop: {
                action: "Finish",
                event: "finish",
                load: "null",
                ti: "FinishStop",
                z_dcsm: "0"
            },
            big: {
                action: "GoBig",
                event: "Go Big",
                load: "null",
                ti: "GoBig",
                z_dcsm: "1"
            },
            small: {
                action: "GoSmall",
                event: "Go Small",
                load: "null",
                ti: "GoSmall",
                z_dcsm: "1"
            }
        };
        a.YMOBCP_UI = a.YMOBCP_UI || {};
        a.YMOBCP_UI = {
            HD: {
                aspect: 16 / 9,
                playerId: "1799361363001",
                playerKey: "AQ~~,AAAAAGhEzEA~,gimxaULoaz---bHAzJs6U800nYycdjf1",
                playerType: "NYTMM Chromeless Player"
            },
            TV: {
                aspect: 4 / 3,
                playerId: "1876639570001",
                playerKey: "AQ~~,AAAAAGhEzEA~,gimxaULoaz-FQ4kwjIdUOZRB29RCOUHg",
                playerType: "NYTMM Chromeless with 4:3 Controls"
            },
            PHOTO: {
                aspect: 3 / 2,
                playerId: "1902450108001",
                playerKey: "AQ~~,AAAAAGhEzEA~,gimxaULoaz8QoaW099xi1KCk1g12Q9I_",
                playerType: "NYTMM Chromeless with 3:2 Controls"
            },
            CHROMELESS: {
                aspect: 16 / 9,
                playerId: "1949044342001",
                playerKey: "AQ~~,AAAAAGhEzEA~,gimxaULoaz9HgdoCZQGCSFNI1e8sW-Js",
                playerType: "NYTMM Chromeless - No Controls"
            }
        };
        a.YMOBCP = function (d, e) {
            if (!window.brightcove) {
                throw new Error("NYTD.NYTMM.YMVP.YMOBCP: Brightcove apis not available (http://admin.brightcove.com/js/BrightcoveExperiences.js)")
            }
            if (d && e) {
                e.container = d;
                this.build(e)
            }
        };
        a.YMOBCP.prototype.build = function (e) {
            this.player = null;
            this.experience = null;
            this.content = null;
            this.cues = null;
            this.captions = null;
            this.cached = {
                video: null,
                isPlaying: false,
                duration: 0,
                position: 0,
                rendition: null
            };
            this.o = b.extend(true, {}, {
                container: c,
                _playerID: _.uniqueId("ymobcp"),
                vid: c,
                width: c,
                height: c,
                trueWidth: c,
                trueHeight: c,
                auto_start: false,
                shareURL: window.location.href,
                ui: a.YMOBCP_UI.HD,
                brightcove: {
                    bgColor: "#FFFFFF",
                    playerId: c,
                    playerKey: c,
                    playerType: c,
                    htmlFallback: true,
                    forceHTML: false,
                    isVid: true,
                    isUI: true
                }
            }, e);
            if (a.iOS && this.o.ui !== a.YMOBCP_UI.HD) {
                b.log("iOS -- forcing HD aspect ratio");
                this.o.ui = a.YMOBCP_UI.HD
            }
            if (!this.o.brightcove.playerId) {
                b.extend(true, this.o.brightcove, this.o.ui)
            }
            if (this.o.meta && this.o.meta.params) {
                this.o = b.extend(true, this.o, {
                    vid: this.o.meta.src,
                    container: this.o.meta.params.dom_container || ("#" + this.o.meta.params.dom_id),
                    width: this.o.meta.params.width,
                    height: this.o.meta.params.height,
                    auto_start: this.o.meta.params.auto_start,
                    shareURL: this.o.meta.params.shareURL,
                    brightcove: {
                        bgColor: this.o.meta.params.bgColor
                    }
                })
            }
            a.YMOBCP_PLAYERS[this.o._playerID] = this;
            a.YMOBCP_PLAYERS[this.o._playerID].templateLoadedHandler = _.bind(this.templateLoadedHandler, this);
            a.YMOBCP_PLAYERS[this.o._playerID].templateReadyHandler = _.bind(this.templateReadyHandler, this);
            this.$container = b(this.o.container).empty().css({
                overflow: "hidden",
                position: "relative"
            }).addClass("nytmm_YMOBCP");
            this.$inner = b('<div class="nytmm_YMOBCP_inner"></div>').appendTo(this.$container);
            var d = this.o.ui.aspect;
            if (!this.o.width) {
                if (!this.o.height) {
                    this.o.width = Math.max(this.$container.width(), 600)
                } else {
                    this.o.width = Math.round(this.o.height * d)
                }
            }
            if (!this.o.height) {
                this.o.height = Math.round(this.o.width / d)
            }
            if (!this.o.trueWidth) {
                this.o.trueWidth = Math.round(Math.max(this.o.width, this.o.height * 16 / 9))
            }
            if (!this.o.trueHeight) {
                this.o.trueHeight = Math.round(Math.max(this.o.height, this.o.width * 9 / 16))
            }
            this.$inner.width(this.o.trueWidth).height(this.o.trueHeight);
            this.$container.width(this.o.width).height(this.o.height);
            if (d > (16 / 9 + 0.01)) {
                b.log("Crop off letterbox");
                this.$inner.css("margin-top", Math.round(this.o.height / 2 - this.o.trueHeight / 2) + "px")
            } else {
                if (d < (16 / 9 - 0.01)) {
                    b.log("Crop off pillbox");
                    this.$inner.css("margin-left", Math.round(this.o.width / 2 - this.o.trueWidth / 2) + "px")
                }
            }
            b.log(this.o.trueWidth, this.o.trueHeight, " vs ", this.o.width, this.o.height);
            this.$inner.append(this.getEmbed(this.o));
            if (!window.brightcove) {
                b.log("NYTD.NYTMM.YMOBCP: Brightcove APIs not found, loading automatically");
                throw new Error("NYTD.NYTMM.YMOBCP: Oops auto dependency loading not yet implemented. Sorry!")
            } else {
                brightcove.createExperiences()
            }
        };
        a.YMOBCP.prototype.getEmbed = function (f) {
            var e = '<object class="BrightcoveExperience"><param name="autoStart" value="{{auto_start}}" /><param name="width" value="100%" /><param name="height" value="100%" /><param name="linkBaseURL" value="{{shareURL}}" /><param name="htmlFallback" value="{{brightcove.htmlFallback}}" />{{#brightcove.forceHTML}}<param name="forceHTML" value="{{brightcove.forceHTML}}" />{{/brightcove.forceHTML}}<param name="bgcolor" value="{{brightcove.bgColor}}" /><param name="playerID" value="{{brightcove.playerId}}" /><param name="playerKey" value="{{brightcove.playerKey}}" /><param name="isVid" value="{{brightcove.isVid}}" /><param name="isUI" value="{{brightcove.isUI}}" /><param name="dynamicStreaming" value="true" /><param name="includeAPI" value="true" /><param name="wmode" value="transparent" /><param name="templateLoadHandler" value="NYTD.NYTMM.YMOBCP_PLAYERS.{{_playerID}}.templateLoadedHandler" /><param name="templateReadyHandler" value="NYTD.NYTMM.YMOBCP_PLAYERS.{{_playerID}}.templateReadyHandler" /><param name="templateErrorHandler" value="NYTD.NYTMM.YMOBCP_PLAYERS.{{_playerID}}.templateErrorHandler" /></object>';
            var d = b(Mustache.to_html(e, f)).identify("nytmm_ymobcp");
            return d
        };
        a.YMOBCP.prototype.track = function (f) {
            var d = this.cacheGet("video", false) || {
                name: "unknown",
                id: this.o.vid
            };
            var h = b.extend(true, {
                playerType: this.o.brightcove.playerType,
                kicker: (this.o.kicker || "multimedia"),
                auto_start: this.o.auto_start,
                name: d.displayName,
                id: d.id
            }, a.YMOBCP_TRACKING[f]);
            try {
                b.log("TRACK", f);
                dcsMultiTrack("DCS.dcssip", "www.dream4tk.org", "DCS.dcsuri", "/video/" + h.playerType + "/" + h.action + ".html", "WT.ti", "Video " + h.playerType + " " + h.ti, "WT.cg_n", "Video", "WT.videoCategory", h.kicker, "WT.videoEvent", h.event, "WT.videoLoad", h.load, "WT.videoName", h.name, "WT.z_gpt", "Multimedia", "WT.z_gpst", "Video", "WT.z_gpsst", "Video-Play", "WT.z_vid", h.id, "WT.z_vpt", h.playerType, "WT.z_dcsm", h.z_dcsm)
            } catch (g) {
                b.log("WT Error, probably on staging");
                b.log(g)
            }
        };
        a.YMOBCP.prototype.cacheGet = function (d, f) {
            var e = this;
            if (this.player && f !== false) {
                if (!f) {
                    f = function () {}
                }
                switch (d) {
                    case "video":
                        this.player.getCurrentVideo(function (g) {
                            e.cached.video = g;
                            f(g)
                        });
                        break;
                    case "isPlaying":
                        this.player.getIsPlaying(function (g) {
                            e.cached.isPlaying = g;
                            f(g)
                        });
                        break;
                    case "duration":
                        this.player.getVideoDuration(function (g) {
                            e.cached.duration = g;
                            f(g)
                        });
                        break;
                    case "position":
                        this.player.getVideoPosition(function (g) {
                            e.cached.position = g;
                            f(g)
                        });
                        break;
                    case "rendition":
                        this.player.getCurrentRendition(function (g) {
                            e.cached.rendition = g;
                            f(g)
                        });
                        break;
                    default:
                        b.log("ERROR: ", d, "is not a supported BC callback");
                        break
                }
            }
            return this.cached[d]
        };
        a.YMOBCP.prototype.templateLoadedHandler = function (d) {
            var e = brightcove.api.getExperience(d);
            this.player = e.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
            this.experience = e.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
            this.content = e.getModule(brightcove.api.modules.APIModules.CONTENT);
            this.cues = e.getModule(brightcove.api.modules.APIModules.CUE_POINTS);
            this.captions = e.getModule(brightcove.api.modules.APIModules.CAPTIONS)
        };
        a.YMOBCP.prototype.templateReadyHandler = function (d) {
            var e = this;
            if (this.o.vid) {
                this.load(this.o.vid)
            }
            this.cacheGet("video");
            this.cacheGet("duration");
            this.cacheGet("position");
            this.cacheGet("rendition");
            this.player.addEventListener(brightcove.api.events.MediaEvent.BEGIN, function (f) {
                b.log("START VIDEO");
                e.cacheGet("video");
                e.cacheGet("isPlaying");
                e.$container.trigger(a.VideoEvents.START_EVENT, f);
                if (e.auto_start()) {
                    e.track("auto_start")
                } else {
                    e.track("play")
                }
            });
            this.player.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, function (f) {
                e.$container.trigger(a.VideoEvents.END_EVENT, f);
                e.track("stop")
            });
            this.player.addEventListener(brightcove.api.events.MediaEvent.CHANGE, function (f) {
                e.cacheGet("video");
                e.$container.trigger(a.VideoEvents.CHANGE_EVENT, f)
            });
            this.player.addEventListener(brightcove.api.events.MediaEvent.PLAY, function (f) {
                e.cacheGet("isPlaying");
                e.$container.trigger(a.VideoEvents.PLAY_EVENT, f)
            });
            this.player.addEventListener(brightcove.api.events.MediaEvent.PROGRESS, function (f) {
                e.cached.position = f.position;
                e.$container.trigger(a.VideoEvents.PROGRESS_EVENT, f)
            });
            this.player.addEventListener(brightcove.api.events.MediaEvent.STOP, function (f) {
                e.cacheGet("isPlaying");
                e.$container.trigger(a.VideoEvents.STOP_EVENT, f)
            });
            this.player.addEventListener(brightcove.api.events.MediaEvent.ERROR, function (f) {
                e.$container.trigger(a.VideoEvents.ERROR_EVENT, f)
            });
            this.$container.trigger(a.VideoEvents.READY_EVENT)
        };
        a.YMOBCP.prototype.templateErrorHandler = function (d) {
            b.log("BRIGHTCOVE ERROR IN YMOBCP: ", d.type, d.errorType, d.code, d.info);
            try {
                this.$container.trigger(a.VideoEvents.ERROR_EVENT, d)
            } catch (f) {}
        };
        a.YMOBCP.prototype.load = function (d) {
            if (this.o.auto_start) {
                this.player.loadVideoByReferenceID(d)
            } else {
                this.player.cueVideoByReferenceID(d)
            }
        };
        a.YMOBCP.prototype.auto_start = function (d) {
            if (d === c) {
                return this.o.auto_start
            } else {
                this.o.auto_start = d
            }
        };
        a.YMOBCP.prototype.play = function (d) {
            this.player.play(d)
        };
        a.YMOBCP.prototype.pause = function () {
            this.player.pause()
        };
        a.YMOBCP.prototype.stop = function () {
            this.player.pause();
            this.player.seek(0)
        };
        a.YMOBCP.prototype.position = function (e, d) {
            if (e === c || e === null) {
                return this.cached.position
            } else {
                this.player.seek(e);
                if (d) {
                    this.player.play()
                }
            }
        };
        a.YMOBCP.prototype.mute = function (d) {};
        a.YMOBCP.prototype.volume = function (d) {};
        a.YMOBCP.prototype.isPlaying = function (d) {
            if (this.player) {
                return this.cacheGet("isPlaying", d)
            } else {
                return false
            }
        };
        a.YMOBCP.prototype.destroy = function () {
            if (this.player) {
                this.player.pause();
                this.player.removeEventListener(brightcove.api.events.MediaEvent.BEGIN);
                this.player.removeEventListener(brightcove.api.events.MediaEvent.COMPLETE);
                this.player.removeEventListener(brightcove.api.events.MediaEvent.CHANGE);
                this.player.removeEventListener(brightcove.api.events.MediaEvent.PLAY);
                this.player.removeEventListener(brightcove.api.events.MediaEvent.PROGRESS);
                this.player.removeEventListener(brightcove.api.events.MediaEvent.STOP);
                this.player.removeEventListener(brightcove.api.events.MediaEvent.ERROR)
            }
            this.$container.empty();
            delete a.YMOBCP_PLAYERS[this.o._playerID]
        };
        a.YMOBCP.prototype.setSize = function (f, d) {
            if (!f && !d) {
                throw new Error("YMOBCP Error: Invalid setSize")
            }
            var e = this.o.ui.aspect;
            this.o.width = (f) ? f : Math.round(d * e);
            this.o.height = (d) ? d : Math.round(f / e);
            this.o.trueWidth = Math.round(Math.max(this.o.width, this.o.height * 16 / 9));
            this.o.trueHeight = Math.round(Math.max(this.o.height, this.o.width * 9 / 16));
            this.$inner.width(this.o.trueWidth).height(this.o.trueHeight);
            this.$container.width(this.o.width).height(this.o.height);
            if (e > (16 / 9 + 0.01)) {
                b.log("Crop off letterbox");
                this.$inner.css("margin-top", Math.round(this.o.height / 2 - this.o.trueHeight / 2) + "px")
            } else {
                if (e < (16 / 9 - 0.01)) {
                    b.log("Crop off pillbox");
                    this.$inner.css("margin-left", Math.round(this.o.width / 2 - this.o.trueWidth / 2) + "px")
                }
            }
            this.experience.setSize(this.o.trueWidth, this.o.trueHeight)
        }
    }
})(NYTD.NYTMM, jQuery);
(function (c, a, b, e, d) {
    if (b != "undefined" && typeof b.YMYTP == "undefined") {
        b.YMYTP = function (f, g) {
            this.playing = false;
            this.player = null;
            this.playerReady = false;
            this.queuedCommands = [];
            b.YMYTP.getAPI()
        };
        b.YMYTP.apiReady = false;
        b.YMYTP.apiDownLoading = false;
        b.YMYTP.API_READY_EVENT = "NYTD.NYTMM.YMYTP:apiready";
        b.YMYTP.getAPI = function () {
            if (!b.YMYTP.apiDownLoading && (typeof YT === "undefined" || typeof YT.Player === "undefined")) {
                b.YMYTP.apiDownLoading = true;
                var f = a.createElement("script");
                f.src = "//www.youtube.com/iframe_api";
                var g = a.getElementsByTagName("script")[0];
                g.parentNode.insertBefore(f, g)
            }
        };
        c.onYouTubeIframeAPIReady = function () {
            b.YMYTP.apiReady = true;
            e("body").trigger(b.YMYTP.API_READY_EVENT)
        };
        b.YMYTP.prototype = {
            build: function (f) {
                if (b.YMYTP.apiReady) {
                    this.buildYT(f)
                } else {
                    e("body").on(b.YMYTP.API_READY_EVENT, _.bind(function () {
                        this.buildYT(f)
                    }, this))
                }
            },
            buildYT: function (g) {
                var f = this;
                this.$container = $this = e("#" + g.meta.params.dom_id);
                this.$video = e('<div id="' + g.meta.player_id + '"></div>');
                this.$container.html(this.$video);
                this.player = new YT.Player(this.$video.attr("id"), {
                    width: g.meta.params.width,
                    height: g.meta.params.height,
                    videoId: g.meta.src,
                    events: {
                        onReady: function (k) {
                            $this.trigger(b.VideoEvents.READY_EVENT);
                            f.playerReady = true;
                            if (g.meta.params.auto_start) {
                                f.play()
                            }
                            for (var j = 0; j < f.queuedCommands.length; j++) {
                                var h = f.queuedCommands[j]
                            }
                        },
                        onPlaybackQualityChange: function (h) {},
                        onStateChange: function (j) {
                            var h = j.data;
                            switch (h) {
                                case -1:
                                    break;
                                case YT.PlayerState.ENDED:
                                    f.playing = false;
                                    $this.trigger(b.VideoEvents.END_EVENT);
                                    break;
                                case YT.PlayerState.PLAYING:
                                    f.playing = true;
                                    $this.trigger(b.VideoEvents.PLAY_EVENT);
                                    break;
                                case YT.PlayerState.PAUSED:
                                    f.playing = false;
                                    $this.trigger(b.VideoEvents.PAUSE_EVENT);
                                    break;
                                case YT.PlayerState.BUFFERING:
                                    break;
                                case YT.PlayerState.CUED:
                                    break;
                                default:
                                    e.log("NYTD.NYTMM.YMYTP: YT event: Unknown")
                            }
                        },
                        onError: function (h) {}
                    }
                })
            },
            queueCommand: function (g) {
                var f = Array.prototype.slice.call(arguments);
                if (this.playerReady) {
                    e.log("not queued");
                    g.apply(this, f)
                } else {
                    this.queuedCommands.push({
                        func: g,
                        args: f
                    })
                }
            },
            play: function (f) {
                seconds = (f && f.time !== null) ? f.time : 0;
                if (seconds) {
                    if (this.isPlaying()) {
                        this.player.seekTo(seconds)
                    } else {
                        this.player.playVideo()
                    }
                } else {
                    this.player.playVideo()
                }
            },
            pause: function () {
                this.player.pauseVideo()
            },
            stop: function () {
                this.player.stopVideo()
            },
            position: function (f) {
                if (f === d || f === null) {
                    return this.player.getCurrentTime()
                } else {
                    this.player.seekTo(f)
                }
            },
            mute: function (f) {
                if (f === d || f === null) {
                    return this.player.isMuted()
                } else {
                    if (f) {
                        this.player.mute()
                    } else {
                        this.player.unMute()
                    }
                }
            },
            volume: function (f) {
                if (f === d || f === null) {
                    return Math.round(this.player.getVolume() / 100)
                } else {
                    f = Math.round(f * 100);
                    this.player.setVolume(f)
                }
            },
            isPlaying: function () {
                return this.playing
            },
            destroy: function () {
                this.player.destroy()
            }
        }
    }
})(window, document, NYTD.NYTMM, jQuery);
(function (a, b, c) {
    if (a !== "undefined" && typeof a.YMMP4P === "undefined") {
        a.YMMP4P = function (d, e) {
            if (d && e) {
                this.player = null;
                this.playing = false;
                this.playerReady = false;
                this.$container = null;
                e.container = d;
                this.build(e)
            }
        };
        a.YMMP4P.prototype.build = function (f) {
            var e = this;
            this.o = b.extend(true, {}, {
                container: c,
                vid: c,
                width: c,
                height: c,
                auto_start: false,
                shareURL: window.location.href
            }, f);
            if (this.o.meta && this.o.meta.params) {
                this.o = b.extend(true, this.o, {
                    vid: this.o.meta.src,
                    container: this.o.meta.params.dom_container || ("#" + this.o.meta.params.dom_id),
                    width: this.o.meta.params.width,
                    height: this.o.meta.params.height,
                    auto_start: this.o.meta.params.auto_start,
                    shareURL: this.o.meta.params.shareURL
                })
            }
            this.$container = b(this.o.container).empty();
            this.$container.append(this.getEmbed(this.o));
            this.player = document.getElementById(this.o.meta.params.dom_id + "_video");
            var d = function () {
                e.playerReady = true;
                e.unMuteVolume = e.player.volume;
                e.$container.trigger(a.VideoEvents.READY_EVENT);
                e.player.addEventListener("play", function () {
                    e.playing = true;
                    e.$container.trigger(a.VideoEvents.PLAY_EVENT)
                });
                e.player.addEventListener("ended", function () {
                    e.playing = false;
                    e.$container.trigger(a.VideoEvents.END_EVENT)
                });
                e.player.addEventListener("pause", function () {
                    e.playing = false;
                    e.$container.trigger(a.VideoEvents.PAUSE_EVENT)
                })
            };
            if (this.player.addEventListener) {
                this.player.addEventListener("canplay", d, false)
            } else {
                if (this.player.attachEvent) {
                    this.player.attachEvent("canplay", d)
                }
            }
        };
        a.YMMP4P.prototype.getEmbed = function (f) {
            var e = '<video id="{{meta.params.dom_id}}_video" class="{{meta.params.h264.theme}}" width="{{width}}" height="{{height}}" {{#auto_start}}autoplay{{/auto_start}} preload="auto" {{#meta.params.h264.controls}}controls{{/meta.params.h264.controls}} {{#meta.params.h264.loop}}loop{{/meta.params.h264.loop}} {{#meta.params.h264.poster}}poster="{{meta.params.h264.poster}}"{{/meta.params.h264.poster}}>{{#meta.src}}<source type="video/mp4" src="{{meta.src}}">{{/meta.src}}</video>';
            var d = b(Mustache.to_html(e, f)).identify("nytmm_YMMP4P");
            return d
        };
        a.YMMP4P.prototype.play = function (d) {
            seconds = (d && d.time !== null) ? d.time : 0;
            if (seconds) {
                if (this.isPlaying()) {
                    this.player.currentTime = seconds
                } else {
                    this.player.currentTime = seconds;
                    this.player.play()
                }
            } else {
                this.player.play()
            }
        };
        a.YMMP4P.prototype.pause = function () {
            this.player.pause()
        };
        a.YMMP4P.prototype.stop = function () {
            this.player.pause();
            this.player.currentTime = 0
        };
        a.YMMP4P.prototype.position = function (d) {
            if (d === c || d === null) {
                return this.player.currentTime
            } else {
                this.player.currentTime = d
            }
        };
        a.YMMP4P.prototype.mute = function (d) {
            if (d === c || d === null) {
                return this.player.volume === 0
            } else {
                if (d) {
                    this.unMuteVolume = this.volume();
                    this.volume(0)
                } else {
                    this.volume(this.unMuteVolume)
                }
            }
        };
        a.YMMP4P.prototype.volume = function (d) {
            if (d === c || d === null) {
                return this.player.volume
            } else {
                if (d > 1) {
                    d = 1
                }
                if (d < 0) {
                    d = 0
                }
                this.player.volume = d
            }
        };
        a.YMMP4P.prototype.isPlaying = function (d) {
            if (this.player) {
                return this.playing
            } else {
                return false
            }
        };
        a.YMMP4P.prototype.destroy = function () {
            b.log("destroy");
            if (this.player) {
                this.stop()
            }
        }
    }
})(NYTD.NYTMM, jQuery);
(function (c, a, b, e, d) {
    if (b != "undefined" && typeof b.YMVP == "undefined") {
        b.YMVP = function (f, g) {
            this.$container = e(f);
            if (!this.$container.length) {
                throw new Error("You must provide a DOM ID")
            }
            this.meta = {};
            this.meta.flash = this.flashInfo();
            this.meta.type = this.types.NULLPLAYER_VIDEO_TYPE.id;
            this.meta.codec = this.types.NULLPLAYER_VIDEO_TYPE.codec;
            this.meta.src = null;
            this.meta.elapsedtime = 0;
            this.meta.built = false;
            this.id_prefix = "ymvp_id_";
            this.meta.params = {
                forceType: d,
                reset: false,
                progressMonitor: null,
                solo: false,
                poster: null,
                bgcolor: "#FFFFFF",
                callbacks: {
                    onReady: function () {},
                    onLoaded: function () {},
                    onPlay: function () {},
                    onPause: function () {},
                    onStop: function () {},
                    onEnd: function () {},
                    onProgress: function () {}
                },
                dom_container: this.$container,
                dom_id: this.$container.identify("nytmm_ymvp").attr("id"),
                width: 600,
                height: 338,
                auto_start: false,
                skin: "light",
                brightcove: {
                    playerId: "1656678357001",
                    playerType: "NYTMM Interactive"
                },
                secret: {},
                youtube: {},
                h264: {
                    controls: true,
                    loop: false,
                    theme: "vjs-default-skin"
                }
            };
            e.extend(true, this.meta.params, g);
            this.$container.addClass("nytmm_ymvp");
            this.meta.player_id = this.id_prefix + "_" + _.size(b.YMVP.instances);
            this.player = this.factory();
            b.YMVP.instances[this.meta.player_id] = this;
            this.$container.on(b.VideoEvents.READY_EVENT, _.bind(this.onReady, this));
            this.$container.on(b.VideoEvents.CHANGE_EVENT, _.bind(this.onLoaded, this));
            this.$container.on(b.VideoEvents.PLAY_EVENT, _.bind(this.onPlay, this));
            this.$container.on(b.VideoEvents.PAUSE_EVENT, _.bind(this.onPause, this));
            this.$container.on(b.VideoEvents.STOP_EVENT, _.bind(this.onStop, this));
            this.$container.on(b.VideoEvents.END_EVENT, _.bind(this.onEnd, this));
            this.$container.on(b.VideoEvents.PROGRESS_EVENT, _.bind(this.onProgress, this));
            this._progressMonitor = null;
            if (this.meta.params.progressMonitor) {
                this.progressMonitor(this.meta.params.progressMonitor)
            }
            return {
                meta: this.meta,
                setSource: _.bind(this.setSource, this),
                control: _.bind(this.control, this),
                play: _.bind(this.play, this),
                pause: _.bind(this.pause, this),
                stop: _.bind(this.stop, this),
                position: _.bind(this.position, this),
                volume: _.bind(this.volume, this),
                build: _.bind(this.build, this),
                mute: _.bind(this.mute, this),
                destroy: _.bind(this.destroy, this),
                isPlaying: _.bind(this.isPlaying, this),
                progressMonitor: _.bind(this.progressMonitor, this),
                createPoster: _.bind(this.createPoster, this),
                destroyPoster: _.bind(this.destroyPoster, this)
            }
        };
        b.YMVP.prototype.onReady = function (g, f) {
            this.meta.params.callbacks.onReady(f)
        };
        b.YMVP.prototype.onPlay = function (g, f) {
            this.meta.params.callbacks.onPlay(f);
            if (this.meta.params.solo) {
                b.YMVP.stopAll(this.meta.player_id)
            }
        };
        b.YMVP.prototype.onPause = function (g, f) {
            this.meta.params.callbacks.onPause(f)
        };
        b.YMVP.prototype.onStop = function (g, f) {
            this.meta.params.callbacks.onStop(f)
        };
        b.YMVP.prototype.onLoaded = function (g, f) {
            this.meta.params.callbacks.onLoaded(f)
        };
        b.YMVP.prototype.onEnd = function (g, f) {
            this.meta.params.callbacks.onEnd(f)
        };
        b.YMVP.prototype.onProgress = function (g, f) {
            if (this._progressMonitor) {
                if (f.duration !== this._progressMonitor.max()) {
                    this._progressMonitor.max(f.duration)
                }
                this._progressMonitor.update(f.position)
            }
            this.meta.params.callbacks.onProgress(f)
        };
        b.YMVP.prototype.setSource = function (h) {
            var g = this;
            var f = this.getVideoTypeFromSource(h);
            this.destroy();
            this.meta.src = h;
            this.meta.type = f.id;
            this.meta.codec = f.codec;
            this.player = this.factory(f.id);
            if (f.id !== this.types.NULLPLAYER_VIDEO_TYPE && this.meta.params.poster && !this.meta.params.auto_start) {
                this.createPoster()
            } else {
                if (f.id !== this.types.NULLPLAYER_VIDEO_TYPE) {
                    this.build()
                }
            }
        };
        b.YMVP.prototype.createPoster = function () {
            var h = this;
            var g = this.meta.player_id.replace("ymvp_id_", "");
            var f = e('<div id="nytmm_ymvp_video_poster' + g + '" class="nytmm_ymvp_video_poster_image"><img src="' + this.meta.params.poster + '"/><div class="nytmm_ymvp_video_poster_image_play"></div></div>');
            this.$container.html(f);
            f.click(function () {
                h.meta.params.auto_start = true;
                h.build();
                h.destroyPoster()
            });
            h.$container.on(NYTD.NYTMM.VideoEvents.PLAY_EVENT, function () {
                h.destroyPoster()
            });
            h.$container.on(NYTD.NYTMM.VideoEvents.END_EVENT, function () {
                h.destroy();
                e(this).append(f);
                f.fadeIn();
                f.click(function () {
                    h.build();
                    h.destroyPoster()
                })
            })
        };
        b.YMVP.prototype.destroyPoster = function () {
            var g = this.meta.player_id.replace("ymvp_id_", "");
            var f = e("#nytmm_ymvp_video_poster" + g);
            f.delay().fadeOut()
        };
        b.YMVP.prototype.progressMonitor = function (f) {
            if (!this._progressMonitor) {
                var g = this._progressMonitor = new NYTD.NYTMM.ProgressMonitor(f)
            } else {
                if (f) {
                    e.log("WARNING: YMVP ProgressMonitor already instantiated. Ignoring options.")
                }
            }
            return this._progressMonitor
        };
        b.YMVP.prototype.flashInfo = function () {
            var g = new SWFObject();
            var f = {
                installed: false,
                version: 0
            };
            if (g.installedVer) {
                f.installed = (g.installedVer.major >= 10) ? true : false;
                f.version = (g.installedVer.major) ? g.installedVer.major : 0
            }
            return f
        };
        b.YMVP.prototype.factory = function (f) {
            f = (f && f !== "") ? f : "nullplayer";
            return new this.builds[f]
        };
        b.YMVP.prototype.builds = {
            nullplayer: function () {},
            brightcove: b.YMBCP,
            secret: b.YMOBCP,
            h264: b.YMMP4P,
            youtube: b.YMYTP
        };
        b.YMVP.prototype.reset = function () {
            if (this.meta.params.poster !== null) {
                this.destroy();
                this.createPoster()
            }
        };
        b.YMVP.prototype.destroy = function () {
            this.control("destroy");
            this.built = false;
            this.$container.empty()
        };
        b.YMVP.prototype.build = function () {
            var f = this;
            if (this.meta.params.reset) {
                _.each(b.YMVP.instances, function (g, h) {
                    if (g.meta.built && g.meta.player_id != f.meta.player_id) {
                        g.reset()
                    }
                })
            }
            this.meta.built = true;
            this.control({
                command: "build",
                opts: {
                    meta: this.meta
                }
            })
        };
        b.YMVP.prototype.play = function (f) {
            f = (f !== null) ? f : 0;
            if (!this.meta.built) {
                this.build()
            }
            this.control({
                command: "play",
                opts: {
                    time: f
                }
            })
        };
        b.YMVP.prototype.pause = function () {
            this.control("pause")
        };
        b.YMVP.prototype.stop = function () {
            this.control("stop")
        };
        b.YMVP.prototype.position = function (f) {
            return this.control({
                command: "position",
                opts: f
            })
        };
        b.YMVP.prototype.isPlaying = function () {
            return this.control("isPlaying")
        };
        b.YMVP.prototype.mute = function (f) {
            return this.control({
                command: "mute",
                opts: f
            })
        };
        b.YMVP.prototype.volume = function (f) {
            return this.control({
                command: "volume",
                opts: f
            })
        };
        b.YMVP.prototype.control = function (h) {
            var g, f;
            if (typeof h === "object") {
                g = h.command;
                f = h.opts
            } else {
                g = h
            } if (this.player[g]) {
                return (this.player[g](f))
            } else {
                e.log("NYTD.NYTMM.YMVP: " + g + " command not supported for " + this.meta.type + " player.");
                return false
            }
        };
        b.YMVP.prototype.getVideoTypeFromSource = function (h) {
            if (h === "") {
                throw new Error("NYTD.NYTMM.YMVP: You must provide a file path, BrightCove ID or YouTube ID")
            }
            if (typeof h === "number") {
                h = h.toString()
            }
            if (typeof h !== "string") {
                throw new Error("NYTD.NYTMM.YMVP: Provided video source must be a string")
            }
            var g = this.types.NULLPLAYER_VIDEO_TYPE;
            if (h.indexOf(".") > 0) {
                var f = h.toString().split("?")[0];
                f = f.split(".").pop().toLowerCase();
                switch (f) {
                    case "mp4":
                        g = this.types.H264_VIDEO_TYPE;
                        break;
                    case "m4v":
                        g = this.types.H264_VIDEO_TYPE;
                        break;
                    default:
                        throw new Error("NYTD.NYTMM.YMVP: " + f + " not a supported file type")
                }
            } else {
                if (this.meta.params.forceType) {
                    g = this.meta.params.forceType
                } else {
                    if (h.search(/[a-zA-Z_]/) >= 0) {
                        g = this.types.YOUTUBE_VIDEO_TYPE
                    } else {
                        if (NYTD.Video && NYTD.Video.Factory) {
                            g = this.types.BRIGHTCOVE_VIDEO_TYPE
                        } else {
                            e.log("Brightcove includes not found, attempting to use secrets");
                            g = this.types.SECRET_BRIGHTCOVE_VIDEO_TYPE
                        }
                    }
                }
            }
            return g
        };
        b.YMVP.prototype.types = {
            NULLPLAYER_VIDEO_TYPE: {
                id: "nullplayer",
                codec: "nullplayer"
            },
            YOUTUBE_VIDEO_TYPE: {
                id: "youtube",
                codec: "youtube"
            },
            BRIGHTCOVE_VIDEO_TYPE: {
                id: "brightcove",
                codec: "brightcove"
            },
            SECRET_BRIGHTCOVE_VIDEO_TYPE: {
                id: "secret",
                codec: "brightcove"
            },
            H264_VIDEO_TYPE: {
                id: "h264",
                codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            }
        };
        b.YMVP.instances = {};
        b.YMVP.stopAll = function (f) {
            f = (f) ? (_.isArray(f)) ? f : [f] : [];
            _.each(b.YMVP.instances, _.bind(function (g) {
                if (_.indexOf(f, g.meta.player_id) === -1) {
                    if (g.meta.built) {
                        try {
                            g.stop()
                        } catch (h) {
                            e.log("NYTMM.NYTD.YMVP.stopAll: Failed to stop player")
                        }
                    }
                }
            }, this))
        }
    }
})(window, document, NYTD.NYTMM, jQuery);
(function (b) {
    var a = {
        options: {
            items: "li",
            index: 0,
            nextButtonSelector: null,
            prevButtonSelector: null,
            clickToSelect: true,
            speed: 300,
            registration: "left top",
            target: "left top",
            width: null,
            height: null,
            constrainX: false,
            constrainY: false,
            selectedOpacity: 1,
            unselectedOpacity: 1,
            easing: "swing",
            easePartial: false
        },
        length: function () {
            return this.max()
        },
        max: function () {
            return parseInt(this.items().length)
        },
        index: function (c) {
            if (c === undefined || c === null) {
                return this._getIndex()
            } else {
                return this._setIndex(c)
            }
        },
        items: function (c) {
            if (c === undefined || c === null) {
                return this._getItems()
            } else {
                return this._setItems(c)
            }
        },
        content: function (c) {
            if (c === undefined || c === null) {
                return (this.$items.children())
            } else {
                this.$items.empty().html(c)
            }
        },
        width: function (c) {
            if (c === undefined || c === null) {
                return (this.$mask.width())
            } else {
                this.$mask.width(c + "px")
            }
        },
        height: function (c) {
            if (c === undefined || c === null) {
                return (this.$mask.height())
            } else {
                this.$mask.height(c + "px")
            }
        },
        clear: function (c) {
            this.options.items = [];
            if (c) {
                this.$items.empty()
            }
        },
        push: function () {},
        _setItems: function (c) {
            if (b.type(c) === "string") {
                c = b(c, this.element)
            }
            if (b.type(c) != "array") {
                c = b.makeArray(c)
            }
            this.options.items = c;
            b(".nytmm_SliderItem", this.element).removeClass("nytmm_SliderItem");
            b(this.options.items).addClass("nytmm_SliderItem");
            this._setIndex(this._getIndex(), true)
        },
        _getItems: function () {
            return this.options.items
        },
        animateToTarget: function (g) {
            var f = this.$items.position();
            var e = Math.floor(this.options.constrainX ? f.left : g.left + f.left);
            var c = Math.floor(this.options.constrainY ? f.top : g.top + f.top);
            var d = this;
            if (this.options.speed > 0) {
                this.$items.stop().animate({
                    left: e + "px",
                    top: c + "px"
                }, this.options.speed, this.options.easing, function () {
                    d._trigger("changecomplete")
                })
            } else {
                this.$items.css({
                    left: e + "px",
                    top: c + "px"
                });
                this._trigger("changecomplete")
            }
        },
        _setIndex: function (g, j) {
            this.options.index = g;
            var f = b(this.options.items[Math.floor(g)]);
            var h = "0 0";
            if (typeof g === "number" && g % 1 !== 0) {
                var c = 0;
                var k = 0;
                var e = (g % 1);
                g = Math.floor(g);
                if (this.options.easePartial) {
                    e = jQuery.easing.easeInOutQuad(null, e, 0, 1, 1)
                }
                var d = this.options.items[g + 1];
                if (d) {
                    f.position({
                        my: this.options.registration,
                        at: this.options.registration,
                        of: d,
                        using: function (l) {
                            c = 1 * l.left * e;
                            k = -1 * l.top * e
                        }
                    })
                } else {}
                h = c + " " + k
            }
            f.position({
                my: this.options.registration,
                at: this.options.target,
                of: this.$mask,
                offset: h,
                using: b.proxy(this.animateToTarget, this)
            });
            b(".nytmm_SliderItemSelected", this.element).removeClass("nytmm_SliderItemSelected");
            if (this.options.selectedOpacity !== this.options.unselectedOpacity) {
                f.addClass("nytmm_SliderItemSelected").fadeTo(this.options.speed, this.options.selectedOpacity);
                b(this.options.items).not(".nytmm_SliderItemSelected").fadeTo(this.options.speed, this.options.unselectedOpacity)
            }
            if (!j) {
                this._trigger("change", null, {
                    index: this.options.index,
                    that: this,
                    item: f
                })
            }
        },
        _getIndex: function () {
            return this.options.index
        },
        next: function () {
            this._setIndex(this._getIndex() + 1)
        },
        previous: function () {
            this._setIndex(this._getIndex() - 1)
        },
        _onItemClick: function (f) {
            var c = b(f.target);
            if (this.options.clickToSelect) {
                var d = -1;
                b.each(this.options.items, function (e, g) {
                    if (d === -1 && c.is(b(g))) {
                        d = e
                    }
                });
                if (d !== -1) {
                    this._setIndex(d);
                    this._trigger("itemClick")
                }
            }
        },
        _create: function () {
            var d = this;
            var c = this.element;
            this.$mask = b('<div class="nytmm_SliderMask"></div>').width((this.options.width) ? this.options.width : c.width()).height((this.options.height) ? this.options.height : c.height()).css({
                overflow: "hidden",
                position: "relative"
            });
            this.$items = b('<div class="nytmm_SliderItems"></div>').css({
                position: "absolute"
            }).appendTo(this.$mask);
            c.wrapInner(this.$mask);
            this.$mask.wrapInner(this.$items);
            this.$mask = b(".nytmm_SliderMask", c);
            this.$items = b(".nytmm_SliderItems", c).bind("click.Slider", b.proxy(this._onItemClick, this));
            this._setItems(this.options.items);
            if (this.options.nextButtonSelector) {
                b(this.options.nextButtonSelector, this.element).bind("click.Slider", b.proxy(this.next, this))
            }
            if (this.options.prevButtonSelector) {
                b(this.options.prevButtonSelector, this.element).bind("click.Slider", b.proxy(this.previous, this))
            }
        },
        destroy: function () {
            b(this.options.nextButtonSelector, this.element).unbind("click.Slider");
            b(this.options.prevButtonSelector, this.element).unbind("click.Slider");
            this.$items.unwrap();
            this.element.unwrap();
            return this
        },
        computePath: function (g) {
            this.totalLength = 0;
            this.stickyItems = (g ? g : []);
            this.pathMappings = [];
            var f = 0;
            for (var e = 0; e < this.options.items.length; e++) {
                var d = b(this.options.items[e]);
                var c = b(this.options.items[e + 1]);
                this.pathMappings[e] = f;
                if (this.stickyItems[e]) {
                    f += this.stickyItems[e]
                }
                if (c[0]) {
                    d.position({
                        my: this.options.registration,
                        at: this.options.registration,
                        of: c,
                        using: function (h) {
                            var k = Math.abs(h.left);
                            var j = Math.abs(h.top);
                            f += Math.sqrt(k * k + j * j)
                        }
                    })
                }
            }
            this.totalLength = f
        },
        pixelToIndex: function (h) {
            if (!this.pathMappings) {
                return
            }
            var d = 0;
            for (var e = 0; e < this.pathMappings.length; e++) {
                if (h < this.pathMappings[e]) {
                    d = Math.max(0, e - 1);
                    var f = h - this.pathMappings[d];
                    if (this.stickyItems[d]) {
                        f -= this.stickyItems[d]
                    }
                    if (f > 0) {
                        var g = this.pathMappings[e] - this.pathMappings[d];
                        if (this.stickyItems[d]) {
                            g -= this.stickyItems[d]
                        }
                        var c = f / g;
                        if (c >= 1 || c <= 0) {
                            b.log("ERROR! Invalid partial pixelToIndex: " + c)
                        }
                        d += c
                    }
                    return d
                }
            }
            return -1
        },
        percent: function (d) {
            if (!this.totalLength) {
                return undefined
            }
            if (d === undefined || d === null) {
                return (this.pathMappings[this.index()] / this.totalLength)
            } else {
                var e = d * this.totalLength;
                var c = this.pixelToIndex(e);
                return this._setIndex(c)
            }
        }
    };
    b.widget("nytmm.Slider", a)
})(jQuery);
(function (b) {
    var a = {
        options: {
            prefix: "",
            postfix: "",
            joiner: " of ",
            max: 0,
            index: 0,
            labels: [],
            height: undefined,
            mode: "counter"
        },
        index: function (c) {
            if (c === undefined || c === null) {
                return this.options.index
            } else {
                if (c >= 0) {
                    this.options.index = c;
                    this.draw(c)
                } else {
                    b.log("Textcounter: Out of Bounds:", c)
                }
            }
        },
        draw: function (c) {
            if (c === undefined) {
                c = this.index()
            }
            var d = b(this.element).addClass("nytmm_textCounter");
            if (this.options.mode === b.TextCounter.LIST) {
                if (!this.options.labels || this.options.labels.length === 0) {
                    d.html("")
                } else {
                    d.html(this.options.prefix + (this.options.labels[c]) + this.options.postfix)
                }
            } else {
                if (this.options.mode === b.TextCounter.NUMBER) {
                    d.html(this.options.prefix + (c) + this.options.postfix)
                } else {
                    if (this.options.mode === b.TextCounter.COUNTER) {
                        d.html(this.options.prefix + (c + 1) + this.options.joiner + this.options.max + this.options.postfix)
                    } else {
                        throw ("TEXTCOUNTER: Invalid mode type")
                    }
                }
            }
        },
        labels: function (c) {
            if (c === undefined || c === null) {
                return this.options.labels
            } else {
                this.options.labels = c;
                this.options.max = c.length;
                this.draw(this.index())
            }
        },
        height: function (f) {
            if (f === undefined || f === null || f === false) {
                return this.element.height()
            } else {
                var c = 0;
                var d = this.index();
                if (this.options.mode === b.TextCounter.LIST && f === "auto" && !this.element.is(":hidden")) {
                    this.element.height("auto");
                    for (var e = 0; e < this.options.labels.length; e++) {
                        this.index(e);
                        c = Math.max(c, this.element.height())
                    }
                    this.index(d);
                    this.element.height(c)
                } else {
                    this.element.height(f)
                }
            }
        },
        next: function () {
            this.index(this.index() + 1)
        },
        previous: function () {
            this.index(this.index() - 1)
        },
        length: function () {
            return this.options.max
        },
        push: function (c) {
            this.options.labels.push(c);
            this.options.max++
        },
        clear: function (c) {
            this.options.labels = [];
            this.options.max = 0
        },
        _create: function () {
            this.draw(this.index());
            this.height(this.options.height)
        },
        destroy: function () {
            b.log("DESTROY COUNTER");
            b(this.element).empty();
            return this
        }
    };
    b.TextCounter = {};
    b.TextCounter.NUMBER = "number";
    b.TextCounter.LIST = "list";
    b.TextCounter.COUNTER = "counter";
    b.widget("nytmm.TextCounter", a)
})(jQuery);
(function (b) {
    b.ThumbStrip = {};
    b.ThumbStrip.ABSTRACT = "abstract";
    b.ThumbStrip.IMAGES = "images";
    b.ThumbStrip.NUMBERS = "numbers";
    b.ThumbStrip.LABELS = "labels";
    b.ThumbStrip.DOTS = "dots";
    b.ThumbStrip.BULLETS = "bullets";
    var a = {
        options: {
            index: 0,
            skin: "default",
            thumbHeight: 20,
            thumbWidth: "auto",
            thumbMargin: 2,
            max: 0,
            labels: [],
            images: [],
            categories: [],
            arrows: false,
            mode: b.ThumbStrip.NUMBERS
        },
        render: function () {
            var h = this;
            var q = b(this.element).empty().removeClass("nytmmThumbStrip_" + b.ThumbStrip.ABSTRACT + " nytmmThumbStrip_" + b.ThumbStrip.IMAGES + " nytmmThumbStrip_" + b.ThumbStrip.NUMBERS + " nytmmThumbStrip_" + b.ThumbStrip.LABELS).addClass("nytmmThumbStrip_" + this.options.mode).addClass("clearfix").addClass("nytmmThumbStrip_" + this.options.skin);
            var k = q;
            var s = 0;
            var n = this.options.categories;
            for (var p = 0; p < this.options.max; p++) {
                if (n && n[s] !== undefined && n[s].index === p) {
                    var o = n[s];
                    k = b('<div class="nytmmThumbStrip_category"><div class="nytmmThumbStrip_catTitle"></div><div class="nytmmThumbStrip_itemBox clearfix"></div></div>').appendTo(q).find(".nytmmThumbStrip_catTitle").html(o.title).data("index", p).click(function () {
                        var v = b(this).data("index");
                        if (h.index != v) {
                            h.index(v);
                            h._trigger("change", null, {
                                index: v
                            })
                        }
                    }).end().find(".nytmmThumbStrip_itemBox");
                    s++
                }
                var c = b('<span class="nytmmThumbStrip_item"></span>').data("index", p);
                switch (this.options.mode) {
                    case b.ThumbStrip.NUMBERS:
                        c.text(p + 1);
                        break;
                    case b.ThumbStrip.LABELS:
                        c.html(this.options.labels[p]);
                        break;
                    case b.ThumbStrip.IMAGES:
                        c.html('<img src="' + this.options.images[p] + '"/>');
                        break;
                    case b.ThumbStrip.BULLETS:
                        c.html("&bull;").css({
                            lineHeight: this.options.thumbHeight + "px",
                            fontSize: Math.ceil(this.options.thumbHeight * 2) + "px"
                        });
                        break;
                    case b.ThumbStrip.ABSTRACT:
                        break;
                    default:
                }
                c.click(function () {
                    var v = b(this).data("index");
                    if (h.index !== v) {
                        h.index(v)
                    }
                });
                k.append(c)
            }
            var l = (parseInt(this.options.thumbHeight)) <= 0 ? "" : this.options.thumbHeight + "px";
            var u = 0;
            if (this.options.arrows) {
                var t = b('<div class="nytmmThumbStrip_arrowPrev"></div>').prependTo(q).height(l).click(function () {
                    h.previous()
                });
                u += t.outerWidth(true);
                var r = b('<div class="nytmmThumbStrip_arrowNext"></div>').appendTo(q).height(l).click(function () {
                    h.next()
                });
                u += t.outerWidth(true)
            }
            this.$thumbs = b(".nytmmThumbStrip_item", q);
            var f = b(".nytmmThumbStrip_category", q);
            var d = parseInt(this.options.thumbWidth);
            var m = parseInt(this.options.thumbMargin);
            var g = this.$thumbs.length;
            if (this.options.thumbWidth === "auto" || !this.options.thumbWidth) {
                d = Math.floor(Math.max(d, q.width() - u) / g);
                this.$thumbs.css({
                    marginLeft: 0,
                    marginRight: 0,
                    paddingLeft: 0,
                    paddingRight: 0
                });
                if (this.options.mode === b.ThumbStrip.IMAGES) {
                    this.$thumbs.find("img").css({
                        width: d + "px"
                    })
                } else {
                    this.$thumbs.css({
                        width: d + "px",
                        height: l
                    })
                }
            } else {
                this.$thumbs.css({
                    width: d + "px",
                    height: l,
                    marginRight: m
                });
                this.$thumbs.last().css({
                    marginRight: 0
                })
            }
            var e = 0;
            if (n && n.length > 0) {
                var j = parseInt(f.css("padding-right")) + parseInt(f.css("margin-right"));
                b(".nytmmThumbStrip_category", q).each(function (z, v) {
                    var y = b(v);
                    var x = (parseInt(y.find(".nytmmThumbStrip_item").length) * (d + m)) - m;
                    e += x + j;
                    y.find("h5").width(x + "px")
                })
            } else {
                e = ((d + m) * g) - m
            }
            e += u;
            q.width(e + "px");
            this.index(this.index(), true)
        },
        mode: function () {
            return this.options.mode
        },
        index: function (d, c) {
            if (d === undefined || d === null) {
                return this.options.index
            } else {
                if ((d !== this.options.index) || c) {
                    this.options.index = d;
                    b(this.element).find(".nytmmThumbStrip_selected").removeClass("nytmmThumbStrip_selected").end().find(".nytmmThumbStrip_item:eq(" + d + ")").addClass("nytmmThumbStrip_selected").parent().parent(".nytmmThumbStrip_category").addClass("nytmmThumbStrip_selected");
                    this._trigger("change", null, {
                        index: d
                    });
                    if (this.options.arrows) {
                        b(this.element).find(".nytmmThumbStrip_arrowDisabled").removeClass("nytmmThumbStrip_arrowDisabled");
                        if (d <= 0) {
                            b(this.element).find(".nytmmThumbStrip_arrowPrev").addClass("nytmmThumbStrip_arrowDisabled")
                        } else {
                            if (d >= this.max() - 1) {
                                b(this.element).find(".nytmmThumbStrip_arrowNext").addClass("nytmmThumbStrip_arrowDisabled")
                            }
                        }
                    }
                } else {}
            }
        },
        max: function (c) {
            if (c === undefined || c === null) {
                return this.options.max
            } else {
                this.options.max = c;
                this.render()
            }
        },
        labels: function (c) {
            if (c === undefined || c === null) {
                return this.options.labels
            } else {
                this.options.labels = c;
                this.options.max = c.length;
                this.render()
            }
        },
        images: function (c) {
            if (c === undefined || c === null) {
                return this.options.images
            } else {
                this.options.images = c;
                this.options.max = c.length;
                this.render()
            }
        },
        categories: function (c) {
            if (c === undefined || c === null) {
                return this.options.categories
            } else {
                this.options.categories = c.sort(function (e, d) {
                    return e.index - d.index
                });
                this.render()
            }
        },
        next: function () {
            if (this.index() < this.max() - 1) {
                this.index(this.index() + 1)
            }
        },
        previous: function () {
            if (this.index() > 0) {
                this.index(this.index() - 1)
            }
        },
        _create: function () {
            if (this.options.categories) {
                this.options.categories = this.options.categories.sort(function (d, c) {
                    return d.index - c.index
                })
            }
            this.render()
        },
        destroy: function () {
            b.log("DESTROY THUMBSTRIP");
            b(this.element).empty()
        }
    };
    b.widget("nytmm.ThumbStrip", a)
})(jQuery);
(function (a) {
    a.fn.lazyload = function (b) {
        var c = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            scrollEvent: "scroll",
            effect: "show",
            container: window,
            skip_invisible: true
        };
        if (b) {
            if (null !== b.failurelimit) {
                b.failure_limit = b.failurelimit;
                delete b.failurelimit
            }
            a.extend(c, b)
        }
        var d = this;
        if (0 == c.event.indexOf("scroll")) {
            a(c.container).bind(c.scrollEvent, function (g) {
                var e = 0;
                d.each(function (h) {
                    if (c.skip_invisible && !a(this).is(":visible")) {
                        return
                    }
                    if (a.abovethetop(this, c) || a.leftofbegin(this, c)) {} else {
                        if (!a.belowthefold(this, c) && !a.rightoffold(this, c)) {
                            a(this).trigger("appear")
                        } else {
                            if (++e > c.failure_limit) {
                                return false
                            }
                        }
                    }
                });
                var f = a.grep(d, function (h) {
                    return !h.loaded
                });
                d = a(f)
            })
        }
        this.each(function () {
            var e = this;
            e.loaded = false;
            a(e).one("appear", function () {
                if (!this.loaded) {
                    a("<img />").bind("load", function () {
                        a(e).hide().attr("src", a(e).data("original"))[c.effect](c.effectspeed);
                        e.loaded = true
                    }).attr("src", a(e).data("original"))
                }
            });
            if (0 != c.event.indexOf("scroll")) {
                a(e).bind(c.event, function (f) {
                    if (!e.loaded) {
                        a(e).trigger("appear")
                    }
                })
            }
        });
        a(c.container).trigger(c.scrollEvent);
        return this
    };
    a.belowthefold = function (c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).height() + a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top + a(d.container).height()
        }
        return b <= a(c).offset().top - d.threshold
    };
    a.rightoffold = function (c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).width() + a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left + a(d.container).width()
        }
        return b <= a(c).offset().left - d.threshold
    };
    a.abovethetop = function (c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top
        }
        return b >= a(c).offset().top + d.threshold + a(c).height()
    };
    a.leftofbegin = function (c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left
        }
        return b >= a(c).offset().left + d.threshold + a(c).width()
    };
    a.extend(a.expr[":"], {
        "below-the-fold": function (b) {
            return a.belowthefold(b, {
                threshold: 0,
                container: window
            })
        },
        "above-the-fold": function (b) {
            return !a.belowthefold(b, {
                threshold: 0,
                container: window
            })
        },
        "right-of-fold": function (b) {
            return a.rightoffold(b, {
                threshold: 0,
                container: window
            })
        },
        "left-of-fold": function (b) {
            return !a.rightoffold(b, {
                threshold: 0,
                container: window
            })
        }
    })
})(jQuery);
(function (a) {
    a.fn.swipe = function (c) {
        if (!this) {
            return false
        }
        var l = {
            fingers: 1,
            threshold: 75,
            timeThreshold: 250,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            click: null,
            triggerOnTouchEnd: true,
            allowPageScroll: "auto"
        };
        var n = "left";
        var m = "right";
        var d = "up";
        var u = "down";
        var k = "none";
        var x = "horizontal";
        var r = "vertical";
        var p = "auto";
        var f = "start";
        var j = "move";
        var h = "end";
        var o = "cancel";
        var s = false;
        var v = "ontouchstart" in window,
            b = v ? "touchstart" : (s ? "mousedown" : ""),
            q = v ? "touchmove" : (s ? "mousemove" : ""),
            g = v ? "touchend" : (s ? "mouseup" : ""),
            t = "touchcancel";
        var e = "start";
        var w;
        if (NYTD.Video) {
            isWebkit = (navigator.userAgent.toLowerCase().indexOf("webkit") > -1 || navigator.userAgent.toLowerCase().indexOf("khtml") > -1);
            if (isWebkit && !NYTD.NYTMM.iOS && !v) {
                b = null;
                q = null;
                g = null
            }
        }
        if (c.allowPageScroll == undefined && (c.swipe != undefined || c.swipeStatus != undefined)) {
            c.allowPageScroll = k
        }
        if (c) {
            a.extend(l, c)
        }
        return this.each(function () {
            var G = this;
            var K = a(this);
            var H = null;
            var L = 0;
            var A = {
                x: 0,
                y: 0
            };
            var D = {
                x: 0,
                y: 0
            };
            var N = {
                x: 0,
                y: 0
            };

            function C(R) {
                var Q = v ? R.touches[0] : R;
                e = f;
                if (v) {
                    L = R.touches.length
                }
                distance = 0;
                direction = null;
                if (L == l.fingers || !v) {
                    A.x = D.x = Q.pageX;
                    A.y = D.y = Q.pageY;
                    if (l.swipeStatus) {
                        B(R, e)
                    }
                    var P = new Date();
                    w = P.getTime()
                } else {
                    F(R)
                }
                G.addEventListener(q, M, false);
                G.addEventListener(g, O, false)
            }
            function M(S) {
                if (e == h || e == o) {
                    return
                }
                var R = v ? S.touches[0] : S;
                D.x = R.pageX;
                D.y = R.pageY;
                direction = y();
                if (v) {
                    L = S.touches.length
                }
                e = j;
                J(S, direction);
                if (L == l.fingers || !v) {
                    distance = E();
                    if (l.swipeStatus) {
                        B(S, e, direction, distance)
                    }
                    if (!l.triggerOnTouchEnd) {
                        var Q = new Date();
                        var T = Q.getTime();
                        var P = T - w;
                        if (distance >= l.threshold && P <= l.timeThreshold) {
                            e = h;
                            B(S, e);
                            F(S)
                        }
                    }
                } else {
                    e = o;
                    B(S, e);
                    F(S)
                }
            }
            function O(R) {
                R.preventDefault();
                distance = E();
                direction = y();
                if (l.triggerOnTouchEnd) {
                    e = h;
                    if ((L == l.fingers || !v) && D.x != 0) {
                        var Q = new Date();
                        var S = Q.getTime();
                        var P = S - w;
                        if (distance >= l.threshold && P <= l.timeThreshold) {
                            B(R, e);
                            F(R)
                        } else {
                            e = o;
                            B(R, e);
                            F(R)
                        }
                    } else {
                        e = o;
                        B(R, e);
                        F(R)
                    }
                } else {
                    if (e == j) {
                        e = o;
                        B(R, e);
                        F(R)
                    }
                }
                G.removeEventListener(q, M, false);
                G.removeEventListener(g, O, false)
            }
            function F(P) {
                L = 0;
                A.x = 0;
                A.y = 0;
                D.x = 0;
                D.y = 0;
                N.x = 0;
                N.y = 0
            }
            function B(Q, P) {
                if (l.swipeStatus) {
                    l.swipeStatus.call(K, Q, P, direction || null, distance || 0)
                }
                if (P == o) {
                    if (l.click && (L == 1 || !v) && (isNaN(distance) || distance == 0)) {
                        l.click.call(K, Q, Q.target)
                    }
                }
                if (P == h) {
                    if (l.swipe) {
                        l.swipe.call(K, Q, direction, distance)
                    }
                    switch (direction) {
                        case n:
                            if (l.swipeLeft) {
                                l.swipeLeft.call(K, Q, direction, distance)
                            }
                            break;
                        case m:
                            if (l.swipeRight) {
                                l.swipeRight.call(K, Q, direction, distance)
                            }
                            break;
                        case d:
                            if (l.swipeUp) {
                                l.swipeUp.call(K, Q, direction, distance)
                            }
                            break;
                        case u:
                            if (l.swipeDown) {
                                l.swipeDown.call(K, Q, direction, distance)
                            }
                            break
                    }
                }
            }
            function J(P, Q) {
                if (l.allowPageScroll == k) {
                    P.preventDefault()
                } else {
                    var R = l.allowPageScroll == p;
                    switch (Q) {
                        case n:
                            if ((l.swipeLeft && R) || (!R && l.allowPageScroll != x)) {
                                P.preventDefault()
                            }
                            break;
                        case m:
                            if ((l.swipeRight && R) || (!R && l.allowPageScroll != x)) {
                                P.preventDefault()
                            }
                            break;
                        case d:
                            if ((l.swipeUp && R) || (!R && l.allowPageScroll != r)) {
                                P.preventDefault()
                            }
                            break;
                        case u:
                            if ((l.swipeDown && R) || (!R && l.allowPageScroll != r)) {
                                P.preventDefault()
                            }
                            break
                    }
                }
            }
            function E() {
                return Math.round(Math.sqrt(Math.pow(D.x - A.x, 2) + Math.pow(D.y - A.y, 2)))
            }
            function z() {
                var S = A.x - D.x;
                var R = D.y - A.y;
                var P = Math.atan2(R, S);
                var Q = Math.round(P * 180 / Math.PI);
                if (Q < 0) {
                    Q = 360 - Math.abs(Q)
                }
                return Q
            }
            function y() {
                var P = z();
                if ((P <= 45) && (P >= 0)) {
                    return n
                } else {
                    if ((P <= 360) && (P >= 315)) {
                        return n
                    } else {
                        if ((P >= 135) && (P <= 225)) {
                            return m
                        } else {
                            if ((P > 45) && (P < 135)) {
                                return u
                            } else {
                                return d
                            }
                        }
                    }
                }
            }
            try {
                this.addEventListener(b, C, false);
                this.addEventListener(t, F)
            } catch (I) {}
        })
    }
})(jQuery);
(function (c, a, b, d, e) {
    if (b != "undefined" && typeof b.NYTUtils == "undefined") {
        b.NYTUtils = {
            init: function () {
                this.wideAd = !! (d("body[class~=wideAd]")[0]);
                this.templateType = "";
                this.contentWidth = 0;
                if (d("body").hasClass("blogPost")) {
                    this.templateType = "blog";
                    this.contentWidth = (this.wideAd ? 382 : 680)
                } else {
                    if (d("#tmagazine").length > 0) {
                        this.templateType = "tmag";
                        this.contentWidth = (this.wideAd ? 464 : 592)
                    } else {
                        if (d("#interactiveABC").length > 0) {
                            this.templateType = "interactiveFull";
                            this.contentWidth = 970
                        } else {
                            if (d("#interactiveAB").length > 0) {
                                this.templateType = "interactive600";
                                this.contentWidth = (this.wideAd ? 468 : 600)
                            } else {
                                this.templateType = "article";
                                this.contentWidth = (this.wideAd ? 468 : 600)
                            }
                        }
                    }
                }
            },
            scrapeDateline: function () {
                var f;
                switch (this.templateType) {
                    case "interactive600":
                        f = ".abColumn .storyHeader .dateline";
                        break;
                    case "interactiveFull":
                        f = "#interactiveShell .storyHeader .dateline";
                        break;
                    case "blog":
                        f = "body.blogPost #content > .post .timestamp .date";
                        break;
                    default:
                        f = "#article .dateline"
                }
                return d(f)
            },
            dateline: function (g) {
                var f = this.scrapeDateline();
                if (g) {
                    f.html(g)
                } else {
                    return f.html().replace(/^\s+|\s+$/g, "")
                }
            },
            scrapeLeadin: function () {
                var f;
                switch (this.templateType) {
                    case "interactive600":
                        f = ".abColumn .storySummary";
                        break;
                    case "interactiveFull":
                        f = "#interactiveShell .storySummary";
                        break;
                    case "blog":
                        f = "";
                        break;
                    default:
                        f = ""
                }
                if (this.templateType === "interactiveFull" && d(f).length < 1) {
                    f = "#interactiveShell .module.insetHFullWidth .summary"
                }
                return d(f)
            },
            leadin: function (f) {
                var g = this.scrapeLeadin();
                if (f) {
                    g.html(f)
                } else {
                    return g.html().replace(/^\s+|\s+$/g, "")
                }
            },
            scrapeTitle: function () {
                var f;
                switch (this.templateType) {
                    case "interactive600":
                        f = ".abColumn .storyHeader h1";
                        break;
                    case "interactiveFull":
                        f = "#interactiveShell .storyHeader h1";
                        break;
                    case "blog":
                        f = "body.blogPost #content > .post h1";
                        break;
                    default:
                        f = "#article h1.articleHeadline"
                }
                return d(f)
            },
            title: function (f) {
                var g = this.scrapeTitle();
                if (f) {
                    g.html(f)
                } else {
                    return g.html().replace(/^\s+|\s+$/g, "")
                }
            },
            isDark: function () {
                if (this.dark === null || this.dark === e) {
                    var f = d(a.body).css("background-color");
                    if (f.indexOf("rgb") >= 0) {
                        f = f.replace(/[^\d\,]/g, "").split(",");
                        for (var g = 0; g < f.length; g++) {
                            f[g] = parseInt(f[g], 10)
                        }
                    } else {
                        if (f.indexOf("#") >= 0) {
                            f = f.replace(/[^\d]/g, "").replace(/(\w\w)(\w\w)(\w\w)/, "$1,$2,$3").split(",");
                            for (var g = 0; g < f.length; g++) {
                                f[g] = parseInt(f[g], 16)
                            }
                        } else {
                            f = null
                        }
                    }
                    this.dark = (f && f[0] < 153 && f[1] < 153 && f[2] < 153)
                }
                return this.dark
            },
            skin: function () {
                return this.isDark() ? "dark" : "light"
            },
            writeFeatureHeader: function (h, g) {
                g = g || '<div class="nytmm_header clearfix {{#isDark}}dark{{/isDark}}"><h1>{{{title}}}<span>{{{leadin}}}</span></h1><div class="doubleRule"></div></div>';
                var f = d(Mustache.to_html(g, {
                    title: this.scrapeTitle().detach().html().replace(/^\s+|\s+$/g, ""),
                    leadin: this.scrapeLeadin().detach().html().replace(/^\s+|\s+$/g, ""),
                    isDark: this.isDark()
                }));
                d(h).prepend(f);
                return f
            },
            cleanURLForWebtrends: function (g, h) {
                if (!g) {
                    g = c.location.href
                }
                var k = g.split(/[#?&]*\/?[#?&]+/);
                var j = k.shift();
                k = d.map(k, function (l) {
                    return l.replace("=", "-")
                });
                k.sort();
                var f = j;
                if (h) {
                    f += "/" + h
                }
                if (k && k.length) {
                    f += ("/" + k.join("/")).replace(/\/\/+/g, "/")
                }
                return f
            }
        };
        b.NYTUtils.init()
    }
})(window, document, NYTD.NYTMM, jQuery);
(function (c) {
    var a = "../img/transparent.png";
    var b = {
        options: {
            content: null,
            contentSelector: "li",
            index: 0,
            nextButtonSelector: null,
            prevButtonSelector: null,
            clickToSelect: false,
            speed: (NYTD.NYTMM.iOS) ? 0 : 300,
            registration: "left top",
            target: "left top",
            width: null,
            height: null,
            constrainX: false,
            constrainY: false,
            selectedOpacity: 1,
            unselectedOpacity: 1,
            easePartial: false,
            analytics: "",
            skin: "dark",
            deeplink: "slide",
            keyboard: document,
            lazyload: false,
            showArrows: !NYTD.NYTMM.iOS,
            showPhotoBackground: true,
            creditHeight: 20,
            stretchImage: false,
            thumbnails: c.ThumbStrip.NUMBERS,
            thumbnailWidth: "auto",
            thumbnailHeight: 25,
            thumbnailMargin: 2,
            thumbnailArrows: false,
            cropSize: "slide",
            captionSize: "full",
            readyListeners: [],
            changeListeners: [],
            layout: "slider|thumbnails|gobig|captions",
            categories: [],
            finalLink: {
                title: "",
                url: ""
            }
        },
        slider: null,
        captions: null,
        thumbnails: null,
        jsonData: null,
        arrayData: [],
        goBigID: null,
        ga: null,
        loadURL: function (d, f) {
            var e = this;
            c.slideshowUrl2Array(d, function (g) {
                e.jsonData = g;
                e.loadArray(c.slideshowJson2Array(g, {
                    crop: e.options.cropSize,
                    caption: e.options.captionSize
                }));
                if (f) {
                    f()
                }
            })
        },
        loadURLs: function (f, e) {
            var d = this;
            c.slideshowUrls2MultiArray(f, function (g) {
                d.jsonData = undefined;
                d.loadMultiArray(g);
                if (e) {
                    e()
                }
            })
        },
        loadMultiArray: function (d) {
            var e = [];
            var h = 0;
            for (var g = 0; g < d.length; g++) {
                e.push({
                    title: d[g].title,
                    index: h
                });
                h += d[g].images.length
            }
            var f = c.map(d, function (j) {
                return j.images
            });
            this.loadArray(f);
            this.categories(e)
        },
        loadArray: function (e) {
            var h = this;
            this.arrayData = e;
            var j = '<div class="nytmmSliderShow_content">';
            if (!this.options.width) {
                this.options.width = this.element.width()
            }
            if (!this.options.height) {
                var g = 0.1;
                c.each(e, function (k, m) {
                    var l = (m.width) ? m.height / Math.max(m.width, h.options.width) : 0;
                    g = Math.max(g, l)
                });
                this.options.height = Math.ceil(this.options.width * g);
                this.height(this.options.height)
            }
            c.each(e, function (l, o) {
                if (o.override) {
                    j += o.override
                } else {
                    var k = c.calculateBestFit(o, {
                        width: h.options.width,
                        height: h.options.height
                    }, h.options.stretchImage);
                    var m = (h.options.lazyload && l !== 0) ? '<img data-original="' + o.url + '" src="' + a + '" class="nytmmSliderShow_photo lazy" style="width:' + k.width + "px;height:" + k.height + "px;padding-top:" + k.paddingTop + 'px;"/>' : '<img src="' + o.url + '" class="nytmmSliderShow_photo" style="width:' + k.width + "px;height:" + k.height + "px;padding-top:" + k.paddingTop + 'px;"/>';
                    var q = (parseInt(h.options.creditHeight) > 0) ? '<div class="nytmmSliderShow_credit">' + o.credit + "</div>" : "";
                    var n = '<div class="nytmmSliderShow_item"><div class="nytmmSliderShow_photobg">' + m + "</div>" + q + "</div>";
                    j += n
                }
            });
            j += "</div>";
            var d = c(j);
            d.css("width", (this.options.width * e.length) + "px");
            d.find(".nytmmSliderShow_item").css({
                width: this.options.width + "px",
                height: (this.options.height + this.options.creditHeight) + "px"
            });
            d.find(".nytmmSliderShow_photobg").css({
                height: (this.options.height) + "px"
            });
            d.find(".nytmmSliderShow_photo").css({
                maxWidth: this.options.width + "px",
                maxHeight: (this.options.height) + "px"
            });
            if (!this.options.showPhotoBackground) {
                d.find(".nytmmSliderShow_photobg").css({
                    backgroundColor: "transparent"
                });
                d.find(".nytmmSliderShow_photo").each(function () {
                    var k = c(this);
                    k.parent().siblings(".nytmmSliderShow_credit").width(k.width() + "px")
                })
            }
            if (this.captions) {
                this.captions.labels(c.map(e, function (k) {
                    return k.caption
                }))
            }
            var f = [];
            if (this.jsonData) {
                f = c.slideshowJson2Array(this.jsonData, {
                    crop: "jumbo"
                })
            } else {
                f = c.map(e, function (l) {
                    var k = {
                        url: l.jumbo || l.url,
                        width: l.jumboWidth || l.width,
                        height: l.jumboHeight || l.height,
                        credit: l.credit,
                        caption: l.caption
                    };
                    return k
                })
            } if (h.goBigID) {
                SWFObject.dispatchEventToSWF(h.goBigID, {
                    type: "loadarray",
                    data: f
                })
            }
            this.loadDom(d, ".nytmmSliderShow_item")
        },
        loadDom: function (f, d) {
            if (f) {
                this.slider.content(f)
            }
            this.slider.items(d);
            if (this.options.lazyload) {
                this.slider.element.find("img.lazy").lazyload({
                    threshold: this.options.width * 2,
                    failure_limit: 400,
                    effect: "fadeIn",
                    scrollEvent: "sliderchangecomplete",
                    skip_invisible: false,
                    container: c(this.slider.element)
                })
            }
            if (this.thumbnails && this.thumbnails !== "none") {
                switch (this.thumbnails.mode()) {
                    case c.ThumbStrip.LABELS:
                        this.thumbnails.labels(c.map(this.arrayData, function (g) {
                            return g.title
                        }));
                        break;
                    case c.ThumbStrip.IMAGES:
                        if (this.jsonData) {
                            var e = c.slideshowJson2Array(this.jsonData, {
                                crop: "thumbStandard",
                                caption: "none"
                            });
                            this.thumbnails.images(c.map(e, function (g) {
                                if (g.url) {
                                    return g.url
                                } else {
                                    return "http://placehold.it/75x75"
                                }
                            }))
                        } else {
                            this.thumbnails.images(c.map(this.arrayData, function (g) {
                                return g.thumb
                            }))
                        }
                        break;
                    case c.ThumbStrip.NUMBERS:
                    case c.ThumbStrip.ABSTRACT:
                    case c.ThumbStrip.DOTS:
                    default:
                        this.thumbnails.max(this.slider.max());
                        break
                }
            }
            this._onReady()
        },
        index: function (d) {
            if (d === undefined || d === null) {
                return this._getIndex()
            } else {
                return this._setIndex(d)
            }
        },
        max: function () {
            return parseInt(this.slider.max(), 10)
        },
        width: function (d) {
            if (!this.slider) {
                return 0
            }
            if (d === undefined || d === null) {
                return (this.slider.width())
            } else {
                this.slider.width(d)
            }
        },
        height: function (d) {
            if (!this.slider) {
                return 0
            }
            if (d === undefined || d === null) {
                return (this.slider.height() - this.options.creditHeight)
            } else {
                this.slider.height(d + this.options.creditHeight);
                c(".nytmmSliderShow_arrows", this.element).css({
                    height: d + "px"
                })
            }
        },
        _setIndex: function (e) {
            if (e === this._getIndex() || e < 0) {
                return
            }
            if (e >= this.max() && this.max() > 0) {
                e = this.max() - 1
            }
            this.slider.index(e);
            for (var f = 0; f < this.changeListeners.length; f++) {
                var d = this.changeListeners[f];
                if (d && d.index) {
                    d.index(Math.round(e))
                } else {
                    if (c.type(d) === "function") {
                        d(e)
                    } else {
                        Error("SLIDERSHOW: Unknown ChangeListener:", d)
                    }
                }
            }
            if (this.options.finalLink.title && e) {
                c(".nytmmSliderShow_next > span", this.element).html((e === this.max() - 1) ? this.options.finalLink.title : "Next")
            }
            if (this.options.deeplink && c.address) {
                c.address.parameter(this.options.deeplink, e || "0")
            }
            this._trigger("indexchange", null, {
                index: this.index()
            });
            if (this.options.analytics) {
                if (this.ga) {
                    try {
                        this.ga.trackEvent(this.options.analytics, "SlideChange", e)
                    } catch (g) {
                        c.log("google analytics error: ", g)
                    }
                }
                try {
                    dcsMultiTrack("DCS.dcsuri", NYTD.NYTMM.NYTUtils.cleanURLForWebtrends(window.location.href, "photo_change"), "WT.ti", this.options.analytics + " - Slide Show - NYTimes.com", "WT.z_dcsm", "0", "WT.z_gpst", "Slideshow", "WT.z_sssn", e + 1, "WT.z_ssts", this.max(), "WT.z_sse", (this.max() - 1 === e ? "finish" : ""))
                } catch (g) {
                    c.log("webtrends analytics error or missing library: ", g)
                }
            }
        },
        _getIndex: function () {
            if (!this.slider) {
                return 0
            }
            return parseInt(this.slider.index(), 10)
        },
        next: function () {
            var d = this._getIndex() + 1;
            if (d < this.max()) {
                this._setIndex(this._getIndex() + 1)
            }
        },
        previous: function () {
            var d = this._getIndex() - 1;
            if (d >= 0) {
                this._setIndex(this._getIndex() - 1)
            }
        },
        categories: function (d) {
            if (!this.thumbnails) {
                return null
            }
            if (d === undefined || d === null) {
                return this.thumbnails.categories()
            } else {
                this.thumbnails.categories(d)
            }
        },
        autosizeCaptions: function () {
            if (this.captions) {
                this.captions.height("auto")
            }
        },
        _makeThumbs: function (e) {
            if (this.options.thumbnails && this.options.thumbnails !== "none") {
                var d = this;
                this.thumbnails = c('<div class="nytmmSliderShow_thumbstrip clearfix"></div>').appendTo(e).ThumbStrip({
                    skin: this.options.skin,
                    mode: this.options.thumbnails,
                    thumbWidth: this.options.thumbnailWidth,
                    thumbHeight: this.options.thumbnailHeight,
                    thumbMargin: this.options.thumbnailMargin,
                    arrows: this.options.thumbnailArrows,
                    categories: this.options.categories,
                    change: function (g, f) {
                        d.index(f.index)
                    }
                }).data("ThumbStrip");
                this.addChangeListener(this.thumbnails)
            }
        },
        _makeGoBig: function (g) {
            var e = this;
            var d = Math.round(Math.random() * 10000);
            this.goBigID = "swfFullScreen" + d;
            c('<div class="nytmmSliderShow_goBig"></div>').attr("id", "fullscreen" + d).appendTo(g);
            var f = new SWFObject("../swf/GoBigButton3.swf", this.goBigID, 82, 21, 9, null);
            f.addParam("allowScriptAccess", "always");
            f.addParam("allowFullScreen", "true");
            f.addParam("wmode", "transparent");
            f.addParam("base", "");
            f.addVariable("src", "");
            f.addVariable("allowCaching", "true");
            if (this.options.skin === "dark") {
                f.addVariable("skin", "dark")
            }
            f.addVariable("size", "small");
            f.addVariable("icon", "true");
            f.addVariable("embedId", this.goBigID);
            f.write("fullscreen" + d);
            this.addChangeListener(function (h) {
                SWFObject.dispatchEventToSWF(e.goBigID, {
                    type: "setindex",
                    index: h
                })
            });
            SWFObject.addSWFEventListener(e.goBigID, "exitFS", function (j) {
                c.log("SWF DISPATCH", j.index);
                var h = e.slider.options.speed;
                e.slider.options.speed = 0;
                e.index(j.index);
                e.slider.options.speed = h
            })
        },
        _makeCaptions: function (d) {
            if (this.options.captionSize && this.options.captionSize !== "none") {
                this.captions = c('<div class="nytmmSliderShow_captions"></div>').appendTo(d).TextCounter({
                    mode: c.TextCounter.LIST
                }).data("TextCounter");
                this.addChangeListener(this.captions)
            }
        },
        _makeArrows: function (k) {
            var f;
            var j = "nytmm_visible";
            if (this.options.showArrows) {
                var g = this;
                f = c('<div class="nytmmSliderShow_arrows clearfix"></div>').appendTo(k);
                var d = c('<div class="nytmmSliderShow_next"><span></span></div>').css({
                    height: this.options.height + "px",
                    lineHeight: this.options.height + "px"
                }).click(function (l) {
                    if (g.options.finalLink.url && g.index() === g.max() - 1) {
                        window.location.href = g.options.finalLink.url
                    }
                    g.next();
                    l.preventDefault()
                }).appendTo(f);
                var e = c('<div class="nytmmSliderShow_prev"><span></span></div>').css({
                    height: this.options.height + "px",
                    lineHeight: this.options.height + "px"
                }).click(function (l) {
                    g.previous();
                    l.preventDefault()
                }).appendTo(f);
                var h = function (l) {
                    c.log("CHECK", l, "of", g.max());
                    if (l <= 0) {
                        e.removeClass(j)
                    } else {
                        e.addClass(j)
                    } if (l >= g.max() - 1 && !g.options.finalLink.title) {
                        d.removeClass(j)
                    } else {
                        d.addClass(j)
                    }
                };
                this.addChangeListener(h);
                this.addReadyListener(h)
            }
            return f
        },
        _makeSlider: function (f, g) {
            var e = c.extend(true, {}, this.options, {
                height: this.options.height + this.options.creditHeight
            });
            var d = c('<div class="nytmmSliderShow_slider"></div>');
            f.append(d);
            this.slider = f.find(".nytmmSliderShow_slider").Slider(e).data("Slider");
            this.slider.content(g)
        },
        _create: function () {
            this.readyListeners = this.options.readyListeners.concat();
            this.changeListeners = this.options.changeListeners.concat();
            var h = this;
            var k = c(this.element).addClass("nytmmSliderShow_main clearfix").addClass("nytmmSliderShow_" + this.options.skin).width(this.options.width);
            var g = this.options.content;
            var e = null;
            var j = this.options.layout.split("|");
            var d = true;
            var l = k.children().detach();
            c.each(j, function (m, n) {
                switch (n) {
                    case "slider":
                        h._makeSlider(k, l);
                        e = h._makeArrows(k);
                        break;
                    case "captions":
                        h._makeCaptions(k);
                        break;
                    case "thumbnails":
                        h._makeThumbs(k);
                        break;
                    case "gobig":
                        h._makeGoBig(k);
                        break;
                    default:
                        break
                }
            });
            c(this.options.showArrows ? e : this.slider.element).swipe({
                swipeLeft: function () {
                    h.next();
                    return false
                },
                swipeRight: function (m) {
                    h.previous();
                    return false
                }
            });
            if (this.options.keyboard) {
                c(this.options.keyboard).keydown(function (n) {
                    var m = true;
                    switch (n.keyCode) {
                        case 37:
                            h.previous();
                            break;
                        case 39:
                            h.next();
                            break;
                        default:
                            m = false
                    }
                    return !m
                })
            }
            if (typeof g === "string" && g.match(/\.jso?n?p?$/i)) {
                this.loadURL(g, function () {
                    c.log("Content loaded from " + g)
                })
            } else {
                if (c.isArray(g)) {
                    this.loadArray(g)
                } else {
                    this.loadDom(g, this.options.contentSelector)
                }
            } if (this.options.deeplink && c.address) {
                c.address.externalChange(function () {
                    c.log("ADDRESS CHANGE", c.address.parameter(h.options.deeplink));
                    var m = parseInt(c.address.parameter(h.options.deeplink), 10);
                    m = (m >= 0) ? m : 0;
                    h.index(m)
                })
            }
            if (this.options.analytics) {
                try {
                    this.ga = new NYTMM.GoogleAnalytics()
                } catch (f) {
                    c.log("google analytics error: ", f)
                }
            }
        },
        _onReady: function () {
            var d = this.index();
            for (var e = 0; e < this.readyListeners.length; e++) {
                var f = this.readyListeners[e];
                if (f && f.index) {
                    f.index(Math.round(d))
                } else {
                    if (c.type(f) === "function") {
                        f(d)
                    } else {
                        Error("SLIDERSHOW: Unknown ReadyListener:", f)
                    }
                }
            }
            this._trigger("complete")
        },
        addReadyListener: function (d) {
            this.readyListeners.push(d)
        },
        addChangeListener: function (d) {
            this.changeListeners.push(d)
        },
        destroy: function () {
            this.slider.destroy();
            return this
        }
    };
    c.widget("nytmm.SliderShow", b)
})(jQuery);
(function (a) {
    NYTD.NYTMM.jsonSlideshowCallbackBusy = false;
    a.extend({
        slideshowUrls2MultiArray: function (e, d) {
            var f = e.length;
            var b = [];
            var c = function (h) {
                var g = {};
                g.title = h.title;
                g.introduction = (h.introduction && h.introduction.text) ? h.introduction.text : h.description;
                g.kicker = h.kicker;
                g.date = h.lastBuildDate;
                g.images = a.slideshowJson2Array(h, {
                    crop: "jumbo"
                });
                b.push(g);
                f--;
                if (f <= 0) {
                    d(b)
                }
            };
            a.each(e, function (h, g) {
                g = g.replace(/\s/g, "");
                a.slideshowUrl2Array(g, c)
            })
        },
        slideshowUrl2Array: function (b, d, c) {
            if (NYTD.NYTMM.jsonSlideshowCallbackBusy === false) {
                NYTD.NYTMM.jsonSlideshowCallbackBusy = true;
                a.ajax({
                    url: b,
                    dataType: "jsonp",
                    jsonpCallback: "jsonSlideshowCallback",
                    cache: true,
                    timeout: 10000,
                    success: function (f, e) {
                        NYTD.NYTMM.jsonSlideshowCallbackBusy = false;
                        d(f)
                    },
                    error: function (e) {
                        NYTD.NYTMM.jsonSlideshowCallbackBusy = false;
                        if (c) {
                            c(e)
                        }
                    }
                })
            } else {
                setTimeout(function () {
                    a.slideshowUrl2Array(b, d)
                }, 300)
            }
        },
        slideshowJson2Array: function (n, p) {
            var b = a.extend({
                crop: "jumbo",
                caption: "full"
            }, p);
            var g = [];
            var j = n.items;
            for (var f = 0; f < j.length; f++) {
                var m = j[f];
                var e = null;
                var h = 0;
                var d = 0;
                var l = "";
                var c = m.title;
                var k = m.image.credit;
                a.each(m.image.crops, function (o, q) {
                    if (q.type.toLowerCase() == b.crop.toLowerCase()) {
                        e = q.link;
                        h = q.width;
                        d = q.height
                    }
                });
                a.each(m.captions, function (q, o) {
                    if (o.type.toLowerCase() === b.caption.toLowerCase()) {
                        l = o.caption
                    }
                });
                g.push({
                    title: c,
                    url: e,
                    caption: l,
                    credit: k,
                    width: h,
                    height: d
                })
            }
            return g
        },
        calculateBestFit: function (b, j, e) {
            var d = b.width;
            var g = b.height;
            if (e) {
                d *= 1000;
                g *= 1000
            }
            if (d > j.width) {
                var c = j.width / d;
                d = j.width;
                g *= c
            }
            if (g > j.height) {
                var f = (j.height) / g;
                g = j.height;
                d *= f
            }
            var k = ((j.height) - g) / 2;
            return {
                width: d,
                height: g,
                paddingTop: k
            }
        }
    })
})(jQuery);
(function (a) {
    a.fn.lightbox_me = function (b) {
        return this.each(function () {
            var e = a.extend({}, a.fn.lightbox_me.defaults, b),
                o = a(),
                m = a(this),
                p = a('<iframe id="foo" style="z-index: ' + (e.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),
                g = (a.browser.msie && a.browser.version < 7),
                n = true;
            if (e.showOverlay) {
                var f = a(".js_lb_overlay:visible");
                if (f.length > 0) {
                    o = f.eq(0);
                    n = false
                } else {
                    o = a('<div class="' + e.classPrefix + '_overlay js_lb_overlay"/>')
                }
            }
            if (g) {
                var d = /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank";
                p.attr("src", d);
                a("body").append(p)
            }
            a("body").append(m.hide()).append(o);
            if (e.showOverlay) {
                h();
                o.css({
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: (e.zIndex + 2),
                    display: (n ? "none" : "")
                });
                if (!o.hasClass("lb_overlay_clear")) {
                    o.css(e.overlayCSS)
                }
            }
            if (e.showOverlay && n) {
                o.fadeIn(e.overlaySpeed, function () {
                    c();
                    m[e.appearEffect](e.lightboxSpeed, function () {
                        h();
                        c();
                        e.onLoad()
                    })
                })
            } else {
                c();
                m[e.appearEffect](e.lightboxSpeed, function () {
                    e.onLoad()
                })
            } if (e.parentLightbox) {
                e.parentLightbox.fadeOut(200)
            }
            a(window).resize(h).resize(c).scroll(c).keyup(l);
            if (e.closeClick) {
                o.click(function (q) {
                    j();
                    q.preventDefault()
                })
            }
            m.delegate(e.closeSelector, "click", function (q) {
                j();
                q.preventDefault()
            });
            m.bind("close", function () {
                j()
            });
            m.bind("closelightboxonly", function () {
                j(true)
            });
            m.bind("reposition", c);
            m.bind("recenter", k);

            function j(r) {
                e.beforeClose();
                var q = m[0].style;
                if (e.destroyOnClose) {
                    if (!r) {
                        o.remove()
                    }
                    m.remove()
                } else {
                    if (r) {
                        o.hide()
                    }
                    m.hide()
                } if (e.parentLightbox) {
                    e.parentLightbox.fadeIn(200)
                }
                p.remove();
                m.undelegate(e.closeSelector, "click");
                a(window).unbind("reposition", h);
                a(window).unbind("reposition", c);
                a(window).unbind("recenter", k);
                a(window).unbind("scroll", c);
                a(document).unbind("keyup", l);
                if (g) {
                    q.removeExpression("top")
                }
                e.onClose()
            }
            function l(q) {
                if ((q.keyCode == 27 || (q.DOM_VK_ESCAPE == 27 && q.which == 0)) && e.closeEsc) {
                    j()
                }
            }
            function h() {
                if (a(window).height() < a(document).height()) {
                    o.css({
                        height: a(document).height() + "px"
                    });
                    p.css({
                        height: a(document).height() + "px"
                    })
                } else {
                    o.css({
                        height: "100%"
                    });
                    if (g) {
                        a("html,body").css("height", "100%");
                        p.css("height", "100%")
                    }
                }
            }
            function k() {
                if (m.css("position") === "absolute") {
                    var q = a(document).scrollTop() + 40;
                    m.css({
                        position: "absolute",
                        top: q + "px",
                        marginTop: 0
                    });
                    if (g) {
                        m[0].style.removeExpression("top")
                    }
                }
            }
            function c() {
                var r = m[0].style;
                if (e.horizontallyCentered) {
                    m.css({
                        left: "50%",
                        marginLeft: (m.outerWidth() / 2) * -1,
                        zIndex: (e.zIndex + 3)
                    })
                } else {
                    m.css({
                        zIndex: (e.zIndex + 3)
                    })
                } if ((m.height() + 80 >= a(window).height()) && (m.css("position") != "absolute" || g)) {
                    var q = a(document).scrollTop() + 40;
                    m.css({
                        position: "absolute",
                        top: q + "px",
                        marginTop: 0
                    });
                    if (g) {
                        r.removeExpression("top")
                    }
                } else {
                    if (m.height() + 80 < a(window).height()) {
                        if (g) {
                            r.position = "absolute";
                            if (e.centered) {
                                r.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
                                r.marginTop = 0
                            } else {
                                var t = (e.modalCSS && e.modalCSS.top) ? parseInt(e.modalCSS.top) : 0;
                                r.setExpression("top", "((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + t + ') + "px"')
                            }
                        } else {
                            if (e.centered) {
                                m.css({
                                    position: "fixed",
                                    top: "50%",
                                    marginTop: (m.outerHeight() / 2) * -1
                                })
                            } else {
                                m.css({
                                    position: "fixed"
                                }).css(e.modalCSS)
                            }
                        }
                    }
                }
            }
        })
    };
    a.fn.lightbox_me.defaults = {
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 250,
        lightboxSpeed: 300,
        closeSelector: ".close",
        closeClick: true,
        closeEsc: true,
        destroyOnClose: false,
        showOverlay: true,
        parentLightbox: false,
        onLoad: function () {},
        beforeClose: function () {},
        onClose: function () {},
        classPrefix: "lb",
        zIndex: 999,
        centered: false,
        horizontallyCentered: true,
        modalCSS: {
            top: "40px"
        },
        overlayCSS: {
            background: "black",
            opacity: 0.3
        }
    }
})(jQuery);
/*
 * jQuery imagesLoaded plugin v2.0.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */ (function (a, b) {
    var c = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    a.fn.imagesLoaded = function (l) {
        var h = this,
            n = a.isFunction(a.Deferred) ? a.Deferred() : 0,
            m = a.isFunction(n.notify),
            e = h.find("img").add(h.filter("img")),
            f = [],
            k = [],
            g = [];

        function j() {
            var o = a(k),
                p = a(g);
            if (n) {
                if (g.length) {
                    n.reject(e, o, p)
                } else {
                    n.resolve(e)
                }
            }
            if (a.isFunction(l)) {
                l.call(h, e, o, p)
            }
        }
        function d(o, p) {
            if (o.src === c || a.inArray(o, f) !== -1) {
                return
            }
            f.push(o);
            if (p) {
                g.push(o)
            } else {
                k.push(o)
            }
            a.data(o, "imagesLoaded", {
                isBroken: p,
                src: o.src
            });
            if (m) {
                n.notifyWith(a(o), [p, e, a(k), a(g)])
            }
            if (e.length === f.length) {
                setTimeout(j);
                e.unbind(".imagesLoaded")
            }
        }
        if (!e.length) {
            j()
        } else {
            e.bind("load.imagesLoaded error.imagesLoaded", function (o) {
                d(o.target, o.type === "error")
            }).each(function (o, q) {
                var r = q.src;
                var p = a.data(q, "imagesLoaded");
                if (p && p.src === r) {
                    d(q, p.isBroken);
                    return
                }
                if (q.complete && q.naturalWidth !== b) {
                    d(q, q.naturalWidth === 0 || q.naturalHeight === 0);
                    return
                }
                if (q.readyState || q.complete) {
                    q.src = c;
                    q.src = r
                }
            })
        }
        return n ? n.promise(h) : h
    }
})(jQuery);
NYTD = NYTD || {};
NYTD.NYTMM = NYTD.NYTMM || {};
NYTD.NYTMM.shareTools = (function (e) {
    var r = {
        mainClassName: "shareTools",
        itemClassName: "shareToolsItem",
        defaultActiveShares: ["facebook|Facebook", "google|Google+", "twitter|Twitter"],
        defaultUrl: window.location.href.replace(/#.*/, ""),
        defaultTitle: e('meta[property="og:title"]').attr("content") || document.title,
        defaultDescription: e("meta[name=description]").attr("content") || "",
        defaultAdPosition: "Frame4A",
        defaultOverlayAdPosition: "Frame6A",
        defaultWidth: 600,
        defaultHeight: 450,
        labelSpecialChar: "|",
        emailThisFormInitiated: false,
        loadedAdPositions: [],
        count: 0
    };
    var b = {
        overlay: '      <div id="shareToolsOverlayContainer" class="shareToolsOverlayContainer shareToolsInstance shareToolsThemeClassic" style="display:none;">            <div id="shareToolsOverlay" class="shareToolsOverlay"></div>            <div id="shareToolsDialogBox" class="shareToolsDialogBox">              <div class="shareToolsInset">                   <div class="shareToolsHeader shareToolsOpposingFloatControl shareToolsWrap"><a href="#" class="element2 shareToolsDialogBoxClose" id="shareToolsDialogBoxClose">Close</a><h5 class="element1">Share</h5></div>                  <div id="shareToolsDialogBoxContent" class="shareToolsDialogBoxContent shareToolsSingleRule">                       <div class="shareToolsBox shareToolsWrap"><div class="shareToolsColumn"><div class="shareToolsInset"><ul class="shareToolsList">                        <% jQuery.each(shares, function(index, share) { %>                      <li data-share="<%= share.name %>" class="<%= share.classes %>"><span><%= share.label %></span></li>                        <% }); %></ul></div></div><div class="shareToolsColumn shareToolsLastColumn"><div class="shareToolsInset"><ul class="shareToolsList"></ul></div></div></div>                    </div>                  <div id="shareToolsFooter" class="shareToolsFooter"><div id="<%= options.adPosition %>" class="<%= options.adPosition %>"></div></div>              </div>          </div>      </div>      ',
        shareList: '<div class="shareToolsBox"><ul class="shareToolsList">      <% jQuery.each(shares, function(index, share) { if (share.name == "ad") { %>            <li data-share="<%= share.name %>" class="<%= share.classes %> <%= share.adPosition %>" id="<%= share.adPosition %>"></li>      <% } else if (share.type == "link") { %>            <li data-share="<%= share.name %>" class="<%= share.classes %>"><a href="<%= share.postUrl %>"><%= share.label %></a></li>      <% } else { %>          <li data-share="<%= share.name %>" class="<%= share.classes %>"><span><%= share.label %></span></li>        <% }        }); %></ul></div>       ',
        emailThisForm: '<form action="<%= data.postUrl %>" enctype="application/x-www-form-urlencoded" id="shareToolsEmailThis" name="shareToolsEmailThis" method="POST"><input type="hidden" value="1" name="type"><input type="hidden" value="<%= data.url %>" name="url"><input type="hidden" value="<%= data.title %>" name="title"><input type="hidden" value="" name="description"><input type="hidden" value="" name="asset_id"><input type="hidden" value="" name="pub_date"><input type="hidden" value="" name="author"><input type="hidden" value="" name="col_name"><input type="hidden" value="" name="source"><input type="hidden" value="" name="section"><input type="hidden" value="" name="nytdsection"><input type="hidden" value="" name="nytdsubsection"><input type="hidden" value="" name="adx_setup_tag"><input type="hidden" value="" name="adx_keywords"><input type="hidden" value="<%= data.hash %>" name="encrypted_key"></form>'
    };
    var o = {
        facebook2: {
            active: true,
            onShowAll: true,
            label: "Facebook",
            postUrl: "https://www.facebook.com/Dream4TK",
            postType: "popup",
            shareParameters: {
                url: "u"
            },
            smid: "fb-share",
            width: 655,
            height: 430
        },
        facebook: {
            active: true,
            onShowAll: true,
            label: "Facebook",
            postUrl: "https://www.facebook.com/Dream4TK",
            postType: "popup",
            shareParameters: {
                url: "u"
            },
            smid: "fb-share",
            width: 655,
            height: 430
        },
        twitter: {
            active: true,
            onShowAll: true,
            label: "Twitter",
            postUrl: "https://twitter.com/intent/tweet?related=dream4TK&source=tweetbutton&text=I'm%20supporting%20the%20dream!%20%23dream4TK&url=http://dream4tk.org&via=dream4TK",
            postType: "popup",
            shareParameters: {
                url: "url",
                title: "text"
            },
            smid: "tw-share",
            width: 600,
            height: 450
        },
        google: {
            active: true,
            onShowAll: true,
            label: "Google+",
            postUrl: "https://plus.google.com/share",
            postType: "popup",
            shareParameters: {
                url: "url"
            },
            urlParameters: {
                hl: "en-US"
            },
            smid: "go-share",
            width: 600,
            height: 600
        },
        tumblr: {
            active: true,
            onShowAll: true,
            label: "Tumblr",
            postUrl: "http://www.tumblr.com/share/link",
            postType: "popup",
            shareParameters: {
                url: "url",
                title: "name",
                description: "description"
            },
            smid: "tu-share",
            width: 560
        },
        reddit: {
            active: true,
            onShowAll: true,
            label: "Reddit",
            postUrl: "http://www.reddit.com/submit",
            postType: "popup",
            shareParameters: {
                url: "url",
                title: "title"
            },
            smid: "re-share",
            width: 854,
            height: 550
        },
        showall: {
            active: true,
            onShowAll: false,
            label: "Show All"
        },
        print: {
            active: true,
            onShowAll: false,
            label: "Print",
            postUrl: r.defaultUrl,
            postType: "link",
            urlParameters: {
                pagewanted: "print"
            }
        },
        singlepage: {
            active: true,
            onShowAll: false,
            label: "Single Page",
            postUrl: r.defaultUrl,
            postType: "link",
            urlParameters: {
                pagewanted: "all"
            }
        },
        ad: {
            active: true,
            onShowAll: false,
            label: "Advertisement"
        }
    };

    function m(u, K) {
        u = e(u);
        if (!u.hasClass("shareToolsInstance")) {
            var K = K || u.data(),
                y = K.url || r.defaultUrl,
                L = K.title || r.defaultTitle,
                M = K.thumbnail || r.defaultThumbnail,
                D = K.description || r.defaultDescription,
                E = K.shares ? K.shares.split(",") : r.defaultActiveShares,
                A = K.adPosition ? K.adPosition : r.defaultAdPosition,
                H = e("#pageLinks").length > 0 ? true : false,
                x = false,
                z = [],
                G, t, B, w, v, J;
            r.count += 1;
            u.addClass("shareToolsInstance").data({
                url: y,
                title: L,
                description: D,
                thumbnail: M,
                count: r.count
            });
            for (var F = 0, C = E.length; F < C; F++) {
                G = E[F].split(r.labelSpecialChar);
                t = G[0];
                if (typeof o[t] !== "undefined") {
                    if (t != "singlepage" || (t == "singlepage" && H)) {
                        if (o[t].active) {
                            if (t == "ad") {
                                x = true
                            }
                            w = o[t].postType || "popup";
                            v = w == "link" ? f(t) : "";
                            J = r.itemClassName + " " + r.itemClassName + h(t);
                            if (E[F].indexOf(r.labelSpecialChar) !== -1) {
                                if (G[1]) {
                                    B = G[1]
                                } else {
                                    B = "";
                                    J += " noLabel"
                                }
                            } else {
                                B = o[t].label
                            }
                            z.push({
                                label: B,
                                name: t,
                                classes: J,
                                adPosition: x ? A : "",
                                type: w,
                                postUrl: v
                            })
                        }
                    }
                }
            }
            u.html(NYTD.Template(b.shareList, {
                shares: z
            }));
            var I = u.find("li");
            I.filter(":first").addClass("firstItem");
            I.filter(":last").addClass("lastItem");
            if (x) {
                g(A)
            }
        }
    }
    function s() {
        var v = [],
            x, u;
        e.each(o, function (y, z) {
            if (o[y].active && o[y].onShowAll) {
                x = z.label;
                u = r.itemClassName + " " + r.itemClassName + h(y);
                v.push({
                    label: x,
                    name: y,
                    classes: u
                })
            }
        });
        e("body").append(NYTD.Template(b.overlay, {
            shares: v,
            options: {
                adPosition: r.defaultOverlayAdPosition
            }
        }));
        var w = e("#shareToolsDialogBoxContent").find(".shareToolsItem");
        var t = Math.ceil(w.length / 2);
        e(w).filter(":gt(" + (t - 1) + ")").detach().appendTo(e("#shareToolsDialogBoxContent .shareToolsLastColumn ul"));
        e("#shareToolsDialogBoxClose").click(function (y) {
            y.preventDefault();
            e("#shareToolsOverlayContainer").fadeOut()
        })
    }
    function p() {
        widgets = e("." + r.mainClassName).addClass("nytmm_shareTools");
        if (widgets.length > 0) {
            widgets.each(function (t, u) {
                m(e(this))
            })
        }
    }
    function q() {
        var t = "." + r.itemClassName + " span";
        e("body").delegate(t, "click", function (x) {
            var u = e(this).parent().data("share"),
                w = e(this).closest(".shareToolsInstance").data(),
                v = o[u];
            var y = e.extend(true, {}, w);
            if (v.smid) {
                y.url = y.url + c(y.url) + "smid=" + v.smid
            }
            if (u == "showall") {
                if (e.inArray(r.defaultOverlayAdPosition, r.loadedAdPositions) === -1) {
                }
                e("#shareToolsOverlayContainer").data("url", y.url).data("title", y.title).data("description", y.description).fadeIn()
            }
            k("DCS.dcssip", "www.dream4tk.org", "DCS.dcsuri", "/Article-Tool-Share-" + h(u) + ".html", "WT.ti", "Article-Tool-Share-" + h(u), "WT.z_dcsm", "1", "WT.z_loc", y.count)
        });
        e("html").delegate("#shareToolsOverlayDialogBox", "click", function (u) {
            u.stopPropagation()
        });
        e("html").delegate("#shareToolsOverlay", "click", function (u) {
            u.preventDefault();
            e("#shareToolsOverlayContainer").fadeOut()
        })
    }
    function n(x, y) {
        var v = o[x],
            w = v.width ? v.width : r.defaultWidth,
            t = v.height ? v.height : r.defaultHeight,
            u = f(x, y);
        window.open(u, x + "Share", "toolbar=0,status=0,height=" + t + ",width=" + w + ",scrollbars=yes,resizable=yes")
    }
    function f(v, w) {
        var t = o[v],
            u = [],
            y = t.postUrl;
        if (t.shareParameters && w) {
            var x;
            e.each(t.shareParameters, function (A, z) {
                x = w[A];
                u.push(z + "=" + encodeURIComponent(x))
            })
        }
        if (t.urlParameters) {
            e.each(t.urlParameters, function (z, A) {
                u.push(z + "=" + encodeURIComponent(A))
            })
        }
        u = u.join("&");
        y = y + c(y) + u;
        return y
    }
    function h(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    function c(t) {
        return t.indexOf("?") !== -1 ? "&" : "?"
    }
    function a() {
        var t = window.regstatus && window.regstatus == "registered" ? true : false;
        return t
    }
    function j() {
        var u = window.location.href.replace(/[\?&]+gwh=[^&]+/, ""),
            w = u.split("?"),
            v = w[0],
            t = w[1];
        if (t) {
            t = encodeURIComponent(t).replace("%", "Q");
            u = v + "&OQ=" + t
        } else {
            u = v
        }
        return u
    }
    function l(u, x) {
        var v = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">     <html><head>        <script type="text/javascript" src="http://graphics8.nytimes.com/js/common.js"><\/script>       <script type="text/javascript">     function loadShortUrl() {           var url;            NYTD.jQuery.ajax({              url: "' + r + '",               dataType: "jsonp",              data: { "url" : "' + x.url + '" }           }).success(function(data, textStatus, jqXHR){               if (data && data.payload && data.payload.short_url) {                   short_url = data.payload.short_url;                 url = short_url;                }               shortUrlRedirect(url);          }).error(function(jqXHR, textStatus, errorThrown){              shortUrlRedirect(url);          });     };      function shortUrlRedirect(url) {            window.location.href = "' + o[u].postUrl + '?url=" + encodeURIComponent(url) + "&text=' + encodeURIComponent(x.title) + '";     };      <\/script>      </head>     <body onload="loadShortUrl();"></body></html>';
        var t = window.open("", u + "Share", "toolbar=0,status=0,height=" + o[u].height + ",width=" + o[u].width + ",scrollbars=yes,resizable=yes");
        t.document.write(v);
        t.document.close()
    }
    function k() {
        if ("dcsMultiTrack" in window) {
            dcsMultiTrack.apply(this, arguments)
        } else {
            setTimeout(function () {
                k.apply(this, arguments)
            }, 1000)
        }
    }
    return {
        init: m,
        initOverlay: s,
        initShareElements: p,
        setupHandlers: q
    }
})(jQuery);
NYTD.Template = function (c, b) {
    var a = !/\W/.test(c) ? cache[c] = cache[c] || NYTD.Template(document.getElementById(c).innerHTML) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + c.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
    return b ? a(b) : a
};
jQuery(document).ready(function () {
    NYTD.NYTMM.shareTools.initOverlay();
    NYTD.NYTMM.shareTools.setupHandlers()
});
(function (b, a) {
    a.Lightboxer = function (c) {
        a.Lightboxer.CLOSE_EVENT = "NYTD.NYTMM.Lightboxer:close";
        a.Lightboxer.CLOSE_LIGHTBOX_EVENT = "NYTD.NYTMM.Lightboxer:lightboxclose";
        a.Lightboxer.PRE_OPEN_EVENT = "NYTD.NYTMM.Lightboxer:preopen";
        a.Lightboxer.OPEN_EVENT = "NYTD.NYTMM.Lightboxer:open";
        var d = this;
        this.options = b.extend(true, {
            target: "a.nytmm_lightboxer",
            skin: "light",
            swipe: true,
            autoSize: false,
            autoSizeMax: {
                width: Number.MAX_VALUE,
                height: Number.MAX_VALUE
            },
            linkScanning: true,
            autoPlay: true,
            wrap: true,
            autoAdvance: true,
            keyboard: document,
            selectedClass: "nytmm_lightboxed",
            shareTools: true,
            sortBy: function (g, f) {
                return f
            },
            getID: function (g, f) {
                return g.id || g.src || g.jsonp || f
            },
            items: [],
            onOpen: function (g, f) {},
            onPreOpen: function (g, f) {},
            onClose: function (g, f) {},
            onLightboxClose: function (g, f) {},
            defaultSizes: {
                photo: {
                    width: undefined,
                    height: undefined
                },
                slideshow: {
                    width: 600,
                    height: 400
                },
                video: {
                    width: 592,
                    height: 333
                },
                embedly: {
                    width: 592,
                    height: 333
                }
            },
            templates: {
                boxHeader: '<div id="nytmm_lb_all">{{>navigation}}<div id="nytmm_lightboxer" class="nytmm_lb_type_{{type}} clearfix"><h3>{{title}}&nbsp;</h3>{{#index_max}}<h4>{{index}} of {{index_max}}</h4>{{/index_max}}<span class="nytmm_lb_close_hitbox"><span class="nytmm_lb_close" title="CLOSE"></span></span><div class="nytmm_lb_content clearfix">',
                boxFooter: "</div></div></div>",
                navigation: '<div id="nytmm_lb_nav"><div class="nytmm_lb_previous"><span></span></div><div class="nytmm_lb_next"><span></span></div></div>',
                shareTools: "",
                textBlock: '<div class="nytmm_lb_text"><p><span class="nytmm_lb_caption">{{{caption}}}</span> <span class="nytmm_lb_credit">{{{credit}}}</span></p><div class="nytmm_shareTools"></div></div>',
                photo: '{{>boxHeader}}<img src="{{src}}" class="nytmm_lb_photoBox" alt="{{title}}" style="{{#width}}width:{{width}}px;{{/width}}{{#height}} height:{{height}}px;{{/height}}" />{{>textBlock}}{{>boxFooter}}',
                slideshow: '{{>boxHeader}}<div class="nytmm_lb_slideshowBox"></div>{{>textBlock}}{{>boxFooter}}',
                video: '{{>boxHeader}}<div class="nytmm_lb_videoBox"></div>{{>textBlock}}{{>boxFooter}}',
                embedly: '{{>boxHeader}}<div class="nytmm_lb_embedly"></div>{{>textBlock}}{{>boxFooter}}',
                audio: "",
                audioPlusPhoto: "",
                audioPlusSlideshow: "",
                pano: "",
                freeform: '{{>boxHeader}}<div class="nytmm_lb_freeform">{{{src}}}</div>{{>boxFooter}}'
            },
            lightbox_meOptions: {
                zIndex: "100000200",
                destroyOnClose: true
            },
            sliderShowOptions: {
                thumbnails: "numbers",
                thumbnailHeight: 12,
                thumbnailWidth: 12,
                showArrows: true,
                keyboard: null,
                lazyload: false,
                deeplink: false,
                layout: "slider|thumbnails|captions"
            },
            YMVPOptions: {},
            shareToolsOptions: {
                target: ".nytmm_shareTools",
                theme: "minimal",
                url: function (f) {
                    return window.location.href
                },
                title: function (f) {
                    return window.document.title + (f.title ? " - " + f.title : "")
                },
                description: function (f) {
                    return (f.type ? f.type.toUpperCase() + ": " : "") + (f.caption ? f.caption : "")
                },
                thumbnail: function (f) {
                    return f.src
                },
                shares: "facebook2|Facebook,twitter|Twitter|Link",
                adPosition: undefined
            }
        }, c);
        var e = this.options;
        this._index = -1;
        this.$lightbox = null;
        this.currentItem = null;
        return this
    };
    a.Lightboxer.prototype.length = function () {
        return this.options.items.length
    };
    a.Lightboxer.prototype.index = function (c, e) {
        var f = this.options;
        if (c === undefined) {
            return (this.$lightbox ? this._index : -1)
        } else {
            if (this.index() !== c || e) {
                this._index = c;
                if (c >= 0 && c < this.options.items.length) {
                    var d = this.options.items[c];
                    this.open(d)
                }
            }
        }
    };
    a.Lightboxer.prototype.parseData = function (c) {
        if (!c.type && c.src) {
            if (c.src.search(/\.(jpg|png|gif|jpeg|bmp|tiff)$/i) >= 0) {
                c.type = "photo"
            } else {
                if (c.src.search(/\.(mp3|ogg|wav)$/i) >= 0) {
                    c.type = "audio"
                } else {
                    if (c.src.search(/\.(jsonp|json)$/i) >= 0) {
                        c.type = "slideshow"
                    } else {
                        if (c.src.search(/^\d+$/i) === 0) {
                            c.type = "video"
                        } else {
                            if (c.src.search(/^[\da-zA-Z\-_]{11}$/i) === 0) {
                                b.log("YT vid");
                                c.type = "video"
                            } else {
                                if (c.src.search(/\/\d{1,3}[\/x]\d{1,3}\/?$/) >= 0) {
                                    c.type = "photo";
                                    c.debugImage = true
                                } else {
                                    if (c.src.search(/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi) >= 0) {
                                        c.type = "embedly"
                                    } else {
                                        c.type = "freeform"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (!c.width && this.options.defaultSizes[c.type]) {
            c.width = this.options.defaultSizes[c.type].width
        }
        if (!c.height && this.options.defaultSizes[c.type]) {
            c.height = this.options.defaultSizes[c.type].height
        }
        c.id = this.options.getID(c);
        return c
    };
    a.Lightboxer.prototype.extractData = function (c) {
        c = b(c);
        var d = c.data();
        d.src = c.attr("href") || c.data("src");
        d.src = String(d.src).replace(/[?# ].*$/, "");
        d.title = c.attr("title") || c.data("title");
        d.type = c.data("type");
        return this.parseData(d)
    };
    a.Lightboxer.prototype.getIndexByID = function (c) {
        return _(this.options.items).chain().map(this.options.getID).indexOf(c).value()
    };
    a.Lightboxer.prototype.getIndexByItem = function (c) {
        if (!this.options.items.length) {
            return -1
        }
        var d = this.options.getID(c);
        return this.getIndexByID(d)
    };
    a.Lightboxer.prototype.open = _.throttle(function (p) {
        if (!this.options.getID(p)) {
            p = this.parseData(p)
        }
        var j = this;
        var d = this.options;
        var m = !! this.$lightbox;
        var k = this.getIndexByItem(p);
        if (k >= 0) {
            this._index = k;
            p.index = k + 1;
            p.index_max = d.items.length;
            b.extend(p, d.items[k])
        } else {
            b.log("Item not found in stored index. Continuing.")
        }
        this.close(m);
        this.$lightbox = b(Mustache.to_html(d.templates[p.type], p, d.templates)).addClass(d.skin);
        if (k < 0) {
            this.$lightbox.addClass("solo")
        }
        this.currentItem = p;
        d.onPreOpen(p, k);
        if (d.shareTools) {
            var f = b.extend({}, d.shareToolsOptions, {
                url: b.isFunction(d.shareToolsOptions.url) ? d.shareToolsOptions.url(p, k) : d.shareToolsOptions.url || window.location.href,
                title: b.isFunction(d.shareToolsOptions.title) ? d.shareToolsOptions.title(p, k) : d.shareToolsOptions.title || window.document.title,
                thumbnail: b.isFunction(d.shareToolsOptions.thumbnail) ? d.shareToolsOptions.thumbnail(p, k) : d.shareToolsOptions.thumbnail || undefined,
                description: b.isFunction(d.shareToolsOptions.description) ? d.shareToolsOptions.description(p, k) : d.shareToolsOptions.description
            });
            var l = j.$lightbox.find(f.target).addClass(d.shareToolsOptions.theme);
            NYTD.shareTools.init(l, f)
        }
        switch (p.type) {
            case "photo":
                if (p.width && p.height) {
                    j.checkSize(this.$lightbox, p);
                    e()
                } else {
                    this.$lightbox.find("img.nytmm_lb_photoBox").imagesLoaded(function () {
                        p.width = this[0].width;
                        p.height = this[0].height;
                        j.checkSize(this.$lightbox, p);
                        e()
                    })
                }
                break;
            case "video":
                if (!NYTD.NYTMM.YMVP) {
                    throw new Error("LIGHTBOXER ERROR: You must < import jquery/players/YMVP.js > into your project to use this type of lightbox ")
                }
                var h = this.$lightbox.find(".nytmm_lb_videoBox").css({
                    minHeight: p.height,
                    minWidth: p.width
                });
                this.$lightbox.appendTo("body");
                var c = new NYTD.NYTMM.YMVP(h, b.extend(d.YMVPOptions, {
                    skin: d.skin,
                    width: p.width,
                    height: p.height,
                    auto_start: d.autoPlay
                }));
                _.delay(function () {
                    c.setSource(p.src)
                }, 500);
                j.currentItem.player = c;
                j.checkSize(this.$lightbox, p);
                e();
                break;
            case "audio":
                break;
            case "slideshow":
                if (!b().SliderShow) {
                    throw new Error("LIGHTBOXER ERROR: You must < IMPORT jquery/widgets/SliderShow.js > into your project to use this type of lightbox ")
                }
                var g = this.$lightbox.find(".nytmm_lb_slideshowBox");
                g.SliderShow(b.extend(d.sliderShowOptions, {
                    width: p.width,
                    height: p.height,
                    content: p.src,
                    skin: d.skin,
                    complete: function () {
                        j.checkSize(j.$lightbox, p);
                        e()
                    }
                }));
                j.currentItem.player = g.data("SliderShow");
                break;
            case "embedly":
                if (!b.embedly) {
                    throw new Error("LIGHTBOXER ERROR: You must < import jquery/fn/embedly.js > into your project to use this type of lightbox")
                }
                var n = this.$lightbox.appendTo("body").find(".nytmm_lb_embedly").css({
                    minHeight: p.height,
                    minWidth: p.width
                });
                b.embedly(p.src, {
                    url: p.src,
                    method: "append",
                    maxwidth: p.width,
                    width: p.width,
                    wmode: "transparent",
                    autoplay: d.autoPlay,
                    success: function (o, q) {
                        if (!p.title) {
                            p.title = o.title;
                            j.$lightbox.find("#nytmm_lightboxer > h3").html(o.title)
                        }
                        if (!p.caption) {
                            p.caption = o.description;
                            j.$lightbox.find(".nytmm_lb_caption").html(o.description)
                        }
                        p.width = o.width;
                        p.height = o.height;
                        n.css({
                            minHeight: "",
                            minWidth: "",
                            height: p.height,
                            width: p.width
                        }).append(o.code);
                        j.checkSize(j.$lightbox, p)
                    },
                    error: function (o, q) {
                        b.log("Embedly ERROR!");
                        b.log(o);
                        b.log(q)
                    }
                });
                e();
                break;
            case "freeform":
                j.checkSize(this.$lightbox, p);
                e();
                break;
            default:
                break
        }
        function e() {
            j.$lightbox.lightbox_me(b.extend({}, d.lightbox_meOptions, {
                lightboxSpeed: (m ? 0 : undefined)
            }))
        }
    }, 200);
    a.Lightboxer.prototype.checkSize = function (n, f) {
        var o = n || this.$lightbox;
        var l = f || this.currentItem;
        var j = o.find(".nytmm_lb_text").outerWidth(true) || 210;
        var k = o.find(".nytmm_lb_text").outerHeight(true) || 100;
        var c = Math.min(this.options.autoSizeMax.width, Math.max(400, b(window).width()));
        var d = Math.min(this.options.autoSizeMax.height, Math.max(400, b(window).height()));
        var e = false;
        var m = {
            width: l.width,
            height: l.height
        };
        if (!o || !l) {
            return
        }
        o = o.find("#nytmm_lightboxer");
        e = (l.portrait === true || l.portrait === "true" || (l.height / l.width > 0.8 && l.portrait === undefined && l.caption && l.width + j < c * 0.8));
        if (this.options.autoSize) {
            var h = (e ? c - j - 100 : c - 100);
            var g = (e ? d - 150 : d - k - 200);
            m = this.calculateBestFit(l, {
                width: h,
                height: g
            }, true);
            if (l.type === "photo") {
                o.find(".nytmm_lb_photoBox").css({
                    width: m.width + "px",
                    height: m.height + "px"
                })
            } else {
                if (l.type === "slideshow") {
                    b.log("WARNING: AUTOSIZE FEATURE INCOMPLETE");
                    l.player.width(m.width);
                    l.player.height(m.height)
                } else {
                    if (l.type === "video") {
                        b.log("WARNING: AUTOSIZE FEATURE INCOMPLETE");
                        l.player.setSize(m.width, m.height)
                    }
                }
            }
        }
        if (e) {
            o.addClass("portrait");
            o.width(m.width + j)
        } else {
            o.removeClass("portrait").width(m.width)
        }
    };
    a.Lightboxer.prototype.calculateBestFit = function (c, k, f) {
        var e = c.width;
        var j = c.height;
        if (f) {
            e *= 1000;
            j *= 1000
        }
        if (e > k.width) {
            var d = k.width / e;
            e = k.width;
            j *= d
        }
        if (j > k.height) {
            var g = (k.height) / j;
            j = k.height;
            e *= g
        }
        var l = ((k.height) - j) / 2;
        return {
            width: e,
            height: j,
            paddingTop: l
        }
    };
    a.Lightboxer.prototype.close = function (c) {
        if (this.$lightbox) {
            if (c) {
                this.$lightbox.trigger("closelightboxonly");
                this.options.onClose(this.currentItem, this.index());
                b(document).trigger(a.Lightboxer.CLOSE_EVENT, this.currentItem, this.index())
            } else {
                this.$lightbox.trigger("close");
                this.options.onClose(this.currentItem, this.index());
                b(document).trigger(a.Lightboxer.CLOSE_EVENT, this.currentItem, this.index());
                this.options.onLightboxClose(this.currentItem, this.index());
                b(document).trigger(a.Lightboxer.CLOSE_LIGHTBOX_EVENT, this.currentItem, this.index());
                this.index(-1)
            }
        }
    };
    a.Lightboxer.prototype.next = function (c) {
        b.log(this._index);
        if (this._index + 1 < this.length()) {
            this.index(this._index + 1)
        } else {
            if (c) {
                this.index(0)
            }
        }
    };
    a.Lightboxer.prototype.previous = function (c) {
        if (this._index > 0) {
            this.index(this._index - 1)
        } else {
            if (c) {
                this.index(this.length() - 1)
            }
        }
    };
    a.Lightboxer.prototype.destroy = function () {
        this.close();
        this.clear();
        b(document).off(".nytmm_lightboxer");
        b(this.options.keyboard).off(".nytmm_lightboxer");
        b(document).off(a.VideoEvents.END_EVENT, "#nytmm_lightboxer")
    };
    a.Lightboxer.prototype.clear = function () {
        this._index = -1;
        this.options.items = []
    };
    a.Lightboxer.prototype.scan = function (f) {
        var e = this.options;
        var c = this;
        var d = b(e.target);
        if (!f) {
            this.clear()
        }
        d.addClass("nytmm_lb_target");
        e.items = _(d).chain().map(function (h, g) {
            var j = c.extractData(h);
            j.count = g;
            return j
        }).union(e.items).uniq(false, e.getID).sortBy(e.sortBy).value();
        b.log("--- ", e.items.length, "Lightboxer Items Scanned ---")
    }
})(jQuery, NYTD.NYTMM);
jQuery.reel || function (am, e, v, ah) {
    function a0(h) {
        return am.reel.instances.length ? am.reel.instances.first().data(h) : null
    }
    function bo(h) {
        return am.reel.instances.push(h[0]) && h
    }
    function a9(h) {
        return (am.reel.instances = am.reel.instances.not("#" + h.attr(aI))) && h
    }
    function f(h) {
        return aS && "data:image/gif;base64,R0lGODlh" + h
    }
    function ao(h) {
        return "<" + h + "/>"
    }
    function bq(h) {
        return "." + h
    }
    function bd(h) {
        return "http://code.vostrel.cz/" + h
    }
    function aV(h) {
        return "url(" + h + ")"
    }
    function aQ(h) {
        return +h.toFixed(4)
    }
    function aA(o, h, p) {
        return aH(o, bu(h, p))
    }
    function F(o) {
        function h() {
            am.fn[this] || (am.fn[this] = function () {
                return this
            })
        }
        am.each(o, h)
    }
    function aq(o, h) {
        return af(o) * (h ? -1 : 1)
    }
    function az(h) {
        return h.originalEvent.touches[0]
    }
    am.reel = {
        version: "1.1.4",
        def: {
            footage: 6,
            frame: 1,
            frames: 36,
            hint: "",
            horizontal: true,
            hotspot: ah,
            indicator: 0,
            klass: "",
            loops: true,
            reversed: ah,
            spacing: 0,
            stitched: 0,
            suffix: "-reel",
            tooltip: "",
            area: ah,
            brake: 0.5,
            clickfree: false,
            cw: false,
            delay: -1,
            directional: false,
            draggable: true,
            entry: ah,
            graph: ah,
            image: ah,
            images: [],
            inversed: false,
            laziness: 6,
            monitor: ah,
            opening: 0,
            orbital: 0,
            path: "",
            preloader: 4,
            rebound: 0.5,
            revolution: ah,
            row: 1,
            rows: 0,
            speed: 0,
            step: ah,
            steps: ah,
            tempo: 36,
            timeout: 2,
            throwable: true,
            vertical: false,
            wheelable: true
        }
    };
    am.fn.reel = function (o) {
        var h = am.extend({}, am.reel.def, o);
        o = function (w) {
            var u = [];
            w.filter(j).each(function () {
                var B = am(this),
                    A = h.images.length && h.images || h.image || B.attr(bh),
                    z = ay(B.css(a2)),
                    x = ay(B.css(av));
                !A || A == Z || !z || !x || u.push(B)
            });
            w.filter(n + bq(ae)).each(function () {
                u.push(am(this))
            });
            return am(u)
        }(this);
        var p = [];
        h.reversed && (h.cw = true);
        h.tooltip && (h.hint = h.tooltip);
        h.hotspot && (h.area = h.hotspot);
        o.each(function () {
            var U = am(this),
                I = U.data(),
                W = function (ba, aa) {
                    I[ba] = aa;
                    U.trigger("store", [ba, aa]);
                    return aa
                }, V = function (ba) {
                    var aa = I[ba];
                    U.trigger("recall", [ba, aa]);
                    return aa
                }, G = {
                    teardown: function (bb) {
                        U.unbind(ag).unbind(G);
                        var aa = U.data("events"),
                            bv = U.clone().attr(U.data(b)).css({
                                background: "transparent"
                            }).removeClass(ae).addClass(V(bj));
                        for (var ba in aa) {
                            am.each(aa[ba], function (bx, bw) {
                                bv.bind(ba + "." + bw.namespace, bw.handler, bw.data)
                            })
                        }
                        am("img:" + J, U.parent()).remove();
                        a9(U);
                        am(V(ax)).before(bv).detach();
                        u();
                        aY.unbind(aT, G.tick).unbind(aT, G.opening_tick);
                        z.unbind(k).unbind(bt);
                        N.call(bb)
                    },
                    setup: function () {
                        var ba = V(aX),
                            aa = V(a4),
                            bb = aH(aa, V(bg));
                        bb = W(ai, 1 / bb * ((h.step || h.frame) - 1));
                        W(ac, bb * aa + 1);
                        U.attr("id");
                        aa = U.parent();
                        bb = am(aF, {
                            "class": bs,
                            css: {
                                position: a5,
                                left: 0,
                                top: 0,
                                width: ba.x,
                                height: ba.y,
                                background: a1,
                                opacity: 0
                            }
                        }).appendTo(aa);
                        bb = W(aw, am(h.area || bb));
                        if (am.reel.touchy) {
                            U.css({
                                WebkitUserSelect: "none",
                                WebkitBackgroundSize: h.images.length ? "auto" : V(au) && V(au) + "px " + ba.y + "px" || ba.x * h.footage + "px " + ba.y * V(S) * (h.rows || 1) * (h.directional ? 2 : 1) + "px"
                            });
                            bb.bind(bf, function (bv) {
                                U.trigger("down", [az(bv).clientX, az(bv).clientY, true])
                            }).bind(aZ, function (bv) {
                                U.trigger("slide", [az(bv).clientX, az(bv).clientY, true]);
                                return !(h.rows > 1 || h.orbital || V(aE))
                            }).bind(at, function () {
                                U.trigger("up", [true]);
                                return false
                            }).bind(R, function () {
                                U.trigger("up", [true]);
                                return false
                            })
                        } else {
                            bb.css({
                                cursor: "url(" + ad + "), " + m
                            }).bind(l, function (bw, bv) {
                                U.trigger("wheel", [bv]);
                                return false
                            }).bind(a, function () {
                                U.trigger("play")
                            }).bind(h.clickfree ? bi : a3, function (bv) {
                                U.trigger("down", [bv.clientX, bv.clientY]);
                                return false
                            }).bind(h.clickfree ? bm : "", function () {
                                U.trigger("up");
                                return false
                            }).disableTextSelect()
                        }
                        h.hint && bb.attr(a7, h.hint);
                        h.monitor && aa.append(T = am(aF, {
                            "class": aM,
                            css: {
                                position: a5,
                                left: 0,
                                top: 0
                            }
                        })) || (T = am());
                        h.indicator && aa.append(X("x"));
                        h.rows > 1 && h.indicator && aa.append(X("y"));
                        U.trigger("preload")
                    },
                    preload: function (bw) {
                        var bz = V(aX),
                            bx = U.parent(),
                            bv = V(c),
                            bb = h.images,
                            ba = !bb.length ? [bv] : [].concat(bb),
                            aa = U[0];
                        aa.frames = ba.length;
                        aa.preloaded = 0;
                        U.trigger("stop");
                        for (bx.append(w = am(aF, {
                            "class": ak,
                            css: {
                                position: a5,
                                left: 0,
                                top: bz.y - h.preloader,
                                height: h.preloader,
                                overflow: J,
                                backgroundColor: a1
                            }
                        })); ba.length;) {
                            var bA = h.path + ba.shift(),
                                by = am(new Image).hide().bind("load" + ag, function () {
                                    aa.preloaded++;
                                    am(this).unbind(ag);
                                    w.css({
                                        width: 1 / aa.frames * aa.preloaded * bz.x
                                    });
                                    if (aa.frames == aa.preloaded) {
                                        w.remove();
                                        bb.length || U.css({
                                            backgroundImage: aV(h.path + bv)
                                        });
                                        U.attr({
                                            src: t
                                        }).trigger(h.rows > 1 && !h.stitched ? "rowChange" : "frameChange").trigger("loaded").trigger("opening");
                                        N.call(bw)
                                    }
                                });
                            bx.append(by);
                            setTimeout(function (bB, bC) {
                                return function () {
                                    bB.attr({
                                        src: bC
                                    })
                                }
                            }(by, bA), 0)
                        }
                    },
                    tick: function (bb) {
                        var aa = V(aO);
                        if (B) {
                            var bv = aQ(aa - V(bk) / a0(aW) * B);
                            aa = !(aa * bv <= 0 || aa < af(bv)) && W(aO, aa > af(V(bn)) ? bv : (B = H = 0))
                        }
                        T.text(V(h.monitor));
                        aa && B++;
                        H && H++;
                        x(0);
                        D = true;
                        if (H && !aa) {
                            return N.call(bb)
                        }
                        if (V(aG)) {
                            return N.call(bb, E())
                        }
                        bv = V(aj) * aq(1, V(aR));
                        var ba = (V(aP) ? aa : af(V(bn)) + aa) / a0(aW);
                        aa = V(ai);
                        bv = W(ai, aa - ba * bv);
                        N.call(bb);
                        bv != aa && U.trigger("fractionChange")
                    },
                    opening: function () {
                        var ba = h.entry || h.speed,
                            aa = V(ai),
                            bb = h.opening;
                        W(ai, aa - ba * h.opening);
                        W(s, bb * a0(aW));
                        aY.bind(aT, G.opening_tick)
                    },
                    opening_tick: function (ba) {
                        var aa = (h.entry || h.speed) / a0(aW) * (h.cw ? -1 : 1),
                            bb = V(ai);
                        W(ai, aQ(bb + aa));
                        aa = W(s, V(s) - 1);
                        U.trigger("fractionChange");
                        N.call(ba);
                        if (!(aa > 1)) {
                            aY.unbind(aT, G.opening_tick);
                            O()
                        }
                    },
                    play: function (ba) {
                        var aa = W(an, true);
                        W(aP, !aa);
                        Y();
                        N.call(ba)
                    },
                    pause: function (aa) {
                        W(an, false);
                        E();
                        N.call(aa)
                    },
                    stop: function (ba) {
                        var aa = W(aP, true);
                        W(an, !aa);
                        N.call(ba)
                    },
                    down: function (bb, aa, bv, ba) {
                        if (h.draggable) {
                            W(aG, V(ac));
                            W(aO, 0);
                            C = L(aa, bv, V(ai), V(a8), V(ab));
                            E();
                            u();
                            if (!ba) {
                                z.css({
                                    cursor: aV(bp) + ", " + m
                                }).bind(bt, function (bw) {
                                    U.trigger("slide", [bw.clientX, bw.clientY]);
                                    N.call(bw);
                                    return false
                                });
                                h.clickfree || z.bind(k, function (bw) {
                                    U.trigger("up");
                                    N.call(bw)
                                })
                            }
                        }
                        N.call(bb)
                    },
                    up: function (ba, aa) {
                        if (!h.draggable) {
                            return N.call(ba)
                        }
                        W(aG, false);
                        W(aE, false);
                        var bb = W(aO, !h.throwable ? 0 : af(A[0] + A[1]) / 60);
                        B = bb ? 1 : 0;
                        bb ? Y() : E();
                        u();
                        !aa && z.unbind(k).unbind(bt) && V(aw).css({
                            cursor: aV(ad) + ", " + m
                        });
                        N.call(ba)
                    },
                    slide: function (bw, bz, bx) {
                        if (h.draggable && D) {
                            D = false;
                            E();
                            var bv = {
                                x: bz - C.x,
                                y: bx - C.y
                            };
                            if (af(bv.x) > 0 || af(bv.y) > 0) {
                                C = {
                                    x: bz,
                                    y: bx
                                };
                                var bb = V(a8),
                                    ba = V(aD),
                                    aa = V(aK),
                                    bA = W(ai, K(aa ? bx - ba.y : bz - ba.x, V(y), bb, V(g), V(br), V(aj)));
                                W(aE, V(aE) || V(ac) != V(aG));
                                (bv = x(aa ? bv.y : bv.x || 0)) && W(aR, bv < 0);
                                if (h.orbital && V(be)) {
                                    W(aK, af(bx - ba.y) > af(bz - ba.x));
                                    ba = L(bz, bx, bA, bb, V(ab))
                                }
                                if (h.rows > 1) {
                                    bv = V(aX).y;
                                    aa = V(r);
                                    var by = -aa * bv;
                                    W(ab, aQ(am.reel.math.envelope(bx - ba.y, aa, bv, by, by + bv, -1)))
                                }!(bA % 1) && !h.loops && L(bz, bx, bA, bb, V(ab));
                                U.trigger("fractionChange")
                            }
                        }
                        N.call(bw)
                    },
                    wheel: function (ba, aa) {
                        if (!h.wheelable || !aa) {
                            return N.call(ba)
                        }
                        var bb = d(bc(af(aa)) / 2);
                        bb = aq(bb, aa > 0);
                        aa = 0.2 * V(a8);
                        L(ah, ah, V(ai), aa, V(ab));
                        W(ai, K(bb, V(y), aa, V(g), V(br), V(aj)));
                        bb && W(aR, bb < 0);
                        W(aO, 0);
                        E();
                        N.call(ba);
                        U.trigger("fractionChange");
                        return false
                    },
                    fractionChange: function (bw, aa) {
                        aa = !aa ? V(ai) : W(ai, aa);
                        aa = h.loops ? aa - aC(aa) : aA(0, 1, aa);
                        aa = W(ai, aQ(aa));
                        var bx = V(ac),
                            bv = W(ac, 1 + aC(aa / V(aN))),
                            bb = h.orbital;
                        W(be, !! bb && (bv <= bb || bv >= h.footage - bb + 2));
                        if (!h.loops && h.rebound) {
                            !H && !(aa % 1) ? P++ : (P = 0);
                            P >= h.rebound * 1000 / a0(aW) && W(aR, !V(aR))
                        }
                        bb = V(aX);
                        var ba = (V(aK) ? bb.y : bb.x) - h.indicator;
                        aa = aA(0, ba, aB(am.reel.math.interpolate(aa, -1, ba + 2)));
                        aa = !h.cw || h.stitched ? aa : ba - aa;
                        am(bq(ar + ".x"), V(ax)).css(V(aK) ? {
                            left: 0,
                            top: aa
                        } : {
                            left: aa,
                            top: bb.y - h.indicator
                        });
                        if (h.rows > 1) {
                            aa = V(aX).y - h.indicator;
                            aa = aA(0, aa, aB(am.reel.math.interpolate(V(ab), -1, aa + 2)));
                            am(bq(ar + ".y"), V(ax)).css({
                                top: aa
                            })
                        }
                        if (bv == bx && bv != 1) {
                            return N.call(bw)
                        }
                        U.trigger(h.rows > 1 ? "rowChange" : "frameChange");
                        N.call(bw)
                    },
                    rowChange: function (ba, aa) {
                        var bb = aC(V(ai) / V(aN)) + 1;
                        aa = W(ab, aA(0, 1, aQ(aa != ah ? (aa - 1) / (h.rows - 1) : V(ab))));
                        W(ac, bb + (h.rows <= 1 ? 0 : aB(aa * (h.rows - 1)) * h.frames));
                        N.call(ba);
                        U.trigger("frameChange")
                    },
                    frameChange: function (bw, aa) {
                        var bx = !aa ? V(ai) : W(ai, aQ(V(aN) * (aa - 1)));
                        aa = W(ac, aB(aa ? aa : V(ac)));
                        var bv = h.images,
                            bb = h.footage,
                            ba = V(aX),
                            by = h.horizontal;
                        if (V(aK)) {
                            aa = h.inversed ? bb + 1 - aa : aa;
                            aa += bb
                        }
                        if (bv.length) {
                            U.attr({
                                src: h.path + bv[aa - 1]
                            })
                        } else {
                            if (h.stitched) {
                                bv = [-aB(bx * V(bl)) + aJ, 0 + aJ]
                            } else {
                                bx = aa % bb - 1;
                                bx = bx < 0 ? bb - 1 : bx;
                                bb = aC((aa - 0.1) / bb);
                                bb += h.rows > 1 ? 0 : V(aR) ? 0 : V(S);
                                aa = V(a6);
                                bb = bb * ((by ? ba.y : ba.x) + aa);
                                ba = bx * ((by ? ba.x : ba.y) + aa);
                                bv = bv.length ? [0, 0] : by ? [-ba + aJ, -bb + aJ] : [-bb + aJ, -ba + aJ]
                            }
                            U.css({
                                backgroundPosition: bv.join(Q)
                            })
                        }
                        N.call(bw)
                    }
                }, N = function (aa) {
                    aL || delete this;
                    return aa
                }, H, B = 0,
                Y = function () {
                    return H = 0
                }, E = function () {
                    clearTimeout(M);
                    aY.unbind(aT, G.opening_tick);
                    U.trigger("play");
                    return H = -h.timeout * a0(aW)
                }, M, O = function () {
                    M = setTimeout(function () {
                        U.trigger("play")
                    }, h.delay * 1000 || 0)
                }, T, w, X = function (aa) {
                    return am(aF, {
                        "class": [ar, aa].join(Q),
                        css: {
                            width: h.indicator,
                            height: h.indicator,
                            overflow: J,
                            top: V(aX).y - h.indicator,
                            left: 0,
                            position: a5,
                            backgroundColor: a1
                        }
                    })
                }, P = 0,
                C = {
                    x: 0,
                    y: 0
                }, x = function (aa) {
                    return A.push(aa) && A.shift() && aa
                }, u = function () {
                    return A = [0, 0]
                }, A = u(),
                K = h.graph || am.reel.math[h.loops ? "hatch" : "envelope"],
                L = function (bv, aa, bw, bb, ba) {
                    W(y, bw);
                    W(r, ba);
                    W(g, h.loops ? 0 : -bw * bb);
                    W(br, h.loops ? bb : bb - bw * bb);
                    return bv && W(aD, {
                        x: bv,
                        y: aa
                    }) || ah
                }, D = true,
                z = am.browser.opera ? aY : am.unique(aY.add(e.top.document));
            (function (bz) {
                if (U.hasClass(ae)) {
                    return N.call(bz)
                }
                var bC = U.attr(bh),
                    bA = W(aI, U.attr(aI) || U.attr(aI, ae + "-" + +new Date).attr(aI)),
                    bx = U.attr("style"),
                    bw = h.images,
                    ba = h.stitched,
                    aa = h.loops,
                    bE = {
                        x: ay(U.css(a2)),
                        y: ay(U.css(av))
                    }, bB = W(a4, h.orbital && h.footage || h.rows <= 1 && bw.length || h.frames),
                    bv = ba ? 1 : d(bB / h.footage),
                    by = {
                        display: "block",
                        width: bE.x,
                        height: bE.y
                    };
                bA = "#" + bA + h.suffix;
                var bD = U.attr("class"),
                    bb = {
                        position: "relative",
                        width: bE.x,
                        height: bE.y
                    };
                bb = am(aF, {
                    id: bA.substr(1),
                    "class": bD + Q + aU,
                    css: bb
                });
                by = U.wrap(bb).attr({
                    "class": ae
                }).css(by).bind(G);
                p.push(bo(by)[0]);
                W(c, bw.length && bw.length || h.image || bC.replace(/^(.*)\.(jpg|jpeg|png|gif)$/, "$1" + h.suffix + ".$2"));
                W(bj, bD);
                W(ac, h.frame);
                W(a6, h.spacing);
                W(aX, bE);
                W(ai, 0);
                W(bg, h.steps || h.frames);
                W(a8, h.revolution || ba / 2 || bE.x * 2);
                W(S, bv);
                W(aN, 1 / (bB - (aa && !ba ? 0 : 1)));
                W(ap, 1 / aH(bB, V(bg)));
                W(au, ba);
                W(bl, ba - (aa ? 0 : bE.x));
                W(ax, bA);
                W(aR, W(bn, h.speed) < 0);
                W(aO, 0);
                W(aK, h.vertical);
                W(ab, (h.row - 1) / (h.rows - 1));
                W(aj, aq(1, !h.cw && !ba));
                W(aE, false);
                W(bk, h.brake);
                W(be, !! h.orbital);
                W(aW, h.tempo / (am.reel.lazy ? h.laziness : 1));
                W(s, 0);
                W(b, {
                    src: bC,
                    style: bx || Z
                });
                aY.bind(aT, G.tick);
                N.call(bz);
                U.trigger("setup")
            })()
        });
        al = al || function q() {
            var u = +new Date,
                w = a0(aW);
            if (w) {
                aY.trigger(aT);
                am.reel.cost = (+new Date + am.reel.cost - u) / 2;
                return al = setTimeout(q, aH(4, 1000 / w - am.reel.cost))
            } else {
                return al = ah
            }
        }();
        return am(p)
    };
    am.reel.math = {
        envelope: function (o, h, p, u, q, w) {
            return h + aH(u, bu(q, -o * w)) / p
        },
        hatch: function (o, h, p, u, q, w) {
            o = (o < u ? q : 0) + o % q;
            o = h + -o * w / p;
            return o - aC(o)
        },
        interpolate: function (o, h, p) {
            return h + o * (p - h)
        }
    };
    am.reel.touchy = /iphone|ipod|ipad|android/i.test(navigator.userAgent);
    am.reel.lazy = /iphone|ipod|android/i.test(navigator.userAgent);
    am.reel.instances = am();
    am.reel.cost = 0;
    am.reel.leader = a0;
    F("mousewheel disableTextSelect enableTextSelect".split(/ /));
    var aY = am(v);
    v = +am.browser.version.split(".").slice(0, 2).join(".");
    var aL = am.browser.msie,
        aS = !(aL && v < 8),
        m = "ew-resize",
        al, ae = "jquery-reel",
        aU = ae + "-overlay",
        ar = ae + "-indicator",
        ak = ae + "-preloader",
        aM = ae + "-monitor",
        bs = ae + "-interface",
        t = f("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7") || bd("blank.gif"),
        ad = f("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7") || bd("jquery.reel.cursor-drag.gif"),
        bp = f("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==") || bd("jquery.reel.cursor-drag-down.gif"),
        aB = Math.round,
        aC = Math.floor,
        d = Math.ceil,
        bu = Math.min,
        aH = Math.max,
        af = Math.abs,
        bc = Math.sqrt,
        ay = parseInt,
        aw = "area",
        b = "backup",
        aR = "backwards",
        aN = "bit",
        bk = "brake",
        be = "center",
        bj = "classes",
        aG = "clicked",
        aD = "clicked_location",
        y = "clicked_on",
        r = "clicked_row",
        aj = "cwish",
        aX = "dimensions",
        ai = "fraction",
        ac = "frame",
        a4 = "frames",
        br = "hi",
        J = "hidden",
        c = "image",
        s = "opening_ticks",
        g = "lo",
        an = "playing",
        aE = "reeling",
        a8 = "revolution",
        ab = "row",
        S = "rows",
        a6 = "spacing",
        bn = "speed",
        ax = "stage",
        bg = "steps",
        au = "stitched",
        bl = "stitched_travel",
        aP = "stopped",
        aW = "tempo",
        aO = "velocity",
        aK = "vertical",
        ap = "wheel_step",
        ag = ".reel",
        a = "dblclick" + ag,
        a3 = "mousedown" + ag,
        bi = "mouseenter" + ag,
        bm = "mouseleave" + ag,
        bt = "mousemove" + ag,
        k = "mouseup" + ag,
        l = "mousewheel" + ag,
        aT = "tick" + ag,
        R = "touchcancel" + ag,
        at = "touchend" + ag,
        bf = "touchstart" + ag,
        aZ = "touchmove" + ag,
        Z = "",
        Q = " ",
        a5 = "absolute",
        n = "div",
        aF = ao(n),
        av = "height",
        a1 = "#000",
        aI = "id",
        j = "img",
        aJ = "px",
        bh = "src",
        a7 = "title",
        a2 = "width"
}(jQuery, window, document);
(function (b, d) {
    var a = "../img/transparent.png";
    var c = {
        options: {
            sprite: null,
            images: "",
            frames: null,
            width: null,
            height: null,
            controls: true,
            delay: -1,
            speed: 100,
            frame: 0,
            firstFrameFilenumber: 1,
            keyframes: [],
            easing: "none",
            reel: {
                rebound: 0,
                loops: false
            }
        },
        _create: function () {
            d.log("MAKE REEL+");
            var f = this;
            var h = d(this.element).addClass("nytmm_reelPlus");
            var e = this.options;
            this.currentFrame = 0;
            var g = _.once(function () {
                f.$reel = d("img.nytmm_reelPlusPreview", f.element).reel(d.extend({}, {
                    image: e.sprite,
                    images: e.images,
                    frames: e.frames,
                    speed: f._msToHz(e.speed),
                    backwards: (e.speed < 0),
                    delay: e.delay < 0 ? 86400 : e.delay,
                    area: e.controls ? undefined : {}
                }, e.reel));
                f.$reelBox = f.$reel.parent().click(function () {
                    f._trigger("click")
                });
                f.monitor = new b.ProgressMonitor({
                    target: f.$reel,
                    max: e.frames,
                    continuousMode: false,
                    onSkip: function () {},
                    regions: _(e.keyframes).map(function (l, j) {
                        var k = (d.type(l) === "number") ? l : l.frame;
                        var m = (d.type(l) === "number") ? j + "_frame_" + k : l.data;
                        return {
                            i: k,
                            o: k,
                            data: m,
                            skip: function (n) {
                                f._trigger("keyframe", n, {
                                    index: j,
                                    frame: k,
                                    data: m,
                                    forward: !n.backwards,
                                    backward: n.backwards
                                })
                            }
                        }
                    })
                });
                f.monitor.push({
                    i: e.frames,
                    o: e.frames,
                    data: "end",
                    skip: function () {
                        f._trigger("end")
                    }
                });
                f.monitor.push({
                    i: 1,
                    o: 1,
                    data: "start",
                    skip: function () {
                        f._trigger("start")
                    }
                });
                f.$reel.bind("frameChange", _.bind(f.onFrameChange, f));
                f._trigger("initialized");
                return false
            });
            if (e.images && d.type(e.images) === "string" && frames) {
                e.images = d.fileString2Arr(e.images, e.frames, e.firstFrameFilenumber)
            }
            if (e.sprite) {
                d('<img src="' + a + '"/>').width(e.width || h.width() || 100).height(e.height || h.height() || 100).addClass("nytmm_reelPlusPreview").appendTo(h).imagesLoaded(g);
                d.log("sprite")
            } else {
                d('<img src="' + e.images[0] + '"/>').addClass("nytmm_reelPlusPreview").appendTo(h).imagesLoaded(g)
            }
        },
        _msToHz: function (e) {
            if (!e) {
                return 0
            }
            return 1 / ((e / 1000) * this.options.frames)
        },
        _hzToMs: function (e) {
            if (!e) {
                return 0
            }
            return ((1 / e) / this.options.frames) * 1000
        },
        destroy: function () {
            this.element.empty()
        },
        frame: function (f) {
            if (f === undefined || f === null) {
                return this.$reel.data("frame")
            }
            var e = this;
            if (f > this.options.frames - 1) {
                return
            }
            if (f < 0) {
                return
            }
            this.currentFrame = f;
            this.monitor.update(f, true);
            this.protectHack = true;
            setTimeout(function () {
                e.protectHack = false
            }, this.options.speed * 1.5);
            this.$reel.trigger("frameChange", f)
        },
        step: function (e) {
            this.frame(this.frame() + e)
        },
        speed: function (g) {
            if (!this.$reel) {
                return 0
            }
            if (g === undefined || g === null) {
                var f = this._hzToMs(this.$reel.data("speed"));
                var e = this.$reel.data("backwards") ? -1 : 1;
                return (e * f)
            } else {
                this.options.speed = g;
                this.$reel.data("backwards", (g < 0));
                this.$reel.data("speed", this._msToHz(Math.abs(g)))
            }
        },
        play: function (e) {
            if (!this.$reel) {
                throw new Error("ReelPlus Play Error -- did you try to play() before initialization completes?")
            }
            if (e !== undefined) {
                this.speed(e)
            }
            this.$reel.trigger("play")
        },
        stop: function (e) {
            this.$reel.trigger("stop")
        },
        velocity: function (e) {
            if (e === undefined) {
                return this.$reel.data("velocity")
            } else {
                this.$reel.data("velocity", e)
            }
        },
        onFrameChange: function () {
            var e = this.frame();
            if (this.currentFrame !== e) {
                this.currentFrame = e;
                this.monitor.update(e, this.protectHack);
                this._trigger("frameChange", null, {
                    frame: e
                })
            }
        }
    };
    d.widget("nytmm.ReelPlus", c);
    d.fileString2Arr = function (f, j, h) {
        var e = function (l, k) {
            l += "";
            return l.length < k ? e("0" + l, k) : l
        };
        var g = [f.match(/^[^%]*/i)[0], f.match(/%d+/i)[0], f.match(/[^%d]*\.\w+$/i)[0]];
        if (g.length !== 3) {
            throw new Error("ReelPlus: Images string needs to be of form Filename%d+.png")
        }
        return _.map(_.range(h, j + h), function (k) {
            return g[0] + e(k.toString(), g[1].length - 1) + g[2]
        })
    }
})(NYTD.NYTMM, jQuery || NYTD.jQuery);
(function (a) {
    a.fn.innerfade = function (b) {
        return this.each(function () {
            a.innerfade(this, b)
        })
    };
    a.innerfade = function (b, c) {
        var e = {
            animationtype: "fade",
            speed: "normal",
            type: "sequence",
            timeout: 2000,
            containerheight: "",
            runningclass: "innerfade",
            children: null,
            change: null,
            index: 0
        };
        if (c) {
            a.extend(e, c)
        }
        if (e.children === null) {
            var g = a(b).children()
        } else {
            var g = a(b).children(e.children)
        } if (g.length > 1) {
            a(b).css("position", "relative").css("height", e.containerheight).addClass(e.runningclass);
            for (var d = 0; d < g.length; d++) {
                a(g[d]).css("z-index", String(g.length - d)).css("position", "absolute").hide()
            }
            if (e.type == "sequence") {
                if (e.timeout) {
                    setTimeout(function () {
                        a.innerfade.next(g, e, 1, 0)
                    }, e.timeout)
                }
                a(g[0]).show()
            } else {
                if (e.type == "random") {
                    var f = Math.floor(Math.random() * (g.length));
                    e.index = f;
                    if (e.timeout) {
                        setTimeout(function () {
                            do {
                                h = Math.floor(Math.random() * (g.length))
                            } while (f == h);
                            a.innerfade.next(g, e, h, f)
                        }, e.timeout)
                    }
                    a(g[f]).show()
                } else {
                    if (e.type == "random_start") {
                        var h = Math.floor(Math.random() * (g.length));
                        e.type = "sequence";
                        e.index = h;
                        if (e.timeout) {
                            setTimeout(function () {
                                a.innerfade.next(g, e, (h + 1) % g.length, h)
                            }, e.timeout)
                        }
                        a(g[h]).show()
                    } else {
                        alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'")
                    }
                }
            }
            a(b).bind("index", function (k, j) {
                a.innerfade.next(g, e, j, e.index)
            })
        }
    };
    a.innerfade.next = function (d, b, e, c) {
        b.index = e;
        if (b.animationtype == "slide") {
            a(d[c]).stop(true, true).slideUp(b.speed);
            a(d[e]).stop(true, true).slideDown(b.speed)
        } else {
            if (b.animationtype == "fade") {
                a(d[c]).stop(true, true).fadeOut(b.speed);
                a(d[e]).stop(true, true).fadeIn(b.speed, function () {
                    removeFilter(a(this)[0])
                })
            } else {
                alert("Innerfade-animationtype must either be 'slide' or 'fade'")
            }
        } if (b.type == "sequence") {
            if ((e + 1) < d.length) {
                e = e + 1;
                c = e - 1
            } else {
                e = 0;
                c = d.length - 1
            }
        } else {
            if (b.type == "random") {
                c = e;
                while (e == c) {
                    e = Math.floor(Math.random() * d.length)
                }
            } else {
                alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'")
            }
        } if (b.change) {
            b.change(e)
        }
        if (b.timeout) {
            setTimeout((function () {
                a.innerfade.next(d, b, e, c)
            }), b.timeout)
        }
    }
})(jQuery);

function removeFilter(a) {
    if (a.style.removeAttribute) {
        a.style.removeAttribute("filter")
    }
}
/*
 * jQuery imagesLoaded plugin v2.0.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */ (function (a, b) {
    var c = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    a.fn.imagesLoaded = function (l) {
        var h = this,
            n = a.isFunction(a.Deferred) ? a.Deferred() : 0,
            m = a.isFunction(n.notify),
            e = h.find("img").add(h.filter("img")),
            f = [],
            k = [],
            g = [];

        function j() {
            var o = a(k),
                p = a(g);
            if (n) {
                if (g.length) {
                    n.reject(e, o, p)
                } else {
                    n.resolve(e)
                }
            }
            if (a.isFunction(l)) {
                l.call(h, e, o, p)
            }
        }
        function d(o, p) {
            if (o.src === c || a.inArray(o, f) !== -1) {
                return
            }
            f.push(o);
            if (p) {
                g.push(o)
            } else {
                k.push(o)
            }
            a.data(o, "imagesLoaded", {
                isBroken: p,
                src: o.src
            });
            if (m) {
                n.notifyWith(a(o), [p, e, a(k), a(g)])
            }
            if (e.length === f.length) {
                setTimeout(j);
                e.unbind(".imagesLoaded")
            }
        }
        if (!e.length) {
            j()
        } else {
            e.bind("load.imagesLoaded error.imagesLoaded", function (o) {
                d(o.target, o.type === "error")
            }).each(function (o, q) {
                var r = q.src;
                var p = a.data(q, "imagesLoaded");
                if (p && p.src === r) {
                    d(q, p.isBroken);
                    return
                }
                if (q.complete && q.naturalWidth !== b) {
                    d(q, q.naturalWidth === 0 || q.naturalHeight === 0);
                    return
                }
                if (q.readyState || q.complete) {
                    q.src = c;
                    q.src = r
                }
            })
        }
        return n ? n.promise(h) : h
    }
})(jQuery);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        loadArticleMedia: function (h) {
            var g = this;
            var j = h;
            var f = h.el;
            var e = {
                desktop: {
                    buildHtml5Player: _.bind(g.buildHtml5Player, g),
                    buildProtoPlayer: _.bind(g.buildProtoPlayer, g),
                    buildTriggeredVideo: _.bind(g.buildHtml5Player, g),
                    buildReel: _.bind(g.buildReel, g),
                    buildCirclePlayer: _.bind(g.buildCirclePlayer, g)
                },
                ios: {
                    buildHtml5Player: _.bind(g.buildTouchVideo, g),
                    buildProtoPlayer: _.bind(g.buildProtoPlayerTouch, g),
                    buildTriggeredVideo: _.bind(g.buildProtoPlayerTouch, g),
                    buildReel: _.bind(g.buildReel, g),
                    buildCirclePlayer: _.bind(g.buildCirclePlayer, g)
                },
                touch: {
                    buildHtml5Player: _.bind(g.buildStaticFallbackPlayer, g),
                    buildProtoPlayer: _.bind(g.buildProtoPlayerTouch, g),
                    buildTriggeredVideo: _.bind(g.buildProtoPlayerTouch, g),
                    buildReel: _.bind(g.buildFixies, g),
                    buildCirclePlayer: _.bind(g.buildCirclePlayer, g)
                },
                ie: {
                    buildHtml5Player: _.bind(g.buildStaticFallbackPlayer, g),
                    buildProtoPlayer: _.bind(g.buildProtoPlayer, g),
                    buildTriggeredVideo: _.bind(g.buildProtoPlayerTouch, g),
                    buildReel: _.bind(g.buildFixies, g),
                    buildCirclePlayer: _.bind(g.buildCirclePlayer, g)
                }
            };
            if (!f.hasClass("nytmm_loaded")) {
                if (j.fsvid.length > 0) {
                    j.video = e[g.opts.presentationType].buildHtml5Player(j.fsvid, f)
                }
                if (j.triggeredvid.length > 0) {
                    j.triggered = [];
                    j.triggeredvid.each(function () {
                        j.triggered.push(e[g.opts.presentationType].buildTriggeredVideo(b(this), f))
                    })
                }
                if (j.hasreel) {
                    j.rp = e[g.opts.presentationType].buildReel(j.reel)
                }
                if (j.protoplayer.length > 0) {
                    var d = [];
                    j.protoplayer.each(function () {
                        d.push(e[g.opts.presentationType].buildProtoPlayer(b(this), f))
                    });
                    j.vps = d
                }
                if (j.circleplayer.length > 0) {
                    var k = [];
                    j.circleplayer.each(function () {
                        k.push(e[g.opts.presentationType].buildCirclePlayer(b(this), f))
                    });
                    j.cps = k
                }
                if (g.opts.presentationType == "ios" || g.opts.presentationType == "touch") {
                    if (j.vidgraphic.length > 0) {
                        j.vidgraphic.each(function () {
                            var l = e[g.opts.presentationType].buildProtoPlayer(b(this), f)
                        })
                    }
                    if (j.touchstepper.length > 0) {
                        j.touchstepper.each(function () {
                            g.buildTouchStepper(b(this))
                        })
                    }
                }
                f.addClass("nytmm_loaded")
            }
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);

(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        initFixieNav: function () {
            var d = b("#nytmm_fixie");
            this.fixie_height = d.height();
            this.initNav();
            this.initSocial();
        },
        initNav: function () {
            var f = this;
            this.labels = [{
                    label: "Dream4TK",
                    a: "home"
                }
            ];
            this.current_index = 0;
        },
        goToDeeplink: function () {
            var d = this;
            var e = function () {
                var g = false;
                if (!g) {
                    d.setIndex(0)
                }
            };
            e();
            b.address.externalChange(function () {
                e()
            })
        },
        updateTopNav: function (f, g) {
            var d = b(".nytmm_nav");
            var e = b(".nytmm_init_branding");
            if (f) {
                e.hide();
                if (g) {
                    d.fadeIn(100)
                } else {
                    d.show()
                }
            } else {
                if (g) {
                    d.fadeOut(100, function () {
                        e.show()
                    })
                } else {
                    e.show();
                    d.hide()
                }
            }
        },
        setIndex: function (d) {
            if (d < 0 || d >= this.labels.length) {
                return
            }
            b("html,body").animate({
                scrollTop: 0
            }, {
                duration: 10
            });
            this.unloadSection(this.current_index);
            this.current_index = d;
            b("#nytmm").attr("class", "nytmm-chapter-" + this.current_index);
            if (this.current_index !== 0 || this.nav_shown) {
                this.updateTopNav(true);
                if (!this.nav_shown) {
                    this.nav_shown = true
                }
            } else {
                this.updateTopNav(false)
            }
            this.loadSection();
            this.$sidenav.find("li").removeClass("selected").eq(d).addClass("selected");
            this.updateBottomNav()
        },
        updateBottomNav: function () {}
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);

(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        getScrollTop: function () {
            if ("isSet" in this.getScrollTop === false) {
                this.getScrollTop = (window.pageYOffset !== c) ? function () {
                    return window.pageYOffset
                } : function () {
                    return (document.documentElement || document.body.parentNode || document.body).scrollTop
                };
                this.getScrollTop.isSet = true
            }
            return this.getScrollTop()
        },
        onScrolling: function () {
            this.$reel_tags = b(".reel_tag");
            this.$char_boxes = b(".nytmm_reel_tagged");
            this.didScroll = false;
            var e = this;
            this.$window.on("scroll.Avalanche", function () {
                e.didScroll = true
            });
            var d = function () {
                if (e.didScroll === false) {
                    return
                }
                e.didScroll = false;
                e.prev_pagescroll = e.pagescroll;
                e.pagescroll = e.getScrollTop();
                e.scroll_direction = (e.pagescroll >= e.prev_pagescroll) ? "down" : "up";
                e.checkArticleProgress()
            };
            this.scrollInterval = window.setInterval(d, 200)
        },
        checkArticleProgress: function () {
            var h = this,
                e = this.section_objs[this.current_index];
            for (var f = 0, d = e.length; f < d; f++) {
                var g = e[f],
                    j = 0;
                if (g.hasreel) {
                    j = -g._height
                } else {
                    if (g.hasfixie) {
                        j = -g.fixie.height()
                    }
                }
                this.checkCurrentView(g.el, -this.fixie_height, j);
                if (this.opts.presentationType === "desktop") {
                    if (g.vidtriggers.length > 0) {
                        g.vidtriggers.each(function (k) {
                            h.checkCurrentView(b(this), -h._window_height / 2, 0)
                        })
                    }
                    if (g.iscover) {
                        h.checkCoverProgress(g)
                    }
                    if (g.istitle) {
                        h.checkTitleProgress(g)
                    }
                    if (g.iscolorchange) {
                        h.checkColorProgress(g)
                    }
                    if (g.hasinstruct) {
                        h.checkInstructProgres(g)
                    }
                }
                if (g.hasreel && g.rp && g.rp.monitor) {
                    this.checkReelProgress(g, f)
                }
            }
            if (this.opts.presentationType === "desktop") {
                this.checkSectionProgress()
            }
            if (this.current_index == 0) {
                this.checkNavProgress()
            }
        },
        showPrompt: function () {
            this.promptIsVisible = true;
            this.$prompt.addClass("nytmm_shown")
        },
        hidePrompt: function () {
            this.promptIsVisible = false;
            this.$prompt.removeClass("nytmm_shown")
        },
        checkInstructProgres: function (e) {
            var d = this.percentTillNext(e.el, e.next);
            d = (d * 3 > 1) ? 1 : d * 3;
            e.instruct.css("opacity", 1 - d)
        },
        checkSectionProgress: function () {
            var e = this,
                d = this._window_height;
            if (this.pagescroll + d > this._content_height - d / 3) {
                if (this.promptIsVisible === false) {
                    e.$prompt.stop().animate({
                        bottom: 0
                    }, 200, function () {
                        e.showPrompt()
                    })
                }
            } else {
                if (this.promptIsVisible === true) {
                    e.$prompt.stop().animate({
                        bottom: -e.promptHeight
                    }, 200, function () {
                        e.hidePrompt()
                    })
                }
            }
        },
        checkNavProgress: function () {
            if (this.pagescroll > 500 && !this.nav_shown) {
                this.updateTopNav(true, true);
                this.nav_shown = true
            }
        },
        checkCoverProgress: function (n) {
            var e = n.el;
            var l = e.offset().top;
            var h = e.outerHeight() / 2;
            var m = e.outerHeight() / 4;
            var g = l + m;
            var d = l + (h);
            var k = this.pagescroll - g;
            var f = k / (d - g);
            var j = l + e.outerHeight();
            f = (f > 1) ? 1 : (f < 0) ? 0 : f;
            if (this.pagescroll >= g - this.fixie_height && this.pagescroll <= j - this.fixie_height) {
                n.cover.stop().css({
                    opacity: 1 - f
                })
            } else {
                n.cover.stop().css({
                    opacity: 1
                })
            }
        },
        checkTitleProgress: function (e) {
            var d = 1 - this.percentTillNext(e.el, e.next);
            e.fsvid.css("opacity", d);
            e.title.stop().css("opacity", d)
        },
        hextoRGB: function (e) {
            var d = [];
            if (e.charAt(0) === "#") {
                e = e.slice(1)
            }
            d.push(parseInt(e.substring(0, 2), 16));
            d.push(parseInt(e.substring(2, 4), 16));
            d.push(parseInt(e.substring(4, 6), 16));
            return d
        },
        changeColor: function (k, l, e) {
            var m = this.hextoRGB(k),
                h = this.hextoRGB(l),
                d = [];
            for (var f = 0, g = m.length; f < g; f++) {
                var n = m[f];
                var j = n - h[f];
                var o = Math.abs(n - (j * e));
                d[f] = Math.round(o)
            }
            return ("rgb(" + d[0] + "," + d[1] + "," + d[2] + ")")
        },
        checkColorProgress: function (f) {
            var e = this.percentTillNext(f.el, f.next);
            var h = e * (6 * e);
            var d = (this.opts.browser.isChrome) ? f.el.data().colorchrome : (this.opts.browser.isFirefox) ? f.el.data().colorff : f.el.data().color;
            h = (h > 1) ? 1 : (h < 0) ? 0 : h;
            f.next.find(".nytmm_fs_video").css("opacity", h);
            var g = this.changeColor("#ffffff", d, h);
            f.el.css("background-color", g)
        },
        doHighLights: function (e, d) {
            if (e.length > 0) {
                if (d) {
                    if (!e.hasClass("nytmm_highlight")) {
                        e.addClass("nytmm_highlight")
                    }
                } else {
                    if (e.hasClass("nytmm_highlight")) {
                        e.removeClass("nytmm_highlight")
                    }
                }
                this.$char_boxes.each(function () {
                    if (b(this).data().tag === e.data().tag) {
                        if (d) {
                            if (!b(this).hasClass("nytmm_highlight")) {
                                b(this).addClass("nytmm_highlight")
                            }
                        } else {
                            if (b(this).hasClass("nytmm_highlight")) {
                                b(this).removeClass("nytmm_highlight")
                            }
                        }
                    }
                })
            }
        },
        checkReelProgress: function (f, d) {
            var e = this;
            var h = f.reel.data().start - 1;
            var g = f.reel.data().modreduce || 1;
            this.$reel_tags.each(function (o) {
                var q = b(this);
                var k = q.data().start - h;
                var n = e.$reel_tags.eq(o + 1);
                var l = q.nextAll("p").find(".nytmm_reel_tag").eq(0);
                var r = e._window_height / 2;
                if (k && n && e.pagescroll > q.offset().top - r && e.pagescroll < n.offset().top - r) {
                    var p = e.percentTillNext(q, n, -r, -r);
                    var m = n.data().end - h - k;
                    var j = k + Math.ceil((m * p));
                    e.doHighLights(l, true);
                    f.rp.frame(Math.floor(j / g));
                    if (j > k) {
                        f.el.find(".nytmm_reel_sequence").addClass("reel_bkg_revealed")
                    }
                } else {
                    e.doHighLights(l, false)
                }
            })
        },
        checkCurrentView: function (f, q, e) {
            var t = this;
            var p = t._window_height;
            var u = f;
            var r = (q !== c) ? q : 0;
            var n = (e !== c) ? e : 0;
            var j = f.hasClass("currentview");
            var s = f.hasClass("visibleview");
            var o = u.offset();
            var d = o.top;
            var m = d + u.outerHeight();
            var k = d + r;
            var g = m + n;
            var h = d - (p / 3 * 2);
            var l = m - p / 2;
            if (this.pagescroll >= h && this.pagescroll <= l) {
                if (!s) {
                    u.addClass("visibleview").trigger("visibleview", [true])
                }
            } else {
                if (s) {
                    u.removeClass("visibleview").trigger("visibleview", [false])
                }
            } if (this.pagescroll >= k && this.pagescroll <= g) {
                if (!j) {
                    u.addClass("currentview").trigger("currentview", ["current"])
                }
            } else {
                if (this.pagescroll < k) {
                    u.removeClass("currentview").trigger("currentview", ["below"])
                } else {
                    if (this.pagescroll > g) {
                        u.removeClass("currentview").trigger("currentview", ["above"])
                    }
                }
            }
        },
        percentTillNext: function (f, j, e, h) {
            var k = (h !== c) ? h : 0;
            var m = b(f).offset().top + k;
            var g = (e !== c) ? e : 0;
            var d = b(j).offset().top + g;
            var n = this.pagescroll - m;
            var l = n / (d - m);
            l = Math.min(1, Math.max(-1, l));
            l = (l > 0) ? (l > 1) ? 1 : l : 0;
            return l
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        unloadSection: function (d) {
            var e = this;
            var f = this.$sections.eq(d);
            this.$sections.hide();
            this.unbindArticleEvents(d);
            _.each(this.section_objs[d], function (h, g) {
                var j = h;
                j.el.removeClass("currentview").removeClass("visibleview");
                j.el.find(".nytmm_video_player").removeClass("nytmm_highlight");
                j.el.trigger("unloading")
            });
            this.unbindLightboxerClick(f)
        },
        loadSection: function () {
            var k = this;
            var e = this.section_objs[this.current_index];
            var g = e[0];
            var h = this.$sections.eq(this.current_index);
            var j = g.el.find(".nytmm_grid_item");
            try {
                if ("dcsMultiTrack" in window) {
                    dcsMultiTrack("DCS.dcssip", "www.nytimes.com", "DCS.dcsuri", "/newsgraphics/2012/snow-fall/chapter-" + (this.current_index + 1), "WT.ti", "snow-fall chapter-" + (this.current_index + 1), "WT.z_dcsm", "0")
                }
                _gaq.push(["_trackEvent", "sections", "load", "chapter-" + (this.current_index + 1)])
            } catch (m) {}
            var l = function () {
                if (g.iscover) {
                    g.fsvid.css({
                        opacity: 1
                    })
                }
                if (g.iscover || g.isimagecover) {
                    g.cover.css({
                        opacity: 0,
                        top: (k.fixie_height * 2) + "px"
                    })
                }
                if (g.isgridcover) {
                    j.removeClass("nytmm_active");
                    g.cover.css({
                        opacity: 0,
                        top: (k.fixie_height) + "px"
                    })
                }
                if (g.istitle) {
                    g.title.css({
                        opacity: 0
                    });
                    g.fsvid.css({
                        opacity: 1
                    })
                }
            };
            var f = function () {
                var n = g.el.outerHeight();
                var o = k.fixie_height * 2 + 10;
                if ((n > k.$window.innerHeight() && k.pagescroll === 0) || (n > k.$window.height() && !k.pagescroll)) {
                    b("html, body").animate({
                        scrollTop: (n - k.$window.height() + o)
                    }, 1000)
                }
            };
            var d = function () {
                if (g.iscover || g.isimagecover) {
                    g.cover.stop().animate({
                        opacity: 0.99999,
                        top: k.fixie_height
                    }, 1200, function () {
                        f()
                    })
                }
                if (g.isgridcover) {
                    var n = _.shuffle(j);
                    _.each(n, function (p, o) {
                        _.delay(function () {
                            b(p).addClass("nytmm_active");
                            if (o == n.length - 1) {
                                g.cover.stop().animate({
                                    opacity: 1,
                                    top: k.fixie_height * 2
                                }, 1000)
                            }
                        }, o * 100)
                    })
                }
                if (g.istitle) {
                    g.title.stop().animate({
                        opacity: 1
                    }, 2000, function () {
                        f()
                    })
                }
            };
            h.css({
                display: "block",
                opacity: 0
            }).find(".nytmm_colorchange").css("background", "#ffffff");
            _.each(e, function (o, n) {
                k.loadArticleMedia(o)
            });
            k.bindArticleEvents();
            this.bindLightboxerClick(h);
            _.delay(function () {
                k.setDimensions();
                k.placeCharacterBoxes();
                if (k.opts.presentationType == "desktop") {
                    l()
                }
                h.animate({
                    opacity: 1
                }, 700, function () {
                    if (g.video) {
                        g.el.trigger("triggerPlay")
                    }
                    if (k.opts.presentationType == "desktop") {
                        d()
                    }
                    if (k.opts.presentationType == "ios" || k.opts.presentationType == "touch") {
                        if (g.istitle) {
                            k.$container.on("loadingscreen:off", function () {
                                g.title.find(".nytmm_arrow").delay(1000).animate({
                                    opacity: 1,
                                    marginTop: 80
                                }, 500)
                            })
                        }
                    }
                })
            }, 400)
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildAmbientPlayer: function (g, h) {
            var d = b(g);
            var j = d.data().mp3;
            var f = false;
            var e = new a.AudioPlayer(d, {
                skin: "sparse",
                skinShade: "light",
                solo: true,
                loop: true,
                autoPlay: false,
                volume: 0.5
            });
            e.setSource(j);
            b(h).bind("triggerPause", function () {
                e.fadeOut(700);
                f = true;
                return false
            });
            b(h).bind("triggerPlay", function () {
                e.setVolume(0.5);
                e.fadeIn(600);
                f = false;
                return false
            });
            return e
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildCirclePlayer: function (e, g) {
            var d = b(e);
            var h = d.data().mp3;
            var f = new a.CirclePlayerWrapper(d, {
                media: {
                    mp3: h
                }
            });
            b(g).bind("unloading", function () {
                f.reset()
            });
            return f
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildStaticFallbackPlayer: function (g, n) {
            var m = this;
            var h = b(g);
            var s = h.data();
            var q = h.attr("id");
            var j = (m.opts.presentationType === "ios" || m.opts.presentationType === "touch") ? m.settings.sizes.videoWidth : b(window).width();
            var e = h.hasClass("nytmm_fs_video");
            var l = h.hasClass("nytmm_triggered_video");
            var k = (e & s.vidwidth && s.vidheight) ? (s.vidheight / s.vidwidth) : this.vid_ratio;
            var f = Math.round(j * k);
            var d = (e) ? j : s.width;
            var p = (e) ? f : s.height;
            var r;
            var o = s.touchPoster || s.poster;
            h.append('<img src="' + o + '" width="' + d + '">');
            b.log("building static player", h.html(), p, (m.opts.presentationType === "ios" || m.opts.presentationType === "touch"), m.settings.sizes.videoWidth)
        }
    }, a.Avalanche)
})(jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildLightBoxer: function () {
            var e = this;
            this.lightboxer_data = [{
                    id: "navgroup",
                    type: "freeform",
                    src: "",
                    title: "The Group",
                    width: 1024,
                    height: 420
                }
            ];
            var d = b(".nytmm_grid").html();
            this.lightboxer_data[this.lightboxer_data.length - 1].src = d;
            this.lightbox = new a.Lightboxer({
                shareTools: false,
                swipe: false,
                autoAdvance: false,
                keyboard: false,
                linkScanning: false,
                items: e.lightboxer_data,
                sliderShowOptions: {
                    skin: "light",
                    thumbnails: e.settings.steppers.style,
                    thumbnailHeight: e.settings.steppers.size,
                    thumbnailWidth: e.settings.steppers.size,
                    cropSize: e.settings.steppers.cropSize,
                    speed: 0,
                    showArrows: !NYTD.NYTMM.iOS,
                    keyboard: null,
                    lazyload: false,
                    deeplink: false,
                    layout: "slider|thumbnails|captions",
                    showPhotoBackground: false
                }
            })
        },
        bindLightboxerClick: function (d) {
            var e = this;
            if (e.opts.presentationType !== "touch") {
                b(d).find(".nytmm_lightboxer").bind("click", function () {
                    var f = b(this).data().tag;
                    e.openLightboxerItem(f)
                })
            }
        },
        unbindLightboxerClick: function (d) {
            b(d).find(".nytmm_lightboxer").unbind("click")
        },
        openLightboxerItem: function (d) {
            var e = 720;
            var f = this;
            _.each(this.lightboxer_data, function (k, j) {
                if (k.id == d) {
                    var g;
                    if (f.opts.presentationType === "ios" || f.opts.presentationType === "touch") {
                        k.width = (NYTD.NYTMM.Device.orientation === "portrait") ? 900 : 700;
                        k.height = (NYTD.NYTMM.Device.orientation === "portrait") ? 600 : 467
                    } else {
                        g = f.$window.height();
                        k.height = (g < e) ? g - 200 : e;
                        k.width = Math.round(k.height * 1.5)
                    } if (k.type === "slideshow") {
                        try {
                            _gaq.push(["_trackEvent", "slideshow", "start", k.title])
                        } catch (h) {}
                    }
                    f.lightbox.open(k);
                    return
                }
            })
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildProtoPlayer: function (g, l) {
            var d = b(g);
            var k = d.parent();
            var j = d.data();
            var f = k.find(".nytmm_video_poster");
            var h = (this.opts.presentationType !== "desktop") ? f.find("img").attr("src") : "";
            var e = new NYTD.NYTMM.YMVP(d, {
                width: j.width,
                height: j.height,
                auto_start: false,
                solo: true,
                callbacks: {
                    onPlay: function () {
                        f.hide()
                    },
                    onEnd: function () {
                        f.fadeIn()
                    },
                    onReady: function () {
                        d.find("span").css("display", "inline")
                    }
                },
                poster: h
            });
            e.setSource(j.media);
            f.click(function () {
                e.play(0)
            });
            b(l).bind("unloading", function () {
                if (e && e.isPlaying()) {
                    e.pause()
                }
                f.fadeIn()
            });
            d.on(a.VideoEvents.PLAY_EVENT, function () {
                try {
                    b.log(j);
                    _gaq.push(["_trackEvent", "videos", "play", j.media])
                } catch (m) {}
            });
            return e
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildReel: function (e) {
            var f = e;
            var l = f.data();
            var m = l.frames;
            var n = l.path;
            var j = l.speed;
            var d = l.start;
            var h = l.modreduce;
            b.log(l);
            if (h) {
                n = _(b.fileString2Arr(n, m, d)).filter(function (p, o) {
                    return (o % h === 0)
                });
                m = n.length
            }
            var g = b('<div class="reel"></div>').appendTo(f);
            var k = g.ReelPlus({
                images: n,
                firstFrameFilenumber: d,
                frames: m,
                speed: j,
                controls: false,
                initialized: function () {
                    b.log("reel init")
                },
                reel: {
                    brake: 0,
                    loops: false
                }
            }).data("ReelPlus");
            return k
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (a) {
    a.fn.innerfade = function (b) {
        return this.each(function () {
            a.innerfade(this, b)
        })
    };
    a.innerfade = function (b, c) {
        var e = {
            animationtype: "fade",
            speed: "normal",
            type: "sequence",
            timeout: 2000,
            containerheight: "",
            runningclass: "innerfade",
            children: null,
            change: null,
            index: 0
        };
        if (c) {
            a.extend(e, c)
        }
        if (e.children === null) {
            var g = a(b).children()
        } else {
            var g = a(b).children(e.children)
        } if (g.length > 1) {
            a(b).css("position", "relative").css("height", e.containerheight).addClass(e.runningclass);
            for (var d = 0; d < g.length; d++) {
                a(g[d]).css("z-index", String(g.length - d)).css("position", "absolute").hide()
            }
            if (e.type == "sequence") {
                if (e.timeout) {
                    setTimeout(function () {
                        a.innerfade.next(g, e, 1, 0)
                    }, e.timeout)
                }
                a(g[0]).show()
            } else {
                if (e.type == "random") {
                    var f = Math.floor(Math.random() * (g.length));
                    e.index = f;
                    if (e.timeout) {
                        setTimeout(function () {
                            do {
                                h = Math.floor(Math.random() * (g.length))
                            } while (f == h);
                            a.innerfade.next(g, e, h, f)
                        }, e.timeout)
                    }
                    a(g[f]).show()
                } else {
                    if (e.type == "random_start") {
                        var h = Math.floor(Math.random() * (g.length));
                        e.type = "sequence";
                        e.index = h;
                        if (e.timeout) {
                            setTimeout(function () {
                                a.innerfade.next(g, e, (h + 1) % g.length, h)
                            }, e.timeout)
                        }
                        a(g[h]).show()
                    } else {
                        alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'")
                    }
                }
            }
            a(b).bind("index", function (k, j) {
                a.innerfade.next(g, e, j, e.index)
            })
        }
    };
    a.innerfade.next = function (d, b, e, c) {
        b.index = e;
        if (b.animationtype == "slide") {
            a(d[c]).stop(true, true).slideUp(b.speed);
            a(d[e]).stop(true, true).slideDown(b.speed)
        } else {
            if (b.animationtype == "fade") {
                a(d[c]).stop(true, true).fadeOut(b.speed);
                a(d[e]).stop(true, true).fadeIn(b.speed, function () {
                    removeFilter(a(this)[0])
                })
            } else {
                alert("Innerfade-animationtype must either be 'slide' or 'fade'")
            }
        } if (b.type == "sequence") {
            if ((e + 1) < d.length) {
                e = e + 1;
                c = e - 1
            } else {
                e = 0;
                c = d.length - 1
            }
        } else {
            if (b.type == "random") {
                c = e;
                while (e == c) {
                    e = Math.floor(Math.random() * d.length)
                }
            } else {
                alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'")
            }
        } if (b.change) {
            b.change(e)
        }
        if (b.timeout) {
            setTimeout((function () {
                a.innerfade.next(d, b, e, c)
            }), b.timeout)
        }
    }
})(jQuery);

function removeFilter(a) {
    if (a.style.removeAttribute) {
        a.style.removeAttribute("filter")
    }
}
/*
 * jQuery Fixed Div plugin v1.0.0 <https://github.com/rwbaker/jQuery.fixed/>
 * @requires jQuery v1.2.6 or later
 * is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 *     very HEAVILY MODIFIED by Jon Huang
 */ (function (c) {
    var b = {
        top: 0,
        enabled: true,
        localOffset: 0,
        stopAtBottom: false,
        updateBottom: true,
        bottomPos: 0,
        offsetBottom: 0,
        isFixed: false,
        fixedSupport: true,
        forceAbsolutePositioning: false,
        onFixing: function () {},
        onUnfixing: function () {}
    };
    var a = {
        init: function (d) {
            return this.each(function () {
                var h = this;
                var f = {};
                c.extend(true, f, b, d);
                var k = c(this);
                var m = k.offset();
                var e = (parseInt(m.top, 10) - parseInt(f.top, 10) - parseInt(k.css("padding-top"), 10));
                var g = k.offsetParent();
                f.$offsetParent = k.offsetParent();
                f.bottomPos = g.outerHeight() - k.outerHeight();
                f.offsetBottom = f.bottomPos + e;
                f.localOffset = k.position().top;
                if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
                    if (/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)) {
                        f.fixedSupport = false
                    } else {
                        if (/CPU like Mac OS X/i.test(navigator.userAgent)) {
                            f.fixedSupport = false
                        } else {
                            f.fixedSupport = true
                        }
                    }
                } else {
                    f.fixedSupport = true
                } if (f.forceAbsolutePositioning) {
                    f.fixedSupport = false
                }
                k.css("position", "absolute");
                k.data("nytmm_fixie", f);
                if (c(window).scrollTop() > e) {
                    j(f.top)
                }
                c(window).on("scroll.fixie", _.debounce(function () {
                    if (!f.enabled) {
                        return
                    }
                    var n = c(window).scrollTop();
                    if (f.stopAtBottom && f.updateBottom) {
                        f.bottomPos = g.outerHeight() - k.outerHeight();
                        f.offsetBottom = f.bottomPos + e
                    }
                    if (n < e) {
                        l(f.localOffset);
                        a._setFix(false, k)
                    } else {
                        if (f.stopAtBottom && (n > f.offsetBottom)) {
                            l(f.bottomPos);
                            a._setFix(true, k)
                        } else {
                            if (f.fixedSupport) {
                                j(f.top)
                            } else {
                                l(n + f.top - e)
                            }
                            a._setFix(true, k)
                        }
                    }
                }, 0));

                function j(n) {
                    k.css("position", "fixed").css({
                        top: n + "px"
                    })
                }
                function l(n) {
                    k.css("position", "absolute").css({
                        top: n + "px"
                    })
                }
            })
        },
        enable: function () {
            return this.each(function () {
                var d = c(this).data("nytmm_fixie");
                d.enabled = true
            })
        },
        disable: function () {
            return this.each(function () {
                var d = c(this).data("nytmm_fixie");
                d.enabled = false;
                c(this).css({
                    position: "absolute",
                    top: d.localOffset + "px"
                })
            })
        },
        update: function () {
            return this.each(function () {
                var d = c(this).data("nytmm_fixie");
                var e = c(this);
                var f = e.offset();
                f = (parseInt(f.top, 10) - parseInt(d.top, 10));
                d.bottomPos = Math.max(parseInt(d.$offsetParent.css("height"), 10), d.$offsetParent.height()) - c(window).height();
                d.offsetBottom = d.bottomPos + f
            })
        },
        _setFix: function (d, f) {
            var e = f.data("nytmm_fixie");
            if (d) {
                if (!e.isFixed && e.onFixing) {
                    e.onFixing()
                }
                e.isFixed = true;
                f.addClass("nytmm_fixed")
            } else {
                if (e.isFixed && e.onUnfixing) {
                    e.onUnfixing()
                }
                e.isFixed = false;
                f.removeClass("nytmm_fixed")
            }
        }
    };
    c.fn.fixie = function (d) {
        if (a[d]) {
            return a[d].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof d === "object" || !d) {
                return a.init.apply(this, arguments)
            } else {
                c.error("Method " + d + " does not exist on jQuery.fixie")
            }
        }
    }
})(jQuery || NYTD.jQuery);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildFixies: function (f) {
            var d = f;
            var g = d.data();
            var e = d.height(d.height()).children().not(".nytmm_reel_fallback").remove().end().filter(".nytmm_reel_fallback").show()
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildReelTouch: function (e) {
            var f = e;
            var k = f.data();
            var l = k.frames;
            var m = k.path;
            var g = k.speed;
            var d = k.start;
            f.find(".preloadPoster").remove();
            var h = b('<div class="reel"></div>').appendTo(f);
            var j = h.ReelPlus({
                images: m,
                firstFrameFilenumber: d,
                frames: l,
                speed: g,
                controls: false,
                initialized: function () {
                    b.log("reel init")
                },
                reel: {
                    brake: 0,
                    loops: false
                }
            }).data("ReelPlus");
            return j
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildTouchStepper: function (d) {
            var j = this;
            var f = this.settings.sizes.touchStepperWidth;
            var k = this.settings.sizes.touchStepperHeight;
            var e = d;
            var h = e.data();
            var g = h.slideshow;
            var m = typeof h.preroll === "string" && h.preroll !== "";
            var l;
            e.empty();
            if (this.opts.presentationType == "ios") {
                b.slideshowUrl2Array(g, _.bind(function (p) {
                    var o = [];
                    if (m) {
                        l = ['<div class="nytmmSliderShow_item nytmm_SliderItem nytmm_touchstepper_preroll">', '<div class="nytmm_preroll_video"', 'data-loop="false"', 'data-width="' + f + '"', 'data-height="' + k + '"', 'data-mp4="' + h.preroll + '"', 'data-touch-poster="' + h.touchPoster + '"', "></div>", "</div>"].join(" ");
                        o.push({
                            width: f,
                            height: k,
                            override: l,
                            caption: "",
                            creditHeight: 0
                        })
                    }
                    o = o.concat(b.slideshowJson2Array(p, {
                        crop: "jumbo",
                        caption: "none"
                    }));
                    var n = e.SliderShow({
                        width: f,
                        height: k,
                        content: o,
                        skin: "light",
                        lazyload: true,
                        clickToSelect: false,
                        deeplink: false,
                        showArrows: true,
                        thumbnails: j.settings.steppers.style,
                        thumbnailHeight: j.settings.steppers.size,
                        thumbnailWidth: j.settings.steppers.size,
                        layout: "slider|thumbnails|captions"
                    }).data("SliderShow");
                    if (m) {
                        _.bind(function () {
                            var r = e.find(".nytmmThumbStrip_item");
                            var t = e.find(".nytmm_preroll_video");
                            var s = this.buildProtoPlayerTouch(t, true);
                            t.on(a.VideoEvents.END_EVENT, function () {
                                n.index(1)
                            });
                            e.addClass("nytmm_preroll_slide_0");
                            n.addChangeListener(function (u) {
                                e.removeClass(function (w, x) {
                                    return (x.match(/(nytmm_preroll_slide_(?:[0-9]))/) || []).join(" ")
                                });
                                e.addClass("nytmm_preroll_slide_" + u);
                                if (u !== 0) {
                                    try {
                                        s.pause()
                                    } catch (v) {}
                                } else {
                                    try {
                                        s.setCurrentTime(0);
                                        s.play()
                                    } catch (v) {}
                                }
                            });
                            var q = b("#nytmm_touchstepper_instructions");
                            q.click(function () {
                                n.index(0);
                                try {
                                    s.play()
                                } catch (u) {}
                            })
                        }, this)()
                    }
                }, this))
            } else {
                e.data("touch-media", h.preroll);
                this.buildProtoPlayerTouch(e)
            }
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildTouchVideo: function (f, m) {
            var n = this;
            var h = b(f);
            var p = h.hasClass("nytmm_fs_video");
            var k = h.hasClass("nytmm_touch_fs_leadphotoseq");
            var g = h.hasClass("nytmm_touch_fs_blurphotoseq");
            var t = h.hasClass("nytmm_touch_fs_staticimage");
            var j = h.data();
            var u = (p) ? n.settings.sizes.videoWidth : j.width;
            var q = (p) ? n.settings.sizes.videoHeight : j.height;
            var e;
            var x;
            var l;
            var v = this.current_index;
            var o = b.extend(true, {}, j);
            e = b.extend({
                poster: "../img/grey9.png",
                width: u,
                height: q,
                mp4: c,
                autoplay: false,
                loop: true,
                touchControls: false
            }, j);
            e.auto_start = e.autoplay;
            delete e.autoplay;
            e.h264 = {};
            e.h264.poster = e.touchPoster || e.poster;
            delete e.poster;
            e.h264.controls = e.touchControls;
            e.h264.loop = e.loop;
            delete e.loop;
            l = e.mp4;
            if (this.opts.presentationType == "ios" && !k && !t && !g) {
                var A;
                var s;
                var z = function () {
                    var B = b(f).closest(".nytmm_article_0_in_section").length > 0;
                    x = new NYTD.NYTMM.YMVP(h, e);
                    x.setSource(l);
                    A = b('<div class="nytmm_video_mask"></div>').css({
                        width: n.settings.sizes.videoMaskWidth + "px",
                        height: n.settings.sizes.videoMaskHeight + "px"
                    });
                    s = b('<div class="nytmm_video_bg"></div>').css({
                        "background-image": "url(" + e.h264.poster + ")",
                        "background-size": "100%",
                        width: e.width + "px",
                        height: e.height + "px"
                    });
                    var D = function () {
                        var E = (B) ? 0 : (q / 2) * -1;
                        A.css({
                            top: E + "px",
                            height: n.settings.sizes.videoMaskHeight + "px"
                        });
                        var F = (B) ? 45 : Math.abs(E);
                        s.show().css({
                            top: F + "px"
                        })
                    };
                    var C = function () {
                        A.hide();
                        s.hide()
                    };
                    D();
                    A.append(s);
                    h.before(A);
                    if (e.touchControls) {
                        h.on(a.VideoEvents.PLAY_EVENT, _.bind(C, this));
                        h.on(a.VideoEvents.END_EVENT, function () {
                            D()
                        });
                        h.on(a.VideoEvents.PAUSE_EVENT, function () {
                            D()
                        })
                    }
                    A.on("touchstart click", function () {
                        x.play()
                    });
                    h.on(NYTD.NYTMM.VideoEvents.PLAY_EVENT, _.bind(function () {
                        s.css({
                            "background-image": "none"
                        })
                    }, this));
                    n.$container.on("dimensionChange", function () {
                        A.height(n.settings.sizes.videoMaskHeight);
                        D()
                    })
                };
                var w = function () {
                    x.stop();
                    x.destroy();
                    delete NYTD.NYTMM.YMVP.instances[x.meta.player_id];
                    x = null;
                    s.remove();
                    s = null;
                    A.off("touchstart click");
                    A.remove();
                    A = null;
                    h.off(NYTD.NYTMM.VideoEvents.PLAY_EVENT);
                    h.removeAttr("id").empty().removeClass(function (B, E) {
                        var D = E.split(" ");
                        var F = [];
                        for (var C = 0; C < D.length; C++) {
                            if (/(nytmm_ym[mvp4]*)/.test(D[C])) {
                                F.push(D[C])
                            }
                        }
                        return F.join(" ")
                    });
                    h.data(o)
                };
                z();
                b(m).bind("unloading", function () {
                    if (x && x.isPlaying()) {
                        x.pause()
                    }
                })
            } else {
                h.append(b('<img src="' + e.h264.poster + '">').css({
                    width: n.settings.sizes.videoWidth + "px"
                }));
                x = null
            }
            return x
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildProtoPlayerTouch: function (e, j) {
            var f = b(e);
            var r = b(j);
            var o = f.parent();
            var v = f.data();
            var g = f.closest(".nytmm_video_player").find(".nytmm_overlay_title");
            var t = f.find(".nytmm_graphiccover_label").detach();
            var h = v.touchMedia || v.media || v.mp4;
            var p = v.touchWidth || v.width || this.settings.sizes.videoWidth;
            var n = v.touchHeight || v.height || this.settings.sizes.videoHeight;
            var l = v.touchPoster || v.poster;
            var d = f.hasClass("nytmm_touch_video_graphic") || f.hasClass("nytmm_touch_triggered_video");
            var k = v.touchResetVideo || false;
            var q;
            var u = (v.touchControls === false) ? false : true;
            if (!u) {
                f.addClass("nytmm_hide_controls")
            }
            var m = {
                width: p,
                height: n,
                auto_start: false,
                loop: false,
                controls: u,
                poster: l,
                src: h
            };
            var s = _.once(function () {
                q = new NYTD.NYTMM.MediaElementPlayer(f, m);
                var w = f.find("video");
                w.attr("poster", l);
                if (t.length > 0) {
                    f.append(t)
                }
                b(j).bind("unloading", function () {
                    try {
                        q.pause()
                    } catch (x) {
                        b.log("stopping video")
                    }
                });
                f.on(a.VideoEvents.PLAY_EVENT, function () {
                    if (d === false) {
                        try {
                            var x = v.mp4 || v.media || v.touchMedia;
                            _gaq.push(["_trackEvent", "videos", "play", x])
                        } catch (y) {}
                    }
                    _.delay(function () {
                        q.hideControls()
                    }, 5500)
                });
                f.click(function () {})
            });
            s();
            return q
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (b, a) {
    a.MediaElementPlayer = function (c, e) {
        var d = this;
        $container = b(c);
        this.opts = b.extend(true, {
            width: 600,
            height: 338,
            controls: true,
            poster: null,
            autoPlay: false
        }, e);
        this.opts.id = _.uniqueId("nytmm_mediaElementPlayer_");
        this.opts.controls = true;
        this.player = {};
        this.domId = "#" + $container.identify().attr("id");
        this.playing = false;
        $container.append(this.getEmbed(this.opts)).addClass("nytmm_videoloaded nytmm_mep_notstarted");
        b("#" + this.opts.id).mediaelementplayer({
            iPadUseNativeControls: false,
            iPhoneUseNativeControls: true,
            enablePluginDebug: false,
            plugins: ["flash", "silverlight"],
            pluginPath: "http://graphics8.nytimes.com/packages/flash/multimedia/bundles/projects/2012/AvalancheDeploy/",
            flashName: "flashmediaelement.swf",
            silverlightName: "silverlightmediaelement.xap",
            success: function (j, h, g) {
                d.player = g;
                var f = b(d.domId);
                j.addEventListener("play", function (k) {
                    d.playing = true;
                    f.addClass("nytmm_mep_playing").removeClass("nytmm_mep_paused nytmm_mep_notstarted");
                    f.trigger(a.VideoEvents.PLAY_EVENT)
                }, false);
                j.addEventListener("ended", function (k) {
                    d.playing = false;
                    f.removeClass("nytmm_mep_playing nytmm_mep_paused").addClass("nytmm_mep_notstarted");
                    f.trigger(a.VideoEvents.END_EVENT)
                }, false);
                j.addEventListener("pause", function (k) {
                    d.playing = false;
                    f.removeClass("nytmm_mep_playing");
                    f.addClass("nytmm_mep_paused");
                    f.trigger(a.VideoEvents.PAUSE_EVENT)
                }, false)
            }
        });
        return this.player
    };
    a.MediaElementPlayer.prototype = {
        getEmbed: function (e) {
            var d = '<video id="{{id}}" class="video-mediaElement {{theme}}" width="{{width}}" height="{{height}}" {{#poster}}poster="{{poster}}"{{/poster}} preload="none" {{#controls}}controls{{/controls}} {{#autoPlay}}autoplay{{/autoPlay}} {{#loop}}loop{{/loop}}>{{#src}}<source type="video/mp4" src="{{src}}">{{/src}}<object width="320" height="240" type="application/x-shockwave-flash" data="http://graphics8.nytimes.com/packages/flash/multimedia/bundles/projects/2012/AvalancheDeploy/flashmediaelement.swf"><param name="movie" value="http://graphics8.nytimes.com/packages/flash/multimedia/bundles/projects/2012/AvalancheDeploy/flashmediaelement.swf" /><param name="flashvars" value="controls=true&file={{{src}}}" /><!-- Image as a last resort -->{{#poster}}<img src="{{poster}}" width="320" height="240" title="No video playback capabilities" />{{/poster}}</object></video>';
            var c = b(Mustache.to_html(d, e));
            return c
        },
        isPlaying: function () {
            return this.playing
        },
        pause: function () {
            this.player.pause()
        },
        stop: function () {
            this.pause()
        },
        play: function () {
            this.player.play()
        }
    }
})(jQuery, NYTD.NYTMM);
(function (b, a, c) {
    a.Avalanche = b.extend(true, {
        buildHtml5Player: function (h, r) {
            var t = this;
            var j = b(h);
            var l = j.data();
            var C = j.attr("id");
            var k = b(window).width();
            var w = j.hasClass("nytmm_fs_video");
            var p = j.hasClass("nytmm_triggered_video");
            var m = j.hasClass("quick_video");
            var F = b(r).hasClass("video_cover");
            var o = b(r).hasClass("graphic_cover");
            var e = (j.data().trigger == "bodies-graphic") ? true : false;
            var z = (w & l.vidwidth && l.vidheight) ? (l.vidheight / l.vidwidth) : this.vid_ratio;
            var E = Math.round(k * z);
            var A = (w) ? k : l.width;
            var y = (w) ? E : l.height;
            var s;
            var n = false;
            var g = b.extend({
                poster: "../img/grey9.png",
                width: A,
                height: y,
                mp4: c,
                ogv: c,
                webm: c,
                autoplay: false,
                loop: true,
                scale: false,
                position: "absolute",
                opacity: 1,
                textReplacement: false,
                zIndex: 1,
                fullscreen: w,
                imgFallback: true,
                preload: "none",
                constrainHeight: true,
                scrollToTop: false,
                minWidth: t.min_width
            }, l);
            var D = j.css({
                width: A + "px",
                height: y + "px"
            }).addClass("video_loaded").videoBG(g).find("video")[0];
            var x = function () {
                if (D) {
                    D.volume = 1;
                    D.play();
                    n = true
                }
            };
            var f = function () {
                var J = 0,
                    L = 1000,
                    I = 25,
                    K = (D.volume - J) / (L / I);
                var H = function () {
                    var M = Math.max(0, D.volume - K);
                    D.volume = M;
                    if (D.volume > J) {
                        setTimeout(H, I)
                    }
                };
                H()
            };
            var u = function (H) {
                if (s) {
                    if (H && s.is(":hidden")) {
                        s.fadeIn()
                    }
                    if (!H) {
                        s.hide()
                    }
                }
            };
            var G = function () {
                if (D && !D.paused) {
                    D.pause()
                }
            };
            var q = function () {
                if (D && D.currentTime) {
                    D.currentTime = 0
                }
            };
            var v = function () {
                if (D) {
                    q();
                    D.volume = 1;
                    D.play();
                    n = true
                }
            };
            if (D) {
                G();
                b(D).bind("timeupdate", function () {
                    if (D.currentTime > 1) {
                        u(true)
                    }
                    if (C == "weather_graphic") {
                        if (D.currentTime > 4) {
                            b("#nytmm_weather_label2").css("opacity", 1)
                        } else {
                            b("#nytmm_weather_label2").css("opacity", 0)
                        }
                    }
                    if (C == "avalanche_sim_graphic") {
                        if (D.currentTime >= 55) {
                            b("#nytmm_sim_label1").css("opacity", 0);
                            b("#nytmm_sim_label2").css("opacity", 1)
                        } else {
                            b("#nytmm_sim_label1").css("opacity", 1);
                            b("#nytmm_sim_label2").css("opacity", 0)
                        }
                    }
                });
                b(D).bind("ended", function () {
                    var I = b(r).offset().top - t.fixie_height;
                    var J = I + b(r).height() / 5;
                    var H = I + b(r).height();
                    if (p) {
                        j.parent().parent().addClass("nytmm_highlight")
                    }
                    if (o && t.pagescroll < J && H < t._content_height && t.pagescroll >= I) {
                        b("html,body").animate({
                            scrollTop: J
                        }, 1000)
                    }
                });
                if (w && o || e) {
                    s = b('<div class="nytmm_replay"></div>').click(function () {
                        v()
                    });
                    j.append(s)
                }
                if (w && o) {
                    var B = b('<div class="nytmm_loading">loading</div>');
                    j.append(B);
                    b(D).bind("canplay", function () {
                        B.hide()
                    });
                    var d = j.find(".nytmm_graphiccover_label").detach();
                    j.append(d)
                }
            }
            b(r).bind("triggerPause", function () {
                if (F || m) {
                    G()
                } else {
                    if (o) {
                        f()
                    }
                }
                return false
            });
            b(r).bind("triggerPlay", function () {
                if (n === false || F || m) {
                    x()
                } else {
                    if (D) {
                        D.volume = 1
                    }
                }
                return false
            });
            b(r).bind("unloading", function () {
                u(false);
                G();
                q();
                n = false
            });
            return D
        }
    }, a.Avalanche)
})(jQuery || NYTD.jQuery, NYTD.NYTMM);
(function (a, b, c) {
    a.AsyncTypeLoader("tym0yva");
    a.Avalanche = b.extend(true, {
        init: function (d) {
            this.opts = d;
            this.$window = b(window);
            this.$container = b("#nytmm");
            this.$content = b("#nytmm_articles");
            this.$sections = this.$content.find(".nytmm_section");
            this.$articles = this.$content.find(".nytmm_article");
            this.$footer = b("#nytmm_footer");
            this.$prompt = b("#nytmm_bottom_prompt");
            this.promptHeight = this.$prompt.outerHeight();
            this.promptIsVisible = false;
            this.$sidenav = b("#nytmm_sidenav");
            this.settings = {};
            this.settings.browser = this.opts.browser;
            this.settings.steppers = {};
            this.settings.steppers.size = (this.opts.presentationType == "ios" || this.opts.presentationType == "touch") ? 18 : 12;
            this.settings.steppers.style = "bullets";
            this.settings.steppers.cropSize = "jumbo";
            this.settings.steppers.speed = (this.opts.presentationType == "ios" || this.opts.presentationType == "touch" || (this.settings.browser.isWebkit && !this.settings.browser.isChrome)) ? 0 : 300;
            this.settings.sizes = {};
            this.updateTouchSizeSettings();
            this.vid_ratio = 1080 / 1920;
            this.min_width = 1024;
            this.initFixieNav();
            this.initArticles();
            this.setEvents();
            this.buildLightBoxer();
            this.goToDeeplink()
        },
        updateTouchSizeSettings: function () {
            var d = this.settings.sizes;
            var e = NYTD.NYTMM.Device.resolution.width / NYTD.NYTMM.Device.viewport.width;
            d.maxWidth = (NYTD.NYTMM.iOS) ? 1024 : 980;
            d.maxHeight = (NYTD.NYTMM.iOS) ? NYTD.NYTMM.Device.resolution.height : NYTD.NYTMM.Device.viewport.height;
            d.videoWidth = d.maxWidth;
            d.videoHeight = Math.round(d.videoWidth * 0.5625);
            d.videoMaskWidth = d.videoWidth;
            d.videoMaskHeight = (NYTD.NYTMM.Device.orientation === "landscape") ? NYTD.NYTMM.Device.viewport.height : NYTD.NYTMM.Device.viewport.height * e;
            d.videoPlayingMaskHeight = d.videoHeight - 39;
            d.touchStepperWidth = d.videoWidth;
            d.touchStepperHeight = Math.round(d.touchStepperWidth * 0.5234);
            d.fullReelWidth = d.videoWidth;
            d.fullReelHeight = d.maxHeight
        },
        initArticles: function () {
            var e = this;
            this.section_objs = [];
            var d = 0;
            var f = {
                desktop: {
                    fs_vid: ".nytmm_fs_video",
                    triggered_vid: ".nytmm_triggered_video"
                },
                ie: {
                    fs_vid: ".nytmm_ie_static",
                    triggered_vid: ".nytmm_ie_mp4"
                },
                ios: {
                    fs_vid: ".nytmm_touch_fs_video",
                    triggered_vid: ".nytmm_touch_triggered_video"
                },
                touch: {
                    fs_vid: ".nytmm_touch_fs_video",
                    triggered_vid: ".nytmm_touch_triggered_video"
                }
            };
            this.$sections.each(function (h) {
                var k = [];
                var g = b(this).find(".nytmm_article");
                var j = g.length;
                g.each(function (w) {
                    var o = b(this);
                    var p = (w > 0) ? g.eq(w - 1) : c;
                    var s = (w < j - 1) ? g.eq(w + 1) : e.$footer;
                    var n = o.find(".nytmm_chapter_head");
                    var B = o.find(".nytmm_title_head");
                    var z = o.find(f[e.opts.presentationType].fs_vid);
                    var v = o.find(".nytmm_fs_img");
                    var u = o.find(".nytmm_proto_videoplayer");
                    var l = o.find(f[e.opts.presentationType].triggered_vid);
                    var y = o.find(".nytmm_video_trigger");
                    var t = o.find(".nytmm_circleplayer");
                    var m = o.find(".nytmm_tofixie");
                    var r = o.find(".nytmm_reel_sequence");
                    var A = o.find(".nytmm_touchstepper");
                    var q = o.find(".nytmm_touch_video_graphic");
                    var x = o.find(".nytmm_instruction");
                    k.push({
                        el: o,
                        iscover: n.length > 0 && z.length > 0,
                        istitle: B.length > 0,
                        isgraphiccover: o.hasClass("graphic_cover"),
                        iscolorchange: o.hasClass("nytmm_colorchange"),
                        isautoplay_top: o.hasClass("autoplay_top"),
                        isgridcover: o.hasClass("grid_cover"),
                        isimagecover: o.hasClass("image_cover"),
                        hasreel: r.length > 0,
                        hasfixie: m.length > 0,
                        hasinstruct: x.length > 0,
                        reel: r,
                        fixie: m,
                        title: B,
                        cover: n,
                        fsvid: z,
                        fsimg: v,
                        instruct: x,
                        triggeredvid: l,
                        vidtriggers: y,
                        protoplayer: u,
                        circleplayer: t,
                        vidgraphic: q,
                        touchstepper: A,
                        next: s,
                        prev: p
                    });
                    o.addClass("nytmm_section_" + h + "_article_" + w + " nytmm_article_" + w + "_in_section nytmm_article_" + d)
                });
                e.section_objs.push(k);
                d += 1
            })
        },
        bindArticleEvents: function () {
            var d = this;
            _.each(this.section_objs[this.current_index], function (k, f) {
                var j = k.el;
                var h = function (l) {
                    if (k.video) {
                        if (!l) {
                            j.trigger("triggerPause")
                        } else {
                            j.trigger("triggerPlay")
                        }
                    }
                };
                var g = function (m, l) {
                    var n = b(j).find(".nytmm_video_player").eq(l);
                    if (k.triggered) {
                        var o = k.triggered[l];
                        if (!m) {
                            if (n && n.hasClass("nytmm_active")) {
                                n.removeClass("nytmm_active")
                            }
                            if (o) {
                                j.trigger("triggerPause")
                            }
                        } else {
                            if (n && !n.hasClass("nytmm_active")) {
                                n.addClass("nytmm_active")
                            }
                            if (o) {
                                j.trigger("triggerPlay")
                            }
                        }
                    } else {
                        if (!m) {
                            n.removeClass("nytmm_highlight")
                        } else {
                            n.addClass("nytmm_highlight")
                        }
                    }
                };
                var e = function (n, q, p) {
                    var l = 0;
                    var m;
                    var o = 0;
                    if (k.iscover || k.istitle || k.isgraphiccover) {
                        m = k.fsvid
                    } else {
                        if (k.isimagecover) {
                            m = k.fsimg
                        } else {
                            if (k.hasreel) {
                                m = k.reel
                            } else {
                                if (k.hasfixie) {
                                    m = k.fixie
                                }
                            }
                        }
                    } if (m !== c) {
                        if (q) {
                            l = k.next.offset().top - k.el.offset().top - m.height()
                        }
                        o = (p) ? -m.outerHeight() : d.fixie_height;
                        if (!n) {
                            m.css({
                                position: "absolute",
                                top: l + "px"
                            })
                        } else {
                            m.css({
                                position: "fixed",
                                top: o + "px"
                            })
                        }
                    }
                };
                j.bind("visibleview", function (n, o) {
                    if (j.hasClass("nytmm_loaded")) {
                        var l = j.find(".nytmm_graphiccover_label");
                        var m = l.length > 0;
                        if (o) {
                            if (!k.isautoplay_top) {
                                h(true)
                            }
                            if (m) {
                                l.css("opacity", 1)
                            }
                        } else {
                            if (!k.isautoplay_top) {
                                h(false)
                            }
                            if (m) {
                                l.css("opacity", 0)
                            }
                        }
                    }
                    return false
                });
                j.bind("currentview", function (l, m) {
                    if (m == "current") {
                        e(true);
                        if (k.isautoplay_top) {
                            h(true)
                        }
                    } else {
                        if (m == "above") {
                            if (k.hasreel || k.hasfixie) {
                                e(false, true)
                            } else {
                                if (k.isgraphiccover) {
                                    e(true)
                                } else {
                                    e(true, false, true)
                                }
                            } if (k.isautoplay_top) {
                                h(false)
                            }
                        } else {
                            if (k.iscover || k.istitle || k.isimagecover) {
                                e(true)
                            } else {
                                e(false)
                            } if (k.isautoplay_top) {
                                h(false)
                            }
                        }
                    }
                    return false
                });
                j.bind("unloading", function (l) {
                    h(false);
                    if (k.iscover || k.istitle || k.isimagecover) {
                        e(true)
                    } else {
                        e(false)
                    }
                    return false
                });
                if (k.vidtriggers.length > 0) {
                    k.vidtriggers.each(function (m) {
                        var l = b(this);
                        var n = b(j).find(".nytmm_video_player").eq(m);
                        l.bind("currentview", function (o, p) {
                            if (p == "current") {
                                g(true, m);
                                l.addClass("nytmm_highlight")
                            } else {
                                g(false, m);
                                l.removeClass("nytmm_highlight")
                            }
                            return false
                        });
                        if (k.vps) {
                            l.bind("mouseenter mouseleave", function () {
                                n.toggleClass("hover");
                                return false
                            }).bind("click", function () {
                                k.vps[m].play();
                                return false
                            })
                        }
                    })
                }
            })
        },
        unbindArticleEvents: function (d) {
            _.each(this.section_objs[d], function (g, e) {
                var f = g.el;
                f.unbind("visibleview").unbind("currentview");
                if (g.vidtriggers.length > 0) {
                    g.vidtriggers.each(function (h) {
                        b(this).unbind()
                    })
                }
                f.find(".nytmm_character_tag").unbind("mouseleave mouseenter");
                f.find(".nytmm_character_box").unbind("mouseleave mouseenter")
            })
        },
        setEvents: function () {
            NYTD.NYTMM.Device.addResolutionChangeAction(_.bind(function () {
                this.setDimensions()
            }, this));
            if (this.opts.presentationType == "ios" || this.opts.presentationType == "touch") {
                NYTD.NYTMM.Device.addResolutionChangeAction(_.bind(function () {
                    this.placeCharacterBoxes()
                }, this))
            }
            if (this.opts.presentationType !== "ie" && this.opts.presentationType !== "touch") {
                this.onScrolling()
            }
        },
        setDimensions: function () {
            var f = this;
            var d = this.$window.innerWidth();
            var e = this.$window.innerHeight();
            this._window_height = e;
            var g = Math.round(d * this.vid_ratio);
            f.updateTouchSizeSettings();
            d = (d < this.min_width) ? this.min_width : d;
            if (f.opts.presentationType === "ios" || f.opts.presentationType === "touch") {
                d = f.settings.sizes.fullReelWidth;
                e = f.settings.sizes.fullReelHeight
            }
            _.each(this.section_objs[this.current_index], function (j, h) {
                if (f.opts.presentationType === "desktop") {
                    if (j.iscover || j.istitle || j.isgraphiccover || j.isimagecover) {
                        if (j.fsvid.length > 0) {
                            g = (j.fsvid.hasClass("nytmm_fs_video") && j.fsvid.data().vidwidth && j.fsvid.data().vidheight) ? d * j.fsvid.data().vidheight / j.fsvid.data().vidwidth : g;
                            j.fsvid.css({
                                width: d,
                                height: g
                            })
                        }
                        if (j.iscover || j.isimagecover) {
                            j.cover.css({
                                width: d,
                                height: g
                            })
                        }
                        if (j.istitle) {
                            j.title.css({
                                width: d,
                                height: g
                            })
                        }
                        j.el.css({
                            width: d,
                            height: g
                        });
                        j._height = g
                    }
                }
                if (j.hasreel && j.reel.hasClass("fs_reel")) {
                    j.reel.css({
                        width: d,
                        height: e
                    }).find(".nytmm_reel_labels").css({
                        width: d,
                        height: g
                    });
                    j.reel.find("img").css({
                        width: d,
                        height: "auto"
                    });
                    j.reel._height = e;
                    j._height = e
                }
            });
            this.$container.trigger("dimensionChange", this.current_index);
            this._content_height = this.$content.height()
        },
        placeCharacterBoxes: function () {
            _.each(this.section_objs[this.current_index], function (h, f) {
                var g = h.el;
                var j = g.offset().top;
                var k = g.find(".nytmm_character_tag");
                var d = g.find(".nytmm_character_box");
                var e;
                k.each(function (n) {
                    var m = b(this);
                    var o = m.data().tag;
                    var l = m.offset().top - j;
                    if (n > 0) {
                        e = k.eq(n - 1)
                    }
                    d.each(function () {
                        var r = b(this);
                        if (o == r.data().tag) {
                            if (e) {
                                var p = d.eq(n - 1);
                                var q = parseInt(p.css("top"), 10) + p.outerHeight() + 10;
                                if (q > l) {
                                    l = q
                                }
                            }
                            r.css("top", l + "px").bind("mouseenter", function () {
                                m.addClass("hover")
                            }).bind("mouseleave", function () {
                                m.removeClass("hover")
                            });
                            m.bind("mouseenter", function () {
                                r.addClass("hover")
                            }).bind("mouseleave", function () {
                                r.removeClass("hover")
                            })
                        }
                    })
                })
            })
        },
        initSocial: function () {
            var h = this;
            var g = b("#nytmm_shareTools");
            var e = window.location.href.replace(/#.*/, "");
            var l = document.title;
            var f = b("meta[property=og\\:image]").attr("content");
            var m = b("meta[property=og\\:description]").attr("content");
            var d = {
                target: ".nytmm_shareTools",
                theme: "minimal",
                url: e,
                title: l,
                thumbnail: f,
                description: m,
                shares: "facebook2|Facebook,twitter|Twitter"
            };
            var k = g.addClass(d.theme);
            NYTD.NYTMM.shareTools.init(k, d);
            var j = b('<li class="shareToolsItem shareToolsItemEmail"><span></span></li>');
            g.find("ul").append(j);
            j.click(function (o) {
                var n = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=944,height=650";
                window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dream4TK@gmail.com&su=Contact%20from%20Website", "Dream4TK Email", n);
                o.preventDefault();
                o.stopPropagation()
            })
        }
    }, a.Avalanche)
})(NYTD.NYTMM, jQuery || NYTD.jQuery);
(function ($) {
    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
    $.toJSON = typeof JSON === "object" && JSON.stringify ? JSON.stringify : function (o) {
        if (o === null) {
            return "null"
        }
        var type = typeof o;
        if (type === "undefined") {
            return undefined
        }
        if (type === "number" || type === "boolean") {
            return "" + o
        }
        if (type === "string") {
            return $.quoteString(o)
        }
        if (type === "object") {
            if (typeof o.toJSON === "function") {
                return $.toJSON(o.toJSON())
            }
            if (o.constructor === Date) {
                var month = o.getUTCMonth() + 1,
                    day = o.getUTCDate(),
                    year = o.getUTCFullYear(),
                    hours = o.getUTCHours(),
                    minutes = o.getUTCMinutes(),
                    seconds = o.getUTCSeconds(),
                    milli = o.getUTCMilliseconds();
                if (month < 10) {
                    month = "0" + month
                }
                if (day < 10) {
                    day = "0" + day
                }
                if (hours < 10) {
                    hours = "0" + hours
                }
                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                if (seconds < 10) {
                    seconds = "0" + seconds
                }
                if (milli < 100) {
                    milli = "0" + milli
                }
                if (milli < 10) {
                    milli = "0" + milli
                }
                return '"' + year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + "." + milli + 'Z"'
            }
            if (o.constructor === Array) {
                var ret = [];
                for (var i = 0; i < o.length; i++) {
                    ret.push($.toJSON(o[i]) || "null")
                }
                return "[" + ret.join(",") + "]"
            }
            var name, val, pairs = [];
            for (var k in o) {
                type = typeof k;
                if (type === "number") {
                    name = '"' + k + '"'
                } else {
                    if (type === "string") {
                        name = $.quoteString(k)
                    } else {
                        continue
                    }
                }
                type = typeof o[k];
                if (type === "function" || type === "undefined") {
                    continue
                }
                val = $.toJSON(o[k]);
                pairs.push(name + ":" + val)
            }
            return "{" + pairs.join(",") + "}"
        }
    };
    $.evalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function (src) {
        return eval("(" + src + ")")
    };
    $.secureEvalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function (src) {
        var filtered = src.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered)) {
            return eval("(" + src + ")")
        } else {
            throw new SyntaxError("Error parsing JSON, source is not valid.")
        }
    };
    $.quoteString = function (string) {
        if (string.match(escapeable)) {
            return '"' + string.replace(escapeable, function (a) {
                var c = meta[a];
                if (typeof c === "string") {
                    return c
                }
                c = a.charCodeAt();
                return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
            }) + '"'
        }
        return '"' + string + '"'
    }
})(jQuery);
(function (a, b) {
    a.CookieJar = {
        options: {},
        appendString: "__NYTMM_",
        defaultOptions: {
            expires: 3600,
            path: "",
            domain: "",
            secure: ""
        },
        init: function (d) {
            this.options = b.extend({}, this.defaultOptions, d);
            if (this.options.expires != "") {
                var c = new Date();
                c = new Date(c.getTime() + (this.options.expires * 1000));
                this.options.expires = "; expires=" + c.toGMTString()
            }
            if (this.options.path != "") {
                this.options.path = "; path=" + escape(this.options.path)
            }
            if (this.options.domain != "") {
                this.options.domain = "; domain=" + escape(this.options.domain)
            }
            if (this.options.secure == "secure") {
                this.options.secure = "; secure"
            } else {
                this.options.secure = ""
            }
            return this
        },
        set: function (c, g) {
            var c = this.appendString + c;
            var d = this.options;
            var f = typeof g;
            switch (f) {
                case "undefined":
                case "function":
                case "unknown":
                    return false;
                case "boolean":
                case "string":
                case "number":
                    g = String(g.toString())
            }
            var j = c + "=" + escape(b.toJSON(g));
            try {
                document.cookie = j + d.expires + d.path + d.domain + d.secure
            } catch (h) {
                return false
            }
            return true
        },
        remove: function (f) {
            var f = this.appendString + f;
            var g = this.options;
            try {
                var d = new Date();
                d.setTime(d.getTime() - (3600 * 1000));
                var c = "; expires=" + d.toGMTString();
                document.cookie = f + "=" + c + g.path + g.domain + g.secure
            } catch (h) {
                return false
            }
            return true
        },
        get: function (c) {
            var c = this.appendString + c;
            var d = document.cookie.match(c + "=(.*?)(;|$)");
            if (d) {
                return b.evalJSON((unescape(d[1])))
            } else {
                return null
            }
        },
        empty: function () {
            var d = this.getKeys();
            var c = d.length;
            for (i = 0; i < c; i++) {
                this.remove(d[i])
            }
        },
        getPack: function () {
            var d = {};
            var e = this.getKeys();
            var c = e.length;
            for (i = 0; i < c; i++) {
                d[e[i]] = this.get(e[i])
            }
            return d
        },
        getKeys: function () {
            var e = [];
            var d = /[^=; ]+(?=\=)/g;
            var f = document.cookie;
            var c = new RegExp("^" + this.appendString);
            while ((match = d.exec(f)) != undefined) {
                if (c.test(match[0].trim())) {
                    e.push(match[0].trim().replace(this.appendString, ""))
                }
            }
            return e
        }
    }
})(NYTD.NYTMM, jQuery);
(function (a, b, d) {
    var c = {
        init: function (e) {
            this.opts = b.extend(true, {
                mode: "production",
                spoofIos: false,
                spoofTouch: false,
                spoofDesktop: false,
                spoofIe: false
            }, e);
            this.$html = b("html");
            this.$head = b("head");
            this.opts.presentationType = this.determinePresentationType();
            this.opts.browser = this.browser;
            this.setEnv();
            a.Avalanche.init(this.opts)
        },
        determinePresentationType: function () {
            var e = navigator.userAgent.toLowerCase();
            this.browser = {
                isAndroid: (e.match(/android/i) !== null),
                isBustedAndroid: (e.match(/android 2\.[12]/) !== null),
                isChrome: (e.match(/chrome/gi) !== null),
                isFirefox: (e.match(/firefox/gi) !== null),
                isWebkit: (e.match(/webkit/gi) !== null),
                isOpera: (e.match(/opera/gi) !== null)
            };
            this.browser.isGecko = (e.match(/gecko/gi) !== null) && !this.browser.isWebkit;
            var f = "desktop";
            if (NYTD.NYTMM.iOS) {
                f = (NYTD.NYTMM.iOSInfo.version >= 6 && NYTD.NYTMM.iOSInfo.device == "iPad") ? "ios" : "touch"
            } else {
                if (this.browser.isAndroid || this.browser.isBustedAndroid) {
                    f = "touch"
                } else {
                    if (NYTMM_IE) {
                        f = "ie"
                    }
                }
            } if (this.opts.spoofIos) {
                f = "ios"
            }
            if (this.opts.spoofTouch) {
                f = "touch"
            }
            if (this.opts.spoofDesktop) {
                f = "desktop"
            }
            if (this.opts.spoofIe) {
                f = "ie"
            }
            return f
        },
        setEnv: function () {
            if (this.opts.presentationType === "ios" || this.opts.presentationType === "touch") {
                this.$html.addClass("nytmm_avalanche_touch");
                if (this.opts.presentationType === "touch") {
                    this.$html.addClass("nytmm_avalanche_touch_low")
                }
            } else {
                this.$html.addClass("nytmm_avalanche_desktop")
            }
            this.$html.addClass("nytmm_avalanche_" + this.opts.presentationType + " nytmm_avalanche_" + this.opts.mode);
            if (this.opts.presentationType === "ios" || this.opts.presentationType === "touch") {
                if (NYTD.NYTMM.iOS) {
                    this.$head.append('<meta name="viewport" content="width=device-width,maximum-scale=1.0, user-scalable=no"><meta name="apple-mobile-web-app-capable" content="yes">')
                } else {
                    this.$head.append('<meta name="viewport" content="width=device-width,maximum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no">')
                }
            }
            if (NYTD.NYTMM.Device.features.isRetina()) {
                this.$html.addClass("nytmm_avalanche_retina")
            }
            if (b.address.parameter("source") && b.address.parameter("source") == "app") {
                this.$html.addClass("nytmm_avalanche_inapp")
            }
        }
    };
    b(function () {
        c.init()
    })
})(NYTD.NYTMM, jQuery || NYTD.jQuery);
