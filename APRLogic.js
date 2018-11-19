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
        this.aprLookup = this.formContext.getControl("ter_employeeid");
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
        var conditions = fieldNames.reduce(function (aggregateValue, fieldName) {
            return aggregateValue + ("<condition attribute='" + fieldName + "' operator='eq' value='true' />");
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
            }
        }
        if (!isMarketServicesValid) {
            messages.push("There is no Market Service selected");
        }
        return APR.createValidationObject(false);
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
            this.aprLookup.setDisabled(true);
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
    APR.prototype.serviceLineEventHandler = function (attribute) {
        var val = attribute.getValue();
        this.serviceLines[attribute.getName()] = val || false;
        this.render();
        return $.when();
    };
    APR.prototype.facilityTypeEventHandler = function (attribute) {
        var val = attribute.getValue();
        this.facilityTypes = {};
        if (val && val.length > 0) {
            this.facilityTypes[val[0].name] = true;
        }
        this.render();
        return $.when();
    };
    APR.prototype.projectTypeEventHandler = function (attribute) {
        var _this = this;
        var val = attribute.getValue();
        this.projectTypes = {};
        if (!val || val.length === 0) {
            this.render();
            return $.when();
        }
        return this.api.request("ter_projecttypes(" + val[0].id + ")?$select=ter_projecttypecode", "GET")
            .fail(webapi_1.webapi.fail)
            .then(function (projectType) {
            var codeString = "" + projectType.ter_projecttypecode;
            _this.projectTypes[codeString] = true;
            _this.render();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi90cy9BUFIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQVBSTG9naWMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQ3JtQ29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi90cy93ZWJhcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxxRUFBa0M7QUFPbEMsSUFBVyxnQkFLVjtBQUxELFdBQVcsZ0JBQWdCO0lBQ3ZCLCtDQUEyQjtJQUMzQixxREFBaUM7SUFDakMsaURBQTZCO0lBQzdCLHVEQUFtQztBQUN2QyxD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QUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUk7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUFBLENBQUM7SUFDTixhQUFDO0FBQUQsQ0FBQztBQTdHWSx3QkFBTSIsImZpbGUiOiJBUFJMb2dpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvQVBSTG9naWMudHNcIik7XG4iLCJpbXBvcnQgeyB3ZWJhcGkgfSBmcm9tICcuL3dlYmFwaSc7XHJcblxyXG5pbnRlcmZhY2UgS2V5VmFsdWU8VD4ge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogVFxyXG59XHJcblxyXG5jb25zdCBlbnVtIFNlcnZpY2VMaW5lTmFtZXMge1xyXG4gICAgTWF0ZXJpYWxzID0gXCJ0ZXJfbWF0ZXJpYWxzXCIsXHJcbiAgICBHZW90ZWNobmljYWwgPSBcInRlcl9nZW90ZWNobmljYWxcIixcclxuICAgIEZhY2lsaXRpZXMgPSBcInRlcl9mYWNpbGl0aWVzXCIsXHJcbiAgICBFbnZpcm9ubWVudGFsID0gXCJ0ZXJfZW52aXJvbm1lbnRhbFwiXHJcbn1cclxuXHJcbmNvbnN0IFRlbGVjb21tdW5pY2F0aW9uRmFjaWxpdHlUeXBlID0gXCJUZWxlY29tbXVuaWNhdGlvbnNcIjtcclxuXHJcbmNvbnN0IGVudW0gUHJvamVjdFR5cGVzIHtcclxuICAgIFJhaWwgPSBcIjIwNDBcIixcclxuICAgIEludGVybW9kYWwgPSBcIjIwMzVcIlxyXG59XHJcblxyXG5jb25zdCBlbnVtIFBSRyB7XHJcbiAgICBJbmR1c3RyaWFsSHlnaWVuZSA9IFwiSW5kdXN0cmlhbCBIeWdpZW5lXCIsXHJcbiAgICBOYXR1cmFsUmVzb3VyY2VzID0gXCJOYXR1cmFsIFJlc291cmNlc1wiLFxyXG4gICAgRVNBID0gXCJFU0FcIixcclxuICAgIEFzYmVzdG9zID0gXCJBc2Jlc3Rvc1wiLFxyXG4gICAgUmVtZWRpYXRpb24gPSBcIlJlbWVkaWF0aW9uXCIsXHJcbiAgICBSZWd1bGF0b3J5Q29tcGxpYW5jZSA9IFwiUmVndWxhdG9yeSBDb21wbGlhbmNlXCIsXHJcbiAgICBTaXRlSW52ZXN0aWdhdGlvbiA9IFwiU2l0ZSBJbnZlc3RpZ2F0aW9uXCIsXHJcbiAgICBTb2xpZFdhc3RlID0gXCJTb2xpZCBXYXN0ZVwiXHJcbn1cclxuXHJcbmNvbnN0IGVudW0gR3JvdXBOYW1lcyB7XHJcbiAgICBFTlZBc2Jlc3RvcyA9IFwidGVyX2FwcmVudmFzYmVzdG9zXCIsXHJcbiAgICBFTlZFbnZpcm9ubWVudGFsUmVtZWRpYXRpb25EZXNpZ24gPSBcInRlcl9hcHJlbnZlbnZyZW1kZXNpZ25cIixcclxuICAgIEVOVkluZHVzdHJpYWxIeWdpZW5lU2FmZXR5ID0gXCJ0ZXJfYXByZW52aW5kaHlnaWVuZVwiLFxyXG4gICAgRU5WTmF0dXJhbEN1bHR1cmFsUmVzb3VyY2VzID0gXCJ0ZXJfYXByZW52bmF0Y3VsdHJlc1wiLFxyXG4gICAgRU5WUGhhc2UxRVNBID0gXCJ0ZXJfYXByZW52cGhhc2UxZXNhXCIsXHJcbiAgICBFTlZSZWd1bGF0b3J5Q29tcGxpYW5jZSA9IFwidGVyX2FwcmVudnJlZ2NvbXBcIixcclxuICAgIEVOVlNpdGVJbnZlc3RpZ2F0aW9uUkJDQSA9IFwidGVyX2FwcmVudnNpdGVpbnZyYmNhXCIsXHJcbiAgICBFTlZUZWxlY29tbXVuaWNhdGlvbnNORVBBID0gXCJ0ZXJfYXByZW52dGVsZW5lcGFcIixcclxuICAgIEZBQ0FxdWF0aWNzID0gXCJ0ZXJfYXByZmFjYXF1YXRpY3NcIixcclxuICAgIEZBQ0J1aWxkaW5nRW5jbG9zdXJlQ29uc3VsdGluZyA9IFwidGVyX2FwcmZhY2J1aWxkZW5jbG9zZWNvbnN1bHRcIixcclxuICAgIEZBQ0VuZ2luZWVyaW5nRGlhZ25vc3RpY3MgPSBcInRlcl9hcHJmYWNlbmdkaWFnXCIsXHJcbiAgICBGQUNNZWNoYW5pY2FsRWxlY3RyaWNhbGFuZFBsdW1iaW5nID0gXCJ0ZXJfYXByZmFjbWVjaGVsZWNwbHVtYlwiLFxyXG4gICAgRkFDUHJvcGVydHlDb25kaXRpb25Bc3Nlc21lbnQgPSBcInRlcl9hcHJmYWNwcm9wY29uYXNzZXNcIixcclxuICAgIEdFT0dlb0Rlc2lnbiA9IFwidGVyX2Fwcmdlb2dlb2Rlc2lnblwiLFxyXG4gICAgR0VPR2VvdGVjaG5pY2FsID0gXCJ0ZXJfYWRhcHJnZW9nZW90ZWNobmljYWxcIixcclxuICAgIEdFT1BhdmVtZW50RW5naW5lZXJpbmcgPSBcInRlcl9hcHJnZW9wYXZlZW5nXCIsXHJcbiAgICBHRU9SYWlsSW50ZXJtb2RhbCA9IFwidGVyX2Fwcmdlb3JhaWxpbnRlcm1cIixcclxuICAgIE1BVENvbnN0cnVjdGlvbk1hdGVyaWFsc2FuZEluc3BlY3Rpb24gPSBcInRlcl9hcHJtYXRjb25zdG1hdHVpbnNwZWN0XCIsXHJcbiAgICBNQVRNYXRlcmlhbHMgPSBcInRlcl9hcHJtYXRtYXRlcmlhbHNcIixcclxuICAgIE1BVE1hdGVyaWFsc0VuZ1Rlc3RpbmdhbmRJbnNwZWN0ID0gXCJ0ZXJfYXBybWF0bWF0ZW5ndGVzdGluc3BlY3RcIixcclxuICAgIEFEQVJQRU5WU29saWRXYXN0ZSA9IFwidGVyX2FycGVudnNvbGlkd2FzdGVcIlxyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VtYXBob3JlIHtcclxuICAgIG1lc3NhZ2VzOiBzdHJpbmdbXSxcclxuICAgIHN5Z25hbDogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQVBSIHtcclxuICAgIGFwckxvb2t1cDogWHJtLkNvbnRyb2xzLkxvb2t1cENvbnRyb2w7XHJcblxyXG4gICAgcHJpdmF0ZSBhcGk6IHdlYmFwaSA9IG5ldyB3ZWJhcGkoKTtcclxuICAgIHByaXZhdGUgZmlsdGVyRXhwcmVzc2lvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIHNlcnZpY2VMaW5lczogeyBbbmFtZTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBwcml2YXRlIGZhY2lsaXR5VHlwZXM6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0VHlwZXM6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBtYXJrZXRTZXJ2aWNlczogeyBbbmFtZTogbnVtYmVyXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICAvL3ByaXZhdGUgcHJnczogeyBbbmFtZTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1ZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocHVibGljIGZvcm1Db250ZXh0OiBYcm0uRm9ybUNvbnRleHQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShmb3JtQ29udGV4dDogWHJtLkZvcm1Db250ZXh0KTogSlF1ZXJ5UHJvbWlzZTxBUFI+IHtcclxuICAgICAgICBjb25zdCBhcHIgPSBuZXcgQVBSKGZvcm1Db250ZXh0KTtcclxuICAgICAgICByZXR1cm4gYXByLmluaXQoKS50aGVuKCgpID0+IGFwcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB0aGlzLmFwckxvb2t1cCA9IHRoaXMuZm9ybUNvbnRleHQuZ2V0Q29udHJvbDxYcm0uQ29udHJvbHMuTG9va3VwQ29udHJvbD4oXCJ0ZXJfZW1wbG95ZWVpZFwiKTtcclxuXHJcbiAgICAgICAgLy9zZXJ2aWNlIGxpbmVzXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5NYXRlcmlhbHNdID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5HZW90ZWNobmljYWxdID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5GYWNpbGl0aWVzXSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9mYWNpbGl0eSB0eXBlc1xyXG4gICAgICAgIHRoaXMuZmFjaWxpdHlUeXBlc1tUZWxlY29tbXVuaWNhdGlvbkZhY2lsaXR5VHlwZV0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudEhhbmRsZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdE9iamVjdHMoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseUdyb3VwRmlsdGVyKC4uLmZpZWxkTmFtZXM6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY29uZGl0aW9ucyA9IGZpZWxkTmFtZXMucmVkdWNlKChhZ2dyZWdhdGVWYWx1ZTogc3RyaW5nLCBmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWdncmVnYXRlVmFsdWUgKyBgPGNvbmRpdGlvbiBhdHRyaWJ1dGU9JyR7ZmllbGROYW1lfScgb3BlcmF0b3I9J2VxJyB2YWx1ZT0ndHJ1ZScgLz5gO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGA8ZmlsdGVyIHR5cGU9J29yJz4ke2NvbmRpdGlvbnN9PC9maWx0ZXI+YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFQUlRvRW1wdHkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDxmaWx0ZXIgdHlwZT0nYW5kJz48Y29uZGl0aW9uIGF0dHJpYnV0ZT0nbW9kaWZpZWRvbicgb3BlcmF0b3I9J251bGwnIC8+PC9maWx0ZXI+YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRPYmplY3RzKCk6IEpRdWVyeVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgLy8gc2VydmljZSBsaW5lc1xyXG4gICAgICAgIGxldCByZXF1ZXN0czogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBzZXJ2aWNlTGluZSBpbiB0aGlzLnNlcnZpY2VMaW5lcykge1xyXG4gICAgICAgICAgICBsZXQgYXR0ciA9IHRoaXMuZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKHNlcnZpY2VMaW5lKSBhcyBYcm0uQXR0cmlidXRlcy5Cb29sZWFuQXR0cmlidXRlO1xyXG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKHRoaXMuc2VydmljZUxpbmVFdmVudEhhbmRsZXIoYXR0cikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmFjaWxpdHkgdHlwZVxyXG4gICAgICAgIGxldCBmYWNpbGl0eVR5cGVBdHRyID0gdGhpcy5mb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoXCJ0ZXJfZmFjaWxpdHl0eXBlXCIpIGFzIFhybS5BdHRyaWJ1dGVzLkxvb2t1cEF0dHJpYnV0ZTtcclxuICAgICAgICByZXF1ZXN0cy5wdXNoKHRoaXMuZmFjaWxpdHlUeXBlRXZlbnRIYW5kbGVyKGZhY2lsaXR5VHlwZUF0dHIpKTtcclxuXHJcbiAgICAgICAgLy8gcHJvamVjdCB0eXBlXHJcbiAgICAgICAgbGV0IHByb2plY3RUeXBlQXR0ciA9IHRoaXMuZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKFwidGVyX3Byb2plY3R0eXBlXCIpIGFzIFhybS5BdHRyaWJ1dGVzLkxvb2t1cEF0dHJpYnV0ZTtcclxuICAgICAgICByZXF1ZXN0cy5wdXNoKHRoaXMucHJvamVjdFR5cGVFdmVudEhhbmRsZXIocHJvamVjdFR5cGVBdHRyKSk7XHJcblxyXG4gICAgICAgIC8vIE1hcmtldGluZyBTZXJ2aWNlXHJcbiAgICAgICAgbGV0IG1hcmtldFNlcnZpY2VBdHRyID0gdGhpcy5mb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoXCJ0ZXJfbWFya2V0c2VydmljZXNcIikgYXMgWHJtLkF0dHJpYnV0ZXMuQXR0cmlidXRlO1xyXG4gICAgICAgIHJlcXVlc3RzLnB1c2godGhpcy5tYXJrZXRTZXJ2aWNlc0V2ZW50SGFuZGxlcihtYXJrZXRTZXJ2aWNlQXR0cikpO1xyXG5cclxuICAgICAgICByZXR1cm4gJC53aGVuKHJlcXVlc3RzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVWYWxpZGF0aW9uT2JqZWN0KGlzT0s6IGJvb2xlYW4sIG1lc3NhZ2VzPzogc3RyaW5nW10pOiBTZW1hcGhvcmUge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN5Z25hbDogaXNPSyxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhblVubG9jaygpOiBTZW1hcGhvcmUge1xyXG4gICAgICAgIC8vIGNoZWNrIHNlcnZpY2VsaW5lc1xyXG4gICAgICAgIGxldCBtZXNzYWdlczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBsZXQgaXNTZXJ2aWNlTGluZXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5zZXJ2aWNlTGluZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZUxpbmVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpc1NlcnZpY2VMaW5lc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNTZXJ2aWNlTGluZXNWYWxpZCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKFwiVGhlcmUgaXMgbm8gU2VydmljZSBMaW5lIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZmFjaWxpdHkgLyBwcm9qZWN0IHR5cGVzXHJcblxyXG4gICAgICAgIGxldCBpc0ZhY2lsaXR5VHlwZXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc1Byb2plY3RUeXBlc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLmZhY2lsaXR5VHlwZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmFjaWxpdHlUeXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaXNGYWNpbGl0eVR5cGVzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLnByb2plY3RUeXBlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0VHlwZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlzUHJvamVjdFR5cGVzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNGYWNpbGl0eVR5cGVzVmFsaWQpIHtcclxuICAgICAgICAgICAgbWVzc2FnZXMucHVzaChcIlRoZXJlIGlzIG5vIEZhY2lsaXR5IFR5cGUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNQcm9qZWN0VHlwZXNWYWxpZCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKFwiVGhlcmUgaXMgbm8gUHJvamVjdCBUeXBlIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbWFya2V0IHNlcnZpY2VzXHJcbiAgICAgICAgbGV0IGlzTWFya2V0U2VydmljZXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXJrZXRTZXJ2aWNlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXJrZXRTZXJ2aWNlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaXNNYXJrZXRTZXJ2aWNlc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc01hcmtldFNlcnZpY2VzVmFsaWQpIHtcclxuICAgICAgICAgICAgbWVzc2FnZXMucHVzaChcIlRoZXJlIGlzIG5vIE1hcmtldCBTZXJ2aWNlIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiBBUFIuY3JlYXRlVmFsaWRhdGlvbk9iamVjdChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZSgpOiBYcm0uTG9va3VwVmFsdWUge1xyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmFwckxvb2t1cC5nZXRBdHRyaWJ1dGUoKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIHJldHVybiB2YWwgJiYgdmFsWzBdID8gdmFsWzBdIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXBvbmVudCBoYXZlIG5vdCBpbml0aWFsaXplZCB5ZXRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaS5cdFNlcnZpY2UgTGluZSwgRmFjaWxpdHkgVHlwZS4gUHJvamVjdCBUeXBlLCBBTkQgdGhlIG5ldyBNYXJrZXQgU2VydmljZXMgbXVsdGkgc2VsZWN0IG9wdGlvbiBzZXQgbXVzdCBiZSBhc3NpZ25lZCBmaXJzdCBiZWZvcmUgXHJcbiAgICAgICAgLy8gdGhlIEFQUiDigJMgQXV0aG9yaXplIFByb2plY3QgUmV2aWV3ZXIgY2FuIGJlIGFzc2lnbmVkLiBMb2NrIGRvd24gdGhlIEFQUiBmaWVsZCB1bnRpbCBhbGwgb2YgdGhlIG90aGVyIGZpZWxkcyBoYXZlIGJlZW4gZmlsbGVkIGluLiBcclxuICAgICAgICAvLyBPbmx5IHRoZW4gY2FuIHRoZSB1c2VyIHNlbGVjdCB0aGUgbG9va3VwIGZvciB0aGUgQVBSXHJcbiAgICAgICAgY29uc3QgdW5Mb2NrU2VwYXBob3JlID0gdGhpcy5jYW5VbmxvY2soKTtcclxuICAgICAgICBpZiAoIXVuTG9ja1NlcGFwaG9yZS5zeWduYWwpIHtcclxuICAgICAgICAgICAgLy90aGlzLmFwckxvb2t1cC5nZXRBdHRyaWJ1dGUoKS5zZXRWYWx1ZShudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5zZXRBUFJUb0VtcHR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXByTG9va3VwLnNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgICAgICBYcm0uVXRpbGl0eS5hbGVydERpYWxvZyhgU2VydmljZSBMaW5lLCBGYWNpbGl0eSAvIFByb2plY3QgVHlwZSwgQU5EIHRoZSBuZXcgTWFya2V0aW5nIFNlcnZpY2VzIG11c3QgYmUgYXNzaWduZWQgZmlyc3QgXFxuICR7dW5Mb2NrU2VwYXBob3JlLm1lc3NhZ2VzLnJlZHVjZSgoYWNjLCBwYXJ0KSA9PiBhY2MgKyAnLCAnICsgcGFydCl9YCwgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXByTG9va3VwLnNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIGlpLlx0SWYgU0wgPSBFbnZpcm9ubWVudGFsIEFORCBGYWNpbGl0eSBUeXBlID0gVGVsZWNvbW11bmljYXRpb25zIEFORCB0aGUgTWFya2V0IFNlcnZpY2VzIElOIChcclxuICAgICAgICAvLyAgICAgICAgICAgIE5lcGEgRUEgLyBFSVMgPSAyODIsIDU5MCwgMDc3O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgTkVQQSBHZW5lcmFsID0gMjgyLCA1OTAsIDA3OFxyXG4gICAgICAgIC8vKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmVcclxuICAgICAgICAvL+KAolx0RU5WIFRlbGVjb21tdW5pY2F0aW9ucyAtIE5FUEFcclxuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSAmJiB0aGlzLmZhY2lsaXR5VHlwZXNbVGVsZWNvbW11bmljYXRpb25GYWNpbGl0eVR5cGVdICYmIFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDc3XSB8fFxyXG4gICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA3OF1cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5FTlZUZWxlY29tbXVuaWNhdGlvbnNORVBBKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlpaS5cdElmIFNMID0gRW52aXJvbm1lbnRhbCBBTkQgTWFya2V0IFNlcnZpY2VzIElOIChcclxuICAgICAgICAvLyAgICAgICAgSGF6YXJkb3VzIEJ1aWxkaW5nIE1hdGVyaWFscyA9IDI4MiwgNTkwLCAwNDk7IFxyXG4gICAgICAgIC8vICAgICAgICBIZWFsdGggYW5kIFNhZmV0eSA9IDI4MiwgNTkwLCAwNTA7XHJcbiAgICAgICAgLy8gICAgICAgIElIIExpdGlnYXRpb24gU3VwcG9ydCA9IDI4MiwgNTkwLCAwNTE7XHJcbiAgICAgICAgLy8gICAgICAgIElIIE90aGVyID0gMjgyLCA1OTAsIDA1NDtcclxuICAgICAgICAvLyAgICAgICAgSUggVHJhaW5pbmcgPSAyODIsIDU5MCwgMDU1O1xyXG4gICAgICAgIC8vICAgICAgICBJbmRvb3IgQWlyIFF1YWxpdHkgPSAyODIsIDU5MCwgMDU2O1xyXG4gICAgICAgIC8vICAgICAgICBJbmR1c3RyaWFsIEh5Z2llbmUgPSAyODIsIDU5MCwgMDU3O1xyXG4gICAgICAgIC8vICAgICAgICBMZWFkIEJhc2VkIFBhaW50ID0gMjgyLCA1OTAsIDA2NDtcclxuICAgICAgICAvLyAgICAgICAgTW9sZCBBc3Nlc3NtZW50ID0gMjgyLCA1OTAsIDA3NDtcclxuICAgICAgICAvLyAgICAgICAgTW9sZCBSZW1lZGlhdGlvbiA9IDI4MiwgNTkwLCAwNzU7XHJcbiAgICAgICAgLy8gICAgICAgIE5vaXNlIFN0dWRpZXMgPSAyODIsIDU5MCwgMDgwO1xyXG4gICAgICAgIC8vICAgICAgICBSYWRvbiA9IDI4MiwgNTkwLCAwODlcclxuICAgICAgICAvLykgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzOlxyXG4gICAgICAgIC8v4oCiXHRFTlYgSW5kdXN0cmlhbCBIeWdpZW5lIC0gU2FmZXR5XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSAmJiAvKnRoaXMucHJnc1tQUkcuSW5kdXN0cmlhbEh5Z2llbmVdKi9cclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNDldIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA1MF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDUxXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNTRdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA1NV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDU2XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNTddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA2NF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDc0XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNzVdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA4MF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDg5XVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkVOVkluZHVzdHJpYWxIeWdpZW5lU2FmZXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGl2Llx0SWYgU0wgPSBFbnZpcm9ubWVudGFsIEFORCBNYXJrZXQgU2VydmljZXMgSU4gKFxyXG4gICAgICAgIC8vICAgICAgICBBdmlhbiAvIEJhdCBTdHVkaWVzID0gMjgyLCA1OTAsIDAxNDtcclxuICAgICAgICAvLyAgICAgICAgQ3VsdHVyYWwgUmVzb3VyY2VzID0gMjgyLCA1OTAsIDAyNDtcclxuICAgICAgICAvLyAgICAgICAgRW52aXJvbm1lbnRhbCBQbGFubmluZyA9IDI4MiwgNTkwLCAwMjg7XHJcbiAgICAgICAgLy8gICAgICAgIEZpc2ggLyBBcXVhdGljIExpZmUgU3R1ZGllcyA9IDI4MiwgNTkwLCAwMzU7XHJcbiAgICAgICAgLy8gICAgICAgIEdlb2xvZ2ljIEFzc2Vzc21lbnQgLyBIYXphcmRzID0gMjgyLCA1OTAsIDA0MDtcclxuICAgICAgICAvLyAgICAgICAgR0lTIFN1cHBvcnQgPSAyODIsIDU5MCwgMDQzO1xyXG4gICAgICAgIC8vICAgICAgICBMYWtlIE1hbmFnZW1lbnQgPSAyODIsIDU5MCwgMDYwO1xyXG4gICAgICAgIC8vICAgICAgICBOYXR1cmFsIFJlc291cmNlIE90aGVyID0gMjgyLCA1OTAsIDA3NjtcclxuICAgICAgICAvLyAgICAgICAgTkVQQSBFQSAvIEVJUyA9IDI4MiwgNTkwLCAwNzc7XHJcbiAgICAgICAgLy8gICAgICAgIE5FUEEgR2VuZXJhbCA9IDI4MiwgNTkwLCAwNzg7XHJcbiAgICAgICAgLy8gICAgICAgIFRocmVhdGVuZWQgYW5kIEVuZGFuZ2VyZWQgU3BlY2llcyBTdHVkaWVzID0gMjgyLCA1OTAsIDEyMTtcclxuICAgICAgICAvLyAgICAgICAgV2F0ZXIgUmVzb3VyY2VzID0gMjgyLCA1OTAsIDEyOTtcclxuICAgICAgICAvLyAgICAgICAgV2V0bGFuZCBhbmQgU3RyZWFtIE1pdGlnYXRpb24gLyBSZXN0b3JhdGlvbiA9IDI4MiwgNTkwLCAxMzI7XHJcbiAgICAgICAgLy8gICAgICAgIFdldGxhbmQgLyBXT1VTIERlbGluZWF0aW9uICYgUGVybWl0dGluZyA9IDI4MiwgNTkwLCAxMzNcclxuICAgICAgICAvLykgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzXHJcbiAgICAgICAgLy/igKJcdEVOViBOYXR1cmFsIC0gQ3VsdHVyYWwgUmVzb3VyY2VzXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSAmJiAvKnRoaXMucHJnc1tQUkcuTmF0dXJhbFJlc291cmNlc10qL1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAxNF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDI0XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMjhdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAzNV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDQwXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNDNdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA2MF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDc2XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNzddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA3OF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTIxXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMjldIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEzMl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTMzXVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkVOVk5hdHVyYWxDdWx0dXJhbFJlc291cmNlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Yudi5cdElmIFNMID0gRW52aXJvbm1lbnRhbCBBTkQgTWFya2V0IFNlcnZpY2VzIElOIChcclxuICAgICAgICAvLyAgICAgICAgICAgIEVTQSBPdGhlciA9IDI4MiwgNTkwLCAwMjk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBGaWxlIFJldmlldyAvIFJlc2VhcmNoID0gMjgyLCA1OTAsIDAzMztcclxuICAgICAgICAvLyAgICAgICAgICAgIFBoYXNlIDEgLyBFU0EgPSAyODIsIDU5MCwgMDg2O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgVHJhbnNhY3Rpb24gU2NyZWVuID0gMjgyLCA1OTAsIDEyMlxyXG4gICAgICAgIC8vKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHNcclxuICAgICAgICAvL+KAolx0RU5WIFBoYXNlIDEgRVNBXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSAmJiAvKnRoaXMucHJnc1tQUkcuRVNBXSovXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDI5XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMzNdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA4Nl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTIyXVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkVOVlBoYXNlMUVTQSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2aS5cdElmIFNMID0gRW52aXJvbm1lbnRhbCBBTkQgTWFya2V0IFNlcnZpY2VzIElOIChcclxuICAgICAgICAvLyAgICAgICAgICAgIEFzYmVzdG9zIEFiYXRlbWVudCBEZXNpZ24gPSAyODIsIDU5MCwgMDA1O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgQXNiZXN0b3MgQWJhdGVtZW50IE1vbml0b3JpbmcgPSAyODIsIDU5MCwgMDA2O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgQXNiZXN0b3MgSW5zcGVjdGlvbiA9IDI4MiwgNTkwLCAwMDc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBBc2Jlc3RvcyBMaXRpZ2F0aW9uIFN1cHBvcnQgPSAyODIsIDU5MCwgMDA4O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgQXNiZXN0b3MgT3BlcmF0aW9ucyAmIE1haW50ZW5hbmNlID0gMjgyLCA1OTAsIDAwOTtcclxuICAgICAgICAvLyAgICAgICAgICAgIEFzYmVzdG9zIE90aGVyID0gMjgyLCA1OTAsIDAxMDtcclxuICAgICAgICAvLyAgICAgICAgICAgIEFzYmVzdG9zIFRyYWluaW5nID0gMjgyLCA1OTAsIDAxMVxyXG4gICAgICAgIC8vKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHM6XHJcbiAgICAgICAgLy/igKJcdEVOViBBc2Jlc3Rvc1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gJiYgLyp0aGlzLnByZ3NbUFJHLkFzYmVzdG9zXSovIFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAwNV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDA2XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMDddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAwOF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDA5XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMTBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAxMV1cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5FTlZBc2Jlc3Rvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2aWkuXHRJZiBTTCA9IEVudmlyb25tZW50YWwgQU5EIE1hcmtldCBTZXJ2aWNlcyBJTiAoXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgRW52LkNvbnN0cnVjdGlvbiBPYnNlcnZhdGlvbiA9IDI4MiwgNTkwLCAwMjY7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgR0lTIFN1cHBvcnQg4oCTIFJlbWVkaWF0aW9uID0gMjgyLCA1OTAsIDA0NDtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBMaXRpZ2F0aW9uIFN1cHBvcnQg4oCTIFJlbWVkaWF0aW9uID0gMjgyLCA1OTAsIDA2NztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBSZW1lZGlhbCBBY3Rpb24gLyBPcGVyYXRpb25zIC8gTWFpbnRlbmFuY2UgPSAyODIsIDU5MCwgMDkzO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFJlbWVkaWFsIENvbnN0cnVjdGlvbiAtIEZhY2lsaXR5IFJlY2xhbWF0aW9uID0gMjgyLCA1OTAsIDA5NDtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBSZW1lZGlhbCBDb25zdHJ1Y3Rpb24gLSBHcmFkaW5nIC8gRXhjYXZhdGlvbiAvIERpc3Bvc2FsID0gMjgyLCA1OTAsIDA5NTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBSZW1lZGlhbCBDb25zdHJ1Y3Rpb24gLSBPbnNpdGUgU29pbCBUcmVhdG1lbnQoQmlvKSA9IDI4MiwgNTkwLCAwOTY7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgUmVtZWRpYWwgQ29uc3RydWN0aW9uIC0gU3lzdGVtIERlY29tbWlzc2lvbmluZyA9IDI4MiwgNTkwLCAwOTc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgUmVtZWRpYWwgQ29uc3RydWN0aW9uIC0gU3lzdGVtIEluc3RhbGxhdGlvbiAvIE8gJiBNID0gMjgyLCA1OTAsIDA5ODtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBSZW1lZGlhbCBDb25zdHJ1Y3Rpb24gLSBTeXN0ZW0gT3BlcmF0aW9uIC8gTWFpbnRlbmFuY2UgPSAyODIsIDU5MCwgMDk5O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFJlbWVkaWF0aW9uIERlc2lnbiA9IDI4MiwgNTkwLCAxMDA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgUmVtZWRpYXRpb24gT3RoZXIgPSAyODIsIDU5MCwgMTAxO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFZhcG9yIE1pdGlnYXRpb24gRGVzaWduID0gMjgyLCA1OTAsIDEyNjtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBWYXBvciBNaXRpZ2F0aW9uIEluc3RhbGxhdGlvbiAmIE1vbml0b3JpbmcgPSAyODIsIDU5MCwgMTI3XHJcbiAgICAgICAgLy8pIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwczpcclxuICAgICAgICAvL+KAolx0RU5WIEVudmlyb25tZW50YWwgUmVtZWRpYXRpb24gRGVzaWduXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSAmJiAvKnRoaXMucHJnc1tQUkcuUmVtZWRpYXRpb25dKi9cclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMjZdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA0NF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDY3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOTNdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5NF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDk1XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOTZdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5N10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDk4XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOTldIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEwMF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTAxXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMjZdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEyN11cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5FTlZFbnZpcm9ubWVudGFsUmVtZWRpYXRpb25EZXNpZ24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmlpaS5JZiBTTCA9IEVudmlyb25tZW50YWwgQU5EIE1hcmtldCBTZXJ2aWNlcyBJTiAoXHJcbiAgICAgICAgLy8gICAgICAgICAgICBBaXIgUGVybWl0dGluZyA9IDI4MiwgNTkwLCAwMDE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBBaXIgUXVhbGl0eSA9IDI4MiwgNTkwLCAwMDI7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBDb21wbGlhbmNlIEFzc2Vzc21lbnQgPSAyODIsIDU5MCwgMDE5O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgTGl0aWdhdGlvbiAgU3VwcG9ydCA9IDI4MiwgNTkwLCAwNjU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBPdXRkb29yIEFpciBTdHVkaWVzIC8gVGVzdGluZyA9IDI4MiwgNTkwLCAwODM7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBQb2xsLlByZXZlbnRpb24gLyBXYXN0ZSBNaW4gPSAyODIsIDU5MCwgMDg3O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgUmVndWxhdG9yeSBDb21wbGlhbmNlIE90aGVyID0gMjgyLCA1OTAsIDA5MDtcclxuICAgICAgICAvLyAgICAgICAgICAgIFJlZ3VsYXRvcnkgQ29tcGxpYW5jZSBUcmFpbmluZyA9IDI4MiwgNTkwLCAwOTE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBSZWd1bGF0b3J5IENvbXBsaWFuY2UgLyBQZXJtaXR0aW5nID0gMjgyLCA1OTAsIDA5MjtcclxuICAgICAgICAvLyAgICAgICAgICAgIFNwaWxsIFByZXZlbnRpb24gPSAyODIsIDU5MCwgMTE1O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgU3Rvcm13YXRlciA9IDI4MiwgNTkwLCAxMTc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBXYXN0ZXdhdGVyIERlc2lnbiBTZXJ2aWNlcyA9IDI4MiwgNTkwLCAxMjg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBXYXRlciBTdHVkaWVzID0gMjgyLCA1OTAsIDEzMDtcclxuICAgICAgICAvLyAgICAgICAgICAgIFdlbGwgSGVhZCBQcm90ZWN0aW9uID0gMjgyLCA1OTAsIDEzMVxyXG4gICAgICAgIC8vKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHM6XHJcbiAgICAgICAgLy/igKJcdEVOViBSZWd1bGF0b3J5IENvbXBsaWFuY2VcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkVudmlyb25tZW50YWxdICYmIC8qdGhpcy5wcmdzW1BSRy5SZWd1bGF0b3J5Q29tcGxpYW5jZV0qL1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAwMV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDAyXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMTldIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA2NV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDgzXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwODddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5MF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDkxXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOTJdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDExNV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTE3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMjhdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEzMF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTMxXVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkVOVlJlZ3VsYXRvcnlDb21wbGlhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGl4Llx0SWYgU0wgPSBFbnZpcm9ubWVudGFsIEFORCBNYXJrZXQgU2VydmljZXMgSU4gKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgQnJvd25maWVsZHMgPSAyODIsIDU5MCwgMDE1O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgRW52aXJvbm1lbnRhbCBEcmlsbGluZyA9IDI4MiwgNTkwLCAwMjc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBHZW9sb2dpYyBBc3Nlc3NtZW50IC8gRmF1bHQgU3R1ZGllcyA9IDI4MiwgNTkwLCAwMzk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBHZW9waHlzaWNhbCBBc3Nlc3NtZW50ID0gMjgyLCA1OTAsIDA0MTtcclxuICAgICAgICAvLyAgICAgICAgICAgIEdyb3VuZHdhdGVyIE1vZGVsaW5nID0gMjgyLCA1OTAsIDA0NztcclxuICAgICAgICAvLyAgICAgICAgICAgIExpdGlnYXRpb24gU3VwcG9ydCAtIFNpdGUgSW52ZXN0aWdhdGlvbiA9IDI4MiwgNTkwLCAwNjg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBMU0kgLyBQaGFzZSAyID0gMjgyLCA1OTAsIDA2OTtcclxuICAgICAgICAvLyAgICAgICAgICAgIFJpc2sgQXNzZXNzbWVudCA9IDI4MiwgNTkwLCAxMDQ7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBTaXRlIENsb3N1cmUgLyBWQ1AgU2VydmljZXMgPSAyODIsIDU5MCwgMTA3O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgVVNUIFJlbW92YWwgPSAyODIsIDU5MCwgMTI0O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgVmFwb3IgSW50cnVzaW9uIC8gTWlncmF0aW9uID0gMjgyLCA1OTAsIDEyNVxyXG4gICAgICAgIC8vKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHM6XHJcbiAgICAgICAgLy/igKJcdEVOViBTaXRlIEludmVzdGlnYXRpb24gLSBSQkNBXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSAmJiAvKnRoaXMucHJnc1tQUkcuU2l0ZUludmVzdGlnYXRpb25dKi9cclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMTVdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAyN10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDM5XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNDFdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA0N10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDY4XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNjldIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEwNF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTA3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMjRdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEyNV1cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5FTlZTaXRlSW52ZXN0aWdhdGlvblJCQ0EpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8geC5cdElmIFNMID0gRW52aXJvbm1lbnRhbCBBTkQgTWFya2V0IFNlcnZpY2VzIElOIChcclxuICAgICAgICAvLyAgICAgICAgICAgIEdyb3VuZHdhdGVyIENvbXBsaWFuY2UgTW9uaXRvcmluZyA9IDI4MiwgNTkwLCAwNDY7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBMYW5kZmlsbCBDbG9zdXJlIFNlcnZpY2VzID0gMjgyLCA1OTAsIDA2MTtcclxuICAgICAgICAvLyAgICAgICAgICAgIExhbmRmaWxsIEdhcyBEZXNpZ24gPSAyODIsIDU5MCwgMDYyO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgTGFuZGZpbGwgR2FzIE1vbml0b3JpbmcgPSAyODIsIDU5MCwgMDYzO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgU29saWQgV2FzdGUgLyBMYW5kZmlsbCBEZXNpZ24gPSAyODIsIDU5MCwgMTEwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgU29saWQgV2FzdGUgLyBMYW5kZmlsbCBPdGhlciA9IDI4MiwgNTkwLCAxMTE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBTb2xpZCBXYXN0ZSAvIExhbmRmaWxsIFBlcm1pdHRpbmcgPSAyODIsIDU5MCwgMTEyXHJcbiAgICAgICAgLy8pIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwczpcclxuICAgICAgICAvL+KAolx0RU5WIFNvbGlkIFdhc3RlXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSAmJiAvKnRoaXMucHJnc1tQUkcuU29saWRXYXN0ZV0qL1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA0Nl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDYxXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNjJdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA2M10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTEwXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMTFdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDExMl1cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoR3JvdXBOYW1lcy5BREFSUEVOVlNvbGlkV2FzdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy94aS5JZiBTTCA9IEZhY2lsaXRpZXMgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzOlxyXG4gICAgICAgIC8v4oCiXHRGQUMgQXF1YXRpY3NcclxuICAgICAgICAvL+KAolx0RkFDIEJ1aWxkaW5nIEVuY2xvc3VyZSBDb25zdWx0aW5nXHJcbiAgICAgICAgLy/igKJcdEZBQyBFbmdpbmVlcmluZyBEaWFnbm9zdGljc1xyXG4gICAgICAgIC8v4oCiXHRGQUMgTWVjaGFuaWNhbCBFbGVjdHJpY2FsIGFuZCBQbHVtYmluZ1xyXG4gICAgICAgIC8v4oCiXHRGQUMgUHJvcGVydHkgQ29uZGl0aW9uIEFzc2Vzc21lbnRcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkZhY2lsaXRpZXNdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuRkFDQXF1YXRpY3MsXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLkZBQ0J1aWxkaW5nRW5jbG9zdXJlQ29uc3VsdGluZyxcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuRkFDRW5naW5lZXJpbmdEaWFnbm9zdGljcyxcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuRkFDTWVjaGFuaWNhbEVsZWN0cmljYWxhbmRQbHVtYmluZyxcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuRkFDUHJvcGVydHlDb25kaXRpb25Bc3Nlc21lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy94aWkuSWYgU0wgPSBHZW90ZWNobmljYWwgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzKGJhc2ljYWxseSBhbGwgR0VPIGdyb3Vwcyk6XHJcbiAgICAgICAgLy/igKJcdEdFTyBHZW8gRGVzaWduXHJcbiAgICAgICAgLy/igKJcdEdFTyBHZW90ZWNobmljYWxcclxuICAgICAgICAvL+KAolx0R0VPIFBhdmVtZW50IEVuZ2luZWVyaW5nXHJcbiAgICAgICAgLy/igKJcdEdFTyBSYWlsIC0gSW50ZXJtb2RhbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuR2VvdGVjaG5pY2FsXSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLmFwcGx5R3JvdXBGaWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLkdFT0dlb0Rlc2lnbixcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuR0VPR2VvdGVjaG5pY2FsLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5HRU9QYXZlbWVudEVuZ2luZWVyaW5nLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5HRU9SYWlsSW50ZXJtb2RhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3hpaWkuSWYgU0wgPSBHZW90ZWNobmljYWwgQU5EIFByb2plY3QgVHlwZSBpbiAoUmFpbCwgSW50ZXJtb2RhbCkgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzOlxyXG4gICAgICAgIC8v4oCiXHRHRU8gUmFpbCAtIEludGVybW9kYWxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkdlb3RlY2huaWNhbF0gJiZcclxuICAgICAgICAgICAgKHRoaXMucHJvamVjdFR5cGVzW1Byb2plY3RUeXBlcy5SYWlsXSB8fCB0aGlzLnByb2plY3RUeXBlc1tQcm9qZWN0VHlwZXMuSW50ZXJtb2RhbF0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkdFT1JhaWxJbnRlcm1vZGFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8veGl2LklmIFNMID0gTWF0ZXJpYWxzIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwcyhiYXNpY2FsbHkgYWxsIE1BVCBncm91cHMpOlxyXG4gICAgICAgIC8v4oCiXHRNQVQgQ29uc3RydWN0aW9uIE1hdGVyaWFscyBhbmQgSW5zcGVjdGlvblxyXG4gICAgICAgIC8v4oCiXHRNQVQgTWF0ZXJpYWxzXHJcbiAgICAgICAgLy/igKJcdE1BVCBNYXRlcmlhbHMgRU5HIFRlc3RpbmcgJiBJbnNwZWN0aW9uXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5NYXRlcmlhbHNdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuTUFUQ29uc3RydWN0aW9uTWF0ZXJpYWxzYW5kSW5zcGVjdGlvbixcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuTUFUTWF0ZXJpYWxzLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5NQVRNYXRlcmlhbHNFbmdUZXN0aW5nYW5kSW5zcGVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLnNldEFQUlRvRW1wdHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8veHYuSWYgYSB1c2VyIG1vZGlmaWVzIHRoZSBTZXJ2aWNlIExpbmUsIEZhY2lsaXR5IC8gUHJvamVjdCBUeXBlLCBhbmQgLyBvciBNYXJrZXRpbmcgU2VydmljZXMgdGhlIGxvZ2ljIHRvIHZhbGlkYXRlIHRoZSBBUFIgbmVlZHMgdG8gcnVuIGFnYWluLCBhbmQgaWYgdGhlIHNlbGVjdGVkIEFQUiBkb2VzIG5vdCBtZWV0IHRoZSBuZXcgY3JpdGVyaWEsIHdhcm4gdGhlIHVzZXIgYW5kIGRvIG5vdCBzYXZlLlxyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXByTG9va3VwLmFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtcIkFQUiBpcyBub3QgY29ycmVjdFwiXSxcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25MZXZlbDogXCJFUlJPUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuaXF1ZUlkOiBcImFwcl9pc19ub3RfdmFsaWRcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBYcm0uVXRpbGl0eS5hbGVydERpYWxvZyhgQVBSIGlzIG5vdCBjb3JyZWN0IGJlY2F1c2Ugb2YgY29tYmluYXRpb24gb2YgU2VydmljZSBMaW5lLCBGYWNpbGl0eS9Qcm9qZWN0IFR5cGUsIGFuZC9vciBNYXJrZXRpbmcgU2VydmljZXMuIFNhdmUgd2lsbCBiZSBibG9ja2VkYCwgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXByTG9va3VwLmNsZWFyTm90aWZpY2F0aW9uKCdhcHJfaXNfbm90X3ZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3QgYXByVmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgaWYgKCFhcHJWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJC53aGVuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVjayBmb3IgY3VycmVudCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgbGV0IGZldGNoWG1sID1cclxuICAgICAgICAgICAgYDxmZXRjaCB0b3A9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICA8ZW50aXR5IG5hbWU9XCJ2czM2MF9lbXBsb3llZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhdHRyaWJ1dGUgbmFtZT1cInZzMzYwX2VtcGxveWVlaWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWx0ZXI+XHJcblx0XHRcdCAgICAgICAgICAgIDxjb25kaXRpb24gYXR0cmlidXRlPVwidnMzNjBfZW1wbG95ZWVpZFwiIG9wZXJhdG9yPVwiZXFcIiB2YWx1ZT1cIiR7YXByVmFsdWUuaWR9XCIgLz5cclxuXHRcdCAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5maWx0ZXJFeHByZXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgPC9lbnRpdHk+XHJcbiAgICAgICAgICAgIDwvZmV0Y2g+YFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5yZXF1ZXN0KFwidnMzNjBfZW1wbG95ZWVzP2ZldGNoWG1sPVwiICsgZmV0Y2hYbWwsIFwiR0VUXCIpXHJcbiAgICAgICAgICAgIC50aGVuKHdlYmFwaS50YWtlVmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKChyZWNvcmRzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmlzVmFsaWQgPSAocmVjb3Jkcy5sZW5ndGggPiAwKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVTZWFyY2hIYW5kbGVyKGhhbmRsZXI6IFhybS5FdmVudHMuRXZlbnRDb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5hcHJMb29rdXAuYWRkQ3VzdG9tRmlsdGVyKHRoaXMuZmlsdGVyRXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2hFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICAgIHRoaXMuYXR0YWNoT25TYXZlKCk7XHJcbiAgICAgICAgdGhpcy5hcHJMb29rdXAuYWRkUHJlU2VhcmNoKHRoaXMucHJlU2VhcmNoSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmF0dGFjaFNlcnZpY2VMaW5lQXR0cmlidXRlc0V2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaEZhY2lsaXR5VHlwZSgpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoUHJvamVjdFR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaFNlcnZpY2VMaW5lQXR0cmlidXRlc0V2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgc2VydmljZUxpbmUgaW4gdGhpcy5zZXJ2aWNlTGluZXMpIHtcclxuICAgICAgICAgICAgbGV0IGF0dHIgPSB0aGlzLmZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShzZXJ2aWNlTGluZSk7XHJcbiAgICAgICAgICAgIGF0dHIuYWRkT25DaGFuZ2UoKGhhbmRsZXI6IFhybS5FdmVudHMuRXZlbnRDb250ZXh0KSA9PiB0aGlzLnNlcnZpY2VMaW5lRXZlbnRIYW5kbGVyKGhhbmRsZXIuZ2V0RXZlbnRTb3VyY2UoKSBhcyBYcm0uQXR0cmlidXRlcy5Cb29sZWFuQXR0cmlidXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXR0YWNoRmFjaWxpdHlUeXBlKCkge1xyXG4gICAgICAgIGxldCBhdHRyID0gdGhpcy5mb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoXCJ0ZXJfZmFjaWxpdHl0eXBlXCIpO1xyXG4gICAgICAgIGF0dHIuYWRkT25DaGFuZ2UoKGhhbmRsZXI6IFhybS5FdmVudHMuRXZlbnRDb250ZXh0KSA9PiB0aGlzLmZhY2lsaXR5VHlwZUV2ZW50SGFuZGxlcihoYW5kbGVyLmdldEV2ZW50U291cmNlKCkgYXMgWHJtLkF0dHJpYnV0ZXMuTG9va3VwQXR0cmlidXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2hQcm9qZWN0VHlwZSgpIHtcclxuICAgICAgICBsZXQgYXR0ciA9IHRoaXMuZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKFwidGVyX3Byb2plY3R0eXBlXCIpO1xyXG4gICAgICAgIGF0dHIuYWRkT25DaGFuZ2UoKGhhbmRsZXI6IFhybS5FdmVudHMuRXZlbnRDb250ZXh0KSA9PiB0aGlzLnByb2plY3RUeXBlRXZlbnRIYW5kbGVyKGhhbmRsZXIuZ2V0RXZlbnRTb3VyY2UoKSBhcyBYcm0uQXR0cmlidXRlcy5Mb29rdXBBdHRyaWJ1dGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaE9uU2F2ZSgpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250ZXh0LmRhdGEuZW50aXR5LmFkZE9uU2F2ZSgoY29udGV4dDogWHJtLkV2ZW50cy5TYXZlRXZlbnRDb250ZXh0KSA9PiB0aGlzLm9uU2F2ZUhhbmRsZXIoY29udGV4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TYXZlSGFuZGxlcihjb250ZXh0OiBYcm0uRXZlbnRzLlNhdmVFdmVudENvbnRleHQpIHtcclxuICAgICAgICBjb25zdCBhcmdzID0gY29udGV4dC5nZXRFdmVudEFyZ3MoKTtcclxuICAgICAgICBpZiAoYXJncy5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRleHQuZGF0YS5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBhcmdzLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VydmljZUxpbmVFdmVudEhhbmRsZXIoYXR0cmlidXRlOiBYcm0uQXR0cmlidXRlcy5Cb29sZWFuQXR0cmlidXRlKTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgdmFsID0gYXR0cmlidXRlLmdldFZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTGluZXNbYXR0cmlidXRlLmdldE5hbWUoKV0gPSB2YWwgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICByZXR1cm4gJC53aGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmYWNpbGl0eVR5cGVFdmVudEhhbmRsZXIoYXR0cmlidXRlOiBYcm0uQXR0cmlidXRlcy5Mb29rdXBBdHRyaWJ1dGUpOiBKUXVlcnlQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCB2YWwgPSBhdHRyaWJ1dGUuZ2V0VmFsdWUoKTtcclxuICAgICAgICB0aGlzLmZhY2lsaXR5VHlwZXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZhY2lsaXR5VHlwZXNbdmFsWzBdLm5hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuICQud2hlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvamVjdFR5cGVFdmVudEhhbmRsZXIoYXR0cmlidXRlOiBYcm0uQXR0cmlidXRlcy5Mb29rdXBBdHRyaWJ1dGUpOiBKUXVlcnlQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCB2YWwgPSBhdHRyaWJ1dGUuZ2V0VmFsdWUoKTtcclxuICAgICAgICB0aGlzLnByb2plY3RUeXBlcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoIXZhbCB8fCB2YWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAkLndoZW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxvYWQgcHJvamVjdCBjb2RlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnJlcXVlc3QoYHRlcl9wcm9qZWN0dHlwZXMoJHt2YWxbMF0uaWR9KT8kc2VsZWN0PXRlcl9wcm9qZWN0dHlwZWNvZGVgLCBcIkdFVFwiKVxyXG4gICAgICAgICAgICAuZmFpbCh3ZWJhcGkuZmFpbClcclxuICAgICAgICAgICAgLnRoZW4oKHByb2plY3RUeXBlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2RlU3RyaW5nID0gXCJcIiArIHByb2plY3RUeXBlLnRlcl9wcm9qZWN0dHlwZWNvZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RUeXBlc1tjb2RlU3RyaW5nXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hcmtldFNlcnZpY2VzRXZlbnRIYW5kbGVyKGF0dHJpYnV0ZTogWHJtLkF0dHJpYnV0ZXMuQXR0cmlidXRlKTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGF0dHJpYnV0ZS5nZXRWYWx1ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzID0ge307XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgb3B0aW9uIG9mIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbb3B0aW9uXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuICQud2hlbigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQVBSIH0gZnJvbSBcIi4vQVBSXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFQUkxvZ2ljIHtcclxuICAgIHZhciBhcHI6IEFQUjtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gb25Jbml0KGNvbnRleHQ6IFhybS5FdmVudHMuRXZlbnRDb250ZXh0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBmb3JtQ29udGV4dCA9IGNvbnRleHQuZ2V0Rm9ybUNvbnRleHQoKTtcclxuICAgICAgICByZXR1cm4gQVBSLmNyZWF0ZShmb3JtQ29udGV4dClcclxuICAgICAgICAgICAgLnRoZW4oKGluc3RhbmNlOiBBUFIpID0+IHtcclxuICAgICAgICAgICAgICAgIGFwciA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgYXByLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25vZGVfbW9kdWxlcy9AdHlwZXMveHJtL2luZGV4LmQudHNcIiAvPlxyXG5cclxuZXhwb3J0IGNsYXNzIENybUNvbnRleHQge1xyXG4gICAgZ2V0Q29udGV4dCgpOiBYcm0uR2xvYmFsQ29udGV4dCB7XHJcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiQ29udGV4dCBpcyBub3QgYXZhaWxhYmxlLlwiO1xyXG4gICAgICAgIGlmICh0eXBlb2YgR2V0R2xvYmFsQ29udGV4dCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBHZXRHbG9iYWxDb250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIFhybSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoWHJtLlV0aWxpdHkgJiYgWHJtLlV0aWxpdHkuZ2V0R2xvYmFsQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBYcm0uVXRpbGl0eS5nZXRHbG9iYWxDb250ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWHJtLlBhZ2UuY29udGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHsgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgQ3JtQ29udGV4dCB9IGZyb20gJy4vQ3JtQ29udGV4dCc7XHJcblxyXG5leHBvcnQgY2xhc3Mgd2ViYXBpIHtcclxuICAgIGNvbnRleHQ6IFhybS5HbG9iYWxDb250ZXh0O1xyXG4gICAgY2xpZW50VXJsOiBzdHJpbmc7XHJcbiAgICBvZGF0YVVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IENybUNvbnRleHQoKS5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgdGhpcy5jbGllbnRVcmwgPSB0aGlzLmNvbnRleHQuZ2V0Q2xpZW50VXJsKCk7XHJcbiAgICAgICAgdGhpcy5vZGF0YVVybCA9IHRoaXMubWVyZ2VVcmxQYXJ0cyh0aGlzLmNsaWVudFVybCwgXCIvYXBpL2RhdGEvdjguMi9cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlcXVlc3QocmVsYXRlZFVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgZGF0YT86IGFueSwgb3B0aW9ucz86IGFueSwgc2V0UmVxdWVzdEhlYWRlcj86ICh4aHI6IEpRdWVyeVhIUikgPT4gYW55KTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5tZXJnZVVybFBhcnRzKHRoaXMub2RhdGFVcmwsIGVuY29kZVVSSShyZWxhdGVkVXJsKSk7XHJcbiAgICAgICAgbGV0IGRlZiA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoJC5leHRlbmQoe30sIG9wdGlvbnMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbWV0aG9kIHx8IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogXCJmYWxzZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICh4aHI6IEpRdWVyeVhIUikgPT4geyB0aGlzLmJlZm9yZVNlbmQoeGhyLCBzZXRSZXF1ZXN0SGVhZGVyKSB9LFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YXR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlcXVlc3RCeUZldGNoWG1sKGVudGl0eUNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsIGZldGNoWG1sOiBhbnksIG9wdGlvbnM/OiBhbnksIHNldFJlcXVlc3RIZWFkZXI/OiAoeGhyOiBKUXVlcnlYSFIpID0+IGFueSk6IEpRdWVyeVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgLy92YXIgdXJsID0gdGhpcy5tZXJnZVVybFBhcnRzKHRoaXMub2RhdGFVcmwsIGVuY29kZVVSSShlbnRpdHlDb2xsZWN0aW9uTmFtZSkpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLm1lcmdlVXJsUGFydHModGhpcy5vZGF0YVVybCwgXCIkYmF0Y2hcIik7XHJcbiAgICAgICAgdmFyIGJhdGNoTmFtZSA9IFwiYXBwcm92YWxsb2dmZXRjaF9iYXRjaF9cIiArIChNYXRoLnJhbmRvbSgpICsgXCJcIikucmVwbGFjZSgvWyxcXC5dLywgXCJcIik7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB3ZWJhcGkuY3JlYXRlRmV0Y2hCYXRjaFJlcXVlc3QoYmF0Y2hOYW1lLCB0aGlzLm1lcmdlVXJsUGFydHModGhpcy5vZGF0YVVybCwgYCR7ZW50aXR5Q29sbGVjdGlvbk5hbWV9P2ZldGNoWG1sPSR7ZmV0Y2hYbWx9YCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCgkLmV4dGVuZCh7fSwgb3B0aW9ucyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBcImZhbHNlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKHhocjogSlF1ZXJ5WEhSKSA9PiB7IHRoaXMuYmVmb3JlU2VuZCh4aHIsIHNldFJlcXVlc3RIZWFkZXIpIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogYG11bHRpcGFydC9taXhlZDtib3VuZGFyeT0ke2JhdGNoTmFtZX1gLCAvL1wiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgLy9kYXRhdHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzcG9uc2Uuc3Vic3RyaW5nKHJlc3BvbnNlLmluZGV4T2YoJ3snKSwgcmVzcG9uc2UubGFzdEluZGV4T2YoJ30nKSArIDEpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVGZXRjaEJhdGNoUmVxdWVzdChiYXRjaE5hbWU6IHN0cmluZywgZmV0Y2hYbWxVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBib2R5Q29sbGVjdG9yID0gW2AtLSR7YmF0Y2hOYW1lfWBdO1xyXG4gICAgICAgIGJvZHlDb2xsZWN0b3IucHVzaChcIkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vaHR0cFwiKTtcclxuICAgICAgICBib2R5Q29sbGVjdG9yLnB1c2goXCJDb250ZW50LVRyYW5zZmVyLUVuY29kaW5nOiBiaW5hcnlcIik7XHJcbiAgICAgICAgYm9keUNvbGxlY3Rvci5wdXNoKFwiXCIpO1xyXG4gICAgICAgIGJvZHlDb2xsZWN0b3IucHVzaChgR0VUICR7ZmV0Y2hYbWxVcmx9IEhUVFAvMS4xYCk7XHJcbiAgICAgICAgYm9keUNvbGxlY3Rvci5wdXNoKFwiQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGJvZHlDb2xsZWN0b3IucHVzaChcIk9EYXRhLVZlcnNpb246IDQuMFwiKTtcclxuICAgICAgICBib2R5Q29sbGVjdG9yLnB1c2goXCJPRGF0YS1NYXhWZXJzaW9uOiA0LjBcIik7XHJcbiAgICAgICAgYm9keUNvbGxlY3Rvci5wdXNoKFwiXCIpO1xyXG4gICAgICAgIGJvZHlDb2xsZWN0b3IucHVzaChgLS0ke2JhdGNoTmFtZX0tLWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0YWtlVmFsdWUocmVzcG9uc2U6YW55KTogYW55W10ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS52YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGZhaWwoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJlZm9yZVNlbmQoeGhyOiBKUXVlcnlYSFIsIGN1c3RvbUJlZm9yZVNlbmQ6ICh4aHI6IEpRdWVyeVhIUikgPT4gYW55KSB7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiT0RhdGEtTWF4VmVyc2lvblwiLCBcIjQuMFwiKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIk9EYXRhLVZlcnNpb25cIiwgXCI0LjBcIik7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJQcmVmZXJcIiwgXCJvZGF0YS5pbmNsdWRlLWFubm90YXRpb25zPU9EYXRhLkNvbW11bml0eS5EaXNwbGF5LlYxLkZvcm1hdHRlZFZhbHVlXCIpO1xyXG4gICAgICAgIGlmIChjdXN0b21CZWZvcmVTZW5kKSB7XHJcbiAgICAgICAgICAgIGN1c3RvbUJlZm9yZVNlbmQoPEpRdWVyeVhIUj54aHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1lcmdlVXJsUGFydHMoYmFzZTpzdHJpbmcsIHJlbGF0aXZlOnN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHVybDE6IHN0cmluZ1tdID0gYmFzZS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgbGV0IHVybDI6IHN0cmluZ1tdID0gcmVsYXRpdmUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIGxldCB1cmwzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodXJsMVswXSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICB1cmwxLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cmwxW3VybDEubGVuZ3RoIC0gMV0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdXJsMS5wb3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVybDEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB1cmwzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh1cmwyWzBdID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHVybDIuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybDJbdXJsMi5sZW5ndGggLSAxXSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICB1cmwyLnBvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXJsMi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHVybDMucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXJsMy5qb2luKCcvJyk7XHJcbiAgICB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==