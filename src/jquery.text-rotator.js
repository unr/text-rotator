(function() {
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
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._count = 0;
        this._name = pluginName;
        this.element = $(element);
        this.strings = this.element.text().split(this.options.separator);
        this.init();
      }

      Plugin.prototype.init = function() {
        console.group("Plugin Initialized");
        console.log(this.strings);
        console.log("Replace original element contents, with strings");
        this.element.text(this.strings[0]);
        console.log("Call Rotate, via delay function");
        this.repeat(this.options.delay, this.rotate, this);
        return console.groupEnd();
      };

      Plugin.prototype.repeat = function(time, fn, el) {
        return setInterval(fn, time, el);
      };

      Plugin.prototype.rotate = function(plugin) {
        var _index;
        _index = $.inArray(plugin.element.text(), plugin.strings);
        if ((_index + 1) === plugin.strings.length) {
          _index = -1;
        }
        return plugin.element.text(plugin.strings[_index + 1]);
      };

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
