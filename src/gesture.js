;(function(win, lib) {
	var $ = win['Zepto'];

	lib.gesture = function() {
		$(document.body).html('<h1>lib.<span>gesture</span></h1>');
	}
})(window, window['lib'] || (window['lib'] = {}))