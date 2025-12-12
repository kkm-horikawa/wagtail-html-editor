var np = Object.defineProperty;
var sp = (i, e, t) => e in i ? np(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var wr = (i, e, t) => sp(i, typeof e != "symbol" ? e + "" : e, t);
let Ds = [], Rc = [];
(() => {
  let i = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < i.length; e++)
    (e % 2 ? Rc : Ds).push(t = t + i[e]);
})();
function op(i) {
  if (i < 768) return !1;
  for (let e = 0, t = Ds.length; ; ) {
    let r = e + t >> 1;
    if (i < Ds[r]) t = r;
    else if (i >= Rc[r]) e = r + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function Kl(i) {
  return i >= 127462 && i <= 127487;
}
const Jl = 8205;
function lp(i, e, t = !0, r = !0) {
  return (t ? Mc : ap)(i, e, r);
}
function Mc(i, e, t) {
  if (e == i.length) return e;
  e && zc(i.charCodeAt(e)) && Vc(i.charCodeAt(e - 1)) && e--;
  let r = rs(i, e);
  for (e += ea(r); e < i.length; ) {
    let n = rs(i, e);
    if (r == Jl || n == Jl || t && op(n))
      e += ea(n), r = n;
    else if (Kl(n)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && Kl(rs(i, o)); )
        s++, o -= 2;
      if (s % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function ap(i, e, t) {
  for (; e > 0; ) {
    let r = Mc(i, e - 2, t);
    if (r < e) return r;
    e--;
  }
  return 0;
}
function rs(i, e) {
  let t = i.charCodeAt(e);
  if (!Vc(t) || e + 1 == i.length) return t;
  let r = i.charCodeAt(e + 1);
  return zc(r) ? (t - 55296 << 10) + (r - 56320) + 65536 : t;
}
function zc(i) {
  return i >= 56320 && i < 57344;
}
function Vc(i) {
  return i >= 55296 && i < 56320;
}
function ea(i) {
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
  replace(e, t, r) {
    [e, t] = yi(this, e, t);
    let n = [];
    return this.decompose(
      0,
      e,
      n,
      2
      /* Open.To */
    ), r.length && r.decompose(
      0,
      r.length,
      n,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      n,
      1
      /* Open.From */
    ), nt.from(n, this.length - (t - e) + r.length);
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
    let r = [];
    return this.decompose(e, t, r, 0), nt.from(r, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), r = this.length - this.scanIdentical(e, -1), n = new Ii(this), s = new Ii(e);
    for (let o = t, l = t; ; ) {
      if (n.next(o), s.next(o), o = 0, n.lineBreak != s.lineBreak || n.done != s.done || n.value != s.value)
        return !1;
      if (l += n.value.length, n.done || l >= r)
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
    return new _c(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let r;
    if (e == null)
      r = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let n = this.line(e).from;
      r = this.iterRange(n, Math.max(n, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new qc(r);
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
    return e.length == 1 && !e[0] ? V.empty : e.length <= 32 ? new ee(e) : nt.from(ee.split(e, []));
  }
}
class ee extends V {
  constructor(e, t = hp(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, r, n) {
    for (let s = 0; ; s++) {
      let o = this.text[s], l = n + o.length;
      if ((t ? r : l) >= e)
        return new cp(n, l, r, o);
      n = l + 1, r++;
    }
  }
  decompose(e, t, r, n) {
    let s = e <= 0 && t >= this.length ? this : new ee(ta(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (n & 1) {
      let o = r.pop(), l = Lr(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32)
        r.push(new ee(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        r.push(new ee(l.slice(0, a)), new ee(l.slice(a)));
      }
    } else
      r.push(s);
  }
  replace(e, t, r) {
    if (!(r instanceof ee))
      return super.replace(e, t, r);
    [e, t] = yi(this, e, t);
    let n = Lr(this.text, Lr(r.text, ta(this.text, 0, e)), t), s = this.length + r.length - (t - e);
    return n.length <= 32 ? new ee(n, s) : nt.from(ee.split(n, []), s);
  }
  sliceString(e, t = this.length, r = `
`) {
    [e, t] = yi(this, e, t);
    let n = "";
    for (let s = 0, o = 0; s <= t && o < this.text.length; o++) {
      let l = this.text[o], a = s + l.length;
      s > e && o && (n += r), e < a && t > s && (n += l.slice(Math.max(0, e - s), t - s)), s = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let r = [], n = -1;
    for (let s of e)
      r.push(s), n += s.length + 1, r.length == 32 && (t.push(new ee(r, n)), r = [], n = -1);
    return n > -1 && t.push(new ee(r, n)), t;
  }
}
class nt extends V {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let r of e)
      this.lines += r.lines;
  }
  lineInner(e, t, r, n) {
    for (let s = 0; ; s++) {
      let o = this.children[s], l = n + o.length, a = r + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, r, n);
      n = l + 1, r = a + 1;
    }
  }
  decompose(e, t, r, n) {
    for (let s = 0, o = 0; o <= t && s < this.children.length; s++) {
      let l = this.children[s], a = o + l.length;
      if (e <= a && t >= o) {
        let h = n & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? r.push(l) : l.decompose(e - o, t - o, r, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, r) {
    if ([e, t] = yi(this, e, t), r.lines < this.lines)
      for (let n = 0, s = 0; n < this.children.length; n++) {
        let o = this.children[n], l = s + o.length;
        if (e >= s && t <= l) {
          let a = o.replace(e - s, t - s, r), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return c[n] = a, new nt(c, this.length - (t - e) + r.length);
          }
          return super.replace(s, l, a);
        }
        s = l + 1;
      }
    return super.replace(e, t, r);
  }
  sliceString(e, t = this.length, r = `
`) {
    [e, t] = yi(this, e, t);
    let n = "";
    for (let s = 0, o = 0; s < this.children.length && o <= t; s++) {
      let l = this.children[s], a = o + l.length;
      o > e && s && (n += r), e < a && t > o && (n += l.sliceString(e - o, t - o, r)), o = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof nt))
      return 0;
    let r = 0, [n, s, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; n += t, s += t) {
      if (n == o || s == l)
        return r;
      let a = this.children[n], h = e.children[s];
      if (a != h)
        return r + a.scanIdentical(h, t);
      r += a.length + 1;
    }
  }
  static from(e, t = e.reduce((r, n) => r + n.length + 1, -1)) {
    let r = 0;
    for (let O of e)
      r += O.lines;
    if (r < 32) {
      let O = [];
      for (let d of e)
        d.flatten(O);
      return new ee(O, t);
    }
    let n = Math.max(
      32,
      r >> 5
      /* Tree.BranchShift */
    ), s = n << 1, o = n >> 1, l = [], a = 0, h = -1, c = [];
    function u(O) {
      let d;
      if (O.lines > s && O instanceof nt)
        for (let p of O.children)
          u(p);
      else O.lines > o && (a > o || !a) ? (f(), l.push(O)) : O instanceof ee && a && (d = c[c.length - 1]) instanceof ee && O.lines + d.lines <= 32 ? (a += O.lines, h += O.length + 1, c[c.length - 1] = new ee(d.text.concat(O.text), d.length + 1 + O.length)) : (a + O.lines > n && f(), a += O.lines, h += O.length + 1, c.push(O));
    }
    function f() {
      a != 0 && (l.push(c.length == 1 ? c[0] : nt.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let O of e)
      u(O);
    return f(), l.length == 1 ? l[0] : new nt(l, t);
  }
}
V.empty = /* @__PURE__ */ new ee([""], 0);
function hp(i) {
  let e = -1;
  for (let t of i)
    e += t.length + 1;
  return e;
}
function Lr(i, e, t = 0, r = 1e9) {
  for (let n = 0, s = 0, o = !0; s < i.length && n <= r; s++) {
    let l = i[s], a = n + l.length;
    a >= t && (a > r && (l = l.slice(0, r - n)), n < t && (l = l.slice(t - n)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), n = a + 1;
  }
  return e;
}
function ta(i, e, t) {
  return Lr(i, [""], e, t);
}
class Ii {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof ee ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let r = this.nodes.length - 1, n = this.nodes[r], s = this.offsets[r], o = s >> 1, l = n instanceof ee ? n.text.length : n.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (r == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[r - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[r] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (n instanceof ee) {
        let a = n.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[r] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = n.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[r] += t) : (t < 0 && this.offsets[r]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof ee ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class _c {
  constructor(e, t, r) {
    this.value = "", this.done = !1, this.cursor = new Ii(e, t > r ? -1 : 1), this.pos = t > r ? e.length : 0, this.from = Math.min(t, r), this.to = Math.max(t, r);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let r = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > r && (e = r), r -= e;
    let { value: n } = this.cursor.next(e);
    return this.pos += (n.length + e) * t, this.value = n.length <= r ? n : t < 0 ? n.slice(n.length - r) : n.slice(0, r), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class qc {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: r, value: n } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : r ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (V.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Ii.prototype[Symbol.iterator] = _c.prototype[Symbol.iterator] = qc.prototype[Symbol.iterator] = function() {
  return this;
});
class cp {
  /**
  @internal
  */
  constructor(e, t, r, n) {
    this.from = e, this.to = t, this.number = r, this.text = n;
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
function he(i, e, t = !0, r = !0) {
  return lp(i, e, t, r);
}
function up(i) {
  return i >= 56320 && i < 57344;
}
function fp(i) {
  return i >= 55296 && i < 56320;
}
function it(i, e) {
  let t = i.charCodeAt(e);
  if (!fp(t) || e + 1 == i.length)
    return t;
  let r = i.charCodeAt(e + 1);
  return up(r) ? (t - 55296 << 10) + (r - 56320) + 65536 : t;
}
function Yc(i) {
  return i <= 65535 ? String.fromCharCode(i) : (i -= 65536, String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function Zt(i) {
  return i < 65536 ? 1 : 2;
}
const Bs = /\r\n?|\n/;
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
      let r = this.sections[t + 1];
      e += r < 0 ? this.sections[t] : r;
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
    for (let t = 0, r = 0, n = 0; t < this.sections.length; ) {
      let s = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(r, n, s), n += s) : n += o, r += s;
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
    Ls(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let r = this.sections[t++], n = this.sections[t++];
      n < 0 ? e.push(r, n) : e.push(n, r);
    }
    return new ht(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Ec(this, e);
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
  mapPos(e, t = -1, r = fe.Simple) {
    let n = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = n + l;
      if (a < 0) {
        if (h > e)
          return s + (e - n);
        s += l;
      } else {
        if (r != fe.Simple && h >= e && (r == fe.TrackDel && n < e && h > e || r == fe.TrackBefore && n < e || r == fe.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !l)
          return e == n || t < 0 ? s : s + a;
        s += a;
      }
      n = h;
    }
    if (e > n)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${n}`);
    return s;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let r = 0, n = 0; r < this.sections.length && n <= t; ) {
      let s = this.sections[r++], o = this.sections[r++], l = n + s;
      if (o >= 0 && n <= t && l >= e)
        return n < e && l > t ? "cover" : !0;
      n = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let r = this.sections[t++], n = this.sections[t++];
      e += (e ? " " : "") + r + (n >= 0 ? ":" + n : "");
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
class re extends ht {
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
    return Ls(this, (t, r, n, s, o) => e = e.replace(n, n + (r - t), o), !1), e;
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
    let t = this.sections.slice(), r = [];
    for (let n = 0, s = 0; n < t.length; n += 2) {
      let o = t[n], l = t[n + 1];
      if (l >= 0) {
        t[n] = l, t[n + 1] = o;
        let a = n >> 1;
        for (; r.length < a; )
          r.push(V.empty);
        r.push(o ? e.slice(s, s + o) : V.empty);
      }
      s += o;
    }
    return new re(t, r);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Ec(this, e, !0);
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
    Ls(this, e, t);
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
    let t = [], r = [], n = [], s = new Fi(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && s.len == 0; ) {
        if (s.done)
          break e;
        let c = Math.min(s.len, a - l);
        ue(n, c, -1);
        let u = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        ue(t, c, u), u > 0 && At(r, t, s.text), s.forward(c), l += c;
      }
      let h = e[o++];
      for (; l < h; ) {
        if (s.done)
          break e;
        let c = Math.min(s.len, h - l);
        ue(t, c, -1), ue(n, c, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(c), l += c;
      }
    }
    return {
      changes: new re(t, r),
      filtered: ht.create(n)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let r = this.sections[t], n = this.sections[t + 1];
      n < 0 ? e.push(r) : n == 0 ? e.push([r]) : e.push([r].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, r) {
    let n = [], s = [], o = 0, l = null;
    function a(c = !1) {
      if (!c && !n.length)
        return;
      o < t && ue(n, t - o, -1);
      let u = new re(n, s);
      l = l ? l.compose(u.map(l)) : u, n = [], s = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let u of c)
          h(u);
      else if (c instanceof re) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: u, to: f = u, insert: O } = c;
        if (u > f || u < 0 || f > t)
          throw new RangeError(`Invalid change range ${u} to ${f} (in doc of length ${t})`);
        let d = O ? typeof O == "string" ? V.of(O.split(r || Bs)) : O : V.empty, p = d.length;
        if (u == f && p == 0)
          return;
        u < o && a(), u > o && ue(n, u - o, -1), ue(n, f - u, p), At(s, n, d), o = f;
      }
    }
    return h(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new re(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], r = [];
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (typeof s == "number")
        t.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1)
          t.push(s[0], 0);
        else {
          for (; r.length < n; )
            r.push(V.empty);
          r[n] = V.of(s.slice(1)), t.push(s[0], r[n].length);
        }
      }
    }
    return new re(t, r);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new re(e, t);
  }
}
function ue(i, e, t, r = !1) {
  if (e == 0 && t <= 0)
    return;
  let n = i.length - 2;
  n >= 0 && t <= 0 && t == i[n + 1] ? i[n] += e : n >= 0 && e == 0 && i[n] == 0 ? i[n + 1] += t : r ? (i[n] += e, i[n + 1] += t) : i.push(e, t);
}
function At(i, e, t) {
  if (t.length == 0)
    return;
  let r = e.length - 2 >> 1;
  if (r < i.length)
    i[i.length - 1] = i[i.length - 1].append(t);
  else {
    for (; i.length < r; )
      i.push(V.empty);
    i.push(t);
  }
}
function Ls(i, e, t) {
  let r = i.inserted;
  for (let n = 0, s = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++], a = i.sections[o++];
    if (a < 0)
      n += l, s += l;
    else {
      let h = n, c = s, u = V.empty;
      for (; h += l, c += a, a && r && (u = u.append(r[o - 2 >> 1])), !(t || o == i.sections.length || i.sections[o + 1] < 0); )
        l = i.sections[o++], a = i.sections[o++];
      e(n, h, s, c, u), n = h, s = c;
    }
  }
}
function js(i, e, t, r = !1) {
  let n = [], s = r ? [] : null, o = new Fi(i), l = new Fi(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      ue(n, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (ue(n, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (ue(n, 0, o.ins), s && At(s, n, o.text), a = o.i), o.forward(c), h -= c;
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
      ue(n, h, a < o.i ? o.ins : 0), s && a < o.i && At(s, n, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return s ? re.createSet(n, s) : ht.create(n);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Ec(i, e, t = !1) {
  let r = [], n = t ? [] : null, s = new Fi(i), o = new Fi(e);
  for (let l = !1; ; ) {
    if (s.done && o.done)
      return n ? re.createSet(r, n) : ht.create(r);
    if (s.ins == 0)
      ue(r, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done)
      ue(r, 0, o.ins, l), n && At(n, r, o.text), o.next();
    else {
      if (s.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, o.len), h = r.length;
        if (s.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          ue(r, a, c, l), n && c && At(n, r, o.text);
        } else o.ins == -1 ? (ue(r, s.off ? 0 : s.len, a, l), n && At(n, r, s.textBit(a))) : (ue(r, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), n && !o.off && At(n, r, o.text));
        l = (s.ins > a || o.ins >= 0 && o.len > a) && (l || r.length > h), s.forward2(a), o.forward(a);
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
    let { inserted: t } = this.set, r = this.i - 2 >> 1;
    return r >= t.length && !e ? V.empty : t[r].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Ut {
  constructor(e, t, r) {
    this.from = e, this.to = t, this.flags = r;
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
    let r, n;
    return this.empty ? r = n = e.mapPos(this.from, t) : (r = e.mapPos(this.from, 1), n = e.mapPos(this.to, -1)), r == this.from && n == this.to ? this : new Ut(r, n, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return y.range(e, t);
    let r = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return y.range(this.anchor, r);
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
  static create(e, t, r) {
    return new Ut(e, t, r);
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
    return e.empty ? this : y.create(this.ranges.map((r) => r.map(e, t)), this.mainIndex);
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
    for (let r = 0; r < this.ranges.length; r++)
      if (!this.ranges[r].eq(e.ranges[r], t))
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
    let r = this.ranges.slice();
    return r[t] = e, y.create(r, this.mainIndex);
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
    for (let r = 0, n = 0; n < e.length; n++) {
      let s = e[n];
      if (s.empty ? s.from <= r : s.from < r)
        return y.normalized(e.slice(), t);
      r = s.to;
    }
    return new y(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, r, n) {
    return Ut.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (r == null ? 7 : Math.min(6, r)) | (n ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, r, n) {
    let s = (r ?? 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
    return t < e ? Ut.create(t, e, 48 | s) : Ut.create(e, t, (t > e ? 8 : 0) | s);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let r = e[t];
    e.sort((n, s) => n.from - s.from), t = e.indexOf(r);
    for (let n = 1; n < e.length; n++) {
      let s = e[n], o = e[n - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from, a = Math.max(s.to, o.to);
        n <= t && t--, e.splice(--n, 2, s.anchor > s.head ? y.range(a, l) : y.range(l, a));
      }
    }
    return new y(e, t);
  }
}
function Wc(i, e) {
  for (let t of i.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Io = 0;
class k {
  constructor(e, t, r, n, s) {
    this.combine = e, this.compareInput = t, this.compare = r, this.isStatic = n, this.id = Io++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
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
    return new k(e.combine || ((t) => t), e.compareInput || ((t, r) => t === r), e.compare || (e.combine ? (t, r) => t === r : No), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new jr([], this, 0, e);
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
    return new jr(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new jr(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (r) => r), this.compute([e], (r) => t(r.field(e)));
  }
}
function No(i, e) {
  return i == e || i.length == e.length && i.every((t, r) => t === e[r]);
}
class jr {
  constructor(e, t, r, n) {
    this.dependencies = e, this.facet = t, this.type = r, this.value = n, this.id = Io++;
  }
  dynamicSlot(e) {
    var t;
    let r = this.value, n = this.facet.compareInput, s = this.id, o = e[s] >> 1, l = this.type == 2, a = !1, h = !1, c = [];
    for (let u of this.dependencies)
      u == "doc" ? a = !0 : u == "selection" ? h = !0 : (((t = e[u.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[u.id]);
    return {
      create(u) {
        return u.values[o] = r(u), 1;
      },
      update(u, f) {
        if (a && f.docChanged || h && (f.docChanged || f.selection) || Is(u, c)) {
          let O = r(u);
          if (l ? !ia(O, u.values[o], n) : !n(O, u.values[o]))
            return u.values[o] = O, 1;
        }
        return 0;
      },
      reconfigure: (u, f) => {
        let O, d = f.config.address[s];
        if (d != null) {
          let p = on(f, d);
          if (this.dependencies.every((g) => g instanceof k ? f.facet(g) === u.facet(g) : g instanceof ye ? f.field(g, !1) == u.field(g, !1) : !0) || (l ? ia(O = r(u), p, n) : n(O = r(u), p)))
            return u.values[o] = p, 0;
        } else
          O = r(u);
        return u.values[o] = O, 1;
      }
    };
  }
}
function ia(i, e, t) {
  if (i.length != e.length)
    return !1;
  for (let r = 0; r < i.length; r++)
    if (!t(i[r], e[r]))
      return !1;
  return !0;
}
function Is(i, e) {
  let t = !1;
  for (let r of e)
    Ni(i, r) & 1 && (t = !0);
  return t;
}
function Op(i, e, t) {
  let r = t.map((a) => i[a.id]), n = t.map((a) => a.type), s = r.filter((a) => !(a & 1)), o = i[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < r.length; c++) {
      let u = on(a, r[c]);
      if (n[c] == 2)
        for (let f of u)
          h.push(f);
      else
        h.push(u);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of r)
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
      let c = Is(a, r), u = h.config.facets[e.id], f = h.facet(e);
      if (u && !c && No(t, u))
        return a.values[o] = f, 0;
      let O = l(a);
      return e.compare(O, f) ? (a.values[o] = f, 0) : (a.values[o] = O, 1);
    }
  };
}
const $r = /* @__PURE__ */ k.define({ static: !0 });
class ye {
  constructor(e, t, r, n, s) {
    this.id = e, this.createF = t, this.updateF = r, this.compareF = n, this.spec = s, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new ye(Io++, e.create, e.update, e.compare || ((r, n) => r === n), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet($r).find((r) => r.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (r) => (r.values[t] = this.create(r), 1),
      update: (r, n) => {
        let s = r.values[t], o = this.updateF(s, n);
        return this.compareF(s, o) ? 0 : (r.values[t] = o, 1);
      },
      reconfigure: (r, n) => {
        let s = r.facet($r), o = n.facet($r), l;
        return (l = s.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (r.values[t] = l.create(r), 1) : n.config.address[this.id] != null ? (r.values[t] = n.field(this), 0) : (r.values[t] = this.create(r), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, $r.of({ field: this, create: e })];
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
  return (e) => new Dc(e, i);
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
class Dc {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class zn {
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
    return zn.reconfigure.of({ compartment: this, extension: e });
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
class sn {
  constructor(e, t, r, n, s, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = r, this.address = n, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < r.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, r) {
    let n = [], s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let f of dp(e, t, o))
      f instanceof ye ? n.push(f) : (s[f.facet.id] || (s[f.facet.id] = [])).push(f);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let f of n)
      l[f.id] = h.length << 1, h.push((O) => f.slot(O));
    let c = r == null ? void 0 : r.config.facets;
    for (let f in s) {
      let O = s[f], d = O[0].facet, p = c && c[f] || [];
      if (O.every(
        (g) => g.type == 0
        /* Provider.Static */
      ))
        if (l[d.id] = a.length << 1 | 1, No(p, O))
          a.push(r.facet(d));
        else {
          let g = d.combine(O.map((b) => b.value));
          a.push(r && d.compare(g, r.facet(d)) ? r.facet(d) : g);
        }
      else {
        for (let g of O)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = h.length << 1, h.push((b) => g.dynamicSlot(b)));
        l[d.id] = h.length << 1, h.push((g) => Op(g, d, O));
      }
    }
    let u = h.map((f) => f(l));
    return new sn(e, o, u, l, a, s);
  }
}
function dp(i, e, t) {
  let r = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function s(o, l) {
    let a = n.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = r[a].indexOf(o);
      h > -1 && r[a].splice(h, 1), o instanceof Ns && t.delete(o.compartment);
    }
    if (n.set(o, l), Array.isArray(o))
      for (let h of o)
        s(h, l);
    else if (o instanceof Ns) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), s(h, l);
    } else if (o instanceof Dc)
      s(o.inner, o.prec);
    else if (o instanceof ye)
      r[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof jr)
      r[l].push(o), o.facet.extensions && s(o.facet.extensions, Nt.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(h, l);
    }
  }
  return s(i, Nt.default), r.reduce((o, l) => o.concat(l));
}
function Ni(i, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, r = i.status[t];
  if (r == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (r & 2)
    return r;
  i.status[t] = 4;
  let n = i.computeSlot(i, i.config.dynamicSlots[t]);
  return i.status[t] = 2 | n;
}
function on(i, e) {
  return e & 1 ? i.config.staticValues[e >> 1] : i.values[e >> 1];
}
const Bc = /* @__PURE__ */ k.define(), Gs = /* @__PURE__ */ k.define({
  combine: (i) => i.some((e) => e),
  static: !0
}), Lc = /* @__PURE__ */ k.define({
  combine: (i) => i.length ? i[0] : void 0,
  static: !0
}), jc = /* @__PURE__ */ k.define(), Ic = /* @__PURE__ */ k.define(), Nc = /* @__PURE__ */ k.define(), Gc = /* @__PURE__ */ k.define({
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
    return new pp();
  }
}
class pp {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new $t(this, e);
  }
}
class mp {
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
    return new mp(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let r = [];
    for (let n of e) {
      let s = n.map(t);
      s && r.push(s);
    }
    return r;
  }
}
_.reconfigure = /* @__PURE__ */ _.define();
_.appendConfig = /* @__PURE__ */ _.define();
class te {
  constructor(e, t, r, n, s, o) {
    this.startState = e, this.changes = t, this.selection = r, this.effects = n, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, r && Wc(r, t.newLength), s.some((l) => l.type == te.time) || (this.annotations = s.concat(te.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, r, n, s, o) {
    return new te(e, t, r, n, s, o);
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
function gp(i, e) {
  let t = [];
  for (let r = 0, n = 0; ; ) {
    let s, o;
    if (r < i.length && (n == e.length || e[n] >= i[r]))
      s = i[r++], o = i[r++];
    else if (n < e.length)
      s = e[n++], o = e[n++];
    else
      return t;
    !t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Uc(i, e, t) {
  var r;
  let n, s, o;
  return t ? (n = e.changes, s = re.empty(e.changes.length), o = i.changes.compose(e.changes)) : (n = e.changes.map(i.changes), s = i.changes.mapDesc(e.changes, !0), o = i.changes.compose(n)), {
    changes: o,
    selection: e.selection ? e.selection.map(s) : (r = i.selection) === null || r === void 0 ? void 0 : r.map(n),
    effects: _.mapEffects(i.effects, n).concat(_.mapEffects(e.effects, s)),
    annotations: i.annotations.length ? i.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: i.scrollIntoView || e.scrollIntoView
  };
}
function Us(i, e, t) {
  let r = e.selection, n = hi(e.annotations);
  return e.userEvent && (n = n.concat(te.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof re ? e.changes : re.of(e.changes || [], t, i.facet(Lc)),
    selection: r && (r instanceof y ? r : y.single(r.anchor, r.head)),
    effects: hi(e.effects),
    annotations: n,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Fc(i, e, t) {
  let r = Us(i, e.length ? e[0] : {}, i.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (t = !1);
    let o = !!e[s].sequential;
    r = Uc(r, Us(i, e[s], o ? r.changes.newLength : i.doc.length), o);
  }
  let n = te.create(i, r.changes, r.selection, r.effects, r.annotations, r.scrollIntoView);
  return yp(t ? bp(n) : n);
}
function bp(i) {
  let e = i.startState, t = !0;
  for (let n of e.facet(jc)) {
    let s = n(i);
    if (s === !1) {
      t = !1;
      break;
    }
    Array.isArray(s) && (t = t === !0 ? s : gp(t, s));
  }
  if (t !== !0) {
    let n, s;
    if (t === !1)
      s = i.changes.invertedDesc, n = re.empty(e.doc.length);
    else {
      let o = i.changes.filter(t);
      n = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    i = te.create(e, n, i.selection && i.selection.map(s), _.mapEffects(i.effects, s), i.annotations, i.scrollIntoView);
  }
  let r = e.facet(Ic);
  for (let n = r.length - 1; n >= 0; n--) {
    let s = r[n](i);
    s instanceof te ? i = s : Array.isArray(s) && s.length == 1 && s[0] instanceof te ? i = s[0] : i = Fc(e, hi(s), !1);
  }
  return i;
}
function yp(i) {
  let e = i.startState, t = e.facet(Nc), r = i;
  for (let n = t.length - 1; n >= 0; n--) {
    let s = t[n](i);
    s && Object.keys(s).length && (r = Uc(r, Us(e, s, i.changes.newLength), !0));
  }
  return r == i ? i : te.create(e, i.changes, i.selection, r.effects, r.annotations, r.scrollIntoView);
}
const Qp = [];
function hi(i) {
  return i == null ? Qp : Array.isArray(i) ? i : [i];
}
var Re = /* @__PURE__ */ (function(i) {
  return i[i.Word = 0] = "Word", i[i.Space = 1] = "Space", i[i.Other = 2] = "Other", i;
})(Re || (Re = {}));
const Sp = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Fs;
try {
  Fs = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function xp(i) {
  if (Fs)
    return Fs.test(i);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Sp.test(t)))
      return !0;
  }
  return !1;
}
function wp(i) {
  return (e) => {
    if (!/\S/.test(e))
      return Re.Space;
    if (xp(e))
      return Re.Word;
    for (let t = 0; t < i.length; t++)
      if (e.indexOf(i[t]) > -1)
        return Re.Word;
    return Re.Other;
  };
}
class E {
  constructor(e, t, r, n, s, o) {
    this.config = e, this.doc = t, this.selection = r, this.values = n, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Ni(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let r = this.config.address[e.id];
    if (r == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Ni(this, r), on(this, r);
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
    return Fc(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: r, compartments: n } = t;
    for (let l of e.effects)
      l.is(zn.reconfigure) ? (t && (n = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => n.set(h, a)), t = null), n.set(l.value.compartment, l.value.extension)) : l.is(_.reconfigure) ? (t = null, r = l.value) : l.is(_.appendConfig) && (t = null, r = hi(r).concat(l.value));
    let s;
    t ? s = e.startState.values.slice() : (t = sn.resolve(r, n, this), s = new E(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
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
    let t = this.selection, r = e(t.ranges[0]), n = this.changes(r.changes), s = [r.range], o = hi(r.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), c = h.map(n);
      for (let f = 0; f < l; f++)
        s[f] = s[f].map(c);
      let u = n.mapDesc(h, !0);
      s.push(a.range.map(u)), n = n.compose(c), o = _.mapEffects(o, c).concat(_.mapEffects(hi(a.effects), u));
    }
    return {
      changes: n,
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
    return e instanceof re ? e : re.of(e, this.doc.length, this.facet(E.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return V.of(e.split(this.facet(E.lineSeparator) || Bs));
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
    return t == null ? e.default : (Ni(this, t), on(this, t));
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
      for (let r in e) {
        let n = e[r];
        n instanceof ye && this.config.address[n.id] != null && (t[r] = n.spec.toJSON(this.field(e[r]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, r) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let n = [];
    if (r) {
      for (let s in r)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let o = r[s], l = e[s];
          n.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return E.create({
      doc: e.doc,
      selection: y.fromJSON(e.selection),
      extensions: t.extensions ? n.concat([t.extensions]) : n
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = sn.resolve(e.extensions || [], /* @__PURE__ */ new Map()), r = e.doc instanceof V ? e.doc : V.of((e.doc || "").split(t.staticFacet(E.lineSeparator) || Bs)), n = e.selection ? e.selection instanceof y ? e.selection : y.single(e.selection.anchor, e.selection.head) : y.single(0);
    return Wc(n, r.length), t.staticFacet(Gs) || (n = n.asSingle()), new E(t, r, n, t.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
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
    return this.facet(Gc);
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
    for (let r of this.facet(E.phrases))
      if (Object.prototype.hasOwnProperty.call(r, e)) {
        e = r[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (r, n) => {
      if (n == "$")
        return "$";
      let s = +(n || 1);
      return !s || s > t.length ? r : t[s - 1];
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
  languageDataAt(e, t, r = -1) {
    let n = [];
    for (let s of this.facet(Bc))
      for (let o of s(this, t, r))
        Object.prototype.hasOwnProperty.call(o, e) && n.push(o[e]);
    return n;
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
    return wp(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: r, length: n } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - r, l = e - r;
    for (; o > 0; ) {
      let a = he(t, o, !1);
      if (s(t.slice(a, o)) != Re.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = he(t, l);
      if (s(t.slice(l, a)) != Re.Word)
        break;
      l = a;
    }
    return o == l ? null : y.range(o + r, l + r);
  }
}
E.allowMultipleSelections = Gs;
E.tabSize = /* @__PURE__ */ k.define({
  combine: (i) => i.length ? i[0] : 4
});
E.lineSeparator = Lc;
E.readOnly = Gc;
E.phrases = /* @__PURE__ */ k.define({
  compare(i, e) {
    let t = Object.keys(i), r = Object.keys(e);
    return t.length == r.length && t.every((n) => i[n] == e[n]);
  }
});
E.languageData = Bc;
E.changeFilter = jc;
E.transactionFilter = Ic;
E.transactionExtender = Nc;
zn.reconfigure = /* @__PURE__ */ _.define();
function Vn(i, e, t = {}) {
  let r = {};
  for (let n of i)
    for (let s of Object.keys(n)) {
      let o = n[s], l = r[s];
      if (l === void 0)
        r[s] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, s))
        r[s] = t[s](l, o);
      else
        throw new Error("Config merge conflict for field " + s);
    }
  for (let n in e)
    r[n] === void 0 && (r[n] = e[n]);
  return r;
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
let Hs = class Hc {
  constructor(e, t, r) {
    this.from = e, this.to = t, this.value = r;
  }
  /**
  @internal
  */
  static create(e, t, r) {
    return new Hc(e, t, r);
  }
};
function Ks(i, e) {
  return i.from - e.from || i.value.startSide - e.value.startSide;
}
class Go {
  constructor(e, t, r, n) {
    this.from = e, this.to = t, this.value = r, this.maxPoint = n;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, r, n = 0) {
    let s = r ? this.to : this.from;
    for (let o = n, l = s.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = s[a] - e || (r ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, r, n) {
    for (let s = this.findIndex(t, -1e9, !0), o = this.findIndex(r, 1e9, !1, s); s < o; s++)
      if (n(this.from[s] + e, this.to[s] + e, this.value[s]) === !1)
        return !1;
  }
  map(e, t) {
    let r = [], n = [], s = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + e, u = this.to[a] + e, f, O;
      if (c == u) {
        let d = t.mapPos(c, h.startSide, h.mapMode);
        if (d == null || (f = O = d, h.startSide != h.endSide && (O = t.mapPos(c, h.endSide), O < f)))
          continue;
      } else if (f = t.mapPos(c, h.startSide), O = t.mapPos(u, h.endSide), f > O || f == O && h.startSide > 0 && h.endSide <= 0)
        continue;
      (O - f || h.endSide - h.startSide) < 0 || (o < 0 && (o = f), h.point && (l = Math.max(l, O - f)), r.push(h), n.push(f - o), s.push(O - o));
    }
    return { mapped: r.length ? new Go(n, s, r, l) : null, pos: o };
  }
}
class z {
  constructor(e, t, r, n) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = r, this.maxPoint = n;
  }
  /**
  @internal
  */
  static create(e, t, r, n) {
    return new z(e, t, r, n);
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
    let { add: t = [], sort: r = !1, filterFrom: n = 0, filterTo: s = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (r && (t = t.slice().sort(Ks)), this.isEmpty)
      return t.length ? z.of(t) : this;
    let l = new Kc(this, null, -1).goto(0), a = 0, h = [], c = new Hi();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let u = t[a++];
        c.addInner(u.from, u.to, u.value) || h.push(u);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || s < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(Hs.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? z.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: n, filterTo: s }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], r = [], n = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = e.touchesRange(l, l + a.length);
      if (h === !1)
        n = Math.max(n, a.maxPoint), t.push(a), r.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: u } = a.map(l, e);
        c && (n = Math.max(n, c.maxPoint), t.push(c), r.push(u));
      }
    }
    let s = this.nextLayer.map(e);
    return t.length == 0 ? s : new z(r, t, s || z.empty, n);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, r) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let s = this.chunkPos[n], o = this.chunk[n];
        if (t >= s && e <= s + o.length && o.between(s, e - s, t - s, r) === !1)
          return;
      }
      this.nextLayer.between(e, t, r);
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
  static compare(e, t, r, n, s = -1) {
    let o = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), l = t.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), a = ra(o, l, r), h = new Vi(o, a, s), c = new Vi(l, a, s);
    r.iterGaps((u, f, O) => na(h, u, c, f, O, n)), r.empty && r.length == 0 && na(h, 0, c, 0, 0, n);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, r = 0, n) {
    n == null && (n = 999999999);
    let s = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (s.length != o.length)
      return !1;
    if (!s.length)
      return !0;
    let l = ra(s, o), a = new Vi(s, l, 0).goto(r), h = new Vi(o, l, 0).goto(r);
    for (; ; ) {
      if (a.to != h.to || !Js(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return !1;
      if (a.to > n)
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
  static spans(e, t, r, n, s = -1) {
    let o = new Vi(e, null, s).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, r);
      if (o.point) {
        let c = o.activeForPoint(o.to), u = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        n.point(l, h, o.point, c, u, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else h > l && (n.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > r)
        return a + (o.point && o.to > r ? 1 : 0);
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
    let r = new Hi();
    for (let n of e instanceof Hs ? [e] : t ? $p(e) : e)
      r.add(n.from, n.to, n.value);
    return r.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return z.empty;
    let t = e[e.length - 1];
    for (let r = e.length - 2; r >= 0; r--)
      for (let n = e[r]; n != z.empty; n = n.nextLayer)
        t = new z(n.chunkPos, n.chunk, t, Math.max(n.maxPoint, t.maxPoint));
    return t;
  }
}
z.empty = /* @__PURE__ */ new z([], [], null, -1);
function $p(i) {
  if (i.length > 1)
    for (let e = i[0], t = 1; t < i.length; t++) {
      let r = i[t];
      if (Ks(e, r) > 0)
        return i.slice().sort(Ks);
      e = r;
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
  add(e, t, r) {
    this.addInner(e, t, r) || (this.nextLayer || (this.nextLayer = new Hi())).add(e, t, r);
  }
  /**
  @internal
  */
  addInner(e, t, r) {
    let n = e - this.lastTo || r.startSide - this.last.endSide;
    if (n <= 0 && (e - this.lastFrom || r.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return n < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = r, this.lastFrom = e, this.lastTo = t, this.value.push(r), r.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let r = t.value.length - 1;
    return this.last = t.value[r], this.lastFrom = t.from[r] + e, this.lastTo = t.to[r] + e, !0;
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
function ra(i, e, t) {
  let r = /* @__PURE__ */ new Map();
  for (let s of i)
    for (let o = 0; o < s.chunk.length; o++)
      s.chunk[o].maxPoint <= 0 && r.set(s.chunk[o], s.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let o = 0; o < s.chunk.length; o++) {
      let l = r.get(s.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == s.chunkPos[o] && !(t != null && t.touchesRange(l, l + s.chunk[o].length)) && n.add(s.chunk[o]);
    }
  return n;
}
class Kc {
  constructor(e, t, r, n = 0) {
    this.layer = e, this.skip = t, this.minPoint = r, this.rank = n;
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
  gotoInner(e, t, r) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < e || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, r = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!r || this.rangeIndex < n) && this.setRangeIndex(n);
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
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], r = e + t.from[this.rangeIndex];
        if (this.from = r, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
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
  static from(e, t = null, r = -1) {
    let n = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= r && n.push(new Kc(o, t, r, s));
    return n.length == 1 ? n[0] : new Ki(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let r of this.heap)
      r.goto(e, t);
    for (let r = this.heap.length >> 1; r >= 0; r--)
      ns(this.heap, r);
    return this.next(), this;
  }
  forward(e, t) {
    for (let r of this.heap)
      r.forward(e, t);
    for (let r = this.heap.length >> 1; r >= 0; r--)
      ns(this.heap, r);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), ns(this.heap, 0);
    }
  }
}
function ns(i, e) {
  for (let t = i[e]; ; ) {
    let r = (e << 1) + 1;
    if (r >= i.length)
      break;
    let n = i[r];
    if (r + 1 < i.length && n.compare(i[r + 1]) >= 0 && (n = i[r + 1], r++), t.compare(n) < 0)
      break;
    i[r] = t, i[e] = n, e = r;
  }
}
class Vi {
  constructor(e, t, r) {
    this.minPoint = r, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ki.from(e, t, r);
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
    vr(this.active, e), vr(this.activeTo, e), vr(this.activeRank, e), this.minActive = sa(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: r, to: n, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || n - this.activeTo[t]) > 0; )
      t++;
    kr(this.active, t, r), kr(this.activeTo, t, n), kr(this.activeRank, t, s), e && kr(e, t, this.cursor.from), this.minActive = sa(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let r = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > e) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), r && vr(r, n);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point)
            this.addActive(r), this.cursor.next();
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
    if (r) {
      this.openStart = 0;
      for (let n = r.length - 1; n >= 0 && r[n] < e; n--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let r = this.active.length - 1; r >= 0 && !(this.activeRank[r] < this.pointRank); r--)
      (this.activeTo[r] > e || this.activeTo[r] == e && this.active[r].endSide >= this.point.endSide) && t.push(this.active[r]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let r = this.activeTo.length - 1; r >= 0 && this.activeTo[r] > e; r--)
      t++;
    return t;
  }
}
function na(i, e, t, r, n, s) {
  i.goto(e), t.goto(r);
  let o = r + n, l = r, a = r - e;
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
function vr(i, e) {
  for (let t = e, r = i.length - 1; t < r; t++)
    i[t] = i[t + 1];
  i.pop();
}
function kr(i, e, t) {
  for (let r = i.length - 1; r >= e; r--)
    i[r + 1] = i[r];
  i[e] = t;
}
function sa(i, e) {
  let t = -1, r = 1e9;
  for (let n = 0; n < e.length; n++)
    (e[n] - r || i[n].endSide - i[t].endSide) < 0 && (t = n, r = e[n]);
  return t;
}
function _n(i, e, t = i.length) {
  let r = 0;
  for (let n = 0; n < t && n < i.length; )
    i.charCodeAt(n) == 9 ? (r += e - r % e, n++) : (r++, n = he(i, n));
  return r;
}
function vp(i, e, t, r) {
  for (let n = 0, s = 0; ; ) {
    if (s >= e)
      return n;
    if (n == i.length)
      break;
    s += i.charCodeAt(n) == 9 ? t - s % t : 1, n = he(i, n);
  }
  return i.length;
}
const eo = "ͼ", oa = typeof Symbol > "u" ? "__" + eo : Symbol.for(eo), to = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), la = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class zt {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: r } = t || {};
    function n(o) {
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
          s(n(O), d, c, f);
        } else d != null && c.push(O.replace(/_.*/, "").replace(/[A-Z]/g, (p) => "-" + p.toLowerCase()) + ": " + d + ";");
      }
      (c.length || f) && a.push((r && !u && !h ? o.map(r) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in e) s(n(o), e[o], this.rules);
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
    let e = la[oa] || 1;
    return la[oa] = e + 1, eo + e.toString(36);
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
  static mount(e, t, r) {
    let n = e[to], s = r && r.nonce;
    n ? s && n.setNonce(s) : n = new kp(e, s), n.mount(Array.isArray(t) ? t : [t], e);
  }
}
let aa = /* @__PURE__ */ new Map();
class kp {
  constructor(e, t) {
    let r = e.ownerDocument || e, n = r.defaultView;
    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
      let s = aa.get(r);
      if (s) return e[to] = s;
      this.sheet = new n.CSSStyleSheet(), aa.set(r, this);
    } else
      this.styleTag = r.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[to] = this;
  }
  mount(e, t) {
    let r = this.sheet, n = 0, s = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < s && a > -1 && (this.modules.splice(a, 1), s--, a = -1), a == -1) {
        if (this.modules.splice(s++, 0, l), r) for (let h = 0; h < l.rules.length; h++)
          r.insertRule(l.rules[h], n++);
      } else {
        for (; s < a; ) n += this.modules[s++].rules.length;
        n += l.rules.length, s++;
      }
    }
    if (r)
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
}, Pp = typeof navigator < "u" && /Mac/.test(navigator.platform), Tp = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ae = 0; ae < 10; ae++) Vt[48 + ae] = Vt[96 + ae] = String(ae);
for (var ae = 1; ae <= 24; ae++) Vt[ae + 111] = "F" + ae;
for (var ae = 65; ae <= 90; ae++)
  Vt[ae] = String.fromCharCode(ae + 32), Ji[ae] = String.fromCharCode(ae);
for (var ss in Vt) Ji.hasOwnProperty(ss) || (Ji[ss] = Vt[ss]);
function Zp(i) {
  var e = Pp && i.metaKey && i.shiftKey && !i.ctrlKey && !i.altKey || Tp && i.shiftKey && i.key && i.key.length == 1 || i.key == "Unidentified", t = !e && i.key || (i.shiftKey ? Ji : Vt)[i.keyCode] || i.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
let pe = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, io = typeof document < "u" ? document : { documentElement: { style: {} } };
const ro = /* @__PURE__ */ /Edge\/(\d+)/.exec(pe.userAgent), Jc = /* @__PURE__ */ /MSIE \d/.test(pe.userAgent), no = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(pe.userAgent), qn = !!(Jc || no || ro), ha = !qn && /* @__PURE__ */ /gecko\/(\d+)/i.test(pe.userAgent), os = !qn && /* @__PURE__ */ /Chrome\/(\d+)/.exec(pe.userAgent), Cp = "webkitFontSmoothing" in io.documentElement.style, so = !qn && /* @__PURE__ */ /Apple Computer/.test(pe.vendor), ca = so && (/* @__PURE__ */ /Mobile\/\w+/.test(pe.userAgent) || pe.maxTouchPoints > 2);
var $ = {
  mac: ca || /* @__PURE__ */ /Mac/.test(pe.platform),
  windows: /* @__PURE__ */ /Win/.test(pe.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(pe.platform),
  ie: qn,
  ie_version: Jc ? io.documentMode || 6 : no ? +no[1] : ro ? +ro[1] : 0,
  gecko: ha,
  gecko_version: ha ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(pe.userAgent) || [0, 0])[1] : 0,
  chrome: !!os,
  chrome_version: os ? +os[1] : 0,
  ios: ca,
  android: /* @__PURE__ */ /Android\b/.test(pe.userAgent),
  webkit_version: Cp ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(pe.userAgent) || [0, 0])[1] : 0,
  safari: so,
  safari_version: so ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(pe.userAgent) || [0, 0])[1] : 0,
  tabSize: io.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function Uo(i, e) {
  for (let t in i)
    t == "class" && e.class ? e.class += " " + i.class : t == "style" && e.style ? e.style += ";" + i.style : e[t] = i[t];
  return e;
}
const ln = /* @__PURE__ */ Object.create(null);
function Fo(i, e, t) {
  if (i == e)
    return !0;
  i || (i = ln), e || (e = ln);
  let r = Object.keys(i), n = Object.keys(e);
  if (r.length - 0 != n.length - 0)
    return !1;
  for (let s of r)
    if (s != t && (n.indexOf(s) == -1 || i[s] !== e[s]))
      return !1;
  return !0;
}
function Ap(i, e) {
  for (let t = i.attributes.length - 1; t >= 0; t--) {
    let r = i.attributes[t].name;
    e[r] == null && i.removeAttribute(r);
  }
  for (let t in e) {
    let r = e[t];
    t == "style" ? i.style.cssText = r : i.getAttribute(t) != r && i.setAttribute(t, r);
  }
}
function ua(i, e, t) {
  let r = !1;
  if (e)
    for (let n in e)
      t && n in t || (r = !0, n == "style" ? i.style.cssText = "" : i.removeAttribute(n));
  if (t)
    for (let n in t)
      e && e[n] == t[n] || (r = !0, n == "style" ? i.style.cssText = t[n] : i.setAttribute(n, t[n]));
  return r;
}
function Xp(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < i.attributes.length; t++) {
    let r = i.attributes[t];
    e[r.name] = r.value;
  }
  return e;
}
class ur {
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
  coordsAt(e, t, r) {
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
  constructor(e, t, r, n) {
    super(), this.startSide = e, this.endSide = t, this.widget = r, this.spec = n;
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
    return new fr(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), r = !!e.block;
    return t += r && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new ti(e, t, t, r, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, r, n;
    if (e.isBlockGap)
      r = -5e8, n = 4e8;
    else {
      let { start: s, end: o } = eu(e, t);
      r = (s ? t ? -3e8 : -1 : 5e8) - 1, n = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new ti(e, r, n, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new Or(e);
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
class fr extends q {
  constructor(e) {
    let { start: t, end: r } = eu(e);
    super(t ? -1 : 5e8, r ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? Uo(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || ln;
  }
  eq(e) {
    return this == e || e instanceof fr && this.tagName == e.tagName && Fo(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
fr.prototype.point = !1;
class Or extends q {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Or && this.spec.class == e.spec.class && Fo(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
Or.prototype.mapMode = fe.TrackBefore;
Or.prototype.point = !0;
class ti extends q {
  constructor(e, t, r, n, s, o) {
    super(t, r, s, e), this.block = n, this.isReplace = o, this.mapMode = n ? t <= 0 ? fe.TrackBefore : fe.TrackAfter : fe.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? we.WidgetRange : this.startSide <= 0 ? we.WidgetBefore : we.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof ti && Rp(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
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
function eu(i, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: r } = i;
  return t == null && (t = i.inclusive), r == null && (r = i.inclusive), { start: t ?? e, end: r ?? e };
}
function Rp(i, e) {
  return i == e || !!(i && e && i.compare(e));
}
function ci(i, e, t, r = 0) {
  let n = t.length - 1;
  n >= 0 && t[n] + r >= i ? t[n] = Math.max(t[n], e) : t.push(i, e);
}
class er extends Mt {
  constructor(e, t) {
    super(), this.tagName = e, this.attributes = t;
  }
  eq(e) {
    return e == this || e instanceof er && this.tagName == e.tagName && Fo(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new er(e.tagName, e.attributes || ln);
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return z.of(e, t);
  }
}
er.prototype.startSide = er.prototype.endSide = -1;
function tr(i) {
  let e;
  return i.nodeType == 11 ? e = i.getSelection ? i : i.ownerDocument : e = i, e.getSelection();
}
function oo(i, e) {
  return e ? i == e || i.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Ir(i, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return oo(i, e.anchorNode);
  } catch {
    return !1;
  }
}
function Nr(i) {
  return i.nodeType == 3 ? ir(i, 0, i.nodeValue.length).getClientRects() : i.nodeType == 1 ? i.getClientRects() : [];
}
function Gi(i, e, t, r) {
  return t ? fa(i, e, t, r, -1) || fa(i, e, t, r, 1) : !1;
}
function _t(i) {
  for (var e = 0; ; e++)
    if (i = i.previousSibling, !i)
      return e;
}
function an(i) {
  return i.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName);
}
function fa(i, e, t, r, n) {
  for (; ; ) {
    if (i == t && e == r)
      return !0;
    if (e == (n < 0 ? 0 : yt(i))) {
      if (i.nodeName == "DIV")
        return !1;
      let s = i.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = _t(i) + (n < 0 ? 0 : 1), i = s;
    } else if (i.nodeType == 1) {
      if (i = i.childNodes[e + (n < 0 ? -1 : 0)], i.nodeType == 1 && i.contentEditable == "false")
        return !1;
      e = n < 0 ? yt(i) : 0;
    } else
      return !1;
  }
}
function yt(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
function hn(i, e) {
  let t = e ? i.left : i.right;
  return { left: t, right: t, top: i.top, bottom: i.bottom };
}
function Mp(i) {
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
function tu(i, e) {
  let t = e.width / i.offsetWidth, r = e.height / i.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - i.offsetWidth) < 1) && (t = 1), (r > 0.995 && r < 1.005 || !isFinite(r) || Math.abs(e.height - i.offsetHeight) < 1) && (r = 1), { scaleX: t, scaleY: r };
}
function zp(i, e, t, r, n, s, o, l) {
  let a = i.ownerDocument, h = a.defaultView || window;
  for (let c = i, u = !1; c && !u; )
    if (c.nodeType == 1) {
      let f, O = c == a.body, d = 1, p = 1;
      if (O)
        f = Mp(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (u = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let Q = c.getBoundingClientRect();
        ({ scaleX: d, scaleY: p } = tu(c, Q)), f = {
          left: Q.left,
          right: Q.left + c.clientWidth * d,
          top: Q.top,
          bottom: Q.top + c.clientHeight * p
        };
      }
      let g = 0, b = 0;
      if (n == "nearest")
        e.top < f.top ? (b = e.top - (f.top + o), t > 0 && e.bottom > f.bottom + b && (b = e.bottom - f.bottom + o)) : e.bottom > f.bottom && (b = e.bottom - f.bottom + o, t < 0 && e.top - b < f.top && (b = e.top - (f.top + o)));
      else {
        let Q = e.bottom - e.top, w = f.bottom - f.top;
        b = (n == "center" && Q <= w ? e.top + Q / 2 - w / 2 : n == "start" || n == "center" && t < 0 ? e.top - o : e.bottom - w + o) - f.top;
      }
      if (r == "nearest" ? e.left < f.left ? (g = e.left - (f.left + s), t > 0 && e.right > f.right + g && (g = e.right - f.right + s)) : e.right > f.right && (g = e.right - f.right + s, t < 0 && e.left < f.left + g && (g = e.left - (f.left + s))) : g = (r == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : r == "start" == l ? e.left - s : e.right - (f.right - f.left) + s) - f.left, g || b)
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
          }, Q && Math.abs(Q - g) < 1 && (r = "nearest"), w && Math.abs(w - b) < 1 && (n = "nearest");
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
function Vp(i) {
  let e = i.ownerDocument, t, r;
  for (let n = i.parentNode; n && !(n == e.body || t && r); )
    if (n.nodeType == 1)
      !r && n.scrollHeight > n.clientHeight && (r = n), !t && n.scrollWidth > n.clientWidth && (t = n), n = n.assignedSlot || n.parentNode;
    else if (n.nodeType == 11)
      n = n.host;
    else
      break;
  return { x: t, y: r };
}
class _p {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: r } = e;
    this.set(t, Math.min(e.anchorOffset, t ? yt(t) : 0), r, Math.min(e.focusOffset, r ? yt(r) : 0));
  }
  set(e, t, r, n) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = r, this.focusOffset = n;
  }
}
let It = null;
$.safari && $.safari_version >= 26 && (It = !1);
function iu(i) {
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
      let r = e[t++], n = e[t++], s = e[t++];
      r.scrollTop != n && (r.scrollTop = n), r.scrollLeft != s && (r.scrollLeft = s);
    }
  }
}
let Oa;
function ir(i, e, t = e) {
  let r = Oa || (Oa = document.createRange());
  return r.setEnd(i, t), r.setStart(i, e), r;
}
function ui(i, e, t, r) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  r && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = r);
  let s = new KeyboardEvent("keydown", n);
  s.synthetic = !0, i.dispatchEvent(s);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, i.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented;
}
function qp(i) {
  for (; i; ) {
    if (i && (i.nodeType == 9 || i.nodeType == 11 && i.host))
      return i;
    i = i.assignedSlot || i.parentNode;
  }
  return null;
}
function Yp(i, e) {
  let t = e.focusNode, r = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != r)
    return !1;
  for (r = Math.min(r, yt(t)); ; )
    if (r) {
      if (t.nodeType != 1)
        return !1;
      let n = t.childNodes[r - 1];
      n.contentEditable == "false" ? r-- : (t = n, r = yt(t));
    } else {
      if (t == i)
        return !0;
      r = _t(t), t = t.parentNode;
    }
}
function ru(i) {
  return i.scrollTop > Math.max(1, i.scrollHeight - i.clientHeight - 4);
}
function nu(i, e) {
  for (let t = i, r = e; ; ) {
    if (t.nodeType == 3 && r > 0)
      return { node: t, offset: r };
    if (t.nodeType == 1 && r > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[r - 1], r = yt(t);
    } else if (t.parentNode && !an(t))
      r = _t(t), t = t.parentNode;
    else
      return null;
  }
}
function su(i, e) {
  for (let t = i, r = e; ; ) {
    if (t.nodeType == 3 && r < t.nodeValue.length)
      return { node: t, offset: r };
    if (t.nodeType == 1 && r < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[r], r = 0;
    } else if (t.parentNode && !an(t))
      r = _t(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class Le {
  constructor(e, t, r = !0) {
    this.node = e, this.offset = t, this.precise = r;
  }
  static before(e, t) {
    return new Le(e.parentNode, _t(e), t);
  }
  static after(e, t) {
    return new Le(e.parentNode, _t(e) + 1, t);
  }
}
var F = /* @__PURE__ */ (function(i) {
  return i[i.LTR = 0] = "LTR", i[i.RTL = 1] = "RTL", i;
})(F || (F = {}));
const ii = F.LTR, Ho = F.RTL;
function ou(i) {
  let e = [];
  for (let t = 0; t < i.length; t++)
    e.push(1 << +i[t]);
  return e;
}
const Ep = /* @__PURE__ */ ou("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Wp = /* @__PURE__ */ ou("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), lo = /* @__PURE__ */ Object.create(null), Ke = [];
for (let i of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ i.charCodeAt(0), t = /* @__PURE__ */ i.charCodeAt(1);
  lo[e] = t, lo[t] = -e;
}
function lu(i) {
  return i <= 247 ? Ep[i] : 1424 <= i && i <= 1524 ? 2 : 1536 <= i && i <= 1785 ? Wp[i - 1536] : 1774 <= i && i <= 2220 ? 4 : 8192 <= i && i <= 8204 ? 256 : 64336 <= i && i <= 65023 ? 4 : 1;
}
const Dp = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
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
  constructor(e, t, r) {
    this.from = e, this.to = t, this.level = r;
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
  static find(e, t, r, n) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == r)
          return o;
        (s < 0 || (n != 0 ? n < 0 ? l.from < t : l.to > t : e[s].level > l.level)) && (s = o);
      }
    }
    if (s < 0)
      throw new RangeError("Index out of range");
    return s;
  }
}
function au(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++) {
    let r = i[t], n = e[t];
    if (r.from != n.from || r.to != n.to || r.direction != n.direction || !au(r.inner, n.inner))
      return !1;
  }
  return !0;
}
const L = [];
function Bp(i, e, t, r, n) {
  for (let s = 0; s <= r.length; s++) {
    let o = s ? r[s - 1].to : e, l = s < r.length ? r[s].from : t, a = s ? 256 : n;
    for (let h = o, c = a, u = a; h < l; h++) {
      let f = lu(i.charCodeAt(h));
      f == 512 ? f = c : f == 8 && u == 4 && (f = 16), L[h] = f == 4 ? 2 : f, f & 7 && (u = f), c = f;
    }
    for (let h = o, c = a, u = a; h < l; h++) {
      let f = L[h];
      if (f == 128)
        h < l - 1 && c == L[h + 1] && c & 24 ? f = L[h] = c : L[h] = 256;
      else if (f == 64) {
        let O = h + 1;
        for (; O < l && L[O] == 64; )
          O++;
        let d = h && c == 8 || O < t && L[O] == 8 ? u == 1 ? 1 : 8 : 256;
        for (let p = h; p < O; p++)
          L[p] = d;
        h = O - 1;
      } else f == 8 && u == 1 && (L[h] = 1);
      c = f, f & 7 && (u = f);
    }
  }
}
function Lp(i, e, t, r, n) {
  let s = n == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= r.length; o++) {
    let h = o ? r[o - 1].to : e, c = o < r.length ? r[o].from : t;
    for (let u = h, f, O, d; u < c; u++)
      if (O = lo[f = i.charCodeAt(u)])
        if (O < 0) {
          for (let p = l - 3; p >= 0; p -= 3)
            if (Ke[p + 1] == -O) {
              let g = Ke[p + 2], b = g & 2 ? n : g & 4 ? g & 1 ? s : n : 0;
              b && (L[u] = L[Ke[p]] = b), l = p;
              break;
            }
        } else {
          if (Ke.length == 189)
            break;
          Ke[l++] = u, Ke[l++] = f, Ke[l++] = a;
        }
      else if ((d = L[u]) == 2 || d == 1) {
        let p = d == n;
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
function jp(i, e, t, r) {
  for (let n = 0, s = r; n <= t.length; n++) {
    let o = n ? t[n - 1].to : i, l = n < t.length ? t[n].from : e;
    for (let a = o; a < l; ) {
      let h = L[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (n == t.length)
              break;
            c = t[n++].to, l = n < t.length ? t[n].from : e;
          } else if (L[c] == 256)
            c++;
          else
            break;
        let u = s == 1, f = (c < e ? L[c] : r) == 1, O = u == f ? u ? 1 : 2 : r;
        for (let d = c, p = n, g = p ? t[p - 1].to : i; d > a; )
          d == g && (d = t[--p].from, g = p ? t[p - 1].to : i), L[--d] = O;
        a = c;
      } else
        s = h, a++;
    }
  }
}
function ao(i, e, t, r, n, s, o) {
  let l = r % 2 ? 2 : 1;
  if (r % 2 == n % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0, u = !1;
      if (h == s.length || a < s[h].from) {
        let p = L[a];
        p != l && (c = !1, u = p == 16);
      }
      let f = !c && l == 1 ? [] : null, O = c ? r : r + 1, d = a;
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
                if (L[g] == l)
                  break e;
                break;
              }
            }
          if (h++, f)
            f.push(p);
          else {
            p.from > a && o.push(new mt(a, p.from, O));
            let g = p.direction == ii != !(O % 2);
            ho(i, g ? r + 1 : r, n, p.inner, p.from, p.to, o), a = p.to;
          }
          d = p.to;
        } else {
          if (d == t || (c ? L[d] != l : L[d] == l))
            break;
          d++;
        }
      f ? ao(i, a, d, r + 1, n, f, o) : a < d && o.push(new mt(a, d, O)), a = d;
    }
  else
    for (let a = t, h = s.length; a > e; ) {
      let c = !0, u = !1;
      if (!h || a > s[h - 1].to) {
        let p = L[a - 1];
        p != l && (c = !1, u = p == 16);
      }
      let f = !c && l == 1 ? [] : null, O = c ? r : r + 1, d = a;
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
                if (L[g - 1] == l)
                  break e;
                break;
              }
            }
          if (f)
            f.push(p);
          else {
            p.to < a && o.push(new mt(p.to, a, O));
            let g = p.direction == ii != !(O % 2);
            ho(i, g ? r + 1 : r, n, p.inner, p.from, p.to, o), a = p.from;
          }
          d = p.from;
        } else {
          if (d == e || (c ? L[d - 1] != l : L[d - 1] == l))
            break;
          d--;
        }
      f ? ao(i, d, a, r + 1, n, f, o) : d < a && o.push(new mt(d, a, O)), a = d;
    }
}
function ho(i, e, t, r, n, s, o) {
  let l = e % 2 ? 2 : 1;
  Bp(i, n, s, r, l), Lp(i, n, s, r, l), jp(n, s, r, l), ao(i, n, s, e, t, r, o);
}
function Ip(i, e, t) {
  if (!i)
    return [new mt(0, 0, e == Ho ? 1 : 0)];
  if (e == ii && !t.length && !Dp.test(i))
    return hu(i.length);
  if (t.length)
    for (; i.length > L.length; )
      L[L.length] = 256;
  let r = [], n = e == ii ? 0 : 1;
  return ho(i, n, n, t, 0, i.length, r), r;
}
function hu(i) {
  return [new mt(0, i, 0)];
}
let cu = "";
function Np(i, e, t, r, n) {
  var s;
  let o = r.head - i.from, l = mt.find(e, o, (s = r.bidiLevel) !== null && s !== void 0 ? s : -1, r.assoc), a = e[l], h = a.side(n, t);
  if (o == h) {
    let f = l += n ? 1 : -1;
    if (f < 0 || f >= e.length)
      return null;
    a = e[l = f], o = a.side(!n, t), h = a.side(n, t);
  }
  let c = he(i.text, o, a.forward(n, t));
  (c < a.from || c > a.to) && (c = h), cu = i.text.slice(Math.min(o, c), Math.max(o, c));
  let u = l == (n ? e.length - 1 : 0) ? null : e[l + (n ? 1 : -1)];
  return u && c == h && u.level + (n ? 0 : 1) < a.level ? y.cursor(u.side(!n, t) + i.from, u.forward(n, t) ? 1 : -1, u.level) : y.cursor(c + i.from, a.forward(n, t) ? -1 : 1, a.level);
}
function Gp(i, e, t) {
  for (let r = e; r < t; r++) {
    let n = lu(i.charCodeAt(r));
    if (n == 1)
      return ii;
    if (n == 2 || n == 4)
      return Ho;
  }
  return ii;
}
const uu = /* @__PURE__ */ k.define(), fu = /* @__PURE__ */ k.define(), Ou = /* @__PURE__ */ k.define(), du = /* @__PURE__ */ k.define(), co = /* @__PURE__ */ k.define(), pu = /* @__PURE__ */ k.define(), mu = /* @__PURE__ */ k.define(), Ko = /* @__PURE__ */ k.define(), Jo = /* @__PURE__ */ k.define(), gu = /* @__PURE__ */ k.define({
  combine: (i) => i.some((e) => e)
}), Up = /* @__PURE__ */ k.define({
  combine: (i) => i.some((e) => e)
}), bu = /* @__PURE__ */ k.define();
class fi {
  constructor(e, t = "nearest", r = "nearest", n = 5, s = 5, o = !1) {
    this.range = e, this.y = t, this.x = r, this.yMargin = n, this.xMargin = s, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new fi(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new fi(y.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Pr = /* @__PURE__ */ _.define({ map: (i, e) => i.map(e) }), yu = /* @__PURE__ */ _.define();
function Pe(i, e, t) {
  let r = i.facet(du);
  r.length ? r[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const pt = /* @__PURE__ */ k.define({ combine: (i) => i.length ? i[0] : !0 });
let Fp = 0;
const si = /* @__PURE__ */ k.define({
  combine(i) {
    return i.filter((e, t) => {
      for (let r = 0; r < t; r++)
        if (i[r].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class Te {
  constructor(e, t, r, n, s) {
    this.id = e, this.create = t, this.domEventHandlers = r, this.domEventObservers = n, this.baseExtensions = s(this), this.extension = this.baseExtensions.concat(si.of({ plugin: this, arg: void 0 }));
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
    const { eventHandlers: r, eventObservers: n, provide: s, decorations: o } = t || {};
    return new Te(Fp++, e, r, n, (l) => {
      let a = [];
      return o && a.push(rr.of((h) => {
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
    return Te.define((r, n) => new e(r, n), t);
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
          } catch (r) {
            if (Pe(t.state, r, "CodeMirror plugin crashed"), this.value.destroy)
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
      } catch (r) {
        Pe(e.state, r, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Qu = /* @__PURE__ */ k.define(), el = /* @__PURE__ */ k.define(), rr = /* @__PURE__ */ k.define(), Su = /* @__PURE__ */ k.define(), xu = /* @__PURE__ */ k.define(), dr = /* @__PURE__ */ k.define(), wu = /* @__PURE__ */ k.define();
function da(i, e) {
  let t = i.state.facet(wu);
  if (!t.length)
    return t;
  let r = t.map((s) => s instanceof Function ? s(i) : s), n = [];
  return z.spans(r, e.from, e.to, {
    point() {
    },
    span(s, o, l, a) {
      let h = s - e.from, c = o - e.from, u = n;
      for (let f = l.length - 1; f >= 0; f--, a--) {
        let O = l[f].spec.bidiIsolate, d;
        if (O == null && (O = Gp(e.text, h, c)), a > 0 && u.length && (d = u[u.length - 1]).to == h && d.direction == O)
          d.to = c, u = d.inner;
        else {
          let p = { from: h, to: c, direction: O, inner: [] };
          u.push(p), u = p.inner;
        }
      }
    }
  }), n;
}
const $u = /* @__PURE__ */ k.define();
function tl(i) {
  let e = 0, t = 0, r = 0, n = 0;
  for (let s of i.state.facet($u)) {
    let o = s(i);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (r = Math.max(r, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: e, right: t, top: r, bottom: n };
}
const Di = /* @__PURE__ */ k.define();
class Me {
  constructor(e, t, r, n) {
    this.fromA = e, this.toA = t, this.fromB = r, this.toB = n;
  }
  join(e) {
    return new Me(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, r = this;
    for (; t > 0; t--) {
      let n = e[t - 1];
      if (!(n.fromA > r.toA)) {
        if (n.toA < r.fromA)
          break;
        r = r.join(n), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, r), e;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let r = [];
    for (let n = 0, s = 0, o = 0; ; ) {
      let l = n < e.length ? e[n].fromB : 1e9, a = s < t.length ? t[s] : 1e9, h = Math.min(l, a);
      if (h == 1e9)
        break;
      let c = h + o, u = h, f = c;
      for (; ; )
        if (s < t.length && t[s] <= u) {
          let O = t[s + 1];
          s += 2, u = Math.max(u, O);
          for (let d = n; d < e.length && e[d].fromB <= u; d++)
            o = e[d].toA - e[d].toB;
          f = Math.max(f, O + o);
        } else if (n < e.length && e[n].fromB <= u) {
          let O = e[n++];
          u = Math.max(u, O.toB), f = Math.max(f, O.toA), o = O.toA - O.toB;
        } else
          break;
      r.push(new Me(c, f, h, u));
    }
    return r;
  }
}
class cn {
  constructor(e, t, r) {
    this.view = e, this.state = t, this.transactions = r, this.flags = 0, this.startState = e.state, this.changes = re.empty(this.startState.doc.length);
    for (let s of r)
      this.changes = this.changes.compose(s.changes);
    let n = [];
    this.changes.iterChangedRanges((s, o, l, a) => n.push(new Me(s, o, l, a))), this.changedRanges = n;
  }
  /**
  @internal
  */
  static create(e, t, r) {
    return new cn(e, t, r);
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
const Hp = [];
class ne {
  constructor(e, t, r = 0) {
    this.dom = e, this.length = t, this.flags = r, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return Hp;
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
      t && Ap(this.dom, t);
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
    let r = t;
    for (let n of this.children) {
      if (n == e)
        return r;
      r += n.length + n.breakAfter;
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
    let r = _t(this.dom), n = this.length ? e > 0 : t > 0;
    return new Le(this.parent.dom, r + (n ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent)
      if (e instanceof En)
        return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class Yn extends ne {
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
    let t = this.dom, r = null, n, s = (e == null ? void 0 : e.node) == t ? e : null, o = 0;
    for (let l of this.children) {
      if (l.sync(e), o += l.length + l.breakAfter, n = r ? r.nextSibling : t.firstChild, s && n != l.dom && (s.written = !0), l.dom.parentNode == t)
        for (; n && n != l.dom; )
          n = pa(n);
      else
        t.insertBefore(l.dom, n);
      r = l.dom;
    }
    for (n = r ? r.nextSibling : t.firstChild, s && n && (s.written = !0); n; )
      n = pa(n);
    this.length = o;
  }
}
function pa(i) {
  let e = i.nextSibling;
  return i.parentNode.removeChild(i), e;
}
class En extends Yn {
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
      let t = ne.get(e);
      if (t && this.owns(t))
        return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], r = this, n = 0, s = 0; ; )
      if (n == r.children.length) {
        if (!t.length)
          return;
        r = r.parent, r.breakAfter && s++, n = t.pop();
      } else {
        let o = r.children[n++];
        if (o instanceof Rt)
          t.push(n), r = o, n = 0;
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
    let r, n = -1, s, o = -1;
    if (this.blockTiles((l, a) => {
      let h = a + l.length;
      if (e >= a && e <= h) {
        if (l.isWidget() && t >= -1 && t <= 1) {
          if (l.flags & 32)
            return !0;
          l.flags & 16 && (r = void 0);
        }
        (a < e || e == h && (t < -1 ? l.length : l.covers(1))) && (!r || !l.isWidget() && r.isWidget()) && (r = l, n = e - a), (h > e || e == a && (t > 1 ? l.length : l.covers(-1))) && (!s || !l.isWidget() && s.isWidget()) && (s = l, o = e - a);
      }
    }), !r && !s)
      throw new Error("No tile at position " + e);
    return r && t < 0 || !s ? { tile: r, offset: n } : { tile: s, offset: o };
  }
}
class Rt extends Yn {
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
    let r = new Rt(t || document.createElement(e.tagName), e);
    return t || (r.flags |= 4), r;
  }
}
class Qi extends Yn {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, r) {
    let n = new Qi(t || document.createElement("div"), e);
    return (!t || !r) && (n.flags |= 4), n;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(e, t, r) {
    let n = null, s = -1, o = null, l = -1;
    function a(c, u) {
      for (let f = 0, O = 0; f < c.children.length && O <= u; f++) {
        let d = c.children[f], p = O + d.length;
        p >= u && (d.isComposite() ? a(d, u - O) : (!o || o.isHidden && (t > 0 || r && Jp(o, d))) && (p > u || d.flags & 32) ? (o = d, l = u - O) : (O < u || d.flags & 16 && !d.isHidden) && (n = d, s = u - O)), O = p;
      }
    }
    a(this, e);
    let h = (t < 0 ? n : o) || n || o;
    return h ? { tile: h, offset: h == n ? s : l } : null;
  }
  coordsIn(e, t) {
    let r = this.resolveInline(e, t, !0);
    return r ? r.tile.coordsIn(Math.max(0, r.offset), t) : Kp(this);
  }
  domIn(e, t) {
    let r = this.resolveInline(e, t);
    if (r) {
      let { tile: n, offset: s } = r;
      if (this.dom.contains(n.dom))
        return n.isText() ? new Le(n.dom, Math.min(n.dom.nodeValue.length, s)) : n.domPosFor(s, n.flags & 16 ? 1 : n.flags & 32 ? -1 : t);
      let o = r.tile.parent, l = !1;
      for (let a of o.children) {
        if (l)
          return new Le(a.dom, 0);
        a == r.tile && (l = !0);
      }
    }
    return new Le(this.dom, 0);
  }
}
function Kp(i) {
  let e = i.dom.lastChild;
  if (!e)
    return i.dom.getBoundingClientRect();
  let t = Nr(e);
  return t[t.length - 1] || null;
}
function Jp(i, e) {
  let t = i.coordsIn(0, 1), r = e.coordsIn(0, 1);
  return t && r && r.top < t.bottom;
}
class Se extends Yn {
  constructor(e, t) {
    super(e), this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let r = new Se(t || document.createElement(e.tagName), e);
    return t || (r.flags |= 4), r;
  }
}
class Ft extends ne {
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
    let r = this.dom.nodeValue.length;
    e > r && (e = r);
    let n = e, s = e, o = 0;
    e == 0 && t < 0 || e == r && t >= 0 ? $.chrome || $.gecko || (e ? (n--, o = 1) : s < r && (s++, o = -1)) : t < 0 ? n-- : s < r && s++;
    let l = ir(this.dom, n, s).getClientRects();
    if (!l.length)
      return null;
    let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
    return $.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? hn(a, o < 0) : a || null;
  }
  static of(e, t) {
    let r = new Ft(t || document.createTextNode(e), e);
    return t || (r.flags |= 2), r;
  }
}
class Si extends ne {
  constructor(e, t, r, n) {
    super(e, t, n), this.widget = r;
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
  coordsInWidget(e, t, r) {
    let n = this.widget.coordsAt(this.dom, e, t);
    if (n)
      return n;
    if (r)
      return hn(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let s = this.dom.getClientRects(), o = null;
      if (!s.length)
        return null;
      let l = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let a = l ? s.length - 1 : 0; o = s[a], !(e > 0 ? a == 0 : a == s.length - 1 || o.top < o.bottom); a += l ? -1 : 1)
        ;
      return hn(o, !l);
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
  static of(e, t, r, n, s) {
    return s || (s = e.toDOM(t), e.editable || (s.contentEditable = "false")), new Si(s, r, e, n);
  }
}
class un extends ne {
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
class em {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, r) {
    let { tile: n, index: s, beforeBreak: o, parents: l } = this;
    for (; e || t > 0; )
      if (n.isComposite())
        if (o) {
          if (!e)
            break;
          r && r.break(), e--, o = !1;
        } else if (s == n.children.length) {
          if (!e && !l.length)
            break;
          r && r.leave(n), o = !!n.breakAfter, { tile: n, index: s } = l.pop(), s++;
        } else {
          let a = n.children[s], h = a.breakAfter;
          (t > 0 ? a.length <= e : a.length < e) && (!r || r.skip(a, 0, a.length) !== !1 || !a.isComposite) ? (o = !!h, s++, e -= a.length) : (l.push({ tile: n, index: s }), n = a, s = 0, r && a.isComposite() && r.enter(a));
        }
      else if (s == n.length)
        o = !!n.breakAfter, { tile: n, index: s } = l.pop(), s++;
      else if (e) {
        let a = Math.min(e, n.length - s);
        r && r.skip(n, s, s + a), e -= a, s += a;
      } else
        break;
    return this.tile = n, this.index = s, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class tm {
  constructor(e, t, r, n) {
    this.from = e, this.to = t, this.wrapper = r, this.rank = n;
  }
}
class im {
  constructor(e, t, r) {
    this.cache = e, this.root = t, this.blockWrappers = r, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, r, n) {
    var s;
    this.flushBuffer();
    let o = this.ensureMarks(t, r), l = o.lastChild;
    if (l && l.isText() && !(l.flags & 8)) {
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
      let a = o.children[o.children.length - 1] = new Ft(l.dom, l.text + e);
      a.parent = o;
    } else
      o.append(n || Ft.of(e, (s = this.cache.find(Ft)) === null || s === void 0 ? void 0 : s.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let r = this.curLine;
    r.dom != t.line.dom && (r.setDOM(this.cache.reused.has(t.line) ? as(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let n = r;
    for (let o = t.marks.length - 1; o >= 0; o--) {
      let l = t.marks[o], a = n.lastChild;
      if (a instanceof Se && a.mark.eq(l.mark))
        a.dom != l.dom && a.setDOM(as(l.dom)), n = a;
      else {
        if (this.cache.reused.get(l)) {
          let c = ne.get(l.dom);
          c && c.setDOM(as(l.dom));
        }
        let h = Se.of(l.mark, l.dom);
        n.append(h), n = h;
      }
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
    }
    let s = new Ft(e.text, e.text.nodeValue);
    s.flags |= 8, n.append(s);
  }
  addInlineWidget(e, t, r) {
    let n = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    n || this.flushBuffer();
    let s = this.ensureMarks(t, r);
    !n && !(e.flags & 16) && s.append(this.getBuffer(1)), s.append(e), this.pos += e.length, this.afterWidget = e;
  }
  addMark(e, t, r) {
    this.flushBuffer(), this.ensureMarks(t, r).append(e), this.pos += e.length, this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e, this.pos += e;
  }
  addLineStart(e, t) {
    var r;
    e || (e = vu);
    let n = Qi.start(e, t || ((r = this.cache.find(Qi)) === null || r === void 0 ? void 0 : r.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = n);
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
    var r;
    let n = this.curLine;
    for (let s = e.length - 1; s >= 0; s--) {
      let o = e[s], l;
      if (t > 0 && (l = n.lastChild) && l instanceof Se && l.mark.eq(o))
        n = l, t--;
      else {
        let a = Se.of(o, (r = this.cache.find(Se, (h) => h.mark.eq(o))) === null || r === void 0 ? void 0 : r.dom);
        n.append(a), n = a, t = 0;
      }
    }
    return n;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !ma(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !($.ios && ma(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
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
        let t = new tm(e.from, e.to, e.value, e.rank), r = this.wrappers.length;
        for (; r > 0 && (this.wrappers[r - 1].rank - t.rank || this.wrappers[r - 1].to - t.to) < 0; )
          r--;
        this.wrappers.splice(r, 0, t);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let r of this.wrappers) {
      let n = t.lastChild;
      if (r.from < this.pos && n instanceof Rt && n.wrapper.eq(r.wrapper))
        t = n;
      else {
        let s = Rt.of(r.wrapper, (e = this.cache.find(Rt, (o) => o.wrapper.eq(r.wrapper))) === null || e === void 0 ? void 0 : e.dom);
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
    let t = 2 | (e < 0 ? 16 : 32), r = this.cache.find(
      un,
      void 0,
      1
      /* Reused.Full */
    );
    return r && (r.flags = t), r || new un(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class rm {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: n, lineBreak: s, done: o } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, o)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = n;
      let l = this.textOff = Math.min(e, n.length);
      return s ? null : n.slice(0, l);
    }
    let t = Math.min(this.text.length, this.textOff + e), r = this.text.slice(this.textOff, t);
    return this.textOff = t, r;
  }
}
const fn = [Si, Qi, Ft, Se, un, Rt, En];
for (let i = 0; i < fn.length; i++)
  fn[i].bucket = i;
class nm {
  constructor(e) {
    this.view = e, this.buckets = fn.map(() => []), this.index = fn.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(e) {
    let t = e.constructor.bucket, r = this.buckets[t];
    r.length < 6 ? r.push(e) : r[
      this.index[t] = (this.index[t] + 1) % 6
      /* C.Bucket */
    ] = e;
  }
  find(e, t, r = 2) {
    let n = e.bucket, s = this.buckets[n], o = this.index[n];
    for (let l = s.length - 1; l >= 0; l--) {
      let a = (l + o) % s.length, h = s[a];
      if ((!t || t(h)) && !this.reused.has(h))
        return s.splice(a, 1), a < o && this.index[n]--, this.reused.set(h, r), h;
    }
    return null;
  }
  findWidget(e, t, r) {
    let n = this.buckets[0];
    if (n.length)
      for (let s = 0, o = 0; ; s++) {
        if (s == n.length) {
          if (o)
            return null;
          o = 1, s = 0;
        }
        let l = n[s];
        if (!this.reused.has(l) && (o == 0 ? l.widget.compare(e) : l.widget.constructor == e.constructor && e.updateDOM(l.dom, this.view)))
          return n.splice(s, 1), s < this.index[0] && this.index[0]--, this.reused.set(
            l,
            1
            /* Reused.Full */
          ), l.length = t, l.flags = l.flags & -498 | r, l;
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
class sm {
  constructor(e, t, r, n, s) {
    this.view = e, this.decorations = n, this.disallowBlockEffectsFor = s, this.openWidget = !1, this.openMarks = 0, this.cache = new nm(e), this.text = new rm(e.state.doc), this.builder = new im(this.cache, new En(e, e.contentDOM), z.iter(r)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new em(t);
  }
  run(e, t) {
    let r = t && this.getCompositionContext(t.text);
    for (let n = 0, s = 0, o = 0; ; ) {
      let l = o < e.length ? e[o++] : null, a = l ? l.fromA : this.old.root.length;
      if (a > n) {
        let h = a - n;
        this.preserve(h, !o, !l), n = a, s += h;
      }
      if (!l)
        break;
      this.forward(l.fromA, l.toA), t && l.fromA <= t.range.fromA && l.toA >= t.range.toA ? (this.emit(s, t.range.fromB), this.builder.addComposition(t, r), this.emit(t.range.toB, l.toB)) : this.emit(s, l.toB), s = l.toB, n = l.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, r) {
    let n = am(this.old), s = this.openMarks;
    this.old.advance(e, r ? 1 : -1, {
      skip: (o, l, a) => {
        if (o.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(a - l);
          else {
            let h = a > 0 || l < o.length ? Si.of(o.widget, this.view, a - l, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
            h.flags & 256 ? (h.flags &= -2, this.builder.addBlockWidget(h)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(h, n, s), s = n.length);
          }
        else if (o.isText())
          this.builder.ensureLine(null), !l && a == o.length ? this.builder.addText(o.text, n, s, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(l, a), n, s)), s = n.length;
        else if (o.isLine())
          o.flags &= -2, this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), this.builder.addLine(o);
        else if (o instanceof un)
          this.cache.add(o);
        else if (o instanceof Se)
          this.builder.ensureLine(null), this.builder.addMark(o, n, s), this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), s = n.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (o) => {
        o.isLine() ? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o)) : (this.cache.add(o), o instanceof Se && n.unshift(o.mark)), this.openWidget = !1;
      },
      leave: (o) => {
        o.isLine() ? n.length && (n.length = s = 0) : o instanceof Se && (n.shift(), s = Math.min(s, n.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(e);
  }
  emit(e, t) {
    let r = null, n = this.builder, s = 0, o = z.spans(this.decorations, e, t, {
      point: (l, a, h, c, u, f) => {
        if (h instanceof ti) {
          if (this.disallowBlockEffectsFor[f]) {
            if (h.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (a > this.view.state.doc.lineAt(l).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (s = c.length, u > c.length)
            n.continueWidget(a - l);
          else {
            let O = h.widget || (h.block ? xi.block : xi.inline), d = om(h), p = this.cache.findWidget(O, a - l, d) || Si.of(O, this.view, a - l, d);
            h.block ? (h.startSide > 0 && n.addLineStartIfNotCovered(r), n.addBlockWidget(p)) : (n.ensureLine(r), n.addInlineWidget(p, c, u));
          }
          r = null;
        } else
          r = lm(r, h);
        a > l && this.text.skip(a - l);
      },
      span: (l, a, h, c) => {
        for (let u = l; u < a; ) {
          let f = this.text.next(Math.min(512, a - u));
          f == null ? (n.addLineStartIfNotCovered(r), n.addBreak(), u++) : (n.ensureLine(r), n.addText(f, h, c), u += f.length), r = null;
        }
      }
    });
    n.addLineStartIfNotCovered(r), this.openWidget = o > s, this.openMarks = o;
  }
  forward(e, t) {
    this.old.advance(t - e, 1, {
      skip: (r, n, s) => {
        (r.isText() || s == r.length) && this.cache.add(r);
      },
      enter: (r) => this.cache.add(r),
      leave: () => {
      },
      break: () => {
      }
    });
  }
  getCompositionContext(e) {
    let t = [], r = null;
    for (let n = e.parentNode; ; n = n.parentNode) {
      let s = ne.get(n);
      if (n == this.view.contentDOM)
        break;
      s instanceof Se ? t.push(s) : s != null && s.isLine() ? r = s : n.nodeName == "DIV" && !r && n != this.view.contentDOM ? r = new Qi(n, vu) : t.push(Se.of(new fr({ tagName: n.nodeName.toLowerCase(), attributes: Xp(n) }), n));
    }
    return { line: r, marks: t };
  }
}
function ma(i, e) {
  let t = (r) => {
    for (let n of r.children)
      if ((e ? n.isText() : n.length) || t(n))
        return !0;
    return !1;
  };
  return t(i);
}
function om(i) {
  let e = i.isReplace ? (i.startSide < 0 ? 64 : 0) | (i.endSide > 0 ? 128 : 0) : i.startSide > 0 ? 32 : 16;
  return i.block && (e |= 256), e;
}
const vu = { class: "cm-line" };
function lm(i, e) {
  let t = e.spec.attributes, r = e.spec.class;
  return !t && !r || (i || (i = { class: "cm-line" }), t && Uo(t, i), r && (i.class += " " + r)), i;
}
function am(i) {
  let e = [];
  for (let t = i.parents.length; t > 1; t--) {
    let r = t == i.parents.length ? i.tile : i.parents[t].tile;
    r instanceof Se && e.push(r.mark);
  }
  return e;
}
function as(i) {
  let e = ne.get(i);
  return e && e.setDOM(i.cloneNode()), i;
}
class xi extends ur {
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
const hs = /* @__PURE__ */ new class extends ur {
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
class ga {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = q.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new En(e, e.contentDOM), this.updateInner([new Me(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let r = e.changedRanges;
    this.minWidth > 0 && r.length && (r.every(({ fromA: c, toA: u }) => u < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? n = this.domChanged.newSel.head : !gm(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
    let s = n > -1 ? cm(this.view, e.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: c, to: u } = this.hasComposition;
      r = new Me(c, u, e.changes.mapPos(c, -1), e.changes.mapPos(u, 1)).addToSet(r.slice());
    }
    this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null, ($.ie || $.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.blockWrappers;
    this.updateDeco();
    let a = Om(o, this.decorations, e.changes);
    a.length && (r = Me.extendWithRanges(r, a));
    let h = pm(l, this.blockWrappers, e.changes);
    return h.length && (r = Me.extendWithRanges(r, h)), s && !r.some((c) => c.fromA <= s.range.fromA && c.toA >= s.range.toA) && (r = s.range.addToSet(r.slice())), this.tile.flags & 2 && r.length == 0 ? !1 : (this.updateInner(r, s), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: r } = this.view;
    r.ignore(() => {
      if (t || e.length) {
        let o = this.tile, l = new sm(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        this.tile = l.run(e, t), uo(o, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let s = $.chrome || $.ios ? { node: r.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(s), s && (s.written || r.selectionRange.focusNode != s.node || !this.tile.dom.contains(s.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let n = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let s of this.tile.children)
        s.isWidget() && s.widget instanceof cs && n.push(s.dom);
    r.updateGaps(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let r of t.effects)
        r.is(yu) && (this.editContextFormatting = r.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: r } = this.tile, n = this.view.root.activeElement, s = n == r, o = !s && !(this.view.state.facet(pt) || r.tabIndex > -1) && Ir(r, this.view.observer.selectionRange) && !(n && r.contains(n));
    if (!(s || t || o))
      return;
    let l = this.forceSelection;
    this.forceSelection = !1;
    let a = this.view.state.selection.main, h, c;
    if (a.empty ? c = h = this.inlineDOMNearPos(a.anchor, a.assoc || 1) : (c = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1), h = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1)), $.gecko && a.empty && !this.hasComposition && hm(h)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(f, h.node.childNodes[h.offset] || null)), h = c = new Le(f, 0), l = !0;
    }
    let u = this.view.observer.selectionRange;
    (l || !u.focusNode || (!Gi(h.node, h.offset, u.anchorNode, u.anchorOffset) || !Gi(c.node, c.offset, u.focusNode, u.focusOffset)) && !this.suppressWidgetCursorChange(u, a)) && (this.view.observer.ignore(() => {
      $.android && $.chrome && r.contains(u.focusNode) && mm(u.focusNode, r) && (r.blur(), r.focus({ preventScroll: !0 }));
      let f = tr(this.view.root);
      if (f) if (a.empty) {
        if ($.gecko) {
          let O = um(h.node, h.offset);
          if (O && O != 3) {
            let d = (O == 1 ? nu : su)(h.node, h.offset);
            d && (h = new Le(d.node, d.offset));
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
      o && this.view.root.activeElement == r && (r.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(h, c)), this.impreciseAnchor = h.precise ? null : new Le(u.anchorNode, u.anchorOffset), this.impreciseHead = c.precise ? null : new Le(u.focusNode, u.focusOffset);
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
    let { view: e } = this, t = e.state.selection.main, r = tr(e.root), { anchorNode: n, anchorOffset: s } = e.observer.selectionRange;
    if (!r || !t.empty || !t.assoc || !r.modify)
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
    r.collapse(c.node, c.offset), r.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let u = e.observer.selectionRange;
    e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && r.collapse(n, s);
  }
  posFromDOM(e, t) {
    let r = this.tile.nearest(e);
    if (!r)
      return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let n = r.posAtStart;
    if (r.isComposite()) {
      let s;
      if (e == r.dom)
        s = r.dom.childNodes[t];
      else {
        let o = yt(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let l = e.parentNode;
          if (l == r.dom)
            break;
          o == 0 && l.firstChild != l.lastChild && (e == l.firstChild ? o = -1 : o = 1), e = l;
        }
        o < 0 ? s = e : s = e.nextSibling;
      }
      if (s == r.dom.firstChild)
        return n;
      for (; s && !ne.get(s); )
        s = s.nextSibling;
      if (!s)
        return n + r.length;
      for (let o = 0, l = n; ; o++) {
        let a = r.children[o];
        if (a.dom == s)
          return l;
        l += a.length + a.breakAfter;
      }
    } else return r.isText() ? e == r.dom ? n + t : n + (t ? r.length : 0) : n;
  }
  domAtPos(e, t) {
    let { tile: r, offset: n } = this.tile.resolveBlock(e, t);
    return r.isWidget() ? r.domPosFor(e, t) : r.domIn(n, t);
  }
  inlineDOMNearPos(e, t) {
    let r, n = -1, s = !1, o, l = -1, a = !1;
    return this.tile.blockTiles((h, c) => {
      if (h.isWidget()) {
        if (h.flags & 32 && c >= e)
          return !0;
        h.flags & 16 && (s = !0);
      } else {
        let u = c + h.length;
        if (c <= e && (r = h, n = e - c, s = u < e), u >= e && !o && (o = h, l = e - c, a = c > e), c > e && o)
          return !0;
      }
    }), !r && !o ? this.domAtPos(e, t) : (s && o ? r = null : a && r && (o = null), r && t < 0 || !o ? r.domIn(n, t) : o.domIn(l, t));
  }
  coordsAt(e, t) {
    let { tile: r, offset: n } = this.tile.resolveBlock(e, t);
    return r.isWidget() ? r.widget instanceof cs ? null : r.coordsInWidget(n, t, !0) : r.coordsIn(n, t);
  }
  lineAt(e, t) {
    let { tile: r } = this.tile.resolveBlock(e, t);
    return r.isLine() ? r : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: r } = this.tile.resolveBlock(e, 1);
    if (!t.isLine())
      return null;
    function n(s, o) {
      if (s.isComposite())
        for (let l of s.children) {
          if (l.length >= o) {
            let a = n(l, o);
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
        let a = ir(s.dom, o, l).getClientRects();
        for (let h = 0; h < a.length; h++) {
          let c = a[h];
          if (h == a.length - 1 || c.top < c.bottom && c.left < c.right)
            return c;
        }
      }
      return null;
    }
    return n(t, r);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: r, to: n } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == F.LTR, h = 0, c = (u, f, O) => {
      for (let d = 0; d < u.children.length && !(f > n); d++) {
        let p = u.children[d], g = f + p.length, b = p.dom.getBoundingClientRect(), { height: Q } = b;
        if (O && !d && (h += b.top - O.top), p instanceof Rt)
          g > r && c(p, f, b);
        else if (f >= r && (h > 0 && t.push(-h), t.push(Q + h), h = 0, o)) {
          let w = p.dom.lastChild, Z = w ? Nr(w) : [];
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
          let c = Nr(h.dom);
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
    let t = document.createElement("div"), r, n, s;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = Nr(t.firstChild)[0];
      r = t.getBoundingClientRect().height, n = o && o.width ? o.width / 27 : 7, s = o && o.height ? o.height : r, t.remove();
    }), { lineHeight: r, charWidth: n, textHeight: s };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let r = 0, n = 0; ; n++) {
      let s = n == t.viewports.length ? null : t.viewports[n], o = s ? s.from - 1 : this.view.state.doc.length;
      if (o > r) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(r).top) / this.view.scaleY;
        e.push(q.replace({
          widget: new cs(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(r, o));
      }
      if (!s)
        break;
      r = s.to + 1;
    }
    return q.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(rr).map((s) => (this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s), r = !1, n = this.view.state.facet(xu).map((s, o) => {
      let l = typeof s == "function";
      return l && (r = !0), l ? s(this.view) : s;
    });
    for (n.length && (this.dynamicDecorationMap[e++] = r, t.push(z.join(n))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(Su).map((s) => typeof s == "function" ? s(this.view) : s);
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(bu))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (c) {
        Pe(this.view.state, c, "scroll handler");
      }
    let { range: t } = e, r = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), n;
    if (!r)
      return;
    !t.empty && (n = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (r = {
      left: Math.min(r.left, n.left),
      top: Math.min(r.top, n.top),
      right: Math.max(r.right, n.right),
      bottom: Math.max(r.bottom, n.bottom)
    });
    let s = tl(this.view), o = {
      left: r.left - s.left,
      top: r.top - s.top,
      right: r.right + s.right,
      bottom: r.bottom + s.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    zp(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == F.LTR);
  }
  lineHasWidget(e) {
    let t = (r) => r.isWidget() || r.children.some(t);
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
    for (let r of i.children)
      uo(r, e);
  }
}
function hm(i) {
  return i.node.nodeType == 1 && i.node.firstChild && (i.offset == 0 || i.node.childNodes[i.offset - 1].contentEditable == "false") && (i.offset == i.node.childNodes.length || i.node.childNodes[i.offset].contentEditable == "false");
}
function ku(i, e) {
  let t = i.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let r = nu(t.focusNode, t.focusOffset), n = su(t.focusNode, t.focusOffset), s = r || n;
  if (n && r && n.node != r.node) {
    let l = ne.get(n.node);
    if (!l || l.isText() && l.text != n.node.nodeValue)
      s = n;
    else if (i.docView.lastCompositionAfterCursor) {
      let a = ne.get(r.node);
      !a || a.isText() && a.text != r.node.nodeValue || (s = n);
    }
  }
  if (i.docView.lastCompositionAfterCursor = s != r, !s)
    return null;
  let o = e - s.offset;
  return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
function cm(i, e, t) {
  let r = ku(i, t);
  if (!r)
    return null;
  let { node: n, from: s, to: o } = r, l = n.nodeValue;
  if (/[\n\r]/.test(l) || i.state.doc.sliceString(r.from, r.to) != l)
    return null;
  let a = e.invertedDesc;
  return { range: new Me(a.mapPos(s), a.mapPos(o), s, o), text: n };
}
function um(i, e) {
  return i.nodeType != 1 ? 0 : (e && i.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < i.childNodes.length && i.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let fm = class {
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
function Om(i, e, t) {
  let r = new fm();
  return z.compare(i, e, t, r), r.changes;
}
class dm {
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
function pm(i, e, t) {
  let r = new dm();
  return z.compare(i, e, t, r), r.changes;
}
function mm(i, e) {
  for (let t = i; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function gm(i, e) {
  let t = !1;
  return e && i.iterChangedRanges((r, n) => {
    r < e.to && n > e.from && (t = !0);
  }), t;
}
class cs extends ur {
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
function bm(i, e, t = 1) {
  let r = i.charCategorizer(e), n = i.doc.lineAt(e), s = e - n.from;
  if (n.length == 0)
    return y.cursor(e);
  s == 0 ? t = 1 : s == n.length && (t = -1);
  let o = s, l = s;
  t < 0 ? o = he(n.text, s, !1) : l = he(n.text, s);
  let a = r(n.text.slice(o, l));
  for (; o > 0; ) {
    let h = he(n.text, o, !1);
    if (r(n.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < n.length; ) {
    let h = he(n.text, l);
    if (r(n.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return y.range(o + n.from, l + n.from);
}
function ym(i, e, t, r, n) {
  let s = Math.round((r - e.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && t.height > i.defaultLineHeight * 1.5) {
    let l = i.viewState.heightOracle.textHeight, a = Math.floor((n - t.top - (i.defaultLineHeight - l) * 0.5) / l);
    s += a * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(t.from, t.to);
  return t.from + vp(o, s, i.state.tabSize);
}
function Qm(i, e, t) {
  let r = i.lineBlockAt(e);
  if (Array.isArray(r.type)) {
    let n;
    for (let s of r.type) {
      if (s.from > e)
        break;
      if (!(s.to < e)) {
        if (s.from < e && s.to > e)
          return s;
        (!n || s.type == we.Text && (n.type != s.type || (t < 0 ? s.from < e : s.to > e))) && (n = s);
      }
    }
    return n || r;
  }
  return r;
}
function Sm(i, e, t, r) {
  let n = Qm(i, e.head, e.assoc || -1), s = !r || n.type != we.Text || !(i.lineWrapping || n.widgetLineBreaks) ? null : i.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head);
  if (s) {
    let o = i.dom.getBoundingClientRect(), l = i.textDirectionAt(n.from), a = i.posAtCoords({
      x: t == (l == F.LTR) ? o.right - 1 : o.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (a != null)
      return y.cursor(a, t ? -1 : 1);
  }
  return y.cursor(t ? n.to : n.from, t ? -1 : 1);
}
function ba(i, e, t, r) {
  let n = i.state.doc.lineAt(e.head), s = i.bidiSpans(n), o = i.textDirectionAt(n.from);
  for (let l = e, a = null; ; ) {
    let h = Np(n, s, o, l, t), c = cu;
    if (!h) {
      if (n.number == (t ? i.state.doc.lines : 1))
        return l;
      c = `
`, n = i.state.doc.line(n.number + (t ? 1 : -1)), s = i.bidiSpans(n), h = i.visualLineSide(n, !t);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!r)
        return h;
      a = r(c);
    }
    l = h;
  }
}
function xm(i, e, t) {
  let r = i.state.charCategorizer(e), n = r(t);
  return (s) => {
    let o = r(s);
    return n == Re.Space && (n = o), n == o;
  };
}
function wm(i, e, t, r) {
  let n = e.head, s = t ? 1 : -1;
  if (n == (t ? i.state.doc.length : 0))
    return y.cursor(n, e.assoc);
  let o = e.goalColumn, l, a = i.contentDOM.getBoundingClientRect(), h = i.coordsAtPos(n, e.assoc || -1), c = i.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = s < 0 ? h.top : h.bottom;
  else {
    let O = i.viewState.lineBlockAt(n);
    o == null && (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (n - O.from))), l = (s < 0 ? O.top : O.bottom) + c;
  }
  let u = a.left + o, f = r ?? i.viewState.heightOracle.textHeight >> 1;
  for (let O = 0; ; O += 10) {
    let d = l + (f + O) * s, p = fo(i, { x: u, y: d }, !1, s);
    return y.cursor(p.pos, p.assoc, void 0, o);
  }
}
function Ui(i, e, t) {
  for (; ; ) {
    let r = 0;
    for (let n of i)
      n.between(e - 1, e + 1, (s, o, l) => {
        if (e > s && e < o) {
          let a = r || t || (e - s < o - e ? -1 : 1);
          e = a < 0 ? s : o, r = a;
        }
      });
    if (!r)
      return e;
  }
}
function Pu(i, e) {
  let t = null;
  for (let r = 0; r < e.ranges.length; r++) {
    let n = e.ranges[r], s = null;
    if (n.empty) {
      let o = Ui(i, n.from, 0);
      o != n.from && (s = y.cursor(o, -1));
    } else {
      let o = Ui(i, n.from, -1), l = Ui(i, n.to, 1);
      (o != n.from || l != n.to) && (s = y.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
    }
    s && (t || (t = e.ranges.slice()), t[r] = s);
  }
  return t ? y.create(t, e.mainIndex) : e;
}
function us(i, e, t) {
  let r = Ui(i.state.facet(dr).map((n) => n(i)), t.from, e.head > t.from ? -1 : 1);
  return r == t.from ? t : y.cursor(r, r < t.from ? 1 : -1);
}
class st {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function fo(i, e, t, r) {
  let n = i.contentDOM.getBoundingClientRect(), s = n.top + i.viewState.paddingTop, { x: o, y: l } = e, a = l - s, h;
  for (; ; ) {
    if (a < 0)
      return new st(0, 1);
    if (a > i.viewState.docHeight)
      return new st(i.state.doc.length, -1);
    if (h = i.elementAtHeight(a), r == null)
      break;
    if (h.type == we.Text) {
      let f = i.docView.coordsAt(r < 0 ? h.from : h.to, r);
      if (f && (r < 0 ? f.top <= a + s : f.bottom >= a + s))
        break;
    }
    let u = i.viewState.heightOracle.textHeight / 2;
    a = r > 0 ? h.bottom + u : h.top - u;
  }
  if (i.viewport.from >= h.to || i.viewport.to <= h.from) {
    if (t)
      return null;
    if (h.type == we.Text) {
      let u = ym(i, n, h, o, l);
      return new st(u, u == h.from ? 1 : -1);
    }
  }
  if (h.type != we.Text)
    return a < (h.top + h.bottom) / 2 ? new st(h.from, 1) : new st(h.to, -1);
  let c = i.docView.lineAt(h.from, 2);
  return (!c || c.length != h.length) && (c = i.docView.lineAt(h.from, -2)), Tu(i, c, h.from, o, l);
}
function Tu(i, e, t, r, n) {
  let s = -1, o = null, l = 1e9, a = 1e9, h = n, c = n, u = (f, O) => {
    for (let d = 0; d < f.length; d++) {
      let p = f[d];
      if (p.top == p.bottom)
        continue;
      let g = p.left > r ? p.left - r : p.right < r ? r - p.right : 0, b = p.top > n ? p.top - n : p.bottom < n ? n - p.bottom : 0;
      p.top <= c && p.bottom >= h && (h = Math.min(p.top, h), c = Math.max(p.bottom, c), b = 0), (s < 0 || (b - a || g - l) < 0) && (s >= 0 && a && l < g && o.top <= c - 2 && o.bottom >= h + 2 ? a = 0 : (s = O, l = g, a = b, o = p));
    }
  };
  if (e.isText()) {
    for (let O = 0; O < e.length; ) {
      let d = he(e.text, O);
      if (u(ir(e.dom, O, d).getClientRects(), O), !l && !a)
        break;
      O = d;
    }
    return r > (o.left + o.right) / 2 == (ya(i, s + t) == F.LTR) ? new st(t + he(e.text, s), -1) : new st(t + s, 1);
  } else {
    if (!e.length)
      return new st(t, 1);
    for (let p = 0; p < e.children.length; p++) {
      let g = e.children[p];
      if (g.flags & 48)
        continue;
      let b = (g.dom.nodeType == 1 ? g.dom : ir(g.dom, 0, g.length)).getClientRects();
      if (u(b, p), !l && !a)
        break;
    }
    let f = e.children[s], O = e.posBefore(f, t);
    return f.isComposite() || f.isText() ? Tu(i, f, O, Math.max(o.left, Math.min(o.right, r)), n) : r > (o.left + o.right) / 2 == (ya(i, s + t) == F.LTR) ? new st(O + f.length, -1) : new st(O, 1);
  }
}
function ya(i, e) {
  let t = i.state.doc.lineAt(e);
  return i.bidiSpans(t)[mt.find(i.bidiSpans(t), e - t.from, -1, 1)].dir;
}
const Bi = "￿";
class $m {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(E.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Bi;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let r = e.parentNode;
    for (let n = e; ; ) {
      this.findPointBefore(r, n);
      let s = this.text.length;
      this.readNode(n);
      let o = ne.get(n), l = n.nextSibling;
      if (l == t) {
        o != null && o.breakAfter && !l && this.lineBreak();
        break;
      }
      let a = ne.get(l);
      (o && a ? o.breakAfter : (o ? o.breakAfter : an(n)) || an(l) && (n.nodeName != "BR" || o != null && o.isWidget()) && this.text.length > s) && !km(l, t) && this.lineBreak(), n = l;
    }
    return this.findPointBefore(r, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let r of this.points)
      r.node == e && (r.pos = this.text.length + Math.min(r.offset, t.length));
    for (let r = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1, o = 1, l;
      if (this.lineSeparator ? (s = t.indexOf(this.lineSeparator, r), o = this.lineSeparator.length) : (l = n.exec(t)) && (s = l.index, o = l[0].length), this.append(t.slice(r, s < 0 ? t.length : s)), s < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      r = s + o;
    }
  }
  readNode(e) {
    let t = ne.get(e), r = t && t.overrideDOMText;
    if (r != null) {
      this.findPointInside(e, r.length);
      for (let n = r.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let r of this.points)
      r.node == e && e.childNodes[r.offset] == t && (r.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let r of this.points)
      (e.nodeType == 3 ? r.node == e : e.contains(r.node)) && (r.pos = this.text.length + (vm(e, r.node, r.offset) ? t : 0));
  }
}
function vm(i, e, t) {
  for (; ; ) {
    if (!e || t < yt(e))
      return !1;
    if (e == i)
      return !0;
    t = _t(e) + 1, e = e.parentNode;
  }
}
function km(i, e) {
  let t;
  for (; !(i == e || !i); i = i.nextSibling) {
    let r = ne.get(i);
    if (!(r != null && r.isWidget()))
      return !1;
    r && (t || (t = [])).push(r);
  }
  if (t)
    for (let r of t) {
      let n = r.overrideDOMText;
      if (n != null && n.length)
        return !1;
    }
  return !0;
}
class Qa {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class Pm {
  constructor(e, t, r, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = Zu(e.docView.tile, t, r, 0))) {
      let l = s || o ? [] : Zm(e), a = new $m(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Cm(l, this.bounds.from);
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
function Zu(i, e, t, r) {
  if (i.isComposite()) {
    let n = -1, s = -1, o = -1, l = -1;
    for (let a = 0, h = r, c = r; a < i.children.length; a++) {
      let u = i.children[a], f = h + u.length;
      if (h < e && f > t)
        return Zu(u, e, t, h);
      if (f >= e && n == -1 && (n = a, s = h), h > t && u.dom.parentNode == i.dom) {
        o = a, l = c;
        break;
      }
      c = f, h = f + u.breakAfter;
    }
    return {
      from: s,
      to: l < 0 ? r + i.length : l,
      startDOM: (n ? i.children[n - 1].dom.nextSibling : null) || i.dom.firstChild,
      endDOM: o < i.children.length && o >= 0 ? i.children[o].dom : null
    };
  } else return i.isText() ? { from: r, to: r + i.length, startDOM: i.dom, endDOM: i.dom.nextSibling } : null;
}
function Cu(i, e) {
  let t, { newSel: r } = e, n = i.state.selection.main, s = i.inputState.lastKeyTime > Date.now() - 100 ? i.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = n.from, h = null;
    (s === 8 || $.android && e.text.length < l - o) && (a = n.to, h = "end");
    let c = Au(i.state.doc.sliceString(o, l, Bi), e.text, a - o, h);
    c && ($.chrome && s == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == Bi + Bi && c.toB--, t = {
      from: o + c.from,
      to: o + c.toA,
      insert: V.of(e.text.slice(c.from, c.toB).split(Bi))
    });
  } else r && (!i.hasFocus && i.state.facet(pt) || r.main.eq(n)) && (r = null);
  if (!t && !r)
    return !1;
  if (!t && e.typeOver && !n.empty && r && r.main.empty ? t = { from: n.from, to: n.to, insert: i.state.doc.slice(n.from, n.to) } : ($.mac || $.android) && t && t.from == t.to && t.from == n.head - 1 && /^\. ?$/.test(t.insert.toString()) && i.contentDOM.getAttribute("autocorrect") == "off" ? (r && t.insert.length == 2 && (r = y.single(r.main.anchor - 1, r.main.head - 1)), t = { from: t.from, to: t.to, insert: V.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= n.from && t.to <= n.to && (t.from != n.from || t.to != n.to) && n.to - n.from - (t.to - t.from) <= 4 ? t = {
    from: n.from,
    to: n.to,
    insert: i.state.doc.slice(n.from, t.from).append(t.insert).append(i.state.doc.slice(t.to, n.to))
  } : i.state.doc.lineAt(n.from).to < n.to && i.docView.lineHasWidget(n.to) && i.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: n.from,
    to: n.to,
    insert: i.state.toText(i.inputState.insertingText)
  } : $.chrome && t && t.from == t.to && t.from == n.head && t.insert.toString() == `
 ` && i.lineWrapping && (r && (r = y.single(r.main.anchor - 1, r.main.head - 1)), t = { from: n.from, to: n.to, insert: V.of([" "]) }), t)
    return il(i, t, r, s);
  if (r && !r.main.eq(n)) {
    let o = !1, l = "select";
    return i.inputState.lastSelectionTime > Date.now() - 50 && (i.inputState.lastSelectionOrigin == "select" && (o = !0), l = i.inputState.lastSelectionOrigin, l == "select.pointer" && (r = Pu(i.state.facet(dr).map((a) => a(i)), r))), i.dispatch({ selection: r, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function il(i, e, t, r = -1) {
  if ($.ios && i.inputState.flushIOSKey(e))
    return !0;
  let n = i.state.selection.main;
  if ($.android && (e.to == n.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == n.from || e.from == n.from - 1 && i.state.sliceDoc(e.from, n.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && ui(i.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && e.insert.length == 0 || r == 8 && e.insert.length < e.to - e.from && e.to > n.head) && ui(i.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && e.insert.length == 0 && ui(i.contentDOM, "Delete", 46)))
    return !0;
  let s = e.insert.toString();
  i.inputState.composing >= 0 && i.inputState.composing++;
  let o, l = () => o || (o = Tm(i, e, t));
  return i.state.facet(pu).some((a) => a(i, e.from, e.to, s, l)) || i.dispatch(l()), !0;
}
function Tm(i, e, t) {
  let r, n = i.state, s = n.selection.main, o = -1;
  if (e.from == e.to && e.from < s.from || e.from > s.to) {
    let a = e.from < s.from ? -1 : 1, h = a < 0 ? s.from : s.to, c = Ui(n.facet(dr).map((u) => u(i)), h, a);
    e.from == c && (o = c);
  }
  if (o > -1)
    r = {
      changes: e,
      selection: y.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && i.inputState.composing < 0) {
    let a = s.from < e.from ? n.sliceDoc(s.from, e.from) : "", h = s.to > e.to ? n.sliceDoc(e.to, s.to) : "";
    r = n.replaceSelection(i.state.toText(a + e.insert.sliceString(0, void 0, i.state.lineBreak) + h));
  } else {
    let a = n.changes(e), h = t && t.main.to <= a.newLength ? t.main : void 0;
    if (n.selection.ranges.length > 1 && (i.inputState.composing >= 0 || i.inputState.compositionPendingChange) && e.to <= s.to + 10 && e.to >= s.to - 10) {
      let c = i.state.sliceDoc(e.from, e.to), u, f = t && ku(i, t.main.head);
      if (f) {
        let d = e.insert.length - (e.to - e.from);
        u = { from: f.from, to: f.to - d };
      } else
        u = i.state.doc.lineAt(s.head);
      let O = s.to - e.to;
      r = n.changeByRange((d) => {
        if (d.from == s.from && d.to == s.to)
          return { changes: a, range: h || d.map(a) };
        let p = d.to - O, g = p - c.length;
        if (i.state.sliceDoc(g, p) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p >= u.from && g <= u.to)
          return { range: d };
        let b = n.changes({ from: g, to: p, insert: e.insert }), Q = d.to - s.to;
        return {
          changes: b,
          range: h ? y.range(Math.max(0, h.anchor + Q), Math.max(0, h.head + Q)) : d.map(b)
        };
      });
    } else
      r = {
        changes: a,
        selection: h && n.selection.replaceRange(h)
      };
  }
  let l = "input.type";
  return (i.composing || i.inputState.compositionPendingChange && i.inputState.compositionEndedAt > Date.now() - 50) && (i.inputState.compositionPendingChange = !1, l += ".compose", i.inputState.compositionFirstChange && (l += ".start", i.inputState.compositionFirstChange = !1)), n.update(r, { userEvent: l, scrollIntoView: !0 });
}
function Au(i, e, t, r) {
  let n = Math.min(i.length, e.length), s = 0;
  for (; s < n && i.charCodeAt(s) == e.charCodeAt(s); )
    s++;
  if (s == n && i.length == e.length)
    return null;
  let o = i.length, l = e.length;
  for (; o > 0 && l > 0 && i.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (r == "end") {
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
function Zm(i) {
  let e = [];
  if (i.root.activeElement != i.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: r, focusNode: n, focusOffset: s } = i.observer.selectionRange;
  return t && (e.push(new Qa(t, r)), (n != t || s != r) && e.push(new Qa(n, s))), e;
}
function Cm(i, e) {
  if (i.length == 0)
    return null;
  let t = i[0].pos, r = i.length == 2 ? i[1].pos : t;
  return t > -1 && r > -1 ? y.single(t + e, r + e) : null;
}
class Am {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, $.safari && e.contentDOM.addEventListener("input", () => null), $.gecko && Im(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Ym(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let r = this.handlers[e];
    if (r) {
      for (let n of r.observers)
        n(this.view, t);
      for (let n of r.handlers) {
        if (t.defaultPrevented)
          break;
        if (n(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Xm(e), r = this.handlers, n = this.view.contentDOM;
    for (let s in t)
      if (s != "scroll") {
        let o = !t[s].handlers.length, l = r[s];
        l && o != !l.handlers.length && (n.removeEventListener(s, this.handleEvent), l = null), l || n.addEventListener(s, this.handleEvent, { passive: o });
      }
    for (let s in r)
      s != "scroll" && !t[s] && n.removeEventListener(s, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Ru.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), $.android && $.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return $.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = Xu.find((r) => r.keyCode == e.keyCode)) && !e.ctrlKey || Rm.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
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
function Sa(i, e) {
  return (t, r) => {
    try {
      return e.call(i, r, t);
    } catch (n) {
      Pe(t.state, n);
    }
  };
}
function Xm(i) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    return e[r] || (e[r] = { observers: [], handlers: [] });
  }
  for (let r of i) {
    let n = r.spec, s = n && n.plugin.domEventHandlers, o = n && n.plugin.domEventObservers;
    if (s)
      for (let l in s) {
        let a = s[l];
        a && t(l).handlers.push(Sa(r.value, a));
      }
    if (o)
      for (let l in o) {
        let a = o[l];
        a && t(l).observers.push(Sa(r.value, a));
      }
  }
  for (let r in Ne)
    t(r).handlers.push(Ne[r]);
  for (let r in Ye)
    t(r).observers.push(Ye[r]);
  return e;
}
const Xu = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Rm = "dthko", Ru = [16, 17, 18, 20, 91, 92, 224, 225], Tr = 6;
function Zr(i) {
  return Math.max(0, i) * 0.7 + 8;
}
function Mm(i, e) {
  return Math.max(Math.abs(i.clientX - e.clientX), Math.abs(i.clientY - e.clientY));
}
class zm {
  constructor(e, t, r, n) {
    this.view = e, this.startEvent = t, this.style = r, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Vp(e.contentDOM), this.atoms = e.state.facet(dr).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(E.allowMultipleSelections) && Vm(e, t), this.dragging = qm(e, t) && Vu(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Mm(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, r = 0, n = 0, s = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: s, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = tl(this.view);
    e.clientX - a.left <= n + Tr ? t = -Zr(n - e.clientX) : e.clientX + a.right >= o - Tr && (t = Zr(e.clientX - o)), e.clientY - a.top <= s + Tr ? r = -Zr(s - e.clientY) : e.clientY + a.bottom >= l - Tr && (r = Zr(e.clientY - l)), this.setScrollSpeed(t, r);
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
    let { view: t } = this, r = Pu(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !r.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: r,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Vm(i, e) {
  let t = i.state.facet(uu);
  return t.length ? t[0](e) : $.mac ? e.metaKey : e.ctrlKey;
}
function _m(i, e) {
  let t = i.state.facet(fu);
  return t.length ? t[0](e) : $.mac ? !e.altKey : !e.ctrlKey;
}
function qm(i, e) {
  let { main: t } = i.state.selection;
  if (t.empty)
    return !1;
  let r = tr(i.root);
  if (!r || r.rangeCount == 0)
    return !0;
  let n = r.getRangeAt(0).getClientRects();
  for (let s = 0; s < n.length; s++) {
    let o = n[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Ym(i, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, r; t != i.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (r = ne.get(t)) && r.isWidget() && !r.isHidden && r.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const Ne = /* @__PURE__ */ Object.create(null), Ye = /* @__PURE__ */ Object.create(null), Mu = $.ie && $.ie_version < 15 || $.ios && $.webkit_version < 604;
function Em(i) {
  let e = i.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    i.focus(), t.remove(), zu(i, t.value);
  }, 50);
}
function Wn(i, e, t) {
  for (let r of i.facet(e))
    t = r(t, i);
  return t;
}
function zu(i, e) {
  e = Wn(i.state, Ko, e);
  let { state: t } = i, r, n = 1, s = t.toText(e), o = s.lines == t.selection.ranges.length;
  if (Oo != null && t.selection.ranges.every((a) => a.empty) && Oo == s.toString()) {
    let a = -1;
    r = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let u = t.toText((o ? s.line(n++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: u },
        range: y.cursor(h.from + u.length)
      };
    });
  } else o ? r = t.changeByRange((a) => {
    let h = s.line(n++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: y.cursor(a.from + h.length)
    };
  }) : r = t.replaceSelection(s);
  i.dispatch(r, {
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
  for (let r of i.state.facet(Ou))
    if (t = r(i, e), t)
      break;
  if (!t && e.button == 0 && (t = Dm(i, e)), t) {
    let r = !i.hasFocus;
    i.inputState.startMouseSelection(new zm(i, e, t, r)), r && i.observer.ignore(() => {
      iu(i.contentDOM);
      let s = i.root.activeElement;
      s && !s.contains(i.contentDOM) && s.blur();
    });
    let n = i.inputState.mouseSelection;
    if (n)
      return n.start(e), n.dragging === !1;
  } else
    i.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function xa(i, e, t, r) {
  if (r == 1)
    return y.cursor(e, t);
  if (r == 2)
    return bm(i.state, e, t);
  {
    let n = i.docView.lineAt(e, t), s = i.state.doc.lineAt(n ? n.posAtEnd : e), o = n ? n.posAtStart : s.from, l = n ? n.posAtEnd : s.to;
    return l < i.state.doc.length && l == s.to && l++, y.range(o, l);
  }
}
const Wm = $.ie && $.ie_version <= 11;
let wa = null, $a = 0, va = 0;
function Vu(i) {
  if (!Wm)
    return i.detail;
  let e = wa, t = va;
  return wa = i, va = Date.now(), $a = !e || t > Date.now() - 400 && Math.abs(e.clientX - i.clientX) < 2 && Math.abs(e.clientY - i.clientY) < 2 ? ($a + 1) % 3 : 1;
}
function Dm(i, e) {
  let t = i.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), r = Vu(e), n = i.state.selection;
  return {
    update(s) {
      s.docChanged && (t.pos = s.changes.mapPos(t.pos), n = n.map(s.changes));
    },
    get(s, o, l) {
      let a = i.posAndSideAtCoords({ x: s.clientX, y: s.clientY }, !1), h, c = xa(i, a.pos, a.assoc, r);
      if (t.pos != a.pos && !o) {
        let u = xa(i, t.pos, t.assoc, r), f = Math.min(u.from, c.from), O = Math.max(u.to, c.to);
        c = f < c.from ? y.range(f, O) : y.range(O, f);
      }
      return o ? n.replaceRange(n.main.extend(c.from, c.to)) : l && r == 1 && n.ranges.length > 1 && (h = Bm(n, a.pos)) ? h : l ? n.addRange(c) : y.create([c]);
    }
  };
}
function Bm(i, e) {
  for (let t = 0; t < i.ranges.length; t++) {
    let { from: r, to: n } = i.ranges[t];
    if (r <= e && n >= e)
      return y.create(i.ranges.slice(0, t).concat(i.ranges.slice(t + 1)), i.mainIndex == t ? 0 : i.mainIndex - (i.mainIndex > t ? 1 : 0));
  }
  return null;
}
Ne.dragstart = (i, e) => {
  let { selection: { main: t } } = i.state;
  if (e.target.draggable) {
    let n = i.docView.tile.nearest(e.target);
    if (n && n.isWidget()) {
      let s = n.posAtStart, o = s + n.length;
      (s >= t.to || o <= t.from) && (t = y.range(s, o));
    }
  }
  let { inputState: r } = i;
  return r.mouseSelection && (r.mouseSelection.dragging = !0), r.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", Wn(i.state, Jo, i.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
Ne.dragend = (i) => (i.inputState.draggedContent = null, !1);
function ka(i, e, t, r) {
  if (t = Wn(i.state, Ko, t), !t)
    return;
  let n = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: s } = i.inputState, o = r && s && _m(i, e) ? { from: s.from, to: s.to } : null, l = { from: n, insert: t }, a = i.state.changes(o ? [o, l] : l);
  i.focus(), i.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) },
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
    let r = Array(t.length), n = 0, s = () => {
      ++n == t.length && ka(i, e, r.filter((o) => o != null).join(i.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = s, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (r[o] = l.result), s();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let r = e.dataTransfer.getData("Text");
    if (r)
      return ka(i, e, r, !0), !0;
  }
  return !1;
};
Ne.paste = (i, e) => {
  if (i.state.readOnly)
    return !0;
  i.observer.flush();
  let t = Mu ? null : e.clipboardData;
  return t ? (zu(i, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (Em(i), !1);
};
function Lm(i, e) {
  let t = i.dom.parentNode;
  if (!t)
    return;
  let r = t.appendChild(document.createElement("textarea"));
  r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.value = e, r.focus(), r.selectionEnd = e.length, r.selectionStart = 0, setTimeout(() => {
    r.remove(), i.focus();
  }, 50);
}
function jm(i) {
  let e = [], t = [], r = !1;
  for (let n of i.selection.ranges)
    n.empty || (e.push(i.sliceDoc(n.from, n.to)), t.push(n));
  if (!e.length) {
    let n = -1;
    for (let { from: s } of i.selection.ranges) {
      let o = i.doc.lineAt(s);
      o.number > n && (e.push(o.text), t.push({ from: o.from, to: Math.min(i.doc.length, o.to + 1) })), n = o.number;
    }
    r = !0;
  }
  return { text: Wn(i, Jo, e.join(i.lineBreak)), ranges: t, linewise: r };
}
let Oo = null;
Ne.copy = Ne.cut = (i, e) => {
  let { text: t, ranges: r, linewise: n } = jm(i.state);
  if (!t && !n)
    return !1;
  Oo = n ? t : null, e.type == "cut" && !i.state.readOnly && i.dispatch({
    changes: r,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let s = Mu ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", t), !0) : (Lm(i, t), !1);
};
const _u = /* @__PURE__ */ $t.define();
function qu(i, e) {
  let t = [];
  for (let r of i.facet(mu)) {
    let n = r(i, e);
    n && t.push(n);
  }
  return t.length ? i.update({ effects: t, annotations: _u.of(!0) }) : null;
}
function Yu(i) {
  setTimeout(() => {
    let e = i.hasFocus;
    if (e != i.inputState.notifiedFocused) {
      let t = qu(i.state, e);
      t ? i.dispatch(t) : i.update([]);
    }
  }, 10);
}
Ye.focus = (i) => {
  i.inputState.lastFocusTime = Date.now(), !i.scrollDOM.scrollTop && (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) && (i.scrollDOM.scrollTop = i.inputState.lastScrollTop, i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft), Yu(i);
};
Ye.blur = (i) => {
  i.observer.clearSelectionRange(), Yu(i);
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
  var t, r;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (i.inputState.insertingText = e.data, i.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && i.observer.editContext) {
    let s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (s && o.length) {
      let l = o[0], a = i.posAtDOM(l.startContainer, l.startOffset), h = i.posAtDOM(l.endContainer, l.endOffset);
      return il(i, { from: a, to: h, insert: i.state.toText(s) }, null), !0;
    }
  }
  let n;
  if ($.chrome && $.android && (n = Xu.find((s) => s.inputType == e.inputType)) && (i.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let s = ((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 && i.hasFocus && (i.contentDOM.blur(), i.focus());
    }, 100);
  }
  return $.ios && e.inputType == "deleteContentForward" && i.observer.flushSoon(), $.safari && e.inputType == "insertText" && i.inputState.composing >= 0 && setTimeout(() => Ye.compositionend(i, e), 20), !1;
};
const Pa = /* @__PURE__ */ new Set();
function Im(i) {
  Pa.has(i) || (Pa.add(i), i.addEventListener("copy", () => {
  }), i.addEventListener("cut", () => {
  }));
}
const Ta = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let wi = !1;
function Za() {
  wi = !1;
}
class Nm {
  constructor(e) {
    this.lineWrapping = e, this.doc = V.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let r = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (r += Math.max(0, Math.ceil((t - e - r * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * r;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Ta.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let r = 0; r < e.length; r++) {
      let n = e[r];
      n < 0 ? r++ : this.heightSamples[Math.floor(n * 10)] || (t = !0, this.heightSamples[Math.floor(n * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, r, n, s, o) {
    let l = Ta.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = r, this.textHeight = n, this.lineLength = s, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class Gm {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Be {
  /**
  @internal
  */
  constructor(e, t, r, n, s) {
    this.from = e, this.length = t, this.top = r, this.height = n, this._content = s;
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
    return new Be(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var I = /* @__PURE__ */ (function(i) {
  return i[i.ByPos = 0] = "ByPos", i[i.ByHeight = 1] = "ByHeight", i[i.ByPosNoHeight = 2] = "ByPosNoHeight", i;
})(I || (I = {}));
const Gr = 1e-3;
class ge {
  constructor(e, t, r = 2) {
    this.length = e, this.height = t, this.flags = r;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Gr && (wi = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, r) {
    return ge.of(r);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, r, n) {
    let s = this, o = r.doc;
    for (let l = n.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: u } = n[l], f = s.lineAt(a, I.ByPosNoHeight, r.setDoc(t), 0, 0), O = f.to >= h ? f : s.lineAt(h, I.ByPosNoHeight, r, 0, 0);
      for (u += O.to - h, h = O.to; l > 0 && f.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, c = n[l - 1].fromB, l--, a < f.from && (f = s.lineAt(a, I.ByPosNoHeight, r, 0, 0));
      c += f.from - a, a = f.from;
      let d = rl.build(r.setDoc(o), e, c, u);
      s = On(s, s.replace(a, h, d));
    }
    return s.updateHeight(r, 0);
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
    let t = 0, r = e.length, n = 0, s = 0;
    for (; ; )
      if (t == r)
        if (n > s * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), r += 1 + l.break, n -= l.size;
        } else if (s > n * 2) {
          let l = e[r];
          l.break ? e.splice(r, 1, l.left, null, l.right) : e.splice(r, 1, l.left, l.right), r += 2 + l.break, s -= l.size;
        } else
          break;
      else if (n < s) {
        let l = e[t++];
        l && (n += l.size);
      } else {
        let l = e[--r];
        l && (s += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, r++), new Fm(ge.of(e.slice(0, t)), o, ge.of(e.slice(r)));
  }
}
function On(i, e) {
  return i == e ? i : (i.constructor != e.constructor && (wi = !0), e);
}
ge.prototype.size = 1;
const Um = /* @__PURE__ */ q.replace({});
class Eu extends ge {
  constructor(e, t, r) {
    super(e, t), this.deco = r, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new Be(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, r, n) {
    return this.spaceAbove && e < r + this.spaceAbove ? new Be(n, 0, r, this.spaceAbove, Um) : this.mainBlock(r, n);
  }
  lineAt(e, t, r, n, s) {
    let o = this.mainBlock(n, s);
    return this.spaceAbove ? this.blockAt(0, r, n, s).join(o) : o;
  }
  forEachLine(e, t, r, n, s, o) {
    e <= s + this.length && t >= s && o(this.lineAt(0, I.ByPos, r, n, s));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, r = !1, n) {
    return n && n.from <= t && n.more && this.setMeasuredHeight(n), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class ke extends Eu {
  constructor(e, t, r) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = r;
  }
  mainBlock(e, t) {
    return new Be(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, r) {
    let n = r[0];
    return r.length == 1 && (n instanceof ke || n instanceof le && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof le ? n = new ke(n.length, this.height, this.spaceAbove) : n.height = this.height, this.outdated || (n.outdated = !1), n) : ge.of(r);
  }
  updateHeight(e, t = 0, r = !1, n) {
    return n && n.from <= t && n.more ? this.setMeasuredHeight(n) : (r || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
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
    let r = e.doc.lineAt(t).number, n = e.doc.lineAt(t + this.length).number, s = n - r + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * s);
      o = a / s, this.length > s + 1 && (l = (this.height - a) / (this.length - s - 1));
    } else
      o = this.height / s;
    return { firstLine: r, lastLine: n, perLine: o, perChar: l };
  }
  blockAt(e, t, r, n) {
    let { firstLine: s, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, n);
    if (t.lineWrapping) {
      let h = n + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - r) / this.height)) * this.length)), c = t.doc.lineAt(h), u = l + c.length * a, f = Math.max(r, e - u / 2);
      return new Be(c.from, c.length, f, u, 0);
    } else {
      let h = Math.max(0, Math.min(o - s, Math.floor((e - r) / l))), { from: c, length: u } = t.doc.line(s + h);
      return new Be(c, u, r + l * h, l, 0);
    }
  }
  lineAt(e, t, r, n, s) {
    if (t == I.ByHeight)
      return this.blockAt(e, r, n, s);
    if (t == I.ByPosNoHeight) {
      let { from: O, to: d } = r.doc.lineAt(e);
      return new Be(O, d - O, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(r, s), h = r.doc.lineAt(e), c = l + h.length * a, u = h.number - o, f = n + l * u + a * (h.from - s - u);
    return new Be(h.from, h.length, Math.max(n, Math.min(f, n + this.height - c)), c, 0);
  }
  forEachLine(e, t, r, n, s, o) {
    e = Math.max(e, s), t = Math.min(t, s + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(r, s);
    for (let c = e, u = n; c <= t; ) {
      let f = r.doc.lineAt(c);
      if (c == e) {
        let d = f.number - l;
        u += a * d + h * (e - s - d);
      }
      let O = a + h * f.length;
      o(new Be(f.from, f.length, u, O, 0)), u += O, c = f.to + 1;
    }
  }
  replace(e, t, r) {
    let n = this.length - t;
    if (n > 0) {
      let s = r[r.length - 1];
      s instanceof le ? r[r.length - 1] = new le(s.length + n) : r.push(null, new le(n - 1));
    }
    if (e > 0) {
      let s = r[0];
      s instanceof le ? r[0] = new le(e + s.length) : r.unshift(new le(e - 1), null);
    }
    return ge.of(r);
  }
  decomposeLeft(e, t) {
    t.push(new le(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new le(this.length - e - 1));
  }
  updateHeight(e, t = 0, r = !1, n) {
    let s = t + this.length;
    if (n && n.from <= t + this.length && n.more) {
      let o = [], l = Math.max(t, n.from), a = -1;
      for (n.from > t && o.push(new le(n.from - t - 1).updateHeight(e, t)); l <= s && n.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let u = n.heights[n.index++], f = 0;
        u < 0 && (f = -u, u = n.heights[n.index++]), a == -1 ? a = u : Math.abs(u - a) >= Gr && (a = -2);
        let O = new ke(c, u, f);
        O.outdated = !1, o.push(O), l += c + 1;
      }
      l <= s && o.push(null, new le(s - l).updateHeight(e, l));
      let h = ge.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Gr || Math.abs(a - this.heightMetrics(e, t).perLine) >= Gr) && (wi = !0), On(this, h);
    } else (r || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Fm extends ge {
  constructor(e, t, r) {
    super(e.length + t + r.length, e.height + r.height, t | (e.outdated || r.outdated ? 2 : 0)), this.left = e, this.right = r, this.size = e.size + r.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, r, n) {
    let s = r + this.left.height;
    return e < s ? this.left.blockAt(e, t, r, n) : this.right.blockAt(e, t, s, n + this.left.length + this.break);
  }
  lineAt(e, t, r, n, s) {
    let o = n + this.left.height, l = s + this.left.length + this.break, a = t == I.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, r, n, s) : this.right.lineAt(e, t, r, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = t == I.ByPosNoHeight ? I.ByPosNoHeight : I.ByPos;
    return a ? h.join(this.right.lineAt(l, c, r, o, l)) : this.left.lineAt(l, c, r, n, s).join(h);
  }
  forEachLine(e, t, r, n, s, o) {
    let l = n + this.left.height, a = s + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, r, n, s, o), t >= a && this.right.forEachLine(e, t, r, l, a, o);
    else {
      let h = this.lineAt(a, I.ByPos, r, n, s);
      e < h.from && this.left.forEachLine(e, h.from - 1, r, n, s, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, r, l, a, o);
    }
  }
  replace(e, t, r) {
    let n = this.left.length + this.break;
    if (t < n)
      return this.balanced(this.left.replace(e, t, r), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - n, t - n, r));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let l of r)
      s.push(l);
    if (e > 0 && Ca(s, o - 1), t < this.length) {
      let l = s.length;
      this.decomposeRight(t, s), Ca(s, l);
    }
    return ge.of(s);
  }
  decomposeLeft(e, t) {
    let r = this.left.length;
    if (e <= r)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (r++, e >= r && t.push(null)), e > r && this.right.decomposeLeft(e - r, t);
  }
  decomposeRight(e, t) {
    let r = this.left.length, n = r + this.break;
    if (e >= n)
      return this.right.decomposeRight(e - n, t);
    e < r && this.left.decomposeRight(e, t), this.break && e < n && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? ge.of(this.break ? [e, null, t] : [e, t]) : (this.left = On(this.left, e), this.right = On(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, r = !1, n) {
    let { left: s, right: o } = this, l = t + s.length + this.break, a = null;
    return n && n.from <= t + s.length && n.more ? a = s = s.updateHeight(e, t, r, n) : s.updateHeight(e, t, r), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(e, l, r, n) : o.updateHeight(e, l, r), a ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Ca(i, e) {
  let t, r;
  i[e] == null && (t = i[e - 1]) instanceof le && (r = i[e + 1]) instanceof le && i.splice(e - 1, 3, new le(t.length + 1 + r.length));
}
const Hm = 5;
class rl {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let r = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof ke ? n.length += r - this.pos : (r > this.pos || !this.isCovered) && this.nodes.push(new ke(r - this.pos, -1, 0)), this.writtenTo = r, t > r && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, r) {
    if (e < t || r.heightRelevant) {
      let n = r.widget ? r.widget.estimatedHeight : 0, s = r.widget ? r.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = t - e;
      r.block ? this.addBlock(new Eu(o, n, r)) : (o || s || n >= Hm) && this.addLineDeco(n, s, o);
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
    let r = new le(t - e);
    return this.oracle.doc.lineAt(e).to == t && (r.flags |= 4), r;
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
  addLineDeco(e, t, r) {
    let n = this.ensureLine();
    n.length += r, n.collapsed += r, n.widgetHeight = Math.max(n.widgetHeight, e), n.breaks += t, this.writtenTo = this.pos = this.pos + r;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof ke) && !this.isCovered ? this.nodes.push(new ke(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let r = e;
    for (let n of this.nodes)
      n instanceof ke && n.updateHeight(this.oracle, r), r += n ? n.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, r, n) {
    let s = new rl(r, e);
    return z.spans(t, r, n, s, 0), s.finish(r);
  }
}
function Km(i, e, t) {
  let r = new Jm();
  return z.compare(i, e, t, r, 0), r.changes;
}
class Jm {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, r, n) {
    (e < t || r && r.heightRelevant || n && n.heightRelevant) && ci(e, t, this.changes, 5);
  }
}
function eg(i, e) {
  let t = i.getBoundingClientRect(), r = i.ownerDocument, n = r.defaultView || window, s = Math.max(0, t.left), o = Math.min(n.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(n.innerHeight, t.bottom);
  for (let h = i.parentNode; h && h != r.body; )
    if (h.nodeType == 1) {
      let c = h, u = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && u.overflow != "visible") {
        let f = c.getBoundingClientRect();
        s = Math.max(s, f.left), o = Math.min(o, f.right), l = Math.max(l, f.top), a = Math.min(h == i.parentNode ? n.innerHeight : a, f.bottom);
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
function tg(i) {
  let e = i.getBoundingClientRect(), t = i.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function ig(i, e) {
  let t = i.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class fs {
  constructor(e, t, r, n) {
    this.from = e, this.to = t, this.size = r, this.displaySize = n;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++) {
      let n = e[r], s = t[r];
      if (n.from != s.from || n.to != s.to || n.size != s.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return q.replace({
      widget: new rg(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class rg extends ur {
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
class Aa {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Xa, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = F.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(el).some((r) => typeof r != "function" && r.class == "cm-lineWrapping");
    this.heightOracle = new Nm(t), this.stateDeco = e.facet(rr).filter((r) => typeof r != "function"), this.heightMap = ge.empty().applyChanges(this.stateDeco, V.empty, this.heightOracle.setDoc(e.doc), [new Me(0, 0, 0, e.doc.length)]);
    for (let r = 0; r < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); r++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = q.set(this.lineGaps.map((r) => r.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let r = 0; r <= 1; r++) {
      let n = r ? t.head : t.anchor;
      if (!e.some(({ from: s, to: o }) => n >= s && n <= o)) {
        let { from: s, to: o } = this.lineBlockAt(n);
        e.push(new Cr(s, o));
      }
    }
    return this.viewports = e.sort((r, n) => r.from - n.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Xa : new nl(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(Li(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let r = this.stateDeco;
    this.stateDeco = this.state.facet(rr).filter((c) => typeof c != "function");
    let n = e.changedRanges, s = Me.extendWithRanges(n, Km(r, this.stateDeco, e ? e.changes : re.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Za(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), (this.heightMap.height != o || wi) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Up) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, r = window.getComputedStyle(t), n = this.heightOracle, s = r.whiteSpace;
    this.defaultTextDirection = r.direction == "rtl" ? F.RTL : F.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: Z, scaleY: x } = tu(t, l);
      (Z > 5e-3 && Math.abs(this.scaleX - Z) > 5e-3 || x > 5e-3 && Math.abs(this.scaleY - x) > 5e-3) && (this.scaleX = Z, this.scaleY = x, h |= 16, o = a = !0);
    }
    let u = (parseInt(r.paddingTop) || 0) * this.scaleY, f = (parseInt(r.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != u || this.paddingBottom != f) && (this.paddingTop = u, this.paddingBottom = f, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let O = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != O && (this.scrollAnchorHeight = -1, this.scrollTop = O), this.scrolledToBottom = ru(e.scrollDOM);
    let d = (this.printing ? ig : eg)(t, this.paddingTop), p = d.top - this.pixelViewport.top, g = d.bottom - this.pixelViewport.bottom;
    this.pixelViewport = d;
    let b = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (b != this.inView && (this.inView = b, b && (a = !0)), !this.inView && !this.scrollTarget && !tg(e.dom))
      return 0;
    let Q = l.width;
    if ((this.contentDOMWidth != Q || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let Z = e.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(Z) && (o = !0), o || n.lineWrapping && Math.abs(Q - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: x, charWidth: C, textHeight: v } = e.docView.measureTextSize();
        o = x > 0 && n.refresh(s, x, C, v, Math.max(5, Q / C), Z), o && (e.docView.minWidth = 0, h |= 16);
      }
      p > 0 && g > 0 ? c = Math.max(p, g) : p < 0 && g < 0 && (c = Math.min(p, g)), Za();
      for (let x of this.viewports) {
        let C = x.from == this.viewport.from ? Z : e.docView.measureVisibleLineHeights(x);
        this.heightMap = (o ? ge.empty().applyChanges(this.stateDeco, V.empty, this.heightOracle, [new Me(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new Gm(x.from, C));
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
    let r = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), n = this.heightMap, s = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Cr(n.lineAt(o - r * 1e3, I.ByHeight, s, 0, 0).from, n.lineAt(l + (1 - r) * 1e3, I.ByHeight, s, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = n.lineAt(h, I.ByPos, s, 0, 0), f;
        t.y == "center" ? f = (u.top + u.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? f = u.top : f = u.bottom - c, a = new Cr(n.lineAt(f - 1e3 / 2, I.ByHeight, s, 0, 0).from, n.lineAt(f + c + 1e3 / 2, I.ByHeight, s, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let r = t.mapPos(e.from, -1), n = t.mapPos(e.to, 1);
    return new Cr(this.heightMap.lineAt(r, I.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, I.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, r = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(e, I.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(t, I.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || n <= o - Math.max(10, Math.min(
      -r,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || s >= l + Math.max(10, Math.min(
      r,
      250
      /* VP.MaxCoverMargin */
    ))) && n > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let r = [];
    for (let n of e)
      t.touchesRange(n.from, n.to) || r.push(new fs(t.mapPos(n.from), t.mapPos(n.to), n.size, n.displaySize));
    return r;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let r = this.heightOracle.lineWrapping, n = r ? 1e4 : 2e3, s = n >> 1, o = n << 1;
    if (this.defaultTextDirection != F.LTR && !r)
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
      let g = sg(e, (b) => b.from >= f.from && b.to <= f.to && Math.abs(b.from - c) < s && Math.abs(b.to - u) < s && !p.some((Q) => b.from < Q && b.to > Q));
      if (!g) {
        if (u < f.to && t && r && t.visibleRanges.some((w) => w.from <= u && w.to >= u)) {
          let w = t.moveToLineBoundary(y.cursor(u), !1, !0).head;
          w > c && (u = w);
        }
        let b = this.gapSize(f, c, u, O), Q = r || b < 2e6 ? b : 2e6;
        g = new fs(c, u, b, Q);
      }
      l.push(g);
    }, h = (c) => {
      if (c.length < o || c.type != we.Text)
        return;
      let u = ng(c.from, c.to, this.stateDeco);
      if (u.total < o)
        return;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, O, d;
      if (r) {
        let p = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, b;
        if (f != null) {
          let Q = Xr(u, f), w = ((this.visibleBottom - this.visibleTop) / 2 + p) / c.height;
          g = Q - w, b = Q + w;
        } else
          g = (this.visibleTop - c.top - p) / c.height, b = (this.visibleBottom - c.top + p) / c.height;
        O = Ar(u, g), d = Ar(u, b);
      } else {
        let p = u.total * this.heightOracle.charWidth, g = n * this.heightOracle.charWidth, b = 0;
        if (p > 2e6)
          for (let C of e)
            C.from >= c.from && C.from < c.to && C.size != C.displaySize && C.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = C.size - C.displaySize);
        let Q = this.pixelViewport.left + b, w = this.pixelViewport.right + b, Z, x;
        if (f != null) {
          let C = Xr(u, f), v = ((w - Q) / 2 + g) / p;
          Z = C - v, x = C + v;
        } else
          Z = (Q - g) / p, x = (w + g) / p;
        O = Ar(u, Z), d = Ar(u, x);
      }
      O > c.from && a(c.from, O, c, u), d < c.to && a(d, c.to, c, u);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, r, n) {
    let s = Xr(n, r) - Xr(n, t);
    return this.heightOracle.lineWrapping ? e.height * s : n.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    fs.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = q.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let r = [];
    z.spans(t, this.viewport.from, this.viewport.to, {
      span(s, o) {
        r.push({ from: s, to: o });
      },
      point() {
      }
    }, 20);
    let n = 0;
    if (r.length != this.visibleRanges.length)
      n = 12;
    else
      for (let s = 0; s < r.length && !(n & 8); s++) {
        let o = this.visibleRanges[s], l = r[s];
        (o.from != l.from || o.to != l.to) && (n |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (n |= 8));
      }
    return this.visibleRanges = r, n;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Li(this.heightMap.lineAt(e, I.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || Li(this.heightMap.lineAt(this.scaler.fromDOM(e), I.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Li(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Cr {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function ng(i, e, t) {
  let r = [], n = i, s = 0;
  return z.spans(t, i, e, {
    span() {
    },
    point(o, l) {
      o > n && (r.push({ from: n, to: o }), s += o - n), n = l;
    }
  }, 20), n < e && (r.push({ from: n, to: e }), s += e - n), { total: s, ranges: r };
}
function Ar({ total: i, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let r = Math.floor(i * t);
  for (let n = 0; ; n++) {
    let { from: s, to: o } = e[n], l = o - s;
    if (r <= l)
      return s + r;
    r -= l;
  }
}
function Xr(i, e) {
  let t = 0;
  for (let { from: r, to: n } of i.ranges) {
    if (e <= n) {
      t += e - r;
      break;
    }
    t += n - r;
  }
  return t / i.total;
}
function sg(i, e) {
  for (let t of i)
    if (e(t))
      return t;
}
const Xa = {
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
class nl {
  constructor(e, t, r) {
    let n = 0, s = 0, o = 0;
    this.viewports = r.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, I.ByPos, e, 0, 0).top, c = t.lineAt(a, I.ByPos, e, 0, 0).bottom;
      return n += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (t.height - n);
    for (let l of this.viewports)
      l.domTop = o + (l.top - s) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), s = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, r = 0, n = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.top)
        return n + (e - r) * this.scale;
      if (e <= s.bottom)
        return s.domTop + (e - s.top);
      r = s.bottom, n = s.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, r = 0, n = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.domTop)
        return r + (e - n) / this.scale;
      if (e <= s.domBottom)
        return s.top + (e - s.domTop);
      r = s.bottom, n = s.domBottom;
    }
  }
  eq(e) {
    return e instanceof nl ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, r) => t.from == e.viewports[r].from && t.to == e.viewports[r].to) : !1;
  }
}
function Li(i, e) {
  if (e.scale == 1)
    return i;
  let t = e.toDOM(i.top), r = e.toDOM(i.bottom);
  return new Be(i.from, i.length, t, r - t, Array.isArray(i._content) ? i._content.map((n) => Li(n, e)) : i._content);
}
const Rr = /* @__PURE__ */ k.define({ combine: (i) => i.join(" ") }), po = /* @__PURE__ */ k.define({ combine: (i) => i.indexOf(!0) > -1 }), mo = /* @__PURE__ */ zt.newName(), Wu = /* @__PURE__ */ zt.newName(), Du = /* @__PURE__ */ zt.newName(), Bu = { "&light": "." + Wu, "&dark": "." + Du };
function go(i, e, t) {
  return new zt(e, {
    finish(r) {
      return /&/.test(r) ? r.replace(/&\w*/, (n) => {
        if (n == "&")
          return i;
        if (!t || !t[n])
          throw new RangeError(`Unsupported selector: ${n}`);
        return t[n];
      }) : i + " " + r;
    }
  });
}
const og = /* @__PURE__ */ go("." + mo, {
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
}, Bu), lg = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Os = $.ie && $.ie_version <= 11;
class ag {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new _p(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let r of t)
        this.queue.push(r);
      ($.ie && $.ie_version <= 11 || $.ios && e.composing) && t.some((r) => r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && $.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !($.chrome && $.chrome_version < 126) && (this.editContext = new cg(e), e.state.facet(pt) && (e.contentDOM.editContext = this.editContext.editContext)), Os && (this.onCharData = (t) => {
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
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, r) => t != e[r]))) {
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
    let { view: r } = this, n = this.selectionRange;
    if (r.state.facet(pt) ? r.root.activeElement != this.dom : !Ir(this.dom, n))
      return;
    let s = n.anchorNode && r.docView.tile.nearest(n.anchorNode);
    if (s && s.isWidget() && s.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    ($.ie && $.ie_version <= 11 || $.android && $.chrome) && !r.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    n.focusNode && Gi(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = tr(e.root);
    if (!t)
      return !1;
    let r = $.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && hg(this.view, t) || t;
    if (!r || this.selectionRange.eq(r))
      return !1;
    let n = Ir(this.dom, r);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Yp(this.dom, r) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(r), n && (this.selectionChanged = !0), !0);
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
    for (let r = this.dom; r; )
      if (r.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == r ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(r), r = r.assignedSlot || r.parentNode;
      else if (r.nodeType == 11)
        r = r.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let r of this.scrollTargets)
        r.removeEventListener("scroll", this.onScroll);
      for (let r of this.scrollTargets = t)
        r.addEventListener("scroll", this.onScroll);
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
    this.active || (this.observer.observe(this.dom, lg), Os && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
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
    var r;
    if (!this.delayedAndroidKey) {
      let n = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && ui(this.dom, s.key, s.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((r = this.delayedAndroidKey) === null || r === void 0) && r.force)
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
    let t = -1, r = -1, n = !1;
    for (let s of e) {
      let o = this.readMutation(s);
      o && (o.typeOver && (n = !0), t == -1 ? { from: t, to: r } = o : (t = Math.min(o.from, t), r = Math.max(o.to, r)));
    }
    return { from: t, to: r, typeOver: n };
  }
  readChange() {
    let { from: e, to: t, typeOver: r } = this.processRecords(), n = this.selectionChanged && Ir(this.dom, this.selectionRange);
    if (e < 0 && !n)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let s = new Pm(this.view, e, t, r);
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
    let r = this.view.state, n = Cu(this.view, t);
    return this.view.state == r && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), n;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let r = Ra(t, e.previousSibling || e.target.previousSibling, -1), n = Ra(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: r ? t.posAfter(r) : t.posAtStart,
        to: n ? t.posBefore(n) : t.posAtEnd,
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
    var e, t, r;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (r = this.resizeScroll) === null || r === void 0 || r.disconnect();
    for (let n of this.scrollTargets)
      n.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Ra(i, e, t) {
  for (; e; ) {
    let r = ne.get(e);
    if (r && r.parent == i)
      return r;
    let n = e.parentNode;
    e = n != i.dom ? n : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Ma(i, e) {
  let t = e.startContainer, r = e.startOffset, n = e.endContainer, s = e.endOffset, o = i.docView.domAtPos(i.state.selection.main.anchor, 1);
  return Gi(o.node, o.offset, n, s) && ([t, r, n, s] = [n, s, t, r]), { anchorNode: t, anchorOffset: r, focusNode: n, focusOffset: s };
}
function hg(i, e) {
  if (e.getComposedRanges) {
    let n = e.getComposedRanges(i.root)[0];
    if (n)
      return Ma(i, n);
  }
  let t = null;
  function r(n) {
    n.preventDefault(), n.stopImmediatePropagation(), t = n.getTargetRanges()[0];
  }
  return i.contentDOM.addEventListener("beforeinput", r, !0), i.dom.ownerDocument.execCommand("indent"), i.contentDOM.removeEventListener("beforeinput", r, !0), t ? Ma(i, t) : null;
}
class cg {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (r) => {
      let n = e.state.selection.main, { anchor: s, head: o } = n, l = this.toEditorPos(r.updateRangeStart), a = this.toEditorPos(r.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: r.updateRangeStart, editorBase: l, drifted: !1 });
      let h = a - l > r.text.length;
      l == this.from && s < this.from ? l = s : a == this.to && s > this.to && (a = s);
      let c = Au(e.state.sliceDoc(l, a), r.text, (h ? n.from : n.to) - l, h ? "end" : null);
      if (!c) {
        let f = y.single(this.toEditorPos(r.selectionStart), this.toEditorPos(r.selectionEnd));
        f.main.eq(n) || e.dispatch({ selection: f, userEvent: "select" });
        return;
      }
      let u = {
        from: c.from + l,
        to: c.toA + l,
        insert: V.of(r.text.slice(c.from, c.toB).split(`
`))
      };
      if (($.mac || $.android) && u.from == o - 1 && /^\. ?$/.test(r.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (u = { from: l, to: a, insert: V.of([r.text.replace(".", " ")]) }), this.pendingContextChange = u, !e.state.readOnly) {
        let f = this.to - this.from + (u.to - u.from + u.insert.length);
        il(e, u, y.single(this.toEditorPos(r.selectionStart, f), this.toEditorPos(r.selectionEnd, f)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), u.from < u.to && !u.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, r.updateRangeStart - 1), Math.min(t.text.length, r.updateRangeStart + 1))) && this.handlers.compositionend(r);
    }, this.handlers.characterboundsupdate = (r) => {
      let n = [], s = null;
      for (let o = this.toEditorPos(r.rangeStart), l = this.toEditorPos(r.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        s = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || s || new DOMRect(), n.push(s);
      }
      t.updateCharacterBounds(r.rangeStart, n);
    }, this.handlers.textformatupdate = (r) => {
      let n = [];
      for (let s of r.getTextFormats()) {
        let o = s.underlineStyle, l = s.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(s.rangeStart), h = this.toEditorPos(s.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            n.push(q.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: yu.of(q.set(n)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: r } = this.composing;
        this.composing = null, r && this.reset(e.state);
      }
    };
    for (let r in this.handlers)
      t.addEventListener(r, this.handlers[r]);
    this.measureReq = { read: (r) => {
      this.editContext.updateControlBounds(r.contentDOM.getBoundingClientRect());
      let n = tr(r.root);
      n && n.rangeCount && this.editContext.updateSelectionBounds(n.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, r = !1, n = this.pendingContextChange;
    return e.changes.iterChanges((s, o, l, a, h) => {
      if (r)
        return;
      let c = h.length - (o - s);
      if (n && o >= n.to)
        if (n.from == s && n.to == o && n.insert.eq(h)) {
          n = this.pendingContextChange = null, t += c, this.to += c;
          return;
        } else
          n = null, this.revertPending(e.state);
      if (s += t, o += t, o <= this.from)
        this.from += c, this.to += c;
      else if (s < this.to) {
        if (s < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          r = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(s), this.toContextPos(o), h.toString()), this.to += c;
      }
      t += c;
    }), n && !r && this.revertPending(e.state), !r;
  }
  update(e) {
    let t = this.pendingContextChange, r = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(r.from, r.to) && e.transactions.some((n) => !n.isUserEvent("input.type") && n.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
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
    let { main: t } = e.selection, r = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), n = this.toContextPos(t.head);
    (this.editContext.selectionStart != r || this.editContext.selectionEnd != n) && this.editContext.updateSelection(r, n);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let r = this.composing;
    return r && r.drifted ? r.editorBase + (e - r.contextBase) : e + this.from;
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
    let { dispatch: r } = e;
    this.dispatchTransactions = e.dispatchTransactions || r && ((n) => n.forEach((s) => r(s, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = e.root || qp(e.parent) || document, this.viewState = new Aa(e.state || E.create(e)), e.scrollTo && e.scrollTo.is(Pr) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(si).map((n) => new ls(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new ag(this), this.inputState = new Am(this), this.inputState.ensureHandlers(this.plugins), this.docView = new ga(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
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
    let t = !1, r = !1, n, s = this.state;
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
    e.some((f) => f.annotation(_u)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = qu(s, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (c = null)) : this.observer.clear(), s.facet(E.phrases) != this.state.facet(E.phrases))
      return this.setState(s);
    n = cn.create(this, s, e), n.flags |= l;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (u && (u = u.map(f.changes)), f.scrollIntoView) {
          let { main: O } = f.state.selection;
          u = new fi(O.empty ? O : y.cursor(O.head, O.head > O.anchor ? -1 : 1));
        }
        for (let O of f.effects)
          O.is(Pr) && (u = O.value.clip(this.state));
      }
      this.viewState.update(n, u), this.bidiCache = dn.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), t = this.docView.update(n), this.state.facet(Di) != this.styleModules && this.mountStyles(), r = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(Rr) != n.state.facet(Rr) && (this.viewState.mustMeasureContent = !0), (t || r || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !n.empty)
      for (let f of this.state.facet(co))
        try {
          f(n);
        } catch (O) {
          Pe(this.state, O, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !Cu(this, c) && h.force && ui(this.contentDOM, h.key, h.keyCode);
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
      for (let r of this.plugins)
        r.destroy(this);
      this.viewState = new Aa(e), this.plugins = e.facet(si).map((r) => new ls(r)), this.pluginMap.clear();
      for (let r of this.plugins)
        r.update(this);
      this.docView.destroy(), this.docView = new ga(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(si), r = e.state.facet(si);
    if (t != r) {
      let n = [];
      for (let s of r) {
        let o = t.indexOf(s);
        if (o < 0)
          n.push(new ls(s));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, n.push(l);
        }
      }
      for (let s of this.plugins)
        s.mustUpdate != e && s.destroy(this);
      this.plugins = n, this.pluginMap.clear();
    } else
      for (let n of this.plugins)
        n.mustUpdate = e;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
    t != r && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (r) {
          Pe(this.state, r, "doc view update listener");
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
    let t = null, r = this.scrollDOM, n = r.scrollTop * this.scaleY, { scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
    Math.abs(n - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (ru(r))
            s = -1, o = this.viewState.heightMap.height;
          else {
            let O = this.viewState.scrollAnchorAt(n);
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
            return Pe(this.state, d), za;
          }
        }), u = cn.create(this, this.state, []), f = !1;
        u.flags |= a, t ? t.flags |= a : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), f = this.docView.update(u), f && this.docViewUpdate());
        for (let O = 0; O < h.length; O++)
          if (c[O] != za)
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
                n = n + d, r.scrollTop = n / this.scaleY, o = -1;
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
    return mo + " " + (this.state.facet(po) ? Du : Wu) + " " + this.state.facet(Rr);
  }
  updateAttrs() {
    let e = Va(this, Qu, {
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
    this.state.readOnly && (t["aria-readonly"] = "true"), Va(this, el, t);
    let r = this.observer.ignore(() => {
      let n = ua(this.contentDOM, this.contentAttrs, t), s = ua(this.dom, this.editorAttrs, e);
      return n || s;
    });
    return this.editorAttrs = e, this.contentAttrs = t, r;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let r of e)
      for (let n of r.effects)
        if (n.is(T.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = n.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Di);
    let e = this.state.facet(T.cspNonce);
    zt.mount(this.root, this.styleModules.concat(og).reverse(), e ? { nonce: e } : void 0);
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
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((r) => r.plugin == e) || null), t && t.update(this).value;
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
  moveByChar(e, t, r) {
    return us(this, e, ba(this, e, t, r));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return us(this, e, ba(this, e, t, (r) => xm(this, e.head, r)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let r = this.bidiSpans(e), n = this.textDirectionAt(e.from), s = r[t ? r.length - 1 : 0];
    return y.cursor(s.side(t, n) + e.from, s.forward(!t, n) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, r = !0) {
    return Sm(this, e, t, r);
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
  moveVertically(e, t, r) {
    return us(this, e, wm(this, e, t, r));
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
    let r = fo(this, e, t);
    return r && r.pos;
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
    let r = this.docView.coordsAt(e, t);
    if (!r || r.left == r.right)
      return r;
    let n = this.state.doc.lineAt(e), s = this.bidiSpans(n), o = s[mt.find(s, e - n.from, -1, t)];
    return hn(r, o.dir == F.LTR == t > 0);
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
    return !this.state.facet(gu) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
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
    if (e.length > ug)
      return hu(e.length);
    let t = this.textDirectionAt(e.from), r;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == t && (s.fresh || au(s.isolates, r = da(this, e))))
        return s.order;
    r || (r = da(this, e));
    let n = Ip(e.text, t, r);
    return this.bidiCache.push(new dn(e.from, e.to, t, r, !0, n)), n;
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
      iu(this.contentDOM), this.docView.updateSelection();
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
    return Pr.of(new fi(typeof e == "number" ? y.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
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
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, r = this.viewState.scrollAnchorAt(e);
    return Pr.of(new fi(y.cursor(r.from), "start", "start", r.top - e, t, !0));
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
    let r = zt.newName(), n = [Rr.of(r), Di.of(go(`.${r}`, e))];
    return t && t.dark && n.push(po.of(!0)), n;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return Ai.lowest(Di.of(go("." + mo, e, Bu)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let r = e.querySelector(".cm-content"), n = r && ne.get(r) || ne.get(e);
    return ((t = n == null ? void 0 : n.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
T.styleModule = Di;
T.inputHandler = pu;
T.clipboardInputFilter = Ko;
T.clipboardOutputFilter = Jo;
T.scrollHandler = bu;
T.focusChangeEffect = mu;
T.perLineTextDirection = gu;
T.exceptionSink = du;
T.updateListener = co;
T.editable = pt;
T.mouseSelectionStyle = Ou;
T.dragMovesSelection = fu;
T.clickAddsSelectionRange = uu;
T.decorations = rr;
T.blockWrappers = Su;
T.outerDecorations = xu;
T.atomicRanges = dr;
T.bidiIsolatedRanges = wu;
T.scrollMargins = $u;
T.darkTheme = po;
T.cspNonce = /* @__PURE__ */ k.define({ combine: (i) => i.length ? i[0] : "" });
T.contentAttributes = el;
T.editorAttributes = Qu;
T.lineWrapping = /* @__PURE__ */ T.contentAttributes.of({ class: "cm-lineWrapping" });
T.announce = /* @__PURE__ */ _.define();
const ug = 4096, za = {};
class dn {
  constructor(e, t, r, n, s, o) {
    this.from = e, this.to = t, this.dir = r, this.isolates = n, this.fresh = s, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((s) => s.fresh))
      return e;
    let r = [], n = e.length ? e[e.length - 1].dir : F.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == n && !t.touchesRange(o.from, o.to) && r.push(new dn(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return r;
  }
}
function Va(i, e, t) {
  for (let r = i.state.facet(e), n = r.length - 1; n >= 0; n--) {
    let s = r[n], o = typeof s == "function" ? s(i) : s;
    o && Uo(o, t);
  }
  return t;
}
const fg = $.mac ? "mac" : $.windows ? "win" : $.linux ? "linux" : "key";
function Og(i, e) {
  const t = i.split(/-(?!$)/);
  let r = t[t.length - 1];
  r == "Space" && (r = " ");
  let n, s, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      s = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? l = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return n && (r = "Alt-" + r), s && (r = "Ctrl-" + r), l && (r = "Meta-" + r), o && (r = "Shift-" + r), r;
}
function Mr(i, e, t) {
  return e.altKey && (i = "Alt-" + i), e.ctrlKey && (i = "Ctrl-" + i), e.metaKey && (i = "Meta-" + i), t !== !1 && e.shiftKey && (i = "Shift-" + i), i;
}
const dg = /* @__PURE__ */ Ai.default(/* @__PURE__ */ T.domEventHandlers({
  keydown(i, e) {
    return bg(pg(e.state), i, e, "editor");
  }
})), pr = /* @__PURE__ */ k.define({ enables: dg }), _a = /* @__PURE__ */ new WeakMap();
function pg(i) {
  let e = i.facet(pr), t = _a.get(e);
  return t || _a.set(e, t = gg(e.reduce((r, n) => r.concat(n), []))), t;
}
let Ct = null;
const mg = 4e3;
function gg(i, e = fg) {
  let t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), n = (o, l) => {
    let a = r[o];
    if (a == null)
      r[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (o, l, a, h, c) => {
    var u, f;
    let O = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), d = l.split(/ (?!$)/).map((b) => Og(b, e));
    for (let b = 1; b < d.length; b++) {
      let Q = d.slice(0, b).join(" ");
      n(Q, !0), O[Q] || (O[Q] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(w) => {
          let Z = Ct = { view: w, prefix: Q, scope: o };
          return setTimeout(() => {
            Ct == Z && (Ct = null);
          }, mg), !0;
        }]
      });
    }
    let p = d.join(" ");
    n(p, !1);
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
function bg(i, e, t, r) {
  bo = e;
  let n = Zp(e), s = it(n, 0), o = Zt(s) == n.length && n != " ", l = "", a = !1, h = !1, c = !1;
  Ct && Ct.view == t && Ct.scope == r && (l = Ct.prefix + " ", Ru.indexOf(e.keyCode) < 0 && (h = !0, Ct = null));
  let u = /* @__PURE__ */ new Set(), f = (g) => {
    if (g) {
      for (let b of g.run)
        if (!u.has(b) && (u.add(b), b(t)))
          return g.stopPropagation && (c = !0), !0;
      g.preventDefault && (g.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, O = i[r], d, p;
  return O && (f(O[l + Mr(n, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !($.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !($.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (d = Vt[e.keyCode]) && d != n ? (f(O[l + Mr(d, e, !0)]) || e.shiftKey && (p = Ji[e.keyCode]) != n && p != d && f(O[l + Mr(p, e, !1)])) && (a = !0) : o && e.shiftKey && f(O[l + Mr(n, e, !0)]) && (a = !0), !a && f(O._any) && (a = !0)), h && (a = !0), a && c && e.stopPropagation(), bo = null, a;
}
function yg() {
  return Sg;
}
const Qg = /* @__PURE__ */ q.line({ class: "cm-activeLine" }), Sg = /* @__PURE__ */ Te.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.docChanged || i.selectionSet) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = -1, t = [];
    for (let r of i.state.selection.ranges) {
      let n = i.lineBlockAt(r.head);
      n.from > e && (t.push(Qg.range(n.from)), e = n.from);
    }
    return q.set(t);
  }
}, {
  decorations: (i) => i.decorations
}), zr = "-10000px";
class xg {
  constructor(e, t, r, n) {
    this.facet = t, this.createTooltipView = r, this.removeTooltipView = n, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let s = null;
    this.tooltipViews = this.tooltips.map((o) => s = r(o, s));
  }
  update(e, t) {
    var r;
    let n = e.state.facet(this.facet), s = n.filter((a) => a);
    if (n === this.input) {
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
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (r = a.destroy) === null || r === void 0 || r.call(a));
    return t && (l.forEach((a, h) => t[h] = a), t.length = l.length), this.input = n, this.tooltips = s, this.tooltipViews = o, !0;
  }
}
function wg(i) {
  let e = i.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const ds = /* @__PURE__ */ k.define({
  combine: (i) => {
    var e, t, r;
    return {
      position: $.ios ? "absolute" : ((e = i.find((n) => n.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = i.find((n) => n.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((r = i.find((n) => n.tooltipSpace)) === null || r === void 0 ? void 0 : r.tooltipSpace) || wg
    };
  }
}), qa = /* @__PURE__ */ new WeakMap(), Lu = /* @__PURE__ */ Te.fromClass(class {
  constructor(i) {
    this.view = i, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = i.state.facet(ds);
    this.position = e.position, this.parent = e.parent, this.classes = i.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new xg(i, sl, (t, r) => this.createTooltip(t, r), (t) => {
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
    let t = e || i.geometryChanged, r = i.state.facet(ds);
    if (r.position != this.position && !this.madeAbsolute) {
      this.position = r.position;
      for (let n of this.manager.tooltipViews)
        n.dom.style.position = this.position;
      t = !0;
    }
    if (r.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = r.parent, this.createContainer();
      for (let n of this.manager.tooltipViews)
        this.container.appendChild(n.dom);
      t = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(i, e) {
    let t = i.create(this.view), r = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), i.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let n = document.createElement("div");
      n.className = "cm-tooltip-arrow", t.dom.appendChild(n);
    }
    return t.dom.style.position = this.position, t.dom.style.top = zr, t.dom.style.left = "0px", this.container.insertBefore(t.dom, r), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var i, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let r of this.manager.tooltipViews)
      r.dom.remove(), (i = r.destroy) === null || i === void 0 || i.call(r);
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
    let r = this.view.scrollDOM.getBoundingClientRect(), n = tl(this.view);
    return {
      visible: {
        left: r.left + n.left,
        top: r.top + n.top,
        right: r.right - n.right,
        bottom: r.bottom - n.bottom
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
    let { visible: t, space: r, scaleX: n, scaleY: s } = i, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, u = i.pos[l], f = i.size[l];
      if (!u || a.clip !== !1 && (u.bottom <= Math.max(t.top, r.top) || u.top >= Math.min(t.bottom, r.bottom) || u.right < Math.max(t.left, r.left) - 0.1 || u.left > Math.min(t.right, r.right) + 0.1)) {
        c.style.top = zr;
        continue;
      }
      let O = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, d = O ? 7 : 0, p = f.right - f.left, g = (e = qa.get(h)) !== null && e !== void 0 ? e : f.bottom - f.top, b = h.offset || vg, Q = this.view.textDirection == F.LTR, w = f.width > r.right - r.left ? Q ? r.left : r.right - f.width : Q ? Math.max(r.left, Math.min(u.left - (O ? 14 : 0) + b.x, r.right - p)) : Math.min(Math.max(r.left, u.left - p + (O ? 14 : 0) - b.x), r.right - p), Z = this.above[l];
      !a.strictSide && (Z ? u.top - g - d - b.y < r.top : u.bottom + g + d + b.y > r.bottom) && Z == r.bottom - u.bottom > u.top - r.top && (Z = this.above[l] = !Z);
      let x = (Z ? u.top - r.top : r.bottom - u.bottom) - d;
      if (x < g && h.resize !== !1) {
        if (x < this.view.defaultLineHeight) {
          c.style.top = zr;
          continue;
        }
        qa.set(h, g), c.style.height = (g = x) / s + "px";
      } else c.style.height && (c.style.height = "");
      let C = Z ? u.top - g - d - b.y : u.bottom + d + b.y, v = w + p;
      if (h.overlap !== !0)
        for (let Y of o)
          Y.left < v && Y.right > w && Y.top < C + g && Y.bottom > C && (C = Z ? Y.top - g - 2 - d : Y.bottom + d + 2);
      if (this.position == "absolute" ? (c.style.top = (C - i.parent.top) / s + "px", Ya(c, (w - i.parent.left) / n)) : (c.style.top = C / s + "px", Ya(c, w / n)), O) {
        let Y = u.left + (Q ? b.x : -b.x) - (w + 14 - 7);
        O.style.left = Y / n + "px";
      }
      h.overlap !== !0 && o.push({ left: w, top: C, right: v, bottom: C + g }), c.classList.toggle("cm-tooltip-above", Z), c.classList.toggle("cm-tooltip-below", !Z), h.positioned && h.positioned(i.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let i of this.manager.tooltipViews)
        i.dom.style.top = zr;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function Ya(i, e) {
  let t = parseInt(i.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (i.style.left = e + "px");
}
const $g = /* @__PURE__ */ T.baseTheme({
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
}), vg = { x: 0, y: 0 }, sl = /* @__PURE__ */ k.define({
  enables: [Lu, $g]
});
function ju(i, e) {
  let t = i.plugin(Lu);
  if (!t)
    return null;
  let r = t.manager.tooltips.indexOf(e);
  return r < 0 ? null : t.manager.tooltipViews[r];
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
const Ur = /* @__PURE__ */ k.define(), kg = /* @__PURE__ */ k.define(), Fr = /* @__PURE__ */ k.define(), Ea = /* @__PURE__ */ k.define({
  combine: (i) => i.some((e) => e)
});
function Pg(i) {
  return [
    Tg
  ];
}
const Tg = /* @__PURE__ */ Te.fromClass(class {
  constructor(i) {
    this.view = i, this.domAfter = null, this.prevViewport = i.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = i.state.facet(Fr).map((e) => new Da(i, e)), this.fixed = !i.state.facet(Ea);
    for (let e of this.gutters)
      e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), i.scrollDOM.insertBefore(this.dom, i.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(i) {
    if (this.updateGutters(i)) {
      let e = this.prevViewport, t = i.view.viewport, r = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(r < (t.to - t.from) * 0.8);
    }
    if (i.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(Ea) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = i.view.viewport;
  }
  syncGutters(i) {
    let e = this.dom.nextSibling;
    i && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = z.iter(this.view.state.facet(Ur), this.view.viewport.from), r = [], n = this.gutters.map((s) => new Zg(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks)
      if (r.length && (r = []), Array.isArray(s.type)) {
        let o = !0;
        for (let l of s.type)
          if (l.type == we.Text && o) {
            yo(t, r, l.from);
            for (let a of n)
              a.line(this.view, l, r);
            o = !1;
          } else if (l.widget)
            for (let a of n)
              a.widget(this.view, l);
      } else if (s.type == we.Text) {
        yo(t, r, s.from);
        for (let o of n)
          o.line(this.view, s, r);
      } else if (s.widget)
        for (let o of n)
          o.widget(this.view, s);
    for (let s of n)
      s.finish();
    i && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(i) {
    let e = i.startState.facet(Fr), t = i.state.facet(Fr), r = i.docChanged || i.heightChanged || i.viewportChanged || !z.eq(i.startState.facet(Ur), i.state.facet(Ur), i.view.viewport.from, i.view.viewport.to);
    if (e == t)
      for (let n of this.gutters)
        n.update(i) && (r = !0);
    else {
      r = !0;
      let n = [];
      for (let s of t) {
        let o = e.indexOf(s);
        o < 0 ? n.push(new Da(this.view, s)) : (this.gutters[o].update(i), n.push(this.gutters[o]));
      }
      for (let s of this.gutters)
        s.dom.remove(), n.indexOf(s) < 0 && s.destroy();
      for (let s of n)
        s.config.side == "after" ? this.getDOMAfter().appendChild(s.dom) : this.dom.appendChild(s.dom);
      this.gutters = n;
    }
    return r;
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
    let r = t.dom.offsetWidth * e.scaleX, n = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    return e.textDirection == F.LTR ? { left: r, right: n } : { right: r, left: n };
  })
});
function Wa(i) {
  return Array.isArray(i) ? i : [i];
}
function yo(i, e, t) {
  for (; i.value && i.from <= t; )
    i.from == t && e.push(i.value), i.next();
}
class Zg {
  constructor(e, t, r) {
    this.gutter = e, this.height = r, this.i = 0, this.cursor = z.iter(e.markers, t.from);
  }
  addElement(e, t, r) {
    let { gutter: n } = this, s = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == n.elements.length) {
      let l = new Iu(e, o, s, r);
      n.elements.push(l), n.dom.appendChild(l.dom);
    } else
      n.elements[this.i].update(e, o, s, r);
    this.height = t.bottom, this.i++;
  }
  line(e, t, r) {
    let n = [];
    yo(this.cursor, n, t.from), r.length && (n = n.concat(r));
    let s = this.gutter.config.lineMarker(e, t, n);
    s && n.unshift(s);
    let o = this.gutter;
    n.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, n);
  }
  widget(e, t) {
    let r = this.gutter.config.widgetMarker(e, t.widget, t), n = r ? [r] : null;
    for (let s of e.state.facet(kg)) {
      let o = s(e, t.widget, t);
      o && (n || (n = [])).push(o);
    }
    n && this.addElement(e, t, n);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Da {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let r in t.domEventHandlers)
      this.dom.addEventListener(r, (n) => {
        let s = n.target, o;
        if (s != this.dom && this.dom.contains(s)) {
          for (; s.parentNode != this.dom; )
            s = s.parentNode;
          let a = s.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = n.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[r](e, l, n) && n.preventDefault();
      });
    this.markers = Wa(t.markers(e)), t.initialSpacer && (this.spacer = new Iu(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = Wa(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let n = this.config.updateSpacer(this.spacer.markers[0], e);
      n != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [n]);
    }
    let r = e.view.viewport;
    return !z.eq(this.markers, t, r.from, r.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Iu {
  constructor(e, t, r, n) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, r, n);
  }
  update(e, t, r, n) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != r && (this.dom.style.marginTop = (this.above = r) ? r + "px" : ""), Cg(this.markers, n) || this.setMarkers(e, n);
  }
  setMarkers(e, t) {
    let r = "cm-gutterElement", n = this.dom.firstChild;
    for (let s = 0, o = 0; ; ) {
      let l = o, a = s < t.length ? t[s++] : null, h = !1;
      if (a) {
        let c = a.elementClass;
        c && (r += " " + c);
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
          c.destroy(n);
          let u = n.nextSibling;
          n.remove(), n = u;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? n = n.nextSibling : this.dom.insertBefore(a.toDOM(e), n)), h && o++;
    }
    this.dom.className = r, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Cg(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (!i[t].compare(e[t]))
      return !1;
  return !0;
}
const Ag = /* @__PURE__ */ k.define(), Xg = /* @__PURE__ */ k.define(), oi = /* @__PURE__ */ k.define({
  combine(i) {
    return Vn(i, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let r = Object.assign({}, e);
        for (let n in t) {
          let s = r[n], o = t[n];
          r[n] = s ? (l, a, h) => s(l, a, h) || o(l, a, h) : o;
        }
        return r;
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
const Rg = /* @__PURE__ */ Fr.compute([oi], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Ag);
  },
  lineMarker(e, t, r) {
    return r.some((n) => n.toDOM) ? null : new ps(ms(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, r) => {
    for (let n of e.state.facet(Xg)) {
      let s = n(e, t, r);
      if (s)
        return s;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(oi) != e.state.facet(oi),
  initialSpacer(e) {
    return new ps(ms(e, Ba(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let r = ms(t.view, Ba(t.view.state.doc.lines));
    return r == e.number ? e : new ps(r);
  },
  domEventHandlers: i.facet(oi).domEventHandlers,
  side: "before"
}));
function Mg(i = {}) {
  return [
    oi.of(i),
    Pg(),
    Rg
  ];
}
function Ba(i) {
  let e = 9;
  for (; e < i; )
    e = e * 10 + 9;
  return e;
}
const zg = /* @__PURE__ */ new class extends qt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Vg = /* @__PURE__ */ Ur.compute(["selection"], (i) => {
  let e = [], t = -1;
  for (let r of i.selection.ranges) {
    let n = i.doc.lineAt(r.head).from;
    n > t && (t = n, e.push(zg.range(n)));
  }
  return z.of(e);
});
function _g() {
  return Vg;
}
const Nu = 1024;
let qg = 0;
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
    this.id = qg++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
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
      let r = e(t);
      return r === void 0 ? null : [this, r];
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
class nr {
  constructor(e, t, r) {
    this.tree = e, this.overlay = t, this.parser = r;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[R.mounted.id];
  }
}
const Yg = /* @__PURE__ */ Object.create(null);
class be {
  /**
  @internal
  */
  constructor(e, t, r, n = 0) {
    this.name = e, this.props = t, this.id = r, this.flags = n;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Yg, r = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), n = new be(e.name || "", t, e.id, r);
    if (e.props) {
      for (let s of e.props)
        if (Array.isArray(s) || (s = s(n)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[s[0].id] = s[1];
        }
    }
    return n;
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
    for (let r in e)
      for (let n of r.split(" "))
        t[n] = e[r];
    return (r) => {
      for (let n = r.prop(R.group), s = -1; s < (n ? n.length : 0); s++) {
        let o = t[s < 0 ? r.name : n[s]];
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
    for (let r of this.types) {
      let n = null;
      for (let s of e) {
        let o = s(r);
        if (o) {
          n || (n = Object.assign({}, r.props));
          let l = o[1], a = o[0];
          a.combine && a.id in n && (l = a.combine(n[a.id], l)), n[a.id] = l;
        }
      }
      t.push(n ? new be(r.name, n, r.id, r.flags) : r);
    }
    return new ol(t);
  }
}
const Vr = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap();
var N;
(function(i) {
  i[i.ExcludeBuffers = 1] = "ExcludeBuffers", i[i.IncludeAnonymous = 2] = "IncludeAnonymous", i[i.IgnoreMounts = 4] = "IgnoreMounts", i[i.IgnoreOverlays = 8] = "IgnoreOverlays";
})(N || (N = {}));
class H {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, r, n, s) {
    if (this.type = e, this.children = t, this.positions = r, this.length = n, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = nr.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let r of this.children) {
      let n = r.toString();
      n && (t && (t += ","), t += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new pn(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, r = 0) {
    let n = Vr.get(this) || this.topNode, s = new pn(n);
    return s.moveTo(e, t), Vr.set(this, s._tree), s;
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
    let r = sr(Vr.get(this) || this.topNode, e, t, !1);
    return Vr.set(this, r), r;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let r = sr(La.get(this) || this.topNode, e, t, !0);
    return La.set(this, r), r;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return Dg(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: r, from: n = 0, to: s = this.length } = e, o = e.mode || 0, l = (o & N.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | N.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= s && a.to >= n && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && r && (l || !a.type.isAnonymous) && r(a), !a.nextSibling(); ) {
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
    return this.children.length <= 8 ? this : hl(be.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, r, n) => new H(this.type, t, r, n, this.propValues), e.makeTree || ((t, r, n) => new H(be.none, t, r, n)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return Bg(e);
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
  constructor(e, t, r) {
    this.buffer = e, this.length = t, this.set = r;
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
    let t = this.buffer[e], r = this.buffer[e + 3], n = this.set.types[t], s = n.name;
    if (/\W/.test(s) && !n.isError && (s = JSON.stringify(s)), e += 4, r == e)
      return s;
    let o = [];
    for (; e < r; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, r, n, s) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(Gu(s, n, o[a + 1], o[a + 2]) && (l = a, r > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, t, r) {
    let n = this.buffer, s = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      s[a++] = n[l++], s[a++] = n[l++] - r;
      let h = s[a++] = n[l++] - r;
      s[a++] = n[l++] - e, o = Math.max(o, h);
    }
    return new Yt(s, o, this.set);
  }
}
function Gu(i, e, t, r) {
  switch (i) {
    case -2:
      return t < e;
    case -1:
      return r >= e && t < e;
    case 0:
      return t < e && r > e;
    case 1:
      return t <= e && r > e;
    case 2:
      return r > e;
    case 4:
      return !0;
  }
}
function sr(i, e, t, r) {
  for (var n; i.from == i.to || (t < 1 ? i.from >= e : i.from > e) || (t > -1 ? i.to <= e : i.to < e); ) {
    let o = !r && i instanceof Oe && i.index < 0 ? null : i.parent;
    if (!o)
      return i;
    i = o;
  }
  let s = r ? 0 : N.IgnoreOverlays;
  if (r)
    for (let o = i, l = o.parent; l; o = l, l = o.parent)
      o instanceof Oe && o.index < 0 && ((n = l.enter(e, t, s)) === null || n === void 0 ? void 0 : n.from) != o.from && (i = l);
  for (; ; ) {
    let o = i.enter(e, t, s);
    if (!o)
      return i;
    i = o;
  }
}
class Uu {
  cursor(e = 0) {
    return new pn(this, e);
  }
  getChild(e, t = null, r = null) {
    let n = ja(this, e, t, r);
    return n.length ? n[0] : null;
  }
  getChildren(e, t = null, r = null) {
    return ja(this, e, t, r);
  }
  resolve(e, t = 0) {
    return sr(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return sr(this, e, t, !0);
  }
  matchContext(e) {
    return Qo(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), r = this;
    for (; t; ) {
      let n = t.lastChild;
      if (!n || n.to != t.to)
        break;
      n.type.isError && n.from == n.to ? (r = t, t = n.prevSibling) : t = n;
    }
    return r;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Oe extends Uu {
  constructor(e, t, r, n) {
    super(), this._tree = e, this.from = t, this.index = r, this._parent = n;
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
  nextChild(e, t, r, n, s = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e], u = a[e] + o.from;
        if (Gu(n, r, u, u + c.length)) {
          if (c instanceof Yt) {
            if (s & N.ExcludeBuffers)
              continue;
            let f = c.findChild(0, c.buffer.length, t, r - u, n);
            if (f > -1)
              return new ot(new Eg(o, c, e, u), null, f);
          } else if (s & N.IncludeAnonymous || !c.type.isAnonymous || al(c)) {
            let f;
            if (!(s & N.IgnoreMounts) && (f = nr.get(c)) && !f.overlay)
              return new Oe(f.tree, u, e, o);
            let O = new Oe(c, u, e, o);
            return s & N.IncludeAnonymous || !O.type.isAnonymous ? O : O.nextChild(t < 0 ? c.children.length - 1 : 0, t, r, n);
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
  enter(e, t, r = 0) {
    let n;
    if (!(r & N.IgnoreOverlays) && (n = nr.get(this._tree)) && n.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of n.overlay)
        if ((t > 0 ? o <= s : o < s) && (t < 0 ? l >= s : l > s))
          return new Oe(n.tree, n.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, r);
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
function ja(i, e, t, r) {
  let n = i.cursor(), s = [];
  if (!n.firstChild())
    return s;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = n.type.is(t), !n.nextSibling())
        return s;
  }
  for (; ; ) {
    if (r != null && n.type.is(r))
      return s;
    if (n.type.is(e) && s.push(n.node), !n.nextSibling())
      return r == null ? s : [];
  }
}
function Qo(i, e, t = e.length - 1) {
  for (let r = i; t >= 0; r = r.parent) {
    if (!r)
      return !1;
    if (!r.type.isAnonymous) {
      if (e[t] && e[t] != r.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class Eg {
  constructor(e, t, r, n) {
    this.parent = e, this.buffer = t, this.index = r, this.start = n;
  }
}
class ot extends Uu {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, r) {
    super(), this.context = e, this._parent = t, this.index = r, this.type = e.buffer.set.types[e.buffer.buffer[r]];
  }
  child(e, t, r) {
    let { buffer: n } = this.context, s = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.context.start, r);
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
  enter(e, t, r = 0) {
    if (r & N.ExcludeBuffers)
      return null;
    let { buffer: n } = this.context, s = n.findChild(this.index + 4, n.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
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
    let e = [], t = [], { buffer: r } = this.context, n = this.index + 4, s = r.buffer[this.index + 3];
    if (s > n) {
      let o = r.buffer[this.index + 1];
      e.push(r.slice(n, s, o)), t.push(0);
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
function Fu(i) {
  if (!i.length)
    return null;
  let e = 0, t = i[0];
  for (let s = 1; s < i.length; s++) {
    let o = i[s];
    (o.from > t.from || o.to < t.to) && (t = o, e = s);
  }
  let r = t instanceof Oe && t.index < 0 ? null : t.parent, n = i.slice();
  return r ? n[e] = r : n.splice(e, 1), new Wg(n, t);
}
class Wg {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return Fu(this.heads);
  }
}
function Dg(i, e, t) {
  let r = i.resolveInner(e, t), n = null;
  for (let s = r instanceof Oe ? r : r.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let o = s.parent;
      (n || (n = [r])).push(o.resolve(e, t)), s = o;
    } else {
      let o = nr.get(s.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new Oe(o.tree, o.overlay[0].from + s.from, -1, s);
        (n || (n = [r])).push(sr(l, e, t, !1));
      }
    }
  return n ? Fu(n) : r;
}
class pn {
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
      for (let r = e._parent; r; r = r._parent)
        this.stack.unshift(r.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: r, buffer: n } = this.buffer;
    return this.type = t || n.set.types[n.buffer[e]], this.from = r + n.buffer[e + 1], this.to = r + n.buffer[e + 2], !0;
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
  enterChild(e, t, r) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, r, this.mode));
    let { buffer: n } = this.buffer, s = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.buffer.start, r);
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
  enter(e, t, r = this.mode) {
    return this.buffer ? r & N.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, r));
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
    let { buffer: t } = this.buffer, r = this.stack.length - 1;
    if (e < 0) {
      let n = r < 0 ? 0 : this.stack[r] + 4;
      if (this.index != n)
        return this.yieldBuf(t.findChild(
          n,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let n = t.buffer[this.index + 3];
      if (n < (r < 0 ? t.buffer.length : t.buffer[this.stack[r] + 3]))
        return this.yieldBuf(n);
    }
    return r < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
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
    let t, r, { buffer: n } = this;
    if (n) {
      if (e > 0) {
        if (this.index < n.buffer.buffer.length)
          return !1;
      } else
        for (let s = 0; s < this.index; s++)
          if (n.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: t, parent: r } = n);
    } else
      ({ index: t, _parent: r } = this._tree);
    for (; r; { index: t, _parent: r } = r)
      if (t > -1)
        for (let s = t + e, o = e < 0 ? -1 : r._tree.children.length; s != o; s += e) {
          let l = r._tree.children[s];
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
    let e = this.bufferNode, t = null, r = 0;
    if (e && e.context == this.buffer)
      e: for (let n = this.index, s = this.stack.length; s >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == n) {
            if (n == this.index)
              return o;
            t = o, r = s + 1;
            break e;
          }
        n = this.stack[--s];
      }
    for (let n = r; n < this.stack.length; n++)
      t = new ot(this.buffer, t, this.stack[n]);
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
    for (let r = 0; ; ) {
      let n = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          r++;
          continue;
        }
        this.type.isAnonymous || (n = !0);
      }
      for (; ; ) {
        if (n && t && t(this), n = this.type.isAnonymous, !r)
          return;
        if (this.nextSibling())
          break;
        this.parent(), r--, n = !0;
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
    let { buffer: t } = this.buffer, { types: r } = t.set;
    for (let n = e.length - 1, s = this.stack.length - 1; n >= 0; s--) {
      if (s < 0)
        return Qo(this._tree, e, n);
      let o = r[t.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[n] && e[n] != o.name)
          return !1;
        n--;
      }
    }
    return !0;
  }
}
function al(i) {
  return i.children.some((e) => e instanceof Yt || !e.type.isAnonymous || al(e));
}
function Bg(i) {
  var e;
  let { buffer: t, nodeSet: r, maxBufferLength: n = Nu, reused: s = [], minRepeatType: o = r.types.length } = i, l = Array.isArray(t) ? new ll(t, t.length) : t, a = r.types, h = 0, c = 0;
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
    let Mi = a[M], Sr, Bt, Fl = A - x;
    if (G - A <= n && (Bt = g(l.pos - C, j))) {
      let ft = new Uint16Array(Bt.size - Bt.skip), Ce = l.pos - Bt.size, He = ft.length;
      for (; l.pos > Ce; )
        He = b(Bt.start, ft, He);
      Sr = new Yt(ft, G - Bt.start, r), Fl = Bt.start - x;
    } else {
      let ft = l.pos - U;
      l.next();
      let Ce = [], He = [], Lt = M >= o ? M : -1, ni = 0, xr = G;
      for (; l.pos > ft; )
        Lt >= 0 && l.id == Lt && l.size >= 0 ? (l.end <= xr - n && (d(Ce, He, A, ni, l.end, xr, Lt, oe, vt), ni = Ce.length, xr = l.end), l.next()) : J > 2500 ? f(A, ft, Ce, He) : u(A, ft, Ce, He, Lt, J + 1);
      if (Lt >= 0 && ni > 0 && ni < Ce.length && d(Ce, He, A, ni, A, xr, Lt, oe, vt), Ce.reverse(), He.reverse(), Lt > -1 && ni > 0) {
        let Hl = O(Mi, vt);
        Sr = hl(Mi, Ce, He, 0, Ce.length, 0, G - A, Hl, Hl);
      } else
        Sr = p(Mi, Ce, He, G - A, oe - G, vt);
    }
    v.push(Sr), Y.push(Fl);
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
        M < 0 && (M = U - n), j.push(A, G, U), J++, l.next();
      }
    }
    if (J) {
      let A = new Uint16Array(J * 4), G = j[j.length - 2];
      for (let U = j.length - 3, oe = 0; U >= 0; U -= 3)
        A[oe++] = j[U], A[oe++] = j[U + 1] - G, A[oe++] = j[U + 2] - G, A[oe++] = oe;
      v.push(new Yt(A, j[2] - G, r)), Y.push(G - x);
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
    x.push(p(r.types[M], U, oe, J - j, A - J, G)), C.push(j - v);
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
    let v = l.fork(), Y = 0, j = 0, J = 0, M = v.end - n, A = { size: 0, start: 0, skip: 0 };
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
const Ia = /* @__PURE__ */ new WeakMap();
function Hr(i, e) {
  if (!i.isAnonymous || e instanceof Yt || e.type != i)
    return 1;
  let t = Ia.get(e);
  if (t == null) {
    t = 1;
    for (let r of e.children) {
      if (r.type != i || !(r instanceof H)) {
        t = 1;
        break;
      }
      t += Hr(i, r);
    }
    Ia.set(e, t);
  }
  return t;
}
function hl(i, e, t, r, n, s, o, l, a) {
  let h = 0;
  for (let d = r; d < n; d++)
    h += Hr(i, e[d]);
  let c = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), u = [], f = [];
  function O(d, p, g, b, Q) {
    for (let w = g; w < b; ) {
      let Z = w, x = p[w], C = Hr(i, d[w]);
      for (w++; w < b; w++) {
        let v = Hr(i, d[w]);
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
  return O(e, t, r, n, 0), (l || a)(u, f, o);
}
class Hu {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, r) {
    let n = this.map.get(e);
    n || this.map.set(e, n = /* @__PURE__ */ new Map()), n.set(t, r);
  }
  getBuffer(e, t) {
    let r = this.map.get(e);
    return r && r.get(t);
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
  constructor(e, t, r, n, s = !1, o = !1) {
    this.from = e, this.to = t, this.tree = r, this.offset = n, this.open = (s ? 1 : 0) | (o ? 2 : 0);
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
  static addTree(e, t = [], r = !1) {
    let n = [new bt(0, e.length, e, 0, !1, r)];
    for (let s of t)
      s.to > e.length && n.push(s);
    return n;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, r = 128) {
    if (!t.length)
      return e;
    let n = [], s = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null, u = c ? c.fromA : 1e9;
      if (u - a >= r)
        for (; o && o.from < u; ) {
          let f = o;
          if (a >= f.from || u <= f.to || h) {
            let O = Math.max(f.from, a) - h, d = Math.min(f.to, u) - h;
            f = O >= d ? null : new bt(O, d, f.tree, f.offset + h, l > 0, !!c);
          }
          if (f && n.push(f), o.to > u)
            break;
          o = s < e.length ? e[s++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return n;
  }
}
class Ku {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, r) {
    return typeof e == "string" && (e = new Lg(e)), r = r ? r.length ? r.map((n) => new ze(n.from, n.to)) : [new ze(0, 0)] : [new ze(0, e.length)], this.createParse(e, t || [], r);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, r) {
    let n = this.startParse(e, t, r);
    for (; ; ) {
      let s = n.advance();
      if (s)
        return s;
    }
  }
}
class Lg {
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
function jg(i) {
  return (e, t, r, n) => new Ng(e, i, t, r, n);
}
class Na {
  constructor(e, t, r, n, s) {
    this.parser = e, this.parse = t, this.overlay = r, this.target = n, this.from = s;
  }
}
function Ga(i) {
  if (!i.length || i.some((e) => e.from >= e.to))
    throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(i));
}
class Ig {
  constructor(e, t, r, n, s, o, l) {
    this.parser = e, this.predicate = t, this.mounts = r, this.index = n, this.start = s, this.target = o, this.prev = l, this.depth = 0, this.ranges = [];
  }
}
const So = new R({ perNode: !0 });
class Ng {
  constructor(e, t, r, n, s) {
    this.nest = t, this.input = r, this.fragments = n, this.ranges = s, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e;
  }
  advance() {
    if (this.baseParse) {
      let r = this.baseParse.advance();
      if (!r)
        return null;
      if (this.baseParse = null, this.baseTree = r, this.startInner(), this.stoppedAt != null)
        for (let n of this.inner)
          n.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let r = this.baseTree;
      return this.stoppedAt != null && (r = new H(r.type, r.children, r.positions, r.length, r.propValues.concat([[So, this.stoppedAt]]))), r;
    }
    let e = this.inner[this.innerDone], t = e.parse.advance();
    if (t) {
      this.innerDone++;
      let r = Object.assign(/* @__PURE__ */ Object.create(null), e.target.props);
      r[R.mounted.id] = new nr(t, e.overlay, e.parser), e.target.props = r;
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
    let e = new Fg(this.fragments), t = null, r = null, n = new pn(new Oe(this.baseTree, this.ranges[0].from, 0, null), N.IncludeAnonymous | N.IgnoreMounts);
    e: for (let s, o; ; ) {
      let l = !0, a;
      if (this.stoppedAt != null && n.from >= this.stoppedAt)
        l = !1;
      else if (e.hasNode(n)) {
        if (t) {
          let h = t.mounts.find((c) => c.frag.from <= n.from && c.frag.to >= n.to && c.mount.overlay);
          if (h)
            for (let c of h.mount.overlay) {
              let u = c.from + h.pos, f = c.to + h.pos;
              u >= n.from && f <= n.to && !t.ranges.some((O) => O.from < f && O.to > u) && t.ranges.push({ from: u, to: f });
            }
        }
        l = !1;
      } else if (r && (o = Gg(r.ranges, n.from, n.to)))
        l = o != 2;
      else if (!n.type.isAnonymous && (s = this.nest(n, this.input)) && (n.from < n.to || !s.overlay)) {
        n.tree || (Ug(n), t && t.depth++, r && r.depth++);
        let h = e.findMounts(n.from, s.parser);
        if (typeof s.overlay == "function")
          t = new Ig(s.parser, s.overlay, h, this.inner.length, n.from, n.tree, t);
        else {
          let c = Ha(this.ranges, s.overlay || (n.from < n.to ? [new ze(n.from, n.to)] : []));
          c.length && Ga(c), (c.length || !s.overlay) && this.inner.push(new Na(s.parser, c.length ? s.parser.startParse(this.input, Ka(h, c), c) : s.parser.startParse(""), s.overlay ? s.overlay.map((u) => new ze(u.from - n.from, u.to - n.from)) : null, n.tree, c.length ? c[0].from : n.from)), s.overlay ? c.length && (r = { ranges: c, depth: 0, prev: r }) : l = !1;
        }
      } else if (t && (a = t.predicate(n)) && (a === !0 && (a = new ze(n.from, n.to)), a.from < a.to)) {
        let h = t.ranges.length - 1;
        h >= 0 && t.ranges[h].to == a.from ? t.ranges[h] = { from: t.ranges[h].from, to: a.to } : t.ranges.push(a);
      }
      if (l && n.firstChild())
        t && t.depth++, r && r.depth++;
      else
        for (; !n.nextSibling(); ) {
          if (!n.parent())
            break e;
          if (t && !--t.depth) {
            let h = Ha(this.ranges, t.ranges);
            h.length && (Ga(h), this.inner.splice(t.index, 0, new Na(t.parser, t.parser.startParse(this.input, Ka(t.mounts, h), h), t.ranges.map((c) => new ze(c.from - t.start, c.to - t.start)), t.target, h[0].from))), t = t.prev;
          }
          r && !--r.depth && (r = r.prev);
        }
    }
  }
}
function Gg(i, e, t) {
  for (let r of i) {
    if (r.from >= t)
      break;
    if (r.to > e)
      return r.from <= e && r.to >= t ? 2 : 1;
  }
  return 0;
}
function Ua(i, e, t, r, n, s) {
  if (e < t) {
    let o = i.buffer[e + 1];
    r.push(i.slice(e, t, o)), n.push(o - s);
  }
}
function Ug(i) {
  let { node: e } = i, t = [], r = e.context.buffer;
  do
    t.push(i.index), i.parent();
  while (!i.tree);
  let n = i.tree, s = n.children.indexOf(r), o = n.children[s], l = o.buffer, a = [s];
  function h(c, u, f, O, d, p) {
    let g = t[p], b = [], Q = [];
    Ua(o, c, g, b, Q, O);
    let w = l[g + 1], Z = l[g + 2];
    a.push(b.length);
    let x = p ? h(g + 4, l[g + 3], o.set.types[l[g]], w, Z - w, p - 1) : e.toTree();
    return b.push(x), Q.push(w - O), Ua(o, l[g + 3], u, b, Q, O), new H(f, b, Q, d);
  }
  n.children[s] = h(0, l.length, be.none, 0, o.length, t.length - 1);
  for (let c of a) {
    let u = i.tree.children[c], f = i.tree.positions[c];
    i.yield(new Oe(u, f + i.from, c, i._tree));
  }
}
class Fa {
  constructor(e, t) {
    this.offset = t, this.done = !1, this.cursor = e.cursor(N.IncludeAnonymous | N.IgnoreMounts);
  }
  // Move to the first node (in pre-order) that starts at or after `pos`.
  moveTo(e) {
    let { cursor: t } = this, r = e - this.offset;
    for (; !this.done && t.from < r; )
      t.to >= e && t.enter(r, 1, N.IgnoreOverlays | N.ExcludeBuffers) || t.next(!1) || (this.done = !0);
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
let Fg = class {
  constructor(e) {
    var t;
    if (this.fragments = e, this.curTo = 0, this.fragI = 0, e.length) {
      let r = this.curFrag = e[0];
      this.curTo = (t = r.tree.prop(So)) !== null && t !== void 0 ? t : r.to, this.inner = new Fa(r.tree, -r.offset);
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
      this.curTo = (e = t.tree.prop(So)) !== null && e !== void 0 ? e : t.to, this.inner = new Fa(t.tree, -t.offset);
    }
  }
  findMounts(e, t) {
    var r;
    let n = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e, 1);
      for (let s = this.inner.cursor.node; s; s = s.parent) {
        let o = (r = s.tree) === null || r === void 0 ? void 0 : r.prop(R.mounted);
        if (o && o.parser == t)
          for (let l = this.fragI; l < this.fragments.length; l++) {
            let a = this.fragments[l];
            if (a.from >= s.to)
              break;
            a.tree == this.curFrag.tree && n.push({
              frag: a,
              pos: s.from - a.offset,
              mount: o
            });
          }
      }
    }
    return n;
  }
};
function Ha(i, e) {
  let t = null, r = e;
  for (let n = 1, s = 0; n < i.length; n++) {
    let o = i[n - 1].to, l = i[n].from;
    for (; s < r.length; s++) {
      let a = r[s];
      if (a.from >= l)
        break;
      a.to <= o || (t || (r = t = e.slice()), a.from < o ? (t[s] = new ze(a.from, o), a.to > l && t.splice(s + 1, 0, new ze(l, a.to))) : a.to > l ? t[s--] = new ze(l, a.to) : t.splice(s--, 1));
    }
  }
  return r;
}
function Hg(i, e, t, r) {
  let n = 0, s = 0, o = !1, l = !1, a = -1e9, h = [];
  for (; ; ) {
    let c = n == i.length ? 1e9 : o ? i[n].to : i[n].from, u = s == e.length ? 1e9 : l ? e[s].to : e[s].from;
    if (o != l) {
      let f = Math.max(a, t), O = Math.min(c, u, r);
      f < O && h.push(new ze(f, O));
    }
    if (a = Math.min(c, u), a == 1e9)
      break;
    c == a && (o ? (o = !1, n++) : o = !0), u == a && (l ? (l = !1, s++) : l = !0);
  }
  return h;
}
function Ka(i, e) {
  let t = [];
  for (let { pos: r, mount: n, frag: s } of i) {
    let o = r + (n.overlay ? n.overlay[0].from : 0), l = o + n.tree.length, a = Math.max(s.from, o), h = Math.min(s.to, l);
    if (n.overlay) {
      let c = n.overlay.map((f) => new ze(f.from + r, f.to + r)), u = Hg(e, c, a, h);
      for (let f = 0, O = a; ; f++) {
        let d = f == u.length, p = d ? h : u[f].from;
        if (p > O && t.push(new bt(O, p, n.tree, -o, s.from >= O || s.openStart, s.to <= p || s.openEnd)), d)
          break;
        O = u[f].to;
      }
    } else
      t.push(new bt(a, h, n.tree, -o, s.from >= o || s.openStart, s.to <= l || s.openEnd));
  }
  return t;
}
let Kg = 0;
class Ae {
  /**
  @internal
  */
  constructor(e, t, r, n) {
    this.name = e, this.set = t, this.base = r, this.modified = n, this.id = Kg++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let r = typeof e == "string" ? e : "?";
    if (e instanceof Ae && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let n = new Ae(r, [], null, []);
    if (n.set.push(n), t)
      for (let s of t.set)
        n.set.push(s);
    return n;
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
    let t = new mn(e);
    return (r) => r.modified.indexOf(t) > -1 ? r : mn.get(r.base || r, r.modified.concat(t).sort((n, s) => n.id - s.id));
  }
}
let Jg = 0;
class mn {
  constructor(e) {
    this.name = e, this.instances = [], this.id = Jg++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let r = t[0].instances.find((l) => l.base == e && e0(t, l.modified));
    if (r)
      return r;
    let n = [], s = new Ae(e.name, n, e, t);
    for (let l of t)
      l.instances.push(s);
    let o = t0(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          n.push(mn.get(l, a));
    return s;
  }
}
function e0(i, e) {
  return i.length == e.length && i.every((t, r) => t == e[r]);
}
function t0(i) {
  let e = [[]];
  for (let t = 0; t < i.length; t++)
    for (let r = 0, n = e.length; r < n; r++)
      e.push(e[r].concat(i[t]));
  return e.sort((t, r) => r.length - t.length);
}
function Dn(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in i) {
    let r = i[t];
    Array.isArray(r) || (r = [r]);
    for (let n of t.split(" "))
      if (n) {
        let s = [], o = 2, l = n;
        for (let u = 0; ; ) {
          if (l == "..." && u > 0 && u + 3 == n.length) {
            o = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!f)
            throw new RangeError("Invalid path: " + n);
          if (s.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), u += f[0].length, u == n.length)
            break;
          let O = n[u++];
          if (u == n.length && O == "!") {
            o = 0;
            break;
          }
          if (O != "/")
            throw new RangeError("Invalid path: " + n);
          l = n.slice(u);
        }
        let a = s.length - 1, h = s[a];
        if (!h)
          throw new RangeError("Invalid path: " + n);
        let c = new or(r, o, a > 0 ? s.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return Ju.add(e);
}
const Ju = new R({
  combine(i, e) {
    let t, r, n;
    for (; i || e; ) {
      if (!i || e && i.depth >= e.depth ? (n = e, e = e.next) : (n = i, i = i.next), t && t.mode == n.mode && !n.context && !t.context)
        continue;
      let s = new or(n.tags, n.mode, n.context);
      t ? t.next = s : r = s, t = s;
    }
    return r;
  }
});
class or {
  constructor(e, t, r, n) {
    this.tags = e, this.mode = t, this.context = r, this.next = n;
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
or.empty = new or([], 2, null);
function ef(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of i)
    if (!Array.isArray(s.tag))
      t[s.tag.id] = s.class;
    else
      for (let o of s.tag)
        t[o.id] = s.class;
  let { scope: r, all: n = null } = e || {};
  return {
    style: (s) => {
      let o = n;
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
    scope: r
  };
}
function i0(i, e) {
  let t = null;
  for (let r of i) {
    let n = r.style(e);
    n && (t = t ? t + " " + n : n);
  }
  return t;
}
function r0(i, e, t, r = 0, n = i.length) {
  let s = new n0(r, Array.isArray(e) ? e : [e], t);
  s.highlightRange(i.cursor(), r, n, "", s.highlighters), s.flush(n);
}
class n0 {
  constructor(e, t, r) {
    this.at = e, this.highlighters = t, this.span = r, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, r, n, s) {
    let { type: o, from: l, to: a } = e;
    if (l >= r || a <= t)
      return;
    o.isTop && (s = this.highlighters.filter((O) => !O.scope || O.scope(o)));
    let h = n, c = s0(e) || or.empty, u = i0(s, c.tags);
    if (u && (h && (h += " "), h += u, c.mode == 1 && (n += (n ? " " : "") + u)), this.startSpan(Math.max(t, l), h), c.opaque)
      return;
    let f = e.tree && e.tree.prop(R.mounted);
    if (f && f.overlay) {
      let O = e.node.enter(f.overlay[0].from + l, 1), d = this.highlighters.filter((g) => !g.scope || g.scope(f.tree.type)), p = e.firstChild();
      for (let g = 0, b = l; ; g++) {
        let Q = g < f.overlay.length ? f.overlay[g] : null, w = Q ? Q.from + l : a, Z = Math.max(t, b), x = Math.min(r, w);
        if (Z < x && p)
          for (; e.from < x && (this.highlightRange(e, Z, x, n, s), this.startSpan(Math.min(x, e.to), h), !(e.to >= w || !e.nextSibling())); )
            ;
        if (!Q || w > r)
          break;
        b = Q.to + l, b > t && (this.highlightRange(O.cursor(), Math.max(t, Q.from + l), Math.min(r, b), "", d), this.startSpan(Math.min(r, b), h));
      }
      p && e.parent();
    } else if (e.firstChild()) {
      f && (n = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= r)
            break;
          this.highlightRange(e, t, r, n, s), this.startSpan(Math.min(r, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function s0(i) {
  let e = i.type.prop(Ju);
  for (; e && e.context && !i.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const S = Ae.define, _r = S(), kt = S(), Ja = S(kt), eh = S(kt), Pt = S(), qr = S(Pt), gs = S(Pt), tt = S(), jt = S(tt), Je = S(), et = S(), xo = S(), _i = S(xo), Yr = S(), m = {
  /**
  A comment.
  */
  comment: _r,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: S(_r),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: S(_r),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: S(_r),
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
  typeName: Ja,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: S(Ja),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: eh,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: S(eh),
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
  string: qr,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: S(qr),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: S(qr),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: S(qr),
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
  meta: Yr,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: S(Yr),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: S(Yr),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: S(Yr),
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
ef([
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
function tf(i) {
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
  constructor(e, t, r = [], n = "") {
    this.data = e, this.name = n, E.prototype.hasOwnProperty("tree") || Object.defineProperty(E.prototype, "tree", { get() {
      return K(this);
    } }), this.parser = t, this.extension = [
      ki.of(this),
      E.languageData.of((s, o, l) => {
        let a = th(s, o, l), h = a.type.prop(li);
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
    ].concat(r);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, r = -1) {
    return th(e, t, r).type.prop(li) == this.data;
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
    let r = [], n = (s, o) => {
      if (s.prop(li) == this.data) {
        r.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(R.mounted);
      if (l) {
        if (l.tree.prop(li) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              r.push({ from: a.from + o, to: a.to + o });
          else
            r.push({ from: o, to: o + s.length });
          return;
        } else if (l.overlay) {
          let a = r.length;
          if (n(l.tree, l.overlay[0].from + o), r.length > a)
            return;
        }
      }
      for (let a = 0; a < s.children.length; a++) {
        let h = s.children[a];
        h instanceof H && n(h, s.positions[a] + o);
      }
    };
    return n(K(e), 0), r;
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
function th(i, e, t) {
  let r = i.facet(ki), n = K(i).topNode;
  if (!r || r.allowsNesting)
    for (let s = n; s; s = s.enter(e, t, N.ExcludeBuffers))
      s.type.isTop && (n = s);
  return n;
}
class $i extends je {
  constructor(e, t, r) {
    super(e, t, [], r), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = tf(e.languageData);
    return new $i(t, e.parser.configure({
      props: [li.add((r) => r.isTop ? t : void 0)]
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
class o0 {
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
    let r = this.cursorPos - this.string.length;
    return e < r || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - r, t - r);
  }
}
let qi = null;
class gn {
  constructor(e, t, r = [], n, s, o, l, a) {
    this.parser = e, this.state = t, this.fragments = r, this.tree = n, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, r) {
    return new gn(e, t, [], H.empty, 0, r, [], null);
  }
  startParse() {
    return this.parser.startParse(new o0(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != H.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var r;
      if (typeof e == "number") {
        let n = Date.now() + e;
        e = () => Date.now() > n;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let n = this.parse.advance();
        if (n)
          if (this.fragments = this.withoutTempSkipped(bt.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (r = this.parse.stoppedAt) !== null && r !== void 0 ? r : this.state.doc.length, this.tree = n, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
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
      e = ih(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: r, tree: n, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, u, f) => a.push({ fromA: h, toA: c, fromB: u, toB: f })), r = bt.applyChanges(r, a), n = H.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), u = e.mapPos(h.to, -1);
          c < u && l.push({ from: c, to: u });
        }
      }
    }
    return new gn(this.parser, t, r, n, s, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let r = 0; r < this.skipped.length; r++) {
      let { from: n, to: s } = this.skipped[r];
      n < e.to && s > e.from && (this.fragments = ih(this.fragments, n, s), this.skipped.splice(r--, 1));
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
    return new class extends Ku {
      createParse(t, r, n) {
        let s = n[0].from, o = n[n.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let a = qi;
            if (a) {
              for (let h of n)
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
function ih(i, e, t) {
  return bt.applyChanges(i, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class vi {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), r = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, r) || t.takeTree(), new vi(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), r = gn.create(e.facet(ki).parser, e, { from: 0, to: t });
    return r.work(20, t) || r.takeTree(), new vi(r);
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
let rf = (i) => {
  let e = setTimeout(
    () => i(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (rf = (i) => {
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
const ys = typeof navigator < "u" && (!((bs = navigator.scheduling) === null || bs === void 0) && bs.isInputPending) ? () => navigator.scheduling.isInputPending() : null, l0 = /* @__PURE__ */ Te.fromClass(class {
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
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = rf(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: r, viewport: { to: n } } = this.view, s = r.field(je.state);
    if (s.tree == s.context.tree && s.context.isDone(
      n + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !ys ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < n && r.doc.length > n + 1e3, a = s.context.work(() => ys && ys() || Date.now() > o, n + (l ? 0 : 1e5));
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
    l0,
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
const a0 = /* @__PURE__ */ k.define(), mr = /* @__PURE__ */ k.define({
  combine: (i) => {
    if (!i.length)
      return "  ";
    let e = i[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(i[0]));
    return e;
  }
});
function bn(i) {
  let e = i.facet(mr);
  return e.charCodeAt(0) == 9 ? i.tabSize * e.length : e.length;
}
function yn(i, e) {
  let t = "", r = i.tabSize, n = i.facet(mr)[0];
  if (n == "	") {
    for (; e >= r; )
      t += "	", e -= r;
    n = " ";
  }
  for (let s = 0; s < e; s++)
    t += n;
  return t;
}
function nf(i, e) {
  i instanceof E && (i = new Bn(i));
  for (let r of i.state.facet(a0)) {
    let n = r(i, e);
    if (n !== void 0)
      return n;
  }
  let t = K(i.state);
  return t.length >= e ? h0(i, t, e) : null;
}
class Bn {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = bn(e);
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
    let r = this.state.doc.lineAt(e), { simulateBreak: n, simulateDoubleBreak: s } = this.options;
    return n != null && n >= r.from && n <= r.to ? s && n == e ? { text: "", from: e } : (t < 0 ? n < e : n <= e) ? { text: r.text.slice(n - r.from), from: n } : { text: r.text.slice(0, n - r.from), from: r.from } : r;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: r, from: n } = this.lineAt(e, t);
    return r.slice(e - n, Math.min(r.length, e + 100 - n));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: r, from: n } = this.lineAt(e, t), s = this.countColumn(r, e - n), o = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
    return o > -1 && (s += o - this.countColumn(r, r.search(/\S|$/))), s;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return _n(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: r, from: n } = this.lineAt(e, t), s = this.options.overrideIndentation;
    if (s) {
      let o = s(n);
      if (o > -1)
        return o;
    }
    return this.countColumn(r, r.search(/\S|$/));
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
const Ln = /* @__PURE__ */ new R();
function h0(i, e, t) {
  let r = e.resolveStack(t), n = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (n != r.node) {
    let s = [];
    for (let o = n; o && !(o.from < r.node.from || o.to > r.node.to || o.from == r.node.from && o.type == r.node.type); o = o.parent)
      s.push(o);
    for (let o = s.length - 1; o >= 0; o--)
      r = { node: s[o], next: r };
  }
  return sf(r, i, t);
}
function sf(i, e, t) {
  for (let r = i; r; r = r.next) {
    let n = u0(r.node);
    if (n)
      return n(fl.create(e, t, r));
  }
  return 0;
}
function c0(i) {
  return i.pos == i.options.simulateBreak && i.options.simulateDoubleBreak;
}
function u0(i) {
  let e = i.type.prop(Ln);
  if (e)
    return e;
  let t = i.firstChild, r;
  if (t && (r = t.type.prop(R.closedBy))) {
    let n = i.lastChild, s = n && r.indexOf(n.name) > -1;
    return (o) => of(o, !0, 1, void 0, s && !c0(o) ? n.from : void 0);
  }
  return i.parent == null ? f0 : null;
}
function f0() {
  return 0;
}
class fl extends Bn {
  constructor(e, t, r) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = r;
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
  static create(e, t, r) {
    return new fl(e, t, r);
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
      let r = e.resolve(t.from);
      for (; r.parent && r.parent.from == r.from; )
        r = r.parent;
      if (O0(r, e))
        break;
      t = this.state.doc.lineAt(r.from);
    }
    return this.lineIndent(t.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return sf(this.context.next, this.base, this.pos);
  }
}
function O0(i, e) {
  for (let t = e; t; t = t.parent)
    if (i == t)
      return !0;
  return !1;
}
function d0(i) {
  let e = i.node, t = e.childAfter(e.from), r = e.lastChild;
  if (!t)
    return null;
  let n = i.options.simulateBreak, s = i.state.doc.lineAt(t.from), o = n == null || n <= s.from ? s.to : Math.min(s.to, n);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == r)
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
function p0({ closing: i, align: e = !0, units: t = 1 }) {
  return (r) => of(r, e, t, i);
}
function of(i, e, t, r, n) {
  let s = i.textAfter, o = s.match(/^\s*/)[0].length, l = r && s.slice(o, o + r.length) == r || n == i.pos + o, a = e ? d0(i) : null;
  return a ? l ? i.column(a.from) : i.column(a.to) : i.baseIndent + (l ? 0 : i.unit * t);
}
const m0 = (i) => i.baseIndent;
function Kr({ except: i, units: e = 1 } = {}) {
  return (t) => {
    let r = i && i.test(t.textAfter);
    return t.baseIndent + (r ? 0 : e * t.unit);
  };
}
const Ol = /* @__PURE__ */ new R();
function lf(i) {
  let e = i.firstChild, t = i.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? i.to : t.from } : null;
}
class gr {
  constructor(e, t) {
    this.specs = e;
    let r;
    function n(l) {
      let a = zt.newName();
      return (r || (r = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const s = typeof t.all == "string" ? t.all : t.all ? n(t.all) : void 0, o = t.scope;
    this.scope = o instanceof je ? (l) => l.prop(li) == o.data : o ? (l) => l == o : void 0, this.style = ef(e.map((l) => ({
      tag: l.tag,
      class: l.class || n(Object.assign({}, l, { tag: null }))
    })), {
      all: s
    }).style, this.module = r ? new zt(r) : null, this.themeType = t.themeType;
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
    return new gr(e, t || {});
  }
}
const wo = /* @__PURE__ */ k.define(), af = /* @__PURE__ */ k.define({
  combine(i) {
    return i.length ? [i[0]] : null;
  }
});
function Qs(i) {
  let e = i.facet(wo);
  return e.length ? e : i.facet(af);
}
function dl(i, e) {
  let t = [b0], r;
  return i instanceof gr && (i.module && t.push(T.styleModule.of(i.module)), r = i.themeType), e != null && e.fallback ? t.push(af.of(i)) : r ? t.push(wo.computeN([T.darkTheme], (n) => n.facet(T.darkTheme) == (r == "dark") ? [i] : [])) : t.push(wo.of(i)), t;
}
class g0 {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = K(e.state), this.decorations = this.buildDeco(e, Qs(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = K(e.state), r = Qs(e.state), n = r != Qs(e.startState), { viewport: s } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < s.to && !n && t.type == this.tree.type && o >= s.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || n) && (this.tree = t, this.decorations = this.buildDeco(e.view, r), this.decoratedTo = s.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return q.none;
    let r = new Hi();
    for (let { from: n, to: s } of e.visibleRanges)
      r0(this.tree, t, (o, l, a) => {
        r.add(o, l, this.markCache[a] || (this.markCache[a] = q.mark({ class: a })));
      }, n, s);
    return r.finish();
  }
}
const b0 = /* @__PURE__ */ Ai.high(/* @__PURE__ */ Te.fromClass(g0, {
  decorations: (i) => i.decorations
})), y0 = /* @__PURE__ */ gr.define([
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
]), Q0 = /* @__PURE__ */ T.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), hf = 1e4, cf = "()[]{}", uf = /* @__PURE__ */ k.define({
  combine(i) {
    return Vn(i, {
      afterCursor: !0,
      brackets: cf,
      maxScanDistance: hf,
      renderMatch: w0
    });
  }
}), S0 = /* @__PURE__ */ q.mark({ class: "cm-matchingBracket" }), x0 = /* @__PURE__ */ q.mark({ class: "cm-nonmatchingBracket" });
function w0(i) {
  let e = [], t = i.matched ? S0 : x0;
  return e.push(t.range(i.start.from, i.start.to)), i.end && e.push(t.range(i.end.from, i.end.to)), e;
}
const $0 = /* @__PURE__ */ ye.define({
  create() {
    return q.none;
  },
  update(i, e) {
    if (!e.docChanged && !e.selection)
      return i;
    let t = [], r = e.state.facet(uf);
    for (let n of e.state.selection.ranges) {
      if (!n.empty)
        continue;
      let s = lt(e.state, n.head, -1, r) || n.head > 0 && lt(e.state, n.head - 1, 1, r) || r.afterCursor && (lt(e.state, n.head, 1, r) || n.head < e.state.doc.length && lt(e.state, n.head + 1, -1, r));
      s && (t = t.concat(r.renderMatch(s, e.state)));
    }
    return q.set(t, !0);
  },
  provide: (i) => T.decorations.from(i)
}), v0 = [
  $0,
  Q0
];
function k0(i = {}) {
  return [uf.of(i), v0];
}
const ff = /* @__PURE__ */ new R();
function $o(i, e, t) {
  let r = i.prop(e < 0 ? R.openedBy : R.closedBy);
  if (r)
    return r;
  if (i.name.length == 1) {
    let n = t.indexOf(i.name);
    if (n > -1 && n % 2 == (e < 0 ? 1 : 0))
      return [t[n + e]];
  }
  return null;
}
function vo(i) {
  let e = i.type.prop(ff);
  return e ? e(i.node) : i;
}
function lt(i, e, t, r = {}) {
  let n = r.maxScanDistance || hf, s = r.brackets || cf, o = K(i), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = $o(a.type, t, s);
    if (h && a.from < a.to) {
      let c = vo(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return P0(i, e, t, a, c, h, s);
    }
  }
  return T0(i, e, t, o, l.type, n, s);
}
function P0(i, e, t, r, n, s, o) {
  let l = r.parent, a = { from: n.from, to: n.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(r.from) : c.childAfter(r.to)))
    do
      if (t < 0 ? c.to <= r.from : c.from >= r.to) {
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
function T0(i, e, t, r, n, s, o) {
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
      if (!(b < 0 || r.resolveInner(d + p, 1).type != n))
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
const Z0 = /* @__PURE__ */ Object.create(null), rh = [be.none], nh = [], sh = /* @__PURE__ */ Object.create(null), C0 = /* @__PURE__ */ Object.create(null);
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
  C0[i] = /* @__PURE__ */ A0(Z0, e);
function Ss(i, e) {
  nh.indexOf(i) > -1 || (nh.push(i), console.warn(e));
}
function A0(i, e) {
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
  let r = e.replace(/ /g, "_"), n = r + " " + t.map((l) => l.id), s = sh[n];
  if (s)
    return s.id;
  let o = sh[n] = be.define({
    id: rh.length,
    name: r,
    props: [Dn({ [r]: t })]
  });
  return rh.push(o), o.id;
}
F.RTL, F.LTR;
class Of {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, r, n) {
    this.state = e, this.pos = t, this.explicit = r, this.view = n, this.abortListeners = [], this.abortOnDocChange = !1;
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
    let t = this.state.doc.lineAt(this.pos), r = Math.max(t.from, this.pos - 250), n = t.text.slice(r - t.from, this.pos - t.from), s = n.search(pf(e, !1));
    return s < 0 ? null : { from: r + s, to: this.pos, text: n.slice(s) };
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
  addEventListener(e, t, r) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), r && r.onDocChange && (this.abortOnDocChange = !0));
  }
}
function oh(i) {
  let e = Object.keys(i).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function X0(i) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: n } of i) {
    e[n[0]] = !0;
    for (let s = 1; s < n.length; s++)
      t[n[s]] = !0;
  }
  let r = oh(e) + oh(t) + "*$";
  return [new RegExp("^" + r), new RegExp(r)];
}
function df(i) {
  let e = i.map((n) => typeof n == "string" ? { label: n } : n), [t, r] = e.every((n) => /^\w+$/.test(n.label)) ? [/\w*$/, /\w+$/] : X0(e);
  return (n) => {
    let s = n.matchBefore(r);
    return s || n.explicit ? { from: s ? s.from : n.pos, options: e, validFor: t } : null;
  };
}
function R0(i, e) {
  return (t) => {
    for (let r = K(t.state).resolveInner(t.pos, -1); r; r = r.parent) {
      if (i.indexOf(r.name) > -1)
        return null;
      if (r.type.isTop)
        break;
    }
    return e(t);
  };
}
class lh {
  constructor(e, t, r, n) {
    this.completion = e, this.source = t, this.match = r, this.score = n;
  }
}
function Jt(i) {
  return i.selection.main.from;
}
function pf(i, e) {
  var t;
  let { source: r } = i, n = e && r[0] != "^", s = r[r.length - 1] != "$";
  return !n && !s ? i : new RegExp(`${n ? "^" : ""}(?:${r})${s ? "$" : ""}`, (t = i.flags) !== null && t !== void 0 ? t : i.ignoreCase ? "i" : "");
}
const br = /* @__PURE__ */ $t.define();
function M0(i, e, t, r) {
  let { main: n } = i.selection, s = t - n.from, o = r - n.from;
  return {
    ...i.changeByRange((l) => {
      if (l != n && t != r && i.sliceDoc(l.from + s, l.from + o) != i.sliceDoc(t, r))
        return { range: l };
      let a = i.toText(e);
      return {
        changes: { from: l.from + s, to: r == n.from ? l.to : l.from + o, insert: a },
        range: y.cursor(l.from + s + a.length)
      };
    }),
    scrollIntoView: !0,
    userEvent: "input.complete"
  };
}
const ah = /* @__PURE__ */ new WeakMap();
function z0(i) {
  if (!Array.isArray(i))
    return i;
  let e = ah.get(i);
  return e || ah.set(i, e = df(i)), e;
}
const Qn = /* @__PURE__ */ _.define(), lr = /* @__PURE__ */ _.define();
class V0 {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let r = it(e, t), n = Zt(r);
      this.chars.push(r);
      let s = e.slice(t, t + n), o = s.toUpperCase();
      this.folded.push(it(o == s ? s.toLowerCase() : o, 0)), t += n;
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
    let { chars: t, folded: r, any: n, precise: s, byWord: o } = this;
    if (t.length == 1) {
      let Q = it(e, 0), w = Zt(Q), Z = w == e.length ? 0 : -100;
      if (Q != t[0]) if (Q == r[0])
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
        (Z == t[h] || Z == r[h]) && (n[h++] = Q), Q += Zt(Z);
      }
      if (h < a)
        return null;
    }
    let c = 0, u = 0, f = !1, O = 0, d = -1, p = -1, g = /[a-z]/.test(e), b = !0;
    for (let Q = 0, w = Math.min(e.length, 200), Z = 0; Q < w && u < a; ) {
      let x = it(e, Q);
      l < 0 && (c < a && x == t[c] && (s[c++] = Q), O < a && (x == t[O] || x == r[O] ? (O == 0 && (d = Q), p = Q + 1, O++) : O = 0));
      let C, v = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (C = Yc(x)) != C.toLowerCase() ? 1 : C != C.toUpperCase() ? 2 : 0;
      (!Q || v == 1 && g || Z == 0 && v != 0) && (t[u] == x || r[u] == x && (f = !0) ? o[u++] = Q : o.length && (b = !1)), Z = v, Q += Zt(x);
    }
    return u == a && o[0] == 0 && b ? this.result(-100 + (f ? -200 : 0), o, e) : O == a && d == 0 ? this.ret(-200 - e.length + (p == e.length ? 0 : -100), [0, p]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : O == a ? this.ret(-900 - e.length, [d, p]) : u == a ? this.result(-100 + (f ? -200 : 0) + -700 + (b ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((n[0] ? -700 : 0) + -200 + -1100, n, e);
  }
  result(e, t, r) {
    let n = [], s = 0;
    for (let o of t) {
      let l = o + (this.astral ? Zt(it(r, o)) : 1);
      s && n[s - 1] == o ? n[s - 1] = l : (n[s++] = o, n[s++] = l);
    }
    return this.ret(e - r.length, n);
  }
}
class _0 {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), r = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return r == null ? null : (this.matched = [0, t.length], this.score = r + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const se = /* @__PURE__ */ k.define({
  combine(i) {
    return Vn(i, {
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
      positionInfo: q0,
      filterStrict: !1,
      compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (r) => hh(e(r), t(r)),
      optionClass: (e, t) => (r) => hh(e(r), t(r)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function hh(i, e) {
  return i ? e ? i + " " + e : i : e;
}
function q0(i, e, t, r, n, s) {
  let o = i.textDirection == F.RTL, l = o, a = !1, h = "top", c, u, f = e.left - n.left, O = n.right - e.right, d = r.right - r.left, p = r.bottom - r.top;
  if (l && f < Math.min(d, O) ? l = !1 : !l && O < Math.min(d, f) && (l = !0), d <= (l ? f : O))
    c = Math.max(n.top, Math.min(t.top, n.bottom - p)) - e.top, u = Math.min(400, l ? f : O);
  else {
    a = !0, u = Math.min(
      400,
      (o ? e.right : n.right - e.left) - 30
      /* Info.Margin */
    );
    let Q = n.bottom - e.bottom;
    Q >= p || Q > e.top ? c = t.bottom - e.top : (h = "bottom", c = e.bottom - t.top);
  }
  let g = (e.bottom - e.top) / s.offsetHeight, b = (e.right - e.left) / s.offsetWidth;
  return {
    style: `${h}: ${c / g}px; max-width: ${u / b}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function Y0(i) {
  let e = i.addToOptions.slice();
  return i.icons && e.push({
    render(t) {
      let r = document.createElement("div");
      return r.classList.add("cm-completionIcon"), t.type && r.classList.add(...t.type.split(/\s+/g).map((n) => "cm-completionIcon-" + n)), r.setAttribute("aria-hidden", "true"), r;
    },
    position: 20
  }), e.push({
    render(t, r, n, s) {
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
      let r = document.createElement("span");
      return r.className = "cm-completionDetail", r.textContent = t.detail, r;
    },
    position: 80
  }), e.sort((t, r) => t.position - r.position).map((t) => t.render);
}
function xs(i, e, t) {
  if (i <= t)
    return { from: 0, to: i };
  if (e < 0 && (e = 0), e <= i >> 1) {
    let n = Math.floor(e / t);
    return { from: n * t, to: (n + 1) * t };
  }
  let r = Math.floor((i - e) / t);
  return { from: i - (r + 1) * t, to: i - r * t };
}
class E0 {
  constructor(e, t, r) {
    this.view = e, this.stateField = t, this.applyCompletion = r, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let n = e.state.field(t), { options: s, selected: o } = n.open, l = e.state.facet(se);
    this.optionContent = Y0(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = xs(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let c = a.target, u; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (u = /-(\d+)$/.exec(c.id)) && +u[1] < h.length) {
          this.applyCompletion(e, h[+u[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, !1);
      h && h.tooltip && e.state.facet(se).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: lr.of(null) });
    }), this.showOptions(s, n.id);
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
    let r = e.state.field(this.stateField), n = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), r != n) {
      let { options: s, selected: o, disabled: l } = r.open;
      (!n.open || n.open.options != s) && (this.range = xs(s.length, o, e.state.facet(se).maxRenderedOptions), this.showOptions(s, r.id)), this.updateSel(), l != ((t = n.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let r of this.currentClass.split(" "))
        r && this.dom.classList.remove(r);
      for (let r of t.split(" "))
        r && this.dom.classList.add(r);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    (t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = xs(t.options.length, t.selected, this.view.state.facet(se).maxRenderedOptions), this.showOptions(t.options, e.id));
    let r = this.updateSelectedOption(t.selected);
    if (r) {
      this.destroyInfo();
      let { completion: n } = t.options[t.selected], { info: s } = n;
      if (!s)
        return;
      let o = typeof s == "string" ? document.createTextNode(s) : s(n);
      if (!o)
        return;
      "then" in o ? o.then((l) => {
        l && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(l, n);
      }).catch((l) => Pe(this.view.state, l, "completion info")) : (this.addInfoPane(o, n), r.setAttribute("aria-describedby", this.info.id));
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let r = this.info = document.createElement("div");
    if (r.className = "cm-tooltip cm-completionInfo", r.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null)
      r.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: n, destroy: s } = e;
      r.appendChild(n), this.infoDestroy = s || null;
    }
    this.dom.appendChild(r), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let r = this.list.firstChild, n = this.range.from; r; r = r.nextSibling, n++)
      r.nodeName != "LI" || !r.id ? n-- : n == e ? r.hasAttribute("aria-selected") || (r.setAttribute("aria-selected", "true"), t = r) : r.hasAttribute("aria-selected") && (r.removeAttribute("aria-selected"), r.removeAttribute("aria-describedby"));
    return t && D0(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), r = this.info.getBoundingClientRect(), n = e.getBoundingClientRect(), s = this.space;
    if (!s) {
      let o = this.dom.ownerDocument.documentElement;
      s = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return n.top > Math.min(s.bottom, t.bottom) - 10 || n.bottom < Math.max(s.top, t.top) + 10 ? null : this.view.state.facet(se).positionInfo(this.view, t, n, r, s, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, r) {
    const n = document.createElement("ul");
    n.id = t, n.setAttribute("role", "listbox"), n.setAttribute("aria-expanded", "true"), n.setAttribute("aria-label", this.view.state.phrase("Completions")), n.addEventListener("mousedown", (o) => {
      o.target == n && o.preventDefault();
    });
    let s = null;
    for (let o = r.from; o < r.to; o++) {
      let { completion: l, match: a } = e[o], { section: h } = l;
      if (h) {
        let f = typeof h == "string" ? h : h.name;
        if (f != s && (o > r.from || r.from == 0))
          if (s = f, typeof h != "string" && h.header)
            n.appendChild(h.header(h));
          else {
            let O = n.appendChild(document.createElement("completion-section"));
            O.textContent = f;
          }
      }
      const c = n.appendChild(document.createElement("li"));
      c.id = t + "-" + o, c.setAttribute("role", "option");
      let u = this.optionClass(l);
      u && (c.className = u);
      for (let f of this.optionContent) {
        let O = f(l, this.view.state, this.view, a);
        O && c.appendChild(O);
      }
    }
    return r.from && n.classList.add("cm-completionListIncompleteTop"), r.to < e.length && n.classList.add("cm-completionListIncompleteBottom"), n;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function W0(i, e) {
  return (t) => new E0(t, i, e);
}
function D0(i, e) {
  let t = i.getBoundingClientRect(), r = e.getBoundingClientRect(), n = t.height / i.offsetHeight;
  r.top < t.top ? i.scrollTop -= (t.top - r.top) / n : r.bottom > t.bottom && (i.scrollTop += (r.bottom - t.bottom) / n);
}
function ch(i) {
  return (i.boost || 0) * 100 + (i.apply ? 10 : 0) + (i.info ? 5 : 0) + (i.type ? 1 : 0);
}
function B0(i, e) {
  let t = [], r = null, n = null, s = (c) => {
    t.push(c);
    let { section: u } = c.completion;
    if (u) {
      r || (r = []);
      let f = typeof u == "string" ? u : u.name;
      r.some((O) => O.name == f) || r.push(typeof u == "string" ? { name: f } : u);
    }
  }, o = e.facet(se);
  for (let c of i)
    if (c.hasResult()) {
      let u = c.result.getMatch;
      if (c.result.filter === !1)
        for (let f of c.result.options)
          s(new lh(f, c.source, u ? u(f) : [], 1e9 - t.length));
      else {
        let f = e.sliceDoc(c.from, c.to), O, d = o.filterStrict ? new _0(f) : new V0(f);
        for (let p of c.result.options)
          if (O = d.match(p.label)) {
            let g = p.displayLabel ? u ? u(p, O.matched) : [] : O.matched, b = O.score + (p.boost || 0);
            if (s(new lh(p, c.source, g, b)), typeof p.section == "object" && p.section.rank === "dynamic") {
              let { name: Q } = p.section;
              n || (n = /* @__PURE__ */ Object.create(null)), n[Q] = Math.max(b, n[Q] || -1e9);
            }
          }
      }
    }
  if (r) {
    let c = /* @__PURE__ */ Object.create(null), u = 0, f = (O, d) => (O.rank === "dynamic" && d.rank === "dynamic" ? n[d.name] - n[O.name] : 0) || (typeof O.rank == "number" ? O.rank : 1e9) - (typeof d.rank == "number" ? d.rank : 1e9) || (O.name < d.name ? -1 : 1);
    for (let O of r.sort(f))
      u -= 1e5, c[O.name] = u;
    for (let O of t) {
      let { section: d } = O.completion;
      d && (O.score += c[typeof d == "string" ? d : d.name]);
    }
  }
  let l = [], a = null, h = o.compareCompletions;
  for (let c of t.sort((u, f) => f.score - u.score || h(u.completion, f.completion))) {
    let u = c.completion;
    !a || a.label != u.label || a.detail != u.detail || a.type != null && u.type != null && a.type != u.type || a.apply != u.apply || a.boost != u.boost ? l.push(c) : ch(c.completion) > ch(a) && (l[l.length - 1] = c), a = c.completion;
  }
  return l;
}
class ai {
  constructor(e, t, r, n, s, o) {
    this.options = e, this.attrs = t, this.tooltip = r, this.timestamp = n, this.selected = s, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new ai(this.options, uh(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, r, n, s, o) {
    if (n && !o && e.some((h) => h.isPending))
      return n.setDisabled();
    let l = B0(e, t);
    if (!l.length)
      return n && e.some((h) => h.isPending) ? n.setDisabled() : null;
    let a = t.facet(se).selectOnOpen ? 0 : -1;
    if (n && n.selected != a && n.selected != -1) {
      let h = n.options[n.selected].completion;
      for (let c = 0; c < l.length; c++)
        if (l[c].completion == h) {
          a = c;
          break;
        }
    }
    return new ai(l, uh(r, a), {
      pos: e.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8),
      create: U0,
      above: s.aboveCursor
    }, n ? n.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new ai(this.options, this.attrs, { ...this.tooltip, pos: e.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new ai(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Sn {
  constructor(e, t, r) {
    this.active = e, this.id = t, this.open = r;
  }
  static start() {
    return new Sn(N0, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, r = t.facet(se), s = (r.override || t.languageDataAt("autocomplete", Jt(t)).map(z0)).map((a) => (this.active.find((c) => c.source == a) || new Ve(
      a,
      this.active.some(
        (c) => c.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, r));
    s.length == this.active.length && s.every((a, h) => a == this.active[h]) && (s = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(pl));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !L0(s, this.active) || l ? o = ai.build(s, t, this.id, o, r, l) : o && o.disabled && !s.some((a) => a.isPending) && (o = null), !o && s.every((a) => !a.isPending) && s.some((a) => a.hasResult()) && (s = s.map((a) => a.hasResult() ? new Ve(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(gf) && (o = o && o.setSelected(a.value, this.id));
    return s == this.active && o == this.open ? this : new Sn(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? j0 : I0;
  }
}
function L0(i, e) {
  if (i == e)
    return !0;
  for (let t = 0, r = 0; ; ) {
    for (; t < i.length && !i[t].hasResult(); )
      t++;
    for (; r < e.length && !e[r].hasResult(); )
      r++;
    let n = t == i.length, s = r == e.length;
    if (n || s)
      return n == s;
    if (i[t++].result != e[r++].result)
      return !1;
  }
}
const j0 = {
  "aria-autocomplete": "list"
}, I0 = {};
function uh(i, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": i
  };
  return e > -1 && (t["aria-activedescendant"] = i + "-" + e), t;
}
const N0 = [];
function mf(i, e) {
  if (i.isUserEvent("input.complete")) {
    let r = i.annotation(br);
    if (r && e.activateOnCompletion(r))
      return 12;
  }
  let t = i.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : i.isUserEvent("delete.backward") ? 2 : i.selection ? 8 : i.docChanged ? 16 : 0;
}
class Ve {
  constructor(e, t, r = !1) {
    this.source = e, this.state = t, this.explicit = r;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let r = mf(e, t), n = this;
    (r & 8 || r & 16 && this.touches(e)) && (n = new Ve(
      n.source,
      0
      /* State.Inactive */
    )), r & 4 && n.state == 0 && (n = new Ve(
      this.source,
      1
      /* State.Pending */
    )), n = n.updateFor(e, r);
    for (let s of e.effects)
      if (s.is(Qn))
        n = new Ve(n.source, 1, s.value);
      else if (s.is(lr))
        n = new Ve(
          n.source,
          0
          /* State.Inactive */
        );
      else if (s.is(pl))
        for (let o of s.value)
          o.source == n.source && (n = o);
    return n;
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
  constructor(e, t, r, n, s, o) {
    super(e, 3, t), this.limit = r, this.result = n, this.from = s, this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var r;
    if (!(t & 3))
      return this.map(e.changes);
    let n = this.result;
    n.map && !e.changes.empty && (n = n.map(n, e.changes));
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = Jt(e.state);
    if (l > o || !n || t & 2 && (Jt(e.startState) == this.from || l < this.limit))
      return new Ve(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = e.changes.mapPos(this.limit);
    return G0(n.validFor, e.state, s, o) ? new Oi(this.source, this.explicit, a, n, s, o) : n.update && (n = n.update(n, s, o, new Of(e.state, l, !1))) ? new Oi(this.source, this.explicit, a, n, n.from, (r = n.to) !== null && r !== void 0 ? r : Jt(e.state)) : new Ve(this.source, 1, this.explicit);
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
function G0(i, e, t, r) {
  if (!i)
    return !1;
  let n = e.sliceDoc(t, r);
  return typeof i == "function" ? i(n, t, r, e) : pf(i, !0).test(n);
}
const pl = /* @__PURE__ */ _.define({
  map(i, e) {
    return i.map((t) => t.map(e));
  }
}), gf = /* @__PURE__ */ _.define(), me = /* @__PURE__ */ ye.define({
  create() {
    return Sn.start();
  },
  update(i, e) {
    return i.update(e);
  },
  provide: (i) => [
    sl.from(i, (e) => e.tooltip),
    T.contentAttributes.from(i, (e) => e.attrs)
  ]
});
function ml(i, e) {
  const t = e.completion.apply || e.completion.label;
  let r = i.state.field(me).active.find((n) => n.source == e.source);
  return r instanceof Oi ? (typeof t == "string" ? i.dispatch({
    ...M0(i.state, t, r.from, r.to),
    annotations: br.of(e.completion)
  }) : t(i, e.completion, r.from, r.to), !0) : !1;
}
const U0 = /* @__PURE__ */ W0(me, ml);
function Er(i, e = "option") {
  return (t) => {
    let r = t.state.field(me, !1);
    if (!r || !r.open || r.open.disabled || Date.now() - r.open.timestamp < t.state.facet(se).interactionDelay)
      return !1;
    let n = 1, s;
    e == "page" && (s = ju(t, r.open.tooltip)) && (n = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = r.open.options, l = r.open.selected > -1 ? r.open.selected + n * (i ? 1 : -1) : i ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: gf.of(l) }), !0;
  };
}
const bf = (i) => {
  let e = i.state.field(me, !1);
  return i.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < i.state.facet(se).interactionDelay ? !1 : ml(i, e.open.options[e.open.selected]);
}, ws = (i) => i.state.field(me, !1) ? (i.dispatch({ effects: Qn.of(!0) }), !0) : !1, F0 = (i) => {
  let e = i.state.field(me, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (i.dispatch({ effects: lr.of(null) }), !0);
};
class H0 {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const K0 = 50, J0 = 1e3, eb = /* @__PURE__ */ Te.fromClass(class {
  constructor(i) {
    this.view = i, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of i.state.field(me).active)
      e.isPending && this.startQuery(e);
  }
  update(i) {
    let e = i.state.field(me), t = i.state.facet(se);
    if (!i.selectionSet && !i.docChanged && i.startState.field(me) == e)
      return;
    let r = i.transactions.some((s) => {
      let o = mf(s, t);
      return o & 8 || (s.selection || s.docChanged) && !(o & 3);
    });
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (r || o.context.abortOnDocChange && i.docChanged || o.updates.length + i.transactions.length > K0 && Date.now() - o.time > J0) {
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
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), i.transactions.some((s) => s.effects.some((o) => o.is(Qn))) && (this.pendingStart = !0);
    let n = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((s) => s.isPending && !this.running.some((o) => o.active.source == s.source)) ? setTimeout(() => this.startUpdate(), n) : -1, this.composing != 0)
      for (let s of i.transactions)
        s.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && s.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: i } = this.view, e = i.field(me);
    for (let t of e.active)
      t.isPending && !this.running.some((r) => r.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(se).updateSyncTime));
  }
  startQuery(i) {
    let { state: e } = this.view, t = Jt(e), r = new Of(e, t, i.explicit, this.view), n = new H0(i, r);
    this.running.push(n), Promise.resolve(i.source(r)).then((s) => {
      n.context.aborted || (n.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: lr.of(null) }), Pe(this.view.state, s);
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
    let e = [], t = this.view.state.facet(se), r = this.view.state.field(me);
    for (let n = 0; n < this.running.length; n++) {
      let s = this.running[n];
      if (s.done === void 0)
        continue;
      if (this.running.splice(n--, 1), s.done) {
        let l = Jt(s.updates.length ? s.updates[0].startState : this.view.state), a = Math.min(l, s.done.from + (s.active.explicit ? 0 : 1)), h = new Oi(s.active.source, s.active.explicit, a, s.done, s.done.from, (i = s.done.to) !== null && i !== void 0 ? i : l);
        for (let c of s.updates)
          h = h.update(c, t);
        if (h.hasResult()) {
          e.push(h);
          continue;
        }
      }
      let o = r.active.find((l) => l.source == s.active.source);
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
    (e.length || r.open && r.open.disabled) && this.view.dispatch({ effects: pl.of(e) });
  }
}, {
  eventHandlers: {
    blur(i) {
      let e = this.view.state.field(me, !1);
      if (e && e.tooltip && this.view.state.facet(se).closeOnBlur) {
        let t = e.open && ju(this.view, e.open.tooltip);
        (!t || !t.dom.contains(i.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: lr.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Qn.of(!1) }), 20), this.composing = 0;
    }
  }
}), tb = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), ib = /* @__PURE__ */ Ai.highest(/* @__PURE__ */ T.domEventHandlers({
  keydown(i, e) {
    let t = e.state.field(me, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || i.key.length > 1 || i.ctrlKey && !(tb && i.altKey) || i.metaKey)
      return !1;
    let r = t.open.options[t.open.selected], n = t.active.find((o) => o.source == r.source), s = r.completion.commitCharacters || n.result.commitCharacters;
    return s && s.indexOf(i.key) > -1 && ml(e, r), !1;
  }
})), yf = /* @__PURE__ */ T.baseTheme({
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
class rb {
  constructor(e, t, r, n) {
    this.field = e, this.line = t, this.from = r, this.to = n;
  }
}
class gl {
  constructor(e, t, r) {
    this.field = e, this.from = t, this.to = r;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, fe.TrackDel), r = e.mapPos(this.to, 1, fe.TrackDel);
    return t == null || r == null ? null : new gl(this.field, t, r);
  }
}
class bl {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let r = [], n = [t], s = e.doc.lineAt(t), o = /^\s*/.exec(s.text)[0];
    for (let a of this.lines) {
      if (r.length) {
        let h = o, c = /^\t*/.exec(a)[0].length;
        for (let u = 0; u < c; u++)
          h += e.facet(mr);
        n.push(t + h.length - c), a = h + a.slice(c);
      }
      r.push(a), t += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new gl(a.field, n[a.line] + a.from, n[a.line] + a.to));
    return { text: r, ranges: l };
  }
  static parse(e) {
    let t = [], r = [], n = [], s;
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
          for (let f of n)
            f.field >= h && f.field++;
        }
        for (let u of n)
          if (u.line == r.length && u.from > s.index) {
            let f = s[2] ? 3 + (s[1] || "").length : 2;
            u.from -= f, u.to -= f;
          }
        n.push(new rb(h, r.length, s.index, s.index + c.length)), o = o.slice(0, s.index) + a + o.slice(s.index + s[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, h) => {
        for (let c of n)
          c.line == r.length && c.from > h && (c.from--, c.to--);
        return a;
      }), r.push(o);
    }
    return new bl(r, n);
  }
}
let nb = /* @__PURE__ */ q.widget({ widget: /* @__PURE__ */ new class extends ur {
  toDOM() {
    let i = document.createElement("span");
    return i.className = "cm-snippetFieldPosition", i;
  }
  ignoreEvent() {
    return !1;
  }
}() }), sb = /* @__PURE__ */ q.mark({ class: "cm-snippetField" });
class Xi {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = q.set(e.map((r) => (r.from == r.to ? nb : sb).range(r.from, r.to)), !0);
  }
  map(e) {
    let t = [];
    for (let r of this.ranges) {
      let n = r.map(e);
      if (!n)
        return null;
      t.push(n);
    }
    return new Xi(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((r) => r.field == this.active && r.from <= t.from && r.to >= t.to));
  }
}
const yr = /* @__PURE__ */ _.define({
  map(i, e) {
    return i && i.map(e);
  }
}), ob = /* @__PURE__ */ _.define(), ar = /* @__PURE__ */ ye.define({
  create() {
    return null;
  },
  update(i, e) {
    for (let t of e.effects) {
      if (t.is(yr))
        return t.value;
      if (t.is(ob) && i)
        return new Xi(i.ranges, t.value);
    }
    return i && e.docChanged && (i = i.map(e.changes)), i && e.selection && !i.selectionInsideField(e.selection) && (i = null), i;
  },
  provide: (i) => T.decorations.from(i, (e) => e ? e.deco : q.none)
});
function yl(i, e) {
  return y.create(i.filter((t) => t.field == e).map((t) => y.range(t.from, t.to)));
}
function Qf(i) {
  let e = bl.parse(i);
  return (t, r, n, s) => {
    let { text: o, ranges: l } = e.instantiate(t.state, n), { main: a } = t.state.selection, h = {
      changes: { from: n, to: s == a.from ? a.to : s, insert: V.of(o) },
      scrollIntoView: !0,
      annotations: r ? [br.of(r), te.userEvent.of("input.complete")] : void 0
    };
    if (l.length && (h.selection = yl(l, 0)), l.some((c) => c.field > 0)) {
      let c = new Xi(l, 0), u = h.effects = [yr.of(c)];
      t.state.field(ar, !1) === void 0 && u.push(_.appendConfig.of([ar, ub, fb, yf]));
    }
    t.dispatch(t.state.update(h));
  };
}
function Sf(i) {
  return ({ state: e, dispatch: t }) => {
    let r = e.field(ar, !1);
    if (!r || i < 0 && r.active == 0)
      return !1;
    let n = r.active + i, s = i > 0 && !r.ranges.some((o) => o.field == n + i);
    return t(e.update({
      selection: yl(r.ranges, n),
      effects: yr.of(s ? null : new Xi(r.ranges, n)),
      scrollIntoView: !0
    })), !0;
  };
}
const lb = ({ state: i, dispatch: e }) => i.field(ar, !1) ? (e(i.update({ effects: yr.of(null) })), !0) : !1, ab = /* @__PURE__ */ Sf(1), hb = /* @__PURE__ */ Sf(-1), cb = [
  { key: "Tab", run: ab, shift: hb },
  { key: "Escape", run: lb }
], fh = /* @__PURE__ */ k.define({
  combine(i) {
    return i.length ? i[0] : cb;
  }
}), ub = /* @__PURE__ */ Ai.highest(/* @__PURE__ */ pr.compute([fh], (i) => i.facet(fh)));
function Qe(i, e) {
  return { ...e, apply: Qf(i) };
}
const fb = /* @__PURE__ */ T.domEventHandlers({
  mousedown(i, e) {
    let t = e.state.field(ar, !1), r;
    if (!t || (r = e.posAtCoords({ x: i.clientX, y: i.clientY })) == null)
      return !1;
    let n = t.ranges.find((s) => s.from <= r && s.to >= r);
    return !n || n.field == t.active ? !1 : (e.dispatch({
      selection: yl(t.ranges, n.field),
      effects: yr.of(t.ranges.some((s) => s.field > n.field) ? new Xi(t.ranges, n.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), xn = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Ht = /* @__PURE__ */ _.define({
  map(i, e) {
    let t = e.mapPos(i, -1, fe.TrackAfter);
    return t ?? void 0;
  }
}), Ql = /* @__PURE__ */ new class extends Mt {
}();
Ql.startSide = 1;
Ql.endSide = -1;
const xf = /* @__PURE__ */ ye.define({
  create() {
    return z.empty;
  },
  update(i, e) {
    if (i = i.map(e.changes), e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      i = i.update({ filter: (r) => r >= t.from && r <= t.to });
    }
    for (let t of e.effects)
      t.is(Ht) && (i = i.update({ add: [Ql.range(t.value, t.value + 1)] }));
    return i;
  }
});
function Ob() {
  return [gb, xf];
}
const $s = "()[]{}<>«»»«［］｛｝";
function db(i) {
  for (let e = 0; e < $s.length; e += 2)
    if ($s.charCodeAt(e) == i)
      return $s.charAt(e + 1);
  return Yc(i < 128 ? i : i + 1);
}
function pb(i, e) {
  return i.languageDataAt("closeBrackets", e)[0] || xn;
}
const mb = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), gb = /* @__PURE__ */ T.inputHandler.of((i, e, t, r) => {
  if ((mb ? i.composing : i.compositionStarted) || i.state.readOnly)
    return !1;
  let n = i.state.selection.main;
  if (r.length > 2 || r.length == 2 && Zt(it(r, 0)) == 1 || e != n.from || t != n.to)
    return !1;
  let s = bb(i.state, r);
  return s ? (i.dispatch(s), !0) : !1;
});
function bb(i, e) {
  let t = pb(i, i.selection.main.head), r = t.brackets || xn.brackets;
  for (let n of r) {
    let s = db(it(n, 0));
    if (e == n)
      return s == n ? Sb(i, n, r.indexOf(n + n + n) > -1, t) : yb(i, n, s, t.before || xn.before);
    if (e == s && wf(i, i.selection.main.from))
      return Qb(i, n, s);
  }
  return null;
}
function wf(i, e) {
  let t = !1;
  return i.field(xf).between(0, i.doc.length, (r) => {
    r == e && (t = !0);
  }), t;
}
function Sl(i, e) {
  let t = i.sliceString(e, e + 2);
  return t.slice(0, Zt(it(t, 0)));
}
function yb(i, e, t, r) {
  let n = null, s = i.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: Ht.of(o.to + e.length),
        range: y.range(o.anchor + e.length, o.head + e.length)
      };
    let l = Sl(i.doc, o.head);
    return !l || /\s/.test(l) || r.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: Ht.of(o.head + e.length),
      range: y.cursor(o.head + e.length)
    } : { range: n = o };
  });
  return n ? null : i.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Qb(i, e, t) {
  let r = null, n = i.changeByRange((s) => s.empty && Sl(i.doc, s.head) == t ? {
    changes: { from: s.head, to: s.head + t.length, insert: t },
    range: y.cursor(s.head + t.length)
  } : r = { range: s });
  return r ? null : i.update(n, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Sb(i, e, t, r) {
  let n = r.stringPrefixes || xn.stringPrefixes, s = null, o = i.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Ht.of(l.to + e.length),
        range: y.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, h = Sl(i.doc, a), c;
    if (h == e) {
      if (Oh(i, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Ht.of(a + e.length),
          range: y.cursor(a + e.length)
        };
      if (wf(i, a)) {
        let f = t && i.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + f.length, insert: f },
          range: y.cursor(a + f.length)
        };
      }
    } else {
      if (t && i.sliceDoc(a - 2 * e.length, a) == e + e && (c = dh(i, a - 2 * e.length, n)) > -1 && Oh(i, c))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Ht.of(a + e.length),
          range: y.cursor(a + e.length)
        };
      if (i.charCategorizer(a)(h) != Re.Word && dh(i, a, n) > -1 && !xb(i, a, e, n))
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
function Oh(i, e) {
  let t = K(i).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function xb(i, e, t, r) {
  let n = K(i).resolveInner(e, -1), s = r.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = i.sliceDoc(n.from, Math.min(n.to, n.from + t.length + s)), a = l.indexOf(t);
    if (!a || a > -1 && r.indexOf(l.slice(0, a)) > -1) {
      let c = n.firstChild;
      for (; c && c.from == n.from && c.to - c.from > t.length + a; ) {
        if (i.sliceDoc(c.to - t.length, c.to) == t)
          return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let h = n.to == e && n.parent;
    if (!h)
      break;
    n = h;
  }
  return !1;
}
function dh(i, e, t) {
  let r = i.charCategorizer(e);
  if (r(i.sliceDoc(e - 1, e)) != Re.Word)
    return e;
  for (let n of t) {
    let s = e - n.length;
    if (i.sliceDoc(s, e) == n && r(i.sliceDoc(s - 1, s)) != Re.Word)
      return s;
  }
  return -1;
}
function wb(i = {}) {
  return [
    ib,
    me,
    se.of(i),
    eb,
    $b,
    yf
  ];
}
const $f = [
  { key: "Ctrl-Space", run: ws },
  { mac: "Alt-`", run: ws },
  { mac: "Alt-i", run: ws },
  { key: "Escape", run: F0 },
  { key: "ArrowDown", run: /* @__PURE__ */ Er(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Er(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Er(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Er(!1, "page") },
  { key: "Enter", run: bf }
], $b = /* @__PURE__ */ Ai.highest(/* @__PURE__ */ pr.computeN([se], (i) => i.facet(se).defaultKeymap ? [$f] : []));
function xl(i) {
  let e = i.field(me, !1);
  return e && e.active.some((t) => t.isPending) ? "pending" : e && e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? "active" : null;
}
const vb = (i) => {
  let { state: e } = i, t = e.doc.lineAt(e.selection.main.from), r = $l(i.state, t.from);
  return r.line ? kb(i) : r.block ? Tb(i) : !1;
};
function wl(i, e) {
  return ({ state: t, dispatch: r }) => {
    if (t.readOnly)
      return !1;
    let n = i(e, t);
    return n ? (r(t.update(n)), !0) : !1;
  };
}
const kb = /* @__PURE__ */ wl(
  Ab,
  0
  /* CommentOption.Toggle */
), Pb = /* @__PURE__ */ wl(
  vf,
  0
  /* CommentOption.Toggle */
), Tb = /* @__PURE__ */ wl(
  (i, e) => vf(i, e, Cb(e)),
  0
  /* CommentOption.Toggle */
);
function $l(i, e) {
  let t = i.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
const Yi = 50;
function Zb(i, { open: e, close: t }, r, n) {
  let s = i.sliceDoc(r - Yi, r), o = i.sliceDoc(n, n + Yi), l = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(o)[0].length, h = s.length - l;
  if (s.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: r - l, margin: l && 1 },
      close: { pos: n + a, margin: a && 1 }
    };
  let c, u;
  n - r <= 2 * Yi ? c = u = i.sliceDoc(r, n) : (c = i.sliceDoc(r, r + Yi), u = i.sliceDoc(n - Yi, n));
  let f = /^\s*/.exec(c)[0].length, O = /\s*$/.exec(u)[0].length, d = u.length - O - t.length;
  return c.slice(f, f + e.length) == e && u.slice(d, d + t.length) == t ? {
    open: {
      pos: r + f + e.length,
      margin: /\s/.test(c.charAt(f + e.length)) ? 1 : 0
    },
    close: {
      pos: n - O - t.length,
      margin: /\s/.test(u.charAt(d - 1)) ? 1 : 0
    }
  } : null;
}
function Cb(i) {
  let e = [];
  for (let t of i.selection.ranges) {
    let r = i.doc.lineAt(t.from), n = t.to <= r.to ? r : i.doc.lineAt(t.to);
    n.from > r.from && n.from == t.to && (n = t.to == r.to + 1 ? r : i.doc.lineAt(t.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > r.from ? e[s].to = n.to : e.push({ from: r.from + /^\s*/.exec(r.text)[0].length, to: n.to });
  }
  return e;
}
function vf(i, e, t = e.selection.ranges) {
  let r = t.map((s) => $l(e, s.from).block);
  if (!r.every((s) => s))
    return null;
  let n = t.map((s, o) => Zb(e, r[o], s.from, s.to));
  if (i != 2 && !n.every((s) => s))
    return { changes: e.changes(t.map((s, o) => n[o] ? [] : [{ from: s.from, insert: r[o].open + " " }, { from: s.to, insert: " " + r[o].close }])) };
  if (i != 1 && n.some((s) => s)) {
    let s = [];
    for (let o = 0, l; o < n.length; o++)
      if (l = n[o]) {
        let a = r[o], { open: h, close: c } = l;
        s.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: s };
  }
  return null;
}
function Ab(i, e, t = e.selection.ranges) {
  let r = [], n = -1;
  for (let { from: s, to: o } of t) {
    let l = r.length, a = 1e9, h = $l(e, s).line;
    if (h) {
      for (let c = s; c <= o; ) {
        let u = e.doc.lineAt(c);
        if (u.from > n && (s == o || o > u.from)) {
          n = u.from;
          let f = /^\s*/.exec(u.text)[0].length, O = f == u.length, d = u.text.slice(f, f + h.length) == h ? f : -1;
          f < u.text.length && f < a && (a = f), r.push({ line: u, comment: d, token: h, indent: f, empty: O, single: !1 });
        }
        c = u.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < r.length; c++)
          r[c].indent < r[c].line.text.length && (r[c].indent = a);
      r.length == l + 1 && (r[l].single = !0);
    }
  }
  if (i != 2 && r.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: l, token: a, indent: h, empty: c, single: u } of r)
      (u || !c) && s.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(s);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (i != 1 && r.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: o, comment: l, token: a } of r)
      if (l >= 0) {
        let h = o.from + l, c = h + a.length;
        o.text[c - o.from] == " " && c++, s.push({ from: h, to: c });
      }
    return { changes: s };
  }
  return null;
}
const ko = /* @__PURE__ */ $t.define(), Xb = /* @__PURE__ */ $t.define(), Rb = /* @__PURE__ */ k.define(), kf = /* @__PURE__ */ k.define({
  combine(i) {
    return Vn(i, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (r, n) => e(r, n) || t(r, n)
    });
  }
}), Pf = /* @__PURE__ */ ye.define({
  create() {
    return at.empty;
  },
  update(i, e) {
    let t = e.state.facet(kf), r = e.annotation(ko);
    if (r) {
      let a = xe.fromTransaction(e, r.selection), h = r.side, c = h == 0 ? i.undone : i.done;
      return a ? c = wn(c, c.length, t.minDepth, a) : c = Zf(c, e.startState.selection), new at(h == 0 ? r.rest : c, h == 0 ? c : r.rest);
    }
    let n = e.annotation(Xb);
    if ((n == "full" || n == "before") && (i = i.isolate()), e.annotation(te.addToHistory) === !1)
      return e.changes.empty ? i : i.addMapping(e.changes.desc);
    let s = xe.fromTransaction(e), o = e.annotation(te.time), l = e.annotation(te.userEvent);
    return s ? i = i.addChanges(s, o, l, t, e) : e.selection && (i = i.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (n == "full" || n == "after") && (i = i.isolate()), i;
  },
  toJSON(i) {
    return { done: i.done.map((e) => e.toJSON()), undone: i.undone.map((e) => e.toJSON()) };
  },
  fromJSON(i) {
    return new at(i.done.map(xe.fromJSON), i.undone.map(xe.fromJSON));
  }
});
function Mb(i = {}) {
  return [
    Pf,
    kf.of(i),
    T.domEventHandlers({
      beforeinput(e, t) {
        let r = e.inputType == "historyUndo" ? vl : e.inputType == "historyRedo" ? Po : null;
        return r ? (e.preventDefault(), r(t)) : !1;
      }
    })
  ];
}
function jn(i, e) {
  return function({ state: t, dispatch: r }) {
    if (!e && t.readOnly)
      return !1;
    let n = t.field(Pf, !1);
    if (!n)
      return !1;
    let s = n.pop(i, t, e);
    return s ? (r(s), !0) : !1;
  };
}
const vl = /* @__PURE__ */ jn(0, !1), Po = /* @__PURE__ */ jn(1, !1), zb = /* @__PURE__ */ jn(0, !0), Vb = /* @__PURE__ */ jn(1, !0);
class xe {
  constructor(e, t, r, n, s) {
    this.changes = e, this.effects = t, this.mapped = r, this.startSelection = n, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new xe(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, r;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (r = this.startSelection) === null || r === void 0 ? void 0 : r.toJSON(),
      selectionsAfter: this.selectionsAfter.map((n) => n.toJSON())
    };
  }
  static fromJSON(e) {
    return new xe(e.changes && re.fromJSON(e.changes), [], e.mapped && ht.fromJSON(e.mapped), e.startSelection && y.fromJSON(e.startSelection), e.selectionsAfter.map(y.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let r = _e;
    for (let n of e.startState.facet(Rb)) {
      let s = n(e);
      s.length && (r = r.concat(s));
    }
    return !r.length && e.changes.empty ? null : new xe(e.changes.invert(e.startState.doc), r, void 0, t || e.startState.selection, _e);
  }
  static selection(e) {
    return new xe(void 0, _e, void 0, void 0, e);
  }
}
function wn(i, e, t, r) {
  let n = e + 1 > t + 20 ? e - t - 1 : 0, s = i.slice(n, e);
  return s.push(r), s;
}
function _b(i, e) {
  let t = [], r = !1;
  return i.iterChangedRanges((n, s) => t.push(n, s)), e.iterChangedRanges((n, s, o, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], c = t[a++];
      l >= h && o <= c && (r = !0);
    }
  }), r;
}
function qb(i, e) {
  return i.ranges.length == e.ranges.length && i.ranges.filter((t, r) => t.empty != e.ranges[r].empty).length === 0;
}
function Tf(i, e) {
  return i.length ? e.length ? i.concat(e) : i : e;
}
const _e = [], Yb = 200;
function Zf(i, e) {
  if (i.length) {
    let t = i[i.length - 1], r = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - Yb));
    return r.length && r[r.length - 1].eq(e) ? i : (r.push(e), wn(i, i.length - 1, 1e9, t.setSelAfter(r)));
  } else
    return [xe.selection([e])];
}
function Eb(i) {
  let e = i[i.length - 1], t = i.slice();
  return t[i.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function vs(i, e) {
  if (!i.length)
    return i;
  let t = i.length, r = _e;
  for (; t; ) {
    let n = Wb(i[t - 1], e, r);
    if (n.changes && !n.changes.empty || n.effects.length) {
      let s = i.slice(0, t);
      return s[t - 1] = n, s;
    } else
      e = n.mapped, t--, r = n.selectionsAfter;
  }
  return r.length ? [xe.selection(r)] : _e;
}
function Wb(i, e, t) {
  let r = Tf(i.selectionsAfter.length ? i.selectionsAfter.map((l) => l.map(e)) : _e, t);
  if (!i.changes)
    return xe.selection(r);
  let n = i.changes.map(e), s = e.mapDesc(i.changes, !0), o = i.mapped ? i.mapped.composeDesc(s) : s;
  return new xe(n, _.mapEffects(i.effects, e), o, i.startSelection.map(s), r);
}
const Db = /^(input\.type|delete)($|\.)/;
class at {
  constructor(e, t, r = 0, n = void 0) {
    this.done = e, this.undone = t, this.prevTime = r, this.prevUserEvent = n;
  }
  isolate() {
    return this.prevTime ? new at(this.done, this.undone) : this;
  }
  addChanges(e, t, r, n, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!r || Db.test(r)) && (!l.selectionsAfter.length && t - this.prevTime < n.newGroupDelay && n.joinToEvent(s, _b(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    r == "input.type.compose") ? o = wn(o, o.length - 1, n.minDepth, new xe(e.changes.compose(l.changes), Tf(_.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, _e)) : o = wn(o, o.length, n.minDepth, e), new at(o, _e, t, r);
  }
  addSelection(e, t, r, n) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : _e;
    return s.length > 0 && t - this.prevTime < n && r == this.prevUserEvent && r && /^select($|\.)/.test(r) && qb(s[s.length - 1], e) ? this : new at(Zf(this.done, e), this.undone, t, r);
  }
  addMapping(e) {
    return new at(vs(this.done, e), vs(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, r) {
    let n = e == 0 ? this.done : this.undone;
    if (n.length == 0)
      return null;
    let s = n[n.length - 1], o = s.selectionsAfter[0] || t.selection;
    if (r && s.selectionsAfter.length)
      return t.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: ko.of({ side: e, rest: Eb(n), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let l = n.length == 1 ? _e : n.slice(0, n.length - 1);
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
const Bb = [
  { key: "Mod-z", run: vl, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Po, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Po, preventDefault: !0 },
  { key: "Mod-u", run: zb, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Vb, preventDefault: !0 }
];
function Ri(i, e) {
  return y.create(i.ranges.map(e), i.mainIndex);
}
function Ue(i, e) {
  return i.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Fe({ state: i, dispatch: e }, t) {
  let r = Ri(i.selection, t);
  return r.eq(i.selection, !0) ? !1 : (e(Ue(i, r)), !0);
}
function In(i, e) {
  return y.cursor(e ? i.to : i.from);
}
function Cf(i, e) {
  return Fe(i, (t) => t.empty ? i.moveByChar(t, e) : In(t, e));
}
function de(i) {
  return i.textDirectionAt(i.state.selection.main.head) == F.LTR;
}
const Af = (i) => Cf(i, !de(i)), Xf = (i) => Cf(i, de(i));
function Rf(i, e) {
  return Fe(i, (t) => t.empty ? i.moveByGroup(t, e) : In(t, e));
}
const Lb = (i) => Rf(i, !de(i)), jb = (i) => Rf(i, de(i));
function Ib(i, e, t) {
  if (e.type.prop(t))
    return !0;
  let r = e.to - e.from;
  return r && (r > 2 || /[^\s,.;:]/.test(i.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Nn(i, e, t) {
  let r = K(i).resolveInner(e.head), n = t ? R.closedBy : R.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? r.childAfter(a) : r.childBefore(a);
    if (!h)
      break;
    Ib(i, h, n) ? r = h : a = t ? h.to : h.from;
  }
  let s = r.type.prop(n), o, l;
  return s && (o = t ? lt(i, r.from, 1) : lt(i, r.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? r.to : r.from, y.cursor(l, t ? -1 : 1);
}
const Nb = (i) => Fe(i, (e) => Nn(i.state, e, !de(i))), Gb = (i) => Fe(i, (e) => Nn(i.state, e, de(i)));
function Mf(i, e) {
  return Fe(i, (t) => {
    if (!t.empty)
      return In(t, e);
    let r = i.moveVertically(t, e);
    return r.head != t.head ? r : i.moveToLineBoundary(t, e);
  });
}
const zf = (i) => Mf(i, !1), Vf = (i) => Mf(i, !0);
function _f(i) {
  let e = i.scrollDOM.clientHeight < i.scrollDOM.scrollHeight - 2, t = 0, r = 0, n;
  if (e) {
    for (let s of i.state.facet(T.scrollMargins)) {
      let o = s(i);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)), o != null && o.bottom && (r = Math.max(o == null ? void 0 : o.bottom, r));
    }
    n = i.scrollDOM.clientHeight - t - r;
  } else
    n = (i.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: r,
    selfScroll: e,
    height: Math.max(i.defaultLineHeight, n - 5)
  };
}
function qf(i, e) {
  let t = _f(i), { state: r } = i, n = Ri(r.selection, (o) => o.empty ? i.moveVertically(o, e, t.height) : In(o, e));
  if (n.eq(r.selection))
    return !1;
  let s;
  if (t.selfScroll) {
    let o = i.coordsAtPos(r.selection.main.head), l = i.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < h && (s = T.scrollIntoView(n.main.head, { y: "start", yMargin: o.top - a }));
  }
  return i.dispatch(Ue(r, n), { effects: s }), !0;
}
const ph = (i) => qf(i, !1), To = (i) => qf(i, !0);
function Dt(i, e, t) {
  let r = i.lineBlockAt(e.head), n = i.moveToLineBoundary(e, t);
  if (n.head == e.head && n.head != (t ? r.to : r.from) && (n = i.moveToLineBoundary(e, t, !1)), !t && n.head == r.from && r.length) {
    let s = /^\s*/.exec(i.state.sliceDoc(r.from, Math.min(r.from + 100, r.to)))[0].length;
    s && e.head != r.from + s && (n = y.cursor(r.from + s));
  }
  return n;
}
const Ub = (i) => Fe(i, (e) => Dt(i, e, !0)), Fb = (i) => Fe(i, (e) => Dt(i, e, !1)), Hb = (i) => Fe(i, (e) => Dt(i, e, !de(i))), Kb = (i) => Fe(i, (e) => Dt(i, e, de(i))), Jb = (i) => Fe(i, (e) => y.cursor(i.lineBlockAt(e.head).from, 1)), ey = (i) => Fe(i, (e) => y.cursor(i.lineBlockAt(e.head).to, -1));
function ty(i, e, t) {
  let r = !1, n = Ri(i.selection, (s) => {
    let o = lt(i, s.head, -1) || lt(i, s.head, 1) || s.head > 0 && lt(i, s.head - 1, 1) || s.head < i.doc.length && lt(i, s.head + 1, -1);
    if (!o || !o.end)
      return s;
    r = !0;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return y.cursor(l);
  });
  return r ? (e(Ue(i, n)), !0) : !1;
}
const iy = ({ state: i, dispatch: e }) => ty(i, e);
function De(i, e) {
  let t = Ri(i.state.selection, (r) => {
    let n = e(r);
    return y.range(r.anchor, n.head, n.goalColumn, n.bidiLevel || void 0);
  });
  return t.eq(i.state.selection) ? !1 : (i.dispatch(Ue(i.state, t)), !0);
}
function Yf(i, e) {
  return De(i, (t) => i.moveByChar(t, e));
}
const Ef = (i) => Yf(i, !de(i)), Wf = (i) => Yf(i, de(i));
function Df(i, e) {
  return De(i, (t) => i.moveByGroup(t, e));
}
const ry = (i) => Df(i, !de(i)), ny = (i) => Df(i, de(i)), sy = (i) => De(i, (e) => Nn(i.state, e, !de(i))), oy = (i) => De(i, (e) => Nn(i.state, e, de(i)));
function Bf(i, e) {
  return De(i, (t) => i.moveVertically(t, e));
}
const Lf = (i) => Bf(i, !1), jf = (i) => Bf(i, !0);
function If(i, e) {
  return De(i, (t) => i.moveVertically(t, e, _f(i).height));
}
const mh = (i) => If(i, !1), gh = (i) => If(i, !0), ly = (i) => De(i, (e) => Dt(i, e, !0)), ay = (i) => De(i, (e) => Dt(i, e, !1)), hy = (i) => De(i, (e) => Dt(i, e, !de(i))), cy = (i) => De(i, (e) => Dt(i, e, de(i))), uy = (i) => De(i, (e) => y.cursor(i.lineBlockAt(e.head).from)), fy = (i) => De(i, (e) => y.cursor(i.lineBlockAt(e.head).to)), bh = ({ state: i, dispatch: e }) => (e(Ue(i, { anchor: 0 })), !0), yh = ({ state: i, dispatch: e }) => (e(Ue(i, { anchor: i.doc.length })), !0), Qh = ({ state: i, dispatch: e }) => (e(Ue(i, { anchor: i.selection.main.anchor, head: 0 })), !0), Sh = ({ state: i, dispatch: e }) => (e(Ue(i, { anchor: i.selection.main.anchor, head: i.doc.length })), !0), Oy = ({ state: i, dispatch: e }) => (e(i.update({ selection: { anchor: 0, head: i.doc.length }, userEvent: "select" })), !0), dy = ({ state: i, dispatch: e }) => {
  let t = Gn(i).map(({ from: r, to: n }) => y.range(r, Math.min(n + 1, i.doc.length)));
  return e(i.update({ selection: y.create(t), userEvent: "select" })), !0;
}, py = ({ state: i, dispatch: e }) => {
  let t = Ri(i.selection, (r) => {
    let n = K(i), s = n.resolveStack(r.from, 1);
    if (r.empty) {
      let o = n.resolveStack(r.from, -1);
      o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o);
    }
    for (let o = s; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < r.from && l.to >= r.to || l.to > r.to && l.from <= r.from) && o.next)
        return y.range(l.to, l.from);
    }
    return r;
  });
  return t.eq(i.selection) ? !1 : (e(Ue(i, t)), !0);
};
function Nf(i, e) {
  let { state: t } = i, r = t.selection, n = t.selection.ranges.slice();
  for (let s of t.selection.ranges) {
    let o = t.doc.lineAt(s.head);
    if (e ? o.to < i.state.doc.length : o.from > 0)
      for (let l = s; ; ) {
        let a = i.moveVertically(l, e);
        if (a.head < o.from || a.head > o.to) {
          n.some((h) => h.head == a.head) || n.push(a);
          break;
        } else {
          if (a.head == l.head)
            break;
          l = a;
        }
      }
  }
  return n.length == r.ranges.length ? !1 : (i.dispatch(Ue(t, y.create(n, n.length - 1))), !0);
}
const my = (i) => Nf(i, !1), gy = (i) => Nf(i, !0), by = ({ state: i, dispatch: e }) => {
  let t = i.selection, r = null;
  return t.ranges.length > 1 ? r = y.create([t.main]) : t.main.empty || (r = y.create([y.cursor(t.main.head)])), r ? (e(Ue(i, r)), !0) : !1;
};
function Qr(i, e) {
  if (i.state.readOnly)
    return !1;
  let t = "delete.selection", { state: r } = i, n = r.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let a = e(s);
      a < o ? (t = "delete.backward", a = Wr(i, a, !1)) : a > o && (t = "delete.forward", a = Wr(i, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Wr(i, o, !1), l = Wr(i, l, !0);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: y.cursor(o, o < s.head ? -1 : 1) };
  });
  return n.changes.empty ? !1 : (i.dispatch(r.update(n, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? T.announce.of(r.phrase("Selection deleted")) : void 0
  })), !0);
}
function Wr(i, e, t) {
  if (i instanceof T)
    for (let r of i.state.facet(T.atomicRanges).map((n) => n(i)))
      r.between(e, e, (n, s) => {
        n < e && s > e && (e = t ? s : n);
      });
  return e;
}
const Gf = (i, e, t) => Qr(i, (r) => {
  let n = r.from, { state: s } = i, o = s.doc.lineAt(n), l, a;
  if (t && !e && n > o.from && n < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, n - o.from))) {
    if (l[l.length - 1] == "	")
      return n - 1;
    let h = _n(l, s.tabSize), c = h % bn(s) || bn(s);
    for (let u = 0; u < c && l[l.length - 1 - u] == " "; u++)
      n--;
    a = n;
  } else
    a = he(o.text, n - o.from, e, e) + o.from, a == n && o.number != (e ? s.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, n - o.from)) && (a = he(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), Zo = (i) => Gf(i, !1, !0), Uf = (i) => Gf(i, !0, !1), Ff = (i, e) => Qr(i, (t) => {
  let r = t.head, { state: n } = i, s = n.doc.lineAt(r), o = n.charCategorizer(r);
  for (let l = null; ; ) {
    if (r == (e ? s.to : s.from)) {
      r == t.head && s.number != (e ? n.doc.lines : 1) && (r += e ? 1 : -1);
      break;
    }
    let a = he(s.text, r - s.from, e) + s.from, h = s.text.slice(Math.min(r, a) - s.from, Math.max(r, a) - s.from), c = o(h);
    if (l != null && c != l)
      break;
    (h != " " || r != t.head) && (l = c), r = a;
  }
  return r;
}), Hf = (i) => Ff(i, !1), yy = (i) => Ff(i, !0), Qy = (i) => Qr(i, (e) => {
  let t = i.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), Sy = (i) => Qr(i, (e) => {
  let t = i.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), xy = (i) => Qr(i, (e) => {
  let t = i.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), wy = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((r) => ({
    changes: { from: r.from, to: r.to, insert: V.of(["", ""]) },
    range: y.cursor(r.from)
  }));
  return e(i.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, $y = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((r) => {
    if (!r.empty || r.from == 0 || r.from == i.doc.length)
      return { range: r };
    let n = r.from, s = i.doc.lineAt(n), o = n == s.from ? n - 1 : he(s.text, n - s.from, !1) + s.from, l = n == s.to ? n + 1 : he(s.text, n - s.from, !0) + s.from;
    return {
      changes: { from: o, to: l, insert: i.doc.slice(n, l).append(i.doc.slice(o, n)) },
      range: y.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(i.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Gn(i) {
  let e = [], t = -1;
  for (let r of i.selection.ranges) {
    let n = i.doc.lineAt(r.from), s = i.doc.lineAt(r.to);
    if (!r.empty && r.to == s.from && (s = i.doc.lineAt(r.to - 1)), t >= n.number) {
      let o = e[e.length - 1];
      o.to = s.to, o.ranges.push(r);
    } else
      e.push({ from: n.from, to: s.to, ranges: [r] });
    t = s.number + 1;
  }
  return e;
}
function Kf(i, e, t) {
  if (i.readOnly)
    return !1;
  let r = [], n = [];
  for (let s of Gn(i)) {
    if (t ? s.to == i.doc.length : s.from == 0)
      continue;
    let o = i.doc.lineAt(t ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (t) {
      r.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + i.lineBreak });
      for (let a of s.ranges)
        n.push(y.range(Math.min(i.doc.length, a.anchor + l), Math.min(i.doc.length, a.head + l)));
    } else {
      r.push({ from: o.from, to: s.from }, { from: s.to, insert: i.lineBreak + o.text });
      for (let a of s.ranges)
        n.push(y.range(a.anchor - l, a.head - l));
    }
  }
  return r.length ? (e(i.update({
    changes: r,
    scrollIntoView: !0,
    selection: y.create(n, i.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const vy = ({ state: i, dispatch: e }) => Kf(i, e, !1), ky = ({ state: i, dispatch: e }) => Kf(i, e, !0);
function Jf(i, e, t) {
  if (i.readOnly)
    return !1;
  let r = [];
  for (let n of Gn(i))
    t ? r.push({ from: n.from, insert: i.doc.slice(n.from, n.to) + i.lineBreak }) : r.push({ from: n.to, insert: i.lineBreak + i.doc.slice(n.from, n.to) });
  return e(i.update({ changes: r, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const Py = ({ state: i, dispatch: e }) => Jf(i, e, !1), Ty = ({ state: i, dispatch: e }) => Jf(i, e, !0), Zy = (i) => {
  if (i.state.readOnly)
    return !1;
  let { state: e } = i, t = e.changes(Gn(e).map(({ from: n, to: s }) => (n > 0 ? n-- : s < e.doc.length && s++, { from: n, to: s }))), r = Ri(e.selection, (n) => {
    let s;
    if (i.lineWrapping) {
      let o = i.lineBlockAt(n.head), l = i.coordsAtPos(n.head, n.assoc || 1);
      l && (s = o.bottom + i.documentTop - l.bottom + i.defaultLineHeight / 2);
    }
    return i.moveVertically(n, !0, s);
  }).map(t);
  return i.dispatch({ changes: t, selection: r, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function Cy(i, e) {
  if (/\(\)|\[\]|\{\}/.test(i.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = K(i).resolveInner(e), r = t.childBefore(e), n = t.childAfter(e), s;
  return r && n && r.to <= e && n.from >= e && (s = r.type.prop(R.closedBy)) && s.indexOf(n.name) > -1 && i.doc.lineAt(r.to).from == i.doc.lineAt(n.from).from && !/\S/.test(i.sliceDoc(r.to, n.from)) ? { from: r.to, to: n.from } : null;
}
const xh = /* @__PURE__ */ eO(!1), Ay = /* @__PURE__ */ eO(!0);
function eO(i) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let r = e.changeByRange((n) => {
      let { from: s, to: o } = n, l = e.doc.lineAt(s), a = !i && s == o && Cy(e, s);
      i && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new Bn(e, { simulateBreak: s, simulateDoubleBreak: !!a }), c = nf(h, s);
      for (c == null && (c = _n(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: s, to: o } = a : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let u = ["", yn(e, c)];
      return a && u.push(yn(e, h.lineIndent(l.from, -1))), {
        changes: { from: s, to: o, insert: V.of(u) },
        range: y.cursor(s + 1 + u[1].length)
      };
    });
    return t(e.update(r, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function kl(i, e) {
  let t = -1;
  return i.changeByRange((r) => {
    let n = [];
    for (let o = r.from; o <= r.to; ) {
      let l = i.doc.lineAt(o);
      l.number > t && (r.empty || r.to > l.from) && (e(l, n, r), t = l.number), o = l.to + 1;
    }
    let s = i.changes(n);
    return {
      changes: n,
      range: y.range(s.mapPos(r.anchor, 1), s.mapPos(r.head, 1))
    };
  });
}
const Xy = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), r = new Bn(i, { overrideIndentation: (s) => {
    let o = t[s];
    return o ?? -1;
  } }), n = kl(i, (s, o, l) => {
    let a = nf(r, s.from);
    if (a == null)
      return;
    /\S/.test(s.text) || (a = 0);
    let h = /^\s*/.exec(s.text)[0], c = yn(i, a);
    (h != c || l.from < s.from + h.length) && (t[s.from] = a, o.push({ from: s.from, to: s.from + h.length, insert: c }));
  });
  return n.changes.empty || e(i.update(n, { userEvent: "indent" })), !0;
}, tO = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(kl(i, (t, r) => {
  r.push({ from: t.from, insert: i.facet(mr) });
}), { userEvent: "input.indent" })), !0), iO = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(kl(i, (t, r) => {
  let n = /^\s*/.exec(t.text)[0];
  if (!n)
    return;
  let s = _n(n, i.tabSize), o = 0, l = yn(i, Math.max(0, s - bn(i)));
  for (; o < n.length && o < l.length && n.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  r.push({ from: t.from + o, to: t.from + n.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Ry = (i) => (i.setTabFocusMode(), !0), My = [
  { key: "Ctrl-b", run: Af, shift: Ef, preventDefault: !0 },
  { key: "Ctrl-f", run: Xf, shift: Wf },
  { key: "Ctrl-p", run: zf, shift: Lf },
  { key: "Ctrl-n", run: Vf, shift: jf },
  { key: "Ctrl-a", run: Jb, shift: uy },
  { key: "Ctrl-e", run: ey, shift: fy },
  { key: "Ctrl-d", run: Uf },
  { key: "Ctrl-h", run: Zo },
  { key: "Ctrl-k", run: Qy },
  { key: "Ctrl-Alt-h", run: Hf },
  { key: "Ctrl-o", run: wy },
  { key: "Ctrl-t", run: $y },
  { key: "Ctrl-v", run: To }
], zy = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Af, shift: Ef, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Lb, shift: ry, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: Hb, shift: hy, preventDefault: !0 },
  { key: "ArrowRight", run: Xf, shift: Wf, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: jb, shift: ny, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Kb, shift: cy, preventDefault: !0 },
  { key: "ArrowUp", run: zf, shift: Lf, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: bh, shift: Qh },
  { mac: "Ctrl-ArrowUp", run: ph, shift: mh },
  { key: "ArrowDown", run: Vf, shift: jf, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: yh, shift: Sh },
  { mac: "Ctrl-ArrowDown", run: To, shift: gh },
  { key: "PageUp", run: ph, shift: mh },
  { key: "PageDown", run: To, shift: gh },
  { key: "Home", run: Fb, shift: ay, preventDefault: !0 },
  { key: "Mod-Home", run: bh, shift: Qh },
  { key: "End", run: Ub, shift: ly, preventDefault: !0 },
  { key: "Mod-End", run: yh, shift: Sh },
  { key: "Enter", run: xh, shift: xh },
  { key: "Mod-a", run: Oy },
  { key: "Backspace", run: Zo, shift: Zo, preventDefault: !0 },
  { key: "Delete", run: Uf, preventDefault: !0 },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Hf, preventDefault: !0 },
  { key: "Mod-Delete", mac: "Alt-Delete", run: yy, preventDefault: !0 },
  { mac: "Mod-Backspace", run: Sy, preventDefault: !0 },
  { mac: "Mod-Delete", run: xy, preventDefault: !0 }
].concat(/* @__PURE__ */ My.map((i) => ({ mac: i.key, run: i.run, shift: i.shift }))), Vy = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Nb, shift: sy },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Gb, shift: oy },
  { key: "Alt-ArrowUp", run: vy },
  { key: "Shift-Alt-ArrowUp", run: Py },
  { key: "Alt-ArrowDown", run: ky },
  { key: "Shift-Alt-ArrowDown", run: Ty },
  { key: "Mod-Alt-ArrowUp", run: my },
  { key: "Mod-Alt-ArrowDown", run: gy },
  { key: "Escape", run: by },
  { key: "Mod-Enter", run: Ay },
  { key: "Alt-l", mac: "Ctrl-l", run: dy },
  { key: "Mod-i", run: py, preventDefault: !0 },
  { key: "Mod-[", run: iO },
  { key: "Mod-]", run: tO },
  { key: "Mod-Alt-\\", run: Xy },
  { key: "Shift-Mod-k", run: Zy },
  { key: "Shift-Mod-\\", run: iy },
  { key: "Mod-/", run: vb },
  { key: "Alt-A", run: Pb },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Ry }
].concat(zy), Dr = { key: "Tab", run: tO, shift: iO };
class $n {
  /**
  @internal
  */
  constructor(e, t, r, n, s, o, l, a, h, c = 0, u) {
    this.p = e, this.stack = t, this.state = r, this.reducePos = n, this.pos = s, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = h, this.lookAhead = c, this.parent = u;
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
  static start(e, t, r = 0) {
    let n = e.parser.context;
    return new $n(e, [], t, r, r, 0, [], 0, n ? new wh(n, n.start) : null, 0, null);
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
    let r = e >> 19, n = e & 65535, { parser: s } = this.p, o = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos), l = s.dynamicPrecedence(n);
    if (l && (this.score += l), r == 0) {
      this.pushState(s.getGoto(this.state, n, !0), this.reducePos), n < s.minRepeatTerm && this.storeNode(n, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(n, this.reducePos);
      return;
    }
    let a = this.stack.length - (r - 1) * 3 - (e & 262144 ? 6 : 0), h = a ? this.stack[a - 2] : this.p.ranges[0].from, c = this.reducePos - h;
    c >= 2e3 && !(!((t = this.p.parser.nodeSet.types[n]) === null || t === void 0) && t.isAnonymous) && (h == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = c) : this.p.lastBigReductionSize < c && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = h, this.p.lastBigReductionSize = c));
    let u = a ? this.stack[a - 1] : 0, f = this.bufferBase + this.buffer.length - u;
    if (n < s.minRepeatTerm || e & 131072) {
      let O = s.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(n, h, O, f + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[a];
    else {
      let O = this.stack[a - 3];
      this.state = s.getGoto(O, n, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(n, h);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(e, t, r, n = 4, s = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this, l = this.buffer.length;
      if (l == 0 && o.parent && (l = o.bufferBase - o.parent.bufferBase, o = o.parent), l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1) {
        if (t == r)
          return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = r;
          return;
        }
      }
    }
    if (!s || this.pos == r)
      this.buffer.push(e, t, r, n);
    else {
      let o = this.buffer.length;
      if (o > 0 && (this.buffer[o - 4] != 0 || this.buffer[o - 1] < 0)) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > r; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > r; )
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, n > 4 && (n -= 4);
      }
      this.buffer[o] = e, this.buffer[o + 1] = t, this.buffer[o + 2] = r, this.buffer[o + 3] = n;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(e, t, r, n) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if ((e & 262144) == 0) {
      let s = e, { parser: o } = this.p;
      (n > this.pos || t <= o.maxNode) && (this.pos = n, o.stateFlag(
        s,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = n)), this.pushState(s, r), this.shiftContext(t, r), t <= o.maxNode && this.buffer.push(t, r, n, 4);
    } else
      this.pos = n, this.shiftContext(t, r), t <= this.p.parser.maxNode && this.buffer.push(t, r, n, 4);
  }
  // Apply an action
  /**
  @internal
  */
  apply(e, t, r, n) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, r, n);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(e, t) {
    let r = this.p.reused.length - 1;
    (r < 0 || this.p.reused[r] != e) && (this.p.reused.push(e), r++);
    let n = this.pos;
    this.reducePos = this.pos = n + e.length, this.pushState(t, n), this.buffer.push(
      r,
      n,
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
    let r = e.buffer.slice(t), n = e.bufferBase + t;
    for (; e && n == e.bufferBase; )
      e = e.parent;
    return new $n(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, r, n, this.curContext, this.lookAhead, e);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(e, t) {
    let r = e <= this.p.parser.maxNode;
    r && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, r ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(e) {
    for (let t = new _y(this); ; ) {
      let r = this.p.parser.stateSlot(
        t.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(t.state, e);
      if (r == 0)
        return !1;
      if ((r & 65536) == 0)
        return !0;
      t.reduce(r);
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
      let n = [];
      for (let s = 0, o; s < t.length; s += 2)
        (o = t[s + 1]) != this.state && this.p.parser.hasAction(o, e) && n.push(t[s], o);
      if (this.stack.length < 120)
        for (let s = 0; n.length < 8 && s < t.length; s += 2) {
          let o = t[s + 1];
          n.some((l, a) => a & 1 && l == o) || n.push(t[s], o);
        }
      t = n;
    }
    let r = [];
    for (let n = 0; n < t.length && r.length < 4; n += 2) {
      let s = t[n + 1];
      if (s == this.state)
        continue;
      let o = this.split();
      o.pushState(s, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(t[n], this.pos), o.reducePos = this.pos, o.score -= 200, r.push(o);
    }
    return r;
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
      let r = t >> 19, n = t & 65535, s = this.stack.length - r * 3;
      if (s < 0 || e.getGoto(this.stack[s], n, !1) < 0) {
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
    let { parser: e } = this.p, t = [], r = (n, s) => {
      if (!t.includes(n))
        return t.push(n), e.allActions(n, (o) => {
          if (!(o & 393216)) if (o & 65536) {
            let l = (o >> 19) - s;
            if (l > 1) {
              let a = o & 65535, h = this.stack.length - l * 3;
              if (h >= 0 && e.getGoto(this.stack[h], a, !1) >= 0)
                return l << 19 | 65536 | a;
            }
          } else {
            let l = r(o, s + 1);
            if (l != null)
              return l;
          }
        });
    };
    return r(this.state, 0);
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
      let t = new wh(this.curContext.tracker, e);
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
class wh {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class _y {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, r = e >> 19;
    r == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (r - 1) * 3;
    let n = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = n;
  }
}
class vn {
  constructor(e, t, r) {
    this.stack = e, this.pos = t, this.index = r, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new vn(e, t, t - e.bufferBase);
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
    return new vn(this.stack, this.pos, this.index);
  }
}
function ji(i, e = Uint16Array) {
  if (typeof i != "string")
    return i;
  let t = null;
  for (let r = 0, n = 0; r < i.length; ) {
    let s = 0;
    for (; ; ) {
      let o = i.charCodeAt(r++), l = !1;
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
    t ? t[n++] = s : t = new e(s);
  }
  return t;
}
class Jr {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const $h = new Jr();
class qy {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = $h, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(e, t) {
    let r = this.range, n = this.rangeIndex, s = this.pos + e;
    for (; s < r.from; ) {
      if (!n)
        return null;
      let o = this.ranges[--n];
      s -= r.from - o.to, r = o;
    }
    for (; t < 0 ? s > r.to : s >= r.to; ) {
      if (n == this.ranges.length - 1)
        return null;
      let o = this.ranges[++n];
      s += o.from - r.to, r = o;
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
    let t = this.chunkOff + e, r, n;
    if (t >= 0 && t < this.chunk.length)
      r = this.pos + e, n = this.chunk.charCodeAt(t);
    else {
      let s = this.resolveOffset(e, 1);
      if (s == null)
        return -1;
      if (r = s, r >= this.chunk2Pos && r < this.chunk2Pos + this.chunk2.length)
        n = this.chunk2.charCodeAt(r - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= r; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = r), r + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - r)), n = this.chunk2.charCodeAt(0);
      }
    }
    return r >= this.token.lookAhead && (this.token.lookAhead = r + 1), n;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(e, t = 0) {
    let r = t ? this.resolveOffset(t, -1) : this.pos;
    if (r == null || r < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = r;
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
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = $h, this.pos != e) {
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
    let r = "";
    for (let n of this.ranges) {
      if (n.from >= t)
        break;
      n.to > e && (r += this.input.read(Math.max(n.from, e), Math.min(n.to, t)));
    }
    return r;
  }
}
class di {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: r } = t.p;
    rO(this.data, e, t, this.id, r.data, r.tokenPrecTable);
  }
}
di.prototype.contextual = di.prototype.fallback = di.prototype.extend = !1;
class kn {
  constructor(e, t, r) {
    this.precTable = t, this.elseToken = r, this.data = typeof e == "string" ? ji(e) : e;
  }
  token(e, t) {
    let r = e.pos, n = 0;
    for (; ; ) {
      let s = e.next < 0, o = e.resolveOffset(1, 1);
      if (rO(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
        break;
      if (this.elseToken == null)
        return;
      if (s || n++, o == null)
        break;
      e.reset(o, e.token);
    }
    n && (e.reset(r, e.token), e.acceptToken(this.elseToken, n));
  }
}
kn.prototype.contextual = di.prototype.fallback = di.prototype.extend = !1;
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
function rO(i, e, t, r, n, s) {
  let o = 0, l = 1 << r, { dialect: a } = t.p.parser;
  e: for (; (l & i[o]) != 0; ) {
    let h = i[o + 1];
    for (let O = o + 3; O < h; O += 2)
      if ((i[O + 1] & l) > 0) {
        let d = i[O];
        if (a.allows(d) && (e.token.value == -1 || e.token.value == d || Yy(d, e.token.value, n, s))) {
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
function vh(i, e, t) {
  for (let r = e, n; (n = i[r]) != 65535; r++)
    if (n == t)
      return r - e;
  return -1;
}
function Yy(i, e, t, r) {
  let n = vh(t, r, e);
  return n < 0 || vh(t, r, i) < n;
}
const $e = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let ks = null;
function kh(i, e, t) {
  let r = i.cursor(N.IncludeAnonymous);
  for (r.moveTo(e); ; )
    if (!(t < 0 ? r.childBefore(e) : r.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? r.to < e : r.from > e) && !r.type.isError)
          return t < 0 ? Math.max(0, Math.min(
            r.to - 1,
            e - 25
            /* Lookahead.Margin */
          )) : Math.min(i.length, Math.max(
            r.from + 1,
            e + 25
            /* Lookahead.Margin */
          ));
        if (t < 0 ? r.prevSibling() : r.nextSibling())
          break;
        if (!r.parent())
          return t < 0 ? 0 : i.length;
      }
}
class Ey {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? kh(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? kh(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
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
      let r = this.trees[t], n = this.index[t];
      if (n == r.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let s = r.children[n], o = this.start[t] + r.positions[n];
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
class Wy {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((r) => new Jr());
  }
  getActions(e) {
    let t = 0, r = null, { parser: n } = e.p, { tokenizers: s } = n, o = n.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), l = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let h = 0; h < s.length; h++) {
      if ((1 << h & o) == 0)
        continue;
      let c = s[h], u = this.tokens[h];
      if (!(r && !c.fallback) && ((c.contextual || u.start != e.pos || u.mask != o || u.context != l) && (this.updateCachedToken(u, c, e), u.mask = o, u.context = l), u.lookAhead > u.end + 25 && (a = Math.max(u.lookAhead, a)), u.value != 0)) {
        let f = t;
        if (u.extended > -1 && (t = this.addActions(e, u.extended, u.end, t)), t = this.addActions(e, u.value, u.end, t), !c.extend && (r = u, t > f))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !r && e.pos == this.stream.end && (r = new Jr(), r.value = e.p.parser.eofTerm, r.start = r.end = e.pos, t = this.addActions(e, r.value, r.end, t)), this.mainToken = r, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new Jr(), { pos: r, p: n } = e;
    return t.start = r, t.end = Math.min(r + 1, n.stream.end), t.value = r == n.stream.end ? n.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, r) {
    let n = this.stream.clipPos(r.pos);
    if (t.token(this.stream.reset(n, e), r), e.value > -1) {
      let { parser: s } = r.p;
      for (let o = 0; o < s.specialized.length; o++)
        if (s.specialized[o] == e.value) {
          let l = s.specializers[o](this.stream.read(e.start, e.end), r);
          if (l >= 0 && r.p.parser.dialect.allows(l >> 1)) {
            (l & 1) == 0 ? e.value = l >> 1 : e.extended = l >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(n + 1);
  }
  putAction(e, t, r, n) {
    for (let s = 0; s < n; s += 3)
      if (this.actions[s] == e)
        return n;
    return this.actions[n++] = e, this.actions[n++] = t, this.actions[n++] = r, n;
  }
  addActions(e, t, r, n) {
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
            n == 0 && l[h + 1] == 2 && (n = this.putAction(dt(l, h + 2), t, r, n));
            break;
          }
        l[h] == t && (n = this.putAction(dt(l, h + 1), t, r, n));
      }
    return n;
  }
}
class Dy {
  constructor(e, t, r, n) {
    this.parser = e, this.input = t, this.ranges = n, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new qy(t, n), this.tokens = new Wy(e, this.stream), this.topTerm = e.top[1];
    let { from: s } = n[0];
    this.stacks = [$n.start(this, e.top[0], s)], this.fragments = r.length && this.stream.end - s > e.bufferLength * 4 ? new Ey(r, e.nodeSet) : null;
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
    let e = this.stacks, t = this.minStackPos, r = this.stacks = [], n, s;
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
          r.push(l);
        else {
          if (this.advanceStack(l, r, e))
            continue;
          {
            n || (n = [], s = []), n.push(l);
            let a = this.tokens.getMainToken(l);
            s.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!r.length) {
      let o = n && Ly(n);
      if (o)
        return $e && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw $e && n && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && n) {
      let o = this.stoppedAt != null && n[0].pos > this.stoppedAt ? n[0] : this.runRecovery(n, s, r);
      if (o)
        return $e && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (r.length > o)
        for (r.sort((l, a) => a.score - l.score); r.length > o; )
          r.pop();
      r.some((l) => l.reducePos > t) && this.recovering--;
    } else if (r.length > 1) {
      e: for (let o = 0; o < r.length - 1; o++) {
        let l = r[o];
        for (let a = o + 1; a < r.length; a++) {
          let h = r[a];
          if (l.sameState(h) || l.buffer.length > 500 && h.buffer.length > 500)
            if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0)
              r.splice(a--, 1);
            else {
              r.splice(o--, 1);
              continue e;
            }
        }
      }
      r.length > 12 && (r.sort((o, l) => l.score - o.score), r.splice(
        12,
        r.length - 12
        /* Rec.MaxStackCount */
      ));
    }
    this.minStackPos = r[0].pos;
    for (let o = 1; o < r.length; o++)
      r[o].pos < this.minStackPos && (this.minStackPos = r[o].pos);
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
  advanceStack(e, t, r) {
    let n = e.pos, { parser: s } = this, o = $e ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && n > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict, c = h ? e.curContext.hash : 0;
      for (let u = this.fragments.nodeAt(n); u; ) {
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
      let c = a[h++], u = a[h++], f = a[h++], O = h == a.length || !r, d = O ? e : e.split(), p = this.tokens.mainToken;
      if (d.apply(c, u, p ? p.start : d.pos, f), $e && console.log(o + this.stackID(d) + ` (via ${(c & 65536) == 0 ? "shift" : `reduce of ${s.getName(
        c & 65535
        /* Action.ValueMask */
      )}`} for ${s.getName(u)} @ ${n}${d == e ? "" : ", split"})`), O)
        return !0;
      d.pos > n ? t.push(d) : r.push(d);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(e, t) {
    let r = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > r)
        return Ph(e, t), !0;
    }
  }
  runRecovery(e, t, r) {
    let n = null, s = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], h = t[(o << 1) + 1], c = $e ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (s || (s = !0, l.restart(), $e && console.log(c + this.stackID(l) + " (restarted)"), this.advanceFully(l, r))))
        continue;
      let u = l.split(), f = c;
      for (let O = 0; O < 10 && u.forceReduce() && ($e && console.log(f + this.stackID(u) + " (via force-reduce)"), !this.advanceFully(u, r)); O++)
        $e && (f = this.stackID(u) + " -> ");
      for (let O of l.recoverByInsert(a))
        $e && console.log(c + this.stackID(O) + " (via recover-insert)"), this.advanceFully(O, r);
      this.stream.end > l.pos ? (h == l.pos && (h++, a = 0), l.recoverByDelete(a, h), $e && console.log(c + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), Ph(l, r)) : (!n || n.score < l.score) && (n = l);
    }
    return n;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), H.build({
      buffer: vn.create(e),
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
function Ph(i, e) {
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (r.pos == i.pos && r.sameState(i)) {
      e[t].score < i.score && (e[t] = i);
      return;
    }
  }
  e.push(i);
}
class By {
  constructor(e, t, r) {
    this.source = e, this.flags = t, this.disabled = r;
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
class Pi extends Ku {
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
    let r = Object.keys(e.topRules).map((l) => e.topRules[l][1]), n = [];
    for (let l = 0; l < t.length; l++)
      n.push([]);
    function s(l, a, h) {
      n[l].push([a, a.deserialize(String(h))]);
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
      props: n[a],
      top: r.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = Nu;
    let o = ji(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(Th), this.states = ji(e.states, Uint32Array), this.data = ji(e.stateData), this.goto = ji(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new di(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, r) {
    let n = new Dy(this, e, t, r);
    for (let s of this.wrappers)
      n = s(n, e, t, r);
    return n;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(e, t, r = !1) {
    let n = this.goto;
    if (t >= n[0])
      return -1;
    for (let s = n[t + 1]; ; ) {
      let o = n[s++], l = o & 1, a = n[s++];
      if (l && r)
        return a;
      for (let h = s + (o >> 1); s < h; s++)
        if (n[s] == e)
          return a;
      if (l)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(e, t) {
    let r = this.data;
    for (let n = 0; n < 2; n++)
      for (let s = this.stateSlot(
        e,
        n ? 2 : 1
        /* ParseState.Actions */
      ), o; ; s += 3) {
        if ((o = r[s]) == 65535)
          if (r[s + 1] == 1)
            o = r[s = dt(r, s + 2)];
          else {
            if (r[s + 1] == 2)
              return dt(r, s + 2);
            break;
          }
        if (o == t || o == 0)
          return dt(r, s + 1);
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
    return !!this.allActions(e, (r) => r == t ? !0 : null);
  }
  /**
  @internal
  */
  allActions(e, t) {
    let r = this.stateSlot(
      e,
      4
      /* ParseState.DefaultReduce */
    ), n = r ? t(r) : void 0;
    for (let s = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); n == null; s += 3) {
      if (this.data[s] == 65535)
        if (this.data[s + 1] == 1)
          s = dt(this.data, s + 2);
        else
          break;
      n = t(dt(this.data, s + 1));
    }
    return n;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(e) {
    let t = [];
    for (let r = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1)
          r = dt(this.data, r + 2);
        else
          break;
      if ((this.data[r + 2] & 1) == 0) {
        let n = this.data[r + 1];
        t.some((s, o) => o & 1 && s == n) || t.push(this.data[r], n);
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
      let r = this.topRules[e.top];
      if (!r)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = r;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((r) => {
      let n = e.tokenizers.find((s) => s.from == r);
      return n ? n.to : r;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((r, n) => {
      let s = e.specializers.find((l) => l.from == r.external);
      if (!s)
        return r;
      let o = Object.assign(Object.assign({}, r), { external: s.to });
      return t.specializers[n] = Th(o), o;
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
    let t = Object.keys(this.dialects), r = t.map(() => !1);
    if (e)
      for (let s of e.split(" ")) {
        let o = t.indexOf(s);
        o >= 0 && (r[o] = !0);
      }
    let n = null;
    for (let s = 0; s < t.length; s++)
      if (!r[s])
        for (let o = this.dialects[t[s]], l; (l = this.data[o++]) != 65535; )
          (n || (n = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new By(e, r, n);
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
function Ly(i) {
  let e = null;
  for (let t of i) {
    let r = t.p.stoppedAt;
    (t.pos == t.p.stream.end || r != null && t.pos > r) && t.p.parser.stateFlag(
      t.state,
      2
      /* StateFlag.Accepting */
    ) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
function Th(i) {
  if (i.external) {
    let e = i.extend ? 1 : 0;
    return (t, r) => i.external(t, r) << 1 | e;
  }
  return i.get;
}
const jy = 55, Iy = 1, Ny = 56, Gy = 2, Uy = 57, Fy = 3, Zh = 4, Hy = 5, Pl = 6, sO = 7, oO = 8, lO = 9, aO = 10, Ky = 11, Jy = 12, eQ = 13, Ts = 58, tQ = 14, iQ = 15, Ch = 59, hO = 21, rQ = 23, cO = 24, nQ = 25, Co = 27, uO = 28, sQ = 29, oQ = 32, lQ = 35, aQ = 37, hQ = 38, cQ = 0, uQ = 1, fQ = {
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
}, OQ = {
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
}, Ah = {
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
function dQ(i) {
  return i == 45 || i == 46 || i == 58 || i >= 65 && i <= 90 || i == 95 || i >= 97 && i <= 122 || i >= 161;
}
let Xh = null, Rh = null, Mh = 0;
function Ao(i, e) {
  let t = i.pos + e;
  if (Mh == t && Rh == i) return Xh;
  let r = i.peek(e), n = "";
  for (; dQ(r); )
    n += String.fromCharCode(r), r = i.peek(++e);
  return Rh = i, Mh = t, Xh = n ? n.toLowerCase() : r == pQ || r == mQ ? void 0 : null;
}
const fO = 60, Pn = 62, Tl = 47, pQ = 63, mQ = 33, gQ = 45;
function zh(i, e) {
  this.name = i, this.parent = e;
}
const bQ = [Pl, aO, sO, oO, lO], yQ = new nO({
  start: null,
  shift(i, e, t, r) {
    return bQ.indexOf(e) > -1 ? new zh(Ao(r, 1) || "", i) : i;
  },
  reduce(i, e) {
    return e == hO && i ? i.parent : i;
  },
  reuse(i, e, t, r) {
    let n = e.type.id;
    return n == Pl || n == aQ ? new zh(Ao(r, 1) || "", i) : i;
  },
  strict: !1
}), QQ = new Ze((i, e) => {
  if (i.next != fO) {
    i.next < 0 && e.context && i.acceptToken(Ts);
    return;
  }
  i.advance();
  let t = i.next == Tl;
  t && i.advance();
  let r = Ao(i, 0);
  if (r === void 0) return;
  if (!r) return i.acceptToken(t ? iQ : tQ);
  let n = e.context ? e.context.name : null;
  if (t) {
    if (r == n) return i.acceptToken(Ky);
    if (n && OQ[n]) return i.acceptToken(Ts, -2);
    if (e.dialectEnabled(cQ)) return i.acceptToken(Jy);
    for (let s = e.context; s; s = s.parent) if (s.name == r) return;
    i.acceptToken(eQ);
  } else {
    if (r == "script") return i.acceptToken(sO);
    if (r == "style") return i.acceptToken(oO);
    if (r == "textarea") return i.acceptToken(lO);
    if (fQ.hasOwnProperty(r)) return i.acceptToken(aO);
    n && Ah[n] && Ah[n][r] ? i.acceptToken(Ts, -1) : i.acceptToken(Pl);
  }
}, { contextual: !0 }), SQ = new Ze((i) => {
  for (let e = 0, t = 0; ; t++) {
    if (i.next < 0) {
      t && i.acceptToken(Ch);
      break;
    }
    if (i.next == gQ)
      e++;
    else if (i.next == Pn && e >= 2) {
      t >= 3 && i.acceptToken(Ch, -2);
      break;
    } else
      e = 0;
    i.advance();
  }
});
function xQ(i) {
  for (; i; i = i.parent)
    if (i.name == "svg" || i.name == "math") return !0;
  return !1;
}
const wQ = new Ze((i, e) => {
  if (i.next == Tl && i.peek(1) == Pn) {
    let t = e.dialectEnabled(uQ) || xQ(e.context);
    i.acceptToken(t ? Hy : Zh, 2);
  } else i.next == Pn && i.acceptToken(Zh, 1);
});
function Zl(i, e, t) {
  let r = 2 + i.length;
  return new Ze((n) => {
    for (let s = 0, o = 0, l = 0; ; l++) {
      if (n.next < 0) {
        l && n.acceptToken(e);
        break;
      }
      if (s == 0 && n.next == fO || s == 1 && n.next == Tl || s >= 2 && s < r && n.next == i.charCodeAt(s - 2))
        s++, o++;
      else if (s == r && n.next == Pn) {
        l > o ? n.acceptToken(e, -o) : n.acceptToken(t, -(o - 2));
        break;
      } else if ((n.next == 10 || n.next == 13) && l) {
        n.acceptToken(e, 1);
        break;
      } else
        s = o = 0;
      n.advance();
    }
  });
}
const $Q = Zl("script", jy, Iy), vQ = Zl("style", Ny, Gy), kQ = Zl("textarea", Uy, Fy), PQ = Dn({
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
}), TQ = Pi.deserialize({
  version: 14,
  states: ",xOVO!rOOO!ZQ#tO'#CrO!`Q#tO'#C{O!eQ#tO'#DOO!jQ#tO'#DRO!oQ#tO'#DTO!tOaO'#CqO#PObO'#CqO#[OdO'#CqO$kO!rO'#CqOOO`'#Cq'#CqO$rO$fO'#DUO$zQ#tO'#DWO%PQ#tO'#DXOOO`'#Dl'#DlOOO`'#DZ'#DZQVO!rOOO%UQ&rO,59^O%aQ&rO,59gO%lQ&rO,59jO%wQ&rO,59mO&SQ&rO,59oOOOa'#D_'#D_O&_OaO'#CyO&jOaO,59]OOOb'#D`'#D`O&rObO'#C|O&}ObO,59]OOOd'#Da'#DaO'VOdO'#DPO'bOdO,59]OOO`'#Db'#DbO'jO!rO,59]O'qQ#tO'#DSOOO`,59],59]OOOp'#Dc'#DcO'vO$fO,59pOOO`,59p,59pO(OQ#|O,59rO(TQ#|O,59sOOO`-E7X-E7XO(YQ&rO'#CtOOQW'#D['#D[O(hQ&rO1G.xOOOa1G.x1G.xOOO`1G/Z1G/ZO(sQ&rO1G/ROOOb1G/R1G/RO)OQ&rO1G/UOOOd1G/U1G/UO)ZQ&rO1G/XOOO`1G/X1G/XO)fQ&rO1G/ZOOOa-E7]-E7]O)qQ#tO'#CzOOO`1G.w1G.wOOOb-E7^-E7^O)vQ#tO'#C}OOOd-E7_-E7_O){Q#tO'#DQOOO`-E7`-E7`O*QQ#|O,59nOOOp-E7a-E7aOOO`1G/[1G/[OOO`1G/^1G/^OOO`1G/_1G/_O*VQ,UO,59`OOQW-E7Y-E7YOOOa7+$d7+$dOOO`7+$u7+$uOOOb7+$m7+$mOOOd7+$p7+$pOOO`7+$s7+$sO*bQ#|O,59fO*gQ#|O,59iO*lQ#|O,59lOOO`1G/Y1G/YO*qO7[O'#CwO+SOMhO'#CwOOQW1G.z1G.zOOO`1G/Q1G/QOOO`1G/T1G/TOOO`1G/W1G/WOOOO'#D]'#D]O+eO7[O,59cOOQW,59c,59cOOOO'#D^'#D^O+vOMhO,59cOOOO-E7Z-E7ZOOQW1G.}1G.}OOOO-E7[-E7[",
  stateData: ",c~O!_OS~OUSOVPOWQOXROYTO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O|_O!eZO~OgaO~OgbO~OgcO~OgdO~OgeO~O!XfOPmP![mP~O!YiOQpP![pP~O!ZlORsP![sP~OUSOVPOWQOXROYTOZqO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O!eZO~O![rO~P#gO!]sO!fuO~OgvO~OgwO~OS|OT}OiyO~OS!POT}OiyO~OS!ROT}OiyO~OS!TOT}OiyO~OS}OT}OiyO~O!XfOPmX![mX~OP!WO![!XO~O!YiOQpX![pX~OQ!ZO![!XO~O!ZlORsX![sX~OR!]O![!XO~O![!XO~P#gOg!_O~O!]sO!f!aO~OS!bO~OS!cO~Oj!dOShXThXihX~OS!fOT!gOiyO~OS!hOT!gOiyO~OS!iOT!gOiyO~OS!jOT!gOiyO~OS!gOT!gOiyO~Og!kO~Og!lO~Og!mO~OS!nO~Ol!qO!a!oO!c!pO~OS!rO~OS!sO~OS!tO~Ob!uOc!uOd!uO!a!wO!b!uO~Ob!xOc!xOd!xO!c!wO!d!xO~Ob!uOc!uOd!uO!a!{O!b!uO~Ob!xOc!xOd!xO!c!{O!d!xO~OT~cbd!ey|!e~",
  goto: "%q!aPPPPPPPPPPPPPPPPPPPPP!b!hP!nPP!zP!}#Q#T#Z#^#a#g#j#m#s#y!bP!b!bP$P$V$m$s$y%P%V%]%cPPPPPPPP%iX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
  nodeNames: "⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
  maxTerm: 68,
  context: yQ,
  nodeProps: [
    ["closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 22, 31, 34, 37, "CloseTag"],
    ["openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 30, 33, 36, 38, "OpenTag"],
    ["group", -10, 14, 15, 18, 19, 20, 21, 40, 41, 42, 43, "Entity", 17, "Entity TextContent", -3, 29, 32, 35, "TextContent Entity"],
    ["isolate", -11, 22, 30, 31, 33, 34, 36, 37, 38, 39, 42, 43, "ltr", -3, 27, 28, 40, ""]
  ],
  propSources: [PQ],
  skippedNodes: [0],
  repeatNodeCount: 9,
  tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|caPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bXaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UVaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pTaPOv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!dpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({WaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!b`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!b`!dpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYlWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`aP!b`!dp!_^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebiSlWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXiSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vciSaP!b`!dpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!ahaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WiiSlWd!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zblWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOb!R!R7tP;=`<%l7S!Z8OYlWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{iiSlWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbiSlWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QciSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXiSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TalWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOc!R!RAwP;=`<%lAY!ZBRYlWc!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbiSlWc!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbiSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXiSc!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!cxaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYliSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_kiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_XaP!b`!dp!fQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZiSgQaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!b`!dpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!b`!dp!ePOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!b`!dpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!b`!dpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!b`!dpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!b`!dpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!b`!dpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!b`!dpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!b`!dpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!dpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO|PP!-nP;=`<%l!-Sq!-xS!dp|POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!b`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!b`|POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!b`!dp|POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!b`!dpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!b`!dpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!b`!dpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!b`!dpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!b`!dpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!b`!dpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!dpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOyPP!7TP;=`<%l!6Vq!7]V!dpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!dpyPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!b`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!b`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!b`yPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!b`!dpyPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXjSaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
  tokenizers: [$Q, vQ, kQ, wQ, QQ, SQ, 0, 1, 2, 3, 4, 5],
  topRules: { Document: [0, 16] },
  dialects: { noMatch: 0, selfClosing: 515 },
  tokenPrec: 517
});
function OO(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of i.getChildren(cO)) {
    let n = r.getChild(nQ), s = r.getChild(Co) || r.getChild(uO);
    n && (t[e.read(n.from, n.to)] = s ? s.type.id == Co ? e.read(s.from + 1, s.to - 1) : e.read(s.from, s.to) : "");
  }
  return t;
}
function Vh(i, e) {
  let t = i.getChild(rQ);
  return t ? e.read(t.from, t.to) : " ";
}
function Zs(i, e, t) {
  let r;
  for (let n of t)
    if (!n.attrs || n.attrs(r || (r = OO(i.node.parent.firstChild, e))))
      return { parser: n.parser };
  return null;
}
function dO(i = [], e = []) {
  let t = [], r = [], n = [], s = [];
  for (let l of i)
    (l.tag == "script" ? t : l.tag == "style" ? r : l.tag == "textarea" ? n : s).push(l);
  let o = e.length ? /* @__PURE__ */ Object.create(null) : null;
  for (let l of e) (o[l.name] || (o[l.name] = [])).push(l);
  return jg((l, a) => {
    let h = l.type.id;
    if (h == sQ) return Zs(l, a, t);
    if (h == oQ) return Zs(l, a, r);
    if (h == lQ) return Zs(l, a, n);
    if (h == hO && s.length) {
      let c = l.node, u = c.firstChild, f = u && Vh(u, a), O;
      if (f) {
        for (let d of s)
          if (d.tag == f && (!d.attrs || d.attrs(O || (O = OO(u, a))))) {
            let p = c.lastChild, g = p.type.id == hQ ? p.from : c.to;
            if (g > u.to)
              return { parser: d.parser, overlay: [{ from: u.to, to: g }] };
          }
      }
    }
    if (o && h == cO) {
      let c = l.node, u;
      if (u = c.firstChild) {
        let f = o[a.read(u.from, u.to)];
        if (f) for (let O of f) {
          if (O.tagName && O.tagName != Vh(c.parent, a)) continue;
          let d = c.lastChild;
          if (d.type.id == Co) {
            let p = d.from + 1, g = d.lastChild, b = d.to - (g && g.isError ? 0 : 1);
            if (b > p) return { parser: O.parser, overlay: [{ from: p, to: b }] };
          } else if (d.type.id == uO)
            return { parser: O.parser, overlay: [{ from: d.from, to: d.to }] };
        }
      }
    }
    return null;
  });
}
const ZQ = 122, _h = 1, CQ = 123, AQ = 124, pO = 2, XQ = 125, RQ = 3, MQ = 4, mO = [
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
], zQ = 58, VQ = 40, gO = 95, _Q = 91, en = 45, qQ = 46, YQ = 35, EQ = 37, WQ = 38, DQ = 92, BQ = 10, LQ = 42;
function hr(i) {
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 161;
}
function Cl(i) {
  return i >= 48 && i <= 57;
}
function qh(i) {
  return Cl(i) || i >= 97 && i <= 102 || i >= 65 && i <= 70;
}
const bO = (i, e, t) => (r, n) => {
  for (let s = !1, o = 0, l = 0; ; l++) {
    let { next: a } = r;
    if (hr(a) || a == en || a == gO || s && Cl(a))
      !s && (a != en || l > 0) && (s = !0), o === l && a == en && o++, r.advance();
    else if (a == DQ && r.peek(1) != BQ) {
      if (r.advance(), qh(r.next)) {
        do
          r.advance();
        while (qh(r.next));
        r.next == 32 && r.advance();
      } else r.next > -1 && r.advance();
      s = !0;
    } else {
      s && r.acceptToken(
        o == 2 && n.canShift(pO) ? e : a == VQ ? t : i
      );
      break;
    }
  }
}, jQ = new Ze(
  bO(CQ, pO, AQ)
), IQ = new Ze(
  bO(XQ, RQ, MQ)
), NQ = new Ze((i) => {
  if (mO.includes(i.peek(-1))) {
    let { next: e } = i;
    (hr(e) || e == gO || e == YQ || e == qQ || e == LQ || e == _Q || e == zQ && hr(i.peek(1)) || e == en || e == WQ) && i.acceptToken(ZQ);
  }
}), GQ = new Ze((i) => {
  if (!mO.includes(i.peek(-1))) {
    let { next: e } = i;
    if (e == EQ && (i.advance(), i.acceptToken(_h)), hr(e)) {
      do
        i.advance();
      while (hr(i.next) || Cl(i.next));
      i.acceptToken(_h);
    }
  }
}), UQ = Dn({
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
}), FQ = { __proto__: null, lang: 38, "nth-child": 38, "nth-last-child": 38, "nth-of-type": 38, "nth-last-of-type": 38, dir: 38, "host-context": 38, if: 84, url: 124, "url-prefix": 124, domain: 124, regexp: 124 }, HQ = { __proto__: null, or: 98, and: 98, not: 106, only: 106, layer: 170 }, KQ = { __proto__: null, selector: 112, layer: 166 }, JQ = { __proto__: null, "@import": 162, "@media": 174, "@charset": 178, "@namespace": 182, "@keyframes": 188, "@supports": 200, "@scope": 204 }, e1 = { __proto__: null, to: 207 }, t1 = Pi.deserialize({
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
  propSources: [UQ],
  skippedNodes: [0, 5, 106],
  repeatNodeCount: 15,
  tokenData: "JQ~R!YOX$qX^%i^p$qpq%iqr({rs-ust/itu6Wuv$qvw7Qwx7cxy9Qyz9cz{9h{|:R|}>t}!O?V!O!P?t!P!Q@]!Q![AU![!]BP!]!^B{!^!_C^!_!`DY!`!aDm!a!b$q!b!cEn!c!}$q!}#OG{#O#P$q#P#QH^#Q#R6W#R#o$q#o#pHo#p#q6W#q#rIQ#r#sIc#s#y$q#y#z%i#z$f$q$f$g%i$g#BY$q#BY#BZ%i#BZ$IS$q$IS$I_%i$I_$I|$q$I|$JO%i$JO$JT$q$JT$JU%i$JU$KV$q$KV$KW%i$KW&FU$q&FU&FV%i&FV;'S$q;'S;=`Iz<%lO$q`$tSOy%Qz;'S%Q;'S;=`%c<%lO%Q`%VS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q`%fP;=`<%l%Q~%nh#s~OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Q~'ah#s~!a`OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Qj)OUOy%Qz#]%Q#]#^)b#^;'S%Q;'S;=`%c<%lO%Qj)gU!a`Oy%Qz#a%Q#a#b)y#b;'S%Q;'S;=`%c<%lO%Qj*OU!a`Oy%Qz#d%Q#d#e*b#e;'S%Q;'S;=`%c<%lO%Qj*gU!a`Oy%Qz#c%Q#c#d*y#d;'S%Q;'S;=`%c<%lO%Qj+OU!a`Oy%Qz#f%Q#f#g+b#g;'S%Q;'S;=`%c<%lO%Qj+gU!a`Oy%Qz#h%Q#h#i+y#i;'S%Q;'S;=`%c<%lO%Qj,OU!a`Oy%Qz#T%Q#T#U,b#U;'S%Q;'S;=`%c<%lO%Qj,gU!a`Oy%Qz#b%Q#b#c,y#c;'S%Q;'S;=`%c<%lO%Qj-OU!a`Oy%Qz#h%Q#h#i-b#i;'S%Q;'S;=`%c<%lO%Qj-iS!qY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q~-xWOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c<%lO-u~.gOt~~.jRO;'S-u;'S;=`.s;=`O-u~.vXOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c;=`<%l-u<%lO-u~/fP;=`<%l-uj/nYjYOy%Qz!Q%Q!Q![0^![!c%Q!c!i0^!i#T%Q#T#Z0^#Z;'S%Q;'S;=`%c<%lO%Qj0cY!a`Oy%Qz!Q%Q!Q![1R![!c%Q!c!i1R!i#T%Q#T#Z1R#Z;'S%Q;'S;=`%c<%lO%Qj1WY!a`Oy%Qz!Q%Q!Q![1v![!c%Q!c!i1v!i#T%Q#T#Z1v#Z;'S%Q;'S;=`%c<%lO%Qj1}YrY!a`Oy%Qz!Q%Q!Q![2m![!c%Q!c!i2m!i#T%Q#T#Z2m#Z;'S%Q;'S;=`%c<%lO%Qj2tYrY!a`Oy%Qz!Q%Q!Q![3d![!c%Q!c!i3d!i#T%Q#T#Z3d#Z;'S%Q;'S;=`%c<%lO%Qj3iY!a`Oy%Qz!Q%Q!Q![4X![!c%Q!c!i4X!i#T%Q#T#Z4X#Z;'S%Q;'S;=`%c<%lO%Qj4`YrY!a`Oy%Qz!Q%Q!Q![5O![!c%Q!c!i5O!i#T%Q#T#Z5O#Z;'S%Q;'S;=`%c<%lO%Qj5TY!a`Oy%Qz!Q%Q!Q![5s![!c%Q!c!i5s!i#T%Q#T#Z5s#Z;'S%Q;'S;=`%c<%lO%Qj5zSrY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qd6ZUOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qd6tS!hS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qb7VSZQOy%Qz;'S%Q;'S;=`%c<%lO%Q~7fWOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z<%lO7c~8RRO;'S7c;'S;=`8[;=`O7c~8_XOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z;=`<%l7c<%lO7c~8}P;=`<%l7cj9VSeYOy%Qz;'S%Q;'S;=`%c<%lO%Q~9hOd~n9oUWQvWOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qj:YWvW!mQOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj:wU!a`Oy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Qj;bY!a`#}YOy%Qz!Q%Q!Q![;Z![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj<VY!a`Oy%Qz{%Q{|<u|}%Q}!O<u!O!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj<zU!a`Oy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj=eU!a`#}YOy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj>O[!a`#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj>yS!^YOy%Qz;'S%Q;'S;=`%c<%lO%Qj?[WvWOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj?yU]YOy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Q~@bTvWOy%Qz{@q{;'S%Q;'S;=`%c<%lO%Q~@xS!a`#t~Oy%Qz;'S%Q;'S;=`%c<%lO%QjAZ[#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%QjBUU`YOy%Qz![%Q![!]Bh!];'S%Q;'S;=`%c<%lO%QbBoSaQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjCQSkYOy%Qz;'S%Q;'S;=`%c<%lO%QhCcU!TWOy%Qz!_%Q!_!`Cu!`;'S%Q;'S;=`%c<%lO%QhC|S!TW!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QlDaS!TW!hSOy%Qz;'S%Q;'S;=`%c<%lO%QjDtV!jQ!TWOy%Qz!_%Q!_!`Cu!`!aEZ!a;'S%Q;'S;=`%c<%lO%QbEbS!jQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjEqYOy%Qz}%Q}!OFa!O!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjFfW!a`Oy%Qz!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjGV[iY!a`Oy%Qz}%Q}!OGO!O!Q%Q!Q![GO![!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjHQSmYOy%Qz;'S%Q;'S;=`%c<%lO%QnHcSl^Oy%Qz;'S%Q;'S;=`%c<%lO%QjHtSpYOy%Qz;'S%Q;'S;=`%c<%lO%QjIVSoYOy%Qz;'S%Q;'S;=`%c<%lO%QfIhU!mQOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Q`I}P;=`<%l$q",
  tokenizers: [NQ, GQ, jQ, IQ, 1, 2, 3, 4, new kn("m~RRYZ[z{a~~g~aO#v~~dP!P!Qg~lO#w~~", 28, 129)],
  topRules: { StyleSheet: [0, 6], Styles: [1, 105] },
  specialized: [{ term: 124, get: (i) => FQ[i] || -1 }, { term: 125, get: (i) => HQ[i] || -1 }, { term: 4, get: (i) => KQ[i] || -1 }, { term: 25, get: (i) => JQ[i] || -1 }, { term: 123, get: (i) => e1[i] || -1 }],
  tokenPrec: 1963
});
let Cs = null;
function As() {
  if (!Cs && typeof document == "object" && document.body) {
    let { style: i } = document.body, e = [], t = /* @__PURE__ */ new Set();
    for (let r in i)
      r != "cssText" && r != "cssFloat" && typeof i[r] == "string" && (/[A-Z]/.test(r) && (r = r.replace(/[A-Z]/g, (n) => "-" + n.toLowerCase())), t.has(r) || (e.push(r), t.add(r)));
    Cs = e.sort().map((r) => ({ type: "property", label: r, apply: r + ": " }));
  }
  return Cs || [];
}
const Yh = /* @__PURE__ */ [
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
].map((i) => ({ type: "class", label: i })), Eh = /* @__PURE__ */ [
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
].map((i) => ({ type: "constant", label: i }))), i1 = /* @__PURE__ */ [
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
].map((i) => ({ type: "type", label: i })), r1 = /* @__PURE__ */ [
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
].map((i) => ({ type: "keyword", label: i })), Ot = /^(\w[\w-]*|-\w[\w-]*|)$/, n1 = /^-(-[\w-]*)?$/;
function s1(i, e) {
  var t;
  if ((i.name == "(" || i.type.isError) && (i = i.parent || i), i.name != "ArgList")
    return !1;
  let r = (t = i.parent) === null || t === void 0 ? void 0 : t.firstChild;
  return (r == null ? void 0 : r.name) != "Callee" ? !1 : e.sliceString(r.from, r.to) == "var";
}
const Wh = /* @__PURE__ */ new Hu(), o1 = ["Declaration"];
function l1(i) {
  for (let e = i; ; ) {
    if (e.type.isTop)
      return e;
    if (!(e = e.parent))
      return i;
  }
}
function yO(i, e, t) {
  if (e.to - e.from > 4096) {
    let r = Wh.get(e);
    if (r)
      return r;
    let n = [], s = /* @__PURE__ */ new Set(), o = e.cursor(N.IncludeAnonymous);
    if (o.firstChild())
      do
        for (let l of yO(i, o.node, t))
          s.has(l.label) || (s.add(l.label), n.push(l));
      while (o.nextSibling());
    return Wh.set(e, n), n;
  } else {
    let r = [], n = /* @__PURE__ */ new Set();
    return e.cursor().iterate((s) => {
      var o;
      if (t(s) && s.matchContext(o1) && ((o = s.node.nextSibling) === null || o === void 0 ? void 0 : o.name) == ":") {
        let l = i.sliceString(s.from, s.to);
        n.has(l) || (n.add(l), r.push({ label: l, type: "variable" }));
      }
    }), r;
  }
}
const a1 = (i) => (e) => {
  let { state: t, pos: r } = e, n = K(t).resolveInner(r, -1), s = n.type.isError && n.from == n.to - 1 && t.doc.sliceString(n.from, n.to) == "-";
  if (n.name == "PropertyName" || (s || n.name == "TagName") && /^(Block|Styles)$/.test(n.resolve(n.to).name))
    return { from: n.from, options: As(), validFor: Ot };
  if (n.name == "ValueName")
    return { from: n.from, options: Eh, validFor: Ot };
  if (n.name == "PseudoClassName")
    return { from: n.from, options: Yh, validFor: Ot };
  if (i(n) || (e.explicit || s) && s1(n, t.doc))
    return {
      from: i(n) || s ? n.from : r,
      options: yO(t.doc, l1(n), i),
      validFor: n1
    };
  if (n.name == "TagName") {
    for (let { parent: a } = n; a; a = a.parent)
      if (a.name == "Block")
        return { from: n.from, options: As(), validFor: Ot };
    return { from: n.from, options: i1, validFor: Ot };
  }
  if (n.name == "AtKeyword")
    return { from: n.from, options: r1, validFor: Ot };
  if (!e.explicit)
    return null;
  let o = n.resolve(r), l = o.childBefore(r);
  return l && l.name == ":" && o.name == "PseudoClassSelector" ? { from: r, options: Yh, validFor: Ot } : l && l.name == ":" && o.name == "Declaration" || o.name == "ArgList" ? { from: r, options: Eh, validFor: Ot } : o.name == "Block" || o.name == "Styles" ? { from: r, options: As(), validFor: Ot } : null;
}, h1 = /* @__PURE__ */ a1((i) => i.name == "VariableName"), ri = /* @__PURE__ */ $i.define({
  name: "css",
  parser: /* @__PURE__ */ t1.configure({
    props: [
      /* @__PURE__ */ Ln.add({
        Declaration: /* @__PURE__ */ Kr()
      }),
      /* @__PURE__ */ Ol.add({
        "Block KeyframeList": lf
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
  return new ul(ri, ri.data.of({ autocomplete: h1 }));
}
const c1 = 316, u1 = 317, Dh = 1, f1 = 2, O1 = 3, d1 = 4, p1 = 318, m1 = 320, g1 = 321, b1 = 5, y1 = 6, Q1 = 0, Ro = [
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
], QO = 125, S1 = 59, Mo = 47, x1 = 42, w1 = 43, $1 = 45, v1 = 60, k1 = 44, P1 = 63, T1 = 46, Z1 = 91, C1 = new nO({
  start: !1,
  shift(i, e) {
    return e == b1 || e == y1 || e == m1 ? i : e == g1;
  },
  strict: !1
}), A1 = new Ze((i, e) => {
  let { next: t } = i;
  (t == QO || t == -1 || e.context) && i.acceptToken(p1);
}, { contextual: !0, fallback: !0 }), X1 = new Ze((i, e) => {
  let { next: t } = i, r;
  Ro.indexOf(t) > -1 || t == Mo && ((r = i.peek(1)) == Mo || r == x1) || t != QO && t != S1 && t != -1 && !e.context && i.acceptToken(c1);
}, { contextual: !0 }), R1 = new Ze((i, e) => {
  i.next == Z1 && !e.context && i.acceptToken(u1);
}, { contextual: !0 }), M1 = new Ze((i, e) => {
  let { next: t } = i;
  if (t == w1 || t == $1) {
    if (i.advance(), t == i.next) {
      i.advance();
      let r = !e.context && e.canShift(Dh);
      i.acceptToken(r ? Dh : f1);
    }
  } else t == P1 && i.peek(1) == T1 && (i.advance(), i.advance(), (i.next < 48 || i.next > 57) && i.acceptToken(O1));
}, { contextual: !0 });
function Xs(i, e) {
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i == 95 || i >= 192 || !e && i >= 48 && i <= 57;
}
const z1 = new Ze((i, e) => {
  if (i.next != v1 || !e.dialectEnabled(Q1) || (i.advance(), i.next == Mo)) return;
  let t = 0;
  for (; Ro.indexOf(i.next) > -1; )
    i.advance(), t++;
  if (Xs(i.next, !0)) {
    for (i.advance(), t++; Xs(i.next, !1); )
      i.advance(), t++;
    for (; Ro.indexOf(i.next) > -1; )
      i.advance(), t++;
    if (i.next == k1) return;
    for (let r = 0; ; r++) {
      if (r == 7) {
        if (!Xs(i.next, !0)) return;
        break;
      }
      if (i.next != "extends".charCodeAt(r)) break;
      i.advance(), t++;
    }
  }
  i.acceptToken(d1, -t);
}), V1 = Dn({
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
}), _1 = { __proto__: null, export: 20, as: 25, from: 33, default: 36, async: 41, function: 42, in: 52, out: 55, const: 56, extends: 60, this: 64, true: 72, false: 72, null: 84, void: 88, typeof: 92, super: 108, new: 142, delete: 154, yield: 163, await: 167, class: 172, public: 235, private: 235, protected: 235, readonly: 237, instanceof: 256, satisfies: 259, import: 292, keyof: 349, unique: 353, infer: 359, asserts: 395, is: 397, abstract: 417, implements: 419, type: 421, let: 424, var: 426, using: 429, interface: 435, enum: 439, namespace: 445, module: 447, declare: 451, global: 455, defer: 471, for: 476, of: 485, while: 488, with: 492, do: 496, if: 500, else: 502, switch: 506, case: 512, try: 518, catch: 522, finally: 526, return: 530, throw: 534, break: 538, continue: 542, debugger: 546 }, q1 = { __proto__: null, async: 129, get: 131, set: 133, declare: 195, public: 197, private: 197, protected: 197, static: 199, abstract: 201, override: 203, readonly: 209, accessor: 211, new: 401 }, Y1 = { __proto__: null, "<": 193 }, E1 = Pi.deserialize({
  version: 14,
  states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
  stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
  goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
  nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 380,
  context: C1,
  nodeProps: [
    ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
    ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
    ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
    ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
  ],
  propSources: [V1],
  skippedNodes: [0, 5, 6, 278],
  repeatNodeCount: 37,
  tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [X1, R1, M1, z1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, A1, new kn("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new kn("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
  topRules: { Script: [0, 7], SingleExpression: [1, 276], SingleClassItem: [2, 277] },
  dialects: { jsx: 0, ts: 15175 },
  dynamicPrecedences: { 80: 1, 82: 1, 94: 1, 169: 1, 199: 1 },
  specialized: [{ term: 327, get: (i) => _1[i] || -1 }, { term: 343, get: (i) => q1[i] || -1 }, { term: 95, get: (i) => Y1[i] || -1 }],
  tokenPrec: 15201
}), SO = [
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
], W1 = /* @__PURE__ */ SO.concat([
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
]), Bh = /* @__PURE__ */ new Hu(), xO = /* @__PURE__ */ new Set([
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
    let r = e.node.getChild("VariableDefinition");
    return r && t(r, i), !0;
  };
}
const D1 = ["FunctionDeclaration"], B1 = {
  FunctionDeclaration: /* @__PURE__ */ Ei("function"),
  ClassDeclaration: /* @__PURE__ */ Ei("class"),
  ClassExpression: () => !0,
  EnumDeclaration: /* @__PURE__ */ Ei("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ Ei("type"),
  NamespaceDeclaration: /* @__PURE__ */ Ei("namespace"),
  VariableDefinition(i, e) {
    i.matchContext(D1) || e(i, "variable");
  },
  TypeDefinition(i, e) {
    e(i, "type");
  },
  __proto__: null
};
function wO(i, e) {
  let t = Bh.get(e);
  if (t)
    return t;
  let r = [], n = !0;
  function s(o, l) {
    let a = i.sliceString(o.from, o.to);
    r.push({ label: a, type: l });
  }
  return e.cursor(N.IncludeAnonymous).iterate((o) => {
    if (n)
      n = !1;
    else if (o.name) {
      let l = B1[o.name];
      if (l && l(o, s) || xO.has(o.name))
        return !1;
    } else if (o.to - o.from > 8192) {
      for (let l of wO(i, o.node))
        r.push(l);
      return !1;
    }
  }), Bh.set(e, r), r;
}
const Lh = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, $O = [
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
function L1(i) {
  let e = K(i.state).resolveInner(i.pos, -1);
  if ($O.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && Lh.test(i.state.sliceDoc(e.from, e.to));
  if (!t && !i.explicit)
    return null;
  let r = [];
  for (let n = e; n; n = n.parent)
    xO.has(n.name) && (r = r.concat(wO(i.state.doc, n)));
  return {
    options: r,
    from: t ? e.from : i.pos,
    validFor: Lh
  };
}
const ct = /* @__PURE__ */ $i.define({
  name: "javascript",
  parser: /* @__PURE__ */ E1.configure({
    props: [
      /* @__PURE__ */ Ln.add({
        IfStatement: /* @__PURE__ */ Kr({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ Kr({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: m0,
        SwitchBody: (i) => {
          let e = i.textAfter, t = /^\s*\}/.test(e), r = /^\s*(case|default)\b/.test(e);
          return i.baseIndent + (t ? 0 : r ? 1 : 2) * i.unit;
        },
        Block: /* @__PURE__ */ p0({ closing: "}" }),
        ArrowFunction: (i) => i.baseIndent + i.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": /* @__PURE__ */ Kr({ except: /^\s*{/ }),
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
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": lf,
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
}), vO = {
  test: (i) => /^JSX/.test(i.name),
  facet: /* @__PURE__ */ tf({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, kO = /* @__PURE__ */ ct.configure({ dialect: "ts" }, "typescript"), PO = /* @__PURE__ */ ct.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ cl.add((i) => i.isTop ? [vO] : void 0)]
}), TO = /* @__PURE__ */ ct.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ cl.add((i) => i.isTop ? [vO] : void 0)]
}, "typescript");
let ZO = (i) => ({ label: i, type: "keyword" });
const CO = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(ZO), j1 = /* @__PURE__ */ CO.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(ZO));
function I1(i = {}) {
  let e = i.jsx ? i.typescript ? TO : PO : i.typescript ? kO : ct, t = i.typescript ? W1.concat(j1) : SO.concat(CO);
  return new ul(e, [
    ct.data.of({
      autocomplete: R0($O, df(t))
    }),
    ct.data.of({
      autocomplete: L1
    }),
    i.jsx ? U1 : []
  ]);
}
function N1(i) {
  for (; ; ) {
    if (i.name == "JSXOpenTag" || i.name == "JSXSelfClosingTag" || i.name == "JSXFragmentTag")
      return i;
    if (i.name == "JSXEscape" || !i.parent)
      return null;
    i = i.parent;
  }
}
function jh(i, e, t = i.length) {
  for (let r = e == null ? void 0 : e.firstChild; r; r = r.nextSibling)
    if (r.name == "JSXIdentifier" || r.name == "JSXBuiltin" || r.name == "JSXNamespacedName" || r.name == "JSXMemberExpression")
      return i.sliceString(r.from, Math.min(r.to, t));
  return "";
}
const G1 = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), U1 = /* @__PURE__ */ T.inputHandler.of((i, e, t, r, n) => {
  if ((G1 ? i.composing : i.compositionStarted) || i.state.readOnly || e != t || r != ">" && r != "/" || !ct.isActiveAt(i.state, e, -1))
    return !1;
  let s = n(), { state: o } = s, l = o.changeByRange((a) => {
    var h;
    let { head: c } = a, u = K(o).resolveInner(c - 1, -1), f;
    if (u.name == "JSXStartTag" && (u = u.parent), !(o.doc.sliceString(c - 1, c) != r || u.name == "JSXAttributeValue" && u.to > c)) {
      if (r == ">" && u.name == "JSXFragmentTag")
        return { range: a, changes: { from: c, insert: "</>" } };
      if (r == "/" && u.name == "JSXStartCloseTag") {
        let O = u.parent, d = O.parent;
        if (d && O.from == c - 2 && ((f = jh(o.doc, d.firstChild, c)) || ((h = d.firstChild) === null || h === void 0 ? void 0 : h.name) == "JSXFragmentTag")) {
          let p = `${f}>`;
          return { range: y.cursor(c + p.length, -1), changes: { from: c, insert: p } };
        }
      } else if (r == ">") {
        let O = N1(u);
        if (O && O.name == "JSXOpenTag" && !/^\/?>|^<\//.test(o.doc.sliceString(c, c + 2)) && (f = jh(o.doc, O, c)))
          return { range: a, changes: { from: c, insert: `</${f}>` } };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (i.dispatch([
    s,
    o.update(l, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
}), Wi = ["_blank", "_self", "_top", "_parent"], Rs = ["ascii", "utf-8", "utf-16", "latin1", "latin1"], Ms = ["get", "post", "put", "delete"], zs = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], ve = ["true", "false"], P = {}, F1 = {
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
}, AO = {
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
}, XO = /* @__PURE__ */ "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((i) => "on" + i);
for (let i of XO)
  AO[i] = null;
class Tn {
  constructor(e, t) {
    this.tags = { ...F1, ...e }, this.globalAttrs = { ...AO, ...t }, this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
  }
}
Tn.default = /* @__PURE__ */ new Tn();
function Ti(i, e, t = i.length) {
  if (!e)
    return "";
  let r = e.firstChild, n = r && r.getChild("TagName");
  return n ? i.sliceString(n.from, Math.min(n.to, t)) : "";
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
function RO(i, e, t) {
  let r = t.tags[Ti(i, Zi(e))];
  return (r == null ? void 0 : r.children) || t.allTags;
}
function Al(i, e) {
  let t = [];
  for (let r = Zi(e); r && !r.type.isTop; r = Zi(r.parent)) {
    let n = Ti(i, r);
    if (n && r.lastChild.name == "CloseTag")
      break;
    n && t.indexOf(n) < 0 && (e.name == "EndTag" || e.from >= r.firstChild.to) && t.push(n);
  }
  return t;
}
const MO = /^[:\-\.\w\u00b7-\uffff]*$/;
function Ih(i, e, t, r, n) {
  let s = /\s*>/.test(i.sliceDoc(n, n + 5)) ? "" : ">", o = Zi(t, t.name == "StartTag" || t.name == "TagName");
  return {
    from: r,
    to: n,
    options: RO(i.doc, o, e).map((l) => ({ label: l, type: "type" })).concat(Al(i.doc, t).map((l, a) => ({
      label: "/" + l,
      apply: "/" + l + s,
      type: "type",
      boost: 99 - a
    }))),
    validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
function Nh(i, e, t, r) {
  let n = /\s*>/.test(i.sliceDoc(r, r + 5)) ? "" : ">";
  return {
    from: t,
    to: r,
    options: Al(i.doc, e).map((s, o) => ({ label: s, apply: s + n, type: "type", boost: 99 - o })),
    validFor: MO
  };
}
function H1(i, e, t, r) {
  let n = [], s = 0;
  for (let o of RO(i.doc, t, e))
    n.push({ label: "<" + o, type: "type" });
  for (let o of Al(i.doc, t))
    n.push({ label: "</" + o + ">", type: "type", boost: 99 - s++ });
  return { from: r, to: r, options: n, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
function K1(i, e, t, r, n) {
  let s = Zi(t), o = s ? e.tags[Ti(i.doc, s)] : null, l = o && o.attrs ? Object.keys(o.attrs) : [], a = o && o.globalAttrs === !1 ? l : l.length ? l.concat(e.globalAttrNames) : e.globalAttrNames;
  return {
    from: r,
    to: n,
    options: a.map((h) => ({ label: h, type: "property" })),
    validFor: MO
  };
}
function J1(i, e, t, r, n) {
  var s;
  let o = (s = t.parent) === null || s === void 0 ? void 0 : s.getChild("AttributeName"), l = [], a;
  if (o) {
    let h = i.sliceDoc(o.from, o.to), c = e.globalAttrs[h];
    if (!c) {
      let u = Zi(t), f = u ? e.tags[Ti(i.doc, u)] : null;
      c = (f == null ? void 0 : f.attrs) && f.attrs[h];
    }
    if (c) {
      let u = i.sliceDoc(r, n).toLowerCase(), f = '"', O = '"';
      /^['"]/.test(u) ? (a = u[0] == '"' ? /^[^"]*$/ : /^[^']*$/, f = "", O = i.sliceDoc(n, n + 1) == u[0] ? "" : u[0], u = u.slice(1), r++) : a = /^[^\s<>='"]*$/;
      for (let d of c)
        l.push({ label: d, apply: f + d + O, type: "constant" });
    }
  }
  return { from: r, to: n, options: l, validFor: a };
}
function eS(i, e) {
  let { state: t, pos: r } = e, n = K(t).resolveInner(r, -1), s = n.resolve(r);
  for (let o = r, l; s == n && (l = n.childBefore(o)); ) {
    let a = l.lastChild;
    if (!a || !a.type.isError || a.from < a.to)
      break;
    s = n = l, o = a.from;
  }
  return n.name == "TagName" ? n.parent && /CloseTag$/.test(n.parent.name) ? Nh(t, n, n.from, r) : Ih(t, i, n, n.from, r) : n.name == "StartTag" || n.name == "IncompleteTag" ? Ih(t, i, n, r, r) : n.name == "StartCloseTag" || n.name == "IncompleteCloseTag" ? Nh(t, n, r, r) : n.name == "OpenTag" || n.name == "SelfClosingTag" || n.name == "AttributeName" ? K1(t, i, n, n.name == "AttributeName" ? n.from : r, r) : n.name == "Is" || n.name == "AttributeValue" || n.name == "UnquotedAttributeValue" ? J1(t, i, n, n.name == "Is" ? r : n.from, r) : e.explicit && (s.name == "Element" || s.name == "Text" || s.name == "Document") ? H1(t, i, n, r) : null;
}
function tS(i) {
  let { extraTags: e, extraGlobalAttributes: t } = i, r = t || e ? new Tn(e, t) : Tn.default;
  return (n) => eS(r, n);
}
const iS = /* @__PURE__ */ ct.parser.configure({ top: "SingleExpression" }), zO = [
  {
    tag: "script",
    attrs: (i) => i.type == "text/typescript" || i.lang == "ts",
    parser: kO.parser
  },
  {
    tag: "script",
    attrs: (i) => i.type == "text/babel" || i.type == "text/jsx",
    parser: PO.parser
  },
  {
    tag: "script",
    attrs: (i) => i.type == "text/typescript-jsx",
    parser: TO.parser
  },
  {
    tag: "script",
    attrs(i) {
      return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(i.type);
    },
    parser: iS
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
    parser: ri.parser
  }
], VO = /* @__PURE__ */ [
  {
    name: "style",
    parser: /* @__PURE__ */ ri.parser.configure({ top: "Styles" })
  }
].concat(/* @__PURE__ */ XO.map((i) => ({ name: i, parser: ct.parser }))), _O = /* @__PURE__ */ $i.define({
  name: "html",
  parser: /* @__PURE__ */ TQ.configure({
    props: [
      /* @__PURE__ */ Ln.add({
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
          for (let r = i.node; ; ) {
            let n = r.lastChild;
            if (!n || n.name != "Element" || n.to != r.to)
              break;
            e = r = n;
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
      /* @__PURE__ */ ff.add({
        "OpenTag CloseTag": (i) => i.getChild("TagName")
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "<!--", close: "-->" } },
    indentOnInput: /^\s*<\/\w+\W$/,
    wordChars: "-_"
  }
}), pi = /* @__PURE__ */ _O.configure({
  wrap: /* @__PURE__ */ dO(zO, VO)
});
function zo(i = {}) {
  let e = "", t;
  i.matchClosingTags === !1 && (e = "noMatch"), i.selfClosingTags === !0 && (e = (e ? e + " " : "") + "selfClosing"), (i.nestedLanguages && i.nestedLanguages.length || i.nestedAttributes && i.nestedAttributes.length) && (t = dO((i.nestedLanguages || []).concat(zO), (i.nestedAttributes || []).concat(VO)));
  let r = t ? _O.configure({ wrap: t, dialect: e }) : e ? pi.configure({ dialect: e }) : pi;
  return new ul(r, [
    pi.data.of({ autocomplete: tS(i) }),
    i.autoCloseTags !== !1 ? rS : [],
    I1().support,
    Xo().support
  ]);
}
const Gh = /* @__PURE__ */ new Set(/* @__PURE__ */ "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")), rS = /* @__PURE__ */ T.inputHandler.of((i, e, t, r, n) => {
  if (i.composing || i.state.readOnly || e != t || r != ">" && r != "/" || !pi.isActiveAt(i.state, e, -1))
    return !1;
  let s = n(), { state: o } = s, l = o.changeByRange((a) => {
    var h, c, u;
    let f = o.doc.sliceString(a.from - 1, a.to) == r, { head: O } = a, d = K(o).resolveInner(O, -1), p;
    if (f && r == ">" && d.name == "EndTag") {
      let g = d.parent;
      if (((c = (h = g.parent) === null || h === void 0 ? void 0 : h.lastChild) === null || c === void 0 ? void 0 : c.name) != "CloseTag" && (p = Ti(o.doc, g.parent, O)) && !Gh.has(p)) {
        let b = O + (o.doc.sliceString(O, O + 1) === ">" ? 1 : 0), Q = `</${p}>`;
        return { range: a, changes: { from: O, to: b, insert: Q } };
      }
    } else if (f && r == "/" && d.name == "IncompleteCloseTag") {
      let g = d.parent;
      if (d.from == O - 2 && ((u = g.lastChild) === null || u === void 0 ? void 0 : u.name) != "CloseTag" && (p = Ti(o.doc, g, O)) && !Gh.has(p)) {
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
var nS = Object.defineProperty, sS = Object.defineProperties, oS = Object.getOwnPropertyDescriptors, Uh = Object.getOwnPropertySymbols, lS = Object.prototype.hasOwnProperty, aS = Object.prototype.propertyIsEnumerable, Vo = (i, e, t) => e in i ? nS(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Ie = (i, e) => {
  for (var t in e || (e = {}))
    lS.call(e, t) && Vo(i, t, e[t]);
  if (Uh)
    for (var t of Uh(e))
      aS.call(e, t) && Vo(i, t, e[t]);
  return i;
}, Et = (i, e) => sS(i, oS(e)), _o = (i, e, t) => Vo(i, typeof e != "symbol" ? e + "" : e, t);
function Ge(i) {
  return i > 47 && i < 58;
}
function Un(i, e, t) {
  return e = e || 65, t = t || 90, i &= -33, i >= e && i <= t;
}
function qO(i) {
  return Ge(i) || Fn(i);
}
function Fn(i) {
  return i === 95 || Un(i);
}
function hS(i) {
  return i === 196 || i == 214 || i === 220 || i === 228 || i === 246 || i === 252;
}
function cS(i) {
  return i === 32 || i === 9 || i === 160;
}
function Xl(i) {
  return cS(i) || i === 10 || i === 13;
}
function Rl(i) {
  return i === 39 || i === 34;
}
let YO = class EO {
  constructor(e, t, r) {
    r == null && typeof e == "string" && (r = e.length), this.string = e, this.pos = this.start = t || 0, this.end = r || 0;
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
    return new EO(this.string, e, t);
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
    const t = this.peek(), r = typeof e == "function" ? e(t) : t === e;
    return r && this.next(), r;
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
    return new Ml(`${e} at ${t + 1}`, t, this.string);
  }
}, Ml = class extends Error {
  constructor(e, t, r) {
    super(e), this.pos = t, this.string = r;
  }
};
function uS(i) {
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
function zl(i) {
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
function Vl(i, e, t = Wt(i)) {
  t && t.start != null && (e += ` at ${t.start}`);
  const r = new Error(e);
  return r.pos = t && t.start, r;
}
function fS(i, e = {}) {
  const t = uS(i), r = WO(t, e);
  if (Qt(t))
    throw Vl(t, "Unexpected character");
  return r;
}
function WO(i, e) {
  const t = {
    type: "TokenGroup",
    elements: []
  };
  let r = t, n;
  const s = [];
  for (; Qt(i) && (n = dS(i, e) || OS(i, e)); )
    if (r.elements.push(n), ce(i, TS))
      s.push(r), r = n;
    else {
      if (ce(i, ZS))
        continue;
      if (ce(i, Jh))
        do
          s.length && (r = s.pop());
        while (ce(i, Jh));
    }
  return t;
}
function OS(i, e) {
  if (ce(i, kS)) {
    const t = WO(i, e), r = zl(i);
    return Ee(r, "group", !1) && (t.repeat = gS(i)), t;
  }
}
function dS(i, e) {
  let t;
  const r = {
    type: "TokenElement",
    name: void 0,
    attributes: void 0,
    value: void 0,
    repeat: void 0,
    selfClose: !1,
    elements: []
  };
  for (bS(i, e) && (r.name = mi(i)); Qt(i); )
    if (i.start = i.pos, !r.repeat && !Vs(r) && ce(i, Cn))
      r.repeat = i.tokens[i.pos - 1];
    else if (!r.value && DO(i))
      r.value = BO(i);
    else if (t = Fh(i, "id", e) || Fh(i, "class", e) || pS(i))
      r.attributes ? r.attributes = r.attributes.concat(t) : r.attributes = Array.isArray(t) ? t.slice() : [t];
    else {
      !Vs(r) && ce(i, CS) && (r.selfClose = !0, !r.repeat && ce(i, Cn) && (r.repeat = i.tokens[i.pos - 1]));
      break;
    }
  return Vs(r) ? void 0 : r;
}
function pS(i) {
  if (ce(i, wS)) {
    const e = [];
    let t;
    for (; Qt(i); )
      if (t = mS(i))
        e.push(t);
      else {
        if (ce(i, $S))
          break;
        if (!ce(i, LO))
          throw Vl(i, `Unexpected "${Wt(i).type}" token`);
      }
    return e;
  }
}
function Fh(i, e, t) {
  if (St(Wt(i), e)) {
    i.pos++;
    let r = 1;
    for (; St(Wt(i), e); )
      i.pos++, r++;
    const n = {
      name: [PS(e)]
    };
    return r > 1 && (n.multiple = !0), t.jsx && DO(i) ? (n.value = BO(i), n.expression = !0) : n.value = qo(i) ? mi(i) : void 0, n;
  }
}
function mS(i) {
  if (Hh(i))
    return {
      value: mi(i)
    };
  if (qo(i, !0)) {
    const e = mi(i);
    let t;
    return ce(i, yS) && (Hh(i) || qo(i, !0)) && (t = mi(i)), { name: e, value: t };
  }
}
function gS(i) {
  return Cn(Wt(i)) ? i.tokens[i.pos++] : void 0;
}
function Hh(i) {
  const e = i.pos, t = Wt(i);
  if (Zn(t)) {
    for (i.pos++; Qt(i); )
      if (Zn(zl(i), t.single))
        return i.start = e, !0;
    throw Vl(i, "Unclosed quote", t);
  }
  return !1;
}
function qo(i, e) {
  const t = i.pos, r = {
    attribute: 0,
    expression: 0,
    group: 0
  };
  for (; Qt(i); ) {
    const n = Wt(i);
    if (r.expression)
      Ee(n, "expression") && (r[n.context] += n.open ? 1 : -1);
    else {
      if (Zn(n) || St(n) || LO(n) || Cn(n))
        break;
      if (Ee(n)) {
        if (!e)
          break;
        if (n.open)
          r[n.context]++;
        else if (r[n.context])
          r[n.context]--;
        else
          break;
      }
    }
    i.pos++;
  }
  return t !== i.pos ? (i.start = t, !0) : !1;
}
function bS(i, e) {
  const t = i.pos;
  if (e.jsx && ce(i, Kh))
    for (; Qt(i); ) {
      const { pos: r } = i;
      if (!ce(i, xS) || !ce(i, Kh)) {
        i.pos = r;
        break;
      }
    }
  for (; Qt(i) && ce(i, SS); )
    ;
  return i.pos !== t ? (i.start = t, !0) : !1;
}
function DO(i) {
  const e = i.pos;
  if (ce(i, vS)) {
    let t = 0;
    for (; Qt(i); ) {
      const r = zl(i);
      if (Ee(r, "expression"))
        if (r.open)
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
function BO(i) {
  let e = i.start, t = i.pos;
  return Ee(i.tokens[e], "expression", !0) && e++, Ee(i.tokens[t - 1], "expression", !1) && t--, mi(i, e, t);
}
function Ee(i, e, t) {
  return !!(i && i.type === "Bracket" && (!e || i.context === e) && (t == null || i.open === t));
}
function St(i, e) {
  return !!(i && i.type === "Operator" && (!e || i.operator === e));
}
function Zn(i, e) {
  return !!(i && i.type === "Quote" && (e == null || i.single === e));
}
function LO(i) {
  return !!(i && i.type === "WhiteSpace");
}
function yS(i) {
  return St(i, "equal");
}
function Cn(i) {
  return !!(i && i.type === "Repeater");
}
function QS(i) {
  return i.type === "Literal";
}
function Kh(i) {
  if (QS(i)) {
    const e = i.value.charCodeAt(0);
    return e >= 65 && e <= 90;
  }
  return !1;
}
function SS(i) {
  return i.type === "Literal" || i.type === "RepeaterNumber" || i.type === "RepeaterPlaceholder";
}
function xS(i) {
  return St(i, "class");
}
function wS(i) {
  return Ee(i, "attribute", !0);
}
function $S(i) {
  return Ee(i, "attribute", !1);
}
function vS(i) {
  return Ee(i, "expression", !0);
}
function kS(i) {
  return Ee(i, "group", !0);
}
function PS(i) {
  return { type: "Literal", value: i };
}
function Vs(i) {
  return !i.name && !i.value && !i.attributes;
}
function TS(i) {
  return St(i, "child");
}
function ZS(i) {
  return St(i, "sibling");
}
function Jh(i) {
  return St(i, "climb");
}
function CS(i) {
  return St(i, "close");
}
var X;
(function(i) {
  i[i.CurlyBracketOpen = 123] = "CurlyBracketOpen", i[i.CurlyBracketClose = 125] = "CurlyBracketClose", i[i.Escape = 92] = "Escape", i[i.Equals = 61] = "Equals", i[i.SquareBracketOpen = 91] = "SquareBracketOpen", i[i.SquareBracketClose = 93] = "SquareBracketClose", i[i.Asterisk = 42] = "Asterisk", i[i.Hash = 35] = "Hash", i[i.Dollar = 36] = "Dollar", i[i.Dash = 45] = "Dash", i[i.Dot = 46] = "Dot", i[i.Slash = 47] = "Slash", i[i.Colon = 58] = "Colon", i[i.Excl = 33] = "Excl", i[i.At = 64] = "At", i[i.Underscore = 95] = "Underscore", i[i.RoundBracketOpen = 40] = "RoundBracketOpen", i[i.RoundBracketClose = 41] = "RoundBracketClose", i[i.Sibling = 43] = "Sibling", i[i.Child = 62] = "Child", i[i.Climb = 94] = "Climb", i[i.SingleQuote = 39] = "SingleQuote", i[i.DoubleQuote = 34] = "DoubleQuote";
})(X || (X = {}));
function AS(i) {
  return i.eat(X.Escape) ? (i.start = i.pos, i.eof() || i.pos++, !0) : !1;
}
function XS(i) {
  const e = new YO(i), t = [], r = {
    group: 0,
    attribute: 0,
    expression: 0,
    quote: 0
  };
  let n = 0, s;
  for (; !e.eof(); )
    if (n = e.peek(), s = RS(e, r), s)
      t.push(s), s.type === "Quote" ? r.quote = n === r.quote ? 0 : n : s.type === "Bracket" && (r[s.context] += s.open ? 1 : -1);
    else
      throw e.error("Unexpected character");
  return t;
}
function RS(i, e) {
  return DS(i, e) || ES(i) || WS(i) || YS(i) || zS(i) || MS(i, e) || qS(i) || VS(i) || _S(i);
}
function MS(i, e) {
  const t = i.pos, r = e.expression;
  let n = "";
  for (; !i.eof(); ) {
    if (AS(i)) {
      n += i.current();
      continue;
    }
    const s = i.peek();
    if (s === X.Slash && !e.quote && !e.expression && !e.attribute) {
      const o = i.string.charCodeAt(i.pos - 1), l = i.string.charCodeAt(i.pos + 1);
      if (Ge(o) && Ge(l)) {
        n += i.string[i.pos++];
        continue;
      }
    }
    if (s === e.quote || s === X.Dollar || BS(s, e))
      break;
    if (r) {
      if (s === X.CurlyBracketOpen)
        e.expression++;
      else if (s === X.CurlyBracketClose)
        if (e.expression > r)
          e.expression--;
        else
          break;
    } else if (!e.quote && (!e.attribute && !NS(s) || LS(s, e) || jS(s, e) || Rl(s) || jO(s)))
      break;
    n += i.string[i.pos++];
  }
  if (t !== i.pos)
    return i.start = t, {
      type: "Literal",
      value: n,
      start: t,
      end: i.pos
    };
}
function zS(i) {
  const e = i.pos;
  if (i.eatWhile(Xl))
    return {
      type: "WhiteSpace",
      start: e,
      end: i.pos,
      value: i.substring(e, i.pos)
    };
}
function VS(i) {
  const e = i.peek();
  if (Rl(e))
    return {
      type: "Quote",
      single: e === X.SingleQuote,
      start: i.pos++,
      end: i.pos
    };
}
function _S(i) {
  const e = i.peek(), t = jO(e);
  if (t)
    return {
      type: "Bracket",
      open: IS(e),
      context: t,
      start: i.pos++,
      end: i.pos
    };
}
function qS(i) {
  const e = IO(i.peek());
  if (e)
    return {
      type: "Operator",
      operator: e,
      start: i.pos++,
      end: i.pos
    };
}
function YS(i) {
  const e = i.pos;
  if (i.eat(X.Asterisk)) {
    i.start = i.pos;
    let t = 1, r = !1;
    return i.eatWhile(Ge) ? t = Number(i.current()) : r = !0, {
      type: "Repeater",
      count: t,
      value: 0,
      implicit: r,
      start: e,
      end: i.pos
    };
  }
}
function ES(i) {
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
function WS(i) {
  const e = i.pos;
  if (i.eatWhile(X.Dollar)) {
    const t = i.pos - e;
    let r = !1, n = 1, s = 0;
    if (i.eat(X.At)) {
      for (; i.eat(X.Climb); )
        s++;
      r = i.eat(X.Dash), i.start = i.pos, i.eatWhile(Ge) && (n = Number(i.current()));
    }
    return i.start = e, {
      type: "RepeaterNumber",
      size: t,
      reverse: r,
      base: n,
      parent: s,
      start: e,
      end: i.pos
    };
  }
}
function DS(i, e) {
  const t = i.pos;
  if ((e.expression || e.attribute) && i.eat(X.Dollar) && i.eat(X.CurlyBracketOpen)) {
    i.start = i.pos;
    let r, n = "";
    if (i.eatWhile(Ge) ? (r = Number(i.current()), n = i.eat(X.Colon) ? ec(i) : "") : Un(i.peek()) && (n = ec(i)), i.eat(X.CurlyBracketClose))
      return {
        type: "Field",
        index: r,
        name: n,
        start: t,
        end: i.pos
      };
    throw i.error("Expecting }");
  }
  i.pos = t;
}
function ec(i) {
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
function BS(i, e) {
  const t = IO(i);
  return !t || e.quote || e.expression ? !1 : !e.attribute || t === "equal";
}
function LS(i, e) {
  return Xl(i) && !e.expression;
}
function jS(i, e) {
  return i === X.Asterisk && !e.attribute && !e.expression;
}
function jO(i) {
  if (i === X.RoundBracketOpen || i === X.RoundBracketClose)
    return "group";
  if (i === X.SquareBracketOpen || i === X.SquareBracketClose)
    return "attribute";
  if (i === X.CurlyBracketOpen || i === X.CurlyBracketClose)
    return "expression";
}
function IO(i) {
  return i === X.Child && "child" || i === X.Sibling && "sibling" || i === X.Climb && "climb" || i === X.Dot && "class" || i === X.Hash && "id" || i === X.Slash && "close" || i === X.Equals && "equal" || void 0;
}
function IS(i) {
  return i === X.CurlyBracketOpen || i === X.SquareBracketOpen || i === X.RoundBracketOpen;
}
function NS(i) {
  return qO(i) || hS(i) || i === X.Dash || i === X.Colon || i === X.Excl;
}
const GS = {
  child: ">",
  class: ".",
  climb: "^",
  id: "#",
  equal: "=",
  close: "/",
  sibling: "+"
}, tc = {
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
    return GS[i.operator];
  },
  Field(i, e) {
    return i.index != null ? i.name ? `\${${i.index}:${i.name}}` : `\${${i.index}` : i.name ? e.getVariable(i.name) : "";
  },
  RepeaterPlaceholder(i, e) {
    let t;
    for (let r = e.repeaters.length - 1; r >= 0; r--)
      if (e.repeaters[r].implicit) {
        t = e.repeaters[r];
        break;
      }
    return e.inserted = !0, e.getText(t && t.value);
  },
  RepeaterNumber(i, e) {
    let t = 1;
    const r = e.repeaters.length - 1, n = e.repeaters[r];
    if (n && (t = i.reverse ? i.base + n.count - n.value - 1 : i.base + n.value, i.parent)) {
      const o = Math.max(0, r - i.parent);
      if (o !== r) {
        const l = e.repeaters[o];
        t += n.count * l.value;
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
function NO(i, e) {
  if (!tc[i.type])
    throw new Error(`Unknown token ${i.type}`);
  return tc[i.type](i, e);
}
const US = /^((https?:|ftp:|file:)?\/\/|(www|ftp)\.)[^ ]*$/, FS = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
function HS(i, e = {}) {
  let t = !1, r;
  e.text && (Array.isArray(e.text) ? r = e.text.filter((s) => s.trim()) : r = e.text);
  const n = {
    type: "Abbreviation",
    children: Yo(i, {
      inserted: !1,
      repeaters: [],
      text: e.text,
      cleanText: r,
      repeatGuard: e.maxRepeat || Number.POSITIVE_INFINITY,
      getText(s) {
        var o;
        t = !0;
        let l;
        if (Array.isArray(e.text)) {
          if (s !== void 0 && s >= 0 && s < r.length)
            return r[s];
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
    const s = _l(Ci(n.children));
    if (s) {
      const o = Array.isArray(e.text) ? e.text.join(`
`) : e.text;
      KO(s, o), s.name === "a" && e.href && JS(s, o);
    }
  }
  return n;
}
function GO(i, e) {
  let t = [];
  if (i.repeat) {
    const r = i.repeat, n = Object.assign({}, r);
    n.count = n.implicit && Array.isArray(e.text) ? e.cleanText.length : n.count || 1;
    let s;
    e.repeaters.push(n);
    for (let o = 0; o < n.count; o++) {
      if (n.value = o, i.repeat = n, s = rc(i) ? Yo(i, e) : ic(i, e), n.implicit && !e.inserted) {
        const l = Ci(s), a = l && _l(l);
        a && KO(a, e.getText(n.value));
      }
      if (t = t.concat(s), --e.repeatGuard <= 0)
        break;
    }
    e.repeaters.pop(), i.repeat = r, n.implicit && (e.inserted = !0);
  } else
    t = t.concat(rc(i) ? Yo(i, e) : ic(i, e));
  return t;
}
function ic(i, e) {
  let t = [];
  const r = {
    type: "AbbreviationNode",
    name: i.name && UO(i.name, e),
    value: i.value && FO(i.value, e),
    attributes: void 0,
    children: t,
    repeat: i.repeat && Object.assign({}, i.repeat),
    selfClosing: i.selfClose
  };
  let n = [r];
  for (const s of i.elements)
    t = t.concat(GO(s, e));
  if (i.attributes) {
    r.attributes = [];
    for (const s of i.attributes)
      r.attributes.push(KS(s, e));
  }
  return !r.name && !r.attributes && r.value && !r.value.some(HO) ? n = n.concat(t) : r.children = t, n;
}
function Yo(i, e) {
  let t = [];
  for (const r of i.elements)
    t = t.concat(GO(r, e));
  return i.repeat && (t = ex(t, i.repeat)), t;
}
function KS(i, e) {
  let t = !1, r = !1, n = i.expression ? "expression" : "raw", s;
  const o = i.name && UO(i.name, e);
  if (o && o[0] === "!" && (t = !0), o && o[o.length - 1] === "." && (r = !0), i.value) {
    const l = i.value.slice();
    if (Zn(l[0])) {
      const a = l.shift();
      l.length && Ci(l).type === a.type && l.pop(), n = a.single ? "singleQuote" : "doubleQuote";
    } else Ee(l[0], "expression", !0) && (n = "expression", l.shift(), Ee(Ci(l), "expression", !1) && l.pop());
    s = FO(l, e);
  }
  return {
    name: r || t ? o.slice(t ? 1 : 0, r ? -1 : void 0) : o,
    value: s,
    boolean: r,
    implied: t,
    valueType: n,
    multiple: i.multiple
  };
}
function UO(i, e) {
  let t = "";
  for (let r = 0; r < i.length; r++)
    t += NO(i[r], e);
  return t;
}
function FO(i, e) {
  const t = [];
  let r = "";
  for (let n = 0, s; n < i.length; n++)
    s = i[n], HO(s) ? (r && (t.push(r), r = ""), t.push(s)) : r += NO(s, e);
  return r && t.push(r), t;
}
function rc(i) {
  return i.type === "TokenGroup";
}
function HO(i) {
  return typeof i == "object" && i.type === "Field" && i.index != null;
}
function Ci(i) {
  return i[i.length - 1];
}
function _l(i) {
  return i.children.length ? _l(Ci(i.children)) : i;
}
function KO(i, e) {
  i.value ? typeof Ci(i.value) == "string" ? i.value[i.value.length - 1] += e : i.value.push(e) : i.value = [e];
}
function JS(i, e) {
  var t;
  let r = "";
  US.test(e) ? (r = e, !/\w+:/.test(r) && !r.startsWith("//") && (r = `http://${r}`)) : FS.test(e) && (r = `mailto:${e}`);
  const n = (t = i.attributes) === null || t === void 0 ? void 0 : t.find((s) => s.name === "href");
  n ? n.value || (n.value = [r]) : (i.attributes || (i.attributes = []), i.attributes.push({ name: "href", value: [r], valueType: "doubleQuote" }));
}
function ex(i, e) {
  for (const t of i)
    t.repeat || (t.repeat = Object.assign({}, e));
  return i;
}
function ql(i, e) {
  try {
    const t = typeof i == "string" ? XS(i) : i;
    return HS(fS(t, e), e);
  } catch (t) {
    throw t instanceof Ml && typeof i == "string" && (t.message += `
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
function tx(i, e) {
  let t = 0, r;
  const n = new YO(i), s = [];
  for (; !n.eof(); ) {
    if (r = ix(n, t === 0 && !e), !r)
      throw n.error("Unexpected character");
    if (r.type === "Bracket" && (!t && r.open && bx(n, s), t += r.open ? 1 : -1, t < 0))
      throw n.error("Unexpected bracket", r.start);
    s.push(r), gx(r) && (r = JO(n)) && s.push(r);
  }
  return s;
}
function ix(i, e) {
  return rx(i) || hx(i) || sx(i) || lx(i) || ox(i) || cx(i) || JO(i) || ax(i) || nx(i, e);
}
function rx(i) {
  const e = i.pos;
  if (i.eat(W.Dollar) && i.eat(W.CurlyBracketOpen)) {
    i.start = i.pos;
    let t, r = "";
    if (i.eatWhile(Ge) ? (t = Number(i.current()), r = i.eat(W.Colon) ? nc(i) : "") : Un(i.peek()) && (r = nc(i)), i.eat(W.CurlyBracketClose))
      return {
        type: "Field",
        index: t,
        name: r,
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
function nx(i, e) {
  const t = i.pos;
  if (i.eat(fx) ? i.eatWhile(t ? Eo : qs) : i.eat(Fn) ? i.eatWhile(e ? qs : Eo) : (i.eat(W.Dot), i.eatWhile(qs)), t !== i.pos)
    return i.start = t, Yl(i, i.start = t);
}
function Yl(i, e = i.start, t = i.pos) {
  return {
    type: "Literal",
    value: i.substring(e, t),
    start: e,
    end: t
  };
}
function sx(i) {
  const e = i.pos;
  if (ux(i)) {
    i.start = e;
    const t = i.current();
    return i.start = i.pos, i.eat(W.Percent) || i.eatWhile(Fn), {
      type: "NumberValue",
      value: Number(t),
      rawValue: t,
      unit: i.current(),
      start: e,
      end: i.pos
    };
  }
}
function ox(i) {
  const e = i.peek(), t = i.pos;
  let r = !1;
  if (Rl(e)) {
    for (i.pos++; !i.eof(); )
      if (i.eat(e)) {
        r = !0;
        break;
      } else
        i.pos++;
    return i.start = t, {
      type: "StringValue",
      value: i.substring(t + 1, i.pos - (r ? 1 : 0)),
      quote: e === W.SingleQuote ? "single" : "double",
      start: t,
      end: i.pos
    };
  }
}
function lx(i) {
  const e = i.pos;
  if (i.eat(W.Hash)) {
    const t = i.pos;
    let r = "", n = "";
    if (i.eatWhile(dx) ? (r = i.substring(t, i.pos), n = _s(i)) : i.eat(W.Transparent) ? (r = "0", n = _s(i) || "0") : n = _s(i), r || n || i.eof()) {
      const { r: s, g: o, b: l, a } = mx(r, n);
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
      return Yl(i, e);
  }
  i.pos = e;
}
function _s(i) {
  const e = i.pos;
  return i.eat(W.Dot) ? (i.start = e, i.eatWhile(Ge) ? i.current() : "1") : "";
}
function ax(i) {
  const e = i.pos;
  if (i.eatWhile(Xl))
    return {
      type: "WhiteSpace",
      start: e,
      end: i.pos
    };
}
function hx(i) {
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
function cx(i) {
  const e = i.peek();
  if (px(e))
    return {
      type: "Bracket",
      open: e === W.RoundBracketOpen,
      start: i.pos++,
      end: i.pos
    };
}
function JO(i) {
  const e = Ox(i.peek());
  if (e)
    return {
      type: "Operator",
      operator: e,
      start: i.pos++,
      end: i.pos
    };
}
function ux(i) {
  const e = i.pos;
  i.eat(W.Dash);
  const t = i.pos, r = i.eatWhile(Ge), n = i.pos;
  if (i.eat(W.Dot)) {
    const s = i.eatWhile(Ge);
    !r && !s && (i.pos = n);
  }
  return i.pos === t && (i.pos = e), i.pos !== e;
}
function fx(i) {
  return i === W.At || i === W.Dollar;
}
function Ox(i) {
  return i === W.Sibling && Xe.Sibling || i === W.Excl && Xe.Important || i === W.Comma && Xe.ArgumentDelimiter || i === W.Colon && Xe.PropertyDelimiter || i === W.Dash && Xe.ValueDelimiter || void 0;
}
function dx(i) {
  return Ge(i) || Un(i, 65, 70);
}
function Eo(i) {
  return qO(i) || i === W.Dash;
}
function px(i) {
  return i === W.RoundBracketOpen || i === W.RoundBracketClose;
}
function qs(i) {
  return Fn(i) || i === W.Percent || i === W.Slash;
}
function mx(i, e) {
  let t = "0", r = "0", n = "0", s = Number(e != null && e !== "" ? e : 1);
  if (i === "t")
    s = 0;
  else
    switch (i.length) {
      case 0:
        break;
      case 1:
        t = r = n = i + i;
        break;
      case 2:
        t = r = n = i;
        break;
      case 3:
        t = i[0] + i[0], r = i[1] + i[1], n = i[2] + i[2];
        break;
      default:
        i += i, t = i.slice(0, 2), r = i.slice(2, 4), n = i.slice(4, 6);
    }
  return {
    r: parseInt(t, 16),
    g: parseInt(r, 16),
    b: parseInt(n, 16),
    a: s
  };
}
function gx(i) {
  return i.type === "ColorValue" || i.type === "NumberValue" && !i.unit;
}
function bx(i, e) {
  let t = 0, r = 0;
  for (; e.length; ) {
    const n = yx(e);
    if (n.type === "Literal" || n.type === "NumberValue")
      t = n.start, r || (r = n.end), e.pop();
    else
      break;
  }
  t !== r && e.push(Yl(i, t, r));
}
function yx(i) {
  return i[i.length - 1];
}
function Qx(i) {
  return {
    tokens: i,
    start: 0,
    pos: 0,
    size: i.length
  };
}
function Hn(i) {
  return i.tokens[i.pos];
}
function Kn(i) {
  return i.pos < i.size;
}
function gt(i, e) {
  return e(Hn(i)) ? (i.pos++, !0) : !1;
}
function ed(i, e, t = Hn(i)) {
  t && t.start != null && (e += ` at ${t.start}`);
  const r = new Error(e);
  return r.pos = t && t.start, r;
}
function Sx(i, e = {}) {
  const t = Qx(i), r = [];
  let n;
  for (; Kn(t); )
    if (n = xx(t, e))
      r.push(n);
    else if (!gt(t, kx))
      throw ed(t, "Unexpected token");
  return r;
}
function xx(i, e) {
  let t, r = !1, n;
  const s = [], o = Hn(i), l = !!e.value;
  for (!l && El(o) && !Cx(i) && (i.pos++, t = o.value, gt(i, nd)), l && gt(i, Wl); Kn(i); )
    if (gt(i, Tx))
      r = !0;
    else if (n = td(i, l))
      s.push(n);
    else if (!gt(i, Px))
      break;
  if (t || s.length || r)
    return { name: t, value: s, important: r };
}
function td(i, e) {
  const t = [];
  let r, n;
  for (; Kn(i); )
    if (r = Hn(i), Zx(r))
      i.pos++, El(r) && (n = wx(i)) ? t.push({
        type: "FunctionCall",
        name: r.value,
        arguments: n
      }) : t.push(r);
    else if (nd(r) || e && Wl(r))
      i.pos++;
    else
      break;
  return t.length ? { type: "CSSValue", value: t } : void 0;
}
function wx(i) {
  const e = i.pos;
  if (gt(i, $x)) {
    const t = [];
    let r;
    for (; Kn(i) && !gt(i, vx); )
      if (r = td(i, !0))
        t.push(r);
      else if (!gt(i, Wl) && !gt(i, rd))
        throw ed(i, "Unexpected token");
    return i.start = e, t;
  }
}
function El(i) {
  return i && i.type === "Literal";
}
function id(i, e) {
  return i && i.type === "Bracket" && (e == null || i.open === e);
}
function $x(i) {
  return id(i, !0);
}
function vx(i) {
  return id(i, !1);
}
function Wl(i) {
  return i && i.type === "WhiteSpace";
}
function cr(i, e) {
  return i && i.type === "Operator" && (!e || i.operator === e);
}
function kx(i) {
  return cr(i, Xe.Sibling);
}
function rd(i) {
  return cr(i, Xe.ArgumentDelimiter);
}
function Px(i) {
  return rd(i);
}
function Tx(i) {
  return cr(i, Xe.Important);
}
function Zx(i) {
  return i.type === "StringValue" || i.type === "ColorValue" || i.type === "NumberValue" || i.type === "Literal" || i.type === "Field" || i.type === "CustomProperty";
}
function nd(i) {
  return cr(i, Xe.PropertyDelimiter) || cr(i, Xe.ValueDelimiter);
}
function Cx(i) {
  const e = i.tokens[i.pos], t = i.tokens[i.pos + 1];
  return e && t && El(e) && t.type === "Bracket";
}
function sd(i, e) {
  try {
    const t = typeof i == "string" ? tx(i, e && e.value) : i;
    return Sx(t, e);
  } catch (t) {
    throw t instanceof Ml && typeof i == "string" && (t.message += `
${i}
${"-".repeat(t.pos)}^`), t;
  }
}
function Ax(i, e) {
  if (!i.attributes)
    return;
  const t = [], r = {};
  for (const n of i.attributes)
    if (n.name) {
      const s = n.name;
      if (s in r) {
        const o = r[s];
        s === "class" ? o.value = Xx(o.value, n.value, " ") : Rx(o, n, e);
      } else
        t.push(r[s] = Object.assign({}, n));
    } else
      t.push(n);
  i.attributes = t;
}
function Xx(i, e, t) {
  if (i && e) {
    i.length && t && sc(i, t);
    for (const n of e)
      sc(i, n);
    return i;
  }
  const r = i || e;
  return r && r.slice();
}
function Rx(i, e, t) {
  return i.name = e.name, t.options["output.reverseAttributes"] || (i.value = e.value), i.implied || (i.implied = e.implied), i.boolean || (i.boolean = e.boolean), i.valueType !== "expression" && (i.valueType = e.valueType), i;
}
function sc(i, e) {
  const t = i.length - 1;
  typeof i[t] == "string" && typeof e == "string" ? i[t] += e : i.push(e);
}
function Mx(i, e, t) {
  const r = [i], n = (s) => {
    e(s, r, t), r.push(s), s.children.forEach(n), r.pop();
  };
  i.children.forEach(n);
}
function od(i, e) {
  for (let t = 0; t < i.children.length; t++) {
    const r = i.children[t];
    if (e(r))
      return r;
    const n = od(r, e);
    if (n)
      return n;
  }
}
function zx(i) {
  let e;
  for (; i.children.length; )
    e = i, i = i.children[i.children.length - 1];
  return { parent: e, node: i };
}
function ld(i) {
  return i.type === "AbbreviationNode";
}
function Vx(i, e) {
  const t = [], r = e.options["output.reverseAttributes"], { warn: n } = e, s = (o) => {
    const l = o.name && e.snippets[o.name];
    if (!l || t.includes(l))
      return null;
    let a;
    try {
      a = ql(l, e);
    } catch (h) {
      return n == null || n(`Unable to parse "${l}" snippet`, h), null;
    }
    t.push(l), An(a, s), t.pop();
    for (const h of a.children) {
      if (o.attributes) {
        const c = h.attributes || [], u = o.attributes || [];
        h.attributes = r ? u.concat(c) : c.concat(u);
      }
      _x(o, h);
    }
    return a;
  };
  return An(i, s), i;
}
function An(i, e, t) {
  let r = [];
  for (const n of i.children) {
    const s = e(n);
    if (s) {
      r = r.concat(s.children);
      const o = zx(s);
      ld(o.node) && (o.node.children = o.node.children.concat(An(n, e)));
    } else
      r.push(n), n.children = An(n, e);
  }
  return i.children = r;
}
function _x(i, e) {
  i.selfClosing && (e.selfClosing = !0), i.value != null && (e.value = i.value), i.repeat && (e.repeat = i.repeat);
}
const Wo = "{", Do = "}";
function ad(i, e = 0) {
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
  ud(i, t(e, i.offset, i.line, i.column));
}
function B(i, e) {
  const t = Wx(e);
  for (let r = 0, n = t.length - 1; r <= n; r++)
    ie(i, t[r]), r !== n && rt(i, !0);
}
function rt(i, e) {
  const t = i.options["output.baseIndent"], r = i.options["output.newline"];
  ie(i, r + t), i.line++, i.column = t.length, e && qx(i, e === !0 ? i.level : e);
}
function qx(i, e = i.level) {
  const t = i.options["output.indent"];
  ie(i, t.repeat(Math.max(e, 0)));
}
function Dl(i, e, t) {
  const r = i.options["output.field"];
  ud(i, r(e, t, i.offset, i.line, i.column));
}
function Yx(i, e) {
  return fd(i, e.options["output.tagCase"]);
}
function hd(i, e) {
  return fd(i, e.options["output.attributeCase"]);
}
function Xn(i, e, t) {
  return i.valueType === "expression" ? t ? Wo : Do : e.options["output.attributeQuotes"] === "single" ? "'" : '"';
}
function cd(i, e) {
  return i.boolean || e.options["output.booleanAttributes"].includes((i.name || "").toLowerCase());
}
function Ex(i) {
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
function Wx(i) {
  return i.split(/\r\n|\r|\n/g);
}
function ud(i, e) {
  i.value += e, i.offset += e.length, i.column += e.length;
}
function fd(i, e) {
  return e ? e === "upper" ? i.toUpperCase() : i.toLowerCase() : i;
}
const Dx = {
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
function Bx(i, e, t) {
  !i.name && i.attributes && Od(i, e, t);
}
function Od(i, e, t) {
  const r = jx(e), n = t.context ? t.context.name : "", s = Lx(r ? r.name : n);
  i.name = Dx[s] || (gi(s, t) ? "span" : "div");
}
function Lx(i) {
  return (i || "").toLowerCase();
}
function jx(i) {
  for (let e = i.length - 1; e >= 0; e--) {
    const t = i[e];
    if (ld(t))
      return t;
  }
}
var Ix = {
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
}, Nx = {
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
}, Gx = {
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
const oc = { ru: Nx, sp: Gx, latin: Ix }, Ux = /^lorem([a-z]*)(\d*)(-\d*)?$/i;
function Fx(i, e, t) {
  let r;
  if (i.name && (r = i.name.match(Ux))) {
    const n = oc[r[1]] || oc.latin, s = r[2] ? Math.max(1, Number(r[2])) : 30, o = r[3] ? Math.max(s, Number(r[3].slice(1))) : s, l = Xt(s, o), a = i.repeat || tw(e);
    i.name = i.attributes = void 0, i.value = [ew(n, l, !a || a.value === 0)], i.repeat && e.length > 1 && Od(i, e, t);
  }
}
function Xt(i, e) {
  return Math.floor(Math.random() * (e - i) + i);
}
function Hx(i, e) {
  const t = i.length, r = Math.min(t, e), n = [];
  for (; n.length < r; ) {
    const s = i[Xt(0, t)];
    n.includes(s) || n.push(s);
  }
  return n;
}
function Kx(i) {
  return i[Xt(0, i.length - 1)];
}
function lc(i, e) {
  return i.length && (i = [Jx(i[0])].concat(i.slice(1))), i.join(" ") + (e || Kx("?!..."));
}
function Jx(i) {
  return i[0].toUpperCase() + i.slice(1);
}
function ac(i) {
  if (i.length < 2)
    return i;
  i = i.slice();
  const e = i.length, t = /,$/;
  let r = 0;
  e > 3 && e <= 6 ? r = Xt(0, 1) : e > 6 && e <= 12 ? r = Xt(0, 2) : r = Xt(1, 4);
  for (let n = 0, s; n < r; n++)
    s = Xt(0, e - 2), t.test(i[s]) || (i[s] += ",");
  return i;
}
function ew(i, e, t) {
  const r = [];
  let n = 0, s;
  for (t && i.common && (s = i.common.slice(0, e), n += s.length, r.push(lc(ac(s), "."))); n < e; )
    s = Hx(i.words, Math.min(Xt(2, 30), e - n)), n += s.length, r.push(lc(ac(s)));
  return r.join(" ");
}
function tw(i) {
  for (let e = i.length - 1; e >= 0; e--) {
    const t = i[e];
    if (t.type === "AbbreviationNode" && t.repeat)
      return t.repeat;
  }
}
function iw(i) {
  nw(i.name) && i.attributes && (i.children.length || i.value) && (i.attributes = i.attributes.filter(rw));
}
function rw(i) {
  return i.name !== "select";
}
function nw(i) {
  return i === "xsl:variable" || i === "xsl:with-param";
}
const dd = /^(-+)([a-z0-9]+[a-z0-9-]*)/i, pd = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i, sw = (i) => /^[a-z]\-/i.test(i), ow = (i) => /^[a-z]/i.test(i);
function lw(i, e, t) {
  aw(i), hw(i, e, t);
}
function aw(i) {
  const e = Bl(i), t = [];
  for (const r of e.classNames) {
    const n = r.indexOf("_");
    n > 0 && !r.startsWith("-") ? (t.push(r.slice(0, n)), t.push(r.slice(n))) : t.push(r);
  }
  t.length && (e.classNames = t.filter(yd), e.block = gd(e.classNames), bd(i, e.classNames.join(" ")));
}
function hw(i, e, t) {
  const r = Bl(i), n = [], { options: s } = t, o = e.slice(1).concat(i);
  for (let a of r.classNames) {
    let h = "", c;
    const u = a;
    (c = a.match(dd)) && (h = hc(o, c[1].length, t.context) + s["bem.element"] + c[2], n.push(h), a = a.slice(c[0].length)), (c = a.match(pd)) && (h || (h = hc(o, c[1].length), n.push(h)), n.push(`${h}${s["bem.modifier"]}${c[2]}`), a = a.slice(c[0].length)), a === u && n.push(u);
  }
  const l = n.filter(yd);
  l.length && bd(i, l.join(" "));
}
function Bl(i) {
  if (!i._bem) {
    let e = "";
    if (i.attributes) {
      for (const t of i.attributes)
        if (t.name === "class" && t.value) {
          e = uw(t.value);
          break;
        }
    }
    i._bem = md(e);
  }
  return i._bem;
}
function cw(i) {
  return i._bem || (i._bem = md(i.attributes && i.attributes.class || "")), i._bem;
}
function md(i) {
  const e = i ? i.split(/\s+/) : [];
  return {
    classNames: e,
    block: gd(e)
  };
}
function hc(i, e = 0, t) {
  let n = Math.max(i.length - e, 0);
  do {
    const s = i[n];
    if (s) {
      const o = Bl(s);
      if (o.block)
        return o.block;
    }
  } while (0 < n--);
  if (t) {
    const s = cw(t);
    if (s.block)
      return s.block;
  }
  return "";
}
function gd(i) {
  return cc(i, sw) || cc(i, ow) || void 0;
}
function cc(i, e) {
  for (const t of i) {
    if (dd.test(t) || pd.test(t))
      break;
    if (e(t))
      return t;
  }
}
function bd(i, e) {
  for (const t of i.attributes)
    if (t.name === "class") {
      t.value = [e];
      break;
    }
}
function uw(i) {
  let e = "";
  for (const t of i)
    e += typeof t == "string" ? t : t.name;
  return e;
}
function yd(i, e, t) {
  return !!i && t.indexOf(i) === e;
}
function fw(i) {
  if (i.name === "label") {
    const e = od(i, (t) => t.name === "input" || t.name === "textarea");
    e && (i.attributes && (i.attributes = i.attributes.filter((t) => !(t.name === "for" && uc(t)))), e.attributes && (e.attributes = e.attributes.filter((t) => !(t.name === "id" && uc(t)))));
  }
}
function uc(i) {
  if (!i.value)
    return !0;
  if (i.value.length === 1) {
    const e = i.value[0];
    if (e && typeof e != "string" && !e.name)
      return !0;
  }
  return !1;
}
function Qd(i, e, t) {
  const r = (s, o, l) => {
    const { parent: a, current: h } = t;
    t.parent = h, t.current = s, e(s, o, l, t, n), t.current = h, t.parent = a;
  }, n = (s, o, l) => {
    t.ancestors.push(t.current), r(s, o, l), t.ancestors.pop();
  };
  i.children.forEach(r);
}
function Sd(i) {
  return {
    // @ts-ignore: Will set value in iterator
    current: null,
    parent: void 0,
    ancestors: [],
    config: i,
    field: 1,
    out: ad(i.options)
  };
}
const Jn = [{ type: "Field", index: 0, name: "" }];
function Kt(i) {
  return i ? !i.name && !i.attributes : !1;
}
function fc(i, e) {
  return i ? gi(i, e) : !1;
}
function xd(i) {
  return typeof i == "object" && i.type === "Field";
}
function qe(i, e) {
  const { out: t } = e;
  let r = -1;
  for (const n of i)
    typeof n == "string" ? B(t, n) : (Dl(t, e.field + n.index, n.name), n.index > r && (r = n.index));
  r !== -1 && (e.field += r + 1);
}
function Ow(i) {
  const e = [];
  let t = [];
  for (const r of i)
    if (typeof r == "string") {
      const n = r.split(/\r\n?|\n/g);
      for (t.push(n.shift() || ""); n.length; )
        e.push(t), t = [n.shift() || ""];
    } else
      t.push(r);
  return t.length && e.push(t), e;
}
function wd(i) {
  return !i.implied || i.valueType !== "raw" || !!i.value && i.value.length > 0;
}
var ei;
(function(i) {
  i[i.Start = 91] = "Start", i[i.End = 93] = "End", i[i.Underscore = 95] = "Underscore", i[i.Dash = 45] = "Dash";
})(ei || (ei = {}));
function Oc(i) {
  const e = [], t = { pos: 0, text: i };
  let r, n = t.pos, s = t.pos;
  for (; t.pos < t.text.length; )
    s = t.pos, (r = dw(t)) ? (n !== t.pos && e.push(i.slice(n, s)), e.push(r), n = t.pos) : t.pos++;
  return n !== t.pos && e.push(i.slice(n)), e;
}
function dw(i) {
  if (Ys(i) === ei.Start) {
    const e = ++i.pos;
    let t = e, r = e, n = 1;
    for (; i.pos < i.text.length; ) {
      const s = Ys(i);
      if ($d(s)) {
        for (t = i.pos; pw(Ys(i)); )
          i.pos++;
        r = i.pos;
      } else {
        if (s === ei.Start)
          n++;
        else if (s === ei.End && --n === 0)
          return {
            before: i.text.slice(e, t),
            after: i.text.slice(r, i.pos++),
            name: i.text.slice(t, r)
          };
        i.pos++;
      }
    }
  }
}
function Ys(i, e = i.pos) {
  return i.text.charCodeAt(e);
}
function $d(i) {
  return i >= 65 && i <= 90;
}
function pw(i) {
  return $d(i) || i > 47 && i < 58 || i === ei.Underscore || i === ei.Dash;
}
function mw(i) {
  const { options: e } = i;
  return {
    enabled: e["comment.enabled"],
    trigger: e["comment.trigger"],
    before: e["comment.before"] ? Oc(e["comment.before"]) : void 0,
    after: e["comment.after"] ? Oc(e["comment.after"]) : void 0
  };
}
function gw(i, e) {
  vd(i, e) && e.comment.before && kd(i, e.comment.before, e);
}
function bw(i, e) {
  vd(i, e) && e.comment.after && kd(i, e.comment.after, e);
}
function vd(i, e) {
  const { comment: t } = e;
  if (!t.enabled || !t.trigger || !i.name || !i.attributes)
    return !1;
  for (const r of i.attributes)
    if (r.name && t.trigger.includes(r.name))
      return !0;
  return !1;
}
function kd(i, e, t) {
  const r = {}, { out: n } = t;
  for (const s of i.attributes)
    s.name && s.value && (r[s.name.toUpperCase()] = s.value);
  for (const s of e)
    typeof s == "string" ? B(n, s) : r[s.name] && (B(n, s.before), qe(r[s.name], t), B(n, s.after));
}
const yw = /^<([\w\-:]+)[\s>]/, Qw = /* @__PURE__ */ new Set([
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
function Pd(i, e) {
  const t = Sd(e);
  return t.comment = mw(e), Qd(i, Sw, t), t.out.value;
}
function Sw(i, e, t, r, n) {
  const { out: s, config: o } = r, l = Td(i, e, t, r), a = ww(r);
  if (s.level += a, l && rt(s, !0), i.name) {
    const h = Yx(i.name, o);
    if (gw(i, r), B(s, `<${h}`), i.attributes)
      for (const c of i.attributes)
        wd(c) && xw(c, r);
    if (i.selfClosing && !i.children.length && !i.value)
      B(s, `${Ex(o)}>`);
    else {
      if (B(s, ">"), !dc(i, r, n)) {
        if (i.value) {
          const c = i.value.some(Zd) || $w(i.value, o);
          c && rt(r.out, ++s.level), qe(i.value, r), c && rt(r.out, --s.level);
        }
        if (i.children.forEach(n), !i.value && !i.children.length) {
          const c = o.options["output.formatLeafNode"] || o.options["output.formatForce"].includes(i.name);
          c && rt(r.out, ++s.level), qe(Jn, r), c && rt(r.out, --s.level);
        }
      }
      B(s, `</${h}>`), bw(i, r);
    }
  } else !dc(i, r, n) && i.value && (qe(i.value, r), i.children.forEach(n));
  if (l && e === t.length - 1 && r.parent) {
    const h = Kt(r.parent) ? 0 : 1;
    rt(s, s.level - h);
  }
  s.level -= a;
}
function xw(i, e) {
  const { out: t, config: r } = e;
  if (i.name) {
    const n = r.options["markup.attributes"], s = r.options["markup.valuePrefix"];
    let { name: o, value: l } = i, a = Xn(i, r, !0), h = Xn(i, r);
    n && (o = pc(o, n, i.multiple) || o), o = hd(o, r), r.options["jsx.enabled"] && i.multiple && (a = Wo, h = Do);
    const c = s ? pc(i.name, s, i.multiple) : null;
    if (c && (l == null ? void 0 : l.length) === 1 && typeof l[0] == "string") {
      const u = l[0];
      l = [vw(u) ? `${c}.${u}` : `${c}['${u}']`], r.options["jsx.enabled"] && (a = Wo, h = Do);
    }
    cd(i, r) && !l ? r.options["output.compactBoolean"] || (l = [o]) : l || (l = Jn), B(t, " " + o), l ? (B(t, "=" + a), qe(l, e), B(t, h)) : r.options["output.selfClosingStyle"] !== "html" && B(t, "=" + a + h);
  }
}
function dc(i, e, t) {
  if (i.value && i.children.length) {
    const r = i.value.findIndex(xd);
    if (r !== -1) {
      qe(i.value.slice(0, r), e);
      const n = e.out.line;
      let s = r + 1;
      return i.children.forEach(t), e.out.line !== n && typeof i.value[s] == "string" && B(e.out, i.value[s++].trimLeft()), qe(i.value.slice(s), e), !0;
    }
  }
  return !1;
}
function Td(i, e, t, r) {
  const { config: n, parent: s } = r;
  if (!n.options["output.format"] || e === 0 && !s || s && Kt(s) && t.length === 1)
    return !1;
  if (Kt(i) && (Kt(t[e - 1]) || Kt(t[e + 1]) || i.value.some(Zd) || i.value.some(xd) && i.children.length))
    return !0;
  if (gi(i, n)) {
    if (e === 0) {
      for (let o = 0; o < t.length; o++)
        if (!gi(t[o], n))
          return !0;
    } else if (!gi(t[e - 1], n))
      return !0;
    if (n.options["output.inlineBreak"]) {
      let o = 1, l = e, a = e;
      for (; fc(t[--l], n); )
        o++;
      for (; fc(t[++a], n); )
        o++;
      if (o >= n.options["output.inlineBreak"])
        return !0;
    }
    for (let o = 0, l = i.children.length; o < l; o++)
      if (Td(i.children[o], o, i.children, r))
        return !0;
    return !1;
  }
  return !0;
}
function ww(i) {
  const { config: e, parent: t } = i;
  return !t || Kt(t) || t.name && e.options["output.formatSkip"].includes(t.name) ? 0 : 1;
}
function Zd(i) {
  return typeof i == "string" && /\r|\n/.test(i);
}
function $w(i, e) {
  if (i.length && typeof i[0] == "string") {
    const t = yw.exec(i[0]);
    if (t != null && t.length && !e.options.inlineElements.includes(t[1].toLowerCase()))
      return !0;
  }
  return !1;
}
function pc(i, e, t) {
  return t && e[`${i}*`] || e[i];
}
function vw(i) {
  return !Qw.has(i) && /^[a-zA-Z_$][\w_$]*$/.test(i);
}
function Ll(i, e, t) {
  const r = Sd(e);
  return r.options = t || {}, Qd(i, kw, r), r.out.value;
}
function kw(i, e, t, r, n) {
  const { out: s, options: o } = r, { primary: l, secondary: a } = Pw(i), h = r.parent ? 1 : 0;
  s.level += h, Rw(i, e, t, r) && rt(s, !0), i.name && (i.name !== "div" || !l.length) && B(s, (o.beforeName || "") + i.name + (o.afterName || "")), Tw(l, r), Zw(a.filter(wd), r), i.selfClosing && !i.value && !i.children.length ? r.options.selfClose && B(s, r.options.selfClose) : (Cw(i, r), i.children.forEach(n)), s.level -= h;
}
function Pw(i) {
  const e = [], t = [];
  if (i.attributes)
    for (const r of i.attributes)
      Aw(r) ? e.push(r) : t.push(r);
  return { primary: e, secondary: t };
}
function Tw(i, e) {
  for (const t of i)
    if (t.value)
      if (t.name === "class") {
        B(e.out, ".");
        const r = t.value.map((n) => typeof n == "string" ? n.replace(/\s+/g, ".") : n);
        qe(r, e);
      } else
        B(e.out, "#"), qe(t.value, e);
}
function Zw(i, e) {
  if (i.length) {
    const { out: t, config: r, options: n } = e;
    n.beforeAttribute && B(t, n.beforeAttribute);
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      B(t, hd(o.name || "", r)), cd(o, r) && !o.value ? !r.options["output.compactBoolean"] && n.booleanValue && B(t, "=" + n.booleanValue) : (B(t, "=" + Xn(o, r, !0)), qe(o.value || Jn, e), B(t, Xn(o, r))), s !== i.length - 1 && n.glueAttribute && B(t, n.glueAttribute);
    }
    n.afterAttribute && B(t, n.afterAttribute);
  }
}
function Cw(i, e) {
  if (!i.value && i.children.length)
    return;
  const t = i.value || Jn, r = Ow(t), { out: n, options: s } = e;
  if (r.length === 1)
    (i.name || i.attributes) && ie(n, " "), qe(t, e);
  else {
    const o = [];
    let l = 0;
    for (const a of r) {
      const h = Xw(a);
      o.push(h), h > l && (l = h);
    }
    n.level++;
    for (let a = 0; a < r.length; a++)
      rt(n, !0), s.beforeTextLine && ie(n, s.beforeTextLine), qe(r[a], e), s.afterTextLine && (ie(n, " ".repeat(l - o[a])), ie(n, s.afterTextLine));
    n.level--;
  }
}
function Aw(i) {
  return i.name === "class" || i.name === "id";
}
function Xw(i) {
  let e = 0;
  for (const t of i)
    e += typeof t == "string" ? t.length : t.name.length;
  return e;
}
function Rw(i, e, t, r) {
  return !r.parent && e === 0 ? !1 : !Kt(i);
}
function Mw(i, e) {
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
function zw(i, e) {
  return Ll(i, e, {
    beforeAttribute: " ",
    glueAttribute: " ",
    beforeTextLine: "| ",
    selfClose: "/"
  });
}
function Vw(i, e) {
  return Ll(i, e, {
    beforeAttribute: "(",
    afterAttribute: ")",
    glueAttribute: ", ",
    beforeTextLine: "| ",
    selfClose: e.options["output.selfClosingStyle"] === "xml" ? "/" : ""
  });
}
const _w = { html: Pd, haml: Mw, slim: zw, pug: Vw };
function qw(i, e) {
  let t;
  if (typeof i == "string") {
    const r = Object.assign({}, e);
    e.options["jsx.enabled"] && (r.jsx = !0), e.options["markup.href"] && (r.href = !0), i = ql(i, r), t = e.text, e.text = void 0;
  }
  return i = Vx(i, e), Mx(i, Ew, e), e.text = t ?? e.text, i;
}
function Yw(i, e) {
  return (_w[e.syntax] || Pd)(i, e);
}
function Ew(i, e, t) {
  Bx(i, e, t), Ax(i, t), Fx(i, e, t), t.syntax === "xsl" && iw(i), t.type === "markup" && fw(i), t.options["bem.enabled"] && lw(i, e, t);
}
var xt;
(function(i) {
  i.Raw = "Raw", i.Property = "Property";
})(xt || (xt = {}));
const Ww = /^([a-z-]+)(?:\s*:\s*([^\n\r;]+?);*)?$/, Dw = { value: !0 };
function Bw(i, e) {
  const t = e.match(Ww);
  if (t) {
    const r = {}, n = t[2] ? t[2].split("|").map(Iw) : [];
    for (const s of n)
      for (const o of s)
        Gw(o, r);
    return {
      type: xt.Property,
      key: i,
      property: t[1],
      value: n,
      keywords: r,
      dependencies: []
    };
  }
  return { type: xt.Raw, key: i, value: e };
}
function Lw(i) {
  i = i.slice().sort(jw);
  const e = [];
  let t;
  for (const r of i.filter(Nw)) {
    for (; e.length; ) {
      if (t = e[e.length - 1], r.property.startsWith(t.property) && r.property.charCodeAt(t.property.length) === 45) {
        t.dependencies.push(r), e.push(r);
        break;
      }
      e.pop();
    }
    e.length || e.push(r);
  }
  return i;
}
function jw(i, e) {
  return i.key === e.key ? 0 : i.key < e.key ? -1 : 1;
}
function Iw(i) {
  return sd(i.trim(), Dw)[0].value;
}
function Nw(i) {
  return i.type === xt.Property;
}
function Gw(i, e) {
  for (const t of i.value)
    if (t.type === "Literal")
      e[t.value] = t;
    else if (t.type === "FunctionCall")
      e[t.name] = t;
    else if (t.type === "Field") {
      const r = t.name.trim();
      r && (e[r] = { type: "Literal", value: r });
    }
}
function Uw(i, e, t = !1) {
  if (i = i.toLowerCase(), e = e.toLowerCase(), i === e)
    return 1;
  if (!i || !e || i.charCodeAt(0) !== e.charCodeAt(0))
    return 0;
  const r = i.length, n = e.length;
  if (!t && r > n)
    return 0;
  const s = Math.min(r, n), o = Math.max(r, n);
  let l = 1, a = 1, h = o, c = 0, u = 0, f = !1, O = !1;
  for (; l < r; ) {
    for (c = i.charCodeAt(l), f = !1, O = !1; a < n; ) {
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
  const d = l / o, p = o - s, g = mc(o) - mc(p);
  return h * d / g;
}
function mc(i) {
  return i * (i + 1) / 2;
}
function Cd(i, e) {
  return !i.r && !i.g && !i.b && !i.a ? "transparent" : i.a === 1 ? Fw(i, e) : Hw(i);
}
function Fw(i, e) {
  const t = e && Es(i.r) && Es(i.g) && Es(i.b) ? Kw : Jw;
  return "#" + t(i.r) + t(i.g) + t(i.b);
}
function Hw(i) {
  const e = [i.r, i.g, i.b];
  return i.a !== 1 && e.push(Ad(i.a, 8)), `${e.length === 3 ? "rgb" : "rgba"}(${e.join(", ")})`;
}
function Ad(i, e = 4) {
  return i.toFixed(e).replace(/\.?0+$/, "");
}
function Es(i) {
  return !(i % 17);
}
function Kw(i) {
  return (i >> 4).toString(16);
}
function Jw(i) {
  return e$(i.toString(16), 2);
}
function e$(i, e) {
  for (; i.length < e; )
    i = "0" + i;
  return i;
}
const Rn = {
  /** Include raw snippets only (e.g. no properties) in abbreviation match */
  Section: "@@section",
  /** Include properties only in abbreviation match */
  Property: "@@property",
  /** Resolve abbreviation in context of CSS property value */
  Value: "@@value"
};
function t$(i, e) {
  var t;
  const r = ad(e.options), n = e.options["output.format"];
  ((t = e.context) === null || t === void 0 ? void 0 : t.name) === Rn.Section && (i = i.filter((s) => s.snippet));
  for (let s = 0; s < i.length; s++)
    n && s !== 0 && rt(r, !0), i$(i[s], r, e);
  return r.value;
}
function i$(i, e, t) {
  const r = t.options["stylesheet.json"];
  if (i.name) {
    const n = r ? s$(i.name) : i.name;
    B(e, n + t.options["stylesheet.between"]), i.value.length ? r$(i, e, t) : Dl(e, 0, ""), r ? ie(e, ",") : (gc(i, e, !0), ie(e, t.options["stylesheet.after"]));
  } else {
    for (const n of i.value)
      for (const s of n.value)
        Rd(s, e, t);
    gc(i, e, i.value.length > 0);
  }
}
function r$(i, e, t) {
  const r = t.options["stylesheet.json"], n = r ? n$(i) : null;
  if (n && (!n.unit || n.unit === "px"))
    ie(e, String(n.value));
  else {
    const s = o$(t);
    r && ie(e, s);
    for (let o = 0; o < i.value.length; o++)
      o !== 0 && ie(e, ", "), Xd(i.value[o], e, t);
    r && ie(e, s);
  }
}
function gc(i, e, t) {
  i.important && (t && ie(e, " "), ie(e, "!important"));
}
function Xd(i, e, t) {
  for (let r = 0, n = -1; r < i.value.length; r++) {
    const s = i.value[r];
    r !== 0 && (s.type !== "Field" || s.start !== n) && ie(e, " "), Rd(s, e, t), n = s.end;
  }
}
function Rd(i, e, t) {
  if (i.type === "ColorValue")
    ie(e, Cd(i, t.options["stylesheet.shortHex"]));
  else if (i.type === "Literal" || i.type === "CustomProperty")
    B(e, i.value);
  else if (i.type === "NumberValue")
    B(e, Ad(i.value, 4) + i.unit);
  else if (i.type === "StringValue") {
    const r = i.quote === "double" ? '"' : "'";
    B(e, r + i.value + r);
  } else if (i.type === "Field")
    Dl(e, i.index, i.name);
  else if (i.type === "FunctionCall") {
    ie(e, i.name + "(");
    for (let r = 0; r < i.arguments.length; r++)
      r && ie(e, ", "), Xd(i.arguments[r], e, t);
    ie(e, ")");
  }
}
function n$(i) {
  if (i.value.length === 1) {
    const e = i.value[0];
    if (e.value.length === 1 && e.value[0].type === "NumberValue")
      return e.value[0];
  }
}
function s$(i) {
  return i.replace(/\-(\w)/g, (e, t) => t.toUpperCase());
}
function o$(i) {
  return i.options["stylesheet.jsonDoubleQuotes"] ? '"' : "'";
}
const bc = "lg";
function l$(i, e) {
  var t;
  const r = ((t = e.cache) === null || t === void 0 ? void 0 : t.stylesheetSnippets) || a$(e.snippets), n = [];
  e.cache && (e.cache.stylesheetSnippets = r), typeof i == "string" && (i = sd(i, { value: _d(e) }));
  const s = m$(r, e);
  for (const o of i) {
    const l = h$(o, s, e);
    l && n.push(l);
  }
  return n;
}
function a$(i) {
  const e = [];
  for (const t of Object.keys(i))
    e.push(Bw(t, i[t]));
  return Lw(e);
}
function h$(i, e, t) {
  if (!c$(i, t)) {
    const r = t.options["stylesheet.fuzzySearchMinScore"];
    if (_d(t)) {
      const n = t.context.name, s = e.find((o) => o.type === xt.Property && o.property === n);
      Md(i, t, s, r), i.snippet = s;
    } else if (i.name) {
      const n = tn(i.name, e, r, !0);
      if (i.snippet = n, n) {
        const s = n.type === xt.Property ? u$(i, n, t) : f$(i, n);
        if (s)
          i = s;
        else if (t.options["stylesheet.strictMatch"])
          return null;
      }
    }
  }
  return (i.name || t.context) && p$(i, t), i;
}
function c$(i, e) {
  let t = null;
  const r = i.value.length === 1 ? i.value[0] : null;
  if (r && r.value.length === 1) {
    const n = r.value[0];
    n.type === "FunctionCall" && n.name === bc && (t = n);
  }
  return t || i.name === bc ? (t ? t = Object.assign(Object.assign({}, t), { name: "linear-gradient" }) : t = {
    type: "FunctionCall",
    name: "linear-gradient",
    arguments: [Mn(Gt(0, ""))]
  }, e.context || (i.name = "background-image"), i.value = [Mn(t)], !0) : !1;
}
function u$(i, e, t) {
  const r = i.name, n = d$(r, e.key);
  if (n) {
    if (i.value.length)
      return null;
    const s = Bo(n, t, e);
    if (!s)
      return null;
    i.value.push(Mn(s));
  }
  if (i.name = e.property, i.value.length)
    Md(i, t, e);
  else if (e.value.length) {
    const s = e.value[0];
    i.value = e.value.length === 1 || s.some(zd) ? s : s.map((o) => Vd(o, t));
  }
  return i;
}
function Md(i, e, t, r) {
  for (const n of i.value) {
    const s = [];
    for (const o of n.value)
      if (o.type === "Literal")
        s.push(Bo(o.value, e, t, r) || o);
      else if (o.type === "FunctionCall") {
        const l = Bo(o.name, e, t, r);
        l && l.type === "FunctionCall" ? s.push(Object.assign(Object.assign({}, l), { arguments: o.arguments.concat(l.arguments.slice(o.arguments.length)) })) : s.push(o);
      } else
        s.push(o);
    n.value = s;
  }
}
function f$(i, e) {
  let t = 0, r;
  const n = /\$\{(\d+)(:[^}]+)?\}/g, s = i.value[0], o = [];
  for (; r = n.exec(e.value); )
    t !== r.index && o.push(bi(e.value.slice(t, r.index))), t = r.index + r[0].length, s && s.value.length ? o.push(s.value.shift()) : o.push(Gt(Number(r[1]), r[2] ? r[2].slice(1) : ""));
  const l = e.value.slice(t);
  return l && o.push(bi(l)), i.name = void 0, i.value = [Mn(...o)], i;
}
function tn(i, e, t = 0, r = !1) {
  let n = null, s = 0;
  for (const o of e) {
    const l = Uw(i, O$(o), r);
    if (l === 1)
      return o;
    l && l >= s && (s = l, n = o);
  }
  return s >= t ? n : null;
}
function O$(i) {
  return typeof i == "string" ? i : i.key;
}
function d$(i, e) {
  for (let t = 0, r = 0; t < i.length; t++) {
    if (r = e.indexOf(i[t], r), r === -1)
      return i.slice(t);
    r++;
  }
  return "";
}
function Bo(i, e, t, r) {
  let n;
  if (t) {
    if (n = tn(i, Object.keys(t.keywords), r))
      return t.keywords[n];
    for (const s of t.dependencies)
      if (n = tn(i, Object.keys(s.keywords), r))
        return s.keywords[n];
  }
  return (n = tn(i, e.options["stylesheet.keywords"], r)) ? bi(n) : null;
}
function p$(i, e) {
  const t = e.options["stylesheet.unitAliases"], r = e.options["stylesheet.unitless"];
  for (const n of i.value)
    for (const s of n.value)
      s.type === "NumberValue" && (s.unit ? s.unit = t[s.unit] || s.unit : s.value !== 0 && !r.includes(i.name) && (s.unit = s.rawValue.includes(".") ? e.options["stylesheet.floatUnit"] : e.options["stylesheet.intUnit"]));
}
function Mn(...i) {
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
function zd(i) {
  for (const e of i.value)
    if (e.type === "Field" || e.type === "FunctionCall" && e.arguments.some(zd))
      return !0;
  return !1;
}
function Vd(i, e, t = { index: 1 }) {
  let r = [];
  for (const n of i.value)
    switch (n.type) {
      case "ColorValue":
        r.push(Gt(t.index++, Cd(n, e.options["stylesheet.shortHex"])));
        break;
      case "Literal":
        r.push(Gt(t.index++, n.value));
        break;
      case "NumberValue":
        r.push(Gt(t.index++, `${n.value}${n.unit}`));
        break;
      case "StringValue":
        const s = n.quote === "single" ? "'" : '"';
        r.push(Gt(t.index++, s + n.value + s));
        break;
      case "FunctionCall":
        r.push(Gt(t.index++, n.name), bi("("));
        for (let o = 0, l = n.arguments.length; o < l; o++)
          r = r.concat(Vd(n.arguments[o], e, t).value), o !== l - 1 && r.push(bi(", "));
        r.push(bi(")"));
        break;
      default:
        r.push(n);
    }
  return Object.assign(Object.assign({}, i), { value: r });
}
function _d(i) {
  return i.context ? i.context.name === Rn.Value || !i.context.name.startsWith("@@") : !1;
}
function m$(i, e) {
  if (e.context) {
    if (e.context.name === Rn.Section)
      return i.filter((t) => t.type === xt.Raw);
    if (e.context.name === Rn.Property)
      return i.filter((t) => t.type === xt.Property);
  }
  return i;
}
var g$ = {
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
}, b$ = {
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
}, y$ = {
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
}, Q$ = {
  "!!!": "{doctype html}"
}, S$ = {
  lang: "en",
  locale: "en-US",
  charset: "UTF-8",
  indentation: "	",
  newline: `
`
};
const x$ = {
  markup: "html",
  stylesheet: "css"
}, w$ = {
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
}, qd = {
  type: "markup",
  syntax: "html",
  variables: S$,
  snippets: {},
  options: w$
}, yc = {
  markup: {
    snippets: Br(g$)
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
    snippets: Br(y$),
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
    snippets: Br(Q$)
  },
  stylesheet: {
    snippets: Br(b$)
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
function Br(i) {
  const e = {};
  return Object.keys(i).forEach((t) => {
    for (const r of t.split("|"))
      e[r] = i[t];
  }), e;
}
function Yd(i = {}, e = {}) {
  const t = i.type || "markup", r = i.syntax || x$[t];
  return Object.assign(Object.assign(Object.assign({}, qd), i), {
    type: t,
    syntax: r,
    variables: Ws(t, r, "variables", i, e),
    snippets: Ws(t, r, "snippets", i, e),
    options: Ws(t, r, "options", i, e)
  });
}
function Ws(i, e, t, r, n = {}) {
  const s = yc[i], o = n[i], l = yc[e], a = n[e];
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, qd[t]), s && s[t]), l && l[t]), o && o[t]), a && a[t]), r[t]);
}
var Qc;
(function(i) {
  i[i.SingleQuote = 39] = "SingleQuote", i[i.DoubleQuote = 34] = "DoubleQuote", i[i.Escape = 92] = "Escape";
})(Qc || (Qc = {}));
var Tt;
(function(i) {
  i[i.SquareL = 91] = "SquareL", i[i.SquareR = 93] = "SquareR", i[i.RoundL = 40] = "RoundL", i[i.RoundR = 41] = "RoundR", i[i.CurlyL = 123] = "CurlyL", i[i.CurlyR = 125] = "CurlyR";
})(Tt || (Tt = {}));
Tt.SquareL + "", Tt.SquareR, Tt.RoundL + "", Tt.RoundR, Tt.CurlyL + "", Tt.CurlyR;
var Sc;
(function(i) {
  i[i.Tab = 9] = "Tab", i[i.Space = 32] = "Space", i[i.Dash = 45] = "Dash", i[i.Slash = 47] = "Slash", i[i.Colon = 58] = "Colon", i[i.Equals = 61] = "Equals", i[i.AngleLeft = 60] = "AngleLeft", i[i.AngleRight = 62] = "AngleRight";
})(Sc || (Sc = {}));
const $$ = (i) => i.charCodeAt(0);
"#.*:$-_!@%^+>/".split("").map($$);
function v$(i, e) {
  const t = Yd(e);
  return t.type === "stylesheet" ? P$(i, t) : k$(i, t);
}
function k$(i, e) {
  return Yw(qw(i, e), e);
}
function P$(i, e) {
  return t$(l$(i, e), e);
}
const xc = String.fromCodePoint(65520), T$ = String.fromCodePoint(65521);
function Ed(i) {
  return i.selection.main.from;
}
function ut(i, e) {
  return i.doc.sliceString(e.from, e.to);
}
function We(i, e) {
  return e >= i.from && e <= i.to;
}
function wc(i) {
  return i === '"' || i === "'";
}
function Wd(i, e) {
  let { from: t, to: r } = e;
  const n = ut(i, e);
  return wc(n[0]) && t++, wc(n[n.length - 1]) && r--, { from: t, to: r };
}
function Z$(i, e) {
  const t = {};
  for (const r of e.getChildren("Attribute")) {
    const n = r.getChild("AttributeName");
    if (n) {
      const s = ut(i, n), o = r.getChild("AttributeValue");
      t[s] = o ? ut(i, Wd(i, o)) : null;
    }
  }
  return t;
}
function C$(i) {
  return i.from === i.to;
}
function Dd(i) {
  return i.length > 0 ? i[i.length - 1] : void 0;
}
function A$(i, e = 0) {
  const t = [];
  let r = "", n = null, s = 0, o = 0, l;
  for (; o < i.length; )
    l = i.charAt(o++), (l === xc || l === T$) && (r += i.slice(s, o - 1), s = o, l === xc ? (n = {
      from: e + r.length,
      to: e + r.length
    }, t.push(n)) : n && (n = null));
  return t.length || t.push({
    from: i.length + e,
    to: i.length + e
  }), {
    ranges: t,
    snippet: r + i.slice(s)
  };
}
const $c = {
  OpenTag: "open",
  CloseTag: "close",
  SelfClosingTag: "selfClose"
};
function X$(i, e, t) {
  const r = {
    type: "css",
    ancestors: [],
    current: null,
    inline: !1,
    embedded: t
  }, n = K(i).resolveInner(e, -1), s = [];
  for (let l = n; l; l = l.parent)
    if (l.name === "RuleSet") {
      const a = z$(l);
      s.push({
        name: ut(i, a),
        type: "selector",
        range: l
      });
    } else if (l.name === "Declaration") {
      const { name: a, value: h } = V$(l);
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
    We(l, e) ? (r.current = o, o.range = l) : s.unshift(o);
  }
  return r.ancestors = s.reverse(), r;
}
function R$(i, e) {
  const t = {
    type: "html",
    ancestors: [],
    current: null
  }, r = K(i).resolveInner(e);
  for (let n = r; n; n = n ? n.parent : null)
    if (n.name in $c) {
      const s = vc(i, n);
      s && (t.current = Et(Ie({}, s), {
        type: $c[n.name]
      }), n = n.parent);
    } else if (n.name === "Element") {
      const s = n.getChild("OpenTag");
      if (s) {
        const o = vc(i, s);
        o && t.ancestors.push(o);
      }
    }
  return t.ancestors.reverse(), M$(i, e, t), t;
}
function M$(i, e, t) {
  var r;
  if (((r = t.current) == null ? void 0 : r.type) === "open") {
    let n = K(i).resolve(t.current.range.from, 1);
    for (; n && n.name !== "OpenTag"; )
      n = n.parent;
    if (n)
      for (const s of n.getChildren("Attribute")) {
        if (s.from > e)
          break;
        if (We(s, e) && _$(i, s) === "style") {
          const o = s.getChild("AttributeValue");
          if (o) {
            const l = Wd(i, o);
            We(l, e) && (t.css = q$(ut(i, l), e - l.from, l.from));
          }
        }
      }
  }
}
function vc(i, e) {
  const t = e.getChild("TagName");
  if (t)
    return {
      name: ut(i, t).toLowerCase(),
      range: e
    };
}
function z$(i) {
  let e = i.from, t = e;
  for (let r = i.firstChild; r && r.name !== "Block"; r = r.nextSibling)
    t = r.to;
  return { from: e, to: t };
}
function V$(i) {
  let e, t, r = i.firstChild;
  return (r == null ? void 0 : r.name) === "PropertyName" && (e = r, r = r.nextSibling, (r == null ? void 0 : r.name) === ":" && (r = r.nextSibling), r && (t = {
    from: r.from,
    to: i.lastChild.to
  })), { name: e, value: t };
}
function _$(i, e) {
  const t = e.getChild("AttributeName");
  return t ? ut(i, t).toLowerCase() : "";
}
function q$(i, e, t = 0) {
  const r = {
    type: "css",
    ancestors: [],
    current: null,
    inline: !0,
    embedded: {
      from: e + t,
      to: e + t + i.length
    }
  }, n = Y$(i, e);
  for (const s of n)
    if (s.value && We(s.value, e)) {
      r.current = {
        name: i.substring(s.value.from, s.value.to).trim(),
        type: "propertyValue",
        range: {
          from: t + s.value.from,
          to: t + s.value.to
        }
      }, r.ancestors.push({
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
      r.current = {
        name: i.substring(s.name.from, s.name.to).trim(),
        type: "propertyName",
        range: {
          from: t + s.name.from,
          to: t + o
        }
      };
      break;
    }
  return r;
}
function Y$(i, e = i.length) {
  var t;
  const r = ` 	
\r`, n = [];
  let s;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    if (s && (s.value ? s.value.from !== -1 && (s.value.to = o) : s.name.to = o), l === ";") {
      if (s = void 0, o > e)
        break;
    } else l === ":" ? s && !s.value && (s.value = { from: -1, to: -1 }) : s ? ((t = s.value) == null ? void 0 : t.from) === -1 && !r.includes(l) && (s.value.from = s.value.to = o) : r.includes(l) || (s = {
      name: { from: o, to: o }
    }, n.push(s));
  }
  return s && (s.value ? s.value.to++ : s.name.to++), n;
}
var D = /* @__PURE__ */ ((i) => (i.html = "html", i.xml = "xml", i.xsl = "xsl", i.jsx = "jsx", i.tsx = "tsx", i.vue = "vue", i.haml = "haml", i.jade = "jade", i.pug = "pug", i.slim = "slim", i.css = "css", i.scss = "scss", i.less = "less", i.sass = "sass", i.sss = "sss", i.stylus = "stylus", i.postcss = "postcss", i))(D || {});
function Lo(i, e) {
  const t = Gd(i) || D.html, r = ts(i), n = {
    // 'output.baseIndent': lineIndent(state.doc.lineAt(pos)),
    // 'output.indent': getIndentation(state),
    "output.field": Bd,
    "output.indent": "	",
    "output.format": !e,
    "output.attributeQuotes": r.attributeQuotes,
    "stylesheet.shortHex": r.shortHex
  };
  return t === D.html && (n["output.selfClosingStyle"] = r.markupStyle, n["output.compactBoolean"] = r.markupStyle === "html"), Ud(t) && (r.comments && (n["comment.enabled"] = !0, r.commentsTemplate && (n["comment.after"] = r.commentsTemplate)), n["bem.enabled"] = r.bem), n;
}
function Bd(i, e) {
  return e ? `\${${i}:${e}}` : `\${${i}}`;
}
let Ld = {};
function jl(i, e, t) {
  let r = { cache: Ld };
  const n = {
    "output.field": Bd
  };
  t && (Object.assign(r, t), t.options && Object.assign(n, t.options)), r.options = n;
  const s = ts(i);
  return s.config && (r = Yd(r, s.config)), v$(e, r);
}
function E$() {
  Ld = {};
}
const W$ = {
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
    E$();
    const e = Ie({}, W$), { preview: t } = e;
    for (const r of i)
      Object.assign(e, r), r.preview && (e.preview = Ie(Ie({}, t), r.preview));
    return e;
  }
});
function ts(i, e) {
  return i.facet(es);
}
const jd = [D.html, D.vue], Il = [D.jsx, D.tsx], Id = [D.xml, D.xsl, ...Il], Nd = [D.css, D.scss, D.less];
[D.haml, D.jade, D.pug, D.slim, ...jd, ...Id, ...Il];
const D$ = [D.sass, D.sss, D.stylus, D.postcss, ...Nd];
function Gd(i) {
  return ts(i).syntax;
}
function B$(i) {
  return i && D$.includes(i) ? "stylesheet" : "markup";
}
function L$(i) {
  return Id.includes(i);
}
function Ud(i) {
  return jd.includes(i) || L$(i);
}
function Fd(i) {
  return Nd.includes(i);
}
function Nl(i) {
  return Il.includes(i);
}
function j$(i, e) {
  const t = Dd(e.ancestors);
  if (t) {
    let r = K(i).resolve(t.range.from, 1);
    for (; r && r.name !== "OpenTag"; )
      r = r.parent;
    return {
      name: t.name,
      attributes: r ? Z$(i, r) : {}
    };
  }
}
function I$(i) {
  if (i.inline)
    return {
      name: "@@property"
      /* Property */
    };
  const e = Dd(i.ancestors);
  let t = "@@global";
  return i.current ? i.current.type === "propertyValue" && e ? t = e.name : (i.current.type === "selector" || i.current.type === "propertyName") && !e && (t = "@@section") : e || (t = "@@section"), {
    name: t
  };
}
function Hd(i, e, t) {
  const r = document.createElement("div");
  r.className = "emmet-preview", e === "error" && r.classList.add("emmet-preview_error");
  let n = e === D.css ? Xo : zo;
  t && e in t && (n = t[e]);
  const s = new T({
    doc: i,
    root: t == null ? void 0 : t.root,
    extensions: [
      E.readOnly.of(!0),
      dl(y0, { fallback: !0 }),
      e === D.css ? Xo() : zo(),
      n()
    ],
    parent: r
  });
  return r.update = (o) => {
    const l = s.state.update({
      changes: {
        from: 0,
        to: s.state.doc.length,
        insert: o
      }
    });
    s.dispatch(l);
  }, r;
}
const N$ = "data:image/svg+xml,%3csvg%20height='393'%20viewBox='0%200%20393%20393'%20width='393'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='98.60869%25'%20x2='50%25'%20y1='50%25'%20y2='50%25'%3e%3cstop%20offset='0'%20stop-color='%23cefbad'/%3e%3cstop%20offset='.836972535'%20stop-color='%23cefbad'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3cpath%20id='b'%20d='m116%2048%20105%2063v34.985l-75-44.999289v67.667289l49.5%2029.347-49.5%2029.346v67.668289l75-45.000289v34.986l-105%2063zm145%2087%20105%2063-105%2063v-34.986l46.690481-28.014-46.690481-28.014z'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%20transform='matrix(.70710678%20-.70710678%20.70710678%20.70710678%20-81.392965%20196.5)'%3e%3ccircle%20cx='196.5'%20cy='196.5'%20fill='%2325272b'%20r='196.5'/%3e%3cuse%20fill='%2392c131'%20xlink:href='%23b'/%3e%3cuse%20fill='url(%23a)'%20xlink:href='%23b'/%3e%3c/g%3e%3c/svg%3e", Kd = (i) => {
  const e = i.state.field(wt);
  return (e == null ? void 0 : e.type) === "abbreviation" && e.preview && We(e.range, i.pos) ? {
    from: e.range.from,
    to: e.range.to,
    filter: !1,
    update(t, r, n, s) {
      const o = s.state.field(wt);
      return !o || o.type === "error" || !We(o.range, s.pos) ? null : Et(Ie({}, t), {
        from: o.range.from,
        to: o.range.to,
        options: Zc(s.state, o)
      });
    },
    options: Zc(i.state, e)
  } : null;
}, G$ = ri.data.of({ autocomplete: Kd }), jo = "<", U$ = q.mark({ class: "emmet-tracker" }), Gl = _.define(), F$ = _.define(), wt = ye.define({
  create: () => null,
  update(i, e) {
    if (e.annotation(br))
      return null;
    for (const r of e.effects) {
      if (r.is(Gl))
        return null;
      if (r.is(F$)) {
        const n = e.newSelection.main, s = ep(e.state, n.from);
        if (s)
          return Ul(e.state, n, {
            forced: !0,
            config: s
          });
      }
    }
    return e.docChanged ? cv(e.state, i, e) : i;
  }
}), H$ = ye.define({
  create: kc,
  update(i, e) {
    return !e.docChanged && !e.selection ? e.state.field(wt) ? i : null : kc(e.state, i);
  },
  provide: (i) => sl.from(i)
});
function kc(i, e) {
  const t = i.field(wt);
  if (t && !t.inactive && xl(i) !== "active") {
    if (t.config.type === "stylesheet")
      return null;
    e && e.tracker.type !== t.type && (e = null);
    const { range: r } = t;
    if (Ov(i, t))
      return e || {
        pos: r.from,
        above: !1,
        arrow: !1,
        tracker: t,
        create() {
          const n = i.facet(es).preview;
          let s = "", o = "";
          t.type === "error" ? (s = t.error.message, o = "error") : (s = t.preview, o = t.config.syntax || D.html);
          const l = Hd(s, o, n);
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
const K$ = Te.fromClass(class {
  constructor() {
    _o(this, "decorations"), this.decorations = q.none;
  }
  update(i) {
    const { state: e } = i, t = e.field(wt), r = [];
    if (t && !t.inactive) {
      const { range: n } = t;
      C$(n) || r.push(U$.range(n.from, n.to)), this.decorations = q.set(r, !0);
    } else
      this.decorations = q.none;
  }
}, {
  decorations: (i) => i.decorations
});
function Jd(i, e) {
  const { from: t, to: r } = e.range, n = jl(i.state, e.abbreviation, e.config), s = Qf(n);
  i.dispatch(i.state.update({
    effects: Gl.of(null)
  })), s(i, { label: "expand" }, t, r);
}
const J$ = (i) => {
  const { state: e } = i;
  if (xl(e))
    return !1;
  const t = e.field(wt, !1);
  return t && !t.inactive && We(t.range, Ed(e)) ? (Jd(i, t), !0) : !1;
}, ev = ({ state: i, dispatch: e }) => i.field(wt, !1) ? (e({
  effects: Gl.of(null)
}), !0) : !1, tv = T.baseTheme({
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
    background: `url("${N$}") center/contain no-repeat`,
    display: "inline-block",
    width: "11px",
    height: "11px",
    verticalAlign: "middle"
  }
});
function iv(i) {
  return [
    wt,
    K$,
    H$,
    tv,
    G$,
    i ? es.of(i) : [],
    pr.of([{
      key: "Tab",
      run: J$
    }, {
      key: "Escape",
      run: ev
    }])
  ];
}
function rv(i, e, t) {
  var r;
  if (t.length !== 1)
    return null;
  const n = i.doc.lineAt(e), s = n.text.substring(Math.max(0, e - n.from - 1), e - n.from);
  if (!Tc(s, t, uv(i, e)))
    return null;
  const o = ep(i, e);
  if (!o)
    return null;
  if (o.type === "stylesheet") {
    if (!Tc(s, t, D.css))
      return null;
    const u = (r = o.context) == null ? void 0 : r.name;
    if (u && !u.startsWith("@@") && t !== "#")
      return null;
  }
  const l = o.syntax || D.html;
  let a = e, h = e + t.length, c = 0;
  return Nl(l) && s === jo && (c = jo.length, a -= c), Ul(i, { from: a, to: h }, { config: o });
}
function ep(i, e) {
  if (ri.isActiveAt(i, e))
    return Pc(i, e, D.css, X$(i, e));
  const t = Gd(i);
  if (Ud(t)) {
    const r = R$(i, e);
    if (r.css)
      return Pc(i, e, D.css, r.css);
    if (!r.current)
      return {
        syntax: t,
        type: "markup",
        context: j$(i, r),
        options: Lo(i)
      };
  } else
    return {
      syntax: t,
      type: B$(t),
      options: Lo(i)
    };
}
function Pc(i, e, t, r) {
  if (!r.current || r.current.type === "propertyName" || r.current.type === "propertyValue" || nv(i, e, r))
    return {
      syntax: t,
      type: "stylesheet",
      context: I$(r),
      options: Lo(i, r.inline)
    };
}
function nv(i, e, { current: t }) {
  return (t == null ? void 0 : t.type) === "selector" && t.range.from === e - 1 ? i.doc.lineAt(t.range.from).text.trim().length === 1 : !1;
}
function sv(i, e) {
  return Nl(e) ? i === jo : Fd(e) ? i === "" || /^[\s>;"\']$/.test(i) : i === "" || /^[\s>;"\']$/.test(i);
}
function ov(i, e) {
  return Nl(e) ? /^[a-zA-Z.#\[\(]$/.test(i) : Fd(e) ? /^[a-zA-Z!@#]$/.test(i) : /^[a-zA-Z.#!@\[\(]$/.test(i);
}
function Ul(i, e, t) {
  if (e.from > e.to)
    return null;
  let r = ut(i, e);
  const { config: n, forced: s } = t;
  if (t.offset && (r = r.slice(t.offset)), !r && !s || tp(r))
    return null;
  const o = {
    abbreviation: r,
    range: e,
    config: n,
    forced: !!s,
    inactive: !1,
    offset: t.offset || 0
  };
  try {
    let l, a = !1;
    n.type === "markup" && (l = ql(r, {
      jsx: n.syntax === "jsx"
    }), a = lv(l));
    const h = av(n), c = jl(i, l || r, h);
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
function tp(i) {
  return /[\r\n]/.test(i);
}
function lv(i) {
  if (i.children.length === 1 && !i.children[0].children.length) {
    const e = i.children[0];
    return !e.name || /^[a-z]/i.test(e.name);
  }
  return !i.children.length;
}
function av(i) {
  return Et(Ie({}, i), {
    options: Et(Ie({}, i.options), {
      "output.field": hv,
      "output.indent": "  ",
      "output.baseIndent": ""
    })
  });
}
function hv(i, e) {
  return e;
}
function cv(i, e, t) {
  return fv(i) ? null : ((!e || e.inactive) && (t.changes.iterChanges((r, n, s, o, l) => {
    l.length && (e = rv(i, s, l.toString()) || e);
  }), !e || !e.inactive) || t.changes.iterChanges((r, n, s, o, l) => {
    if (!e)
      return;
    const { range: a } = e;
    if (!We(a, r))
      e.inactive || (e = null);
    else if (We(a, s)) {
      const h = n - r, c = o - r, u = a.to + c - h;
      if (u <= a.from || tp(l.toString()))
        e = null;
      else {
        const f = e.inactive ? a : { from: a.from, to: u }, O = Ul(i, f, {
          config: e.config,
          forced: e.forced
        });
        O ? e = O : e = Et(Ie({}, e), { inactive: !0 });
      }
    }
  }), e);
}
function uv(i, e) {
  return ri.isActiveAt(i, e) ? D.css : pi.isActiveAt(i, e) ? D.html : "";
}
function Tc(i, e, t) {
  return sv(i, t) && ov(e, t);
}
function fv(i) {
  return Array.isArray(i.values) ? i.values.some((e) => {
    var t;
    return e && ((t = e.constructor) == null ? void 0 : t.name) === "ActiveSnippet";
  }) : !1;
}
function Ov(i, e) {
  if (xl(i) === "active")
    return !1;
  const t = ts(i);
  if (!t.previewEnabled)
    return !1;
  if (Array.isArray(t.previewEnabled)) {
    const { type: r, syntax: n } = e.config;
    if (!t.previewEnabled.includes(r) && !t.previewEnabled.includes(n))
      return !1;
  }
  return e.type === "error" || (!e.simple || e.forced) && !!e.abbreviation && We(e.range, Ed(i));
}
function Zc(i, e, t) {
  const r = i.facet(es);
  return [{
    label: "Emmet abbreviation",
    type: "emmet",
    boost: r.completionBoost,
    tracker: e,
    previewConfig: r.preview,
    preview: t == null ? void 0 : t.preview,
    info: dv,
    apply: (n, s) => {
      n.dispatch({
        annotations: br.of(s)
      }), Jd(n, e);
    }
  }];
}
function dv(i) {
  let { tracker: e, previewConfig: t, preview: r } = i;
  return r != null && r.update ? r.update(e.preview) : i.preview = r = Hd(e.preview, e.config.syntax || D.html, t), r;
}
const rn = _.define(), Cc = ye.define({
  create: () => null,
  update(i, e) {
    for (const t of e.effects)
      t.is(rn) && (i = t.value);
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
    const { state: t, view: r } = e, n = t.field(Cc);
    n ? (this.widget || this.createInputPanel(r), this.updateAbbreviation(n.abbreviation)) : this.widget && (this.disposeWidget(), r.focus());
  }
  // TODO use @codemirror/panel instead
  createInputPanel(e) {
    const t = document.createElement("div");
    t.className = "emmet-wrap-with-abbreviation";
    const r = document.createElement("div");
    r.className = "emmet-wrap-with-abbreviation__content";
    const n = document.createElement("input");
    n.placeholder = "Enter abbreviation";
    let s = !1;
    const o = () => {
      s && (vl(e), s = !1);
    };
    n.addEventListener("input", () => {
      const l = e.state.field(Cc);
      if (l) {
        const a = n.value;
        o();
        const h = Et(Ie({}, l), {
          abbreviation: a
        });
        if (h.abbreviation) {
          s = !0;
          const { from: c, to: u } = h.range, f = jl(e.state, h.abbreviation, h.options), { ranges: O, snippet: d } = A$(f, c), p = O[0];
          e.dispatch({
            effects: [rn.of(h)],
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
            effects: [rn.of(h)]
          });
      }
    }), n.addEventListener("keydown", (l) => {
      (l.key === "Escape" || l.key === "Enter") && (l.key === "Escape" && o(), l.preventDefault(), e.dispatch({
        effects: [rn.of(null)]
      }));
    }), r.append(n), t.append(r), e.dom.append(t), this.widget = t, this.input = n, n.focus();
  }
  updateAbbreviation(e) {
    this.input && this.input.value !== e && (this.input.value = e);
  }
  disposeWidget() {
    this.widget && (this.widget.remove(), this.widget = this.input = null);
  }
});
const Ac = {
  // Editor background and text
  background: "#ffffff",
  foreground: "#1a1a1a",
  selection: "#d9e4f5",
  cursor: "#1a1a1a",
  lineHighlight: "#f5f5f5",
  // Gutter
  gutterBackground: "#f8f8f8",
  gutterForeground: "#999999",
  gutterBorder: "#e0e0e0",
  // Syntax highlighting - matches common IDE conventions
  keyword: "#7928a1",
  // purple
  string: "#2e7d32",
  // green
  number: "#1565c0",
  // blue
  comment: "#757575",
  // gray
  tag: "#d32f2f",
  // red
  attribute: "#ff6f00",
  // orange
  value: "#2e7d32",
  // green
  bracket: "#1a1a1a",
  operator: "#1a1a1a"
}, Xc = {
  // Editor background and text
  background: "#1a1a1a",
  foreground: "#e0e0e0",
  selection: "#3d5a80",
  cursor: "#e0e0e0",
  lineHighlight: "#2a2a2a",
  // Gutter
  gutterBackground: "#1a1a1a",
  gutterForeground: "#666666",
  gutterBorder: "#333333",
  // Syntax highlighting
  keyword: "#c792ea",
  // purple
  string: "#c3e88d",
  // green
  number: "#82aaff",
  // blue
  comment: "#757575",
  // gray
  tag: "#f07178",
  // red
  attribute: "#ffcb6b",
  // orange
  value: "#c3e88d",
  // green
  bracket: "#e0e0e0",
  operator: "#89ddff"
};
function ip(i, e) {
  return T.theme(
    {
      "&": {
        backgroundColor: i.background,
        color: i.foreground
      },
      ".cm-content": {
        caretColor: i.cursor
      },
      ".cm-cursor, .cm-dropCursor": {
        borderLeftColor: i.cursor
      },
      "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
        backgroundColor: i.selection
      },
      ".cm-activeLine": {
        backgroundColor: i.lineHighlight
      },
      ".cm-gutters": {
        backgroundColor: i.gutterBackground,
        color: i.gutterForeground,
        borderRight: `1px solid ${i.gutterBorder}`
      },
      ".cm-activeLineGutter": {
        backgroundColor: i.lineHighlight
      },
      ".cm-lineNumbers .cm-gutterElement": {
        padding: "0 8px"
      }
    },
    { dark: e }
  );
}
function rp(i) {
  return gr.define([
    // Keywords (if, else, for, etc.)
    { tag: m.keyword, color: i.keyword },
    { tag: m.controlKeyword, color: i.keyword },
    // Strings
    { tag: m.string, color: i.string },
    // Numbers
    { tag: m.number, color: i.number },
    // Comments
    { tag: m.comment, color: i.comment, fontStyle: "italic" },
    { tag: m.lineComment, color: i.comment, fontStyle: "italic" },
    { tag: m.blockComment, color: i.comment, fontStyle: "italic" },
    // HTML tags
    { tag: m.tagName, color: i.tag },
    { tag: m.angleBracket, color: i.bracket },
    // Attributes
    { tag: m.attributeName, color: i.attribute },
    { tag: m.attributeValue, color: i.value },
    // Operators
    { tag: m.operator, color: i.operator },
    { tag: m.punctuation, color: i.bracket },
    // CSS
    { tag: m.propertyName, color: i.attribute },
    { tag: m.className, color: i.tag },
    // JavaScript
    { tag: m.function(m.variableName), color: i.keyword },
    { tag: m.definition(m.variableName), color: i.foreground },
    { tag: m.variableName, color: i.foreground },
    { tag: m.bool, color: i.number },
    { tag: m.null, color: i.number }
  ]);
}
const pv = [
  ip(Ac, !1),
  dl(rp(Ac))
], mv = [
  ip(Xc, !0),
  dl(rp(Xc))
];
function gv(i) {
  return i ? mv : pv;
}
class bv {
  constructor(e) {
    wr(this, "textarea");
    wr(this, "editor", null);
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
class yv {
  constructor(e) {
    wr(this, "html");
    this.html = e;
  }
  /**
   * Render the widget into the page
   */
  render(e, t, r, n) {
    const s = this.html.replace(/__NAME__/g, t).replace(/__ID__/g, r);
    e.outerHTML = s;
    const o = document.getElementById(r);
    if (!o)
      throw new Error(`WagtailHtmlEditor: Textarea with id "${r}" not found`);
    return o.value = n || "", new bv(o);
  }
}
typeof window < "u" && window.telepath && window.telepath.register(
  "wagtail_html_editor.widgets.EnhancedHTMLWidget",
  yv
);
const Qv = "data-wagtail-html-editor", nn = "data-wagtail-html-editor-initialized";
function Sv(i = {}) {
  const e = [
    Mg(),
    yg(),
    _g(),
    Mb(),
    k0(),
    Ob(),
    mr.of("  "),
    zo(),
    gv(i.darkMode ?? !1),
    wb()
  ];
  return i.emmet !== !1 && (e.push(iv()), e.push(
    pi.data.of({ autocomplete: Kd })
  )), e.push(
    pr.of([
      ...$f,
      ...Vy,
      ...Bb,
      // Tab: accept completion if popup open, otherwise indent
      {
        key: "Tab",
        run: (t) => {
          var r;
          return bf(t) ? !0 : ((r = Dr.run) == null ? void 0 : r.call(Dr, t)) ?? !1;
        },
        shift: Dr.shift
      }
    ])
  ), e;
}
function is(i, e = {}) {
  var o;
  if (i.hasAttribute(nn))
    throw new Error("Editor already initialized on this textarea");
  i.style.display = "none", i.setAttribute(nn, "true");
  const t = document.createElement("div");
  t.className = "wagtail-html-editor", (o = i.parentNode) == null || o.insertBefore(t, i.nextSibling);
  const r = T.updateListener.of((l) => {
    l.docChanged && (i.value = l.state.doc.toString());
  }), n = E.create({
    doc: i.value,
    extensions: [...Sv(e), r]
  }), s = new T({
    state: n,
    parent: t
  });
  return {
    textarea: i,
    view: s,
    options: e,
    destroy: () => {
      s.destroy(), t.remove(), i.removeAttribute(nn), i.style.display = "";
    }
  };
}
function xv(i, e = {}) {
  const t = document.querySelector(i);
  return t ? t instanceof HTMLTextAreaElement ? is(t, e) : (console.warn(`WagtailHtmlEditor: Element "${i}" is not a textarea`), null) : (console.warn(
    `WagtailHtmlEditor: No element found for selector "${i}"`
  ), null);
}
function wv(i = {}) {
  const e = document.querySelectorAll(
    `textarea[${Qv}]:not([${nn}])`
  ), t = [];
  for (const r of e)
    try {
      const n = is(r, i);
      t.push(n);
    } catch (n) {
      console.error("WagtailHtmlEditor: Failed to initialize editor", n);
    }
  return t;
}
const $v = {
  initEditor: is,
  initEditorBySelector: xv,
  initAll: wv
};
typeof window < "u" && (window.WagtailHtmlEditor = $v);
export {
  $v as WagtailHtmlEditor,
  wv as initAll,
  is as initEditor,
  xv as initEditorBySelector
};
//# sourceMappingURL=wagtail-html-editor.js.map
