(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
var Er =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Jf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var fs = { exports: {} },
  Ml = {},
  ds = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for("react.element"),
  qf = Symbol.for("react.portal"),
  bf = Symbol.for("react.fragment"),
  ed = Symbol.for("react.strict_mode"),
  td = Symbol.for("react.profiler"),
  nd = Symbol.for("react.provider"),
  rd = Symbol.for("react.context"),
  ld = Symbol.for("react.forward_ref"),
  id = Symbol.for("react.suspense"),
  od = Symbol.for("react.memo"),
  ud = Symbol.for("react.lazy"),
  Ru = Symbol.iterator;
function ad(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ru && e[Ru]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ps = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ms = Object.assign,
  hs = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hs),
    (this.updater = n || ps);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vs() {}
vs.prototype = wn.prototype;
function Lo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hs),
    (this.updater = n || ps);
}
var Mo = (Lo.prototype = new vs());
Mo.constructor = Lo;
ms(Mo, wn.prototype);
Mo.isPureReactComponent = !0;
var Iu = Array.isArray,
  gs = Object.prototype.hasOwnProperty,
  Ro = { current: null },
  ys = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      gs.call(t, r) && !ys.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: sr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ro.current,
  };
}
function sd(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Io(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr;
}
function cd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Du = /\/+/g;
function ii(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? cd("" + e.key)
    : t.toString(36);
}
function Kr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sr:
          case qf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + ii(o, 0) : r),
      Iu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Du, "$&/") + "/"),
          Kr(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Io(l) &&
            (l = sd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Du, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Iu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + ii(i, u);
      o += Kr(i, t, n, a, l);
    }
  else if (((a = ad(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + ii(i, u++)), (o += Kr(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Cr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Kr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function fd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  Xr = { transition: null },
  dd = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Xr,
    ReactCurrentOwner: Ro,
  };
function Ss() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: Cr,
  forEach: function (e, t, n) {
    Cr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Cr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Cr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Io(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
j.Component = wn;
j.Fragment = bf;
j.Profiler = td;
j.PureComponent = Lo;
j.StrictMode = ed;
j.Suspense = id;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dd;
j.act = Ss;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = ms({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ro.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      gs.call(t, a) &&
        !ys.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: rd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: nd, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = ws;
j.createFactory = function (e) {
  var t = ws.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: ld, render: e };
};
j.isValidElement = Io;
j.lazy = function (e) {
  return { $$typeof: ud, _payload: { _status: -1, _result: e }, _init: fd };
};
j.memo = function (e, t) {
  return { $$typeof: od, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Xr.transition;
  Xr.transition = {};
  try {
    e();
  } finally {
    Xr.transition = t;
  }
};
j.unstable_act = Ss;
j.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
j.useContext = function (e) {
  return de.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
j.useId = function () {
  return de.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return de.current.useRef(e);
};
j.useState = function (e) {
  return de.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return de.current.useTransition();
};
j.version = "18.3.1";
ds.exports = j;
var ae = ds.exports;
const mt = Jf(ae);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd = ae,
  md = Symbol.for("react.element"),
  hd = Symbol.for("react.fragment"),
  vd = Object.prototype.hasOwnProperty,
  gd = pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ks(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) vd.call(t, r) && !yd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: md,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: gd.current,
  };
}
Ml.Fragment = hd;
Ml.jsx = ks;
Ml.jsxs = ks;
fs.exports = Ml;
var v = fs.exports,
  Di = {},
  _s = { exports: {} },
  Ee = {},
  xs = { exports: {} },
  Es = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, N) {
    var z = P.length;
    P.push(N);
    e: for (; 0 < z; ) {
      var X = (z - 1) >>> 1,
        b = P[X];
      if (0 < l(b, N)) (P[X] = N), (P[z] = b), (z = X);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var N = P[0],
      z = P.pop();
    if (z !== N) {
      P[0] = z;
      e: for (var X = 0, b = P.length, _r = b >>> 1; X < _r; ) {
        var Ot = 2 * (X + 1) - 1,
          li = P[Ot],
          zt = Ot + 1,
          xr = P[zt];
        if (0 > l(li, z))
          zt < b && 0 > l(xr, li)
            ? ((P[X] = xr), (P[zt] = z), (X = zt))
            : ((P[X] = li), (P[Ot] = z), (X = Ot));
        else if (zt < b && 0 > l(xr, z)) (P[X] = xr), (P[zt] = z), (X = zt);
        else break e;
      }
    }
    return N;
  }
  function l(P, N) {
    var z = P.sortIndex - N.sortIndex;
    return z !== 0 ? z : P.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    s = [],
    m = 1,
    p = null,
    h = 3,
    w = !1,
    S = !1,
    _ = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var N = n(s); N !== null; ) {
      if (N.callback === null) r(s);
      else if (N.startTime <= P)
        r(s), (N.sortIndex = N.expirationTime), t(a, N);
      else break;
      N = n(s);
    }
  }
  function g(P) {
    if (((_ = !1), d(P), !S))
      if (n(a) !== null) (S = !0), ni(x);
      else {
        var N = n(s);
        N !== null && ri(g, N.startTime - P);
      }
  }
  function x(P, N) {
    (S = !1), _ && ((_ = !1), f(T), (T = -1)), (w = !0);
    var z = h;
    try {
      for (
        d(N), p = n(a);
        p !== null && (!(p.expirationTime > N) || (P && !me()));

      ) {
        var X = p.callback;
        if (typeof X == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var b = X(p.expirationTime <= N);
          (N = e.unstable_now()),
            typeof b == "function" ? (p.callback = b) : p === n(a) && r(a),
            d(N);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var _r = !0;
      else {
        var Ot = n(s);
        Ot !== null && ri(g, Ot.startTime - N), (_r = !1);
      }
      return _r;
    } finally {
      (p = null), (h = z), (w = !1);
    }
  }
  var k = !1,
    E = null,
    T = -1,
    I = 5,
    O = -1;
  function me() {
    return !(e.unstable_now() - O < I);
  }
  function lt() {
    if (E !== null) {
      var P = e.unstable_now();
      O = P;
      var N = !0;
      try {
        N = E(!0, P);
      } finally {
        N ? Nt() : ((k = !1), (E = null));
      }
    } else k = !1;
  }
  var Nt;
  if (typeof c == "function")
    Nt = function () {
      c(lt);
    };
  else if (typeof MessageChannel < "u") {
    var xn = new MessageChannel(),
      ti = xn.port2;
    (xn.port1.onmessage = lt),
      (Nt = function () {
        ti.postMessage(null);
      });
  } else
    Nt = function () {
      L(lt, 0);
    };
  function ni(P) {
    (E = P), k || ((k = !0), Nt());
  }
  function ri(P, N) {
    T = L(function () {
      P(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), ni(x));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var z = h;
      h = N;
      try {
        return P();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, N) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = h;
      h = P;
      try {
        return N();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, N, z) {
      var X = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? X + z : X))
          : (z = X),
        P)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = z + b),
        (P = {
          id: m++,
          callback: N,
          priorityLevel: P,
          startTime: z,
          expirationTime: b,
          sortIndex: -1,
        }),
        z > X
          ? ((P.sortIndex = z),
            t(s, P),
            n(a) === null &&
              P === n(s) &&
              (_ ? (f(T), (T = -1)) : (_ = !0), ri(g, z - X)))
          : ((P.sortIndex = b), t(a, P), S || w || ((S = !0), ni(x))),
        P
      );
    }),
    (e.unstable_shouldYield = me),
    (e.unstable_wrapCallback = function (P) {
      var N = h;
      return function () {
        var z = h;
        h = N;
        try {
          return P.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    });
})(Es);
xs.exports = Es;
var wd = xs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd = ae,
  xe = wd;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Cs = new Set(),
  Yn = {};
function Vt(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Yn[e] = t, e = 0; e < t.length; e++) Cs.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $i = Object.prototype.hasOwnProperty,
  kd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $u = {},
  Fu = {};
function _d(e) {
  return $i.call(Fu, e)
    ? !0
    : $i.call($u, e)
      ? !1
      : kd.test(e)
        ? (Fu[e] = !0)
        : (($u[e] = !0), !1);
}
function xd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ed(e, t, n, r) {
  if (t === null || typeof t > "u" || xd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Do = /[\-:]([a-z])/g;
function $o(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Do, $o);
    le[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Do, $o);
    le[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Do, $o);
  le[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fo(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ed(t, n, l, r) && (n = null),
    r || l === null
      ? _d(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pr = Symbol.for("react.element"),
  Kt = Symbol.for("react.portal"),
  Xt = Symbol.for("react.fragment"),
  Ho = Symbol.for("react.strict_mode"),
  Fi = Symbol.for("react.profiler"),
  Ps = Symbol.for("react.provider"),
  Ts = Symbol.for("react.context"),
  Ao = Symbol.for("react.forward_ref"),
  Hi = Symbol.for("react.suspense"),
  Ai = Symbol.for("react.suspense_list"),
  Uo = Symbol.for("react.memo"),
  at = Symbol.for("react.lazy"),
  Ns = Symbol.for("react.offscreen"),
  Hu = Symbol.iterator;
function En(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hu && e[Hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  oi;
function Mn(e) {
  if (oi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      oi = (t && t[1]) || "";
    }
  return (
    `
` +
    oi +
    e
  );
}
var ui = !1;
function ai(e, t) {
  if (!e || ui) return "";
  ui = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (ui = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function Cd(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ai(e.type, !1)), e;
    case 11:
      return (e = ai(e.type.render, !1)), e;
    case 1:
      return (e = ai(e.type, !0)), e;
    default:
      return "";
  }
}
function Ui(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xt:
      return "Fragment";
    case Kt:
      return "Portal";
    case Fi:
      return "Profiler";
    case Ho:
      return "StrictMode";
    case Hi:
      return "Suspense";
    case Ai:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ts:
        return (e.displayName || "Context") + ".Consumer";
      case Ps:
        return (e._context.displayName || "Context") + ".Provider";
      case Ao:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Uo:
        return (
          (t = e.displayName || null), t !== null ? t : Ui(e.type) || "Memo"
        );
      case at:
        (t = e._payload), (e = e._init);
        try {
          return Ui(e(t));
        } catch {}
    }
  return null;
}
function Pd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ui(t);
    case 8:
      return t === Ho ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Os(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Td(e) {
  var t = Os(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Tr(e) {
  e._valueTracker || (e._valueTracker = Td(e));
}
function zs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Os(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bi(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function js(e, t) {
  (t = t.checked), t != null && Fo(e, "checked", t, !1);
}
function Wi(e, t) {
  js(e, t);
  var n = xt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Vi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Vi(e, t.type, xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Vi(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function on(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Bu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xt(n) };
}
function Ls(e, t) {
  var n = xt(t.value),
    r = xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ms(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ms(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Nr,
  Rs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Nr = Nr || document.createElement("div"),
          Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Nr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Nd = ["Webkit", "ms", "Moz", "O"];
Object.keys($n).forEach(function (e) {
  Nd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($n[t] = $n[e]);
  });
});
function Is(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($n.hasOwnProperty(e) && $n[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ds(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Is(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Od = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ki(e, t) {
  if (t) {
    if (Od[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function Xi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Zi = null;
function Bo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Gi = null,
  un = null,
  an = null;
function Vu(e) {
  if ((e = dr(e))) {
    if (typeof Gi != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = Fl(t)), Gi(e.stateNode, e.type, t));
  }
}
function $s(e) {
  un ? (an ? an.push(e) : (an = [e])) : (un = e);
}
function Fs() {
  if (un) {
    var e = un,
      t = an;
    if (((an = un = null), Vu(e), t)) for (e = 0; e < t.length; e++) Vu(t[e]);
  }
}
function Hs(e, t) {
  return e(t);
}
function As() {}
var si = !1;
function Us(e, t, n) {
  if (si) return e(t, n);
  si = !0;
  try {
    return Hs(e, t, n);
  } finally {
    (si = !1), (un !== null || an !== null) && (As(), Fs());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var Ji = !1;
if (be)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        Ji = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    Ji = !1;
  }
function zd(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (m) {
    this.onError(m);
  }
}
var Fn = !1,
  ul = null,
  al = !1,
  qi = null,
  jd = {
    onError: function (e) {
      (Fn = !0), (ul = e);
    },
  };
function Ld(e, t, n, r, l, i, o, u, a) {
  (Fn = !1), (ul = null), zd.apply(jd, arguments);
}
function Md(e, t, n, r, l, i, o, u, a) {
  if ((Ld.apply(this, arguments), Fn)) {
    if (Fn) {
      var s = ul;
      (Fn = !1), (ul = null);
    } else throw Error(y(198));
    al || ((al = !0), (qi = s));
  }
}
function Qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Bs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qu(e) {
  if (Qt(e) !== e) throw Error(y(188));
}
function Rd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Qu(l), e;
        if (i === r) return Qu(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ws(e) {
  return (e = Rd(e)), e !== null ? Vs(e) : null;
}
function Vs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qs = xe.unstable_scheduleCallback,
  Yu = xe.unstable_cancelCallback,
  Id = xe.unstable_shouldYield,
  Dd = xe.unstable_requestPaint,
  Z = xe.unstable_now,
  $d = xe.unstable_getCurrentPriorityLevel,
  Wo = xe.unstable_ImmediatePriority,
  Ys = xe.unstable_UserBlockingPriority,
  sl = xe.unstable_NormalPriority,
  Fd = xe.unstable_LowPriority,
  Ks = xe.unstable_IdlePriority,
  Rl = null,
  Ve = null;
function Hd(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(Rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $e = Math.clz32 ? Math.clz32 : Bd,
  Ad = Math.log,
  Ud = Math.LN2;
function Bd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ad(e) / Ud) | 0)) | 0;
}
var Or = 64,
  zr = 4194304;
function In(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function cl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = In(u)) : ((i &= o), i !== 0 && (r = In(i)));
  } else (o = n & ~l), o !== 0 ? (r = In(o)) : i !== 0 && (r = In(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $e(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Wd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Vd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - $e(i),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = Wd(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function bi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xs() {
  var e = Or;
  return (Or <<= 1), !(Or & 4194240) && (Or = 64), e;
}
function ci(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $e(t)),
    (e[t] = n);
}
function Qd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - $e(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Vo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function Zs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gs,
  Qo,
  Js,
  qs,
  bs,
  eo = !1,
  jr = [],
  ht = null,
  vt = null,
  gt = null,
  Zn = new Map(),
  Gn = new Map(),
  ct = [],
  Yd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ku(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      vt = null;
      break;
    case "mouseover":
    case "mouseout":
      gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = dr(t)), t !== null && Qo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Kd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ht = Pn(ht, e, t, n, r, l)), !0;
    case "dragenter":
      return (vt = Pn(vt, e, t, n, r, l)), !0;
    case "mouseover":
      return (gt = Pn(gt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Zn.set(i, Pn(Zn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Gn.set(i, Pn(Gn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ec(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Bs(n)), t !== null)) {
          (e.blockedOn = t),
            bs(e.priority, function () {
              Js(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = to(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Zi = r), n.target.dispatchEvent(r), (Zi = null);
    } else return (t = dr(n)), t !== null && Qo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xu(e, t, n) {
  Zr(e) && n.delete(t);
}
function Xd() {
  (eo = !1),
    ht !== null && Zr(ht) && (ht = null),
    vt !== null && Zr(vt) && (vt = null),
    gt !== null && Zr(gt) && (gt = null),
    Zn.forEach(Xu),
    Gn.forEach(Xu);
}
function Tn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    eo ||
      ((eo = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Xd)));
}
function Jn(e) {
  function t(l) {
    return Tn(l, e);
  }
  if (0 < jr.length) {
    Tn(jr[0], e);
    for (var n = 1; n < jr.length; n++) {
      var r = jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ht !== null && Tn(ht, e),
      vt !== null && Tn(vt, e),
      gt !== null && Tn(gt, e),
      Zn.forEach(t),
      Gn.forEach(t),
      n = 0;
    n < ct.length;
    n++
  )
    (r = ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
    ec(n), n.blockedOn === null && ct.shift();
}
var sn = rt.ReactCurrentBatchConfig,
  fl = !0;
function Zd(e, t, n, r) {
  var l = R,
    i = sn.transition;
  sn.transition = null;
  try {
    (R = 1), Yo(e, t, n, r);
  } finally {
    (R = l), (sn.transition = i);
  }
}
function Gd(e, t, n, r) {
  var l = R,
    i = sn.transition;
  sn.transition = null;
  try {
    (R = 4), Yo(e, t, n, r);
  } finally {
    (R = l), (sn.transition = i);
  }
}
function Yo(e, t, n, r) {
  if (fl) {
    var l = to(e, t, n, r);
    if (l === null) Si(e, t, r, dl, n), Ku(e, r);
    else if (Kd(l, e, t, n, r)) r.stopPropagation();
    else if ((Ku(e, r), t & 4 && -1 < Yd.indexOf(e))) {
      for (; l !== null; ) {
        var i = dr(l);
        if (
          (i !== null && Gs(i),
          (i = to(e, t, n, r)),
          i === null && Si(e, t, r, dl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Si(e, t, r, null, n);
  }
}
var dl = null;
function to(e, t, n, r) {
  if (((dl = null), (e = Bo(r)), (e = Rt(e)), e !== null))
    if (((t = Qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Bs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (dl = e), null;
}
function tc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($d()) {
        case Wo:
          return 1;
        case Ys:
          return 4;
        case sl:
        case Fd:
          return 16;
        case Ks:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null,
  Ko = null,
  Gr = null;
function nc() {
  if (Gr) return Gr;
  var e,
    t = Ko,
    n = t.length,
    r,
    l = "value" in dt ? dt.value : dt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Gr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Jr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Lr() {
  return !0;
}
function Zu() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Lr
        : Zu),
      (this.isPropagationStopped = Zu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Lr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lr));
      },
      persist: function () {},
      isPersistent: Lr,
    }),
    t
  );
}
var Sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xo = Ce(Sn),
  fr = Q({}, Sn, { view: 0, detail: 0 }),
  Jd = Ce(fr),
  fi,
  di,
  Nn,
  Il = Q({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nn &&
            (Nn && e.type === "mousemove"
              ? ((fi = e.screenX - Nn.screenX), (di = e.screenY - Nn.screenY))
              : (di = fi = 0),
            (Nn = e)),
          fi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : di;
    },
  }),
  Gu = Ce(Il),
  qd = Q({}, Il, { dataTransfer: 0 }),
  bd = Ce(qd),
  ep = Q({}, fr, { relatedTarget: 0 }),
  pi = Ce(ep),
  tp = Q({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  np = Ce(tp),
  rp = Q({}, Sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lp = Ce(rp),
  ip = Q({}, Sn, { data: 0 }),
  Ju = Ce(ip),
  op = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  up = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ap = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ap[e]) ? !!t[e] : !1;
}
function Zo() {
  return sp;
}
var cp = Q({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = op[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? up[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zo,
    charCode: function (e) {
      return e.type === "keypress" ? Jr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Jr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  fp = Ce(cp),
  dp = Q({}, Il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qu = Ce(dp),
  pp = Q({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zo,
  }),
  mp = Ce(pp),
  hp = Q({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vp = Ce(hp),
  gp = Q({}, Il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yp = Ce(gp),
  wp = [9, 13, 27, 32],
  Go = be && "CompositionEvent" in window,
  Hn = null;
be && "documentMode" in document && (Hn = document.documentMode);
var Sp = be && "TextEvent" in window && !Hn,
  rc = be && (!Go || (Hn && 8 < Hn && 11 >= Hn)),
  bu = " ",
  ea = !1;
function lc(e, t) {
  switch (e) {
    case "keyup":
      return wp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ic(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zt = !1;
function kp(e, t) {
  switch (e) {
    case "compositionend":
      return ic(t);
    case "keypress":
      return t.which !== 32 ? null : ((ea = !0), bu);
    case "textInput":
      return (e = t.data), e === bu && ea ? null : e;
    default:
      return null;
  }
}
function _p(e, t) {
  if (Zt)
    return e === "compositionend" || (!Go && lc(e, t))
      ? ((e = nc()), (Gr = Ko = dt = null), (Zt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return rc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xp[e.type] : t === "textarea";
}
function oc(e, t, n, r) {
  $s(r),
    (t = pl(t, "onChange")),
    0 < t.length &&
      ((n = new Xo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var An = null,
  qn = null;
function Ep(e) {
  gc(e, 0);
}
function Dl(e) {
  var t = qt(e);
  if (zs(t)) return e;
}
function Cp(e, t) {
  if (e === "change") return t;
}
var uc = !1;
if (be) {
  var mi;
  if (be) {
    var hi = "oninput" in document;
    if (!hi) {
      var na = document.createElement("div");
      na.setAttribute("oninput", "return;"),
        (hi = typeof na.oninput == "function");
    }
    mi = hi;
  } else mi = !1;
  uc = mi && (!document.documentMode || 9 < document.documentMode);
}
function ra() {
  An && (An.detachEvent("onpropertychange", ac), (qn = An = null));
}
function ac(e) {
  if (e.propertyName === "value" && Dl(qn)) {
    var t = [];
    oc(t, qn, e, Bo(e)), Us(Ep, t);
  }
}
function Pp(e, t, n) {
  e === "focusin"
    ? (ra(), (An = t), (qn = n), An.attachEvent("onpropertychange", ac))
    : e === "focusout" && ra();
}
function Tp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Dl(qn);
}
function Np(e, t) {
  if (e === "click") return Dl(t);
}
function Op(e, t) {
  if (e === "input" || e === "change") return Dl(t);
}
function zp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : zp;
function bn(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!$i.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function la(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ia(e, t) {
  var n = la(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = la(n);
  }
}
function sc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? sc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function cc() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function Jo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function jp(e) {
  var t = cc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    sc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Jo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ia(n, i));
        var o = ia(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Lp = be && "documentMode" in document && 11 >= document.documentMode,
  Gt = null,
  no = null,
  Un = null,
  ro = !1;
function oa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ro ||
    Gt == null ||
    Gt !== ol(r) ||
    ((r = Gt),
    "selectionStart" in r && Jo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && bn(Un, r)) ||
      ((Un = r),
      (r = pl(no, "onSelect")),
      0 < r.length &&
        ((t = new Xo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gt))));
}
function Mr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jt = {
    animationend: Mr("Animation", "AnimationEnd"),
    animationiteration: Mr("Animation", "AnimationIteration"),
    animationstart: Mr("Animation", "AnimationStart"),
    transitionend: Mr("Transition", "TransitionEnd"),
  },
  vi = {},
  fc = {};
be &&
  ((fc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jt.animationend.animation,
    delete Jt.animationiteration.animation,
    delete Jt.animationstart.animation),
  "TransitionEvent" in window || delete Jt.transitionend.transition);
function $l(e) {
  if (vi[e]) return vi[e];
  if (!Jt[e]) return e;
  var t = Jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fc) return (vi[e] = t[n]);
  return e;
}
var dc = $l("animationend"),
  pc = $l("animationiteration"),
  mc = $l("animationstart"),
  hc = $l("transitionend"),
  vc = new Map(),
  ua =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ct(e, t) {
  vc.set(e, t), Vt(t, [e]);
}
for (var gi = 0; gi < ua.length; gi++) {
  var yi = ua[gi],
    Mp = yi.toLowerCase(),
    Rp = yi[0].toUpperCase() + yi.slice(1);
  Ct(Mp, "on" + Rp);
}
Ct(dc, "onAnimationEnd");
Ct(pc, "onAnimationIteration");
Ct(mc, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(hc, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
Vt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Vt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Vt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Vt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Ip = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function aa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Md(r, t, void 0, e), (e.currentTarget = null);
}
function gc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          aa(l, u, s), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          aa(l, u, s), (i = a);
        }
    }
  }
  if (al) throw ((e = qi), (al = !1), (qi = null), e);
}
function $(e, t) {
  var n = t[ao];
  n === void 0 && (n = t[ao] = new Set());
  var r = e + "__bubble";
  n.has(r) || (yc(t, e, 2, !1), n.add(r));
}
function wi(e, t, n) {
  var r = 0;
  t && (r |= 4), yc(n, e, r, t);
}
var Rr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Rr]) {
    (e[Rr] = !0),
      Cs.forEach(function (n) {
        n !== "selectionchange" && (Ip.has(n) || wi(n, !1, e), wi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rr] || ((t[Rr] = !0), wi("selectionchange", !1, t));
  }
}
function yc(e, t, n, r) {
  switch (tc(t)) {
    case 1:
      var l = Zd;
      break;
    case 4:
      l = Gd;
      break;
    default:
      l = Yo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ji ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Si(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Rt(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Us(function () {
    var s = i,
      m = Bo(n),
      p = [];
    e: {
      var h = vc.get(e);
      if (h !== void 0) {
        var w = Xo,
          S = e;
        switch (e) {
          case "keypress":
            if (Jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = fp;
            break;
          case "focusin":
            (S = "focus"), (w = pi);
            break;
          case "focusout":
            (S = "blur"), (w = pi);
            break;
          case "beforeblur":
          case "afterblur":
            w = pi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = bd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = mp;
            break;
          case dc:
          case pc:
          case mc:
            w = np;
            break;
          case hc:
            w = vp;
            break;
          case "scroll":
            w = Jd;
            break;
          case "wheel":
            w = yp;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = lp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = qu;
        }
        var _ = (t & 4) !== 0,
          L = !_ && e === "scroll",
          f = _ ? (h !== null ? h + "Capture" : null) : h;
        _ = [];
        for (var c = s, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = Xn(c, f)), g != null && _.push(tr(c, g, d)))),
            L)
          )
            break;
          c = c.return;
        }
        0 < _.length &&
          ((h = new w(h, S, null, n, m)), p.push({ event: h, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Zi &&
            (S = n.relatedTarget || n.fromElement) &&
            (Rt(S) || S[et]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            m.window === m
              ? m
              : (h = m.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          w
            ? ((S = n.relatedTarget || n.toElement),
              (w = s),
              (S = S ? Rt(S) : null),
              S !== null &&
                ((L = Qt(S)), S !== L || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = s)),
          w !== S)
        ) {
          if (
            ((_ = Gu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = qu),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (L = w == null ? h : qt(w)),
            (d = S == null ? h : qt(S)),
            (h = new _(g, c + "leave", w, n, m)),
            (h.target = L),
            (h.relatedTarget = d),
            (g = null),
            Rt(m) === s &&
              ((_ = new _(f, c + "enter", S, n, m)),
              (_.target = d),
              (_.relatedTarget = L),
              (g = _)),
            (L = g),
            w && S)
          )
            t: {
              for (_ = w, f = S, c = 0, d = _; d; d = Yt(d)) c++;
              for (d = 0, g = f; g; g = Yt(g)) d++;
              for (; 0 < c - d; ) (_ = Yt(_)), c--;
              for (; 0 < d - c; ) (f = Yt(f)), d--;
              for (; c--; ) {
                if (_ === f || (f !== null && _ === f.alternate)) break t;
                (_ = Yt(_)), (f = Yt(f));
              }
              _ = null;
            }
          else _ = null;
          w !== null && sa(p, h, w, _, !1),
            S !== null && L !== null && sa(p, L, S, _, !0);
        }
      }
      e: {
        if (
          ((h = s ? qt(s) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var x = Cp;
        else if (ta(h))
          if (uc) x = Op;
          else {
            x = Tp;
            var k = Pp;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (x = Np);
        if (x && (x = x(e, s))) {
          oc(p, x, n, m);
          break e;
        }
        k && k(e, h, s),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            Vi(h, "number", h.value);
      }
      switch (((k = s ? qt(s) : window), e)) {
        case "focusin":
          (ta(k) || k.contentEditable === "true") &&
            ((Gt = k), (no = s), (Un = null));
          break;
        case "focusout":
          Un = no = Gt = null;
          break;
        case "mousedown":
          ro = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ro = !1), oa(p, n, m);
          break;
        case "selectionchange":
          if (Lp) break;
        case "keydown":
        case "keyup":
          oa(p, n, m);
      }
      var E;
      if (Go)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Zt
          ? lc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (rc &&
          n.locale !== "ko" &&
          (Zt || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Zt && (E = nc())
            : ((dt = m),
              (Ko = "value" in dt ? dt.value : dt.textContent),
              (Zt = !0))),
        (k = pl(s, T)),
        0 < k.length &&
          ((T = new Ju(T, e, null, n, m)),
          p.push({ event: T, listeners: k }),
          E ? (T.data = E) : ((E = ic(n)), E !== null && (T.data = E)))),
        (E = Sp ? kp(e, n) : _p(e, n)) &&
          ((s = pl(s, "onBeforeInput")),
          0 < s.length &&
            ((m = new Ju("onBeforeInput", "beforeinput", null, n, m)),
            p.push({ event: m, listeners: s }),
            (m.data = E)));
    }
    gc(p, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Xn(e, n)),
      i != null && r.unshift(tr(e, i, l)),
      (i = Xn(e, t)),
      i != null && r.push(tr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Yt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sa(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Xn(n, i)), a != null && o.unshift(tr(n, a, u)))
        : l || ((a = Xn(n, i)), a != null && o.push(tr(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Dp = /\r\n?/g,
  $p = /\u0000|\uFFFD/g;
function ca(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dp,
      `
`,
    )
    .replace($p, "");
}
function Ir(e, t, n) {
  if (((t = ca(t)), ca(e) !== t && n)) throw Error(y(425));
}
function ml() {}
var lo = null,
  io = null;
function oo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var uo = typeof setTimeout == "function" ? setTimeout : void 0,
  Fp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fa = typeof Promise == "function" ? Promise : void 0,
  Hp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fa < "u"
        ? function (e) {
            return fa.resolve(null).then(e).catch(Ap);
          }
        : uo;
function Ap(e) {
  setTimeout(function () {
    throw e;
  });
}
function ki(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jn(t);
}
function yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function da(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + kn,
  nr = "__reactProps$" + kn,
  et = "__reactContainer$" + kn,
  ao = "__reactEvents$" + kn,
  Up = "__reactListeners$" + kn,
  Bp = "__reactHandles$" + kn;
function Rt(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = da(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = da(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function dr(e) {
  return (
    (e = e[We] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function Fl(e) {
  return e[nr] || null;
}
var so = [],
  bt = -1;
function Pt(e) {
  return { current: e };
}
function F(e) {
  0 > bt || ((e.current = so[bt]), (so[bt] = null), bt--);
}
function D(e, t) {
  bt++, (so[bt] = e.current), (e.current = t);
}
var Et = {},
  se = Pt(Et),
  ge = Pt(!1),
  Ht = Et;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function hl() {
  F(ge), F(se);
}
function pa(e, t, n) {
  if (se.current !== Et) throw Error(y(168));
  D(se, t), D(ge, n);
}
function wc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Pd(e) || "Unknown", l));
  return Q({}, n, r);
}
function vl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Et),
    (Ht = se.current),
    D(se, e),
    D(ge, ge.current),
    !0
  );
}
function ma(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = wc(e, t, Ht)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(ge),
      F(se),
      D(se, e))
    : F(ge),
    D(ge, n);
}
var Ze = null,
  Hl = !1,
  _i = !1;
function Sc(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
function Wp(e) {
  (Hl = !0), Sc(e);
}
function Tt() {
  if (!_i && Ze !== null) {
    _i = !0;
    var e = 0,
      t = R;
    try {
      var n = Ze;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ze = null), (Hl = !1);
    } catch (l) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), Qs(Wo, Tt), l);
    } finally {
      (R = t), (_i = !1);
    }
  }
  return null;
}
var en = [],
  tn = 0,
  gl = null,
  yl = 0,
  Pe = [],
  Te = 0,
  At = null,
  Ge = 1,
  Je = "";
function Lt(e, t) {
  (en[tn++] = yl), (en[tn++] = gl), (gl = e), (yl = t);
}
function kc(e, t, n) {
  (Pe[Te++] = Ge), (Pe[Te++] = Je), (Pe[Te++] = At), (At = e);
  var r = Ge;
  e = Je;
  var l = 32 - $e(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - $e(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ge = (1 << (32 - $e(t) + l)) | (n << l) | r),
      (Je = i + e);
  } else (Ge = (1 << i) | (n << l) | r), (Je = e);
}
function qo(e) {
  e.return !== null && (Lt(e, 1), kc(e, 1, 0));
}
function bo(e) {
  for (; e === gl; )
    (gl = en[--tn]), (en[tn] = null), (yl = en[--tn]), (en[tn] = null);
  for (; e === At; )
    (At = Pe[--Te]),
      (Pe[Te] = null),
      (Je = Pe[--Te]),
      (Pe[Te] = null),
      (Ge = Pe[--Te]),
      (Pe[Te] = null);
}
var _e = null,
  ke = null,
  A = !1,
  De = null;
function _c(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ha(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_e = e), (ke = yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = At !== null ? { id: Ge, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fo(e) {
  if (A) {
    var t = ke;
    if (t) {
      var n = t;
      if (!ha(e, t)) {
        if (co(e)) throw Error(y(418));
        t = yt(n.nextSibling);
        var r = _e;
        t && ha(e, t)
          ? _c(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (_e = e));
      }
    } else {
      if (co(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (_e = e);
    }
  }
}
function va(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function Dr(e) {
  if (e !== _e) return !1;
  if (!A) return va(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !oo(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (co(e)) throw (xc(), Error(y(418)));
    for (; t; ) _c(e, t), (t = yt(t.nextSibling));
  }
  if ((va(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = _e ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function xc() {
  for (var e = ke; e; ) e = yt(e.nextSibling);
}
function mn() {
  (ke = _e = null), (A = !1);
}
function eu(e) {
  De === null ? (De = [e]) : De.push(e);
}
var Vp = rt.ReactCurrentBatchConfig;
function On(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function $r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function ga(e) {
  var t = e._init;
  return t(e._payload);
}
function Ec(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = _t(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, g) {
    return c === null || c.tag !== 6
      ? ((c = Oi(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function a(f, c, d, g) {
    var x = d.type;
    return x === Xt
      ? m(f, c, d.props.children, g, d.key)
      : c !== null &&
          (c.elementType === x ||
            (typeof x == "object" &&
              x !== null &&
              x.$$typeof === at &&
              ga(x) === c.type))
        ? ((g = l(c, d.props)), (g.ref = On(f, c, d)), (g.return = f), g)
        : ((g = ll(d.type, d.key, d.props, null, f.mode, g)),
          (g.ref = On(f, c, d)),
          (g.return = f),
          g);
  }
  function s(f, c, d, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = zi(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function m(f, c, d, g, x) {
    return c === null || c.tag !== 7
      ? ((c = Ft(d, f.mode, g, x)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Oi("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Pr:
          return (
            (d = ll(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = On(f, null, c)),
            (d.return = f),
            d
          );
        case Kt:
          return (c = zi(c, f.mode, d)), (c.return = f), c;
        case at:
          var g = c._init;
          return p(f, g(c._payload), d);
      }
      if (Rn(c) || En(c))
        return (c = Ft(c, f.mode, d, null)), (c.return = f), c;
      $r(f, c);
    }
    return null;
  }
  function h(f, c, d, g) {
    var x = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return x !== null ? null : u(f, c, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Pr:
          return d.key === x ? a(f, c, d, g) : null;
        case Kt:
          return d.key === x ? s(f, c, d, g) : null;
        case at:
          return (x = d._init), h(f, c, x(d._payload), g);
      }
      if (Rn(d) || En(d)) return x !== null ? null : m(f, c, d, g, null);
      $r(f, d);
    }
    return null;
  }
  function w(f, c, d, g, x) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), u(c, f, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Pr:
          return (f = f.get(g.key === null ? d : g.key) || null), a(c, f, g, x);
        case Kt:
          return (f = f.get(g.key === null ? d : g.key) || null), s(c, f, g, x);
        case at:
          var k = g._init;
          return w(f, c, d, k(g._payload), x);
      }
      if (Rn(g) || En(g)) return (f = f.get(d) || null), m(c, f, g, x, null);
      $r(c, g);
    }
    return null;
  }
  function S(f, c, d, g) {
    for (
      var x = null, k = null, E = c, T = (c = 0), I = null;
      E !== null && T < d.length;
      T++
    ) {
      E.index > T ? ((I = E), (E = null)) : (I = E.sibling);
      var O = h(f, E, d[T], g);
      if (O === null) {
        E === null && (E = I);
        break;
      }
      e && E && O.alternate === null && t(f, E),
        (c = i(O, c, T)),
        k === null ? (x = O) : (k.sibling = O),
        (k = O),
        (E = I);
    }
    if (T === d.length) return n(f, E), A && Lt(f, T), x;
    if (E === null) {
      for (; T < d.length; T++)
        (E = p(f, d[T], g)),
          E !== null &&
            ((c = i(E, c, T)), k === null ? (x = E) : (k.sibling = E), (k = E));
      return A && Lt(f, T), x;
    }
    for (E = r(f, E); T < d.length; T++)
      (I = w(E, f, T, d[T], g)),
        I !== null &&
          (e && I.alternate !== null && E.delete(I.key === null ? T : I.key),
          (c = i(I, c, T)),
          k === null ? (x = I) : (k.sibling = I),
          (k = I));
    return (
      e &&
        E.forEach(function (me) {
          return t(f, me);
        }),
      A && Lt(f, T),
      x
    );
  }
  function _(f, c, d, g) {
    var x = En(d);
    if (typeof x != "function") throw Error(y(150));
    if (((d = x.call(d)), d == null)) throw Error(y(151));
    for (
      var k = (x = null), E = c, T = (c = 0), I = null, O = d.next();
      E !== null && !O.done;
      T++, O = d.next()
    ) {
      E.index > T ? ((I = E), (E = null)) : (I = E.sibling);
      var me = h(f, E, O.value, g);
      if (me === null) {
        E === null && (E = I);
        break;
      }
      e && E && me.alternate === null && t(f, E),
        (c = i(me, c, T)),
        k === null ? (x = me) : (k.sibling = me),
        (k = me),
        (E = I);
    }
    if (O.done) return n(f, E), A && Lt(f, T), x;
    if (E === null) {
      for (; !O.done; T++, O = d.next())
        (O = p(f, O.value, g)),
          O !== null &&
            ((c = i(O, c, T)), k === null ? (x = O) : (k.sibling = O), (k = O));
      return A && Lt(f, T), x;
    }
    for (E = r(f, E); !O.done; T++, O = d.next())
      (O = w(E, f, T, O.value, g)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? T : O.key),
          (c = i(O, c, T)),
          k === null ? (x = O) : (k.sibling = O),
          (k = O));
    return (
      e &&
        E.forEach(function (lt) {
          return t(f, lt);
        }),
      A && Lt(f, T),
      x
    );
  }
  function L(f, c, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Xt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Pr:
          e: {
            for (var x = d.key, k = c; k !== null; ) {
              if (k.key === x) {
                if (((x = d.type), x === Xt)) {
                  if (k.tag === 7) {
                    n(f, k.sibling),
                      (c = l(k, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  k.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === at &&
                    ga(x) === k.type)
                ) {
                  n(f, k.sibling),
                    (c = l(k, d.props)),
                    (c.ref = On(f, k, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            d.type === Xt
              ? ((c = Ft(d.props.children, f.mode, g, d.key)),
                (c.return = f),
                (f = c))
              : ((g = ll(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = On(f, c, d)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Kt:
          e: {
            for (k = d.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = zi(d, f.mode, g)), (c.return = f), (f = c);
          }
          return o(f);
        case at:
          return (k = d._init), L(f, c, k(d._payload), g);
      }
      if (Rn(d)) return S(f, c, d, g);
      if (En(d)) return _(f, c, d, g);
      $r(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = Oi(d, f.mode, g)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return L;
}
var hn = Ec(!0),
  Cc = Ec(!1),
  wl = Pt(null),
  Sl = null,
  nn = null,
  tu = null;
function nu() {
  tu = nn = Sl = null;
}
function ru(e) {
  var t = wl.current;
  F(wl), (e._currentValue = t);
}
function po(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function cn(e, t) {
  (Sl = e),
    (tu = nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (tu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nn === null)) {
      if (Sl === null) throw Error(y(308));
      (nn = e), (Sl.dependencies = { lanes: 0, firstContext: e });
    } else nn = nn.next = e;
  return t;
}
var It = null;
function lu(e) {
  It === null ? (It = [e]) : It.push(e);
}
function Pc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), lu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function iu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), lu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function qr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vo(e, n);
  }
}
function ya(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function kl(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), o === null ? (i = s) : (o.next = s), (o = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = s) : (u.next = s),
        (m.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (m = s = a = null), (u = i);
    do {
      var h = u.lane,
        w = u.eventTime;
      if ((r & h) === h) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            _ = u;
          switch (((h = t), (w = n), _.tag)) {
            case 1:
              if (((S = _.payload), typeof S == "function")) {
                p = S.call(w, p, h);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = _.payload),
                (h = typeof S == "function" ? S.call(w, p, h) : S),
                h == null)
              )
                break e;
              p = Q({}, p, h);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (w = {
          eventTime: w,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((s = m = w), (a = p)) : (m = m.next = w),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (a = p),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Bt |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function wa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var pr = {},
  Qe = Pt(pr),
  rr = Pt(pr),
  lr = Pt(pr);
function Dt(e) {
  if (e === pr) throw Error(y(174));
  return e;
}
function ou(e, t) {
  switch ((D(lr, t), D(rr, e), D(Qe, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yi(t, e));
  }
  F(Qe), D(Qe, t);
}
function vn() {
  F(Qe), F(rr), F(lr);
}
function Nc(e) {
  Dt(lr.current);
  var t = Dt(Qe.current),
    n = Yi(t, e.type);
  t !== n && (D(rr, e), D(Qe, n));
}
function uu(e) {
  rr.current === e && (F(Qe), F(rr));
}
var W = Pt(0);
function _l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xi = [];
function au() {
  for (var e = 0; e < xi.length; e++)
    xi[e]._workInProgressVersionPrimary = null;
  xi.length = 0;
}
var br = rt.ReactCurrentDispatcher,
  Ei = rt.ReactCurrentBatchConfig,
  Ut = 0,
  V = null,
  J = null,
  ee = null,
  xl = !1,
  Bn = !1,
  ir = 0,
  Qp = 0;
function ie() {
  throw Error(y(321));
}
function su(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function cu(e, t, n, r, l, i) {
  if (
    ((Ut = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (br.current = e === null || e.memoizedState === null ? Zp : Gp),
    (e = n(r, l)),
    Bn)
  ) {
    i = 0;
    do {
      if (((Bn = !1), (ir = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (ee = J = null),
        (t.updateQueue = null),
        (br.current = Jp),
        (e = n(r, l));
    } while (Bn);
  }
  if (
    ((br.current = El),
    (t = J !== null && J.next !== null),
    (Ut = 0),
    (ee = J = V = null),
    (xl = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function fu() {
  var e = ir !== 0;
  return (ir = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function je() {
  if (J === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? V.memoizedState : ee.next;
  if (t !== null) (ee = t), (J = e);
  else {
    if (e === null) throw Error(y(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ci(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      s = i;
    do {
      var m = s.lane;
      if ((Ut & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: m,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = p), (o = r)) : (a = a.next = p),
          (V.lanes |= m),
          (Bt |= m);
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? (o = r) : (a.next = u),
      He(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Bt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Pi(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    He(i, t.memoizedState) || (ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Oc() {}
function zc(e, t) {
  var n = V,
    r = je(),
    l = t(),
    i = !He(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    du(Mc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, Lc.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(y(349));
    Ut & 30 || jc(n, t, l);
  }
  return l;
}
function jc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rc(t) && Ic(e);
}
function Mc(e, t, n) {
  return n(function () {
    Rc(t) && Ic(e);
  });
}
function Rc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Ic(e) {
  var t = tt(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Sa(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xp.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Dc() {
  return je().memoizedState;
}
function el(e, t, n, r) {
  var l = Ue();
  (V.flags |= e),
    (l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Al(e, t, n, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (J !== null) {
    var o = J.memoizedState;
    if (((i = o.destroy), r !== null && su(r, o.deps))) {
      l.memoizedState = ur(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = ur(1 | t, n, i, r));
}
function ka(e, t) {
  return el(8390656, 8, e, t);
}
function du(e, t) {
  return Al(2048, 8, e, t);
}
function $c(e, t) {
  return Al(4, 2, e, t);
}
function Fc(e, t) {
  return Al(4, 4, e, t);
}
function Hc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ac(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Al(4, 4, Hc.bind(null, t, e), n)
  );
}
function pu() {}
function Uc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && su(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Bc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && su(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wc(e, t, n) {
  return Ut & 21
    ? (He(n, t) || ((n = Xs()), (V.lanes |= n), (Bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Yp(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ei.transition;
  Ei.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Ei.transition = r);
  }
}
function Vc() {
  return je().memoizedState;
}
function Kp(e, t, n) {
  var r = kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qc(e))
  )
    Yc(t, n);
  else if (((n = Pc(e, t, n, r)), n !== null)) {
    var l = fe();
    Fe(n, e, r, l), Kc(n, t, r);
  }
}
function Xp(e, t, n) {
  var r = kt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qc(e)) Yc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), He(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), lu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Pc(e, t, l, r)),
      n !== null && ((l = fe()), Fe(n, e, r, l), Kc(n, t, r));
  }
}
function Qc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Yc(e, t) {
  Bn = xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Kc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vo(e, n);
  }
}
var El = {
    readContext: ze,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  Zp = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: ka,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        el(4194308, 4, Hc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return el(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return el(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Kp.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Sa,
    useDebugValue: pu,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Sa(!1),
        t = e[0];
      return (e = Yp.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Ue();
      if (A) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(y(349));
        Ut & 30 || jc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ka(Mc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ur(9, Lc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = te.identifierPrefix;
      if (A) {
        var n = Je,
          r = Ge;
        (n = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gp = {
    readContext: ze,
    useCallback: Uc,
    useContext: ze,
    useEffect: du,
    useImperativeHandle: Ac,
    useInsertionEffect: $c,
    useLayoutEffect: Fc,
    useMemo: Bc,
    useReducer: Ci,
    useRef: Dc,
    useState: function () {
      return Ci(or);
    },
    useDebugValue: pu,
    useDeferredValue: function (e) {
      var t = je();
      return Wc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Ci(or)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Oc,
    useSyncExternalStore: zc,
    useId: Vc,
    unstable_isNewReconciler: !1,
  },
  Jp = {
    readContext: ze,
    useCallback: Uc,
    useContext: ze,
    useEffect: du,
    useImperativeHandle: Ac,
    useInsertionEffect: $c,
    useLayoutEffect: Fc,
    useMemo: Bc,
    useReducer: Pi,
    useRef: Dc,
    useState: function () {
      return Pi(or);
    },
    useDebugValue: pu,
    useDeferredValue: function (e) {
      var t = je();
      return J === null ? (t.memoizedState = e) : Wc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Pi(or)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Oc,
    useSyncExternalStore: zc,
    useId: Vc,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function mo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = kt(e),
      i = qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = wt(e, i, l)),
      t !== null && (Fe(t, e, l, r), qr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = kt(e),
      i = qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = wt(e, i, l)),
      t !== null && (Fe(t, e, l, r), qr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = kt(e),
      l = qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = wt(e, l, r)),
      t !== null && (Fe(t, e, r, n), qr(t, e, r));
  },
};
function _a(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !bn(n, r) || !bn(l, i)
        : !0
  );
}
function Xc(e, t, n) {
  var r = !1,
    l = Et,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ze(i))
      : ((l = ye(t) ? Ht : se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? pn(e, l) : Et)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function xa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
}
function ho(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), iu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = ze(i))
    : ((i = ye(t) ? Ht : se.current), (l.context = pn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (mo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ul.enqueueReplaceState(l, l.state, null),
      kl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Cd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ti(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qp = typeof WeakMap == "function" ? WeakMap : Map;
function Zc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pl || ((Pl = !0), (Po = r)), vo(e, t);
    }),
    n
  );
}
function Gc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        vo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        vo(e, t),
          typeof r != "function" &&
            (St === null ? (St = new Set([this])) : St.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ea(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = d1.bind(null, e, t, n)), t.then(e, e));
}
function Ca(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pa(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bp = rt.ReactCurrentOwner,
  ve = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Cc(t, null, n, r) : hn(t, e.child, n, r);
}
function Ta(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    cn(t, l),
    (r = cu(e, t, n, r, i, l)),
    (n = fu()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (A && n && qo(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function Na(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ku(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Jc(e, t, i, r, l))
      : ((e = ll(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(o, r) && e.ref === t.ref)
    )
      return nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = _t(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), nt(e, t, l);
  }
  return go(e, t, n, r, l);
}
function qc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(ln, Se),
        (Se |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(ln, Se),
          (Se |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(ln, Se),
        (Se |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(ln, Se),
      (Se |= r);
  return ce(e, t, l, n), t.child;
}
function bc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function go(e, t, n, r, l) {
  var i = ye(n) ? Ht : se.current;
  return (
    (i = pn(t, i)),
    cn(t, l),
    (n = cu(e, t, n, r, i, l)),
    (r = fu()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (A && r && qo(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function Oa(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    vl(t);
  } else i = !1;
  if ((cn(t, l), t.stateNode === null))
    tl(e, t), Xc(t, n, r), ho(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ze(s))
      : ((s = ye(n) ? Ht : se.current), (s = pn(t, s)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && xa(t, o, r, s)),
      (st = !1);
    var h = t.memoizedState;
    (o.state = h),
      kl(t, r, o, l),
      (a = t.memoizedState),
      u !== r || h !== a || ge.current || st
        ? (typeof m == "function" && (mo(t, n, m, r), (a = t.memoizedState)),
          (u = st || _a(t, n, u, r, h, a, s))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = s),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Tc(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : Re(t.type, u)),
      (o.props = s),
      (p = t.pendingProps),
      (h = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ze(a))
        : ((a = ye(n) ? Ht : se.current), (a = pn(t, a)));
    var w = n.getDerivedStateFromProps;
    (m =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== p || h !== a) && xa(t, o, r, a)),
      (st = !1),
      (h = t.memoizedState),
      (o.state = h),
      kl(t, r, o, l);
    var S = t.memoizedState;
    u !== p || h !== S || ge.current || st
      ? (typeof w == "function" && (mo(t, n, w, r), (S = t.memoizedState)),
        (s = st || _a(t, n, s, r, h, S, a) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = a),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return yo(e, t, n, r, i, l);
}
function yo(e, t, n, r, l, i) {
  bc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ma(t, n, !1), nt(e, t, i);
  (r = t.stateNode), (bp.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = hn(t, e.child, null, i)), (t.child = hn(t, null, u, i)))
      : ce(e, t, u, i),
    (t.memoizedState = r.state),
    l && ma(t, n, !0),
    t.child
  );
}
function ef(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pa(e, t.context, !1),
    ou(e, t.containerInfo);
}
function za(e, t, n, r, l) {
  return mn(), eu(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var wo = { dehydrated: null, treeContext: null, retryLane: 0 };
function So(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tf(e, t, n) {
  var r = t.pendingProps,
    l = W.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(W, l & 1),
    e === null)
  )
    return (
      fo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Vl(o, r, 0, null)),
              (e = Ft(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = So(n)),
              (t.memoizedState = wo),
              e)
            : mu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return e1(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = _t(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = _t(u, i)) : ((i = Ft(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? So(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = wo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = _t(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function mu(e, t) {
  return (
    (t = Vl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Fr(e, t, n, r) {
  return (
    r !== null && eu(r),
    hn(t, e.child, null, n),
    (e = mu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function e1(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ti(Error(y(422)))), Fr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Vl({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Ft(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && hn(t, e.child, null, o),
          (t.child.memoizedState = So(o)),
          (t.memoizedState = wo),
          i);
  if (!(t.mode & 1)) return Fr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Ti(i, r, void 0)), Fr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ve || u)) {
    if (((r = te), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), tt(e, l), Fe(r, e, l, -1));
    }
    return Su(), (r = Ti(Error(y(421)))), Fr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = p1.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ke = yt(l.nextSibling)),
      (_e = t),
      (A = !0),
      (De = null),
      e !== null &&
        ((Pe[Te++] = Ge),
        (Pe[Te++] = Je),
        (Pe[Te++] = At),
        (Ge = e.id),
        (Je = e.overflow),
        (At = t)),
      (t = mu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ja(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), po(e.return, t, n);
}
function Ni(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function nf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ja(e, n, t);
        else if (e.tag === 19) ja(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && _l(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ni(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && _l(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ni(t, !0, n, null, i);
        break;
      case "together":
        Ni(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function tl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function t1(e, t, n) {
  switch (t.tag) {
    case 3:
      ef(t), mn();
      break;
    case 5:
      Nc(t);
      break;
    case 1:
      ye(t.type) && vl(t);
      break;
    case 4:
      ou(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(wl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? tf(e, t, n)
            : (D(W, W.current & 1),
              (e = nt(e, t, n)),
              e !== null ? e.sibling : null);
      D(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qc(e, t, n);
  }
  return nt(e, t, n);
}
var rf, ko, lf, of;
rf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ko = function () {};
lf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Dt(Qe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Bi(e, l)), (r = Bi(e, r)), (i = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Qi(e, l)), (r = Qi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ml);
    }
    Ki(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Yn.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(s, a))
            : s === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(s, "" + a)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (Yn.hasOwnProperty(s)
                  ? (a != null && s === "onScroll" && $("scroll", e),
                    i || u === a || (i = []))
                  : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
of = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function n1(e, t, n) {
  var r = t.pendingProps;
  switch ((bo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return ye(t.type) && hl(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vn(),
        F(ge),
        F(se),
        au(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Dr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Oo(De), (De = null)))),
        ko(e, t),
        oe(t),
        null
      );
    case 5:
      uu(t);
      var l = Dt(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return oe(t), null;
        }
        if (((e = Dt(Qe.current)), Dr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[We] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dn.length; l++) $(Dn[l], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Au(r, i), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              Bu(r, i), $("invalid", r);
          }
          Ki(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ir(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ir(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Yn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              Tr(r), Uu(r, i, !0);
              break;
            case "textarea":
              Tr(r), Wu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ml);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ms(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[We] = t),
            (e[nr] = r),
            rf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Xi(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) $(Dn[l], e);
                l = r;
                break;
              case "source":
                $("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (l = r);
                break;
              case "details":
                $("toggle", e), (l = r);
                break;
              case "input":
                Au(e, r), (l = Bi(e, r)), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                Bu(e, r), (l = Qi(e, r)), $("invalid", e);
                break;
              default:
                l = r;
            }
            Ki(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? Ds(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Rs(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Kn(e, a)
                        : typeof a == "number" && Kn(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Yn.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && $("scroll", e)
                          : a != null && Fo(e, i, a, o));
              }
            switch (n) {
              case "input":
                Tr(e), Uu(e, r, !1);
                break;
              case "textarea":
                Tr(e), Wu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? on(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      on(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ml);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) of(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Dt(lr.current)), Dt(Qe.current), Dr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (i = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ir(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ir(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (F(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && ke !== null && t.mode & 1 && !(t.flags & 128))
          xc(), mn(), (t.flags |= 98560), (i = !1);
        else if (((i = Dr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[We] = t;
          } else
            mn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (i = !1);
        } else De !== null && (Oo(De), (De = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? q === 0 && (q = 3) : Su())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        vn(), ko(e, t), e === null && er(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return ru(t.type._context), oe(t), null;
    case 17:
      return ye(t.type) && hl(), oe(t), null;
    case 19:
      if ((F(W), (i = t.memoizedState), i === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) zn(i, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = _l(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    zn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Z() > yn &&
            ((t.flags |= 128), (r = !0), zn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _l(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !A)
            )
              return oe(t), null;
          } else
            2 * Z() - i.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Z()),
          (t.sibling = null),
          (n = W.current),
          D(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Se & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function r1(e, t) {
  switch ((bo(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vn(),
        F(ge),
        F(se),
        au(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return uu(t), null;
    case 13:
      if ((F(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        mn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(W), null;
    case 4:
      return vn(), null;
    case 10:
      return ru(t.type._context), null;
    case 22:
    case 23:
      return wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hr = !1,
  ue = !1,
  l1 = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function _o(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var La = !1;
function i1(e, t) {
  if (((lo = fl), (e = cc()), Jo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            s = 0,
            m = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (w = p.firstChild) !== null;

            )
              (h = p), (p = w);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++s === l && (u = o),
                h === i && ++m === r && (a = o),
                (w = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = w;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (io = { focusedElem: e, selectionRange: n }, fl = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var _ = S.memoizedProps,
                    L = S.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : Re(t.type, _),
                      L,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          K(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (S = La), (La = !1), S;
}
function Wn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && _o(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Bl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function uf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), uf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[nr], delete t[ao], delete t[Up], delete t[Bp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function af(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ma(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || af(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ml));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Eo(e, t, n), e = e.sibling; e !== null; ) Eo(e, t, n), (e = e.sibling);
}
function Co(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Co(e, t, n), e = e.sibling; e !== null; ) Co(e, t, n), (e = e.sibling);
}
var ne = null,
  Ie = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) sf(e, t, n), (n = n.sibling);
}
function sf(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(Rl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || rn(n, t);
    case 6:
      var r = ne,
        l = Ie;
      (ne = null),
        it(e, t, n),
        (ne = r),
        (Ie = l),
        ne !== null &&
          (Ie
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Ie
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? ki(e.parentNode, n)
              : e.nodeType === 1 && ki(e, n),
            Jn(e))
          : ki(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = Ie),
        (ne = n.stateNode.containerInfo),
        (Ie = !0),
        it(e, t, n),
        (ne = r),
        (Ie = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && _o(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (rn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), it(e, t, n), (ue = r))
        : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function Ra(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new l1()),
      t.forEach(function (r) {
        var l = m1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (Ie = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(y(160));
        sf(i, o, l), (ne = null), (Ie = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        K(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cf(t, e), (t = t.sibling);
}
function cf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), Ae(e), r & 4)) {
        try {
          Wn(3, e, e.return), Bl(3, e);
        } catch (_) {
          K(e, e.return, _);
        }
        try {
          Wn(5, e, e.return);
        } catch (_) {
          K(e, e.return, _);
        }
      }
      break;
    case 1:
      Me(t, e), Ae(e), r & 512 && n !== null && rn(n, n.return);
      break;
    case 5:
      if (
        (Me(t, e),
        Ae(e),
        r & 512 && n !== null && rn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Kn(l, "");
        } catch (_) {
          K(e, e.return, _);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && js(l, i),
              Xi(u, o);
            var s = Xi(u, i);
            for (o = 0; o < a.length; o += 2) {
              var m = a[o],
                p = a[o + 1];
              m === "style"
                ? Ds(l, p)
                : m === "dangerouslySetInnerHTML"
                  ? Rs(l, p)
                  : m === "children"
                    ? Kn(l, p)
                    : Fo(l, m, p, s);
            }
            switch (u) {
              case "input":
                Wi(l, i);
                break;
              case "textarea":
                Ls(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? on(l, !!i.multiple, w, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? on(l, !!i.multiple, i.defaultValue, !0)
                      : on(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nr] = i;
          } catch (_) {
            K(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((Me(t, e), Ae(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (_) {
          K(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (Me(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (_) {
          K(e, e.return, _);
        }
      break;
    case 4:
      Me(t, e), Ae(e);
      break;
    case 13:
      Me(t, e),
        Ae(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (gu = Z())),
        r & 4 && Ra(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (s = ue) || m), Me(t, e), (ue = s)) : Me(t, e),
        Ae(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !m && e.mode & 1)
        )
          for (C = e, m = e.child; m !== null; ) {
            for (p = C = m; C !== null; ) {
              switch (((h = C), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wn(4, h, h.return);
                  break;
                case 1:
                  rn(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (_) {
                      K(r, n, _);
                    }
                  }
                  break;
                case 5:
                  rn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Da(p);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (C = w)) : Da(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (l = p.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = p.stateNode),
                      (a = p.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = Is("display", o)));
              } catch (_) {
                K(e, e.return, _);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (_) {
                K(e, e.return, _);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), Ae(e), r & 4 && Ra(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), Ae(e);
  }
}
function Ae(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (af(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kn(l, ""), (r.flags &= -33));
          var i = Ma(e);
          Co(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Ma(e);
          Eo(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (a) {
      K(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function o1(e, t, n) {
  (C = e), ff(e);
}
function ff(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Hr;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || ue;
        u = Hr;
        var s = ue;
        if (((Hr = o), (ue = a) && !s))
          for (C = l; C !== null; )
            (o = C),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? $a(l)
                : a !== null
                  ? ((a.return = o), (C = a))
                  : $a(l);
        for (; i !== null; ) (C = i), ff(i), (i = i.sibling);
        (C = l), (Hr = u), (ue = s);
      }
      Ia(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : Ia(e);
  }
}
function Ia(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && wa(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wa(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var m = s.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && Jn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        ue || (t.flags & 512 && xo(t));
      } catch (h) {
        K(t, t.return, h);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Da(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function $a(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bl(4, t);
          } catch (a) {
            K(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              K(t, l, a);
            }
          }
          var i = t.return;
          try {
            xo(t);
          } catch (a) {
            K(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            xo(t);
          } catch (a) {
            K(t, o, a);
          }
      }
    } catch (a) {
      K(t, t.return, a);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var u1 = Math.ceil,
  Cl = rt.ReactCurrentDispatcher,
  hu = rt.ReactCurrentOwner,
  Oe = rt.ReactCurrentBatchConfig,
  M = 0,
  te = null,
  G = null,
  re = 0,
  Se = 0,
  ln = Pt(0),
  q = 0,
  ar = null,
  Bt = 0,
  Wl = 0,
  vu = 0,
  Vn = null,
  he = null,
  gu = 0,
  yn = 1 / 0,
  Xe = null,
  Pl = !1,
  Po = null,
  St = null,
  Ar = !1,
  pt = null,
  Tl = 0,
  Qn = 0,
  To = null,
  nl = -1,
  rl = 0;
function fe() {
  return M & 6 ? Z() : nl !== -1 ? nl : (nl = Z());
}
function kt(e) {
  return e.mode & 1
    ? M & 2 && re !== 0
      ? re & -re
      : Vp.transition !== null
        ? (rl === 0 && (rl = Xs()), rl)
        : ((e = R),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tc(e.type))),
          e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (To = null), Error(y(185)));
  cr(e, n, r),
    (!(M & 2) || e !== te) &&
      (e === te && (!(M & 2) && (Wl |= n), q === 4 && ft(e, re)),
      we(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((yn = Z() + 500), Hl && Tt()));
}
function we(e, t) {
  var n = e.callbackNode;
  Vd(e, t);
  var r = cl(e, e === te ? re : 0);
  if (r === 0)
    n !== null && Yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yu(n), t === 1))
      e.tag === 0 ? Wp(Fa.bind(null, e)) : Sc(Fa.bind(null, e)),
        Hp(function () {
          !(M & 6) && Tt();
        }),
        (n = null);
    else {
      switch (Zs(r)) {
        case 1:
          n = Wo;
          break;
        case 4:
          n = Ys;
          break;
        case 16:
          n = sl;
          break;
        case 536870912:
          n = Ks;
          break;
        default:
          n = sl;
      }
      n = wf(n, df.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function df(e, t) {
  if (((nl = -1), (rl = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (fn() && e.callbackNode !== n) return null;
  var r = cl(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = mf();
    (te !== e || re !== t) && ((Xe = null), (yn = Z() + 500), $t(e, t));
    do
      try {
        c1();
        break;
      } catch (u) {
        pf(e, u);
      }
    while (!0);
    nu(),
      (Cl.current = i),
      (M = l),
      G !== null ? (t = 0) : ((te = null), (re = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = bi(e)), l !== 0 && ((r = l), (t = No(e, l)))), t === 1)
    )
      throw ((n = ar), $t(e, 0), ft(e, r), we(e, Z()), n);
    if (t === 6) ft(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !a1(l) &&
          ((t = Nl(e, r)),
          t === 2 && ((i = bi(e)), i !== 0 && ((r = i), (t = No(e, i)))),
          t === 1))
      )
        throw ((n = ar), $t(e, 0), ft(e, r), we(e, Z()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Mt(e, he, Xe);
          break;
        case 3:
          if (
            (ft(e, r), (r & 130023424) === r && ((t = gu + 500 - Z()), 10 < t))
          ) {
            if (cl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = uo(Mt.bind(null, e, he, Xe), t);
            break;
          }
          Mt(e, he, Xe);
          break;
        case 4:
          if ((ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - $e(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * u1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = uo(Mt.bind(null, e, he, Xe), r);
            break;
          }
          Mt(e, he, Xe);
          break;
        case 5:
          Mt(e, he, Xe);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return we(e, Z()), e.callbackNode === n ? df.bind(null, e) : null;
}
function No(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = Nl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && Oo(t)),
    e
  );
}
function Oo(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function a1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!He(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ft(e, t) {
  for (
    t &= ~vu,
      t &= ~Wl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $e(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fa(e) {
  if (M & 6) throw Error(y(327));
  fn();
  var t = cl(e, 0);
  if (!(t & 1)) return we(e, Z()), null;
  var n = Nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bi(e);
    r !== 0 && ((t = r), (n = No(e, r)));
  }
  if (n === 1) throw ((n = ar), $t(e, 0), ft(e, t), we(e, Z()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mt(e, he, Xe),
    we(e, Z()),
    null
  );
}
function yu(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((yn = Z() + 500), Hl && Tt());
  }
}
function Wt(e) {
  pt !== null && pt.tag === 0 && !(M & 6) && fn();
  var t = M;
  M |= 1;
  var n = Oe.transition,
    r = R;
  try {
    if (((Oe.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Oe.transition = n), (M = t), !(M & 6) && Tt();
  }
}
function wu() {
  (Se = ln.current), F(ln);
}
function $t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fp(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((bo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hl();
          break;
        case 3:
          vn(), F(ge), F(se), au();
          break;
        case 5:
          uu(r);
          break;
        case 4:
          vn();
          break;
        case 13:
          F(W);
          break;
        case 19:
          F(W);
          break;
        case 10:
          ru(r.type._context);
          break;
        case 22:
        case 23:
          wu();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (G = e = _t(e.current, null)),
    (re = Se = t),
    (q = 0),
    (ar = null),
    (vu = Wl = Bt = 0),
    (he = Vn = null),
    It !== null)
  ) {
    for (t = 0; t < It.length; t++)
      if (((n = It[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    It = null;
  }
  return e;
}
function pf(e, t) {
  do {
    var n = G;
    try {
      if ((nu(), (br.current = El), xl)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        xl = !1;
      }
      if (
        ((Ut = 0),
        (ee = J = V = null),
        (Bn = !1),
        (ir = 0),
        (hu.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (ar = t), (G = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            m = u,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = m.alternate;
            h
              ? ((m.updateQueue = h.updateQueue),
                (m.memoizedState = h.memoizedState),
                (m.lanes = h.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = Ca(o);
          if (w !== null) {
            (w.flags &= -257),
              Pa(w, o, u, i, t),
              w.mode & 1 && Ea(i, s, t),
              (t = w),
              (a = s);
            var S = t.updateQueue;
            if (S === null) {
              var _ = new Set();
              _.add(a), (t.updateQueue = _);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ea(i, s, t), Su();
              break e;
            }
            a = Error(y(426));
          }
        } else if (A && u.mode & 1) {
          var L = Ca(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Pa(L, o, u, i, t),
              eu(gn(a, u));
            break e;
          }
        }
        (i = a = gn(a, u)),
          q !== 4 && (q = 2),
          Vn === null ? (Vn = [i]) : Vn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Zc(i, a, t);
              ya(i, f);
              break e;
            case 1:
              u = a;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (St === null || !St.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Gc(i, u, t);
                ya(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      vf(n);
    } catch (x) {
      (t = x), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mf() {
  var e = Cl.current;
  return (Cl.current = El), e === null ? El : e;
}
function Su() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || (!(Bt & 268435455) && !(Wl & 268435455)) || ft(te, re);
}
function Nl(e, t) {
  var n = M;
  M |= 2;
  var r = mf();
  (te !== e || re !== t) && ((Xe = null), $t(e, t));
  do
    try {
      s1();
      break;
    } catch (l) {
      pf(e, l);
    }
  while (!0);
  if ((nu(), (M = n), (Cl.current = r), G !== null)) throw Error(y(261));
  return (te = null), (re = 0), q;
}
function s1() {
  for (; G !== null; ) hf(G);
}
function c1() {
  for (; G !== null && !Id(); ) hf(G);
}
function hf(e) {
  var t = yf(e.alternate, e, Se);
  (e.memoizedProps = e.pendingProps),
    t === null ? vf(e) : (G = t),
    (hu.current = null);
}
function vf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = r1(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (G = null);
        return;
      }
    } else if (((n = n1(n, t, Se)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Mt(e, t, n) {
  var r = R,
    l = Oe.transition;
  try {
    (Oe.transition = null), (R = 1), f1(e, t, n, r);
  } finally {
    (Oe.transition = l), (R = r);
  }
  return null;
}
function f1(e, t, n, r) {
  do fn();
  while (pt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Qd(e, i),
    e === te && ((G = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ar ||
      ((Ar = !0),
      wf(sl, function () {
        return fn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Oe.transition), (Oe.transition = null);
    var o = R;
    R = 1;
    var u = M;
    (M |= 4),
      (hu.current = null),
      i1(e, n),
      cf(n, e),
      jp(io),
      (fl = !!lo),
      (io = lo = null),
      (e.current = n),
      o1(n),
      Dd(),
      (M = u),
      (R = o),
      (Oe.transition = i);
  } else e.current = n;
  if (
    (Ar && ((Ar = !1), (pt = e), (Tl = l)),
    (i = e.pendingLanes),
    i === 0 && (St = null),
    Hd(n.stateNode),
    we(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Pl) throw ((Pl = !1), (e = Po), (Po = null), e);
  return (
    Tl & 1 && e.tag !== 0 && fn(),
    (i = e.pendingLanes),
    i & 1 ? (e === To ? Qn++ : ((Qn = 0), (To = e))) : (Qn = 0),
    Tt(),
    null
  );
}
function fn() {
  if (pt !== null) {
    var e = Zs(Tl),
      t = Oe.transition,
      n = R;
    try {
      if (((Oe.transition = null), (R = 16 > e ? 16 : e), pt === null))
        var r = !1;
      else {
        if (((e = pt), (pt = null), (Tl = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (C = s; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (C = p);
                  else
                    for (; C !== null; ) {
                      m = C;
                      var h = m.sibling,
                        w = m.return;
                      if ((uf(m), m === s)) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = w), (C = h);
                        break;
                      }
                      C = w;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var _ = S.child;
                if (_ !== null) {
                  S.child = null;
                  do {
                    var L = _.sibling;
                    (_.sibling = null), (_ = L);
                  } while (_ !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (C = f);
                break e;
              }
              C = i.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (C = d);
          else
            e: for (o = c; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bl(9, u);
                  }
                } catch (x) {
                  K(u, u.return, x);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (C = g);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((M = l), Tt(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(Rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Oe.transition = t);
    }
  }
  return !1;
}
function Ha(e, t, n) {
  (t = gn(n, t)),
    (t = Zc(e, t, 1)),
    (e = wt(e, t, 1)),
    (t = fe()),
    e !== null && (cr(e, 1, t), we(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) Ha(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ha(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (St === null || !St.has(r)))
        ) {
          (e = gn(n, e)),
            (e = Gc(t, e, 1)),
            (t = wt(t, e, 1)),
            (e = fe()),
            t !== null && (cr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function d1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (q === 4 || (q === 3 && (re & 130023424) === re && 500 > Z() - gu)
        ? $t(e, 0)
        : (vu |= n)),
    we(e, t);
}
function gf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = zr), (zr <<= 1), !(zr & 130023424) && (zr = 4194304))
      : (t = 1));
  var n = fe();
  (e = tt(e, t)), e !== null && (cr(e, t, n), we(e, n));
}
function p1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gf(e, n);
}
function m1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), gf(e, n);
}
var yf;
yf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), t1(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), A && t.flags & 1048576 && kc(t, yl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      tl(e, t), (e = t.pendingProps);
      var l = pn(t, se.current);
      cn(t, n), (l = cu(null, t, r, e, l, n));
      var i = fu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), vl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            iu(t),
            (l.updater = Ul),
            (t.stateNode = l),
            (l._reactInternals = t),
            ho(t, r, e, n),
            (t = yo(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && qo(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (tl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = v1(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = go(null, t, r, e, n);
            break e;
          case 1:
            t = Oa(null, t, r, e, n);
            break e;
          case 11:
            t = Ta(null, t, r, e, n);
            break e;
          case 14:
            t = Na(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        go(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Oa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ef(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Tc(e, t),
          kl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = gn(Error(y(423)), t)), (t = za(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gn(Error(y(424)), t)), (t = za(e, t, r, n, l));
            break e;
          } else
            for (
              ke = yt(t.stateNode.containerInfo.firstChild),
                _e = t,
                A = !0,
                De = null,
                n = Cc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mn(), r === l)) {
            t = nt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Nc(t),
        e === null && fo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        oo(r, l) ? (o = null) : i !== null && oo(r, i) && (t.flags |= 32),
        bc(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && fo(t), null;
    case 13:
      return tf(e, t, n);
    case 4:
      return (
        ou(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Ta(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(wl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (He(i.value, o)) {
            if (i.children === l.children && !ge.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = qe(-1, n & -n)), (a.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var m = s.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (s.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      po(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  po(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        cn(t, n),
        (l = ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        Na(e, t, r, l, n)
      );
    case 15:
      return Jc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        tl(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), vl(t)) : (e = !1),
        cn(t, n),
        Xc(t, r, l),
        ho(t, r, l, n),
        yo(null, t, r, !0, e, n)
      );
    case 19:
      return nf(e, t, n);
    case 22:
      return qc(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function wf(e, t) {
  return Qs(e, t);
}
function h1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ne(e, t, n, r) {
  return new h1(e, t, n, r);
}
function ku(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function v1(e) {
  if (typeof e == "function") return ku(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ao)) return 11;
    if (e === Uo) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ll(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ku(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Xt:
        return Ft(n.children, l, i, t);
      case Ho:
        (o = 8), (l |= 8);
        break;
      case Fi:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = Fi), (e.lanes = i), e
        );
      case Hi:
        return (e = Ne(13, n, t, l)), (e.elementType = Hi), (e.lanes = i), e;
      case Ai:
        return (e = Ne(19, n, t, l)), (e.elementType = Ai), (e.lanes = i), e;
      case Ns:
        return Vl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ps:
              o = 10;
              break e;
            case Ts:
              o = 9;
              break e;
            case Ao:
              o = 11;
              break e;
            case Uo:
              o = 14;
              break e;
            case at:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ft(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function Vl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = Ns),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Oi(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function zi(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function g1(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ci(0)),
    (this.expirationTimes = ci(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ci(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function _u(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new g1(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ne(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    iu(i),
    e
  );
}
function y1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sf(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return wc(e, n, t);
  }
  return t;
}
function kf(e, t, n, r, l, i, o, u, a) {
  return (
    (e = _u(n, r, !0, e, l, i, o, u, a)),
    (e.context = Sf(null)),
    (n = e.current),
    (r = fe()),
    (l = kt(n)),
    (i = qe(r, l)),
    (i.callback = t ?? null),
    wt(n, i, l),
    (e.current.lanes = l),
    cr(e, l, r),
    we(e, r),
    e
  );
}
function Ql(e, t, n, r) {
  var l = t.current,
    i = fe(),
    o = kt(l);
  return (
    (n = Sf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wt(l, t, o)),
    e !== null && (Fe(e, l, o, i), qr(e, l, o)),
    o
  );
}
function Ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Aa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xu(e, t) {
  Aa(e, t), (e = e.alternate) && Aa(e, t);
}
function w1() {
  return null;
}
var _f =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Eu(e) {
  this._internalRoot = e;
}
Yl.prototype.render = Eu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  Ql(e, t, null, null);
};
Yl.prototype.unmount = Eu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wt(function () {
      Ql(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Yl(e) {
  this._internalRoot = e;
}
Yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
    ct.splice(n, 0, e), n === 0 && ec(e);
  }
};
function Cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ua() {}
function S1(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Ol(o);
        i.call(s);
      };
    }
    var o = kf(t, r, e, 0, null, !1, !1, "", Ua);
    return (
      (e._reactRootContainer = o),
      (e[et] = o.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Wt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = Ol(a);
      u.call(s);
    };
  }
  var a = _u(e, 0, !1, null, null, !1, !1, "", Ua);
  return (
    (e._reactRootContainer = a),
    (e[et] = a.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Wt(function () {
      Ql(t, a, n, r);
    }),
    a
  );
}
function Xl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = Ol(o);
        u.call(a);
      };
    }
    Ql(t, o, e, l);
  } else o = S1(n, t, e, l, r);
  return Ol(o);
}
Gs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 &&
          (Vo(t, n | 1), we(t, Z()), !(M & 6) && ((yn = Z() + 500), Tt()));
      }
      break;
    case 13:
      Wt(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var l = fe();
          Fe(r, e, 1, l);
        }
      }),
        xu(e, 1);
  }
};
Qo = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = fe();
      Fe(t, e, 134217728, n);
    }
    xu(e, 134217728);
  }
};
Js = function (e) {
  if (e.tag === 13) {
    var t = kt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = fe();
      Fe(n, e, t, r);
    }
    xu(e, t);
  }
};
qs = function () {
  return R;
};
bs = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
Gi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Fl(r);
            if (!l) throw Error(y(90));
            zs(r), Wi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ls(e, n);
      break;
    case "select":
      (t = n.value), t != null && on(e, !!n.multiple, t, !1);
  }
};
Hs = yu;
As = Wt;
var k1 = { usingClientEntryPoint: !1, Events: [dr, qt, Fl, $s, Fs, yu] },
  jn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _1 = {
    bundleType: jn.bundleType,
    version: jn.version,
    rendererPackageName: jn.rendererPackageName,
    rendererConfig: jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ws(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: jn.findFiberByHostInstance || w1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ur.isDisabled && Ur.supportsFiber)
    try {
      (Rl = Ur.inject(_1)), (Ve = Ur);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k1;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cu(t)) throw Error(y(200));
  return y1(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!Cu(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = _f;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = _u(e, 1, !1, null, null, n, !1, r, l)),
    (e[et] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new Eu(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ws(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return Wt(e);
};
Ee.hydrate = function (e, t, n) {
  if (!Kl(t)) throw Error(y(200));
  return Xl(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!Cu(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = _f;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = kf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[et] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Yl(t);
};
Ee.render = function (e, t, n) {
  if (!Kl(t)) throw Error(y(200));
  return Xl(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!Kl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Wt(function () {
        Xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = yu;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Kl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Xl(e, t, n, !1, r);
};
Ee.version = "18.3.1-next-f1338f8080-20240426";
function xf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf);
    } catch (e) {
      console.error(e);
    }
}
xf(), (_s.exports = Ee);
var Ef = _s.exports,
  Ba = Ef;
(Di.createRoot = Ba.createRoot), (Di.hydrateRoot = Ba.hydrateRoot);
var Cf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Wa = mt.createContext && mt.createContext(Cf),
  x1 = ["attr", "size", "title"];
function E1(e, t) {
  if (e == null) return {};
  var n = C1(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function C1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function zl() {
  return (
    (zl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zl.apply(this, arguments)
  );
}
function Va(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Va(Object(n), !0).forEach(function (r) {
          P1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Va(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function P1(e, t, n) {
  return (
    (t = T1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function T1(e) {
  var t = N1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function N1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pf(e) {
  return (
    e &&
    e.map((t, n) =>
      mt.createElement(t.tag, jl({ key: n }, t.attr), Pf(t.child)),
    )
  );
}
function Le(e) {
  return (t) =>
    mt.createElement(O1, zl({ attr: jl({}, e.attr) }, t), Pf(e.child));
}
function O1(e) {
  var t = (n) => {
    var { attr: r, size: l, title: i } = e,
      o = E1(e, x1),
      u = l || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      mt.createElement(
        "svg",
        zl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: jl(jl({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        i && mt.createElement("title", null, i),
        e.children,
      )
    );
  };
  return Wa !== void 0
    ? mt.createElement(Wa.Consumer, null, (n) => t(n))
    : t(Cf);
}
function Ln(e) {
  return Le({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z",
        },
        child: [],
      },
    ],
  })(e);
}
function z1(e) {
  return Le({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z",
        },
        child: [],
      },
    ],
  })(e);
}
function j1(e) {
  return Le({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.448 16.2394C13.8809 17.0412 13.2933 17.7714 12.7015 18.4146C14.3738 20.0375 15.9291 20.7975 16.792 20.2993C17.6549 19.8011 17.7744 18.0742 17.2051 15.8145C16.3521 16.0054 15.426 16.1492 14.448 16.2394ZM13.138 16.3265C12.7641 16.342 12.3845 16.3499 12.0003 16.3499C11.6161 16.3499 11.2365 16.342 10.8627 16.3265C11.2394 16.8188 11.6208 17.2749 12.0003 17.6905C12.3798 17.2749 12.7612 16.8188 13.138 16.3265ZM18.1787 8.43278C20.8434 9.19718 22.5837 10.4672 22.5837 11.9999C22.5837 13.5325 20.8434 14.8026 18.1787 15.567C18.8491 18.2569 18.6193 20.399 17.292 21.1653C15.9647 21.9316 13.9947 21.0595 12.0003 19.134C10.006 21.0595 8.03596 21.9316 6.70866 21.1653C5.38136 20.399 5.15158 18.2569 5.82195 15.567C3.15724 14.8026 1.41699 13.5325 1.41699 11.9999C1.41699 10.4672 3.15724 9.19718 5.82195 8.43278C5.15158 5.74288 5.38136 3.60075 6.70866 2.83443C8.03596 2.06811 10.006 2.94019 12.0003 4.86569C13.9947 2.94019 15.9647 2.06811 17.292 2.83443C18.6193 3.60075 18.8491 5.74288 18.1787 8.43278ZM17.2051 8.18527C17.7744 5.92558 17.6549 4.19865 16.792 3.70046C15.9291 3.20226 14.3738 3.96221 12.7015 5.58509C13.2933 6.2283 13.8809 6.95849 14.448 7.76031C15.426 7.85054 16.3521 7.99432 17.2051 8.18527ZM6.79554 15.8145C6.22624 18.0742 6.34577 19.8011 7.20866 20.2993C8.07155 20.7975 9.62688 20.0375 11.2992 18.4146C10.7073 17.7714 10.1197 17.0412 9.55262 16.2394C8.57467 16.1492 7.6485 16.0054 6.79554 15.8145ZM10.8627 7.67324C11.2365 7.65776 11.6161 7.64987 12.0003 7.64987C12.3845 7.64987 12.7641 7.65776 13.138 7.67324C12.7612 7.18096 12.3798 6.7248 12.0003 6.30922C11.6208 6.7248 11.2394 7.18096 10.8627 7.67324ZM9.55262 7.76031C10.1197 6.95849 10.7073 6.2283 11.2992 5.58509C9.62688 3.96221 8.07155 3.20226 7.20866 3.70046C6.34577 4.19865 6.22624 5.92558 6.79554 8.18527C7.6485 7.99432 8.57467 7.85054 9.55262 7.76031ZM13.8939 15.2797C14.2395 14.7728 14.5772 14.2366 14.9015 13.6749C15.2258 13.1131 15.5213 12.5526 15.7875 11.9999C15.5213 11.4471 15.2258 10.8866 14.9015 10.3249C14.5772 9.76311 14.2395 9.22694 13.8939 8.72005C13.2821 8.6742 12.649 8.64987 12.0003 8.64987C11.3517 8.64987 10.7185 8.6742 10.1067 8.72005C9.76112 9.22694 9.42347 9.76311 9.09914 10.3249C8.77481 10.8866 8.4793 11.4471 8.21312 11.9999C8.4793 12.5526 8.77481 13.1131 9.09914 13.6749C9.42347 14.2366 9.76112 14.7728 10.1067 15.2797C10.7185 15.3255 11.3517 15.3499 12.0003 15.3499C12.649 15.3499 13.2821 15.3255 13.8939 15.2797ZM15.1785 15.1484C15.7932 15.0683 16.3789 14.9661 16.9286 14.8452C16.7584 14.3087 16.5541 13.7504 16.3161 13.178C16.1426 13.5095 15.9596 13.8421 15.7675 14.1749C15.5754 14.5076 15.3788 14.8324 15.1785 15.1484ZM8.82218 8.85133C8.20747 8.93147 7.62174 9.03367 7.07208 9.15454C7.24223 9.691 7.44659 10.2494 7.68454 10.8218C7.85806 10.4903 8.04101 10.1576 8.23311 9.82487C8.42522 9.49212 8.62185 9.16736 8.82218 8.85133ZM7.07208 14.8452C7.62174 14.9661 8.20747 15.0683 8.82218 15.1484C8.62185 14.8324 8.42522 14.5076 8.23311 14.1749C8.04101 13.8421 7.85806 13.5095 7.68454 13.178C7.44659 13.7504 7.24223 14.3087 7.07208 14.8452ZM6.09439 14.6C6.35551 13.7659 6.69407 12.8919 7.10491 11.9999C6.69407 11.1078 6.35551 10.2339 6.09439 9.39969C3.85279 10.0365 2.41699 11.0035 2.41699 11.9999C2.41699 12.9962 3.85279 13.9632 6.09439 14.6ZM16.9286 9.15454C16.3789 9.03367 15.7932 8.93147 15.1785 8.85133C15.3788 9.16736 15.5754 9.49212 15.7675 9.82487C15.9596 10.1576 16.1426 10.4903 16.3161 10.8218C16.5541 10.2494 16.7584 9.691 16.9286 9.15454ZM17.9063 9.39969C17.6451 10.2339 17.3066 11.1078 16.8957 11.9999C17.3066 12.8919 17.6451 13.7659 17.9063 14.6C20.1479 13.9632 21.5837 12.9962 21.5837 11.9999C21.5837 11.0035 20.1479 10.0365 17.9063 9.39969ZM12.0003 13.879C10.9625 13.879 10.1212 13.0377 10.1212 11.9999C10.1212 10.962 10.9625 10.1207 12.0003 10.1207C13.0382 10.1207 13.8795 10.962 13.8795 11.9999C13.8795 13.0377 13.0382 13.879 12.0003 13.879Z",
        },
        child: [],
      },
    ],
  })(e);
}
const L1 = () =>
  v.jsxs("div", {
    id: "about",
    className: "mx-auto h-screen w-4/5 max-w-4xl content-center sm:w-4/5",
    children: [
      v.jsx("h1", {
        className: "mb-5 text-5xl font-bold",
        children: "About me",
      }),
      v.jsxs("div", {
        className: "flex gap-3 max-sm:flex-col",
        children: [
          v.jsxs("p", {
            className: "mr-4 w-3/5 text-wrap leading-relaxed max-sm:w-auto",
            children: [
              "Hi! I'm Emmanuel Idler, a Junior Front-End Developer with a strong passion for continuously learn and grow, both professionally and personally. I have hands-on experience with HTML, CSS, JavaScript, React and Tailwind CSS. My goal is to leverage my skills to build innovative and impactful web experiences. I'm highly motivated, eager to tackle new challenges, and always looking for opportunities to expand my knowledge and improve my skills. ",
              v.jsx("br", {}),
              "Feel free to check out my projects and get in touch if you'd like to collaborate or have any questions!",
            ],
          }),
          v.jsxs("div", {
            className: "w-2/5 ps-3 max-sm:w-auto",
            children: [
              v.jsx("p", {
                className: "mb-2",
                children: "Technologies I've worked with recently: ",
              }),
              v.jsxs("ul", {
                className: "grid grid-cols-2 gap-2 text-xs",
                children: [
                  v.jsxs("li", {
                    className: "custom-hover-underline",
                    children: [
                      v.jsx(Ln, { className: "inline" }),
                      v.jsx("span", {
                        className: "text-inherit transition-all duration-300",
                        children: "HTML",
                      }),
                    ],
                  }),
                  v.jsxs("li", {
                    className: "custom-hover-underline",
                    children: [
                      v.jsx(Ln, { className: "inline" }),
                      v.jsx("span", {
                        className: "text-inherit transition-all duration-300",
                        children: "CSS",
                      }),
                    ],
                  }),
                  v.jsxs("li", {
                    className: "custom-hover-underline",
                    children: [
                      v.jsx(Ln, { className: "inline" }),
                      v.jsx("span", {
                        className: "text-inherit transition-all duration-300",
                        children: "JavaScript",
                      }),
                    ],
                  }),
                  v.jsxs("li", {
                    className: "custom-hover-underline",
                    children: [
                      v.jsx(Ln, { className: "inline" }),
                      v.jsx("span", {
                        className: "text-inherit transition-all duration-300",
                        children: "Tailwind CSS",
                      }),
                    ],
                  }),
                  v.jsxs("li", {
                    className: "custom-hover-underline",
                    children: [
                      v.jsx(Ln, { className: "inline" }),
                      v.jsx("span", {
                        className: "text-inherit transition-all duration-300",
                        children: "React",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
function Tf(e) {
  return Le({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",
        },
        child: [],
      },
    ],
  })(e);
}
function M1(e) {
  return Le({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
        },
        child: [],
      },
      { tag: "path", attr: { d: "M8 11l0 5" }, child: [] },
      { tag: "path", attr: { d: "M8 8l0 .01" }, child: [] },
      { tag: "path", attr: { d: "M12 16l0 -5" }, child: [] },
      { tag: "path", attr: { d: "M16 16v-3a2 2 0 0 0 -4 0" }, child: [] },
    ],
  })(e);
}
function R1(e) {
  return Le({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",
        },
        child: [],
      },
      { tag: "path", attr: { d: "M3 7l9 6l9 -6" }, child: [] },
    ],
  })(e);
}
const I1 = () =>
    v.jsx(v.Fragment, {
      children: v.jsxs("div", {
        id: "contact",
        className: "mx-auto mt-40 h-[80dvh] content-center text-center",
        children: [
          v.jsx("h2", {
            className: "mb-4 text-5xl font-bold",
            children: "Find me here",
          }),
          v.jsxs("div", {
            className: "d flex h-20 items-center justify-center",
            children: [
              v.jsx("span", {
                className: "w-20",
                children: v.jsx("a", {
                  href: "https://github.com/NazSvn",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: v.jsx(Tf, {
                    className:
                      "m-1 inline size-11 cursor-pointer transition-all hover:size-12",
                  }),
                }),
              }),
              v.jsx("span", {
                className: "w-20",
                children: v.jsx("a", {
                  href: "mailto:idler90@gmail.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: v.jsx(R1, {
                    className:
                      "m-1 inline size-12 cursor-pointer transition-all hover:size-14",
                  }),
                }),
              }),
              v.jsx("span", {
                className: "w-20",
                children: v.jsx("a", {
                  href: "http://linkedin.com/in/emmanuel-idler-8b6a30227",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: v.jsx(M1, {
                    className:
                      "m-1 inline size-11 cursor-pointer transition-all hover:size-12",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  D1 = () =>
    v.jsx(v.Fragment, {
      children: v.jsxs("div", {
        className: "flex flex-col items-center justify-center",
        children: [
          v.jsx("hr", {
            className:
              "h-[15px] w-[60%] border-none shadow-[0px_4px_8px_-7px_rgba(255,255,255,0.65)]",
          }),
          v.jsx("div", {
            className: "mb-5 mt-2 min-w-[80%] pt-3 text-center text-xs",
            children: "© 2024 Emmanuel Idler. All rights reserved.",
          }),
        ],
      }),
    });
function $1(e) {
  return Le({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" },
        child: [],
      },
      { tag: "polyline", attr: { points: "15 3 21 3 21 9" }, child: [] },
      {
        tag: "line",
        attr: { x1: "10", y1: "14", x2: "21", y2: "3" },
        child: [],
      },
    ],
  })(e);
}
function F1(e) {
  return Le({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "18", y1: "6", x2: "6", y2: "18" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "6", y1: "6", x2: "18", y2: "18" },
        child: [],
      },
    ],
  })(e);
}
const H1 = [
    {
      href: "https://nazsvn.github.io/AmazonPseudoClone/",
      images: {
        avif: {
          srcset: {
            "175w": "../images/amazon175.avif",
            "350w": "../images/amazon350.avif",
            "700w": "../images/amazon700.avif",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
        webp: {
          srcset: {
            "175w": "../images/amazon175.webp",
            "350w": "../images/amazon350.webp",
            "700w": "../images/amazon700.webp",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
        png: {
          srcset: {
            "175w": "../images/amazon175.png",
            "350w": "../images/amazon350.png",
            "700w": "../images/amazon700.png",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
      },
      title: "Amazon",
      description:
        "An Amazon pseudo clone, created using JavaScript, CSS, and HTML. This project simulates key features of the Amazon shopping platform, including product searching, a shopping cart,  order and tracking functionalities. ",
      tech: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/NazSvn/AmazonPseudoClone",
    },
    {
      href: "https://nazsvn.github.io/Pokedesk/",
      images: {
        avif: {
          srcset: {
            "175w": "../images/poke175.avif",
            "350w": "../images/poke350.avif",
            "700w": "../images/poke700.avif",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
        webp: {
          srcset: {
            "175w": "../images/poke175.webp",
            "350w": "../images/poke350.webp",
            "700w": "../images/poke700.webp",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
        png: {
          srcset: {
            "175w": "../images/poke175.png",
            "350w": "../images/poke350.png",
            "700w": "../images/poke700.png",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
      },
      title: "Pokédex",
      description:
        "This app was created for freeCodeCamp's JavaScript Algorithms and Data Structures certification. The challenge was to build a Pokémon search app that fetches data from an API and displays the Pokémon's stats and image. The app was created using JavaScript, CSS, and HTML.",
      tech: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/NazSvn/Pokedesk",
    },
    {
      href: "https://nazsvn.github.io/TENZIES/",
      images: {
        avif: {
          srcset: {
            "175w": "../images/tenzies175.avif",
            "350w": "../images/tenzies350.avif",
            "700w": "../images/tenzies700.avif",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
        webp: {
          srcset: {
            "175w": "../images/tenzies175.webp",
            "350w": "../images/tenzies350.webp",
            "700w": "../images/tenzies700.webp",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
        png: {
          srcset: {
            "175w": "../images/tenzies175.png",
            "350w": "../images/tenzies350.png",
            "700w": "../images/tenzies700.png",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
      },
      title: "Tenzies",
      description:
        "Tenzies is a dice game where the object is to roll the dice until all show the same value. You can click each die to freeze it at its current value between rolls. This game was built using React.",
      tech: ["HTML", "CSS", "React"],
      code: "https://github.com/NazSvn/TENZIES",
    },
    {
      href: "https://nazsvn.github.io/forCodeCampLandingPage/",
      images: {
        avif: {
          srcset: {
            "175w": "../images/landing175.avif",
            "350w": "../images/landing350.avif",
            "700w": "../images/landing700.avif",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
        webp: {
          srcset: {
            "175w": "../images/landing175.webp",
            "350w": "../images/landing350.webp",
            "700w": "../images/landing700.webp",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
        png: {
          srcset: {
            "175w": "../images/landing175.png",
            "350w": "../images/landing350.png",
            "700w": "../images/landing700.png",
          },
          sizes: "(min-width: 700px) 700px, 100vw",
        },
      },
      title: "Landing Page",
      description:
        " A landing page created for the freeCodeCamp Responsive Web Design Certification.A landing page created for the freeCodeCamp Responsive Web Design Certification",
      tech: ["HTML", "CSS"],
      code: "https://github.com/NazSvn/forCodeCampLandingPage",
    },
  ],
  A1 = () =>
    v.jsx(v.Fragment, {
      children: v.jsxs("div", {
        className: "mx-auto w-4/5 max-w-4xl",
        children: [
          v.jsx("h1", {
            className: "mb-9 text-5xl font-bold",
            children: "projects",
          }),
          H1.map((e, t) =>
            v.jsx(
              "div",
              {
                children: v.jsxs("div", {
                  id: "projects",
                  className:
                    "relative mx-auto mb-7 grid h-96 grid-cols-12 items-center",
                  children: [
                    v.jsx("div", {
                      className: `col-span-12 shadow-lg shadow-[#00000033] ${t % 2 ? "absolute md:col-span-7 md:col-end-13" : "absolute md:col-span-7 md:col-start-1"}`,
                      children: v.jsx("a", {
                        href: e.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: v.jsxs("picture", {
                          children: [
                            v.jsx("source", {
                              type: "image/avif",
                              srcSet: `${e.images.avif.srcset["175w"]} 175w, ${e.images.avif.srcset["350w"]} 350w, ${e.images.avif.srcset["700w"]} 700w`,
                              sizes: e.images.avif.sizes,
                            }),
                            v.jsx("source", {
                              type: "image/webp",
                              srcSet: `${e.images.webp.srcset["175w"]} 175w, ${e.images.webp.srcset["350w"]} 350w, ${e.images.webp.srcset["700w"]} 700w`,
                              sizes: e.images.webp.sizes,
                            }),
                            v.jsx("img", {
                              width: "700",
                              height: "438",
                              src: e.images.png.srcset["700w"],
                              srcSet: `${e.images.png.srcset["175w"]} 175w, ${e.images.png.srcset["350w"]} 350w, ${e.images.png.srcset["700w"]} 700w`,
                              sizes: e.images.png.sizes,
                              alt: "Project thumbnail",
                              className:
                                "grayscale transition-all duration-700 ease-in-out hover:grayscale-0",
                              style: { objectFit: "cover", opacity: 1 },
                            }),
                          ],
                        }),
                      }),
                    }),
                    v.jsx("div", {
                      className: `pointer-events-none z-[2] col-span-12 h-full content-center bg-[#242424] bg-opacity-95 md:col-span-8 md:bg-opacity-0 lg:col-span-6 ${t % 2 ? "md:col-start-1 lg:col-start-1" : "md:col-end-13 lg:col-end-13"}`,
                      children: v.jsxs("div", {
                        className: `${t % 2 ? "text-left" : "text-right"}`,
                        children: [
                          v.jsx("p", {
                            className: "my-4 text-xs text-[#adddbe]",
                            children: "Featured Project",
                          }),
                          v.jsx("a", {
                            href: e.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: v.jsx("h3", {
                              children: v.jsx("span", {
                                className:
                                  "pointer-events-auto mb-4 cursor-pointer text-2xl hover:text-[#adddbe]",
                                children: e.title,
                              }),
                            }),
                          }),
                          v.jsx("div", {
                            children: v.jsx("p", {
                              className:
                                "pointer-events-auto mb-4 cursor-default rounded-md bg-[#242424] p-4 text-sm",
                              children: e.description,
                            }),
                          }),
                          v.jsx("ul", {
                            className: `my-2 flex gap-3 text-xs ${t % 2 ? "" : "justify-end"}`,
                            children: e.tech.map((n, r) =>
                              v.jsx(
                                "li",
                                {
                                  className:
                                    "pointer-events-auto cursor-default hover:text-[#adddbe]",
                                  children: n,
                                },
                                r,
                              ),
                            ),
                          }),
                          v.jsxs("div", {
                            className: " ",
                            children: [
                              v.jsx("a", {
                                href: e.code,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: v.jsx(Tf, {
                                  className:
                                    "pointer-events-auto m-1 inline size-6 cursor-pointer transition-all hover:text-[#adddbe]",
                                }),
                              }),
                              v.jsx("a", {
                                href: e.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: v.jsx($1, {
                                  className:
                                    "pointer-events-auto m-1 inline size-6 cursor-pointer transition-all hover:text-[#adddbe]",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              },
              t,
            ),
          ),
        ],
      }),
    });
function U1(e) {
  return Le({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256.282 339.488zM64 32l34.946 403.219L255.767 480l157.259-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.458-28.248L150.864 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z",
        },
        child: [],
      },
    ],
  })(e);
}
function B1(e) {
  return Le({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M64 32l34.936 403.213L255.769 480l157.245-44.854L448 32H64zm307.997 132h-184l3.991 51h176.008l-13.505 151.386-98.5 28.094-98.682-27.976L150.545 289h48.254l3.423 39.287 53.769 14.781 53.422-14.915L314.987 264H147.986l-12.571-149.589 240.789.016L371.997 164z",
        },
        child: [],
      },
    ],
  })(e);
}
const W1 = () =>
  v.jsx("div", {
    id: "hero",
    className:
      "mx-auto mt-60 flex w-4/5 max-w-4xl content-center p-3 sm:border-red-300 md:mt-72",
    children: v.jsxs("div", {
      className: "mx-auto",
      children: [
        v.jsx("h1", {
          className: "mb-5 text-7xl font-bold text-white md:text-8xl",
          children: "Emmanuel Idler",
        }),
        v.jsx("h1", {
          className: "mb-5 text-6xl font-bold md:text-7xl",
          children: "Front-End Developer.",
        }),
        v.jsx("p", {
          className: "max-w-2xl text-wrap",
          children:
            "Hi! I'm a Junior Front-End Developer with a strong passion for creating beautiful, responsive, and user-friendly web applications.",
        }),
        v.jsxs("div", {
          className: "mt-6 flex items-center gap-3",
          children: [
            v.jsx("p", { children: "Tech stack: " }),
            v.jsxs("div", {
              className: "flex content-center",
              children: [
                v.jsx("span", {
                  className: "h-14 w-14 content-center text-center",
                  children: v.jsx(B1, {
                    className:
                      "inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#f06529]",
                  }),
                }),
                v.jsx("span", {
                  className: "h-14 w-14 content-center text-center",
                  children: v.jsx(U1, {
                    className:
                      "inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#264de4]",
                  }),
                }),
                v.jsx("span", {
                  className: "h-14 w-14 content-center text-center",
                  children: v.jsx(z1, {
                    className:
                      "inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#f0db4f]",
                  }),
                }),
                v.jsx("span", {
                  className: "githubIcon h-14 w-14 content-center text-center",
                  children: v.jsx(j1, {
                    className:
                      "inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#61dafb]",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
function V1(e) {
  return Le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8.2 751.4c0 8.6 3.4 17.401 10 24.001 13.2 13.2 34.8 13.2 48 0l451.8-451.8 445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function Q1(e) {
  return Le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z",
        },
        child: [],
      },
    ],
  })(e);
}
var Y = {},
  Pu = {},
  mr = {},
  hr = {},
  Nf = "Expected a function",
  Qa = NaN,
  Y1 = "[object Symbol]",
  K1 = /^\s+|\s+$/g,
  X1 = /^[-+]0x[0-9a-f]+$/i,
  Z1 = /^0b[01]+$/i,
  G1 = /^0o[0-7]+$/i,
  J1 = parseInt,
  q1 = typeof Er == "object" && Er && Er.Object === Object && Er,
  b1 = typeof self == "object" && self && self.Object === Object && self,
  em = q1 || b1 || Function("return this")(),
  tm = Object.prototype,
  nm = tm.toString,
  rm = Math.max,
  lm = Math.min,
  ji = function () {
    return em.Date.now();
  };
function im(e, t, n) {
  var r,
    l,
    i,
    o,
    u,
    a,
    s = 0,
    m = !1,
    p = !1,
    h = !0;
  if (typeof e != "function") throw new TypeError(Nf);
  (t = Ya(t) || 0),
    Ll(n) &&
      ((m = !!n.leading),
      (p = "maxWait" in n),
      (i = p ? rm(Ya(n.maxWait) || 0, t) : i),
      (h = "trailing" in n ? !!n.trailing : h));
  function w(k) {
    var E = r,
      T = l;
    return (r = l = void 0), (s = k), (o = e.apply(T, E)), o;
  }
  function S(k) {
    return (s = k), (u = setTimeout(f, t)), m ? w(k) : o;
  }
  function _(k) {
    var E = k - a,
      T = k - s,
      I = t - E;
    return p ? lm(I, i - T) : I;
  }
  function L(k) {
    var E = k - a,
      T = k - s;
    return a === void 0 || E >= t || E < 0 || (p && T >= i);
  }
  function f() {
    var k = ji();
    if (L(k)) return c(k);
    u = setTimeout(f, _(k));
  }
  function c(k) {
    return (u = void 0), h && r ? w(k) : ((r = l = void 0), o);
  }
  function d() {
    u !== void 0 && clearTimeout(u), (s = 0), (r = a = l = u = void 0);
  }
  function g() {
    return u === void 0 ? o : c(ji());
  }
  function x() {
    var k = ji(),
      E = L(k);
    if (((r = arguments), (l = this), (a = k), E)) {
      if (u === void 0) return S(a);
      if (p) return (u = setTimeout(f, t)), w(a);
    }
    return u === void 0 && (u = setTimeout(f, t)), o;
  }
  return (x.cancel = d), (x.flush = g), x;
}
function om(e, t, n) {
  var r = !0,
    l = !0;
  if (typeof e != "function") throw new TypeError(Nf);
  return (
    Ll(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (l = "trailing" in n ? !!n.trailing : l)),
    im(e, t, { leading: r, maxWait: t, trailing: l })
  );
}
function Ll(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function um(e) {
  return !!e && typeof e == "object";
}
function am(e) {
  return typeof e == "symbol" || (um(e) && nm.call(e) == Y1);
}
function Ya(e) {
  if (typeof e == "number") return e;
  if (am(e)) return Qa;
  if (Ll(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ll(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(K1, "");
  var n = Z1.test(e);
  return n || G1.test(e) ? J1(e.slice(2), n ? 2 : 8) : X1.test(e) ? Qa : +e;
}
var sm = om,
  vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.addPassiveEventListener = function (t, n, r) {
  var l = r.name;
  l || ((l = n), console.warn("Listener must be a named function.")),
    il.has(n) || il.set(n, new Set());
  var i = il.get(n);
  if (!i.has(l)) {
    var o = (function () {
      var u = !1;
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function () {
            u = !0;
          },
        });
        window.addEventListener("test", null, a);
      } catch {}
      return u;
    })();
    t.addEventListener(n, r, o ? { passive: !0 } : !1), i.add(l);
  }
};
vr.removePassiveEventListener = function (t, n, r) {
  t.removeEventListener(n, r), il.get(n).delete(r.name || n);
};
var il = new Map();
Object.defineProperty(hr, "__esModule", { value: !0 });
var cm = sm,
  fm = pm(cm),
  dm = vr;
function pm(e) {
  return e && e.__esModule ? e : { default: e };
}
var mm = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0, fm.default)(t, n);
  },
  U = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function (t, n) {
      if (t) {
        var r = mm(function (l) {
          U.scrollHandler(t);
        }, n);
        U.scrollSpyContainers.push(t),
          (0, dm.addPassiveEventListener)(t, "scroll", r);
      }
    },
    isMounted: function (t) {
      return U.scrollSpyContainers.indexOf(t) !== -1;
    },
    currentPositionX: function (t) {
      if (t === document) {
        var n = window.pageYOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageXOffset
          : r
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
      } else return t.scrollLeft;
    },
    currentPositionY: function (t) {
      if (t === document) {
        var n = window.pageXOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageYOffset
          : r
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
      } else return t.scrollTop;
    },
    scrollHandler: function (t) {
      var n =
        U.scrollSpyContainers[U.scrollSpyContainers.indexOf(t)].spyCallbacks ||
        [];
      n.forEach(function (r) {
        return r(U.currentPositionX(t), U.currentPositionY(t));
      });
    },
    addStateHandler: function (t) {
      U.spySetState.push(t);
    },
    addSpyHandler: function (t, n) {
      var r = U.scrollSpyContainers[U.scrollSpyContainers.indexOf(n)];
      r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(t),
        t(U.currentPositionX(n), U.currentPositionY(n));
    },
    updateStates: function () {
      U.spySetState.forEach(function (t) {
        return t();
      });
    },
    unmount: function (t, n) {
      U.scrollSpyContainers.forEach(function (r) {
        return (
          r.spyCallbacks &&
          r.spyCallbacks.length &&
          r.spyCallbacks.indexOf(n) > -1 &&
          r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        );
      }),
        U.spySetState &&
          U.spySetState.length &&
          U.spySetState.indexOf(t) > -1 &&
          U.spySetState.splice(U.spySetState.indexOf(t), 1),
        document.removeEventListener("scroll", U.scrollHandler);
    },
    update: function () {
      return U.scrollSpyContainers.forEach(function (t) {
        return U.scrollHandler(t);
      });
    },
  };
hr.default = U;
var _n = {},
  gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
var hm = function (t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t,
      l = r ? "#" + r : "",
      i = window && window.location,
      o = l ? i.pathname + i.search + l : i.pathname + i.search;
    n
      ? history.pushState(history.state, "", o)
      : history.replaceState(history.state, "", o);
  },
  vm = function () {
    return window.location.hash.replace(/^#/, "");
  },
  gm = function (t) {
    return function (n) {
      return t.contains
        ? t != n && t.contains(n)
        : !!(t.compareDocumentPosition(n) & 16);
    };
  },
  ym = function (t) {
    return getComputedStyle(t).position !== "static";
  },
  Li = function (t, n) {
    for (var r = t.offsetTop, l = t.offsetParent; l && !n(l); )
      (r += l.offsetTop), (l = l.offsetParent);
    return { offsetTop: r, offsetParent: l };
  },
  wm = function (t, n, r) {
    if (r)
      return t === document
        ? n.getBoundingClientRect().left +
            (window.scrollX || window.pageXOffset)
        : getComputedStyle(t).position !== "static"
          ? n.offsetLeft
          : n.offsetLeft - t.offsetLeft;
    if (t === document)
      return (
        n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
      );
    if (ym(t)) {
      if (n.offsetParent !== t) {
        var l = function (m) {
            return m === t || m === document;
          },
          i = Li(n, l),
          o = i.offsetTop,
          u = i.offsetParent;
        if (u !== t)
          throw new Error(
            "Seems containerElement is not an ancestor of the Element",
          );
        return o;
      }
      return n.offsetTop;
    }
    if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
    var a = function (m) {
      return m === document;
    };
    return Li(n, a).offsetTop - Li(t, a).offsetTop;
  };
gr.default = {
  updateHash: hm,
  getHash: vm,
  filterElementInContainer: gm,
  scrollOffset: wm,
};
var Zl = {},
  Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
Tu.default = {
  defaultEasing: function (t) {
    return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2;
  },
  linear: function (t) {
    return t;
  },
  easeInQuad: function (t) {
    return t * t;
  },
  easeOutQuad: function (t) {
    return t * (2 - t);
  },
  easeInOutQuad: function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function (t) {
    return t * t * t;
  },
  easeOutCubic: function (t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function (t) {
    return t * t * t * t;
  },
  easeOutQuart: function (t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function (t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function (t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
};
var Nu = {};
Object.defineProperty(Nu, "__esModule", { value: !0 });
var Sm = vr,
  km = ["mousedown", "mousewheel", "touchmove", "keydown"];
Nu.default = {
  subscribe: function (t) {
    return (
      typeof document < "u" &&
      km.forEach(function (n) {
        return (0, Sm.addPassiveEventListener)(document, n, t);
      })
    );
  },
};
var yr = {};
Object.defineProperty(yr, "__esModule", { value: !0 });
var zo = {
  registered: {},
  scrollEvent: {
    register: function (t, n) {
      zo.registered[t] = n;
    },
    remove: function (t) {
      zo.registered[t] = null;
    },
  },
};
yr.default = zo;
Object.defineProperty(Zl, "__esModule", { value: !0 });
var _m =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  xm = gr;
Gl(xm);
var Em = Tu,
  Ka = Gl(Em),
  Cm = Nu,
  Pm = Gl(Cm),
  Tm = yr,
  Be = Gl(Tm);
function Gl(e) {
  return e && e.__esModule ? e : { default: e };
}
var Of = function (t) {
    return Ka.default[t.smooth] || Ka.default.defaultEasing;
  },
  Nm = function (t) {
    return typeof t == "function"
      ? t
      : function () {
          return t;
        };
  },
  Om = function () {
    if (typeof window < "u")
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  },
  jo = (function () {
    return (
      Om() ||
      function (e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
      }
    );
  })(),
  zf = function () {
    return {
      currentPosition: 0,
      startPosition: 0,
      targetPosition: 0,
      progress: 0,
      duration: 0,
      cancel: !1,
      target: null,
      containerElement: null,
      to: null,
      start: null,
      delta: null,
      percent: null,
      delayTimeout: null,
    };
  },
  jf = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollLeft;
    var r = window.pageXOffset !== void 0,
      l = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageXOffset
      : l
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft;
  },
  Lf = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollTop;
    var r = window.pageXOffset !== void 0,
      l = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageYOffset
      : l
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
  },
  zm = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollWidth - n.offsetWidth;
    var r = document.body,
      l = document.documentElement;
    return Math.max(
      r.scrollWidth,
      r.offsetWidth,
      l.clientWidth,
      l.scrollWidth,
      l.offsetWidth,
    );
  },
  jm = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollHeight - n.offsetHeight;
    var r = document.body,
      l = document.documentElement;
    return Math.max(
      r.scrollHeight,
      r.offsetHeight,
      l.clientHeight,
      l.scrollHeight,
      l.offsetHeight,
    );
  },
  Lm = function e(t, n, r) {
    var l = n.data;
    if (!n.ignoreCancelEvents && l.cancel) {
      Be.default.registered.end &&
        Be.default.registered.end(l.to, l.target, l.currentPositionY);
      return;
    }
    if (
      ((l.delta = Math.round(l.targetPosition - l.startPosition)),
      l.start === null && (l.start = r),
      (l.progress = r - l.start),
      (l.percent = l.progress >= l.duration ? 1 : t(l.progress / l.duration)),
      (l.currentPosition = l.startPosition + Math.ceil(l.delta * l.percent)),
      l.containerElement &&
      l.containerElement !== document &&
      l.containerElement !== document.body
        ? n.horizontal
          ? (l.containerElement.scrollLeft = l.currentPosition)
          : (l.containerElement.scrollTop = l.currentPosition)
        : n.horizontal
          ? window.scrollTo(l.currentPosition, 0)
          : window.scrollTo(0, l.currentPosition),
      l.percent < 1)
    ) {
      var i = e.bind(null, t, n);
      jo.call(window, i);
      return;
    }
    Be.default.registered.end &&
      Be.default.registered.end(l.to, l.target, l.currentPosition);
  },
  Ou = function (t) {
    t.data.containerElement = t
      ? t.containerId
        ? document.getElementById(t.containerId)
        : t.container && t.container.nodeType
          ? t.container
          : document
      : null;
  },
  wr = function (t, n, r, l) {
    (n.data = n.data || zf()), window.clearTimeout(n.data.delayTimeout);
    var i = function () {
      n.data.cancel = !0;
    };
    if (
      (Pm.default.subscribe(i),
      Ou(n),
      (n.data.start = null),
      (n.data.cancel = !1),
      (n.data.startPosition = n.horizontal ? jf(n) : Lf(n)),
      (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
      n.data.startPosition === n.data.targetPosition)
    ) {
      Be.default.registered.end &&
        Be.default.registered.end(
          n.data.to,
          n.data.target,
          n.data.currentPosition,
        );
      return;
    }
    (n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition)),
      (n.data.duration = Nm(n.duration)(n.data.delta)),
      (n.data.duration = isNaN(parseFloat(n.data.duration))
        ? 1e3
        : parseFloat(n.data.duration)),
      (n.data.to = r),
      (n.data.target = l);
    var o = Of(n),
      u = Lm.bind(null, o, n);
    if (n && n.delay > 0) {
      n.data.delayTimeout = window.setTimeout(function () {
        Be.default.registered.begin &&
          Be.default.registered.begin(n.data.to, n.data.target),
          jo.call(window, u);
      }, n.delay);
      return;
    }
    Be.default.registered.begin &&
      Be.default.registered.begin(n.data.to, n.data.target),
      jo.call(window, u);
  },
  Jl = function (t) {
    return (t = _m({}, t)), (t.data = t.data || zf()), (t.absolute = !0), t;
  },
  Mm = function (t) {
    wr(0, Jl(t));
  },
  Rm = function (t, n) {
    wr(t, Jl(n));
  },
  Im = function (t) {
    (t = Jl(t)), Ou(t), wr(t.horizontal ? zm(t) : jm(t), t);
  },
  Dm = function (t, n) {
    (n = Jl(n)), Ou(n);
    var r = n.horizontal ? jf(n) : Lf(n);
    wr(t + r, n);
  };
Zl.default = {
  animateTopScroll: wr,
  getAnimationType: Of,
  scrollToTop: Mm,
  scrollToBottom: Im,
  scrollTo: Rm,
  scrollMore: Dm,
};
Object.defineProperty(_n, "__esModule", { value: !0 });
var $m =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Fm = gr,
  Hm = zu(Fm),
  Am = Zl,
  Um = zu(Am),
  Bm = yr,
  Br = zu(Bm);
function zu(e) {
  return e && e.__esModule ? e : { default: e };
}
var Wr = {},
  Xa = void 0;
_n.default = {
  unmount: function () {
    Wr = {};
  },
  register: function (t, n) {
    Wr[t] = n;
  },
  unregister: function (t) {
    delete Wr[t];
  },
  get: function (t) {
    return (
      Wr[t] ||
      document.getElementById(t) ||
      document.getElementsByName(t)[0] ||
      document.getElementsByClassName(t)[0]
    );
  },
  setActiveLink: function (t) {
    return (Xa = t);
  },
  getActiveLink: function () {
    return Xa;
  },
  scrollTo: function (t, n) {
    var r = this.get(t);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = $m({}, n, { absolute: !1 });
    var l = n.containerId,
      i = n.container,
      o = void 0;
    l
      ? (o = document.getElementById(l))
      : i && i.nodeType
        ? (o = i)
        : (o = document),
      (n.absolute = !0);
    var u = n.horizontal,
      a = Hm.default.scrollOffset(o, r, u) + (n.offset || 0);
    if (!n.smooth) {
      Br.default.registered.begin && Br.default.registered.begin(t, r),
        o === document
          ? n.horizontal
            ? window.scrollTo(a, 0)
            : window.scrollTo(0, a)
          : (o.scrollTop = a),
        Br.default.registered.end && Br.default.registered.end(t, r);
      return;
    }
    Um.default.animateTopScroll(a, n, t, r);
  },
};
var Mf = { exports: {} },
  Wm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Vm = Wm,
  Qm = Vm;
function Rf() {}
function If() {}
If.resetWarningCache = Rf;
var Ym = function () {
  function e(r, l, i, o, u, a) {
    if (a !== Qm) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: If,
    resetWarningCache: Rf,
  };
  return (n.PropTypes = n), n;
};
Mf.exports = Ym();
var Sr = Mf.exports,
  ql = {};
Object.defineProperty(ql, "__esModule", { value: !0 });
var Km = gr,
  Mi = Xm(Km);
function Xm(e) {
  return e && e.__esModule ? e : { default: e };
}
var Zm = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function (t) {
    (this.scroller = t),
      (this.handleHashChange = this.handleHashChange.bind(this)),
      window.addEventListener("hashchange", this.handleHashChange),
      this.initStateFromHash(),
      (this.mountFlag = !0);
  },
  mapContainer: function (t, n) {
    this.containers[t] = n;
  },
  isMounted: function () {
    return this.mountFlag;
  },
  isInitialized: function () {
    return this.initialized;
  },
  initStateFromHash: function () {
    var t = this,
      n = this.getHash();
    n
      ? window.setTimeout(function () {
          t.scrollTo(n, !0), (t.initialized = !0);
        }, 10)
      : (this.initialized = !0);
  },
  scrollTo: function (t, n) {
    var r = this.scroller,
      l = r.get(t);
    if (l && (n || t !== r.getActiveLink())) {
      var i = this.containers[t] || document;
      r.scrollTo(t, { container: i });
    }
  },
  getHash: function () {
    return Mi.default.getHash();
  },
  changeHash: function (t, n) {
    this.isInitialized() &&
      Mi.default.getHash() !== t &&
      Mi.default.updateHash(t, n);
  },
  handleHashChange: function () {
    this.scrollTo(this.getHash());
  },
  unmount: function () {
    (this.scroller = null),
      (this.containers = null),
      window.removeEventListener("hashchange", this.handleHashChange);
  },
};
ql.default = Zm;
Object.defineProperty(mr, "__esModule", { value: !0 });
var Vr =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Gm = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Jm = ae,
  Za = kr(Jm),
  qm = hr,
  Qr = kr(qm),
  bm = _n,
  eh = kr(bm),
  th = Sr,
  H = kr(th),
  nh = ql,
  ot = kr(nh);
function kr(e) {
  return e && e.__esModule ? e : { default: e };
}
function rh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lh(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function ih(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ga = {
  to: H.default.string.isRequired,
  containerId: H.default.string,
  container: H.default.object,
  activeClass: H.default.string,
  activeStyle: H.default.object,
  spy: H.default.bool,
  horizontal: H.default.bool,
  smooth: H.default.oneOfType([H.default.bool, H.default.string]),
  offset: H.default.number,
  delay: H.default.number,
  isDynamic: H.default.bool,
  onClick: H.default.func,
  duration: H.default.oneOfType([H.default.number, H.default.func]),
  absolute: H.default.bool,
  onSetActive: H.default.func,
  onSetInactive: H.default.func,
  ignoreCancelEvents: H.default.bool,
  hashSpy: H.default.bool,
  saveHashHistory: H.default.bool,
  spyThrottle: H.default.number,
};
mr.default = function (e, t) {
  var n = t || eh.default,
    r = (function (i) {
      ih(o, i);
      function o(u) {
        rh(this, o);
        var a = lh(
          this,
          (o.__proto__ || Object.getPrototypeOf(o)).call(this, u),
        );
        return l.call(a), (a.state = { active: !1 }), a;
      }
      return (
        Gm(o, [
          {
            key: "getScrollSpyContainer",
            value: function () {
              var a = this.props.containerId,
                s = this.props.container;
              return a && !s
                ? document.getElementById(a)
                : s && s.nodeType
                  ? s
                  : document;
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              if (this.props.spy || this.props.hashSpy) {
                var a = this.getScrollSpyContainer();
                Qr.default.isMounted(a) ||
                  Qr.default.mount(a, this.props.spyThrottle),
                  this.props.hashSpy &&
                    (ot.default.isMounted() || ot.default.mount(n),
                    ot.default.mapContainer(this.props.to, a)),
                  Qr.default.addSpyHandler(this.spyHandler, a),
                  this.setState({ container: a });
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              Qr.default.unmount(this.stateHandler, this.spyHandler);
            },
          },
          {
            key: "render",
            value: function () {
              var a = "";
              this.state && this.state.active
                ? (a = (
                    (this.props.className || "") +
                    " " +
                    (this.props.activeClass || "active")
                  ).trim())
                : (a = this.props.className);
              var s = {};
              this.state && this.state.active
                ? (s = Vr({}, this.props.style, this.props.activeStyle))
                : (s = Vr({}, this.props.style));
              var m = Vr({}, this.props);
              for (var p in Ga) m.hasOwnProperty(p) && delete m[p];
              return (
                (m.className = a),
                (m.style = s),
                (m.onClick = this.handleClick),
                Za.default.createElement(e, m)
              );
            },
          },
        ]),
        o
      );
    })(Za.default.PureComponent),
    l = function () {
      var o = this;
      (this.scrollTo = function (u, a) {
        n.scrollTo(u, Vr({}, o.state, a));
      }),
        (this.handleClick = function (u) {
          o.props.onClick && o.props.onClick(u),
            u.stopPropagation && u.stopPropagation(),
            u.preventDefault && u.preventDefault(),
            o.scrollTo(o.props.to, o.props);
        }),
        (this.spyHandler = function (u, a) {
          var s = o.getScrollSpyContainer();
          if (!(ot.default.isMounted() && !ot.default.isInitialized())) {
            var m = o.props.horizontal,
              p = o.props.to,
              h = null,
              w = void 0,
              S = void 0;
            if (m) {
              var _ = 0,
                L = 0,
                f = 0;
              if (s.getBoundingClientRect) {
                var c = s.getBoundingClientRect();
                f = c.left;
              }
              if (!h || o.props.isDynamic) {
                if (((h = n.get(p)), !h)) return;
                var d = h.getBoundingClientRect();
                (_ = d.left - f + u), (L = _ + d.width);
              }
              var g = u - o.props.offset;
              (w = g >= Math.floor(_) && g < Math.floor(L)),
                (S = g < Math.floor(_) || g >= Math.floor(L));
            } else {
              var x = 0,
                k = 0,
                E = 0;
              if (s.getBoundingClientRect) {
                var T = s.getBoundingClientRect();
                E = T.top;
              }
              if (!h || o.props.isDynamic) {
                if (((h = n.get(p)), !h)) return;
                var I = h.getBoundingClientRect();
                (x = I.top - E + a), (k = x + I.height);
              }
              var O = a - o.props.offset;
              (w = O >= Math.floor(x) && O < Math.floor(k)),
                (S = O < Math.floor(x) || O >= Math.floor(k));
            }
            var me = n.getActiveLink();
            if (S) {
              if (
                (p === me && n.setActiveLink(void 0),
                o.props.hashSpy && ot.default.getHash() === p)
              ) {
                var lt = o.props.saveHashHistory,
                  Nt = lt === void 0 ? !1 : lt;
                ot.default.changeHash("", Nt);
              }
              o.props.spy &&
                o.state.active &&
                (o.setState({ active: !1 }),
                o.props.onSetInactive && o.props.onSetInactive(p, h));
            }
            if (w && (me !== p || o.state.active === !1)) {
              n.setActiveLink(p);
              var xn = o.props.saveHashHistory,
                ti = xn === void 0 ? !1 : xn;
              o.props.hashSpy && ot.default.changeHash(p, ti),
                o.props.spy &&
                  (o.setState({ active: !0 }),
                  o.props.onSetActive && o.props.onSetActive(p, h));
            }
          }
        });
    };
  return (r.propTypes = Ga), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(Pu, "__esModule", { value: !0 });
var oh = ae,
  Ja = Df(oh),
  uh = mr,
  ah = Df(uh);
function Df(e) {
  return e && e.__esModule ? e : { default: e };
}
function sh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qa(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function ch(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var fh = (function (e) {
  ch(t, e);
  function t() {
    var n, r, l, i;
    sh(this, t);
    for (var o = arguments.length, u = Array(o), a = 0; a < o; a++)
      u[a] = arguments[a];
    return (
      (i =
        ((r =
          ((l = qa(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(u),
            ),
          )),
          l)),
        (l.render = function () {
          return Ja.default.createElement("a", l.props, l.props.children);
        }),
        r)),
      qa(l, i)
    );
  }
  return t;
})(Ja.default.Component);
Pu.default = (0, ah.default)(fh);
var ju = {};
Object.defineProperty(ju, "__esModule", { value: !0 });
var dh = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  ph = ae,
  ba = $f(ph),
  mh = mr,
  hh = $f(mh);
function $f(e) {
  return e && e.__esModule ? e : { default: e };
}
function vh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gh(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function yh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var wh = (function (e) {
  yh(t, e);
  function t() {
    return (
      vh(this, t),
      gh(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    dh(t, [
      {
        key: "render",
        value: function () {
          return ba.default.createElement(
            "button",
            this.props,
            this.props.children,
          );
        },
      },
    ]),
    t
  );
})(ba.default.Component);
ju.default = (0, hh.default)(wh);
var Lu = {},
  bl = {};
Object.defineProperty(bl, "__esModule", { value: !0 });
var Sh =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  kh = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  _h = ae,
  es = ei(_h),
  xh = Ef;
ei(xh);
var Eh = _n,
  ts = ei(Eh),
  Ch = Sr,
  ns = ei(Ch);
function ei(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ph(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Th(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Nh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
bl.default = function (e) {
  var t = (function (n) {
    Nh(r, n);
    function r(l) {
      Ph(this, r);
      var i = Th(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, l));
      return (i.childBindings = { domNode: null }), i;
    }
    return (
      kh(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (typeof window > "u") return !1;
            this.registerElems(this.props.name);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (i) {
            this.props.name !== i.name && this.registerElems(this.props.name);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (typeof window > "u") return !1;
            ts.default.unregister(this.props.name);
          },
        },
        {
          key: "registerElems",
          value: function (i) {
            ts.default.register(i, this.childBindings.domNode);
          },
        },
        {
          key: "render",
          value: function () {
            return es.default.createElement(
              e,
              Sh({}, this.props, { parentBindings: this.childBindings }),
            );
          },
        },
      ]),
      r
    );
  })(es.default.Component);
  return (t.propTypes = { name: ns.default.string, id: ns.default.string }), t;
};
Object.defineProperty(Lu, "__esModule", { value: !0 });
var rs =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Oh = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  zh = ae,
  ls = Mu(zh),
  jh = bl,
  Lh = Mu(jh),
  Mh = Sr,
  is = Mu(Mh);
function Mu(e) {
  return e && e.__esModule ? e : { default: e };
}
function Rh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ih(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Dh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ff = (function (e) {
  Dh(t, e);
  function t() {
    return (
      Rh(this, t),
      Ih(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    Oh(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            l = rs({}, this.props);
          return (
            delete l.name,
            l.parentBindings && delete l.parentBindings,
            ls.default.createElement(
              "div",
              rs({}, l, {
                ref: function (o) {
                  r.props.parentBindings.domNode = o;
                },
              }),
              this.props.children,
            )
          );
        },
      },
    ]),
    t
  );
})(ls.default.Component);
Ff.propTypes = { name: is.default.string, id: is.default.string };
Lu.default = (0, Lh.default)(Ff);
var Ri =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  os = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function us(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function as(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function ss(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Yr = ae,
  jt = hr,
  Ii = _n,
  B = Sr,
  ut = ql,
  cs = {
    to: B.string.isRequired,
    containerId: B.string,
    container: B.object,
    activeClass: B.string,
    spy: B.bool,
    smooth: B.oneOfType([B.bool, B.string]),
    offset: B.number,
    delay: B.number,
    isDynamic: B.bool,
    onClick: B.func,
    duration: B.oneOfType([B.number, B.func]),
    absolute: B.bool,
    onSetActive: B.func,
    onSetInactive: B.func,
    ignoreCancelEvents: B.bool,
    hashSpy: B.bool,
    spyThrottle: B.number,
  },
  $h = {
    Scroll: function (t, n) {
      console.warn("Helpers.Scroll is deprecated since v1.7.0");
      var r = n || Ii,
        l = (function (o) {
          ss(u, o);
          function u(a) {
            us(this, u);
            var s = as(
              this,
              (u.__proto__ || Object.getPrototypeOf(u)).call(this, a),
            );
            return i.call(s), (s.state = { active: !1 }), s;
          }
          return (
            os(u, [
              {
                key: "getScrollSpyContainer",
                value: function () {
                  var s = this.props.containerId,
                    m = this.props.container;
                  return s
                    ? document.getElementById(s)
                    : m && m.nodeType
                      ? m
                      : document;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.spy || this.props.hashSpy) {
                    var s = this.getScrollSpyContainer();
                    jt.isMounted(s) || jt.mount(s, this.props.spyThrottle),
                      this.props.hashSpy &&
                        (ut.isMounted() || ut.mount(r),
                        ut.mapContainer(this.props.to, s)),
                      this.props.spy && jt.addStateHandler(this.stateHandler),
                      jt.addSpyHandler(this.spyHandler, s),
                      this.setState({ container: s });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  jt.unmount(this.stateHandler, this.spyHandler);
                },
              },
              {
                key: "render",
                value: function () {
                  var s = "";
                  this.state && this.state.active
                    ? (s = (
                        (this.props.className || "") +
                        " " +
                        (this.props.activeClass || "active")
                      ).trim())
                    : (s = this.props.className);
                  var m = Ri({}, this.props);
                  for (var p in cs) m.hasOwnProperty(p) && delete m[p];
                  return (
                    (m.className = s),
                    (m.onClick = this.handleClick),
                    Yr.createElement(t, m)
                  );
                },
              },
            ]),
            u
          );
        })(Yr.Component),
        i = function () {
          var u = this;
          (this.scrollTo = function (a, s) {
            r.scrollTo(a, Ri({}, u.state, s));
          }),
            (this.handleClick = function (a) {
              u.props.onClick && u.props.onClick(a),
                a.stopPropagation && a.stopPropagation(),
                a.preventDefault && a.preventDefault(),
                u.scrollTo(u.props.to, u.props);
            }),
            (this.stateHandler = function () {
              r.getActiveLink() !== u.props.to &&
                (u.state !== null &&
                  u.state.active &&
                  u.props.onSetInactive &&
                  u.props.onSetInactive(),
                u.setState({ active: !1 }));
            }),
            (this.spyHandler = function (a) {
              var s = u.getScrollSpyContainer();
              if (!(ut.isMounted() && !ut.isInitialized())) {
                var m = u.props.to,
                  p = null,
                  h = 0,
                  w = 0,
                  S = 0;
                if (s.getBoundingClientRect) {
                  var _ = s.getBoundingClientRect();
                  S = _.top;
                }
                if (!p || u.props.isDynamic) {
                  if (((p = r.get(m)), !p)) return;
                  var L = p.getBoundingClientRect();
                  (h = L.top - S + a), (w = h + L.height);
                }
                var f = a - u.props.offset,
                  c = f >= Math.floor(h) && f < Math.floor(w),
                  d = f < Math.floor(h) || f >= Math.floor(w),
                  g = r.getActiveLink();
                if (d)
                  return (
                    m === g && r.setActiveLink(void 0),
                    u.props.hashSpy && ut.getHash() === m && ut.changeHash(),
                    u.props.spy &&
                      u.state.active &&
                      (u.setState({ active: !1 }),
                      u.props.onSetInactive && u.props.onSetInactive()),
                    jt.updateStates()
                  );
                if (c && g !== m)
                  return (
                    r.setActiveLink(m),
                    u.props.hashSpy && ut.changeHash(m),
                    u.props.spy &&
                      (u.setState({ active: !0 }),
                      u.props.onSetActive && u.props.onSetActive(m)),
                    jt.updateStates()
                  );
              }
            });
        };
      return (l.propTypes = cs), (l.defaultProps = { offset: 0 }), l;
    },
    Element: function (t) {
      console.warn("Helpers.Element is deprecated since v1.7.0");
      var n = (function (r) {
        ss(l, r);
        function l(i) {
          us(this, l);
          var o = as(
            this,
            (l.__proto__ || Object.getPrototypeOf(l)).call(this, i),
          );
          return (o.childBindings = { domNode: null }), o;
        }
        return (
          os(l, [
            {
              key: "componentDidMount",
              value: function () {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (o) {
                this.props.name !== o.name &&
                  this.registerElems(this.props.name);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                if (typeof window > "u") return !1;
                Ii.unregister(this.props.name);
              },
            },
            {
              key: "registerElems",
              value: function (o) {
                Ii.register(o, this.childBindings.domNode);
              },
            },
            {
              key: "render",
              value: function () {
                return Yr.createElement(
                  t,
                  Ri({}, this.props, { parentBindings: this.childBindings }),
                );
              },
            },
          ]),
          l
        );
      })(Yr.Component);
      return (n.propTypes = { name: B.string, id: B.string }), n;
    },
  },
  Fh = $h;
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.Helpers =
  Y.ScrollElement =
  Y.ScrollLink =
  Y.animateScroll =
  Y.scrollSpy =
  Y.Events =
  Y.scroller =
  Y.Element =
  Y.Button =
  Ke =
  Y.Link =
    void 0;
var Hh = Pu,
  Hf = Ye(Hh),
  Ah = ju,
  Af = Ye(Ah),
  Uh = Lu,
  Uf = Ye(Uh),
  Bh = _n,
  Bf = Ye(Bh),
  Wh = yr,
  Wf = Ye(Wh),
  Vh = hr,
  Vf = Ye(Vh),
  Qh = Zl,
  Qf = Ye(Qh),
  Yh = mr,
  Yf = Ye(Yh),
  Kh = bl,
  Kf = Ye(Kh),
  Xh = Fh,
  Xf = Ye(Xh);
function Ye(e) {
  return e && e.__esModule ? e : { default: e };
}
var Ke = (Y.Link = Hf.default);
Y.Button = Af.default;
Y.Element = Uf.default;
Y.scroller = Bf.default;
Y.Events = Wf.default;
Y.scrollSpy = Vf.default;
Y.animateScroll = Qf.default;
Y.ScrollLink = Yf.default;
Y.ScrollElement = Kf.default;
Y.Helpers = Xf.default;
Y.default = {
  Link: Hf.default,
  Button: Af.default,
  Element: Uf.default,
  scroller: Bf.default,
  Events: Wf.default,
  scrollSpy: Vf.default,
  animateScroll: Qf.default,
  ScrollLink: Yf.default,
  ScrollElement: Kf.default,
  Helpers: Xf.default,
};
const Zf = ae.createContext(null);
function Gf({ children: e }) {
  const [t, n] = ae.useState(!1),
    [r, l] = ae.useState(!0),
    [i, o] = ae.useState(!0);
  return v.jsx(Zf.Provider, {
    value: {
      isOpen: t,
      setIsOpen: n,
      isShown: r,
      setIsShown: l,
      atTop: i,
      setAtTop: o,
    },
    children: e,
  });
}
Gf.propTypes = { children: Sr.PropTypes.node.isRequired };
const Zh = () => {
  const {
      isOpen: e,
      setIsOpen: t,
      isShown: n,
      setIsShown: r,
      atTop: l,
      setAtTop: i,
    } = ae.useContext(Zf),
    o = ae.useRef(null),
    u = () => {
      t(!e);
    },
    a = () => {
      r(!n);
    },
    s = (p) => {
      o.current && !o.current.contains(p.target) && t(!1);
    },
    m = (p) => {
      n && !e && (p.deltaY > 0 ? r(!1) : r(!0)),
        window.scrollY > 100 ? i(!1) : i(!0);
    };
  return (
    ae.useEffect(() => {
      const p = () => {
        window.innerWidth >= "768" &&
          (document.body.classList.remove("no-scroll"), t(!1));
      };
      return (
        e
          ? document.body.classList.add("no-scroll")
          : document.body.classList.remove("no-scroll"),
        window.addEventListener("resize", p),
        document.addEventListener("mousedown", s),
        document.addEventListener("wheel", m),
        () => {
          window.removeEventListener("resize", p),
            document.removeEventListener("mousedown", s),
            document.body.classList.remove("no-scroll"),
            document.removeEventListener("wheel", m);
        }
      );
    }, [e]),
    v.jsxs(v.Fragment, {
      children: [
        v.jsxs("nav", {
          id: "navBar",
          className: `fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between px-4 ${!n && "-translate-y-full"} delay-75 duration-300 ${l || !n ? "shadow-none" : "shadow-[0px_13px_23px_-11px_rgba(0,0,0,0.41)]"} bg-[#242424b2] backdrop-blur ${l && "bg-inherit"} `,
          children: [
            v.jsx("h3", {
              className:
                "h-full content-center p-2 text-xl hover:text-[#adddbe]",
              children: v.jsxs(Ke, {
                className: "cursor-pointer",
                to: "hero",
                smooth: !0,
                offset: -400,
                duration: 1e3,
                children: [" ", "Emmanuel Idler"],
              }),
            }),
            v.jsxs("ul", {
              className:
                "hidden h-full w-80 items-center justify-between p-2 md:flex",
              children: [
                v.jsx("li", {
                  className: "hover:text-[#adddbe]",
                  children: v.jsx(Ke, {
                    className: "cursor-pointer p-2",
                    to: "about",
                    smooth: !0,
                    offset: 0,
                    duration: 1e3,
                    activeClass: "active",
                    spy: !0,
                    onClick: a,
                    children: "About",
                  }),
                }),
                v.jsx("li", {
                  className: "hover:text-[#adddbe]",
                  children: v.jsx(Ke, {
                    className: "cursor-pointer p-2",
                    to: "projects",
                    smooth: !0,
                    offset: -100,
                    duration: 1e3,
                    activeClass: "active",
                    spy: !0,
                    onClick: a,
                    children: "Projects",
                  }),
                }),
                v.jsx("li", {
                  className: "hover:text-[#adddbe]",
                  children: v.jsx(Ke, {
                    className: "cursor-pointer p-2",
                    to: "contact",
                    smooth: !0,
                    offset: -50,
                    duration: 1e3,
                    activeClass: "active",
                    spy: !0,
                    onClick: a,
                    children: "Contact",
                  }),
                }),
              ],
            }),
          ],
        }),
        !l &&
          v.jsx("div", {
            className:
              "fixed bottom-1 right-2 z-50 rounded bg-[#242424] p-3 md:right-5",
            children: v.jsx(Ke, {
              to: "hero",
              smooth: !0,
              offset: -300,
              duration: 1e3,
              children: v.jsx(V1, {
                className:
                  "size-5 transition-all duration-300 hover:-translate-y-1 hover:text-[#adddbe] md:size-6",
              }),
            }),
          }),
        v.jsx("div", {
          className: `fixed right-5 top-6 z-[52] md:hidden ${!n && "-translate-y-12"} delay-75 duration-300`,
          children: v.jsx("button", {
            onClick: u,
            children: e
              ? v.jsx(F1, { className: "size-7 -translate-x-3" })
              : v.jsx(Q1, { className: "size-6" }),
          }),
        }),
        v.jsx("div", {
          id: "burgerNav",
          ref: o,
          className: `fixed bottom-0 right-0 top-0 z-50 w-96 content-center bg-gray-900 transition-all duration-300 ease-in-out md:hidden ${e ? "translate-x-0" : "translate-x-full"}`,
          children: v.jsxs("ul", {
            className:
              "flex cursor-pointer flex-col items-center justify-evenly gap-8",
            children: [
              v.jsx("li", {
                className: "flex w-full text-center hover:text-[#adddbe]",
                children: v.jsx(Ke, {
                  className: "w-full p-3",
                  to: "about",
                  smooth: !0,
                  offset: -50,
                  duration: 1e3,
                  activeClass: "active",
                  spy: !0,
                  onClick: u,
                  children: "About",
                }),
              }),
              v.jsx("li", {
                className: "flex w-full text-center hover:text-[#adddbe]",
                children: v.jsx(Ke, {
                  className: "w-full p-3",
                  to: "projects",
                  smooth: !0,
                  offset: -50,
                  duration: 1e3,
                  activeClass: "active",
                  spy: !0,
                  onClick: u,
                  children: "Projects",
                }),
              }),
              v.jsx("li", {
                className: "flex w-full text-center hover:text-[#adddbe]",
                children: v.jsx(Ke, {
                  className: "w-full p-3",
                  to: "contact",
                  smooth: !0,
                  offset: -50,
                  duration: 1e3,
                  activeClass: "active",
                  spy: !0,
                  onClick: u,
                  children: "Contact",
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
};
function Gh() {
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx(Zh, {}),
      v.jsx(W1, {}),
      v.jsx(L1, {}),
      v.jsx(A1, {}),
      v.jsx(I1, {}),
      v.jsx(D1, {}),
    ],
  });
}
Di.createRoot(document.getElementById("root")).render(
  v.jsx(mt.StrictMode, { children: v.jsx(Gf, { children: v.jsx(Gh, {}) }) }),
);
