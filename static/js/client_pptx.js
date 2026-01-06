"use strict";

console.log("Loading client_pptx.js...");

// Helper functions for inheritance and async/await (TypeScript output)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var ShapeType = {
    'accentBorderCallout1': 'accentBorderCallout1',
    'accentBorderCallout2': 'accentBorderCallout2',
    'accentBorderCallout3': 'accentBorderCallout3',
    'accentCallout1': 'accentCallout1',
    'accentCallout2': 'accentCallout2',
    'accentCallout3': 'accentCallout3',
    'actionButtonBackPrevious': 'actionButtonBackPrevious',
    'actionButtonBeginning': 'actionButtonBeginning',
    'actionButtonBlank': 'actionButtonBlank',
    'actionButtonDocument': 'actionButtonDocument',
    'actionButtonEnd': 'actionButtonEnd',
    'actionButtonForwardNext': 'actionButtonForwardNext',
    'actionButtonHelp': 'actionButtonHelp',
    'actionButtonHome': 'actionButtonHome',
    'actionButtonInformation': 'actionButtonInformation',
    'actionButtonMovie': 'actionButtonMovie',
    'actionButtonReturn': 'actionButtonReturn',
    'actionButtonSound': 'actionButtonSound',
    'arc': 'arc',
    'bentArrow': 'bentArrow',
    'bentUpArrow': 'bentUpArrow',
    'bevel': 'bevel',
    'blockArc': 'blockArc',
    'borderCallout1': 'borderCallout1',
    'borderCallout2': 'borderCallout2',
    'borderCallout3': 'borderCallout3',
    'bracePair': 'bracePair',
    'bracketPair': 'bracketPair',
    'callout1': 'callout1',
    'callout2': 'callout2',
    'callout3': 'callout3',
    'can': 'can',
    'chartPlus': 'chartPlus',
    'chartStar': 'chartStar',
    'chartX': 'chartX',
    'chevron': 'chevron',
    'chord': 'chord',
    'circularArrow': 'circularArrow',
    'cloud': 'cloud',
    'cloudCallout': 'cloudCallout',
    'corner': 'corner',
    'cornerTabs': 'cornerTabs',
    'cube': 'cube',
    'curvedDownArrow': 'curvedDownArrow',
    'curvedLeftArrow': 'curvedLeftArrow',
    'curvedRightArrow': 'curvedRightArrow',
    'curvedUpArrow': 'curvedUpArrow',
    'decagon': 'decagon',
    'diagStripe': 'diagStripe',
    'diamond': 'diamond',
    'dodecagon': 'dodecagon',
    'donut': 'donut',
    'doubleWave': 'doubleWave',
    'downArrow': 'downArrow',
    'downArrowCallout': 'downArrowCallout',
    'ellipse': 'ellipse',
    'ellipseRibbon': 'ellipseRibbon',
    'ellipseRibbon2': 'ellipseRibbon2',
    'flowChartAlternateProcess': 'flowChartAlternateProcess',
    'flowChartCollate': 'flowChartCollate',
    'flowChartConnector': 'flowChartConnector',
    'flowChartDecision': 'flowChartDecision',
    'flowChartDelay': 'flowChartDelay',
    'flowChartDisplay': 'flowChartDisplay',
    'flowChartDocument': 'flowChartDocument',
    'flowChartExtract': 'flowChartExtract',
    'flowChartInputOutput': 'flowChartInputOutput',
    'flowChartInternalStorage': 'flowChartInternalStorage',
    'flowChartMagneticDisk': 'flowChartMagneticDisk',
    'flowChartMagneticDrum': 'flowChartMagneticDrum',
    'flowChartMagneticTape': 'flowChartMagneticTape',
    'flowChartManualInput': 'flowChartManualInput',
    'flowChartManualOperation': 'flowChartManualOperation',
    'flowChartMerge': 'flowChartMerge',
    'flowChartMultidocument': 'flowChartMultidocument',
    'flowChartOfflineStorage': 'flowChartOfflineStorage',
    'flowChartOffpageConnector': 'flowChartOffpageConnector',
    'flowChartOnlineStorage': 'flowChartOnlineStorage',
    'flowChartOr': 'flowChartOr',
    'flowChartPredefinedProcess': 'flowChartPredefinedProcess',
    'flowChartPreparation': 'flowChartPreparation',
    'flowChartProcess': 'flowChartProcess',
    'flowChartPunchedCard': 'flowChartPunchedCard',
    'flowChartPunchedTape': 'flowChartPunchedTape',
    'flowChartSort': 'flowChartSort',
    'flowChartSummingJunction': 'flowChartSummingJunction',
    'flowChartTerminator': 'flowChartTerminator',
    'folderCorner': 'folderCorner',
    'frame': 'frame',
    'funnel': 'funnel',
    'gear6': 'gear6',
    'gear9': 'gear9',
    'halfFrame': 'halfFrame',
    'heart': 'heart',
    'heptagon': 'heptagon',
    'hexagon': 'hexagon',
    'homePlate': 'homePlate',
    'horizontalScroll': 'horizontalScroll',
    'irregularSeal1': 'irregularSeal1',
    'irregularSeal2': 'irregularSeal2',
    'leftArrow': 'leftArrow',
    'leftArrowCallout': 'leftArrowCallout',
    'leftBrace': 'leftBrace',
    'leftBracket': 'leftBracket',
    'leftCircularArrow': 'leftCircularArrow',
    'leftRightArrow': 'leftRightArrow',
    'leftRightArrowCallout': 'leftRightArrowCallout',
    'leftRightCircularArrow': 'leftRightCircularArrow',
    'leftRightRibbon': 'leftRightRibbon',
    'leftRightUpArrow': 'leftRightUpArrow',
    'leftUpArrow': 'leftUpArrow',
    'lightningBolt': 'lightningBolt',
    'line': 'line',
    'lineInv': 'lineInv',
    'mathDivide': 'mathDivide',
    'mathEqual': 'mathEqual',
    'mathMinus': 'mathMinus',
    'mathMultiply': 'mathMultiply',
    'mathNotEqual': 'mathNotEqual',
    'mathPlus': 'mathPlus',
    'moon': 'moon',
    'nonIsoscelesTrapezoid': 'nonIsoscelesTrapezoid',
    'noSmoking': 'noSmoking',
    'notchedRightArrow': 'notchedRightArrow',
    'octagon': 'octagon',
    'parallelogram': 'parallelogram',
    'pentagon': 'pentagon',
    'pie': 'pie',
    'pieWedge': 'pieWedge',
    'plaque': 'plaque',
    'plaqueTabs': 'plaqueTabs',
    'plus': 'plus',
    'quadArrow': 'quadArrow',
    'quadArrowCallout': 'quadArrowCallout',
    'rect': 'rect',
    'ribbon': 'ribbon',
    'ribbon2': 'ribbon2',
    'rightArrow': 'rightArrow',
    'rightArrowCallout': 'rightArrowCallout',
    'rightBrace': 'rightBrace',
    'rightBracket': 'rightBracket',
    'round1Rect': 'round1Rect',
    'round2DiagRect': 'round2DiagRect',
    'round2SameRect': 'round2SameRect',
    'roundRect': 'roundRect',
    'rtTriangle': 'rtTriangle',
    'smileyFace': 'smileyFace',
    'snip1Rect': 'snip1Rect',
    'snip2DiagRect': 'snip2DiagRect',
    'snip2SameRect': 'snip2SameRect',
    'snipRoundRect': 'snipRoundRect',
    'squareTabs': 'squareTabs',
    'star10': 'star10',
    'star12': 'star12',
    'star16': 'star16',
    'star24': 'star24',
    'star32': 'star32',
    'star4': 'star4',
    'star5': 'star5',
    'star6': 'star6',
    'star7': 'star7',
    'star8': 'star8',
    'stripedRightArrow': 'stripedRightArrow',
    'sun': 'sun',
    'swooshArrow': 'swooshArrow',
    'teardrop': 'teardrop',
    'trapezoid': 'trapezoid',
    'triangle': 'triangle',
    'upArrow': 'upArrow',
    'upArrowCallout': 'upArrowCallout',
    'upDownArrow': 'upDownArrow',
    'upDownArrowCallout': 'upDownArrowCallout',
    'uturnArrow': 'uturnArrow',
    'verticalScroll': 'verticalScroll',
    'wave': 'wave',
    'wedgeEllipseCallout': 'wedgeEllipseCallout',
    'wedgeRectCallout': 'wedgeRectCallout',
    'wedgeRoundRectCallout': 'wedgeRoundRectCallout'
};

function getChartEnum(chartType) {
    var chartTypeMap = {
        'bar': 'BAR',
        'bar3d': 'BAR3D',
        'pie': 'PIE',
        'pie3d': 'PIE3D',
        'doughnut': 'DOUGHNUT',
        'line': 'LINE',
        'line3d': 'LINE3D',
        'area': 'AREA',
        'area3d': 'AREA3D',
        'scatter': 'SCATTER',
        'bubble': 'BUBBLE',
        'radar': 'RADAR',
        'column': 'COLUMN',
        'column3d': 'COLUMN3D',
        'bubble3d': 'BUBBLE3D'
    };
    var normalizedType = chartType.toLowerCase();
    var enumType = chartTypeMap[normalizedType];
    if (!enumType) {
        console.warn("Unknown chart type: ".concat(chartType, ". Defaulting to BAR chart."));
        return 'BAR';
    }
    return enumType;
}

var PPTXGenerator = /** @class */ (function () {
    function PPTXGenerator(config, slideTitles) {
        if (slideTitles === void 0) { slideTitles = []; }
        this.config = config;
        this.slideTitles = slideTitles;
        // Use global PptxGenJS
        if (typeof PptxGenJS === 'undefined') {
            throw new Error("PptxGenJS library is not loaded!");
        }
        this.pres = new PptxGenJS();
        this.ShapeType = ShapeType;
        this.setupPresentation();
    }
    PPTXGenerator.prototype.setupPresentation = function () {
        var layout = this.config.slideConfig.layout;
        this.pres.defineLayout({
            name: layout.name,
            width: layout.width,
            height: layout.height,
        });
        this.pres.layout = layout.name;
        // Define slide master with fixed elements
        var background = "/static/images/content-slide-bgr.jpg";
        this.pres.defineSlideMaster({
            title: "MASTER_SLIDE",
            background: { path: background }
        });
        this.pres.defineSlideMaster({
            title: "ENTRY_SLIDE",
            background: { path: "/static/images/introduction-bgr.jpg" }
        });
    };
    PPTXGenerator.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var slides_1, background_1;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    slides_1 = this.config.slides;
                    background_1 = "/static/images/content-slide-bgr.jpg";
                    console.log('Generating presentation with background:', background_1);
                    console.log('Total slides to generate:', Object.keys(slides_1).length);
                    console.log('Slide keys:', Object.keys(slides_1));
                    if (slides_1["0"]) {
                        this.createEntrySlide(slides_1["0"]);
                    }
                    Object.keys(slides_1).sort(function (a, b) { return parseInt(a) - parseInt(b); }).forEach(function (slideNum, index) {
                        try {
                            if (parseInt(slideNum) == 0) {
                                return;
                            }
                            console.log("Creating slide ".concat(slideNum, " (index: ").concat(index, ")"));
                            _this.createSlide(slides_1[slideNum], background_1, index);
                        }
                        catch (error) {
                            console.error("Error processing slide ".concat(slideNum, ":"), error.message);
                            console.error('Stack trace:', error.stack);
                        }
                    });
                    console.log('Presentation generation completed');
                    return [2 /*return*/, this.pres];
                }
                catch (error) {
                    console.error('Critical error in presentation generation:', error.message);
                    console.error('Stack trace:', error.stack);
                    return [2 /*return*/, this.pres];
                }
                return [2 /*return*/];
            });
        });
    };
    PPTXGenerator.prototype.createEntrySlide = function (entry_slide) {
        var slide = this.pres.addSlide({ masterName: "ENTRY_SLIDE" });
        slide.addText(entry_slide.slide_title, {
            x: 0.75,
            y: 0.75,
            w: 9.50,
            h: 3.75,
            fontSize: 40,
            bold: true,
            color: '008ed4',
            align: 'left',
            fontFace: 'Helvetica Neue'
        });
    };
    PPTXGenerator.prototype.createSlide = function (slideData, background, slideIndex) {
        var _this = this;
        try {
            var slide_1 = this.pres.addSlide({ masterName: "MASTER_SLIDE" });
            var titleText = slideData.slide_title;
            console.log("Slide title: ".concat(titleText));
            if (titleText) {
                console.log('Adding title text to slide');
                slide_1.addText(titleText, {
                    x: 0.18,
                    y: 0.15,
                    w: 11.77,
                    h: 0.62,
                    fontSize: 20,
                    bold: true,
                    color: '008ed4',
                    align: 'left',
                    fontFace: 'Helvetica Neue'
                });
            }
            var normalizeString_1 = function (str) {
                if (!str)
                    return '';
                return str
                    .replace(/\s+/g, '')
                    .replace(/[（(]/g, '(')
                    .replace(/[）)]/g, ')')
                    .replace(/[「『]/g, '"')
                    .replace(/[」』]/g, '"')
                    .replace(/／/g, '/')
                    .toLowerCase();
            };
            if (slideData.elements && Array.isArray(slideData.elements)) {
                var normalizedTitleText_1 = normalizeString_1(titleText);
                var titleElementIndex = slideData.elements.findIndex(function (element) {
                    var contentText = Array.isArray(element.content)
                        ? element.content.map(function (c) { return typeof c === 'string' ? c : c.text; }).join('')
                        : element.content || '';
                    var normalizedContent = normalizeString_1(contentText);
                    return normalizedContent === normalizedTitleText_1 && element.props.y < 1;
                });
                if (titleElementIndex !== -1) {
                    var removedElement = slideData.elements.splice(titleElementIndex, 1)[0];
                    var firstElementHeight_1 = removedElement.props.h || 0;
                    slideData.elements.forEach(function (element) {
                        element.props.y -= firstElementHeight_1;
                        _this.addElement(slide_1, element, slideData.elements);
                    });
                    return;
                }
            }
            if (!slideData.elements || !Array.isArray(slideData.elements)) {
                console.warn('Slide has no valid elements array. Skipping element processing.');
                return;
            }
            console.log("Processing ".concat(slideData.elements.length, " elements"));
            slideData.elements.forEach(function (element, index) {
                _this.addElement(slide_1, element, slideData.elements);
            });
        }
        catch (error) {
            console.error("Error creating slide ".concat(slideIndex, ":"), error.message);
            console.error('Slide data:', slideData);
            console.error('Stack trace:', error.stack);
        }
    };
    PPTXGenerator.prototype.addElement = function (slide, element, slideElements) {
        try {
            switch (element.type) {
                case 'shape':
                    this.addShape(slide, element);
                    break;
                case 'text':
                    this.addText(slide, element);
                    break;
                case 'table':
                    this.addTable(slide, element);
                    break;
                case 'chart':
                    this.addChart(slide, element, slideElements);
                    break;
                case 'image':
                    this.addImage(slide, element);
                    break;
                default:
                    console.warn("Unknown element type: ".concat(element.type));
            }
        }
        catch (error) {
            console.error("Error adding element of type ".concat(element.type, ":"), error.message);
            console.error('Element data:', element);
            console.error('Stack trace:', error.stack);
        }
    };
    PPTXGenerator.prototype.addShape = function (slide, element) {
        var shapeType = element.shapeType;
        var shapeTypeExceptions = {
            'doughnut': 'donut',
            'oval': 'ellipse'
        };
        if (shapeType && shapeTypeExceptions[shapeType]) {
            shapeType = shapeTypeExceptions[shapeType];
            console.log("Converting shape type \"".concat(element.shapeType, "\" to \"").concat(shapeType, "\""));
        }
        if (!shapeType || !this.ShapeType[shapeType]) {
            console.warn("Invalid shape type: ".concat(shapeType, ". Shape will not be created."));
            return;
        }
        element.props.fontFace = 'Helvetica Neue';
        element.props.lineSpacingMultiple = 1;
        element.props.wrap = true;
        element.props.valign = "middle";
        element.props.autoFit = true;
        element.props.fit = "shrink";
        element.props.fontSize = undefined;
        var pptxShapeType = this.pres.ShapeType[shapeType];
        slide.addShape(pptxShapeType, element.props);
    };
    PPTXGenerator.prototype.addText = function (slide, element) {
        element.props.fontFace = 'Helvetica Neue';
        element.props.lineSpacingMultiple = 1;
        element.props.valign = element.props.valign || "middle";
        element.props.fit = "shrink";
        element.props.shrinkText = true;
        delete element.props.lineSpacing;
        var minFontSize = 5;
        var POINTS_PER_INCH = 72;
        var isFullWidth = function (char) {
            var code = char.charCodeAt(0);
            return (code >= 0x3000 && code <= 0x9FFF) || (code >= 0xFF00 && code <= 0xFFEF);
        };
        var getTextWidth = function (text, fontSize) {
            return text.split('').reduce(function (sum, char) {
                return sum + (isFullWidth(char) ? fontSize : fontSize * 0.6);
            }, 0);
        };
        var calculateTotalLines = function (text, fontSize, boxWidthPt) {
            var lines = text.split('\n');
            var totalLines = 0;
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var line = lines_1[_i];
                if (line.trim() === '') {
                    totalLines += 1;
                }
                else {
                    var lineWidth = getTextWidth(line, fontSize);
                    var wrappedLines = Math.ceil(lineWidth / boxWidthPt);
                    totalLines += wrappedLines;
                }
            }
            return totalLines;
        };
        if (Array.isArray(element.content)) {
            var normalizedContent = element.content.map(function (item) {
                if (typeof item === 'string') {
                    return { text: item, options: {} };
                }
                return item;
            });
            element.content = normalizedContent;
            var fullText = normalizedContent.map(function (c) { return c.text; }).join('');
            var boxWidthPt = element.props.w * POINTS_PER_INCH;
            var boxHeightPt_1 = element.props.h * POINTS_PER_INCH;
            var avgFontSize = normalizedContent.reduce(function (sum, item) { var _a; return sum + (((_a = item.options) === null || _a === void 0 ? void 0 : _a.fontSize) || element.props.fontSize || 14); }, 0) / normalizedContent.length;
            var totalLines = calculateTotalLines(fullText, avgFontSize, boxWidthPt);
            var estimatedHeightNeeded = totalLines * avgFontSize * 1.5;
            var scaleFactor_1 = 1.0;
            if (estimatedHeightNeeded > boxHeightPt_1) {
                scaleFactor_1 = (boxHeightPt_1 / estimatedHeightNeeded) * 0.88;
            }
            var boxArea = boxWidthPt * boxHeightPt_1;
            var aspectRatio = boxWidthPt / boxHeightPt_1;
            var minScaleFactor = 0.5;
            if (boxArea >= 15000) {
                minScaleFactor = aspectRatio > 6 ? 0.65 : 0.75;
            }
            scaleFactor_1 = Math.max(scaleFactor_1, minScaleFactor);
            element.content = normalizedContent.map(function (item) {
                if (!item.options) {
                    item.options = {};
                }
                var originalFontSize = item.options.fontSize || element.props.fontSize || 14;
                var maxFontSizeForBox = boxHeightPt_1 * 0.7;
                var targetFontSize = Math.min(originalFontSize * scaleFactor_1, maxFontSizeForBox);
                item.options.fontSize = Math.round(Math.max(minFontSize, targetFontSize));
                if (!item.options.fontFace) {
                    item.options.fontFace = element.props.fontFace;
                }
                return item;
            });
        }
        else {
            var content = element.content || '';
            var boxWidthPt = element.props.w * POINTS_PER_INCH;
            var boxHeightPt = element.props.h * POINTS_PER_INCH;
            var originalFontSize = element.props.fontSize || 14;
            var totalLines = calculateTotalLines(content, originalFontSize, boxWidthPt);
            var estimatedHeightNeeded = totalLines * originalFontSize * 1.5;
            var scaleFactor = 1.0;
            if (estimatedHeightNeeded > boxHeightPt) {
                scaleFactor = (boxHeightPt / estimatedHeightNeeded) * 0.88;
            }
            var boxArea = boxWidthPt * boxHeightPt;
            var aspectRatio = boxWidthPt / boxHeightPt;
            var minScaleFactor = 0.5;
            if (boxArea >= 15000) {
                minScaleFactor = aspectRatio > 6 ? 0.65 : 0.75;
            }
            scaleFactor = Math.max(scaleFactor, minScaleFactor);
            var maxFontSizeForBox = boxHeightPt * 0.7;
            element.props.fontSize = Math.round(Math.max(minFontSize, Math.min(originalFontSize * scaleFactor, maxFontSizeForBox)));
        }
        slide.addText(element.content, element.props);
    };
    PPTXGenerator.prototype.addTable = function (slide, element) {
        if (!element.rows || !Array.isArray(element.rows) || element.rows.length === 0) {
            console.warn('Table element missing or invalid rows data. Table will not be created.');
            console.warn('Expected rows to be an array, got:', typeof element.rows);
            return;
        }
        try {
            element.props.fontFace = 'Helvetica Neue';
            element.props.autoPage = true;
            element.props.newSlideStartY = 0.65;
            element.props.autoPageRepeatHeader = true;
            slide.addTable(element.rows, element.props);
        }
        catch (error) {
            console.warn("Error adding table: ".concat(error.message, ". Table will be skipped."));
            console.warn('Table data:', element.rows);
        }
    };
    PPTXGenerator.prototype.addChart = function (slide, element, slideElements) {
        var _a, _b;
        try {
            if (!element.data || !Array.isArray(element.data) || element.data.length === 0) {
                console.warn('Chart element missing or invalid data. Chart will not be created.');
                return;
            }
            var chartEnum_1 = getChartEnum(element.chartType || 'bar');
            var pptxChartType = this.pres.charts[chartEnum_1];
            if (!pptxChartType) {
                console.warn("Chart type ".concat(chartEnum_1, " not found in PptxGenJS charts. Chart will not be created."));
                return;
            }
            var processedData = element.data.map(function (series) {
                var processedSeries = __assign({}, series);
                if (series.values && !series.sizes) {
                    processedSeries.sizes = __spreadArray([], series.values, true);
                }
                if (!processedSeries.labels && processedSeries.values) {
                    if (processedSeries.name) {
                        processedSeries.labels = [processedSeries.name];
                    }
                    else {
                        processedSeries.labels = processedSeries.values.map(function (_, index) { return "Data ".concat(index + 1); });
                    }
                }
                if (chartEnum_1 === 'PIE' || chartEnum_1 === 'PIE3D' || chartEnum_1 === 'DOUGHNUT') {
                    if (!processedSeries.sizes && processedSeries.values) {
                        processedSeries.sizes = __spreadArray([], processedSeries.values, true);
                    }
                }
                return processedSeries;
            });
            if (((_a = element === null || element === void 0 ? void 0 : element.props) === null || _a === void 0 ? void 0 : _a.holeSize) && chartEnum_1 === 'DOUGHNUT' && ((_b = element === null || element === void 0 ? void 0 : element.props) === null || _b === void 0 ? void 0 : _b.holeSize) > 50) {
                element.props.holeSize = 33;
            }
            var chartProps = this.adjustChartPropsForCombinedCharts(element, chartEnum_1, slideElements);
            slide.addChart(pptxChartType, processedData, chartProps);
        }
        catch (error) {
            console.warn("Error adding chart: ".concat(error.message, ". Chart will be skipped."));
            console.warn('Stack trace:', error.stack);
        }
    };
    PPTXGenerator.prototype.adjustChartPropsForCombinedCharts = function (element, chartEnum, slideElements) {
        var chartProps = __assign({}, element.props);
        if (chartEnum === 'LINE' || chartEnum === 'LINE3D') {
            if (slideElements && this.hasBarChartInSlide(slideElements)) {
                console.log('Adjusting chart props for combined charts', chartProps);
                chartProps.valGridLine = { style: 'none' };
                chartProps.catGridLine = { style: 'none' };
                chartProps.showValAxis = false;
                chartProps.showCatAxis = false;
                chartProps.showDataLabels = false;
                chartProps.valAxisHidden = true;
                chartProps.catAxisHidden = true;
                chartProps.valAxisLabelFontSize = 0;
                chartProps.valAxisTitleFontSize = 0;
                if (!chartProps.valAxisPos) {
                    chartProps.valAxisPos = 'r';
                }
                if (!chartProps.showLegend) {
                    chartProps.showLegend = false;
                }
            }
        }
        return chartProps;
    };
    PPTXGenerator.prototype.hasBarChartInSlide = function (slideElements) {
        return slideElements.some(function (element) {
            if (element.type === 'chart') {
                var chartEnum = getChartEnum(element.chartType || 'bar');
                return chartEnum === 'BAR' || chartEnum === 'BAR3D' || chartEnum === 'COLUMN' || chartEnum === 'COLUMN3D';
            }
            return false;
        });
    };
    PPTXGenerator.prototype.addImage = function (slide, element) {
        if (!element.props || !element.props.path) {
            console.warn('Image element missing path property. Image will not be created.');
            return;
        }
        var imagePath = element.props.path;
        if (!imagePath.startsWith("http") && !imagePath.startsWith("data:") && !imagePath.startsWith("/static/")) {
             imagePath = "/static/" + imagePath;
        }
        var props = Object.assign({}, element.props);
        props.path = imagePath;
        slide.addImage(props);
    };
    return PPTXGenerator;
}());

// Expose function to global scope
window.generateAndDownload = async (jsonData) => {
    if (!jsonData) {
        alert("No data available. Please generate content first.");
        return;
    }
    try {
        console.log("Starting client-side PPTX generation...");
        if (typeof jsonData === 'string') {
            jsonData = JSON.parse(jsonData);
        }
        
        const generator = new PPTXGenerator(jsonData);
        // generate() returns the PptxGenJS instance
        const pres = await generator.generate();
        
        let fileName = "presentation.pptx";
        // In browser, writeFile triggers a download
        await pres.writeFile({ fileName: fileName });
        console.log("Download triggered.");
    } catch (e) {
        console.error("Error generating PPTX:", e);
        alert("Error generating PPTX: " + e.message);
    }
};

// NEW: Master function to render all previews
window.renderAllPreviews = (jsonData) => {
    try {
        const data = JSON.parse(jsonData);
        const slides = data.slides;
        if (!slides) return;

        console.log("Rendering all previews from master trigger...");
        
        const attemptRender = (retryCount = 0) => {
            let missingContainers = false;
            const sortedKeys = Object.keys(slides).sort((a, b) => parseInt(a) - parseInt(b));
            
            sortedKeys.forEach((slideKey, index) => {
                const slideData = slides[slideKey];
                const slideIndex = parseInt(slideKey);
                const elementId = `preview-slide-${slideIndex}`;
                const isEntry = slideIndex === 0;

                const container = document.getElementById(elementId);
                if (container) {
                    window.renderSlidePreview(slideData, elementId, isEntry);
                } else {
                    missingContainers = true;
                }
            });
            
            if (missingContainers && retryCount < 3) {
                console.log(`Some containers missing, retrying (${retryCount + 1}/3)...`);
                setTimeout(() => attemptRender(retryCount + 1), 500);
            }
        };
        
        attemptRender();

    } catch (e) {
        console.error("Error in renderAllPreviews:", e);
    }
};


// Function to render a single slide to an image/canvas for preview
window.renderSlidePreview = async (slideData, elementId, isEntrySlide = false) => {
    try {
        const container = document.getElementById(elementId);
        if (!container) {
            console.error(`Container ${elementId} not found`);
            return;
        }
        
        // Clear previous content
        container.innerHTML = '';
        
        // Ensure container is relative for absolute positioning of slide
        container.style.position = 'relative';
        container.style.overflow = 'hidden'; // Clip any overflow
        
        const slideDiv = document.createElement('div');
        slideDiv.style.position = 'absolute'; // Changed from relative
        slideDiv.style.width = '100%';
        slideDiv.style.height = '100%';
        slideDiv.style.backgroundColor = '#ffffff';
        slideDiv.style.overflow = 'hidden';
        
        // PPTX dimensions in pixels (assuming 96dpi)
        const pptxWidthPx = 13.33 * 96;
        const pptxHeightPx = 7.5 * 96;
        
        slideDiv.style.width = `${pptxWidthPx}px`;
        slideDiv.style.height = `${pptxHeightPx}px`;
        slideDiv.style.transformOrigin = 'top left';
        
        const updateScale = () => {
             const containerWidth = container.clientWidth;
             const containerHeight = container.clientHeight;
             
             // Avoid division by zero
             if (containerWidth === 0 || containerHeight === 0) return;

             const scaleX = containerWidth / pptxWidthPx;
             const scaleY = containerHeight / pptxHeightPx;
             
             const scale = Math.min(scaleX, scaleY);
             
             slideDiv.style.transform = `scale(${scale})`;
             
             const scaledWidth = pptxWidthPx * scale;
             const scaledHeight = pptxHeightPx * scale;
             
             slideDiv.style.left = `${(containerWidth - scaledWidth) / 2}px`;
             slideDiv.style.top = `${(containerHeight - scaledHeight) / 2}px`;
        };
        
        // Add background
        const bgImg = document.createElement('img');
        bgImg.src = isEntrySlide ? "/static/images/introduction-bgr.jpg" : "/static/images/content-slide-bgr.jpg";
        bgImg.style.position = 'absolute';
        bgImg.style.width = '100%';
        bgImg.style.height = '100%';
        bgImg.style.zIndex = '0';
        slideDiv.appendChild(bgImg);
        
        if (isEntrySlide) {
            // Render Entry Slide Title
            if (slideData.slide_title) {
                const titleDiv = document.createElement('div');
                titleDiv.textContent = slideData.slide_title;
                titleDiv.style.position = 'absolute';
                titleDiv.style.left = `${0.75 * 96}px`;
                titleDiv.style.top = `${0.75 * 96}px`;
                titleDiv.style.width = `${9.50 * 96}px`;
                titleDiv.style.height = `${3.75 * 96}px`;
                titleDiv.style.fontSize = '40pt';
                titleDiv.style.fontWeight = 'bold';
                titleDiv.style.color = '#008ed4';
                titleDiv.style.fontFamily = 'Helvetica Neue, sans-serif';
                titleDiv.style.zIndex = '1';
                titleDiv.style.display = 'flex';
                titleDiv.style.alignItems = 'flex-start'; // Default align left/top
                titleDiv.style.justifyContent = 'flex-start';
                slideDiv.appendChild(titleDiv);
            }
        } else {
            // Render Content Slide Title
            if (slideData.slide_title) {
                const titleDiv = document.createElement('div');
                titleDiv.textContent = slideData.slide_title;
                titleDiv.style.position = 'absolute';
                titleDiv.style.left = `${0.18 * 96}px`;
                titleDiv.style.top = `${0.15 * 96}px`;
                titleDiv.style.width = `${11.77 * 96}px`;
                titleDiv.style.height = `${0.62 * 96}px`;
                titleDiv.style.fontSize = '20pt';
                titleDiv.style.fontWeight = 'bold';
                titleDiv.style.color = '#008ed4';
                titleDiv.style.fontFamily = 'Helvetica Neue, sans-serif';
                titleDiv.style.zIndex = '1';
                titleDiv.style.display = 'flex';
                titleDiv.style.alignItems = 'center';
                slideDiv.appendChild(titleDiv);
            }
            
            // Render Elements
            if (slideData.elements && Array.isArray(slideData.elements)) {
                slideData.elements.forEach(el => {
                    const elDiv = document.createElement('div');
                    elDiv.style.position = 'absolute';
                    elDiv.style.left = `${el.props.x * 96}px`;
                    elDiv.style.top = `${el.props.y * 96}px`;
                    elDiv.style.width = `${el.props.w * 96}px`;
                    elDiv.style.height = `${el.props.h * 96}px`;
                    elDiv.style.zIndex = '2';
                    
                    if (el.type === 'text') {
                        elDiv.style.display = 'flex';
                        elDiv.style.alignItems = el.props.valign === 'middle' ? 'center' : (el.props.valign === 'bottom' ? 'flex-end' : 'flex-start');
                        elDiv.style.justifyContent = el.props.align === 'center' ? 'center' : (el.props.align === 'right' ? 'flex-end' : 'flex-start');
                        
                        const contentSpan = document.createElement('span');
                        if (Array.isArray(el.content)) {
                            el.content.forEach(part => {
                                const span = document.createElement('span');
                                span.textContent = typeof part === 'string' ? part : part.text;
                                if (typeof part !== 'string' && part.options) {
                                    if (part.options.bold) span.style.fontWeight = 'bold';
                                    if (part.options.fontSize) span.style.fontSize = `${part.options.fontSize}pt`;
                                    if (part.options.color) span.style.color = `#${part.options.color}`;
                                }
                                contentSpan.appendChild(span);
                            });
                        } else {
                            contentSpan.textContent = el.content;
                        }
                        
                        // Apply base styles
                        elDiv.style.fontFamily = el.props.fontFace || 'Helvetica Neue, sans-serif';
                        elDiv.style.fontSize = `${el.props.fontSize || 14}pt`;
                        if (el.props.color) elDiv.style.color = `#${el.props.color}`;
                        if (el.props.bold) elDiv.style.fontWeight = 'bold';
                        
                        elDiv.appendChild(contentSpan);
                        slideDiv.appendChild(elDiv);
                    } else if (el.type === 'shape') {
                        // Simple shape approximation
                        if (el.shapeType === 'rect') {
                            elDiv.style.backgroundColor = el.props.fill && el.props.fill.color ? `#${el.props.fill.color}` : 'transparent';
                            if (el.props.line) {
                                elDiv.style.border = `${el.props.line.width || 1}pt solid #${el.props.line.color || '000000'}`;
                            }
                        }
                         slideDiv.appendChild(elDiv);
                    } else if (el.type === 'table') {
                        // Basic table rendering
                        const table = document.createElement('table');
                        table.style.width = '100%';
                        table.style.height = '100%';
                        table.style.borderCollapse = 'collapse';
                        
                        if (el.rows) {
                            el.rows.forEach(row => {
                                const tr = document.createElement('tr');
                                row.forEach(cell => {
                                    const td = document.createElement('td');
                                    td.textContent = typeof cell === 'object' ? cell.text : cell;
                                    td.style.border = '1px solid #ccc'; // Default border
                                    td.style.fontSize = `${el.props.fontSize || 12}pt`;
                                    tr.appendChild(td);
                                });
                                table.appendChild(tr);
                            });
                        }
                        elDiv.appendChild(table);
                        slideDiv.appendChild(elDiv);
                    } else if (el.type === 'chart') {
                        elDiv.style.border = '1px dashed #999';
                        elDiv.style.display = 'flex';
                        elDiv.style.alignItems = 'center';
                        elDiv.style.justifyContent = 'center';
                        elDiv.textContent = `[Chart: ${el.chartType}]`;
                        elDiv.style.backgroundColor = '#f0f0f0';
                        slideDiv.appendChild(elDiv);
                    } else if (el.type === 'image') {
                         const img = document.createElement('img');
                         let src = el.props.path;
                         if (!src.startsWith("http") && !src.startsWith("data:") && !src.startsWith("/static/")) {
                             src = "/static/" + src;
                         }
                         img.src = src;
                         img.style.width = '100%';
                         img.style.height = '100%';
                         img.style.objectFit = 'contain';
                         elDiv.appendChild(img);
                         slideDiv.appendChild(elDiv);
                    }
                });
            }
        }
        
        container.appendChild(slideDiv);
        
        // Initial scale update
        updateScale();
        
        // Update on resize
        window.addEventListener('resize', updateScale);
        
    } catch (e) {
        console.error("Error rendering preview:", e);
        const container = document.getElementById(elementId);
        if (container) container.textContent = "Error rendering preview: " + e.message;
    }
};

console.log("client_pptx.js loaded. PptxGenJS available:", typeof PptxGenJS !== 'undefined');
