function i(o, t = {}) {
  return console.log("WagtailHtmlEditor: initEditor called", { textarea: o, options: t }), {
    textarea: o,
    options: t,
    destroy: () => {
      console.log("WagtailHtmlEditor: Editor destroyed");
    }
  };
}
export {
  i as initEditor
};
//# sourceMappingURL=wagtail-html-editor.js.map
