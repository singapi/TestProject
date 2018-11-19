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
            _this.initialized = true;
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
            requests.push(this.serviceLineEventHandler(attr));
        }
        var facilityTypeAttr = this.formContext.getAttribute("ter_facilitytype");
        requests.push(this.facilityTypeEventHandler(facilityTypeAttr));
        var projectTypeAttr = this.formContext.getAttribute("ter_projecttype");
        requests.push(this.projectTypeEventHandler(projectTypeAttr));
        var marketServiceAttr = this.formContext.getAttribute("ter_marketservices");
        requests.push(this.marketServicesEventHandler(marketServiceAttr));
        return $.when(requests);
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
    APR.prototype.render = function (shouldRender) {
        var _this = this;
        if (shouldRender) {
            console.log("Stop flag received to render");
            return;
        }
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
    APR.prototype.serviceLineEventHandler = function (attribute, shouldRender) {
        var val = attribute.getValue();
        this.serviceLines[attribute.getName()] = val || false;
        this.render(shouldRender);
        return $.when();
    };
    APR.prototype.facilityTypeEventHandler = function (attribute, shouldRender) {
        var val = attribute.getValue();
        this.facilityTypes = {};
        if (val && val.length > 0) {
            this.facilityTypes[val[0].name] = true;
        }
        this.render(shouldRender);
        return $.when();
    };
    APR.prototype.projectTypeEventHandler = function (attribute, shouldRender) {
        var _this = this;
        var val = attribute.getValue();
        this.projectTypes = {};
        if (!val || val.length === 0) {
            this.render(shouldRender);
            return $.when();
        }
        return this.api.request("ter_projecttypes(" + val[0].id.replace(/[\{\}]/g, "") + ")?$select=ter_projecttypecode", "GET")
            .fail(webapi_1.webapi.fail)
            .then(function (projectType) {
            var codeString = "" + projectType.ter_projecttypecode;
            _this.projectTypes[codeString] = true;
            _this.render(shouldRender);
        });
    };
    APR.prototype.marketServicesEventHandler = function (attribute) {
        var options = attribute.getValue();
        this.marketServices = {};
        if (options) {
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                this.marketServices[option] = true;
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi90cy9BUFIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQVBSTG9naWMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQ3JtQ29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi90cy93ZWJhcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxxRUFBa0M7QUFPbEMsSUFBVyxnQkFLVjtBQUxELFdBQVcsZ0JBQWdCO0lBQ3ZCLCtDQUEyQjtJQUMzQixxREFBaUM7SUFDakMsaURBQTZCO0lBQzdCLHVEQUFtQztBQUN2QyxD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S0FBSyxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUFBLENBQUM7SUFDTixhQUFDO0FBQUQsQ0FBQztBQTdHWSx3QkFBTSIsImZpbGUiOiJBUFJMb2dpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvQVBSTG9naWMudHNcIik7XG4iLCJpbXBvcnQgeyB3ZWJhcGkgfSBmcm9tICcuL3dlYmFwaSc7XHJcblxyXG5pbnRlcmZhY2UgS2V5VmFsdWU8VD4ge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogVFxyXG59XHJcblxyXG5jb25zdCBlbnVtIFNlcnZpY2VMaW5lTmFtZXMge1xyXG4gICAgTWF0ZXJpYWxzID0gXCJ0ZXJfbWF0ZXJpYWxzXCIsXHJcbiAgICBHZW90ZWNobmljYWwgPSBcInRlcl9nZW90ZWNobmljYWxcIixcclxuICAgIEZhY2lsaXRpZXMgPSBcInRlcl9mYWNpbGl0aWVzXCIsXHJcbiAgICBFbnZpcm9ubWVudGFsID0gXCJ0ZXJfZW52aXJvbm1lbnRhbFwiXHJcbn1cclxuXHJcbmNvbnN0IFRlbGVjb21tdW5pY2F0aW9uRmFjaWxpdHlUeXBlID0gXCJUZWxlY29tbXVuaWNhdGlvbnNcIjtcclxuXHJcbmNvbnN0IGVudW0gUHJvamVjdFR5cGVzIHtcclxuICAgIFJhaWwgPSBcIjIwNDBcIixcclxuICAgIEludGVybW9kYWwgPSBcIjIwMzVcIlxyXG59XHJcblxyXG5jb25zdCBlbnVtIFBSRyB7XHJcbiAgICBJbmR1c3RyaWFsSHlnaWVuZSA9IFwiSW5kdXN0cmlhbCBIeWdpZW5lXCIsXHJcbiAgICBOYXR1cmFsUmVzb3VyY2VzID0gXCJOYXR1cmFsIFJlc291cmNlc1wiLFxyXG4gICAgRVNBID0gXCJFU0FcIixcclxuICAgIEFzYmVzdG9zID0gXCJBc2Jlc3Rvc1wiLFxyXG4gICAgUmVtZWRpYXRpb24gPSBcIlJlbWVkaWF0aW9uXCIsXHJcbiAgICBSZWd1bGF0b3J5Q29tcGxpYW5jZSA9IFwiUmVndWxhdG9yeSBDb21wbGlhbmNlXCIsXHJcbiAgICBTaXRlSW52ZXN0aWdhdGlvbiA9IFwiU2l0ZSBJbnZlc3RpZ2F0aW9uXCIsXHJcbiAgICBTb2xpZFdhc3RlID0gXCJTb2xpZCBXYXN0ZVwiXHJcbn1cclxuXHJcbmNvbnN0IGVudW0gR3JvdXBOYW1lcyB7XHJcbiAgICBFTlZBc2Jlc3RvcyA9IFwidGVyX2FwcmVudmFzYmVzdG9zXCIsXHJcbiAgICBFTlZFbnZpcm9ubWVudGFsUmVtZWRpYXRpb25EZXNpZ24gPSBcInRlcl9hcHJlbnZlbnZyZW1kZXNpZ25cIixcclxuICAgIEVOVkluZHVzdHJpYWxIeWdpZW5lU2FmZXR5ID0gXCJ0ZXJfYXByZW52aW5kaHlnaWVuZVwiLFxyXG4gICAgRU5WTmF0dXJhbEN1bHR1cmFsUmVzb3VyY2VzID0gXCJ0ZXJfYXByZW52bmF0Y3VsdHJlc1wiLFxyXG4gICAgRU5WUGhhc2UxRVNBID0gXCJ0ZXJfYXByZW52cGhhc2UxZXNhXCIsXHJcbiAgICBFTlZSZWd1bGF0b3J5Q29tcGxpYW5jZSA9IFwidGVyX2FwcmVudnJlZ2NvbXBcIixcclxuICAgIEVOVlNpdGVJbnZlc3RpZ2F0aW9uUkJDQSA9IFwidGVyX2FwcmVudnNpdGVpbnZyYmNhXCIsXHJcbiAgICBFTlZUZWxlY29tbXVuaWNhdGlvbnNORVBBID0gXCJ0ZXJfYXByZW52dGVsZW5lcGFcIixcclxuICAgIEZBQ0FxdWF0aWNzID0gXCJ0ZXJfYXByZmFjYXF1YXRpY3NcIixcclxuICAgIEZBQ0J1aWxkaW5nRW5jbG9zdXJlQ29uc3VsdGluZyA9IFwidGVyX2FwcmZhY2J1aWxkZW5jbG9zZWNvbnN1bHRcIixcclxuICAgIEZBQ0VuZ2luZWVyaW5nRGlhZ25vc3RpY3MgPSBcInRlcl9hcHJmYWNlbmdkaWFnXCIsXHJcbiAgICBGQUNNZWNoYW5pY2FsRWxlY3RyaWNhbGFuZFBsdW1iaW5nID0gXCJ0ZXJfYXByZmFjbWVjaGVsZWNwbHVtYlwiLFxyXG4gICAgRkFDUHJvcGVydHlDb25kaXRpb25Bc3Nlc21lbnQgPSBcInRlcl9hcHJmYWNwcm9wY29uYXNzZXNcIixcclxuICAgIEdFT0dlb0Rlc2lnbiA9IFwidGVyX2Fwcmdlb2dlb2Rlc2lnblwiLFxyXG4gICAgR0VPR2VvdGVjaG5pY2FsID0gXCJ0ZXJfYWRhcHJnZW9nZW90ZWNobmljYWxcIixcclxuICAgIEdFT1BhdmVtZW50RW5naW5lZXJpbmcgPSBcInRlcl9hcHJnZW9wYXZlZW5nXCIsXHJcbiAgICBHRU9SYWlsSW50ZXJtb2RhbCA9IFwidGVyX2Fwcmdlb3JhaWxpbnRlcm1cIixcclxuICAgIE1BVENvbnN0cnVjdGlvbk1hdGVyaWFsc2FuZEluc3BlY3Rpb24gPSBcInRlcl9hcHJtYXRjb25zdG1hdHVpbnNwZWN0XCIsXHJcbiAgICBNQVRNYXRlcmlhbHMgPSBcInRlcl9hcHJtYXRtYXRlcmlhbHNcIixcclxuICAgIE1BVE1hdGVyaWFsc0VuZ1Rlc3RpbmdhbmRJbnNwZWN0ID0gXCJ0ZXJfYXBybWF0bWF0ZW5ndGVzdGluc3BlY3RcIixcclxuICAgIEFEQVJQRU5WU29saWRXYXN0ZSA9IFwidGVyX2FycGVudnNvbGlkd2FzdGVcIlxyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VtYXBob3JlIHtcclxuICAgIG1lc3NhZ2VzOiBzdHJpbmdbXSxcclxuICAgIHN5Z25hbDogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQVBSIHtcclxuICAgIGFwckxvb2t1cDogWHJtLkNvbnRyb2xzLkxvb2t1cENvbnRyb2w7XHJcblxyXG4gICAgcHJpdmF0ZSBhcGk6IHdlYmFwaSA9IG5ldyB3ZWJhcGkoKTtcclxuICAgIHByaXZhdGUgZmlsdGVyRXhwcmVzc2lvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIHNlcnZpY2VMaW5lczogeyBbbmFtZTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBwcml2YXRlIGZhY2lsaXR5VHlwZXM6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0VHlwZXM6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBtYXJrZXRTZXJ2aWNlczogeyBbbmFtZTogbnVtYmVyXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICAvL3ByaXZhdGUgcHJnczogeyBbbmFtZTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1ZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocHVibGljIGZvcm1Db250ZXh0OiBYcm0uRm9ybUNvbnRleHQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShmb3JtQ29udGV4dDogWHJtLkZvcm1Db250ZXh0KTogSlF1ZXJ5UHJvbWlzZTxBUFI+IHtcclxuICAgICAgICBjb25zdCBhcHIgPSBuZXcgQVBSKGZvcm1Db250ZXh0KTtcclxuICAgICAgICByZXR1cm4gYXByLmluaXQoKS50aGVuKCgpID0+IGFwcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB0aGlzLmFwckxvb2t1cCA9IHRoaXMuZm9ybUNvbnRleHQuZ2V0Q29udHJvbDxYcm0uQ29udHJvbHMuTG9va3VwQ29udHJvbD4oXCJ0ZXJfYXV0aG9yaXplZHByb2plY3RyZXZpZXdlcmFwclwiKTtcclxuXHJcbiAgICAgICAgLy9zZXJ2aWNlIGxpbmVzXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5NYXRlcmlhbHNdID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5HZW90ZWNobmljYWxdID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5GYWNpbGl0aWVzXSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9mYWNpbGl0eSB0eXBlc1xyXG4gICAgICAgIHRoaXMuZmFjaWxpdHlUeXBlc1tUZWxlY29tbXVuaWNhdGlvbkZhY2lsaXR5VHlwZV0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudEhhbmRsZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdE9iamVjdHMoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseUdyb3VwRmlsdGVyKC4uLmZpZWxkTmFtZXM6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY29uZGl0aW9ucyA9IFwiXCI7XHJcbiAgICAgICAgZmllbGROYW1lcy5mb3JFYWNoKChmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25kaXRpb25zICs9IGA8Y29uZGl0aW9uIGF0dHJpYnV0ZT0nJHtmaWVsZE5hbWV9JyBvcGVyYXRvcj0nZXEnIHZhbHVlPSd0cnVlJyAvPmA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYDxmaWx0ZXIgdHlwZT0nb3InPiR7Y29uZGl0aW9uc308L2ZpbHRlcj5gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QVBSVG9FbXB0eSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgPGZpbHRlciB0eXBlPSdhbmQnPjxjb25kaXRpb24gYXR0cmlidXRlPSdtb2RpZmllZG9uJyBvcGVyYXRvcj0nbnVsbCcgLz48L2ZpbHRlcj5gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdE9iamVjdHMoKTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAvLyBzZXJ2aWNlIGxpbmVzXHJcbiAgICAgICAgbGV0IHJlcXVlc3RzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHNlcnZpY2VMaW5lIGluIHRoaXMuc2VydmljZUxpbmVzKSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyID0gdGhpcy5mb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoc2VydmljZUxpbmUpIGFzIFhybS5BdHRyaWJ1dGVzLkJvb2xlYW5BdHRyaWJ1dGU7XHJcbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2godGhpcy5zZXJ2aWNlTGluZUV2ZW50SGFuZGxlcihhdHRyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmYWNpbGl0eSB0eXBlXHJcbiAgICAgICAgbGV0IGZhY2lsaXR5VHlwZUF0dHIgPSB0aGlzLmZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShcInRlcl9mYWNpbGl0eXR5cGVcIikgYXMgWHJtLkF0dHJpYnV0ZXMuTG9va3VwQXR0cmlidXRlO1xyXG4gICAgICAgIHJlcXVlc3RzLnB1c2godGhpcy5mYWNpbGl0eVR5cGVFdmVudEhhbmRsZXIoZmFjaWxpdHlUeXBlQXR0cikpO1xyXG5cclxuICAgICAgICAvLyBwcm9qZWN0IHR5cGVcclxuICAgICAgICBsZXQgcHJvamVjdFR5cGVBdHRyID0gdGhpcy5mb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoXCJ0ZXJfcHJvamVjdHR5cGVcIikgYXMgWHJtLkF0dHJpYnV0ZXMuTG9va3VwQXR0cmlidXRlO1xyXG4gICAgICAgIHJlcXVlc3RzLnB1c2godGhpcy5wcm9qZWN0VHlwZUV2ZW50SGFuZGxlcihwcm9qZWN0VHlwZUF0dHIpKTtcclxuXHJcbiAgICAgICAgLy8gTWFya2V0aW5nIFNlcnZpY2VcclxuICAgICAgICBsZXQgbWFya2V0U2VydmljZUF0dHIgPSB0aGlzLmZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShcInRlcl9tYXJrZXRzZXJ2aWNlc1wiKSBhcyBYcm0uQXR0cmlidXRlcy5BdHRyaWJ1dGU7XHJcbiAgICAgICAgcmVxdWVzdHMucHVzaCh0aGlzLm1hcmtldFNlcnZpY2VzRXZlbnRIYW5kbGVyKG1hcmtldFNlcnZpY2VBdHRyKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkLndoZW4ocmVxdWVzdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVZhbGlkYXRpb25PYmplY3QoaXNPSzogYm9vbGVhbiwgbWVzc2FnZXM/OiBzdHJpbmdbXSk6IFNlbWFwaG9yZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3lnbmFsOiBpc09LLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FuVW5sb2NrKCk6IFNlbWFwaG9yZSB7XHJcbiAgICAgICAgLy8gY2hlY2sgc2VydmljZWxpbmVzXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGxldCBpc1NlcnZpY2VMaW5lc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLnNlcnZpY2VMaW5lcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlTGluZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlzU2VydmljZUxpbmVzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1NlcnZpY2VMaW5lc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goXCJUaGVyZSBpcyBubyBTZXJ2aWNlIExpbmUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVjayBmYWNpbGl0eSAvIHByb2plY3QgdHlwZXNcclxuXHJcbiAgICAgICAgbGV0IGlzRmFjaWxpdHlUeXBlc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzUHJvamVjdFR5cGVzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMuZmFjaWxpdHlUeXBlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mYWNpbGl0eVR5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZhY2lsaXR5VHlwZXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMucHJvamVjdFR5cGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RUeXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaXNQcm9qZWN0VHlwZXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0ZhY2lsaXR5VHlwZXNWYWxpZCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKFwiVGhlcmUgaXMgbm8gRmFjaWxpdHkgVHlwZSBzZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1Byb2plY3RUeXBlc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goXCJUaGVyZSBpcyBubyBQcm9qZWN0IFR5cGUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtYXJrZXQgc2VydmljZXNcclxuICAgICAgICBsZXQgaXNNYXJrZXRTZXJ2aWNlc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcmtldFNlcnZpY2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtldFNlcnZpY2VzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpc01hcmtldFNlcnZpY2VzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNNYXJrZXRTZXJ2aWNlc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goXCJUaGVyZSBpcyBubyBNYXJrZXQgU2VydmljZSBzZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gQVBSLmNyZWF0ZVZhbGlkYXRpb25PYmplY3QoKG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCksIG1lc3NhZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFZhbHVlKCk6IFhybS5Mb29rdXBWYWx1ZSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuYXByTG9va3VwLmdldEF0dHJpYnV0ZSgpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbCAmJiB2YWxbMF0gPyB2YWxbMF0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoc2hvdWxkUmVuZGVyPzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChzaG91bGRSZW5kZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdG9wIGZsYWcgcmVjZWl2ZWQgdG8gcmVuZGVyXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXBvbmVudCBoYXZlIG5vdCBpbml0aWFsaXplZCB5ZXRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaS5cdFNlcnZpY2UgTGluZSwgRmFjaWxpdHkgVHlwZS4gUHJvamVjdCBUeXBlLCBBTkQgdGhlIG5ldyBNYXJrZXQgU2VydmljZXMgbXVsdGkgc2VsZWN0IG9wdGlvbiBzZXQgbXVzdCBiZSBhc3NpZ25lZCBmaXJzdCBiZWZvcmUgXHJcbiAgICAgICAgLy8gdGhlIEFQUiDigJMgQXV0aG9yaXplIFByb2plY3QgUmV2aWV3ZXIgY2FuIGJlIGFzc2lnbmVkLiBMb2NrIGRvd24gdGhlIEFQUiBmaWVsZCB1bnRpbCBhbGwgb2YgdGhlIG90aGVyIGZpZWxkcyBoYXZlIGJlZW4gZmlsbGVkIGluLiBcclxuICAgICAgICAvLyBPbmx5IHRoZW4gY2FuIHRoZSB1c2VyIHNlbGVjdCB0aGUgbG9va3VwIGZvciB0aGUgQVBSXHJcbiAgICAgICAgY29uc3QgdW5Mb2NrU2VwYXBob3JlID0gdGhpcy5jYW5VbmxvY2soKTtcclxuICAgICAgICBpZiAoIXVuTG9ja1NlcGFwaG9yZS5zeWduYWwpIHtcclxuICAgICAgICAgICAgLy90aGlzLmFwckxvb2t1cC5nZXRBdHRyaWJ1dGUoKS5zZXRWYWx1ZShudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5zZXRBUFJUb0VtcHR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXByTG9va3VwLnNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgICAgICBYcm0uVXRpbGl0eS5hbGVydERpYWxvZyhgU2VydmljZSBMaW5lLCBGYWNpbGl0eSAvIFByb2plY3QgVHlwZSwgQU5EIHRoZSBuZXcgTWFya2V0aW5nIFNlcnZpY2VzIG11c3QgYmUgYXNzaWduZWQgZmlyc3QgXFxuICR7dW5Mb2NrU2VwYXBob3JlLm1lc3NhZ2VzLnJlZHVjZSgoYWNjLCBwYXJ0KSA9PiBhY2MgKyAnLCAnICsgcGFydCl9YCwgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXByTG9va3VwLnNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBpaS5cdElmIFNMID0gRW52aXJvbm1lbnRhbCBBTkQgRmFjaWxpdHkgVHlwZSA9IFRlbGVjb21tdW5pY2F0aW9ucyBBTkQgdGhlIE1hcmtldCBTZXJ2aWNlcyBJTiAoXHJcbiAgICAgICAgLy8gICAgICAgICAgICBOZXBhIEVBIC8gRUlTID0gMjgyLCA1OTAsIDA3NztcclxuICAgICAgICAvLyAgICAgICAgICAgIE5FUEEgR2VuZXJhbCA9IDI4MiwgNTkwLCAwNzhcclxuICAgICAgICAvLykgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlXHJcbiAgICAgICAgLy/igKJcdEVOViBUZWxlY29tbXVuaWNhdGlvbnMgLSBORVBBXHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gJiYgdGhpcy5mYWNpbGl0eVR5cGVzW1RlbGVjb21tdW5pY2F0aW9uRmFjaWxpdHlUeXBlXSAmJiBcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA3N10gfHxcclxuICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNzhdXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuRU5WVGVsZWNvbW11bmljYXRpb25zTkVQQSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpaWkuXHRJZiBTTCA9IEVudmlyb25tZW50YWwgQU5EIE1hcmtldCBTZXJ2aWNlcyBJTiAoXHJcbiAgICAgICAgLy8gICAgICAgIEhhemFyZG91cyBCdWlsZGluZyBNYXRlcmlhbHMgPSAyODIsIDU5MCwgMDQ5OyBcclxuICAgICAgICAvLyAgICAgICAgSGVhbHRoIGFuZCBTYWZldHkgPSAyODIsIDU5MCwgMDUwO1xyXG4gICAgICAgIC8vICAgICAgICBJSCBMaXRpZ2F0aW9uIFN1cHBvcnQgPSAyODIsIDU5MCwgMDUxO1xyXG4gICAgICAgIC8vICAgICAgICBJSCBPdGhlciA9IDI4MiwgNTkwLCAwNTQ7XHJcbiAgICAgICAgLy8gICAgICAgIElIIFRyYWluaW5nID0gMjgyLCA1OTAsIDA1NTtcclxuICAgICAgICAvLyAgICAgICAgSW5kb29yIEFpciBRdWFsaXR5ID0gMjgyLCA1OTAsIDA1NjtcclxuICAgICAgICAvLyAgICAgICAgSW5kdXN0cmlhbCBIeWdpZW5lID0gMjgyLCA1OTAsIDA1NztcclxuICAgICAgICAvLyAgICAgICAgTGVhZCBCYXNlZCBQYWludCA9IDI4MiwgNTkwLCAwNjQ7XHJcbiAgICAgICAgLy8gICAgICAgIE1vbGQgQXNzZXNzbWVudCA9IDI4MiwgNTkwLCAwNzQ7XHJcbiAgICAgICAgLy8gICAgICAgIE1vbGQgUmVtZWRpYXRpb24gPSAyODIsIDU5MCwgMDc1O1xyXG4gICAgICAgIC8vICAgICAgICBOb2lzZSBTdHVkaWVzID0gMjgyLCA1OTAsIDA4MDtcclxuICAgICAgICAvLyAgICAgICAgUmFkb24gPSAyODIsIDU5MCwgMDg5XHJcbiAgICAgICAgLy8pIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwczpcclxuICAgICAgICAvL+KAolx0RU5WIEluZHVzdHJpYWwgSHlnaWVuZSAtIFNhZmV0eVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gJiYgLyp0aGlzLnByZ3NbUFJHLkluZHVzdHJpYWxIeWdpZW5lXSovXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDQ5XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNTBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA1MV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDU0XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNTVdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA1Nl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDU3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNjRdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA3NF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDc1XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwODBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA4OV1cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5FTlZJbmR1c3RyaWFsSHlnaWVuZVNhZmV0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpdi5cdElmIFNMID0gRW52aXJvbm1lbnRhbCBBTkQgTWFya2V0IFNlcnZpY2VzIElOIChcclxuICAgICAgICAvLyAgICAgICAgQXZpYW4gLyBCYXQgU3R1ZGllcyA9IDI4MiwgNTkwLCAwMTQ7XHJcbiAgICAgICAgLy8gICAgICAgIEN1bHR1cmFsIFJlc291cmNlcyA9IDI4MiwgNTkwLCAwMjQ7XHJcbiAgICAgICAgLy8gICAgICAgIEVudmlyb25tZW50YWwgUGxhbm5pbmcgPSAyODIsIDU5MCwgMDI4O1xyXG4gICAgICAgIC8vICAgICAgICBGaXNoIC8gQXF1YXRpYyBMaWZlIFN0dWRpZXMgPSAyODIsIDU5MCwgMDM1O1xyXG4gICAgICAgIC8vICAgICAgICBHZW9sb2dpYyBBc3Nlc3NtZW50IC8gSGF6YXJkcyA9IDI4MiwgNTkwLCAwNDA7XHJcbiAgICAgICAgLy8gICAgICAgIEdJUyBTdXBwb3J0ID0gMjgyLCA1OTAsIDA0MztcclxuICAgICAgICAvLyAgICAgICAgTGFrZSBNYW5hZ2VtZW50ID0gMjgyLCA1OTAsIDA2MDtcclxuICAgICAgICAvLyAgICAgICAgTmF0dXJhbCBSZXNvdXJjZSBPdGhlciA9IDI4MiwgNTkwLCAwNzY7XHJcbiAgICAgICAgLy8gICAgICAgIE5FUEEgRUEgLyBFSVMgPSAyODIsIDU5MCwgMDc3O1xyXG4gICAgICAgIC8vICAgICAgICBORVBBIEdlbmVyYWwgPSAyODIsIDU5MCwgMDc4O1xyXG4gICAgICAgIC8vICAgICAgICBUaHJlYXRlbmVkIGFuZCBFbmRhbmdlcmVkIFNwZWNpZXMgU3R1ZGllcyA9IDI4MiwgNTkwLCAxMjE7XHJcbiAgICAgICAgLy8gICAgICAgIFdhdGVyIFJlc291cmNlcyA9IDI4MiwgNTkwLCAxMjk7XHJcbiAgICAgICAgLy8gICAgICAgIFdldGxhbmQgYW5kIFN0cmVhbSBNaXRpZ2F0aW9uIC8gUmVzdG9yYXRpb24gPSAyODIsIDU5MCwgMTMyO1xyXG4gICAgICAgIC8vICAgICAgICBXZXRsYW5kIC8gV09VUyBEZWxpbmVhdGlvbiAmIFBlcm1pdHRpbmcgPSAyODIsIDU5MCwgMTMzXHJcbiAgICAgICAgLy8pIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3Vwc1xyXG4gICAgICAgIC8v4oCiXHRFTlYgTmF0dXJhbCAtIEN1bHR1cmFsIFJlc291cmNlc1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gJiYgLyp0aGlzLnByZ3NbUFJHLk5hdHVyYWxSZXNvdXJjZXNdKi9cclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMTRdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAyNF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDI4XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMzVdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA0MF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDQzXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNjBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA3Nl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDc3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNzhdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEyMV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTI5XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMzJdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEzM11cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5FTlZOYXR1cmFsQ3VsdHVyYWxSZXNvdXJjZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy92LnYuXHRJZiBTTCA9IEVudmlyb25tZW50YWwgQU5EIE1hcmtldCBTZXJ2aWNlcyBJTiAoXHJcbiAgICAgICAgLy8gICAgICAgICAgICBFU0EgT3RoZXIgPSAyODIsIDU5MCwgMDI5O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgRmlsZSBSZXZpZXcgLyBSZXNlYXJjaCA9IDI4MiwgNTkwLCAwMzM7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBQaGFzZSAxIC8gRVNBID0gMjgyLCA1OTAsIDA4NjtcclxuICAgICAgICAvLyAgICAgICAgICAgIFRyYW5zYWN0aW9uIFNjcmVlbiA9IDI4MiwgNTkwLCAxMjJcclxuICAgICAgICAvLykgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzXHJcbiAgICAgICAgLy/igKJcdEVOViBQaGFzZSAxIEVTQVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gJiYgLyp0aGlzLnByZ3NbUFJHLkVTQV0qL1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAyOV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDMzXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwODZdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEyMl1cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5FTlZQaGFzZTFFU0EpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmkuXHRJZiBTTCA9IEVudmlyb25tZW50YWwgQU5EIE1hcmtldCBTZXJ2aWNlcyBJTiAoXHJcbiAgICAgICAgLy8gICAgICAgICAgICBBc2Jlc3RvcyBBYmF0ZW1lbnQgRGVzaWduID0gMjgyLCA1OTAsIDAwNTtcclxuICAgICAgICAvLyAgICAgICAgICAgIEFzYmVzdG9zIEFiYXRlbWVudCBNb25pdG9yaW5nID0gMjgyLCA1OTAsIDAwNjtcclxuICAgICAgICAvLyAgICAgICAgICAgIEFzYmVzdG9zIEluc3BlY3Rpb24gPSAyODIsIDU5MCwgMDA3O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgQXNiZXN0b3MgTGl0aWdhdGlvbiBTdXBwb3J0ID0gMjgyLCA1OTAsIDAwODtcclxuICAgICAgICAvLyAgICAgICAgICAgIEFzYmVzdG9zIE9wZXJhdGlvbnMgJiBNYWludGVuYW5jZSA9IDI4MiwgNTkwLCAwMDk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBBc2Jlc3RvcyBPdGhlciA9IDI4MiwgNTkwLCAwMTA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBBc2Jlc3RvcyBUcmFpbmluZyA9IDI4MiwgNTkwLCAwMTFcclxuICAgICAgICAvLykgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzOlxyXG4gICAgICAgIC8v4oCiXHRFTlYgQXNiZXN0b3NcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkVudmlyb25tZW50YWxdICYmIC8qdGhpcy5wcmdzW1BSRy5Bc2Jlc3Rvc10qLyBcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMDVdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAwNl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDA3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMDhdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAwOV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDEwXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMTFdXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuRU5WQXNiZXN0b3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmlpLlx0SWYgU0wgPSBFbnZpcm9ubWVudGFsIEFORCBNYXJrZXQgU2VydmljZXMgSU4gKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIEVudi5Db25zdHJ1Y3Rpb24gT2JzZXJ2YXRpb24gPSAyODIsIDU5MCwgMDI2O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIEdJUyBTdXBwb3J0IOKAkyBSZW1lZGlhdGlvbiA9IDI4MiwgNTkwLCAwNDQ7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgTGl0aWdhdGlvbiBTdXBwb3J0IOKAkyBSZW1lZGlhdGlvbiA9IDI4MiwgNTkwLCAwNjc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgUmVtZWRpYWwgQWN0aW9uIC8gT3BlcmF0aW9ucyAvIE1haW50ZW5hbmNlID0gMjgyLCA1OTAsIDA5MztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBSZW1lZGlhbCBDb25zdHJ1Y3Rpb24gLSBGYWNpbGl0eSBSZWNsYW1hdGlvbiA9IDI4MiwgNTkwLCAwOTQ7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgUmVtZWRpYWwgQ29uc3RydWN0aW9uIC0gR3JhZGluZyAvIEV4Y2F2YXRpb24gLyBEaXNwb3NhbCA9IDI4MiwgNTkwLCAwOTU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgUmVtZWRpYWwgQ29uc3RydWN0aW9uIC0gT25zaXRlIFNvaWwgVHJlYXRtZW50KEJpbykgPSAyODIsIDU5MCwgMDk2O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFJlbWVkaWFsIENvbnN0cnVjdGlvbiAtIFN5c3RlbSBEZWNvbW1pc3Npb25pbmcgPSAyODIsIDU5MCwgMDk3O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFJlbWVkaWFsIENvbnN0cnVjdGlvbiAtIFN5c3RlbSBJbnN0YWxsYXRpb24gLyBPICYgTSA9IDI4MiwgNTkwLCAwOTg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgUmVtZWRpYWwgQ29uc3RydWN0aW9uIC0gU3lzdGVtIE9wZXJhdGlvbiAvIE1haW50ZW5hbmNlID0gMjgyLCA1OTAsIDA5OTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBSZW1lZGlhdGlvbiBEZXNpZ24gPSAyODIsIDU5MCwgMTAwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFJlbWVkaWF0aW9uIE90aGVyID0gMjgyLCA1OTAsIDEwMTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBWYXBvciBNaXRpZ2F0aW9uIERlc2lnbiA9IDI4MiwgNTkwLCAxMjY7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgVmFwb3IgTWl0aWdhdGlvbiBJbnN0YWxsYXRpb24gJiBNb25pdG9yaW5nID0gMjgyLCA1OTAsIDEyN1xyXG4gICAgICAgIC8vKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHM6XHJcbiAgICAgICAgLy/igKJcdEVOViBFbnZpcm9ubWVudGFsIFJlbWVkaWF0aW9uIERlc2lnblxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gJiYgLyp0aGlzLnByZ3NbUFJHLlJlbWVkaWF0aW9uXSovXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDI2XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNDRdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA2N10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDkzXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOTRdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5NV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDk2XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOTddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5OF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDk5XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMDBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEwMV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTI2XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMjddXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuRU5WRW52aXJvbm1lbnRhbFJlbWVkaWF0aW9uRGVzaWduKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZpaWkuSWYgU0wgPSBFbnZpcm9ubWVudGFsIEFORCBNYXJrZXQgU2VydmljZXMgSU4gKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgQWlyIFBlcm1pdHRpbmcgPSAyODIsIDU5MCwgMDAxO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgQWlyIFF1YWxpdHkgPSAyODIsIDU5MCwgMDAyO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgQ29tcGxpYW5jZSBBc3Nlc3NtZW50ID0gMjgyLCA1OTAsIDAxOTtcclxuICAgICAgICAvLyAgICAgICAgICAgIExpdGlnYXRpb24gIFN1cHBvcnQgPSAyODIsIDU5MCwgMDY1O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgT3V0ZG9vciBBaXIgU3R1ZGllcyAvIFRlc3RpbmcgPSAyODIsIDU5MCwgMDgzO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgUG9sbC5QcmV2ZW50aW9uIC8gV2FzdGUgTWluID0gMjgyLCA1OTAsIDA4NztcclxuICAgICAgICAvLyAgICAgICAgICAgIFJlZ3VsYXRvcnkgQ29tcGxpYW5jZSBPdGhlciA9IDI4MiwgNTkwLCAwOTA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBSZWd1bGF0b3J5IENvbXBsaWFuY2UgVHJhaW5pbmcgPSAyODIsIDU5MCwgMDkxO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgUmVndWxhdG9yeSBDb21wbGlhbmNlIC8gUGVybWl0dGluZyA9IDI4MiwgNTkwLCAwOTI7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBTcGlsbCBQcmV2ZW50aW9uID0gMjgyLCA1OTAsIDExNTtcclxuICAgICAgICAvLyAgICAgICAgICAgIFN0b3Jtd2F0ZXIgPSAyODIsIDU5MCwgMTE3O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgV2FzdGV3YXRlciBEZXNpZ24gU2VydmljZXMgPSAyODIsIDU5MCwgMTI4O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgV2F0ZXIgU3R1ZGllcyA9IDI4MiwgNTkwLCAxMzA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBXZWxsIEhlYWQgUHJvdGVjdGlvbiA9IDI4MiwgNTkwLCAxMzFcclxuICAgICAgICAvLykgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzOlxyXG4gICAgICAgIC8v4oCiXHRFTlYgUmVndWxhdG9yeSBDb21wbGlhbmNlXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSAmJiAvKnRoaXMucHJnc1tQUkcuUmVndWxhdG9yeUNvbXBsaWFuY2VdKi9cclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMDFdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAwMl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDE5XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNjVdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA4M10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDg3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOTBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5MV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDkyXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMTVdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDExN10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTI4XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMzBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEzMV1cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5FTlZSZWd1bGF0b3J5Q29tcGxpYW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpeC5cdElmIFNMID0gRW52aXJvbm1lbnRhbCBBTkQgTWFya2V0IFNlcnZpY2VzIElOIChcclxuICAgICAgICAvLyAgICAgICAgICAgIEJyb3duZmllbGRzID0gMjgyLCA1OTAsIDAxNTtcclxuICAgICAgICAvLyAgICAgICAgICAgIEVudmlyb25tZW50YWwgRHJpbGxpbmcgPSAyODIsIDU5MCwgMDI3O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgR2VvbG9naWMgQXNzZXNzbWVudCAvIEZhdWx0IFN0dWRpZXMgPSAyODIsIDU5MCwgMDM5O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgR2VvcGh5c2ljYWwgQXNzZXNzbWVudCA9IDI4MiwgNTkwLCAwNDE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBHcm91bmR3YXRlciBNb2RlbGluZyA9IDI4MiwgNTkwLCAwNDc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBMaXRpZ2F0aW9uIFN1cHBvcnQgLSBTaXRlIEludmVzdGlnYXRpb24gPSAyODIsIDU5MCwgMDY4O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgTFNJIC8gUGhhc2UgMiA9IDI4MiwgNTkwLCAwNjk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBSaXNrIEFzc2Vzc21lbnQgPSAyODIsIDU5MCwgMTA0O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgU2l0ZSBDbG9zdXJlIC8gVkNQIFNlcnZpY2VzID0gMjgyLCA1OTAsIDEwNztcclxuICAgICAgICAvLyAgICAgICAgICAgIFVTVCBSZW1vdmFsID0gMjgyLCA1OTAsIDEyNDtcclxuICAgICAgICAvLyAgICAgICAgICAgIFZhcG9yIEludHJ1c2lvbiAvIE1pZ3JhdGlvbiA9IDI4MiwgNTkwLCAxMjVcclxuICAgICAgICAvLykgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzOlxyXG4gICAgICAgIC8v4oCiXHRFTlYgU2l0ZSBJbnZlc3RpZ2F0aW9uIC0gUkJDQVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gJiYgLyp0aGlzLnByZ3NbUFJHLlNpdGVJbnZlc3RpZ2F0aW9uXSovXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDE1XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMjddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAzOV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDQxXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNDddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA2OF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDY5XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMDRdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEwN10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTI0XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMjVdXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuRU5WU2l0ZUludmVzdGlnYXRpb25SQkNBKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHguXHRJZiBTTCA9IEVudmlyb25tZW50YWwgQU5EIE1hcmtldCBTZXJ2aWNlcyBJTiAoXHJcbiAgICAgICAgLy8gICAgICAgICAgICBHcm91bmR3YXRlciBDb21wbGlhbmNlIE1vbml0b3JpbmcgPSAyODIsIDU5MCwgMDQ2O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgTGFuZGZpbGwgQ2xvc3VyZSBTZXJ2aWNlcyA9IDI4MiwgNTkwLCAwNjE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBMYW5kZmlsbCBHYXMgRGVzaWduID0gMjgyLCA1OTAsIDA2MjtcclxuICAgICAgICAvLyAgICAgICAgICAgIExhbmRmaWxsIEdhcyBNb25pdG9yaW5nID0gMjgyLCA1OTAsIDA2MztcclxuICAgICAgICAvLyAgICAgICAgICAgIFNvbGlkIFdhc3RlIC8gTGFuZGZpbGwgRGVzaWduID0gMjgyLCA1OTAsIDExMDtcclxuICAgICAgICAvLyAgICAgICAgICAgIFNvbGlkIFdhc3RlIC8gTGFuZGZpbGwgT3RoZXIgPSAyODIsIDU5MCwgMTExO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgU29saWQgV2FzdGUgLyBMYW5kZmlsbCBQZXJtaXR0aW5nID0gMjgyLCA1OTAsIDExMlxyXG4gICAgICAgIC8vKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHM6XHJcbiAgICAgICAgLy/igKJcdEVOViBTb2xpZCBXYXN0ZVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gJiYgLyp0aGlzLnByZ3NbUFJHLlNvbGlkV2FzdGVdKi9cclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNDZdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA2MV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDYyXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNjNdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDExMF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTExXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMTJdXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuQURBUlBFTlZTb2xpZFdhc3RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8veGkuSWYgU0wgPSBGYWNpbGl0aWVzIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwczpcclxuICAgICAgICAvL+KAolx0RkFDIEFxdWF0aWNzXHJcbiAgICAgICAgLy/igKJcdEZBQyBCdWlsZGluZyBFbmNsb3N1cmUgQ29uc3VsdGluZ1xyXG4gICAgICAgIC8v4oCiXHRGQUMgRW5naW5lZXJpbmcgRGlhZ25vc3RpY3NcclxuICAgICAgICAvL+KAolx0RkFDIE1lY2hhbmljYWwgRWxlY3RyaWNhbCBhbmQgUGx1bWJpbmdcclxuICAgICAgICAvL+KAolx0RkFDIFByb3BlcnR5IENvbmRpdGlvbiBBc3Nlc3NtZW50XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5GYWNpbGl0aWVzXSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLkZBQ0FxdWF0aWNzLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5GQUNCdWlsZGluZ0VuY2xvc3VyZUNvbnN1bHRpbmcsXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLkZBQ0VuZ2luZWVyaW5nRGlhZ25vc3RpY3MsXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLkZBQ01lY2hhbmljYWxFbGVjdHJpY2FsYW5kUGx1bWJpbmcsXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLkZBQ1Byb3BlcnR5Q29uZGl0aW9uQXNzZXNtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8veGlpLklmIFNMID0gR2VvdGVjaG5pY2FsIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwcyhiYXNpY2FsbHkgYWxsIEdFTyBncm91cHMpOlxyXG4gICAgICAgIC8v4oCiXHRHRU8gR2VvIERlc2lnblxyXG4gICAgICAgIC8v4oCiXHRHRU8gR2VvdGVjaG5pY2FsXHJcbiAgICAgICAgLy/igKJcdEdFTyBQYXZlbWVudCBFbmdpbmVlcmluZ1xyXG4gICAgICAgIC8v4oCiXHRHRU8gUmFpbCAtIEludGVybW9kYWxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkdlb3RlY2huaWNhbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5HRU9HZW9EZXNpZ24sXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLkdFT0dlb3RlY2huaWNhbCxcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuR0VPUGF2ZW1lbnRFbmdpbmVlcmluZyxcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuR0VPUmFpbEludGVybW9kYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy94aWlpLklmIFNMID0gR2VvdGVjaG5pY2FsIEFORCBQcm9qZWN0IFR5cGUgaW4gKFJhaWwsIEludGVybW9kYWwpIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwczpcclxuICAgICAgICAvL+KAolx0R0VPIFJhaWwgLSBJbnRlcm1vZGFsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5HZW90ZWNobmljYWxdICYmXHJcbiAgICAgICAgICAgICh0aGlzLnByb2plY3RUeXBlc1tQcm9qZWN0VHlwZXMuUmFpbF0gfHwgdGhpcy5wcm9qZWN0VHlwZXNbUHJvamVjdFR5cGVzLkludGVybW9kYWxdKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5HRU9SYWlsSW50ZXJtb2RhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3hpdi5JZiBTTCA9IE1hdGVyaWFscyBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHMoYmFzaWNhbGx5IGFsbCBNQVQgZ3JvdXBzKTpcclxuICAgICAgICAvL+KAolx0TUFUIENvbnN0cnVjdGlvbiBNYXRlcmlhbHMgYW5kIEluc3BlY3Rpb25cclxuICAgICAgICAvL+KAolx0TUFUIE1hdGVyaWFsc1xyXG4gICAgICAgIC8v4oCiXHRNQVQgTWF0ZXJpYWxzIEVORyBUZXN0aW5nICYgSW5zcGVjdGlvblxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuTWF0ZXJpYWxzXSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLk1BVENvbnN0cnVjdGlvbk1hdGVyaWFsc2FuZEluc3BlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLk1BVE1hdGVyaWFscyxcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuTUFUTWF0ZXJpYWxzRW5nVGVzdGluZ2FuZEluc3BlY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5zZXRBUFJUb0VtcHR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3h2LklmIGEgdXNlciBtb2RpZmllcyB0aGUgU2VydmljZSBMaW5lLCBGYWNpbGl0eSAvIFByb2plY3QgVHlwZSwgYW5kIC8gb3IgTWFya2V0aW5nIFNlcnZpY2VzIHRoZSBsb2dpYyB0byB2YWxpZGF0ZSB0aGUgQVBSIG5lZWRzIHRvIHJ1biBhZ2FpbiwgYW5kIGlmIHRoZSBzZWxlY3RlZCBBUFIgZG9lcyBub3QgbWVldCB0aGUgbmV3IGNyaXRlcmlhLCB3YXJuIHRoZSB1c2VyIGFuZCBkbyBub3Qgc2F2ZS5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwckxvb2t1cC5hZGROb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXCJBUFIgaXMgbm90IGNvcnJlY3RcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uTGV2ZWw6IFwiRVJST1JcIixcclxuICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZDogXCJhcHJfaXNfbm90X3ZhbGlkXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgWHJtLlV0aWxpdHkuYWxlcnREaWFsb2coYEFQUiBpcyBub3QgY29ycmVjdCBiZWNhdXNlIG9mIGNvbWJpbmF0aW9uIG9mIFNlcnZpY2UgTGluZSwgRmFjaWxpdHkvUHJvamVjdCBUeXBlLCBhbmQvb3IgTWFya2V0aW5nIFNlcnZpY2VzLiBTYXZlIHdpbGwgYmUgYmxvY2tlZGAsICgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwckxvb2t1cC5jbGVhck5vdGlmaWNhdGlvbignYXByX2lzX25vdF92YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGFwclZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIGlmICghYXByVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICQud2hlbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIGN1cnJlbnQgcGFyYW1ldGVyc1xyXG4gICAgICAgIGxldCBmZXRjaFhtbCA9XHJcbiAgICAgICAgICAgIGA8ZmV0Y2ggdG9wPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgPGVudGl0eSBuYW1lPVwidnMzNjBfZW1wbG95ZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YXR0cmlidXRlIG5hbWU9XCJ2czM2MF9lbXBsb3llZWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlsdGVyPlxyXG5cdFx0XHQgICAgICAgICAgICA8Y29uZGl0aW9uIGF0dHJpYnV0ZT1cInZzMzYwX2VtcGxveWVlaWRcIiBvcGVyYXRvcj1cImVxXCIgdmFsdWU9XCIke2FwclZhbHVlLmlkfVwiIC8+XHJcblx0XHQgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuZmlsdGVyRXhwcmVzc2lvbn1cclxuICAgICAgICAgICAgICAgIDwvZW50aXR5PlxyXG4gICAgICAgICAgICA8L2ZldGNoPmBcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGkucmVxdWVzdChcInZzMzYwX2VtcGxveWVlcz9mZXRjaFhtbD1cIiArIGZldGNoWG1sLCBcIkdFVFwiKVxyXG4gICAgICAgICAgICAudGhlbih3ZWJhcGkudGFrZVZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbigocmVjb3JkczogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5pc1ZhbGlkID0gKHJlY29yZHMubGVuZ3RoID4gMCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJlU2VhcmNoSGFuZGxlcihoYW5kbGVyOiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuYXByTG9va3VwLmFkZEN1c3RvbUZpbHRlcih0aGlzLmZpbHRlckV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXR0YWNoRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaE9uU2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuYXByTG9va3VwLmFkZFByZVNlYXJjaCh0aGlzLnByZVNlYXJjaEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTZXJ2aWNlTGluZUF0dHJpYnV0ZXNFdmVudEhhbmRsZXJzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hGYWNpbGl0eVR5cGUoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaFByb2plY3RUeXBlKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hNYXJrZXRTZXJ2aWNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXR0YWNoU2VydmljZUxpbmVBdHRyaWJ1dGVzRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICBmb3IgKHZhciBzZXJ2aWNlTGluZSBpbiB0aGlzLnNlcnZpY2VMaW5lcykge1xyXG4gICAgICAgICAgICBsZXQgYXR0ciA9IHRoaXMuZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKHNlcnZpY2VMaW5lKTtcclxuICAgICAgICAgICAgYXR0ci5hZGRPbkNoYW5nZSgoaGFuZGxlcjogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpID0+IHRoaXMuc2VydmljZUxpbmVFdmVudEhhbmRsZXIoaGFuZGxlci5nZXRFdmVudFNvdXJjZSgpIGFzIFhybS5BdHRyaWJ1dGVzLkJvb2xlYW5BdHRyaWJ1dGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2hGYWNpbGl0eVR5cGUoKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSB0aGlzLmZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShcInRlcl9mYWNpbGl0eXR5cGVcIik7XHJcbiAgICAgICAgYXR0ci5hZGRPbkNoYW5nZSgoaGFuZGxlcjogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpID0+IHRoaXMuZmFjaWxpdHlUeXBlRXZlbnRIYW5kbGVyKGhhbmRsZXIuZ2V0RXZlbnRTb3VyY2UoKSBhcyBYcm0uQXR0cmlidXRlcy5Mb29rdXBBdHRyaWJ1dGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaFByb2plY3RUeXBlKCkge1xyXG4gICAgICAgIGxldCBhdHRyID0gdGhpcy5mb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoXCJ0ZXJfcHJvamVjdHR5cGVcIik7XHJcbiAgICAgICAgYXR0ci5hZGRPbkNoYW5nZSgoaGFuZGxlcjogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpID0+IHRoaXMucHJvamVjdFR5cGVFdmVudEhhbmRsZXIoaGFuZGxlci5nZXRFdmVudFNvdXJjZSgpIGFzIFhybS5BdHRyaWJ1dGVzLkxvb2t1cEF0dHJpYnV0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXR0YWNoTWFya2V0U2VydmljZXMoKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSB0aGlzLmZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShcInRlcl9tYXJrZXRzZXJ2aWNlc1wiKTtcclxuICAgICAgICBhdHRyLmFkZE9uQ2hhbmdlKChoYW5kbGVyOiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCkgPT4gdGhpcy5tYXJrZXRTZXJ2aWNlc0V2ZW50SGFuZGxlcihoYW5kbGVyLmdldEV2ZW50U291cmNlKCkgYXMgWHJtLkF0dHJpYnV0ZXMuQXR0cmlidXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2hPblNhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udGV4dC5kYXRhLmVudGl0eS5hZGRPblNhdmUoKGNvbnRleHQ6IFhybS5FdmVudHMuU2F2ZUV2ZW50Q29udGV4dCkgPT4gdGhpcy5vblNhdmVIYW5kbGVyKGNvbnRleHQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2F2ZUhhbmRsZXIoY29udGV4dDogWHJtLkV2ZW50cy5TYXZlRXZlbnRDb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgYXJncyA9IGNvbnRleHQuZ2V0RXZlbnRBcmdzKCk7XHJcbiAgICAgICAgaWYgKGFyZ3MuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Db250ZXh0LmRhdGEuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYXJncy5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlcnZpY2VMaW5lRXZlbnRIYW5kbGVyKGF0dHJpYnV0ZTogWHJtLkF0dHJpYnV0ZXMuQm9vbGVhbkF0dHJpYnV0ZSwgc2hvdWxkUmVuZGVyPzogYm9vbGVhbik6IEpRdWVyeVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGF0dHJpYnV0ZS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuc2VydmljZUxpbmVzW2F0dHJpYnV0ZS5nZXROYW1lKCldID0gdmFsIHx8IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKHNob3VsZFJlbmRlcik7XHJcbiAgICAgICAgcmV0dXJuICQud2hlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmFjaWxpdHlUeXBlRXZlbnRIYW5kbGVyKGF0dHJpYnV0ZTogWHJtLkF0dHJpYnV0ZXMuTG9va3VwQXR0cmlidXRlLCBzaG91bGRSZW5kZXI/OiBib29sZWFuKTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgdmFsID0gYXR0cmlidXRlLmdldFZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5mYWNpbGl0eVR5cGVzID0ge307XHJcblxyXG4gICAgICAgIGlmICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mYWNpbGl0eVR5cGVzW3ZhbFswXS5uYW1lXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcihzaG91bGRSZW5kZXIpO1xyXG4gICAgICAgIHJldHVybiAkLndoZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2plY3RUeXBlRXZlbnRIYW5kbGVyKGF0dHJpYnV0ZTogWHJtLkF0dHJpYnV0ZXMuTG9va3VwQXR0cmlidXRlLCBzaG91bGRSZW5kZXI/OiBib29sZWFuKTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgdmFsID0gYXR0cmlidXRlLmdldFZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0VHlwZXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKCF2YWwgfHwgdmFsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihzaG91bGRSZW5kZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gJC53aGVuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsb2FkIHByb2plY3QgY29kZVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5yZXF1ZXN0KGB0ZXJfcHJvamVjdHR5cGVzKCR7dmFsWzBdLmlkLnJlcGxhY2UoL1tcXHtcXH1dL2csIFwiXCIpfSk/JHNlbGVjdD10ZXJfcHJvamVjdHR5cGVjb2RlYCwgXCJHRVRcIilcclxuICAgICAgICAgICAgLmZhaWwod2ViYXBpLmZhaWwpXHJcbiAgICAgICAgICAgIC50aGVuKChwcm9qZWN0VHlwZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZVN0cmluZyA9IFwiXCIgKyBwcm9qZWN0VHlwZS50ZXJfcHJvamVjdHR5cGVjb2RlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0VHlwZXNbY29kZVN0cmluZ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoc2hvdWxkUmVuZGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXJrZXRTZXJ2aWNlc0V2ZW50SGFuZGxlcihhdHRyaWJ1dGU6IFhybS5BdHRyaWJ1dGVzLkF0dHJpYnV0ZSk6IEpRdWVyeVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBhdHRyaWJ1dGUuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlcyA9IHt9O1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG9wdGlvbiBvZiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzW29wdGlvbl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHJldHVybiAkLndoZW4oKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFQUiB9IGZyb20gXCIuL0FQUlwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBBUFJMb2dpYyB7XHJcbiAgICB2YXIgYXByOiBBUFI7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG9uSW5pdChjb250ZXh0OiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybUNvbnRleHQgPSBjb250ZXh0LmdldEZvcm1Db250ZXh0KCk7XHJcbiAgICAgICAgcmV0dXJuIEFQUi5jcmVhdGUoZm9ybUNvbnRleHQpXHJcbiAgICAgICAgICAgIC50aGVuKChpbnN0YW5jZTogQVBSKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcHIgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgICAgIGFwci5yZW5kZXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvQHR5cGVzL3hybS9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmV4cG9ydCBjbGFzcyBDcm1Db250ZXh0IHtcclxuICAgIGdldENvbnRleHQoKTogWHJtLkdsb2JhbENvbnRleHQge1xyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIkNvbnRleHQgaXMgbm90IGF2YWlsYWJsZS5cIjtcclxuICAgICAgICBpZiAodHlwZW9mIEdldEdsb2JhbENvbnRleHQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gR2V0R2xvYmFsQ29udGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBYcm0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKFhybS5VdGlsaXR5ICYmIFhybS5VdGlsaXR5LmdldEdsb2JhbENvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWHJtLlV0aWxpdHkuZ2V0R2xvYmFsQ29udGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFhybS5QYWdlLmNvbnRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IENybUNvbnRleHQgfSBmcm9tICcuL0NybUNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIHdlYmFwaSB7XHJcbiAgICBjb250ZXh0OiBYcm0uR2xvYmFsQ29udGV4dDtcclxuICAgIGNsaWVudFVybDogc3RyaW5nO1xyXG4gICAgb2RhdGFVcmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBDcm1Db250ZXh0KCkuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgIHRoaXMuY2xpZW50VXJsID0gdGhpcy5jb250ZXh0LmdldENsaWVudFVybCgpO1xyXG4gICAgICAgIHRoaXMub2RhdGFVcmwgPSB0aGlzLm1lcmdlVXJsUGFydHModGhpcy5jbGllbnRVcmwsIFwiL2FwaS9kYXRhL3Y4LjIvXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXF1ZXN0KHJlbGF0ZWRVcmw6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIGRhdGE/OiBhbnksIG9wdGlvbnM/OiBhbnksIHNldFJlcXVlc3RIZWFkZXI/OiAoeGhyOiBKUXVlcnlYSFIpID0+IGFueSk6IEpRdWVyeVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMubWVyZ2VVcmxQYXJ0cyh0aGlzLm9kYXRhVXJsLCBlbmNvZGVVUkkocmVsYXRlZFVybCkpO1xyXG4gICAgICAgIGxldCBkZWYgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICByZXR1cm4gJC5hamF4KCQuZXh0ZW5kKHt9LCBvcHRpb25zLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCB8fCBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IFwiZmFsc2VcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoeGhyOiBKUXVlcnlYSFIpID0+IHsgdGhpcy5iZWZvcmVTZW5kKHhociwgc2V0UmVxdWVzdEhlYWRlcikgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGF0eXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXF1ZXN0QnlGZXRjaFhtbChlbnRpdHlDb2xsZWN0aW9uTmFtZTogc3RyaW5nLCBmZXRjaFhtbDogYW55LCBvcHRpb25zPzogYW55LCBzZXRSZXF1ZXN0SGVhZGVyPzogKHhocjogSlF1ZXJ5WEhSKSA9PiBhbnkpOiBKUXVlcnlQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIC8vdmFyIHVybCA9IHRoaXMubWVyZ2VVcmxQYXJ0cyh0aGlzLm9kYXRhVXJsLCBlbmNvZGVVUkkoZW50aXR5Q29sbGVjdGlvbk5hbWUpKTtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5tZXJnZVVybFBhcnRzKHRoaXMub2RhdGFVcmwsIFwiJGJhdGNoXCIpO1xyXG4gICAgICAgIHZhciBiYXRjaE5hbWUgPSBcImFwcHJvdmFsbG9nZmV0Y2hfYmF0Y2hfXCIgKyAoTWF0aC5yYW5kb20oKSArIFwiXCIpLnJlcGxhY2UoL1ssXFwuXS8sIFwiXCIpO1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gd2ViYXBpLmNyZWF0ZUZldGNoQmF0Y2hSZXF1ZXN0KGJhdGNoTmFtZSwgdGhpcy5tZXJnZVVybFBhcnRzKHRoaXMub2RhdGFVcmwsIGAke2VudGl0eUNvbGxlY3Rpb25OYW1lfT9mZXRjaFhtbD0ke2ZldGNoWG1sfWApKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoJC5leHRlbmQoe30sIG9wdGlvbnMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogXCJmYWxzZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICh4aHI6IEpRdWVyeVhIUikgPT4geyB0aGlzLmJlZm9yZVNlbmQoeGhyLCBzZXRSZXF1ZXN0SGVhZGVyKSB9LFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGBtdWx0aXBhcnQvbWl4ZWQ7Ym91bmRhcnk9JHtiYXRjaE5hbWV9YCwgLy9cImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIC8vZGF0YXR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlLnN1YnN0cmluZyhyZXNwb25zZS5pbmRleE9mKCd7JyksIHJlc3BvbnNlLmxhc3RJbmRleE9mKCd9JykgKyAxKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRmV0Y2hCYXRjaFJlcXVlc3QoYmF0Y2hOYW1lOiBzdHJpbmcsIGZldGNoWG1sVXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgYm9keUNvbGxlY3RvciA9IFtgLS0ke2JhdGNoTmFtZX1gXTtcclxuICAgICAgICBib2R5Q29sbGVjdG9yLnB1c2goXCJDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2h0dHBcIik7XHJcbiAgICAgICAgYm9keUNvbGxlY3Rvci5wdXNoKFwiQ29udGVudC1UcmFuc2Zlci1FbmNvZGluZzogYmluYXJ5XCIpO1xyXG4gICAgICAgIGJvZHlDb2xsZWN0b3IucHVzaChcIlwiKTtcclxuICAgICAgICBib2R5Q29sbGVjdG9yLnB1c2goYEdFVCAke2ZldGNoWG1sVXJsfSBIVFRQLzEuMWApO1xyXG4gICAgICAgIGJvZHlDb2xsZWN0b3IucHVzaChcIkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBib2R5Q29sbGVjdG9yLnB1c2goXCJPRGF0YS1WZXJzaW9uOiA0LjBcIik7XHJcbiAgICAgICAgYm9keUNvbGxlY3Rvci5wdXNoKFwiT0RhdGEtTWF4VmVyc2lvbjogNC4wXCIpO1xyXG4gICAgICAgIGJvZHlDb2xsZWN0b3IucHVzaChcIlwiKTtcclxuICAgICAgICBib2R5Q29sbGVjdG9yLnB1c2goYC0tJHtiYXRjaE5hbWV9LS1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGFrZVZhbHVlKHJlc3BvbnNlOmFueSk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBmYWlsKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiZWZvcmVTZW5kKHhocjogSlF1ZXJ5WEhSLCBjdXN0b21CZWZvcmVTZW5kOiAoeGhyOiBKUXVlcnlYSFIpID0+IGFueSkge1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIk9EYXRhLU1heFZlcnNpb25cIiwgXCI0LjBcIik7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJPRGF0YS1WZXJzaW9uXCIsIFwiNC4wXCIpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiUHJlZmVyXCIsIFwib2RhdGEuaW5jbHVkZS1hbm5vdGF0aW9ucz1PRGF0YS5Db21tdW5pdHkuRGlzcGxheS5WMS5Gb3JtYXR0ZWRWYWx1ZVwiKTtcclxuICAgICAgICBpZiAoY3VzdG9tQmVmb3JlU2VuZCkge1xyXG4gICAgICAgICAgICBjdXN0b21CZWZvcmVTZW5kKDxKUXVlcnlYSFI+eGhyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtZXJnZVVybFBhcnRzKGJhc2U6c3RyaW5nLCByZWxhdGl2ZTpzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB1cmwxOiBzdHJpbmdbXSA9IGJhc2Uuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIGxldCB1cmwyOiBzdHJpbmdbXSA9IHJlbGF0aXZlLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBsZXQgdXJsMzogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHVybDFbMF0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdXJsMS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsMVt1cmwxLmxlbmd0aCAtIDFdID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHVybDEucG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cmwxLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdXJsMy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodXJsMlswXSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICB1cmwyLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cmwyW3VybDIubGVuZ3RoIC0gMV0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdXJsMi5wb3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVybDIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB1cmwzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHVybDMuam9pbignLycpO1xyXG4gICAgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=