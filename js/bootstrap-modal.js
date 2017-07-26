/* =========================================================
 * bootstrap-modal.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#modal
 * =========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function(t){"use strict";function i(){var t=this,i=setTimeout(function(){t.$element.unbind(a),n.call(t)},500);this.$element.one(a,function(){clearTimeout(i),n.call(t)})}function n(t){this.$element.hide().trigger("hidden"),e.call(this)}function e(i){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.settings.backdrop){var e=t.support.transition&&n;this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),"static"!=this.settings.backdrop&&this.$backdrop.click(t.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),e?this.$backdrop.one(a,i):i()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a,t.proxy(s,this)):s.call(this)):i&&i()}function s(){this.$backdrop.remove(),this.$backdrop=null}function o(){var i=this;this.isShown&&this.settings.keyboard?t(document).bind("keyup.modal",function(t){27==t.which&&i.hide()}):this.isShown||t(document).unbind("keyup.modal")}var a;t(document).ready(function(){t.support.transition=function(){var t=(document.body||document.documentElement).style;return void 0!==t.transition||void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.MsTransition||void 0!==t.OTransition}(),t.support.transition&&(a="TransitionEnd",t.browser.webkit?a="webkitTransitionEnd":t.browser.mozilla?a="transitionend":t.browser.opera&&(a="oTransitionEnd"))});var r=function(i,n){return this.settings=t.extend({},t.fn.modal.defaults,n),this.$element=t(i).delegate(".close","click.modal",t.proxy(this.hide,this)),this.settings.show&&this.show(),this};r.prototype={toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var i=this;return this.isShown=!0,this.$element.trigger("show"),o.call(this),e.call(this,function(){var n=t.support.transition&&i.$element.hasClass("fade");i.$element.appendTo(document.body).show(),n&&i.$element[0].offsetWidth,i.$element.addClass("in"),n?i.$element.one(a,function(){i.$element.trigger("shown")}):i.$element.trigger("shown")}),this},hide:function(e){if(e&&e.preventDefault(),!this.isShown)return this;return this.isShown=!1,o.call(this),this.$element.trigger("hide").removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?i.call(this):n.call(this),this}},t.fn.modal=function(i){var n=this.data("modal");return n?!0===i?n:("string"==typeof i?n[i]():n&&n.toggle(),this):("string"==typeof i&&(i={show:/show|toggle/.test(i)}),this.each(function(){t(this).data("modal",new r(this,i))}))},t.fn.modal.Modal=r,t.fn.modal.defaults={backdrop:!1,keyboard:!1,show:!1},t(document).ready(function(){t("body").delegate("[data-controls-modal]","click",function(i){i.preventDefault();var n=t(this).data("show",!0);t("#"+n.attr("data-controls-modal")).modal(n.data())})})}(window.jQuery||window.ender);