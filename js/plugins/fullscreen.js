//=============================================================================
// Fullscreen.js
//=============================================================================

(function() {
    function extend(obj,name,func){
	var orig=obj.prototype[name]
	obj.prototype[name]= function(){
		orig.call(this)
		func.call(this)
	}
}

extend(Scene_Boot, 'start', function(){
	Graphics._switchFullScreen();
})
})();