
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
        APR_1.APR.create(formContext)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi90cy9BUFIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQVBSTG9naWMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQ3JtQ29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi90cy93ZWJhcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxxRUFBa0M7QUFPbEMsSUFBVyxnQkFLVjtBQUxELFdBQVcsZ0JBQWdCO0lBQ3ZCLCtDQUEyQjtJQUMzQixxREFBaUM7SUFDakMsaURBQTZCO0lBQzdCLHVEQUFtQztBQUN2QyxD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SSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUk7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQUEsQ0FBQztJQUNOLGFBQUM7QUFBRCxDQUFDO0FBN0dZLHdCQUFNIiwiZmlsZSI6IkFQUkxvZ2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90cy9BUFJMb2dpYy50c1wiKTtcbiIsImltcG9ydCB7IHdlYmFwaSB9IGZyb20gJy4vd2ViYXBpJztcclxuXHJcbmludGVyZmFjZSBLZXlWYWx1ZTxUPiB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHZhbHVlOiBUXHJcbn1cclxuXHJcbmNvbnN0IGVudW0gU2VydmljZUxpbmVOYW1lcyB7XHJcbiAgICBNYXRlcmlhbHMgPSBcInRlcl9tYXRlcmlhbHNcIixcclxuICAgIEdlb3RlY2huaWNhbCA9IFwidGVyX2dlb3RlY2huaWNhbFwiLFxyXG4gICAgRmFjaWxpdGllcyA9IFwidGVyX2ZhY2lsaXRpZXNcIixcclxuICAgIEVudmlyb25tZW50YWwgPSBcInRlcl9lbnZpcm9ubWVudGFsXCJcclxufVxyXG5cclxuY29uc3QgVGVsZWNvbW11bmljYXRpb25GYWNpbGl0eVR5cGUgPSBcIlRlbGVjb21tdW5pY2F0aW9uc1wiO1xyXG5cclxuY29uc3QgZW51bSBQcm9qZWN0VHlwZXMge1xyXG4gICAgUmFpbCA9IFwiMjA0MFwiLFxyXG4gICAgSW50ZXJtb2RhbCA9IFwiMjAzNVwiXHJcbn1cclxuXHJcbmNvbnN0IGVudW0gUFJHIHtcclxuICAgIEluZHVzdHJpYWxIeWdpZW5lID0gXCJJbmR1c3RyaWFsIEh5Z2llbmVcIixcclxuICAgIE5hdHVyYWxSZXNvdXJjZXMgPSBcIk5hdHVyYWwgUmVzb3VyY2VzXCIsXHJcbiAgICBFU0EgPSBcIkVTQVwiLFxyXG4gICAgQXNiZXN0b3MgPSBcIkFzYmVzdG9zXCIsXHJcbiAgICBSZW1lZGlhdGlvbiA9IFwiUmVtZWRpYXRpb25cIixcclxuICAgIFJlZ3VsYXRvcnlDb21wbGlhbmNlID0gXCJSZWd1bGF0b3J5IENvbXBsaWFuY2VcIixcclxuICAgIFNpdGVJbnZlc3RpZ2F0aW9uID0gXCJTaXRlIEludmVzdGlnYXRpb25cIixcclxuICAgIFNvbGlkV2FzdGUgPSBcIlNvbGlkIFdhc3RlXCJcclxufVxyXG5cclxuY29uc3QgZW51bSBHcm91cE5hbWVzIHtcclxuICAgIEVOVkFzYmVzdG9zID0gXCJ0ZXJfYXByZW52YXNiZXN0b3NcIixcclxuICAgIEVOVkVudmlyb25tZW50YWxSZW1lZGlhdGlvbkRlc2lnbiA9IFwidGVyX2FwcmVudmVudnJlbWRlc2lnblwiLFxyXG4gICAgRU5WSW5kdXN0cmlhbEh5Z2llbmVTYWZldHkgPSBcInRlcl9hcHJlbnZpbmRoeWdpZW5lXCIsXHJcbiAgICBFTlZOYXR1cmFsQ3VsdHVyYWxSZXNvdXJjZXMgPSBcInRlcl9hcHJlbnZuYXRjdWx0cmVzXCIsXHJcbiAgICBFTlZQaGFzZTFFU0EgPSBcInRlcl9hcHJlbnZwaGFzZTFlc2FcIixcclxuICAgIEVOVlJlZ3VsYXRvcnlDb21wbGlhbmNlID0gXCJ0ZXJfYXByZW52cmVnY29tcFwiLFxyXG4gICAgRU5WU2l0ZUludmVzdGlnYXRpb25SQkNBID0gXCJ0ZXJfYXByZW52c2l0ZWludnJiY2FcIixcclxuICAgIEVOVlRlbGVjb21tdW5pY2F0aW9uc05FUEEgPSBcInRlcl9hcHJlbnZ0ZWxlbmVwYVwiLFxyXG4gICAgRkFDQXF1YXRpY3MgPSBcInRlcl9hcHJmYWNhcXVhdGljc1wiLFxyXG4gICAgRkFDQnVpbGRpbmdFbmNsb3N1cmVDb25zdWx0aW5nID0gXCJ0ZXJfYXByZmFjYnVpbGRlbmNsb3NlY29uc3VsdFwiLFxyXG4gICAgRkFDRW5naW5lZXJpbmdEaWFnbm9zdGljcyA9IFwidGVyX2FwcmZhY2VuZ2RpYWdcIixcclxuICAgIEZBQ01lY2hhbmljYWxFbGVjdHJpY2FsYW5kUGx1bWJpbmcgPSBcInRlcl9hcHJmYWNtZWNoZWxlY3BsdW1iXCIsXHJcbiAgICBGQUNQcm9wZXJ0eUNvbmRpdGlvbkFzc2VzbWVudCA9IFwidGVyX2FwcmZhY3Byb3Bjb25hc3Nlc1wiLFxyXG4gICAgR0VPR2VvRGVzaWduID0gXCJ0ZXJfYXByZ2VvZ2VvZGVzaWduXCIsXHJcbiAgICBHRU9HZW90ZWNobmljYWwgPSBcInRlcl9hZGFwcmdlb2dlb3RlY2huaWNhbFwiLFxyXG4gICAgR0VPUGF2ZW1lbnRFbmdpbmVlcmluZyA9IFwidGVyX2Fwcmdlb3BhdmVlbmdcIixcclxuICAgIEdFT1JhaWxJbnRlcm1vZGFsID0gXCJ0ZXJfYXByZ2VvcmFpbGludGVybVwiLFxyXG4gICAgTUFUQ29uc3RydWN0aW9uTWF0ZXJpYWxzYW5kSW5zcGVjdGlvbiA9IFwidGVyX2Fwcm1hdGNvbnN0bWF0dWluc3BlY3RcIixcclxuICAgIE1BVE1hdGVyaWFscyA9IFwidGVyX2Fwcm1hdG1hdGVyaWFsc1wiLFxyXG4gICAgTUFUTWF0ZXJpYWxzRW5nVGVzdGluZ2FuZEluc3BlY3QgPSBcInRlcl9hcHJtYXRtYXRlbmd0ZXN0aW5zcGVjdFwiLFxyXG4gICAgQURBUlBFTlZTb2xpZFdhc3RlID0gXCJ0ZXJfYXJwZW52c29saWR3YXN0ZVwiXHJcbn1cclxuXHJcbmludGVyZmFjZSBTZW1hcGhvcmUge1xyXG4gICAgbWVzc2FnZXM6IHN0cmluZ1tdLFxyXG4gICAgc3lnbmFsOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBUFIge1xyXG4gICAgYXByTG9va3VwOiBYcm0uQ29udHJvbHMuTG9va3VwQ29udHJvbDtcclxuXHJcbiAgICBwcml2YXRlIGFwaTogd2ViYXBpID0gbmV3IHdlYmFwaSgpO1xyXG4gICAgcHJpdmF0ZSBmaWx0ZXJFeHByZXNzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTGluZXM6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIHByaXZhdGUgZmFjaWxpdHlUeXBlczogeyBbbmFtZTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0VHlwZXM6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIHByaXZhdGUgbWFya2V0U2VydmljZXM6IHsgW25hbWU6IG51bWJlcl06IGJvb2xlYW4gfTtcclxuICAgIC8vcHJpdmF0ZSBwcmdzOiB7IFtuYW1lOiBzdHJpbmddOiBib29sZWFuIH07XHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihwdWJsaWMgZm9ybUNvbnRleHQ6IFhybS5Gb3JtQ29udGV4dCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGZvcm1Db250ZXh0OiBYcm0uRm9ybUNvbnRleHQpOiBKUXVlcnlQcm9taXNlPEFQUj4ge1xyXG4gICAgICAgIGNvbnN0IGFwciA9IG5ldyBBUFIoZm9ybUNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiBhcHIuaW5pdCgpLnRoZW4oKCkgPT4gYXByKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpOiBKUXVlcnlQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHRoaXMuYXByTG9va3VwID0gdGhpcy5mb3JtQ29udGV4dC5nZXRDb250cm9sPFhybS5Db250cm9scy5Mb29rdXBDb250cm9sPihcInRlcl9lbXBsb3llZWlkXCIpO1xyXG5cclxuICAgICAgICAvL3NlcnZpY2UgbGluZXNcclxuICAgICAgICB0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLk1hdGVyaWFsc10gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkdlb3RlY2huaWNhbF0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkZhY2lsaXRpZXNdID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL2ZhY2lsaXR5IHR5cGVzXHJcbiAgICAgICAgdGhpcy5mYWNpbGl0eVR5cGVzW1RlbGVjb21tdW5pY2F0aW9uRmFjaWxpdHlUeXBlXSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0T2JqZWN0cygpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5R3JvdXBGaWx0ZXIoLi4uZmllbGROYW1lczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBjb25kaXRpb25zID0gZmllbGROYW1lcy5yZWR1Y2UoKGFnZ3JlZ2F0ZVZhbHVlOiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZ2dyZWdhdGVWYWx1ZSArIGA8Y29uZGl0aW9uIGF0dHJpYnV0ZT0nJHtmaWVsZE5hbWV9JyBvcGVyYXRvcj0nZXEnIHZhbHVlPSd0cnVlJyAvPmA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYDxmaWx0ZXIgdHlwZT0nb3InPiR7Y29uZGl0aW9uc308L2ZpbHRlcj5gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QVBSVG9FbXB0eSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgPGZpbHRlciB0eXBlPSdhbmQnPjxjb25kaXRpb24gYXR0cmlidXRlPSdtb2RpZmllZG9uJyBvcGVyYXRvcj0nbnVsbCcgLz48L2ZpbHRlcj5gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdE9iamVjdHMoKTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAvLyBzZXJ2aWNlIGxpbmVzXHJcbiAgICAgICAgbGV0IHJlcXVlc3RzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHNlcnZpY2VMaW5lIGluIHRoaXMuc2VydmljZUxpbmVzKSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyID0gdGhpcy5mb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoc2VydmljZUxpbmUpIGFzIFhybS5BdHRyaWJ1dGVzLkJvb2xlYW5BdHRyaWJ1dGU7XHJcbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2godGhpcy5zZXJ2aWNlTGluZUV2ZW50SGFuZGxlcihhdHRyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmYWNpbGl0eSB0eXBlXHJcbiAgICAgICAgbGV0IGZhY2lsaXR5VHlwZUF0dHIgPSB0aGlzLmZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShcInRlcl9mYWNpbGl0eXR5cGVcIikgYXMgWHJtLkF0dHJpYnV0ZXMuTG9va3VwQXR0cmlidXRlO1xyXG4gICAgICAgIHJlcXVlc3RzLnB1c2godGhpcy5mYWNpbGl0eVR5cGVFdmVudEhhbmRsZXIoZmFjaWxpdHlUeXBlQXR0cikpO1xyXG5cclxuICAgICAgICAvLyBwcm9qZWN0IHR5cGVcclxuICAgICAgICBsZXQgcHJvamVjdFR5cGVBdHRyID0gdGhpcy5mb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoXCJ0ZXJfcHJvamVjdHR5cGVcIikgYXMgWHJtLkF0dHJpYnV0ZXMuTG9va3VwQXR0cmlidXRlO1xyXG4gICAgICAgIHJlcXVlc3RzLnB1c2godGhpcy5wcm9qZWN0VHlwZUV2ZW50SGFuZGxlcihwcm9qZWN0VHlwZUF0dHIpKTtcclxuXHJcbiAgICAgICAgLy8gTWFya2V0aW5nIFNlcnZpY2VcclxuICAgICAgICBsZXQgbWFya2V0U2VydmljZUF0dHIgPSB0aGlzLmZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShcInRlcl9tYXJrZXRzZXJ2aWNlc1wiKSBhcyBYcm0uQXR0cmlidXRlcy5BdHRyaWJ1dGU7XHJcbiAgICAgICAgcmVxdWVzdHMucHVzaCh0aGlzLm1hcmtldFNlcnZpY2VzRXZlbnRIYW5kbGVyKG1hcmtldFNlcnZpY2VBdHRyKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkLndoZW4ocmVxdWVzdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVZhbGlkYXRpb25PYmplY3QoaXNPSzogYm9vbGVhbiwgbWVzc2FnZXM/OiBzdHJpbmdbXSk6IFNlbWFwaG9yZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3lnbmFsOiBpc09LLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FuVW5sb2NrKCk6IFNlbWFwaG9yZSB7XHJcbiAgICAgICAgLy8gY2hlY2sgc2VydmljZWxpbmVzXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGxldCBpc1NlcnZpY2VMaW5lc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLnNlcnZpY2VMaW5lcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlTGluZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlzU2VydmljZUxpbmVzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1NlcnZpY2VMaW5lc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goXCJUaGVyZSBpcyBubyBTZXJ2aWNlIExpbmUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVjayBmYWNpbGl0eSAvIHByb2plY3QgdHlwZXNcclxuXHJcbiAgICAgICAgbGV0IGlzRmFjaWxpdHlUeXBlc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzUHJvamVjdFR5cGVzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMuZmFjaWxpdHlUeXBlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mYWNpbGl0eVR5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZhY2lsaXR5VHlwZXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMucHJvamVjdFR5cGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RUeXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaXNQcm9qZWN0VHlwZXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0ZhY2lsaXR5VHlwZXNWYWxpZCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKFwiVGhlcmUgaXMgbm8gRmFjaWxpdHkgVHlwZSBzZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1Byb2plY3RUeXBlc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goXCJUaGVyZSBpcyBubyBQcm9qZWN0IFR5cGUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtYXJrZXQgc2VydmljZXNcclxuICAgICAgICBsZXQgaXNNYXJrZXRTZXJ2aWNlc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcmtldFNlcnZpY2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtldFNlcnZpY2VzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpc01hcmtldFNlcnZpY2VzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzTWFya2V0U2VydmljZXNWYWxpZCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKFwiVGhlcmUgaXMgbm8gTWFya2V0IFNlcnZpY2Ugc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIEFQUi5jcmVhdGVWYWxpZGF0aW9uT2JqZWN0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFZhbHVlKCk6IFhybS5Mb29rdXBWYWx1ZSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuYXByTG9va3VwLmdldEF0dHJpYnV0ZSgpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbCAmJiB2YWxbMF0gPyB2YWxbMF0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcG9uZW50IGhhdmUgbm90IGluaXRpYWxpemVkIHlldFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpLlx0U2VydmljZSBMaW5lLCBGYWNpbGl0eSBUeXBlLiBQcm9qZWN0IFR5cGUsIEFORCB0aGUgbmV3IE1hcmtldCBTZXJ2aWNlcyBtdWx0aSBzZWxlY3Qgb3B0aW9uIHNldCBtdXN0IGJlIGFzc2lnbmVkIGZpcnN0IGJlZm9yZSBcclxuICAgICAgICAvLyB0aGUgQVBSIOKAkyBBdXRob3JpemUgUHJvamVjdCBSZXZpZXdlciBjYW4gYmUgYXNzaWduZWQuIExvY2sgZG93biB0aGUgQVBSIGZpZWxkIHVudGlsIGFsbCBvZiB0aGUgb3RoZXIgZmllbGRzIGhhdmUgYmVlbiBmaWxsZWQgaW4uIFxyXG4gICAgICAgIC8vIE9ubHkgdGhlbiBjYW4gdGhlIHVzZXIgc2VsZWN0IHRoZSBsb29rdXAgZm9yIHRoZSBBUFJcclxuICAgICAgICBjb25zdCB1bkxvY2tTZXBhcGhvcmUgPSB0aGlzLmNhblVubG9jaygpO1xyXG4gICAgICAgIGlmICghdW5Mb2NrU2VwYXBob3JlLnN5Z25hbCkge1xyXG4gICAgICAgICAgICAvL3RoaXMuYXByTG9va3VwLmdldEF0dHJpYnV0ZSgpLnNldFZhbHVlKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckV4cHJlc3Npb24gPSB0aGlzLnNldEFQUlRvRW1wdHkoKTtcclxuICAgICAgICAgICAgdGhpcy5hcHJMb29rdXAuc2V0RGlzYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIFhybS5VdGlsaXR5LmFsZXJ0RGlhbG9nKGBTZXJ2aWNlIExpbmUsIEZhY2lsaXR5IC8gUHJvamVjdCBUeXBlLCBBTkQgdGhlIG5ldyBNYXJrZXRpbmcgU2VydmljZXMgbXVzdCBiZSBhc3NpZ25lZCBmaXJzdCBcXG4gJHt1bkxvY2tTZXBhcGhvcmUubWVzc2FnZXMucmVkdWNlKChhY2MsIHBhcnQpID0+IGFjYyArICcsICcgKyBwYXJ0KX1gLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hcHJMb29rdXAuc2V0RGlzYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gaWkuXHRJZiBTTCA9IEVudmlyb25tZW50YWwgQU5EIEZhY2lsaXR5IFR5cGUgPSBUZWxlY29tbXVuaWNhdGlvbnMgQU5EIHRoZSBNYXJrZXQgU2VydmljZXMgSU4gKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgTmVwYSBFQSAvIEVJUyA9IDI4MiwgNTkwLCAwNzc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBORVBBIEdlbmVyYWwgPSAyODIsIDU5MCwgMDc4XHJcbiAgICAgICAgLy8pIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZVxyXG4gICAgICAgIC8v4oCiXHRFTlYgVGVsZWNvbW11bmljYXRpb25zIC0gTkVQQVxyXG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkVudmlyb25tZW50YWxdICYmIHRoaXMuZmFjaWxpdHlUeXBlc1tUZWxlY29tbXVuaWNhdGlvbkZhY2lsaXR5VHlwZV0gJiYgXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNzddIHx8XHJcbiAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDc4XVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkVOVlRlbGVjb21tdW5pY2F0aW9uc05FUEEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWlpLlx0SWYgU0wgPSBFbnZpcm9ubWVudGFsIEFORCBNYXJrZXQgU2VydmljZXMgSU4gKFxyXG4gICAgICAgIC8vICAgICAgICBIYXphcmRvdXMgQnVpbGRpbmcgTWF0ZXJpYWxzID0gMjgyLCA1OTAsIDA0OTsgXHJcbiAgICAgICAgLy8gICAgICAgIEhlYWx0aCBhbmQgU2FmZXR5ID0gMjgyLCA1OTAsIDA1MDtcclxuICAgICAgICAvLyAgICAgICAgSUggTGl0aWdhdGlvbiBTdXBwb3J0ID0gMjgyLCA1OTAsIDA1MTtcclxuICAgICAgICAvLyAgICAgICAgSUggT3RoZXIgPSAyODIsIDU5MCwgMDU0O1xyXG4gICAgICAgIC8vICAgICAgICBJSCBUcmFpbmluZyA9IDI4MiwgNTkwLCAwNTU7XHJcbiAgICAgICAgLy8gICAgICAgIEluZG9vciBBaXIgUXVhbGl0eSA9IDI4MiwgNTkwLCAwNTY7XHJcbiAgICAgICAgLy8gICAgICAgIEluZHVzdHJpYWwgSHlnaWVuZSA9IDI4MiwgNTkwLCAwNTc7XHJcbiAgICAgICAgLy8gICAgICAgIExlYWQgQmFzZWQgUGFpbnQgPSAyODIsIDU5MCwgMDY0O1xyXG4gICAgICAgIC8vICAgICAgICBNb2xkIEFzc2Vzc21lbnQgPSAyODIsIDU5MCwgMDc0O1xyXG4gICAgICAgIC8vICAgICAgICBNb2xkIFJlbWVkaWF0aW9uID0gMjgyLCA1OTAsIDA3NTtcclxuICAgICAgICAvLyAgICAgICAgTm9pc2UgU3R1ZGllcyA9IDI4MiwgNTkwLCAwODA7XHJcbiAgICAgICAgLy8gICAgICAgIFJhZG9uID0gMjgyLCA1OTAsIDA4OVxyXG4gICAgICAgIC8vKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHM6XHJcbiAgICAgICAgLy/igKJcdEVOViBJbmR1c3RyaWFsIEh5Z2llbmUgLSBTYWZldHlcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkVudmlyb25tZW50YWxdICYmIC8qdGhpcy5wcmdzW1BSRy5JbmR1c3RyaWFsSHlnaWVuZV0qL1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA0OV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDUwXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNTFdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA1NF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDU1XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNTZdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA1N10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDY0XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNzRdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA3NV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDgwXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwODldXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuRU5WSW5kdXN0cmlhbEh5Z2llbmVTYWZldHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaXYuXHRJZiBTTCA9IEVudmlyb25tZW50YWwgQU5EIE1hcmtldCBTZXJ2aWNlcyBJTiAoXHJcbiAgICAgICAgLy8gICAgICAgIEF2aWFuIC8gQmF0IFN0dWRpZXMgPSAyODIsIDU5MCwgMDE0O1xyXG4gICAgICAgIC8vICAgICAgICBDdWx0dXJhbCBSZXNvdXJjZXMgPSAyODIsIDU5MCwgMDI0O1xyXG4gICAgICAgIC8vICAgICAgICBFbnZpcm9ubWVudGFsIFBsYW5uaW5nID0gMjgyLCA1OTAsIDAyODtcclxuICAgICAgICAvLyAgICAgICAgRmlzaCAvIEFxdWF0aWMgTGlmZSBTdHVkaWVzID0gMjgyLCA1OTAsIDAzNTtcclxuICAgICAgICAvLyAgICAgICAgR2VvbG9naWMgQXNzZXNzbWVudCAvIEhhemFyZHMgPSAyODIsIDU5MCwgMDQwO1xyXG4gICAgICAgIC8vICAgICAgICBHSVMgU3VwcG9ydCA9IDI4MiwgNTkwLCAwNDM7XHJcbiAgICAgICAgLy8gICAgICAgIExha2UgTWFuYWdlbWVudCA9IDI4MiwgNTkwLCAwNjA7XHJcbiAgICAgICAgLy8gICAgICAgIE5hdHVyYWwgUmVzb3VyY2UgT3RoZXIgPSAyODIsIDU5MCwgMDc2O1xyXG4gICAgICAgIC8vICAgICAgICBORVBBIEVBIC8gRUlTID0gMjgyLCA1OTAsIDA3NztcclxuICAgICAgICAvLyAgICAgICAgTkVQQSBHZW5lcmFsID0gMjgyLCA1OTAsIDA3ODtcclxuICAgICAgICAvLyAgICAgICAgVGhyZWF0ZW5lZCBhbmQgRW5kYW5nZXJlZCBTcGVjaWVzIFN0dWRpZXMgPSAyODIsIDU5MCwgMTIxO1xyXG4gICAgICAgIC8vICAgICAgICBXYXRlciBSZXNvdXJjZXMgPSAyODIsIDU5MCwgMTI5O1xyXG4gICAgICAgIC8vICAgICAgICBXZXRsYW5kIGFuZCBTdHJlYW0gTWl0aWdhdGlvbiAvIFJlc3RvcmF0aW9uID0gMjgyLCA1OTAsIDEzMjtcclxuICAgICAgICAvLyAgICAgICAgV2V0bGFuZCAvIFdPVVMgRGVsaW5lYXRpb24gJiBQZXJtaXR0aW5nID0gMjgyLCA1OTAsIDEzM1xyXG4gICAgICAgIC8vKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHNcclxuICAgICAgICAvL+KAolx0RU5WIE5hdHVyYWwgLSBDdWx0dXJhbCBSZXNvdXJjZXNcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkVudmlyb25tZW50YWxdICYmIC8qdGhpcy5wcmdzW1BSRy5OYXR1cmFsUmVzb3VyY2VzXSovXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDE0XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMjRdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAyOF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDM1XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNDBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA0M10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDYwXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNzZdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA3N10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDc4XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMjFdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEyOV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTMyXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMzNdXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuRU5WTmF0dXJhbEN1bHR1cmFsUmVzb3VyY2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdi52Llx0SWYgU0wgPSBFbnZpcm9ubWVudGFsIEFORCBNYXJrZXQgU2VydmljZXMgSU4gKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgRVNBIE90aGVyID0gMjgyLCA1OTAsIDAyOTtcclxuICAgICAgICAvLyAgICAgICAgICAgIEZpbGUgUmV2aWV3IC8gUmVzZWFyY2ggPSAyODIsIDU5MCwgMDMzO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgUGhhc2UgMSAvIEVTQSA9IDI4MiwgNTkwLCAwODY7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBUcmFuc2FjdGlvbiBTY3JlZW4gPSAyODIsIDU5MCwgMTIyXHJcbiAgICAgICAgLy8pIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3Vwc1xyXG4gICAgICAgIC8v4oCiXHRFTlYgUGhhc2UgMSBFU0FcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkVudmlyb25tZW50YWxdICYmIC8qdGhpcy5wcmdzW1BSRy5FU0FdKi9cclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMjldIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAzM10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDg2XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMjJdXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuRU5WUGhhc2UxRVNBKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZpLlx0SWYgU0wgPSBFbnZpcm9ubWVudGFsIEFORCBNYXJrZXQgU2VydmljZXMgSU4gKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgQXNiZXN0b3MgQWJhdGVtZW50IERlc2lnbiA9IDI4MiwgNTkwLCAwMDU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBBc2Jlc3RvcyBBYmF0ZW1lbnQgTW9uaXRvcmluZyA9IDI4MiwgNTkwLCAwMDY7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBBc2Jlc3RvcyBJbnNwZWN0aW9uID0gMjgyLCA1OTAsIDAwNztcclxuICAgICAgICAvLyAgICAgICAgICAgIEFzYmVzdG9zIExpdGlnYXRpb24gU3VwcG9ydCA9IDI4MiwgNTkwLCAwMDg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBBc2Jlc3RvcyBPcGVyYXRpb25zICYgTWFpbnRlbmFuY2UgPSAyODIsIDU5MCwgMDA5O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgQXNiZXN0b3MgT3RoZXIgPSAyODIsIDU5MCwgMDEwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgQXNiZXN0b3MgVHJhaW5pbmcgPSAyODIsIDU5MCwgMDExXHJcbiAgICAgICAgLy8pIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwczpcclxuICAgICAgICAvL+KAolx0RU5WIEFzYmVzdG9zXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5FbnZpcm9ubWVudGFsXSAmJiAvKnRoaXMucHJnc1tQUkcuQXNiZXN0b3NdKi8gXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDA1XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMDZdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAwN10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDA4XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMDldIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAxMF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDExXVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkVOVkFzYmVzdG9zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZpaS5cdElmIFNMID0gRW52aXJvbm1lbnRhbCBBTkQgTWFya2V0IFNlcnZpY2VzIElOIChcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBFbnYuQ29uc3RydWN0aW9uIE9ic2VydmF0aW9uID0gMjgyLCA1OTAsIDAyNjtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBHSVMgU3VwcG9ydCDigJMgUmVtZWRpYXRpb24gPSAyODIsIDU5MCwgMDQ0O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIExpdGlnYXRpb24gU3VwcG9ydCDigJMgUmVtZWRpYXRpb24gPSAyODIsIDU5MCwgMDY3O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFJlbWVkaWFsIEFjdGlvbiAvIE9wZXJhdGlvbnMgLyBNYWludGVuYW5jZSA9IDI4MiwgNTkwLCAwOTM7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgUmVtZWRpYWwgQ29uc3RydWN0aW9uIC0gRmFjaWxpdHkgUmVjbGFtYXRpb24gPSAyODIsIDU5MCwgMDk0O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFJlbWVkaWFsIENvbnN0cnVjdGlvbiAtIEdyYWRpbmcgLyBFeGNhdmF0aW9uIC8gRGlzcG9zYWwgPSAyODIsIDU5MCwgMDk1O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFJlbWVkaWFsIENvbnN0cnVjdGlvbiAtIE9uc2l0ZSBTb2lsIFRyZWF0bWVudChCaW8pID0gMjgyLCA1OTAsIDA5NjtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBSZW1lZGlhbCBDb25zdHJ1Y3Rpb24gLSBTeXN0ZW0gRGVjb21taXNzaW9uaW5nID0gMjgyLCA1OTAsIDA5NztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBSZW1lZGlhbCBDb25zdHJ1Y3Rpb24gLSBTeXN0ZW0gSW5zdGFsbGF0aW9uIC8gTyAmIE0gPSAyODIsIDU5MCwgMDk4O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFJlbWVkaWFsIENvbnN0cnVjdGlvbiAtIFN5c3RlbSBPcGVyYXRpb24gLyBNYWludGVuYW5jZSA9IDI4MiwgNTkwLCAwOTk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgUmVtZWRpYXRpb24gRGVzaWduID0gMjgyLCA1OTAsIDEwMDtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBSZW1lZGlhdGlvbiBPdGhlciA9IDI4MiwgNTkwLCAxMDE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgVmFwb3IgTWl0aWdhdGlvbiBEZXNpZ24gPSAyODIsIDU5MCwgMTI2O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIFZhcG9yIE1pdGlnYXRpb24gSW5zdGFsbGF0aW9uICYgTW9uaXRvcmluZyA9IDI4MiwgNTkwLCAxMjdcclxuICAgICAgICAvLykgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzOlxyXG4gICAgICAgIC8v4oCiXHRFTlYgRW52aXJvbm1lbnRhbCBSZW1lZGlhdGlvbiBEZXNpZ25cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkVudmlyb25tZW50YWxdICYmIC8qdGhpcy5wcmdzW1BSRy5SZW1lZGlhdGlvbl0qL1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAyNl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDQ0XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNjddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5M10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDk0XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOTVdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5Nl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDk3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOThdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5OV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTAwXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMDFdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEyNl0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTI3XVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkVOVkVudmlyb25tZW50YWxSZW1lZGlhdGlvbkRlc2lnbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2aWlpLklmIFNMID0gRW52aXJvbm1lbnRhbCBBTkQgTWFya2V0IFNlcnZpY2VzIElOIChcclxuICAgICAgICAvLyAgICAgICAgICAgIEFpciBQZXJtaXR0aW5nID0gMjgyLCA1OTAsIDAwMTtcclxuICAgICAgICAvLyAgICAgICAgICAgIEFpciBRdWFsaXR5ID0gMjgyLCA1OTAsIDAwMjtcclxuICAgICAgICAvLyAgICAgICAgICAgIENvbXBsaWFuY2UgQXNzZXNzbWVudCA9IDI4MiwgNTkwLCAwMTk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBMaXRpZ2F0aW9uICBTdXBwb3J0ID0gMjgyLCA1OTAsIDA2NTtcclxuICAgICAgICAvLyAgICAgICAgICAgIE91dGRvb3IgQWlyIFN0dWRpZXMgLyBUZXN0aW5nID0gMjgyLCA1OTAsIDA4MztcclxuICAgICAgICAvLyAgICAgICAgICAgIFBvbGwuUHJldmVudGlvbiAvIFdhc3RlIE1pbiA9IDI4MiwgNTkwLCAwODc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBSZWd1bGF0b3J5IENvbXBsaWFuY2UgT3RoZXIgPSAyODIsIDU5MCwgMDkwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgUmVndWxhdG9yeSBDb21wbGlhbmNlIFRyYWluaW5nID0gMjgyLCA1OTAsIDA5MTtcclxuICAgICAgICAvLyAgICAgICAgICAgIFJlZ3VsYXRvcnkgQ29tcGxpYW5jZSAvIFBlcm1pdHRpbmcgPSAyODIsIDU5MCwgMDkyO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgU3BpbGwgUHJldmVudGlvbiA9IDI4MiwgNTkwLCAxMTU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBTdG9ybXdhdGVyID0gMjgyLCA1OTAsIDExNztcclxuICAgICAgICAvLyAgICAgICAgICAgIFdhc3Rld2F0ZXIgRGVzaWduIFNlcnZpY2VzID0gMjgyLCA1OTAsIDEyODtcclxuICAgICAgICAvLyAgICAgICAgICAgIFdhdGVyIFN0dWRpZXMgPSAyODIsIDU5MCwgMTMwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgV2VsbCBIZWFkIFByb3RlY3Rpb24gPSAyODIsIDU5MCwgMTMxXHJcbiAgICAgICAgLy8pIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwczpcclxuICAgICAgICAvL+KAolx0RU5WIFJlZ3VsYXRvcnkgQ29tcGxpYW5jZVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRW52aXJvbm1lbnRhbF0gJiYgLyp0aGlzLnByZ3NbUFJHLlJlZ3VsYXRvcnlDb21wbGlhbmNlXSovXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDAxXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMDJdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAxOV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDY1XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwODNdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA4N10gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDkwXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwOTFdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA5Ml0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTE1XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMTddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEyOF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTMwXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMzFdXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuRU5WUmVndWxhdG9yeUNvbXBsaWFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaXguXHRJZiBTTCA9IEVudmlyb25tZW50YWwgQU5EIE1hcmtldCBTZXJ2aWNlcyBJTiAoXHJcbiAgICAgICAgLy8gICAgICAgICAgICBCcm93bmZpZWxkcyA9IDI4MiwgNTkwLCAwMTU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBFbnZpcm9ubWVudGFsIERyaWxsaW5nID0gMjgyLCA1OTAsIDAyNztcclxuICAgICAgICAvLyAgICAgICAgICAgIEdlb2xvZ2ljIEFzc2Vzc21lbnQgLyBGYXVsdCBTdHVkaWVzID0gMjgyLCA1OTAsIDAzOTtcclxuICAgICAgICAvLyAgICAgICAgICAgIEdlb3BoeXNpY2FsIEFzc2Vzc21lbnQgPSAyODIsIDU5MCwgMDQxO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgR3JvdW5kd2F0ZXIgTW9kZWxpbmcgPSAyODIsIDU5MCwgMDQ3O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgTGl0aWdhdGlvbiBTdXBwb3J0IC0gU2l0ZSBJbnZlc3RpZ2F0aW9uID0gMjgyLCA1OTAsIDA2ODtcclxuICAgICAgICAvLyAgICAgICAgICAgIExTSSAvIFBoYXNlIDIgPSAyODIsIDU5MCwgMDY5O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgUmlzayBBc3Nlc3NtZW50ID0gMjgyLCA1OTAsIDEwNDtcclxuICAgICAgICAvLyAgICAgICAgICAgIFNpdGUgQ2xvc3VyZSAvIFZDUCBTZXJ2aWNlcyA9IDI4MiwgNTkwLCAxMDc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBVU1QgUmVtb3ZhbCA9IDI4MiwgNTkwLCAxMjQ7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBWYXBvciBJbnRydXNpb24gLyBNaWdyYXRpb24gPSAyODIsIDU5MCwgMTI1XHJcbiAgICAgICAgLy8pIG9ubHkgcmV0dXJuIGVtcGxveWVlcyB3aGVyZSBZRVMgZm9yIGdyb3VwczpcclxuICAgICAgICAvL+KAolx0RU5WIFNpdGUgSW52ZXN0aWdhdGlvbiAtIFJCQ0FcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkVudmlyb25tZW50YWxdICYmIC8qdGhpcy5wcmdzW1BSRy5TaXRlSW52ZXN0aWdhdGlvbl0qL1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDAxNV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDI3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwMzldIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA0MV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDQ3XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNjhdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA2OV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTA0XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMDddIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDEyNF0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTI1XVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkVOVlNpdGVJbnZlc3RpZ2F0aW9uUkJDQSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB4Llx0SWYgU0wgPSBFbnZpcm9ubWVudGFsIEFORCBNYXJrZXQgU2VydmljZXMgSU4gKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgR3JvdW5kd2F0ZXIgQ29tcGxpYW5jZSBNb25pdG9yaW5nID0gMjgyLCA1OTAsIDA0NjtcclxuICAgICAgICAvLyAgICAgICAgICAgIExhbmRmaWxsIENsb3N1cmUgU2VydmljZXMgPSAyODIsIDU5MCwgMDYxO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgTGFuZGZpbGwgR2FzIERlc2lnbiA9IDI4MiwgNTkwLCAwNjI7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBMYW5kZmlsbCBHYXMgTW9uaXRvcmluZyA9IDI4MiwgNTkwLCAwNjM7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBTb2xpZCBXYXN0ZSAvIExhbmRmaWxsIERlc2lnbiA9IDI4MiwgNTkwLCAxMTA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBTb2xpZCBXYXN0ZSAvIExhbmRmaWxsIE90aGVyID0gMjgyLCA1OTAsIDExMTtcclxuICAgICAgICAvLyAgICAgICAgICAgIFNvbGlkIFdhc3RlIC8gTGFuZGZpbGwgUGVybWl0dGluZyA9IDI4MiwgNTkwLCAxMTJcclxuICAgICAgICAvLykgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzOlxyXG4gICAgICAgIC8v4oCiXHRFTlYgU29saWQgV2FzdGVcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLkVudmlyb25tZW50YWxdICYmIC8qdGhpcy5wcmdzW1BSRy5Tb2xpZFdhc3RlXSovXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDQ2XSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAwNjFdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDA2Ml0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMDYzXSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1syODI1OTAxMTBdIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldFNlcnZpY2VzWzI4MjU5MDExMV0gfHxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2V0U2VydmljZXNbMjgyNTkwMTEyXVxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihHcm91cE5hbWVzLkFEQVJQRU5WU29saWRXYXN0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3hpLklmIFNMID0gRmFjaWxpdGllcyBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHM6XHJcbiAgICAgICAgLy/igKJcdEZBQyBBcXVhdGljc1xyXG4gICAgICAgIC8v4oCiXHRGQUMgQnVpbGRpbmcgRW5jbG9zdXJlIENvbnN1bHRpbmdcclxuICAgICAgICAvL+KAolx0RkFDIEVuZ2luZWVyaW5nIERpYWdub3N0aWNzXHJcbiAgICAgICAgLy/igKJcdEZBQyBNZWNoYW5pY2FsIEVsZWN0cmljYWwgYW5kIFBsdW1iaW5nXHJcbiAgICAgICAgLy/igKJcdEZBQyBQcm9wZXJ0eSBDb25kaXRpb24gQXNzZXNzbWVudFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuRmFjaWxpdGllc10pIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5GQUNBcXVhdGljcyxcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuRkFDQnVpbGRpbmdFbmNsb3N1cmVDb25zdWx0aW5nLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5GQUNFbmdpbmVlcmluZ0RpYWdub3N0aWNzLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5GQUNNZWNoYW5pY2FsRWxlY3RyaWNhbGFuZFBsdW1iaW5nLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5GQUNQcm9wZXJ0eUNvbmRpdGlvbkFzc2VzbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3hpaS5JZiBTTCA9IEdlb3RlY2huaWNhbCBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHMoYmFzaWNhbGx5IGFsbCBHRU8gZ3JvdXBzKTpcclxuICAgICAgICAvL+KAolx0R0VPIEdlbyBEZXNpZ25cclxuICAgICAgICAvL+KAolx0R0VPIEdlb3RlY2huaWNhbFxyXG4gICAgICAgIC8v4oCiXHRHRU8gUGF2ZW1lbnQgRW5naW5lZXJpbmdcclxuICAgICAgICAvL+KAolx0R0VPIFJhaWwgLSBJbnRlcm1vZGFsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJ2aWNlTGluZXNbU2VydmljZUxpbmVOYW1lcy5HZW90ZWNobmljYWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuYXBwbHlHcm91cEZpbHRlcihcclxuICAgICAgICAgICAgICAgIEdyb3VwTmFtZXMuR0VPR2VvRGVzaWduLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5HRU9HZW90ZWNobmljYWwsXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLkdFT1BhdmVtZW50RW5naW5lZXJpbmcsXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLkdFT1JhaWxJbnRlcm1vZGFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8veGlpaS5JZiBTTCA9IEdlb3RlY2huaWNhbCBBTkQgUHJvamVjdCBUeXBlIGluIChSYWlsLCBJbnRlcm1vZGFsKSBvbmx5IHJldHVybiBlbXBsb3llZXMgd2hlcmUgWUVTIGZvciBncm91cHM6XHJcbiAgICAgICAgLy/igKJcdEdFTyBSYWlsIC0gSW50ZXJtb2RhbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VydmljZUxpbmVzW1NlcnZpY2VMaW5lTmFtZXMuR2VvdGVjaG5pY2FsXSAmJlxyXG4gICAgICAgICAgICAodGhpcy5wcm9qZWN0VHlwZXNbUHJvamVjdFR5cGVzLlJhaWxdIHx8IHRoaXMucHJvamVjdFR5cGVzW1Byb2plY3RUeXBlcy5JbnRlcm1vZGFsXSkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKEdyb3VwTmFtZXMuR0VPUmFpbEludGVybW9kYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy94aXYuSWYgU0wgPSBNYXRlcmlhbHMgb25seSByZXR1cm4gZW1wbG95ZWVzIHdoZXJlIFlFUyBmb3IgZ3JvdXBzKGJhc2ljYWxseSBhbGwgTUFUIGdyb3Vwcyk6XHJcbiAgICAgICAgLy/igKJcdE1BVCBDb25zdHJ1Y3Rpb24gTWF0ZXJpYWxzIGFuZCBJbnNwZWN0aW9uXHJcbiAgICAgICAgLy/igKJcdE1BVCBNYXRlcmlhbHNcclxuICAgICAgICAvL+KAolx0TUFUIE1hdGVyaWFscyBFTkcgVGVzdGluZyAmIEluc3BlY3Rpb25cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlcnZpY2VMaW5lc1tTZXJ2aWNlTGluZU5hbWVzLk1hdGVyaWFsc10pIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFeHByZXNzaW9uID0gdGhpcy5hcHBseUdyb3VwRmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5NQVRDb25zdHJ1Y3Rpb25NYXRlcmlhbHNhbmRJbnNwZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBOYW1lcy5NQVRNYXRlcmlhbHMsXHJcbiAgICAgICAgICAgICAgICBHcm91cE5hbWVzLk1BVE1hdGVyaWFsc0VuZ1Rlc3RpbmdhbmRJbnNwZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhwcmVzc2lvbiA9IHRoaXMuc2V0QVBSVG9FbXB0eSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy94di5JZiBhIHVzZXIgbW9kaWZpZXMgdGhlIFNlcnZpY2UgTGluZSwgRmFjaWxpdHkgLyBQcm9qZWN0IFR5cGUsIGFuZCAvIG9yIE1hcmtldGluZyBTZXJ2aWNlcyB0aGUgbG9naWMgdG8gdmFsaWRhdGUgdGhlIEFQUiBuZWVkcyB0byBydW4gYWdhaW4sIGFuZCBpZiB0aGUgc2VsZWN0ZWQgQVBSIGRvZXMgbm90IG1lZXQgdGhlIG5ldyBjcml0ZXJpYSwgd2FybiB0aGUgdXNlciBhbmQgZG8gbm90IHNhdmUuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHJMb29rdXAuYWRkTm90aWZpY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW1wiQVBSIGlzIG5vdCBjb3JyZWN0XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkxldmVsOiBcIkVSUk9SXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlSWQ6IFwiYXByX2lzX25vdF92YWxpZFwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFhybS5VdGlsaXR5LmFsZXJ0RGlhbG9nKGBBUFIgaXMgbm90IGNvcnJlY3QgYmVjYXVzZSBvZiBjb21iaW5hdGlvbiBvZiBTZXJ2aWNlIExpbmUsIEZhY2lsaXR5L1Byb2plY3QgVHlwZSwgYW5kL29yIE1hcmtldGluZyBTZXJ2aWNlcy4gU2F2ZSB3aWxsIGJlIGJsb2NrZWRgLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHJMb29rdXAuY2xlYXJOb3RpZmljYXRpb24oJ2Fwcl9pc19ub3RfdmFsaWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBhcHJWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICBpZiAoIWFwclZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAkLndoZW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGZvciBjdXJyZW50IHBhcmFtZXRlcnNcclxuICAgICAgICBsZXQgZmV0Y2hYbWwgPVxyXG4gICAgICAgICAgICBgPGZldGNoIHRvcD1cIjFcIj5cclxuICAgICAgICAgICAgICAgIDxlbnRpdHkgbmFtZT1cInZzMzYwX2VtcGxveWVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGF0dHJpYnV0ZSBuYW1lPVwidnMzNjBfZW1wbG95ZWVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpbHRlcj5cclxuXHRcdFx0ICAgICAgICAgICAgPGNvbmRpdGlvbiBhdHRyaWJ1dGU9XCJ2czM2MF9lbXBsb3llZWlkXCIgb3BlcmF0b3I9XCJlcVwiIHZhbHVlPVwiJHthcHJWYWx1ZS5pZH1cIiAvPlxyXG5cdFx0ICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmZpbHRlckV4cHJlc3Npb259XHJcbiAgICAgICAgICAgICAgICA8L2VudGl0eT5cclxuICAgICAgICAgICAgPC9mZXRjaD5gXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnJlcXVlc3QoXCJ2czM2MF9lbXBsb3llZXM/ZmV0Y2hYbWw9XCIgKyBmZXRjaFhtbCwgXCJHRVRcIilcclxuICAgICAgICAgICAgLnRoZW4od2ViYXBpLnRha2VWYWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlY29yZHM6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuaXNWYWxpZCA9IChyZWNvcmRzLmxlbmd0aCA+IDApKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZVNlYXJjaEhhbmRsZXIoaGFuZGxlcjogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmFwckxvb2t1cC5hZGRDdXN0b21GaWx0ZXIodGhpcy5maWx0ZXJFeHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaEV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hPblNhdmUoKTtcclxuICAgICAgICB0aGlzLmFwckxvb2t1cC5hZGRQcmVTZWFyY2godGhpcy5wcmVTZWFyY2hIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2VydmljZUxpbmVBdHRyaWJ1dGVzRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoRmFjaWxpdHlUeXBlKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hQcm9qZWN0VHlwZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXR0YWNoU2VydmljZUxpbmVBdHRyaWJ1dGVzRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICBmb3IgKHZhciBzZXJ2aWNlTGluZSBpbiB0aGlzLnNlcnZpY2VMaW5lcykge1xyXG4gICAgICAgICAgICBsZXQgYXR0ciA9IHRoaXMuZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKHNlcnZpY2VMaW5lKTtcclxuICAgICAgICAgICAgYXR0ci5hZGRPbkNoYW5nZSgoaGFuZGxlcjogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpID0+IHRoaXMuc2VydmljZUxpbmVFdmVudEhhbmRsZXIoaGFuZGxlci5nZXRFdmVudFNvdXJjZSgpIGFzIFhybS5BdHRyaWJ1dGVzLkJvb2xlYW5BdHRyaWJ1dGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2hGYWNpbGl0eVR5cGUoKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSB0aGlzLmZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShcInRlcl9mYWNpbGl0eXR5cGVcIik7XHJcbiAgICAgICAgYXR0ci5hZGRPbkNoYW5nZSgoaGFuZGxlcjogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpID0+IHRoaXMuZmFjaWxpdHlUeXBlRXZlbnRIYW5kbGVyKGhhbmRsZXIuZ2V0RXZlbnRTb3VyY2UoKSBhcyBYcm0uQXR0cmlidXRlcy5Mb29rdXBBdHRyaWJ1dGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaFByb2plY3RUeXBlKCkge1xyXG4gICAgICAgIGxldCBhdHRyID0gdGhpcy5mb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoXCJ0ZXJfcHJvamVjdHR5cGVcIik7XHJcbiAgICAgICAgYXR0ci5hZGRPbkNoYW5nZSgoaGFuZGxlcjogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpID0+IHRoaXMucHJvamVjdFR5cGVFdmVudEhhbmRsZXIoaGFuZGxlci5nZXRFdmVudFNvdXJjZSgpIGFzIFhybS5BdHRyaWJ1dGVzLkxvb2t1cEF0dHJpYnV0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXR0YWNoT25TYXZlKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRleHQuZGF0YS5lbnRpdHkuYWRkT25TYXZlKChjb250ZXh0OiBYcm0uRXZlbnRzLlNhdmVFdmVudENvbnRleHQpID0+IHRoaXMub25TYXZlSGFuZGxlcihjb250ZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNhdmVIYW5kbGVyKGNvbnRleHQ6IFhybS5FdmVudHMuU2F2ZUV2ZW50Q29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBjb250ZXh0LmdldEV2ZW50QXJncygpO1xyXG4gICAgICAgIGlmIChhcmdzLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtQ29udGV4dC5kYXRhLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGFyZ3MucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTGluZUV2ZW50SGFuZGxlcihhdHRyaWJ1dGU6IFhybS5BdHRyaWJ1dGVzLkJvb2xlYW5BdHRyaWJ1dGUpOiBKUXVlcnlQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCB2YWwgPSBhdHRyaWJ1dGUuZ2V0VmFsdWUoKTtcclxuICAgICAgICB0aGlzLnNlcnZpY2VMaW5lc1thdHRyaWJ1dGUuZ2V0TmFtZSgpXSA9IHZhbCB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHJldHVybiAkLndoZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZhY2lsaXR5VHlwZUV2ZW50SGFuZGxlcihhdHRyaWJ1dGU6IFhybS5BdHRyaWJ1dGVzLkxvb2t1cEF0dHJpYnV0ZSk6IEpRdWVyeVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGF0dHJpYnV0ZS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuZmFjaWxpdHlUeXBlcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjaWxpdHlUeXBlc1t2YWxbMF0ubmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICByZXR1cm4gJC53aGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9qZWN0VHlwZUV2ZW50SGFuZGxlcihhdHRyaWJ1dGU6IFhybS5BdHRyaWJ1dGVzLkxvb2t1cEF0dHJpYnV0ZSk6IEpRdWVyeVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGF0dHJpYnV0ZS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdFR5cGVzID0ge307XHJcblxyXG4gICAgICAgIGlmICghdmFsIHx8IHZhbC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuICQud2hlbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbG9hZCBwcm9qZWN0IGNvZGVcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGkucmVxdWVzdChgdGVyX3Byb2plY3R0eXBlcygke3ZhbFswXS5pZH0pPyRzZWxlY3Q9dGVyX3Byb2plY3R0eXBlY29kZWAsIFwiR0VUXCIpXHJcbiAgICAgICAgICAgIC5mYWlsKHdlYmFwaS5mYWlsKVxyXG4gICAgICAgICAgICAudGhlbigocHJvamVjdFR5cGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGVTdHJpbmcgPSBcIlwiICsgcHJvamVjdFR5cGUudGVyX3Byb2plY3R0eXBlY29kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdFR5cGVzW2NvZGVTdHJpbmddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFya2V0U2VydmljZXNFdmVudEhhbmRsZXIoYXR0cmlidXRlOiBYcm0uQXR0cmlidXRlcy5BdHRyaWJ1dGUpOiBKUXVlcnlQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gYXR0cmlidXRlLmdldFZhbHVlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFya2V0U2VydmljZXMgPSB7fTtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBvcHRpb24gb2Ygb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXRTZXJ2aWNlc1tvcHRpb25dID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICByZXR1cm4gJC53aGVuKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBUFIgfSBmcm9tIFwiLi9BUFJcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQVBSTG9naWMge1xyXG4gICAgdmFyIGFwcjogQVBSO1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBvbkluaXQoY29udGV4dDogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpIHtcclxuICAgICAgICBjb25zdCBmb3JtQ29udGV4dCA9IGNvbnRleHQuZ2V0Rm9ybUNvbnRleHQoKTtcclxuICAgICAgICBBUFIuY3JlYXRlKGZvcm1Db250ZXh0KVxyXG4gICAgICAgICAgICAudGhlbigoaW5zdGFuY2U6IEFQUikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXByID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgICAgICBhcHIucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy94cm0vaW5kZXguZC50c1wiIC8+XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JtQ29udGV4dCB7XHJcbiAgICBnZXRDb250ZXh0KCk6IFhybS5HbG9iYWxDb250ZXh0IHtcclxuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJDb250ZXh0IGlzIG5vdCBhdmFpbGFibGUuXCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBHZXRHbG9iYWxDb250ZXh0ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEdldEdsb2JhbENvbnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgWHJtICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChYcm0uVXRpbGl0eSAmJiBYcm0uVXRpbGl0eS5nZXRHbG9iYWxDb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFhybS5VdGlsaXR5LmdldEdsb2JhbENvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBYcm0uUGFnZS5jb250ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyBDcm1Db250ZXh0IH0gZnJvbSAnLi9Dcm1Db250ZXh0JztcclxuXHJcbmV4cG9ydCBjbGFzcyB3ZWJhcGkge1xyXG4gICAgY29udGV4dDogWHJtLkdsb2JhbENvbnRleHQ7XHJcbiAgICBjbGllbnRVcmw6IHN0cmluZztcclxuICAgIG9kYXRhVXJsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ3JtQ29udGV4dCgpLmdldENvbnRleHQoKTtcclxuICAgICAgICB0aGlzLmNsaWVudFVybCA9IHRoaXMuY29udGV4dC5nZXRDbGllbnRVcmwoKTtcclxuICAgICAgICB0aGlzLm9kYXRhVXJsID0gdGhpcy5tZXJnZVVybFBhcnRzKHRoaXMuY2xpZW50VXJsLCBcIi9hcGkvZGF0YS92OC4yL1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVxdWVzdChyZWxhdGVkVXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBkYXRhPzogYW55LCBvcHRpb25zPzogYW55LCBzZXRSZXF1ZXN0SGVhZGVyPzogKHhocjogSlF1ZXJ5WEhSKSA9PiBhbnkpOiBKUXVlcnlQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLm1lcmdlVXJsUGFydHModGhpcy5vZGF0YVVybCwgZW5jb2RlVVJJKHJlbGF0ZWRVcmwpKTtcclxuICAgICAgICBsZXQgZGVmID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCgkLmV4dGVuZCh7fSwgb3B0aW9ucyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBtZXRob2QgfHwgXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBcImZhbHNlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKHhocjogSlF1ZXJ5WEhSKSA9PiB7IHRoaXMuYmVmb3JlU2VuZCh4aHIsIHNldFJlcXVlc3RIZWFkZXIpIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhdHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVxdWVzdEJ5RmV0Y2hYbWwoZW50aXR5Q29sbGVjdGlvbk5hbWU6IHN0cmluZywgZmV0Y2hYbWw6IGFueSwgb3B0aW9ucz86IGFueSwgc2V0UmVxdWVzdEhlYWRlcj86ICh4aHI6IEpRdWVyeVhIUikgPT4gYW55KTogSlF1ZXJ5UHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAvL3ZhciB1cmwgPSB0aGlzLm1lcmdlVXJsUGFydHModGhpcy5vZGF0YVVybCwgZW5jb2RlVVJJKGVudGl0eUNvbGxlY3Rpb25OYW1lKSk7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMubWVyZ2VVcmxQYXJ0cyh0aGlzLm9kYXRhVXJsLCBcIiRiYXRjaFwiKTtcclxuICAgICAgICB2YXIgYmF0Y2hOYW1lID0gXCJhcHByb3ZhbGxvZ2ZldGNoX2JhdGNoX1wiICsgKE1hdGgucmFuZG9tKCkgKyBcIlwiKS5yZXBsYWNlKC9bLFxcLl0vLCBcIlwiKTtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IHdlYmFwaS5jcmVhdGVGZXRjaEJhdGNoUmVxdWVzdChiYXRjaE5hbWUsIHRoaXMubWVyZ2VVcmxQYXJ0cyh0aGlzLm9kYXRhVXJsLCBgJHtlbnRpdHlDb2xsZWN0aW9uTmFtZX0/ZmV0Y2hYbWw9JHtmZXRjaFhtbH1gKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICByZXR1cm4gJC5hamF4KCQuZXh0ZW5kKHt9LCBvcHRpb25zLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IFwiZmFsc2VcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoeGhyOiBKUXVlcnlYSFIpID0+IHsgdGhpcy5iZWZvcmVTZW5kKHhociwgc2V0UmVxdWVzdEhlYWRlcikgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBgbXVsdGlwYXJ0L21peGVkO2JvdW5kYXJ5PSR7YmF0Y2hOYW1lfWAsIC8vXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAvL2RhdGF0eXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZS5zdWJzdHJpbmcocmVzcG9uc2UuaW5kZXhPZigneycpLCByZXNwb25zZS5sYXN0SW5kZXhPZignfScpICsgMSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUZldGNoQmF0Y2hSZXF1ZXN0KGJhdGNoTmFtZTogc3RyaW5nLCBmZXRjaFhtbFVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGJvZHlDb2xsZWN0b3IgPSBbYC0tJHtiYXRjaE5hbWV9YF07XHJcbiAgICAgICAgYm9keUNvbGxlY3Rvci5wdXNoKFwiQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9odHRwXCIpO1xyXG4gICAgICAgIGJvZHlDb2xsZWN0b3IucHVzaChcIkNvbnRlbnQtVHJhbnNmZXItRW5jb2Rpbmc6IGJpbmFyeVwiKTtcclxuICAgICAgICBib2R5Q29sbGVjdG9yLnB1c2goXCJcIik7XHJcbiAgICAgICAgYm9keUNvbGxlY3Rvci5wdXNoKGBHRVQgJHtmZXRjaFhtbFVybH0gSFRUUC8xLjFgKTtcclxuICAgICAgICBib2R5Q29sbGVjdG9yLnB1c2goXCJDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgYm9keUNvbGxlY3Rvci5wdXNoKFwiT0RhdGEtVmVyc2lvbjogNC4wXCIpO1xyXG4gICAgICAgIGJvZHlDb2xsZWN0b3IucHVzaChcIk9EYXRhLU1heFZlcnNpb246IDQuMFwiKTtcclxuICAgICAgICBib2R5Q29sbGVjdG9yLnB1c2goXCJcIik7XHJcbiAgICAgICAgYm9keUNvbGxlY3Rvci5wdXNoKGAtLSR7YmF0Y2hOYW1lfS0tYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRha2VWYWx1ZShyZXNwb25zZTphbnkpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZmFpbChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmVmb3JlU2VuZCh4aHI6IEpRdWVyeVhIUiwgY3VzdG9tQmVmb3JlU2VuZDogKHhocjogSlF1ZXJ5WEhSKSA9PiBhbnkpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJPRGF0YS1NYXhWZXJzaW9uXCIsIFwiNC4wXCIpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiT0RhdGEtVmVyc2lvblwiLCBcIjQuMFwiKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlByZWZlclwiLCBcIm9kYXRhLmluY2x1ZGUtYW5ub3RhdGlvbnM9T0RhdGEuQ29tbXVuaXR5LkRpc3BsYXkuVjEuRm9ybWF0dGVkVmFsdWVcIik7XHJcbiAgICAgICAgaWYgKGN1c3RvbUJlZm9yZVNlbmQpIHtcclxuICAgICAgICAgICAgY3VzdG9tQmVmb3JlU2VuZCg8SlF1ZXJ5WEhSPnhocik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVyZ2VVcmxQYXJ0cyhiYXNlOnN0cmluZywgcmVsYXRpdmU6c3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdXJsMTogc3RyaW5nW10gPSBiYXNlLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBsZXQgdXJsMjogc3RyaW5nW10gPSByZWxhdGl2ZS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgbGV0IHVybDM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGlmICh1cmwxWzBdID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHVybDEuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybDFbdXJsMS5sZW5ndGggLSAxXSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICB1cmwxLnBvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXJsMS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHVybDMucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHVybDJbMF0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdXJsMi5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsMlt1cmwyLmxlbmd0aCAtIDFdID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHVybDIucG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cmwyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdXJsMy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB1cmwzLmpvaW4oJy8nKTtcclxuICAgIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9