/**
 * WebAR.rocks.hand
 *
 * Copyright (c) 2020 WebAR.rocks ( https://webar.rocks )
 * This code is released under dual licensing:
 *   - GPLv3
 *   - Nominative commercial license
 * Please read https://github.com/WebAR-rocks/WebAR.rocks.hand/blob/master/LICENSE
 *
 */

/* eslint-enable */
/* prettier-ignore */
var StereoAudioRecorder=null,CanvasRecorder=null,isFloat=null,isPot=null,isLinear=null,isMipmap=null,isFlipY=null,array=null,width=null,height=null,url=null,zyp=null,_pnpSolver=null,_pnpSolverStab=null,u0=null,u1=null,u2=null,u3=null,u4=null,u5=null,u6=null,u7=null,u8=null,u9=null,u10=null,u11=null,u12=null,u13=null,u14=null,u15=null,u16=null,u17=null,u18=null,u19=null,u20=null,u21=null,u22=null,u23=null,u24=null,u25=null,u26=null,u27=null,u28=null,u29=null,u30=null,u31=null,u32=null,u33=null,u34=
null,u35=null,u36=null,u37=null,u38=null,u39=null,u40=null,u41=null,u42=null,u43=null,u44=null,u45=null,u46=null,u47=null,u48=null,u49=null,u50=null,u51=null,u52=null,u53=null,u54=null,u55=null,u56=null,u57=null,a0=null,spec=null,attributes=null,_shaders=null;
const WEBARROCKSHAND = (function () {
  function Yb(a) {
    var b = null,
      d = null,
      e = null,
      g = 0,
      m = this,
      n = null,
      q = { gb: [], Pb: "none", Nc: !1, Ob: null, grid: null };
    this.A = function () {
      this.We(n.gb);
      e.Jg({ Pb: n.Pb, Nc: n.Nc, Ob: n.Ob });
    };
    this.Pf = function (l) {
      return b[l];
    };
    this.$b = function (l) {
      ["s32", "s34", "s27"].forEach(function (r) {
        A.S(r, [{ type: "2f", name: "u20", value: l }]);
      });
      b &&
        b.forEach(function (r) {
          r.$b(l);
        });
    };
    this.We = function (l) {
      var r = null;
      g = l.length;
      var v =
          null !== n.grid &&
          a.grid.length &&
          !(1 === a.grid[0] && 1 === a.grid[1]),
        C = v ? n.grid : [1, 1];
      v && this.$b(C);
      b = l.map(function (x, u) {
        x = Object.assign({}, x, {
          index: u,
          parent: m,
          Rb: r,
          cg: u === g - 1,
          $a: v,
          Y: C,
        });
        return (r = u = 0 === u ? Zb.instance(x) : $b.instance(x));
      });
      d = b[0];
      e = b[g - 1];
      b.forEach(function (x, u) {
        0 !== u && x.pg();
      });
    };
    this.Z = function (l) {
      l.h(0);
      var r = l;
      b.forEach(function (v) {
        r = v.Z(r, !1);
      });
      return r;
    };
    this.Of = function () {
      return d.Nf();
    };
    this.Sf = function () {
      return e.J();
    };
    this.Za = function () {
      return e.Rf();
    };
    this.Jd = function () {
      return e.Jd();
    };
    this.m = function () {
      b &&
        (b.forEach(function (l) {
          l.m();
        }),
        (e = d = b = null),
        (g = 0));
    };
    "undefined" !== typeof a && ((n = Object.assign({}, q, a)), this.A());
  }
  function ob(a, b) {
    var d = b % 8;
    return (a[(b - d) / 8] >> (7 - d)) & 1;
  }
  function Hb(a, b, d) {
    var e = 1,
      g = 0;
    for (d = b + d - 1; d >= b; --d) (g += e * ob(a, d)), (e *= 2);
    return g;
  }
  function Ib(a) {
    a = a.data;
    a =
      "undefined" === typeof btoa && "undefined" !== typeof Buffer
        ? Buffer.from(a, "base64").toString("latin1")
        : atob(a);
    for (var b = a.length, d = new Uint8Array(b), e = 0; e < b; ++e)
      d[e] = a.charCodeAt(e);
    return d;
  }
  function pb(a) {
    return "string" === typeof a ? JSON.parse(a) : a;
  }
  function ac(a) {
    if ("undefined" === typeof pb(a).nb) {
      var b = pb(a);
      a = b.ne;
      var d = b.nf,
        e = b.n;
      b = Ib(b);
      for (
        var g = new Float32Array(e),
          m = new Float32Array(d),
          n = a + d + 1,
          q = 0;
        q < e;
        ++q
      ) {
        var l = n * q,
          r = 0 === ob(b, l) ? 1 : -1,
          v = Hb(b, l + 1, a),
          C = b;
        l = l + 1 + a;
        for (var x = m.length, u = 0, F = l; F < l + x; ++F)
          (m[u] = ob(C, F, !0)), ++u;
        for (l = C = 0; l < d; ++l) C += m[l] * Math.pow(2, -l - 1);
        g[q] =
          0 === C && 0 === v
            ? 0
            : r * (1 + C) * Math.pow(2, 1 + v - Math.pow(2, a - 1));
      }
      a = g;
    } else if (((e = pb(a)), (a = e.nb), 0 === a)) a = new Uint8Array(e.nb);
    else {
      d = e.n;
      e = Ib(e);
      b = new Uint32Array(d);
      for (g = 0; g < d; ++g) b[g] = Hb(e, g * a, a);
      a = b;
    }
    return a;
  }
  function qb() {
    da.splice(0);
    Ga.splice(0);
    la.Sb = [];
    var a = ba.na();
    la.Zc = new Uint8Array(a);
    la.eb = new Uint32Array(a);
    la.Ra = new Uint8Array(a);
    for (var b = 0; b < a; ++b)
      da.push(null),
        Ga.push(null),
        la.Sb.push(new Int8Array(ma.switchNNConsecutiveIterations));
  }
  function Ya() {
    if (ia === ea.play) return !1;
    if (null === D.element) return (ia = ea.Ee), !1;
    ia = ea.play;
    Ta.stop();
    Ha.Qd();
    Jb(0);
    return !0;
  }
  function rb() {
    if (ia !== ea.play) return !1;
    va.stop();
    Ta.stop();
    ia = ea.pause;
    return !0;
  }
  function Ia(a, b, d, e, g) {
    a = 4 * (b * Aa + a) + d;
    return e + (ha.buffer[a] / 255 + ha.buffer[a + 4 * Aa] / 65025) * (g - e);
  }
  function bc() {
    var a = ba.na();
    wa.N();
    c.viewport(0, 0, Aa, 2 * a);
    A.set("s62");
    ha.Aa.h(0);
    ha.kb.h(1);
    Q.l(!1, !1);
    return X.enableAsyncReadPixels
      ? aa.Ub(0, 0, Aa, 2 * a, ha.buffer, sb, X.readPixelsAsyncDelay)
      : aa.re(0, 0, Aa, 2 * a, ha.buffer);
  }
  function cc() {
    var a = pa[0],
      b = pa[1];
    if (!a.isDetected || !b.isDetected) return !1;
    if (da[0].X === da[1].X) {
      a = Math.floor(2 * Math.random());
      var d = da[0 === a ? 1 : 0].X;
      da[a] = na.find(function (q) {
        return q.X !== d;
      });
      Ga[a] = da[a];
      return !1;
    }
    var e = a.rz,
      g = b.rz,
      m = -Math.sin(e) - Math.sin(g);
    e = Math.cos(e) + Math.cos(g);
    if (0 === m && 0 === e) return !1;
    g = (a.x - b.x) * V.sb;
    var n = a.y - b.y;
    if (
      (0 === g && 0 === n) ||
      Math.sign((g * e - n * m) * da[0].X) === X.multiDetectionForceChirality
    )
      return !1;
    m = da[0];
    da[0] = da[1];
    da[1] = m;
    m = a.isRightHand;
    a.isRightHand = b.isRightHand;
    b.isRightHand = m;
    a.detected = 1.2;
    b.detected = 1.2;
    Ga[0] = da[0];
    Ga[1] = da[1];
    return !0;
  }
  function dc(a) {
    var b = tb ? Ga[a] : da[a];
    if (null !== b) {
      var d = Oa[a],
        e = ub[a],
        g = pa[a],
        m = 2 * a,
        n = b.Tc;
      d.Wa = Ia(1, m, 1, 0, 1);
      g.detected = La.Ja(g.detected, d.Wa, sa.Oe);
      g.isDetected = g.detected > X.threshold;
      g.neuralNetworkInd = b.ea;
      d.x = Ia(0, m, 1, -1, 1);
      d.y = Ia(0, m, 2, -1, 1);
      d.V = Ia(0, m, 3, 0, 2);
      if (g.isDetected) {
        d.za = Ia(1, m, 0, -n, n);
        var q = Ia(1, m, 2, -1, 1);
        n = Ia(1, m, 3, -1, 1);
        switch (b.Mc) {
          case Za.bc:
            d.hb = b.X * q;
            d.Ya = n;
            break;
          case Za.ld:
            var l = b.W,
              r = l && l.isFlipped;
            q *= n;
            d.hb = l && l.isRightHand ? q : -q;
            d.Ya = r ? n : -n;
        }
        for (n = 0; n < Ma.Gc; ++n)
          (l = 2 + Math.floor(n / 2)),
            (d.xc[n][0] = b.X * Ia(l, m, (n % 2) * 2, -1.2, 1.2)),
            (d.xc[n][1] = Ia(l, m, (n % 2) * 2 + 1, -1.2, 1.2));
        e.dx = d.x - g.x;
        e.dy = d.y - g.y;
        e.qf = d.V - g.s;
        e.pf = R.ta ? d.za : d.za - g.rz;
        e.hf = d.hb - g.rightHand;
        e.gf = d.Ya - g.flipped;
        e = Math.pow(
          ec.jg(ma.qualityFactorRange[0], ma.qualityFactorRange[1], d.Wa),
          sa.Pe
        );
        m = La.Ja(ma.alphaRange[1], ma.alphaRange[0], e);
        g.quality = e;
        vb[a] = e < ma.qualityGoodDetectionThreshold ? hb.Qe : hb.Vf;
        g.x = La.Ja(g.x, d.x, m);
        g.y = La.Ja(g.y, d.y, m);
        g.s = La.Ja(g.s, d.V, m);
        g.rightHand = d.hb;
        g.flipped = d.Ya;
        var v = 1,
          C = 0;
        R.ta
          ? ((v = Math.cos(g.rz)),
            (C = Math.sin(g.rz)),
            (g.rz +=
              b.X *
              Math.max(
                ma.followZRotAlphaFactorRange[0],
                ma.followZRotAlphaFactorRange[1] * m
              ) *
              d.za),
            g.rz > Math.PI && (g.rz -= 2 * Math.PI),
            g.rz < -Math.PI && (g.rz += 2 * Math.PI))
          : (g.rz = La.Ja(g.rz, d.za, m));
        g.isRightHand = X.disableIsRightHandNNEval
          ? b.W.isRightHand
          : 0 < g.rightHand;
        g.isFlipped = 0 < g.flipped;
        for (var x in b.W) g[x] = b.W[x];
        g.landmarks.forEach(function (u, F) {
          var G = d.xc[F];
          F = d.ig[F];
          var f = G[0];
          G = G[1];
          if (R.ta) {
            var y = G * v + f * C;
            f = f * v - G * C;
            G = y;
          }
          F[0] = d.x + f * d.V;
          F[1] = d.y + G * d.V * V.sb;
          u[0] = F[0];
          u[1] = F[1];
        });
        ++d.xa;
      } else
        (b = g.detected < X.thresholdSignal),
          R.ta &&
            (R.mc && b
              ? ((g.rz += 1.5 * n), g.rz > Math.PI && (g.rz -= 2 * Math.PI))
              : R.mc || (g.rz = 0)),
          (vb[a] = hb.je),
          (d.xa = Math.floor(d.xa / 2));
    }
  }
  function fc(a, b) {
    var d = da[a];
    return (
      na.find(function (e) {
        if (e === d) return !1;
        var g = 0;
        if (window.vi) debugger;
        for (var m in e.W)
          if (ma.NNSwitchMask[m]) {
            var n = d.W[m],
              q = e.W[m];
            n = m === b ? !n : n;
            ++g;
            if (q !== n) return !1;
          }
        return 1 <= g;
      }) || d
    );
  }
  function Jb() {
    ia === ea.play &&
      (X.isCleanGLStateAtEachIteration &&
        (A.zd(), Q.reset(), Q.Ea(), c.disable(c.DEPTH_TEST), A.Ka()),
      R.vc
        ? va.Sc(gc, bc, hc, sb, Kb, X.animateProcessOrder)
        : (Lb(), sb(), Kb()));
  }
  function gc() {
    wa.ia();
    D.cb || Lb();
    var a = va.Qf();
    ba.update(a, pa);
    var b = [];
    ++la.fb;
    for (var d = 0; d < a; ++d) {
      var e = ba.Yb(d),
        g = -1 !== b.indexOf(e);
      g || b.push(e);
      var m = da[e];
      if (null === m) m = na[0];
      else if (pa[e].isDetected) {
        g = da[e];
        if (la.eb[e] > ma.switchNNMinIterations) {
          var n = void 0;
          var q = da[e],
            l = Oa[e],
            r = 0;
          var v = null;
          var C = ma.NNSwitchMask;
          for (n in q.W) {
            var x =
              0.5 *
              Math.abs(
                (q.W[n] ? 1 : -1) - { isRightHand: l.hb, isFlipped: l.Ya }[n]
              ) *
              (C[n] ? 1 : 0);
            x /= Math.max(0.01, l.Wa);
            x > r && ((r = x), (v = n));
          }
          n = r;
          n > ma.switchNNErrorThreshold && (g = fc(e, v));
        }
        if (g) {
          m = la.Sb[e];
          m[la.Ra[e]] = g.ea;
          la.Ra[e] = (la.Ra[e] + 1) % ma.switchNNConsecutiveIterations;
          if ((v = g.ea !== da[e].ea))
            for (
              n = 0;
              n < ma.switchNNConsecutiveIterations && ((v = g.ea === m[n]), v);
              ++n
            );
          v ? ((m = g), ++la.Zc[e], (la.eb[e] = 0)) : ((m = da[e]), ++la.eb[e]);
        }
      } else if (!g)
        for (
          X.multiDetectionForceSearchOnOtherSide &&
            ((g = ba.Bf(pa)), -1 !== g && (m = na[(da[g].ea + 1) % na.length])),
            (m && X.multiDetectionForceSearchOnOtherSide) ||
              ((m = null === Ga[e] ? 0 : Ga[e].ea),
              (g = (m + 1) % na.length),
              (g = tb && 0 !== la.fb % 3 ? m : g),
              (m = na[g])),
            la.Zc[e] = 0,
            la.eb[e] = 0,
            g = la.Ra[e] = 0;
          g < ma.switchNNConsecutiveIterations;
          ++g
        )
          la.Sb[e][g] = -1;
      da[e] = m;
      e = ba.Kd();
      if ((m = da[e]))
        (g = ba.na()),
          A.set("s64"),
          A.F("u46", m.X),
          R.ta && A.F("u45", pa[e].rz),
          ba.He("u44"),
          (v = Mb.xf(V.o, pa[e], wb)),
          V.Gb.M(v, wb),
          D.D.h(1),
          ha.Aa.h(0),
          Q.l(!1, !1),
          ha.kb.v(),
          A.set("s3"),
          c.viewport(0, e, Aa, 1),
          A.P("u10", 1, 1 / g),
          A.P("u11", 0, e / g),
          Q.l(!1, !1),
          m.model.Z(V.Gb),
          (Ga[e] = m);
    }
    0 !== X.multiDetectionForceChirality && cc();
    va.Yb();
  }
  function sb() {
    wa.Sg();
    Z.reset();
    X.isCleanGLStateAtEachIteration && (wa.reset(), c.enable(c.DEPTH_TEST));
    R.dc && R.dc(ba.de() ? pa : pa[0]);
    X.isCleanGLStateAtEachIteration && (Q.reset(), Q.Ea(), c.disable(c.BLEND));
  }
  function hc() {
    for (var a = 0; a < ba.na(); ++a) ba.hg(a) && dc(a);
    X.multiDetectionEqualizeSearchSlotScale && ba.wf(pa);
  }
  function Kb() {
    ia === ea.play && Ta.Sc(Jb);
  }
  function Lb() {
    if (D.Ib)
      D.element.needsUpdate &&
        (D.D.ye(D.element.videoWidth, D.element.videoHeight),
        D.D.Ma(D.element.arrayBuffer),
        (D.element.needsUpdate = !1));
    else {
      var a = D.element.currentTime,
        b = a - D.Tb;
      0 > b && (D.Tb = a);
      1e3 * b < sa.Vg || ((D.Tb += b), D.D.refresh());
    }
  }
  function ic() {
    function a(g, m) {
      A.S(g, [{ name: "u40", type: "1f", value: m / Aa }]);
    }
    function b() {
      return Ma.labels.map(function () {
        return [0, 0];
      });
    }
    var d = ba.na();
    Aa = 2 + Ma.Ic;
    var e = new Float32Array(4 * Aa);
    e = { width: Aa, height: d, isFloat: !0, isPot: !1, array: ba.rf(e) };
    ha.Aa = jc.instance(e);
    ha.kb = Z.instance(e);
    ha.buffer = new Uint8Array(8 * Aa * d);
    ha.Yc = e.array;
    a("s63", 0.5);
    a("s62", 1);
    a("s64", 0.5);
    Oa = ba.jc({
      Wa: 0,
      x: 0,
      y: 0,
      V: 1,
      za: 0,
      hb: 0,
      Ya: 0,
      xc: b(),
      ig: b(),
      xa: 0,
    });
    pa = ba.jc({
      detected: 0,
      isDetected: !1,
      x: 0,
      y: 0,
      s: 1,
      rz: 0,
      neuralNetworkInd: -1,
      isRightHand: !0,
      isFlipped: !1,
      rightHand: 0,
      flipped: 0,
      quality: 0,
      landmarks: b(),
    });
    ub = ba.jc({ dx: 0, dy: 0, qf: 0, pf: 0, hf: 0, gf: 0 });
  }
  function kc() {
    na.forEach(function (a) {
      a.model && a.model.m();
    });
    na.splice(0);
    qb();
    Ha.m();
    ub = pa = Oa = null;
  }
  function xb() {
    A.S("s64", [
      { type: "1i", name: "u1", value: 1 },
      { type: "1i", name: "u42", value: 0 },
      { type: "2f", name: "u43", value: V.H },
      { type: "1f", name: "u44", value: 0.5 },
      { type: "1f", name: "u45", value: 0 },
    ]);
    var a = [
      { type: "1i", name: "u47", value: 0 },
      { type: "1f", name: "u53", value: ha.size },
    ];
    A.S(
      "s63",
      [
        { type: "1i", name: "u42", value: 1 },
        { type: "1f", name: "u50", value: sa.Qg },
        { type: "1f", name: "u51", value: X.threshold },
        { type: "1f", name: "u44", value: 0.5 },
        { type: "1f", name: "u52", value: 1 },
        { type: "1f", name: "u45", value: 0 },
      ].concat(a)
    );
    A.S("s66", [{ type: "1f", name: "u52", value: 1 }].concat(a));
    A.S("s67", a);
    A.S("s62", [
      { type: "1i", name: "u42", value: 0 },
      { type: "1i", name: "u55", value: 1 },
      { type: "1f", name: "u57", value: 0.5 * V.H[0] },
      { type: "2f", name: "u56", value: [0, 0.5 / ba.na()] },
    ]);
  }
  function yb() {
    var a = na[0].model;
    ha.size = a.Sf();
    wb = a.Of();
    V.H[0] = 1;
    V.H[1] = V.o / V.K;
    Pa.A({
      Qb: X.overlapFactors,
      ie: X.nScaleLevels,
      o: V.o,
      K: V.K,
      te: X.scale0Factor,
      $: na[0].$,
    });
  }
  function Nb(a) {
    if (null !== R.lb) Ob(R.lb, a);
    else {
      if (!R.mb)
        throw Error(
          "You should provide neural networks through NNs or NNsPath option"
        );
      lc(R.mb, function (b) {
        Ob(b, a);
      });
    }
  }
  function lc(a, b) {
    var d = a.length,
      e = Array(d),
      g = 0;
    a.forEach(function (m, n) {
      ib.get(m, function (q) {
        q = JSON.parse(q);
        q.Me = m.split("/").pop();
        e[n] = q;
        ++g === d && b(e);
      });
    });
  }
  function Ob(a, b) {
    (a.length ? a : [a]).forEach(mc);
    b(a);
  }
  function mc(a, b) {
    var d = 0,
      e = sa.$.slice(0),
      g = null,
      m = Za.bc;
    if (a.exportData) {
      var n = a.exportData;
      n.rzMax && (d = n.rzMax * nc);
      n.translationScalingFactors && (e = n.translationScalingFactors);
      n.evaluationConditions && (g = n.evaluationConditions);
      n.outputFormat &&
        (m = { ABSOLUTE: Za.bc, RELATIVE: Za.ld }[n.outputFormat]);
      0 === b && oc(n, Ma);
    }
    na.push({ Tc: d, W: g, id: a.Me, $: e, X: 1, ea: -1, model: null, Mc: m });
  }
  function oc(a, b) {
    b.oe = a.keypoints;
    b.labels = a.keypoints.map(function (d) {
      return d.label;
    });
    b.Gc = a.keypoints.length;
    b.Ic = Math.ceil(b.Gc / 2);
  }
  function pc(a, b) {
    a = new Yb({ gb: a.layers, Pb: "gpuRawAvg", Ob: qc });
    na[b].model = a;
  }
  function rc() {
    if (
      Ha.A({
        ub: R.aa,
        width: V.o,
        height: V.K,
        Ud: !1,
        debug: !1,
        Kc: function () {
          Qa("GLCONTEXT_LOST");
        },
        antialias: !1,
        premultipliedAlpha: !0,
      })
    )
      return !0;
    Qa("GL_INCOMPATIBLE");
    return !1;
  }
  function qc() {
    var a = ba.Kd(),
      b = da[a],
      d = pa[a];
    ha.Aa.yg(1);
    c.viewport(0, a, 1, 1);
    A.set("s63");
    A.F("u46", b.X);
    b = b.$;
    var e = d.isDetected
      ? X.translationScalingFactors
      : X.translationScalingFactorsScan;
    A.Eg("u49", b[0] * e[0] * V.H[0], b[1] * e[1] * V.H[1], b[2] * e[2]);
    R.ta && A.F("u45", d.rz);
    ba.He("u44");
    b = 1;
    e = ba.Lg(Oa, pa, V.o / V.K);
    ba.de() &&
      (e &&
        ((b = 0),
        (Oa[a].xa = 0),
        (d.isDetected = !1),
        (d.detected = 0),
        Pa.qg(a)),
      A.F("u52", b));
    A.Fg("u48", Pa.get(a));
    Q.l(!1, !1);
    if (ba.ce() || e)
      c.viewport(1, a, 1, 1), A.set("s66"), A.F("u52", b), Q.l(!1, !1);
    ba.ce() && (c.viewport(2, a, Ma.Ic, 1), A.set("s67"), Q.l(!1, !1));
    ha.Aa.sync();
  }
  function Pb() {
    D.D && D.D.remove();
    D.Ib = D.element.isFakeVideo ? !0 : !1;
    var a = null;
    D.Ib
      ? (a = {
          isFlipY: !1,
          array: D.element.arrayBuffer,
          width: D.element.videoWidth,
          height: D.element.videoHeight,
          isKeepArray: !0,
        })
      : D.element && (a = { L: D.element });
    D.$c = Z.instance(
      Object.assign({ isPot: !1, isLinear: !0, isFloat: !1 }, a)
    );
    D.D = D.$c;
  }
  function Ua() {
    var a = [{ type: "mat2", name: "u41", value: D.B }];
    A.S("s65", [{ type: "1i", name: "u1", value: 0 }].concat(a));
    A.S("s64", a);
  }
  function Va() {
    var a = [0.5, 0.5],
      b = D.H[1] / D.H[0],
      d = Ha.ba() / Ha.J();
    90 === Math.abs(xa.rotate) && (b = 1 / b);
    b > d ? (a[1] *= d / b) : (a[0] *= b / d);
    A.S("s63", [{ name: "u54", type: "1f", value: d }]);
    D.B[0] = 0;
    D.B[1] = 0;
    D.B[2] = 0;
    D.B[3] = 0;
    switch (xa.rotate) {
      case 0:
        D.B[0] = a[0];
        D.B[3] = a[1];
        break;
      case 180:
        D.B[0] = -a[0];
        D.B[3] = -a[1];
        break;
      case 90:
        D.B[1] = a[0];
        D.B[2] = -a[1];
        break;
      case -90:
        (D.B[1] = -a[0]), (D.B[2] = a[1]);
    }
    D.ga[0] = D.B[0];
    D.ga[1] = D.B[1];
    D.ga[2] = D.B[2];
    D.ga[3] = D.B[3];
    D.cb || ((D.B[1] *= -1), (D.B[3] *= -1));
    D.cb && D.Wd && ((D.ga[1] *= -1), (D.ga[3] *= -1));
  }
  function zb() {
    if (!D.element) return !1;
    var a = D.element.videoWidth,
      b = D.element.videoHeight,
      d = D.H[0] !== a || D.H[1] !== b;
    d && ((D.H[0] = a), (D.H[1] = b));
    return d;
  }
  function $a(a, b) {
    if (ia === ea.error) return !1;
    D.element = a;
    zb();
    b && b();
    return !0;
  }
  function Ab(a) {
    D.Jc && D.Jc();
    D.Ta = {
      video: {
        focusMode: { ideal: "continuous" },
        facingMode: { ideal: xa.facingMode },
        width: { min: xa.minWidth, max: xa.maxWidth, ideal: xa.idealWidth },
        height: { min: xa.minHeight, max: xa.maxHeight, ideal: xa.idealHeight },
      },
      audio: !1,
    };
    Y.nd(D.Ta, xa.deviceId);
    Y.get(
      D.element ? D.element : Y.Od(),
      function (b) {
        D.Lc && D.Lc(b);
        a(b);
      },
      function () {
        Qa("WEBCAM_UNAVAILABLE");
      },
      D.Ta
    );
  }
  function Qa(a) {
    ia !== ea.error && ((ia = ea.error), R.Sa && R.Sa(a));
  }
  function sc() {
    for (var a = na.length, b = 0; b < a; ++b) {
      var d = na[b],
        e = d.W;
      e &&
        !0 === e.isRightHand &&
        ((e = Object.assign({}, e, { isRightHand: !1 })),
        na.push({
          Tc: d.Tc,
          W: e,
          id: d.id ? d.id.replace("_R", "_L") + "(GEN)" : "GEN",
          $: d.$,
          X: -1,
          ea: -1,
          model: d.model,
          Mc: d.Mc,
        }));
    }
  }
  function Qb(a) {
    a.forEach(pc);
    sa.uf && sc();
    na.forEach(function (b, d) {
      b.ea = d;
    });
    ic();
    yb();
    xb();
  }
  function tc(a) {
    if (!rc()) return !1;
    A.ob([
      {
        id: "s65",
        name: "_",
        Ba: "attribute vec2 a0;uniform mat2 u41;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u41*a0*vec2(1.,-1.);}",
        tb: ["a0"],
        Pa: [2],
        g: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
        i: ["u1", "u41"],
        precision: "lowp",
      },
      {
        id: "s64",
        name: "_",
        g: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
        Ba: "attribute vec2 a0;uniform sampler2D u42;uniform mat2 u41;uniform vec2 u43;uniform float u44,u40,u45,u46;varying vec2 vv0;void main(){vec2 d=a0*vec2(u46,1.);vec4 a=texture2D(u42,vec2(u40,u44));vec2 f=a.gb,g=a.a*u43;float b=cos(u45),c=sin(u45);vec2 h=mat2(b,c,-c,b)*d,i=f+.5*h*g;vv0=.5+2.*u41*(i-.5),gl_Position=vec4(a0,0.,1.);}",
        tb: ["a0"],
        Pa: [2],
        i: "u1 u42 u43 u44 u40 u45 u46 u41".split(" "),
        precision: "lowp",
      },
      {
        id: "s63",
        name: "_",
        g: "uniform sampler2D u47,u42;uniform vec3 u48,u49;uniform float u50,u51,u44,u40,u52,u53,u45,u54,u46;const vec4 e=vec4(.25,.25,.25,.25);void main(){float b=(u53-.5)/u53;vec4 f=texture2D(u47,vec2(.5/u53,b)),a=texture2D(u42,vec2(u40,u44));bool g=dot(f,e)>u51;a.r<-.5?a.r+=1.:g?a.r=2.:a.r>u50?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r=mix(-2.,a.r,u52);if(a.r<.9)a=vec4(1.,u48);else{a.r*=step(1.9,a.r);float h=-u46*dot(e,texture2D(u47,vec2(1.5/u53,b))),i=-dot(e,texture2D(u47,vec2(2.5/u53,b))),j=-dot(e,texture2D(u47,vec2(3.5/u53,b))),c=cos(u45),d=sin(u45);vec2 k=mat2(c,d*u54,-d/u54,c)*vec2(h,i);a.gba+=vec3(k,j)*u49*a.a;}gl_FragColor=a;}",
        Ba: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
        i: "u47 u42 u48 u50 u49 u52 u51 u44 u40 u53 u46 u45 u54".split(" "),
      },
      {
        id: "s66",
        name: "_",
        Ba: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
        g: "uniform sampler2D u47;uniform float u53,u52;const vec4 e=vec4(.25,.25,.25,.25);void main(){float a=(u53-.5)/u53,b=-dot(e,texture2D(u47,vec2(4.5/u53,a))),c=dot(e,texture2D(u47,vec2(.5/u53,a))),d=dot(e,texture2D(u47,vec2(5.5/u53,a))),f=dot(e,texture2D(u47,vec2(6.5/u53,a)));vec4 g=.5+vec4(b*u52,c*u52,d,f)*.5;gl_FragColor=g;}",
        i: ["u47", "u53", "u52"],
      },
      {
        id: "s67",
        name: "_",
        Ba: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
        g: "uniform sampler2D u47;uniform float u53;const vec4 e=vec4(.25,.25,.25,.25),h=vec4(.5,.5,.5,.5);vec2 f(float a){float b=floor(a/u53),c=a-b*u53;return vec2(c,u53-.5-b)/u53;}vec2 g(float a){vec2 b=f(a*2.),c=f(a*2.+1.);float d=dot(e,texture2D(u47,b)),i=dot(e,texture2D(u47,c));return vec2(d,i);}void main(){float a=2.*gl_FragCoord.x;vec2 b=g(a-1.),c=g(a);gl_FragColor=h+.5*vec4(b,c)/1.2;}",
        i: ["u47", "u53"],
      },
      {
        id: "s62",
        name: "_",
        g: "uniform sampler2D u42,u55;uniform vec2 u56;uniform float u57,u40;varying vec2 vv0;void main(){float g=step(.5,mod(gl_FragCoord.y+1.5,2.)),a=step(u40,vv0.x);vec2 d=vv0+u56;vec4 b=mix(texture2D(u55,d),texture2D(u42,d),vec4(1.,a,a,a));b.a*=mix(u57,1.,a);vec4 f=floor(255.*b),h=255.*(255.*b-f),c=mix(f,h,g)/255.;c.x=mix(step(b.x,1.5),c.x,a),gl_FragColor=c;}",
        i: ["u42", "u55", "u57", "u56", "u40"],
      },
    ]);
    Qb(a);
    jb();
  }
  function jb() {
    if (!kb && ia !== ea.Nb && ia !== ea.error && 2 === ++Rb) {
      Pb();
      null !== D.element && (Va(), Ua());
      for (var a = ba.na(), b = 0; b < a; ++b) vb.push(hb.je);
      Bb = !0;
      R.Sa &&
        R.Sa(!1, {
          GL: c,
          canvasElement: R.aa,
          video: D.element,
          videoTexture: D.D ? D.D.get() : null,
          videoTransformMat2: D.B,
          maxHandsDetected: a,
          landmarksLabels: Ma.labels,
        });
      Ya();
    }
  }
  var Cb = null,
    La = {
      Uh: function (a) {
        return Math.ceil(Math.log2(a));
      },
      pi: function (a) {
        return Math.log2(a);
      },
      li: function (a) {
        return 0 === Math.log2(a) % 1;
      },
      gh: function (a) {
        var b = [0, 0, 0, 0];
        a.forEach(function (d) {
          b[0] += d[0];
          b[1] += d[1];
          b[2] += d[2];
          b[3] += d[3];
        });
        return b;
      },
      hh: function (a, b, d) {
        return Math.min(Math.max(a, b), d);
      },
      kh: function (a) {
        return (a * Math.PI) / 180;
      },
      yi: function (a, b) {
        b = Math.pow(10, b);
        return Math.round(a * b) / b;
      },
      zi: function (a) {
        return Math.round(1e6 * a) / 1e6;
      },
      Vh: function (a, b) {
        return ((100 * a) / b).toFixed(3);
      },
      Ja: function (a, b, d) {
        return a * (1 - d) + b * d;
      },
      ri: function (a, b) {
        return a[0] * (1 - b) + a[1] * b;
      },
      mf: function (a, b) {
        return La.bf(a - b);
      },
      bf: function (a) {
        for (; a > Math.PI; ) a -= 2 * Math.PI;
        for (; a <= -Math.PI; ) a += 2 * Math.PI;
        return a;
      },
      oh: function (a, b) {
        return Math.abs(La.mf(a, b));
      },
      Wg: function (a, b) {
        return Math.atan2(Math.sin(a) + Math.sin(b), Math.cos(a) + Math.cos(b));
      },
    },
    ib = {
      get: function (a, b, d) {
        var e = new XMLHttpRequest();
        e.open("GET", a, !0);
        e.withCredentials = !1;
        e.onreadystatechange = function () {
          4 === e.readyState &&
            (200 === e.status || 0 === e.status
              ? b(e.responseText)
              : "undefined" !== typeof d && d(e.status));
        };
        e.send();
      },
      Tf: function (a) {
        return new Promise(function (b, d) {
          ib.get(a, b, d);
        });
      },
      Rh: function (a, b, d) {
        a += d ? "?" + ib.vf(d) : "";
        ib.get(a, function (e) {
          b(JSON.parse(e));
        });
      },
      ti: function (a, b, d) {
        var e = new XMLHttpRequest();
        e.open("POST", a, !0);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        e.onreadystatechange = function () {
          4 !== e.readyState ||
            (200 !== e.status && 0 !== e.status) ||
            d(e.responseText);
        };
        e.send(b);
      },
      vf: function (a) {
        return "string" === typeof a
          ? a
          : Object.keys(a)
              .map(function (b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a[b]);
              })
              .join("&");
      },
      Fh: function (a, b) {
        var d = new XMLHttpRequest();
        d.open("POST", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function () {
          b(d.response);
        };
        d.send();
      },
    },
    uc = {
      create: function (a, b) {
        for (var d = Array(b), e = 0; e < b; ++e) d[e] = a;
        return d;
      },
      lh: function (a, b) {
        for (var d = 0; d < a.length; ++d) b[d] = a[d];
      },
      clone: function (a) {
        for (var b = Array(a.length), d = 0; d < a.length; ++d) b[d] = a[d];
        return b;
      },
      Ci: function (a, b, d) {
        a.forEach(function (e, g) {
          b[g] = e * d;
        });
      },
      Li: function (a) {
        for (var b = a.length - 1; 0 < b; --b) {
          var d = Math.floor(Math.random() * (b + 1)),
            e = a[b];
          a[b] = a[d];
          a[d] = e;
        }
      },
      Ni: function (a) {
        return a.sort(function (b, d) {
          return b - d;
        });
      },
      Pg: function (a) {
        return (
          Array.isArray(a) ||
          a.constructor === Float32Array ||
          a.constructor === Uint8Array
        );
      },
    },
    Db = {
      hc: function (a, b) {
        if (0 === b || "object" !== typeof a) return a;
        a = Object.assign({}, a);
        b = void 0 === b || -1 === b ? -1 : b - 1;
        for (var d in a) a[d] = Db.hc(a[d], b);
        return a;
      },
      nh: function (a) {
        return JSON.parse(JSON.stringify(a));
      },
    },
    ec = {
      Mi: function (a, b, d) {
        a = Math.min(Math.max((d - a) / (b - a), 0), 1);
        return a * a * (3 - 2 * a);
      },
      jg: function (a, b, d) {
        return Math.min(Math.max((d - a) / (b - a), 0), 1);
      },
      zh: function (a, b, d, e) {
        return Math.pow(Math.min(Math.max((e - a) / (b - a), 0), 1), d);
      },
      Si: function () {
        return 0;
      },
      si: function () {
        return 1;
      },
      oi: function (a) {
        return a;
      },
      wh: function (a) {
        return a * a;
      },
      Bh: function (a) {
        return a * (2 - a);
      },
      th: function (a) {
        return 0.5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a;
      },
      rh: function (a) {
        return a * a * a;
      },
      Ah: function (a) {
        return --a * a * a + 1;
      },
      sh: function (a) {
        return 0.5 > a
          ? 4 * a * a * a
          : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
      },
      xh: function (a) {
        return a * a * a * a;
      },
      Ch: function (a) {
        return 1 - --a * a * a * a;
      },
      uh: function (a) {
        return 0.5 > a ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a;
      },
      yh: function (a) {
        return a * a * a * a * a;
      },
      Dh: function (a) {
        return 1 + --a * a * a * a * a;
      },
      vh: function (a) {
        return 0.5 > a ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a;
      },
    },
    vc = {
      Ef: function (a, b, d) {
        switch (a) {
          case "relu":
            return d + "=max(vec4(0.)," + b + ");";
          case "elu":
            return (
              d +
              "=mix(exp(-abs(" +
              b +
              "))-vec4(1.)," +
              b +
              ",step(0.," +
              b +
              "));"
            );
          case "elu01":
            return (
              d +
              "=mix(0.1*exp(-abs(" +
              b +
              "))-vec4(0.1)," +
              b +
              ",step(0.," +
              b +
              "));"
            );
          case "arctan":
            return d + "=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;";
          case "copy":
            return "";
          case "gelu":
            return (
              d +
              "=" +
              d +
              ";\n          vec4 zou=" +
              b +
              ";\n          vec4 polyZou=0.7978845608028654*(zou+0.044715*zou*zou*zou);\n          vec4 exZou=exp(-abs(polyZou));\n          vec4 exZou2=exZou*exZou;\n          vec4 tanhZou=sign(polyZou)*(vec4(1.)-exZou2)/(vec4(1.)+exZou2);\n          " +
              d +
              "=0.5*zou*(vec4(1.)+tanhZou);"
            );
          default:
            return !1;
        }
      },
    },
    A = (function () {
      function a(k, p, K) {
        p = k.createShader(p);
        k.shaderSource(p, K);
        k.compileShader(p);
        return k.getShaderParameter(p, k.COMPILE_STATUS) ? p : null;
      }
      function b(k, p, K) {
        p = a(k, k.VERTEX_SHADER, p);
        K = a(k, k.FRAGMENT_SHADER, K);
        k === c && q.push(p, K);
        var M = k.createProgram();
        k.attachShader(M, p);
        k.attachShader(M, K);
        k.linkProgram(M);
        return M;
      }
      function d(k) {
        return ["float", "sampler2D", "int"]
          .map(function (p) {
            return "precision " + k + " " + p + ";\n";
          })
          .join("");
      }
      function e(k, p) {
        p.u = p.u ? !0 : !1;
        if (!p.u) {
          p.Ba =
            p.Ba ||
            "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5);}";
          p.tb = p.tb || ["a0"];
          p.Pa = p.Pa || [2];
          p.precision = p.precision || x;
          p.id = v++;
          void 0 !== p.we &&
            (p.we.forEach(function (P, fa) {
              p.g = p.g.replace(P, p.Vb[fa]);
            }),
            p.we.splice(0));
          p.gd = 0;
          p.Pa.forEach(function (P) {
            p.gd += 4 * P;
          });
          var K = d(p.precision);
          p.ya = b(k, K + p.Ba, K + p.g);
          p.C = {};
          p.i.forEach(function (P) {
            p.C[P] = k.getUniformLocation(p.ya, P);
          });
          p.attributes = {};
          p.Qa = [];
          p.tb.forEach(function (P) {
            var fa = k.getAttribLocation(p.ya, P);
            p.attributes[P] = fa;
            p.Qa.push(fa);
          });
          if (p.j) {
            k.useProgram(p.ya);
            r = p;
            l = p.id;
            for (var M in p.j) k.uniform1i(p.C[M], p.j[M]);
          }
          p.wa = !0;
        }
      }
      function g(k) {
        Ba.Cg(N);
        l !== k.id &&
          (N.O(),
          (l = k.id),
          (r = k),
          c.useProgram(k.ya),
          k.Qa.forEach(function (p) {
            0 !== p && c.enableVertexAttribArray(p);
          }));
      }
      function m(k, p, K) {
        e(k, p, K);
        k.useProgram(p.ya);
        k.enableVertexAttribArray(p.attributes.a0);
        l = -1;
        return (r = p);
      }
      function n() {
        return {
          g: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
          i: ["u1"],
          j: { u1: 0 },
        };
      }
      var q = [],
        l = -1,
        r = null,
        v = 0,
        C = !1,
        x = "highp",
        u = ["u1"],
        F = ["u0"],
        G = { u1: 0 },
        f = { u0: 0 },
        y = { u1: 0, u2: 1 },
        J = { u1: 0, u3: 1 },
        B = ["u1", "u3", "u4"],
        z = { u5: 0 },
        h = ["u6", "u7", "u8", "u9"],
        t = { u6: 0, u7: 1 },
        H = {
          s0: n(),
          s1: {
            g: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
            i: u,
            j: G,
            precision: "lowp",
          },
          s2: {
            g: "uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}",
            i: ["u1", "u2"],
            j: y,
          },
          s3: {
            g: "uniform sampler2D u1;uniform vec2 u10,u11;varying vec2 vv0;void main(){vec2 a=vv0*u10+u11;gl_FragColor=texture2D(u1,a);}",
            i: ["u1", "u10", "u11"],
            j: G,
            u: !0,
          },
          s4: {
            g: "uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}",
            i: u,
            j: G,
          },
          s5: {
            g: "uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}",
            i: ["u1", "u2"],
            j: y,
          },
          s6: {
            g: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}",
            i: u,
            j: G,
          },
          s7: {
            g: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}",
            i: u,
            j: G,
          },
          s8: {
            g: "uniform sampler2D u0;uniform float u10;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u10;}",
            i: ["u0", "u10"],
            j: f,
          },
          s9: {
            g: "uniform sampler2D u0;uniform float u10;varying vec2 vv0;const vec4 f=vec4(.25),g=vec4(1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u10,f);gl_FragColor=b*g;}",
            i: ["u0", "u10"],
            j: f,
          },
          s10: {
            g: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}",
            i: u,
            j: G,
          },
          s11: {
            g: "uniform sampler2D u1,u12;uniform float u13;const vec4 f=vec4(1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u12,vv0);gl_FragColor=mix(b,a,u13*f);}",
            i: ["u1", "u12", "u13"],
            j: { u1: 0, u12: 1 },
          },
          s12: {
            g: "uniform sampler2D u1;uniform vec2 u14;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u14)+texture2D(u1,vv0+u14*vec2(1.,-1.))+texture2D(u1,vv0+u14*vec2(-1.,-1.))+texture2D(u1,vv0+u14*vec2(-1.,1.)));}",
            i: ["u1", "u14"],
            j: G,
          },
          s13: {
            g: "uniform sampler2D u1;varying vec2 vv0;vec4 f(vec3 d){vec3 b=d/65536.,a=clamp(ceil(log2(b)),-128.,127.);float c=max(max(a.r,a.g),a.b),g=exp2(c);vec3 h=clamp(b/g,0.,1.);return vec4(h,(c+128.)/256.);}void main(){vec3 a=texture2D(u1,vv0).rgb;gl_FragColor=f(a);}",
            i: u,
            j: G,
            u: !0,
          },
          s14: {
            g: "uniform sampler2D u1;varying vec2 vv0;vec3 f(vec4 a){float b=a.a*256.-128.;vec3 c=a.rgb;return exp2(b)*c*65536.;}void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=vec4(f(a),1.);}",
            i: u,
            j: G,
            u: !0,
          },
          s15: {
            g: "uniform sampler2D u1;uniform vec4 u15;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u15);gl_FragColor=j(a);}",
            i: ["u1", "u15"],
            j: G,
          },
          s16: {
            g: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}",
            i: F,
            j: f,
            u: !0,
          },
          s17: {
            g: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}",
            i: F,
            j: f,
            u: !0,
          },
          s18: {
            g: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.);const float g=.797885,h=.044715;vec4 i(vec4 a){vec4 b=exp(-abs(a)),c=b*b,d=sign(a)*(e-c)/(e+c);return d;}void main(){vec4 a=texture2D(u0,vv0),b=a+h*a*a*a,c=i(g*b);gl_FragColor=.5*a*(e+c);}",
            i: F,
            j: f,
            u: !0,
          },
          s19: {
            g: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}",
            i: F,
            j: f,
            u: !0,
          },
          s20: {
            g: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(a)-f;gl_FragColor=mix(.1*b,a,step(0.,a));}",
            i: F,
            j: f,
          },
          s21: {
            g: "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}",
            i: F,
            j: f,
          },
          s22: {
            g: "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=2.*atan(e*texture2D(u0,vv0))/e;}",
            i: F,
            j: f,
            u: !0,
          },
          s23: {
            g: "uniform sampler2D u0,u16;uniform float u17;const vec2 e=vec2(.5);const float f=1e-5;const vec4 g=vec4(1.),i=vec4(0.);varying vec2 vv0;void main(){vec4 a=texture2D(u16,e);float b=u17*u17;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}",
            i: ["u0", "u16", "u17"],
            j: { u0: 0, u16: 1 },
            u: !0,
          },
          s24: {
            g: "uniform sampler2D u1;uniform vec2 u18;varying vec2 vv0;void main(){float a=u18.x*u18.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u18.y),f=floor(u18.x*fract(b*u18.y)),g=(f*u18.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}",
            i: ["u1", "u18"],
            j: G,
          },
          s25: {
            g: "uniform sampler2D u7,u6,u19;varying vec2 vv0;void main(){vec4 a=texture2D(u19,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u7,b),f=texture2D(u6,c);gl_FragColor=d*f;}",
            i: ["u7", "u6", "u19"],
            j: Object.assign({ u19: 2 }, t),
            u: !0,
          },
          s26: {
            g: "uniform float u8,u9;uniform sampler2D u7,u6;varying vec2 vv0;void main(){vec2 b=fract(vv0*u8);float a=u8*u9;vec2 c=(vec2(.5)+floor(a*vv0))/a;vec4 d=texture2D(u7,c),f=texture2D(u6,b);gl_FragColor=d*f;}",
            i: h,
            j: t,
          },
          s27: {
            g: "uniform float u8,u9;uniform vec2 u20;uniform sampler2D u7,u6;varying vec2 vv0;void main(){float a=u8*u9;vec2 b=mod(vv0*u20,vec2(1.)),c=floor(vv0*u20)/u20,d=c+fract(b*u8)/u20,f=(vec2(.5)+floor(a*b))/a;vec4 g=texture2D(u7,f),h=texture2D(u6,d);gl_FragColor=g*h;}",
            i: ["u20"].concat(h),
            j: t,
            u: !0,
          },
          s28: {
            g: "uniform float u8,u9;uniform sampler2D u7,u6,u22,u23,u24,u25;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 c=fract(vv0*u8),d=vv0;float h=u8*u9;d=(.5+floor(h*vv0))/h;vec4 l=texture2D(u7,d),m=texture2D(u6,c),a=texture2D(u25,d);a=floor(.5+a*255.);vec4 n=texture2D(u22,c),o=texture2D(u23,c),p=texture2D(u24,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b,r=i*m+j*n+k*o+q*p;gl_FragColor=l*r;}",
            i: ["u25", "u22", "u23", "u24"].concat(h),
            j: Object.assign({ u25: 3, u22: 4, u23: 5, u24: 6 }, t),
            u: !0,
          },
          s29: {
            g: "uniform sampler2D u7,u6,u3;uniform float u8,u26,u27,u9;uniform vec2 u28;varying vec2 vv0;const vec2 f=vec2(1.),l=vec2(0.);void main(){vec2 c=floor(u26*vv0),d=u26*vv0-c;float g=u8/u26;vec2 h=floor(d*g),i=d*g-h,j=(c+i)/u26;float m=u26*u9/u8;vec2 b=m*h,n=floor(.5*(u9-1.)*(f-u28));b=floor(u28*b+n);vec2 a=(b+i*u27)/u9;a+=.25/u9;vec2 k=step(a,f)*step(l,a);vec4 o=texture2D(u7,j),p=texture2D(u6,a),q=o*p,r=texture2D(u3,j);gl_FragColor=(q*u27*u27+r)*k.x*k.y;}",
            i: ["u26", "u27", "u3", "u28"].concat(h),
            j: Object.assign({ u3: 2 }, t),
          },
          s30: {
            g: "uniform sampler2D u7,u6;varying vec2 vv0;void main(){vec4 a=texture2D(u7,vv0),b=texture2D(u6,vv0);gl_FragColor=a*b;}",
            i: ["u7", "u6"],
            j: t,
            u: !0,
          },
          s31: {
            g: "uniform sampler2D u1,u3;uniform float u4;varying vec2 vv0;void main(){gl_FragColor=texture2D(u3,vv0)+u4*texture2D(u1,vv0);}",
            i: B,
            j: J,
          },
          s32: {
            g: "uniform sampler2D u1,u3;uniform vec2 u20;uniform float u4;varying vec2 vv0;void main(){gl_FragColor=texture2D(u3,vv0*u20)+u4*texture2D(u1,vv0);}",
            i: ["u20"].concat(B),
            j: J,
            u: !0,
          },
          s33: {
            g: "uniform sampler2D u1,u3;uniform float u4;varying vec2 vv0;const vec4 e=vec4(1.);void main(){vec4 a=texture2D(u3,vv0)+u4*texture2D(u1,vv0);vec2 h=mod(gl_FragCoord.xy,vec2(2.)),d=step(h,vec2(.75));float b=d.x+2.*d.y,c=step(2.5,b),g=(1.-c)*step(1.5,b),i=(1.-c)*(1.-g)*step(.5,b);a=mix(a,a.argb,i*e),a=mix(a,a.barg,g*e),a=mix(a,a.gbar,c*e),gl_FragColor=a;}",
            i: B,
            j: J,
            u: !0,
          },
          s34: {
            g: "uniform sampler2D u1,u3;uniform vec2 u20;uniform float u4;varying vec2 vv0;const vec4 e=vec4(1.);void main(){vec4 a=texture2D(u3,vv0*u20)+u4*texture2D(u1,vv0);vec2 h=mod(gl_FragCoord.xy,vec2(2.)),d=step(h,vec2(.75));float b=d.x+2.*d.y,c=step(2.5,b),g=(1.-c)*step(1.5,b),i=(1.-c)*(1.-g)*step(.5,b);a=mix(a,a.argb,i*e),a=mix(a,a.barg,g*e),a=mix(a,a.gbar,c*e),gl_FragColor=a;}",
            i: ["u20"].concat(B),
            j: J,
            u: !0,
          },
          s35: {
            g: "uniform sampler2D u1,u3;uniform float u4;varying vec2 vv0;const vec4 h=vec4(1.);void main(){vec4 a=texture2D(u3,vv0)+u4*texture2D(u1,vv0);vec2 b=floor(gl_FragCoord.xy);vec3 d=b.x*vec3(1.)+vec3(0.,1.,2.);float c=mod(b.y,2.);vec4 f=vec4(c,(1.-c)*step(mod(d,vec3(3.)),vec3(.5)));mat4 g=mat4(a.rgba,a.gbar,a.barg,a.argb);gl_FragColor=g*f;}",
            i: B,
            j: J,
            u: !0,
          },
          s36: {
            g: "varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}",
            i: u,
            j: G,
            precision: "lowp",
          },
          s37: {
            g: "varying vec2 vv0;uniform sampler2D u1;uniform float u29;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u29)).rgb,c=texture2D(u1,vv0+vec2(u29,u29)).rgb,d=texture2D(u1,vv0+vec2(u29,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}",
            i: ["u1", "u29"],
            j: G,
            precision: "lowp",
          },
          s38: {
            g: "varying vec2 vv0;uniform sampler2D u1;uniform float u29;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u29)).rgb,c=texture2D(u1,vv0+vec2(u29,u29)).rgb,d=texture2D(u1,vv0+vec2(u29,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",
            i: ["u1", "u29"],
            j: G,
            precision: "lowp",
          },
          s39: {
            g: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u30;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u30,vv0.y-u30))*1.,a-=texture2D(u1,vec2(vv0.x-u30,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u30,vv0.y+u30))*1.,a+=texture2D(u1,vec2(vv0.x+u30,vv0.y-u30))*1.,a+=texture2D(u1,vec2(vv0.x+u30,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u30,vv0.y+u30))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u30,vv0.y-u30))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u30))*2.,b-=texture2D(u1,vec2(vv0.x+u30,vv0.y-u30))*1.,b+=texture2D(u1,vec2(vv0.x-u30,vv0.y+u30))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u30))*2.,b+=texture2D(u1,vec2(vv0.x+u30,vv0.y+u30))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}",
            i: ["u1", "u2", "u30"],
            j: y,
            u: !0,
          },
          s40: {
            g: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u30;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u30,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}",
            i: ["u1", "u2", "u30"],
            j: y,
            u: !0,
          },
          s41: {
            g: "uniform sampler2D u5;uniform vec2 u14;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u14*g;vec4 b=texture2D(u5,a),c=texture2D(u5,a+u14*h),d=texture2D(u5,a+u14*i),j=texture2D(u5,a+u14),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}",
            i: ["u5", "u14"],
            j: z,
          },
          s42: {
            g: "uniform sampler2D u5;uniform vec2 u14;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u5,a),c=texture2D(u5,a+u14*k),d=texture2D(u5,a+u14*l),g=texture2D(u5,a+u14),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u14*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u14*m),d=f(a+u14*2.),g=f(a+u14*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}",
            i: ["u5", "u14"],
            j: z,
            u: !0,
          },
          s43: {
            g: "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}",
            i: ["u1"],
            j: G,
            precision: "lowp",
            u: !0,
          },
          s44: {
            g: "uniform sampler2D u1;uniform vec2 u14;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u14)+2002./e*texture2D(u1,vv0-2.*u14)+3003./e*texture2D(u1,vv0-u14)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u14)+2002./e*texture2D(u1,vv0+2.*u14)+1001./e*texture2D(u1,vv0+3.*u14);gl_FragColor=a;}",
            i: ["u14", "u1"],
            j: G,
            precision: "lowp",
            u: !0,
          },
          s45: {
            g: "uniform sampler2D u1,u16,u31;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u16,vv0),b=texture2D(u31,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}",
            i: ["u1", "u16", "u31"],
            j: { u1: 0, u16: 1, u31: 2 },
            u: !0,
          },
        },
        L = {
          s46: {
            g: "uniform float u8,u32;uniform sampler2D u7,u6,u3;varying vec2 vv0;const vec2 ZERO2=vec2(0.),ONE2=vec2(1.),HALF2=vec2(.5),EPS2=vec2(1e-5);void main(){vec4 sum=texture2D(u3,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u8,xyTo=floor(vv0*u8+eps2);float weightSize=toSparsity*u8;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u32*(xyPatch-halfFromSparsity))/u8,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u7,uvWeight)*texture2D(u6,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",
            i: ["u8", "u7", "u6", "u3", "u32"],
            Vb: ["1.1111", "gl_FragColor\\*=2.2222;"],
          },
          s47: {
            g: "uniform float u8,u32,u9;uniform sampler2D u7,u6,u3;varying vec2 vv0;const vec2 ZERO2=vec2(0.),ONE2=vec2(1.),HALF2=vec2(.5),EPS2=vec2(1e-4);void main(){vec4 sum=texture2D(u3,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u9,xyTo=floor(vv0*u8+eps2);float weightSize=fromSparsity*u9;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u8;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u32*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u9,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u7,uvWeight)*texture2D(u6,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",
            i: "u8 u9 u7 u6 u3 u32".split(" "),
            Vb: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"],
          },
        },
        w = null,
        O = null,
        N = {
          Jb: function () {
            return C;
          },
          A: function () {
            if (!C) {
              w = Db.hc(H, 2);
              O = Db.hc(L, 2);
              x = "highp";
              c.getShaderPrecisionFormat &&
                (c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.MEDIUM_FLOAT),
                c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.LOW_FLOAT));
              for (var k in w) e(c, w[k], k);
              A.set("s0");
              c.enableVertexAttribArray(0);
              C = !0;
            }
          },
          ob: function (k) {
            k.forEach(function (p) {
              N.od(p);
            });
          },
          od: function (k) {
            w[k.id] = k;
            e(c, k, k.id);
          },
          Xf: function (k, p, K) {
            p || (p = k);
            w[p] = Object.create(O[k]);
            w[p].bg = !0;
            O[k].Vb &&
              O[k].Vb.forEach(function (M, P) {
                var fa = "";
                "gl_Frag" === M.substring(0, 7)
                  ? ((M = new RegExp("[,;]?" + M, "g")), (fa = ";"))
                  : (M = new RegExp(M, "g"));
                w[p].g = w[p].g.replace(M, fa + K[P]);
              });
            e(c, w[p], p);
          },
          set: function (k) {
            var p = w[k];
            p.u && ((p.u = !1), e(c, p, k));
            g(p);
          },
          ib: function (k) {
            return m(k, n(), "s48");
          },
          Wc: function (k) {
            return m(
              k,
              {
                g: "void main(){gl_FragColor=vec4(.5,.5,.5,.5);}",
                i: [],
                precision: x,
              },
              "s49"
            );
          },
          zf: function (k) {
            return "undefined" === typeof w[k] ? !1 : w[k].wa;
          },
          O: function () {
            -1 !== l &&
              ((l = -1),
              r.Qa.forEach(function (k) {
                0 !== k && c.disableVertexAttribArray(k);
              }));
          },
          Xc: function () {
            var k = 0;
            r.Qa.forEach(function (p, K) {
              K = r.Pa[K];
              c.vertexAttribPointer(p, K, c.FLOAT, !1, r.gd, k);
              k += 4 * K;
            });
          },
          zd: function () {
            c.enableVertexAttribArray(0);
          },
          Ka: function () {
            N.Wb(c);
          },
          Wb: function (k) {
            k.vertexAttribPointer(r.Qa[0], 2, k.FLOAT, !1, 8, 0);
          },
          Ii: function (k, p) {
            c.uniform1i(r.C[k], p);
          },
          F: function (k, p) {
            c.uniform1f(r.C[k], p);
          },
          P: function (k, p, K) {
            c.uniform2f(r.C[k], p, K);
          },
          Dg: function (k, p) {
            c.uniform2fv(r.C[k], p);
          },
          Fg: function (k, p) {
            c.uniform3fv(r.C[k], p);
          },
          Eg: function (k, p, K, M) {
            c.uniform3f(r.C[k], p, K, M);
          },
          Gg: function (k, p, K, M, P) {
            c.uniform4f(r.C[k], p, K, M, P);
          },
          Be: function (k, p) {
            c.uniform4fv(r.C[k], p);
          },
          Ce: function (k, p) {
            c.uniformMatrix2fv(r.C[k], !1, p);
          },
          Ji: function (k, p) {
            c.uniformMatrix3fv(r.C[k], !1, p);
          },
          Ki: function (k, p) {
            c.uniformMatrix4fv(r.C[k], !1, p);
          },
          S: function (k, p) {
            N.set(k);
            p.forEach(function (K) {
              switch (K.type) {
                case "4f":
                  c.uniform4fv(r.C[K.name], K.value);
                  break;
                case "3f":
                  c.uniform3fv(r.C[K.name], K.value);
                  break;
                case "2f":
                  c.uniform2fv(r.C[K.name], K.value);
                  break;
                case "1f":
                  c.uniform1f(r.C[K.name], K.value);
                  break;
                case "1i":
                  c.uniform1i(r.C[K.name], K.value);
                  break;
                case "mat2":
                  c.uniformMatrix2fv(r.C[K.name], !1, K.value);
                  break;
                case "mat3":
                  c.uniformMatrix3fv(r.C[K.name], !1, K.value);
                  break;
                case "mat4":
                  c.uniformMatrix4fv(r.C[K.name], !1, K.value);
              }
            });
          },
          Th: function () {
            return "lowp";
          },
          m: function () {
            N.O();
            c.disableVertexAttribArray(0);
            for (var k in w) {
              var p = w[k];
              p.wa && ((p.wa = !1), c.deleteProgram(p.ya));
              p.bg && delete w[k];
            }
            q.forEach(function (K) {
              c.deleteShader(K);
            });
            q.splice(0);
            v = 0;
            C = !1;
            r = null;
            l = -1;
          },
        };
      return N;
    })(),
    c = null,
    Ha = (function () {
      function a(u) {
        console.log("ERROR in ContextFF: ", u);
        return !1;
      }
      function b() {
        return (
          navigator.userAgent &&
          -1 !== navigator.userAgent.indexOf("forceWebGL1")
        );
      }
      function d(u, F, G) {
        u.setAttribute("width", F);
        u.setAttribute("height", G);
      }
      function e(u) {
        if (b()) return !1;
        var F = document.createElement("canvas");
        d(F, 5, 5);
        var G = null;
        try {
          G = F.getContext("webgl2", u);
        } catch (f) {
          return !1;
        }
        if (!G) return !1;
        g(G);
        aa.Ad(G);
        u = aa.ic(G);
        if (!u.ma && !u.pa) return Ea.m(), aa.reset(), !1;
        G = Ea.qd(G, u);
        Ea.m();
        aa.reset();
        return G ? !0 : !1;
      }
      function g(u) {
        u.clearColor(0, 0, 0, 0);
        u.disable(u.DEPTH_TEST);
        u.disable(u.BLEND);
        u.disable(u.DITHER);
        u.disable(u.STENCIL_TEST);
        u.disable(u.CULL_FACE);
        u.GENERATE_MIPMAP_HINT &&
          u.FASTEST &&
          u.hint(u.GENERATE_MIPMAP_HINT, u.FASTEST);
        u.disable(u.SAMPLE_ALPHA_TO_COVERAGE);
        u.disable(u.SAMPLE_COVERAGE);
        u.depthFunc(u.LEQUAL);
        u.clearDepth(1);
      }
      var m = null,
        n = null,
        q = null,
        l = !0,
        r = null,
        v = null,
        C = [],
        x = {
          J: function () {
            return m.width;
          },
          ba: function () {
            return m.height;
          },
          Kh: function () {
            return m;
          },
          Ih: function () {
            return c;
          },
          qa: function () {
            return l;
          },
          flush: function () {
            c.flush();
          },
          Qd: function () {
            wa.reset();
            wa.ia();
            x.wg();
          },
          wg: function () {
            Z.reset();
            Q.reset();
            A.O();
            A.zd();
            c.disable(c.DEPTH_TEST);
            c.disable(c.BLEND);
            Q.Ea();
            A.Ka();
          },
          Hf: function () {
            r || (r = new Uint8Array(m.width * m.height * 4));
            c.readPixels(0, 0, m.width, m.height, c.RGBA, c.UNSIGNED_BYTE, r);
            return r;
          },
          Lh: function () {
            return m.toDataURL("image/jpeg");
          },
          Mh: function () {
            wa.N();
            n ||
              ((n = document.createElement("canvas")),
              (q = n.getContext("2d")));
            d(n, m.width, m.height);
            for (
              var u = x.Hf(),
                F = q.createImageData(n.width, n.height),
                G = n.width,
                f = n.height,
                y = F.data,
                J = 0;
              J < f;
              ++J
            )
              for (var B = f - J - 1, z = 0; z < G; ++z) {
                var h = 4 * (J * G + z),
                  t = 4 * (B * G + z);
                y[h] = u[t];
                y[h + 1] = u[t + 1];
                y[h + 2] = u[t + 2];
                y[h + 3] = u[t + 3];
              }
            q.putImageData(F, 0, 0);
            return n.toDataURL("image/png");
          },
          Gf: function (u) {
            !n &&
              u &&
              ((n = document.createElement("canvas")),
              (q = n.getContext("2d")));
            var F = u ? n : document.createElement("canvas");
            d(F, m.width, m.height);
            (u ? q : F.getContext("2d")).drawImage(m, 0, 0);
            return F;
          },
          A: function (u) {
            u = Object.assign(
              {
                oa: null,
                Kc: null,
                ub: null,
                vd: null,
                width: 512,
                height: 512,
                premultipliedAlpha: !1,
                Ud: !0,
                antialias: !1,
                debug: !1,
                mh: !1,
              },
              u
            );
            u.oa
              ? ((c = u.oa), (m = u.oa.canvas))
              : u.vd && !u.ub
              ? (m = document.getElementById(u.vd))
              : u.ub && (m = u.ub);
            m || (m = document.createElement("canvas"));
            m.width = u.width;
            m.height = u.height;
            if (c) l = c instanceof WebGL2RenderingContext;
            else {
              l = !0;
              var F = {
                antialias: u.antialias,
                alpha: !0,
                preserveDrawingBuffer: !0,
                premultipliedAlpha: u.premultipliedAlpha,
                stencil: !1,
                depth: u.Ud,
                failIfMajorPerformanceCaveat: !0,
                powerPreference: "high-performance",
              };
              navigator &&
                navigator.userAgent &&
                -1 !== navigator.userAgent.indexOf("noAntialiasing") &&
                (F.antialias = !1);
              var G = e(F);
              G || !F.antialias || b() || ((F.antialias = !1), (G = e(F)));
              G && (c = m.getContext("webgl2", F));
              c
                ? (l = !0)
                : ((c = m.getContext("webgl", F)) ||
                    (c = m.getContext("experimental-webgl", F)),
                  (l = !1));
            }
            if (!c) return a("WebGL1 and 2 are not enabled");
            u.Kc &&
              m.addEventListener &&
              ((v = u.Kc), m.addEventListener("webglcontextlost", v, !1));
            if (!aa.A()) return a("Not enough GL capabilities");
            g(c);
            A.A();
            Q.A();
            Ea.qd(c, aa.Ff());
            C.forEach(function (f) {
              f(c);
            });
            C.splice(0);
            return !0;
          },
          ah: function () {
            return new Promise(function (u) {
              c ? u(c) : C.push(u);
            });
          },
          m: function () {
            c && (aa.m(), A.m(), Ea.m());
            v && (m.removeEventListener("webglcontextlost", v, !1), (v = null));
            c = r = q = n = m = null;
            C.splice(0);
          },
        };
      return x;
    })(),
    Ba = (function () {
      function a() {
        null === b &&
          ("undefined" !== typeof A
            ? (b = A)
            : "undefined" !== typeof JEShaders && (b = JEShaders));
      }
      var b = null;
      return {
        reset: function () {
          b = null;
        },
        Cg: function (d) {
          b !== d && (b && b.O(), (b = d));
        },
        Jb: function () {
          return b.Jb();
        },
        Ka: function () {
          return b.Ka();
        },
        Wb: function (d) {
          return b.Wb(d);
        },
        Xc: function () {
          return b.Xc();
        },
        O: function () {
          return b.O();
        },
        set: function (d) {
          a();
          return b.set(d);
        },
        ib: function (d) {
          a();
          return b.ib(d);
        },
        Wc: function (d) {
          a();
          return b.Wc(d);
        },
      };
    })(),
    Da = (function () {
      function a(k) {
        c.bindTexture(c.TEXTURE_2D, k);
      }
      function b(k) {
        L[0] = k;
        k = w[0];
        var p = (k >> 16) & 32768,
          K = (k >> 12) & 2047,
          M = (k >> 23) & 255;
        return 103 > M
          ? p
          : 142 < M
          ? p | 31744 | ((255 == M ? 0 : 1) && k & 8388607)
          : 113 > M
          ? ((K |= 2048), p | ((K >> (114 - M)) + ((K >> (113 - M)) & 1)))
          : (p = (p | ((M - 112) << 10) | (K >> 1)) + (K & 1));
      }
      function d(k) {
        var p = new Uint16Array(k.length);
        k.forEach(function (K, M) {
          p[M] = b(K);
        });
        return p;
      }
      function e() {
        if (null !== O.rc) return O.rc;
        var k = m(d([0.5, 0.5, 0.5, 0.5]), !0);
        return null === k ? !0 : (O.rc = k);
      }
      function g() {
        if (null !== O.sc) return O.sc;
        var k = m(new Uint8Array([127, 127, 127, 127]), !1);
        return null === k ? !0 : (O.sc = k);
      }
      function m(k, p) {
        if (!Ba.Jb() || !G) return null;
        var K = null,
          M = Math.sqrt(k.length / 4);
        try {
          var P = c.getError();
          if ("FUCKING_BIG_ERROR" === P) return !1;
          K = N.instance({ isFloat: !1, U: p, array: k, width: M });
          P = c.getError();
          if (P !== c.NO_ERROR) return !1;
        } catch (fa) {
          return !1;
        }
        ta.N();
        c.viewport(0, 0, M, M);
        c.clearColor(0, 0, 0, 0);
        c.clear(c.COLOR_BUFFER_BIT);
        Ba.set("s0");
        K.Da(0);
        ra.l(!0, !0);
        k = 4 * M * M;
        p = new Uint8Array(k);
        c.readPixels(0, 0, M, M, c.RGBA, c.UNSIGNED_BYTE, p);
        M = !0;
        for (P = 0; P < k; ++P) M = M && 3 > Math.abs(p[P] - 127);
        K.remove();
        ta.ia();
        return M;
      }
      var n = 0,
        q = null,
        l = 0,
        r = null,
        v = null,
        C = null,
        x = null,
        u = null,
        F = null,
        G = !1,
        f = [],
        y = {
          isFloat: !1,
          isPot: !0,
          isLinear: !1,
          isMipmap: !1,
          $d: !1,
          isAnisotropicFiltering: !1,
          isMirrorX: !1,
          isMirrorY: !1,
          isSrgb: !1,
          isKeepArray: !1,
          isFlipY: null,
          width: 0,
          height: 0,
          url: null,
          array: null,
          data: null,
          L: null,
          qc: null,
          ag: !1,
          U: !1,
          G: null,
          Mb: 4,
          Cc: 0,
        },
        J = !1,
        B = null,
        z = null,
        h = [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
        ],
        t = !1,
        H = !1,
        L = new Float32Array(1),
        w = new Int32Array(L.buffer),
        O = { rc: null, sc: null },
        N = {
          A: function () {
            G ||
              ((u = [c.RGBA, null, c.RGBA, c.RGBA]),
              (F = [c.RGBA, null, c.RGBA, c.RGBA]),
              (q = [
                c.TEXTURE0,
                c.TEXTURE1,
                c.TEXTURE2,
                c.TEXTURE3,
                c.TEXTURE4,
                c.TEXTURE5,
                c.TEXTURE6,
                c.TEXTURE7,
              ]),
              (t = "undefined" !== typeof JEContext),
              (H = "undefined" !== typeof aa),
              t && JEContext.mi() && q.push(c.TEXTURE8, c.TEXTURE9),
              (r = [-1, -1, -1, -1, -1, -1, -1, -1]),
              (x = [c.UNSIGNED_BYTE, c.FLOAT, c.FLOAT]),
              (G = !0));
          },
          Fi: function () {
            c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR);
            c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR);
          },
          Gi: function () {
            c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
            c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
          },
          Wf: function () {
            if (!v) {
              for (var k = new Float32Array(16384), p = 0; 16384 > p; ++p)
                k[p] = 2 * Math.random() - 1;
              v = {
                random: N.instance({
                  isFloat: !0,
                  isPot: !0,
                  array: k,
                  width: 64,
                }),
                Ke: N.instance({
                  isFloat: !1,
                  isPot: !0,
                  width: 1,
                  array: new Uint8Array([0, 0, 0, 0]),
                }),
              };
            }
            N.Ug();
          },
          ze: function (k) {
            c.framebufferTexture2D(
              ta.oc(),
              c.COLOR_ATTACHMENT0,
              c.TEXTURE_2D,
              k,
              0
            );
          },
          bi: function () {
            return v.Ke;
          },
          Ug: function () {
            x[1] = aa.nc(c);
          },
          Ag: function () {
            F = u = [c.RGBA, c.RGBA, c.RGBA, c.RGBA];
          },
          se: function (k) {
            A.set("s1");
            ta.N();
            var p = k.J(),
              K = k.ba();
            c.viewport(0, 0, p, K);
            k.h(0);
            ra.l(!1, !1);
          },
          wi: function (k, p) {
            N.se(k);
            c.readPixels(0, 0, k.J(), k.ba(), c.RGBA, c.UNSIGNED_BYTE, p);
          },
          xi: function (k, p) {
            N.se(k);
            return aa.Ub(0, 0, k.J(), k.ba(), p);
          },
          Hd: function (k, p, K, M, P, fa, ya) {
            k.activeTexture(k.TEXTURE0);
            var Ja = k.createTexture();
            k.bindTexture(k.TEXTURE_2D, Ja);
            P = P instanceof Float32Array ? P : new Float32Array(P);
            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.NEAREST);
            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.NEAREST);
            k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, fa);
            k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, K, M, 0, k.RGBA, k.FLOAT, P);
            k.bindTexture(k.TEXTURE_2D, null);
            k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, !1);
            ya && (ta.ia(), A.ib(k));
            k.viewport(0, 0, K, M);
            k.framebufferTexture2D(
              k.FRAMEBUFFER,
              k.COLOR_ATTACHMENT0,
              k.TEXTURE_2D,
              p,
              0
            );
            k.bindTexture(k.TEXTURE_2D, Ja);
            ya ? ra.l(!0, !0) : Q.zb(k);
            k.deleteTexture(Ja);
            G && ((r[0] = -1), (C = null), (n = 0));
          },
          cc: function (k) {
            k !== n && (c.activeTexture(q[k]), (n = k));
          },
          instance: function (k) {
            var p;
            function K() {
              T = void 0 !== E.L.videoWidth ? E.L.videoWidth : E.L.width;
              U = void 0 !== E.L.videoHeight ? E.L.videoHeight : E.L.height;
            }
            function M(I) {
              var S = c.getError();
              if ("FUCKING_BIG_ERROR" === S) return !1;
              c.texImage2D(c.TEXTURE_2D, 0, oa, ja, ka, I);
              S = c.getError();
              S !== c.NO_ERROR &&
                ja !== c.RGBA &&
                ((ja = c.RGBA), c.texImage2D(c.TEXTURE_2D, 0, oa, ja, ka, I));
              return !0;
            }
            function P() {
              if (!Sb) {
                a(ua);
                Fa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, Fa);
                E.isPot
                  ? (c.texParameteri(
                      c.TEXTURE_2D,
                      c.TEXTURE_WRAP_S,
                      E.isMirrorX ? c.MIRRORED_REPEAT : c.REPEAT
                    ),
                    c.texParameteri(
                      c.TEXTURE_2D,
                      c.TEXTURE_WRAP_T,
                      E.isMirrorY ? c.MIRRORED_REPEAT : c.REPEAT
                    ))
                  : (c.texParameteri(
                      c.TEXTURE_2D,
                      c.TEXTURE_WRAP_S,
                      c.CLAMP_TO_EDGE
                    ),
                    c.texParameteri(
                      c.TEXTURE_2D,
                      c.TEXTURE_WRAP_T,
                      c.CLAMP_TO_EDGE
                    ));
                E.isAnisotropicFiltering &&
                  "undefined" !== typeof JESETTINGS &&
                  c.texParameterf(
                    c.TEXTURE_2D,
                    JEContext.Oh().TEXTURE_MAX_ANISOTROPY_EXT,
                    JESETTINGS.Xg
                  );
                c.texParameteri(
                  c.TEXTURE_2D,
                  c.TEXTURE_MAG_FILTER,
                  E.isLinear ? c.LINEAR : c.NEAREST
                );
                var I = E.isMipmap && !Wa;
                c.texParameteri(
                  c.TEXTURE_2D,
                  c.TEXTURE_MIN_FILTER,
                  E.$d
                    ? c.LINEAR_MIPMAP_LINEAR
                    : E.isLinear
                    ? I
                      ? c.NEAREST_MIPMAP_LINEAR
                      : c.LINEAR
                    : I
                    ? c.NEAREST_MIPMAP_NEAREST
                    : c.NEAREST
                );
                ja = u[E.Mb - 1];
                oa = F[E.Mb - 1];
                ka = x[Eb];
                aa.qa() &&
                  ((I = aa.If()),
                  ja === c.RGBA && ka === c.FLOAT
                    ? E.isMipmap || E.isLinear
                      ? (oa = Ea.Kf(c))
                      : aa.rd()
                      ? I && (oa = I)
                      : (oa = c.RGBA16F || c.RGBA)
                    : ja === c.RGB &&
                      ka === c.FLOAT &&
                      I &&
                      ((oa = I), (ja = c.RGBA)));
                if ((E.U && !E.isFloat) || (E.isFloat && E.isMipmap && Ea.fg()))
                  (oa = aa.Jf()), (ka = aa.nc(c));
                E.Cc && (lb = E.Cc);
                E.isSrgb && 4 === E.Mb && (ja = JEContext.$h());
                if (E.L) M(E.L);
                else if (E.url) M(Ra);
                else if (za) {
                  I = za;
                  try {
                    "FUCKING_BIG_ERROR" !== c.getError() &&
                      (c.texImage2D(c.TEXTURE_2D, 0, oa, T, U, 0, ja, ka, I),
                      c.getError() !== c.NO_ERROR &&
                        (c.texImage2D(
                          c.TEXTURE_2D,
                          0,
                          oa,
                          T,
                          U,
                          0,
                          ja,
                          ka,
                          null
                        ),
                        c.getError() !== c.NO_ERROR &&
                          c.texImage2D(
                            c.TEXTURE_2D,
                            0,
                            c.RGBA,
                            T,
                            U,
                            0,
                            c.RGBA,
                            c.UNSIGNED_BYTE,
                            null
                          )));
                  } catch (Jc) {
                    c.texImage2D(c.TEXTURE_2D, 0, oa, T, U, 0, ja, ka, null);
                  }
                  E.isKeepArray || (za = null);
                } else
                  (I = c.getError()),
                    "FUCKING_BIG_ERROR" !== I &&
                      (c.texImage2D(c.TEXTURE_2D, 0, oa, T, U, 0, ja, ka, null),
                      (I = c.getError()),
                      I !== c.NO_ERROR &&
                        ((ja = c.RGBA),
                        E.U &&
                          ka !== c.FLOAT &&
                          ((ka = c.FLOAT),
                          c.texImage2D(
                            c.TEXTURE_2D,
                            0,
                            oa,
                            T,
                            U,
                            0,
                            ja,
                            ka,
                            null
                          ))));
                if (E.isMipmap)
                  if (!Wa && ca) ca.Ab(), (mb = !0);
                  else if (Wa) {
                    I = Math.log2(Math.min(T, U));
                    Xa = Array(1 + I);
                    Xa[0] = ua;
                    for (var S = 1; S <= I; ++S) {
                      var qa = Math.pow(2, S),
                        W = T / qa;
                      qa = U / qa;
                      var Sa = c.createTexture();
                      a(Sa);
                      c.texParameteri(
                        c.TEXTURE_2D,
                        c.TEXTURE_MIN_FILTER,
                        c.NEAREST
                      );
                      c.texParameteri(
                        c.TEXTURE_2D,
                        c.TEXTURE_MAG_FILTER,
                        c.NEAREST
                      );
                      c.texImage2D(c.TEXTURE_2D, 0, oa, W, qa, 0, ja, ka, null);
                      a(null);
                      Xa[S] = Sa;
                    }
                    mb = !0;
                  }
                a(null);
                r[n] = -1;
                Fa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                ab = !0;
                E.G && ca && (E.G(ca), (E.G = null));
              }
            }
            function fa() {
              for (var I = T * U, S = 2 * I, qa = 3 * I, W = 0; W < I; ++W)
                (Ca[0][W] = bb[W]),
                  (Ca[1][W] = bb[W + I]),
                  (Ca[2][W] = bb[W + S]),
                  (Ca[3][W] = bb[W + qa]);
            }
            function ya() {
              var I = T * U * 4;
              Ka = [
                new Uint8Array(I),
                new Uint8Array(I),
                new Uint8Array(I),
                new Uint8Array(I),
              ];
              Ca = [
                new Float32Array(Ka[0].buffer),
                new Float32Array(Ka[1].buffer),
                new Float32Array(Ka[2].buffer),
                new Float32Array(Ka[3].buffer),
              ];
              nb = new Uint8Array(4 * I);
              bb = new Float32Array(nb.buffer);
              cb = !0;
            }
            function Ja() {
              p = new Uint8Array(T * U * 4);
              Tb = new Float32Array(p.buffer);
              Fb = !0;
            }
            var E = Object.assign({}, y, k),
              db = l++;
            null === E.isFlipY && (E.isFlipY = E.url ? !0 : !1);
            E.data &&
              ((E.array =
                "string" === typeof E.data
                  ? ac(E.data)
                  : E.isFloat
                  ? new Float32Array(E.data)
                  : new Uint8Array(E.data)),
              (E.isFlipY = !1));
            var Eb = 0,
              Ub = E.L ? !0 : !1,
              eb = null,
              Gb = null,
              Vb = !1;
            E.U = E.U || E.isFloat;
            E.U && (Eb = 1);
            !E.ag && E.isFloat && H && !aa.rd() && (E.isFloat = !1);
            E.isFloat && (Eb = 2);
            E.isAnisotropicFiltering &&
              t &&
              !JEContext.fi() &&
              (E.isAnisotropicFiltering = !1);
            var ua = E.qc || c.createTexture(),
              Ra = null,
              za = !1,
              T = 0,
              U = 0,
              ab = !1,
              Sb = !1,
              cb = !1,
              Ca = null,
              Ka = null,
              nb = null,
              bb = null,
              oa = null,
              ja = null,
              ka = null,
              Fa = E.isFlipY,
              wc = (k = E.U && E.isMipmap) && Ea.Xe(),
              Wa = k && !wc ? !0 : !1,
              Xa = null,
              lb = -1,
              Wb = -1,
              mb = !1;
            var Fb = !1;
            var Tb = (p = null);
            E.width && ((T = E.width), (U = E.height ? E.height : T));
            var ca = {
              get: function () {
                return ua;
              },
              J: function () {
                return T;
              },
              ba: function () {
                return U;
              },
              ci: function () {
                return E.url;
              },
              gi: function () {
                return E.isFloat;
              },
              ii: function () {
                return E.U;
              },
              Ei: function (I) {
                ua = I;
              },
              ji: function () {
                return E.isLinear;
              },
              Ab: function () {
                c.generateMipmap(c.TEXTURE_2D);
              },
              Ue: function (I, S) {
                Wa
                  ? (I || (I = ca.Ld()), N.cc(S), a(Xa[I]), (r[S] = -1))
                  : ca.h(S);
              },
              Ld: function () {
                -1 === lb && (lb = Math.log2(T));
                return lb;
              },
              Ae: function (I) {
                c.TEXTURE_MAX_LEVEL &&
                  c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAX_LEVEL, I);
              },
              Df: function (I) {
                I || (I = ca.Ld());
                if (Wa) {
                  A.set("s12");
                  N.cc(0);
                  for (var S = T, qa = U, W = 1; W <= I; ++W)
                    (S /= 2),
                      (qa /= 2),
                      A.P("u14", 0.25 / S, 0.25 / qa),
                      c.viewport(0, 0, S, qa),
                      a(Xa[W - 1]),
                      c.framebufferTexture2D(
                        ta.oc(),
                        c.COLOR_ATTACHMENT0,
                        c.TEXTURE_2D,
                        Xa[W],
                        0
                      ),
                      ra.l(!1, 1 === W);
                  r[0] = -1;
                } else I !== Wb && ((Wb = I), ca.Ae(I)), ca.Ab();
              },
              Hi: function (I) {
                (Ub = !uc.Pg(I)) ? ((za = null), (E.L = I), K()) : (za = I);
              },
              h: function (I) {
                if (!ab) return !1;
                N.cc(I);
                if (r[I] === db) return !1;
                a(ua);
                r[I] = db;
                return !0;
              },
              Da: function (I) {
                c.activeTexture(q[I]);
                n = I;
                a(ua);
                r[I] = db;
              },
              v: function () {
                C = ca;
                N.ze(ua);
              },
              M: function () {
                c.viewport(0, 0, T, U);
                C = ca;
                N.ze(ua);
              },
              ed: N.ed,
              ye: function (I, S) {
                T = I;
                U = S;
              },
              resize: function (I, S) {
                ca.ye(I, S);
                P();
              },
              clone: function (I) {
                I = N.instance({
                  width: T,
                  height: U,
                  U: E.U,
                  isFloat: E.isFloat,
                  isLinear: E.isLinear,
                  isMirrorY: E.isMirrorY,
                  isFlipY: I ? !Fa : Fa,
                  isPot: E.isPot,
                });
                Ba.set("s0");
                ta.ia();
                I.M();
                ca.h(0);
                ra.l(!0, !0);
                return I;
              },
              Hg: function () {
                c.viewport(0, 0, T, U);
              },
              remove: function () {
                c.deleteTexture(ua);
                Sb = !0;
                f.splice(f.indexOf(ca), 1);
                ca = null;
              },
              refresh: function () {
                ca.Da(0);
                Fa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                Ub
                  ? c.texImage2D(c.TEXTURE_2D, 0, oa, ja, ka, E.L)
                  : c.texImage2D(c.TEXTURE_2D, 0, oa, T, U, 0, ja, ka, za);
                Fa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
              },
              qe: function () {
                cb || ya();
                c.readPixels(0, 0, T, 4 * U, c.RGBA, c.UNSIGNED_BYTE, nb);
                fa();
                return Ca;
              },
              tg: function () {
                cb || ya();
                return aa.Ub(0, 0, T, 4 * U, nb).then(function () {
                  fa();
                  return Ca;
                });
              },
              vg: function () {
                Fb || Ja();
                c.readPixels(0, 0, T, U, c.RGBA, c.UNSIGNED_BYTE, p);
                return Tb;
              },
              ug: function () {
                Fb || Ja();
                return aa.Ub(0, 0, T, U, p);
              },
              xd: function (I) {
                ta.N();
                A.set("s15");
                ca.h(0);
                if (I)
                  c.viewport(0, 0, T, U),
                    A.Gg("u15", 0.25, 0.25, 0.25, 0.25),
                    ra.l(!1, !0);
                else
                  for (I = 0; 4 > I; ++I)
                    c.viewport(0, U * I, T, U),
                      A.Be("u15", h[I]),
                      ra.l(!1, 0 === I);
              },
              Ma: function (I) {
                var S = ka === x[0] && !g();
                a(ua);
                Fa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                S
                  ? (Vb ||
                      ((eb = document.createElement("canvas")),
                      (eb.width = T),
                      (eb.height = U),
                      (Gb = eb.getContext("2d")),
                      Gb.createImageData(T, U),
                      (Vb = !0)),
                    null.data.set(I),
                    Gb.putImageData(null, 0, 0),
                    c.texImage2D(c.TEXTURE_2D, 0, oa, ja, ka, eb))
                  : c.texImage2D(c.TEXTURE_2D, 0, oa, T, U, 0, ja, ka, I);
                r[n] = db;
                Fa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
              },
              Ri: function (I, S) {
                a(ua);
                S && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                c.texImage2D(c.TEXTURE_2D, 0, oa, ja, ka, I);
                r[n] = db;
                S && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
              },
              Di: function (I, S) {
                var qa = T * U,
                  W = 4 * qa;
                I = E.U ? (I ? "RGBE" : "JSON") : "RGBA";
                S && (I = S);
                S = aa.qa() && !1;
                var Sa = null;
                switch (I) {
                  case "RGBE":
                    Sa = "s13";
                    break;
                  case "JSON":
                    Sa = S ? "s0" : "s15";
                    break;
                  case "RGBA":
                  case "RGBAARRAY":
                    Sa = "s7";
                }
                cb ||
                  ("RGBA" === I || "RGBE" === I || "RGBAARRAY" === I
                    ? ((Ka = new Uint8Array(W)), (cb = !0))
                    : "JSON" !== I || S || ya());
                ta.N();
                A.set(Sa);
                ca.h(0);
                W = null;
                if ("RGBA" === I || "RGBE" === I || "RGBAARRAY" === I) {
                  c.viewport(0, 0, T, U);
                  ra.l(!0, !0);
                  c.readPixels(0, 0, T, U, c.RGBA, c.UNSIGNED_BYTE, Ka);
                  if ("RGBAARRAY" === I) return { data: Ka };
                  J ||
                    ((B = document.createElement("canvas")),
                    (z = B.getContext("2d")),
                    (J = !0));
                  B.width = T;
                  B.height = U;
                  qa = z.createImageData(T, U);
                  qa.data.set(Ka);
                  z.putImageData(qa, 0, 0);
                  W = B.toDataURL("image/png");
                } else if ("JSON" === I)
                  if (S)
                    (W = new Float32Array(qa)),
                      c.viewport(0, 0, T, U),
                      ra.l(!0, !0),
                      c.readPixels(0, 0, T, U, c.RGBA, c.FLOAT, W);
                  else {
                    for (W = 0; 4 > W; ++W)
                      c.viewport(0, U * W, T, U),
                        A.Be("u15", h[W]),
                        ra.l(!W, !W);
                    ca.qe();
                    W = Array(qa);
                    for (S = 0; S < qa; ++S)
                      (W[4 * S] = Ca[0][S]),
                        (W[4 * S + 1] = Ca[1][S]),
                        (W[4 * S + 2] = Ca[2][S]),
                        (W[4 * S + 3] = Ca[3][S]);
                  }
                return {
                  format: I,
                  data: W,
                  width: T,
                  height: U,
                  isMirrorY: E.isMirrorY,
                  isFlipY: "RGBA" === I ? E.isFlipY : !E.isFlipY,
                };
              },
            };
            E.isMipmap && !Wa && ab && !mb && (ca.Ab(), (mb = !0));
            if (E.url)
              a(ua),
                c.texImage2D(
                  c.TEXTURE_2D,
                  0,
                  c.RGBA,
                  1,
                  1,
                  0,
                  c.RGBA,
                  c.UNSIGNED_BYTE,
                  null
                ),
                (Ra = new Image()),
                (Ra.crossOrigin = "anonymous"),
                (Ra.src = E.url),
                (Ra.onload = function () {
                  T = Ra.width;
                  U = Ra.height;
                  P();
                });
            else if (E.L) {
              var Xb = function () {
                K();
                T ? P() : setTimeout(Xb, 1);
              };
              Xb();
            } else
              E.array
                ? (E.U && !E.isFloat
                    ? E.array instanceof Uint16Array
                      ? ((za = E.array), P())
                      : e()
                      ? ((za = d(E.array)), P())
                      : (P(), N.Hd(c, ua, ca.J(), ca.ba(), E.array, Fa, !0))
                    : ((za = E.isFloat
                        ? E.array instanceof Float32Array
                          ? E.array
                          : new Float32Array(E.array)
                        : E.array instanceof Uint8Array
                        ? E.array
                        : new Uint8Array(E.array)),
                      P()),
                  E.isKeepArray ||
                    (za && za !== E.array && (za = null), delete E.array))
                : E.qc
                ? (ab = !0)
                : P();
            ca.Yh = ca.J;
            E.G && ab && (E.G(ca), (E.G = null));
            f.push(ca);
            return ca;
          },
          N: function (k) {
            k !== n && (c.activeTexture(q[k]), (n = k));
            r[k] = -1;
            a(null);
          },
          $g: function (k) {
            v.random.h(k);
          },
          ed: function () {
            C = null;
            c.framebufferTexture2D(
              ta.oc(),
              c.COLOR_ATTACHMENT0,
              c.TEXTURE_2D,
              null,
              0
            );
          },
          reset: function () {
            0 !== n && c.activeTexture(q[0]);
            for (var k = 0; k < q.length; ++k) r[k] = -1;
            n = -1;
          },
          Ai: function () {
            n = -1;
          },
          Rg: function () {
            for (var k = 0; k < q.length; ++k) N.N(k);
          },
          Id: function () {
            v && (v.random.remove(), v.Ke.remove());
          },
          Qi: function (k, p) {
            if ("RGBA" === k.format || "RGBE" === k.format) {
              var K = new Image();
              K.src = k.data;
              K.onload = function () {
                N.instance({
                  isMirrorY: k.isMirrorY,
                  isFlipY: k.isFlipY,
                  isFloat: !1,
                  L: K,
                  G: function (M) {
                    if ("RGBA" === k.format) p(M);
                    else {
                      var P = k.width,
                        fa = k.height,
                        ya = N.instance({
                          isMirrorY: k.isMirrorY,
                          isFloat: !0,
                          width: P,
                          height: fa,
                          isFlipY: k.isFlipY,
                        });
                      ta.ia();
                      c.viewport(0, 0, P, fa);
                      A.set("s14");
                      ya.v();
                      M.h(0);
                      ra.l(!0, !0);
                      N.N(0);
                      p(ya);
                      aa.flush();
                      M.remove();
                    }
                  },
                });
              };
            } else
              "JSON" === k.format
                ? p(
                    N.instance({
                      isFloat: !0,
                      isFlipY: k.isFlipY,
                      width: k.width,
                      height: k.height,
                      array: new Float32Array(k.data),
                    })
                  )
                : p(!1);
          },
          df: d,
          m: function () {
            C && (wa.ia(), N.ed(), wa.N());
            N.Rg();
            f.slice(0).forEach(function (k) {
              k.remove();
            });
            f.splice(0);
            G = !1;
            l = 0;
            "undefined" !== typeof Ea && Ea.m();
            v = null;
          },
        };
      return N;
    })(),
    jc = (function () {
      return {
        instance: function (a) {
          var b = [Da.instance(a), Da.instance(a)],
            d = [b[1], b[0]],
            e = d,
            g = {
              yg: function (m) {
                e[1].v();
                e[0].h(m);
                g.Fe();
              },
              zg: function (m) {
                e[1].M();
                e[0].h(m);
                g.Fe();
              },
              Fe: function () {
                e = e === b ? d : b;
              },
              refresh: function () {
                e[0].refresh();
                e[1].refresh();
              },
              h: function (m) {
                e[0].h(m);
              },
              Da: function (m) {
                e[0].Da(m);
              },
              Zg: function (m) {
                e[1].h(m);
              },
              Sh: function () {
                return e[0];
              },
              Wh: function () {
                return e[1];
              },
              Ma: function (m) {
                e[0].Ma(m);
                e[1].Ma(m);
              },
              remove: function () {
                e[0].remove();
                e[1].remove();
                e = null;
              },
              sync: function () {
                g.zg(0);
                A.set("s0");
                Q.l(!1, !1);
              },
            };
          return g;
        },
      };
    })(),
    ra = (function () {
      function a(l) {
        var r = { ha: null, indices: null };
        r.ha = l.createBuffer();
        l.bindBuffer(l.ARRAY_BUFFER, r.ha);
        l.bufferData(
          l.ARRAY_BUFFER,
          new Float32Array([-1, -1, 3, -1, -1, 3]),
          l.STATIC_DRAW
        );
        r.indices = l.createBuffer();
        l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, r.indices);
        l.bufferData(
          l.ELEMENT_ARRAY_BUFFER,
          new Uint16Array([0, 1, 2]),
          l.STATIC_DRAW
        );
        return r;
      }
      var b = null,
        d = 0,
        e = !1,
        g = [],
        m = -2,
        n = -2,
        q = {
          reset: function () {
            n = m = -2;
          },
          A: function () {
            e || ((b = a(c)), q.Ea(), (e = !0));
          },
          instance: function (l) {
            var r = d++,
              v = l.indices ? l.indices.length : 0,
              C = "undefined" === typeof l.mode ? c.STATIC_DRAW : l.mode,
              x = c.createBuffer();
            c.bindBuffer(c.ARRAY_BUFFER, x);
            c.bufferData(
              c.ARRAY_BUFFER,
              l.ha instanceof Float32Array ? l.ha : new Float32Array(l.ha),
              C
            );
            m = r;
            var u = null,
              F = null,
              G = null;
            if (l.indices) {
              u = c.createBuffer();
              c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, u);
              var f = null;
              65536 > l.indices.length
                ? ((f = Uint16Array), (F = c.UNSIGNED_SHORT), (G = 2))
                : ((f = Uint32Array), (F = c.UNSIGNED_INT), (G = 4));
              f = l.indices instanceof f ? l.indices : new f(l.indices);
              c.bufferData(c.ELEMENT_ARRAY_BUFFER, f, C);
              n = r;
            }
            var y = {
              Ve: function (J) {
                m !== r && (c.bindBuffer(c.ARRAY_BUFFER, x), (m = r));
                J && Ba.Xc();
              },
              Se: function () {
                n !== r && (c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, u), (n = r));
              },
              bind: function (J) {
                y.Ve(J);
                y.Se();
              },
              ph: function () {
                c.drawElements(c.TRIANGLES, v, F, 0);
              },
              qh: function (J, B) {
                c.drawElements(c.TRIANGLES, J, F, B * G);
              },
              remove: function () {
                c.deleteBuffer(x);
                l.indices && c.deleteBuffer(u);
                y = null;
              },
            };
            g.push(y);
            return y;
          },
          Ea: function () {
            -1 !== m && (c.bindBuffer(c.ARRAY_BUFFER, b.ha), (m = -1));
            -1 !== n &&
              (c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, b.indices), (n = -1));
          },
          l: function (l, r) {
            l && ra.Ea();
            r && Ba.Ka();
            c.drawElements(c.TRIANGLES, 3, c.UNSIGNED_SHORT, 0);
          },
          zb: function (l) {
            l = l || c;
            var r = a(l);
            l.bindBuffer(l.ARRAY_BUFFER, r.ha);
            l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, r.indices);
            Ba.Wb(l);
            l.clear(l.COLOR_BUFFER_BIT);
            l.drawElements(l.TRIANGLES, 3, l.UNSIGNED_SHORT, 0);
            l.flush();
            l.bindBuffer(l.ARRAY_BUFFER, null);
            l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null);
            l.deleteBuffer(r.ha);
            l.deleteBuffer(r.indices);
            q.reset();
            e && (q.Ea(), Ba.Ka());
          },
          Id: function () {
            var l = c,
              r = b;
            l.deleteBuffer(r.ha);
            l.deleteBuffer(r.indices);
          },
          m: function () {
            q.Id();
            g.forEach(function (l) {
              l.remove();
            });
            c.bindBuffer(c.ARRAY_BUFFER, null);
            c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null);
            q.reset();
            e = !1;
            g.splice(0);
            d = 0;
          },
        };
      return q;
    })(),
    ta = (function () {
      var a = null,
        b = null,
        d = null,
        e = !1,
        g = [],
        m = { I: -2, Gd: 1 },
        n = {
          Jb: function () {
            return e;
          },
          A: function () {
            if (!e) {
              a = c.createFramebuffer();
              var q = aa.qa();
              b = q && c.DRAW_FRAMEBUFFER ? c.DRAW_FRAMEBUFFER : c.FRAMEBUFFER;
              d = q && c.READ_FRAMEBUFFER ? c.READ_FRAMEBUFFER : c.FRAMEBUFFER;
              e = !0;
            }
          },
          Ph: function () {
            return b;
          },
          Lf: function () {
            return d;
          },
          oc: function () {
            return c.FRAMEBUFFER;
          },
          Xh: function () {
            return m;
          },
          Hh: function () {
            return a;
          },
          instance: function (q) {
            void 0 === q.Td && (q.Td = !1);
            var l = q.D ? q.D : null,
              r = q.width,
              v = void 0 !== q.height ? q.height : q.width,
              C = a,
              x = null,
              u = !1,
              F = !1,
              G = 0;
            l && ((r = r ? r : l.J()), (v = v ? v : l.ba()));
            var f = {
              xe: function () {
                u || ((C = c.createFramebuffer()), (u = !0), (G = m.Gd++));
              },
              Ne: function () {
                f.xe();
                f.v();
                x = c.createRenderbuffer();
                c.bindRenderbuffer(c.RENDERBUFFER, x);
                c.renderbufferStorage(
                  c.RENDERBUFFER,
                  c.DEPTH_COMPONENT16,
                  r,
                  v
                );
                c.framebufferRenderbuffer(
                  b,
                  c.DEPTH_ATTACHMENT,
                  c.RENDERBUFFER,
                  x
                );
                c.clearDepth(1);
              },
              bind: function (y, J) {
                G !== m.I && (c.bindFramebuffer(b, C), (m.I = G));
                l && l.v();
                J && c.viewport(0, 0, r, v);
                y && c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
              },
              Yg: function () {
                G !== m.I && (c.bindFramebuffer(b, C), (m.I = G));
              },
              clear: function () {
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
              },
              ih: function () {
                c.clear(c.COLOR_BUFFER_BIT);
              },
              jh: function () {
                c.clear(c.DEPTH_BUFFER_BIT);
              },
              Hg: function () {
                c.viewport(0, 0, r, v);
              },
              v: function () {
                G !== m.I && (c.bindFramebuffer(b, C), (m.I = G));
              },
              rtt: function (y) {
                l = y;
                m.I !== G && (c.bindFramebuffer(c.FRAMEBUFFER, C), (m.I = G));
                y.v();
              },
              N: function () {
                c.bindFramebuffer(b, null);
                m.I = -1;
              },
              resize: function (y, J) {
                r = y;
                v = J;
                x &&
                  (c.bindRenderbuffer(c.RENDERBUFFER, x),
                  c.renderbufferStorage(
                    c.RENDERBUFFER,
                    c.DEPTH_COMPONENT16,
                    r,
                    v
                  ));
              },
              remove: function () {
                C === a ||
                  F ||
                  (c.bindFramebuffer(b, C),
                  c.framebufferTexture2D(
                    b,
                    c.COLOR_ATTACHMENT0,
                    c.TEXTURE_2D,
                    null,
                    0
                  ),
                  x &&
                    c.framebufferRenderbuffer(
                      b,
                      c.DEPTH_ATTACHMENT,
                      c.RENDERBUFFER,
                      null
                    ),
                  c.bindFramebuffer(b, null),
                  (m.I = -1),
                  c.deleteFramebuffer(C),
                  x && c.deleteRenderbuffer(x));
                F = !0;
              },
            };
            q.Td && f.Ne();
            g.push(f);
            return f;
          },
          N: function () {
            c.bindFramebuffer(b, null);
            m.I = -1;
          },
          Sg: function () {
            c.bindFramebuffer(b, null);
            c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
            aa.De();
            m.I = -1;
          },
          reset: function () {
            m.I = -2;
          },
          ia: function () {
            0 !== m.I && (c.bindFramebuffer(b, a), (m.I = 0));
          },
          clear: function () {
            aa.De();
            c.clear(c.COLOR_BUFFER_BIT);
          },
          m: function () {
            n.N();
            g.forEach(function (q) {
              q.remove();
            });
            null !== a && (c.deleteFramebuffer(a), (a = null));
            n.reset();
            e = !1;
            g.splice(0);
            m.Gd = 1;
          },
        };
      return n;
    })(),
    aa = (function () {
      function a() {
        q = "undefined" === typeof Ha ? JEContext : Ha;
        l = !0;
      }
      function b(h, t, H) {
        for (var L = 0; L < t.length; ++L) {
          var w = H.getExtension(t[L] + "_" + h);
          if (w) return w;
        }
        return null;
      }
      function d() {
        null !== f.Zb && (clearTimeout(f.Zb), (f.Zb = null));
        f.Ga = !1;
      }
      function e(h) {
        if (0 === f.ua.length) {
          f.ca = c.PIXEL_PACK_BUFFER;
          f.ua.splice(0);
          f.Cb.splice(0);
          for (var t = 0; t < f.Ua; ++t)
            f.ua.push(c.createBuffer()), f.Cb.push(-1);
          f.la = 0;
          f.Hc = 0;
        }
        c.bindBuffer(f.ca, f.ua[f.la]);
        h.byteLength !== f.Cb[f.la] &&
          (c.bufferData(f.ca, h.byteLength, c.STREAM_READ),
          (f.Cb[f.la] = h.byteLength));
        f.di = !0;
      }
      function g() {
        c.bindBuffer(f.ca, null);
      }
      function m() {
        f.Fa.forEach(function (h) {
          c.deleteSync(h);
        });
        f.Fa.splice(0);
      }
      function n() {
        f.la = (f.la + 1) % f.Ua;
        ++f.Hc;
      }
      var q = null,
        l = !1,
        r = {
          Xd: !1,
          ad: null,
          bd: null,
          ae: !1,
          eg: !1,
          cd: null,
          be: !1,
          dd: null,
          Yd: !1,
          ec: null,
          Yf: !1,
          fc: null,
          Zf: !1,
        },
        v = null,
        C = { ma: !0, pa: !0, lc: !0, pe: !1 },
        x = null,
        u = !0,
        F = null,
        G = null,
        f = {
          ef: 1,
          Ua: -1,
          la: 0,
          Hc: 0,
          Ga: !1,
          ua: [],
          Fa: [],
          Cb: [],
          ca: null,
          Zb: null,
        },
        y = "EXT WEBGL OES MOZ_OES WEBKIT_OES KHR".split(" "),
        J = ["OES", "MOZ_OES", "WEBKIT_OES"],
        B = "undefined" === typeof window ? {} : window,
        z = {
          A: function () {
            if (l) return !0;
            z.reset();
            l || a();
            var h = c;
            if (!v.Xd) {
              v.ad = z.Dd(h);
              B.GL_EXT_FLOAT = v.ad;
              v.ae = v.ad ? !0 : !1;
              if (v.ae || z.qa())
                (v.bd = z.Ed(h)),
                  (v.eg = v.bd ? !0 : !1),
                  (B.GL_EXT_FLOATLINEAR = v.bd);
              v.Xd = !0;
            }
            if (!v.Yd) {
              v.cd = z.xb(h);
              v.cd && ((v.be = !0), (B.GL_EXT_HALFFLOAT = v.cd));
              if (v.be || z.qa())
                (v.dd = z.Fd(h)), (B.GL_EXT_HALFFLOATLINEAR = v.dd);
              v.ei = v.dd ? !0 : !1;
              v.Yd = !0;
            }
            v.ec = z.Bd(h);
            v.Yf = v.ec ? !0 : !1;
            B.GL_EXT_COLORBUFFERFLOAT = v.ec;
            v.fc = z.Cd(h);
            v.Zf = v.fc ? !0 : !1;
            B.GL_EXT_COLORBUFFERHALFFLOAT = v.fc;
            ta.A();
            Da.A();
            if (!z.jf()) return !1;
            ra.A();
            Da.Wf();
            return !0;
          },
          reset: function () {
            v = Object.assign({}, r);
            x = Object.assign({}, C);
          },
          J: function () {
            l || a();
            return q.J();
          },
          ba: function () {
            l || a();
            return q.ba();
          },
          qa: function () {
            l || a();
            return q.qa();
          },
          Ad: function (h) {
            z.Bd(h);
            z.Cd(h);
            z.Dd(h);
            z.Ed(h);
            z.xb(h);
            z.Fd(h);
          },
          Bd: b.bind(null, "color_buffer_float", y),
          Cd: b.bind(null, "color_buffer_half_float", y),
          Dd: b.bind(null, "texture_float", J),
          Ed: b.bind(null, "texture_float_linear", J),
          xb: b.bind(null, "texture_half_float", J),
          Fd: b.bind(null, "texture_half_float_linear", J),
          nc: function (h) {
            var t = z.xb(h);
            return t && t.HALF_FLOAT_OES
              ? t.HALF_FLOAT_OES
              : h.HALF_FLOAT || h.FLOAT;
          },
          If: function () {
            return G || c.RGBA32F || c.RGBA;
          },
          Jf: function () {
            return F || c.RGBA16F || c.RGBA;
          },
          Ff: function () {
            return x;
          },
          rd: function () {
            return x.ma;
          },
          dh: function () {
            return x.pa;
          },
          bh: function () {
            return x.lc;
          },
          Ye: function () {
            return x.pe && u;
          },
          Ie: function (h) {
            u = h;
            !h && f.Ga && (m(), c.bindBuffer(f.ca, null), (f.Ga = !1));
          },
          ki: function () {
            return f.Ga;
          },
          Xb: function (h, t, H) {
            function L() {
              h.bindTexture(h.TEXTURE_2D, null);
              h.bindFramebuffer(w, null);
              h.deleteTexture(k);
              h.deleteFramebuffer(N);
            }
            var w = h.FRAMEBUFFER,
              O = h.NEAREST,
              N = h.createFramebuffer();
            h.bindFramebuffer(w, N);
            var k = h.createTexture();
            h.activeTexture(h.TEXTURE0);
            h.bindTexture(h.TEXTURE_2D, k);
            h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1);
            h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
            h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
            h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, O);
            h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, O);
            h.texImage2D(h.TEXTURE_2D, 0, t, 3, 3, 0, h.RGBA, H, null);
            h.framebufferTexture2D(
              h.FRAMEBUFFER,
              h.COLOR_ATTACHMENT0,
              h.TEXTURE_2D,
              k,
              0
            );
            if (
              h.checkFramebufferStatus(h.READ_FRAMEBUFFER || h.FRAMEBUFFER) !==
              h.FRAMEBUFFER_COMPLETE
            )
              return L(), !1;
            Ba.Wc(h);
            h.clearColor(0, 0, 0, 0);
            h.viewport(0, 0, 3, 3);
            h.disable(h.DEPTH_TEST);
            h.clear(h.COLOR_BUFFER_BIT);
            ra.zb(h);
            h.bindFramebuffer(w, null);
            Ba.ib(h);
            h.activeTexture(h.TEXTURE0);
            h.bindTexture(h.TEXTURE_2D, k);
            ra.zb(h);
            t = new Uint8Array(36);
            h.readPixels(0, 0, 3, 3, h.RGBA, h.UNSIGNED_BYTE, t);
            L();
            for (H = 0; 36 > H; ++H)
              if (3 !== H % 4 && 3 < Math.abs(t[H] - 127)) return !1;
            return !0;
          },
          ic: function (h) {
            var t = { ma: !1, pa: !1 };
            h.disable(h.BLEND);
            h.clearColor(0, 0, 0, 0);
            h.clear(h.COLOR_BUFFER_BIT);
            h.RGBA32F &&
              z.Xb(h, h.RGBA32F, h.FLOAT) &&
              ((t.ma = !0), (G = h.RGBA32F));
            !t.ma && z.Xb(h, h.RGBA, h.FLOAT) && ((t.ma = !0), (G = h.RGBA));
            var H = z.nc(h);
            F = null;
            h.RGBA16F &&
              z.Xb(h, h.RGBA16F, H) &&
              ((t.pa = !0), (F = h.RGBA16F));
            !t.pa && z.Xb(h, h.RGBA, H) && ((t.pa = !0), (F = h.RGBA));
            return t;
          },
          kf: function () {
            var h = ta.instance({ width: 2 });
            h.xe();
            var t = Da.instance({ width: 2, isFloat: !0, Mb: 3 });
            h.v();
            t.v();
            z.flush();
            c.checkFramebufferStatus(ta.Lf()) !== c.FRAMEBUFFER_COMPLETE
              ? (Da.Ag(), (x.lc = !1))
              : (x.lc = !0);
            h.remove();
            t.remove();
          },
          lf: function () {
            var h = !1;
            z.qa() &&
              (h =
                "PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer"
                  .split(" ")
                  .every(function (t) {
                    return "undefined" !== typeof c[t];
                  }));
            x.pe = h;
          },
          jf: function () {
            var h = z.ic(c);
            Object.assign(x, h);
            if (!x.ma && !x.pa) return !1;
            z.kf();
            z.lf();
            return !0;
          },
          re: function (h, t, H, L, w) {
            c.readPixels(h, t, H, L, c.RGBA, c.UNSIGNED_BYTE, w);
            return Promise.resolve(w, !1);
          },
          Ub: function (h, t, H, L, w, O, N) {
            if (!z.Ye()) return z.re(h, t, H, L, w);
            f.Ua = N || f.ef;
            e(w);
            c.readPixels(h, t, H, L, c.RGBA, c.UNSIGNED_BYTE, 0);
            f.Fa[f.la] = c.fenceSync(c.SYNC_GPU_COMMANDS_COMPLETE, 0);
            z.flush();
            var k = !1;
            return new Promise(function (p, K) {
              function M() {
                if (!f.Ga) return d(), g(), n(), K(), !1;
                var P = (f.la + 1) % f.Ua;
                switch (c.clientWaitSync(f.Fa[P], 0, 0)) {
                  case c.TIMEOUT_EXPIRED:
                  case c.WAIT_FAILED:
                    break;
                  default:
                    return (
                      d(),
                      c.deleteSync(f.Fa[P]),
                      (f.Fa[P] = null),
                      c.bindBuffer(f.ca, f.ua[P]),
                      c.getBufferSubData(f.ca, 0, w),
                      g(),
                      n(),
                      p(w, k),
                      !0
                    );
                }
                f.Zb = setTimeout(M, 0);
                return !1;
              }
              d();
              f.Hc + 1 < f.Ua
                ? (g(), n(), p(w, !1))
                : ((f.Ga = !0), M() || !O || k || ((k = !0), O()));
            });
          },
          De: function () {
            c.viewport(0, 0, z.J(), z.ba());
          },
          flush: function () {
            c.flush();
          },
          m: function () {
            d();
            m();
            Da.m();
            ta.m();
            ra.m();
            f.ua.forEach(function (h) {
              c.deleteBuffer(h);
            });
            f.ua.splice(0);
            Ba.reset();
            l = !1;
          },
        };
      return z;
    })(),
    Q = ra,
    wa = ta,
    Z = Da,
    Ea = (function () {
      function a(h, t, H, L) {
        f.texParameteri(
          f.TEXTURE_2D,
          f.TEXTURE_MIN_FILTER,
          L ? f.NEAREST_MIPMAP_NEAREST : f.LINEAR
        );
        var w = null;
        if (null !== H)
          try {
            w = f.getError();
            if ("FUCKING_BIG_ERROR" === w) return !1;
            f.texImage2D(f.TEXTURE_2D, 0, h, 4, 4, 0, f.RGBA, t, H);
            w = f.getError();
            if (w !== f.NO_ERROR) return !1;
          } catch (O) {
            return !1;
          }
        L && f.generateMipmap(f.TEXTURE_2D);
        f.clear(f.COLOR_BUFFER_BIT);
        Q.zb(f);
        w = f.getError();
        if ("FUCKING_BIG_ERROR" === w) return !1;
        f.readPixels(0, 0, 2, 2, f.RGBA, f.UNSIGNED_BYTE, v);
        w = f.getError();
        w === f.INVALID_OPERATION &&
          "undefined" !== typeof f.PIXEL_PACK_BUFFER &&
          (f.bindBuffer(f.PIXEL_PACK_BUFFER, null),
          f.readPixels(0, 0, 2, 2, f.RGBA, f.UNSIGNED_BYTE, v),
          (w = f.getError()));
        if (w !== f.NO_ERROR) return !1;
        H = !0;
        for (L = 0; 16 > L; ++L) H = H && 4 > Math.abs(v[L] - 127);
        H && ((l.le = t), (l.Sd = h));
        return H;
      }
      function b(h, t) {
        return y.ma && a(h, f.FLOAT, new Float32Array(C), t)
          ? ((q = n.md), !0)
          : !1;
      }
      function d(h, t, H) {
        if (!y.pa) return !1;
        var L = Da.df(C),
          w = aa.xb(f);
        if (
          (w && w.HALF_FLOAT_OES && a(h, w.HALF_FLOAT_OES, L, t)) ||
          (f.HALF_FLOAT && a(h, f.HALF_FLOAT, L, t))
        )
          return (q = n.Oa), !0;
        L = new Float32Array(C);
        if (a(h, f.FLOAT, L, t)) return (q = n.Oa), !0;
        f.bindTexture(f.TEXTURE_2D, H);
        f.texImage2D(
          f.TEXTURE_2D,
          0,
          f.RGBA,
          2,
          2,
          0,
          f.RGBA,
          f.UNSIGNED_BYTE,
          null
        );
        f.bindFramebuffer(l.vb, z);
        Da.Hd(f, H, 2, 2, L, !1, !1);
        f.bindFramebuffer(l.vb, null);
        f.bindTexture(f.TEXTURE_2D, H);
        return a(h, null, null, t) ? ((q = n.Oa), !0) : !1;
      }
      function e(h, t, H) {
        r = !0;
        if (d(h, !0, H) || b(t, !0)) return !0;
        r = !1;
        return d(h, !1, H) || b(t, !1) ? !0 : !1;
      }
      function g(h) {
        if (q === n.O) {
          f = h || c;
          q = n.RGBA8;
          r = !0;
          aa.Ad(f);
          y || (y = aa.ic(f));
          wa.reset();
          z = f.createFramebuffer();
          l.vb = f.DRAW_FRAMEBUFFER || f.FRAMEBUFFER;
          f.bindFramebuffer(l.vb, null);
          f.clearColor(0, 0, 0, 0);
          f.viewport(0, 0, 2, 2);
          A.O();
          J = A.ib(f);
          h = f.createTexture();
          f.activeTexture(f.TEXTURE0);
          f.bindTexture(f.TEXTURE_2D, h);
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.REPEAT);
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.REPEAT);
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST);
          B = h;
          var t = (h = f.RGBA),
            H = f.RGBA16F,
            L = f.RGBA32F;
          L && (h = L);
          H && (t = H);
          if ((H || L) && e(t, h, B)) return m(), !0;
          h = t = f.RGBA;
          if (e(t, h, B)) return m(), !0;
          q = n.RGBA8;
          m();
          return !1;
        }
      }
      function m() {
        f.deleteProgram(J.ya);
        f.deleteTexture(B);
        B = J = null;
      }
      for (
        var n = { O: -1, md: 3, Oa: 2, RGBA8: 0 },
          q = n.O,
          l = { le: null, Sd: null, vb: null },
          r = !0,
          v = new Uint8Array(16),
          C = Array(64),
          x = 0;
        4 > x;
        ++x
      )
        for (var u = 0; 4 > u; ++u) {
          var F = 0 === (u + x) % 2 ? 1 : 0,
            G = 4 * x + u;
          C[4 * G] = F;
          C[4 * G + 1] = F;
          C[4 * G + 2] = F;
          C[4 * G + 3] = F;
        }
      var f = null,
        y = null,
        J = null,
        B = null,
        z = null;
      return {
        Xe: function (h) {
          g(h);
          return r;
        },
        qd: function (h, t) {
          q === n.O && (typeof ("undefined" !== t) && (y = t), g(h));
          return q !== n.RGBA8;
        },
        hi: function (h) {
          g(h);
          return q === n.md;
        },
        fg: function (h) {
          g(h);
          return q === n.Oa;
        },
        Qh: function (h) {
          g(h);
          return l.le;
        },
        Kf: function (h) {
          g(h);
          return l.Sd;
        },
        m: function () {
          f = null;
          r = !0;
          q = n.O;
          y = null;
        },
      };
    })(),
    Zb = (function () {
      return {
        instance: function (a) {
          function b() {
            v && v.remove();
            v = Z.instance({
              isFloat: !1,
              isPot: !1,
              width: d.size * d.Y[0],
              height: d.size * d.Y[1],
            });
          }
          var d = Object.assign(
              {
                mask: null,
                size: -1,
                preprocessing: "none",
                preprocessingSize: a.size,
                customInputShader: null,
                nBlurPass: 1,
                varianceMin: 0.1,
                blurKernelSizePx: 5,
                gain: 1,
                overlap: 0,
                isNormalized: !1,
                tilt: -1,
                Y: [1, 1],
              },
              a
            ),
            e = null,
            g = !1,
            m = !1,
            n = null,
            q = !1;
          a = !1;
          var l = null;
          d.mask &&
            ((g = !0),
            "undefined" !== typeof sa &&
              sa &&
              void 0 !== sa.Re &&
              (d.mask = sa.Re + d.mask),
            (e = Z.instance({ isFloat: !1, url: d.mask })));
          var r = null;
          d.customInputShader &&
            ((r = "s50"),
            A.od({
              name: "_",
              id: r,
              g: d.customInputShader,
              Pi: ["uSource"],
              precision: "lowp",
            }),
            A.S(r, [{ type: "1i", name: "_", value: 0 }]));
          switch (d.preprocessing) {
            case "sobel":
              l = "s39";
              q = !0;
              break;
            case "meanNormalization":
              l = "s40";
              q = !0;
              break;
            case "grayScale":
              l = "s36";
              q = !1;
              break;
            case "grayScaleTilt":
              l = "s37";
              a = !0;
              q = !1;
              break;
            case "rgbGrayTilt":
              l = "s38";
              a = !0;
              q = !1;
              break;
            case "copy":
              l = r ? r : "s0";
              break;
            case "inputLightRegulation":
              l = r ? r : "s36";
              n = xc.instance({
                Rd: d.preprocessingSize,
                ke: d.size,
                he: d.nBlurPass,
                da: !1,
              });
              m = !0;
              break;
            case "inputMix0":
              l = "none";
              n = yc.instance({
                o: d.preprocessingSize,
                sa: d.varianceMin,
                ja: d.blurKernelSizePx,
                gain: d.gain || 1,
                da: !1,
              });
              m = !0;
              break;
            case "inputMix1":
              l = "none";
              n = zc.instance({
                o: d.preprocessingSize,
                sa: d.varianceMin,
                ja: d.blurKernelSizePx,
                gain: d.gain || 1,
                da: !1,
              });
              m = !0;
              break;
            case "inputCut4":
              l = "none";
              n = Ac.instance({
                o: d.preprocessingSize,
                sa: d.varianceMin,
                ja: d.blurKernelSizePx,
                gain: d.gain || 1,
                ab: d.isNormalized || !1,
                Rc: d.overlap || 0,
                da: !1,
              });
              d.preprocessingSize *= n.Mf();
              m = !0;
              break;
            case "direct":
            case "none":
            case "abort":
              l = "abort";
              break;
            default:
              l = "s4";
          }
          d.preprocessingSize = Math.ceil(d.preprocessingSize);
          a && A.S(l, [{ name: "u29", type: "1f", value: d.tilt }]);
          g && (l += "Mask");
          var v = null;
          b();
          var C = {
            J: function () {
              return d.size;
            },
            Nf: function () {
              return d.preprocessingSize;
            },
            pc: function () {
              return C.J();
            },
            Rf: function () {
              return m ? n.Za() : v;
            },
            $b: function (x) {
              d.Y = x;
              b();
            },
            Z: function (x) {
              wa.ia();
              if ("abort" === l) return x.h(0), x;
              "none" !== l &&
                (A.set(l),
                q && A.F("u30", 1 / d.size),
                v.M(),
                g && e.h(1),
                Q.l(!1, !1),
                v.h(0),
                (x = v));
              m && n.process(x);
            },
            m: function () {
              v.remove();
              g && e.remove();
            },
          };
          return C;
        },
      };
    })(),
    $b = (function () {
      return {
        instance: function (a) {
          function b() {
            if (z.La) {
              g.input && (g.input.remove(), g.Fb.remove());
              var t = a.size * a.sparsity;
              B = Math.log(t / a.size) / Math.log(2);
              g.input = Z.instance({
                isMipmap: !0,
                isFloat: !0,
                isPot: !0,
                width: t * a.Y[0],
                height: t * a.Y[1],
                Cc: B,
              });
              g.Fb = Z.instance({
                isFloat: !0,
                isPot: !0,
                width: a.size * a.Y[0],
                height: a.size * a.Y[1],
              });
            }
          }
          function d() {
            g.output && g.output.remove();
            g.output = Z.instance({
              isFloat: !0,
              isPot: !n,
              isLinear: !n && q.isLinear,
              width: a.size * a.Y[0],
              height: a.size * a.Y[1],
            });
          }
          function e(t) {
            q.buffer.forEach(function (H, L) {
              q.results[L][0] = t[0][H];
              q.results[L][1] = t[1][H];
              q.results[L][2] = t[2][H];
              q.results[L][3] = t[3][H];
            });
            return q.results;
          }
          a.normalize = a.normalize || !1;
          var g = {
              input: null,
              bias: null,
              Fb: null,
              output: null,
              Qc: null,
              Oc: null,
              Pc: null,
            },
            m = null,
            n = !0,
            q = {
              type: "undef",
              G: null,
              isLinear: !1,
              buffer: [],
              results: [],
              Hb: !1,
            },
            l = -1,
            r = a.isReorganize ? a.isReorganize : !1,
            v = a.kernelsCount ? !0 : !1,
            C = [a.$a ? "s32" : "s31", a.$a ? "s34" : "s33", "s35"][
              a.shiftRGBAMode || 0
            ],
            x = { isEnabled: !1 },
            u = 1 / a.size;
          a.cg
            ? ((a.sparsity =
                "undefined" !== typeof a.sparsity ? a.sparsity : a.Rb.pc()),
              (n = !1))
            : "full" === a.connectivityUp && (a.sparsity = a.Rb.pc());
          var F = {
              elu: "s19",
              elu01: "s20",
              relu: "s17",
              gelu: "s18",
              arctan: "s21",
              arctan2: "s22",
              sigmoid: "s16",
              copy: "s0",
            }[a.activation],
            G = a.sparsity * a.sparsity,
            f = !1,
            y = a.size,
            J = "";
          if (a.maxPooling) {
            switch (a.maxPooling.size) {
              case 2:
                J = "s41";
                break;
              case 4:
                J = "s42";
            }
            f = !0;
            y /= a.maxPooling.size;
            g.Oc = Z.instance({ isFloat: !0, isPot: !1, width: y });
          }
          var B = -1,
            z = null;
          n && d();
          g.bias = Z.instance(a.bias);
          var h = {
            J: function () {
              return a.size;
            },
            pc: function () {
              return y;
            },
            Jd: function () {
              return a.classesCount;
            },
            Te: function (t) {
              m.h(t);
            },
            pg: function () {
              a.remap &&
                a.remap.isEnabled &&
                (x = {
                  isEnabled: !0,
                  kg: Z.instance(a.remap.maskTexture),
                  gb: a.remap.layers.map(function (t) {
                    return a.parent.Pf(t);
                  }),
                  depth: a.remap.depth,
                });
            },
            Bg: function () {
              switch (a.connectivityUp) {
                case "direct":
                  z = Bc.instance(a.connectivity);
                  break;
                case "square":
                  z = Cc.instance(a.connectivity);
                  break;
                case "squareFast":
                  z = Dc.instance(a.connectivity, a.activation);
                  break;
                case "full":
                  z = Ec.instance(Object.assign({ $a: a.$a }, a.connectivity));
                  break;
                case "conv":
                  (l = a.kernelsCount),
                    (z = Fc.instance(a.connectivity)),
                    r &&
                      (g.Qc = Z.instance({
                        width: y,
                        isFloat: !0,
                        isFlipY: !1,
                        isPot: !1,
                      }));
              }
              b();
            },
            Z: function (t, H) {
              m = t;
              z.La
                ? (g.input.M(),
                  v && g.bias.h(2),
                  z.Z(x),
                  g.input.h(0),
                  g.input.Df(B),
                  g.Fb.M(),
                  v ? A.set("s0") : (A.set(C), A.F("u4", G), g.bias.h(1)),
                  g.input.Ue(B, 0),
                  Q.l(!1, !1),
                  A.set(F),
                  g.output.v(),
                  g.Fb.h(0),
                  Q.l(!1, !1))
                : (g.output.M(), g.bias.h(1), z.Z());
              if (n)
                return (
                  (H = g.output),
                  f &&
                    (g.Oc.M(),
                    H.h(0),
                    A.set(J),
                    A.P("u14", u, u),
                    Q.l(!1, !1),
                    (H = g.Oc)),
                  r &&
                    (g.Qc.v(),
                    A.set("s24"),
                    A.P("u18", l, y / l),
                    H.h(0),
                    Q.l(!1, !1),
                    (H = g.Qc)),
                  H.h(0),
                  H
                );
              var L = g.output;
              if (a.normalize || q.Hb)
                (t = a.normalize),
                  A.set(q.Hb ? "s9" : "s8"),
                  A.F("u10", t ? u : 1),
                  g.Pc.M(),
                  L.h(0),
                  Q.l(!1, !1),
                  (L = g.Pc);
              t = null;
              switch (q.type) {
                case "cpuRGBA2Float":
                  L.xd(!1);
                  H ? (t = h.rg(L).then(q.G)) : ((L = h.sg(L)), q.G(L));
                  break;
                case "cpuMeanFloat":
                  L.xd(!0);
                  if (H) t = L.ug().then(q.G);
                  else {
                    L = L.vg();
                    for (var w = 0; w < L.length; ++w);
                    q.G(L);
                  }
                  break;
                case "gpuRawAvg":
                case "gpuRaw":
                  L.h(0);
                case "none":
                  null !== q.G && q.G(L);
              }
              H && null === t && (t = Promise.resolve());
              return t;
            },
            $b: function (t) {
              a.Y = t;
              b();
              d();
            },
            Jg: function (t) {
              t &&
                ((q.type = t.Pb || "none"),
                (q.G = t.Ob || null),
                (q.isLinear = t.Nc ? !0 : !1));
              d();
              t =
                "undefined" !== typeof a.classesCount && a.classesCount
                  ? a.classesCount
                  : a.size * a.size;
              for (var H = 0, L = 0, w = 0; H < t; ++H)
                q.buffer.push(L + (a.size - 1 - w) * a.size),
                  q.results.push([-1, -1, -1, -1]),
                  ++L,
                  L === a.size && ((L = 0), ++w);
              q.Hb = "gpuRawAvg" === q.type || "cpuMeanFloat" === q.type;
              if (a.normalize || q.Hb)
                g.Pc = Z.instance({ isFloat: !0, isPot: !0, width: a.size });
            },
            rg: function (t) {
              return t.tg().then(e);
            },
            sg: function (t) {
              t = t.qe();
              e(t);
              return q.results;
            },
            m: function () {
              for (var t in g) {
                var H = g[t];
                H && H.remove();
              }
              z && (z.m(), (z = null));
            },
          };
          a.Rb && h.Bg(a.Rb);
          return h;
        },
      };
    })(),
    Bc = (function () {
      return {
        instance: function (a) {
          var b = Z.instance(a.weights);
          return {
            La: !0,
            Bb: function () {
              return 1;
            },
            m: function () {
              b.remove();
            },
            Uf: function () {
              return b;
            },
            Z: function () {
              A.set("s30");
              b.h(1);
              Q.l(!1, !1);
            },
          };
        },
      };
    })(),
    Ec = (function () {
      return {
        instance: function (a) {
          var b = a.fromLayerSize,
            d = Z.instance(a.weights),
            e = a.$a ? "s27" : "s26";
          return {
            La: !0,
            Bb: function () {
              return b;
            },
            m: function () {
              d.remove();
            },
            Z: function (g) {
              if (g.isEnabled) {
                A.set("s28");
                g.kg.h(3);
                for (var m = Math.min(g.gb.length, g.depth), n = 0; n < m; ++n)
                  g.gb[n].Te(4 + n);
              } else A.set(e);
              A.F("u8", a.toLayerSize);
              A.F("u9", a.fromLayerSize);
              d.h(1);
              Q.l(!1, !1);
            },
          };
        },
      };
    })(),
    Cc = (function () {
      return {
        instance: function (a) {
          for (
            var b = a.fromLayerSize,
              d = a.toLayerSize,
              e = a.toSparsity,
              g = e * d,
              m = g / b,
              n = b / d,
              q = 0,
              l = 0,
              r = 0,
              v = Array(e * d * e * d * 4),
              C = Array(e * d * e * d * 4),
              x = Array(b * b),
              u = 0;
            u < x.length;
            ++u
          )
            x[u] = 0;
          u = Math.floor(e / 2);
          for (var F = 0.5 / d, G = 0.5 / b, f = 0.5 / g, y = 0; y < d; ++y)
            for (var J = Math.round(y * n), B = 0; B < d; ++B) {
              var z = Math.round(B * n),
                h = y / d,
                t = B / d;
              h += F;
              t += F;
              for (var H = 0; H < e; ++H) {
                var L = J + H - u;
                0 > L && (L += b);
                L >= b && (L -= b);
                for (var w = 0; w < e; ++w) {
                  var O = q / g,
                    N = l / g,
                    k = z + w - u;
                  0 > k && (k += b);
                  k >= b && (k -= b);
                  var p = L / b,
                    K = k / b;
                  N = 1 - N - 1 / g;
                  p += G;
                  K += G;
                  O += f;
                  N += f;
                  var M = y * e + H,
                    P = B * e + w;
                  P = d * e - P - 1;
                  M = P * d * e + M;
                  v[4 * M] = O;
                  v[4 * M + 1] = N;
                  v[4 * M + 2] = p;
                  v[4 * M + 3] = K;
                  K = x[k * b + L]++;
                  M = K % m;
                  p = L * m + M;
                  k = k * m + (K - M) / m;
                  k = b * m - 1 - k;
                  k = k * b * m + p;
                  C[4 * k] = O;
                  C[4 * k + 1] = N;
                  C[4 * k + 2] = h;
                  C[4 * k + 3] = t;
                  ++q >= g && ((q = 0), ++l);
                  ++r;
                }
              }
            }
          x = null;
          var fa = Z.instance(a.weights);
          delete a.weights.data;
          var ya = Z.instance({
            width: g,
            isFloat: !0,
            array: new Float32Array(C),
            isPot: !0,
          });
          C = null;
          var Ja = Z.instance({
            width: g,
            isFloat: !0,
            array: new Float32Array(v),
            isPot: !0,
          });
          v = null;
          return {
            La: !0,
            Bb: function () {
              return m;
            },
            m: function () {
              ya.remove();
              Ja.remove();
              fa.remove();
            },
            Z: function () {
              A.set("s25");
              fa.h(1);
              Ja.h(2);
              Q.l(!1, !1);
            },
          };
        },
      };
    })(),
    Fc = (function () {
      return {
        instance: function (a) {
          var b = a.kernelsCount,
            d = a.toSparsity,
            e = (d * a.toLayerSize) / a.fromLayerSize,
            g = a.inputScale || [1, 1],
            m = Z.instance(a.weights);
          return {
            La: !0,
            Bb: function () {
              return e;
            },
            ai: function () {
              return d;
            },
            Uf: function () {
              return m;
            },
            m: function () {
              m.remove();
            },
            Z: function () {
              A.set("s29");
              A.Dg("u28", g);
              A.F("u26", b);
              A.F("u27", d);
              A.F("u8", a.toLayerSize);
              A.F("u9", a.fromLayerSize);
              m.h(1);
              Q.l(!1, !1);
            },
          };
        },
      };
    })(),
    Dc = (function () {
      return {
        instance: function (a, b) {
          var d = a.fromLayerSize,
            e = a.toLayerSize,
            g = a.toSparsity,
            m = a.stride ? a.stride : 1,
            n = (g * e) / d,
            q = e < d,
            l = d / e,
            r = Z.instance(a.weights),
            v =
              "s51" +
              [d.toString(), e.toString(), g.toString(), m.toString(), b].join(
                "_"
              );
          A.zf(v) ||
            ((a = vc.Ef(b, "gl_FragColor", "gl_FragColor")),
            (e = [
              { type: "1f", name: "u8", value: e },
              { type: "1f", name: "u32", value: m },
            ]),
            q && e.push({ type: "1f", name: "u9", value: d }),
            (d = [(q ? n : g).toFixed(1), a]),
            q && d.push(l.toFixed(1)),
            A.Xf(q ? "s47" : "s46", v, d),
            A.S(
              v,
              e.concat([
                { type: "1i", name: "u6", value: 0 },
                { type: "1i", name: "u3", value: 1 },
                { type: "1i", name: "u7", value: 3 },
              ])
            ));
          return {
            La: !1,
            Bb: function () {
              return n;
            },
            m: function () {
              r.remove();
            },
            Z: function () {
              A.set(v);
              r.h(3);
              Q.l(!1, !1);
            },
          };
        },
      };
    })(),
    xc = (function () {
      return {
        instance: function (a) {
          var b = a.he ? a.he : 3,
            d = a.Rd ? a.Rd : 64,
            e = a.ke ? a.ke : 64,
            g = a.da ? !0 : !1;
          a = { isFloat: !1, width: d, isPot: !1, isFlipY: !1 };
          var m = Z.instance(a),
            n = Z.instance(a),
            q = Z.instance(a),
            l = Z.instance(a),
            r = Z.instance({ isFloat: !0, width: e, isPot: !1, isFlipY: !1 }),
            v = 1 / d;
          return {
            process: function (C) {
              A.set("s43");
              l.v();
              Q.l(g, !1);
              A.set("s44");
              for (var x = 0; x < b; ++x)
                m.v(),
                  A.P("u14", v, 0),
                  Q.l(g, !1),
                  q.v(),
                  l.h(0),
                  Q.l(g, !1),
                  n.v(),
                  m.h(0),
                  A.P("u14", 0, v),
                  Q.l(g, !1),
                  l.v(),
                  q.h(0),
                  Q.l(g, !1),
                  x !== b - 1 && n.h(0);
              A.set("s45");
              r.v();
              C.h(0);
              n.h(1);
              l.h(2);
              Q.l(g, !1);
              r.h(0);
            },
            Za: function () {
              return r;
            },
          };
        },
      };
    })(),
    yc = (function () {
      return {
        instance: function (a) {
          function b(v) {
            return Z.instance({
              isFloat: v,
              width: d.o,
              isPot: !1,
              isFlipY: !1,
            });
          }
          var d = Object.assign({ sa: 0.1, ja: 9, o: 128, gain: 1, da: !1 }, a),
            e = b(!1),
            g = [b(!1), b(!1), b(!1)],
            m = [b(!1), b(!1), b(!1)],
            n = b(!0),
            q = [e, m[0], m[1]];
          a =
            "uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u33;varying vec2 vv0;void main(){float b=0.,c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u33*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).r,c+=f;}b/=c,gl_FragColor=vec4(b,0.,0.,1.);}"
              .replace("1.1111", Math.round((d.ja - 1) / 2).toFixed(2))
              .replace("2.2222", (1 / d.o).toFixed(6));
          var l =
              "uniform sampler2D u34,u35,u36,u37;const float f=1.1111;const vec3 g=vec3(1.);const float h=2.2222;varying vec2 vv0;void main(){vec3 a=texture2D(u34,vv0).rgb;float c=texture2D(u35,vv0).r,d=texture2D(u36,vv0).r,i=texture2D(u37,vv0).r,j=a.r*a.r;vec3 b=vec3(c,d,i),k=max(g*f,abs(vec3(j)-b*b)),l=sqrt(k);gl_FragColor=vec4(a.r,h*(a-b)/l);}"
                .replace("1.1111", d.sa.toFixed(4))
                .replace("2.2222", d.gain.toFixed(4)),
            r = { u1: 0 };
          A.ob([
            {
              id: "s53",
              name: "_",
              g: "uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.);void main(){vec3 b=texture2D(u1,vv0).rgb;float a=dot(b,f);gl_FragColor=vec4(a,a,a,a);}",
              j: r,
              i: ["u1"],
              precision: "lowp",
            },
            {
              id: "s54",
              name: "_",
              g: a,
              j: r,
              i: ["u1", "u33"],
              precision: "lowp",
            },
            {
              id: "s55",
              name: "_",
              g: l,
              j: { u34: 0, u35: 1, u36: 2, u37: 3 },
              i: ["u34", "u35", "u36", "u37"],
              precision: "highp",
            },
          ]);
          return {
            process: function () {
              A.set("s53");
              e.M();
              Q.l(d.da, !1);
              A.set("s54");
              for (var v = 0; 3 > v; ++v)
                A.P("u33", 1, 0),
                  g[v].v(),
                  q[v].h(0),
                  Q.l(!1, !1),
                  A.P("u33", 0, 1),
                  m[v].v(),
                  g[v].h(0),
                  Q.l(!1, !1);
              A.set("s55");
              n.v();
              e.h(0);
              m[0].h(1);
              m[1].h(2);
              m[2].h(3);
              Q.l(!1, !1);
              n.h(0);
            },
            Za: function () {
              return n;
            },
          };
        },
      };
    })(),
    zc = (function () {
      return {
        instance: function (a) {
          function b(r) {
            return Z.instance({
              isFloat: r,
              width: d.o,
              isPot: !1,
              isFlipY: !1,
            });
          }
          var d = Object.assign({ sa: 0.1, ja: 9, o: 128, gain: 1, da: !1 }, a),
            e = b(!1),
            g = b(!1),
            m = b(!1),
            n = b(!0);
          a =
            "uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u33;varying vec2 vv0;void main(){vec3 b=vec3(0.);float c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u33*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).rgb,c+=f;}b/=c,gl_FragColor=vec4(b,1.);}"
              .replace("1.1111", Math.round((d.ja - 1) / 2).toFixed(2))
              .replace("2.2222", (1 / d.o).toFixed(6));
          var q =
              "uniform sampler2D u0,u38;const float f=1.1111;const vec3 g=vec3(1.);const float h=2.2222;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);vec3 c=texture2D(u38,vv0).rgb;float d=a.a*a.a;vec3 b=c.rgb,i=max(g*f,abs(vec3(d)-b*b)),j=sqrt(i);gl_FragColor=vec4(a.a,h*(a.rgb-b)/j);}"
                .replace("1.1111", d.sa.toFixed(4))
                .replace("2.2222", d.gain.toFixed(4)),
            l = { u1: 0 };
          A.ob([
            {
              id: "s56",
              name: "_",
              g: "uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.);void main(){vec3 a=texture2D(u1,vv0).rgb;float b=dot(a,f);gl_FragColor=vec4(a.rgb,b);}",
              j: l,
              i: ["u1"],
              precision: "lowp",
            },
            {
              id: "s57",
              name: "_",
              g: a,
              j: l,
              i: ["u1", "u33"],
              precision: "lowp",
            },
            {
              id: "s58",
              name: "_",
              g: q,
              j: { u0: 0, u38: 1 },
              i: ["u0", "u38"],
              precision: "highp",
            },
          ]);
          return {
            process: function () {
              A.set("s56");
              e.M();
              Q.l(d.da, !1);
              A.set("s57");
              A.P("u33", 1, 0);
              g.v();
              e.h(0);
              Q.l(!1, !1);
              A.P("u33", 0, 1);
              m.v();
              g.h(0);
              Q.l(!1, !1);
              A.set("s58");
              n.v();
              e.h(0);
              m.h(1);
              Q.l(!1, !1);
              n.h(0);
            },
            Za: function () {
              return n;
            },
          };
        },
      };
    })(),
    Ac = (function () {
      return {
        instance: function (a) {
          function b(v) {
            return Z.instance({
              isFloat: v,
              width: d.o,
              isPot: !1,
              isFlipY: !1,
            });
          }
          var d = Object.assign(
              { sa: 0.1, ja: 9, o: 128, gain: 1, Rc: 0, ab: !1, da: !1 },
              a
            ),
            e = b(!1),
            g = null,
            m = null,
            n = null;
          d.ab && ((g = b(!1)), (m = b(!1)), (n = b(!0)));
          a = { u1: 0 };
          var q = [
            {
              id: "s59",
              name: "_",
              g: "uniform sampler2D u1;const float f=1.1111;varying vec2 vv0;const vec3 e=vec3(.2126,.7152,.0722);void main(){vec2 a=vv0*.5*(f+1.);float b=.5*(1.-f),c=dot(texture2D(u1,a).rgb,e),d=dot(texture2D(u1,a+vec2(0.,b)).rgb,e),h=dot(texture2D(u1,a+vec2(b,0.)).rgb,e),i=dot(texture2D(u1,a+vec2(b,b)).rgb,e);gl_FragColor=vec4(c,d,h,i);}".replace(
                "1.1111",
                d.Rc.toFixed(4)
              ),
              j: a,
              i: ["u1"],
              precision: "lowp",
            },
          ];
          if (d.ab) {
            var l =
                "uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u33;varying vec2 vv0;void main(){vec4 b=vec4(0.);float c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u33*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j),c+=f;}gl_FragColor=b/c;}"
                  .replace("1.1111", Math.round((d.ja - 1) / 2).toFixed(2))
                  .replace("2.2222", (1 / d.o).toFixed(6)),
              r =
                "uniform sampler2D u0,u38;const float f=1.1111;const vec4 g=vec4(1.);const float h=2.2222;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u38,vv0),d=a*a,b=c,i=max(g*f,abs(d-b*b)),j=sqrt(i);gl_FragColor=h*(a-b)/j;}"
                  .replace("1.1111", d.sa.toFixed(4))
                  .replace("2.2222", d.gain.toFixed(4));
            q.push(
              {
                id: "s60",
                name: "_",
                g: l,
                j: a,
                i: ["u1", "u33"],
                precision: "lowp",
              },
              {
                id: "s61",
                name: "_",
                g: r,
                j: { u0: 0, u38: 1 },
                i: ["u0", "u38"],
                precision: "highp",
              }
            );
          }
          A.ob(q);
          return {
            process: function () {
              A.set("s59");
              e.M();
              Q.l(d.da, !1);
              d.ab
                ? (A.set("s60"),
                  A.P("u33", 1, 0),
                  g.v(),
                  e.h(0),
                  Q.l(!1, !1),
                  A.P("u33", 0, 1),
                  m.v(),
                  g.h(0),
                  Q.l(!1, !1),
                  A.set("s61"),
                  n.v(),
                  e.h(0),
                  m.h(1),
                  Q.l(!1, !1),
                  n.h(0))
                : e.h(0);
            },
            Mf: function () {
              return 2 - d.Rc;
            },
            Za: function () {
              return d.ab ? n : e;
            },
          };
        },
      };
    })(),
    Y = {
      Od: function () {
        return Y.ud() ? document.createElement("video") : !1;
      },
      Xa: function (a, b) {
        a[b] = !0;
        a.setAttribute(b, "true");
      },
      af: function () {
        var a = !1,
          b = navigator.userAgent || navigator.vendor || window.opera;
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            b
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            b.substr(0, 4)
          )
        )
          a = !0;
        return a;
      },
      $e: function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      },
      gg: function () {
        try {
          return window.matchMedia("(orientation: portrait)").matches ? !0 : !1;
        } catch (a) {
          return window.innerHeight > window.innerWidth;
        }
      },
      fh: function () {
        return Y.sd() || Y.$e();
      },
      Kg: function (a, b) {
        window.addEventListener(
          "beforeunload",
          function () {
            b &&
              b.getTracks &&
              b.getTracks().forEach(function (d) {
                b.removeTrack(d);
              });
            a.videoStream && a.videoStream.stop();
            a.videoStream = null;
          },
          !1
        );
      },
      sd: function () {
        var a = navigator.userAgent.toLowerCase();
        return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome")
          ? !0
          : !1;
      },
      Eh: function () {
        return Y.af()
          ? Y.gg()
            ? (window.innerHeight / window.innerWidth) * 45
            : 45
          : 45;
      },
      ud: function () {
        return navigator.mediaDevices && navigator.mediaDevices.getUserMedia
          ? !0
          : !1;
      },
      pause: function (a) {
        a.pause();
      },
      Bi: function (a) {
        a.play();
      },
      release: function (a) {
        a.pause();
        a.videoStream && a.videoStream.stop();
        a.videoStream = null;
      },
      td: function (a) {
        if (!a) return a;
        var b = null;
        if (a.video) {
          var d = function (e) {
            return e && "object" === typeof e ? Object.assign({}, e) : e;
          };
          b = {};
          "undefined" !== typeof a.video.width && (b.width = d(a.video.width));
          "undefined" !== typeof a.video.height &&
            (b.height = d(a.video.height));
          "undefined" !== typeof a.video.facingMode &&
            (b.facingMode = d(a.video.facingMode));
        }
        b = { audio: a.audio, video: b };
        "undefined" !== typeof a.deviceId && Y.nd(b, a.deviceId);
        return b;
      },
      nd: function (a, b) {
        b &&
          ((a.video = a.video || {}),
          (a.video.deviceId = { exact: b }),
          a.video.facingMode && delete a.video.facingMode);
      },
      Ge: function (a) {
        var b = a.video.width;
        a.video.width = a.video.height;
        a.video.height = b;
        return a;
      },
      ff: function (a) {
        function b(x) {
          return [
            480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366,
            1920,
          ].sort(function (u, F) {
            return Math.abs(u - x) - Math.abs(F - x);
          });
        }
        function d(x) {
          var u = Y.td(a);
          x = x(u);
          g.push(x);
          e(x);
        }
        function e(x) {
          if (x.video && x.video.facingMode && x.video.facingMode.exact) {
            var u = x.video.facingMode.exact;
            x = Y.td(x);
            delete x.video.facingMode.exact;
            x.video.facingMode.ideal = u;
            g.push(x);
          }
        }
        var g = [];
        if (!a || !a.video) return g;
        e(a);
        if (a.video.width && a.video.height) {
          if (a.video.width.ideal && a.video.height.ideal) {
            var m = b(a.video.width.ideal).slice(0, 3),
              n = b(a.video.height.ideal).slice(0, 3),
              q = {},
              l = 0;
            for (q.Ca = void 0; l < m.length; q = { Ca: q.Ca }, ++l) {
              q.Ca = m[l];
              var r = {},
                v = 0;
              for (r.va = void 0; v < n.length; r = { va: r.va }, ++v)
                if (
                  ((r.va = n[v]),
                  q.Ca !== a.video.width.ideal || r.va !== a.video.height.ideal)
                ) {
                  var C = Math.max(q.Ca, r.va) / Math.min(q.Ca, r.va);
                  C < 4 / 3 - 0.1 ||
                    C > 16 / 9 + 0.1 ||
                    d(
                      (function (x, u) {
                        return function (F) {
                          F.video.width.ideal = x.Ca;
                          F.video.height.ideal = u.va;
                          return F;
                        };
                      })(q, r)
                    );
                }
            }
          }
          d(function (x) {
            return Y.Ge(x);
          });
        }
        a.video.width &&
          a.video.height &&
          (a.video.width.ideal &&
            a.video.height.ideal &&
            d(function (x) {
              delete x.video.width.ideal;
              delete x.video.height.ideal;
              return x;
            }),
          d(function (x) {
            delete x.video.width;
            delete x.video.height;
            return x;
          }));
        a.video.facingMode &&
          (d(function (x) {
            delete x.video.facingMode;
            return x;
          }),
          a.video.width &&
            a.video.height &&
            d(function (x) {
              Y.Ge(x);
              delete x.video.facingMode;
              return x;
            }));
        g.push({ audio: a.audio, video: !0 });
        return g;
      },
      ge: function (a) {
        a.volume = 0;
        Y.Xa(a, "muted");
        if (Y.sd()) {
          if (1 === a.volume) {
            var b = function () {
              a.volume = 0;
              window.removeEventListener("mousemove", b, !1);
              window.removeEventListener("touchstart", b, !1);
            };
            window.addEventListener("mousemove", b, !1);
            window.addEventListener("touchstart", b, !1);
          }
          setTimeout(function () {
            a.volume = 0;
            Y.Xa(a, "muted");
          }, 5);
        }
      },
      Je: function (a, b, d) {
        return null === a
          ? Promise.resolve()
          : new Promise(function (e, g) {
              if (a.srcObject && a.srcObject.getVideoTracks) {
                var m = a.srcObject.getVideoTracks();
                1 !== m.length
                  ? g("INVALID_TRACKNUMBER")
                  : ((m = m[0]), b ? Y.get(a, e, g, d) : (m.stop(), e()));
              } else g("BAD_IMPLEMENTATION");
            });
      },
      Md: function (a, b, d, e) {
        function g(n) {
          m || ((m = !0), d(n));
        }
        var m = !1;
        return navigator.mediaDevices
          .getUserMedia(e)
          .then(function (n) {
            function q() {
              setTimeout(function () {
                if (a.currentTime) {
                  var r = a.videoHeight;
                  if (0 === a.videoWidth || 0 === r) g("VIDEO_NULLSIZE");
                  else {
                    r = { Ze: null, Ig: null, lg: null };
                    try {
                      var v = n.getVideoTracks()[0];
                      v &&
                        ((r.lg = v),
                        (r.Ze = v.getCapabilities()),
                        (r.Ig = v.getSettings()));
                    } catch (C) {}
                    m || (Y.Kg(a, n), b(a, n, r));
                  }
                } else g("VIDEO_NOTSTARTED");
              }, 700);
            }
            function l() {
              a.removeEventListener("loadeddata", l, !1);
              var r = a.play();
              Y.ge(a);
              "undefined" === typeof r
                ? q()
                : r
                    .then(function () {
                      q();
                    })
                    .catch(function () {
                      g("VIDEO_PLAYPROMISEREJECTED");
                    });
            }
            "undefined" !== typeof a.srcObject
              ? (a.srcObject = n)
              : ((a.src = window.URL.createObjectURL(n)), (a.videoStream = n));
            Y.ge(a);
            a.addEventListener("loadeddata", l, !1);
          })
          .catch(function (n) {
            g(n);
          });
      },
      Tf: function (a, b) {
        var d = b || Y.Od();
        return new Promise(function (e, g) {
          Y.get(d, e, g, a);
        });
      },
      get: function (a, b, d, e) {
        if (!a) return d && d("VIDEO_NOT_PROVIDED"), !1;
        if (!Y.ud()) return d && d("MEDIASTREAMAPI_NOT_FOUND"), !1;
        Y.Xa(a, "autoplay");
        Y.Xa(a, "playsinline");
        e && e.audio ? (a.volume = 0) : Y.Xa(a, "muted");
        Y.cf(e).then(function () {
          Y.Md(
            a,
            b,
            function () {
              function g(n) {
                if (0 === n.length)
                  d("NO_VALID_MEDIASTREAM_FALLBACK_CONSTRAINTS");
                else {
                  var q = n.shift();
                  Y.Md(
                    a,
                    b,
                    function () {
                      g(n);
                    },
                    q
                  );
                }
              }
              var m = Y.ff(e);
              g(m);
            },
            e
          );
        });
      },
      cf: function (a) {
        if (!a || !a.video || !a.video.facingMode)
          return Promise.resolve("NO_VIDEO_CONSTRAINTS");
        if (a.video.deviceId) return Promise.resolve("DEVICEID_ALREADY_SET");
        var b = a.video.facingMode;
        b = b.exact || b.ideal;
        if (!b) return Promise.resolve("NO_FACINGMODE");
        var d = { user: [], environment: ["camera2 0"] }[b];
        return d && 0 !== d.length
          ? new Promise(function (e) {
              Y.Nd(function (g) {
                g
                  ? (g = g.find(function (m) {
                      var n = m.label;
                      return n
                        ? d.some(function (q) {
                            return n.includes(q);
                          })
                        : !1;
                    }))
                    ? ((a.video.deviceId = { exact: g.deviceId }), e("SUCCESS"))
                    : e("NO_PREFERRED_DEVICE_FOUND")
                  : e("NO_DEVICES_FOUND");
              });
            })
          : Promise.resolve("NO_PREFERRED_CAMERAS");
      },
      Nd: function (a) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices)
          return a(!1, "NOTSUPPORTED"), !1;
        navigator.mediaDevices
          .enumerateDevices()
          .then(function (b) {
            (b = b.filter(function (d) {
              return (
                d.kind &&
                -1 !== d.kind.toLowerCase().indexOf("video") &&
                d.label &&
                d.deviceId
              );
            })) &&
            b.length &&
            0 < b.length
              ? a(b, !1)
              : a(!1, "NODEVICESFOUND");
          })
          .catch(function () {
            a(!1, "PROMISEREJECTED");
          });
      },
      eh: function (a, b, d) {
        var e = {};
        e[b] = d;
        b = [];
        b.push(e);
        a.applyConstraints({ advanced: b }).catch(function () {});
      },
    },
    va = (function () {
      function a(f, y, J, B, z, h, t) {
        if (!F)
          if (t === h.length) z();
          else {
            switch (h[t]) {
              case "A":
                J();
                break;
              case "D":
                f();
                break;
              case "S":
                y()
                  .then(function (H, L) {
                    G.Yb();
                    a(f, y, J, L ? null : B, z, h, ++t);
                  })
                  .catch(function (H) {
                    console.log("An error occurred in the WebAR loop: ", H);
                    z();
                  });
                return;
              case "R":
                B && B();
            }
            a(f, y, J, B, z, h, ++t);
          }
      }
      var b = {
          n: 5,
          Fc: 1,
          Ac: 0,
          Cf: [25, 39],
          wd: 45,
          wb: [2, 200],
          k: 0.7,
          Tg: 200,
          og: 0.05,
        },
        d = -1,
        e = null,
        g = -1,
        m = -1,
        n = 0,
        q = -1,
        l = -1,
        r = 0,
        v = null,
        C = 0,
        x = b.wb[1],
        u = Math.log(2),
        F = !0,
        G = {
          Qf: function () {
            switch (d) {
              case -1:
                return -1;
              case 0:
                return l + e.Ac;
              case 1:
                return r;
            }
          },
          Jh: function (f) {
            switch (d) {
              case -1:
                return 1;
              case 0:
                return Math.pow(
                  Math.min(Math.max(q, 0), e.n - 1) / (e.n - 1),
                  f || 1
                );
              case 1:
                return (r - e.Ac) / (e.n - 1);
            }
          },
          A: function (f) {
            e = Object.assign({}, b, f);
            q = l = e.Fc;
            d = 0;
            v = e.Cf.slice(0);
            G.reset();
            G.yf().then(function (y) {
              y >= e.wd || ((y /= e.wd), (v[0] *= y), (v[1] *= y));
            });
          },
          Yb: function (f) {
            f = ("undefined" === typeof f ? Date.now() : f) || 0;
            var y = Math.min(Math.max(f - C, e.wb[0]), e.wb[1]);
            x = y;
            C = f;
            var J = -1 === g ? 0 : e.k;
            g = Math.min(Math.max(1e3 / y, 5), 120) * (1 - J) + g * J;
            f - m > e.Tg &&
              5 < ++n &&
              ((y = e.k),
              (q = q * (1 - y) + (g < v[0] ? l - 1 : g > v[1] ? l + 1 : l) * y),
              Math.abs(q - l) > 1 - e.og &&
                ((y = Math.min(Math.max(Math.round(q), 0), e.n - 1)),
                y !== l && ((q = l = y), (g = 0.5 * (v[1] - v[0])))),
              (m = f));
          },
          Sc: function (f, y, J, B, z, h) {
            F = !1;
            a(f, y, J, B, z, h, 0);
          },
          stop: function () {
            F = !0;
          },
          Uc: function (f) {
            r = f;
            d = 1;
          },
          fd: function () {
            d = 0;
            G.reset();
          },
          reset: function () {
            x = b.wb[1];
            m = g = -1;
            n = 0;
          },
          Oi: function (f, y, J) {
            J = Math.exp((-u * x) / J);
            return (1 - J) * f + J * y;
          },
          Nh: function () {
            return x;
          },
          yf: function () {
            return new Promise(function (f) {
              function y(t) {
                t = t || Date.now();
                var H = Math.max(0, t - B);
                B = t;
                0 !== z++ && 0 < H && ((J = Math.min(J, H)), ++h);
                10 >= z
                  ? window.requestAnimationFrame(y)
                  : f(Math.round(1e3 / J));
              }
              var J = Infinity,
                B = 0,
                z = 0,
                h = 0;
              setTimeout(y, 1);
            });
          },
        };
      return G;
    })(),
    Pa = (function () {
      function a(C, x) {
        var u = C[0] - 0.5;
        C = C[1] - 0.5;
        var F = x[0] - 0.5;
        x = x[1] - 0.5;
        return u * u + C * C - (F * F + x * x);
      }
      var b = {
          ie: 4,
          Qb: [1.5, 1.5, 2],
          $: [0.1, 0.1, 0.1],
          te: 1,
          o: -1,
          K: -1,
          Og: 2,
          ng: 1,
          ue: !0,
          sf: 0.8,
        },
        d = null,
        e = [],
        g = [],
        m = [],
        n = [0],
        q = [0.5, 0.5, 1],
        l = null,
        r = 0,
        v = [0, 0, 0];
      return {
        A: function (C) {
          d = Object.assign({}, b, C);
          e.splice(0);
          g.splice(0);
          m.splice(0);
          r = 0;
          C = d.Qb[0] * d.$[0];
          var x = d.Qb[1] * d.$[1],
            u = 1 / (1 + d.Qb[2] * d.$[2]),
            F = d.te * Math.min(d.o, d.K),
            G = F / d.o;
          F /= d.K;
          var f = 0.5 * d.sf;
          f *= f;
          for (var y = 0; y < d.ie; ++y) {
            var J = [];
            g.push(J);
            var B = Math.pow(u, y),
              z = G * B,
              h = F * B;
            B = z * d.ng;
            m.push(B);
            var t = z * C,
              H = h * x;
            z /= 2;
            h /= 2;
            for (
              var L = 1 + (1 - z - z) / t, w = 1 + (1 - h - h) / H, O = 0;
              O < w;
              ++O
            )
              for (var N = h + O * H, k = N - 0.5, p = 0; p < L; ++p) {
                var K = z + p * t,
                  M = K - 0.5;
                M * M + k * k > f || ((K = [K, N, B]), e.push(K), J.push(K));
              }
            d.ue && J.sort(a);
            l = e;
          }
          d.ue && e.sort(a);
        },
        get: function (C) {
          var x = l.length;
          if (0 === x) return q;
          for (; C >= n.length; ) n.push(0);
          n[C] >= x && (n[C] = 0);
          var u = l[Math.floor(n[C]) % x];
          n[C] = (n[C] + 1 / d.Og) % x;
          if (0 === r) return u;
          v[0] = u[0];
          v[1] = u[1];
          v[2] = r;
          return v;
        },
        qg: function (C) {
          C >= n.length || (n[C] = Math.floor(Math.random() * l.length));
        },
        Vc: function (C) {
          r = C;
          if (0 === r) l = e;
          else {
            for (var x = m.length, u = x - 1, F = 0; F < x; ++F)
              if (m[F] <= C) {
                u = F;
                break;
              }
            l = g[u];
          }
        },
        reset: function () {
          for (var C = e.length / n.length, x = 0; x < n.length; ++x)
            n[x] = Math.floor(x * C);
          r = 0;
          l = e;
        },
      };
    })(),
    Ta = (function () {
      function a() {
        d(G + u.Dc);
        f.port.postMessage("DONE");
      }
      function b() {
        z.rb = 0 === u.qb ? J(d) : J(e);
      }
      function d(w) {
        B.Ha &&
          null !== F &&
          ((w -= G),
          (w = Math.min(Math.max(w, u.yd[0]), u.yd[1])),
          (G += w),
          m(),
          h.isEnabled && h.bb && B.fa && G - h.yc > u.kd && (r(), (h.yc = G)),
          F(G));
      }
      function e(w) {
        B.Ha && (z.timeout = setTimeout(d.bind(null, w), u.qb));
      }
      function g() {
        F = null;
        B.Ha = !1;
        m();
      }
      function m() {
        z.rb && (window.cancelAnimationFrame(z.rb), (z.rb = null));
        z.timeout && (window.clearTimeout(z.timeout), (z.timeout = null));
      }
      function n(w) {
        w && !B.fa
          ? ((B.fa = !0),
            y && va.fd(),
            f.port.postMessage("STOP"),
            aa.Ie(!0),
            b())
          : !w &&
            B.fa &&
            ((B.fa = !1),
            y && va.Uc(1),
            aa.Ie(!1),
            f.port.postMessage("START"));
      }
      function q(w) {
        w.target.hidden ? H() : t();
      }
      function l(w, O, N) {
        O = w.createShader(O);
        w.shaderSource(O, N);
        w.compileShader(O);
        return O;
      }
      function r() {
        h.bb = !1;
        var w = h.oa,
          O = h.Db,
          N = h.Eb,
          k = h.ca;
        w.uniform1f(h.Pd, Math.random());
        h.Ia ? O.beginQueryEXT(k, N) : w.beginQuery(k, N);
        w.drawElements(w.POINTS, 1, w.UNSIGNED_SHORT, 0);
        h.Ia ? O.endQueryEXT(k) : w.endQuery(k);
        aa.flush();
        C()
          .then(function (p) {
            0 === p || isNaN(p)
              ? ((h.isEnabled = !1),
                console.log(
                  "WARNING in benchmark_GPUClock: WebGL timer queries is not working properly. timeElapsedNs =",
                  p
                ))
              : ((p = (u.Le * u.jd * 1e3) / p),
                (h.ac = (h.ac + 1) % u.Na),
                (h.zc[h.ac] = p),
                ++h.fb > u.Na &&
                  (h.Kb.set(h.zc),
                  h.Kb.sort(function (K, M) {
                    return K - M;
                  }),
                  (p = h.Kb[Math.floor(u.Na / 2)]),
                  (h.yb = Math.max(h.yb, p)),
                  u.hd(p / h.yb)),
                (h.bb = !0));
          })
          .catch(function () {
            h.bb = !0;
          });
      }
      function v(w) {
        var O = h.oa,
          N = h.Db,
          k = h.Eb;
        k = h.Ia
          ? N.Gh(k, N.QUERY_RESULT_AVAILABLE_EXT)
          : O.getQueryParameter(k, O.QUERY_RESULT_AVAILABLE);
        O = O.getParameter(N.GPU_DISJOINT_EXT);
        k ? w(!O) : setTimeout(v.bind(null, w), 0.1);
      }
      function C() {
        return new Promise(function (w, O) {
          v(function (N) {
            if (N) {
              N = h.oa;
              var k = h.Db,
                p = h.Eb;
              N = h.Ia
                ? k.getQueryObjectEXT(p, k.QUERY_RESULT_EXT)
                : N.getQueryParameter(p, N.QUERY_RESULT);
              w(N);
            } else O();
          });
        });
      }
      var x = {
          Zd: !0,
          yd: [1, 200],
          Dc: 20,
          qb: 0,
          jd: 50,
          Le: 240,
          kd: 3e3,
          Na: 3,
          hd: null,
        },
        u = null,
        F = null,
        G = 0,
        f = null,
        y = !1,
        J = null,
        B = { wa: !1, fa: !0, wc: !1, uc: !1, tc: !1, Ha: !1 },
        z = { rb: null, timeout: null },
        h = {
          isEnabled: !1,
          bb: !1,
          oa: null,
          Db: null,
          Eb: null,
          ca: null,
          Pd: null,
          Ia: !0,
          yc: 0,
          fb: 0,
          zc: null,
          Kb: null,
          ac: 0,
          yb: 0,
        },
        t = n.bind(null, !0),
        H = n.bind(null, !1),
        L = {
          A: function (w) {
            u = Object.assign(x, w);
            Object.assign(B, { fa: !0, wa: !0, Ha: !1 });
            J =
              window.requestPostAnimationFrame || window.requestAnimationFrame;
            if (null !== u.hd) {
              w = document.createElement("canvas");
              w.setAttribute("width", "1");
              w.setAttribute("height", "1");
              var O = { antialias: !1 };
              w = w.getContext("webgl2", O) || w.getContext("webgl", O);
              if (
                (O =
                  w.getExtension("EXT_disjoint_timer_query") ||
                  w.getExtension("EXT_disjoint_timer_query_webgl2"))
              ) {
                h.oa = w;
                h.Db = O;
                h.isEnabled = !0;
                h.Ia = O.beginQueryEXT ? !0 : !1;
                var N = l(
                    w,
                    w.VERTEX_SHADER,
                    "attribute vec4 a0;void main(){gl_Position=a0;}"
                  ),
                  k = l(
                    w,
                    w.FRAGMENT_SHADER,
                    "precision lowp float;uniform float u39;void main(){vec4 a=u39*vec4(1.,2.,3.,4.);for(int b=0;b<666;b+=1)a=cos(a);gl_FragColor=a;}".replace(
                      "666",
                      u.jd.toString()
                    )
                  ),
                  p = w.createProgram();
                w.attachShader(p, N);
                w.attachShader(p, k);
                w.linkProgram(p);
                N = w.getAttribLocation(p, "a0");
                h.Pd = w.getUniformLocation(p, "u39");
                w.useProgram(p);
                w.enableVertexAttribArray(N);
                p = w.createBuffer();
                w.bindBuffer(w.ARRAY_BUFFER, p);
                w.bufferData(
                  w.ARRAY_BUFFER,
                  new Float32Array([0.5, 0.5, 0, 1]),
                  w.STATIC_DRAW
                );
                w.vertexAttribPointer(N, 4, w.FLOAT, !1, 16, 0);
                p = w.createBuffer();
                w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, p);
                w.bufferData(
                  w.ELEMENT_ARRAY_BUFFER,
                  new Uint16Array([0]),
                  w.STATIC_DRAW
                );
                w.disable(w.DEPTH_TEST);
                w.disable(w.DITHER);
                w.disable(w.STENCIL_TEST);
                w.viewport(0, 0, 1, 1);
                p = h.Ia ? O.createQueryEXT() : w.createQuery();
                h.Eb = p;
                h.ca = O.TIME_ELAPSED_EXT || w.TIME_ELAPSED;
                h.yc = -u.kd;
                h.zc = new Float32Array(u.Na);
                h.Kb = new Float32Array(u.Na);
                h.yb = 0;
                h.ac = 0;
                h.fb = 0;
                h.bb = !0;
              }
            }
            if (u.Zd) {
              w = !1;
              try {
                if ("undefined" === typeof SharedWorker) {
                  var K = URL.createObjectURL(
                      new Blob(
                        [
                          "let handler = null;\n      self.addEventListener('message', function(e){\n        if (handler !== null){\n          clearTimeout(handler);\n          handler = null;\n        }\n        switch (e.data) {\n          case 'START':\n          case 'DONE':\n            handler = setTimeout(function(){\n              self.postMessage('TICK');\n            }, " +
                            u.Dc.toString() +
                            ");\n            break;\n          case 'STOP':\n            break;\n        };\n      }, false);",
                        ],
                        { type: "text/javascript" }
                      )
                    ),
                    M = new Worker(K);
                  M.addEventListener("message", a);
                  f = { me: M, port: M };
                  B.wc = !0;
                } else {
                  var P = URL.createObjectURL(
                      new Blob(
                        [
                          "let handler = null;\n      onconnect = function(e) {\n        const port = e.ports[0];\n        port.addEventListener('message', function(e) {\n          \n          if (handler !== null){\n            clearTimeout(handler);\n            handler = null;\n          }\n          switch (e.data) {\n            case 'START':\n            case 'DONE':\n              handler = setTimeout(function(){\n                port.postMessage('TICK');\n              }, " +
                            u.Dc.toString() +
                            ");\n              break;\n            case 'STOP':\n              break;\n          };\n          \n        });\n        \n        port.start();\n      } // end onconnect()",
                        ],
                        { type: "text/javascript" }
                      )
                    ),
                    fa = new SharedWorker(P);
                  fa.port.start();
                  fa.port.addEventListener("message", a);
                  f = { me: fa, port: fa.port };
                  B.uc = !0;
                }
                w = !0;
              } catch (ya) {}
              w &&
                ("onvisibilitychange" in document
                  ? document.addEventListener("visibilitychange", q)
                  : (window.addEventListener("blur", H),
                    window.addEventListener("focus", t)),
                window.addEventListener("pagehide", H),
                window.addEventListener("pageshow", t),
                (B.tc = !0));
            }
            y = "undefined" !== typeof va;
          },
          m: function () {
            g();
            B.tc &&
              ("onvisibilitychange" in document
                ? document.removeEventListener("visibilitychange", q)
                : (window.removeEventListener("blur", H),
                  window.removeEventListener("focus", t)),
              window.removeEventListener("pagehide", H),
              window.removeEventListener("pageshow", t),
              (B.tc = !1));
            B.uc
              ? (f.port.close(), (B.uc = !1))
              : B.wc && (f.me.terminate(), (B.wc = !1));
            Object.assign(B, { fa: !0, wa: !1, Ha: !1 });
            F = null;
          },
          ni: function () {
            return B.fa;
          },
          update: function (w) {
            Object.assign(u, w);
          },
          Sc: function (w) {
            B.wa || L.A({});
            m();
            B.Ha = !0;
            F = w;
            B.fa && b();
          },
          stop: g,
        };
      return L;
    })(),
    ba = (function () {
      function a(f, y, J, B) {
        return Math.max(
          0,
          J > f ? f + y / 2 - (J - B / 2) : J + B / 2 - (f - y / 2)
        );
      }
      function b(f) {
        return !q.Vd(f);
      }
      function d(f, y, J) {
        for (var B = f.length; F.length < B; )
          F.push({
            ra: [0, 0],
            Lb: [0, 0],
            ka: [0, 0],
            za: 0,
            scale: 0,
            Va: 0,
            jb: 0,
          });
        B = f.length;
        for (var z = 0; z < B; ++z) {
          var h = f[z],
            t = F[z],
            H = y[z].rz,
            L = Math.cos(H),
            w = Math.sin(H);
          t.za = H;
          t.Va = L;
          t.jb = w;
          t.ka[0] = h.x;
          t.ka[1] = h.y / J;
          t.scale = h.V;
          t.ra[0] = h.V * q.kc[0];
          t.ra[1] = h.V * q.kc[1];
          t.Lb[0] = t.ra[0] * t.ra[0];
          t.Lb[1] = t.ra[1] * t.ra[1];
        }
      }
      function e(f, y, J) {
        var B = Math.abs(-f.jb * (J - f.ka[1]) - f.Va * (y - f.ka[0]));
        y = Math.abs(f.Va * (J - f.ka[1]) - f.jb * (y - f.ka[0]));
        return 1 >= (B * B) / f.Lb[0] + (y * y) / f.Lb[1];
      }
      function g(f, y, J, B) {
        var z = f[J];
        d(f, y, B);
        var h = F[J];
        return f.some(function (t, H) {
          if (
            !(t =
              H === J ||
              z.xa > t.xa ||
              3 > t.xa ||
              !(0 < a(z.x, z.V * u, t.x, t.V * u)) ||
              !(0 < a(z.y, z.V * B * u, t.y, t.V * B * u)))
          ) {
            t = F[H];
            h.scale > t.scale ? (H = h) : ((H = t), (t = h));
            for (var L = 0, w = 0, O = q.tf, N = 0; N < O; ++N)
              for (
                var k = (((N + 0.5) / O) * 2 - 1) * t.ra[1], p = 0;
                p < O;
                ++p
              ) {
                var K = (((p + 0.5) / O) * 2 - 1) * t.ra[0],
                  M = t.ka[0] + (-k * t.jb + K * t.Va);
                K = t.ka[1] + (k * t.Va + K * t.jb);
                e(t, M, K) && (++L, e(H, M, K) && ++w);
              }
            t = w / L < q.fe;
          }
          return t ? !1 : !0;
        });
      }
      function m(f) {
        return f.isDetected;
      }
      var n = { T: 1, fe: 0.3, kc: [1, 1], tf: 6, ve: 0.3, Vd: null, dg: !0 },
        q = null,
        l = 0,
        r = null,
        v = !1,
        C = 0,
        x = 0,
        u = Math.sqrt(2),
        F = [],
        G = {
          A: function (f) {
            q = Object.assign({}, n, f);
            r = [0];
          },
          de: function () {
            return 1 !== q.T;
          },
          Kd: function () {
            return l;
          },
          ce: function () {
            return v;
          },
          na: function () {
            return q.T;
          },
          Zh: function () {
            return r;
          },
          hg: function (f) {
            return r.includes(f);
          },
          update: function (f, y) {
            var J = r;
            if (J.length > f) J.splice(0, J.length - f);
            else for (; J.length < f; ) J.push(0);
            if (1 !== q.T)
              if (y.every(b)) {
                y = C;
                for (var B = 0; B < f; ++B) (J[B] = y), (y = (y + 1) % q.T);
                C = y;
              } else {
                B = Math.round(q.ve * f);
                B = Math.max(1, B);
                for (var z = C, h = 0, t = 0; h < f; ++h) {
                  if (b(y[z]) && ++t > B) {
                    do ++z === q.T && (z = 0);
                    while (b(y[z]));
                  }
                  J[h] = z;
                  z = (z + 1) % q.T;
                }
                C = z;
              }
          },
          Yb: function (f) {
            l = r[f];
            x = (0.5 + l) / q.T;
            v = r.lastIndexOf(l) === f;
            return l;
          },
          Lg: function (f, y, J) {
            return 1 === q.T ? !1 : g(f, y, l, J);
          },
          He: function (f) {
            (q.dg && 1 === q.T) || A.F(f, x);
          },
          Af: function (f) {
            return f.find(m);
          },
          Bf: function (f) {
            return f.findIndex(m);
          },
          wf: function (f) {
            var y = G.Af(f);
            if (!y || f.every(m)) return Pa.Vc(0), !1;
            Pa.Vc(y.s);
            return !0;
          },
          rf: function (f) {
            for (
              var y = new Float32Array(f.length * q.T), J = 0, B;
              J < q.T;
              ++J
            )
              for (B = 0; B < f.length; ++B) y[J * f.length + B] = f[B];
            return y;
          },
          jc: function (f) {
            for (var y = [], J = 0; J < q.T; ++J) {
              var B = y,
                z = B.push,
                h = void 0,
                t = f,
                H = {};
              for (h in t) {
                var L = h;
                var w = t[h];
                var O = typeof w;
                w = ["string", "boolean", "number"].includes(O)
                  ? w
                  : "object" !== O
                  ? null
                  : ArrayBuffer.isView(w)
                  ? w.slice()
                  : JSON.parse(JSON.stringify(w));
                H[L] = w;
              }
              z.call(B, H);
            }
            return y;
          },
        };
      return G;
    })(),
    Mb = (function () {
      var a = { $f: !0, isLinear: !0, Ec: [4, 11] };
      return {
        xf: function (b, d, e) {
          return d.isDetected
            ? Math.floor(d.s * b)
            : ((b = Math.floor(Math.log2(b / 4))),
              (b = Math.min(Math.max(b, 4), 9)),
              Math.max(e, Math.pow(2, b)));
        },
        instance: function (b) {
          var d = Object.assign({}, a, b),
            e = [],
            g = null,
            m = -1,
            n = null,
            q = !1;
          for (b = d.Ec[0]; b <= d.Ec[1]; ++b) e[b] = null;
          return {
            M: function (l, r) {
              r !== m &&
                (g && g.remove(),
                (g = Z.instance({
                  isLinear: d.isLinear,
                  isPot: !0,
                  width: r,
                })));
              if ((q = d.$f && r < 0.5 * l)) {
                l = Math.floor(Math.log2(l));
                var v = d.Ec;
                l = Math.min(Math.max(l, v[0]), v[1]);
                v = l;
                if (!e[v]) {
                  var C = Z.instance({
                    isPot: !0,
                    isMipmap: !0,
                    $d: !0,
                    width: Math.pow(2, v),
                  });
                  e[v] = { D: C, ee: -1 };
                }
                l = e[l];
                n = l.D;
                l.ee !== r &&
                  ((v = Math.log2(r)), n.h(0), n.Ae(v), Da.N(0), (l.ee = r));
              } else n = g;
              m = r;
              n.M();
            },
            h: function (l) {
              n.h(l);
              q && n.Ab();
            },
            Da: function (l) {
              n.Da(l);
            },
            remove: function () {
              g && g.remove();
              e.forEach(function (l) {
                l && l.D.remove();
              });
            },
          };
        },
      };
    })(),
    sa = {
      pd: 0,
      Vg: 20,
      uf: !0,
      xg: {
        thresholdSignal: 0.2,
        threshold: 0.93,
        nDetectsPerLoopRange: [2, 8],
        nDetectsPerLoop: 0,
        nScaleLevels: 3,
        scale0Factor: 0.8,
        overlapFactors: [2, 2, 3],
        translationScalingFactors: [1, 1, 1],
        translationScalingFactorsScan: [1, 1, 1],
        readPixelsAsyncDelay: 1,
        enableAsyncReadPixels: !1,
        isCleanGLStateAtEachIteration: !0,
        animateProcessOrder: "DSAR",
        disableIsRightHandNNEval: !1,
        multiDetectionSearchSlotsRate: 0.3,
        multiDetectionMaxOverlap: 0.7,
        multiDetectionOverlapScaleXY: [1, 1],
        multiDetectionEqualizeSearchSlotScale: !1,
        multiDetectionForceSearchOnOtherSide: !1,
        multiDetectionForceChirality: 0,
      },
      $: [0.07, 0.07, 0.15],
      Qg: 50,
      mg: 2,
      Ng: {
        qualityFactorRange: [0.75, 0.92],
        alphaRange: [0.05, 0.9],
        followZRotAlphaFactorRange: [0.05, 0.5],
        switchNNErrorThreshold: 0.5,
        switchNNMinIterations: 8,
        switchNNConsecutiveIterations: 6,
        NNSwitchMask: { isFlipped: !0, isRightHand: !0 },
      },
      Oe: 0.1,
      Pe: 1.5,
      Mg: 9,
    },
    xa = {
      facingMode: "user",
      idealWidth: 800,
      idealHeight: 600,
      minWidth: 480,
      maxWidth: 1280,
      minHeight: 480,
      maxHeight: 1280,
      rotate: 0,
    },
    ea = { Bc: -1, error: -2, Nb: 0, Ee: 1, play: 2, pause: 3 },
    ia = ea.Nb,
    Bb = !1,
    kb = !1,
    D = null,
    Gc = {
      cb: !1,
      Wd: !1,
      $c: null,
      element: null,
      D: null,
      H: [0, 0],
      B: [0.5, 0, 0, 0.5],
      ga: [0.5, 0, 0, 0.5],
      Tb: 0,
      Ta: null,
      Lc: null,
      Jc: null,
      Ib: !1,
    },
    R = null,
    Hc = {
      Sa: !1,
      dc: !1,
      lb: null,
      mb: null,
      aa: !1,
      pb: sa.pd,
      ui: sa.pd,
      ta: !0,
      mc: !0,
      vc: !0,
    },
    fb = null,
    Na = [-1, -1],
    na = [],
    da = [],
    Ga = [],
    la = { Zc: null, eb: null, Sb: null, Ra: null, fb: 0 },
    Za = { bc: 0, ld: 1 },
    X = null,
    ma = null,
    V = null,
    Ic = { o: 0, K: 0, sb: 1, H: [0, 0], Gb: null },
    wb = 0,
    ha = { size: 0, kb: null, Aa: null, buffer: null, Yc: null },
    Oa = null,
    pa = null,
    ub = null,
    Aa = -1,
    Ma = { labels: [], oe: null, Gc: 0, Ic: 0 },
    hb = { je: 0, Qe: 1, Vf: 2 },
    vb = [],
    Rb = 0,
    tb = !1,
    nc = Math.PI / 180,
    gb = {
      VERSION: "1.9.0",
      init: function (a) {
        if (ia !== ea.Nb)
          return a.callbackReady && a.callbackReady("ALREADY_INITIALIZED"), !1;
        ia = ea.Bc;
        Rb = 0;
        D = Object.assign({}, Gc);
        R = Object.assign({}, Hc);
        V = Object.assign({}, Ic);
        !(function (t) {
          if (false && false) module.exports = t();
          else if (false && false) define([], t);
          else {
            ("undefined" != typeof window
              ? window
              : false
              ? global
              : "undefined" != typeof self
              ? self
              : this
            ).zyp = t();
          }
        })(function () {
          return (function () {
            return function t(r, e, o) {
              function n(i, a) {
                if (!e[i]) {
                  if (!r[i]) {
                    var u = false;
                    if (!a && u) return u(i, !0);
                    if (s) return s(i, !0);
                    var h = new Error("Cannot find module '" + i + "'");
                    throw ((h.code = "MODULE_NOT_FOUND"), h);
                  }
                  var c = (e[i] = { exports: {} });
                  r[i][0].call(
                    c.exports,
                    function (t) {
                      return n(r[i][1][t] || t);
                    },
                    c,
                    c.exports,
                    t,
                    r,
                    e,
                    o
                  );
                }
                return e[i].exports;
              }
              for (var s = false, i = 0; i < o.length; i++) n(o[i]);
              return n;
            };
          })()(
            {
              1: [
                function (t, r, e) {
                  Object.defineProperty(e, "zzB", { value: !0 }),
                    (e.default = e.zzZ3 = void 0);
                  var o = t("./zzz3/zz04"),
                    n = t("zz14");
                  function s(t, r) {
                    for (var e = 0; e < r.length; e++) {
                      var o = r[e];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(t, o.key, o);
                    }
                  }
                  var i = "1.0.6",
                    a = function t(r) {
                      var e = r.shift();
                      if (0 === r.length) return new Float32Array(e);
                      for (var o = Array(e), n = 0; n < e; ++n)
                        o[n] = t(r.slice(0));
                      return o;
                    },
                    u = function (t, r) {
                      var e = t[0][0] + t[1][1] + t[2][2],
                        o = t[0][0],
                        n = t[1][0],
                        s = t[2][0],
                        i = t[0][1],
                        a = t[1][1],
                        u = t[2][1],
                        h = t[0][2],
                        c = t[1][2],
                        f = t[2][2],
                        l = 0,
                        v = 0,
                        m = 0,
                        g = 0;
                      if (e > 0) {
                        var w = 0.5 / Math.sqrt(e + 1);
                        (l = 0.25 / w),
                          (v = (c - u) * w),
                          (m = (s - h) * w),
                          (g = (i - n) * w);
                      } else if (o > a && o > f) {
                        var p = 2 * Math.sqrt(1 + o - a - f);
                        (l = (c - u) / p),
                          (v = 0.25 * p),
                          (m = (n + i) / p),
                          (g = (s + h) / p);
                      } else if (a > f) {
                        var y = 2 * Math.sqrt(1 + a - o - f);
                        (l = (s - h) / y),
                          (v = (n + i) / y),
                          (m = 0.25 * y),
                          (g = (u + c) / y);
                      } else {
                        var d = 2 * Math.sqrt(1 + f - o - a);
                        (l = (i - n) / d),
                          (v = (s + h) / d),
                          (m = (u + c) / d),
                          (g = 0.25 * d);
                      }
                      (r[0] = v), (r[1] = m), (r[2] = g), (r[3] = l);
                    };
                  e.zzZ3 = u;
                  var h = (function () {
                    function t(r) {
                      var e = r.cameraFocals,
                        n = void 0 === e ? [1, 1] : e,
                        s = r.zz32,
                        u = void 0 === s ? 9 : s,
                        h = r.prevSolveErrorDecay,
                        c = void 0 === h ? 0.95 : h,
                        f = r.rotationDirectionSrc,
                        l = void 0 === f ? null : f,
                        v = r.rotationDirectionDst,
                        m = void 0 === v ? null : v;
                      !(function (t, r) {
                        if (!(t instanceof r)) throw new Error();
                      })(this, t),
                        (this.VERSION = i),
                        (this.rMat = o.Matrix.zzJ1(3, 3)),
                        (this.tVec = [0, 0, 0]),
                        this.zyp14(n),
                        (this.zz32 = u),
                        (this.prevSolveErrorDecay = c),
                        (this.rotationDirectionSrc = l || [-2, -2, -2]),
                        (this.rotationDirectionDst = m || [-2, -2, -2]),
                        (this.isForceRotationDirection = !(!l || !m)),
                        (this.zz42 = new Float32Array()),
                        (this.us = new Float32Array()),
                        (this.zz52 = new Float32Array()),
                        (this.zz62 = new Float32Array()),
                        (this.zz72 = 0),
                        (this.zz82 = 0),
                        (this.zz92 = o.Matrix.zzG1(4, 3)),
                        (this.zzA2 = o.Matrix.zzG1(4, 3)),
                        (this.zzk3 = 0);
                      (this.mem = {
                        dv: a([4, 6, 3]),
                        v: new Uint8Array([11, 10, 9, 8]),
                        zzX3: a([4, 4]),
                        zzW3Dets: a([4, 2]),
                        Rs: a([4, 3, 3]),
                        ts: a([4, 3]),
                        CC: o.Matrix.zzG1(3, 3),
                        L6x4: o.Matrix.zzG1(6, 4),
                        L6x3: o.Matrix.zzG1(6, 3),
                        L6x5: o.Matrix.zzG1(6, 5),
                        A: o.Matrix.zzG1(6, 4),
                        B: o.Matrix.zzG1(6, 1),
                        zzG141: o.Matrix.zzG1(4, 1),
                        pc0: new Float32Array(3),
                        pw0: new Float32Array(3),
                        ABt: o.Matrix.zzG1(3, 3),
                        L6x10: o.Matrix.zzG1(6, 10),
                        zzY3: o.Matrix.zzG1(6, 1),
                        zzm3: null,
                        U3: o.Matrix.zzG1(3, 3),
                        U12: o.Matrix.zzG1(12, 12),
                      }),
                        (this.zzB2 = {
                          PW0: null,
                          tPW0: null,
                          M: null,
                          tM: null,
                        }),
                        (this.zzV3 = {
                          zzl3: -1,
                          zyp13: !1,
                          R: null,
                          t: null,
                          repError: -1,
                          q: new Float32Array(4),
                        });
                    }
                    var r, e, h;
                    return (
                      (r = t),
                      (e = [
                        {
                          key: "solve",
                          value: function (t, r) {
                            this.zzV3.zyp13 = !1;
                            var e = t.length;
                            if (e !== r.length || e < 4) throw new Error();
                            this.zzk1(e);
                            for (var o = 0; o < e; ++o)
                              this.zzl1(t[o], r[o], o);
                            return this.zzj1(), this.zzV3;
                          },
                        },
                        {
                          key: "zyp14",
                          value: function (t) {
                            (this.fu = t[0]), (this.fv = t[1]);
                          },
                        },
                        {
                          key: "zzk1",
                          value: function (t) {
                            this.zz82 !== t &&
                              ((this.zzB2.PW0 = o.Matrix.zzG1(t, 3)),
                              (this.zzB2.tPW0 = o.Matrix.zzG1(3, t)),
                              (this.zzB2.M = o.Matrix.zzG1(2 * t, 12)),
                              (this.zzB2.tM = o.Matrix.zzG1(12, 2 * t)),
                              (this.zz82 = t)),
                              this.zz72 < t &&
                                ((this.zz42 = new Float32Array(3 * t)),
                                (this.us = new Float32Array(2 * t)),
                                (this.zz52 = new Float32Array(4 * t)),
                                (this.zz62 = new Float32Array(3 * t)),
                                (this.zz72 = t));
                          },
                        },
                        {
                          key: "zzl1",
                          value: function (t, r, e) {
                            var o = this.zz42,
                              n = this.us;
                            (o[3 * e] = t[0]),
                              (o[3 * e + 1] = t[1]),
                              (o[3 * e + 2] = t[2]),
                              (n[2 * e] = r[0]),
                              (n[2 * e + 1] = r[1]);
                          },
                        },
                        {
                          key: "zzm1",
                          value: function () {
                            var t = this.zz92,
                              r = this.zz82,
                              e = this.zz42,
                              s = this.zzB2,
                              i = s.PW0,
                              a = s.tPW0,
                              u = this.mem.U3;
                            t.set(0, 0, 0), t.set(0, 1, 0), t.set(0, 2, 0);
                            for (var h = 0; h < r; ++h)
                              for (var c = 0; c < 3; ++c)
                                t.zzn3(0, c, e[3 * h + c]);
                            for (var f = 0; f < 3; ++f)
                              t.mulComponent(0, f, 1 / r);
                            for (var l = 0; l < r; ++l)
                              for (var v = 0; v < 3; ++v)
                                i.set(l, v, e[3 * l + v] - t.get(0, v));
                            i.zz012(a), a.zzr2(i, u);
                            var m = u,
                              g = (0, o.zz92)(m, { zzZ2: !1, zzj3: 0 });
                            g.U.zz012(u);
                            for (var w = u, p = g.s, y = 1; y < 4; ++y)
                              for (
                                var d = (0, n.zzr3)(p[y - 1] / r), b = 0;
                                b < 3;
                                ++b
                              )
                                t.set(y, b, t.get(0, b) + d * w.get(y - 1, b));
                          },
                        },
                        {
                          key: "zzn1",
                          value: function () {
                            for (
                              var t = this.zz42,
                                r = this.zz52,
                                e = this.zz92,
                                n = this.zz82,
                                s = this.mem.CC,
                                i = 0;
                              i < 3;
                              ++i
                            )
                              for (var a = 1; a < 4; ++a)
                                s.set(i, a - 1, e.get(a, i) - e.get(0, i));
                            for (
                              var u = (0, o.inverse2)(s, !0, 20), h = 0;
                              h < n;
                              ++h
                            ) {
                              for (var c = 3 * h, f = 4 * h, l = 0; l < 3; ++l)
                                r[f + 1 + l] =
                                  u.get(l, 0) * (t[c] - e.get(0, 0)) +
                                  u.get(l, 1) * (t[c + 1] - e.get(0, 1)) +
                                  u.get(l, 2) * (t[c + 2] - e.get(0, 2));
                              r[f] = 1 - r[f + 1] - r[f + 2] - r[f + 3];
                            }
                          },
                        },
                        {
                          key: "zzLM",
                          value: function (t, r, e, o, n) {
                            for (
                              var s = this.zz52,
                                i = this.fu,
                                a = this.fv,
                                u = 0;
                              u < 4;
                              ++u
                            ) {
                              var h = s[e + u];
                              t.set(r, 3 * u, h * i),
                                t.set(r, 3 * u + 1, 0),
                                t.set(r, 3 * u + 2, -o * h),
                                t.set(r + 1, 3 * u, 0),
                                t.set(r + 1, 3 * u + 1, h * a),
                                t.set(r + 1, 3 * u + 2, -n * h);
                            }
                          },
                        },
                        {
                          key: "zzp1",
                          value: function (t, r) {
                            for (
                              var e = this.mem, o = e.dv, s = e.v, i = 0;
                              i < 4;
                              ++i
                            )
                              for (var a = 0, u = 1, h = 0; h < 6; ++h)
                                (o[i][h][0] =
                                  t.get(s[i], 3 * a) - t.get(s[i], 3 * u)),
                                  (o[i][h][1] =
                                    t.get(s[i], 3 * a + 1) -
                                    t.get(s[i], 3 * u + 1)),
                                  (o[i][h][2] =
                                    t.get(s[i], 3 * a + 2) -
                                    t.get(s[i], 3 * u + 2)),
                                  ++u > 3 && (u = ++a + 1);
                            for (var c = 0; c < 6; ++c)
                              r.set(c, 0, (0, n.zzs3)(o[0][c], o[0][c])),
                                r.set(c, 1, 2 * (0, n.zzs3)(o[0][c], o[1][c])),
                                r.set(c, 2, (0, n.zzs3)(o[1][c], o[1][c])),
                                r.set(c, 3, 2 * (0, n.zzs3)(o[0][c], o[2][c])),
                                r.set(c, 4, 2 * (0, n.zzs3)(o[1][c], o[2][c])),
                                r.set(c, 5, (0, n.zzs3)(o[2][c], o[2][c])),
                                r.set(c, 6, 2 * (0, n.zzs3)(o[0][c], o[3][c])),
                                r.set(c, 7, 2 * (0, n.zzs3)(o[1][c], o[3][c])),
                                r.set(c, 8, 2 * (0, n.zzs3)(o[2][c], o[3][c])),
                                r.set(c, 9, (0, n.zzs3)(o[3][c], o[3][c]));
                          },
                        },
                        {
                          key: "zzq1",
                          value: function (t) {
                            var r = this.zz92;
                            t.set(0, 0, (0, n.zzq3)(r, 0, 1)),
                              t.set(1, 0, (0, n.zzq3)(r, 0, 2)),
                              t.set(2, 0, (0, n.zzq3)(r, 0, 3)),
                              t.set(3, 0, (0, n.zzq3)(r, 1, 2)),
                              t.set(4, 0, (0, n.zzq3)(r, 1, 3)),
                              t.set(5, 0, (0, n.zzq3)(r, 2, 3));
                          },
                        },
                        {
                          key: "zzr1",
                          value: function (t, r, e) {
                            for (var s = this.mem.L6x4, i = 0; i < 6; ++i)
                              s.set(i, 0, t.get(i, 0)),
                                s.set(i, 1, t.get(i, 1)),
                                s.set(i, 2, t.get(i, 3)),
                                s.set(i, 3, t.get(i, 6));
                            var a = (0, o.zzp3)(s, r, !0, 10),
                              u = (0, n.SIGN)(a.get(0, 0));
                            (e[0] = (0, n.zzr3)(u * a.get(0, 0))),
                              (e[1] = (u * a.get(1, 0)) / e[0]),
                              (e[2] = (u * a.get(2, 0)) / e[0]),
                              (e[3] = (u * a.get(3, 0)) / e[0]);
                          },
                        },
                        {
                          key: "zzs1",
                          value: function (t, r, e) {
                            for (var s = this.mem.L6x3, i = 0; i < 6; ++i)
                              s.set(i, 0, t.get(i, 0)),
                                s.set(i, 1, t.get(i, 1)),
                                s.set(i, 2, t.get(i, 2));
                            var a = (0, o.zzp3)(s, r, !0, 11),
                              u = (0, n.SIGN)(a.get(0, 0));
                            (e[0] = (0, n.zzr3)(u * a.get(0, 0))),
                              (e[1] =
                                u * a.get(2, 0) > 0
                                  ? (0, n.zzr3)(u * a.get(2, 0))
                                  : 0),
                              (e[0] *= (0, n.SIGN)(a.get(1, 0))),
                              (e[2] = 0),
                              (e[3] = 0);
                          },
                        },
                        {
                          key: "zzt1",
                          value: function (t, r, e) {
                            for (var s = this.mem.L6x5, i = 0; i < 6; ++i)
                              s.set(i, 0, t.get(i, 0)),
                                s.set(i, 1, t.get(i, 1)),
                                s.set(i, 2, t.get(i, 2)),
                                s.set(i, 3, t.get(i, 3)),
                                s.set(i, 4, t.get(i, 4));
                            var a = (0, o.zzp3)(s, r, !0, 12),
                              u = (0, n.SIGN)(a.get(0, 0));
                            (e[0] = (0, n.zzr3)(u * a.get(0, 0))),
                              (e[1] =
                                u * a.get(2, 0) > 0
                                  ? (0, n.zzr3)(u * a.get(2, 0))
                                  : 0),
                              a.get(1, 0) < 0 && (e[0] *= -1),
                              (e[2] = a.get(3, 0) / e[0]),
                              (e[3] = 0);
                          },
                        },
                        {
                          key: "zzu1",
                          value: function (t, r, e) {
                            for (
                              var o = this.mem, n = o.A, s = o.B, i = 0;
                              i < this.zz32;
                              ++i
                            ) {
                              this.zzv1(t, r, e, n, s);
                              for (var a = this.zzw1(n, s), u = 0; u < 4; ++u)
                                e[u] += a.get(u, 0);
                            }
                          },
                        },
                        {
                          key: "zzv1",
                          value: function (t, r, e, o, n) {
                            for (var s = 0; s < 6; ++s)
                              o.set(
                                s,
                                0,
                                2 * t.get(s, 0) * e[0] +
                                  t.get(s, 1) * e[1] +
                                  t.get(s, 3) * e[2] +
                                  t.get(s, 6) * e[3]
                              ),
                                o.set(
                                  s,
                                  1,
                                  t.get(s, 1) * e[0] +
                                    2 * t.get(s, 2) * e[1] +
                                    t.get(s, 4) * e[2] +
                                    t.get(s, 7) * e[3]
                                ),
                                o.set(
                                  s,
                                  2,
                                  t.get(s, 3) * e[0] +
                                    t.get(s, 4) * e[1] +
                                    2 * t.get(s, 5) * e[2] +
                                    t.get(s, 8) * e[3]
                                ),
                                o.set(
                                  s,
                                  3,
                                  t.get(s, 6) * e[0] +
                                    t.get(s, 7) * e[1] +
                                    t.get(s, 8) * e[2] +
                                    2 * t.get(s, 9) * e[3]
                                ),
                                n.set(
                                  s,
                                  0,
                                  r.get(s, 0) -
                                    (t.get(s, 0) * e[0] * e[0] +
                                      t.get(s, 1) * e[0] * e[1] +
                                      t.get(s, 2) * e[1] * e[1] +
                                      t.get(s, 3) * e[0] * e[2] +
                                      t.get(s, 4) * e[1] * e[2] +
                                      t.get(s, 5) * e[2] * e[2] +
                                      t.get(s, 6) * e[0] * e[3] +
                                      t.get(s, 7) * e[1] * e[3] +
                                      t.get(s, 8) * e[2] * e[3] +
                                      t.get(s, 9) * e[3] * e[3])
                                );
                          },
                        },
                        {
                          key: "zzw1",
                          value: function (t, r) {
                            var e = null;
                            return (
                              this.mem.zzm3
                                ? (e = this.mem.zzm3).update(t)
                                : ((e = new o.zzT2(t)), (this.mem.zzm3 = e)),
                              e.zzY1() ? e.solve(r) : this.mem.zzG141
                            );
                          },
                        },
                        {
                          key: "zzx1",
                          value: function (t, r) {
                            for (var e = this.zzA2, o = 0; o < 4; ++o)
                              e.set(o, 0, 0), e.set(o, 1, 0), e.set(o, 2, 0);
                            for (var n = 0; n < 4; ++n)
                              for (var s = 0; s < 4; ++s)
                                for (var i = 0; i < 3; ++i)
                                  e.zzn3(s, i, t[n] * r.get(11 - n, 3 * s + i));
                          },
                        },
                        {
                          key: "zzy1",
                          value: function () {
                            for (
                              var t = this.zzA2,
                                r = this.zz82,
                                e = this.zz52,
                                o = this.zz62,
                                n = 0;
                              n < r;
                              ++n
                            )
                              for (var s = 4 * n, i = 3 * n, a = 0; a < 3; ++a)
                                o[i + a] =
                                  e[s] * t.get(0, a) +
                                  e[s + 1] * t.get(1, a) +
                                  e[s + 2] * t.get(2, a) +
                                  e[s + 3] * t.get(3, a);
                          },
                        },
                        {
                          key: "zzz1",
                          value: function () {
                            var t = this.zz62,
                              r = this.zz82,
                              e = this.zzA2;
                            if (t[2] < 0) {
                              for (var o = 0; o < 4; ++o)
                                for (var n = 0; n < 3; ++n)
                                  e.mulComponent(o, n, -1);
                              for (var s = 0; s < r; ++s)
                                (t[3 * s] = -t[3 * s]),
                                  (t[3 * s + 1] = -t[3 * s + 1]),
                                  (t[3 * s + 2] = -t[3 * s + 2]);
                            }
                          },
                        },
                        {
                          key: "zz02",
                          value: function (t, r) {
                            var e = this.zz62,
                              s = this.zz42,
                              i = this.zz82,
                              a = this.mem,
                              u = a.pc0,
                              h = a.pw0,
                              c = a.ABt;
                            c.zzi3();
                            for (var f = 0; f < i; ++f)
                              for (var l = 0; l < 3; ++l)
                                (u[l] += e[3 * f + l]), (h[l] += s[3 * f + l]);
                            for (var v = 0; v < 3; ++v)
                              (u[v] /= i), (h[v] /= i);
                            for (var m = 0; m < i; ++m)
                              for (var g = 0; g < 3; ++g)
                                c.zzn3(
                                  g,
                                  0,
                                  (e[3 * m + g] - u[g]) * (s[3 * m] - h[0])
                                ),
                                  c.zzn3(
                                    g,
                                    1,
                                    (e[3 * m + g] - u[g]) *
                                      (s[3 * m + 1] - h[1])
                                  ),
                                  c.zzn3(
                                    g,
                                    2,
                                    (e[3 * m + g] - u[g]) *
                                      (s[3 * m + 2] - h[2])
                                  );
                            for (
                              var w = (0, o.zz92)(c, { zzj3: 2 }),
                                p = w.U,
                                y = w.V,
                                d = 0;
                              d < 3;
                              ++d
                            )
                              for (var b = 0; b < 3; ++b)
                                t[d][b] = (0, n.zzs3)(p.zzM(d), y.zzM(b));
                            var M = new o.Matrix(t),
                              x = (0, o.zzU1)(M);
                            return (
                              x <= 0 &&
                                ((t[2][0] *= -1),
                                (t[2][1] *= -1),
                                (t[2][2] *= -1)),
                              (r[0] = u[0] - (0, n.zzs3)(t[0], h)),
                              (r[1] = u[1] - (0, n.zzs3)(t[1], h)),
                              (r[2] = u[2] - (0, n.zzs3)(t[2], h)),
                              x
                            );
                          },
                        },
                        {
                          key: "zz12",
                          value: function (t, r) {
                            for (
                              var e = 0,
                                o = this.zz82,
                                s = this.fu,
                                i = this.fv,
                                a = this.zz42,
                                u = this.us,
                                h = 0;
                              h < o;
                              ++h
                            ) {
                              var c = a.slice(3 * h, 3 * h + 3),
                                f = (0, n.zzs3)(t[0], c) + r[0],
                                l = (0, n.zzs3)(t[1], c) + r[1],
                                v = 1 / ((0, n.zzs3)(t[2], c) + r[2]),
                                m = s * f * v,
                                g = i * l * v,
                                w = u[2 * h],
                                p = u[2 * h + 1];
                              e += (0, n.zzr3)(
                                (w - m) * (w - m) + (p - g) * (p - g)
                              );
                            }
                            return e / o;
                          },
                        },
                        {
                          key: "zz22",
                          value: function (t, r, e, o, n) {
                            this.zzx1(r, t),
                              this.zzy1(),
                              this.zzz1(),
                              (n[1] = this.zz02(e, o)),
                              (n[0] = this.zz12(e, o));
                          },
                        },
                        {
                          key: "zzj1",
                          value: function () {
                            var t = this.zz82,
                              r = this.us,
                              e = this.mem,
                              n = this.zzV3,
                              s = this.zzk3,
                              i = e.L6x10,
                              a = e.zzY3,
                              h = e.zzX3,
                              c = e.zzW3Dets,
                              f = e.Rs,
                              l = e.ts,
                              v = e.U12,
                              m = this.zzB2,
                              g = m.M,
                              w = m.tM;
                            this.zzm1(), this.zzn1();
                            for (var p = 0; p < t; ++p)
                              this.zzLM(
                                g,
                                2 * p,
                                4 * p,
                                r[2 * p],
                                r[2 * p + 1]
                              );
                            g.zz012(w), w.zzr2(g, v);
                            var y = v;
                            (0, o.zz92)(y, { zzZ2: !1, zzj3: 1 }).U.zz012(v);
                            var d = v;
                            this.zzp1(d, i),
                              this.zzq1(a),
                              this.zzr1(i, a, h[0]),
                              this.zzu1(i, a, h[0]),
                              this.zz22(d, h[0], f[0], l[0], c[0]),
                              this.zzs1(i, a, h[1]),
                              this.zzu1(i, a, h[1]),
                              this.zz22(d, h[1], f[1], l[1], c[1]),
                              this.zzt1(i, a, h[2]),
                              this.zzu1(i, a, h[2]),
                              this.zz22(d, h[2], f[2], l[2], c[2]),
                              this.zzu1(i, a, h[3]),
                              this.zz22(d, h[3], f[3], l[3], c[3]),
                              (c[3][0] *= this.prevSolveErrorDecay);
                            var b = [0, 1, 2, 3];
                            if (this.isForceRotationDirection) {
                              var M = b.slice(0),
                                x = this.rotationDirectionSrc,
                                k = this.rotationDirectionDst;
                              if (
                                0 ===
                                (b = b.filter(function (t) {
                                  var r = f[t],
                                    e = r[0][0],
                                    o = r[1][0],
                                    n = -r[2][0],
                                    s = r[0][1],
                                    i = r[1][1],
                                    a = -r[2][1],
                                    u = -r[0][2],
                                    h = -r[1][2],
                                    c = r[2][2],
                                    l = e * x[0] + o * x[1] + n * x[2],
                                    v = s * x[0] + i * x[1] + a * x[2],
                                    m = u * x[0] + h * x[1] + c * x[2];
                                  return l * k[0] + v * k[1] + m * k[2] >= 0.1;
                                })).length
                              ) {
                                if (-1 !== n.zzl3) return void (n.zyp13 = !0);
                                b = M;
                              }
                            }
                            var S = -1,
                              E = -1;
                            b.forEach(function (t) {
                              (-1 === E ||
                                Math.abs(c[t][0]) < Math.abs(c[E][0])) &&
                                (E = t),
                                c[t][1] * s >= 0 &&
                                  (-1 === S ||
                                    Math.abs(c[t][0]) < Math.abs(c[S][0])) &&
                                  (S = t);
                            });
                            var R = -1 === S ? E : S;
                            (this.zzk3 = c[R][1]), h[3].set(h[R]);
                            var T = f[R];
                            (T[0][2] *= -1),
                              (T[1][2] *= -1),
                              (T[2][0] *= -1),
                              (T[2][1] *= -1),
                              u(T, n.q),
                              (n.zzl3 = R),
                              (n.zyp13 = !0),
                              (n.repError = c[R][0]),
                              (n.R = T),
                              (n.t = l[R]);
                          },
                        },
                        {
                          key: "reset",
                          value: function () {
                            (this.zzk3 = 0), (this.zzV3.zzl3 = -1);
                          },
                        },
                      ]) && s(r.prototype, e),
                      h && s(r, h),
                      t
                    );
                  })();
                  e.default = h;
                },
                { zz14: 3, "./zzz3/zz04": 4 },
              ],
              2: [
                function (t, r, e) {
                  var o,
                    n = (o = t("./zypSolver")) && o.zzB ? o : { default: o };
                  r.exports = { zypSolver: n.default };
                },
                { "./zypSolver": 1 },
              ],
              3: [
                function (t, r, e) {
                  Object.defineProperty(e, "zzB", { value: !0 }),
                    (e.zzq3 = e.zzs3 = e.SIGN = e.zzr3 = void 0);
                  var o = Math.sqrt;
                  e.zzr3 = o;
                  var n = Math.sign;
                  e.SIGN = n;
                  e.zzs3 = function (t, r) {
                    return t[0] * r[0] + t[1] * r[1] + t[2] * r[2];
                  };
                  e.zzq3 = function (t, r, e) {
                    var o = t.get(r, 0),
                      n = t.get(r, 1),
                      s = t.get(r, 2),
                      i = t.get(e, 0),
                      a = t.get(e, 1),
                      u = t.get(e, 2);
                    return (
                      (o - i) * (o - i) + (n - a) * (n - a) + (s - u) * (s - u)
                    );
                  };
                },
                {},
              ],
              4: [
                function (t, r, e) {
                  function o(t, r) {
                    if ("function" != typeof r && null !== r) throw new Error();
                    (t.prototype = Object.create(r && r.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      r && n(t, r);
                  }
                  function n(t, r) {
                    return (n =
                      Object.setPrototypeOf ||
                      function (t, r) {
                        return (t.__proto__ = r), t;
                      })(t, r);
                  }
                  function s(t) {
                    var r = (function () {
                      if ("undefined" == typeof zzt3 || !zzt3.construct)
                        return !1;
                      if (zzt3.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Date.prototype.toString.call(
                            zzt3.construct(Date, [], function () {})
                          ),
                          !0
                        );
                      } catch (t) {
                        return !1;
                      }
                    })();
                    return function () {
                      var e,
                        o = a(t);
                      if (r) {
                        var n = a(this).constructor;
                        e = zzt3.construct(o, arguments, n);
                      } else e = o.apply(this, arguments);
                      return i(this, e);
                    };
                  }
                  function i(t, r) {
                    return !r || ("object" !== f(r) && "function" != typeof r)
                      ? (function (t) {
                          if (void 0 === t)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return t;
                        })(t)
                      : r;
                  }
                  function a(t) {
                    return (a = Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                        })(t);
                  }
                  function u(t, r) {
                    if (!(t instanceof r)) throw new Error();
                  }
                  function h(t, r) {
                    for (var e = 0; e < r.length; e++) {
                      var o = r[e];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(t, o.key, o);
                    }
                  }
                  function c(t, r, e) {
                    return r && h(t.prototype, r), e && h(t, e), t;
                  }
                  function f(t) {
                    "@babel/helpers - typeof";
                    return (f =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (t) {
                            return typeof t;
                          }
                        : function (t) {
                            return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                          })(t);
                  }
                  var l, v;
                  (l = void 0),
                    (v = function (t) {
                      var r = Object.prototype.toString;
                      function e(t) {
                        return r.call(t).endsWith("Array]");
                      }
                      function n(t) {
                        var r,
                          o =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                        if (!e(t)) throw new Error();
                        if (0 === t.length) throw new Error();
                        if (void 0 !== o.output) {
                          if (!e(o.output)) throw new Error();
                          r = o.output;
                        } else r = new Array(t.length);
                        var n = (function (t) {
                            var r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            if (!e(t)) throw new Error();
                            if (0 === t.length) throw new Error();
                            var o = r.fromIndex,
                              n = void 0 === o ? 0 : o,
                              s = r.toIndex,
                              i = void 0 === s ? t.length : s;
                            if (n < 0 || n >= t.length || !Number.isInteger(n))
                              throw new Error();
                            if (i <= n || i > t.length || !Number.isInteger(i))
                              throw new Error();
                            for (var a = t[n], u = n + 1; u < i; u++)
                              t[u] < a && (a = t[u]);
                            return a;
                          })(t),
                          s = (function (t) {
                            var r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            if (!e(t)) throw new Error();
                            if (0 === t.length) throw new Error();
                            var o = r.fromIndex,
                              n = void 0 === o ? 0 : o,
                              s = r.toIndex,
                              i = void 0 === s ? t.length : s;
                            if (n < 0 || n >= t.length || !Number.isInteger(n))
                              throw new Error();
                            if (i <= n || i > t.length || !Number.isInteger(i))
                              throw new Error();
                            for (var a = t[n], u = n + 1; u < i; u++)
                              t[u] > a && (a = t[u]);
                            return a;
                          })(t);
                        if (n === s) throw new Error();
                        var i = o.min,
                          a = void 0 === i ? (o.autoMinMax ? n : 0) : i,
                          u = o.max,
                          h = void 0 === u ? (o.autoMinMax ? s : 1) : u;
                        if (a >= h) throw new Error();
                        for (
                          var c = (h - a) / (s - n), f = 0;
                          f < t.length;
                          f++
                        )
                          r[f] = (t[f] - n) * c + a;
                        return r;
                      }
                      var a = " ".repeat(2),
                        h = " ".repeat(4);
                      function l(t) {
                        var r =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          e = r.zzgs,
                          o = void 0 === e ? 15 : e,
                          n = r.zzks,
                          s = void 0 === n ? 10 : n,
                          i = r.zzo3,
                          u = void 0 === i ? 8 : i;
                        return ""
                          .concat(t.constructor.name, " {\\n")
                          .concat(a, "[\\n")
                          .concat(h)
                          .concat(
                            (function (t, r, e, o) {
                              for (
                                var n = t.zzk2,
                                  s = t.zzj2,
                                  i = Math.min(n, r),
                                  a = Math.min(s, e),
                                  u = [],
                                  c = 0;
                                c < i;
                                c++
                              ) {
                                for (var f = [], l = 0; l < a; l++)
                                  f.push(v(t.get(c, l), o));
                                u.push("".concat(f.join(" ")));
                              }
                              return (
                                a !== s &&
                                  (u[u.length - 1] += " ... ".concat(
                                    s - e,
                                    " more zzj2"
                                  )),
                                i !== n &&
                                  u.push("... ".concat(n - r, " more zzk2")),
                                u.join("\\n".concat(h))
                              );
                            })(t, o, s, u),
                            "\\n"
                          )
                          .concat(a, "]\\n")
                          .concat(a, "zzk2: ")
                          .concat(t.zzk2, "\\n")
                          .concat(a, "zzj2: ")
                          .concat(t.zzj2, "\\n}");
                      }
                      function v(t, r) {
                        var e = String(t);
                        if (e.length <= r) return e.padEnd(r, " ");
                        var o = t.toPrecision(r - 2);
                        if (o.length <= r) return o;
                        var n = t.zzP3(r - 2),
                          s = n.indexOf("e"),
                          i = n.slice(s);
                        return n.slice(0, r - i.length) + i;
                      }
                      function m(t, r, e) {
                        var o = e ? t.zzk2 : t.zzk2 - 1;
                        if (r < 0 || r > o) throw new Error();
                      }
                      function g(t, r, e) {
                        var o = e ? t.zzj2 : t.zzj2 - 1;
                        if (r < 0 || r > o) throw new Error();
                      }
                      function w(t, r) {
                        if ((r.zzC && (r = r.zzC()), r.length !== t.zzj2))
                          throw new Error();
                        return r;
                      }
                      function p(t, r) {
                        if ((r.zzC && (r = r.zzC()), r.length !== t.zzk2))
                          throw new Error();
                        return r;
                      }
                      function y(t, r, e) {
                        return {
                          row: (function (t, r) {
                            if ("object" != f(r)) throw new Error();
                            if (
                              r.some(function (r) {
                                return r < 0 || r >= t.zzk2;
                              })
                            )
                              throw new Error();
                            return Array.isArray(r) || (r = Array.from(r)), r;
                          })(t, r),
                          zz23: (function (t, r) {
                            if ("object" != f(r)) throw new Error();
                            if (
                              r.some(function (r) {
                                return r < 0 || r >= t.zzj2;
                              })
                            )
                              throw new Error();
                            return Array.isArray(r) || (r = Array.from(r)), r;
                          })(t, e),
                        };
                      }
                      function d(t, r, e, o, n) {
                        if (5 !== arguments.length) throw new Error();
                        if (
                          (M("zz0", r),
                          M("zz1", e),
                          M("zz2", o),
                          M("zz3", n),
                          r > e ||
                            o > n ||
                            r < 0 ||
                            r >= t.zzk2 ||
                            e < 0 ||
                            e >= t.zzk2 ||
                            o < 0 ||
                            o >= t.zzj2 ||
                            n < 0 ||
                            n >= t.zzj2)
                        )
                          throw new Error();
                      }
                      function b(t) {
                        for (
                          var r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            e = [],
                            o = 0;
                          o < t;
                          o++
                        )
                          e.push(r);
                        return e;
                      }
                      function M(t, r) {
                        if ("number" != typeof r)
                          throw new Error("".concat(t, " must be a number"));
                      }
                      function x(t) {
                        if (t.zzu3()) throw new Error();
                      }
                      var k = (function () {
                        function t() {
                          u(this, t);
                        }
                        return (
                          c(
                            t,
                            [
                              {
                                key: "apply",
                                value: function (t) {
                                  if ("function" != typeof t) throw new Error();
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      t.call(this, r, e);
                                  return this;
                                },
                              },
                              {
                                key: "zzC",
                                value: function () {
                                  for (var t = [], r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      t.push(this.get(r, e));
                                  return t;
                                },
                              },
                              {
                                key: "zzD",
                                value: function () {
                                  for (var t = [], r = 0; r < this.zzk2; r++) {
                                    t.push([]);
                                    for (var e = 0; e < this.zzj2; e++)
                                      t[r].push(this.get(r, e));
                                  }
                                  return t;
                                },
                              },
                              {
                                key: "toJSON",
                                value: function () {
                                  return this.zzD();
                                },
                              },
                              {
                                key: "zzE",
                                value: function () {
                                  return 1 === this.zzk2;
                                },
                              },
                              {
                                key: "zzF",
                                value: function () {
                                  return 1 === this.zzj2;
                                },
                              },
                              {
                                key: "zzG",
                                value: function () {
                                  return 1 === this.zzk2 || 1 === this.zzj2;
                                },
                              },
                              {
                                key: "zzH",
                                value: function () {
                                  return this.zzk2 === this.zzj2;
                                },
                              },
                              {
                                key: "zzu3",
                                value: function () {
                                  return 0 === this.zzk2 || 0 === this.zzj2;
                                },
                              },
                              {
                                key: "zzI",
                                value: function () {
                                  if (this.zzH()) {
                                    for (var t = 0; t < this.zzk2; t++)
                                      for (var r = 0; r <= t; r++)
                                        if (this.get(t, r) !== this.get(r, t))
                                          return !1;
                                    return !0;
                                  }
                                  return !1;
                                },
                              },
                              {
                                key: "zzJ",
                                value: function () {
                                  for (
                                    var t = 0, r = 0, e = -1, o = !0, n = !1;
                                    t < this.zzk2 && o;

                                  ) {
                                    for (
                                      r = 0, n = !1;
                                      r < this.zzj2 && !1 === n;

                                    )
                                      0 === this.get(t, r)
                                        ? r++
                                        : 1 === this.get(t, r) && r > e
                                        ? ((n = !0), (e = r))
                                        : ((o = !1), (n = !0));
                                    t++;
                                  }
                                  return o;
                                },
                              },
                              {
                                key: "zzK",
                                value: function () {
                                  for (
                                    var t = 0, r = 0, e = -1, o = !0, n = !1;
                                    t < this.zzk2 && o;

                                  ) {
                                    for (
                                      r = 0, n = !1;
                                      r < this.zzj2 && !1 === n;

                                    )
                                      0 === this.get(t, r)
                                        ? r++
                                        : 1 === this.get(t, r) && r > e
                                        ? ((n = !0), (e = r))
                                        : ((o = !1), (n = !0));
                                    for (var s = r + 1; s < this.zzk2; s++)
                                      0 !== this.get(t, s) && (o = !1);
                                    t++;
                                  }
                                  return o;
                                },
                              },
                              {
                                key: "zzv3",
                                value: function () {
                                  for (
                                    var t = this.clone(), r = 0, e = 0;
                                    r < t.zzk2 && e < t.zzj2;

                                  ) {
                                    for (var o = r, n = r; n < t.zzk2; n++)
                                      t.get(n, e) > t.get(o, e) && (o = n);
                                    if (0 === t.get(o, e)) e++;
                                    else {
                                      t.zzP(r, o);
                                      for (
                                        var s = t.get(r, e), i = e;
                                        i < t.zzj2;
                                        i++
                                      )
                                        t.set(r, i, t.get(r, i) / s);
                                      for (var a = r + 1; a < t.zzk2; a++) {
                                        var u = t.get(a, e) / t.get(r, e);
                                        t.set(a, e, 0);
                                        for (var h = e + 1; h < t.zzj2; h++)
                                          t.set(
                                            a,
                                            h,
                                            t.get(a, h) - t.get(r, h) * u
                                          );
                                      }
                                      r++, e++;
                                    }
                                  }
                                  return t;
                                },
                              },
                              {
                                key: "reducedEchelonForm",
                                value: function () {
                                  for (
                                    var t = this.zzv3(),
                                      r = t.zzj2,
                                      e = t.zzk2,
                                      o = e - 1;
                                    o >= 0;

                                  )
                                    if (0 === t.zzg(o)) o--;
                                    else {
                                      for (
                                        var n = 0, s = !1;
                                        n < e && !1 === s;

                                      )
                                        1 === t.get(o, n) ? (s = !0) : n++;
                                      for (var i = 0; i < o; i++)
                                        for (
                                          var a = t.get(i, n), u = n;
                                          u < r;
                                          u++
                                        ) {
                                          var h = t.get(i, u) - a * t.get(o, u);
                                          t.set(i, u, h);
                                        }
                                      o--;
                                    }
                                  return t;
                                },
                              },
                              {
                                key: "set",
                                value: function () {
                                  throw new Error();
                                },
                              },
                              {
                                key: "get",
                                value: function () {
                                  throw new Error();
                                },
                              },
                              {
                                key: "repeat",
                                value: function () {
                                  var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {};
                                  if ("object" != f(t)) throw new Error();
                                  var r = t.zzk2,
                                    e = void 0 === r ? 1 : r,
                                    o = t.zzj2,
                                    n = void 0 === o ? 1 : o;
                                  if (!Number.isInteger(e) || e <= 0)
                                    throw new Error();
                                  if (!Number.isInteger(n) || n <= 0)
                                    throw new Error();
                                  for (
                                    var s = new E(this.zzk2 * e, this.zzj2 * n),
                                      i = 0;
                                    i < e;
                                    i++
                                  )
                                    for (var a = 0; a < n; a++)
                                      s.zz61(
                                        this,
                                        this.zzk2 * i,
                                        this.zzj2 * a
                                      );
                                  return s;
                                },
                              },
                              {
                                key: "zzL",
                                value: function (t) {
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, t);
                                  return this;
                                },
                              },
                              {
                                key: "neg",
                                value: function () {
                                  return this.mulS(-1);
                                },
                              },
                              {
                                key: "zzM",
                                value: function (t) {
                                  m(this, t);
                                  for (var r = [], e = 0; e < this.zzj2; e++)
                                    r.push(this.get(t, e));
                                  return r;
                                },
                              },
                              {
                                key: "zzMVector",
                                value: function (t) {
                                  return E.zzE1(this.zzM(t));
                                },
                              },
                              {
                                key: "zzO",
                                value: function (t, r) {
                                  m(this, t), (r = w(this, r));
                                  for (var e = 0; e < this.zzj2; e++)
                                    this.set(t, e, r[e]);
                                  return this;
                                },
                              },
                              {
                                key: "zzP",
                                value: function (t, r) {
                                  m(this, t), m(this, r);
                                  for (var e = 0; e < this.zzj2; e++) {
                                    var o = this.get(t, e);
                                    this.set(t, e, this.get(r, e)),
                                      this.set(r, e, o);
                                  }
                                  return this;
                                },
                              },
                              {
                                key: "zzQ",
                                value: function (t) {
                                  g(this, t);
                                  for (var r = [], e = 0; e < this.zzk2; e++)
                                    r.push(this.get(e, t));
                                  return r;
                                },
                              },
                              {
                                key: "zzQVector",
                                value: function (t) {
                                  return E.zzF1(this.zzQ(t));
                                },
                              },
                              {
                                key: "zzS",
                                value: function (t, r) {
                                  g(this, t), (r = p(this, r));
                                  for (var e = 0; e < this.zzk2; e++)
                                    this.set(e, t, r[e]);
                                  return this;
                                },
                              },
                              {
                                key: "zzT",
                                value: function (t, r) {
                                  g(this, t), g(this, r);
                                  for (var e = 0; e < this.zzk2; e++) {
                                    var o = this.get(e, t);
                                    this.set(e, t, this.get(e, r)),
                                      this.set(e, r, o);
                                  }
                                  return this;
                                },
                              },
                              {
                                key: "zzU",
                                value: function (t) {
                                  t = w(this, t);
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, this.get(r, e) + t[e]);
                                  return this;
                                },
                              },
                              {
                                key: "zzV",
                                value: function (t) {
                                  t = w(this, t);
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, this.get(r, e) - t[e]);
                                  return this;
                                },
                              },
                              {
                                key: "zzW",
                                value: function (t) {
                                  t = w(this, t);
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, this.get(r, e) * t[e]);
                                  return this;
                                },
                              },
                              {
                                key: "zzX",
                                value: function (t) {
                                  t = w(this, t);
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, this.get(r, e) / t[e]);
                                  return this;
                                },
                              },
                              {
                                key: "zzY",
                                value: function (t) {
                                  t = p(this, t);
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, this.get(r, e) + t[r]);
                                  return this;
                                },
                              },
                              {
                                key: "zzZ",
                                value: function (t) {
                                  t = p(this, t);
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, this.get(r, e) - t[r]);
                                  return this;
                                },
                              },
                              {
                                key: "zza",
                                value: function (t) {
                                  t = p(this, t);
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, this.get(r, e) * t[r]);
                                  return this;
                                },
                              },
                              {
                                key: "zzb",
                                value: function (t) {
                                  t = p(this, t);
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, this.get(r, e) / t[r]);
                                  return this;
                                },
                              },
                              {
                                key: "zzc",
                                value: function (t, r) {
                                  m(this, t);
                                  for (var e = 0; e < this.zzj2; e++)
                                    this.set(t, e, this.get(t, e) * r);
                                  return this;
                                },
                              },
                              {
                                key: "zzd",
                                value: function (t, r) {
                                  g(this, t);
                                  for (var e = 0; e < this.zzk2; e++)
                                    this.set(e, t, this.get(e, t) * r);
                                  return this;
                                },
                              },
                              {
                                key: "max",
                                value: function () {
                                  if (this.zzu3()) return NaN;
                                  for (
                                    var t = this.get(0, 0), r = 0;
                                    r < this.zzk2;
                                    r++
                                  )
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.get(r, e) > t &&
                                        (t = this.get(r, e));
                                  return t;
                                },
                              },
                              {
                                key: "zze",
                                value: function () {
                                  x(this);
                                  for (
                                    var t = this.get(0, 0), r = [0, 0], e = 0;
                                    e < this.zzk2;
                                    e++
                                  )
                                    for (var o = 0; o < this.zzj2; o++)
                                      this.get(e, o) > t &&
                                        ((t = this.get(e, o)),
                                        (r[0] = e),
                                        (r[1] = o));
                                  return r;
                                },
                              },
                              {
                                key: "min",
                                value: function () {
                                  if (this.zzu3()) return NaN;
                                  for (
                                    var t = this.get(0, 0), r = 0;
                                    r < this.zzk2;
                                    r++
                                  )
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.get(r, e) < t &&
                                        (t = this.get(r, e));
                                  return t;
                                },
                              },
                              {
                                key: "zzf",
                                value: function () {
                                  x(this);
                                  for (
                                    var t = this.get(0, 0), r = [0, 0], e = 0;
                                    e < this.zzk2;
                                    e++
                                  )
                                    for (var o = 0; o < this.zzj2; o++)
                                      this.get(e, o) < t &&
                                        ((t = this.get(e, o)),
                                        (r[0] = e),
                                        (r[1] = o));
                                  return r;
                                },
                              },
                              {
                                key: "zzg",
                                value: function (t) {
                                  if ((m(this, t), this.zzu3())) return NaN;
                                  for (
                                    var r = this.get(t, 0), e = 1;
                                    e < this.zzj2;
                                    e++
                                  )
                                    this.get(t, e) > r && (r = this.get(t, e));
                                  return r;
                                },
                              },
                              {
                                key: "zzgIndex",
                                value: function (t) {
                                  m(this, t), x(this);
                                  for (
                                    var r = this.get(t, 0), e = [t, 0], o = 1;
                                    o < this.zzj2;
                                    o++
                                  )
                                    this.get(t, o) > r &&
                                      ((r = this.get(t, o)), (e[1] = o));
                                  return e;
                                },
                              },
                              {
                                key: "zzi",
                                value: function (t) {
                                  if ((m(this, t), this.zzu3())) return NaN;
                                  for (
                                    var r = this.get(t, 0), e = 1;
                                    e < this.zzj2;
                                    e++
                                  )
                                    this.get(t, e) < r && (r = this.get(t, e));
                                  return r;
                                },
                              },
                              {
                                key: "zziIndex",
                                value: function (t) {
                                  m(this, t), x(this);
                                  for (
                                    var r = this.get(t, 0), e = [t, 0], o = 1;
                                    o < this.zzj2;
                                    o++
                                  )
                                    this.get(t, o) < r &&
                                      ((r = this.get(t, o)), (e[1] = o));
                                  return e;
                                },
                              },
                              {
                                key: "zzk",
                                value: function (t) {
                                  if ((g(this, t), this.zzu3())) return NaN;
                                  for (
                                    var r = this.get(0, t), e = 1;
                                    e < this.zzk2;
                                    e++
                                  )
                                    this.get(e, t) > r && (r = this.get(e, t));
                                  return r;
                                },
                              },
                              {
                                key: "zzkIndex",
                                value: function (t) {
                                  g(this, t), x(this);
                                  for (
                                    var r = this.get(0, t), e = [0, t], o = 1;
                                    o < this.zzk2;
                                    o++
                                  )
                                    this.get(o, t) > r &&
                                      ((r = this.get(o, t)), (e[0] = o));
                                  return e;
                                },
                              },
                              {
                                key: "zzm",
                                value: function (t) {
                                  if ((g(this, t), this.zzu3())) return NaN;
                                  for (
                                    var r = this.get(0, t), e = 1;
                                    e < this.zzk2;
                                    e++
                                  )
                                    this.get(e, t) < r && (r = this.get(e, t));
                                  return r;
                                },
                              },
                              {
                                key: "zzmIndex",
                                value: function (t) {
                                  g(this, t), x(this);
                                  for (
                                    var r = this.get(0, t), e = [0, t], o = 1;
                                    o < this.zzk2;
                                    o++
                                  )
                                    this.get(o, t) < r &&
                                      ((r = this.get(o, t)), (e[0] = o));
                                  return e;
                                },
                              },
                              {
                                key: "zzo",
                                value: function () {
                                  for (
                                    var t = Math.min(this.zzk2, this.zzj2),
                                      r = [],
                                      e = 0;
                                    e < t;
                                    e++
                                  )
                                    r.push(this.get(e, e));
                                  return r;
                                },
                              },
                              {
                                key: "zzp",
                                value: function () {
                                  var t =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : "zzw3",
                                    r = 0;
                                  if ("max" === t) return this.max();
                                  if ("zzw3" === t) {
                                    for (var e = 0; e < this.zzk2; e++)
                                      for (var o = 0; o < this.zzj2; o++)
                                        r += this.get(e, o) * this.get(e, o);
                                    return Math.sqrt(r);
                                  }
                                  throw new Error(
                                    "unknown zzp type: ".concat(t)
                                  );
                                },
                              },
                              {
                                key: "zzq",
                                value: function () {
                                  for (var t = 0, r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      (t += this.get(r, e)), this.set(r, e, t);
                                  return this;
                                },
                              },
                              {
                                key: "dot",
                                value: function (r) {
                                  t.zzM1(r) && (r = r.zzC());
                                  var e = this.zzC();
                                  if (e.length !== r.length) throw new Error();
                                  for (var o = 0, n = 0; n < e.length; n++)
                                    o += e[n] * r[n];
                                  return o;
                                },
                              },
                              {
                                key: "zzr",
                                value: function (t) {
                                  t = E.zzL1(t);
                                  var r = new E(this.zzk2, t.zzj2);
                                  return this.zzr2(t, r), r;
                                },
                              },
                              {
                                key: "zzr2",
                                value: function (t, r) {
                                  var e = this.zzk2,
                                    o = this.zzj2,
                                    n = t.zzj2;
                                  this.Bcolj =
                                    this.Bcolj || new Float32Array(o);
                                  for (var s = this.Bcolj, i = 0; i < n; i++) {
                                    for (var a = 0; a < o; a++)
                                      s[a] = t.get(a, i);
                                    for (var u = 0; u < e; u++) {
                                      for (var h = 0, c = 0; c < o; c++)
                                        h += this.get(u, c) * s[c];
                                      r.set(u, i, h);
                                    }
                                  }
                                },
                              },
                              {
                                key: "zzs",
                                value: function (t) {
                                  t = E.zzL1(t);
                                  var r = new E(2, 2),
                                    e = this.get(0, 0),
                                    o = t.get(0, 0),
                                    n = this.get(0, 1),
                                    s = t.get(0, 1),
                                    i = this.get(1, 0),
                                    a = t.get(1, 0),
                                    u = this.get(1, 1),
                                    h = t.get(1, 1),
                                    c = (e + u) * (o + h),
                                    f = (i + u) * o,
                                    l = e * (s - h),
                                    v = u * (a - o),
                                    m = (e + n) * h,
                                    g = c + v - m + (n - u) * (a + h),
                                    w = l + m,
                                    p = f + v,
                                    y = c - f + l + (i - e) * (o + s);
                                  return (
                                    r.set(0, 0, g),
                                    r.set(0, 1, w),
                                    r.set(1, 0, p),
                                    r.set(1, 1, y),
                                    r
                                  );
                                },
                              },
                              {
                                key: "zzt",
                                value: function (t) {
                                  t = E.zzL1(t);
                                  var r = new E(3, 3),
                                    e = this.get(0, 0),
                                    o = this.get(0, 1),
                                    n = this.get(0, 2),
                                    s = this.get(1, 0),
                                    i = this.get(1, 1),
                                    a = this.get(1, 2),
                                    u = this.get(2, 0),
                                    h = this.get(2, 1),
                                    c = this.get(2, 2),
                                    f = t.get(0, 0),
                                    l = t.get(0, 1),
                                    v = t.get(0, 2),
                                    m = t.get(1, 0),
                                    g = t.get(1, 1),
                                    w = t.get(1, 2),
                                    p = t.get(2, 0),
                                    y = t.get(2, 1),
                                    d = t.get(2, 2),
                                    b = (e - s) * (-l + g),
                                    M = (-e + s + i) * (f - l + g),
                                    x = (s + i) * (-f + l),
                                    k = e * f,
                                    S = (-e + u + h) * (f - v + w),
                                    R = (-e + u) * (v - w),
                                    T = (u + h) * (-f + v),
                                    A = (-n + h + c) * (g + p - y),
                                    D = (n - c) * (g - y),
                                    C = n * p,
                                    I = (h + c) * (-p + y),
                                    N = (-n + i + a) * (w + p - d),
                                    O = (n - a) * (w - d),
                                    F = (i + a) * (-p + d),
                                    P = k + C + o * m,
                                    V =
                                      (e + o + n - s - i - h - c) * g +
                                      M +
                                      x +
                                      k +
                                      A +
                                      C +
                                      I,
                                    j =
                                      k +
                                      S +
                                      T +
                                      (e + o + n - i - a - u - h) * w +
                                      C +
                                      N +
                                      F,
                                    q =
                                      b +
                                      i * (-f + l + m - g - w - p + d) +
                                      M +
                                      k +
                                      C +
                                      N +
                                      O,
                                    z = b + M + x + k + a * y,
                                    Q = C + N + O + F + s * v,
                                    L =
                                      k +
                                      S +
                                      R +
                                      h * (-f + v + m - g - w - p + y) +
                                      A +
                                      D +
                                      C,
                                    B = A + D + C + I + u * l,
                                    U = k + S + R + T + c * d;
                                  return (
                                    r.set(0, 0, P),
                                    r.set(0, 1, V),
                                    r.set(0, 2, j),
                                    r.set(1, 0, q),
                                    r.set(1, 1, z),
                                    r.set(1, 2, Q),
                                    r.set(2, 0, L),
                                    r.set(2, 1, B),
                                    r.set(2, 2, U),
                                    r
                                  );
                                },
                              },
                              {
                                key: "zzrStrassen",
                                value: function (r) {
                                  r = E.zzL1(r);
                                  var e = this.clone(),
                                    o = e.zzk2,
                                    n = e.zzj2,
                                    s = r.zzk2,
                                    i = r.zzj2;
                                  function a(r, e, o) {
                                    var n = r.zzk2,
                                      s = r.zzj2;
                                    if (n === e && s === o) return r;
                                    var i = t.zzG1(e, o);
                                    return (i = i.zz61(r, 0, 0));
                                  }
                                  n !== s && 1;
                                  var u = Math.max(o, s),
                                    h = Math.max(n, i);
                                  return (function r(e, o, n, s) {
                                    if (n <= 512 || s <= 512) return e.zzr(o);
                                    n % 2 == 1 && s % 2 == 1
                                      ? ((e = a(e, n + 1, s + 1)),
                                        (o = a(o, n + 1, s + 1)))
                                      : n % 2 == 1
                                      ? ((e = a(e, n + 1, s)),
                                        (o = a(o, n + 1, s)))
                                      : s % 2 == 1 &&
                                        ((e = a(e, n, s + 1)),
                                        (o = a(o, n, s + 1)));
                                    var i = parseInt(e.zzk2 / 2, 10),
                                      u = parseInt(e.zzj2 / 2, 10),
                                      h = e.zz31(0, i - 1, 0, u - 1),
                                      c = o.zz31(0, i - 1, 0, u - 1),
                                      f = e.zz31(0, i - 1, u, e.zzj2 - 1),
                                      l = o.zz31(0, i - 1, u, o.zzj2 - 1),
                                      v = e.zz31(i, e.zzk2 - 1, 0, u - 1),
                                      m = o.zz31(i, o.zzk2 - 1, 0, u - 1),
                                      g = e.zz31(i, e.zzk2 - 1, u, e.zzj2 - 1),
                                      w = o.zz31(i, o.zzk2 - 1, u, o.zzj2 - 1),
                                      p = r(t.add(h, g), t.add(c, w), i, u),
                                      y = r(t.add(v, g), c, i, u),
                                      d = r(h, t.sub(l, w), i, u),
                                      b = r(g, t.sub(m, c), i, u),
                                      M = r(t.add(h, f), w, i, u),
                                      x = r(t.sub(v, h), t.add(c, l), i, u),
                                      k = r(t.sub(f, g), t.add(m, w), i, u),
                                      S = t.add(p, b);
                                    S.sub(M), S.add(k);
                                    var E = t.add(d, M),
                                      R = t.add(y, b),
                                      T = t.sub(p, y);
                                    T.add(d), T.add(x);
                                    var A = t.zzG1(2 * S.zzk2, 2 * S.zzj2);
                                    return (A = (A = (A = (A = A.zz61(
                                      S,
                                      0,
                                      0
                                    )).zz61(E, S.zzk2, 0)).zz61(
                                      R,
                                      0,
                                      S.zzj2
                                    )).zz61(T, S.zzk2, S.zzj2)).zz31(
                                      0,
                                      n - 1,
                                      0,
                                      s - 1
                                    );
                                  })((e = a(e, u, h)), (r = a(r, u, h)), u, h);
                                },
                              },
                              {
                                key: "zzv",
                                value: function () {
                                  var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {};
                                  if ("object" != f(t)) throw new Error();
                                  var r = t.min,
                                    e = void 0 === r ? 0 : r,
                                    o = t.max,
                                    s = void 0 === o ? 1 : o;
                                  if (!Number.isFinite(e)) throw new Error();
                                  if (!Number.isFinite(s)) throw new Error();
                                  if (e >= s) throw new Error();
                                  for (
                                    var i = new E(this.zzk2, this.zzj2), a = 0;
                                    a < this.zzk2;
                                    a++
                                  ) {
                                    var u = this.zzM(a);
                                    u.length > 0 &&
                                      n(u, { min: e, max: s, output: u }),
                                      i.zzO(a, u);
                                  }
                                  return i;
                                },
                              },
                              {
                                key: "zzw",
                                value: function () {
                                  var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {};
                                  if ("object" != f(t)) throw new Error();
                                  var r = t.min,
                                    e = void 0 === r ? 0 : r,
                                    o = t.max,
                                    s = void 0 === o ? 1 : o;
                                  if (!Number.isFinite(e)) throw new Error();
                                  if (!Number.isFinite(s)) throw new Error();
                                  if (e >= s) throw new Error();
                                  for (
                                    var i = new E(this.zzk2, this.zzj2), a = 0;
                                    a < this.zzj2;
                                    a++
                                  ) {
                                    var u = this.zzQ(a);
                                    u.length &&
                                      n(u, { min: e, max: s, output: u }),
                                      i.zzS(a, u);
                                  }
                                  return i;
                                },
                              },
                              {
                                key: "zzx",
                                value: function () {
                                  for (
                                    var t = Math.ceil(this.zzj2 / 2), r = 0;
                                    r < this.zzk2;
                                    r++
                                  )
                                    for (var e = 0; e < t; e++) {
                                      var o = this.get(r, e),
                                        n = this.get(r, this.zzj2 - 1 - e);
                                      this.set(r, e, n),
                                        this.set(r, this.zzj2 - 1 - e, o);
                                    }
                                  return this;
                                },
                              },
                              {
                                key: "zzy",
                                value: function () {
                                  for (
                                    var t = Math.ceil(this.zzk2 / 2), r = 0;
                                    r < this.zzj2;
                                    r++
                                  )
                                    for (var e = 0; e < t; e++) {
                                      var o = this.get(e, r),
                                        n = this.get(this.zzk2 - 1 - e, r);
                                      this.set(e, r, n),
                                        this.set(this.zzk2 - 1 - e, r, o);
                                    }
                                  return this;
                                },
                              },
                              {
                                key: "zzz",
                                value: function (t) {
                                  t = E.zzL1(t);
                                  for (
                                    var r = this.zzk2,
                                      e = this.zzj2,
                                      o = t.zzk2,
                                      n = t.zzj2,
                                      s = new E(r * o, e * n),
                                      i = 0;
                                    i < r;
                                    i++
                                  )
                                    for (var a = 0; a < e; a++)
                                      for (var u = 0; u < o; u++)
                                        for (var h = 0; h < n; h++)
                                          s.set(
                                            o * i + u,
                                            n * a + h,
                                            this.get(i, a) * t.get(u, h)
                                          );
                                  return s;
                                },
                              },
                              {
                                key: "kroneckerSum",
                                value: function (t) {
                                  if (
                                    ((t = E.zzL1(t)), !this.zzH() || !t.zzH())
                                  )
                                    throw new Error();
                                  var r = this.zzk2,
                                    e = t.zzk2,
                                    o = this.zzz(E.zzJ1(e, e)),
                                    n = E.zzJ1(r, r).zzz(t);
                                  return o.add(n);
                                },
                              },
                              {
                                key: "zz01",
                                value: function () {
                                  var t = new E(this.zzj2, this.zzk2);
                                  return this.zz012(t), t;
                                },
                              },
                              {
                                key: "zz012",
                                value: function (t) {
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      t.set(e, r, this.get(r, e));
                                },
                              },
                              {
                                key: "zz11",
                                value: function () {
                                  for (
                                    var t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : S,
                                      r = 0;
                                    r < this.zzk2;
                                    r++
                                  )
                                    this.zzO(r, this.zzM(r).sort(t));
                                  return this;
                                },
                              },
                              {
                                key: "zz21",
                                value: function () {
                                  for (
                                    var t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : S,
                                      r = 0;
                                    r < this.zzj2;
                                    r++
                                  )
                                    this.zzS(r, this.zzQ(r).sort(t));
                                  return this;
                                },
                              },
                              {
                                key: "zz31",
                                value: function (t, r, e, o) {
                                  d(this, t, r, e, o);
                                  for (
                                    var n = new E(r - t + 1, o - e + 1), s = t;
                                    s <= r;
                                    s++
                                  )
                                    for (var i = e; i <= o; i++)
                                      n.set(s - t, i - e, this.get(s, i));
                                  return n;
                                },
                              },
                              {
                                key: "zz31Row",
                                value: function (t, r, e) {
                                  if (
                                    (void 0 === r && (r = 0),
                                    void 0 === e && (e = this.zzj2 - 1),
                                    r > e ||
                                      r < 0 ||
                                      r >= this.zzj2 ||
                                      e < 0 ||
                                      e >= this.zzj2)
                                  )
                                    throw new Error();
                                  for (
                                    var o = new E(t.length, e - r + 1), n = 0;
                                    n < t.length;
                                    n++
                                  )
                                    for (var s = r; s <= e; s++) {
                                      if (t[n] < 0 || t[n] >= this.zzk2)
                                        throw new Error(
                                          "Row index out of range: ".concat(
                                            t[n]
                                          )
                                        );
                                      o.set(n, s - r, this.get(t[n], s));
                                    }
                                  return o;
                                },
                              },
                              {
                                key: "zz31Column",
                                value: function (t, r, e) {
                                  if (
                                    (void 0 === r && (r = 0),
                                    void 0 === e && (e = this.zzk2 - 1),
                                    r > e ||
                                      r < 0 ||
                                      r >= this.zzk2 ||
                                      e < 0 ||
                                      e >= this.zzk2)
                                  )
                                    throw new Error();
                                  for (
                                    var o = new E(e - r + 1, t.length), n = 0;
                                    n < t.length;
                                    n++
                                  )
                                    for (var s = r; s <= e; s++) {
                                      if (t[n] < 0 || t[n] >= this.zzj2)
                                        throw new Error(
                                          "Column index out of range: ".concat(
                                            t[n]
                                          )
                                        );
                                      o.set(s - r, n, this.get(s, t[n]));
                                    }
                                  return o;
                                },
                              },
                              {
                                key: "zz61",
                                value: function (t, r, e) {
                                  if ((t = E.zzL1(t)).zzu3()) return this;
                                  d(this, r, r + t.zzk2 - 1, e, e + t.zzj2 - 1);
                                  for (var o = 0; o < t.zzk2; o++)
                                    for (var n = 0; n < t.zzj2; n++)
                                      this.set(r + o, e + n, t.get(o, n));
                                  return this;
                                },
                              },
                              {
                                key: "zz71",
                                value: function (t, r) {
                                  for (
                                    var e = y(this, t, r),
                                      o = new E(t.length, r.length),
                                      n = 0;
                                    n < e.row.length;
                                    n++
                                  )
                                    for (
                                      var s = e.row[n], i = 0;
                                      i < e.zz23.length;
                                      i++
                                    ) {
                                      var a = e.zz23[i];
                                      o.set(n, i, this.get(s, a));
                                    }
                                  return o;
                                },
                              },
                              {
                                key: "trace",
                                value: function () {
                                  for (
                                    var t = Math.min(this.zzk2, this.zzj2),
                                      r = 0,
                                      e = 0;
                                    e < t;
                                    e++
                                  )
                                    r += this.get(e, e);
                                  return r;
                                },
                              },
                              {
                                key: "copy",
                                value: function (t) {
                                  for (var r = 0; r < this.zzk2; r++)
                                    for (var e = 0; e < this.zzj2; e++)
                                      this.set(r, e, t.get(r, e));
                                },
                              },
                              {
                                key: "reset",
                                value: function () {
                                  for (var t = 0; t < this.zzk2; t++)
                                    for (var r = 0; r < this.zzj2; r++)
                                      this.set(t, r, 0);
                                },
                              },
                              {
                                key: "clone",
                                value: function () {
                                  var t = new E(this.zzk2, this.zzj2);
                                  return t.copy(this), t;
                                },
                              },
                              {
                                key: "sum",
                                value: function (t) {
                                  switch (t) {
                                    case "row":
                                      return (function (t) {
                                        for (
                                          var r = b(t.zzk2), e = 0;
                                          e < t.zzk2;
                                          ++e
                                        )
                                          for (var o = 0; o < t.zzj2; ++o)
                                            r[e] += t.get(e, o);
                                        return r;
                                      })(this);
                                    case "zz23":
                                      return (function (t) {
                                        for (
                                          var r = b(t.zzj2), e = 0;
                                          e < t.zzk2;
                                          ++e
                                        )
                                          for (var o = 0; o < t.zzj2; ++o)
                                            r[o] += t.get(e, o);
                                        return r;
                                      })(this);
                                    case void 0:
                                      return (function (t) {
                                        for (var r = 0, e = 0; e < t.zzk2; e++)
                                          for (var o = 0; o < t.zzj2; o++)
                                            r += t.get(e, o);
                                        return r;
                                      })(this);
                                    default:
                                      throw new Error(
                                        "inzyp13 option: ".concat(t)
                                      );
                                  }
                                },
                              },
                              {
                                key: "zz81",
                                value: function (t) {
                                  switch (t) {
                                    case "row":
                                      return (function (t) {
                                        for (
                                          var r = b(t.zzk2, 1), e = 0;
                                          e < t.zzk2;
                                          ++e
                                        )
                                          for (var o = 0; o < t.zzj2; ++o)
                                            r[e] *= t.get(e, o);
                                        return r;
                                      })(this);
                                    case "zz23":
                                      return (function (t) {
                                        for (
                                          var r = b(t.zzj2, 1), e = 0;
                                          e < t.zzk2;
                                          ++e
                                        )
                                          for (var o = 0; o < t.zzj2; ++o)
                                            r[o] *= t.get(e, o);
                                        return r;
                                      })(this);
                                    case void 0:
                                      return (function (t) {
                                        for (var r = 1, e = 0; e < t.zzk2; e++)
                                          for (var o = 0; o < t.zzj2; o++)
                                            r *= t.get(e, o);
                                        return r;
                                      })(this);
                                    default:
                                      throw new Error(
                                        "inzyp13 option: ".concat(t)
                                      );
                                  }
                                },
                              },
                              {
                                key: "zz91",
                                value: function (t) {
                                  var r = this.sum(t);
                                  switch (t) {
                                    case "row":
                                      for (var e = 0; e < this.zzk2; e++)
                                        r[e] /= this.zzj2;
                                      return r;
                                    case "zz23":
                                      for (var o = 0; o < this.zzj2; o++)
                                        r[o] /= this.zzk2;
                                      return r;
                                    case void 0:
                                      return r / this.zzC1;
                                    default:
                                      throw new Error(
                                        "inzyp13 option: ".concat(t)
                                      );
                                  }
                                },
                              },
                              {
                                key: "zzA1",
                                value: function (t) {
                                  var r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                      ? arguments[1]
                                      : {};
                                  if (
                                    ("object" == f(t) &&
                                      ((r = t), (t = void 0)),
                                    "object" != f(r))
                                  )
                                    throw new Error();
                                  var e = r,
                                    o = e.unbiased,
                                    n = void 0 === o || o,
                                    s = e.zz91,
                                    i = void 0 === s ? this.zz91(t) : s;
                                  if ("boolean" != typeof n) throw new Error();
                                  switch (t) {
                                    case "row":
                                      if (!Array.isArray(i)) throw new Error();
                                      return (function (t, r, e) {
                                        for (
                                          var o = t.zzk2,
                                            n = t.zzj2,
                                            s = [],
                                            i = 0;
                                          i < o;
                                          i++
                                        ) {
                                          for (
                                            var a = 0, u = 0, h = 0, c = 0;
                                            c < n;
                                            c++
                                          )
                                            (a += h = t.get(i, c) - e[i]),
                                              (u += h * h);
                                          r
                                            ? s.push(
                                                (u - (a * a) / n) / (n - 1)
                                              )
                                            : s.push((u - (a * a) / n) / n);
                                        }
                                        return s;
                                      })(this, n, i);
                                    case "zz23":
                                      if (!Array.isArray(i)) throw new Error();
                                      return (function (t, r, e) {
                                        for (
                                          var o = t.zzk2,
                                            n = t.zzj2,
                                            s = [],
                                            i = 0;
                                          i < n;
                                          i++
                                        ) {
                                          for (
                                            var a = 0, u = 0, h = 0, c = 0;
                                            c < o;
                                            c++
                                          )
                                            (a += h = t.get(c, i) - e[i]),
                                              (u += h * h);
                                          r
                                            ? s.push(
                                                (u - (a * a) / o) / (o - 1)
                                              )
                                            : s.push((u - (a * a) / o) / o);
                                        }
                                        return s;
                                      })(this, n, i);
                                    case void 0:
                                      if ("number" != typeof i)
                                        throw new Error();
                                      return (function (t, r, e) {
                                        for (
                                          var o = t.zzk2,
                                            n = t.zzj2,
                                            s = o * n,
                                            i = 0,
                                            a = 0,
                                            u = 0,
                                            h = 0;
                                          h < o;
                                          h++
                                        )
                                          for (var c = 0; c < n; c++)
                                            (i += u = t.get(h, c) - e),
                                              (a += u * u);
                                        return r
                                          ? (a - (i * i) / s) / (s - 1)
                                          : (a - (i * i) / s) / s;
                                      })(this, n, i);
                                    default:
                                      throw new Error(
                                        "inzyp13 option: ".concat(t)
                                      );
                                  }
                                },
                              },
                              {
                                key: "zzB1",
                                value: function (t, r) {
                                  "object" == f(t) && ((r = t), (t = void 0));
                                  var e = this.zzA1(t, r);
                                  if (void 0 === t) return Math.sqrt(e);
                                  for (var o = 0; o < e.length; o++)
                                    e[o] = Math.sqrt(e[o]);
                                  return e;
                                },
                              },
                              {
                                key: "center",
                                value: function (t) {
                                  var r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                      ? arguments[1]
                                      : {};
                                  if (
                                    ("object" == f(t) &&
                                      ((r = t), (t = void 0)),
                                    "object" != f(r))
                                  )
                                    throw new Error();
                                  var e = r.center,
                                    o = void 0 === e ? this.zz91(t) : e;
                                  switch (t) {
                                    case "row":
                                      if (!Array.isArray(o)) throw new Error();
                                      return (
                                        (function (t, r) {
                                          for (var e = 0; e < t.zzk2; e++)
                                            for (var o = 0; o < t.zzj2; o++)
                                              t.set(e, o, t.get(e, o) - r[e]);
                                        })(this, o),
                                        this
                                      );
                                    case "zz23":
                                      if (!Array.isArray(o)) throw new Error();
                                      return (
                                        (function (t, r) {
                                          for (var e = 0; e < t.zzk2; e++)
                                            for (var o = 0; o < t.zzj2; o++)
                                              t.set(e, o, t.get(e, o) - r[o]);
                                        })(this, o),
                                        this
                                      );
                                    case void 0:
                                      if ("number" != typeof o)
                                        throw new Error();
                                      return (
                                        (function (t, r) {
                                          for (var e = 0; e < t.zzk2; e++)
                                            for (var o = 0; o < t.zzj2; o++)
                                              t.set(e, o, t.get(e, o) - r);
                                        })(this, o),
                                        this
                                      );
                                    default:
                                      throw new Error(
                                        "inzyp13 option: ".concat(t)
                                      );
                                  }
                                },
                              },
                              {
                                key: "scale",
                                value: function (t) {
                                  var r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                      ? arguments[1]
                                      : {};
                                  if (
                                    ("object" == f(t) &&
                                      ((r = t), (t = void 0)),
                                    "object" != f(r))
                                  )
                                    throw new Error();
                                  var e = r.scale;
                                  switch (t) {
                                    case "row":
                                      if (void 0 === e)
                                        e = (function (t) {
                                          for (
                                            var r = [], e = 0;
                                            e < t.zzk2;
                                            e++
                                          ) {
                                            for (
                                              var o = 0, n = 0;
                                              n < t.zzj2;
                                              n++
                                            )
                                              o +=
                                                Math.pow(t.get(e, n), 2) /
                                                (t.zzj2 - 1);
                                            r.push(Math.sqrt(o));
                                          }
                                          return r;
                                        })(this);
                                      else if (!Array.isArray(e))
                                        throw new Error();
                                      return (
                                        (function (t, r) {
                                          for (var e = 0; e < t.zzk2; e++)
                                            for (var o = 0; o < t.zzj2; o++)
                                              t.set(e, o, t.get(e, o) / r[e]);
                                        })(this, e),
                                        this
                                      );
                                    case "zz23":
                                      if (void 0 === e)
                                        e = (function (t) {
                                          for (
                                            var r = [], e = 0;
                                            e < t.zzj2;
                                            e++
                                          ) {
                                            for (
                                              var o = 0, n = 0;
                                              n < t.zzk2;
                                              n++
                                            )
                                              o +=
                                                Math.pow(t.get(n, e), 2) /
                                                (t.zzk2 - 1);
                                            r.push(Math.sqrt(o));
                                          }
                                          return r;
                                        })(this);
                                      else if (!Array.isArray(e))
                                        throw new Error();
                                      return (
                                        (function (t, r) {
                                          for (var e = 0; e < t.zzk2; e++)
                                            for (var o = 0; o < t.zzj2; o++)
                                              t.set(e, o, t.get(e, o) / r[o]);
                                        })(this, e),
                                        this
                                      );
                                    case void 0:
                                      if (void 0 === e)
                                        e = (function (t) {
                                          for (
                                            var r = t.zzC1 - 1, e = 0, o = 0;
                                            o < t.zzj2;
                                            o++
                                          )
                                            for (var n = 0; n < t.zzk2; n++)
                                              e += Math.pow(t.get(n, o), 2) / r;
                                          return Math.sqrt(e);
                                        })(this);
                                      else if ("number" != typeof e)
                                        throw new Error();
                                      return (
                                        (function (t, r) {
                                          for (var e = 0; e < t.zzk2; e++)
                                            for (var o = 0; o < t.zzj2; o++)
                                              t.set(e, o, t.get(e, o) / r);
                                        })(this, e),
                                        this
                                      );
                                    default:
                                      throw new Error(
                                        "inzyp13 option: ".concat(t)
                                      );
                                  }
                                },
                              },
                              {
                                key: "toString",
                                value: function (t) {
                                  return l(this, t);
                                },
                              },
                              {
                                key: "zzC1",
                                get: function () {
                                  return this.zzk2 * this.zzj2;
                                },
                              },
                            ],
                            [
                              {
                                key: "zzD1",
                                value: function (t, r, e) {
                                  if (t * r !== e.length) throw new Error();
                                  for (var o = new E(t, r), n = 0; n < t; n++)
                                    for (var s = 0; s < r; s++)
                                      o.set(n, s, e[n * r + s]);
                                  return o;
                                },
                              },
                              {
                                key: "zzE1",
                                value: function (t) {
                                  for (
                                    var r = new E(1, t.length), e = 0;
                                    e < t.length;
                                    e++
                                  )
                                    r.set(0, e, t[e]);
                                  return r;
                                },
                              },
                              {
                                key: "zzF1",
                                value: function (t) {
                                  for (
                                    var r = new E(t.length, 1), e = 0;
                                    e < t.length;
                                    e++
                                  )
                                    r.set(e, 0, t[e]);
                                  return r;
                                },
                              },
                              {
                                key: "zzG1",
                                value: function (t, r) {
                                  return new E(t, r);
                                },
                              },
                              {
                                key: "zzH1",
                                value: function (t, r) {
                                  return new E(t, r).zzL(1);
                                },
                              },
                              {
                                key: "rand",
                                value: function (t, r) {
                                  var e =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                      ? arguments[2]
                                      : {};
                                  if ("object" != f(e)) throw new Error();
                                  for (
                                    var o = e.random,
                                      n = void 0 === o ? Math.random : o,
                                      s = new E(t, r),
                                      i = 0;
                                    i < t;
                                    i++
                                  )
                                    for (var a = 0; a < r; a++)
                                      s.set(i, a, n());
                                  return s;
                                },
                              },
                              {
                                key: "zzI1",
                                value: function (t, r) {
                                  var e =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                      ? arguments[2]
                                      : {};
                                  if ("object" != f(e)) throw new Error();
                                  var o = e.min,
                                    n = void 0 === o ? 0 : o,
                                    s = e.max,
                                    i = void 0 === s ? 1e3 : s,
                                    a = e.random,
                                    u = void 0 === a ? Math.random : a;
                                  if (!Number.isInteger(n)) throw new Error();
                                  if (!Number.isInteger(i)) throw new Error();
                                  if (n >= i) throw new Error();
                                  for (
                                    var h = i - n, c = new E(t, r), l = 0;
                                    l < t;
                                    l++
                                  )
                                    for (var v = 0; v < r; v++) {
                                      var m = n + Math.round(u() * h);
                                      c.set(l, v, m);
                                    }
                                  return c;
                                },
                              },
                              {
                                key: "zzJ1",
                                value: function (t, r, e) {
                                  void 0 === r && (r = t),
                                    void 0 === e && (e = 1);
                                  for (
                                    var o = Math.min(t, r),
                                      n = this.zzG1(t, r),
                                      s = 0;
                                    s < o;
                                    s++
                                  )
                                    n.set(s, s, e);
                                  return n;
                                },
                              },
                              {
                                key: "zzo",
                                value: function (t, r, e) {
                                  var o = t.length;
                                  void 0 === r && (r = o),
                                    void 0 === e && (e = r);
                                  for (
                                    var n = Math.min(o, r, e),
                                      s = this.zzG1(r, e),
                                      i = 0;
                                    i < n;
                                    i++
                                  )
                                    s.set(i, i, t[i]);
                                  return s;
                                },
                              },
                              {
                                key: "min",
                                value: function (t, r) {
                                  (t = this.zzL1(t)), (r = this.zzL1(r));
                                  for (
                                    var e = t.zzk2,
                                      o = t.zzj2,
                                      n = new E(e, o),
                                      s = 0;
                                    s < e;
                                    s++
                                  )
                                    for (var i = 0; i < o; i++)
                                      n.set(
                                        s,
                                        i,
                                        Math.min(t.get(s, i), r.get(s, i))
                                      );
                                  return n;
                                },
                              },
                              {
                                key: "max",
                                value: function (t, r) {
                                  (t = this.zzL1(t)), (r = this.zzL1(r));
                                  for (
                                    var e = t.zzk2,
                                      o = t.zzj2,
                                      n = new this(e, o),
                                      s = 0;
                                    s < e;
                                    s++
                                  )
                                    for (var i = 0; i < o; i++)
                                      n.set(
                                        s,
                                        i,
                                        Math.max(t.get(s, i), r.get(s, i))
                                      );
                                  return n;
                                },
                              },
                              {
                                key: "zzL1",
                                value: function (r) {
                                  return t.zzM1(r) ? r : new E(r);
                                },
                              },
                              {
                                key: "zzM1",
                                value: function (t) {
                                  return null != t && "Matrix" === t.klass;
                                },
                              },
                            ]
                          ),
                          t
                        );
                      })();
                      function S(t, r) {
                        return t - r;
                      }
                      (k.prototype.klass = "Matrix"),
                        "undefined" != typeof Symbol &&
                          (k.prototype[Symbol.for("zze3")] = function () {
                            return l(this);
                          }),
                        (k.random = k.rand),
                        (k.randomInt = k.zzI1),
                        (k.zzoonal = k.zzo),
                        (k.prototype.zzoonal = k.prototype.zzo),
                        (k.zzo2 = k.zzJ1),
                        (k.prototype.negate = k.prototype.neg),
                        (k.prototype.zzI3 = k.prototype.zzz);
                      var E = (function (t) {
                        o(e, k);
                        var r = s(e);
                        function e(t, o) {
                          var n;
                          if ((u(this, e), (n = r.call(this)), e.zzM1(t)))
                            return i(n, t.clone());
                          if (Number.isInteger(t) && t >= 0)
                            n.dataFlatten = new Float32Array(o * t);
                          else {
                            if (!Array.isArray(t)) throw new Error();
                            var s = t;
                            if (
                              "number" !=
                              typeof (o = (t = s.length) ? s[0].length : 0)
                            )
                              n.dataFlatten = new Float32Array(s);
                            else {
                              n.dataFlatten = new Float32Array(o * t);
                              for (var a = 0; a < t; a++)
                                for (var h = 0; h < o; h++)
                                  n.dataFlatten[a * o + h] = s[a][h];
                            }
                          }
                          return (n.zzk2 = t), (n.zzj2 = o), i(n);
                        }
                        return (
                          c(e, [
                            {
                              key: "set",
                              value: function (t, r, e) {
                                return (
                                  (this.dataFlatten[t * this.zzj2 + r] = e),
                                  this
                                );
                              },
                            },
                            {
                              key: "get",
                              value: function (t, r) {
                                return this.dataFlatten[t * this.zzj2 + r];
                              },
                            },
                            {
                              key: "zzn3",
                              value: function (t, r, e) {
                                this.dataFlatten[t * this.zzj2 + r] += e;
                              },
                            },
                            {
                              key: "mulComponent",
                              value: function (t, r, e) {
                                this.dataFlatten[t * this.zzj2 + r] *= e;
                              },
                            },
                          ]),
                          e
                        );
                      })();
                      !(function (t, r) {
                        (t.prototype.add = function (t) {
                          return "number" == typeof t
                            ? this.addS(t)
                            : this.addM(t);
                        }),
                          (t.prototype.addS = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) + t);
                            return this;
                          }),
                          (t.prototype.addM = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) + t.get(e, o));
                            return this;
                          }),
                          (t.add = function (t, e) {
                            return new r(t).add(e);
                          }),
                          (t.prototype.sub = function (t) {
                            return "number" == typeof t
                              ? this.subS(t)
                              : this.subM(t);
                          }),
                          (t.prototype.subS = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) - t);
                            return this;
                          }),
                          (t.prototype.subM = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) - t.get(e, o));
                            return this;
                          }),
                          (t.sub = function (t, e) {
                            return new r(t).sub(e);
                          }),
                          (t.prototype.subtract = t.prototype.sub),
                          (t.prototype.subtractS = t.prototype.subS),
                          (t.prototype.subtractM = t.prototype.subM),
                          (t.subtract = t.sub),
                          (t.prototype.zzi3 = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, 0);
                          }),
                          (t.prototype.mul = function (t) {
                            return "number" == typeof t
                              ? this.mulS(t)
                              : this.mulM(t);
                          }),
                          (t.prototype.mulS = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) * t);
                            return this;
                          }),
                          (t.prototype.mulM = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) * t.get(e, o));
                            return this;
                          }),
                          (t.mul = function (t, e) {
                            return new r(t).mul(e);
                          }),
                          (t.prototype.multiply = t.prototype.mul),
                          (t.prototype.multiplyS = t.prototype.mulS),
                          (t.prototype.multiplyM = t.prototype.mulM),
                          (t.multiply = t.mul),
                          (t.prototype.div = function (t) {
                            return "number" == typeof t
                              ? this.divS(t)
                              : this.divM(t);
                          }),
                          (t.prototype.divS = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) / t);
                            return this;
                          }),
                          (t.prototype.divM = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) / t.get(e, o));
                            return this;
                          }),
                          (t.div = function (t, e) {
                            return new r(t).div(e);
                          }),
                          (t.prototype.divide = t.prototype.div),
                          (t.prototype.divideS = t.prototype.divS),
                          (t.prototype.divideM = t.prototype.divM),
                          (t.divide = t.div),
                          (t.prototype.mod = function (t) {
                            return "number" == typeof t
                              ? this.modS(t)
                              : this.modM(t);
                          }),
                          (t.prototype.modS = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) % t);
                            return this;
                          }),
                          (t.prototype.modM = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) % t.get(e, o));
                            return this;
                          }),
                          (t.mod = function (t, e) {
                            return new r(t).mod(e);
                          }),
                          (t.prototype.zzO3 = t.prototype.mod),
                          (t.prototype.zzO3S = t.prototype.modS),
                          (t.prototype.zzO3M = t.prototype.modM),
                          (t.zzO3 = t.mod),
                          (t.prototype.and = function (t) {
                            return "number" == typeof t
                              ? this.andS(t)
                              : this.andM(t);
                          }),
                          (t.prototype.andS = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) & t);
                            return this;
                          }),
                          (t.prototype.andM = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) & t.get(e, o));
                            return this;
                          }),
                          (t.and = function (t, e) {
                            return new r(t).and(e);
                          }),
                          (t.prototype.or = function (t) {
                            return "number" == typeof t
                              ? this.orS(t)
                              : this.orM(t);
                          }),
                          (t.prototype.orS = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) | t);
                            return this;
                          }),
                          (t.prototype.orM = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) | t.get(e, o));
                            return this;
                          }),
                          (t.or = function (t, e) {
                            return new r(t).or(e);
                          }),
                          (t.prototype.xor = function (t) {
                            return "number" == typeof t
                              ? this.xorS(t)
                              : this.xorM(t);
                          }),
                          (t.prototype.xorS = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) ^ t);
                            return this;
                          }),
                          (t.prototype.xorM = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) ^ t.get(e, o));
                            return this;
                          }),
                          (t.xor = function (t, e) {
                            return new r(t).xor(e);
                          }),
                          (t.prototype.zzQ3 = function (t) {
                            return "number" == typeof t
                              ? this.zzQ3S(t)
                              : this.zzQ3M(t);
                          }),
                          (t.prototype.zzQ3S = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) << t);
                            return this;
                          }),
                          (t.prototype.zzQ3M = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) << t.get(e, o));
                            return this;
                          }),
                          (t.zzQ3 = function (t, e) {
                            return new r(t).zzQ3(e);
                          }),
                          (t.prototype.zzJ3 = function (t) {
                            return "number" == typeof t
                              ? this.zzJ3S(t)
                              : this.zzJ3M(t);
                          }),
                          (t.prototype.zzJ3S = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) >> t);
                            return this;
                          }),
                          (t.prototype.zzJ3M = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) >> t.get(e, o));
                            return this;
                          }),
                          (t.zzJ3 = function (t, e) {
                            return new r(t).zzJ3(e);
                          }),
                          (t.prototype.zzL3 = function (t) {
                            return "number" == typeof t
                              ? this.zzL3S(t)
                              : this.zzL3M(t);
                          }),
                          (t.prototype.zzL3S = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, this.get(r, e) >>> t);
                            return this;
                          }),
                          (t.prototype.zzL3M = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(e, o, this.get(e, o) >>> t.get(e, o));
                            return this;
                          }),
                          (t.zzL3 = function (t, e) {
                            return new r(t).zzL3(e);
                          }),
                          (t.prototype.zzK3 = t.prototype.zzL3),
                          (t.prototype.zzK3S = t.prototype.zzL3S),
                          (t.prototype.zzK3M = t.prototype.zzL3M),
                          (t.zzK3 = t.zzL3),
                          (t.prototype.not = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, ~this.get(t, r));
                            return this;
                          }),
                          (t.not = function (t) {
                            return new r(t).not();
                          }),
                          (t.prototype.abs = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.abs(this.get(t, r)));
                            return this;
                          }),
                          (t.abs = function (t) {
                            return new r(t).abs();
                          }),
                          (t.prototype.acos = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.acos(this.get(t, r)));
                            return this;
                          }),
                          (t.acos = function (t) {
                            return new r(t).acos();
                          }),
                          (t.prototype.zzM3 = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.zzM3(this.get(t, r)));
                            return this;
                          }),
                          (t.zzM3 = function (t) {
                            return new r(t).zzM3();
                          }),
                          (t.prototype.asin = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.asin(this.get(t, r)));
                            return this;
                          }),
                          (t.asin = function (t) {
                            return new r(t).asin();
                          }),
                          (t.prototype.zzN3 = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.zzN3(this.get(t, r)));
                            return this;
                          }),
                          (t.zzN3 = function (t) {
                            return new r(t).zzN3();
                          }),
                          (t.prototype.atan = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.atan(this.get(t, r)));
                            return this;
                          }),
                          (t.atan = function (t) {
                            return new r(t).atan();
                          }),
                          (t.prototype.atanh = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.atanh(this.get(t, r)));
                            return this;
                          }),
                          (t.atanh = function (t) {
                            return new r(t).atanh();
                          }),
                          (t.prototype.cbrt = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.cbrt(this.get(t, r)));
                            return this;
                          }),
                          (t.cbrt = function (t) {
                            return new r(t).cbrt();
                          }),
                          (t.prototype.ceil = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.ceil(this.get(t, r)));
                            return this;
                          }),
                          (t.ceil = function (t) {
                            return new r(t).ceil();
                          }),
                          (t.prototype.clz32 = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.clz32(this.get(t, r)));
                            return this;
                          }),
                          (t.clz32 = function (t) {
                            return new r(t).clz32();
                          }),
                          (t.prototype.cos = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.cos(this.get(t, r)));
                            return this;
                          }),
                          (t.cos = function (t) {
                            return new r(t).cos();
                          }),
                          (t.prototype.cosh = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.cosh(this.get(t, r)));
                            return this;
                          }),
                          (t.cosh = function (t) {
                            return new r(t).cosh();
                          }),
                          (t.prototype.exp = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.exp(this.get(t, r)));
                            return this;
                          }),
                          (t.exp = function (t) {
                            return new r(t).exp();
                          }),
                          (t.prototype.expm1 = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.expm1(this.get(t, r)));
                            return this;
                          }),
                          (t.expm1 = function (t) {
                            return new r(t).expm1();
                          }),
                          (t.prototype.floor = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.floor(this.get(t, r)));
                            return this;
                          }),
                          (t.floor = function (t) {
                            return new r(t).floor();
                          }),
                          (t.prototype.fround = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.fround(this.get(t, r)));
                            return this;
                          }),
                          (t.fround = function (t) {
                            return new r(t).fround();
                          }),
                          (t.prototype.log = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.log(this.get(t, r)));
                            return this;
                          }),
                          (t.log = function (t) {
                            return new r(t).log();
                          }),
                          (t.prototype.log1p = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.log1p(this.get(t, r)));
                            return this;
                          }),
                          (t.log1p = function (t) {
                            return new r(t).log1p();
                          }),
                          (t.prototype.log10 = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.log10(this.get(t, r)));
                            return this;
                          }),
                          (t.log10 = function (t) {
                            return new r(t).log10();
                          }),
                          (t.prototype.log2 = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.log2(this.get(t, r)));
                            return this;
                          }),
                          (t.log2 = function (t) {
                            return new r(t).log2();
                          }),
                          (t.prototype.round = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.round(this.get(t, r)));
                            return this;
                          }),
                          (t.round = function (t) {
                            return new r(t).round();
                          }),
                          (t.prototype.sign = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.sign(this.get(t, r)));
                            return this;
                          }),
                          (t.sign = function (t) {
                            return new r(t).sign();
                          }),
                          (t.prototype.sin = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.sin(this.get(t, r)));
                            return this;
                          }),
                          (t.sin = function (t) {
                            return new r(t).sin();
                          }),
                          (t.prototype.sinh = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.sinh(this.get(t, r)));
                            return this;
                          }),
                          (t.sinh = function (t) {
                            return new r(t).sinh();
                          }),
                          (t.prototype.sqrt = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.sqrt(this.get(t, r)));
                            return this;
                          }),
                          (t.sqrt = function (t) {
                            return new r(t).sqrt();
                          }),
                          (t.prototype.tan = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.tan(this.get(t, r)));
                            return this;
                          }),
                          (t.tan = function (t) {
                            return new r(t).tan();
                          }),
                          (t.prototype.tanh = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.tanh(this.get(t, r)));
                            return this;
                          }),
                          (t.tanh = function (t) {
                            return new r(t).tanh();
                          }),
                          (t.prototype.trunc = function () {
                            for (var t = 0; t < this.zzk2; t++)
                              for (var r = 0; r < this.zzj2; r++)
                                this.set(t, r, Math.trunc(this.get(t, r)));
                            return this;
                          }),
                          (t.trunc = function (t) {
                            return new r(t).trunc();
                          }),
                          (t.pow = function (t, e) {
                            return new r(t).pow(e);
                          }),
                          (t.prototype.pow = function (t) {
                            return "number" == typeof t
                              ? this.powS(t)
                              : this.powM(t);
                          }),
                          (t.prototype.powS = function (t) {
                            for (var r = 0; r < this.zzk2; r++)
                              for (var e = 0; e < this.zzj2; e++)
                                this.set(r, e, Math.pow(this.get(r, e), t));
                            return this;
                          }),
                          (t.prototype.powM = function (t) {
                            if (
                              ((t = r.zzL1(t)),
                              this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2)
                            )
                              throw new Error();
                            for (var e = 0; e < this.zzk2; e++)
                              for (var o = 0; o < this.zzj2; o++)
                                this.set(
                                  e,
                                  o,
                                  Math.pow(this.get(e, o), t.get(e, o))
                                );
                            return this;
                          });
                      })(k, E);
                      var R = (function (t) {
                        o(e, k);
                        var r = s(e);
                        function e(t) {
                          var o;
                          u(this, e),
                            ((o = r.call(this)).zzk2 = t.length),
                            (o.zzj2 = t[0].length),
                            (o.dataFlatten = new Float32Array(o.zzk2 * o.zzj2));
                          for (var n = 0; n < o.zzk2; n++)
                            for (var s = 0; s < o.zzj2; s++)
                              o.dataFlatten[n * o.zzj2 + s] = t[n][s];
                          return o;
                        }
                        return (
                          c(e, [
                            {
                              key: "set",
                              value: function (t, r, e) {
                                return (
                                  (this.dataFlatten[t * this.zzj2 + r] = e),
                                  this
                                );
                              },
                            },
                            {
                              key: "get",
                              value: function (t, r) {
                                return this.dataFlatten[t * this.zzj2 + r];
                              },
                            },
                          ]),
                          e
                        );
                      })();
                      function T(t, r) {
                        var e = 0;
                        return Math.abs(t) > Math.abs(r)
                          ? ((e = r / t), Math.abs(t) * Math.sqrt(1 + e * e))
                          : 0 !== r
                          ? ((e = t / r), Math.abs(r) * Math.sqrt(1 + e * e))
                          : 0;
                      }
                      var A = (function () {
                          function t(r) {
                            u(this, t);
                            var e = (r = R.zzL1(r)).zzk2,
                              o = r.zzj2;
                            (this.QR = r.clone()),
                              (this.X = r.clone()),
                              (this.Rzzo = new Float32Array(o)),
                              (this.m = e),
                              (this.n = o),
                              this.update(r);
                          }
                          return (
                            c(t, [
                              {
                                key: "update",
                                value: function (t) {
                                  var r,
                                    e,
                                    o,
                                    n,
                                    s = this.QR,
                                    i = this.m,
                                    a = this.n,
                                    u = this.Rzzo;
                                  for (s.copy(t), o = 0; o < a; o++) {
                                    var h = 0;
                                    for (r = o; r < i; r++)
                                      h = T(h, s.get(r, o));
                                    if (0 !== h) {
                                      for (
                                        s.get(o, o) < 0 && (h = -h), r = o;
                                        r < i;
                                        r++
                                      )
                                        s.set(r, o, s.get(r, o) / h);
                                      for (
                                        s.set(o, o, s.get(o, o) + 1), e = o + 1;
                                        e < a;
                                        e++
                                      ) {
                                        for (n = 0, r = o; r < i; r++)
                                          n += s.get(r, o) * s.get(r, e);
                                        for (
                                          n = -n / s.get(o, o), r = o;
                                          r < i;
                                          r++
                                        )
                                          s.set(
                                            r,
                                            e,
                                            s.get(r, e) + n * s.get(r, o)
                                          );
                                      }
                                    }
                                    u[o] = -h;
                                  }
                                },
                              },
                              {
                                key: "solve",
                                value: function (t) {
                                  var r = this.QR,
                                    e = r.zzk2,
                                    o = t.zzj2,
                                    n = this.X;
                                  n.copy(t);
                                  var s,
                                    i,
                                    a,
                                    u,
                                    h = r.zzj2;
                                  for (a = 0; a < h; a++)
                                    for (i = 0; i < o; i++) {
                                      for (u = 0, s = a; s < e; s++)
                                        u += r.get(s, a) * n.get(s, i);
                                      for (
                                        u = -u / r.get(a, a), s = a;
                                        s < e;
                                        s++
                                      )
                                        n.set(
                                          s,
                                          i,
                                          n.get(s, i) + u * r.get(s, a)
                                        );
                                    }
                                  for (a = h - 1; a >= 0; a--) {
                                    for (i = 0; i < o; i++)
                                      n.set(a, i, n.get(a, i) / this.Rzzo[a]);
                                    for (s = 0; s < a; s++)
                                      for (i = 0; i < o; i++)
                                        n.set(
                                          s,
                                          i,
                                          n.get(s, i) -
                                            n.get(a, i) * r.get(s, a)
                                        );
                                  }
                                  return n.zz31(0, h - 1, 0, o - 1);
                                },
                              },
                              {
                                key: "zzY1",
                                value: function () {
                                  for (var t = this.QR.zzj2, r = 0; r < t; r++)
                                    if (0 === this.Rzzo[r]) return !1;
                                  return !0;
                                },
                              },
                              {
                                key: "zzW1",
                                get: function () {
                                  var t,
                                    r,
                                    e = this.QR,
                                    o = e.zzj2,
                                    n = new E(o, o);
                                  for (t = 0; t < o; t++)
                                    for (r = 0; r < o; r++)
                                      t < r
                                        ? n.set(t, r, e.get(t, r))
                                        : t === r
                                        ? n.set(t, r, this.Rzzo[t])
                                        : n.set(t, r, 0);
                                  return n;
                                },
                              },
                              {
                                key: "zzZ1",
                                get: function () {
                                  var t,
                                    r,
                                    e,
                                    o,
                                    n = this.QR,
                                    s = n.zzk2,
                                    i = n.zzj2,
                                    a = new E(s, i);
                                  for (e = i - 1; e >= 0; e--) {
                                    for (t = 0; t < s; t++) a.set(t, e, 0);
                                    for (a.set(e, e, 1), r = e; r < i; r++)
                                      if (0 !== n.get(e, e)) {
                                        for (o = 0, t = e; t < s; t++)
                                          o += n.get(t, e) * a.get(t, r);
                                        for (
                                          o = -o / n.get(e, e), t = e;
                                          t < s;
                                          t++
                                        )
                                          a.set(
                                            t,
                                            r,
                                            a.get(t, r) + o * n.get(t, e)
                                          );
                                      }
                                  }
                                  return a;
                                },
                              },
                            ]),
                            t
                          );
                        })(),
                        D = (function () {
                          function t(r, e) {
                            u(this, t);
                            var o = r.zzk2,
                              n = r.zzj2,
                              s = Boolean(e.zzx3),
                              i = Boolean(e.zzZ2),
                              a = r.clone(),
                              h = Math.min(o + 1, n),
                              c = Math.min(o, n),
                              f = new Float32Array(h),
                              l = new E(o, c),
                              v = new E(n, n),
                              m = new Float32Array(n),
                              g = new Float32Array(o),
                              w = new Float32Array(h),
                              p = E.zzG1(h, h),
                              y = E.zzG1(v.zzk2, l.zzk2),
                              d = new E(v.zzk2, h),
                              b = new E(v.zzk2, l.zzk2);
                            (this.m = o),
                              (this.n = n),
                              (this.ni = h),
                              (this.nu = c),
                              (this.s = f),
                              (this.si = w),
                              (this.work = g),
                              (this.e = m),
                              (this.U = l),
                              (this.V = v),
                              (this.wantu = s),
                              (this.wantv = i),
                              (this.a = a),
                              (this.Ls = p),
                              (this.VLU = y),
                              (this.X = d),
                              (this.Y = b),
                              this.compute();
                          }
                          return (
                            c(t, [
                              {
                                key: "zz24",
                                value: function (t) {
                                  this.a.copy(t),
                                    this.U.reset(),
                                    this.V.reset(),
                                    this.compute();
                                },
                              },
                              {
                                key: "compute",
                                value: function () {
                                  for (
                                    var t = this.m,
                                      r = this.n,
                                      e = this.ni,
                                      o = this.nu,
                                      n = this.s,
                                      s = this.si,
                                      i = this.work,
                                      a = this.e,
                                      u = this.U,
                                      h = this.V,
                                      c = this.wantu,
                                      f = this.wantv,
                                      l = this.a,
                                      v = 0;
                                    v < e;
                                    v++
                                  )
                                    s[v] = v;
                                  for (
                                    var m = Math.min(t - 1, r),
                                      g = Math.max(0, Math.min(r - 2, t)),
                                      w = Math.max(m, g),
                                      p = 0;
                                    p < w;
                                    p++
                                  ) {
                                    if (p < m) {
                                      n[p] = 0;
                                      for (var y = p; y < t; y++)
                                        n[p] = T(n[p], l.get(y, p));
                                      if (0 !== n[p]) {
                                        l.get(p, p) < 0 && (n[p] = -n[p]);
                                        for (var d = p; d < t; d++)
                                          l.set(d, p, l.get(d, p) / n[p]);
                                        l.set(p, p, l.get(p, p) + 1);
                                      }
                                      n[p] = -n[p];
                                    }
                                    for (var b = p + 1; b < r; b++) {
                                      if (p < m && 0 !== n[p]) {
                                        for (var M = 0, x = p; x < t; x++)
                                          M += l.get(x, p) * l.get(x, b);
                                        M = -M / l.get(p, p);
                                        for (var k = p; k < t; k++)
                                          l.set(
                                            k,
                                            b,
                                            l.get(k, b) + M * l.get(k, p)
                                          );
                                      }
                                      a[b] = l.get(p, b);
                                    }
                                    if (c && p < m)
                                      for (var S = p; S < t; S++)
                                        u.set(S, p, l.get(S, p));
                                    if (p < g) {
                                      a[p] = 0;
                                      for (var E = p + 1; E < r; E++)
                                        a[p] = T(a[p], a[E]);
                                      if (0 !== a[p]) {
                                        a[p + 1] < 0 && (a[p] = 0 - a[p]);
                                        for (var R = p + 1; R < r; R++)
                                          a[R] /= a[p];
                                        a[p + 1] += 1;
                                      }
                                      if (
                                        ((a[p] = -a[p]),
                                        p + 1 < t && 0 !== a[p])
                                      ) {
                                        for (var A = p + 1; A < t; A++)
                                          i[A] = 0;
                                        for (var D = p + 1; D < t; D++)
                                          for (var C = p + 1; C < r; C++)
                                            i[D] += a[C] * l.get(D, C);
                                        for (var I = p + 1; I < r; I++)
                                          for (
                                            var N = -a[I] / a[p + 1], O = p + 1;
                                            O < t;
                                            O++
                                          )
                                            l.set(O, I, l.get(O, I) + N * i[O]);
                                      }
                                      if (f)
                                        for (var F = p + 1; F < r; F++)
                                          h.set(F, p, a[F]);
                                    }
                                  }
                                  var P = Math.min(r, t + 1);
                                  if (
                                    (m < r && (n[m] = l.get(m, m)),
                                    t < P && (n[P - 1] = 0),
                                    g + 1 < P && (a[g] = l.get(g, P - 1)),
                                    (a[P - 1] = 0),
                                    c)
                                  ) {
                                    for (var V = m; V < o; V++) {
                                      for (var j = 0; j < t; j++)
                                        u.set(j, V, 0);
                                      u.set(V, V, 1);
                                    }
                                    for (var q = m - 1; q >= 0; q--)
                                      if (0 !== n[q]) {
                                        for (var z = q + 1; z < o; z++) {
                                          for (var Q = 0, L = q; L < t; L++)
                                            Q += u.get(L, q) * u.get(L, z);
                                          Q = -Q / u.get(q, q);
                                          for (var B = q; B < t; B++)
                                            u.set(
                                              B,
                                              z,
                                              u.get(B, z) + Q * u.get(B, q)
                                            );
                                        }
                                        for (var U = q; U < t; U++)
                                          u.set(U, q, -u.get(U, q));
                                        u.set(q, q, 1 + u.get(q, q));
                                        for (var _ = 0; _ < q - 1; _++)
                                          u.set(_, q, 0);
                                      } else {
                                        for (var G = 0; G < t; G++)
                                          u.set(G, q, 0);
                                        u.set(q, q, 1);
                                      }
                                  }
                                  if (f)
                                    for (var W = r - 1; W >= 0; W--) {
                                      if (W < g && 0 !== a[W])
                                        for (var X = W + 1; X < r; X++) {
                                          for (var Y = 0, J = W + 1; J < r; J++)
                                            Y += h.get(J, W) * h.get(J, X);
                                          Y = -Y / h.get(W + 1, W);
                                          for (var K = W + 1; K < r; K++)
                                            h.set(
                                              K,
                                              X,
                                              h.get(K, X) + Y * h.get(K, W)
                                            );
                                        }
                                      for (var H = 0; H < r; H++)
                                        h.set(H, W, 0);
                                      h.set(W, W, 1);
                                    }
                                  for (
                                    var Z = P - 1, $ = Number.EPSILON;
                                    P > 0;

                                  ) {
                                    var tt = void 0,
                                      rt = void 0;
                                    for (
                                      tt = P - 2;
                                      tt >= -1 && -1 !== tt;
                                      tt--
                                    ) {
                                      var et =
                                        Number.MIN_VALUE +
                                        $ *
                                          Math.abs(n[tt] + Math.abs(n[tt + 1]));
                                      if (
                                        Math.abs(a[tt]) <= et ||
                                        Number.isNaN(a[tt])
                                      ) {
                                        a[tt] = 0;
                                        break;
                                      }
                                    }
                                    if (tt === P - 2) rt = 4;
                                    else {
                                      var ot = void 0;
                                      for (
                                        ot = P - 1;
                                        ot >= tt && ot !== tt;
                                        ot--
                                      ) {
                                        var nt =
                                          (ot !== P ? Math.abs(a[ot]) : 0) +
                                          (ot !== tt + 1
                                            ? Math.abs(a[ot - 1])
                                            : 0);
                                        if (Math.abs(n[ot]) <= $ * nt) {
                                          n[ot] = 0;
                                          break;
                                        }
                                      }
                                      ot === tt
                                        ? (rt = 3)
                                        : ot === P - 1
                                        ? (rt = 1)
                                        : ((rt = 2), (tt = ot));
                                    }
                                    switch ((tt++, rt)) {
                                      case 1:
                                        var st = a[P - 2];
                                        a[P - 2] = 0;
                                        for (var it = P - 2; it >= tt; it--) {
                                          var at = T(n[it], st),
                                            ut = n[it] / at,
                                            ht = st / at;
                                          if (
                                            ((n[it] = at),
                                            it !== tt &&
                                              ((st = -ht * a[it - 1]),
                                              (a[it - 1] = ut * a[it - 1])),
                                            f)
                                          )
                                            for (var ct = 0; ct < r; ct++)
                                              (at =
                                                ut * h.get(ct, it) +
                                                ht * h.get(ct, P - 1)),
                                                h.set(
                                                  ct,
                                                  P - 1,
                                                  -ht * h.get(ct, it) +
                                                    ut * h.get(ct, P - 1)
                                                ),
                                                h.set(ct, it, at);
                                        }
                                        break;
                                      case 2:
                                        var ft = a[tt - 1];
                                        a[tt - 1] = 0;
                                        for (var lt = tt; lt < P; lt++) {
                                          var vt = T(n[lt], ft),
                                            mt = n[lt] / vt,
                                            gt = ft / vt;
                                          if (
                                            ((n[lt] = vt),
                                            (ft = -gt * a[lt]),
                                            (a[lt] = mt * a[lt]),
                                            c)
                                          )
                                            for (var wt = 0; wt < t; wt++)
                                              (vt =
                                                mt * u.get(wt, lt) +
                                                gt * u.get(wt, tt - 1)),
                                                u.set(
                                                  wt,
                                                  tt - 1,
                                                  -gt * u.get(wt, lt) +
                                                    mt * u.get(wt, tt - 1)
                                                ),
                                                u.set(wt, lt, vt);
                                        }
                                        break;
                                      case 3:
                                        var pt = Math.max(
                                            Math.abs(n[P - 1]),
                                            Math.abs(n[P - 2]),
                                            Math.abs(a[P - 2]),
                                            Math.abs(n[tt]),
                                            Math.abs(a[tt])
                                          ),
                                          yt = n[P - 1] / pt,
                                          dt = n[P - 2] / pt,
                                          bt = a[P - 2] / pt,
                                          Mt = n[tt] / pt,
                                          xt = a[tt] / pt,
                                          kt =
                                            ((dt + yt) * (dt - yt) + bt * bt) /
                                            2,
                                          St = yt * bt * (yt * bt),
                                          Et = 0;
                                        (0 === kt && 0 === St) ||
                                          (Et =
                                            St /
                                            (kt +
                                              (Et =
                                                kt < 0
                                                  ? 0 - Math.sqrt(kt * kt + St)
                                                  : Math.sqrt(kt * kt + St))));
                                        for (
                                          var Rt = (Mt + yt) * (Mt - yt) + Et,
                                            Tt = Mt * xt,
                                            At = tt;
                                          At < P - 1;
                                          At++
                                        ) {
                                          var Dt = T(Rt, Tt);
                                          0 === Dt && (Dt = Number.MIN_VALUE);
                                          var Ct = Rt / Dt,
                                            It = Tt / Dt;
                                          if (
                                            (At !== tt && (a[At - 1] = Dt),
                                            (Rt = Ct * n[At] + It * a[At]),
                                            (a[At] = Ct * a[At] - It * n[At]),
                                            (Tt = It * n[At + 1]),
                                            (n[At + 1] = Ct * n[At + 1]),
                                            f)
                                          )
                                            for (var Nt = 0; Nt < r; Nt++)
                                              (Dt =
                                                Ct * h.get(Nt, At) +
                                                It * h.get(Nt, At + 1)),
                                                h.set(
                                                  Nt,
                                                  At + 1,
                                                  -It * h.get(Nt, At) +
                                                    Ct * h.get(Nt, At + 1)
                                                ),
                                                h.set(Nt, At, Dt);
                                          if (
                                            (0 === (Dt = T(Rt, Tt)) &&
                                              (Dt = Number.MIN_VALUE),
                                            (Ct = Rt / Dt),
                                            (It = Tt / Dt),
                                            (n[At] = Dt),
                                            (Rt = Ct * a[At] + It * n[At + 1]),
                                            (n[At + 1] =
                                              -It * a[At] + Ct * n[At + 1]),
                                            (Tt = It * a[At + 1]),
                                            (a[At + 1] = Ct * a[At + 1]),
                                            c && At < t - 1)
                                          )
                                            for (var Ot = 0; Ot < t; Ot++)
                                              (Dt =
                                                Ct * u.get(Ot, At) +
                                                It * u.get(Ot, At + 1)),
                                                u.set(
                                                  Ot,
                                                  At + 1,
                                                  -It * u.get(Ot, At) +
                                                    Ct * u.get(Ot, At + 1)
                                                ),
                                                u.set(Ot, At, Dt);
                                        }
                                        a[P - 2] = Rt;
                                        break;
                                      case 4:
                                        if (
                                          n[tt] <= 0 &&
                                          ((n[tt] = n[tt] < 0 ? -n[tt] : 0), f)
                                        )
                                          for (var Ft = 0; Ft <= Z; Ft++)
                                            h.set(Ft, tt, -h.get(Ft, tt));
                                        for (
                                          ;
                                          tt < Z && !(n[tt] >= n[tt + 1]);

                                        ) {
                                          var Pt = n[tt];
                                          if (
                                            ((n[tt] = n[tt + 1]),
                                            (n[tt + 1] = Pt),
                                            f && tt < r - 1)
                                          )
                                            for (var Vt = 0; Vt < r; Vt++)
                                              (Pt = h.get(Vt, tt + 1)),
                                                h.set(
                                                  Vt,
                                                  tt + 1,
                                                  h.get(Vt, tt)
                                                ),
                                                h.set(Vt, tt, Pt);
                                          if (c && tt < t - 1)
                                            for (var jt = 0; jt < t; jt++)
                                              (Pt = u.get(jt, tt + 1)),
                                                u.set(
                                                  jt,
                                                  tt + 1,
                                                  u.get(jt, tt)
                                                ),
                                                u.set(jt, tt, Pt);
                                          tt++;
                                        }
                                        P--;
                                    }
                                  }
                                },
                              },
                              {
                                key: "solve",
                                value: function (t) {
                                  for (
                                    var r = t,
                                      e = this.zzf1,
                                      o = this.s.length,
                                      n = this.Ls,
                                      s = this.VLU,
                                      i = 0;
                                    i < o;
                                    i++
                                  )
                                    Math.abs(this.s[i]) <= e
                                      ? n.set(i, i, 0)
                                      : n.set(i, i, 1 / this.s[i]);
                                  for (
                                    var a = this.U,
                                      u = this.zzh1,
                                      h = u.zzr(n),
                                      c = u.zzk2,
                                      f = a.zzk2,
                                      l = 0;
                                    l < c;
                                    l++
                                  )
                                    for (var v = 0; v < f; v++) {
                                      for (var m = 0, g = 0; g < o; g++)
                                        m += h.get(l, g) * a.get(v, g);
                                      s.set(l, v, m);
                                    }
                                  return s.zzr(r);
                                },
                              },
                              {
                                key: "zza1",
                                value: function (t) {
                                  return this.solve(E.zzo(t));
                                },
                              },
                              {
                                key: "inverse",
                                value: function () {
                                  for (
                                    var t = this.V,
                                      r = this.zzf1,
                                      e = t.zzk2,
                                      o = t.zzj2,
                                      n = this.X,
                                      s = this.Y,
                                      i = 0;
                                    i < e;
                                    i++
                                  )
                                    for (var a = 0; a < o; a++)
                                      Math.abs(this.s[a]) > r &&
                                        n.set(i, a, t.get(i, a) / this.s[a]);
                                  for (
                                    var u = this.U,
                                      h = u.zzk2,
                                      c = u.zzj2,
                                      f = 0;
                                    f < e;
                                    f++
                                  )
                                    for (var l = 0; l < h; l++) {
                                      for (var v = 0, m = 0; m < c; m++)
                                        v += n.get(f, m) * u.get(l, m);
                                      s.set(f, l, v);
                                    }
                                  return s;
                                },
                              },
                              {
                                key: "zzb1",
                                get: function () {
                                  return (
                                    this.s[0] /
                                    this.s[Math.min(this.m, this.n) - 1]
                                  );
                                },
                              },
                              {
                                key: "zzp2",
                                get: function () {
                                  return this.s[0];
                                },
                              },
                              {
                                key: "zzd1",
                                get: function () {
                                  for (
                                    var t =
                                        Math.max(this.m, this.n) *
                                        this.s[0] *
                                        Number.EPSILON,
                                      r = 0,
                                      e = this.s,
                                      o = 0,
                                      n = e.length;
                                    o < n;
                                    o++
                                  )
                                    e[o] > t && r++;
                                  return r;
                                },
                              },
                              {
                                key: "zzoonal",
                                get: function () {
                                  return Array.from(this.s);
                                },
                              },
                              {
                                key: "zzf1",
                                get: function () {
                                  return (
                                    (Number.EPSILON / 2) *
                                    Math.max(this.m, this.n) *
                                    this.s[0]
                                  );
                                },
                              },
                              {
                                key: "zzg1",
                                get: function () {
                                  return this.U;
                                },
                              },
                              {
                                key: "zzh1",
                                get: function () {
                                  return this.V;
                                },
                              },
                              {
                                key: "zzoonalMatrix",
                                get: function () {
                                  return E.zzo(this.s);
                                },
                              },
                            ]),
                            t
                          );
                        })(),
                        C = [],
                        I = function (t) {
                          var r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : { zzj3: -1 },
                            e = r.zzj3;
                          if (-1 !== e && C[e]) {
                            var o = C[e];
                            return o.zz24(t), o;
                          }
                          var n = new D(
                            t,
                            Object.assign({ zzx3: !0, zzZ2: !0 }, r)
                          );
                          return -1 !== e && (C[e] = n), n;
                        };
                      function N(t, r) {
                        var e =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2],
                          o = arguments.length > 3 ? arguments[3] : void 0;
                        return e
                          ? I(t, { zzj3: o }).solve(r)
                          : new A(t).solve(r);
                      }
                      var O = (function (t) {
                          o(e, k);
                          var r = s(e);
                          function e(t, o, n) {
                            var s;
                            return (
                              u(this, e),
                              ((s = r.call(this)).matrix = t),
                              (s.zzk2 = o),
                              (s.zzj2 = n),
                              s
                            );
                          }
                          return e;
                        })(),
                        F = (function (t) {
                          o(e, O);
                          var r = s(e);
                          function e(t, o, n) {
                            var s;
                            u(this, e);
                            var i = y(t, o, n);
                            return (
                              ((s = r.call(
                                this,
                                t,
                                i.row.length,
                                i.zz23.length
                              )).zzy3 = i.row),
                              (s.zzl2 = i.zz23),
                              s
                            );
                          }
                          return (
                            c(e, [
                              {
                                key: "set",
                                value: function (t, r, e) {
                                  return (
                                    this.matrix.set(
                                      this.zzy3[t],
                                      this.zzl2[r],
                                      e
                                    ),
                                    this
                                  );
                                },
                              },
                              {
                                key: "get",
                                value: function (t, r) {
                                  return this.matrix.get(
                                    this.zzy3[t],
                                    this.zzl2[r]
                                  );
                                },
                              },
                            ]),
                            e
                          );
                        })();
                      (t.Matrix = E),
                        (t.QR = A),
                        (t.zzT2 = A),
                        (t.zz92 = I),
                        (t.default = E),
                        (t.zzU1 = function t(r) {
                          if (0 === r.zzj2) return 1;
                          var e, o, n, s, i, a;
                          if (2 === r.zzj2)
                            return (
                              (e = r.get(0, 0)),
                              (o = r.get(0, 1)),
                              (n = r.get(1, 0)),
                              e * r.get(1, 1) - o * n
                            );
                          if (3 === r.zzj2)
                            return (
                              (s = new F(r, [1, 2], [1, 2])),
                              (i = new F(r, [1, 2], [0, 2])),
                              (a = new F(r, [1, 2], [0, 1])),
                              (e = r.get(0, 0)),
                              (o = r.get(0, 1)),
                              (n = r.get(0, 2)),
                              e * t(s) - o * t(i) + n * t(a)
                            );
                          throw new Error();
                        }),
                        (t.inverse2 = function (t) {
                          var r =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            e = arguments.length > 2 ? arguments[2] : void 0;
                          return r
                            ? I(t, { zzj3: e }).inverse()
                            : N(t, E.zzJ1(t.zzk2));
                        }),
                        (t.zzp3 = N),
                        Object.defineProperty(t, "zzB", { value: !0 });
                    }),
                    "object" == (void 0 === e ? "undefined" : f(e)) &&
                    void 0 !== r
                      ? v(e)
                      : v(
                          ((l = falseThis ? globalThis : l || self).mlMatrix =
                            {})
                        );
                },
                {},
              ],
            },
            {},
            [2]
          )(2);
        });
        Cb = window.zyp;
        a.callbackReady && (R.Sa = a.callbackReady);
        a.callbackTrack && (R.dc = a.callbackTrack);
        "undefined" !== typeof a.animateDelay && (R.pb = a.animateDelay);
        "undefined" !== typeof a.NNs && (R.lb = a.NNs);
        "undefined" !== typeof a.NNsPaths && (R.mb = a.NNsPaths);
        "undefined" !== typeof a.followZRot && (R.ta = a.followZRot);
        "undefined" !== typeof a.freeZRot && (R.mc = a.freeZRot);
        "undefined" !== typeof a.isTrackingEnabled &&
          (R.vc = a.isTrackingEnabled ? !0 : !1);
        X = Object.create(sa.xg);
        a.scanSettings && Object.assign(X, a.scanSettings);
        ma = Object.create(sa.Ng);
        a.stabilizationSettings && Object.assign(ma, a.stabilizationSettings);
        var b = 1;
        "undefined" !== typeof a.maxHandsDetected &&
          (b = Math.max(1, a.maxHandsDetected));
        if (b > sa.mg) return Qa("MAXHANDS_TOOHIGH"), !1;
        ba.A({
          T: b,
          fe: X.multiDetectionMaxOverlap,
          kc: X.multiDetectionOverlapScaleXY,
          ve: X.multiDetectionSearchSlotsRate,
          Vd: function (d) {
            return d.isDetected;
          },
        });
        if (a.canvas) R.aa = a.canvas;
        else {
          if (!a.canvasId) return Qa("NO_CANVASID"), !1;
          R.aa = document.getElementById(a.canvasId);
          if (!R.aa) return Qa("INVALID_CANVASID"), !1;
        }
        V.o = R.aa.width;
        V.K = R.aa.height;
        if (!V.o || !V.K) return Qa("INVALID_CANVASDIMENSIONS"), !1;
        V.sb = V.o / V.K;
        Ta.A({ Zd: !1, qb: R.pb });
        va.A({
          Fc: 0,
          n: X.nDetectsPerLoopRange[1] - X.nDetectsPerLoopRange[0] + 1,
          Ac: X.nDetectsPerLoopRange[0],
        });
        0 !== X.nDetectsPerLoop ? va.Uc(X.nDetectsPerLoop) : va.fd();
        a.stabilizationSettings && Object.assign(ma, a.stabilizationSettings);
        a.videoSettings && a.videoSettings.videoElement
          ? $a(a.videoSettings.videoElement, jb)
          : (a.videoSettings && Object.assign(xa, a.videoSettings),
            (D.Jc = a.onWebcamAsk),
            (D.Lc = a.onWebcamGet),
            Ab(function (d) {
              $a(d, jb);
            }));
        V.Gb = Mb.instance({});
        tb =
          X.animateProcessOrder.indexOf("S") <
          X.animateProcessOrder.indexOf("D");
        qb();
        Nb(tc);
        return !0;
      },
      update: function (a) {
        if (!Bb) return Promise.reject("NOT_READY");
        a.scanSettings && gb.set_scanSettings(a.scanSettings);
        a.stabilizationSettings &&
          gb.set_stabilizationSettings(a.stabilizationSettings);
        var b = Promise.resolve();
        if (a.NNsPaths || a.NNs) {
          rb();
          ia = ea.Bc;
          qb();
          na.forEach(function (d) {
            d.model.m();
          });
          na.splice(0);
          for (b = 0; b < ba.na(); ++b)
            (pa[b].detected = 0), (pa.isDetected = !1), (Oa[b].Wa = 0);
          a.NNsPaths ? (R.mb = a.NNsPaths) : a.NNs && (R.lb = a.NNs);
          b = new Promise(function (d) {
            Nb(function (e) {
              Qb(e);
              Ya();
              d();
            });
          });
        }
        return b;
      },
      retry_cameraAccess: function () {
        return new Promise(function (a, b) {
          ia !== ea.error
            ? b("NOT_APPLICABLE")
            : ((ia = ea.Bc),
              Ab(function (d) {
                $a(d, jb);
                a();
              }));
        });
      },
      destroy: function () {
        if (kb) return Promise.reject("ALREADY_DESTROYING");
        fb = null;
        Bb = !1;
        kb = !0;
        Ta.m();
        return new Promise(function (a) {
          gb.toggle_pause(!0, !0)
            .finally(function () {
              kc();
              V.Gb = null;
              ha.Aa = null;
              ha.kb = null;
              D.D = null;
              ia = ea.Nb;
              kb = !1;
              a();
            })
            .catch(function () {});
        });
      },
      toggle_videoStream: function (a) {
        return D.Ib || !D.element
          ? Promise.resolve()
          : Y.Je(D.element, a, D.Ta);
      },
      toggle_pause: function (a, b) {
        if (-1 === [ea.play, ea.pause].indexOf(ia))
          return Promise.reject("NOT_READY");
        b = b ? gb.toggle_videoStream(!a) : Promise.resolve();
        a
          ? rb()
          : b.then(function () {
              Ya();
            });
        return b;
      },
      toggle_tracking: function (a) {
        -1 !== [ea.play, ea.pause].indexOf(ia) && (R.vc = a);
      },
      update_videoSettings: function (a) {
        rb();
        return new Promise(function (b, d) {
          Y.Je(D.element, !1, D.Ta)
            .then(function () {
              Object.assign(xa, a);
              Ab(function (e) {
                $a(e, function () {
                  Va();
                  Ua();
                  Ya();
                  b();
                });
              });
            })
            .catch(d);
        });
      },
      set_animateDelay: function (a) {
        R.pb = a;
        Ta.update({ qb: R.pb });
      },
      resize: function () {
        if (!R || !R.aa) return !1;
        var a = R.aa.width,
          b = R.aa.height;
        if (!zb() && a === V.o && b === V.K) return !1;
        V.o = a;
        V.K = b;
        V.sb = V.o / V.K;
        A.O();
        yb();
        xb();
        Va();
        Ua();
        return !0;
      },
      set_inputTexture: function (a, b, d, e) {
        D.H[0] = b;
        D.H[1] = d;
        D.Wd = e || !1;
        D.D = Z.instance({ width: b, height: d, qc: a });
        D.cb = !0;
        Va();
        Ha.Qd();
        Ua();
      },
      reset_inputTexture: function () {
        D.cb = !1;
        D.D = D.$c;
        zb();
        Va();
        Ua();
      },
      render_video: function () {
        wa.N();
        A.O();
        A.set("s65");
        A.Ce("u41", D.ga);
        c.viewport(0, 0, V.o, V.K);
        D.D.h(0);
        Q.l(!0, !0);
        A.Ce("u41", D.B);
      },
      get_videoDevices: function (a) {
        return Y.Nd(a);
      },
      set_scanSettings: function (a) {
        Object.assign(X, a);
        0 !== X.nDetectsPerLoop ? va.Uc(X.nDetectsPerLoop) : va.fd();
        yb();
        xb();
      },
      set_stabilizationSettings: function (a) {
        Object.assign(ma, a);
      },
      update_videoElement: function (a, b) {
        $a(a, function () {
          Pb();
          Va();
          Ua();
          b && b();
          ia === ea.Ee && Ya();
        });
      },
      capture_image: function (a) {
        return Ha.Gf(a);
      },
      get_LMLabels: function () {
        return Ma.labels;
      },
      get_LM: function () {
        return Ma.oe;
      },
      reset: function () {
        pa.forEach(function (a) {
          Object.assign(a, {
            detected: 0,
            isDetected: !1,
            x: 0,
            y: 0,
            s: 1,
            rz: 0,
          });
        });
        ha.Aa.Ma(ha.Yc);
        ha.kb.Ma(ha.Yc);
        Pa.reset();
      },
      compute_pose: function (a, b, d, e, g) {
        g = Object.assign(
          { rotationDirectionSrc: null, rotationDirectionDst: null },
          g || null
        );
        null === fb &&
          ((Na[0] = d),
          (Na[1] = e),
          (fb = new Cb.zypSolver({
            cameraFocals: Na,
            zyp15: sa.Mg,
            rotationDirectionSrc: g.rotationDirectionSrc,
            rotationDirectionDst: g.rotationDirectionDst,
          })));
        if (Na[0] !== d || Na[1] !== e) (Na[0] = d), (Na[1] = e), fb.zyp14(Na);
        a = fb.solve(a, b, !1);
        return {
          ok: a.zyp13,
          repError: a.repError,
          rotation: a.R,
          translation: a.t,
        };
      },
    };
  return gb;
})();
export default WEBARROCKSHAND;
