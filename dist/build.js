!function(c){var n={};function l(t){if(n[t])return n[t].exports;var F=n[t]={i:t,l:!1,exports:{}};return c[t].call(F.exports,F,F.exports,l),F.l=!0,F.exports}l.m=c,l.c=n,l.d=function(c,n,t){l.o(c,n)||Object.defineProperty(c,n,{enumerable:!0,get:t})},l.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},l.t=function(c,n){if(1&n&&(c=l(c)),8&n)return c;if(4&n&&"object"==typeof c&&c&&c.__esModule)return c;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:c}),2&n&&"string"!=typeof c)for(var F in c)l.d(t,F,function(n){return c[n]}.bind(null,F));return t},l.n=function(c){var n=c&&c.__esModule?function(){return c.default}:function(){return c};return l.d(n,"a",n),n},l.o=function(c,n){return Object.prototype.hasOwnProperty.call(c,n)},l.p="/dist/",l(l.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, \"Actions\", function() { return /* binding */ Actions; });\n__webpack_require__.d(__webpack_exports__, \"JetFormEditorRow\", function() { return /* reexport */ JetFormEditorRow; });\n\n// CONCATENATED MODULE: ./src/actions/EditorData.js\nclass EditorData {\n  constructor(type, label) {\n    this.type = type;\n    this.label = label;\n    this.source = {};\n    this.__labels = {};\n    this.__help_messages = {};\n    this.__gateway_attrs = {};\n    this.__messages = {};\n  }\n\n  setSource(config) {\n    this.source = config;\n    return this;\n  }\n\n  setLabels(config) {\n    this.__labels = config;\n    return this;\n  }\n\n  setHelp(config) {\n    this.__help_messages = config;\n    return this;\n  }\n\n  setGatewayAttrs(config) {\n    this.__gateway_attrs = config;\n    return this;\n  }\n\n  setMessages(config) {\n    this.__messages = config;\n    return this;\n  }\n\n  exportAll() {\n    if (!('jetFormActionTypes' in window)) {\n      window.jetFormActionTypes = [];\n    }\n\n    const source = this.source;\n    const label = this.exportLabels();\n    const help = this.exportHelp();\n    const gatewayAttrs = this.exportGatewayAttrs();\n    const messages = this.exportMessages();\n    const exportObj = {\n      source,\n      label,\n      help,\n      messages,\n      gatewayAttrs\n    };\n    const actionIndex = window.jetFormActionTypes.findIndex(type => this.type === type.id);\n    const actionData = {\n      id: this.type,\n      name: this.label,\n      ...exportObj\n    };\n\n    if (-1 === actionIndex) {\n      window.jetFormActionTypes.push(actionData);\n    } else {\n      window.jetFormActionTypes[actionIndex] = { ...window.jetFormActionTypes[actionIndex],\n        ...exportObj\n      };\n    }\n\n    return exportObj;\n  }\n\n  exportLabels() {\n    return this.getLocalizedWithFunc('__labels', '[Empty Label]');\n  }\n\n  exportHelp() {\n    return this.getLocalizedWithFunc('__help_messages');\n  }\n\n  exportGatewayAttrs() {\n    return this.getLocalizedWithFunc('__gateway_attrs', []);\n  }\n\n  exportMessages() {\n    return this.getLocalizedWithFunc('__messages', {});\n  }\n\n  getLocalizedWithFunc(objectKey, ifEmptyReturn = '') {\n    let action = false;\n\n    if (objectKey in this) {\n      action = this[objectKey];\n    }\n\n    if (!action) {\n      return () => ifEmptyReturn;\n    }\n\n    return attr => {\n      if (attr) {\n        return action[attr] ? action[attr] : ifEmptyReturn;\n      } else {\n        return action;\n      }\n    };\n  }\n\n}\n\n/* harmony default export */ var actions_EditorData = (EditorData);\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/engine-editor/JetFormEditorRow.vue?vue&type=template&id=23ff7180&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"jet-form-editor__row\" }, [\n    _c(\"div\", { class: _vm.labelClassObject }, [\n      _vm._v(\"\\n\\t\\t\" + _vm._s(_vm.label) + \"\\n\\t\\t\"),\n      this.$slots.helpLabel\n        ? _c(\"div\", { class: _vm.helpClassObject }, [_vm._t(\"helpLabel\")], 2)\n        : _vm._e()\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { class: _vm.controlClassObject },\n      [\n        _vm._t(\"default\"),\n        _vm._v(\" \"),\n        this.$slots.helpControl\n          ? _c(\n              \"div\",\n              { class: _vm.helpClassObject },\n              [_vm._t(\"helpControl\")],\n              2\n            )\n          : _vm._e()\n      ],\n      2\n    ),\n    _vm._v(\" \"),\n    this.$slots.helpSide\n      ? _c(\n          \"div\",\n          { class: _vm.helpClassObject },\n          [_vm._v(\"\\n\\t\\t    \"), _vm._t(\"helpSide\")],\n          2\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./src/engine-editor/JetFormEditorRow.vue?vue&type=template&id=23ff7180&\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/engine-editor/JetFormEditorRow.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ var JetFormEditorRowvue_type_script_lang_js_ = ({\n  name: 'jet-form-editor-row',\n  props: {\n    label: {\n      type: String,\n      default: ''\n    },\n    labelClass: {\n      type: String,\n      default: ''\n    },\n    helpClass: {\n      type: String,\n      default: ''\n    },\n    controlClass: {\n      type: String,\n      default: ''\n    }\n  },\n  computed: {\n    labelClassObject() {\n      return this.getClass('defaultLabelClass', 'labelClass');\n    },\n\n    helpClassObject() {\n      return this.getClass('defaultHelpClass', 'helpClass');\n    },\n\n    controlClassObject() {\n      return this.getClass('defaultControlClass', 'controlClass');\n    }\n\n  },\n\n  data() {\n    return {\n      defaultLabelClass: 'jet-form-editor__row-label',\n      defaultHelpClass: 'jet-form-editor__row-notice',\n      defaultControlClass: 'jet-form-editor__row-control'\n    };\n  },\n\n  methods: {\n    getClass(defaultKey, propKey) {\n      return {\n        [`${this[defaultKey]} ${this[propKey]}`]: this[propKey],\n        [this[defaultKey]]: !this[propKey]\n      };\n    }\n\n  }\n});\n// CONCATENATED MODULE: ./src/engine-editor/JetFormEditorRow.vue?vue&type=script&lang=js&\n /* harmony default export */ var engine_editor_JetFormEditorRowvue_type_script_lang_js_ = (JetFormEditorRowvue_type_script_lang_js_); \n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n// CONCATENATED MODULE: ./src/engine-editor/JetFormEditorRow.vue\n\n\n\n\n\n/* normalize component */\n\nvar component = normalizeComponent(\n  engine_editor_JetFormEditorRowvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/engine-editor/JetFormEditorRow.vue\"\n/* harmony default export */ var JetFormEditorRow = (component.exports);\n// CONCATENATED MODULE: ./src/main.js\n\n\nconst Actions = {\n  EditorData: actions_EditorData\n};\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9FZGl0b3JEYXRhLmpzPzRjZGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS1lZGl0b3IvSmV0Rm9ybUVkaXRvclJvdy52dWU/MjllOSIsIndlYnBhY2s6Ly8vc3JjL2VuZ2luZS1lZGl0b3IvSmV0Rm9ybUVkaXRvclJvdy52dWU/NmNhYSIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLWVkaXRvci9KZXRGb3JtRWRpdG9yUm93LnZ1ZT83NGUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLWVkaXRvci9KZXRGb3JtRWRpdG9yUm93LnZ1ZT82YjE1Iiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwibmFtZXMiOlsiRWRpdG9yRGF0YSIsImNvbnN0cnVjdG9yIiwidHlwZSIsImxhYmVsIiwic291cmNlIiwiX19sYWJlbHMiLCJfX2hlbHBfbWVzc2FnZXMiLCJfX2dhdGV3YXlfYXR0cnMiLCJfX21lc3NhZ2VzIiwic2V0U291cmNlIiwiY29uZmlnIiwic2V0TGFiZWxzIiwic2V0SGVscCIsInNldEdhdGV3YXlBdHRycyIsInNldE1lc3NhZ2VzIiwiZXhwb3J0QWxsIiwid2luZG93IiwiamV0Rm9ybUFjdGlvblR5cGVzIiwiZXhwb3J0TGFiZWxzIiwiaGVscCIsImV4cG9ydEhlbHAiLCJnYXRld2F5QXR0cnMiLCJleHBvcnRHYXRld2F5QXR0cnMiLCJtZXNzYWdlcyIsImV4cG9ydE1lc3NhZ2VzIiwiZXhwb3J0T2JqIiwiYWN0aW9uSW5kZXgiLCJmaW5kSW5kZXgiLCJpZCIsImFjdGlvbkRhdGEiLCJuYW1lIiwicHVzaCIsImdldExvY2FsaXplZFdpdGhGdW5jIiwib2JqZWN0S2V5IiwiaWZFbXB0eVJldHVybiIsImFjdGlvbiIsImF0dHIiLCJBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU1BLFVBQU4sQ0FBaUI7QUFDaEJDLGFBQVcsQ0FBRUMsSUFBRixFQUFRQyxLQUFSLEVBQWdCO0FBQzFCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBOztBQUVEQyxXQUFTLENBQUVDLE1BQUYsRUFBVztBQUNuQixTQUFLTixNQUFMLEdBQWNNLE1BQWQ7QUFFQSxXQUFPLElBQVA7QUFDQTs7QUFFREMsV0FBUyxDQUFFRCxNQUFGLEVBQVc7QUFDbkIsU0FBS0wsUUFBTCxHQUFnQkssTUFBaEI7QUFFQSxXQUFPLElBQVA7QUFDQTs7QUFFREUsU0FBTyxDQUFFRixNQUFGLEVBQVc7QUFDakIsU0FBS0osZUFBTCxHQUF1QkksTUFBdkI7QUFFQSxXQUFPLElBQVA7QUFDQTs7QUFFREcsaUJBQWUsQ0FBRUgsTUFBRixFQUFXO0FBQ3pCLFNBQUtILGVBQUwsR0FBdUJHLE1BQXZCO0FBRUEsV0FBTyxJQUFQO0FBQ0E7O0FBRURJLGFBQVcsQ0FBRUosTUFBRixFQUFXO0FBQ3JCLFNBQUtGLFVBQUwsR0FBa0JFLE1BQWxCO0FBRUEsV0FBTyxJQUFQO0FBQ0E7O0FBRURLLFdBQVMsR0FBRztBQUNYLFFBQUssRUFBSSx3QkFBd0JDLE1BQTVCLENBQUwsRUFBNEM7QUFDM0NBLFlBQU0sQ0FBQ0Msa0JBQVAsR0FBNEIsRUFBNUI7QUFDQTs7QUFFRCxVQUFNYixNQUFNLEdBQUcsS0FBS0EsTUFBcEI7QUFDQSxVQUFNRCxLQUFLLEdBQUcsS0FBS2UsWUFBTCxFQUFkO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLEtBQUtDLFVBQUwsRUFBYjtBQUNBLFVBQU1DLFlBQVksR0FBRyxLQUFLQyxrQkFBTCxFQUFyQjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxjQUFMLEVBQWpCO0FBRUEsVUFBTUMsU0FBUyxHQUFJO0FBQUVyQixZQUFGO0FBQVVELFdBQVY7QUFBaUJnQixVQUFqQjtBQUF1QkksY0FBdkI7QUFBaUNGO0FBQWpDLEtBQW5CO0FBRUEsVUFBTUssV0FBVyxHQUFHVixNQUFNLENBQUNDLGtCQUFQLENBQTBCVSxTQUExQixDQUFxQ3pCLElBQUksSUFBSSxLQUFLQSxJQUFMLEtBQWNBLElBQUksQ0FBQzBCLEVBQWhFLENBQXBCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHO0FBQ2xCRCxRQUFFLEVBQUUsS0FBSzFCLElBRFM7QUFFbEI0QixVQUFJLEVBQUUsS0FBSzNCLEtBRk87QUFHbEIsU0FBR3NCO0FBSGUsS0FBbkI7O0FBTUEsUUFBSyxDQUFDLENBQUQsS0FBT0MsV0FBWixFQUEwQjtBQUN6QlYsWUFBTSxDQUFDQyxrQkFBUCxDQUEwQmMsSUFBMUIsQ0FBZ0NGLFVBQWhDO0FBQ0EsS0FGRCxNQUVPO0FBQ05iLFlBQU0sQ0FBQ0Msa0JBQVAsQ0FBMkJTLFdBQTNCLElBQTJDLEVBQzFDLEdBQUdWLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMkJTLFdBQTNCLENBRHVDO0FBRTFDLFdBQUdEO0FBRnVDLE9BQTNDO0FBSUE7O0FBRUQsV0FBT0EsU0FBUDtBQUNBOztBQUdEUCxjQUFZLEdBQUc7QUFDZCxXQUFPLEtBQUtjLG9CQUFMLENBQTJCLFVBQTNCLEVBQXVDLGVBQXZDLENBQVA7QUFDQTs7QUFFRFosWUFBVSxHQUFHO0FBQ1osV0FBTyxLQUFLWSxvQkFBTCxDQUEyQixpQkFBM0IsQ0FBUDtBQUNBOztBQUVEVixvQkFBa0IsR0FBRztBQUNwQixXQUFPLEtBQUtVLG9CQUFMLENBQTJCLGlCQUEzQixFQUE4QyxFQUE5QyxDQUFQO0FBQ0E7O0FBRURSLGdCQUFjLEdBQUc7QUFDaEIsV0FBTyxLQUFLUSxvQkFBTCxDQUEyQixZQUEzQixFQUF5QyxFQUF6QyxDQUFQO0FBQ0E7O0FBRURBLHNCQUFvQixDQUFFQyxTQUFGLEVBQWFDLGFBQWEsR0FBRyxFQUE3QixFQUFrQztBQUVyRCxRQUFJQyxNQUFNLEdBQUcsS0FBYjs7QUFFQSxRQUFLRixTQUFTLElBQUksSUFBbEIsRUFBeUI7QUFDeEJFLFlBQU0sR0FBRyxLQUFNRixTQUFOLENBQVQ7QUFDQTs7QUFFRCxRQUFLLENBQUVFLE1BQVAsRUFBZ0I7QUFDZixhQUFPLE1BQU1ELGFBQWI7QUFDQTs7QUFFRCxXQUFPRSxJQUFJLElBQUk7QUFDZCxVQUFLQSxJQUFMLEVBQVk7QUFDWCxlQUFTRCxNQUFNLENBQUVDLElBQUYsQ0FBTixHQUFpQkQsTUFBTSxDQUFFQyxJQUFGLENBQXZCLEdBQWtDRixhQUEzQztBQUNBLE9BRkQsTUFHSztBQUNKLGVBQU9DLE1BQVA7QUFDQTtBQUNELEtBUEQ7QUFRQTs7QUE5R2U7O0FBaUhGbkMsaUVBQWYsRTs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0NBQXNDO0FBQzFELGVBQWUsOEJBQThCO0FBQzdDO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdDQUFnQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQSw2QkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFiQSxHQUZBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBLEtBTkE7O0FBT0E7QUFDQTtBQUNBOztBQVRBLEdBcEJBOztBQStCQTtBQUNBO0FBQ0EscURBREE7QUFFQSxxREFGQTtBQUdBO0FBSEE7QUFLQSxHQXJDQTs7QUFzQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBREE7QUFFQTtBQUZBO0FBSUE7O0FBTkE7QUF0Q0EsRzs7QUN0QmdMLENBQWdCLG1JQUFHLEVBQUMsQzs7QUNBcE07O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pHK0Y7QUFDM0I7QUFDTDs7O0FBRy9EO0FBQzBGO0FBQzFGLGdCQUFnQixrQkFBVTtBQUMxQixFQUFFLHNEQUFNO0FBQ1IsRUFBRSxNQUFNO0FBQ1IsRUFBRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLHNFOztBQ3RDZjtBQUNBO0FBRUEsTUFBTXFDLE9BQU8sR0FBRztBQUFFckMsZ0NBQVVBO0FBQVosQ0FBaEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVkaXRvckRhdGEge1xyXG5cdGNvbnN0cnVjdG9yKCB0eXBlLCBsYWJlbCApIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLmxhYmVsID0gbGFiZWw7XHJcblx0XHR0aGlzLnNvdXJjZSA9IHt9O1xyXG5cdFx0dGhpcy5fX2xhYmVscyA9IHt9O1xyXG5cdFx0dGhpcy5fX2hlbHBfbWVzc2FnZXMgPSB7fTtcclxuXHRcdHRoaXMuX19nYXRld2F5X2F0dHJzID0ge307XHJcblx0XHR0aGlzLl9fbWVzc2FnZXMgPSB7fTtcclxuXHR9XHJcblxyXG5cdHNldFNvdXJjZSggY29uZmlnICkge1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBjb25maWc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRzZXRMYWJlbHMoIGNvbmZpZyApIHtcclxuXHRcdHRoaXMuX19sYWJlbHMgPSBjb25maWc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRzZXRIZWxwKCBjb25maWcgKSB7XHJcblx0XHR0aGlzLl9faGVscF9tZXNzYWdlcyA9IGNvbmZpZztcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHNldEdhdGV3YXlBdHRycyggY29uZmlnICkge1xyXG5cdFx0dGhpcy5fX2dhdGV3YXlfYXR0cnMgPSBjb25maWc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRzZXRNZXNzYWdlcyggY29uZmlnICkge1xyXG5cdFx0dGhpcy5fX21lc3NhZ2VzID0gY29uZmlnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0QWxsKCkge1xyXG5cdFx0aWYgKCAhICggJ2pldEZvcm1BY3Rpb25UeXBlcycgaW4gd2luZG93ICkgKSB7XHJcblx0XHRcdHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcclxuXHRcdGNvbnN0IGxhYmVsID0gdGhpcy5leHBvcnRMYWJlbHMoKTtcclxuXHRcdGNvbnN0IGhlbHAgPSB0aGlzLmV4cG9ydEhlbHAoKTtcclxuXHRcdGNvbnN0IGdhdGV3YXlBdHRycyA9IHRoaXMuZXhwb3J0R2F0ZXdheUF0dHJzKCk7XHJcblx0XHRjb25zdCBtZXNzYWdlcyA9IHRoaXMuZXhwb3J0TWVzc2FnZXMoKTtcclxuXHJcblx0XHRjb25zdCBleHBvcnRPYmogPSAgeyBzb3VyY2UsIGxhYmVsLCBoZWxwLCBtZXNzYWdlcywgZ2F0ZXdheUF0dHJzIH1cclxuXHJcblx0XHRjb25zdCBhY3Rpb25JbmRleCA9IHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMuZmluZEluZGV4KCB0eXBlID0+IHRoaXMudHlwZSA9PT0gdHlwZS5pZCApO1xyXG5cdFx0Y29uc3QgYWN0aW9uRGF0YSA9IHtcclxuXHRcdFx0aWQ6IHRoaXMudHlwZSxcclxuXHRcdFx0bmFtZTogdGhpcy5sYWJlbCxcclxuXHRcdFx0Li4uZXhwb3J0T2JqXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICggLTEgPT09IGFjdGlvbkluZGV4ICkge1xyXG5cdFx0XHR3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLnB1c2goIGFjdGlvbkRhdGEgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGFjdGlvbkluZGV4IF0gPSB7XHJcblx0XHRcdFx0Li4ud2luZG93LmpldEZvcm1BY3Rpb25UeXBlc1sgYWN0aW9uSW5kZXggXSAsXHJcblx0XHRcdFx0Li4uZXhwb3J0T2JqXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGV4cG9ydE9iajtcclxuXHR9XHJcblxyXG5cclxuXHRleHBvcnRMYWJlbHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRMb2NhbGl6ZWRXaXRoRnVuYyggJ19fbGFiZWxzJywgJ1tFbXB0eSBMYWJlbF0nICk7XHJcblx0fTtcclxuXHJcblx0ZXhwb3J0SGVscCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldExvY2FsaXplZFdpdGhGdW5jKCAnX19oZWxwX21lc3NhZ2VzJyApO1xyXG5cdH07XHJcblxyXG5cdGV4cG9ydEdhdGV3YXlBdHRycygpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldExvY2FsaXplZFdpdGhGdW5jKCAnX19nYXRld2F5X2F0dHJzJywgW10gKTtcclxuXHR9O1xyXG5cclxuXHRleHBvcnRNZXNzYWdlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldExvY2FsaXplZFdpdGhGdW5jKCAnX19tZXNzYWdlcycsIHt9ICk7XHJcblx0fTtcclxuXHJcblx0Z2V0TG9jYWxpemVkV2l0aEZ1bmMoIG9iamVjdEtleSwgaWZFbXB0eVJldHVybiA9ICcnICkge1xyXG5cclxuXHRcdGxldCBhY3Rpb24gPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoIG9iamVjdEtleSBpbiB0aGlzICkge1xyXG5cdFx0XHRhY3Rpb24gPSB0aGlzWyBvYmplY3RLZXkgXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICEgYWN0aW9uICkge1xyXG5cdFx0XHRyZXR1cm4gKCkgPT4gaWZFbXB0eVJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXR0ciA9PiB7XHJcblx0XHRcdGlmICggYXR0ciApIHtcclxuXHRcdFx0XHRyZXR1cm4gKCBhY3Rpb25bIGF0dHIgXSA/IGFjdGlvblsgYXR0ciBdIDogaWZFbXB0eVJldHVybiApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBhY3Rpb247XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yRGF0YTsiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamV0LWZvcm0tZWRpdG9yX19yb3dcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLmxhYmVsQ2xhc3NPYmplY3QgfSwgW1xuICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmxhYmVsKSArIFwiXFxuXFx0XFx0XCIpLFxuICAgICAgdGhpcy4kc2xvdHMuaGVscExhYmVsXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLmhlbHBDbGFzc09iamVjdCB9LCBbX3ZtLl90KFwiaGVscExhYmVsXCIpXSwgMilcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzczogX3ZtLmNvbnRyb2xDbGFzc09iamVjdCB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICB0aGlzLiRzbG90cy5oZWxwQ29udHJvbFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IF92bS5oZWxwQ2xhc3NPYmplY3QgfSxcbiAgICAgICAgICAgICAgW192bS5fdChcImhlbHBDb250cm9sXCIpXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIHRoaXMuJHNsb3RzLmhlbHBTaWRlXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBjbGFzczogX3ZtLmhlbHBDbGFzc09iamVjdCB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHTCoMKgwqDCoFwiKSwgX3ZtLl90KFwiaGVscFNpZGVcIildLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiamV0LWZvcm0tZWRpdG9yX19yb3dcIj5cclxuXHRcdDxkaXYgOmNsYXNzPVwibGFiZWxDbGFzc09iamVjdFwiPlxyXG5cdFx0XHR7eyBsYWJlbCB9fVxyXG5cdFx0XHQ8ZGl2IDpjbGFzcz1cImhlbHBDbGFzc09iamVjdFwiIHYtaWY9XCJ0aGlzLiRzbG90cy5oZWxwTGFiZWxcIj5cclxuXHRcdFx0XHQ8c2xvdCBuYW1lPVwiaGVscExhYmVsXCI+PC9zbG90PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiA6Y2xhc3M9XCJjb250cm9sQ2xhc3NPYmplY3RcIj5cclxuXHRcdFx0PHNsb3Q+PC9zbG90PlxyXG5cdFx0XHQ8ZGl2IDpjbGFzcz1cImhlbHBDbGFzc09iamVjdFwiIHYtaWY9XCJ0aGlzLiRzbG90cy5oZWxwQ29udHJvbFwiPlxyXG5cdFx0XHRcdDxzbG90IG5hbWU9XCJoZWxwQ29udHJvbFwiPjwvc2xvdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgOmNsYXNzPVwiaGVscENsYXNzT2JqZWN0XCIgdi1pZj1cInRoaXMuJHNsb3RzLmhlbHBTaWRlXCI+XHJcblx0XHRcdCZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzxzbG90IG5hbWU9XCJoZWxwU2lkZVwiPjwvc2xvdD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnamV0LWZvcm0tZWRpdG9yLXJvdycsXHJcblx0cHJvcHM6IHtcclxuXHRcdGxhYmVsOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHRsYWJlbENsYXNzOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHRoZWxwQ2xhc3M6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHRcdGNvbnRyb2xDbGFzczoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGxhYmVsQ2xhc3NPYmplY3QoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldENsYXNzKCAnZGVmYXVsdExhYmVsQ2xhc3MnLCAnbGFiZWxDbGFzcycgKVxyXG5cdFx0fSxcclxuXHRcdGhlbHBDbGFzc09iamVjdCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0Q2xhc3MoICdkZWZhdWx0SGVscENsYXNzJywgJ2hlbHBDbGFzcycgKVxyXG5cdFx0fSxcclxuXHRcdGNvbnRyb2xDbGFzc09iamVjdCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0Q2xhc3MoICdkZWZhdWx0Q29udHJvbENsYXNzJywgJ2NvbnRyb2xDbGFzcycgKVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRlZmF1bHRMYWJlbENsYXNzOiAnamV0LWZvcm0tZWRpdG9yX19yb3ctbGFiZWwnLFxyXG5cdFx0XHRkZWZhdWx0SGVscENsYXNzOiAnamV0LWZvcm0tZWRpdG9yX19yb3ctbm90aWNlJyxcclxuXHRcdFx0ZGVmYXVsdENvbnRyb2xDbGFzczogJ2pldC1mb3JtLWVkaXRvcl9fcm93LWNvbnRyb2wnLFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0Q2xhc3MoIGRlZmF1bHRLZXksIHByb3BLZXkgKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0WyBgJHsgdGhpc1sgZGVmYXVsdEtleSBdIH0gJHsgdGhpc1sgcHJvcEtleSBdIH1gIF06IHRoaXNbIHByb3BLZXkgXSxcclxuXHRcdFx0XHRbIHRoaXNbIGRlZmF1bHRLZXkgXSBdOiAhIHRoaXNbIHByb3BLZXkgXVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSmV0Rm9ybUVkaXRvclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9KZXRGb3JtRWRpdG9yUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0pldEZvcm1FZGl0b3JSb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzZmY3MTgwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0pldEZvcm1FZGl0b3JSb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9KZXRGb3JtRWRpdG9yUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuamV0XFxcXGpmYi1lZGl0b3JcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjNmZjcxODAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjNmZjcxODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjNmZjcxODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0pldEZvcm1FZGl0b3JSb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzZmY3MTgwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIzZmY3MTgwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvZW5naW5lLWVkaXRvci9KZXRGb3JtRWRpdG9yUm93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBFZGl0b3JEYXRhIGZyb20gXCIuL2FjdGlvbnMvRWRpdG9yRGF0YVwiO1xyXG5pbXBvcnQgSmV0Rm9ybUVkaXRvclJvdyBmcm9tIFwiLi9lbmdpbmUtZWRpdG9yL0pldEZvcm1FZGl0b3JSb3dcIjtcclxuXHJcbmNvbnN0IEFjdGlvbnMgPSB7IEVkaXRvckRhdGEgfTtcclxuXHJcbmV4cG9ydCB7IEFjdGlvbnMsIEpldEZvcm1FZGl0b3JSb3cgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);