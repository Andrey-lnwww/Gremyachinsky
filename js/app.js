(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) {
                document.addEventListener("click", (function(e) {
                    if (bodyLockStatus && e.target.closest(".icon-menu")) {
                        bodyLockToggle();
                        document.documentElement.classList.toggle("menu-open");
                    }
                }));
                const menuLinks = document.querySelectorAll(".menu__link");
                if (menuLinks && window.innerWidth <= 992) menuLinks.forEach((i => {
                    i.addEventListener("click", (e => {
                        menuClose();
                    }));
                }));
            }
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoblock_gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Проснулся, построил селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                    _slideToggle(selectOptions, originalSelect.dataset.speed);
                }
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заполните атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                let selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : "";
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">` : "";
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += selectOptionsScroll ? `</div>` : "";
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                if (originalSelect.multiple) {
                    optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                    const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                    originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                        originalSelectSelectedItem.removeAttribute("selected");
                    }));
                    const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                    selectSelectedItems.forEach((selectSelectedItems => {
                        originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                    }));
                } else {
                    if (!originalSelect.hasAttribute("data-show-selected")) {
                        if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                        optionItem.hidden = true;
                    }
                    originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                    this.selectAction(selectItem);
                }
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setSelectChange(originalSelect);
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption}`);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? FLS(`[select]: ${message}`) : null;
            }
        }
        flsModules.select = new SelectConstructor({});
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector = "") {
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes = []) {
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.el);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.el, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex !== activeIndex && realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(slideIndexLastInView - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && i > slideIndexLastInView) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix({slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = {}) {
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                    }
                } else if (setTranslate) swiper.slideToLoop(slideRealIndex, 0, false, true);
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    slideTo: false,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave" ].includes(event.type)) {
                const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor(...args) {
                let el;
                let params;
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                        const slides = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.shadowEl) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement ? el : wrapperEl,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation({swiper, extendParams, on, emit}) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.shadowRoot.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function initSliders() {
            if (document.querySelector(".vacancies__slider")) new core(".vacancies__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                spaceBetween: 40,
                watchOverflow: true,
                autoHeight: true,
                speed: 800,
                grabCursor: true,
                observeSlideChildren: true,
                slideToClickedSlide: true,
                lazy: true,
                watchOverflow: true,
                watchSlidesProgress: true,
                resizeObserver: true,
                navigation: {
                    prevEl: ".vacancies__nav-prev",
                    nextEl: ".vacancies__nav-next"
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        window.addEventListener("DOMContentLoaded", (() => {
            const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
                let swiper;
                breakpoint = window.matchMedia(breakpoint);
                const enableSwiper = function(className, settings) {
                    swiper = new core(className, settings);
                    if (callback) callback(swiper);
                };
                const checker = function() {
                    if (breakpoint.matches) return enableSwiper(swiperClass, swiperSettings); else {
                        if (swiper !== void 0) swiper.destroy(true, true);
                        return;
                    }
                };
                breakpoint.addEventListener("change", checker);
                checker();
            };
            resizableSwiper("(max-width: 992px)", ".production__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                spaceBetween: 20,
                speed: 800,
                grabCursor: true,
                observeSlideChildren: true,
                slideToClickedSlide: true,
                lazy: true,
                watchOverflow: true,
                navigation: {
                    prevEl: ".production__nav-prev",
                    nextEl: ".production__nav-next"
                }
            });
            resizableSwiper("(max-width: 992px)", ".news__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                spaceBetween: 40,
                speed: 800,
                grabCursor: true,
                observeSlideChildren: true,
                slideToClickedSlide: true,
                lazy: true,
                watchOverflow: true
            });
        }));
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class parallax_Parallax {
            constructor(elements) {
                if (elements.length) this.elements = Array.from(elements).map((el => new parallax_Parallax.Each(el, this.options)));
            }
            destroyEvents() {
                this.elements.forEach((el => {
                    el.destroyEvents();
                }));
            }
            setEvents() {
                this.elements.forEach((el => {
                    el.setEvents();
                }));
            }
        }
        parallax_Parallax.Each = class {
            constructor(parent) {
                this.parent = parent;
                this.elements = this.parent.querySelectorAll("[data-prlx]");
                this.animation = this.animationFrame.bind(this);
                this.offset = 0;
                this.value = 0;
                this.smooth = parent.dataset.prlxSmooth ? Number(parent.dataset.prlxSmooth) : 15;
                this.setEvents();
            }
            setEvents() {
                this.animationID = window.requestAnimationFrame(this.animation);
            }
            destroyEvents() {
                window.cancelAnimationFrame(this.animationID);
            }
            animationFrame() {
                const topToWindow = this.parent.getBoundingClientRect().top;
                const heightParent = this.parent.offsetHeight;
                const heightWindow = window.innerHeight;
                const positionParent = {
                    top: topToWindow - heightWindow,
                    bottom: topToWindow + heightParent
                };
                const centerPoint = this.parent.dataset.prlxCenter ? this.parent.dataset.prlxCenter : "center";
                if (positionParent.top < 30 && positionParent.bottom > -30) switch (centerPoint) {
                  case "top":
                    this.offset = -1 * topToWindow;
                    break;

                  case "center":
                    this.offset = heightWindow / 2 - (topToWindow + heightParent / 2);
                    break;

                  case "bottom":
                    this.offset = heightWindow - (topToWindow + heightParent);
                    break;
                }
                this.value += (this.offset - this.value) / this.smooth;
                this.animationID = window.requestAnimationFrame(this.animation);
                this.elements.forEach((el => {
                    const parameters = {
                        axis: el.dataset.axis ? el.dataset.axis : "v",
                        direction: el.dataset.direction ? el.dataset.direction + "1" : "-1",
                        coefficient: el.dataset.coefficient ? Number(el.dataset.coefficient) : 5,
                        additionalProperties: el.dataset.properties ? el.dataset.properties : ""
                    };
                    this.parameters(el, parameters);
                }));
            }
            parameters(el, parameters) {
                if (parameters.axis == "v") el.style.transform = `translate3D(0, ${(parameters.direction * (this.value / parameters.coefficient)).toFixed(2)}px,0) ${parameters.additionalProperties}`; else if (parameters.axis == "h") el.style.transform = `translate3D(${(parameters.direction * (this.value / parameters.coefficient)).toFixed(2)}px,0,0) ${parameters.additionalProperties}`;
            }
        };
        if (document.querySelectorAll("[data-prlx-parent]")) flsModules.parallax = new parallax_Parallax(document.querySelectorAll("[data-prlx-parent]"));
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) return {};
            var target = {};
            var sourceKeys = Object.keys(source);
            var key, i;
            for (i = 0; i < sourceKeys.length; i++) {
                key = sourceKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                target[key] = source[key];
            }
            return target;
        }
        function IMask(el) {
            let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return new IMask.InputMask(el, opts);
        }
        class ChangeDetails {
            constructor(details) {
                Object.assign(this, {
                    inserted: "",
                    rawInserted: "",
                    skip: false,
                    tailShift: 0
                }, details);
            }
            aggregate(details) {
                this.rawInserted += details.rawInserted;
                this.skip = this.skip || details.skip;
                this.inserted += details.inserted;
                this.tailShift += details.tailShift;
                return this;
            }
            get offset() {
                return this.tailShift + this.inserted.length;
            }
        }
        IMask.ChangeDetails = ChangeDetails;
        function isString(str) {
            return typeof str === "string" || str instanceof String;
        }
        const DIRECTION = {
            NONE: "NONE",
            LEFT: "LEFT",
            FORCE_LEFT: "FORCE_LEFT",
            RIGHT: "RIGHT",
            FORCE_RIGHT: "FORCE_RIGHT"
        };
        function forceDirection(direction) {
            switch (direction) {
              case DIRECTION.LEFT:
                return DIRECTION.FORCE_LEFT;

              case DIRECTION.RIGHT:
                return DIRECTION.FORCE_RIGHT;

              default:
                return direction;
            }
        }
        function escapeRegExp(str) {
            return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        function normalizePrepare(prep) {
            return Array.isArray(prep) ? prep : [ prep, new ChangeDetails ];
        }
        function objectIncludes(b, a) {
            if (a === b) return true;
            var i, arrA = Array.isArray(a), arrB = Array.isArray(b);
            if (arrA && arrB) {
                if (a.length != b.length) return false;
                for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
                return true;
            }
            if (arrA != arrB) return false;
            if (a && b && typeof a === "object" && typeof b === "object") {
                var dateA = a instanceof Date, dateB = b instanceof Date;
                if (dateA && dateB) return a.getTime() == b.getTime();
                if (dateA != dateB) return false;
                var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
                if (regexpA && regexpB) return a.toString() == b.toString();
                if (regexpA != regexpB) return false;
                var keys = Object.keys(a);
                for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
                for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
                return true;
            } else if (a && b && typeof a === "function" && typeof b === "function") return a.toString() === b.toString();
            return false;
        }
        class ActionDetails {
            constructor(value, cursorPos, oldValue, oldSelection) {
                this.value = value;
                this.cursorPos = cursorPos;
                this.oldValue = oldValue;
                this.oldSelection = oldSelection;
                while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) --this.oldSelection.start;
            }
            get startChangePos() {
                return Math.min(this.cursorPos, this.oldSelection.start);
            }
            get insertedCount() {
                return this.cursorPos - this.startChangePos;
            }
            get inserted() {
                return this.value.substr(this.startChangePos, this.insertedCount);
            }
            get removedCount() {
                return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
            }
            get removed() {
                return this.oldValue.substr(this.startChangePos, this.removedCount);
            }
            get head() {
                return this.value.substring(0, this.startChangePos);
            }
            get tail() {
                return this.value.substring(this.startChangePos + this.insertedCount);
            }
            get removeDirection() {
                if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;
                return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
            }
        }
        class ContinuousTailDetails {
            constructor() {
                let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                let from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                let stop = arguments.length > 2 ? arguments[2] : void 0;
                this.value = value;
                this.from = from;
                this.stop = stop;
            }
            toString() {
                return this.value;
            }
            extend(tail) {
                this.value += String(tail);
            }
            appendTo(masked) {
                return masked.append(this.toString(), {
                    tail: true
                }).aggregate(masked._appendPlaceholder());
            }
            get state() {
                return {
                    value: this.value,
                    from: this.from,
                    stop: this.stop
                };
            }
            set state(state) {
                Object.assign(this, state);
            }
            unshift(beforePos) {
                if (!this.value.length || beforePos != null && this.from >= beforePos) return "";
                const shiftChar = this.value[0];
                this.value = this.value.slice(1);
                return shiftChar;
            }
            shift() {
                if (!this.value.length) return "";
                const shiftChar = this.value[this.value.length - 1];
                this.value = this.value.slice(0, -1);
                return shiftChar;
            }
        }
        class Masked {
            constructor(opts) {
                this._value = "";
                this._update(Object.assign({}, Masked.DEFAULTS, opts));
                this.isInitialized = true;
            }
            updateOptions(opts) {
                if (!Object.keys(opts).length) return;
                this.withValueRefresh(this._update.bind(this, opts));
            }
            _update(opts) {
                Object.assign(this, opts);
            }
            get state() {
                return {
                    _value: this.value
                };
            }
            set state(state) {
                this._value = state._value;
            }
            reset() {
                this._value = "";
            }
            get value() {
                return this._value;
            }
            set value(value) {
                this.resolve(value);
            }
            resolve(value) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    input: true
                };
                this.reset();
                this.append(value, flags, "");
                this.doCommit();
                return this.value;
            }
            get unmaskedValue() {
                return this.value;
            }
            set unmaskedValue(value) {
                this.reset();
                this.append(value, {}, "");
                this.doCommit();
            }
            get typedValue() {
                return this.doParse(this.value);
            }
            set typedValue(value) {
                this.value = this.doFormat(value);
            }
            get rawInputValue() {
                return this.extractInput(0, this.value.length, {
                    raw: true
                });
            }
            set rawInputValue(value) {
                this.reset();
                this.append(value, {
                    raw: true
                }, "");
                this.doCommit();
            }
            get displayValue() {
                return this.value;
            }
            get isComplete() {
                return true;
            }
            get isFilled() {
                return this.isComplete;
            }
            nearestInputPos(cursorPos, direction) {
                return cursorPos;
            }
            totalInputPositions() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                return Math.min(this.value.length, toPos - fromPos);
            }
            extractInput() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                return this.value.slice(fromPos, toPos);
            }
            extractTail() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
            }
            appendTail(tail) {
                if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                return tail.appendTo(this);
            }
            _appendCharRaw(ch) {
                if (!ch) return new ChangeDetails;
                this._value += ch;
                return new ChangeDetails({
                    inserted: ch,
                    rawInserted: ch
                });
            }
            _appendChar(ch) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                let checkTail = arguments.length > 2 ? arguments[2] : void 0;
                const consistentState = this.state;
                let details;
                [ch, details] = normalizePrepare(this.doPrepare(ch, flags));
                details = details.aggregate(this._appendCharRaw(ch, flags));
                if (details.inserted) {
                    let consistentTail;
                    let appended = this.doValidate(flags) !== false;
                    if (appended && checkTail != null) {
                        const beforeTailState = this.state;
                        if (this.overwrite === true) {
                            consistentTail = checkTail.state;
                            checkTail.unshift(this.value.length - details.tailShift);
                        }
                        let tailDetails = this.appendTail(checkTail);
                        appended = tailDetails.rawInserted === checkTail.toString();
                        if (!(appended && tailDetails.inserted) && this.overwrite === "shift") {
                            this.state = beforeTailState;
                            consistentTail = checkTail.state;
                            checkTail.shift();
                            tailDetails = this.appendTail(checkTail);
                            appended = tailDetails.rawInserted === checkTail.toString();
                        }
                        if (appended && tailDetails.inserted) this.state = beforeTailState;
                    }
                    if (!appended) {
                        details = new ChangeDetails;
                        this.state = consistentState;
                        if (checkTail && consistentTail) checkTail.state = consistentTail;
                    }
                }
                return details;
            }
            _appendPlaceholder() {
                return new ChangeDetails;
            }
            _appendEager() {
                return new ChangeDetails;
            }
            append(str, flags, tail) {
                if (!isString(str)) throw new Error("value should be string");
                const details = new ChangeDetails;
                const checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
                if (flags !== null && flags !== void 0 && flags.tail) flags._beforeTailState = this.state;
                for (let ci = 0; ci < str.length; ++ci) {
                    const d = this._appendChar(str[ci], flags, checkTail);
                    if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
                    details.aggregate(d);
                }
                if ((this.eager === true || this.eager === "append") && flags !== null && flags !== void 0 && flags.input && str) details.aggregate(this._appendEager());
                if (checkTail != null) details.tailShift += this.appendTail(checkTail).tailShift;
                return details;
            }
            remove() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
                return new ChangeDetails;
            }
            withValueRefresh(fn) {
                if (this._refreshing || !this.isInitialized) return fn();
                this._refreshing = true;
                const rawInput = this.rawInputValue;
                const value = this.value;
                const ret = fn();
                this.rawInputValue = rawInput;
                if (this.value && this.value !== value && value.indexOf(this.value) === 0) this.append(value.slice(this.value.length), {}, "");
                delete this._refreshing;
                return ret;
            }
            runIsolated(fn) {
                if (this._isolated || !this.isInitialized) return fn(this);
                this._isolated = true;
                const state = this.state;
                const ret = fn(this);
                this.state = state;
                delete this._isolated;
                return ret;
            }
            doSkipInvalid(ch) {
                return this.skipInvalid;
            }
            doPrepare(str) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return this.prepare ? this.prepare(str, this, flags) : str;
            }
            doValidate(flags) {
                return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
            }
            doCommit() {
                if (this.commit) this.commit(this.value, this);
            }
            doFormat(value) {
                return this.format ? this.format(value, this) : value;
            }
            doParse(str) {
                return this.parse ? this.parse(str, this) : str;
            }
            splice(start, deleteCount, inserted, removeDirection) {
                let flags = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                    input: true
                };
                const tailPos = start + deleteCount;
                const tail = this.extractTail(tailPos);
                const eagerRemove = this.eager === true || this.eager === "remove";
                let oldRawValue;
                if (eagerRemove) {
                    removeDirection = forceDirection(removeDirection);
                    oldRawValue = this.extractInput(0, tailPos, {
                        raw: true
                    });
                }
                let startChangePos = start;
                const details = new ChangeDetails;
                if (removeDirection !== DIRECTION.NONE) {
                    startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? DIRECTION.NONE : removeDirection);
                    details.tailShift = startChangePos - start;
                }
                details.aggregate(this.remove(startChangePos));
                if (eagerRemove && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) if (removeDirection === DIRECTION.FORCE_LEFT) {
                    let valLength;
                    while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) details.aggregate(new ChangeDetails({
                        tailShift: -1
                    })).aggregate(this.remove(valLength - 1));
                } else if (removeDirection === DIRECTION.FORCE_RIGHT) tail.unshift();
                return details.aggregate(this.append(inserted, flags, tail));
            }
            maskEquals(mask) {
                return this.mask === mask;
            }
            typedValueEquals(value) {
                const tval = this.typedValue;
                return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
            }
        }
        Masked.DEFAULTS = {
            format: String,
            parse: v => v,
            skipInvalid: true
        };
        Masked.EMPTY_VALUES = [ void 0, null, "" ];
        IMask.Masked = Masked;
        function maskedClass(mask) {
            if (mask == null) throw new Error("mask property should be defined");
            if (mask instanceof RegExp) return IMask.MaskedRegExp;
            if (isString(mask)) return IMask.MaskedPattern;
            if (mask instanceof Date || mask === Date) return IMask.MaskedDate;
            if (mask instanceof Number || typeof mask === "number" || mask === Number) return IMask.MaskedNumber;
            if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
            if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
            if (mask instanceof IMask.Masked) return mask.constructor;
            if (mask instanceof Function) return IMask.MaskedFunction;
            console.warn("Mask not found for mask", mask);
            return IMask.Masked;
        }
        function createMask(opts) {
            if (IMask.Masked && opts instanceof IMask.Masked) return opts;
            opts = Object.assign({}, opts);
            const mask = opts.mask;
            if (IMask.Masked && mask instanceof IMask.Masked) return mask;
            const MaskedClass = maskedClass(mask);
            if (!MaskedClass) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
            return new MaskedClass(opts);
        }
        IMask.createMask = createMask;
        const _excluded = [ "parent", "isOptional", "placeholderChar", "displayChar", "lazy", "eager" ];
        const DEFAULT_INPUT_DEFINITIONS = {
            0: /\d/,
            a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            "*": /./
        };
        class PatternInputDefinition {
            constructor(opts) {
                const {parent, isOptional, placeholderChar, displayChar, lazy, eager} = opts, maskOpts = _objectWithoutPropertiesLoose(opts, _excluded);
                this.masked = createMask(maskOpts);
                Object.assign(this, {
                    parent,
                    isOptional,
                    placeholderChar,
                    displayChar,
                    lazy,
                    eager
                });
            }
            reset() {
                this.isFilled = false;
                this.masked.reset();
            }
            remove() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                if (fromPos === 0 && toPos >= 1) {
                    this.isFilled = false;
                    return this.masked.remove(fromPos, toPos);
                }
                return new ChangeDetails;
            }
            get value() {
                return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
            }
            get unmaskedValue() {
                return this.masked.unmaskedValue;
            }
            get displayValue() {
                return this.masked.value && this.displayChar || this.value;
            }
            get isComplete() {
                return Boolean(this.masked.value) || this.isOptional;
            }
            _appendChar(ch) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (this.isFilled) return new ChangeDetails;
                const state = this.masked.state;
                const details = this.masked._appendChar(ch, flags);
                if (details.inserted && this.doValidate(flags) === false) {
                    details.inserted = details.rawInserted = "";
                    this.masked.state = state;
                }
                if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) details.inserted = this.placeholderChar;
                details.skip = !details.inserted && !this.isOptional;
                this.isFilled = Boolean(details.inserted);
                return details;
            }
            append() {
                return this.masked.append(...arguments);
            }
            _appendPlaceholder() {
                const details = new ChangeDetails;
                if (this.isFilled || this.isOptional) return details;
                this.isFilled = true;
                details.inserted = this.placeholderChar;
                return details;
            }
            _appendEager() {
                return new ChangeDetails;
            }
            extractTail() {
                return this.masked.extractTail(...arguments);
            }
            appendTail() {
                return this.masked.appendTail(...arguments);
            }
            extractInput() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                let flags = arguments.length > 2 ? arguments[2] : void 0;
                return this.masked.extractInput(fromPos, toPos, flags);
            }
            nearestInputPos(cursorPos) {
                let direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
                const minPos = 0;
                const maxPos = this.value.length;
                const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
                switch (direction) {
                  case DIRECTION.LEFT:
                  case DIRECTION.FORCE_LEFT:
                    return this.isComplete ? boundPos : minPos;

                  case DIRECTION.RIGHT:
                  case DIRECTION.FORCE_RIGHT:
                    return this.isComplete ? boundPos : maxPos;

                  case DIRECTION.NONE:
                  default:
                    return boundPos;
                }
            }
            totalInputPositions() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                return this.value.slice(fromPos, toPos).length;
            }
            doValidate() {
                return this.masked.doValidate(...arguments) && (!this.parent || this.parent.doValidate(...arguments));
            }
            doCommit() {
                this.masked.doCommit();
            }
            get state() {
                return {
                    masked: this.masked.state,
                    isFilled: this.isFilled
                };
            }
            set state(state) {
                this.masked.state = state.masked;
                this.isFilled = state.isFilled;
            }
        }
        class PatternFixedDefinition {
            constructor(opts) {
                Object.assign(this, opts);
                this._value = "";
                this.isFixed = true;
            }
            get value() {
                return this._value;
            }
            get unmaskedValue() {
                return this.isUnmasking ? this.value : "";
            }
            get displayValue() {
                return this.value;
            }
            reset() {
                this._isRawInput = false;
                this._value = "";
            }
            remove() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
                this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
                if (!this._value) this._isRawInput = false;
                return new ChangeDetails;
            }
            nearestInputPos(cursorPos) {
                let direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
                const minPos = 0;
                const maxPos = this._value.length;
                switch (direction) {
                  case DIRECTION.LEFT:
                  case DIRECTION.FORCE_LEFT:
                    return minPos;

                  case DIRECTION.NONE:
                  case DIRECTION.RIGHT:
                  case DIRECTION.FORCE_RIGHT:
                  default:
                    return maxPos;
                }
            }
            totalInputPositions() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
                return this._isRawInput ? toPos - fromPos : 0;
            }
            extractInput() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
                let flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
            }
            get isComplete() {
                return true;
            }
            get isFilled() {
                return Boolean(this._value);
            }
            _appendChar(ch) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const details = new ChangeDetails;
                if (this.isFilled) return details;
                const appendEager = this.eager === true || this.eager === "append";
                const appended = this.char === ch;
                const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
                if (isResolved) details.rawInserted = this.char;
                this._value = details.inserted = this.char;
                this._isRawInput = isResolved && (flags.raw || flags.input);
                return details;
            }
            _appendEager() {
                return this._appendChar(this.char, {
                    tail: true
                });
            }
            _appendPlaceholder() {
                const details = new ChangeDetails;
                if (this.isFilled) return details;
                this._value = details.inserted = this.char;
                return details;
            }
            extractTail() {
                arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                return new ContinuousTailDetails("");
            }
            appendTail(tail) {
                if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                return tail.appendTo(this);
            }
            append(str, flags, tail) {
                const details = this._appendChar(str[0], flags);
                if (tail != null) details.tailShift += this.appendTail(tail).tailShift;
                return details;
            }
            doCommit() {}
            get state() {
                return {
                    _value: this._value,
                    _isRawInput: this._isRawInput
                };
            }
            set state(state) {
                Object.assign(this, state);
            }
        }
        const chunk_tail_details_excluded = [ "chunks" ];
        class ChunksTailDetails {
            constructor() {
                let chunks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                let from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                this.chunks = chunks;
                this.from = from;
            }
            toString() {
                return this.chunks.map(String).join("");
            }
            extend(tailChunk) {
                if (!String(tailChunk)) return;
                if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
                const lastChunk = this.chunks[this.chunks.length - 1];
                const extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && tailChunk.from === lastChunk.from + lastChunk.toString().length;
                if (tailChunk instanceof ContinuousTailDetails) if (extendLast) lastChunk.extend(tailChunk.toString()); else this.chunks.push(tailChunk); else if (tailChunk instanceof ChunksTailDetails) {
                    if (tailChunk.stop == null) {
                        let firstTailChunk;
                        while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
                            firstTailChunk = tailChunk.chunks.shift();
                            firstTailChunk.from += tailChunk.from;
                            this.extend(firstTailChunk);
                        }
                    }
                    if (tailChunk.toString()) {
                        tailChunk.stop = tailChunk.blockIndex;
                        this.chunks.push(tailChunk);
                    }
                }
            }
            appendTo(masked) {
                if (!(masked instanceof IMask.MaskedPattern)) {
                    const tail = new ContinuousTailDetails(this.toString());
                    return tail.appendTo(masked);
                }
                const details = new ChangeDetails;
                for (let ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
                    const chunk = this.chunks[ci];
                    const lastBlockIter = masked._mapPosToBlock(masked.value.length);
                    const stop = chunk.stop;
                    let chunkBlock;
                    if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
                        if (chunk instanceof ChunksTailDetails || masked._stops.indexOf(stop) >= 0) {
                            const phDetails = masked._appendPlaceholder(stop);
                            details.aggregate(phDetails);
                        }
                        chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
                    }
                    if (chunkBlock) {
                        const tailDetails = chunkBlock.appendTail(chunk);
                        tailDetails.skip = false;
                        details.aggregate(tailDetails);
                        masked._value += tailDetails.inserted;
                        const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                        if (remainChars) details.aggregate(masked.append(remainChars, {
                            tail: true
                        }));
                    } else details.aggregate(masked.append(chunk.toString(), {
                        tail: true
                    }));
                }
                return details;
            }
            get state() {
                return {
                    chunks: this.chunks.map((c => c.state)),
                    from: this.from,
                    stop: this.stop,
                    blockIndex: this.blockIndex
                };
            }
            set state(state) {
                const {chunks} = state, props = _objectWithoutPropertiesLoose(state, chunk_tail_details_excluded);
                Object.assign(this, props);
                this.chunks = chunks.map((cstate => {
                    const chunk = "chunks" in cstate ? new ChunksTailDetails : new ContinuousTailDetails;
                    chunk.state = cstate;
                    return chunk;
                }));
            }
            unshift(beforePos) {
                if (!this.chunks.length || beforePos != null && this.from >= beforePos) return "";
                const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
                let ci = 0;
                while (ci < this.chunks.length) {
                    const chunk = this.chunks[ci];
                    const shiftChar = chunk.unshift(chunkShiftPos);
                    if (chunk.toString()) {
                        if (!shiftChar) break;
                        ++ci;
                    } else this.chunks.splice(ci, 1);
                    if (shiftChar) return shiftChar;
                }
                return "";
            }
            shift() {
                if (!this.chunks.length) return "";
                let ci = this.chunks.length - 1;
                while (0 <= ci) {
                    const chunk = this.chunks[ci];
                    const shiftChar = chunk.shift();
                    if (chunk.toString()) {
                        if (!shiftChar) break;
                        --ci;
                    } else this.chunks.splice(ci, 1);
                    if (shiftChar) return shiftChar;
                }
                return "";
            }
        }
        class PatternCursor {
            constructor(masked, pos) {
                this.masked = masked;
                this._log = [];
                const {offset, index} = masked._mapPosToBlock(pos) || (pos < 0 ? {
                    index: 0,
                    offset: 0
                } : {
                    index: this.masked._blocks.length,
                    offset: 0
                });
                this.offset = offset;
                this.index = index;
                this.ok = false;
            }
            get block() {
                return this.masked._blocks[this.index];
            }
            get pos() {
                return this.masked._blockStartPos(this.index) + this.offset;
            }
            get state() {
                return {
                    index: this.index,
                    offset: this.offset,
                    ok: this.ok
                };
            }
            set state(s) {
                Object.assign(this, s);
            }
            pushState() {
                this._log.push(this.state);
            }
            popState() {
                const s = this._log.pop();
                this.state = s;
                return s;
            }
            bindBlock() {
                if (this.block) return;
                if (this.index < 0) {
                    this.index = 0;
                    this.offset = 0;
                }
                if (this.index >= this.masked._blocks.length) {
                    this.index = this.masked._blocks.length - 1;
                    this.offset = this.block.value.length;
                }
            }
            _pushLeft(fn) {
                this.pushState();
                for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
                    var _this$block;
                    if (fn()) return this.ok = true;
                }
                return this.ok = false;
            }
            _pushRight(fn) {
                this.pushState();
                for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (fn()) return this.ok = true;
                return this.ok = false;
            }
            pushLeftBeforeFilled() {
                return this._pushLeft((() => {
                    if (this.block.isFixed || !this.block.value) return;
                    this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_LEFT);
                    if (this.offset !== 0) return true;
                }));
            }
            pushLeftBeforeInput() {
                return this._pushLeft((() => {
                    if (this.block.isFixed) return;
                    this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
                    return true;
                }));
            }
            pushLeftBeforeRequired() {
                return this._pushLeft((() => {
                    if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
                    this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
                    return true;
                }));
            }
            pushRightBeforeFilled() {
                return this._pushRight((() => {
                    if (this.block.isFixed || !this.block.value) return;
                    this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_RIGHT);
                    if (this.offset !== this.block.value.length) return true;
                }));
            }
            pushRightBeforeInput() {
                return this._pushRight((() => {
                    if (this.block.isFixed) return;
                    this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
                    return true;
                }));
            }
            pushRightBeforeRequired() {
                return this._pushRight((() => {
                    if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
                    this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
                    return true;
                }));
            }
        }
        class MaskedRegExp extends Masked {
            _update(opts) {
                if (opts.mask) opts.validate = value => value.search(opts.mask) >= 0;
                super._update(opts);
            }
        }
        IMask.MaskedRegExp = MaskedRegExp;
        const pattern_excluded = [ "_blocks" ];
        class MaskedPattern extends Masked {
            constructor() {
                let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
                super(Object.assign({}, MaskedPattern.DEFAULTS, opts));
            }
            _update() {
                let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                opts.definitions = Object.assign({}, this.definitions, opts.definitions);
                super._update(opts);
                this._rebuildMask();
            }
            _rebuildMask() {
                const defs = this.definitions;
                this._blocks = [];
                this._stops = [];
                this._maskedBlocks = {};
                let pattern = this.mask;
                if (!pattern || !defs) return;
                let unmaskingBlock = false;
                let optionalBlock = false;
                for (let i = 0; i < pattern.length; ++i) {
                    var _defs$char, _defs$char2;
                    if (this.blocks) {
                        const p = pattern.slice(i);
                        const bNames = Object.keys(this.blocks).filter((bName => p.indexOf(bName) === 0));
                        bNames.sort(((a, b) => b.length - a.length));
                        const bName = bNames[0];
                        if (bName) {
                            const maskedBlock = createMask(Object.assign({
                                parent: this,
                                lazy: this.lazy,
                                eager: this.eager,
                                placeholderChar: this.placeholderChar,
                                displayChar: this.displayChar,
                                overwrite: this.overwrite
                            }, this.blocks[bName]));
                            if (maskedBlock) {
                                this._blocks.push(maskedBlock);
                                if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
                                this._maskedBlocks[bName].push(this._blocks.length - 1);
                            }
                            i += bName.length - 1;
                            continue;
                        }
                    }
                    let char = pattern[i];
                    let isInput = char in defs;
                    if (char === MaskedPattern.STOP_CHAR) {
                        this._stops.push(this._blocks.length);
                        continue;
                    }
                    if (char === "{" || char === "}") {
                        unmaskingBlock = !unmaskingBlock;
                        continue;
                    }
                    if (char === "[" || char === "]") {
                        optionalBlock = !optionalBlock;
                        continue;
                    }
                    if (char === MaskedPattern.ESCAPE_CHAR) {
                        ++i;
                        char = pattern[i];
                        if (!char) break;
                        isInput = false;
                    }
                    const maskOpts = (_defs$char = defs[char]) !== null && _defs$char !== void 0 && _defs$char.mask && !(((_defs$char2 = defs[char]) === null || _defs$char2 === void 0 ? void 0 : _defs$char2.mask.prototype) instanceof IMask.Masked) ? defs[char] : {
                        mask: defs[char]
                    };
                    const def = isInput ? new PatternInputDefinition(Object.assign({
                        parent: this,
                        isOptional: optionalBlock,
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        displayChar: this.displayChar
                    }, maskOpts)) : new PatternFixedDefinition({
                        char,
                        eager: this.eager,
                        isUnmasking: unmaskingBlock
                    });
                    this._blocks.push(def);
                }
            }
            get state() {
                return Object.assign({}, super.state, {
                    _blocks: this._blocks.map((b => b.state))
                });
            }
            set state(state) {
                const {_blocks} = state, maskedState = _objectWithoutPropertiesLoose(state, pattern_excluded);
                this._blocks.forEach(((b, bi) => b.state = _blocks[bi]));
                super.state = maskedState;
            }
            reset() {
                super.reset();
                this._blocks.forEach((b => b.reset()));
            }
            get isComplete() {
                return this._blocks.every((b => b.isComplete));
            }
            get isFilled() {
                return this._blocks.every((b => b.isFilled));
            }
            get isFixed() {
                return this._blocks.every((b => b.isFixed));
            }
            get isOptional() {
                return this._blocks.every((b => b.isOptional));
            }
            doCommit() {
                this._blocks.forEach((b => b.doCommit()));
                super.doCommit();
            }
            get unmaskedValue() {
                return this._blocks.reduce(((str, b) => str += b.unmaskedValue), "");
            }
            set unmaskedValue(unmaskedValue) {
                super.unmaskedValue = unmaskedValue;
            }
            get value() {
                return this._blocks.reduce(((str, b) => str += b.value), "");
            }
            set value(value) {
                super.value = value;
            }
            get displayValue() {
                return this._blocks.reduce(((str, b) => str += b.displayValue), "");
            }
            appendTail(tail) {
                return super.appendTail(tail).aggregate(this._appendPlaceholder());
            }
            _appendEager() {
                var _this$_mapPosToBlock;
                const details = new ChangeDetails;
                let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
                if (startBlockIndex == null) return details;
                if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
                for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
                    const d = this._blocks[bi]._appendEager();
                    if (!d.inserted) break;
                    details.aggregate(d);
                }
                return details;
            }
            _appendCharRaw(ch) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const blockIter = this._mapPosToBlock(this.value.length);
                const details = new ChangeDetails;
                if (!blockIter) return details;
                for (let bi = blockIter.index; ;++bi) {
                    var _flags$_beforeTailSta, _flags$_beforeTailSta2;
                    const block = this._blocks[bi];
                    if (!block) break;
                    const blockDetails = block._appendChar(ch, Object.assign({}, flags, {
                        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2[bi]
                    }));
                    const skip = blockDetails.skip;
                    details.aggregate(blockDetails);
                    if (skip || blockDetails.rawInserted) break;
                }
                return details;
            }
            extractTail() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                const chunkTail = new ChunksTailDetails;
                if (fromPos === toPos) return chunkTail;
                this._forEachBlocksInRange(fromPos, toPos, ((b, bi, bFromPos, bToPos) => {
                    const blockChunk = b.extractTail(bFromPos, bToPos);
                    blockChunk.stop = this._findStopBefore(bi);
                    blockChunk.from = this._blockStartPos(bi);
                    if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
                    chunkTail.extend(blockChunk);
                }));
                return chunkTail;
            }
            extractInput() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                let flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                if (fromPos === toPos) return "";
                let input = "";
                this._forEachBlocksInRange(fromPos, toPos, ((b, _, fromPos, toPos) => {
                    input += b.extractInput(fromPos, toPos, flags);
                }));
                return input;
            }
            _findStopBefore(blockIndex) {
                let stopBefore;
                for (let si = 0; si < this._stops.length; ++si) {
                    const stop = this._stops[si];
                    if (stop <= blockIndex) stopBefore = stop; else break;
                }
                return stopBefore;
            }
            _appendPlaceholder(toBlockIndex) {
                const details = new ChangeDetails;
                if (this.lazy && toBlockIndex == null) return details;
                const startBlockIter = this._mapPosToBlock(this.value.length);
                if (!startBlockIter) return details;
                const startBlockIndex = startBlockIter.index;
                const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
                this._blocks.slice(startBlockIndex, endBlockIndex).forEach((b => {
                    if (!b.lazy || toBlockIndex != null) {
                        const args = b._blocks != null ? [ b._blocks.length ] : [];
                        const bDetails = b._appendPlaceholder(...args);
                        this._value += bDetails.inserted;
                        details.aggregate(bDetails);
                    }
                }));
                return details;
            }
            _mapPosToBlock(pos) {
                let accVal = "";
                for (let bi = 0; bi < this._blocks.length; ++bi) {
                    const block = this._blocks[bi];
                    const blockStartPos = accVal.length;
                    accVal += block.value;
                    if (pos <= accVal.length) return {
                        index: bi,
                        offset: pos - blockStartPos
                    };
                }
            }
            _blockStartPos(blockIndex) {
                return this._blocks.slice(0, blockIndex).reduce(((pos, b) => pos += b.value.length), 0);
            }
            _forEachBlocksInRange(fromPos) {
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                let fn = arguments.length > 2 ? arguments[2] : void 0;
                const fromBlockIter = this._mapPosToBlock(fromPos);
                if (fromBlockIter) {
                    const toBlockIter = this._mapPosToBlock(toPos);
                    const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
                    const fromBlockStartPos = fromBlockIter.offset;
                    const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
                    fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
                    if (toBlockIter && !isSameBlock) {
                        for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                        fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
                    }
                }
            }
            remove() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                const removeDetails = super.remove(fromPos, toPos);
                this._forEachBlocksInRange(fromPos, toPos, ((b, _, bFromPos, bToPos) => {
                    removeDetails.aggregate(b.remove(bFromPos, bToPos));
                }));
                return removeDetails;
            }
            nearestInputPos(cursorPos) {
                let direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
                if (!this._blocks.length) return 0;
                const cursor = new PatternCursor(this, cursorPos);
                if (direction === DIRECTION.NONE) {
                    if (cursor.pushRightBeforeInput()) return cursor.pos;
                    cursor.popState();
                    if (cursor.pushLeftBeforeInput()) return cursor.pos;
                    return this.value.length;
                }
                if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
                    if (direction === DIRECTION.LEFT) {
                        cursor.pushRightBeforeFilled();
                        if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                        cursor.popState();
                    }
                    cursor.pushLeftBeforeInput();
                    cursor.pushLeftBeforeRequired();
                    cursor.pushLeftBeforeFilled();
                    if (direction === DIRECTION.LEFT) {
                        cursor.pushRightBeforeInput();
                        cursor.pushRightBeforeRequired();
                        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                        cursor.popState();
                        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                        cursor.popState();
                    }
                    if (cursor.ok) return cursor.pos;
                    if (direction === DIRECTION.FORCE_LEFT) return 0;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    return 0;
                }
                if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
                    cursor.pushRightBeforeInput();
                    cursor.pushRightBeforeRequired();
                    if (cursor.pushRightBeforeFilled()) return cursor.pos;
                    if (direction === DIRECTION.FORCE_RIGHT) return this.value.length;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
                }
                return cursorPos;
            }
            totalInputPositions() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                let total = 0;
                this._forEachBlocksInRange(fromPos, toPos, ((b, _, bFromPos, bToPos) => {
                    total += b.totalInputPositions(bFromPos, bToPos);
                }));
                return total;
            }
            maskedBlock(name) {
                return this.maskedBlocks(name)[0];
            }
            maskedBlocks(name) {
                const indices = this._maskedBlocks[name];
                if (!indices) return [];
                return indices.map((gi => this._blocks[gi]));
            }
        }
        MaskedPattern.DEFAULTS = {
            lazy: true,
            placeholderChar: "_"
        };
        MaskedPattern.STOP_CHAR = "`";
        MaskedPattern.ESCAPE_CHAR = "\\";
        MaskedPattern.InputDefinition = PatternInputDefinition;
        MaskedPattern.FixedDefinition = PatternFixedDefinition;
        IMask.MaskedPattern = MaskedPattern;
        class MaskedRange extends MaskedPattern {
            get _matchFrom() {
                return this.maxLength - String(this.from).length;
            }
            _update(opts) {
                opts = Object.assign({
                    to: this.to || 0,
                    from: this.from || 0,
                    maxLength: this.maxLength || 0
                }, opts);
                let maxLength = String(opts.to).length;
                if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
                opts.maxLength = maxLength;
                const fromStr = String(opts.from).padStart(maxLength, "0");
                const toStr = String(opts.to).padStart(maxLength, "0");
                let sameCharsCount = 0;
                while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
                opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(maxLength - sameCharsCount);
                super._update(opts);
            }
            get isComplete() {
                return super.isComplete && Boolean(this.value);
            }
            boundaries(str) {
                let minstr = "";
                let maxstr = "";
                const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
                if (num) {
                    minstr = "0".repeat(placeholder.length) + num;
                    maxstr = "9".repeat(placeholder.length) + num;
                }
                minstr = minstr.padEnd(this.maxLength, "0");
                maxstr = maxstr.padEnd(this.maxLength, "9");
                return [ minstr, maxstr ];
            }
            doPrepare(ch) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                let details;
                [ch, details] = normalizePrepare(super.doPrepare(ch.replace(/\D/g, ""), flags));
                if (!this.autofix || !ch) return ch;
                const fromStr = String(this.from).padStart(this.maxLength, "0");
                const toStr = String(this.to).padStart(this.maxLength, "0");
                let nextVal = this.value + ch;
                if (nextVal.length > this.maxLength) return "";
                const [minstr, maxstr] = this.boundaries(nextVal);
                if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];
                if (Number(minstr) > this.to) {
                    if (this.autofix === "pad" && nextVal.length < this.maxLength) return [ "", details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags)) ];
                    return toStr[nextVal.length - 1];
                }
                return ch;
            }
            doValidate() {
                const str = this.value;
                const firstNonZero = str.search(/[^0]/);
                if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
                const [minstr, maxstr] = this.boundaries(str);
                return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(...arguments);
            }
        }
        IMask.MaskedRange = MaskedRange;
        class MaskedDate extends MaskedPattern {
            constructor(opts) {
                super(Object.assign({}, MaskedDate.DEFAULTS, opts));
            }
            _update(opts) {
                if (opts.mask === Date) delete opts.mask;
                if (opts.pattern) opts.mask = opts.pattern;
                const blocks = opts.blocks;
                opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
                if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
                if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();
                if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
                    opts.blocks.m.from = opts.min.getMonth() + 1;
                    opts.blocks.m.to = opts.max.getMonth() + 1;
                    if (opts.blocks.m.from === opts.blocks.m.to) {
                        opts.blocks.d.from = opts.min.getDate();
                        opts.blocks.d.to = opts.max.getDate();
                    }
                }
                Object.assign(opts.blocks, this.blocks, blocks);
                Object.keys(opts.blocks).forEach((bk => {
                    const b = opts.blocks[bk];
                    if (!("autofix" in b) && "autofix" in opts) b.autofix = opts.autofix;
                }));
                super._update(opts);
            }
            doValidate() {
                const date = this.date;
                return super.doValidate(...arguments) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
            }
            isDateExist(str) {
                return this.format(this.parse(str, this), this).indexOf(str) >= 0;
            }
            get date() {
                return this.typedValue;
            }
            set date(date) {
                this.typedValue = date;
            }
            get typedValue() {
                return this.isComplete ? super.typedValue : null;
            }
            set typedValue(value) {
                super.typedValue = value;
            }
            maskEquals(mask) {
                return mask === Date || super.maskEquals(mask);
            }
        }
        MaskedDate.DEFAULTS = {
            pattern: "d{.}`m{.}`Y",
            format: date => {
                if (!date) return "";
                const day = String(date.getDate()).padStart(2, "0");
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const year = date.getFullYear();
                return [ day, month, year ].join(".");
            },
            parse: str => {
                const [day, month, year] = str.split(".");
                return new Date(year, month - 1, day);
            }
        };
        MaskedDate.GET_DEFAULT_BLOCKS = () => ({
            d: {
                mask: MaskedRange,
                from: 1,
                to: 31,
                maxLength: 2
            },
            m: {
                mask: MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2
            },
            Y: {
                mask: MaskedRange,
                from: 1900,
                to: 9999
            }
        });
        IMask.MaskedDate = MaskedDate;
        class MaskElement {
            get selectionStart() {
                let start;
                try {
                    start = this._unsafeSelectionStart;
                } catch (e) {}
                return start != null ? start : this.value.length;
            }
            get selectionEnd() {
                let end;
                try {
                    end = this._unsafeSelectionEnd;
                } catch (e) {}
                return end != null ? end : this.value.length;
            }
            select(start, end) {
                if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
                try {
                    this._unsafeSelect(start, end);
                } catch (e) {}
            }
            _unsafeSelect(start, end) {}
            get isActive() {
                return false;
            }
            bindEvents(handlers) {}
            unbindEvents() {}
        }
        IMask.MaskElement = MaskElement;
        class HTMLMaskElement extends MaskElement {
            constructor(input) {
                super();
                this.input = input;
                this._handlers = {};
            }
            get rootElement() {
                var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
                return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
            }
            get isActive() {
                return this.input === this.rootElement.activeElement;
            }
            get _unsafeSelectionStart() {
                return this.input.selectionStart;
            }
            get _unsafeSelectionEnd() {
                return this.input.selectionEnd;
            }
            _unsafeSelect(start, end) {
                this.input.setSelectionRange(start, end);
            }
            get value() {
                return this.input.value;
            }
            set value(value) {
                this.input.value = value;
            }
            bindEvents(handlers) {
                Object.keys(handlers).forEach((event => this._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event])));
            }
            unbindEvents() {
                Object.keys(this._handlers).forEach((event => this._toggleEventHandler(event)));
            }
            _toggleEventHandler(event, handler) {
                if (this._handlers[event]) {
                    this.input.removeEventListener(event, this._handlers[event]);
                    delete this._handlers[event];
                }
                if (handler) {
                    this.input.addEventListener(event, handler);
                    this._handlers[event] = handler;
                }
            }
        }
        HTMLMaskElement.EVENTS_MAP = {
            selectionChange: "keydown",
            input: "input",
            drop: "drop",
            click: "click",
            focus: "focus",
            commit: "blur"
        };
        IMask.HTMLMaskElement = HTMLMaskElement;
        class HTMLContenteditableMaskElement extends HTMLMaskElement {
            get _unsafeSelectionStart() {
                const root = this.rootElement;
                const selection = root.getSelection && root.getSelection();
                const anchorOffset = selection && selection.anchorOffset;
                const focusOffset = selection && selection.focusOffset;
                if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) return anchorOffset;
                return focusOffset;
            }
            get _unsafeSelectionEnd() {
                const root = this.rootElement;
                const selection = root.getSelection && root.getSelection();
                const anchorOffset = selection && selection.anchorOffset;
                const focusOffset = selection && selection.focusOffset;
                if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) return anchorOffset;
                return focusOffset;
            }
            _unsafeSelect(start, end) {
                if (!this.rootElement.createRange) return;
                const range = this.rootElement.createRange();
                range.setStart(this.input.firstChild || this.input, start);
                range.setEnd(this.input.lastChild || this.input, end);
                const root = this.rootElement;
                const selection = root.getSelection && root.getSelection();
                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
            get value() {
                return this.input.textContent;
            }
            set value(value) {
                this.input.textContent = value;
            }
        }
        IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
        const input_excluded = [ "mask" ];
        class InputMask {
            constructor(el, opts) {
                this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
                this.masked = createMask(opts);
                this._listeners = {};
                this._value = "";
                this._unmaskedValue = "";
                this._saveSelection = this._saveSelection.bind(this);
                this._onInput = this._onInput.bind(this);
                this._onChange = this._onChange.bind(this);
                this._onDrop = this._onDrop.bind(this);
                this._onFocus = this._onFocus.bind(this);
                this._onClick = this._onClick.bind(this);
                this.alignCursor = this.alignCursor.bind(this);
                this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
                this._bindEvents();
                this.updateValue();
                this._onChange();
            }
            get mask() {
                return this.masked.mask;
            }
            maskEquals(mask) {
                var _this$masked;
                return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
            }
            set mask(mask) {
                if (this.maskEquals(mask)) return;
                if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
                    this.masked.updateOptions({
                        mask
                    });
                    return;
                }
                const masked = createMask({
                    mask
                });
                masked.unmaskedValue = this.masked.unmaskedValue;
                this.masked = masked;
            }
            get value() {
                return this._value;
            }
            set value(str) {
                if (this.value === str) return;
                this.masked.value = str;
                this.updateControl();
                this.alignCursor();
            }
            get unmaskedValue() {
                return this._unmaskedValue;
            }
            set unmaskedValue(str) {
                if (this.unmaskedValue === str) return;
                this.masked.unmaskedValue = str;
                this.updateControl();
                this.alignCursor();
            }
            get typedValue() {
                return this.masked.typedValue;
            }
            set typedValue(val) {
                if (this.masked.typedValueEquals(val)) return;
                this.masked.typedValue = val;
                this.updateControl();
                this.alignCursor();
            }
            get displayValue() {
                return this.masked.displayValue;
            }
            _bindEvents() {
                this.el.bindEvents({
                    selectionChange: this._saveSelection,
                    input: this._onInput,
                    drop: this._onDrop,
                    click: this._onClick,
                    focus: this._onFocus,
                    commit: this._onChange
                });
            }
            _unbindEvents() {
                if (this.el) this.el.unbindEvents();
            }
            _fireEvent(ev) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                const listeners = this._listeners[ev];
                if (!listeners) return;
                listeners.forEach((l => l(...args)));
            }
            get selectionStart() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
            }
            get cursorPos() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
            }
            set cursorPos(pos) {
                if (!this.el || !this.el.isActive) return;
                this.el.select(pos, pos);
                this._saveSelection();
            }
            _saveSelection() {
                if (this.displayValue !== this.el.value) console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.");
                this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos
                };
            }
            updateValue() {
                this.masked.value = this.el.value;
                this._value = this.masked.value;
            }
            updateControl() {
                const newUnmaskedValue = this.masked.unmaskedValue;
                const newValue = this.masked.value;
                const newDisplayValue = this.displayValue;
                const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
                this._unmaskedValue = newUnmaskedValue;
                this._value = newValue;
                if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
                if (isChanged) this._fireChangeEvents();
            }
            updateOptions(opts) {
                const {mask} = opts, restOpts = _objectWithoutPropertiesLoose(opts, input_excluded);
                const updateMask = !this.maskEquals(mask);
                const updateOpts = !objectIncludes(this.masked, restOpts);
                if (updateMask) this.mask = mask;
                if (updateOpts) this.masked.updateOptions(restOpts);
                if (updateMask || updateOpts) this.updateControl();
            }
            updateCursor(cursorPos) {
                if (cursorPos == null) return;
                this.cursorPos = cursorPos;
                this._delayUpdateCursor(cursorPos);
            }
            _delayUpdateCursor(cursorPos) {
                this._abortUpdateCursor();
                this._changingCursorPos = cursorPos;
                this._cursorChanging = setTimeout((() => {
                    if (!this.el) return;
                    this.cursorPos = this._changingCursorPos;
                    this._abortUpdateCursor();
                }), 10);
            }
            _fireChangeEvents() {
                this._fireEvent("accept", this._inputEvent);
                if (this.masked.isComplete) this._fireEvent("complete", this._inputEvent);
            }
            _abortUpdateCursor() {
                if (this._cursorChanging) {
                    clearTimeout(this._cursorChanging);
                    delete this._cursorChanging;
                }
            }
            alignCursor() {
                this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
            }
            alignCursorFriendly() {
                if (this.selectionStart !== this.cursorPos) return;
                this.alignCursor();
            }
            on(ev, handler) {
                if (!this._listeners[ev]) this._listeners[ev] = [];
                this._listeners[ev].push(handler);
                return this;
            }
            off(ev, handler) {
                if (!this._listeners[ev]) return this;
                if (!handler) {
                    delete this._listeners[ev];
                    return this;
                }
                const hIndex = this._listeners[ev].indexOf(handler);
                if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
                return this;
            }
            _onInput(e) {
                this._inputEvent = e;
                this._abortUpdateCursor();
                if (!this._selection) return this.updateValue();
                const details = new ActionDetails(this.el.value, this.cursorPos, this.displayValue, this._selection);
                const oldRawValue = this.masked.rawInputValue;
                const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
                    input: true,
                    raw: true
                }).offset;
                const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
                let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
                if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
                this.updateControl();
                this.updateCursor(cursorPos);
                delete this._inputEvent;
            }
            _onChange() {
                if (this.displayValue !== this.el.value) this.updateValue();
                this.masked.doCommit();
                this.updateControl();
                this._saveSelection();
            }
            _onDrop(ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            _onFocus(ev) {
                this.alignCursorFriendly();
            }
            _onClick(ev) {
                this.alignCursorFriendly();
            }
            destroy() {
                this._unbindEvents();
                this._listeners.length = 0;
                delete this.el;
            }
        }
        IMask.InputMask = InputMask;
        class MaskedEnum extends MaskedPattern {
            _update(opts) {
                if (opts.enum) opts.mask = "*".repeat(opts.enum[0].length);
                super._update(opts);
            }
            doValidate() {
                return this.enum.some((e => e.indexOf(this.unmaskedValue) >= 0)) && super.doValidate(...arguments);
            }
        }
        IMask.MaskedEnum = MaskedEnum;
        class MaskedNumber extends Masked {
            constructor(opts) {
                super(Object.assign({}, MaskedNumber.DEFAULTS, opts));
            }
            _update(opts) {
                super._update(opts);
                this._updateRegExps();
            }
            _updateRegExps() {
                let start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
                let mid = "\\d*";
                let end = (this.scale ? "(".concat(escapeRegExp(this.radix), "\\d{0,").concat(this.scale, "})?") : "") + "$";
                this._numberRegExp = new RegExp(start + mid + end);
                this._mapToRadixRegExp = new RegExp("[".concat(this.mapToRadix.map(escapeRegExp).join(""), "]"), "g");
                this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), "g");
            }
            _removeThousandsSeparators(value) {
                return value.replace(this._thousandsSeparatorRegExp, "");
            }
            _insertThousandsSeparators(value) {
                const parts = value.split(this.radix);
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
                return parts.join(this.radix);
            }
            doPrepare(ch) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                ch = this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch);
                const [prepCh, details] = normalizePrepare(super.doPrepare(ch, flags));
                if (ch && !prepCh) details.skip = true;
                return [ prepCh, details ];
            }
            _separatorsCount(to) {
                let extendOnSeparators = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                let count = 0;
                for (let pos = 0; pos < to; ++pos) if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
                    ++count;
                    if (extendOnSeparators) to += this.thousandsSeparator.length;
                }
                return count;
            }
            _separatorsCountFromSlice() {
                let slice = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._value;
                return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
            }
            extractInput() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                let flags = arguments.length > 2 ? arguments[2] : void 0;
                [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
                return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
            }
            _appendCharRaw(ch) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!this.thousandsSeparator) return super._appendCharRaw(ch, flags);
                const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
                const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
                this._value = this._removeThousandsSeparators(this.value);
                const appendDetails = super._appendCharRaw(ch, flags);
                this._value = this._insertThousandsSeparators(this._value);
                const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
                const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
                appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
                appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
                return appendDetails;
            }
            _findSeparatorAround(pos) {
                if (this.thousandsSeparator) {
                    const searchFrom = pos - this.thousandsSeparator.length + 1;
                    const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
                    if (separatorPos <= pos) return separatorPos;
                }
                return -1;
            }
            _adjustRangeWithSeparators(from, to) {
                const separatorAroundFromPos = this._findSeparatorAround(from);
                if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
                const separatorAroundToPos = this._findSeparatorAround(to);
                if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
                return [ from, to ];
            }
            remove() {
                let fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                let toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
                [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
                const valueBeforePos = this.value.slice(0, fromPos);
                const valueAfterPos = this.value.slice(toPos);
                const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
                this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
                const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
                return new ChangeDetails({
                    tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
                });
            }
            nearestInputPos(cursorPos, direction) {
                if (!this.thousandsSeparator) return cursorPos;
                switch (direction) {
                  case DIRECTION.NONE:
                  case DIRECTION.LEFT:
                  case DIRECTION.FORCE_LEFT:
                    {
                        const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
                        if (separatorAtLeftPos >= 0) {
                            const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) return separatorAtLeftPos;
                        }
                        break;
                    }

                  case DIRECTION.RIGHT:
                  case DIRECTION.FORCE_RIGHT:
                    {
                        const separatorAtRightPos = this._findSeparatorAround(cursorPos);
                        if (separatorAtRightPos >= 0) return separatorAtRightPos + this.thousandsSeparator.length;
                    }
                }
                return cursorPos;
            }
            doValidate(flags) {
                let valid = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
                if (valid) {
                    const number = this.number;
                    valid = valid && !isNaN(number) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
                }
                return valid && super.doValidate(flags);
            }
            doCommit() {
                if (this.value) {
                    const number = this.number;
                    let validnum = number;
                    if (this.min != null) validnum = Math.max(validnum, this.min);
                    if (this.max != null) validnum = Math.min(validnum, this.max);
                    if (validnum !== number) this.unmaskedValue = this.doFormat(validnum);
                    let formatted = this.value;
                    if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
                    if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
                    this._value = formatted;
                }
                super.doCommit();
            }
            _normalizeZeros(value) {
                const parts = this._removeThousandsSeparators(value).split(this.radix);
                parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, ((match, sign, zeros, num) => sign + num));
                if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + "0";
                if (parts.length > 1) {
                    parts[1] = parts[1].replace(/0*$/, "");
                    if (!parts[1].length) parts.length = 1;
                }
                return this._insertThousandsSeparators(parts.join(this.radix));
            }
            _padFractionalZeros(value) {
                if (!value) return value;
                const parts = value.split(this.radix);
                if (parts.length < 2) parts.push("");
                parts[1] = parts[1].padEnd(this.scale, "0");
                return parts.join(this.radix);
            }
            doSkipInvalid(ch) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                let checkTail = arguments.length > 2 ? arguments[2] : void 0;
                const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
                return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
            }
            get unmaskedValue() {
                return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
            }
            set unmaskedValue(unmaskedValue) {
                super.unmaskedValue = unmaskedValue;
            }
            get typedValue() {
                return this.doParse(this.unmaskedValue);
            }
            set typedValue(n) {
                this.rawInputValue = this.doFormat(n).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
            }
            get number() {
                return this.typedValue;
            }
            set number(number) {
                this.typedValue = number;
            }
            get allowNegative() {
                return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
            }
            typedValueEquals(value) {
                return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === "");
            }
        }
        MaskedNumber.UNMASKED_RADIX = ".";
        MaskedNumber.DEFAULTS = {
            radix: ",",
            thousandsSeparator: "",
            mapToRadix: [ MaskedNumber.UNMASKED_RADIX ],
            scale: 2,
            signed: false,
            normalizeZeros: true,
            padFractionalZeros: false,
            parse: Number,
            format: n => n.toLocaleString("en-US", {
                useGrouping: false,
                maximumFractionDigits: 20
            })
        };
        MaskedNumber.EMPTY_VALUES = [ ...Masked.EMPTY_VALUES, 0 ];
        IMask.MaskedNumber = MaskedNumber;
        class MaskedFunction extends Masked {
            _update(opts) {
                if (opts.mask) opts.validate = opts.mask;
                super._update(opts);
            }
        }
        IMask.MaskedFunction = MaskedFunction;
        const dynamic_excluded = [ "compiledMasks", "currentMaskRef", "currentMask" ], _excluded2 = [ "mask" ];
        class MaskedDynamic extends Masked {
            constructor(opts) {
                super(Object.assign({}, MaskedDynamic.DEFAULTS, opts));
                this.currentMask = null;
            }
            _update(opts) {
                super._update(opts);
                if ("mask" in opts) this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map((m => createMask(m))) : [];
            }
            _appendCharRaw(ch) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const details = this._applyDispatch(ch, flags);
                if (this.currentMask) details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
                return details;
            }
            _applyDispatch() {
                let appended = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                let tail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
                const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
                const inputValue = this.rawInputValue;
                const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
                const tailValue = inputValue.slice(insertValue.length);
                const prevMask = this.currentMask;
                const details = new ChangeDetails;
                const prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state;
                this.currentMask = this.doDispatch(appended, Object.assign({}, flags), tail);
                if (this.currentMask) if (this.currentMask !== prevMask) {
                    this.currentMask.reset();
                    if (insertValue) {
                        const d = this.currentMask.append(insertValue, {
                            raw: true
                        });
                        details.tailShift = d.inserted.length - prevValueBeforeTail.length;
                    }
                    if (tailValue) details.tailShift += this.currentMask.append(tailValue, {
                        raw: true,
                        tail: true
                    }).tailShift;
                } else this.currentMask.state = prevMaskState;
                return details;
            }
            _appendPlaceholder() {
                const details = this._applyDispatch(...arguments);
                if (this.currentMask) details.aggregate(this.currentMask._appendPlaceholder());
                return details;
            }
            _appendEager() {
                const details = this._applyDispatch(...arguments);
                if (this.currentMask) details.aggregate(this.currentMask._appendEager());
                return details;
            }
            appendTail(tail) {
                const details = new ChangeDetails;
                if (tail) details.aggregate(this._applyDispatch("", {}, tail));
                return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
            }
            currentMaskFlags(flags) {
                var _flags$_beforeTailSta, _flags$_beforeTailSta2;
                return Object.assign({}, flags, {
                    _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
                });
            }
            doDispatch(appended) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                let tail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
                return this.dispatch(appended, this, flags, tail);
            }
            doValidate(flags) {
                return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
            }
            doPrepare(str) {
                let flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                let [s, details] = normalizePrepare(super.doPrepare(str, flags));
                if (this.currentMask) {
                    let currentDetails;
                    [s, currentDetails] = normalizePrepare(super.doPrepare(s, this.currentMaskFlags(flags)));
                    details = details.aggregate(currentDetails);
                }
                return [ s, details ];
            }
            reset() {
                var _this$currentMask;
                (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 ? void 0 : _this$currentMask.reset();
                this.compiledMasks.forEach((m => m.reset()));
            }
            get value() {
                return this.currentMask ? this.currentMask.value : "";
            }
            set value(value) {
                super.value = value;
            }
            get unmaskedValue() {
                return this.currentMask ? this.currentMask.unmaskedValue : "";
            }
            set unmaskedValue(unmaskedValue) {
                super.unmaskedValue = unmaskedValue;
            }
            get typedValue() {
                return this.currentMask ? this.currentMask.typedValue : "";
            }
            set typedValue(value) {
                let unmaskedValue = String(value);
                if (this.currentMask) {
                    this.currentMask.typedValue = value;
                    unmaskedValue = this.currentMask.unmaskedValue;
                }
                this.unmaskedValue = unmaskedValue;
            }
            get displayValue() {
                return this.currentMask ? this.currentMask.displayValue : "";
            }
            get isComplete() {
                var _this$currentMask2;
                return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
            }
            get isFilled() {
                var _this$currentMask3;
                return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
            }
            remove() {
                const details = new ChangeDetails;
                if (this.currentMask) details.aggregate(this.currentMask.remove(...arguments)).aggregate(this._applyDispatch());
                return details;
            }
            get state() {
                var _this$currentMask4;
                return Object.assign({}, super.state, {
                    _rawInputValue: this.rawInputValue,
                    compiledMasks: this.compiledMasks.map((m => m.state)),
                    currentMaskRef: this.currentMask,
                    currentMask: (_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.state
                });
            }
            set state(state) {
                const {compiledMasks, currentMaskRef, currentMask} = state, maskedState = _objectWithoutPropertiesLoose(state, dynamic_excluded);
                this.compiledMasks.forEach(((m, mi) => m.state = compiledMasks[mi]));
                if (currentMaskRef != null) {
                    this.currentMask = currentMaskRef;
                    this.currentMask.state = currentMask;
                }
                super.state = maskedState;
            }
            extractInput() {
                return this.currentMask ? this.currentMask.extractInput(...arguments) : "";
            }
            extractTail() {
                return this.currentMask ? this.currentMask.extractTail(...arguments) : super.extractTail(...arguments);
            }
            doCommit() {
                if (this.currentMask) this.currentMask.doCommit();
                super.doCommit();
            }
            nearestInputPos() {
                return this.currentMask ? this.currentMask.nearestInputPos(...arguments) : super.nearestInputPos(...arguments);
            }
            get overwrite() {
                return this.currentMask ? this.currentMask.overwrite : super.overwrite;
            }
            set overwrite(overwrite) {
                console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
            }
            get eager() {
                return this.currentMask ? this.currentMask.eager : super.eager;
            }
            set eager(eager) {
                console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
            }
            get skipInvalid() {
                return this.currentMask ? this.currentMask.skipInvalid : super.skipInvalid;
            }
            set skipInvalid(skipInvalid) {
                if (this.isInitialized || skipInvalid !== Masked.DEFAULTS.skipInvalid) console.warn('"skipInvalid" option is not available in dynamic mask, use this option in siblings');
            }
            maskEquals(mask) {
                return Array.isArray(mask) && this.compiledMasks.every(((m, mi) => {
                    if (!mask[mi]) return;
                    const _mask$mi = mask[mi], {mask: oldMask} = _mask$mi, restOpts = _objectWithoutPropertiesLoose(_mask$mi, _excluded2);
                    return objectIncludes(m, restOpts) && m.maskEquals(oldMask);
                }));
            }
            typedValueEquals(value) {
                var _this$currentMask5;
                return Boolean((_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.typedValueEquals(value));
            }
        }
        MaskedDynamic.DEFAULTS = {
            dispatch: (appended, masked, flags, tail) => {
                if (!masked.compiledMasks.length) return;
                const inputValue = masked.rawInputValue;
                const inputs = masked.compiledMasks.map(((m, index) => {
                    const isCurrent = masked.currentMask === m;
                    const startInputPos = isCurrent ? m.value.length : m.nearestInputPos(m.value.length, DIRECTION.FORCE_LEFT);
                    if (m.rawInputValue !== inputValue) {
                        m.reset();
                        m.append(inputValue, {
                            raw: true
                        });
                    } else if (!isCurrent) m.remove(startInputPos);
                    m.append(appended, masked.currentMaskFlags(flags));
                    m.appendTail(tail);
                    return {
                        index,
                        weight: m.rawInputValue.length,
                        totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.value.length, DIRECTION.FORCE_LEFT)))
                    };
                }));
                inputs.sort(((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions));
                return masked.compiledMasks[inputs[0].index];
            }
        };
        IMask.MaskedDynamic = MaskedDynamic;
        const PIPE_TYPE = {
            MASKED: "value",
            UNMASKED: "unmaskedValue",
            TYPED: "typedValue"
        };
        function createPipe(mask) {
            let from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PIPE_TYPE.MASKED;
            let to = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : PIPE_TYPE.MASKED;
            const masked = createMask(mask);
            return value => masked.runIsolated((m => {
                m[from] = value;
                return m[to];
            }));
        }
        function pipe(value) {
            for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) pipeArgs[_key - 1] = arguments[_key];
            return createPipe(...pipeArgs)(value);
        }
        IMask.PIPE_TYPE = PIPE_TYPE;
        IMask.createPipe = createPipe;
        IMask.pipe = pipe;
        try {
            globalThis.IMask = IMask;
        } catch (e) {}
        const mask_element = document.querySelector(".form__phone");
        const maskOptions = {
            mask: "+{7}(000)000-00-00"
        };
        IMask(mask_element, maskOptions);
        window["FLS"] = true;
        isWebp();
        menuInit();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
    })();
})();