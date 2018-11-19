(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/APRLogic.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/APR.ts":
/*!*******************!*\
  !*** ./ts/APR.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var webapi_1 = __webpack_require__(/*! ./webapi */ "./ts/webapi.ts");
var ServiceLineNames;
(function (ServiceLineNames) {
    ServiceLineNames["Materials"] = "ter_materials";
    ServiceLineNames["Geotechnical"] = "ter_geotechnical";
    ServiceLineNames["Facilities"] = "ter_facilities";
    ServiceLineNames["Environmental"] = "ter_environmental";
})(ServiceLineNames || (ServiceLineNames = {}));
var TelecommunicationFacilityType = "Telecommunications";
var ProjectTypes;
(function (ProjectTypes) {
    ProjectTypes["Rail"] = "2040";
    ProjectTypes["Intermodal"] = "2035";
})(ProjectTypes || (ProjectTypes = {}));
var PRG;
(function (PRG) {
    PRG["IndustrialHygiene"] = "Industrial Hygiene";
    PRG["NaturalResources"] = "Natural Resources";
    PRG["ESA"] = "ESA";
    PRG["Asbestos"] = "Asbestos";
    PRG["Remediation"] = "Remediation";
    PRG["RegulatoryCompliance"] = "Regulatory Compliance";
    PRG["SiteInvestigation"] = "Site Investigation";
    PRG["SolidWaste"] = "Solid Waste";
})(PRG || (PRG = {}));
var GroupNames;
(function (GroupNames) {
    GroupNames["ENVAsbestos"] = "ter_aprenvasbestos";
    GroupNames["ENVEnvironmentalRemediationDesign"] = "ter_aprenvenvremdesign";
    GroupNames["ENVIndustrialHygieneSafety"] = "ter_aprenvindhygiene";
    GroupNames["ENVNaturalCulturalResources"] = "ter_aprenvnatcultres";
    GroupNames["ENVPhase1ESA"] = "ter_aprenvphase1esa";
    GroupNames["ENVRegulatoryCompliance"] = "ter_aprenvregcomp";
    GroupNames["ENVSiteInvestigationRBCA"] = "ter_aprenvsiteinvrbca";
    GroupNames["ENVTelecommunicationsNEPA"] = "ter_aprenvtelenepa";
    GroupNames["FACAquatics"] = "ter_aprfacaquatics";
    GroupNames["FACBuildingEnclosureConsulting"] = "ter_aprfacbuildencloseconsult";
    GroupNames["FACEngineeringDiagnostics"] = "ter_aprfacengdiag";
    GroupNames["FACMechanicalElectricalandPlumbing"] = "ter_aprfacmechelecplumb";
    GroupNames["FACPropertyConditionAssesment"] = "ter_aprfacpropconasses";
    GroupNames["GEOGeoDesign"] = "ter_aprgeogeodesign";
    GroupNames["GEOGeotechnical"] = "ter_adaprgeogeotechnical";
    GroupNames["GEOPavementEngineering"] = "ter_aprgeopaveeng";
    GroupNames["GEORailIntermodal"] = "ter_aprgeorailinterm";
    GroupNames["MATConstructionMaterialsandInspection"] = "ter_aprmatconstmatuinspect";
    GroupNames["MATMaterials"] = "ter_aprmatmaterials";
    GroupNames["MATMaterialsEngTestingandInspect"] = "ter_aprmatmatengtestinspect";
    GroupNames["ADARPENVSolidWaste"] = "ter_arpenvsolidwaste";
})(GroupNames || (GroupNames = {}));
var APR = (function () {
    function APR(formContext) {
        this.formContext = formContext;
        this.api = new webapi_1.webapi();
        this.filterExpression = "";
        this.serviceLines = {};
        this.facilityTypes = {};
        this.projectTypes = {};
        this.marketServices = {};
        this.initialized = false;
        this.isValid = false;
    }
    APR.create = function (formContext) {
        var apr = new APR(formContext);
        return apr.init().then(function () { return apr; });
    };
    APR.prototype.init = function () {
        var _this = this;
        this.aprLookup = this.formContext.getControl("ter_authorizedprojectreviewerapr");
        this.serviceLines["ter_materials"] = false;
        this.serviceLines["ter_geotechnical"] = false;
        this.serviceLines["ter_facilities"] = false;
        this.serviceLines["ter_environmental"] = false;
        this.facilityTypes[TelecommunicationFacilityType] = false;
        this.attachEventHandlers();
        return this.initObjects()
            .then(function () {
            return (_this.initialized = true);
        });
    };
    APR.prototype.applyGroupFilter = function () {
        var fieldNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fieldNames[_i] = arguments[_i];
        }
        var conditions = "";
        fieldNames.forEach(function (fieldName) {
            conditions += "<condition attribute='" + fieldName + "' operator='eq' value='true' />";
        });
        return "<filter type='or'>" + conditions + "</filter>";
    };
    APR.prototype.setAPRToEmpty = function () {
        return "<filter type='and'><condition attribute='modifiedon' operator='null' /></filter>";
    };
    APR.prototype.initObjects = function () {
        var requests = [];
        for (var serviceLine in this.serviceLines) {
            var attr = this.formContext.getAttribute(serviceLine);
            requests.push(this.serviceLineEventHandler(attr, true));
        }
        var facilityTypeAttr = this.formContext.getAttribute("ter_facilitytype");
        requests.push(this.facilityTypeEventHandler(facilityTypeAttr, true));
        var projectTypeAttr = this.formContext.getAttribute("ter_projecttype");
        requests.push(this.projectTypeEventHandler(projectTypeAttr, true));
        var marketServiceAttr = this.formContext.getAttribute("ter_marketservices");
        requests.push(this.marketServicesEventHandler(marketServiceAttr, true));
        return $.when.apply($, requests);
    };
    APR.createValidationObject = function (isOK, messages) {
        return {
            sygnal: isOK,
            messages: messages
        };
    };
    APR.prototype.canUnlock = function () {
        var messages = [];
        var isServiceLinesValid = false;
        for (var name in this.serviceLines) {
            if (this.serviceLines[name]) {
                isServiceLinesValid = true;
                break;
            }
        }
        if (!isServiceLinesValid) {
            messages.push("There is no Service Line selected");
        }
        var isFacilityTypesValid = false;
        var isProjectTypesValid = false;
        for (var name in this.facilityTypes) {
            if (this.facilityTypes[name]) {
                isFacilityTypesValid = true;
                break;
            }
        }
        for (var name in this.projectTypes) {
            if (this.projectTypes[name]) {
                isProjectTypesValid = true;
            }
        }
        if (!isFacilityTypesValid) {
            messages.push("There is no Facility Type selected");
        }
        if (!isProjectTypesValid) {
            messages.push("There is no Project Type selected");
        }
        var isMarketServicesValid = false;
        for (var name in this.marketServices) {
            if (this.marketServices[name]) {
                isMarketServicesValid = true;
                break;
            }
        }
        if (!isMarketServicesValid) {
            messages.push("There is no Market Service selected");
        }
        return APR.createValidationObject((messages.length === 0), messages);
    };
    APR.prototype.getValue = function () {
        var val = this.aprLookup.getAttribute().getValue();
        return val && val[0] ? val[0] : null;
    };
    APR.prototype.render = function () {
        var _this = this;
        if (!this.initialized) {
            console.log("Component have not initialized yet");
            return;
        }
        var unLockSepaphore = this.canUnlock();
        if (!unLockSepaphore.sygnal) {
            this.filterExpression = this.setAPRToEmpty();
            this.aprLookup.setDisabled(true);
            Xrm.Utility.alertDialog("Service Line, Facility / Project Type, AND the new Marketing Services must be assigned first \n " + unLockSepaphore.messages.reduce(function (acc, part) { return acc + ', ' + part; }), function () { });
            return;
        }
        else {
            this.aprLookup.setDisabled(false);
        }
        if (this.serviceLines["ter_environmental"] && this.facilityTypes[TelecommunicationFacilityType] &&
            (this.marketServices[282590077] ||
                this.marketServices[282590078])) {
            this.filterExpression = this.applyGroupFilter("ter_aprenvtelenepa");
        }
        else if (this.serviceLines["ter_environmental"] &&
            (this.marketServices[282590049] ||
                this.marketServices[282590050] ||
                this.marketServices[282590051] ||
                this.marketServices[282590054] ||
                this.marketServices[282590055] ||
                this.marketServices[282590056] ||
                this.marketServices[282590057] ||
                this.marketServices[282590064] ||
                this.marketServices[282590074] ||
                this.marketServices[282590075] ||
                this.marketServices[282590080] ||
                this.marketServices[282590089])) {
            this.filterExpression = this.applyGroupFilter("ter_aprenvindhygiene");
        }
        else if (this.serviceLines["ter_environmental"] &&
            (this.marketServices[282590014] ||
                this.marketServices[282590024] ||
                this.marketServices[282590028] ||
                this.marketServices[282590035] ||
                this.marketServices[282590040] ||
                this.marketServices[282590043] ||
                this.marketServices[282590060] ||
                this.marketServices[282590076] ||
                this.marketServices[282590077] ||
                this.marketServices[282590078] ||
                this.marketServices[282590121] ||
                this.marketServices[282590129] ||
                this.marketServices[282590132] ||
                this.marketServices[282590133])) {
            this.filterExpression = this.applyGroupFilter("ter_aprenvnatcultres");
        }
        else if (this.serviceLines["ter_environmental"] &&
            (this.marketServices[282590029] ||
                this.marketServices[282590033] ||
                this.marketServices[282590086] ||
                this.marketServices[282590122])) {
            this.filterExpression = this.applyGroupFilter("ter_aprenvphase1esa");
        }
        else if (this.serviceLines["ter_environmental"] &&
            (this.marketServices[282590005] ||
                this.marketServices[282590006] ||
                this.marketServices[282590007] ||
                this.marketServices[282590008] ||
                this.marketServices[282590009] ||
                this.marketServices[282590010] ||
                this.marketServices[282590011])) {
            this.filterExpression = this.applyGroupFilter("ter_aprenvasbestos");
        }
        else if (this.serviceLines["ter_environmental"] &&
            (this.marketServices[282590026] ||
                this.marketServices[282590044] ||
                this.marketServices[282590067] ||
                this.marketServices[282590093] ||
                this.marketServices[282590094] ||
                this.marketServices[282590095] ||
                this.marketServices[282590096] ||
                this.marketServices[282590097] ||
                this.marketServices[282590098] ||
                this.marketServices[282590099] ||
                this.marketServices[282590100] ||
                this.marketServices[282590101] ||
                this.marketServices[282590126] ||
                this.marketServices[282590127])) {
            this.filterExpression = this.applyGroupFilter("ter_aprenvenvremdesign");
        }
        else if (this.serviceLines["ter_environmental"] &&
            (this.marketServices[282590001] ||
                this.marketServices[282590002] ||
                this.marketServices[282590019] ||
                this.marketServices[282590065] ||
                this.marketServices[282590083] ||
                this.marketServices[282590087] ||
                this.marketServices[282590090] ||
                this.marketServices[282590091] ||
                this.marketServices[282590092] ||
                this.marketServices[282590115] ||
                this.marketServices[282590117] ||
                this.marketServices[282590128] ||
                this.marketServices[282590130] ||
                this.marketServices[282590131])) {
            this.filterExpression = this.applyGroupFilter("ter_aprenvregcomp");
        }
        else if (this.serviceLines["ter_environmental"] &&
            (this.marketServices[282590015] ||
                this.marketServices[282590027] ||
                this.marketServices[282590039] ||
                this.marketServices[282590041] ||
                this.marketServices[282590047] ||
                this.marketServices[282590068] ||
                this.marketServices[282590069] ||
                this.marketServices[282590104] ||
                this.marketServices[282590107] ||
                this.marketServices[282590124] ||
                this.marketServices[282590125])) {
            this.filterExpression = this.applyGroupFilter("ter_aprenvsiteinvrbca");
        }
        else if (this.serviceLines["ter_environmental"] &&
            (this.marketServices[282590046] ||
                this.marketServices[282590061] ||
                this.marketServices[282590062] ||
                this.marketServices[282590063] ||
                this.marketServices[282590110] ||
                this.marketServices[282590111] ||
                this.marketServices[282590112])) {
            this.filterExpression = this.applyGroupFilter("ter_arpenvsolidwaste");
        }
        else if (this.serviceLines["ter_facilities"]) {
            this.filterExpression = this.applyGroupFilter("ter_aprfacaquatics", "ter_aprfacbuildencloseconsult", "ter_aprfacengdiag", "ter_aprfacmechelecplumb", "ter_aprfacpropconasses");
        }
        else if (this.serviceLines["ter_geotechnical"]) {
            this.filterExpression = this.applyGroupFilter("ter_aprgeogeodesign", "ter_adaprgeogeotechnical", "ter_aprgeopaveeng", "ter_aprgeorailinterm");
        }
        else if (this.serviceLines["ter_geotechnical"] &&
            (this.projectTypes["2040"] || this.projectTypes["2035"])) {
            this.filterExpression = this.applyGroupFilter("ter_aprgeorailinterm");
        }
        else if (this.serviceLines["ter_materials"]) {
            this.filterExpression = this.applyGroupFilter("ter_aprmatconstmatuinspect", "ter_aprmatmaterials", "ter_aprmatmatengtestinspect");
        }
        else {
            this.filterExpression = this.setAPRToEmpty();
        }
        this.validate().then(function () {
            if (!_this.isValid) {
                _this.aprLookup.addNotification({
                    messages: ["APR is not correct"],
                    notificationLevel: "ERROR",
                    uniqueId: "apr_is_not_valid"
                });
                Xrm.Utility.alertDialog("APR is not correct because of combination of Service Line, Facility/Project Type, and/or Marketing Services. Save will be blocked", function () { });
            }
            else {
                _this.aprLookup.clearNotification('apr_is_not_valid');
            }
        });
    };
    APR.prototype.validate = function () {
        var _this = this;
        var aprValue = this.getValue();
        if (!aprValue) {
            this.isValid = true;
            return $.when();
        }
        var fetchXml = "<fetch top=\"1\">\n                <entity name=\"vs360_employee\">\n                    <attribute name=\"vs360_employeeid\" />\n                    <filter>\n\t\t\t            <condition attribute=\"vs360_employeeid\" operator=\"eq\" value=\"" + aprValue.id + "\" />\n\t\t            </filter>\n                    " + this.filterExpression + "\n                </entity>\n            </fetch>";
        return this.api.request("vs360_employees?fetchXml=" + fetchXml, "GET")
            .then(webapi_1.webapi.takeValue)
            .then(function (records) {
            return (_this.isValid = (records.length > 0));
        });
    };
    APR.prototype.preSearchHandler = function (handler) {
        this.aprLookup.addCustomFilter(this.filterExpression);
    };
    APR.prototype.attachEventHandlers = function () {
        this.attachAPRAttribute();
        this.attachOnSave();
        this.aprLookup.addPreSearch(this.preSearchHandler.bind(this));
        this.attachServiceLineAttributesEventHandlers();
        this.attachFacilityType();
        this.attachProjectType();
        this.attachMarketServices();
    };
    APR.prototype.attachServiceLineAttributesEventHandlers = function () {
        var _this = this;
        for (var serviceLine in this.serviceLines) {
            var attr = this.formContext.getAttribute(serviceLine);
            attr.addOnChange(function (handler) { return _this.serviceLineEventHandler(handler.getEventSource()); });
        }
    };
    APR.prototype.attachFacilityType = function () {
        var _this = this;
        var attr = this.formContext.getAttribute("ter_facilitytype");
        attr.addOnChange(function (handler) { return _this.facilityTypeEventHandler(handler.getEventSource()); });
    };
    APR.prototype.attachProjectType = function () {
        var _this = this;
        var attr = this.formContext.getAttribute("ter_projecttype");
        attr.addOnChange(function (handler) { return _this.projectTypeEventHandler(handler.getEventSource()); });
    };
    APR.prototype.attachMarketServices = function () {
        var _this = this;
        var attr = this.formContext.getAttribute("ter_marketservices");
        attr.addOnChange(function (handler) { return _this.marketServicesEventHandler(handler.getEventSource()); });
    };
    APR.prototype.attachAPRAttribute = function () {
        var _this = this;
        var attr = this.aprLookup.getAttribute();
        attr.addOnChange(function (handler) { return _this.render(); });
    };
    APR.prototype.attachOnSave = function () {
        var _this = this;
        this.formContext.data.entity.addOnSave(function (context) { return _this.onSaveHandler(context); });
    };
    APR.prototype.onSaveHandler = function (context) {
        var _this = this;
        var args = context.getEventArgs();
        if (args.isDefaultPrevented()) {
            return;
        }
        this.validate()
            .then(function () {
            if (_this.isValid) {
                _this.formContext.data.save();
            }
        });
        if (!this.isValid) {
            args.preventDefault();
        }
    };
    APR.prototype.serviceLineEventHandler = function (attribute, stopRender) {
        var val = attribute.getValue();
        this.serviceLines[attribute.getName()] = val || false;
        if (!stopRender)
            this.render();
        return $.when();
    };
    APR.prototype.facilityTypeEventHandler = function (attribute, stopRender) {
        var val = attribute.getValue();
        this.facilityTypes = {};
        if (val && val.length > 0) {
            this.facilityTypes[val[0].name] = true;
        }
        if (!stopRender)
            this.render();
        return $.when();
    };
    APR.prototype.projectTypeEventHandler = function (attribute, stopRender) {
        var _this = this;
        var val = attribute.getValue();
        this.projectTypes = {};
        if (!val || val.length === 0) {
            if (!stopRender)
                this.render();
            return $.when();
        }
        return this.api.request("ter_projecttypes(" + val[0].id.replace(/[\{\}]/g, "") + ")?$select=ter_projecttypecode", "GET")
            .fail(webapi_1.webapi.fail)
            .then(function (projectType) {
            var codeString = "" + projectType.ter_projecttypecode;
            _this.projectTypes[codeString] = true;
            if (!stopRender)
                _this.render();
        });
    };
    APR.prototype.marketServicesEventHandler = function (attribute, stopRender) {
        var options = attribute.getValue();
        this.marketServices = {};
        if (options) {
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                this.marketServices[option] = true;
            }
        }
        if (!stopRender)
            this.render();
        return $.when();
    };
    return APR;
}());
exports.APR = APR;


/***/ }),

/***/ "./ts/APRLogic.ts":
/*!************************!*\
  !*** ./ts/APRLogic.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APR_1 = __webpack_require__(/*! ./APR */ "./ts/APR.ts");
var APRLogic;
(function (APRLogic) {
    var apr;
    function onInit(context) {
        var formContext = context.getFormContext();
        return APR_1.APR.create(formContext)
            .then(function (instance) {
            apr = instance;
            apr.render();
        });
    }
    APRLogic.onInit = onInit;
})(APRLogic = exports.APRLogic || (exports.APRLogic = {}));


/***/ }),

/***/ "./ts/CrmContext.ts":
/*!**************************!*\
  !*** ./ts/CrmContext.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CrmContext = (function () {
    function CrmContext() {
    }
    CrmContext.prototype.getContext = function () {
        var errorMessage = "Context is not available.";
        if (typeof GetGlobalContext != "undefined") {
            return GetGlobalContext();
        }
        else {
            if (typeof Xrm != "undefined") {
                if (Xrm.Utility && Xrm.Utility.getGlobalContext) {
                    return Xrm.Utility.getGlobalContext();
                }
                return Xrm.Page.context;
            }
            else {
                throw new Error(errorMessage);
            }
        }
    };
    return CrmContext;
}());
exports.CrmContext = CrmContext;
;


/***/ }),

/***/ "./ts/webapi.ts":
/*!**********************!*\
  !*** ./ts/webapi.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CrmContext_1 = __webpack_require__(/*! ./CrmContext */ "./ts/CrmContext.ts");
var webapi = (function () {
    function webapi() {
        this.context = new CrmContext_1.CrmContext().getContext();
        this.clientUrl = this.context.getClientUrl();
        this.odataUrl = this.mergeUrlParts(this.clientUrl, "/api/data/v8.2/");
    }
    ;
    webapi.prototype.request = function (relatedUrl, method, data, options, setRequestHeader) {
        var _this = this;
        var url = this.mergeUrlParts(this.odataUrl, encodeURI(relatedUrl));
        var def = $.Deferred();
        console.log(url);
        return $.ajax($.extend({}, options, {
            url: url,
            type: method || "GET",
            cache: "false",
            data: data ? JSON.stringify(data) : null,
            processData: false,
            beforeSend: function (xhr) { _this.beforeSend(xhr, setRequestHeader); },
            contentType: "application/json; charset=utf-8",
            datatype: "json",
        }));
    };
    ;
    webapi.prototype.requestByFetchXml = function (entityCollectionName, fetchXml, options, setRequestHeader) {
        var _this = this;
        var url = this.mergeUrlParts(this.odataUrl, "$batch");
        var batchName = "approvallogfetch_batch_" + (Math.random() + "").replace(/[,\.]/, "");
        var request = webapi.createFetchBatchRequest(batchName, this.mergeUrlParts(this.odataUrl, entityCollectionName + "?fetchXml=" + fetchXml));
        console.log(url);
        return $.ajax($.extend({}, options, {
            url: url,
            type: "POST",
            cache: "false",
            data: request,
            processData: false,
            beforeSend: function (xhr) { _this.beforeSend(xhr, setRequestHeader); },
            contentType: "multipart/mixed;boundary=" + batchName,
        }))
            .then(function (response) {
            console.log(response);
            return JSON.parse(response.substring(response.indexOf('{'), response.lastIndexOf('}') + 1));
        });
    };
    ;
    webapi.createFetchBatchRequest = function (batchName, fetchXmlUrl) {
        var bodyCollector = ["--" + batchName];
        bodyCollector.push("Content-Type: application/http");
        bodyCollector.push("Content-Transfer-Encoding: binary");
        bodyCollector.push("");
        bodyCollector.push("GET " + fetchXmlUrl + " HTTP/1.1");
        bodyCollector.push("Content-Type: application/json");
        bodyCollector.push("OData-Version: 4.0");
        bodyCollector.push("OData-MaxVersion: 4.0");
        bodyCollector.push("");
        bodyCollector.push("--" + batchName + "--");
    };
    webapi.takeValue = function (response) {
        return response.value;
    };
    ;
    webapi.fail = function (error) {
        console.log(error);
    };
    webapi.prototype.beforeSend = function (xhr, customBeforeSend) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("OData-MaxVersion", "4.0");
        xhr.setRequestHeader("OData-Version", "4.0");
        xhr.setRequestHeader("Prefer", "odata.include-annotations=OData.Community.Display.V1.FormattedValue");
        if (customBeforeSend) {
            customBeforeSend(xhr);
        }
    };
    webapi.prototype.mergeUrlParts = function (base, relative) {
        var url1 = base.split("/");
        var url2 = relative.split("/");
        var url3 = [];
        if (url1[0] === "") {
            url1.shift();
        }
        if (url1[url1.length - 1] === "") {
            url1.pop();
        }
        url1.forEach(function (item) {
            url3.push(item);
        });
        if (url2[0] === "") {
            url2.shift();
        }
        if (url2[url2.length - 1] === "") {
            url2.pop();
        }
        url2.forEach(function (item) {
            url3.push(item);
        });
        return url3.join('/');
    };
    ;
    return webapi;
}());
exports.webapi = webapi;


/***/ })

/******/ });
});
//# sourceMappingURL=APRLogic.js.map