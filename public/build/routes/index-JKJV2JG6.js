import {
  Form,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-OID5GZRI.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/Nav/styles.module.css
var styles_module_default = "/build/_assets/styles.module-AYKUYK6W.css";

// app/components/Nav/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Nav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: styles_module_default.nav, children: "Geography App" }, void 0, false, {
    fileName: "app/components/Nav/index.tsx",
    lineNumber: 4,
    columnNumber: 11
  }, this);
}

// app/components/Page/styles.module.css
var styles_module_default2 = "/build/_assets/styles.module-CMZFLQNW.css";

// app/components/Page/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Page({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: styles_module_default2.page, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav, {}, void 0, false, {
      fileName: "app/components/Page/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: styles_module_default2.container, children }, void 0, false, {
      fileName: "app/components/Page/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Page/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// browser-route-module:routes/index.tsx?browser
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Index() {
  const {
    name,
    official,
    flag,
    capital,
    population,
    map,
    region,
    subregion
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "get", action: ".", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: [
        "Enter country code:",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            type: "text",
            name: "countryCode",
            id: "countryCode",
            placeholder: "Country Code"
          },
          void 0,
          false,
          {
            fileName: "browser-route-module:routes/index.tsx?browser",
            lineNumber: 24,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, true, {
        fileName: "browser-route-module:routes/index.tsx?browser",
        lineNumber: 22,
        columnNumber: 21
      }, this),
      " ",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", children: "Get Country Info" }, void 0, false, {
        fileName: "browser-route-module:routes/index.tsx?browser",
        lineNumber: 31,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "browser-route-module:routes/index.tsx?browser",
        lineNumber: 32,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:routes/index.tsx?browser",
      lineNumber: 21,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
      fileName: "browser-route-module:routes/index.tsx?browser",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", {}, void 0, false, {
      fileName: "browser-route-module:routes/index.tsx?browser",
      lineNumber: 34,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("article", { children: [
      name && official && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: [
        "Country Name: ",
        name,
        " (",
        official,
        " ",
        flag,
        ") "
      ] }, void 0, true, {
        fileName: "browser-route-module:routes/index.tsx?browser",
        lineNumber: 36,
        columnNumber: 42
      }, this),
      capital && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Country Capital: ",
        capital,
        " "
      ] }, void 0, true, {
        fileName: "browser-route-module:routes/index.tsx?browser",
        lineNumber: 37,
        columnNumber: 33
      }, this),
      population && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Country Population: ",
        population
      ] }, void 0, true, {
        fileName: "browser-route-module:routes/index.tsx?browser",
        lineNumber: 38,
        columnNumber: 36
      }, this),
      map && region && subregion && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Country Location: ",
        region,
        " - ",
        subregion,
        " ",
        " ",
        "(",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: map, children: "Map Link" }, void 0, false, {
          fileName: "browser-route-module:routes/index.tsx?browser",
          lineNumber: 42,
          columnNumber: 30
        }, this),
        ")"
      ] }, void 0, true, {
        fileName: "browser-route-module:routes/index.tsx?browser",
        lineNumber: 40,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:routes/index.tsx?browser",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "browser-route-module:routes/index.tsx?browser",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", {}, void 0, false, {
        fileName: "browser-route-module:routes/index.tsx?browser",
        lineNumber: 47,
        columnNumber: 27
      }, this),
      "\xA9 ",
      new Date().getFullYear(),
      " Kyle Tolliver -- Geography App"
    ] }, void 0, true, {
      fileName: "browser-route-module:routes/index.tsx?browser",
      lineNumber: 46,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "browser-route-module:routes/index.tsx?browser",
    lineNumber: 20,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "browser-route-module:routes/index.tsx?browser",
    lineNumber: 19,
    columnNumber: 9
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-JKJV2JG6.js.map
