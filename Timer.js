var Timer = (function Timer() {

    function Constructor () {
		return this;
	}	
	
    Constructor.prototype.normalize = function (value) {
	    if (value < 10) {
		    value = "0" + value;
		}
	    return value;
	};
	
    return Constructor;
})();