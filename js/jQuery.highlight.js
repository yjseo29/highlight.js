/**
 * highlight 0.0.1
 *
 * Licensed under MIT
 *
 * copyright 2016 yjteam
 * http://yjteam.co.kr
 *
 * github
 * https://github.com/yjseo29
 */

if (typeof jQuery === 'undefined') {
	throw new Error('JavaScript requires jQuery')
}

+function ($) {
	'use strict';
	var version = $.fn.jquery.split(' ')[0].split('.')
	if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
		throw new Error('JavaScript requires jQuery version 1.9.1 or higher')
	}
}(jQuery);

+function ($) {
	$.fn.highlight = function (word, options) {
		var option = $.extend({
			background: "yellow",
			color: "black",
			bold: false,
			ignoreCase: true
		}, options);
		var findCnt = 0;

		if(this.length == 0){
			throw new Error('Node was not found')
		}
		this.each(function() {
			var content = $(this).html();
			var re = new RegExp(word,option.ignoreCase == true ? "gi":"g");

			var $el = $('<span style="color:'+option.color+';">'+word+'</span>');
			if(option.bold){
				$el.css("font-weight", "bold");
			}
			if(option.background != ""){
				$el.css("background", option.background);
			}

			$(this).html(content.replace(re, function(){
				findCnt++;
				return $el.get(0).outerHTML;
			}));

		});
		return findCnt;
	}
}(jQuery);