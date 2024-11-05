const d = (e) => Math.floor(Math.random() * e), h = (e) => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789" + "!@#$%^&*()_+[]{}|;:,.<>?";
  let o = "";
  for (let c = 0; c < e; c++) {
    const u = d(n.length);
    o += n[u];
  }
  return o;
}, l = (e) => {
  const t = /[A-Z]/.test(e), s = /[a-z]/.test(e), r = /\d/.test(e), a = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(e);
  return t + s + r + a;
}, p = (e, t) => {
  const s = [];
  for (let r = 0; r < e; r++)
    s.push(h(t));
  return s;
}, i = (e) => e.reduce((t, s) => l(s) > l(t) ? s : t), w = (e = 1e6, t = 18) => {
  const s = p(e, t);
  return i(s);
};
export {
  w as initPassword
};
