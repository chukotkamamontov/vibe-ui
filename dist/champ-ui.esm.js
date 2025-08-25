import { jsx as r } from "react/jsx-runtime";
const b = "_button_14ndq_1", t = {
  button: b,
  "button--primary": "_button--primary_14ndq_8",
  "button--secondary": "_button--secondary_14ndq_15"
}, _ = ({ children: n, variant: o, ...u }) => /* @__PURE__ */ r("button", { className: `${t.button} ${t[`button--${o}`]}`, ...u, children: n });
export {
  _ as Button
};
