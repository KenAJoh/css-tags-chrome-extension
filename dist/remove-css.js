var removeCss = () => {
  document.querySelectorAll("[ds-css-extension]").forEach(function (e) {
    e.parentElement.removeChild(e);
  });

  document.querySelectorAll("[ds-css-extension-classes]").forEach(function (e) {
    e.removeAttribute("ds-css-extension-classes");
  });
};

removeCss();
