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
		constructor: (@element, options) ->
			# Set up default strings on init
			@options = $.extend {}, defaults, options
			@_defaults = defaults
			@_name = pluginName
			@init() # now we have access to the above

		init: ->
			console.group "Plugin Initialized"

			# Capture the .text() of @element as _originalString
			console.log "got text"

			# Explode _original as _strings[]
			console.log "got text"

			# Set Timeout call to @rotate()
			console.log "got text"

			console.groupEnd()


		yourOtherFunction: ->
			# some logic

	# A really lightweight plugin wrapper around the constructor,
	# preventing against multiple instantiations
	$.fn[pluginName] = (options) ->
		@each ->
			if !$.data(@, "plugin_#{pluginName}")
				$.data(@, "plugin_#{pluginName}", new Plugin(@, options))
