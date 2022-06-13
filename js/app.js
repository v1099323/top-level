(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            r = e && "classList" in document.createElement("p"),
            a = e && window.devicePixelRatio > 1,
            i = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
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
            },
            s = function (e) {
              return t({}, i, e);
            },
            l = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                r = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: r } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: r }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            f = "poster",
            h = "llOriginalAttrs",
            m = "loading",
            g = "loaded",
            p = "applied",
            v = "error",
            _ = "native",
            y = "data-",
            E = "ll-status",
            b = function (t, e) {
              return t.getAttribute(y + e);
            },
            w = function (t) {
              return b(t, E);
            },
            L = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            A = function (t) {
              return L(t, null);
            },
            S = function (t) {
              return null === w(t);
            },
            x = function (t) {
              return w(t) === _;
            },
            I = [m, g, p, v],
            k = function (t, e, n, o) {
              t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            C = function (t, e) {
              r
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            T = function (t, e) {
              r
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            q = function (t) {
              return t.llTempImage;
            },
            W = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            P = function (t, e) {
              t && (t.loadingCount += e);
            },
            O = function (t, e) {
              t && (t.toLoadCount = e);
            },
            R = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            M = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && R(n).forEach(e);
            },
            $ = function (t, e) {
              R(t).forEach(e);
            },
            D = [c],
            N = [c, f],
            z = [c, d, u],
            B = function (t) {
              return !!t[h];
            },
            G = function (t) {
              return t[h];
            },
            U = function (t) {
              return delete t[h];
            },
            j = function (t, e) {
              if (!B(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[h] = n);
              }
            },
            H = function (t, e) {
              if (B(t)) {
                var n = G(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            F = function (t, e, n) {
              C(t, e.class_loading),
                L(t, m),
                n && (P(n, 1), k(e.callback_loading, t, n));
            },
            V = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            X = function (t, e) {
              V(t, u, b(t, e.data_sizes)),
                V(t, d, b(t, e.data_srcset)),
                V(t, c, b(t, e.data_src));
            },
            Y = {
              IMG: function (t, e) {
                M(t, function (t) {
                  j(t, z), X(t, e);
                }),
                  j(t, z),
                  X(t, e);
              },
              IFRAME: function (t, e) {
                j(t, D), V(t, c, b(t, e.data_src));
              },
              VIDEO: function (t, e) {
                $(t, function (t) {
                  j(t, D), V(t, c, b(t, e.data_src));
                }),
                  j(t, N),
                  V(t, f, b(t, e.data_poster)),
                  V(t, c, b(t, e.data_src)),
                  t.load();
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO"],
            Q = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                k(t.callback_finish, e);
            },
            J = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            K = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            tt = function (t) {
              return !!t.llEvLisnrs;
            },
            et = function (t) {
              if (tt(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  K(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            nt = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                P(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                T(t, e.class_loading),
                e.unobserve_completed && W(t, n);
            },
            ot = function (t, e, n) {
              var o = q(t) || t;
              tt(o) ||
                (function (t, e, n) {
                  tt(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  J(t, o, e), J(t, "error", n);
                })(
                  o,
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = x(e);
                      nt(e, n, o),
                        C(e, n.class_loaded),
                        L(e, g),
                        k(n.callback_loaded, e, o),
                        r || Q(n, o);
                    })(0, t, e, n),
                      et(o);
                  },
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = x(e);
                      nt(e, n, o),
                        C(e, n.class_error),
                        L(e, v),
                        k(n.callback_error, e, o),
                        r || Q(n, o);
                    })(0, t, e, n),
                      et(o);
                  }
                );
            },
            rt = function (t, e, n) {
              !(function (t) {
                t.llTempImage = document.createElement("IMG");
              })(t),
                ot(t, e, n),
                (function (t) {
                  B(t) || (t[h] = { backgroundImage: t.style.backgroundImage });
                })(t),
                (function (t, e, n) {
                  var o = b(t, e.data_bg),
                    r = b(t, e.data_bg_hidpi),
                    i = a && r ? r : o;
                  i &&
                    ((t.style.backgroundImage = 'url("'.concat(i, '")')),
                    q(t).setAttribute(c, i),
                    F(t, e, n));
                })(t, e, n),
                (function (t, e, n) {
                  var o = b(t, e.data_bg_multi),
                    r = b(t, e.data_bg_multi_hidpi),
                    i = a && r ? r : o;
                  i &&
                    ((t.style.backgroundImage = i),
                    (function (t, e, n) {
                      C(t, e.class_applied),
                        L(t, p),
                        n &&
                          (e.unobserve_completed && W(t, e),
                          k(e.callback_applied, t, n));
                    })(t, e, n));
                })(t, e, n);
            },
            at = function (t, e, n) {
              !(function (t) {
                return Z.indexOf(t.tagName) > -1;
              })(t)
                ? rt(t, e, n)
                : (function (t, e, n) {
                    ot(t, e, n),
                      (function (t, e, n) {
                        var o = Y[t.tagName];
                        o && (o(t, e), F(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            it = function (t) {
              t.removeAttribute(c), t.removeAttribute(d), t.removeAttribute(u);
            },
            st = function (t) {
              M(t, function (t) {
                H(t, z);
              }),
                H(t, z);
            },
            lt = {
              IMG: st,
              IFRAME: function (t) {
                H(t, D);
              },
              VIDEO: function (t) {
                $(t, function (t) {
                  H(t, D);
                }),
                  H(t, N),
                  t.load();
              },
            },
            ct = function (t, e) {
              (function (t) {
                var e = lt[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (B(t)) {
                        var e = G(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  S(t) ||
                    x(t) ||
                    (T(t, e.class_entered),
                    T(t, e.class_exited),
                    T(t, e.class_applied),
                    T(t, e.class_loading),
                    T(t, e.class_loaded),
                    T(t, e.class_error));
                })(t, e),
                A(t),
                U(t);
            },
            dt = ["IMG", "IFRAME", "VIDEO"],
            ut = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            ft = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var r = (function (t) {
                        return I.indexOf(w(t)) >= 0;
                      })(t);
                      L(t, "entered"),
                        C(t, n.class_entered),
                        T(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && W(t, n);
                        })(t, n, o),
                        k(n.callback_enter, t, e, o),
                        r || at(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      S(t) ||
                        (C(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return w(t) === m;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (et(t),
                            (function (t) {
                              M(t, function (t) {
                                it(t);
                              }),
                                it(t);
                            })(t),
                            st(t),
                            T(t, n.class_loading),
                            P(o, -1),
                            A(t),
                            k(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        k(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            ht = function (t) {
              return Array.prototype.slice.call(t);
            },
            mt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            gt = function (t) {
              return (function (t) {
                return w(t) === v;
              })(t);
            },
            pt = function (t, e) {
              return (function (t) {
                return ht(t).filter(S);
              })(t || mt(e));
            },
            vt = function (t, n) {
              var r = s(t);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !ut(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        ft(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t)
                    ));
                })(r, this),
                (function (t, n) {
                  e &&
                    window.addEventListener("online", function () {
                      !(function (t, e) {
                        var n;
                        ((n = mt(t)), ht(n).filter(gt)).forEach(function (e) {
                          T(e, t.class_error), A(e);
                        }),
                          e.update();
                      })(t, n);
                    });
                })(r, this),
                this.update(n);
            };
          return (
            (vt.prototype = {
              update: function (t) {
                var e,
                  r,
                  a = this._settings,
                  i = pt(t, a);
                O(this, i.length),
                  !n && o
                    ? ut(a)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== dt.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  ot(t, e, n),
                                  (function (t, e) {
                                    var n = Y[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  L(t, _);
                              })(t, e, n);
                          }),
                            O(n, 0);
                        })(i, a, this)
                      : ((r = i),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, r))
                    : this.loadAll(i);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  mt(this._settings).forEach(function (t) {
                    U(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                pt(t, n).forEach(function (t) {
                  W(t, e), at(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                mt(t).forEach(function (e) {
                  ct(e, t);
                });
              },
            }),
            (vt.load = function (t, e) {
              var n = s(e);
              at(t, n);
            }),
            (vt.resetStatus = function (t) {
              A(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) l(t, n);
                  else l(t, e);
              })(vt, window.lazyLoadOptions),
            vt
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var a = (e[o] = { exports: {} });
    return t[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (() => {
    "use strict";
    const t = {};
    let e = (t, e = 500, n = 0) => {
        t.classList.contains("_slide") ||
          (t.classList.add("_slide"),
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = `${t.offsetHeight}px`),
          t.offsetHeight,
          (t.style.overflow = "hidden"),
          (t.style.height = n ? `${n}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          window.setTimeout(() => {
            (t.hidden = !n),
              !n && t.style.removeProperty("height"),
              t.style.removeProperty("padding-top"),
              t.style.removeProperty("padding-bottom"),
              t.style.removeProperty("margin-top"),
              t.style.removeProperty("margin-bottom"),
              !n && t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: t } })
              );
          }, e));
      },
      o = (t, e = 500, n = 0) => {
        if (!t.classList.contains("_slide")) {
          t.classList.add("_slide"),
            (t.hidden = !t.hidden && null),
            n && t.style.removeProperty("height");
          let o = t.offsetHeight;
          (t.style.overflow = "hidden"),
            (t.style.height = n ? `${n}px` : "0px"),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0),
            (t.style.marginTop = 0),
            (t.style.marginBottom = 0),
            t.offsetHeight,
            (t.style.transitionProperty = "height, margin, padding"),
            (t.style.transitionDuration = e + "ms"),
            (t.style.height = o + "px"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              t.style.removeProperty("height"),
                t.style.removeProperty("overflow"),
                t.style.removeProperty("transition-duration"),
                t.style.removeProperty("transition-property"),
                t.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: t } })
                );
            }, e);
        }
      },
      r = !0,
      a = (t = 500) => {
        let e = document.querySelector("body");
        if (r) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < n.length; t++) {
              n[t].style.paddingRight = "0px";
            }
            (e.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, t);
        }
      },
      i = (t = 500) => {
        let e = document.querySelector("body");
        if (r) {
          let n = document.querySelectorAll("[data-lp]");
          for (let t = 0; t < n.length; t++) {
            n[t].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (e.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, t);
        }
      };
    function s(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    function l(t) {
      return t.filter(function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    function c(t, e) {
      const n = Array.from(t).filter(function (t, n, o) {
        if (t.dataset[e]) return t.dataset[e].split(",")[0];
      });
      if (n.length) {
        const t = [];
        n.forEach((n) => {
          const o = {},
            r = n.dataset[e].split(",");
          (o.value = r[0]),
            (o.type = r[1] ? r[1].trim() : "max"),
            (o.item = n),
            t.push(o);
        });
        let o = t.map(function (t) {
          return (
            "(" +
            t.type +
            "-width: " +
            t.value +
            "px)," +
            t.value +
            "," +
            t.type
          );
        });
        o = l(o);
        const r = [];
        if (o.length)
          return (
            o.forEach((e) => {
              const n = e.split(","),
                o = n[1],
                a = n[2],
                i = window.matchMedia(n[0]),
                s = t.filter(function (t) {
                  if (t.value === o && t.type === a) return !0;
                });
              r.push({ itemsArray: s, matchMedia: i });
            }),
            r
          );
      }
    }
    let d = (t, e = !1, n = 500, o = 0) => {
      const r = "string" == typeof t ? document.querySelector(t) : t;
      if (r) {
        let i = "",
          l = 0;
        e &&
          ((i = "header.header"), (l = document.querySelector(i).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: n,
          header: i,
          offset: o,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (a(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", c);
        else {
          let t = r.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? t - l : t, behavior: "smooth" });
        }
        s(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else s(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    };
    let u = {
      getErrors(t) {
        let e = 0,
          n = t.querySelectorAll("*[data-required]");
        return (
          n.length &&
            n.forEach((t) => {
              (null === t.offsetParent && "SELECT" !== t.tagName) ||
                t.disabled ||
                (e += this.validateInput(t));
            }),
          e
        );
      },
      validateInput(t) {
        let e = 0;
        return (
          "email" === t.dataset.required
            ? ((t.value = t.value.replace(" ", "")),
              this.emailTest(t) ? (this.addError(t), e++) : this.removeError(t))
            : ("checkbox" !== t.type || t.checked) && t.value
            ? this.removeError(t)
            : (this.addError(t), e++),
          e
        );
      },
      addError(t) {
        t.classList.add("_form-error"),
          t.parentElement.classList.add("_form-error");
        let e = t.parentElement.querySelector(".form__error");
        e && t.parentElement.removeChild(e),
          t.dataset.error &&
            t.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${t.dataset.error}</div>`
            );
      },
      removeError(t) {
        t.classList.remove("_form-error"),
          t.parentElement.classList.remove("_form-error"),
          t.parentElement.querySelector(".form__error") &&
            t.parentElement.removeChild(
              t.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let n = e.querySelectorAll("input,textarea");
            for (let t = 0; t < n.length; t++) {
              const e = n[t];
              e.parentElement.classList.remove("_form-focus"),
                e.classList.remove("_form-focus"),
                u.removeError(e);
            }
            let o = e.querySelectorAll(".checkbox__input");
            if (o.length > 0)
              for (let t = 0; t < o.length; t++) {
                o[t].checked = !1;
              }
            if (t.select) {
              let n = e.querySelectorAll(".select");
              if (n.length)
                for (let e = 0; e < n.length; e++) {
                  const o = n[e].querySelector("select");
                  t.select.selectBuild(o);
                }
            }
          }, 0);
      },
      emailTest: (t) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
    };
    new (n(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    t.watcher = new (class {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${t.length})...`
          ),
            l(
              Array.from(t).map(function (t) {
                return `${
                  t.dataset.watchRoot ? t.dataset.watchRoot : null
                }|${t.dataset.watchMargin ? t.dataset.watchMargin : "0px"}|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              })
            ).forEach((e) => {
              let n = e.split("|"),
                o = { root: n[0], margin: n[1], threshold: n[2] },
                r = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    r = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === o.root &&
                    String(n) === o.margin &&
                    String(r) === o.threshold
                  )
                    return t;
                }),
                a = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(r, a);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${t.root} нет на странице`
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${e.classList}, добавил класс _watcher-view`
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${e.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`Я перестал следить за ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging && s(`[Наблюдатель]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const n = t.target;
        this.scrollWatcherIntersecting(t, n),
          n.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(n, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } })
          );
      }
    })({});
    let f = !1;
    setTimeout(() => {
      if (f) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0),
      window.addEventListener("DOMContentLoaded", function () {
        [].forEach.call(document.querySelectorAll(".tel"), function (t) {
          var e;
          function n(t) {
            t.keyCode && (e = t.keyCode),
              this.selectionStart < 3 && t.preventDefault();
            var n = "+7 (___) ___-__-__",
              o = 0,
              r = n.replace(/\D/g, ""),
              a = this.value.replace(/\D/g, ""),
              i = n.replace(/[_\d]/g, function (t) {
                return o < a.length ? a.charAt(o++) || r.charAt(o) : t;
              });
            -1 != (o = i.indexOf("_")) &&
              (o < 5 && (o = 3), (i = i.slice(0, o)));
            var s = n
              .substr(0, this.value.length)
              .replace(/_+/g, function (t) {
                return "\\d{1," + t.length + "}";
              })
              .replace(/[+()]/g, "\\$&");
            (!(s = new RegExp("^" + s + "$")).test(this.value) ||
              this.value.length < 5 ||
              (e > 47 && e < 58)) &&
              (this.value = i),
              "blur" == t.type && this.value.length < 5 && (this.value = "");
          }
          t.addEventListener("input", n, !1),
            t.addEventListener("focus", n, !1),
            t.addEventListener("blur", n, !1),
            t.addEventListener("keydown", n, !1);
        });
      });
    const h = document.querySelector(".button-up");
    window.addEventListener("scroll", () => {
      (window.pageYOffset || document.documentElement.scrollTop) > 100
        ? h.classList.add("button-up_active")
        : h.classList.remove("button-up_active");
    }),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        let t = document.querySelector(".icon-menu");
        t &&
          t.addEventListener("click", function (t) {
            r &&
              (((t = 500) => {
                document.documentElement.classList.contains("lock")
                  ? a(t)
                  : i(t);
              })(),
              document.documentElement.classList.toggle("menu-open"),
              document.documentElement.classList.contains("catalog-open") &&
                document.documentElement.classList.remove("catalog-open"),
              document.documentElement.classList.contains("sub-menu-open") &&
                document.documentElement.classList.remove("sub-menu-open"));
          });
      })(),
      (function () {
        const t = document.querySelectorAll("[data-spollers]");
        if (t.length > 0) {
          const n = Array.from(t).filter(function (t, e, n) {
            return !t.dataset.spollers.split(",")[0];
          });
          n.length && a(n);
          let r = c(t, "spollers");
          function a(t, e = !1) {
            t.forEach((t) => {
              (t = e ? t.item : t),
                e.matches || !e
                  ? (t.classList.add("_spoller-init"),
                    i(t),
                    t.addEventListener("click", s))
                  : (t.classList.remove("_spoller-init"),
                    i(t, !1),
                    t.removeEventListener("click", s));
            });
          }
          function i(t, e = !0) {
            let n = t.querySelectorAll("[data-spoller]");
            n.length &&
              ((n = Array.from(n).filter(
                (e) => e.closest("[data-spollers]") === t
              )),
              n.forEach((t) => {
                e
                  ? (t.removeAttribute("tabindex"),
                    t.classList.contains("_spoller-active") ||
                      (t.nextElementSibling.hidden = !0))
                  : (t.setAttribute("tabindex", "-1"),
                    (t.nextElementSibling.hidden = !1));
              }));
          }
          function s(t) {
            const n = t.target;
            if (n.closest("[data-spoller]")) {
              const r = n.closest("[data-spoller]"),
                a = r.closest("[data-spollers]"),
                i = !!a.hasAttribute("data-one-spoller");
              a.querySelectorAll("._slide").length ||
                (i && !r.classList.contains("_spoller-active") && l(a),
                r.classList.toggle("_spoller-active"),
                ((t, n = 500) => {
                  t.hidden ? o(t, n) : e(t, n);
                })(r.nextElementSibling, 500)),
                t.preventDefault();
            }
          }
          function l(t) {
            const n = t.querySelector("[data-spoller]._spoller-active");
            n &&
              (n.classList.remove("_spoller-active"),
              e(n.nextElementSibling, 500));
          }
          r &&
            r.length &&
            r.forEach((t) => {
              t.matchMedia.addEventListener("change", function () {
                a(t.itemsArray, t.matchMedia);
              }),
                a(t.itemsArray, t.matchMedia);
            });
        }
      })(),
      (function () {
        const t = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        t.length &&
          t.forEach((t) => {
            t.dataset.placeholder = t.placeholder;
          }),
          document.body.addEventListener("focusin", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = ""),
              e.classList.add("_form-focus"),
              e.parentElement.classList.add("_form-focus"),
              u.removeError(e));
          }),
          document.body.addEventListener("focusout", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
              e.classList.remove("_form-focus"),
              e.parentElement.classList.remove("_form-focus"),
              e.hasAttribute("data-validate") && u.validateInput(e));
          });
      })(),
      (function (e) {
        t.popup && t.popup.open("some");
        const n = document.forms;
        if (n.length)
          for (const t of n)
            t.addEventListener("submit", function (t) {
              o(t.target, t);
            }),
              t.addEventListener("reset", function (t) {
                const e = t.target;
                u.formClean(e);
              });
        async function o(t, n) {
          if (0 === (e ? u.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              n.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                o = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                a = new FormData(t);
              t.classList.add("_sending");
              const i = await fetch(e, { method: o, body: a });
              if (i.ok) {
                await i.json();
                t.classList.remove("_sending"), r(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (n.preventDefault(), r(t));
          } else {
            n.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && d(e, !0, 1e3);
          }
        }
        function r(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            setTimeout(() => {
              if (t.popup) {
                const n = e.dataset.popupMessage;
                n && t.popup.open(n);
              }
            }, 0),
            u.formClean(e),
            s(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (function () {
        function t(t) {
          if ("click" === t.type) {
            const e = t.target;
            if (e.closest("[data-goto]")) {
              const n = e.closest("[data-goto]"),
                o = n.dataset.goto ? n.dataset.goto : "",
                r = !!n.hasAttribute("data-goto-header"),
                a = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              d(o, r, a), t.preventDefault();
            }
          } else if ("watcherCallback" === t.type && t.detail) {
            const e = t.detail.entry,
              n = e.target;
            if ("navigator" === n.dataset.watch) {
              const t = n.id,
                o =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${t}"]`));
              e.isIntersecting
                ? o && o.classList.add("_navigator-active")
                : o && o.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", t),
          document.addEventListener("watcherCallback", t);
      })();
  })();
})();
