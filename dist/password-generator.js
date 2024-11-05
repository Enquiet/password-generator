const u = (t) => Math.floor(Math.random() * t), h = (t) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", s = "abcdefghijklmnopqrstuvwxyz", r = "0123456789", n = "!@#$%^&*()_+[]{}|;:,.<>?", o = e + s + r + n;
  let a = "";
  for (let c = 0; c < t; c++) {
    const l = u(o.length);
    a += o[l];
  }
  return a;
}, d = (t) => {
  const e = /[A-Z]/.test(t), s = /[a-z]/.test(t), r = /\d/.test(t), n = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(t);
  return e + s + r + n;
}, i = (t, e) => {
  const s = [];
  for (let r = 0; r < t; r++)
    s.push(h(e));
  return s;
}, p = (t) => t.reduce((e, s) => d(s) > d(e) ? s : e), w = (t = 1e6, e = 18) => {
  const s = i(t, e);
  return p(s);
};
export {
  w as initPassword
};
