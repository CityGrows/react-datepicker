!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("date-fns/isDate"),
        require("date-fns/isValid"),
        require("date-fns/format"),
        require("date-fns/addMinutes"),
        require("date-fns/addHours"),
        require("date-fns/addDays"),
        require("date-fns/addWeeks"),
        require("date-fns/addMonths"),
        require("date-fns/addYears"),
        require("date-fns/subMinutes"),
        require("date-fns/subHours"),
        require("date-fns/subDays"),
        require("date-fns/subWeeks"),
        require("date-fns/subMonths"),
        require("date-fns/subYears"),
        require("date-fns/getSeconds"),
        require("date-fns/getMinutes"),
        require("date-fns/getHours"),
        require("date-fns/getDay"),
        require("date-fns/getDate"),
        require("date-fns/getISOWeek"),
        require("date-fns/getMonth"),
        require("date-fns/getQuarter"),
        require("date-fns/getYear"),
        require("date-fns/getTime"),
        require("date-fns/setSeconds"),
        require("date-fns/setMinutes"),
        require("date-fns/setHours"),
        require("date-fns/setMonth"),
        require("date-fns/setQuarter"),
        require("date-fns/setYear"),
        require("date-fns/min"),
        require("date-fns/max"),
        require("date-fns/differenceInCalendarDays"),
        require("date-fns/differenceInCalendarMonths"),
        require("date-fns/differenceInCalendarWeeks"),
        require("date-fns/differenceInCalendarYears"),
        require("date-fns/startOfDay"),
        require("date-fns/startOfWeek"),
        require("date-fns/startOfMonth"),
        require("date-fns/startOfQuarter"),
        require("date-fns/startOfYear"),
        require("date-fns/endOfDay"),
        require("date-fns/endOfWeek"),
        require("date-fns/endOfMonth"),
        require("date-fns/isEqual"),
        require("date-fns/isSameDay"),
        require("date-fns/isSameMonth"),
        require("date-fns/isSameYear"),
        require("date-fns/isSameQuarter"),
        require("date-fns/isAfter"),
        require("date-fns/isBefore"),
        require("date-fns/isWithinInterval"),
        require("date-fns/toDate"),
        require("date-fns/parse"),
        require("date-fns/parseISO"),
        require("react-onclickoutside"),
        require("react-dom"),
        require("react-popper")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "exports",
          "react",
          "prop-types",
          "classnames",
          "date-fns/isDate",
          "date-fns/isValid",
          "date-fns/format",
          "date-fns/addMinutes",
          "date-fns/addHours",
          "date-fns/addDays",
          "date-fns/addWeeks",
          "date-fns/addMonths",
          "date-fns/addYears",
          "date-fns/subMinutes",
          "date-fns/subHours",
          "date-fns/subDays",
          "date-fns/subWeeks",
          "date-fns/subMonths",
          "date-fns/subYears",
          "date-fns/getSeconds",
          "date-fns/getMinutes",
          "date-fns/getHours",
          "date-fns/getDay",
          "date-fns/getDate",
          "date-fns/getISOWeek",
          "date-fns/getMonth",
          "date-fns/getQuarter",
          "date-fns/getYear",
          "date-fns/getTime",
          "date-fns/setSeconds",
          "date-fns/setMinutes",
          "date-fns/setHours",
          "date-fns/setMonth",
          "date-fns/setQuarter",
          "date-fns/setYear",
          "date-fns/min",
          "date-fns/max",
          "date-fns/differenceInCalendarDays",
          "date-fns/differenceInCalendarMonths",
          "date-fns/differenceInCalendarWeeks",
          "date-fns/differenceInCalendarYears",
          "date-fns/startOfDay",
          "date-fns/startOfWeek",
          "date-fns/startOfMonth",
          "date-fns/startOfQuarter",
          "date-fns/startOfYear",
          "date-fns/endOfDay",
          "date-fns/endOfWeek",
          "date-fns/endOfMonth",
          "date-fns/isEqual",
          "date-fns/isSameDay",
          "date-fns/isSameMonth",
          "date-fns/isSameYear",
          "date-fns/isSameQuarter",
          "date-fns/isAfter",
          "date-fns/isBefore",
          "date-fns/isWithinInterval",
          "date-fns/toDate",
          "date-fns/parse",
          "date-fns/parseISO",
          "react-onclickoutside",
          "react-dom",
          "react-popper",
        ],
        t
      )
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).DatePicker = {}),
        e.React,
        e.PropTypes,
        e.classNames,
        e.isDate,
        e.isValidDate,
        e.format,
        e.addMinutes,
        e.addHours,
        e.addDays,
        e.addWeeks,
        e.addMonths,
        e.addYears,
        null,
        null,
        e.subDays,
        e.subWeeks,
        e.subMonths,
        e.subYears,
        e.getSeconds,
        e.getMinutes,
        e.getHours,
        e.getDay,
        e.getDate,
        e.getISOWeek,
        e.getMonth,
        e.getQuarter,
        e.getYear,
        e.getTime,
        e.setSeconds,
        e.setMinutes,
        e.setHours,
        e.setMonth,
        e.setQuarter,
        e.setYear,
        e.min,
        e.max,
        e.differenceInCalendarDays,
        e.differenceInCalendarMonths,
        null,
        e.differenceInCalendarYears,
        e.startOfDay,
        e.startOfWeek,
        e.startOfMonth,
        e.startOfQuarter,
        e.startOfYear,
        e.endOfDay,
        null,
        null,
        e.dfIsEqual,
        e.dfIsSameDay,
        e.dfIsSameMonth,
        e.dfIsSameYear,
        e.dfIsSameQuarter,
        e.isAfter,
        e.isBefore,
        e.isWithinInterval,
        e.toDate,
        e.parse,
        e.parseISO,
        e.onClickOutside,
        e.ReactDOM,
        e.ReactPopper
      );
})(
  this,
  function (
    e,
    t,
    a,
    r,
    n,
    o,
    s,
    l,
    i,
    d,
    u,
    p,
    c,
    f,
    h,
    m,
    D,
    y,
    b,
    v,
    g,
    w,
    k,
    C,
    S,
    M,
    _,
    O,
    P,
    N,
    x,
    T,
    I,
    E,
    Y,
    L,
    R,
    F,
    q,
    A,
    W,
    B,
    j,
    K,
    H,
    Q,
    V,
    U,
    $,
    z,
    G,
    J,
    X,
    Z,
    ee,
    te,
    ae,
    re,
    ne,
    oe,
    se,
    le,
    ie
  ) {
    "use strict";
    function de(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var ue = de(t),
      pe = de(a),
      ce = de(r),
      fe = de(n),
      he = de(o),
      me = de(s),
      De = de(l),
      ye = de(i),
      be = de(d),
      ve = de(u),
      ge = de(p),
      we = de(c),
      ke = de(m),
      Ce = de(D),
      Se = de(y),
      Me = de(b),
      _e = de(v),
      Oe = de(g),
      Pe = de(w),
      Ne = de(k),
      xe = de(C),
      Te = de(S),
      Ie = de(M),
      Ee = de(_),
      Ye = de(O),
      Le = de(P),
      Re = de(N),
      Fe = de(x),
      qe = de(T),
      Ae = de(I),
      We = de(E),
      Be = de(Y),
      je = de(L),
      Ke = de(R),
      He = de(F),
      Qe = de(q),
      Ve = de(W),
      Ue = de(B),
      $e = de(j),
      ze = de(K),
      Ge = de(H),
      Je = de(Q),
      Xe = de(V),
      Ze = de(z),
      et = de(G),
      tt = de(J),
      at = de(X),
      rt = de(Z),
      nt = de(ee),
      ot = de(te),
      st = de(ae),
      lt = de(re),
      it = de(ne),
      dt = de(oe),
      ut = de(se),
      pt = de(le);
    function ct(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          a.push.apply(a, r);
      }
      return a;
    }
    function ft(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ct(Object(a), !0).forEach(function (t) {
              bt(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : ct(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function ht(e) {
      return (ht =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function mt(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Dt(e, t) {
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function yt(e, t, a) {
      return (
        t && Dt(e.prototype, t),
        a && Dt(e, a),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function bt(e, t, a) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = a),
        e
      );
    }
    function vt() {
      return (vt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)
              Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function gt(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      Object.defineProperty(e, "prototype", {
        value: Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        }),
        writable: !1,
      }),
        t && kt(e, t);
    }
    function wt(e) {
      return (wt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function kt(e, t) {
      return (kt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Ct(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function St(e, t) {
      if (t && ("object" == typeof t || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Ct(e);
    }
    function Mt(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var a,
          r = wt(e);
        if (t) {
          var n = wt(this).constructor;
          a = Reflect.construct(r, arguments, n);
        } else a = r.apply(this, arguments);
        return St(this, a);
      };
    }
    function _t(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Ot(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return Ot(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === a && e.constructor && (a = e.constructor.name);
          if ("Map" === a || "Set" === a) return Array.from(e);
          if (
            "Arguments" === a ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          )
            return Ot(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Ot(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function Pt(e, t) {
      switch (e) {
        case "P":
          return t.date({ width: "short" });
        case "PP":
          return t.date({ width: "medium" });
        case "PPP":
          return t.date({ width: "long" });
        case "PPPP":
        default:
          return t.date({ width: "full" });
      }
    }
    function Nt(e, t) {
      switch (e) {
        case "p":
          return t.time({ width: "short" });
        case "pp":
          return t.time({ width: "medium" });
        case "ppp":
          return t.time({ width: "long" });
        case "pppp":
        default:
          return t.time({ width: "full" });
      }
    }
    var xt = {
        p: Nt,
        P: function (e, t) {
          var a,
            r = e.match(/(P+)(p+)?/) || [],
            n = r[1],
            o = r[2];
          if (!o) return Pt(e, t);
          switch (n) {
            case "P":
              a = t.dateTime({ width: "short" });
              break;
            case "PP":
              a = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              a = t.dateTime({ width: "long" });
              break;
            case "PPPP":
            default:
              a = t.dateTime({ width: "full" });
          }
          return a.replace("{{date}}", Pt(n, t)).replace("{{time}}", Nt(o, t));
        },
      },
      Tt = 12,
      It = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    function Et(e) {
      var t = e
        ? "string" == typeof e || e instanceof String
          ? dt.default(e)
          : lt.default(e)
        : new Date();
      return Lt(t) ? t : null;
    }
    function Yt(e, t, a, r, n) {
      var o = null,
        s = Zt(a) || Zt(Xt()),
        l = !0;
      return Array.isArray(t)
        ? (t.forEach(function (t) {
            var i = it.default(e, t, new Date(), { locale: s });
            r && (l = Lt(i, n) && e === Rt(i, t, a)), Lt(i, n) && l && (o = i);
          }),
          o)
        : ((o = it.default(e, t, new Date(), { locale: s })),
          r
            ? (l = Lt(o) && e === Rt(o, t, a))
            : Lt(o) ||
              ((t = t
                .match(It)
                .map(function (e) {
                  var t = e[0];
                  return "p" === t || "P" === t
                    ? s
                      ? (0, xt[t])(e, s.formatLong)
                      : t
                    : e;
                })
                .join("")),
              e.length > 0 &&
                (o = it.default(e, t.slice(0, e.length), new Date())),
              Lt(o) || (o = new Date(e))),
          Lt(o) && l ? o : null);
    }
    function Lt(e, t) {
      return (
        (t = t || new Date("1/1/1000")), he.default(e) && !ot.default(e, t)
      );
    }
    function Rt(e, t, a) {
      if ("en" === a) return me.default(e, t, { awareOfUnicodeTokens: !0 });
      var r = Zt(a);
      return (
        a &&
          !r &&
          console.warn(
            'A locale object was not found for the provided string ["'.concat(
              a,
              '"].'
            )
          ),
        !r && Xt() && Zt(Xt()) && (r = Zt(Xt())),
        me.default(e, t, { locale: r || null, awareOfUnicodeTokens: !0 })
      );
    }
    function Ft(e, t) {
      var a = t.dateFormat,
        r = t.locale;
      return (e && Rt(e, Array.isArray(a) ? a[0] : a, r)) || "";
    }
    function qt(e, t) {
      var a = t.hour,
        r = void 0 === a ? 0 : a,
        n = t.minute,
        o = void 0 === n ? 0 : n,
        s = t.second,
        l = void 0 === s ? 0 : s;
      return qe.default(Fe.default(Re.default(e, l), o), r);
    }
    function At(e, t) {
      var a = (t && Zt(t)) || (Xt() && Zt(Xt()));
      return Te.default(e, a ? { locale: a } : null);
    }
    function Wt(e, t) {
      return Rt(e, "ddd", t);
    }
    function Bt(e) {
      return Ue.default(e);
    }
    function jt(e, t, a) {
      var r = Zt(t || Xt());
      return $e.default(e, { locale: r, weekStartsOn: a });
    }
    function Kt(e) {
      return ze.default(e);
    }
    function Ht(e) {
      return Je.default(e);
    }
    function Qt(e) {
      return Ge.default(e);
    }
    function Vt(e, t) {
      return e && t ? at.default(e, t) : !e && !t;
    }
    function Ut(e, t) {
      return e && t ? tt.default(e, t) : !e && !t;
    }
    function $t(e, t) {
      return e && t ? rt.default(e, t) : !e && !t;
    }
    function zt(e, t) {
      return e && t ? et.default(e, t) : !e && !t;
    }
    function Gt(e, t) {
      return e && t ? Ze.default(e, t) : !e && !t;
    }
    function Jt(e, t, a) {
      var r,
        n = Ue.default(t),
        o = Xe.default(a);
      try {
        r = st.default(e, { start: n, end: o });
      } catch (e) {
        r = !1;
      }
      return r;
    }
    function Xt() {
      return ("undefined" != typeof window ? window : globalThis).__localeId__;
    }
    function Zt(e) {
      if ("string" == typeof e) {
        var t = "undefined" != typeof window ? window : globalThis;
        return t.__localeData__ ? t.__localeData__[e] : null;
      }
      return e;
    }
    function ea(e, t) {
      return Rt(Ae.default(Et(), e), "LLLL", t);
    }
    function ta(e, t) {
      return Rt(Ae.default(Et(), e), "LLL", t);
    }
    function aa(e, t) {
      return Rt(We.default(Et(), e), "QQQ", t);
    }
    function ra(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.excludeDateIntervals,
        s = t.includeDates,
        l = t.includeDateIntervals,
        i = t.filterDate;
      return (
        ua(e, { minDate: a, maxDate: r }) ||
        (n &&
          n.some(function (t) {
            return zt(e, t);
          })) ||
        (o &&
          o.some(function (t) {
            var a = t.start,
              r = t.end;
            return st.default(e, { start: a, end: r });
          })) ||
        (s &&
          !s.some(function (t) {
            return zt(e, t);
          })) ||
        (l &&
          !l.some(function (t) {
            var a = t.start,
              r = t.end;
            return st.default(e, { start: a, end: r });
          })) ||
        (i && !i(Et(e))) ||
        !1
      );
    }
    function na(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.excludeDates,
        r = t.excludeDateIntervals;
      return r && r.length > 0
        ? r.some(function (t) {
            var a = t.start,
              r = t.end;
            return st.default(e, { start: a, end: r });
          })
        : (a &&
            a.some(function (t) {
              return zt(e, t);
            })) ||
            !1;
    }
    function oa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ua(e, { minDate: a, maxDate: r }) ||
        (n &&
          n.some(function (t) {
            return Ut(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Ut(e, t);
          })) ||
        (s && !s(Et(e))) ||
        !1
      );
    }
    function sa(e, t, a, r) {
      var n = Ye.default(e),
        o = Ie.default(e),
        s = Ye.default(t),
        l = Ie.default(t),
        i = Ye.default(r);
      return n === s && n === i
        ? o <= a && a <= l
        : n < s
        ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
        : void 0;
    }
    function la(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ua(e, { minDate: a, maxDate: r }) ||
        (n &&
          n.some(function (t) {
            return $t(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return $t(e, t);
          })) ||
        (s && !s(Et(e))) ||
        !1
      );
    }
    function ia(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = new Date(e, 0, 1);
      return ua(n, { minDate: a, maxDate: r }) || !1;
    }
    function da(e, t, a, r) {
      var n = Ye.default(e),
        o = Ee.default(e),
        s = Ye.default(t),
        l = Ee.default(t),
        i = Ye.default(r);
      return n === s && n === i
        ? o <= a && a <= l
        : n < s
        ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
        : void 0;
    }
    function ua(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate;
      return (a && He.default(e, a) < 0) || (r && He.default(e, r) > 0);
    }
    function pa(e, t) {
      return t.some(function (t) {
        return (
          Pe.default(t) === Pe.default(e) && Oe.default(t) === Oe.default(e)
        );
      });
    }
    function ca(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.excludeTimes,
        r = t.includeTimes,
        n = t.filterTime;
      return (a && pa(e, a)) || (r && !pa(e, r)) || (n && !n(e)) || !1;
    }
    function fa(e, t) {
      var a = t.minTime,
        r = t.maxTime;
      if (!a || !r) throw new Error("Both minTime and maxTime props required");
      var n,
        o = Et(),
        s = qe.default(Fe.default(o, Oe.default(e)), Pe.default(e)),
        l = qe.default(Fe.default(o, Oe.default(a)), Pe.default(a)),
        i = qe.default(Fe.default(o, Oe.default(r)), Pe.default(r));
      try {
        n = !st.default(s, { start: l, end: i });
      } catch (e) {
        n = !1;
      }
      return n;
    }
    function ha(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.includeDates,
        n = Se.default(e, 1);
      return (
        (a && Qe.default(a, n) > 0) ||
        (r &&
          r.every(function (e) {
            return Qe.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function ma(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.maxDate,
        r = t.includeDates,
        n = ge.default(e, 1);
      return (
        (a && Qe.default(n, a) > 0) ||
        (r &&
          r.every(function (e) {
            return Qe.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function Da(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.includeDates,
        n = Me.default(e, 1);
      return (
        (a && Ve.default(a, n) > 0) ||
        (r &&
          r.every(function (e) {
            return Ve.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function ya(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.maxDate,
        r = t.includeDates,
        n = we.default(e, 1);
      return (
        (a && Ve.default(n, a) > 0) ||
        (r &&
          r.every(function (e) {
            return Ve.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function ba(e) {
      var t = e.minDate,
        a = e.includeDates;
      if (a && t) {
        var r = a.filter(function (e) {
          return He.default(e, t) >= 0;
        });
        return je.default(r);
      }
      return a ? je.default(a) : t;
    }
    function va(e) {
      var t = e.maxDate,
        a = e.includeDates;
      if (a && t) {
        var r = a.filter(function (e) {
          return He.default(e, t) <= 0;
        });
        return Ke.default(r);
      }
      return a ? Ke.default(a) : t;
    }
    function ga() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "react-datepicker__day--highlighted",
          a = new Map(),
          r = 0,
          n = e.length;
        r < n;
        r++
      ) {
        var o = e[r];
        if (fe.default(o)) {
          var s = Rt(o, "MM.dd.yyyy"),
            l = a.get(s) || [];
          l.includes(t) || (l.push(t), a.set(s, l));
        } else if ("object" === ht(o)) {
          var i = Object.keys(o),
            d = i[0],
            u = o[i[0]];
          if ("string" == typeof d && u.constructor === Array)
            for (var p = 0, c = u.length; p < c; p++) {
              var f = Rt(u[p], "MM.dd.yyyy"),
                h = a.get(f) || [];
              h.includes(d) || (h.push(d), a.set(f, h));
            }
        }
      }
      return a;
    }
    function wa(e, t, a, r, n) {
      for (var o = n.length, s = [], l = 0; l < o; l++) {
        var i = De.default(ye.default(e, Pe.default(n[l])), Oe.default(n[l])),
          d = De.default(e, (a + 1) * r);
        nt.default(i, t) && ot.default(i, d) && s.push(n[l]);
      }
      return s;
    }
    function ka(e) {
      return e < 10 ? "0".concat(e) : "".concat(e);
    }
    function Ca(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tt,
        a = Math.ceil(Ye.default(e) / t) * t,
        r = a - (t - 1);
      return { startPeriod: r, endPeriod: a };
    }
    function Sa(e, t, a, r) {
      for (var n = [], o = 0; o < 2 * t + 1; o++) {
        var s = e + t - o,
          l = !0;
        a && (l = Ye.default(a) <= s),
          r && l && (l = Ye.default(r) >= s),
          l && n.push(s);
      }
      return n;
    }
    var Ma = (function (e) {
      gt(r, e);
      var a = Mt(r);
      function r(e) {
        var n;
        mt(this, r),
          bt(Ct((n = a.call(this, e))), "renderOptions", function () {
            var e = n.props.year,
              t = n.state.yearsList.map(function (t) {
                return ue.default.createElement(
                  "div",
                  {
                    className:
                      e === t
                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                        : "react-datepicker__year-option",
                    key: t,
                    onClick: n.onChange.bind(Ct(n), t),
                    "aria-selected": e === t ? "true" : void 0,
                  },
                  e === t
                    ? ue.default.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected",
                        },
                        "✓"
                      )
                    : "",
                  t
                );
              }),
              a = n.props.minDate ? Ye.default(n.props.minDate) : null,
              r = n.props.maxDate ? Ye.default(n.props.maxDate) : null;
            return (
              (r &&
                n.state.yearsList.find(function (e) {
                  return e === r;
                })) ||
                t.unshift(
                  ue.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "upcoming",
                      onClick: n.incrementYears,
                    },
                    ue.default.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                    })
                  )
                ),
              (a &&
                n.state.yearsList.find(function (e) {
                  return e === a;
                })) ||
                t.push(
                  ue.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "previous",
                      onClick: n.decrementYears,
                    },
                    ue.default.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                    })
                  )
                ),
              t
            );
          }),
          bt(Ct(n), "onChange", function (e) {
            n.props.onChange(e);
          }),
          bt(Ct(n), "handleClickOutside", function () {
            n.props.onCancel();
          }),
          bt(Ct(n), "shiftYears", function (e) {
            var t = n.state.yearsList.map(function (t) {
              return t + e;
            });
            n.setState({ yearsList: t });
          }),
          bt(Ct(n), "incrementYears", function () {
            return n.shiftYears(1);
          }),
          bt(Ct(n), "decrementYears", function () {
            return n.shiftYears(-1);
          });
        var o = e.yearDropdownItemNumber,
          s = e.scrollableYearDropdown,
          l = o || (s ? 10 : 5);
        return (
          (n.state = {
            yearsList: Sa(n.props.year, l, n.props.minDate, n.props.maxDate),
          }),
          (n.dropdownRef = t.createRef()),
          n
        );
      }
      return (
        yt(r, [
          {
            key: "componentDidMount",
            value: function () {
              var e = this.dropdownRef.current;
              e && (e.scrollTop = e.scrollHeight / 2 - e.clientHeight / 2);
            },
          },
          {
            key: "render",
            value: function () {
              var e = ce.default({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable":
                  this.props.scrollableYearDropdown,
              });
              return ue.default.createElement(
                "div",
                { className: e, ref: this.dropdownRef },
                this.renderOptions()
              );
            },
          },
        ]),
        r
      );
    })(ue.default.Component);
    bt(Ma, "propTypes", {
      minDate: pe.default.instanceOf(Date),
      maxDate: pe.default.instanceOf(Date),
      onCancel: pe.default.func.isRequired,
      onChange: pe.default.func.isRequired,
      scrollableYearDropdown: pe.default.bool,
      year: pe.default.number.isRequired,
      yearDropdownItemNumber: pe.default.number,
    });
    var _a = ut.default(Ma),
      Oa = (function (e) {
        gt(a, e);
        var t = Mt(a);
        function a() {
          var e;
          mt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            bt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            bt(Ct(e), "renderSelectOptions", function () {
              for (
                var t = e.props.minDate ? Ye.default(e.props.minDate) : 1900,
                  a = e.props.maxDate ? Ye.default(e.props.maxDate) : 2100,
                  r = [],
                  n = t;
                n <= a;
                n++
              )
                r.push(
                  ue.default.createElement("option", { key: n, value: n }, n)
                );
              return r;
            }),
            bt(Ct(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            bt(Ct(e), "renderSelectMode", function () {
              return ue.default.createElement(
                "select",
                {
                  value: e.props.year,
                  className: "react-datepicker__year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            bt(Ct(e), "renderReadView", function (t) {
              return ue.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                ue.default.createElement("span", {
                  className: "react-datepicker__year-read-view--down-arrow",
                }),
                ue.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__year-read-view--selected-year",
                  },
                  e.props.year
                )
              );
            }),
            bt(Ct(e), "renderDropdown", function () {
              return ue.default.createElement(_a, {
                key: "dropdown",
                year: e.props.year,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableYearDropdown: e.props.scrollableYearDropdown,
                yearDropdownItemNumber: e.props.yearDropdownItemNumber,
              });
            }),
            bt(Ct(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                a = [e.renderReadView(!t)];
              return t && a.unshift(e.renderDropdown()), a;
            }),
            bt(Ct(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
            }),
            bt(Ct(e), "toggleDropdown", function (t) {
              e.setState(
                { dropdownVisible: !e.state.dropdownVisible },
                function () {
                  e.props.adjustDateOnChange &&
                    e.handleYearChange(e.props.date, t);
                }
              );
            }),
            bt(Ct(e), "handleYearChange", function (t, a) {
              e.onSelect(t, a), e.setOpen();
            }),
            bt(Ct(e), "onSelect", function (t, a) {
              e.props.onSelect && e.props.onSelect(t, a);
            }),
            bt(Ct(e), "setOpen", function () {
              e.props.setOpen && e.props.setOpen(!0);
            }),
            e
          );
        }
        return (
          yt(a, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return ue.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          a
        );
      })(ue.default.Component);
    bt(Oa, "propTypes", {
      adjustDateOnChange: pe.default.bool,
      dropdownMode: pe.default.oneOf(["scroll", "select"]).isRequired,
      maxDate: pe.default.instanceOf(Date),
      minDate: pe.default.instanceOf(Date),
      onChange: pe.default.func.isRequired,
      scrollableYearDropdown: pe.default.bool,
      year: pe.default.number.isRequired,
      yearDropdownItemNumber: pe.default.number,
      date: pe.default.instanceOf(Date),
      onSelect: pe.default.func,
      setOpen: pe.default.func,
    });
    var Pa = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a() {
        var e;
        mt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          bt(
            Ct((e = t.call.apply(t, [this].concat(n)))),
            "isSelectedMonth",
            function (t) {
              return e.props.month === t;
            }
          ),
          bt(Ct(e), "renderOptions", function () {
            return e.props.monthNames.map(function (t, a) {
              return ue.default.createElement(
                "div",
                {
                  className: e.isSelectedMonth(a)
                    ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                    : "react-datepicker__month-option",
                  key: t,
                  onClick: e.onChange.bind(Ct(e), a),
                  "aria-selected": e.isSelectedMonth(a) ? "true" : void 0,
                },
                e.isSelectedMonth(a)
                  ? ue.default.createElement(
                      "span",
                      { className: "react-datepicker__month-option--selected" },
                      "✓"
                    )
                  : "",
                t
              );
            });
          }),
          bt(Ct(e), "onChange", function (t) {
            return e.props.onChange(t);
          }),
          bt(Ct(e), "handleClickOutside", function () {
            return e.props.onCancel();
          }),
          e
        );
      }
      return (
        yt(a, [
          {
            key: "render",
            value: function () {
              return ue.default.createElement(
                "div",
                { className: "react-datepicker__month-dropdown" },
                this.renderOptions()
              );
            },
          },
        ]),
        a
      );
    })(ue.default.Component);
    bt(Pa, "propTypes", {
      onCancel: pe.default.func.isRequired,
      onChange: pe.default.func.isRequired,
      month: pe.default.number.isRequired,
      monthNames: pe.default.arrayOf(pe.default.string.isRequired).isRequired,
    });
    var Na = ut.default(Pa),
      xa = (function (e) {
        gt(a, e);
        var t = Mt(a);
        function a() {
          var e;
          mt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            bt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            bt(Ct(e), "renderSelectOptions", function (e) {
              return e.map(function (e, t) {
                return ue.default.createElement(
                  "option",
                  { key: t, value: t },
                  e
                );
              });
            }),
            bt(Ct(e), "renderSelectMode", function (t) {
              return ue.default.createElement(
                "select",
                {
                  value: e.props.month,
                  className: "react-datepicker__month-select",
                  onChange: function (t) {
                    return e.onChange(t.target.value);
                  },
                },
                e.renderSelectOptions(t)
              );
            }),
            bt(Ct(e), "renderReadView", function (t, a) {
              return ue.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-read-view",
                  onClick: e.toggleDropdown,
                },
                ue.default.createElement("span", {
                  className: "react-datepicker__month-read-view--down-arrow",
                }),
                ue.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-read-view--selected-month",
                  },
                  a[e.props.month]
                )
              );
            }),
            bt(Ct(e), "renderDropdown", function (t) {
              return ue.default.createElement(Na, {
                key: "dropdown",
                month: e.props.month,
                monthNames: t,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
              });
            }),
            bt(Ct(e), "renderScrollMode", function (t) {
              var a = e.state.dropdownVisible,
                r = [e.renderReadView(!a, t)];
              return a && r.unshift(e.renderDropdown(t)), r;
            }),
            bt(Ct(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
            }),
            bt(Ct(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          yt(a, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this,
                  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                    this.props.useShortMonthInDropdown
                      ? function (e) {
                          return ta(e, t.props.locale);
                        }
                      : function (e) {
                          return ea(e, t.props.locale);
                        }
                  );
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode(a);
                    break;
                  case "select":
                    e = this.renderSelectMode(a);
                }
                return ue.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          a
        );
      })(ue.default.Component);
    function Ta(e, t) {
      for (var a = [], r = Kt(e), n = Kt(t); !nt.default(r, n); )
        a.push(Et(r)), (r = ge.default(r, 1));
      return a;
    }
    bt(xa, "propTypes", {
      dropdownMode: pe.default.oneOf(["scroll", "select"]).isRequired,
      locale: pe.default.string,
      month: pe.default.number.isRequired,
      onChange: pe.default.func.isRequired,
      useShortMonthInDropdown: pe.default.bool,
    });
    var Ia = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a(e) {
        var r;
        return (
          mt(this, a),
          bt(Ct((r = t.call(this, e))), "renderOptions", function () {
            return r.state.monthYearsList.map(function (e) {
              var t = Le.default(e),
                a = Vt(r.props.date, e) && Ut(r.props.date, e);
              return ue.default.createElement(
                "div",
                {
                  className: a
                    ? "react-datepicker__month-year-option--selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: t,
                  onClick: r.onChange.bind(Ct(r), t),
                  "aria-selected": a ? "true" : void 0,
                },
                a
                  ? ue.default.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected",
                      },
                      "✓"
                    )
                  : "",
                Rt(e, r.props.dateFormat, r.props.locale)
              );
            });
          }),
          bt(Ct(r), "onChange", function (e) {
            return r.props.onChange(e);
          }),
          bt(Ct(r), "handleClickOutside", function () {
            r.props.onCancel();
          }),
          (r.state = { monthYearsList: Ta(r.props.minDate, r.props.maxDate) }),
          r
        );
      }
      return (
        yt(a, [
          {
            key: "render",
            value: function () {
              var e = ce.default({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable":
                  this.props.scrollableMonthYearDropdown,
              });
              return ue.default.createElement(
                "div",
                { className: e },
                this.renderOptions()
              );
            },
          },
        ]),
        a
      );
    })(ue.default.Component);
    bt(Ia, "propTypes", {
      minDate: pe.default.instanceOf(Date).isRequired,
      maxDate: pe.default.instanceOf(Date).isRequired,
      onCancel: pe.default.func.isRequired,
      onChange: pe.default.func.isRequired,
      scrollableMonthYearDropdown: pe.default.bool,
      date: pe.default.instanceOf(Date).isRequired,
      dateFormat: pe.default.string.isRequired,
      locale: pe.default.string,
    });
    var Ea = ut.default(Ia),
      Ya = (function (e) {
        gt(a, e);
        var t = Mt(a);
        function a() {
          var e;
          mt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            bt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            bt(Ct(e), "renderSelectOptions", function () {
              for (
                var t = Kt(e.props.minDate), a = Kt(e.props.maxDate), r = [];
                !nt.default(t, a);

              ) {
                var n = Le.default(t);
                r.push(
                  ue.default.createElement(
                    "option",
                    { key: n, value: n },
                    Rt(t, e.props.dateFormat, e.props.locale)
                  )
                ),
                  (t = ge.default(t, 1));
              }
              return r;
            }),
            bt(Ct(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            bt(Ct(e), "renderSelectMode", function () {
              return ue.default.createElement(
                "select",
                {
                  value: Le.default(Kt(e.props.date)),
                  className: "react-datepicker__month-year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            bt(Ct(e), "renderReadView", function (t) {
              var a = Rt(e.props.date, e.props.dateFormat, e.props.locale);
              return ue.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                ue.default.createElement("span", {
                  className:
                    "react-datepicker__month-year-read-view--down-arrow",
                }),
                ue.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-year-read-view--selected-month-year",
                  },
                  a
                )
              );
            }),
            bt(Ct(e), "renderDropdown", function () {
              return ue.default.createElement(Ea, {
                key: "dropdown",
                date: e.props.date,
                dateFormat: e.props.dateFormat,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableMonthYearDropdown:
                  e.props.scrollableMonthYearDropdown,
                locale: e.props.locale,
              });
            }),
            bt(Ct(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                a = [e.renderReadView(!t)];
              return t && a.unshift(e.renderDropdown()), a;
            }),
            bt(Ct(e), "onChange", function (t) {
              e.toggleDropdown();
              var a = Et(parseInt(t));
              (Vt(e.props.date, a) && Ut(e.props.date, a)) ||
                e.props.onChange(a);
            }),
            bt(Ct(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          yt(a, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return ue.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          a
        );
      })(ue.default.Component);
    bt(Ya, "propTypes", {
      dropdownMode: pe.default.oneOf(["scroll", "select"]).isRequired,
      dateFormat: pe.default.string.isRequired,
      locale: pe.default.string,
      maxDate: pe.default.instanceOf(Date).isRequired,
      minDate: pe.default.instanceOf(Date).isRequired,
      date: pe.default.instanceOf(Date).isRequired,
      onChange: pe.default.func.isRequired,
      scrollableMonthYearDropdown: pe.default.bool,
    });
    var La = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a() {
        var e;
        mt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          bt(
            Ct((e = t.call.apply(t, [this].concat(n)))),
            "dayEl",
            ue.default.createRef()
          ),
          bt(Ct(e), "handleClick", function (t) {
            !e.isDisabled() && e.props.onClick && e.props.onClick(t);
          }),
          bt(Ct(e), "handleMouseEnter", function (t) {
            !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
          }),
          bt(Ct(e), "handleOnKeyDown", function (t) {
            " " === t.key && (t.preventDefault(), (t.key = "Enter")),
              e.props.handleOnKeyDown(t);
          }),
          bt(Ct(e), "isSameDay", function (t) {
            return zt(e.props.day, t);
          }),
          bt(Ct(e), "isKeyboardSelected", function () {
            return (
              !e.props.disabledKeyboardNavigation &&
              !e.isSameDay(e.props.selected) &&
              e.isSameDay(e.props.preSelection)
            );
          }),
          bt(Ct(e), "isDisabled", function () {
            return ra(e.props.day, e.props);
          }),
          bt(Ct(e), "isExcluded", function () {
            return na(e.props.day, e.props);
          }),
          bt(Ct(e), "getHighLightedClass", function (t) {
            var a = e.props,
              r = a.day,
              n = a.highlightDates;
            if (!n) return !1;
            var o = Rt(r, "MM.dd.yyyy");
            return n.get(o);
          }),
          bt(Ct(e), "isInRange", function () {
            var t = e.props,
              a = t.day,
              r = t.startDate,
              n = t.endDate;
            return !(!r || !n) && Jt(a, r, n);
          }),
          bt(Ct(e), "isInSelectingRange", function () {
            var t,
              a = e.props,
              r = a.day,
              n = a.selectsStart,
              o = a.selectsEnd,
              s = a.selectsRange,
              l = a.selectsDisabledDaysInRange,
              i = a.startDate,
              d = a.endDate,
              u =
                null !== (t = e.props.selectingDate) && void 0 !== t
                  ? t
                  : e.props.preSelection;
            return (
              !(!(n || o || s) || !u || (!l && e.isDisabled())) &&
              (n && d && (ot.default(u, d) || Gt(u, d))
                ? Jt(r, u, d)
                : ((o && i && (nt.default(u, i) || Gt(u, i))) ||
                    !(!s || !i || d || (!nt.default(u, i) && !Gt(u, i)))) &&
                  Jt(r, i, u))
            );
          }),
          bt(Ct(e), "isSelectingRangeStart", function () {
            var t;
            if (!e.isInSelectingRange()) return !1;
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.selectsStart,
              s =
                null !== (t = e.props.selectingDate) && void 0 !== t
                  ? t
                  : e.props.preSelection;
            return zt(r, o ? s : n);
          }),
          bt(Ct(e), "isSelectingRangeEnd", function () {
            var t;
            if (!e.isInSelectingRange()) return !1;
            var a = e.props,
              r = a.day,
              n = a.endDate,
              o = a.selectsEnd,
              s =
                null !== (t = e.props.selectingDate) && void 0 !== t
                  ? t
                  : e.props.preSelection;
            return zt(r, o ? s : n);
          }),
          bt(Ct(e), "isRangeStart", function () {
            var t = e.props,
              a = t.day,
              r = t.startDate,
              n = t.endDate;
            return !(!r || !n) && zt(r, a);
          }),
          bt(Ct(e), "isRangeEnd", function () {
            var t = e.props,
              a = t.day,
              r = t.startDate,
              n = t.endDate;
            return !(!r || !n) && zt(n, a);
          }),
          bt(Ct(e), "isWeekend", function () {
            var t = Ne.default(e.props.day);
            return 0 === t || 6 === t;
          }),
          bt(Ct(e), "isAfterMonth", function () {
            return (
              void 0 !== e.props.month &&
              (e.props.month + 1) % 12 === Ie.default(e.props.day)
            );
          }),
          bt(Ct(e), "isBeforeMonth", function () {
            return (
              void 0 !== e.props.month &&
              (Ie.default(e.props.day) + 1) % 12 === e.props.month
            );
          }),
          bt(Ct(e), "isCurrentDay", function () {
            return e.isSameDay(Et());
          }),
          bt(Ct(e), "isSelected", function () {
            return e.isSameDay(e.props.selected);
          }),
          bt(Ct(e), "getClassNames", function (t) {
            var a = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
            return ce.default(
              "react-datepicker__day",
              a,
              "react-datepicker__day--" + Wt(e.props.day),
              {
                "react-datepicker__day--disabled": e.isDisabled(),
                "react-datepicker__day--excluded": e.isExcluded(),
                "react-datepicker__day--selected": e.isSelected(),
                "react-datepicker__day--keyboard-selected":
                  e.isKeyboardSelected(),
                "react-datepicker__day--range-start": e.isRangeStart(),
                "react-datepicker__day--range-end": e.isRangeEnd(),
                "react-datepicker__day--in-range": e.isInRange(),
                "react-datepicker__day--in-selecting-range":
                  e.isInSelectingRange(),
                "react-datepicker__day--selecting-range-start":
                  e.isSelectingRangeStart(),
                "react-datepicker__day--selecting-range-end":
                  e.isSelectingRangeEnd(),
                "react-datepicker__day--today": e.isCurrentDay(),
                "react-datepicker__day--weekend": e.isWeekend(),
                "react-datepicker__day--outside-month":
                  e.isAfterMonth() || e.isBeforeMonth(),
              },
              e.getHighLightedClass("react-datepicker__day--highlighted")
            );
          }),
          bt(Ct(e), "getAriaLabel", function () {
            var t = e.props,
              a = t.day,
              r = t.ariaLabelPrefixWhenEnabled,
              n = void 0 === r ? "Choose" : r,
              o = t.ariaLabelPrefixWhenDisabled,
              s = void 0 === o ? "Not available" : o,
              l = e.isDisabled() || e.isExcluded() ? s : n;
            return "".concat(l, " ").concat(Rt(a, "PPPP", e.props.locale));
          }),
          bt(Ct(e), "getTabIndex", function (t, a) {
            var r = t || e.props.selected,
              n = a || e.props.preSelection;
            return e.isKeyboardSelected() || (e.isSameDay(r) && zt(n, r))
              ? 0
              : -1;
          }),
          bt(Ct(e), "handleFocusDay", function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a = !1;
            0 === e.getTabIndex() &&
              !t.isInputFocused &&
              e.isSameDay(e.props.preSelection) &&
              ((document.activeElement &&
                document.activeElement !== document.body) ||
                (a = !0),
              e.props.inline && !e.props.shouldFocusDayInline && (a = !1),
              e.props.containerRef &&
                e.props.containerRef.current &&
                e.props.containerRef.current.contains(document.activeElement) &&
                document.activeElement.classList.contains(
                  "react-datepicker__day"
                ) &&
                (a = !0)),
              a && e.dayEl.current.focus({ preventScroll: !0 });
          }),
          bt(Ct(e), "renderDayContents", function () {
            return (e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth()) ||
              (e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth())
              ? null
              : e.props.renderDayContents
              ? e.props.renderDayContents(xe.default(e.props.day), e.props.day)
              : xe.default(e.props.day);
          }),
          bt(Ct(e), "render", function () {
            return ue.default.createElement(
              "div",
              {
                ref: e.dayEl,
                className: e.getClassNames(e.props.day),
                onKeyDown: e.handleOnKeyDown,
                onClick: e.handleClick,
                onMouseEnter: e.handleMouseEnter,
                tabIndex: e.getTabIndex(),
                "aria-label": e.getAriaLabel(),
                role: "option",
                "aria-disabled": e.isDisabled(),
                "aria-current": e.isCurrentDay() ? "date" : void 0,
                "aria-selected": e.isSelected(),
              },
              e.renderDayContents()
            );
          }),
          e
        );
      }
      return (
        yt(a, [
          {
            key: "componentDidMount",
            value: function () {
              this.handleFocusDay();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e) {
              this.handleFocusDay(e);
            },
          },
        ]),
        a
      );
    })(ue.default.Component);
    bt(La, "propTypes", {
      ariaLabelPrefixWhenEnabled: pe.default.string,
      ariaLabelPrefixWhenDisabled: pe.default.string,
      disabledKeyboardNavigation: pe.default.bool,
      day: pe.default.instanceOf(Date).isRequired,
      dayClassName: pe.default.func,
      endDate: pe.default.instanceOf(Date),
      highlightDates: pe.default.instanceOf(Map),
      inline: pe.default.bool,
      shouldFocusDayInline: pe.default.bool,
      month: pe.default.number,
      onClick: pe.default.func,
      onMouseEnter: pe.default.func,
      preSelection: pe.default.instanceOf(Date),
      selected: pe.default.object,
      selectingDate: pe.default.instanceOf(Date),
      selectsEnd: pe.default.bool,
      selectsStart: pe.default.bool,
      selectsRange: pe.default.bool,
      selectsDisabledDaysInRange: pe.default.bool,
      startDate: pe.default.instanceOf(Date),
      renderDayContents: pe.default.func,
      handleOnKeyDown: pe.default.func,
      containerRef: pe.default.oneOfType([
        pe.default.func,
        pe.default.shape({ current: pe.default.instanceOf(Element) }),
      ]),
      monthShowsDuplicateDaysEnd: pe.default.bool,
      monthShowsDuplicateDaysStart: pe.default.bool,
      locale: pe.default.oneOfType([
        pe.default.string,
        pe.default.shape({ locale: pe.default.object }),
      ]),
    });
    var Ra = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a() {
        var e;
        mt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          bt(
            Ct((e = t.call.apply(t, [this].concat(n)))),
            "handleClick",
            function (t) {
              e.props.onClick && e.props.onClick(t);
            }
          ),
          e
        );
      }
      return (
        yt(a, [
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.weekNumber,
                a = e.ariaLabelPrefix,
                r = void 0 === a ? "week " : a,
                n = {
                  "react-datepicker__week-number": !0,
                  "react-datepicker__week-number--clickable": !!e.onClick,
                };
              return ue.default.createElement(
                "div",
                {
                  className: ce.default(n),
                  "aria-label": "".concat(r, " ").concat(this.props.weekNumber),
                  onClick: this.handleClick,
                },
                t
              );
            },
          },
        ]),
        a
      );
    })(ue.default.Component);
    bt(Ra, "propTypes", {
      weekNumber: pe.default.number.isRequired,
      onClick: pe.default.func,
    });
    var Fa = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a() {
        var e;
        mt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          bt(
            Ct((e = t.call.apply(t, [this].concat(n)))),
            "handleDayClick",
            function (t, a) {
              e.props.onDayClick && e.props.onDayClick(t, a);
            }
          ),
          bt(Ct(e), "handleDayMouseEnter", function (t) {
            e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
          }),
          bt(Ct(e), "handleWeekClick", function (t, a, r) {
            "function" == typeof e.props.onWeekSelect &&
              e.props.onWeekSelect(t, a, r),
              e.props.shouldCloseOnSelect && e.props.setOpen(!1);
          }),
          bt(Ct(e), "formatWeekNumber", function (t) {
            return e.props.formatWeekNumber
              ? e.props.formatWeekNumber(t)
              : At(t);
          }),
          bt(Ct(e), "renderDays", function () {
            var t = jt(e.props.day, e.props.locale, e.props.calendarStartDay),
              a = [],
              r = e.formatWeekNumber(t);
            if (e.props.showWeekNumber) {
              var n = e.props.onWeekSelect
                ? e.handleWeekClick.bind(Ct(e), t, r)
                : void 0;
              a.push(
                ue.default.createElement(Ra, {
                  key: "W",
                  weekNumber: r,
                  onClick: n,
                  ariaLabelPrefix: e.props.ariaLabelPrefix,
                })
              );
            }
            return a.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (a) {
                var r = be.default(t, a);
                return ue.default.createElement(La, {
                  ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
                  ariaLabelPrefixWhenDisabled:
                    e.props.disabledDayAriaLabelPrefix,
                  key: r.valueOf(),
                  day: r,
                  month: e.props.month,
                  onClick: e.handleDayClick.bind(Ct(e), r),
                  onMouseEnter: e.handleDayMouseEnter.bind(Ct(e), r),
                  minDate: e.props.minDate,
                  maxDate: e.props.maxDate,
                  excludeDates: e.props.excludeDates,
                  excludeDateIntervals: e.props.excludeDateIntervals,
                  includeDates: e.props.includeDates,
                  includeDateIntervals: e.props.includeDateIntervals,
                  highlightDates: e.props.highlightDates,
                  selectingDate: e.props.selectingDate,
                  filterDate: e.props.filterDate,
                  preSelection: e.props.preSelection,
                  selected: e.props.selected,
                  selectsStart: e.props.selectsStart,
                  selectsEnd: e.props.selectsEnd,
                  selectsRange: e.props.selectsRange,
                  selectsDisabledDaysInRange:
                    e.props.selectsDisabledDaysInRange,
                  startDate: e.props.startDate,
                  endDate: e.props.endDate,
                  dayClassName: e.props.dayClassName,
                  renderDayContents: e.props.renderDayContents,
                  disabledKeyboardNavigation:
                    e.props.disabledKeyboardNavigation,
                  handleOnKeyDown: e.props.handleOnKeyDown,
                  isInputFocused: e.props.isInputFocused,
                  containerRef: e.props.containerRef,
                  inline: e.props.inline,
                  shouldFocusDayInline: e.props.shouldFocusDayInline,
                  monthShowsDuplicateDaysEnd:
                    e.props.monthShowsDuplicateDaysEnd,
                  monthShowsDuplicateDaysStart:
                    e.props.monthShowsDuplicateDaysStart,
                  locale: e.props.locale,
                });
              })
            );
          }),
          e
        );
      }
      return (
        yt(
          a,
          [
            {
              key: "render",
              value: function () {
                return ue.default.createElement(
                  "div",
                  { className: "react-datepicker__week" },
                  this.renderDays()
                );
              },
            },
          ],
          [
            {
              key: "defaultProps",
              get: function () {
                return { shouldCloseOnSelect: !0 };
              },
            },
          ]
        ),
        a
      );
    })(ue.default.Component);
    bt(Fa, "propTypes", {
      ariaLabelPrefix: pe.default.string,
      disabledKeyboardNavigation: pe.default.bool,
      day: pe.default.instanceOf(Date).isRequired,
      dayClassName: pe.default.func,
      disabledDayAriaLabelPrefix: pe.default.string,
      chooseDayAriaLabelPrefix: pe.default.string,
      endDate: pe.default.instanceOf(Date),
      excludeDates: pe.default.array,
      excludeDateIntervals: pe.default.arrayOf(
        pe.default.shape({
          start: pe.default.instanceOf(Date),
          end: pe.default.instanceOf(Date),
        })
      ),
      filterDate: pe.default.func,
      formatWeekNumber: pe.default.func,
      highlightDates: pe.default.instanceOf(Map),
      includeDates: pe.default.array,
      includeDateIntervals: pe.default.array,
      inline: pe.default.bool,
      shouldFocusDayInline: pe.default.bool,
      locale: pe.default.oneOfType([
        pe.default.string,
        pe.default.shape({ locale: pe.default.object }),
      ]),
      maxDate: pe.default.instanceOf(Date),
      calendarStartDay: pe.default.number,
      minDate: pe.default.instanceOf(Date),
      month: pe.default.number,
      onDayClick: pe.default.func,
      onDayMouseEnter: pe.default.func,
      onWeekSelect: pe.default.func,
      preSelection: pe.default.instanceOf(Date),
      selected: pe.default.instanceOf(Date),
      selectingDate: pe.default.instanceOf(Date),
      selectsEnd: pe.default.bool,
      selectsStart: pe.default.bool,
      selectsRange: pe.default.bool,
      selectsDisabledDaysInRange: pe.default.bool,
      showWeekNumber: pe.default.bool,
      startDate: pe.default.instanceOf(Date),
      setOpen: pe.default.func,
      shouldCloseOnSelect: pe.default.bool,
      renderDayContents: pe.default.func,
      handleOnKeyDown: pe.default.func,
      isInputFocused: pe.default.bool,
      containerRef: pe.default.oneOfType([
        pe.default.func,
        pe.default.shape({ current: pe.default.instanceOf(Element) }),
      ]),
      monthShowsDuplicateDaysEnd: pe.default.bool,
      monthShowsDuplicateDaysStart: pe.default.bool,
    });
    var qa = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a() {
        var e;
        mt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          bt(
            Ct((e = t.call.apply(t, [this].concat(n)))),
            "MONTH_REFS",
            _t(Array(12)).map(function () {
              return ue.default.createRef();
            })
          ),
          bt(Ct(e), "isDisabled", function (t) {
            return ra(t, e.props);
          }),
          bt(Ct(e), "isExcluded", function (t) {
            return na(t, e.props);
          }),
          bt(Ct(e), "handleDayClick", function (t, a) {
            e.props.onDayClick &&
              e.props.onDayClick(t, a, e.props.orderInDisplay);
          }),
          bt(Ct(e), "handleDayMouseEnter", function (t) {
            e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
          }),
          bt(Ct(e), "handleMouseLeave", function () {
            e.props.onMouseLeave && e.props.onMouseLeave();
          }),
          bt(Ct(e), "isRangeStartMonth", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Ut(Ae.default(r, t), n);
          }),
          bt(Ct(e), "isRangeStartQuarter", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && $t(We.default(r, t), n);
          }),
          bt(Ct(e), "isRangeEndMonth", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Ut(Ae.default(r, t), o);
          }),
          bt(Ct(e), "isRangeEndQuarter", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && $t(We.default(r, t), o);
          }),
          bt(Ct(e), "isWeekInMonth", function (t) {
            var a = e.props.day,
              r = be.default(t, 6);
            return Ut(t, a) || Ut(r, a);
          }),
          bt(Ct(e), "isCurrentMonth", function (e, t) {
            return Ye.default(e) === Ye.default(Et()) && t === Ie.default(Et());
          }),
          bt(Ct(e), "isSelectedMonth", function (e, t, a) {
            return Ie.default(e) === t && Ye.default(e) === Ye.default(a);
          }),
          bt(Ct(e), "isSelectedQuarter", function (e, t, a) {
            return Ee.default(e) === t && Ye.default(e) === Ye.default(a);
          }),
          bt(Ct(e), "renderWeeks", function () {
            for (
              var t = [],
                a = e.props.fixedHeight,
                r = 0,
                n = !1,
                o = jt(
                  Kt(e.props.day),
                  e.props.locale,
                  e.props.calendarStartDay
                );
              t.push(
                ue.default.createElement(Fa, {
                  ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                  chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    e.props.disabledDayAriaLabelPrefix,
                  key: r,
                  day: o,
                  month: Ie.default(e.props.day),
                  onDayClick: e.handleDayClick,
                  onDayMouseEnter: e.handleDayMouseEnter,
                  onWeekSelect: e.props.onWeekSelect,
                  formatWeekNumber: e.props.formatWeekNumber,
                  locale: e.props.locale,
                  minDate: e.props.minDate,
                  maxDate: e.props.maxDate,
                  excludeDates: e.props.excludeDates,
                  excludeDateIntervals: e.props.excludeDateIntervals,
                  includeDates: e.props.includeDates,
                  includeDateIntervals: e.props.includeDateIntervals,
                  inline: e.props.inline,
                  shouldFocusDayInline: e.props.shouldFocusDayInline,
                  highlightDates: e.props.highlightDates,
                  selectingDate: e.props.selectingDate,
                  filterDate: e.props.filterDate,
                  preSelection: e.props.preSelection,
                  selected: e.props.selected,
                  selectsStart: e.props.selectsStart,
                  selectsEnd: e.props.selectsEnd,
                  selectsRange: e.props.selectsRange,
                  selectsDisabledDaysInRange:
                    e.props.selectsDisabledDaysInRange,
                  showWeekNumber: e.props.showWeekNumbers,
                  startDate: e.props.startDate,
                  endDate: e.props.endDate,
                  dayClassName: e.props.dayClassName,
                  setOpen: e.props.setOpen,
                  shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                  disabledKeyboardNavigation:
                    e.props.disabledKeyboardNavigation,
                  renderDayContents: e.props.renderDayContents,
                  handleOnKeyDown: e.props.handleOnKeyDown,
                  isInputFocused: e.props.isInputFocused,
                  containerRef: e.props.containerRef,
                  calendarStartDay: e.props.calendarStartDay,
                  monthShowsDuplicateDaysEnd:
                    e.props.monthShowsDuplicateDaysEnd,
                  monthShowsDuplicateDaysStart:
                    e.props.monthShowsDuplicateDaysStart,
                })
              ),
                !n;

            ) {
              r++, (o = ve.default(o, 1));
              var s = a && r >= 6,
                l = !a && !e.isWeekInMonth(o);
              if (s || l) {
                if (!e.props.peekNextMonth) break;
                n = !0;
              }
            }
            return t;
          }),
          bt(Ct(e), "onMonthClick", function (t, a) {
            e.handleDayClick(Kt(Ae.default(e.props.day, a)), t);
          }),
          bt(Ct(e), "handleMonthNavigation", function (t, a) {
            e.isDisabled(a) ||
              e.isExcluded(a) ||
              (e.props.setPreSelection(a),
              e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
          }),
          bt(Ct(e), "onMonthKeyDown", function (t, a) {
            var r = t.key;
            if (!e.props.disabledKeyboardNavigation)
              switch (r) {
                case "Enter":
                  e.onMonthClick(t, a),
                    e.props.setPreSelection(e.props.selected);
                  break;
                case "ArrowRight":
                  e.handleMonthNavigation(
                    11 === a ? 0 : a + 1,
                    ge.default(e.props.preSelection, 1)
                  );
                  break;
                case "ArrowLeft":
                  e.handleMonthNavigation(
                    0 === a ? 11 : a - 1,
                    Se.default(e.props.preSelection, 1)
                  );
              }
          }),
          bt(Ct(e), "onQuarterClick", function (t, a) {
            e.handleDayClick(Qt(We.default(e.props.day, a)), t);
          }),
          bt(Ct(e), "getMonthClassNames", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate,
              s = a.selected,
              l = a.minDate,
              i = a.maxDate,
              d = a.preSelection,
              u = a.monthClassName,
              p = u ? u(r) : void 0;
            return ce.default(
              "react-datepicker__month-text",
              "react-datepicker__month-".concat(t),
              p,
              {
                "react-datepicker__month--disabled":
                  (l || i) && oa(Ae.default(r, t), e.props),
                "react-datepicker__month--selected": e.isSelectedMonth(r, t, s),
                "react-datepicker__month-text--keyboard-selected":
                  Ie.default(d) === t,
                "react-datepicker__month--in-range": sa(n, o, t, r),
                "react-datepicker__month--range-start": e.isRangeStartMonth(t),
                "react-datepicker__month--range-end": e.isRangeEndMonth(t),
                "react-datepicker__month-text--today": e.isCurrentMonth(r, t),
              }
            );
          }),
          bt(Ct(e), "getTabIndex", function (t) {
            var a = Ie.default(e.props.preSelection);
            return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
          }),
          bt(Ct(e), "getAriaLabel", function (t) {
            var a = e.props,
              r = a.ariaLabelPrefix,
              n = void 0 === r ? "Choose" : r,
              o = a.disabledDayAriaLabelPrefix,
              s = void 0 === o ? "Not available" : o,
              l = a.day,
              i = Ae.default(l, t),
              d = e.isDisabled(i) || e.isExcluded(i) ? s : n;
            return "".concat(d, " ").concat(Rt(i, "MMMM yyyy"));
          }),
          bt(Ct(e), "getQuarterClassNames", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate,
              s = a.selected,
              l = a.minDate,
              i = a.maxDate;
            return ce.default(
              "react-datepicker__quarter-text",
              "react-datepicker__quarter-".concat(t),
              {
                "react-datepicker__quarter--disabled":
                  (l || i) && la(We.default(r, t), e.props),
                "react-datepicker__quarter--selected": e.isSelectedQuarter(
                  r,
                  t,
                  s
                ),
                "react-datepicker__quarter--in-range": da(n, o, t, r),
                "react-datepicker__quarter--range-start":
                  e.isRangeStartQuarter(t),
                "react-datepicker__quarter--range-end": e.isRangeEndQuarter(t),
              }
            );
          }),
          bt(Ct(e), "renderMonths", function () {
            var t = e.props,
              a = t.showFullMonthYearPicker,
              r = t.showTwoColumnMonthYearPicker,
              n = t.showFourColumnMonthYearPicker,
              o = t.locale,
              s = t.day,
              l = t.selected;
            return (
              n
                ? [
                    [0, 1, 2, 3],
                    [4, 5, 6, 7],
                    [8, 9, 10, 11],
                  ]
                : r
                ? [
                    [0, 1],
                    [2, 3],
                    [4, 5],
                    [6, 7],
                    [8, 9],
                    [10, 11],
                  ]
                : [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [9, 10, 11],
                  ]
            ).map(function (t, r) {
              return ue.default.createElement(
                "div",
                { className: "react-datepicker__month-wrapper", key: r },
                t.map(function (t, r) {
                  return ue.default.createElement(
                    "div",
                    {
                      ref: e.MONTH_REFS[t],
                      key: r,
                      onClick: function (a) {
                        e.onMonthClick(a, t);
                      },
                      onKeyDown: function (a) {
                        e.onMonthKeyDown(a, t);
                      },
                      tabIndex: e.getTabIndex(t),
                      className: e.getMonthClassNames(t),
                      role: "option",
                      "aria-label": e.getAriaLabel(t),
                      "aria-current": e.isCurrentMonth(s, t) ? "date" : void 0,
                      "aria-selected": e.isSelectedMonth(s, t, l),
                    },
                    a ? ea(t, o) : ta(t, o)
                  );
                })
              );
            });
          }),
          bt(Ct(e), "renderQuarters", function () {
            var t = e.props,
              a = t.day,
              r = t.selected;
            return ue.default.createElement(
              "div",
              { className: "react-datepicker__quarter-wrapper" },
              [1, 2, 3, 4].map(function (t, n) {
                return ue.default.createElement(
                  "div",
                  {
                    key: n,
                    role: "option",
                    onClick: function (a) {
                      e.onQuarterClick(a, t);
                    },
                    className: e.getQuarterClassNames(t),
                    "aria-selected": e.isSelectedQuarter(a, t, r),
                  },
                  aa(t, e.props.locale)
                );
              })
            );
          }),
          bt(Ct(e), "getClassNames", function () {
            var t = e.props;
            t.day;
            var a = t.selectingDate,
              r = t.selectsStart,
              n = t.selectsEnd,
              o = t.showMonthYearPicker,
              s = t.showQuarterYearPicker;
            return ce.default(
              "react-datepicker__month",
              { "react-datepicker__month--selecting-range": a && (r || n) },
              { "react-datepicker__monthPicker": o },
              { "react-datepicker__quarterPicker": s }
            );
          }),
          e
        );
      }
      return (
        yt(a, [
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.showMonthYearPicker,
                a = e.showQuarterYearPicker,
                r = e.day,
                n = e.ariaLabelPrefix,
                o = void 0 === n ? "month " : n;
              return ue.default.createElement(
                "div",
                {
                  className: this.getClassNames(),
                  onMouseLeave: this.handleMouseLeave,
                  "aria-label": "".concat(o, " ").concat(Rt(r, "yyyy-MM")),
                  role: "listbox",
                },
                t
                  ? this.renderMonths()
                  : a
                  ? this.renderQuarters()
                  : this.renderWeeks()
              );
            },
          },
        ]),
        a
      );
    })(ue.default.Component);
    bt(qa, "propTypes", {
      ariaLabelPrefix: pe.default.string,
      chooseDayAriaLabelPrefix: pe.default.string,
      disabledDayAriaLabelPrefix: pe.default.string,
      disabledKeyboardNavigation: pe.default.bool,
      day: pe.default.instanceOf(Date).isRequired,
      dayClassName: pe.default.func,
      monthClassName: pe.default.func,
      endDate: pe.default.instanceOf(Date),
      orderInDisplay: pe.default.number,
      excludeDates: pe.default.array,
      excludeDateIntervals: pe.default.arrayOf(
        pe.default.shape({
          start: pe.default.instanceOf(Date),
          end: pe.default.instanceOf(Date),
        })
      ),
      filterDate: pe.default.func,
      fixedHeight: pe.default.bool,
      formatWeekNumber: pe.default.func,
      highlightDates: pe.default.instanceOf(Map),
      includeDates: pe.default.array,
      includeDateIntervals: pe.default.array,
      inline: pe.default.bool,
      shouldFocusDayInline: pe.default.bool,
      locale: pe.default.oneOfType([
        pe.default.string,
        pe.default.shape({ locale: pe.default.object }),
      ]),
      maxDate: pe.default.instanceOf(Date),
      minDate: pe.default.instanceOf(Date),
      onDayClick: pe.default.func,
      onDayMouseEnter: pe.default.func,
      onMouseLeave: pe.default.func,
      onWeekSelect: pe.default.func,
      peekNextMonth: pe.default.bool,
      preSelection: pe.default.instanceOf(Date),
      setPreSelection: pe.default.func,
      selected: pe.default.instanceOf(Date),
      selectingDate: pe.default.instanceOf(Date),
      calendarStartDay: pe.default.number,
      selectsEnd: pe.default.bool,
      selectsStart: pe.default.bool,
      selectsRange: pe.default.bool,
      selectsDisabledDaysInRange: pe.default.bool,
      showWeekNumbers: pe.default.bool,
      startDate: pe.default.instanceOf(Date),
      setOpen: pe.default.func,
      shouldCloseOnSelect: pe.default.bool,
      renderDayContents: pe.default.func,
      showMonthYearPicker: pe.default.bool,
      showFullMonthYearPicker: pe.default.bool,
      showTwoColumnMonthYearPicker: pe.default.bool,
      showFourColumnMonthYearPicker: pe.default.bool,
      showQuarterYearPicker: pe.default.bool,
      handleOnKeyDown: pe.default.func,
      isInputFocused: pe.default.bool,
      weekAriaLabelPrefix: pe.default.string,
      containerRef: pe.default.oneOfType([
        pe.default.func,
        pe.default.shape({ current: pe.default.instanceOf(Element) }),
      ]),
      monthShowsDuplicateDaysEnd: pe.default.bool,
      monthShowsDuplicateDaysStart: pe.default.bool,
    });
    var Aa = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a() {
        var e;
        mt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          bt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
            height: null,
          }),
          bt(Ct(e), "handleClick", function (t) {
            ((e.props.minTime || e.props.maxTime) && fa(t, e.props)) ||
              ((e.props.excludeTimes ||
                e.props.includeTimes ||
                e.props.filterTime) &&
                ca(t, e.props)) ||
              e.props.onChange(t);
          }),
          bt(Ct(e), "isSelectedTime", function (t, a, r) {
            return (
              e.props.selected && a === Pe.default(t) && r === Oe.default(t)
            );
          }),
          bt(Ct(e), "liClasses", function (t, a, r) {
            var n = [
              "react-datepicker__time-list-item",
              e.props.timeClassName ? e.props.timeClassName(t, a, r) : void 0,
            ];
            return (
              e.isSelectedTime(t, a, r) &&
                n.push("react-datepicker__time-list-item--selected"),
              (((e.props.minTime || e.props.maxTime) && fa(t, e.props)) ||
                ((e.props.excludeTimes ||
                  e.props.includeTimes ||
                  e.props.filterTime) &&
                  ca(t, e.props))) &&
                n.push("react-datepicker__time-list-item--disabled"),
              e.props.injectTimes &&
                (60 * Pe.default(t) + Oe.default(t)) % e.props.intervals != 0 &&
                n.push("react-datepicker__time-list-item--injected"),
              n.join(" ")
            );
          }),
          bt(Ct(e), "handleOnKeyDown", function (t, a) {
            " " === t.key && (t.preventDefault(), (t.key = "Enter")),
              "Enter" === t.key && e.handleClick(a),
              e.props.handleOnKeyDown(t);
          }),
          bt(Ct(e), "renderTimes", function () {
            for (
              var t = [],
                a = e.props.format ? e.props.format : "p",
                r = e.props.intervals,
                n = Bt(Et(e.props.selected)),
                o = 1440 / r,
                s =
                  e.props.injectTimes &&
                  e.props.injectTimes.sort(function (e, t) {
                    return e - t;
                  }),
                l = e.props.selected || e.props.openToDate || Et(),
                i = Pe.default(l),
                d = Oe.default(l),
                u = qe.default(Fe.default(n, d), i),
                p = 0;
              p < o;
              p++
            ) {
              var c = De.default(n, p * r);
              if ((t.push(c), s)) {
                var f = wa(n, c, p, r, s);
                t = t.concat(f);
              }
            }
            return t.map(function (t, r) {
              return ue.default.createElement(
                "li",
                {
                  key: r,
                  onClick: e.handleClick.bind(Ct(e), t),
                  className: e.liClasses(t, i, d),
                  ref: function (a) {
                    (ot.default(t, u) || Gt(t, u)) && (e.centerLi = a);
                  },
                  onKeyDown: function (a) {
                    e.handleOnKeyDown(a, t);
                  },
                  tabIndex: "0",
                  "aria-selected": e.isSelectedTime(t, i, d) ? "true" : void 0,
                },
                Rt(t, a, e.props.locale)
              );
            });
          }),
          e
        );
      }
      return (
        yt(
          a,
          [
            {
              key: "componentDidMount",
              value: function () {
                (this.list.scrollTop = a.calcCenterPosition(
                  this.props.monthRef
                    ? this.props.monthRef.clientHeight -
                        this.header.clientHeight
                    : this.list.clientHeight,
                  this.centerLi
                )),
                  this.props.monthRef &&
                    this.header &&
                    this.setState({
                      height:
                        this.props.monthRef.clientHeight -
                        this.header.clientHeight,
                    });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state.height;
                return ue.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__time-container ".concat(
                      this.props.todayButton
                        ? "react-datepicker__time-container--with-today-button"
                        : ""
                    ),
                  },
                  ue.default.createElement(
                    "div",
                    {
                      className:
                        "react-datepicker__header react-datepicker__header--time ".concat(
                          this.props.showTimeSelectOnly
                            ? "react-datepicker__header--time--only"
                            : ""
                        ),
                      ref: function (t) {
                        e.header = t;
                      },
                    },
                    ue.default.createElement(
                      "div",
                      { className: "react-datepicker-time__header" },
                      this.props.timeCaption
                    )
                  ),
                  ue.default.createElement(
                    "div",
                    { className: "react-datepicker__time" },
                    ue.default.createElement(
                      "div",
                      { className: "react-datepicker__time-box" },
                      ue.default.createElement(
                        "ul",
                        {
                          className: "react-datepicker__time-list",
                          ref: function (t) {
                            e.list = t;
                          },
                          style: t ? { height: t } : {},
                          tabIndex: "0",
                        },
                        this.renderTimes()
                      )
                    )
                  )
                );
              },
            },
          ],
          [
            {
              key: "defaultProps",
              get: function () {
                return {
                  intervals: 30,
                  onTimeChange: function () {},
                  todayButton: null,
                  timeCaption: "Time",
                };
              },
            },
          ]
        ),
        a
      );
    })(ue.default.Component);
    bt(Aa, "calcCenterPosition", function (e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    }),
      bt(Aa, "propTypes", {
        format: pe.default.string,
        includeTimes: pe.default.array,
        intervals: pe.default.number,
        selected: pe.default.instanceOf(Date),
        openToDate: pe.default.instanceOf(Date),
        onChange: pe.default.func,
        timeClassName: pe.default.func,
        todayButton: pe.default.node,
        minTime: pe.default.instanceOf(Date),
        maxTime: pe.default.instanceOf(Date),
        excludeTimes: pe.default.array,
        filterTime: pe.default.func,
        monthRef: pe.default.object,
        timeCaption: pe.default.string,
        injectTimes: pe.default.array,
        handleOnKeyDown: pe.default.func,
        locale: pe.default.oneOfType([
          pe.default.string,
          pe.default.shape({ locale: pe.default.object }),
        ]),
        showTimeSelectOnly: pe.default.bool,
      });
    var Wa = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a(e) {
        var r;
        return (
          mt(this, a),
          bt(
            Ct((r = t.call(this, e))),
            "YEAR_REFS",
            _t(Array(r.props.yearItemNumber)).map(function () {
              return ue.default.createRef();
            })
          ),
          bt(Ct(r), "isDisabled", function (e) {
            return ra(e, r.props);
          }),
          bt(Ct(r), "isExcluded", function (e) {
            return na(e, r.props);
          }),
          bt(Ct(r), "updateFocusOnPaginate", function (e) {
            var t = function () {
              this.YEAR_REFS[e].current.focus();
            }.bind(Ct(r));
            window.requestAnimationFrame(t);
          }),
          bt(Ct(r), "handleYearClick", function (e, t) {
            r.props.onDayClick && r.props.onDayClick(e, t);
          }),
          bt(Ct(r), "handleYearNavigation", function (e, t) {
            var a = r.props,
              n = a.date,
              o = a.yearItemNumber,
              s = Ca(n, o).startPeriod;
            r.isDisabled(t) ||
              r.isExcluded(t) ||
              (r.props.setPreSelection(t),
              e - s == -1
                ? r.updateFocusOnPaginate(o - 1)
                : e - s === o
                ? r.updateFocusOnPaginate(0)
                : r.YEAR_REFS[e - s].current.focus());
          }),
          bt(Ct(r), "isSameDay", function (e, t) {
            return zt(e, t);
          }),
          bt(Ct(r), "isCurrentYear", function (e) {
            return e === Ye.default(Et());
          }),
          bt(Ct(r), "isKeyboardSelected", function (e) {
            var t = Ht(Be.default(r.props.date, e));
            return (
              !r.props.disabledKeyboardNavigation &&
              !r.props.inline &&
              !zt(t, Ht(r.props.selected)) &&
              zt(t, Ht(r.props.preSelection))
            );
          }),
          bt(Ct(r), "onYearClick", function (e, t) {
            var a = r.props.date;
            r.handleYearClick(Ht(Be.default(a, t)), e);
          }),
          bt(Ct(r), "onYearKeyDown", function (e, t) {
            var a = e.key;
            if (!r.props.disabledKeyboardNavigation)
              switch (a) {
                case "Enter":
                  r.onYearClick(e, t),
                    r.props.setPreSelection(r.props.selected);
                  break;
                case "ArrowRight":
                  r.handleYearNavigation(
                    t + 1,
                    we.default(r.props.preSelection, 1)
                  );
                  break;
                case "ArrowLeft":
                  r.handleYearNavigation(
                    t - 1,
                    Me.default(r.props.preSelection, 1)
                  );
              }
          }),
          bt(Ct(r), "getYearClassNames", function (e) {
            var t = r.props,
              a = t.minDate,
              n = t.maxDate,
              o = t.selected;
            return ce.default("react-datepicker__year-text", {
              "react-datepicker__year-text--selected": e === Ye.default(o),
              "react-datepicker__year-text--disabled":
                (a || n) && ia(e, r.props),
              "react-datepicker__year-text--keyboard-selected":
                r.isKeyboardSelected(e),
              "react-datepicker__year-text--today": r.isCurrentYear(e),
            });
          }),
          bt(Ct(r), "getYearTabIndex", function (e) {
            return r.props.disabledKeyboardNavigation
              ? "-1"
              : e === Ye.default(r.props.preSelection)
              ? "0"
              : "-1";
          }),
          r
        );
      }
      return (
        yt(a, [
          {
            key: "render",
            value: function () {
              for (
                var e = this,
                  t = [],
                  a = this.props,
                  r = Ca(a.date, a.yearItemNumber),
                  n = r.startPeriod,
                  o = r.endPeriod,
                  s = function (a) {
                    t.push(
                      ue.default.createElement(
                        "div",
                        {
                          ref: e.YEAR_REFS[a - n],
                          onClick: function (t) {
                            e.onYearClick(t, a);
                          },
                          onKeyDown: function (t) {
                            e.onYearKeyDown(t, a);
                          },
                          tabIndex: e.getYearTabIndex(a),
                          className: e.getYearClassNames(a),
                          key: a,
                          "aria-current": e.isCurrentYear(a) ? "date" : void 0,
                        },
                        a
                      )
                    );
                  },
                  l = n;
                l <= o;
                l++
              )
                s(l);
              return ue.default.createElement(
                "div",
                { className: "react-datepicker__year" },
                ue.default.createElement(
                  "div",
                  { className: "react-datepicker__year-wrapper" },
                  t
                )
              );
            },
          },
        ]),
        a
      );
    })(ue.default.Component);
    bt(Wa, "propTypes", {
      date: pe.default.string,
      disabledKeyboardNavigation: pe.default.bool,
      onDayClick: pe.default.func,
      preSelection: pe.default.instanceOf(Date),
      setPreSelection: pe.default.func,
      selected: pe.default.object,
      inline: pe.default.bool,
      maxDate: pe.default.instanceOf(Date),
      minDate: pe.default.instanceOf(Date),
      yearItemNumber: pe.default.number,
    });
    var Ba = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a(e) {
        var r;
        return (
          mt(this, a),
          bt(Ct((r = t.call(this, e))), "onTimeChange", function (e) {
            r.setState({ time: e });
            var t = new Date();
            t.setHours(e.split(":")[0]),
              t.setMinutes(e.split(":")[1]),
              r.props.onChange(t);
          }),
          bt(Ct(r), "renderTimeInput", function () {
            var e = r.state.time,
              t = r.props,
              a = t.date,
              n = t.timeString,
              o = t.customTimeInput;
            return o
              ? ue.default.cloneElement(o, {
                  date: a,
                  value: e,
                  onChange: r.onTimeChange,
                })
              : ue.default.createElement("input", {
                  type: "time",
                  className: "react-datepicker-time__input",
                  placeholder: "Time",
                  name: "time-input",
                  required: !0,
                  value: e,
                  onChange: function (e) {
                    r.onTimeChange(e.target.value || n);
                  },
                });
          }),
          (r.state = { time: r.props.timeString }),
          r
        );
      }
      return (
        yt(
          a,
          [
            {
              key: "render",
              value: function () {
                return ue.default.createElement(
                  "div",
                  { className: "react-datepicker__input-time-container" },
                  ue.default.createElement(
                    "div",
                    { className: "react-datepicker-time__caption" },
                    this.props.timeInputLabel
                  ),
                  ue.default.createElement(
                    "div",
                    { className: "react-datepicker-time__input-container" },
                    ue.default.createElement(
                      "div",
                      { className: "react-datepicker-time__input" },
                      this.renderTimeInput()
                    )
                  )
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return e.timeString !== t.time ? { time: e.timeString } : null;
              },
            },
          ]
        ),
        a
      );
    })(ue.default.Component);
    function ja(e) {
      var t = e.className,
        a = e.children,
        r = e.showPopperArrow,
        n = e.arrowProps,
        o = void 0 === n ? {} : n;
      return ue.default.createElement(
        "div",
        { className: t },
        r &&
          ue.default.createElement(
            "div",
            vt({ className: "react-datepicker__triangle" }, o)
          ),
        a
      );
    }
    bt(Ba, "propTypes", {
      onChange: pe.default.func,
      date: pe.default.instanceOf(Date),
      timeString: pe.default.string,
      timeInputLabel: pe.default.string,
      customTimeInput: pe.default.element,
    }),
      (ja.propTypes = {
        className: pe.default.string,
        children: pe.default.node,
        arrowProps: pe.default.object,
        showPopperArrow: pe.default.bool,
      });
    var Ka = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select",
      ],
      Ha = (function (e) {
        gt(a, e);
        var t = Mt(a);
        function a(e) {
          var r;
          return (
            mt(this, a),
            bt(Ct((r = t.call(this, e))), "handleClickOutside", function (e) {
              r.props.onClickOutside(e);
            }),
            bt(Ct(r), "setClickOutsideRef", function () {
              return r.containerRef.current;
            }),
            bt(Ct(r), "handleDropdownFocus", function (e) {
              (function () {
                var e = (
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                  ).className || ""
                ).split(/\s+/);
                return Ka.some(function (t) {
                  return e.indexOf(t) >= 0;
                });
              })(e.target) && r.props.onDropdownFocus();
            }),
            bt(Ct(r), "getDateInView", function () {
              var e = r.props,
                t = e.preSelection,
                a = e.selected,
                n = e.openToDate,
                o = ba(r.props),
                s = va(r.props),
                l = Et(),
                i = n || a || t;
              return (
                i || (o && ot.default(l, o) ? o : s && nt.default(l, s) ? s : l)
              );
            }),
            bt(Ct(r), "increaseMonth", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return { date: ge.default(t, 1) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                }
              );
            }),
            bt(Ct(r), "decreaseMonth", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return { date: Se.default(t, 1) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                }
              );
            }),
            bt(Ct(r), "handleDayClick", function (e, t, a) {
              r.props.onSelect(e, t, a),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            bt(Ct(r), "handleDayMouseEnter", function (e) {
              r.setState({ selectingDate: e }),
                r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
            }),
            bt(Ct(r), "handleMonthMouseLeave", function () {
              r.setState({ selectingDate: null }),
                r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
            }),
            bt(Ct(r), "handleYearChange", function (e) {
              r.props.onYearChange && r.props.onYearChange(e),
                r.props.adjustDateOnChange &&
                  (r.props.onSelect && r.props.onSelect(e),
                  r.props.setOpen && r.props.setOpen(!0)),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            bt(Ct(r), "handleMonthChange", function (e) {
              r.props.onMonthChange && r.props.onMonthChange(e),
                r.props.adjustDateOnChange &&
                  (r.props.onSelect && r.props.onSelect(e),
                  r.props.setOpen && r.props.setOpen(!0)),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            bt(Ct(r), "handleMonthYearChange", function (e) {
              r.handleYearChange(e), r.handleMonthChange(e);
            }),
            bt(Ct(r), "changeYear", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return { date: Be.default(a, e) };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                }
              );
            }),
            bt(Ct(r), "changeMonth", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return { date: Ae.default(a, e) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                }
              );
            }),
            bt(Ct(r), "changeMonthYear", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return {
                    date: Be.default(
                      Ae.default(a, Ie.default(e)),
                      Ye.default(e)
                    ),
                  };
                },
                function () {
                  return r.handleMonthYearChange(r.state.date);
                }
              );
            }),
            bt(Ct(r), "header", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.state.date,
                t = jt(e, r.props.locale, r.props.calendarStartDay),
                a = [];
              return (
                r.props.showWeekNumbers &&
                  a.push(
                    ue.default.createElement(
                      "div",
                      { key: "W", className: "react-datepicker__day-name" },
                      r.props.weekLabel || "#"
                    )
                  ),
                a.concat(
                  [0, 1, 2, 3, 4, 5, 6].map(function (e) {
                    var a = be.default(t, e),
                      n = r.formatWeekday(a, r.props.locale),
                      o = r.props.weekDayClassName
                        ? r.props.weekDayClassName(a)
                        : void 0;
                    return ue.default.createElement(
                      "div",
                      {
                        key: e,
                        className: ce.default("react-datepicker__day-name", o),
                      },
                      n
                    );
                  })
                )
              );
            }),
            bt(Ct(r), "formatWeekday", function (e, t) {
              return r.props.formatWeekDay
                ? (function (e, t, a) {
                    return t(Rt(e, "EEEE", a));
                  })(e, r.props.formatWeekDay, t)
                : r.props.useWeekdaysShort
                ? (function (e, t) {
                    return Rt(e, "EEE", t);
                  })(e, t)
                : (function (e, t) {
                    return Rt(e, "EEEEEE", t);
                  })(e, t);
            }),
            bt(Ct(r), "decreaseYear", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: Me.default(
                      t,
                      r.props.showYearPicker ? r.props.yearItemNumber : 1
                    ),
                  };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                }
              );
            }),
            bt(Ct(r), "renderPreviousButton", function () {
              if (!r.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case r.props.showMonthYearPicker:
                    e = Da(r.state.date, r.props);
                    break;
                  case r.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        a = t.minDate,
                        r = t.yearItemNumber,
                        n = void 0 === r ? Tt : r,
                        o = Ca(Ht(Me.default(e, n)), n).endPeriod,
                        s = a && Ye.default(a);
                      return (s && s > o) || !1;
                    })(r.state.date, r.props);
                    break;
                  default:
                    e = ha(r.state.date, r.props);
                }
                if (
                  (r.props.forceShowMonthNavigation ||
                    r.props.showDisabledMonthNavigation ||
                    !e) &&
                  !r.props.showTimeSelectOnly
                ) {
                  var t = [
                      "react-datepicker__navigation",
                      "react-datepicker__navigation--previous",
                    ],
                    a = r.decreaseMonth;
                  (r.props.showMonthYearPicker ||
                    r.props.showQuarterYearPicker ||
                    r.props.showYearPicker) &&
                    (a = r.decreaseYear),
                    e &&
                      r.props.showDisabledMonthNavigation &&
                      (t.push(
                        "react-datepicker__navigation--previous--disabled"
                      ),
                      (a = null));
                  var n =
                      r.props.showMonthYearPicker ||
                      r.props.showQuarterYearPicker ||
                      r.props.showYearPicker,
                    o = r.props,
                    s = o.previousMonthButtonLabel,
                    l = o.previousYearButtonLabel,
                    i = r.props,
                    d = i.previousMonthAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof s
                          ? s
                          : "Previous Month"
                        : d,
                    p = i.previousYearAriaLabel,
                    c =
                      void 0 === p
                        ? "string" == typeof l
                          ? l
                          : "Previous Year"
                        : p;
                  return ue.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: a,
                      onKeyDown: r.props.handleOnKeyDown,
                      "aria-label": n ? c : u,
                    },
                    ue.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--previous",
                        ].join(" "),
                      },
                      n
                        ? r.props.previousYearButtonLabel
                        : r.props.previousMonthButtonLabel
                    )
                  );
                }
              }
            }),
            bt(Ct(r), "increaseYear", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: we.default(
                      t,
                      r.props.showYearPicker ? r.props.yearItemNumber : 1
                    ),
                  };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                }
              );
            }),
            bt(Ct(r), "renderNextButton", function () {
              if (!r.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case r.props.showMonthYearPicker:
                    e = ya(r.state.date, r.props);
                    break;
                  case r.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        a = t.maxDate,
                        r = t.yearItemNumber,
                        n = void 0 === r ? Tt : r,
                        o = Ca(we.default(e, n), n).startPeriod,
                        s = a && Ye.default(a);
                      return (s && s < o) || !1;
                    })(r.state.date, r.props);
                    break;
                  default:
                    e = ma(r.state.date, r.props);
                }
                if (
                  (r.props.forceShowMonthNavigation ||
                    r.props.showDisabledMonthNavigation ||
                    !e) &&
                  !r.props.showTimeSelectOnly
                ) {
                  var t = [
                    "react-datepicker__navigation",
                    "react-datepicker__navigation--next",
                  ];
                  r.props.showTimeSelect &&
                    t.push("react-datepicker__navigation--next--with-time"),
                    r.props.todayButton &&
                      t.push(
                        "react-datepicker__navigation--next--with-today-button"
                      );
                  var a = r.increaseMonth;
                  (r.props.showMonthYearPicker ||
                    r.props.showQuarterYearPicker ||
                    r.props.showYearPicker) &&
                    (a = r.increaseYear),
                    e &&
                      r.props.showDisabledMonthNavigation &&
                      (t.push("react-datepicker__navigation--next--disabled"),
                      (a = null));
                  var n =
                      r.props.showMonthYearPicker ||
                      r.props.showQuarterYearPicker ||
                      r.props.showYearPicker,
                    o = r.props,
                    s = o.nextMonthButtonLabel,
                    l = o.nextYearButtonLabel,
                    i = r.props,
                    d = i.nextMonthAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof s
                          ? s
                          : "Next Month"
                        : d,
                    p = i.nextYearAriaLabel,
                    c =
                      void 0 === p
                        ? "string" == typeof l
                          ? l
                          : "Next Year"
                        : p;
                  return ue.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: a,
                      onKeyDown: r.props.handleOnKeyDown,
                      "aria-label": n ? c : u,
                    },
                    ue.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--next",
                        ].join(" "),
                      },
                      n
                        ? r.props.nextYearButtonLabel
                        : r.props.nextMonthButtonLabel
                    )
                  );
                }
              }
            }),
            bt(Ct(r), "renderCurrentMonth", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.state.date,
                t = ["react-datepicker__current-month"];
              return (
                r.props.showYearDropdown &&
                  t.push("react-datepicker__current-month--hasYearDropdown"),
                r.props.showMonthDropdown &&
                  t.push("react-datepicker__current-month--hasMonthDropdown"),
                r.props.showMonthYearDropdown &&
                  t.push(
                    "react-datepicker__current-month--hasMonthYearDropdown"
                  ),
                ue.default.createElement(
                  "div",
                  { className: t.join(" ") },
                  Rt(e, r.props.dateFormat, r.props.locale)
                )
              );
            }),
            bt(Ct(r), "renderYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showYearDropdown && !e)
                return ue.default.createElement(Oa, {
                  adjustDateOnChange: r.props.adjustDateOnChange,
                  date: r.state.date,
                  onSelect: r.props.onSelect,
                  setOpen: r.props.setOpen,
                  dropdownMode: r.props.dropdownMode,
                  onChange: r.changeYear,
                  minDate: r.props.minDate,
                  maxDate: r.props.maxDate,
                  year: Ye.default(r.state.date),
                  scrollableYearDropdown: r.props.scrollableYearDropdown,
                  yearDropdownItemNumber: r.props.yearDropdownItemNumber,
                });
            }),
            bt(Ct(r), "renderMonthDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showMonthDropdown && !e)
                return ue.default.createElement(xa, {
                  dropdownMode: r.props.dropdownMode,
                  locale: r.props.locale,
                  onChange: r.changeMonth,
                  month: Ie.default(r.state.date),
                  useShortMonthInDropdown: r.props.useShortMonthInDropdown,
                });
            }),
            bt(Ct(r), "renderMonthYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showMonthYearDropdown && !e)
                return ue.default.createElement(Ya, {
                  dropdownMode: r.props.dropdownMode,
                  locale: r.props.locale,
                  dateFormat: r.props.dateFormat,
                  onChange: r.changeMonthYear,
                  minDate: r.props.minDate,
                  maxDate: r.props.maxDate,
                  date: r.state.date,
                  scrollableMonthYearDropdown:
                    r.props.scrollableMonthYearDropdown,
                });
            }),
            bt(Ct(r), "renderTodayButton", function () {
              if (r.props.todayButton && !r.props.showTimeSelectOnly)
                return ue.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__today-button",
                    onClick: function (e) {
                      return r.props.onSelect(Ue.default(Et()), e);
                    },
                  },
                  r.props.todayButton
                );
            }),
            bt(Ct(r), "renderDefaultHeader", function (e) {
              var t = e.monthDate,
                a = e.i;
              return ue.default.createElement(
                "div",
                {
                  className: "react-datepicker__header ".concat(
                    r.props.showTimeSelect
                      ? "react-datepicker__header--has-time-select"
                      : ""
                  ),
                },
                r.renderCurrentMonth(t),
                ue.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                        r.props.dropdownMode
                      ),
                    onFocus: r.handleDropdownFocus,
                  },
                  r.renderMonthDropdown(0 !== a),
                  r.renderMonthYearDropdown(0 !== a),
                  r.renderYearDropdown(0 !== a)
                ),
                ue.default.createElement(
                  "div",
                  { className: "react-datepicker__day-names" },
                  r.header(t)
                )
              );
            }),
            bt(Ct(r), "renderCustomHeader", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.monthDate,
                a = e.i;
              if (
                (r.props.showTimeSelect && !r.state.monthContainer) ||
                r.props.showTimeSelectOnly
              )
                return null;
              var n = ha(r.state.date, r.props),
                o = ma(r.state.date, r.props),
                s = Da(r.state.date, r.props),
                l = ya(r.state.date, r.props),
                i =
                  !r.props.showMonthYearPicker &&
                  !r.props.showQuarterYearPicker &&
                  !r.props.showYearPicker;
              return ue.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--custom",
                  onFocus: r.props.onDropdownFocus,
                },
                r.props.renderCustomHeader(
                  ft(
                    ft({}, r.state),
                    {},
                    {
                      customHeaderCount: a,
                      monthDate: t,
                      changeMonth: r.changeMonth,
                      changeYear: r.changeYear,
                      decreaseMonth: r.decreaseMonth,
                      increaseMonth: r.increaseMonth,
                      decreaseYear: r.decreaseYear,
                      increaseYear: r.increaseYear,
                      prevMonthButtonDisabled: n,
                      nextMonthButtonDisabled: o,
                      prevYearButtonDisabled: s,
                      nextYearButtonDisabled: l,
                    }
                  )
                ),
                i &&
                  ue.default.createElement(
                    "div",
                    { className: "react-datepicker__day-names" },
                    r.header(t)
                  )
              );
            }),
            bt(Ct(r), "renderYearHeader", function () {
              var e = r.state.date,
                t = r.props,
                a = t.showYearPicker,
                n = Ca(e, t.yearItemNumber),
                o = n.startPeriod,
                s = n.endPeriod;
              return ue.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker-year-header",
                },
                a ? "".concat(o, " - ").concat(s) : Ye.default(e)
              );
            }),
            bt(Ct(r), "renderHeader", function (e) {
              switch (!0) {
                case void 0 !== r.props.renderCustomHeader:
                  return r.renderCustomHeader(e);
                case r.props.showMonthYearPicker ||
                  r.props.showQuarterYearPicker ||
                  r.props.showYearPicker:
                  return r.renderYearHeader(e);
                default:
                  return r.renderDefaultHeader(e);
              }
            }),
            bt(Ct(r), "renderMonths", function () {
              if (!r.props.showTimeSelectOnly && !r.props.showYearPicker) {
                for (
                  var e = [],
                    t = r.props.showPreviousMonths
                      ? r.props.monthsShown - 1
                      : 0,
                    a = Se.default(r.state.date, t),
                    n = 0;
                  n < r.props.monthsShown;
                  ++n
                ) {
                  var o = n - r.props.monthSelectedIn,
                    s = ge.default(a, o),
                    l = "month-".concat(n),
                    i = n < r.props.monthsShown - 1,
                    d = n > 0;
                  e.push(
                    ue.default.createElement(
                      "div",
                      {
                        key: l,
                        ref: function (e) {
                          r.monthContainer = e;
                        },
                        className: "react-datepicker__month-container",
                      },
                      r.renderHeader({ monthDate: s, i: n }),
                      ue.default.createElement(qa, {
                        chooseDayAriaLabelPrefix:
                          r.props.chooseDayAriaLabelPrefix,
                        disabledDayAriaLabelPrefix:
                          r.props.disabledDayAriaLabelPrefix,
                        weekAriaLabelPrefix: r.props.weekAriaLabelPrefix,
                        onChange: r.changeMonthYear,
                        day: s,
                        dayClassName: r.props.dayClassName,
                        calendarStartDay: r.props.calendarStartDay,
                        monthClassName: r.props.monthClassName,
                        onDayClick: r.handleDayClick,
                        handleOnKeyDown: r.props.handleOnDayKeyDown,
                        onDayMouseEnter: r.handleDayMouseEnter,
                        onMouseLeave: r.handleMonthMouseLeave,
                        onWeekSelect: r.props.onWeekSelect,
                        orderInDisplay: n,
                        formatWeekNumber: r.props.formatWeekNumber,
                        locale: r.props.locale,
                        minDate: r.props.minDate,
                        maxDate: r.props.maxDate,
                        excludeDates: r.props.excludeDates,
                        excludeDateIntervals: r.props.excludeDateIntervals,
                        highlightDates: r.props.highlightDates,
                        selectingDate: r.state.selectingDate,
                        includeDates: r.props.includeDates,
                        includeDateIntervals: r.props.includeDateIntervals,
                        inline: r.props.inline,
                        shouldFocusDayInline: r.props.shouldFocusDayInline,
                        fixedHeight: r.props.fixedHeight,
                        filterDate: r.props.filterDate,
                        preSelection: r.props.preSelection,
                        setPreSelection: r.props.setPreSelection,
                        selected: r.props.selected,
                        selectsStart: r.props.selectsStart,
                        selectsEnd: r.props.selectsEnd,
                        selectsRange: r.props.selectsRange,
                        selectsDisabledDaysInRange:
                          r.props.selectsDisabledDaysInRange,
                        showWeekNumbers: r.props.showWeekNumbers,
                        startDate: r.props.startDate,
                        endDate: r.props.endDate,
                        peekNextMonth: r.props.peekNextMonth,
                        setOpen: r.props.setOpen,
                        shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                        renderDayContents: r.props.renderDayContents,
                        disabledKeyboardNavigation:
                          r.props.disabledKeyboardNavigation,
                        showMonthYearPicker: r.props.showMonthYearPicker,
                        showFullMonthYearPicker:
                          r.props.showFullMonthYearPicker,
                        showTwoColumnMonthYearPicker:
                          r.props.showTwoColumnMonthYearPicker,
                        showFourColumnMonthYearPicker:
                          r.props.showFourColumnMonthYearPicker,
                        showYearPicker: r.props.showYearPicker,
                        showQuarterYearPicker: r.props.showQuarterYearPicker,
                        isInputFocused: r.props.isInputFocused,
                        containerRef: r.containerRef,
                        monthShowsDuplicateDaysEnd: i,
                        monthShowsDuplicateDaysStart: d,
                      })
                    )
                  );
                }
                return e;
              }
            }),
            bt(Ct(r), "renderYears", function () {
              if (!r.props.showTimeSelectOnly)
                return r.props.showYearPicker
                  ? ue.default.createElement(
                      "div",
                      { className: "react-datepicker__year--container" },
                      r.renderHeader(),
                      ue.default.createElement(
                        Wa,
                        vt(
                          { onDayClick: r.handleDayClick, date: r.state.date },
                          r.props
                        )
                      )
                    )
                  : void 0;
            }),
            bt(Ct(r), "renderTimeSection", function () {
              if (
                r.props.showTimeSelect &&
                (r.state.monthContainer || r.props.showTimeSelectOnly)
              )
                return ue.default.createElement(Aa, {
                  selected: r.props.selected,
                  openToDate: r.props.openToDate,
                  onChange: r.props.onTimeChange,
                  timeClassName: r.props.timeClassName,
                  format: r.props.timeFormat,
                  includeTimes: r.props.includeTimes,
                  intervals: r.props.timeIntervals,
                  minTime: r.props.minTime,
                  maxTime: r.props.maxTime,
                  excludeTimes: r.props.excludeTimes,
                  filterTime: r.props.filterTime,
                  timeCaption: r.props.timeCaption,
                  todayButton: r.props.todayButton,
                  showMonthDropdown: r.props.showMonthDropdown,
                  showMonthYearDropdown: r.props.showMonthYearDropdown,
                  showYearDropdown: r.props.showYearDropdown,
                  withPortal: r.props.withPortal,
                  monthRef: r.state.monthContainer,
                  injectTimes: r.props.injectTimes,
                  locale: r.props.locale,
                  handleOnKeyDown: r.props.handleOnKeyDown,
                  showTimeSelectOnly: r.props.showTimeSelectOnly,
                });
            }),
            bt(Ct(r), "renderInputTimeSection", function () {
              var e = new Date(r.props.selected),
                t =
                  Lt(e) && Boolean(r.props.selected)
                    ? ""
                        .concat(ka(e.getHours()), ":")
                        .concat(ka(e.getMinutes()))
                    : "";
              if (r.props.showTimeInput)
                return ue.default.createElement(Ba, {
                  date: e,
                  timeString: t,
                  timeInputLabel: r.props.timeInputLabel,
                  onChange: r.props.onTimeChange,
                  customTimeInput: r.props.customTimeInput,
                });
            }),
            (r.containerRef = ue.default.createRef()),
            (r.state = {
              date: r.getDateInView(),
              selectingDate: null,
              monthContainer: null,
            }),
            r
          );
        }
        return (
          yt(
            a,
            [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.showTimeSelect &&
                    (this.assignMonthContainer = void e.setState({
                      monthContainer: e.monthContainer,
                    }));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.preSelection &&
                  !zt(this.props.preSelection, e.preSelection)
                    ? this.setState({ date: this.props.preSelection })
                    : this.props.openToDate &&
                      !zt(this.props.openToDate, e.openToDate) &&
                      this.setState({ date: this.props.openToDate });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.container || ja;
                  return ue.default.createElement(
                    "div",
                    { ref: this.containerRef },
                    ue.default.createElement(
                      e,
                      {
                        className: ce.default(
                          "react-datepicker",
                          this.props.className,
                          {
                            "react-datepicker--time-only":
                              this.props.showTimeSelectOnly,
                          }
                        ),
                        showPopperArrow: this.props.showPopperArrow,
                        arrowProps: this.props.arrowProps,
                      },
                      this.renderPreviousButton(),
                      this.renderNextButton(),
                      this.renderMonths(),
                      this.renderYears(),
                      this.renderTodayButton(),
                      this.renderTimeSection(),
                      this.renderInputTimeSection(),
                      this.props.children
                    )
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    onDropdownFocus: function () {},
                    monthsShown: 1,
                    monthSelectedIn: 0,
                    forceShowMonthNavigation: !1,
                    timeCaption: "Time",
                    previousYearButtonLabel: "Previous Year",
                    nextYearButtonLabel: "Next Year",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthButtonLabel: "Next Month",
                    customTimeInput: null,
                    yearItemNumber: Tt,
                  };
                },
              },
            ]
          ),
          a
        );
      })(ue.default.Component);
    bt(Ha, "propTypes", {
      adjustDateOnChange: pe.default.bool,
      arrowProps: pe.default.object,
      chooseDayAriaLabelPrefix: pe.default.string,
      className: pe.default.string,
      children: pe.default.node,
      container: pe.default.func,
      dateFormat: pe.default.oneOfType([pe.default.string, pe.default.array])
        .isRequired,
      dayClassName: pe.default.func,
      weekDayClassName: pe.default.func,
      disabledDayAriaLabelPrefix: pe.default.string,
      monthClassName: pe.default.func,
      timeClassName: pe.default.func,
      disabledKeyboardNavigation: pe.default.bool,
      calendarStartDay: pe.default.number,
      dropdownMode: pe.default.oneOf(["scroll", "select"]),
      endDate: pe.default.instanceOf(Date),
      excludeDates: pe.default.array,
      excludeDateIntervals: pe.default.arrayOf(
        pe.default.shape({
          start: pe.default.instanceOf(Date),
          end: pe.default.instanceOf(Date),
        })
      ),
      filterDate: pe.default.func,
      fixedHeight: pe.default.bool,
      formatWeekNumber: pe.default.func,
      highlightDates: pe.default.instanceOf(Map),
      includeDates: pe.default.array,
      includeDateIntervals: pe.default.arrayOf(
        pe.default.shape({
          start: pe.default.instanceOf(Date),
          end: pe.default.instanceOf(Date),
        })
      ),
      includeTimes: pe.default.array,
      injectTimes: pe.default.array,
      inline: pe.default.bool,
      shouldFocusDayInline: pe.default.bool,
      locale: pe.default.oneOfType([
        pe.default.string,
        pe.default.shape({ locale: pe.default.object }),
      ]),
      maxDate: pe.default.instanceOf(Date),
      minDate: pe.default.instanceOf(Date),
      monthsShown: pe.default.number,
      monthSelectedIn: pe.default.number,
      nextMonthAriaLabel: pe.default.string,
      nextYearAriaLabel: pe.default.string,
      onClickOutside: pe.default.func.isRequired,
      onMonthChange: pe.default.func,
      onYearChange: pe.default.func,
      forceShowMonthNavigation: pe.default.bool,
      onDropdownFocus: pe.default.func,
      onSelect: pe.default.func.isRequired,
      onWeekSelect: pe.default.func,
      showTimeSelect: pe.default.bool,
      showTimeInput: pe.default.bool,
      showMonthYearPicker: pe.default.bool,
      showFullMonthYearPicker: pe.default.bool,
      showTwoColumnMonthYearPicker: pe.default.bool,
      showFourColumnMonthYearPicker: pe.default.bool,
      showYearPicker: pe.default.bool,
      showQuarterYearPicker: pe.default.bool,
      showTimeSelectOnly: pe.default.bool,
      timeFormat: pe.default.string,
      timeIntervals: pe.default.number,
      onTimeChange: pe.default.func,
      timeInputLabel: pe.default.string,
      minTime: pe.default.instanceOf(Date),
      maxTime: pe.default.instanceOf(Date),
      excludeTimes: pe.default.array,
      filterTime: pe.default.func,
      timeCaption: pe.default.string,
      openToDate: pe.default.instanceOf(Date),
      peekNextMonth: pe.default.bool,
      previousMonthAriaLabel: pe.default.string,
      previousYearAriaLabel: pe.default.string,
      scrollableYearDropdown: pe.default.bool,
      scrollableMonthYearDropdown: pe.default.bool,
      preSelection: pe.default.instanceOf(Date),
      selected: pe.default.instanceOf(Date),
      selectsEnd: pe.default.bool,
      selectsStart: pe.default.bool,
      selectsRange: pe.default.bool,
      selectsDisabledDaysInRange: pe.default.bool,
      showMonthDropdown: pe.default.bool,
      showPreviousMonths: pe.default.bool,
      showMonthYearDropdown: pe.default.bool,
      showWeekNumbers: pe.default.bool,
      showYearDropdown: pe.default.bool,
      startDate: pe.default.instanceOf(Date),
      todayButton: pe.default.string,
      useWeekdaysShort: pe.default.bool,
      formatWeekDay: pe.default.func,
      withPortal: pe.default.bool,
      weekLabel: pe.default.string,
      yearItemNumber: pe.default.number,
      yearDropdownItemNumber: pe.default.number,
      setOpen: pe.default.func,
      shouldCloseOnSelect: pe.default.bool,
      useShortMonthInDropdown: pe.default.bool,
      showDisabledMonthNavigation: pe.default.bool,
      previousMonthButtonLabel: pe.default.oneOfType([
        pe.default.string,
        pe.default.node,
      ]),
      nextMonthButtonLabel: pe.default.oneOfType([
        pe.default.string,
        pe.default.node,
      ]),
      previousYearButtonLabel: pe.default.string,
      nextYearButtonLabel: pe.default.string,
      renderCustomHeader: pe.default.func,
      renderDayContents: pe.default.func,
      onDayMouseEnter: pe.default.func,
      onMonthMouseLeave: pe.default.func,
      showPopperArrow: pe.default.bool,
      handleOnKeyDown: pe.default.func,
      handleOnDayKeyDown: pe.default.func,
      isInputFocused: pe.default.bool,
      customTimeInput: pe.default.element,
      weekAriaLabelPrefix: pe.default.string,
      setPreSelection: pe.default.func,
    });
    var Qa = (function (e) {
      gt(a, e);
      var t = Mt(a);
      function a(e) {
        var r;
        return (
          mt(this, a),
          ((r = t.call(this, e)).el = document.createElement("div")),
          r
        );
      }
      return (
        yt(a, [
          {
            key: "componentDidMount",
            value: function () {
              (this.portalRoot = (
                this.props.portalHost || document
              ).getElementById(this.props.portalId)),
                this.portalRoot ||
                  ((this.portalRoot = document.createElement("div")),
                  this.portalRoot.setAttribute("id", this.props.portalId),
                  (this.props.portalHost || document.body).appendChild(
                    this.portalRoot
                  )),
                this.portalRoot.appendChild(this.el);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.portalRoot.removeChild(this.el);
            },
          },
          {
            key: "render",
            value: function () {
              return pt.default.createPortal(this.props.children, this.el);
            },
          },
        ]),
        a
      );
    })(ue.default.Component);
    bt(Qa, "propTypes", {
      children: pe.default.any,
      portalId: pe.default.string,
      portalHost: pe.default.instanceOf(ShadowRoot),
    });
    var Va = []
        .concat(["top", "bottom", "right", "left"], ["auto"])
        .reduce(function (e, t) {
          return e.concat([t, t + "-start", t + "-end"]);
        }, []),
      Ua = function (e) {
        return !e.disabled && -1 !== e.tabIndex;
      },
      $a = (function (e) {
        gt(a, e);
        var t = Mt(a);
        function a(e) {
          var r;
          return (
            mt(this, a),
            bt(Ct((r = t.call(this, e))), "getTabChildren", function () {
              return Array.prototype.slice
                .call(
                  r.tabLoopRef.current.querySelectorAll(
                    "[tabindex], a, button, input, select, textarea"
                  ),
                  1,
                  -1
                )
                .filter(Ua);
            }),
            bt(Ct(r), "handleFocusStart", function (e) {
              var t = r.getTabChildren();
              t && t.length > 1 && t[t.length - 1].focus();
            }),
            bt(Ct(r), "handleFocusEnd", function (e) {
              var t = r.getTabChildren();
              t && t.length > 1 && t[0].focus();
            }),
            (r.tabLoopRef = ue.default.createRef()),
            r
          );
        }
        return (
          yt(
            a,
            [
              {
                key: "render",
                value: function () {
                  return this.props.enableTabLoop
                    ? ue.default.createElement(
                        "div",
                        {
                          className: "react-datepicker__tab-loop",
                          ref: this.tabLoopRef,
                        },
                        ue.default.createElement("div", {
                          className: "react-datepicker__tab-loop__start",
                          tabIndex: "0",
                          onFocus: this.handleFocusStart,
                        }),
                        this.props.children,
                        ue.default.createElement("div", {
                          className: "react-datepicker__tab-loop__end",
                          tabIndex: "0",
                          onFocus: this.handleFocusEnd,
                        })
                      )
                    : this.props.children;
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { enableTabLoop: !0 };
                },
              },
            ]
          ),
          a
        );
      })(ue.default.Component);
    bt($a, "propTypes", {
      children: pe.default.any,
      enableTabLoop: pe.default.bool,
    });
    var za = Va,
      Ga = (function (e) {
        gt(a, e);
        var t = Mt(a);
        function a() {
          return mt(this, a), t.apply(this, arguments);
        }
        return (
          yt(
            a,
            [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    a = t.className,
                    r = t.wrapperClassName,
                    n = t.hidePopper,
                    o = t.popperComponent,
                    s = t.popperModifiers,
                    l = t.popperPlacement,
                    i = t.popperProps,
                    d = t.targetComponent,
                    u = t.enableTabLoop,
                    p = t.popperOnKeyDown,
                    c = t.portalId,
                    f = t.portalHost;
                  if (!n) {
                    var h = ce.default("react-datepicker-popper", a);
                    e = ue.default.createElement(
                      ie.Popper,
                      vt({ modifiers: s, placement: l }, i),
                      function (e) {
                        var t = e.ref,
                          a = e.style,
                          r = e.placement,
                          n = e.arrowProps;
                        return ue.default.createElement(
                          $a,
                          { enableTabLoop: u },
                          ue.default.createElement(
                            "div",
                            {
                              ref: t,
                              style: a,
                              className: h,
                              "data-placement": r,
                              onKeyDown: p,
                            },
                            ue.default.cloneElement(o, { arrowProps: n })
                          )
                        );
                      }
                    );
                  }
                  this.props.popperContainer &&
                    (e = ue.default.createElement(
                      this.props.popperContainer,
                      {},
                      e
                    )),
                    c &&
                      !n &&
                      (e = ue.default.createElement(
                        Qa,
                        { portalId: c, portalHost: f },
                        e
                      ));
                  var m = ce.default("react-datepicker-wrapper", r);
                  return ue.default.createElement(
                    ie.Manager,
                    { className: "react-datepicker-manager" },
                    ue.default.createElement(ie.Reference, null, function (e) {
                      var t = e.ref;
                      return ue.default.createElement(
                        "div",
                        { ref: t, className: m },
                        d
                      );
                    }),
                    e
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    hidePopper: !0,
                    popperModifiers: [],
                    popperProps: {},
                    popperPlacement: "bottom-start",
                  };
                },
              },
            ]
          ),
          a
        );
      })(ue.default.Component);
    bt(Ga, "propTypes", {
      className: pe.default.string,
      wrapperClassName: pe.default.string,
      hidePopper: pe.default.bool,
      popperComponent: pe.default.element,
      popperModifiers: pe.default.arrayOf(pe.default.object),
      popperPlacement: pe.default.oneOf(za),
      popperContainer: pe.default.func,
      popperProps: pe.default.object,
      targetComponent: pe.default.element,
      enableTabLoop: pe.default.bool,
      popperOnKeyDown: pe.default.func,
      portalId: pe.default.string,
      portalHost: pe.default.instanceOf(ShadowRoot),
    });
    var Ja = "react-datepicker-ignore-onclickoutside",
      Xa = ut.default(Ha);
    var Za = "Date input not valid.",
      er = (function (e) {
        gt(a, e);
        var t = Mt(a);
        function a(e) {
          var r;
          return (
            mt(this, a),
            bt(Ct((r = t.call(this, e))), "getPreSelection", function () {
              return r.props.openToDate
                ? r.props.openToDate
                : r.props.selectsEnd && r.props.startDate
                ? r.props.startDate
                : r.props.selectsStart && r.props.endDate
                ? r.props.endDate
                : Et();
            }),
            bt(Ct(r), "calcInitialState", function () {
              var e,
                t = r.getPreSelection(),
                a = ba(r.props),
                n = va(r.props),
                o =
                  a && ot.default(t, Ue.default(a))
                    ? a
                    : n && nt.default(t, Xe.default(n))
                    ? n
                    : t;
              return {
                open: r.props.startOpen || !1,
                preventFocus: !1,
                preSelection:
                  null !==
                    (e = r.props.selectsRange
                      ? r.props.startDate
                      : r.props.selected) && void 0 !== e
                    ? e
                    : o,
                highlightDates: ga(r.props.highlightDates),
                focused: !1,
                shouldFocusDayInline: !1,
              };
            }),
            bt(Ct(r), "clearPreventFocusTimeout", function () {
              r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
            }),
            bt(Ct(r), "setFocus", function () {
              r.input && r.input.focus && r.input.focus({ preventScroll: !0 });
            }),
            bt(Ct(r), "setBlur", function () {
              r.input && r.input.blur && r.input.blur(), r.cancelFocusInput();
            }),
            bt(Ct(r), "setOpen", function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              r.setState(
                {
                  open: e,
                  preSelection:
                    e && r.state.open
                      ? r.state.preSelection
                      : r.calcInitialState().preSelection,
                  lastPreSelectChange: ar,
                },
                function () {
                  e ||
                    r.setState(
                      function (e) {
                        return { focused: !!t && e.focused };
                      },
                      function () {
                        !t && r.setBlur(), r.setState({ inputValue: null });
                      }
                    );
                }
              );
            }),
            bt(Ct(r), "inputOk", function () {
              return fe.default(r.state.preSelection);
            }),
            bt(Ct(r), "isCalendarOpen", function () {
              return void 0 === r.props.open
                ? r.state.open && !r.props.disabled && !r.props.readOnly
                : r.props.open;
            }),
            bt(Ct(r), "handleFocus", function (e) {
              r.state.preventFocus ||
                (r.props.onFocus(e),
                r.props.preventOpenOnFocus ||
                  r.props.readOnly ||
                  r.setOpen(!0)),
                r.setState({ focused: !0 });
            }),
            bt(Ct(r), "cancelFocusInput", function () {
              clearTimeout(r.inputFocusTimeout), (r.inputFocusTimeout = null);
            }),
            bt(Ct(r), "deferFocusInput", function () {
              r.cancelFocusInput(),
                (r.inputFocusTimeout = setTimeout(function () {
                  return r.setFocus();
                }, 1));
            }),
            bt(Ct(r), "handleDropdownFocus", function () {
              r.cancelFocusInput();
            }),
            bt(Ct(r), "handleBlur", function (e) {
              (!r.state.open || r.props.withPortal || r.props.showTimeInput) &&
                r.props.onBlur(e),
                r.setState({ focused: !1 });
            }),
            bt(Ct(r), "handleCalendarClickOutside", function (e) {
              r.props.onClickOutside(e),
                r.props.inline || r.setOpen(!1),
                r.props.withPortal && e.preventDefault();
            }),
            bt(Ct(r), "handleChange", function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              var n = t[0];
              if (
                !r.props.onChangeRaw ||
                (r.props.onChangeRaw.apply(Ct(r), t),
                "function" == typeof n.isDefaultPrevented &&
                  !n.isDefaultPrevented())
              ) {
                r.setState({
                  inputValue: n.target.value,
                  lastPreSelectChange: tr,
                });
                var o = Yt(
                  n.target.value,
                  r.props.dateFormat,
                  r.props.locale,
                  r.props.strictParsing,
                  r.props.minDate
                );
                (!o && n.target.value) || r.setSelected(o, n, !0);
              }
            }),
            bt(Ct(r), "handleSelect", function (e, t, a) {
              if (
                (r.setState({ preventFocus: !0 }, function () {
                  return (
                    (r.preventFocusTimeout = setTimeout(function () {
                      return r.setState({ preventFocus: !1 });
                    }, 50)),
                    r.preventFocusTimeout
                  );
                }),
                r.props.onChangeRaw && r.props.onChangeRaw(t),
                r.setSelected(e, t, !1, a),
                !r.props.shouldCloseOnSelect || r.props.showTimeSelect)
              )
                r.setPreSelection(e);
              else if (!r.props.inline) {
                r.props.selectsRange || r.setOpen(!1);
                var n = r.props,
                  o = n.startDate,
                  s = n.endDate;
                !o || s || ot.default(e, o) || r.setOpen(!1);
              }
            }),
            bt(Ct(r), "setSelected", function (e, t, a, n) {
              var o = e;
              if (null === o || !ra(o, r.props)) {
                var s = r.props,
                  l = s.onChange,
                  i = s.selectsRange,
                  d = s.startDate,
                  u = s.endDate;
                if (!Gt(r.props.selected, o) || r.props.allowSameDay || i)
                  if (
                    (null !== o &&
                      (!r.props.selected ||
                        (a &&
                          (r.props.showTimeSelect ||
                            r.props.showTimeSelectOnly ||
                            r.props.showTimeInput)) ||
                        (o = qt(o, {
                          hour: Pe.default(r.props.selected),
                          minute: Oe.default(r.props.selected),
                          second: _e.default(r.props.selected),
                        })),
                      r.props.inline || r.setState({ preSelection: o }),
                      r.props.focusSelectedMonth ||
                        r.setState({ monthSelectedIn: n })),
                    i)
                  ) {
                    var p = d && !u,
                      c = d && u;
                    !d && !u
                      ? l([o, null], t)
                      : p &&
                        (ot.default(o, d) ? l([o, null], t) : l([d, o], t)),
                      c && l([o, null], t);
                  } else l(o, t);
                a || (r.props.onSelect(o, t), r.setState({ inputValue: null }));
              }
            }),
            bt(Ct(r), "setPreSelection", function (e) {
              var t = void 0 !== r.props.minDate,
                a = void 0 !== r.props.maxDate,
                n = !0;
              if (e) {
                var o = Ue.default(e);
                if (t && a) n = Jt(e, r.props.minDate, r.props.maxDate);
                else if (t) {
                  var s = Ue.default(r.props.minDate);
                  n = nt.default(e, s) || Gt(o, s);
                } else if (a) {
                  var l = Xe.default(r.props.maxDate);
                  n = ot.default(e, l) || Gt(o, l);
                }
              }
              n && r.setState({ preSelection: e });
            }),
            bt(Ct(r), "handleTimeChange", function (e) {
              var t = qt(
                r.props.selected ? r.props.selected : r.getPreSelection(),
                { hour: Pe.default(e), minute: Oe.default(e) }
              );
              r.setState({ preSelection: t }),
                r.props.onChange(t),
                r.props.shouldCloseOnSelect && r.setOpen(!1),
                r.props.showTimeInput && r.setOpen(!0),
                r.setState({ inputValue: null });
            }),
            bt(Ct(r), "onInputClick", function () {
              r.props.disabled || r.props.readOnly || r.setOpen(!0),
                r.props.onInputClick();
            }),
            bt(Ct(r), "onInputKeyDown", function (e) {
              r.props.onKeyDown(e);
              var t = e.key;
              if (
                r.state.open ||
                r.props.inline ||
                r.props.preventOpenOnFocus
              ) {
                if (r.state.open) {
                  if ("ArrowDown" === t || "ArrowUp" === t) {
                    e.preventDefault();
                    var a =
                      r.calendar.componentNode &&
                      r.calendar.componentNode.querySelector(
                        '.react-datepicker__day[tabindex="0"]'
                      );
                    return void (a && a.focus({ preventScroll: !0 }));
                  }
                  var n = Et(r.state.preSelection);
                  "Enter" === t
                    ? (e.preventDefault(),
                      r.inputOk() && r.state.lastPreSelectChange === ar
                        ? (r.handleSelect(n, e),
                          !r.props.shouldCloseOnSelect && r.setPreSelection(n))
                        : r.setOpen(!1))
                    : "Escape" === t && (e.preventDefault(), r.setOpen(!1)),
                    r.inputOk() || r.props.onInputError({ code: 1, msg: Za });
                }
              } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || r.onInputClick();
            }),
            bt(Ct(r), "onDayKeyDown", function (e) {
              r.props.onKeyDown(e);
              var t = e.key,
                a = Et(r.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  r.handleSelect(a, e),
                  !r.props.shouldCloseOnSelect && r.setPreSelection(a);
              else if ("Escape" === t)
                e.preventDefault(),
                  r.setOpen(!1),
                  r.inputOk() || r.props.onInputError({ code: 1, msg: Za });
              else if (!r.props.disabledKeyboardNavigation) {
                var n;
                switch (t) {
                  case "ArrowLeft":
                    n = ke.default(a, 1);
                    break;
                  case "ArrowRight":
                    n = be.default(a, 1);
                    break;
                  case "ArrowUp":
                    n = Ce.default(a, 1);
                    break;
                  case "ArrowDown":
                    n = ve.default(a, 1);
                    break;
                  case "PageUp":
                    n = Se.default(a, 1);
                    break;
                  case "PageDown":
                    n = ge.default(a, 1);
                    break;
                  case "Home":
                    n = Me.default(a, 1);
                    break;
                  case "End":
                    n = we.default(a, 1);
                }
                if (!n)
                  return void (
                    r.props.onInputError &&
                    r.props.onInputError({ code: 1, msg: Za })
                  );
                if (
                  (e.preventDefault(),
                  r.setState({ lastPreSelectChange: ar }),
                  r.props.adjustDateOnChange && r.setSelected(n),
                  r.setPreSelection(n),
                  r.props.inline)
                ) {
                  var o = Ie.default(a),
                    s = Ie.default(n),
                    l = Ye.default(a),
                    i = Ye.default(n);
                  o !== s || l !== i
                    ? r.setState({ shouldFocusDayInline: !0 })
                    : r.setState({ shouldFocusDayInline: !1 });
                }
              }
            }),
            bt(Ct(r), "onPopperKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                r.setState({ preventFocus: !0 }, function () {
                  r.setOpen(!1),
                    setTimeout(function () {
                      r.setFocus(), r.setState({ preventFocus: !1 });
                    });
                }));
            }),
            bt(Ct(r), "onClearClick", function (e) {
              e && e.preventDefault && e.preventDefault(),
                r.props.selectsRange
                  ? r.props.onChange([null, null], e)
                  : r.props.onChange(null, e),
                r.setState({ inputValue: null });
            }),
            bt(Ct(r), "clear", function () {
              r.onClearClick();
            }),
            bt(Ct(r), "onScroll", function (e) {
              "boolean" == typeof r.props.closeOnScroll && r.props.closeOnScroll
                ? (e.target !== document &&
                    e.target !== document.documentElement &&
                    e.target !== document.body) ||
                  r.setOpen(!1)
                : "function" == typeof r.props.closeOnScroll &&
                  r.props.closeOnScroll(e) &&
                  r.setOpen(!1);
            }),
            bt(Ct(r), "renderCalendar", function () {
              return r.props.inline || r.isCalendarOpen()
                ? ue.default.createElement(
                    Xa,
                    {
                      ref: function (e) {
                        r.calendar = e;
                      },
                      locale: r.props.locale,
                      calendarStartDay: r.props.calendarStartDay,
                      chooseDayAriaLabelPrefix:
                        r.props.chooseDayAriaLabelPrefix,
                      disabledDayAriaLabelPrefix:
                        r.props.disabledDayAriaLabelPrefix,
                      weekAriaLabelPrefix: r.props.weekAriaLabelPrefix,
                      adjustDateOnChange: r.props.adjustDateOnChange,
                      setOpen: r.setOpen,
                      shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                      dateFormat: r.props.dateFormatCalendar,
                      useWeekdaysShort: r.props.useWeekdaysShort,
                      formatWeekDay: r.props.formatWeekDay,
                      dropdownMode: r.props.dropdownMode,
                      selected: r.props.selected,
                      preSelection: r.state.preSelection,
                      onSelect: r.handleSelect,
                      onWeekSelect: r.props.onWeekSelect,
                      openToDate: r.props.openToDate,
                      minDate: r.props.minDate,
                      maxDate: r.props.maxDate,
                      selectsStart: r.props.selectsStart,
                      selectsEnd: r.props.selectsEnd,
                      selectsRange: r.props.selectsRange,
                      startDate: r.props.startDate,
                      endDate: r.props.endDate,
                      excludeDates: r.props.excludeDates,
                      excludeDateIntervals: r.props.excludeDateIntervals,
                      filterDate: r.props.filterDate,
                      onClickOutside: r.handleCalendarClickOutside,
                      formatWeekNumber: r.props.formatWeekNumber,
                      highlightDates: r.state.highlightDates,
                      includeDates: r.props.includeDates,
                      includeDateIntervals: r.props.includeDateIntervals,
                      includeTimes: r.props.includeTimes,
                      injectTimes: r.props.injectTimes,
                      inline: r.props.inline,
                      shouldFocusDayInline: r.state.shouldFocusDayInline,
                      peekNextMonth: r.props.peekNextMonth,
                      showMonthDropdown: r.props.showMonthDropdown,
                      showPreviousMonths: r.props.showPreviousMonths,
                      useShortMonthInDropdown: r.props.useShortMonthInDropdown,
                      showMonthYearDropdown: r.props.showMonthYearDropdown,
                      showWeekNumbers: r.props.showWeekNumbers,
                      showYearDropdown: r.props.showYearDropdown,
                      withPortal: r.props.withPortal,
                      forceShowMonthNavigation:
                        r.props.forceShowMonthNavigation,
                      showDisabledMonthNavigation:
                        r.props.showDisabledMonthNavigation,
                      scrollableYearDropdown: r.props.scrollableYearDropdown,
                      scrollableMonthYearDropdown:
                        r.props.scrollableMonthYearDropdown,
                      todayButton: r.props.todayButton,
                      weekLabel: r.props.weekLabel,
                      outsideClickIgnoreClass: Ja,
                      fixedHeight: r.props.fixedHeight,
                      monthsShown: r.props.monthsShown,
                      monthSelectedIn: r.state.monthSelectedIn,
                      onDropdownFocus: r.handleDropdownFocus,
                      onMonthChange: r.props.onMonthChange,
                      onYearChange: r.props.onYearChange,
                      dayClassName: r.props.dayClassName,
                      weekDayClassName: r.props.weekDayClassName,
                      monthClassName: r.props.monthClassName,
                      timeClassName: r.props.timeClassName,
                      showTimeSelect: r.props.showTimeSelect,
                      showTimeSelectOnly: r.props.showTimeSelectOnly,
                      onTimeChange: r.handleTimeChange,
                      timeFormat: r.props.timeFormat,
                      timeIntervals: r.props.timeIntervals,
                      minTime: r.props.minTime,
                      maxTime: r.props.maxTime,
                      excludeTimes: r.props.excludeTimes,
                      filterTime: r.props.filterTime,
                      timeCaption: r.props.timeCaption,
                      className: r.props.calendarClassName,
                      container: r.props.calendarContainer,
                      yearItemNumber: r.props.yearItemNumber,
                      yearDropdownItemNumber: r.props.yearDropdownItemNumber,
                      previousMonthAriaLabel: r.props.previousMonthAriaLabel,
                      previousMonthButtonLabel:
                        r.props.previousMonthButtonLabel,
                      nextMonthAriaLabel: r.props.nextMonthAriaLabel,
                      nextMonthButtonLabel: r.props.nextMonthButtonLabel,
                      previousYearAriaLabel: r.props.previousYearAriaLabel,
                      previousYearButtonLabel: r.props.previousYearButtonLabel,
                      nextYearAriaLabel: r.props.nextYearAriaLabel,
                      nextYearButtonLabel: r.props.nextYearButtonLabel,
                      timeInputLabel: r.props.timeInputLabel,
                      disabledKeyboardNavigation:
                        r.props.disabledKeyboardNavigation,
                      renderCustomHeader: r.props.renderCustomHeader,
                      popperProps: r.props.popperProps,
                      renderDayContents: r.props.renderDayContents,
                      onDayMouseEnter: r.props.onDayMouseEnter,
                      onMonthMouseLeave: r.props.onMonthMouseLeave,
                      selectsDisabledDaysInRange:
                        r.props.selectsDisabledDaysInRange,
                      showTimeInput: r.props.showTimeInput,
                      showMonthYearPicker: r.props.showMonthYearPicker,
                      showFullMonthYearPicker: r.props.showFullMonthYearPicker,
                      showTwoColumnMonthYearPicker:
                        r.props.showTwoColumnMonthYearPicker,
                      showFourColumnMonthYearPicker:
                        r.props.showFourColumnMonthYearPicker,
                      showYearPicker: r.props.showYearPicker,
                      showQuarterYearPicker: r.props.showQuarterYearPicker,
                      showPopperArrow: r.props.showPopperArrow,
                      excludeScrollbar: r.props.excludeScrollbar,
                      handleOnKeyDown: r.props.onKeyDown,
                      handleOnDayKeyDown: r.onDayKeyDown,
                      isInputFocused: r.state.focused,
                      customTimeInput: r.props.customTimeInput,
                      setPreSelection: r.setPreSelection,
                    },
                    r.props.children
                  )
                : null;
            }),
            bt(Ct(r), "renderDateInput", function () {
              var e,
                t = ce.default(r.props.className, bt({}, Ja, r.state.open)),
                a =
                  r.props.customInput ||
                  ue.default.createElement("input", { type: "text" }),
                n = r.props.customInputRef || "ref",
                o =
                  "string" == typeof r.props.value
                    ? r.props.value
                    : "string" == typeof r.state.inputValue
                    ? r.state.inputValue
                    : r.props.selectsRange
                    ? (function (e, t, a) {
                        if (!e) return "";
                        var r = Ft(e, a),
                          n = t ? Ft(t, a) : "";
                        return "".concat(r, " - ").concat(n);
                      })(r.props.startDate, r.props.endDate, r.props)
                    : Ft(r.props.selected, r.props);
              return ue.default.cloneElement(
                a,
                (bt((e = {}), n, function (e) {
                  r.input = e;
                }),
                bt(e, "value", o),
                bt(e, "onBlur", r.handleBlur),
                bt(e, "onChange", r.handleChange),
                bt(e, "onClick", r.onInputClick),
                bt(e, "onFocus", r.handleFocus),
                bt(e, "onKeyDown", r.onInputKeyDown),
                bt(e, "id", r.props.id),
                bt(e, "name", r.props.name),
                bt(e, "autoFocus", r.props.autoFocus),
                bt(e, "placeholder", r.props.placeholderText),
                bt(e, "disabled", r.props.disabled),
                bt(e, "autoComplete", r.props.autoComplete),
                bt(e, "className", ce.default(a.props.className, t)),
                bt(e, "title", r.props.title),
                bt(e, "readOnly", r.props.readOnly),
                bt(e, "required", r.props.required),
                bt(e, "tabIndex", r.props.tabIndex),
                bt(e, "aria-describedby", r.props.ariaDescribedBy),
                bt(e, "aria-invalid", r.props.ariaInvalid),
                bt(e, "aria-labelledby", r.props.ariaLabelledBy),
                bt(e, "aria-required", r.props.ariaRequired),
                e)
              );
            }),
            bt(Ct(r), "renderClearButton", function () {
              var e = r.props,
                t = e.isClearable,
                a = e.selected,
                n = e.startDate,
                o = e.endDate,
                s = e.clearButtonTitle,
                l = e.clearButtonClassName,
                i = void 0 === l ? "" : l,
                d = e.ariaLabelClose,
                u = void 0 === d ? "Close" : d;
              return !t || (null == a && null == n && null == o)
                ? null
                : ue.default.createElement("button", {
                    type: "button",
                    className: "react-datepicker__close-icon ".concat(i).trim(),
                    "aria-label": u,
                    onClick: r.onClearClick,
                    title: s,
                    tabIndex: -1,
                  });
            }),
            (r.state = r.calcInitialState()),
            r
          );
        }
        return (
          yt(
            a,
            [
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var a, r;
                  e.inline &&
                    ((a = e.selected),
                    (r = this.props.selected),
                    a && r
                      ? Ie.default(a) !== Ie.default(r) ||
                        Ye.default(a) !== Ye.default(r)
                      : a !== r) &&
                    this.setPreSelection(this.props.selected),
                    void 0 !== this.state.monthSelectedIn &&
                      e.monthsShown !== this.props.monthsShown &&
                      this.setState({ monthSelectedIn: 0 }),
                    e.highlightDates !== this.props.highlightDates &&
                      this.setState({
                        highlightDates: ga(this.props.highlightDates),
                      }),
                    t.focused ||
                      Gt(e.selected, this.props.selected) ||
                      this.setState({ inputValue: null }),
                    t.open !== this.state.open &&
                      (!1 === t.open &&
                        !0 === this.state.open &&
                        this.props.onCalendarOpen(),
                      !0 === t.open &&
                        !1 === this.state.open &&
                        this.props.onCalendarClose());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearPreventFocusTimeout(),
                    window.removeEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "renderInputContainer",
                value: function () {
                  return ue.default.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.renderCalendar();
                  if (this.props.inline) return e;
                  if (this.props.withPortal) {
                    var t = this.state.open
                      ? ue.default.createElement(
                          "div",
                          { className: "react-datepicker__portal" },
                          e
                        )
                      : null;
                    return (
                      this.state.open &&
                        this.props.portalId &&
                        (t = ue.default.createElement(
                          Qa,
                          {
                            portalId: this.props.portalId,
                            portalHost: this.props.portalHost,
                          },
                          t
                        )),
                      ue.default.createElement(
                        "div",
                        null,
                        this.renderInputContainer(),
                        t
                      )
                    );
                  }
                  return ue.default.createElement(Ga, {
                    className: this.props.popperClassName,
                    wrapperClassName: this.props.wrapperClassName,
                    hidePopper: !this.isCalendarOpen(),
                    portalId: this.props.portalId,
                    portalHost: this.props.portalHost,
                    popperModifiers: this.props.popperModifiers,
                    targetComponent: this.renderInputContainer(),
                    popperContainer: this.props.popperContainer,
                    popperComponent: e,
                    popperPlacement: this.props.popperPlacement,
                    popperProps: this.props.popperProps,
                    popperOnKeyDown: this.onPopperKeyDown,
                    enableTabLoop: this.props.enableTabLoop,
                  });
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    allowSameDay: !1,
                    dateFormat: "MM/dd/yyyy",
                    dateFormatCalendar: "LLLL yyyy",
                    onChange: function () {},
                    disabled: !1,
                    disabledKeyboardNavigation: !1,
                    dropdownMode: "scroll",
                    onFocus: function () {},
                    onBlur: function () {},
                    onKeyDown: function () {},
                    onInputClick: function () {},
                    onSelect: function () {},
                    onClickOutside: function () {},
                    onMonthChange: function () {},
                    onCalendarOpen: function () {},
                    onCalendarClose: function () {},
                    preventOpenOnFocus: !1,
                    onYearChange: function () {},
                    onInputError: function () {},
                    monthsShown: 1,
                    readOnly: !1,
                    withPortal: !1,
                    selectsDisabledDaysInRange: !1,
                    shouldCloseOnSelect: !0,
                    showTimeSelect: !1,
                    showTimeInput: !1,
                    showPreviousMonths: !1,
                    showMonthYearPicker: !1,
                    showFullMonthYearPicker: !1,
                    showTwoColumnMonthYearPicker: !1,
                    showFourColumnMonthYearPicker: !1,
                    showYearPicker: !1,
                    showQuarterYearPicker: !1,
                    strictParsing: !1,
                    timeIntervals: 30,
                    timeCaption: "Time",
                    previousMonthAriaLabel: "Previous Month",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthAriaLabel: "Next Month",
                    nextMonthButtonLabel: "Next Month",
                    previousYearAriaLabel: "Previous Year",
                    previousYearButtonLabel: "Previous Year",
                    nextYearAriaLabel: "Next Year",
                    nextYearButtonLabel: "Next Year",
                    timeInputLabel: "Time",
                    enableTabLoop: !0,
                    yearItemNumber: Tt,
                    renderDayContents: function (e) {
                      return e;
                    },
                    focusSelectedMonth: !1,
                    showPopperArrow: !0,
                    excludeScrollbar: !0,
                    customTimeInput: null,
                    calendarStartDay: void 0,
                  };
                },
              },
            ]
          ),
          a
        );
      })(ue.default.Component);
    bt(er, "propTypes", {
      adjustDateOnChange: pe.default.bool,
      allowSameDay: pe.default.bool,
      ariaDescribedBy: pe.default.string,
      ariaInvalid: pe.default.string,
      ariaLabelClose: pe.default.string,
      ariaLabelledBy: pe.default.string,
      ariaRequired: pe.default.string,
      autoComplete: pe.default.string,
      autoFocus: pe.default.bool,
      calendarClassName: pe.default.string,
      calendarContainer: pe.default.func,
      children: pe.default.node,
      chooseDayAriaLabelPrefix: pe.default.string,
      closeOnScroll: pe.default.oneOfType([pe.default.bool, pe.default.func]),
      className: pe.default.string,
      customInput: pe.default.element,
      customInputRef: pe.default.string,
      calendarStartDay: pe.default.number,
      dateFormat: pe.default.oneOfType([pe.default.string, pe.default.array]),
      dateFormatCalendar: pe.default.string,
      dayClassName: pe.default.func,
      weekDayClassName: pe.default.func,
      disabledDayAriaLabelPrefix: pe.default.string,
      monthClassName: pe.default.func,
      timeClassName: pe.default.func,
      disabled: pe.default.bool,
      disabledKeyboardNavigation: pe.default.bool,
      dropdownMode: pe.default.oneOf(["scroll", "select"]).isRequired,
      endDate: pe.default.instanceOf(Date),
      excludeDates: pe.default.array,
      excludeDateIntervals: pe.default.arrayOf(
        pe.default.shape({
          start: pe.default.instanceOf(Date),
          end: pe.default.instanceOf(Date),
        })
      ),
      filterDate: pe.default.func,
      fixedHeight: pe.default.bool,
      formatWeekNumber: pe.default.func,
      highlightDates: pe.default.array,
      id: pe.default.string,
      includeDates: pe.default.array,
      includeDateIntervals: pe.default.array,
      includeTimes: pe.default.array,
      injectTimes: pe.default.array,
      inline: pe.default.bool,
      isClearable: pe.default.bool,
      locale: pe.default.oneOfType([
        pe.default.string,
        pe.default.shape({ locale: pe.default.object }),
      ]),
      maxDate: pe.default.instanceOf(Date),
      minDate: pe.default.instanceOf(Date),
      monthsShown: pe.default.number,
      name: pe.default.string,
      onBlur: pe.default.func,
      onChange: pe.default.func.isRequired,
      onSelect: pe.default.func,
      onWeekSelect: pe.default.func,
      onClickOutside: pe.default.func,
      onChangeRaw: pe.default.func,
      onFocus: pe.default.func,
      onInputClick: pe.default.func,
      onKeyDown: pe.default.func,
      onMonthChange: pe.default.func,
      onYearChange: pe.default.func,
      onInputError: pe.default.func,
      open: pe.default.bool,
      onCalendarOpen: pe.default.func,
      onCalendarClose: pe.default.func,
      openToDate: pe.default.instanceOf(Date),
      peekNextMonth: pe.default.bool,
      placeholderText: pe.default.string,
      popperContainer: pe.default.func,
      popperClassName: pe.default.string,
      popperModifiers: pe.default.arrayOf(pe.default.object),
      popperPlacement: pe.default.oneOf(za),
      popperProps: pe.default.object,
      preventOpenOnFocus: pe.default.bool,
      readOnly: pe.default.bool,
      required: pe.default.bool,
      scrollableYearDropdown: pe.default.bool,
      scrollableMonthYearDropdown: pe.default.bool,
      selected: pe.default.instanceOf(Date),
      selectsEnd: pe.default.bool,
      selectsStart: pe.default.bool,
      selectsRange: pe.default.bool,
      selectsDisabledDaysInRange: pe.default.bool,
      showMonthDropdown: pe.default.bool,
      showPreviousMonths: pe.default.bool,
      showMonthYearDropdown: pe.default.bool,
      showWeekNumbers: pe.default.bool,
      showYearDropdown: pe.default.bool,
      strictParsing: pe.default.bool,
      forceShowMonthNavigation: pe.default.bool,
      showDisabledMonthNavigation: pe.default.bool,
      startDate: pe.default.instanceOf(Date),
      startOpen: pe.default.bool,
      tabIndex: pe.default.number,
      timeCaption: pe.default.string,
      title: pe.default.string,
      todayButton: pe.default.node,
      useWeekdaysShort: pe.default.bool,
      formatWeekDay: pe.default.func,
      value: pe.default.string,
      weekLabel: pe.default.string,
      withPortal: pe.default.bool,
      portalId: pe.default.string,
      portalHost: pe.default.instanceOf(ShadowRoot),
      yearItemNumber: pe.default.number,
      yearDropdownItemNumber: pe.default.number,
      shouldCloseOnSelect: pe.default.bool,
      showTimeInput: pe.default.bool,
      showMonthYearPicker: pe.default.bool,
      showFullMonthYearPicker: pe.default.bool,
      showTwoColumnMonthYearPicker: pe.default.bool,
      showFourColumnMonthYearPicker: pe.default.bool,
      showYearPicker: pe.default.bool,
      showQuarterYearPicker: pe.default.bool,
      showTimeSelect: pe.default.bool,
      showTimeSelectOnly: pe.default.bool,
      timeFormat: pe.default.string,
      timeIntervals: pe.default.number,
      minTime: pe.default.instanceOf(Date),
      maxTime: pe.default.instanceOf(Date),
      excludeTimes: pe.default.array,
      filterTime: pe.default.func,
      useShortMonthInDropdown: pe.default.bool,
      clearButtonTitle: pe.default.string,
      clearButtonClassName: pe.default.string,
      previousMonthAriaLabel: pe.default.string,
      previousMonthButtonLabel: pe.default.oneOfType([
        pe.default.string,
        pe.default.node,
      ]),
      nextMonthAriaLabel: pe.default.string,
      nextMonthButtonLabel: pe.default.oneOfType([
        pe.default.string,
        pe.default.node,
      ]),
      previousYearAriaLabel: pe.default.string,
      previousYearButtonLabel: pe.default.string,
      nextYearAriaLabel: pe.default.string,
      nextYearButtonLabel: pe.default.string,
      timeInputLabel: pe.default.string,
      renderCustomHeader: pe.default.func,
      renderDayContents: pe.default.func,
      wrapperClassName: pe.default.string,
      focusSelectedMonth: pe.default.bool,
      onDayMouseEnter: pe.default.func,
      onMonthMouseLeave: pe.default.func,
      showPopperArrow: pe.default.bool,
      excludeScrollbar: pe.default.bool,
      enableTabLoop: pe.default.bool,
      customTimeInput: pe.default.element,
      weekAriaLabelPrefix: pe.default.string,
    });
    var tr = "input",
      ar = "navigate";
    (e.CalendarContainer = ja),
      (e.default = er),
      (e.getDefaultLocale = Xt),
      (e.registerLocale = function (e, t) {
        var a = "undefined" != typeof window ? window : globalThis;
        a.__localeData__ || (a.__localeData__ = {}), (a.__localeData__[e] = t);
      }),
      (e.setDefaultLocale = function (e) {
        ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }
);
