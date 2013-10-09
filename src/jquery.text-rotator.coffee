# Wrapper
do ($ = jQuery, window, document) ->

	# Defaults
	pluginName = "textRotator"
	defaults =
		animation: "show"
		separator: ","
		delay: 3000

	# The actual plugin constructor
	class Plugin
		constructor: (element, options) ->
			# Set up default strings on init
			@options = $.extend {}, defaults, options
			@_defaults = defaults
			@_count = 0 #starts on first string, change for later string
			@_name = pluginName
			@element = $(element)

			# Get our array of strings
			@strings = @element.text().split(@options.separator)

			@init() # now we have access to the above

		init: ->
			console.group "Plugin Initialized"
			console.log @strings

			console.log "Replace original element contents, with strings"
			@element.text @strings[0]

			console.log "Call Rotate, via delay function"
			@repeat @options.delay, @rotate, @

			console.groupEnd()

		# Rewrite order of operations for setTimeout
		# Idea: http://evanhahn.com/smoothing-out-settimeout-in-coffeescript
		repeat: (time, fn, el) ->
			setInterval fn, time, el

		# We lose access to our plugin ref's, when rotating
		# So, we pass the 'plugin' instance here
		rotate: (plugin) ->
			# Determine the position of the current string
			_index = $.inArray(plugin.element.text(), plugin.strings)

			# Increment it, reset if incorrect
			_index = -1  if (_index + 1) is plugin.strings.length

			plugin.element.text plugin.strings[_index+1]


	# A really lightweight plugin wrapper around the constructor,
	# preventing against multiple instantiations
	$.fn[pluginName] = (options) ->
		@each ->
			if !$.data(@, "plugin_#{pluginName}")
				$.data(@, "plugin_#{pluginName}", new Plugin(@, options))
