(function(a){a.log=function(){if(window.console&&window.console.log){console.log.apply(window.console,arguments)}};a.fn.log=function(){a.log(this);return this}})(jQuery);

(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=true,g=0,h=0;b=a.event.fix(c);b.type="mousewheel";if(c.wheelDelta){e=c.wheelDelta/120}if(c.detail){e=-c.detail/3}h=e;if(c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS){h=0;g=-1*e}if(c.wheelDeltaY!==undefined){h=c.wheelDeltaY/120}if(c.wheelDeltaX!==undefined){g=-1*c.wheelDeltaX/120}d.unshift(b,e,g,h);return(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks){for(var c=b.length;c;){a.event.fixHooks[b[--c]]=a.event.mouseHooks}}a.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var a=b.length;a;){this.addEventListener(b[--a],d,false)}}else{this.onmousewheel=d}},teardown:function(){if(this.removeEventListener){for(var a=b.length;a;){this.removeEventListener(b[--a],d,false)}}else{this.onmousewheel=null}}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)

$(document).ready(function () {
	
	$('.content1').scrollr();
	$('.content2').scrollr();
	$('.content3').scrollr();
 
});
