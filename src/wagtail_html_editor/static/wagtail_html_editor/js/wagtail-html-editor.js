var tp = Object.defineProperty;
var ip = (i, e, t) => e in i ? tp(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var wn = (i, e, t) => ip(i, typeof e != "symbol" ? e + "" : e, t);
let Ds = [], Cc = [];
(() => {
  let i = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < i.length; e++)
    (e % 2 ? Cc : Ds).push(t = t + i[e]);
})();
function np(i) {
  if (i < 768) return !1;
  for (let e = 0, t = Ds.length; ; ) {
    let n = e + t >> 1;
    if (i < Ds[n]) t = n;
    else if (i >= Cc[n]) e = n + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function Hl(i) {
  return i >= 127462 && i <= 127487;
}
const Kl = 8205;
function rp(i, e, t = !0, n = !0) {
  return (t ? Ac : sp)(i, e, n);
}
function Ac(i, e, t) {
  if (e == i.length) return e;
  e && Xc(i.charCodeAt(e)) && Rc(i.charCodeAt(e - 1)) && e--;
  let n = ns(i, e);
  for (e += Jl(n); e < i.length; ) {
    let r = ns(i, e);
    if (n == Kl || r == Kl || t && np(r))
      e += Jl(r), n = r;
    else if (Hl(r)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && Hl(ns(i, o)); )
        s++, o -= 2;
      if (s % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function sp(i, e, t) {
  for (; e > 0; ) {
    let n = Ac(i, e - 2, t);
    if (n < e) return n;
    e--;
  }
  return 0;
}
function ns(i, e) {
  let t = i.charCodeAt(e);
  if (!Rc(t) || e + 1 == i.length) return t;
  let n = i.charCodeAt(e + 1);
  return Xc(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function Xc(i) {
  return i >= 56320 && i < 57344;
}
function Rc(i) {
  return i >= 55296 && i < 56320;
}
function Jl(i) {
  return i < 65536 ? 1 : 2;
}
class V {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, n) {
    [e, t] = yi(this, e, t);
    let r = [];
    return this.decompose(
      0,
      e,
      r,
      2
      /* Open.To */
    ), n.length && n.decompose(
      0,
      n.length,
      r,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      r,
      1
      /* Open.From */
    ), rt.from(r, this.length - (t - e) + n.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = yi(this, e, t);
    let n = [];
    return this.decompose(e, t, n, 0), rt.from(n, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), r = new Ii(this), s = new Ii(e);
    for (let o = t, l = t; ; ) {
      if (r.next(o), s.next(o), o = 0, r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value)
        return !1;
      if (l += r.value.length, r.done || l >= n)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new Ii(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Mc(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let n;
    if (e == null)
      n = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let r = this.line(e).from;
      n = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new zc(n);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? V.empty : e.length <= 32 ? new ee(e) : rt.from(ee.split(e, []));
  }
}
class ee extends V {
  constructor(e, t = op(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, n, r) {
    for (let s = 0; ; s++) {
      let o = this.text[s], l = r + o.length;
      if ((t ? n : l) >= e)
        return new lp(r, l, n, o);
      r = l + 1, n++;
    }
  }
  decompose(e, t, n, r) {
    let s = e <= 0 && t >= this.length ? this : new ee(ea(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (r & 1) {
      let o = n.pop(), l = Bn(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32)
        n.push(new ee(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        n.push(new ee(l.slice(0, a)), new ee(l.slice(a)));
      }
    } else
      n.push(s);
  }
  replace(e, t, n) {
    if (!(n instanceof ee))
      return super.replace(e, t, n);
    [e, t] = yi(this, e, t);
    let r = Bn(this.text, Bn(n.text, ea(this.text, 0, e)), t), s = this.length + n.length - (t - e);
    return r.length <= 32 ? new ee(r, s) : rt.from(ee.split(r, []), s);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = yi(this, e, t);
    let r = "";
    for (let s = 0, o = 0; s <= t && o < this.text.length; o++) {
      let l = this.text[o], a = s + l.length;
      s > e && o && (r += n), e < a && t > s && (r += l.slice(Math.max(0, e - s), t - s)), s = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let n = [], r = -1;
    for (let s of e)
      n.push(s), r += s.length + 1, n.length == 32 && (t.push(new ee(n, r)), n = [], r = -1);
    return r > -1 && t.push(new ee(n, r)), t;
  }
}
class rt extends V {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let n of e)
      this.lines += n.lines;
  }
  lineInner(e, t, n, r) {
    for (let s = 0; ; s++) {
      let o = this.children[s], l = r + o.length, a = n + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, n, r);
      r = l + 1, n = a + 1;
    }
  }
  decompose(e, t, n, r) {
    for (let s = 0, o = 0; o <= t && s < this.children.length; s++) {
      let l = this.children[s], a = o + l.length;
      if (e <= a && t >= o) {
        let h = r & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? n.push(l) : l.decompose(e - o, t - o, n, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, n) {
    if ([e, t] = yi(this, e, t), n.lines < this.lines)
      for (let r = 0, s = 0; r < this.children.length; r++) {
        let o = this.children[r], l = s + o.length;
        if (e >= s && t <= l) {
          let a = o.replace(e - s, t - s, n), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return c[r] = a, new rt(c, this.length - (t - e) + n.length);
          }
          return super.replace(s, l, a);
        }
        s = l + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = yi(this, e, t);
    let r = "";
    for (let s = 0, o = 0; s < this.children.length && o <= t; s++) {
      let l = this.children[s], a = o + l.length;
      o > e && s && (r += n), e < a && t > o && (r += l.sliceString(e - o, t - o, n)), o = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof rt))
      return 0;
    let n = 0, [r, s, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; r += t, s += t) {
      if (r == o || s == l)
        return n;
      let a = this.children[r], h = e.children[s];
      if (a != h)
        return n + a.scanIdentical(h, t);
      n += a.length + 1;
    }
  }
  static from(e, t = e.reduce((n, r) => n + r.length + 1, -1)) {
    let n = 0;
    for (let O of e)
      n += O.lines;
    if (n < 32) {
      let O = [];
      for (let d of e)
        d.flatten(O);
      return new ee(O, t);
    }
    let r = Math.max(
      32,
      n >> 5
      /* Tree.BranchShift */
    ), s = r << 1, o = r >> 1, l = [], a = 0, h = -1, c = [];
    function u(O) {
      let d;
      if (O.lines > s && O instanceof rt)
        for (let p of O.children)
          u(p);
      else O.lines > o && (a > o || !a) ? (f(), l.push(O)) : O instanceof ee && a && (d = c[c.length - 1]) instanceof ee && O.lines + d.lines <= 32 ? (a += O.lines, h += O.length + 1, c[c.length - 1] = new ee(d.text.concat(O.text), d.length + 1 + O.length)) : (a + O.lines > r && f(), a += O.lines, h += O.length + 1, c.push(O));
    }
    function f() {
      a != 0 && (l.push(c.length == 1 ? c[0] : rt.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let O of e)
      u(O);
    return f(), l.length == 1 ? l[0] : new rt(l, t);
  }
}
V.empty = /* @__PURE__ */ new ee([""], 0);
function op(i) {
  let e = -1;
  for (let t of i)
    e += t.length + 1;
  return e;
}
function Bn(i, e, t = 0, n = 1e9) {
  for (let r = 0, s = 0, o = !0; s < i.length && r <= n; s++) {
    let l = i[s], a = r + l.length;
    a >= t && (a > n && (l = l.slice(0, n - r)), r < t && (l = l.slice(t - r)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), r = a + 1;
  }
  return e;
}
function ea(i, e, t) {
  return Bn(i, [""], e, t);
}
class Ii {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof ee ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1, r = this.nodes[n], s = this.offsets[n], o = s >> 1, l = r instanceof ee ? r.text.length : r.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (n == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[n] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (r instanceof ee) {
        let a = r.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[n] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = r.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof ee ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Mc {
  constructor(e, t, n) {
    this.value = "", this.done = !1, this.cursor = new Ii(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n), n -= e;
    let { value: r } = this.cursor.next(e);
    return this.pos += (r.length + e) * t, this.value = r.length <= n ? r : t < 0 ? r.slice(r.length - n) : r.slice(0, n), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class zc {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: n, value: r } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (V.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Ii.prototype[Symbol.iterator] = Mc.prototype[Symbol.iterator] = zc.prototype[Symbol.iterator] = function() {
  return this;
});
class lp {
  /**
  @internal
  */
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.number = n, this.text = r;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function yi(i, e, t) {
  return e = Math.max(0, Math.min(i.length, e)), [e, Math.max(e, Math.min(i.length, t))];
}
function he(i, e, t = !0, n = !0) {
  return rp(i, e, t, n);
}
function ap(i) {
  return i >= 56320 && i < 57344;
}
function hp(i) {
  return i >= 55296 && i < 56320;
}
function it(i, e) {
  let t = i.charCodeAt(e);
  if (!hp(t) || e + 1 == i.length)
    return t;
  let n = i.charCodeAt(e + 1);
  return ap(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function Vc(i) {
  return i <= 65535 ? String.fromCharCode(i) : (i -= 65536, String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function Zt(i) {
  return i < 65536 ? 1 : 2;
}
const Ls = /\r\n?|\n/;
var fe = /* @__PURE__ */ (function(i) {
  return i[i.Simple = 0] = "Simple", i[i.TrackDel = 1] = "TrackDel", i[i.TrackBefore = 2] = "TrackBefore", i[i.TrackAfter = 3] = "TrackAfter", i;
})(fe || (fe = {}));
class ht {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t + 1];
      e += n < 0 ? this.sections[t] : n;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, n = 0, r = 0; t < this.sections.length; ) {
      let s = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(n, r, s), r += s) : r += o, n += s;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    Bs(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], r = this.sections[t++];
      r < 0 ? e.push(n, r) : e.push(r, n);
    }
    return new ht(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : _c(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : js(this, e, t);
  }
  mapPos(e, t = -1, n = fe.Simple) {
    let r = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = r + l;
      if (a < 0) {
        if (h > e)
          return s + (e - r);
        s += l;
      } else {
        if (n != fe.Simple && h >= e && (n == fe.TrackDel && r < e && h > e || n == fe.TrackBefore && r < e || n == fe.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !l)
          return e == r || t < 0 ? s : s + a;
        s += a;
      }
      r = h;
    }
    if (e > r)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
    return s;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let n = 0, r = 0; n < this.sections.length && r <= t; ) {
      let s = this.sections[n++], o = this.sections[n++], l = r + s;
      if (o >= 0 && r <= t && l >= e)
        return r < e && l > t ? "cover" : !0;
      r = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], r = this.sections[t++];
      e += (e ? " " : "") + n + (r >= 0 ? ":" + r : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new ht(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new ht(e);
  }
}
class ne extends ht {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Bs(this, (t, n, r, s, o) => e = e.replace(r, r + (n - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return js(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), n = [];
    for (let r = 0, s = 0; r < t.length; r += 2) {
      let o = t[r], l = t[r + 1];
      if (l >= 0) {
        t[r] = l, t[r + 1] = o;
        let a = r >> 1;
        for (; n.length < a; )
          n.push(V.empty);
        n.push(o ? e.slice(s, s + o) : V.empty);
      }
      s += o;
    }
    return new ne(t, n);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : _c(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : js(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    Bs(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return ht.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], n = [], r = [], s = new Fi(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && s.len == 0; ) {
        if (s.done)
          break e;
        let c = Math.min(s.len, a - l);
        ue(r, c, -1);
        let u = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        ue(t, c, u), u > 0 && At(n, t, s.text), s.forward(c), l += c;
      }
      let h = e[o++];
      for (; l < h; ) {
        if (s.done)
          break e;
        let c = Math.min(s.len, h - l);
        ue(t, c, -1), ue(r, c, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(c), l += c;
      }
    }
    return {
      changes: new ne(t, n),
      filtered: ht.create(r)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t], r = this.sections[t + 1];
      r < 0 ? e.push(n) : r == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, n) {
    let r = [], s = [], o = 0, l = null;
    function a(c = !1) {
      if (!c && !r.length)
        return;
      o < t && ue(r, t - o, -1);
      let u = new ne(r, s);
      l = l ? l.compose(u.map(l)) : u, r = [], s = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let u of c)
          h(u);
      else if (c instanceof ne) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: u, to: f = u, insert: O } = c;
        if (u > f || u < 0 || f > t)
          throw new RangeError(`Invalid change range ${u} to ${f} (in doc of length ${t})`);
        let d = O ? typeof O == "string" ? V.of(O.split(n || Ls)) : O : V.empty, p = d.length;
        if (u == f && p == 0)
          return;
        u < o && a(), u > o && ue(r, u - o, -1), ue(r, f - u, p), At(s, r, d), o = f;
      }
    }
    return h(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new ne(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], n = [];
    for (let r = 0; r < e.length; r++) {
      let s = e[r];
      if (typeof s == "number")
        t.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1)
          t.push(s[0], 0);
        else {
          for (; n.length < r; )
            n.push(V.empty);
          n[r] = V.of(s.slice(1)), t.push(s[0], n[r].length);
        }
      }
    }
    return new ne(t, n);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new ne(e, t);
  }
}
function ue(i, e, t, n = !1) {
  if (e == 0 && t <= 0)
    return;
  let r = i.length - 2;
  r >= 0 && t <= 0 && t == i[r + 1] ? i[r] += e : r >= 0 && e == 0 && i[r] == 0 ? i[r + 1] += t : n ? (i[r] += e, i[r + 1] += t) : i.push(e, t);
}
function At(i, e, t) {
  if (t.length == 0)
    return;
  let n = e.length - 2 >> 1;
  if (n < i.length)
    i[i.length - 1] = i[i.length - 1].append(t);
  else {
    for (; i.length < n; )
      i.push(V.empty);
    i.push(t);
  }
}
function Bs(i, e, t) {
  let n = i.inserted;
  for (let r = 0, s = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++], a = i.sections[o++];
    if (a < 0)
      r += l, s += l;
    else {
      let h = r, c = s, u = V.empty;
      for (; h += l, c += a, a && n && (u = u.append(n[o - 2 >> 1])), !(t || o == i.sections.length || i.sections[o + 1] < 0); )
        l = i.sections[o++], a = i.sections[o++];
      e(r, h, s, c, u), r = h, s = c;
    }
  }
}
function js(i, e, t, n = !1) {
  let r = [], s = n ? [] : null, o = new Fi(i), l = new Fi(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      ue(r, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (ue(r, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (ue(r, 0, o.ins), s && At(s, r, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let u = Math.min(c, l.len);
          h += u, c -= u, l.forward(u);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      ue(r, h, a < o.i ? o.ins : 0), s && a < o.i && At(s, r, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return s ? ne.createSet(r, s) : ht.create(r);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function _c(i, e, t = !1) {
  let n = [], r = t ? [] : null, s = new Fi(i), o = new Fi(e);
  for (let l = !1; ; ) {
    if (s.done && o.done)
      return r ? ne.createSet(n, r) : ht.create(n);
    if (s.ins == 0)
      ue(n, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done)
      ue(n, 0, o.ins, l), r && At(r, n, o.text), o.next();
    else {
      if (s.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, o.len), h = n.length;
        if (s.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          ue(n, a, c, l), r && c && At(r, n, o.text);
        } else o.ins == -1 ? (ue(n, s.off ? 0 : s.len, a, l), r && At(r, n, s.textBit(a))) : (ue(n, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), r && !o.off && At(r, n, o.text));
        l = (s.ins > a || o.ins >= 0 && o.len > a) && (l || n.length > h), s.forward2(a), o.forward(a);
      }
    }
  }
}
class Fi {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? V.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, n = this.i - 2 >> 1;
    return n >= t.length && !e ? V.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Ut {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.flags = n;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let n, r;
    return this.empty ? n = r = e.mapPos(this.from, t) : (n = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), n == this.from && r == this.to ? this : new Ut(n, r, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return y.range(e, t);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return y.range(this.anchor, n);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return y.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Ut(e, t, n);
  }
}
class y {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : y.create(this.ranges.map((n) => n.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let n = 0; n < this.ranges.length; n++)
      if (!this.ranges[n].eq(e.ranges[n], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new y([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return y.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return n[t] = e, y.create(n, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new y(e.ranges.map((t) => Ut.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new y([y.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let n = 0, r = 0; r < e.length; r++) {
      let s = e[r];
      if (s.empty ? s.from <= n : s.from < n)
        return y.normalized(e.slice(), t);
      n = s.to;
    }
    return new y(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, n, r) {
    return Ut.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | (r ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, n, r) {
    let s = (n ?? 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
    return t < e ? Ut.create(t, e, 48 | s) : Ut.create(e, t, (t > e ? 8 : 0) | s);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let n = e[t];
    e.sort((r, s) => r.from - s.from), t = e.indexOf(n);
    for (let r = 1; r < e.length; r++) {
      let s = e[r], o = e[r - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from, a = Math.max(s.to, o.to);
        r <= t && t--, e.splice(--r, 2, s.anchor > s.head ? y.range(a, l) : y.range(l, a));
      }
    }
    return new y(e, t);
  }
}
function qc(i, e) {
  for (let t of i.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Io = 0;
class k {
  constructor(e, t, n, r, s) {
    this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = r, this.id = Io++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new k(e.combine || ((t) => t), e.compareInput || ((t, n) => t === n), e.compare || (e.combine ? (t, n) => t === n : No), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new jn([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new jn(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new jn(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)));
  }
}
function No(i, e) {
  return i == e || i.length == e.length && i.every((t, n) => t === e[n]);
}
class jn {
  constructor(e, t, n, r) {
    this.dependencies = e, this.facet = t, this.type = n, this.value = r, this.id = Io++;
  }
  dynamicSlot(e) {
    var t;
    let n = this.value, r = this.facet.compareInput, s = this.id, o = e[s] >> 1, l = this.type == 2, a = !1, h = !1, c = [];
    for (let u of this.dependencies)
      u == "doc" ? a = !0 : u == "selection" ? h = !0 : (((t = e[u.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[u.id]);
    return {
      create(u) {
        return u.values[o] = n(u), 1;
      },
      update(u, f) {
        if (a && f.docChanged || h && (f.docChanged || f.selection) || Is(u, c)) {
          let O = n(u);
          if (l ? !ta(O, u.values[o], r) : !r(O, u.values[o]))
            return u.values[o] = O, 1;
        }
        return 0;
      },
      reconfigure: (u, f) => {
        let O, d = f.config.address[s];
        if (d != null) {
          let p = sr(f, d);
          if (this.dependencies.every((g) => g instanceof k ? f.facet(g) === u.facet(g) : g instanceof ye ? f.field(g, !1) == u.field(g, !1) : !0) || (l ? ta(O = n(u), p, r) : r(O = n(u), p)))
            return u.values[o] = p, 0;
        } else
          O = n(u);
        return u.values[o] = O, 1;
      }
    };
  }
}
function ta(i, e, t) {
  if (i.length != e.length)
    return !1;
  for (let n = 0; n < i.length; n++)
    if (!t(i[n], e[n]))
      return !1;
  return !0;
}
function Is(i, e) {
  let t = !1;
  for (let n of e)
    Ni(i, n) & 1 && (t = !0);
  return t;
}
function cp(i, e, t) {
  let n = t.map((a) => i[a.id]), r = t.map((a) => a.type), s = n.filter((a) => !(a & 1)), o = i[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < n.length; c++) {
      let u = sr(a, n[c]);
      if (r[c] == 2)
        for (let f of u)
          h.push(f);
      else
        h.push(u);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of n)
        Ni(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!Is(a, s))
        return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
    },
    reconfigure(a, h) {
      let c = Is(a, n), u = h.config.facets[e.id], f = h.facet(e);
      if (u && !c && No(t, u))
        return a.values[o] = f, 0;
      let O = l(a);
      return e.compare(O, f) ? (a.values[o] = f, 0) : (a.values[o] = O, 1);
    }
  };
}
const $n = /* @__PURE__ */ k.define({ static: !0 });
class ye {
  constructor(e, t, n, r, s) {
    this.id = e, this.createF = t, this.updateF = n, this.compareF = r, this.spec = s, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new ye(Io++, e.create, e.update, e.compare || ((n, r) => n === r), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet($n).find((n) => n.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (n) => (n.values[t] = this.create(n), 1),
      update: (n, r) => {
        let s = n.values[t], o = this.updateF(s, r);
        return this.compareF(s, o) ? 0 : (n.values[t] = o, 1);
      },
      reconfigure: (n, r) => {
        let s = n.facet($n), o = r.facet($n), l;
        return (l = s.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (n.values[t] = l.create(n), 1) : r.config.address[this.id] != null ? (n.values[t] = r.field(this), 0) : (n.values[t] = this.create(n), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, $n.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const Nt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function zi(i) {
  return (e) => new Yc(e, i);
}
const Ai = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ zi(Nt.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ zi(Nt.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ zi(Nt.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ zi(Nt.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ zi(Nt.lowest)
};
class Yc {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class Mr {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new Ns(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return Mr.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Ns {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class rr {
  constructor(e, t, n, r, s, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = r, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < n.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, n) {
    let r = [], s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let f of up(e, t, o))
      f instanceof ye ? r.push(f) : (s[f.facet.id] || (s[f.facet.id] = [])).push(f);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let f of r)
      l[f.id] = h.length << 1, h.push((O) => f.slot(O));
    let c = n == null ? void 0 : n.config.facets;
    for (let f in s) {
      let O = s[f], d = O[0].facet, p = c && c[f] || [];
      if (O.every(
        (g) => g.type == 0
        /* Provider.Static */
      ))
        if (l[d.id] = a.length << 1 | 1, No(p, O))
          a.push(n.facet(d));
        else {
          let g = d.combine(O.map((b) => b.value));
          a.push(n && d.compare(g, n.facet(d)) ? n.facet(d) : g);
        }
      else {
        for (let g of O)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = h.length << 1, h.push((b) => g.dynamicSlot(b)));
        l[d.id] = h.length << 1, h.push((g) => cp(g, d, O));
      }
    }
    let u = h.map((f) => f(l));
    return new rr(e, o, u, l, a, s);
  }
}
function up(i, e, t) {
  let n = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function s(o, l) {
    let a = r.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = n[a].indexOf(o);
      h > -1 && n[a].splice(h, 1), o instanceof Ns && t.delete(o.compartment);
    }
    if (r.set(o, l), Array.isArray(o))
      for (let h of o)
        s(h, l);
    else if (o instanceof Ns) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), s(h, l);
    } else if (o instanceof Yc)
      s(o.inner, o.prec);
    else if (o instanceof ye)
      n[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof jn)
      n[l].push(o), o.facet.extensions && s(o.facet.extensions, Nt.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(h, l);
    }
  }
  return s(i, Nt.default), n.reduce((o, l) => o.concat(l));
}
function Ni(i, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, n = i.status[t];
  if (n == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2)
    return n;
  i.status[t] = 4;
  let r = i.computeSlot(i, i.config.dynamicSlots[t]);
  return i.status[t] = 2 | r;
}
function sr(i, e) {
  return e & 1 ? i.config.staticValues[e >> 1] : i.values[e >> 1];
}
const Ec = /* @__PURE__ */ k.define(), Gs = /* @__PURE__ */ k.define({
  combine: (i) => i.some((e) => e),
  static: !0
}), Wc = /* @__PURE__ */ k.define({
  combine: (i) => i.length ? i[0] : void 0,
  static: !0
}), Dc = /* @__PURE__ */ k.define(), Lc = /* @__PURE__ */ k.define(), Bc = /* @__PURE__ */ k.define(), jc = /* @__PURE__ */ k.define({
  combine: (i) => i.length ? i[0] : !1
});
class $t {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new fp();
  }
}
class fp {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new $t(this, e);
  }
}
class Op {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new _(this, e);
  }
}
class _ {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new _(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new Op(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let n = [];
    for (let r of e) {
      let s = r.map(t);
      s && n.push(s);
    }
    return n;
  }
}
_.reconfigure = /* @__PURE__ */ _.define();
_.appendConfig = /* @__PURE__ */ _.define();
class te {
  constructor(e, t, n, r, s, o) {
    this.startState = e, this.changes = t, this.selection = n, this.effects = r, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, n && qc(n, t.newLength), s.some((l) => l.type == te.time) || (this.annotations = s.concat(te.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, n, r, s, o) {
    return new te(e, t, n, r, s, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(te.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
te.time = /* @__PURE__ */ $t.define();
te.userEvent = /* @__PURE__ */ $t.define();
te.addToHistory = /* @__PURE__ */ $t.define();
te.remote = /* @__PURE__ */ $t.define();
function dp(i, e) {
  let t = [];
  for (let n = 0, r = 0; ; ) {
    let s, o;
    if (n < i.length && (r == e.length || e[r] >= i[n]))
      s = i[n++], o = i[n++];
    else if (r < e.length)
      s = e[r++], o = e[r++];
    else
      return t;
    !t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Ic(i, e, t) {
  var n;
  let r, s, o;
  return t ? (r = e.changes, s = ne.empty(e.changes.length), o = i.changes.compose(e.changes)) : (r = e.changes.map(i.changes), s = i.changes.mapDesc(e.changes, !0), o = i.changes.compose(r)), {
    changes: o,
    selection: e.selection ? e.selection.map(s) : (n = i.selection) === null || n === void 0 ? void 0 : n.map(r),
    effects: _.mapEffects(i.effects, r).concat(_.mapEffects(e.effects, s)),
    annotations: i.annotations.length ? i.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: i.scrollIntoView || e.scrollIntoView
  };
}
function Us(i, e, t) {
  let n = e.selection, r = hi(e.annotations);
  return e.userEvent && (r = r.concat(te.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof ne ? e.changes : ne.of(e.changes || [], t, i.facet(Wc)),
    selection: n && (n instanceof y ? n : y.single(n.anchor, n.head)),
    effects: hi(e.effects),
    annotations: r,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Nc(i, e, t) {
  let n = Us(i, e.length ? e[0] : {}, i.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (t = !1);
    let o = !!e[s].sequential;
    n = Ic(n, Us(i, e[s], o ? n.changes.newLength : i.doc.length), o);
  }
  let r = te.create(i, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
  return mp(t ? pp(r) : r);
}
function pp(i) {
  let e = i.startState, t = !0;
  for (let r of e.facet(Dc)) {
    let s = r(i);
    if (s === !1) {
      t = !1;
      break;
    }
    Array.isArray(s) && (t = t === !0 ? s : dp(t, s));
  }
  if (t !== !0) {
    let r, s;
    if (t === !1)
      s = i.changes.invertedDesc, r = ne.empty(e.doc.length);
    else {
      let o = i.changes.filter(t);
      r = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    i = te.create(e, r, i.selection && i.selection.map(s), _.mapEffects(i.effects, s), i.annotations, i.scrollIntoView);
  }
  let n = e.facet(Lc);
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r](i);
    s instanceof te ? i = s : Array.isArray(s) && s.length == 1 && s[0] instanceof te ? i = s[0] : i = Nc(e, hi(s), !1);
  }
  return i;
}
function mp(i) {
  let e = i.startState, t = e.facet(Bc), n = i;
  for (let r = t.length - 1; r >= 0; r--) {
    let s = t[r](i);
    s && Object.keys(s).length && (n = Ic(n, Us(e, s, i.changes.newLength), !0));
  }
  return n == i ? i : te.create(e, i.changes, i.selection, n.effects, n.annotations, n.scrollIntoView);
}
const gp = [];
function hi(i) {
  return i == null ? gp : Array.isArray(i) ? i : [i];
}
var Re = /* @__PURE__ */ (function(i) {
  return i[i.Word = 0] = "Word", i[i.Space = 1] = "Space", i[i.Other = 2] = "Other", i;
})(Re || (Re = {}));
const bp = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Fs;
try {
  Fs = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function yp(i) {
  if (Fs)
    return Fs.test(i);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || bp.test(t)))
      return !0;
  }
  return !1;
}
function Qp(i) {
  return (e) => {
    if (!/\S/.test(e))
      return Re.Space;
    if (yp(e))
      return Re.Word;
    for (let t = 0; t < i.length; t++)
      if (e.indexOf(i[t]) > -1)
        return Re.Word;
    return Re.Other;
  };
}
class E {
  constructor(e, t, n, r, s, o) {
    this.config = e, this.doc = t, this.selection = n, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Ni(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Ni(this, n), sr(this, n);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Nc(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: n, compartments: r } = t;
    for (let l of e.effects)
      l.is(Mr.reconfigure) ? (t && (r = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => r.set(h, a)), t = null), r.set(l.value.compartment, l.value.extension)) : l.is(_.reconfigure) ? (t = null, n = l.value) : l.is(_.appendConfig) && (t = null, n = hi(n).concat(l.value));
    let s;
    t ? s = e.startState.values.slice() : (t = rr.resolve(n, r, this), s = new E(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = e.startState.facet(Gs) ? e.newSelection : e.newSelection.asSingle();
    new E(t, e.newDoc, o, s, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: y.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, n = e(t.ranges[0]), r = this.changes(n.changes), s = [n.range], o = hi(n.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), c = h.map(r);
      for (let f = 0; f < l; f++)
        s[f] = s[f].map(c);
      let u = r.mapDesc(h, !0);
      s.push(a.range.map(u)), r = r.compose(c), o = _.mapEffects(o, c).concat(_.mapEffects(hi(a.effects), u));
    }
    return {
      changes: r,
      selection: y.create(s, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof ne ? e : ne.of(e, this.doc.length, this.facet(E.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return V.of(e.split(this.facet(E.lineSeparator) || Ls));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (Ni(this, t), sr(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let n in e) {
        let r = e[n];
        r instanceof ye && this.config.address[r.id] != null && (t[n] = r.spec.toJSON(this.field(e[n]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, n) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let r = [];
    if (n) {
      for (let s in n)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let o = n[s], l = e[s];
          r.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return E.create({
      doc: e.doc,
      selection: y.fromJSON(e.selection),
      extensions: t.extensions ? r.concat([t.extensions]) : r
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = rr.resolve(e.extensions || [], /* @__PURE__ */ new Map()), n = e.doc instanceof V ? e.doc : V.of((e.doc || "").split(t.staticFacet(E.lineSeparator) || Ls)), r = e.selection ? e.selection instanceof y ? e.selection : y.single(e.selection.anchor, e.selection.head) : y.single(0);
    return qc(r, n.length), t.staticFacet(Gs) || (r = r.asSingle()), new E(t, n, r, t.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(E.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(E.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(jc);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let n of this.facet(E.phrases))
      if (Object.prototype.hasOwnProperty.call(n, e)) {
        e = n[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (n, r) => {
      if (r == "$")
        return "$";
      let s = +(r || 1);
      return !s || s > t.length ? n : t[s - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, n = -1) {
    let r = [];
    for (let s of this.facet(Ec))
      for (let o of s(this, t, n))
        Object.prototype.hasOwnProperty.call(o, e) && r.push(o[e]);
    return r;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    return Qp(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: n, length: r } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - n, l = e - n;
    for (; o > 0; ) {
      let a = he(t, o, !1);
      if (s(t.slice(a, o)) != Re.Word)
        break;
      o = a;
    }
    for (; l < r; ) {
      let a = he(t, l);
      if (s(t.slice(l, a)) != Re.Word)
        break;
      l = a;
    }
    return o == l ? null : y.range(o + n, l + n);
  }
}
E.allowMultipleSelections = Gs;
E.tabSize = /* @__PURE__ */ k.define({
  combine: (i) => i.length ? i[0] : 4
});
E.lineSeparator = Wc;
E.readOnly = jc;
E.phrases = /* @__PURE__ */ k.define({
  compare(i, e) {
    let t = Object.keys(i), n = Object.keys(e);
    return t.length == n.length && t.every((r) => i[r] == e[r]);
  }
});
E.languageData = Ec;
E.changeFilter = Dc;
E.transactionFilter = Lc;
E.transactionExtender = Bc;
Mr.reconfigure = /* @__PURE__ */ _.define();
function zr(i, e, t = {}) {
  let n = {};
  for (let r of i)
    for (let s of Object.keys(r)) {
      let o = r[s], l = n[s];
      if (l === void 0)
        n[s] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, s))
        n[s] = t[s](l, o);
      else
        throw new Error("Config merge conflict for field " + s);
    }
  for (let r in e)
    n[r] === void 0 && (n[r] = e[r]);
  return n;
}
class Mt {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return Hs.create(e, t, this);
  }
}
Mt.prototype.startSide = Mt.prototype.endSide = 0;
Mt.prototype.point = !1;
Mt.prototype.mapMode = fe.TrackDel;
let Hs = class Gc {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.value = n;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Gc(e, t, n);
  }
};
function Ks(i, e) {
  return i.from - e.from || i.value.startSide - e.value.startSide;
}
class Go {
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.value = n, this.maxPoint = r;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, n, r = 0) {
    let s = n ? this.to : this.from;
    for (let o = r, l = s.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = s[a] - e || (n ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, n, r) {
    for (let s = this.findIndex(t, -1e9, !0), o = this.findIndex(n, 1e9, !1, s); s < o; s++)
      if (r(this.from[s] + e, this.to[s] + e, this.value[s]) === !1)
        return !1;
  }
  map(e, t) {
    let n = [], r = [], s = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + e, u = this.to[a] + e, f, O;
      if (c == u) {
        let d = t.mapPos(c, h.startSide, h.mapMode);
        if (d == null || (f = O = d, h.startSide != h.endSide && (O = t.mapPos(c, h.endSide), O < f)))
          continue;
      } else if (f = t.mapPos(c, h.startSide), O = t.mapPos(u, h.endSide), f > O || f == O && h.startSide > 0 && h.endSide <= 0)
        continue;
      (O - f || h.endSide - h.startSide) < 0 || (o < 0 && (o = f), h.point && (l = Math.max(l, O - f)), n.push(h), r.push(f - o), s.push(O - o));
    }
    return { mapped: n.length ? new Go(r, s, n, l) : null, pos: o };
  }
}
class z {
  constructor(e, t, n, r) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = r;
  }
  /**
  @internal
  */
  static create(e, t, n, r) {
    return new z(e, t, n, r);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: n = !1, filterFrom: r = 0, filterTo: s = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (n && (t = t.slice().sort(Ks)), this.isEmpty)
      return t.length ? z.of(t) : this;
    let l = new Uc(this, null, -1).goto(0), a = 0, h = [], c = new Hi();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let u = t[a++];
        c.addInner(u.from, u.to, u.value) || h.push(u);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || r > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || r > l.to || s < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(Hs.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? z.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: r, filterTo: s }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], n = [], r = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = e.touchesRange(l, l + a.length);
      if (h === !1)
        r = Math.max(r, a.maxPoint), t.push(a), n.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: u } = a.map(l, e);
        c && (r = Math.max(r, c.maxPoint), t.push(c), n.push(u));
      }
    }
    let s = this.nextLayer.map(e);
    return t.length == 0 ? s : new z(n, t, s || z.empty, r);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, n) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let s = this.chunkPos[r], o = this.chunk[r];
        if (t >= s && e <= s + o.length && o.between(s, e - s, t - s, n) === !1)
          return;
      }
      this.nextLayer.between(e, t, n);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return Ki.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return Ki.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, n, r, s = -1) {
    let o = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), l = t.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), a = ia(o, l, n), h = new Vi(o, a, s), c = new Vi(l, a, s);
    n.iterGaps((u, f, O) => na(h, u, c, f, O, r)), n.empty && n.length == 0 && na(h, 0, c, 0, 0, r);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, n = 0, r) {
    r == null && (r = 999999999);
    let s = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (s.length != o.length)
      return !1;
    if (!s.length)
      return !0;
    let l = ia(s, o), a = new Vi(s, l, 0).goto(n), h = new Vi(o, l, 0).goto(n);
    for (; ; ) {
      if (a.to != h.to || !Js(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return !1;
      if (a.to > r)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, n, r, s = -1) {
    let o = new Vi(e, null, s).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, n);
      if (o.point) {
        let c = o.activeForPoint(o.to), u = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        r.point(l, h, o.point, c, u, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else h > l && (r.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > n)
        return a + (o.point && o.to > n ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let n = new Hi();
    for (let r of e instanceof Hs ? [e] : t ? Sp(e) : e)
      n.add(r.from, r.to, r.value);
    return n.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return z.empty;
    let t = e[e.length - 1];
    for (let n = e.length - 2; n >= 0; n--)
      for (let r = e[n]; r != z.empty; r = r.nextLayer)
        t = new z(r.chunkPos, r.chunk, t, Math.max(r.maxPoint, t.maxPoint));
    return t;
  }
}
z.empty = /* @__PURE__ */ new z([], [], null, -1);
function Sp(i) {
  if (i.length > 1)
    for (let e = i[0], t = 1; t < i.length; t++) {
      let n = i[t];
      if (Ks(e, n) > 0)
        return i.slice().sort(Ks);
      e = n;
    }
  return i;
}
z.empty.nextLayer = z.empty;
class Hi {
  finishChunk(e) {
    this.chunks.push(new Go(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, n) {
    this.addInner(e, t, n) || (this.nextLayer || (this.nextLayer = new Hi())).add(e, t, n);
  }
  /**
  @internal
  */
  addInner(e, t, n) {
    let r = e - this.lastTo || n.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let n = t.value.length - 1;
    return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(z.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = z.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function ia(i, e, t) {
  let n = /* @__PURE__ */ new Map();
  for (let s of i)
    for (let o = 0; o < s.chunk.length; o++)
      s.chunk[o].maxPoint <= 0 && n.set(s.chunk[o], s.chunkPos[o]);
  let r = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let o = 0; o < s.chunk.length; o++) {
      let l = n.get(s.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == s.chunkPos[o] && !(t != null && t.touchesRange(l, l + s.chunk[o].length)) && r.add(s.chunk[o]);
    }
  return r;
}
class Uc {
  constructor(e, t, n, r = 0) {
    this.layer = e, this.skip = t, this.minPoint = n, this.rank = r;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, n = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!n || this.rangeIndex < r) && this.setRangeIndex(r);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], n = e + t.from[this.rangeIndex];
        if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class Ki {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let r = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= n && r.push(new Uc(o, t, n, s));
    return r.length == 1 ? r[0] : new Ki(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap)
      n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      rs(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap)
      n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      rs(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), rs(this.heap, 0);
    }
  }
}
function rs(i, e) {
  for (let t = i[e]; ; ) {
    let n = (e << 1) + 1;
    if (n >= i.length)
      break;
    let r = i[n];
    if (n + 1 < i.length && r.compare(i[n + 1]) >= 0 && (r = i[n + 1], n++), t.compare(r) < 0)
      break;
    i[n] = t, i[e] = r, e = n;
  }
}
class Vi {
  constructor(e, t, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ki.from(e, t, n);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    vn(this.active, e), vn(this.activeTo, e), vn(this.activeRank, e), this.minActive = ra(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: n, to: r, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || r - this.activeTo[t]) > 0; )
      t++;
    kn(this.active, t, n), kn(this.activeTo, t, r), kn(this.activeRank, t, s), e && kn(e, t, this.cursor.from), this.minActive = ra(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > e) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), n && vn(n, r);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point)
            this.addActive(n), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = s, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = s.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let r = n.length - 1; r >= 0 && n[r] < e; r--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--)
      (this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--)
      t++;
    return t;
  }
}
function na(i, e, t, n, r, s) {
  i.goto(e), t.goto(n);
  let o = n + r, l = n, a = n - e;
  for (; ; ) {
    let h = i.to + a - t.to, c = h || i.endSide - t.endSide, u = c < 0 ? i.to + a : t.to, f = Math.min(u, o);
    if (i.point || t.point ? i.point && t.point && (i.point == t.point || i.point.eq(t.point)) && Js(i.activeForPoint(i.to), t.activeForPoint(t.to)) || s.comparePoint(l, f, i.point, t.point) : f > l && !Js(i.active, t.active) && s.compareRange(l, f, i.active, t.active), u > o)
      break;
    (h || i.openEnd != t.openEnd) && s.boundChange && s.boundChange(u), l = u, c <= 0 && i.next(), c >= 0 && t.next();
  }
}
function Js(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] != e[t] && !i[t].eq(e[t]))
      return !1;
  return !0;
}
function vn(i, e) {
  for (let t = e, n = i.length - 1; t < n; t++)
    i[t] = i[t + 1];
  i.pop();
}
function kn(i, e, t) {
  for (let n = i.length - 1; n >= e; n--)
    i[n + 1] = i[n];
  i[e] = t;
}
function ra(i, e) {
  let t = -1, n = 1e9;
  for (let r = 0; r < e.length; r++)
    (e[r] - n || i[r].endSide - i[t].endSide) < 0 && (t = r, n = e[r]);
  return t;
}
function Vr(i, e, t = i.length) {
  let n = 0;
  for (let r = 0; r < t && r < i.length; )
    i.charCodeAt(r) == 9 ? (n += e - n % e, r++) : (n++, r = he(i, r));
  return n;
}
function xp(i, e, t, n) {
  for (let r = 0, s = 0; ; ) {
    if (s >= e)
      return r;
    if (r == i.length)
      break;
    s += i.charCodeAt(r) == 9 ? t - s % t : 1, r = he(i, r);
  }
  return i.length;
}
const eo = "ͼ", sa = typeof Symbol > "u" ? "__" + eo : Symbol.for(eo), to = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), oa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class zt {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: n } = t || {};
    function r(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function s(o, l, a, h) {
      let c = [], u = /^@(\w+)\b/.exec(o[0]), f = u && u[1] == "keyframes";
      if (u && l == null) return a.push(o[0] + ";");
      for (let O in l) {
        let d = l[O];
        if (/&/.test(O))
          s(
            O.split(/,\s*/).map((p) => o.map((g) => p.replace(/&/, g))).reduce((p, g) => p.concat(g)),
            d,
            a
          );
        else if (d && typeof d == "object") {
          if (!u) throw new RangeError("The value of a property (" + O + ") should be a primitive value.");
          s(r(O), d, c, f);
        } else d != null && c.push(O.replace(/_.*/, "").replace(/[A-Z]/g, (p) => "-" + p.toLowerCase()) + ": " + d + ";");
      }
      (c.length || f) && a.push((n && !u && !h ? o.map(n) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in e) s(r(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = oa[sa] || 1;
    return oa[sa] = e + 1, eo + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, n) {
    let r = e[to], s = n && n.nonce;
    r ? s && r.setNonce(s) : r = new wp(e, s), r.mount(Array.isArray(t) ? t : [t], e);
  }
}
let la = /* @__PURE__ */ new Map();
class wp {
  constructor(e, t) {
    let n = e.ownerDocument || e, r = n.defaultView;
    if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
      let s = la.get(n);
      if (s) return e[to] = s;
      this.sheet = new r.CSSStyleSheet(), la.set(n, this);
    } else
      this.styleTag = n.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[to] = this;
  }
  mount(e, t) {
    let n = this.sheet, r = 0, s = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < s && a > -1 && (this.modules.splice(a, 1), s--, a = -1), a == -1) {
        if (this.modules.splice(s++, 0, l), n) for (let h = 0; h < l.rules.length; h++)
          n.insertRule(l.rules[h], r++);
      } else {
        for (; s < a; ) r += this.modules[s++].rules.length;
        r += l.rules.length, s++;
      }
    }
    if (n)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var Vt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
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
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Ji = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, $p = typeof navigator < "u" && /Mac/.test(navigator.platform), vp = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ae = 0; ae < 10; ae++) Vt[48 + ae] = Vt[96 + ae] = String(ae);
for (var ae = 1; ae <= 24; ae++) Vt[ae + 111] = "F" + ae;
for (var ae = 65; ae <= 90; ae++)
  Vt[ae] = String.fromCharCode(ae + 32), Ji[ae] = String.fromCharCode(ae);
for (var ss in Vt) Ji.hasOwnProperty(ss) || (Ji[ss] = Vt[ss]);
function kp(i) {
  var e = $p && i.metaKey && i.shiftKey && !i.ctrlKey && !i.altKey || vp && i.shiftKey && i.key && i.key.length == 1 || i.key == "Unidentified", t = !e && i.key || (i.shiftKey ? Ji : Vt)[i.keyCode] || i.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
let pe = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, io = typeof document < "u" ? document : { documentElement: { style: {} } };
const no = /* @__PURE__ */ /Edge\/(\d+)/.exec(pe.userAgent), Fc = /* @__PURE__ */ /MSIE \d/.test(pe.userAgent), ro = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(pe.userAgent), _r = !!(Fc || ro || no), aa = !_r && /* @__PURE__ */ /gecko\/(\d+)/i.test(pe.userAgent), os = !_r && /* @__PURE__ */ /Chrome\/(\d+)/.exec(pe.userAgent), Pp = "webkitFontSmoothing" in io.documentElement.style, so = !_r && /* @__PURE__ */ /Apple Computer/.test(pe.vendor), ha = so && (/* @__PURE__ */ /Mobile\/\w+/.test(pe.userAgent) || pe.maxTouchPoints > 2);
var $ = {
  mac: ha || /* @__PURE__ */ /Mac/.test(pe.platform),
  windows: /* @__PURE__ */ /Win/.test(pe.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(pe.platform),
  ie: _r,
  ie_version: Fc ? io.documentMode || 6 : ro ? +ro[1] : no ? +no[1] : 0,
  gecko: aa,
  gecko_version: aa ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(pe.userAgent) || [0, 0])[1] : 0,
  chrome: !!os,
  chrome_version: os ? +os[1] : 0,
  ios: ha,
  android: /* @__PURE__ */ /Android\b/.test(pe.userAgent),
  webkit_version: Pp ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(pe.userAgent) || [0, 0])[1] : 0,
  safari: so,
  safari_version: so ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(pe.userAgent) || [0, 0])[1] : 0,
  tabSize: io.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function Uo(i, e) {
  for (let t in i)
    t == "class" && e.class ? e.class += " " + i.class : t == "style" && e.style ? e.style += ";" + i.style : e[t] = i[t];
  return e;
}
const or = /* @__PURE__ */ Object.create(null);
function Fo(i, e, t) {
  if (i == e)
    return !0;
  i || (i = or), e || (e = or);
  let n = Object.keys(i), r = Object.keys(e);
  if (n.length - 0 != r.length - 0)
    return !1;
  for (let s of n)
    if (s != t && (r.indexOf(s) == -1 || i[s] !== e[s]))
      return !1;
  return !0;
}
function Tp(i, e) {
  for (let t = i.attributes.length - 1; t >= 0; t--) {
    let n = i.attributes[t].name;
    e[n] == null && i.removeAttribute(n);
  }
  for (let t in e) {
    let n = e[t];
    t == "style" ? i.style.cssText = n : i.getAttribute(t) != n && i.setAttribute(t, n);
  }
}
function ca(i, e, t) {
  let n = !1;
  if (e)
    for (let r in e)
      t && r in t || (n = !0, r == "style" ? i.style.cssText = "" : i.removeAttribute(r));
  if (t)
    for (let r in t)
      e && e[r] == t[r] || (n = !0, r == "style" ? i.style.cssText = t[r] : i.setAttribute(r, t[r]));
  return n;
}
function Zp(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < i.attributes.length; t++) {
    let n = i.attributes[t];
    e[n.name] = n.value;
  }
  return e;
}
class fn {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, n) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var we = /* @__PURE__ */ (function(i) {
  return i[i.Text = 0] = "Text", i[i.WidgetBefore = 1] = "WidgetBefore", i[i.WidgetAfter = 2] = "WidgetAfter", i[i.WidgetRange = 3] = "WidgetRange", i;
})(we || (we = {}));
class q extends Mt {
  constructor(e, t, n, r) {
    super(), this.startSide = e, this.endSide = t, this.widget = n, this.spec = r;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new On(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), n = !!e.block;
    return t += n && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new ti(e, t, t, n, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, n, r;
    if (e.isBlockGap)
      n = -5e8, r = 4e8;
    else {
      let { start: s, end: o } = Hc(e, t);
      n = (s ? t ? -3e8 : -1 : 5e8) - 1, r = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new ti(e, n, r, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new dn(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return z.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
q.none = z.empty;
class On extends q {
  constructor(e) {
    let { start: t, end: n } = Hc(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? Uo(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || or;
  }
  eq(e) {
    return this == e || e instanceof On && this.tagName == e.tagName && Fo(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
On.prototype.point = !1;
class dn extends q {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof dn && this.spec.class == e.spec.class && Fo(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
dn.prototype.mapMode = fe.TrackBefore;
dn.prototype.point = !0;
class ti extends q {
  constructor(e, t, n, r, s, o) {
    super(t, n, s, e), this.block = r, this.isReplace = o, this.mapMode = r ? t <= 0 ? fe.TrackBefore : fe.TrackAfter : fe.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? we.WidgetRange : this.startSide <= 0 ? we.WidgetBefore : we.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof ti && Cp(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
ti.prototype.point = !0;
function Hc(i, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: n } = i;
  return t == null && (t = i.inclusive), n == null && (n = i.inclusive), { start: t ?? e, end: n ?? e };
}
function Cp(i, e) {
  return i == e || !!(i && e && i.compare(e));
}
function ci(i, e, t, n = 0) {
  let r = t.length - 1;
  r >= 0 && t[r] + n >= i ? t[r] = Math.max(t[r], e) : t.push(i, e);
}
class en extends Mt {
  constructor(e, t) {
    super(), this.tagName = e, this.attributes = t;
  }
  eq(e) {
    return e == this || e instanceof en && this.tagName == e.tagName && Fo(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new en(e.tagName, e.attributes || or);
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return z.of(e, t);
  }
}
en.prototype.startSide = en.prototype.endSide = -1;
function tn(i) {
  let e;
  return i.nodeType == 11 ? e = i.getSelection ? i : i.ownerDocument : e = i, e.getSelection();
}
function oo(i, e) {
  return e ? i == e || i.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function In(i, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return oo(i, e.anchorNode);
  } catch {
    return !1;
  }
}
function Nn(i) {
  return i.nodeType == 3 ? nn(i, 0, i.nodeValue.length).getClientRects() : i.nodeType == 1 ? i.getClientRects() : [];
}
function Gi(i, e, t, n) {
  return t ? ua(i, e, t, n, -1) || ua(i, e, t, n, 1) : !1;
}
function _t(i) {
  for (var e = 0; ; e++)
    if (i = i.previousSibling, !i)
      return e;
}
function lr(i) {
  return i.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName);
}
function ua(i, e, t, n, r) {
  for (; ; ) {
    if (i == t && e == n)
      return !0;
    if (e == (r < 0 ? 0 : yt(i))) {
      if (i.nodeName == "DIV")
        return !1;
      let s = i.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = _t(i) + (r < 0 ? 0 : 1), i = s;
    } else if (i.nodeType == 1) {
      if (i = i.childNodes[e + (r < 0 ? -1 : 0)], i.nodeType == 1 && i.contentEditable == "false")
        return !1;
      e = r < 0 ? yt(i) : 0;
    } else
      return !1;
  }
}
function yt(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
function ar(i, e) {
  let t = e ? i.left : i.right;
  return { left: t, right: t, top: i.top, bottom: i.bottom };
}
function Ap(i) {
  let e = i.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: i.innerWidth,
    top: 0,
    bottom: i.innerHeight
  };
}
function Kc(i, e) {
  let t = e.width / i.offsetWidth, n = e.height / i.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - i.offsetWidth) < 1) && (t = 1), (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(e.height - i.offsetHeight) < 1) && (n = 1), { scaleX: t, scaleY: n };
}
function Xp(i, e, t, n, r, s, o, l) {
  let a = i.ownerDocument, h = a.defaultView || window;
  for (let c = i, u = !1; c && !u; )
    if (c.nodeType == 1) {
      let f, O = c == a.body, d = 1, p = 1;
      if (O)
        f = Ap(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (u = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let Q = c.getBoundingClientRect();
        ({ scaleX: d, scaleY: p } = Kc(c, Q)), f = {
          left: Q.left,
          right: Q.left + c.clientWidth * d,
          top: Q.top,
          bottom: Q.top + c.clientHeight * p
        };
      }
      let g = 0, b = 0;
      if (r == "nearest")
        e.top < f.top ? (b = e.top - (f.top + o), t > 0 && e.bottom > f.bottom + b && (b = e.bottom - f.bottom + o)) : e.bottom > f.bottom && (b = e.bottom - f.bottom + o, t < 0 && e.top - b < f.top && (b = e.top - (f.top + o)));
      else {
        let Q = e.bottom - e.top, w = f.bottom - f.top;
        b = (r == "center" && Q <= w ? e.top + Q / 2 - w / 2 : r == "start" || r == "center" && t < 0 ? e.top - o : e.bottom - w + o) - f.top;
      }
      if (n == "nearest" ? e.left < f.left ? (g = e.left - (f.left + s), t > 0 && e.right > f.right + g && (g = e.right - f.right + s)) : e.right > f.right && (g = e.right - f.right + s, t < 0 && e.left < f.left + g && (g = e.left - (f.left + s))) : g = (n == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : n == "start" == l ? e.left - s : e.right - (f.right - f.left) + s) - f.left, g || b)
        if (O)
          h.scrollBy(g, b);
        else {
          let Q = 0, w = 0;
          if (b) {
            let Z = c.scrollTop;
            c.scrollTop += b / p, w = (c.scrollTop - Z) * p;
          }
          if (g) {
            let Z = c.scrollLeft;
            c.scrollLeft += g / d, Q = (c.scrollLeft - Z) * d;
          }
          e = {
            left: e.left - Q,
            top: e.top - w,
            right: e.right - Q,
            bottom: e.bottom - w
          }, Q && Math.abs(Q - g) < 1 && (n = "nearest"), w && Math.abs(w - b) < 1 && (r = "nearest");
        }
      if (O)
        break;
      (e.top < f.top || e.bottom > f.bottom || e.left < f.left || e.right > f.right) && (e = {
        left: Math.max(e.left, f.left),
        right: Math.min(e.right, f.right),
        top: Math.max(e.top, f.top),
        bottom: Math.min(e.bottom, f.bottom)
      }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function Rp(i) {
  let e = i.ownerDocument, t, n;
  for (let r = i.parentNode; r && !(r == e.body || t && n); )
    if (r.nodeType == 1)
      !n && r.scrollHeight > r.clientHeight && (n = r), !t && r.scrollWidth > r.clientWidth && (t = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: t, y: n };
}
class Mp {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: n } = e;
    this.set(t, Math.min(e.anchorOffset, t ? yt(t) : 0), n, Math.min(e.focusOffset, n ? yt(n) : 0));
  }
  set(e, t, n, r) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = n, this.focusOffset = r;
  }
}
let It = null;
$.safari && $.safari_version >= 26 && (It = !1);
function Jc(i) {
  if (i.setActive)
    return i.setActive();
  if (It)
    return i.focus(It);
  let e = [];
  for (let t = i; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (i.focus(It == null ? {
    get preventScroll() {
      return It = { preventScroll: !0 }, !0;
    }
  } : void 0), !It) {
    It = !1;
    for (let t = 0; t < e.length; ) {
      let n = e[t++], r = e[t++], s = e[t++];
      n.scrollTop != r && (n.scrollTop = r), n.scrollLeft != s && (n.scrollLeft = s);
    }
  }
}
let fa;
function nn(i, e, t = e) {
  let n = fa || (fa = document.createRange());
  return n.setEnd(i, t), n.setStart(i, e), n;
}
function ui(i, e, t, n) {
  let r = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  n && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = n);
  let s = new KeyboardEvent("keydown", r);
  s.synthetic = !0, i.dispatchEvent(s);
  let o = new KeyboardEvent("keyup", r);
  return o.synthetic = !0, i.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented;
}
function zp(i) {
  for (; i; ) {
    if (i && (i.nodeType == 9 || i.nodeType == 11 && i.host))
      return i;
    i = i.assignedSlot || i.parentNode;
  }
  return null;
}
function Vp(i, e) {
  let t = e.focusNode, n = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != n)
    return !1;
  for (n = Math.min(n, yt(t)); ; )
    if (n) {
      if (t.nodeType != 1)
        return !1;
      let r = t.childNodes[n - 1];
      r.contentEditable == "false" ? n-- : (t = r, n = yt(t));
    } else {
      if (t == i)
        return !0;
      n = _t(t), t = t.parentNode;
    }
}
function eu(i) {
  return i.scrollTop > Math.max(1, i.scrollHeight - i.clientHeight - 4);
}
function tu(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n > 0)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[n - 1], n = yt(t);
    } else if (t.parentNode && !lr(t))
      n = _t(t), t = t.parentNode;
    else
      return null;
  }
}
function iu(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n < t.nodeValue.length)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[n], n = 0;
    } else if (t.parentNode && !lr(t))
      n = _t(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class Be {
  constructor(e, t, n = !0) {
    this.node = e, this.offset = t, this.precise = n;
  }
  static before(e, t) {
    return new Be(e.parentNode, _t(e), t);
  }
  static after(e, t) {
    return new Be(e.parentNode, _t(e) + 1, t);
  }
}
var F = /* @__PURE__ */ (function(i) {
  return i[i.LTR = 0] = "LTR", i[i.RTL = 1] = "RTL", i;
})(F || (F = {}));
const ii = F.LTR, Ho = F.RTL;
function nu(i) {
  let e = [];
  for (let t = 0; t < i.length; t++)
    e.push(1 << +i[t]);
  return e;
}
const _p = /* @__PURE__ */ nu("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), qp = /* @__PURE__ */ nu("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), lo = /* @__PURE__ */ Object.create(null), Ke = [];
for (let i of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ i.charCodeAt(0), t = /* @__PURE__ */ i.charCodeAt(1);
  lo[e] = t, lo[t] = -e;
}
function ru(i) {
  return i <= 247 ? _p[i] : 1424 <= i && i <= 1524 ? 2 : 1536 <= i && i <= 1785 ? qp[i - 1536] : 1774 <= i && i <= 2220 ? 4 : 8192 <= i && i <= 8204 ? 256 : 64336 <= i && i <= 65023 ? 4 : 1;
}
const Yp = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class mt {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Ho : ii;
  }
  /**
  @internal
  */
  constructor(e, t, n) {
    this.from = e, this.to = t, this.level = n;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, n, r) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == n)
          return o;
        (s < 0 || (r != 0 ? r < 0 ? l.from < t : l.to > t : e[s].level > l.level)) && (s = o);
      }
    }
    if (s < 0)
      throw new RangeError("Index out of range");
    return s;
  }
}
function su(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++) {
    let n = i[t], r = e[t];
    if (n.from != r.from || n.to != r.to || n.direction != r.direction || !su(n.inner, r.inner))
      return !1;
  }
  return !0;
}
const B = [];
function Ep(i, e, t, n, r) {
  for (let s = 0; s <= n.length; s++) {
    let o = s ? n[s - 1].to : e, l = s < n.length ? n[s].from : t, a = s ? 256 : r;
    for (let h = o, c = a, u = a; h < l; h++) {
      let f = ru(i.charCodeAt(h));
      f == 512 ? f = c : f == 8 && u == 4 && (f = 16), B[h] = f == 4 ? 2 : f, f & 7 && (u = f), c = f;
    }
    for (let h = o, c = a, u = a; h < l; h++) {
      let f = B[h];
      if (f == 128)
        h < l - 1 && c == B[h + 1] && c & 24 ? f = B[h] = c : B[h] = 256;
      else if (f == 64) {
        let O = h + 1;
        for (; O < l && B[O] == 64; )
          O++;
        let d = h && c == 8 || O < t && B[O] == 8 ? u == 1 ? 1 : 8 : 256;
        for (let p = h; p < O; p++)
          B[p] = d;
        h = O - 1;
      } else f == 8 && u == 1 && (B[h] = 1);
      c = f, f & 7 && (u = f);
    }
  }
}
function Wp(i, e, t, n, r) {
  let s = r == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= n.length; o++) {
    let h = o ? n[o - 1].to : e, c = o < n.length ? n[o].from : t;
    for (let u = h, f, O, d; u < c; u++)
      if (O = lo[f = i.charCodeAt(u)])
        if (O < 0) {
          for (let p = l - 3; p >= 0; p -= 3)
            if (Ke[p + 1] == -O) {
              let g = Ke[p + 2], b = g & 2 ? r : g & 4 ? g & 1 ? s : r : 0;
              b && (B[u] = B[Ke[p]] = b), l = p;
              break;
            }
        } else {
          if (Ke.length == 189)
            break;
          Ke[l++] = u, Ke[l++] = f, Ke[l++] = a;
        }
      else if ((d = B[u]) == 2 || d == 1) {
        let p = d == r;
        a = p ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let b = Ke[g + 2];
          if (b & 2)
            break;
          if (p)
            Ke[g + 2] |= 2;
          else {
            if (b & 4)
              break;
            Ke[g + 2] |= 4;
          }
        }
      }
  }
}
function Dp(i, e, t, n) {
  for (let r = 0, s = n; r <= t.length; r++) {
    let o = r ? t[r - 1].to : i, l = r < t.length ? t[r].from : e;
    for (let a = o; a < l; ) {
      let h = B[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (r == t.length)
              break;
            c = t[r++].to, l = r < t.length ? t[r].from : e;
          } else if (B[c] == 256)
            c++;
          else
            break;
        let u = s == 1, f = (c < e ? B[c] : n) == 1, O = u == f ? u ? 1 : 2 : n;
        for (let d = c, p = r, g = p ? t[p - 1].to : i; d > a; )
          d == g && (d = t[--p].from, g = p ? t[p - 1].to : i), B[--d] = O;
        a = c;
      } else
        s = h, a++;
    }
  }
}
function ao(i, e, t, n, r, s, o) {
  let l = n % 2 ? 2 : 1;
  if (n % 2 == r % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0, u = !1;
      if (h == s.length || a < s[h].from) {
        let p = B[a];
        p != l && (c = !1, u = p == 16);
      }
      let f = !c && l == 1 ? [] : null, O = c ? n : n + 1, d = a;
      e: for (; ; )
        if (h < s.length && d == s[h].from) {
          if (u)
            break e;
          let p = s[h];
          if (!c)
            for (let g = p.to, b = h + 1; ; ) {
              if (g == t)
                break e;
              if (b < s.length && s[b].from == g)
                g = s[b++].to;
              else {
                if (B[g] == l)
                  break e;
                break;
              }
            }
          if (h++, f)
            f.push(p);
          else {
            p.from > a && o.push(new mt(a, p.from, O));
            let g = p.direction == ii != !(O % 2);
            ho(i, g ? n + 1 : n, r, p.inner, p.from, p.to, o), a = p.to;
          }
          d = p.to;
        } else {
          if (d == t || (c ? B[d] != l : B[d] == l))
            break;
          d++;
        }
      f ? ao(i, a, d, n + 1, r, f, o) : a < d && o.push(new mt(a, d, O)), a = d;
    }
  else
    for (let a = t, h = s.length; a > e; ) {
      let c = !0, u = !1;
      if (!h || a > s[h - 1].to) {
        let p = B[a - 1];
        p != l && (c = !1, u = p == 16);
      }
      let f = !c && l == 1 ? [] : null, O = c ? n : n + 1, d = a;
      e: for (; ; )
        if (h && d == s[h - 1].to) {
          if (u)
            break e;
          let p = s[--h];
          if (!c)
            for (let g = p.from, b = h; ; ) {
              if (g == e)
                break e;
              if (b && s[b - 1].to == g)
                g = s[--b].from;
              else {
                if (B[g - 1] == l)
                  break e;
                break;
              }
            }
          if (f)
            f.push(p);
          else {
            p.to < a && o.push(new mt(p.to, a, O));
            let g = p.direction == ii != !(O % 2);
            ho(i, g ? n + 1 : n, r, p.inner, p.from, p.to, o), a = p.from;
          }
          d = p.from;
        } else {
          if (d == e || (c ? B[d - 1] != l : B[d - 1] == l))
            break;
          d--;
        }
      f ? ao(i, d, a, n + 1, r, f, o) : d < a && o.push(new mt(d, a, O)), a = d;
    }
}
function ho(i, e, t, n, r, s, o) {
  let l = e % 2 ? 2 : 1;
  Ep(i, r, s, n, l), Wp(i, r, s, n, l), Dp(r, s, n, l), ao(i, r, s, e, t, n, o);
}
function Lp(i, e, t) {
  if (!i)
    return [new mt(0, 0, e == Ho ? 1 : 0)];
  if (e == ii && !t.length && !Yp.test(i))
    return ou(i.length);
  if (t.length)
    for (; i.length > B.length; )
      B[B.length] = 256;
  let n = [], r = e == ii ? 0 : 1;
  return ho(i, r, r, t, 0, i.length, n), n;
}
function ou(i) {
  return [new mt(0, i, 0)];
}
let lu = "";
function Bp(i, e, t, n, r) {
  var s;
  let o = n.head - i.from, l = mt.find(e, o, (s = n.bidiLevel) !== null && s !== void 0 ? s : -1, n.assoc), a = e[l], h = a.side(r, t);
  if (o == h) {
    let f = l += r ? 1 : -1;
    if (f < 0 || f >= e.length)
      return null;
    a = e[l = f], o = a.side(!r, t), h = a.side(r, t);
  }
  let c = he(i.text, o, a.forward(r, t));
  (c < a.from || c > a.to) && (c = h), lu = i.text.slice(Math.min(o, c), Math.max(o, c));
  let u = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
  return u && c == h && u.level + (r ? 0 : 1) < a.level ? y.cursor(u.side(!r, t) + i.from, u.forward(r, t) ? 1 : -1, u.level) : y.cursor(c + i.from, a.forward(r, t) ? -1 : 1, a.level);
}
function jp(i, e, t) {
  for (let n = e; n < t; n++) {
    let r = ru(i.charCodeAt(n));
    if (r == 1)
      return ii;
    if (r == 2 || r == 4)
      return Ho;
  }
  return ii;
}
const au = /* @__PURE__ */ k.define(), hu = /* @__PURE__ */ k.define(), cu = /* @__PURE__ */ k.define(), uu = /* @__PURE__ */ k.define(), co = /* @__PURE__ */ k.define(), fu = /* @__PURE__ */ k.define(), Ou = /* @__PURE__ */ k.define(), Ko = /* @__PURE__ */ k.define(), Jo = /* @__PURE__ */ k.define(), du = /* @__PURE__ */ k.define({
  combine: (i) => i.some((e) => e)
}), Ip = /* @__PURE__ */ k.define({
  combine: (i) => i.some((e) => e)
}), pu = /* @__PURE__ */ k.define();
class fi {
  constructor(e, t = "nearest", n = "nearest", r = 5, s = 5, o = !1) {
    this.range = e, this.y = t, this.x = n, this.yMargin = r, this.xMargin = s, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new fi(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new fi(y.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Pn = /* @__PURE__ */ _.define({ map: (i, e) => i.map(e) }), mu = /* @__PURE__ */ _.define();
function Pe(i, e, t) {
  let n = i.facet(uu);
  n.length ? n[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const pt = /* @__PURE__ */ k.define({ combine: (i) => i.length ? i[0] : !0 });
let Np = 0;
const si = /* @__PURE__ */ k.define({
  combine(i) {
    return i.filter((e, t) => {
      for (let n = 0; n < t; n++)
        if (i[n].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class Te {
  constructor(e, t, n, r, s) {
    this.id = e, this.create = t, this.domEventHandlers = n, this.domEventObservers = r, this.baseExtensions = s(this), this.extension = this.baseExtensions.concat(si.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(si.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: n, eventObservers: r, provide: s, decorations: o } = t || {};
    return new Te(Np++, e, n, r, (l) => {
      let a = [];
      return o && a.push(rn.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : q.none;
      })), s && a.push(s(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return Te.define((n, r) => new e(n, r), t);
  }
}
class ls {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (n) {
            if (Pe(t.state, n, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        Pe(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        Pe(e.state, n, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const gu = /* @__PURE__ */ k.define(), el = /* @__PURE__ */ k.define(), rn = /* @__PURE__ */ k.define(), bu = /* @__PURE__ */ k.define(), yu = /* @__PURE__ */ k.define(), pn = /* @__PURE__ */ k.define(), Qu = /* @__PURE__ */ k.define();
function Oa(i, e) {
  let t = i.state.facet(Qu);
  if (!t.length)
    return t;
  let n = t.map((s) => s instanceof Function ? s(i) : s), r = [];
  return z.spans(n, e.from, e.to, {
    point() {
    },
    span(s, o, l, a) {
      let h = s - e.from, c = o - e.from, u = r;
      for (let f = l.length - 1; f >= 0; f--, a--) {
        let O = l[f].spec.bidiIsolate, d;
        if (O == null && (O = jp(e.text, h, c)), a > 0 && u.length && (d = u[u.length - 1]).to == h && d.direction == O)
          d.to = c, u = d.inner;
        else {
          let p = { from: h, to: c, direction: O, inner: [] };
          u.push(p), u = p.inner;
        }
      }
    }
  }), r;
}
const Su = /* @__PURE__ */ k.define();
function tl(i) {
  let e = 0, t = 0, n = 0, r = 0;
  for (let s of i.state.facet(Su)) {
    let o = s(i);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (n = Math.max(n, o.top)), o.bottom != null && (r = Math.max(r, o.bottom)));
  }
  return { left: e, right: t, top: n, bottom: r };
}
const Di = /* @__PURE__ */ k.define();
class Me {
  constructor(e, t, n, r) {
    this.fromA = e, this.toA = t, this.fromB = n, this.toB = r;
  }
  join(e) {
    return new Me(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, n = this;
    for (; t > 0; t--) {
      let r = e[t - 1];
      if (!(r.fromA > n.toA)) {
        if (r.toA < n.fromA)
          break;
        n = n.join(r), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, n), e;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let n = [];
    for (let r = 0, s = 0, o = 0; ; ) {
      let l = r < e.length ? e[r].fromB : 1e9, a = s < t.length ? t[s] : 1e9, h = Math.min(l, a);
      if (h == 1e9)
        break;
      let c = h + o, u = h, f = c;
      for (; ; )
        if (s < t.length && t[s] <= u) {
          let O = t[s + 1];
          s += 2, u = Math.max(u, O);
          for (let d = r; d < e.length && e[d].fromB <= u; d++)
            o = e[d].toA - e[d].toB;
          f = Math.max(f, O + o);
        } else if (r < e.length && e[r].fromB <= u) {
          let O = e[r++];
          u = Math.max(u, O.toB), f = Math.max(f, O.toA), o = O.toA - O.toB;
        } else
          break;
      n.push(new Me(c, f, h, u));
    }
    return n;
  }
}
class hr {
  constructor(e, t, n) {
    this.view = e, this.state = t, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = ne.empty(this.startState.doc.length);
    for (let s of n)
      this.changes = this.changes.compose(s.changes);
    let r = [];
    this.changes.iterChangedRanges((s, o, l, a) => r.push(new Me(s, o, l, a))), this.changedRanges = r;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new hr(e, t, n);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const Gp = [];
class re {
  constructor(e, t, n = 0) {
    this.dom = e, this.length = t, this.flags = n, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return Gp;
  }
  isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  isComposite() {
    return !1;
  }
  isLine() {
    return !1;
  }
  isText() {
    return !1;
  }
  isBlock() {
    return !1;
  }
  get domAttrs() {
    return null;
  }
  sync(e) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let t = this.domAttrs;
      t && Tp(this.dom, t);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e) {
    this.dom = e, e.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e, t = this.posAtStart) {
    let n = t;
    for (let r of this.children) {
      if (r == e)
        return n;
      n += r.length + r.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  covers(e) {
    return !0;
  }
  coordsIn(e, t) {
    return null;
  }
  domPosFor(e, t) {
    let n = _t(this.dom), r = this.length ? e > 0 : t > 0;
    return new Be(this.parent.dom, n + (r ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent)
      if (e instanceof Yr)
        return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class qr extends re {
  constructor(e) {
    super(e, 0), this._children = [];
  }
  isComposite() {
    return !0;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(e) {
    this.children.push(e), e.parent = this;
  }
  sync(e) {
    if (this.flags & 2)
      return;
    super.sync(e);
    let t = this.dom, n = null, r, s = (e == null ? void 0 : e.node) == t ? e : null, o = 0;
    for (let l of this.children) {
      if (l.sync(e), o += l.length + l.breakAfter, r = n ? n.nextSibling : t.firstChild, s && r != l.dom && (s.written = !0), l.dom.parentNode == t)
        for (; r && r != l.dom; )
          r = da(r);
      else
        t.insertBefore(l.dom, r);
      n = l.dom;
    }
    for (r = n ? n.nextSibling : t.firstChild, s && r && (s.written = !0); r; )
      r = da(r);
    this.length = o;
  }
}
function da(i) {
  let e = i.nextSibling;
  return i.parentNode.removeChild(i), e;
}
class Yr extends qr {
  constructor(e, t) {
    super(t), this.view = e;
  }
  owns(e) {
    for (; e; e = e.parent)
      if (e == this)
        return !0;
    return !1;
  }
  isBlock() {
    return !0;
  }
  nearest(e) {
    for (; ; ) {
      if (!e)
        return null;
      let t = re.get(e);
      if (t && this.owns(t))
        return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], n = this, r = 0, s = 0; ; )
      if (r == n.children.length) {
        if (!t.length)
          return;
        n = n.parent, n.breakAfter && s++, r = t.pop();
      } else {
        let o = n.children[r++];
        if (o instanceof Rt)
          t.push(r), n = o, r = 0;
        else {
          let l = s + o.length, a = e(o, s);
          if (a !== void 0)
            return a;
          s = l + o.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(e, t) {
    let n, r = -1, s, o = -1;
    if (this.blockTiles((l, a) => {
      let h = a + l.length;
      if (e >= a && e <= h) {
        if (l.isWidget() && t >= -1 && t <= 1) {
          if (l.flags & 32)
            return !0;
          l.flags & 16 && (n = void 0);
        }
        (a < e || e == h && (t < -1 ? l.length : l.covers(1))) && (!n || !l.isWidget() && n.isWidget()) && (n = l, r = e - a), (h > e || e == a && (t > 1 ? l.length : l.covers(-1))) && (!s || !l.isWidget() && s.isWidget()) && (s = l, o = e - a);
      }
    }), !n && !s)
      throw new Error("No tile at position " + e);
    return n && t < 0 || !s ? { tile: n, offset: r } : { tile: s, offset: o };
  }
}
class Rt extends qr {
  constructor(e, t) {
    super(e), this.wrapper = t;
  }
  isBlock() {
    return !0;
  }
  covers(e) {
    return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(e, t) {
    let n = new Rt(t || document.createElement(e.tagName), e);
    return t || (n.flags |= 4), n;
  }
}
class Qi extends qr {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, n) {
    let r = new Qi(t || document.createElement("div"), e);
    return (!t || !n) && (r.flags |= 4), r;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(e, t, n) {
    let r = null, s = -1, o = null, l = -1;
    function a(c, u) {
      for (let f = 0, O = 0; f < c.children.length && O <= u; f++) {
        let d = c.children[f], p = O + d.length;
        p >= u && (d.isComposite() ? a(d, u - O) : (!o || o.isHidden && (t > 0 || n && Fp(o, d))) && (p > u || d.flags & 32) ? (o = d, l = u - O) : (O < u || d.flags & 16 && !d.isHidden) && (r = d, s = u - O)), O = p;
      }
    }
    a(this, e);
    let h = (t < 0 ? r : o) || r || o;
    return h ? { tile: h, offset: h == r ? s : l } : null;
  }
  coordsIn(e, t) {
    let n = this.resolveInline(e, t, !0);
    return n ? n.tile.coordsIn(Math.max(0, n.offset), t) : Up(this);
  }
  domIn(e, t) {
    let n = this.resolveInline(e, t);
    if (n) {
      let { tile: r, offset: s } = n;
      if (this.dom.contains(r.dom))
        return r.isText() ? new Be(r.dom, Math.min(r.dom.nodeValue.length, s)) : r.domPosFor(s, r.flags & 16 ? 1 : r.flags & 32 ? -1 : t);
      let o = n.tile.parent, l = !1;
      for (let a of o.children) {
        if (l)
          return new Be(a.dom, 0);
        a == n.tile && (l = !0);
      }
    }
    return new Be(this.dom, 0);
  }
}
function Up(i) {
  let e = i.dom.lastChild;
  if (!e)
    return i.dom.getBoundingClientRect();
  let t = Nn(e);
  return t[t.length - 1] || null;
}
function Fp(i, e) {
  let t = i.coordsIn(0, 1), n = e.coordsIn(0, 1);
  return t && n && n.top < t.bottom;
}
class Se extends qr {
  constructor(e, t) {
    super(e), this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let n = new Se(t || document.createElement(e.tagName), e);
    return t || (n.flags |= 4), n;
  }
}
class Ft extends re {
  constructor(e, t) {
    super(e, t.length), this.text = t;
  }
  sync(e) {
    this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text));
  }
  isText() {
    return !0;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e, t) {
    let n = this.dom.nodeValue.length;
    e > n && (e = n);
    let r = e, s = e, o = 0;
    e == 0 && t < 0 || e == n && t >= 0 ? $.chrome || $.gecko || (e ? (r--, o = 1) : s < n && (s++, o = -1)) : t < 0 ? r-- : s < n && s++;
    let l = nn(this.dom, r, s).getClientRects();
    if (!l.length)
      return null;
    let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
    return $.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? ar(a, o < 0) : a || null;
  }
  static of(e, t) {
    let n = new Ft(t || document.createTextNode(e), e);
    return t || (n.flags |= 2), n;
  }
}
class Si extends re {
  constructor(e, t, n, r) {
    super(e, t, r), this.widget = n;
  }
  isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e) {
    return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0;
  }
  coordsIn(e, t) {
    return this.coordsInWidget(e, t, !1);
  }
  coordsInWidget(e, t, n) {
    let r = this.widget.coordsAt(this.dom, e, t);
    if (r)
      return r;
    if (n)
      return ar(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let s = this.dom.getClientRects(), o = null;
      if (!s.length)
        return null;
      let l = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let a = l ? s.length - 1 : 0; o = s[a], !(e > 0 ? a == 0 : a == s.length - 1 || o.top < o.bottom); a += l ? -1 : 1)
        ;
      return ar(o, !l);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return V.empty;
    let { root: e } = this;
    if (!e)
      return V.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, n, r, s) {
    return s || (s = e.toDOM(t), e.editable || (s.contentEditable = "false")), new Si(s, n, e, r);
  }
}
class cr extends re {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return !1;
  }
  get overrideDOMText() {
    return V.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class Hp {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, n) {
    let { tile: r, index: s, beforeBreak: o, parents: l } = this;
    for (; e || t > 0; )
      if (r.isComposite())
        if (o) {
          if (!e)
            break;
          n && n.break(), e--, o = !1;
        } else if (s == r.children.length) {
          if (!e && !l.length)
            break;
          n && n.leave(r), o = !!r.breakAfter, { tile: r, index: s } = l.pop(), s++;
        } else {
          let a = r.children[s], h = a.breakAfter;
          (t > 0 ? a.length <= e : a.length < e) && (!n || n.skip(a, 0, a.length) !== !1 || !a.isComposite) ? (o = !!h, s++, e -= a.length) : (l.push({ tile: r, index: s }), r = a, s = 0, n && a.isComposite() && n.enter(a));
        }
      else if (s == r.length)
        o = !!r.breakAfter, { tile: r, index: s } = l.pop(), s++;
      else if (e) {
        let a = Math.min(e, r.length - s);
        n && n.skip(r, s, s + a), e -= a, s += a;
      } else
        break;
    return this.tile = r, this.index = s, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class Kp {
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.wrapper = n, this.rank = r;
  }
}
class Jp {
  constructor(e, t, n) {
    this.cache = e, this.root = t, this.blockWrappers = n, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, n, r) {
    var s;
    this.flushBuffer();
    let o = this.ensureMarks(t, n), l = o.lastChild;
    if (l && l.isText() && !(l.flags & 8)) {
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
      let a = o.children[o.children.length - 1] = new Ft(l.dom, l.text + e);
      a.parent = o;
    } else
      o.append(r || Ft.of(e, (s = this.cache.find(Ft)) === null || s === void 0 ? void 0 : s.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let n = this.curLine;
    n.dom != t.line.dom && (n.setDOM(this.cache.reused.has(t.line) ? as(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let r = n;
    for (let o = t.marks.length - 1; o >= 0; o--) {
      let l = t.marks[o], a = r.lastChild;
      if (a instanceof Se && a.mark.eq(l.mark))
        a.dom != l.dom && a.setDOM(as(l.dom)), r = a;
      else {
        if (this.cache.reused.get(l)) {
          let c = re.get(l.dom);
          c && c.setDOM(as(l.dom));
        }
        let h = Se.of(l.mark, l.dom);
        r.append(h), r = h;
      }
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
    }
    let s = new Ft(e.text, e.text.nodeValue);
    s.flags |= 8, r.append(s);
  }
  addInlineWidget(e, t, n) {
    let r = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    r || this.flushBuffer();
    let s = this.ensureMarks(t, n);
    !r && !(e.flags & 16) && s.append(this.getBuffer(1)), s.append(e), this.pos += e.length, this.afterWidget = e;
  }
  addMark(e, t, n) {
    this.flushBuffer(), this.ensureMarks(t, n).append(e), this.pos += e.length, this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e, this.pos += e;
  }
  addLineStart(e, t) {
    var n;
    e || (e = xu);
    let r = Qi.start(e, t || ((n = this.cache.find(Qi)) === null || n === void 0 ? void 0 : n.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = r);
  }
  addLine(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(e) {
    this.blockPosCovered() || this.addLineStart(e);
  }
  ensureLine(e) {
    this.curLine || this.addLineStart(e);
  }
  ensureMarks(e, t) {
    var n;
    let r = this.curLine;
    for (let s = e.length - 1; s >= 0; s--) {
      let o = e[s], l;
      if (t > 0 && (l = r.lastChild) && l instanceof Se && l.mark.eq(o))
        r = l, t--;
      else {
        let a = Se.of(o, (n = this.cache.find(Se, (h) => h.mark.eq(o))) === null || n === void 0 ? void 0 : n.dom);
        r.append(a), r = a, t = 0;
      }
    }
    return r;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !pa(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !($.ios && pa(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        hs,
        0,
        32
        /* TileFlag.After */
      ) || new Si(
        hs.toDOM(),
        0,
        hs,
        32
        /* TileFlag.After */
      )), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let e = this.wrappers.length - 1; e >= 0; e--)
      this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
    for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next())
      if (e.to >= this.pos) {
        let t = new Kp(e.from, e.to, e.value, e.rank), n = this.wrappers.length;
        for (; n > 0 && (this.wrappers[n - 1].rank - t.rank || this.wrappers[n - 1].to - t.to) < 0; )
          n--;
        this.wrappers.splice(n, 0, t);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let n of this.wrappers) {
      let r = t.lastChild;
      if (n.from < this.pos && r instanceof Rt && r.wrapper.eq(n.wrapper))
        t = r;
      else {
        let s = Rt.of(n.wrapper, (e = this.cache.find(Rt, (o) => o.wrapper.eq(n.wrapper))) === null || e === void 0 ? void 0 : e.dom);
        t.append(s), t = s;
      }
    }
    return t;
  }
  blockPosCovered() {
    let e = this.lastBlock;
    return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
  }
  getBuffer(e) {
    let t = 2 | (e < 0 ? 16 : 32), n = this.cache.find(
      cr,
      void 0,
      1
      /* Reused.Full */
    );
    return n && (n.flags = t), n || new cr(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class em {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: r, lineBreak: s, done: o } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, o)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = r;
      let l = this.textOff = Math.min(e, r.length);
      return s ? null : r.slice(0, l);
    }
    let t = Math.min(this.text.length, this.textOff + e), n = this.text.slice(this.textOff, t);
    return this.textOff = t, n;
  }
}
const ur = [Si, Qi, Ft, Se, cr, Rt, Yr];
for (let i = 0; i < ur.length; i++)
  ur[i].bucket = i;
class tm {
  constructor(e) {
    this.view = e, this.buckets = ur.map(() => []), this.index = ur.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(e) {
    let t = e.constructor.bucket, n = this.buckets[t];
    n.length < 6 ? n.push(e) : n[
      this.index[t] = (this.index[t] + 1) % 6
      /* C.Bucket */
    ] = e;
  }
  find(e, t, n = 2) {
    let r = e.bucket, s = this.buckets[r], o = this.index[r];
    for (let l = s.length - 1; l >= 0; l--) {
      let a = (l + o) % s.length, h = s[a];
      if ((!t || t(h)) && !this.reused.has(h))
        return s.splice(a, 1), a < o && this.index[r]--, this.reused.set(h, n), h;
    }
    return null;
  }
  findWidget(e, t, n) {
    let r = this.buckets[0];
    if (r.length)
      for (let s = 0, o = 0; ; s++) {
        if (s == r.length) {
          if (o)
            return null;
          o = 1, s = 0;
        }
        let l = r[s];
        if (!this.reused.has(l) && (o == 0 ? l.widget.compare(e) : l.widget.constructor == e.constructor && e.updateDOM(l.dom, this.view)))
          return r.splice(s, 1), s < this.index[0] && this.index[0]--, this.reused.set(
            l,
            1
            /* Reused.Full */
          ), l.length = t, l.flags = l.flags & -498 | n, l;
      }
  }
  reuse(e) {
    return this.reused.set(
      e,
      1
      /* Reused.Full */
    ), e;
  }
  maybeReuse(e, t = 2) {
    if (!this.reused.has(e))
      return this.reused.set(e, t), e.dom;
  }
}
class im {
  constructor(e, t, n, r, s) {
    this.view = e, this.decorations = r, this.disallowBlockEffectsFor = s, this.openWidget = !1, this.openMarks = 0, this.cache = new tm(e), this.text = new em(e.state.doc), this.builder = new Jp(this.cache, new Yr(e, e.contentDOM), z.iter(n)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new Hp(t);
  }
  run(e, t) {
    let n = t && this.getCompositionContext(t.text);
    for (let r = 0, s = 0, o = 0; ; ) {
      let l = o < e.length ? e[o++] : null, a = l ? l.fromA : this.old.root.length;
      if (a > r) {
        let h = a - r;
        this.preserve(h, !o, !l), r = a, s += h;
      }
      if (!l)
        break;
      this.forward(l.fromA, l.toA), t && l.fromA <= t.range.fromA && l.toA >= t.range.toA ? (this.emit(s, t.range.fromB), this.builder.addComposition(t, n), this.emit(t.range.toB, l.toB)) : this.emit(s, l.toB), s = l.toB, r = l.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, n) {
    let r = sm(this.old), s = this.openMarks;
    this.old.advance(e, n ? 1 : -1, {
      skip: (o, l, a) => {
        if (o.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(a - l);
          else {
            let h = a > 0 || l < o.length ? Si.of(o.widget, this.view, a - l, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
            h.flags & 256 ? (h.flags &= -2, this.builder.addBlockWidget(h)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(h, r, s), s = r.length);
          }
        else if (o.isText())
          this.builder.ensureLine(null), !l && a == o.length ? this.builder.addText(o.text, r, s, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(l, a), r, s)), s = r.length;
        else if (o.isLine())
          o.flags &= -2, this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), this.builder.addLine(o);
        else if (o instanceof cr)
          this.cache.add(o);
        else if (o instanceof Se)
          this.builder.ensureLine(null), this.builder.addMark(o, r, s), this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), s = r.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (o) => {
        o.isLine() ? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o)) : (this.cache.add(o), o instanceof Se && r.unshift(o.mark)), this.openWidget = !1;
      },
      leave: (o) => {
        o.isLine() ? r.length && (r.length = s = 0) : o instanceof Se && (r.shift(), s = Math.min(s, r.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(e);
  }
  emit(e, t) {
    let n = null, r = this.builder, s = 0, o = z.spans(this.decorations, e, t, {
      point: (l, a, h, c, u, f) => {
        if (h instanceof ti) {
          if (this.disallowBlockEffectsFor[f]) {
            if (h.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (a > this.view.state.doc.lineAt(l).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (s = c.length, u > c.length)
            r.continueWidget(a - l);
          else {
            let O = h.widget || (h.block ? xi.block : xi.inline), d = nm(h), p = this.cache.findWidget(O, a - l, d) || Si.of(O, this.view, a - l, d);
            h.block ? (h.startSide > 0 && r.addLineStartIfNotCovered(n), r.addBlockWidget(p)) : (r.ensureLine(n), r.addInlineWidget(p, c, u));
          }
          n = null;
        } else
          n = rm(n, h);
        a > l && this.text.skip(a - l);
      },
      span: (l, a, h, c) => {
        for (let u = l; u < a; ) {
          let f = this.text.next(Math.min(512, a - u));
          f == null ? (r.addLineStartIfNotCovered(n), r.addBreak(), u++) : (r.ensureLine(n), r.addText(f, h, c), u += f.length), n = null;
        }
      }
    });
    r.addLineStartIfNotCovered(n), this.openWidget = o > s, this.openMarks = o;
  }
  forward(e, t) {
    this.old.advance(t - e, 1, {
      skip: (n, r, s) => {
        (n.isText() || s == n.length) && this.cache.add(n);
      },
      enter: (n) => this.cache.add(n),
      leave: () => {
      },
      break: () => {
      }
    });
  }
  getCompositionContext(e) {
    let t = [], n = null;
    for (let r = e.parentNode; ; r = r.parentNode) {
      let s = re.get(r);
      if (r == this.view.contentDOM)
        break;
      s instanceof Se ? t.push(s) : s != null && s.isLine() ? n = s : r.nodeName == "DIV" && !n && r != this.view.contentDOM ? n = new Qi(r, xu) : t.push(Se.of(new On({ tagName: r.nodeName.toLowerCase(), attributes: Zp(r) }), r));
    }
    return { line: n, marks: t };
  }
}
function pa(i, e) {
  let t = (n) => {
    for (let r of n.children)
      if ((e ? r.isText() : r.length) || t(r))
        return !0;
    return !1;
  };
  return t(i);
}
function nm(i) {
  let e = i.isReplace ? (i.startSide < 0 ? 64 : 0) | (i.endSide > 0 ? 128 : 0) : i.startSide > 0 ? 32 : 16;
  return i.block && (e |= 256), e;
}
const xu = { class: "cm-line" };
function rm(i, e) {
  let t = e.spec.attributes, n = e.spec.class;
  return !t && !n || (i || (i = { class: "cm-line" }), t && Uo(t, i), n && (i.class += " " + n)), i;
}
function sm(i) {
  let e = [];
  for (let t = i.parents.length; t > 1; t--) {
    let n = t == i.parents.length ? i.tile : i.parents[t].tile;
    n instanceof Se && e.push(n.mark);
  }
  return e;
}
function as(i) {
  let e = re.get(i);
  return e && e.setDOM(i.cloneNode()), i;
}
class xi extends fn {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
xi.inline = /* @__PURE__ */ new xi("span");
xi.block = /* @__PURE__ */ new xi("div");
const hs = /* @__PURE__ */ new class extends fn {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return !0;
  }
  get editable() {
    return !0;
  }
}();
class ma {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = q.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Yr(e, e.contentDOM), this.updateInner([new Me(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: c, toA: u }) => u < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let r = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? r = this.domChanged.newSel.head : !dm(e.changes, this.hasComposition) && !e.selectionSet && (r = e.state.selection.main.head));
    let s = r > -1 ? lm(this.view, e.changes, r) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: c, to: u } = this.hasComposition;
      n = new Me(c, u, e.changes.mapPos(c, -1), e.changes.mapPos(u, 1)).addToSet(n.slice());
    }
    this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null, ($.ie || $.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.blockWrappers;
    this.updateDeco();
    let a = cm(o, this.decorations, e.changes);
    a.length && (n = Me.extendWithRanges(n, a));
    let h = fm(l, this.blockWrappers, e.changes);
    return h.length && (n = Me.extendWithRanges(n, h)), s && !n.some((c) => c.fromA <= s.range.fromA && c.toA >= s.range.toA) && (n = s.range.addToSet(n.slice())), this.tile.flags & 2 && n.length == 0 ? !1 : (this.updateInner(n, s), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: n } = this.view;
    n.ignore(() => {
      if (t || e.length) {
        let o = this.tile, l = new im(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        this.tile = l.run(e, t), uo(o, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let s = $.chrome || $.ios ? { node: n.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(s), s && (s.written || n.selectionRange.focusNode != s.node || !this.tile.dom.contains(s.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let s of this.tile.children)
        s.isWidget() && s.widget instanceof cs && r.push(s.dom);
    n.updateGaps(r);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(mu) && (this.editContextFormatting = n.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: n } = this.tile, r = this.view.root.activeElement, s = r == n, o = !s && !(this.view.state.facet(pt) || n.tabIndex > -1) && In(n, this.view.observer.selectionRange) && !(r && n.contains(r));
    if (!(s || t || o))
      return;
    let l = this.forceSelection;
    this.forceSelection = !1;
    let a = this.view.state.selection.main, h, c;
    if (a.empty ? c = h = this.inlineDOMNearPos(a.anchor, a.assoc || 1) : (c = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1), h = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1)), $.gecko && a.empty && !this.hasComposition && om(h)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(f, h.node.childNodes[h.offset] || null)), h = c = new Be(f, 0), l = !0;
    }
    let u = this.view.observer.selectionRange;
    (l || !u.focusNode || (!Gi(h.node, h.offset, u.anchorNode, u.anchorOffset) || !Gi(c.node, c.offset, u.focusNode, u.focusOffset)) && !this.suppressWidgetCursorChange(u, a)) && (this.view.observer.ignore(() => {
      $.android && $.chrome && n.contains(u.focusNode) && Om(u.focusNode, n) && (n.blur(), n.focus({ preventScroll: !0 }));
      let f = tn(this.view.root);
      if (f) if (a.empty) {
        if ($.gecko) {
          let O = am(h.node, h.offset);
          if (O && O != 3) {
            let d = (O == 1 ? tu : iu)(h.node, h.offset);
            d && (h = new Be(d.node, d.offset));
          }
        }
        f.collapse(h.node, h.offset), a.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = a.bidiLevel);
      } else if (f.extend) {
        f.collapse(h.node, h.offset);
        try {
          f.extend(c.node, c.offset);
        } catch {
        }
      } else {
        let O = document.createRange();
        a.anchor > a.head && ([h, c] = [c, h]), O.setEnd(c.node, c.offset), O.setStart(h.node, h.offset), f.removeAllRanges(), f.addRange(O);
      }
      o && this.view.root.activeElement == n && (n.blur(), r && r.focus());
    }), this.view.observer.setSelectionRange(h, c)), this.impreciseAnchor = h.precise ? null : new Be(u.anchorNode, u.anchorOffset), this.impreciseHead = c.precise ? null : new Be(u.focusNode, u.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && Gi(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, n = tn(e.root), { anchorNode: r, anchorOffset: s } = e.observer.selectionRange;
    if (!n || !t.empty || !t.assoc || !n.modify)
      return;
    let o = this.lineAt(t.head, t.assoc);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(t.head + t.assoc, t.assoc);
    n.collapse(c.node, c.offset), n.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let u = e.observer.selectionRange;
    e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && n.collapse(r, s);
  }
  posFromDOM(e, t) {
    let n = this.tile.nearest(e);
    if (!n)
      return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let r = n.posAtStart;
    if (n.isComposite()) {
      let s;
      if (e == n.dom)
        s = n.dom.childNodes[t];
      else {
        let o = yt(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let l = e.parentNode;
          if (l == n.dom)
            break;
          o == 0 && l.firstChild != l.lastChild && (e == l.firstChild ? o = -1 : o = 1), e = l;
        }
        o < 0 ? s = e : s = e.nextSibling;
      }
      if (s == n.dom.firstChild)
        return r;
      for (; s && !re.get(s); )
        s = s.nextSibling;
      if (!s)
        return r + n.length;
      for (let o = 0, l = r; ; o++) {
        let a = n.children[o];
        if (a.dom == s)
          return l;
        l += a.length + a.breakAfter;
      }
    } else return n.isText() ? e == n.dom ? r + t : r + (t ? n.length : 0) : r;
  }
  domAtPos(e, t) {
    let { tile: n, offset: r } = this.tile.resolveBlock(e, t);
    return n.isWidget() ? n.domPosFor(e, t) : n.domIn(r, t);
  }
  inlineDOMNearPos(e, t) {
    let n, r = -1, s = !1, o, l = -1, a = !1;
    return this.tile.blockTiles((h, c) => {
      if (h.isWidget()) {
        if (h.flags & 32 && c >= e)
          return !0;
        h.flags & 16 && (s = !0);
      } else {
        let u = c + h.length;
        if (c <= e && (n = h, r = e - c, s = u < e), u >= e && !o && (o = h, l = e - c, a = c > e), c > e && o)
          return !0;
      }
    }), !n && !o ? this.domAtPos(e, t) : (s && o ? n = null : a && n && (o = null), n && t < 0 || !o ? n.domIn(r, t) : o.domIn(l, t));
  }
  coordsAt(e, t) {
    let { tile: n, offset: r } = this.tile.resolveBlock(e, t);
    return n.isWidget() ? n.widget instanceof cs ? null : n.coordsInWidget(r, t, !0) : n.coordsIn(r, t);
  }
  lineAt(e, t) {
    let { tile: n } = this.tile.resolveBlock(e, t);
    return n.isLine() ? n : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: n } = this.tile.resolveBlock(e, 1);
    if (!t.isLine())
      return null;
    function r(s, o) {
      if (s.isComposite())
        for (let l of s.children) {
          if (l.length >= o) {
            let a = r(l, o);
            if (a)
              return a;
          }
          if (o -= l.length, o < 0)
            break;
        }
      else if (s.isText() && o < s.length) {
        let l = he(s.text, o);
        if (l == o)
          return null;
        let a = nn(s.dom, o, l).getClientRects();
        for (let h = 0; h < a.length; h++) {
          let c = a[h];
          if (h == a.length - 1 || c.top < c.bottom && c.left < c.right)
            return c;
        }
      }
      return null;
    }
    return r(t, n);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: n, to: r } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == F.LTR, h = 0, c = (u, f, O) => {
      for (let d = 0; d < u.children.length && !(f > r); d++) {
        let p = u.children[d], g = f + p.length, b = p.dom.getBoundingClientRect(), { height: Q } = b;
        if (O && !d && (h += b.top - O.top), p instanceof Rt)
          g > n && c(p, f, b);
        else if (f >= n && (h > 0 && t.push(-h), t.push(Q + h), h = 0, o)) {
          let w = p.dom.lastChild, Z = w ? Nn(w) : [];
          if (Z.length) {
            let x = Z[Z.length - 1], C = a ? x.right - b.left : b.right - x.left;
            C > l && (l = C, this.minWidth = s, this.minWidthFrom = f, this.minWidthTo = g);
          }
        }
        O && d == u.children.length - 1 && (h += O.bottom - b.bottom), f = g + p.breakAfter;
      }
    };
    return c(this.tile, 0, null), t;
  }
  textDirectionAt(e) {
    let { tile: t } = this.tile.resolveBlock(e, 1);
    return getComputedStyle(t.dom).direction == "rtl" ? F.RTL : F.LTR;
  }
  measureTextSize() {
    let e = this.tile.blockTiles((o) => {
      if (o.isLine() && o.children.length && o.length <= 20) {
        let l = 0, a;
        for (let h of o.children) {
          if (!h.isText() || /[^ -~]/.test(h.text))
            return;
          let c = Nn(h.dom);
          if (c.length != 1)
            return;
          l += c[0].width, a = c[0].height;
        }
        if (l)
          return {
            lineHeight: o.dom.getBoundingClientRect().height,
            charWidth: l / o.length,
            textHeight: a
          };
      }
    });
    if (e)
      return e;
    let t = document.createElement("div"), n, r, s;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = Nn(t.firstChild)[0];
      n = t.getBoundingClientRect().height, r = o && o.width ? o.width / 27 : 7, s = o && o.height ? o.height : n, t.remove();
    }), { lineHeight: n, charWidth: r, textHeight: s };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let n = 0, r = 0; ; r++) {
      let s = r == t.viewports.length ? null : t.viewports[r], o = s ? s.from - 1 : this.view.state.doc.length;
      if (o > n) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
        e.push(q.replace({
          widget: new cs(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(n, o));
      }
      if (!s)
        break;
      n = s.to + 1;
    }
    return q.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(rn).map((s) => (this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s), n = !1, r = this.view.state.facet(yu).map((s, o) => {
      let l = typeof s == "function";
      return l && (n = !0), l ? s(this.view) : s;
    });
    for (r.length && (this.dynamicDecorationMap[e++] = n, t.push(z.join(r))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(bu).map((s) => typeof s == "function" ? s(this.view) : s);
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(pu))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (c) {
        Pe(this.view.state, c, "scroll handler");
      }
    let { range: t } = e, n = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), r;
    if (!n)
      return;
    !t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (n = {
      left: Math.min(n.left, r.left),
      top: Math.min(n.top, r.top),
      right: Math.max(n.right, r.right),
      bottom: Math.max(n.bottom, r.bottom)
    });
    let s = tl(this.view), o = {
      left: n.left - s.left,
      top: n.top - s.top,
      right: n.right + s.right,
      bottom: n.bottom + s.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Xp(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == F.LTR);
  }
  lineHasWidget(e) {
    let t = (n) => n.isWidget() || n.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    uo(this.tile);
  }
}
function uo(i, e) {
  let t = e == null ? void 0 : e.get(i);
  if (t != 1) {
    t == null && i.destroy();
    for (let n of i.children)
      uo(n, e);
  }
}
function om(i) {
  return i.node.nodeType == 1 && i.node.firstChild && (i.offset == 0 || i.node.childNodes[i.offset - 1].contentEditable == "false") && (i.offset == i.node.childNodes.length || i.node.childNodes[i.offset].contentEditable == "false");
}
function wu(i, e) {
  let t = i.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let n = tu(t.focusNode, t.focusOffset), r = iu(t.focusNode, t.focusOffset), s = n || r;
  if (r && n && r.node != n.node) {
    let l = re.get(r.node);
    if (!l || l.isText() && l.text != r.node.nodeValue)
      s = r;
    else if (i.docView.lastCompositionAfterCursor) {
      let a = re.get(n.node);
      !a || a.isText() && a.text != n.node.nodeValue || (s = r);
    }
  }
  if (i.docView.lastCompositionAfterCursor = s != n, !s)
    return null;
  let o = e - s.offset;
  return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
function lm(i, e, t) {
  let n = wu(i, t);
  if (!n)
    return null;
  let { node: r, from: s, to: o } = n, l = r.nodeValue;
  if (/[\n\r]/.test(l) || i.state.doc.sliceString(n.from, n.to) != l)
    return null;
  let a = e.invertedDesc;
  return { range: new Me(a.mapPos(s), a.mapPos(o), s, o), text: r };
}
function am(i, e) {
  return i.nodeType != 1 ? 0 : (e && i.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < i.childNodes.length && i.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let hm = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    ci(e, t, this.changes);
  }
  comparePoint(e, t) {
    ci(e, t, this.changes);
  }
  boundChange(e) {
    ci(e, e, this.changes);
  }
};
function cm(i, e, t) {
  let n = new hm();
  return z.compare(i, e, t, n), n.changes;
}
class um {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    ci(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    ci(e, e, this.changes);
  }
}
function fm(i, e, t) {
  let n = new um();
  return z.compare(i, e, t, n), n.changes;
}
function Om(i, e) {
  for (let t = i; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function dm(i, e) {
  let t = !1;
  return e && i.iterChangedRanges((n, r) => {
    n < e.to && r > e.from && (t = !0);
  }), t;
}
class cs extends fn {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function pm(i, e, t = 1) {
  let n = i.charCategorizer(e), r = i.doc.lineAt(e), s = e - r.from;
  if (r.length == 0)
    return y.cursor(e);
  s == 0 ? t = 1 : s == r.length && (t = -1);
  let o = s, l = s;
  t < 0 ? o = he(r.text, s, !1) : l = he(r.text, s);
  let a = n(r.text.slice(o, l));
  for (; o > 0; ) {
    let h = he(r.text, o, !1);
    if (n(r.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < r.length; ) {
    let h = he(r.text, l);
    if (n(r.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return y.range(o + r.from, l + r.from);
}
function mm(i, e, t, n, r) {
  let s = Math.round((n - e.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && t.height > i.defaultLineHeight * 1.5) {
    let l = i.viewState.heightOracle.textHeight, a = Math.floor((r - t.top - (i.defaultLineHeight - l) * 0.5) / l);
    s += a * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(t.from, t.to);
  return t.from + xp(o, s, i.state.tabSize);
}
function gm(i, e, t) {
  let n = i.lineBlockAt(e);
  if (Array.isArray(n.type)) {
    let r;
    for (let s of n.type) {
      if (s.from > e)
        break;
      if (!(s.to < e)) {
        if (s.from < e && s.to > e)
          return s;
        (!r || s.type == we.Text && (r.type != s.type || (t < 0 ? s.from < e : s.to > e))) && (r = s);
      }
    }
    return r || n;
  }
  return n;
}
function bm(i, e, t, n) {
  let r = gm(i, e.head, e.assoc || -1), s = !n || r.type != we.Text || !(i.lineWrapping || r.widgetLineBreaks) ? null : i.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (s) {
    let o = i.dom.getBoundingClientRect(), l = i.textDirectionAt(r.from), a = i.posAtCoords({
      x: t == (l == F.LTR) ? o.right - 1 : o.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (a != null)
      return y.cursor(a, t ? -1 : 1);
  }
  return y.cursor(t ? r.to : r.from, t ? -1 : 1);
}
function ga(i, e, t, n) {
  let r = i.state.doc.lineAt(e.head), s = i.bidiSpans(r), o = i.textDirectionAt(r.from);
  for (let l = e, a = null; ; ) {
    let h = Bp(r, s, o, l, t), c = lu;
    if (!h) {
      if (r.number == (t ? i.state.doc.lines : 1))
        return l;
      c = `
`, r = i.state.doc.line(r.number + (t ? 1 : -1)), s = i.bidiSpans(r), h = i.visualLineSide(r, !t);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!n)
        return h;
      a = n(c);
    }
    l = h;
  }
}
function ym(i, e, t) {
  let n = i.state.charCategorizer(e), r = n(t);
  return (s) => {
    let o = n(s);
    return r == Re.Space && (r = o), r == o;
  };
}
function Qm(i, e, t, n) {
  let r = e.head, s = t ? 1 : -1;
  if (r == (t ? i.state.doc.length : 0))
    return y.cursor(r, e.assoc);
  let o = e.goalColumn, l, a = i.contentDOM.getBoundingClientRect(), h = i.coordsAtPos(r, e.assoc || -1), c = i.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = s < 0 ? h.top : h.bottom;
  else {
    let O = i.viewState.lineBlockAt(r);
    o == null && (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (r - O.from))), l = (s < 0 ? O.top : O.bottom) + c;
  }
  let u = a.left + o, f = n ?? i.viewState.heightOracle.textHeight >> 1;
  for (let O = 0; ; O += 10) {
    let d = l + (f + O) * s, p = fo(i, { x: u, y: d }, !1, s);
    return y.cursor(p.pos, p.assoc, void 0, o);
  }
}
function Ui(i, e, t) {
  for (; ; ) {
    let n = 0;
    for (let r of i)
      r.between(e - 1, e + 1, (s, o, l) => {
        if (e > s && e < o) {
          let a = n || t || (e - s < o - e ? -1 : 1);
          e = a < 0 ? s : o, n = a;
        }
      });
    if (!n)
      return e;
  }
}
function $u(i, e) {
  let t = null;
  for (let n = 0; n < e.ranges.length; n++) {
    let r = e.ranges[n], s = null;
    if (r.empty) {
      let o = Ui(i, r.from, 0);
      o != r.from && (s = y.cursor(o, -1));
    } else {
      let o = Ui(i, r.from, -1), l = Ui(i, r.to, 1);
      (o != r.from || l != r.to) && (s = y.range(r.from == r.anchor ? o : l, r.from == r.head ? o : l));
    }
    s && (t || (t = e.ranges.slice()), t[n] = s);
  }
  return t ? y.create(t, e.mainIndex) : e;
}
function us(i, e, t) {
  let n = Ui(i.state.facet(pn).map((r) => r(i)), t.from, e.head > t.from ? -1 : 1);
  return n == t.from ? t : y.cursor(n, n < t.from ? 1 : -1);
}
class st {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function fo(i, e, t, n) {
  let r = i.contentDOM.getBoundingClientRect(), s = r.top + i.viewState.paddingTop, { x: o, y: l } = e, a = l - s, h;
  for (; ; ) {
    if (a < 0)
      return new st(0, 1);
    if (a > i.viewState.docHeight)
      return new st(i.state.doc.length, -1);
    if (h = i.elementAtHeight(a), n == null)
      break;
    if (h.type == we.Text) {
      let f = i.docView.coordsAt(n < 0 ? h.from : h.to, n);
      if (f && (n < 0 ? f.top <= a + s : f.bottom >= a + s))
        break;
    }
    let u = i.viewState.heightOracle.textHeight / 2;
    a = n > 0 ? h.bottom + u : h.top - u;
  }
  if (i.viewport.from >= h.to || i.viewport.to <= h.from) {
    if (t)
      return null;
    if (h.type == we.Text) {
      let u = mm(i, r, h, o, l);
      return new st(u, u == h.from ? 1 : -1);
    }
  }
  if (h.type != we.Text)
    return a < (h.top + h.bottom) / 2 ? new st(h.from, 1) : new st(h.to, -1);
  let c = i.docView.lineAt(h.from, 2);
  return (!c || c.length != h.length) && (c = i.docView.lineAt(h.from, -2)), vu(i, c, h.from, o, l);
}
function vu(i, e, t, n, r) {
  let s = -1, o = null, l = 1e9, a = 1e9, h = r, c = r, u = (f, O) => {
    for (let d = 0; d < f.length; d++) {
      let p = f[d];
      if (p.top == p.bottom)
        continue;
      let g = p.left > n ? p.left - n : p.right < n ? n - p.right : 0, b = p.top > r ? p.top - r : p.bottom < r ? r - p.bottom : 0;
      p.top <= c && p.bottom >= h && (h = Math.min(p.top, h), c = Math.max(p.bottom, c), b = 0), (s < 0 || (b - a || g - l) < 0) && (s >= 0 && a && l < g && o.top <= c - 2 && o.bottom >= h + 2 ? a = 0 : (s = O, l = g, a = b, o = p));
    }
  };
  if (e.isText()) {
    for (let O = 0; O < e.length; ) {
      let d = he(e.text, O);
      if (u(nn(e.dom, O, d).getClientRects(), O), !l && !a)
        break;
      O = d;
    }
    return n > (o.left + o.right) / 2 == (ba(i, s + t) == F.LTR) ? new st(t + he(e.text, s), -1) : new st(t + s, 1);
  } else {
    if (!e.length)
      return new st(t, 1);
    for (let p = 0; p < e.children.length; p++) {
      let g = e.children[p];
      if (g.flags & 48)
        continue;
      let b = (g.dom.nodeType == 1 ? g.dom : nn(g.dom, 0, g.length)).getClientRects();
      if (u(b, p), !l && !a)
        break;
    }
    let f = e.children[s], O = e.posBefore(f, t);
    return f.isComposite() || f.isText() ? vu(i, f, O, Math.max(o.left, Math.min(o.right, n)), r) : n > (o.left + o.right) / 2 == (ba(i, s + t) == F.LTR) ? new st(O + f.length, -1) : new st(O, 1);
  }
}
function ba(i, e) {
  let t = i.state.doc.lineAt(e);
  return i.bidiSpans(t)[mt.find(i.bidiSpans(t), e - t.from, -1, 1)].dir;
}
const Li = "￿";
class Sm {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(E.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Li;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let n = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(n, r);
      let s = this.text.length;
      this.readNode(r);
      let o = re.get(r), l = r.nextSibling;
      if (l == t) {
        o != null && o.breakAfter && !l && this.lineBreak();
        break;
      }
      let a = re.get(l);
      (o && a ? o.breakAfter : (o ? o.breakAfter : lr(r)) || lr(l) && (r.nodeName != "BR" || o != null && o.isWidget()) && this.text.length > s) && !wm(l, t) && this.lineBreak(), r = l;
    }
    return this.findPointBefore(n, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let n of this.points)
      n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
    for (let n = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1, o = 1, l;
      if (this.lineSeparator ? (s = t.indexOf(this.lineSeparator, n), o = this.lineSeparator.length) : (l = r.exec(t)) && (s = l.index, o = l[0].length), this.append(t.slice(n, s < 0 ? t.length : s)), s < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      n = s + o;
    }
  }
  readNode(e) {
    let t = re.get(e), n = t && t.overrideDOMText;
    if (n != null) {
      this.findPointInside(e, n.length);
      for (let r = n.iter(); !r.next().done; )
        r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let n of this.points)
      n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let n of this.points)
      (e.nodeType == 3 ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + (xm(e, n.node, n.offset) ? t : 0));
  }
}
function xm(i, e, t) {
  for (; ; ) {
    if (!e || t < yt(e))
      return !1;
    if (e == i)
      return !0;
    t = _t(e) + 1, e = e.parentNode;
  }
}
function wm(i, e) {
  let t;
  for (; !(i == e || !i); i = i.nextSibling) {
    let n = re.get(i);
    if (!(n != null && n.isWidget()))
      return !1;
    n && (t || (t = [])).push(n);
  }
  if (t)
    for (let n of t) {
      let r = n.overrideDOMText;
      if (r != null && r.length)
        return !1;
    }
  return !0;
}
class ya {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class $m {
  constructor(e, t, n, r) {
    this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = ku(e.docView.tile, t, n, 0))) {
      let l = s || o ? [] : km(e), a = new Sm(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Pm(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = s && s.node == l.focusNode && s.offset == l.focusOffset || !oo(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !oo(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), c = e.viewport;
      if (($.ios || $.chrome) && e.state.selection.main.empty && a != h && (c.from > 0 || c.to < e.state.doc.length)) {
        let u = Math.min(a, h), f = Math.max(a, h), O = c.from - u, d = c.to - f;
        (O == 0 || O == 1 || u == 0) && (d == 0 || d == -1 || f == e.state.doc.length) && (a = 0, h = e.state.doc.length);
      }
      e.inputState.composing > -1 && e.state.selection.ranges.length > 1 ? this.newSel = e.state.selection.replaceRange(y.range(h, a)) : this.newSel = y.single(h, a);
    }
  }
}
function ku(i, e, t, n) {
  if (i.isComposite()) {
    let r = -1, s = -1, o = -1, l = -1;
    for (let a = 0, h = n, c = n; a < i.children.length; a++) {
      let u = i.children[a], f = h + u.length;
      if (h < e && f > t)
        return ku(u, e, t, h);
      if (f >= e && r == -1 && (r = a, s = h), h > t && u.dom.parentNode == i.dom) {
        o = a, l = c;
        break;
      }
      c = f, h = f + u.breakAfter;
    }
    return {
      from: s,
      to: l < 0 ? n + i.length : l,
      startDOM: (r ? i.children[r - 1].dom.nextSibling : null) || i.dom.firstChild,
      endDOM: o < i.children.length && o >= 0 ? i.children[o].dom : null
    };
  } else return i.isText() ? { from: n, to: n + i.length, startDOM: i.dom, endDOM: i.dom.nextSibling } : null;
}
function Pu(i, e) {
  let t, { newSel: n } = e, r = i.state.selection.main, s = i.inputState.lastKeyTime > Date.now() - 100 ? i.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = r.from, h = null;
    (s === 8 || $.android && e.text.length < l - o) && (a = r.to, h = "end");
    let c = Tu(i.state.doc.sliceString(o, l, Li), e.text, a - o, h);
    c && ($.chrome && s == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == Li + Li && c.toB--, t = {
      from: o + c.from,
      to: o + c.toA,
      insert: V.of(e.text.slice(c.from, c.toB).split(Li))
    });
  } else n && (!i.hasFocus && i.state.facet(pt) || n.main.eq(r)) && (n = null);
  if (!t && !n)
    return !1;
  if (!t && e.typeOver && !r.empty && n && n.main.empty ? t = { from: r.from, to: r.to, insert: i.state.doc.slice(r.from, r.to) } : ($.mac || $.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && i.contentDOM.getAttribute("autocorrect") == "off" ? (n && t.insert.length == 2 && (n = y.single(n.main.anchor - 1, n.main.head - 1)), t = { from: t.from, to: t.to, insert: V.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= r.from && t.to <= r.to && (t.from != r.from || t.to != r.to) && r.to - r.from - (t.to - t.from) <= 4 ? t = {
    from: r.from,
    to: r.to,
    insert: i.state.doc.slice(r.from, t.from).append(t.insert).append(i.state.doc.slice(t.to, r.to))
  } : i.state.doc.lineAt(r.from).to < r.to && i.docView.lineHasWidget(r.to) && i.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: r.from,
    to: r.to,
    insert: i.state.toText(i.inputState.insertingText)
  } : $.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && i.lineWrapping && (n && (n = y.single(n.main.anchor - 1, n.main.head - 1)), t = { from: r.from, to: r.to, insert: V.of([" "]) }), t)
    return il(i, t, n, s);
  if (n && !n.main.eq(r)) {
    let o = !1, l = "select";
    return i.inputState.lastSelectionTime > Date.now() - 50 && (i.inputState.lastSelectionOrigin == "select" && (o = !0), l = i.inputState.lastSelectionOrigin, l == "select.pointer" && (n = $u(i.state.facet(pn).map((a) => a(i)), n))), i.dispatch({ selection: n, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function il(i, e, t, n = -1) {
  if ($.ios && i.inputState.flushIOSKey(e))
    return !0;
  let r = i.state.selection.main;
  if ($.android && (e.to == r.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == r.from || e.from == r.from - 1 && i.state.sliceDoc(e.from, r.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && ui(i.contentDOM, "Enter", 13) || (e.from == r.from - 1 && e.to == r.to && e.insert.length == 0 || n == 8 && e.insert.length < e.to - e.from && e.to > r.head) && ui(i.contentDOM, "Backspace", 8) || e.from == r.from && e.to == r.to + 1 && e.insert.length == 0 && ui(i.contentDOM, "Delete", 46)))
    return !0;
  let s = e.insert.toString();
  i.inputState.composing >= 0 && i.inputState.composing++;
  let o, l = () => o || (o = vm(i, e, t));
  return i.state.facet(fu).some((a) => a(i, e.from, e.to, s, l)) || i.dispatch(l()), !0;
}
function vm(i, e, t) {
  let n, r = i.state, s = r.selection.main, o = -1;
  if (e.from == e.to && e.from < s.from || e.from > s.to) {
    let a = e.from < s.from ? -1 : 1, h = a < 0 ? s.from : s.to, c = Ui(r.facet(pn).map((u) => u(i)), h, a);
    e.from == c && (o = c);
  }
  if (o > -1)
    n = {
      changes: e,
      selection: y.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && i.inputState.composing < 0) {
    let a = s.from < e.from ? r.sliceDoc(s.from, e.from) : "", h = s.to > e.to ? r.sliceDoc(e.to, s.to) : "";
    n = r.replaceSelection(i.state.toText(a + e.insert.sliceString(0, void 0, i.state.lineBreak) + h));
  } else {
    let a = r.changes(e), h = t && t.main.to <= a.newLength ? t.main : void 0;
    if (r.selection.ranges.length > 1 && (i.inputState.composing >= 0 || i.inputState.compositionPendingChange) && e.to <= s.to + 10 && e.to >= s.to - 10) {
      let c = i.state.sliceDoc(e.from, e.to), u, f = t && wu(i, t.main.head);
      if (f) {
        let d = e.insert.length - (e.to - e.from);
        u = { from: f.from, to: f.to - d };
      } else
        u = i.state.doc.lineAt(s.head);
      let O = s.to - e.to;
      n = r.changeByRange((d) => {
        if (d.from == s.from && d.to == s.to)
          return { changes: a, range: h || d.map(a) };
        let p = d.to - O, g = p - c.length;
        if (i.state.sliceDoc(g, p) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p >= u.from && g <= u.to)
          return { range: d };
        let b = r.changes({ from: g, to: p, insert: e.insert }), Q = d.to - s.to;
        return {
          changes: b,
          range: h ? y.range(Math.max(0, h.anchor + Q), Math.max(0, h.head + Q)) : d.map(b)
        };
      });
    } else
      n = {
        changes: a,
        selection: h && r.selection.replaceRange(h)
      };
  }
  let l = "input.type";
  return (i.composing || i.inputState.compositionPendingChange && i.inputState.compositionEndedAt > Date.now() - 50) && (i.inputState.compositionPendingChange = !1, l += ".compose", i.inputState.compositionFirstChange && (l += ".start", i.inputState.compositionFirstChange = !1)), r.update(n, { userEvent: l, scrollIntoView: !0 });
}
function Tu(i, e, t, n) {
  let r = Math.min(i.length, e.length), s = 0;
  for (; s < r && i.charCodeAt(s) == e.charCodeAt(s); )
    s++;
  if (s == r && i.length == e.length)
    return null;
  let o = i.length, l = e.length;
  for (; o > 0 && l > 0 && i.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (n == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    t -= o + a - s;
  }
  if (o < s && i.length < e.length) {
    let a = t <= s && t >= o ? s - t : 0;
    s -= a, l = s + (l - o), o = s;
  } else if (l < s) {
    let a = t <= s && t >= l ? s - t : 0;
    s -= a, o = s + (o - l), l = s;
  }
  return { from: s, toA: o, toB: l };
}
function km(i) {
  let e = [];
  if (i.root.activeElement != i.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: n, focusNode: r, focusOffset: s } = i.observer.selectionRange;
  return t && (e.push(new ya(t, n)), (r != t || s != n) && e.push(new ya(r, s))), e;
}
function Pm(i, e) {
  if (i.length == 0)
    return null;
  let t = i[0].pos, n = i.length == 2 ? i[1].pos : t;
  return t > -1 && n > -1 ? y.single(t + e, n + e) : null;
}
class Tm {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, $.safari && e.contentDOM.addEventListener("input", () => null), $.gecko && Lm(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Vm(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let n = this.handlers[e];
    if (n) {
      for (let r of n.observers)
        r(this.view, t);
      for (let r of n.handlers) {
        if (t.defaultPrevented)
          break;
        if (r(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Zm(e), n = this.handlers, r = this.view.contentDOM;
    for (let s in t)
      if (s != "scroll") {
        let o = !t[s].handlers.length, l = n[s];
        l && o != !l.handlers.length && (r.removeEventListener(s, this.handleEvent), l = null), l || r.addEventListener(s, this.handleEvent, { passive: o });
      }
    for (let s in n)
      s != "scroll" && !t[s] && r.removeEventListener(s, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Cu.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), $.android && $.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return $.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = Zu.find((n) => n.keyCode == e.keyCode)) && !e.ctrlKey || Cm.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, ui(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : $.safari && !$.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Qa(i, e) {
  return (t, n) => {
    try {
      return e.call(i, n, t);
    } catch (r) {
      Pe(t.state, r);
    }
  };
}
function Zm(i) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(n) {
    return e[n] || (e[n] = { observers: [], handlers: [] });
  }
  for (let n of i) {
    let r = n.spec, s = r && r.plugin.domEventHandlers, o = r && r.plugin.domEventObservers;
    if (s)
      for (let l in s) {
        let a = s[l];
        a && t(l).handlers.push(Qa(n.value, a));
      }
    if (o)
      for (let l in o) {
        let a = o[l];
        a && t(l).observers.push(Qa(n.value, a));
      }
  }
  for (let n in Ne)
    t(n).handlers.push(Ne[n]);
  for (let n in Ye)
    t(n).observers.push(Ye[n]);
  return e;
}
const Zu = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Cm = "dthko", Cu = [16, 17, 18, 20, 91, 92, 224, 225], Tn = 6;
function Zn(i) {
  return Math.max(0, i) * 0.7 + 8;
}
function Am(i, e) {
  return Math.max(Math.abs(i.clientX - e.clientX), Math.abs(i.clientY - e.clientY));
}
class Xm {
  constructor(e, t, n, r) {
    this.view = e, this.startEvent = t, this.style = n, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Rp(e.contentDOM), this.atoms = e.state.facet(pn).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(E.allowMultipleSelections) && Rm(e, t), this.dragging = zm(e, t) && Ru(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Am(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, n = 0, r = 0, s = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: s, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = tl(this.view);
    e.clientX - a.left <= r + Tn ? t = -Zn(r - e.clientX) : e.clientX + a.right >= o - Tn && (t = Zn(e.clientX - o)), e.clientY - a.top <= s + Tn ? n = -Zn(s - e.clientY) : e.clientY + a.bottom >= l - Tn && (n = Zn(e.clientY - l)), this.setScrollSpeed(t, n);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(e) {
    let { view: t } = this, n = $u(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !n.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: n,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Rm(i, e) {
  let t = i.state.facet(au);
  return t.length ? t[0](e) : $.mac ? e.metaKey : e.ctrlKey;
}
function Mm(i, e) {
  let t = i.state.facet(hu);
  return t.length ? t[0](e) : $.mac ? !e.altKey : !e.ctrlKey;
}
function zm(i, e) {
  let { main: t } = i.state.selection;
  if (t.empty)
    return !1;
  let n = tn(i.root);
  if (!n || n.rangeCount == 0)
    return !0;
  let r = n.getRangeAt(0).getClientRects();
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Vm(i, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, n; t != i.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (n = re.get(t)) && n.isWidget() && !n.isHidden && n.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const Ne = /* @__PURE__ */ Object.create(null), Ye = /* @__PURE__ */ Object.create(null), Au = $.ie && $.ie_version < 15 || $.ios && $.webkit_version < 604;
function _m(i) {
  let e = i.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    i.focus(), t.remove(), Xu(i, t.value);
  }, 50);
}
function Er(i, e, t) {
  for (let n of i.facet(e))
    t = n(t, i);
  return t;
}
function Xu(i, e) {
  e = Er(i.state, Ko, e);
  let { state: t } = i, n, r = 1, s = t.toText(e), o = s.lines == t.selection.ranges.length;
  if (Oo != null && t.selection.ranges.every((a) => a.empty) && Oo == s.toString()) {
    let a = -1;
    n = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let u = t.toText((o ? s.line(r++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: u },
        range: y.cursor(h.from + u.length)
      };
    });
  } else o ? n = t.changeByRange((a) => {
    let h = s.line(r++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: y.cursor(a.from + h.length)
    };
  }) : n = t.replaceSelection(s);
  i.dispatch(n, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Ye.scroll = (i) => {
  i.inputState.lastScrollTop = i.scrollDOM.scrollTop, i.inputState.lastScrollLeft = i.scrollDOM.scrollLeft;
};
Ne.keydown = (i, e) => (i.inputState.setSelectionOrigin("select"), e.keyCode == 27 && i.inputState.tabFocusMode != 0 && (i.inputState.tabFocusMode = Date.now() + 2e3), !1);
Ye.touchstart = (i, e) => {
  i.inputState.lastTouchTime = Date.now(), i.inputState.setSelectionOrigin("select.pointer");
};
Ye.touchmove = (i) => {
  i.inputState.setSelectionOrigin("select.pointer");
};
Ne.mousedown = (i, e) => {
  if (i.observer.flush(), i.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let n of i.state.facet(cu))
    if (t = n(i, e), t)
      break;
  if (!t && e.button == 0 && (t = Ym(i, e)), t) {
    let n = !i.hasFocus;
    i.inputState.startMouseSelection(new Xm(i, e, t, n)), n && i.observer.ignore(() => {
      Jc(i.contentDOM);
      let s = i.root.activeElement;
      s && !s.contains(i.contentDOM) && s.blur();
    });
    let r = i.inputState.mouseSelection;
    if (r)
      return r.start(e), r.dragging === !1;
  } else
    i.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function Sa(i, e, t, n) {
  if (n == 1)
    return y.cursor(e, t);
  if (n == 2)
    return pm(i.state, e, t);
  {
    let r = i.docView.lineAt(e, t), s = i.state.doc.lineAt(r ? r.posAtEnd : e), o = r ? r.posAtStart : s.from, l = r ? r.posAtEnd : s.to;
    return l < i.state.doc.length && l == s.to && l++, y.range(o, l);
  }
}
const qm = $.ie && $.ie_version <= 11;
let xa = null, wa = 0, $a = 0;
function Ru(i) {
  if (!qm)
    return i.detail;
  let e = xa, t = $a;
  return xa = i, $a = Date.now(), wa = !e || t > Date.now() - 400 && Math.abs(e.clientX - i.clientX) < 2 && Math.abs(e.clientY - i.clientY) < 2 ? (wa + 1) % 3 : 1;
}
function Ym(i, e) {
  let t = i.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), n = Ru(e), r = i.state.selection;
  return {
    update(s) {
      s.docChanged && (t.pos = s.changes.mapPos(t.pos), r = r.map(s.changes));
    },
    get(s, o, l) {
      let a = i.posAndSideAtCoords({ x: s.clientX, y: s.clientY }, !1), h, c = Sa(i, a.pos, a.assoc, n);
      if (t.pos != a.pos && !o) {
        let u = Sa(i, t.pos, t.assoc, n), f = Math.min(u.from, c.from), O = Math.max(u.to, c.to);
        c = f < c.from ? y.range(f, O) : y.range(O, f);
      }
      return o ? r.replaceRange(r.main.extend(c.from, c.to)) : l && n == 1 && r.ranges.length > 1 && (h = Em(r, a.pos)) ? h : l ? r.addRange(c) : y.create([c]);
    }
  };
}
function Em(i, e) {
  for (let t = 0; t < i.ranges.length; t++) {
    let { from: n, to: r } = i.ranges[t];
    if (n <= e && r >= e)
      return y.create(i.ranges.slice(0, t).concat(i.ranges.slice(t + 1)), i.mainIndex == t ? 0 : i.mainIndex - (i.mainIndex > t ? 1 : 0));
  }
  return null;
}
Ne.dragstart = (i, e) => {
  let { selection: { main: t } } = i.state;
  if (e.target.draggable) {
    let r = i.docView.tile.nearest(e.target);
    if (r && r.isWidget()) {
      let s = r.posAtStart, o = s + r.length;
      (s >= t.to || o <= t.from) && (t = y.range(s, o));
    }
  }
  let { inputState: n } = i;
  return n.mouseSelection && (n.mouseSelection.dragging = !0), n.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", Er(i.state, Jo, i.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
Ne.dragend = (i) => (i.inputState.draggedContent = null, !1);
function va(i, e, t, n) {
  if (t = Er(i.state, Ko, t), !t)
    return;
  let r = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: s } = i.inputState, o = n && s && Mm(i, e) ? { from: s.from, to: s.to } : null, l = { from: r, insert: t }, a = i.state.changes(o ? [o, l] : l);
  i.focus(), i.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), i.inputState.draggedContent = null;
}
Ne.drop = (i, e) => {
  if (!e.dataTransfer)
    return !1;
  if (i.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let n = Array(t.length), r = 0, s = () => {
      ++r == t.length && va(i, e, n.filter((o) => o != null).join(i.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = s, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (n[o] = l.result), s();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let n = e.dataTransfer.getData("Text");
    if (n)
      return va(i, e, n, !0), !0;
  }
  return !1;
};
Ne.paste = (i, e) => {
  if (i.state.readOnly)
    return !0;
  i.observer.flush();
  let t = Au ? null : e.clipboardData;
  return t ? (Xu(i, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (_m(i), !1);
};
function Wm(i, e) {
  let t = i.dom.parentNode;
  if (!t)
    return;
  let n = t.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = e, n.focus(), n.selectionEnd = e.length, n.selectionStart = 0, setTimeout(() => {
    n.remove(), i.focus();
  }, 50);
}
function Dm(i) {
  let e = [], t = [], n = !1;
  for (let r of i.selection.ranges)
    r.empty || (e.push(i.sliceDoc(r.from, r.to)), t.push(r));
  if (!e.length) {
    let r = -1;
    for (let { from: s } of i.selection.ranges) {
      let o = i.doc.lineAt(s);
      o.number > r && (e.push(o.text), t.push({ from: o.from, to: Math.min(i.doc.length, o.to + 1) })), r = o.number;
    }
    n = !0;
  }
  return { text: Er(i, Jo, e.join(i.lineBreak)), ranges: t, linewise: n };
}
let Oo = null;
Ne.copy = Ne.cut = (i, e) => {
  let { text: t, ranges: n, linewise: r } = Dm(i.state);
  if (!t && !r)
    return !1;
  Oo = r ? t : null, e.type == "cut" && !i.state.readOnly && i.dispatch({
    changes: n,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let s = Au ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", t), !0) : (Wm(i, t), !1);
};
const Mu = /* @__PURE__ */ $t.define();
function zu(i, e) {
  let t = [];
  for (let n of i.facet(Ou)) {
    let r = n(i, e);
    r && t.push(r);
  }
  return t.length ? i.update({ effects: t, annotations: Mu.of(!0) }) : null;
}
function Vu(i) {
  setTimeout(() => {
    let e = i.hasFocus;
    if (e != i.inputState.notifiedFocused) {
      let t = zu(i.state, e);
      t ? i.dispatch(t) : i.update([]);
    }
  }, 10);
}
Ye.focus = (i) => {
  i.inputState.lastFocusTime = Date.now(), !i.scrollDOM.scrollTop && (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) && (i.scrollDOM.scrollTop = i.inputState.lastScrollTop, i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft), Vu(i);
};
Ye.blur = (i) => {
  i.observer.clearSelectionRange(), Vu(i);
};
Ye.compositionstart = Ye.compositionupdate = (i) => {
  i.observer.editContext || (i.inputState.compositionFirstChange == null && (i.inputState.compositionFirstChange = !0), i.inputState.composing < 0 && (i.inputState.composing = 0));
};
Ye.compositionend = (i) => {
  i.observer.editContext || (i.inputState.composing = -1, i.inputState.compositionEndedAt = Date.now(), i.inputState.compositionPendingKey = !0, i.inputState.compositionPendingChange = i.observer.pendingRecords().length > 0, i.inputState.compositionFirstChange = null, $.chrome && $.android ? i.observer.flushSoon() : i.inputState.compositionPendingChange ? Promise.resolve().then(() => i.observer.flush()) : setTimeout(() => {
    i.inputState.composing < 0 && i.docView.hasComposition && i.update([]);
  }, 50));
};
Ye.contextmenu = (i) => {
  i.inputState.lastContextMenu = Date.now();
};
Ne.beforeinput = (i, e) => {
  var t, n;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (i.inputState.insertingText = e.data, i.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && i.observer.editContext) {
    let s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (s && o.length) {
      let l = o[0], a = i.posAtDOM(l.startContainer, l.startOffset), h = i.posAtDOM(l.endContainer, l.endOffset);
      return il(i, { from: a, to: h, insert: i.state.toText(s) }, null), !0;
    }
  }
  let r;
  if ($.chrome && $.android && (r = Zu.find((s) => s.inputType == e.inputType)) && (i.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let s = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 && i.hasFocus && (i.contentDOM.blur(), i.focus());
    }, 100);
  }
  return $.ios && e.inputType == "deleteContentForward" && i.observer.flushSoon(), $.safari && e.inputType == "insertText" && i.inputState.composing >= 0 && setTimeout(() => Ye.compositionend(i, e), 20), !1;
};
const ka = /* @__PURE__ */ new Set();
function Lm(i) {
  ka.has(i) || (ka.add(i), i.addEventListener("copy", () => {
  }), i.addEventListener("cut", () => {
  }));
}
const Pa = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let wi = !1;
function Ta() {
  wi = !1;
}
class Bm {
  constructor(e) {
    this.lineWrapping = e, this.doc = V.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (n += Math.max(0, Math.ceil((t - e - n * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * n;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Pa.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      r < 0 ? n++ : this.heightSamples[Math.floor(r * 10)] || (t = !0, this.heightSamples[Math.floor(r * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, n, r, s, o) {
    let l = Pa.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = n, this.textHeight = r, this.lineLength = s, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class jm {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Le {
  /**
  @internal
  */
  constructor(e, t, n, r, s) {
    this.from = e, this.length = t, this.top = n, this.height = r, this._content = s;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? we.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof ti ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Le(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var I = /* @__PURE__ */ (function(i) {
  return i[i.ByPos = 0] = "ByPos", i[i.ByHeight = 1] = "ByHeight", i[i.ByPosNoHeight = 2] = "ByPosNoHeight", i;
})(I || (I = {}));
const Gn = 1e-3;
class ge {
  constructor(e, t, n = 2) {
    this.length = e, this.height = t, this.flags = n;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Gn && (wi = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, n) {
    return ge.of(n);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, n, r) {
    let s = this, o = n.doc;
    for (let l = r.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: u } = r[l], f = s.lineAt(a, I.ByPosNoHeight, n.setDoc(t), 0, 0), O = f.to >= h ? f : s.lineAt(h, I.ByPosNoHeight, n, 0, 0);
      for (u += O.to - h, h = O.to; l > 0 && f.from <= r[l - 1].toA; )
        a = r[l - 1].fromA, c = r[l - 1].fromB, l--, a < f.from && (f = s.lineAt(a, I.ByPosNoHeight, n, 0, 0));
      c += f.from - a, a = f.from;
      let d = nl.build(n.setDoc(o), e, c, u);
      s = fr(s, s.replace(a, h, d));
    }
    return s.updateHeight(n, 0);
  }
  static empty() {
    return new ke(0, 0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, n = e.length, r = 0, s = 0;
    for (; ; )
      if (t == n)
        if (r > s * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), n += 1 + l.break, r -= l.size;
        } else if (s > r * 2) {
          let l = e[n];
          l.break ? e.splice(n, 1, l.left, null, l.right) : e.splice(n, 1, l.left, l.right), n += 2 + l.break, s -= l.size;
        } else
          break;
      else if (r < s) {
        let l = e[t++];
        l && (r += l.size);
      } else {
        let l = e[--n];
        l && (s += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, n++), new Nm(ge.of(e.slice(0, t)), o, ge.of(e.slice(n)));
  }
}
function fr(i, e) {
  return i == e ? i : (i.constructor != e.constructor && (wi = !0), e);
}
ge.prototype.size = 1;
const Im = /* @__PURE__ */ q.replace({});
class _u extends ge {
  constructor(e, t, n) {
    super(e, t), this.deco = n, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new Le(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, n, r) {
    return this.spaceAbove && e < n + this.spaceAbove ? new Le(r, 0, n, this.spaceAbove, Im) : this.mainBlock(n, r);
  }
  lineAt(e, t, n, r, s) {
    let o = this.mainBlock(r, s);
    return this.spaceAbove ? this.blockAt(0, n, r, s).join(o) : o;
  }
  forEachLine(e, t, n, r, s, o) {
    e <= s + this.length && t >= s && o(this.lineAt(0, I.ByPos, n, r, s));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, n = !1, r) {
    return r && r.from <= t && r.more && this.setMeasuredHeight(r), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class ke extends _u {
  constructor(e, t, n) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = n;
  }
  mainBlock(e, t) {
    return new Le(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, n) {
    let r = n[0];
    return n.length == 1 && (r instanceof ke || r instanceof le && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof le ? r = new ke(r.length, this.height, this.spaceAbove) : r.height = this.height, this.outdated || (r.outdated = !1), r) : ge.of(n);
  }
  updateHeight(e, t = 0, n = !1, r) {
    return r && r.from <= t && r.more ? this.setMeasuredHeight(r) : (n || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class le extends ge {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let n = e.doc.lineAt(t).number, r = e.doc.lineAt(t + this.length).number, s = r - n + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * s);
      o = a / s, this.length > s + 1 && (l = (this.height - a) / (this.length - s - 1));
    } else
      o = this.height / s;
    return { firstLine: n, lastLine: r, perLine: o, perChar: l };
  }
  blockAt(e, t, n, r) {
    let { firstLine: s, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, r);
    if (t.lineWrapping) {
      let h = r + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - n) / this.height)) * this.length)), c = t.doc.lineAt(h), u = l + c.length * a, f = Math.max(n, e - u / 2);
      return new Le(c.from, c.length, f, u, 0);
    } else {
      let h = Math.max(0, Math.min(o - s, Math.floor((e - n) / l))), { from: c, length: u } = t.doc.line(s + h);
      return new Le(c, u, n + l * h, l, 0);
    }
  }
  lineAt(e, t, n, r, s) {
    if (t == I.ByHeight)
      return this.blockAt(e, n, r, s);
    if (t == I.ByPosNoHeight) {
      let { from: O, to: d } = n.doc.lineAt(e);
      return new Le(O, d - O, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(n, s), h = n.doc.lineAt(e), c = l + h.length * a, u = h.number - o, f = r + l * u + a * (h.from - s - u);
    return new Le(h.from, h.length, Math.max(r, Math.min(f, r + this.height - c)), c, 0);
  }
  forEachLine(e, t, n, r, s, o) {
    e = Math.max(e, s), t = Math.min(t, s + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(n, s);
    for (let c = e, u = r; c <= t; ) {
      let f = n.doc.lineAt(c);
      if (c == e) {
        let d = f.number - l;
        u += a * d + h * (e - s - d);
      }
      let O = a + h * f.length;
      o(new Le(f.from, f.length, u, O, 0)), u += O, c = f.to + 1;
    }
  }
  replace(e, t, n) {
    let r = this.length - t;
    if (r > 0) {
      let s = n[n.length - 1];
      s instanceof le ? n[n.length - 1] = new le(s.length + r) : n.push(null, new le(r - 1));
    }
    if (e > 0) {
      let s = n[0];
      s instanceof le ? n[0] = new le(e + s.length) : n.unshift(new le(e - 1), null);
    }
    return ge.of(n);
  }
  decomposeLeft(e, t) {
    t.push(new le(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new le(this.length - e - 1));
  }
  updateHeight(e, t = 0, n = !1, r) {
    let s = t + this.length;
    if (r && r.from <= t + this.length && r.more) {
      let o = [], l = Math.max(t, r.from), a = -1;
      for (r.from > t && o.push(new le(r.from - t - 1).updateHeight(e, t)); l <= s && r.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let u = r.heights[r.index++], f = 0;
        u < 0 && (f = -u, u = r.heights[r.index++]), a == -1 ? a = u : Math.abs(u - a) >= Gn && (a = -2);
        let O = new ke(c, u, f);
        O.outdated = !1, o.push(O), l += c + 1;
      }
      l <= s && o.push(null, new le(s - l).updateHeight(e, l));
      let h = ge.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Gn || Math.abs(a - this.heightMetrics(e, t).perLine) >= Gn) && (wi = !0), fr(this, h);
    } else (n || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Nm extends ge {
  constructor(e, t, n) {
    super(e.length + t + n.length, e.height + n.height, t | (e.outdated || n.outdated ? 2 : 0)), this.left = e, this.right = n, this.size = e.size + n.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, n, r) {
    let s = n + this.left.height;
    return e < s ? this.left.blockAt(e, t, n, r) : this.right.blockAt(e, t, s, r + this.left.length + this.break);
  }
  lineAt(e, t, n, r, s) {
    let o = r + this.left.height, l = s + this.left.length + this.break, a = t == I.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, n, r, s) : this.right.lineAt(e, t, n, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = t == I.ByPosNoHeight ? I.ByPosNoHeight : I.ByPos;
    return a ? h.join(this.right.lineAt(l, c, n, o, l)) : this.left.lineAt(l, c, n, r, s).join(h);
  }
  forEachLine(e, t, n, r, s, o) {
    let l = r + this.left.height, a = s + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, n, r, s, o), t >= a && this.right.forEachLine(e, t, n, l, a, o);
    else {
      let h = this.lineAt(a, I.ByPos, n, r, s);
      e < h.from && this.left.forEachLine(e, h.from - 1, n, r, s, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, n, l, a, o);
    }
  }
  replace(e, t, n) {
    let r = this.left.length + this.break;
    if (t < r)
      return this.balanced(this.left.replace(e, t, n), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - r, t - r, n));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let l of n)
      s.push(l);
    if (e > 0 && Za(s, o - 1), t < this.length) {
      let l = s.length;
      this.decomposeRight(t, s), Za(s, l);
    }
    return ge.of(s);
  }
  decomposeLeft(e, t) {
    let n = this.left.length;
    if (e <= n)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (n++, e >= n && t.push(null)), e > n && this.right.decomposeLeft(e - n, t);
  }
  decomposeRight(e, t) {
    let n = this.left.length, r = n + this.break;
    if (e >= r)
      return this.right.decomposeRight(e - r, t);
    e < n && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? ge.of(this.break ? [e, null, t] : [e, t]) : (this.left = fr(this.left, e), this.right = fr(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, n = !1, r) {
    let { left: s, right: o } = this, l = t + s.length + this.break, a = null;
    return r && r.from <= t + s.length && r.more ? a = s = s.updateHeight(e, t, n, r) : s.updateHeight(e, t, n), r && r.from <= l + o.length && r.more ? a = o = o.updateHeight(e, l, n, r) : o.updateHeight(e, l, n), a ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Za(i, e) {
  let t, n;
  i[e] == null && (t = i[e - 1]) instanceof le && (n = i[e + 1]) instanceof le && i.splice(e - 1, 3, new le(t.length + 1 + n.length));
}
const Gm = 5;
class nl {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let n = Math.min(t, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof ke ? r.length += n - this.pos : (n > this.pos || !this.isCovered) && this.nodes.push(new ke(n - this.pos, -1, 0)), this.writtenTo = n, t > n && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, n) {
    if (e < t || n.heightRelevant) {
      let r = n.widget ? n.widget.estimatedHeight : 0, s = n.widget ? n.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let o = t - e;
      n.block ? this.addBlock(new _u(o, r, n)) : (o || s || r >= Gm) && this.addLineDeco(r, s, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new ke(this.pos - e, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let n = new le(t - e);
    return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof ke)
      return e;
    let t = new ke(0, -1, 0);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, n) {
    let r = this.ensureLine();
    r.length += n, r.collapsed += n, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += t, this.writtenTo = this.pos = this.pos + n;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof ke) && !this.isCovered ? this.nodes.push(new ke(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = e;
    for (let r of this.nodes)
      r instanceof ke && r.updateHeight(this.oracle, n), n += r ? r.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, n, r) {
    let s = new nl(n, e);
    return z.spans(t, n, r, s, 0), s.finish(n);
  }
}
function Um(i, e, t) {
  let n = new Fm();
  return z.compare(i, e, t, n, 0), n.changes;
}
class Fm {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, n, r) {
    (e < t || n && n.heightRelevant || r && r.heightRelevant) && ci(e, t, this.changes, 5);
  }
}
function Hm(i, e) {
  let t = i.getBoundingClientRect(), n = i.ownerDocument, r = n.defaultView || window, s = Math.max(0, t.left), o = Math.min(r.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(r.innerHeight, t.bottom);
  for (let h = i.parentNode; h && h != n.body; )
    if (h.nodeType == 1) {
      let c = h, u = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && u.overflow != "visible") {
        let f = c.getBoundingClientRect();
        s = Math.max(s, f.left), o = Math.min(o, f.right), l = Math.max(l, f.top), a = Math.min(h == i.parentNode ? r.innerHeight : a, f.bottom);
      }
      h = u.position == "absolute" || u.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: s - t.left,
    right: Math.max(s, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function Km(i) {
  let e = i.getBoundingClientRect(), t = i.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function Jm(i, e) {
  let t = i.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class fs {
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.size = n, this.displaySize = r;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let n = 0; n < e.length; n++) {
      let r = e[n], s = t[n];
      if (r.from != s.from || r.to != s.to || r.size != s.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return q.replace({
      widget: new eg(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class eg extends fn {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Ca {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Aa, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = F.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(el).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new Bm(t), this.stateDeco = e.facet(rn).filter((n) => typeof n != "function"), this.heightMap = ge.empty().applyChanges(this.stateDeco, V.empty, this.heightOracle.setDoc(e.doc), [new Me(0, 0, 0, e.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = q.set(this.lineGaps.map((n) => n.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let r = n ? t.head : t.anchor;
      if (!e.some(({ from: s, to: o }) => r >= s && r <= o)) {
        let { from: s, to: o } = this.lineBlockAt(r);
        e.push(new Cn(s, o));
      }
    }
    return this.viewports = e.sort((n, r) => n.from - r.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Aa : new rl(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(Bi(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(rn).filter((c) => typeof c != "function");
    let r = e.changedRanges, s = Me.extendWithRanges(r, Um(n, this.stateDeco, e ? e.changes : ne.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Ta(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), (this.heightMap.height != o || wi) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Ip) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, n = window.getComputedStyle(t), r = this.heightOracle, s = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? F.RTL : F.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: Z, scaleY: x } = Kc(t, l);
      (Z > 5e-3 && Math.abs(this.scaleX - Z) > 5e-3 || x > 5e-3 && Math.abs(this.scaleY - x) > 5e-3) && (this.scaleX = Z, this.scaleY = x, h |= 16, o = a = !0);
    }
    let u = (parseInt(n.paddingTop) || 0) * this.scaleY, f = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != u || this.paddingBottom != f) && (this.paddingTop = u, this.paddingBottom = f, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let O = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != O && (this.scrollAnchorHeight = -1, this.scrollTop = O), this.scrolledToBottom = eu(e.scrollDOM);
    let d = (this.printing ? Jm : Hm)(t, this.paddingTop), p = d.top - this.pixelViewport.top, g = d.bottom - this.pixelViewport.bottom;
    this.pixelViewport = d;
    let b = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (b != this.inView && (this.inView = b, b && (a = !0)), !this.inView && !this.scrollTarget && !Km(e.dom))
      return 0;
    let Q = l.width;
    if ((this.contentDOMWidth != Q || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let Z = e.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(Z) && (o = !0), o || r.lineWrapping && Math.abs(Q - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: x, charWidth: C, textHeight: v } = e.docView.measureTextSize();
        o = x > 0 && r.refresh(s, x, C, v, Math.max(5, Q / C), Z), o && (e.docView.minWidth = 0, h |= 16);
      }
      p > 0 && g > 0 ? c = Math.max(p, g) : p < 0 && g < 0 && (c = Math.min(p, g)), Ta();
      for (let x of this.viewports) {
        let C = x.from == this.viewport.from ? Z : e.docView.measureVisibleLineHeights(x);
        this.heightMap = (o ? ge.empty().applyChanges(this.stateDeco, V.empty, this.heightOracle, [new Me(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, o, new jm(x.from, C));
      }
      wi && (h |= 2);
    }
    let w = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return w && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || w) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), r = this.heightMap, s = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Cn(r.lineAt(o - n * 1e3, I.ByHeight, s, 0, 0).from, r.lineAt(l + (1 - n) * 1e3, I.ByHeight, s, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = r.lineAt(h, I.ByPos, s, 0, 0), f;
        t.y == "center" ? f = (u.top + u.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? f = u.top : f = u.bottom - c, a = new Cn(r.lineAt(f - 1e3 / 2, I.ByHeight, s, 0, 0).from, r.lineAt(f + c + 1e3 / 2, I.ByHeight, s, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let n = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
    return new Cn(this.heightMap.lineAt(n, I.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, I.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, n = 0) {
    if (!this.inView)
      return !0;
    let { top: r } = this.heightMap.lineAt(e, I.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(t, I.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || r <= o - Math.max(10, Math.min(
      -n,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || s >= l + Math.max(10, Math.min(
      n,
      250
      /* VP.MaxCoverMargin */
    ))) && r > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let n = [];
    for (let r of e)
      t.touchesRange(r.from, r.to) || n.push(new fs(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
    return n;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let n = this.heightOracle.lineWrapping, r = n ? 1e4 : 2e3, s = r >> 1, o = r << 1;
    if (this.defaultTextDirection != F.LTR && !n)
      return [];
    let l = [], a = (c, u, f, O) => {
      if (u - c < s)
        return;
      let d = this.state.selection.main, p = [d.from];
      d.empty || p.push(d.to);
      for (let b of p)
        if (b > c && b < u) {
          a(c, b - 10, f, O), a(b + 10, u, f, O);
          return;
        }
      let g = ig(e, (b) => b.from >= f.from && b.to <= f.to && Math.abs(b.from - c) < s && Math.abs(b.to - u) < s && !p.some((Q) => b.from < Q && b.to > Q));
      if (!g) {
        if (u < f.to && t && n && t.visibleRanges.some((w) => w.from <= u && w.to >= u)) {
          let w = t.moveToLineBoundary(y.cursor(u), !1, !0).head;
          w > c && (u = w);
        }
        let b = this.gapSize(f, c, u, O), Q = n || b < 2e6 ? b : 2e6;
        g = new fs(c, u, b, Q);
      }
      l.push(g);
    }, h = (c) => {
      if (c.length < o || c.type != we.Text)
        return;
      let u = tg(c.from, c.to, this.stateDeco);
      if (u.total < o)
        return;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, O, d;
      if (n) {
        let p = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, b;
        if (f != null) {
          let Q = Xn(u, f), w = ((this.visibleBottom - this.visibleTop) / 2 + p) / c.height;
          g = Q - w, b = Q + w;
        } else
          g = (this.visibleTop - c.top - p) / c.height, b = (this.visibleBottom - c.top + p) / c.height;
        O = An(u, g), d = An(u, b);
      } else {
        let p = u.total * this.heightOracle.charWidth, g = r * this.heightOracle.charWidth, b = 0;
        if (p > 2e6)
          for (let C of e)
            C.from >= c.from && C.from < c.to && C.size != C.displaySize && C.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = C.size - C.displaySize);
        let Q = this.pixelViewport.left + b, w = this.pixelViewport.right + b, Z, x;
        if (f != null) {
          let C = Xn(u, f), v = ((w - Q) / 2 + g) / p;
          Z = C - v, x = C + v;
        } else
          Z = (Q - g) / p, x = (w + g) / p;
        O = An(u, Z), d = An(u, x);
      }
      O > c.from && a(c.from, O, c, u), d < c.to && a(d, c.to, c, u);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, n, r) {
    let s = Xn(r, n) - Xn(r, t);
    return this.heightOracle.lineWrapping ? e.height * s : r.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    fs.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = q.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let n = [];
    z.spans(t, this.viewport.from, this.viewport.to, {
      span(s, o) {
        n.push({ from: s, to: o });
      },
      point() {
      }
    }, 20);
    let r = 0;
    if (n.length != this.visibleRanges.length)
      r = 12;
    else
      for (let s = 0; s < n.length && !(r & 8); s++) {
        let o = this.visibleRanges[s], l = n[s];
        (o.from != l.from || o.to != l.to) && (r |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (r |= 8));
      }
    return this.visibleRanges = n, r;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Bi(this.heightMap.lineAt(e, I.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || Bi(this.heightMap.lineAt(this.scaler.fromDOM(e), I.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Bi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Cn {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function tg(i, e, t) {
  let n = [], r = i, s = 0;
  return z.spans(t, i, e, {
    span() {
    },
    point(o, l) {
      o > r && (n.push({ from: r, to: o }), s += o - r), r = l;
    }
  }, 20), r < e && (n.push({ from: r, to: e }), s += e - r), { total: s, ranges: n };
}
function An({ total: i, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let n = Math.floor(i * t);
  for (let r = 0; ; r++) {
    let { from: s, to: o } = e[r], l = o - s;
    if (n <= l)
      return s + n;
    n -= l;
  }
}
function Xn(i, e) {
  let t = 0;
  for (let { from: n, to: r } of i.ranges) {
    if (e <= r) {
      t += e - n;
      break;
    }
    t += r - n;
  }
  return t / i.total;
}
function ig(i, e) {
  for (let t of i)
    if (e(t))
      return t;
}
const Aa = {
  toDOM(i) {
    return i;
  },
  fromDOM(i) {
    return i;
  },
  scale: 1,
  eq(i) {
    return i == this;
  }
};
class rl {
  constructor(e, t, n) {
    let r = 0, s = 0, o = 0;
    this.viewports = n.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, I.ByPos, e, 0, 0).top, c = t.lineAt(a, I.ByPos, e, 0, 0).bottom;
      return r += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r) / (t.height - r);
    for (let l of this.viewports)
      l.domTop = o + (l.top - s) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), s = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, n = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.top)
        return r + (e - n) * this.scale;
      if (e <= s.bottom)
        return s.domTop + (e - s.top);
      n = s.bottom, r = s.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, n = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.domTop)
        return n + (e - r) / this.scale;
      if (e <= s.domBottom)
        return s.top + (e - s.domTop);
      n = s.bottom, r = s.domBottom;
    }
  }
  eq(e) {
    return e instanceof rl ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, n) => t.from == e.viewports[n].from && t.to == e.viewports[n].to) : !1;
  }
}
function Bi(i, e) {
  if (e.scale == 1)
    return i;
  let t = e.toDOM(i.top), n = e.toDOM(i.bottom);
  return new Le(i.from, i.length, t, n - t, Array.isArray(i._content) ? i._content.map((r) => Bi(r, e)) : i._content);
}
const Rn = /* @__PURE__ */ k.define({ combine: (i) => i.join(" ") }), po = /* @__PURE__ */ k.define({ combine: (i) => i.indexOf(!0) > -1 }), mo = /* @__PURE__ */ zt.newName(), qu = /* @__PURE__ */ zt.newName(), Yu = /* @__PURE__ */ zt.newName(), Eu = { "&light": "." + qu, "&dark": "." + Yu };
function go(i, e, t) {
  return new zt(e, {
    finish(n) {
      return /&/.test(n) ? n.replace(/&\w*/, (r) => {
        if (r == "&")
          return i;
        if (!t || !t[r])
          throw new RangeError(`Unsupported selector: ${r}`);
        return t[r];
      }) : i + " " + n;
    }
  });
}
const ng = /* @__PURE__ */ go("." + mo, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // https://github.com/codemirror/dev/issues/456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Eu), rg = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Os = $.ie && $.ie_version <= 11;
class sg {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new Mp(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let n of t)
        this.queue.push(n);
      ($.ie && $.ie_version <= 11 || $.ios && e.composing) && t.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && $.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !($.chrome && $.chrome_version < 126) && (this.editContext = new lg(e), e.state.facet(pt) && (e.contentDOM.editContext = this.editContext.editContext)), Os && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: n } = this, r = this.selectionRange;
    if (n.state.facet(pt) ? n.root.activeElement != this.dom : !In(this.dom, r))
      return;
    let s = r.anchorNode && n.docView.tile.nearest(r.anchorNode);
    if (s && s.isWidget() && s.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    ($.ie && $.ie_version <= 11 || $.android && $.chrome) && !n.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    r.focusNode && Gi(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = tn(e.root);
    if (!t)
      return !1;
    let n = $.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && og(this.view, t) || t;
    if (!n || this.selectionRange.eq(n))
      return !1;
    let r = In(this.dom, n);
    return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Vp(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), r && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let n = this.dom; n; )
      if (n.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == n ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(n), n = n.assignedSlot || n.parentNode;
      else if (n.nodeType == 11)
        n = n.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let n of this.scrollTargets)
        n.removeEventListener("scroll", this.onScroll);
      for (let n of this.scrollTargets = t)
        n.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, rg), Os && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Os && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var n;
    if (!this.delayedAndroidKey) {
      let r = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && ui(this.dom, s.key, s.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((n = this.delayedAndroidKey) === null || n === void 0) && n.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, n = -1, r = !1;
    for (let s of e) {
      let o = this.readMutation(s);
      o && (o.typeOver && (r = !0), t == -1 ? { from: t, to: n } = o : (t = Math.min(o.from, t), n = Math.max(o.to, n)));
    }
    return { from: t, to: n, typeOver: r };
  }
  readChange() {
    let { from: e, to: t, typeOver: n } = this.processRecords(), r = this.selectionChanged && In(this.dom, this.selectionRange);
    if (e < 0 && !r)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let s = new $m(this.view, e, t, n);
    return this.view.docView.domChanged = { newSel: s.newSel ? s.newSel.main : null }, s;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let n = this.view.state, r = Pu(this.view, t);
    return this.view.state == n && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let n = Xa(t, e.previousSibling || e.target.previousSibling, -1), r = Xa(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: n ? t.posAfter(n) : t.posAtStart,
        to: r ? t.posBefore(r) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(pt) != e.state.facet(pt) && (e.view.contentDOM.editContext = e.state.facet(pt) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, n;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
    for (let r of this.scrollTargets)
      r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Xa(i, e, t) {
  for (; e; ) {
    let n = re.get(e);
    if (n && n.parent == i)
      return n;
    let r = e.parentNode;
    e = r != i.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Ra(i, e) {
  let t = e.startContainer, n = e.startOffset, r = e.endContainer, s = e.endOffset, o = i.docView.domAtPos(i.state.selection.main.anchor, 1);
  return Gi(o.node, o.offset, r, s) && ([t, n, r, s] = [r, s, t, n]), { anchorNode: t, anchorOffset: n, focusNode: r, focusOffset: s };
}
function og(i, e) {
  if (e.getComposedRanges) {
    let r = e.getComposedRanges(i.root)[0];
    if (r)
      return Ra(i, r);
  }
  let t = null;
  function n(r) {
    r.preventDefault(), r.stopImmediatePropagation(), t = r.getTargetRanges()[0];
  }
  return i.contentDOM.addEventListener("beforeinput", n, !0), i.dom.ownerDocument.execCommand("indent"), i.contentDOM.removeEventListener("beforeinput", n, !0), t ? Ra(i, t) : null;
}
class lg {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (n) => {
      let r = e.state.selection.main, { anchor: s, head: o } = r, l = this.toEditorPos(n.updateRangeStart), a = this.toEditorPos(n.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: n.updateRangeStart, editorBase: l, drifted: !1 });
      let h = a - l > n.text.length;
      l == this.from && s < this.from ? l = s : a == this.to && s > this.to && (a = s);
      let c = Tu(e.state.sliceDoc(l, a), n.text, (h ? r.from : r.to) - l, h ? "end" : null);
      if (!c) {
        let f = y.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd));
        f.main.eq(r) || e.dispatch({ selection: f, userEvent: "select" });
        return;
      }
      let u = {
        from: c.from + l,
        to: c.toA + l,
        insert: V.of(n.text.slice(c.from, c.toB).split(`
`))
      };
      if (($.mac || $.android) && u.from == o - 1 && /^\. ?$/.test(n.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (u = { from: l, to: a, insert: V.of([n.text.replace(".", " ")]) }), this.pendingContextChange = u, !e.state.readOnly) {
        let f = this.to - this.from + (u.to - u.from + u.insert.length);
        il(e, u, y.single(this.toEditorPos(n.selectionStart, f), this.toEditorPos(n.selectionEnd, f)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), u.from < u.to && !u.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, n.updateRangeStart - 1), Math.min(t.text.length, n.updateRangeStart + 1))) && this.handlers.compositionend(n);
    }, this.handlers.characterboundsupdate = (n) => {
      let r = [], s = null;
      for (let o = this.toEditorPos(n.rangeStart), l = this.toEditorPos(n.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        s = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || s || new DOMRect(), r.push(s);
      }
      t.updateCharacterBounds(n.rangeStart, r);
    }, this.handlers.textformatupdate = (n) => {
      let r = [];
      for (let s of n.getTextFormats()) {
        let o = s.underlineStyle, l = s.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(s.rangeStart), h = this.toEditorPos(s.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            r.push(q.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: mu.of(q.set(r)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: n } = this.composing;
        this.composing = null, n && this.reset(e.state);
      }
    };
    for (let n in this.handlers)
      t.addEventListener(n, this.handlers[n]);
    this.measureReq = { read: (n) => {
      this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());
      let r = tn(n.root);
      r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, n = !1, r = this.pendingContextChange;
    return e.changes.iterChanges((s, o, l, a, h) => {
      if (n)
        return;
      let c = h.length - (o - s);
      if (r && o >= r.to)
        if (r.from == s && r.to == o && r.insert.eq(h)) {
          r = this.pendingContextChange = null, t += c, this.to += c;
          return;
        } else
          r = null, this.revertPending(e.state);
      if (s += t, o += t, o <= this.from)
        this.from += c, this.to += c;
      else if (s < this.to) {
        if (s < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          n = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(s), this.toContextPos(o), h.toString()), this.to += c;
      }
      t += c;
    }), r && !n && this.revertPending(e.state), !n;
  }
  update(e) {
    let t = this.pendingContextChange, n = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(n.from, n.to) && e.transactions.some((r) => !r.isUserEvent("input.type") && r.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, n = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), r = this.toContextPos(t.head);
    (this.editContext.selectionStart != n || this.editContext.selectionEnd != r) && this.editContext.updateSelection(n, r);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let n = this.composing;
    return n && n.drifted ? n.editorBase + (e - n.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class T {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: n } = e;
    this.dispatchTransactions = e.dispatchTransactions || n && ((r) => r.forEach((s) => n(s, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || zp(e.parent) || document, this.viewState = new Ca(e.state || E.create(e)), e.scrollTo && e.scrollTo.is(Pn) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(si).map((r) => new ls(r));
    for (let r of this.plugins)
      r.update(this);
    this.observer = new sg(this), this.inputState = new Tm(this), this.inputState.ensureHandlers(this.plugins), this.docView = new ma(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof te ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, n = !1, r, s = this.state;
    for (let f of e) {
      if (f.startState != s)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s = f.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((f) => f.annotation(Mu)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = zu(s, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (c = null)) : this.observer.clear(), s.facet(E.phrases) != this.state.facet(E.phrases))
      return this.setState(s);
    r = hr.create(this, s, e), r.flags |= l;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (u && (u = u.map(f.changes)), f.scrollIntoView) {
          let { main: O } = f.state.selection;
          u = new fi(O.empty ? O : y.cursor(O.head, O.head > O.anchor ? -1 : 1));
        }
        for (let O of f.effects)
          O.is(Pn) && (u = O.value.clip(this.state));
      }
      this.viewState.update(r, u), this.bidiCache = Or.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), t = this.docView.update(r), this.state.facet(Di) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet(Rn) != r.state.facet(Rn) && (this.viewState.mustMeasureContent = !0), (t || n || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !r.empty)
      for (let f of this.state.facet(co))
        try {
          f(r);
        } catch (O) {
          Pe(this.state, O, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !Pu(this, c) && h.force && ui(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let n of this.plugins)
        n.destroy(this);
      this.viewState = new Ca(e), this.plugins = e.facet(si).map((n) => new ls(n)), this.pluginMap.clear();
      for (let n of this.plugins)
        n.update(this);
      this.docView.destroy(), this.docView = new ma(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(si), n = e.state.facet(si);
    if (t != n) {
      let r = [];
      for (let s of n) {
        let o = t.indexOf(s);
        if (o < 0)
          r.push(new ls(s));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, r.push(l);
        }
      }
      for (let s of this.plugins)
        s.mustUpdate != e && s.destroy(this);
      this.plugins = r, this.pluginMap.clear();
    } else
      for (let r of this.plugins)
        r.mustUpdate = e;
    for (let r = 0; r < this.plugins.length; r++)
      this.plugins[r].update(this);
    t != n && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (n) {
          Pe(this.state, n, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, n = this.scrollDOM, r = n.scrollTop * this.scaleY, { scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
    Math.abs(r - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (eu(n))
            s = -1, o = this.viewState.heightMap.height;
          else {
            let O = this.viewState.scrollAnchorAt(r);
            s = O.from, o = O.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((O) => {
          try {
            return O.read(this);
          } catch (d) {
            return Pe(this.state, d), Ma;
          }
        }), u = hr.create(this, this.state, []), f = !1;
        u.flags |= a, t ? t.flags |= a : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), f = this.docView.update(u), f && this.docViewUpdate());
        for (let O = 0; O < h.length; O++)
          if (c[O] != Ma)
            try {
              let d = h[O];
              d.write && d.write(c[O], this);
            } catch (d) {
              Pe(this.state, d);
            }
        if (f && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let d = (s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o;
              if (d > 1 || d < -1) {
                r = r + d, n.scrollTop = r / this.scaleY, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(co))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return mo + " " + (this.state.facet(po) ? Yu : qu) + " " + this.state.facet(Rn);
  }
  updateAttrs() {
    let e = za(this, gu, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(pt) ? "true" : "false",
      class: "cm-content",
      style: `${$.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), za(this, el, t);
    let n = this.observer.ignore(() => {
      let r = ca(this.contentDOM, this.contentAttrs, t), s = ca(this.dom, this.editorAttrs, e);
      return r || s;
    });
    return this.editorAttrs = e, this.contentAttrs = t, n;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let n of e)
      for (let r of n.effects)
        if (r.is(T.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = r.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Di);
    let e = this.state.facet(T.cspNonce);
    zt.mount(this.root, this.styleModules.concat(ng).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((n) => n.plugin == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, n) {
    return us(this, e, ga(this, e, t, n));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return us(this, e, ga(this, e, t, (n) => ym(this, e.head, n)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let n = this.bidiSpans(e), r = this.textDirectionAt(e.from), s = n[t ? n.length - 1 : 0];
    return y.cursor(s.side(t, r) + e.from, s.forward(!t, r) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, n = !0) {
    return bm(this, e, t, n);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, n) {
    return us(this, e, Qm(this, e, t, n));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e, t = 1) {
    return this.docView.domAtPos(e, t);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    this.readMeasured();
    let n = fo(this, e, t);
    return n && n.pos;
  }
  posAndSideAtCoords(e, t = !0) {
    return this.readMeasured(), fo(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(e, t);
    if (!n || n.left == n.right)
      return n;
    let r = this.state.doc.lineAt(e), s = this.bidiSpans(r), o = s[mt.find(s, e - r.from, -1, t)];
    return ar(n, o.dir == F.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(du) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > ag)
      return ou(e.length);
    let t = this.textDirectionAt(e.from), n;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == t && (s.fresh || su(s.isolates, n = Oa(this, e))))
        return s.order;
    n || (n = Oa(this, e));
    let r = Lp(e.text, t, n);
    return this.bidiCache.push(new Or(e.from, e.to, t, n, !0, r)), r;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || $.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Jc(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    return Pn.of(new fi(typeof e == "number" ? y.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, n = this.viewState.scrollAnchorAt(e);
    return Pn.of(new fi(y.cursor(n.from), "start", "start", n.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return Te.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return Te.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let n = zt.newName(), r = [Rn.of(n), Di.of(go(`.${n}`, e))];
    return t && t.dark && r.push(po.of(!0)), r;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return Ai.lowest(Di.of(go("." + mo, e, Eu)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let n = e.querySelector(".cm-content"), r = n && re.get(n) || re.get(e);
    return ((t = r == null ? void 0 : r.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
T.styleModule = Di;
T.inputHandler = fu;
T.clipboardInputFilter = Ko;
T.clipboardOutputFilter = Jo;
T.scrollHandler = pu;
T.focusChangeEffect = Ou;
T.perLineTextDirection = du;
T.exceptionSink = uu;
T.updateListener = co;
T.editable = pt;
T.mouseSelectionStyle = cu;
T.dragMovesSelection = hu;
T.clickAddsSelectionRange = au;
T.decorations = rn;
T.blockWrappers = bu;
T.outerDecorations = yu;
T.atomicRanges = pn;
T.bidiIsolatedRanges = Qu;
T.scrollMargins = Su;
T.darkTheme = po;
T.cspNonce = /* @__PURE__ */ k.define({ combine: (i) => i.length ? i[0] : "" });
T.contentAttributes = el;
T.editorAttributes = gu;
T.lineWrapping = /* @__PURE__ */ T.contentAttributes.of({ class: "cm-lineWrapping" });
T.announce = /* @__PURE__ */ _.define();
const ag = 4096, Ma = {};
class Or {
  constructor(e, t, n, r, s, o) {
    this.from = e, this.to = t, this.dir = n, this.isolates = r, this.fresh = s, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((s) => s.fresh))
      return e;
    let n = [], r = e.length ? e[e.length - 1].dir : F.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == r && !t.touchesRange(o.from, o.to) && n.push(new Or(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return n;
  }
}
function za(i, e, t) {
  for (let n = i.state.facet(e), r = n.length - 1; r >= 0; r--) {
    let s = n[r], o = typeof s == "function" ? s(i) : s;
    o && Uo(o, t);
  }
  return t;
}
const hg = $.mac ? "mac" : $.windows ? "win" : $.linux ? "linux" : "key";
function cg(i, e) {
  const t = i.split(/-(?!$)/);
  let n = t[t.length - 1];
  n == "Space" && (n = " ");
  let r, s, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      s = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? l = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), l && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Mn(i, e, t) {
  return e.altKey && (i = "Alt-" + i), e.ctrlKey && (i = "Ctrl-" + i), e.metaKey && (i = "Meta-" + i), t !== !1 && e.shiftKey && (i = "Shift-" + i), i;
}
const ug = /* @__PURE__ */ Ai.default(/* @__PURE__ */ T.domEventHandlers({
  keydown(i, e) {
    return pg(fg(e.state), i, e, "editor");
  }
})), mn = /* @__PURE__ */ k.define({ enables: ug }), Va = /* @__PURE__ */ new WeakMap();
function fg(i) {
  let e = i.facet(mn), t = Va.get(e);
  return t || Va.set(e, t = dg(e.reduce((n, r) => n.concat(r), []))), t;
}
let Ct = null;
const Og = 4e3;
function dg(i, e = hg) {
  let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = (o, l) => {
    let a = n[o];
    if (a == null)
      n[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (o, l, a, h, c) => {
    var u, f;
    let O = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), d = l.split(/ (?!$)/).map((b) => cg(b, e));
    for (let b = 1; b < d.length; b++) {
      let Q = d.slice(0, b).join(" ");
      r(Q, !0), O[Q] || (O[Q] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(w) => {
          let Z = Ct = { view: w, prefix: Q, scope: o };
          return setTimeout(() => {
            Ct == Z && (Ct = null);
          }, Og), !0;
        }]
      });
    }
    let p = d.join(" ");
    r(p, !1);
    let g = O[p] || (O[p] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((f = (u = O._any) === null || u === void 0 ? void 0 : u.run) === null || f === void 0 ? void 0 : f.slice()) || []
    });
    a && g.run.push(a), h && (g.preventDefault = !0), c && (g.stopPropagation = !0);
  };
  for (let o of i) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: u } = o;
        for (let f in c)
          c[f].run.push((O) => u(O, bo));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        s(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && s(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let bo = null;
function pg(i, e, t, n) {
  bo = e;
  let r = kp(e), s = it(r, 0), o = Zt(s) == r.length && r != " ", l = "", a = !1, h = !1, c = !1;
  Ct && Ct.view == t && Ct.scope == n && (l = Ct.prefix + " ", Cu.indexOf(e.keyCode) < 0 && (h = !0, Ct = null));
  let u = /* @__PURE__ */ new Set(), f = (g) => {
    if (g) {
      for (let b of g.run)
        if (!u.has(b) && (u.add(b), b(t)))
          return g.stopPropagation && (c = !0), !0;
      g.preventDefault && (g.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, O = i[n], d, p;
  return O && (f(O[l + Mn(r, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !($.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !($.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (d = Vt[e.keyCode]) && d != r ? (f(O[l + Mn(d, e, !0)]) || e.shiftKey && (p = Ji[e.keyCode]) != r && p != d && f(O[l + Mn(p, e, !1)])) && (a = !0) : o && e.shiftKey && f(O[l + Mn(r, e, !0)]) && (a = !0), !a && f(O._any) && (a = !0)), h && (a = !0), a && c && e.stopPropagation(), bo = null, a;
}
function mg() {
  return bg;
}
const gg = /* @__PURE__ */ q.line({ class: "cm-activeLine" }), bg = /* @__PURE__ */ Te.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.docChanged || i.selectionSet) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = -1, t = [];
    for (let n of i.state.selection.ranges) {
      let r = i.lineBlockAt(n.head);
      r.from > e && (t.push(gg.range(r.from)), e = r.from);
    }
    return q.set(t);
  }
}, {
  decorations: (i) => i.decorations
}), zn = "-10000px";
class yg {
  constructor(e, t, n, r) {
    this.facet = t, this.createTooltipView = n, this.removeTooltipView = r, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let s = null;
    this.tooltipViews = this.tooltips.map((o) => s = n(o, s));
  }
  update(e, t) {
    var n;
    let r = e.state.facet(this.facet), s = r.filter((a) => a);
    if (r === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < s.length; a++) {
      let h = s[a], c = -1;
      if (h) {
        for (let u = 0; u < this.tooltips.length; u++) {
          let f = this.tooltips[u];
          f && f.create == h.create && (c = u);
        }
        if (c < 0)
          o[a] = this.createTooltipView(h, a ? o[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let u = o[a] = this.tooltipViews[c];
          l && (l[a] = t[c]), u.update && u.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (n = a.destroy) === null || n === void 0 || n.call(a));
    return t && (l.forEach((a, h) => t[h] = a), t.length = l.length), this.input = r, this.tooltips = s, this.tooltipViews = o, !0;
  }
}
function Qg(i) {
  let e = i.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const ds = /* @__PURE__ */ k.define({
  combine: (i) => {
    var e, t, n;
    return {
      position: $.ios ? "absolute" : ((e = i.find((r) => r.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = i.find((r) => r.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((n = i.find((r) => r.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || Qg
    };
  }
}), _a = /* @__PURE__ */ new WeakMap(), Wu = /* @__PURE__ */ Te.fromClass(class {
  constructor(i) {
    this.view = i, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = i.state.facet(ds);
    this.position = e.position, this.parent = e.parent, this.classes = i.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new yg(i, sl, (t, n) => this.createTooltip(t, n), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), i.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let i of this.manager.tooltipViews)
        this.intersectionObserver.observe(i.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(i) {
    i.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(i, this.above);
    e && this.observeIntersection();
    let t = e || i.geometryChanged, n = i.state.facet(ds);
    if (n.position != this.position && !this.madeAbsolute) {
      this.position = n.position;
      for (let r of this.manager.tooltipViews)
        r.dom.style.position = this.position;
      t = !0;
    }
    if (n.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = n.parent, this.createContainer();
      for (let r of this.manager.tooltipViews)
        this.container.appendChild(r.dom);
      t = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(i, e) {
    let t = i.create(this.view), n = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), i.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let r = document.createElement("div");
      r.className = "cm-tooltip-arrow", t.dom.appendChild(r);
    }
    return t.dom.style.position = this.position, t.dom.style.top = zn, t.dom.style.left = "0px", this.container.insertBefore(t.dom, n), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var i, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let n of this.manager.tooltipViews)
      n.dom.remove(), (i = n.destroy) === null || i === void 0 || i.call(n);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let i = 1, e = 1, t = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: s } = this.manager.tooltipViews[0];
      if ($.safari) {
        let o = s.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      } else
        t = !!s.offsetParent && s.offsetParent != this.container.ownerDocument.body;
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let s = this.parent.getBoundingClientRect();
        s.width && s.height && (i = s.width / this.parent.offsetWidth, e = s.height / this.parent.offsetHeight);
      } else
        ({ scaleX: i, scaleY: e } = this.view.viewState);
    let n = this.view.scrollDOM.getBoundingClientRect(), r = tl(this.view);
    return {
      visible: {
        left: n.left + r.left,
        top: n.top + r.top,
        right: n.right - r.right,
        bottom: n.bottom - r.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((s, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(s.pos) : this.view.coordsAtPos(s.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: s }) => s.getBoundingClientRect()),
      space: this.view.state.facet(ds).tooltipSpace(this.view),
      scaleX: i,
      scaleY: e,
      makeAbsolute: t
    };
  }
  writeMeasure(i) {
    var e;
    if (i.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: t, space: n, scaleX: r, scaleY: s } = i, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, u = i.pos[l], f = i.size[l];
      if (!u || a.clip !== !1 && (u.bottom <= Math.max(t.top, n.top) || u.top >= Math.min(t.bottom, n.bottom) || u.right < Math.max(t.left, n.left) - 0.1 || u.left > Math.min(t.right, n.right) + 0.1)) {
        c.style.top = zn;
        continue;
      }
      let O = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, d = O ? 7 : 0, p = f.right - f.left, g = (e = _a.get(h)) !== null && e !== void 0 ? e : f.bottom - f.top, b = h.offset || xg, Q = this.view.textDirection == F.LTR, w = f.width > n.right - n.left ? Q ? n.left : n.right - f.width : Q ? Math.max(n.left, Math.min(u.left - (O ? 14 : 0) + b.x, n.right - p)) : Math.min(Math.max(n.left, u.left - p + (O ? 14 : 0) - b.x), n.right - p), Z = this.above[l];
      !a.strictSide && (Z ? u.top - g - d - b.y < n.top : u.bottom + g + d + b.y > n.bottom) && Z == n.bottom - u.bottom > u.top - n.top && (Z = this.above[l] = !Z);
      let x = (Z ? u.top - n.top : n.bottom - u.bottom) - d;
      if (x < g && h.resize !== !1) {
        if (x < this.view.defaultLineHeight) {
          c.style.top = zn;
          continue;
        }
        _a.set(h, g), c.style.height = (g = x) / s + "px";
      } else c.style.height && (c.style.height = "");
      let C = Z ? u.top - g - d - b.y : u.bottom + d + b.y, v = w + p;
      if (h.overlap !== !0)
        for (let Y of o)
          Y.left < v && Y.right > w && Y.top < C + g && Y.bottom > C && (C = Z ? Y.top - g - 2 - d : Y.bottom + d + 2);
      if (this.position == "absolute" ? (c.style.top = (C - i.parent.top) / s + "px", qa(c, (w - i.parent.left) / r)) : (c.style.top = C / s + "px", qa(c, w / r)), O) {
        let Y = u.left + (Q ? b.x : -b.x) - (w + 14 - 7);
        O.style.left = Y / r + "px";
      }
      h.overlap !== !0 && o.push({ left: w, top: C, right: v, bottom: C + g }), c.classList.toggle("cm-tooltip-above", Z), c.classList.toggle("cm-tooltip-below", !Z), h.positioned && h.positioned(i.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let i of this.manager.tooltipViews)
        i.dom.style.top = zn;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function qa(i, e) {
  let t = parseInt(i.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (i.style.left = e + "px");
}
const Sg = /* @__PURE__ */ T.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: "14px",
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), xg = { x: 0, y: 0 }, sl = /* @__PURE__ */ k.define({
  enables: [Wu, Sg]
});
function Du(i, e) {
  let t = i.plugin(Wu);
  if (!t)
    return null;
  let n = t.manager.tooltips.indexOf(e);
  return n < 0 ? null : t.manager.tooltipViews[n];
}
class qt extends Mt {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
qt.prototype.elementClass = "";
qt.prototype.toDOM = void 0;
qt.prototype.mapMode = fe.TrackBefore;
qt.prototype.startSide = qt.prototype.endSide = -1;
qt.prototype.point = !0;
const Un = /* @__PURE__ */ k.define(), wg = /* @__PURE__ */ k.define(), Fn = /* @__PURE__ */ k.define(), Ya = /* @__PURE__ */ k.define({
  combine: (i) => i.some((e) => e)
});
function $g(i) {
  return [
    vg
  ];
}
const vg = /* @__PURE__ */ Te.fromClass(class {
  constructor(i) {
    this.view = i, this.domAfter = null, this.prevViewport = i.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = i.state.facet(Fn).map((e) => new Wa(i, e)), this.fixed = !i.state.facet(Ya);
    for (let e of this.gutters)
      e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), i.scrollDOM.insertBefore(this.dom, i.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(i) {
    if (this.updateGutters(i)) {
      let e = this.prevViewport, t = i.view.viewport, n = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(n < (t.to - t.from) * 0.8);
    }
    if (i.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(Ya) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = i.view.viewport;
  }
  syncGutters(i) {
    let e = this.dom.nextSibling;
    i && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = z.iter(this.view.state.facet(Un), this.view.viewport.from), n = [], r = this.gutters.map((s) => new kg(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks)
      if (n.length && (n = []), Array.isArray(s.type)) {
        let o = !0;
        for (let l of s.type)
          if (l.type == we.Text && o) {
            yo(t, n, l.from);
            for (let a of r)
              a.line(this.view, l, n);
            o = !1;
          } else if (l.widget)
            for (let a of r)
              a.widget(this.view, l);
      } else if (s.type == we.Text) {
        yo(t, n, s.from);
        for (let o of r)
          o.line(this.view, s, n);
      } else if (s.widget)
        for (let o of r)
          o.widget(this.view, s);
    for (let s of r)
      s.finish();
    i && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(i) {
    let e = i.startState.facet(Fn), t = i.state.facet(Fn), n = i.docChanged || i.heightChanged || i.viewportChanged || !z.eq(i.startState.facet(Un), i.state.facet(Un), i.view.viewport.from, i.view.viewport.to);
    if (e == t)
      for (let r of this.gutters)
        r.update(i) && (n = !0);
    else {
      n = !0;
      let r = [];
      for (let s of t) {
        let o = e.indexOf(s);
        o < 0 ? r.push(new Wa(this.view, s)) : (this.gutters[o].update(i), r.push(this.gutters[o]));
      }
      for (let s of this.gutters)
        s.dom.remove(), r.indexOf(s) < 0 && s.destroy();
      for (let s of r)
        s.config.side == "after" ? this.getDOMAfter().appendChild(s.dom) : this.dom.appendChild(s.dom);
      this.gutters = r;
    }
    return n;
  }
  destroy() {
    for (let i of this.gutters)
      i.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (i) => T.scrollMargins.of((e) => {
    let t = e.plugin(i);
    if (!t || t.gutters.length == 0 || !t.fixed)
      return null;
    let n = t.dom.offsetWidth * e.scaleX, r = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    return e.textDirection == F.LTR ? { left: n, right: r } : { right: n, left: r };
  })
});
function Ea(i) {
  return Array.isArray(i) ? i : [i];
}
function yo(i, e, t) {
  for (; i.value && i.from <= t; )
    i.from == t && e.push(i.value), i.next();
}
class kg {
  constructor(e, t, n) {
    this.gutter = e, this.height = n, this.i = 0, this.cursor = z.iter(e.markers, t.from);
  }
  addElement(e, t, n) {
    let { gutter: r } = this, s = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == r.elements.length) {
      let l = new Lu(e, o, s, n);
      r.elements.push(l), r.dom.appendChild(l.dom);
    } else
      r.elements[this.i].update(e, o, s, n);
    this.height = t.bottom, this.i++;
  }
  line(e, t, n) {
    let r = [];
    yo(this.cursor, r, t.from), n.length && (r = r.concat(n));
    let s = this.gutter.config.lineMarker(e, t, r);
    s && r.unshift(s);
    let o = this.gutter;
    r.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, r);
  }
  widget(e, t) {
    let n = this.gutter.config.widgetMarker(e, t.widget, t), r = n ? [n] : null;
    for (let s of e.state.facet(wg)) {
      let o = s(e, t.widget, t);
      o && (r || (r = [])).push(o);
    }
    r && this.addElement(e, t, r);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Wa {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let n in t.domEventHandlers)
      this.dom.addEventListener(n, (r) => {
        let s = r.target, o;
        if (s != this.dom && this.dom.contains(s)) {
          for (; s.parentNode != this.dom; )
            s = s.parentNode;
          let a = s.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = r.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[n](e, l, r) && r.preventDefault();
      });
    this.markers = Ea(t.markers(e)), t.initialSpacer && (this.spacer = new Lu(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = Ea(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let n = e.view.viewport;
    return !z.eq(this.markers, t, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Lu {
  constructor(e, t, n, r) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, n, r);
  }
  update(e, t, n, r) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), Pg(this.markers, r) || this.setMarkers(e, r);
  }
  setMarkers(e, t) {
    let n = "cm-gutterElement", r = this.dom.firstChild;
    for (let s = 0, o = 0; ; ) {
      let l = o, a = s < t.length ? t[s++] : null, h = !1;
      if (a) {
        let c = a.elementClass;
        c && (n += " " + c);
        for (let u = o; u < this.markers.length; u++)
          if (this.markers[u].compare(a)) {
            l = u, h = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(r);
          let u = r.nextSibling;
          r.remove(), r = u;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? r = r.nextSibling : this.dom.insertBefore(a.toDOM(e), r)), h && o++;
    }
    this.dom.className = n, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Pg(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (!i[t].compare(e[t]))
      return !1;
  return !0;
}
const Tg = /* @__PURE__ */ k.define(), Zg = /* @__PURE__ */ k.define(), oi = /* @__PURE__ */ k.define({
  combine(i) {
    return zr(i, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let n = Object.assign({}, e);
        for (let r in t) {
          let s = n[r], o = t[r];
          n[r] = s ? (l, a, h) => s(l, a, h) || o(l, a, h) : o;
        }
        return n;
      }
    });
  }
});
class ps extends qt {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function ms(i, e) {
  return i.state.facet(oi).formatNumber(e, i.state);
}
const Cg = /* @__PURE__ */ Fn.compute([oi], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Tg);
  },
  lineMarker(e, t, n) {
    return n.some((r) => r.toDOM) ? null : new ps(ms(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, n) => {
    for (let r of e.state.facet(Zg)) {
      let s = r(e, t, n);
      if (s)
        return s;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(oi) != e.state.facet(oi),
  initialSpacer(e) {
    return new ps(ms(e, Da(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = ms(t.view, Da(t.view.state.doc.lines));
    return n == e.number ? e : new ps(n);
  },
  domEventHandlers: i.facet(oi).domEventHandlers,
  side: "before"
}));
function Ag(i = {}) {
  return [
    oi.of(i),
    $g(),
    Cg
  ];
}
function Da(i) {
  let e = 9;
  for (; e < i; )
    e = e * 10 + 9;
  return e;
}
const Xg = /* @__PURE__ */ new class extends qt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Rg = /* @__PURE__ */ Un.compute(["selection"], (i) => {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let r = i.doc.lineAt(n.head).from;
    r > t && (t = r, e.push(Xg.range(r)));
  }
  return z.of(e);
});
function Mg() {
  return Rg;
}
const Bu = 1024;
let zg = 0;
class ze {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class R {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = zg++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = e.combine || null;
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = be.match(e)), (t) => {
      let n = e(t);
      return n === void 0 ? null : [this, n];
    };
  }
}
R.closedBy = new R({ deserialize: (i) => i.split(" ") });
R.openedBy = new R({ deserialize: (i) => i.split(" ") });
R.group = new R({ deserialize: (i) => i.split(" ") });
R.isolate = new R({ deserialize: (i) => {
  if (i && i != "rtl" && i != "ltr" && i != "auto")
    throw new RangeError("Invalid value for isolate: " + i);
  return i || "auto";
} });
R.contextHash = new R({ perNode: !0 });
R.lookAhead = new R({ perNode: !0 });
R.mounted = new R({ perNode: !0 });
class sn {
  constructor(e, t, n) {
    this.tree = e, this.overlay = t, this.parser = n;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[R.mounted.id];
  }
}
const Vg = /* @__PURE__ */ Object.create(null);
class be {
  /**
  @internal
  */
  constructor(e, t, n, r = 0) {
    this.name = e, this.props = t, this.id = n, this.flags = r;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Vg, n = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), r = new be(e.name || "", t, e.id, n);
    if (e.props) {
      for (let s of e.props)
        if (Array.isArray(s) || (s = s(r)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[s[0].id] = s[1];
        }
    }
    return r;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(R.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let n in e)
      for (let r of n.split(" "))
        t[r] = e[n];
    return (n) => {
      for (let r = n.prop(R.group), s = -1; s < (r ? r.length : 0); s++) {
        let o = t[s < 0 ? n.name : r[s]];
        if (o)
          return o;
      }
    };
  }
}
be.none = new be(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class ol {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...e) {
    let t = [];
    for (let n of this.types) {
      let r = null;
      for (let s of e) {
        let o = s(n);
        if (o) {
          r || (r = Object.assign({}, n.props));
          let l = o[1], a = o[0];
          a.combine && a.id in r && (l = a.combine(r[a.id], l)), r[a.id] = l;
        }
      }
      t.push(r ? new be(n.name, r, n.id, n.flags) : n);
    }
    return new ol(t);
  }
}
const Vn = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap();
var N;
(function(i) {
  i[i.ExcludeBuffers = 1] = "ExcludeBuffers", i[i.IncludeAnonymous = 2] = "IncludeAnonymous", i[i.IgnoreMounts = 4] = "IgnoreMounts", i[i.IgnoreOverlays = 8] = "IgnoreOverlays";
})(N || (N = {}));
class H {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, n, r, s) {
    if (this.type = e, this.children = t, this.positions = n, this.length = r, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = sn.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let n of this.children) {
      let r = n.toString();
      r && (t && (t += ","), t += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new dr(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, n = 0) {
    let r = Vn.get(this) || this.topNode, s = new dr(r);
    return s.moveTo(e, t), Vn.set(this, s._tree), s;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new Oe(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let n = on(Vn.get(this) || this.topNode, e, t, !1);
    return Vn.set(this, n), n;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let n = on(La.get(this) || this.topNode, e, t, !0);
    return La.set(this, n), n;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return Yg(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: n, from: r = 0, to: s = this.length } = e, o = e.mode || 0, l = (o & N.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | N.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= s && a.to >= r && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && n && (l || !a.type.isAnonymous) && n(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : hl(be.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, n, r) => new H(this.type, t, n, r, this.propValues), e.makeTree || ((t, n, r) => new H(be.none, t, n, r)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return Eg(e);
  }
}
H.empty = new H(be.none, [], [], 0);
class ll {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new ll(this.buffer, this.index);
  }
}
class Yt {
  /**
  Create a tree buffer.
  */
  constructor(e, t, n) {
    this.buffer = e, this.length = t, this.set = n;
  }
  /**
  @internal
  */
  get type() {
    return be.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], n = this.buffer[e + 3], r = this.set.types[t], s = r.name;
    if (/\W/.test(s) && !r.isError && (s = JSON.stringify(s)), e += 4, n == e)
      return s;
    let o = [];
    for (; e < n; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, n, r, s) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(ju(s, r, o[a + 1], o[a + 2]) && (l = a, n > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, t, n) {
    let r = this.buffer, s = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      s[a++] = r[l++], s[a++] = r[l++] - n;
      let h = s[a++] = r[l++] - n;
      s[a++] = r[l++] - e, o = Math.max(o, h);
    }
    return new Yt(s, o, this.set);
  }
}
function ju(i, e, t, n) {
  switch (i) {
    case -2:
      return t < e;
    case -1:
      return n >= e && t < e;
    case 0:
      return t < e && n > e;
    case 1:
      return t <= e && n > e;
    case 2:
      return n > e;
    case 4:
      return !0;
  }
}
function on(i, e, t, n) {
  for (var r; i.from == i.to || (t < 1 ? i.from >= e : i.from > e) || (t > -1 ? i.to <= e : i.to < e); ) {
    let o = !n && i instanceof Oe && i.index < 0 ? null : i.parent;
    if (!o)
      return i;
    i = o;
  }
  let s = n ? 0 : N.IgnoreOverlays;
  if (n)
    for (let o = i, l = o.parent; l; o = l, l = o.parent)
      o instanceof Oe && o.index < 0 && ((r = l.enter(e, t, s)) === null || r === void 0 ? void 0 : r.from) != o.from && (i = l);
  for (; ; ) {
    let o = i.enter(e, t, s);
    if (!o)
      return i;
    i = o;
  }
}
class Iu {
  cursor(e = 0) {
    return new dr(this, e);
  }
  getChild(e, t = null, n = null) {
    let r = Ba(this, e, t, n);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return Ba(this, e, t, n);
  }
  resolve(e, t = 0) {
    return on(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return on(this, e, t, !0);
  }
  matchContext(e) {
    return Qo(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), n = this;
    for (; t; ) {
      let r = t.lastChild;
      if (!r || r.to != t.to)
        break;
      r.type.isError && r.from == r.to ? (n = t, t = r.prevSibling) : t = r;
    }
    return n;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Oe extends Iu {
  constructor(e, t, n, r) {
    super(), this._tree = e, this.from = t, this.index = n, this._parent = r;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, n, r, s = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e], u = a[e] + o.from;
        if (ju(r, n, u, u + c.length)) {
          if (c instanceof Yt) {
            if (s & N.ExcludeBuffers)
              continue;
            let f = c.findChild(0, c.buffer.length, t, n - u, r);
            if (f > -1)
              return new ot(new _g(o, c, e, u), null, f);
          } else if (s & N.IncludeAnonymous || !c.type.isAnonymous || al(c)) {
            let f;
            if (!(s & N.IgnoreMounts) && (f = sn.get(c)) && !f.overlay)
              return new Oe(f.tree, u, e, o);
            let O = new Oe(c, u, e, o);
            return s & N.IncludeAnonymous || !O.type.isAnonymous ? O : O.nextChild(t < 0 ? c.children.length - 1 : 0, t, n, r);
          }
        }
      }
      if (s & N.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this._tree.prop(e);
  }
  enter(e, t, n = 0) {
    let r;
    if (!(n & N.IgnoreOverlays) && (r = sn.get(this._tree)) && r.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of r.overlay)
        if ((t > 0 ? o <= s : o < s) && (t < 0 ? l >= s : l > s))
          return new Oe(r.tree, r.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, n);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function Ba(i, e, t, n) {
  let r = i.cursor(), s = [];
  if (!r.firstChild())
    return s;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = r.type.is(t), !r.nextSibling())
        return s;
  }
  for (; ; ) {
    if (n != null && r.type.is(n))
      return s;
    if (r.type.is(e) && s.push(r.node), !r.nextSibling())
      return n == null ? s : [];
  }
}
function Qo(i, e, t = e.length - 1) {
  for (let n = i; t >= 0; n = n.parent) {
    if (!n)
      return !1;
    if (!n.type.isAnonymous) {
      if (e[t] && e[t] != n.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class _g {
  constructor(e, t, n, r) {
    this.parent = e, this.buffer = t, this.index = n, this.start = r;
  }
}
class ot extends Iu {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, n) {
    super(), this.context = e, this._parent = t, this.index = n, this.type = e.buffer.set.types[e.buffer.buffer[n]];
  }
  child(e, t, n) {
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, n);
    return s < 0 ? null : new ot(this.context, this, s);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this.type.prop(e);
  }
  enter(e, t, n = 0) {
    if (n & N.ExcludeBuffers)
      return null;
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return s < 0 ? null : new ot(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new ot(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new ot(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: n } = this.context, r = this.index + 4, s = n.buffer[this.index + 3];
    if (s > r) {
      let o = n.buffer[this.index + 1];
      e.push(n.slice(r, s, o)), t.push(0);
    }
    return new H(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Nu(i) {
  if (!i.length)
    return null;
  let e = 0, t = i[0];
  for (let s = 1; s < i.length; s++) {
    let o = i[s];
    (o.from > t.from || o.to < t.to) && (t = o, e = s);
  }
  let n = t instanceof Oe && t.index < 0 ? null : t.parent, r = i.slice();
  return n ? r[e] = n : r.splice(e, 1), new qg(r, t);
}
class qg {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return Nu(this.heads);
  }
}
function Yg(i, e, t) {
  let n = i.resolveInner(e, t), r = null;
  for (let s = n instanceof Oe ? n : n.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let o = s.parent;
      (r || (r = [n])).push(o.resolve(e, t)), s = o;
    } else {
      let o = sn.get(s.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new Oe(o.tree, o.overlay[0].from + s.from, -1, s);
        (r || (r = [n])).push(on(l, e, t, !1));
      }
    }
  return r ? Nu(r) : n;
}
class dr {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof Oe)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let n = e._parent; n; n = n._parent)
        this.stack.unshift(n.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: n, buffer: r } = this.buffer;
    return this.type = t || r.set.types[r.buffer[e]], this.from = n + r.buffer[e + 1], this.to = n + r.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof Oe ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, n) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, n, this.mode));
    let { buffer: r } = this.buffer, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, n);
    return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, n = this.mode) {
    return this.buffer ? n & N.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, n));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & N.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & N.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, n = this.stack.length - 1;
    if (e < 0) {
      let r = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != r)
        return this.yieldBuf(t.findChild(
          r,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let r = t.buffer[this.index + 3];
      if (r < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3]))
        return this.yieldBuf(r);
    }
    return n < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, n, { buffer: r } = this;
    if (r) {
      if (e > 0) {
        if (this.index < r.buffer.buffer.length)
          return !1;
      } else
        for (let s = 0; s < this.index; s++)
          if (r.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: t, parent: n } = r);
    } else
      ({ index: t, _parent: n } = this._tree);
    for (; n; { index: t, _parent: n } = n)
      if (t > -1)
        for (let s = t + e, o = e < 0 ? -1 : n._tree.children.length; s != o; s += e) {
          let l = n._tree.children[s];
          if (this.mode & N.IncludeAnonymous || l instanceof Yt || !l.type.isAnonymous || al(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, n = 0;
    if (e && e.context == this.buffer)
      e: for (let r = this.index, s = this.stack.length; s >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == r) {
            if (r == this.index)
              return o;
            t = o, n = s + 1;
            break e;
          }
        r = this.stack[--s];
      }
    for (let r = n; r < this.stack.length; r++)
      t = new ot(this.buffer, t, this.stack[r]);
    return this.bufferNode = new ot(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let n = 0; ; ) {
      let r = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          n++;
          continue;
        }
        this.type.isAnonymous || (r = !0);
      }
      for (; ; ) {
        if (r && t && t(this), r = this.type.isAnonymous, !n)
          return;
        if (this.nextSibling())
          break;
        this.parent(), n--, r = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return Qo(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: n } = t.set;
    for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
      if (s < 0)
        return Qo(this._tree, e, r);
      let o = n[t.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[r] && e[r] != o.name)
          return !1;
        r--;
      }
    }
    return !0;
  }
}
function al(i) {
  return i.children.some((e) => e instanceof Yt || !e.type.isAnonymous || al(e));
}
function Eg(i) {
  var e;
  let { buffer: t, nodeSet: n, maxBufferLength: r = Bu, reused: s = [], minRepeatType: o = n.types.length } = i, l = Array.isArray(t) ? new ll(t, t.length) : t, a = n.types, h = 0, c = 0;
  function u(x, C, v, Y, j, J) {
    let { id: M, start: A, end: G, size: U } = l, oe = c, vt = h;
    if (U < 0)
      if (l.next(), U == -1) {
        let ft = s[M];
        v.push(ft), Y.push(A - x);
        return;
      } else if (U == -3) {
        h = M;
        return;
      } else if (U == -4) {
        c = M;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${U}`);
    let Mi = a[M], Sn, Lt, Ul = A - x;
    if (G - A <= r && (Lt = g(l.pos - C, j))) {
      let ft = new Uint16Array(Lt.size - Lt.skip), Ce = l.pos - Lt.size, He = ft.length;
      for (; l.pos > Ce; )
        He = b(Lt.start, ft, He);
      Sn = new Yt(ft, G - Lt.start, n), Ul = Lt.start - x;
    } else {
      let ft = l.pos - U;
      l.next();
      let Ce = [], He = [], Bt = M >= o ? M : -1, ri = 0, xn = G;
      for (; l.pos > ft; )
        Bt >= 0 && l.id == Bt && l.size >= 0 ? (l.end <= xn - r && (d(Ce, He, A, ri, l.end, xn, Bt, oe, vt), ri = Ce.length, xn = l.end), l.next()) : J > 2500 ? f(A, ft, Ce, He) : u(A, ft, Ce, He, Bt, J + 1);
      if (Bt >= 0 && ri > 0 && ri < Ce.length && d(Ce, He, A, ri, A, xn, Bt, oe, vt), Ce.reverse(), He.reverse(), Bt > -1 && ri > 0) {
        let Fl = O(Mi, vt);
        Sn = hl(Mi, Ce, He, 0, Ce.length, 0, G - A, Fl, Fl);
      } else
        Sn = p(Mi, Ce, He, G - A, oe - G, vt);
    }
    v.push(Sn), Y.push(Ul);
  }
  function f(x, C, v, Y) {
    let j = [], J = 0, M = -1;
    for (; l.pos > C; ) {
      let { id: A, start: G, end: U, size: oe } = l;
      if (oe > 4)
        l.next();
      else {
        if (M > -1 && G < M)
          break;
        M < 0 && (M = U - r), j.push(A, G, U), J++, l.next();
      }
    }
    if (J) {
      let A = new Uint16Array(J * 4), G = j[j.length - 2];
      for (let U = j.length - 3, oe = 0; U >= 0; U -= 3)
        A[oe++] = j[U], A[oe++] = j[U + 1] - G, A[oe++] = j[U + 2] - G, A[oe++] = oe;
      v.push(new Yt(A, j[2] - G, n)), Y.push(G - x);
    }
  }
  function O(x, C) {
    return (v, Y, j) => {
      let J = 0, M = v.length - 1, A, G;
      if (M >= 0 && (A = v[M]) instanceof H) {
        if (!M && A.type == x && A.length == j)
          return A;
        (G = A.prop(R.lookAhead)) && (J = Y[M] + A.length + G);
      }
      return p(x, v, Y, j, J, C);
    };
  }
  function d(x, C, v, Y, j, J, M, A, G) {
    let U = [], oe = [];
    for (; x.length > Y; )
      U.push(x.pop()), oe.push(C.pop() + v - j);
    x.push(p(n.types[M], U, oe, J - j, A - J, G)), C.push(j - v);
  }
  function p(x, C, v, Y, j, J, M) {
    if (J) {
      let A = [R.contextHash, J];
      M = M ? [A].concat(M) : [A];
    }
    if (j > 25) {
      let A = [R.lookAhead, j];
      M = M ? [A].concat(M) : [A];
    }
    return new H(x, C, v, Y, M);
  }
  function g(x, C) {
    let v = l.fork(), Y = 0, j = 0, J = 0, M = v.end - r, A = { size: 0, start: 0, skip: 0 };
    e: for (let G = v.pos - x; v.pos > G; ) {
      let U = v.size;
      if (v.id == C && U >= 0) {
        A.size = Y, A.start = j, A.skip = J, J += 4, Y += 4, v.next();
        continue;
      }
      let oe = v.pos - U;
      if (U < 0 || oe < G || v.start < M)
        break;
      let vt = v.id >= o ? 4 : 0, Mi = v.start;
      for (v.next(); v.pos > oe; ) {
        if (v.size < 0)
          if (v.size == -3 || v.size == -4)
            vt += 4;
          else
            break e;
        else v.id >= o && (vt += 4);
        v.next();
      }
      j = Mi, Y += U, J += vt;
    }
    return (C < 0 || Y == x) && (A.size = Y, A.start = j, A.skip = J), A.size > 4 ? A : void 0;
  }
  function b(x, C, v) {
    let { id: Y, start: j, end: J, size: M } = l;
    if (l.next(), M >= 0 && Y < o) {
      let A = v;
      if (M > 4) {
        let G = l.pos - (M - 4);
        for (; l.pos > G; )
          v = b(x, C, v);
      }
      C[--v] = A, C[--v] = J - x, C[--v] = j - x, C[--v] = Y;
    } else M == -3 ? h = Y : M == -4 && (c = Y);
    return v;
  }
  let Q = [], w = [];
  for (; l.pos > 0; )
    u(i.start || 0, i.bufferStart || 0, Q, w, -1, 0);
  let Z = (e = i.length) !== null && e !== void 0 ? e : Q.length ? w[0] + Q[0].length : 0;
  return new H(a[i.topID], Q.reverse(), w.reverse(), Z);
}
const ja = /* @__PURE__ */ new WeakMap();
function Hn(i, e) {
  if (!i.isAnonymous || e instanceof Yt || e.type != i)
    return 1;
  let t = ja.get(e);
  if (t == null) {
    t = 1;
    for (let n of e.children) {
      if (n.type != i || !(n instanceof H)) {
        t = 1;
        break;
      }
      t += Hn(i, n);
    }
    ja.set(e, t);
  }
  return t;
}
function hl(i, e, t, n, r, s, o, l, a) {
  let h = 0;
  for (let d = n; d < r; d++)
    h += Hn(i, e[d]);
  let c = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), u = [], f = [];
  function O(d, p, g, b, Q) {
    for (let w = g; w < b; ) {
      let Z = w, x = p[w], C = Hn(i, d[w]);
      for (w++; w < b; w++) {
        let v = Hn(i, d[w]);
        if (C + v >= c)
          break;
        C += v;
      }
      if (w == Z + 1) {
        if (C > c) {
          let v = d[Z];
          O(v.children, v.positions, 0, v.children.length, p[Z] + Q);
          continue;
        }
        u.push(d[Z]);
      } else {
        let v = p[w - 1] + d[w - 1].length - x;
        u.push(hl(i, d, p, Z, w, x, v, null, a));
      }
      f.push(x + Q - s);
    }
  }
  return O(e, t, n, r, 0), (l || a)(u, f, o);
}
class Gu {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, n) {
    let r = this.map.get(e);
    r || this.map.set(e, r = /* @__PURE__ */ new Map()), r.set(t, n);
  }
  getBuffer(e, t) {
    let n = this.map.get(e);
    return n && n.get(t);
  }
  /**
  Set the value for this syntax node.
  */
  set(e, t) {
    e instanceof ot ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof Oe && this.map.set(e.tree, t);
  }
  /**
  Retrieve value for this syntax node, if it exists in the map.
  */
  get(e) {
    return e instanceof ot ? this.getBuffer(e.context.buffer, e.index) : e instanceof Oe ? this.map.get(e.tree) : void 0;
  }
  /**
  Set the value for the node that a cursor currently points to.
  */
  cursorSet(e, t) {
    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t);
  }
  /**
  Retrieve the value for the node that a cursor currently points
  to.
  */
  cursorGet(e) {
    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
  }
}
class bt {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, n, r, s = !1, o = !1) {
    this.from = e, this.to = t, this.tree = n, this.offset = r, this.open = (s ? 1 : 0) | (o ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], n = !1) {
    let r = [new bt(0, e.length, e, 0, !1, n)];
    for (let s of t)
      s.to > e.length && r.push(s);
    return r;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, n = 128) {
    if (!t.length)
      return e;
    let r = [], s = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null, u = c ? c.fromA : 1e9;
      if (u - a >= n)
        for (; o && o.from < u; ) {
          let f = o;
          if (a >= f.from || u <= f.to || h) {
            let O = Math.max(f.from, a) - h, d = Math.min(f.to, u) - h;
            f = O >= d ? null : new bt(O, d, f.tree, f.offset + h, l > 0, !!c);
          }
          if (f && r.push(f), o.to > u)
            break;
          o = s < e.length ? e[s++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return r;
  }
}
class Uu {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, n) {
    return typeof e == "string" && (e = new Wg(e)), n = n ? n.length ? n.map((r) => new ze(r.from, r.to)) : [new ze(0, 0)] : [new ze(0, e.length)], this.createParse(e, t || [], n);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, n) {
    let r = this.startParse(e, t, n);
    for (; ; ) {
      let s = r.advance();
      if (s)
        return s;
    }
  }
}
class Wg {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
function Dg(i) {
  return (e, t, n, r) => new Bg(e, i, t, n, r);
}
class Ia {
  constructor(e, t, n, r, s) {
    this.parser = e, this.parse = t, this.overlay = n, this.target = r, this.from = s;
  }
}
function Na(i) {
  if (!i.length || i.some((e) => e.from >= e.to))
    throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(i));
}
class Lg {
  constructor(e, t, n, r, s, o, l) {
    this.parser = e, this.predicate = t, this.mounts = n, this.index = r, this.start = s, this.target = o, this.prev = l, this.depth = 0, this.ranges = [];
  }
}
const So = new R({ perNode: !0 });
class Bg {
  constructor(e, t, n, r, s) {
    this.nest = t, this.input = n, this.fragments = r, this.ranges = s, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e;
  }
  advance() {
    if (this.baseParse) {
      let n = this.baseParse.advance();
      if (!n)
        return null;
      if (this.baseParse = null, this.baseTree = n, this.startInner(), this.stoppedAt != null)
        for (let r of this.inner)
          r.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let n = this.baseTree;
      return this.stoppedAt != null && (n = new H(n.type, n.children, n.positions, n.length, n.propValues.concat([[So, this.stoppedAt]]))), n;
    }
    let e = this.inner[this.innerDone], t = e.parse.advance();
    if (t) {
      this.innerDone++;
      let n = Object.assign(/* @__PURE__ */ Object.create(null), e.target.props);
      n[R.mounted.id] = new sn(t, e.overlay, e.parser), e.target.props = n;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse)
      return 0;
    let e = this.input.length;
    for (let t = this.innerDone; t < this.inner.length; t++)
      this.inner[t].from < e && (e = Math.min(e, this.inner[t].parse.parsedPos));
    return e;
  }
  stopAt(e) {
    if (this.stoppedAt = e, this.baseParse)
      this.baseParse.stopAt(e);
    else
      for (let t = this.innerDone; t < this.inner.length; t++)
        this.inner[t].parse.stopAt(e);
  }
  startInner() {
    let e = new Ng(this.fragments), t = null, n = null, r = new dr(new Oe(this.baseTree, this.ranges[0].from, 0, null), N.IncludeAnonymous | N.IgnoreMounts);
    e: for (let s, o; ; ) {
      let l = !0, a;
      if (this.stoppedAt != null && r.from >= this.stoppedAt)
        l = !1;
      else if (e.hasNode(r)) {
        if (t) {
          let h = t.mounts.find((c) => c.frag.from <= r.from && c.frag.to >= r.to && c.mount.overlay);
          if (h)
            for (let c of h.mount.overlay) {
              let u = c.from + h.pos, f = c.to + h.pos;
              u >= r.from && f <= r.to && !t.ranges.some((O) => O.from < f && O.to > u) && t.ranges.push({ from: u, to: f });
            }
        }
        l = !1;
      } else if (n && (o = jg(n.ranges, r.from, r.to)))
        l = o != 2;
      else if (!r.type.isAnonymous && (s = this.nest(r, this.input)) && (r.from < r.to || !s.overlay)) {
        r.tree || (Ig(r), t && t.depth++, n && n.depth++);
        let h = e.findMounts(r.from, s.parser);
        if (typeof s.overlay == "function")
          t = new Lg(s.parser, s.overlay, h, this.inner.length, r.from, r.tree, t);
        else {
          let c = Fa(this.ranges, s.overlay || (r.from < r.to ? [new ze(r.from, r.to)] : []));
          c.length && Na(c), (c.length || !s.overlay) && this.inner.push(new Ia(s.parser, c.length ? s.parser.startParse(this.input, Ha(h, c), c) : s.parser.startParse(""), s.overlay ? s.overlay.map((u) => new ze(u.from - r.from, u.to - r.from)) : null, r.tree, c.length ? c[0].from : r.from)), s.overlay ? c.length && (n = { ranges: c, depth: 0, prev: n }) : l = !1;
        }
      } else if (t && (a = t.predicate(r)) && (a === !0 && (a = new ze(r.from, r.to)), a.from < a.to)) {
        let h = t.ranges.length - 1;
        h >= 0 && t.ranges[h].to == a.from ? t.ranges[h] = { from: t.ranges[h].from, to: a.to } : t.ranges.push(a);
      }
      if (l && r.firstChild())
        t && t.depth++, n && n.depth++;
      else
        for (; !r.nextSibling(); ) {
          if (!r.parent())
            break e;
          if (t && !--t.depth) {
            let h = Fa(this.ranges, t.ranges);
            h.length && (Na(h), this.inner.splice(t.index, 0, new Ia(t.parser, t.parser.startParse(this.input, Ha(t.mounts, h), h), t.ranges.map((c) => new ze(c.from - t.start, c.to - t.start)), t.target, h[0].from))), t = t.prev;
          }
          n && !--n.depth && (n = n.prev);
        }
    }
  }
}
function jg(i, e, t) {
  for (let n of i) {
    if (n.from >= t)
      break;
    if (n.to > e)
      return n.from <= e && n.to >= t ? 2 : 1;
  }
  return 0;
}
function Ga(i, e, t, n, r, s) {
  if (e < t) {
    let o = i.buffer[e + 1];
    n.push(i.slice(e, t, o)), r.push(o - s);
  }
}
function Ig(i) {
  let { node: e } = i, t = [], n = e.context.buffer;
  do
    t.push(i.index), i.parent();
  while (!i.tree);
  let r = i.tree, s = r.children.indexOf(n), o = r.children[s], l = o.buffer, a = [s];
  function h(c, u, f, O, d, p) {
    let g = t[p], b = [], Q = [];
    Ga(o, c, g, b, Q, O);
    let w = l[g + 1], Z = l[g + 2];
    a.push(b.length);
    let x = p ? h(g + 4, l[g + 3], o.set.types[l[g]], w, Z - w, p - 1) : e.toTree();
    return b.push(x), Q.push(w - O), Ga(o, l[g + 3], u, b, Q, O), new H(f, b, Q, d);
  }
  r.children[s] = h(0, l.length, be.none, 0, o.length, t.length - 1);
  for (let c of a) {
    let u = i.tree.children[c], f = i.tree.positions[c];
    i.yield(new Oe(u, f + i.from, c, i._tree));
  }
}
class Ua {
  constructor(e, t) {
    this.offset = t, this.done = !1, this.cursor = e.cursor(N.IncludeAnonymous | N.IgnoreMounts);
  }
  // Move to the first node (in pre-order) that starts at or after `pos`.
  moveTo(e) {
    let { cursor: t } = this, n = e - this.offset;
    for (; !this.done && t.from < n; )
      t.to >= e && t.enter(n, 1, N.IgnoreOverlays | N.ExcludeBuffers) || t.next(!1) || (this.done = !0);
  }
  hasNode(e) {
    if (this.moveTo(e.from), !this.done && this.cursor.from + this.offset == e.from && this.cursor.tree)
      for (let t = this.cursor.tree; ; ) {
        if (t == e.tree)
          return !0;
        if (t.children.length && t.positions[0] == 0 && t.children[0] instanceof H)
          t = t.children[0];
        else
          break;
      }
    return !1;
  }
}
let Ng = class {
  constructor(e) {
    var t;
    if (this.fragments = e, this.curTo = 0, this.fragI = 0, e.length) {
      let n = this.curFrag = e[0];
      this.curTo = (t = n.tree.prop(So)) !== null && t !== void 0 ? t : n.to, this.inner = new Ua(n.tree, -n.offset);
    } else
      this.curFrag = this.inner = null;
  }
  hasNode(e) {
    for (; this.curFrag && e.from >= this.curTo; )
      this.nextFrag();
    return this.curFrag && this.curFrag.from <= e.from && this.curTo >= e.to && this.inner.hasNode(e);
  }
  nextFrag() {
    var e;
    if (this.fragI++, this.fragI == this.fragments.length)
      this.curFrag = this.inner = null;
    else {
      let t = this.curFrag = this.fragments[this.fragI];
      this.curTo = (e = t.tree.prop(So)) !== null && e !== void 0 ? e : t.to, this.inner = new Ua(t.tree, -t.offset);
    }
  }
  findMounts(e, t) {
    var n;
    let r = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e, 1);
      for (let s = this.inner.cursor.node; s; s = s.parent) {
        let o = (n = s.tree) === null || n === void 0 ? void 0 : n.prop(R.mounted);
        if (o && o.parser == t)
          for (let l = this.fragI; l < this.fragments.length; l++) {
            let a = this.fragments[l];
            if (a.from >= s.to)
              break;
            a.tree == this.curFrag.tree && r.push({
              frag: a,
              pos: s.from - a.offset,
              mount: o
            });
          }
      }
    }
    return r;
  }
};
function Fa(i, e) {
  let t = null, n = e;
  for (let r = 1, s = 0; r < i.length; r++) {
    let o = i[r - 1].to, l = i[r].from;
    for (; s < n.length; s++) {
      let a = n[s];
      if (a.from >= l)
        break;
      a.to <= o || (t || (n = t = e.slice()), a.from < o ? (t[s] = new ze(a.from, o), a.to > l && t.splice(s + 1, 0, new ze(l, a.to))) : a.to > l ? t[s--] = new ze(l, a.to) : t.splice(s--, 1));
    }
  }
  return n;
}
function Gg(i, e, t, n) {
  let r = 0, s = 0, o = !1, l = !1, a = -1e9, h = [];
  for (; ; ) {
    let c = r == i.length ? 1e9 : o ? i[r].to : i[r].from, u = s == e.length ? 1e9 : l ? e[s].to : e[s].from;
    if (o != l) {
      let f = Math.max(a, t), O = Math.min(c, u, n);
      f < O && h.push(new ze(f, O));
    }
    if (a = Math.min(c, u), a == 1e9)
      break;
    c == a && (o ? (o = !1, r++) : o = !0), u == a && (l ? (l = !1, s++) : l = !0);
  }
  return h;
}
function Ha(i, e) {
  let t = [];
  for (let { pos: n, mount: r, frag: s } of i) {
    let o = n + (r.overlay ? r.overlay[0].from : 0), l = o + r.tree.length, a = Math.max(s.from, o), h = Math.min(s.to, l);
    if (r.overlay) {
      let c = r.overlay.map((f) => new ze(f.from + n, f.to + n)), u = Gg(e, c, a, h);
      for (let f = 0, O = a; ; f++) {
        let d = f == u.length, p = d ? h : u[f].from;
        if (p > O && t.push(new bt(O, p, r.tree, -o, s.from >= O || s.openStart, s.to <= p || s.openEnd)), d)
          break;
        O = u[f].to;
      }
    } else
      t.push(new bt(a, h, r.tree, -o, s.from >= o || s.openStart, s.to <= l || s.openEnd));
  }
  return t;
}
let Ug = 0;
class Ae {
  /**
  @internal
  */
  constructor(e, t, n, r) {
    this.name = e, this.set = t, this.base = n, this.modified = r, this.id = Ug++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let n = typeof e == "string" ? e : "?";
    if (e instanceof Ae && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let r = new Ae(n, [], null, []);
    if (r.set.push(r), t)
      for (let s of t.set)
        r.set.push(s);
    return r;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(e) {
    let t = new pr(e);
    return (n) => n.modified.indexOf(t) > -1 ? n : pr.get(n.base || n, n.modified.concat(t).sort((r, s) => r.id - s.id));
  }
}
let Fg = 0;
class pr {
  constructor(e) {
    this.name = e, this.instances = [], this.id = Fg++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let n = t[0].instances.find((l) => l.base == e && Hg(t, l.modified));
    if (n)
      return n;
    let r = [], s = new Ae(e.name, r, e, t);
    for (let l of t)
      l.instances.push(s);
    let o = Kg(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          r.push(pr.get(l, a));
    return s;
  }
}
function Hg(i, e) {
  return i.length == e.length && i.every((t, n) => t == e[n]);
}
function Kg(i) {
  let e = [[]];
  for (let t = 0; t < i.length; t++)
    for (let n = 0, r = e.length; n < r; n++)
      e.push(e[n].concat(i[t]));
  return e.sort((t, n) => n.length - t.length);
}
function Wr(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in i) {
    let n = i[t];
    Array.isArray(n) || (n = [n]);
    for (let r of t.split(" "))
      if (r) {
        let s = [], o = 2, l = r;
        for (let u = 0; ; ) {
          if (l == "..." && u > 0 && u + 3 == r.length) {
            o = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!f)
            throw new RangeError("Invalid path: " + r);
          if (s.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), u += f[0].length, u == r.length)
            break;
          let O = r[u++];
          if (u == r.length && O == "!") {
            o = 0;
            break;
          }
          if (O != "/")
            throw new RangeError("Invalid path: " + r);
          l = r.slice(u);
        }
        let a = s.length - 1, h = s[a];
        if (!h)
          throw new RangeError("Invalid path: " + r);
        let c = new ln(n, o, a > 0 ? s.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return Fu.add(e);
}
const Fu = new R({
  combine(i, e) {
    let t, n, r;
    for (; i || e; ) {
      if (!i || e && i.depth >= e.depth ? (r = e, e = e.next) : (r = i, i = i.next), t && t.mode == r.mode && !r.context && !t.context)
        continue;
      let s = new ln(r.tags, r.mode, r.context);
      t ? t.next = s : n = s, t = s;
    }
    return n;
  }
});
class ln {
  constructor(e, t, n, r) {
    this.tags = e, this.mode = t, this.context = n, this.next = r;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
ln.empty = new ln([], 2, null);
function Hu(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of i)
    if (!Array.isArray(s.tag))
      t[s.tag.id] = s.class;
    else
      for (let o of s.tag)
        t[o.id] = s.class;
  let { scope: n, all: r = null } = e || {};
  return {
    style: (s) => {
      let o = r;
      for (let l of s)
        for (let a of l.set) {
          let h = t[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    },
    scope: n
  };
}
function Jg(i, e) {
  let t = null;
  for (let n of i) {
    let r = n.style(e);
    r && (t = t ? t + " " + r : r);
  }
  return t;
}
function e0(i, e, t, n = 0, r = i.length) {
  let s = new t0(n, Array.isArray(e) ? e : [e], t);
  s.highlightRange(i.cursor(), n, r, "", s.highlighters), s.flush(r);
}
class t0 {
  constructor(e, t, n) {
    this.at = e, this.highlighters = t, this.span = n, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, n, r, s) {
    let { type: o, from: l, to: a } = e;
    if (l >= n || a <= t)
      return;
    o.isTop && (s = this.highlighters.filter((O) => !O.scope || O.scope(o)));
    let h = r, c = i0(e) || ln.empty, u = Jg(s, c.tags);
    if (u && (h && (h += " "), h += u, c.mode == 1 && (r += (r ? " " : "") + u)), this.startSpan(Math.max(t, l), h), c.opaque)
      return;
    let f = e.tree && e.tree.prop(R.mounted);
    if (f && f.overlay) {
      let O = e.node.enter(f.overlay[0].from + l, 1), d = this.highlighters.filter((g) => !g.scope || g.scope(f.tree.type)), p = e.firstChild();
      for (let g = 0, b = l; ; g++) {
        let Q = g < f.overlay.length ? f.overlay[g] : null, w = Q ? Q.from + l : a, Z = Math.max(t, b), x = Math.min(n, w);
        if (Z < x && p)
          for (; e.from < x && (this.highlightRange(e, Z, x, r, s), this.startSpan(Math.min(x, e.to), h), !(e.to >= w || !e.nextSibling())); )
            ;
        if (!Q || w > n)
          break;
        b = Q.to + l, b > t && (this.highlightRange(O.cursor(), Math.max(t, Q.from + l), Math.min(n, b), "", d), this.startSpan(Math.min(n, b), h));
      }
      p && e.parent();
    } else if (e.firstChild()) {
      f && (r = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= n)
            break;
          this.highlightRange(e, t, n, r, s), this.startSpan(Math.min(n, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function i0(i) {
  let e = i.type.prop(Fu);
  for (; e && e.context && !i.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const S = Ae.define, _n = S(), kt = S(), Ka = S(kt), Ja = S(kt), Pt = S(), qn = S(Pt), gs = S(Pt), tt = S(), jt = S(tt), Je = S(), et = S(), xo = S(), _i = S(xo), Yn = S(), m = {
  /**
  A comment.
  */
  comment: _n,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: S(_n),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: S(_n),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: S(_n),
  /**
  Any kind of identifier.
  */
  name: kt,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: S(kt),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: Ka,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: S(Ka),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Ja,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: S(Ja),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: S(kt),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: S(kt),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: S(kt),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: S(kt),
  /**
  A literal value.
  */
  literal: Pt,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: qn,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: S(qn),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: S(qn),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: S(qn),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: gs,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: S(gs),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: S(gs),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: S(Pt),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: S(Pt),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: S(Pt),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: S(Pt),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: S(Pt),
  /**
  A language keyword.
  */
  keyword: Je,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: S(Je),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: S(Je),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: S(Je),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: S(Je),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: S(Je),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: S(Je),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: S(Je),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: S(Je),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: S(Je),
  /**
  An operator.
  */
  operator: et,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: S(et),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: S(et),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: S(et),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: S(et),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: S(et),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: S(et),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: S(et),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: S(et),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: S(et),
  /**
  Program or markup punctuation.
  */
  punctuation: xo,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: S(xo),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: _i,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: S(_i),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: S(_i),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: S(_i),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: S(_i),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: tt,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: jt,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: S(jt),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: S(jt),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: S(jt),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: S(jt),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: S(jt),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: S(jt),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: S(tt),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: S(tt),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: S(tt),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: S(tt),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: S(tt),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: S(tt),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: S(tt),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: S(tt),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: S(),
  /**
  Deleted text.
  */
  deleted: S(),
  /**
  Changed text.
  */
  changed: S(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: S(),
  /**
  Metadata or meta-instruction.
  */
  meta: Yn,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: S(Yn),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: S(Yn),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: S(Yn),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Ae.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Ae.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Ae.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Ae.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Ae.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Ae.defineModifier("special")
};
for (let i in m) {
  let e = m[i];
  e instanceof Ae && (e.name = i);
}
Hu([
  { tag: m.link, class: "tok-link" },
  { tag: m.heading, class: "tok-heading" },
  { tag: m.emphasis, class: "tok-emphasis" },
  { tag: m.strong, class: "tok-strong" },
  { tag: m.keyword, class: "tok-keyword" },
  { tag: m.atom, class: "tok-atom" },
  { tag: m.bool, class: "tok-bool" },
  { tag: m.url, class: "tok-url" },
  { tag: m.labelName, class: "tok-labelName" },
  { tag: m.inserted, class: "tok-inserted" },
  { tag: m.deleted, class: "tok-deleted" },
  { tag: m.literal, class: "tok-literal" },
  { tag: m.string, class: "tok-string" },
  { tag: m.number, class: "tok-number" },
  { tag: [m.regexp, m.escape, m.special(m.string)], class: "tok-string2" },
  { tag: m.variableName, class: "tok-variableName" },
  { tag: m.local(m.variableName), class: "tok-variableName tok-local" },
  { tag: m.definition(m.variableName), class: "tok-variableName tok-definition" },
  { tag: m.special(m.variableName), class: "tok-variableName2" },
  { tag: m.definition(m.propertyName), class: "tok-propertyName tok-definition" },
  { tag: m.typeName, class: "tok-typeName" },
  { tag: m.namespace, class: "tok-namespace" },
  { tag: m.className, class: "tok-className" },
  { tag: m.macroName, class: "tok-macroName" },
  { tag: m.propertyName, class: "tok-propertyName" },
  { tag: m.operator, class: "tok-operator" },
  { tag: m.comment, class: "tok-comment" },
  { tag: m.meta, class: "tok-meta" },
  { tag: m.invalid, class: "tok-invalid" },
  { tag: m.punctuation, class: "tok-punctuation" }
]);
var bs;
const li = /* @__PURE__ */ new R();
function Ku(i) {
  return k.define({
    combine: i ? (e) => e.concat(i) : void 0
  });
}
const cl = /* @__PURE__ */ new R();
class je {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, n = [], r = "") {
    this.data = e, this.name = r, E.prototype.hasOwnProperty("tree") || Object.defineProperty(E.prototype, "tree", { get() {
      return K(this);
    } }), this.parser = t, this.extension = [
      ki.of(this),
      E.languageData.of((s, o, l) => {
        let a = eh(s, o, l), h = a.type.prop(li);
        if (!h)
          return [];
        let c = s.facet(h), u = a.type.prop(cl);
        if (u) {
          let f = a.resolve(o - a.from, l);
          for (let O of u)
            if (O.test(f, s)) {
              let d = s.facet(O.facet);
              return O.type == "replace" ? d : d.concat(c);
            }
        }
        return c;
      })
    ].concat(n);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, n = -1) {
    return eh(e, t, n).type.prop(li) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(ki);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let n = [], r = (s, o) => {
      if (s.prop(li) == this.data) {
        n.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(R.mounted);
      if (l) {
        if (l.tree.prop(li) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              n.push({ from: a.from + o, to: a.to + o });
          else
            n.push({ from: o, to: o + s.length });
          return;
        } else if (l.overlay) {
          let a = n.length;
          if (r(l.tree, l.overlay[0].from + o), n.length > a)
            return;
        }
      }
      for (let a = 0; a < s.children.length; a++) {
        let h = s.children[a];
        h instanceof H && r(h, s.positions[a] + o);
      }
    };
    return r(K(e), 0), n;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
je.setState = /* @__PURE__ */ _.define();
function eh(i, e, t) {
  let n = i.facet(ki), r = K(i).topNode;
  if (!n || n.allowsNesting)
    for (let s = r; s; s = s.enter(e, t, N.ExcludeBuffers))
      s.type.isTop && (r = s);
  return r;
}
class $i extends je {
  constructor(e, t, n) {
    super(e, t, [], n), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = Ku(e.languageData);
    return new $i(t, e.parser.configure({
      props: [li.add((n) => n.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new $i(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function K(i) {
  let e = i.field(je.state, !1);
  return e ? e.tree : H.empty;
}
class n0 {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let n = this.cursorPos - this.string.length;
    return e < n || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - n, t - n);
  }
}
let qi = null;
class mr {
  constructor(e, t, n = [], r, s, o, l, a) {
    this.parser = e, this.state = t, this.fragments = n, this.tree = r, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new mr(e, t, [], H.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new n0(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != H.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var n;
      if (typeof e == "number") {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let r = this.parse.advance();
        if (r)
          if (this.fragments = this.withoutTempSkipped(bt.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(bt.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = qi;
    qi = this;
    try {
      return e();
    } finally {
      qi = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = th(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: n, tree: r, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, u, f) => a.push({ fromA: h, toA: c, fromB: u, toB: f })), n = bt.applyChanges(n, a), r = H.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), u = e.mapPos(h.to, -1);
          c < u && l.push({ from: c, to: u });
        }
      }
    }
    return new mr(this.parser, t, n, r, s, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let n = 0; n < this.skipped.length; n++) {
      let { from: r, to: s } = this.skipped[n];
      r < e.to && s > e.from && (this.fragments = th(this.fragments, r, s), this.skipped.splice(n--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends Uu {
      createParse(t, n, r) {
        let s = r[0].from, o = r[r.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let a = qi;
            if (a) {
              for (let h of r)
                a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new H(be.none, [], [], o - s);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return qi;
  }
}
function th(i, e, t) {
  return bt.applyChanges(i, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class vi {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), n = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, n) || t.takeTree(), new vi(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), n = mr.create(e.facet(ki).parser, e, { from: 0, to: t });
    return n.work(20, t) || n.takeTree(), new vi(n);
  }
}
je.state = /* @__PURE__ */ ye.define({
  create: vi.init,
  update(i, e) {
    for (let t of e.effects)
      if (t.is(je.setState))
        return t.value;
    return e.startState.facet(ki) != e.state.facet(ki) ? vi.init(e.state) : i.apply(e);
  }
});
let Ju = (i) => {
  let e = setTimeout(
    () => i(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (Ju = (i) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(i, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const ys = typeof navigator < "u" && (!((bs = navigator.scheduling) === null || bs === void 0) && bs.isInputPending) ? () => navigator.scheduling.isInputPending() : null, r0 = /* @__PURE__ */ Te.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(je.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(je.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Ju(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: n, viewport: { to: r } } = this.view, s = n.field(je.state);
    if (s.tree == s.context.tree && s.context.isDone(
      r + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !ys ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < r && n.doc.length > r + 1e3, a = s.context.work(() => ys && ys() || Date.now() > o, r + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: je.setState.of(new vi(s.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Pe(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), ki = /* @__PURE__ */ k.define({
  combine(i) {
    return i.length ? i[0] : null;
  },
  enables: (i) => [
    je.state,
    r0,
    T.contentAttributes.compute([i], (e) => {
      let t = e.facet(i);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class ul {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const s0 = /* @__PURE__ */ k.define(), gn = /* @__PURE__ */ k.define({
  combine: (i) => {
    if (!i.length)
      return "  ";
    let e = i[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(i[0]));
    return e;
  }
});
function gr(i) {
  let e = i.facet(gn);
  return e.charCodeAt(0) == 9 ? i.tabSize * e.length : e.length;
}
function br(i, e) {
  let t = "", n = i.tabSize, r = i.facet(gn)[0];
  if (r == "	") {
    for (; e >= n; )
      t += "	", e -= n;
    r = " ";
  }
  for (let s = 0; s < e; s++)
    t += r;
  return t;
}
function ef(i, e) {
  i instanceof E && (i = new Dr(i));
  for (let n of i.state.facet(s0)) {
    let r = n(i, e);
    if (r !== void 0)
      return r;
  }
  let t = K(i.state);
  return t.length >= e ? o0(i, t, e) : null;
}
class Dr {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = gr(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, t = 1) {
    let n = this.state.doc.lineAt(e), { simulateBreak: r, simulateDoubleBreak: s } = this.options;
    return r != null && r >= n.from && r <= n.to ? s && r == e ? { text: "", from: e } : (t < 0 ? r < e : r <= e) ? { text: n.text.slice(r - n.from), from: r } : { text: n.text.slice(0, r - n.from), from: n.from } : n;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: n, from: r } = this.lineAt(e, t);
    return n.slice(e - r, Math.min(n.length, e + 100 - r));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: n, from: r } = this.lineAt(e, t), s = this.countColumn(n, e - r), o = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
    return o > -1 && (s += o - this.countColumn(n, n.search(/\S|$/))), s;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return Vr(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: n, from: r } = this.lineAt(e, t), s = this.options.overrideIndentation;
    if (s) {
      let o = s(r);
      if (o > -1)
        return o;
    }
    return this.countColumn(n, n.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Lr = /* @__PURE__ */ new R();
function o0(i, e, t) {
  let n = e.resolveStack(t), r = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (r != n.node) {
    let s = [];
    for (let o = r; o && !(o.from < n.node.from || o.to > n.node.to || o.from == n.node.from && o.type == n.node.type); o = o.parent)
      s.push(o);
    for (let o = s.length - 1; o >= 0; o--)
      n = { node: s[o], next: n };
  }
  return tf(n, i, t);
}
function tf(i, e, t) {
  for (let n = i; n; n = n.next) {
    let r = a0(n.node);
    if (r)
      return r(fl.create(e, t, n));
  }
  return 0;
}
function l0(i) {
  return i.pos == i.options.simulateBreak && i.options.simulateDoubleBreak;
}
function a0(i) {
  let e = i.type.prop(Lr);
  if (e)
    return e;
  let t = i.firstChild, n;
  if (t && (n = t.type.prop(R.closedBy))) {
    let r = i.lastChild, s = r && n.indexOf(r.name) > -1;
    return (o) => nf(o, !0, 1, void 0, s && !l0(o) ? r.from : void 0);
  }
  return i.parent == null ? h0 : null;
}
function h0() {
  return 0;
}
class fl extends Dr {
  constructor(e, t, n) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = n;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new fl(e, t, n);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let n = e.resolve(t.from);
      for (; n.parent && n.parent.from == n.from; )
        n = n.parent;
      if (c0(n, e))
        break;
      t = this.state.doc.lineAt(n.from);
    }
    return this.lineIndent(t.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return tf(this.context.next, this.base, this.pos);
  }
}
function c0(i, e) {
  for (let t = e; t; t = t.parent)
    if (i == t)
      return !0;
  return !1;
}
function u0(i) {
  let e = i.node, t = e.childAfter(e.from), n = e.lastChild;
  if (!t)
    return null;
  let r = i.options.simulateBreak, s = i.state.doc.lineAt(t.from), o = r == null || r <= s.from ? s.to : Math.min(s.to, r);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == n)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let h = /^ */.exec(s.text.slice(t.to - s.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    l = a.to;
  }
}
function f0({ closing: i, align: e = !0, units: t = 1 }) {
  return (n) => nf(n, e, t, i);
}
function nf(i, e, t, n, r) {
  let s = i.textAfter, o = s.match(/^\s*/)[0].length, l = n && s.slice(o, o + n.length) == n || r == i.pos + o, a = e ? u0(i) : null;
  return a ? l ? i.column(a.from) : i.column(a.to) : i.baseIndent + (l ? 0 : i.unit * t);
}
const O0 = (i) => i.baseIndent;
function Kn({ except: i, units: e = 1 } = {}) {
  return (t) => {
    let n = i && i.test(t.textAfter);
    return t.baseIndent + (n ? 0 : e * t.unit);
  };
}
const Ol = /* @__PURE__ */ new R();
function rf(i) {
  let e = i.firstChild, t = i.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? i.to : t.from } : null;
}
class Br {
  constructor(e, t) {
    this.specs = e;
    let n;
    function r(l) {
      let a = zt.newName();
      return (n || (n = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const s = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0, o = t.scope;
    this.scope = o instanceof je ? (l) => l.prop(li) == o.data : o ? (l) => l == o : void 0, this.style = Hu(e.map((l) => ({
      tag: l.tag,
      class: l.class || r(Object.assign({}, l, { tag: null }))
    })), {
      all: s
    }).style, this.module = n ? new zt(n) : null, this.themeType = t.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(e, t) {
    return new Br(e, t || {});
  }
}
const wo = /* @__PURE__ */ k.define(), sf = /* @__PURE__ */ k.define({
  combine(i) {
    return i.length ? [i[0]] : null;
  }
});
function Qs(i) {
  let e = i.facet(wo);
  return e.length ? e : i.facet(sf);
}
function of(i, e) {
  let t = [p0], n;
  return i instanceof Br && (i.module && t.push(T.styleModule.of(i.module)), n = i.themeType), e != null && e.fallback ? t.push(sf.of(i)) : n ? t.push(wo.computeN([T.darkTheme], (r) => r.facet(T.darkTheme) == (n == "dark") ? [i] : [])) : t.push(wo.of(i)), t;
}
class d0 {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = K(e.state), this.decorations = this.buildDeco(e, Qs(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = K(e.state), n = Qs(e.state), r = n != Qs(e.startState), { viewport: s } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < s.to && !r && t.type == this.tree.type && o >= s.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, n), this.decoratedTo = s.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return q.none;
    let n = new Hi();
    for (let { from: r, to: s } of e.visibleRanges)
      e0(this.tree, t, (o, l, a) => {
        n.add(o, l, this.markCache[a] || (this.markCache[a] = q.mark({ class: a })));
      }, r, s);
    return n.finish();
  }
}
const p0 = /* @__PURE__ */ Ai.high(/* @__PURE__ */ Te.fromClass(d0, {
  decorations: (i) => i.decorations
})), lf = /* @__PURE__ */ Br.define([
  {
    tag: m.meta,
    color: "#404740"
  },
  {
    tag: m.link,
    textDecoration: "underline"
  },
  {
    tag: m.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: m.emphasis,
    fontStyle: "italic"
  },
  {
    tag: m.strong,
    fontWeight: "bold"
  },
  {
    tag: m.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: m.keyword,
    color: "#708"
  },
  {
    tag: [m.atom, m.bool, m.url, m.contentSeparator, m.labelName],
    color: "#219"
  },
  {
    tag: [m.literal, m.inserted],
    color: "#164"
  },
  {
    tag: [m.string, m.deleted],
    color: "#a11"
  },
  {
    tag: [m.regexp, m.escape, /* @__PURE__ */ m.special(m.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ m.definition(m.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ m.local(m.variableName),
    color: "#30a"
  },
  {
    tag: [m.typeName, m.namespace],
    color: "#085"
  },
  {
    tag: m.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ m.special(m.variableName), m.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ m.definition(m.propertyName),
    color: "#00c"
  },
  {
    tag: m.comment,
    color: "#940"
  },
  {
    tag: m.invalid,
    color: "#f00"
  }
]), m0 = /* @__PURE__ */ T.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), af = 1e4, hf = "()[]{}", cf = /* @__PURE__ */ k.define({
  combine(i) {
    return zr(i, {
      afterCursor: !0,
      brackets: hf,
      maxScanDistance: af,
      renderMatch: y0
    });
  }
}), g0 = /* @__PURE__ */ q.mark({ class: "cm-matchingBracket" }), b0 = /* @__PURE__ */ q.mark({ class: "cm-nonmatchingBracket" });
function y0(i) {
  let e = [], t = i.matched ? g0 : b0;
  return e.push(t.range(i.start.from, i.start.to)), i.end && e.push(t.range(i.end.from, i.end.to)), e;
}
const Q0 = /* @__PURE__ */ ye.define({
  create() {
    return q.none;
  },
  update(i, e) {
    if (!e.docChanged && !e.selection)
      return i;
    let t = [], n = e.state.facet(cf);
    for (let r of e.state.selection.ranges) {
      if (!r.empty)
        continue;
      let s = lt(e.state, r.head, -1, n) || r.head > 0 && lt(e.state, r.head - 1, 1, n) || n.afterCursor && (lt(e.state, r.head, 1, n) || r.head < e.state.doc.length && lt(e.state, r.head + 1, -1, n));
      s && (t = t.concat(n.renderMatch(s, e.state)));
    }
    return q.set(t, !0);
  },
  provide: (i) => T.decorations.from(i)
}), S0 = [
  Q0,
  m0
];
function x0(i = {}) {
  return [cf.of(i), S0];
}
const uf = /* @__PURE__ */ new R();
function $o(i, e, t) {
  let n = i.prop(e < 0 ? R.openedBy : R.closedBy);
  if (n)
    return n;
  if (i.name.length == 1) {
    let r = t.indexOf(i.name);
    if (r > -1 && r % 2 == (e < 0 ? 1 : 0))
      return [t[r + e]];
  }
  return null;
}
function vo(i) {
  let e = i.type.prop(uf);
  return e ? e(i.node) : i;
}
function lt(i, e, t, n = {}) {
  let r = n.maxScanDistance || af, s = n.brackets || hf, o = K(i), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = $o(a.type, t, s);
    if (h && a.from < a.to) {
      let c = vo(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return w0(i, e, t, a, c, h, s);
    }
  }
  return $0(i, e, t, o, l.type, r, s);
}
function w0(i, e, t, n, r, s, o) {
  let l = n.parent, a = { from: r.from, to: r.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(n.from) : c.childAfter(n.to)))
    do
      if (t < 0 ? c.to <= n.from : c.from >= n.to) {
        if (h == 0 && s.indexOf(c.type.name) > -1 && c.from < c.to) {
          let u = vo(c);
          return { start: a, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 };
        } else if ($o(c.type, t, o))
          h++;
        else if ($o(c.type, -t, o)) {
          if (h == 0) {
            let u = vo(c);
            return {
              start: a,
              end: u && u.from < u.to ? { from: u.from, to: u.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function $0(i, e, t, n, r, s, o) {
  let l = t < 0 ? i.sliceDoc(e - 1, e) : i.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, c = i.doc.iterRange(e, t > 0 ? i.doc.length : 0), u = 0;
  for (let f = 0; !c.next().done && f <= s; ) {
    let O = c.value;
    t < 0 && (f += O.length);
    let d = e + f * t;
    for (let p = t > 0 ? 0 : O.length - 1, g = t > 0 ? O.length : -1; p != g; p += t) {
      let b = o.indexOf(O[p]);
      if (!(b < 0 || n.resolveInner(d + p, 1).type != r))
        if (b % 2 == 0 == t > 0)
          u++;
        else {
          if (u == 1)
            return { start: h, end: { from: d + p, to: d + p + 1 }, matched: b >> 1 == a >> 1 };
          u--;
        }
    }
    t > 0 && (f += O.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const v0 = /* @__PURE__ */ Object.create(null), ih = [be.none], nh = [], rh = /* @__PURE__ */ Object.create(null), k0 = /* @__PURE__ */ Object.create(null);
for (let [i, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  k0[i] = /* @__PURE__ */ P0(v0, e);
function Ss(i, e) {
  nh.indexOf(i) > -1 || (nh.push(i), console.warn(e));
}
function P0(i, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = i[h] || m[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : Ss(h, `Modifier ${h} used at start of tag`) : a.length ? Ss(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [c] : Ss(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      t.push(h);
  }
  if (!t.length)
    return 0;
  let n = e.replace(/ /g, "_"), r = n + " " + t.map((l) => l.id), s = rh[r];
  if (s)
    return s.id;
  let o = rh[r] = be.define({
    id: ih.length,
    name: n,
    props: [Wr({ [n]: t })]
  });
  return ih.push(o), o.id;
}
F.RTL, F.LTR;
class ff {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, n, r) {
    this.state = e, this.pos = t, this.explicit = n, this.view = r, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = K(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), n = Math.max(t.from, this.pos - 250), r = t.text.slice(n - t.from, this.pos - t.from), s = r.search(df(e, !1));
    return s < 0 ? null : { from: n + s, to: this.pos, text: r.slice(s) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(e, t, n) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), n && n.onDocChange && (this.abortOnDocChange = !0));
  }
}
function sh(i) {
  let e = Object.keys(i).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function T0(i) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: r } of i) {
    e[r[0]] = !0;
    for (let s = 1; s < r.length; s++)
      t[r[s]] = !0;
  }
  let n = sh(e) + sh(t) + "*$";
  return [new RegExp("^" + n), new RegExp(n)];
}
function Of(i) {
  let e = i.map((r) => typeof r == "string" ? { label: r } : r), [t, n] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : T0(e);
  return (r) => {
    let s = r.matchBefore(n);
    return s || r.explicit ? { from: s ? s.from : r.pos, options: e, validFor: t } : null;
  };
}
function Z0(i, e) {
  return (t) => {
    for (let n = K(t.state).resolveInner(t.pos, -1); n; n = n.parent) {
      if (i.indexOf(n.name) > -1)
        return null;
      if (n.type.isTop)
        break;
    }
    return e(t);
  };
}
class oh {
  constructor(e, t, n, r) {
    this.completion = e, this.source = t, this.match = n, this.score = r;
  }
}
function Jt(i) {
  return i.selection.main.from;
}
function df(i, e) {
  var t;
  let { source: n } = i, r = e && n[0] != "^", s = n[n.length - 1] != "$";
  return !r && !s ? i : new RegExp(`${r ? "^" : ""}(?:${n})${s ? "$" : ""}`, (t = i.flags) !== null && t !== void 0 ? t : i.ignoreCase ? "i" : "");
}
const bn = /* @__PURE__ */ $t.define();
function C0(i, e, t, n) {
  let { main: r } = i.selection, s = t - r.from, o = n - r.from;
  return {
    ...i.changeByRange((l) => {
      if (l != r && t != n && i.sliceDoc(l.from + s, l.from + o) != i.sliceDoc(t, n))
        return { range: l };
      let a = i.toText(e);
      return {
        changes: { from: l.from + s, to: n == r.from ? l.to : l.from + o, insert: a },
        range: y.cursor(l.from + s + a.length)
      };
    }),
    scrollIntoView: !0,
    userEvent: "input.complete"
  };
}
const lh = /* @__PURE__ */ new WeakMap();
function A0(i) {
  if (!Array.isArray(i))
    return i;
  let e = lh.get(i);
  return e || lh.set(i, e = Of(i)), e;
}
const yr = /* @__PURE__ */ _.define(), an = /* @__PURE__ */ _.define();
class X0 {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let n = it(e, t), r = Zt(n);
      this.chars.push(n);
      let s = e.slice(t, t + r), o = s.toUpperCase();
      this.folded.push(it(o == s ? s.toLowerCase() : o, 0)), t += r;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: n, any: r, precise: s, byWord: o } = this;
    if (t.length == 1) {
      let Q = it(e, 0), w = Zt(Q), Z = w == e.length ? 0 : -100;
      if (Q != t[0]) if (Q == n[0])
        Z += -200;
      else
        return null;
      return this.ret(Z, [0, w]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (l < 0) {
      for (let Q = 0, w = Math.min(e.length, 200); Q < w && h < a; ) {
        let Z = it(e, Q);
        (Z == t[h] || Z == n[h]) && (r[h++] = Q), Q += Zt(Z);
      }
      if (h < a)
        return null;
    }
    let c = 0, u = 0, f = !1, O = 0, d = -1, p = -1, g = /[a-z]/.test(e), b = !0;
    for (let Q = 0, w = Math.min(e.length, 200), Z = 0; Q < w && u < a; ) {
      let x = it(e, Q);
      l < 0 && (c < a && x == t[c] && (s[c++] = Q), O < a && (x == t[O] || x == n[O] ? (O == 0 && (d = Q), p = Q + 1, O++) : O = 0));
      let C, v = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (C = Vc(x)) != C.toLowerCase() ? 1 : C != C.toUpperCase() ? 2 : 0;
      (!Q || v == 1 && g || Z == 0 && v != 0) && (t[u] == x || n[u] == x && (f = !0) ? o[u++] = Q : o.length && (b = !1)), Z = v, Q += Zt(x);
    }
    return u == a && o[0] == 0 && b ? this.result(-100 + (f ? -200 : 0), o, e) : O == a && d == 0 ? this.ret(-200 - e.length + (p == e.length ? 0 : -100), [0, p]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : O == a ? this.ret(-900 - e.length, [d, p]) : u == a ? this.result(-100 + (f ? -200 : 0) + -700 + (b ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
  }
  result(e, t, n) {
    let r = [], s = 0;
    for (let o of t) {
      let l = o + (this.astral ? Zt(it(n, o)) : 1);
      s && r[s - 1] == o ? r[s - 1] = l : (r[s++] = o, r[s++] = l);
    }
    return this.ret(e - n.length, r);
  }
}
class R0 {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), n = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return n == null ? null : (this.matched = [0, t.length], this.score = n + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const se = /* @__PURE__ */ k.define({
  combine(i) {
    return zr(i, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: M0,
      filterStrict: !1,
      compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (n) => ah(e(n), t(n)),
      optionClass: (e, t) => (n) => ah(e(n), t(n)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function ah(i, e) {
  return i ? e ? i + " " + e : i : e;
}
function M0(i, e, t, n, r, s) {
  let o = i.textDirection == F.RTL, l = o, a = !1, h = "top", c, u, f = e.left - r.left, O = r.right - e.right, d = n.right - n.left, p = n.bottom - n.top;
  if (l && f < Math.min(d, O) ? l = !1 : !l && O < Math.min(d, f) && (l = !0), d <= (l ? f : O))
    c = Math.max(r.top, Math.min(t.top, r.bottom - p)) - e.top, u = Math.min(400, l ? f : O);
  else {
    a = !0, u = Math.min(
      400,
      (o ? e.right : r.right - e.left) - 30
      /* Info.Margin */
    );
    let Q = r.bottom - e.bottom;
    Q >= p || Q > e.top ? c = t.bottom - e.top : (h = "bottom", c = e.bottom - t.top);
  }
  let g = (e.bottom - e.top) / s.offsetHeight, b = (e.right - e.left) / s.offsetWidth;
  return {
    style: `${h}: ${c / g}px; max-width: ${u / b}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function z0(i) {
  let e = i.addToOptions.slice();
  return i.icons && e.push({
    render(t) {
      let n = document.createElement("div");
      return n.classList.add("cm-completionIcon"), t.type && n.classList.add(...t.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)), n.setAttribute("aria-hidden", "true"), n;
    },
    position: 20
  }), e.push({
    render(t, n, r, s) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = t.displayLabel || t.label, a = 0;
      for (let h = 0; h < s.length; ) {
        let c = s[h++], u = s[h++];
        c > a && o.appendChild(document.createTextNode(l.slice(a, c)));
        let f = o.appendChild(document.createElement("span"));
        f.appendChild(document.createTextNode(l.slice(c, u))), f.className = "cm-completionMatchedText", a = u;
      }
      return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let n = document.createElement("span");
      return n.className = "cm-completionDetail", n.textContent = t.detail, n;
    },
    position: 80
  }), e.sort((t, n) => t.position - n.position).map((t) => t.render);
}
function xs(i, e, t) {
  if (i <= t)
    return { from: 0, to: i };
  if (e < 0 && (e = 0), e <= i >> 1) {
    let r = Math.floor(e / t);
    return { from: r * t, to: (r + 1) * t };
  }
  let n = Math.floor((i - e) / t);
  return { from: i - (n + 1) * t, to: i - n * t };
}
class V0 {
  constructor(e, t, n) {
    this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let r = e.state.field(t), { options: s, selected: o } = r.open, l = e.state.facet(se);
    this.optionContent = z0(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = xs(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let c = a.target, u; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (u = /-(\d+)$/.exec(c.id)) && +u[1] < h.length) {
          this.applyCompletion(e, h[+u[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, !1);
      h && h.tooltip && e.state.facet(se).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: an.of(null) });
    }), this.showOptions(s, r.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let n = e.state.field(this.stateField), r = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), n != r) {
      let { options: s, selected: o, disabled: l } = n.open;
      (!r.open || r.open.options != s) && (this.range = xs(s.length, o, e.state.facet(se).maxRenderedOptions), this.showOptions(s, n.id)), this.updateSel(), l != ((t = r.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let n of this.currentClass.split(" "))
        n && this.dom.classList.remove(n);
      for (let n of t.split(" "))
        n && this.dom.classList.add(n);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    (t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = xs(t.options.length, t.selected, this.view.state.facet(se).maxRenderedOptions), this.showOptions(t.options, e.id));
    let n = this.updateSelectedOption(t.selected);
    if (n) {
      this.destroyInfo();
      let { completion: r } = t.options[t.selected], { info: s } = r;
      if (!s)
        return;
      let o = typeof s == "string" ? document.createTextNode(s) : s(r);
      if (!o)
        return;
      "then" in o ? o.then((l) => {
        l && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(l, r);
      }).catch((l) => Pe(this.view.state, l, "completion info")) : (this.addInfoPane(o, r), n.setAttribute("aria-describedby", this.info.id));
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let n = this.info = document.createElement("div");
    if (n.className = "cm-tooltip cm-completionInfo", n.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null)
      n.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: r, destroy: s } = e;
      n.appendChild(r), this.infoDestroy = s || null;
    }
    this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let n = this.list.firstChild, r = this.range.from; n; n = n.nextSibling, r++)
      n.nodeName != "LI" || !n.id ? r-- : r == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), t = n) : n.hasAttribute("aria-selected") && (n.removeAttribute("aria-selected"), n.removeAttribute("aria-describedby"));
    return t && q0(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), s = this.space;
    if (!s) {
      let o = this.dom.ownerDocument.documentElement;
      s = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return r.top > Math.min(s.bottom, t.bottom) - 10 || r.bottom < Math.max(s.top, t.top) + 10 ? null : this.view.state.facet(se).positionInfo(this.view, t, r, n, s, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, n) {
    const r = document.createElement("ul");
    r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions")), r.addEventListener("mousedown", (o) => {
      o.target == r && o.preventDefault();
    });
    let s = null;
    for (let o = n.from; o < n.to; o++) {
      let { completion: l, match: a } = e[o], { section: h } = l;
      if (h) {
        let f = typeof h == "string" ? h : h.name;
        if (f != s && (o > n.from || n.from == 0))
          if (s = f, typeof h != "string" && h.header)
            r.appendChild(h.header(h));
          else {
            let O = r.appendChild(document.createElement("completion-section"));
            O.textContent = f;
          }
      }
      const c = r.appendChild(document.createElement("li"));
      c.id = t + "-" + o, c.setAttribute("role", "option");
      let u = this.optionClass(l);
      u && (c.className = u);
      for (let f of this.optionContent) {
        let O = f(l, this.view.state, this.view, a);
        O && c.appendChild(O);
      }
    }
    return n.from && r.classList.add("cm-completionListIncompleteTop"), n.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function _0(i, e) {
  return (t) => new V0(t, i, e);
}
function q0(i, e) {
  let t = i.getBoundingClientRect(), n = e.getBoundingClientRect(), r = t.height / i.offsetHeight;
  n.top < t.top ? i.scrollTop -= (t.top - n.top) / r : n.bottom > t.bottom && (i.scrollTop += (n.bottom - t.bottom) / r);
}
function hh(i) {
  return (i.boost || 0) * 100 + (i.apply ? 10 : 0) + (i.info ? 5 : 0) + (i.type ? 1 : 0);
}
function Y0(i, e) {
  let t = [], n = null, r = null, s = (c) => {
    t.push(c);
    let { section: u } = c.completion;
    if (u) {
      n || (n = []);
      let f = typeof u == "string" ? u : u.name;
      n.some((O) => O.name == f) || n.push(typeof u == "string" ? { name: f } : u);
    }
  }, o = e.facet(se);
  for (let c of i)
    if (c.hasResult()) {
      let u = c.result.getMatch;
      if (c.result.filter === !1)
        for (let f of c.result.options)
          s(new oh(f, c.source, u ? u(f) : [], 1e9 - t.length));
      else {
        let f = e.sliceDoc(c.from, c.to), O, d = o.filterStrict ? new R0(f) : new X0(f);
        for (let p of c.result.options)
          if (O = d.match(p.label)) {
            let g = p.displayLabel ? u ? u(p, O.matched) : [] : O.matched, b = O.score + (p.boost || 0);
            if (s(new oh(p, c.source, g, b)), typeof p.section == "object" && p.section.rank === "dynamic") {
              let { name: Q } = p.section;
              r || (r = /* @__PURE__ */ Object.create(null)), r[Q] = Math.max(b, r[Q] || -1e9);
            }
          }
      }
    }
  if (n) {
    let c = /* @__PURE__ */ Object.create(null), u = 0, f = (O, d) => (O.rank === "dynamic" && d.rank === "dynamic" ? r[d.name] - r[O.name] : 0) || (typeof O.rank == "number" ? O.rank : 1e9) - (typeof d.rank == "number" ? d.rank : 1e9) || (O.name < d.name ? -1 : 1);
    for (let O of n.sort(f))
      u -= 1e5, c[O.name] = u;
    for (let O of t) {
      let { section: d } = O.completion;
      d && (O.score += c[typeof d == "string" ? d : d.name]);
    }
  }
  let l = [], a = null, h = o.compareCompletions;
  for (let c of t.sort((u, f) => f.score - u.score || h(u.completion, f.completion))) {
    let u = c.completion;
    !a || a.label != u.label || a.detail != u.detail || a.type != null && u.type != null && a.type != u.type || a.apply != u.apply || a.boost != u.boost ? l.push(c) : hh(c.completion) > hh(a) && (l[l.length - 1] = c), a = c.completion;
  }
  return l;
}
class ai {
  constructor(e, t, n, r, s, o) {
    this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = r, this.selected = s, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new ai(this.options, ch(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, n, r, s, o) {
    if (r && !o && e.some((h) => h.isPending))
      return r.setDisabled();
    let l = Y0(e, t);
    if (!l.length)
      return r && e.some((h) => h.isPending) ? r.setDisabled() : null;
    let a = t.facet(se).selectOnOpen ? 0 : -1;
    if (r && r.selected != a && r.selected != -1) {
      let h = r.options[r.selected].completion;
      for (let c = 0; c < l.length; c++)
        if (l[c].completion == h) {
          a = c;
          break;
        }
    }
    return new ai(l, ch(n, a), {
      pos: e.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8),
      create: j0,
      above: s.aboveCursor
    }, r ? r.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new ai(this.options, this.attrs, { ...this.tooltip, pos: e.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new ai(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Qr {
  constructor(e, t, n) {
    this.active = e, this.id = t, this.open = n;
  }
  static start() {
    return new Qr(L0, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, n = t.facet(se), s = (n.override || t.languageDataAt("autocomplete", Jt(t)).map(A0)).map((a) => (this.active.find((c) => c.source == a) || new Ve(
      a,
      this.active.some(
        (c) => c.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, n));
    s.length == this.active.length && s.every((a, h) => a == this.active[h]) && (s = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(dl));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !E0(s, this.active) || l ? o = ai.build(s, t, this.id, o, n, l) : o && o.disabled && !s.some((a) => a.isPending) && (o = null), !o && s.every((a) => !a.isPending) && s.some((a) => a.hasResult()) && (s = s.map((a) => a.hasResult() ? new Ve(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(mf) && (o = o && o.setSelected(a.value, this.id));
    return s == this.active && o == this.open ? this : new Qr(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? W0 : D0;
  }
}
function E0(i, e) {
  if (i == e)
    return !0;
  for (let t = 0, n = 0; ; ) {
    for (; t < i.length && !i[t].hasResult(); )
      t++;
    for (; n < e.length && !e[n].hasResult(); )
      n++;
    let r = t == i.length, s = n == e.length;
    if (r || s)
      return r == s;
    if (i[t++].result != e[n++].result)
      return !1;
  }
}
const W0 = {
  "aria-autocomplete": "list"
}, D0 = {};
function ch(i, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": i
  };
  return e > -1 && (t["aria-activedescendant"] = i + "-" + e), t;
}
const L0 = [];
function pf(i, e) {
  if (i.isUserEvent("input.complete")) {
    let n = i.annotation(bn);
    if (n && e.activateOnCompletion(n))
      return 12;
  }
  let t = i.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : i.isUserEvent("delete.backward") ? 2 : i.selection ? 8 : i.docChanged ? 16 : 0;
}
class Ve {
  constructor(e, t, n = !1) {
    this.source = e, this.state = t, this.explicit = n;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let n = pf(e, t), r = this;
    (n & 8 || n & 16 && this.touches(e)) && (r = new Ve(
      r.source,
      0
      /* State.Inactive */
    )), n & 4 && r.state == 0 && (r = new Ve(
      this.source,
      1
      /* State.Pending */
    )), r = r.updateFor(e, n);
    for (let s of e.effects)
      if (s.is(yr))
        r = new Ve(r.source, 1, s.value);
      else if (s.is(an))
        r = new Ve(
          r.source,
          0
          /* State.Inactive */
        );
      else if (s.is(dl))
        for (let o of s.value)
          o.source == r.source && (r = o);
    return r;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(Jt(e.state));
  }
}
class Oi extends Ve {
  constructor(e, t, n, r, s, o) {
    super(e, 3, t), this.limit = n, this.result = r, this.from = s, this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var n;
    if (!(t & 3))
      return this.map(e.changes);
    let r = this.result;
    r.map && !e.changes.empty && (r = r.map(r, e.changes));
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = Jt(e.state);
    if (l > o || !r || t & 2 && (Jt(e.startState) == this.from || l < this.limit))
      return new Ve(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = e.changes.mapPos(this.limit);
    return B0(r.validFor, e.state, s, o) ? new Oi(this.source, this.explicit, a, r, s, o) : r.update && (r = r.update(r, s, o, new ff(e.state, l, !1))) ? new Oi(this.source, this.explicit, a, r, r.from, (n = r.to) !== null && n !== void 0 ? n : Jt(e.state)) : new Ve(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new Oi(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new Ve(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function B0(i, e, t, n) {
  if (!i)
    return !1;
  let r = e.sliceDoc(t, n);
  return typeof i == "function" ? i(r, t, n, e) : df(i, !0).test(r);
}
const dl = /* @__PURE__ */ _.define({
  map(i, e) {
    return i.map((t) => t.map(e));
  }
}), mf = /* @__PURE__ */ _.define(), me = /* @__PURE__ */ ye.define({
  create() {
    return Qr.start();
  },
  update(i, e) {
    return i.update(e);
  },
  provide: (i) => [
    sl.from(i, (e) => e.tooltip),
    T.contentAttributes.from(i, (e) => e.attrs)
  ]
});
function pl(i, e) {
  const t = e.completion.apply || e.completion.label;
  let n = i.state.field(me).active.find((r) => r.source == e.source);
  return n instanceof Oi ? (typeof t == "string" ? i.dispatch({
    ...C0(i.state, t, n.from, n.to),
    annotations: bn.of(e.completion)
  }) : t(i, e.completion, n.from, n.to), !0) : !1;
}
const j0 = /* @__PURE__ */ _0(me, pl);
function En(i, e = "option") {
  return (t) => {
    let n = t.state.field(me, !1);
    if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < t.state.facet(se).interactionDelay)
      return !1;
    let r = 1, s;
    e == "page" && (s = Du(t, n.open.tooltip)) && (r = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = n.open.options, l = n.open.selected > -1 ? n.open.selected + r * (i ? 1 : -1) : i ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: mf.of(l) }), !0;
  };
}
const gf = (i) => {
  let e = i.state.field(me, !1);
  return i.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < i.state.facet(se).interactionDelay ? !1 : pl(i, e.open.options[e.open.selected]);
}, ws = (i) => i.state.field(me, !1) ? (i.dispatch({ effects: yr.of(!0) }), !0) : !1, I0 = (i) => {
  let e = i.state.field(me, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (i.dispatch({ effects: an.of(null) }), !0);
};
class N0 {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const G0 = 50, U0 = 1e3, F0 = /* @__PURE__ */ Te.fromClass(class {
  constructor(i) {
    this.view = i, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of i.state.field(me).active)
      e.isPending && this.startQuery(e);
  }
  update(i) {
    let e = i.state.field(me), t = i.state.facet(se);
    if (!i.selectionSet && !i.docChanged && i.startState.field(me) == e)
      return;
    let n = i.transactions.some((s) => {
      let o = pf(s, t);
      return o & 8 || (s.selection || s.docChanged) && !(o & 3);
    });
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (n || o.context.abortOnDocChange && i.docChanged || o.updates.length + i.transactions.length > G0 && Date.now() - o.time > U0) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            Pe(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(s--, 1);
      } else
        o.updates.push(...i.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), i.transactions.some((s) => s.effects.some((o) => o.is(yr))) && (this.pendingStart = !0);
    let r = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((s) => s.isPending && !this.running.some((o) => o.active.source == s.source)) ? setTimeout(() => this.startUpdate(), r) : -1, this.composing != 0)
      for (let s of i.transactions)
        s.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && s.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: i } = this.view, e = i.field(me);
    for (let t of e.active)
      t.isPending && !this.running.some((n) => n.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(se).updateSyncTime));
  }
  startQuery(i) {
    let { state: e } = this.view, t = Jt(e), n = new ff(e, t, i.explicit, this.view), r = new N0(i, n);
    this.running.push(r), Promise.resolve(i.source(n)).then((s) => {
      r.context.aborted || (r.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: an.of(null) }), Pe(this.view.state, s);
    });
  }
  scheduleAccept() {
    this.running.every((i) => i.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(se).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var i;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(se), n = this.view.state.field(me);
    for (let r = 0; r < this.running.length; r++) {
      let s = this.running[r];
      if (s.done === void 0)
        continue;
      if (this.running.splice(r--, 1), s.done) {
        let l = Jt(s.updates.length ? s.updates[0].startState : this.view.state), a = Math.min(l, s.done.from + (s.active.explicit ? 0 : 1)), h = new Oi(s.active.source, s.active.explicit, a, s.done, s.done.from, (i = s.done.to) !== null && i !== void 0 ? i : l);
        for (let c of s.updates)
          h = h.update(c, t);
        if (h.hasResult()) {
          e.push(h);
          continue;
        }
      }
      let o = n.active.find((l) => l.source == s.active.source);
      if (o && o.isPending)
        if (s.done == null) {
          let l = new Ve(
            s.active.source,
            0
            /* State.Inactive */
          );
          for (let a of s.updates)
            l = l.update(a, t);
          l.isPending || e.push(l);
        } else
          this.startQuery(o);
    }
    (e.length || n.open && n.open.disabled) && this.view.dispatch({ effects: dl.of(e) });
  }
}, {
  eventHandlers: {
    blur(i) {
      let e = this.view.state.field(me, !1);
      if (e && e.tooltip && this.view.state.facet(se).closeOnBlur) {
        let t = e.open && Du(this.view, e.open.tooltip);
        (!t || !t.dom.contains(i.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: an.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: yr.of(!1) }), 20), this.composing = 0;
    }
  }
}), H0 = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), K0 = /* @__PURE__ */ Ai.highest(/* @__PURE__ */ T.domEventHandlers({
  keydown(i, e) {
    let t = e.state.field(me, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || i.key.length > 1 || i.ctrlKey && !(H0 && i.altKey) || i.metaKey)
      return !1;
    let n = t.open.options[t.open.selected], r = t.active.find((o) => o.source == n.source), s = n.completion.commitCharacters || r.result.commitCharacters;
    return s && s.indexOf(i.key) > -1 && pl(e, n), !1;
  }
})), bf = /* @__PURE__ */ T.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
});
class J0 {
  constructor(e, t, n, r) {
    this.field = e, this.line = t, this.from = n, this.to = r;
  }
}
class ml {
  constructor(e, t, n) {
    this.field = e, this.from = t, this.to = n;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, fe.TrackDel), n = e.mapPos(this.to, 1, fe.TrackDel);
    return t == null || n == null ? null : new ml(this.field, t, n);
  }
}
class gl {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let n = [], r = [t], s = e.doc.lineAt(t), o = /^\s*/.exec(s.text)[0];
    for (let a of this.lines) {
      if (n.length) {
        let h = o, c = /^\t*/.exec(a)[0].length;
        for (let u = 0; u < c; u++)
          h += e.facet(gn);
        r.push(t + h.length - c), a = h + a.slice(c);
      }
      n.push(a), t += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new ml(a.field, r[a.line] + a.from, r[a.line] + a.to));
    return { text: n, ranges: l };
  }
  static parse(e) {
    let t = [], n = [], r = [], s;
    for (let o of e.split(/\r\n?|\n/)) {
      for (; s = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(o); ) {
        let l = s[1] ? +s[1] : null, a = s[2] || s[3] || "", h = -1, c = a.replace(/\\[{}]/g, (u) => u[1]);
        for (let u = 0; u < t.length; u++)
          (l != null ? t[u].seq == l : c && t[u].name == c) && (h = u);
        if (h < 0) {
          let u = 0;
          for (; u < t.length && (l == null || t[u].seq != null && t[u].seq < l); )
            u++;
          t.splice(u, 0, { seq: l, name: c }), h = u;
          for (let f of r)
            f.field >= h && f.field++;
        }
        for (let u of r)
          if (u.line == n.length && u.from > s.index) {
            let f = s[2] ? 3 + (s[1] || "").length : 2;
            u.from -= f, u.to -= f;
          }
        r.push(new J0(h, n.length, s.index, s.index + c.length)), o = o.slice(0, s.index) + a + o.slice(s.index + s[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, h) => {
        for (let c of r)
          c.line == n.length && c.from > h && (c.from--, c.to--);
        return a;
      }), n.push(o);
    }
    return new gl(n, r);
  }
}
let eb = /* @__PURE__ */ q.widget({ widget: /* @__PURE__ */ new class extends fn {
  toDOM() {
    let i = document.createElement("span");
    return i.className = "cm-snippetFieldPosition", i;
  }
  ignoreEvent() {
    return !1;
  }
}() }), tb = /* @__PURE__ */ q.mark({ class: "cm-snippetField" });
class Xi {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = q.set(e.map((n) => (n.from == n.to ? eb : tb).range(n.from, n.to)), !0);
  }
  map(e) {
    let t = [];
    for (let n of this.ranges) {
      let r = n.map(e);
      if (!r)
        return null;
      t.push(r);
    }
    return new Xi(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((n) => n.field == this.active && n.from <= t.from && n.to >= t.to));
  }
}
const yn = /* @__PURE__ */ _.define({
  map(i, e) {
    return i && i.map(e);
  }
}), ib = /* @__PURE__ */ _.define(), hn = /* @__PURE__ */ ye.define({
  create() {
    return null;
  },
  update(i, e) {
    for (let t of e.effects) {
      if (t.is(yn))
        return t.value;
      if (t.is(ib) && i)
        return new Xi(i.ranges, t.value);
    }
    return i && e.docChanged && (i = i.map(e.changes)), i && e.selection && !i.selectionInsideField(e.selection) && (i = null), i;
  },
  provide: (i) => T.decorations.from(i, (e) => e ? e.deco : q.none)
});
function bl(i, e) {
  return y.create(i.filter((t) => t.field == e).map((t) => y.range(t.from, t.to)));
}
function yf(i) {
  let e = gl.parse(i);
  return (t, n, r, s) => {
    let { text: o, ranges: l } = e.instantiate(t.state, r), { main: a } = t.state.selection, h = {
      changes: { from: r, to: s == a.from ? a.to : s, insert: V.of(o) },
      scrollIntoView: !0,
      annotations: n ? [bn.of(n), te.userEvent.of("input.complete")] : void 0
    };
    if (l.length && (h.selection = bl(l, 0)), l.some((c) => c.field > 0)) {
      let c = new Xi(l, 0), u = h.effects = [yn.of(c)];
      t.state.field(hn, !1) === void 0 && u.push(_.appendConfig.of([hn, lb, ab, bf]));
    }
    t.dispatch(t.state.update(h));
  };
}
function Qf(i) {
  return ({ state: e, dispatch: t }) => {
    let n = e.field(hn, !1);
    if (!n || i < 0 && n.active == 0)
      return !1;
    let r = n.active + i, s = i > 0 && !n.ranges.some((o) => o.field == r + i);
    return t(e.update({
      selection: bl(n.ranges, r),
      effects: yn.of(s ? null : new Xi(n.ranges, r)),
      scrollIntoView: !0
    })), !0;
  };
}
const nb = ({ state: i, dispatch: e }) => i.field(hn, !1) ? (e(i.update({ effects: yn.of(null) })), !0) : !1, rb = /* @__PURE__ */ Qf(1), sb = /* @__PURE__ */ Qf(-1), ob = [
  { key: "Tab", run: rb, shift: sb },
  { key: "Escape", run: nb }
], uh = /* @__PURE__ */ k.define({
  combine(i) {
    return i.length ? i[0] : ob;
  }
}), lb = /* @__PURE__ */ Ai.highest(/* @__PURE__ */ mn.compute([uh], (i) => i.facet(uh)));
function Qe(i, e) {
  return { ...e, apply: yf(i) };
}
const ab = /* @__PURE__ */ T.domEventHandlers({
  mousedown(i, e) {
    let t = e.state.field(hn, !1), n;
    if (!t || (n = e.posAtCoords({ x: i.clientX, y: i.clientY })) == null)
      return !1;
    let r = t.ranges.find((s) => s.from <= n && s.to >= n);
    return !r || r.field == t.active ? !1 : (e.dispatch({
      selection: bl(t.ranges, r.field),
      effects: yn.of(t.ranges.some((s) => s.field > r.field) ? new Xi(t.ranges, r.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), Sr = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Ht = /* @__PURE__ */ _.define({
  map(i, e) {
    let t = e.mapPos(i, -1, fe.TrackAfter);
    return t ?? void 0;
  }
}), yl = /* @__PURE__ */ new class extends Mt {
}();
yl.startSide = 1;
yl.endSide = -1;
const Sf = /* @__PURE__ */ ye.define({
  create() {
    return z.empty;
  },
  update(i, e) {
    if (i = i.map(e.changes), e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      i = i.update({ filter: (n) => n >= t.from && n <= t.to });
    }
    for (let t of e.effects)
      t.is(Ht) && (i = i.update({ add: [yl.range(t.value, t.value + 1)] }));
    return i;
  }
});
function hb() {
  return [Ob, Sf];
}
const $s = "()[]{}<>«»»«［］｛｝";
function cb(i) {
  for (let e = 0; e < $s.length; e += 2)
    if ($s.charCodeAt(e) == i)
      return $s.charAt(e + 1);
  return Vc(i < 128 ? i : i + 1);
}
function ub(i, e) {
  return i.languageDataAt("closeBrackets", e)[0] || Sr;
}
const fb = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), Ob = /* @__PURE__ */ T.inputHandler.of((i, e, t, n) => {
  if ((fb ? i.composing : i.compositionStarted) || i.state.readOnly)
    return !1;
  let r = i.state.selection.main;
  if (n.length > 2 || n.length == 2 && Zt(it(n, 0)) == 1 || e != r.from || t != r.to)
    return !1;
  let s = db(i.state, n);
  return s ? (i.dispatch(s), !0) : !1;
});
function db(i, e) {
  let t = ub(i, i.selection.main.head), n = t.brackets || Sr.brackets;
  for (let r of n) {
    let s = cb(it(r, 0));
    if (e == r)
      return s == r ? gb(i, r, n.indexOf(r + r + r) > -1, t) : pb(i, r, s, t.before || Sr.before);
    if (e == s && xf(i, i.selection.main.from))
      return mb(i, r, s);
  }
  return null;
}
function xf(i, e) {
  let t = !1;
  return i.field(Sf).between(0, i.doc.length, (n) => {
    n == e && (t = !0);
  }), t;
}
function Ql(i, e) {
  let t = i.sliceString(e, e + 2);
  return t.slice(0, Zt(it(t, 0)));
}
function pb(i, e, t, n) {
  let r = null, s = i.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: Ht.of(o.to + e.length),
        range: y.range(o.anchor + e.length, o.head + e.length)
      };
    let l = Ql(i.doc, o.head);
    return !l || /\s/.test(l) || n.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: Ht.of(o.head + e.length),
      range: y.cursor(o.head + e.length)
    } : { range: r = o };
  });
  return r ? null : i.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function mb(i, e, t) {
  let n = null, r = i.changeByRange((s) => s.empty && Ql(i.doc, s.head) == t ? {
    changes: { from: s.head, to: s.head + t.length, insert: t },
    range: y.cursor(s.head + t.length)
  } : n = { range: s });
  return n ? null : i.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function gb(i, e, t, n) {
  let r = n.stringPrefixes || Sr.stringPrefixes, s = null, o = i.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Ht.of(l.to + e.length),
        range: y.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, h = Ql(i.doc, a), c;
    if (h == e) {
      if (fh(i, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Ht.of(a + e.length),
          range: y.cursor(a + e.length)
        };
      if (xf(i, a)) {
        let f = t && i.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + f.length, insert: f },
          range: y.cursor(a + f.length)
        };
      }
    } else {
      if (t && i.sliceDoc(a - 2 * e.length, a) == e + e && (c = Oh(i, a - 2 * e.length, r)) > -1 && fh(i, c))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Ht.of(a + e.length),
          range: y.cursor(a + e.length)
        };
      if (i.charCategorizer(a)(h) != Re.Word && Oh(i, a, r) > -1 && !bb(i, a, e, r))
        return {
          changes: { insert: e + e, from: a },
          effects: Ht.of(a + e.length),
          range: y.cursor(a + e.length)
        };
    }
    return { range: s = l };
  });
  return s ? null : i.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function fh(i, e) {
  let t = K(i).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function bb(i, e, t, n) {
  let r = K(i).resolveInner(e, -1), s = n.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = i.sliceDoc(r.from, Math.min(r.to, r.from + t.length + s)), a = l.indexOf(t);
    if (!a || a > -1 && n.indexOf(l.slice(0, a)) > -1) {
      let c = r.firstChild;
      for (; c && c.from == r.from && c.to - c.from > t.length + a; ) {
        if (i.sliceDoc(c.to - t.length, c.to) == t)
          return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let h = r.to == e && r.parent;
    if (!h)
      break;
    r = h;
  }
  return !1;
}
function Oh(i, e, t) {
  let n = i.charCategorizer(e);
  if (n(i.sliceDoc(e - 1, e)) != Re.Word)
    return e;
  for (let r of t) {
    let s = e - r.length;
    if (i.sliceDoc(s, e) == r && n(i.sliceDoc(s - 1, s)) != Re.Word)
      return s;
  }
  return -1;
}
function yb(i = {}) {
  return [
    K0,
    me,
    se.of(i),
    F0,
    Qb,
    bf
  ];
}
const wf = [
  { key: "Ctrl-Space", run: ws },
  { mac: "Alt-`", run: ws },
  { mac: "Alt-i", run: ws },
  { key: "Escape", run: I0 },
  { key: "ArrowDown", run: /* @__PURE__ */ En(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ En(!1) },
  { key: "PageDown", run: /* @__PURE__ */ En(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ En(!1, "page") },
  { key: "Enter", run: gf }
], Qb = /* @__PURE__ */ Ai.highest(/* @__PURE__ */ mn.computeN([se], (i) => i.facet(se).defaultKeymap ? [wf] : []));
function Sl(i) {
  let e = i.field(me, !1);
  return e && e.active.some((t) => t.isPending) ? "pending" : e && e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? "active" : null;
}
const Sb = (i) => {
  let { state: e } = i, t = e.doc.lineAt(e.selection.main.from), n = wl(i.state, t.from);
  return n.line ? xb(i) : n.block ? $b(i) : !1;
};
function xl(i, e) {
  return ({ state: t, dispatch: n }) => {
    if (t.readOnly)
      return !1;
    let r = i(e, t);
    return r ? (n(t.update(r)), !0) : !1;
  };
}
const xb = /* @__PURE__ */ xl(
  Pb,
  0
  /* CommentOption.Toggle */
), wb = /* @__PURE__ */ xl(
  $f,
  0
  /* CommentOption.Toggle */
), $b = /* @__PURE__ */ xl(
  (i, e) => $f(i, e, kb(e)),
  0
  /* CommentOption.Toggle */
);
function wl(i, e) {
  let t = i.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
const Yi = 50;
function vb(i, { open: e, close: t }, n, r) {
  let s = i.sliceDoc(n - Yi, n), o = i.sliceDoc(r, r + Yi), l = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(o)[0].length, h = s.length - l;
  if (s.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: n - l, margin: l && 1 },
      close: { pos: r + a, margin: a && 1 }
    };
  let c, u;
  r - n <= 2 * Yi ? c = u = i.sliceDoc(n, r) : (c = i.sliceDoc(n, n + Yi), u = i.sliceDoc(r - Yi, r));
  let f = /^\s*/.exec(c)[0].length, O = /\s*$/.exec(u)[0].length, d = u.length - O - t.length;
  return c.slice(f, f + e.length) == e && u.slice(d, d + t.length) == t ? {
    open: {
      pos: n + f + e.length,
      margin: /\s/.test(c.charAt(f + e.length)) ? 1 : 0
    },
    close: {
      pos: r - O - t.length,
      margin: /\s/.test(u.charAt(d - 1)) ? 1 : 0
    }
  } : null;
}
function kb(i) {
  let e = [];
  for (let t of i.selection.ranges) {
    let n = i.doc.lineAt(t.from), r = t.to <= n.to ? n : i.doc.lineAt(t.to);
    r.from > n.from && r.from == t.to && (r = t.to == n.to + 1 ? n : i.doc.lineAt(t.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > n.from ? e[s].to = r.to : e.push({ from: n.from + /^\s*/.exec(n.text)[0].length, to: r.to });
  }
  return e;
}
function $f(i, e, t = e.selection.ranges) {
  let n = t.map((s) => wl(e, s.from).block);
  if (!n.every((s) => s))
    return null;
  let r = t.map((s, o) => vb(e, n[o], s.from, s.to));
  if (i != 2 && !r.every((s) => s))
    return { changes: e.changes(t.map((s, o) => r[o] ? [] : [{ from: s.from, insert: n[o].open + " " }, { from: s.to, insert: " " + n[o].close }])) };
  if (i != 1 && r.some((s) => s)) {
    let s = [];
    for (let o = 0, l; o < r.length; o++)
      if (l = r[o]) {
        let a = n[o], { open: h, close: c } = l;
        s.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: s };
  }
  return null;
}
function Pb(i, e, t = e.selection.ranges) {
  let n = [], r = -1;
  for (let { from: s, to: o } of t) {
    let l = n.length, a = 1e9, h = wl(e, s).line;
    if (h) {
      for (let c = s; c <= o; ) {
        let u = e.doc.lineAt(c);
        if (u.from > r && (s == o || o > u.from)) {
          r = u.from;
          let f = /^\s*/.exec(u.text)[0].length, O = f == u.length, d = u.text.slice(f, f + h.length) == h ? f : -1;
          f < u.text.length && f < a && (a = f), n.push({ line: u, comment: d, token: h, indent: f, empty: O, single: !1 });
        }
        c = u.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < n.length; c++)
          n[c].indent < n[c].line.text.length && (n[c].indent = a);
      n.length == l + 1 && (n[l].single = !0);
    }
  }
  if (i != 2 && n.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: l, token: a, indent: h, empty: c, single: u } of n)
      (u || !c) && s.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(s);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (i != 1 && n.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: o, comment: l, token: a } of n)
      if (l >= 0) {
        let h = o.from + l, c = h + a.length;
        o.text[c - o.from] == " " && c++, s.push({ from: h, to: c });
      }
    return { changes: s };
  }
  return null;
}
const ko = /* @__PURE__ */ $t.define(), Tb = /* @__PURE__ */ $t.define(), Zb = /* @__PURE__ */ k.define(), vf = /* @__PURE__ */ k.define({
  combine(i) {
    return zr(i, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r)
    });
  }
}), kf = /* @__PURE__ */ ye.define({
  create() {
    return at.empty;
  },
  update(i, e) {
    let t = e.state.facet(vf), n = e.annotation(ko);
    if (n) {
      let a = xe.fromTransaction(e, n.selection), h = n.side, c = h == 0 ? i.undone : i.done;
      return a ? c = xr(c, c.length, t.minDepth, a) : c = Tf(c, e.startState.selection), new at(h == 0 ? n.rest : c, h == 0 ? c : n.rest);
    }
    let r = e.annotation(Tb);
    if ((r == "full" || r == "before") && (i = i.isolate()), e.annotation(te.addToHistory) === !1)
      return e.changes.empty ? i : i.addMapping(e.changes.desc);
    let s = xe.fromTransaction(e), o = e.annotation(te.time), l = e.annotation(te.userEvent);
    return s ? i = i.addChanges(s, o, l, t, e) : e.selection && (i = i.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (r == "full" || r == "after") && (i = i.isolate()), i;
  },
  toJSON(i) {
    return { done: i.done.map((e) => e.toJSON()), undone: i.undone.map((e) => e.toJSON()) };
  },
  fromJSON(i) {
    return new at(i.done.map(xe.fromJSON), i.undone.map(xe.fromJSON));
  }
});
function Cb(i = {}) {
  return [
    kf,
    vf.of(i),
    T.domEventHandlers({
      beforeinput(e, t) {
        let n = e.inputType == "historyUndo" ? $l : e.inputType == "historyRedo" ? Po : null;
        return n ? (e.preventDefault(), n(t)) : !1;
      }
    })
  ];
}
function jr(i, e) {
  return function({ state: t, dispatch: n }) {
    if (!e && t.readOnly)
      return !1;
    let r = t.field(kf, !1);
    if (!r)
      return !1;
    let s = r.pop(i, t, e);
    return s ? (n(s), !0) : !1;
  };
}
const $l = /* @__PURE__ */ jr(0, !1), Po = /* @__PURE__ */ jr(1, !1), Ab = /* @__PURE__ */ jr(0, !0), Xb = /* @__PURE__ */ jr(1, !0);
class xe {
  constructor(e, t, n, r, s) {
    this.changes = e, this.effects = t, this.mapped = n, this.startSelection = r, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new xe(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, n;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
      selectionsAfter: this.selectionsAfter.map((r) => r.toJSON())
    };
  }
  static fromJSON(e) {
    return new xe(e.changes && ne.fromJSON(e.changes), [], e.mapped && ht.fromJSON(e.mapped), e.startSelection && y.fromJSON(e.startSelection), e.selectionsAfter.map(y.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let n = _e;
    for (let r of e.startState.facet(Zb)) {
      let s = r(e);
      s.length && (n = n.concat(s));
    }
    return !n.length && e.changes.empty ? null : new xe(e.changes.invert(e.startState.doc), n, void 0, t || e.startState.selection, _e);
  }
  static selection(e) {
    return new xe(void 0, _e, void 0, void 0, e);
  }
}
function xr(i, e, t, n) {
  let r = e + 1 > t + 20 ? e - t - 1 : 0, s = i.slice(r, e);
  return s.push(n), s;
}
function Rb(i, e) {
  let t = [], n = !1;
  return i.iterChangedRanges((r, s) => t.push(r, s)), e.iterChangedRanges((r, s, o, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], c = t[a++];
      l >= h && o <= c && (n = !0);
    }
  }), n;
}
function Mb(i, e) {
  return i.ranges.length == e.ranges.length && i.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length === 0;
}
function Pf(i, e) {
  return i.length ? e.length ? i.concat(e) : i : e;
}
const _e = [], zb = 200;
function Tf(i, e) {
  if (i.length) {
    let t = i[i.length - 1], n = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - zb));
    return n.length && n[n.length - 1].eq(e) ? i : (n.push(e), xr(i, i.length - 1, 1e9, t.setSelAfter(n)));
  } else
    return [xe.selection([e])];
}
function Vb(i) {
  let e = i[i.length - 1], t = i.slice();
  return t[i.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function vs(i, e) {
  if (!i.length)
    return i;
  let t = i.length, n = _e;
  for (; t; ) {
    let r = _b(i[t - 1], e, n);
    if (r.changes && !r.changes.empty || r.effects.length) {
      let s = i.slice(0, t);
      return s[t - 1] = r, s;
    } else
      e = r.mapped, t--, n = r.selectionsAfter;
  }
  return n.length ? [xe.selection(n)] : _e;
}
function _b(i, e, t) {
  let n = Pf(i.selectionsAfter.length ? i.selectionsAfter.map((l) => l.map(e)) : _e, t);
  if (!i.changes)
    return xe.selection(n);
  let r = i.changes.map(e), s = e.mapDesc(i.changes, !0), o = i.mapped ? i.mapped.composeDesc(s) : s;
  return new xe(r, _.mapEffects(i.effects, e), o, i.startSelection.map(s), n);
}
const qb = /^(input\.type|delete)($|\.)/;
class at {
  constructor(e, t, n = 0, r = void 0) {
    this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = r;
  }
  isolate() {
    return this.prevTime ? new at(this.done, this.undone) : this;
  }
  addChanges(e, t, n, r, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!n || qb.test(n)) && (!l.selectionsAfter.length && t - this.prevTime < r.newGroupDelay && r.joinToEvent(s, Rb(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    n == "input.type.compose") ? o = xr(o, o.length - 1, r.minDepth, new xe(e.changes.compose(l.changes), Pf(_.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, _e)) : o = xr(o, o.length, r.minDepth, e), new at(o, _e, t, n);
  }
  addSelection(e, t, n, r) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : _e;
    return s.length > 0 && t - this.prevTime < r && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && Mb(s[s.length - 1], e) ? this : new at(Tf(this.done, e), this.undone, t, n);
  }
  addMapping(e) {
    return new at(vs(this.done, e), vs(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, n) {
    let r = e == 0 ? this.done : this.undone;
    if (r.length == 0)
      return null;
    let s = r[r.length - 1], o = s.selectionsAfter[0] || t.selection;
    if (n && s.selectionsAfter.length)
      return t.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: ko.of({ side: e, rest: Vb(r), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let l = r.length == 1 ? _e : r.slice(0, r.length - 1);
      return s.mapped && (l = vs(l, s.mapped)), t.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: ko.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
at.empty = /* @__PURE__ */ new at(_e, _e);
const Yb = [
  { key: "Mod-z", run: $l, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Po, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Po, preventDefault: !0 },
  { key: "Mod-u", run: Ab, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Xb, preventDefault: !0 }
];
function Ri(i, e) {
  return y.create(i.ranges.map(e), i.mainIndex);
}
function Ue(i, e) {
  return i.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Fe({ state: i, dispatch: e }, t) {
  let n = Ri(i.selection, t);
  return n.eq(i.selection, !0) ? !1 : (e(Ue(i, n)), !0);
}
function Ir(i, e) {
  return y.cursor(e ? i.to : i.from);
}
function Zf(i, e) {
  return Fe(i, (t) => t.empty ? i.moveByChar(t, e) : Ir(t, e));
}
function de(i) {
  return i.textDirectionAt(i.state.selection.main.head) == F.LTR;
}
const Cf = (i) => Zf(i, !de(i)), Af = (i) => Zf(i, de(i));
function Xf(i, e) {
  return Fe(i, (t) => t.empty ? i.moveByGroup(t, e) : Ir(t, e));
}
const Eb = (i) => Xf(i, !de(i)), Wb = (i) => Xf(i, de(i));
function Db(i, e, t) {
  if (e.type.prop(t))
    return !0;
  let n = e.to - e.from;
  return n && (n > 2 || /[^\s,.;:]/.test(i.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Nr(i, e, t) {
  let n = K(i).resolveInner(e.head), r = t ? R.closedBy : R.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? n.childAfter(a) : n.childBefore(a);
    if (!h)
      break;
    Db(i, h, r) ? n = h : a = t ? h.to : h.from;
  }
  let s = n.type.prop(r), o, l;
  return s && (o = t ? lt(i, n.from, 1) : lt(i, n.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? n.to : n.from, y.cursor(l, t ? -1 : 1);
}
const Lb = (i) => Fe(i, (e) => Nr(i.state, e, !de(i))), Bb = (i) => Fe(i, (e) => Nr(i.state, e, de(i)));
function Rf(i, e) {
  return Fe(i, (t) => {
    if (!t.empty)
      return Ir(t, e);
    let n = i.moveVertically(t, e);
    return n.head != t.head ? n : i.moveToLineBoundary(t, e);
  });
}
const Mf = (i) => Rf(i, !1), zf = (i) => Rf(i, !0);
function Vf(i) {
  let e = i.scrollDOM.clientHeight < i.scrollDOM.scrollHeight - 2, t = 0, n = 0, r;
  if (e) {
    for (let s of i.state.facet(T.scrollMargins)) {
      let o = s(i);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)), o != null && o.bottom && (n = Math.max(o == null ? void 0 : o.bottom, n));
    }
    r = i.scrollDOM.clientHeight - t - n;
  } else
    r = (i.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: n,
    selfScroll: e,
    height: Math.max(i.defaultLineHeight, r - 5)
  };
}
function _f(i, e) {
  let t = Vf(i), { state: n } = i, r = Ri(n.selection, (o) => o.empty ? i.moveVertically(o, e, t.height) : Ir(o, e));
  if (r.eq(n.selection))
    return !1;
  let s;
  if (t.selfScroll) {
    let o = i.coordsAtPos(n.selection.main.head), l = i.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < h && (s = T.scrollIntoView(r.main.head, { y: "start", yMargin: o.top - a }));
  }
  return i.dispatch(Ue(n, r), { effects: s }), !0;
}
const dh = (i) => _f(i, !1), To = (i) => _f(i, !0);
function Dt(i, e, t) {
  let n = i.lineBlockAt(e.head), r = i.moveToLineBoundary(e, t);
  if (r.head == e.head && r.head != (t ? n.to : n.from) && (r = i.moveToLineBoundary(e, t, !1)), !t && r.head == n.from && n.length) {
    let s = /^\s*/.exec(i.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
    s && e.head != n.from + s && (r = y.cursor(n.from + s));
  }
  return r;
}
const jb = (i) => Fe(i, (e) => Dt(i, e, !0)), Ib = (i) => Fe(i, (e) => Dt(i, e, !1)), Nb = (i) => Fe(i, (e) => Dt(i, e, !de(i))), Gb = (i) => Fe(i, (e) => Dt(i, e, de(i))), Ub = (i) => Fe(i, (e) => y.cursor(i.lineBlockAt(e.head).from, 1)), Fb = (i) => Fe(i, (e) => y.cursor(i.lineBlockAt(e.head).to, -1));
function Hb(i, e, t) {
  let n = !1, r = Ri(i.selection, (s) => {
    let o = lt(i, s.head, -1) || lt(i, s.head, 1) || s.head > 0 && lt(i, s.head - 1, 1) || s.head < i.doc.length && lt(i, s.head + 1, -1);
    if (!o || !o.end)
      return s;
    n = !0;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return y.cursor(l);
  });
  return n ? (e(Ue(i, r)), !0) : !1;
}
const Kb = ({ state: i, dispatch: e }) => Hb(i, e);
function De(i, e) {
  let t = Ri(i.state.selection, (n) => {
    let r = e(n);
    return y.range(n.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
  });
  return t.eq(i.state.selection) ? !1 : (i.dispatch(Ue(i.state, t)), !0);
}
function qf(i, e) {
  return De(i, (t) => i.moveByChar(t, e));
}
const Yf = (i) => qf(i, !de(i)), Ef = (i) => qf(i, de(i));
function Wf(i, e) {
  return De(i, (t) => i.moveByGroup(t, e));
}
const Jb = (i) => Wf(i, !de(i)), ey = (i) => Wf(i, de(i)), ty = (i) => De(i, (e) => Nr(i.state, e, !de(i))), iy = (i) => De(i, (e) => Nr(i.state, e, de(i)));
function Df(i, e) {
  return De(i, (t) => i.moveVertically(t, e));
}
const Lf = (i) => Df(i, !1), Bf = (i) => Df(i, !0);
function jf(i, e) {
  return De(i, (t) => i.moveVertically(t, e, Vf(i).height));
}
const ph = (i) => jf(i, !1), mh = (i) => jf(i, !0), ny = (i) => De(i, (e) => Dt(i, e, !0)), ry = (i) => De(i, (e) => Dt(i, e, !1)), sy = (i) => De(i, (e) => Dt(i, e, !de(i))), oy = (i) => De(i, (e) => Dt(i, e, de(i))), ly = (i) => De(i, (e) => y.cursor(i.lineBlockAt(e.head).from)), ay = (i) => De(i, (e) => y.cursor(i.lineBlockAt(e.head).to)), gh = ({ state: i, dispatch: e }) => (e(Ue(i, { anchor: 0 })), !0), bh = ({ state: i, dispatch: e }) => (e(Ue(i, { anchor: i.doc.length })), !0), yh = ({ state: i, dispatch: e }) => (e(Ue(i, { anchor: i.selection.main.anchor, head: 0 })), !0), Qh = ({ state: i, dispatch: e }) => (e(Ue(i, { anchor: i.selection.main.anchor, head: i.doc.length })), !0), hy = ({ state: i, dispatch: e }) => (e(i.update({ selection: { anchor: 0, head: i.doc.length }, userEvent: "select" })), !0), cy = ({ state: i, dispatch: e }) => {
  let t = Gr(i).map(({ from: n, to: r }) => y.range(n, Math.min(r + 1, i.doc.length)));
  return e(i.update({ selection: y.create(t), userEvent: "select" })), !0;
}, uy = ({ state: i, dispatch: e }) => {
  let t = Ri(i.selection, (n) => {
    let r = K(i), s = r.resolveStack(n.from, 1);
    if (n.empty) {
      let o = r.resolveStack(n.from, -1);
      o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o);
    }
    for (let o = s; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < n.from && l.to >= n.to || l.to > n.to && l.from <= n.from) && o.next)
        return y.range(l.to, l.from);
    }
    return n;
  });
  return t.eq(i.selection) ? !1 : (e(Ue(i, t)), !0);
};
function If(i, e) {
  let { state: t } = i, n = t.selection, r = t.selection.ranges.slice();
  for (let s of t.selection.ranges) {
    let o = t.doc.lineAt(s.head);
    if (e ? o.to < i.state.doc.length : o.from > 0)
      for (let l = s; ; ) {
        let a = i.moveVertically(l, e);
        if (a.head < o.from || a.head > o.to) {
          r.some((h) => h.head == a.head) || r.push(a);
          break;
        } else {
          if (a.head == l.head)
            break;
          l = a;
        }
      }
  }
  return r.length == n.ranges.length ? !1 : (i.dispatch(Ue(t, y.create(r, r.length - 1))), !0);
}
const fy = (i) => If(i, !1), Oy = (i) => If(i, !0), dy = ({ state: i, dispatch: e }) => {
  let t = i.selection, n = null;
  return t.ranges.length > 1 ? n = y.create([t.main]) : t.main.empty || (n = y.create([y.cursor(t.main.head)])), n ? (e(Ue(i, n)), !0) : !1;
};
function Qn(i, e) {
  if (i.state.readOnly)
    return !1;
  let t = "delete.selection", { state: n } = i, r = n.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let a = e(s);
      a < o ? (t = "delete.backward", a = Wn(i, a, !1)) : a > o && (t = "delete.forward", a = Wn(i, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Wn(i, o, !1), l = Wn(i, l, !0);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: y.cursor(o, o < s.head ? -1 : 1) };
  });
  return r.changes.empty ? !1 : (i.dispatch(n.update(r, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? T.announce.of(n.phrase("Selection deleted")) : void 0
  })), !0);
}
function Wn(i, e, t) {
  if (i instanceof T)
    for (let n of i.state.facet(T.atomicRanges).map((r) => r(i)))
      n.between(e, e, (r, s) => {
        r < e && s > e && (e = t ? s : r);
      });
  return e;
}
const Nf = (i, e, t) => Qn(i, (n) => {
  let r = n.from, { state: s } = i, o = s.doc.lineAt(r), l, a;
  if (t && !e && r > o.from && r < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, r - o.from))) {
    if (l[l.length - 1] == "	")
      return r - 1;
    let h = Vr(l, s.tabSize), c = h % gr(s) || gr(s);
    for (let u = 0; u < c && l[l.length - 1 - u] == " "; u++)
      r--;
    a = r;
  } else
    a = he(o.text, r - o.from, e, e) + o.from, a == r && o.number != (e ? s.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, r - o.from)) && (a = he(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), Zo = (i) => Nf(i, !1, !0), Gf = (i) => Nf(i, !0, !1), Uf = (i, e) => Qn(i, (t) => {
  let n = t.head, { state: r } = i, s = r.doc.lineAt(n), o = r.charCategorizer(n);
  for (let l = null; ; ) {
    if (n == (e ? s.to : s.from)) {
      n == t.head && s.number != (e ? r.doc.lines : 1) && (n += e ? 1 : -1);
      break;
    }
    let a = he(s.text, n - s.from, e) + s.from, h = s.text.slice(Math.min(n, a) - s.from, Math.max(n, a) - s.from), c = o(h);
    if (l != null && c != l)
      break;
    (h != " " || n != t.head) && (l = c), n = a;
  }
  return n;
}), Ff = (i) => Uf(i, !1), py = (i) => Uf(i, !0), my = (i) => Qn(i, (e) => {
  let t = i.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), gy = (i) => Qn(i, (e) => {
  let t = i.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), by = (i) => Qn(i, (e) => {
  let t = i.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), yy = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => ({
    changes: { from: n.from, to: n.to, insert: V.of(["", ""]) },
    range: y.cursor(n.from)
  }));
  return e(i.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, Qy = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => {
    if (!n.empty || n.from == 0 || n.from == i.doc.length)
      return { range: n };
    let r = n.from, s = i.doc.lineAt(r), o = r == s.from ? r - 1 : he(s.text, r - s.from, !1) + s.from, l = r == s.to ? r + 1 : he(s.text, r - s.from, !0) + s.from;
    return {
      changes: { from: o, to: l, insert: i.doc.slice(r, l).append(i.doc.slice(o, r)) },
      range: y.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(i.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Gr(i) {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let r = i.doc.lineAt(n.from), s = i.doc.lineAt(n.to);
    if (!n.empty && n.to == s.from && (s = i.doc.lineAt(n.to - 1)), t >= r.number) {
      let o = e[e.length - 1];
      o.to = s.to, o.ranges.push(n);
    } else
      e.push({ from: r.from, to: s.to, ranges: [n] });
    t = s.number + 1;
  }
  return e;
}
function Hf(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [], r = [];
  for (let s of Gr(i)) {
    if (t ? s.to == i.doc.length : s.from == 0)
      continue;
    let o = i.doc.lineAt(t ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (t) {
      n.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + i.lineBreak });
      for (let a of s.ranges)
        r.push(y.range(Math.min(i.doc.length, a.anchor + l), Math.min(i.doc.length, a.head + l)));
    } else {
      n.push({ from: o.from, to: s.from }, { from: s.to, insert: i.lineBreak + o.text });
      for (let a of s.ranges)
        r.push(y.range(a.anchor - l, a.head - l));
    }
  }
  return n.length ? (e(i.update({
    changes: n,
    scrollIntoView: !0,
    selection: y.create(r, i.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const Sy = ({ state: i, dispatch: e }) => Hf(i, e, !1), xy = ({ state: i, dispatch: e }) => Hf(i, e, !0);
function Kf(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [];
  for (let r of Gr(i))
    t ? n.push({ from: r.from, insert: i.doc.slice(r.from, r.to) + i.lineBreak }) : n.push({ from: r.to, insert: i.lineBreak + i.doc.slice(r.from, r.to) });
  return e(i.update({ changes: n, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const wy = ({ state: i, dispatch: e }) => Kf(i, e, !1), $y = ({ state: i, dispatch: e }) => Kf(i, e, !0), vy = (i) => {
  if (i.state.readOnly)
    return !1;
  let { state: e } = i, t = e.changes(Gr(e).map(({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s }))), n = Ri(e.selection, (r) => {
    let s;
    if (i.lineWrapping) {
      let o = i.lineBlockAt(r.head), l = i.coordsAtPos(r.head, r.assoc || 1);
      l && (s = o.bottom + i.documentTop - l.bottom + i.defaultLineHeight / 2);
    }
    return i.moveVertically(r, !0, s);
  }).map(t);
  return i.dispatch({ changes: t, selection: n, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function ky(i, e) {
  if (/\(\)|\[\]|\{\}/.test(i.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = K(i).resolveInner(e), n = t.childBefore(e), r = t.childAfter(e), s;
  return n && r && n.to <= e && r.from >= e && (s = n.type.prop(R.closedBy)) && s.indexOf(r.name) > -1 && i.doc.lineAt(n.to).from == i.doc.lineAt(r.from).from && !/\S/.test(i.sliceDoc(n.to, r.from)) ? { from: n.to, to: r.from } : null;
}
const Sh = /* @__PURE__ */ Jf(!1), Py = /* @__PURE__ */ Jf(!0);
function Jf(i) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let n = e.changeByRange((r) => {
      let { from: s, to: o } = r, l = e.doc.lineAt(s), a = !i && s == o && ky(e, s);
      i && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new Dr(e, { simulateBreak: s, simulateDoubleBreak: !!a }), c = ef(h, s);
      for (c == null && (c = Vr(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: s, to: o } = a : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let u = ["", br(e, c)];
      return a && u.push(br(e, h.lineIndent(l.from, -1))), {
        changes: { from: s, to: o, insert: V.of(u) },
        range: y.cursor(s + 1 + u[1].length)
      };
    });
    return t(e.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function vl(i, e) {
  let t = -1;
  return i.changeByRange((n) => {
    let r = [];
    for (let o = n.from; o <= n.to; ) {
      let l = i.doc.lineAt(o);
      l.number > t && (n.empty || n.to > l.from) && (e(l, r, n), t = l.number), o = l.to + 1;
    }
    let s = i.changes(r);
    return {
      changes: r,
      range: y.range(s.mapPos(n.anchor, 1), s.mapPos(n.head, 1))
    };
  });
}
const Ty = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), n = new Dr(i, { overrideIndentation: (s) => {
    let o = t[s];
    return o ?? -1;
  } }), r = vl(i, (s, o, l) => {
    let a = ef(n, s.from);
    if (a == null)
      return;
    /\S/.test(s.text) || (a = 0);
    let h = /^\s*/.exec(s.text)[0], c = br(i, a);
    (h != c || l.from < s.from + h.length) && (t[s.from] = a, o.push({ from: s.from, to: s.from + h.length, insert: c }));
  });
  return r.changes.empty || e(i.update(r, { userEvent: "indent" })), !0;
}, eO = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(vl(i, (t, n) => {
  n.push({ from: t.from, insert: i.facet(gn) });
}), { userEvent: "input.indent" })), !0), tO = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(vl(i, (t, n) => {
  let r = /^\s*/.exec(t.text)[0];
  if (!r)
    return;
  let s = Vr(r, i.tabSize), o = 0, l = br(i, Math.max(0, s - gr(i)));
  for (; o < r.length && o < l.length && r.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  n.push({ from: t.from + o, to: t.from + r.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Zy = (i) => (i.setTabFocusMode(), !0), Cy = [
  { key: "Ctrl-b", run: Cf, shift: Yf, preventDefault: !0 },
  { key: "Ctrl-f", run: Af, shift: Ef },
  { key: "Ctrl-p", run: Mf, shift: Lf },
  { key: "Ctrl-n", run: zf, shift: Bf },
  { key: "Ctrl-a", run: Ub, shift: ly },
  { key: "Ctrl-e", run: Fb, shift: ay },
  { key: "Ctrl-d", run: Gf },
  { key: "Ctrl-h", run: Zo },
  { key: "Ctrl-k", run: my },
  { key: "Ctrl-Alt-h", run: Ff },
  { key: "Ctrl-o", run: yy },
  { key: "Ctrl-t", run: Qy },
  { key: "Ctrl-v", run: To }
], Ay = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Cf, shift: Yf, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Eb, shift: Jb, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: Nb, shift: sy, preventDefault: !0 },
  { key: "ArrowRight", run: Af, shift: Ef, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: Wb, shift: ey, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Gb, shift: oy, preventDefault: !0 },
  { key: "ArrowUp", run: Mf, shift: Lf, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: gh, shift: yh },
  { mac: "Ctrl-ArrowUp", run: dh, shift: ph },
  { key: "ArrowDown", run: zf, shift: Bf, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: bh, shift: Qh },
  { mac: "Ctrl-ArrowDown", run: To, shift: mh },
  { key: "PageUp", run: dh, shift: ph },
  { key: "PageDown", run: To, shift: mh },
  { key: "Home", run: Ib, shift: ry, preventDefault: !0 },
  { key: "Mod-Home", run: gh, shift: yh },
  { key: "End", run: jb, shift: ny, preventDefault: !0 },
  { key: "Mod-End", run: bh, shift: Qh },
  { key: "Enter", run: Sh, shift: Sh },
  { key: "Mod-a", run: hy },
  { key: "Backspace", run: Zo, shift: Zo, preventDefault: !0 },
  { key: "Delete", run: Gf, preventDefault: !0 },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Ff, preventDefault: !0 },
  { key: "Mod-Delete", mac: "Alt-Delete", run: py, preventDefault: !0 },
  { mac: "Mod-Backspace", run: gy, preventDefault: !0 },
  { mac: "Mod-Delete", run: by, preventDefault: !0 }
].concat(/* @__PURE__ */ Cy.map((i) => ({ mac: i.key, run: i.run, shift: i.shift }))), Xy = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Lb, shift: ty },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Bb, shift: iy },
  { key: "Alt-ArrowUp", run: Sy },
  { key: "Shift-Alt-ArrowUp", run: wy },
  { key: "Alt-ArrowDown", run: xy },
  { key: "Shift-Alt-ArrowDown", run: $y },
  { key: "Mod-Alt-ArrowUp", run: fy },
  { key: "Mod-Alt-ArrowDown", run: Oy },
  { key: "Escape", run: dy },
  { key: "Mod-Enter", run: Py },
  { key: "Alt-l", mac: "Ctrl-l", run: cy },
  { key: "Mod-i", run: uy, preventDefault: !0 },
  { key: "Mod-[", run: tO },
  { key: "Mod-]", run: eO },
  { key: "Mod-Alt-\\", run: Ty },
  { key: "Shift-Mod-k", run: vy },
  { key: "Shift-Mod-\\", run: Kb },
  { key: "Mod-/", run: Sb },
  { key: "Alt-A", run: wb },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Zy }
].concat(Ay), Dn = { key: "Tab", run: eO, shift: tO };
class wr {
  /**
  @internal
  */
  constructor(e, t, n, r, s, o, l, a, h, c = 0, u) {
    this.p = e, this.stack = t, this.state = n, this.reducePos = r, this.pos = s, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = h, this.lookAhead = c, this.parent = u;
  }
  /**
  @internal
  */
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /**
  @internal
  */
  static start(e, t, n = 0) {
    let r = e.parser.context;
    return new wr(e, [], t, n, n, 0, [], 0, r ? new xh(r, r.start) : null, 0, null);
  }
  /**
  The stack's current [context](#lr.ContextTracker) value, if
  any. Its type will depend on the context tracker's type
  parameter, or it will be `null` if there is no context
  tracker.
  */
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /**
  @internal
  */
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
  }
  // Apply a reduce action
  /**
  @internal
  */
  reduce(e) {
    var t;
    let n = e >> 19, r = e & 65535, { parser: s } = this.p, o = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos), l = s.dynamicPrecedence(r);
    if (l && (this.score += l), n == 0) {
      this.pushState(s.getGoto(this.state, r, !0), this.reducePos), r < s.minRepeatTerm && this.storeNode(r, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(r, this.reducePos);
      return;
    }
    let a = this.stack.length - (n - 1) * 3 - (e & 262144 ? 6 : 0), h = a ? this.stack[a - 2] : this.p.ranges[0].from, c = this.reducePos - h;
    c >= 2e3 && !(!((t = this.p.parser.nodeSet.types[r]) === null || t === void 0) && t.isAnonymous) && (h == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = c) : this.p.lastBigReductionSize < c && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = h, this.p.lastBigReductionSize = c));
    let u = a ? this.stack[a - 1] : 0, f = this.bufferBase + this.buffer.length - u;
    if (r < s.minRepeatTerm || e & 131072) {
      let O = s.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(r, h, O, f + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[a];
    else {
      let O = this.stack[a - 3];
      this.state = s.getGoto(O, r, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(r, h);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(e, t, n, r = 4, s = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this, l = this.buffer.length;
      if (l == 0 && o.parent && (l = o.bufferBase - o.parent.bufferBase, o = o.parent), l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1) {
        if (t == n)
          return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = n;
          return;
        }
      }
    }
    if (!s || this.pos == n)
      this.buffer.push(e, t, n, r);
    else {
      let o = this.buffer.length;
      if (o > 0 && (this.buffer[o - 4] != 0 || this.buffer[o - 1] < 0)) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > n; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > n; )
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, r > 4 && (r -= 4);
      }
      this.buffer[o] = e, this.buffer[o + 1] = t, this.buffer[o + 2] = n, this.buffer[o + 3] = r;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(e, t, n, r) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if ((e & 262144) == 0) {
      let s = e, { parser: o } = this.p;
      (r > this.pos || t <= o.maxNode) && (this.pos = r, o.stateFlag(
        s,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = r)), this.pushState(s, n), this.shiftContext(t, n), t <= o.maxNode && this.buffer.push(t, n, r, 4);
    } else
      this.pos = r, this.shiftContext(t, n), t <= this.p.parser.maxNode && this.buffer.push(t, n, r, 4);
  }
  // Apply an action
  /**
  @internal
  */
  apply(e, t, n, r) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, n, r);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(e, t) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
    let r = this.pos;
    this.reducePos = this.pos = r + e.length, this.pushState(t, r), this.buffer.push(
      n,
      r,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /**
  @internal
  */
  split() {
    let e = this, t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; )
      t -= 4;
    let n = e.buffer.slice(t), r = e.bufferBase + t;
    for (; e && r == e.bufferBase; )
      e = e.parent;
    return new wr(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, r, this.curContext, this.lookAhead, e);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(e, t) {
    let n = e <= this.p.parser.maxNode;
    n && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, n ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(e) {
    for (let t = new Ry(this); ; ) {
      let n = this.p.parser.stateSlot(
        t.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(t.state, e);
      if (n == 0)
        return !1;
      if ((n & 65536) == 0)
        return !0;
      t.reduce(n);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /**
  @internal
  */
  recoverByInsert(e) {
    if (this.stack.length >= 300)
      return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let r = [];
      for (let s = 0, o; s < t.length; s += 2)
        (o = t[s + 1]) != this.state && this.p.parser.hasAction(o, e) && r.push(t[s], o);
      if (this.stack.length < 120)
        for (let s = 0; r.length < 8 && s < t.length; s += 2) {
          let o = t[s + 1];
          r.some((l, a) => a & 1 && l == o) || r.push(t[s], o);
        }
      t = r;
    }
    let n = [];
    for (let r = 0; r < t.length && n.length < 4; r += 2) {
      let s = t[r + 1];
      if (s == this.state)
        continue;
      let o = this.split();
      o.pushState(s, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(t[r], this.pos), o.reducePos = this.pos, o.score -= 200, n.push(o);
    }
    return n;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /**
  @internal
  */
  forceReduce() {
    let { parser: e } = this.p, t = e.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if ((t & 65536) == 0)
      return !1;
    if (!e.validAction(this.state, t)) {
      let n = t >> 19, r = t & 65535, s = this.stack.length - n * 3;
      if (s < 0 || e.getGoto(this.stack[s], r, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null)
          return !1;
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t), !0;
  }
  /**
  Try to scan through the automaton to find some kind of reduction
  that can be applied. Used when the regular ForcedReduce field
  isn't a valid action. @internal
  */
  findForcedReduction() {
    let { parser: e } = this.p, t = [], n = (r, s) => {
      if (!t.includes(r))
        return t.push(r), e.allActions(r, (o) => {
          if (!(o & 393216)) if (o & 65536) {
            let l = (o >> 19) - s;
            if (l > 1) {
              let a = o & 65535, h = this.stack.length - l * 3;
              if (h >= 0 && e.getGoto(this.stack[h], a, !1) >= 0)
                return l << 19 | 65536 | a;
            }
          } else {
            let l = n(o, s + 1);
            if (l != null)
              return l;
          }
        });
    };
    return n(this.state, 0);
  }
  /**
  @internal
  */
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /**
  Check whether this state has no further actions (assumed to be a direct descendant of the
  top state, since any other states must be able to continue
  somehow). @internal
  */
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !e.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /**
  Restart the stack (put it back in its start state). Only safe
  when this.stack.length == 3 (state is directly below the top
  state). @internal
  */
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  /**
  @internal
  */
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length)
      return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t])
        return !1;
    return !0;
  }
  /**
  Get the parser used by this stack.
  */
  get parser() {
    return this.p.parser;
  }
  /**
  Test whether a given dialect (by numeric ID, as exported from
  the terms file) is enabled.
  */
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  reduceContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  /**
  @internal
  */
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  /**
  @internal
  */
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new xh(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
    }
  }
  /**
  @internal
  */
  setLookAhead(e) {
    return e <= this.lookAhead ? !1 : (this.emitLookAhead(), this.lookAhead = e, !0);
  }
  /**
  @internal
  */
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class xh {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class Ry {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, n = e >> 19;
    n == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (n - 1) * 3;
    let r = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = r;
  }
}
class $r {
  constructor(e, t, n) {
    this.stack = e, this.pos = t, this.index = n, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new $r(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new $r(this.stack, this.pos, this.index);
  }
}
function ji(i, e = Uint16Array) {
  if (typeof i != "string")
    return i;
  let t = null;
  for (let n = 0, r = 0; n < i.length; ) {
    let s = 0;
    for (; ; ) {
      let o = i.charCodeAt(n++), l = !1;
      if (o == 126) {
        s = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), s += a, l)
        break;
      s *= 46;
    }
    t ? t[r++] = s : t = new e(s);
  }
  return t;
}
class Jn {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const wh = new Jn();
class My {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = wh, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(e, t) {
    let n = this.range, r = this.rangeIndex, s = this.pos + e;
    for (; s < n.from; ) {
      if (!r)
        return null;
      let o = this.ranges[--r];
      s -= n.from - o.to, n = o;
    }
    for (; t < 0 ? s > n.to : s >= n.to; ) {
      if (r == this.ranges.length - 1)
        return null;
      let o = this.ranges[++r];
      s += o.from - n.to, n = o;
    }
    return s;
  }
  /**
  @internal
  */
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to)
      return e;
    for (let t of this.ranges)
      if (t.to > e)
        return Math.max(e, t.from);
    return this.end;
  }
  /**
  Look at a code unit near the stream position. `.peek(0)` equals
  `.next`, `.peek(-1)` gives you the previous character, and so
  on.
  
  Note that looking around during tokenizing creates dependencies
  on potentially far-away content, which may reduce the
  effectiveness incremental parsing—when looking forward—or even
  cause invalid reparses when looking backward more than 25 code
  units, since the library does not track lookbehind.
  */
  peek(e) {
    let t = this.chunkOff + e, n, r;
    if (t >= 0 && t < this.chunk.length)
      n = this.pos + e, r = this.chunk.charCodeAt(t);
    else {
      let s = this.resolveOffset(e, 1);
      if (s == null)
        return -1;
      if (n = s, n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length)
        r = this.chunk2.charCodeAt(n - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= n; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = n), n + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - n)), r = this.chunk2.charCodeAt(0);
      }
    }
    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), r;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(e, t = 0) {
    let n = t ? this.resolveOffset(t, -1) : this.pos;
    if (n == null || n < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = n;
  }
  /**
  Accept a token ending at a specific given position.
  */
  acceptTokenTo(e, t) {
    this.token.value = e, this.token.end = t;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos), t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /**
  Move the stream forward N (defaults to 1) code units. Returns
  the new value of [`next`](#lr.InputStream.next).
  */
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /**
  @internal
  */
  reset(e, t) {
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = wh, this.pos != e) {
      if (this.pos = e, e == this.end)
        return this.setDone(), this;
      for (; e < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /**
  @internal
  */
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let n = "";
    for (let r of this.ranges) {
      if (r.from >= t)
        break;
      r.to > e && (n += this.input.read(Math.max(r.from, e), Math.min(r.to, t)));
    }
    return n;
  }
}
class di {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: n } = t.p;
    iO(this.data, e, t, this.id, n.data, n.tokenPrecTable);
  }
}
di.prototype.contextual = di.prototype.fallback = di.prototype.extend = !1;
class vr {
  constructor(e, t, n) {
    this.precTable = t, this.elseToken = n, this.data = typeof e == "string" ? ji(e) : e;
  }
  token(e, t) {
    let n = e.pos, r = 0;
    for (; ; ) {
      let s = e.next < 0, o = e.resolveOffset(1, 1);
      if (iO(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
        break;
      if (this.elseToken == null)
        return;
      if (s || r++, o == null)
        break;
      e.reset(o, e.token);
    }
    r && (e.reset(n, e.token), e.acceptToken(this.elseToken, r));
  }
}
vr.prototype.contextual = di.prototype.fallback = di.prototype.extend = !1;
class Ze {
  /**
  Create a tokenizer. The first argument is the function that,
  given an input stream, scans for the types of tokens it
  recognizes at the stream's position, and calls
  [`acceptToken`](#lr.InputStream.acceptToken) when it finds
  one.
  */
  constructor(e, t = {}) {
    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
  }
}
function iO(i, e, t, n, r, s) {
  let o = 0, l = 1 << n, { dialect: a } = t.p.parser;
  e: for (; (l & i[o]) != 0; ) {
    let h = i[o + 1];
    for (let O = o + 3; O < h; O += 2)
      if ((i[O + 1] & l) > 0) {
        let d = i[O];
        if (a.allows(d) && (e.token.value == -1 || e.token.value == d || zy(d, e.token.value, r, s))) {
          e.acceptToken(d);
          break;
        }
      }
    let c = e.next, u = 0, f = i[o + 2];
    if (e.next < 0 && f > u && i[h + f * 3 - 3] == 65535) {
      o = i[h + f * 3 - 1];
      continue e;
    }
    for (; u < f; ) {
      let O = u + f >> 1, d = h + O + (O << 1), p = i[d], g = i[d + 1] || 65536;
      if (c < p)
        f = O;
      else if (c >= g)
        u = O + 1;
      else {
        o = i[d + 2], e.advance();
        continue e;
      }
    }
    break;
  }
}
function $h(i, e, t) {
  for (let n = e, r; (r = i[n]) != 65535; n++)
    if (r == t)
      return n - e;
  return -1;
}
function zy(i, e, t, n) {
  let r = $h(t, n, e);
  return r < 0 || $h(t, n, i) < r;
}
const $e = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let ks = null;
function vh(i, e, t) {
  let n = i.cursor(N.IncludeAnonymous);
  for (n.moveTo(e); ; )
    if (!(t < 0 ? n.childBefore(e) : n.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? n.to < e : n.from > e) && !n.type.isError)
          return t < 0 ? Math.max(0, Math.min(
            n.to - 1,
            e - 25
            /* Lookahead.Margin */
          )) : Math.min(i.length, Math.max(
            n.from + 1,
            e + 25
            /* Lookahead.Margin */
          ));
        if (t < 0 ? n.prevSibling() : n.nextSibling())
          break;
        if (!n.parent())
          return t < 0 ? 0 : i.length;
      }
}
class Vy {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? vh(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? vh(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(e) {
    if (e < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= e; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let t = this.trees.length - 1;
      if (t < 0)
        return this.nextFragment(), null;
      let n = this.trees[t], r = this.index[t];
      if (r == n.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let s = n.children[r], o = this.start[t] + n.positions[r];
      if (o > e)
        return this.nextStart = o, null;
      if (s instanceof H) {
        if (o == e) {
          if (o < this.safeFrom)
            return null;
          let l = o + s.length;
          if (l <= this.safeTo) {
            let a = s.prop(R.lookAhead);
            if (!a || l + a < this.fragment.to)
              return s;
          }
        }
        this.index[t]++, o + s.length >= Math.max(this.safeFrom, e) && (this.trees.push(s), this.start.push(o), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = o + s.length;
    }
  }
}
class _y {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((n) => new Jn());
  }
  getActions(e) {
    let t = 0, n = null, { parser: r } = e.p, { tokenizers: s } = r, o = r.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), l = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let h = 0; h < s.length; h++) {
      if ((1 << h & o) == 0)
        continue;
      let c = s[h], u = this.tokens[h];
      if (!(n && !c.fallback) && ((c.contextual || u.start != e.pos || u.mask != o || u.context != l) && (this.updateCachedToken(u, c, e), u.mask = o, u.context = l), u.lookAhead > u.end + 25 && (a = Math.max(u.lookAhead, a)), u.value != 0)) {
        let f = t;
        if (u.extended > -1 && (t = this.addActions(e, u.extended, u.end, t)), t = this.addActions(e, u.value, u.end, t), !c.extend && (n = u, t > f))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !n && e.pos == this.stream.end && (n = new Jn(), n.value = e.p.parser.eofTerm, n.start = n.end = e.pos, t = this.addActions(e, n.value, n.end, t)), this.mainToken = n, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new Jn(), { pos: n, p: r } = e;
    return t.start = n, t.end = Math.min(n + 1, r.stream.end), t.value = n == r.stream.end ? r.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, n) {
    let r = this.stream.clipPos(n.pos);
    if (t.token(this.stream.reset(r, e), n), e.value > -1) {
      let { parser: s } = n.p;
      for (let o = 0; o < s.specialized.length; o++)
        if (s.specialized[o] == e.value) {
          let l = s.specializers[o](this.stream.read(e.start, e.end), n);
          if (l >= 0 && n.p.parser.dialect.allows(l >> 1)) {
            (l & 1) == 0 ? e.value = l >> 1 : e.extended = l >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(r + 1);
  }
  putAction(e, t, n, r) {
    for (let s = 0; s < r; s += 3)
      if (this.actions[s] == e)
        return r;
    return this.actions[r++] = e, this.actions[r++] = t, this.actions[r++] = n, r;
  }
  addActions(e, t, n, r) {
    let { state: s } = e, { parser: o } = e.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let h = o.stateSlot(
        s,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; h += 3) {
        if (l[h] == 65535)
          if (l[h + 1] == 1)
            h = dt(l, h + 2);
          else {
            r == 0 && l[h + 1] == 2 && (r = this.putAction(dt(l, h + 2), t, n, r));
            break;
          }
        l[h] == t && (r = this.putAction(dt(l, h + 1), t, n, r));
      }
    return r;
  }
}
class qy {
  constructor(e, t, n, r) {
    this.parser = e, this.input = t, this.ranges = r, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new My(t, r), this.tokens = new _y(e, this.stream), this.topTerm = e.top[1];
    let { from: s } = r[0];
    this.stacks = [wr.start(this, e.top[0], s)], this.fragments = n.length && this.stream.end - s > e.bufferLength * 4 ? new Vy(n, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let e = this.stacks, t = this.minStackPos, n = this.stacks = [], r, s;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > t)
          n.push(l);
        else {
          if (this.advanceStack(l, n, e))
            continue;
          {
            r || (r = [], s = []), r.push(l);
            let a = this.tokens.getMainToken(l);
            s.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!n.length) {
      let o = r && Ey(r);
      if (o)
        return $e && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw $e && r && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && r) {
      let o = this.stoppedAt != null && r[0].pos > this.stoppedAt ? r[0] : this.runRecovery(r, s, n);
      if (o)
        return $e && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (n.length > o)
        for (n.sort((l, a) => a.score - l.score); n.length > o; )
          n.pop();
      n.some((l) => l.reducePos > t) && this.recovering--;
    } else if (n.length > 1) {
      e: for (let o = 0; o < n.length - 1; o++) {
        let l = n[o];
        for (let a = o + 1; a < n.length; a++) {
          let h = n[a];
          if (l.sameState(h) || l.buffer.length > 500 && h.buffer.length > 500)
            if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0)
              n.splice(a--, 1);
            else {
              n.splice(o--, 1);
              continue e;
            }
        }
      }
      n.length > 12 && (n.sort((o, l) => l.score - o.score), n.splice(
        12,
        n.length - 12
        /* Rec.MaxStackCount */
      ));
    }
    this.minStackPos = n[0].pos;
    for (let o = 1; o < n.length; o++)
      n[o].pos < this.minStackPos && (this.minStackPos = n[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(e, t, n) {
    let r = e.pos, { parser: s } = this, o = $e ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && r > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict, c = h ? e.curContext.hash : 0;
      for (let u = this.fragments.nodeAt(r); u; ) {
        let f = this.parser.nodeSet.types[u.type.id] == u.type ? s.getGoto(e.state, u.type.id) : -1;
        if (f > -1 && u.length && (!h || (u.prop(R.contextHash) || 0) == c))
          return e.useNode(u, f), $e && console.log(o + this.stackID(e) + ` (via reuse of ${s.getName(u.type.id)})`), !0;
        if (!(u instanceof H) || u.children.length == 0 || u.positions[0] > 0)
          break;
        let O = u.children[0];
        if (O instanceof H && u.positions[0] == 0)
          u = O;
        else
          break;
      }
    }
    let l = s.stateSlot(
      e.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (l > 0)
      return e.reduce(l), $e && console.log(o + this.stackID(e) + ` (via always-reduce ${s.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let h = 0; h < a.length; ) {
      let c = a[h++], u = a[h++], f = a[h++], O = h == a.length || !n, d = O ? e : e.split(), p = this.tokens.mainToken;
      if (d.apply(c, u, p ? p.start : d.pos, f), $e && console.log(o + this.stackID(d) + ` (via ${(c & 65536) == 0 ? "shift" : `reduce of ${s.getName(
        c & 65535
        /* Action.ValueMask */
      )}`} for ${s.getName(u)} @ ${r}${d == e ? "" : ", split"})`), O)
        return !0;
      d.pos > r ? t.push(d) : n.push(d);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(e, t) {
    let n = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > n)
        return kh(e, t), !0;
    }
  }
  runRecovery(e, t, n) {
    let r = null, s = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], h = t[(o << 1) + 1], c = $e ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (s || (s = !0, l.restart(), $e && console.log(c + this.stackID(l) + " (restarted)"), this.advanceFully(l, n))))
        continue;
      let u = l.split(), f = c;
      for (let O = 0; O < 10 && u.forceReduce() && ($e && console.log(f + this.stackID(u) + " (via force-reduce)"), !this.advanceFully(u, n)); O++)
        $e && (f = this.stackID(u) + " -> ");
      for (let O of l.recoverByInsert(a))
        $e && console.log(c + this.stackID(O) + " (via recover-insert)"), this.advanceFully(O, n);
      this.stream.end > l.pos ? (h == l.pos && (h++, a = 0), l.recoverByDelete(a, h), $e && console.log(c + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), kh(l, n)) : (!r || r.score < l.score) && (r = l);
    }
    return r;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), H.build({
      buffer: $r.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (ks || (ks = /* @__PURE__ */ new WeakMap())).get(e);
    return t || ks.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function kh(i, e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n.pos == i.pos && n.sameState(i)) {
      e[t].score < i.score && (e[t] = i);
      return;
    }
  }
  e.push(i);
}
class Yy {
  constructor(e, t, n) {
    this.source = e, this.flags = t, this.disabled = n;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const Ps = (i) => i;
class nO {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || Ps, this.reduce = e.reduce || Ps, this.reuse = e.reuse || Ps, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
}
class Pi extends Uu {
  /**
  @internal
  */
  constructor(e) {
    if (super(), this.wrappers = [], e.version != 14)
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++)
      t.push("");
    let n = Object.keys(e.topRules).map((l) => e.topRules[l][1]), r = [];
    for (let l = 0; l < t.length; l++)
      r.push([]);
    function s(l, a, h) {
      r[l].push([a, a.deserialize(String(h))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = R[a]);
        for (let h = 1; h < l.length; ) {
          let c = l[h++];
          if (c >= 0)
            s(c, a, l[h++]);
          else {
            let u = l[h + -c];
            for (let f = -c; f > 0; f--)
              s(l[h++], a, u);
            h++;
          }
        }
      }
    this.nodeSet = new ol(t.map((l, a) => be.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: r[a],
      top: n.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = Bu;
    let o = ji(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(Ph), this.states = ji(e.states, Uint32Array), this.data = ji(e.stateData), this.goto = ji(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new di(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, n) {
    let r = new qy(this, e, t, n);
    for (let s of this.wrappers)
      r = s(r, e, t, n);
    return r;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(e, t, n = !1) {
    let r = this.goto;
    if (t >= r[0])
      return -1;
    for (let s = r[t + 1]; ; ) {
      let o = r[s++], l = o & 1, a = r[s++];
      if (l && n)
        return a;
      for (let h = s + (o >> 1); s < h; s++)
        if (r[s] == e)
          return a;
      if (l)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(e, t) {
    let n = this.data;
    for (let r = 0; r < 2; r++)
      for (let s = this.stateSlot(
        e,
        r ? 2 : 1
        /* ParseState.Actions */
      ), o; ; s += 3) {
        if ((o = n[s]) == 65535)
          if (n[s + 1] == 1)
            o = n[s = dt(n, s + 2)];
          else {
            if (n[s + 1] == 2)
              return dt(n, s + 2);
            break;
          }
        if (o == t || o == 0)
          return dt(n, s + 1);
      }
    return 0;
  }
  /**
  @internal
  */
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  /**
  @internal
  */
  stateFlag(e, t) {
    return (this.stateSlot(
      e,
      0
      /* ParseState.Flags */
    ) & t) > 0;
  }
  /**
  @internal
  */
  validAction(e, t) {
    return !!this.allActions(e, (n) => n == t ? !0 : null);
  }
  /**
  @internal
  */
  allActions(e, t) {
    let n = this.stateSlot(
      e,
      4
      /* ParseState.DefaultReduce */
    ), r = n ? t(n) : void 0;
    for (let s = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); r == null; s += 3) {
      if (this.data[s] == 65535)
        if (this.data[s + 1] == 1)
          s = dt(this.data, s + 2);
        else
          break;
      r = t(dt(this.data, s + 1));
    }
    return r;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(e) {
    let t = [];
    for (let n = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1)
          n = dt(this.data, n + 2);
        else
          break;
      if ((this.data[n + 2] & 1) == 0) {
        let r = this.data[n + 1];
        t.some((s, o) => o & 1 && s == r) || t.push(this.data[n], r);
      }
    }
    return t;
  }
  /**
  Configure the parser. Returns a new parser instance that has the
  given settings modified. Settings not provided in `config` are
  kept from the original parser.
  */
  configure(e) {
    let t = Object.assign(Object.create(Pi.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let n = this.topRules[e.top];
      if (!n)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = n;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((n) => {
      let r = e.tokenizers.find((s) => s.from == n);
      return r ? r.to : n;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((n, r) => {
      let s = e.specializers.find((l) => l.from == n.external);
      if (!s)
        return n;
      let o = Object.assign(Object.assign({}, n), { external: s.to });
      return t.specializers[r] = Ph(o), o;
    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), e.strict != null && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), e.bufferLength != null && (t.bufferLength = e.bufferLength), t;
  }
  /**
  Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  are registered for this parser.
  */
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /**
  Returns the name associated with a given term. This will only
  work for all terms when the parser was generated with the
  `--names` option. By default, only the names of tagged terms are
  stored.
  */
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  /**
  The eof term id is always allocated directly after the node
  types. @internal
  */
  get eofTerm() {
    return this.maxNode + 1;
  }
  /**
  The type of top node produced by the parser.
  */
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /**
  @internal
  */
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  /**
  @internal
  */
  parseDialect(e) {
    let t = Object.keys(this.dialects), n = t.map(() => !1);
    if (e)
      for (let s of e.split(" ")) {
        let o = t.indexOf(s);
        o >= 0 && (n[o] = !0);
      }
    let r = null;
    for (let s = 0; s < t.length; s++)
      if (!n[s])
        for (let o = this.dialects[t[s]], l; (l = this.data[o++]) != 65535; )
          (r || (r = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new Yy(e, n, r);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new Pi(e);
  }
}
function dt(i, e) {
  return i[e] | i[e + 1] << 16;
}
function Ey(i) {
  let e = null;
  for (let t of i) {
    let n = t.p.stoppedAt;
    (t.pos == t.p.stream.end || n != null && t.pos > n) && t.p.parser.stateFlag(
      t.state,
      2
      /* StateFlag.Accepting */
    ) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
function Ph(i) {
  if (i.external) {
    let e = i.extend ? 1 : 0;
    return (t, n) => i.external(t, n) << 1 | e;
  }
  return i.get;
}
const Wy = 55, Dy = 1, Ly = 56, By = 2, jy = 57, Iy = 3, Th = 4, Ny = 5, kl = 6, rO = 7, sO = 8, oO = 9, lO = 10, Gy = 11, Uy = 12, Fy = 13, Ts = 58, Hy = 14, Ky = 15, Zh = 59, aO = 21, Jy = 23, hO = 24, eQ = 25, Co = 27, cO = 28, tQ = 29, iQ = 32, nQ = 35, rQ = 37, sQ = 38, oQ = 0, lQ = 1, aQ = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  frame: !0,
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
  menuitem: !0
}, hQ = {
  dd: !0,
  li: !0,
  optgroup: !0,
  option: !0,
  p: !0,
  rp: !0,
  rt: !0,
  tbody: !0,
  td: !0,
  tfoot: !0,
  th: !0,
  tr: !0
}, Ch = {
  dd: { dd: !0, dt: !0 },
  dt: { dd: !0, dt: !0 },
  li: { li: !0 },
  option: { option: !0, optgroup: !0 },
  optgroup: { optgroup: !0 },
  p: {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    dir: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    menu: !0,
    nav: !0,
    ol: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    ul: !0
  },
  rp: { rp: !0, rt: !0 },
  rt: { rp: !0, rt: !0 },
  tbody: { tbody: !0, tfoot: !0 },
  td: { td: !0, th: !0 },
  tfoot: { tbody: !0 },
  th: { td: !0, th: !0 },
  thead: { tbody: !0, tfoot: !0 },
  tr: { tr: !0 }
};
function cQ(i) {
  return i == 45 || i == 46 || i == 58 || i >= 65 && i <= 90 || i == 95 || i >= 97 && i <= 122 || i >= 161;
}
let Ah = null, Xh = null, Rh = 0;
function Ao(i, e) {
  let t = i.pos + e;
  if (Rh == t && Xh == i) return Ah;
  let n = i.peek(e), r = "";
  for (; cQ(n); )
    r += String.fromCharCode(n), n = i.peek(++e);
  return Xh = i, Rh = t, Ah = r ? r.toLowerCase() : n == uQ || n == fQ ? void 0 : null;
}
const uO = 60, kr = 62, Pl = 47, uQ = 63, fQ = 33, OQ = 45;
function Mh(i, e) {
  this.name = i, this.parent = e;
}
const dQ = [kl, lO, rO, sO, oO], pQ = new nO({
  start: null,
  shift(i, e, t, n) {
    return dQ.indexOf(e) > -1 ? new Mh(Ao(n, 1) || "", i) : i;
  },
  reduce(i, e) {
    return e == aO && i ? i.parent : i;
  },
  reuse(i, e, t, n) {
    let r = e.type.id;
    return r == kl || r == rQ ? new Mh(Ao(n, 1) || "", i) : i;
  },
  strict: !1
}), mQ = new Ze((i, e) => {
  if (i.next != uO) {
    i.next < 0 && e.context && i.acceptToken(Ts);
    return;
  }
  i.advance();
  let t = i.next == Pl;
  t && i.advance();
  let n = Ao(i, 0);
  if (n === void 0) return;
  if (!n) return i.acceptToken(t ? Ky : Hy);
  let r = e.context ? e.context.name : null;
  if (t) {
    if (n == r) return i.acceptToken(Gy);
    if (r && hQ[r]) return i.acceptToken(Ts, -2);
    if (e.dialectEnabled(oQ)) return i.acceptToken(Uy);
    for (let s = e.context; s; s = s.parent) if (s.name == n) return;
    i.acceptToken(Fy);
  } else {
    if (n == "script") return i.acceptToken(rO);
    if (n == "style") return i.acceptToken(sO);
    if (n == "textarea") return i.acceptToken(oO);
    if (aQ.hasOwnProperty(n)) return i.acceptToken(lO);
    r && Ch[r] && Ch[r][n] ? i.acceptToken(Ts, -1) : i.acceptToken(kl);
  }
}, { contextual: !0 }), gQ = new Ze((i) => {
  for (let e = 0, t = 0; ; t++) {
    if (i.next < 0) {
      t && i.acceptToken(Zh);
      break;
    }
    if (i.next == OQ)
      e++;
    else if (i.next == kr && e >= 2) {
      t >= 3 && i.acceptToken(Zh, -2);
      break;
    } else
      e = 0;
    i.advance();
  }
});
function bQ(i) {
  for (; i; i = i.parent)
    if (i.name == "svg" || i.name == "math") return !0;
  return !1;
}
const yQ = new Ze((i, e) => {
  if (i.next == Pl && i.peek(1) == kr) {
    let t = e.dialectEnabled(lQ) || bQ(e.context);
    i.acceptToken(t ? Ny : Th, 2);
  } else i.next == kr && i.acceptToken(Th, 1);
});
function Tl(i, e, t) {
  let n = 2 + i.length;
  return new Ze((r) => {
    for (let s = 0, o = 0, l = 0; ; l++) {
      if (r.next < 0) {
        l && r.acceptToken(e);
        break;
      }
      if (s == 0 && r.next == uO || s == 1 && r.next == Pl || s >= 2 && s < n && r.next == i.charCodeAt(s - 2))
        s++, o++;
      else if (s == n && r.next == kr) {
        l > o ? r.acceptToken(e, -o) : r.acceptToken(t, -(o - 2));
        break;
      } else if ((r.next == 10 || r.next == 13) && l) {
        r.acceptToken(e, 1);
        break;
      } else
        s = o = 0;
      r.advance();
    }
  });
}
const QQ = Tl("script", Wy, Dy), SQ = Tl("style", Ly, By), xQ = Tl("textarea", jy, Iy), wQ = Wr({
  "Text RawText IncompleteTag IncompleteCloseTag": m.content,
  "StartTag StartCloseTag SelfClosingEndTag EndTag": m.angleBracket,
  TagName: m.tagName,
  "MismatchedCloseTag/TagName": [m.tagName, m.invalid],
  AttributeName: m.attributeName,
  "AttributeValue UnquotedAttributeValue": m.attributeValue,
  Is: m.definitionOperator,
  "EntityReference CharacterReference": m.character,
  Comment: m.blockComment,
  ProcessingInst: m.processingInstruction,
  DoctypeDecl: m.documentMeta
}), $Q = Pi.deserialize({
  version: 14,
  states: ",xOVO!rOOO!ZQ#tO'#CrO!`Q#tO'#C{O!eQ#tO'#DOO!jQ#tO'#DRO!oQ#tO'#DTO!tOaO'#CqO#PObO'#CqO#[OdO'#CqO$kO!rO'#CqOOO`'#Cq'#CqO$rO$fO'#DUO$zQ#tO'#DWO%PQ#tO'#DXOOO`'#Dl'#DlOOO`'#DZ'#DZQVO!rOOO%UQ&rO,59^O%aQ&rO,59gO%lQ&rO,59jO%wQ&rO,59mO&SQ&rO,59oOOOa'#D_'#D_O&_OaO'#CyO&jOaO,59]OOOb'#D`'#D`O&rObO'#C|O&}ObO,59]OOOd'#Da'#DaO'VOdO'#DPO'bOdO,59]OOO`'#Db'#DbO'jO!rO,59]O'qQ#tO'#DSOOO`,59],59]OOOp'#Dc'#DcO'vO$fO,59pOOO`,59p,59pO(OQ#|O,59rO(TQ#|O,59sOOO`-E7X-E7XO(YQ&rO'#CtOOQW'#D['#D[O(hQ&rO1G.xOOOa1G.x1G.xOOO`1G/Z1G/ZO(sQ&rO1G/ROOOb1G/R1G/RO)OQ&rO1G/UOOOd1G/U1G/UO)ZQ&rO1G/XOOO`1G/X1G/XO)fQ&rO1G/ZOOOa-E7]-E7]O)qQ#tO'#CzOOO`1G.w1G.wOOOb-E7^-E7^O)vQ#tO'#C}OOOd-E7_-E7_O){Q#tO'#DQOOO`-E7`-E7`O*QQ#|O,59nOOOp-E7a-E7aOOO`1G/[1G/[OOO`1G/^1G/^OOO`1G/_1G/_O*VQ,UO,59`OOQW-E7Y-E7YOOOa7+$d7+$dOOO`7+$u7+$uOOOb7+$m7+$mOOOd7+$p7+$pOOO`7+$s7+$sO*bQ#|O,59fO*gQ#|O,59iO*lQ#|O,59lOOO`1G/Y1G/YO*qO7[O'#CwO+SOMhO'#CwOOQW1G.z1G.zOOO`1G/Q1G/QOOO`1G/T1G/TOOO`1G/W1G/WOOOO'#D]'#D]O+eO7[O,59cOOQW,59c,59cOOOO'#D^'#D^O+vOMhO,59cOOOO-E7Z-E7ZOOQW1G.}1G.}OOOO-E7[-E7[",
  stateData: ",c~O!_OS~OUSOVPOWQOXROYTO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O|_O!eZO~OgaO~OgbO~OgcO~OgdO~OgeO~O!XfOPmP![mP~O!YiOQpP![pP~O!ZlORsP![sP~OUSOVPOWQOXROYTOZqO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O!eZO~O![rO~P#gO!]sO!fuO~OgvO~OgwO~OS|OT}OiyO~OS!POT}OiyO~OS!ROT}OiyO~OS!TOT}OiyO~OS}OT}OiyO~O!XfOPmX![mX~OP!WO![!XO~O!YiOQpX![pX~OQ!ZO![!XO~O!ZlORsX![sX~OR!]O![!XO~O![!XO~P#gOg!_O~O!]sO!f!aO~OS!bO~OS!cO~Oj!dOShXThXihX~OS!fOT!gOiyO~OS!hOT!gOiyO~OS!iOT!gOiyO~OS!jOT!gOiyO~OS!gOT!gOiyO~Og!kO~Og!lO~Og!mO~OS!nO~Ol!qO!a!oO!c!pO~OS!rO~OS!sO~OS!tO~Ob!uOc!uOd!uO!a!wO!b!uO~Ob!xOc!xOd!xO!c!wO!d!xO~Ob!uOc!uOd!uO!a!{O!b!uO~Ob!xOc!xOd!xO!c!{O!d!xO~OT~cbd!ey|!e~",
  goto: "%q!aPPPPPPPPPPPPPPPPPPPPP!b!hP!nPP!zP!}#Q#T#Z#^#a#g#j#m#s#y!bP!b!bP$P$V$m$s$y%P%V%]%cPPPPPPPP%iX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
  nodeNames: "⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
  maxTerm: 68,
  context: pQ,
  nodeProps: [
    ["closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 22, 31, 34, 37, "CloseTag"],
    ["openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 30, 33, 36, 38, "OpenTag"],
    ["group", -10, 14, 15, 18, 19, 20, 21, 40, 41, 42, 43, "Entity", 17, "Entity TextContent", -3, 29, 32, 35, "TextContent Entity"],
    ["isolate", -11, 22, 30, 31, 33, 34, 36, 37, 38, 39, 42, 43, "ltr", -3, 27, 28, 40, ""]
  ],
  propSources: [wQ],
  skippedNodes: [0],
  repeatNodeCount: 9,
  tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|caPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bXaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UVaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pTaPOv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!dpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({WaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!b`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!b`!dpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYlWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`aP!b`!dp!_^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebiSlWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXiSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vciSaP!b`!dpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!ahaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WiiSlWd!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zblWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOb!R!R7tP;=`<%l7S!Z8OYlWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{iiSlWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbiSlWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QciSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXiSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TalWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOc!R!RAwP;=`<%lAY!ZBRYlWc!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbiSlWc!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbiSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXiSc!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!cxaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYliSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_kiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_XaP!b`!dp!fQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZiSgQaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!b`!dpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!b`!dp!ePOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!b`!dpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!b`!dpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!b`!dpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!b`!dpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!b`!dpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!b`!dpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!b`!dpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!dpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO|PP!-nP;=`<%l!-Sq!-xS!dp|POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!b`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!b`|POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!b`!dp|POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!b`!dpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!b`!dpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!b`!dpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!b`!dpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!b`!dpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!b`!dpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!dpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOyPP!7TP;=`<%l!6Vq!7]V!dpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!dpyPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!b`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!b`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!b`yPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!b`!dpyPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXjSaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
  tokenizers: [QQ, SQ, xQ, yQ, mQ, gQ, 0, 1, 2, 3, 4, 5],
  topRules: { Document: [0, 16] },
  dialects: { noMatch: 0, selfClosing: 515 },
  tokenPrec: 517
});
function fO(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n of i.getChildren(hO)) {
    let r = n.getChild(eQ), s = n.getChild(Co) || n.getChild(cO);
    r && (t[e.read(r.from, r.to)] = s ? s.type.id == Co ? e.read(s.from + 1, s.to - 1) : e.read(s.from, s.to) : "");
  }
  return t;
}
function zh(i, e) {
  let t = i.getChild(Jy);
  return t ? e.read(t.from, t.to) : " ";
}
function Zs(i, e, t) {
  let n;
  for (let r of t)
    if (!r.attrs || r.attrs(n || (n = fO(i.node.parent.firstChild, e))))
      return { parser: r.parser };
  return null;
}
function OO(i = [], e = []) {
  let t = [], n = [], r = [], s = [];
  for (let l of i)
    (l.tag == "script" ? t : l.tag == "style" ? n : l.tag == "textarea" ? r : s).push(l);
  let o = e.length ? /* @__PURE__ */ Object.create(null) : null;
  for (let l of e) (o[l.name] || (o[l.name] = [])).push(l);
  return Dg((l, a) => {
    let h = l.type.id;
    if (h == tQ) return Zs(l, a, t);
    if (h == iQ) return Zs(l, a, n);
    if (h == nQ) return Zs(l, a, r);
    if (h == aO && s.length) {
      let c = l.node, u = c.firstChild, f = u && zh(u, a), O;
      if (f) {
        for (let d of s)
          if (d.tag == f && (!d.attrs || d.attrs(O || (O = fO(u, a))))) {
            let p = c.lastChild, g = p.type.id == sQ ? p.from : c.to;
            if (g > u.to)
              return { parser: d.parser, overlay: [{ from: u.to, to: g }] };
          }
      }
    }
    if (o && h == hO) {
      let c = l.node, u;
      if (u = c.firstChild) {
        let f = o[a.read(u.from, u.to)];
        if (f) for (let O of f) {
          if (O.tagName && O.tagName != zh(c.parent, a)) continue;
          let d = c.lastChild;
          if (d.type.id == Co) {
            let p = d.from + 1, g = d.lastChild, b = d.to - (g && g.isError ? 0 : 1);
            if (b > p) return { parser: O.parser, overlay: [{ from: p, to: b }] };
          } else if (d.type.id == cO)
            return { parser: O.parser, overlay: [{ from: d.from, to: d.to }] };
        }
      }
    }
    return null;
  });
}
const vQ = 122, Vh = 1, kQ = 123, PQ = 124, dO = 2, TQ = 125, ZQ = 3, CQ = 4, pO = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], AQ = 58, XQ = 40, mO = 95, RQ = 91, er = 45, MQ = 46, zQ = 35, VQ = 37, _Q = 38, qQ = 92, YQ = 10, EQ = 42;
function cn(i) {
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 161;
}
function Zl(i) {
  return i >= 48 && i <= 57;
}
function _h(i) {
  return Zl(i) || i >= 97 && i <= 102 || i >= 65 && i <= 70;
}
const gO = (i, e, t) => (n, r) => {
  for (let s = !1, o = 0, l = 0; ; l++) {
    let { next: a } = n;
    if (cn(a) || a == er || a == mO || s && Zl(a))
      !s && (a != er || l > 0) && (s = !0), o === l && a == er && o++, n.advance();
    else if (a == qQ && n.peek(1) != YQ) {
      if (n.advance(), _h(n.next)) {
        do
          n.advance();
        while (_h(n.next));
        n.next == 32 && n.advance();
      } else n.next > -1 && n.advance();
      s = !0;
    } else {
      s && n.acceptToken(
        o == 2 && r.canShift(dO) ? e : a == XQ ? t : i
      );
      break;
    }
  }
}, WQ = new Ze(
  gO(kQ, dO, PQ)
), DQ = new Ze(
  gO(TQ, ZQ, CQ)
), LQ = new Ze((i) => {
  if (pO.includes(i.peek(-1))) {
    let { next: e } = i;
    (cn(e) || e == mO || e == zQ || e == MQ || e == EQ || e == RQ || e == AQ && cn(i.peek(1)) || e == er || e == _Q) && i.acceptToken(vQ);
  }
}), BQ = new Ze((i) => {
  if (!pO.includes(i.peek(-1))) {
    let { next: e } = i;
    if (e == VQ && (i.advance(), i.acceptToken(Vh)), cn(e)) {
      do
        i.advance();
      while (cn(i.next) || Zl(i.next));
      i.acceptToken(Vh);
    }
  }
}), jQ = Wr({
  "AtKeyword import charset namespace keyframes media supports": m.definitionKeyword,
  "from to selector": m.keyword,
  NamespaceName: m.namespace,
  KeyframeName: m.labelName,
  KeyframeRangeName: m.operatorKeyword,
  TagName: m.tagName,
  ClassName: m.className,
  PseudoClassName: m.constant(m.className),
  IdName: m.labelName,
  "FeatureName PropertyName": m.propertyName,
  AttributeName: m.attributeName,
  NumberLiteral: m.number,
  KeywordQuery: m.keyword,
  UnaryQueryOp: m.operatorKeyword,
  "CallTag ValueName": m.atom,
  VariableName: m.variableName,
  Callee: m.operatorKeyword,
  Unit: m.unit,
  "UniversalSelector NestingSelector": m.definitionOperator,
  "MatchOp CompareOp": m.compareOperator,
  "ChildOp SiblingOp, LogicOp": m.logicOperator,
  BinOp: m.arithmeticOperator,
  Important: m.modifier,
  Comment: m.blockComment,
  ColorLiteral: m.color,
  "ParenthesizedContent StringLiteral": m.string,
  ":": m.punctuation,
  "PseudoOp #": m.derefOperator,
  "; ,": m.separator,
  "( )": m.paren,
  "[ ]": m.squareBracket,
  "{ }": m.brace
}), IQ = { __proto__: null, lang: 38, "nth-child": 38, "nth-last-child": 38, "nth-of-type": 38, "nth-last-of-type": 38, dir: 38, "host-context": 38, if: 84, url: 124, "url-prefix": 124, domain: 124, regexp: 124 }, NQ = { __proto__: null, or: 98, and: 98, not: 106, only: 106, layer: 170 }, GQ = { __proto__: null, selector: 112, layer: 166 }, UQ = { __proto__: null, "@import": 162, "@media": 174, "@charset": 178, "@namespace": 182, "@keyframes": 188, "@supports": 200, "@scope": 204 }, FQ = { __proto__: null, to: 207 }, HQ = Pi.deserialize({
  version: 14,
  states: "EbQYQdOOO#qQdOOP#xO`OOOOQP'#Cf'#CfOOQP'#Ce'#CeO#}QdO'#ChO$nQaO'#CcO$xQdO'#CkO%TQdO'#DpO%YQdO'#DrO%_QdO'#DuO%_QdO'#DxOOQP'#FV'#FVO&eQhO'#EhOOQS'#FU'#FUOOQS'#Ek'#EkQYQdOOO&lQdO'#EOO&PQhO'#EUO&lQdO'#EWO'aQdO'#EYO'lQdO'#E]O'tQhO'#EcO(VQdO'#EeO(bQaO'#CfO)VQ`O'#D{O)[Q`O'#F`O)gQdO'#F`QOQ`OOP)qO&jO'#CaPOOO)C@t)C@tOOQP'#Cj'#CjOOQP,59S,59SO#}QdO,59SO)|QdO,59VO%TQdO,5:[O%YQdO,5:^O%_QdO,5:aO%_QdO,5:cO%_QdO,5:dO%_QdO'#ErO*XQ`O,58}O*aQdO'#DzOOQS,58},58}OOQP'#Cn'#CnOOQO'#Dn'#DnOOQP,59V,59VO*hQ`O,59VO*mQ`O,59VOOQP'#Dq'#DqOOQP,5:[,5:[OOQO'#Ds'#DsO*rQpO,5:^O+]QaO,5:aO+sQaO,5:dOOQW'#DZ'#DZO,ZQhO'#DdO,xQhO'#FaO'tQhO'#DbO-WQ`O'#DhOOQW'#F['#F[O-]Q`O,5;SO-eQ`O'#DeOOQS-E8i-E8iOOQ['#Cs'#CsO-jQdO'#CtO.QQdO'#CzO.hQdO'#C}O/OQ!pO'#DPO1RQ!jO,5:jOOQO'#DU'#DUO*mQ`O'#DTO1cQ!nO'#FXO3`Q`O'#DVO3eQ`O'#DkOOQ['#FX'#FXO-`Q`O,5:pO3jQ!bO,5:rOOQS'#E['#E[O3rQ`O,5:tO3wQdO,5:tOOQO'#E_'#E_O4PQ`O,5:wO4UQhO,5:}O%_QdO'#DgOOQS,5;P,5;PO-eQ`O,5;PO4^QdO,5;PO4fQdO,5:gO4vQdO'#EtO5TQ`O,5;zO5TQ`O,5;zPOOO'#Ej'#EjP5`O&jO,58{POOO,58{,58{OOQP1G.n1G.nOOQP1G.q1G.qO*hQ`O1G.qO*mQ`O1G.qOOQP1G/v1G/vO5kQpO1G/xO5sQaO1G/{O6ZQaO1G/}O6qQaO1G0OO7XQaO,5;^OOQO-E8p-E8pOOQS1G.i1G.iO7cQ`O,5:fO7hQdO'#DoO7oQdO'#CrOOQP1G/x1G/xO&lQdO1G/xO7vQ!jO'#DZO8UQ!bO,59vO8^QhO,5:OOOQO'#F]'#F]O8XQ!bO,59zO'tQhO,59xO8fQhO'#EvO8sQ`O,5;{O9OQhO,59|O9uQhO'#DiOOQW,5:S,5:SOOQS1G0n1G0nOOQW,5:P,5:PO9|Q!fO'#FYOOQS'#FY'#FYOOQS'#Em'#EmO;^QdO,59`OOQ[,59`,59`O;tQdO,59fOOQ[,59f,59fO<[QdO,59iOOQ[,59i,59iOOQ[,59k,59kO&lQdO,59mO<rQhO'#EQOOQW'#EQ'#EQO=WQ`O1G0UO1[QhO1G0UOOQ[,59o,59oO'tQhO'#DXOOQ[,59q,59qO=]Q#tO,5:VOOQS1G0[1G0[OOQS1G0^1G0^OOQS1G0`1G0`O=hQ`O1G0`O=mQdO'#E`OOQS1G0c1G0cOOQS1G0i1G0iO=xQaO,5:RO-`Q`O1G0kOOQS1G0k1G0kO-eQ`O1G0kO>PQ!fO1G0ROOQO1G0R1G0ROOQO,5;`,5;`O>gQdO,5;`OOQO-E8r-E8rO>tQ`O1G1fPOOO-E8h-E8hPOOO1G.g1G.gOOQP7+$]7+$]OOQP7+%d7+%dO&lQdO7+%dOOQS1G0Q1G0QO?PQaO'#F_O?ZQ`O,5:ZO?`Q!fO'#ElO@^QdO'#FWO@hQ`O,59^O@mQ!bO7+%dO&lQdO1G/bO@uQhO1G/fOOQW1G/j1G/jOOQW1G/d1G/dOAWQhO,5;bOOQO-E8t-E8tOAfQhO'#DZOAtQhO'#F^OBPQ`O'#F^OBUQ`O,5:TOOQS-E8k-E8kOOQ[1G.z1G.zOOQ[1G/Q1G/QOOQ[1G/T1G/TOOQ[1G/X1G/XOBZQdO,5:lOOQS7+%p7+%pOB`Q`O7+%pOBeQhO'#DYOBmQ`O,59sO'tQhO,59sOOQ[1G/q1G/qOBuQ`O1G/qOOQS7+%z7+%zOBzQbO'#DPOOQO'#Eb'#EbOCYQ`O'#EaOOQO'#Ea'#EaOCeQ`O'#EwOCmQdO,5:zOOQS,5:z,5:zOOQ[1G/m1G/mOOQS7+&V7+&VO-`Q`O7+&VOCxQ!fO'#EsO&lQdO'#EsOEPQdO7+%mOOQO7+%m7+%mOOQO1G0z1G0zOEdQ!bO<<IOOElQdO'#EqOEvQ`O,5;yOOQP1G/u1G/uOOQS-E8j-E8jOFOQdO'#EpOFYQ`O,5;rOOQ]1G.x1G.xOOQP<<IO<<IOOFbQdO7+$|OOQO'#D]'#D]OFiQ!bO7+%QOFqQhO'#EoOF{Q`O,5;xO&lQdO,5;xOOQW1G/o1G/oOOQO'#ES'#ESOGTQ`O1G0WOOQS<<I[<<I[O&lQdO,59tOGnQhO1G/_OOQ[1G/_1G/_OGuQ`O1G/_OOQW-E8l-E8lOOQ[7+%]7+%]OOQO,5:{,5:{O=pQdO'#ExOCeQ`O,5;cOOQS,5;c,5;cOOQS-E8u-E8uOOQS1G0f1G0fOOQS<<Iq<<IqOG}Q!fO,5;_OOQS-E8q-E8qOOQO<<IX<<IXOOQPAN>jAN>jOIUQaO,5;]OOQO-E8o-E8oOI`QdO,5;[OOQO-E8n-E8nOOQW<<Hh<<HhOOQW<<Hl<<HlOIjQhO<<HlOI{QhO,5;ZOJWQ`O,5;ZOOQO-E8m-E8mOJ]QdO1G1dOBZQdO'#EuOJgQ`O7+%rOOQW7+%r7+%rOJoQ!bO1G/`OOQ[7+$y7+$yOJzQhO7+$yPKRQ`O'#EnOOQO,5;d,5;dOOQO-E8v-E8vOOQS1G0}1G0}OKWQ`OAN>WO&lQdO1G0uOK]Q`O7+'OOOQO,5;a,5;aOOQO-E8s-E8sOOQW<<I^<<I^OOQ[<<He<<HePOQW,5;Y,5;YOOQWG23rG23rOKeQdO7+&a",
  stateData: "Kx~O#sOS#tQQ~OW[OZ[O]TO`VOaVOi]OjWOmXO!jYO!mZO!saO!ybO!{cO!}dO#QeO#WfO#YgO#oRO~OQiOW[OZ[O]TO`VOaVOi]OjWOmXO!jYO!mZO!saO!ybO!{cO!}dO#QeO#WfO#YgO#ohO~O#m$SP~P!dO#tmO~O#ooO~O]qO`rOarOjsOmtO!juO!mwO#nvO~OpzO!^xO~P$SOc!QO#o|O#p}O~O#o!RO~O#o!TO~OW[OZ[O]TO`VOaVOjWOmXO!jYO!mZO#oRO~OS!]Oe!YO!V![O!Y!`O#q!XOp$TP~Ok$TP~P&POQ!jOe!cOm!dOp!eOr!mOt!mOz!kO!`!lO#o!bO#p!hO#}!fO~Ot!qO!`!lO#o!pO~Ot!sO#o!sO~OS!]Oe!YO!V![O!Y!`O#q!XO~Oe!vOpzO#Z!xO~O]YX`YX`!pXaYXjYXmYXpYX!^YX!jYX!mYX#nYX~O`!zO~Ok!{O#m$SXo$SX~O#m$SXo$SX~P!dO#u#OO#v#OO#w#QO~Oc#UO#o|O#p}O~OpzO!^xO~Oo$SP~P!dOe#`O~Oe#aO~Ol#bO!h#cO~O]qO`rOarOjsOmtO~Op!ia!^!ia!j!ia!m!ia#n!iad!ia~P*zOp!la!^!la!j!la!m!la#n!lad!la~P*zOR#gOS!]Oe!YOr#gOt#gO!V![O!Y!`O#q#dO#}!fO~O!R#iO!^#jOk$TXp$TX~Oe#mO~Ok#oOpzO~Oe!vO~O]#rO`#rOd#uOi#rOj#rOk#rO~P&lO]#rO`#rOi#rOj#rOk#rOl#wO~P&lO]#rO`#rOi#rOj#rOk#rOo#yO~P&lOP#zOSsXesXksXvsX!VsX!YsX!usX!wsX#qsX!TsXQsX]sX`sXdsXisXjsXmsXpsXrsXtsXzsX!`sX#osX#psX#}sXlsXosX!^sX!qsX#msX~Ov#{O!u#|O!w#}Ok$TP~P'tOe#aOS#{Xk#{Xv#{X!V#{X!Y#{X!u#{X!w#{X#q#{XQ#{X]#{X`#{Xd#{Xi#{Xj#{Xm#{Xp#{Xr#{Xt#{Xz#{X!`#{X#o#{X#p#{X#}#{Xl#{Xo#{X!^#{X!q#{X#m#{X~Oe$RO~Oe$TO~Ok$VOv#{O~Ok$WO~Ot$XO!`!lO~Op$YO~OpzO!R#iO~OpzO#Z$`O~O!q$bOk!oa#m!oao!oa~P&lOk#hX#m#hXo#hX~P!dOk!{O#m$Sao$Sa~O#u#OO#v#OO#w$hO~Ol$jO!h$kO~Op!ii!^!ii!j!ii!m!ii#n!iid!ii~P*zOp!ki!^!ki!j!ki!m!ki#n!kid!ki~P*zOp!li!^!li!j!li!m!li#n!lid!li~P*zOp#fa!^#fa~P$SOo$lO~Od$RP~P%_Od#zP~P&lO`!PXd}X!R}X!T!PX~O`$sO!T$tO~Od$uO!R#iO~Ok#jXp#jX!^#jX~P'tO!^#jOk$Tap$Ta~O!R#iOk!Uap!Ua!^!Uad!Ua`!Ua~OS!]Oe!YO!V![O!Y!`O#q$yO~Od$QP~P9dOv#{OQ#|X]#|X`#|Xd#|Xe#|Xi#|Xj#|Xk#|Xm#|Xp#|Xr#|Xt#|Xz#|X!`#|X#o#|X#p#|X#}#|Xl#|Xo#|X~O]#rO`#rOd%OOi#rOj#rOk#rO~P&lO]#rO`#rOi#rOj#rOk#rOl%PO~P&lO]#rO`#rOi#rOj#rOk#rOo%QO~P&lOe%SOS!tXk!tX!V!tX!Y!tX#q!tX~Ok%TO~Od%YOt%ZO!a%ZO~Ok%[O~Oo%cO#o%^O#}%]O~Od%dO~P$SOv#{O!^%hO!q%jOk!oi#m!oio!oi~P&lOk#ha#m#hao#ha~P!dOk!{O#m$Sio$Si~O!^%mOd$RX~P$SOd%oO~Ov#{OQ#`Xd#`Xe#`Xm#`Xp#`Xr#`Xt#`Xz#`X!^#`X!`#`X#o#`X#p#`X#}#`X~O!^%qOd#zX~P&lOd%sO~Ol%tOv#{O~OR#gOr#gOt#gO#q%vO#}!fO~O!R#iOk#jap#ja!^#ja~O`!PXd}X!R}X!^}X~O!R#iO!^%xOd$QX~O`%zO~Od%{O~O#o%|O~Ok&OO~O`&PO!R#iO~Od&ROk&QO~Od&UO~OP#zOpsX!^sXdsX~O#}%]Op#TX!^#TX~OpzO!^&WO~Oo&[O#o%^O#}%]O~Ov#{OQ#gXe#gXk#gXm#gXp#gXr#gXt#gXz#gX!^#gX!`#gX!q#gX#m#gX#o#gX#p#gX#}#gXo#gX~O!^%hO!q&`Ok!oq#m!oqo!oq~P&lOl&aOv#{O~Od#eX!^#eX~P%_O!^%mOd$Ra~Od#dX!^#dX~P&lO!^%qOd#za~Od&fO~P&lOd&gO!T&hO~Od#cX!^#cX~P9dO!^%xOd$Qa~O]&mOd&oO~OS#bae#ba!V#ba!Y#ba#q#ba~Od&qO~PG]Od&qOk&rO~Ov#{OQ#gae#gak#gam#gap#gar#gat#gaz#ga!^#ga!`#ga!q#ga#m#ga#o#ga#p#ga#}#gao#ga~Od#ea!^#ea~P$SOd#da!^#da~P&lOR#gOr#gOt#gO#q%vO#}%]O~O!R#iOd#ca!^#ca~O`&xO~O!^%xOd$Qi~P&lO]&mOd&|O~Ov#{Od|ik|i~Od&}O~PG]Ok'OO~Od'PO~O!^%xOd$Qq~Od#cq!^#cq~P&lO#s!a#t#}]#}v!m~",
  goto: "2h$UPPPPP$VP$YP$c$uP$cP%X$cPP%_PPP%e%o%oPPPPP%oPP%oP&]P%oP%o'W%oP't'w'}'}(^'}P'}P'}P'}'}P(m'}(yP(|PP)p)v$c)|$c*SP$cP$c$cP*Y*{+YP$YP+aP+dP$YP$YP$YP+j$YP+m+p+s+z$YP$YPP$YP,P,V,f,|-[-b-l-r-x.O.U.`.f.l.rPPPPPPPPPPP.x/R/w/z0|P1U1u2O2R2U2[RnQ_^OP`kz!{$dq[OPYZ`kuvwxz!v!{#`$d%mqSOPYZ`kuvwxz!v!{#`$d%mQpTR#RqQ!OVR#SrQ#S!QS$Q!i!jR$i#U!V!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'Q!U!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QU#g!Y$t&hU%`$Y%b&WR&V%_!V!iac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QR$S!kQ%W$RR&S%Xk!^]bf!Y![!g#i#j#m$P$R%X%xQ#e!YQ${#mQ%w$tQ&j%xR&w&hQ!ygQ#p!`Q$^!xR%f$`R#n!]!U!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QQ!qdR$X!rQ!PVR#TrQ#S!PR$i#TQ!SWR#VsQ!UXR#WtQ{UQ!wgQ#^yQ#o!_Q$U!nQ$[!uQ$_!yQ%e$^Q&Y%aQ&]%fR&v&XSjPzQ!}kQ$c!{R%k$dZiPkz!{$dR$P!gQ%}%SR&z&mR!rdR!teR$Z!tS%a$Y%bR&t&WV%_$Y%b&WQ#PmR$g#PQ`OSkPzU!a`k$dR$d!{Q$p#aY%p$p%u&d&l'QQ%u$sQ&d%qQ&l%zR'Q&xQ#t!cQ#v!dQ#x!eV$}#t#v#xQ%X$RR&T%XQ%y$zS&k%y&yR&y&lQ%r$pR&e%rQ%n$mR&c%nQyUR#]yQ%i$aR&_%iQ!|jS$e!|$fR$f!}Q&n%}R&{&nQ#k!ZR$x#kQ%b$YR&Z%bQ&X%aR&u&X__OP`kz!{$d^UOP`kz!{$dQ!VYQ!WZQ#XuQ#YvQ#ZwQ#[xQ$]!vQ$m#`R&b%mR$q#aQ!gaQ!oc[#q!c!d!e#t#v#xQ$a!zd$o#a$p$s%q%u%z&d&l&x'QQ$r#cQ%R#{S%g$a%iQ%l$kQ&^%hR&p&P]#s!c!d!e#t#v#xW!Z]b!g$PQ!ufQ#f!YQ#l![Q$v#iQ$w#jQ$z#mS%V$R%XR&i%xQ#h!YQ%w$tR&w&hR$|#mR$n#`QlPR#_zQ!_]Q!nbQ$O!gR%U$P",
  nodeNames: "⚠ Unit VariableName VariableName QueryCallee Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue AtKeyword # ; ] [ BracketedValue } { BracedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee IfExpression if ArgList IfBranch KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp ComparisonQuery CompareOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector ParenthesizedSelector CallQuery ArgList , CallLiteral CallTag ParenthesizedContent PseudoClassName ArgList IdSelector IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp Block Declaration PropertyName Important ImportStatement import Layer layer LayerName layer MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports ScopeStatement scope to AtRule Styles",
  maxTerm: 143,
  nodeProps: [
    ["isolate", -2, 5, 36, ""],
    ["openedBy", 20, "(", 28, "[", 31, "{"],
    ["closedBy", 21, ")", 29, "]", 32, "}"]
  ],
  propSources: [jQ],
  skippedNodes: [0, 5, 106],
  repeatNodeCount: 15,
  tokenData: "JQ~R!YOX$qX^%i^p$qpq%iqr({rs-ust/itu6Wuv$qvw7Qwx7cxy9Qyz9cz{9h{|:R|}>t}!O?V!O!P?t!P!Q@]!Q![AU![!]BP!]!^B{!^!_C^!_!`DY!`!aDm!a!b$q!b!cEn!c!}$q!}#OG{#O#P$q#P#QH^#Q#R6W#R#o$q#o#pHo#p#q6W#q#rIQ#r#sIc#s#y$q#y#z%i#z$f$q$f$g%i$g#BY$q#BY#BZ%i#BZ$IS$q$IS$I_%i$I_$I|$q$I|$JO%i$JO$JT$q$JT$JU%i$JU$KV$q$KV$KW%i$KW&FU$q&FU&FV%i&FV;'S$q;'S;=`Iz<%lO$q`$tSOy%Qz;'S%Q;'S;=`%c<%lO%Q`%VS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q`%fP;=`<%l%Q~%nh#s~OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Q~'ah#s~!a`OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Qj)OUOy%Qz#]%Q#]#^)b#^;'S%Q;'S;=`%c<%lO%Qj)gU!a`Oy%Qz#a%Q#a#b)y#b;'S%Q;'S;=`%c<%lO%Qj*OU!a`Oy%Qz#d%Q#d#e*b#e;'S%Q;'S;=`%c<%lO%Qj*gU!a`Oy%Qz#c%Q#c#d*y#d;'S%Q;'S;=`%c<%lO%Qj+OU!a`Oy%Qz#f%Q#f#g+b#g;'S%Q;'S;=`%c<%lO%Qj+gU!a`Oy%Qz#h%Q#h#i+y#i;'S%Q;'S;=`%c<%lO%Qj,OU!a`Oy%Qz#T%Q#T#U,b#U;'S%Q;'S;=`%c<%lO%Qj,gU!a`Oy%Qz#b%Q#b#c,y#c;'S%Q;'S;=`%c<%lO%Qj-OU!a`Oy%Qz#h%Q#h#i-b#i;'S%Q;'S;=`%c<%lO%Qj-iS!qY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q~-xWOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c<%lO-u~.gOt~~.jRO;'S-u;'S;=`.s;=`O-u~.vXOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c;=`<%l-u<%lO-u~/fP;=`<%l-uj/nYjYOy%Qz!Q%Q!Q![0^![!c%Q!c!i0^!i#T%Q#T#Z0^#Z;'S%Q;'S;=`%c<%lO%Qj0cY!a`Oy%Qz!Q%Q!Q![1R![!c%Q!c!i1R!i#T%Q#T#Z1R#Z;'S%Q;'S;=`%c<%lO%Qj1WY!a`Oy%Qz!Q%Q!Q![1v![!c%Q!c!i1v!i#T%Q#T#Z1v#Z;'S%Q;'S;=`%c<%lO%Qj1}YrY!a`Oy%Qz!Q%Q!Q![2m![!c%Q!c!i2m!i#T%Q#T#Z2m#Z;'S%Q;'S;=`%c<%lO%Qj2tYrY!a`Oy%Qz!Q%Q!Q![3d![!c%Q!c!i3d!i#T%Q#T#Z3d#Z;'S%Q;'S;=`%c<%lO%Qj3iY!a`Oy%Qz!Q%Q!Q![4X![!c%Q!c!i4X!i#T%Q#T#Z4X#Z;'S%Q;'S;=`%c<%lO%Qj4`YrY!a`Oy%Qz!Q%Q!Q![5O![!c%Q!c!i5O!i#T%Q#T#Z5O#Z;'S%Q;'S;=`%c<%lO%Qj5TY!a`Oy%Qz!Q%Q!Q![5s![!c%Q!c!i5s!i#T%Q#T#Z5s#Z;'S%Q;'S;=`%c<%lO%Qj5zSrY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qd6ZUOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qd6tS!hS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qb7VSZQOy%Qz;'S%Q;'S;=`%c<%lO%Q~7fWOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z<%lO7c~8RRO;'S7c;'S;=`8[;=`O7c~8_XOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z;=`<%l7c<%lO7c~8}P;=`<%l7cj9VSeYOy%Qz;'S%Q;'S;=`%c<%lO%Q~9hOd~n9oUWQvWOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qj:YWvW!mQOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj:wU!a`Oy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Qj;bY!a`#}YOy%Qz!Q%Q!Q![;Z![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj<VY!a`Oy%Qz{%Q{|<u|}%Q}!O<u!O!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj<zU!a`Oy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj=eU!a`#}YOy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj>O[!a`#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj>yS!^YOy%Qz;'S%Q;'S;=`%c<%lO%Qj?[WvWOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj?yU]YOy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Q~@bTvWOy%Qz{@q{;'S%Q;'S;=`%c<%lO%Q~@xS!a`#t~Oy%Qz;'S%Q;'S;=`%c<%lO%QjAZ[#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%QjBUU`YOy%Qz![%Q![!]Bh!];'S%Q;'S;=`%c<%lO%QbBoSaQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjCQSkYOy%Qz;'S%Q;'S;=`%c<%lO%QhCcU!TWOy%Qz!_%Q!_!`Cu!`;'S%Q;'S;=`%c<%lO%QhC|S!TW!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QlDaS!TW!hSOy%Qz;'S%Q;'S;=`%c<%lO%QjDtV!jQ!TWOy%Qz!_%Q!_!`Cu!`!aEZ!a;'S%Q;'S;=`%c<%lO%QbEbS!jQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjEqYOy%Qz}%Q}!OFa!O!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjFfW!a`Oy%Qz!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjGV[iY!a`Oy%Qz}%Q}!OGO!O!Q%Q!Q![GO![!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjHQSmYOy%Qz;'S%Q;'S;=`%c<%lO%QnHcSl^Oy%Qz;'S%Q;'S;=`%c<%lO%QjHtSpYOy%Qz;'S%Q;'S;=`%c<%lO%QjIVSoYOy%Qz;'S%Q;'S;=`%c<%lO%QfIhU!mQOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Q`I}P;=`<%l$q",
  tokenizers: [LQ, BQ, WQ, DQ, 1, 2, 3, 4, new vr("m~RRYZ[z{a~~g~aO#v~~dP!P!Qg~lO#w~~", 28, 129)],
  topRules: { StyleSheet: [0, 6], Styles: [1, 105] },
  specialized: [{ term: 124, get: (i) => IQ[i] || -1 }, { term: 125, get: (i) => NQ[i] || -1 }, { term: 4, get: (i) => GQ[i] || -1 }, { term: 25, get: (i) => UQ[i] || -1 }, { term: 123, get: (i) => FQ[i] || -1 }],
  tokenPrec: 1963
});
let Cs = null;
function As() {
  if (!Cs && typeof document == "object" && document.body) {
    let { style: i } = document.body, e = [], t = /* @__PURE__ */ new Set();
    for (let n in i)
      n != "cssText" && n != "cssFloat" && typeof i[n] == "string" && (/[A-Z]/.test(n) && (n = n.replace(/[A-Z]/g, (r) => "-" + r.toLowerCase())), t.has(n) || (e.push(n), t.add(n)));
    Cs = e.sort().map((n) => ({ type: "property", label: n, apply: n + ": " }));
  }
  return Cs || [];
}
const qh = /* @__PURE__ */ [
  "active",
  "after",
  "any-link",
  "autofill",
  "backdrop",
  "before",
  "checked",
  "cue",
  "default",
  "defined",
  "disabled",
  "empty",
  "enabled",
  "file-selector-button",
  "first",
  "first-child",
  "first-letter",
  "first-line",
  "first-of-type",
  "focus",
  "focus-visible",
  "focus-within",
  "fullscreen",
  "has",
  "host",
  "host-context",
  "hover",
  "in-range",
  "indeterminate",
  "invalid",
  "is",
  "lang",
  "last-child",
  "last-of-type",
  "left",
  "link",
  "marker",
  "modal",
  "not",
  "nth-child",
  "nth-last-child",
  "nth-last-of-type",
  "nth-of-type",
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "part",
  "placeholder",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "selection",
  "slotted",
  "target",
  "target-text",
  "valid",
  "visited",
  "where"
].map((i) => ({ type: "class", label: i })), Yh = /* @__PURE__ */ [
  "above",
  "absolute",
  "activeborder",
  "additive",
  "activecaption",
  "after-white-space",
  "ahead",
  "alias",
  "all",
  "all-scroll",
  "alphabetic",
  "alternate",
  "always",
  "antialiased",
  "appworkspace",
  "asterisks",
  "attr",
  "auto",
  "auto-flow",
  "avoid",
  "avoid-column",
  "avoid-page",
  "avoid-region",
  "axis-pan",
  "background",
  "backwards",
  "baseline",
  "below",
  "bidi-override",
  "blink",
  "block",
  "block-axis",
  "bold",
  "bolder",
  "border",
  "border-box",
  "both",
  "bottom",
  "break",
  "break-all",
  "break-word",
  "bullets",
  "button",
  "button-bevel",
  "buttonface",
  "buttonhighlight",
  "buttonshadow",
  "buttontext",
  "calc",
  "capitalize",
  "caps-lock-indicator",
  "caption",
  "captiontext",
  "caret",
  "cell",
  "center",
  "checkbox",
  "circle",
  "cjk-decimal",
  "clear",
  "clip",
  "close-quote",
  "col-resize",
  "collapse",
  "color",
  "color-burn",
  "color-dodge",
  "column",
  "column-reverse",
  "compact",
  "condensed",
  "contain",
  "content",
  "contents",
  "content-box",
  "context-menu",
  "continuous",
  "copy",
  "counter",
  "counters",
  "cover",
  "crop",
  "cross",
  "crosshair",
  "currentcolor",
  "cursive",
  "cyclic",
  "darken",
  "dashed",
  "decimal",
  "decimal-leading-zero",
  "default",
  "default-button",
  "dense",
  "destination-atop",
  "destination-in",
  "destination-out",
  "destination-over",
  "difference",
  "disc",
  "discard",
  "disclosure-closed",
  "disclosure-open",
  "document",
  "dot-dash",
  "dot-dot-dash",
  "dotted",
  "double",
  "down",
  "e-resize",
  "ease",
  "ease-in",
  "ease-in-out",
  "ease-out",
  "element",
  "ellipse",
  "ellipsis",
  "embed",
  "end",
  "ethiopic-abegede-gez",
  "ethiopic-halehame-aa-er",
  "ethiopic-halehame-gez",
  "ew-resize",
  "exclusion",
  "expanded",
  "extends",
  "extra-condensed",
  "extra-expanded",
  "fantasy",
  "fast",
  "fill",
  "fill-box",
  "fixed",
  "flat",
  "flex",
  "flex-end",
  "flex-start",
  "footnotes",
  "forwards",
  "from",
  "geometricPrecision",
  "graytext",
  "grid",
  "groove",
  "hand",
  "hard-light",
  "help",
  "hidden",
  "hide",
  "higher",
  "highlight",
  "highlighttext",
  "horizontal",
  "hsl",
  "hsla",
  "hue",
  "icon",
  "ignore",
  "inactiveborder",
  "inactivecaption",
  "inactivecaptiontext",
  "infinite",
  "infobackground",
  "infotext",
  "inherit",
  "initial",
  "inline",
  "inline-axis",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
  "inset",
  "inside",
  "intrinsic",
  "invert",
  "italic",
  "justify",
  "keep-all",
  "landscape",
  "large",
  "larger",
  "left",
  "level",
  "lighter",
  "lighten",
  "line-through",
  "linear",
  "linear-gradient",
  "lines",
  "list-item",
  "listbox",
  "listitem",
  "local",
  "logical",
  "loud",
  "lower",
  "lower-hexadecimal",
  "lower-latin",
  "lower-norwegian",
  "lowercase",
  "ltr",
  "luminosity",
  "manipulation",
  "match",
  "matrix",
  "matrix3d",
  "medium",
  "menu",
  "menutext",
  "message-box",
  "middle",
  "min-intrinsic",
  "mix",
  "monospace",
  "move",
  "multiple",
  "multiple_mask_images",
  "multiply",
  "n-resize",
  "narrower",
  "ne-resize",
  "nesw-resize",
  "no-close-quote",
  "no-drop",
  "no-open-quote",
  "no-repeat",
  "none",
  "normal",
  "not-allowed",
  "nowrap",
  "ns-resize",
  "numbers",
  "numeric",
  "nw-resize",
  "nwse-resize",
  "oblique",
  "opacity",
  "open-quote",
  "optimizeLegibility",
  "optimizeSpeed",
  "outset",
  "outside",
  "outside-shape",
  "overlay",
  "overline",
  "padding",
  "padding-box",
  "painted",
  "page",
  "paused",
  "perspective",
  "pinch-zoom",
  "plus-darker",
  "plus-lighter",
  "pointer",
  "polygon",
  "portrait",
  "pre",
  "pre-line",
  "pre-wrap",
  "preserve-3d",
  "progress",
  "push-button",
  "radial-gradient",
  "radio",
  "read-only",
  "read-write",
  "read-write-plaintext-only",
  "rectangle",
  "region",
  "relative",
  "repeat",
  "repeating-linear-gradient",
  "repeating-radial-gradient",
  "repeat-x",
  "repeat-y",
  "reset",
  "reverse",
  "rgb",
  "rgba",
  "ridge",
  "right",
  "rotate",
  "rotate3d",
  "rotateX",
  "rotateY",
  "rotateZ",
  "round",
  "row",
  "row-resize",
  "row-reverse",
  "rtl",
  "run-in",
  "running",
  "s-resize",
  "sans-serif",
  "saturation",
  "scale",
  "scale3d",
  "scaleX",
  "scaleY",
  "scaleZ",
  "screen",
  "scroll",
  "scrollbar",
  "scroll-position",
  "se-resize",
  "self-start",
  "self-end",
  "semi-condensed",
  "semi-expanded",
  "separate",
  "serif",
  "show",
  "single",
  "skew",
  "skewX",
  "skewY",
  "skip-white-space",
  "slide",
  "slider-horizontal",
  "slider-vertical",
  "sliderthumb-horizontal",
  "sliderthumb-vertical",
  "slow",
  "small",
  "small-caps",
  "small-caption",
  "smaller",
  "soft-light",
  "solid",
  "source-atop",
  "source-in",
  "source-out",
  "source-over",
  "space",
  "space-around",
  "space-between",
  "space-evenly",
  "spell-out",
  "square",
  "start",
  "static",
  "status-bar",
  "stretch",
  "stroke",
  "stroke-box",
  "sub",
  "subpixel-antialiased",
  "svg_masks",
  "super",
  "sw-resize",
  "symbolic",
  "symbols",
  "system-ui",
  "table",
  "table-caption",
  "table-cell",
  "table-column",
  "table-column-group",
  "table-footer-group",
  "table-header-group",
  "table-row",
  "table-row-group",
  "text",
  "text-bottom",
  "text-top",
  "textarea",
  "textfield",
  "thick",
  "thin",
  "threeddarkshadow",
  "threedface",
  "threedhighlight",
  "threedlightshadow",
  "threedshadow",
  "to",
  "top",
  "transform",
  "translate",
  "translate3d",
  "translateX",
  "translateY",
  "translateZ",
  "transparent",
  "ultra-condensed",
  "ultra-expanded",
  "underline",
  "unidirectional-pan",
  "unset",
  "up",
  "upper-latin",
  "uppercase",
  "url",
  "var",
  "vertical",
  "vertical-text",
  "view-box",
  "visible",
  "visibleFill",
  "visiblePainted",
  "visibleStroke",
  "visual",
  "w-resize",
  "wait",
  "wave",
  "wider",
  "window",
  "windowframe",
  "windowtext",
  "words",
  "wrap",
  "wrap-reverse",
  "x-large",
  "x-small",
  "xor",
  "xx-large",
  "xx-small"
].map((i) => ({ type: "keyword", label: i })).concat(/* @__PURE__ */ [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "grey",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen"
].map((i) => ({ type: "constant", label: i }))), KQ = /* @__PURE__ */ [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "figcaption",
  "figure",
  "footer",
  "form",
  "header",
  "hgroup",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "meter",
  "nav",
  "ol",
  "output",
  "p",
  "pre",
  "ruby",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "tr",
  "u",
  "ul"
].map((i) => ({ type: "type", label: i })), JQ = /* @__PURE__ */ [
  "@charset",
  "@color-profile",
  "@container",
  "@counter-style",
  "@font-face",
  "@font-feature-values",
  "@font-palette-values",
  "@import",
  "@keyframes",
  "@layer",
  "@media",
  "@namespace",
  "@page",
  "@position-try",
  "@property",
  "@scope",
  "@starting-style",
  "@supports",
  "@view-transition"
].map((i) => ({ type: "keyword", label: i })), Ot = /^(\w[\w-]*|-\w[\w-]*|)$/, e1 = /^-(-[\w-]*)?$/;
function t1(i, e) {
  var t;
  if ((i.name == "(" || i.type.isError) && (i = i.parent || i), i.name != "ArgList")
    return !1;
  let n = (t = i.parent) === null || t === void 0 ? void 0 : t.firstChild;
  return (n == null ? void 0 : n.name) != "Callee" ? !1 : e.sliceString(n.from, n.to) == "var";
}
const Eh = /* @__PURE__ */ new Gu(), i1 = ["Declaration"];
function n1(i) {
  for (let e = i; ; ) {
    if (e.type.isTop)
      return e;
    if (!(e = e.parent))
      return i;
  }
}
function bO(i, e, t) {
  if (e.to - e.from > 4096) {
    let n = Eh.get(e);
    if (n)
      return n;
    let r = [], s = /* @__PURE__ */ new Set(), o = e.cursor(N.IncludeAnonymous);
    if (o.firstChild())
      do
        for (let l of bO(i, o.node, t))
          s.has(l.label) || (s.add(l.label), r.push(l));
      while (o.nextSibling());
    return Eh.set(e, r), r;
  } else {
    let n = [], r = /* @__PURE__ */ new Set();
    return e.cursor().iterate((s) => {
      var o;
      if (t(s) && s.matchContext(i1) && ((o = s.node.nextSibling) === null || o === void 0 ? void 0 : o.name) == ":") {
        let l = i.sliceString(s.from, s.to);
        r.has(l) || (r.add(l), n.push({ label: l, type: "variable" }));
      }
    }), n;
  }
}
const r1 = (i) => (e) => {
  let { state: t, pos: n } = e, r = K(t).resolveInner(n, -1), s = r.type.isError && r.from == r.to - 1 && t.doc.sliceString(r.from, r.to) == "-";
  if (r.name == "PropertyName" || (s || r.name == "TagName") && /^(Block|Styles)$/.test(r.resolve(r.to).name))
    return { from: r.from, options: As(), validFor: Ot };
  if (r.name == "ValueName")
    return { from: r.from, options: Yh, validFor: Ot };
  if (r.name == "PseudoClassName")
    return { from: r.from, options: qh, validFor: Ot };
  if (i(r) || (e.explicit || s) && t1(r, t.doc))
    return {
      from: i(r) || s ? r.from : n,
      options: bO(t.doc, n1(r), i),
      validFor: e1
    };
  if (r.name == "TagName") {
    for (let { parent: a } = r; a; a = a.parent)
      if (a.name == "Block")
        return { from: r.from, options: As(), validFor: Ot };
    return { from: r.from, options: KQ, validFor: Ot };
  }
  if (r.name == "AtKeyword")
    return { from: r.from, options: JQ, validFor: Ot };
  if (!e.explicit)
    return null;
  let o = r.resolve(n), l = o.childBefore(n);
  return l && l.name == ":" && o.name == "PseudoClassSelector" ? { from: n, options: qh, validFor: Ot } : l && l.name == ":" && o.name == "Declaration" || o.name == "ArgList" ? { from: n, options: Yh, validFor: Ot } : o.name == "Block" || o.name == "Styles" ? { from: n, options: As(), validFor: Ot } : null;
}, s1 = /* @__PURE__ */ r1((i) => i.name == "VariableName"), ni = /* @__PURE__ */ $i.define({
  name: "css",
  parser: /* @__PURE__ */ HQ.configure({
    props: [
      /* @__PURE__ */ Lr.add({
        Declaration: /* @__PURE__ */ Kn()
      }),
      /* @__PURE__ */ Ol.add({
        "Block KeyframeList": rf
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*\}$/,
    wordChars: "-"
  }
});
function Xo() {
  return new ul(ni, ni.data.of({ autocomplete: s1 }));
}
const o1 = 316, l1 = 317, Wh = 1, a1 = 2, h1 = 3, c1 = 4, u1 = 318, f1 = 320, O1 = 321, d1 = 5, p1 = 6, m1 = 0, Ro = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], yO = 125, g1 = 59, Mo = 47, b1 = 42, y1 = 43, Q1 = 45, S1 = 60, x1 = 44, w1 = 63, $1 = 46, v1 = 91, k1 = new nO({
  start: !1,
  shift(i, e) {
    return e == d1 || e == p1 || e == f1 ? i : e == O1;
  },
  strict: !1
}), P1 = new Ze((i, e) => {
  let { next: t } = i;
  (t == yO || t == -1 || e.context) && i.acceptToken(u1);
}, { contextual: !0, fallback: !0 }), T1 = new Ze((i, e) => {
  let { next: t } = i, n;
  Ro.indexOf(t) > -1 || t == Mo && ((n = i.peek(1)) == Mo || n == b1) || t != yO && t != g1 && t != -1 && !e.context && i.acceptToken(o1);
}, { contextual: !0 }), Z1 = new Ze((i, e) => {
  i.next == v1 && !e.context && i.acceptToken(l1);
}, { contextual: !0 }), C1 = new Ze((i, e) => {
  let { next: t } = i;
  if (t == y1 || t == Q1) {
    if (i.advance(), t == i.next) {
      i.advance();
      let n = !e.context && e.canShift(Wh);
      i.acceptToken(n ? Wh : a1);
    }
  } else t == w1 && i.peek(1) == $1 && (i.advance(), i.advance(), (i.next < 48 || i.next > 57) && i.acceptToken(h1));
}, { contextual: !0 });
function Xs(i, e) {
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i == 95 || i >= 192 || !e && i >= 48 && i <= 57;
}
const A1 = new Ze((i, e) => {
  if (i.next != S1 || !e.dialectEnabled(m1) || (i.advance(), i.next == Mo)) return;
  let t = 0;
  for (; Ro.indexOf(i.next) > -1; )
    i.advance(), t++;
  if (Xs(i.next, !0)) {
    for (i.advance(), t++; Xs(i.next, !1); )
      i.advance(), t++;
    for (; Ro.indexOf(i.next) > -1; )
      i.advance(), t++;
    if (i.next == x1) return;
    for (let n = 0; ; n++) {
      if (n == 7) {
        if (!Xs(i.next, !0)) return;
        break;
      }
      if (i.next != "extends".charCodeAt(n)) break;
      i.advance(), t++;
    }
  }
  i.acceptToken(c1, -t);
}), X1 = Wr({
  "get set async static": m.modifier,
  "for while do if else switch try catch finally return throw break continue default case defer": m.controlKeyword,
  "in of await yield void typeof delete instanceof as satisfies": m.operatorKeyword,
  "let var const using function class extends": m.definitionKeyword,
  "import export from": m.moduleKeyword,
  "with debugger new": m.keyword,
  TemplateString: m.special(m.string),
  super: m.atom,
  BooleanLiteral: m.bool,
  this: m.self,
  null: m.null,
  Star: m.modifier,
  VariableName: m.variableName,
  "CallExpression/VariableName TaggedTemplateExpression/VariableName": m.function(m.variableName),
  VariableDefinition: m.definition(m.variableName),
  Label: m.labelName,
  PropertyName: m.propertyName,
  PrivatePropertyName: m.special(m.propertyName),
  "CallExpression/MemberExpression/PropertyName": m.function(m.propertyName),
  "FunctionDeclaration/VariableDefinition": m.function(m.definition(m.variableName)),
  "ClassDeclaration/VariableDefinition": m.definition(m.className),
  "NewExpression/VariableName": m.className,
  PropertyDefinition: m.definition(m.propertyName),
  PrivatePropertyDefinition: m.definition(m.special(m.propertyName)),
  UpdateOp: m.updateOperator,
  "LineComment Hashbang": m.lineComment,
  BlockComment: m.blockComment,
  Number: m.number,
  String: m.string,
  Escape: m.escape,
  ArithOp: m.arithmeticOperator,
  LogicOp: m.logicOperator,
  BitOp: m.bitwiseOperator,
  CompareOp: m.compareOperator,
  RegExp: m.regexp,
  Equals: m.definitionOperator,
  Arrow: m.function(m.punctuation),
  ": Spread": m.punctuation,
  "( )": m.paren,
  "[ ]": m.squareBracket,
  "{ }": m.brace,
  "InterpolationStart InterpolationEnd": m.special(m.brace),
  ".": m.derefOperator,
  ", ;": m.separator,
  "@": m.meta,
  TypeName: m.typeName,
  TypeDefinition: m.definition(m.typeName),
  "type enum interface implements namespace module declare": m.definitionKeyword,
  "abstract global Privacy readonly override": m.modifier,
  "is keyof unique infer asserts": m.operatorKeyword,
  JSXAttributeValue: m.attributeValue,
  JSXText: m.content,
  "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": m.angleBracket,
  "JSXIdentifier JSXNameSpacedName": m.tagName,
  "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": m.attributeName,
  "JSXBuiltin/JSXIdentifier": m.standard(m.tagName)
}), R1 = { __proto__: null, export: 20, as: 25, from: 33, default: 36, async: 41, function: 42, in: 52, out: 55, const: 56, extends: 60, this: 64, true: 72, false: 72, null: 84, void: 88, typeof: 92, super: 108, new: 142, delete: 154, yield: 163, await: 167, class: 172, public: 235, private: 235, protected: 235, readonly: 237, instanceof: 256, satisfies: 259, import: 292, keyof: 349, unique: 353, infer: 359, asserts: 395, is: 397, abstract: 417, implements: 419, type: 421, let: 424, var: 426, using: 429, interface: 435, enum: 439, namespace: 445, module: 447, declare: 451, global: 455, defer: 471, for: 476, of: 485, while: 488, with: 492, do: 496, if: 500, else: 502, switch: 506, case: 512, try: 518, catch: 522, finally: 526, return: 530, throw: 534, break: 538, continue: 542, debugger: 546 }, M1 = { __proto__: null, async: 129, get: 131, set: 133, declare: 195, public: 197, private: 197, protected: 197, static: 199, abstract: 201, override: 203, readonly: 209, accessor: 211, new: 401 }, z1 = { __proto__: null, "<": 193 }, V1 = Pi.deserialize({
  version: 14,
  states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
  stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
  goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
  nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 380,
  context: k1,
  nodeProps: [
    ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
    ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
    ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
    ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
  ],
  propSources: [X1],
  skippedNodes: [0, 5, 6, 278],
  repeatNodeCount: 37,
  tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [T1, Z1, C1, A1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, P1, new vr("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new vr("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
  topRules: { Script: [0, 7], SingleExpression: [1, 276], SingleClassItem: [2, 277] },
  dialects: { jsx: 0, ts: 15175 },
  dynamicPrecedences: { 80: 1, 82: 1, 94: 1, 169: 1, 199: 1 },
  specialized: [{ term: 327, get: (i) => R1[i] || -1 }, { term: 343, get: (i) => M1[i] || -1 }, { term: 95, get: (i) => z1[i] || -1 }],
  tokenPrec: 15201
}), QO = [
  /* @__PURE__ */ Qe("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], _1 = /* @__PURE__ */ QO.concat([
  /* @__PURE__ */ Qe("interface ${name} {\n	${}\n}", {
    label: "interface",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe("type ${name} = ${type}", {
    label: "type",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Qe("enum ${name} {\n	${}\n}", {
    label: "enum",
    detail: "definition",
    type: "keyword"
  })
]), Dh = /* @__PURE__ */ new Gu(), SO = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function Ei(i) {
  return (e, t) => {
    let n = e.node.getChild("VariableDefinition");
    return n && t(n, i), !0;
  };
}
const q1 = ["FunctionDeclaration"], Y1 = {
  FunctionDeclaration: /* @__PURE__ */ Ei("function"),
  ClassDeclaration: /* @__PURE__ */ Ei("class"),
  ClassExpression: () => !0,
  EnumDeclaration: /* @__PURE__ */ Ei("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ Ei("type"),
  NamespaceDeclaration: /* @__PURE__ */ Ei("namespace"),
  VariableDefinition(i, e) {
    i.matchContext(q1) || e(i, "variable");
  },
  TypeDefinition(i, e) {
    e(i, "type");
  },
  __proto__: null
};
function xO(i, e) {
  let t = Dh.get(e);
  if (t)
    return t;
  let n = [], r = !0;
  function s(o, l) {
    let a = i.sliceString(o.from, o.to);
    n.push({ label: a, type: l });
  }
  return e.cursor(N.IncludeAnonymous).iterate((o) => {
    if (r)
      r = !1;
    else if (o.name) {
      let l = Y1[o.name];
      if (l && l(o, s) || SO.has(o.name))
        return !1;
    } else if (o.to - o.from > 8192) {
      for (let l of xO(i, o.node))
        n.push(l);
      return !1;
    }
  }), Dh.set(e, n), n;
}
const Lh = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, wO = [
  "TemplateString",
  "String",
  "RegExp",
  "LineComment",
  "BlockComment",
  "VariableDefinition",
  "TypeDefinition",
  "Label",
  "PropertyDefinition",
  "PropertyName",
  "PrivatePropertyDefinition",
  "PrivatePropertyName",
  "JSXText",
  "JSXAttributeValue",
  "JSXOpenTag",
  "JSXCloseTag",
  "JSXSelfClosingTag",
  ".",
  "?."
];
function E1(i) {
  let e = K(i.state).resolveInner(i.pos, -1);
  if (wO.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && Lh.test(i.state.sliceDoc(e.from, e.to));
  if (!t && !i.explicit)
    return null;
  let n = [];
  for (let r = e; r; r = r.parent)
    SO.has(r.name) && (n = n.concat(xO(i.state.doc, r)));
  return {
    options: n,
    from: t ? e.from : i.pos,
    validFor: Lh
  };
}
const ct = /* @__PURE__ */ $i.define({
  name: "javascript",
  parser: /* @__PURE__ */ V1.configure({
    props: [
      /* @__PURE__ */ Lr.add({
        IfStatement: /* @__PURE__ */ Kn({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ Kn({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: O0,
        SwitchBody: (i) => {
          let e = i.textAfter, t = /^\s*\}/.test(e), n = /^\s*(case|default)\b/.test(e);
          return i.baseIndent + (t ? 0 : n ? 1 : 2) * i.unit;
        },
        Block: /* @__PURE__ */ f0({ closing: "}" }),
        ArrowFunction: (i) => i.baseIndent + i.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": /* @__PURE__ */ Kn({ except: /^\s*{/ }),
        JSXElement(i) {
          let e = /^\s*<\//.test(i.textAfter);
          return i.lineIndent(i.node.from) + (e ? 0 : i.unit);
        },
        JSXEscape(i) {
          let e = /\s*\}/.test(i.textAfter);
          return i.lineIndent(i.node.from) + (e ? 0 : i.unit);
        },
        "JSXOpenTag JSXSelfClosingTag"(i) {
          return i.column(i.node.from) + i.unit;
        }
      }),
      /* @__PURE__ */ Ol.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": rf,
        BlockComment(i) {
          return { from: i.from + 2, to: i.to - 2 };
        }
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
    wordChars: "$"
  }
}), $O = {
  test: (i) => /^JSX/.test(i.name),
  facet: /* @__PURE__ */ Ku({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, vO = /* @__PURE__ */ ct.configure({ dialect: "ts" }, "typescript"), kO = /* @__PURE__ */ ct.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ cl.add((i) => i.isTop ? [$O] : void 0)]
}), PO = /* @__PURE__ */ ct.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ cl.add((i) => i.isTop ? [$O] : void 0)]
}, "typescript");
let TO = (i) => ({ label: i, type: "keyword" });
const ZO = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(TO), W1 = /* @__PURE__ */ ZO.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(TO));
function D1(i = {}) {
  let e = i.jsx ? i.typescript ? PO : kO : i.typescript ? vO : ct, t = i.typescript ? _1.concat(W1) : QO.concat(ZO);
  return new ul(e, [
    ct.data.of({
      autocomplete: Z0(wO, Of(t))
    }),
    ct.data.of({
      autocomplete: E1
    }),
    i.jsx ? j1 : []
  ]);
}
function L1(i) {
  for (; ; ) {
    if (i.name == "JSXOpenTag" || i.name == "JSXSelfClosingTag" || i.name == "JSXFragmentTag")
      return i;
    if (i.name == "JSXEscape" || !i.parent)
      return null;
    i = i.parent;
  }
}
function Bh(i, e, t = i.length) {
  for (let n = e == null ? void 0 : e.firstChild; n; n = n.nextSibling)
    if (n.name == "JSXIdentifier" || n.name == "JSXBuiltin" || n.name == "JSXNamespacedName" || n.name == "JSXMemberExpression")
      return i.sliceString(n.from, Math.min(n.to, t));
  return "";
}
const B1 = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), j1 = /* @__PURE__ */ T.inputHandler.of((i, e, t, n, r) => {
  if ((B1 ? i.composing : i.compositionStarted) || i.state.readOnly || e != t || n != ">" && n != "/" || !ct.isActiveAt(i.state, e, -1))
    return !1;
  let s = r(), { state: o } = s, l = o.changeByRange((a) => {
    var h;
    let { head: c } = a, u = K(o).resolveInner(c - 1, -1), f;
    if (u.name == "JSXStartTag" && (u = u.parent), !(o.doc.sliceString(c - 1, c) != n || u.name == "JSXAttributeValue" && u.to > c)) {
      if (n == ">" && u.name == "JSXFragmentTag")
        return { range: a, changes: { from: c, insert: "</>" } };
      if (n == "/" && u.name == "JSXStartCloseTag") {
        let O = u.parent, d = O.parent;
        if (d && O.from == c - 2 && ((f = Bh(o.doc, d.firstChild, c)) || ((h = d.firstChild) === null || h === void 0 ? void 0 : h.name) == "JSXFragmentTag")) {
          let p = `${f}>`;
          return { range: y.cursor(c + p.length, -1), changes: { from: c, insert: p } };
        }
      } else if (n == ">") {
        let O = L1(u);
        if (O && O.name == "JSXOpenTag" && !/^\/?>|^<\//.test(o.doc.sliceString(c, c + 2)) && (f = Bh(o.doc, O, c)))
          return { range: a, changes: { from: c, insert: `</${f}>` } };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (i.dispatch([
    s,
    o.update(l, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
}), Wi = ["_blank", "_self", "_top", "_parent"], Rs = ["ascii", "utf-8", "utf-16", "latin1", "latin1"], Ms = ["get", "post", "put", "delete"], zs = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], ve = ["true", "false"], P = {}, I1 = {
  a: {
    attrs: {
      href: null,
      ping: null,
      type: null,
      media: null,
      target: Wi,
      hreflang: null
    }
  },
  abbr: P,
  address: P,
  area: {
    attrs: {
      alt: null,
      coords: null,
      href: null,
      target: null,
      ping: null,
      media: null,
      hreflang: null,
      type: null,
      shape: ["default", "rect", "circle", "poly"]
    }
  },
  article: P,
  aside: P,
  audio: {
    attrs: {
      src: null,
      mediagroup: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["none", "metadata", "auto"],
      autoplay: ["autoplay"],
      loop: ["loop"],
      controls: ["controls"]
    }
  },
  b: P,
  base: { attrs: { href: null, target: Wi } },
  bdi: P,
  bdo: P,
  blockquote: { attrs: { cite: null } },
  body: P,
  br: P,
  button: {
    attrs: {
      form: null,
      formaction: null,
      name: null,
      value: null,
      autofocus: ["autofocus"],
      disabled: ["autofocus"],
      formenctype: zs,
      formmethod: Ms,
      formnovalidate: ["novalidate"],
      formtarget: Wi,
      type: ["submit", "reset", "button"]
    }
  },
  canvas: { attrs: { width: null, height: null } },
  caption: P,
  center: P,
  cite: P,
  code: P,
  col: { attrs: { span: null } },
  colgroup: { attrs: { span: null } },
  command: {
    attrs: {
      type: ["command", "checkbox", "radio"],
      label: null,
      icon: null,
      radiogroup: null,
      command: null,
      title: null,
      disabled: ["disabled"],
      checked: ["checked"]
    }
  },
  data: { attrs: { value: null } },
  datagrid: { attrs: { disabled: ["disabled"], multiple: ["multiple"] } },
  datalist: { attrs: { data: null } },
  dd: P,
  del: { attrs: { cite: null, datetime: null } },
  details: { attrs: { open: ["open"] } },
  dfn: P,
  div: P,
  dl: P,
  dt: P,
  em: P,
  embed: { attrs: { src: null, type: null, width: null, height: null } },
  eventsource: { attrs: { src: null } },
  fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
  figcaption: P,
  figure: P,
  footer: P,
  form: {
    attrs: {
      action: null,
      name: null,
      "accept-charset": Rs,
      autocomplete: ["on", "off"],
      enctype: zs,
      method: Ms,
      novalidate: ["novalidate"],
      target: Wi
    }
  },
  h1: P,
  h2: P,
  h3: P,
  h4: P,
  h5: P,
  h6: P,
  head: {
    children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
  },
  header: P,
  hgroup: P,
  hr: P,
  html: {
    attrs: { manifest: null }
  },
  i: P,
  iframe: {
    attrs: {
      src: null,
      srcdoc: null,
      name: null,
      width: null,
      height: null,
      sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
      seamless: ["seamless"]
    }
  },
  img: {
    attrs: {
      alt: null,
      src: null,
      ismap: null,
      usemap: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"]
    }
  },
  input: {
    attrs: {
      alt: null,
      dirname: null,
      form: null,
      formaction: null,
      height: null,
      list: null,
      max: null,
      maxlength: null,
      min: null,
      name: null,
      pattern: null,
      placeholder: null,
      size: null,
      src: null,
      step: null,
      value: null,
      width: null,
      accept: ["audio/*", "video/*", "image/*"],
      autocomplete: ["on", "off"],
      autofocus: ["autofocus"],
      checked: ["checked"],
      disabled: ["disabled"],
      formenctype: zs,
      formmethod: Ms,
      formnovalidate: ["novalidate"],
      formtarget: Wi,
      multiple: ["multiple"],
      readonly: ["readonly"],
      required: ["required"],
      type: [
        "hidden",
        "text",
        "search",
        "tel",
        "url",
        "email",
        "password",
        "datetime",
        "date",
        "month",
        "week",
        "time",
        "datetime-local",
        "number",
        "range",
        "color",
        "checkbox",
        "radio",
        "file",
        "submit",
        "image",
        "reset",
        "button"
      ]
    }
  },
  ins: { attrs: { cite: null, datetime: null } },
  kbd: P,
  keygen: {
    attrs: {
      challenge: null,
      form: null,
      name: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      keytype: ["RSA"]
    }
  },
  label: { attrs: { for: null, form: null } },
  legend: P,
  li: { attrs: { value: null } },
  link: {
    attrs: {
      href: null,
      type: null,
      hreflang: null,
      media: null,
      sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
    }
  },
  map: { attrs: { name: null } },
  mark: P,
  menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
  meta: {
    attrs: {
      content: null,
      charset: Rs,
      name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
      "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
    }
  },
  meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
  nav: P,
  noscript: P,
  object: {
    attrs: {
      data: null,
      type: null,
      name: null,
      usemap: null,
      form: null,
      width: null,
      height: null,
      typemustmatch: ["typemustmatch"]
    }
  },
  ol: {
    attrs: { reversed: ["reversed"], start: null, type: ["1", "a", "A", "i", "I"] },
    children: ["li", "script", "template", "ul", "ol"]
  },
  optgroup: { attrs: { disabled: ["disabled"], label: null } },
  option: { attrs: { disabled: ["disabled"], label: null, selected: ["selected"], value: null } },
  output: { attrs: { for: null, form: null, name: null } },
  p: P,
  param: { attrs: { name: null, value: null } },
  pre: P,
  progress: { attrs: { value: null, max: null } },
  q: { attrs: { cite: null } },
  rp: P,
  rt: P,
  ruby: P,
  samp: P,
  script: {
    attrs: {
      type: ["text/javascript"],
      src: null,
      async: ["async"],
      defer: ["defer"],
      charset: Rs
    }
  },
  section: P,
  select: {
    attrs: {
      form: null,
      name: null,
      size: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      multiple: ["multiple"]
    }
  },
  slot: { attrs: { name: null } },
  small: P,
  source: { attrs: { src: null, type: null, media: null } },
  span: P,
  strong: P,
  style: {
    attrs: {
      type: ["text/css"],
      media: null,
      scoped: null
    }
  },
  sub: P,
  summary: P,
  sup: P,
  table: P,
  tbody: P,
  td: { attrs: { colspan: null, rowspan: null, headers: null } },
  template: P,
  textarea: {
    attrs: {
      dirname: null,
      form: null,
      maxlength: null,
      name: null,
      placeholder: null,
      rows: null,
      cols: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      readonly: ["readonly"],
      required: ["required"],
      wrap: ["soft", "hard"]
    }
  },
  tfoot: P,
  th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
  thead: P,
  time: { attrs: { datetime: null } },
  title: P,
  tr: P,
  track: {
    attrs: {
      src: null,
      label: null,
      default: null,
      kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
      srclang: null
    }
  },
  ul: { children: ["li", "script", "template", "ul", "ol"] },
  var: P,
  video: {
    attrs: {
      src: null,
      poster: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["auto", "metadata", "none"],
      autoplay: ["autoplay"],
      mediagroup: ["movie"],
      muted: ["muted"],
      controls: ["controls"]
    }
  },
  wbr: P
}, CO = {
  accesskey: null,
  class: null,
  contenteditable: ve,
  contextmenu: null,
  dir: ["ltr", "rtl", "auto"],
  draggable: ["true", "false", "auto"],
  dropzone: ["copy", "move", "link", "string:", "file:"],
  hidden: ["hidden"],
  id: null,
  inert: ["inert"],
  itemid: null,
  itemprop: null,
  itemref: null,
  itemscope: ["itemscope"],
  itemtype: null,
  lang: ["ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh"],
  spellcheck: ve,
  autocorrect: ve,
  autocapitalize: ve,
  style: null,
  tabindex: null,
  title: null,
  translate: ["yes", "no"],
  rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"],
  role: /* @__PURE__ */ "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
  "aria-activedescendant": null,
  "aria-atomic": ve,
  "aria-autocomplete": ["inline", "list", "both", "none"],
  "aria-busy": ve,
  "aria-checked": ["true", "false", "mixed", "undefined"],
  "aria-controls": null,
  "aria-describedby": null,
  "aria-disabled": ve,
  "aria-dropeffect": null,
  "aria-expanded": ["true", "false", "undefined"],
  "aria-flowto": null,
  "aria-grabbed": ["true", "false", "undefined"],
  "aria-haspopup": ve,
  "aria-hidden": ve,
  "aria-invalid": ["true", "false", "grammar", "spelling"],
  "aria-label": null,
  "aria-labelledby": null,
  "aria-level": null,
  "aria-live": ["off", "polite", "assertive"],
  "aria-multiline": ve,
  "aria-multiselectable": ve,
  "aria-owns": null,
  "aria-posinset": null,
  "aria-pressed": ["true", "false", "mixed", "undefined"],
  "aria-readonly": ve,
  "aria-relevant": null,
  "aria-required": ve,
  "aria-selected": ["true", "false", "undefined"],
  "aria-setsize": null,
  "aria-sort": ["ascending", "descending", "none", "other"],
  "aria-valuemax": null,
  "aria-valuemin": null,
  "aria-valuenow": null,
  "aria-valuetext": null
}, AO = /* @__PURE__ */ "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((i) => "on" + i);
for (let i of AO)
  CO[i] = null;
class Pr {
  constructor(e, t) {
    this.tags = { ...I1, ...e }, this.globalAttrs = { ...CO, ...t }, this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
  }
}
Pr.default = /* @__PURE__ */ new Pr();
function Ti(i, e, t = i.length) {
  if (!e)
    return "";
  let n = e.firstChild, r = n && n.getChild("TagName");
  return r ? i.sliceString(r.from, Math.min(r.to, t)) : "";
}
function Zi(i, e = !1) {
  for (; i; i = i.parent)
    if (i.name == "Element")
      if (e)
        e = !1;
      else
        return i;
  return null;
}
function XO(i, e, t) {
  let n = t.tags[Ti(i, Zi(e))];
  return (n == null ? void 0 : n.children) || t.allTags;
}
function Cl(i, e) {
  let t = [];
  for (let n = Zi(e); n && !n.type.isTop; n = Zi(n.parent)) {
    let r = Ti(i, n);
    if (r && n.lastChild.name == "CloseTag")
      break;
    r && t.indexOf(r) < 0 && (e.name == "EndTag" || e.from >= n.firstChild.to) && t.push(r);
  }
  return t;
}
const RO = /^[:\-\.\w\u00b7-\uffff]*$/;
function jh(i, e, t, n, r) {
  let s = /\s*>/.test(i.sliceDoc(r, r + 5)) ? "" : ">", o = Zi(t, t.name == "StartTag" || t.name == "TagName");
  return {
    from: n,
    to: r,
    options: XO(i.doc, o, e).map((l) => ({ label: l, type: "type" })).concat(Cl(i.doc, t).map((l, a) => ({
      label: "/" + l,
      apply: "/" + l + s,
      type: "type",
      boost: 99 - a
    }))),
    validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
function Ih(i, e, t, n) {
  let r = /\s*>/.test(i.sliceDoc(n, n + 5)) ? "" : ">";
  return {
    from: t,
    to: n,
    options: Cl(i.doc, e).map((s, o) => ({ label: s, apply: s + r, type: "type", boost: 99 - o })),
    validFor: RO
  };
}
function N1(i, e, t, n) {
  let r = [], s = 0;
  for (let o of XO(i.doc, t, e))
    r.push({ label: "<" + o, type: "type" });
  for (let o of Cl(i.doc, t))
    r.push({ label: "</" + o + ">", type: "type", boost: 99 - s++ });
  return { from: n, to: n, options: r, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
function G1(i, e, t, n, r) {
  let s = Zi(t), o = s ? e.tags[Ti(i.doc, s)] : null, l = o && o.attrs ? Object.keys(o.attrs) : [], a = o && o.globalAttrs === !1 ? l : l.length ? l.concat(e.globalAttrNames) : e.globalAttrNames;
  return {
    from: n,
    to: r,
    options: a.map((h) => ({ label: h, type: "property" })),
    validFor: RO
  };
}
function U1(i, e, t, n, r) {
  var s;
  let o = (s = t.parent) === null || s === void 0 ? void 0 : s.getChild("AttributeName"), l = [], a;
  if (o) {
    let h = i.sliceDoc(o.from, o.to), c = e.globalAttrs[h];
    if (!c) {
      let u = Zi(t), f = u ? e.tags[Ti(i.doc, u)] : null;
      c = (f == null ? void 0 : f.attrs) && f.attrs[h];
    }
    if (c) {
      let u = i.sliceDoc(n, r).toLowerCase(), f = '"', O = '"';
      /^['"]/.test(u) ? (a = u[0] == '"' ? /^[^"]*$/ : /^[^']*$/, f = "", O = i.sliceDoc(r, r + 1) == u[0] ? "" : u[0], u = u.slice(1), n++) : a = /^[^\s<>='"]*$/;
      for (let d of c)
        l.push({ label: d, apply: f + d + O, type: "constant" });
    }
  }
  return { from: n, to: r, options: l, validFor: a };
}
function F1(i, e) {
  let { state: t, pos: n } = e, r = K(t).resolveInner(n, -1), s = r.resolve(n);
  for (let o = n, l; s == r && (l = r.childBefore(o)); ) {
    let a = l.lastChild;
    if (!a || !a.type.isError || a.from < a.to)
      break;
    s = r = l, o = a.from;
  }
  return r.name == "TagName" ? r.parent && /CloseTag$/.test(r.parent.name) ? Ih(t, r, r.from, n) : jh(t, i, r, r.from, n) : r.name == "StartTag" || r.name == "IncompleteTag" ? jh(t, i, r, n, n) : r.name == "StartCloseTag" || r.name == "IncompleteCloseTag" ? Ih(t, r, n, n) : r.name == "OpenTag" || r.name == "SelfClosingTag" || r.name == "AttributeName" ? G1(t, i, r, r.name == "AttributeName" ? r.from : n, n) : r.name == "Is" || r.name == "AttributeValue" || r.name == "UnquotedAttributeValue" ? U1(t, i, r, r.name == "Is" ? n : r.from, n) : e.explicit && (s.name == "Element" || s.name == "Text" || s.name == "Document") ? N1(t, i, r, n) : null;
}
function H1(i) {
  let { extraTags: e, extraGlobalAttributes: t } = i, n = t || e ? new Pr(e, t) : Pr.default;
  return (r) => F1(n, r);
}
const K1 = /* @__PURE__ */ ct.parser.configure({ top: "SingleExpression" }), MO = [
  {
    tag: "script",
    attrs: (i) => i.type == "text/typescript" || i.lang == "ts",
    parser: vO.parser
  },
  {
    tag: "script",
    attrs: (i) => i.type == "text/babel" || i.type == "text/jsx",
    parser: kO.parser
  },
  {
    tag: "script",
    attrs: (i) => i.type == "text/typescript-jsx",
    parser: PO.parser
  },
  {
    tag: "script",
    attrs(i) {
      return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(i.type);
    },
    parser: K1
  },
  {
    tag: "script",
    attrs(i) {
      return !i.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(i.type);
    },
    parser: ct.parser
  },
  {
    tag: "style",
    attrs(i) {
      return (!i.lang || i.lang == "css") && (!i.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(i.type));
    },
    parser: ni.parser
  }
], zO = /* @__PURE__ */ [
  {
    name: "style",
    parser: /* @__PURE__ */ ni.parser.configure({ top: "Styles" })
  }
].concat(/* @__PURE__ */ AO.map((i) => ({ name: i, parser: ct.parser }))), VO = /* @__PURE__ */ $i.define({
  name: "html",
  parser: /* @__PURE__ */ $Q.configure({
    props: [
      /* @__PURE__ */ Lr.add({
        Element(i) {
          let e = /^(\s*)(<\/)?/.exec(i.textAfter);
          return i.node.to <= i.pos + e[0].length ? i.continue() : i.lineIndent(i.node.from) + (e[2] ? 0 : i.unit);
        },
        "OpenTag CloseTag SelfClosingTag"(i) {
          return i.column(i.node.from) + i.unit;
        },
        Document(i) {
          if (i.pos + /\s*/.exec(i.textAfter)[0].length < i.node.to)
            return i.continue();
          let e = null, t;
          for (let n = i.node; ; ) {
            let r = n.lastChild;
            if (!r || r.name != "Element" || r.to != n.to)
              break;
            e = n = r;
          }
          return e && !((t = e.lastChild) && (t.name == "CloseTag" || t.name == "SelfClosingTag")) ? i.lineIndent(e.from) + i.unit : null;
        }
      }),
      /* @__PURE__ */ Ol.add({
        Element(i) {
          let e = i.firstChild, t = i.lastChild;
          return !e || e.name != "OpenTag" ? null : { from: e.to, to: t.name == "CloseTag" ? t.from : i.to };
        }
      }),
      /* @__PURE__ */ uf.add({
        "OpenTag CloseTag": (i) => i.getChild("TagName")
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "<!--", close: "-->" } },
    indentOnInput: /^\s*<\/\w+\W$/,
    wordChars: "-_"
  }
}), pi = /* @__PURE__ */ VO.configure({
  wrap: /* @__PURE__ */ OO(MO, zO)
});
function zo(i = {}) {
  let e = "", t;
  i.matchClosingTags === !1 && (e = "noMatch"), i.selfClosingTags === !0 && (e = (e ? e + " " : "") + "selfClosing"), (i.nestedLanguages && i.nestedLanguages.length || i.nestedAttributes && i.nestedAttributes.length) && (t = OO((i.nestedLanguages || []).concat(MO), (i.nestedAttributes || []).concat(zO)));
  let n = t ? VO.configure({ wrap: t, dialect: e }) : e ? pi.configure({ dialect: e }) : pi;
  return new ul(n, [
    pi.data.of({ autocomplete: H1(i) }),
    i.autoCloseTags !== !1 ? J1 : [],
    D1().support,
    Xo().support
  ]);
}
const Nh = /* @__PURE__ */ new Set(/* @__PURE__ */ "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")), J1 = /* @__PURE__ */ T.inputHandler.of((i, e, t, n, r) => {
  if (i.composing || i.state.readOnly || e != t || n != ">" && n != "/" || !pi.isActiveAt(i.state, e, -1))
    return !1;
  let s = r(), { state: o } = s, l = o.changeByRange((a) => {
    var h, c, u;
    let f = o.doc.sliceString(a.from - 1, a.to) == n, { head: O } = a, d = K(o).resolveInner(O, -1), p;
    if (f && n == ">" && d.name == "EndTag") {
      let g = d.parent;
      if (((c = (h = g.parent) === null || h === void 0 ? void 0 : h.lastChild) === null || c === void 0 ? void 0 : c.name) != "CloseTag" && (p = Ti(o.doc, g.parent, O)) && !Nh.has(p)) {
        let b = O + (o.doc.sliceString(O, O + 1) === ">" ? 1 : 0), Q = `</${p}>`;
        return { range: a, changes: { from: O, to: b, insert: Q } };
      }
    } else if (f && n == "/" && d.name == "IncompleteCloseTag") {
      let g = d.parent;
      if (d.from == O - 2 && ((u = g.lastChild) === null || u === void 0 ? void 0 : u.name) != "CloseTag" && (p = Ti(o.doc, g, O)) && !Nh.has(p)) {
        let b = O + (o.doc.sliceString(O, O + 1) === ">" ? 1 : 0), Q = `${p}>`;
        return {
          range: y.cursor(O + Q.length, -1),
          changes: { from: O, to: b, insert: Q }
        };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (i.dispatch([
    s,
    o.update(l, {
      userEvent: "input.complete",
      scrollIntoView: !0
    })
  ]), !0);
});
var eS = Object.defineProperty, tS = Object.defineProperties, iS = Object.getOwnPropertyDescriptors, Gh = Object.getOwnPropertySymbols, nS = Object.prototype.hasOwnProperty, rS = Object.prototype.propertyIsEnumerable, Vo = (i, e, t) => e in i ? eS(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Ie = (i, e) => {
  for (var t in e || (e = {}))
    nS.call(e, t) && Vo(i, t, e[t]);
  if (Gh)
    for (var t of Gh(e))
      rS.call(e, t) && Vo(i, t, e[t]);
  return i;
}, Et = (i, e) => tS(i, iS(e)), _o = (i, e, t) => Vo(i, typeof e != "symbol" ? e + "" : e, t);
function Ge(i) {
  return i > 47 && i < 58;
}
function Ur(i, e, t) {
  return e = e || 65, t = t || 90, i &= -33, i >= e && i <= t;
}
function _O(i) {
  return Ge(i) || Fr(i);
}
function Fr(i) {
  return i === 95 || Ur(i);
}
function sS(i) {
  return i === 196 || i == 214 || i === 220 || i === 228 || i === 246 || i === 252;
}
function oS(i) {
  return i === 32 || i === 9 || i === 160;
}
function Al(i) {
  return oS(i) || i === 10 || i === 13;
}
function Xl(i) {
  return i === 39 || i === 34;
}
let qO = class YO {
  constructor(e, t, n) {
    n == null && typeof e == "string" && (n = e.length), this.string = e, this.pos = this.start = t || 0, this.end = n || 0;
  }
  /**
   * Returns true only if the stream is at the end of the file.
   */
  eof() {
    return this.pos >= this.end;
  }
  /**
   * Creates a new stream instance which is limited to given `start` and `end`
   * range. E.g. its `eof()` method will look at `end` property, not actual
   * stream end
   */
  limit(e, t) {
    return new YO(this.string, e, t);
  }
  /**
   * Returns the next character code in the stream without advancing it.
   * Will return NaN at the end of the file.
   */
  peek() {
    return this.string.charCodeAt(this.pos);
  }
  /**
   * Returns the next character in the stream and advances it.
   * Also returns <code>undefined</code> when no more characters are available.
   */
  next() {
    if (this.pos < this.string.length)
      return this.string.charCodeAt(this.pos++);
  }
  /**
   * `match` can be a character code or a function that takes a character code
   * and returns a boolean. If the next character in the stream 'matches'
   * the given argument, it is consumed and returned.
   * Otherwise, `false` is returned.
   */
  eat(e) {
    const t = this.peek(), n = typeof e == "function" ? e(t) : t === e;
    return n && this.next(), n;
  }
  /**
   * Repeatedly calls <code>eat</code> with the given argument, until it
   * fails. Returns <code>true</code> if any characters were eaten.
   */
  eatWhile(e) {
    const t = this.pos;
    for (; !this.eof() && this.eat(e); )
      ;
    return this.pos !== t;
  }
  /**
   * Backs up the stream n characters. Backing it up further than the
   * start of the current token will cause things to break, so be careful.
   */
  backUp(e) {
    this.pos -= e || 1;
  }
  /**
   * Get the string between the start of the current token and the
   * current stream position.
   */
  current() {
    return this.substring(this.start, this.pos);
  }
  /**
   * Returns substring for given range
   */
  substring(e, t) {
    return this.string.slice(e, t);
  }
  /**
   * Creates error object with current stream state
   */
  error(e, t = this.pos) {
    return new Rl(`${e} at ${t + 1}`, t, this.string);
  }
}, Rl = class extends Error {
  constructor(e, t, n) {
    super(e), this.pos = t, this.string = n;
  }
};
function lS(i) {
  return {
    tokens: i,
    start: 0,
    pos: 0,
    size: i.length
  };
}
function Wt(i) {
  return i.tokens[i.pos];
}
function Ml(i) {
  return i.tokens[i.pos++];
}
function mi(i, e = i.start, t = i.pos) {
  return i.tokens.slice(e, t);
}
function Qt(i) {
  return i.pos < i.size;
}
function ce(i, e) {
  const t = Wt(i);
  return t && e(t) ? (i.pos++, !0) : !1;
}
function zl(i, e, t = Wt(i)) {
  t && t.start != null && (e += ` at ${t.start}`);
  const n = new Error(e);
  return n.pos = t && t.start, n;
}
function aS(i, e = {}) {
  const t = lS(i), n = EO(t, e);
  if (Qt(t))
    throw zl(t, "Unexpected character");
  return n;
}
function EO(i, e) {
  const t = {
    type: "TokenGroup",
    elements: []
  };
  let n = t, r;
  const s = [];
  for (; Qt(i) && (r = cS(i, e) || hS(i, e)); )
    if (n.elements.push(r), ce(i, $S))
      s.push(n), n = r;
    else {
      if (ce(i, vS))
        continue;
      if (ce(i, Kh))
        do
          s.length && (n = s.pop());
        while (ce(i, Kh));
    }
  return t;
}
function hS(i, e) {
  if (ce(i, xS)) {
    const t = EO(i, e), n = Ml(i);
    return Ee(n, "group", !1) && (t.repeat = OS(i)), t;
  }
}
function cS(i, e) {
  let t;
  const n = {
    type: "TokenElement",
    name: void 0,
    attributes: void 0,
    value: void 0,
    repeat: void 0,
    selfClose: !1,
    elements: []
  };
  for (dS(i, e) && (n.name = mi(i)); Qt(i); )
    if (i.start = i.pos, !n.repeat && !Vs(n) && ce(i, Zr))
      n.repeat = i.tokens[i.pos - 1];
    else if (!n.value && WO(i))
      n.value = DO(i);
    else if (t = Uh(i, "id", e) || Uh(i, "class", e) || uS(i))
      n.attributes ? n.attributes = n.attributes.concat(t) : n.attributes = Array.isArray(t) ? t.slice() : [t];
    else {
      !Vs(n) && ce(i, kS) && (n.selfClose = !0, !n.repeat && ce(i, Zr) && (n.repeat = i.tokens[i.pos - 1]));
      break;
    }
  return Vs(n) ? void 0 : n;
}
function uS(i) {
  if (ce(i, yS)) {
    const e = [];
    let t;
    for (; Qt(i); )
      if (t = fS(i))
        e.push(t);
      else {
        if (ce(i, QS))
          break;
        if (!ce(i, LO))
          throw zl(i, `Unexpected "${Wt(i).type}" token`);
      }
    return e;
  }
}
function Uh(i, e, t) {
  if (St(Wt(i), e)) {
    i.pos++;
    let n = 1;
    for (; St(Wt(i), e); )
      i.pos++, n++;
    const r = {
      name: [wS(e)]
    };
    return n > 1 && (r.multiple = !0), t.jsx && WO(i) ? (r.value = DO(i), r.expression = !0) : r.value = qo(i) ? mi(i) : void 0, r;
  }
}
function fS(i) {
  if (Fh(i))
    return {
      value: mi(i)
    };
  if (qo(i, !0)) {
    const e = mi(i);
    let t;
    return ce(i, pS) && (Fh(i) || qo(i, !0)) && (t = mi(i)), { name: e, value: t };
  }
}
function OS(i) {
  return Zr(Wt(i)) ? i.tokens[i.pos++] : void 0;
}
function Fh(i) {
  const e = i.pos, t = Wt(i);
  if (Tr(t)) {
    for (i.pos++; Qt(i); )
      if (Tr(Ml(i), t.single))
        return i.start = e, !0;
    throw zl(i, "Unclosed quote", t);
  }
  return !1;
}
function qo(i, e) {
  const t = i.pos, n = {
    attribute: 0,
    expression: 0,
    group: 0
  };
  for (; Qt(i); ) {
    const r = Wt(i);
    if (n.expression)
      Ee(r, "expression") && (n[r.context] += r.open ? 1 : -1);
    else {
      if (Tr(r) || St(r) || LO(r) || Zr(r))
        break;
      if (Ee(r)) {
        if (!e)
          break;
        if (r.open)
          n[r.context]++;
        else if (n[r.context])
          n[r.context]--;
        else
          break;
      }
    }
    i.pos++;
  }
  return t !== i.pos ? (i.start = t, !0) : !1;
}
function dS(i, e) {
  const t = i.pos;
  if (e.jsx && ce(i, Hh))
    for (; Qt(i); ) {
      const { pos: n } = i;
      if (!ce(i, bS) || !ce(i, Hh)) {
        i.pos = n;
        break;
      }
    }
  for (; Qt(i) && ce(i, gS); )
    ;
  return i.pos !== t ? (i.start = t, !0) : !1;
}
function WO(i) {
  const e = i.pos;
  if (ce(i, SS)) {
    let t = 0;
    for (; Qt(i); ) {
      const n = Ml(i);
      if (Ee(n, "expression"))
        if (n.open)
          t++;
        else if (t)
          t--;
        else
          break;
    }
    return i.start = e, !0;
  }
  return !1;
}
function DO(i) {
  let e = i.start, t = i.pos;
  return Ee(i.tokens[e], "expression", !0) && e++, Ee(i.tokens[t - 1], "expression", !1) && t--, mi(i, e, t);
}
function Ee(i, e, t) {
  return !!(i && i.type === "Bracket" && (!e || i.context === e) && (t == null || i.open === t));
}
function St(i, e) {
  return !!(i && i.type === "Operator" && (!e || i.operator === e));
}
function Tr(i, e) {
  return !!(i && i.type === "Quote" && (e == null || i.single === e));
}
function LO(i) {
  return !!(i && i.type === "WhiteSpace");
}
function pS(i) {
  return St(i, "equal");
}
function Zr(i) {
  return !!(i && i.type === "Repeater");
}
function mS(i) {
  return i.type === "Literal";
}
function Hh(i) {
  if (mS(i)) {
    const e = i.value.charCodeAt(0);
    return e >= 65 && e <= 90;
  }
  return !1;
}
function gS(i) {
  return i.type === "Literal" || i.type === "RepeaterNumber" || i.type === "RepeaterPlaceholder";
}
function bS(i) {
  return St(i, "class");
}
function yS(i) {
  return Ee(i, "attribute", !0);
}
function QS(i) {
  return Ee(i, "attribute", !1);
}
function SS(i) {
  return Ee(i, "expression", !0);
}
function xS(i) {
  return Ee(i, "group", !0);
}
function wS(i) {
  return { type: "Literal", value: i };
}
function Vs(i) {
  return !i.name && !i.value && !i.attributes;
}
function $S(i) {
  return St(i, "child");
}
function vS(i) {
  return St(i, "sibling");
}
function Kh(i) {
  return St(i, "climb");
}
function kS(i) {
  return St(i, "close");
}
var X;
(function(i) {
  i[i.CurlyBracketOpen = 123] = "CurlyBracketOpen", i[i.CurlyBracketClose = 125] = "CurlyBracketClose", i[i.Escape = 92] = "Escape", i[i.Equals = 61] = "Equals", i[i.SquareBracketOpen = 91] = "SquareBracketOpen", i[i.SquareBracketClose = 93] = "SquareBracketClose", i[i.Asterisk = 42] = "Asterisk", i[i.Hash = 35] = "Hash", i[i.Dollar = 36] = "Dollar", i[i.Dash = 45] = "Dash", i[i.Dot = 46] = "Dot", i[i.Slash = 47] = "Slash", i[i.Colon = 58] = "Colon", i[i.Excl = 33] = "Excl", i[i.At = 64] = "At", i[i.Underscore = 95] = "Underscore", i[i.RoundBracketOpen = 40] = "RoundBracketOpen", i[i.RoundBracketClose = 41] = "RoundBracketClose", i[i.Sibling = 43] = "Sibling", i[i.Child = 62] = "Child", i[i.Climb = 94] = "Climb", i[i.SingleQuote = 39] = "SingleQuote", i[i.DoubleQuote = 34] = "DoubleQuote";
})(X || (X = {}));
function PS(i) {
  return i.eat(X.Escape) ? (i.start = i.pos, i.eof() || i.pos++, !0) : !1;
}
function TS(i) {
  const e = new qO(i), t = [], n = {
    group: 0,
    attribute: 0,
    expression: 0,
    quote: 0
  };
  let r = 0, s;
  for (; !e.eof(); )
    if (r = e.peek(), s = ZS(e, n), s)
      t.push(s), s.type === "Quote" ? n.quote = r === n.quote ? 0 : r : s.type === "Bracket" && (n[s.context] += s.open ? 1 : -1);
    else
      throw e.error("Unexpected character");
  return t;
}
function ZS(i, e) {
  return qS(i, e) || VS(i) || _S(i) || zS(i) || AS(i) || CS(i, e) || MS(i) || XS(i) || RS(i);
}
function CS(i, e) {
  const t = i.pos, n = e.expression;
  let r = "";
  for (; !i.eof(); ) {
    if (PS(i)) {
      r += i.current();
      continue;
    }
    const s = i.peek();
    if (s === X.Slash && !e.quote && !e.expression && !e.attribute) {
      const o = i.string.charCodeAt(i.pos - 1), l = i.string.charCodeAt(i.pos + 1);
      if (Ge(o) && Ge(l)) {
        r += i.string[i.pos++];
        continue;
      }
    }
    if (s === e.quote || s === X.Dollar || YS(s, e))
      break;
    if (n) {
      if (s === X.CurlyBracketOpen)
        e.expression++;
      else if (s === X.CurlyBracketClose)
        if (e.expression > n)
          e.expression--;
        else
          break;
    } else if (!e.quote && (!e.attribute && !LS(s) || ES(s, e) || WS(s, e) || Xl(s) || BO(s)))
      break;
    r += i.string[i.pos++];
  }
  if (t !== i.pos)
    return i.start = t, {
      type: "Literal",
      value: r,
      start: t,
      end: i.pos
    };
}
function AS(i) {
  const e = i.pos;
  if (i.eatWhile(Al))
    return {
      type: "WhiteSpace",
      start: e,
      end: i.pos,
      value: i.substring(e, i.pos)
    };
}
function XS(i) {
  const e = i.peek();
  if (Xl(e))
    return {
      type: "Quote",
      single: e === X.SingleQuote,
      start: i.pos++,
      end: i.pos
    };
}
function RS(i) {
  const e = i.peek(), t = BO(e);
  if (t)
    return {
      type: "Bracket",
      open: DS(e),
      context: t,
      start: i.pos++,
      end: i.pos
    };
}
function MS(i) {
  const e = jO(i.peek());
  if (e)
    return {
      type: "Operator",
      operator: e,
      start: i.pos++,
      end: i.pos
    };
}
function zS(i) {
  const e = i.pos;
  if (i.eat(X.Asterisk)) {
    i.start = i.pos;
    let t = 1, n = !1;
    return i.eatWhile(Ge) ? t = Number(i.current()) : n = !0, {
      type: "Repeater",
      count: t,
      value: 0,
      implicit: n,
      start: e,
      end: i.pos
    };
  }
}
function VS(i) {
  const e = i.pos;
  if (i.eat(X.Dollar) && i.eat(X.Hash))
    return {
      type: "RepeaterPlaceholder",
      value: void 0,
      start: e,
      end: i.pos
    };
  i.pos = e;
}
function _S(i) {
  const e = i.pos;
  if (i.eatWhile(X.Dollar)) {
    const t = i.pos - e;
    let n = !1, r = 1, s = 0;
    if (i.eat(X.At)) {
      for (; i.eat(X.Climb); )
        s++;
      n = i.eat(X.Dash), i.start = i.pos, i.eatWhile(Ge) && (r = Number(i.current()));
    }
    return i.start = e, {
      type: "RepeaterNumber",
      size: t,
      reverse: n,
      base: r,
      parent: s,
      start: e,
      end: i.pos
    };
  }
}
function qS(i, e) {
  const t = i.pos;
  if ((e.expression || e.attribute) && i.eat(X.Dollar) && i.eat(X.CurlyBracketOpen)) {
    i.start = i.pos;
    let n, r = "";
    if (i.eatWhile(Ge) ? (n = Number(i.current()), r = i.eat(X.Colon) ? Jh(i) : "") : Ur(i.peek()) && (r = Jh(i)), i.eat(X.CurlyBracketClose))
      return {
        type: "Field",
        index: n,
        name: r,
        start: t,
        end: i.pos
      };
    throw i.error("Expecting }");
  }
  i.pos = t;
}
function Jh(i) {
  const e = [];
  for (i.start = i.pos; !i.eof(); )
    if (i.eat(X.CurlyBracketOpen))
      e.push(i.pos);
    else if (i.eat(X.CurlyBracketClose)) {
      if (!e.length) {
        i.pos--;
        break;
      }
      e.pop();
    } else
      i.pos++;
  if (e.length)
    throw i.pos = e.pop(), i.error("Expecting }");
  return i.current();
}
function YS(i, e) {
  const t = jO(i);
  return !t || e.quote || e.expression ? !1 : !e.attribute || t === "equal";
}
function ES(i, e) {
  return Al(i) && !e.expression;
}
function WS(i, e) {
  return i === X.Asterisk && !e.attribute && !e.expression;
}
function BO(i) {
  if (i === X.RoundBracketOpen || i === X.RoundBracketClose)
    return "group";
  if (i === X.SquareBracketOpen || i === X.SquareBracketClose)
    return "attribute";
  if (i === X.CurlyBracketOpen || i === X.CurlyBracketClose)
    return "expression";
}
function jO(i) {
  return i === X.Child && "child" || i === X.Sibling && "sibling" || i === X.Climb && "climb" || i === X.Dot && "class" || i === X.Hash && "id" || i === X.Slash && "close" || i === X.Equals && "equal" || void 0;
}
function DS(i) {
  return i === X.CurlyBracketOpen || i === X.SquareBracketOpen || i === X.RoundBracketOpen;
}
function LS(i) {
  return _O(i) || sS(i) || i === X.Dash || i === X.Colon || i === X.Excl;
}
const BS = {
  child: ">",
  class: ".",
  climb: "^",
  id: "#",
  equal: "=",
  close: "/",
  sibling: "+"
}, ec = {
  Literal(i) {
    return i.value;
  },
  Quote(i) {
    return i.single ? "'" : '"';
  },
  Bracket(i) {
    return i.context === "attribute" ? i.open ? "[" : "]" : i.context === "expression" ? i.open ? "{" : "}" : i.open ? "(" : "}";
  },
  Operator(i) {
    return BS[i.operator];
  },
  Field(i, e) {
    return i.index != null ? i.name ? `\${${i.index}:${i.name}}` : `\${${i.index}` : i.name ? e.getVariable(i.name) : "";
  },
  RepeaterPlaceholder(i, e) {
    let t;
    for (let n = e.repeaters.length - 1; n >= 0; n--)
      if (e.repeaters[n].implicit) {
        t = e.repeaters[n];
        break;
      }
    return e.inserted = !0, e.getText(t && t.value);
  },
  RepeaterNumber(i, e) {
    let t = 1;
    const n = e.repeaters.length - 1, r = e.repeaters[n];
    if (r && (t = i.reverse ? i.base + r.count - r.value - 1 : i.base + r.value, i.parent)) {
      const o = Math.max(0, n - i.parent);
      if (o !== n) {
        const l = e.repeaters[o];
        t += r.count * l.value;
      }
    }
    let s = String(t);
    for (; s.length < i.size; )
      s = "0" + s;
    return s;
  },
  WhiteSpace(i) {
    return i.value;
  }
};
function IO(i, e) {
  if (!ec[i.type])
    throw new Error(`Unknown token ${i.type}`);
  return ec[i.type](i, e);
}
const jS = /^((https?:|ftp:|file:)?\/\/|(www|ftp)\.)[^ ]*$/, IS = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
function NS(i, e = {}) {
  let t = !1, n;
  e.text && (Array.isArray(e.text) ? n = e.text.filter((s) => s.trim()) : n = e.text);
  const r = {
    type: "Abbreviation",
    children: Yo(i, {
      inserted: !1,
      repeaters: [],
      text: e.text,
      cleanText: n,
      repeatGuard: e.maxRepeat || Number.POSITIVE_INFINITY,
      getText(s) {
        var o;
        t = !0;
        let l;
        if (Array.isArray(e.text)) {
          if (s !== void 0 && s >= 0 && s < n.length)
            return n[s];
          l = s !== void 0 ? e.text[s] : e.text.join(`
`);
        } else
          l = (o = e.text) !== null && o !== void 0 ? o : "";
        return l;
      },
      getVariable(s) {
        const o = e.variables && e.variables[s];
        return o ?? s;
      }
    })
  };
  if (e.text != null && !t) {
    const s = Vl(Ci(r.children));
    if (s) {
      const o = Array.isArray(e.text) ? e.text.join(`
`) : e.text;
      HO(s, o), s.name === "a" && e.href && US(s, o);
    }
  }
  return r;
}
function NO(i, e) {
  let t = [];
  if (i.repeat) {
    const n = i.repeat, r = Object.assign({}, n);
    r.count = r.implicit && Array.isArray(e.text) ? e.cleanText.length : r.count || 1;
    let s;
    e.repeaters.push(r);
    for (let o = 0; o < r.count; o++) {
      if (r.value = o, i.repeat = r, s = ic(i) ? Yo(i, e) : tc(i, e), r.implicit && !e.inserted) {
        const l = Ci(s), a = l && Vl(l);
        a && HO(a, e.getText(r.value));
      }
      if (t = t.concat(s), --e.repeatGuard <= 0)
        break;
    }
    e.repeaters.pop(), i.repeat = n, r.implicit && (e.inserted = !0);
  } else
    t = t.concat(ic(i) ? Yo(i, e) : tc(i, e));
  return t;
}
function tc(i, e) {
  let t = [];
  const n = {
    type: "AbbreviationNode",
    name: i.name && GO(i.name, e),
    value: i.value && UO(i.value, e),
    attributes: void 0,
    children: t,
    repeat: i.repeat && Object.assign({}, i.repeat),
    selfClosing: i.selfClose
  };
  let r = [n];
  for (const s of i.elements)
    t = t.concat(NO(s, e));
  if (i.attributes) {
    n.attributes = [];
    for (const s of i.attributes)
      n.attributes.push(GS(s, e));
  }
  return !n.name && !n.attributes && n.value && !n.value.some(FO) ? r = r.concat(t) : n.children = t, r;
}
function Yo(i, e) {
  let t = [];
  for (const n of i.elements)
    t = t.concat(NO(n, e));
  return i.repeat && (t = FS(t, i.repeat)), t;
}
function GS(i, e) {
  let t = !1, n = !1, r = i.expression ? "expression" : "raw", s;
  const o = i.name && GO(i.name, e);
  if (o && o[0] === "!" && (t = !0), o && o[o.length - 1] === "." && (n = !0), i.value) {
    const l = i.value.slice();
    if (Tr(l[0])) {
      const a = l.shift();
      l.length && Ci(l).type === a.type && l.pop(), r = a.single ? "singleQuote" : "doubleQuote";
    } else Ee(l[0], "expression", !0) && (r = "expression", l.shift(), Ee(Ci(l), "expression", !1) && l.pop());
    s = UO(l, e);
  }
  return {
    name: n || t ? o.slice(t ? 1 : 0, n ? -1 : void 0) : o,
    value: s,
    boolean: n,
    implied: t,
    valueType: r,
    multiple: i.multiple
  };
}
function GO(i, e) {
  let t = "";
  for (let n = 0; n < i.length; n++)
    t += IO(i[n], e);
  return t;
}
function UO(i, e) {
  const t = [];
  let n = "";
  for (let r = 0, s; r < i.length; r++)
    s = i[r], FO(s) ? (n && (t.push(n), n = ""), t.push(s)) : n += IO(s, e);
  return n && t.push(n), t;
}
function ic(i) {
  return i.type === "TokenGroup";
}
function FO(i) {
  return typeof i == "object" && i.type === "Field" && i.index != null;
}
function Ci(i) {
  return i[i.length - 1];
}
function Vl(i) {
  return i.children.length ? Vl(Ci(i.children)) : i;
}
function HO(i, e) {
  i.value ? typeof Ci(i.value) == "string" ? i.value[i.value.length - 1] += e : i.value.push(e) : i.value = [e];
}
function US(i, e) {
  var t;
  let n = "";
  jS.test(e) ? (n = e, !/\w+:/.test(n) && !n.startsWith("//") && (n = `http://${n}`)) : IS.test(e) && (n = `mailto:${e}`);
  const r = (t = i.attributes) === null || t === void 0 ? void 0 : t.find((s) => s.name === "href");
  r ? r.value || (r.value = [n]) : (i.attributes || (i.attributes = []), i.attributes.push({ name: "href", value: [n], valueType: "doubleQuote" }));
}
function FS(i, e) {
  for (const t of i)
    t.repeat || (t.repeat = Object.assign({}, e));
  return i;
}
function _l(i, e) {
  try {
    const t = typeof i == "string" ? TS(i) : i;
    return NS(aS(t, e), e);
  } catch (t) {
    throw t instanceof Rl && typeof i == "string" && (t.message += `
${i}
${"-".repeat(t.pos)}^`), t;
  }
}
var Xe;
(function(i) {
  i.Sibling = "+", i.Important = "!", i.ArgumentDelimiter = ",", i.ValueDelimiter = "-", i.PropertyDelimiter = ":";
})(Xe || (Xe = {}));
var W;
(function(i) {
  i[i.Hash = 35] = "Hash", i[i.Dollar = 36] = "Dollar", i[i.Dash = 45] = "Dash", i[i.Dot = 46] = "Dot", i[i.Colon = 58] = "Colon", i[i.Comma = 44] = "Comma", i[i.Excl = 33] = "Excl", i[i.At = 64] = "At", i[i.Percent = 37] = "Percent", i[i.Underscore = 95] = "Underscore", i[i.RoundBracketOpen = 40] = "RoundBracketOpen", i[i.RoundBracketClose = 41] = "RoundBracketClose", i[i.CurlyBracketOpen = 123] = "CurlyBracketOpen", i[i.CurlyBracketClose = 125] = "CurlyBracketClose", i[i.Sibling = 43] = "Sibling", i[i.SingleQuote = 39] = "SingleQuote", i[i.DoubleQuote = 34] = "DoubleQuote", i[i.Transparent = 116] = "Transparent", i[i.Slash = 47] = "Slash";
})(W || (W = {}));
function HS(i, e) {
  let t = 0, n;
  const r = new qO(i), s = [];
  for (; !r.eof(); ) {
    if (n = KS(r, t === 0 && !e), !n)
      throw r.error("Unexpected character");
    if (n.type === "Bracket" && (!t && n.open && dx(r, s), t += n.open ? 1 : -1, t < 0))
      throw r.error("Unexpected bracket", n.start);
    s.push(n), Ox(n) && (n = KO(r)) && s.push(n);
  }
  return s;
}
function KS(i, e) {
  return JS(i) || sx(i) || tx(i) || nx(i) || ix(i) || ox(i) || KO(i) || rx(i) || ex(i, e);
}
function JS(i) {
  const e = i.pos;
  if (i.eat(W.Dollar) && i.eat(W.CurlyBracketOpen)) {
    i.start = i.pos;
    let t, n = "";
    if (i.eatWhile(Ge) ? (t = Number(i.current()), n = i.eat(W.Colon) ? nc(i) : "") : Ur(i.peek()) && (n = nc(i)), i.eat(W.CurlyBracketClose))
      return {
        type: "Field",
        index: t,
        name: n,
        start: e,
        end: i.pos
      };
    throw i.error("Expecting }");
  }
  i.pos = e;
}
function nc(i) {
  const e = [];
  for (i.start = i.pos; !i.eof(); )
    if (i.eat(W.CurlyBracketOpen))
      e.push(i.pos);
    else if (i.eat(W.CurlyBracketClose)) {
      if (!e.length) {
        i.pos--;
        break;
      }
      e.pop();
    } else
      i.pos++;
  if (e.length)
    throw i.pos = e.pop(), i.error("Expecting }");
  return i.current();
}
function ex(i, e) {
  const t = i.pos;
  if (i.eat(ax) ? i.eatWhile(t ? Eo : qs) : i.eat(Fr) ? i.eatWhile(e ? qs : Eo) : (i.eat(W.Dot), i.eatWhile(qs)), t !== i.pos)
    return i.start = t, ql(i, i.start = t);
}
function ql(i, e = i.start, t = i.pos) {
  return {
    type: "Literal",
    value: i.substring(e, t),
    start: e,
    end: t
  };
}
function tx(i) {
  const e = i.pos;
  if (lx(i)) {
    i.start = e;
    const t = i.current();
    return i.start = i.pos, i.eat(W.Percent) || i.eatWhile(Fr), {
      type: "NumberValue",
      value: Number(t),
      rawValue: t,
      unit: i.current(),
      start: e,
      end: i.pos
    };
  }
}
function ix(i) {
  const e = i.peek(), t = i.pos;
  let n = !1;
  if (Xl(e)) {
    for (i.pos++; !i.eof(); )
      if (i.eat(e)) {
        n = !0;
        break;
      } else
        i.pos++;
    return i.start = t, {
      type: "StringValue",
      value: i.substring(t + 1, i.pos - (n ? 1 : 0)),
      quote: e === W.SingleQuote ? "single" : "double",
      start: t,
      end: i.pos
    };
  }
}
function nx(i) {
  const e = i.pos;
  if (i.eat(W.Hash)) {
    const t = i.pos;
    let n = "", r = "";
    if (i.eatWhile(cx) ? (n = i.substring(t, i.pos), r = _s(i)) : i.eat(W.Transparent) ? (n = "0", r = _s(i) || "0") : r = _s(i), n || r || i.eof()) {
      const { r: s, g: o, b: l, a } = fx(n, r);
      return {
        type: "ColorValue",
        r: s,
        g: o,
        b: l,
        a,
        raw: i.substring(e + 1, i.pos),
        start: e,
        end: i.pos
      };
    } else
      return ql(i, e);
  }
  i.pos = e;
}
function _s(i) {
  const e = i.pos;
  return i.eat(W.Dot) ? (i.start = e, i.eatWhile(Ge) ? i.current() : "1") : "";
}
function rx(i) {
  const e = i.pos;
  if (i.eatWhile(Al))
    return {
      type: "WhiteSpace",
      start: e,
      end: i.pos
    };
}
function sx(i) {
  const e = i.pos;
  if (i.eat(W.Dash) && i.eat(W.Dash))
    return i.start = e, i.eatWhile(Eo), {
      type: "CustomProperty",
      value: i.current(),
      start: e,
      end: i.pos
    };
  i.pos = e;
}
function ox(i) {
  const e = i.peek();
  if (ux(e))
    return {
      type: "Bracket",
      open: e === W.RoundBracketOpen,
      start: i.pos++,
      end: i.pos
    };
}
function KO(i) {
  const e = hx(i.peek());
  if (e)
    return {
      type: "Operator",
      operator: e,
      start: i.pos++,
      end: i.pos
    };
}
function lx(i) {
  const e = i.pos;
  i.eat(W.Dash);
  const t = i.pos, n = i.eatWhile(Ge), r = i.pos;
  if (i.eat(W.Dot)) {
    const s = i.eatWhile(Ge);
    !n && !s && (i.pos = r);
  }
  return i.pos === t && (i.pos = e), i.pos !== e;
}
function ax(i) {
  return i === W.At || i === W.Dollar;
}
function hx(i) {
  return i === W.Sibling && Xe.Sibling || i === W.Excl && Xe.Important || i === W.Comma && Xe.ArgumentDelimiter || i === W.Colon && Xe.PropertyDelimiter || i === W.Dash && Xe.ValueDelimiter || void 0;
}
function cx(i) {
  return Ge(i) || Ur(i, 65, 70);
}
function Eo(i) {
  return _O(i) || i === W.Dash;
}
function ux(i) {
  return i === W.RoundBracketOpen || i === W.RoundBracketClose;
}
function qs(i) {
  return Fr(i) || i === W.Percent || i === W.Slash;
}
function fx(i, e) {
  let t = "0", n = "0", r = "0", s = Number(e != null && e !== "" ? e : 1);
  if (i === "t")
    s = 0;
  else
    switch (i.length) {
      case 0:
        break;
      case 1:
        t = n = r = i + i;
        break;
      case 2:
        t = n = r = i;
        break;
      case 3:
        t = i[0] + i[0], n = i[1] + i[1], r = i[2] + i[2];
        break;
      default:
        i += i, t = i.slice(0, 2), n = i.slice(2, 4), r = i.slice(4, 6);
    }
  return {
    r: parseInt(t, 16),
    g: parseInt(n, 16),
    b: parseInt(r, 16),
    a: s
  };
}
function Ox(i) {
  return i.type === "ColorValue" || i.type === "NumberValue" && !i.unit;
}
function dx(i, e) {
  let t = 0, n = 0;
  for (; e.length; ) {
    const r = px(e);
    if (r.type === "Literal" || r.type === "NumberValue")
      t = r.start, n || (n = r.end), e.pop();
    else
      break;
  }
  t !== n && e.push(ql(i, t, n));
}
function px(i) {
  return i[i.length - 1];
}
function mx(i) {
  return {
    tokens: i,
    start: 0,
    pos: 0,
    size: i.length
  };
}
function Hr(i) {
  return i.tokens[i.pos];
}
function Kr(i) {
  return i.pos < i.size;
}
function gt(i, e) {
  return e(Hr(i)) ? (i.pos++, !0) : !1;
}
function JO(i, e, t = Hr(i)) {
  t && t.start != null && (e += ` at ${t.start}`);
  const n = new Error(e);
  return n.pos = t && t.start, n;
}
function gx(i, e = {}) {
  const t = mx(i), n = [];
  let r;
  for (; Kr(t); )
    if (r = bx(t, e))
      n.push(r);
    else if (!gt(t, xx))
      throw JO(t, "Unexpected token");
  return n;
}
function bx(i, e) {
  let t, n = !1, r;
  const s = [], o = Hr(i), l = !!e.value;
  for (!l && Yl(o) && !kx(i) && (i.pos++, t = o.value, gt(i, nd)), l && gt(i, El); Kr(i); )
    if (gt(i, $x))
      n = !0;
    else if (r = ed(i, l))
      s.push(r);
    else if (!gt(i, wx))
      break;
  if (t || s.length || n)
    return { name: t, value: s, important: n };
}
function ed(i, e) {
  const t = [];
  let n, r;
  for (; Kr(i); )
    if (n = Hr(i), vx(n))
      i.pos++, Yl(n) && (r = yx(i)) ? t.push({
        type: "FunctionCall",
        name: n.value,
        arguments: r
      }) : t.push(n);
    else if (nd(n) || e && El(n))
      i.pos++;
    else
      break;
  return t.length ? { type: "CSSValue", value: t } : void 0;
}
function yx(i) {
  const e = i.pos;
  if (gt(i, Qx)) {
    const t = [];
    let n;
    for (; Kr(i) && !gt(i, Sx); )
      if (n = ed(i, !0))
        t.push(n);
      else if (!gt(i, El) && !gt(i, id))
        throw JO(i, "Unexpected token");
    return i.start = e, t;
  }
}
function Yl(i) {
  return i && i.type === "Literal";
}
function td(i, e) {
  return i && i.type === "Bracket" && (e == null || i.open === e);
}
function Qx(i) {
  return td(i, !0);
}
function Sx(i) {
  return td(i, !1);
}
function El(i) {
  return i && i.type === "WhiteSpace";
}
function un(i, e) {
  return i && i.type === "Operator" && (!e || i.operator === e);
}
function xx(i) {
  return un(i, Xe.Sibling);
}
function id(i) {
  return un(i, Xe.ArgumentDelimiter);
}
function wx(i) {
  return id(i);
}
function $x(i) {
  return un(i, Xe.Important);
}
function vx(i) {
  return i.type === "StringValue" || i.type === "ColorValue" || i.type === "NumberValue" || i.type === "Literal" || i.type === "Field" || i.type === "CustomProperty";
}
function nd(i) {
  return un(i, Xe.PropertyDelimiter) || un(i, Xe.ValueDelimiter);
}
function kx(i) {
  const e = i.tokens[i.pos], t = i.tokens[i.pos + 1];
  return e && t && Yl(e) && t.type === "Bracket";
}
function rd(i, e) {
  try {
    const t = typeof i == "string" ? HS(i, e && e.value) : i;
    return gx(t, e);
  } catch (t) {
    throw t instanceof Rl && typeof i == "string" && (t.message += `
${i}
${"-".repeat(t.pos)}^`), t;
  }
}
function Px(i, e) {
  if (!i.attributes)
    return;
  const t = [], n = {};
  for (const r of i.attributes)
    if (r.name) {
      const s = r.name;
      if (s in n) {
        const o = n[s];
        s === "class" ? o.value = Tx(o.value, r.value, " ") : Zx(o, r, e);
      } else
        t.push(n[s] = Object.assign({}, r));
    } else
      t.push(r);
  i.attributes = t;
}
function Tx(i, e, t) {
  if (i && e) {
    i.length && t && rc(i, t);
    for (const r of e)
      rc(i, r);
    return i;
  }
  const n = i || e;
  return n && n.slice();
}
function Zx(i, e, t) {
  return i.name = e.name, t.options["output.reverseAttributes"] || (i.value = e.value), i.implied || (i.implied = e.implied), i.boolean || (i.boolean = e.boolean), i.valueType !== "expression" && (i.valueType = e.valueType), i;
}
function rc(i, e) {
  const t = i.length - 1;
  typeof i[t] == "string" && typeof e == "string" ? i[t] += e : i.push(e);
}
function Cx(i, e, t) {
  const n = [i], r = (s) => {
    e(s, n, t), n.push(s), s.children.forEach(r), n.pop();
  };
  i.children.forEach(r);
}
function sd(i, e) {
  for (let t = 0; t < i.children.length; t++) {
    const n = i.children[t];
    if (e(n))
      return n;
    const r = sd(n, e);
    if (r)
      return r;
  }
}
function Ax(i) {
  let e;
  for (; i.children.length; )
    e = i, i = i.children[i.children.length - 1];
  return { parent: e, node: i };
}
function od(i) {
  return i.type === "AbbreviationNode";
}
function Xx(i, e) {
  const t = [], n = e.options["output.reverseAttributes"], { warn: r } = e, s = (o) => {
    const l = o.name && e.snippets[o.name];
    if (!l || t.includes(l))
      return null;
    let a;
    try {
      a = _l(l, e);
    } catch (h) {
      return r == null || r(`Unable to parse "${l}" snippet`, h), null;
    }
    t.push(l), Cr(a, s), t.pop();
    for (const h of a.children) {
      if (o.attributes) {
        const c = h.attributes || [], u = o.attributes || [];
        h.attributes = n ? u.concat(c) : c.concat(u);
      }
      Rx(o, h);
    }
    return a;
  };
  return Cr(i, s), i;
}
function Cr(i, e, t) {
  let n = [];
  for (const r of i.children) {
    const s = e(r);
    if (s) {
      n = n.concat(s.children);
      const o = Ax(s);
      od(o.node) && (o.node.children = o.node.children.concat(Cr(r, e)));
    } else
      n.push(r), r.children = Cr(r, e);
  }
  return i.children = n;
}
function Rx(i, e) {
  i.selfClosing && (e.selfClosing = !0), i.value != null && (e.value = i.value), i.repeat && (e.repeat = i.repeat);
}
const Wo = "{", Do = "}";
function ld(i, e = 0) {
  return {
    options: i,
    value: "",
    level: e,
    offset: 0,
    line: 0,
    column: 0
  };
}
function ie(i, e) {
  const t = i.options["output.text"];
  cd(i, t(e, i.offset, i.line, i.column));
}
function L(i, e) {
  const t = _x(e);
  for (let n = 0, r = t.length - 1; n <= r; n++)
    ie(i, t[n]), n !== r && nt(i, !0);
}
function nt(i, e) {
  const t = i.options["output.baseIndent"], n = i.options["output.newline"];
  ie(i, n + t), i.line++, i.column = t.length, e && Mx(i, e === !0 ? i.level : e);
}
function Mx(i, e = i.level) {
  const t = i.options["output.indent"];
  ie(i, t.repeat(Math.max(e, 0)));
}
function Wl(i, e, t) {
  const n = i.options["output.field"];
  cd(i, n(e, t, i.offset, i.line, i.column));
}
function zx(i, e) {
  return ud(i, e.options["output.tagCase"]);
}
function ad(i, e) {
  return ud(i, e.options["output.attributeCase"]);
}
function Ar(i, e, t) {
  return i.valueType === "expression" ? t ? Wo : Do : e.options["output.attributeQuotes"] === "single" ? "'" : '"';
}
function hd(i, e) {
  return i.boolean || e.options["output.booleanAttributes"].includes((i.name || "").toLowerCase());
}
function Vx(i) {
  switch (i.options["output.selfClosingStyle"]) {
    case "xhtml":
      return " /";
    case "xml":
      return "/";
    default:
      return "";
  }
}
function gi(i, e) {
  return typeof i == "string" ? e.options.inlineElements.includes(i.toLowerCase()) : i.name ? gi(i.name, e) : !!(i.value && !i.attributes);
}
function _x(i) {
  return i.split(/\r\n|\r|\n/g);
}
function cd(i, e) {
  i.value += e, i.offset += e.length, i.column += e.length;
}
function ud(i, e) {
  return e ? e === "upper" ? i.toUpperCase() : i.toLowerCase() : i;
}
const qx = {
  p: "span",
  ul: "li",
  ol: "li",
  table: "tr",
  tr: "td",
  tbody: "tr",
  thead: "tr",
  tfoot: "tr",
  colgroup: "col",
  select: "option",
  optgroup: "option",
  audio: "source",
  video: "source",
  object: "param",
  map: "area"
};
function Yx(i, e, t) {
  !i.name && i.attributes && fd(i, e, t);
}
function fd(i, e, t) {
  const n = Wx(e), r = t.context ? t.context.name : "", s = Ex(n ? n.name : r);
  i.name = qx[s] || (gi(s, t) ? "span" : "div");
}
function Ex(i) {
  return (i || "").toLowerCase();
}
function Wx(i) {
  for (let e = i.length - 1; e >= 0; e--) {
    const t = i[e];
    if (od(t))
      return t;
  }
}
var Dx = {
  common: ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"],
  words: [
    "exercitationem",
    "perferendis",
    "perspiciatis",
    "laborum",
    "eveniet",
    "sunt",
    "iure",
    "nam",
    "nobis",
    "eum",
    "cum",
    "officiis",
    "excepturi",
    "odio",
    "consectetur",
    "quasi",
    "aut",
    "quisquam",
    "vel",
    "eligendi",
    "itaque",
    "non",
    "odit",
    "tempore",
    "quaerat",
    "dignissimos",
    "facilis",
    "neque",
    "nihil",
    "expedita",
    "vitae",
    "vero",
    "ipsum",
    "nisi",
    "animi",
    "cumque",
    "pariatur",
    "velit",
    "modi",
    "natus",
    "iusto",
    "eaque",
    "sequi",
    "illo",
    "sed",
    "ex",
    "et",
    "voluptatibus",
    "tempora",
    "veritatis",
    "ratione",
    "assumenda",
    "incidunt",
    "nostrum",
    "placeat",
    "aliquid",
    "fuga",
    "provident",
    "praesentium",
    "rem",
    "necessitatibus",
    "suscipit",
    "adipisci",
    "quidem",
    "possimus",
    "voluptas",
    "debitis",
    "sint",
    "accusantium",
    "unde",
    "sapiente",
    "voluptate",
    "qui",
    "aspernatur",
    "laudantium",
    "soluta",
    "amet",
    "quo",
    "aliquam",
    "saepe",
    "culpa",
    "libero",
    "ipsa",
    "dicta",
    "reiciendis",
    "nesciunt",
    "doloribus",
    "autem",
    "impedit",
    "minima",
    "maiores",
    "repudiandae",
    "ipsam",
    "obcaecati",
    "ullam",
    "enim",
    "totam",
    "delectus",
    "ducimus",
    "quis",
    "voluptates",
    "dolores",
    "molestiae",
    "harum",
    "dolorem",
    "quia",
    "voluptatem",
    "molestias",
    "magni",
    "distinctio",
    "omnis",
    "illum",
    "dolorum",
    "voluptatum",
    "ea",
    "quas",
    "quam",
    "corporis",
    "quae",
    "blanditiis",
    "atque",
    "deserunt",
    "laboriosam",
    "earum",
    "consequuntur",
    "hic",
    "cupiditate",
    "quibusdam",
    "accusamus",
    "ut",
    "rerum",
    "error",
    "minus",
    "eius",
    "ab",
    "ad",
    "nemo",
    "fugit",
    "officia",
    "at",
    "in",
    "id",
    "quos",
    "reprehenderit",
    "numquam",
    "iste",
    "fugiat",
    "sit",
    "inventore",
    "beatae",
    "repellendus",
    "magnam",
    "recusandae",
    "quod",
    "explicabo",
    "doloremque",
    "aperiam",
    "consequatur",
    "asperiores",
    "commodi",
    "optio",
    "dolor",
    "labore",
    "temporibus",
    "repellat",
    "veniam",
    "architecto",
    "est",
    "esse",
    "mollitia",
    "nulla",
    "a",
    "similique",
    "eos",
    "alias",
    "dolore",
    "tenetur",
    "deleniti",
    "porro",
    "facere",
    "maxime",
    "corrupti"
  ]
}, Lx = {
  common: ["далеко-далеко", "за", "словесными", "горами", "в стране", "гласных", "и согласных", "живут", "рыбные", "тексты"],
  words: [
    "вдали",
    "от всех",
    "они",
    "буквенных",
    "домах",
    "на берегу",
    "семантика",
    "большого",
    "языкового",
    "океана",
    "маленький",
    "ручеек",
    "даль",
    "журчит",
    "по всей",
    "обеспечивает",
    "ее",
    "всеми",
    "необходимыми",
    "правилами",
    "эта",
    "парадигматическая",
    "страна",
    "которой",
    "жаренные",
    "предложения",
    "залетают",
    "прямо",
    "рот",
    "даже",
    "всемогущая",
    "пунктуация",
    "не",
    "имеет",
    "власти",
    "над",
    "рыбными",
    "текстами",
    "ведущими",
    "безорфографичный",
    "образ",
    "жизни",
    "однажды",
    "одна",
    "маленькая",
    "строчка",
    "рыбного",
    "текста",
    "имени",
    "lorem",
    "ipsum",
    "решила",
    "выйти",
    "большой",
    "мир",
    "грамматики",
    "великий",
    "оксмокс",
    "предупреждал",
    "о",
    "злых",
    "запятых",
    "диких",
    "знаках",
    "вопроса",
    "коварных",
    "точках",
    "запятой",
    "но",
    "текст",
    "дал",
    "сбить",
    "себя",
    "толку",
    "он",
    "собрал",
    "семь",
    "своих",
    "заглавных",
    "букв",
    "подпоясал",
    "инициал",
    "за",
    "пояс",
    "пустился",
    "дорогу",
    "взобравшись",
    "первую",
    "вершину",
    "курсивных",
    "гор",
    "бросил",
    "последний",
    "взгляд",
    "назад",
    "силуэт",
    "своего",
    "родного",
    "города",
    "буквоград",
    "заголовок",
    "деревни",
    "алфавит",
    "подзаголовок",
    "своего",
    "переулка",
    "грустный",
    "реторический",
    "вопрос",
    "скатился",
    "его",
    "щеке",
    "продолжил",
    "свой",
    "путь",
    "дороге",
    "встретил",
    "рукопись",
    "она",
    "предупредила",
    "моей",
    "все",
    "переписывается",
    "несколько",
    "раз",
    "единственное",
    "что",
    "меня",
    "осталось",
    "это",
    "приставка",
    "возвращайся",
    "ты",
    "лучше",
    "свою",
    "безопасную",
    "страну",
    "послушавшись",
    "рукописи",
    "наш",
    "продолжил",
    "свой",
    "путь",
    "вскоре",
    "ему",
    "повстречался",
    "коварный",
    "составитель",
    "рекламных",
    "текстов",
    "напоивший",
    "языком",
    "речью",
    "заманивший",
    "свое",
    "агентство",
    "которое",
    "использовало",
    "снова",
    "снова",
    "своих",
    "проектах",
    "если",
    "переписали",
    "то",
    "живет",
    "там",
    "до",
    "сих",
    "пор"
  ]
}, Bx = {
  common: ["mujer", "uno", "dolor", "más", "de", "poder", "mismo", "si"],
  words: [
    "ejercicio",
    "preferencia",
    "perspicacia",
    "laboral",
    "paño",
    "suntuoso",
    "molde",
    "namibia",
    "planeador",
    "mirar",
    "demás",
    "oficinista",
    "excepción",
    "odio",
    "consecuencia",
    "casi",
    "auto",
    "chicharra",
    "velo",
    "elixir",
    "ataque",
    "no",
    "odio",
    "temporal",
    "cuórum",
    "dignísimo",
    "facilismo",
    "letra",
    "nihilista",
    "expedición",
    "alma",
    "alveolar",
    "aparte",
    "león",
    "animal",
    "como",
    "paria",
    "belleza",
    "modo",
    "natividad",
    "justo",
    "ataque",
    "séquito",
    "pillo",
    "sed",
    "ex",
    "y",
    "voluminoso",
    "temporalidad",
    "verdades",
    "racional",
    "asunción",
    "incidente",
    "marejada",
    "placenta",
    "amanecer",
    "fuga",
    "previsor",
    "presentación",
    "lejos",
    "necesariamente",
    "sospechoso",
    "adiposidad",
    "quindío",
    "pócima",
    "voluble",
    "débito",
    "sintió",
    "accesorio",
    "falda",
    "sapiencia",
    "volutas",
    "queso",
    "permacultura",
    "laudo",
    "soluciones",
    "entero",
    "pan",
    "litro",
    "tonelada",
    "culpa",
    "libertario",
    "mosca",
    "dictado",
    "reincidente",
    "nascimiento",
    "dolor",
    "escolar",
    "impedimento",
    "mínima",
    "mayores",
    "repugnante",
    "dulce",
    "obcecado",
    "montaña",
    "enigma",
    "total",
    "deletéreo",
    "décima",
    "cábala",
    "fotografía",
    "dolores",
    "molesto",
    "olvido",
    "paciencia",
    "resiliencia",
    "voluntad",
    "molestias",
    "magnífico",
    "distinción",
    "ovni",
    "marejada",
    "cerro",
    "torre",
    "y",
    "abogada",
    "manantial",
    "corporal",
    "agua",
    "crepúsculo",
    "ataque",
    "desierto",
    "laboriosamente",
    "angustia",
    "afortunado",
    "alma",
    "encefalograma",
    "materialidad",
    "cosas",
    "o",
    "renuncia",
    "error",
    "menos",
    "conejo",
    "abadía",
    "analfabeto",
    "remo",
    "fugacidad",
    "oficio",
    "en",
    "almácigo",
    "vos",
    "pan",
    "represión",
    "números",
    "triste",
    "refugiado",
    "trote",
    "inventor",
    "corchea",
    "repelente",
    "magma",
    "recusado",
    "patrón",
    "explícito",
    "paloma",
    "síndrome",
    "inmune",
    "autoinmune",
    "comodidad",
    "ley",
    "vietnamita",
    "demonio",
    "tasmania",
    "repeler",
    "apéndice",
    "arquitecto",
    "columna",
    "yugo",
    "computador",
    "mula",
    "a",
    "propósito",
    "fantasía",
    "alias",
    "rayo",
    "tenedor",
    "deleznable",
    "ventana",
    "cara",
    "anemia",
    "corrupto"
  ]
};
const sc = { ru: Lx, sp: Bx, latin: Dx }, jx = /^lorem([a-z]*)(\d*)(-\d*)?$/i;
function Ix(i, e, t) {
  let n;
  if (i.name && (n = i.name.match(jx))) {
    const r = sc[n[1]] || sc.latin, s = n[2] ? Math.max(1, Number(n[2])) : 30, o = n[3] ? Math.max(s, Number(n[3].slice(1))) : s, l = Xt(s, o), a = i.repeat || Hx(e);
    i.name = i.attributes = void 0, i.value = [Fx(r, l, !a || a.value === 0)], i.repeat && e.length > 1 && fd(i, e, t);
  }
}
function Xt(i, e) {
  return Math.floor(Math.random() * (e - i) + i);
}
function Nx(i, e) {
  const t = i.length, n = Math.min(t, e), r = [];
  for (; r.length < n; ) {
    const s = i[Xt(0, t)];
    r.includes(s) || r.push(s);
  }
  return r;
}
function Gx(i) {
  return i[Xt(0, i.length - 1)];
}
function oc(i, e) {
  return i.length && (i = [Ux(i[0])].concat(i.slice(1))), i.join(" ") + (e || Gx("?!..."));
}
function Ux(i) {
  return i[0].toUpperCase() + i.slice(1);
}
function lc(i) {
  if (i.length < 2)
    return i;
  i = i.slice();
  const e = i.length, t = /,$/;
  let n = 0;
  e > 3 && e <= 6 ? n = Xt(0, 1) : e > 6 && e <= 12 ? n = Xt(0, 2) : n = Xt(1, 4);
  for (let r = 0, s; r < n; r++)
    s = Xt(0, e - 2), t.test(i[s]) || (i[s] += ",");
  return i;
}
function Fx(i, e, t) {
  const n = [];
  let r = 0, s;
  for (t && i.common && (s = i.common.slice(0, e), r += s.length, n.push(oc(lc(s), "."))); r < e; )
    s = Nx(i.words, Math.min(Xt(2, 30), e - r)), r += s.length, n.push(oc(lc(s)));
  return n.join(" ");
}
function Hx(i) {
  for (let e = i.length - 1; e >= 0; e--) {
    const t = i[e];
    if (t.type === "AbbreviationNode" && t.repeat)
      return t.repeat;
  }
}
function Kx(i) {
  ew(i.name) && i.attributes && (i.children.length || i.value) && (i.attributes = i.attributes.filter(Jx));
}
function Jx(i) {
  return i.name !== "select";
}
function ew(i) {
  return i === "xsl:variable" || i === "xsl:with-param";
}
const Od = /^(-+)([a-z0-9]+[a-z0-9-]*)/i, dd = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i, tw = (i) => /^[a-z]\-/i.test(i), iw = (i) => /^[a-z]/i.test(i);
function nw(i, e, t) {
  rw(i), sw(i, e, t);
}
function rw(i) {
  const e = Dl(i), t = [];
  for (const n of e.classNames) {
    const r = n.indexOf("_");
    r > 0 && !n.startsWith("-") ? (t.push(n.slice(0, r)), t.push(n.slice(r))) : t.push(n);
  }
  t.length && (e.classNames = t.filter(bd), e.block = md(e.classNames), gd(i, e.classNames.join(" ")));
}
function sw(i, e, t) {
  const n = Dl(i), r = [], { options: s } = t, o = e.slice(1).concat(i);
  for (let a of n.classNames) {
    let h = "", c;
    const u = a;
    (c = a.match(Od)) && (h = ac(o, c[1].length, t.context) + s["bem.element"] + c[2], r.push(h), a = a.slice(c[0].length)), (c = a.match(dd)) && (h || (h = ac(o, c[1].length), r.push(h)), r.push(`${h}${s["bem.modifier"]}${c[2]}`), a = a.slice(c[0].length)), a === u && r.push(u);
  }
  const l = r.filter(bd);
  l.length && gd(i, l.join(" "));
}
function Dl(i) {
  if (!i._bem) {
    let e = "";
    if (i.attributes) {
      for (const t of i.attributes)
        if (t.name === "class" && t.value) {
          e = lw(t.value);
          break;
        }
    }
    i._bem = pd(e);
  }
  return i._bem;
}
function ow(i) {
  return i._bem || (i._bem = pd(i.attributes && i.attributes.class || "")), i._bem;
}
function pd(i) {
  const e = i ? i.split(/\s+/) : [];
  return {
    classNames: e,
    block: md(e)
  };
}
function ac(i, e = 0, t) {
  let r = Math.max(i.length - e, 0);
  do {
    const s = i[r];
    if (s) {
      const o = Dl(s);
      if (o.block)
        return o.block;
    }
  } while (0 < r--);
  if (t) {
    const s = ow(t);
    if (s.block)
      return s.block;
  }
  return "";
}
function md(i) {
  return hc(i, tw) || hc(i, iw) || void 0;
}
function hc(i, e) {
  for (const t of i) {
    if (Od.test(t) || dd.test(t))
      break;
    if (e(t))
      return t;
  }
}
function gd(i, e) {
  for (const t of i.attributes)
    if (t.name === "class") {
      t.value = [e];
      break;
    }
}
function lw(i) {
  let e = "";
  for (const t of i)
    e += typeof t == "string" ? t : t.name;
  return e;
}
function bd(i, e, t) {
  return !!i && t.indexOf(i) === e;
}
function aw(i) {
  if (i.name === "label") {
    const e = sd(i, (t) => t.name === "input" || t.name === "textarea");
    e && (i.attributes && (i.attributes = i.attributes.filter((t) => !(t.name === "for" && cc(t)))), e.attributes && (e.attributes = e.attributes.filter((t) => !(t.name === "id" && cc(t)))));
  }
}
function cc(i) {
  if (!i.value)
    return !0;
  if (i.value.length === 1) {
    const e = i.value[0];
    if (e && typeof e != "string" && !e.name)
      return !0;
  }
  return !1;
}
function yd(i, e, t) {
  const n = (s, o, l) => {
    const { parent: a, current: h } = t;
    t.parent = h, t.current = s, e(s, o, l, t, r), t.current = h, t.parent = a;
  }, r = (s, o, l) => {
    t.ancestors.push(t.current), n(s, o, l), t.ancestors.pop();
  };
  i.children.forEach(n);
}
function Qd(i) {
  return {
    // @ts-ignore: Will set value in iterator
    current: null,
    parent: void 0,
    ancestors: [],
    config: i,
    field: 1,
    out: ld(i.options)
  };
}
const Jr = [{ type: "Field", index: 0, name: "" }];
function Kt(i) {
  return i ? !i.name && !i.attributes : !1;
}
function uc(i, e) {
  return i ? gi(i, e) : !1;
}
function Sd(i) {
  return typeof i == "object" && i.type === "Field";
}
function qe(i, e) {
  const { out: t } = e;
  let n = -1;
  for (const r of i)
    typeof r == "string" ? L(t, r) : (Wl(t, e.field + r.index, r.name), r.index > n && (n = r.index));
  n !== -1 && (e.field += n + 1);
}
function hw(i) {
  const e = [];
  let t = [];
  for (const n of i)
    if (typeof n == "string") {
      const r = n.split(/\r\n?|\n/g);
      for (t.push(r.shift() || ""); r.length; )
        e.push(t), t = [r.shift() || ""];
    } else
      t.push(n);
  return t.length && e.push(t), e;
}
function xd(i) {
  return !i.implied || i.valueType !== "raw" || !!i.value && i.value.length > 0;
}
var ei;
(function(i) {
  i[i.Start = 91] = "Start", i[i.End = 93] = "End", i[i.Underscore = 95] = "Underscore", i[i.Dash = 45] = "Dash";
})(ei || (ei = {}));
function fc(i) {
  const e = [], t = { pos: 0, text: i };
  let n, r = t.pos, s = t.pos;
  for (; t.pos < t.text.length; )
    s = t.pos, (n = cw(t)) ? (r !== t.pos && e.push(i.slice(r, s)), e.push(n), r = t.pos) : t.pos++;
  return r !== t.pos && e.push(i.slice(r)), e;
}
function cw(i) {
  if (Ys(i) === ei.Start) {
    const e = ++i.pos;
    let t = e, n = e, r = 1;
    for (; i.pos < i.text.length; ) {
      const s = Ys(i);
      if (wd(s)) {
        for (t = i.pos; uw(Ys(i)); )
          i.pos++;
        n = i.pos;
      } else {
        if (s === ei.Start)
          r++;
        else if (s === ei.End && --r === 0)
          return {
            before: i.text.slice(e, t),
            after: i.text.slice(n, i.pos++),
            name: i.text.slice(t, n)
          };
        i.pos++;
      }
    }
  }
}
function Ys(i, e = i.pos) {
  return i.text.charCodeAt(e);
}
function wd(i) {
  return i >= 65 && i <= 90;
}
function uw(i) {
  return wd(i) || i > 47 && i < 58 || i === ei.Underscore || i === ei.Dash;
}
function fw(i) {
  const { options: e } = i;
  return {
    enabled: e["comment.enabled"],
    trigger: e["comment.trigger"],
    before: e["comment.before"] ? fc(e["comment.before"]) : void 0,
    after: e["comment.after"] ? fc(e["comment.after"]) : void 0
  };
}
function Ow(i, e) {
  $d(i, e) && e.comment.before && vd(i, e.comment.before, e);
}
function dw(i, e) {
  $d(i, e) && e.comment.after && vd(i, e.comment.after, e);
}
function $d(i, e) {
  const { comment: t } = e;
  if (!t.enabled || !t.trigger || !i.name || !i.attributes)
    return !1;
  for (const n of i.attributes)
    if (n.name && t.trigger.includes(n.name))
      return !0;
  return !1;
}
function vd(i, e, t) {
  const n = {}, { out: r } = t;
  for (const s of i.attributes)
    s.name && s.value && (n[s.name.toUpperCase()] = s.value);
  for (const s of e)
    typeof s == "string" ? L(r, s) : n[s.name] && (L(r, s.before), qe(n[s.name], t), L(r, s.after));
}
const pw = /^<([\w\-:]+)[\s>]/, mw = /* @__PURE__ */ new Set([
  "for",
  "while",
  "of",
  "async",
  "await",
  "const",
  "let",
  "var",
  "continue",
  "break",
  "debugger",
  "do",
  "export",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "switch",
  "this",
  "throw",
  "try",
  "catch",
  "typeof",
  "void",
  "with",
  "yield"
]);
function kd(i, e) {
  const t = Qd(e);
  return t.comment = fw(e), yd(i, gw, t), t.out.value;
}
function gw(i, e, t, n, r) {
  const { out: s, config: o } = n, l = Pd(i, e, t, n), a = yw(n);
  if (s.level += a, l && nt(s, !0), i.name) {
    const h = zx(i.name, o);
    if (Ow(i, n), L(s, `<${h}`), i.attributes)
      for (const c of i.attributes)
        xd(c) && bw(c, n);
    if (i.selfClosing && !i.children.length && !i.value)
      L(s, `${Vx(o)}>`);
    else {
      if (L(s, ">"), !Oc(i, n, r)) {
        if (i.value) {
          const c = i.value.some(Td) || Qw(i.value, o);
          c && nt(n.out, ++s.level), qe(i.value, n), c && nt(n.out, --s.level);
        }
        if (i.children.forEach(r), !i.value && !i.children.length) {
          const c = o.options["output.formatLeafNode"] || o.options["output.formatForce"].includes(i.name);
          c && nt(n.out, ++s.level), qe(Jr, n), c && nt(n.out, --s.level);
        }
      }
      L(s, `</${h}>`), dw(i, n);
    }
  } else !Oc(i, n, r) && i.value && (qe(i.value, n), i.children.forEach(r));
  if (l && e === t.length - 1 && n.parent) {
    const h = Kt(n.parent) ? 0 : 1;
    nt(s, s.level - h);
  }
  s.level -= a;
}
function bw(i, e) {
  const { out: t, config: n } = e;
  if (i.name) {
    const r = n.options["markup.attributes"], s = n.options["markup.valuePrefix"];
    let { name: o, value: l } = i, a = Ar(i, n, !0), h = Ar(i, n);
    r && (o = dc(o, r, i.multiple) || o), o = ad(o, n), n.options["jsx.enabled"] && i.multiple && (a = Wo, h = Do);
    const c = s ? dc(i.name, s, i.multiple) : null;
    if (c && (l == null ? void 0 : l.length) === 1 && typeof l[0] == "string") {
      const u = l[0];
      l = [Sw(u) ? `${c}.${u}` : `${c}['${u}']`], n.options["jsx.enabled"] && (a = Wo, h = Do);
    }
    hd(i, n) && !l ? n.options["output.compactBoolean"] || (l = [o]) : l || (l = Jr), L(t, " " + o), l ? (L(t, "=" + a), qe(l, e), L(t, h)) : n.options["output.selfClosingStyle"] !== "html" && L(t, "=" + a + h);
  }
}
function Oc(i, e, t) {
  if (i.value && i.children.length) {
    const n = i.value.findIndex(Sd);
    if (n !== -1) {
      qe(i.value.slice(0, n), e);
      const r = e.out.line;
      let s = n + 1;
      return i.children.forEach(t), e.out.line !== r && typeof i.value[s] == "string" && L(e.out, i.value[s++].trimLeft()), qe(i.value.slice(s), e), !0;
    }
  }
  return !1;
}
function Pd(i, e, t, n) {
  const { config: r, parent: s } = n;
  if (!r.options["output.format"] || e === 0 && !s || s && Kt(s) && t.length === 1)
    return !1;
  if (Kt(i) && (Kt(t[e - 1]) || Kt(t[e + 1]) || i.value.some(Td) || i.value.some(Sd) && i.children.length))
    return !0;
  if (gi(i, r)) {
    if (e === 0) {
      for (let o = 0; o < t.length; o++)
        if (!gi(t[o], r))
          return !0;
    } else if (!gi(t[e - 1], r))
      return !0;
    if (r.options["output.inlineBreak"]) {
      let o = 1, l = e, a = e;
      for (; uc(t[--l], r); )
        o++;
      for (; uc(t[++a], r); )
        o++;
      if (o >= r.options["output.inlineBreak"])
        return !0;
    }
    for (let o = 0, l = i.children.length; o < l; o++)
      if (Pd(i.children[o], o, i.children, n))
        return !0;
    return !1;
  }
  return !0;
}
function yw(i) {
  const { config: e, parent: t } = i;
  return !t || Kt(t) || t.name && e.options["output.formatSkip"].includes(t.name) ? 0 : 1;
}
function Td(i) {
  return typeof i == "string" && /\r|\n/.test(i);
}
function Qw(i, e) {
  if (i.length && typeof i[0] == "string") {
    const t = pw.exec(i[0]);
    if (t != null && t.length && !e.options.inlineElements.includes(t[1].toLowerCase()))
      return !0;
  }
  return !1;
}
function dc(i, e, t) {
  return t && e[`${i}*`] || e[i];
}
function Sw(i) {
  return !mw.has(i) && /^[a-zA-Z_$][\w_$]*$/.test(i);
}
function Ll(i, e, t) {
  const n = Qd(e);
  return n.options = t || {}, yd(i, xw, n), n.out.value;
}
function xw(i, e, t, n, r) {
  const { out: s, options: o } = n, { primary: l, secondary: a } = ww(i), h = n.parent ? 1 : 0;
  s.level += h, Zw(i, e, t, n) && nt(s, !0), i.name && (i.name !== "div" || !l.length) && L(s, (o.beforeName || "") + i.name + (o.afterName || "")), $w(l, n), vw(a.filter(xd), n), i.selfClosing && !i.value && !i.children.length ? n.options.selfClose && L(s, n.options.selfClose) : (kw(i, n), i.children.forEach(r)), s.level -= h;
}
function ww(i) {
  const e = [], t = [];
  if (i.attributes)
    for (const n of i.attributes)
      Pw(n) ? e.push(n) : t.push(n);
  return { primary: e, secondary: t };
}
function $w(i, e) {
  for (const t of i)
    if (t.value)
      if (t.name === "class") {
        L(e.out, ".");
        const n = t.value.map((r) => typeof r == "string" ? r.replace(/\s+/g, ".") : r);
        qe(n, e);
      } else
        L(e.out, "#"), qe(t.value, e);
}
function vw(i, e) {
  if (i.length) {
    const { out: t, config: n, options: r } = e;
    r.beforeAttribute && L(t, r.beforeAttribute);
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      L(t, ad(o.name || "", n)), hd(o, n) && !o.value ? !n.options["output.compactBoolean"] && r.booleanValue && L(t, "=" + r.booleanValue) : (L(t, "=" + Ar(o, n, !0)), qe(o.value || Jr, e), L(t, Ar(o, n))), s !== i.length - 1 && r.glueAttribute && L(t, r.glueAttribute);
    }
    r.afterAttribute && L(t, r.afterAttribute);
  }
}
function kw(i, e) {
  if (!i.value && i.children.length)
    return;
  const t = i.value || Jr, n = hw(t), { out: r, options: s } = e;
  if (n.length === 1)
    (i.name || i.attributes) && ie(r, " "), qe(t, e);
  else {
    const o = [];
    let l = 0;
    for (const a of n) {
      const h = Tw(a);
      o.push(h), h > l && (l = h);
    }
    r.level++;
    for (let a = 0; a < n.length; a++)
      nt(r, !0), s.beforeTextLine && ie(r, s.beforeTextLine), qe(n[a], e), s.afterTextLine && (ie(r, " ".repeat(l - o[a])), ie(r, s.afterTextLine));
    r.level--;
  }
}
function Pw(i) {
  return i.name === "class" || i.name === "id";
}
function Tw(i) {
  let e = 0;
  for (const t of i)
    e += typeof t == "string" ? t.length : t.name.length;
  return e;
}
function Zw(i, e, t, n) {
  return !n.parent && e === 0 ? !1 : !Kt(i);
}
function Cw(i, e) {
  return Ll(i, e, {
    beforeName: "%",
    beforeAttribute: "(",
    afterAttribute: ")",
    glueAttribute: " ",
    afterTextLine: " |",
    booleanValue: "true",
    selfClose: "/"
  });
}
function Aw(i, e) {
  return Ll(i, e, {
    beforeAttribute: " ",
    glueAttribute: " ",
    beforeTextLine: "| ",
    selfClose: "/"
  });
}
function Xw(i, e) {
  return Ll(i, e, {
    beforeAttribute: "(",
    afterAttribute: ")",
    glueAttribute: ", ",
    beforeTextLine: "| ",
    selfClose: e.options["output.selfClosingStyle"] === "xml" ? "/" : ""
  });
}
const Rw = { html: kd, haml: Cw, slim: Aw, pug: Xw };
function Mw(i, e) {
  let t;
  if (typeof i == "string") {
    const n = Object.assign({}, e);
    e.options["jsx.enabled"] && (n.jsx = !0), e.options["markup.href"] && (n.href = !0), i = _l(i, n), t = e.text, e.text = void 0;
  }
  return i = Xx(i, e), Cx(i, Vw, e), e.text = t ?? e.text, i;
}
function zw(i, e) {
  return (Rw[e.syntax] || kd)(i, e);
}
function Vw(i, e, t) {
  Yx(i, e, t), Px(i, t), Ix(i, e, t), t.syntax === "xsl" && Kx(i), t.type === "markup" && aw(i), t.options["bem.enabled"] && nw(i, e, t);
}
var xt;
(function(i) {
  i.Raw = "Raw", i.Property = "Property";
})(xt || (xt = {}));
const _w = /^([a-z-]+)(?:\s*:\s*([^\n\r;]+?);*)?$/, qw = { value: !0 };
function Yw(i, e) {
  const t = e.match(_w);
  if (t) {
    const n = {}, r = t[2] ? t[2].split("|").map(Dw) : [];
    for (const s of r)
      for (const o of s)
        Bw(o, n);
    return {
      type: xt.Property,
      key: i,
      property: t[1],
      value: r,
      keywords: n,
      dependencies: []
    };
  }
  return { type: xt.Raw, key: i, value: e };
}
function Ew(i) {
  i = i.slice().sort(Ww);
  const e = [];
  let t;
  for (const n of i.filter(Lw)) {
    for (; e.length; ) {
      if (t = e[e.length - 1], n.property.startsWith(t.property) && n.property.charCodeAt(t.property.length) === 45) {
        t.dependencies.push(n), e.push(n);
        break;
      }
      e.pop();
    }
    e.length || e.push(n);
  }
  return i;
}
function Ww(i, e) {
  return i.key === e.key ? 0 : i.key < e.key ? -1 : 1;
}
function Dw(i) {
  return rd(i.trim(), qw)[0].value;
}
function Lw(i) {
  return i.type === xt.Property;
}
function Bw(i, e) {
  for (const t of i.value)
    if (t.type === "Literal")
      e[t.value] = t;
    else if (t.type === "FunctionCall")
      e[t.name] = t;
    else if (t.type === "Field") {
      const n = t.name.trim();
      n && (e[n] = { type: "Literal", value: n });
    }
}
function jw(i, e, t = !1) {
  if (i = i.toLowerCase(), e = e.toLowerCase(), i === e)
    return 1;
  if (!i || !e || i.charCodeAt(0) !== e.charCodeAt(0))
    return 0;
  const n = i.length, r = e.length;
  if (!t && n > r)
    return 0;
  const s = Math.min(n, r), o = Math.max(n, r);
  let l = 1, a = 1, h = o, c = 0, u = 0, f = !1, O = !1;
  for (; l < n; ) {
    for (c = i.charCodeAt(l), f = !1, O = !1; a < r; ) {
      if (u = e.charCodeAt(a), c === u) {
        f = !0, h += o - (O ? l : a);
        break;
      }
      O = u === 45, a++;
    }
    if (!f) {
      if (!t)
        return 0;
      break;
    }
    l++;
  }
  const d = l / o, p = o - s, g = pc(o) - pc(p);
  return h * d / g;
}
function pc(i) {
  return i * (i + 1) / 2;
}
function Zd(i, e) {
  return !i.r && !i.g && !i.b && !i.a ? "transparent" : i.a === 1 ? Iw(i, e) : Nw(i);
}
function Iw(i, e) {
  const t = e && Es(i.r) && Es(i.g) && Es(i.b) ? Gw : Uw;
  return "#" + t(i.r) + t(i.g) + t(i.b);
}
function Nw(i) {
  const e = [i.r, i.g, i.b];
  return i.a !== 1 && e.push(Cd(i.a, 8)), `${e.length === 3 ? "rgb" : "rgba"}(${e.join(", ")})`;
}
function Cd(i, e = 4) {
  return i.toFixed(e).replace(/\.?0+$/, "");
}
function Es(i) {
  return !(i % 17);
}
function Gw(i) {
  return (i >> 4).toString(16);
}
function Uw(i) {
  return Fw(i.toString(16), 2);
}
function Fw(i, e) {
  for (; i.length < e; )
    i = "0" + i;
  return i;
}
const Xr = {
  /** Include raw snippets only (e.g. no properties) in abbreviation match */
  Section: "@@section",
  /** Include properties only in abbreviation match */
  Property: "@@property",
  /** Resolve abbreviation in context of CSS property value */
  Value: "@@value"
};
function Hw(i, e) {
  var t;
  const n = ld(e.options), r = e.options["output.format"];
  ((t = e.context) === null || t === void 0 ? void 0 : t.name) === Xr.Section && (i = i.filter((s) => s.snippet));
  for (let s = 0; s < i.length; s++)
    r && s !== 0 && nt(n, !0), Kw(i[s], n, e);
  return n.value;
}
function Kw(i, e, t) {
  const n = t.options["stylesheet.json"];
  if (i.name) {
    const r = n ? t$(i.name) : i.name;
    L(e, r + t.options["stylesheet.between"]), i.value.length ? Jw(i, e, t) : Wl(e, 0, ""), n ? ie(e, ",") : (mc(i, e, !0), ie(e, t.options["stylesheet.after"]));
  } else {
    for (const r of i.value)
      for (const s of r.value)
        Xd(s, e, t);
    mc(i, e, i.value.length > 0);
  }
}
function Jw(i, e, t) {
  const n = t.options["stylesheet.json"], r = n ? e$(i) : null;
  if (r && (!r.unit || r.unit === "px"))
    ie(e, String(r.value));
  else {
    const s = i$(t);
    n && ie(e, s);
    for (let o = 0; o < i.value.length; o++)
      o !== 0 && ie(e, ", "), Ad(i.value[o], e, t);
    n && ie(e, s);
  }
}
function mc(i, e, t) {
  i.important && (t && ie(e, " "), ie(e, "!important"));
}
function Ad(i, e, t) {
  for (let n = 0, r = -1; n < i.value.length; n++) {
    const s = i.value[n];
    n !== 0 && (s.type !== "Field" || s.start !== r) && ie(e, " "), Xd(s, e, t), r = s.end;
  }
}
function Xd(i, e, t) {
  if (i.type === "ColorValue")
    ie(e, Zd(i, t.options["stylesheet.shortHex"]));
  else if (i.type === "Literal" || i.type === "CustomProperty")
    L(e, i.value);
  else if (i.type === "NumberValue")
    L(e, Cd(i.value, 4) + i.unit);
  else if (i.type === "StringValue") {
    const n = i.quote === "double" ? '"' : "'";
    L(e, n + i.value + n);
  } else if (i.type === "Field")
    Wl(e, i.index, i.name);
  else if (i.type === "FunctionCall") {
    ie(e, i.name + "(");
    for (let n = 0; n < i.arguments.length; n++)
      n && ie(e, ", "), Ad(i.arguments[n], e, t);
    ie(e, ")");
  }
}
function e$(i) {
  if (i.value.length === 1) {
    const e = i.value[0];
    if (e.value.length === 1 && e.value[0].type === "NumberValue")
      return e.value[0];
  }
}
function t$(i) {
  return i.replace(/\-(\w)/g, (e, t) => t.toUpperCase());
}
function i$(i) {
  return i.options["stylesheet.jsonDoubleQuotes"] ? '"' : "'";
}
const gc = "lg";
function n$(i, e) {
  var t;
  const n = ((t = e.cache) === null || t === void 0 ? void 0 : t.stylesheetSnippets) || r$(e.snippets), r = [];
  e.cache && (e.cache.stylesheetSnippets = n), typeof i == "string" && (i = rd(i, { value: Vd(e) }));
  const s = f$(n, e);
  for (const o of i) {
    const l = s$(o, s, e);
    l && r.push(l);
  }
  return r;
}
function r$(i) {
  const e = [];
  for (const t of Object.keys(i))
    e.push(Yw(t, i[t]));
  return Ew(e);
}
function s$(i, e, t) {
  if (!o$(i, t)) {
    const n = t.options["stylesheet.fuzzySearchMinScore"];
    if (Vd(t)) {
      const r = t.context.name, s = e.find((o) => o.type === xt.Property && o.property === r);
      Rd(i, t, s, n), i.snippet = s;
    } else if (i.name) {
      const r = tr(i.name, e, n, !0);
      if (i.snippet = r, r) {
        const s = r.type === xt.Property ? l$(i, r, t) : a$(i, r);
        if (s)
          i = s;
        else if (t.options["stylesheet.strictMatch"])
          return null;
      }
    }
  }
  return (i.name || t.context) && u$(i, t), i;
}
function o$(i, e) {
  let t = null;
  const n = i.value.length === 1 ? i.value[0] : null;
  if (n && n.value.length === 1) {
    const r = n.value[0];
    r.type === "FunctionCall" && r.name === gc && (t = r);
  }
  return t || i.name === gc ? (t ? t = Object.assign(Object.assign({}, t), { name: "linear-gradient" }) : t = {
    type: "FunctionCall",
    name: "linear-gradient",
    arguments: [Rr(Gt(0, ""))]
  }, e.context || (i.name = "background-image"), i.value = [Rr(t)], !0) : !1;
}
function l$(i, e, t) {
  const n = i.name, r = c$(n, e.key);
  if (r) {
    if (i.value.length)
      return null;
    const s = Lo(r, t, e);
    if (!s)
      return null;
    i.value.push(Rr(s));
  }
  if (i.name = e.property, i.value.length)
    Rd(i, t, e);
  else if (e.value.length) {
    const s = e.value[0];
    i.value = e.value.length === 1 || s.some(Md) ? s : s.map((o) => zd(o, t));
  }
  return i;
}
function Rd(i, e, t, n) {
  for (const r of i.value) {
    const s = [];
    for (const o of r.value)
      if (o.type === "Literal")
        s.push(Lo(o.value, e, t, n) || o);
      else if (o.type === "FunctionCall") {
        const l = Lo(o.name, e, t, n);
        l && l.type === "FunctionCall" ? s.push(Object.assign(Object.assign({}, l), { arguments: o.arguments.concat(l.arguments.slice(o.arguments.length)) })) : s.push(o);
      } else
        s.push(o);
    r.value = s;
  }
}
function a$(i, e) {
  let t = 0, n;
  const r = /\$\{(\d+)(:[^}]+)?\}/g, s = i.value[0], o = [];
  for (; n = r.exec(e.value); )
    t !== n.index && o.push(bi(e.value.slice(t, n.index))), t = n.index + n[0].length, s && s.value.length ? o.push(s.value.shift()) : o.push(Gt(Number(n[1]), n[2] ? n[2].slice(1) : ""));
  const l = e.value.slice(t);
  return l && o.push(bi(l)), i.name = void 0, i.value = [Rr(...o)], i;
}
function tr(i, e, t = 0, n = !1) {
  let r = null, s = 0;
  for (const o of e) {
    const l = jw(i, h$(o), n);
    if (l === 1)
      return o;
    l && l >= s && (s = l, r = o);
  }
  return s >= t ? r : null;
}
function h$(i) {
  return typeof i == "string" ? i : i.key;
}
function c$(i, e) {
  for (let t = 0, n = 0; t < i.length; t++) {
    if (n = e.indexOf(i[t], n), n === -1)
      return i.slice(t);
    n++;
  }
  return "";
}
function Lo(i, e, t, n) {
  let r;
  if (t) {
    if (r = tr(i, Object.keys(t.keywords), n))
      return t.keywords[r];
    for (const s of t.dependencies)
      if (r = tr(i, Object.keys(s.keywords), n))
        return s.keywords[r];
  }
  return (r = tr(i, e.options["stylesheet.keywords"], n)) ? bi(r) : null;
}
function u$(i, e) {
  const t = e.options["stylesheet.unitAliases"], n = e.options["stylesheet.unitless"];
  for (const r of i.value)
    for (const s of r.value)
      s.type === "NumberValue" && (s.unit ? s.unit = t[s.unit] || s.unit : s.value !== 0 && !n.includes(i.name) && (s.unit = s.rawValue.includes(".") ? e.options["stylesheet.floatUnit"] : e.options["stylesheet.intUnit"]));
}
function Rr(...i) {
  return {
    type: "CSSValue",
    value: i
  };
}
function bi(i) {
  return { type: "Literal", value: i };
}
function Gt(i, e) {
  return { type: "Field", index: i, name: e };
}
function Md(i) {
  for (const e of i.value)
    if (e.type === "Field" || e.type === "FunctionCall" && e.arguments.some(Md))
      return !0;
  return !1;
}
function zd(i, e, t = { index: 1 }) {
  let n = [];
  for (const r of i.value)
    switch (r.type) {
      case "ColorValue":
        n.push(Gt(t.index++, Zd(r, e.options["stylesheet.shortHex"])));
        break;
      case "Literal":
        n.push(Gt(t.index++, r.value));
        break;
      case "NumberValue":
        n.push(Gt(t.index++, `${r.value}${r.unit}`));
        break;
      case "StringValue":
        const s = r.quote === "single" ? "'" : '"';
        n.push(Gt(t.index++, s + r.value + s));
        break;
      case "FunctionCall":
        n.push(Gt(t.index++, r.name), bi("("));
        for (let o = 0, l = r.arguments.length; o < l; o++)
          n = n.concat(zd(r.arguments[o], e, t).value), o !== l - 1 && n.push(bi(", "));
        n.push(bi(")"));
        break;
      default:
        n.push(r);
    }
  return Object.assign(Object.assign({}, i), { value: n });
}
function Vd(i) {
  return i.context ? i.context.name === Xr.Value || !i.context.name.startsWith("@@") : !1;
}
function f$(i, e) {
  if (e.context) {
    if (e.context.name === Xr.Section)
      return i.filter((t) => t.type === xt.Raw);
    if (e.context.name === Xr.Property)
      return i.filter((t) => t.type === xt.Property);
  }
  return i;
}
var O$ = {
  a: "a[href]",
  "a:blank": "a[href='http://${0}' target='_blank' rel='noopener noreferrer']",
  "a:link": "a[href='http://${0}']",
  "a:mail": "a[href='mailto:${0}']",
  "a:tel": "a[href='tel:+${0}']",
  abbr: "abbr[title]",
  "acr|acronym": "acronym[title]",
  base: "base[href]/",
  basefont: "basefont/",
  br: "br/",
  frame: "frame/",
  hr: "hr/",
  bdo: "bdo[dir]",
  "bdo:r": "bdo[dir=rtl]",
  "bdo:l": "bdo[dir=ltr]",
  col: "col/",
  link: "link[rel=stylesheet href]/",
  "link:css": "link[href='${1:style}.css']",
  "link:print": "link[href='${1:print}.css' media=print]",
  "link:favicon": "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
  "link:mf|link:manifest": "link[rel='manifest' href='${1:manifest.json}']",
  "link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']",
  "link:rss": "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
  "link:atom": "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
  "link:im|link:import": "link[rel=import href='${1:component}.html']",
  meta: "meta/",
  "meta:utf": "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']",
  "meta:vp": "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
  "meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
  "meta:edge": "meta:compat[content='${1:ie=edge}']",
  "meta:redirect": "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
  "meta:refresh": "meta[http-equiv=refresh content='${1:5}']",
  "meta:kw": "meta[name=keywords content]",
  "meta:desc": "meta[name=description content]",
  style: "style",
  script: "script",
  "script:src": "script[src]",
  "script:module": "script[type=module src]",
  img: "img[src alt]/",
  "img:s|img:srcset": "img[srcset src alt]",
  "img:z|img:sizes": "img[sizes srcset src alt]",
  picture: "picture",
  "src|source": "source/",
  "src:sc|source:src": "source[src type]",
  "src:s|source:srcset": "source[srcset]",
  "src:t|source:type": "source[srcset type='${1:image/}']",
  "src:z|source:sizes": "source[sizes srcset]",
  "src:m|source:media": "source[media='(${1:min-width: })' srcset]",
  "src:mt|source:media:type": "source:media[type='${2:image/}']",
  "src:mz|source:media:sizes": "source:media[sizes srcset]",
  "src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']",
  iframe: "iframe[src frameborder=0]",
  embed: "embed[src type]/",
  object: "object[data type]",
  param: "param[name value]/",
  map: "map[name]",
  area: "area[shape coords href alt]/",
  "area:d": "area[shape=default]",
  "area:c": "area[shape=circle]",
  "area:r": "area[shape=rect]",
  "area:p": "area[shape=poly]",
  form: "form[action]",
  "form:get": "form[method=get]",
  "form:post": "form[method=post]",
  label: "label[for]",
  input: "input[type=${1:text}]/",
  inp: "input[name=${1} id=${1}]",
  "input:h|input:hidden": "input[type=hidden name]",
  "input:t|input:text": "inp[type=text]",
  "input:search": "inp[type=search]",
  "input:email": "inp[type=email]",
  "input:url": "inp[type=url]",
  "input:p|input:password": "inp[type=password]",
  "input:datetime": "inp[type=datetime]",
  "input:date": "inp[type=date]",
  "input:datetime-local": "inp[type=datetime-local]",
  "input:month": "inp[type=month]",
  "input:week": "inp[type=week]",
  "input:time": "inp[type=time]",
  "input:tel": "inp[type=tel]",
  "input:number": "inp[type=number]",
  "input:color": "inp[type=color]",
  "input:c|input:checkbox": "inp[type=checkbox]",
  "input:r|input:radio": "inp[type=radio]",
  "input:range": "inp[type=range]",
  "input:f|input:file": "inp[type=file]",
  "input:s|input:submit": "input[type=submit value]",
  "input:i|input:image": "input[type=image src alt]",
  "input:b|input:btn|input:button": "input[type=button value]",
  "input:reset": "input:button[type=reset]",
  isindex: "isindex/",
  select: "select[name=${1} id=${1}]",
  "select:d|select:disabled": "select[disabled.]",
  "opt|option": "option[value]",
  textarea: "textarea[name=${1} id=${1}]",
  "tarea:c|textarea:cols": "textarea[name=${1} id=${1} cols=${2:30}]",
  "tarea:r|textarea:rows": "textarea[name=${1} id=${1} rows=${3:10}]",
  "tarea:cr|textarea:cols:rows": "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]",
  marquee: "marquee[behavior direction]",
  "menu:c|menu:context": "menu[type=context]",
  "menu:t|menu:toolbar": "menu[type=toolbar]",
  video: "video[src]",
  audio: "audio[src]",
  "html:xml": "html[xmlns=http://www.w3.org/1999/xhtml]",
  keygen: "keygen/",
  command: "command/",
  "btn:s|button:s|button:submit": "button[type=submit]",
  "btn:r|button:r|button:reset": "button[type=reset]",
  "btn:b|button:b|button:button": "button[type=button]",
  "btn:d|button:d|button:disabled": "button[disabled.]",
  "fst:d|fset:d|fieldset:d|fieldset:disabled": "fieldset[disabled.]",
  bq: "blockquote",
  fig: "figure",
  figc: "figcaption",
  pic: "picture",
  ifr: "iframe",
  emb: "embed",
  obj: "object",
  cap: "caption",
  colg: "colgroup",
  fst: "fieldset",
  btn: "button",
  optg: "optgroup",
  tarea: "textarea",
  leg: "legend",
  sect: "section",
  art: "article",
  hdr: "header",
  ftr: "footer",
  adr: "address",
  dlg: "dialog",
  str: "strong",
  prog: "progress",
  mn: "main",
  tem: "template",
  fset: "fieldset",
  datal: "datalist",
  kg: "keygen",
  out: "output",
  det: "details",
  sum: "summary",
  cmd: "command",
  data: "data[value]",
  meter: "meter[value]",
  time: "time[datetime]",
  "ri:d|ri:dpr": "img:s",
  "ri:v|ri:viewport": "img:z",
  "ri:a|ri:art": "pic>src:m+img",
  "ri:t|ri:type": "pic>src:t+img",
  "!!!": "{<!DOCTYPE html>}",
  doc: "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body",
  "!|html:5": "!!!+doc",
  c: "{<!-- ${0} -->}",
  "cc:ie": "{<!--[if IE]>${0}<![endif]-->}",
  "cc:noie": "{<!--[if !IE]><!-->${0}<!--<![endif]-->}"
}, d$ = {
  "@f": `@font-face {
	font-family: \${1};
	src: url(\${2});
}`,
  "@ff": "@font-face {\n	font-family: '${1:FontName}';\n	src: url('${2:FileName}.eot');\n	src: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n		 url('${2:FileName}.woff') format('woff'),\n		 url('${2:FileName}.ttf') format('truetype'),\n		 url('${2:FileName}.svg#${1:FontName}') format('svg');\n	font-style: ${3:normal};\n	font-weight: ${4:normal};\n}",
  "@i|@import": "@import url(${0});",
  "@kf": "@keyframes ${1:identifier} {\n	${2}\n}",
  "@m|@media": "@media ${1:screen} {\n	${0}\n}",
  ac: "align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly",
  ai: "align-items:start|end|flex-start|flex-end|center|baseline|stretch",
  anim: "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}",
  animdel: "animation-delay:time",
  animdir: "animation-direction:normal|reverse|alternate|alternate-reverse",
  animdur: "animation-duration:${1:0}s",
  animfm: "animation-fill-mode:both|forwards|backwards",
  animic: "animation-iteration-count:1|infinite",
  animn: "animation-name",
  animps: "animation-play-state:running|paused",
  animtf: "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})",
  ap: "appearance:none",
  as: "align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch",
  b: "bottom",
  bd: "border:${1:1px} ${2:solid} ${3:#000}",
  bdb: "border-bottom:${1:1px} ${2:solid} ${3:#000}",
  bdbc: "border-bottom-color:${1:#000}",
  bdbi: "border-bottom-image:url(${0})",
  bdbk: "border-break:close",
  bdbli: "border-bottom-left-image:url(${0})|continue",
  bdblrs: "border-bottom-left-radius",
  bdbri: "border-bottom-right-image:url(${0})|continue",
  bdbrrs: "border-bottom-right-radius",
  bdbs: "border-bottom-style",
  bdbw: "border-bottom-width",
  bdc: "border-color:${1:#000}",
  bdci: "border-corner-image:url(${0})|continue",
  bdcl: "border-collapse:collapse|separate",
  bdf: "border-fit:repeat|clip|scale|stretch|overwrite|overflow|space",
  bdi: "border-image:url(${0})",
  bdl: "border-left:${1:1px} ${2:solid} ${3:#000}",
  bdlc: "border-left-color:${1:#000}",
  bdlen: "border-length",
  bdli: "border-left-image:url(${0})",
  bdls: "border-left-style",
  bdlw: "border-left-width",
  bdr: "border-right:${1:1px} ${2:solid} ${3:#000}",
  bdrc: "border-right-color:${1:#000}",
  bdri: "border-right-image:url(${0})",
  bdrs: "border-radius",
  bdrst: "border-right-style",
  bdrw: "border-right-width",
  bds: "border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset",
  bdsp: "border-spacing",
  bdt: "border-top:${1:1px} ${2:solid} ${3:#000}",
  bdtc: "border-top-color:${1:#000}",
  bdti: "border-top-image:url(${0})",
  bdtli: "border-top-left-image:url(${0})|continue",
  bdtlrs: "border-top-left-radius",
  bdtri: "border-top-right-image:url(${0})|continue",
  bdtrrs: "border-top-right-radius",
  bdts: "border-top-style",
  bdtw: "border-top-width",
  bdw: "border-width",
  bbs: "border-block-start",
  bbe: "border-block-end",
  bis: "border-inline-start",
  bie: "border-inline-end",
  bfv: "backface-visibility:hidden|visible",
  bg: "background:${1:#000}",
  "bg:n": "background: none",
  bga: "background-attachment:fixed|scroll",
  bgbk: "background-break:bounding-box|each-box|continuous",
  bgc: "background-color:${1:#fff}",
  bgcp: "background-clip:padding-box|border-box|content-box|no-clip",
  bgi: "background-image:url(${0})",
  bgo: "background-origin:padding-box|border-box|content-box",
  bgp: "background-position:${1:0} ${2:0}",
  bgpx: "background-position-x",
  bgpy: "background-position-y",
  bgr: "background-repeat:no-repeat|repeat-x|repeat-y|space|round",
  bgsz: "background-size:contain|cover",
  bs: "block-size",
  bxsh: "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none",
  bxsz: "box-sizing:border-box|content-box|border-box",
  c: "color:${1:#000}",
  cg: "column-gap",
  cr: "color:rgb(${1:0}, ${2:0}, ${3:0})",
  cra: "color:rgba(${1:0}, ${2:0}, ${3:0}, ${4:.5})",
  cl: "clear:both|left|right|none",
  cm: "/* ${0} */",
  cnt: "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters(${0})",
  coi: "counter-increment",
  colm: "columns",
  colmc: "column-count",
  colmf: "column-fill",
  colmg: "column-gap",
  colmr: "column-rule",
  colmrc: "column-rule-color",
  colmrs: "column-rule-style",
  colmrw: "column-rule-width",
  colms: "column-span",
  colmw: "column-width",
  cor: "counter-reset",
  cp: "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})",
  cps: "caption-side:top|bottom",
  cur: "cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text",
  d: "display:block|none|flex|inline-flex|inline|inline-block|grid|inline-grid|subgrid|list-item|run-in|contents|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group",
  ec: "empty-cells:show|hide",
  f: "font:${1:1em} ${2:sans-serif}",
  fd: "font-display:auto|block|swap|fallback|optional",
  fef: "font-effect:none|engrave|emboss|outline",
  fem: "font-emphasize",
  femp: "font-emphasize-position:before|after",
  fems: "font-emphasize-style:none|accent|dot|circle|disc",
  ff: "font-family:serif|sans-serif|cursive|fantasy|monospace",
  fft: 'font-family:"Times New Roman", Times, Baskerville, Georgia, serif',
  ffa: 'font-family:Arial, "Helvetica Neue", Helvetica, sans-serif',
  ffv: "font-family:Verdana, Geneva, sans-serif",
  fl: "float:left|right|none",
  fs: "font-style:italic|normal|oblique",
  fsm: "font-smoothing:antialiased|subpixel-antialiased|none",
  fst: "font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
  fv: "font-variant:normal|small-caps",
  fvs: "font-variation-settings:normal|inherit|initial|unset",
  fw: "font-weight:normal|bold|bolder|lighter",
  fx: "flex",
  fxb: "flex-basis:fill|max-content|min-content|fit-content|content",
  fxd: "flex-direction:row|row-reverse|column|column-reverse",
  fxf: "flex-flow",
  fxg: "flex-grow",
  fxsh: "flex-shrink",
  fxw: "flex-wrap:nowrap|wrap|wrap-reverse",
  fsz: "font-size",
  fsza: "font-size-adjust",
  g: "gap",
  gtc: "grid-template-columns:repeat(${0})|minmax()",
  gtr: "grid-template-rows:repeat(${0})|minmax()",
  gta: "grid-template-areas",
  gt: "grid-template",
  gg: "grid-gap",
  gcg: "grid-column-gap",
  grg: "grid-row-gap",
  gac: "grid-auto-columns:auto|minmax()",
  gar: "grid-auto-rows:auto|minmax()",
  gaf: "grid-auto-flow:row|column|dense|inherit|initial|unset",
  gd: "grid",
  gc: "grid-column",
  gcs: "grid-column-start",
  gce: "grid-column-end",
  gr: "grid-row",
  grs: "grid-row-start",
  gre: "grid-row-end",
  ga: "grid-area",
  h: "height",
  is: "inline-size",
  jc: "justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly",
  ji: "justify-items:start|end|center|stretch",
  js: "justify-self:start|end|center|stretch",
  l: "left",
  lg: "background-image:linear-gradient(${1})",
  lh: "line-height",
  lis: "list-style",
  lisi: "list-style-image",
  lisp: "list-style-position:inside|outside",
  list: "list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman",
  lts: "letter-spacing:normal",
  m: "margin",
  mah: "max-height",
  mar: "max-resolution",
  maw: "max-width",
  mb: "margin-bottom",
  mih: "min-height",
  mir: "min-resolution",
  miw: "min-width",
  ml: "margin-left",
  mr: "margin-right",
  mt: "margin-top",
  mbs: "margin-block-start",
  mbe: "margin-block-end",
  mis: "margin-inline-start",
  mie: "margin-inline-end",
  ol: "outline",
  olc: "outline-color:${1:#000}|invert",
  olo: "outline-offset",
  ols: "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset",
  olw: "outline-width:thin|medium|thick",
  "op|opa": "opacity",
  ord: "order",
  ori: "orientation:landscape|portrait",
  orp: "orphans",
  ov: "overflow:hidden|visible|hidden|scroll|auto",
  ovs: "overflow-style:scrollbar|auto|scrollbar|panner|move|marquee",
  ovx: "overflow-x:hidden|visible|hidden|scroll|auto",
  ovy: "overflow-y:hidden|visible|hidden|scroll|auto",
  p: "padding",
  pb: "padding-bottom",
  pgba: "page-break-after:auto|always|left|right",
  pgbb: "page-break-before:auto|always|left|right",
  pgbi: "page-break-inside:auto|avoid",
  pl: "padding-left",
  pos: "position:relative|absolute|relative|fixed|static",
  pr: "padding-right",
  pt: "padding-top",
  pbs: "padding-block-start",
  pbe: "padding-block-end",
  pis: "padding-inline-start",
  pie: "padding-inline-end",
  spbs: "scroll-padding-block-start",
  spbe: "scroll-padding-block-end",
  spis: "scroll-padding-inline-start",
  spie: "scroll-padding-inline-end",
  q: "quotes",
  qen: "quotes:'\\201C' '\\201D' '\\2018' '\\2019'",
  qru: "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'",
  r: "right",
  rg: "row-gap",
  rsz: "resize:none|both|horizontal|vertical",
  t: "top",
  ta: "text-align:left|center|right|justify",
  tal: "text-align-last:left|center|right",
  tbl: "table-layout:fixed",
  td: "text-decoration:none|underline|overline|line-through",
  te: "text-emphasis:none|accent|dot|circle|disc|before|after",
  th: "text-height:auto|font-size|text-size|max-size",
  ti: "text-indent",
  tj: "text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan",
  to: "text-outline:${1:0} ${2:0} ${3:#000}",
  tov: "text-overflow:ellipsis|clip",
  tr: "text-replace",
  trf: "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})",
  trfo: "transform-origin",
  trfs: "transform-style:preserve-3d",
  trs: "transition:${1:prop} ${2:time}",
  trsde: "transition-delay:${1:time}",
  trsdu: "transition-duration:${1:time}",
  trsp: "transition-property:${1:prop}",
  trstf: "transition-timing-function:${1:fn}",
  tsh: "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}",
  tt: "text-transform:uppercase|lowercase|capitalize|none",
  tw: "text-wrap:none|normal|unrestricted|suppress",
  us: "user-select:none",
  v: "visibility:hidden|visible|collapse",
  va: "vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub",
  "w|wid": "width",
  whs: "white-space:nowrap|pre|pre-wrap|pre-line|normal",
  whsc: "white-space-collapse:normal|keep-all|loose|break-strict|break-all",
  wido: "widows",
  wm: "writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl",
  wob: "word-break:normal|keep-all|break-all",
  wos: "word-spacing",
  wow: "word-wrap:none|unrestricted|suppress|break-word|normal",
  z: "z-index",
  zom: "zoom:1"
}, p$ = {
  "tm|tmatch": "xsl:template[match mode]",
  "tn|tname": "xsl:template[name]",
  call: "xsl:call-template[name]",
  ap: "xsl:apply-templates[select mode]",
  api: "xsl:apply-imports",
  imp: "xsl:import[href]",
  inc: "xsl:include[href]",
  ch: "xsl:choose",
  "wh|xsl:when": "xsl:when[test]",
  ot: "xsl:otherwise",
  if: "xsl:if[test]",
  par: "xsl:param[name]",
  pare: "xsl:param[name select]",
  var: "xsl:variable[name]",
  vare: "xsl:variable[name select]",
  wp: "xsl:with-param[name select]",
  key: "xsl:key[name match use]",
  elem: "xsl:element[name]",
  attr: "xsl:attribute[name]",
  attrs: "xsl:attribute-set[name]",
  cp: "xsl:copy[select]",
  co: "xsl:copy-of[select]",
  val: "xsl:value-of[select]",
  "for|each": "xsl:for-each[select]",
  tex: "xsl:text",
  com: "xsl:comment",
  msg: "xsl:message[terminate=no]",
  fall: "xsl:fallback",
  num: "xsl:number[value]",
  nam: "namespace-alias[stylesheet-prefix result-prefix]",
  pres: "xsl:preserve-space[elements]",
  strip: "xsl:strip-space[elements]",
  proc: "xsl:processing-instruction[name]",
  sort: "xsl:sort[select order]",
  choose: "xsl:choose>xsl:when+xsl:otherwise",
  xsl: `!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{
|}`,
  "!!!": '{<?xml version="1.0" encoding="UTF-8"?>}'
}, m$ = {
  "!!!": "{doctype html}"
}, g$ = {
  lang: "en",
  locale: "en-US",
  charset: "UTF-8",
  indentation: "	",
  newline: `
`
};
const b$ = {
  markup: "html",
  stylesheet: "css"
}, y$ = {
  inlineElements: [
    "a",
    "abbr",
    "acronym",
    "applet",
    "b",
    "basefont",
    "bdo",
    "big",
    "br",
    "button",
    "cite",
    "code",
    "del",
    "dfn",
    "em",
    "font",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "map",
    "object",
    "q",
    "s",
    "samp",
    "select",
    "small",
    "span",
    "strike",
    "strong",
    "sub",
    "sup",
    "textarea",
    "tt",
    "u",
    "var"
  ],
  "output.indent": "	",
  "output.baseIndent": "",
  "output.newline": `
`,
  "output.tagCase": "",
  "output.attributeCase": "",
  "output.attributeQuotes": "double",
  "output.format": !0,
  "output.formatLeafNode": !1,
  "output.formatSkip": ["html"],
  "output.formatForce": ["body"],
  "output.inlineBreak": 3,
  "output.compactBoolean": !1,
  "output.booleanAttributes": [
    "contenteditable",
    "seamless",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "novalidate",
    "readonly",
    "required",
    "reversed",
    "selected",
    "typemustmatch"
  ],
  "output.reverseAttributes": !1,
  "output.selfClosingStyle": "html",
  "output.field": (i, e) => e,
  "output.text": (i) => i,
  "markup.href": !0,
  "comment.enabled": !1,
  "comment.trigger": ["id", "class"],
  "comment.before": "",
  "comment.after": `
<!-- /[#ID][.CLASS] -->`,
  "bem.enabled": !1,
  "bem.element": "__",
  "bem.modifier": "_",
  "jsx.enabled": !1,
  "stylesheet.keywords": ["auto", "inherit", "unset", "none"],
  "stylesheet.unitless": ["z-index", "line-height", "opacity", "font-weight", "zoom", "flex", "flex-grow", "flex-shrink"],
  "stylesheet.shortHex": !0,
  "stylesheet.between": ": ",
  "stylesheet.after": ";",
  "stylesheet.intUnit": "px",
  "stylesheet.floatUnit": "em",
  "stylesheet.unitAliases": { e: "em", p: "%", x: "ex", r: "rem" },
  "stylesheet.json": !1,
  "stylesheet.jsonDoubleQuotes": !1,
  "stylesheet.fuzzySearchMinScore": 0,
  "stylesheet.strictMatch": !1
}, _d = {
  type: "markup",
  syntax: "html",
  variables: g$,
  snippets: {},
  options: y$
}, bc = {
  markup: {
    snippets: Ln(O$)
  },
  xhtml: {
    options: {
      "output.selfClosingStyle": "xhtml"
    }
  },
  xml: {
    options: {
      "output.selfClosingStyle": "xml"
    }
  },
  xsl: {
    snippets: Ln(p$),
    options: {
      "output.selfClosingStyle": "xml"
    }
  },
  jsx: {
    options: {
      "jsx.enabled": !0,
      "markup.attributes": {
        class: "className",
        "class*": "styleName",
        for: "htmlFor"
      },
      "markup.valuePrefix": {
        "class*": "styles"
      }
    }
  },
  vue: {
    options: {
      "markup.attributes": {
        "class*": ":class"
      }
    }
  },
  svelte: {
    options: {
      "jsx.enabled": !0
    }
  },
  pug: {
    snippets: Ln(m$)
  },
  stylesheet: {
    snippets: Ln(d$)
  },
  sass: {
    options: {
      "stylesheet.after": ""
    }
  },
  stylus: {
    options: {
      "stylesheet.between": " ",
      "stylesheet.after": ""
    }
  }
};
function Ln(i) {
  const e = {};
  return Object.keys(i).forEach((t) => {
    for (const n of t.split("|"))
      e[n] = i[t];
  }), e;
}
function qd(i = {}, e = {}) {
  const t = i.type || "markup", n = i.syntax || b$[t];
  return Object.assign(Object.assign(Object.assign({}, _d), i), {
    type: t,
    syntax: n,
    variables: Ws(t, n, "variables", i, e),
    snippets: Ws(t, n, "snippets", i, e),
    options: Ws(t, n, "options", i, e)
  });
}
function Ws(i, e, t, n, r = {}) {
  const s = bc[i], o = r[i], l = bc[e], a = r[e];
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, _d[t]), s && s[t]), l && l[t]), o && o[t]), a && a[t]), n[t]);
}
var yc;
(function(i) {
  i[i.SingleQuote = 39] = "SingleQuote", i[i.DoubleQuote = 34] = "DoubleQuote", i[i.Escape = 92] = "Escape";
})(yc || (yc = {}));
var Tt;
(function(i) {
  i[i.SquareL = 91] = "SquareL", i[i.SquareR = 93] = "SquareR", i[i.RoundL = 40] = "RoundL", i[i.RoundR = 41] = "RoundR", i[i.CurlyL = 123] = "CurlyL", i[i.CurlyR = 125] = "CurlyR";
})(Tt || (Tt = {}));
Tt.SquareL + "", Tt.SquareR, Tt.RoundL + "", Tt.RoundR, Tt.CurlyL + "", Tt.CurlyR;
var Qc;
(function(i) {
  i[i.Tab = 9] = "Tab", i[i.Space = 32] = "Space", i[i.Dash = 45] = "Dash", i[i.Slash = 47] = "Slash", i[i.Colon = 58] = "Colon", i[i.Equals = 61] = "Equals", i[i.AngleLeft = 60] = "AngleLeft", i[i.AngleRight = 62] = "AngleRight";
})(Qc || (Qc = {}));
const Q$ = (i) => i.charCodeAt(0);
"#.*:$-_!@%^+>/".split("").map(Q$);
function S$(i, e) {
  const t = qd(e);
  return t.type === "stylesheet" ? w$(i, t) : x$(i, t);
}
function x$(i, e) {
  return zw(Mw(i, e), e);
}
function w$(i, e) {
  return Hw(n$(i, e), e);
}
const Sc = String.fromCodePoint(65520), $$ = String.fromCodePoint(65521);
function Yd(i) {
  return i.selection.main.from;
}
function ut(i, e) {
  return i.doc.sliceString(e.from, e.to);
}
function We(i, e) {
  return e >= i.from && e <= i.to;
}
function xc(i) {
  return i === '"' || i === "'";
}
function Ed(i, e) {
  let { from: t, to: n } = e;
  const r = ut(i, e);
  return xc(r[0]) && t++, xc(r[r.length - 1]) && n--, { from: t, to: n };
}
function v$(i, e) {
  const t = {};
  for (const n of e.getChildren("Attribute")) {
    const r = n.getChild("AttributeName");
    if (r) {
      const s = ut(i, r), o = n.getChild("AttributeValue");
      t[s] = o ? ut(i, Ed(i, o)) : null;
    }
  }
  return t;
}
function k$(i) {
  return i.from === i.to;
}
function Wd(i) {
  return i.length > 0 ? i[i.length - 1] : void 0;
}
function P$(i, e = 0) {
  const t = [];
  let n = "", r = null, s = 0, o = 0, l;
  for (; o < i.length; )
    l = i.charAt(o++), (l === Sc || l === $$) && (n += i.slice(s, o - 1), s = o, l === Sc ? (r = {
      from: e + n.length,
      to: e + n.length
    }, t.push(r)) : r && (r = null));
  return t.length || t.push({
    from: i.length + e,
    to: i.length + e
  }), {
    ranges: t,
    snippet: n + i.slice(s)
  };
}
const wc = {
  OpenTag: "open",
  CloseTag: "close",
  SelfClosingTag: "selfClose"
};
function T$(i, e, t) {
  const n = {
    type: "css",
    ancestors: [],
    current: null,
    inline: !1,
    embedded: t
  }, r = K(i).resolveInner(e, -1), s = [];
  for (let l = r; l; l = l.parent)
    if (l.name === "RuleSet") {
      const a = A$(l);
      s.push({
        name: ut(i, a),
        type: "selector",
        range: l
      });
    } else if (l.name === "Declaration") {
      const { name: a, value: h } = X$(l);
      h && We(h, e) && s.push({
        name: ut(i, h),
        type: "propertyValue",
        range: h
      }), a && s.push({
        name: ut(i, a),
        type: "propertyName",
        range: a
      });
    }
  const o = s.shift();
  if (o) {
    const l = o.type === "selector" ? { from: o.range.from, to: o.range.from + o.name.length } : o.range;
    We(l, e) ? (n.current = o, o.range = l) : s.unshift(o);
  }
  return n.ancestors = s.reverse(), n;
}
function Z$(i, e) {
  const t = {
    type: "html",
    ancestors: [],
    current: null
  }, n = K(i).resolveInner(e);
  for (let r = n; r; r = r ? r.parent : null)
    if (r.name in wc) {
      const s = $c(i, r);
      s && (t.current = Et(Ie({}, s), {
        type: wc[r.name]
      }), r = r.parent);
    } else if (r.name === "Element") {
      const s = r.getChild("OpenTag");
      if (s) {
        const o = $c(i, s);
        o && t.ancestors.push(o);
      }
    }
  return t.ancestors.reverse(), C$(i, e, t), t;
}
function C$(i, e, t) {
  var n;
  if (((n = t.current) == null ? void 0 : n.type) === "open") {
    let r = K(i).resolve(t.current.range.from, 1);
    for (; r && r.name !== "OpenTag"; )
      r = r.parent;
    if (r)
      for (const s of r.getChildren("Attribute")) {
        if (s.from > e)
          break;
        if (We(s, e) && R$(i, s) === "style") {
          const o = s.getChild("AttributeValue");
          if (o) {
            const l = Ed(i, o);
            We(l, e) && (t.css = M$(ut(i, l), e - l.from, l.from));
          }
        }
      }
  }
}
function $c(i, e) {
  const t = e.getChild("TagName");
  if (t)
    return {
      name: ut(i, t).toLowerCase(),
      range: e
    };
}
function A$(i) {
  let e = i.from, t = e;
  for (let n = i.firstChild; n && n.name !== "Block"; n = n.nextSibling)
    t = n.to;
  return { from: e, to: t };
}
function X$(i) {
  let e, t, n = i.firstChild;
  return (n == null ? void 0 : n.name) === "PropertyName" && (e = n, n = n.nextSibling, (n == null ? void 0 : n.name) === ":" && (n = n.nextSibling), n && (t = {
    from: n.from,
    to: i.lastChild.to
  })), { name: e, value: t };
}
function R$(i, e) {
  const t = e.getChild("AttributeName");
  return t ? ut(i, t).toLowerCase() : "";
}
function M$(i, e, t = 0) {
  const n = {
    type: "css",
    ancestors: [],
    current: null,
    inline: !0,
    embedded: {
      from: e + t,
      to: e + t + i.length
    }
  }, r = z$(i, e);
  for (const s of r)
    if (s.value && We(s.value, e)) {
      n.current = {
        name: i.substring(s.value.from, s.value.to).trim(),
        type: "propertyValue",
        range: {
          from: t + s.value.from,
          to: t + s.value.to
        }
      }, n.ancestors.push({
        name: i.substring(s.name.from, s.name.to).trim(),
        type: "propertyName",
        range: {
          from: t + s.name.from,
          to: t + s.value.to
        }
      });
      break;
    } else if (We(s.name, e)) {
      const o = s.value ? s.value.to : s.name.to;
      n.current = {
        name: i.substring(s.name.from, s.name.to).trim(),
        type: "propertyName",
        range: {
          from: t + s.name.from,
          to: t + o
        }
      };
      break;
    }
  return n;
}
function z$(i, e = i.length) {
  var t;
  const n = ` 	
\r`, r = [];
  let s;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    if (s && (s.value ? s.value.from !== -1 && (s.value.to = o) : s.name.to = o), l === ";") {
      if (s = void 0, o > e)
        break;
    } else l === ":" ? s && !s.value && (s.value = { from: -1, to: -1 }) : s ? ((t = s.value) == null ? void 0 : t.from) === -1 && !n.includes(l) && (s.value.from = s.value.to = o) : n.includes(l) || (s = {
      name: { from: o, to: o }
    }, r.push(s));
  }
  return s && (s.value ? s.value.to++ : s.name.to++), r;
}
var D = /* @__PURE__ */ ((i) => (i.html = "html", i.xml = "xml", i.xsl = "xsl", i.jsx = "jsx", i.tsx = "tsx", i.vue = "vue", i.haml = "haml", i.jade = "jade", i.pug = "pug", i.slim = "slim", i.css = "css", i.scss = "scss", i.less = "less", i.sass = "sass", i.sss = "sss", i.stylus = "stylus", i.postcss = "postcss", i))(D || {});
function Bo(i, e) {
  const t = Nd(i) || D.html, n = ts(i), r = {
    // 'output.baseIndent': lineIndent(state.doc.lineAt(pos)),
    // 'output.indent': getIndentation(state),
    "output.field": Dd,
    "output.indent": "	",
    "output.format": !e,
    "output.attributeQuotes": n.attributeQuotes,
    "stylesheet.shortHex": n.shortHex
  };
  return t === D.html && (r["output.selfClosingStyle"] = n.markupStyle, r["output.compactBoolean"] = n.markupStyle === "html"), Gd(t) && (n.comments && (r["comment.enabled"] = !0, n.commentsTemplate && (r["comment.after"] = n.commentsTemplate)), r["bem.enabled"] = n.bem), r;
}
function Dd(i, e) {
  return e ? `\${${i}:${e}}` : `\${${i}}`;
}
let Ld = {};
function Bl(i, e, t) {
  let n = { cache: Ld };
  const r = {
    "output.field": Dd
  };
  t && (Object.assign(n, t), t.options && Object.assign(r, t.options)), n.options = r;
  const s = ts(i);
  return s.config && (n = qd(n, s.config)), S$(e, n);
}
function V$() {
  Ld = {};
}
const _$ = {
  syntax: D.html,
  mark: !0,
  preview: {},
  previewEnabled: !0,
  autoRenameTags: !0,
  markTagPairs: !0,
  previewOpenTag: !1,
  attributeQuotes: "double",
  markupStyle: "html",
  comments: !1,
  commentsTemplate: "<!-- /[#ID][.CLASS] -->",
  bem: !1,
  completionBoost: 99
}, es = k.define({
  combine(i) {
    V$();
    const e = Ie({}, _$), { preview: t } = e;
    for (const n of i)
      Object.assign(e, n), n.preview && (e.preview = Ie(Ie({}, t), n.preview));
    return e;
  }
});
function ts(i, e) {
  return i.facet(es);
}
const Bd = [D.html, D.vue], jl = [D.jsx, D.tsx], jd = [D.xml, D.xsl, ...jl], Id = [D.css, D.scss, D.less];
[D.haml, D.jade, D.pug, D.slim, ...Bd, ...jd, ...jl];
const q$ = [D.sass, D.sss, D.stylus, D.postcss, ...Id];
function Nd(i) {
  return ts(i).syntax;
}
function Y$(i) {
  return i && q$.includes(i) ? "stylesheet" : "markup";
}
function E$(i) {
  return jd.includes(i);
}
function Gd(i) {
  return Bd.includes(i) || E$(i);
}
function Ud(i) {
  return Id.includes(i);
}
function Il(i) {
  return jl.includes(i);
}
function W$(i, e) {
  const t = Wd(e.ancestors);
  if (t) {
    let n = K(i).resolve(t.range.from, 1);
    for (; n && n.name !== "OpenTag"; )
      n = n.parent;
    return {
      name: t.name,
      attributes: n ? v$(i, n) : {}
    };
  }
}
function D$(i) {
  if (i.inline)
    return {
      name: "@@property"
      /* Property */
    };
  const e = Wd(i.ancestors);
  let t = "@@global";
  return i.current ? i.current.type === "propertyValue" && e ? t = e.name : (i.current.type === "selector" || i.current.type === "propertyName") && !e && (t = "@@section") : e || (t = "@@section"), {
    name: t
  };
}
function Fd(i, e, t) {
  const n = document.createElement("div");
  n.className = "emmet-preview", e === "error" && n.classList.add("emmet-preview_error");
  let r = e === D.css ? Xo : zo;
  t && e in t && (r = t[e]);
  const s = new T({
    doc: i,
    root: t == null ? void 0 : t.root,
    extensions: [
      E.readOnly.of(!0),
      of(lf, { fallback: !0 }),
      e === D.css ? Xo() : zo(),
      r()
    ],
    parent: n
  });
  return n.update = (o) => {
    const l = s.state.update({
      changes: {
        from: 0,
        to: s.state.doc.length,
        insert: o
      }
    });
    s.dispatch(l);
  }, n;
}
const L$ = "data:image/svg+xml,%3csvg%20height='393'%20viewBox='0%200%20393%20393'%20width='393'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='98.60869%25'%20x2='50%25'%20y1='50%25'%20y2='50%25'%3e%3cstop%20offset='0'%20stop-color='%23cefbad'/%3e%3cstop%20offset='.836972535'%20stop-color='%23cefbad'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3cpath%20id='b'%20d='m116%2048%20105%2063v34.985l-75-44.999289v67.667289l49.5%2029.347-49.5%2029.346v67.668289l75-45.000289v34.986l-105%2063zm145%2087%20105%2063-105%2063v-34.986l46.690481-28.014-46.690481-28.014z'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%20transform='matrix(.70710678%20-.70710678%20.70710678%20.70710678%20-81.392965%20196.5)'%3e%3ccircle%20cx='196.5'%20cy='196.5'%20fill='%2325272b'%20r='196.5'/%3e%3cuse%20fill='%2392c131'%20xlink:href='%23b'/%3e%3cuse%20fill='url(%23a)'%20xlink:href='%23b'/%3e%3c/g%3e%3c/svg%3e", Hd = (i) => {
  const e = i.state.field(wt);
  return (e == null ? void 0 : e.type) === "abbreviation" && e.preview && We(e.range, i.pos) ? {
    from: e.range.from,
    to: e.range.to,
    filter: !1,
    update(t, n, r, s) {
      const o = s.state.field(wt);
      return !o || o.type === "error" || !We(o.range, s.pos) ? null : Et(Ie({}, t), {
        from: o.range.from,
        to: o.range.to,
        options: Tc(s.state, o)
      });
    },
    options: Tc(i.state, e)
  } : null;
}, B$ = ni.data.of({ autocomplete: Hd }), jo = "<", j$ = q.mark({ class: "emmet-tracker" }), Nl = _.define(), I$ = _.define(), wt = ye.define({
  create: () => null,
  update(i, e) {
    if (e.annotation(bn))
      return null;
    for (const n of e.effects) {
      if (n.is(Nl))
        return null;
      if (n.is(I$)) {
        const r = e.newSelection.main, s = Jd(e.state, r.from);
        if (s)
          return Gl(e.state, r, {
            forced: !0,
            config: s
          });
      }
    }
    return e.docChanged ? ov(e.state, i, e) : i;
  }
}), N$ = ye.define({
  create: vc,
  update(i, e) {
    return !e.docChanged && !e.selection ? e.state.field(wt) ? i : null : vc(e.state, i);
  },
  provide: (i) => sl.from(i)
});
function vc(i, e) {
  const t = i.field(wt);
  if (t && !t.inactive && Sl(i) !== "active") {
    if (t.config.type === "stylesheet")
      return null;
    e && e.tracker.type !== t.type && (e = null);
    const { range: n } = t;
    if (hv(i, t))
      return e || {
        pos: n.from,
        above: !1,
        arrow: !1,
        tracker: t,
        create() {
          const r = i.facet(es).preview;
          let s = "", o = "";
          t.type === "error" ? (s = t.error.message, o = "error") : (s = t.preview, o = t.config.syntax || D.html);
          const l = Fd(s, o, r);
          return {
            dom: l,
            update({ state: a }) {
              const h = a.field(wt);
              if (h && l.update) {
                const c = h.type === "error" ? h.error.message : h.preview;
                l.update(c);
              }
            }
          };
        }
      };
  }
  return null;
}
const G$ = Te.fromClass(class {
  constructor() {
    _o(this, "decorations"), this.decorations = q.none;
  }
  update(i) {
    const { state: e } = i, t = e.field(wt), n = [];
    if (t && !t.inactive) {
      const { range: r } = t;
      k$(r) || n.push(j$.range(r.from, r.to)), this.decorations = q.set(n, !0);
    } else
      this.decorations = q.none;
  }
}, {
  decorations: (i) => i.decorations
});
function Kd(i, e) {
  const { from: t, to: n } = e.range, r = Bl(i.state, e.abbreviation, e.config), s = yf(r);
  i.dispatch(i.state.update({
    effects: Nl.of(null)
  })), s(i, { label: "expand" }, t, n);
}
const U$ = (i) => {
  const { state: e } = i;
  if (Sl(e))
    return !1;
  const t = e.field(wt, !1);
  return t && !t.inactive && We(t.range, Yd(e)) ? (Kd(i, t), !0) : !1;
}, F$ = ({ state: i, dispatch: e }) => i.field(wt, !1) ? (e({
  effects: Nl.of(null)
}), !0) : !1, H$ = T.baseTheme({
  ".emmet-tracker": {
    textDecoration: "underline 1px green"
  },
  ".emmet-preview": {
    fontSize: "0.9em"
  },
  ".emmet-preview_error": {
    color: "red"
  },
  ".cm-completionIcon-emmet::after": {
    content: '" "',
    background: `url("${L$}") center/contain no-repeat`,
    display: "inline-block",
    width: "11px",
    height: "11px",
    verticalAlign: "middle"
  }
});
function K$(i) {
  return [
    wt,
    G$,
    N$,
    H$,
    B$,
    i ? es.of(i) : [],
    mn.of([{
      key: "Tab",
      run: U$
    }, {
      key: "Escape",
      run: F$
    }])
  ];
}
function J$(i, e, t) {
  var n;
  if (t.length !== 1)
    return null;
  const r = i.doc.lineAt(e), s = r.text.substring(Math.max(0, e - r.from - 1), e - r.from);
  if (!Pc(s, t, lv(i, e)))
    return null;
  const o = Jd(i, e);
  if (!o)
    return null;
  if (o.type === "stylesheet") {
    if (!Pc(s, t, D.css))
      return null;
    const u = (n = o.context) == null ? void 0 : n.name;
    if (u && !u.startsWith("@@") && t !== "#")
      return null;
  }
  const l = o.syntax || D.html;
  let a = e, h = e + t.length, c = 0;
  return Il(l) && s === jo && (c = jo.length, a -= c), Gl(i, { from: a, to: h }, { config: o });
}
function Jd(i, e) {
  if (ni.isActiveAt(i, e))
    return kc(i, e, D.css, T$(i, e));
  const t = Nd(i);
  if (Gd(t)) {
    const n = Z$(i, e);
    if (n.css)
      return kc(i, e, D.css, n.css);
    if (!n.current)
      return {
        syntax: t,
        type: "markup",
        context: W$(i, n),
        options: Bo(i)
      };
  } else
    return {
      syntax: t,
      type: Y$(t),
      options: Bo(i)
    };
}
function kc(i, e, t, n) {
  if (!n.current || n.current.type === "propertyName" || n.current.type === "propertyValue" || ev(i, e, n))
    return {
      syntax: t,
      type: "stylesheet",
      context: D$(n),
      options: Bo(i, n.inline)
    };
}
function ev(i, e, { current: t }) {
  return (t == null ? void 0 : t.type) === "selector" && t.range.from === e - 1 ? i.doc.lineAt(t.range.from).text.trim().length === 1 : !1;
}
function tv(i, e) {
  return Il(e) ? i === jo : Ud(e) ? i === "" || /^[\s>;"\']$/.test(i) : i === "" || /^[\s>;"\']$/.test(i);
}
function iv(i, e) {
  return Il(e) ? /^[a-zA-Z.#\[\(]$/.test(i) : Ud(e) ? /^[a-zA-Z!@#]$/.test(i) : /^[a-zA-Z.#!@\[\(]$/.test(i);
}
function Gl(i, e, t) {
  if (e.from > e.to)
    return null;
  let n = ut(i, e);
  const { config: r, forced: s } = t;
  if (t.offset && (n = n.slice(t.offset)), !n && !s || ep(n))
    return null;
  const o = {
    abbreviation: n,
    range: e,
    config: r,
    forced: !!s,
    inactive: !1,
    offset: t.offset || 0
  };
  try {
    let l, a = !1;
    r.type === "markup" && (l = _l(n, {
      jsx: r.syntax === "jsx"
    }), a = nv(l));
    const h = rv(r), c = Bl(i, l || n, h);
    return c ? Et(Ie({}, o), {
      type: "abbreviation",
      simple: a,
      preview: c
    }) : null;
  } catch (l) {
    return o.forced ? Et(Ie({}, o), {
      type: "error",
      error: l
    }) : null;
  }
}
function ep(i) {
  return /[\r\n]/.test(i);
}
function nv(i) {
  if (i.children.length === 1 && !i.children[0].children.length) {
    const e = i.children[0];
    return !e.name || /^[a-z]/i.test(e.name);
  }
  return !i.children.length;
}
function rv(i) {
  return Et(Ie({}, i), {
    options: Et(Ie({}, i.options), {
      "output.field": sv,
      "output.indent": "  ",
      "output.baseIndent": ""
    })
  });
}
function sv(i, e) {
  return e;
}
function ov(i, e, t) {
  return av(i) ? null : ((!e || e.inactive) && (t.changes.iterChanges((n, r, s, o, l) => {
    l.length && (e = J$(i, s, l.toString()) || e);
  }), !e || !e.inactive) || t.changes.iterChanges((n, r, s, o, l) => {
    if (!e)
      return;
    const { range: a } = e;
    if (!We(a, n))
      e.inactive || (e = null);
    else if (We(a, s)) {
      const h = r - n, c = o - n, u = a.to + c - h;
      if (u <= a.from || ep(l.toString()))
        e = null;
      else {
        const f = e.inactive ? a : { from: a.from, to: u }, O = Gl(i, f, {
          config: e.config,
          forced: e.forced
        });
        O ? e = O : e = Et(Ie({}, e), { inactive: !0 });
      }
    }
  }), e);
}
function lv(i, e) {
  return ni.isActiveAt(i, e) ? D.css : pi.isActiveAt(i, e) ? D.html : "";
}
function Pc(i, e, t) {
  return tv(i, t) && iv(e, t);
}
function av(i) {
  return Array.isArray(i.values) ? i.values.some((e) => {
    var t;
    return e && ((t = e.constructor) == null ? void 0 : t.name) === "ActiveSnippet";
  }) : !1;
}
function hv(i, e) {
  if (Sl(i) === "active")
    return !1;
  const t = ts(i);
  if (!t.previewEnabled)
    return !1;
  if (Array.isArray(t.previewEnabled)) {
    const { type: n, syntax: r } = e.config;
    if (!t.previewEnabled.includes(n) && !t.previewEnabled.includes(r))
      return !1;
  }
  return e.type === "error" || (!e.simple || e.forced) && !!e.abbreviation && We(e.range, Yd(i));
}
function Tc(i, e, t) {
  const n = i.facet(es);
  return [{
    label: "Emmet abbreviation",
    type: "emmet",
    boost: n.completionBoost,
    tracker: e,
    previewConfig: n.preview,
    preview: t == null ? void 0 : t.preview,
    info: cv,
    apply: (r, s) => {
      r.dispatch({
        annotations: bn.of(s)
      }), Kd(r, e);
    }
  }];
}
function cv(i) {
  let { tracker: e, previewConfig: t, preview: n } = i;
  return n != null && n.update ? n.update(e.preview) : i.preview = n = Fd(e.preview, e.config.syntax || D.html, t), n;
}
const ir = _.define(), Zc = ye.define({
  create: () => null,
  update(i, e) {
    for (const t of e.effects)
      t.is(ir) && (i = t.value);
    return i;
  }
});
T.baseTheme({
  ".emmet-wrap-with-abbreviation": {
    position: "absolute",
    top: 0,
    zIndex: 2,
    width: "100%"
  },
  ".emmet-wrap-with-abbreviation__content": {
    background: "#fff",
    margin: "0 auto",
    padding: "5px",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "30em",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.3)"
  },
  ".emmet-wrap-with-abbreviation__content input": {
    width: "100%",
    boxSizing: "border-box"
  }
});
Te.fromClass(class {
  constructor() {
    _o(this, "widget", null), _o(this, "input", null);
  }
  update(e) {
    const { state: t, view: n } = e, r = t.field(Zc);
    r ? (this.widget || this.createInputPanel(n), this.updateAbbreviation(r.abbreviation)) : this.widget && (this.disposeWidget(), n.focus());
  }
  // TODO use @codemirror/panel instead
  createInputPanel(e) {
    const t = document.createElement("div");
    t.className = "emmet-wrap-with-abbreviation";
    const n = document.createElement("div");
    n.className = "emmet-wrap-with-abbreviation__content";
    const r = document.createElement("input");
    r.placeholder = "Enter abbreviation";
    let s = !1;
    const o = () => {
      s && ($l(e), s = !1);
    };
    r.addEventListener("input", () => {
      const l = e.state.field(Zc);
      if (l) {
        const a = r.value;
        o();
        const h = Et(Ie({}, l), {
          abbreviation: a
        });
        if (h.abbreviation) {
          s = !0;
          const { from: c, to: u } = h.range, f = Bl(e.state, h.abbreviation, h.options), { ranges: O, snippet: d } = P$(f, c), p = O[0];
          e.dispatch({
            effects: [ir.of(h)],
            changes: [{
              from: c,
              to: u,
              insert: d
            }],
            selection: {
              head: p.from,
              anchor: p.to
            }
          });
        } else
          e.dispatch({
            effects: [ir.of(h)]
          });
      }
    }), r.addEventListener("keydown", (l) => {
      (l.key === "Escape" || l.key === "Enter") && (l.key === "Escape" && o(), l.preventDefault(), e.dispatch({
        effects: [ir.of(null)]
      }));
    }), n.append(r), t.append(n), e.dom.append(t), this.widget = t, this.input = r, r.focus();
  }
  updateAbbreviation(e) {
    this.input && this.input.value !== e && (this.input.value = e);
  }
  disposeWidget() {
    this.widget && (this.widget.remove(), this.widget = this.input = null);
  }
});
class uv {
  constructor(e) {
    wn(this, "textarea");
    wn(this, "editor", null);
    this.textarea = e;
    try {
      this.editor = is(e);
    } catch (t) {
      console.error("WagtailHtmlEditor: Failed to initialize editor", t);
    }
  }
  /**
   * Get the HTML ID for label association
   */
  get idForLabel() {
    return this.textarea.id || null;
  }
  /**
   * Get the current value for form submission
   */
  getValue() {
    return this.textarea.value;
  }
  /**
   * Get the current state for re-initialization
   */
  getState() {
    return this.textarea.value;
  }
  /**
   * Set a new state value
   */
  setState(e) {
    this.textarea.value = e, this.editor && this.editor.view.dispatch({
      changes: {
        from: 0,
        to: this.editor.view.state.doc.length,
        insert: e
      }
    });
  }
  /**
   * Focus the editor
   */
  focus() {
    this.editor ? this.editor.view.focus() : this.textarea.focus();
  }
}
class fv {
  constructor(e) {
    wn(this, "html");
    this.html = e;
  }
  /**
   * Render the widget into the page
   */
  render(e, t, n, r) {
    const s = this.html.replace(/__NAME__/g, t).replace(/__ID__/g, n);
    e.outerHTML = s;
    const o = document.getElementById(n);
    if (!o)
      throw new Error(`WagtailHtmlEditor: Textarea with id "${n}" not found`);
    return o.value = r || "", new uv(o);
  }
}
typeof window < "u" && window.telepath && window.telepath.register(
  "wagtail_html_editor.widgets.EnhancedHTMLWidget",
  fv
);
const Ov = "data-wagtail-html-editor", nr = "data-wagtail-html-editor-initialized";
function dv(i = {}) {
  const e = [
    Ag(),
    mg(),
    Mg(),
    Cb(),
    x0(),
    hb(),
    gn.of("  "),
    zo(),
    of(lf, { fallback: !0 }),
    yb()
  ];
  return i.emmet !== !1 && (e.push(K$()), e.push(
    pi.data.of({ autocomplete: Hd })
  )), e.push(
    mn.of([
      ...wf,
      ...Xy,
      ...Yb,
      // Tab: accept completion if popup open, otherwise indent
      {
        key: "Tab",
        run: (t) => {
          var n;
          return gf(t) ? !0 : ((n = Dn.run) == null ? void 0 : n.call(Dn, t)) ?? !1;
        },
        shift: Dn.shift
      }
    ])
  ), e;
}
function is(i, e = {}) {
  var o;
  if (i.hasAttribute(nr))
    throw new Error("Editor already initialized on this textarea");
  i.style.display = "none", i.setAttribute(nr, "true");
  const t = document.createElement("div");
  t.className = "wagtail-html-editor", (o = i.parentNode) == null || o.insertBefore(t, i.nextSibling);
  const n = T.updateListener.of((l) => {
    l.docChanged && (i.value = l.state.doc.toString());
  }), r = E.create({
    doc: i.value,
    extensions: [...dv(e), n]
  }), s = new T({
    state: r,
    parent: t
  });
  return {
    textarea: i,
    view: s,
    options: e,
    destroy: () => {
      s.destroy(), t.remove(), i.removeAttribute(nr), i.style.display = "";
    }
  };
}
function pv(i, e = {}) {
  const t = document.querySelector(i);
  return t ? t instanceof HTMLTextAreaElement ? is(t, e) : (console.warn(`WagtailHtmlEditor: Element "${i}" is not a textarea`), null) : (console.warn(
    `WagtailHtmlEditor: No element found for selector "${i}"`
  ), null);
}
function mv(i = {}) {
  const e = document.querySelectorAll(
    `textarea[${Ov}]:not([${nr}])`
  ), t = [];
  for (const n of e)
    try {
      const r = is(n, i);
      t.push(r);
    } catch (r) {
      console.error("WagtailHtmlEditor: Failed to initialize editor", r);
    }
  return t;
}
const gv = {
  initEditor: is,
  initEditorBySelector: pv,
  initAll: mv
};
typeof window < "u" && (window.WagtailHtmlEditor = gv);
export {
  gv as WagtailHtmlEditor,
  mv as initAll,
  is as initEditor,
  pv as initEditorBySelector
};
//# sourceMappingURL=wagtail-html-editor.js.map
