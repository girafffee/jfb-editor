/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/harmony-module.js?");

/***/ }),

/***/ "./components/RepeaterWithState.js":
/*!*****************************************!*\
  !*** ./components/RepeaterWithState.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar __ = wp.i18n.__;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    ButtonGroup = _wp$components.ButtonGroup,\n    Card = _wp$components.Card,\n    CardBody = _wp$components.CardBody,\n    CardHeader = _wp$components.CardHeader,\n    ToggleControl = _wp$components.ToggleControl;\nvar _wp$element = wp.element,\n    useState = _wp$element.useState,\n    useEffect = _wp$element.useEffect;\n\nfunction RepeaterWithState(_ref) {\n  var children = _ref.children,\n      ItemHeading = _ref.ItemHeading,\n      _ref$repeaterClasses = _ref.repeaterClasses,\n      repeaterClasses = _ref$repeaterClasses === void 0 ? [] : _ref$repeaterClasses,\n      _ref$repeaterItemClas = _ref.repeaterItemClasses,\n      repeaterItemClasses = _ref$repeaterItemClas === void 0 ? [] : _ref$repeaterItemClas,\n      newItem = _ref.newItem,\n      _ref$addNewButtonLabe = _ref.addNewButtonLabel,\n      addNewButtonLabel = _ref$addNewButtonLabe === void 0 ? 'Add New' : _ref$addNewButtonLabe,\n      _ref$items = _ref.items,\n      items = _ref$items === void 0 ? [] : _ref$items,\n      isSaveAction = _ref.isSaveAction,\n      onSaveItems = _ref.onSaveItems,\n      onUnMount = _ref.onUnMount,\n      onAddNewItem = _ref.onAddNewItem,\n      onRemoveItem = _ref.onRemoveItem,\n      _ref$help = _ref.help,\n      help = _ref$help === void 0 ? {\n    helpSource: {},\n    helpVisible: function helpVisible() {\n      return false;\n    },\n    helpKey: ''\n  } : _ref$help;\n  var classNames = ['jet-form-builder__repeater-component'].concat(_toConsumableArray(repeaterClasses)).join(' ');\n  var itemClassNames = ['jet-form-builder__repeater-component-item'].concat(_toConsumableArray(repeaterItemClasses)).join(' ');\n\n  var parsedItems = function parsedItems() {\n    if (items && items.length > 0) {\n      var cloneItems = _toConsumableArray(items);\n\n      cloneItems.forEach(function (item) {\n        item.__visible = false;\n      });\n      return cloneItems;\n    } else {\n      return [_objectSpread(_objectSpread({}, newItem), {}, {\n        __visible: true\n      })];\n    }\n  };\n\n  var _useState = useState(function () {\n    return parsedItems();\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      itemsData = _useState2[0],\n      setItemsData = _useState2[1];\n\n  var _useState3 = useState(true),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isSafeDeleting = _useState4[0],\n      setSafeDeleting = _useState4[1];\n\n  var _changeCurrentItem = function changeCurrentItem(valueToSet, index) {\n    setItemsData(function (prev) {\n      prev[index] = _objectSpread(_objectSpread({}, prev[index]), valueToSet);\n      return _toConsumableArray(prev);\n    });\n  };\n\n  var onSaveDeleting = function onSaveDeleting(index) {\n    return confirm(__(\"Are you sure you want to remove item \".concat(index + 1, \"?\"), 'jet-form-builder'));\n  };\n\n  var removeOption = function removeOption(index) {\n    if (isSafeDeleting && !onSaveDeleting(index) || onRemoveItem && !onRemoveItem(index, itemsData)) {\n      return;\n    }\n\n    setItemsData(function (prev) {\n      var clonePrev = _toConsumableArray(prev);\n\n      clonePrev.splice(index, 1);\n      return clonePrev;\n    });\n  };\n\n  var addNewItem = function addNewItem(value) {\n    if (onAddNewItem) {\n      onAddNewItem(value, itemsData);\n    }\n\n    setItemsData(function (prev) {\n      return [].concat(_toConsumableArray(prev), [_objectSpread(_objectSpread({}, value), {}, {\n        __visible: true\n      })]);\n    });\n  };\n\n  var cloneItem = function cloneItem(index) {\n    setItemsData(function (prev) {\n      var _ref2 = [prev.slice(0, index + 1), prev.slice(index + 1)],\n          before = _ref2[0],\n          after = _ref2[1];\n      return [].concat(_toConsumableArray(before), [lodash.assign({}, prev[index])], _toConsumableArray(after));\n    });\n  };\n\n  var moveRepeaterItem = function moveRepeaterItem(_ref3) {\n    var oldIndex = _ref3.oldIndex,\n        newIndex = _ref3.newIndex;\n    setItemsData(function (prev) {\n      var _ref4 = [prev[oldIndex], prev[newIndex]];\n      prev[newIndex] = _ref4[0];\n      prev[oldIndex] = _ref4[1];\n      return _toConsumableArray(prev);\n    });\n  };\n\n  var moveUp = function moveUp(index) {\n    moveRepeaterItem({\n      oldIndex: index,\n      newIndex: index - 1\n    });\n  };\n\n  var moveDown = function moveDown(index) {\n    moveRepeaterItem({\n      oldIndex: index,\n      newIndex: index + 1\n    });\n  };\n\n  var isDisabledEnd = function isDisabledEnd(index) {\n    return !(index < itemsData.length - 1);\n  };\n\n  var toggleVisible = function toggleVisible(index) {\n    setItemsData(function (prev) {\n      prev[index].__visible = !prev[index].__visible;\n      return _toConsumableArray(prev);\n    });\n  };\n\n  useEffect(function () {\n    if (true === isSaveAction) {\n      var cloneItems = _toConsumableArray(itemsData);\n\n      if (onSaveItems) {\n        cloneItems.forEach(function (item, index) {\n          for (var itemKey in item) {\n            if (itemKey.startsWith('__')) {\n              delete cloneItems[index][itemKey];\n            }\n          }\n        });\n        onSaveItems(cloneItems);\n      }\n\n      onUnMount();\n    } else if (false === isSaveAction) {\n      onUnMount();\n    }\n  }, [isSaveAction]);\n\n  var getRepeaterItemId = function getRepeaterItemId(index) {\n    return \"jet-form-builder-repeater__item_\".concat(index);\n  };\n\n  var RepeaterItem = function RepeaterItem(_ref5) {\n    var currentItem = _ref5.currentItem,\n        index = _ref5.index;\n    return wp.element.createElement(Card, {\n      isElevated: true,\n      className: itemClassNames,\n      key: getRepeaterItemId(index),\n      id: getRepeaterItemId(index)\n    }, wp.element.createElement(CardHeader, {\n      className: 'repeater__item__header'\n    }, wp.element.createElement(\"div\", {\n      className: \"repeater-item__left-heading\"\n    }, wp.element.createElement(ButtonGroup, {\n      className: 'repeater-action-buttons'\n    }, wp.element.createElement(Button, {\n      isSmall: true,\n      icon: currentItem.__visible ? 'visibility' : 'hidden',\n      onClick: function onClick() {\n        return toggleVisible(index);\n      },\n      className: 'repeater-action-button'\n    }), wp.element.createElement(Button, {\n      isSmall: true,\n      isSecondary: true,\n      disabled: !Boolean(index),\n      icon: 'arrow-up-alt2',\n      onClick: function onClick() {\n        return moveUp(index);\n      },\n      className: 'repeater-action-button'\n    }), wp.element.createElement(Button, {\n      isSmall: true,\n      isSecondary: true,\n      disabled: isDisabledEnd(index),\n      icon: 'arrow-down-alt2',\n      onClick: function onClick() {\n        return moveDown(index);\n      },\n      className: 'repeater-action-button'\n    })), wp.element.createElement(\"span\", {\n      className: 'repeater-item-title'\n    }, ItemHeading && wp.element.createElement(ItemHeading, {\n      currentItem: currentItem,\n      index: index,\n      changeCurrentItem: function changeCurrentItem(data) {\n        return _changeCurrentItem(data, index);\n      }\n    }), !ItemHeading && \"#\".concat(index + 1))), wp.element.createElement(ButtonGroup, null, wp.element.createElement(Button, {\n      isSmall: true,\n      isSecondary: true,\n      onClick: function onClick() {\n        return cloneItem(index);\n      }\n    }, __('Clone', 'jet-form-builder')), wp.element.createElement(Button, {\n      isSmall: true,\n      isSecondary: true,\n      isDestructive: true,\n      onClick: function onClick() {\n        return removeOption(index);\n      }\n    }, __('Delete', 'jet-form-builder')))), currentItem.__visible && wp.element.createElement(CardBody, {\n      className: 'repeater-item__content'\n    }, children && wp.element.createElement(React.Fragment, {\n      key: \"repeater-component__item_\".concat(index)\n    }, 'function' === typeof children && children({\n      currentItem: currentItem,\n      changeCurrentItem: function changeCurrentItem(data) {\n        return _changeCurrentItem(data, index);\n      }\n    }), 'function' !== typeof children && children), !children && 'Set up your Repeater Template, please.'));\n  };\n\n  var helpSource = help.helpSource,\n      helpVisible = help.helpVisible,\n      helpKey = help.helpKey;\n  var isVisibleHelp = helpVisible(itemsData) && helpSource && helpSource[helpKey];\n  return wp.element.createElement(\"div\", {\n    className: classNames,\n    key: 'jet-form-builder-repeater'\n  }, isVisibleHelp && wp.element.createElement(\"p\", null, helpSource[helpKey].label), 0 < itemsData.length && wp.element.createElement(ToggleControl, {\n    label: __('Safe deleting'),\n    checked: isSafeDeleting,\n    onChange: setSafeDeleting\n  }), itemsData.map(function (currentItem, index) {\n    return RepeaterItem({\n      currentItem: currentItem,\n      index: index\n    });\n  }), 1 < itemsData.length && wp.element.createElement(ToggleControl, {\n    className: \"jet-control-clear\",\n    label: __('Safe deleting'),\n    checked: isSafeDeleting,\n    onChange: setSafeDeleting\n  }), wp.element.createElement(Button, {\n    isSecondary: true,\n    onClick: function onClick() {\n      return addNewItem(newItem);\n    }\n  }, addNewButtonLabel));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RepeaterWithState);\n\n//# sourceURL=webpack:///./components/RepeaterWithState.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_RepeaterWithState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/RepeaterWithState */ \"./components/RepeaterWithState.js\");\n\n\nmodule.exports = function () {\n  return {\n    RepeaterWithState: _components_RepeaterWithState__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  };\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });