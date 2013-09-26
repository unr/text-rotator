/*
 *  jQuery Text Rotator - v0.0.1
 *  Super simple semantic text rotator.
 *  https://github.com/unr/text-rotator/
 *
 *  Made by Paul Morrison
 *  Under MIT License
 */
(function() {
  var DEBUG;

  if (typeof DEBUG === "undefined") {
    DEBUG = true;
  }

  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = "textRotator";
    defaults = {
      animation: "show",
      separator: ",",
      delay: 3000
    };
    Plugin = (function() {
      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
      }

      Plugin.prototype.init = function() {
        DEBUG && console.group("Plugin Initialized");
        DEBUG && console.log("got text");
        DEBUG && console.log("got text");
        DEBUG && console.log("got text");
        return DEBUG && console.groupEnd();
      };

      Plugin.prototype.yourOtherFunction = function() {};

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

}).call(this);
