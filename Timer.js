var Timer = (function Timer(timer_el) {

    function Constructor (timer_el) {
	
		return this;
	}	
	
	Constructor.prototype.render = function(){};
    Constructor.prototype.normalize = function (value) {
	    if (value < 10) {
		    value = "0" + value;
		}
	    return value;
	};
	
    return Constructor;
})();