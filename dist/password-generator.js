const u = (s) => Math.floor(Math.random() * s), h = (s) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", t = "abcdefghijklmnopqrstuvwxyz", r = "0123456789", n = "!@#$%?&", a = e + t + r + n;
  let o = "";
  for (let c = 0; c < s; c++) {
    const l = u(a.length);
    o += a[l];
  }
  return o;
}, d = (s) => {
  const e = /[A-Z]/.test(s), t = /[a-z]/.test(s), r = /\d/.test(s), n = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(s);
  return e + t + r + n;
}, p = (s, e) => {
  const t = [];
  for (let r = 0; r < s; r++)
    t.push(h(e));
  return t;
}, i = (s) => s.reduce((e, t) => d(t) > d(e) ? t : e), w = (s = 1e6, e = 18) => {
  const t = p(s, e);
  return i(t);
}, P = {
  initPassword: w
};
export {
  P as default
};
