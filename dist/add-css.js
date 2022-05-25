var selectors =
  "[class^='navds-'], [class*='navds-'], [class^='navdsi-'], [class*=' navdsi-']";

var getCss = () =>
  `${selectors}{ outline: 2px dashed red !important; position: relative; }`;

var tooltip =
  () => `[class^='navds-']:hover:before, [class*='navds-']:hover:before, [class^='navdsi-']:hover:before, [class*=' navdsi-']:hover:before {
     content: attr(ds-css-extension-classes) " ";
     position: absolute;
     z-index: 9999;
     background: #262626;
     color: white;
     font-size: 14px;
     padding: 2px 6px;
     height: 20px;
     align-items: center;
     display: flex;
     top: -22px;
     border-radius: 3px 3px 0 0;

     text-transform: none;
     font-weight: 400;
     white-space: nowrap;
     box-shadow: -1px 0 2px 0 rgba(38,38,38,0.3);
     pointer-events: none;
    }`;

var getRelevantCss = (e) => {
  var classStr = "";
  if (!e?.classList) return "";
  for (let cssClass of e?.classList) {
    if (cssClass.includes("navds")) {
      classStr += cssClass + " ";
    }
  }

  return classStr;
};

var addCSS = () => {
  if (!!document.querySelector("[ds-css-extension]")) return;

  var el = document.createElement("style");
  el.setAttribute("ds-css-extension", "");

  document.head.appendChild(el).innerHTML = getCss() + tooltip();

  document.querySelectorAll(selectors).forEach(function (e) {
    e.setAttribute("ds-css-extension-classes", getRelevantCss(e));
  });
};

addCSS();
