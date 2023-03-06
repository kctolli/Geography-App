var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Geography App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/geoapi.ts
var geoapi_exports = {};
__export(geoapi_exports, {
  getInfoByCountryCode: () => getInfoByCountryCode
});
async function getInfoByCountryCode(countryCode) {
  var _a, _b, _c;
  let countryData = await getDataByCountryCode(countryCode);
  return {
    name: (_a = countryData == null ? void 0 : countryData.name) == null ? void 0 : _a.common,
    official: (_b = countryData == null ? void 0 : countryData.name) == null ? void 0 : _b.official,
    flag: countryData == null ? void 0 : countryData.flag,
    capital: countryData == null ? void 0 : countryData.capital[0],
    population: countryData == null ? void 0 : countryData.population,
    map: (_c = countryData == null ? void 0 : countryData.maps) == null ? void 0 : _c.googleMaps,
    region: countryData == null ? void 0 : countryData.region,
    subregion: countryData == null ? void 0 : countryData.subregion
  };
}
async function getDataByCountryCode(countryCode) {
  let countryUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`, countryData = (await fetch(countryUrl).then((res) => res.json()).catch(console.log))[0];
  return countryData == null || delete countryData.translations, countryData == null || delete countryData.flags, countryData == null || delete countryData.idd, countryData == null || delete countryData.coatOfArms, countryData == null || delete countryData.gini, countryData;
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react3 = require("@remix-run/react");

// app/components/Nav/styles.module.css
var styles_module_default = "/build/_assets/styles.module-AYKUYK6W.css";

// app/components/Nav/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Nav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: styles_module_default.nav, children: "Geography App" }, void 0, !1, {
    fileName: "app/components/Nav/index.tsx",
    lineNumber: 4,
    columnNumber: 11
  }, this);
}

// app/components/Page/styles.module.css
var styles_module_default2 = "/build/_assets/styles.module-CMZFLQNW.css";

// app/components/Page/index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Page({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: styles_module_default2.page, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav, {}, void 0, !1, {
      fileName: "app/components/Page/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: styles_module_default2.container, children }, void 0, !1, {
      fileName: "app/components/Page/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Page/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
async function loader({ request }) {
  let country = new URL(request.url).searchParams.get("countryCode");
  return country ? getInfoByCountryCode(country) : {};
}
function Index() {
  let {
    name,
    official,
    flag,
    capital,
    population,
    map,
    region,
    subregion
  } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Form, { method: "get", action: ".", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { children: [
        "Enter country code:",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            type: "text",
            name: "countryCode",
            id: "countryCode",
            placeholder: "Country Code"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 31,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      " ",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", children: "Get Country Info" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 41,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("article", { children: [
      name && official && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: [
        "Country Name: ",
        name,
        " (",
        official,
        " ",
        flag,
        ") "
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 43,
        columnNumber: 42
      }, this),
      capital && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "Country Capital: ",
        capital,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 44,
        columnNumber: 33
      }, this),
      population && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "Country Population: ",
        population
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 45,
        columnNumber: 36
      }, this),
      map && region && subregion && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "Country Location: ",
        region,
        " - ",
        subregion,
        " ",
        " ",
        "(",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: map, children: "Map Link" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 49,
          columnNumber: 30
        }, this),
        ")"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 47,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 54,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 54,
        columnNumber: 27
      }, this),
      "\xA9 ",
      new Date().getFullYear(),
      " Kyle Tolliver -- Geography App"
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "61fa7c62", entry: { module: "/build/entry.client-LDJ64GLW.js", imports: ["/build/_shared/chunk-OID5GZRI.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GQ3UFWUQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/geoapi": { id: "routes/geoapi", parentId: "root", path: "geoapi", index: void 0, caseSensitive: void 0, module: "/build/routes/geoapi-PNOJ47VI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-JKJV2JG6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-61FA7C62.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/geoapi": {
    id: "routes/geoapi",
    parentId: "root",
    path: "geoapi",
    index: void 0,
    caseSensitive: void 0,
    module: geoapi_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
