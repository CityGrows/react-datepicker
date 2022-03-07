"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react"),
  t = require("prop-types"),
  a = require("classnames"),
  r = require("date-fns/isDate"),
  n = require("date-fns/isValid"),
  o = require("date-fns/format"),
  s = require("date-fns/addMinutes"),
  l = require("date-fns/addHours"),
  i = require("date-fns/addDays"),
  u = require("date-fns/addWeeks"),
  d = require("date-fns/addMonths"),
  p = require("date-fns/addYears");
require("date-fns/subMinutes"), require("date-fns/subHours");
var c = require("date-fns/subDays"),
  f = require("date-fns/subWeeks"),
  h = require("date-fns/subMonths"),
  m = require("date-fns/subYears"),
  D = require("date-fns/getSeconds"),
  y = require("date-fns/getMinutes"),
  b = require("date-fns/getHours"),
  v = require("date-fns/getDay"),
  g = require("date-fns/getDate"),
  w = require("date-fns/getISOWeek"),
  k = require("date-fns/getMonth"),
  C = require("date-fns/getQuarter"),
  S = require("date-fns/getYear"),
  M = require("date-fns/getTime"),
  _ = require("date-fns/setSeconds"),
  O = require("date-fns/setMinutes"),
  P = require("date-fns/setHours"),
  N = require("date-fns/setMonth"),
  x = require("date-fns/setQuarter"),
  T = require("date-fns/setYear"),
  E = require("date-fns/min"),
  I = require("date-fns/max"),
  Y = require("date-fns/differenceInCalendarDays"),
  L = require("date-fns/differenceInCalendarMonths");
require("date-fns/differenceInCalendarWeeks");
var R = require("date-fns/differenceInCalendarYears"),
  F = require("date-fns/startOfDay"),
  q = require("date-fns/startOfWeek"),
  A = require("date-fns/startOfMonth"),
  B = require("date-fns/startOfQuarter"),
  K = require("date-fns/startOfYear"),
  W = require("date-fns/endOfDay");
require("date-fns/endOfWeek"), require("date-fns/endOfMonth");
var j = require("date-fns/isEqual"),
  H = require("date-fns/isSameDay"),
  Q = require("date-fns/isSameMonth"),
  V = require("date-fns/isSameYear"),
  U = require("date-fns/isSameQuarter"),
  $ = require("date-fns/isAfter"),
  z = require("date-fns/isBefore"),
  G = require("date-fns/isWithinInterval"),
  J = require("date-fns/toDate"),
  X = require("date-fns/parse"),
  Z = require("date-fns/parseISO"),
  ee = require("react-onclickoutside"),
  te = require("react-dom"),
  ae = require("react-popper");
function re(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var ne = re(e),
  oe = re(t),
  se = re(a),
  le = re(r),
  ie = re(n),
  ue = re(o),
  de = re(s),
  pe = re(l),
  ce = re(i),
  fe = re(u),
  he = re(d),
  me = re(p),
  De = re(c),
  ye = re(f),
  be = re(h),
  ve = re(m),
  ge = re(D),
  we = re(y),
  ke = re(b),
  Ce = re(v),
  Se = re(g),
  Me = re(w),
  _e = re(k),
  Oe = re(C),
  Pe = re(S),
  Ne = re(M),
  xe = re(_),
  Te = re(O),
  Ee = re(P),
  Ie = re(N),
  Ye = re(x),
  Le = re(T),
  Re = re(E),
  Fe = re(I),
  qe = re(Y),
  Ae = re(L),
  Be = re(R),
  Ke = re(F),
  We = re(q),
  je = re(A),
  He = re(B),
  Qe = re(K),
  Ve = re(W),
  Ue = re(j),
  $e = re(H),
  ze = re(Q),
  Ge = re(V),
  Je = re(U),
  Xe = re($),
  Ze = re(z),
  et = re(G),
  tt = re(J),
  at = re(X),
  rt = re(Z),
  nt = re(ee),
  ot = re(te);
function st(e, t) {
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
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? st(Object(a), !0).forEach(function (t) {
          ct(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
      : st(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
  }
  return e;
}
function it(e) {
  return (it =
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
function ut(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dt(e, t) {
  for (var a = 0; a < t.length; a++) {
    var r = t[a];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function pt(e, t, a) {
  return (
    t && dt(e.prototype, t),
    a && dt(e, a),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ct(e, t, a) {
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
function ft() {
  return (ft =
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
function ht(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  Object.defineProperty(e, "prototype", {
    value: Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    }),
    writable: !1,
  }),
    t && Dt(e, t);
}
function mt(e) {
  return (mt = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function Dt(e, t) {
  return (Dt =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function yt(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function bt(e, t) {
  if (t && ("object" == typeof t || "function" == typeof t)) return t;
  if (void 0 !== t)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return yt(e);
}
function vt(e) {
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
      r = mt(e);
    if (t) {
      var n = mt(this).constructor;
      a = Reflect.construct(r, arguments, n);
    } else a = r.apply(this, arguments);
    return bt(this, a);
  };
}
function gt(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return wt(e);
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
      if ("string" == typeof e) return wt(e, t);
      var a = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === a && e.constructor && (a = e.constructor.name);
      if ("Map" === a || "Set" === a) return Array.from(e);
      if (
        "Arguments" === a ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
      )
        return wt(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function wt(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
  return r;
}
function kt(e, t) {
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
function Ct(e, t) {
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
var St = {
    p: Ct,
    P: function (e, t) {
      var a,
        r = e.match(/(P+)(p+)?/) || [],
        n = r[1],
        o = r[2];
      if (!o) return kt(e, t);
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
      return a.replace("{{date}}", kt(n, t)).replace("{{time}}", Ct(o, t));
    },
  },
  Mt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function _t(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? rt.default(e)
      : tt.default(e)
    : new Date();
  return Pt(t) ? t : null;
}
function Ot(e, t, a, r, n) {
  var o = null,
    s = Vt(a) || Vt(Qt()),
    l = !0;
  return Array.isArray(t)
    ? (t.forEach(function (t) {
        var i = at.default(e, t, new Date(), { locale: s });
        r && (l = Pt(i, n) && e === Nt(i, t, a)), Pt(i, n) && l && (o = i);
      }),
      o)
    : ((o = at.default(e, t, new Date(), { locale: s })),
      r
        ? (l = Pt(o) && e === Nt(o, t, a))
        : Pt(o) ||
          ((t = t
            .match(Mt)
            .map(function (e) {
              var t = e[0];
              return "p" === t || "P" === t
                ? s
                  ? (0, St[t])(e, s.formatLong)
                  : t
                : e;
            })
            .join("")),
          e.length > 0 && (o = at.default(e, t.slice(0, e.length), new Date())),
          Pt(o) || (o = new Date(e))),
      Pt(o) && l ? o : null);
}
function Pt(e, t) {
  return (t = t || new Date("1/1/1000")), ie.default(e) && !Ze.default(e, t);
}
function Nt(e, t, a) {
  if ("en" === a) return ue.default(e, t, { awareOfUnicodeTokens: !0 });
  var r = Vt(a);
  return (
    a &&
      !r &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          a,
          '"].'
        )
      ),
    !r && Qt() && Vt(Qt()) && (r = Vt(Qt())),
    ue.default(e, t, { locale: r || null, awareOfUnicodeTokens: !0 })
  );
}
function xt(e, t) {
  var a = t.dateFormat,
    r = t.locale;
  return (e && Nt(e, Array.isArray(a) ? a[0] : a, r)) || "";
}
function Tt(e, t) {
  var a = t.hour,
    r = void 0 === a ? 0 : a,
    n = t.minute,
    o = void 0 === n ? 0 : n,
    s = t.second,
    l = void 0 === s ? 0 : s;
  return Ee.default(Te.default(xe.default(e, l), o), r);
}
function Et(e, t) {
  var a = (t && Vt(t)) || (Qt() && Vt(Qt()));
  return Me.default(e, a ? { locale: a } : null);
}
function It(e, t) {
  return Nt(e, "ddd", t);
}
function Yt(e) {
  return Ke.default(e);
}
function Lt(e, t, a) {
  var r = Vt(t || Qt());
  return We.default(e, { locale: r, weekStartsOn: a });
}
function Rt(e) {
  return je.default(e);
}
function Ft(e) {
  return Qe.default(e);
}
function qt(e) {
  return He.default(e);
}
function At(e, t) {
  return e && t ? Ge.default(e, t) : !e && !t;
}
function Bt(e, t) {
  return e && t ? ze.default(e, t) : !e && !t;
}
function Kt(e, t) {
  return e && t ? Je.default(e, t) : !e && !t;
}
function Wt(e, t) {
  return e && t ? $e.default(e, t) : !e && !t;
}
function jt(e, t) {
  return e && t ? Ue.default(e, t) : !e && !t;
}
function Ht(e, t, a) {
  var r,
    n = Ke.default(t),
    o = Ve.default(a);
  try {
    r = et.default(e, { start: n, end: o });
  } catch (e) {
    r = !1;
  }
  return r;
}
function Qt() {
  return ("undefined" != typeof window ? window : globalThis).__localeId__;
}
function Vt(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : globalThis;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function Ut(e, t) {
  return Nt(Ie.default(_t(), e), "LLLL", t);
}
function $t(e, t) {
  return Nt(Ie.default(_t(), e), "LLL", t);
}
function zt(e, t) {
  return Nt(Ye.default(_t(), e), "QQQ", t);
}
function Gt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.excludeDateIntervals,
    s = t.includeDates,
    l = t.includeDateIntervals,
    i = t.filterDate;
  return (
    ra(e, { minDate: a, maxDate: r }) ||
    (n &&
      n.some(function (t) {
        return Wt(e, t);
      })) ||
    (o &&
      o.some(function (t) {
        var a = t.start,
          r = t.end;
        return et.default(e, { start: a, end: r });
      })) ||
    (s &&
      !s.some(function (t) {
        return Wt(e, t);
      })) ||
    (l &&
      !l.some(function (t) {
        var a = t.start,
          r = t.end;
        return et.default(e, { start: a, end: r });
      })) ||
    (i && !i(_t(e))) ||
    !1
  );
}
function Jt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.excludeDates,
    r = t.excludeDateIntervals;
  return r && r.length > 0
    ? r.some(function (t) {
        var a = t.start,
          r = t.end;
        return et.default(e, { start: a, end: r });
      })
    : (a &&
        a.some(function (t) {
          return Wt(e, t);
        })) ||
        !1;
}
function Xt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    ra(e, { minDate: a, maxDate: r }) ||
    (n &&
      n.some(function (t) {
        return Bt(e, t);
      })) ||
    (o &&
      !o.some(function (t) {
        return Bt(e, t);
      })) ||
    (s && !s(_t(e))) ||
    !1
  );
}
function Zt(e, t, a, r) {
  var n = Pe.default(e),
    o = _e.default(e),
    s = Pe.default(t),
    l = _e.default(t),
    i = Pe.default(r);
  return n === s && n === i
    ? o <= a && a <= l
    : n < s
    ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
    : void 0;
}
function ea(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    ra(e, { minDate: a, maxDate: r }) ||
    (n &&
      n.some(function (t) {
        return Kt(e, t);
      })) ||
    (o &&
      !o.some(function (t) {
        return Kt(e, t);
      })) ||
    (s && !s(_t(e))) ||
    !1
  );
}
function ta(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = new Date(e, 0, 1);
  return ra(n, { minDate: a, maxDate: r }) || !1;
}
function aa(e, t, a, r) {
  var n = Pe.default(e),
    o = Oe.default(e),
    s = Pe.default(t),
    l = Oe.default(t),
    i = Pe.default(r);
  return n === s && n === i
    ? o <= a && a <= l
    : n < s
    ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
    : void 0;
}
function ra(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate;
  return (a && qe.default(e, a) < 0) || (r && qe.default(e, r) > 0);
}
function na(e, t) {
  return t.some(function (t) {
    return ke.default(t) === ke.default(e) && we.default(t) === we.default(e);
  });
}
function oa(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.excludeTimes,
    r = t.includeTimes,
    n = t.filterTime;
  return (a && na(e, a)) || (r && !na(e, r)) || (n && !n(e)) || !1;
}
function sa(e, t) {
  var a = t.minTime,
    r = t.maxTime;
  if (!a || !r) throw new Error("Both minTime and maxTime props required");
  var n,
    o = _t(),
    s = Ee.default(Te.default(o, we.default(e)), ke.default(e)),
    l = Ee.default(Te.default(o, we.default(a)), ke.default(a)),
    i = Ee.default(Te.default(o, we.default(r)), ke.default(r));
  try {
    n = !et.default(s, { start: l, end: i });
  } catch (e) {
    n = !1;
  }
  return n;
}
function la(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.includeDates,
    n = be.default(e, 1);
  return (
    (a && Ae.default(a, n) > 0) ||
    (r &&
      r.every(function (e) {
        return Ae.default(e, n) > 0;
      })) ||
    !1
  );
}
function ia(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.maxDate,
    r = t.includeDates,
    n = he.default(e, 1);
  return (
    (a && Ae.default(n, a) > 0) ||
    (r &&
      r.every(function (e) {
        return Ae.default(n, e) > 0;
      })) ||
    !1
  );
}
function ua(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.includeDates,
    n = ve.default(e, 1);
  return (
    (a && Be.default(a, n) > 0) ||
    (r &&
      r.every(function (e) {
        return Be.default(e, n) > 0;
      })) ||
    !1
  );
}
function da(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.maxDate,
    r = t.includeDates,
    n = me.default(e, 1);
  return (
    (a && Be.default(n, a) > 0) ||
    (r &&
      r.every(function (e) {
        return Be.default(n, e) > 0;
      })) ||
    !1
  );
}
function pa(e) {
  var t = e.minDate,
    a = e.includeDates;
  if (a && t) {
    var r = a.filter(function (e) {
      return qe.default(e, t) >= 0;
    });
    return Re.default(r);
  }
  return a ? Re.default(a) : t;
}
function ca(e) {
  var t = e.maxDate,
    a = e.includeDates;
  if (a && t) {
    var r = a.filter(function (e) {
      return qe.default(e, t) <= 0;
    });
    return Fe.default(r);
  }
  return a ? Fe.default(a) : t;
}
function fa() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
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
    if (le.default(o)) {
      var s = Nt(o, "MM.dd.yyyy"),
        l = a.get(s) || [];
      l.includes(t) || (l.push(t), a.set(s, l));
    } else if ("object" === it(o)) {
      var i = Object.keys(o),
        u = i[0],
        d = o[i[0]];
      if ("string" == typeof u && d.constructor === Array)
        for (var p = 0, c = d.length; p < c; p++) {
          var f = Nt(d[p], "MM.dd.yyyy"),
            h = a.get(f) || [];
          h.includes(u) || (h.push(u), a.set(f, h));
        }
    }
  }
  return a;
}
function ha(e, t, a, r, n) {
  for (var o = n.length, s = [], l = 0; l < o; l++) {
    var i = de.default(pe.default(e, ke.default(n[l])), we.default(n[l])),
      u = de.default(e, (a + 1) * r);
    Xe.default(i, t) && Ze.default(i, u) && s.push(n[l]);
  }
  return s;
}
function ma(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function Da(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
    a = Math.ceil(Pe.default(e) / t) * t,
    r = a - (t - 1);
  return { startPeriod: r, endPeriod: a };
}
function ya(e, t, a, r) {
  for (var n = [], o = 0; o < 2 * t + 1; o++) {
    var s = e + t - o,
      l = !0;
    a && (l = Pe.default(a) <= s),
      r && l && (l = Pe.default(r) >= s),
      l && n.push(s);
  }
  return n;
}
var ba = (function (t) {
  ht(r, ne["default"].Component);
  var a = vt(r);
  function r(t) {
    var n;
    ut(this, r),
      ct(yt((n = a.call(this, t))), "renderOptions", function () {
        var e = n.props.year,
          t = n.state.yearsList.map(function (t) {
            return ne.default.createElement(
              "div",
              {
                className:
                  e === t
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: t,
                onClick: n.onChange.bind(yt(n), t),
                "aria-selected": e === t ? "true" : void 0,
              },
              e === t
                ? ne.default.createElement(
                    "span",
                    { className: "react-datepicker__year-option--selected" },
                    "✓"
                  )
                : "",
              t
            );
          }),
          a = n.props.minDate ? Pe.default(n.props.minDate) : null,
          r = n.props.maxDate ? Pe.default(n.props.maxDate) : null;
        return (
          (r &&
            n.state.yearsList.find(function (e) {
              return e === r;
            })) ||
            t.unshift(
              ne.default.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "upcoming",
                  onClick: n.incrementYears,
                },
                ne.default.createElement("a", {
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
              ne.default.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "previous",
                  onClick: n.decrementYears,
                },
                ne.default.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                })
              )
            ),
          t
        );
      }),
      ct(yt(n), "onChange", function (e) {
        n.props.onChange(e);
      }),
      ct(yt(n), "handleClickOutside", function () {
        n.props.onCancel();
      }),
      ct(yt(n), "shiftYears", function (e) {
        var t = n.state.yearsList.map(function (t) {
          return t + e;
        });
        n.setState({ yearsList: t });
      }),
      ct(yt(n), "incrementYears", function () {
        return n.shiftYears(1);
      }),
      ct(yt(n), "decrementYears", function () {
        return n.shiftYears(-1);
      });
    var o = t.yearDropdownItemNumber,
      s = t.scrollableYearDropdown,
      l = o || (s ? 10 : 5);
    return (
      (n.state = {
        yearsList: ya(n.props.year, l, n.props.minDate, n.props.maxDate),
      }),
      (n.dropdownRef = e.createRef()),
      n
    );
  }
  return (
    pt(r, [
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
          var e = se.default({
            "react-datepicker__year-dropdown": !0,
            "react-datepicker__year-dropdown--scrollable":
              this.props.scrollableYearDropdown,
          });
          return ne.default.createElement(
            "div",
            { className: e, ref: this.dropdownRef },
            this.renderOptions()
          );
        },
      },
    ]),
    r
  );
})();
ct(ba, "propTypes", {
  minDate: oe.default.instanceOf(Date),
  maxDate: oe.default.instanceOf(Date),
  onCancel: oe.default.func.isRequired,
  onChange: oe.default.func.isRequired,
  scrollableYearDropdown: oe.default.bool,
  year: oe.default.number.isRequired,
  yearDropdownItemNumber: oe.default.number,
});
var va = nt.default(ba),
  ga = (function (e) {
    ht(a, ne["default"].Component);
    var t = vt(a);
    function a() {
      var e;
      ut(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        ct(yt((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        ct(yt(e), "renderSelectOptions", function () {
          for (
            var t = e.props.minDate ? Pe.default(e.props.minDate) : 1900,
              a = e.props.maxDate ? Pe.default(e.props.maxDate) : 2100,
              r = [],
              n = t;
            n <= a;
            n++
          )
            r.push(ne.default.createElement("option", { key: n, value: n }, n));
          return r;
        }),
        ct(yt(e), "onSelectChange", function (t) {
          e.onChange(t.target.value);
        }),
        ct(yt(e), "renderSelectMode", function () {
          return ne.default.createElement(
            "select",
            {
              value: e.props.year,
              className: "react-datepicker__year-select",
              onChange: e.onSelectChange,
            },
            e.renderSelectOptions()
          );
        }),
        ct(yt(e), "renderReadView", function (t) {
          return ne.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function (t) {
                return e.toggleDropdown(t);
              },
            },
            ne.default.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow",
            }),
            ne.default.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              e.props.year
            )
          );
        }),
        ct(yt(e), "renderDropdown", function () {
          return ne.default.createElement(va, {
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
        ct(yt(e), "renderScrollMode", function () {
          var t = e.state.dropdownVisible,
            a = [e.renderReadView(!t)];
          return t && a.unshift(e.renderDropdown()), a;
        }),
        ct(yt(e), "onChange", function (t) {
          e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
        }),
        ct(yt(e), "toggleDropdown", function (t) {
          e.setState(
            { dropdownVisible: !e.state.dropdownVisible },
            function () {
              e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
            }
          );
        }),
        ct(yt(e), "handleYearChange", function (t, a) {
          e.onSelect(t, a), e.setOpen();
        }),
        ct(yt(e), "onSelect", function (t, a) {
          e.props.onSelect && e.props.onSelect(t, a);
        }),
        ct(yt(e), "setOpen", function () {
          e.props.setOpen && e.props.setOpen(!0);
        }),
        e
      );
    }
    return (
      pt(a, [
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
            return ne.default.createElement(
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
  })();
ct(ga, "propTypes", {
  adjustDateOnChange: oe.default.bool,
  dropdownMode: oe.default.oneOf(["scroll", "select"]).isRequired,
  maxDate: oe.default.instanceOf(Date),
  minDate: oe.default.instanceOf(Date),
  onChange: oe.default.func.isRequired,
  scrollableYearDropdown: oe.default.bool,
  year: oe.default.number.isRequired,
  yearDropdownItemNumber: oe.default.number,
  date: oe.default.instanceOf(Date),
  onSelect: oe.default.func,
  setOpen: oe.default.func,
});
var wa = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a() {
    var e;
    ut(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      ct(
        yt((e = t.call.apply(t, [this].concat(n)))),
        "isSelectedMonth",
        function (t) {
          return e.props.month === t;
        }
      ),
      ct(yt(e), "renderOptions", function () {
        return e.props.monthNames.map(function (t, a) {
          return ne.default.createElement(
            "div",
            {
              className: e.isSelectedMonth(a)
                ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                : "react-datepicker__month-option",
              key: t,
              onClick: e.onChange.bind(yt(e), a),
              "aria-selected": e.isSelectedMonth(a) ? "true" : void 0,
            },
            e.isSelectedMonth(a)
              ? ne.default.createElement(
                  "span",
                  { className: "react-datepicker__month-option--selected" },
                  "✓"
                )
              : "",
            t
          );
        });
      }),
      ct(yt(e), "onChange", function (t) {
        return e.props.onChange(t);
      }),
      ct(yt(e), "handleClickOutside", function () {
        return e.props.onCancel();
      }),
      e
    );
  }
  return (
    pt(a, [
      {
        key: "render",
        value: function () {
          return ne.default.createElement(
            "div",
            { className: "react-datepicker__month-dropdown" },
            this.renderOptions()
          );
        },
      },
    ]),
    a
  );
})();
ct(wa, "propTypes", {
  onCancel: oe.default.func.isRequired,
  onChange: oe.default.func.isRequired,
  month: oe.default.number.isRequired,
  monthNames: oe.default.arrayOf(oe.default.string.isRequired).isRequired,
});
var ka = nt.default(wa),
  Ca = (function (e) {
    ht(a, ne["default"].Component);
    var t = vt(a);
    function a() {
      var e;
      ut(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        ct(yt((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        ct(yt(e), "renderSelectOptions", function (e) {
          return e.map(function (e, t) {
            return ne.default.createElement("option", { key: t, value: t }, e);
          });
        }),
        ct(yt(e), "renderSelectMode", function (t) {
          return ne.default.createElement(
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
        ct(yt(e), "renderReadView", function (t, a) {
          return ne.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: e.toggleDropdown,
            },
            ne.default.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow",
            }),
            ne.default.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month",
              },
              a[e.props.month]
            )
          );
        }),
        ct(yt(e), "renderDropdown", function (t) {
          return ne.default.createElement(ka, {
            key: "dropdown",
            month: e.props.month,
            monthNames: t,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
          });
        }),
        ct(yt(e), "renderScrollMode", function (t) {
          var a = e.state.dropdownVisible,
            r = [e.renderReadView(!a, t)];
          return a && r.unshift(e.renderDropdown(t)), r;
        }),
        ct(yt(e), "onChange", function (t) {
          e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
        }),
        ct(yt(e), "toggleDropdown", function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      pt(a, [
        {
          key: "render",
          value: function () {
            var e,
              t = this,
              a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function (e) {
                      return $t(e, t.props.locale);
                    }
                  : function (e) {
                      return Ut(e, t.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode(a);
                break;
              case "select":
                e = this.renderSelectMode(a);
            }
            return ne.default.createElement(
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
  })();
function Sa(e, t) {
  for (var a = [], r = Rt(e), n = Rt(t); !Xe.default(r, n); )
    a.push(_t(r)), (r = he.default(r, 1));
  return a;
}
ct(Ca, "propTypes", {
  dropdownMode: oe.default.oneOf(["scroll", "select"]).isRequired,
  locale: oe.default.string,
  month: oe.default.number.isRequired,
  onChange: oe.default.func.isRequired,
  useShortMonthInDropdown: oe.default.bool,
});
var Ma = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a(e) {
    var r;
    return (
      ut(this, a),
      ct(yt((r = t.call(this, e))), "renderOptions", function () {
        return r.state.monthYearsList.map(function (e) {
          var t = Ne.default(e),
            a = At(r.props.date, e) && Bt(r.props.date, e);
          return ne.default.createElement(
            "div",
            {
              className: a
                ? "react-datepicker__month-year-option--selected_month-year"
                : "react-datepicker__month-year-option",
              key: t,
              onClick: r.onChange.bind(yt(r), t),
              "aria-selected": a ? "true" : void 0,
            },
            a
              ? ne.default.createElement(
                  "span",
                  {
                    className: "react-datepicker__month-year-option--selected",
                  },
                  "✓"
                )
              : "",
            Nt(e, r.props.dateFormat, r.props.locale)
          );
        });
      }),
      ct(yt(r), "onChange", function (e) {
        return r.props.onChange(e);
      }),
      ct(yt(r), "handleClickOutside", function () {
        r.props.onCancel();
      }),
      (r.state = { monthYearsList: Sa(r.props.minDate, r.props.maxDate) }),
      r
    );
  }
  return (
    pt(a, [
      {
        key: "render",
        value: function () {
          var e = se.default({
            "react-datepicker__month-year-dropdown": !0,
            "react-datepicker__month-year-dropdown--scrollable":
              this.props.scrollableMonthYearDropdown,
          });
          return ne.default.createElement(
            "div",
            { className: e },
            this.renderOptions()
          );
        },
      },
    ]),
    a
  );
})();
ct(Ma, "propTypes", {
  minDate: oe.default.instanceOf(Date).isRequired,
  maxDate: oe.default.instanceOf(Date).isRequired,
  onCancel: oe.default.func.isRequired,
  onChange: oe.default.func.isRequired,
  scrollableMonthYearDropdown: oe.default.bool,
  date: oe.default.instanceOf(Date).isRequired,
  dateFormat: oe.default.string.isRequired,
  locale: oe.default.string,
});
var _a = nt.default(Ma),
  Oa = (function (e) {
    ht(a, ne["default"].Component);
    var t = vt(a);
    function a() {
      var e;
      ut(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        ct(yt((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        ct(yt(e), "renderSelectOptions", function () {
          for (
            var t = Rt(e.props.minDate), a = Rt(e.props.maxDate), r = [];
            !Xe.default(t, a);

          ) {
            var n = Ne.default(t);
            r.push(
              ne.default.createElement(
                "option",
                { key: n, value: n },
                Nt(t, e.props.dateFormat, e.props.locale)
              )
            ),
              (t = he.default(t, 1));
          }
          return r;
        }),
        ct(yt(e), "onSelectChange", function (t) {
          e.onChange(t.target.value);
        }),
        ct(yt(e), "renderSelectMode", function () {
          return ne.default.createElement(
            "select",
            {
              value: Ne.default(Rt(e.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: e.onSelectChange,
            },
            e.renderSelectOptions()
          );
        }),
        ct(yt(e), "renderReadView", function (t) {
          var a = Nt(e.props.date, e.props.dateFormat, e.props.locale);
          return ne.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function (t) {
                return e.toggleDropdown(t);
              },
            },
            ne.default.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow",
            }),
            ne.default.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year",
              },
              a
            )
          );
        }),
        ct(yt(e), "renderDropdown", function () {
          return ne.default.createElement(_a, {
            key: "dropdown",
            date: e.props.date,
            dateFormat: e.props.dateFormat,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableMonthYearDropdown: e.props.scrollableMonthYearDropdown,
            locale: e.props.locale,
          });
        }),
        ct(yt(e), "renderScrollMode", function () {
          var t = e.state.dropdownVisible,
            a = [e.renderReadView(!t)];
          return t && a.unshift(e.renderDropdown()), a;
        }),
        ct(yt(e), "onChange", function (t) {
          e.toggleDropdown();
          var a = _t(parseInt(t));
          (At(e.props.date, a) && Bt(e.props.date, a)) || e.props.onChange(a);
        }),
        ct(yt(e), "toggleDropdown", function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      pt(a, [
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
            return ne.default.createElement(
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
  })();
ct(Oa, "propTypes", {
  dropdownMode: oe.default.oneOf(["scroll", "select"]).isRequired,
  dateFormat: oe.default.string.isRequired,
  locale: oe.default.string,
  maxDate: oe.default.instanceOf(Date).isRequired,
  minDate: oe.default.instanceOf(Date).isRequired,
  date: oe.default.instanceOf(Date).isRequired,
  onChange: oe.default.func.isRequired,
  scrollableMonthYearDropdown: oe.default.bool,
});
var Pa = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a() {
    var e;
    ut(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      ct(
        yt((e = t.call.apply(t, [this].concat(n)))),
        "dayEl",
        ne.default.createRef()
      ),
      ct(yt(e), "handleClick", function (t) {
        !e.isDisabled() && e.props.onClick && e.props.onClick(t);
      }),
      ct(yt(e), "handleMouseEnter", function (t) {
        !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
      }),
      ct(yt(e), "handleOnKeyDown", function (t) {
        " " === t.key && (t.preventDefault(), (t.key = "Enter")),
          e.props.handleOnKeyDown(t);
      }),
      ct(yt(e), "isSameDay", function (t) {
        return Wt(e.props.day, t);
      }),
      ct(yt(e), "isKeyboardSelected", function () {
        return (
          !e.props.disabledKeyboardNavigation &&
          !e.isSameDay(e.props.selected) &&
          e.isSameDay(e.props.preSelection)
        );
      }),
      ct(yt(e), "isDisabled", function () {
        return Gt(e.props.day, e.props);
      }),
      ct(yt(e), "isExcluded", function () {
        return Jt(e.props.day, e.props);
      }),
      ct(yt(e), "getHighLightedClass", function (t) {
        var a = e.props,
          r = a.day,
          n = a.highlightDates;
        if (!n) return !1;
        var o = Nt(r, "MM.dd.yyyy");
        return n.get(o);
      }),
      ct(yt(e), "isInRange", function () {
        var t = e.props,
          a = t.day,
          r = t.startDate,
          n = t.endDate;
        return !(!r || !n) && Ht(a, r, n);
      }),
      ct(yt(e), "isInSelectingRange", function () {
        var t,
          a = e.props,
          r = a.day,
          n = a.selectsStart,
          o = a.selectsEnd,
          s = a.selectsRange,
          l = a.selectsDisabledDaysInRange,
          i = a.startDate,
          u = a.endDate,
          d =
            null !== (t = e.props.selectingDate) && void 0 !== t
              ? t
              : e.props.preSelection;
        return (
          !(!(n || o || s) || !d || (!l && e.isDisabled())) &&
          (n && u && (Ze.default(d, u) || jt(d, u))
            ? Ht(r, d, u)
            : ((o && i && (Xe.default(d, i) || jt(d, i))) ||
                !(!s || !i || u || (!Xe.default(d, i) && !jt(d, i)))) &&
              Ht(r, i, d))
        );
      }),
      ct(yt(e), "isSelectingRangeStart", function () {
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
        return Wt(r, o ? s : n);
      }),
      ct(yt(e), "isSelectingRangeEnd", function () {
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
        return Wt(r, o ? s : n);
      }),
      ct(yt(e), "isRangeStart", function () {
        var t = e.props,
          a = t.day,
          r = t.startDate,
          n = t.endDate;
        return !(!r || !n) && Wt(r, a);
      }),
      ct(yt(e), "isRangeEnd", function () {
        var t = e.props,
          a = t.day,
          r = t.startDate,
          n = t.endDate;
        return !(!r || !n) && Wt(n, a);
      }),
      ct(yt(e), "isWeekend", function () {
        var t = Ce.default(e.props.day);
        return 0 === t || 6 === t;
      }),
      ct(yt(e), "isAfterMonth", function () {
        return (
          void 0 !== e.props.month &&
          (e.props.month + 1) % 12 === _e.default(e.props.day)
        );
      }),
      ct(yt(e), "isBeforeMonth", function () {
        return (
          void 0 !== e.props.month &&
          (_e.default(e.props.day) + 1) % 12 === e.props.month
        );
      }),
      ct(yt(e), "isCurrentDay", function () {
        return e.isSameDay(_t());
      }),
      ct(yt(e), "isSelected", function () {
        return e.isSameDay(e.props.selected);
      }),
      ct(yt(e), "getClassNames", function (t) {
        var a = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
        return se.default(
          "react-datepicker__day",
          a,
          "react-datepicker__day--" + It(e.props.day),
          {
            "react-datepicker__day--disabled": e.isDisabled(),
            "react-datepicker__day--excluded": e.isExcluded(),
            "react-datepicker__day--selected": e.isSelected(),
            "react-datepicker__day--keyboard-selected": e.isKeyboardSelected(),
            "react-datepicker__day--range-start": e.isRangeStart(),
            "react-datepicker__day--range-end": e.isRangeEnd(),
            "react-datepicker__day--in-range": e.isInRange(),
            "react-datepicker__day--in-selecting-range": e.isInSelectingRange(),
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
      ct(yt(e), "getAriaLabel", function () {
        var t = e.props,
          a = t.day,
          r = t.ariaLabelPrefixWhenEnabled,
          n = void 0 === r ? "Choose" : r,
          o = t.ariaLabelPrefixWhenDisabled,
          s = void 0 === o ? "Not available" : o,
          l = e.isDisabled() || e.isExcluded() ? s : n;
        return "".concat(l, " ").concat(Nt(a, "PPPP", e.props.locale));
      }),
      ct(yt(e), "getTabIndex", function (t, a) {
        var r = t || e.props.selected,
          n = a || e.props.preSelection;
        return e.isKeyboardSelected() || (e.isSameDay(r) && Wt(n, r)) ? 0 : -1;
      }),
      ct(yt(e), "handleFocusDay", function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
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
      ct(yt(e), "renderDayContents", function () {
        return (e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth()) ||
          (e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth())
          ? null
          : e.props.renderDayContents
          ? e.props.renderDayContents(Se.default(e.props.day), e.props.day)
          : Se.default(e.props.day);
      }),
      ct(yt(e), "render", function () {
        return ne.default.createElement(
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
    pt(a, [
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
})();
ct(Pa, "propTypes", {
  ariaLabelPrefixWhenEnabled: oe.default.string,
  ariaLabelPrefixWhenDisabled: oe.default.string,
  disabledKeyboardNavigation: oe.default.bool,
  day: oe.default.instanceOf(Date).isRequired,
  dayClassName: oe.default.func,
  endDate: oe.default.instanceOf(Date),
  highlightDates: oe.default.instanceOf(Map),
  inline: oe.default.bool,
  shouldFocusDayInline: oe.default.bool,
  month: oe.default.number,
  onClick: oe.default.func,
  onMouseEnter: oe.default.func,
  preSelection: oe.default.instanceOf(Date),
  selected: oe.default.object,
  selectingDate: oe.default.instanceOf(Date),
  selectsEnd: oe.default.bool,
  selectsStart: oe.default.bool,
  selectsRange: oe.default.bool,
  selectsDisabledDaysInRange: oe.default.bool,
  startDate: oe.default.instanceOf(Date),
  renderDayContents: oe.default.func,
  handleOnKeyDown: oe.default.func,
  containerRef: oe.default.oneOfType([
    oe.default.func,
    oe.default.shape({ current: oe.default.instanceOf(Element) }),
  ]),
  monthShowsDuplicateDaysEnd: oe.default.bool,
  monthShowsDuplicateDaysStart: oe.default.bool,
  locale: oe.default.oneOfType([
    oe.default.string,
    oe.default.shape({ locale: oe.default.object }),
  ]),
});
var Na = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a() {
    var e;
    ut(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      ct(
        yt((e = t.call.apply(t, [this].concat(n)))),
        "handleClick",
        function (t) {
          e.props.onClick && e.props.onClick(t);
        }
      ),
      e
    );
  }
  return (
    pt(a, [
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
          return ne.default.createElement(
            "div",
            {
              className: se.default(n),
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
})();
ct(Na, "propTypes", {
  weekNumber: oe.default.number.isRequired,
  onClick: oe.default.func,
});
var xa = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a() {
    var e;
    ut(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      ct(
        yt((e = t.call.apply(t, [this].concat(n)))),
        "handleDayClick",
        function (t, a) {
          e.props.onDayClick && e.props.onDayClick(t, a);
        }
      ),
      ct(yt(e), "handleDayMouseEnter", function (t) {
        e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
      }),
      ct(yt(e), "handleWeekClick", function (t, a, r) {
        "function" == typeof e.props.onWeekSelect &&
          e.props.onWeekSelect(t, a, r),
          e.props.shouldCloseOnSelect && e.props.setOpen(!1);
      }),
      ct(yt(e), "formatWeekNumber", function (t) {
        return e.props.formatWeekNumber ? e.props.formatWeekNumber(t) : Et(t);
      }),
      ct(yt(e), "renderDays", function () {
        var t = Lt(e.props.day, e.props.locale, e.props.calendarStartDay),
          a = [],
          r = e.formatWeekNumber(t);
        if (e.props.showWeekNumber) {
          var n = e.props.onWeekSelect
            ? e.handleWeekClick.bind(yt(e), t, r)
            : void 0;
          a.push(
            ne.default.createElement(Na, {
              key: "W",
              weekNumber: r,
              onClick: n,
              ariaLabelPrefix: e.props.ariaLabelPrefix,
            })
          );
        }
        return a.concat(
          [0, 1, 2, 3, 4, 5, 6].map(function (a) {
            var r = ce.default(t, a);
            return ne.default.createElement(Pa, {
              ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
              ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix,
              key: r.valueOf(),
              day: r,
              month: e.props.month,
              onClick: e.handleDayClick.bind(yt(e), r),
              onMouseEnter: e.handleDayMouseEnter.bind(yt(e), r),
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
              selectsDisabledDaysInRange: e.props.selectsDisabledDaysInRange,
              startDate: e.props.startDate,
              endDate: e.props.endDate,
              dayClassName: e.props.dayClassName,
              renderDayContents: e.props.renderDayContents,
              disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
              handleOnKeyDown: e.props.handleOnKeyDown,
              isInputFocused: e.props.isInputFocused,
              containerRef: e.props.containerRef,
              inline: e.props.inline,
              shouldFocusDayInline: e.props.shouldFocusDayInline,
              monthShowsDuplicateDaysEnd: e.props.monthShowsDuplicateDaysEnd,
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
    pt(
      a,
      [
        {
          key: "render",
          value: function () {
            return ne.default.createElement(
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
})();
ct(xa, "propTypes", {
  ariaLabelPrefix: oe.default.string,
  disabledKeyboardNavigation: oe.default.bool,
  day: oe.default.instanceOf(Date).isRequired,
  dayClassName: oe.default.func,
  disabledDayAriaLabelPrefix: oe.default.string,
  chooseDayAriaLabelPrefix: oe.default.string,
  endDate: oe.default.instanceOf(Date),
  excludeDates: oe.default.array,
  excludeDateIntervals: oe.default.arrayOf(
    oe.default.shape({
      start: oe.default.instanceOf(Date),
      end: oe.default.instanceOf(Date),
    })
  ),
  filterDate: oe.default.func,
  formatWeekNumber: oe.default.func,
  highlightDates: oe.default.instanceOf(Map),
  includeDates: oe.default.array,
  includeDateIntervals: oe.default.array,
  inline: oe.default.bool,
  shouldFocusDayInline: oe.default.bool,
  locale: oe.default.oneOfType([
    oe.default.string,
    oe.default.shape({ locale: oe.default.object }),
  ]),
  maxDate: oe.default.instanceOf(Date),
  calendarStartDay: oe.default.number,
  minDate: oe.default.instanceOf(Date),
  month: oe.default.number,
  onDayClick: oe.default.func,
  onDayMouseEnter: oe.default.func,
  onWeekSelect: oe.default.func,
  preSelection: oe.default.instanceOf(Date),
  selected: oe.default.instanceOf(Date),
  selectingDate: oe.default.instanceOf(Date),
  selectsEnd: oe.default.bool,
  selectsStart: oe.default.bool,
  selectsRange: oe.default.bool,
  selectsDisabledDaysInRange: oe.default.bool,
  showWeekNumber: oe.default.bool,
  startDate: oe.default.instanceOf(Date),
  setOpen: oe.default.func,
  shouldCloseOnSelect: oe.default.bool,
  renderDayContents: oe.default.func,
  handleOnKeyDown: oe.default.func,
  isInputFocused: oe.default.bool,
  containerRef: oe.default.oneOfType([
    oe.default.func,
    oe.default.shape({ current: oe.default.instanceOf(Element) }),
  ]),
  monthShowsDuplicateDaysEnd: oe.default.bool,
  monthShowsDuplicateDaysStart: oe.default.bool,
});
var Ta = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a() {
    var e;
    ut(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      ct(
        yt((e = t.call.apply(t, [this].concat(n)))),
        "MONTH_REFS",
        gt(Array(12)).map(function () {
          return ne.default.createRef();
        })
      ),
      ct(yt(e), "isDisabled", function (t) {
        return Gt(t, e.props);
      }),
      ct(yt(e), "isExcluded", function (t) {
        return Jt(t, e.props);
      }),
      ct(yt(e), "handleDayClick", function (t, a) {
        e.props.onDayClick && e.props.onDayClick(t, a, e.props.orderInDisplay);
      }),
      ct(yt(e), "handleDayMouseEnter", function (t) {
        e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
      }),
      ct(yt(e), "handleMouseLeave", function () {
        e.props.onMouseLeave && e.props.onMouseLeave();
      }),
      ct(yt(e), "isRangeStartMonth", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && Bt(Ie.default(r, t), n);
      }),
      ct(yt(e), "isRangeStartQuarter", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && Kt(Ye.default(r, t), n);
      }),
      ct(yt(e), "isRangeEndMonth", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && Bt(Ie.default(r, t), o);
      }),
      ct(yt(e), "isRangeEndQuarter", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && Kt(Ye.default(r, t), o);
      }),
      ct(yt(e), "isWeekInMonth", function (t) {
        var a = e.props.day,
          r = ce.default(t, 6);
        return Bt(t, a) || Bt(r, a);
      }),
      ct(yt(e), "isCurrentMonth", function (e, t) {
        return Pe.default(e) === Pe.default(_t()) && t === _e.default(_t());
      }),
      ct(yt(e), "isSelectedMonth", function (e, t, a) {
        return _e.default(e) === t && Pe.default(e) === Pe.default(a);
      }),
      ct(yt(e), "isSelectedQuarter", function (e, t, a) {
        return Oe.default(e) === t && Pe.default(e) === Pe.default(a);
      }),
      ct(yt(e), "renderWeeks", function () {
        for (
          var t = [],
            a = e.props.fixedHeight,
            r = 0,
            n = !1,
            o = Lt(Rt(e.props.day), e.props.locale, e.props.calendarStartDay);
          t.push(
            ne.default.createElement(xa, {
              ariaLabelPrefix: e.props.weekAriaLabelPrefix,
              chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
              disabledDayAriaLabelPrefix: e.props.disabledDayAriaLabelPrefix,
              key: r,
              day: o,
              month: _e.default(e.props.day),
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
              selectsDisabledDaysInRange: e.props.selectsDisabledDaysInRange,
              showWeekNumber: e.props.showWeekNumbers,
              startDate: e.props.startDate,
              endDate: e.props.endDate,
              dayClassName: e.props.dayClassName,
              setOpen: e.props.setOpen,
              shouldCloseOnSelect: e.props.shouldCloseOnSelect,
              disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
              renderDayContents: e.props.renderDayContents,
              handleOnKeyDown: e.props.handleOnKeyDown,
              isInputFocused: e.props.isInputFocused,
              containerRef: e.props.containerRef,
              calendarStartDay: e.props.calendarStartDay,
              monthShowsDuplicateDaysEnd: e.props.monthShowsDuplicateDaysEnd,
              monthShowsDuplicateDaysStart:
                e.props.monthShowsDuplicateDaysStart,
            })
          ),
            !n;

        ) {
          r++, (o = fe.default(o, 1));
          var s = a && r >= 6,
            l = !a && !e.isWeekInMonth(o);
          if (s || l) {
            if (!e.props.peekNextMonth) break;
            n = !0;
          }
        }
        return t;
      }),
      ct(yt(e), "onMonthClick", function (t, a) {
        e.handleDayClick(Rt(Ie.default(e.props.day, a)), t);
      }),
      ct(yt(e), "handleMonthNavigation", function (t, a) {
        e.isDisabled(a) ||
          e.isExcluded(a) ||
          (e.props.setPreSelection(a),
          e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
      }),
      ct(yt(e), "onMonthKeyDown", function (t, a) {
        var r = t.key;
        if (!e.props.disabledKeyboardNavigation)
          switch (r) {
            case "Enter":
              e.onMonthClick(t, a), e.props.setPreSelection(e.props.selected);
              break;
            case "ArrowRight":
              e.handleMonthNavigation(
                11 === a ? 0 : a + 1,
                he.default(e.props.preSelection, 1)
              );
              break;
            case "ArrowLeft":
              e.handleMonthNavigation(
                0 === a ? 11 : a - 1,
                be.default(e.props.preSelection, 1)
              );
          }
      }),
      ct(yt(e), "onQuarterClick", function (t, a) {
        e.handleDayClick(qt(Ye.default(e.props.day, a)), t);
      }),
      ct(yt(e), "getMonthClassNames", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate,
          s = a.selected,
          l = a.minDate,
          i = a.maxDate,
          u = a.preSelection,
          d = a.monthClassName,
          p = d ? d(r) : void 0;
        return se.default(
          "react-datepicker__month-text",
          "react-datepicker__month-".concat(t),
          p,
          {
            "react-datepicker__month--disabled":
              (l || i) && Xt(Ie.default(r, t), e.props),
            "react-datepicker__month--selected": e.isSelectedMonth(r, t, s),
            "react-datepicker__month-text--keyboard-selected":
              _e.default(u) === t,
            "react-datepicker__month--in-range": Zt(n, o, t, r),
            "react-datepicker__month--range-start": e.isRangeStartMonth(t),
            "react-datepicker__month--range-end": e.isRangeEndMonth(t),
            "react-datepicker__month-text--today": e.isCurrentMonth(r, t),
          }
        );
      }),
      ct(yt(e), "getTabIndex", function (t) {
        var a = _e.default(e.props.preSelection);
        return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
      }),
      ct(yt(e), "getAriaLabel", function (t) {
        var a = e.props,
          r = a.ariaLabelPrefix,
          n = void 0 === r ? "Choose" : r,
          o = a.disabledDayAriaLabelPrefix,
          s = void 0 === o ? "Not available" : o,
          l = a.day,
          i = Ie.default(l, t),
          u = e.isDisabled(i) || e.isExcluded(i) ? s : n;
        return "".concat(u, " ").concat(Nt(i, "MMMM yyyy"));
      }),
      ct(yt(e), "getQuarterClassNames", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate,
          s = a.selected,
          l = a.minDate,
          i = a.maxDate;
        return se.default(
          "react-datepicker__quarter-text",
          "react-datepicker__quarter-".concat(t),
          {
            "react-datepicker__quarter--disabled":
              (l || i) && ea(Ye.default(r, t), e.props),
            "react-datepicker__quarter--selected": e.isSelectedQuarter(r, t, s),
            "react-datepicker__quarter--in-range": aa(n, o, t, r),
            "react-datepicker__quarter--range-start": e.isRangeStartQuarter(t),
            "react-datepicker__quarter--range-end": e.isRangeEndQuarter(t),
          }
        );
      }),
      ct(yt(e), "renderMonths", function () {
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
          return ne.default.createElement(
            "div",
            { className: "react-datepicker__month-wrapper", key: r },
            t.map(function (t, r) {
              return ne.default.createElement(
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
                a ? Ut(t, o) : $t(t, o)
              );
            })
          );
        });
      }),
      ct(yt(e), "renderQuarters", function () {
        var t = e.props,
          a = t.day,
          r = t.selected;
        return ne.default.createElement(
          "div",
          { className: "react-datepicker__quarter-wrapper" },
          [1, 2, 3, 4].map(function (t, n) {
            return ne.default.createElement(
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
              zt(t, e.props.locale)
            );
          })
        );
      }),
      ct(yt(e), "getClassNames", function () {
        var t = e.props;
        t.day;
        var a = t.selectingDate,
          r = t.selectsStart,
          n = t.selectsEnd,
          o = t.showMonthYearPicker,
          s = t.showQuarterYearPicker;
        return se.default(
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
    pt(a, [
      {
        key: "render",
        value: function () {
          var e = this.props,
            t = e.showMonthYearPicker,
            a = e.showQuarterYearPicker,
            r = e.day,
            n = e.ariaLabelPrefix,
            o = void 0 === n ? "month " : n;
          return ne.default.createElement(
            "div",
            {
              className: this.getClassNames(),
              onMouseLeave: this.handleMouseLeave,
              "aria-label": "".concat(o, " ").concat(Nt(r, "yyyy-MM")),
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
})();
ct(Ta, "propTypes", {
  ariaLabelPrefix: oe.default.string,
  chooseDayAriaLabelPrefix: oe.default.string,
  disabledDayAriaLabelPrefix: oe.default.string,
  disabledKeyboardNavigation: oe.default.bool,
  day: oe.default.instanceOf(Date).isRequired,
  dayClassName: oe.default.func,
  monthClassName: oe.default.func,
  endDate: oe.default.instanceOf(Date),
  orderInDisplay: oe.default.number,
  excludeDates: oe.default.array,
  excludeDateIntervals: oe.default.arrayOf(
    oe.default.shape({
      start: oe.default.instanceOf(Date),
      end: oe.default.instanceOf(Date),
    })
  ),
  filterDate: oe.default.func,
  fixedHeight: oe.default.bool,
  formatWeekNumber: oe.default.func,
  highlightDates: oe.default.instanceOf(Map),
  includeDates: oe.default.array,
  includeDateIntervals: oe.default.array,
  inline: oe.default.bool,
  shouldFocusDayInline: oe.default.bool,
  locale: oe.default.oneOfType([
    oe.default.string,
    oe.default.shape({ locale: oe.default.object }),
  ]),
  maxDate: oe.default.instanceOf(Date),
  minDate: oe.default.instanceOf(Date),
  onDayClick: oe.default.func,
  onDayMouseEnter: oe.default.func,
  onMouseLeave: oe.default.func,
  onWeekSelect: oe.default.func,
  peekNextMonth: oe.default.bool,
  preSelection: oe.default.instanceOf(Date),
  setPreSelection: oe.default.func,
  selected: oe.default.instanceOf(Date),
  selectingDate: oe.default.instanceOf(Date),
  calendarStartDay: oe.default.number,
  selectsEnd: oe.default.bool,
  selectsStart: oe.default.bool,
  selectsRange: oe.default.bool,
  selectsDisabledDaysInRange: oe.default.bool,
  showWeekNumbers: oe.default.bool,
  startDate: oe.default.instanceOf(Date),
  setOpen: oe.default.func,
  shouldCloseOnSelect: oe.default.bool,
  renderDayContents: oe.default.func,
  showMonthYearPicker: oe.default.bool,
  showFullMonthYearPicker: oe.default.bool,
  showTwoColumnMonthYearPicker: oe.default.bool,
  showFourColumnMonthYearPicker: oe.default.bool,
  showQuarterYearPicker: oe.default.bool,
  handleOnKeyDown: oe.default.func,
  isInputFocused: oe.default.bool,
  weekAriaLabelPrefix: oe.default.string,
  containerRef: oe.default.oneOfType([
    oe.default.func,
    oe.default.shape({ current: oe.default.instanceOf(Element) }),
  ]),
  monthShowsDuplicateDaysEnd: oe.default.bool,
  monthShowsDuplicateDaysStart: oe.default.bool,
});
var Ea = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a() {
    var e;
    ut(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      ct(yt((e = t.call.apply(t, [this].concat(n)))), "state", {
        height: null,
      }),
      ct(yt(e), "handleClick", function (t) {
        ((e.props.minTime || e.props.maxTime) && sa(t, e.props)) ||
          ((e.props.excludeTimes ||
            e.props.includeTimes ||
            e.props.filterTime) &&
            oa(t, e.props)) ||
          e.props.onChange(t);
      }),
      ct(yt(e), "isSelectedTime", function (t, a, r) {
        return e.props.selected && a === ke.default(t) && r === we.default(t);
      }),
      ct(yt(e), "liClasses", function (t, a, r) {
        var n = [
          "react-datepicker__time-list-item",
          e.props.timeClassName ? e.props.timeClassName(t, a, r) : void 0,
        ];
        return (
          e.isSelectedTime(t, a, r) &&
            n.push("react-datepicker__time-list-item--selected"),
          (((e.props.minTime || e.props.maxTime) && sa(t, e.props)) ||
            ((e.props.excludeTimes ||
              e.props.includeTimes ||
              e.props.filterTime) &&
              oa(t, e.props))) &&
            n.push("react-datepicker__time-list-item--disabled"),
          e.props.injectTimes &&
            (60 * ke.default(t) + we.default(t)) % e.props.intervals != 0 &&
            n.push("react-datepicker__time-list-item--injected"),
          n.join(" ")
        );
      }),
      ct(yt(e), "handleOnKeyDown", function (t, a) {
        " " === t.key && (t.preventDefault(), (t.key = "Enter")),
          "Enter" === t.key && e.handleClick(a),
          e.props.handleOnKeyDown(t);
      }),
      ct(yt(e), "renderTimes", function () {
        for (
          var t = [],
            a = e.props.format ? e.props.format : "p",
            r = e.props.intervals,
            n = Yt(_t(e.props.selected)),
            o = 1440 / r,
            s =
              e.props.injectTimes &&
              e.props.injectTimes.sort(function (e, t) {
                return e - t;
              }),
            l = e.props.selected || e.props.openToDate || _t(),
            i = ke.default(l),
            u = we.default(l),
            d = Ee.default(Te.default(n, u), i),
            p = 0;
          p < o;
          p++
        ) {
          var c = de.default(n, p * r);
          if ((t.push(c), s)) {
            var f = ha(n, c, p, r, s);
            t = t.concat(f);
          }
        }
        return t.map(function (t, r) {
          return ne.default.createElement(
            "li",
            {
              key: r,
              onClick: e.handleClick.bind(yt(e), t),
              className: e.liClasses(t, i, u),
              ref: function (a) {
                (Ze.default(t, d) || jt(t, d)) && (e.centerLi = a);
              },
              onKeyDown: function (a) {
                e.handleOnKeyDown(a, t);
              },
              tabIndex: "0",
              "aria-selected": e.isSelectedTime(t, i, u) ? "true" : void 0,
            },
            Nt(t, a, e.props.locale)
          );
        });
      }),
      e
    );
  }
  return (
    pt(
      a,
      [
        {
          key: "componentDidMount",
          value: function () {
            (this.list.scrollTop = a.calcCenterPosition(
              this.props.monthRef
                ? this.props.monthRef.clientHeight - this.header.clientHeight
                : this.list.clientHeight,
              this.centerLi
            )),
              this.props.monthRef &&
                this.header &&
                this.setState({
                  height:
                    this.props.monthRef.clientHeight - this.header.clientHeight,
                });
          },
        },
        {
          key: "render",
          value: function () {
            var e = this,
              t = this.state.height;
            return ne.default.createElement(
              "div",
              {
                className: "react-datepicker__time-container ".concat(
                  this.props.todayButton
                    ? "react-datepicker__time-container--with-today-button"
                    : ""
                ),
              },
              ne.default.createElement(
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
                ne.default.createElement(
                  "div",
                  { className: "react-datepicker-time__header" },
                  this.props.timeCaption
                )
              ),
              ne.default.createElement(
                "div",
                { className: "react-datepicker__time" },
                ne.default.createElement(
                  "div",
                  { className: "react-datepicker__time-box" },
                  ne.default.createElement(
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
})();
ct(Ea, "calcCenterPosition", function (e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
}),
  ct(Ea, "propTypes", {
    format: oe.default.string,
    includeTimes: oe.default.array,
    intervals: oe.default.number,
    selected: oe.default.instanceOf(Date),
    openToDate: oe.default.instanceOf(Date),
    onChange: oe.default.func,
    timeClassName: oe.default.func,
    todayButton: oe.default.node,
    minTime: oe.default.instanceOf(Date),
    maxTime: oe.default.instanceOf(Date),
    excludeTimes: oe.default.array,
    filterTime: oe.default.func,
    monthRef: oe.default.object,
    timeCaption: oe.default.string,
    injectTimes: oe.default.array,
    handleOnKeyDown: oe.default.func,
    locale: oe.default.oneOfType([
      oe.default.string,
      oe.default.shape({ locale: oe.default.object }),
    ]),
    showTimeSelectOnly: oe.default.bool,
  });
var Ia = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a(e) {
    var r;
    return (
      ut(this, a),
      ct(
        yt((r = t.call(this, e))),
        "YEAR_REFS",
        gt(Array(r.props.yearItemNumber)).map(function () {
          return ne.default.createRef();
        })
      ),
      ct(yt(r), "isDisabled", function (e) {
        return Gt(e, r.props);
      }),
      ct(yt(r), "isExcluded", function (e) {
        return Jt(e, r.props);
      }),
      ct(yt(r), "updateFocusOnPaginate", function (e) {
        var t = function () {
          this.YEAR_REFS[e].current.focus();
        }.bind(yt(r));
        window.requestAnimationFrame(t);
      }),
      ct(yt(r), "handleYearClick", function (e, t) {
        r.props.onDayClick && r.props.onDayClick(e, t);
      }),
      ct(yt(r), "handleYearNavigation", function (e, t) {
        var a = r.props,
          n = a.date,
          o = a.yearItemNumber,
          s = Da(n, o).startPeriod;
        r.isDisabled(t) ||
          r.isExcluded(t) ||
          (r.props.setPreSelection(t),
          e - s == -1
            ? r.updateFocusOnPaginate(o - 1)
            : e - s === o
            ? r.updateFocusOnPaginate(0)
            : r.YEAR_REFS[e - s].current.focus());
      }),
      ct(yt(r), "isSameDay", function (e, t) {
        return Wt(e, t);
      }),
      ct(yt(r), "isCurrentYear", function (e) {
        return e === Pe.default(_t());
      }),
      ct(yt(r), "isKeyboardSelected", function (e) {
        var t = Ft(Le.default(r.props.date, e));
        return (
          !r.props.disabledKeyboardNavigation &&
          !r.props.inline &&
          !Wt(t, Ft(r.props.selected)) &&
          Wt(t, Ft(r.props.preSelection))
        );
      }),
      ct(yt(r), "onYearClick", function (e, t) {
        var a = r.props.date;
        r.handleYearClick(Ft(Le.default(a, t)), e);
      }),
      ct(yt(r), "onYearKeyDown", function (e, t) {
        var a = e.key;
        if (!r.props.disabledKeyboardNavigation)
          switch (a) {
            case "Enter":
              r.onYearClick(e, t), r.props.setPreSelection(r.props.selected);
              break;
            case "ArrowRight":
              r.handleYearNavigation(
                t + 1,
                me.default(r.props.preSelection, 1)
              );
              break;
            case "ArrowLeft":
              r.handleYearNavigation(
                t - 1,
                ve.default(r.props.preSelection, 1)
              );
          }
      }),
      ct(yt(r), "getYearClassNames", function (e) {
        var t = r.props,
          a = t.minDate,
          n = t.maxDate,
          o = t.selected;
        return se.default("react-datepicker__year-text", {
          "react-datepicker__year-text--selected": e === Pe.default(o),
          "react-datepicker__year-text--disabled": (a || n) && ta(e, r.props),
          "react-datepicker__year-text--keyboard-selected":
            r.isKeyboardSelected(e),
          "react-datepicker__year-text--today": r.isCurrentYear(e),
        });
      }),
      ct(yt(r), "getYearTabIndex", function (e) {
        return r.props.disabledKeyboardNavigation
          ? "-1"
          : e === Pe.default(r.props.preSelection)
          ? "0"
          : "-1";
      }),
      r
    );
  }
  return (
    pt(a, [
      {
        key: "render",
        value: function () {
          for (
            var e = this,
              t = [],
              a = this.props,
              r = Da(a.date, a.yearItemNumber),
              n = r.startPeriod,
              o = r.endPeriod,
              s = function (a) {
                t.push(
                  ne.default.createElement(
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
          return ne.default.createElement(
            "div",
            { className: "react-datepicker__year" },
            ne.default.createElement(
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
})();
ct(Ia, "propTypes", {
  date: oe.default.string,
  disabledKeyboardNavigation: oe.default.bool,
  onDayClick: oe.default.func,
  preSelection: oe.default.instanceOf(Date),
  setPreSelection: oe.default.func,
  selected: oe.default.object,
  inline: oe.default.bool,
  maxDate: oe.default.instanceOf(Date),
  minDate: oe.default.instanceOf(Date),
  yearItemNumber: oe.default.number,
});
var Ya = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a(e) {
    var r;
    return (
      ut(this, a),
      ct(yt((r = t.call(this, e))), "onTimeChange", function (e) {
        r.setState({ time: e });
        var t = new Date();
        t.setHours(e.split(":")[0]),
          t.setMinutes(e.split(":")[1]),
          r.props.onChange(t);
      }),
      ct(yt(r), "renderTimeInput", function () {
        var e = r.state.time,
          t = r.props,
          a = t.date,
          n = t.timeString,
          o = t.customTimeInput;
        return o
          ? ne.default.cloneElement(o, {
              date: a,
              value: e,
              onChange: r.onTimeChange,
            })
          : ne.default.createElement("input", {
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
    pt(
      a,
      [
        {
          key: "render",
          value: function () {
            return ne.default.createElement(
              "div",
              { className: "react-datepicker__input-time-container" },
              ne.default.createElement(
                "div",
                { className: "react-datepicker-time__caption" },
                this.props.timeInputLabel
              ),
              ne.default.createElement(
                "div",
                { className: "react-datepicker-time__input-container" },
                ne.default.createElement(
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
})();
function La(e) {
  var t = e.className,
    a = e.children,
    r = e.showPopperArrow,
    n = e.arrowProps,
    o = void 0 === n ? {} : n;
  return ne.default.createElement(
    "div",
    { className: t },
    r &&
      ne.default.createElement(
        "div",
        ft({ className: "react-datepicker__triangle" }, o)
      ),
    a
  );
}
ct(Ya, "propTypes", {
  onChange: oe.default.func,
  date: oe.default.instanceOf(Date),
  timeString: oe.default.string,
  timeInputLabel: oe.default.string,
  customTimeInput: oe.default.element,
}),
  (La.propTypes = {
    className: oe.default.string,
    children: oe.default.node,
    arrowProps: oe.default.object,
    showPopperArrow: oe.default.bool,
  });
var Ra = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select",
  ],
  Fa = (function (e) {
    ht(a, ne["default"].Component);
    var t = vt(a);
    function a(e) {
      var r;
      return (
        ut(this, a),
        ct(yt((r = t.call(this, e))), "handleClickOutside", function (e) {
          r.props.onClickOutside(e);
        }),
        ct(yt(r), "setClickOutsideRef", function () {
          return r.containerRef.current;
        }),
        ct(yt(r), "handleDropdownFocus", function (e) {
          (function () {
            var e = (
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).className || ""
            ).split(/\s+/);
            return Ra.some(function (t) {
              return e.indexOf(t) >= 0;
            });
          })(e.target) && r.props.onDropdownFocus();
        }),
        ct(yt(r), "getDateInView", function () {
          var e = r.props,
            t = e.preSelection,
            a = e.selected,
            n = e.openToDate,
            o = pa(r.props),
            s = ca(r.props),
            l = _t(),
            i = n || a || t;
          return (
            i || (o && Ze.default(l, o) ? o : s && Xe.default(l, s) ? s : l)
          );
        }),
        ct(yt(r), "increaseMonth", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return { date: he.default(t, 1) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        ct(yt(r), "decreaseMonth", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return { date: be.default(t, 1) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        ct(yt(r), "handleDayClick", function (e, t, a) {
          r.props.onSelect(e, t, a),
            r.props.setPreSelection && r.props.setPreSelection(e);
        }),
        ct(yt(r), "handleDayMouseEnter", function (e) {
          r.setState({ selectingDate: e }),
            r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
        }),
        ct(yt(r), "handleMonthMouseLeave", function () {
          r.setState({ selectingDate: null }),
            r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
        }),
        ct(yt(r), "handleYearChange", function (e) {
          r.props.onYearChange && r.props.onYearChange(e),
            r.props.adjustDateOnChange &&
              (r.props.onSelect && r.props.onSelect(e),
              r.props.setOpen && r.props.setOpen(!0)),
            r.props.setPreSelection && r.props.setPreSelection(e);
        }),
        ct(yt(r), "handleMonthChange", function (e) {
          r.props.onMonthChange && r.props.onMonthChange(e),
            r.props.adjustDateOnChange &&
              (r.props.onSelect && r.props.onSelect(e),
              r.props.setOpen && r.props.setOpen(!0)),
            r.props.setPreSelection && r.props.setPreSelection(e);
        }),
        ct(yt(r), "handleMonthYearChange", function (e) {
          r.handleYearChange(e), r.handleMonthChange(e);
        }),
        ct(yt(r), "changeYear", function (e) {
          r.setState(
            function (t) {
              var a = t.date;
              return { date: Le.default(a, e) };
            },
            function () {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        ct(yt(r), "changeMonth", function (e) {
          r.setState(
            function (t) {
              var a = t.date;
              return { date: Ie.default(a, e) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        ct(yt(r), "changeMonthYear", function (e) {
          r.setState(
            function (t) {
              var a = t.date;
              return {
                date: Le.default(Ie.default(a, _e.default(e)), Pe.default(e)),
              };
            },
            function () {
              return r.handleMonthYearChange(r.state.date);
            }
          );
        }),
        ct(yt(r), "header", function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.state.date,
            t = Lt(e, r.props.locale, r.props.calendarStartDay),
            a = [];
          return (
            r.props.showWeekNumbers &&
              a.push(
                ne.default.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  r.props.weekLabel || "#"
                )
              ),
            a.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (e) {
                var a = ce.default(t, e),
                  n = r.formatWeekday(a, r.props.locale),
                  o = r.props.weekDayClassName
                    ? r.props.weekDayClassName(a)
                    : void 0;
                return ne.default.createElement(
                  "div",
                  {
                    key: e,
                    className: se.default("react-datepicker__day-name", o),
                  },
                  n
                );
              })
            )
          );
        }),
        ct(yt(r), "formatWeekday", function (e, t) {
          return r.props.formatWeekDay
            ? (function (e, t, a) {
                return t(Nt(e, "EEEE", a));
              })(e, r.props.formatWeekDay, t)
            : r.props.useWeekdaysShort
            ? (function (e, t) {
                return Nt(e, "EEE", t);
              })(e, t)
            : (function (e, t) {
                return Nt(e, "EEEEEE", t);
              })(e, t);
        }),
        ct(yt(r), "decreaseYear", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return {
                date: ve.default(
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
        ct(yt(r), "renderPreviousButton", function () {
          if (!r.props.renderCustomHeader) {
            var e;
            switch (!0) {
              case r.props.showMonthYearPicker:
                e = ua(r.state.date, r.props);
                break;
              case r.props.showYearPicker:
                e = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = t.minDate,
                    r = t.yearItemNumber,
                    n = void 0 === r ? 12 : r,
                    o = Da(Ft(ve.default(e, n)), n).endPeriod,
                    s = a && Pe.default(a);
                  return (s && s > o) || !1;
                })(r.state.date, r.props);
                break;
              default:
                e = la(r.state.date, r.props);
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
                  (t.push("react-datepicker__navigation--previous--disabled"),
                  (a = null));
              var n =
                  r.props.showMonthYearPicker ||
                  r.props.showQuarterYearPicker ||
                  r.props.showYearPicker,
                o = r.props,
                s = o.previousMonthButtonLabel,
                l = o.previousYearButtonLabel,
                i = r.props,
                u = i.previousMonthAriaLabel,
                d =
                  void 0 === u
                    ? "string" == typeof s
                      ? s
                      : "Previous Month"
                    : u,
                p = i.previousYearAriaLabel,
                c =
                  void 0 === p
                    ? "string" == typeof l
                      ? l
                      : "Previous Year"
                    : p;
              return ne.default.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: a,
                  onKeyDown: r.props.handleOnKeyDown,
                  "aria-label": n ? c : d,
                },
                ne.default.createElement(
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
        ct(yt(r), "increaseYear", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return {
                date: me.default(
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
        ct(yt(r), "renderNextButton", function () {
          if (!r.props.renderCustomHeader) {
            var e;
            switch (!0) {
              case r.props.showMonthYearPicker:
                e = da(r.state.date, r.props);
                break;
              case r.props.showYearPicker:
                e = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = t.maxDate,
                    r = t.yearItemNumber,
                    n = void 0 === r ? 12 : r,
                    o = Da(me.default(e, n), n).startPeriod,
                    s = a && Pe.default(a);
                  return (s && s < o) || !1;
                })(r.state.date, r.props);
                break;
              default:
                e = ia(r.state.date, r.props);
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
                u = i.nextMonthAriaLabel,
                d =
                  void 0 === u ? ("string" == typeof s ? s : "Next Month") : u,
                p = i.nextYearAriaLabel,
                c = void 0 === p ? ("string" == typeof l ? l : "Next Year") : p;
              return ne.default.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: a,
                  onKeyDown: r.props.handleOnKeyDown,
                  "aria-label": n ? c : d,
                },
                ne.default.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--next",
                    ].join(" "),
                  },
                  n ? r.props.nextYearButtonLabel : r.props.nextMonthButtonLabel
                )
              );
            }
          }
        }),
        ct(yt(r), "renderCurrentMonth", function () {
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
              t.push("react-datepicker__current-month--hasMonthYearDropdown"),
            ne.default.createElement(
              "div",
              { className: t.join(" ") },
              Nt(e, r.props.dateFormat, r.props.locale)
            )
          );
        }),
        ct(yt(r), "renderYearDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (r.props.showYearDropdown && !e)
            return ne.default.createElement(ga, {
              adjustDateOnChange: r.props.adjustDateOnChange,
              date: r.state.date,
              onSelect: r.props.onSelect,
              setOpen: r.props.setOpen,
              dropdownMode: r.props.dropdownMode,
              onChange: r.changeYear,
              minDate: r.props.minDate,
              maxDate: r.props.maxDate,
              year: Pe.default(r.state.date),
              scrollableYearDropdown: r.props.scrollableYearDropdown,
              yearDropdownItemNumber: r.props.yearDropdownItemNumber,
            });
        }),
        ct(yt(r), "renderMonthDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (r.props.showMonthDropdown && !e)
            return ne.default.createElement(Ca, {
              dropdownMode: r.props.dropdownMode,
              locale: r.props.locale,
              onChange: r.changeMonth,
              month: _e.default(r.state.date),
              useShortMonthInDropdown: r.props.useShortMonthInDropdown,
            });
        }),
        ct(yt(r), "renderMonthYearDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (r.props.showMonthYearDropdown && !e)
            return ne.default.createElement(Oa, {
              dropdownMode: r.props.dropdownMode,
              locale: r.props.locale,
              dateFormat: r.props.dateFormat,
              onChange: r.changeMonthYear,
              minDate: r.props.minDate,
              maxDate: r.props.maxDate,
              date: r.state.date,
              scrollableMonthYearDropdown: r.props.scrollableMonthYearDropdown,
            });
        }),
        ct(yt(r), "renderTodayButton", function () {
          if (r.props.todayButton && !r.props.showTimeSelectOnly)
            return ne.default.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: function (e) {
                  return r.props.onSelect(Ke.default(_t()), e);
                },
              },
              r.props.todayButton
            );
        }),
        ct(yt(r), "renderDefaultHeader", function (e) {
          var t = e.monthDate,
            a = e.i;
          return ne.default.createElement(
            "div",
            {
              className: "react-datepicker__header ".concat(
                r.props.showTimeSelect
                  ? "react-datepicker__header--has-time-select"
                  : ""
              ),
            },
            r.renderCurrentMonth(t),
            ne.default.createElement(
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
            ne.default.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              r.header(t)
            )
          );
        }),
        ct(yt(r), "renderCustomHeader", function () {
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
          var n = la(r.state.date, r.props),
            o = ia(r.state.date, r.props),
            s = ua(r.state.date, r.props),
            l = da(r.state.date, r.props),
            i =
              !r.props.showMonthYearPicker &&
              !r.props.showQuarterYearPicker &&
              !r.props.showYearPicker;
          return ne.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: r.props.onDropdownFocus,
            },
            r.props.renderCustomHeader(
              lt(
                lt({}, r.state),
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
              ne.default.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                r.header(t)
              )
          );
        }),
        ct(yt(r), "renderYearHeader", function () {
          var e = r.state.date,
            t = r.props,
            a = t.showYearPicker,
            n = Da(e, t.yearItemNumber),
            o = n.startPeriod,
            s = n.endPeriod;
          return ne.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker-year-header",
            },
            a ? "".concat(o, " - ").concat(s) : Pe.default(e)
          );
        }),
        ct(yt(r), "renderHeader", function (e) {
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
        ct(yt(r), "renderMonths", function () {
          if (!r.props.showTimeSelectOnly && !r.props.showYearPicker) {
            for (
              var e = [],
                t = r.props.showPreviousMonths ? r.props.monthsShown - 1 : 0,
                a = be.default(r.state.date, t),
                n = 0;
              n < r.props.monthsShown;
              ++n
            ) {
              var o = n - r.props.monthSelectedIn,
                s = he.default(a, o),
                l = "month-".concat(n),
                i = n < r.props.monthsShown - 1,
                u = n > 0;
              e.push(
                ne.default.createElement(
                  "div",
                  {
                    key: l,
                    ref: function (e) {
                      r.monthContainer = e;
                    },
                    className: "react-datepicker__month-container",
                  },
                  r.renderHeader({ monthDate: s, i: n }),
                  ne.default.createElement(Ta, {
                    chooseDayAriaLabelPrefix: r.props.chooseDayAriaLabelPrefix,
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
                    showFullMonthYearPicker: r.props.showFullMonthYearPicker,
                    showTwoColumnMonthYearPicker:
                      r.props.showTwoColumnMonthYearPicker,
                    showFourColumnMonthYearPicker:
                      r.props.showFourColumnMonthYearPicker,
                    showYearPicker: r.props.showYearPicker,
                    showQuarterYearPicker: r.props.showQuarterYearPicker,
                    isInputFocused: r.props.isInputFocused,
                    containerRef: r.containerRef,
                    monthShowsDuplicateDaysEnd: i,
                    monthShowsDuplicateDaysStart: u,
                  })
                )
              );
            }
            return e;
          }
        }),
        ct(yt(r), "renderYears", function () {
          if (!r.props.showTimeSelectOnly)
            return r.props.showYearPicker
              ? ne.default.createElement(
                  "div",
                  { className: "react-datepicker__year--container" },
                  r.renderHeader(),
                  ne.default.createElement(
                    Ia,
                    ft(
                      { onDayClick: r.handleDayClick, date: r.state.date },
                      r.props
                    )
                  )
                )
              : void 0;
        }),
        ct(yt(r), "renderTimeSection", function () {
          if (
            r.props.showTimeSelect &&
            (r.state.monthContainer || r.props.showTimeSelectOnly)
          )
            return ne.default.createElement(Ea, {
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
        ct(yt(r), "renderInputTimeSection", function () {
          var e = new Date(r.props.selected),
            t =
              Pt(e) && Boolean(r.props.selected)
                ? "".concat(ma(e.getHours()), ":").concat(ma(e.getMinutes()))
                : "";
          if (r.props.showTimeInput)
            return ne.default.createElement(Ya, {
              date: e,
              timeString: t,
              timeInputLabel: r.props.timeInputLabel,
              onChange: r.props.onTimeChange,
              customTimeInput: r.props.customTimeInput,
            });
        }),
        (r.containerRef = ne.default.createRef()),
        (r.state = {
          date: r.getDateInView(),
          selectingDate: null,
          monthContainer: null,
        }),
        r
      );
    }
    return (
      pt(
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
              !Wt(this.props.preSelection, e.preSelection)
                ? this.setState({ date: this.props.preSelection })
                : this.props.openToDate &&
                  !Wt(this.props.openToDate, e.openToDate) &&
                  this.setState({ date: this.props.openToDate });
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.props.container || La;
              return ne.default.createElement(
                "div",
                { ref: this.containerRef },
                ne.default.createElement(
                  e,
                  {
                    className: se.default(
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
                yearItemNumber: 12,
              };
            },
          },
        ]
      ),
      a
    );
  })();
ct(Fa, "propTypes", {
  adjustDateOnChange: oe.default.bool,
  arrowProps: oe.default.object,
  chooseDayAriaLabelPrefix: oe.default.string,
  className: oe.default.string,
  children: oe.default.node,
  container: oe.default.func,
  dateFormat: oe.default.oneOfType([oe.default.string, oe.default.array])
    .isRequired,
  dayClassName: oe.default.func,
  weekDayClassName: oe.default.func,
  disabledDayAriaLabelPrefix: oe.default.string,
  monthClassName: oe.default.func,
  timeClassName: oe.default.func,
  disabledKeyboardNavigation: oe.default.bool,
  calendarStartDay: oe.default.number,
  dropdownMode: oe.default.oneOf(["scroll", "select"]),
  endDate: oe.default.instanceOf(Date),
  excludeDates: oe.default.array,
  excludeDateIntervals: oe.default.arrayOf(
    oe.default.shape({
      start: oe.default.instanceOf(Date),
      end: oe.default.instanceOf(Date),
    })
  ),
  filterDate: oe.default.func,
  fixedHeight: oe.default.bool,
  formatWeekNumber: oe.default.func,
  highlightDates: oe.default.instanceOf(Map),
  includeDates: oe.default.array,
  includeDateIntervals: oe.default.arrayOf(
    oe.default.shape({
      start: oe.default.instanceOf(Date),
      end: oe.default.instanceOf(Date),
    })
  ),
  includeTimes: oe.default.array,
  injectTimes: oe.default.array,
  inline: oe.default.bool,
  shouldFocusDayInline: oe.default.bool,
  locale: oe.default.oneOfType([
    oe.default.string,
    oe.default.shape({ locale: oe.default.object }),
  ]),
  maxDate: oe.default.instanceOf(Date),
  minDate: oe.default.instanceOf(Date),
  monthsShown: oe.default.number,
  monthSelectedIn: oe.default.number,
  nextMonthAriaLabel: oe.default.string,
  nextYearAriaLabel: oe.default.string,
  onClickOutside: oe.default.func.isRequired,
  onMonthChange: oe.default.func,
  onYearChange: oe.default.func,
  forceShowMonthNavigation: oe.default.bool,
  onDropdownFocus: oe.default.func,
  onSelect: oe.default.func.isRequired,
  onWeekSelect: oe.default.func,
  showTimeSelect: oe.default.bool,
  showTimeInput: oe.default.bool,
  showMonthYearPicker: oe.default.bool,
  showFullMonthYearPicker: oe.default.bool,
  showTwoColumnMonthYearPicker: oe.default.bool,
  showFourColumnMonthYearPicker: oe.default.bool,
  showYearPicker: oe.default.bool,
  showQuarterYearPicker: oe.default.bool,
  showTimeSelectOnly: oe.default.bool,
  timeFormat: oe.default.string,
  timeIntervals: oe.default.number,
  onTimeChange: oe.default.func,
  timeInputLabel: oe.default.string,
  minTime: oe.default.instanceOf(Date),
  maxTime: oe.default.instanceOf(Date),
  excludeTimes: oe.default.array,
  filterTime: oe.default.func,
  timeCaption: oe.default.string,
  openToDate: oe.default.instanceOf(Date),
  peekNextMonth: oe.default.bool,
  previousMonthAriaLabel: oe.default.string,
  previousYearAriaLabel: oe.default.string,
  scrollableYearDropdown: oe.default.bool,
  scrollableMonthYearDropdown: oe.default.bool,
  preSelection: oe.default.instanceOf(Date),
  selected: oe.default.instanceOf(Date),
  selectsEnd: oe.default.bool,
  selectsStart: oe.default.bool,
  selectsRange: oe.default.bool,
  selectsDisabledDaysInRange: oe.default.bool,
  showMonthDropdown: oe.default.bool,
  showPreviousMonths: oe.default.bool,
  showMonthYearDropdown: oe.default.bool,
  showWeekNumbers: oe.default.bool,
  showYearDropdown: oe.default.bool,
  startDate: oe.default.instanceOf(Date),
  todayButton: oe.default.string,
  useWeekdaysShort: oe.default.bool,
  formatWeekDay: oe.default.func,
  withPortal: oe.default.bool,
  weekLabel: oe.default.string,
  yearItemNumber: oe.default.number,
  yearDropdownItemNumber: oe.default.number,
  setOpen: oe.default.func,
  shouldCloseOnSelect: oe.default.bool,
  useShortMonthInDropdown: oe.default.bool,
  showDisabledMonthNavigation: oe.default.bool,
  previousMonthButtonLabel: oe.default.oneOfType([
    oe.default.string,
    oe.default.node,
  ]),
  nextMonthButtonLabel: oe.default.oneOfType([
    oe.default.string,
    oe.default.node,
  ]),
  previousYearButtonLabel: oe.default.string,
  nextYearButtonLabel: oe.default.string,
  renderCustomHeader: oe.default.func,
  renderDayContents: oe.default.func,
  onDayMouseEnter: oe.default.func,
  onMonthMouseLeave: oe.default.func,
  showPopperArrow: oe.default.bool,
  handleOnKeyDown: oe.default.func,
  handleOnDayKeyDown: oe.default.func,
  isInputFocused: oe.default.bool,
  customTimeInput: oe.default.element,
  weekAriaLabelPrefix: oe.default.string,
  setPreSelection: oe.default.func,
});
var qa = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a(e) {
    var r;
    return (
      ut(this, a), ((r = t.call(this, e)).el = document.createElement("div")), r
    );
  }
  return (
    pt(a, [
      {
        key: "componentDidMount",
        value: function () {
          (this.portalRoot = (this.props.portalHost || document).getElementById(
            this.props.portalId
          )),
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
          return ot.default.createPortal(this.props.children, this.el);
        },
      },
    ]),
    a
  );
})();
ct(qa, "propTypes", {
  children: oe.default.any,
  portalId: oe.default.string,
  portalHost: oe.default.instanceOf(ShadowRoot),
});
var Aa = []
    .concat(["top", "bottom", "right", "left"], ["auto"])
    .reduce(function (e, t) {
      return e.concat([t, t + "-start", t + "-end"]);
    }, []),
  Ba = function (e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  Ka = (function (e) {
    ht(a, ne["default"].Component);
    var t = vt(a);
    function a(e) {
      var r;
      return (
        ut(this, a),
        ct(yt((r = t.call(this, e))), "getTabChildren", function () {
          return Array.prototype.slice
            .call(
              r.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(Ba);
        }),
        ct(yt(r), "handleFocusStart", function (e) {
          var t = r.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        ct(yt(r), "handleFocusEnd", function (e) {
          var t = r.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (r.tabLoopRef = ne.default.createRef()),
        r
      );
    }
    return (
      pt(
        a,
        [
          {
            key: "render",
            value: function () {
              return this.props.enableTabLoop
                ? ne.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__tab-loop",
                      ref: this.tabLoopRef,
                    },
                    ne.default.createElement("div", {
                      className: "react-datepicker__tab-loop__start",
                      tabIndex: "0",
                      onFocus: this.handleFocusStart,
                    }),
                    this.props.children,
                    ne.default.createElement("div", {
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
  })();
ct(Ka, "propTypes", {
  children: oe.default.any,
  enableTabLoop: oe.default.bool,
});
var Wa = Aa,
  ja = (function (e) {
    ht(a, ne["default"].Component);
    var t = vt(a);
    function a() {
      return ut(this, a), t.apply(this, arguments);
    }
    return (
      pt(
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
                u = t.targetComponent,
                d = t.enableTabLoop,
                p = t.popperOnKeyDown,
                c = t.portalId,
                f = t.portalHost;
              if (!n) {
                var h = se.default("react-datepicker-popper", a);
                e = ne.default.createElement(
                  ae.Popper,
                  ft({ modifiers: s, placement: l }, i),
                  function (e) {
                    var t = e.ref,
                      a = e.style,
                      r = e.placement,
                      n = e.arrowProps;
                    return ne.default.createElement(
                      Ka,
                      { enableTabLoop: d },
                      ne.default.createElement(
                        "div",
                        {
                          ref: t,
                          style: a,
                          className: h,
                          "data-placement": r,
                          onKeyDown: p,
                        },
                        ne.default.cloneElement(o, { arrowProps: n })
                      )
                    );
                  }
                );
              }
              this.props.popperContainer &&
                (e = ne.default.createElement(
                  this.props.popperContainer,
                  {},
                  e
                )),
                c &&
                  !n &&
                  (e = ne.default.createElement(
                    qa,
                    { portalId: c, portalHost: f },
                    e
                  ));
              var m = se.default("react-datepicker-wrapper", r);
              return ne.default.createElement(
                ae.Manager,
                { className: "react-datepicker-manager" },
                ne.default.createElement(ae.Reference, null, function (e) {
                  var t = e.ref;
                  return ne.default.createElement(
                    "div",
                    { ref: t, className: m },
                    u
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
  })();
ct(ja, "propTypes", {
  className: oe.default.string,
  wrapperClassName: oe.default.string,
  hidePopper: oe.default.bool,
  popperComponent: oe.default.element,
  popperModifiers: oe.default.arrayOf(oe.default.object),
  popperPlacement: oe.default.oneOf(Wa),
  popperContainer: oe.default.func,
  popperProps: oe.default.object,
  targetComponent: oe.default.element,
  enableTabLoop: oe.default.bool,
  popperOnKeyDown: oe.default.func,
  portalId: oe.default.string,
  portalHost: oe.default.instanceOf(ShadowRoot),
});
var Ha = nt.default(Fa);
var Qa = (function (e) {
  ht(a, ne["default"].Component);
  var t = vt(a);
  function a(e) {
    var r;
    return (
      ut(this, a),
      ct(yt((r = t.call(this, e))), "getPreSelection", function () {
        return r.props.openToDate
          ? r.props.openToDate
          : r.props.selectsEnd && r.props.startDate
          ? r.props.startDate
          : r.props.selectsStart && r.props.endDate
          ? r.props.endDate
          : _t();
      }),
      ct(yt(r), "calcInitialState", function () {
        var e,
          t = r.getPreSelection(),
          a = pa(r.props),
          n = ca(r.props),
          o =
            a && Ze.default(t, Ke.default(a))
              ? a
              : n && Xe.default(t, Ve.default(n))
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
          highlightDates: fa(r.props.highlightDates),
          focused: !1,
          shouldFocusDayInline: !1,
        };
      }),
      ct(yt(r), "clearPreventFocusTimeout", function () {
        r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
      }),
      ct(yt(r), "setFocus", function () {
        r.input && r.input.focus && r.input.focus({ preventScroll: !0 });
      }),
      ct(yt(r), "setBlur", function () {
        r.input && r.input.blur && r.input.blur(), r.cancelFocusInput();
      }),
      ct(yt(r), "setOpen", function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        r.setState(
          {
            open: e,
            preSelection:
              e && r.state.open
                ? r.state.preSelection
                : r.calcInitialState().preSelection,
            lastPreSelectChange: Ua,
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
      ct(yt(r), "inputOk", function () {
        return le.default(r.state.preSelection);
      }),
      ct(yt(r), "isCalendarOpen", function () {
        return void 0 === r.props.open
          ? r.state.open && !r.props.disabled && !r.props.readOnly
          : r.props.open;
      }),
      ct(yt(r), "handleFocus", function (e) {
        r.state.preventFocus ||
          (r.props.onFocus(e),
          r.props.preventOpenOnFocus || r.props.readOnly || r.setOpen(!0)),
          r.setState({ focused: !0 });
      }),
      ct(yt(r), "cancelFocusInput", function () {
        clearTimeout(r.inputFocusTimeout), (r.inputFocusTimeout = null);
      }),
      ct(yt(r), "deferFocusInput", function () {
        r.cancelFocusInput(),
          (r.inputFocusTimeout = setTimeout(function () {
            return r.setFocus();
          }, 1));
      }),
      ct(yt(r), "handleDropdownFocus", function () {
        r.cancelFocusInput();
      }),
      ct(yt(r), "handleBlur", function (e) {
        (!r.state.open || r.props.withPortal || r.props.showTimeInput) &&
          r.props.onBlur(e),
          r.setState({ focused: !1 });
      }),
      ct(yt(r), "handleCalendarClickOutside", function (e) {
        r.props.onClickOutside(e),
          r.props.inline || r.setOpen(!1),
          r.props.withPortal && e.preventDefault();
      }),
      ct(yt(r), "handleChange", function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var n = t[0];
        if (
          !r.props.onChangeRaw ||
          (r.props.onChangeRaw.apply(yt(r), t),
          "function" == typeof n.isDefaultPrevented && !n.isDefaultPrevented())
        ) {
          r.setState({ inputValue: n.target.value, lastPreSelectChange: Va });
          var o = Ot(
            n.target.value,
            r.props.dateFormat,
            r.props.locale,
            r.props.strictParsing,
            r.props.minDate
          );
          (!o && n.target.value) || r.setSelected(o, n, !0);
        }
      }),
      ct(yt(r), "handleSelect", function (e, t, a) {
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
          !o || s || Ze.default(e, o) || r.setOpen(!1);
        }
      }),
      ct(yt(r), "setSelected", function (e, t, a, n) {
        var o = e;
        if (null === o || !Gt(o, r.props)) {
          var s = r.props,
            l = s.onChange,
            i = s.selectsRange,
            u = s.startDate,
            d = s.endDate;
          if (!jt(r.props.selected, o) || r.props.allowSameDay || i)
            if (
              (null !== o &&
                (!r.props.selected ||
                  (a &&
                    (r.props.showTimeSelect ||
                      r.props.showTimeSelectOnly ||
                      r.props.showTimeInput)) ||
                  (o = Tt(o, {
                    hour: ke.default(r.props.selected),
                    minute: we.default(r.props.selected),
                    second: ge.default(r.props.selected),
                  })),
                r.props.inline || r.setState({ preSelection: o }),
                r.props.focusSelectedMonth ||
                  r.setState({ monthSelectedIn: n })),
              i)
            ) {
              var p = u && !d,
                c = u && d;
              !u && !d
                ? l([o, null], t)
                : p && (Ze.default(o, u) ? l([o, null], t) : l([u, o], t)),
                c && l([o, null], t);
            } else l(o, t);
          a || (r.props.onSelect(o, t), r.setState({ inputValue: null }));
        }
      }),
      ct(yt(r), "setPreSelection", function (e) {
        var t = void 0 !== r.props.minDate,
          a = void 0 !== r.props.maxDate,
          n = !0;
        if (e) {
          var o = Ke.default(e);
          if (t && a) n = Ht(e, r.props.minDate, r.props.maxDate);
          else if (t) {
            var s = Ke.default(r.props.minDate);
            n = Xe.default(e, s) || jt(o, s);
          } else if (a) {
            var l = Ve.default(r.props.maxDate);
            n = Ze.default(e, l) || jt(o, l);
          }
        }
        n && r.setState({ preSelection: e });
      }),
      ct(yt(r), "handleTimeChange", function (e) {
        var t = Tt(r.props.selected ? r.props.selected : r.getPreSelection(), {
          hour: ke.default(e),
          minute: we.default(e),
        });
        r.setState({ preSelection: t }),
          r.props.onChange(t),
          r.props.shouldCloseOnSelect && r.setOpen(!1),
          r.props.showTimeInput && r.setOpen(!0),
          r.setState({ inputValue: null });
      }),
      ct(yt(r), "onInputClick", function () {
        r.props.disabled || r.props.readOnly || r.setOpen(!0),
          r.props.onInputClick();
      }),
      ct(yt(r), "onInputKeyDown", function (e) {
        r.props.onKeyDown(e);
        var t = e.key;
        if (r.state.open || r.props.inline || r.props.preventOpenOnFocus) {
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
            var n = _t(r.state.preSelection);
            "Enter" === t
              ? (e.preventDefault(),
                r.inputOk() && r.state.lastPreSelectChange === Ua
                  ? (r.handleSelect(n, e),
                    !r.props.shouldCloseOnSelect && r.setPreSelection(n))
                  : r.setOpen(!1))
              : "Escape" === t && (e.preventDefault(), r.setOpen(!1)),
              r.inputOk() ||
                r.props.onInputError({ code: 1, msg: "Date input not valid." });
          }
        } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || r.onInputClick();
      }),
      ct(yt(r), "onDayKeyDown", function (e) {
        r.props.onKeyDown(e);
        var t = e.key,
          a = _t(r.state.preSelection);
        if ("Enter" === t)
          e.preventDefault(),
            r.handleSelect(a, e),
            !r.props.shouldCloseOnSelect && r.setPreSelection(a);
        else if ("Escape" === t)
          e.preventDefault(),
            r.setOpen(!1),
            r.inputOk() ||
              r.props.onInputError({ code: 1, msg: "Date input not valid." });
        else if (!r.props.disabledKeyboardNavigation) {
          var n;
          switch (t) {
            case "ArrowLeft":
              n = De.default(a, 1);
              break;
            case "ArrowRight":
              n = ce.default(a, 1);
              break;
            case "ArrowUp":
              n = ye.default(a, 1);
              break;
            case "ArrowDown":
              n = fe.default(a, 1);
              break;
            case "PageUp":
              n = be.default(a, 1);
              break;
            case "PageDown":
              n = he.default(a, 1);
              break;
            case "Home":
              n = ve.default(a, 1);
              break;
            case "End":
              n = me.default(a, 1);
          }
          if (!n)
            return void (
              r.props.onInputError &&
              r.props.onInputError({ code: 1, msg: "Date input not valid." })
            );
          if (
            (e.preventDefault(),
            r.setState({ lastPreSelectChange: Ua }),
            r.props.adjustDateOnChange && r.setSelected(n),
            r.setPreSelection(n),
            r.props.inline)
          ) {
            var o = _e.default(a),
              s = _e.default(n),
              l = Pe.default(a),
              i = Pe.default(n);
            o !== s || l !== i
              ? r.setState({ shouldFocusDayInline: !0 })
              : r.setState({ shouldFocusDayInline: !1 });
          }
        }
      }),
      ct(yt(r), "onPopperKeyDown", function (e) {
        "Escape" === e.key &&
          (e.preventDefault(),
          r.setState({ preventFocus: !0 }, function () {
            r.setOpen(!1),
              setTimeout(function () {
                r.setFocus(), r.setState({ preventFocus: !1 });
              });
          }));
      }),
      ct(yt(r), "onClearClick", function (e) {
        e && e.preventDefault && e.preventDefault(),
          r.props.selectsRange
            ? r.props.onChange([null, null], e)
            : r.props.onChange(null, e),
          r.setState({ inputValue: null });
      }),
      ct(yt(r), "clear", function () {
        r.onClearClick();
      }),
      ct(yt(r), "onScroll", function (e) {
        "boolean" == typeof r.props.closeOnScroll && r.props.closeOnScroll
          ? (e.target !== document &&
              e.target !== document.documentElement &&
              e.target !== document.body) ||
            r.setOpen(!1)
          : "function" == typeof r.props.closeOnScroll &&
            r.props.closeOnScroll(e) &&
            r.setOpen(!1);
      }),
      ct(yt(r), "renderCalendar", function () {
        return r.props.inline || r.isCalendarOpen()
          ? ne.default.createElement(
              Ha,
              {
                ref: function (e) {
                  r.calendar = e;
                },
                locale: r.props.locale,
                calendarStartDay: r.props.calendarStartDay,
                chooseDayAriaLabelPrefix: r.props.chooseDayAriaLabelPrefix,
                disabledDayAriaLabelPrefix: r.props.disabledDayAriaLabelPrefix,
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
                forceShowMonthNavigation: r.props.forceShowMonthNavigation,
                showDisabledMonthNavigation:
                  r.props.showDisabledMonthNavigation,
                scrollableYearDropdown: r.props.scrollableYearDropdown,
                scrollableMonthYearDropdown:
                  r.props.scrollableMonthYearDropdown,
                todayButton: r.props.todayButton,
                weekLabel: r.props.weekLabel,
                outsideClickIgnoreClass:
                  "react-datepicker-ignore-onclickoutside",
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
                previousMonthButtonLabel: r.props.previousMonthButtonLabel,
                nextMonthAriaLabel: r.props.nextMonthAriaLabel,
                nextMonthButtonLabel: r.props.nextMonthButtonLabel,
                previousYearAriaLabel: r.props.previousYearAriaLabel,
                previousYearButtonLabel: r.props.previousYearButtonLabel,
                nextYearAriaLabel: r.props.nextYearAriaLabel,
                nextYearButtonLabel: r.props.nextYearButtonLabel,
                timeInputLabel: r.props.timeInputLabel,
                disabledKeyboardNavigation: r.props.disabledKeyboardNavigation,
                renderCustomHeader: r.props.renderCustomHeader,
                popperProps: r.props.popperProps,
                renderDayContents: r.props.renderDayContents,
                onDayMouseEnter: r.props.onDayMouseEnter,
                onMonthMouseLeave: r.props.onMonthMouseLeave,
                selectsDisabledDaysInRange: r.props.selectsDisabledDaysInRange,
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
      ct(yt(r), "renderDateInput", function () {
        var e,
          t = se.default(
            r.props.className,
            ct({}, "react-datepicker-ignore-onclickoutside", r.state.open)
          ),
          a =
            r.props.customInput ||
            ne.default.createElement("input", { type: "text" }),
          n = r.props.customInputRef || "ref",
          o =
            "string" == typeof r.props.value
              ? r.props.value
              : "string" == typeof r.state.inputValue
              ? r.state.inputValue
              : r.props.selectsRange
              ? (function (e, t, a) {
                  if (!e) return "";
                  var r = xt(e, a),
                    n = t ? xt(t, a) : "";
                  return "".concat(r, " - ").concat(n);
                })(r.props.startDate, r.props.endDate, r.props)
              : xt(r.props.selected, r.props);
        return ne.default.cloneElement(
          a,
          (ct((e = {}), n, function (e) {
            r.input = e;
          }),
          ct(e, "value", o),
          ct(e, "onBlur", r.handleBlur),
          ct(e, "onChange", r.handleChange),
          ct(e, "onClick", r.onInputClick),
          ct(e, "onFocus", r.handleFocus),
          ct(e, "onKeyDown", r.onInputKeyDown),
          ct(e, "id", r.props.id),
          ct(e, "name", r.props.name),
          ct(e, "autoFocus", r.props.autoFocus),
          ct(e, "placeholder", r.props.placeholderText),
          ct(e, "disabled", r.props.disabled),
          ct(e, "autoComplete", r.props.autoComplete),
          ct(e, "className", se.default(a.props.className, t)),
          ct(e, "title", r.props.title),
          ct(e, "readOnly", r.props.readOnly),
          ct(e, "required", r.props.required),
          ct(e, "tabIndex", r.props.tabIndex),
          ct(e, "aria-describedby", r.props.ariaDescribedBy),
          ct(e, "aria-invalid", r.props.ariaInvalid),
          ct(e, "aria-labelledby", r.props.ariaLabelledBy),
          ct(e, "aria-required", r.props.ariaRequired),
          e)
        );
      }),
      ct(yt(r), "renderClearButton", function () {
        var e = r.props,
          t = e.isClearable,
          a = e.selected,
          n = e.startDate,
          o = e.endDate,
          s = e.clearButtonTitle,
          l = e.clearButtonClassName,
          i = void 0 === l ? "" : l,
          u = e.ariaLabelClose,
          d = void 0 === u ? "Close" : u;
        return !t || (null == a && null == n && null == o)
          ? null
          : ne.default.createElement("button", {
              type: "button",
              className: "react-datepicker__close-icon ".concat(i).trim(),
              "aria-label": d,
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
    pt(
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
                ? _e.default(a) !== _e.default(r) ||
                  Pe.default(a) !== Pe.default(r)
                : a !== r) &&
              this.setPreSelection(this.props.selected),
              void 0 !== this.state.monthSelectedIn &&
                e.monthsShown !== this.props.monthsShown &&
                this.setState({ monthSelectedIn: 0 }),
              e.highlightDates !== this.props.highlightDates &&
                this.setState({
                  highlightDates: fa(this.props.highlightDates),
                }),
              t.focused ||
                jt(e.selected, this.props.selected) ||
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
            return ne.default.createElement(
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
                ? ne.default.createElement(
                    "div",
                    { className: "react-datepicker__portal" },
                    e
                  )
                : null;
              return (
                this.state.open &&
                  this.props.portalId &&
                  (t = ne.default.createElement(
                    qa,
                    {
                      portalId: this.props.portalId,
                      portalHost: this.props.portalHost,
                    },
                    t
                  )),
                ne.default.createElement(
                  "div",
                  null,
                  this.renderInputContainer(),
                  t
                )
              );
            }
            return ne.default.createElement(ja, {
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
              yearItemNumber: 12,
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
})();
ct(Qa, "propTypes", {
  adjustDateOnChange: oe.default.bool,
  allowSameDay: oe.default.bool,
  ariaDescribedBy: oe.default.string,
  ariaInvalid: oe.default.string,
  ariaLabelClose: oe.default.string,
  ariaLabelledBy: oe.default.string,
  ariaRequired: oe.default.string,
  autoComplete: oe.default.string,
  autoFocus: oe.default.bool,
  calendarClassName: oe.default.string,
  calendarContainer: oe.default.func,
  children: oe.default.node,
  chooseDayAriaLabelPrefix: oe.default.string,
  closeOnScroll: oe.default.oneOfType([oe.default.bool, oe.default.func]),
  className: oe.default.string,
  customInput: oe.default.element,
  customInputRef: oe.default.string,
  calendarStartDay: oe.default.number,
  dateFormat: oe.default.oneOfType([oe.default.string, oe.default.array]),
  dateFormatCalendar: oe.default.string,
  dayClassName: oe.default.func,
  weekDayClassName: oe.default.func,
  disabledDayAriaLabelPrefix: oe.default.string,
  monthClassName: oe.default.func,
  timeClassName: oe.default.func,
  disabled: oe.default.bool,
  disabledKeyboardNavigation: oe.default.bool,
  dropdownMode: oe.default.oneOf(["scroll", "select"]).isRequired,
  endDate: oe.default.instanceOf(Date),
  excludeDates: oe.default.array,
  excludeDateIntervals: oe.default.arrayOf(
    oe.default.shape({
      start: oe.default.instanceOf(Date),
      end: oe.default.instanceOf(Date),
    })
  ),
  filterDate: oe.default.func,
  fixedHeight: oe.default.bool,
  formatWeekNumber: oe.default.func,
  highlightDates: oe.default.array,
  id: oe.default.string,
  includeDates: oe.default.array,
  includeDateIntervals: oe.default.array,
  includeTimes: oe.default.array,
  injectTimes: oe.default.array,
  inline: oe.default.bool,
  isClearable: oe.default.bool,
  locale: oe.default.oneOfType([
    oe.default.string,
    oe.default.shape({ locale: oe.default.object }),
  ]),
  maxDate: oe.default.instanceOf(Date),
  minDate: oe.default.instanceOf(Date),
  monthsShown: oe.default.number,
  name: oe.default.string,
  onBlur: oe.default.func,
  onChange: oe.default.func.isRequired,
  onSelect: oe.default.func,
  onWeekSelect: oe.default.func,
  onClickOutside: oe.default.func,
  onChangeRaw: oe.default.func,
  onFocus: oe.default.func,
  onInputClick: oe.default.func,
  onKeyDown: oe.default.func,
  onMonthChange: oe.default.func,
  onYearChange: oe.default.func,
  onInputError: oe.default.func,
  open: oe.default.bool,
  onCalendarOpen: oe.default.func,
  onCalendarClose: oe.default.func,
  openToDate: oe.default.instanceOf(Date),
  peekNextMonth: oe.default.bool,
  placeholderText: oe.default.string,
  popperContainer: oe.default.func,
  popperClassName: oe.default.string,
  popperModifiers: oe.default.arrayOf(oe.default.object),
  popperPlacement: oe.default.oneOf(Wa),
  popperProps: oe.default.object,
  preventOpenOnFocus: oe.default.bool,
  readOnly: oe.default.bool,
  required: oe.default.bool,
  scrollableYearDropdown: oe.default.bool,
  scrollableMonthYearDropdown: oe.default.bool,
  selected: oe.default.instanceOf(Date),
  selectsEnd: oe.default.bool,
  selectsStart: oe.default.bool,
  selectsRange: oe.default.bool,
  selectsDisabledDaysInRange: oe.default.bool,
  showMonthDropdown: oe.default.bool,
  showPreviousMonths: oe.default.bool,
  showMonthYearDropdown: oe.default.bool,
  showWeekNumbers: oe.default.bool,
  showYearDropdown: oe.default.bool,
  strictParsing: oe.default.bool,
  forceShowMonthNavigation: oe.default.bool,
  showDisabledMonthNavigation: oe.default.bool,
  startDate: oe.default.instanceOf(Date),
  startOpen: oe.default.bool,
  tabIndex: oe.default.number,
  timeCaption: oe.default.string,
  title: oe.default.string,
  todayButton: oe.default.node,
  useWeekdaysShort: oe.default.bool,
  formatWeekDay: oe.default.func,
  value: oe.default.string,
  weekLabel: oe.default.string,
  withPortal: oe.default.bool,
  portalId: oe.default.string,
  portalHost: oe.default.instanceOf(ShadowRoot),
  yearItemNumber: oe.default.number,
  yearDropdownItemNumber: oe.default.number,
  shouldCloseOnSelect: oe.default.bool,
  showTimeInput: oe.default.bool,
  showMonthYearPicker: oe.default.bool,
  showFullMonthYearPicker: oe.default.bool,
  showTwoColumnMonthYearPicker: oe.default.bool,
  showFourColumnMonthYearPicker: oe.default.bool,
  showYearPicker: oe.default.bool,
  showQuarterYearPicker: oe.default.bool,
  showTimeSelect: oe.default.bool,
  showTimeSelectOnly: oe.default.bool,
  timeFormat: oe.default.string,
  timeIntervals: oe.default.number,
  minTime: oe.default.instanceOf(Date),
  maxTime: oe.default.instanceOf(Date),
  excludeTimes: oe.default.array,
  filterTime: oe.default.func,
  useShortMonthInDropdown: oe.default.bool,
  clearButtonTitle: oe.default.string,
  clearButtonClassName: oe.default.string,
  previousMonthAriaLabel: oe.default.string,
  previousMonthButtonLabel: oe.default.oneOfType([
    oe.default.string,
    oe.default.node,
  ]),
  nextMonthAriaLabel: oe.default.string,
  nextMonthButtonLabel: oe.default.oneOfType([
    oe.default.string,
    oe.default.node,
  ]),
  previousYearAriaLabel: oe.default.string,
  previousYearButtonLabel: oe.default.string,
  nextYearAriaLabel: oe.default.string,
  nextYearButtonLabel: oe.default.string,
  timeInputLabel: oe.default.string,
  renderCustomHeader: oe.default.func,
  renderDayContents: oe.default.func,
  wrapperClassName: oe.default.string,
  focusSelectedMonth: oe.default.bool,
  onDayMouseEnter: oe.default.func,
  onMonthMouseLeave: oe.default.func,
  showPopperArrow: oe.default.bool,
  excludeScrollbar: oe.default.bool,
  enableTabLoop: oe.default.bool,
  customTimeInput: oe.default.element,
  weekAriaLabelPrefix: oe.default.string,
});
var Va = "input",
  Ua = "navigate";
(exports.CalendarContainer = La),
  (exports.default = Qa),
  (exports.getDefaultLocale = Qt),
  (exports.registerLocale = function (e, t) {
    var a = "undefined" != typeof window ? window : globalThis;
    a.__localeData__ || (a.__localeData__ = {}), (a.__localeData__[e] = t);
  }),
  (exports.setDefaultLocale = function (e) {
    ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
  });
