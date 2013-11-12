//@require helloworld

;(function(win, lib){
	var $ = win['Zepto'];

	$(function() {
		lib.gesture();
	});
})(window, window['lib'] || (window['lib'] = {}));