"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function value(a) {
    if (void 0 === a || null === a) throw new TypeError("Cannot convert first argument to object");for (var c = Object(a), d = 1; d < arguments.length; d++) {
      var e = arguments[d];if (void 0 !== e && null !== e) for (var e = Object(e), f = Object.keys(Object(e)), g = 0, p = f.length; g < p; g++) {
        var b = f[g],
            k = Object.getOwnPropertyDescriptor(e, b);void 0 !== k && k.enumerable && (c[b] = e[b]);
      }
    }return c;
  } });
Array.prototype.find || (Array.prototype.find = function (a, c) {
  if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");if ("function" !== typeof a) throw new TypeError("predicate must be a function");for (var d = Object(this), e = d.length >>> 0, f, g = 0; g < e; g++) {
    if (f = d[g], a.call(c, f, g, d)) return f;
  }
});
Array.prototype.findIndex || (Array.prototype.findIndex = function (a, c) {
  if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");if ("function" !== typeof a) throw new TypeError("predicate must be a function");for (var d = Object(this), e = d.length >>> 0, f, g = 0; g < e; g++) {
    if (f = d[g], a.call(c, f, g, d)) return g;
  }return -1;
});
Array.prototype.includes || (Array.prototype.includes = function (a, c) {
  var d = Object(this),
      e = parseInt(d.length) || 0;if (0 === e) return !1;var f = parseInt(c) || 0;0 <= f || (f = e + f, 0 > f && (f = 0));for (var g; f < e;) {
    g = d[f];if (a === g || a !== a && g !== g) return !0;f++;
  }return !1;
});String.prototype.includes || (String.prototype.includes = function () {
  return -1 !== String.prototype.indexOf.apply(this, arguments);
});
String.prototype.endsWith || (String.prototype.endsWith = function (a, c) {
  var d = this.toString();if ("number" !== typeof c || !isFinite(c) || Math.floor(c) !== c || c > d.length) c = d.length;c -= a.length;d = d.indexOf(a, c);return -1 !== d && d === c;
});
var jsPanel = { version: "3.0.0 RC1.3", date: "2016-04-26 15:18", id: 0, zi: 100, modalcount: 0, autopositionSpacing: 5, pbTreshold: .556, lastbeforeclose: !1, template: '<div class="jsPanel">\n                <div class="jsPanel-hdr">\n                    <div class="jsPanel-headerbar">\n                        <div class="jsPanel-titlebar">\n                            <h3 class="jsPanel-title"></h3>\n                        </div>\n                        <div class="jsPanel-controlbar">\n                            <div class="jsPanel-btn jsPanel-btn-smallify"><span class="jsglyph jsglyph-chevron-up"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-smallifyrev"><span class="jsglyph jsglyph-chevron-down"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-minimize"><span class="jsglyph jsglyph-minimize"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-normalize"><span class="jsglyph jsglyph-normalize"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-maximize"><span class="jsglyph jsglyph-maximize"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-close"><span class="jsglyph jsglyph-close"></span></div>\n                        </div>\n                    </div>\n                    <div class="jsPanel-hdr-toolbar"></div>\n                </div>\n                <div class="jsPanel-content"></div>\n                <div class="jsPanel-ftr"></div>\n               </div>', replacementTemplate: '<div class="jsPanel-replacement">\n                            <div class="jsPanel-hdr">\n                                <div class="jsPanel-headerbar">\n                                    <div class="jsPanel-titlebar">\n                                        <h3 class="jsPanel-title"></h3>\n                                    </div>\n                                    <div class="jsPanel-controlbar">\n                                        <div class="jsPanel-btn jsPanel-btn-normalize"><span class="jsglyph jsglyph-normalize"></span></div>\n                                        <div class="jsPanel-btn jsPanel-btn-maximize"><span class="jsglyph jsglyph-maximize"></span></div>\n                                        <div class="jsPanel-btn jsPanel-btn-close"><span class="jsglyph jsglyph-close"></span></div>\n                                    </div>\n                                </div>\n                            </div>\n                          </div>',
  themes: "default primary info success warning danger".split(" "), tplHeaderOnly: '<div class="jsPanel">\n                        <div class="jsPanel-hdr">\n                            <div class="jsPanel-headerbar">\n                                <div class="jsPanel-titlebar">\n                                    <h3 class="jsPanel-title"></h3>\n                                </div>\n                                <div class="jsPanel-controlbar">\n                                    <div class="jsPanel-btn jsPanel-btn-close"><span class="jsglyph jsglyph-close"></span></div>\n                                </div>\n                            </div>\n                            <div class="jsPanel-hdr-toolbar"></div>\n                        </div>\n                    </div>',
  tplContentOnly: '<div class="jsPanel">\n                        <div class="jsPanel-content jsPanel-content-noheader jsPanel-content-nofooter"></div>\n                     </div>', activePanels: { list: [], getPanel: function getPanel(a) {
      return "string" === typeof a ? document.getElementById(a).jspanel.noop() : document.getElementById(this.list[a]).jspanel.noop();
    } }, position: function position(a, c) {
    function d(b, a) {
      var c;if ((c = b.ownerDocument.defaultView) && c.getComputedStyle) return a = a.replace(/([A-Z])/g, "-$1").toLowerCase(), c.getComputedStyle(b, null).getPropertyValue(a);if (b.currentStyle) return a = a.replace(/\-(\w)/g, function (b, a) {
        return a.toUpperCase();
      }), c = b.currentStyle[a], /^\d+(em|pt|%|ex)?$/i.test(c) ? function (a) {
        var c = b.style.left,
            d = b.runtimeStyle.left;b.runtimeStyle.left = b.currentStyle.left;b.style.left = a || 0;a = b.style.pixelLeft + "px";b.style.left = c;b.runtimeStyle.left = d;return a;
      }(c) : c;
    }function e(b) {
      var a = {};u.includes(b) ? a.left = window.pageXOffset : v.includes(b) ? a.left = window.pageXOffset + document.documentElement.clientWidth / 2 : w.includes(b) ? a.left = window.pageXOffset + document.documentElement.clientWidth : a.left = window.pageXOffset;x.includes(b) ? a.top = window.pageYOffset : y.includes(b) ? a.top = window.pageYOffset + window.innerHeight / 2 : z.includes(b) ? a.top = window.pageYOffset + window.innerHeight : a.top = window.pageYOffset;return a;
    }function f(a) {
      var c = {},
          d = b(h.of);u.includes(a) ? c.left = d.left : v.includes(a) ? c.left = d.left + d.width / 2 : w.includes(a) ? c.left = d.left + d.width : c.left = d.left;x.includes(a) ? c.top = d.top : y.includes(a) ? c.top = d.top + d.height / 2 : z.includes(a) ? c.top = d.top + d.height : c.top = d.top;return c;
    }function g(a) {
      var b = {},
          c = m.getBoundingClientRect();u.includes(a) ? b.left = 0 : v.includes(a) ? b.left = c.width / 2 : w.includes(a) ? b.left = c.width : b.left = 0;x.includes(a) ? b.top = 0 : y.includes(a) ? b.top = c.height / 2 : z.includes(a) ? b.top = c.height : b.top = 0;return b;
    }function p(a) {
      var b = {},
          c = m.getBoundingClientRect(),
          d = document.querySelector(h.of).getBoundingClientRect(),
          f = d.left - c.left,
          c = d.top - c.top;u.includes(a) ? b.left = f : v.includes(a) ? b.left = f + d.width / 2 : w.includes(a) ? b.left = f + d.width : b.left = f;x.includes(a) ? b.top = c : y.includes(a) ? b.top = c + d.height / 2 : z.includes(a) ? b.top = c + d.height : b.top = c;return b;
    }function b(a) {
      a = a.jquery ? a[0].getBoundingClientRect() : "string" === typeof a ? document.querySelector(a).getBoundingClientRect() : a.getBoundingClientRect();return { width: Math.round(a.width), height: Math.round(a.height), left: Math.round(a.left + window.pageXOffset), top: Math.round(a.top + window.pageYOffset) };
    }var k,
        l,
        h,
        m,
        r = 0,
        t = 0,
        n,
        u = ["left-top", "left-center", "left-bottom"],
        v = ["center-top", "center", "center-bottom"],
        w = ["right-top", "right-center", "right-bottom"],
        x = ["left-top", "center-top", "right-top"],
        y = ["left-center", "center", "right-center"],
        z = ["left-bottom", "center-bottom", "right-bottom"];if ("string" === typeof c) {
      k = c.match(/\b[a-z]{4,6}-{1}[a-z]{3,6}\b/);l = c.match(/DOWN|UP|RIGHT|LEFT/);var q = c.match(/[+-]?\d+\.?\d*%?/g);c = $.isArray(k) ? { my: k[0], at: k[0] } : { my: "center", at: "center" };$.isArray(l) && (c.autoposition = l[0]);$.isArray(q) && (c.offsetX = q[0], 2 === q.length && (c.offsetY = q[1]));
    }h = Object.assign({ my: "center", at: "center",
      offsetX: 0, offsetY: 0, modify: !1, fixed: "true" }, c);k = "string" === typeof a ? document.querySelector(a) : a.jquery ? a[0] : a;m = k.parentElement;h.of || (m === document.body ? h.of = "window" : h.of = m);l = b(k);"string" === typeof h.offsetX && "%" === h.offsetX.slice(-1) ? h.offsetX = "window" === h.of ? window.innerWidth * (parseInt(h.offsetX, 10) / 100) : m.clientWidth * (parseInt(h.offsetX, 10) / 100) : "string" === typeof h.offsetX ? h.offsetX = parseFloat(h.offsetX) : $.isFunction(h.offsetX) && (h.offsetX = parseInt(h.offsetX.call(a, a)));"string" === typeof h.offsetY && "%" === h.offsetY.slice(-1) ? h.offsetY = "window" === h.of ? window.innerHeight * (parseInt(h.offsetY, 10) / 100) : m.clientHeight * (parseInt(h.offsetY, 10) / 100) : "string" === typeof h.offsetY ? h.offsetY = parseFloat(h.offsetY) : $.isFunction(h.offsetY) && (h.offsetY = parseInt(h.offsetY.call(a, a)));q = parseInt(d(m, "border-left-width"));u.includes(h.my) ? r = q : v.includes(h.my) ? r = l.width / 2 + q : w.includes(h.my) && (r = l.width + q);q = parseInt(d(m, "border-top-width"));x.includes(h.my) ? t = q : y.includes(h.my) ? t = l.height / 2 + q : z.includes(h.my) && (t = l.height + q);k.parentElement === document.body ? "window" === h.of ? (l = e(h.at), h.fixed ? (r = l.left - r + h.offsetX - window.pageXOffset, t = l.top - t + h.offsetY - window.pageYOffset) : (r = l.left - r + h.offsetX, t = l.top - t + h.offsetY)) : (l = f(h.at), r = l.left - r + h.offsetX, t = l.top - t + h.offsetY) : (l = "string" === typeof h.of ? document.querySelector(h.of) : h.of.jquery ? h.of[0] : h.of, l = m === l ? g(h.at) : p(h.at), r = l.left - r + h.offsetX, t = l.top - t + h.offsetY);if (h.autoposition) {
      l = [];q = this.autopositionSpacing;h.my === h.at && (n = h.my);k.setAttribute("data-autoposition", h.autoposition);$.isFunction(h.offsetX) || k.setAttribute("data-offsetx", h.offsetX);$.isFunction(h.offsetY) || k.setAttribute("data-offsety", h.offsetY);k.classList.add(n);n = document.getElementsByClassName(n);for (var A = 0; A < n.length; A++) {
        n[A].parentElement === m && l.push(n[A]);
      }if ("DOWN" === h.autoposition) for (n = 0; n < l.length - 1; n++) {
        t += l[n].getBoundingClientRect().height + q;
      } else if ("UP" === h.autoposition) for (n = 0; n < l.length - 1; n++) {
        t -= l[n].getBoundingClientRect().height + q;
      } else if ("RIGHT" === h.autoposition) for (n = 0; n < l.length - 1; n++) {
        r += l[n].getBoundingClientRect().width + q;
      } else if ("LEFT" === h.autoposition) for (n = 0; n < l.length - 1; n++) {
        r -= l[n].getBoundingClientRect().width + q;
      }
    }n = { left: r, top: t };"function" === typeof h.modify && (n = h.modify.call(n, n));k.style.position = "absolute";k.style.left = n.left + "px";k.style.top = n.top + "px";k.style.opacity = 1;"window" === h.of && h.fixed && m === document.body && (k.style.position = "fixed");return k;
  }, reposition: function reposition(a, c) {
    c = void 0 === c ? a.option.position : c;"minimized" !== a.data("status") && (0 < $(".jsPanel-connector", a).length && $(".jsPanel-connector", a).remove(), this.position(a, c), a.option.position = c);return a;
  }, addCustomTheme: function addCustomTheme(a) {
    this.themes.includes(a) || this.themes.push(a);
  }, hslToRgb: function hslToRgb(a, c, d) {
    if (0 === c) d = c = a = d;else {
      var e = function e(a, b, c) {
        0 > c && (c += 1);1 < c && --c;return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a;
      },
          f = .5 > d ? d * (1 + c) : d + c - d * c,
          g = 2 * d - f;d = e(g, f, a + 1 / 3);c = e(g, f, a);a = e(g, f, a - 1 / 3);
    }return [Math.round(255 * d), Math.round(255 * c), Math.round(255 * a)];
  }, rgbToHsl: function rgbToHsl(a, c, d) {
    a /= 255;c /= 255;d /= 255;var e = Math.max(a, c, d),
        f = Math.min(a, c, d),
        g,
        p = (e + f) / 2;if (e === f) g = f = 0;else {
      var b = e - f,
          f = .5 < p ? b / (2 - e - f) : b / (e + f);switch (e) {case a:
          g = (c - d) / b + (c < d ? 6 : 0);break;case c:
          g = (d - a) / b + 2;break;case d:
          g = (a - c) / b + 4;}g /= 6;
    }g *= 360;f = 100 * f + "%";p = 100 * p + "%";return { css: "hsl(" + g + "," + f + "," + p + ")", h: g, s: f, l: p };
  }, rgbToHex: function rgbToHex(a, c, d) {
    a = Number(a).toString(16);1 === a.length && (a = "0" + a);c = Number(c).toString(16);1 === c.length && (c = "0" + c);d = Number(d).toString(16);1 === d.length && (d = "0" + d);return "#" + a + c + d;
  }, perceivedBrightness: function perceivedBrightness(a) {
    a = this.color(a).rgb;
    return a.r / 255 * .2627 + a.g / 255 * .678 + a.b / 255 * .0593;
  }, lighten: function lighten(a, c) {
    var d = this.color(a).hsl,
        e = parseFloat(d.l);return "hsl(" + d.h + "," + d.s + "," + (e + (100 - e) * c + "%") + ")";
  }, darken: function darken(a, c) {
    var d = this.color(a).hsl,
        e = parseFloat(d.l);return "hsl(" + d.h + "," + d.s + "," + (e - e * c + "%") + ")";
  }, color: function color(a) {
    var c = a.toLowerCase(),
        d,
        e,
        f;a = {};d = /^rgba?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3}),?(0|1|0\.[0-9]{1,2}|\.[0-9]{1,2})?\)$/gi;e = /^hsla?\(([0-9]{1,3}),([0-9]{1,3}\%),([0-9]{1,3}\%),?(0|1|0\.[0-9]{1,2}|\.[0-9]{1,2})?\)$/gi;
    f = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgrey: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b",
      darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", grey: "808080",
      green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de",
      lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500",
      orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa",
      springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };f[c] && (c = f[c]);null !== c.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/gi) ? (c = c.replace("#", ""), 1 === c.length % 2 ? (d = c.substr(0, 1).repeat(2), e = c.substr(1, 1).repeat(2), c = c.substr(2, 1).repeat(2), a.rgb = { r: parseInt(d, 16), g: parseInt(e, 16), b: parseInt(c, 16) }, a.hex = "#" + d + e + c) : (a.rgb = { r: parseInt(c.substr(0, 2), 16), g: parseInt(c.substr(2, 2), 16), b: parseInt(c.substr(4, 2), 16) }, a.hex = "#" + c), c = this.rgbToHsl(a.rgb.r, a.rgb.g, a.rgb.b), a.hsl = c, a.rgb.css = "rgb(" + a.rgb.r + "," + a.rgb.g + "," + a.rgb.b + ")") : c.match(d) ? (d = d.exec(c), a.rgb = { css: c, r: d[1], g: d[2], b: d[3] }, a.hex = this.rgbToHex(d[1], d[2], d[3]), c = this.rgbToHsl(d[1], d[2], d[3]), a.hsl = c) : c.match(e) ? (d = e.exec(c), c = d[1] / 360, e = d[2].substr(0, d[2].length - 1) / 100, f = d[3].substr(0, d[3].length - 1) / 100, c = this.hslToRgb(c, e, f), a.rgb = { css: "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")", r: c[0], g: c[1],
      b: c[2] }, a.hex = this.rgbToHex(a.rgb.r, a.rgb.g, a.rgb.b), a.hsl = { css: "hsl(" + d[1] + "," + d[2] + "," + d[3] + ")", h: d[1], s: d[2], l: d[3] }) : (a.hex = "#f5f5f5", a.rgb = { css: "rgb(245,245,245)", r: 245, g: 245, b: 245 }, a.hsl = { css: "hsl(0,0%,96.08%)", h: 0, s: "0%", l: "96.08%" });return a;
  }, calcColors: function calcColors(a) {
    var c = this.color(a),
        d = this.lighten(a, .81),
        e = this.darken(a, .5),
        f,
        g,
        p;this.perceivedBrightness(a) <= this.pbTreshold ? f = "#ffffff" : f = "#000000";this.perceivedBrightness(d) <= this.pbTreshold ? g = "#ffffff" : g = "#000000";this.perceivedBrightness(e) <= this.pbTreshold ? p = "#000000" : p = "#ffffff";return [c.hsl.css, d, e, f, g, p];
  }, insertModalBackdrop: function insertModalBackdrop(a) {
    var c;0 === $(".jsPanel-modal-backdrop").length ? c = "rgba(0,0,0,0.65)" : c = "rgba(0,0,0,0.15)";a = a ? '<div id="jsPanel-modal-backdrop-' + a.attr("id") + '" class="jsPanel-modal-backdrop" style="background:' + c + ";z-index:" + (this.modalcount + 9999) + '"></div>' : '<div id="jsPanel-modal-backdrop" class="jsPanel-modal-backdrop" style="background:' + c + ";z-index:" + (this.modalcount + 9999) + '"></div>';$("body").append(a);this.modalcount += 1;
  }, addConnector: function addConnector(a) {
    function c(c) {
      if (c.match(/top|topleft|topright|lefttopcorner|righttopcorner|leftbottom|rightbottom/)) return "none" !== a.footer.css("display") ? b : 0 < parseFloat(a.option.contentSize.height) ? p : k;
    }function d(c) {
      if (c.match(/bottom|bottomleft|bottomright|leftbottomcorner|rightbottomcorner/)) {
        if (!a.option.headerRemove) return k;if (0 < parseFloat(a.option.contentSize.height)) return p;if ("none" !== a.footer.css("display")) return b;
      }
    }function e(b) {
      if (b.match(/lefttop|righttop/)) return a.option.headerRemove ? p : k;
    }function f(c) {
      if (c.match(/left|right/)) {
        if (0 < parseFloat(a.option.contentSize.height)) return p;if (!a.option.headerRemove) return k;if ("none" !== a.footer.css("display")) return b;
      }
    }var g = a.option.paneltype.connectorBG || null,
        p = a.content.css("background-color"),
        b = a.footer.css("background-color"),
        k = a.css("background-color");a.hasClass("jsPanel-tooltip-top") ? (a.append("<div class='jsPanel-connector jsPanel-connector-top'>"), $(".jsPanel-connector-top", a).css("border-top-color", g || c("top")), a.option.position.offsetY = a.option.position.offsetY - 10 || -10) : a.hasClass("jsPanel-tooltip-bottom") ? (a.append("<div class='jsPanel-connector jsPanel-connector-bottom'>"), $(".jsPanel-connector-bottom", a).css("border-bottom-color", g || d("bottom")), a.option.position.offsetY = a.option.position.offsetY + 10 || 10) : a.hasClass("jsPanel-tooltip-left") ? (a.append("<div class='jsPanel-connector jsPanel-connector-left'>"), $(".jsPanel-connector-left", a).css("border-left-color", g || f("left")), a.option.position.offsetX = a.option.position.offsetX - 12 || -12) : a.hasClass("jsPanel-tooltip-right") ? (a.append("<div class='jsPanel-connector jsPanel-connector-right'>"), $(".jsPanel-connector-right", a).css("border-right-color", g || f("right")), a.option.position.offsetX = a.option.position.offsetX + 12 || 12) : a.hasClass("jsPanel-tooltip-lefttopcorner") ? (a.append("<div class='jsPanel-connector jsPanel-connector-lefttopcorner'>"), $(".jsPanel-connector-lefttopcorner", a).css("background-color", g || c("lefttopcorner"))) : a.hasClass("jsPanel-tooltip-righttopcorner") ? (a.append("<div class='jsPanel-connector jsPanel-connector-righttopcorner'>"), $(".jsPanel-connector-righttopcorner", a).css("background-color", g || c("righttopcorner"))) : a.hasClass("jsPanel-tooltip-rightbottomcorner") ? (a.append("<div class='jsPanel-connector jsPanel-connector-rightbottomcorner'>"), $(".jsPanel-connector-rightbottomcorner", a).css("background-color", g || d("rightbottomcorner"))) : a.hasClass("jsPanel-tooltip-leftbottomcorner") ? (a.append("<div class='jsPanel-connector jsPanel-connector-leftbottomcorner'>"), $(".jsPanel-connector-leftbottomcorner", a).css("background-color", g || d("leftbottomcorner"))) : a.hasClass("jsPanel-tooltip-lefttop") ? (a.append("<div class='jsPanel-connector jsPanel-connector-lefttop'>"), $(".jsPanel-connector-lefttop", a).css("border-left-color", g || e("lefttop")), a.option.position.offsetX = a.option.position.offsetX - 12 || -12) : a.hasClass("jsPanel-tooltip-leftbottom") ? (a.append("<div class='jsPanel-connector jsPanel-connector-leftbottom'>"), $(".jsPanel-connector-leftbottom", a).css("border-left-color", g || c("leftbottom")), a.option.position.offsetX = a.option.position.offsetX - 12 || -12) : a.hasClass("jsPanel-tooltip-topleft") ? (a.append("<div class='jsPanel-connector jsPanel-connector-topleft'>"), $(".jsPanel-connector-topleft", a).css("border-top-color", g || c("topleft")), a.option.position.offsetY = a.option.position.offsetY - 10 || -10) : a.hasClass("jsPanel-tooltip-topright") ? (a.append("<div class='jsPanel-connector jsPanel-connector-topright'>"), $(".jsPanel-connector-topright", a).css("border-top-color", g || c("topright")), a.option.position.offsetY = a.option.position.offsetY - 10 || -10) : a.hasClass("jsPanel-tooltip-righttop") ? (a.append("<div class='jsPanel-connector jsPanel-connector-righttop'>"), $(".jsPanel-connector-righttop", a).css("border-right-color", g || e("righttop")), a.option.position.offsetX = a.option.position.offsetX + 12 || 12) : a.hasClass("jsPanel-tooltip-rightbottom") ? (a.append("<div class='jsPanel-connector jsPanel-connector-rightbottom'>"), $(".jsPanel-connector-rightbottom", a).css("border-right-color", g || c("rightbottom")), a.option.position.offsetX = a.option.position.offsetX + 12 || 12) : a.hasClass("jsPanel-tooltip-bottomleft") ? (a.append("<div class='jsPanel-connector jsPanel-connector-bottomleft'>"), $(".jsPanel-connector-bottomleft", a).css("border-bottom-color", g || d("bottomleft")), a.option.position.offsetY = a.option.position.offsetY + 10 || 10) : a.hasClass("jsPanel-tooltip-bottomright") && (a.append("<div class='jsPanel-connector jsPanel-connector-bottomright'>"), $(".jsPanel-connector-bottomright", a).css("border-bottom-color", g || d("bottomright")), a.option.position.offsetY = a.option.position.offsetY + 10 || 10);
  }, setTrigger: function setTrigger(a) {
    return "string" === typeof a.of ? document.querySelector(a.of) : a.of.jquery ? a.of[0] : a.of;
  }, closeTooltips: function closeTooltips() {
    $(".jsPanel-tooltip").each(function (a, c) {
      return c.jspanel.close();
    });
  }, setTooltipClass: function setTooltipClass(a) {
    var c = a.option.position;"center-bottom" === c.my && "center-top" === c.at ? a.addClass("jsPanel-tooltip-top") : "left-bottom" === c.my && "right-top" === c.at ? a.addClass("jsPanel-tooltip-righttopcorner") : "left-center" === c.my && "right-center" === c.at ? a.addClass("jsPanel-tooltip-right") : "left-top" === c.my && "right-bottom" === c.at ? a.addClass("jsPanel-tooltip-rightbottomcorner") : "center-top" === c.my && "center-bottom" === c.at ? a.addClass("jsPanel-tooltip-bottom") : "right-top" === c.my && "left-bottom" === c.at ? a.addClass("jsPanel-tooltip-leftbottomcorner") : "right-center" === c.my && "left-center" === c.at ? a.addClass("jsPanel-tooltip-left") : "right-bottom" === c.my && "left-top" === c.at ? a.addClass("jsPanel-tooltip-lefttopcorner") : "center" === c.my && "center" === c.at ? a.addClass("jsPanel-tooltip-center") : "right-top" === c.my && "left-top" === c.at ? a.addClass("jsPanel-tooltip-lefttop") : "right-bottom" === c.my && "left-bottom" === c.at ? a.addClass("jsPanel-tooltip-leftbottom") : "left-bottom" === c.my && "left-top" === c.at ? a.addClass("jsPanel-tooltip-topleft") : "right-bottom" === c.my && "right-top" === c.at ? a.addClass("jsPanel-tooltip-topright") : "left-top" === c.my && "right-top" === c.at ? a.addClass("jsPanel-tooltip-righttop") : "left-bottom" === c.my && "right-bottom" === c.at ? a.addClass("jsPanel-tooltip-rightbottom") : "left-top" === c.my && "left-bottom" === c.at ? a.addClass("jsPanel-tooltip-bottomleft") : "right-top" === c.my && "right-bottom" === c.at && a.addClass("jsPanel-tooltip-bottomright");
  }, setTooltipMode: function setTooltipMode(a, c) {
    "semisticky" === a.option.paneltype.mode ? a.hover(function () {
      return $.noop();
    }, function () {
      a.close();$(c).removeClass("hasTooltip");
    }) : "sticky" === a.option.paneltype.mode ? $.noop() : $(c).mouseout(function () {
      a.close();$(c).removeClass("hasTooltip");
    });
  }, ajax: function ajax(a) {
    var c = a.option.contentAjax;$.ajax(c).done(function (d, e, f) {
      c.autoload && a.content.append(d);
      $.isFunction(c.done) && c.done.call(a, d, e, f, a);
    }).fail(function (d, e, f) {
      $.isFunction(c.fail) && c.fail.call(a, d, e, f, a);
    }).always(function (d, e, f) {
      $.isFunction(c.always) && c.always.call(a, d, e, f, a);
    }).then(function (d, e, f) {
      c.then && $.isArray(c.then) && $.isFunction(c.then[0]) && c.then[0].call(a, d, e, f, a);
    }, function (d, e, f) {
      $.isArray(c.then) && $.isFunction(c.then[1]) && c.then[1].call(a, d, e, f, a);
    });a.data("ajaxURL", c.url);
  }, iframe: function iframe(a) {
    var c = $("<iframe></iframe>"),
        d = a.option.contentIframe;d.srcdoc && (c.prop("srcdoc", d.srcdoc), a.data("iframeDOC", d.srcdoc));d.src && (c.prop("src", d.src), a.data("iframeSRC", d.src));"auto" === a.option.contentSize.width || d.width ? c.prop("width", d.width) : c.css("width", "100%");"auto" === a.option.contentSize.height || d.height ? c.prop("height", d.height) : c.css("height", "100%");d.name && c.prop("name", d.name);d.sandbox && c.prop("sandox", d.sandbox);d.id && c.prop("id", d.id);$.isPlainObject(d.style) && c.css(d.style);"string" === typeof d.classname ? c.addClass(d.classname) : $.isFunction(d.classname) && c.addClass(d.classname());
    a.content.append(c);
  }, contentReload: function contentReload(a) {
    a.option.content ? a.content.empty().append(a.option.content) : a.option.contentAjax ? (a.content.empty(), this.ajax(a)) : a.option.contentIframe && (a.content.empty(), this.iframe(a));return a;
  }, contentResize: function contentResize(a) {
    var c;a.footer.hasClass("active") ? c = a.header.outerHeight() + a.footer.outerHeight() : c = a.header.outerHeight();a.content.css({ height: a.outerHeight() - c });return a;
  }, configIconfont: function configIconfont(a) {
    var c = "close maximize normalize minimize smallify smallifyrev".split(" "),
        d = "remove fullscreen resize-full minus chevron-up chevron-down".split(" "),
        e = "times arrows-alt expand minus chevron-up chevron-down".split(" "),
        f = a.option.headerControls.iconfont,
        g = a.header.headerbar;"bootstrap" === f || "glyphicon" === f ? (c.forEach(function (a, b) {
      $(".jsPanel-btn-" + a + " span", g).removeClass().addClass("glyphicon glyphicon-" + d[b]);
    }), $(".jsPanel-headerbar .jsPanel-btn", a).css("padding-top", "4px")) : "font-awesome" === f && c.forEach(function (a, b) {
      $(".jsPanel-btn-" + a + " span", g).removeClass().addClass("fa fa-" + e[b]);
    });
  }, headerControl: function headerControl(a, c, d) {
    var e = a.header.headerbar,
        f = a[0];"disable" === d ? "removed" !== f.getAttribute("data-btn" + c) && (f.setAttribute("data-btn" + c, "disabled"), $(".jsPanel-btn-" + c, e).css({ pointerEvents: "none", opacity: .4, cursor: "default" })) : "enable" === d ? "removed" !== f.getAttribute("data-btn" + c) && (f.setAttribute("data-btn" + c, "enabled"), $(".jsPanel-btn-" + c, e).css({ pointerEvents: "auto", opacity: 1, cursor: "pointer" })) : "remove" === d && "close" !== c && (f.setAttribute("data-btn" + c, "removed"), $(".jsPanel-btn-" + c, e).remove());return a;
  }, hideControls: function hideControls(a, c) {
    var d = c.header.headerbar;$("div", d).css("display", "flex");$(a, d).css("display", "none");
  }, headerTitle: function headerTitle(a, c) {
    return c ? (a.header.title.empty().append(c), a) : a.header.title.html();
  }, configToolbar: function configToolbar(a, c, d) {
    var e, f;a.forEach(function (a) {
      "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && (e = $(a.item), "string" === typeof a.btntext && e.append(a.btntext), "string" === typeof a.btnclass && e.addClass(a.btnclass), c.append(e), $.isFunction(a.callback) && (f = a.event || "click", e.on(f, d, a.callback)));
    });
  },
  toolbar: function toolbar(a, c, d) {
    "header" === c ? (a.header.toolbar.addClass("active"), $.isArray(d) ? this.configToolbar(d, a.header.toolbar, a) : $.isFunction(d) ? a.header.toolbar.append(d(a.header)) : a.header.toolbar.append(d)) : "footer" === c && (a.content.removeClass("jsPanel-content-nofooter"), a.footer.addClass("active"), $.isArray(d) ? this.configToolbar(d, a.footer, a) : $.isFunction(d) ? a.footer.append(d(a.footer)) : a.footer.append(d));this.contentResize(a);return a;
  }, closeChildpanels: function closeChildpanels(a) {
    $(".jsPanel", a).each(function (a, d) {
      d.jspanel.close();
    });return a;
  }, dblclickhelper: function dblclickhelper(a, c) {
    if ("string" === typeof a) if ("maximize" === a || "normalize" === a) "normalized" === c.data("status") ? c.maximize() : c.normalize();else if ("minimize" === a || "smallify" === a || "close" === a) c[a]();
  }, exportPanels: function exportPanels() {
    var a,
        c,
        d,
        e,
        f,
        g,
        p,
        b = [],
        k,
        l = $(".jsPanel").not(".jsPanel-tooltip, .jsPanel-hint, .jsPanel-modal");l.each(function (a, b) {
      "normalized" !== $(b).data("status") && $(".jsPanel-btn-normalize", b).trigger("click");
    });l.each(function (h, m) {
      p = $(m).data("container");
      a = $(m).offset();c = $(m).position();"body" === p.toLowerCase() ? (d = Math.floor(a.top - $(window).scrollTop()), e = Math.floor(a.left - $(window).scrollLeft())) : (d = Math.floor(c.top), e = Math.floor(c.left));f = $(m).css("width");g = $(".jsPanel-content", m).css("height");k = { status: $(m).data("status"), id: $(m).prop("id"), headerTitle: $(".jsPanel-title", m).html(), custom: $(m).data("custom"), content: $(m).data("content"), contentSize: { width: f, height: g }, position: { my: "left-top", at: "left-top", offsetX: e, offsetY: d } };$(m).data("ajaxURL") && (k.contentAjax = { url: $(m).data("ajaxURL"), autoload: !0 });if ($(m).data("iframeDOC") || $(m).data("iframeSRC")) k.contentIframe = { src: $(m).data("iframeSRC") || "", srcdoc: $(m).data("iframeDOC") || "" };b.push(k);switch (k.status) {case "minimized":
          $(".jsPanel-btn-minimize", m).trigger("click");break;case "maximized":
          $(".jsPanel-btn-maximize", m).trigger("click");break;case "smallified":
          $(".jsPanel-btn-smallify", m).trigger("click");break;case "smallifiedMax":
          $(".jsPanel-btn-smallify", m).trigger("click");}
    });window.localStorage.setItem("jspanels", JSON.stringify(b));return b;
  }, importPanels: function importPanels(a) {
    var c = JSON.parse(localStorage.jspanels) || {},
        d = a["default"] || {},
        e;c.forEach(function (c) {
      e = "string" === typeof c.custom.config ? $.extend(!0, {}, d, a[c.custom.config], c) : $.extend(!0, {}, d, c);$.jsPanel(e);
    });
  }, resize: function resize(a, c, d) {
    if ("minimized" !== a.data("status")) {
      if ($.isFunction(a.option.onbeforeresize) && !1 === a.option.onbeforeresize.call(a, a)) return a;c && null !== c || (c = a.content.css("width") + a.content.css("border-left-width"));a.css("width", c);d && null !== d && a.css("height", d);a.contentResize();$.isFunction(a.option.onresized) && a.option.onresized.call(a, a);
    }return a;
  }, setZi: function setZi(a) {
    a.hasClass("jsPanel-modal") || (this.zi += 1) > a.css("z-index") && a.css("z-index", this.zi);
  }, resetZis: function resetZis() {
    var a = [];$(".jsPanel:not(.jsPanel-modal):not(.jsPanel-hint)").each(function (c, d) {
      a.push(d);
    });a.sort(function (a, d) {
      return $(a).css("z-index") - $(d).css("z-index");
    }).forEach(function (a, d) {
      (jsPanel.zi += 1) > $(a).css("z-index") && $(a).css("z-index", 100 + d);
    });this.zi = 99 + a.length;
  },
  updateCachedData: function updateCachedData(a) {
    var c = window.getComputedStyle(a[0], null);a.cachedData.top = c.getPropertyValue("top");a.cachedData.left = c.getPropertyValue("left");a.cachedData.width = c.getPropertyValue("width");a.cachedData.height = c.getPropertyValue("height");
  } };$(document.body).append("<div id='jsPanel-replacement-container'>");
(function (a) {
  a.jsPanel = function (c) {
    var d;c = c || {};var e = a.extend(!0, {}, c.config || {}, c),
        f = [],
        g,
        p,
        b = a(c.template || jsPanel.template),
        k;"tooltip" === e.paneltype && (e.paneltype = { tooltip: !0 });e.paneltype ? "modal" === e.paneltype ? b.option = a.extend(!0, {}, a.jsPanel.defaults, a.jsPanel.modaldefaults, e) : e.paneltype.tooltip ? b.option = a.extend(!0, {}, a.jsPanel.defaults, a.jsPanel.tooltipdefaults, e) : "hint" === e.paneltype && (b.option = a.extend(!0, {}, a.jsPanel.defaults, a.jsPanel.hintdefaults, e)) : b.option = a.extend(!0, {}, a.jsPanel.defaults, e);if (b.option.paneltype.tooltip && (k = jsPanel.setTrigger(b.option.position), a(k).hasClass("hasTooltip"))) return !1;var l = "container contentAjax contentIframe contentOverflow contentSize footerToolbar headerControls headerRemove headerTitle headerToolbar".split(" ");"selector ajax iframe overflow size toolbarFooter controls removeHeader title toolbarHeader".split(" ").forEach(function (a, c) {
      b.option[a] && (b.option[l[c]] = b.option[a]);
    });switch (b.option.theme) {case "light":
        b.option.theme = "gainsboro";break;
      case "medium":
        b.option.theme = "silver";break;case "dark":
        b.option.theme = "gray";break;case "autumngreen":
        b.option.theme = "#5A521B";break;case "autumnbrown":
        b.option.theme = "#823E1D";break;case "autumnred":
        b.option.theme = "#852228";}if (b.option.bootstrap) switch (b.option.bootstrap) {case "default":
        b.option.theme = "bootstrap-default";break;case "primary":
        b.option.theme = "bootstrap-primary";break;case "info":
        b.option.theme = "bootstrap-info";break;case "success":
        b.option.theme = "bootstrap-success";break;case "warning":
        b.option.theme = "bootstrap-warning";break;case "danger":
        b.option.theme = "bootstrap-danger";}b.option.load.url && (b.option.contentAjax = { url: b.option.load.url, autoload: !0, data: b.option.load.data || void 0, done: b.option.load.complete || void 0 });b.option.panelstatus && ("smallifiedMax" === b.option.panelstatus ? b.option.setstatus = "maximize smallify" : b.option.setstatus = b.option.panelstatus);b.option.headerControls.buttons && (b.option.headerControls.controls = b.option.headerControls.buttons);c = b.option.theme.toLowerCase().replace(/ /g, "");c.endsWith("filled") ? (f[1] = "filled", f[0] = c.substr(0, c.length - 6)) : c.endsWith("filledlight") ? (f[1] = "filledlight", f[0] = c.substr(0, c.length - 11)) : (f[1] = "", f[0] = c);f[0].match("-") && (g = f[0].split("-"), p = !0);"string" === typeof b.option.id ? d = b.option.id : a.isFunction(b.option.id) && (b.option.id = d = b.option.id());if (0 < a("#" + d).length) return console.warn("jsPanel Error: No jsPanel created - id attribute passed with option.id already exists in document"), !1;b.attr("id", d);b.data("custom", b.option.custom);b.header = a(".jsPanel-hdr", b);b.header.headerbar = a(".jsPanel-headerbar", b.header);b.header.title = a(".jsPanel-title", b.header.headerbar);b.header.controls = a(".jsPanel-controlbar", b.header.headerbar);b.header.toolbar = a(".jsPanel-hdr-toolbar", b.header);b.content = a(".jsPanel-content", b);b.footer = a(".jsPanel-ftr", b);b.data("status", "initialized");b.cachedData = {};b.toolbarAdd = function (a, c) {
      c = void 0 === c ? [] : c;return jsPanel.toolbar(b, void 0 === a ? "header" : a, c);
    };b.close = function () {
      a(document).trigger("jspanelbeforeclose", d);if (a.isFunction(b.option.onbeforeclose) && !1 === b.option.onbeforeclose.call(b, b)) return b;var c = b.option.position;if (c.autoposition || "string" === typeof c && c.match(/DOWN|RIGHT|UP|LEFT/)) {
        var c = a("#" + d).parent(),
            f = document.getElementById(d).className.match(/left-top|center-top|right-top|left-center|center|right-center|left-bottom|center-bottom|right-bottom/);f && (jsPanel.lastbeforeclose = { parent: c, "class": f[0] });
      }b.closeChildpanels().remove();c = jsPanel.activePanels.list.findIndex(function (a) {
        return a === d;
      });-1 < c && jsPanel.activePanels.list.splice(c, 1);a("#" + d + "-min").remove();"modal" === b.option.paneltype && a("#jsPanel-modal-backdrop-" + b.attr("id")).remove();b.option.paneltype.tooltip && a(k).removeClass("hasTooltip");a(document).trigger("jspanelclosed", d);a(document).trigger("jspanelstatuschange", d);var e, g;jsPanel.lastbeforeclose && (e = jsPanel.lastbeforeclose.parent, e = a("." + jsPanel.lastbeforeclose["class"], e), g = jsPanel.lastbeforeclose["class"]);e && (e.each(function (b, c) {
        a(c).removeClass(g);
      }), e.each(function (a, b) {
        var c = b.getAttribute("data-autoposition"),
            d = b.getAttribute("data-offsetx"),
            h = b.getAttribute("data-offsety");jsPanel.position(b, { my: g, at: g, autoposition: c, offsetX: d, offsetY: h });
      }));jsPanel.lastbeforeclose = !1;a.isFunction(b.option.onclosed) && b.option.onclosed.call(b, b);jsPanel.resetZis();
    };b.closeChildpanels = function () {
      return jsPanel.closeChildpanels(b);
    };b.contentReload = function () {
      return jsPanel.contentReload(b);
    };b.contentResize = function () {
      return jsPanel.contentResize(b);
    };b.headerControl = function (a, c) {
      c = void 0 === c ? "enable" : c;a ? jsPanel.headerControl(b, a, c) : ["close", "maximize", "minimize", "normalize", "smallify"].forEach(function (a) {
        jsPanel.headerControl(b, a, c);
      });return b;
    };b.headerTitle = function (a) {
      return jsPanel.headerTitle(b, a);
    };b.front = function () {
      b.css("z-index", jsPanel.setZi(b));jsPanel.resetZis();return b;
    };b.normalize = function () {
      if ("normalized" === b.data("status")) return b;a(document).trigger("jspanelbeforenormalize", d);if (a.isFunction(b.option.onbeforenormalize) && !1 === b.option.onbeforenormalize.call(b, b)) return b;b.css({ left: b.cachedData.left, top: b.cachedData.top, width: b.cachedData.width, height: b.cachedData.height, zIndex: function zIndex() {
          jsPanel.setZi(b);
        } }).data("status", "normalized").contentResize();jsPanel.hideControls(".jsPanel-btn-normalize, .jsPanel-btn-smallifyrev", b);a("#" + b.prop("id") + "-min").remove();a(document).trigger("jspanelnormalized", d);a(document).trigger("jspanelstatuschange", d);a.isFunction(b.option.onnormalized) && b.option.onnormalized.call(b, b);return b;
    };b.maximize = function () {
      var c = b.option.maximizedMargin,
          f = b[0].parentNode;if ("maximized" === b.data("status")) return b;"normalized" === b.data("status") && jsPanel.updateCachedData(b);a(document).trigger("jspanelbeforemaximize", d);if (a.isFunction(b.option.onbeforemaximize) && !1 === b.option.onbeforemaximize.call(b, b)) return b;f === document.body ? (b.css({ width: document.documentElement.clientWidth - c.left - c.right + "px", height: document.documentElement.clientHeight - c.top - c.bottom + "px", left: c.left + "px", top: c.top + "px" }), !1 === b.option.position.fixed && b.css({ left: window.pageXOffset + c.left + "px", top: window.pageYOffset + c.top + "px" })) : b.css({ width: f.clientWidth - c.left - c.right + "px", height: f.clientHeight - c.top - c.bottom + "px", left: c.left + "px", top: c.top + "px" });b.contentResize().data("status", "maximized").css("z-index", jsPanel.setZi(b));jsPanel.hideControls(".jsPanel-btn-maximize, .jsPanel-btn-smallifyrev", b);a("#" + b.prop("id") + "-min").remove();a(document).trigger("jspanelmaximized", d);a(document).trigger("jspanelstatuschange", d);a.isFunction(b.option.onmaximized) && b.option.onmaximized.call(b, b);return b;
    };b.minimize = function () {
      if ("minimized" === b.data("status")) return b;a(document).trigger("jspanelbeforeminimize", d);if (a.isFunction(b.option.onbeforeminimize) && !1 === b.option.onbeforeminimize.call(b, b)) return b;var c = b.header.headerbar.css("color"),
          f;f = p ? "transparent" === b.header.css("background-color") ? b.css("background-color") : b.header.css("background-color") : b.css("background-color");"normalized" === b.data("status") && jsPanel.updateCachedData(b);var e = a(jsPanel.replacementTemplate);
      e.left = b.css("left");b.css("left", "-9999px").data("status", "minimized");e.css({ backgroundColor: f }).prop("id", b.prop("id") + "-min").find("h3").css({ color: c }).html(b.headerTitle());a(".jsPanel-btn", e).css({ color: c });c = a(b.option.container).closest(".jsPanel-content");c.length ? (a(".jsPanel-minimized-box").length || a(c[0]).append("<div class='jsPanel-minimized-box'>"), a(".jsPanel-minimized-box").append(e)) : a("#jsPanel-replacement-container").append(e);a(document).trigger("jspanelminimized", d);a(document).trigger("jspanelstatuschange", d);a.isFunction(b.option.onminimized) && b.option.onminimized.call(b, b);a(".jsPanel-btn-normalize", e).css("display", "block").click(function () {
        b.css("left", e.left);e.remove();a(".jsPanel-btn-normalize", b).trigger("click");
      });"disabled" === b[0].dataset.btnnormalize ? a(".jsPanel-btn-normalize", e).css({ pointerEvents: "none", opacity: .5, cursor: "default" }) : "removed" === b[0].dataset.btnnormalize && a(".jsPanel-btn-normalize", e).remove();a(".jsPanel-btn-maximize", e).click(function () {
        b.css("left", e.left);e.remove();
        a(".jsPanel-btn-maximize", b).trigger("click");
      });"disabled" === b[0].dataset.btnmaximize ? a(".jsPanel-btn-maximize", e).css({ pointerEvents: "none", opacity: .5, cursor: "default" }) : "removed" === b[0].dataset.btnmaximize && a(".jsPanel-btn-maximize", e).remove();a(".jsPanel-btn-close", e).click(function () {
        e.remove();b.close();
      });"disabled" === b[0].dataset.btnclose && a(".jsPanel-btn-close", e).css({ pointerEvents: "none", opacity: .5, cursor: "default" });return b;
    };b.reposition = function (a) {
      return jsPanel.reposition(b, a);
    };b.resize = function (a, c) {
      return jsPanel.resize(b, a, c);
    };b.smallify = function () {
      "normalized" === b.data("status") || "maximized" === b.data("status") ? "smallified" !== b.data("status") && "smallifiedMax" !== b.data("status") && (b.smallify.height = b.outerHeight(), b.animate({ height: b.header.headerbar.outerHeight() + "px" }), "maximized" === b.data("status") ? (jsPanel.hideControls(".jsPanel-btn-maximize, .jsPanel-btn-smallify", b), b.data("status", "smallifiedMax"), a(document).trigger("jspanelsmallifiedmax", d)) : (jsPanel.hideControls(".jsPanel-btn-normalize, .jsPanel-btn-smallify", b), b.data("status", "smallified"), a(document).trigger("jspanelsmallified", d)), a(document).trigger("jspanelstatuschange", d), a.isFunction(b.option.onsmallified) && b.option.onsmallified.call(b, b)) : "minimized" !== b.data("status") && (b.animate({ height: b.smallify.height }), "smallified" === b.data("status") ? (jsPanel.hideControls(".jsPanel-btn-normalize, .jsPanel-btn-smallifyrev", b), b.data("status", "normalized"), a(document).trigger("jspanelnormalized", d)) : (jsPanel.hideControls(".jsPanel-btn-maximize, .jsPanel-btn-smallifyrev", b), b.data("status", "maximized"), a(document).trigger("jspanelmaximized", d)), a(document).trigger("jspanelstatuschange", d), a.isFunction(b.option.onunsmallified) && b.option.onunsmallified.call(b, b));b.css("z-index", jsPanel.setZi(b));return b;
    };b.addToolbar = b.toolbarAdd;b.reloadContent = b.contentReload;b.resizeContent = b.contentResize;b.control = b.headerControl;b.title = b.headerTitle;a(".jsPanel-btn-close", b).on("click", function (a) {
      a.preventDefault();b.close();
    });a(".jsPanel-btn-minimize", b).on("click", function (a) {
      a.preventDefault();
      b.minimize();
    });a(".jsPanel-btn-maximize", b).on("click", function (a) {
      a.preventDefault();b.maximize();
    });a(".jsPanel-btn-normalize", b).on("click", function (a) {
      a.preventDefault();b.normalize();
    });a(".jsPanel-btn-smallify, .jsPanel-btn-smallifyrev", b).on("click", function (a) {
      a.preventDefault();b.smallify();
    });b.option.headerRemove ? (b.header.remove(), b.content.addClass("jsPanel-content-noheader"), ["close", "maximize", "minimize", "normalize", "smallify"].forEach(function (a) {
      b[0].setAttribute("data-btn" + a, "removed");
    })) : "closeonly" === b.option.headerControls.controls ? (a(".jsPanel-btn:not(.jsPanel-btn-close)", b.header.headerbar).remove(), ["maximize", "minimize", "normalize", "smallify"].forEach(function (a) {
      b[0].setAttribute("data-btn" + a, "removed");
    }), b[0].setAttribute("data-btn-close", "enabled")) : "none" === b.option.headerControls.controls ? (a(b.header.controls).remove(), ["close", "maximize", "minimize", "normalize", "smallify"].forEach(function (a) {
      b[0].setAttribute("data-btn" + a, "removed");
    })) : ["close", "maximize", "minimize", "normalize", "smallify"].forEach(function (a) {
      "disable" === b.option.headerControls[a] ? b.headerControl(a, "disable") : "remove" === b.option.headerControls[a] ? b.headerControl(a, "remove") : b[0].setAttribute("data-btn" + a, "enabled");
    });jsPanel.configIconfont(b);"modal" === b.option.paneltype ? (jsPanel.insertModalBackdrop(b), b.addClass("jsPanel-modal").css("z-index", jsPanel.modalcount + 9999)) : "hint" === b.option.paneltype ? b.addClass("jsPanel-hint").css("z-index", 1E4) : b.option.paneltype.tooltip && (k = jsPanel.setTrigger(b.option.position), b.addClass("jsPanel-tooltip"), jsPanel.setTooltipClass(b), b.option.paneltype.solo && jsPanel.closeTooltips(), jsPanel.setTooltipMode(b, k));b.appendTo(b.option.container);jsPanel.activePanels.list.push(d);b.option.paneltype.tooltip && a(k).addClass("hasTooltip");a(document).trigger("jspanelloaded", d);b.data("container", b.option.container);p ? (b.addClass("panel panel-" + g[1]).addClass("card card-inverse card-" + g[1]).header.addClass("panel-heading").title.addClass("panel-title"), b.content.addClass("panel-body").css("border-top-color", function () {
      return b.header.css("border-top-color");
    }), b.footer.addClass("panel-footer card-footer"), g = "transparent" === a(".panel-heading", b).css("background-color") ? b.css("background-color").replace(/\s+/g, "") : a(".panel-heading", b).css("background-color").replace(/\s+/g, ""), c = jsPanel.calcColors(g), a("*", b.header).css("color", c[3]), b.option.headerToolbar ? b.header.toolbar.css({ boxShadow: "0 0 1px " + c[3] + " inset", width: "calc(100% + 4px)", marginLeft: "-2px" }) : b.content.css({ borderTop: "1px solid " + c[3] }), "filled" === f[1] ? b.content.css({ backgroundColor: g, color: c[3] }) : "filledlight" === f[1] && b.content.css({ backgroundColor: c[1], color: "#000000" })) : jsPanel.themes.includes(f[0]) ? ([b, b.header, b.content, b.footer].forEach(function (b) {
      return a(b).addClass("jsPanel-theme-" + f[0]);
    }), "filled" === f[1] ? b.content.css("background", "").addClass("jsPanel-content-filled") : "filledlight" === f[1] && b.content.css("background", "").addClass("jsPanel-content-filledlight"), b.option.headerToolbar || b.content.css({ borderTop: "1px solid " + b.header.title.css("color") })) : (g = jsPanel.calcColors(f[0]), b.css("background-color", g[0]), a(".jsPanel-hdr *", b).css({ color: g[3] }), b.option.headerToolbar ? b.header.toolbar.css({ boxShadow: "0 0 1px " + g[3] + " inset", width: "calc(100% + 4px)", marginLeft: "-2px" }) : b.content.css({ borderTop: "1px solid " + g[3] }), "filled" === f[1] ? b.content.css({ "background-color": g[0], color: g[3] }) : "filledlight" === f[1] && b.content.css({ "background-color": g[1] }));(b.option.headerRemove || 1 > a(".jsPanel-hdr").length) && b.content.css("border", "none");b.option.headerToolbar && !b.option.headerRemove && jsPanel.toolbar(b, "header", b.option.headerToolbar);b.option.footerToolbar && jsPanel.toolbar(b, "footer", b.option.footerToolbar);b.option.content && (b.content.append(b.option.content), b.data("content", b.option.content));"string" === typeof b.option.contentAjax ? (b.option.contentAjax = { url: b.option.contentAjax, autoload: !0 }, jsPanel.ajax(b)) : a.isPlainObject(b.option.contentAjax) && jsPanel.ajax(b);a.isPlainObject(b.option.contentIframe) && (b.option.contentIframe.src || b.option.contentIframe.srcdoc) && jsPanel.iframe(b);b.option.paneltype.connector && jsPanel.addConnector(b);"string" === typeof b.option.contentSize && (g = b.option.contentSize.trim().split(" "), c = g.length, b.option.contentSize = { width: g[0], height: g[--c] });0 === b.option.contentSize.height && (b.option.contentSize.height = "0");b.content.css({ width: b.option.contentSize.width || a.jsPanel.defaults.contentSize.width, height: b.option.contentSize.height || a.jsPanel.defaults.contentSize.height });b.css({ width: function width() {
        return 0 < a(".jsPanel-content", b).length ? b.content.outerWidth() + "px" : b.option.contentSize.width || a.jsPanel.defaults.contentSize.width;
      }, zIndex: function zIndex() {
        jsPanel.setZi(b);
      } });b.content.css("width", "100%");jsPanel.position(b, b.option.position);b.data("status", "normalized");a(document).trigger("jspanelstatuschange", d);if (!b.option.paneltype && b.option.dblclicks) {
      if (b.option.dblclicks.title) b.header.headerbar.on("dblclick", function (a) {
        a.preventDefault();jsPanel.dblclickhelper(b.option.dblclicks.title, b);
      });if (b.option.dblclicks.content) b.content.on("dblclick", function (a) {
        a.preventDefault();jsPanel.dblclickhelper(b.option.dblclicks.content, b);
      });if (b.option.dblclicks.footer) b.footer.on("dblclick", function (a) {
        a.preventDefault();jsPanel.dblclickhelper(b.option.dblclicks.footer, b);
      });
    }"string" === typeof b.option.contentOverflow ? b.content.css("overflow", b.option.contentOverflow) : a.isPlainObject(b.option.contentOverflow) && b.content.css({ "overflow-y": b.option.contentOverflow.vertical || b.option.contentOverflow["overflow-y"], "overflow-x": b.option.contentOverflow.horizontal || b.option.contentOverflow["overflow-x"] });a.isPlainObject(b.option.draggable) ? b.draggable(b.option.draggable) : "disabled" === b.option.draggable ? (a(".jsPanel-hdr, .jsPanel-ftr", b).css("cursor", "default"), b.draggable({ disabled: !0 })) : a(".jsPanel-hdr, .jsPanel-ftr", b).css("cursor", "default");a.isPlainObject(b.option.resizable) ? b.resizable(b.option.resizable) : "disabled" === b.option.resizable && (b.resizable({ disabled: !0 }), a(".ui-icon-gripsmall-diagonal-se, .ui-resizable-handle.ui-resizable-sw", b).css({ "background-image": "none",
      "text-indent": -9999 }), a(".ui-resizable-handle", b).css({ cursor: "inherit" }));b.on("resize", function () {
      return b.contentResize();
    });!0 === b.option.rtl.rtl && (a(".jsPanel-hdr, .jsPanel-headerbar, .jsPanel-titlebar, .jsPanel-controlbar, .jsPanel-hdr-toolbar, .jsPanel-ftr", b).addClass("jsPanel-rtl"), [b.header.title, b.content, a("*", b.header.toolbar), a("*", b.footer)].forEach(function (a) {
      a.prop("dir", "rtl");b.option.rtl.lang && a.prop("lang", b.option.rtl.lang);
    }), a(".ui-icon-gripsmall-diagonal-se", b).css({ backgroundImage: "none",
      textIndent: -9999 }));"string" === typeof b.option.show && b.addClass(b.option.show).css("opacity", 1);b.header.title.empty().prepend(b.option.headerTitle);b[0].addEventListener("mousedown", function (c) {
      c = a(c.target).closest(".jsPanel").css("z-index");!b.hasClass("jsPanel-modal") && c < jsPanel.zi && (b.css("z-index", jsPanel.setZi(b)), jsPanel.resetZis());
    }, !1);jsPanel.updateCachedData(b);"string" === typeof b.option.setstatus && ("maximize smallify" === b.option.setstatus ? b.maximize().smallify() : b[b.option.setstatus]());
    "number" === typeof b.option.autoclose && 0 < b.option.autoclose && window.setTimeout(function () {
      b && b.close();
    }, b.option.autoclose);b[0].jspanel = { close: function close() {
        b.close();
      }, normalize: function normalize() {
        b.normalize();return b;
      }, maximize: function maximize() {
        b.maximize();return b;
      }, minimize: function minimize() {
        b.minimize();return b;
      }, smallify: function smallify() {
        b.smallify();return b;
      }, front: function front() {
        b.front();return b;
      }, closeChildpanels: function closeChildpanels() {
        b.closeChildpanels();return b;
      }, reposition: function reposition(a) {
        b.reposition(a);return b;
      }, resize: function resize(a, c) {
        b.resize(a, c);return b;
      }, contentResize: function contentResize() {
        b.contentResize();return b;
      }, contentReload: function contentReload() {
        b.contentReload();return b;
      }, headerTitle: function headerTitle(a) {
        b.headerTitle(a);return b;
      }, headerControl: function headerControl(a, c) {
        b.headerControl(a, c);return b;
      }, toolbarAdd: function toolbarAdd(a, c) {
        b.toolbarAdd(a, c);return b;
      }, noop: function noop() {
        return b;
      } };b.option.callback && a.isFunction(b.option.callback) ? b.option.callback.call(b, b) : a.isArray(b.option.callback) && b.option.callback.forEach(function (c) {
      a.isFunction(c) && c.call(b, b);
    });
    return b;
  };a.jsPanel.defaults = { autoclose: !1, callback: !1, container: "body", content: !1, contentAjax: !1, contentIframe: !1, contentOverflow: "hidden", contentSize: { width: 400, height: 200 }, custom: !1, dblclicks: !1, draggable: { handle: "div.jsPanel-hdr, div.jsPanel-ftr", opacity: .8 }, footerToolbar: !1, headerControls: { close: !1, maximize: !1, minimize: !1, normalize: !1, smallify: !1, controls: "all", iconfont: "jsglyph" }, headerRemove: !1, headerTitle: "jsPanel", headerToolbar: !1, id: function id() {
      return "jsPanel-" + (jsPanel.id += 1);
    }, load: !1, maximizedMargin: { top: 5,
      right: 5, bottom: 5, left: 5 }, onbeforeclose: !1, onbeforemaximize: !1, onbeforeminimize: !1, onbeforenormalize: !1, onclosed: !1, onmaximized: !1, onminimized: !1, onnormalized: !1, onbeforeresize: !1, onresized: !1, onsmallified: !1, onunsmallified: !1, paneltype: !1, position: { my: "center", at: "center" }, resizable: { handles: "n, e, s, w, ne, se, sw, nw", autoHide: !1, minWidth: 40, minHeight: 40 }, rtl: !1, setstatus: !1, show: !1, template: !1, theme: "default" };a.jsPanel.modaldefaults = { draggable: "disabled", headerControls: { controls: "closeonly" },
    position: { my: "center", at: "center" }, resizable: "disabled" };a.jsPanel.tooltipdefaults = { draggable: !1, headerControls: { controls: "closeonly" }, position: { fixed: !1 }, resizable: !1 };a.jsPanel.hintdefaults = { autoclose: 8E3, draggable: !1, headerControls: { controls: "closeonly" }, resizable: !1 };document.body.addEventListener("click", function (c) {
    1 > a(c.target).closest(".jsPanel").length && !a(c.target).hasClass("hasTooltip") && (jsPanel.closeTooltips(), a(".hasTooltip").removeClass("hasTooltip"));
  }, !1);
})(jQuery);

//# sourceMappingURL=jquery.jspanel.min-compiled.js.map